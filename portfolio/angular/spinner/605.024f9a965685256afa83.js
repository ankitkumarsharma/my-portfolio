(self.webpackChunkngrx=self.webpackChunkngrx||[]).push([[605],{9633:e=>{"use strict";var t=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)},r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function n(e,t){return!1!==t.clone&&t.isMergeableObject(e)?i(Array.isArray(e)?[]:{},e,t):e}function o(e,t,r){return e.concat(t).map(function(e){return n(e,r)})}function c(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return e.propertyIsEnumerable(t)}):[]}(e))}function a(e,t){try{return t in e}catch(r){return!1}}function i(e,r,s){(s=s||{}).arrayMerge=s.arrayMerge||o,s.isMergeableObject=s.isMergeableObject||t,s.cloneUnlessOtherwiseSpecified=n;var u=Array.isArray(r);return u===Array.isArray(e)?u?s.arrayMerge(e,r,s):function(e,t,r){var o={};return r.isMergeableObject(e)&&c(e).forEach(function(t){o[t]=n(e[t],r)}),c(t).forEach(function(c){(function(e,t){return a(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,c)||(o[c]=a(e,c)&&r.isMergeableObject(t[c])?function(e,t){if(!t.customMerge)return i;var r=t.customMerge(e);return"function"==typeof r?r:i}(c,r)(e[c],t[c],r):n(t[c],r))}),o}(e,r,s):n(r,s)}i.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,r){return i(e,r,t)},{})},e.exports=i},6605:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AccountModule:()=>D});var n=r(3395),o=r(1116),c=r(509),a=r(9878);const i=(0,a.PH)("[Account] dummyData change");var s=r(5366);const u=[{path:"",component:(()=>{class e{constructor(e,t){this._route=e,this._store=t}ngOnInit(){}onDash(){this._store.dispatch(i()),this._route.navigate(["/account/user-account/dashboard","12"])}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(c.F0),s.Y36(a.yh))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-account"]],decls:4,vars:0,consts:[[1,"primary-btn",3,"click"]],template:function(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1,"account works!"),s.qZA(),s.TgZ(2,"button",0),s.NdJ("click",function(){return t.onDash()}),s._uU(3,"User Dashboard"),s.qZA())},styles:[""]}),e})()},{path:"user-account",loadChildren:()=>r.e(149).then(r.bind(r,5149)).then(e=>e.UserAccountModule)}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[c.Bz.forChild(u)],c.Bz]}),e})(),y=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})(),l=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})();const p=[y,(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})(),l],d=(0,a.Lq)({userAccount:"",clientAccount:""});var g=r(9633),b=r.n(g);const h=/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/,m=(e,t)=>"string"==typeof t&&h.test(t)?new Date(t):t,v=(e,t)=>t;function w(e,t){return t.reduce((t,r)=>{if("string"==typeof r||"number"==typeof r){const n=null==e?void 0:e[r];void 0!==n&&(t[r]=n)}else for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=w(e[n],r[n]));return t},{})}const j=(e,t,r,n,o,c)=>{if(c)try{if(!0!==c(e))return}catch(a){if(a instanceof TypeError)return;throw a}t.forEach(t=>{let c,i,s,u=e[t];if("object"==typeof t){let r=Object.keys(t)[0];if(u=e[r],void 0!==u&&t[r]){if(t[r].serialize)u=t[r].serialize(u);else{let e;t[r].reduce?e=t[r]:t[r].filter&&(e=t[r].filter),e&&(u=w(u,e)),t[r].encrypt&&t[r].decrypt?"function"==typeof t[r].encrypt&&(s=t[r].encrypt):(t[r].encrypt||t[r].decrypt)&&console.error(`Either encrypt or decrypt function is not present on '${t[r]}' key object.`)}c=t[r].replacer,i=t[r].space}t=r}if(void 0!==u&&void 0!==r)try{s&&(u=s("string"==typeof u?u:JSON.stringify(u,c,i))),r.setItem(n(t),"string"==typeof u?u:JSON.stringify(u,c,i))}catch(a){console.warn("Unable to save state to localStorage:",a)}else if(void 0===u&&o&&void 0!==r)try{r.removeItem(n(t))}catch(a){console.warn(`Exception on removing/cleaning undefined '${t}' state`,a)}})},O=(e,t,r)=>{if((r.type===a.qg||r.type===a.wb)&&t){const r={arrayMerge:(e,t,r)=>t};e=b()(e,t,r)}return e},A=(0,a.Lq)({userName:null,userProfile:""},(0,a.on)(i,(e,{})=>Object.assign(Object.assign({},e),{userName:"Ankit Kumar Sharma",userProfile:"Software Engineer"}))),S=(0,a.Lq)({userDetails:[]}),k=(0,a.UY)({userAccountDashboard:function(e,t){return A(e,t)},userAccountDetails:function(e,t){return S(e,t)}}),E={accountDashboard:function(e,t){return d(e,t)},userAccount:function(e,t){return k(e,t)}},z=[function(e){return(t={keys:["accountDashboard","userAccount"],rehydrate:!0,storage:sessionStorage},e=>{(void 0===t.storage&&!t.checkStorageAvailability||t.checkStorageAvailability&&"undefined"!=typeof window)&&(t.storage=localStorage||window.localStorage),void 0===t.storageKeySerializer&&(t.storageKeySerializer=e=>e),void 0===t.restoreDates&&(t.restoreDates=!0);let r=t.mergeReducer;void 0!==r&&"function"==typeof r||(r=O);const n=t.keys.map(e=>{let t=e;if("object"==typeof e&&(t=Object.keys(e)[0]),"string"!=typeof t)throw new TypeError("localStorageSync Unknown Parameter Type: Expected type of string, got "+typeof t);return e}),o=t.rehydrate?(c=t.storage,i=t.storageKeySerializer,s=t.restoreDates,n.reduce((e,t)=>{let r,n,o=t,a=s?m:v;if("object"==typeof o&&(o=Object.keys(o)[0],"function"==typeof t[o]?a=t[o]:(t[o].reviver&&(a=t[o].reviver),t[o].deserialize&&(r=t[o].deserialize)),t[o].encrypt&&t[o].decrypt?"function"==typeof t[o].encrypt&&"function"==typeof t[o].decrypt?n=t[o].decrypt:console.error(`Either encrypt or decrypt is not a function on '${t[o]}' key object.`):(t[o].encrypt||t[o].decrypt)&&console.error(`Either encrypt or decrypt function is not present on '${t[o]}' key object.`)),void 0!==c){let t=c.getItem(i(o));if(t){n&&(t=n(t));const c=new RegExp("{|\\[");let i=t;return("null"===t||"true"===t||"false"===t||c.test(t.charAt(0)))&&(i=JSON.parse(t,a)),Object.assign({},e,{[o]:r?r(i):i})}}return e},{})):void 0;var c,i,s;return function(c,i){let s;return s=i.type!==a.qg||c?Object.assign({},c):e(c,i),s=r(s,o,i),s=e(s,i),i.type!==a.qg&&j(s,n,t.storage,t.storageKeySerializer,t.removeOnUndefined,t.syncCondition),s}})(e);var t}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.ez,f,a.Aw.forFeature("account",E,{metaReducers:z}),n.sQ.forFeature(p)]]}),e})()}}]);