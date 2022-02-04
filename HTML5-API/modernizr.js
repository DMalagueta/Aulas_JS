/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-batteryapi-canvas-geolocation-localstorage-pagevisibility-sessionstorage-setclasses !*/
!function(e,t,n){function r(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?x.className.baseVal=t:x.className=t)}function o(e,t){return typeof e===t}function s(){var e,t,n,r,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),h.push((r?"":"no-")+a.join("-"))}}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e,t){return!!~(""+e).indexOf(t)}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var s in e)if(e[s]in t)return n===!1?e[s]:(r=t[e[s]],o(r,"function")?u(r,n||t):r);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function p(){var e=t.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function m(e,n,r,o){var s,a,l,u,f="modernizr",d=i("div"),c=p();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+f,(c.fake?c:d).appendChild(s),c.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),a=n(d,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=u,x.offsetHeight):d.parentNode.removeChild(d),!!a}function v(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(t[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==c(e,null,"position")})}return n}function g(e,t,r,s){function u(){d&&(delete P.style,delete P.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var f=v(e,r);if(!o(f,"undefined"))return f}for(var d,c,p,m,g,y=["modernizr","tspan","samp"];!P.style&&y.length;)d=!0,P.modElem=i(y.shift()),P.style=P.modElem.style;for(p=e.length,c=0;p>c;c++)if(m=e[c],g=P.style[m],l(m,"-")&&(m=a(m)),P.style[m]!==n){if(s||o(r,"undefined"))return u(),"pfx"==t?m:!0;try{P.style[m]=r}catch(h){}if(P.style[m]!=g)return u(),"pfx"==t?m:!0}return u(),!1}function y(e,t,n,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(i+" ")+i).split(" ");return o(t,"string")||o(t,"undefined")?g(a,t,r,s):(a=(e+" "+z.join(i+" ")+i).split(" "),f(a,t,n))}var h=[],C=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr,Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}});var x=t.documentElement,_="svg"===x.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))});var w="Moz O ms Webkit",b=S._config.usePrefixes?w.split(" "):[];S._cssomPrefixes=b;var T=function(t){var r,o=prefixes.length,s=e.CSSRule;if("undefined"==typeof s)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+t;for(var i=0;o>i;i++){var a=prefixes[i],l=a.toUpperCase()+"_"+r;if(l in s)return"@-"+a.toLowerCase()+"-"+t}return!1};S.atRule=T;var z=S._config.usePrefixes?w.toLowerCase().split(" "):[];S._domPrefixes=z;var E={elem:i("modernizr")};Modernizr._q.push(function(){delete E.elem});var P={style:E.elem.style};Modernizr._q.unshift(function(){delete P.style}),S.testAllProps=y;var N=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?T(e):(-1!=e.indexOf("-")&&(e=a(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("batteryapi",!!N("battery",navigator),{aliases:["battery-api"]}),Modernizr.addTest("pagevisibility",!!N("hidden",t,!1)),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),s(),r(h),delete S.addTest,delete S.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);