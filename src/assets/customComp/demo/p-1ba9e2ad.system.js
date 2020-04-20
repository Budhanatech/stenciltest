var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function o(e){try{l(n.next(e))}catch(r){i(r)}}function s(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(o,s)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(r){return l([e,r])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;a=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){t.label=o[1];break}if(o[0]===6&&t.label<i[1]){t.label=i[1];i=o;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(o);break}if(i[2])t.ops.pop();t.trys.pop();continue}o=r.call(e,t)}catch(s){o=[6,s];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],o=0,s=i.length;o<s;o++,a++)n[a]=i[o];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="demo";var a;var i;var o=false;var s=typeof window!=="undefined"?window:{};var l=s.CSS;var u=s.document||{head:{}};var f={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var c=function(){return(u.head.attachShadow+"").indexOf("[native")>-1}();var $=function(e){return Promise.resolve(e)};var v=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var h="{visibility:hidden}.hydrated{visibility:inherit}";var m=function(e,r){if(r===void 0){r=""}{return function(){return}}};var d=function(e,r){{return function(){return}}};var p=new WeakMap;var g=function(e,r,t){var n=se.get(e);if(v&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}se.set(e,n)};var y=function(e,r,t,n){var a=w(r.$tagName$);var i=se.get(a);e=e.nodeType===11?e:u;if(i){if(typeof i==="string"){e=e.head||e;var o=p.get(e);var s=void 0;if(!o){p.set(e,o=new Set)}if(!o.has(a)){{if(f.$cssShim$){s=f.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=s["s-sc"];if(l){a=l;o=null}}else{s=u.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var b=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=m("attachStyles",r.$tagName$);var i=y(c&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var w=function(e,r){return"sc-"+e};var _=function(e){return e!=null};var S=function(e){e=typeof e;return e==="object"||e==="function"};var R=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var x=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=false;var o=false;var s=[];var l=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!S(a)){a=String(a)}if(i&&o){s[s.length-1].$text$+=a}else{s.push(i?C(null,a):a)}o=i}}};l(t);var u=C(e,null);u.$attrs$=r;if(s.length>0){u.$children$=s}return u}));var C=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};return t};var E={};var N=function(e){return e&&e.$tag$===E};var j=function(e,r,t,n){var i=r.$children$[t];var o=0;var s;var l;if(i.$text$!==null){s=i.$elm$=u.createTextNode(i.$text$)}else{s=i.$elm$=u.createElement(i.$tag$);if(_(a)&&s["s-si"]!==a){s.classList.add(s["s-si"]=a)}if(i.$children$){for(o=0;o<i.$children$.length;++o){l=j(e,i,o);if(l){s.appendChild(l)}}}}return s};var M=function(e,r,t,n,a,o){var s=e;var l;if(s.shadowRoot&&s.tagName===i){s=s.shadowRoot}for(;a<=o;++a){if(n[a]){l=j(null,t,a);if(l){n[a].$elm$=l;s.insertBefore(l,r)}}}};var U=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;a.remove()}}};var A=function(e,r,t,n){var a=0;var i=0;var o=r.length-1;var s=r[0];var l=r[o];var u=n.length-1;var f=n[0];var c=n[u];var $;while(a<=o&&i<=u){if(s==null){s=r[++a]}else if(l==null){l=r[--o]}else if(f==null){f=n[++i]}else if(c==null){c=n[--u]}else if(L(s,f)){O(s,f);s=r[++a];f=n[++i]}else if(L(l,c)){O(l,c);l=r[--o];c=n[--u]}else if(L(s,c)){O(s,c);e.insertBefore(s.$elm$,l.$elm$.nextSibling);s=r[++a];c=n[--u]}else if(L(l,f)){O(l,f);e.insertBefore(l.$elm$,s.$elm$);l=r[--o];f=n[++i]}else{{$=j(r&&r[i],t,i);f=n[++i]}if($){{s.$elm$.parentNode.insertBefore($,s.$elm$)}}}}if(a>o){M(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){U(r,a,o)}};var L=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var O=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$text$;if(i===null){if(n!==null&&a!==null){A(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}M(t,null,r,a,0,a.length-1)}else if(n!==null){U(n,0,n.length-1)}}else if(e.$text$!==i){t.data=i}};var P=function(e,r){var t=e.$hostElement$;var n=e.$vnode$||C(null,null);var o=N(r)?r:x(null,null,r);i=t.tagName;o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=n.$elm$=t.shadowRoot||t;{a=t["s-sc"]}O(n,o)};var k=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var B=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var T=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=m("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return I(e,a,r)};B(e,n);var o;t();return F(o,(function(){return he(i)}))};var I=function(e,r,t){var n=e.$hostElement$;var a=m("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){b(e)}var o=m("render",e.$cmpMeta$.$tagName$);{{P(e,H(r))}}if(f.$cssShim$){f.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}o();a();{var s=n["s-p"];var l=function(){return z(e)};if(s.length===0){l()}else{Promise.all(s).then(l);e.$flags$|=4;s.length=0}}};var H=function(e){try{e=e.render()}catch(r){ae(r)}return e};var z=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=m("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{W(t)}n();{e.$onReadyResolve$(t);if(!a){V()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){ve((function(){return T(e,false)}))}e.$flags$&=~(4|512)}};var q=function(e){{var r=re(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){T(r,false)}return t}};var V=function(e){{W(u.documentElement)}ve((function(){return k(s,"appload",{detail:{namespace:n}})}))};var F=function(e,r){return e&&e.then?e.then(r):r()};var W=function(e){return e.classList.add("hydrated")};var G=function(e,r){if(e!=null&&!S(e)){if(r&1){return String(e)}return e}return e};var D=function(e,r){return re(e).$instanceValues$.get(r)};var J=function(e,r,t,n){var a=re(e);var i=a.$instanceValues$.get(r);var o=a.$flags$;var s=a.$lazyInstance$;t=G(t,n.$members$[r][0]);if((!(o&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(s){if((o&(2|16))===2){T(a,false)}}}};var K=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return D(this,n)},set:function(e){J(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;f.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var Q=function(e,n,a,i,o){return __awaiter(t,void 0,void 0,(function(){var e,t,i,s,l,u,f;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;o=oe(a);if(!o.then)return[3,2];e=d();return[4,o];case 1:o=c.sent();e();c.label=2;case 2:if(!o.isProxied){K(o,a,2);o.isProxied=true}t=m("createInstance",a.$tagName$);{n.$flags$|=8}try{new o(n)}catch($){ae($)}{n.$flags$&=~8}t();i=w(a.$tagName$);if(!(!se.has(i)&&o.style))return[3,5];s=m("registerStyles",a.$tagName$);l=o.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ab44a8ee.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=c.sent();c.label=4;case 4:g(i,l,!!(a.$flags$&1));s();c.label=5;case 5:u=n.$ancestorComponent$;f=function(){return T(n,true)};if(u&&u["s-rc"]){u["s-rc"].push(f)}else{f()}return[2]}}))}))};var X=function(e){if((f.$flags$&1)===0){var r=re(e);var t=r.$cmpMeta$;var n=m("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){B(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Q(e,r,t)}}n()}};var Y=function(e){if((f.$flags$&1)===0){var r=re(e);if(f.$cssShim$){f.$cssShim$.removeHost(e)}}};var Z=e("b",(function(e,r){if(r===void 0){r={}}var t=m();var n=[];var a=r.exclude||[];var i=s.customElements;var o=u.head;var l=o.querySelector("meta[charset]");var $=u.createElement("style");var v=[];var d;var p=true;Object.assign(f,r);f.$resourcesUrl$=new URL(r.resourcesUrl||"./",u.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}if(!c&&t.$flags$&1){t.$flags$|=8}var o=t.$tagName$;var s=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;ne(r,t);if(t.$flags$&1){if(c){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(d){clearTimeout(d);d=null}if(p){v.push(this)}else{f.jmp((function(){return X(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;f.jmp((function(){return Y(e)}))};r.prototype.forceUpdate=function(){q(this)};r.prototype.componentOnReady=function(){return re(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(o)&&!i.get(o)){n.push(o);i.define(o,K(s,t,1))}}))}));{$.innerHTML=n+h;$.setAttribute("data-styles","");o.insertBefore($,l?l.nextSibling:o.firstChild)}p=false;if(v.length){v.map((function(e){return e.connectedCallback()}))}else{{f.jmp((function(){return d=setTimeout(V,30)}))}}t()}));var ee=new WeakMap;var re=function(e){return ee.get(e)};var te=e("r",(function(e,r){return ee.set(r.$lazyInstance$=e,r)}));var ne=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return ee.set(e,t)};var ae=function(e){return console.error(e)};var ie=new Map;var oe=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=ie.get(i);if(o){return o[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{ie.set(i,e)}return e[a]}),ae)};var se=new Map;var le=[];var ue=[];var fe=function(e,r){return function(t){e.push(t);if(!o){o=true;if(r&&f.$flags$&4){ve($e)}else{f.raf($e)}}}};var ce=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){ae(t)}}e.length=0};var $e=function(){ce(le);{ce(ue);if(o=le.length>0){f.raf($e)}}};var ve=function(e){return $().then(e)};var he=fe(ue,true);var me=e("a",(function(){if(!(l&&l.supports&&l.supports("color","var(--c)"))){return r.import("./p-7177be88.system.js").then((function(){if(f.$cssShim$=s.__cssshim){return f.$cssShim$.i()}else{return 0}}))}return $()}));var de=e("p",(function(){{f.$cssShim$=s.__cssshim}var e=Array.from(u.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,s.location.href)).href;{pe(t.resourcesUrl,e)}if(!s.customElements){return r.import("./p-28dabbed.system.js").then((function(){return t}))}}return $(t)}));var pe=function(e,r){var t=R(n);try{s[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;s[t]=function(n){var i=new URL(n,e).href;var o=a.get(i);if(!o){var l=u.createElement("script");l.type="module";l.crossOrigin=r.crossOrigin;l.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));o=new Promise((function(e){l.onload=function(){e(s[t].m);l.remove()}}));a.set(i,o);u.head.appendChild(l)}return o}}}}}}));