/*! * artplayer-plugin-chromecast.js v2.0.0 * Github:https://github.com/zhw2590582/ArtPlayer * (c) 2017-2024 Harvey Zack * Released under the MIT License. */ !function(e,o,t,n,i){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c="function"==typeof r[n]&&r[n],a=c.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(o,t){if(!a[o]){if(!e[o]){var i="function"==typeof r[n]&&r[n];if(!t&&i)return i(o,!0);if(c)return c(o,!0);if(s&&"string"==typeof o)return s(o);var l=Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}f.resolve=function(t){var n=e[o][1][t];return null!=n?n:t},f.cache={};var u=a[o]=new d.Module(o);e[o][0].call(u.exports,f,u,u.exports,this)}return a[o].exports;function f(e){var o=f.resolve(e);return!1===o?{}:d(o)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=a,d.parent=c,d.register=function(o,t){e[o]=[function(e,o){o.exports=t},{}]},Object.defineProperty(d,"root",{get:function(){return r[n]}}),r[n]=d;for(var l=0;l<o.length;l++)d(o[l]);if(t){var u=d(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define(function(){return u})}}({"3wl5Y":[function(e,o,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function i(e){return window.__onGCastApiAvailable=function(e){e&&window.cast.framework.CastContext.getInstance().setOptions({receiverApplicationId:window.chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,autoJoinPolicy:window.chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED})},async o=>{if(!window.chrome||!window.chrome.cast){var t;await (t=e.sdk||"https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",new Promise((e,o)=>{let n=document.createElement("script");n.src=t,n.onload=e,n.onerror=o,document.body.appendChild(n)}))}function n(t){let n=e.url||o.option.url,i=e.mimeType||({mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",ogv:"video/ogg",mp3:"audio/mp3",wav:"audio/wav",flv:"video/x-flv",mov:"video/quicktime",avi:"video/x-msvideo",wmv:"video/x-ms-wmv",mpd:"application/dash+xml",m3u8:"application/x-mpegURL"})[n.split("?")[0].split("#")[0].split(".").pop().toLowerCase()]||"application/octet-stream",r=new window.chrome.cast.media.MediaInfo(n,i),c=new window.chrome.cast.media.LoadRequest(r);t.loadMedia(c).then(function(){console.log("Media loaded successfully")},function(e){o.notice.show="Error casting media",console.log("Error casting media",e)})}return o.controls.add({name:"chromecast",position:"right",tooltip:"Chromecast",html:`<i class="art-icon art-icon-cast">${e.icon||'<svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M512 96H64v99c-13-2-26.4-3-40-3H0V96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H288V456c0-13.6-1-27-3-40H512V96zM24 224c128.1 0 232 103.9 232 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 344c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24z"/></svg>'}</i>`,click(){let e=window.cast.framework.CastContext.getInstance().getCurrentSession();e?n(e):window.cast.framework.CastContext.getInstance().requestSession().then(function(e){n(e)},function(e){o.notice.show="Error connecting to cast session",console.log("Error connecting to cast session",e)})}}),{name:"artplayerPluginChromecast"}}}n.defineInteropFlag(t),n.export(t,"default",()=>i),"undefined"!=typeof window&&(window.artplayerPluginChromecast=i)},{"@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],"9pCYc":[function(e,o,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,o){return Object.keys(e).forEach(function(t){"default"===t||"__esModule"===t||Object.prototype.hasOwnProperty.call(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:function(){return e[t]}})}),o},t.export=function(e,o,t){Object.defineProperty(e,o,{enumerable:!0,get:t})}},{}]},["3wl5Y"],"3wl5Y","parcelRequire4dc0");