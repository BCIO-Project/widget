/*To use this file, create a project in GCP and open the cloud shell
Lets install terraform using docker to help us
$ docker run -v $HOME/bin:/software sethvargo/hashicorp-installer terraform 0.11.10
$ sudo chown -R $(whoami):$(whoami) $HOME/bin/
$ export PATH=$HOME/bin:$PATH
lets activate the apis for the product we need
$ gcloud services enable vpcaccess.googleapis.com
$ gcloud services enable redis.googleapis.com
To install the resources gcp and gcp beta
$ terraform init
To see the things to install, remember you must be in the directory of this file
$ terraform plan 
to install
$ terraform apply
*/

#Variables
variable "projectId" {
  type = "string"
  default = "example-project-id"
}

variable "env" {
  type = "string"
  default = "int"
}
variable "backendApiUrl" {
  type = "string"
  default = "https://backoffice-api-branch-example-project-id.appspot.com"
}


variable "regionGAE" {
  type = "string"
  default = "europe-west"
}
variable "region" {
  type = "string"
  default = "europe-west1"
}


#CREATE APP ENGINE app in the correct location to use the Serverless VCP connector. At the moment of writting this file only can be in us-central, us-east, europe-west
resource "google_app_engine_application" "app" {
    project = "${var.projectId}"
    location_id = "${var.regionGAE}"
}
#CREATE SA for CICD
resource "google_service_account" "cicd-sa" {
    project = "${var.projectId}"
    account_id   = "cicd-sa"
    display_name = "A service account for cicd"
}

#ADD ROLES TO GAE_SA 

resource "google_project_iam_member" "createTokenForGAEsa" {
  project = "${var.projectId}"
  role    = "roles/iam.serviceAccountTokenCreator"

  member = "serviceAccount:${var.projectId}@appspot.gserviceaccount.com",  
}
resource "google_project_iam_member" "editorForGAEsa" {
  project = "${var.projectId}"
  role    = "roles/editor"

  member = "serviceAccount:${var.projectId}@appspot.gserviceaccount.com",
  
}

#ADD ROLES TO CICD_SA

#App Engine Admin

resource "google_project_iam_member" "addCICDsaBuildEditorRole" {
  project = "${var.projectId}"
  role    = "roles/appengine.appAdmin"
  member =  "serviceAccount:cicd-sa@${var.projectId}.iam.gserviceaccount.com",
}

#Compute Network Admin

resource "google_project_iam_member" "addCICDsaBuildEditorRole" {
  project = "${var.projectId}"
  role    = "compute.networkAdmin"
  member =  "serviceAccount:cicd-sa@${var.projectId}.iam.gserviceaccount.com",
}

#VPC Admin

resource "google_project_iam_member" "addCICDsaBuildEditorRole" {
  project = "${var.projectId}"
  role    = "roles/vpcaccess.admin"

  member =  "serviceAccount:cicd-sa@${var.projectId}.iam.gserviceaccount.com",
}


#Cloud Build Editor 
resource "google_project_iam_member" "addCICDsaBuildEditorRole" {
  project = "${var.projectId}"
  role    = "roles/cloudbuild.builds.editor"

  member =  "serviceAccount:cicd-sa@${var.projectId}.iam.gserviceaccount.com",
}

#Cloud SQL Admin 
resource "google_project_iam_member" "addCICDsaSqlAdminRole" {
  project = "${var.projectId}"
  role    = "roles/cloudsql.admin"

  member =  "serviceAccount:cicd-sa@${var.projectId}.iam.gserviceaccount.com",
}

#Service Account User 
resource "google_project_iam_member" "addCICDsaAccountUserRole" {
  project = "${var.projectId}"
  role    = "roles/iam.serviceAccountUser"

  member =  "serviceAccount:cicd-sa@${var.projectId}.iam.gserviceaccount.com",
}

#Storage Admin 
resource "google_project_iam_member" "addCICDsaStorageAdminRole" {
  project = "${var.projectId}"
  role    = "roles/storage.admin"

  member =  "serviceAccount:cicd-sa@${var.projectId}.iam.gserviceaccount.com",
}


