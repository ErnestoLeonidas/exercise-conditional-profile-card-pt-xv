!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e);n(2);function r(t={}){console.log("These are the current variables: ",t);let e=`<div class="cover"><img src="${t.background}" /></div>`;0==t.includeCover&&(e="<div class='cover'></div>");let n="Lucy",r="Boilett",i="alesanchezr",o="alesanchezr",a="alesanchezr",s="alesanchezr",l="Web Developer",u="Miami",c="USA";null!=t.name&&""!=t.name.trim()&&(n=t.name),null!=t.lastname&&""!=t.lastname.trim()&&(r=t.lastname),null!=t.twitter&&""!=t.twitter.trim()&&(i=t.twitter),null!=t.github&&""!=t.github.trim()&&(o=t.github),null!=t.linkedin&&""!=t.linkedin.trim()&&(a=t.linkedin),null!=t.instagram&&""!=t.instagram.trim()&&(s=t.instagram),null!=t.role&&(l=t.role),null!=t.city&&(u=t.city),null!=t.country&&(c=t.country),document.querySelector("#widget_content").innerHTML=`<div class="widget">\n            ${e}\n          <img src="${t.avatarURL}" class="photo" />\n          <h1>${n} ${r}</h1>\n          <h2>${l}</h2>\n          <h3>${u}, ${c}</h3>\n          <ul class="${t.socialMediaPosition}">\n            <li><a href="https://twitter.com/${i}"><i class="fa fa-twitter"></i></a></li>\n            <li><a href="https://github.com/${o}"><i class="fa fa-github"></i></a></li>\n            <li><a href="https://linkedin.com/${a}"><i class="fa fa-linkedin"></i></a></li>\n            <li><a href="https://instagram.com/${s}"><i class="fa fa-instagram"></i></a></li>\n          </ul>\n        </div>\n    `}window.onload=function(){window.variables={includeCover:!0,background:"https://images.unsplash.com/photo-1511974035430-5de47d3b95da",avatarURL:"https://randomuser.me/api/portraits/women/42.jpg",socialMediaPosition:"position-left",twitter:null,github:"alesanchezr",linkedin:null,instagram:null,name:null,lastname:null,role:null,country:null,city:null},r(window.variables),document.querySelectorAll(".picker").forEach((function(t){t.addEventListener("change",(function(t){let e={};e[t.target.getAttribute("for")]=""==this.value||"null"==this.value?null:"true"==this.value||"false"!=this.value&&this.value,r(Object.assign(window.variables,e))}))}))}},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(e=t.exports=n(4)(!1)).push([t.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);",""]),e.push([t.i,'.filters{background:white;width:100%}.filters li{display:inline-block;max-width:80px;padding:3px}.filters li label{display:block;font-size:12px;font-weight:900}.filters li input{width:100%}.filters li select{width:100%}.widget{position:relative;width:300px;height:350px;margin:50px auto;background:#fff;border-radius:5px;box-shadow:0 5px 25px rgba(0,0,0,0.1)}.widget .cover{height:160px;overflow:hidden}.widget .cover img{width:100%;height:auto;min-height:160px;border-radius:4px 4px 0 0}.widget .photo{position:absolute;top:85px;left:50%;width:100px;height:100px;margin:0 0 0 -55px;border:5px solid #fff;border-radius:50%}.widget h1,.widget h2,.widget h3{display:block;margin:10px 0;text-align:center;font-family:"Open Sans", sans-serif;font-size:16px;font-weight:300;color:#999}.widget h1{margin:60px 0 20px;font-size:26px;color:#000}.widget h3{font-size:12px}.widget ul{position:absolute;top:20px;padding:0;background:#2cdfd3}.widget ul.position-left{left:-26px}.widget ul.position-right{right:-27px}.widget ul li{list-style:none}.widget ul li a{display:block;padding:5px 6px;color:#fff;cursor:pointer;text-align:center;border-bottom:1px solid #2cd5ca;transition:background-color 0.3s}.widget ul li:hover>a{background-color:#2cd5ca}.widget ul li:first-child>a{border-radius:0 3px 0 0}.widget ul li:last-child>a{border:none;border-radius:0 0 3px 0}\n',""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t){return document.querySelector(t)},l=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=s.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,f=[],d=n(6);function p(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(w(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(w(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function g(t,e){var n=l(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=l(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function m(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),v(e,t.attrs),g(t,e),e}function v(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function w(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var a=c++;n=u||(u=m(e)),r=j.bind(null,n,a,!1),i=j.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),g(t,e),e}(e),r=U.bind(null,n,e),i=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=k.bind(null,n),i=function(){b(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&p(h(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var y,x=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function j(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function k(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function U(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=d(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}}]);
//# sourceMappingURL=bundle.js.map