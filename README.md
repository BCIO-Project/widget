# BCIO

This is the Branded Content Inventory Optimization project, which is a content recommendation app and it's divided in four parts:<br>

* [Backoffice-API](https://github.com/BCIO-Project/backoffice-api)
* [Backoffice-front](https://github.com/BCIO-Project/backoffice-front)
* [Recommendation-API](https://github.com/BCIO-Project/recommendation-api)
* **Widget Script (Module Web)**

You are currently in the **widget** part made with vanilla Javacript. To see the project's global information read down below 

# BCIO PROJECT INSTALL

Bcio project has design to deploy in a GCP project. This guide will teach you how install all the components to have the BCIO solution working. There are 3 parts in this guide


1. Platform installation. Using terraform we will set all the infrastrucure necessary
   1. Create project
   2. Activate GCP APIs
   3. Install terraform
   4. Plan and Apply
2. CICD settings x3 
      1. backoffice-api
      2. backoffice-front
      3. recommendation-api
3. Widget Installation
4. Technology Stack

## Platform installation

### Create GCP project

To execute the BCIO solution you must have a GCP project. If you have not an account you can start [here](https://cloud.google.com/)

### Enable GCP APIs

Enter in the project and open the cloud shell (icon in upper right part). One you are in the shell flollow this steps:

1.  Clone this repo

    ```$ git clone hhttps://github.com/BCIO-Project/widget.git ```
2.  Ensure we work in the correct project 
   
    ```$ gcloud config set project my-project-id   ```
3.  Enable the APIs (Be pacient, can take time...)

    ``` $ gcloud services enable vpcaccess.googleapis.com  redis.googleapis.com  sqladmin.googleapis.com appengine.googleapis.com```

TODO, abrir a todas las redes, crear usuario con password


### Terraform


Using docker to help us:

    $ docker run -v $HOME/bin:/software sethvargo/hashicorp-installer terraform 0.11.10

    $ sudo chown -R $(whoami):$(whoami) $HOME/bin/

    $ export PATH=$HOME/bin:$PATH

    $ terraform -v
  
Go to the terraform folder inside the clone repo

    $ cd bcio-widget/terraform

Edit in ```  main.th ``` projectId variable. Check other vars to ensure are Ok  

Inicialize terraform and install dependences

    $ terraform init //npm i 

Run plan to plan the installation

    $ terraform plan -out "bcio.out"   

Apply the changes 

    $ terraform apply "bcio.out"   

When the installation ends you will see on the shell some ENV VARS you will need soon, please write them down.
 

### Upload a default test code to default service

Go to next dir in the repo

    $ cd gae-default-service

Deploy the example code

    $ gcloud app deploy


### Add correct role to img bucket

There is a bug in terraform that only add legacy reader role to our bucker, to work properly you should manually look for the bucket in cloud storage and add to all user the role of storage object viewer.

### Add user and network to SQL instance

Now you need to go to set the user and password for the SQL user in the GC

## BCIO WIDGET

Bcio widget is one of the two parts software which allows to rate posted/published ads and replace them accordingly.

|Property|Value|
|--------|-----|
|**pageID**| Represents the actual view being <br> rendered, it's needed to know how many ad's spots are|
|**parentSelector**| it's the css class in the parentNode of the ad to be replaced|
|**api**|URL of the backoffice api to make all the request|

### Installation

you will need import two scripts in the ```<head>``` tag which are;

```
<script type="text/javascript" src="/static/bcio-client.js" ></script>
<script type="text/javascript" src="/static/bcio-config.js" defer></script>
```

the ```bcio-config.js``` file ```(name is optional)``` have the init values of the widget. It looks like this:

```
(function(window){
    var options = {
        pageID: 1,
        parentSelector: '.articulo',
        api: 'https://PROJECT_NAME.appspot.com'
    }
    BCIO(options);
})(window)
```

### How does it work?

Once the widget is initialized, it'll make a request to the api URL passed in its params, getting all the ads available for the pageID set. Right after it gets the ads it'll check if the user has visited the site previously checking a cookie that was set before in order to show the ads related to the user's interest, otherwise it will show random ads based on the lowest ad's score clicked



## Technology Stack (Main components)

### Back office - Front: 

- React: A JavaScript library for building user interfaces
- Jest: Al JavaScript Testing Framework with a focus on simplicity 
- Puppeteer. Headless Chrome Node.js API
- Redux.  Predictable state container for JavaScript apps

### Back office - API / recommendation API: 

- Nodejs: A JavaScript runtime built on Chrome's V8 JavaScript engine
- Jest: A JavaScript Testing Framework with a focus on simplicity 
- Express: Fast, unopinionated, minimalist web framework for Node.js
- Passport: A authentication middleware for Node.js
- Sequelize: Sequelize is a promise-based Node.js ORM 


## GCP Components description

App Engine is the fully managed serverless application platform of Google Cloud Platform and we use as the main process component to execute our code for back office and the recommendation API. The location of this service can not be changed after it is selected so is important double check it to select a zone with VPC connector service. There are 3 services running on App Engine Standard:
Recommendation API: This microservice provides the needed information for the widget.
Back office Front: Serving the static code of the frontend
Back office API: The backend of the backoffice. This component will attend massive requests 

### Cloud SQL (Postgres). 
Cloud SQL is the managed service of GCP for SQL database like MySql or Postgres. No ops service with automated backups. This database will be used by the back office so don’t need a big instance.

### VPC (Default). 
Virtual Private Cloud for GCP services. The redis and postgres bd will run inside the vpc to block the access from outside. This VPC is created with the project so no manual action is required.
### Memorystore (Redis). 
Cloud Memorystore for Redis provides a fully managed in-memory data store service built on scalable, secure, and highly available infrastructure managed. We use it as a cache to keep the data of the campaigns and users ready to serve to the request from the widget. The Data team will upload the users result of the model in order to show the best content for each user.

### VPC Connector
App Engine → VPC. This connector allows App Engine process to connect to the elements in the VPC like the Redis database.

### PubSub 
Is shorthand for publish/subscribe messaging, an asynchronous communication method in which messages are exchanged between applications without knowing the identity of the sender or recipient. Serverless product you pay for use
#### RefreshCache. 
In this topic the Scheduler service will publish a new message every 14 minutes. The backoffice service is subscribed and will update the cache in the redis with a TTL of 1200 seconds (20 minutes)
#### RefreshCampaigns. 
In this topic the Scheduler service will publish a new message every 15 minutes. The backoffice service is subscribed and will update the campaigns with the data of the events.
#### DraftReview. 
In this topic the Scheduler service will publish a new message every day at midnight. The backoffice service is subscribed and will check the next day campaign in draft to send notification if necessary.

#### BigQuery 
Is a serverless, highly-scalable, and cost-effective cloud data warehouse with an in-memory BI Engine and machine learning built in.
Event Dataset
Event table.
Error Dataset
Error table. 


### Cloud scheduler 
Is a fully managed enterprise-grade cron job scheduler. It allows you to schedule virtually any job, including batch, big data jobs, cloud infrastructure operations, and more.

#### Publish refreshCache. 
Each 14 minutes publish in the refreshCache topic 
#### Publish refreshCamapaigns. 
Each 15 minutes publish in the refreshCamapaigns topic.
#### Publish draftReview. 
Each midnight publish in drafReview topic.

### Managing the Database with ORM.

The back office API uses Sequelize as ORM. So we must use it for access and evolve the database. The CLI is called by npx and helps using Sequelize.

Model generation example (Create the initial migration and the model file):

```
npx sequelize-cli model:generate --name Page --attributes name:string
```

Migration generation example:
```
npx sequelize migration:create --name add_slug_to_page
```
Execute all the pending migrations:
```
npx sequelize-cli db:migrate
```
Undo the last migration:
```
npx sequelize-cli db:migrate:undo
```
Create a seed 
```
npx sequelize-cli seed:generate --name demo-user
```
Apply all the seeds
```
npx sequelize-cli db:seed:all
```
Apply one seed
```
npx sequelize-cli db:seed --seed ./path_to_file
```
Undo one seed
```
npx sequelize-cli db:seed:undo --seed ./path_to_file
```
### Run locally

This project is full cloud and uses several managed cloud services like redis or bigquery, you can run locally to code fast. For use the cloud service first you should set the env var with a service account with the needed roles, please follow this doc: https://cloud.google.com/docs/authentication/getting-started

Let’s see how to do this in the different services:

#### Back office front end: 
In the root folder there is a file called .env that contains the api url REACT_APP_API_BASE=http://localhost:8080/api. You can start the dev environment with the:

```
npm run dev
```

#### Back office API: 
In the file config/dev/.env you can find the vars for local development. Once modified you can start the node process with:
```
npm start
```

#### Recommendation API: 
In the file config/dev/.env you can find the vars for local development. Once modified you can start the node process with:
```
npm start
```
