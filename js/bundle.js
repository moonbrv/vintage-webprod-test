!function e(n,t,o){function i(a,u){if(!t[a]){if(!n[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(r)return r(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var d=t[a]={exports:{}};n[a][0].call(d.exports,function(e){var t=n[a][1][e];return i(t||e)},d,d.exports,e,n,t,o)}return t[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,n,t){"use strict";t.__esModule=!0,t.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}},{}],2:[function(e,n,t){!function(o){"use strict";function i(e){"function"==typeof e&&(i.isReady?e():f.push(e))}function r(e){var n="readystatechange"===e.type&&"complete"!==c.readyState;i.isReady||n||a()}function a(){i.isReady=!0;for(var e=0,n=f.length;e<n;e++)(0,f[e])()}function u(e){return"complete"===c.readyState?a():(e.bind(c,"DOMContentLoaded",r),e.bind(c,"readystatechange",r),e.bind(o,"load",r)),i}var c=o.document,f=[];i.isReady=!1,"function"==typeof define&&define.amd?define(["eventie/eventie"],u):"object"==typeof t?n.exports=u(e("eventie")):o.docReady=u(o.eventie)}(window)},{eventie:3}],3:[function(e,n,t){!function(e){"use strict";function o(n){var t=e.event;return t.target=t.target||t.srcElement||n,t}var i=document.documentElement,r=function(){};i.addEventListener?r=function(e,n,t){e.addEventListener(n,t,!1)}:i.attachEvent&&(r=function(e,n,t){e[n+t]=t.handleEvent?function(){var n=o(e);t.handleEvent.call(t,n)}:function(){var n=o(e);t.call(e,n)},e.attachEvent("on"+n,e[n+t])});var a=function(){};i.removeEventListener?a=function(e,n,t){e.removeEventListener(n,t,!1)}:i.detachEvent&&(a=function(e,n,t){e.detachEvent("on"+n,e[n+t]);try{delete e[n+t]}catch(o){e[n+t]=void 0}});var u={bind:r,unbind:a};"function"==typeof define&&define.amd?define(u):"object"==typeof t?n.exports=u:e.eventie=u}(window)},{}],4:[function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=o(e("doc-ready")),r=o(e("./main-menu-icon"));(0,i.default)(function(){new r.default})},{"./main-menu-icon":5,"doc-ready":2}],5:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(e("babel-runtime/helpers/classCallCheck"));t.default=function e(){(0,o.default)(this,e),console.log("main")}},{"babel-runtime/helpers/classCallCheck":1}]},{},[4]);
//# sourceMappingURL=bundle.js.map