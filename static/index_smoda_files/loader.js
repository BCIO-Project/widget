!function(){try{window.didomiCountry="ES",window.didomiGeoRegulations=["gdpr"]}catch(o){console.error("Didomi - Invalid country")}}();!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://sdk.privacy-center.org/",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var o=n(2),r=n(3);window.Didomi||(o(window).init(),r(window))},function(e,t){e.exports=function(e){function t(e,t,n,o,r){for(t=t.split?t.split("."):t,o=0;o<t.length;o++)e=e?e[t[o]]:r;return e===r?n:e}function n(t){var n=("; "+e.document.cookie).split("; "+t+"=");return 2!==n.length?null:n.pop().split(";").shift()}function o(t){return e.localStorage?e.localStorage.getItem(t):null}function r(r){var i=null,a=null,c=t(e.didomiConfig,"cookies.storageSources")||t(l,"config.cookies.storageSources")||{};return!1!==c.cookies&&(i=n(r)),!1!==c.localStorage&&(a=o(r)),i||a}function i(){var n=Array.isArray(e.didomiGeoRegulations)&&-1!==e.didomiGeoRegulations.indexOf("gdpr");return e.gdprAppliesGlobally||t(e.didomiConfig,"app.gdprAppliesGlobally")||t(e.didomiConfig,"website.gdprAppliesGlobally")||t(l,"config.app.gdprAppliesGlobally")||!1||n}function a(e,t,n){return e&&1!==e?null:{consentData:t,gdprApplies:n,hasGlobalScope:!1}}function c(t,n,o,r,i){"function"==typeof o&&("getConsentData"===t?o(a(n,r,i),!0):e.__cmpBuffer.push({command:t,parameter:n,callback:o}))}var l=t(e,"didomiRemoteConfig.notices",[])[0]||{};return{doesGDPRApply:i,get:t,getCookie:n,getConsentData:a,getLocalStorageItem:o,getStoredItem:r,handleCommand:c,init:function(){var t=i(),n=r("euconsent");if((!t||n)&&(t||n||(n=""),e.__cmp=function(e,o,r){c(e,o,r,n,t)},e.__cmpBuffer=e.__cmpBuffer||[],Array.isArray(e.__cmpBuffer)&&e.__cmpBuffer.length>0))for(var o=e.__cmpBuffer.length;o--;){var a=e.__cmpBuffer[o];"getConsentData"===a.command&&(c(a.command,a.parameter,a.callback,n,t),e.__cmpBuffer.splice(o,1))}}}}},function(e,t,n){e.exports=function e(t){var n=t.didomiOnLoad?"54107da99f32815551f74076e6e6a61678ef4609":"b8646836d4c2a94ded4610c5111df102dd1b0cd1",o=t.document.getElementsByTagName("head");if(o.length>0){var r=t.document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://sdk-gcp.privacy-center.org/sdk."+n+".js",r.charset="utf-8",o[0].appendChild(r)}else setTimeout(e.bind(this,t),5)}}]);