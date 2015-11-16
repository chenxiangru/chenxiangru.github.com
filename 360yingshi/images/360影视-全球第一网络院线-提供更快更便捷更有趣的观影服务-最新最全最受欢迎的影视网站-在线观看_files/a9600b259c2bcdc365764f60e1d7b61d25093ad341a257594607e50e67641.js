(function(e){"use strict";function t(t,n){n=n||"#d20000";if(!e.console)return;e.console.log("%c"+t,"color:"+n)}function n(e,n,i){return function(){var s={},o=[];for(var u in e){if(!e.hasOwnProperty(u))continue;var a=e[u];if(!a.ok){s=s||{},o.push(i+" "+(isNaN(u)?u:"")+" fail.  depend on "+(a.deps?a.deps.join(","):"none"));for(var f=0;f<a.deps.length;f++){var l=a.deps[f];s[l]||(s[l]=1)}}}if(o.length>0){for(var u in s)r.get(u)||t(i+" "+u+" not exist!");for(var f=0;f<o.length;f++)t(o[f],n)}}}function s(e){return e=typeof e=="string"?[e]:e,e[e.length-1]===undefined&&e.pop(),e}function o(e,t,n){if(typeof e!="string")throw new Error("\u6a21\u5757\u7684key\u5fc5\u987b\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32");n===undefined?(n=t,t=undefined):t=s(t);var o=r.add(e,{deps:t,fun:n});o&&i.each(function(e){return r.checkReady(e.deps)?(e.fun.apply(null,r.getFuns(e.deps)),!0):!1})}function u(e,t){e=s(e);if(t===undefined)return r.get(e)?r.get(e).fun:undefined;r.checkReady(e)?t.apply(null,r.getFuns(e)):i.add({deps:e,fun:t})}var r=function(){function t(t){var n=[];for(var r=0;r<t.length;r++)n.push(e[t[r]].fun);return n}function r(){var n,r,s;do{s=!1;for(var o in e)r=e[o],n=r.deps,!r.ok&&i(n)&&(r.ok=!0,r.fun=r.fun.apply(null,t(n)),s=!0)}while(s)}function i(t){var n=!0;for(var r=0;r<t.length;r++)if(!e[t[r]]||!e[t[r]].ok){n=!1;break}return n}function s(n,s){var o=s.deps;return o&&!i(o)?(s.ok=!1,e[n]=s):(s.ok=!0,o?s.fun=s.fun.apply(null,t(o)):s.fun=s.fun(),e[n]=s,r()),s.ok}function o(t){return e[t]}var e={};return{add:s,checkReady:i,getFuns:t,get:o,debug:n(e,"#000066","define")}}(),i=function(){function t(t){e.push(t)}function r(t){var n=e.length;while(n--)t(e[n])&&e.splice(n,1)}var e=[];return{add:t,each:r,debug:n(e,"green","require")}}();e.define=o,e.require=u,e.__debug__=function(){r.debug(),i.debug()}})(this);define("elego.event",function(){function t(e,t){if(!this._event||!this._event[e])return;for(var n=0;n<this._event[e].length;n++)this._event[e][n].call(this,t)}function n(t){for(var n in e)e.hasOwnProperty(n)&&(typeof t=="function"&&(t.prototype[n]=e[n]),typeof t=="object"&&(t[n]=e[n]))}function r(e,t,n){if(!e)return;t=t.split(",");if(window.addEventListener)for(var r=0;r<t.length;r++)e.addEventListener(t[r],n,!1);else for(var r=0;r<t.length;r++)e.attachEvent("on"+t[r],function(){var t=window.event;t.target=t.srcElement,t.stopPropagation=function(){t.cancelBubble=!0},t.preventDefault=function(){t.returnValue=!1},n.call(e,t)})}function i(e,t,n){t=t.split(",");if(window.addEventListener)for(var r=0;r<t.length;r++)e.removeEventListener(t[r],n);else for(var r=0;r<t.length;r++)e.detachEvent("on"+t[r],n)}var e={on:function(e,t){typeof e=="string"&&(e=[e]);for(var n=0;n<e.length;n++)this._event=this._event||{},this._event[e[n]]=this._event[e[n]]||[],this._event[e[n]].push(t)},once:function(e,t){this._eventOnce=this._eventOnce||{},this._eventOnce[e]=this._eventOnce[e]||[],this._eventOnce[e].hasEmited===!0&&t.call(this,this._eventOnce[e].data),this._eventOnce[e]=this._eventOnce[e]||[],this._eventOnce[e].push(t)},un:function(){},emit:function(e,n,r){t.call(this,e,n),r&&t.call(document,e,n)},emitOnce:function(e,t){this._eventOnce=this._eventOnce||{},this._eventOnce[e]=this._eventOnce[e]||[];if(this._eventOnce[e].hasEmited===!0)return!1;this._eventOnce[e].hasEmited=!0,this._eventOnce[e].data=t;for(var n=0;n<this._eventOnce[e].length;n++)this._eventOnce[e][n].call(this,t);return!0}};return n(window.document),{eventable:n,on:r,off:i}});define("elego.format",function(){function e(e,n,r){return e.replace(/#{([^}]+)}/g,function(){if(typeof n=="string")return n;var e="";return n[arguments[1]]!==undefined&&(r.isEscape===!1?e=n[arguments[1]]:e=t(n[arguments[1]])),e})}function t(e){return(new String(e)).replace(/>/g,"&gt;").replace(/</g,"&lt")}return function(t,n,r){var i="",s="",o;r=r||{},typeof r=="function"?o=r:o=r.cb;if(Object.prototype.toString.call(n)=="[object Array]")for(var u=0;u<n.length;u++)o?s=o(u,n[u]):s=n[u],i+=e(t,s,r);else i=e(t,n,r);return i}});define("elego.serverdata",["other.jquery"],function(e){function r(t){if(t===undefined)return n;var r=t.split("."),i=n;for(var s=0;s<r.length;s++){i=i[r[s]];if(i===undefined)return}return e.isArray(i)?i=e.extend(!0,[],i):typeof i=="object"&&(i=e.extend(!0,{},i)),i}function i(e){if(e===undefined)return!1;var t=e.split("."),r=n||{};for(var i=0;i<t.length;i++){r=r[t[i]];if(r===undefined)return!1}return r!==undefined?!0:!1}function s(t,r){if(i(t))return!1;if(t.indexOf(".")>=0)throw new Error("not supported!");e.isArray(r)?r=e.extend(!0,[],result):typeof result=="object"&&(r=e.extend(!0,{},result)),n[t]=r}var t=window.systemserverdata||{},n=window.serverdata||{};return n=e.extend(t,n),window.serverdata=null,window.systemserverdata=null,{get:r,add:s,has:i}});define("elego.browser",function(){var e=window.navigator,t=e.userAgent.toLowerCase(),n=/(msie|webkit|gecko|presto|opera|safari|firefox|chrome|maxthon|android|ipad|iphone|webos|hpwos|trident)[ \/os]*([\d_.]+)/ig,r={platform:e.platform};t.replace(n,function(e,t,n){r[t]||(r[t]=n)}),r.opera&&t.replace(/opera.*version\/([\d.]+)/,function(e,t){r.opera=t}),!r.msie&&r.trident&&t.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/ig,function(e,t){r.msie=t});if(r.msie){r.ie=r.msie;var i=parseInt(r.msie,10);r["ie"+i]=!0}return r});define("elego.docport",function(){function e(){var e,t,n,r,i=document.documentElement;return e=i.scrollWidth,t=i.scrollHeight,n=i.clientWidth,r=i.clientHeight,{height:Math.max(t,r),width:Math.max(e,n)}}return{get:e}});define("elego.json",function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}if(window.JSON)return window.JSON;var JSON={};typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;return JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")},JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")},JSON});(function(){var e;e=16;var t=0,n=["ms","moz","webkit","o"];for(var r=0;r<n.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[n[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[r]+"CancelAnimationFrame"]||window[n[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var r=(new Date).getTime(),i=Math.max(0,e-(r-t)),s=window.setTimeout(function(){n(r+i)},i);return t=r+i,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})})();define("elego.viewport",function(){return{get:function(){return window.innerWidth!=null?{width:window.innerWidth,height:window.innerHeight}:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}}});require(["elego.browser","other.jquery"],function(e,t){"use strict";if(!e.ie||e.ie>=9)return;var n="js-playicon",r="g-playicon-mask",i="g-playicon-icon";t(document).on("mouseenter","."+n,function(){t("."+r,this).length==0&&t(this).removeClass(n).append("<span class='g-playicon-mask'></span><span class='g-playicon-icon'></span>")})});define("elego.lazy",["elego.viewport","elego.event"],function(e,t){"use strict";function c(i,o){o=o||"image",s=e.get();if(typeof i!="object")return;"length"in i||(i=[i]);for(var a=0;a<i.length;a++){if(i[a].offsetWidth==0)continue;var f={element:i[a],key:r,type:o};if(y(f))continue;n.push(f)}return u===!1&&(t.on(window,"scroll,resize",p),u=!0),r++}function h(e){}function p(){a!=null&&window.clearTimeout(a),a=window.setTimeout(d,f)}function d(){s=e.get();var r=n.length;while(r--)y(n[r])&&n.splice(r,1);a=null,n.length==0&&(t.off(window,"scroll,resize",p),u=!1)}function m(e){}function g(e){l.emit("lazyload",e.id)}function y(e){if(e.width===0)return!1;var t=e.element.getBoundingClientRect();return t.bottom+o>0&&t.top-o-s.height<0?(v[e.type](e.element),!0):!1}function b(e){var t=e.src;e.onerror=function(){this.src=t,e.onerror=null,e.onload=null},e.onload=function(){e.onerror=null,e.onload=null},e.src=e.getAttribute(i)}function w(e){for(var t=0;t<n.length;t++)if(n[t].element===e){n.splice(t,1);return}}function E(e){if(typeof e!="object")return;"length"in e||(e=[e]);for(var t=0;t<e.length;t++)w(e[t]),b(e[t])}var n=[],r=0,i="data-src",s,o=50,u=!1,a=null,f=20,l={};t.eventable(l);var v={image:b,iframe:m,other:g};return l.add=c,l.loadnow=E,l});require(["other.jquery"],function(e){e(document).on("click",".js-addfavorite",function(){try{window.external.AddFavorite("http://www.360kan.com","360\u5f71\u89c6_\u4e00\u7f51\u6253\u5c3d\u6240\u6709\u4e3b\u6d41\u89c6\u9891\u7f51\u7ad9\u7684\u5f71\u89c6\u5267")}catch(e){alert("\u8bf7\u4f7f\u7528\u6309\u952e Ctrl+d\uff0c\u6536\u85cf360\u5f71\u89c6_\u4e00\u7f51\u6253\u5c3d\u6240\u6709\u4e3b\u6d41\u89c6\u9891\u7f51\u7ad9\u7684\u5f71\u89c6\u5267")}return!1})});