#Viewer
resource "google_project_iam_member" "addCICDsaViewerRole" {
  project = "${var.projectId}"
  role    = "roles/viewer"

  member =  "serviceAccount:cicd-sa@${var.projectId}.iam.gserviceaccount.com",
}


#PUBSUB topics


resource "google_pubsub_topic" "draftReview" {
  name = "draftReview"
  project                     = "${var.projectId}"
}

resource "google_pubsub_topic" "error" {
  name = "error"
  project                     = "${var.projectId}"
}

resource "google_pubsub_topic" "event" {
  name = "event"
  project                     = "${var.projectId}"
}

resource "google_pubsub_topic" "refreshcacheactivecampaigns" {
  name = "refreshcacheactivecampaigns"
  project                     = "${var.projectId}"
}

resource "google_pubsub_topic" "refreshcampaigns" {
  name = "refreshcampaigns"
  project                     = "${var.projectId}"
}

#vpc connector
provider "google-beta" {}

resource "google_vpc_access_connector" "vpc-redis" {
    project       = "${var.projectId}"
    name          = "vpc-redis"
    provider      = "google-beta"
    region        = "${var.region}"
    ip_cidr_range = "10.8.0.0/28"
    network       = "default"
}


#SCHEDULER JOB draftReview
resource "google_cloud_scheduler_job" "draftReview" {
  name          = "draftReview"
  description   = "draftReview"
  schedule      = "0 0 * * *"
  region        = "${var.region}"
  project       = "${var.projectId}"
  time_zone     = "Europe/Madrid"

  pubsub_target {
    topic_name = "${google_pubsub_topic.draftReview.id}"
    data = "${base64encode("test")}"
  }
}

#SCHEDULER JOB refreshcampaigns
resource "google_cloud_scheduler_job" "refreshcampaigns" {
  name          = "refreshcampaigns"
  description   = "refreshcampaigns"
  schedule      = "*/15 * * * *"
  region        = "${var.region}"
  project       = "${var.projectId}"
  time_zone     = "Europe/Madrid"

  pubsub_target {
    topic_name = "${google_pubsub_topic.refreshcampaigns.id}"
    data = "${base64encode("test")}"
  }
}

#SCHEDULER JOB refreshcacheactivecampaigns
resource "google_cloud_scheduler_job" "refreshcacheactivecampaigns" {
  name          = "refreshcacheactivecampaigns"
  description   = "refreshcacheactivecampaigns"
  schedule      = "*/14 * * * *"
  region        = "${var.region}"
  project       = "${var.projectId}"
  time_zone     = "Europe/Madrid"

  pubsub_target {
    topic_name = "${google_pubsub_topic.refreshcacheactivecampaigns.id}"
    data = "${base64encode("test")}"
  }
}


#CLOUD SQL POSTGRES
resource "google_sql_database_instance" "bcio-db" {
    project             = "${var.projectId}"
    name                = "bcio-db-${var.env}"
    database_version    = "POSTGRES_11"
    region              = "${var.region}"
    settings {
        tier = "db-custom-1-3840"
    }
}


#MEMORYSTORE REDIS 
resource "google_redis_instance" "bcio-cache" {
    project              = "${var.projectId}"
    name                 = "bcio-cache-${var.env}"
    memory_size_gb       = 1
    region               = "${var.region}"
}

#StorageForImages
resource "google_storage_bucket" "image-store" {
    project                     = "${var.projectId}"
    name                        = "${var.projectId}-images"
    location                    = "EU"
    cors {
        origin = ["*"]
        method = ["*"]
        max_age_seconds= 3600
        response_header= ["Content-Type"]
    }
}

#Make public read for storage
resource "google_storage_bucket_access_control" "public_rule" {
  bucket = "${google_storage_bucket.image-store.name}"
  role   = "READER"
  entity = "allUsers"
}



#BIGQUERY Datasets

resource "google_bigquery_dataset" "bcio_event_data" {
  dataset_id                  = "bcio_event_data"
  friendly_name               = "bcio_event_data"
  description                 = "Dataset for bcio event data"
  location                    = "EU"
  project                     = "${var.projectId}"
}

