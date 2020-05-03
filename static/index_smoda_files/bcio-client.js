(function (window) {
    function init(options) {
        const _pageID = options.pageID || 40;
        const _parentSelector = options.parentSelector|| 'itemid';
        const _compensationIndex = options.compensationIndex || 0.5;
        const _api = options.api || "http://localhost:8000"; // "https://recommendation-api-4flc3pudqq-ew.a.run.app";
        let _campaigdata;
        var _css_classes;
        let userdata;
        let assignationType = "none";
        const bcioStatus = getCookie("bcioStatus");


        //assumtioms
        //The offers in the campaignsdata has been sorted less complete to most complete
        //the tags for user data has been sorted more score to less score
        var t0 = performance.now();
        console.log('performance', t0)

        //inicio
        //cargamos el json de campañas
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
                    console.log("Encontrada cookie status con el id de usuario: ", bcioStatus);
                    smartAssignation(bcioStatus);
                } else {
                    console.log("No hemos encontrado cookie status");
                    var bcioFirstVisit = getCookie("bcioFirstVisit");
                    if (bcioFirstVisit !== "") {
                        console.log("Encontrada cookie firstVisit");
                        var bcioFirstVisitDate = new Date(parseInt(bcioFirstVisit));
                        console.log("bcioFirstVisitDate", bcioFirstVisitDate);
                        //obtener el tiempo de hoy a las 4 en utc
                        var targetTime = new Date().setUTCHours(4, 0, 0)
                        //SOLO DEBUG RETRASA UN DIA EL OBJETIVO
                        //var targetTime = new Date().setUTCDate(new Date().getUTCDate()+1)
                        if (Date.parse(bcioFirstVisitDate) < targetTime) {
                            console.log("Es de ayer");
                            console.log("guardo cookie de usuario")
                            bcioStatus = uuidv4()
                            // bcioStatus = 'c5882c53-b9cc-4d33-a308-5f546a1c2e04'
                            setCookie("bcioStatus", bcioStatus, 10 * 365);
                            smartAssignation(bcioStatus);
                        } else {
                            console.log("Es de hoy");
                            fastAssignation();
                        }
                    } else {
                        console.log("Guardamos cookie con la fecha")
                        setCookie("bcioFirstVisit", Date.now(), 10 * 365);
                        fastAssignation();
                    }
                }
            }
        );
        function fastAssignation() {
            console.log("Empezando la asignación fast");
            assignationType = "fast";
            _campaigdata.campaigns.forEach(function (campaign) {
                //Si la primera esta completa entonces todas estan completas
                if (campaign.offers.length && isComplete(campaign.offers[0])) {
                    //todas completas, muestro una random
                    impressOffer(campaign, campaign.offers[Math.floor(Math.random() * campaign.offers.length)]);
                } else {
                    impressOfferIncomplete(campaign)
                }
            });
        }

        function smartAssignation(userId) {
            assignationType = "smart";
            console.log("Empezando la asignación smart");
            //obtener datos del usuario
            const params = {
                //url: _api + '/user/'+ userId,
                url: '/user/'+ userId,
            }
            getJSON(params,
                function (err, data) {
                    if (!!err || !data) {
                        fastAssignation()
                    } else {
                        // userdata = data;
                        userdata = null;
                        console.log("userdata", userdata);
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
                    console.log("Ha tardado" + (t1 - t0) + " milliseconds.");
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
                console.log("assignationType", assignationType);
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
                    if(err) console.log(err);
                    console.log(data);
                })

            }else{
                ev.preventDefault()
                const {dataset} = ev.target
                const body = JSON.stringify({
                    eventType: "click",
                    campaignId: dataset.campaign,
                    offerId: dataset.offer,
                    userId: dataset.user,
                    impressionUUId: dataset.impress
                });
                params.body = body;
                getJSON(params, function(err, data){
                    ev.target.removeEventListener('click', sendEvent);
                    ev.target.click()
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
                if(err) console.log(err);
                console.log('an impress has been sent')
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
                if(!!parentNode.querySelector('.'+css)){
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
                console.log("Es un compensation user, muestro laoferta que necesita más clicks");
                //get the lowest offer
                impressOffer(campaign, incompleteOffers[0])
            } else {
                console.log("Es un random user, muestro una aleatoria");
                impressOffer(campaign, incompleteOffers[Math.floor(Math.random() * incompleteOffers.length)]);
            }
        }
    }
    window.BCIO = init;
})(window)