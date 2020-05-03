!function e(t,n,i){function a(s,o){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!o&&c)return c(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){return a(t[s][1][e]||e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)a(i[s]);return a}({1:[function(e,t){(function(n){e("./utils/polyfills");var i=e("./strategies/LocalVisitor"),a=e("./strategies/ProxyVisitor"),r=e("./strategies/PlaceholderVisitor"),s=e("./utils/callbackRegistryFactory"),o=e("./Message"),c=e("./enums").MESSAGES;t.exports=function(e,t,u,l){function g(e){Object.assign(S,e)}function d(e){Object.assign(S.state,e),S.callbackRegistry.executeAll(S.state)}function f(e){if(!I.isInvalid(e)){D=!1;var t=I.parse(e);S.setStateAndPublish(t.state)}}function h(e){!D&&_&&(D=!0,I.send(l,e))}function p(){g(new i(u._generateID)),S.getMarketingCloudVisitorID(),S.callbackRegistry.executeAll(S.state,!0),n.removeEventListener("message",m)}function m(e){if(!I.isInvalid(e)){var t=I.parse(e);D=!1,n.clearTimeout(this.timeout),n.removeEventListener("message",m),g(new a(S)),n.addEventListener("message",f),S.setStateAndPublish(t.state),S.callbackRegistry.hasCallbacks()&&h(c.GETSTATE)}}function v(){_&&postMessage?(n.addEventListener("message",m),h(c.HANDSHAKE),this.timeout=setTimeout(p,250)):p()}function y(){n.s_c_in||(n.s_c_il=[],n.s_c_in=0),S._c="Visitor",S._il=n.s_c_il,S._in=n.s_c_in,S._il[S._in]=S,n.s_c_in++}function b(){function e(e){0!==e.indexOf("_")&&"function"==typeof u[e]&&(S[e]=function(){})}Object.keys(u).forEach(e),S.getSupplementalDataID=u.getSupplementalDataID}var S=this,_=t.whitelistParentDomain;S.state={},S.version=u.version,S.marketingCloudOrgID=e;var D=!1,I=new o(e,_);S.callbackRegistry=s(),S.findField=function(e,t){if(S.state[e])return t(S.state[e]),S.state[e]},S.messageParent=h,S.setStateAndPublish=d,y(),b(),g(new r(S)),v()}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./Message":2,"./enums":4,"./strategies/LocalVisitor":5,"./strategies/PlaceholderVisitor":6,"./strategies/ProxyVisitor":7,"./utils/callbackRegistryFactory":8,"./utils/polyfills":10}],2:[function(e,t){var n=e("./enums").MESSAGES,i={0:"prefix",1:"orgID",2:"state"};t.exports=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,n){void 0!==e&&(t[i[n]]=2!==n?e:JSON.parse(e))}),t}catch(e){}},this.isInvalid=function(i){var a=this.parse(i);if(!a||Object.keys(a).length<2)return!0;var r=e!==a.orgID,s=!t||i.origin!==t,o=-1===Object.keys(n).indexOf(a.prefix);return r||s||o},this.send=function(n,i,a){var r=i+"|"+e;a&&a===Object(a)&&(r+="|"+JSON.stringify(a));try{n.postMessage(r,t)}catch(e){}}}},{"./enums":4}],3:[function(e,t,i){(function(i){function n(){function e(){o.windowLoaded=!0}i.addEventListener?i.addEventListener("load",e):i.attachEvent&&i.attachEvent("onload",e),o.codeLoadEnd=(new Date).getTime()}
/** @license ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

Adobe Visitor API for JavaScript version: 2.4.0
Copyright 1996-2015 Adobe, Inc. All Rights Reserved
More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
*/
var r=e("./ChildVisitor"),a=e("./Message"),s=e("./utils/makeChildMessageListener"),o=function(e,t){function n(e){var t=e;return function(e){var n=e||_.location.href;try{var i=g._extractParamFromUri(n,t);if(i)return R.parsePipeDelimetedKeyValues(i)}catch(e){}}}function r(e){function t(e,t){e&&e.match(h.VALID_VISITOR_ID_REGEX)&&t(e)}t(e[I],g.setMarketingCloudVisitorID),g._setFieldExpire(L,-1),t(e[O],g.setAnalyticsVisitorID)}function o(e){e=e||{},g._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",g._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},g._supplementalDataIDLast=e.supplementalDataIDLast||"",g._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function l(e){for(var t="",n=0,i=e.length;n<i;n++){var a=e[n],r=a[0],s=a[1];null!=s&&s!==P&&(t=(o=(o=t)?o+="|":o)+(r+"=")+encodeURIComponent(s))}var o,c;return(c=(c=t)?c+="|":c)+"TS="+R.getTimestampInSeconds()}function u(e){var t=e.minutesToLive,n="";return g.idSyncDisableSyncs&&(n=n||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(n=n||"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:t}}function c(e){for(var t=0,n=e.length;t<n;t++)if(!h.POSITIVE_INT_REGEX.test(e[t]))return!1;return!0}function d(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function f(e,t){for(var n=0;n<e.length;n++){var i=parseInt(e[n],10),a=parseInt(t[n],10);if(i>a)return 1;if(a>i)return-1}return 0}if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID");var g=this;g.version="2.4.0";var _=i,m=_.Visitor;m.version=g.version,_.s_c_in||(_.s_c_il=[],_.s_c_in=0),g._c="Visitor",g._il=_.s_c_il,g._in=_.s_c_in,g._il[g._in]=g,_.s_c_in++,g._log={requests:[]};var p=_.document,h={POST_MESSAGE_ENABLED:!!_.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,POSITIVE_INT_REGEX:/^\d+$/,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,HAS_JSON_STRINGIFY:window.JSON===Object(window.JSON)&&"function"==typeof window.JSON.stringify},S=function(e){return!Object.prototype[e]};g._hash=function(e){var t,n=0;if(e)for(t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n&=n;return n},g._generateID=function(e,t){var n,i,a="0123456789",r="",s="",o=8,c=10,u=10;if(t===I&&(x.isClientSideMarketingCloudVisitorID=!0),1===e){for(a+="ABCDEF",n=0;n<16;n++)i=Math.floor(Math.random()*o),r+=a.substring(i,i+1),i=Math.floor(Math.random()*o),s+=a.substring(i,i+1),o=16;return r+"-"+s}for(n=0;n<19;n++)i=Math.floor(Math.random()*c),r+=a.substring(i,i+1),0===n&&9===i?c=3:(1===n||2===n)&&10!==c&&i<2?c=10:n>2&&(c=10),i=Math.floor(Math.random()*u),s+=a.substring(i,i+1),0===n&&9===i?u=3:(1===n||2===n)&&10!==u&&i<2?u=10:n>2&&(u=10);return r+s},g._getDomain=function(e){var t;if(!e&&_.location&&(e=_.location.hostname),t=e)if(/^[0-9.]+$/.test(t))t="";else{var n=",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",i=t.split("."),a=i.length-1,r=a-1;if(a>1&&i[a].length<=2&&(2===i[a-1].length||n.indexOf(","+i[a]+",")<0)&&r--,r>0)for(t="";a>=r;)t=i[a]+(t?".":"")+t,a--}return t},g.cookieRead=function(e){e=encodeURIComponent(e);var t=(";"+p.cookie).split(" ").join(";"),n=t.indexOf(";"+e+"="),i=n<0?n:t.indexOf(";",n+1);return n<0?"":decodeURIComponent(t.substring(n+2+e.length,i<0?t.length:i))},g.cookieWrite=function(e,t,n){var i,a=g.cookieLifetime;if(t=""+t,a=a?(""+a).toUpperCase():"",n&&"SESSION"!==a&&"NONE"!==a){if(i=""!==t?parseInt(a||0,10):-60)(n=new Date).setTime(n.getTime()+1e3*i);else if(1===n){var r=(n=new Date).getYear();n.setYear(r+2+(r<1900?1900:0))}}else n=0;return e&&"NONE"!==a?(p.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(n?" expires="+n.toGMTString()+";":"")+(g.cookieDomain?" domain="+g.cookieDomain+";":""),g.cookieRead(e)===t):0},g._callbackList=null,g._callCallback=function(e,t){try{"function"==typeof e?e.apply(_,t):e[1].apply(e[0],t)}catch(e){}},g._registerCallback=function(e,t){t&&(null==g._callbackList&&(g._callbackList={}),null==g._callbackList[e]&&(g._callbackList[e]=[]),g._callbackList[e].push(t))},g._callAllCallbacks=function(e,t){if(null!=g._callbackList){var n=g._callbackList[e];if(n)for(;n.length>0;)g._callCallback(n.shift(),t)}},g._addQuerystringParam=function(e,t,n,i){var a=encodeURIComponent(t)+"="+encodeURIComponent(n),r=R.parseHash(e),s=R.hashlessUrl(e);if(-1===s.indexOf("?"))return s+"?"+a+r;var o=s.split("?"),c=o[0]+"?",u=o[1];return c+R.addQueryParamAtLocation(u,a,i)+r},g._extractParamFromUri=function(e,t){var n=new RegExp("[\\?&#]"+t+"=([^&#]*)").exec(e);if(n&&n.length)return decodeURIComponent(n[1])},g._parseAdobeMcFromUrl=n(h.ADOBE_MC),g._parseAdobeMcSdidFromUrl=n(h.ADOBE_MC_SDID),g._attemptToPopulateSdidFromUrl=function(t){var n=g._parseAdobeMcSdidFromUrl(t),i=1e9;n&&n.TS&&(i=R.getTimestampInSeconds()-n.TS),n&&n.SDID&&n[C]===e&&i<g.sdidParamExpiry&&(g._supplementalDataIDCurrent=n.SDID,g._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},g._attemptToPopulateIdsFromUrl=function(){var t=g._parseAdobeMcFromUrl();if(t&&t.TS){var n=R.getTimestampInSeconds()-t.TS;if(Math.floor(n/60)>h.ADOBE_MC_TTL_IN_MIN||t[C]!==e)return;r(t)}},g.resetState=function(e){e?g._mergeServerState(e):o()},g._mergeServerState=function(e){if(e)try{if(i=e,(e=R.isObject(i)?i:R.parseJSON(i))[g.marketingCloudOrgID]){var t=e[g.marketingCloudOrgID];n=t.customerIDs,R.isObject(n)&&g.setCustomerIDs(n),o(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}var n,i},g._timeout=null,g._loadData=function(e,t,n,i){t=g._addQuerystringParam(t,"d_fieldgroup",e,1),i.url=g._addQuerystringParam(i.url,"d_fieldgroup",e,1),i.corsUrl=g._addQuerystringParam(i.corsUrl,"d_fieldgroup",e,1),x.fieldGroupObj[e]=!0,i===Object(i)&&i.corsUrl&&"XMLHttpRequest"===g._requestProcs.corsMetadata.corsType?g._requestProcs.fireCORS(i,n,e):g.useCORSOnly||g._loadJSONP(e,t,n)},g._loadJSONP=function(e,t,n){var i,a=0,r=0;if(t&&p){for(i=0;!a&&i<2;){try{a=(a=p.getElementsByTagName(i>0?"HEAD":"head"))&&a.length>0?a[0]:0}catch(e){a=0}i++}if(!a)try{p.body&&(a=p.body)}catch(e){a=0}if(a)for(i=0;!r&&i<2;){try{r=p.createElement(i>0?"SCRIPT":"script")}catch(e){r=0}i++}}if(t&&a&&r){r.type="text/javascript",r.src=t,a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r);var s=g.loadTimeout;n&&(null==g._timeout&&(g._timeout={}),g._timeout[e]=setTimeout(function(){n(!0)},s)),g._log.requests.push(t)}else n&&n()},g._clearTimeout=function(e){null!=g._timeout&&g._timeout[e]&&(clearTimeout(g._timeout[e]),g._timeout[e]=0)},g._isAllowedDone=!1,g._isAllowedFlag=!1,g.isAllowed=function(){return g._isAllowedDone||(g._isAllowedDone=!0,(g.cookieRead(g.cookieName)||g.cookieWrite(g.cookieName,"T",1))&&(g._isAllowedFlag=!0)),g._isAllowedFlag},g._fields=null,g._fieldsExpired=null;var D="MC",I="MCMID",C="MCORGID",v="MCCIDH",A="MCSYNCS",y="MCSYNCSOP",M="MCIDTS",b="MCOPTOUT",E="A",O="MCAID",T="AAM",k="MCAAMLH",L="MCAAMB",P="NONE";g._settingsDigest=0,g._getSettingsDigest=function(){if(!g._settingsDigest){var e=g.version;g.audienceManagerServer&&(e+="|"+g.audienceManagerServer),g.audienceManagerServerSecure&&(e+="|"+g.audienceManagerServerSecure),g._settingsDigest=g._hash(e)}return g._settingsDigest},g._readVisitorDone=!1,g._readVisitor=function(){if(!g._readVisitorDone){g._readVisitorDone=!0;var e,t,n,i,a,r,s=g._getSettingsDigest(),o=!1,c=g.cookieRead(g.cookieName),u=new Date;if(null==g._fields&&(g._fields={}),c&&"T"!==c)for((c=c.split("|"))[0].match(/^[\-0-9]+$/)&&(parseInt(c[0],10)!==s&&(o=!0),c.shift()),c.length%2==1&&c.pop(),e=0;e<c.length;e+=2)n=(t=c[e].split("-"))[0],i=c[e+1],t.length>1?(a=parseInt(t[1],10),r=t[1].indexOf("s")>0):(a=0,r=!1),o&&(n===v&&(i=""),a>0&&(a=u.getTime()/1e3-60)),n&&i&&(g._setField(n,i,1),a>0&&(g._fields["expire"+n]=a+(r?"s":""),(u.getTime()>=1e3*a||r&&!g.cookieRead(g.sessionCookieName))&&(g._fieldsExpired||(g._fieldsExpired={}),g._fieldsExpired[n]=!0)));!g._getField(O)&&R.isTrackingServerPopulated()&&(c=g.cookieRead("s_vi"))&&((c=c.split("|")).length>1&&c[0].indexOf("v1")>=0&&((e=(i=c[1]).indexOf("["))>=0&&(i=i.substring(0,e)),i&&i.match(h.VALID_VISITOR_ID_REGEX)&&g._setField(O,i)))}},g._appendVersionTo=function(e){var t="vVersion|"+g.version,n=e?g._getCookieVersion(e):null;return n?R.areVersionsDifferent(n,g.version)&&(e=e.replace(h.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},g._writeVisitor=function(){var e,t,n=g._getSettingsDigest();for(e in g._fields)S(e)&&g._fields[e]&&"expire"!==e.substring(0,6)&&(t=g._fields[e],n+=(n?"|":"")+e+(g._fields["expire"+e]?"-"+g._fields["expire"+e]:"")+"|"+t);n=g._appendVersionTo(n),g.cookieWrite(g.cookieName,n,1)},g._getField=function(e,t){return null==g._fields||!t&&g._fieldsExpired&&g._fieldsExpired[e]?null:g._fields[e]},g._setField=function(e,t,n){null==g._fields&&(g._fields={}),g._fields[e]=t,n||g._writeVisitor()},g._getFieldList=function(e,t){var n=g._getField(e,t);return n?n.split("*"):null},g._setFieldList=function(e,t,n){g._setField(e,t?t.join("*"):"",n)},g._getFieldMap=function(e,t){var n=g._getFieldList(e,t);if(n){var i,a={};for(i=0;i<n.length;i+=2)a[n[i]]=n[i+1];return a}return null},g._setFieldMap=function(e,t,n){var i,a=null;if(t)for(i in a=[],t)S(i)&&(a.push(i),a.push(t[i]));g._setFieldList(e,a,n)},g._setFieldExpire=function(e,t,n){var i=new Date;i.setTime(i.getTime()+1e3*t),null==g._fields&&(g._fields={}),g._fields["expire"+e]=Math.floor(i.getTime()/1e3)+(n?"s":""),t<0?(g._fieldsExpired||(g._fieldsExpired={}),g._fieldsExpired[e]=!0):g._fieldsExpired&&(g._fieldsExpired[e]=!1),n&&(g.cookieRead(g.sessionCookieName)||g.cookieWrite(g.sessionCookieName,"1"))},g._findVisitorID=function(e){return e&&("object"==typeof e&&(e=e.d_mid?e.d_mid:e.visitorID?e.visitorID:e.id?e.id:e.uuid?e.uuid:""+e),e&&"NOTARGET"===(e=e.toUpperCase())&&(e=P),e&&(e===P||e.match(h.VALID_VISITOR_ID_REGEX))||(e="")),e},g._setFields=function(e,t){if(g._clearTimeout(e),null!=g._loading&&(g._loading[e]=!1),x.fieldGroupObj[e]&&x.setState(e,!1),e===D){!0!==x.isClientSideMarketingCloudVisitorID&&(x.isClientSideMarketingCloudVisitorID=!1);var n=g._getField(I);if(!n||g.overwriteCrossDomainMCIDAndAID){if(!(n="object"==typeof t&&t.mid?t.mid:g._findVisitorID(t))){if(g._use1stPartyMarketingCloudServer&&!g.tried1stPartyMarketingCloudServer)return g.tried1stPartyMarketingCloudServer=!0,void g.getAnalyticsVisitorID(null,!1,!0);n=g._generateID(0,I)}g._setField(I,n)}n&&n!==P||(n=""),"object"==typeof t&&((t.d_region||t.dcs_region||t.d_blob||t.blob)&&g._setFields(T,t),g._use1stPartyMarketingCloudServer&&t.mid&&g._setFields(E,{id:t.id})),g._callAllCallbacks(I,[n])}if(e===T&&"object"==typeof t){var i=604800;null!=t.id_sync_ttl&&t.id_sync_ttl&&(i=parseInt(t.id_sync_ttl,10));var a=g._getField(k);a||((a=t.d_region)||(a=t.dcs_region),a&&(g._setFieldExpire(k,i),g._setField(k,a))),a||(a=""),g._callAllCallbacks(k,[a]);var r=g._getField(L);(t.d_blob||t.blob)&&((r=t.d_blob)||(r=t.blob),g._setFieldExpire(L,i),g._setField(L,r)),r||(r=""),g._callAllCallbacks(L,[r]),!t.error_msg&&g._newCustomerIDsHash&&g._setField(v,g._newCustomerIDsHash)}if(e===E){var s=g._getField(O);s&&!g.overwriteCrossDomainMCIDAndAID||((s=g._findVisitorID(t))?s!==P&&g._setFieldExpire(L,-1):s=P,g._setField(O,s)),s&&s!==P||(s=""),g._callAllCallbacks(O,[s])}if(g.idSyncDisableSyncs)F.idCallNotProcesssed=!0;else{F.idCallNotProcesssed=!1;var o={};o.ibs=t.ibs,o.subdomain=t.subdomain,F.processIDCallData(o)}var c,u;t===Object(t)&&(g.isAllowed()&&(c=g._getField(b)),c||(c=P,t.d_optout&&t.d_optout instanceof Array&&(c=t.d_optout.join(",")),u=parseInt(t.d_ottl,10),isNaN(u)&&(u=7200),g._setFieldExpire(b,u,!0),g._setField(b,c)),g._callAllCallbacks(b,[c]))},g._loading=null,g._getRemoteField=function(e,t,n,i,a){var r,s="",o=R.isFirstPartyAnalyticsVisitorIDCall(e);if(g.isAllowed())if(g._readVisitor(),!(!(s=g._getField(e,!0===V[e]))||g._fieldsExpired&&g._fieldsExpired[e])||g.disableThirdPartyCalls&&!o)s||(e===I?(g._registerCallback(e,n),s=g._generateID(0,I),g.setMarketingCloudVisitorID(s)):e===O?(g._registerCallback(e,n),s="",g.setAnalyticsVisitorID(s)):(s="",i=!0));else if(e===I||e===b?r=D:e===k||e===L?r=T:e===O&&(r=E),r)return!t||null!=g._loading&&g._loading[r]||(null==g._loading&&(g._loading={}),g._loading[r]=!0,g._loadData(r,t,function(t){if(!g._getField(e)){t&&x.setState(r,!0);var n="";e===I?n=g._generateID(0,I):r===T&&(n={error_msg:"timeout"}),g._setFields(r,n)}},a)),g._registerCallback(e,n),s||(t||g._setFields(r,{id:P}),"");return e!==I&&e!==O||s!==P||(s="",i=!0),n&&i&&g._callCallback(n,[s]),s},g._setMarketingCloudFields=function(e){g._readVisitor(),g._setFields(D,e)},g.setMarketingCloudVisitorID=function(e){g._setMarketingCloudFields(e)},g._use1stPartyMarketingCloudServer=!1,g.getMarketingCloudVisitorID=function(e,t){if(g.isAllowed()){g.marketingCloudServer&&g.marketingCloudServer.indexOf(".demdex.net")<0&&(g._use1stPartyMarketingCloudServer=!0);var n=g._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;return g._getRemoteField(I,i,e,t,n)}return""},g._mapCustomerIDs=function(e){g.getAudienceManagerBlob(e,!0)},m.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},g._currentCustomerIDs={},g._customerIDsHashChanged=!1,g._newCustomerIDsHash="",g.setCustomerIDs=function(e){function t(){g._customerIDsHashChanged=!1}if(g.isAllowed()&&e){var n,i;for(n in g._readVisitor(),e)if(S(n)&&(i=e[n]))if("object"==typeof i){var a={};i.id&&(a.id=i.id),null!=i.authState&&(a.authState=i.authState),g._currentCustomerIDs[n]=a}else g._currentCustomerIDs[n]={id:i};var r=g.getCustomerIDs(),s=g._getField(v),o="";for(n in s||(s=0),r)S(n)&&(o+=(o?"|":"")+n+"|"+((i=r[n]).id?i.id:"")+(i.authState?i.authState:""));g._newCustomerIDsHash=g._hash(o),g._newCustomerIDsHash!==s&&(g._customerIDsHashChanged=!0,g._mapCustomerIDs(t))}},g.getCustomerIDs=function(){g._readVisitor();var e,t,n={};for(e in g._currentCustomerIDs)S(e)&&(t=g._currentCustomerIDs[e],n[e]||(n[e]={}),t.id&&(n[e].id=t.id),null!=t.authState?n[e].authState=t.authState:n[e].authState=m.AuthState.UNKNOWN);return n},g._setAnalyticsFields=function(e){g._readVisitor(),g._setFields(E,e)},g.setAnalyticsVisitorID=function(e){g._setAnalyticsFields(e)},g.getAnalyticsVisitorID=function(e,t,n){if(!R.isTrackingServerPopulated()&&!n)return g._callCallback(e,[""]),"";if(g.isAllowed()){var i="";if(n||(i=g.getMarketingCloudVisitorID(function(){g.getAnalyticsVisitorID(e,!0)})),i||n){var a=n?g.marketingCloudServer:g.trackingServer,r="";g.loadSSL&&(n?g.marketingCloudServerSecure&&(a=g.marketingCloudServerSecure):g.trackingServerSecure&&(a=g.trackingServerSecure));var s={};if(a){var o="http"+(g.loadSSL?"s":"")+"://"+a+"/id",c="d_visid_ver="+g.version+"&mcorgid="+encodeURIComponent(g.marketingCloudOrgID)+(i?"&mid="+encodeURIComponent(i):"")+(g.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),u=["s_c_il",g._in,"_set"+(n?"MarketingCloud":"Analytics")+"Fields"];r=o+"?"+c+"&callback=s_c_il%5B"+g._in+"%5D._set"+(n?"MarketingCloud":"Analytics")+"Fields",s.corsUrl=o+"?"+c,s.callback=u}return s.url=r,g._getRemoteField(n?I:O,r,e,t,s)}}return""},g._setAudienceManagerFields=function(e){g._readVisitor(),g._setFields(T,e)},g._getAudienceManagerURLData=function(e){var t=g.audienceManagerServer,n="",i=g._getField(I),a=g._getField(L,!0),r=g._getField(O),s=r&&r!==P?"&d_cid_ic=AVID%01"+encodeURIComponent(r):"";if(g.loadSSL&&g.audienceManagerServerSecure&&(t=g.audienceManagerServerSecure),t){var o,c,u=g.getCustomerIDs();if(u)for(o in u)S(o)&&(c=u[o],s+="&d_cid_ic="+encodeURIComponent(o)+"%01"+encodeURIComponent(c.id?c.id:"")+(c.authState?"%01"+c.authState:""));e||(e="_setAudienceManagerFields");var l="http"+(g.loadSSL?"s":"")+"://"+t+"/id",d="d_visid_ver="+g.version+"&d_rtbd=json&d_ver=2"+(!i&&g._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(g.marketingCloudOrgID)+"&d_nsid="+(g.idSyncContainerID||0)+(i?"&d_mid="+encodeURIComponent(i):"")+(g.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(!0===j?"&d_coop_safe=1":!1===j?"&d_coop_unsafe=1":"")+(a?"&d_blob="+encodeURIComponent(a):"")+s,f=["s_c_il",g._in,e];return{url:n=l+"?"+d+"&d_cb=s_c_il%5B"+g._in+"%5D."+e,corsUrl:l+"?"+d,callback:f}}return{url:n}},g.getAudienceManagerLocationHint=function(e,t){if(g.isAllowed()&&g.getMarketingCloudVisitorID(function(){g.getAudienceManagerLocationHint(e,!0)})){var n=g._getField(O);if(!n&&R.isTrackingServerPopulated()&&(n=g.getAnalyticsVisitorID(function(){g.getAudienceManagerLocationHint(e,!0)})),n||!R.isTrackingServerPopulated()){var i=g._getAudienceManagerURLData(),a=i.url;return g._getRemoteField(k,a,e,t,i)}}return""},g.getLocationHint=g.getAudienceManagerLocationHint,g.getAudienceManagerBlob=function(e,t){if(g.isAllowed()&&g.getMarketingCloudVisitorID(function(){g.getAudienceManagerBlob(e,!0)})){var n=g._getField(O);if(!n&&R.isTrackingServerPopulated()&&(n=g.getAnalyticsVisitorID(function(){g.getAudienceManagerBlob(e,!0)})),n||!R.isTrackingServerPopulated()){var i=g._getAudienceManagerURLData(),a=i.url;return g._customerIDsHashChanged&&g._setFieldExpire(L,-1),g._getRemoteField(L,a,e,t,i)}}return""},g._supplementalDataIDCurrent="",g._supplementalDataIDCurrentConsumed={},g._supplementalDataIDLast="",g._supplementalDataIDLastConsumed={},g.getSupplementalDataID=function(e,t){g._supplementalDataIDCurrent||t||(g._supplementalDataIDCurrent=g._generateID(1));var n=g._supplementalDataIDCurrent;return g._supplementalDataIDLast&&!g._supplementalDataIDLastConsumed[e]?(n=g._supplementalDataIDLast,g._supplementalDataIDLastConsumed[e]=!0):n&&(g._supplementalDataIDCurrentConsumed[e]&&(g._supplementalDataIDLast=g._supplementalDataIDCurrent,g._supplementalDataIDLastConsumed=g._supplementalDataIDCurrentConsumed,g._supplementalDataIDCurrent=n=t?"":g._generateID(1),g._supplementalDataIDCurrentConsumed={}),n&&(g._supplementalDataIDCurrentConsumed[e]=!0)),n},m.OptOut={GLOBAL:"global"},g.getOptOut=function(e,t){if(g.isAllowed()){var n=g._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;return g._getRemoteField(b,i,e,t,n)}return""},g.isOptedOut=function(e,t,n){if(g.isAllowed()){t||(t=m.OptOut.GLOBAL);var i=g.getOptOut(function(n){var i=n===m.OptOut.GLOBAL||n.indexOf(t)>=0;g._callCallback(e,[i])},n);return i?i===m.OptOut.GLOBAL||i.indexOf(t)>=0:null}return!1},g.appendVisitorIDsTo=function(e){var t=h.ADOBE_MC,n=l([[I,g._getField(I)],[O,g._getField(O)],[C,g.marketingCloudOrgID]]);try{return g._addQuerystringParam(e,t,n)}catch(t){return e}},g.appendSupplementalDataIDTo=function(e,t){if(!(t=t||g.getSupplementalDataID(R.generateRandomString(),!0)))return e;var n=h.ADOBE_MC_SDID,i="SDID="+encodeURIComponent(t)+"|";i+=C+"="+encodeURIComponent(g.marketingCloudOrgID)+"|",i+="TS="+R.getTimestampInSeconds();try{return g._addQuerystringParam(e,n,i)}catch(t){return e}},g._xd={postMessage:function(e,t,n){var i=1;t&&(h.POST_MESSAGE_ENABLED?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+i+++"&"+e))},receiveMessage:function(e,t){var n;try{h.POST_MESSAGE_ENABLED&&(e&&(n=function(n){if("string"==typeof t&&n.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(n.origin))return!1;e(n)}),_.addEventListener?_[e?"addEventListener":"removeEventListener"]("message",n,!1):_[e?"attachEvent":"detachEvent"]("\xe5",n))}catch(e){}}};var R={addListener:p.addEventListener?function(e,t,n){e.addEventListener(t,function(e){"function"==typeof n&&n(e)},!1)}:p.attachEvent?function(e,t,n){e.attachEvent("on"+t,function(e){"function"==typeof n&&n(e)})}:void 0,map:function(e,t){if(Array.prototype.map)return e.map(t);if(void 0===e||null==e)throw new TypeError;var n=Object(e),i=n.length>>>0;if("function"!=typeof t)throw new TypeError;for(var a=new Array(i),r=arguments[1],s=0;s<i;s++)s in n&&(a[s]=t.call(r,n[s],s,n));return a},encodeAndBuildRequest:function(e,t){return this.map(e,function(e){return encodeURIComponent(e)}).join(t)},parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,n){var i=e.split("&");return n=null!=n?n:i.length,i.splice(n,0,t),i.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,n){return e===O&&(t||(t=g.trackingServer),n||(n=g.trackingServerSecure),!("string"!=typeof(i=g.loadSSL?n:t)||!i.length)&&i.indexOf("2o7.net")<0&&i.indexOf("omtrdc.net")<0);var i},isObject:function(e){return Boolean(e&&e===Object(e))},isLessThan:function(e,t){return g._compareVersions(e,t)<0},areVersionsDifferent:function(e,t){return 0!==g._compareVersions(e,t)},removeCookie:function(e){document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"},isTrackingServerPopulated:function(){return!!g.trackingServer||!!g.trackingServerSecure},parseJSON:function(e,t){function i(e,n){var a,r,s=e[n];if(s&&"object"==typeof s)for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(void 0!==(r=i(s,a))?s[a]=r:delete s[a]);return t.call(e,n,s)}if("object"==typeof JSON&&"function"==typeof JSON.parse)return JSON.parse(e,t);var n,r=/^[\],:{}\s]*$/,a=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,s=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,o=/(?:^|:|,)(?:\s*\[)+/g,l=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;if(e=String(e),l.lastIndex=0,l.test(e)&&(e=e.replace(l,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),r.test(e.replace(a,"@").replace(s,"]").replace(o,"")))return n=eval("("+e+")"),"function"==typeof t?i({"":n},""):n;throw new SyntaxError("JSON.parse")},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){for(var t={},n=e.split("|"),i=0,a=n.length;i<a;i++){var r=n[i].split("=");t[r[0]]=decodeURIComponent(r[1])}return t},generateRandomString:function(e){e=e||5;for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=n[Math.floor(Math.random()*n.length)];return t},parseBoolean:function(e){return"true"===e||"false"!==e&&null}};g._helpers=R;var w={corsMetadata:(_g="none",ah=!0,"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?_g="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(ah=!1),Object.prototype.toString.call(_.HTMLElement).indexOf("Constructor")>0&&(ah=!1)),{corsType:_g,corsCookiesEnabled:ah}),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new _[this.corsMetadata.corsType]},fireCORS:function(e,t){function n(t){var n;try{if((n=JSON.parse(t))!==Object(n))return void i.handleCORSError(e,null,"Response is not JSON")}catch(t){return void i.handleCORSError(e,t,"Error parsing response as JSON")}try{for(var a=e.callback,r=_,s=0;s<a.length;s++)r=r[a[s]];r(n)}catch(t){i.handleCORSError(e,t,"Error forming callback function")}}var i=this;t&&(e.loadErrorHandler=t);try{var a=this.getCORSInstance();a.open("get",e.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(a.withCredentials=!0,a.timeout=g.loadTimeout,a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){4===this.readyState&&200===this.status&&n(this.responseText)}),a.onerror=function(t){i.handleCORSError(e,t,"onerror")},a.ontimeout=function(t){i.handleCORSError(e,t,"ontimeout")},a.send(),g._log.requests.push(e.corsUrl)}catch(t){this.handleCORSError(e,t,"try-catch")}},handleCORSError:function(e,t,n){g.CORSErrors.push({corsData:e,error:t,description:n}),e.loadErrorHandler&&("ontimeout"===n?e.loadErrorHandler(!0):e.loadErrorHandler(!1))}},_g,ah;g._requestProcs=w;var F={THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var e,t="http://fast.",n="?d_nsid="+g.idSyncContainerID+"#"+encodeURIComponent(p.location.href);return this.subdomain||(this.subdomain="nosubdomainreturned"),g.loadSSL&&(t=g.idSyncSSLUseAkamai?"https://fast.":"https://"),e=t+this.subdomain+".demdex.net/dest5.html"+n,this.iframeHost=this.getIframeHost(e),this.id="destination_publishing_iframe_"+this.subdomain+"_"+g.idSyncContainerID,e},checkDPIframeSrc:function(){var e="?d_nsid="+g.idSyncContainerID+"#"+encodeURIComponent(p.location.href);"string"==typeof g.dpIframeSrc&&g.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(g._subdomain||this.subdomain||(new Date).getTime())+"_"+g.idSyncContainerID,this.iframeHost=this.getIframeHost(g.dpIframeSrc),this.url=g.dpIframeSrc+e)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:h.POST_MESSAGE_ENABLED?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframe:function(){return!g.idSyncDisable3rdPartySyncing&&(this.doAttachIframe||g._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||g._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){(i=document.createElement("iframe")).sandbox="allow-scripts allow-same-origin",i.title="Adobe ID Syncing iFrame",i.id=n.id,i.style.cssText="display: none; width: 0; height: 0;",i.src=n.url,n.newIframeCreated=!0,t(),document.body.appendChild(i)}function t(){R.addListener(i,"load",function(){i.className="aamIframeLoaded",n.iframeHasLoaded=!0,n.requestToProcess()})}this.startedAttachingIframe=!0;var n=this,i=document.getElementById(this.id);i?"IFRAME"!==i.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==i.className?(this.originalIframeHasLoadedAlready=!1,t()):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=i,this.requestToProcess())):e(),this.iframe=i},requestToProcess:function(e){function t(){i.jsonForComparison.push(e),i.jsonWaiting.push(e),i.processSyncOnPage(e)}var n,i=this;if(e===Object(e)&&e.ibs)if(h.HAS_JSON_STRINGIFY)if(n=JSON.stringify(e.ibs||[]),this.jsonForComparison.length){var a,r,s,o=!1;for(a=0,r=this.jsonForComparison.length;a<r;a++)if(s=this.jsonForComparison[a],n===JSON.stringify(s.ibs||[])){o=!0;break}o?this.jsonDuplicates.push(e):t()}else t();else t();if((this.receivedThirdPartyCookiesNotification||!h.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var c=this.jsonWaiting.shift();this.process(c),this.requestToProcess()}!g.idSyncDisableSyncs&&this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){i.messageSendingInterval=h.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},processSyncOnPage:function(e){var t,n,i,a;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(i=0;i<n;i++)(a=t[i]).syncOnPage&&this.checkFirstPartyCookie(a,"","syncOnPage")},process:function(e){var t,n,i,a,r,s=encodeURIComponent,o=!1;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(o=!0,i=0;i<n;i++)a=t[i],r=[s("ibs"),s(a.id||""),s(a.tag||""),R.encodeAndBuildRequest(a.url||[],","),s(a.ttl||""),"","",a.fireURLSync?"true":"false"],a.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(r.join("|")):a.fireURLSync&&this.checkFirstPartyCookie(a,r.join("|")));o&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(e,t,n){var i="syncOnPage"===n,a=i?y:A;g._readVisitor();var r,s,o=g._getField(a),c=!1,u=!1,l=Math.ceil((new Date).getTime()/h.MILLIS_PER_DAY);o?(r=o.split("*"),c=(s=this.pruneSyncData(r,e.id,l)).dataPresent,u=s.dataValid,c&&u||this.fireSync(i,e,t,r,a,l)):(r=[],this.fireSync(i,e,t,r,a,l))},pruneSyncData:function(e,t,n){var i,a,r,s=!1,o=!1;for(a=0;a<e.length;a++)i=e[a],r=parseInt(i.split("-")[1],10),i.match("^"+t+"-")?(s=!0,n<r?o=!0:(e.splice(a,1),a--)):n>=r&&(e.splice(a,1),a--);return{dataPresent:s,dataValid:o}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(e,t,n,i,a,r){var s=this;if(e){if("img"===t.tag){var o,c,u,l,d=t.url,f=g.loadSSL?"https:":"http:";for(o=0,c=d.length;o<c;o++){u=d[o],l=/^\/\//.test(u);var h=new Image;R.addListener(h,"load",function(e,t,n,i){return function(){s.onPagePixels[e]=null,g._readVisitor();var r,o,c,u,l=g._getField(a),d=[];if(l)for(o=0,c=(r=l.split("*")).length;o<c;o++)(u=r[o]).match("^"+t.id+"-")||d.push(u);s.setSyncTrackingData(d,t,n,i)}}(this.onPagePixels.length,t,a,r)),h.src=(l?f:"")+u,this.onPagePixels.push(h)}}}else this.addMessage(n),this.setSyncTrackingData(i,t,a,r)},addMessage:function(e){var t=encodeURIComponent(g._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((h.POST_MESSAGE_ENABLED?"":t)+e)},setSyncTrackingData:function(e,t,n,i){e.push(t.id+"-"+(i+Math.ceil(t.ttl/60/24))),this.manageSyncsSize(e),g._setField(n,e.join("*"))},sendMessages:function(){var e,t=this;this.messages.length?h.POST_MESSAGE_ENABLED?(e=encodeURIComponent("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){g._xd.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,n=/^---destpub-to-parent---/;"string"==typeof e&&n.test(e)&&("canSetThirdPartyCookies"===(t=e.replace(n,"").split("|"))[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(e){(null==this.url||e.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof g._subdomain&&g._subdomain.length?this.subdomain=g._subdomain:this.subdomain=e.subdomain||"",this.url=this.getUrl()),e.ibs instanceof Array&&e.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(g.idSyncAttachIframeOnWindowLoad?(m.windowLoaded||"complete"===p.readyState||"loaded"===p.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof g.idSyncIDCallResult?g.idSyncIDCallResult(e):this.requestToProcess(e),"function"==typeof g.idSyncAfterIDCallResult&&g.idSyncAfterIDCallResult(e)},canMakeSyncIDCall:function(e,t){return g._forceSyncIDCall||!e||t-e>h.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(document.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}};g._destinationPublishing=F,g.timeoutMetricsLog=[];var N,x={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case D:!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case E:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case T:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};g.isClientSideMarketingCloudVisitorID=function(){return x.isClientSideMarketingCloudVisitorID},g.MCIDCallTimedOut=function(){return x.MCIDCallTimedOut},g.AnalyticsIDCallTimedOut=function(){return x.AnalyticsIDCallTimedOut},g.AAMIDCallTimedOut=function(){return x.AAMIDCallTimedOut},g.idSyncGetOnPageSyncInfo=function(){return g._readVisitor(),g._getField(y)},g.idSyncByURL=function(e){var t=u(e||{});if(t.error)return t.error;var n,i,a=e.url,r=encodeURIComponent,s=F;return a=a.replace(/^https:/,"").replace(/^http:/,""),n=R.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),i=["ibs",r(e.dpid),"img",r(a),t.ttl,"",n],
s.addMessage(i.join("|")),s.requestToProcess(),"Successfully queued"},g.idSyncByDataSource=function(e){return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,g.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},g._compareVersions=function(e,t){if(e===t)return 0;var n=e.toString().split("."),i=t.toString().split(".");return c(n.concat(i))?(d(n,i),f(n,i)):NaN},g._getCookieVersion=function(e){e=e||g.cookieRead(g.cookieName);var t=h.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},g._resetAmcvCookie=function(e){var t=g._getCookieVersion();t&&!R.isLessThan(t,e)||R.removeCookie(g.cookieName)},g.setAsCoopSafe=function(){j=!0},g.setAsCoopUnsafe=function(){j=!1},e.indexOf("@")<0&&(e+="@AdobeOrg"),g.marketingCloudOrgID=e,g.cookieName="AMCV_"+e,g.sessionCookieName="AMCVS_"+e,g.cookieDomain=g._getDomain(),g.cookieDomain===_.location.hostname&&(g.cookieDomain=""),g.loadSSL=_.location.protocol.toLowerCase().indexOf("https")>=0,g.loadTimeout=3e4,g.CORSErrors=[],g.marketingCloudServer=g.audienceManagerServer="dpm.demdex.net",g.sdidParamExpiry=30;var V={};V[k]=!0,V[L]=!0;var j=null;if(t&&"object"==typeof t){var U;for(U in t)S(U)&&(g[U]=t[U]);g.idSyncContainerID=g.idSyncContainerID||0,j="boolean"==typeof g.isCoopSafe?g.isCoopSafe:R.parseBoolean(g.isCoopSafe),g.resetBeforeVersion&&g._resetAmcvCookie(g.resetBeforeVersion),g._attemptToPopulateIdsFromUrl(),g._attemptToPopulateSdidFromUrl(),g._readVisitor();var H=g._getField(M),B=Math.ceil((new Date).getTime()/h.MILLIS_PER_DAY);!g.idSyncDisableSyncs&&F.canMakeSyncIDCall(H,B)&&(g._setFieldExpire(L,-1),g._setField(M,B)),g.getMarketingCloudVisitorID(),g.getAudienceManagerLocationHint(),g.getAudienceManagerBlob(),g._mergeServerState(g.serverState)}else g._attemptToPopulateIdsFromUrl(),g._attemptToPopulateSdidFromUrl();if(!g.idSyncDisableSyncs){F.checkDPIframeSrc();var G=function(){var e=F;e.readyToAttachIframe()&&e.attachIframe()};R.addListener(_,"load",function(){m.windowLoaded=!0,G()});try{g._xd.receiveMessage(function(e){F.receiveMessage(e.data)},F.iframeHost)}catch(e){}}g.whitelistIframeDomains&&h.POST_MESSAGE_ENABLED&&(g.whitelistIframeDomains=g.whitelistIframeDomains instanceof Array?g.whitelistIframeDomains:[g.whitelistIframeDomains],g.whitelistIframeDomains.forEach(function(t){var n=new a(e,t),i=s(g,n);g._xd.receiveMessage(i,t)}))};o.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID");e.indexOf("@")<0&&(e+="@AdobeOrg");var n=function(){var t=i.s_c_il;if(t)for(var n=0;n<t.length;n++){var a=t[n];if(a&&"Visitor"===a._c&&a.marketingCloudOrgID===e)return a}}();if(n)return n;var a=new o(e),s=a.isAllowed();return i.s_c_il.splice(--i.s_c_in,1),function(){try{return i.self!==i.parent}catch(e){return!0}}()&&!s&&i.parent?new r(e,t,a,i.parent):new o(e,t)},n(),i.Visitor=o,t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./ChildVisitor":1,"./Message":2,"./utils/makeChildMessageListener":9}],4:[function(e,t,n){n.MESSAGES={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},n.STATE_KEYS_MAP={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},n.ASYNC_API_MAP={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"},n.SYNC_API_MAP={CUSTOMERIDS:"getCustomerIDs"},n.ALL_APIS={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"},n.FIELDGROUP_TO_FIELD={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"}},{}],5:[function(e,t){var n=e("../enums").STATE_KEYS_MAP;t.exports=function(e){function t(){}function i(t,i){var a=this;return function(){var t=e(0,n.MCMID),r={};return r[n.MCMID]=t,a.setStateAndPublish(r),i(t),t}}this.getMarketingCloudVisitorID=function(e){e=e||t;var a=this.findField(n.MCMID,e),r=i.call(this,n.MCMID,e);return void 0!==a?a:r()}}},{"../enums":4}],6:[function(e,t){var n=e("../enums").ASYNC_API_MAP;t.exports=function(){Object.keys(n).forEach(function(e){this[n[e]]=function(t){this.callbackRegistry.add(e,t)}},this)}},{"../enums":4}],7:[function(e,t){var n=e("../enums"),i=n.MESSAGES,a=n.ASYNC_API_MAP,r=n.SYNC_API_MAP;t.exports=function(){function e(){}function t(e,t){var n=this;return function(){return n.callbackRegistry.add(e,t),n.messageParent(i.GETSTATE),""}}function n(n){this[a[n]]=function(i){i=i||e;var a=this.findField(n,i),r=t.call(this,n,i);return void 0!==a?a:r()}}function s(t){this[r[t]]=function(){return this.findField(t,e)||{}}}Object.keys(a).forEach(n,this),Object.keys(r).forEach(s,this)}},{"../enums":4}],8:[function(e,t){function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var n=this.callbacks[e].push(t)-1;return function(){this.callbacks[e].splice(n,1)}},execute:function(e,t){if(this.callbacks[e]){t=(t=void 0===t?[]:t)instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var n=this.callbacks[e].shift();"function"==typeof n?n.apply(null,t):n instanceof Array&&n[1].apply(n[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!i.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var n=void 0!==e[t]?e[t]:"";this.execute(t,n)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}var i=e("./utils");t.exports=n},{"./utils":11}],9:[function(e,t){var n=e("../enums"),i=e("./utils"),a=n.MESSAGES,r=n.ALL_APIS,s=n.ASYNC_API_MAP,o=n.FIELDGROUP_TO_FIELD;t.exports=function(e,t){function n(){var t={};return Object.keys(r).forEach(function(n){var a=r[n],s=e[a]();i.isValueEmpty(s)||(t[n]=s)}),t}function c(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(n){if(e._loading[n]){var i=o[n];t.push(i)}}),t.length?t:null}function u(t){return function n(){var i=c();if(i){var a=s[i[0]];e[a](n,!0)}else t()}}function l(e,i){var a=n();t.send(e,i,a)}function g(e){f(e),l(e,a.HANDSHAKE)}function d(e){u(function(){l(e,a.PARENTSTATE)})()}function f(n){function i(i){r.call(e,i),t.send(n,a.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=i}return function(e){t.isInvalid(e)||(t.parse(e).prefix===a.HANDSHAKE?g:d)(e.source)}}},{"../enums":4,"./utils":11}],10:[function(){Object.keys=Object.keys||function(e){var t=[];for(var n in e)t.hasOwnProperty.call(e,n)&&t.push(n);return t},Array.prototype.forEach=Array.prototype.forEach||function(e,t){for(var n=this,i=0,a=n.length;i<a;i++)e.call(t,n[i],i,n)},Object.assign=Object.assign||function(e){for(var t,n,i=1;i<arguments.length;++i)for(t in n=arguments[i])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}},{}],11:[function(e,t,n){n.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},n.isValueEmpty=function(e){return""===e||n.isObjectEmpty(e)}},{}]},{},[1,2,3,4]),
// All code and conventions are protected by copyright
function(e,t,n){function i(){T.addEventHandler(e,"orientationchange",i.orientationChange)}function a(t){t=t||T.rules,this.rules=T.filter(t,function(e){return"inview"===e.event}),this.elements=[],this.eventHandler=T.bind(this.track,this),T.addEventHandler(e,"scroll",this.eventHandler),T.addEventHandler(e,"load",this.eventHandler)}function r(){this.rules=T.filter(T.rules,function(e){return"videoplayed"===e.event.substring(0,11)}),this.eventHandler=T.bind(this.onUpdateTime,this)}function s(){T.getToolsByType("nielsen").length>0&&T.domReady(T.bind(this.initialize,this))}function o(e){this.delay=250,this.FB=e,T.domReady(T.bind(function(){T.poll(T.bind(this.initialize,this),this.delay,8)},this))}function c(){this.defineEvents(),this.visibilityApiHasPriority=!0,t.addEventListener?this.setVisibilityApiPriority(!1):this.attachDetachOlderEventListeners(!0,t,"focusout");T.bindEvent("aftertoolinit",function(){T.fireEvent(T.visibility.isHidden()?"tabblur":"tabfocus")})}function u(){this.lastURL=T.URL(),this._fireIfURIChanged=T.bind(this.fireIfURIChanged,this),this._onPopState=T.bind(this.onPopState,this),this._onHashChange=T.bind(this.onHashChange,this),this._pushState=T.bind(this.pushState,this),this._replaceState=T.bind(this.replaceState,this),this.initialize()}function l(){var e=T.filter(T.rules,function(e){return 0===e.event.indexOf("dataelementchange")});this.dataElementsNames=T.map(e,function(e){return e.event.match(/dataelementchange\((.*)\)/i)[1]},this),this.initPolling()}function g(){this.rules=T.filter(T.rules,function(e){return"elementexists"===e.event})}function d(){var e=this.eventRegex=/^hover\(([0-9]+)\)$/,t=this.rules=[];T.each(T.rules,function(n){n.event.match(e)&&t.push([Number(n.event.match(e)[1]),n.selector])})}function f(t){T.domReady(T.bind(function(){this.twttr=t||e.twttr,this.initialize()},this))}function h(e){T.BaseTool.call(this,e),this.styleElements={},this.targetPageParamsStore={}}function p(e){T.BaseTool.call(this,e),this.defineListeners(),this.beaconMethod="plainBeacon",this.adapt=new p.DataAdapters,this.dataProvider=new p.DataProvider.Aggregate}function m(e){T.BaseTool.call(this,e),this.varBindings={},this.events=[],this.products=[],this.customSetupFuns=[]}function v(){T.BaseTool.call(this),this.asyncScriptCallbackQueue=[],this.argsForBlockingScripts=[]}function y(e){T.BaseTool.call(this,e),this.name=e.name||"Basic"}function b(e){T.BaseTool.call(this,e),this.name=e.name||"VisitorID",this.initialize()}function S(e){T.BaseTool.call(this,e)}function _(e){T.BaseTool.call(this,e)}var D,I,C,E=Object.prototype.toString,k=e._satellite&&e._satellite.override,T={initialized:!1,$data:function(e,t,i){if(e){var a="__satellite__",r=T.dataCache,s=e[a];s||(s=e[a]=T.uuid++);var o=r[s];if(o||(o=r[s]={}),i===n)return o[t];o[t]=i}},uuid:1,dataCache:{},keys:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},values:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(e[n]);return t},isArray:Array.isArray||function(e){return"[object Array]"===E.apply(e)},isObject:function(e){return null!=e&&!T.isArray(e)&&"object"==typeof e},isString:function(e){return"string"==typeof e},isNumber:function(e){return"[object Number]"===E.apply(e)&&!T.isNaN(e)},isNaN:function(e){return e!=e},isRegex:function(e){return e instanceof RegExp},isLinkTag:function(e){return!(!e||!e.nodeName||"a"!==e.nodeName.toLowerCase())},each:function(e,t,n){for(var i=0,a=e.length;i<a;i++)t.call(n,e[i],i,e)},map:function(e,t,n){for(var i=[],a=0,r=e.length;a<r;a++)i.push(t.call(n,e[a],a,e));return i},filter:function(e,t,n){for(var i=[],a=0,r=e.length;a<r;a++){var s=e[a];t.call(n,s,a,e)&&i.push(s)}return i},any:function(e,t,n){for(var i=0,a=e.length;i<a;i++){var r=e[i];if(t.call(n,r,i,e))return!0}return!1},every:function(e,t,n){for(var i=!0,a=0,r=e.length;a<r;a++){var s=e[a];i=i&&t.call(n,s,a,e)}return i},contains:function(e,t){return-1!==T.indexOf(e,t)},indexOf:function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=e.length;n--;)if(t===e[n])return n;return-1},find:function(e,t,n){if(!e)return null;for(var i=0,a=e.length;i<a;i++){var r=e[i];if(t.call(n,r,i,e))return r}return null},textMatch:function(e,t){if(null==t)throw new Error("Illegal Argument: Pattern is not present");return null!=e&&("string"==typeof t?e===t:t instanceof RegExp&&t.test(e))},stringify:function(e,t){if(t=t||[],T.isObject(e)){if(T.contains(t,e))return"<Cycle>";t.push(e)}if(T.isArray(e))return"["+T.map(e,function(e){return T.stringify(e,t)}).join(",")+"]";if(T.isString(e))return'"'+String(e)+'"';if(T.isObject(e)){var n=[];for(var i in e)e.hasOwnProperty(i)&&n.push(i+": "+T.stringify(e[i],t));return"{"+n.join(", ")+"}"}return String(e)},trim:function(e){return null==e?null:e.trim?e.trim():e.replace(/^ */,"").replace(/ *$/,"")},bind:function(e,t){return function(){return e.apply(t,arguments)}},throttle:function(e,t){var n=null;return function(){var i=this,a=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(i,a)},t)}},domReady:function(e){function n(e){for(d=1;e=a.shift();)e()}var i,a=[],r=!1,s=t,o=s.documentElement,c=o.doScroll,u="DOMContentLoaded",l="addEventListener",g="onreadystatechange",d=/^loade|^c/.test(s.readyState);return s[l]&&s[l](u,i=function(){s.removeEventListener(u,i,r),n()},r),c&&s.attachEvent(g,i=function(){/^c/.test(s.readyState)&&(s.detachEvent(g,i),n())}),e=c?function(t){self!=top?d?t():a.push(t):function(){try{o.doScroll("left")}catch(n){return setTimeout(function(){e(t)},50)}t()}()}:function(e){d?e():a.push(e)}}(),loadScript:function(e,n){var i=t.createElement("script");T.scriptOnLoad(e,i,n),i.src=e,t.getElementsByTagName("head")[0].appendChild(i)},scriptOnLoad:function(e,t,n){function i(e){e&&T.logError(e),n&&n(e)}"onload"in t?(t.onload=function(){i()},t.onerror=function(){i(new Error("Failed to load script "+e))}):"readyState"in t&&(t.onreadystatechange=function(){var e=t.readyState;"loaded"!==e&&"complete"!==e||(t.onreadystatechange=null,i())})},loadScriptOnce:function(e,t){T.loadedScriptRegistry[e]||T.loadScript(e,function(n){n||(T.loadedScriptRegistry[e]=!0),t&&t(n)})},loadedScriptRegistry:{},loadScriptSync:function(e){t.write?T.domReadyFired?T.notify('Cannot load sync the "'+e+'" script after DOM Ready.',1):(e.indexOf('"')>-1&&(e=encodeURI(e)),t.write('<script src="'+e+'"></script>')):T.notify('Cannot load sync the "'+e+'" script because "document.write" is not available',1)},pushAsyncScript:function(e){T.tools["default"].pushAsyncScript(e)},pushBlockingScript:function(e){T.tools["default"].pushBlockingScript(e)},addEventHandler:e.addEventListener?function(e,t,n){e.addEventListener(t,n,!1)}:function(e,t,n){e.attachEvent("on"+t,n)},removeEventHandler:e.removeEventListener?function(e,t,n){e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent("on"+t,n)},preventDefault:e.addEventListener?function(e){e.preventDefault()}:function(e){e.returnValue=!1},stopPropagation:function(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()},containsElement:function(e,t){return e.contains?e.contains(t):!!(16&e.compareDocumentPosition(t))},matchesCss:function(n){function i(e,t){var n=t.tagName;return!!n&&e.toLowerCase()===n.toLowerCase()}var a=n.matchesSelector||n.mozMatchesSelector||n.webkitMatchesSelector||n.oMatchesSelector||n.msMatchesSelector;return a?function(n,i){if(i===t||i===e)return!1;try{return a.call(i,n)}catch(r){return!1}}:n.querySelectorAll?function(e,t){if(!t.parentNode)return!1;if(e.match(/^[a-z]+$/i))return i(e,t);try{for(var n=t.parentNode.querySelectorAll(e),a=n.length;a--;)if(n[a]===t)return!0}catch(r){}return!1}:function(e,t){if(e.match(/^[a-z]+$/i))return i(e,t);try{return T.Sizzle.matches(e,[t]).length>0}catch(n){return!1}}}(t.documentElement),cssQuery:(D=t,D.querySelectorAll?function(e,t){var n;try{n=D.querySelectorAll(e)}catch(i){n=[]}t(n)}:function(e,t){if(T.Sizzle){var n;try{n=T.Sizzle(e)}catch(i){n=[]}t(n)}else T.sizzleQueue.push([e,t])}),hasAttr:function(e,t){return e.hasAttribute?e.hasAttribute(t):e[t]!==n},inherit:function(e,t){var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e},extend:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},toArray:function(){try{var e=Array.prototype.slice;return e.call(t.documentElement.childNodes,0)[0].nodeType,function(t){return e.call(t,0)}}catch(n){return function(e){for(var t=[],n=0,i=e.length;n<i;n++)t.push(e[n]);return t}}}(),equalsIgnoreCase:function(e,t){return null==e?null==t:null!=t&&String(e).toLowerCase()===String(t).toLowerCase()},poll:function(e,t,n){function i(){T.isNumber(n)&&a++>=n||e()||setTimeout(i,t)}var a=0;t=t||1e3,i()},escapeForHtml:function(e){return e?String(e).replace(/\&/g,"&amp;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#x27;").replace(/\//g,"&#x2F;"):e}};T.availableTools={},T.availableEventEmitters=[],T.fireOnceEvents=["condition","elementexists"],T.initEventEmitters=function(){T.eventEmitters=T.map(T.availableEventEmitters,function(e){return new e})},T.eventEmitterBackgroundTasks=function(){T.each(T.eventEmitters,function(e){"backgroundTasks"in e&&e.backgroundTasks()})},T.initTools=function(e){var t={"default":new v},n=T.settings.euCookieName||"sat_track";for(var i in e)if(e.hasOwnProperty(i)){var a,r,s;if((a=e[i]).euCookie)if("true"!==T.readCookie(n))continue;if(!(r=T.availableTools[a.engine])){var o=[];for(var c in T.availableTools)T.availableTools.hasOwnProperty(c)&&o.push(c);throw new Error("No tool engine named "+a.engine+", available: "+o.join(",")+".")}(s=new r(a)).id=i,t[i]=s}return t},T.preprocessArguments=function(e,t,n,i,a){function r(e){return i&&T.isString(e)?e.toLowerCase():e}function s(e){var c={};for(var u in e)if(e.hasOwnProperty(u)){var l=e[u];T.isObject(l)?c[u]=s(l):T.isArray(l)?c[u]=o(l,i):c[u]=r(T.replace(l,t,n,a))}return c}function o(e){for(var i=[],a=0,o=e.length;a<o;a++){var c=e[a];T.isString(c)?c=r(T.replace(c,t,n)):c&&c.constructor===Object&&(c=s(c)),i.push(c)}return i}return e?o(e,i):e},T.execute=function(e,t,n,i){function a(a){var r=i[a||"default"];if(r)try{r.triggerCommand(e,t,n)}catch(s){T.logError(s)}}if(!_satellite.settings.hideActivity)if(i=i||T.tools,e.engine){var r=e.engine;for(var s in i)if(i.hasOwnProperty(s)){var o=i[s];o.settings&&o.settings.engine===r&&a(s)}}else e.tool instanceof Array?T.each(e.tool,function(e){a(e)}):a(e.tool)},T.Logger={outputEnabled:!1,messages:[],keepLimit:100,flushed:!1,LEVELS:[null,null,"log","info","warn","error"],message:function(e,t){var n=this.LEVELS[t]||"log";this.messages.push([n,e]),this.messages.length>this.keepLimit&&this.messages.shift(),this.outputEnabled&&this.echo(n,e)},getHistory:function(){return this.messages},clearHistory:function(){this.messages=[]},setOutputState:function(e){this.outputEnabled!=e&&(this.outputEnabled=e,e?this.flush():this.flushed=!1)},echo:function(t,n){e.console&&e.console[t]("SATELLITE: "+n)},flush:function(){this.flushed||(T.each(this.messages,function(e){!0!==e[2]&&(this.echo(e[0],e[1]),e[2]=!0)},this),this.flushed=!0)}},T.notify=T.bind(T.Logger.message,T.Logger),T.cleanText=function(e){return null==e?null:T.trim(e).replace(/\s+/g," ")},T.cleanText.legacy=function(e){return null==e?null:T.trim(e).replace(/\s{2,}/g," ").replace(/[^\000-\177]*/g,"")},T.text=function(e){return e.textContent||e.innerText},T.specialProperties={text:T.text,cleanText:function(e){return T.cleanText(T.text(e))}},T.getObjectProperty=function(e,t,i){for(var a,r=t.split("."),s=e,o=T.specialProperties,c=0,u=r.length;c<u;c++){if(null==s)return n;var l=r[c];if(i&&"@"===l.charAt(0))s=o[l.slice(1)](s);else if(s.getAttribute&&(a=l.match(/^getAttribute\((.+)\)$/))){var g=a[1];s=s.getAttribute(g)}else s=s[l]}return s},T.getToolsByType=function(e){if(!e)throw new Error("Tool type is missing");var t=[];for(var n in T.tools)if(T.tools.hasOwnProperty(n)){var i=T.tools[n];i.settings&&i.settings.engine===e&&t.push(i)}return t},T.setVar=function(){var e=T.data.customVars;if(null==e&&(T.data.customVars={},e=T.data.customVars),"string"==typeof arguments[0])e[arguments[0]]=arguments[1];else if(arguments[0]){var t=arguments[0];for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}},T.dataElementSafe=function(e,t){if(arguments.length>2){var n=arguments[2];"pageview"===t?T.dataElementSafe.pageviewCache[e]=n:"session"===t?T.setCookie("_sdsat_"+e,n):"visitor"===t&&T.setCookie("_sdsat_"+e,n,730)}else{if("pageview"===t)return T.dataElementSafe.pageviewCache[e];if("session"===t||"visitor"===t)return T.readCookie("_sdsat_"+e)}},T.dataElementSafe.pageviewCache={},T.realGetDataElement=function(t){var n;return t.selector?T.hasSelector&&T.cssQuery(t.selector,function(e){if(e.length>0){var i=e[0];"text"===t.property?n=i.innerText||i.textContent:t.property in i?n=i[t.property]:T.hasAttr(i,t.property)&&(n=i.getAttribute(t.property))}}):t.queryParam?n=t.ignoreCase?T.getQueryParamCaseInsensitive(t.queryParam):T.getQueryParam(t.queryParam):t.cookie?n=T.readCookie(t.cookie):t.jsVariable?n=T.getObjectProperty(e,t.jsVariable):t.customJS?n=t.customJS():t.contextHub&&(n=t.contextHub()),T.isString(n)&&t.cleanText&&(n=T.cleanText(n)),n},T.getDataElement=function(e,t,i){if(null==(i=i||T.dataElements[e]))return T.settings.undefinedVarsReturnEmpty?"":null;var a=T.realGetDataElement(i);return a===n&&i.storeLength?a=T.dataElementSafe(e,i.storeLength):a!==n&&i.storeLength&&T.dataElementSafe(e,i.storeLength,a),a||t||(a=i["default"]||""),T.isString(a)&&i.forceLowerCase&&(a=a.toLowerCase()),a},T.getVar=function(i,a,r){var s,o,c=T.data.customVars,u=r?r.target||r.srcElement:null,l={uri:T.URI(),protocol:t.location.protocol,hostname:t.location.hostname};if(T.dataElements&&i in T.dataElements)return T.getDataElement(i);if((o=l[i.toLowerCase()])===n)if("this."===i.substring(0,5))i=i.slice(5),o=T.getObjectProperty(a,i,!0);else if("event."===i.substring(0,6))i=i.slice(6),o=T.getObjectProperty(r,i);else if("target."===i.substring(0,7))i=i.slice(7),o=T.getObjectProperty(u,i);else if("window."===i.substring(0,7))i=i.slice(7),o=T.getObjectProperty(e,i);else if("param."===i.substring(0,6))i=i.slice(6),o=T.getQueryParam(i);else if(s=i.match(/^rand([0-9]+)$/)){var g=Number(s[1]),d=(Math.random()*(Math.pow(10,g)-1)).toFixed(0);o=Array(g-d.length+1).join("0")+d}else o=T.getObjectProperty(c,i);return o},T.getVars=function(e,t,n){var i={};return T.each(e,function(e){i[e]=T.getVar(e,t,n)}),i},T.replace=function(e,t,n,i){return"string"!=typeof e?e:e.replace(/%(.*?)%/g,function(e,a){var r=T.getVar(a,t,n);return null==r?T.settings.undefinedVarsReturnEmpty?"":e:i?T.escapeForHtml(r):r})},T.escapeHtmlParams=function(e){return e.escapeHtml=!0,e},T.searchVariables=function(e,t,n){if(!e||0===e.length)return"";for(var i=[],a=0,r=e.length;a<r;a++){var s=e[a],o=T.getVar(s,t,n);i.push(s+"="+escape(o))}return"?"+i.join("&")},T.fireRule=function(e,t,n){var i=e.trigger;if(i){for(var a=0,r=i.length;a<r;a++){var s=i[a];T.execute(s,t,n)}T.contains(T.fireOnceEvents,e.event)&&(e.expired=!0)}},T.isLinked=function(e){for(var t=e;t;t=t.parentNode)if(T.isLinkTag(t))return!0;return!1},T.firePageLoadEvent=function(e){for(var n=t.location,i={type:e,target:n},a=T.pageLoadRules,r=T.evtHandlers[i.type],s=a.length;s--;){var o=a[s];T.ruleMatches(o,i,n)&&(T.notify('Rule "'+o.name+'" fired.',1),T.fireRule(o,n,i))}for(var c in T.tools)if(T.tools.hasOwnProperty(c)){var u=T.tools[c];u.endPLPhase&&u.endPLPhase(e)}r&&T.each(r,function(e){e(i)})},T.track=function(e){e=e.replace(/^\s*/,"").replace(/\s*$/,"");for(var t=0;t<T.directCallRules.length;t++){var n=T.directCallRules[t];if(n.name===e)return T.notify('Direct call Rule "'+e+'" fired.',1),void T.fireRule(n,location,{type:e})}T.notify('Direct call Rule "'+e+'" not found.',1)},T.basePath=function(){return T.data.host?("https:"===t.location.protocol?"https://"+T.data.host.https:"http://"+T.data.host.http)+"/":this.settings.basePath},T.setLocation=function(t){e.location=t},T.parseQueryParams=function(e){var t=function(e){var t=e;try{t=decodeURIComponent(e)}catch(n){}return t};if(""===e||!1===T.isString(e))return{};0===e.indexOf("?")&&(e=e.substring(1));var n={},i=e.split("&");return T.each(i,function(e){(e=e.split("="))[1]&&(n[t(e[0])]=t(e[1]))}),n},T.getCaseSensitivityQueryParamsMap=function(e){var t=T.parseQueryParams(e),n={};for(var i in t)t.hasOwnProperty(i)&&(n[i.toLowerCase()]=t[i]);return{normal:t,caseInsensitive:n}},T.updateQueryParams=function(){T.QueryParams=T.getCaseSensitivityQueryParamsMap(e.location.search)},T.updateQueryParams(),T.getQueryParam=function(e){return T.QueryParams.normal[e]},T.getQueryParamCaseInsensitive=function(e){return T.QueryParams.caseInsensitive[e.toLowerCase()]},T.encodeObjectToURI=function(e){if(!1===T.isObject(e))return"";var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")},T.readCookie=function(e){for(var i=e+"=",a=t.cookie.split(";"),r=0;r<a.length;r++){for(var s=a[r];" "==s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(i))return s.substring(i.length,s.length)}return n},T.setCookie=function(e,n,i){var a;if(i){var r=new Date;r.setTime(r.getTime()+24*i*60*60*1e3),a="; expires="+r.toGMTString()}else a="";t.cookie=e+"="+n+a+"; path=/"},T.removeCookie=function(e){T.setCookie(e,"",-1)},T.getElementProperty=function(e,t){if("@"===t.charAt(0)){var i=T.specialProperties[t.substring(1)];if(i)return i(e)}return"innerText"===t?T.text(e):t in e?e[t]:e.getAttribute?e.getAttribute(t):n},T.propertiesMatch=function(e,t){if(e)for(var n in e)if(e.hasOwnProperty(n)){var i=e[n],a=T.getElementProperty(t,n);if("string"==typeof i&&i!==a)return!1;if(i instanceof RegExp&&!i.test(a))return!1}return!0},T.isRightClick=function(e){var t;return e.which?t=3==e.which:e.button&&(t=2==e.button),t},T.ruleMatches=function(e,t,n,i){var a=e.condition,r=e.conditions,s=e.property,o=t.type,c=e.value,u=t.target||t.srcElement,l=n===u;if(e.event!==o&&("custom"!==e.event||e.customEvent!==o))return!1;if(!T.ruleInScope(e))return!1;if("click"===e.event&&T.isRightClick(t))return!1;if(e.isDefault&&i>0)return!1;if(e.expired)return!1;if("inview"===o&&t.inviewDelay!==e.inviewDelay)return!1;if(!l&&(!1===e.bubbleFireIfParent||0!==i&&!1===e.bubbleFireIfChildFired))return!1;if(e.selector&&!T.matchesCss(e.selector,n))return!1;if(!T.propertiesMatch(s,n))return!1;if(null!=c)if("string"==typeof c){if(c!==n.value)return!1}else if(!c.test(n.value))return!1;if(a)try{if(!a.call(n,t,u))return T.notify('Condition for rule "'+e.name+'" not met.',1),!1}catch(d){return T.notify('Condition for rule "'+e.name+'" not met. Error: '+d.message,1),!1}if(r){var g=T.find(r,function(i){try{return!i.call(n,t,u)}catch(d){return T.notify('Condition for rule "'+e.name+'" not met. Error: '+d.message,1),!0}});if(g)return T.notify("Condition "+g.toString()+' for rule "'+e.name+'" not met.',1),!1}return!0},T.evtHandlers={},T.bindEvent=function(e,t){var n=T.evtHandlers;n[e]||(n[e]=[]),n[e].push(t)},T.whenEvent=T.bindEvent,T.unbindEvent=function(e,t){var n=T.evtHandlers;if(n[e]){var i=T.indexOf(n[e],t);n[e].splice(i,1)}},T.bindEventOnce=function(e,t){var n=function(){T.unbindEvent(e,n),t.apply(null,arguments)};T.bindEvent(e,n)},T.isVMLPoisoned=function(e){if(!e)return!1;try{e.nodeName}catch(t){if("Attribute only valid on v:image"===t.message)return!0}return!1},T.handleEvent=function(e){if(!T.$data(e,"eventProcessed")){var t=e.type.toLowerCase(),n=e.target||e.srcElement,i=0,a=T.rules,r=(T.tools,T.evtHandlers[e.type]);if(T.isVMLPoisoned(n))T.notify("detected "+t+" on poisoned VML element, skipping.",1);else{r&&T.each(r,function(t){t(e)}),n&&n.nodeName?T.notify("detected "+t+" on "+n.nodeName,1):T.notify("detected "+t,1);for(var s=n;s;s=s.parentNode){var o=!1;if(T.each(a,function(t){T.ruleMatches(t,e,s,i)&&(T.notify('Rule "'+t.name+'" fired.',1),T.fireRule(t,s,e),i++,t.bubbleStop&&(o=!0))}),o)break}T.$data(e,"eventProcessed",!0)}}},T.onEvent=t.querySelectorAll?function(e){T.handleEvent(e)}:(I=[],(C=function(e){e.selector?I.push(e):T.handleEvent(e)}).pendingEvents=I,C),T.fireEvent=function(e,t){T.onEvent({type:e,target:t})},T.registerEvents=function(e,t){for(var n=t.length-1;n>=0;n--){var i=t[n];T.$data(e,i+".tracked")||(T.addEventHandler(e,i,T.onEvent),T.$data(e,i+".tracked",!0))}},T.registerEventsForTags=function(e,n){for(var i=e.length-1;i>=0;i--)for(var a=e[i],r=t.getElementsByTagName(a),s=r.length-1;s>=0;s--)T.registerEvents(r[s],n)},T.setListeners=function(){var e=["click","submit"];T.each(T.rules,function(t){"custom"===t.event&&t.hasOwnProperty("customEvent")&&!T.contains(e,t.customEvent)&&e.push(t.customEvent)}),T.registerEvents(t,e)},T.getUniqueRuleEvents=function(){return T._uniqueRuleEvents||(T._uniqueRuleEvents=[],T.each(T.rules,function(e){-1===T.indexOf(T._uniqueRuleEvents,e.event)&&T._uniqueRuleEvents.push(e.event)})),T._uniqueRuleEvents},T.setFormListeners=function(){if(!T._relevantFormEvents){var e=["change","focus","blur","keypress"];T._relevantFormEvents=T.filter(T.getUniqueRuleEvents(),function(t){return-1!==T.indexOf(e,t)})}T._relevantFormEvents.length&&T.registerEventsForTags(["input","select","textarea","button"],T._relevantFormEvents)},T.setVideoListeners=function(){if(!T._relevantVideoEvents){var e=["play","pause","ended","volumechange","stalled","loadeddata"];T._relevantVideoEvents=T.filter(T.getUniqueRuleEvents(),function(t){return-1!==T.indexOf(e,t)})}T._relevantVideoEvents.length&&T.registerEventsForTags(["video"],T._relevantVideoEvents)},T.readStoredSetting=function(t){try{return t="sdsat_"+t,e.localStorage.getItem(t)}catch(n){return T.notify("Cannot read stored setting from localStorage: "+n.message,2),null}},T.loadStoredSettings=function(){var e=T.readStoredSetting("debug"),t=T.readStoredSetting("hide_activity");e&&(T.settings.notifications="true"===e),t&&(T.settings.hideActivity="true"===t)},T.isRuleActive=function(e,t){function n(e,t){return t=a(t,{hour:e[f](),minute:e[h]()}),Math.floor(Math.abs((e.getTime()-t.getTime())/864e5))}function i(e,t){function n(e){return 12*e[g]()+e[d]()}return Math.abs(n(e)-n(t))}function a(e,t){var n=new Date(e.getTime());for(var i in t)if(t.hasOwnProperty(i)){var a=t[i];switch(i){case"hour":n[p](a);break;case"minute":n[m](a);break;case"date":n[v](a)}}return n}function r(e,t){return 60*e[f]()+e[h]()>60*t[f]()+t[h]()}function s(e,t){return 60*e[f]()+e[h]()<60*t[f]()+t[h]()}var o=e.schedule;if(!o)return!0;var c=o.utc,u=c?"getUTCDate":"getDate",l=c?"getUTCDay":"getDay",g=c?"getUTCFullYear":"getFullYear",d=c?"getUTCMonth":"getMonth",f=c?"getUTCHours":"getHours",h=c?"getUTCMinutes":"getMinutes",p=c?"setUTCHours":"setHours",m=c?"setUTCMinutes":"setMinutes",v=c?"setUTCDate":"setDate";if(t=t||new Date,o.repeat){if(r(o.start,t))return!1;if(s(o.end,t))return!1;if(t<o.start)return!1;if(o.endRepeat&&t>=o.endRepeat)return!1;if("daily"===o.repeat){if(o.repeatEvery)if(n(o.start,t)%o.repeatEvery!=0)return!1}else if("weekly"===o.repeat){if(o.days){if(!T.contains(o.days,t[l]()))return!1}else if(o.start[l]()!==t[l]())return!1;if(o.repeatEvery)if(n(o.start,t)%(7*o.repeatEvery)!=0)return!1}else if("monthly"===o.repeat){if(o.repeatEvery)if(i(o.start,t)%o.repeatEvery!=0)return!1;if(o.nthWeek&&o.mthDay){if(o.mthDay!==t[l]())return!1;var y=Math.floor((t[u]()-t[l]()+1)/7);if(o.nthWeek!==y)return!1}else if(o.start[u]()!==t[u]())return!1}else if("yearly"===o.repeat){if(o.start[d]()!==t[d]())return!1;if(o.start[u]()!==t[u]())return!1;if(o.repeatEvery)if(Math.abs(o.start[g]()-t[g]())%o.repeatEvery!=0)return!1}}else{if(o.start>t)return!1;if(o.end<t)return!1}return!0},T.isOutboundLink=function(e){if(!e.getAttribute("href"))return!1;var t=e.hostname,n=(e.href,e.protocol);return("http:"===n||"https:"===n)&&(!T.any(T.settings.domainList,function(e){return T.isSubdomainOf(t,e)})&&t!==location.hostname)},T.isLinkerLink=function(e){return!(!e.getAttribute||!e.getAttribute("href"))&&(T.hasMultipleDomains()&&e.hostname!=location.hostname&&!e.href.match(/^javascript/i)&&!T.isOutboundLink(e))},T.isSubdomainOf=function(e,t){if(e===t)return!0;var n=e.length-t.length;return n>0&&T.equalsIgnoreCase(e.substring(n),t)},T.getVisitorId=function(){var e=T.getToolsByType("visitor_id");return 0===e.length?null:e[0].getInstance()},T.URI=function(){var e=t.location.pathname+t.location.search;return T.settings.forceLowerCase&&(e=e.toLowerCase()),e},T.URL=function(){var e=t.location.href;return T.settings.forceLowerCase&&(e=e.toLowerCase()),e},T.filterRules=function(){function e(e){return!!T.isRuleActive(e)}T.rules=T.filter(T.rules,e),T.pageLoadRules=T.filter(T.pageLoadRules,e)},T.ruleInScope=function(e,n){function i(e,t){function n(e){return t.match(e)}var i=e.include,r=e.exclude;if(i&&a(i,t))return!0;if(r){if(T.isString(r)&&r===t)return!0;if(T.isArray(r)&&T.any(r,n))return!0;if(T.isRegex(r)&&n(r))return!0}return!1}function a(e,t){function n(e){return t.match(e)}return!(!T.isString(e)||e===t)||(!(!T.isArray(e)||T.any(e,n))||!(!T.isRegex(e)||n(e)))}n=n||t.location;var r=e.scope;if(!r)return!0;var s=r.URI,o=r.subdomains,c=r.domains,u=r.protocols,l=r.hashes;return(!s||!i(s,n.pathname+n.search))&&((!o||!i(o,n.hostname))&&((!c||!a(c,n.hostname))&&((!u||!a(u,n.protocol))&&(!l||!i(l,n.hash)))))},T.backgroundTasks=function(){new Date;T.setFormListeners(),T.setVideoListeners(),T.loadStoredSettings(),T.registerNewElementsForDynamicRules(),T.eventEmitterBackgroundTasks();new Date},T.registerNewElementsForDynamicRules=function(){function e(t,n){var i=e.cache[t];if(i)return n(i);T.cssQuery(t,function(i){e.cache[t]=i,n(i)})}e.cache={},T.each(T.dynamicRules,function(t){e(t.selector,function(e){T.each(e,function(e){var n="custom"===t.event?t.customEvent:t.event;T.$data(e,"dynamicRules.seen."+n)||(T.$data(e,"dynamicRules.seen."+n,!0),T.propertiesMatch(t.property,e)&&T.registerEvents(e,[n]))})})})},T.ensureCSSSelector=function(){t.querySelectorAll?T.hasSelector=!0:(T.loadingSizzle=!0,T.sizzleQueue=[],T.loadScript(T.basePath()+"selector.js",function(){if(T.Sizzle){var e=T.onEvent.pendingEvents;T.each(e,function(e){T.handleEvent(e)},this),T.onEvent=T.handleEvent,T.hasSelector=!0,delete T.loadingSizzle,T.each(T.sizzleQueue,function(e){T.cssQuery(e[0],e[1])}),delete T.sizzleQueue}else T.logError(new Error("Failed to load selector.js"))}))},T.errors=[],T.logError=function(e){T.errors.push(e),T.notify(e.name+" - "+e.message,5)},T.pageBottom=function(){T.initialized&&(T.pageBottomFired=!0,T.firePageLoadEvent("pagebottom"))},T.stagingLibraryOverride=function(){if("true"===T.readStoredSetting("stagingLibrary")){for(var e,n,i,a=t.getElementsByTagName("script"),r=/^(.*)satelliteLib-([a-f0-9]{40})\.js$/,s=/^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/,o=0,c=a.length;o<c&&(!(i=a[o].getAttribute("src"))||(e||(e=i.match(r)),n||(n=i.match(s)),!n));o++);if(e&&!n){var u=e[1]+"satelliteLib-"+e[2]+"-staging.js";if(t.write)t.write('<script src="'+u+'"></script>');else{var l=t.createElement("script");l.src=u,t.head.appendChild(l)}return!0}}return!1},T.checkAsyncInclude=function(){e.satellite_asyncLoad&&T.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.',5)},T.hasMultipleDomains=function(){return!!T.settings.domainList&&T.settings.domainList.length>1},T.handleOverrides=function(){if(k)for(var e in k)k.hasOwnProperty(e)&&(T.data[e]=k[e])},T.privacyManagerParams=function(){var e={};T.extend(e,T.settings.privacyManagement);var t=[];for(var n in T.tools)if(T.tools.hasOwnProperty(n)){var i=T.tools[n],a=i.settings;if(!a)continue;"sc"===a.engine&&t.push(i)}var r=T.filter(T.map(t,function(e){return e.getTrackingServer()}),function(e){return null!=e});e.adobeAnalyticsTrackingServers=r;for(var s=["bannerText","headline","introductoryText","customCSS"],o=0;o<s.length;o++){var c=s[o],u=e[c];if(u)if("text"===u.type)e[c]=u.value;else{if("data"!==u.type)throw new Error("Invalid type: "+u.type);e[c]=T.getVar(u.value)}}return e},T.prepareLoadPrivacyManager=function(){function t(e){function t(){++r===a.length&&(n(),clearTimeout(s),e())}function n(){T.each(a,function(e){T.unbindEvent(e.id+".load",t)})}function i(){n(),e()}var a=T.filter(T.values(T.tools),function(e){return e.settings&&"sc"===e.settings.engine});if(0===a.length)return e();var r=0;T.each(a,function(e){T.bindEvent(e.id+".load",t)});var s=setTimeout(i,5e3)}T.addEventHandler(e,"load",function(){t(T.loadPrivacyManager)})},T.loadPrivacyManager=function(){var e=T.basePath()+"privacy_manager.js";T.loadScript(e,function(){var e=T.privacyManager;e.configure(T.privacyManagerParams()),e.openIfRequired()})},T.init=function(t){if(!T.stagingLibraryOverride()){T.configurationSettings=t;var i=t.tools;for(var a in delete t.tools,t)t.hasOwnProperty(a)&&(T[a]=t[a]);T.data.customVars===n&&(T.data.customVars={}),T.data.queryParams=T.QueryParams.normal,T.handleOverrides(),T.detectBrowserInfo(),T.trackVisitorInfo&&T.trackVisitorInfo(),T.loadStoredSettings(),T.Logger.setOutputState(T.settings.notifications),T.checkAsyncInclude(),T.ensureCSSSelector(),T.filterRules(),T.dynamicRules=T.filter(T.rules,function(e){return e.eventHandlerOnElement}),T.tools=T.initTools(i),T.initEventEmitters(),T.firePageLoadEvent("aftertoolinit"),T.settings.privacyManagement&&T.prepareLoadPrivacyManager(),T.hasSelector&&T.domReady(T.eventEmitterBackgroundTasks),T.setListeners(),T.domReady(function(){T.poll(function(){T.backgroundTasks()},T.settings.recheckEvery||3e3)}),T.domReady(function(){T.domReadyFired=!0,T.pageBottomFired||T.pageBottom(),T.firePageLoadEvent("domready")}),T.addEventHandler(e,"load",function(){T.firePageLoadEvent("windowload")}),T.firePageLoadEvent("pagetop"),T.initialized=!0}},T.pageLoadPhases=["aftertoolinit","pagetop","pagebottom","domready","windowload"],T.loadEventBefore=function(e,t){return T.indexOf(T.pageLoadPhases,e)<=T.indexOf(T.pageLoadPhases,t)},T.flushPendingCalls=function(e){e.pending&&(T.each(e.pending,function(t){var n=t[0],i=t[1],a=t[2],r=t[3];n in e?e[n].apply(e,[i,a].concat(r)):e.emit?e.emit(n,i,a,r):T.notify("Failed to trigger "+n+" for tool "+e.id,1)}),delete e.pending)},T.setDebug=function(t){try{e.localStorage.setItem("sdsat_debug",t)}catch(n){T.notify("Cannot set debug mode: "+n.message,2)}},T.getUserAgent=function(){return navigator.userAgent},T.detectBrowserInfo=function(){function e(e){return function(t){for(var n in e){if(e.hasOwnProperty(n))if(e[n].test(t))return n}return"Unknown"}}var t=e({"IE Edge Mobile":/Windows Phone.*Edge/,"IE Edge":/Edge/,OmniWeb:/OmniWeb/,"Opera Mini":/Opera Mini/,"Opera Mobile":/Opera Mobi/,Opera:/Opera/,Chrome:/Chrome|CriOS|CrMo/,Firefox:/Firefox|FxiOS/,"IE Mobile":/IEMobile/,IE:/MSIE|Trident/,"Mobile Safari":/Mobile(\/[0-9A-z]+)? Safari/,Safari:/Safari/}),n=e({Blackberry:/BlackBerry|BB10/,"Symbian OS":/Symbian|SymbOS/,Maemo:/Maemo/,Android:/Android/,Linux:/ Linux /,Unix:/FreeBSD|OpenBSD|CrOS/,Windows:/[\( ]Windows /,iOS:/iPhone|iPad|iPod/,MacOS:/Macintosh;/}),i=e({Nokia:/Symbian|SymbOS|Maemo/,"Windows Phone":/Windows Phone/,Blackberry:/BlackBerry|BB10/,Android:/Android/,iPad:/iPad/,iPod:/iPod/,iPhone:/iPhone/,Desktop:/.*/}),a=T.getUserAgent();T.browserInfo={browser:t(a),os:n(a),deviceType:i(a)}},T.isHttps=function(){return"https:"==t.location.protocol},T.BaseTool=function(e){this.settings=e||{},this.forceLowerCase=T.settings.forceLowerCase,"forceLowerCase"in this.settings&&(this.forceLowerCase=this.settings.forceLowerCase)},T.BaseTool.prototype={triggerCommand:function(e,t,n){var i=this.settings||{};if(this.initialize&&this.isQueueAvailable()&&this.isQueueable(e)&&n&&T.loadEventBefore(n.type,i.loadOn))this.queueCommand(e,t,n);else{var a=e.command,r=this["$"+a],s=!!r&&r.escapeHtml,o=T.preprocessArguments(e.arguments,t,n,this.forceLowerCase,s);r?r.apply(this,[t,n].concat(o)):this.$missing$?this.$missing$(a,t,n,o):T.notify("Failed to trigger "+a+" for tool "+this.id,1)}},endPLPhase:function(){},isQueueable:function(e){return"cancelToolInit"!==e.command},isQueueAvailable:function(){return!this.initialized&&!this.initializing},flushQueue:function(){this.pending&&(T.each(this.pending,function(e){this.triggerCommand.apply(this,e)},this),this.pending=[])},queueCommand:function(e,t,n){this.pending||(this.pending=[]),this.pending.push([e,t,n])},$cancelToolInit:function(){this._cancelToolInit=!0}},e._satellite=T,T.visibility={isHidden:function(){var e=this.getHiddenProperty();return!!e&&t[e]},isVisible:function(){return!this.isHidden()},getHiddenProperty:function(){var e=["webkit","moz","ms","o"];if("hidden"in t)return"hidden";for(var n=0;n<e.length;n++)if(e[n]+"Hidden"in t)return e[n]+"Hidden";return null},getVisibilityEvent:function(){var e=this.getHiddenProperty();return e?e.replace(/[H|h]idden/,"")+"visibilitychange":null}},T.ecommerce={addItem:function(){var e=[].slice.call(arguments);T.onEvent({type:"ecommerce.additem",target:e})},addTrans:function(){
var e=[].slice.call(arguments);T.data.saleData.sale={orderId:e[0],revenue:e[2]},T.onEvent({type:"ecommerce.addtrans",target:e})},trackTrans:function(){T.onEvent({type:"ecommerce.tracktrans",target:[]})}},i.orientationChange=function(t){var n=0===e.orientation?"portrait":"landscape";t.orientation=n,T.onEvent(t)},T.availableEventEmitters.push(i),a.offset=function(n){var i=null,a=null;try{var r=n.getBoundingClientRect(),s=t,o=s.documentElement,c=s.body,u=e,l=o.clientTop||c.clientTop||0,g=o.clientLeft||c.clientLeft||0,d=u.pageYOffset||o.scrollTop||c.scrollTop,f=u.pageXOffset||o.scrollLeft||c.scrollLeft;i=r.top+d-l,a=r.left+f-g}catch(h){}return{top:i,left:a}},a.getViewportHeight=function(){var n=e.innerHeight,i=t.compatMode;return i&&(n="CSS1Compat"==i?t.documentElement.clientHeight:t.body.clientHeight),n},a.getScrollTop=function(){return t.documentElement.scrollTop?t.documentElement.scrollTop:t.body.scrollTop},a.isElementInDocument=function(e){return t.body.contains(e)},a.isElementInView=function(e){if(!a.isElementInDocument(e))return!1;var t=a.getViewportHeight(),n=a.getScrollTop(),i=a.offset(e).top,r=e.offsetHeight;return null!==i&&!(n>i+r||n+t<i)},a.prototype={backgroundTasks:function(){var e=this.elements;T.each(this.rules,function(t){T.cssQuery(t.selector,function(n){var i=0;T.each(n,function(t){T.contains(e,t)||(e.push(t),i++)}),i&&T.notify(t.selector+" added "+i+" elements.",1)})}),this.track()},checkInView:function(e,t,n){var i=T.$data(e,"inview");if(a.isElementInView(e)){i||T.$data(e,"inview",!0);var r=this;this.processRules(e,function(n,i,a){if(t||!n.inviewDelay)T.$data(e,i,!0),T.onEvent({type:"inview",target:e,inviewDelay:n.inviewDelay});else if(n.inviewDelay){var s=T.$data(e,a);s||(s=setTimeout(function(){r.checkInView(e,!0,n.inviewDelay)},n.inviewDelay),T.$data(e,a,s))}},n)}else{if(!a.isElementInDocument(e)){var s=T.indexOf(this.elements,e);this.elements.splice(s,1)}i&&T.$data(e,"inview",!1),this.processRules(e,function(t,n,i){var a=T.$data(e,i);a&&clearTimeout(a)},n)}},track:function(){for(var e=this.elements.length-1;e>=0;e--)this.checkInView(this.elements[e])},processRules:function(e,t,n){var i=this.rules;n&&(i=T.filter(this.rules,function(e){return e.inviewDelay==n})),T.each(i,function(n,i){var a=n.inviewDelay?"viewed_"+n.inviewDelay:"viewed",r="inview_timeout_id_"+i;T.$data(e,a)||T.matchesCss(n.selector,e)&&t(n,a,r)})}},T.availableEventEmitters.push(a),r.prototype={backgroundTasks:function(){var e=this.eventHandler;T.each(this.rules,function(t){T.cssQuery(t.selector||"video",function(t){T.each(t,function(t){T.$data(t,"videoplayed.tracked")||(T.addEventHandler(t,"timeupdate",T.throttle(e,100)),T.$data(t,"videoplayed.tracked",!0))})})})},evalRule:function(e,t){var n=t.event,i=e.seekable,a=i.start(0),r=i.end(0),s=e.currentTime,o=t.event.match(/^videoplayed\(([0-9]+)([s%])\)$/);if(o){var c=o[2],u=Number(o[1]),l="%"===c?function(){return u<=100*(s-a)/(r-a)}:function(){return u<=s-a};!T.$data(e,n)&&l()&&(T.$data(e,n,!0),T.onEvent({type:n,target:e}))}},onUpdateTime:function(e){var t=this.rules,n=e.target;if(n.seekable&&0!==n.seekable.length)for(var i=0,a=t.length;i<a;i++)this.evalRule(n,t[i])}},T.availableEventEmitters.push(r),s.prototype={obue:!1,initialize:function(){this.attachCloseListeners()},obuePrevUnload:function(){},obuePrevBeforeUnload:function(){},newObueListener:function(){this.obue||(this.obue=!0,this.triggerBeacons())},attachCloseListeners:function(){this.prevUnload=e.onunload,this.prevBeforeUnload=e.onbeforeunload,e.onunload=T.bind(function(t){this.prevUnload&&setTimeout(T.bind(function(){this.prevUnload.call(e,t)},this),1),this.newObueListener()},this),e.onbeforeunload=T.bind(function(t){this.prevBeforeUnload&&setTimeout(T.bind(function(){this.prevBeforeUnload.call(e,t)},this),1),this.newObueListener()},this)},triggerBeacons:function(){T.fireEvent("leave",t)}},T.availableEventEmitters.push(s),o.prototype={initialize:function(){if(this.FB=this.FB||e.FB,this.FB&&this.FB.Event&&this.FB.Event.subscribe)return this.bind(),!0},bind:function(){this.FB.Event.subscribe("edge.create",function(){T.notify("tracking a facebook like",1),T.onEvent({type:"facebook.like",target:t})}),this.FB.Event.subscribe("edge.remove",function(){T.notify("tracking a facebook unlike",1),T.onEvent({type:"facebook.unlike",target:t})}),this.FB.Event.subscribe("message.send",function(){T.notify("tracking a facebook share",1),T.onEvent({type:"facebook.send",target:t})})}},T.availableEventEmitters.push(o),c.prototype={defineEvents:function(){this.oldBlurClosure=function(){T.fireEvent("tabblur",t)},this.oldFocusClosure=T.bind(function(){this.visibilityApiHasPriority?T.fireEvent("tabfocus",t):null!=T.visibility.getHiddenProperty()&&T.visibility.isHidden()||T.fireEvent("tabfocus",t)},this)},attachDetachModernEventListeners:function(e){T[0==e?"removeEventHandler":"addEventHandler"](t,T.visibility.getVisibilityEvent(),this.handleVisibilityChange)},attachDetachOlderEventListeners:function(t,n,i){var a=0==t?"removeEventHandler":"addEventHandler";T[a](n,i,this.oldBlurClosure),T[a](e,"focus",this.oldFocusClosure)},handleVisibilityChange:function(){T.visibility.isHidden()?T.fireEvent("tabblur",t):T.fireEvent("tabfocus",t)},setVisibilityApiPriority:function(t){this.visibilityApiHasPriority=t,this.attachDetachOlderEventListeners(!1,e,"blur"),this.attachDetachModernEventListeners(!1),t?null!=T.visibility.getHiddenProperty()?this.attachDetachModernEventListeners(!0):this.attachDetachOlderEventListeners(!0,e,"blur"):(this.attachDetachOlderEventListeners(!0,e,"blur"),null!=T.visibility.getHiddenProperty()&&this.attachDetachModernEventListeners(!0))},oldBlurClosure:null,oldFocusClosure:null,visibilityApiHasPriority:!0},T.availableEventEmitters.push(c),u.prototype={initialize:function(){this.setupHistoryAPI(),this.setupHashChange()},fireIfURIChanged:function(){var e=T.URL();this.lastURL!==e&&(this.fireEvent(),this.lastURL=e)},fireEvent:function(){T.updateQueryParams(),T.onEvent({type:"locationchange",target:t})},setupSPASupport:function(){this.setupHistoryAPI(),this.setupHashChange()},setupHistoryAPI:function(){var t=e.history;t&&(t.pushState&&(this.originalPushState=t.pushState,t.pushState=this._pushState),t.replaceState&&(this.originalReplaceState=t.replaceState,t.replaceState=this._replaceState)),T.addEventHandler(e,"popstate",this._onPopState)},pushState:function(){var e=this.originalPushState.apply(history,arguments);return this.onPushState(),e},replaceState:function(){var e=this.originalReplaceState.apply(history,arguments);return this.onReplaceState(),e},setupHashChange:function(){T.addEventHandler(e,"hashchange",this._onHashChange)},onReplaceState:function(){setTimeout(this._fireIfURIChanged,0)},onPushState:function(){setTimeout(this._fireIfURIChanged,0)},onPopState:function(){setTimeout(this._fireIfURIChanged,0)},onHashChange:function(){setTimeout(this._fireIfURIChanged,0)},uninitialize:function(){this.cleanUpHistoryAPI(),this.cleanUpHashChange()},cleanUpHistoryAPI:function(){history.pushState===this._pushState&&(history.pushState=this.originalPushState),history.replaceState===this._replaceState&&(history.replaceState=this.originalReplaceState),T.removeEventHandler(e,"popstate",this._onPopState)},cleanUpHashChange:function(){T.removeEventHandler(e,"hashchange",this._onHashChange)}},T.availableEventEmitters.push(u),l.prototype.getStringifiedValue=e.JSON&&e.JSON.stringify||T.stringify,l.prototype.initPolling=function(){0!==this.dataElementsNames.length&&(this.dataElementsStore=this.getDataElementsValues(),T.poll(T.bind(this.checkDataElementValues,this),1e3))},l.prototype.getDataElementsValues=function(){var e={};return T.each(this.dataElementsNames,function(t){var n=T.getVar(t);e[t]=this.getStringifiedValue(n)},this),e},l.prototype.checkDataElementValues=function(){T.each(this.dataElementsNames,T.bind(function(e){var n=this.getStringifiedValue(T.getVar(e));n!==this.dataElementsStore[e]&&(this.dataElementsStore[e]=n,T.onEvent({type:"dataelementchange("+e+")",target:t}))},this))},T.availableEventEmitters.push(l),g.prototype.backgroundTasks=function(){T.each(this.rules,function(e){T.cssQuery(e.selector,function(e){if(e.length>0){var t=e[0];if(T.$data(t,"elementexists.seen"))return;T.$data(t,"elementexists.seen",!0),T.onEvent({type:"elementexists",target:t})}})})},T.availableEventEmitters.push(g),d.prototype={backgroundTasks:function(){var e=this;T.each(this.rules,function(t){var n=t[1],i=t[0];T.cssQuery(n,function(t){T.each(t,function(t){e.trackElement(t,i)})})},this)},trackElement:function(e,t){var n=this,i=T.$data(e,"hover.delays");i?T.contains(i,t)||i.push(t):(T.addEventHandler(e,"mouseover",function(t){n.onMouseOver(t,e)}),T.addEventHandler(e,"mouseout",function(t){n.onMouseOut(t,e)}),T.$data(e,"hover.delays",[t]))},onMouseOver:function(e,t){var n=e.target||e.srcElement,i=e.relatedTarget||e.fromElement;(t===n||T.containsElement(t,n))&&!T.containsElement(t,i)&&this.onMouseEnter(t)},onMouseEnter:function(e){var t=T.$data(e,"hover.delays"),n=T.map(t,function(t){return setTimeout(function(){T.onEvent({type:"hover("+t+")",target:e})},t)});T.$data(e,"hover.delayTimers",n)},onMouseOut:function(e,t){var n=e.target||e.srcElement,i=e.relatedTarget||e.toElement;(t===n||T.containsElement(t,n))&&!T.containsElement(t,i)&&this.onMouseLeave(t)},onMouseLeave:function(e){var t=T.$data(e,"hover.delayTimers");t&&T.each(t,function(e){clearTimeout(e)})}},T.availableEventEmitters.push(d),f.prototype={initialize:function(){var e=this.twttr;e&&"function"==typeof e.ready&&e.ready(T.bind(this.bind,this))},bind:function(){this.twttr.events.bind("tweet",function(e){e&&(T.notify("tracking a tweet button",1),T.onEvent({type:"twitter.tweet",target:t}))})}},T.availableEventEmitters.push(f),T.inherit(h,T.BaseTool),T.extend(h.prototype,{name:"tnt",endPLPhase:function(e){"aftertoolinit"===e&&this.initialize()},initialize:function(){T.notify("Test & Target: Initializing",1),this.initializeTargetPageParams(),this.load()},initializeTargetPageParams:function(){e.targetPageParams&&this.updateTargetPageParams(this.parseTargetPageParamsResult(e.targetPageParams())),this.updateTargetPageParams(this.settings.pageParams),this.setTargetPageParamsFunction()},load:function(){var e=this.getMboxURL(this.settings.mboxURL);!1!==this.settings.initTool?this.settings.loadSync?(T.loadScriptSync(e),this.onScriptLoaded()):(T.loadScript(e,T.bind(this.onScriptLoaded,this)),this.initializing=!0):this.initialized=!0},getMboxURL:function(t){var n=t;return T.isObject(t)&&(n="https:"===e.location.protocol?t.https:t.http),n.match(/^https?:/)?n:T.basePath()+n},onScriptLoaded:function(){T.notify("Test & Target: loaded.",1),this.flushQueue(),this.initialized=!0,this.initializing=!1},$addMbox:function(e,t,n){var i=n.mboxGoesAround,a=i+"{visibility: hidden;}",r=this.appendStyle(a);i in this.styleElements||(this.styleElements[i]=r),this.initialized?this.$addMBoxStep2(null,null,n):this.initializing&&this.queueCommand({command:"addMBoxStep2",arguments:[n]},e,t)},$addMBoxStep2:function(n,i,a){var r=this.generateID(),s=this;T.addEventHandler(e,"load",T.bind(function(){T.cssQuery(a.mboxGoesAround,function(n){var i=n[0];if(i){var o=t.createElement("div");o.id=r,i.parentNode.replaceChild(o,i),o.appendChild(i),e.mboxDefine(r,a.mboxName);var c=[a.mboxName];a.arguments&&(c=c.concat(a.arguments)),e.mboxUpdate.apply(null,c),s.reappearWhenCallComesBack(i,r,a.timeout,a)}})},this)),this.lastMboxID=r},$addTargetPageParams:function(e,t,n){this.updateTargetPageParams(n)},generateID:function(){return"_sdsat_mbox_"+String(Math.random()).substring(2)+"_"},appendStyle:function(e){var n=t.getElementsByTagName("head")[0],i=t.createElement("style");return i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),n.appendChild(i),i},reappearWhenCallComesBack:function(e,t,n,i){function a(){var e=r.styleElements[i.mboxGoesAround];e&&(e.parentNode.removeChild(e),delete r.styleElements[i.mboxGoesAround])}var r=this;T.cssQuery('script[src*="omtrdc.net"]',function(e){var t=e[0];if(t){T.scriptOnLoad(t.src,t,function(){T.notify("Test & Target: request complete",1),a(),clearTimeout(i)});var i=setTimeout(function(){T.notify("Test & Target: bailing after "+n+"ms",1),a()},n)}else T.notify("Test & Target: failed to find T&T ajax call, bailing",1),a()})},updateTargetPageParams:function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[T.replace(n)]=T.replace(e[n]));T.extend(this.targetPageParamsStore,t)},getTargetPageParams:function(){return this.targetPageParamsStore},setTargetPageParamsFunction:function(){e.targetPageParams=T.bind(this.getTargetPageParams,this)},parseTargetPageParamsResult:function(e){var t=e;return T.isArray(e)&&(e=e.join("&")),T.isString(e)&&(t=T.parseQueryParams(e)),t}}),T.availableTools.tnt=h,T.inherit(p,T.BaseTool),T.extend(p.prototype,{name:"Nielsen",endPLPhase:function(e){switch(e){case"pagetop":this.initialize();break;case"pagebottom":this.enableTracking&&(this.queueCommand({command:"sendFirstBeacon",arguments:[]}),this.flushQueueWhenReady())}},defineListeners:function(){this.onTabFocus=T.bind(function(){this.notify("Tab visible, sending view beacon when ready",1),this.tabEverVisible=!0,this.flushQueueWhenReady()},this),this.onPageLeave=T.bind(function(){this.notify("isHuman? : "+this.isHuman(),1),this.isHuman()&&this.sendDurationBeacon()},this),this.onHumanDetectionChange=T.bind(function(e){this==e.target.target&&(this.human=e.target.isHuman)},this)},initialize:function(){this.initializeTracking(),this.initializeDataProviders(),this.initializeNonHumanDetection(),this.tabEverVisible=T.visibility.isVisible(),this.tabEverVisible?this.notify("Tab visible, sending view beacon when ready",1):T.bindEventOnce("tabfocus",this.onTabFocus),this.initialized=!0},initializeTracking:function(){this.initialized||(this.notify("Initializing tracking",1),this.addRemovePageLeaveEvent(this.enableTracking),this.addRemoveHumanDetectionChangeEvent(this.enableTracking),this.initialized=!0)},initializeDataProviders:function(){var e,t=this.getAnalyticsTool();this.dataProvider.register(new p.DataProvider.VisitorID(T.getVisitorId())),t?(e=new p.DataProvider.Generic("rsid",function(){return t.settings.account}),this.dataProvider.register(e)):this.notify("Missing integration with Analytics: rsid will not be sent.")},initializeNonHumanDetection:function(){T.nonhumandetection?(T.nonhumandetection.init(),this.setEnableNonHumanDetection(0!=this.settings.enableNonHumanDetection),this.settings.nonHumanDetectionDelay>0&&this.setNonHumanDetectionDelay(1e3*parseInt(this.settings.nonHumanDetectionDelay))):this.notify("NHDM is not available.")},getAnalyticsTool:function(){if(this.settings.integratesWith)return T.tools[this.settings.integratesWith]},flushQueueWhenReady:function(){this.enableTracking&&this.tabEverVisible&&T.poll(T.bind(function(){if(this.isReadyToTrack())return this.flushQueue(),!0},this),100,20)},isReadyToTrack:function(){return this.tabEverVisible&&this.dataProvider.isReady()},$setVars:function(e,t,n){for(var i in n){var a=n[i];"function"==typeof a&&(a=a()),this.settings[i]=a}this.notify("Set variables done",2),this.prepareContextData()},$setEnableTracking:function(e,t,n){this.notify("Will"+(n?"":" not")+" track time on page",1),this.enableTracking!=n&&(this.addRemovePageLeaveEvent(n),this.addRemoveHumanDetectionChangeEvent(n),this.enableTracking=n)},$sendFirstBeacon:function(){this.sendViewBeacon()},setEnableNonHumanDetection:function(e){e?T.nonhumandetection.register(this):T.nonhumandetection.unregister(this)},setNonHumanDetectionDelay:function(e){T.nonhumandetection.register(this,e)},addRemovePageLeaveEvent:function(e){this.notify((e?"Attach onto":"Detach from")+" page leave event",1),T[0==e?"unbindEvent":"bindEvent"]("leave",this.onPageLeave)},addRemoveHumanDetectionChangeEvent:function(e){this.notify((e?"Attach onto":"Detach from")+" human detection change event",1),T[0==e?"unbindEvent":"bindEvent"]("humandetection.change",this.onHumanDetectionChange)},sendViewBeacon:function(){this.notify("Tracked page view.",1),this.sendBeaconWith()},sendDurationBeacon:function(){if(T.timetracking&&"function"==typeof T.timetracking.timeOnPage&&null!=T.timetracking.timeOnPage()){this.notify("Tracked close",1),this.sendBeaconWith({timeOnPage:Math.round(T.timetracking.timeOnPage()/1e3),duration:"D",timer:"timer"});var e;for(e=0;e<this.magicConst;e++)"0"}else this.notify("Could not track close due missing time on page",5)},sendBeaconWith:function(e){this.enableTracking&&this[this.beaconMethod].call(this,this.prepareUrl(e))},plainBeacon:function(e){var t=new Image;t.src=e,t.width=1,t.height=1,t.alt=""},navigatorSendBeacon:function(e){navigator.sendBeacon(e)},prepareUrl:function(e){var t=this.settings;return T.extend(t,this.dataProvider.provide()),T.extend(t,e),this.preparePrefix(this.settings.collectionServer)+this.adapt.convertToURI(this.adapt.toNielsen(this.substituteVariables(t)))},preparePrefix:function(e){return"//"+encodeURIComponent(e)+".imrworldwide.com/cgi-bin/gn?"},substituteVariables:function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=T.replace(e[n]));return t},prepareContextData:function(){if(this.getAnalyticsTool()){var e=this.settings;e.sdkVersion=_satellite.publishDate,this.getAnalyticsTool().$setVars(null,null,{contextData:this.adapt.toAnalytics(this.substituteVariables(e))})}else this.notify("Adobe Analytics missing.")},isHuman:function(){return this.human},onTabFocus:function(){},onPageLeave:function(){},onHumanDetectionChange:function(){},notify:function(e,t){T.notify(this.logPrefix+e,t)},beaconMethod:"plainBeacon",adapt:null,enableTracking:!1,logPrefix:"Nielsen: ",tabEverVisible:!1,human:!0,magicConst:2e6}),p.DataProvider={},p.DataProvider.Generic=function(e,t){this.key=e,this.valueFn=t},T.extend(p.DataProvider.Generic.prototype,{isReady:function(){return!0},getValue:function(){return this.valueFn()},provide:function(){this.isReady()||p.prototype.notify("Not yet ready to provide value for: "+this.key,5);var e={};return e[this.key]=this.getValue(),e}}),p.DataProvider.VisitorID=function(e,t,n){this.key=t||"uuid",this.visitorInstance=e,this.visitorInstance&&(this.visitorId=e.getMarketingCloudVisitorID([this,this._visitorIdCallback])),this.fallbackProvider=n||new p.UUID},T.inherit(p.DataProvider.VisitorID,p.DataProvider.Generic),T.extend(p.DataProvider.VisitorID.prototype,{isReady:function(){return null===this.visitorInstance||!!this.visitorId},getValue:function(){return this.visitorId||this.fallbackProvider.get()},_visitorIdCallback:function(e){this.visitorId=e}}),p.DataProvider.Aggregate=function(){this.providers=[];for(var e=0;e<arguments.length;e++)this.register(arguments[e])},T.extend(p.DataProvider.Aggregate.prototype,{register:function(e){this.providers.push(e)},isReady:function(){return T.every(this.providers,function(e){return e.isReady()})},provide:function(){var e={};return T.each(this.providers,function(t){T.extend(e,t.provide())}),e}}),p.UUID=function(){},T.extend(p.UUID.prototype,{generate:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},get:function(){var e=T.readCookie(this.key("uuid"));return e||(e=this.generate(),T.setCookie(this.key("uuid"),e),e)},key:function(e){return"_dtm_nielsen_"+e}}),p.DataAdapters=function(){},T.extend(p.DataAdapters.prototype,{toNielsen:function(e){var t=(new Date).getTime(),i={c6:"vc,",c13:"asid,",c15:"apn,",c27:"cln,",c32:"segA,",c33:"segB,",c34:"segC,",c35:"adrsid,",c29:"plid,",c30:"bldv,",c40:"adbid,"},a={ci:e.clientId,c6:e.vcid,c13:e.appId,c15:e.appName,prv:1,forward:0,ad:0,cr:e.duration||"V",rt:"text",st:"dcr",prd:"dcr",r:t,at:e.timer||"view",c16:e.sdkVersion,c27:e.timeOnPage||0,c40:e.uuid,c35:e.rsid,ti:t,sup:0,c32:e.segmentA,c33:e.segmentB,c34:e.segmentC,asn:e.assetName,c29:e.playerID,c30:e.buildVersion};for(key in a)if(a[key]!==n&&null!=a[key]&&a[key]!==n&&null!=a&&""!=a){var r=encodeURIComponent(a[key]);i.hasOwnProperty(key)&&r&&(r=i[key]+r),a[key]=r}return this.filterObject(a)},toAnalytics:function(e){return this.filterObject({"a.nielsen.clientid":e.clientId,"a.nielsen.vcid":e.vcid,"a.nielsen.appid":e.appId,"a.nielsen.appname":e.appName,"a.nielsen.accmethod":"0","a.nielsen.ctype":"text","a.nielsen.sega":e.segmentA,"a.nielsen.segb":e.segmentB,"a.nielsen.segc":e.segmentC,"a.nielsen.asset":e.assetName})},convertToURI:function(e){if(!1===T.isObject(e))return"";var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+"="+e[n]);return t.join("&")},filterObject:function(e){for(var t in e)!e.hasOwnProperty(t)||null!=e[t]&&e[t]!==n||delete e[t];return e}}),T.availableTools.nielsen=p,T.inherit(m,T.BaseTool),T.extend(m.prototype,{name:"SC",endPLPhase:function(e){e===this.settings.loadOn&&this.initialize(e)},initialize:function(t){if(!this._cancelToolInit)if(this.settings.initVars=this.substituteVariables(this.settings.initVars,{type:t}),!1!==this.settings.initTool){var n=this.settings.sCodeURL||T.basePath()+"s_code.js";"object"==typeof n&&(n="https:"===e.location.protocol?n.https:n.http),n.match(/^https?:/)||(n=T.basePath()+n),this.settings.initVars&&this.$setVars(null,null,this.settings.initVars),T.loadScript(n,T.bind(this.onSCodeLoaded,this)),this.initializing=!0}else this.initializing=!0,this.pollForSC()},getS:function(t,n){var i=n&&n.hostname||e.location.hostname,a=this.concatWithToolVarBindings(n&&n.setVars||this.varBindings),r=n&&n.addEvent||this.events,s=this.getAccount(i),o=e.s_gi;if(!o)return null;if(this.isValidSCInstance(t)||(t=null),!s&&!t)return T.notify("Adobe Analytics: tracker not initialized because account was not found",1),null;t=t||o(s);var c="D"+T.appVersion;return"undefined"!=typeof t.tagContainerMarker?t.tagContainerMarker=c:"string"==typeof t.version&&t.version.substring(t.version.length-5)!=="-"+c&&(t.version+="-"+c),t.sa&&!0!==this.settings.skipSetAccount&&!1!==this.settings.initTool&&t.sa(this.settings.account),this.applyVarBindingsOnTracker(t,a),r.length>0&&(t.events=r.join(",")),T.getVisitorId()&&(t.visitor=T.getVisitorId()),t},onSCodeLoaded:function(e){this.initialized=!0,this.initializing=!1;var t=["Adobe Analytics: loaded",e?" (manual)":"","."];T.notify(t.join(""),1),T.fireEvent(this.id+".load",this.getS()),e||(this.flushQueueExceptTrackLink(),this.sendBeacon()),this.flushQueue()},getAccount:function(t){return e.s_account?e.s_account:t&&this.settings.accountByHost&&this.settings.accountByHost[t]||this.settings.account},getTrackingServer:function(){var t=this,n=t.getS();if(n){if(n.ssl&&n.trackingServerSecure)return n.trackingServerSecure;if(n.trackingServer)return n.trackingServer}var i,a=t.getAccount(e.location.hostname);if(!a)return null;var r,s,o="",c=n&&n.dc;return(r=(i=a).indexOf(","))>=0&&(i=i.gb(0,r)),i=i.replace(/[^A-Za-z0-9]/g,""),o||(o="2o7.net"),c=c?(""+c).toLowerCase():"d1","2o7.net"==o&&("d1"==c?c="112":"d2"==c&&(c="122"),s=""),r=i+"."+c+"."+s+o},sendBeacon:function(){var t=this.getS(e[this.settings.renameS||"s"]);t?this.settings.customInit&&!1===this.settings.customInit(t)?T.notify("Adobe Analytics: custom init suppressed beacon",1):(this.settings.executeCustomPageCodeFirst&&this.applyVarBindingsOnTracker(t,this.varBindings),this.executeCustomSetupFuns(t),t.t(),this.clearVarBindings(),this.clearCustomSetup(),T.notify("Adobe Analytics: tracked page view",1)):T.notify("Adobe Analytics: page code not loaded",1)},pollForSC:function(){T.poll(T.bind(function(){if("function"==typeof e.s_gi)return this.onSCodeLoaded(!0),!0},this))},flushQueueExceptTrackLink:function(){if(this.pending){for(var e=[],t=0;t<this.pending.length;t++){var n=this.pending[t];"trackLink"===n[0].command?e.push(n):this.triggerCommand.apply(this,n)}this.pending=e}},isQueueAvailable:function(){return!this.initialized},substituteVariables:function(e,t){var n={};for(var i in e)if(e.hasOwnProperty(i)){var a=e[i];n[i]=T.replace(a,location,t)}return n},$setVars:function(e,t,n){for(var i in n)if(n.hasOwnProperty(i)){var a=n[i];"function"==typeof a&&(a=a()),this.varBindings[i]=a}T.notify("Adobe Analytics: set variables.",2)},$customSetup:function(e,t,n){this.customSetupFuns.push(function(i){n.call(e,t,i)})},isValidSCInstance:function(e){return!!e&&"function"==typeof e.t&&"function"==typeof e.tl},concatWithToolVarBindings:function(e){var t=this.settings.initVars||{};return T.map(["trackingServer","trackingServerSecure"],function(n){t[n]&&!e[n]&&(e[n]=t[n])}),e},applyVarBindingsOnTracker:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},clearVarBindings:function(){this.varBindings={}},clearCustomSetup:function(){this.customSetupFuns=[]},executeCustomSetupFuns:function(t){T.each(this.customSetupFuns,function(n){n.call(e,t)})},$trackLink:function(e,t,n){var i=(n=n||{}).type,a=n.linkName;!a&&e&&e.nodeName&&"a"===e.nodeName.toLowerCase()&&(a=e.innerHTML),a||(a="link clicked");var r=n&&n.setVars,s=n&&n.addEvent||[],o=this.getS(null,{setVars:r,addEvent:s});if(o){var c=o.linkTrackVars,u=o.linkTrackEvents,l=this.definedVarNames(r);n&&n.customSetup&&n.customSetup.call(e,t,o),s.length>0&&l.push("events"),o.products&&l.push("products"),l=this.mergeTrackLinkVars(o.linkTrackVars,l),s=this.mergeTrackLinkVars(o.linkTrackEvents,s),o.linkTrackVars=this.getCustomLinkVarsList(l);var g=T.map(s,function(e){return e.split(":")[0]});o.linkTrackEvents=this.getCustomLinkVarsList(g),o.tl(!0,i||"o",a),T.notify(["Adobe Analytics: tracked link ","using: linkTrackVars=",T.stringify(o.linkTrackVars),"; linkTrackEvents=",T.stringify(o.linkTrackEvents)].join(""),1),o.linkTrackVars=c,o.linkTrackEvents=u}else T.notify("Adobe Analytics: page code not loaded",1)},mergeTrackLinkVars:function(e,t){return e&&(t=e.split(",").concat(t)),t},getCustomLinkVarsList:function(e){var t=T.indexOf(e,"None");return t>-1&&e.length>1&&e.splice(t,1),e.join(",")},definedVarNames:function(e){e=e||this.varBindings;var t=[];for(var n in e)e.hasOwnProperty(n)&&/^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(n)&&t.push(n);return t},$trackPageView:function(e,t,n){var i=n&&n.setVars,a=n&&n.addEvent||[],r=this.getS(null,{setVars:i,addEvent:a});r?(r.linkTrackVars="",r.linkTrackEvents="",this.executeCustomSetupFuns(r),n&&n.customSetup&&n.customSetup.call(e,t,r),r.t(),this.clearVarBindings(),this.clearCustomSetup(),T.notify("Adobe Analytics: tracked page view",1)):T.notify("Adobe Analytics: page code not loaded",1)},$postTransaction:function(t,n,i){var a=T.data.transaction=e[i],r=this.varBindings,s=this.settings.fieldVarMapping;if(T.each(a.items,function(e){this.products.push(e)},this),r.products=T.map(this.products,function(e){var t=[];if(s&&s.item)for(var n in s.item)if(s.item.hasOwnProperty(n)){var i=s.item[n];t.push(i+"="+e[n]),"event"===i.substring(0,5)&&this.events.push(i)}var a=["",e.product,e.quantity,e.unitPrice*e.quantity];return t.length>0&&a.push(t.join("|")),a.join(";")},this).join(","),s&&s.transaction){var o=[];for(var c in s.transaction)if(s.transaction.hasOwnProperty(c)){i=s.transaction[c];o.push(i+"="+a[c]),"event"===i.substring(0,5)&&this.events.push(i)}r.products.length>0&&(r.products+=","),r.products+=";;;;"+o.join("|")}},$addEvent:function(){for(var e=2,t=arguments.length;e<t;e++)this.events.push(arguments[e])},$addProduct:function(){for(var e=2,t=arguments.length;e<t;e++)this.products.push(arguments[e])}}),T.availableTools.sc=m,T.inherit(v,T.BaseTool),T.extend(v.prototype,{name:"Default",$loadIframe:function(t,n,i){var a=i.pages,r=i.loadOn,s=T.bind(function(){T.each(a,function(e){this.loadIframe(t,n,e)},this)},this);r||s(),"domready"===r&&T.domReady(s),"load"===r&&T.addEventHandler(e,"load",s)},loadIframe:function(e,n,i){var a=t.createElement("iframe");a.style.display="none";var r=T.data.host,s=i.data,o=this.scriptURL(i.src),c=T.searchVariables(s,e,n);r&&(o=T.basePath()+o),o+=c,a.src=o;var u=t.getElementsByTagName("body")[0];u?u.appendChild(a):T.domReady(function(){t.getElementsByTagName("body")[0].appendChild(a)})},scriptURL:function(e){return(T.settings.scriptDir||"")+e},$loadScript:function(t,n,i){var a=i.scripts,r=i.sequential,s=i.loadOn,o=T.bind(function(){r?this.loadScripts(t,n,a):T.each(a,function(e){this.loadScripts(t,n,[e])},this)},this);s?"domready"===s?T.domReady(o):"load"===s&&T.addEventHandler(e,"load",o):o()},loadScripts:function(e,t,n){function i(){r.length>0&&a&&r.shift().call(e,t,s);var c=n.shift();if(c){var u=T.data.host,l=o.scriptURL(c.src);u&&(l=T.basePath()+l),a=c,T.loadScript(l,i)}}try{n=n.slice(0);var a,r=this.asyncScriptCallbackQueue,s=t.target||t.srcElement,o=this}catch(c){console.error("scripts is",T.stringify(n))}i()},$loadBlockingScript:function(e,t,n){var i=n.scripts;n.loadOn;T.bind(function(){T.each(i,function(n){this.loadBlockingScript(e,t,n)},this)},this)()},loadBlockingScript:function(e,t,n){var i=this.scriptURL(n.src),a=T.data.host,r=t.target||t.srcElement;a&&(i=T.basePath()+i),this.argsForBlockingScripts.push([e,t,r]),T.loadScriptSync(i)},pushAsyncScript:function(e){this.asyncScriptCallbackQueue.push(e)},pushBlockingScript:function(e){var t=this.argsForBlockingScripts.shift(),n=t[0];e.apply(n,t.slice(1))},$writeHTML:T.escapeHtmlParams(function(e,n){if(!T.domReadyFired&&t.write)if("pagebottom"===n.type||"pagetop"===n.type)for(var i=2,a=arguments.length;i<a;i++){var r=arguments[i].html;r=T.replace(r,e,n),t.write(r)}else T.notify("You can only use writeHTML on the `pagetop` and `pagebottom` events.",1);else T.notify("Command writeHTML failed. You should try appending HTML using the async option.",1)}),linkNeedsDelayActivate:function(t,n){n=n||e;var i=t.tagName,a=t.getAttribute("target"),r=t.getAttribute("href");return(!i||"a"===i.toLowerCase())&&(!!r&&(!a||"_blank"!==a&&("_top"===a?n.top===n:"_parent"!==a&&("_self"===a||(!n.name||a===n.name)))))},$delayActivateLink:function(e,t){if(this.linkNeedsDelayActivate(e)){T.preventDefault(t);var n=T.settings.linkDelay||100;setTimeout(function(){T.setLocation(e.href)},n)}},isQueueable:function(e){return"writeHTML"!==e.command}}),T.availableTools["default"]=v,T.inherit(y,T.BaseTool),T.extend(y.prototype,{initialize:function(){var e=this.settings;if(!1!==this.settings.initTool){var t=e.url;t="string"==typeof t?T.basePath()+t:T.isHttps()?t.https:t.http,T.loadScript(t,T.bind(this.onLoad,this)),this.initializing=!0}else this.initialized=!0},isQueueAvailable:function(){return!this.initialized},onLoad:function(){this.initialized=!0,this.initializing=!1,this.settings.initialBeacon&&this.settings.initialBeacon(),this.flushQueue()},endPLPhase:function(e){e===this.settings.loadOn&&(T.notify(this.name+": Initializing at "+e,1),this.initialize())},$fire:function(e,t,n){this.initializing?this.queueCommand({command:"fire",arguments:[n]},e,t):n.call(this.settings,e,t)}}),T.availableTools.am=y,T.availableTools.adlens=y,T.availableTools.aem=y,T.availableTools.__basic=y,T.extend(b.prototype,{getInstance:function(){return this.instance},initialize:function(){var e,t=this.settings;T.notify("Visitor ID: Initializing tool",1),null!==(e=this.createInstance(t.mcOrgId,t.initVars))&&(t.customerIDs&&this.applyCustomerIDs(e,t.customerIDs),t.autoRequest&&e.getMarketingCloudVisitorID(),this.instance=e)},createInstance:function(e,t){if(!T.isString(e))return T.notify('Visitor ID: Cannot create instance using mcOrgId: "'+e+'"',4),null;e=T.replace(e),T.notify('Visitor ID: Create instance using mcOrgId: "'+e+'"',1),t=this.parseValues(t);var n=Visitor.getInstance(e,t);return T.notify("Visitor ID: Set variables: "+T.stringify(t),1),n},applyCustomerIDs:function(e,t){var n=this.parseIds(t);e.setCustomerIDs(n),T.notify("Visitor ID: Set Customer IDs: "+T.stringify(n),1)},parseValues:function(e){if(!1===T.isObject(e))return{};var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=T.replace(e[n]));return t},parseIds:function(e){var t={};if(!1===T.isObject(e))return{};for(var n in e)if(e.hasOwnProperty(n)){var i=T.replace(e[n].id);i!==e[n].id&&i&&(t[n]={},t[n].id=i,t[n].authState=Visitor.AuthState[e[n].authState])}return t}}),T.availableTools.visitor_id=b;var L={allowLinker:function(){return T.hasMultipleDomains()},cookieDomain:function(){var t=T.settings.domainList,n=T.find(t,function(t){var n=e.location.hostname;return T.equalsIgnoreCase(n.slice(n.length-t.length),t)});return n?"."+n:"auto"}};T.inherit(S,T.BaseTool),T.extend(S.prototype,{name:"GAUniversal",endPLPhase:function(e){e===this.settings.loadOn&&(T.notify("GAU: Initializing at "+e,1),this.initialize(),this.flushQueue(),this.trackInitialPageView())},getTrackerName:function(){return this.settings.trackerSettings.name||""},isPageCodeLoadSuppressed:function(){return!1===this.settings.initTool||!0===this._cancelToolInit},initialize:function(){if(this.isPageCodeLoadSuppressed())return this.initialized=!0,void T.notify("GAU: Page code not loaded (suppressed).",1);var t="ga"
;e[t]=e[t]||this.createGAObject(),e.GoogleAnalyticsObject=t,T.notify("GAU: Page code loaded.",1),T.loadScriptOnce(this.getToolUrl());var n=this.settings;(L.allowLinker()&&!1!==n.allowLinker?this.createAccountForLinker():this.createAccount(),this.executeInitCommands(),n.customInit)&&(!1===(0,n.customInit)(e[t],this.getTrackerName())&&(this.suppressInitialPageView=!0));this.initialized=!0},createGAObject:function(){var e=function(){e.q.push(arguments)};return e.q=[],e.l=1*new Date,e},createAccount:function(){this.create()},createAccountForLinker:function(){var e={};L.allowLinker()&&(e.allowLinker=!0),this.create(e),this.call("require","linker"),this.call("linker:autoLink",this.autoLinkDomains(),!1,!0)},create:function(e){var t=this.settings.trackerSettings;(t=T.preprocessArguments([t],location,null,this.forceLowerCase)[0]).trackingId=T.replace(this.settings.trackerSettings.trackingId,location),t.cookieDomain||(t.cookieDomain=L.cookieDomain()),T.extend(t,e||{}),this.call("create",t)},autoLinkDomains:function(){var e=location.hostname;return T.filter(T.settings.domainList,function(t){return t!==e})},executeInitCommands:function(){var e=this.settings;e.initCommands&&T.each(e.initCommands,function(e){var t=e.splice(2,e.length-2);e=e.concat(T.preprocessArguments(t,location,null,this.forceLowerCase)),this.call.apply(this,e)},this)},trackInitialPageView:function(){this.suppressInitialPageView||this.isPageCodeLoadSuppressed()||this.call("send","pageview")},call:function(){"function"==typeof ga?this.isCallSuppressed()||(arguments[0]=this.cmd(arguments[0]),this.log(T.toArray(arguments)),ga.apply(e,arguments)):T.notify("GA Universal function not found!",4)},isCallSuppressed:function(){return!0===this._cancelToolInit},$missing$:function(e,t,n,i){i=i||[],i=[e].concat(i),this.call.apply(this,i)},getToolUrl:function(){var e=this.settings,t=T.isHttps();return e.url?t?e.url.https:e.url.http:(t?"https://ssl":"http://www")+".google-analytics.com/analytics.js"},cmd:function(e){var t=["send","set","get"],n=this.getTrackerName();return n&&-1!==T.indexOf(t,e)?n+"."+e:e},log:function(e){var t="GA Universal: sent command "+e[0]+" to tracker "+(this.getTrackerName()||"default");if(e.length>1){T.stringify(e.slice(1));t+=" with parameters "+T.stringify(e.slice(1))}t+=".",T.notify(t,1)}}),T.availableTools.ga_universal=S,T.inherit(_,T.BaseTool),T.extend(_.prototype,{name:"GA",initialize:function(){var t=this.settings,n=e._gaq,i=t.initCommands||[],a=t.customInit;if(n||(_gaq=[]),this.isSuppressed())T.notify("GA: page code not loaded(suppressed).",1);else{if(!n&&!_.scriptLoaded){var r=T.isHttps(),s=(r?"https://ssl":"http://www")+".google-analytics.com/ga.js";t.url&&(s=r?t.url.https:t.url.http),T.loadScript(s),_.scriptLoaded=!0,T.notify("GA: page code loaded.",1)}t.domain;var o=t.trackerName,c=L.allowLinker(),u=T.replace(t.account,location);T.settings.domainList;_gaq.push([this.cmd("setAccount"),u]),c&&_gaq.push([this.cmd("setAllowLinker"),c]),_gaq.push([this.cmd("setDomainName"),L.cookieDomain()]),T.each(i,function(e){var t=[this.cmd(e[0])].concat(T.preprocessArguments(e.slice(1),location,null,this.forceLowerCase));_gaq.push(t)},this),a&&(this.suppressInitialPageView=!1===a(_gaq,o)),t.pageName&&this.$overrideInitialPageView(null,null,t.pageName)}this.initialized=!0,T.fireEvent(this.id+".configure",_gaq,o)},isSuppressed:function(){return this._cancelToolInit||!1===this.settings.initTool},tracker:function(){return this.settings.trackerName},cmd:function(e){var t=this.tracker();return t?t+"._"+e:"_"+e},$overrideInitialPageView:function(e,t,n){this.urlOverride=n},trackInitialPageView:function(){if(!this.isSuppressed()&&!this.suppressInitialPageView)if(this.urlOverride){var e=T.preprocessArguments([this.urlOverride],location,null,this.forceLowerCase);this.$missing$("trackPageview",null,null,e)}else this.$missing$("trackPageview")},endPLPhase:function(e){e===this.settings.loadOn&&(T.notify("GA: Initializing at "+e,1),this.initialize(),this.flushQueue(),this.trackInitialPageView())},call:function(e,t,n,i){if(!this._cancelToolInit){this.settings;var a=this.tracker(),r=this.cmd(e);i=i?[r].concat(i):[r];_gaq.push(i),a?T.notify("GA: sent command "+e+" to tracker "+a+(i.length>1?" with parameters ["+i.slice(1).join(", ")+"]":"")+".",1):T.notify("GA: sent command "+e+(i.length>1?" with parameters ["+i.slice(1).join(", ")+"]":"")+".",1)}},$missing$:function(e,t,n,i){this.call(e,t,n,i)},$postTransaction:function(t,n,i){var a=T.data.customVars.transaction=e[i];this.call("addTrans",t,n,[a.orderID,a.affiliation,a.total,a.tax,a.shipping,a.city,a.state,a.country]),T.each(a.items,function(e){this.call("addItem",t,n,[e.orderID,e.sku,e.product,e.category,e.unitPrice,e.quantity])},this),this.call("trackTrans",t,n)},delayLink:function(e,t){var n=this;if(L.allowLinker()&&e.hostname.match(this.settings.linkerDomains)&&!T.isSubdomainOf(e.hostname,location.hostname)){T.preventDefault(t);var i=T.settings.linkDelay||100;setTimeout(function(){n.call("link",e,t,[e.href])},i)}},popupLink:function(t,n){if(e._gat){T.preventDefault(n);var i=this.settings.account,a=e._gat._createTracker(i)._getLinkerUrl(t.href);e.open(a)}},$link:function(e,t){"_blank"===e.getAttribute("target")?this.popupLink(e,t):this.delayLink(e,t)},$trackEvent:function(e,t){var n=Array.prototype.slice.call(arguments,2);if(n.length>=4&&null!=n[3]){var i=parseInt(n[3],10);T.isNaN(i)&&(i=1),n[3]=i}this.call("trackEvent",e,t,n)}}),T.availableTools.ga=_,_satellite.init({tools:{f6d05ed4b220e0331d37e005699a152eca756f66:{engine:"aem",name:"Data Layer",data_layer_root:"digitalData"},"687b699a760f29b6853e871f17d9cb83":{engine:"sc",loadOn:"pagebottom",account:"prisacomglobal",euCookie:!1,sCodeURL:"577c3689ea990d22d8d98c00c4aa568bec64a426/s-code-contents-2683f0e5ad075024cc6e17885e97204cfcaa8be6.js",renameS:"DTM.s",initVars:{charSet:"UTF-8",server:"%server%",currencyCode:"EUR",visitorNamespace:"prisacom",trackingServer:"prisacom.sc.omtrdc.net",trackingServerSecure:"prisacom.sc.omtrdc.net",trackInlineStats:!0,trackDownloadLinks:!0,linkDownloadFileTypes:"avi,doc,docx,exe,mov,mp3,mpg,pdf,ppt,pptx,wav,wma,wmv,xls,xlsx,zip",trackExternalLinks:!0,linkInternalFilters:"elpais.com,javascript",linkLeaveQueryString:!1,dynamicVariablePrefix:"D="},customInit:function(){if("undefined"!=typeof e.redefinicion_variables_om)for(var t in e.redefinicion_variables_om)e.DTM.s[t]=e.redefinicion_variables_om[t];return e.DTM.tools.omniture.loaded=!0,e.setTimeout(function(){!1!==e.DTM.tools.omniture.trackPV()&&e.DTM.notify("PV tracked in tool <omniture> (lib)")},700),!1}},b05052615e5e941a64b5d3f94116a3d232239595:{engine:"tnt",mboxURL:"577c3689ea990d22d8d98c00c4aa568bec64a426/mbox-contents-b05052615e5e941a64b5d3f94116a3d232239595.js",loadSync:!1,pageParams:{}},d9dd0f01cb1e3fee8b45888f1e434d31c389cc07:{engine:"visitor_id",loadOn:"pagetop",name:"VisitorID",mcOrgId:"2387401053DB208C0A490D4C@AdobeOrg",autoRequest:!0,initVars:{trackingServer:"prisacom.sc.omtrdc.net",trackingServerSecure:"prisacom.sc.omtrdc.net"}}},pageLoadRules:[],rules:[],directCallRules:[],settings:{trackInternalLinks:!0,libraryName:"satelliteLib-28ad3885d20336165372ce7de5caf99dd332388c",isStaging:!1,allowGATTcalls:!1,downloadExtensions:/\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,notifications:!1,utilVisible:!1,domainList:["elpais.com"],scriptDir:"577c3689ea990d22d8d98c00c4aa568bec64a426/scripts/",tagTimeout:3e3},data:{URI:t.location.pathname+t.location.search,browser:{},cartItems:[],revenue:"",host:{http:"ep01.epimg.net/js/gdt",https:"ep01.epimg.net/js/gdt"}},dataElements:{adblocker:{contextHub:function(){try{return digitalData.page.pageInfo.adblocker}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},articleID:{contextHub:function(){try{return digitalData.page.pageInfo.articleID}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},author:{contextHub:function(){try{return digitalData.page.pageInfo.author}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},brandedContent:{contextHub:function(){try{return digitalData.page.pageInfo.brandedContent}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},businessUnit:{contextHub:function(){try{return digitalData.page.pageInfo.businessUnit}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},campaign:{contextHub:function(){try{return digitalData.page.pageInfo.campaign}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},canonicalURL:{contextHub:function(){try{return digitalData.page.pageInfo.canonicalURL}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},chartbeat:{customJS:function(){var t={};try{t=e.DTM.tools.chartbeat.getDL()}catch(n){t={}}return t},storeLength:"pageview"},clickOrigin:{contextHub:function(){try{return digitalData.page.pageInfo.clickOrigin}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},cms:{contextHub:function(){try{return digitalData.page.pageInfo.cms}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},comscore:{customJS:function(){var t={};try{t=e.DTM.tools.comscore.getDL()}catch(n){t={}}return t},storeLength:"pageview"},country:{contextHub:function(){try{return digitalData.user.country}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},creationDate:{contextHub:function(){try{return digitalData.page.pageInfo.creationDate}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},date:{contextHub:function(){try{return digitalData.page.pageInfo.date}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"date:day":{contextHub:function(){try{return digitalData.page.pageInfo.date.day}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"date:dstEnd":{contextHub:function(){try{return digitalData.page.pageInfo.date.dstEnd}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"date:dstStart":{contextHub:function(){try{return digitalData.page.pageInfo.date.dstStart}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"date:fullYear":{contextHub:function(){try{return digitalData.page.pageInfo.date.fullYear}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"date:gmt":{contextHub:function(){try{return digitalData.page.pageInfo.date.gmt}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"date:hours":{contextHub:function(){try{return digitalData.page.pageInfo.date.hours}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"date:minutes":{contextHub:function(){try{return digitalData.page.pageInfo.date.minutes}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"date:month":{contextHub:function(){try{return digitalData.page.pageInfo.date.month}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"date:seconds":{contextHub:function(){try{return digitalData.page.pageInfo.date.seconds}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"date:year":{contextHub:function(){try{return digitalData.page.pageInfo.date.year}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},destinationURL:{contextHub:function(){try{return digitalData.page.pageInfo.destinationURL}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},domain:{contextHub:function(){try{return digitalData.page.pageInfo.domain}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},edition:{contextHub:function(){try{return digitalData.page.pageInfo.edition}catch(e){T.notify(e.name+" - "+e.message,4)}},"default":"espa\xf1a",storeLength:"pageview"},elpais:{customJS:function(){var t={};try{t=e.DTM.tools.elpais.getDL()}catch(n){t={}}return t},storeLength:"pageview"},encoded:{contextHub:function(){try{return digitalData.page.pageInfo.encoded}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},event:{contextHub:function(){try{return digitalData.event}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},facebook:{customJS:function(){var t={};try{t=e.DTM.tools.facebook.getDL()}catch(n){t={}}return t},storeLength:"pageview"},geoRegion:{contextHub:function(){try{return digitalData.page.pageInfo.geoRegion}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},krux:{customJS:function(){var t={};try{t=e.DTM.tools.krux.getDL()}catch(n){t={}}return t},storeLength:"pageview"},language:{contextHub:function(){try{return digitalData.page.pageInfo.language}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},netquest:{customJS:function(){var t={};try{t=e.DTM.tools.netquest.getDL()}catch(n){t={}}return t},storeLength:"pageview"},omniture:{customJS:function(){var t={};try{t=e.DTM.tools.omniture.getDL()}catch(n){t={}}return t},storeLength:"pageview"},onsiteSearch:{contextHub:function(){try{return digitalData.page.pageInfo.onsiteSearch}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},onsiteSearchResults:{contextHub:function(){try{return digitalData.page.pageInfo.onsiteSearchResults}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},onsiteSearchTerm:{contextHub:function(){try{return digitalData.page.pageInfo.onsiteSearchTerm}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},org:{contextHub:function(){try{return digitalData.page.pageInfo.org}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},pageID:{contextHub:function(){try{return digitalData.page.pageInfo.pageID}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},pageName:{contextHub:function(){try{return digitalData.page.pageInfo.pageName}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},pageTitle:{contextHub:function(){try{return digitalData.page.pageInfo.pageTitle}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},pageType:{contextHub:function(){try{return digitalData.page.category.pageType}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"paywall:status":{contextHub:function(){try{return digitalData.paywall.status}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},"paywall:type":{contextHub:function(){try{return digitalData.paywall.type}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},platform:{contextHub:function(){try{return digitalData.page.pageInfo.platform}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},primaryCategory:{contextHub:function(){try{return digitalData.page.category.primaryCategory}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},profileID:{contextHub:function(){try{return digitalData.user.profileID}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},publisher:{contextHub:function(){try{return digitalData.page.pageInfo.publisher}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},referringURL:{contextHub:function(){try{return digitalData.page.pageInfo.referringURL}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},registeredUser:{contextHub:function(){try{return digitalData.user.registeredUser}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},server:{contextHub:function(){try{return digitalData.page.pageInfo.server}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},siteID:{contextHub:function(){try{return digitalData.page.pageInfo.siteID}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},ssl:{contextHub:function(){try{return digitalData.page.pageInfo.ssl}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},subCategory1:{contextHub:function(){try{return digitalData.page.category.subCategory1}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},subCategory2:{contextHub:function(){try{return digitalData.page.category.subCategory2}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},sysEnv:{contextHub:function(){try{return digitalData.page.pageInfo.sysEnv}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},tags:{contextHub:function(){try{return digitalData.page.pageInfo.tags}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},test:{contextHub:function(){try{return digitalData.page.pageInfo.test}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},thematic:{contextHub:function(){try{return digitalData.page.pageInfo.thematic}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},urlParams:{contextHub:function(){try{return digitalData.page.pageInfo.urlParams}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"},userName:{contextHub:function(){try{return digitalData.user.userName}catch(e){T.notify(e.name+" - "+e.message,4)}},storeLength:"pageview"}},appVersion:"7QN",buildDate:"2019-10-24 10:39:23 UTC",publishDate:"2019-10-24 10:39:23 UTC"})}(window,document);

if(typeof DTM != "undefined" && typeof DTM.config != "undefined" && typeof DTM.config.atg != "undefined" && DTM.config.atg){
/**
 * @license
 * at.js 1.7.1 | (c) Adobe Systems Incorporated | All rights reserved
 * zepto.js | (c) 2010-2016 Thomas Fuchs | zeptojs.com/license
*/
window.adobe=window.adobe||{},window.adobe.target=function(){"use strict";function n(){}function t(n){if(null===n||void 0===n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function e(n){return Xc.call(n)}function r(n){return e(n)}function i(n){var t=void 0===n?"undefined":Yc(n);return null!=n&&("object"===t||"function"===t)}function o(n){return!!i(n)&&r(n)===Qc}function u(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return o(n)?setTimeout(n,Number(t)||0):-1}function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;-1!==n&&clearTimeout(n)}function a(n){return null==n}function f(n){return n}function s(n){return o(n)?n:f}function l(n){return a(n)?[]:Object.keys(n)}function d(n,t){return a(t)?[]:(na(t)?ra:ia)(s(n),t)}function h(n){return n&&n.length?n[0]:void 0}function p(n){return a(n)?[]:[].concat.apply([],n)}function v(n){for(var t=this,e=n?n.length:0,r=e;r-=1;)if(!o(n[r]))throw new TypeError("Expected a function");return function(){for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];for(var u=0,c=e?n[u].apply(t,i):i[0];(u+=1)<e;)c=n[u].call(t,c);return c}}function m(n,t){if(!a(t)){(na(t)?ta:ea)(s(n),t)}}function g(n){return null!=n&&"object"===(void 0===n?"undefined":Yc(n))}function y(n){return"string"==typeof n||!na(n)&&g(n)&&r(n)===oa}function b(n){if(!y(n))return-1;for(var t=0,e=n.length,r=0;r<e;r+=1)t=(t<<5)-t+n.charCodeAt(r)&4294967295;return t}function x(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=ua}function E(n){return null!=n&&x(n.length)&&!o(n)}function w(n,t){return ca(function(n){return t[n]},n)}function C(n){for(var t=0,e=n.length,r=Array(e);t<e;)r[t]=n[t],t+=1;return r}function S(n){return n.split("")}function O(n){return a(n)?[]:E(n)?y(n)?S(n):C(n):w(l(n),n)}function T(n){if(null==n)return!0;if(E(n)&&(na(n)||y(n)||o(n.splice)))return!n.length;for(var t in n)if(fa.call(n,t))return!1;return!0}function A(n){return a(n)?"":la.call(n)}function N(n){return y(n)?!A(n):T(n)}function k(n){return Object.getPrototypeOf(Object(n))}function j(n){if(!g(n)||r(n)!==da)return!1;var t=k(n);if(null===t)return!0;var e=ma.call(t,"constructor")&&t.constructor;return"function"==typeof e&&e instanceof e&&va.call(e)===ga}function D(n){return g(n)&&1===n.nodeType&&!j(n)}function _(n){return"number"==typeof n||g(n)&&r(n)===ba}function R(n,t){return a(t)?[]:(na(t)?ca:xa)(s(n),t)}function I(){}function P(){return(new Date).getTime()}function M(n,t,e){return a(e)?t:(na(e)?Ea:wa)(s(n),t,e)}function L(n){return null==n?n:Sa.call(n)}function q(n,t){return N(t)?[]:t.split(n)}function U(n,t){return n+Math.floor(Math.random()*(t-n+1))}function F(){var n=P();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(n+U(0,16))%16|0;return n=Math.floor(n/16),("x"===t?e:3&e|8).toString(16)})}function $(n){return Ad.test(n)}function B(n){if($(n))return n;var t=L(q(".",n)),e=t.length;return e>=3&&Nd.test(t[1])?t[2]+"."+t[1]+"."+t[0]:1===e?t[0]:t[1]+"."+t[0]}function H(n,t){n.enabled&&m(function(e){a(t[e])||(n[e]=t[e])},Dd)}function V(n){var t=n.documentMode;return!t||t>=10}function z(n){var t=n.compatMode;return t&&"CSS1Compat"===t}function Z(n,t,e){var r=n.location.protocol===kd,i="";r||(i=B(n.location.hostname)),e[Nl]=i,e[rl]=z(t)&&V(t),H(e,n[hd]||{})}function G(n){Z(Oa,Ta,n);var t=Oa.location.protocol===kd;jd=Jc({},n),jd[vl]=n[vl]/1e3,jd[ml]=n[ml]/1e3,jd[Ol]="x-only"===jd[cl],jd[Tl]="disabled"!==jd[cl],jd[Al]=jd[wl]||t?"https:":""}function K(){return jd}function J(n,t){return t={exports:{}},n(t,t.exports),t.exports}function W(n){try{return decodeURIComponent(n)}catch(t){return n}}function X(n){try{return encodeURIComponent(n)}catch(t){return n}}function Y(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function Q(n){if(Kd[n])return Kd[n];Gd.href=n;var t=Ud(Gd.href);return t.queryKey=Zd(t.query),Kd[n]=t,Kd[n]}function nn(n,t,e){return{name:n,value:t,expires:e}}function tn(n){var t=q("#",n);return T(t)||t.length<3?null:isNaN(parseInt(t[2],10))?null:nn(W(t[0]),W(t[1]),Number(t[2]))}function en(n){return N(n)?[]:q("|",n)}function rn(){var n=R(tn,en(Md(el))),t=Math.ceil(P()/1e3),e=function(n){return i(n)&&t<=n.expires};return M(function(n,t){return n[t.name]=t,n},{},d(e,n))}function on(n){var t=rn(),e=t[n];return i(e)?e.value:""}function un(n){return[X(n.name),X(n.value),n.expires].join("#")}function cn(n){return n.expires}function an(n){var t=R(cn,n);return Math.max.apply(null,t)}function fn(n,t){var e=O(n),r=Math.abs(1e3*an(e)-P()),i=R(un,e).join("|"),o=new Date(P()+r);Ld(el,i,{domain:t,expires:o})}function sn(n){var t=n.name,e=n.value,r=n.expires,i=n.domain,o=rn();o[t]=nn(t,e,Math.ceil(r+P()/1e3)),fn(o,i)}function ln(n){return ya(Md(n))}function dn(n,t){var e=n.location,r=e.search,i=Zd(r);return ya(i[t])}function hn(n,t){var e=n.referrer,r=Q(e),i=r.queryKey;return!a(i)&&ya(i[t])}function pn(n,t,e){return ln(e)||dn(n,e)||hn(t,e)}function vn(){var n=K(),t=n[Nl];Ld(xf,Ef,{domain:t});var e=Md(xf)===Ef;return qd(xf),e}function mn(){return pn(Oa,Ta,yf)}function gn(){var n=K(),t=n[rl];return n[Ol]?t&&!mn():t&&vn()&&!mn()}function yn(){return pn(Oa,Ta,gf)}function bn(){return pn(Oa,Ta,bf)}function xn(n,t){var e=n.console;return!a(e)&&o(e[t])}function En(n,t){var e=n.console;xn(n,"warn")&&e.warn.apply(e,[Wd].concat(t))}function wn(n,t){var e=n.console;xn(n,"debug")&&yn()&&e.debug.apply(e,[Wd].concat(t))}function Cn(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];En(Oa,t)}function Sn(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];wn(Oa,t)}function On(n){return M(function(t,e){return t[e]=n[e],t},{},Yd)}function Tn(n,t,e){var r=n[dd]||[];if(e){var i=r.push;r[ll]=Xd,r[fd]=On(t),r[sd]=[],r[ld]=[],r.push=function(n){r[ld].push(n),i.call(this,n)}}n[dd]=r}function An(n,t,e,r){if(t){var i={};i[md]=P(),n[dd][e].push(Jc(i,r))}}function Nn(){Tn(Oa,K(),yn())}function kn(n,t){An(Oa,yn(),n,t)}function jn(){var n={};return n[Rs]=!0,n}function Dn(n){var t={};return t[Rs]=!1,t[js]=n,t}function _n(n){return N(n)?Dn(Vf):n.length>wf?Dn(zf):jn()}function Rn(n){if(!i(n))return Dn(Hf);var t=n[Ps],e=_n(t);return e[Rs]?o(n[Is])?o(n[js])?jn():Dn(Gf):Dn(Zf):e}function In(n){if(!i(n))return Dn(Hf);var t=n[Ps],e=_n(t);if(!e[Rs])return e;var r=n[Ms];return na(r)?jn():Dn(Kf)}function Pn(n){if(!i(n))return Dn(Hf);var t=n[Ps],e=_n(t);return e[Rs]?jn():e}function Mn(n,t){if(!i(n))return Dn(Hf);var e=n[Ls];if(N(e))return Dn(Jf);var r=q(".",e);if(!T(d(function(n){return!Cf.test(n)},r)))return Dn(Wf);var u=n[qs];return!na(u)||T(u)?Dn(Xf):T(d(function(n){return a(t[n])},u))?o(n[Us])?jn():Dn(Yf):Dn(Qf)}function Ln(n){return new nh(n)}function qn(n){return nh.resolve(n)}function Un(n){return nh.reject(n)}function Fn(n){return na(n)?nh.race(n):Un(new TypeError(th))}function $n(n){return na(n)?nh.all(n):Un(new TypeError(th))}function Bn(n,t,e){var r=-1;return Fn([n,Ln(function(n,i){r=u(function(){return i(new Error(e))},t)})]).then(function(n){return c(r),n},function(n){throw c(r),n})}function Hn(n){return o(n[Cd])&&o(n[bd])}function Vn(n,t){return!!t&&(!a(n)&&(!a(n[wd])&&Hn(n[wd])))}function zn(n,t){return n[bd](t)}function Zn(n,t){return Ln(function(e,r){n[Cd](function(){n[bd](t)?e(!0):r(new Error(eh))},!0)})}function Gn(){var n=Oa[Ed][wd];return zn(n,n[Sd][Od])}function Kn(){var n=K(),t=n[xd];return Vn(Oa[Ed],t)}function Jn(){var n=Oa[Ed][wd];return Zn(n,n[Sd][Od])}function Wn(){var n=Oa[Ed][wd];return zn(n,n[Sd][Td])}function Xn(n,t){sn({name:td,value:n,expires:t[ml],domain:t[Nl]})}function Yn(n){var t=K();t[Ol]||Xn(n,t)}function Qn(){var n=K();return n[Ol]?rh:Kn()&&!Gn()?rh:(N(on(td))&&Xn(rh,n),on(td))}function nt(n){var t=K();t[Ol]||sn({name:Ql,value:n,expires:t[vl],domain:t[Nl]})}function tt(){return K()[Ol]?"":on(Ql)}function et(n){if(N(n))return"";var t=ih.exec(n);return T(t)||2!==t.length?"":t[1]}function rt(){if(!K()[bl])return"";var n=Md(nd);return N(n)?"":n}function it(n){var t=K();if(t[bl]){var e=t[Nl],r=new Date(P()+t[xl]),i=Md(nd),o={domain:e,expires:r};if(ya(i))return void Ld(nd,i,o);var u=et(n);N(u)||Ld(nd,u,o)}}function ot(n){return n[Aa]===sf}function ut(n,t){var e=n(),r=t(),i={};return i.sessionId=e,ya(r)?(i.deviceId=r,i):i}function ct(n,t,e,r){var i=new n.CustomEvent(e,{detail:r});t.dispatchEvent(i)}function at(n){return!T(n)&&!T(d(ot,n))}function ft(){ct(Oa,Ta,oh,{type:oh})}function st(n){var t={type:uh,mbox:n.mbox,tracking:ut(Qn,tt)};ct(Oa,Ta,uh,t)}function lt(n,t){var e=n.responseTokens,r={type:ch,mbox:n.mbox,redirect:at(t),tracking:ut(Qn,tt)};T(e)||(r.responseTokens=e),ct(Oa,Ta,ch,r)}function dt(n){ct(Oa,Ta,ah,{type:ah,mbox:n.mbox,message:n.message,tracking:ut(Qn,tt)})}function ht(n){var t={type:fh,mbox:n.mbox,tracking:ut(Qn,tt)};ct(Oa,Ta,fh,t)}function pt(n){ct(Oa,Ta,sh,{type:sh,mbox:n.mbox,tracking:ut(Qn,tt)})}function vt(n){ct(Oa,Ta,lh,{type:lh,mbox:n.mbox,message:n.message,actions:n.actions,tracking:ut(Qn,tt)})}function mt(n){var t={type:dh,mbox:n.mbox,tracking:ut(Qn,tt)};ct(Oa,Ta,dh,t)}function gt(n){var t={type:hh,mbox:n.mbox,url:n.url,tracking:ut(Qn,tt)};ct(Oa,Ta,hh,t)}function yt(n){throw new Error(n)}function bt(n){var t=n[bh]||gh,e=n[xh]||yt(mh),r=n[Eh]||{},i=n[wh]||null,o=n[Ch]||!1,u=n[Sh]||3e3,c=!!a(n[Oh])||!0===n[Oh],f={};return f[bh]=t,f[xh]=e,f[Eh]=r,f[wh]=i,f[Ch]=o,f[Sh]=u,f[Oh]=c,f}function xt(n,t,e,r){return n.onload=function(){var i=1223===n.status?204:n.status;if(i<100||i>599)return r[js]=ph,kn(sd,r),void e(new Error(ph));var o=n.responseText,u=n.getAllResponseHeaders(),c={status:i,headers:u,response:o};r[zs]=c,kn(sd,r),t(c)},n}function Et(n,t,e){return n.onerror=function(){e[js]=ph,kn(sd,e),t(new Error(ph))},n}function wt(n,t,e,r){return n.timeout=t,n.ontimeout=function(){r[js]=vh,kn(sd,r),e(new Error(vh))},n}function Ct(n,t){return!0===t&&(n.withCredentials=t),n}function St(n,t){return m(function(t,e){m(function(t){return n.setRequestHeader(e,t)},t)},t),n}function Ot(n,t){var e={},r=bt(t),i=r[bh],o=r[xh],u=r[Eh],c=r[wh],a=r[Ch],f=r[Sh],s=r[Oh];return e[Zs]=r,Ln(function(t,r){var l=new n.XMLHttpRequest;l=xt(l,t,r,e),l=Et(l,r,e),l.open(i,o,s),l=Ct(l,a),l=St(l,u),s&&(l=wt(l,f,r,e)),l.send(c)})}function Tt(n){return Ot(Oa,n)}function At(n,t){var e=t.sessionId;return ya(e)&&n(e),t}function Nt(n,t){var e=t.tntId;return ya(e)&&n(e),t}function kt(n,t){return n(t.tntId),t}function jt(n,t){n[dd].push(t)}function Dt(n,t){var e=t.trace;return i(e)&&jt(n,e),t}function _t(n){var t=n[js];if(ya(t)){var e={};throw e[Fs]=js,e[js]=t,e}return n}function Rt(n){var t=n.message;return N(t)?kh:t}function It(n){var t=n.duration;return _(t)?t:Nh}function Pt(n,t,e){var r=n[Nl],i=Rt(e),o=new Date(P()+It(e));t(Th,i,{domain:r,expires:o})}function Mt(n,t,e){var r=e.disabled;if(i(r)){var o={};throw o[Fs]=Ah,o[js]=Rt(r),Pt(n,t,r),o}return e}function Lt(n){return ya(n[kf])}function qt(n){return i(n[Nf])||na(n[Nf])}function Ut(n){return ya(n[sf])}function Ft(n){return na(n[Bs])&&!T(n[Bs])}function $t(n){return i(n[Gs])&&ya(n[Gs][Va])}function Bt(n){return a(n[kf])&&a(n[sf])&&a(n[Bs])&&a(n[Gs])}function Ht(n){return ya(n[Js])}function Vt(n){return na(n[Ks])&&!T(n[Ks])}function zt(n){if(Ht(n)){var t={};return t[Aa]=df,t[ja]=n[Js],[t]}return[]}function Zt(n){return Vt(n)?[n.html].concat(n.plugins):[n.html]}function Gt(n){var t=d(Lt,n);if(T(t))return qn([]);var e=p(R(zt,t)),r={};return r[Aa]=Ya,r[Da]=p(R(Zt,t)).join(""),qn([r].concat(e))}function Kt(n){return n[Nf]}function Jt(n){return M(function(n,t){return n.push(Kt(t)),n},[],n)}function Wt(n){var t=d(qt,n);if(T(t))return qn([]);var e={};return e[Aa]=nf,e[Da]=Jt(t),qn([e])}function Xt(n,t){return qn([n({action:sf,url:t[sf]})])}function Yt(n){return{action:af,content:n}}function Qt(n){return Vt(n)?R(Yt,n.plugins):[]}function ne(n){var t=n[Ja];if(N(t))return"";var e=jh.exec(t);return T(e)||2!==e.length?"":e[1]}function te(n,t){var e=document.createElement(Ff);e.innerHTML=t;var r=e.firstElementChild;return a(r)?t:(r.id=n,r.outerHTML)}function ee(n){var t=n[Da],e=ne(n);if(N(e)||N(t))return n;var r=n[Ja];return n[Ja]=r.replace(Dh,""),n[Da]=te(e,t),n}function re(n){var t=n[ka];return N(t)?n:(n[Da]="<"+Uf+" "+_f+'="'+t+'" />',n)}function ie(n){var t=ee(n);if(!y(t[Da]))return Sn(cs,t),null;var e=n[_a];return Df===e&&(n[Aa]=Qa),n}function oe(n){var t=ee(n);return y(t[Da])?t:(Sn(cs,t),null)}function ue(n){var t=ee(n);return y(t[Da])?t:(Sn(cs,t),null)}function ce(n){var t=ee(n);return y(t[Da])?t:(Sn(cs,t),null)}function ae(n){var t=ee(re(n));return y(t[Da])?t:(Sn(cs,t),null)}function fe(n){var t=ee(re(n));return y(t[Da])?t:(Sn(cs,t),null)}function se(n){return y(n[Da])?n:(Sn(cs,n),null)}function le(n){var t=n[Na],e=n[ka];return N(t)||N(e)?(Sn(as,n),null):n}function de(n){var t=n[Ga],e=n[ka];if(N(t)||N(e))return Sn(fs,n),null;var r={};return r[t]=e,n[Xa]=r,n}function he(n){var t=n[Ra],e=n[Ia];if(N(t)||N(e))return Sn(ss,n),null;var r={};return r[Pa]=t,r[Ma]=e,n[Aa]=ef,n[Xa]=r,n}function pe(n){var t=Number(n[La]),e=Number(n[qa]);if(isNaN(t)||isNaN(e))return Sn(ls,n),null;var r=n[$a],i={};return i[Ua]=t,i[Fa]=e,ya(r)&&(i[$a]=r),n[Aa]=ef,n[Xa]=i,n}function ve(n){var t=Number(n[Ba]),e=Number(n[Ha]);return isNaN(t)||isNaN(e)?(Sn(ds,n),null):n}function me(n,t){return n(t)}function ge(n){return N(n[ja])?(Sn(ps,n),null):n}function ye(n,t){switch(t[Aa]){case Ya:return ie(t);case ff:return oe(t);case vf:return ue(t);case mf:return ce(t);case hf:return ae(t);case pf:return fe(t);case af:return se(t);case tf:return le(t);case ef:return de(t);case of:return he(t);case uf:return pe(t);case cf:return t;case rf:return ve(t);case sf:return me(n,t);case lf:return ge(t);default:return null}}function be(n,t){return d(function(n){return!a(n)},R(function(t){return ye(n,t)},t))}function xe(n,t){return qn([].concat(be(n,t.actions),Qt(t)))}function Ee(n){var t=n.queryKey,e=t[_h];if(!y(e))return t;if(N(e))return t;var r=Math.round(P()/1e3);return t[_h]=e.replace(/\|TS=\d+/,"|TS="+r),t}function we(n,t){var e={};return m(function(n,t){a(e[t])&&(e[t]=[]),na(n)?e[t].push.apply(e[t],n):e[t].push(n)},n),m(function(n,t){a(e[t])&&(e[t]=[]),na(n)?e[t].push.apply(e[t],n):e[t].push(n)},t),e}function Ce(n,t){var e=Q(n),r=e.protocol,i=e.host,o=e.path,u=""===e.port?"":":"+e.port,c=N(e.anchor)?"":"#"+e.anchor,a=Ee(e),f=Jd(we(a,t));return r+"://"+i+u+o+(N(f)?"":"?"+f)+c}function Se(n){var t={};return m(function(n){a(t[n.type])&&(t[n.type]={}),t[n.type][n.name]=n.defaultValue},n[$s]),t}function Oe(n){return a(n[Zs])?{}:n[Zs]}function Te(n){return-1!==n.indexOf(Ps)}function Ae(n){var t={};return a(n[Ps])?t:(m(function(n,e){Te(e)||(t[e]=n)},n[Ps]),t)}function Ne(n,t){m(function(e,r){var i=t[r];a(i)||(n[r]=i)},n)}function ke(n,t,e,r){return Ne(n,t),Ne(e,r),Jc({},n,e)}function je(n,t,e){var r={};return r[bh]=gh,r[xh]=Ce(n,t),r[Sh]=e,r}function De(n){return n>=200&&n<300||304===n}function _e(n,t){if(!De(n[Fs]))return[];var e=n[zs];if(N(e))return[];var r={};return r[Aa]=Ya,r[Da]=e,[r].concat(zt(t),Qt(t))}function Re(n,t,e,r){var i=r[Gs],o=Se(i),u=Oe(o),c=Ae(o),a=Zd(n.location.search),f=e[$s],s=i[xh],l=ke(u,a,c,f),d=e[Sh],h=function(n){return _e(n,r)};return t(je(s,l,d)).then(h)['catch'](function(){return[]})}function Ie(n){return qn([].concat(zt(n),Qt(n)))}function Pe(n,t,e,r,i){var o=[];return m(function(i){return Ut(i)?void o.push(Xt(e,i)):Ft(i)?void o.push(xe(e,i)):$t(i)?void o.push(Re(n,t,r,i)):void(Bt(i)&&o.push(Ie(i)))},i),o.concat(Gt(i),Wt(i))}function Me(n){var t=[];return m(function(n){var e=n[Hs];i(e)&&t.push(e)},n),t}function Le(n,t){m(function(n){n.id=F()},n);var e={};return e[Bs]=n,e[Hs]=t,e}function qe(n,t,e,r,i){var o=i[Ws];if(!na(o))return qn(Le([],[]));var u=Pe(n,t,e,r,o),c=Me(o),a=function(n){return Le(p(n),c)};return $n(u).then(a)}function Ue(n,t,e){var r=e[Va];if(N(r))return Sn(hs,e),null;var i=String(e[za])===Ih,o=String(e[Za])===Ih,u={};return i&&(u=Jc({},Zd(n.location.search))),o&&(u[Rh]=t()),e[Va]=Ce(r,u),e}function Fe(n){return!T(n)&&2===n.length&&ya(n[0])}function $e(n){var t=n.indexOf("=");return-1===t?[]:[n.substr(0,t),n.substr(t+1)]}function Be(n,t,e,r){m(function(n,o){i(n)?(t.push(o),Be(n,t,e,r),t.pop()):T(t)?e[r(o)]=n:e[r(t.concat(o).join("."))]=n},n)}function He(n){return d(function(n,t){return ya(t)},Zd(n))}function Ve(n){var t=M(function(n,t){return n.push($e(t)),n},[],d(ya,n));return M(function(n,t){return n[W(A(t[0]))]=W(A(t[1])),n},{},d(Fe,t))}function ze(n,t){var e={};return a(t)?Be(n,[],e,f):Be(n,[],e,t),e}function Ze(n){if(!o(n))return{};var t=null;try{t=n()}catch(n){return{}}return a(t)?{}:na(t)?Ve(t):y(t)&&ya(t)?He(t):i(t)?ze(t):{}}function Ge(){var n=Oa.devicePixelRatio;if(!a(n))return n;n=1;var t=Oa.screen,e=t.systemXDPI,r=t.logicalXDPI;return!a(e)&&!a(r)&&e>r&&(n=e/r),n}function Ke(){var n=Oa.screen,t=n.orientation,e=n.width,r=n.height;if(a(t))return e>r?"landscape":"portrait";if(a(t.type))return null;var i=q("-",t.type);if(T(i))return null;var o=i[0];return a(o)?null:o}function Je(){return Ph}function We(){var n=Oa.screen,t=Ta.documentElement,e={};e[_l]=t.clientHeight,e[Rl]=t.clientWidth,e[Il]=-(new Date).getTimezoneOffset(),e[Pl]=n.height,e[Ml]=n.width,e[ql]=n.colorDepth,e[Ul]=Ge();var r=Ke();a(r)||(e[Ll]=r);var i=Je();return a(i)||(e[Fl]=i),e}function Xe(){return Mh}function Ye(){var n=new Date;return n.getTime()-6e4*n.getTimezoneOffset()}function Qe(){var n=K(),t=Oa.location,e={};return e[Bl]=Qn(),n[Ol]||(e[Hl]=tt()),e[Vl]=Xe(),e[zl]=F(),e[Zl]=n[ll],e[Gl]=Lh,e[Kl]=Ye(),e[Jl]=t.hostname,e[Wl]=t.href,e[Xl]=Ta.referrer,n[Tl]&&(e[Yl]=n[cl]),Lh+=1,e}function nr(n){return Jc({},n,Ze(Oa.targetPageParamsAll))}function tr(n){return Jc({},n,Ze(Oa.targetPageParams))}function er(n){var t=K(),e=t[fl],r=t[kl],i=t[jl];return e!==n?nr(r||{}):Jc(nr(r||{}),tr(i||{}))}function rr(n,t){var e={};e[$l]=n;var r=Ve(t),i=Qe(),o=We(),u=er(n);return Jc({},e,r,i,o,u)}function ir(){var n=K(),t=n[fl],e={};e[$l]=t;var r=Qe(),i=We(),o=er(t);return Jc({},e,r,i,o)}function or(n,t,e){if(N(t))return null;if(a(n[qh]))return null;if(!o(n[qh][Uh]))return null;var r=n[qh][Uh](t,{sdidParamExpiry:e,doesOptInApply:!0});return i(r)&&o(r[Fh])&&r[Fh]()?r:null}function ur(n){return""+ap+n}function cr(n){if(!o(n[op]))return{};var t=n[op]();return i(t)?ze(t,ur):{}}function ar(n){var t={};return ya(n[up])&&(t[fp]=n[up]),ya(n[cp])&&(t[sp]=n[cp]),t}function fr(n,t){var e={};return o(n[ip])?(e[rp]=n[ip](Ps+":"+t),e):{}}function sr(n,t){if(a(n))return{};var e=cr(n),r=ar(n),i=fr(n,t);return Jc({},i,r,e)}function lr(n){var t={},e=n[Xh],r=n[Wh],i=n[Kh],o=n[Jh];return ya(e)&&(t[ep]=e),ya(r)&&(t[Qh]=r),ya(i)&&(t[np]=i),isNaN(parseInt(o,10))||(t[tp]=o),t}function dr(n){return M(function(n,t){return Jc(n,t)},{},n)}function hr(n,t,e){return e&&o(t[Zh])&&!a(n[qh][Gh])}function pr(n,t){var e={};return e[n]=t,e}function vr(n,t,e){return hr(n,t,e)?Ln(function(e){t[Zh](function(n){return e(pr(Yh,n))},n[qh][Gh].GLOBAL,!0)}):qn(pr(Yh,!1))}function mr(n,t,e){return o(n[t])?Ln(function(r){n[t](function(n){return r(pr(e,n))},!0)}):qn({})}function gr(n,t,e){return $n([mr(t,Bh,Xh),mr(t,Hh,Kh),mr(t,Vh,Wh),mr(t,zh,Jh),vr(n,t,e)]).then(dr)}function yr(n){return Sn(dp,n),{}}function br(n,t,e,r){return a(t)?qn({}):Bn(gr(n,t,r),e,lp)['catch'](yr)}function xr(){return{status:js,error:$h}}function Er(n,t,e){return a(n)?qn({}):!0===e[Yh]?Un(xr()):qn(Jc({},t,lr(e)))}function wr(n,t,e){if(!hr(n,t,e))return pr(Yh,!1);var r=t[Zh](null,n[qh][Gh].GLOBAL);return pr(Yh,r)}function Cr(n,t,e){return o(n[t])?pr(e,n[t]()):{}}function Sr(n,t,e){return dr([Cr(t,Bh,Xh),Cr(t,Hh,Kh),Cr(t,Vh,Wh),Cr(t,zh,Jh),wr(n,t,e)])}function Or(n,t,e){return a(t)?{}:Sr(n,t,e)}function Tr(n,t,e){return a(n)?{}:!0===e[Yh]?{}:Jc({},t,lr(e))}function Ar(){var n=K(),t=n[ol],e=n[Cl];return or(Oa,t,e)}function Nr(){var n=Ar(),t=K(),e=t[yl],r=t[El];return br(Oa,n,e,r)}function kr(){var n=Ar(),t=K(),e=t[El];return Or(Oa,n,e)}function jr(n){var t=Ar(),e=sr(t,n),r=function(n){return Er(t,e,n)};return Nr().then(r)}function Dr(n){var t=Ar();return Tr(t,sr(t,n),kr())}function _r(n,t){hp[n]=t}function Rr(n){return hp[n]}function Ir(n){var t=n[hd];if(a(t))return!1;var e=t[vd];return!(!na(e)||T(e))}function Pr(n){var t=n[Ls];if(!y(t)||T(t))return!1;var e=n[ll];if(!y(e)||T(e))return!1;var r=n[al];return!(!a(r)&&!_(r))&&!!o(n[Xs])}function Mr(n){return Ln(function(t,e){n(function(n,r){if(!a(n))return void e(n);t(r)})})}function Lr(n,t,e,r,i,o){var u={};u[n]=t,u[e]=r,u[i]=o;var c={};return c[pd]=u,c}function qr(n){var t=n[Ls],e=n[ll],r=n[al]||mp;return Bn(Mr(n[Xs]),r,vp).then(function(n){var r=Lr(Ls,t,ll,e,$s,n);return Sn(pp,Is,r),kn(sd,r),n})['catch'](function(n){var r=Lr(Ls,t,ll,e,js,n);return Sn(pp,js,r),kn(sd,r),{}})}function Ur(n){var t=M(function(n,t){return Jc(n,t)},{},n);return _r(vd,t),t}function Fr(n){return Ir(n)?$n(R(qr,d(Pr,n[hd][vd]))).then(Ur):qn({})}function $r(){var n=Rr(vd);return a(n)?{}:n}function Br(){return Fr(Oa)}function Hr(){return $r(Oa)}function Vr(n,t,e,r){if(!r)return e;var i=n();return N(i)?e:e.replace(t,""+gp+i)}function zr(n){return bp.replace(yp,n)}function Zr(n,t){var e=n[il],r=n[ul],i=n[bl];return[n[Al],xp,Vr(t,e,r,i),zr(e)].join("")}function Gr(n){return d(function(n,t){return!(Kn()&&!Wn())||t!==rp},n)}function Kr(n,t,e,r){var i=Jc({},r[$s],Gr(e)),o={};return o[xh]=Zr(n,t),o[wh]=Jd(i),o[Sh]=r[Sh],o}function Jr(n){return Jc({},n[0],n[1])}function Wr(n,t){var e=t[Ps],r=function(e){return Kr(n,rt,Jr(e),t)};return!Kn()||Gn()?$n([jr(e),Br()]).then(r):Jn().then(function(){return $n([jr(e),Br()])}).then(r)}function Xr(n,t){return Kr(n,rt,Jr([Dr(t[Ps]),Hr()]),t)}function Yr(n){return n>=200&&n<300||304===n}function Qr(n){var t={};return t[Fs]=js,t[js]=n,t}function ni(n,t,e,r,i,o){return v([function(n){return At(Yn,n)},function(n){return Nt(nt,n)},function(n){return kt(it,n)},function(n){return Dt(t,n)},_t,function(t){return Mt(n,Ld,t)},function(n){return qe(t,e,r,i,n)}])(o)}function ti(){var n={};return n[gd]=[yd],n}function ei(n,t){var e=n[Ol],r=n[Dl],i=t[xh],o=t[wh],u=i+"?"+o,c={};return c[Ch]=!0,c[bh]=gh,c[Sh]=t[Sh],c[xh]=u,e?c:u.length>r?(c[bh]=yh,c[xh]=i,c[Eh]=ti(),c[wh]=o,c):c}function ri(n){if(!Yr(n[Fs]))return Qr(ks);try{return JSON.parse(n[zs])}catch(n){return Qr(n.message||Ep)}}function ii(n,t,e,r){var i=function(n){return ei(t,n)},o=function(t){return Ue(n,Qn,t)},u=function(i){return ni(t,n,e,o,r,ri(i))};return Wr(t,r).then(i).then(e).then(u)}function oi(n){var t=K();return ii(Oa,t,Tt,n)}function ui(n){return Xr(K(),n)}function ci(n,t){var e=t[al];return _(e)?e<=0?n[al]:e:n[al]}function ai(n){return i(n)&&ya(n[js])?n[js]:i(n)&&ya(n[Vs])?n[Vs]:ya(n)?n:ks}function fi(n,t){var e=t[Ps],r=i(t[$s])?t[$s]:{},o={};return o[Ps]=e,o[$s]=Jc({},rr(e),r),o[al]=ci(n,t),o}function si(n,t,e){var r=e[Bs],i={};i[Ps]=t[Ps],i[Hs]=e[Hs],Sn(wp,es,r),t[Is](r),n(i,r)}function li(n,t,e){var r=e[Fs]||_s,i=ai(e),o={};o[Ps]=t[Ps],o[Vs]=i,Cn(wp,rs,e),t[js](r,i),n(o)}function di(n,t,e,r,i,o,c,a){var f=t(a),s=f[js];if(!f[Rs])return void Cn(wp,s);if(!n())return u(a[js](Ds,$f)),void Cn($f);var l={};l[Ps]=a[Ps];var d=function(n){return si(i,a,n)},h=function(n){return li(o,a,n)};r(l),e(fi(c,a)).then(d)['catch'](h)}function hi(n){di(gn,Rn,oi,st,lt,dt,K(),n)}function pi(n){var t=n.charAt(0),e=n.charAt(1),r=n.charAt(2),i={key:n};return i.val="-"===e?""+t+e+"\\3"+r+" ":t+"\\3"+e+" ",i}function vi(n){var t=n.match(Ap);if(T(t))return n;var e=R(pi,t);return M(function(n,t){return n.replace(t.key,t.val)},n,e)}function mi(n){for(var t=[],e=A(n),r=e.indexOf(Sp),i=void 0,o=void 0,u=void 0,c=void 0;-1!==r;)i=A(e.substring(0,r)),o=A(e.substring(r)),c=o.indexOf(Op),u=A(o.substring(Tp,c)),e=A(o.substring(c+1)),r=e.indexOf(Sp),i&&u&&t.push({sel:i,eq:Number(u)});return e&&t.push({sel:e}),t}function gi(n){if(D(n))return Cp(n);if(!y(n))return Cp(n);var t=vi(n);if(-1===t.indexOf(Sp))return Cp(t);var e=mi(t);return M(function(n,t){var e=t.sel,r=t.eq;return n=n.find(e),_(r)&&(n=n.eq(r)),n},Cp(Ta),e)}function yi(n){return gi(n).length>0}function bi(n){return Cp("<"+Ff+"/>").append(n)}function xi(n){return Cp(n)}function Ei(n){return gi(n).prev()}function wi(n){return gi(n).next()}function Ci(n){return gi(n).parent()}function Si(n,t){return gi(t).is(n)}function Oi(n,t){return gi(t).find(n)}function Ti(n){return gi(n).children()}function Ai(n,t,e){return gi(e).on(n,t)}function Ni(n){return i(n)&&ya(n[js])?n[js]:i(n)&&ya(n[Vs])?n[Vs]:ya(n)?n:ks}function ki(n){return function(){Sn(gs,n),n[Is]()}}function ji(n){return function(t){var e=t[Fs]||_s,r=Ni(t);Cn(ys,n,t),n[js](e,r)}}function Di(n,t){var e=t[Ps],r=Jc({},t),u=i(t[$s])?t[$s]:{},c=n[al],a=t[al];return r[$s]=Jc({},rr(e),u),r[al]=_(a)&&a>=0?a:c,r[Is]=o(t[Is])?t[Is]:I,r[js]=o(t[js])?t[js]:I,r}function _i(n,t){var e=ki(t),r=ji(t);n(t).then(e)['catch'](r)}function Ri(n,t){return _i(n,t),!t.preventDefault}function Ii(n,t,e){var r=e[Ja],i=e[Pf],o=O(gi(r)),u=function(){return Ri(n,e)};m(function(n){return t(i,u,n)},o)}function Pi(n){var t=n[Pf],e=n[Ja];return ya(t)&&(ya(e)||D(e))}function Mi(n,t,e,r,i,o,u){if(!r())return void Cn($f);var c=Pn(u),a=c[js];if(!c[Rs])return void Cn(Np,a);var f=Di(n,u);if(Pi(f))return void i(t,e,f);o(t,f)}function Li(){var n={};return n[gd]=[yd],n}function qi(n,t){var e=t[xh],r=t[wh],i=e+"?"+r;return Ln(function(t,e){if(n[kp][jp](i))return void t();e(Dp)})}function Ui(n){var t=n[xh],e=n[wh],r={};return r[bh]=yh,r[xh]=t+"?"+e,r[Ch]=!0,r[Oh]=!1,r[Eh]=Li(),Tt(r)}function Fi(n){return kp in n&&jp in n[kp]}function $i(n,t){var e=ui(t);return Fi(n)?qi(n,e):Ui(e)}function Bi(n){Mi(K(),function(n){return $i(Oa,n)},Ai,gn,Ii,_i,n)}function Hi(n){return gi(n).empty().remove()}function Vi(n,t){return gi(t).after(n)}function zi(n,t){return gi(t).before(n)}function Zi(n,t){return gi(t).append(n)}function Gi(n,t){return gi(t).prepend(n)}function Ki(n,t){return gi(t).html(n)}function Ji(n){return gi(n).html()}function Wi(n,t){return gi(t).text(n)}function Xi(n,t){return gi(t).attr(n)}function Yi(n,t,e){return gi(e).attr(n,t)}function Qi(n,t){return gi(t).removeAttr(n)}function no(n,t,e){var r=Xi(n,e);ya(r)&&(Qi(n,e),Yi(t,r,e))}function to(n,t){return ya(Xi(n,t))}function eo(n){var t={};t[Aa]=n,kn(sd,t)}function ro(n,t){var e={};e[Aa]=n,e[js]=t,kn(sd,e)}function io(n){return Xi(Sf,n)}function oo(n){return to(Sf,n)}function uo(n){return m(function(n){return no(_f,Sf,n)},O(Oi(Uf,n))),n}function co(n){return m(function(n){return no(Sf,_f,n)},O(Oi(Uf,n))),n}function ao(n){return Sn(ms,n),Xi(_f,Yi(_f,n,xi("<"+Uf+"/>")))}function fo(n){var t=d(oo,O(Oi(Uf,n)));return T(t)?n:(m(ao,R(io,t)),n)}function so(n){return v([uo,fo,co])(n)}function lo(n){var t=Xi(_f,n);return ya(t)?t:null}function ho(n){return d(ya,R(lo,O(Oi(jf,n))))}function po(n){return M(function(n,t){return n.then(function(){return Sn(Ns,t),Ip(t)})},qn(),n)}function vo(n){return eo(n),n}function mo(n,t){return Sn(ts,t),ro(n,t),n}function go(n,t){var e=gi(t[Ja]),r=so(bi(t[Da])),i=ho(r),o=void 0;try{o=qn(n(e,r))}catch(n){return Un(mo(t,n))}return T(i)?o.then(function(){return vo(t)})['catch'](function(n){return mo(t,n)}):o.then(function(){return po(i)}).then(function(){return vo(t)})['catch'](function(n){return mo(t,n)})}function yo(n,t){return Ki(Ji(t),n)}function bo(n){return Sn(us,n),go(yo,n)}function xo(n){var t=gi(n[Ja]),e=n[Da];return Sn(us,n),eo(n),Wi(e,t),qn(n)}function Eo(n,t){return Zi(Ji(t),n)}function wo(n){return Sn(us,n),go(Eo,n)}function Co(n,t){return Gi(Ji(t),n)}function So(n){return Sn(us,n),go(Co,n)}function Oo(n,t){var e=Ci(n);return Hi(zi(Ji(t),n)),e}function To(n){return Sn(us,n),go(Oo,n)}function Ao(n,t){return Ei(zi(Ji(t),n))}function No(n){return Sn(us,n),go(Ao,n)}function ko(n,t){return wi(Vi(Ji(t),n))}function jo(n){return Sn(us,n),go(ko,n)}function Do(n,t){return Ci(zi(Ji(t),n))}function _o(n){return Sn(us,n),go(Do,n)}function Ro(n,t){return _f===t&&Si(Uf,n)}function Io(n,t){Qi(_f,n),Yi(_f,ao(t),n)}function Po(n){var t=n[Na],e=n[ka],r=gi(n[Ja]);return Sn(us,n),eo(n),Ro(r,t)?Io(r,e):Yi(t,e,r),qn(n)}function Mo(n,t){return gi(t).addClass(n)}function Lo(n,t){return gi(t).removeClass(n)}function qo(n,t){return gi(t).hasClass(n)}function Uo(n,t){return gi(t).css(n)}function Fo(n,t,e){m(function(n){m(function(t,r){return n.style.setProperty(r,t,e)},t)},O(n))}function $o(n){var t=gi(n[Ja]),e=n[Ka];return Sn(us,n),eo(n),N(e)?Uo(n[Xa],t):Fo(t,n[Xa],e),qn(n)}function Bo(n){var t=gi(n[Ja]);return Sn(us,n),eo(n),Hi(t),qn(n)}function Ho(n){var t=n[Ba],e=n[Ha],r=gi(n[Ja]),i=O(Ti(r)),o=i[t],u=i[e];return yi(o)&&yi(u)?(Sn(us,n),eo(n),t<e?Vi(o,u):zi(o,u),qn(n)):(Sn(vs,n),ro(n,vs),qn(n))}function Vo(n,t){return Sn(us,t),eo(t),n(Pp,t),qn(t)}function zo(n,t){return Sn(us,t),eo(t),n(Mp,t),qn(t)}function Zo(n){var t=bi(n);return M(function(n,t){return n.push(Ji(bi(t))),n},[],O(Oi(Lp,t))).join("")}function Go(n){var t=Jc({},n),e=t[Da];if(N(e))return t;var r=gi(t[Ja]);return Si(Lf,r)?(t[Aa]=ff,t[Da]=Zo(e),t):t}function Ko(n,t){var e=t[Va];Sn(us,t),n.location.replace(e)}function Jo(n,t){var e=Go(t);switch(e[Aa]){case Ya:return bo(e);case Qa:return xo(e);case ff:return wo(e);case vf:return So(e);case mf:return To(e);case hf:return No(e);case pf:return jo(e);case af:return _o(e);case tf:return Po(e);case ef:return $o(e);case cf:return Bo(e);case rf:return Ho(e);case lf:return Vo(n,e);case df:return zo(n,e);default:return qn(e)}}function Wo(){}function Xo(n,t,e){n.emit(t,e)}function Yo(n,t,e){n.on(t,e)}function Qo(n,t,e){n.once(t,e)}function nu(n,t){n.off(t)}function tu(n,t){Xo(Up,n,t)}function eu(n,t){Yo(Up,n,t)}function ru(n,t){Qo(Up,n,t)}function iu(n){nu(Up,n)}function ou(n,t){return"<"+qf+" "+Rf+'="'+n+'" '+If+'="'+Qs+'">'+t+"</"+qf+">"}function uu(n,t){return ou(Fp+b(t),t+" {"+n+"}")}function cu(n){if(!0===n[pl]&&!yi(Bp)){var t=n[hl];Zi(ou($p,t),Lf)}}function au(n){!0===n[pl]&&yi(Bp)&&Hi(qf+"["+Rf+'="'+$p+'"]')}function fu(n,t){if(!T(t)){var e=n[dl];Zi(R(function(n){return uu(e,n)},t).join("\n"),Lf)}}function su(n){var t="\n."+Ys+" {"+n[dl]+"}\n";Zi(ou(Hp,t),Lf)}function lu(){cu(K())}function du(){au(K())}function hu(n){fu(K(),n)}function pu(n){Hi("#"+(Fp+b(n)))}function vu(){su(K())}function mu(n,t){for(var e=0,r=-1,i=n.length;e<i;){if(n[e].id===t.id){r=e;break}e+=1}-1!==r&&n.splice(r,1)}function gu(n){return Gp[n]=Gp[n]||{},!Gp[n][Kp]&&(Gp[n][Kp]=!0,!0)}function yu(n){Gp[n]&&(Gp[n][Kp]=!1)}function bu(n,t){return Gp[n]=Gp[n]||{},Gp[n][t]||[]}function xu(n,t,e){Gp[n]=Gp[n]||{},Gp[n][t]=e}function Eu(n){delete Gp[n]}function wu(n,t,e){Gp[n]=Gp[n]||{},Gp[n][t]=Gp[n][t]||[],Gp[n][t].push(e)}function Cu(n,t,e){Gp[n]=Gp[n]||{},Gp[n][t]=Gp[n][t]||[],mu(Gp[n][t],e)}function Su(){m(function(n){return n()},Xp)}function Ou(){a(Yp)&&(Yp=new Wp(Su),Yp.observe(Ta,Jp))}function Tu(){return!a(Wp)}function Au(n,t){Xp[n]=t,t(),Ou()}function Nu(n){delete Xp[n],a(Yp)||T(Xp)&&(Yp.disconnect(),Yp=null)}function ku(n){if(Ta[nv]===tv)return void Oa.requestAnimationFrame(n);u(n,Qp)}function ju(){if(!T(ev)){ku(function(){m(function(n){return n()},ev),ju()})}}function Du(n,t){ev[n]=t,t(),ju()}function _u(n){delete ev[n]}function Ru(n,t){if(Tu())return void Au(n,t);Du(n,t)}function Iu(n){if(Tu())return void Nu(n);_u(n)}function Pu(n){hu(d(ya,R(function(n){return n[Wa]},n)))}function Mu(n){Mo(nl,Lo(Ys,n))}function Lu(n){var t=n[Ja],e=n[Wa];(ya(t)||D(t))&&(rv(n)?Mo(tl,Lo(Ys,t)):Mu(t)),ya(e)&&pu(e)}function qu(n){m(Lu,n)}function Uu(n,t,e){var r=bu(n,Vp),i=bu(n,zp),o=r.concat(i);if(Eu(n),!T(o))return qu(o),void e(o);t()}function Fu(n){var t=bu(n,Vp),e=bu(n,Zp);return T(t)&&T(e)}function $u(n,t,e){var r=rd+"-"+n;Jo(t,e).then(function(){Sn(os,e),Lu(e),Cu(n,Zp,e),Fu(n)&&tu(r)})['catch'](function(t){Sn(ts,t),Lu(e),Cu(n,Zp,e),wu(n,zp,e),Fu(n)&&tu(r)})}function Bu(n,t){u(function(){return tu(id+"-"+n)},t)}function Hu(n,t,e,r){var i=ed+"-"+n,o=id+"-"+n,u=rd+"-"+n;eu(i,function(){if(gu(n)){if(Fu(n))return tu(u),void yu(n);var e=bu(n,Vp),r=[];m(function(e){if(yi(e[Ja]))return wu(n,Zp,e),void $u(n,t,e);r.push(e)},e),xu(n,Vp,r),yu(n)}}),ru(u,function(){Iu(n),iu(i),iu(o),Uu(n,e,r)}),ru(o,function(){Iu(n),iu(i),iu(u),Uu(n,e,r)}),Ru(n,function(){return tu(i)})}function Vu(n,t,e){var r=K(),i=r[gl],o=F();return Bu(o,i),Pu(e),n(),xu(o,Vp,e),Ln(function(n,e){return Hu(o,t,n,e)})}function zu(n){Ko(Oa,n)}function Zu(n,t,e){return Vu(n,t,e)}
function Gu(n,t,e){var r={};r[t]=e[ja];var i={};return i[Ps]=n+Tf,i[Pf]=Mf,i[Ja]=e[Ja],i[$s]=r,i}function Ku(n){return ya(n)?n:D(n)?n:Lf}function Ju(n){Mo(nl,Lo(Ys,n))}function Wu(n,t){a(t[Ja])&&(t[Ja]=n)}function Xu(n,t){m(function(t){return Wu(n,t)},t)}function Yu(n,t){var e={};return e[Ps]=n,e[Vs]=ns,e[Bs]=t,e}function Qu(n){var t={};return t[js]=n,t}function nc(n,t){var e=Yu(n,t),r=Qu(e);Cn(ns,t),kn(sd,r),vt(e)}function tc(n){var t={};t[Ps]=n,Sn(is),pt(t)}function ec(n){return R(function(n){return Jc({},n)},n)}function rc(n){var t=n[Ps],e=Ku(n[Ja]),r=In(n),i=r[js];if(!r[Rs])return Cn(iv,i),void Ju(e);if(!gn())return Cn($f),void Ju(e);var o=n[Ms],u={};if(u[Ps]=t,T(o))return Sn(iv,Cs),Ju(e),tu(od,t),void mt(u);var c=h(d(ov,o));if(!a(c))return u[Va]=c[Va],Sn(iv,Ss),gt(u),void zu(c);var f=function(n,e){return Bi(Gu(t,n,e))},s=function(){return tu(ud,t)},l=ec(o);Xu(e,l),ht(u),Zu(s,f,l).then(function(){return tc(t)})['catch'](function(n){return nc(t,n)})}function ic(){return{log:Sn,error:Cn}}function oc(n){var t={};return t[il]=n[il],t[ul]=n[ul],t[al]=n[al],t[fl]=n[fl],t[sl]=n[sl],t}function uc(n,t,e){for(var r=q(".",t),i=r.length,o=0;o<i-1;o+=1){var u=r[o];n[u]=n[u]||{},n=n[u]}n[r[i-1]]=e}function cc(n,t,e,r){var i={logger:ic(),settings:oc(t)},o=e(r,i),u=o[js];if(!o[Rs])throw new Error(u);var c=n[uv][cv];c[av]=c[av]||{};var a=r[Ls],f=r[qs],s=r[Us],l=M(function(n,t){return n.push(i[t]),n},[],f);uc(c[av],a,s.apply(void 0,l))}function ac(n){cc(Oa,K(),Mn,n)}function fc(n){return i(n)&&ya(n[js])?n[js]:!a(n)&&ya(n[Vs])?n[Vs]:ya(n)?n:ks}function sc(n,t){return Mo(""+Af+t,Yi(Of,t,n))}function lc(n,t,e){var r=e[Bs],i={};i[Ps]=n,i[Hs]=e[Hs];var o={};o[Ps]=n,o[Ja]=t,o[Ms]=r,Sn(xs,n),lt(i,r),rc(o)}function dc(n,t,e){var r=fc(e),i={};i[Ps]=n,i[Vs]=r,Cn(Es,n,e),dt(i),Mo(nl,Lo(Ys,t))}function hc(n,t){return[].slice.call(n,t)}function pc(n){return Ps+":"+n}function vc(n,t){var e=Rr(n);a(e)?_r(pc(n),[t]):(e.push(t),_r(pc(n),e))}function mc(n){return Rr(pc(n))}function gc(n,t,e){var r=K(),i={};i[Ps]=n,i[$s]=t,i[al]=r[al];var o={};o[Ps]=n;var u=function(t){return lc(n,e,t)},c=function(t){return dc(n,e,t)};st(o),oi(i).then(u)['catch'](c)}function yc(n,t){if(!D(n))return Cn(sv,Ts,Os,t),gi(Lf);if(Si(Lf,Ci(n)))return Sn(sv,As,t),gi(Lf);var e=Ei(n);return Si(Ff,e)&&qo(Ys,e)?e:(Sn(sv,bs,Os,t),gi(Lf))}function bc(n,t,e){if(!gn()&&!bn())return void Cn($f);var r=_n(t),i=r[js];if(!r[Rs])return void Cn(sv,i);var o=yc(n,t),u=rr(t,e),c={};c[Ps]=t,c[$s]=u,c[Ja]=sc(o,t),Sn(sv,t,u,o),vc(t,c),gn()&&gc(t,u,o)}function xc(n,t){var e=gi("#"+n);return yi(e)?e:(Sn(lv,bs,Os,t),gi(Lf))}function Ec(n,t,e){if(!gn()&&!bn())return void Cn($f);if(N(n))return void Cn(lv,ws);var r=_n(t),i=r[js];if(!r[Rs])return void Cn(lv,i);var o=xc(n,t),u=rr(t,e),c={};c[Ps]=t,c[$s]=u,c[Ja]=sc(o,t),Sn(lv,t,u,o),vc(t,c)}function wc(n,t){if(!gn())return void Cn($f);var e=_n(n),r=e[js];if(!e[Rs])return void Cn(dv,r);var i=Ve(t);i[Vl]=F();var o=mc(n);Sn(dv,o),m(function(n){var t=n[Ps],e=n[$s],r=n[Ja];gc(t,Jc({},e,i),r)},o)}function Cc(n){var t=hc(arguments,1);fv.skipStackDepth=2,bc(fv(),n,t)}function Sc(n,t){Ec(n,t,hc(arguments,2))}function Oc(n){wc(n,hc(arguments,1))}function Tc(n){n[vv]=n[vv]||{},n[vv].querySelectorAll=gi}function Ac(n,t){t.addEventListener(Mf,function(t){o(n[vv][mv])&&n[vv][mv](t)},!0)}function Nc(n,t,e){if(bn()){Tc(n);var r=e[Sl],i=function(){return Ac(n,t)},o=function(){return Cn(hv)};Sn(pv),Ip(r).then(i)['catch'](o)}}function kc(n){return i(n)&&ya(n[js])?n[js]:!a(n)&&ya(n[Vs])?n[Vs]:ya(n)?n:ks}function jc(n,t,e){var r=e[Bs],i={};i[Ps]=n,i[Hs]=e[Hs];var o={};o[Ps]=n,o[Ja]=t,o[Ms]=r,Sn(xs,n),lt(i,r),rc(o)}function Dc(n,t){var e={};e[Ps]=n,e[Vs]=kc(t),Cn(Es,n,t),dt(e),tu(ad,n)}function _c(){var n=K(),t=n[fl],e={};e[Ps]=t,e[$s]=ir(),e[al]=n[al];var r=function(n){return jc(t,Lf,n)},i=function(n){return Dc(t,n)};Sn(xs,t);var o={};o[Ps]=t,st(o),oi(e).then(r)['catch'](i)}function Rc(){ru(cd,lu)}function Ic(n,t){eu(n,function(e){e===t&&(du(),iu(n))})}function Pc(n){if(!n[sl])return void Sn(gv,yv);var t=n[fl],e=_n(t),r=e[js];if(!e[Rs])return void Cn(gv,r);Rc(),Ic(ad,t),Ic(od,t),Ic(ud,t),_c()}function Mc(n){var t=function(){};n.adobe=n.adobe||{},n.adobe.target={VERSION:"",event:{},getOffer:t,applyOffer:t,trackEvent:t,registerExtension:t,init:t},n.mboxCreate=t,n.mboxDefine=t,n.mboxUpdate=t}function Lc(n,t,e){if(n.adobe&&n.adobe.target&&void 0!==n.adobe.target.getOffer)return void Cn(Bf);G(e);var r=K(),i=r[ll];if(n.adobe.target.VERSION=i,n.adobe.target.event={LIBRARY_LOADED:oh,REQUEST_START:uh,REQUEST_SUCCEEDED:ch,REQUEST_FAILED:ah,CONTENT_RENDERING_START:fh,CONTENT_RENDERING_SUCCEEDED:sh,CONTENT_RENDERING_FAILED:lh,CONTENT_RENDERING_NO_OFFERS:dh,CONTENT_RENDERING_REDIRECT:hh},!r[rl])return Mc(n),void Cn($f);Nc(n,t,r),gn()&&(vu(),Nn(),Ar(),Pc(r)),n.adobe.target.getOffer=hi,n.adobe.target.trackEvent=Bi,n.adobe.target.applyOffer=rc,n.adobe.target.registerExtension=ac,n.mboxCreate=Cc,n.mboxDefine=Sc,n.mboxUpdate=Oc,tu(cd),ft()}var qc,Uc=window,Fc=document,$c=!Fc.documentMode||Fc.documentMode>=10,Bc=Fc.compatMode&&"CSS1Compat"===Fc.compatMode,Hc=Bc&&$c,Vc=Uc.targetGlobalSettings;if(!Hc||Vc&&!1===Vc.enabled)return Uc.adobe=Uc.adobe||{},Uc.adobe.target={VERSION:"",event:{},getOffer:n,applyOffer:n,trackEvent:n,registerExtension:n,init:n},Uc.mboxCreate=n,Uc.mboxDefine=n,Uc.mboxUpdate=n,"console"in Uc&&"warn"in Uc.console&&Uc.console.warn("AT: Adobe Target content delivery is disabled. Update your DOCTYPE to support Standards mode."),Uc.adobe.target;/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zc=Object.getOwnPropertySymbols,Zc=Object.prototype.hasOwnProperty,Gc=Object.prototype.propertyIsEnumerable,Kc=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(n){return t[n]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(n){r[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(n,e){for(var r,i,o=t(n),u=1;u<arguments.length;u++){r=Object(arguments[u]);for(var c in r)Zc.call(r,c)&&(o[c]=r[c]);if(zc){i=zc(r);for(var a=0;a<i.length;a++)Gc.call(r,i[a])&&(o[i[a]]=r[i[a]])}}return o},Jc=Kc,Wc=Object.prototype,Xc=Wc.toString,Yc="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Qc="[object Function]",na=Array.isArray,ta=function(n,t){return t.forEach(n)},ea=function(n,t){ta(function(e){return n(t[e],e)},l(t))},ra=function(n,t){return t.filter(n)},ia=function(n,t){var e={};return ea(function(t,r){n(t,r)&&(e[r]=t)},t),e},oa="[object String]",ua=9007199254740991,ca=function(n,t){return t.map(n)},aa=Object.prototype,fa=aa.hasOwnProperty,sa=String.prototype,la=sa.trim,da="[object Object]",ha=Function.prototype,pa=Object.prototype,va=ha.toString,ma=pa.hasOwnProperty,ga=va.call(Object),ya=function(n){return!N(n)},ba="[object Number]",xa=function(n,t){var e={};return ea(function(t,r){e[r]=n(t,r)},t),e},Ea=function(n,t,e){return e.reduce(n,t)},wa=function(n,t,e){var r=t;return ea(function(t,e){r=n(r,t,e)},e),r},Ca=Array.prototype,Sa=Ca.reverse,Oa=window,Ta=document,Aa="action",Na="attribute",ka="value",ja="clickTrackId",Da="content",_a="contentType",Ra="finalHeight",Ia="finalWidth",Pa="height",Ma="width",La="finalLeftPosition",qa="finalTopPosition",Ua="left",Fa="top",$a="position",Ba="from",Ha="to",Va="url",za="includeAllUrlParameters",Za="passMboxSession",Ga="property",Ka="priority",Ja="selector",Wa="cssSelector",Xa="style",Ya="setContent",Qa="setText",nf="setJson",tf="setAttribute",ef="setStyle",rf="rearrange",of="resize",uf="move",cf="remove",af="customCode",ff="appendContent",sf="redirect",lf="trackClick",df="signalClick",hf="insertBefore",pf="insertAfter",vf="prependContent",mf="replaceContent",gf="mboxDebug",yf="mboxDisable",bf="mboxEdit",xf="check",Ef="true",wf=250,Cf=/^[a-zA-Z]+$/,Sf="data-at-src",Of="data-at-mbox-name",Tf="-clicked",Af="mbox-name-",Nf="json",kf="html",jf="script",Df="text",_f="src",Rf="id",If="class",Pf="type",Mf="click",Lf="head",qf="style",Uf="img",Ff="div",$f='Adobe Target content delivery is disabled. Ensure that you can save cookies to your current domain, there is no "mboxDisable" cookie and there is no "mboxDisable" parameter in query string.',Bf="Adobe Target has already been initialized.",Hf="options argument is required",Vf="mbox option is required",zf="mbox option is too long",Zf="success option is required",Gf="error option is required",Kf="offer option is required",Jf="name option is required",Wf="name is invalid",Xf="modules option is required",Yf="register option is required",Qf="modules do not exists",ns="Failed actions",ts="Unexpected error",es="actions to be rendered",rs="request failed",is="All actions rendered successfully",os="Action rendered successfully",us="Rendering action",cs="Action has no content",as="Action has no attribute or value",fs="Action has no property or value",ss="Action has no height or width",ls="Action has no left, top or position",ds="Action has no from or to",hs="Action has no url",ps="Action has no click track ID",vs="Rearrange elements are missing",ms="Loading image",gs="Track event request succeeded",ys="Track event request failed",bs="Mbox container not found",xs="Rendering mbox",Es="Rendering mbox failed",ws="ID is missing",Cs="No actions to be rendered",Ss="Redirect action",Os="default to HEAD",Ts="document.currentScript is missing or not supported",As="executing from HTML HEAD",Ns="Script load",ks="unknown error",js="error",Ds="warning",_s="unknown",Rs="valid",Is="success",Ps="mbox",Ms="offer",Ls="name",qs="modules",Us="register",Fs="status",$s="params",Bs="actions",Hs="responseTokens",Vs="message",zs="response",Zs="request",Gs="dynamic",Ks="plugins",Js="clickToken",Ws="offers",Xs="provider",Ys="mboxDefault",Qs="at-flicker-control",nl="at-element-marker",tl="at-element-click-tracking",el=Ps,rl="enabled",il="clientCode",ol="imsOrgId",ul="serverDomain",cl="crossDomain",al="timeout",fl="globalMboxName",sl="globalMboxAutoCreate",ll="version",dl="defaultContentHiddenStyle",hl="bodyHiddenStyle",pl="bodyHidingEnabled",vl="deviceIdLifetime",ml="sessionIdLifetime",gl="selectorsPollingTimeout",yl="visitorApiTimeout",bl="overrideMboxEdgeServer",xl="overrideMboxEdgeServerTimeout",El="optoutEnabled",wl="secureOnly",Cl="supplementalDataIdParamTimeout",Sl="authoringScriptUrl",Ol="crossDomainOnly",Tl="crossDomainEnabled",Al="scheme",Nl="cookieDomain",kl="mboxParams",jl="globalMboxParams",Dl="urlSizeLimit",_l="browserHeight",Rl="browserWidth",Il="browserTimeOffset",Pl="screenHeight",Ml="screenWidth",Ll="screenOrientation",ql="colorDepth",Ul="devicePixelRatio",Fl="webGLRenderer",$l=Ps,Bl="mboxSession",Hl="mboxPC",Vl="mboxPage",zl="mboxRid",Zl="mboxVersion",Gl="mboxCount",Kl="mboxTime",Jl="mboxHost",Wl="mboxURL",Xl="mboxReferrer",Yl="mboxXDomain",Ql="PC",nd="mboxEdgeCluster",td="session",ed="at-tick",rd="at-render-complete",id="at-timeout",od="at-no-offers",ud="at-selectors-hidden",cd="at-library-loaded",ad="at-global-mbox-failed",fd="settings",sd="clientTraces",ld="serverTraces",dd="___target_traces",hd="targetGlobalSettings",pd="dataProvider",vd=pd+"s",md="timestamp",gd="Content-Type",yd="application/x-www-form-urlencoded",bd="isApproved",xd="optinEnabled",Ed="adobe",wd="optIn",Cd="fetchPermissions",Sd="Categories",Od="TARGET",Td="ANALYTICS",Ad=/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,Nd=/^(com|edu|gov|net|mil|org|nom|co|name|info|biz)$/i,kd="file:",jd={},Dd=[rl,il,ol,ul,Nl,cl,al,sl,kl,jl,dl,"defaultContentVisibleStyle",hl,pl,gl,yl,bl,xl,El,xd,wl,Cl,Sl,Dl],_d="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Rd=J(function(n,t){!function(e){var r=!1;if("function"==typeof qc&&qc.amd&&(qc(e),r=!0),"object"===(void 0===t?"undefined":Yc(t))&&(n.exports=e(),r=!0),!r){var i=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=i,o}}}(function(){function n(){for(var n=0,t={};n<arguments.length;n++){var e=arguments[n];for(var r in e)t[r]=e[r]}return t}function t(e){function r(t,i,o){var u;if("undefined"!=typeof document){if(arguments.length>1){if(o=n({path:"/"},r.defaults,o),"number"==typeof o.expires){var c=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*o.expires),o.expires=c}o.expires=o.expires?o.expires.toUTCString():"";try{u=JSON.stringify(i),/^[\{\[]/.test(u)&&(i=u)}catch(n){}i=e.write?e.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var a="";for(var f in o)o[f]&&(a+="; "+f,!0!==o[f]&&(a+="="+o[f]));return document.cookie=t+"="+i+a}t||(u={});for(var s=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,d=0;d<s.length;d++){var h=s[d].split("="),p=h.slice(1).join("=");'"'===p.charAt(0)&&(p=p.slice(1,-1));try{var v=h[0].replace(l,decodeURIComponent);if(p=e.read?e.read(p,v):e(p,v)||p.replace(l,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(n){}if(t===v){u=p;break}t||(u[v]=p)}catch(n){}}return u}}return r.set=r,r.get=function(n){return r.call(r,n)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,e){r(t,"",n(e,{expires:-1}))},r.withConverter=t,r}return t(function(){})})}),Id=Rd,Pd={get:Id.get,set:Id.set,remove:Id.remove},Md=Pd.get,Ld=Pd.set,qd=Pd.remove,Ud=function(n,t){t=t||{};for(var e={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},r=e.parser[t.strictMode?"strict":"loose"].exec(n),i={},o=14;o--;)i[e.key[o]]=r[o]||"";return i[e.q.name]={},i[e.key[12]].replace(e.q.parser,function(n,t,r){t&&(i[e.q.name][t]=r)}),i},Fd=function(n,t,e,r){t=t||"&",e=e||"=";var i={};if("string"!=typeof n||0===n.length)return i;var o=/\+/g;n=n.split(t);var u=1e3;r&&"number"==typeof r.maxKeys&&(u=r.maxKeys);var c=n.length;u>0&&c>u&&(c=u);for(var a=0;a<c;++a){var f,s,l,d,h=n[a].replace(o,"%20"),p=h.indexOf(e);p>=0?(f=h.substr(0,p),s=h.substr(p+1)):(f=h,s=""),l=decodeURIComponent(f),d=decodeURIComponent(s),Y(i,l)?Array.isArray(i[l])?i[l].push(d):i[l]=[i[l],d]:i[l]=d}return i},$d=function(n){switch(void 0===n?"undefined":Yc(n)){case"string":return n;case"boolean":return n?"true":"false";case"number":return isFinite(n)?n:"";default:return""}},Bd=function(n,t,e,r){return t=t||"&",e=e||"=",null===n&&(n=void 0),"object"===(void 0===n?"undefined":Yc(n))?Object.keys(n).map(function(r){var i=encodeURIComponent($d(r))+e;return Array.isArray(n[r])?n[r].map(function(n){return i+encodeURIComponent($d(n))}).join(t):i+encodeURIComponent($d(n[r]))}).join(t):r?encodeURIComponent($d(r))+e+encodeURIComponent($d(n)):""},Hd=J(function(n,t){t.decode=t.parse=Fd,t.encode=t.stringify=Bd}),Vd=(Hd.encode,Hd.stringify,Hd.decode,Hd.parse,Hd),zd={parse:function(n){return"string"==typeof n&&(n=n.trim().replace(/^[?#&]/,"")),Vd.parse(n)},stringify:function(n){return Vd.stringify(n)}},Zd=zd.parse,Gd=Ta.createElement("a"),Kd={},Jd=zd.stringify,Wd="AT:",Xd="1",Yd=[rl,il,ol,ul,Nl,cl,al,sl,kl,jl,dl,"defaultContentVisibleStyle",hl,pl,gl,yl,bl,xl,El,wl,Cl,Sl],Qd=J(function(n){!function(t){function e(){}function r(n,t){return function(){n.apply(t,arguments)}}function i(n){if("object"!==Yc(this))throw new TypeError("Promises must be constructed via new");if("function"!=typeof n)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(n,this)}function o(n,t){for(;3===n._state;)n=n._value;if(0===n._state)return void n._deferreds.push(t);n._handled=!0,i._immediateFn(function(){var e=1===n._state?t.onFulfilled:t.onRejected;if(null===e)return void(1===n._state?u:c)(t.promise,n._value);var r;try{r=e(n._value)}catch(n){return void c(t.promise,n)}u(t.promise,r)})}function u(n,t){try{if(t===n)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===(void 0===t?"undefined":Yc(t))||"function"==typeof t)){var e=t.then;if(t instanceof i)return n._state=3,n._value=t,void a(n);if("function"==typeof e)return void s(r(e,t),n)}n._state=1,n._value=t,a(n)}catch(t){c(n,t)}}function c(n,t){n._state=2,n._value=t,a(n)}function a(n){2===n._state&&0===n._deferreds.length&&i._immediateFn(function(){n._handled||i._unhandledRejectionFn(n._value)});for(var t=0,e=n._deferreds.length;t<e;t++)o(n,n._deferreds[t]);n._deferreds=null}function f(n,t,e){this.onFulfilled="function"==typeof n?n:null,this.onRejected="function"==typeof t?t:null,this.promise=e}function s(n,t){var e=!1;try{n(function(n){e||(e=!0,u(t,n))},function(n){e||(e=!0,c(t,n))})}catch(n){if(e)return;e=!0,c(t,n)}}var l=setTimeout;i.prototype['catch']=function(n){return this.then(null,n)},i.prototype.then=function(n,t){var r=new this.constructor(e);return o(this,new f(n,t,r)),r},i.all=function(n){var t=Array.prototype.slice.call(n);return new i(function(n,e){function r(o,u){try{if(u&&("object"===(void 0===u?"undefined":Yc(u))||"function"==typeof u)){var c=u.then;if("function"==typeof c)return void c.call(u,function(n){r(o,n)},e)}t[o]=u,0==--i&&n(t)}catch(n){e(n)}}if(0===t.length)return n([]);for(var i=t.length,o=0;o<t.length;o++)r(o,t[o])})},i.resolve=function(n){return n&&"object"===(void 0===n?"undefined":Yc(n))&&n.constructor===i?n:new i(function(t){t(n)})},i.reject=function(n){return new i(function(t,e){e(n)})},i.race=function(n){return new i(function(t,e){for(var r=0,i=n.length;r<i;r++)n[r].then(t,e)})},i._immediateFn="function"==typeof setImmediate&&function(n){setImmediate(n)}||function(n){l(n,0)},i._unhandledRejectionFn=function(n){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",n)},i._setImmediateFn=function(n){i._immediateFn=n},i._setUnhandledRejectionFn=function(n){i._unhandledRejectionFn=n},void 0!==n&&n.exports?n.exports=i:t.Promise||(t.Promise=i)}(_d)}),nh=window.Promise||Qd,th="Expected an array of promises",eh="Target is not Opted In",rh=F(),ih=/.*\.(\d+)_\d+/;!function(n,t){function e(n,e){var r=t.createEvent("CustomEvent");return e=e||{bubbles:!1,cancelable:!1,detail:void 0},r.initCustomEvent(n,e.bubbles,e.cancelable,e.detail),r}o(n.CustomEvent)||(e.prototype=n.Event.prototype,n.CustomEvent=e)}(Oa,Ta);var oh="at-library-loaded",uh="at-request-start",ch="at-request-succeeded",ah="at-request-failed",fh="at-content-rendering-start",sh="at-content-rendering-succeeded",lh="at-content-rendering-failed",dh="at-content-rendering-no-offers",hh="at-content-rendering-redirect",ph="Network request failed",vh="Request timed out",mh="URL is required",gh="GET",yh="POST",bh="method",xh="url",Eh="headers",wh="data",Ch="credentials",Sh="timeout",Oh="async",Th="mboxDisable",Ah="disabled",Nh=864e5,kh="3rd party cookies disabled",jh=/CLKTRK#(\S+)/,Dh=/CLKTRK#(\S+)\s/,_h="adobe_mc_sdid",Rh="mboxSession",Ih="true",Ph=function(){var n=Ta.createElement("canvas"),t=n.getContext("webgl")||n.getContext("experimental-webgl");if(a(t))return null;var e=t.getExtension("WEBGL_debug_renderer_info");if(a(e))return null;var r=t.getParameter(e.UNMASKED_RENDERER_WEBGL);return a(r)?null:r}(),Mh=F(),Lh=1,qh="Visitor",Uh="getInstance",Fh="isAllowed",$h="Disabled due to optout",Bh="getMarketingCloudVisitorID",Hh="getAudienceManagerBlob",Vh="getAnalyticsVisitorID",zh="getAudienceManagerLocationHint",Zh="isOptedOut",Gh="OptOut",Kh="MCAAMB",Jh="MCAAMLH",Wh="MCAID",Xh="MCMID",Yh="MCOPTOUT",Qh="mboxMCAVID",np="mboxAAMB",tp="mboxMCGLH",ep="mboxMCGVID",rp="mboxMCSDID",ip="getSupplementalDataID",op="getCustomerIDs",up="trackingServer",cp=up+"Secure",ap="vst.",fp=ap+"trk",sp=ap+"trks",lp="Visitor API requests timed out",dp="Visitor API requests error",hp={},pp="Data provider",vp="timed out",mp=2e3,gp="mboxedge",yp="<clientCode>",bp="/m2/"+yp+"/mbox/json",xp="//",Ep="JSON parser error",wp="[getOffer()]",Cp=function(n){var t=function(){function t(n){return null==n?String(n):J[W.call(n)]||"object"}function e(n){return"function"==t(n)}function r(n){return null!=n&&n==n.window}function i(n){return null!=n&&n.nodeType==n.DOCUMENT_NODE}function o(n){return"object"==t(n)}function u(n){return o(n)&&!r(n)&&Object.getPrototypeOf(n)==Object.prototype}function c(n){var t=!!n&&"length"in n&&n.length,e=O.type(n);return"function"!=e&&!r(n)&&("array"==e||0===t||"number"==typeof t&&t>0&&t-1 in n)}function a(n){return D.call(n,function(n){return null!=n})}function f(n){return n.length>0?O.fn.concat.apply([],n):n}function s(n){return n.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(n){return n in P?P[n]:P[n]=new RegExp("(^|\\s)"+n+"(\\s|$)")}function d(n,t){return"number"!=typeof t||M[s(n)]?t:t+"px"}function h(n){var t,e;return I[n]||(t=R.createElement(n),R.body.appendChild(t),e=getComputedStyle(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),"none"==e&&(e="block"),I[n]=e),I[n]}function p(n){return"children"in n?_.call(n.children):O.map(n.childNodes,function(n){if(1==n.nodeType)return n})}function v(n,t){var e,r=n?n.length:0;for(e=0;e<r;e++)this[e]=n[e];this.length=r,this.selector=t||""}function m(n,t,e){for(S in t)e&&(u(t[S])||nn(t[S]))?(u(t[S])&&!u(n[S])&&(n[S]={}),nn(t[S])&&!nn(n[S])&&(n[S]=[]),m(n[S],t[S],e)):t[S]!==C&&(n[S]=t[S])}function g(n,t){return null==t?O(n):O(n).filter(t)}function y(n,t,r,i){return e(t)?t.call(n,r,i):t}function b(n,t,e){null==e?n.removeAttribute(t):n.setAttribute(t,e)}function x(n,t){var e=n.className||"",r=e&&e.baseVal!==C;if(t===C)return r?e.baseVal:e;r?e.baseVal=t:n.className=t}function E(n){try{return n?"true"==n||"false"!=n&&("null"==n?null:+n+""==n?+n:/^[\[\{]/.test(n)?O.parseJSON(n):n):n}catch(t){return n}}function w(n,t){t(n);for(var e=0,r=n.childNodes.length;e<r;e++)w(n.childNodes[e],t)}var C,S,O,T,A,N,k=[],j=k.concat,D=k.filter,_=k.slice,R=n.document,I={},P={},M={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},L=/^\s*<(\w+|!)[^>]*>/,q=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,U=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,F=/^(?:body|html)$/i,$=/([A-Z])/g,B=["val","css","html","text","data","width","height","offset"],H=["after","prepend","before","append"],V=R.createElement("table"),z=R.createElement("tr"),Z={tr:R.createElement("tbody"),tbody:V,thead:V,tfoot:V,td:z,th:z,"*":R.createElement("div")},G=/complete|loaded|interactive/,K=/^[\w-]*$/,J={},W=J.toString,X={},Y=R.createElement("div"),Q={tabindex:"tabIndex",readonly:"readOnly",'for':"htmlFor",'class':"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},nn=Array.isArray||function(n){return n instanceof Array};return X.matches=function(n,t){if(!t||!n||1!==n.nodeType)return!1;var e=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.oMatchesSelector||n.matchesSelector;if(e)return e.call(n,t);var r,i=n.parentNode,o=!i;return o&&(i=Y).appendChild(n),r=~X.qsa(i,t).indexOf(n),o&&Y.removeChild(n),r},A=function(n){return n.replace(/-+(.)?/g,function(n,t){return t?t.toUpperCase():""})},N=function(n){return D.call(n,function(t,e){return n.indexOf(t)==e})},X.fragment=function(n,t,e){var r,i,o;return q.test(n)&&(r=O(R.createElement(RegExp.$1))),r||(n.replace&&(n=n.replace(U,"<$1></$2>")),t===C&&(t=L.test(n)&&RegExp.$1),t in Z||(t="*"),o=Z[t],o.innerHTML=""+n,r=O.each(_.call(o.childNodes),function(){o.removeChild(this)})),u(e)&&(i=O(r),O.each(e,function(n,t){B.indexOf(n)>-1?i[n](t):i.attr(n,t)})),r},X.Z=function(n,t){return new v(n,t)},X.isZ=function(n){return n instanceof X.Z},X.init=function(n,t){var r;if(!n)return X.Z();if("string"==typeof n)if(n=n.trim(),"<"==n[0]&&L.test(n))r=X.fragment(n,RegExp.$1,t),n=null;else{if(t!==C)return O(t).find(n);r=X.qsa(R,n)}else{if(e(n))return O(R).ready(n);if(X.isZ(n))return n;if(nn(n))r=a(n);else if(o(n))r=[n],n=null;else if(L.test(n))r=X.fragment(n.trim(),RegExp.$1,t),n=null;else{if(t!==C)return O(t).find(n);r=X.qsa(R,n)}}return X.Z(r,n)},O=function(n,t){return X.init(n,t)},O.extend=function(n){var t,e=_.call(arguments,1);return"boolean"==typeof n&&(t=n,n=e.shift()),e.forEach(function(e){m(n,e,t)}),n},X.qsa=function(n,t){var e,r="#"==t[0],i=!r&&"."==t[0],o=r||i?t.slice(1):t,u=K.test(o);return n.getElementById&&u&&r?(e=n.getElementById(o))?[e]:[]:1!==n.nodeType&&9!==n.nodeType&&11!==n.nodeType?[]:_.call(u&&!r&&n.getElementsByClassName?i?n.getElementsByClassName(o):n.getElementsByTagName(t):n.querySelectorAll(t))},O.contains=R.documentElement.contains?function(n,t){return n!==t&&n.contains(t)}:function(n,t){for(;t&&(t=t.parentNode);)if(t===n)return!0;return!1},O.type=t,O.isFunction=e,O.isWindow=r,O.isArray=nn,O.isPlainObject=u,O.isEmptyObject=function(n){var t;for(t in n)return!1;return!0},O.isNumeric=function(n){var t=Number(n),e=void 0===n?"undefined":Yc(n);return null!=n&&"boolean"!=e&&("string"!=e||n.length)&&!isNaN(t)&&isFinite(t)||!1},O.inArray=function(n,t,e){return k.indexOf.call(t,n,e)},O.camelCase=A,O.trim=function(n){return null==n?"":String.prototype.trim.call(n)},O.uuid=0,O.support={},O.expr={},O.noop=function(){},O.map=function(n,t){var e,r,i,o=[];if(c(n))for(r=0;r<n.length;r++)null!=(e=t(n[r],r))&&o.push(e);else for(i in n)null!=(e=t(n[i],i))&&o.push(e);return f(o)},O.each=function(n,t){var e,r;if(c(n)){for(e=0;e<n.length;e++)if(!1===t.call(n[e],e,n[e]))return n}else for(r in n)if(!1===t.call(n[r],r,n[r]))return n;return n},O.grep=function(n,t){return D.call(n,t)},n.JSON&&(O.parseJSON=JSON.parse),O.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(n,t){J["[object "+t+"]"]=t.toLowerCase()}),O.fn={constructor:X.Z,length:0,forEach:k.forEach,reduce:k.reduce,push:k.push,sort:k.sort,splice:k.splice,indexOf:k.indexOf,concat:function(){var n,t,e=[];for(n=0;n<arguments.length;n++)t=arguments[n],e[n]=X.isZ(t)?t.toArray():t;return j.apply(X.isZ(this)?this.toArray():this,e)},map:function(n){return O(O.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return O(_.apply(this,arguments))},ready:function(n){return G.test(R.readyState)&&R.body?n(O):R.addEventListener("DOMContentLoaded",function(){n(O)},!1),this},get:function(n){return n===C?_.call(this):this[n>=0?n:n+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){for(var t,e=this.length,r=0;r<e&&(t=this[r],!1!==n.call(t,r,t));)r++;return this},filter:function(n){return e(n)?this.not(this.not(n)):O(D.call(this,function(t){return X.matches(t,n)}))},add:function(n,t){return O(N(this.concat(O(n,t))))},is:function(n){return this.length>0&&X.matches(this[0],n)},not:function(n){var t=[];if(e(n)&&n.call!==C)this.each(function(e){n.call(this,e)||t.push(this)});else{var r="string"==typeof n?this.filter(n):c(n)&&e(n.item)?_.call(n):O(n);this.forEach(function(n){r.indexOf(n)<0&&t.push(n)})}return O(t)},has:function(n){return this.filter(function(){return o(n)?O.contains(this,n):O(this).find(n).size()})},eq:function(n){return-1===n?this.slice(n):this.slice(n,+n+1)},first:function(){var n=this[0];return n&&!o(n)?n:O(n)},last:function(){var n=this[this.length-1];return n&&!o(n)?n:O(n)},find:function(n){var t=this;return n?"object"==(void 0===n?"undefined":Yc(n))?O(n).filter(function(){var n=this;return k.some.call(t,function(t){return O.contains(t,n)})}):1==this.length?O(X.qsa(this[0],n)):this.map(function(){return X.qsa(this,n)}):O()},closest:function(n,t){var e=[],r="object"==(void 0===n?"undefined":Yc(n))&&O(n);return this.each(function(o,u){for(;u&&!(r?r.indexOf(u)>=0:X.matches(u,n));)u=u!==t&&!i(u)&&u.parentNode;u&&e.indexOf(u)<0&&e.push(u)}),O(e)},parents:function(n){for(var t=[],e=this;e.length>0;)e=O.map(e,function(n){if((n=n.parentNode)&&!i(n)&&t.indexOf(n)<0)return t.push(n),n});return g(t,n)},parent:function(n){return g(N(this.pluck("parentNode")),n)},children:function(n){return g(this.map(function(){return p(this)}),n)},contents:function(){return this.map(function(){return this.contentDocument||_.call(this.childNodes)})},siblings:function(n){return g(this.map(function(n,t){return D.call(p(t.parentNode),function(n){return n!==t})}),n)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(n){return O.map(this,function(t){return t[n]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(n){return this.before(n).remove()},wrap:function(n){var t=e(n);if(this[0]&&!t)var r=O(n).get(0),i=r.parentNode||this.length>1;return this.each(function(e){O(this).wrapAll(t?n.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(n){if(this[0]){O(this[0]).before(n=O(n));for(var t;(t=n.children()).length;)n=t.first();O(n).append(this)}return this},wrapInner:function(n){var t=e(n);return this.each(function(e){var r=O(this),i=r.contents(),o=t?n.call(this,e):n;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){O(this).replaceWith(O(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(n){return this.each(function(){var t=O(this);(n===C?"none"==t.css("display"):n)?t.show():t.hide()})},prev:function(n){return O(this.pluck("previousElementSibling")).filter(n||"*")},next:function(n){return O(this.pluck("nextElementSibling")).filter(n||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;O(this).empty().append(y(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=y(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this.pluck("textContent").join(""):null},attr:function(n,t){var e;return"string"!=typeof n||1 in arguments?this.each(function(e){if(1===this.nodeType)if(o(n))for(S in n)b(this,S,n[S]);else b(this,n,y(this,t,e,this.getAttribute(n)))}):0 in this&&1==this[0].nodeType&&null!=(e=this[0].getAttribute(n))?e:C},removeAttr:function(n){return this.each(function(){1===this.nodeType&&n.split(" ").forEach(function(n){b(this,n)},this)})},prop:function(n,t){return n=Q[n]||n,1 in arguments?this.each(function(e){this[n]=y(this,t,e,this[n])}):this[0]&&this[0][n]},removeProp:function(n){return n=Q[n]||n,this.each(function(){delete this[n]})},data:function(n,t){var e="data-"+n.replace($,"-$1").toLowerCase(),r=1 in arguments?this.attr(e,t):this.attr(e);return null!==r?E(r):C},val:function(n){return 0 in arguments?(null==n&&(n=""),this.each(function(t){this.value=y(this,n,t,this.value)})):this[0]&&(this[0].multiple?O(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(n){var e=O(this),r=y(this,t,n,e.offset()),i=e.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==e.css("position")&&(o.position="relative"),e.css(o)});if(!this.length)return null;if(R.documentElement!==this[0]&&!O.contains(R.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+n.pageXOffset,top:e.top+n.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(n,e){if(arguments.length<2){var r=this[0];if("string"==typeof n){if(!r)return;return r.style[A(n)]||getComputedStyle(r,"").getPropertyValue(n)}if(nn(n)){if(!r)return;var i={},o=getComputedStyle(r,"");return O.each(n,function(n,t){i[t]=r.style[A(t)]||o.getPropertyValue(t)}),i}}var u="";if("string"==t(n))e||0===e?u=s(n)+":"+d(n,e):this.each(function(){this.style.removeProperty(s(n))});else for(S in n)n[S]||0===n[S]?u+=s(S)+":"+d(S,n[S])+";":this.each(function(){this.style.removeProperty(s(S))});return this.each(function(){this.style.cssText+=";"+u})},index:function(n){return n?this.indexOf(O(n)[0]):this.parent().children().indexOf(this[0])},hasClass:function(n){return!!n&&k.some.call(this,function(n){return this.test(x(n))},l(n))},addClass:function(n){return n?this.each(function(t){if("className"in this){T=[];var e=x(this);y(this,n,t,e).split(/\s+/g).forEach(function(n){O(this).hasClass(n)||T.push(n)},this),T.length&&x(this,e+(e?" ":"")+T.join(" "))}}):this},removeClass:function(n){return this.each(function(t){if("className"in this){if(n===C)return x(this,"");T=x(this),y(this,n,t,T).split(/\s+/g).forEach(function(n){T=T.replace(l(n)," ")}),x(this,T.trim())}})},toggleClass:function(n,t){return n?this.each(function(e){var r=O(this);y(this,n,e,x(this)).split(/\s+/g).forEach(function(n){(t===C?!r.hasClass(n):t)?r.addClass(n):r.removeClass(n)})}):this},scrollTop:function(n){if(this.length){var t="scrollTop"in this[0];return n===C?t?this[0].scrollTop:this[0].pageYOffset:this.each(t?function(){this.scrollTop=n}:function(){this.scrollTo(this.scrollX,n)})}},scrollLeft:function(n){if(this.length){var t="scrollLeft"in this[0];return n===C?t?this[0].scrollLeft:this[0].pageXOffset:this.each(t?function(){this.scrollLeft=n}:function(){this.scrollTo(n,this.scrollY)})}},position:function(){if(this.length){var n=this[0],t=this.offsetParent(),e=this.offset(),r=F.test(t[0].nodeName)?{top:0,left:0}:t.offset();return e.top-=parseFloat(O(n).css("margin-top"))||0,e.left-=parseFloat(O(n).css("margin-left"))||0,r.top+=parseFloat(O(t[0]).css("border-top-width"))||0,r.left+=parseFloat(O(t[0]).css("border-left-width"))||0,{top:e.top-r.top,left:e.left-r.left}}},offsetParent:function(){return this.map(function(){for(var n=this.offsetParent||R.body;n&&!F.test(n.nodeName)&&"static"==O(n).css("position");)n=n.offsetParent;return n})}},O.fn.detach=O.fn.remove,["width","height"].forEach(function(n){var t=n.replace(/./,function(n){return n[0].toUpperCase()});O.fn[n]=function(e){var o,u=this[0];return e===C?r(u)?u["inner"+t]:i(u)?u.documentElement["scroll"+t]:(o=this.offset())&&o[n]:this.each(function(t){u=O(this),u.css(n,y(this,e,t,u[n]()))})}}),H.forEach(function(e,r){var i=r%2;O.fn[e]=function(){var e,o,u=O.map(arguments,function(n){var r=[];return e=t(n),"array"==e?(n.forEach(function(n){return n.nodeType!==C?r.push(n):O.zepto.isZ(n)?r=r.concat(n.get()):void(r=r.concat(X.fragment(n)))}),r):"object"==e||null==n?n:X.fragment(n)}),c=this.length>1;return u.length<1?this:this.each(function(t,e){o=i?e:e.parentNode,e=0==r?e.nextSibling:1==r?e.firstChild:2==r?e:null;var a=O.contains(R.documentElement,o),f=/^(text|application)\/(javascript|ecmascript)$/;u.forEach(function(t){if(c)t=t.cloneNode(!0);else if(!o)return O(t).remove();o.insertBefore(t,e),a&&w(t,function(t){if(null!=t.nodeName&&"SCRIPT"===t.nodeName.toUpperCase()&&(!t.type||f.test(t.type.toLowerCase()))&&!t.src){var e=t.ownerDocument?t.ownerDocument.defaultView:n;e.eval.call(e,t.innerHTML)}})})})},O.fn[i?e+"To":"insert"+(r?"Before":"After")]=function(n){return O(n)[e](this),this}}),X.Z.prototype=v.prototype=O.fn,X.uniq=N,X.deserializeValue=E,O.zepto=X,O}();return function(t){function e(n){return n._zid||(n._zid=h++)}function r(n,t,r,u){if(t=i(t),t.ns)var c=o(t.ns);return(g[e(n)]||[]).filter(function(n){return n&&(!t.e||n.e==t.e)&&(!t.ns||c.test(n.ns))&&(!r||e(n.fn)===e(r))&&(!u||n.sel==u)})}function i(n){var t=(""+n).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function o(n){return new RegExp("(?:^| )"+n.replace(" "," .* ?")+"(?: |$)")}function u(n,t){return n.del&&!b&&n.e in x||!!t}function c(n){return E[n]||b&&x[n]||n}function a(n,r,o,a,f,l,h){var p=e(n),v=g[p]||(g[p]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(o);var r=i(e);r.fn=o,r.sel=f,r.e in E&&(o=function(n){var e=n.relatedTarget;if(!e||e!==this&&!t.contains(this,e))return r.fn.apply(this,arguments)}),r.del=l;var p=l||o;r.proxy=function(t){if(t=s(t),!t.isImmediatePropagationStopped()){t.data=a;var e=p.apply(n,t._args==d?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},r.i=v.length,v.push(r),"addEventListener"in n&&n.addEventListener(c(r.e),r.proxy,u(r,h))})}function f(n,t,i,o,a){var f=e(n);(t||"").split(/\s/).forEach(function(t){r(n,t,i,o).forEach(function(t){delete g[f][t.i],"removeEventListener"in n&&n.removeEventListener(c(t.e),t.proxy,u(t,a))})})}function s(n,e){if(e||!n.isDefaultPrevented){e||(e=n),t.each(O,function(t,r){var i=e[t];n[t]=function(){return this[r]=w,i&&i.apply(e,arguments)},n[r]=C});try{n.timeStamp||(n.timeStamp=(new Date).getTime())}catch(n){}(e.defaultPrevented!==d?e.defaultPrevented:"returnValue"in e?!1===e.returnValue:e.getPreventDefault&&e.getPreventDefault())&&(n.isDefaultPrevented=w)}return n}function l(n){var t,e={originalEvent:n};for(t in n)S.test(t)||n[t]===d||(e[t]=n[t]);return s(e,n)}
var d,h=1,p=Array.prototype.slice,v=t.isFunction,m=function(n){return"string"==typeof n},g={},y={},b="onfocusin"in n,x={focus:"focusin",blur:"focusout"},E={mouseenter:"mouseover",mouseleave:"mouseout"};y.click=y.mousedown=y.mouseup=y.mousemove="MouseEvents",t.event={add:a,remove:f},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(v(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(m(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(n,t,e){return this.on(n,t,e)},t.fn.unbind=function(n,t){return this.off(n,t)},t.fn.one=function(n,t,e,r){return this.on(n,t,e,r,1)};var w=function(){return!0},C=function(){return!1},S=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,O={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(n,t,e){return this.on(t,n,e)},t.fn.undelegate=function(n,t,e){return this.off(t,n,e)},t.fn.live=function(n,e){return t(document.body).delegate(this.selector,n,e),this},t.fn.die=function(n,e){return t(document.body).undelegate(this.selector,n,e),this},t.fn.on=function(n,e,r,i,o){var u,c,s=this;return n&&!m(n)?(t.each(n,function(n,t){s.on(n,e,r,t,o)}),s):(m(e)||v(i)||!1===i||(i=r,r=e,e=d),i!==d&&!1!==r||(i=r,r=d),!1===i&&(i=C),s.each(function(s,d){o&&(u=function(n){return f(d,n.type,i),i.apply(this,arguments)}),e&&(c=function(n){var r,o=t(n.target).closest(e,d).get(0);if(o&&o!==d)return r=t.extend(l(n),{currentTarget:o,liveFired:d}),(u||i).apply(o,[r].concat(p.call(arguments,1)))}),a(d,n,i,r,e,c||u)}))},t.fn.off=function(n,e,r){var i=this;return n&&!m(n)?(t.each(n,function(n,t){i.off(n,e,t)}),i):(m(e)||v(r)||!1===r||(r=e,e=d),!1===r&&(r=C),i.each(function(){f(this,n,r,e)}))},t.fn.trigger=function(n,e){return n=m(n)||t.isPlainObject(n)?t.Event(n):s(n),n._args=e,this.each(function(){n.type in x&&"function"==typeof this[n.type]?this[n.type]():"dispatchEvent"in this?this.dispatchEvent(n):t(this).triggerHandler(n,e)})},t.fn.triggerHandler=function(n,e){var i,o;return this.each(function(u,c){i=l(m(n)?t.Event(n):n),i._args=e,i.target=c,t.each(r(c,n.type||n),function(n,t){if(o=t.proxy(i),i.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){t.fn[n]=function(t){return 0 in arguments?this.bind(n,t):this.trigger(n)}}),t.Event=function(n,t){m(n)||(t=n,n=t.type);var e=document.createEvent(y[n]||"Events"),r=!0;if(t)for(var i in t)"bubbles"==i?r=!!t[i]:e[i]=t[i];return e.initEvent(n,r,!0),s(e)}}(t),function(){try{getComputedStyle(void 0)}catch(e){var t=getComputedStyle;n.getComputedStyle=function(n,e){try{return t(n,e)}catch(n){return null}}}}(),function(n){var t=n.zepto,e=t.qsa,r=/^\s*>/,i="Zepto"+ +new Date;t.qsa=function(t,o){var u,c,a=o;try{a?r.test(a)&&(c=n(t).addClass(i),a="."+i+" "+a):a="*",u=e(t,a)}catch(n){throw n}finally{c&&c.removeClass(i)}return u}}(t),t}(window),Sp=":eq(",Op=")",Tp=Sp.length,Ap=/((\.|#)(-)?\d{1})/g,Np="[trackEvent()]",kp="navigator",jp="sendBeacon",Dp="sendBeacon() request failed",_p=nh,Rp=function(n,t){return new _p(function(e,r){"onload"in t?(t.onload=function(){e(t)},t.onerror=function(){r(new Error("Failed to load script "+n))}):"readyState"in t&&(t.onreadystatechange=function(){var n=t.readyState;"loaded"!==n&&"complete"!==n||(t.onreadystatechange=null,e(t))})})},Ip=function(n){var t=document.createElement("script");t.src=n,t.async=!0;var e=Rp(n,t);return document.getElementsByTagName("head")[0].appendChild(t),e},Pp="clickTrackId",Mp="mboxTarget",Lp="script,link,"+qf;Wo.prototype={on:function(n,t,e){var r=this.e||(this.e={});return(r[n]||(r[n]=[])).push({fn:t,ctx:e}),this},once:function(n,t,e){function r(){i.off(n,r),t.apply(e,arguments)}var i=this;return r._=t,this.on(n,r,e)},emit:function(n){var t=[].slice.call(arguments,1),e=((this.e||(this.e={}))[n]||[]).slice(),r=0,i=e.length;for(r;r<i;r++)e[r].fn.apply(e[r].ctx,t);return this},off:function(n,t){var e=this.e||(this.e={}),r=e[n],i=[];if(r&&t)for(var o=0,u=r.length;o<u;o++)r[o].fn!==t&&r[o].fn._!==t&&i.push(r[o]);return i.length?e[n]=i:delete e[n],this}};var qp=Wo,Up=function(){return new qp}(),Fp="at-",$p="at-body-style",Bp="#"+$p,Hp="at-makers-style",Vp="m",zp="f",Zp="p",Gp={},Kp="l",Jp={childList:!0,subtree:!0},Wp=Oa.MutationObserver,Xp={},Yp=null,Qp=1e3,nv="visibilityState",tv="visible",ev={},rv=function(n){return n[Aa]===lf||n[Aa]===df},iv="[applyOffer()]",ov=function(n){return!a(n[Va])},uv="adobe",cv="target",av="ext",fv=J(function(n,t){!function(e,r){"function"==typeof qc&&qc.amd?qc([],r):"object"===(void 0===t?"undefined":Yc(t))?n.exports=r():e.currentExecutingScript=r()}(_d||window,function(){function n(n,t){var e,r=null;if(t=t||f,"string"==typeof n&&n)for(e=t.length;e--;)if(t[e].src===n){r=t[e];break}return r}function t(n){var t,e,r=null;for(n=n||f,t=0,e=n.length;t<e;t++)if(!n[t].hasAttribute("src")){if(r){r=null;break}r=n[t]}return r}function e(n,t){var r,i,o=null,u="number"==typeof t;return t=u?Math.round(t):0,"string"==typeof n&&n&&(u?r=n.match(/(data:text\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/):(r=n.match(/^(?:|[^:@]*@|.+\)@(?=data:text\/javascript|blob|http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)(data:text\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/))&&r[1]||(r=n.match(/\)@(data:text\/javascript(?:;[^,]+)?,.+?|(?:|blob:)(?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/)),r&&r[1]&&(t>0?(i=n.slice(n.indexOf(r[0])+r[0].length),o=e(i,t-1)):o=r[1])),o}function r(){return null}function i(){return null}function o(){if(0===f.length)return null;var r,i,c,v,m,g=[],y=o.skipStackDepth||1;for(r=0;r<f.length;r++)l&&s?u.test(f[r].readyState)&&g.push(f[r]):g.push(f[r]);if(i=new Error,h&&(c=i.stack),!c&&p)try{throw i}catch(n){c=n.stack}if(c&&(v=e(c,y),!(m=n(v,g))&&a&&v===a&&(m=t(g))),m||1===g.length&&(m=g[0]),m||d&&(m=document.currentScript),!m&&l&&s)for(r=g.length;r--;)if("interactive"===g[r].readyState){m=g[r];break}return m||(m=g[g.length-1]||null),m}var u=/^(interactive|loaded|complete)$/,c=window.location?window.location.href:null,a=c?c.replace(/#.*$/,"").replace(/\?.*$/,"")||null:null,f=document.getElementsByTagName("script"),s="readyState"in(f[0]||document.createElement("script")),l=!window.opera||"[object Opera]"!==window.opera.toString(),d="currentScript"in document;"stackTraceLimit"in Error&&Error.stackTraceLimit!==1/0&&(Error.stackTraceLimit=1/0);var h=!1,p=!1;!function(){try{var n=new Error;throw h="string"==typeof n.stack&&!!n.stack,n}catch(n){p="string"==typeof n.stack&&!!n.stack}}(),o.skipStackDepth=1;var v=o;return v.near=o,v.far=r,v.origin=i,v})}),sv="[mboxCreate()]",lv="[mboxDefine()]",dv="[mboxUpdate()]",hv="Unable to load target-vec.js",pv="Loading target-vec.js",vv="_AT",mv="clickHandlerForExperienceEditor",gv="[global mbox]",yv="auto-create disabled";return{init:Lc}}(),window.adobe.target.init(window,document,{"clientCode":"prisacom","imsOrgId":"2387401053DB208C0A490D4C@AdobeOrg","serverDomain":"prisacom.tt.omtrdc.net","crossDomain":"disabled","timeout":5000,"globalMboxName":"target-global-mbox","globalMboxAutoCreate":true,"version":"1.7.1","defaultContentHiddenStyle":"visibility:hidden;","defaultContentVisibleStyle":"visibility:visible;","bodyHiddenStyle":"body{opacity:0!important}","bodyHidingEnabled":true,"deviceIdLifetime":63244800000,"sessionIdLifetime":1860000,"selectorsPollingTimeout":5000,"visitorApiTimeout":2000,"overrideMboxEdgeServer":true,"overrideMboxEdgeServerTimeout":1860000,"optoutEnabled":false,"optinEnabled":false,"secureOnly":false,"supplementalDataIdParamTimeout":30,"authoringScriptUrl":"//cdn.tt.omtrdc.net/cdn/target-vec.js","urlSizeLimit":2048});
}


function PNCHVideoStrategy(t){this.player_=t,this.ready_=!1,this.currentAdPosition_=void 0,this.videoPlayed_=!1,this.viewStartTime_=(new Date).getTime(),this.videoStartTime_=void 0,this.subscribeEvents_()}window._cbv_strategies=window._cbv_strategies||[],window._cbv_strategies.push(PNCHVideoStrategy),PNCHVideoStrategy.ContentType={AD:"ad",CONTENT:"ct"},PNCHVideoStrategy.AdPosition={PREROLL:"a1",MIDROLL:"a2",POSTROLL:"a3",OVERLAY:"a4",SPECIAL:"a5"},PNCHVideoStrategy.VideoState={UNPLAYED:"s1",PLAYED:"s2",STOPPED:"s3",COMPLETED:"s4"},PNCHVideoStrategy.prototype.subscribeEvents_=function(){2<this.player_.readyState&&(this.ready_=!0),0<this.player_.currentTime&&!this.player_.paused&&!this.player_.ended&&this.onVideoPlay_(),this.player_.addEventListener("canplay",this.bind_(this.onPlaybackReady_,this)),this.player_.addEventListener("playing",this.bind_(this.onVideoPlay_,this))},PNCHVideoStrategy.prototype.bind_=function(t,e){return function(){t.call(e)}},PNCHVideoStrategy.prototype.onPlaybackReady_=function(){this.ready_=!0},PNCHVideoStrategy.prototype.onVideoPlay_=function(){this.videoStartTime_=(new Date).getTime(),this.videoPlayed_=!0},PNCHVideoStrategy.prototype.isReady=function(){return this.ready_},PNCHVideoStrategy.prototype.getTitle=function(){return this.player_.attributes.title&&this.player_.attributes.title.value||""},PNCHVideoStrategy.prototype.getVideoPath=function(){if(void 0!==this.player_.idMedia)var t=this.player_.idMedia;else t=this.player_.currentSrc;return t||""},PNCHVideoStrategy.prototype.getContentType=function(){return PNCHVideoStrategy.ContentType.CONTENT},PNCHVideoStrategy.prototype.getAdPosition=function(){return""},PNCHVideoStrategy.prototype.getTotalDuration=function(){var t=this.player_.duration;return this.getTimeInSeconds_(t)},PNCHVideoStrategy.prototype.getState=function(){return this.videoPlayed_?this.player_.ended?PNCHVideoStrategy.VideoState.COMPLETED:this.player_.paused?PNCHVideoStrategy.VideoState.STOPPED:PNCHVideoStrategy.VideoState.PLAYED:PNCHVideoStrategy.VideoState.UNPLAYED},PNCHVideoStrategy.prototype.timeElapsed_=function(t){return void 0===t?0:(new Date).getTime()-t},PNCHVideoStrategy.prototype.onEmbedCodeChanged_=function(){this.currentAdPosition_=void 0,this.adStartTime_=void 0},PNCHVideoStrategy.prototype.getCurrentPlayTime=function(){var t=this.player_.currentTime;return this.getTimeInSeconds_(t)},PNCHVideoStrategy.prototype.getBitrate=function(){return-1},PNCHVideoStrategy.prototype.getThumbnailPath=function(){return this.player_.attributes.poster&&this.player_.attributes.poster.value||""},PNCHVideoStrategy.prototype.getPlayerType=function(){},PNCHVideoStrategy.prototype.getViewStartTime=function(){return isNaN(this.viewStartTime_)?0:this.timeElapsed_(this.viewStartTime_)},PNCHVideoStrategy.prototype.getViewPlayTime=function(){return this.videoPlayed_?this.timeElapsed_(this.viewStartTime_):-1},PNCHVideoStrategy.prototype.getViewAdPlayTime=function(){return-1},PNCHVideoStrategy.prototype.getTimeInSeconds_=function(t){return-1===t||isNaN(t)?-1:1e3*t},PNCHVideoStrategy.verify=function(t){return t instanceof HTMLElement&&"VIDEO"===t.nodeName&&void 0!==t.idMedia};

var DTM = {
    version: "ep-5.9",
    initialized: true,
    dateInit: (new Date()),
	toolsInitialized: false,
	allowAll: true,
	PLATFORM: {
		AMP: "amp",
		FBIA: "fbia",
		MOBILEWEB: "mobileWeb",
		WEB: "web",
		WIDGET: "widget"
	},
	TRACK_DELAY: "delay",
	TRACK_TOP: "top",
	TRACK_NO: "notrack",
	TRACK_CUSTOM: "custom",
	TOOL_DISABLED: 0,
	TOOL_ENABLED: 1,
	TOOL_ONLYEVENTS: 2,
	TIME_DELAY: 600,
	delayCompleted: false,
    config: typeof DTM != "undefined" && typeof DTM.config != "undefined" ? DTM.config : {},
	pageDataLayer: typeof DTM != "undefined" && typeof DTM.pageDataLayer ? DTM.pageDataLayer : {},
	notify: function(message, eventID, tool){

		if(typeof eventID != "undefined" && typeof tool != "undefined"){
			if(typeof window.digitalData.event[eventID] != "undefined"){
				var ef = window.digitalData.event[eventID].eventInfo.effect;
				window.digitalData.event[eventID].eventInfo.effect = (ef == "") ? tool : (ef + "," + tool);
				message = "Event <" + window.digitalData.event[eventID].eventInfo.eventName + "> tracked in tool <" + tool + ">";
			}
		}
		
		if(!_satellite.settings.notifications)
			return;

		try{
			var time = ((new Date().getTime()) - DTM.dateInit.getTime());
			message = "DTM: " + message;
			time = time / 1000;
			time = time.toFixed(2);
			console.info(message + " (" + time + "s)");
		}catch(e){
			console.info("Error DTM.notify");
		}
	},
	init: function(){
		this.notify("Version <" + this.version + "> fired " + (_satellite.settings.isStaging ? "(staging)" : ""), true);
		this.notify("Page <" + window.location.href + ">");
		this.dataLayer.init();
		this.tools.init();
		_satellite.pageBottom();
		this.trackPV();
		this.events.init();
	},
	dataLayer: {
		digitalData: {},
		regExp:{
			blogs: /http.?:\/\/([^\/]+)\/([^\/]+)\/(.*)/i,
			diario: /http.?:\/\/([^\/]*)\/diario\/(\d+)\/(\d+)\/(\d+)\/([^\/]*)\/?/i,
			elecciones: /http.?:\/\/([^\/]*)\/elecciones\/(\d{4})\/([^\/]*)\/.*/i,
			eleccionesHome: /http.?:\/\/([^\/]*)\/elecciones\/(.*?).html/i,
			eleccionesPortadas: /http.?:\/\/([^\/]*)\/elecciones\/(\d{4})\//i,
			especiales: /http.?:\/\/[^\/]*\/([^\/]*)\/(\d{4})\/([^\/]*)\//i,
			especialesPortadas: /http.?:\/\/([^\/]*)\/([^\/]*)\/([^\/]*)\//i,
			moviles: /(http.?:\/\/[^\/]*)\/m\/(.*)/i,
			noticia: /http.?:\/\/([^\/]*)\/([^\/]*)\/(\d+)\/(\d+)\/(\d+)\/([^\/]*)\/(.*)\.html/i,
			portada: /http.?:\/\/([^\/]*)\/?(.*)/i,
			portadilla: /http.?:\/\/([^\/]*)\/([^\/]*)\/(.*)/i,
			seccion: /http.?:\/\/([^\.]*)\./i,
			seccionVirtual: /http.?:\/\/([^\/]*).elpais.com\/seccion\/([^\/]*)/i,
			sorteos: /([^\/]*)\/?/,
			tag: /([^\/]+)\/([^\/]+)\/?.*/i,
			tagRamas: /^([^\/]+)\/([^\/]+)\/.*/i,
			result_re: undefined,
			result_re2: undefined,
			result_re3: undefined,
			result_re4: undefined,
			result_re5: undefined,
			result_re6: undefined,
			result_re7: undefined
		},
		vars: {
			articleID: "",
			author: [],
			businessUnit: "noticias",
			canonicalURL: "",
			cms: "",
			creationDate: "",
			domain: "elpais.com",
			direccion: document.location.href.replace(/[\?#].*?$/g, ""),
			destinationURL: document.location.href,
			edition: typeof window.PEPedition != "undefined" ? window.PEPedition.toLowerCase() : "españa",
			geoRegion: "españa",
			language: document.documentElement.lang ? document.documentElement.lang : "es",
			org: "prisa",
			pageName: "elpaiscom" + document.location.href.replace(/[\?#].*?$/g, "").replace(/http.?:\/\/[^\/]*/, ""),
			pageTitle: document.getElementsByTagName('title')[0] ? document.getElementsByTagName('title')[0].innerHTML.replace(/'|"|\|/g, "").toLowerCase() : "",
			pageType: "",
			paywall: {
				type: "free",
				status: ""
			},
			platform: "web",
			protocol: document.location.protocol == 'https:' ? "1" : "0",
			publisher: "el pais",
			referringURL: document.referrer,
			search: "0",
			search_keyword: "",
			search_results: "0",
			seccion: "channel",
			server: window.location.host,
			siteID: "elpaiscom",
			subseccion: "seccion",
			subsubseccion: "",
			sysEnv: "web",
			test: "",
			thematic: "informacion",
			trackingCodes: ['id_externo_display', 'id_externo_sem', 'id_externo_nwl', 'id_externo_promo', 'id_externo_rsoc','id_externo_ref', 'id_externo_portada', 'id_externo_noti', 'sdi', 'sse', 'sma', 'prm', 'sap', 'ssm', 'afl', 'agr', 'int', 'noti', 'idexterno'],
			seccion_omniture: "seccion",
			subseccion_omniture: "subseccion",
			tags: []
		},
		init: function(){
			this.multidistribution.init();
			
			//Autocalculamos los valores
			this.generateDL();
			
			//Si hay Data Layer en página, tiene prioridad, pisa los valores calculados
			if(typeof DTM.pageDataLayer != "undefined")
				this.pageDL();
					
			//Creación del dataLayer
			window.digitalData = {
				page: {
					pageInfo: {
						adblocker: "not-set",
						articleID: this.vars.articleID,
						author: this.vars.author != 0 ? this.vars.author : this.arrayAuthors(),
						brandedContent: "0",
						businessUnit: this.vars.businessUnit,
						campaign: "",
						canonicalURL: this.vars.canonicalURL == "" ? this.getCanonical() : this.vars.canonicalURL,
						clickOrigin: DTM.utils.getQueryParam("rel"),
						cms: this.vars.cms == "" ? this.getCMS(this.vars.server) : this.vars.cms,
						creationDate: this.vars.creationDate,
						date: {
							day: DTM.utils.formatDate(DTM.dateInit.getDate()),
							dstEnd: "12/31/" + DTM.dateInit.getFullYear(),
							dstStart: "1/1/" + DTM.dateInit.getFullYear(),
							fullYear: DTM.dateInit.getFullYear(),
							gmt: (-(DTM.dateInit.getTimezoneOffset() / 60) - 1) >= 0 ? "+" + (-(DTM.dateInit.getTimezoneOffset() / 60) - 1).toString() : (-(DTM.dateInit.getTimezoneOffset() / 60) - 1),
							hours: DTM.utils.formatDate(DTM.dateInit.getHours()),
							minutes: DTM.utils.formatDate(DTM.dateInit.getMinutes()),
							month: DTM.utils.formatDate(DTM.dateInit.getMonth() + 1),
							seconds: DTM.utils.formatDate(DTM.dateInit.getSeconds()),
							year: DTM.dateInit.getFullYear()
						},
						destinationURL: this.vars.destinationURL,
						domain: this.vars.domain,
						edition: this.vars.edition,
						geoRegion: this.vars.geoRegion,
						language: this.vars.language,
						onsiteSearch: "",
						onsiteSearchTerm: "",
						onsiteSearchResults: "",
						org: this.vars.org,
						pageID: document.location.href,
						pageName: this.vars.pageName,
						pageTitle: this.vars.pageTitle,
						platform: this.vars.platform,
						publisher: this.vars.publisher,
						referringURL: this.vars.referringURL,
						server: this.vars.server,
						siteID: this.vars.siteID,
						ssl: this.vars.protocol,
						sysEnv: this.vars.sysEnv,
						tags: this.vars.tags.length != 0 ? this.vars.tags : this.arrayTags(),
						test: this.vars.test,
						thematic: this.vars.thematic,
						urlParams: this.getUrlParams()
					},
					category: {
						pageType: this.vars.pageType,
						primaryCategory: this.vars.seccion,
						subCategory1: this.vars.subseccion,
						subCategory2: this.vars.subsubseccion
					}
				},
				user: {
					profileID: "not-set",
					registeredUser: "not-set",
					userName: "",
					country: ""
				},
				paywall: {
					type: this.vars.paywall.type,
					status: this.vars.paywall.status
				},
				event: []
			};

			this.adblocker();
			this.internalSearch();
			this.getUserInfo();
			this.setParam("page.pageInfo.campaign", this.getCampaign());
			this.setParam("page.pageInfo.brandedContent", this.isBrandedContent());
			DTM.notify("Data Layer generated");
		},
		pageDL: function(){
			if(typeof DTM.pageDataLayer == "undefined")
				return;
			//Recogemos el Data Layer desde página.
			var pageDataLayer = DTM.pageDataLayer;
			//Recuperamos valores
			this.vars.seccion = this.dataLayerParamExists("primaryCategory") ? pageDataLayer.primaryCategory : this.vars.seccion;
			this.vars.subseccion = this.dataLayerParamExists("subCategory1") ? pageDataLayer.subCategory1 : this.vars.subseccion;
			this.vars.subsubseccion = this.dataLayerParamExists("subCategory2") ? pageDataLayer.subCategory2 : this.vars.subsubseccion;
			this.vars.pageType = this.dataLayerParamExists("pageType") ? pageDataLayer.pageType : this.vars.pageType;
			this.vars.language = this.dataLayerParamExists("language") ? pageDataLayer.language : this.vars.language;
			this.vars.sysEnv = this.dataLayerParamExists("sysEnv") ? pageDataLayer.sysEnv : this.vars.sysEnv;
			this.vars.thematic = this.dataLayerParamExists("thematic") ? pageDataLayer.thematic : this.vars.thematic;
			this.vars.destinationURL = this.dataLayerParamExists("destinationURL") ? pageDataLayer.destinationURL : this.vars.destinationURL;
			this.vars.edition = this.dataLayerParamExists("edition") ? pageDataLayer.edition : this.vars.edition;
			this.vars.creationDate = this.dataLayerParamExists("creationDate") ? pageDataLayer.creationDate : this.vars.creationDate;
			this.vars.pageTitle = this.dataLayerParamExists("pageTitle") ? pageDataLayer.pageTitle : this.vars.pageTitle;
			this.vars.referringURL = this.dataLayerParamExists("referringURL") ? pageDataLayer.referringURL : this.vars.referringURL;
			this.vars.siteID = this.dataLayerParamExists("siteID") ? (this.vars.siteID + "/" + pageDataLayer.siteID) : this.vars.siteID;
			this.vars.pageName = this.dataLayerParamExists("pageName") ? pageDataLayer.pageName : (this.dataLayerParamExists("siteID") ? (this.vars.siteID + this.vars.destinationURL.replace(/[\?#].*?$/g, "").replace(/http.?:\/\/[^\/]*/, "")) : this.vars.pageName);
			this.vars.tags = this.dataLayerParamExists("tags") ? pageDataLayer.tags : [];
			this.vars.author = this.dataLayerParamExists("author") ? pageDataLayer.author : [];
			this.vars.pageID = document.location.href;
			this.vars.articleID = this.dataLayerParamExists("articleID") ? pageDataLayer.articleID : (this.vars.articleID != "" ? this.vars.articleID : (this.vars.pageType == "articulo" ? DTM.utils.encoder.encode(this.vars.destinationURL.replace(/[\?#].*?$/g, "")) : ""));
			this.vars.geoRegion = this.dataLayerParamExists("geoRegion") ? pageDataLayer.geoRegion : this.vars.geoRegion;
			this.vars.org = this.dataLayerParamExists("org") ? pageDataLayer.org : this.vars.org;
			this.vars.publisher = this.dataLayerParamExists("publisher") ? pageDataLayer.publisher : this.vars.publisher;
			this.vars.protocol = this.dataLayerParamExists("protocol") ? pageDataLayer.protocol : this.vars.protocol;
			this.vars.businessUnit = this.dataLayerParamExists("businessUnit") ? pageDataLayer.businessUnit : this.vars.businessUnit;
			this.vars.test = this.dataLayerParamExists("test") ? pageDataLayer.test : this.vars.test;
			this.vars.paywall = {
				type: this.dataLayerParamExists("paywall") ? pageDataLayer.paywall : this.vars.paywall.type,
				status: this.dataLayerParamExists("paywallStatus") ? pageDataLayer.paywallStatus : this.vars.paywall.status
			}
		},
		generateDL: function(){
			//Obtenemos la sección a la que pertenece la página
			this.regExp.result_re4 = this.regExp.seccion.exec(this.vars.direccion);
			if (this.regExp.result_re4)
				this.vars.seccion_omniture = this.regExp.result_re4[1];
			if (this.vars.seccion_omniture == 'brasil')
				this.vars.domain = "brasil.elpais.com";

			//Tratamos por seccion
			switch (this.vars.seccion_omniture) {
				//Secciones especiales
				case "cartelera":
					this.cartelera();
					break;
				case "chinawatch":
					this.chinawatch();
					break;
				case "eskup":
					this.eskup();
					break;
				case "resultados":
					this.resultados();
					break;
				case "programacion-tv":
					this.programaciontv();
					break;
				case "servicios":
					this.servicios();
					break;
				//Resto de secciones
				default:
					this.regExp.result_re = this.regExp.noticia.exec(this.vars.direccion);
					//Es un artículo
					if(this.regExp.result_re){
						this.articulo();
					}else{
						//Secciones virtuales
						this.regExp.result_re5 = this.regExp.seccionVirtual.exec(this.vars.direccion);
						if(this.regExp.result_re5) {
							this.vars.pageType = "portada";
							if(this.regExp.result_re5[1] == "brasil") {
								this.vars.seccion = this.regExp.result_re5[2];
								this.vars.subseccion = this.regExp.result_re5[2] + ">home";
							}else{
								this.vars.seccion = this.regExp.result_re5[1];
								this.vars.subseccion = this.regExp.result_re5[1] + ">" + this.regExp.result_re5[2] + ">home";
							}
						}else{
							//Especiales
							if(this.vars.direccion.indexOf("//elpais.com/especiales/") > -1 || this.vars.direccion.indexOf("//elpais.com/promociones/") > -1 || this.vars.direccion.indexOf("elpais.com/publi-especial/") > -1 || this.vars.direccion.indexOf("elpais.com/concursos/") > -1 || this.vars.direccion.indexOf("//www.elpais.com/especial") > -1 || this.vars.direccion.indexOf("//elpais.com/suscripciones/especiales") > -1 || this.vars.direccion.indexOf("//cat.elpais.com/especials/") > -1 || this.vars.direccion.indexOf("//brasil.elpais.com/especiais/") > -1 || this.vars.direccion.indexOf("//verne.elpais.com/especial/") > -1){
								this.regExp.result_re5 = this.regExp.especiales.exec(this.vars.direccion);
								this.especiales();
							//Diario
							}else{
								this.regExp.result_re6 = this.regExp.diario.exec(this.vars.direccion);
								if(this.regExp.result_re6){
									this.diario();
								//Portadillas
								}else{
									this.regExp.result_re2 = this.regExp.portadilla.exec(this.vars.direccion);
									if(this.regExp.result_re2) {
										this.portadillas();
									//Portada
									}else{
										this.regExp.result_re3 = this.regExp.portada.exec(this.vars.direccion);
										if(this.regExp.result_re3)
											this.regExp.result_re3[2] = this.regExp.result_re3[2].replace(/\?.*/, "");
										if(this.regExp.result_re3 && (this.regExp.result_re3[2].indexOf("index.html") == 0 || this.regExp.result_re3[2] == "")) {
											this.portada();
										}else{
											//Portadillas cincodias sin la barra final cincodias.elpais.com/smartlife
											if(this.regExp.result_re3[1] == "cincodias.elpais.com" && this.regExp.result_re3[2] != ""){
												this.vars.pageType = "portada";
												this.vars.seccion = "cincodias";
												this.vars.subseccion = "cincodias>" + this.regExp.result_re3[2] + ">home";
											}else{
												this.vars.seccion = "desconocido";
												this.vars.pageType = "";
												this.vars.subseccion = "desconocido" + ">" + "desconocido";
											}
										}
									}
									if (this.vars.seccion == "elpais")
										this.vars.seccion = this.vars.seccion_omniture;
								}
							}
						}
					}
			}

			if(this.vars.direccion.indexOf("//retina.elpais.com") > -1 && this.vars.pageName.indexOf("elpaiscom/retina") == -1)
				this.vars.pageName = this.vars.pageName.replace("elpaiscom", "elpaiscom/retina");
			if(this.vars.direccion.indexOf("//cincodias.elpais.com") > -1 && this.vars.pageName.indexOf("elpaiscom/cincodias") == -1)
				this.vars.pageName = this.vars.pageName.replace("elpaiscom", "elpaiscom/cincodias");

			if(this.vars.seccion == "deportes")
				this.vars.thematic = "deportes";
		},
		articulo: function(){
			this.vars.seccion = this.regExp.result_re[2];
			this.vars.seccion_omniture = this.regExp.result_re[2];
			this.vars.subseccion_omniture = this.regExp.result_re[6];
			this.vars.tituloarticulo = true;
			this.vars.creationDate = this.regExp.result_re[3] + "/" + this.regExp.result_re[4] + "/" + this.regExp.result_re[5];

			//Albumes y videos tratamos distinto
			if (this.vars.subseccion_omniture.indexOf("album") > -1 || this.vars.subseccion_omniture == "fotorrelato" || this.vars.subseccion_omniture == "videos" || this.vars.subseccion_omniture == "media") {
				var generica = (this.vars.subseccion_omniture == "videos") ? "videos" : (this.vars.subseccion_omniture == "media" ? "media" : "fotografia");
				this.vars.pageType = (this.vars.subseccion_omniture == "videos" || this.vars.subseccion_omniture == "media") ? "articulo" : "fotogaleria";

				if(typeof(window.subseccion_publi) != "undefined" && window.subseccion_publi != "") {
					if(this.vars.seccion_omniture == "elpais") {
						if(window.subseccion_publi.indexOf("|") == -1) {
							this.vars.seccion = window.subseccion_publi;
							this.vars.subseccion = this.vars.seccion + ">" + generica;
						}else{
							var ps = subseccion_publi.split("|");
							this.vars.seccion = ps[0];
							this.vars.subseccion = ps[0] + ">" + ps[1] + ">" + generica;
						}
					}else{
						this.vars.seccion = this.vars.seccion_omniture;
						if(subseccion_publi == "smartlife" || subseccion_publi == "tpymes"){
							this.vars.subseccion = this.vars.seccion_omniture + ">" + (subseccion_publi == "tpymes" ? "territorio_pyme" : subseccion_publi);
							this.vars.subsubseccion = this.vars.subseccion + ">" + generica;
						}else{
							this.vars.subseccion = this.vars.seccion_omniture + ">" + generica;
						}
					}
				}else{
					this.vars.seccion = (this.vars.seccion_omniture == "elpais") ? generica : this.vars.seccion_omniture;
					this.vars.subseccion = generica;
				}
			//Articulos corrientes
			}else{
				this.vars.pageType = "articulo";
				//blogs
				if(typeof(window.PEPtipologia) != "undefined" && window.PEPtipologia == "blogs") {
					this.vars.seccion = "blogs";
					this.vars.subseccion = "blogs>" + this.vars.subseccion_omniture;
				//resto
				}else{
					if(this.vars.seccion_omniture == "elpais" || this.vars.seccion_omniture == "brasil") {
						this.vars.seccion_omniture = this.vars.subseccion_omniture;
						this.vars.subseccion_omniture = "";
						this.vars.subseccion = this.vars.seccion_omniture;
					}else{
						if(this.vars.direccion.indexOf("cincodias.elpais.com") > -1) {
							switch(this.vars.subseccion_omniture) {
								case "smartphones":
								case "tablets":
								case "smarttv":
								case "gadgets":
								case "pymes":
								case "motor":
								case "lifestyle":
									this.vars.subsubseccion = this.vars.seccion_omniture + ">smartlife>" + this.vars.subseccion_omniture;
									this.vars.subseccion_omniture = "smartlife";
									break;
								case "autonomos":
								case "pyme":
								case "emprendedores":
								case "franquicias":
								case "guias_pymes":
								case "financiacion":
									this.vars.subsubseccion = this.vars.seccion_omniture + ">territorio_pyme>" + this.vars.subseccion_omniture;
									this.vars.subseccion_omniture = "territorio_pyme";
									break;
								default:
							}
						}
						this.vars.subseccion = this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture;
					}
				}

				if(this.vars.seccion == "elpais" || this.vars.seccion == "brasil")
					this.vars.seccion = this.vars.seccion_omniture;
			}

			//Id del articulo
			this.vars.articleID = this.regExp.result_re[7];
			DTM.events.vars.trackLinks = "1";
		},
		cartelera: function(){
			this.vars.pageName = this.vars.pageName.replace("elpaiscom", "elpaiscom/servicios/cartelera")
			this.vars.pageType = "";
			if(this.vars.pageTitle.indexOf("página no encontrada") != -1){
				this.vars.seccion = "error-404";
				this.vars.subseccion = "error-404>cartelera";
			}else{
				this.vars.seccion = "servicios";
				this.vars.subseccion = "servicios>cartelera";
			}
		},
		chinawatch: function(){
			this.vars.seccion = "chinawatch";
			this.vars.pageName = this.vars.pageName.replace("elpaiscom", "elpaiscom/chinawatch");
			if(this.vars.pageTitle.indexOf("page not found") != -1){
				this.vars.seccion = "error-404";
				this.vars.subseccion = "error-404>chinawatch";
				this.vars.pageType = "";
			}else if(this.regExp.result_re = /^http.?:\/\/[^\/]*\/([^\/]+)\/([^\/]+)\/$/i.exec(this.vars.direccion)){
				this.vars.subseccion = this.vars.seccion + ">" + this.regExp.result_re[1];
				this.vars.pageType = "articulo";
				this.vars.articleID = DTM.utils.encoder.encode(this.vars.direccion);
			}else if(this.regExp.result_re = /^http.?:\/\/[^\/]*\/([^\/]+)\/$/i.exec(this.vars.direccion)){
				this.vars.subseccion = this.vars.seccion + ">" + this.regExp.result_re[1] + ">home";
				this.vars.pageType = "portada";
			}else if(this.regExp.result_re = /^http.?:\/\/([^\/]*)\/?$/i.exec(this.vars.direccion)){
				this.vars.subseccion = this.vars.seccion + ">home";
				this.vars.pageType = "portada";
			}else{
				this.vars.subseccion = this.vars.seccion + ">desconocido";
			}
		},
		diario: function(){
			this.vars.seccion = "diario";
			this.vars.seccion_omniture = "diario";
			this.vars.pageType = "portada";

			if(this.regExp.result_re6[5] == "")
				this.vars.subseccion_omniture = "primera";
			else
				this.vars.subseccion_omniture = this.regExp.result_re6[5];

			this.vars.subseccion = this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture;
		},
		eskup: function(){
			this.vars.seccion = "eskup";
			this.vars.pageName = this.vars.pageName.replace("elpaiscom", "elpaiscom/eskup");

			if(this.vars.pageName.indexOf("404.html") != -1){
				this.vars.pageType = "eskup";
				this.vars.seccion = "error-404";
				this.vars.subseccion = "error-404>eskup";
			}else{
				this.regExp.result_re3 = this.regExp.portada.exec(this.vars.direccion);
				if(this.regExp.result_re3) {
					if(this.regExp.result_re3[2].indexOf("*") == 0) {
						this.vars.pageType = "eskup";
						this.vars.subseccion_omniture = this.regExp.result_re3[2].substr(1);
						this.vars.subseccion = this.vars.seccion_omniture + ">temas";
					}else{
						if(this.regExp.result_re3[2].indexOf("-") > -1) {
							this.vars.pageType = "eskup";
							this.vars.subseccion = this.vars.seccion_omniture + ">enlaces";
						}else{
							if(this.regExp.result_re3[2].indexOf(".html") == -1 && this.regExp.result_re3[2].indexOf(".pl") == -1) {
								this.vars.pageType = "eskup";
								this.vars.subseccion_omniture = this.regExp.result_re3[2].replace(/\/.*/, "");
								this.vars.subseccion = this.vars.seccion_omniture + ">usuarios";
							}else{
								if(this.vars.direccion == "http://eskup.elpais.com/index.html" || this.vars.direccion == "https://eskup.elpais.com/index.html") {
									this.vars.pageType = "eskup";
									this.vars.subseccion = this.vars.seccion_omniture + ">home";
								}else{
									if(this.vars.direccion == "http://eskup.elpais.com/todos.html" || this.vars.direccion == "https://eskup.elpais.com/todos.html") {
										this.vars.pageType = "eskup";
										this.vars.subseccion_omniture = "todos";
										this.vars.subseccion = this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture;
									}else{
										this.vars.pageType = "eskup";
										this.vars.subseccion_omniture = "desconocido";
										this.vars.subseccion = this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture;
									}
								}
							}
						}
					}
				}
			}
		},
		especiales: function(){
			if(this.regExp.result_re5) {
				if(this.vars.direccion.indexOf("//cat.elpais.com/especials/") > -1) {
					this.vars.seccion = "cat";
					this.vars.seccion_omniture = "especiales";
				}else{
					this.vars.seccion = this.regExp.result_re5[1];
					this.vars.seccion_omniture = this.regExp.result_re5[1];
				}
				this.vars.subseccion = this.vars.seccion_omniture + ">" + this.regExp.result_re5[3] + "_" + this.regExp.result_re5[2];
				this.vars.pageType = "especiales";
			}else{
				this.regExp.result_re6 = this.regExp.especialesPortadas.exec(this.vars.direccion);
				if(this.regExp.result_re6) {
					if(this.vars.direccion.indexOf("//cat.elpais.com/especials/") > -1) {
						this.vars.seccion = "cat";
						this.vars.seccion_omniture = "especiales";
					}else{
						this.vars.seccion = this.regExp.result_re6[2];
						this.vars.seccion_omniture = this.regExp.result_re6[2];
					}
					this.vars.subseccion = this.vars.seccion_omniture + ">" + this.regExp.result_re6[3];
					this.vars.pageType = "portada";
				}else{
					if (this.vars.direccion == "http://elpais.com/especiales/" || this.vars.direccion == "https://elpais.com/especiales/"){
						this.vars.seccion = "especiales";
						this.vars.seccion_omniture = "especiales";
						this.vars.subseccion = this.vars.seccion_omniture + ">home";
						this.vars.pageType = "portada";
					}else{
						if(this.vars.direccion == "http://elpais.com/promociones/" || this.vars.direccion == "https://elpais.com/promociones/"){
							this.vars.seccion = "promociones";
							this.vars.seccion_omniture = "promociones";
							this.vars.subseccion = this.vars.seccion_omniture + ">home";
							this.vars.pageType = "portada";
						}else{
							this.vars.seccion = "especiales";
							this.vars.seccion_omniture = "especiales";
							this.vars.subseccion = this.vars.seccion_omniture + ">desconocido";
							this.vars.pageType = "";
						}
					}
				}
			}
			if (this.vars.direccion.indexOf("//verne.elpais.com/especial/") > -1) {
				this.vars.seccion = "verne";
				this.vars.seccion_omniture = "verne";
				this.vars.subseccion = "verne>" + this.vars.subseccion;
			}
		},
		multidistribution:{
			init: function(){
				this.amp();
				this.ia();
				this.mobileWeb();
				this.widget();
			},
			amp: function(){
				if(typeof DTM.config.isAMP != "undefined" && DTM.config.isAMP){
					DTM.dataLayer.vars.sysEnv = "amp";
					DTM.dataLayer.vars.platform = DTM.PLATFORM.AMP;
					DTM.dataLayer.vars.canonicalURL = DTM.utils.hasQueryParam("pageURL") ? _satellite.QueryParams.normal["pageURL"] : document.location.href;
					DTM.dataLayer.vars.destinationURL = DTM.utils.hasQueryParam("pageURL") ? _satellite.QueryParams.normal["pageURL"] : document.location.href;
					DTM.dataLayer.vars.direccion = DTM.utils.hasQueryParam("pageURL") ? _satellite.QueryParams.normal["pageURL"].replace(/[\?#].*?$/g, "") : document.location.href.replace(/[\?#].*?$/g, "");
					DTM.dataLayer.vars.pageName = DTM.dataLayer.vars.siteID + DTM.dataLayer.vars.direccion.replace(/http.?:\/\/[^\/]*/, "");
					DTM.dataLayer.vars.server = DTM.utils.hasQueryParam("server") ? _satellite.QueryParams.normal["server"] : window.location.host;
					DTM.dataLayer.vars.referringURL = DTM.utils.hasQueryParam("r") ? _satellite.QueryParams.normal["r"] : document.referrer;
					DTM.dataLayer.vars.pageTitle = DTM.utils.hasQueryParam("pageTitle") ? _satellite.QueryParams.normal["pageTitle"].replace(/'|"|\|/g, "").toLowerCase() : "";
					window.listado_id_tags = DTM.utils.hasQueryParam("tags") ? _satellite.QueryParams.normal["tags"] : undefined;
					window.listado_norm_tags = DTM.utils.hasQueryParam("tagsNames") ? _satellite.QueryParams.normal["tagsNames"] : undefined;
					window.listado_id_autores = DTM.utils.hasQueryParam("authors") ? _satellite.QueryParams.normal["authors"] : undefined;
					window.listado_norm_autores = DTM.utils.hasQueryParam("authorsNames") ? _satellite.QueryParams.normal["authorsNames"] : undefined;
					window.subseccion_publi = DTM.utils.hasQueryParam("subseccion_publi") ? _satellite.QueryParams.normal["subseccion_publi"] : undefined;
					window.PEPtipologia = DTM.utils.hasQueryParam("tipologia") ? _satellite.QueryParams.normal["tipologia"] : undefined;
					window.omniture_info = DTM.utils.hasQueryParam("omniture_info") ? JSON.parse(_satellite.QueryParams.normal["omniture_info"].replace(/\'/g,"\"")) : undefined;
					DTM.dataLayer.vars.paywall = {
						type: DTM.utils.hasQueryParam("paywallType") ? _satellite.QueryParams.normal["paywallType"] : DTM.dataLayer.vars.paywall.type,
						status: DTM.dataLayer.vars.paywall.status
					}
					//Calculamos el status a través del registeredUser, añadimos un timeOut para dar tiempo a rellenar los datos de user
					if(DTM.dataLayer.vars.paywall.type == "reg"){
						setTimeout(function(){
							var status = _satellite.getVar("registeredUser") == "1" ? "abierto" : (_satellite.getVar("registeredUser") == "0" ? "cerrado" : "not-set");
							DTM.dataLayer.setParam("paywall.status", status);
						}, 550);
					}
					DTM.pageDataLayer = DTM.utils.hasQueryParam("pageDataLayer") ? JSON.parse(_satellite.QueryParams.normal["pageDataLayer"].replace(/\'/g,"\"")) : undefined;
				}
			},
			ia: function(){
				if(typeof window.ia_document != "undefined"){
					DTM.dataLayer.vars.referringURL = "https://www.facebook.com/";
					DTM.dataLayer.vars.sysEnv = "multi ia";
					DTM.dataLayer.vars.platform = DTM.PLATFORM.FBIA;
					DTM.dataLayer.vars.pageTitle = window.ia_document.title.replace(/'|"|\|/g, "").toLowerCase();
					DTM.dataLayer.vars.canonicalURL = DTM.dataLayer.vars.direccion;
				}
			},
			mobileWeb: function(){
				DTM.dataLayer.regExp.result_re = DTM.dataLayer.regExp.moviles.exec(DTM.dataLayer.vars.direccion);
				if(DTM.dataLayer.regExp.result_re) {
					DTM.dataLayer.vars.sysEnv = "web_movil";
					DTM.dataLayer.vars.platform = DTM.PLATFORM.MOBILEWEB;
					DTM.dataLayer.vars.direccion = DTM.dataLayer.regExp.result_re[1] + "/" + DTM.dataLayer.regExp.result_re[2];
				}	
			},
			widget: function(){
				if(typeof DTM.config.isWidget != "undefined"){
					 if(DTM.config.isWidget)
						DTM.dataLayer.vars.platform = DTM.PLATFORM.WIDGET;
				}else if(document.location.href.indexOf("/Comentarios/") > -1 || document.location.href.indexOf("/widgets/") > -1 || document.location.href.indexOf("/Widgets/") > -1 || document.location.href.indexOf("widget.html") > -1)
					DTM.dataLayer.vars.platform = DTM.PLATFORM.WIDGET;
			}
		},
		portada: function(){
			this.vars.pageType = "portada"
			this.vars.seccion_omniture = this.regExp.result_re3[1].replace(/elpais\.com/, "");
			if(this.vars.seccion_omniture == "" || this.regExp.result_re3[1] == "brasil.elpais.com") {
				this.vars.subseccion = "home";
				this.vars.seccion = "home";
			}else{
				this.vars.seccion = this.vars.seccion_omniture.substring(0, this.vars.seccion_omniture.length - 1);
				this.vars.subseccion = this.vars.seccion + ">home";
				this.vars.pageName = "elpaiscom/" + this.vars.seccion;
			}
		},
		portadillas: function(){
			this.vars.seccion = this.regExp.result_re2[2];
			this.vars.seccion_omniture = this.regExp.result_re2[2];

			if(this.regExp.result_re2[3].indexOf("index.html") == 0 || this.regExp.result_re2[3] == ""){
				if(this.vars.direccion.indexOf("//cincodias.elpais.com") > -1){
					this.vars.seccion = "cincodias";
					this.vars.subseccion = "cincodias>" + this.vars.seccion_omniture + ">home";
				}else if(this.vars.server == "verne.elpais.com" && this.vars.seccion == "mx"){
					this.vars.seccion = "verne";
					this.vars.subseccion = "verne>mexico>home";
					this.vars.pageName = this.vars.pageName.replace(/elpaiscom/, "elpaiscom/verne");
				}else
					this.vars.subseccion = this.vars.seccion_omniture + ">home";

				this.vars.pageType = "portada";
				if(this.regExp.result_re2[2] == "buscador")
					this.vars.search = "1";
			}else{
				if(this.regExp.result_re2[3].indexOf("/") == -1){
					this.vars.subseccion_omniture = this.regExp.result_re2[3].replace(/\.html.*/, "");
					this.vars.pageType = "portada";
					if(this.vars.direccion.indexOf("//cincodias.elpais.com") > -1){
						this.vars.seccion = "cincodias";
						this.vars.subseccion = "cincodias>" + this.regExp.result_re2[2] + ">home";
					}else{
						if(this.vars.seccion_omniture == "elpais"){
							this.vars.seccion_omniture = this.vars.subseccion_omniture;
							this.vars.subseccion_omniture = "";
						}
						this.vars.subseccion = this.vars.subseccion_omniture != "" ? this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture : this.vars.seccion_omniture + ">home";
					}
				}else{
					//Tags
					if(this.regExp.result_re2[2] == "tag" || this.regExp.result_re2[2] == "autor" || this.regExp.result_re2[2] == "agr" || this.regExp.result_re2[2] == "r") {
						if(this.regExp.result_re2[3].indexOf("listado") == 0) {
							this.vars.pageType = "portada";
							this.vars.subseccion = "tag>listado";
						}else{
							//Portadillas de blogs
							if(typeof(window.PEPtipologia) != "undefined" && window.PEPtipologia == "blogs"){
								this.vars.seccion = "blogs";
								this.vars.pageType = "portada";
								this.vars.subseccion = "blogs>" + this.regExp.result_re2[3].replace(/\/\w\/?.*?$/, "");
							}else{
								var resto_url = this.regExp.result_re2[3];
								if(this.regExp.result_re2[2] == "r"){
									this.regExp.result_re7 = this.regExp.tagRamas.exec(resto_url);
									if(this.regExp.result_re7) {
										this.vars.seccion = this.regExp.result_re7[1];
										resto_url = resto_url.replace(this.regExp.result_re7[1] + "/" + this.regExp.result_re7[2] + "/", "");
										this.regExp.result_re2[2] = this.regExp.result_re7[2];
										resto_url = resto_url.replace(/\/$/, "");
									}
								}

								this.regExp.result_re6 = this.regExp.tag.exec(resto_url);
								this.vars.subseccion_omniture = (this.regExp.result_re6) ? (this.regExp.result_re6[1] + "_" + this.regExp.result_re6[2]) : resto_url;

								if(this.regExp.result_re2[1] == "elviajero.elpais.com" || this.regExp.result_re2[1] == "elcomidista.elpais.com") {
									this.vars.seccion = this.regExp.result_re2[1].replace(".elpais.com", "");
									this.vars.subseccion = this.vars.seccion + ">" + this.regExp.result_re2[2] + ">" + this.vars.subseccion_omniture;
								}else{
									if(this.regExp.result_re7)
										this.vars.subseccion = this.vars.seccion + ">" + this.regExp.result_re2[2] + ">" + this.vars.subseccion_omniture;
									else
										this.vars.subseccion = this.regExp.result_re2[2] + ">" + this.vars.subseccion_omniture;
								}
								this.vars.pageType = "portada";
							}
						}
					}else{
						if(this.regExp.result_re2[3].indexOf("/") > -1 && (this.vars.direccion.indexOf("//cincodias.elpais.com") > -1)){
							this.vars.seccion = "cincodias";
							this.vars.pageType = "portada";
							this.vars.subseccion = this.vars.seccion + ">" + this.regExp.result_re2[2];
							//Calculadoras Cincodias
							if(this.regExp.result_re2[2] == "herramientas" && (typeof this.regExp.result_re2[3] != "undefined") && (this.regExp.result_re2[3] != "") && (this.regExp.result_re2[3] != "/"))
								this.vars.articleID = DTM.utils.encoder.encode(this.vars.direccion);
						}else if(this.regExp.result_re2[2] == "elviajero" && this.regExp.result_re2[3].indexOf("destinos/") > -1){
							this.vars.seccion = "elviajero";
							this.vars.pageType = "portada"
							this.vars.subseccion = "elviajero>destinos";
						}else{
							this.vars.pageType = ""
							this.vars.subseccion = this.vars.seccion_omniture + ">" + "desconocido";
						}
					}
				}
			}
		},
		programaciontv: function(){
			this.vars.pageName = this.vars.pageName.replace("elpaiscom", "elpaiscom/servicios/programacion-tv")
			this.vars.seccion = "servicios";
			this.vars.pageType = ""
			this.vars.subseccion = "servicios>programacion-tv";
		},
		resultados: function(){
			this.vars.seccion = "resultados";
			this.vars.pageName = this.vars.pageName.replace("elpaiscom", "elpaiscom/resultados");
			this.regExp.result_re = this.regExp.elecciones.exec(this.vars.direccion);

			if(this.regExp.result_re) {
				this.vars.seccion_omniture = "elecciones";
				this.vars.subseccion_omniture = this.regExp.result_re[3] + "_" + this.regExp.result_re[2];
				this.vars.pageType = "";
				this.vars.subseccion = this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture;
			}else{
				this.regExp.result_re2 = this.regExp.eleccionesPortadas.exec(this.vars.direccion)
				if(this.regExp.result_re2){
					this.vars.seccion_omniture = "elecciones";
					this.vars.subseccion_omniture = this.regExp.result_re2[2];
					this.vars.pageType = ""
					this.vars.subseccion = this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture;
				}else{
					this.regExp.result_re3 = this.regExp.eleccionesHome.exec(this.vars.direccion)
					if(this.regExp.result_re3) {
						this.vars.seccion_omniture = "elecciones";
						this.vars.subseccion_omniture = this.regExp.result_re3[2];
						this.vars.pageType = "portada"
						this.vars.subseccion = this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture;
					}else{
						var dtm_reg_n3 = /^http.?:\/\/[^\/]*\/([^\/]+)\/([^\/]+)\//i;
						this.regExp.result_re4 = dtm_reg_n3.exec(this.vars.direccion);
						if (this.regExp.result_re4) {
							this.vars.seccion_omniture = this.regExp.result_re4[1];
							this.vars.subseccion_omniture = this.regExp.result_re4[2];
							this.vars.subseccion = this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture;
						}else{
							this.vars.subseccion_omniture = "desconocido";
							this.vars.pageType = ""
							this.vars.subseccion = this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture;
						}
					}
				}
			}
		},
		servicios: function(){
			this.vars.seccion = "servicios";
			this.vars.pageName = this.vars.pageName.replace("elpaiscom", "elpaiscom/servicios");
			this.regExp.result_re = this.regExp.portadilla.exec(this.vars.direccion);

			if(this.regExp.result_re) {
				this.vars.pageType = ""
				this.vars.subseccion = this.vars.seccion_omniture + ">" + this.regExp.result_re[2];
				if(this.regExp.result_re[2] == "diccionarios" && this.regExp.result_re[3] != "" && this.regExp.result_re[3] != "index.html"){
					this.vars.pageName = "elpaiscom/servicios/diccionarios/buscador";
					this.vars.search = "1";
					this.vars.search_keyword = "diccionario:" + this.regExp.result_re[3].replace(/\//, ">");
				}else{
					if(this.regExp.result_re[2] == "sorteos" && this.regExp.result_re[3] != "" && this.regExp.result_re[3] != "index.html"){
						this.regExp.resultSo = this.regExp.sorteos.exec(this.regExp.result_re[3]);
						if(this.regExp.resultSo)
							this.vars.subseccion += ">" + this.regExp.resultSo[1];
					}
				}
			}else{
				if(this.vars.direccion == "http://servicios.elpais.com/" || this.vars.direccion == "https://servicios.elpais.com/"){
					this.vars.pageType = "portada"
					this.vars.subseccion = this.vars.seccion_omniture + ">" + "home";
				}else{
					this.vars.pageType = ""
					this.vars.subseccion_omniture = "desconocido";
					this.vars.subseccion = this.vars.seccion_omniture + ">" + this.vars.subseccion_omniture;
				}
			}
		},
		adblocker: function(){
			//Se supone la existencia de body, si no es asi salimos
			if (!window.document.body){
				this.setParam("page.pageInfo.adblocker", "not-set");
				return false;
			}

			var baitClass = 'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links',
				baitStyle = 'width: 1px !important; height: 1px !important; position: absolute !important; left: -1000px !important; top: -1000px !important;',
				bait = document.createElement('div');

			bait.setAttribute('class', baitClass);
			bait.setAttribute('style', baitStyle);

			window.document.body.insertBefore(bait, window.document.body.childNodes[0]);

			window.setTimeout(function() {
				DTM.dataLayer.vars.adblocker = (window.document.body.getAttribute('abp') !== null ||
					bait.offsetParent === null ||
					bait.offsetHeight == 0 ||
					bait.offsetLeft == 0 ||
					bait.offsetTop == 0 ||
					bait.offsetWidth == 0 ||
					bait.clientHeight == 0 ||
					bait.clientWidth == 0);

				window.document.body.removeChild(bait);

				DTM.dataLayer.setParam("page.pageInfo.adblocker", (DTM.dataLayer.vars.adblocker ? "1" : "0"));

			}, 500);
		},
		arrayTags: function(){
			if (typeof(listado_norm_tags) == "undefined" || typeof(listado_id_tags) == "undefined")
				return [];

			var salida = [];
			var itags = listado_id_tags.split(",");
			var ntags = listado_norm_tags.split(",")
			if (itags.length != ntags.length)
				return [];

			for (var j = 0; j < itags.length; j++)
				salida.push({
					"id": itags[j],
					"name": ntags[j]
				});
			return salida;
		},
		arrayAuthors: function(){
			if(typeof(listado_norm_autores) == "undefined" || typeof(listado_id_autores) == "undefined")
				return [];

			var salida = [];
			var iauthor = listado_id_autores.split(",");
			var nauthor = listado_norm_autores.split(",")
			if (iauthor.length != nauthor.length)
				return [];

			for (var j = 0; j < iauthor.length; j++) {
				salida.push({
					"id": iauthor[j],
					"name": nauthor[j]
				});
			}

			return salida;
		},
		dataLayerParamExists: function(param){
			if(typeof DTM == "undefined" || typeof DTM.pageDataLayer == "undefined")
				return false;
			return (typeof DTM.pageDataLayer[param] != "undefined" || (typeof DTM.pageDataLayer[param] == "string" && DTM.pageDataLayer[param] == ""))
		},
		getCampaign: function(){
			var campaign = "";
			var urlParams = _satellite.getVar("urlParams");

			//Se extrae de los parámetro de la URL ya calculados en el digitalData, no se vuelve a procesar la URL.
			for(var i = 0, j = this.vars.trackingCodes.length; i < j; i++){
				if(urlParams.hasOwnProperty(this.vars.trackingCodes[i])){
					campaign = urlParams[this.vars.trackingCodes[i]];
					//Si es rsoc buscamos id_externo_ads y lo concatenamos
					if(this.vars.trackingCodes[i] == "id_externo_rsoc" || this.vars.trackingCodes[i] == "ssm"){
						var tc_ads = urlParams.hasOwnProperty("id_externo_ads") ? urlParams["id_externo_ads"] : (DTM.utils.getQueryParam("ads") ? urlParams["ads"] : "");
						campaign = tc_ads != "" ? (campaign + "-" + tc_ads) : campaign;
					}
				}
			}
			return campaign;
		},
		getCanonical: function(){
			var canonical = "";
			if(typeof document != "undefined" && typeof document.querySelector == "function"){
				canonical = document.querySelector("link[rel='canonical']");
				canonical = canonical != null ? canonical.href : "";
			}else{
				var links = document.getElementsByTagName("link");
				for(var i = 0, j = links.length; (i < j && canonical == ""); i++){
					if (links[i].getAttribute("rel") === "canonical")
						canonical = links[i].getAttribute("href")
				}
			}
			return canonical;
		},
		getCMS: function(server){
			if(typeof server == "undefined" || server == "")
				return "not-set";
				
			var cmss = {"elpais.com":"pep","brasil.elpais.com":"pep","cincodias.elpais.com":"pep","verne.elpais.com":"pep","elcomidista.elpais.com":"pep","elviajero.elpais.com":"pep","retina.elpais.com":"pep","cat.elpais.com":"pep","resultados.elpais.com":"pep","smoda.elpais.com":"wp","motor.elpais.com":"wp","fichasyprecios.motor.elpais.com":"wp","servicios.motor.elpais.com":"wp","chinawatch.elpais.com":"wp","juegos.elpais.com":"wp","escuela.elpais.com":"wp"};
			return cmss.hasOwnProperty(server) ? cmss[server] : "otros";	
		},
		getUrlParams: function(){
			//Por defecto lo sacamos de la destinationURL
			var url = this.vars.destinationURL;

			//En AMP del parámetro ampdocUrl pasado al stats.html
			if(this.vars.platform == DTM.PLATFORM.AMP){
				if(_satellite.QueryParams.normal.hasOwnProperty("ampdocUrl") && _satellite.QueryParams.normal["ampdocUrl"] != "")
					url = _satellite.QueryParams.normal["ampdocUrl"];
			//En IA de la shareURL
			}else if(this.vars.platform == DTM.PLATFORM.FBIA){
				if(typeof ia_document != "undefined" && typeof ia_document.shareURL != "undefined")
					url = ia_document.shareURL;
			}

			return DTM.utils.getQueryParam("", url);
		},
		getUserInfo: function(){
			var profileID = "", registeredUser = "", userName = "", country = _satellite.readCookie("eptz");
			window.setTimeout(function(){
				if(typeof(window.PRISA) != "undefined"){
					var datos = PRISA.user.getData();
					if(datos != undefined){
						profileID = datos.uid;
						if(datos.nickname != undefined){
							registeredUser = "1";
							userName = datos.nickname;
						}else{
							registeredUser = "0";
						}
					}
				}else{
					if(typeof(window.PEPuidEnv) != "undefined" && typeof(window.PEPuid) == "undefined"){
						window.cookieEnabled = (navigator.cookieEnabled) ? true : false;
						if(typeof(navigator.cookieEnabled) == "undefined" && !window.cookieEnabled){
							document.cookie = "testcookie";
							cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
						}
						if(window.cookieEnabled)
							window.PEPuid = window.PEPuidEnv;
					}

					if(typeof(window.PEPuid) != "undefined")
						profileID = window.PEPuid;

					if(typeof(window.PEPuname) != "undefined") {
						registeredUser = "1";
						userName = window.PEPuname;
					}else
						registeredUser = "0";
				}
				DTM.notify("User info received from user.js lib");
				DTM.dataLayer.setParam("user.profileID", (profileID != "" ? profileID : "not-set"));
				DTM.dataLayer.setParam("user.registeredUser", (profileID != "" ? registeredUser : "not-set"));
				DTM.dataLayer.setParam("user.userName", userName);
				DTM.dataLayer.setParam("user.country", (typeof country != "undefined" ? country.toLowerCase() : ""));
			}, 500);
		},
		internalSearch: function(){
			if(this.vars.search == "1") {
				if(typeof(window.texto_busqueda) != "undefined" && window.texto_busqueda != "")
					this.vars.search_keyword = window.texto_busqueda;
				if(typeof(window.contador_busqueda) != "undefined" && parseInt(window.contador_busqueda) >= 0)
					this.vars.search_results = window.contador_busqueda;
			}
			this.setParam("page.pageInfo.onsiteSearch", this.vars.search);
			this.setParam("page.pageInfo.onsiteSearchTerm", this.vars.search_keyword);
			this.setParam("page.pageInfo.onsiteSearchResults", this.vars.search_results);
		},
		isBrandedContent: function(){
			var str_tags = JSON.stringify(_satellite.getVar("tags"));
			return (str_tags.indexOf("\"192925\"") != -1 || str_tags.indexOf("\"197500\"") != -1 || str_tags.indexOf("\"197760\"") != -1 || str_tags.indexOf("\"branded_content") != -1) ? "1" : "0";
		},
		paramExists: function(oO){
			if(typeof oO == "string"){
				var oOP = oO.split(".");
				var oOPL = oOP.length;
				var cV = window.digitalData[oOP[0]];
				if(typeof cV === "undefined")
					return false;
				else if(oOPL > 1){
					for(var i = 1;i < oOPL;i++){
						cV = cV[oOP[i]];
						if(typeof cV === "undefined")
							return false;
					}
					return true;
				}else 
					return true;
			}else 
				return false;
		},
		setParam: function(param, value){
			if(!this.paramExists(param) || typeof param !== "string" || typeof value == "undefined")
				return false;

			var oOP = param.split(".");
			var oOPL = oOP.length;
			switch(oOPL){
				case 1:
					digitalData[oOP[0]] = value;
					break;
				case 2:
					digitalData[oOP[0]][oOP[1]] = value;
					break;
				case 3:
					digitalData[oOP[0]][oOP[1]][oOP[2]] = value;
					break;
				default:
					return false;
			}
		}
	},
	utils: {
		addEvent: function(element, evento, func){
			if(document.addEventListener)
				element.addEventListener(evento, func, false);
			else
				element.attachEvent('on'+evento, func);
		},
		dispatchEvent: function(evento){
			var event;
			if(typeof(Event) === "function")
				event = new Event(evento);
			else{
				event = document.createEvent("Event");
				event.initEvent(evento, true, true);
			}
			if(document.dispatchEvent)
				document.dispatchEvent(event);
		},
		encoder: {
			_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
			encode : function(r) {
				var t, e, o, h, n, a, c, i = "",
					d = 0;
				for (r = this._utf8_encode(r); d < r.length;) h = (t = r.charCodeAt(d++)) >> 2, n = (3 & t) << 4 | (e = r.charCodeAt(d++)) >> 4, a = (15 & e) << 2 | (o = r.charCodeAt(d++)) >> 6, c = 63 & o, isNaN(e) ? a = c = 64 : isNaN(o) && (c = 64), i = i + this._keyStr.charAt(h) + this._keyStr.charAt(n) + this._keyStr.charAt(a) + this._keyStr.charAt(c);
				return i
			},
			decode : function(r) {
				var t, e, o, h, n, a, c = "",
					i = 0;
				for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < r.length;) t = this._keyStr.indexOf(r.charAt(i++)) << 2 | (h = this._keyStr.indexOf(r.charAt(i++))) >> 4, e = (15 & h) << 4 | (n = this._keyStr.indexOf(r.charAt(i++))) >> 2, o = (3 & n) << 6 | (a = this._keyStr.indexOf(r.charAt(i++))), c += String.fromCharCode(t), 64 != n && (c += String.fromCharCode(e)), 64 != a && (c += String.fromCharCode(o));
				return c = this._utf8_decode(c)
			},
			_utf8_encode : function(r) {
				r = r.replace(/\r\n/g, "\n");
				for (var t = "", e = 0; e < r.length; e++) {
					var o = r.charCodeAt(e);
					o < 128 ? t += String.fromCharCode(o) : o > 127 && o < 2048 ? (t += String.fromCharCode(o >> 6 | 192), t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224), t += String.fromCharCode(o >> 6 & 63 | 128), t += String.fromCharCode(63 & o | 128))
				}
				return t
			},
			_utf8_decode : function(r) {
				for (var t = "", e = 0, o = c1 = c2 = 0; e < r.length;)(o = r.charCodeAt(e)) < 128 ? (t += String.fromCharCode(o), e++) : o > 191 && o < 224 ? (c2 = r.charCodeAt(e + 1), t += String.fromCharCode((31 & o) << 6 | 63 & c2), e += 2) : (c2 = r.charCodeAt(e + 1), c3 = r.charCodeAt(e + 2), t += String.fromCharCode((15 & o) << 12 | (63 & c2) << 6 | 63 & c3), e += 3);
				return t
			}
		},
		formatData: function(data){
			var formatData = {};
			for(var param in data){
				if(data[param] != undefined){
					var formatValue = (typeof data[param] != "object") ? data[param].toString().toLowerCase().replace(/"/g, "\\\"") : data[param];
					switch(param){
						case "videoName":
							formatValue = formatValue.replace(/\-\d+$/, "").replace(/#/g, "");
							break;
						case "userID":
							formatValue = data[param];
							break;
						case "pageName":
							formatValue = _satellite.getVar("siteID") + data[param].replace(/[\?#].*?$/g, "").replace(/http.?:\/\/[^\/]*/, "");
							break;
					}
					formatData[param] = formatValue;
				}else{
					formatData[param] = "";
				}
			}
			return formatData;
		},
		formatDate: function(date) {
			if(date < 10)
			   return "0" + date;
			return date;
		},
		formatURLEspecial: function(url){
			//Campaña de marca, hardcodeado, quitar en 2 meses
			var result_url = /\#([^\?]*)/.exec(url);
			var resultados = {"url": url, "pagina": "", "seccion": ""}
			
			if(typeof url == "string" && result_url != null){
				resultados["pagina"] = result_url[1].replace(/([^\/]*)\/?/, "");
				resultados["seccion"] = result_url[1].replace(/\/([^\/]*)/, "");
			}else
				resultados["seccion"] = url.indexOf("mosaico.html") != -1 ? "mosaico" : (url.indexOf("contenido.html") != -1 ? "contenido" : "home");
					
			return resultados;
		},
		hasQueryParam: function(param){
			return (_satellite.QueryParams.normal.hasOwnProperty(param) && _satellite.QueryParams.normal[param] != "");
		},
		getCookie: function(name){
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i = 0, j = ca.length; i < j; i++) {
				var c = ca[i];
				while(c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		getQueryParam: function(name, url){
			var params = "";
			name = (typeof name == "undefined" || name == "") ? -1 : name;
			url = (typeof url == "undefined" || url == "") ? window.location.href : url;
			
			//Si el digitalData está generado lo devolvemos de allí
			if(typeof window.digitalData != "undefined"){
				var dlParams = _satellite.getVar("urlParams");
				if(name != -1)
					return dlParams.hasOwnProperty(name) ? dlParams[name] : "";
				else
					return _satellite.getVar("urlParams");
			}
			
			//Si no hay digitalData lo calculamos de la URL
			if(name == -1){
				params = [];
				if(url.indexOf("?") != -1){
					var search = url.substr(url.indexOf("?") + 1).replace(/\?/g, "&");
					search = search.split("&");
					for(var i = 0, j = search.length; i < j; i++){
						if(search[i].indexOf("=") != -1){
							var param = search[i].split("=");
							params[param[0]] = param[1].replace(/#(.*)/g, "");
						}else
							params[param] = "";
					}
				}
			//Si se pasa nombre, se devuelve
			}else{
				params = "";
				//Buscamos en la URL
				name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
				var regexS = "[\\?&]" + name + "=([^&#]*)";
				var results = (new RegExp(regexS)).exec(url);
				params = (results == null) ? "" : decodeURIComponent(results[1].replace(/\+/g, " ").replace(/#(.*)/g, ""));
			}
			return params;
		},
		getVisitorID: function(){
			var omn_visitorID = "";
			var omn_cookie = _satellite.readCookie("AMCV_2387401053DB208C0A490D4C%40AdobeOrg");
			if(typeof DTM.s != "undefined" && typeof DTM.s.marketingCloudVisitorID != "undefined"){
				omn_visitorID = DTM.s.marketingCloudVisitorID;
			}else if(typeof omn_cookie != "undefined"){
				var r = /(MCMID)\/([^\/]*)\/(.*)/.exec(decodeURIComponent(omn_cookie).replace(/\|/g, "/"));
				omn_visitorID = (r != null) ? r[2] : "";
			}

			return omn_visitorID;
		},
		setCookie: function(name, value, domain, time) {
			if(time){
				var date = new Date();
				date.setTime(date.getTime() + time);
				var expires = "; expires=" + date.toGMTString();
			}else
				var expires = "";
			document.cookie = name + "=" + value + expires + ";domain=" + domain + ";path=/";
		}
	},
	events: {
		ABDESACT: "ABdesact",
		ABDETECTED: "ABdetected",
		ADEND: "adEnd",
		ADPLAY: "adPlay",
		ADEND: "adEnd",
		ADERROR: "adError",
		ADSKIP: "adSkip",
		ADPAUSED: "adPaused",
		ADRESUMED: "adResumed",
		ADTIMEOUT:"adTimeout",
		AUDIOPLAY:"audioPlay",
		AUDIO50: "audio50",
		AUDIOEND:"audioEnd",
		AUDIOPAUSED: "audioPaused",
		AUDIORESUMED: "audioResumed",
		AUDIOREADY: "audioReady",
		BUTTONCLICK: "buttonClick",
		COMMENTS: "comments",
		CONC: "conc",
		CONCPARTICIPATE: "concParticipate",
		EMAILREGISTER: "emailRegister",
		EXTERNALLINK: "externalLink",
		EXTERNALLINKART: "externalLinkArticle",
		FORMABANDON: "formAbandon",
		FORMERROR: "formError",
		FORMSUCESS: "formSucess",
		INTERNALPIXEL: "internalPixel",
		INTERNALSEARCH: "internalSearch",
		INTERNALSEARCHEMPTY:"internalSearchEmpty",
		INTERNALSEARCHRESULTS:"internalSearchResults",
		PAGEVIEW: "pageView",
		PAYERROR: "payError",
		PAYOK: "payOK",
		PHOTOGALLERY: "photogallery",
		PHOTOZOOM: "photoZoom",
		PRODVIEW: "prodView",
		PURCHASE: "purchase",
		READARTICLE: "readArticle",
		RECOMMENDERIMPRESSION: "recommenderImpression",
		SALEBUTTON: "saleButton",
		SCADD: "scAdd",
		SCCHECKOUT: "scCheckout",
		SCREMOVE: "scRemove",
		SCVIEW: "scView",
		SHARE: "share",
		SCROLL: "scroll",
		SCROLLINF: "scrollInf",
		TEST: "test",
		USERCONNECT: "userConnect",
		USERDISCONNECT: "userDisconnect",
		USERLOGIN: "userLogin",
		USERLOGININIT: "userLoginInit",
		USERLOGINREGISTER: "userLoginRegister",
		USERLOGOFF: "userLogOFF",
		USERNEWSLETTERIN: "userNewsletterIN",
		USERNEWSLETTEROFF: "userNewsletterOFF",
		USERPREREGISTER: "userPreRegister",
		USERREGISTER: "userRegister",
		USERUNREGISTER: "userUnregister",
		USERVINC: "userVinc",
		UUVINC: "UUvinc",
		USERLOGOFF: "userLogOFF",
		USERCONNECT: "userConnect",
		VIDEOADSERVERRESPONSE: "videoAdserverResponse",
		VIDEOPLAY: "videoPlay",
		VIDEOEND: "videoEnd",
		VIDEO50: "video50",
		VIDEORESUMED: "videoResumed",
		VIDEOPAUSED: "videoPaused",
		VIDEOPLAYEROK:"videoPlayerOK",
		VIDEOREADY: "videoReady",
		VIEWARTICLE:"viewArticle",
		VIDEORELOAD: "videoReload",
		VIDEOREPLAY: "videoReplay",
		init: function(){
			if(_satellite.getVar("platform") == DTM.PLATFORM.WIDGET)
				return false;

			for(var eventH in this.eventHandlers){
				switch(this.eventHandlers[eventH].type){
					case "domready":
						(function (eventH) {
							DTM.utils.addEvent(document, 'DOMContentLoaded', function(){
								DTM.events.eventHandlers[eventH].init();
								DTM.notify("Event listener <" + eventH + "> added (domready)");
							});
						}(eventH));
						break;
					case "top":
						this.eventHandlers[eventH].init();
						DTM.notify("Event listener <" + eventH + "> added");
						break;
					case "onload":
						(function (eventH) {
							DTM.utils.addEvent(window, 'load', function(){
								DTM.events.eventHandlers[eventH].init();
								DTM.notify("Event listener <" + eventH + "> added (onload)");
							});
						}(eventH));
						break;
					case "custom":
						(function (eventH) {
							DTM.utils.addEvent(document, DTM.events.eventHandlers[eventH].cevent, function(){
								DTM.events.eventHandlers[eventH].init();
								DTM.notify("Event listener <" + eventH + "> added (custom)");
							});
						}(eventH));
						break;
				}
			}
		},
		vars:{
			readArticleInterval: -1,
			trackLinks: false,
			readArticleTime: 60000
		},
		eventHandlers:{
			userRegisterLogin:{
				type: "custom",
				cevent: "OmniturePVTracked",
				init: function(){
					if(!DTM.tools.omniture.trackedPV)
						return;

					var p_o = DTM.utils.getQueryParam("o");
					var p_prod = DTM.utils.getQueryParam("prod");
					
					//Logins
					var p_event_log = DTM.utils.getQueryParam("event_log");
					if(p_event_log != ""){
						var logTypes = {"oklogin":"clasico", "okdesc":"clasico", "okvinculacion":"clasico", "fa":"facebook", "tw":"twitter", "go":"google", "me":"msn", "li":"linkedin"};
						if(logTypes.hasOwnProperty(p_event_log)){
							var logEvent = (p_event_log == "okdesc") ? DTM.events.USERLOGOFF : ((p_event_log == "okvinculacion") ? DTM.events.UUVINC : DTM.events.USERLOGIN);
							if(DTM.tools.omniture.loaded && DTM.tools.omniture.trackedPV)
								DTM.trackEvent(logEvent, {registerType:logTypes[p_event_log],registerOrigin:p_o,registerProd:p_prod});
						}
					}
					//Registros
					var p_event = DTM.utils.getQueryParam("event");
					if(p_event != ""){
						var regTypes = {"okregistro": "clasico", "fa": "facebook", "tw": "twitter", "go": "google", "me": "msn", "li": "linkedin"};
						if(regTypes.hasOwnProperty(p_event))
							if(DTM.tools.omniture.loaded && DTM.tools.omniture.trackedPV)
								DTM.trackEvent(DTM.events.USERREGISTER, {registerType:regTypes[p_event],registerOrigin:p_o,registerProd:p_prod});
					}
				}
			},
			readArticle:{
				type: "top",
				init: function(){
					if(_satellite.getVar("pageType") == "articulo"){
						DTM.events.vars.readArticleInterval = setTimeout(function(){
							DTM.trackEvent(DTM.events.READARTICLE, {articleTitle:_satellite.getVar("pageTitle")});
						}, DTM.events.vars.readArticleTime);
					}
				}
			},
			shareLinks:{
				type: "domready",
				init: function(){
					if(_satellite.getVar("pageType") != "articulo" && _satellite.getVar("pageType") != "fotogaleria")
						return false;
					
					var shareLinks = {superior_fb:"facebook_superior",superior_twit:"twitter_superior",superior_linkedin:"linkedin_superior",superior_gp:"google_superior",superior_enviar:"enviar_superior",superior_bomn_imprimir:"imprimir_superior",superior_bomn_whatsapp:"whatasapp_superior",superior_guardar:"guardar_superior",inferior_fb:"facebook_inferior",inferior_twit:"twitter_inferior",inferior_linkedin:"linkedin_inferior",inferior_gp:"google_inferior",inferior_enviar:"enviar_inferior",inferior_bomn_imprimir:"imprimir_inferior",inferior_bomn_whatsapp:"whatasapp_inferior",inferior_guardar:"guardar_inferior",fb:"facebook",twit:"twitter",linkedin:"linkedin",gp:"google",bomn_tuenti:"tuenti",bomn_meneame:"meneame",bomn_whatsapp:"whatasapp",bomn_eskup:"eskup",enviar:"enviar",bomn_imprimir:"imprimir",bomn_guardar:"guardar",superior_pinit:"pinterest_superior",inferior_pinit:"pinterest_inferior"};
					for(var link in shareLinks){
						if(document.getElementById(link)){
							var shareLink = document.getElementById(link);
							if(shareLink.href != undefined && shareLink.href != "" && shareLink.href.indexOf('javascript') == -1)
								shareLink.target = "_blank";
							shareLink.idx = shareLinks[link];
							DTM.utils.addEvent(shareLink, "click", function(){DTM.trackEvent(DTM.events.SHARE, {shareRRSS:this.idx})});
						}
					}
				}
			},
			internalLinks:{
				type: "domready",
				init: function(){
					if(!DTM.events.vars.trackLinks || !document.getElementById('cuerpo_noticia'))
						return false;

					var nodosInternos = document.getElementById('cuerpo_noticia').getElementsByTagName("a");
					for(var idx_int = 0, j = nodosInternos.length; idx_int < j; idx_int++){
						var nod = nodosInternos[idx_int];
						if (nod.href != "" && nod.href.indexOf("javascript") == -1){
							DTM.utils.addEvent(nod, "click", function(){
								DTM.trackEvent(DTM.events.EXTERNALLINKART, {articleTitle:_satellite.getVar("pageTitle"), buttonName: this.href});
							});
						}
					}
				}
			},
			escButton:{
				type: "domready",
				init: function(){
					if(!document.getElementById('cuerpo_noticia') || typeof document.querySelectorAll == "undefined")
						return false;
						
					var botones = document.querySelectorAll(".escaparate_contenedor_boton a");
					if(botones.length > 0){
						var botonesEscaparate = 1;
						for(var i = 0, j = botones.length; i < j; i++){
							var boton = botones[i];
							if(boton.href != "" && boton.href.indexOf("javascript") == -1 && boton.href.indexOf("//elpais.com") == -1){
								boton.escOrder = "btn-esc-" + (botonesEscaparate++);
								boton.escBoton = boton.innerHTML.trim().toLowerCase();
								var vendor = /^(.*) en (.*)$/ig.exec(boton.escBoton);
								boton.escVendor = vendor != null ? vendor[2] : "not-set";
								DTM.utils.addEvent(boton, "click", function(){					
									DTM.trackEvent(DTM.events.SALEBUTTON, {
										articleTitle: _satellite.getVar("pageTitle"), 
										buttonName: this.escBoton + " (" + this.escOrder + ")", 
										externalURL: this.escVendor + ":" + this.href
									});
								});
							}
						}
					}
				}
			},
			widgetND:{
				type: "domready",
				init: function(){
					var widget = document.getElementsByClassName("contenedor_clasificados__interior");
					for(var i = 0, j = widget.length; i < j; i++){
						var links = widget[i].getElementsByTagName("a");
						var linksNames = {"my_savings": "iahorro", "apartment": "fotocasa", "courses": "emagister cursos", "directorio": "emagister centros"};
						var widgetName = widget[i].id.trim().toLowerCase();
						widgetName = linksNames.hasOwnProperty(widgetName) ? linksNames[widgetName] : widgetName;
						for(var k = 0, l = links.length; k < l; k++){
							var link = links[k];
							link.idx = "clasificados " + widgetName;
							DTM.utils.addEvent(link, "click", function(a){
								DTM.trackEvent(DTM.events.EXTERNALLINK, {buttonName: this.idx, externalURL: this.href});
								if(this.target != "_blank"){
									a.preventDefault();
									(function (href, targ) {
										window.setTimeout(function(){
											window.open(href, targ);
										}, 500);
									}(this.href, "_self"));
								}
							});
						}
					}
				}
			},
			videoWidgets:{
				type: "top",
				init: function(){
					DTM.utils.addEvent(window, "message", function(event){
						try{
							if(typeof event != "undefined" && typeof event.data != "undefined" && typeof event.data.eventType != "undefined" && typeof event.data.data == "object")
								DTM.trackEvent(event.data.eventType, event.data.data);
						}catch(e){
							DTM.notify("Error en video iframe");
						}
					}, false);
				}
			}
		},
		validEvent: function(event){
			var valid = false;
			for(var eventValid in this)
				if(typeof this[eventValid] == "string" && this[eventValid] == event)
					return true;
			return valid;
		}
	},
	tools: {
		init: function(){
			/* Sistema para activar/desactivar las tools desde página
			 * allowAll permite fijar el comportamiento por defecto, true si no se pasa
			 * Se crea una variable por cada herramienta, para activar/desactivar individualmente.*/
			DTM.allowAll = (typeof DTM.config.allowAll != "undefined") ? DTM.config.allowAll : true;

			//Iniciamos todas las herramientas una por una
			for(var tool in this)
				if(typeof(this[tool].init) == "function" && typeof(this[tool].dl) == "object")
					this[tool].init();
			DTM.toolsInitialized = true;

			DTM.notify("Tools initialized");
		},
		omniture:{
			enabled: 1,
			dl: {},
			trackType: -1,
			eventQueue: [],
			eventRequired: false,
			eventRequiredFired: false,
			loaded: false,
			trackedPV: false,
			map: {
				events: {},
				vars: {}
			},
			init: function(){
				//Enabled
				this.enabled = this.isEnabled();
				//Map
				this.createMap();
				//Track type
				this.trackType = DTM.TRACK_DELAY;
				//Event required, si es paywall en web marcará con evento personalizado
				this.eventRequired = (_satellite.getVar("paywall:type") != "free" && _satellite.getVar("platform") != DTM.PLATFORM.AMP) ? "DTMPaywallActive" : false;

				//Formamos los datos para Omniture y los introducimos en el dataLayer
				this.setDL({
					"adobeTargetEnabled": typeof DTM.config.atg != "undefined" && DTM.config.atg ? true : false,
					"articleID": /(\d+)_(\d+)/.exec(_satellite.getVar("articleID")) != null ? _satellite.getVar("articleID") : "",
					"authors": this.formatListVar(_satellite.getVar("author"), "id"),
					"fromHome": _satellite.getVar("referringURL").replace(/[\?#].*?$/g, "") == "https://elpais.com/" ? _satellite.getVar("pageName") : "",
					"liveContent": typeof DTM.config.isLiveContent != "undefined" && DTM.config.isLiveContent ? "1" : "0",
					"tags": this.formatListVar(_satellite.getVar("tags"), "id")
				});
			},
			createMap: function(){
				//events
				this.map.events[DTM.events.INTERNALSEARCH] = "event1";
				this.map.events[DTM.events.PAGEVIEW] = "event2";
				this.map.events[DTM.events.SCROLL] = "event5";
				this.map.events[DTM.events.SCROLLINF] = "event10";
				this.map.events[DTM.events.VIDEOPLAY] = "event11";
				this.map.events[DTM.events.VIDEOREPLAY] = "event11";
				this.map.events[DTM.events.VIDEOEND] = "event12";
				this.map.events[DTM.events.ADPLAY] = "event13";
				this.map.events[DTM.events.ADEND] = "event14";
				this.map.events[DTM.events.ADSKIP] = "event15";
				this.map.events[DTM.events.AUDIOPLAY] = "event16";
				this.map.events[DTM.events.AUDIOEND] = "event17";
				this.map.events[DTM.events.AUDIO50] = "event18";
				this.map.events[DTM.events.USERPREREGISTER] = "event19";
				this.map.events[DTM.events.USERLOGINREGISTER] = "event20";
				this.map.events[DTM.events.USERREGISTER] = "event21";
				this.map.events[DTM.events.EXTERNALLINK] = "event22";
				this.map.events[DTM.events.USERLOGIN] = "event23";
				this.map.events[DTM.events.USERLOGININIT] = "event24";
				this.map.events[DTM.events.USERUNREGISTER] = "event25";
				this.map.events[DTM.events.FORMABANDON] = "event26";
				this.map.events[DTM.events.FORMSUCESS] = "event27";
				this.map.events[DTM.events.FORMERROR] = "event28";
				this.map.events[DTM.events.INTERNALSEARCHRESULTS] = "event31";
				this.map.events[DTM.events.INTERNALSEARCHEMPTY] = "event32";
				this.map.events[DTM.events.BUTTONCLICK] = "event33";
				this.map.events[DTM.events.COMMENTS] = "event34";
				this.map.events[DTM.events.SALEBUTTON] = "event35";
				this.map.events[DTM.events.USERCONNECT] = "event36";
				this.map.events[DTM.events.USERDISCONNECT] = "event37";
				this.map.events[DTM.events.USERNEWSLETTERIN] = "event38";
				this.map.events[DTM.events.USERNEWSLETTEROFF] = "event39";
				this.map.events[DTM.events.CONC] = "event50";
				this.map.events[DTM.events.VIDEOPLAYEROK] = "event59";
				this.map.events[DTM.events.USERVINC] = "event62";
				this.map.events[DTM.events.EMAILREGISTER] = "event63";
				this.map.events[DTM.events.SHARE] = "event69";
				this.map.events[DTM.events.PHOTOZOOM] = "event76";
				this.map.events[DTM.events.VIEWARTICLE] = "event77";
				this.map.events[DTM.events.PHOTOGALLERY] = "event78";
				this.map.events[DTM.events.VIDEO50] = "event79";
				this.map.events[DTM.events.READARTICLE] = "event80";
				this.map.events[DTM.events.CONCPARTICIPATE] = "event81";
				this.map.events[DTM.events.USERLOGOFF] = "event85";
				this.map.events[DTM.events.EXTERNALLINKART] = "event99";
				this.map.events[DTM.events.TEST] = "event100";
				this.map.events[DTM.events.PAYOK] = "event102";
				this.map.events[DTM.events.PAYERROR] = "event103";
				this.map.events[DTM.events.ABDETECTED] = "event108";
				this.map.events[DTM.events.ABDESACT] = "event109";
				this.map.events[DTM.events.UUVINC] = "event110";
				//vars
				this.map.vars["destinationURL"] = "eVar1";
				this.map.vars["playerType"] = "eVar2";
				this.map.vars["pageName"] = "eVar3";
				this.map.vars["primaryCategory"] = "eVar4";
				this.map.vars["subCategory1"] = "eVar5";
				this.map.vars["subCategory2"] = "eVar6";
				this.map.vars["pageType"] = "eVar7";
				this.map.vars["videoName"] = "eVar8";
				this.map.vars["adTitle"] = "eVar9";
				this.map.vars["articleURL"] = "eVar10";
				this.map.vars["language"] = "eVar11";
				this.map.vars["scrollLevel"] = "eVar13";
				this.map.vars["country"] = "eVar14";
				this.map.vars["searchKeyword"] = "eVar16";
				this.map.vars["sysEnv"] = "eVar17";
				this.map.vars["org"] = "eVar18";
				this.map.vars["publisher"] = "eVar19";
				this.map.vars["domain"] = "eVar20";
				this.map.vars["userStatus"] = "eVar22";
				this.map.vars["articleID"] = "eVar23";
				this.map.vars["adMode"] = "eVar24";
				this.map.vars["videoSource"] = "eVar25";
				this.map.vars["videoRepMode"] = "eVar26";
				this.map.vars["businessUnit"] = "eVar30";
				this.map.vars["formAnalysis"] = "eVar34";
				this.map.vars["registerType"] = "eVar37";
				this.map.vars["videoID"] = "eVar38";
				this.map.vars["articleTitle"] = "eVar39";
				this.map.vars["videoRepType"] = "eVar42";
				this.map.vars["userID"] = "eVar43";
				this.map.vars["pageTitle"] = "eVar45";
				this.map.vars["photoURL"] = "eVar46";
				this.map.vars["cms"] = "eVar50";
				this.map.vars["brandedContent"] = "eVar51";
				this.map.vars["redention"] = "eVar52";
				this.map.vars["scrollPercent"] = "eVar56";
				this.map.vars["buttonName"] = "eVar58";
				this.map.vars["edition"] = "eVar61";
				this.map.vars["thematic"] = "eVar62";
				this.map.vars["productID"] = "eVar64";
				this.map.vars["adEnable"] = "eVar67";
				this.map.vars["externalURL"] = "eVar68";
				this.map.vars["shareRRSS"] = "eVar69";
				this.map.vars["mediaFormat"] = "eVar70";
				this.map.vars["uniqueVideoID"] = "eVar71";
				this.map.vars["articleDays"] = "eVar72";
				this.map.vars["test"] = "eVar73";
				this.map.vars["videoDuration"] = "eVar74";
				this.map.vars["videoChannels"] = "eVar75";
				this.map.vars["videoOrder"] = "eVar76";
				this.map.vars["videoCreateSection"] = "eVar77";
				this.map.vars["videoTagsMediateca"] = "eVar79";
				this.map.vars["registerOrigin"] = "eVar85";
				this.map.vars["registerProd"] = "eVar86";
				this.map.vars["videoIframe"] = "eVar98";
				this.map.vars["videoContractID"] = "eVar99";
				this.map.vars["paywallType"] = "eVar151";
				this.map.vars["paywallStatus"] = "eVar153";
				this.map.vars["adobeTargetURL"] = "eVar191";
			},
			getDL: function(){
				return this.dl;
			},
			setDL: function(dl){
				this.dl = dl;
			},
			isEnabled: function(){
				var omn_enabled = (typeof DTM.config.omn_enabled != "undefined") ? DTM.config.omn_enabled : DTM.allowAll;
				//No Widgets
				if(omn_enabled && _satellite.getVar("platform") == DTM.PLATFORM.WIDGET)
					omn_enabled = false;
				omn_enabled = (omn_enabled) ? DTM.TOOL_ENABLED : DTM.TOOL_DISABLED;
				return omn_enabled;
			},
			formatListVar: function(arrayList, key){
				if(typeof arrayList == "string")
					return arrayList.replace(/,;|,/g,";").replace(/^;/,"");

				var formatList = [];
				key = (typeof key == "undefined") ? "id" : key;
				try{
					for(var i = 0, j = arrayList.length; i < j; i++)
						formatList.push(arrayList[i][key]);
				}catch(e){
					formatList = [];
				}

				if(key == "id")
					return formatList.join(";");
				return formatList.join(",");
			},
			trackPV: function(){
				var omniture_dl = this.getDL();
				//Si no está habilitada o ya se ha marcado o no ha cargado la lib no se marca
				if(this.enabled != DTM.TOOL_ENABLED || this.trackedPV || !this.loaded)
					return false;

				//Si se requiere un evento y no se ha lanzado o se ha lanzado antes de tiempo, no se marca
				if((this.eventRequired !== false && !this.eventRequiredFired) || (this.eventRequired !== false && !DTM.delayCompleted))
					return false;

				DTM.s.dataLayer = this.getDL();

				/* AMP Adapter*/
				if(_satellite.getVar("platform") == DTM.PLATFORM.AMP){
					DTM.s.pageURL = _satellite.getVar("destinationURL");
					DTM.s.referrer = _satellite.getVar("referringURL");
				}

				/* IA Adapter */
				if(_satellite.getVar("platform") == DTM.PLATFORM.FBIA)
					DTM.s.referrer = _satellite.getVar("referringURL");
				
				//Config
				DTM.s.dstStart = _satellite.getVar("date:dstStart");
				DTM.s.dstEnd = _satellite.getVar("date:dstEnd");
				DTM.s.currentYear = _satellite.getVar("date:year");
				DTM.s.siteID = _satellite.getVar("siteID");
				
				//PageName & Channel
				DTM.s.pageName = _satellite.getVar("pageName");			
				DTM.s.channel = _satellite.getVar("primaryCategory");
				//Page Type
				DTM.s.pageType = _satellite.getVar("primaryCategory") == "error-404" ? "errorPage" : "";
				//Hier
				DTM.s.hier1 = 'D=c18+">"+c19+">"+c20+">"+c1+">"pageName';

				//List vars
				DTM.s.list1 = omniture_dl.tags;
				DTM.s.list2 = omniture_dl.authors;
				//Campaign
				if(!DTM.s.campaign){
					DTM.s.campaign = _satellite.getVar("campaign");
					DTM.s.campaign = DTM.s.getValOnce(DTM.s.campaign,'s_campaign',0);
				}
				
				//Custom traffic variables
				DTM.s.prop1 = _satellite.getVar("subCategory1");
				DTM.s.prop2 = _satellite.getVar("subCategory2");
				DTM.s.prop3 = _satellite.getVar("pageType");
				DTM.s.prop5 = "D=g";
				DTM.s.prop6 = "D=r";
				DTM.s.prop8 = DTM.s.getTimeParting('d', _satellite.getVar("date:gmt"));
				DTM.s.prop9 = DTM.s.getTimeParting('w', _satellite.getVar("date:gmt"));
				DTM.s.prop10 = (_satellite.getVar("pageType") == "articulo") ? "D=g" : "";
				DTM.s.prop11 = _satellite.getVar("language");
				DTM.s.prop12 = DTM.version;
				DTM.s.prop14 = _satellite.getVar("geoRegion");
				DTM.s.prop15 = DTM.s.version;
				DTM.s.prop16 = _satellite.getVar("onsiteSearchTerm");
				DTM.s.prop17 = _satellite.getVar("sysEnv");
				DTM.s.prop18 = _satellite.getVar("org");
				DTM.s.prop19 = _satellite.getVar("publisher");
				DTM.s.prop20 = _satellite.getVar("domain");
				DTM.s.prop21 = DTM.s.getNewRepeat();
				DTM.s.prop23 = omniture_dl.articleID;
				DTM.s.prop24 = _satellite.getVar("date:hours") + ":" + _satellite.getVar("date:minutes") + ":" + _satellite.getVar("date:seconds");
				DTM.s.prop27 = typeof Visitor != "undefined" && typeof Visitor.version != "undefined" ? "Visitor " + Visitor.version : "Visitor error";
				DTM.s.prop28 = DTM.s.getVisitNum('d', 's_vnum_d', 's_invisit_d');
				DTM.s.prop30 = _satellite.getVar("businessUnit");
				DTM.s.prop31 = _satellite.getVar("thematic");
				DTM.s.prop33 = DTM.s.getVisitNum();
				DTM.s.prop34 = _satellite.getVar("profileID");
				DTM.s.prop35 = DTM.s.getTimeParting('h', _satellite.getVar("date:gmt"));
				DTM.s.prop36 = DTM.s.getTimeParting('d', _satellite.getVar("date:gmt")) + "-" + _satellite.getVar("date:day") + "/" + _satellite.getVar("date:month") + "/" + _satellite.getVar("date:fullYear") + "-" + DTM.s.prop24;
				DTM.s.prop39 = (_satellite.getVar("pageType") == "articulo") ? _satellite.getVar("pageTitle") : "";
				DTM.s.prop44 = _satellite.getVar("creationDate");
				DTM.s.prop45 = _satellite.getVar("pageTitle");
				DTM.s.prop49 = omniture_dl.liveContent;
				DTM.s.prop50 = _satellite.getVar("cms");
				DTM.s.prop51 = _satellite.getVar("brandedContent") == "1" ? _satellite.getVar("pageName") : "";
				DTM.s.prop54 = _satellite.getVar("clickOrigin");
				DTM.s.prop57 = (_satellite.getVar("platform") != DTM.PLATFORM.AMP && _satellite.getVar("adblocker") != "not-set") ? ((_satellite.getVar("adblocker") == "1") ? 'D="con_ADBLOCK-"+User-Agent' : 'D="sin_ADBLOCK-"+User-Agent') : "not-set";
				DTM.s.prop61 = _satellite.getVar("edition");
				DTM.s.prop62 = _satellite.getVar("registeredUser") != "not-set" ? (_satellite.getVar("registeredUser") == "0" ? "anonimo" : "logueado") : _satellite.getVar("registeredUser");
				DTM.s.prop66 = omniture_dl.fromHome;
				DTM.s.prop72 = DTM.s.articleDays(_satellite.getVar("creationDate"));
				DTM.s.prop73 = _satellite.getVar("test");

				//Campaña de marca
				if(_satellite.getVar("subCategory1").indexOf("especiales>y-tu-que-piensas") != -1)
					DTM.s.prop2 = _satellite.getVar("subCategory2") != "" ? (_satellite.getVar("subCategory2") + ">" + DTM.utils.formatURLEspecial(_satellite.getVar("destinationURL"))["seccion"]) : (_satellite.getVar("subCategory1") + ">" + DTM.utils.formatURLEspecial(_satellite.getVar("destinationURL"))["seccion"]);
				
				//Conversion custom variables			
				//Limpiamos eVars
				for(var dataKey in this.map.vars)
					DTM.s[this.map.vars[dataKey]] = "";
				DTM.s.eVar1 = "D=g";
				DTM.s.eVar3 = "D=pageName";
				DTM.s.eVar4 = "D=ch"; 
				DTM.s.eVar5 = DTM.s.prop1 ? "D=c1": "";
				DTM.s.eVar6 = DTM.s.prop2 ? "D=c2" : "";
				DTM.s.eVar7 = DTM.s.prop3 ? "D=c3" : "";
				DTM.s.eVar10 = DTM.s.prop10 ? "D=g" : "";
				DTM.s.eVar11 = DTM.s.prop11 ? "D=c11" : "";
				DTM.s.eVar12 = DTM.s.prop12 ? "D=c12" : "";
				DTM.s.eVar13 = DTM.s.prop13 ? "D=c13" : "";
				DTM.s.eVar14 = DTM.s.prop14 ? "D=c14" : "";	
				DTM.s.eVar15 = DTM.s.prop15 ? "D=c15" : "";
				DTM.s.eVar16 = DTM.s.prop16 ? "D=c16" : "";
				DTM.s.eVar17 = DTM.s.prop17 ? "D=c17" : "";
				DTM.s.eVar18 = DTM.s.prop18 ? "D=c18" : "";
				DTM.s.eVar19 = DTM.s.prop19 ? "D=c19" : "";
				DTM.s.eVar20 = DTM.s.prop20 ? "D=c20" : "";
				DTM.s.eVar21 = DTM.s.prop21 ? "D=c21" : "";
				DTM.s.eVar23 = DTM.s.prop23 ? "D=c23" : "";
				DTM.s.eVar22 = DTM.s.prop62 ? "D=c62" : "";
				DTM.s.eVar27 = DTM.s.prop27 ? "D=c27" : "";
				DTM.s.eVar28 = DTM.s.prop28 ? "D=c28" : "";
				DTM.s.eVar30 = DTM.s.prop30 ? "D=c30" : "";
				DTM.s.eVar32 = DTM.s.prop33 ? "D=c33" : "";   
				DTM.s.eVar33 = DTM.s.prop36 ? "D=c36" : "";
				DTM.s.eVar35 = DTM.s.prop35 ? "D=c35" : "";
				DTM.s.eVar39 = DTM.s.prop39 ? "D=c39" : "";
				DTM.s.eVar43 = DTM.s.prop34 ? "D=c34" : "";
				DTM.s.eVar44 = DTM.s.prop44 ? "D=c44" : "";
				DTM.s.eVar45 = DTM.s.prop45 ? "D=c45" : "";
				DTM.s.eVar47 = DTM.s.prop47 ? "D=c47" : "";
				DTM.s.eVar48 = DTM.s.prop8 ? "D=c8" : "";		
				DTM.s.eVar49 = DTM.s.prop49 ? "D=c49" : "";
				DTM.s.eVar50 = DTM.s.prop50 ? "D=c50" : "";
				DTM.s.eVar51 = DTM.s.prop51 ? "D=c51" : "";
				DTM.s.eVar54 = DTM.s.prop54 ? "D=c54" : "";
				DTM.s.eVar57 = DTM.s.prop57 ? DTM.s.prop57 : "";
				DTM.s.eVar59 = DTM.s.prop24 ? "D=c24" : "";
				DTM.s.eVar61 = DTM.s.prop61 ? "D=c61" : "";
				DTM.s.eVar62 = DTM.s.prop31 ? "D=c31" : "";
				DTM.s.eVar63 = DTM.s.prop6 ? DTM.s.prop6 : "";
				DTM.s.eVar65 = DTM.s.prop65 ? "D=c65" : "";
				DTM.s.eVar66 = DTM.s.prop9 ? "D=c9" : "";		
				DTM.s.eVar72 = DTM.s.prop72 ? "D=c72" : "";
				DTM.s.eVar73 = DTM.s.prop73 ? "D=c73" : "";
				DTM.s.eVar81 = "D=mid";
				DTM.s.eVar83 = DTM.s.prop43 ? "D=c43" : "";
				DTM.s.eVar96 = DTM.s.prop66 ? "D=c66" : "";
				DTM.s.eVar151 = _satellite.getVar("paywall:type");
				DTM.s.eVar153 = _satellite.getVar("paywall:status");
				DTM.s.eVar166 = _satellite.getVar("pageName");
				DTM.s.eVar191 = (omniture_dl.adobeTargetEnabled) ? _satellite.getVar("destinationURL") : "";

				//Events
				var omn_events = "event2";
				//Búsquedas internas, las obtenemos del layer principal
				if(_satellite.getVar("onsiteSearch") == "1"){
					omn_events += ",event1";
					if(parseInt(_satellite.getVar("onsiteSearchResults")) != 0)
						omn_events += ",event31";
					else
						omn_events += ",event32";
				}
				//distinctDays
				if(DTM.s.distinctDays("elpais.com"))
					omn_events += ",event45";
				//articlesSection
				if(_satellite.getVar("pageType") == "articulo" || _satellite.getVar("pageType") == "fotogaleria")
					omn_events += ",event46=" + DTM.s.articlesSection(_satellite.getVar("primaryCategory"), _satellite.getVar("date:gmt"));
				//Ver artículo
				if(_satellite.getVar("pageType") == "articulo")
					omn_events += ",event77";
				//Adobe Target
				if(omniture_dl.adobeTargetEnabled)
					omn_events += ",event91";
				DTM.s.events = omn_events;

				//Track
				DTM.s.t();

				DTM.s.linkTrackEvents = "None";
				DTM.s.linkTrackVars = "None";
				this.trackedPV = true;
				DTM.utils.dispatchEvent("OmniturePVTracked");

				//Vaciamos la cola de eventos
				for(var eventQ in this.eventQueue)
					this.trackEvent(eventQ);
			},
			trackEvent: function(eventID){
				if(this.enabled == DTM.TOOL_DISABLED)
					return;

				//Si la página no marcó, lo añadimos a la cola de eventos.
				if(this.enabled == DTM.TOOL_ENABLED && !this.trackedPV){
					this.eventQueue.push(eventID);
					return;
				}

				var omniture_dl = this.getDL();

				//Event from data layer
				if(typeof _satellite.getVar("event")[eventID] == "undefined"){
					DTM.notify("Omniture event past not valid <" + eventType + ">");
					return;
				}
				var eventType = _satellite.getVar("event")[eventID].eventInfo.eventName;
				var data = _satellite.getVar("event")[eventID].attributes;

				//Event mapping
				if(!this.map.events.hasOwnProperty(eventType))
					return;
				var evento = this.map.events[eventType];

				switch(eventType){
					case DTM.events.SCROLLINF:
						evento += ",event77";
						DTM.s.pageName = _satellite.getVar("pageName");
						DTM.s.pageURL = _satellite.getVar("destinationURL");
						omniture_dl.tags = this.formatListVar(_satellite.getVar("tags"), "id");
						break;
					case DTM.events.PHOTOGALLERY:
						data["articleTitle"] = _satellite.getVar("pageTitle");
						if(typeof data.photogalleryExternal != "undefined")
							data["photoURL"] = document.location.protocol + "//" + document.location.hostname + document.location.pathname + "#imagen/" + (typeof(data.photoID) != "undefined" ? data.photoID : 0);
						break;
				}

				//Tags
				var tags = typeof data.tags != "undefined" ? this.formatListVar(data.tags, "id") : omniture_dl.tags;
				var eTags = typeof data.eventTags != "undefined" ? this.formatListVar(data.eventTags, "id") : "";

				//Data from data layer
				DTM.s.linkTrackEvents = evento;
				DTM.s.events = evento;
				DTM.s.server = typeof data.server != "undefined" ? data.server : DTM.s.server;
				DTM.s.pageName = typeof data.pageName != "undefined" ? data.pageName : _satellite.getVar("pageName");
				DTM.s.linkTrackVars = 'events,server,list1,list2,eVar1,eVar3,eVar4,eVar5,eVar7,eVar10,eVar12,eVar15,eVar17,eVar18,eVar19,eVar20,eVar22,eVar23,eVar30,eVar35,eVar39,eVar43,eVar45,eVar48,eVar49,eVar50,eVar51,eVar57,eVar61,eVar72,eVar73,eVar151,eVar153,eVar166,eVar191';
				DTM.s.list1 = eTags == "" ? tags : (tags == "" ? eTags : tags + ";" + eTags);
				DTM.s.list2 = typeof data.authors != "undefined" ? this.formatListVar(data.authors, "id") : omniture_dl.authors;
				DTM.s.eVar1 = _satellite.getVar("destinationURL");
				DTM.s.eVar3 = _satellite.getVar("pageName");
				DTM.s.eVar4 = _satellite.getVar("primaryCategory");
				DTM.s.eVar5 = _satellite.getVar("subCategory1");
				DTM.s.eVar7 = _satellite.getVar("pageType");
				DTM.s.eVar10 = (_satellite.getVar("pageType") == "articulo") ? _satellite.getVar("destinationURL") : "";
				DTM.s.eVar12 = DTM.version;
				DTM.s.eVar15 = DTM.s.version;
				DTM.s.eVar17 = _satellite.getVar("sysEnv");
				DTM.s.eVar18 = _satellite.getVar("org");
				DTM.s.eVar19 = _satellite.getVar("publisher");
				DTM.s.eVar20 = _satellite.getVar("domain");
				DTM.s.eVar22 = _satellite.getVar("registeredUser") != "not-set" ? (_satellite.getVar("registeredUser") == "0" ? "anonimo" : "logueado") : _satellite.getVar("registeredUser");
				DTM.s.eVar23 = omniture_dl.articleID;
				DTM.s.eVar30 = _satellite.getVar("businessUnit");
				DTM.s.eVar35 = DTM.s.getTimeParting('h', _satellite.getVar("date:gmt"));
				DTM.s.eVar39 = (_satellite.getVar("pageType") == "articulo") ? _satellite.getVar("pageTitle") : "";
				DTM.s.eVar43 = _satellite.getVar("profileID");
				DTM.s.eVar45 = _satellite.getVar("pageTitle");
				DTM.s.eVar48 = typeof DTM.s.prop8 != "undefined" ? DTM.s.prop8 : "";
				DTM.s.eVar49 = omniture_dl.liveContent;
				DTM.s.eVar50 = _satellite.getVar("cms");
				DTM.s.eVar51 = _satellite.getVar("brandedContent") == "1" ? _satellite.getVar("pageName") : "";
				DTM.s.eVar57 = (_satellite.getVar("platform") != DTM.PLATFORM.AMP && _satellite.getVar("adblocker") != "not-set") ? ((_satellite.getVar("adblocker") == "1") ? 'D="con_ADBLOCK-"+User-Agent' : 'D="sin_ADBLOCK-"+User-Agent') : "not-set";
				DTM.s.eVar61 = _satellite.getVar("edition");
				DTM.s.eVar72 = DTM.s.articleDays(_satellite.getVar("creationDate"));
				DTM.s.eVar73 = _satellite.getVar("test");
				DTM.s.eVar151 = _satellite.getVar("paywall:type");
				DTM.s.eVar153 = _satellite.getVar("paywall:status");
				DTM.s.eVar166 = typeof data.pageName != "undefined" ? data.pageName : _satellite.getVar("pageName");
				DTM.s.eVar191 = (omniture_dl.adobeTargetEnabled) ? _satellite.getVar("destinationURL") : "";
				
				//Campaña de marca, quitar en 2 meses
				if(_satellite.getVar("subCategory1").indexOf("especiales>y-tu-que-piensas") != -1){
					if(data.hasOwnProperty("photoURL"))
						DTM.s.eVar6 = _satellite.getVar("subCategory2") != "" ? (_satellite.getVar("subCategory2") + ">" + DTM.utils.formatURLEspecial(data.photoURL)["seccion"]) : (_satellite.getVar("subCategory1") + ">" + DTM.utils.formatURLEspecial(data.photoURL)["seccion"]);
					else
						DTM.s.eVar6 = _satellite.getVar("subCategory2") != "" ? _satellite.getVar("subCategory2") : "";
					DTM.s.linkTrackVars += ",eVar6";
				}
				
				//eVars mapping
				for(var dataKey in this.map.vars){
					if(data.hasOwnProperty(dataKey)){
						DTM.s[this.map.vars[dataKey]] = data[dataKey];
						DTM.s.linkTrackVars += "," + this.map.vars[dataKey];
					}
				}

				DTM.s.tl(this, 'o', eventType);
				DTM.s.linkTrackEvents = "None";
				DTM.s.linkTrackVars = "None";
				DTM.notify("", eventID, "Adobe Analytics");
			},
			trackExitLinks: function(){
				var omniture_dl = this.getDL();
				DTM.s.linkTrackVars = 'events,server,list1,list2,eVar1,eVar3,eVar4,eVar5,eVar7,eVar10,eVar12,eVar15,eVar17,eVar18,eVar19,eVar20,eVar22,eVar23,eVar30,eVar35,eVar39,eVar43,eVar45,eVar48,eVar49,eVar50,eVar51,eVar57,eVar61,eVar68,eVar72,eVar73,eVar151,eVar153,eVar166,eVar191';
				DTM.s.linkTrackEvents = "";
				DTM.s.events = "";
				DTM.s.pageName = _satellite.getVar("pageName");
				DTM.s.list1 = omniture_dl.tags;
				DTM.s.list2 = omniture_dl.authors;
				DTM.s.eVar1 = _satellite.getVar("destinationURL");
				DTM.s.eVar3 = _satellite.getVar("pageName");
				DTM.s.eVar4 = _satellite.getVar("primaryCategory");
				DTM.s.eVar5 = _satellite.getVar("subCategory1");
				DTM.s.eVar7 = _satellite.getVar("pageType");
				DTM.s.eVar10 = (_satellite.getVar("pageType") == "articulo") ? _satellite.getVar("destinationURL") : "";
				DTM.s.eVar12 = DTM.version;
				DTM.s.eVar15 = DTM.s.version;
				DTM.s.eVar17 = _satellite.getVar("sysEnv");
				DTM.s.eVar18 = _satellite.getVar("org");
				DTM.s.eVar19 = _satellite.getVar("publisher");
				DTM.s.eVar20 = _satellite.getVar("domain");
				DTM.s.eVar22 = _satellite.getVar("registeredUser") != "not-set" ? (_satellite.getVar("registeredUser") == "0" ? "anonimo" : "logueado") : _satellite.getVar("registeredUser");
				DTM.s.eVar23 = omniture_dl.articleID;
				DTM.s.eVar30 = _satellite.getVar("businessUnit");
				DTM.s.eVar35 = DTM.s.getTimeParting('h', _satellite.getVar("date:gmt"));
				DTM.s.eVar39 = (_satellite.getVar("pageType") == "articulo") ? _satellite.getVar("pageTitle") : "";
				DTM.s.eVar43 = _satellite.getVar("profileID");
				DTM.s.eVar45 = _satellite.getVar("pageTitle");
				DTM.s.eVar48 = typeof DTM.s.prop8 != "undefined" ? DTM.s.prop8 : "";
				DTM.s.eVar49 = omniture_dl.liveContent;
				DTM.s.eVar50 = _satellite.getVar("cms");
				DTM.s.eVar51 = _satellite.getVar("brandedContent") == "1" ? _satellite.getVar("pageName") : "";
				DTM.s.eVar57 = (_satellite.getVar("platform") != DTM.PLATFORM.AMP && _satellite.getVar("adblocker") != "not-set") ? ((_satellite.getVar("adblocker") == "1") ? 'D="con_ADBLOCK-"+User-Agent' : 'D="sin_ADBLOCK-"+User-Agent') : "not-set";
				DTM.s.eVar61 = _satellite.getVar("edition");
				DTM.s.eVar68 = typeof DTM.s.linkURL == "string" ? DTM.s.linkURL : "";
				DTM.s.eVar72 = DTM.s.articleDays(_satellite.getVar("creationDate"));
				DTM.s.eVar73 = _satellite.getVar("test");
				DTM.s.eVar151 = _satellite.getVar("paywall:type");
				DTM.s.eVar153 = _satellite.getVar("paywall:status");
				DTM.s.eVar166 = _satellite.getVar("pageName");
				DTM.s.eVar191 = (omniture_dl.adobeTargetEnabled) ? _satellite.getVar("destinationURL") : "";
			}
		},
		krux:{
			enabled: 1,
			dl: {},
			trackType: -1,
			trackedPV: false,
			map: {
				events:{}
			},
			init: function(){
				//Enabled
				this.enabled = this.isEnabled();
				//Track type
				this.trackType = DTM.TRACK_DELAY;
				//Map
				this.createMap();
				//Creación del Data Layer
				this.setDL({
					"data": {},
					"img": new Image(1,1),
					"src": "//beacon.krxd.net/event.gif?"
				});
			},
			createMap: function(){
				this.map.events[DTM.events.VIDEOPLAY] = "vvid_0";
				this.map.events[DTM.events.VIDEOREPLAY] = "vvid_0";
				this.map.events[DTM.events.VIDEO50] = "vvid_50";
				this.map.events[DTM.events.VIDEOEND] = "vvid_100";
				this.map.events[DTM.events.SHARE] = "social";
				this.map.events[DTM.events.EXTERNALLINK] = "default";
				this.map.events[DTM.events.FORMSUCESS] = "fd";
				this.map.events[DTM.events.SALEBUTTON] = "default";
				this.map.events[DTM.events.CONC] = "pageview";
				this.map.events[DTM.events.PHOTOGALLERY] = "default";
				this.map.events[DTM.events.USERREGISTER] = "default";
			},
			getDL: function(){
				return this.dl;
			},
			setDL: function(dl){
				this.dl = dl;
			},
			isEnabled: function(){
				var krx_enabled = (typeof DTM.config.krx_enabled != "undefined") ? DTM.config.krx_enabled : DTM.allowAll;
				//No AMP ni IA ni Widget
				if(krx_enabled && (_satellite.getVar("platform") == DTM.PLATFORM.AMP || _satellite.getVar("platform") == DTM.PLATFORM.FBIA || _satellite.getVar("platform") == DTM.PLATFORM.WIDGET))
					krx_enabled = false;
				//La página vista solamente se marcará en algunas ocasiones, no podemos deshabilitar la herramienta ya que puede haber páginas que marquen eventos y no PV
				if((typeof DTM.config.krx_enabledPV != "undefined" && DTM.config.krx_enabledPV) || _satellite.getVar("articleID") != "" || _satellite.getVar("subCategory1").indexOf("branded_content") != -1)
					krx_enabled = DTM.TOOL_ENABLED;
				else
					krx_enabled = (krx_enabled) ? DTM.TOOL_ONLYEVENTS : DTM.TOOL_DISABLED;
				return krx_enabled;
			},
			formatListVar: function(arrayList, key){
				if(typeof arrayList == "string")
					return arrayList.replace(/,;|,/g,";").replace(/^;/,"");

				var formatList = [];
				key = (typeof key == "undefined") ? "id" : key;
				try{
					for(var i = 0, j = arrayList.length; i < j; i++){
						if(arrayList[i][key] != "")
							formatList.push(arrayList[i][key].replace(/\/tag\//g, "").replace(/\//g, "_").replace(/_$/g, ""));
					}
				}catch(e){
					formatList = [];
				}

				return formatList.join(", ");
			},
			getGeo: function(){
				var krx_geo = {country: "", zip: "", region: "", province: ""};

				if(typeof localStorage == "undefined" || typeof localStorage.getItem == "undefined")
					return krx_geo;
				var geo = localStorage.getItem("kxprisabrand_geo");
				if(geo == null)
					return krx_geo;

				try{
					geo = geo.split("&");
					var geo_json = {};
					for(var i = 0, j = geo.length; i < j; i++){
						var geo_p = geo[i].split("=");
						geo_json[geo_p[0]] = geo_p[1];
					}

					krx_geo.country = typeof geo_json.country != "undefined" ? geo_json.country : "";
					krx_geo.zip = typeof geo_json.zip != "undefined" ? geo_json.zip : "";
					krx_geo.region = typeof geo_json.region != "undefined" ? geo_json.region : "";

					//Calculo province
					if(krx_geo.country == "es" && krx_geo.zip.length > 1){
						var krx_provs = {"10":"caceres","11":"cadiz","12":"castellon","13":"ciudad_real","14":"cordoba","15":"la_coruña","16":"cuenca","17":"gerona","18":"granada","19":"guadalajara","20":"guipuzcoa","21":"huelva","22":"huesca","23":"jaen","24":"leon","25":"lerida","26":"la_rioja","27":"lugo","28":"madrid","29":"malaga","30":"murcia","31":"navarra","32":"orense","33":"asturias","34":"palencia","35":"las_palmas","36":"pontevedra","37":"salamanca","38":"santa_cruz_de_tenerife","39":"cantabria","40":"segovia","41":"sevilla","42":"soria","43":"tarragona","44":"teruel","45":"toledo","46":"valencia","47":"valladolid","48":"vizcaya","49":"zamora","50":"zaragoza","51":"ceuta","52":"melilla","01":"alava","08":"barcelona","02":"albacete","09":"burgos","03":"alicante","04":"almeria","05":"avila","06":"badajoz","07":"islas_baleares"};
						var krx_key = krx_geo.zip.substr(0, 2);
						if(krx_provs.hasOwnProperty(krx_key))
							krx_geo.province = krx_provs[krx_key];
					}
				}catch(e){
					krx_geo = {country: "", zip: "", region: "", province: ""};
					DTM.notify("Error in Krux getGeo");
				}
				return krx_geo;
			},
			trackPV: function(){
				if(this.enabled == DTM.TOOL_DISABLED)
					return false;
				
				var krux_dl = this.getDL();
				if(this.enabled == DTM.TOOL_ENABLED){
					krux_dl.data = {
						adblocker: _satellite.getVar("adblocker"),
						businessUnit: _satellite.getVar("businessUnit"),
						creationDate: _satellite.getVar("creationDate").replace(/\//g, ""),
						destinationURL: _satellite.getVar("destinationURL"),
						domain: _satellite.getVar("domain"),
						edition: _satellite.getVar("edition"),
						geo: this.getGeo(),
						geoRegion: _satellite.getVar("geoRegion"),
						language: _satellite.getVar("language"),
						pageTitle: _satellite.getVar("pageTitle"),
						pageType: _satellite.getVar("pageType"),
						primaryCategory: _satellite.getVar("primaryCategory"),
						profileID: _satellite.getVar("profileID"),
						publisher: _satellite.getVar("publisher"),
						referringURL: _satellite.getVar("referringURL"),
						registeredUser: _satellite.getVar("registeredUser"),
						source: _satellite.getVar("sysEnv"),
						subCategory1: _satellite.getVar("subCategory1"),
						tags: _satellite.getVar("tags"),
						thematic: _satellite.getVar("thematic")
					};				
				}else
					krux_dl.data = false;
				
				window.DataLayerKrx = krux_dl.data;
				DTM.utils.dispatchEvent("DataLayerKrxGenerated");
				this.trackedPV = true;
			},
			trackEvent: function(eventID){
				//Enabled
				if(this.enabled == DTM.TOOL_DISABLED)
					return;

				var krux_dl = this.getDL();

				//Event from data layer
				if(typeof _satellite.getVar("event")[eventID] == "undefined"){
					DTM.notify("Krux event past not valid <" + eventType + ">");
					return;
				}
				var eventType = _satellite.getVar("event")[eventID].eventInfo.eventName;
				var data = _satellite.getVar("event")[eventID].attributes;

				//Mapping event
				if(!this.map.events.hasOwnProperty(eventType))
					return;
				var evento = this.map.events[eventType];

				var krux_params = [];
				switch (eventType) {
					case DTM.events.VIDEO50:
					case DTM.events.VIDEOPLAY:
					case DTM.events.VIDEOREPLAY:
					case DTM.events.VIDEOEND:
						krux_params.push("event_id=Lj2mKIH_");
						krux_params.push("event_type=" + evento.split("_")[0]);
						krux_params.push("video.percent=" + encodeURIComponent(evento.split("_")[1]));
						krux_params.push("publisher=" + _satellite.getVar("publisher"));
						krux_params.push("video.url=" + encodeURIComponent(_satellite.getVar("destinationURL")));
						//Tags
						if(data.hasOwnProperty("eventTags"))
							krux_params.push("video.meta_keywords=" + encodeURIComponent(this.formatListVar(data["eventTags"], "name")));
						//VideoName
						if(data.hasOwnProperty("videoName"))
							krux_params.push("video.title=" + encodeURIComponent(data.videoName));
						break;
					case DTM.events.SHARE:
						krux_params.push("event_id=L51Iqage");
						krux_params.push("event_type=" + evento);
						if(data.hasOwnProperty("shareRRSS"))
							krux_params.push("network.name=" + encodeURIComponent(data.shareRRSS));
						krux_params.push("page.tags=" + encodeURIComponent(this.formatListVar(_satellite.getVar("tags"), "name")));
						krux_params.push("page.title=" + encodeURIComponent(_satellite.getVar("pageTitle")));
						krux_params.push("page.domain=" + encodeURIComponent(_satellite.getVar("domain")));
						krux_params.push("page.url=" + encodeURIComponent(_satellite.getVar("destinationURL")));
						break;
					case DTM.events.FORMSUCESS:
						if(data.hasOwnProperty("formAnalysis") && data.formAnalysis.indexOf("cincodias calculadora") == 0){
							krux_params.push("event_id=L51HKfM0");
							krux_params.push("event_type=" + evento);
							krux_params.push("type=" + encodeURIComponent(data.formAnalysis));
						}
						break;
					case DTM.events.EXTERNALLINK:
						if(!data.hasOwnProperty("buttonName") || !data.hasOwnProperty("externalURL") || data.buttonName.indexOf("clasificados") != 0)
							return;
						krux_params.push("event_id=MDggfE1S");
						krux_params.push("event_type=" + evento);
						krux_params.push("link=" + encodeURIComponent(data.externalURL));
						krux_params.push("type=" + encodeURIComponent(data.buttonName));
						break;
					case DTM.events.SALEBUTTON:
						krux_params.push("event_id=MSf8hf7h");
						krux_params.push("event_type=" + evento);
						krux_params.push("tags=" + encodeURIComponent(this.formatListVar(_satellite.getVar("tags"), "name")));
						break;
					case DTM.events.CONC:
						if(!data.hasOwnProperty("redention"))
							return;
						krux_params.push("event_id=MUQkC414");
						krux_params.push("event_type=" + evento);
						krux_params.push("step=" + encodeURIComponent("thankyoupage"));
						krux_params.push("title=" + encodeURIComponent(data.redention));
						break;
					case DTM.events.PHOTOGALLERY:
						//Campaña de marca, quitar en 2 meses
						if(_satellite.getVar("subCategory1").indexOf("especiales>y-tu-que-piensas") == -1)
							return;
						krux_params.push("event_id=MdrWfnf3");
						if(data.hasOwnProperty("photoURL")){
							var format_url = DTM.utils.formatURLEspecial(data.photoURL);
							krux_params.push("pagina=" + format_url["pagina"]);
							krux_params.push("seccion=" + format_url["seccion"]);
							krux_params.push("url=" + encodeURIComponent(data.photoURL));
						}
						break;
					case DTM.events.USERREGISTER:
						//Registros en EP+
						if(_satellite.getVar("subCategory1").indexOf("tematicos>elpaismas") == -1 && _satellite.getVar("primaryCategory") != "suscripciones")
							return;
						krux_params.push("event_id=M8fkDKVT");
						krux_params.push("event_type=" + evento);
						break;
					default:
						return false;
				}
				krux_dl.img.src = krux_dl.src + krux_params.join("&") + "&rnd=" + String(Math.random()).substr(2, 9);
				DTM.notify("", eventID, "Krux");
			}
		},
		comscore:{
			enabled: 1,
			dl: {},
			trackType: -1,
			myStreamingTag: [],
			trackedPV: false,
			init: function(){
				//Enabled
				this.enabled = this.isEnabled();
				//Track type
				this.trackType = DTM.TRACK_TOP;
				//VideoMetrix
				window.myStreamingTag = null;
				if(this.enabled)
					this.loadVideoMetrix();

				//Creación del Data Layer
				this.setDL({
					"id": "8671776",
					"pbn": "PRISA",
					"src": _satellite.getVar("ssl") == "1" ? "https://sb.scorecardresearch.com" : "http://b.scorecardresearch.com",
					"c3": encodeURIComponent("ELPAIS.COM Sites"),
					"c4": encodeURIComponent("ELPAIS.COM"),
					"img": new Image(1,1)
				});
			},
			getDL: function(){
				return this.dl;
			},
			setDL: function(dl){
				this.dl = dl;
			},
			isEnabled: function(){
				var csc_enabled = (typeof DTM.config.csc_enabled != "undefined") ? DTM.config.csc_enabled : DTM.allowAll;
				//No AMP, IA ni Wigdet
				if(csc_enabled && (_satellite.getVar("platform") == DTM.PLATFORM.AMP || _satellite.getVar("platform") == DTM.PLATFORM.FBIA || _satellite.getVar("platform") == DTM.PLATFORM.WIDGET))
					csc_enabled = false;
				return (csc_enabled) ? DTM.TOOL_ENABLED : DTM.TOOL_DISABLED;
			},
			loadVideoMetrix: function(){
				!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.ns_=b(a.ns_)}):"object"==typeof module&&module.exports?module.exports=b():a.ns_=b(a.ns_)}(this,function(a){a=a||{},a.ns_=a;var b={uid:function(){var a=1;return function(){return+new Date+"_"+a++}}(),filter:function(a,b){var c={};for(var d in b)b.hasOwnProperty(d)&&a(b[d])&&(c[d]=b[d]);return c},extend:function(a){var b,c=arguments.length;a=a||{};for(var d=1;d<c;d++)if(b=arguments[d])for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},getString:function(a,b){var c=String(a);return null==a?b||"na":c},getLong:function(a,b){var c=Number(a);return null==a||isNaN(c)?b||0:c},getInteger:function(a,b){var c=Number(parseInt(a));return null==a||isNaN(c)?b||0:c},getBoolean:function(a,b){var c="true"==String(a).toLowerCase();return null==a?b||!1:c},parseBoolean:function(a,b){return b=b||!1,a?"0"!=a&&void 0:b},isNotEmpty:function(a){return!this.isEmpty(a)},isEmpty:function(a){return void 0===a||null===a||""===a||a instanceof Array&&0===a.length},indexOf:function(a,b){var c=-1;return this.forEach(b,function(b,d){b==a&&(c=d)}),c},forEach:function(a,b,c){try{if("function"==typeof b)if(c="undefined"!=typeof c?c:null,"number"!=typeof a.length||"undefined"==typeof a[0]){var d="undefined"!=typeof a.__proto__;for(var e in a)a.hasOwnProperty(e)&&(!d||d&&"undefined"==typeof a.__proto__[e])&&"function"!=typeof a[e]&&b.call(c,a[e],e)}else for(var f=0,g=a.length;f<g;f++)b.call(c,a[f],f)}catch(h){}},regionMatches:function(a,b,c,d,e){if(b<0||d<0||b+e>a.length||d+e>c.length)return!1;for(;--e>=0;){var f=a.charAt(b++),g=c.charAt(d++);if(f!=g)return!1}return!0},size:function(a){var b=0;for(var c in a)a.hasOwnProperty(c)&&b++;return b},log:function(a,b){if("undefined"!=typeof b&&b&&"undefined"!=typeof console&&console){var c=new Date,d=c.getHours()+":"+c.getMinutes()+":"+c.getSeconds();console.log(d,a)}},isTrue:function(a){return"undefined"!=typeof a&&("string"==typeof a?(a=a.toLowerCase(),"true"===a||"1"===a||"on"===a):!!a)},toString:function(a){if("undefined"==typeof a)return"undefined";if("string"==typeof a)return a;if("[object Array]"===Object.prototype.toString.call(a))return a.join(",");if(this.size(a)>0){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}return a.toString()},exists:function(a){return"undefined"!=typeof a&&null!=a},firstGreaterThan0:function(){for(var a=0,b=arguments.length;a<b;a++){var c=arguments[a];if(c>0)return c}return 0},cloneObject:function(a){if(null==a||"object"!=typeof a)return a;var b=function(){function a(){}function b(b){return"object"==typeof b?(a.prototype=b,new a):b}function c(a){for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b])}function d(){this.copiedObjects=[];var a=this;this.recursiveDeepCopy=function(b){return a.deepCopy(b)},this.depth=0}function e(a,b){var c=new d;return b&&(c.maxDepth=b),c.deepCopy(a)}function f(a){return"undefined"!=typeof window&&window&&window.Node?a instanceof Node:"undefined"!=typeof document&&a===document||"number"==typeof a.nodeType&&a.attributes&&a.childNodes&&a.cloneNode}var g=[];return c.prototype={constructor:c,canCopy:function(){return!1},create:function(a){},populate:function(a,b,c){}},d.prototype={constructor:d,maxDepth:256,cacheResult:function(a,b){this.copiedObjects.push([a,b])},getCachedResult:function(a){for(var b=this.copiedObjects,c=b.length,d=0;d<c;d++)if(b[d][0]===a)return b[d][1]},deepCopy:function(a){if(null===a)return null;if("object"!=typeof a)return a;var b=this.getCachedResult(a);if(b)return b;for(var c=0;c<g.length;c++){var d=g[c];if(d.canCopy(a))return this.applyDeepCopier(d,a)}throw new Error("Unable to clone the following object "+a)},applyDeepCopier:function(a,b){var c=a.create(b);if(this.cacheResult(b,c),this.depth++,this.depth>this.maxDepth)throw new Error("Maximum recursion depth exceeded.");return a.populate(this.recursiveDeepCopy,b,c),this.depth--,c}},e.DeepCopier=c,e.deepCopiers=g,e.register=function(a){a instanceof c||(a=new c(a)),g.unshift(a)},e.register({canCopy:function(){return!0},create:function(a){return a instanceof a.constructor?b(a.constructor.prototype):{}},populate:function(a,b,c){for(var d in b)b.hasOwnProperty(d)&&(c[d]=a(b[d]));return c}}),e.register({canCopy:function(a){return a instanceof Array},create:function(a){return new a.constructor},populate:function(a,b,c){for(var d=0;d<b.length;d++)c.push(a(b[d]));return c}}),e.register({canCopy:function(a){return a instanceof Date},create:function(a){return new Date(a)}}),e.register({canCopy:function(a){return f(a)},create:function(a){return"undefined"!=typeof document&&a===document?document:a.cloneNode(!1)},populate:function(a,b,c){if("undefined"!=typeof document&&b===document)return document;if(b.childNodes&&b.childNodes.length)for(var d=0;d<b.childNodes.length;d++){var e=a(b.childNodes[d]);c.appendChild(e)}}}),{deepCopy:e}}();return b.deepCopy(a)},safeGet:function(a,b){return b=this.exists(b)?b:"",this.exists(a)?a:b},getBrowserName:function(){if(!navigator)return"";var a,b,c=navigator.userAgent||"",d=navigator.appName||"";return(b=c.indexOf("Opera"))!=-1||(b=c.indexOf("OPR/"))!=-1?d="Opera":(b=c.indexOf("Android"))!=-1?d="Android":(b=c.indexOf("Chrome"))!=-1?d="Chrome":(b=c.indexOf("Safari"))!=-1?d="Safari":(b=c.indexOf("Firefox"))!=-1?d="Firefox":(b=c.indexOf("IEMobile"))!=-1?d="Internet Explorer Mobile":"Microsoft Internet Explorer"==d||"Netscape"==d?d="Internet Explorer":(a=c.lastIndexOf(" ")+1)<(b=c.lastIndexOf("/"))?(d=c.substring(a,b),d.toLowerCase()==d.toUpperCase()&&(d=navigator.appName)):d="unknown",d},getBrowserFullVersion:function(){if(!navigator)return"";var a,b,c,d,e=navigator.userAgent||"",f=navigator.appName||"",g=navigator.appVersion?""+parseFloat(navigator.appVersion):"";return(b=e.indexOf("Opera"))!=-1?(g=e.substring(b+6),(b=e.indexOf("Version"))!=-1&&(g=e.substring(b+8))):(b=e.indexOf("OPR/"))!=-1?g=e.substring(b+4):(b=e.indexOf("Android"))!=-1?g=e.substring(b+11):(b=e.indexOf("Chrome"))!=-1?g=e.substring(b+7):(b=e.indexOf("Safari"))!=-1?(g=e.substring(b+7),(b=e.indexOf("Version"))!=-1&&(g=e.substring(b+8))):(b=e.indexOf("Firefox"))!=-1?g=e.substring(b+8):"Microsoft Internet Explorer"==f?(d=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),null!=d.exec(e)&&(g=parseFloat(RegExp.$1))):"Netscape"==f?(d=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"),null!=d.exec(e)&&(g=parseFloat(RegExp.$1))):g=e.lastIndexOf(" ")+1<(b=e.lastIndexOf("/"))?e.substring(b+1):"unknown",g=g.toString(),(c=g.indexOf(";"))!=-1&&(g=g.substring(0,c)),(c=g.indexOf(" "))!=-1&&(g=g.substring(0,c)),(c=g.indexOf(")"))!=-1&&(g=g.substring(0,c)),a=parseInt(""+g,10),isNaN(a)&&(g=""+parseFloat(navigator.appVersion)),g},browserAcceptsLargeURLs:function(){return"undefined"==typeof window||(null!==window.ActiveXObject,!0)},getNamespace:function(){return a.ns_||a}};return a.StreamSense=a.StreamSense||function(){var c=function(){var a="cs_";return function(){var c="undefined"!=typeof localStorage?localStorage:null;b.extend(this,{get:function(b){return c&&c.getItem(a+b)},set:function(b,d){c&&c.setItem(a+b,d)},has:function(b){return c&&c.getItem(a+b)},remove:function(b){c&&c.removeItem(a+b)},clear:function(){for(var b=0;c&&b<c.length;++b){var d=c.key(b);d.substr(0,a.length)===a&&c.removeItem(d)}}})}}(),d=function(a,b){if("undefined"==typeof Image)return void("function"==typeof setTimeout?b&&setTimeout(b,0):b&&b());var c=new Image;c.onload=function(){b&&b(200),c=null},c.onerror=function(){b&&b(),c=null},c.src=a},e=function(a,b,c){"function"==typeof setTimeout?c&&setTimeout(function(){c(200)},0):c&&c(200)},f=function(){return{dir:function(){return null},append:function(a,b,c){},write:function(a,b,c){},deleteFile:function(){return!1},read:function(){return null}}}(),g=function(){return{PLATFORM:"generic",httpGet:d,httpPost:e,Storage:c,IO:f,onDataFetch:function(a){a()},getCrossPublisherId:function(){return null},getAppName:function(){return h.UNKNOWN_VALUE},getAppVersion:function(){return h.UNKNOWN_VALUE},getVisitorId:function(){return this.getDeviceName()+ +new Date+~~(1e3*Math.random())},getVisitorIdSuffix:function(){return"72"},getDeviceModel:function(){return h.UNKNOWN_VALUE},getPlatformVersion:function(){return h.UNKNOWN_VALUE},getPlatformName:function(){return"js"},getRuntimeName:function(){return h.UNKNOWN_VALUE},getRuntimeVersion:function(){return h.UNKNOWN_VALUE},getDisplayResolution:function(){return h.UNKNOWN_RESOLUTION},getApplicationResolution:function(){return h.UNKNOWN_RESOLUTION},getLanguage:function(){return h.UNKNOWN_VALUE},getPackageName:function(){return null},isConnectionAvailable:function(){return!0},isCompatible:function(){return!0},autoSelect:function(){},setPlatformAPI:function(){},isCrossPublisherIdChanged:function(){return!1},setTimeout:function(a,b){return setTimeout(a,b)},clearTimeout:function(a){return clearTimeout(a)},getDeviceArchitecture:function(){return h.UNKNOWN_VALUE},getConnectionType:function(){return h.UNKNOWN_VALUE},getDeviceJailBrokenFlag:function(){return h.UNKNOWN_VALUE},isConnSecure:function(){return"s"===document.location.href.charAt(4)},processMeasurementLabels:function(){}}}(),h={UNKNOWN_VALUE:"unknown",UNKNOWN_RESOLUTION:"0x0"};b.jsonObjectToStringDictionary=function(a){var b={};for(var c in a){var d=a[c];null===d||void 0===d?b[c]=d:b[c]=a[c]+""}return b},b.getKeys=function(a,b){var c,d=[];for(c in a)b&&!b.test(c)||!a.hasOwnProperty(c)||(d[d.length]=c);return d},b.fixEventTime=function(a){if(a.ns_ts)return parseInt(a.ns_ts);var b=+new Date;return a.ns_ts=b+"",b},b.isBrowser=function(){return"undefined"!=typeof window&&"undefined"!=typeof document},b.addNewPlaybackInterval=function(a,c,d,e){var f={};if(!(d>=c))return b.cloneObject(a);if(f.start=c,f.end=d,0==a.length)return a.push(f),b.cloneObject(a);var g;for(g=0;g<a.length;g++)if(f.start>=a[g].start&&f.end<=a[g].end)return b.cloneObject(a);var h,i=!1;for(h=0;h<a.length;h++)if(h+1===a.length&&f.start>=a[h].start||f.start>=a[h].start&&f.start<a[h+1].start){a.splice(h+1,0,f),i=!0;break}i||a.splice(0,0,f);var j=[a[0]];for(g=1;g<a.length;g++)j[j.length-1].end+e<a[g].start?j.push(a[g]):j[j.length-1].end<a[g].end&&(j[j.length-1].end=a[g].end);return b.cloneObject(j)};var i=function(){var a=["play","pause","pause-on-buffering","end","buffer","buffer-stop","keep-alive","hb","custom","load","start","skstart","adskip","cta","error","trans","drmfa","drmap","drmde","bitrt","playrt","volume","window","audio","video","subs","cdn"];return{PLAY:0,PAUSE:1,PAUSE_ON_BUFFERING:2,END:3,BUFFER:4,BUFFER_STOP:5,KEEPALIVE:6,HEARTBEAT:7,CUSTOM:8,LOAD:9,ENGAGE:10,SEEK_START:11,AD_SKIP:12,CTA:13,ERROR:14,TRANSFER:15,DRM_FAILED:16,DRM_APPROVED:17,DRM_DENIED:18,BIT_RATE:19,PLAYBACK_RATE:20,VOLUME:21,WINDOW_STATE:22,AUDIO:23,VIDEO:24,SUBS:25,CDN:26,toString:function(b){return a[b]}}}(),j=function(){return{IDLE:0,PLAYBACK_NOT_STARTED:1,PLAYING:2,PAUSED:3,BUFFERING_BEFORE_PLAYBACK:4,BUFFERING_DURING_PLAYBACK:5,BUFFERING_DURING_SEEKING:6,BUFFERING_DURING_PAUSE:7,SEEKING_BEFORE_PLAYBACK:8,SEEKING_DURING_PLAYBACK:9,SEEKING_DURING_BUFFERING:10,SEEKING_DURING_PAUSE:11,PAUSED_DURING_BUFFERING:12}}(),k=function(){var a=["c","s","r"];return{SINGLE_CLIP:0,SEGMENTED:1,REDUCED:2,toString:function(b){return a[b]}}}(),l={STREAMSENSE_VERSION:"5.2.0.160629",MODEL_VERSION:"5.3",DEFAULT_PLAYERNAME:"js_api",DEFAULT_HEARTBEAT_INTERVAL:[{playingtime:6e4,interval:1e4},{playingtime:null,interval:6e4}],DEFAULT_KEEP_ALIVE_INTERVAL:12e5,DEFAULT_PAUSED_ON_BUFFERING_INTERVAL:500,C1_VALUE:"19",C10_VALUE:"js",NS_AP_C12M_VALUE:"1",NS_NC_VALUE:"1",PAGE_NAME_LABEL:"name",RESTRICTED_URL_LENGTH_LIMIT:2048,URL_LENGTH_LIMIT:4096,THROTTLING_DELAY:500,INTERVAL_MERGE_TOLERANCE:500,STANDARD_METADATA_LABELS:["ns_st_ci","ns_st_pr","ns_st_sn","ns_st_en","ns_st_ep","ns_st_ty","ns_st_ct","ns_st_li","ns_st_ad","ns_st_bn","ns_st_tb","ns_st_an","ns_st_ta","ns_st_pu","c3","c4","c6"],LABELS_ORDER:["c1","c2","ca2","cb2","cc2","cd2","ns_site","ca_ns_site","cb_ns_site","cc_ns_site","cd_ns_site","ns_vsite","ca_ns_vsite","cb_ns_vsite","cc_ns_vsite","cd_ns_vsite","ns_alias","ca_ns_alias","cb_ns_alias","cc_ns_alias","cd_ns_alias","ns_ap_an","ca_ns_ap_an","cb_ns_ap_an","cc_ns_ap_an","cd_ns_ap_an","ns_ap_pn","ns_ap_pv","c12","ca12","cb12","cc12","cd12","ns_ak","ns_ap_hw","name","ns_ap_ni","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ca_ns_ap_ver","cb_ns_ap_ver","cc_ns_ap_ver","cd_ns_ap_ver","ns_ap_sv","ns_ap_cv","ns_ap_smv","ns_type","ca_ns_type","cb_ns_type","cc_ns_type","cd_ns_type","ns_radio","ns_nc","cs_partner","cs_xcid","ns_ap_ui","ca_ns_ap_ui","cb_ns_ap_ui","cc_ns_ap_ui","cd_ns_ap_ui","ns_ap_gs","ns_st_sv","ns_st_pv","ns_st_smv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sc","ns_st_psq","ns_st_asq","ns_st_sq","ns_st_ppc","ns_st_apc","ns_st_spc","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_sl","ns_st_pb","ns_st_hc","ns_st_mp","ca_ns_st_mp","cb_ns_st_mp","cc_ns_st_mp","cd_ns_st_mp","ns_st_mv","ca_ns_st_mv","cb_ns_st_mv","cc_ns_st_mv","cd_ns_st_mv","ns_st_pn","ns_st_tp","ns_st_ad","ns_st_li","ns_st_ci","ns_st_si","ns_st_pt","ns_st_dpt","ns_st_ipt","ns_st_et","ns_st_det","ns_st_upc","ns_st_dupc","ns_st_iupc","ns_st_upa","ns_st_dupa","ns_st_iupa","ns_st_lpc","ns_st_dlpc","ns_st_lpa","ns_st_dlpa","ns_st_pa","ns_ap_jb","ns_ap_et","ns_ap_res","ns_ap_sd","ns_ap_po","ns_ap_ot","ns_ap_c12m","cs_c12u","ca_cs_c12u","cb_cs_c12u","cc_cs_c12u","cd_cs_c12u","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_ar","ns_ap_miss","ns_ts","ns_ap_cfg","ns_st_ca","ns_st_cp","ns_st_er","ca_ns_st_er","cb_ns_st_er","cc_ns_st_er","cd_ns_st_er","ns_st_pe","ns_st_ui","ca_ns_st_ui","cb_ns_st_ui","cc_ns_st_ui","cd_ns_st_ui","ns_st_bc","ns_st_dbc","ns_st_bt","ns_st_dbt","ns_st_bp","ns_st_lt","ns_st_skc","ns_st_dskc","ns_st_ska","ns_st_dska","ns_st_skd","ns_st_skt","ns_st_dskt","ns_st_pc","ns_st_dpc","ns_st_pp","ns_st_br","ns_st_pbr","ns_st_rt","ns_st_prt","ns_st_ub","ns_st_vo","ns_st_pvo","ns_st_ws","ns_st_pws","ns_st_ki","ns_st_rp","ns_st_bn","ns_st_tb","ns_st_an","ns_st_ta","ns_st_pl","ns_st_pr","ns_st_sn","ns_st_en","ns_st_ep","ns_st_sr","ns_st_ty","ns_st_ct","ns_st_cs","ns_st_ge","ns_st_st","ns_st_stc","ns_st_ce","ns_st_ia","ns_st_dt","ns_st_ddt","ns_st_tdt","ns_st_tm","ns_st_dtm","ns_st_ttm","ns_st_de","ns_st_pu","ns_st_ti","ns_st_cu","ns_st_fee","ns_st_ft","ns_st_at","ns_st_pat","ns_st_vt","ns_st_pvt","ns_st_tt","ns_st_ptt","ns_st_cdn","ns_st_pcdn","ns_st_ami","ns_st_amt","ns_st_ams","ns_ap_i1","ns_ap_i2","ns_ap_i3","ns_ap_i4","ns_ap_i5","ns_ap_i6","ns_ap_referrer","ns_clid","ns_campaign","ns_source","ns_mchannel","ns_linkname","ns_fee","gclid","utm_campaign","utm_source","utm_medium","utm_term","utm_content","ns_ecommerce","ns_ec_sv","ns_client_id","ns_order_id","ns_ec_cur","ns_orderline_id","ns_orderlines","ns_prod_id","ns_qty","ns_prod_price","ns_prod_grp","ns_brand","ns_shop","ns_category","category","ns_c","ns_search_term","ns_search_result","ns_m_exp","ns_m_chs","c3","ca3","cb3","cc3","cd3","c4","ca4","cb4","cc4","cd4","c5","ca5","cb5","cc5","cd5","c6","ca6","cb6","cc6","cd6","c10","c11","c13","c14","c15","c16","c7","c8","c9","ns_ap_er","ns_st_amc"]},m=function(){function a(){function a(){I={},I.ns_st_pt="0",I.ns_st_bt="0",I.ns_st_bc="0",I.ns_st_pc="0",I.ns_st_cl="0",I.ns_st_pn="1",I.ns_st_tp="1",I.ns_st_skc="0",I.ns_st_et="0",I.ns_st_cn="1",I.ns_st_sc="0",I.ns_st_ska="0",I.ns_st_skd="0",I.ns_st_skt="0",I.ns_st_upc="0",I.ns_st_lpc="0",I.ns_st_upa="0",I.ns_st_lpa="0",I.ns_st_ub="0",I.ns_st_br="0",f=!1,e=!1,d=h.UNKNOWN_VALUE,g=NaN,m=0,j=0,i=NaN,n=NaN,p=0,o=0,k=0,s=NaN,q=[],r=[],t=0,u=0,v=0,w=0,x=0,y=0,z=NaN,A=0,B=!1,C=NaN,F=!1,E=0,H=0,D=0,G=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0}function c(){var a,b,c=0;for(a=0;a<q.length;a++)c+=Math.abs(q[a].end-q[a].start);Q.setUniquePlaybackInterval(c);var d=0;for(a=0;a<q.length;a++)b=Math.abs(q[a].end-q[a].start),b>d&&(d=b);Q.setLongestPlaybackInterval(d);var e=0;for(a=0;a<r.length;a++)e+=Math.abs(r[a].end-r[a].start);Q.setAssetUniquePlaybackInterval(e);var f=0;for(a=0;a<r.length;a++)b=Math.abs(r[a].end-r[a].start),b>f&&(f=b);Q.setAssetLongestPlaybackInterval(f)}var d,e,f,g,i,j,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q=this,R=l.INTERVAL_MERGE_TOLERANCE;b.extend(this,{getHash:function(){return d},setHash:function(a){d=a},setPlaybackIntervalMergeTolerance:function(a){R=a},getPlaybackIntervalMergeTolerance:function(){return R},setLabels:function(a){null!=a&&b.extend(I,a)},getLabels:function(){return I},setLabel:function(a,b){var c={};c[a]=b,Q.setLabels(c)},getLabel:function(a){return I[a]},getClipNumber:function(){return parseInt(Q.getLabel("ns_st_cn"))},setClipNumber:function(a){Q.setLabel("ns_st_cn",a+"")},getPartNumber:function(){return parseInt(Q.getLabel("ns_st_pn"))},createLabels:function(a){var c=a||{};c.ns_st_dbt=Q.getBufferingTime()-A+"",A=Q.getBufferingTime(),c.ns_st_det=Q.getElapsedTime()-o+"",o=Q.getElapsedTime(),c.ns_st_dupc=Q.getUniquePlaybackInterval()-t+"",t=Q.getUniquePlaybackInterval(),parseInt(c.ns_st_dupc)<0&&(c.ns_st_dupc="0");var d;d=b.exists(c.ns_st_upc)?parseInt(c.ns_st_upc):Q.getUniquePlaybackInterval(),c.ns_st_iupc=d-u+"",u=d,parseInt(c.ns_st_iupc)<0&&(c.ns_st_iupc="0"),c.ns_st_dupa=Q.getAssetUniquePlaybackInterval()-v+"",v=Q.getAssetUniquePlaybackInterval(),parseInt(c.ns_st_dupa)<0&&(c.ns_st_dupa="0");var e;e=b.exists(c.ns_st_upa)?parseInt(c.ns_st_upa):Q.getAssetUniquePlaybackInterval(),c.ns_st_iupa=e-w+"",w=e,parseInt(c.ns_st_iupa)<0&&(c.ns_st_iupa="0"),c.ns_st_dlpc=Q.getLongestPlaybackInterval()-x+"",x=Q.getLongestPlaybackInterval(),parseInt(c.ns_st_dlpc)<0&&(c.ns_st_dlpc="0"),c.ns_st_dlpa=Q.getAssetLongestPlaybackInterval()-y+"",y=Q.getAssetLongestPlaybackInterval(),parseInt(c.ns_st_dlpa)<0&&(c.ns_st_dlpa="0");var g;return g=b.exists(c.ns_st_pt)?parseInt(c.ns_st_pt):Q.getPlaybackTime(),c.ns_st_ipt=g-k+"",k=g,c.ns_st_dpt=Q.getPlaybackTime()-j+"",j=Q.getPlaybackTime(),c.ns_st_dpc=Q.getPauses()-J+"",J=Q.getPauses(),c.ns_st_dskc=Q.getSeeks()-K+"",K=Q.getSeeks(),c.ns_st_dbc=Q.getBuffers()-L+"",L=Q.getBuffers(),c.ns_st_dskt=Q.getSeekingTime()-D+"",D=Q.getSeekingTime(),c.ns_st_dska=Q.getSeekingAmount()-G+"",G=Q.getSeekingAmount(),b.extend(c,Q.getLabels()),Q.setSeekingDirection(0),f&&(c.ns_st_spc=M+"",c.ns_st_apc=N+"",c.ns_st_sq=O+"",c.ns_st_asq=P+""),f||b.parseBoolean(c.ns_st_sc)||(c.ns_st_sc="1"),c},getVideoTrack:function(){return Q.getLabel("ns_st_vt")},setVideoTrack:function(a){Q.setLabel("ns_st_vt",a+"")},getAudioTrack:function(){return Q.getLabel("ns_st_at")},setAudioTrack:function(a){Q.setLabel("ns_st_at",a+"")},getSubtitleTrack:function(){return Q.getLabel("ns_st_tt")},setSubtitleTrack:function(a){Q.setLabel("ns_st_tt",a+"")},getCDN:function(){return Q.getLabel("ns_st_cdn")},setCDN:function(a){Q.setLabel("ns_st_cdn",a+"")},getClipPlaybackIntervals:function(){return q},setClipPlaybackIntervals:function(a){q=a},getAssetPlaybackIntervals:function(){return r},getUniquePlaybackInterval:function(){return parseInt(Q.getLabel("ns_st_upc"))},getAssetUniquePlaybackInterval:function(){return parseInt(Q.getLabel("ns_st_upa"))},setAssetUniquePlaybackInterval:function(a){Q.setLabel("ns_st_upa",a+"")},setUniquePlaybackInterval:function(a){Q.setLabel("ns_st_upc",a+"")},getLongestPlaybackInterval:function(){return parseInt(Q.getLabel("ns_st_lpc"))},setLongestPlaybackInterval:function(a){Q.setLabel("ns_st_lpc",a+"")},getAssetLongestPlaybackInterval:function(){return parseInt(Q.getLabel("ns_st_lpa"))},setAssetLongestPlaybackInterval:function(a){Q.setLabel("ns_st_lpa",a+"")},incrementPauses:function(){Q.setLabel("ns_st_pc",Q.getPauses()+1+"")},incrementSeeks:function(){Q.setLabel("ns_st_skc",Q.getSeeks()+1+"")},incrementPlayCounter:function(){O++},getPlayCounter:function(){return O},getBufferingTime:function(){return parseInt(Q.getLabel("ns_st_bt"))},setBufferingTime:function(a){Q.setLabel("ns_st_bt",a+"")},addBufferingTime:function(a){if(!isNaN(z)){var b=Q.getBufferingTime();b+=a-z,Q.setBufferingTime(b),z=NaN}},setPlaybackStartPosition:function(a){s=parseInt(a)},getPlaybackStartPosition:function(){return s},addInterval:function(a){isNaN(s)||isNaN(a)||(q=b.addNewPlaybackInterval(q,s,a,R),r=b.addNewPlaybackInterval(r,s,a,R),c(),s=NaN)},getElapsedTime:function(){return parseInt(Q.getLabel("ns_st_et"))},setElapsedTime:function(a){Q.setLabel("ns_st_et",a+"")},addElapsedTime:function(a){if(!isNaN(n)){var b=Q.getElapsedTime();b+=a-n,Q.setElapsedTime(b),n=NaN}},getElapsedTimestamp:function(){return n},setElapsedTimestamp:function(a){n=a},addPlaybackTime:function(a){if(!isNaN(g)){var b=Q.getPlaybackTime();b+=a-g,Q.setPlaybackTime(b),g=NaN}},getPlaybackTime:function(){return parseInt(Q.getLabel("ns_st_pt"))},getExpectedPlaybackPosition:function(a){return isNaN(g)||(m+=a-g),m},setPlaybackTimeOffset:function(a){m=a},getPlaybackTimeOffset:function(){return m},setPlaybackTime:function(a){Q.setLabel("ns_st_pt",a+"")},getPlaybackTimestamp:function(){return g},setPlaybackTimestamp:function(a){g=a},setPreviousPlaybackTime:function(a){j=a},setPreviousPlaybackTimestamp:function(a){i=a},getBufferingTimestamp:function(){return z},setBufferingTimestamp:function(a){z=a},getPauses:function(){return parseInt(Q.getLabel("ns_st_pc"))},setPauses:function(a){Q.setLabel("ns_st_pc",a+"")},getSeeks:function(){return parseInt(Q.getLabel("ns_st_skc"))},setSeeks:function(a){Q.setLabel("ns_st_skc",a+"")},setSeeking:function(a){B=a},isSeeking:function(){return B},setCollectingSeekingTime:function(a){F=a},isCollectingSeekingTime:function(){return F},setClipStarted:function(a){e=a},isClipStarted:function(){return e},setPlaybackStarted:function(a){f=a},isPlaybackStarted:function(){return f},setSeekingTimestamp:function(a){C=a},getSeekingTimestamp:function(){return C},addSeekingTime:function(a){if(!isNaN(C)){var b=Q.getSeekingTime();b+=a-C,Q.setSeekingTime(b),C=NaN}},getSeekingTime:function(){return parseInt(Q.getLabel("ns_st_skt"))},setSeekingTime:function(a){Q.setLabel("ns_st_skt",a+"")},setSeekingTimeBeforeEnd:function(a){H=a},getSeekingTimeBeforeEnd:function(){return H},setSeekStartPosition:function(a){E=a},getSeekStartPosition:function(){return E},setSeekingAmount:function(a){Q.setLabel("ns_st_ska",a+"")},getSeekingAmount:function(){return parseInt(Q.getLabel("ns_st_ska"))},addSeekingAmount:function(a){var b=Q.getSeekingAmount();b+=Math.abs(a-E),Q.setSeekingAmount(b);var c;E==a?c=0:E>a?c=-1:E<a&&(c=1),Q.setSeekingDirection(c),E=0},getSeekingDirection:function(){return parseInt(Q.getLabel("ns_st_skd"))},setSeekingDirection:function(a){Q.setLabel("ns_st_skd",a+"")},resetClipLifecycleLabels:function(){I.ns_st_pt="0",j=0,k=0,I.ns_st_bt="0",A=0,I.ns_st_bc="0",L=0,I.ns_st_pc="0",J=0,O=0,I.ns_st_upa="0",v=0,w=0,I.ns_st_et="0",o=0,I.ns_st_lpa="0",y=0,I.ns_st_skt="0",D=0,I.ns_st_ska="0",G=0,I.ns_st_skc="0",K=0},incrementSegmentPlaybackCounter:function(){M++},incrementClipLoadCounter:function(){Q.setLabel("ns_st_sc",Q.getClipLoadCounter()+1+"")},incrementAssetPlaybackCounter:function(){N++},setPreviousUniquePlaybackInterval:function(a){t=a},setPreviousEventIndependentUniquePlaybackInterval:function(a){u=a},setPreviousLongestPlaybackInterval:function(a){x=a},resetAssetPlaybackCounters:function(){r=[],Q.setAssetUniquePlaybackInterval(0),v=0,w=0,Q.setAssetLongestPlaybackInterval(0),y=0},setSegmentPlaybackCounter:function(a){M=a},setClipLoadCounter:function(a){Q.setLabel("ns_st_sc",a+"")},setAssetPlaybackCounter:function(a){N=a},setLowestPartNumberPlayed:function(a){p=a},getSegmentPlaybackCounter:function(){return M},getClipLoadCounter:function(){return parseInt(Q.getLabel("ns_st_sc"))},getAssetPlaybackCounter:function(){return N},getLowestPartNumberPlayed:function(){return p},getBuffers:function(){return parseInt(Q.getLabel("ns_st_bc"))},incrementBufferCount:function(){Q.setLabel("ns_st_bc",Q.getBuffers()+1+"")},getPreviousBufferingTime:function(){return A},setPlaySequenceCounter:function(a){P=a},incrementPlaySequenceCounter:function(){P++},getPlaySequenceCounter:function(){return P}}),a()}return a.resetClip=function(a,b,c){for(var d=a.getLabels(),e={},f=0;c&&f<c.length;++f)d.hasOwnProperty(c[f])&&(e[c[f]]=d[c[f]]);b.setLabels(e),b.setPlaybackIntervalMergeTolerance(a.getPlaybackIntervalMergeTolerance())},a}(),n=function(){function a(){function a(){c=new m,f={},f.ns_st_bp="0",f.ns_st_pa="0",f.ns_st_pp="0",f.ns_st_sp="1",f.ns_st_id=+new Date+"",d=NaN,e=NaN,h={},i=0,g=!1,j=!1,k=0,l=0}var c,d,e,f,g,h,i,j,k,l,n=this;b.extend(this,{resetClip:function(){var a=c;c=new m,m.resetClip(a,c)},hashExists:function(a){return null!=h[a]},storeHash:function(a){h[a]={}},removeHash:function(a){delete h[a]},storeClipPlaybackCounters:function(){for(var a in h)if(h.hasOwnProperty(a)&&h[a].clipNumber===c.getClipNumber()){b.extend(h[a],{segmentPlaybackCounter:c.getSegmentPlaybackCounter(),clipLoadCounter:c.getClipLoadCounter(),assetPlaybackCounter:c.getAssetPlaybackCounter(),lowestPartNumberPlayed:c.getLowestPartNumberPlayed(),seeking:c.isSeeking(),seekingTimeBeforeEnd:c.getSeekingTimeBeforeEnd(),seekingStartPosition:c.getSeekStartPosition(),clipPlaybackIntervals:c.getClipPlaybackIntervals(),uniquePlaybackInterval:c.getUniquePlaybackInterval(),longestPlaybackInterval:c.getLongestPlaybackInterval(),playSequenceCounter:c.getPlaySequenceCounter(),videoTrack:c.getVideoTrack(),audioTrack:c.getAudioTrack(),subtitleTrack:c.getSubtitleTrack(),cdn:c.getCDN()});break}},getStoredClipRegisters:function(a){return h[a]},getClipNumber:function(a){return h[a].clipNumber},getMaxClipNumber:function(){return i},storeClipNumber:function(a,b){h[a].clipNumber=b,b>i&&(i=b)},setLabels:function(a){null!=a&&b.extend(f,a)},getLabels:function(){return f},setLabel:function(a,b){var c={};c[a]=b,n.setLabels(c)},getLabel:function(a){return f[a]},getClip:function(){return c},createLabels:function(a){var d=a||{};return j||(d.ns_st_pb=null!=d.ns_st_pb?d.ns_st_pb:"1"),b.extend(d,n.getLabels()),c.isPlaybackStarted()&&(d.ns_st_ppc=k+"",d.ns_st_psq=l+""),d},incrementPlayCounter:function(){n.setLabel("ns_st_sp",parseInt(n.getLabel("ns_st_sp"))+1+"")},incrementPauses:function(){n.setLabel("ns_st_pp",n.getPauses()+1+"")},addPlaybackTime:function(a){if(!isNaN(e)){var b=n.getPlaybackTime();b+=a-e,n.setPlaybackTime(b),e=NaN}},addBufferingTime:function(a){if(!isNaN(d)){var b=n.getBufferingTime();b+=a-d,n.setBufferingTime(b),d=NaN}},getBufferingTime:function(){return parseInt(n.getLabel("ns_st_bp"))},setBufferingTime:function(a){n.setLabel("ns_st_bp",a+"")},getPlaybackTime:function(){return parseInt(n.getLabel("ns_st_pa"))},setBufferingTimestamp:function(a){d=a},getBufferingTimestamp:function(){return d},setPlaybackTime:function(a){n.setLabel("ns_st_pa",a+"")},setPlaybackTimestamp:function(a){e=a},getPlaybackTimestamp:function(){return e},getPauses:function(){return parseInt(n.getLabel("ns_st_pp"))},setPauses:function(a){n.setLabel("ns_st_pp",a+"")},isPlaylistStarted:function(){return g},setPlaylistStarted:function(a){g=a},getPlaybackCounter:function(){return k},incrementPlaybackCounter:function(){k++},setFirstEventSent:function(a){j=a},setPlaySequenceCounter:function(a){l=a},incrementPlaySequenceCounter:function(){l++}}),a()}return a.resetPlaylist=function(b,c,d){for(var e=b.getClip(),f=b.getLabels(),g={},h=0;d&&h<d.length;h++)f.hasOwnProperty(d[h])&&(g[d[h]]=f[d[h]]);c=new a,c.setLabels(g),m.resetClip(e,c.getClip(),d)},a}(),o=function(){return function(a){function c(){e=1}function d(c){f=b.extend({},c);var d=a.getSSECore().getPixelURL();if(a.getAppCore()){if(a.getSSECore().isProperlyInitialized()){var e=a.getSSECore().getExports().et;if("function"==typeof a.getAppCore().getMeasurementDispatcher){var g=a.getAppCore().getMeasurementDispatcher();g.send(e.HIDDEN,c,d)}else{var h=a.getSSECore().getExports().am,i=h.newApplicationMeasurement(a.getAppCore(),e.HIDDEN,c,d);a.getAppCore().getQueue().offer(i)}}}else d&&a.getSSECore().getPlatformAPI().httpGet(a.getSSECore().prepareUrl(d,c))}var e,f,g=this;b.extend(this,{newEvent:function(a){d(a.eventLabels),a.eventType!=i.HEARTBEAT&&g.incrementEventCounter()},getEventCounter:function(){return e},incrementEventCounter:function(){e++},setEventCounter:function(a){e=a},getMeasurementSnapshot:function(){return f}}),c()}}(),p=function(){return function(a){function c(){g=0,h=0}function d(){h++;var c={},d=b.fixEventTime(c);c.ns_st_po=a.getPlaylist().getClip().getPlaybackTimeOffset()+d-a.getPlaylist().getClip().getPlaybackTimestamp()+"",c.ns_st_pa=a.getPlaylist().getPlaybackTime()+d-a.getPlaylist().getPlaybackTimestamp()+"",c.ns_st_pt=a.getPlaylist().getClip().getPlaybackTime()+d-a.getPlaylist().getClip().getPlaybackTimestamp()+"",c.ns_st_dpt=d-a.getPlaylist().getClip().getPlaybackTimestamp()+"",a.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK?(c.ns_st_bp=a.getPlaylist().getBufferingTime()+d-a.getPlaylist().getBufferingTimestamp()+"",c.ns_st_bt=a.getPlaylist().getClip().getBufferingTime()+d-a.getPlaylist().getClip().getBufferingTimestamp()+"",c.ns_st_dbt=d-a.getPlaylist().getClip().getBufferingTimestamp()+""):c.ns_st_dbt=a.getPlaylist().getClip().getBufferingTime()-a.getPlaylist().getClip().getPreviousBufferingTime()+"",c.ns_st_et=a.getPlaylist().getClip().getElapsedTime()+d-a.getPlaylist().getClip().getElapsedTimestamp()+"",c.ns_st_det=d-a.getPlaylist().getClip().getElapsedTimestamp()+"";var e=b.cloneObject(a.getPlaylist().getClip().getClipPlaybackIntervals()),f=b.cloneObject(a.getPlaylist().getClip().getAssetPlaybackIntervals());e=b.addNewPlaybackInterval(e,a.getPlaylist().getClip().getPlaybackStartPosition(),parseInt(c.ns_st_po),a.getPlaylist().getClip().getPlaybackIntervalMergeTolerance()),f=b.addNewPlaybackInterval(f,a.getPlaylist().getClip().getPlaybackStartPosition(),parseInt(c.ns_st_po),a.getPlaylist().getClip().getPlaybackIntervalMergeTolerance());var l,m,n=0;for(l=0;l<e.length;l++)n+=Math.abs(e[l].end-e[l].start);c.ns_st_upc=n+"",c.ns_st_dupc=n-a.getPlaylist().getClip().getUniquePlaybackInterval()+"";var o=0;for(l=0;l<e.length;l++)m=Math.abs(e[l].end-e[l].start),m>o&&(o=m);c.ns_st_lpc=o+"",c.ns_st_dlpc=o-a.getPlaylist().getClip().getLongestPlaybackInterval()+"";var p=0;for(l=0;l<f.length;l++)p+=Math.abs(f[l].end-f[l].start);c.ns_st_upa=p+"",c.ns_st_dupa=p-a.getPlaylist().getClip().getAssetUniquePlaybackInterval()+"";var q=0;for(l=0;l<f.length;l++)m=Math.abs(f[l].end-f[l].start),m>q&&(q=m);c.ns_st_lpa=q+"",c.ns_st_dlpa=q-a.getPlaylist().getClip().getAssetLongestPlaybackInterval()+"",c.ns_st_hc=a.getHeartbeat().getCount()+"";var r=a.getSSECore().createLabels(i.HEARTBEAT,c,d);a.getEventManager().newEvent(r),g=0,k.resume()}function e(){null!=f&&(a.getSSECore().getPlatformAPI().clearTimeout(f),f=null)}var f,g,h,k=this,m=l.DEFAULT_HEARTBEAT_INTERVAL;b.extend(this,{getCount:function(){return h},setIntervals:function(a){m=a},getInterval:function(a){var b=0;if(null!=m)for(var c=0;c<m.length;c++){var d=m[c],e=d.playingtime;if(!e||a<e){b=d.interval;break}}return b},getIntervals:function(){return m},resume:function(){e();var b=k.getInterval(a.getPlaylist().getClip().getPlaybackTime()+(+new Date-a.getPlaylist().getClip().getPlaybackTimestamp()));if(b>0){var c=g>0?g:b;f=a.getSSECore().getPlatformAPI().setTimeout(d,c)}g=0},pause:function(){e();var b=k.getInterval(a.getPlaylist().getClip().getPlaybackTime()+(+new Date-a.getPlaylist().getClip().getPlaybackTimestamp()));g=b-(a.getPlaylist().getClip().getPlaybackTime()+(+new Date-a.getPlaylist().getClip().getPlaybackTimestamp()))%b}}),c()}}(),q=function(){return function(a){function c(){}function d(){var c={},d=b.fixEventTime(c);c.ns_st_po=a.getPlaylist().getClip().getExpectedPlaybackPosition(d)+"",a.getPlaylist().addPlaybackTime(d),a.getPlaylist().setPlaybackTimestamp(d),a.getPlaylist().getClip().addPlaybackTime(d),a.getPlaylist().getClip().setPlaybackTimestamp(d),a.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK&&(a.getPlaylist().addBufferingTime(d),
				a.getPlaylist().setBufferingTimestamp(d),a.getPlaylist().getClip().addBufferingTime(d),a.getPlaylist().getClip().setBufferingTimestamp(d)),a.getPlaylist().getClip().addElapsedTime(d),a.getPlaylist().getClip().setElapsedTimestamp(d),a.getPlaylist().getClip().addInterval(parseInt(c.ns_st_po)),a.getPlaylist().getClip().setPlaybackStartPosition(parseInt(c.ns_st_po));var e=a.getSSECore().createLabels(i.KEEPALIVE,c,d);a.getEventManager().newEvent(e),g.resume()}function e(){null!=f&&(a.getSSECore().getPlatformAPI().clearTimeout(f),f=null)}var f,g=this,h=l.DEFAULT_KEEP_ALIVE_INTERVAL;b.extend(g,{resume:function(){e(),f=a.getSSECore().getPlatformAPI().setTimeout(d,h)},pause:function(){e()},setInterval:function(a){h=a},getInterval:function(){return h}}),c()}}(),r=function(){return function(a){function c(){f=j.IDLE,e=null,d=NaN}var d,e,f,g=this;b.extend(g,{eventTypeToState:function(a){if(f==j.IDLE){if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK}else if(f==j.PLAYBACK_NOT_STARTED){if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK;if(a==i.END||a==i.AD_SKIP)return j.IDLE}else if(f==j.PLAYING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.BUFFER)return j.BUFFERING_DURING_PLAYBACK;if(a==i.PAUSE)return j.PAUSED;if(a==i.SEEK_START)return j.SEEKING_DURING_PLAYBACK}else if(f==j.PAUSED){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.BUFFER)return j.BUFFERING_DURING_PAUSE;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_DURING_PAUSE}else if(f==j.BUFFERING_BEFORE_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PLAYBACK_NOT_STARTED;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_BEFORE_PLAYBACK}else if(f==j.BUFFERING_DURING_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY||a==i.BUFFER_STOP)return j.PLAYING;if(a==i.PAUSE_ON_BUFFERING)return j.PAUSED_DURING_BUFFERING;if(a==i.SEEK_START)return j.SEEKING_DURING_BUFFERING;if(a==i.PAUSE)return j.PAUSED}else if(f==j.BUFFERING_DURING_SEEKING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.BUFFER_STOP)return j.SEEKING_DURING_PLAYBACK;if(a==i.PAUSE)return j.PAUSED}else if(f==j.BUFFERING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.SEEK_START)return j.SEEKING_DURING_PAUSE;if(a==i.BUFFER_STOP||a==i.PAUSE)return j.PAUSED}else if(f==j.SEEKING_BEFORE_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PAUSE)return j.PLAYBACK_NOT_STARTED;if(a==i.PLAY)return j.PLAYING;if(a==i.BUFFER)return j.BUFFERING_BEFORE_PLAYBACK}else if(f==j.SEEKING_DURING_PLAYBACK){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE)return j.PAUSED;if(a==i.BUFFER)return j.BUFFERING_DURING_SEEKING}else if(f==j.SEEKING_DURING_BUFFERING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PAUSED}else if(f==j.SEEKING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.PLAY)return j.PLAYING;if(a==i.PAUSE||a==i.BUFFER_STOP)return j.PAUSED;if(a==i.BUFFER)return j.BUFFERING_DURING_PAUSE}else if(f==j.PAUSED_DURING_BUFFERING){if(a==i.END||a==i.AD_SKIP)return j.IDLE;if(a==i.SEEK_START)return j.SEEKING_DURING_BUFFERING;if(a==i.PAUSE)return j.PAUSED;if(a==i.PLAY||a==i.BUFFER_STOP)return j.PLAYING}return null},getCurrentState:function(){return f},newEvent:function(a,b){var c=g.eventTypeToState(a);f!=c&&(e=f,f=c,d=b)},getPreviousState:function(){return e},getLastStateChangeTimestamp:function(){return d}}),c()}}(),s=function(){return function(a){var c=this;b.extend(c,{onSeekStartWhenPausedOrBufferingDuringPause:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().isCollectingSeekingTime()||(a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().getClip().setCollectingSeekingTime(!0)):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onBufferWhenSeekingOrPlayBackNotStartedOrPaused:function(b,c){a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b)},onPlayWhenSeekingDuringBufferingOrSeekingDuringPause:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)},onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b)},onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause:function(b,c){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause:function(b,c){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))}})}}(),t=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBufferStop:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().isCollectingSeekingTime()||(a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().getClip().setCollectingSeekingTime(!0)):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().setPlaySequenceCounter(0),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()+"",a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),u=function(){return function(a){var c=this;b.extend(c,{onEndAndSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b)},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),v=function(){return function(a){var c=this;b.extend(c,{onPauseOnBuffering:function(b,c){var d=parseInt(c.ns_st_po);a.getSSECore().stopPausedOnBufferingTimer(),a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e),a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b),a.getPlaylist().getClip().setPlaybackTimeOffset(d)},onBufferStop:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b)},onEndOrAdSkip:function(c,d){var e=parseInt(d.ns_st_po);a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addPlaybackTime(c),a.getPlaylist().getClip().addElapsedTime(c),a.getPlaylist().getClip().addInterval(e);var f=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(f),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)},onPause:function(b,c){var d=parseInt(c.ns_st_po);a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)},onPlay:function(b,c){a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().addBufferingTime(b)}})}}(),w=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getSSECore().stopPausedOnBufferingTimer(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses(),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),x=function(){return function(a){var c=this;b.extend(c,{onBuffer:function(b,c){a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()),a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()),a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b)},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().setSeekingTime(a.getPlaylist().getClip().getSeekingTimeBeforeEnd()),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabel("ns_st_pn"))<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabel("ns_st_pn"))),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().setPlaySequenceCounter(0),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()+"",a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),y=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),z=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addBufferingTime(c),a.getPlaylist().getClip().addBufferingTime(c),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBufferStop:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().isCollectingSeekingTime()||(a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().getClip().setCollectingSeekingTime(!0)):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onPause:function(b,c){a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().addBufferingTime(b),a.getPlaylist().getClip().addBufferingTime(b),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),A=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()?a.getPlaylist().getClip().setSeekingTimestamp(b):a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().isSeeking()||(a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().setPlaySequenceCounter(0),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()+"",a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),B=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){var e=parseInt(d.ns_st_po);a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(c),a.getPlaylist().getClip().addPlaybackTime(c),a.getPlaylist().getClip().addElapsedTime(c),a.getPlaylist().getClip().addInterval(e);var f=a.getSSECore().createLabels(i.END,d,c);a.getEventManager().newEvent(f),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onBuffer:function(b,c){a.getSSECore().isPauseOnBufferingEnabled()&&a.getSSECore().startPausedOnBufferingTimer(b,c),a.getPlaylist().getClip().incrementBufferCount(),a.getPlaylist().setBufferingTimestamp(b),a.getPlaylist().getClip().setBufferingTimestamp(b)},onSeekStart:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().getClip().incrementSeeks(),a.getPlaylist().getClip().setSeeking(!0),a.getPlaylist().getClip().setCollectingSeekingTime(!0),a.getPlaylist().getClip().setSeekStartPosition(d),a.getPlaylist().getClip().setSeekingTimestamp(b),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)},onPause:function(b,c){var d=parseInt(c.ns_st_po);a.getHeartbeat().pause(),a.getSSECore().resetKeepAlive(),a.getPlaylist().addPlaybackTime(b),a.getPlaylist().getClip().addPlaybackTime(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().addInterval(d),a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses();var e=a.getSSECore().createLabels(i.PAUSE,c,b);a.getEventManager().newEvent(e)}})}}(),C=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPause:function(b,c){a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().isPlaylistStarted()||(a.getPlaylist().setPlaylistStarted(!0),a.getPlaylist().incrementPlaybackCounter()),a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().setClipStarted(!0),a.getPlaylist().getClip().setPlaybackStarted(!0),a.getPlaylist().getClip().incrementSegmentPlaybackCounter(),(0==a.getPlaylist().getClip().getLowestPartNumberPlayed()||parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)<=a.getPlaylist().getClip().getLowestPartNumberPlayed())&&(a.getPlaylist().getClip().setLowestPartNumberPlayed(parseInt(a.getPlaylist().getClip().getLabels().ns_st_pn)),a.getPlaylist().getClip().incrementAssetPlaybackCounter(),a.getPlaylist().getClip().setPlaySequenceCounter(0),a.getPlaylist().getClip().resetAssetPlaybackCounters()),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()+"",a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),D=function(){return function(a){var c=this;b.extend(c,{onPause:function(b,c){a.getPlaylist().incrementPauses(),a.getPlaylist().getClip().incrementPauses(),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1))}})}}(),E=function(){return function(a){var c=this;b.extend(c,{onEndOrAdSkip:function(c,d){parseInt(d.ns_st_po);a.getSSECore().resetHeartbeat(),a.getSSECore().resetKeepAlive(),a.getPlaylist().getClip().addElapsedTime(c);var e=a.getSSECore().createLabels(i.END,d,c);
				a.getEventManager().newEvent(e),a.getPlaylist().getClip().isSeeking()&&a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().setSeekingTimeBeforeEnd(c-a.getPlaylist().getClip().getSeekingTimestamp()),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().storeClipPlaybackCounters(),a.getPlaylist().getClip().resetClipLifecycleLabels(),a.getPlaylist().getClip().setPlaybackStarted(!1),d.hasOwnProperty("ns_st_pe")&&b.parseBoolean(d.ns_st_pe,!1)&&a.getSSECore().resetPlaylist()},onPlay:function(b,c){var d=parseInt(c.ns_st_po);a.getPlaylist().incrementPlaySequenceCounter(),a.getPlaylist().getClip().incrementPlaySequenceCounter(),a.getPlaylist().getClip().isSeeking()&&(a.getPlaylist().getClip().isCollectingSeekingTime()&&(a.getPlaylist().getClip().addSeekingTime(b),a.getPlaylist().getClip().setCollectingSeekingTime(!1)),a.getPlaylist().getClip().addSeekingAmount(d),a.getPlaylist().getClip().setSeeking(!1)),a.getPlaylist().getClip().incrementPlayCounter(),a.getPlaylist().setPlaybackTimestamp(b),a.getPlaylist().getClip().setPlaybackTimestamp(b),a.getPlaylist().getClip().addElapsedTime(b),a.getPlaylist().getClip().setElapsedTimestamp(b),a.getPlaylist().getClip().setPlaybackStartPosition(d),a.getSSECore().isLoadingTimeSent()||(c.ns_st_lt=a.getSSECore().getLoadTimeOffset()+b-a.getSSECore().getInitTimestamp()+"",a.getSSECore().setLoadingTimeSent(!0)),a.getHeartbeat().resume(),a.getKeepAlive().resume();var e=a.getSSECore().createLabels(i.PLAY,c,b);a.getEventManager().newEvent(e)}})}}(),F=function(){return function(){function a(){m=new G(ba),b.getNamespace().comScore?(ca=b.getNamespace().comScore.exports,m.setAppCore(ca.c())):m.setAppCore(null),m.setKeepAlive(new q(m)),m.setHeartbeat(new p(m)),m.setEventManager(new o(m)),m.setStateMachine(new r),m.setPlaylist(new n),_={},F=new x(m),H=new y(m),I=new A(m),J=new B(m),K=new t(m),L=new v(m),M=new w(m),N=new u(m),O=new z(m),P=new C(m),Q=new D(m),R=new E(m),S=new s(m),T=!1,U=0,V=+new Date,W=!0,Y=!1,$=[]}function c(a){var b=m.getStateMachine().getCurrentState();if(b==j.IDLE||b==j.PLAYBACK_NOT_STARTED||b==j.BUFFERING_BEFORE_PLAYBACK||b==j.SEEKING_BEFORE_PLAYBACK){if(a==i.PLAY)return!0}else if(b==j.PLAYING){if(a==i.END||a==i.AD_SKIP||a==i.SEEK_START||a==i.PAUSE)return!0}else if(b==j.PAUSED||b==j.BUFFERING_DURING_PAUSE||b==j.SEEKING_DURING_PLAYBACK||b==j.SEEKING_DURING_BUFFERING||b==j.SEEKING_DURING_PAUSE){if(a==i.END||a==i.AD_SKIP||a==i.PLAY)return!0}else if(b==j.BUFFERING_DURING_PLAYBACK){if(a==i.PAUSE_ON_BUFFERING||a==i.END||a==i.AD_SKIP||a==i.SEEK_START||a==i.PAUSE||a==i.PLAY)return!0}else if(b==j.BUFFERING_DURING_SEEKING){if(a==i.END||a==i.AD_SKIP||a==i.PAUSE||a==i.PLAY)return!0}else if(b==j.PAUSED_DURING_BUFFERING&&(a==i.END||a==i.AD_SKIP||a==i.BUFFER_STOP||a==i.PLAY))return!0;return!1}function d(a,b,d){var e=m.getStateMachine().getCurrentState();a==i.AD_SKIP&&!d.hasOwnProperty("ns_st_ui")&&c(a)?d.ns_st_ui="skip":a==i.SEEK_START&&!d.hasOwnProperty("ns_st_ui")&&c(a)&&(d.ns_st_ui="seek"),e==j.IDLE?a==i.BUFFER?F.onBuffer(b,d):a==i.SEEK_START?F.onSeekStart(b,d):a==i.PLAY&&F.onPlay(b,d):e==j.PLAYBACK_NOT_STARTED?a==i.END||a==i.AD_SKIP?I.onEndOrAdSkip(b,d):a==i.SEEK_START?I.onSeekStart(b,d):a==i.PLAY?I.onPlay(b,d):a==i.BUFFER&&S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):e==j.PLAYING?a==i.END||a==i.AD_SKIP?J.onEndOrAdSkip(b,d):a==i.BUFFER?J.onBuffer(b,d):a==i.SEEK_START?J.onSeekStart(b,d):a==i.PAUSE&&J.onPause(b,d):e==j.PAUSED?a==i.END||a==i.AD_SKIP?H.onEndOrAdSkip(b,d):a==i.PLAY?H.onPlay(b,d):a==i.BUFFER?S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.SEEK_START&&S.onSeekStartWhenPausedOrBufferingDuringPause(b,d):e==j.BUFFERING_BEFORE_PLAYBACK?a==i.END||a==i.AD_SKIP?K.onEndOrAdSkip(b,d):a==i.BUFFER_STOP?K.onBufferStop(b,d):a==i.SEEK_START?K.onSeekStart(b,d):a==i.PAUSE?K.onPause(b,d):a==i.PLAY&&K.onPlay(b,d):e==j.BUFFERING_DURING_PLAYBACK?a==i.PAUSE_ON_BUFFERING?L.onPauseOnBuffering(b,d):a==i.BUFFER_STOP?L.onBufferStop(b,d):a==i.END||a==i.AD_SKIP?L.onEndOrAdSkip(b,d):a==i.SEEK_START?L.onSeekStart(b,d):a==i.PAUSE?L.onPause(b,d):a==i.PLAY&&L.onPlay(b,d):e==j.BUFFERING_DURING_SEEKING?a==i.END||a==i.AD_SKIP?M.onEndOrAdSkip(b,d):a==i.PAUSE?M.onPause(b,d):a==i.PLAY?M.onPlay(b,d):a==i.BUFFER_STOP&&S.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b,d):e==j.BUFFERING_DURING_PAUSE?a==i.END||a==i.AD_SKIP?N.onEndAndSkip(b,d):a==i.PAUSE?N.onPause(b,d):a==i.PLAY?N.onPlay(b,d):a==i.SEEK_START?S.onSeekStartWhenPausedOrBufferingDuringPause(b,d):a==i.BUFFER_STOP&&S.onBufferStopWhenBufferingDuringSeekingOrBufferingDuringPause(b,d):e==j.SEEKING_BEFORE_PLAYBACK?a==i.END||a==i.AD_SKIP?P.onEndOrAdSkip(b,d):a==i.PAUSE?P.onPause(b,d):a==i.PLAY?P.onPlay(b,d):a==i.BUFFER&&S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):e==j.SEEKING_DURING_PLAYBACK?a==i.END||a==i.AD_SKIP?R.onEndOrAdSkip(b,d):a==i.PLAY?R.onPlay(b,d):a==i.BUFFER?S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.PAUSE&&S.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b,d):e==j.SEEKING_DURING_BUFFERING?a==i.PAUSE?Q.onPause(b,d):a==i.BUFFER?S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.PLAY?S.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.END||a==i.AD_SKIP?S.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.BUFFER_STOP&&S.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):e==j.PAUSED_DURING_BUFFERING?a==i.END||a==i.AD_SKIP?O.onEndOrAdSkip(b,d):a==i.BUFFER_STOP?O.onBufferStop(b,d):a==i.SEEK_START?O.onSeekStart(b,d):a==i.PAUSE?O.onPause(b,d):a==i.PLAY&&O.onPlay(b,d):e==j.SEEKING_DURING_PAUSE&&(a==i.BUFFER?S.onBufferWhenSeekingOrPlayBackNotStartedOrPaused(b,d):a==i.PLAY?S.onPlayWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.PAUSE?S.onPauseWhenSeekingDuringPlaybackOrSeekingDuringPause(b,d):a==i.END||a==i.AD_SKIP?S.onEndOrAdSkipWhenSeekingDuringBufferingOrSeekingDuringPause(b,d):a==i.BUFFER_STOP&&S.onBufferStopWhenSeekingDuringBufferingOrSeekingDuringPause(b,d)),c(a)&&m.getPlaylist().setFirstEventSent(!0)}function e(a,c){var d=a||"",e="undefined",f=fa.comScore||fa.sitestat||function(a){var c,d,f,g,h,i="comScore=",j=ga.cookie,k="",m="indexOf",n="substring",o="length",p=b.browserAcceptsLargeURLs()?l.URL_LENGTH_LIMIT:l.RESTRICTED_URL_LENGTH_LIMIT,q="&ns_",r="&",s=fa.encodeURIComponent||escape;if(j[m](i)+1)for(g=0,f=j.split(";"),h=f[o];g<h;g++)d=f[g][m](i),d+1&&(k=r+unescape(f[g][n](d+i[o])));a+=q+"_t="+ +new Date+q+"c="+(ga.characterSet||ga.defaultCharset||"")+k,a.length>p&&a.indexOf(r)>0&&(c=a.substr(0,p-8).lastIndexOf(r),a=(a.substring(0,c)+q+"cut="+s(a.substring(c+1))).substr(0,p)),ba.getPlatformAPI().httpGet(a),typeof ns_p===e&&(ns_p={src:a}),ns_p.lastMeasurement=a};if(typeof c!==e){var g=[],h=fa.encodeURIComponent||escape;for(var i in c)c.hasOwnProperty(i)&&g.push(h(i)+"="+h(c[i]));/[\?\&]$/.test(d)||(d+="&"),d+=g.join("&")}return f(d)}function f(a,c){for(var d,e=fa.encodeURIComponent||escape,f=[],g=l.LABELS_ORDER,h=a.split("?"),i=h[0],j=h[1],k=j.split("&"),m=0,n=k.length;m<n;m++){var o=k[m].split("="),p=unescape(o[0]),q=unescape(o[1]);p&&(c[p]=q)}for(var r={},s=0,t=g.length;s<t;s++){var u=g[s];if(c.hasOwnProperty(u)){var v=c[u];"undefined"!=typeof v&&null!=v&&(r[u]=!0,f.push(e(u)+"="+e(c[u])))}}for(var w in c)if(c.hasOwnProperty(w)){if(r[w])continue;var x=c[w];"undefined"!=typeof x&&null!=x&&f.push(e(w)+"="+e(c[w]))}d=i+"?"+f.join("&"),d=d+(d.indexOf("&c8=")<0?"&c8="+e(ga.title):"")+(d.indexOf("&c7=")<0?"&c7="+e(ga.URL):"")+(d.indexOf("&c9=")<0?"&c9="+e(ga.referrer):"");var y=b.browserAcceptsLargeURLs()?l.URL_LENGTH_LIMIT:l.RESTRICTED_URL_LENGTH_LIMIT;if(d.length>y&&d.indexOf("&")>0){var z=d.substr(0,y-8).lastIndexOf("&");d=(d.substring(0,z)+"&ns_cut="+e(d.substring(z+1))).substr(0,y)}return d}var m,F,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba=this,ca={},da=l.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,ea=l.THROTTLING_DELAY;b.extend(ba,{createLabels:function(a,c,d){var e={};if("undefined"!=typeof document){var f=document;e.c7=f.URL,e.c8=f.title,e.c9=f.referrer}return null!=c&&b.extend(e,c),e.ns_ts=null!=e.ns_ts?e.ns_ts:+new Date+"",e.ns_st_ev=null!=e.ns_st_ev?e.ns_st_ev:i.toString(a),e.ns_st_mp=null!=e.ns_st_mp?e.ns_st_mp:l.DEFAULT_PLAYERNAME,e.ns_st_mv=null!=e.ns_st_mv?e.ns_st_mv:l.STREAMSENSE_VERSION,e.ns_st_ub=null!=e.ns_st_ub?e.ns_st_ub:"0",e.ns_st_br=null!=e.ns_st_br?e.ns_st_br:"0",e.ns_st_pn=null!=e.ns_st_pn?e.ns_st_pn:"1",e.ns_st_tp=null!=e.ns_st_tp?e.ns_st_tp:"1",e.ns_st_it=null!=e.ns_st_it?e.ns_st_it:k.toString(k.SINGLE_CLIP),e.ns_st_sv=null!=e.ns_st_sv?e.ns_st_sv:l.STREAMSENSE_VERSION,e.ns_st_smv=null!=e.ns_st_smv?e.ns_st_smv:l.MODEL_VERSION,e.ns_type=null!=e.ns_type?e.ns_type:"hidden",e.ns_st_ec=null!=e.ns_st_ec?e.ns_st_ec:m.getEventManager().getEventCounter()+"",e.ns_st_po=null!=e.ns_st_po?e.ns_st_po:m.getPlaylist().getPlaylist().getClip().getExpectedPlaybackPosition(d)+"",e.ns_st_ki=null!=e.ns_st_ki?e.ns_st_ki:m.getKeepAlive().getInterval()+"",m.getPlaylist().createLabels(e),m.getPlaylist().getClip().createLabels(e),b.extend(e,ba.getLabels()),b.extend(e,c),{eventType:a,eventLabels:e}},newEvent:function(a,b,c,e){ba.stopDelayedTransitionTimer();var f=m.getStateMachine().getCurrentState(),g=m.getStateMachine().eventTypeToState(a);if(null!=g&&g!=f)if(!ba.isThrottlingEnabled()||f!=j.PLAYING&&f!=j.PAUSED||g!=j.PLAYING&&g!=j.PAUSED||e){c.ns_st_po||(m.getStateMachine().getCurrentState()==j.PLAYING&&a==i.BUFFER||m.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK&&a==i.BUFFER_STOP?c.ns_st_po=m.getPlaylist().getClip().getPlaybackTimeOffset()+(b-m.getPlaylist().getClip().getPlaybackTimestamp())+"":c.ns_st_po=m.getPlaylist().getClip().getExpectedPlaybackPosition(b)+""),d(a,b,c);var h=0;isNaN(m.getStateMachine().getLastStateChangeTimestamp())||(h=b-m.getStateMachine().getLastStateChangeTimestamp()),m.getStateMachine().newEvent(a,b);for(var k=0,l=$.length;k<l;k++)$[k](f,g,c,h)}else Z=m.getPlatformAPI().setTimeout(function(a,c,d){return function(){ba.newEvent(a,b,d,!0)}}(a,g,c),ea)},newPseudoEvent:function(a,b,c){if(a!=i.LOAD&&a!=i.ENGAGE||m.getStateMachine().getCurrentState()==j.IDLE){a!=i.ERROR||c.ns_st_er||(c.ns_st_er=h.UNKNOWN_VALUE),m.getStateMachine().getCurrentState()!=j.IDLE&&m.getStateMachine().getCurrentState()!=j.PLAYBACK_NOT_STARTED&&m.getStateMachine().getCurrentState()!=j.SEEKING_BEFORE_PLAYBACK&&m.getStateMachine().getCurrentState()!=j.BUFFERING_BEFORE_PLAYBACK&&(m.getPlaylist().getClip().addElapsedTime(b),m.getPlaylist().getClip().setElapsedTimestamp(b));var d,e,f,g=!0,k=!1;switch(a){case i.BIT_RATE:d="ns_st_br",e="ns_st_pbr",k=!0;break;case i.PLAYBACK_RATE:d="ns_st_rt",e="ns_st_prt",k=!0;break;case i.VOLUME:d="ns_st_vo",e="ns_st_pvo",k=!0;break;case i.WINDOW_STATE:d="ns_st_ws",e="ns_st_pws",k=!0;break;case i.AUDIO:d="ns_st_at",e="ns_st_pat",k=!1;break;case i.VIDEO:d="ns_st_vt",e="ns_st_pvt",k=!1;break;case i.SUBS:d="ns_st_tt",e="ns_st_ptt",k=!1;break;case i.CDN:d="ns_st_cdn",e="ns_st_pcdn",k=!1;break;default:g=!1}if(g&&c.hasOwnProperty(d)&&(k?(ba.getLabels().hasOwnProperty(d)&&(f=ba.getLabels()[d],c[e]=f),ba.setLabel(d,c[d])):(m.getPlaylist().getClip().getLabels().hasOwnProperty(d)&&(f=m.getPlaylist().getClip().getLabels()[d],c[e]=f),m.getPlaylist().getClip().setLabel(d,c[d]))),!g||m.getStateMachine().getCurrentState()==j.PLAYING||m.getStateMachine().getCurrentState()==j.BUFFERING_DURING_PLAYBACK){c.ns_st_po||(c.ns_st_po=m.getPlaylist().getClip().getExpectedPlaybackPosition(b)+""),m.getStateMachine().getCurrentState()!=j.PLAYING&&m.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK||(m.getPlaylist().addPlaybackTime(b),m.getPlaylist().setPlaybackTimestamp(b),m.getPlaylist().getClip().addPlaybackTime(b),m.getPlaylist().getClip().setPlaybackTimestamp(b),m.getPlaylist().getClip().addInterval(parseInt(c.ns_st_po)),m.getPlaylist().getClip().setPlaybackStartPosition(parseInt(c.ns_st_po))),m.getStateMachine().getCurrentState()!=j.BUFFERING_BEFORE_PLAYBACK&&m.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PAUSE&&m.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_PLAYBACK&&m.getStateMachine().getCurrentState()!=j.BUFFERING_DURING_SEEKING||(m.getPlaylist().addBufferingTime(b),m.getPlaylist().setBufferingTimestamp(b),m.getPlaylist().getClip().addBufferingTime(b),m.getPlaylist().getClip().setBufferingTimestamp(b));var l=ba.createLabels(a,c,b);m.getEventManager().newEvent(l)}}},getState:function(){return m.getStateMachine().getCurrentState()},addListener:function(a){$.push(a)},removeListener:function(a){$.splice(b.indexOf(a,$),1)},getLabel:function(a){return _[a]},getLabels:function(){return _},setLabel:function(a,b){null==b?delete _[a]:_[a]=b},setLabels:function(a){for(var b in a)a.hasOwnProperty(b)&&ba.setLabel(b,a[b])},getPlatformAPI:function(){return m.getAppCore()?m.getAppCore().getPlatformAPI():g},getExports:function(){return ca},isProperlyInitialized:function(){var a=m.getAppCore().getAppContext(),b=m.getAppCore().getSalt(),c=m.getAppCore().getPixelURL();return a&&c&&b},setImplementationType:function(a){m.getStateMachine().getCurrentState()!=j.IDLE||a!=k.SINGLE_CLIP&&a!=k.SEGMENTED&&a!=k.REDUCED||m.getPlaylist().setLabel("ns_st_it",k.toString(a))},setThrottlingDelay:function(a){ea=a},getThrottlingDelay:function(){return ea},isThrottlingEnabled:function(){return Y},setThrottlingEnabled:function(a){Y=a},isLoadingTimeSent:function(){return T},setLoadingTimeSent:function(a){T=a},getLoadTimeOffset:function(){return U},setLoadTimeOffset:function(a){U=a},getInitTimestamp:function(){return V},setPauseOnBufferingInterval:function(a){da=a},getPauseOnBufferingInterval:function(){return da},isPauseOnBufferingEnabled:function(){return W},setPauseOnBufferingEnabled:function(a){W=a},startPausedOnBufferingTimer:function(a,c){ba.stopPausedOnBufferingTimer(),X=ba.getPlatformAPI().setTimeout(function(){var d={},e=b.fixEventTime(d),f=parseInt(c.ns_st_po);d.ns_st_po=f+e-a+"",ba.newEvent(i.PAUSE_ON_BUFFERING,e,d)},da)},stopPausedOnBufferingTimer:function(){null!=X&&(ba.getPlatformAPI().clearTimeout(X),X=null)},stopDelayedTransitionTimer:function(){Z&&(ba.getPlatformAPI().clearTimeout(Z),Z=null)},setPixelURL:function(a){if(null==a||0==a.length)return null;var b=decodeURIComponent||unescape,c=a.indexOf("?");if(c>=0){if(c<a.length-1){for(var d=a.substring(c+1).split("&"),e=0,f=d.length;e<f;e++){var g=d[e],h=g.split("=");2==h.length?ba.setLabel(h[0],b(h[1])):1==h.length&&ba.setLabel(l.PAGE_NAME_LABEL,b(h[0]))}a=a.substring(0,c+1)}}else a+="?";return aa=a},getPixelURL:function(){return aa?aa:"undefined"!=typeof ns_p&&"string"==typeof ns_p.src?aa=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):"string"==typeof ns_pixelUrl?aa=ns_pixelUrl.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):null},getSseSM:function(){return m},resetPlaylist:function(a){var b=m.getPlaylist();m.setPlaylist(new n),n.resetPlaylist(b,m.getPlaylist(),a)},resetHeartbeat:function(){m.getHeartbeat().pause();var a=m.getHeartbeat().getIntervals();m.setHeartbeat(new p(m)),m.getHeartbeat().setIntervals(a)},resetKeepAlive:function(){m.getKeepAlive().pause();var a=m.getKeepAlive().getInterval();m.setKeepAlive(new q(m)),m.getKeepAlive().setInterval(a)}});var fa,ga;b.isBrowser()?(fa=window,ga=document):(fa={},ga={location:{href:""},title:"",URL:"",referrer:"",cookie:""}),b.extend(ba,{prepareUrl:f,viewNotify:e}),a()}}(),G=function(){return function(a){var c,d,e,f,g,h,i=this;b.extend(i,{getAppCore:function(){return c},getSSECore:function(){return a},getEventManager:function(){return d},getStateMachine:function(){return e},getHeartbeat:function(){return f},getKeepAlive:function(){return g},getPlaylist:function(){return h},setAppCore:function(a){c=a},setKeepAlive:function(a){g=a},setHeartbeat:function(a){f=a},setEventManager:function(a){d=a},setStateMachine:function(a){e=a},setPlaylist:function(a){h=a}})}}(),H=function(){return function(a,c){function d(){h=new F,g=!0,a&&k.setLabels(a),c&&k.setPixelURL(c)}function e(a,b){k.notify(i.CUSTOM,a,b)}function f(){g&&h.getSseSM().getStateMachine().getCurrentState()!=j.IDLE&&k.end()}var g,h,k=this,m=l.STANDARD_METADATA_LABELS;b.extend(this,{isProperlyInitialized:function(){return h.isProperlyInitialized()},reset:function(a){var b=h;b.getSseSM().getKeepAlive().pause(),b.getSseSM().getHeartbeat().pause(),h=new F,n.resetPlaylist(b.getSseSM().getPlaylist(),h.getSseSM().getPlaylist(),a)},setPauseOnBufferingInterval:function(a){h.setPauseOnBufferingInterval(a)},getPauseOnBufferingInterval:function(){return h.getPauseOnBufferingInterval()},setKeepAliveInterval:function(a){h.getSseSM().getKeepAlive().setInterval(a)},getKeepAliveInterval:function(){return h.getSseSM().getKeepAlive().getInterval()},setHeartbeatIntervals:function(a){h.getSseSM().getHeartbeat().setIntervals(a)},play:function(a,b){k.notify(i.PLAY,a,b)},pause:function(a,b){k.notify(i.PAUSE,a,b)},end:function(a,b){k.notify(i.END,a,b)},bufferStart:function(a,b){k.notify(i.BUFFER,a,b)},bufferStop:function(a,b){k.notify(i.BUFFER_STOP,a,b)},load:function(a,b){k.notify(i.LOAD,a,b)},engage:function(a,b){k.notify(i.ENGAGE,a,b)},seekStart:function(a,b){k.notify(i.SEEK_START,a,b)},skipAd:function(a,b){k.notify(i.AD_SKIP,a,b)},callToAction:function(a,b){k.notify(i.CTA,a,b)},error:function(a,b){k.notify(i.ERROR,a,b)},transferPlayback:function(a,b){k.notify(i.TRANSFER,a,b)},drmFail:function(a,b){k.notify(i.DRM_FAILED,a,b)},drmApprove:function(a,b){k.notify(i.DRM_APPROVED,a,b)},drmDeny:function(a,b){k.notify(i.DRM_DENIED,a,b)},changeBitrate:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_br=a+"",k.notify(i.BIT_RATE,d,b)}},changePlaybackRate:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_rt=a+"",k.notify(i.PLAYBACK_RATE,d,b)}},changeVolume:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_vo=a+"",k.notify(i.VOLUME,d,b)}},changeWindowState:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_ws=a+"",k.notify(i.WINDOW_STATE,d,b)}},changeAudio:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_at=a+"",k.notify(i.AUDIO,d,b)}},changeVideo:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_vt=a+"",k.notify(i.VIDEO,d,b)}},changeSubtitle:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_tt=a+"",k.notify(i.SUBS,d,b)}},changeCDN:function(a,b,c){if(null!=a){var d=c||{};d.ns_st_cdn=a+"",k.notify(i.CDN,d,b)}},notify:function(a){var c,d;if(c="object"==typeof arguments[1]?arguments[1]:"object"==typeof arguments[2]?arguments[2]:{},d="number"==typeof arguments[1]?arguments[1]:"number"==typeof arguments[2]?arguments[2]:NaN,i.toString(a)){c=b.jsonObjectToStringDictionary(c);var e=b.fixEventTime(c);c.ns_st_po||isNaN(d)||(c.ns_st_po=b.getInteger(d,0)+""),c.ns_st_po&&h.getSseSM().getPlaylist().getClip().setPlaybackTimeOffset(parseInt(c.ns_st_po)),a==i.PLAY||a==i.PAUSE||a==i.BUFFER||a==i.END||a==i.SEEK_START||a==i.AD_SKIP||a==i.BUFFER_STOP?h.newEvent(a,e,c):h.newPseudoEvent(a,e,c)}},getLabels:function(){return h.getLabels()},getState:function(){return h.getSseSM().getStateMachine().getCurrentState()},setLabels:function(a){h.setLabels(a)},getLabel:function(a){return h.getLabel(a)},setLabel:function(a,b){h.setLabel(a,b)},getLoadTimeOffset:function(){return h.getLoadTimeOffset()},setLoadTimeOffset:function(a){h.setLoadTimeOffset(a)},setPixelURL:function(a){return h.setPixelURL(a)},getPixelURL:function(){return h.getPixelURL()},setImplementationType:function(a){h.setImplementationType(a)},isPauseOnBufferingEnabled:function(){return h.isPauseOnBufferingEnabled()},setPauseOnBufferingEnabled:function(a){h.setPauseOnBufferingEnabled(a)},isThrottlingEnabled:function(){return h.isThrottlingEnabled()},setThrottlingEnabled:function(a){h.setThrottlingEnabled(a)},setThrottlingDelay:function(a){h.setThrottlingDelay(a)},getThrottlingDelay:function(){return h.getThrottlingDelay()},setPlaybackIntervalMergeTolerance:function(a){h.getSseSM().getPlaylist().getClip().setPlaybackIntervalMergeTolerance(a)},getPlaybackIntervalMergeTolerance:function(){return h.getSseSM().getPlaylist().getClip().getPlaybackIntervalMergeTolerance()},setClip:function(a,c,d){if(void 0===d&&(d=!0),a=b.jsonObjectToStringDictionary(a),d&&h.getSseSM().getStateMachine().getCurrentState()!==j.IDLE&&k.end(),h.getSseSM().getStateMachine().getCurrentState()==j.IDLE){var e="",f=0;if(null!=a.ns_st_cn)e=a.ns_st_cn;else for(var g=0;g<m.length;g++)a[m[g]]&&(e+=m[g]+":"+a[m[g]]+";");var i=h.getSseSM().getPlaylist(),l=i.getClip();l.isClipStarted()?(i.hashExists(l.getHash())||(i.storeHash(l.getHash()),i.storeClipNumber(l.getHash(),l.getClipNumber())),i.storeClipPlaybackCounters(),f=i.hashExists(e)?i.getClipNumber(e):b.exists(a.ns_st_cn)?parseInt(a.ns_st_cn):i.getMaxClipNumber()+1):f=i.hashExists(e)?i.getClipNumber(e):l.getClipNumber(),i.resetClip(),l=i.getClip(),l.setHash(e),l.setClipNumber(f),l.setLabels(a);var n=i.getStoredClipRegisters(e);return n&&(l.setClipStarted(!0),l.setSegmentPlaybackCounter(n.segmentPlaybackCounter),l.setClipLoadCounter(n.clipLoadCounter),l.setAssetPlaybackCounter(n.assetPlaybackCounter),l.setLowestPartNumberPlayed(n.lowestPartNumberPlayed),l.setSeeking(n.seeking),l.setSeekingTimeBeforeEnd(n.seekingTimeBeforeEnd),l.setSeekStartPosition(n.seekingStartPosition),l.setClipPlaybackIntervals(n.clipPlaybackIntervals),l.setUniquePlaybackInterval(n.uniquePlaybackInterval),l.setLongestPlaybackInterval(n.longestPlaybackInterval),l.setVideoTrack(n.videoTrack),l.setAudioTrack(n.audioTrack),l.setSubtitleTrack(n.subtitleTrack),l.setCDN(n.cdn),l.setPlaySequenceCounter(n.playSequenceCounter),l.setPreviousUniquePlaybackInterval(n.uniquePlaybackInterval),l.setPreviousEventIndependentUniquePlaybackInterval(n.uniquePlaybackInterval),l.setPreviousLongestPlaybackInterval(n.longestPlaybackInterval)),l.incrementClipLoadCounter(),l.isClipStarted()&&c&&(i.incrementPlayCounter(),i.incrementPlaybackCounter()),c&&i.setPlaySequenceCounter(0),!0}return!1},setPlaylist:function(a,c){return void 0===c&&(c=!0),a=b.jsonObjectToStringDictionary(a),c&&h.getSseSM().getStateMachine().getCurrentState()!==j.IDLE&&k.end(),h.getSseSM().getStateMachine().getCurrentState()==j.IDLE&&(h.getSseSM().getPlaylist().isPlaylistStarted()&&h.resetPlaylist(),h.getSseSM().getPlaylist().setLabels(a),!0)},importState:function(){},exportState:function(){return{}},getVersion:function(){return l.STREAMSENSE_VERSION},addListener:function(a){h.addListener(a)},removeListener:function(a){h.removeListener(a)},getClip:function(){return h.getSseSM().getPlaylist().getClip()},getPlaylist:function(){return h.getSseSM().getPlaylist()},setHttpGet:function(a){"function"==typeof a&&(h.getPlatformAPI().httpGet=a)},setHttpPost:function(a){"function"==typeof a&&(h.getPlatformAPI().httpPost=a)},setExitEndEventEnabled:function(a){g=a},isExitEndEventEnabled:function(){return g},getPlatformAPI:function(){return h.getPlatformAPI()}}),b.extend(k,{customNotify:e,viewNotify:function(a,b){a=a||k.getPixelURL(),a&&h.viewNotify(a,b)}}),b.isBrowser()&&(window.addEventListener?(window.addEventListener("beforeunload",f),window.addEventListener("unload",f)):window.attachEvent&&(window.attachEvent("onbeforeunload",f),window.attachEvent("onunload",f))),d()}}();return function(c){function d(a,b){return x[z]||f(a,b)}function e(){z=-1;for(var b=0;b<=y;b++)if(x.hasOwnProperty(b+"")){z=b;break}return a.StreamSense.activeIndex=z,z}function f(b,c){return b=b||null,c=c||null,b&&"object"==typeof b&&(c=b,b=null),x[++y]=new a.StreamSense(c,b),e(),x[y]}function g(){var b=!1,c=z;if("number"==typeof arguments[0]&&isFinite(arguments[0]))c=arguments[0];else if(arguments[0]instanceof a.StreamSense)for(var d in x)if(x.hasOwnProperty(d)&&x[d]===arguments[0]){c=d;break}return x.hasOwnProperty(c+"")&&(b=x[c],delete x[c],b.reset(),e()),b}function h(a){return a=a||{},d().setPlaylist(a),d().getPlaylist()}function i(a,b,c){return a=a||{},"number"==typeof b&&(a.ns_st_cn=b+""),d().setClip(a,c),d().getClip()}function j(a,b,c){return"undefined"!=typeof a&&(c=c||null,b=b||{},d().notify(a,b,c))}function k(a){"undefined"!=typeof a&&d().setLabels(a)}function l(){return d().getLabels()}function m(a){"undefined"!=typeof a&&d().getPlaylist().setLabels(a)}function n(){return d().getPlaylist().getLabels()}function o(a){"undefined"!=typeof a&&d().getClip().setLabels(a)}function p(){return d().getClip().getLabels()}function q(a){return d().reset(a||{})}function r(a){return d().getPlaylist().reset(a||{})}function s(a){return d().getClip().reset(a||{})}function t(a){return a=a||{},d().viewNotify(null,a)}function u(a,b){return arguments.length>2&&(a=arguments[1],b=arguments[2]),a=a||{},"number"==typeof b&&(a.ns_st_po=b+""),d().customNotify(a,b)}function v(){return d().exportState()}function w(a){d().importState(a)}var x={},y=-1,z=-1;b.extend(c,{activeIndex:z,newInstance:f,"new":f,destroyInstance:g,destroy:g,newPlaylist:h,newClip:i,notify:j,setLabels:k,getLabels:l,setPlaylistLabels:m,getPlaylistLabels:n,setClipLabels:o,getClipLabels:p,resetInstance:q,resetPlaylist:r,resetClip:s,viewEvent:t,customEvent:u,exportState:v,importState:w})}(H),H.PlayerEvents=i,H.InternalStates=j,H.ImplementationType=k,H}(),a.StreamingTag=a.StreamingTag||function(){var c=a.StreamSense,d=(a.StreamSense.PlayerEvents,a.StreamSense.InternalStates||null),e=a.StreamSense.ImplementationType||null,f=null!=a.StreamSense.InternalStates&&null!=a.StreamSense.ImplementationType;return function(){var a={LongFormOnDemand:"12",ShortFormOnDemand:"11",Live:"13",UserGeneratedLongFormOnDemand:"22",UserGeneratedShortFormOnDemand:"21",UserGeneratedLive:"23",Bumper:"99",Other:"00"},g={LinearOnDemandPreRoll:"11",LinearOnDemandMidRoll:"12",LinearOnDemandPostRoll:"13",LinearLive:"21",BrandedOnDemandPreRoll:"31",BrandedOnDemandMidRoll:"32",BrandedOnDemandPostRoll:"33",BrandedOnDemandContent:"34",BrandedOnDemandLive:"35",Other:"00"},h=function(a){function g(){if(f)if(b.getNamespace().comScore)q=new c,q.setImplementationType(e.REDUCED);else if(b.exists(a))if(r=b.isTrue(a.debug),b.exists(a.customerC2)&&a.customerC2.length>0){var d=a.secure?"https://sb":"http"+("s"==document.location.href.charAt(4)?"s://sb":"://b");q=new c,q.setPixelURL(d+".scorecardresearch.com/p?c1=2"),q.setLabel("c2",a.customerC2),q.setImplementationType(e.REDUCED)}else r&&console&&console.log("Warning: customerC2 is not provided (or incorrect) in the StreamingTag configuration.")}function h(a){b.exists(a)||(a={});for(var c in t)t.hasOwnProperty(c)&&!b.exists(a[t[c]])&&("ns_st_ci"==t[c]?a.ns_st_ci="0":a[t[c]]="*null");return a}function i(a){for(var b in t)if(t.hasOwnProperty(b)&&!j(t[b],o,a))return!1;return!0}function j(a,c,d){if(b.exists(a)&&b.exists(c)&&b.exists(d)){var e=c[a],f=d[a];return b.exists(e)&&b.exists(f)&&e===f}return!1}function k(a){n++;var c={ns_st_cn:n+"",ns_st_pn:"1",ns_st_tp:"0"};b.extend(c,a),q.setClip(c),o=a,q.play()}function l(a){n++,a=h(a);var c={ns_st_cn:n+"",ns_st_pn:"1",ns_st_tp:"1",ns_st_ad:"1"};b.extend(c,a),q.setClip(c),q.play(),p=!1}function m(a,b){a=h(a),u==s.None&&(u=b),p&&u==b&&i(a)?(q.getClip().setLabels(a),q.getState()!=d.PLAYING&&q.play()):k(a),p=!0,u=b}var n=0,o=null,p=!1,q=null,r=!1,s={None:0,AudioContent:1,VideoContent:2},t=["ns_st_ci","c3","c4","c6","ns_st_st","ns_st_pu","ns_st_pr","ns_st_ep","ns_st_sn","ns_st_en","ns_st_ct"],u=s.None;b.extend(this,{playAdvertisement:function(){if(q){r&&console&&console.warn("Calling deprecated function 'playAdvertisement'. Please call 'playVideoAdvertisement' or 'playAudioAdvertisement' functions instead.");var a={ns_st_ct:"va"};l(a)}},playVideoAdvertisement:function(a,c){if(q){var d={ns_st_ct:"va"};c?d.ns_st_ct="va"+c:r&&console&&console.warn("Calling 'playVideoAdvertisement' without specifying the media type as a second parameter."),a&&b.extend(d,a),l(d)}},playAudioAdvertisement:function(a,c){if(q){var d={ns_st_ct:"aa"};c?d.ns_st_ct="aa"+c:r&&console&&console.warn("Calling 'playAudioAdvertisement' without specifying the media type as a second parameter."),a&&b.extend(d,a),l(d)}},playContentPart:function(a){if(q){r&&console&&console.warn("Calling deprecated function 'playContentPart'. Please call 'playVideoContentPart' or 'playAudioContentPart' functions instead.");var c={ns_st_ct:"vc"};a&&b.extend(c,a),m(c,s.VideoContent)}},playVideoContentPart:function(a,c){if(q){var d={ns_st_ct:"vc"};c?d.ns_st_ct="vc"+c:r&&console&&console.warn("Calling 'playVideoContentPart' without specifying the media type as a second parameter."),a&&b.extend(d,a),m(d,s.VideoContent)}},playAudioContentPart:function(a,c){if(q){var d={ns_st_ct:"ac"};c?d.ns_st_ct="ac"+c:r&&console&&console.warn("Calling 'playAudioContentPart' without specifying the media type as a second parameter."),a&&b.extend(d,a),m(d,s.AudioContent)}},stop:function(){q&&q.pause()}}),g()};return function(a){}(h),h.ContentType=a,h.AdType=g,h}()}(),a});

				window.ns_ = this.ns_;
			},
			trackPV: function(){
				if(this.enabled != DTM.TOOL_ENABLED)
					return false;

				var comscore_dl = this.getDL();
				window._comscore = window._comscore || [];
				window._comscore.push({ c1: "2", c2: comscore_dl.id });
				(function() {
					function udm_(e,t){var n="comScore=",r=document,i=r.cookie,s="",o="indexOf",u="substring",a="length",f=2048,l,c="&ns_",h="&",p,d,v,m,g=window,y=g.encodeURIComponent||escape;if(i[o](n)+1)for(v=0,d=i.split(";"),m=d[a];v<m;v++)p=d[v][o](n),p+1&&(s=h+unescape(d[v][u](p+n[a])));e+=c+"_t="+ +(new Date)+c+"c="+(r.characterSet||r.defaultCharset||"")+(g===g.top?"":c+"if=1")+"&cv=3.1e&c8="+y(r.title)+s+"&c7="+y(r.URL)+"&c9="+y(r.referrer),e[a]>f&&e[o](h)>0&&(l=e[u](0,f-8).lastIndexOf(h),e=(e[u](0,l)+c+"cut="+y(e[u](l+1)))[u](0,f)),r.images?(p=new Image,g.ns_p||(ns_p=p),typeof t=="function"&&(p.onload=p.onerror=t),p.src=e):r.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">")}typeof _comscore=="undefined"&&(_comscore=[]),function(){var e="length",t=window,n=t.encodeURIComponent?encodeURIComponent:escape,r,i=function(t){if(t){var r,i=[],s,o=0,u,a,f="";for(var l in t){s=typeof t[l];if(s=="string"||s=="number")i[i[e]]=l+"="+n(t[l]),l=="c2"?f=t[l]:l=="c1"&&(o=1)}if(i[e]<=0||f=="")return;a=t.options||{},a.d=a.d||document;if(typeof a.url_append=="string"){u=a.url_append.replace(/&amp;/,"&").split("&");for(var l=0,c=u[e],h;l<c;l++)h=u[l].split("="),h[e]==2&&(i[i[e]]=h[0]+"="+n(h[1]))}r=[a.d.URL.charAt(4)=="s"?"//sb":"//b",".scorecardresearch.com/b?",o?"":"c1=2&",i.join("&").replace(/&$/,"")],udm_(r.join(""))}},s=function(t){t=t||_comscore;for(var n=0,r=t[e];n<r;n++)i(t[n]);t=_comscore=[]};s(),(r=t.COMSCORE)?(r.purge=s,r.beacon=i):COMSCORE={purge:s,beacon:i}}();
				})();
				this.trackedPV = true;
			},
			trackEvent: function(eventID){
				if(this.enabled == DTM.TOOL_DISABLED)
					return;

				var comscore_dl = this.getDL();

				//Event from data layer
				if(typeof _satellite.getVar("event")[eventID] == "undefined"){
					DTM.notify("ComScore event past not valid <" + eventType + ">");
					return;
				}
				var eventType = _satellite.getVar("event")[eventID].eventInfo.eventName;
				var data = _satellite.getVar("event")[eventID].attributes;

				switch(eventType){
					case DTM.events.PHOTOGALLERY:
						if(typeof data.photogalleryExternal != "undefined")
							data["photoURL"] = document.location.protocol + "//" + document.location.hostname + document.location.pathname + "#imagen/" + (typeof(data.photoID) != "undefined" ? data.photoID : 0);
						comscore_dl.img.src = comscore_dl.src + "/p?c1=2&c2=" + comscore_dl.id + "&cv=2.0&cj=1&c7=" + encodeURIComponent(((typeof data.photoURL != "undefined") ? data.photoURL : document.location.href)) + "&c8=" + encodeURIComponent(_satellite.getDataElement("pageTitle")) + "&c9=" + encodeURIComponent(_satellite.getDataElement("referringURL")) + "&rn=" + String(Math.random()).substr(2, 9);
						break;
					case DTM.events.SCROLLINF:
						var pixel = comscore_dl.src + "/p?c1=2&c2=" + comscore_dl.id + "&cv=2.0&cj=1&c7=" + encodeURIComponent(document.location.href) + "&c8=" + encodeURIComponent(_satellite.getDataElement("pageTitle")) + "&c9=" + encodeURIComponent(_satellite.getDataElement("referringURL"));
						comscore_dl.img.src = pixel + "&rn=" + String(Math.random()).substr(2, 9);
						break;
					//VideoMetrix AD Plays
					case DTM.events.ADPLAY:
					case DTM.events.ADRESUMED:
						if(typeof window.ns_ == "undefined")
							return false;
						if(typeof this.myStreamingTag[data.videoID] == "undefined")
							this.myStreamingTag[data.videoID] = {"ns": new window.ns_.StreamingTag({ customerC2: comscore_dl.id }),"state":""};
						this.myStreamingTag[data.videoID].state = eventType;

						var adType = "";
						if(typeof data.adMode != "undefined"){
							switch(data.adMode){
								case "post-roll":
								case "postroll":
									adType = window.ns_.StreamingTag.AdType.LinearOnDemandPostRoll;
									break;
								case "pre-roll":
								case "preroll":
									adType = window.ns_.StreamingTag.AdType.LinearOnDemandPreRoll;
									break;
								case "mid-roll":
								case "midroll":
									adType = window.ns_.StreamingTag.AdType.LinearOnDemandMidRoll;
									break;
							}
						}
						this.myStreamingTag[data.videoID].ns.playVideoAdvertisement({ns_st_cl: (typeof(data.videoDuration) != "undefined") ? (parseInt(data.videoDuration) * 1000) : 0},adType);
						break;
					//Reinicios
					case DTM.events.VIDEORELOAD:
						if(typeof this.myStreamingTag[data.videoID] != "undefined")
							this.myStreamingTag[data.videoID] = {"ns": new window.ns_.StreamingTag({ customerC2: comscore_dl.id }),"state":eventType};
						break;
					case DTM.events.VIDEOREPLAY:
						if(typeof this.myStreamingTag[data.videoID] != "undefined")
							delete this.myStreamingTag[data.videoID];
					//VideoMetrix Videos Plays
					case DTM.events.VIDEOPLAY:
					case DTM.events.VIDEORESUMED:
						if(typeof window.ns_ == "undefined")
							return false;
						if(typeof this.myStreamingTag[data.videoID] == "undefined")
							this.myStreamingTag[data.videoID] = {"ns": new window.ns_.StreamingTag({ customerC2: comscore_dl.id }),"state":""};
						this.myStreamingTag[data.videoID].state = eventType;

						var metadata = {
							ns_st_ci: (typeof(data.videoID) != "undefined") ? data.videoID : "null",
							ns_st_cl: (typeof(data.videoDuration) != "undefined") ? (parseInt(data.videoDuration) * 1000) : 0,
							ns_st_st: "*null",
							ns_st_pu: comscore_dl.pbn,
							ns_st_pr: "*null",
							ns_st_ep: "*null",
							ns_st_sn: "*null",
							ns_st_en: "*null",
							ns_st_ge: "*null",
							ns_st_ti: "*null",
							ns_st_ia: "*null",
							ns_st_ce: "*null",
							ns_st_ddt: "*null",
							ns_st_tdt: "*null",
							c3: comscore_dl.c3,
							c4: comscore_dl.c4,
							c6: "*null"
						};

						var repType = (typeof data.videoRepType != "undefined") ? (data.videoRepType == "streaming" ? window.ns_.StreamingTag.ContentType.Live : window.ns_.StreamingTag.ContentType.ShortFormOnDemand) : "";
						this.myStreamingTag[data.videoID].ns.playVideoContentPart(metadata, repType);
						break;
					//VideoMetrix Ad / Video ends
					case DTM.events.VIDEOEND:
					case DTM.events.VIDEOPAUSED:
					case DTM.events.ADEND:
					case DTM.events.ADSKIP:
					case DTM.events.ADPAUSED:
						if(typeof window.ns_ == "undefined")
							return false;
						if(typeof this.myStreamingTag[data.videoID] == "undefined")
							this.myStreamingTag[data.videoID] = {"ns": new window.ns_.StreamingTag({customerC2:comscore_dl.id}),"state":""};

						if(this.myStreamingTag[data.videoID].state != DTM.events.ADPAUSED && this.myStreamingTag[data.videoID].state != DTM.events.VIDEOPAUSED){
							this.myStreamingTag[data.videoID].ns.stop();
							this.myStreamingTag[data.videoID].state = eventType;
						}
						break;
					default:
						return;
				}
				DTM.notify("", eventID, "ComScore");
			}
		},
		chartbeat:{
			enabled: 1,
			dl: {},
			trackType: -1,
			trackedPV: false,
			init: function(){
				//Enabled
				this.enabled = this.isEnabled();

				//Track type
				this.trackType = DTM.TRACK_DELAY;

				//CH params
				var ch_src = (_satellite.getVar("platform") == DTM.PLATFORM.FBIA) ? "//static.chartbeat.com/js/chartbeat_fia.js" : "//static.chartbeat.com/js/chartbeat_video.js";
				var ch_uid = "61731";
				var ch_domain = "elpais.com";
				var ch_useCanonical = (_satellite.getVar("canonicalURL") != _satellite.getVar("destinationURL").replace(/[\?#].*?$/g, "")) ? false : true;
				var ch_path = ch_useCanonical ? "" : document.location.pathname;

				if(this.enabled){
					window._sf_async_config = window._sf_async_config || {};
					window._sf_async_config.uid = ch_uid;
					window._sf_async_config.flickerControl = false;
					window._sf_async_config.autoDetect = false;
					window._sf_async_config.domain = ch_domain;
					window._sf_async_config.useCanonical = ch_useCanonical;
					window._sf_async_config.useCanonicalDomain = false;

					if(!ch_useCanonical)
						window._sf_async_config.path = ch_path;

					/** Chartbeat headLineTesting **/
					this.headLineTesting();
				}

				//Creación del Data Layer
				this.setDL({
					"authors": this.getAuthors(),
					"autoDetect": false,
					"domain": ch_domain,
					"id": ch_uid,
					"path": ch_path,
					"sections": this.getSections(),
					"src": ch_src,
					"useCanonical": ch_useCanonical
				});
			},
			getDL: function(){
				return this.dl;
			},
			setDL: function(dl){
				this.dl = dl;
			},
			isEnabled: function(){
				var chb_enabled = (typeof DTM.config.chb_enabled != "undefined") ? DTM.config.chb_enabled : DTM.allowAll;
				//No AMP ni Widget
				if(chb_enabled && (_satellite.getVar("platform") == DTM.PLATFORM.AMP || _satellite.getVar("platform") == DTM.PLATFORM.WIDGET))
					chb_enabled = false;
				//Filtrado de secciones donde no se debe marcar
				if(chb_enabled){
					var blackSections = ["archivo","buscador","comentario","concursos","descargables","desconocido","elpais","elpais_html","entrevistas","eskup","estaticos","eventos","eyeblaster","firmas","formularios","gp","kioskoymas","lomasvisto","misfavoritos","proxy","scripts","servicios","suscripciones"];
					chb_enabled = (blackSections.indexOf(_satellite.getVar("primaryCategory")) == -1);
				}
				return (chb_enabled) ? DTM.TOOL_ENABLED : DTM.TOOL_DISABLED;
			},
			headLineTesting : function(){
				if(_satellite.getVar("platform") == DTM.PLATFORM.FBIA)
					return false;
				if(_satellite.getVar("pageType") != "portada" && _satellite.getVar("pageType") != "articulo")
					return false;

				window._sf_async_config.flickerControl = false;
				var e = document.createElement('script');
				e.setAttribute('language', 'javascript');
				e.setAttribute('type', 'text/javascript');
				e.setAttribute('async', '');
				e.setAttribute('src', '//static.chartbeat.com/js/chartbeat_mab.js');
				document.head.appendChild(e);
			},
			getSections: function(){
				var ch_section = _satellite.getVar("primaryCategory");
				if(_satellite.getVar("domain") == "brasil.elpais.com")
					ch_section = "brasil";
				else{
					var ch_subsections = ["ccaa>catalunya","ccaa>madrid","cultura>television","cultura>babelia","cincodias>territorio_pyme","cincodias>smartlife"];
					for(var i = 0, j = ch_subsections.length; i < j; i++){
						if(_satellite.getVar("subCategory1").indexOf(ch_subsections[i]) == "0" && ch_subsections[i].indexOf(">") != -1)
							ch_section += "," + ch_subsections[i].split(">")[1];
					}
				}
				if(_satellite.getVar("brandedContent") == "1")
					ch_section += ",branded content";
				return ch_section;
			},
			getAuthors: function(){
				var ch_authors = [];
				var dtm_authors = _satellite.getVar("author");
				var res_aut = "";
				var ch_author_name = "";

				for (var i = 0, j = dtm_authors.length; i < j; i++){
					var ch_author_name = dtm_authors[i].name;
					if(res_aut = /^(.*)_a$/.exec(ch_author_name))
						ch_author_name = res_aut[1];
					ch_authors.push(ch_author_name.replace(/_/g, " ").replace(/\b\w/g, function(l){ return l.toUpperCase() }));
				}
				return ch_authors.join(",");
			},
			trackPV: function(){
				if(this.enabled != DTM.TOOL_ENABLED)
					return false;

				var chartbeat_dl = this.getDL();
				window._sf_async_config.sections = chartbeat_dl.sections;
				window._sf_async_config.title = _satellite.getVar("pageTitle");
				window._sf_async_config.type = _satellite.getVar("pageType");
				window._sf_async_config.authors = chartbeat_dl.authors;
				window._sf_async_config.alias = _satellite.getVar("destinationURL");
				var _cbq = window._cbq = (window._cbq || []);
				_cbq.push(['_acct', _satellite.getVar("registeredUser") == "1" ? "lgdin" : "anon"]);

				var e = document.createElement('script');
				var n = document.getElementsByTagName('script')[0];
				e.type = 'text/javascript';
				if(_satellite.getVar("platform") == DTM.PLATFORM.FBIA)
					e.setAttribute('defer', '');
				else
					e.async = true;
				e.src = chartbeat_dl.src;
				n.parentNode.insertBefore(e, n);

				this.trackedPV = true;
			},
			trackEvent: function(eventID){
				if(this.enabled == DTM.TOOL_DISABLED)
					return false;

				var chartbeat_dl = this.getDL();
				//Event from data layer
				if(typeof _satellite.getVar("event")[eventID] == "undefined")
					return;

				var eventType = _satellite.getVar("event")[eventID].eventInfo.eventName;
				var data = _satellite.getVar("event")[eventID].attributes;

				switch(eventType){
					case DTM.events.VIDEOREADY:
						window._cbv = window._cbv || (window._cbv = []);
						window._cbv.push(data.player);
						break;
					case DTM.events.SCROLLINF:
						if(typeof pSUPERFLY != "undefined"){
							pSUPERFLY.virtualPage({
							  sections: _satellite.getVar("primaryCategory"),
							  path: _satellite.getVar("destinationURL").replace(/http.?:\/\/[^\/]*/, ""),
							  title: _satellite.getVar("pageTitle")
							});
						}
						break;
					default:
						return;
				}
				DTM.notify("", eventID, "Chartbeat");
			}
		},
		netquest:{
			enabled: 1,
			dl: {},
			trackType: -1,
			trackedPV: false,
			init: function(){
				//Enabled
				this.enabled = this.isEnabled();
				
				//trackType
				this.trackType = DTM.TRACK_DELAY;

				//Recogemos la PUCI y el VisitorID
				var net_uid = encodeURIComponent(_satellite.getVar("profileID"));

				//Adobe VisitorID
				var net_visitorID = DTM.utils.getVisitorID();

				//Creación del Data Layer
				this.setDL({
					"img": undefined,
					"src": "//mpc.nicequest.com/mpc/ConsumerServlet",
					"p": _satellite.settings.isStaging ? "-1" : "GPRSES_116713",
					"uid": encodeURIComponent(net_uid),
					"visitorID": encodeURIComponent(net_visitorID),
					"separator": "*"
				});
			},
			getDL: function(){
				return this.dl;
			},
			setDL: function(dl){
				this.dl = dl;
			},
			isEnabled: function(){
				var net_enabled = (typeof DTM.config.net_enabled != "undefined") ? DTM.config.net_enabled : DTM.allowAll;
				//No AMP, IA ni Widget
				if(net_enabled && (_satellite.getVar("platform") == DTM.PLATFORM.AMP || _satellite.getVar("platform") == DTM.PLATFORM.FBIA || _satellite.getVar("platform") == DTM.PLATFORM.WIDGET))
					net_enabled = false;
				return (net_enabled) ? DTM.TOOL_ENABLED : DTM.TOOL_DISABLED;
			},
			trackPV: function(){
				//Enabled
				if(this.enabled != DTM.TOOL_ENABLED || this.trackedPV)
					return false;

				var netquest_dl = this.getDL();

				//PUCI
				if(netquest_dl.uid == "not-set")
					netquest_dl.uid = encodeURIComponent(_satellite.getVar("profileID"));
				//Omniture MID
				if(netquest_dl.visitorID == "")
					netquest_dl.visitorID = DTM.utils.getVisitorID();

				netquest_dl.img = new Image(1,1);
				netquest_dl.img.src = netquest_dl.src + "?p=" + netquest_dl.p + "&id=" + (netquest_dl.uid + netquest_dl.separator + netquest_dl.visitorID) + "&url=" + encodeURIComponent(_satellite.getVar("destinationURL")) + "&rnd=" + String(Math.random()).substr(2,9);

				this.trackedPV = true;
			}
		},
		facebook:{
			enabled: 1,
			dl: {},
			trackType: -1,
			trackedPV: false,
			initialized: false,
			init: function(){
				//Enabled
				this.enabled = this.isEnabled();
				//Track type
				this.trackType = DTM.TRACK_DELAY;
				//Creación del Data Layer
				this.setDL({
					"id": "1461658713846525",
					"lib": "//connect.facebook.net/en_US/fbevents.js",
					"trackingCode": _satellite.getVar("campaign") != "" ? _satellite.getVar("campaign") : "none",
					"campaign": _satellite.getVar("campaign") != "" ? _satellite.getVar("campaign") : "none"
				});
			},
			getDL: function(){
				return this.dl;
			},
			setDL: function(dl){
				this.dl = dl;
			},
			isEnabled: function(){
				var fbk_enabled = (typeof DTM.config.fbk_enabled != "undefined") ? DTM.config.fbk_enabled : DTM.allowAll;
				//No AMP ni Widget
				if(fbk_enabled && (_satellite.getVar("platform") == DTM.PLATFORM.AMP || _satellite.getVar("platform") == DTM.PLATFORM.WIDGET))
					fbk_enabled = false;
				return (fbk_enabled) ? DTM.TOOL_ENABLED : DTM.TOOL_DISABLED;
			},
			loadLib: function(){
				if(this.enabled != DTM.TOOL_ENABLED)
					return;

				var facebook_dl = this.getDL();

				!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
				n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
				n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
				t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
				document,'script', facebook_dl.lib);
			},
			trackPV: function(){
				if(this.enabled != DTM.TOOL_ENABLED || this.trackedPV)
					return false;

				var facebook_dl = this.getDL();
				if(!this.initialized){
					this.loadLib();
					window.fbq('set', 'autoConfig', false, facebook_dl.id);
					window.fbq('init', facebook_dl.id);
					this.initialized = true;
				}

				window.fbq('track', 'PageView');
				window.fbq('track', 'ViewContent',
					{
						campaign: facebook_dl.campaign,
						content_name: _satellite.getVar("pageName"),
						content_category: _satellite.getVar("primaryCategory"),
						registeredUser: _satellite.getVar("registeredUser") == "1" ? "reg" : "anon",
						sysEnv: _satellite.getVar("sysEnv"),
						trackingCode: facebook_dl.trackingCode					}
				);
				this.trackedPV = true;
			},
			trackEvent: function(eventID){
				if(this.enabled == DTM.TOOL_DISABLED)
					return false;

				if(typeof window.fbq == "undefined")
					return false;

				var facebook_dl = this.getDL();
				//Event from data layer
				if(typeof _satellite.getVar("event")[eventID] == "undefined")
					return;

				var eventType = _satellite.getVar("event")[eventID].eventInfo.eventName;
				var data = _satellite.getVar("event")[eventID].attributes;

				switch(eventType){
					case DTM.events.UUVINC:
					case DTM.events.USERREGISTER:
						window.fbq('track', 'CompleteRegistration',
							{
								content_name: _satellite.getVar("pageName"),
								content_category: _satellite.getVar("primaryCategory"),
								sysEnv: _satellite.getVar("sysEnv"),
								status: eventType == DTM.events.USERREGISTER ? "register" : "vinculation",
								reg_origin: (typeof data.registerOrigin != "undefined") ? data.registerOrigin : "",
								reg_prod_origin: (typeof data.registerProd != "undefined") ? data.registerProd : "",
								reg_type: (eventType == DTM.events.UUVINC) ? "vinculation" : ((data.registerType != "undefined") ? (data.registerType == "clasico" ? "classic" : "social(" + data.registerType + ")") : "")
							}
						);
						break;
					default:
						return;
				}
				DTM.notify("", eventID, "Facebook");
			}
		},
		elpais:{
			enabled: 1,
			dl: {},
			trackType: -1,
			trackedPV: false,
			eventQueue: [],
			eventRequired: false,
			eventRequiredFired: false,
			map:{
				events:{},
				vars:{}
			},
			init: function(){
				//Enabled
				this.enabled = this.isEnabled();
				//Map
				this.createMap();
				//Track type, siempre en el delay
				this.trackType = DTM.TRACK_DELAY;
				//Event Required, solamente se necesitará en páginas del paywall en web
				this.eventRequired = (_satellite.getVar("paywall:type") != "free" && _satellite.getVar("platform") != DTM.PLATFORM.AMP) ? "DTMPaywallActive" : false;
				
				//Creación del Data Layer
				this.setDL({
					"img": null,
					"src": {
						"realTime": "https://tracker.datanoticias.prisasd.com/pixel.png",
						"pep": "//pxlctl.elpais.com/pxlctl.gif",
						"cloudfront": "//d30wo2lffetbp8.cloudfront.net/"
					},
					"realTime": {
						"pn": _satellite.getVar("pageName"),
						"g": _satellite.getVar("destinationURL"),
						"ch": _satellite.getVar("primaryCategory"),
						"tit": _satellite.getVar("pageTitle"),
						"h": _satellite.getVar("server"),
						"r": _satellite.getVar("referringURL"),
						"cms": _satellite.getVar("cms"),
						"ts": this.getTimeStamp(),
						"co": "not-set",
						"sys": _satellite.getVar("sysEnv"),
						"uid": "not-set",
						"aid": "not-set",
						"ust": "not-set",
						"pwt": "",
						"pws": ""
					}
				});
			},
			createMap: function(){
				this.map.events[DTM.events.PHOTOGALLERY] = "photogallery";
				this.map.events[DTM.events.SCROLLINF] = "scrollInf";
				this.map.events[DTM.events.RECOMMENDERIMPRESSION] = "r";
				this.map.events[DTM.events.INTERNALPIXEL] = "internalPixel";
				this.map.events[DTM.events.USERREGISTER] = "okreg";
				this.map.events[DTM.events.USERLOGIN] = "oklog";
				this.map.events[DTM.events.READARTICLE] = "readArticle";

				this.map.vars["recommenderTime1"] = "t1";
				this.map.vars["recommenderTime"] = "t";
				this.map.vars["recommenderError"] = "e";
				this.map.vars["recommenderTo"] = "to";
				this.map.vars["recommenderS"] = "s";
				this.map.vars["userID"] = "u";
				this.map.vars["registerType"] = "rgt";
				this.map.vars["registerOrigin"] = "rgo";
				this.map.vars["registerProd"] = "rgp";
			},
			getDL: function(){
				return this.dl;
			},
			setDL: function(dl){
				this.dl = dl;
			},
			isEnabled: function(){
				var ep_enabled = (typeof DTM.config.ep_enabled != "undefined") ? DTM.config.ep_enabled : DTM.allowAll;
				//No Widgets
				if(ep_enabled && _satellite.getVar("platform") == DTM.PLATFORM.WIDGET)
					ep_enabled = false;
				ep_enabled = ep_enabled ? DTM.TOOL_ENABLED : DTM.TOOL_DISABLED;
				return ep_enabled;
			},
			getTimeStamp: function(pv){
				var ts = "";
				if(pv)
					ts = _satellite.getVar("date:fullYear") + "/" + _satellite.getVar("date:month")  + "/" + _satellite.getVar("date:day") + "T" + _satellite.getVar("date:hours") + ":" + _satellite.getVar("date:minutes")  + ":" + _satellite.getVar("date:seconds");
				else{
					var dateEvent = new Date();
					ts = dateEvent.getFullYear() + "/" + DTM.utils.formatDate(dateEvent.getMonth() + 1)  + "/" + DTM.utils.formatDate(dateEvent.getDate()) + "T" + DTM.utils.formatDate(dateEvent.getHours()) + ":" + DTM.utils.formatDate(dateEvent.getMinutes()) + ":" + DTM.utils.formatDate(dateEvent.getSeconds());
				}
				return ts;
			},
			trackPV: function(){
				//Si no está habilitada o ya se ha marcado, no se marca
				if(this.enabled != DTM.TOOL_ENABLED || this.trackedPV)
					return false;
				//Si se requiere un evento y no se ha lanzado o se ha lanzado antes de tiempo, no se marca
				if((this.eventRequired !== false && !this.eventRequiredFired) || (this.eventRequired !== false && !DTM.delayCompleted))
					return false;

				var ep_dl = this.getDL();
				
				//Parámetros que no se pueden recoger en el init
				var ep_params = [];
				ep_params.push("ev=pageView");
				ep_dl.realTime.aid = DTM.utils.getVisitorID();
				ep_dl.realTime.uid =  _satellite.getVar("profileID");
				ep_dl.realTime.co = _satellite.getVar("country");
				ep_dl.realTime.ust = _satellite.getVar("registeredUser");
				ep_dl.realTime.pwt = _satellite.getVar("paywall:type");
				ep_dl.realTime.pws = _satellite.getVar("paywall:status") == "" ? "abierto" : _satellite.getVar("paywall:status");

				//Formación del pixel
				for(var param in ep_dl.realTime)
					ep_params.push(param + "=" + encodeURIComponent(ep_dl.realTime[param]));

				//Creación y petición
				ep_dl.img = new Image(1, 1);
				ep_dl.img.src = ep_dl.src.realTime + "?" + ep_params.join("&") + "&rnd=" + String(Math.random()).substr(2,9);
				this.trackedPV = true;

				//Vaciamos la cola de eventos
				for(var eventQ in this.eventQueue)
					this.trackEvent(eventQ);
				
			},
			trackEvent: function(eventID){
				if(!this.enabled)
					return;

				var ep_dl = this.getDL();

				//Event from data layer
				if(typeof _satellite.getVar("event")[eventID] == "undefined"){
					DTM.notify("EL PAIS event past not valid <" + eventType + ">");
					return;
				}
				var eventType = _satellite.getVar("event")[eventID].eventInfo.eventName;
				var data = _satellite.getVar("event")[eventID].attributes;

				//Mapping event
				if(!this.map.events.hasOwnProperty(eventType))
					return;
				var evento = this.map.events[eventType];

				switch(eventType){
					//Pixel para PEP
					case DTM.events.PHOTOGALLERY:
					case DTM.events.SCROLLINF:
						//Si existe user.js, si no existe lo lanzamos a mano (Wordpress)
						if(typeof PRISA != "undefined" && typeof PRISA.user != "undefined" && typeof PRISA.user.trackAgain != "undefined")
							PRISA.user.trackAgain();
						else{
							ep_dl.img = new Image(1, 1);
							ep_dl.img.src = ep_dl.src.pep + "?" + parseInt(Math.random() * 10000000);
						}
						break;
					//Solo para el pixel de Real-Time
					case DTM.events.USERREGISTER:
					case DTM.events.USERLOGIN:
					case DTM.events.READARTICLE:
						//Si la página no marcó, lo añadimos a la cola de eventos.
						if(!this.trackedPV){
							this.eventQueue.push(eventID);
							return;
						}
						//Recargamos el timeStamp
						ep_dl.realTime.ts = this.getTimeStamp();

						//Formamos los parámetros del DL
						var ep_params = [];
						ep_params.push("ev=" + evento);
						for(var param in ep_dl.realTime)
							ep_params.push(param + "=" + encodeURIComponent(ep_dl.realTime[param]));

						//Mapeamos los que hayan podido llegar por DTM.trackEvent
						for(var dataKey in this.map.vars)
							if(data.hasOwnProperty(dataKey))
								ep_params.push(this.map.vars[dataKey] + "=" + data[dataKey]);

						//Formamos el pixel y lo pedimos
						ep_dl.img = new Image(1, 1);
						ep_dl.img.src = ep_dl.src.realTime + "?" + ep_params.join("&") + "&rnd=" + String(Math.random()).substr(2,9);
						break;
					//Pixel de Cloudfront
					case DTM.events.INTERNALPIXEL:
					case DTM.events.RECOMMENDERIMPRESSION:
						var ep_params = [];
						ep_params.push("ch=" + _satellite.getVar("primaryCategory"));
						if(!data.hasOwnProperty("userID"))
							data.userID = _satellite.getVar("profileID");
						//Parámetros extra
						var extraParams = "";
						if(typeof data.extraParams == "object")
							for(var extraParam in data.extraParams)
								extraParams += "&" + extraParam + "=" + data.extraParams[extraParam];

						//vars from data, mapping
						for(var dataKey in this.map.vars)
							if(data.hasOwnProperty(dataKey))
								ep_params.push(this.map.vars[dataKey] + "=" + (this.map.vars[dataKey] == "e" ? data[dataKey].toUpperCase() : data[dataKey]));

						//Nombre del GIF es el evento mapeado
						var evento = (data.hasOwnProperty("pixelName")) ? data["pixelName"] : "r";
						ep_dl.img = new Image(1, 1);
						ep_dl.img.src = ep_dl.src.cloudfront + encodeURIComponent(evento) + ".gif?" + ep_params.join("&") + extraParams;
						break;
					default:
						return;
				}
				DTM.notify("", eventID, "EL PAIS");
			}
		},
		google:{
			enabled: true,
			dl: {},
			trackType: -1,
			trackedPV: false,
			init: function(){
				//Enabled
				this.enabled = this.isEnabled();

				//Track type
				this.trackType = DTM.TRACK_TOP;

				//Creación del Data Layer
				this.setDL({
					"src": "//googleads.g.doubleclick.net/pagead/viewthroughconversion/",
					"id": 965296472,
					"id2": 802913665,
					"img": new Image(1,1),
					"img2": new Image(1,1)
				});
			},
			getDL: function(){
				return this.dl;
			},
			setDL: function(dl){
				this.dl = dl;
			},
			isEnabled: function(){
				var goo_enabled = (typeof DTM.config.goo_enabled != "undefined") ? DTM.config.goo_enabled : DTM.allowAll;
				//No AMP, IA ni Widget
				if(goo_enabled && (_satellite.getVar("platform") == DTM.PLATFORM.AMP || _satellite.getVar("platform") == DTM.PLATFORM.FBIA || _satellite.getVar("platform") == DTM.PLATFORM.WIDGET))
					goo_enabled = false;
				return goo_enabled ? DTM.TOOL_ENABLED : DTM.TOOL_DISABLED;
			},
			trackPV: function(){
				if(this.enabled != DTM.TOOL_ENABLED)
					return false;

				var google_dl = this.getDL();
				google_dl.img.src = google_dl.src + google_dl.id + "/?value=0&guid=ON&script=0&rnd=" + String(Math.random()).substr(2,9);

				if(_satellite.getVar("country") == "mx")
					google_dl.img2.src = google_dl.src + google_dl.id2 + "/?value=0&guid=ON&script=0&rnd=" + String(Math.random()).substr(2,9);

				this.trackedPV = true;
			}
		}
	},
	trackPV: function(){
		if(!this.toolsInitialized){
			this.notify("Uninitialized tools");
			return;
		}
		
		var trackDelay = {};

		//Las que marquen en el TOP lo hacen inmediatamente, las que sean delay las guardamos en un objeto para lanzarlas con el timeOut
		for(var tool in this.tools){
			if(typeof this.tools[tool] == "object"){
				switch(this.tools[tool].trackType){
					case DTM.TRACK_TOP:
						var tracked = this.tools[tool].trackPV();
						if(tracked !== false)
							DTM.notify("PV tracked in tool <" + tool + "> (inmediate)");
						break;
					case DTM.TRACK_DELAY:
						trackDelay[tool] = tool;
						break;
				}

				//Evento requerido para marcar
				if(typeof this.tools[tool].eventRequired != "undefined" && this.tools[tool].eventRequired !== false){
					(function (tool) {
						window.DTM.utils.addEvent(document, DTM.tools[tool].eventRequired, function(){
							window.DTM.tools[tool].eventRequiredFired = true;
							var tracked = window.DTM.tools[tool].trackPV();
							if(tracked !== false)
								window.DTM.notify("PV tracked in tool <" + tool + "> (eventRequired)");
						});
					}(tool));
				}
			}
		}
		
		//Tools que marcan con delay, todas juntas
		(function (trackDelay) {
			window.setTimeout(function(){
				DTM.delayCompleted = true;
				for(var tool in trackDelay){
					var tracked = DTM.tools[tool].trackPV();
					if(tracked !== false)
						DTM.notify("PV tracked in tool <" + tool + "> (delayed)");
				}
			}, DTM.TIME_DELAY);
		}(trackDelay));		
	},
	trackPaywallPage: function(data){
		if(typeof data != "object" || !data.hasOwnProperty("status"))
			return false;
		this.dataLayer.setParam("paywall.status", data.status);
		this.utils.dispatchEvent("DTMPaywallActive");
	},
	trackEvent: function(eventType, data){
		this.notify("DTM.trackEvent fired <" + eventType + ">", true);
		if(typeof eventType != "string" || (typeof data != "undefined" && typeof data != "object"))
			return;

		if(!this.events.validEvent(eventType)){
			DTM.notify("Event not valid <" + eventType + ">");
			return;
		}

		data = this.utils.formatData(data);

		//Add event to data layer
		var eventID = window.digitalData.event.length;
		window.digitalData.event.push({
			eventInfo:{
				eventName: eventType,
				eventAction: eventType,
				timeStamp: new Date(),
				effect: ""
			},
			category:{
				primaryCategory: _satellite.getVar("primaryCategory"),
				subCategory1: _satellite.getVar("subCategory1"),
				pageType: _satellite.getVar("pageType")
			},
			attributes: data
		});

		if(eventType == DTM.events.TEST && data.hasOwnProperty("test") && data.test.indexOf("test_registro") != -1){
			var status = (data.test.indexOf("test_registro_opn_abierta") != -1 ? "abierto": "cerrado");
			DTM.trackPaywallPage({"status": status});
		}else{
			//Track event in tools
			for(var tool in DTM.tools)
				if(typeof DTM.tools[tool] == "object" && typeof DTM.tools[tool].trackEvent == "function")
					DTM.tools[tool].trackEvent(eventID);
		}
	}
}

/**
 * Old functions, compatibilty with DTM
 **/
window.trackPublicarComentario = function() {
	DTM.trackEvent(DTM.events.COMMENTS);
}

window.trackScrollArticulosSMODA = function(datos){
	if(typeof digitalData == "undefined")
		return false;
	DTM.dataLayer.setParam("page.pageInfo.destinationURL", datos.url);
	DTM.dataLayer.setParam("page.pageInfo.pageTitle", datos.titulo.replace(/'|"|\|/g, "").toLowerCase());
	DTM.dataLayer.setParam("page.pageInfo.pageName", ("elpaiscom/smoda" + datos.url.replace(/[\?#].*?$/g,"").replace(/https?:\/\/[^\/]*/, "")));
	DTM.dataLayer.setParam("page.category.subCategory1", ("smoda>" + datos.seccion.toLowerCase() + (datos.subseccion && datos.subseccion != "" ? ">" + datos.subseccion.toLowerCase() : "")));
	DTM.dataLayer.setParam("page.pageInfo.tags", (typeof datos.tags != "undefined" ? datos.tags : []));
	var scrollLevel = typeof datos.nivel != "undefined" ? datos.nivel : "";
	DTM.trackEvent(DTM.events.SCROLLINF, {scrollLevel: scrollLevel});
	if(_satellite.getVar("pageType") == "articulo"){
		clearInterval(DTM.events.vars.readArticleInterval);
		DTM.events.vars.readArticleInterval = setTimeout(function(){
			DTM.trackEvent(DTM.events.READARTICLE);
		}, DTM.events.vars.readArticleTime);
	}
	DTM.events.eventHandlers.shareLinks.init();
}

//Iniciar DTM
DTM.init();


/************************** CONFIG SECTION **************************/
/* Function to get RSIDs from UI */
function getAnalyticsAccount(){
  for (var toolid in _satellite.tools){
    if (_satellite.tools[toolid].settings.engine == "sc"){
    return _satellite.tools[toolid].settings.account;
    }
  }
}

DTM.s = s_gi(getAnalyticsAccount());

//Todo lo que no puedo asignar por DataElements viene del tools del DL
DTM.s.dataLayer = _satellite.getDataElement("omniture");

/* You may add or alter any code config here. */
DTM.s.debugTracking = false;

/** Configuracion de Adobe **/
DTM.s.dstStart = _satellite.getVar("date:dstStart");
DTM.s.dstEnd = _satellite.getVar("date:dstEnd");
DTM.s.currentYear = _satellite.getVar("date:year");

/* Page Name Config */
DTM.s.siteID = DTM.s.dataLayer.siteID;

/* Config cookie domain */
DTM.s.cookieDomainPeriods = document.URL.indexOf(".com.") > 0 ? "3" : "2";

/* Link Tracking Config */
DTM.s.trackInlineStats = true;
DTM.s.linkTrackVars = "None";
DTM.s.linkTrackEvents = "None";


/** doPlugins **/
DTM.s.usePlugins = true;
DTM.s.doPlugins = function(s) {
  	//Exit or Download Link
	if(typeof s.linkType != "undefined" && (s.linkType == "d" || s.linkType == "e"))
		DTM.tools.omniture.trackExitLinks();
}

/************************** PLUGINS SECTION *************************/
/*
* Internal function: s_distinctDays 3.0
*/
DTM.s.distinctDays=function(t){if(void 0===t)return _satellite.notify("Error in s_distinctDays plugin: Domain undefined"),!1;if(!navigator.cookieEnabled)return!1;var e=!0,n=new Date;try{var i=function(t){for(var e="dtm_dds=",n=decodeURIComponent(document.cookie).split(";"),i=0;i<n.length;i++){for(var r=n[i];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""}();if(i&&""!=i){i=decodeURI(i);var r=new Date(i.split("|")[0]);r.getFullYear()==n.getFullYear()&&r.getMonth()==n.getMonth()&&r.getDay()==n.getDay()&&(e=!1)}var a=new Date;a.setTime(a.getTime()+62208e6);var o="expires="+a.toUTCString();document.cookie="dtm_dds="+encodeURI(n.getMonth()+1+"/"+n.getDate()+"/"+n.getFullYear()+"|")+";"+o+";path=/;domain=."+t}catch(t){_satellite.notify("Error in s_distinctDays plugin <" + t + ">"),e=!1}return e};

/*
* Internal function: articleDays 1.0
*/
DTM.s.articleDays=function(e){if(void 0===e||null==/^\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/gi.exec(e))return"";var r=e.split("/"),t=new Date(r[0],r[1]-1,r[2]),n=new Date,i=parseInt((n-t)/864e5);return i<0?"error":i.toString()};

/*
* Internal function: articlesSection 1.0
*/
DTM.s.articlesSection=function(e,t){if(void 0===e||""==e||void 0===t||""==t||"undefined"==typeof localStorage||void 0===localStorage.getItem||"undefined"==localStorage.setItem)return-1;e=e.toString().toLowerCase().trim();var o="s_art_sec";e=void 0!==window.atob&&void 0!==window.btoa?btoa(e):e;var r=new Date,a=(11==r.getMonth()?"01":r.getMonth()+2)+"/01/"+(11==r.getMonth()?r.getFullYear()+1:r.getFullYear());a=new Date(a);var n=0;1!=(t=parseInt(t))&&(n=t-1),a.setHours(a.getHours()+n),a=a.getTime();var i={},s=-1;return null!=localStorage.getItem(o)&&(i=JSON.parse(localStorage.getItem(o)),r.getTime()>i.expires?localStorage.removeItem(o):(s=i.sections.hasOwnProperty(e)?parseInt(i.sections[e])+1:1,i.sections[e]=s)),null==localStorage.getItem(o)&&((i={expires:a,sections:{}}).sections[e]="1",s=1),localStorage.setItem(o,JSON.stringify(i)),s=s.toString()};

/*
* Plugin: getQueryParam 2.4
*/
DTM.s.getQueryParam=new Function("p","d","u","h",""
+"var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca"
+"tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0"
+"?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#"
+"')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin"
+"g(i==p.length?i:i+1)}return v");
DTM.s.p_gpv=new Function("k","u","h",""
+"var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub"
+"string(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
DTM.s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return''");

/*
 * Plugin: getValOnce_v1.11 - get a value once per session or number of days
 */
DTM.s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");

/*
 * Plugin Utility: apl v1.1
 */
DTM.s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/*
 * Plugin: getTimeParting 2.0 - Set timeparting values based on time zone
 */
DTM.s.getTimeParting=new Function("t","z",""
+"var s=this,cy;dc=new Date('1/1/2000');"
+"if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}"
+"else{;z=parseFloat(z);var dsts=new Date(s.dstStart);"
+"var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl)"
+"{z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);"
+"tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();"
+"var days=['domingo','lunes','martes','miercoles','jueves','viernes',"
+"'sabado'];if(thisy!=s.currentYear){return'Data Not Available'}else{;"
+"thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();"
+"var dow=days[thisd];var ap='AM';var dt='laborable';var mint='00';"
+"if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};"
+"if (thish==0){thish=12};if(thisd==6||thisd==0){dt='festivo'};"
+"var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}"
+"if(t=='d'){return dow};if(t=='w'){return dt}}};");

/*
* Plugin: getVisitNum - version 3.0
*/
DTM.s.getVisitNum=new Function("tp","c","c2",""
+"var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp='m';}"
+"if(tp=='m'||tp=='w'||tp=='d'){eo=s.endof(tp),y=eo.getTime();e.setTi"
+"me(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c='s_vnum';}if(!"
+"c2){c2='s_invisit';}cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn="
+"'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisi"
+"t){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}els"
+"e {return 'unknown visit number';}}else {if(str){str++;k=cval.substri"
+"ng(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+1800000);"
+"s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'&vn=1',e)"
+";e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}");
DTM.s.dimo=new Function("m","y",""
+"var d=new Date(y,m+1,0);return d.getDate();");
DTM.s.endof=new Function("x",""
+"var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x=="
+"'m'){d=DTM.s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if("
+"x=='w'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return "
+"t;");

/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
DTM.s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
/*
* Utility Function: split v1.5 (JS 1.0 compatible)
*/
DTM.s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/****************************** MODULES *****************************/
// copy and paste implementation modules (Media, Integrate) here
// AppMeasurement_Module_Media.js - Media Module, included in AppMeasurement zip
// AppMeasurement_Module_Integrate.js - Integrate Module, included in AppMeasurement zip

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */


/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.4.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.4.0";var k=window;k.s_c_in||(k.s_c_il=[],k.s_c_in=0);a._il=k.s_c_il;a._in=k.s_c_in;a._il[a._in]=a;k.s_c_in++;a._c="s_c";var p=k.AppMeasurement.Pb;p||(p=null);var n=k,m,s;try{for(m=n.parent,s=n.location;m&&m.location&&s&&""+m.location!=""+s&&n.location&&""+m.location!=""+n.location&&m.location.host==s.host;)n=m,m=n.parent}catch(u){}a.F=function(a){try{console.log(a)}catch(b){}};a.Ma=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.wb=function(){var c=k.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.Ea&&!/^[0-9.]+$/.test(c)&&
(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ea=0<d?c.substring(d):c}return a.Ea};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.wb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?
(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.L=[];a.ia=function(c,b,d){if(a.Fa)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,h=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);
if(g&&"prerender"==g){if(!a.ja)for(a.ja=1,d=0;d<h.length;d++)a.d.addEventListener(h[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ja=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.L.push({m:c,a:b,t:e}),a.ja||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.xa();0<a.L.length;){d=a.L.shift();if(b&&!d.t&&d.t>c){a.L.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));
break}a.Fa=1;a[d.m].apply(a,d.a);a.Fa=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ia("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,h="";e=f="";if(a.lightProfileID)d=a.P,(h=a.lightTrackVars)&&(h=","+h+","+a.na.join(",")+",");else{d=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,
a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(h=a[e].Nb,f=a[e].Mb));h&&(h=","+h+","+a.H.join(",")+",");f&&h&&(h+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!h||0<=h.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",h,l,k,q,m=0;"contextData"==c&&(c="c");if(b){for(h in b)if(!(Object.prototype[h]||e&&h.substring(0,e.length)!=e)&&b[h]&&(!d||0<=d.indexOf(","+(f?f+".":"")+h+","))){k=!1;if(m)for(l=0;l<m.length;l++)h.substring(0,
m[l].length)==m[l]&&(k=!0);if(!k&&(""==g&&(g+="&"+c+"."),l=b[h],e&&(h=h.substring(e.length)),0<h.length))if(k=h.indexOf("."),0<k)l=h.substring(0,k),k=(e?e:"")+l+".",m||(m=[]),m.push(k),g+=a.r(l,b,d,f,k);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(k=h.substring(0,4),q=h.substring(4),h){case "transactionID":h="xact";break;case "channel":h="ch";break;case "campaign":h="v0";break;default:a.Ma(q)&&("prop"==k?h="c"+q:"eVar"==k?h="v"+
q:"list"==k?h="l"+q:"hier"==k&&(h="h"+q,l=l.substring(0,255)))}g+="&"+a.escape(h)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.zb=function(){var c="",b,d,f,e,g,h,l,k,q="",m="",n=e="";if(a.lightProfileID)b=a.P,(q=a.lightTrackVars)&&(q=","+q+","+a.na.join(",")+",");else{b=a.g;if(a.pe||a.linkType)q=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(q=a[e].Nb,m=a[e].Mb));q&&(q=","+q+","+a.H.join(",")+",");m&&(m=","+m+",",q&&(q+=
",events,"));a.events2&&(n+=(""!=n?",":"")+a.events2)}if(a.visitor&&a.visitor.getCustomerIDs){e=p;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);h=e.substring(4);g||("events"==e&&n?(g=n,n=
""):"marketingCloudOrgID"==e&&a.visitor&&(g=a.visitor.marketingCloudOrgID));if(g&&(!q||0<=q.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e=
"aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e=
"cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;
case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":n&&(g+=(""!=g?",":"")+n);if(m)for(h=g.split(","),g="",f=0;f<h.length;f++)l=h[f],k=l.indexOf("="),0<=k&&(l=l.substring(0,k)),k=l.indexOf(":"),0<=k&&(l=l.substring(0,k)),0<=m.indexOf(","+l+",")&&(g+=(g?",":"")+h[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],q,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e=
"mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],q,e));g="";break;default:a.Ma(h)&&("prop"==f?e="c"+h:"eVar"==f?e="v"+h:"list"==f?e="l"+h:"hier"==f&&(e="h"+h,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=""+a.Sb||"undefined"!=""+a.Ib&&"HTML"!=
(""+a.Ib).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Ia=function(a){var b=k.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,
1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.M=function(c){var b=a.D(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Ia(c),e)?{id:e.substring(0,100),type:g}:0};a.Qb=function(c){for(var b=
a.D(c),d=a.M(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.D(c),d=a.M(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Hb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,h;a.oa=1;d||(a.oa=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.M(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.M(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:
"";if(0<=l.indexOf(".tl(")||0<=l.indexOf(".trackLink("))d=0}}else a.oa=1;!e&&d&&(e=a.Ia(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,q=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),g=l.indexOf("?"),h=l.indexOf("#"),0<=g?0<=h&&h<g&&(g=h):g=h,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),h=0;h<g.length;h++)(n=g[h])&&l.substring(l.length-(n.length+1))=="."+n&&(f="d");if(a.trackExternalLinks&&
!f&&(l=e.toLowerCase(),a.La(l)&&(a.linkInternalFilters||(a.linkInternalFilters=k.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(h=0;h<g.length;h++)n=g[h],0<=l.indexOf(n)&&(q=1);q?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),k.s_objectID&&(b.id=
k.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Ab=function(){var c=a.oa,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):
0,h,l,k,e=0;if(g)for(h=0;h<g.length;h++)l=g[h].split("="),f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");h={};for(k in a.contextData)k&&!Object.prototype[k]&&"a.activitymap."==k.substring(0,14)&&(h[k]=a.contextData[k],a.contextData[k]="");a.e=a.r("c",h)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(k=0;k<f.length;k++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),h=0;h<b[l].length;h++)g=b[l][h],
g==f[k]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":"")+l+"&u=0"),b[l].splice(h,1),d=1);c||(d=1);if(d){e="";h=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),h=1);for(l in b)!Object.prototype[l]&&0<h&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),h--);a.cookieWrite("s_sq",e)}}}return c};a.Bb=function(){if(!a.Lb){var c=new Date,b=n.location,d,f,e=f=d="",g="",h="",l="1.2",k=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",p="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&
(l="1.5",c=[],c.forEach))){l="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;h=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.Rb(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),
p=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=k;a.browserWidth=g;a.browserHeight=h;a.connectionType=p;a.homepage=m;a.Lb=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=k["AppMeasurement_Module_"+c]?new k["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.eb=function(){return d.ib};d.jb=function(b){if(d.ib=b)a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",
{get:d.eb,set:d.jb}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Db=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,
c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.R=function(c,b){var d,f,e,g,h,l;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)if(g=f[e],(h=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(l in a[g])h[l]||(h[l]=a[g][l]);a[g]=h}};a.Va=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.vb=function(a){var b,d,f,e,g,h=0,l,k="",m="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(l=b.substring(d+
1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?h=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(h=",p,ei,"),h&&l)))){if((a=l.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=h.indexOf(","+e.substring(0,d)+",")?k+=(k?"&":"")+e:m+=(m?"&":"")+e;k&&m?l=k+"&"+m:m=""}d=253-(l.length-m.length)-
b.length;a=b+(0<d?g.substring(0,d):"")+"?"+l}return a};a.ab=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ea=!1;a.J=!1;a.lb=function(){a.J=!0;a.j()};a.ca=!1;a.V=!1;a.hb=function(c){a.marketingCloudVisitorID=c;a.V=!0;a.j()};a.fa=!1;a.W=!1;a.mb=
function(c){a.visitorOptedOut=c;a.W=!0;a.j()};a.Z=!1;a.S=!1;a.Xa=function(c){a.analyticsVisitorID=c;a.S=!0;a.j()};a.ba=!1;a.U=!1;a.Za=function(c){a.audienceManagerLocationHint=c;a.U=!0;a.j()};a.aa=!1;a.T=!1;a.Ya=function(c){a.audienceManagerBlob=c;a.T=!0;a.j()};a.$a=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.da=!1;a.I=!1;a.xa=function(){a.I=!0;a.j()};a.isReadyToTrack=function(){var c=!0,b=a.visitor,d,f,e;a.ea||a.J||(a.ab(a.lb)?a.J=
!0:a.ea=!0);if(a.ea&&!a.J)return!1;b&&b.isAllowed()&&(a.ca||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ca=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.hb]),a.marketingCloudVisitorID&&(a.V=!0)),a.fa||a.visitorOptedOut||!b.isOptedOut||(a.fa=!0,a.visitorOptedOut=b.isOptedOut([a,a.mb]),a.visitorOptedOut!=p&&(a.W=!0)),a.Z||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Z=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,a.Xa]),a.analyticsVisitorID&&(a.S=!0)),a.ba||
a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.ba=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Za]),a.audienceManagerLocationHint&&(a.U=!0)),a.aa||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.aa=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Ya]),a.audienceManagerBlob&&(a.T=!0)),c=a.ca&&!a.V&&!a.marketingCloudVisitorID,b=a.Z&&!a.S&&!a.analyticsVisitorID,d=a.ba&&!a.U&&!a.audienceManagerLocationHint,f=a.aa&&!a.T&&!a.audienceManagerBlob,
e=a.fa&&!a.W,c=c||b||d||f||e?!1:!0);a.da||a.I||(a.$a(a.xa)?a.I=!0:a.da=!0);a.da&&!a.I&&(c=!1);return c};a.o=p;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.qb=c;f.pb=b;f.nb=d;a.o==p&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.kb(),a.o!=p))for(;0<a.o.length;)c=a.o.shift(),c.pb.apply(c.qb,c.nb)};a.kb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.fb=function(c){var b,d,f=p,e=p;if(!a.isReadyToTrack()){b=[];if(c!=p)for(d in f=
{},c)f[d]=c[d];e={};a.Va(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.xb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/108E5)%10+
Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.p("_s");a.fb(c)||(b&&a.R(b),c&&(d={},a.Va(d,0),a.R(c)),a.Db()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.xb()),a.Hb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||
(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=k.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Wa||(f=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=f||void 0===f?void 0===f?"":f:n.document.referrer),a.Wa=1,a.referrer=a.vb(a.referrer),a.p("_g")),a.Ab()&&!a.abort&&(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),
a.Bb(),g+=a.zb(),a.Gb(e,g),a.p("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=k.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.za=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.za.push([c,b]):a.debugTracking&&a.F("DEBUG: Non function type passed to registerPreTrackCallback")};a.cb=function(c){a.wa(a.za,
c)};a.ya=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ya.push([c,b]):a.debugTracking&&a.F("DEBUG: Non function type passed to registerPostTrackCallback")};a.bb=function(c){a.wa(a.ya,c)};a.wa=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1];e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.F(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=
c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=
void 0};a.tagContainerMarker="";a.Gb=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",h=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(h||(h=a.account,f=h.indexOf(","),0<=f&&(h=h.substring(0,f)),h=h.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=h+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=
f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Kb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.cb(d);a.tb(d);a.ka()};a.Ua=/{(%?)(.*?)(%?)}/;a.Ob=RegExp(a.Ua.source,"g");a.ub=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Ob),e=0;e<f.length;++e){var g=
f[e],h=g.match(a.Ua),k="";"%"==h[1]&&"timezone_offset"==h[2]?k=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(k=a.yb());d.c=d.c.replace(g,a.escape(k))}}};a.yb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,
b){return(Array(a+1).join(0)+b).slice(-a)};a.ta={};a.doPostbacks=function(c){if("object"==typeof c)if(a.ub(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,
3)&&(a.ta[d.id]=new Image,a.ta[d.id].alt="",a.ta[d.id].src=d.c)}};a.tb=function(c){a.i||a.Cb();a.i.push(c);a.ma=a.C();a.Sa()};a.Cb=function(){a.i=a.Eb();a.i||(a.i=[])};a.Eb=function(){var c,b;if(a.ra()){try{(b=k.localStorage.getItem(a.pa()))&&(c=k.JSON.parse(b))}catch(d){}return c}};a.ra=function(){var c=!0;a.trackOffline&&a.offlineFilename&&k.localStorage&&k.JSON||(c=!1);return c};a.Ja=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ka=function(){if(a.q&&(a.B&&a.B.complete&&a.B.G&&a.B.va(),
a.q))return;a.Ka=p;if(a.qa)a.ma>a.O&&a.Qa(a.i),a.ua(500);else{var c=a.ob();if(0<c)a.ua(c);else if(c=a.Ga())a.q=1,a.Fb(c),a.Jb(c)}};a.ua=function(c){a.Ka||(c||(c=0),a.Ka=setTimeout(a.ka,c))};a.ob=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Pa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Ga=function(){if(0<a.i.length)return a.i.shift()};a.Fb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+=
"\n\t"+a.unescape(c[d]);a.F(b)}};a.gb=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Y=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(w){t=null}t&&"y"==t.x?(a.Y=!0,a.X=function(a){return JSON.parse(a)}):k.$&&k.$.parseJSON?(a.X=function(a){return k.$.parseJSON(a)},a.Y=!0):a.X=function(){return null};a.Jb=function(c){var b,d,f;a.gb()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=
new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Y?b.Ba=!0:b=0));!b&&a.Ta&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof k.InstallTrigger||
(b.abort=function(){b.src=p}));b.Da=function(){try{b.G&&(clearTimeout(b.G),b.G=0)}catch(a){}};b.onload=b.va=function(){a.bb(c);b.Da();a.sb();a.ga();a.q=0;a.ka();if(b.Ba){b.Ba=!1;try{a.doPostbacks(a.X(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ha=function(){b.Da();(a.trackOffline||a.qa)&&a.q&&a.i.unshift(a.rb);a.q=0;a.ma>a.O&&a.Qa(a.i);a.ga();a.ua(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.va():b.Ha())};a.Pa=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,
e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Na)try{f.removeChild(a.Na)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Na=a.B}b.G=setTimeout(function(){b.G&&(b.complete?b.va():(a.trackOffline&&b.abort&&b.abort(),b.Ha()))},5E3);a.rb=c;a.B=k["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.K||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=
250),a.ha=setTimeout(a.ga,a.forcedLinkTrackingTimeout)};a.sb=function(){if(a.ra()&&!(a.Oa>a.O))try{k.localStorage.removeItem(a.pa()),a.Oa=a.C()}catch(c){}};a.Qa=function(c){if(a.ra()){a.Sa();try{k.localStorage.setItem(a.pa(),k.JSON.stringify(c)),a.O=a.C()}catch(b){}}};a.Sa=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ga()}};a.forceOffline=function(){a.qa=!0};a.forceOnline=function(){a.qa=!1};a.pa=function(){return a.offlineFilename+
"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.La=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Kb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=
typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:k.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>
e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}}};a.H="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.H.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.na="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.P=a.na.slice(0);a.Aa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.P.push("prop"+m)),a.g.push("eVar"+m),a.P.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");a.g=a.g.concat(m);a.H=a.H.concat(m);a.ssl=0<=k.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.Pa=0;a.ma=0;a.O=0;a.Oa=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=k;a.d=k.document;try{if(a.Ta=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Ta=!0}}catch(x){}a.ga=function(){a.ha&&(k.clearTimeout(a.ha),a.ha=p);a.l&&a.K&&a.l.dispatchEvent(a.K);a.A&&("function"==typeof a.A?a.A():
a.l&&a.l.href&&(a.d.location=a.l.href));a.l=a.K=a.A=0};a.Ra=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ca)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.Ca=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.N&&a.N==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||
a.clickObject.parentNode))a.clickObject=0;else{var h=a.N=a.clickObject;a.la&&(clearTimeout(a.la),a.la=0);a.la=setTimeout(function(){a.N==h&&(a.N=0)},1E4);f=a.Ja();a.track();if(f<a.Ja()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.La(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||k.name&&d==k.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=
new k.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.K=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&k.MouseEvent)&&(a.Ca=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Ra,30)};a.Ra();r?a.setAccount(r):a.F("Error, missing Report Suite ID in AppMeasurement initialization");a.loadModule("ActivityMap")}
function s_gi(r){var a,k=window.s_c_il,p,n,m=r.split(","),s,u,t=0;if(k)for(p=0;!t&&p<k.length;){a=k[p];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(n=a.account?a.account:a.oun,n=a.allAccounts?a.allAccounts:n.split(","),s=0;s<m.length;s++)for(u=0;u<n.length;u++)m[s]==n[u]&&(t=1);p++}t||(a=new AppMeasurement(r));return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,k,p,n;if(a)for(k=0;k<a.length;k++)p=a[k],n=s_gi(p.oun),n.setAccount(p.un),n.setTagContainer(p.tagContainerName);r.s_giq=0}s_pgicq();