resource "google_bigquery_dataset" "bcio_error_data" {
  dataset_id                  = "bcio_error_data"
  friendly_name               = "bcio_error_data"
  description                 = "Dataset for bcio error data"
  location                    = "EU"
  project                     = "${var.projectId}"
}

#BIGQUERY Tables

resource "google_bigquery_table" "events" {
  project                     = "${var.projectId}"
  dataset_id = "${google_bigquery_dataset.bcio_event_data.dataset_id}"
  table_id   = "events"

  time_partitioning {
    type = "DAY"
  }

  labels = {
    env = "${var.env}"
  }
  schema = <<EOF
    [
    {
        "name": "messageId",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "messageId"
    },
    {
        "name": "eventType",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "eventType"
    },
    {
        "name": "campaignId",
        "type": "INTEGER",
        "mode": "NULLABLE",
        "description": "campaignId"

    },
    {
        "name": "userId",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "userId"
    },
    {
        "name": "offerId",
        "type": "INTEGER",
        "mode": "NULLABLE",
        "description": "offerId"
    },
    {
        "name": "impressionUUId",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "impressionUUId"
    },
    {
        "name": "domain",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "domain"
    },
    {
        "name": "ip",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "ip"
    },
    {
        "name": "createdAt",
        "type": "DATETIME",
        "mode": "NULLABLE",
        "description": "createdAt"
    }
    ]
    EOF
}

resource "google_bigquery_table" "errors" {
  project                     = "${var.projectId}"
  dataset_id = "${google_bigquery_dataset.bcio_error_data.dataset_id}"
  table_id   = "errors"

  time_partitioning {
    type = "DAY"
  }

  labels = {
    env = "${var.env}"
  }
  schema = <<EOF
    [
    {
        "name": "messageId",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "messageId"
    },
    {
        "name": "errorType",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "errorType"
    },
    {
        "name": "campaignId",
        "type": "INTEGER",
        "mode": "NULLABLE",
        "description": "campaignId"

    },
    {
        "name": "description",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "description"
    },
    {
        "name": "userId",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "userId"
    },
    {
        "name": "domain",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "domain"
    },
    {
        "name": "ip",
        "type": "STRING",
        "mode": "NULLABLE",
        "description": "ip"
    },
    {
        "name": "createdAt",
        "type": "DATETIME",
        "mode": "NULLABLE",
        "description": "createdAt"
    }
    ]
    EOF
}

#subscriptions


resource "google_pubsub_subscription" "draftReview" {
    project = "${var.projectId}"
    name  = "draftReview"
    topic = "${google_pubsub_topic.draftReview.name}"

    ack_deadline_seconds = 20

    push_config {
        push_endpoint = "${var.backendApiUrl}/api/cron/draftReview"

    }
}

resource "google_pubsub_subscription" "refreshcampaigns" {
    project = "${var.projectId}"
    name  = "refreshcampaigns"
    topic = "${google_pubsub_topic.refreshcampaigns.name}"

    ack_deadline_seconds = 20

    push_config {
        push_endpoint = "${var.backendApiUrl}/api/cron/refreshcampaigns"

    }
}
resource "google_pubsub_subscription" "refreshcacheactivecampaigns" {
    project = "${var.projectId}"
    name  = "refreshcacheactivecampaigns"
    topic = "${google_pubsub_topic.refreshcacheactivecampaigns.name}"

    ack_deadline_seconds = 20

    push_config {
        push_endpoint = "${var.backendApiUrl}/api/cron/refreshcacheactivecampaigns"

    }
}


#PRINT ENV for CICD
output "instance_ips" {
  value = ["PLEASE USE THESE ENV_VARS: ",
            "DB_HOST_INT: ","${google_sql_database_instance.bcio-db.public_ip_address}",
            "REDIS_HOST_INT:","${google_redis_instance.bcio-cache.host}",
            "BUCKET_NAME_INT:","${google_storage_bucket.image-store.name}",
            "DB_INSTANCE_INT:", "${google_sql_database_instance.bcio-db.name}"
  
  ]
}