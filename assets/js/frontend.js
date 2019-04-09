!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){
/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
e.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=o.default},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),i=r(o),u=n(3),c=r(u),s=n(4);t.default=function(){if("undefined"!=typeof window){var e={history:[]},t={offset:{},threshold:0,test:s.inViewport},n=(0,i.default)(function(){e.history.forEach(function(t){e[t].check()})},100);["scroll","resize","load"].forEach(function(e){return addEventListener(e,n)}),window.MutationObserver&&addEventListener("DOMContentLoaded",function(){new MutationObserver(n).observe(document.body,{attributes:!0,childList:!0,subtree:!0})});var r=function(n){if("string"==typeof n){var r=[].slice.call(document.querySelectorAll(n));return e.history.indexOf(n)>-1?e[n].elements=r:(e[n]=(0,c.default)(r,t),e.history.push(n)),e[n]}};return r.offset=function(e){if(void 0===e)return t.offset;var n=function(e){return"number"==typeof e};return["top","right","bottom","left"].forEach(n(e)?function(n){return t.offset[n]=e}:function(r){return n(e[r])?t.offset[r]=e[r]:null}),t.offset},r.threshold=function(e){return"number"==typeof e&&e>=0&&e<=1?t.threshold=e:t.threshold},r.test=function(e){return"function"==typeof e?t.test=e:t.test},r.is=function(e){return t.test(e,t)},r.offset(0),r}}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.options=n,this.elements=t,this.current=[],this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return n(e,[{key:"check",value:function(){var e=this;return this.elements.forEach(function(t){var n=e.options.test(t,e.options),r=e.current.indexOf(t),o=r>-1,i=n&&!o,u=!n&&o;i&&(e.current.push(t),e.emit("enter",t)),u&&(e.current.splice(r,1),e.emit("exit",t))}),this}},{key:"on",value:function(e,t){return this.handlers[e].push(t),this}},{key:"once",value:function(e,t){return this.singles[e].unshift(t),this}},{key:"emit",value:function(e,t){for(;this.singles[e].length;)this.singles[e].pop()(t);for(var n=this.handlers[e].length;--n>-1;)this.handlers[e][n](t);return this}}]),e}();t.default=function(e,t){return new r(e,t)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.inViewport=function(e,t){var n=e.getBoundingClientRect(),r=n.top,o=n.right,i=n.bottom,u=n.left,c=n.width,s=n.height,l={t:i,r:window.innerWidth-u,b:window.innerHeight-r,l:o},a={x:t.threshold*c,y:t.threshold*s};return l.t>t.offset.top+a.y&&l.r>t.offset.right+a.x&&l.b>t.offset.bottom+a.y&&l.l>t.offset.left+a.x}},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t,n){var r=n(5),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t,n){var r=n(1),o=n(8),i=n(10),u="Expected a function",c=Math.max,s=Math.min;e.exports=function(e,t,n){function l(t){var n=v,r=h;return v=h=void 0,w=t,y=e.apply(r,n)}function a(e){var n=e-b,r=e-w;return void 0===b||n>=t||n<0||S&&r>=m}function f(){var e=o();return a(e)?d(e):void(g=setTimeout(f,function(e){var n=e-w,r=t-(e-b);return S?s(r,m-n):r}(e)))}function d(e){return g=void 0,E&&v?l(e):(v=h=void 0,y)}function p(){var e=o(),n=a(e);if(v=arguments,h=this,b=e,n){if(void 0===g)return function(e){return w=e,g=setTimeout(f,t),x?l(e):y}(b);if(S)return g=setTimeout(f,t),l(b)}return void 0===g&&(g=setTimeout(f,t)),y}var v,h,m,y,g,b,w=0,x=!1,S=!1,E=!0;if("function"!=typeof e)throw new TypeError(u);return t=i(t)||0,r(n)&&(x=!!n.leading,m=(S="maxWait"in n)?c(i(n.maxWait)||0,t):m,E="trailing"in n?!!n.trailing:E),p.cancel=function(){void 0!==g&&clearTimeout(g),w=0,v=b=h=g=void 0},p.flush=function(){return void 0===g?y:d(o())},p}},function(e,t,n){var r=n(6);e.exports=function(){return r.Date.now()}},function(e,t,n){var r=n(7),o=n(1),i="Expected a function";e.exports=function(e,t,n){var u=!0,c=!0;if("function"!=typeof e)throw new TypeError(i);return o(n)&&(u="leading"in n?!!n.leading:u,c="trailing"in n?!!n.trailing:c),r(e,t,{leading:u,maxWait:t,trailing:c})}},function(e,t){e.exports=function(e){return e}}])},function(e,t,n){"use strict";n.r(t);var r,o=function(){if(!document.body.classList.contains("woocommerce"))return!1;i()},i=function(){var e,t;if(null===(e=document.querySelector(".shop-sidebar")))return!1;t=document.querySelector("html"),document.querySelectorAll(".nv-sidebar-toggle").forEach(function(n){n.addEventListener("click",function(){e.classList.toggle("sidebar-open"),t.classList.toggle("menu-openend")})})},u=n(0),c=n.n(u),s=function(){return window.innerWidth<=960},l=null,a=null,f=2,d=function(){if(null===document.querySelector(".blog.nv-index-posts"))return!1;p(),v()},p=function(){if("enabled"!==NeveProperties.masonry||NeveProperties.masonryColumns<2)return!1;a=document.querySelector(".nv-index-posts .posts-wrapper"),l=new Masonry(a,{itemSelector:"article.layout-grid",columnWidth:"article.layout-grid",percentPosition:!0})},v=function(){if("enabled"!==NeveProperties.infiniteScroll)return!1;c()(".infinite-scroll-trigger").on("enter",function(){if(void 0!==parent.wp.customize)return console.log("customizer-request"),parent.wp.customize.requestChangesetUpdate().then(h()),!1;console.log("request"),h()})},h=function(){var e=document.querySelector(".infinite-scroll-trigger");if(null===e)return!1;if(document.querySelector(".nv-loader").style.display="block",f>NeveProperties.infiniteScrollMaxPages)return e.parentNode.removeChild(e),document.querySelector(".nv-loader").style.display="none",!1;var t,n,r,o=document.querySelector(".nv-index-posts .posts-wrapper"),i=y(NeveProperties.infiniteScrollEndpoint+f);f++,t=i,n=function(e){o.innerHTML+=JSON.parse(e),m()},(r=new XMLHttpRequest).onload=function(){4===r.readyState&&200===r.status&&n(r.response)},r.open("GET",t,!0),r.send(null)},m=function(){null!==l&&imagesLoaded(a).on("progress",function(e){l.layout(),l.reloadItems()})},y=function(e){return void 0===wp.customize?e:(e+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?e:e+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview)},g=function(){r=window.location.href,b(),w(),x(),S()},b=function(){if(s())return!1;var e=document.querySelectorAll(".sub-menu .sub-menu");if(0===e.length)return!1;var t=window.innerWidth;forEach(e,function(e){var n=e.offset().left;/webkit.*mobile/i.test(navigator.userAgent)&&(n-=window.scrollX),n+e.outerWidth()>=t&&(e.style.right="100%",e.style.left="auto")})},w=function(){var e=document.querySelectorAll(".nv-nav-wrap a");if(0===e.length)return!1;e.forEach(function(e){e.addEventListener("click",function(e){var t=e.target.getAttribute("href");if(null===t)return!1;t.indexOf(r)>-1&&(document.body.classList.remove("is-menu-sidebar"),document.querySelectorAll(".dropdown-open").forEach(function(e){e.classList.remove("dropdown-open")}))})})},x=function(){document.querySelectorAll(".caret-wrap").forEach(function(e){e.addEventListener("click",function(e){if(this.classList.toggle("dropdown-open"),this.parentNode.parentNode.querySelector(".sub-menu").classList.toggle("dropdown-open"),s())return!1})})},S=function(){var e=document.querySelectorAll(".nv-nav-search"),t=document.querySelectorAll(".menu-item-nav-search"),n=document.querySelectorAll(".close-responsive-search"),r=document.querySelector("html");t.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),e.classList.toggle("active"),r.classList.add("menu-opened"),s()||E(e,"active")})}),e.forEach(function(e){e.addEventListener("click",function(e){e.stopPropagation()})}),n.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),t.forEach(function(e){e.classList.remove("active")}),r.classList.remove("menu-opened")})})},E=function(e,t){var n=document.querySelector(".nav-clickaway-overlay");if(null!==n)return!1;(n=document.createElement("div")).classList.add("nav-clickaway-overlay"),document.querySelector("#nv-primary-navigation").after(n),n.addEventListener("click",function(r){e.classList.remove(t),n.parentNode.removeChild(n)})};window.addEventListener("DOMContentLoaded",function(){o(),d(),g()})}]);