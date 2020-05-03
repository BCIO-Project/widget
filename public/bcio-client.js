(function (window) {
    function init(options) {
        const _debug = options.debug
        const _pageID = options.pageID || 40;
        const _parentSelector = options.parentSelector|| 'itemid';
        const _compensationIndex = options.compensationIndex || 0.5;
        const _api = options.api || "http://localhost:8000"; 
        let _campaigdata;
        let _css_classes;
        let userdata;
        let assignationType = "none";
        let bcioStatus = getCookie("bcioStatus");

        function log(msg) {
            if (_debug) { 
              console.log(msg);
            }
        }
        //assumtioms
        //The offers in the campaignsdata has been sorted less complete to most complete
        //the tags for user data has been sorted more score to less score
        var t0 = performance.now();
        log('performance', t0)

        //start
        //Loading campaigns json
        const firstRequestParams = {
            url: _api + '/campaign/active/' + _pageID
        }
        getJSON(firstRequestParams,
            function (err, data) {
                if (!!err || !data)
                    return
                _campaigdata = data;
                _css_classes = data.classes
                if (bcioStatus !== "") {
                    log("Found cookie status with user id: ", bcioStatus);
                    smartAssignation(bcioStatus);
                } else {
                    log("Cookie status not found");
                    var bcioFirstVisit = getCookie("bcioFirstVisit");
                    if (bcioFirstVisit !== "") {
                        log("Found firstVisit cookie");
                        var bcioFirstVisitDate = new Date(parseInt(bcioFirstVisit));
                        log("bcioFirstVisitDate", bcioFirstVisitDate);
                        //get today's time at 4 UTC
                        var targetTime = new Date().setUTCHours(4, 0, 0)
                        //ONLY DEBUG DELAYS TARGET ONE DAY
                        //var targetTime = new Date().setUTCDate(new Date().getUTCDate()+1)
                        if (Date.parse(bcioFirstVisitDate) < targetTime) {
                            log("It's from yesterday");
                            log("save user cookie")
                            bcioStatus = uuidv4()
                            setCookie("bcioStatus", bcioStatus, 10 * 365);
                            smartAssignation(bcioStatus);
                        } else {
                            log("It's from today");
                            fastAssignation();
                        }
                    } else {
                        log("Save cookie with date")
                        setCookie("bcioFirstVisit", Date.now(), 10 * 365);
                        fastAssignation();
                    }
                }
            }
        );
        function fastAssignation() {
            log("Starting fast assignation");
            assignationType = "fast";
            _campaigdata.campaigns.forEach(function (campaign) {
                //if the first is completed all offers are completed
                if (campaign.offers.length && isComplete(campaign.offers[0])) {
                    //all complete, display random offer
                    impressOffer(campaign, campaign.offers[Math.floor(Math.random() * campaign.offers.length)]);
                } else {
                    impressOfferIncomplete(campaign)
                }
            });
            var t1 = performance.now();
            log("Has taken" + (t1 - t0) + " milliseconds. Fast");
        }

        function smartAssignation(userId) {
            assignationType = "smart";
            log("Starting smart assignation");
            //get user data
            const params = {
                //url: _api + '/user/'+ userId,
                url: _api + '/user/'+ userId,
            }
            getJSON(params,
                function (err, data) {
                    if (!!err || !data) {
                        fastAssignation()
                    } else {
                        userdata = data;
                        log("userdata", userdata);
                        _campaigdata.campaigns.forEach(function(campaign){
                            const areOffersCompleted = isComplete(campaign.offers[0]);
                            
                            if(areOffersCompleted || !userdata){
                                impressOffer(campaign, campaign.offers[Math.floor(Math.random() * campaign.offers.length)]);
                            } 
                            if(!!userdata){
                                const customOffer = userdata[0][_pageID][campaign.id].map(function(id){
                                    return campaign.offers.filter(function(offer){
                                        return offer.id === parseInt(Object.keys(id)[0]) && !isComplete(offer)
                                    })
                                })
                                if(customOffer.flat().length){
                                    impressOffer(campaign, customOffer.flat()[0])
                                }else{
                                    impressOfferIncomplete(campaign)
                                }
                            }
                        })
                    }
                    var t1 = performance.now();
                    log("Has taken " + (t1 - t0) + " milliseconds. Smart");
                }
            );
        }
        function isComplete(offer){
            return offer.goal <= offer.clicks
        }
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        function uuidv4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        /**
         * function to make requests
         *
         * @param {*} options
         * @param {*} callback
         */
        function getJSON(options, callback) {
            const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();
            const method = options.method ? options.method : 'GET';
            const url = options.url || _api;
            const body = options.body || '';
            const header = options.header || '';


            xhr.open(method, url, true);
            xhr.responseType = 'json';
            xhr.onreadystatechange = function() { // Call a function when the state changes.
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    callback(null, xhr.response);
                }
            }
            if(!!header){
                for(let key in header){
                    xhr.setRequestHeader(key, header[key])
                }
            }
            xhr.send(body);
        };
        /**
         * return the url to be look up in the DOM
         *
         * @param {*} campaign
         * @returns
         */
        function getURLCampaign(campaign){
            return campaign.offers.filter(offer => offer.defaultOffer === true)[0].offerUrl
        }
        /**
         * sets the props from an offer to the template and add the listeners
         *
         * @param {*} campaign
         * @param {*} offer
         */
        function impressOffer(campaign, offer) {
            //look the offer in the static content and changes it for the correct one
            const spot = document.querySelector('a[href="'+ getURLCampaign(campaign) +'"]');
            if(!!spot){
                const impressUUID = uuidv4();
                const parent = spot.closest(_parentSelector);
                const template = getTemplate(parent);
                offer.image = setImage(template.imageSize, offer.image);
                offer.width = template.width;
                offer.height = template.height;
                offer.css_size = template.cssSize;
                parent.innerHTML = render(template.template, offer);
                setListeners(parent, offer, campaign, impressUUID);
                log("assignationType", assignationType);
                sendImpress(campaign.id, offer.id, impressUUID);
            }else{
                // TODO: return error - URL hasn't been found
                const params = {
                    type: 'error',
                    body:{
                        errorType: 'CampaignNotFound',
                        campaignId: campaign.id,
                        description: `the url ${getURLCampaign(campaign)} is not in the page`,
                        userId: bcioStatus
                    }
                }
                sendEvent(params)
            }
        }
        /**
         * sets uuid attributes and listeners to each anchor in the template
         *
         * @param {*} htmlElement
         */
        function setListeners(htmlElement, offer, campaign, impress){
            Array.from(htmlElement.querySelectorAll('a')).forEach(function(link){
                //Setting data attributes to be pass on click event
                link.setAttribute('data-user', bcioStatus);
                link.setAttribute('data-impress', impress);
                link.setAttribute('data-offer', offer.id);
                link.setAttribute('data-campaign', campaign.id);
                link.addEventListener('click', sendEvent)
            })
        }
        /**
         * sends an uuid to identify which add has been clicked
         *
         * @param {*} ev
         */
        function sendEvent(ev){
            const params = {
                url: _api + '/event',
                method: "POST",
                body: '',
                header: {
                    "Content-Type": "application/json"
                }
            }
            if(ev.type === "error"){
                params.url = _api + '/error'
                params.body = JSON.stringify(ev.body);
                getJSON(params, function(err, data){
                    if(err) log(err);
                    log(data);
                })

            }else{
                ev.preventDefault()
                const {dataset} = ev.currentTarget
                const myCurrentTarget = ev.currentTarget
                const body = JSON.stringify({
                    eventType: "click",
                    campaignId: dataset.campaign,
                    offerId: dataset.offer,
                    userId: dataset.user,
                    impressionUUId: dataset.impress
                });
                params.body = body;
                getJSON(params, function(err, data){
                    myCurrentTarget.removeEventListener('click', sendEvent);
                    myCurrentTarget.click()
                })
            }
        }
        function sendImpress(campaign, offer, impress){
            const params = {
                url: _api + '/event',
                method: "POST",
                body: JSON.stringify({
                    eventType: "impression",
                    campaignId: campaign,
                    offerId: offer,
                    userId: bcioStatus,
                    impressionUUId: impress
                }),
                header: {
                    "Content-Type": "application/json"
                }
            }
            getJSON(params, function(err, data){
                if(err) log(err);
                log('an impress has been sent')
            })
        }
        
        /**
         * return an url associated to the size
         *
         * @param {*} size
         * @param {*} offer
         * @returns
         */
        function setImage(size, imageUrl){
            const reg = /(\.{1}[a-zA-Z0-9]+$)/;
            const ext = imageUrl.match(reg);
            return imageUrl.replace(reg, '__' + size + ext[0]);
        }
        
        /**
         *  return a final template after all the vars in template have been replaced by their values
         *
         * @param {*} template
         * @param {*} offer
         * @returns
         */
        function render(template, offer){
            const reg = new RegExp(/\{{2}([-_a-zA-Z]+)\}{2}/gm)
            let params = template.matchAll(reg)
            params = Array.from(params);
            params.forEach(function(param){
                template = template.replace(param[0], offer[param[1]] ? offer[param[1]] : '');
            })
            return template
        }
        /**
         * return a DOM element where the template will be replaced
         *
         * @param {*} parentNode
         * @returns
         */
        function getTemplate(parentNode){
            let template;
            _css_classes.forEach(function(cssObject){
                const css = cssObject["class"]
                if((!!parentNode.querySelector('.'+css)) || (Array.from(parentNode.classList).includes(css))){
                    template = cssObject;
                    template.imageSize =  cssObject.height+ '__' +cssObject.width;
                    template.width = cssObject.width;
                    template.height = cssObject.height;
                    template.cssSize = css;
                }else{
                    //trow error class css hasn't been found
                }

            })
            return template
        }
        function impressOfferIncomplete(campaign) {
            var incompleteOffers = campaign.offers.filter(function (offer) {
                return isComplete(offer) === false
            })

            var randomNumber = Math.random();
            if (randomNumber > _compensationIndex) {
                log("It's a compensation user, show offer that needs more clicks");
                //get the lowest offer
                impressOffer(campaign, incompleteOffers[0])
            } else {
                log("It's a random user, show random offer");
                impressOffer(campaign, incompleteOffers[Math.floor(Math.random() * incompleteOffers.length)]);
            }
        }
    }
    window.BCIO = init;
})(window)