var requirejs,require,define;!function(aa){function I(a){return"[object Function]"===L.call(a)}function J(a){return"[object Array]"===L.call(a)}function y(a,b){if(a){var c;for(c=0;c<a.length&&(!a[c]||!b(a[c],c,a));c+=1);}}function M(a,b){if(a){var c;for(c=a.length-1;c>-1&&(!a[c]||!b(a[c],c,a));c-=1);}}function s(a,b){return ga.call(a,b)}function m(a,b){return s(a,b)&&a[b]}function G(a,b){for(var c in a)if(s(a,c)&&b(a[c],c))break}function R(a,b,c,d){return b&&G(b,function(b,e){(c||!s(a,e))&&(d&&"string"!=typeof b?(a[e]||(a[e]={}),R(a[e],b,c,d)):a[e]=b)}),a}function u(a,b){return function(){return b.apply(a,arguments)}}function ba(a){if(!a)return a;var b=aa;return y(a.split("."),function(a){b=b[a]}),b}function B(a,b,c,d){return b=Error(b+"\nhttp://requirejs.org/docs/errors.html#"+a),b.requireType=a,b.requireModules=d,c&&(b.originalError=c),b}function ha(a){function b(a,b,c){var d,e,f,g,h,i,j,k=b&&b.split("/");d=k;var l=C.map,n=l&&l["*"];if(a&&"."===a.charAt(0))if(b){for(d=m(C.pkgs,b)?k=[b]:k.slice(0,k.length-1),b=a=d.concat(a.split("/")),d=0;b[d];d+=1)if(e=b[d],"."===e)b.splice(d,1),d-=1;else if(".."===e){if(1===d&&(".."===b[2]||".."===b[0]))break;d>0&&(b.splice(d-1,2),d-=2)}d=m(C.pkgs,b=a[0]),a=a.join("/"),d&&a===b+"/"+d.main&&(a=b)}else 0===a.indexOf("./")&&(a=a.substring(2));if(c&&l&&(k||n)){for(b=a.split("/"),d=b.length;d>0;d-=1){if(f=b.slice(0,d).join("/"),k)for(e=k.length;e>0;e-=1)if((c=m(l,k.slice(0,e).join("/")))&&(c=m(c,f))){g=c,h=d;break}if(g)break;!i&&n&&m(n,f)&&(i=m(n,f),j=d)}!g&&i&&(g=i,h=j),g&&(b.splice(0,h,g),a=b.join("/"))}return a}function c(a){A&&y(document.getElementsByTagName("script"),function(b){return b.getAttribute("data-requiremodule")===a&&b.getAttribute("data-requirecontext")===w.contextName?(b.parentNode.removeChild(b),!0):void 0})}function d(a){var b=m(C.paths,a);return b&&J(b)&&1<b.length?(c(a),b.shift(),w.require.undef(a),w.require([a]),!0):void 0}function e(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function f(a,c,d,f){var g,h,i=null,j=c?c.name:null,k=a,l=!0,n="";return a||(l=!1,a="_@r"+(M+=1)),a=e(a),i=a[0],a=a[1],i&&(i=b(i,j,f),h=m(K,i)),a&&(i?n=h&&h.normalize?h.normalize(a,function(a){return b(a,j,f)}):b(a,j,f):(n=b(a,j,f),a=e(n),i=a[0],n=a[1],d=!0,g=w.nameToUrl(n))),d=!i||h||d?"":"_unnormalized"+(N+=1),{prefix:i,name:n,parentMap:c,unnormalized:!!d,url:g,originalName:k,isDefine:l,id:(i?i+"!"+n:n)+d}}function g(a){var b=a.id,c=m(D,b);return c||(c=D[b]=new w.Module(a)),c}function h(a,b,c){var d=a.id,e=m(D,d);!s(K,d)||e&&!e.defineEmitComplete?g(a).on(b,c):"defined"===b&&c(K[d])}function i(a,b){var c=a.requireModules,d=!1;b?b(a):(y(c,function(b){(b=m(D,b))&&(b.error=a,b.events.error&&(d=!0,b.emit("error",a)))}),d||l.onError(a))}function j(){T.length&&(ia.apply(H,[H.length-1,0].concat(T)),T=[])}function k(a){delete D[a],delete E[a]}function n(a,b,c){var d=a.map.id;a.error?a.emit("error",a.error):(b[d]=!0,y(a.depMaps,function(d,e){var f=d.id,g=m(D,f);g&&!a.depMatched[e]&&!c[f]&&(m(b,f)?(a.defineDep(e,K[f]),a.check()):n(g,b,c))}),c[d]=!0)}function o(){var a,b,e,f,g=(e=1e3*C.waitSeconds)&&w.startTime+e<(new Date).getTime(),h=[],j=[],k=!1,l=!0;if(!t){if(t=!0,G(E,function(e){if(a=e.map,b=a.id,e.enabled&&(a.isDefine||j.push(e),!e.error))if(!e.inited&&g)d(b)?k=f=!0:(h.push(b),c(b));else if(!e.inited&&e.fetched&&a.isDefine&&(k=!0,!a.prefix))return l=!1}),g&&h.length)return e=B("timeout","Load timeout for modules: "+h,null,h),e.contextName=w.contextName,i(e);l&&y(j,function(a){n(a,{},{})}),g&&!f||!k||!A&&!da||z||(z=setTimeout(function(){z=0,o()},50)),t=!1}}function p(a){s(K,a[0])||g(f(a[0],null,!0)).init(a[1],a[2])}function q(a){var a=a.currentTarget||a.srcElement,b=w.onScriptLoad;return a.detachEvent&&!Y?a.detachEvent("onreadystatechange",b):a.removeEventListener("load",b,!1),b=w.onScriptError,(!a.detachEvent||Y)&&a.removeEventListener("error",b,!1),{node:a,id:a&&a.getAttribute("data-requiremodule")}}function r(){var a;for(j();H.length;){if(a=H.shift(),null===a[0])return i(B("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));p(a)}}var t,v,w,x,z,C={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},D={},E={},F={},H=[],K={},L={},M=1,N=1;return x={require:function(a){return a.require?a.require:a.require=w.makeRequire(a.map)},exports:function(a){return a.usingExports=!0,a.map.isDefine?a.exports?a.exports:a.exports=K[a.map.id]={}:void 0},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return C.config&&m(C.config,a.map.id)||{}},exports:K[a.map.id]}}},v=function(a){this.events=m(F,a.id)||{},this.map=a,this.shim=m(C.shim,a.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},v.prototype={init:function(a,b,c,d){d=d||{},this.inited||(this.factory=b,c?this.on("error",c):this.events.error&&(c=u(this,function(a){this.emit("error",a)})),this.depMaps=a&&a.slice(0),this.errback=c,this.inited=!0,this.ignore=d.ignore,d.enabled||this.enabled?this.enable():this.check())},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0,w.startTime=(new Date).getTime();var a=this.map;if(!this.shim)return a.prefix?this.callPlugin():this.load();w.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],u(this,function(){return a.prefix?this.callPlugin():this.load()}))}},load:function(){var a=this.map.url;L[a]||(L[a]=!0,w.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id;b=this.depExports;var d=this.exports,e=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,1>this.depCount&&!this.defined){if(I(e)){if(this.events.error)try{d=w.execCb(c,e,b,d)}catch(f){a=f}else d=w.execCb(c,e,b,d);if(this.map.isDefine&&((b=this.module)&&void 0!==b.exports&&b.exports!==this.exports?d=b.exports:void 0===d&&this.usingExports&&(d=this.exports)),a)return a.requireMap=this.map,a.requireModules=[this.map.id],a.requireType="define",i(this.error=a)}else d=e;this.exports=d,this.map.isDefine&&!this.ignore&&(K[c]=d,l.onResourceLoad)&&l.onResourceLoad(w,this.map,this.depMaps),k(c),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var a=this.map,c=a.id,d=f(a.prefix);this.depMaps.push(d),h(d,"defined",u(this,function(d){var e,j;j=this.map.name;var n=this.map.parentMap?this.map.parentMap.name:null,o=w.makeRequire(a.parentMap,{enableBuildCallback:!0});this.map.unnormalized?(d.normalize&&(j=d.normalize(j,function(a){return b(a,n,!0)})||""),d=f(a.prefix+"!"+j,this.map.parentMap),h(d,"defined",u(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),(j=m(D,d.id))&&(this.depMaps.push(d),this.events.error&&j.on("error",u(this,function(a){this.emit("error",a)})),j.enable())):(e=u(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),e.error=u(this,function(a){this.inited=!0,this.error=a,a.requireModules=[c],G(D,function(a){0===a.map.id.indexOf(c+"_unnormalized")&&k(a.map.id)}),i(a)}),e.fromText=u(this,function(b,d){var h=a.name,j=f(h),k=O;d&&(b=d),k&&(O=!1),g(j),s(C.config,c)&&(C.config[h]=C.config[c]);try{l.exec(b)}catch(m){return i(B("fromtexteval","fromText eval for "+c+" failed: "+m,m,[c]))}k&&(O=!0),this.depMaps.push(j),w.completeLoad(h),o([h],e)}),d.load(a.name,o,e,C))})),w.enable(d,this),this.pluginMaps[d.id]=d},enable:function(){E[this.map.id]=this,this.enabling=this.enabled=!0,y(this.depMaps,u(this,function(a,b){var c,d;if("string"==typeof a){if(a=f(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[b]=a,c=m(x,a.id))return this.depExports[b]=c(this),void 0;this.depCount+=1,h(a,"defined",u(this,function(a){this.defineDep(b,a),this.check()})),this.errback&&h(a,"error",this.errback)}c=a.id,d=D[c],!s(x,c)&&d&&!d.enabled&&w.enable(a,this)})),G(this.pluginMaps,u(this,function(a){var b=m(D,a.id);b&&!b.enabled&&w.enable(a,this)})),this.enabling=!1,this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]),c.push(b)},emit:function(a,b){y(this.events[a],function(a){a(b)}),"error"===a&&delete this.events[a]}},w={config:C,contextName:a,registry:D,defined:K,urlFetched:L,defQueue:H,Module:v,makeModuleMap:f,nextTick:l.nextTick,onError:i,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=C.pkgs,c=C.shim,d={paths:!0,config:!0,map:!0};G(a,function(a,b){d[b]?"map"===b?(C.map||(C.map={}),R(C[b],a,!0,!0)):R(C[b],a,!0):C[b]=a}),a.shim&&(G(a.shim,function(a,b){J(a)&&(a={deps:a}),!a.exports&&!a.init||a.exportsFn||(a.exportsFn=w.makeShimExports(a)),c[b]=a}),C.shim=c),a.packages&&(y(a.packages,function(a){a="string"==typeof a?{name:a}:a,b[a.name]={name:a.name,location:a.location||a.name,main:(a.main||"main").replace(ja,"").replace(ea,"")}}),C.pkgs=b),G(D,function(a,b){!a.inited&&!a.map.unnormalized&&(a.map=f(b))}),(a.deps||a.callback)&&w.require(a.deps||[],a.callback)},makeShimExports:function(a){return function(){var b;return a.init&&(b=a.init.apply(aa,arguments)),b||a.exports&&ba(a.exports)}},makeRequire:function(c,d){function e(b,h,j){var k,m;return d.enableBuildCallback&&h&&I(h)&&(h.__requireJsBuild=!0),"string"==typeof b?I(h)?i(B("requireargs","Invalid require call"),j):c&&s(x,b)?x[b](D[c.id]):l.get?l.get(w,b,c,e):(k=f(b,c,!1,!0),k=k.id,s(K,k)?K[k]:i(B("notloaded",'Module name "'+k+'" has not been loaded yet for context: '+a+(c?"":". Use require([])")))):(r(),w.nextTick(function(){r(),m=g(f(null,c)),m.skipMap=d.skipMap,m.init(b,h,j,{enabled:!0}),o()}),e)}return d=d||{},R(e,{isBrowser:A,toUrl:function(a){var d,e=a.lastIndexOf("."),f=a.split("/")[0];return-1!==e&&("."!==f&&".."!==f||e>1)&&(d=a.substring(e,a.length),a=a.substring(0,e)),w.nameToUrl(b(a,c&&c.id,!0),d,!0)},defined:function(a){return s(K,f(a,c,!1,!0).id)},specified:function(a){return a=f(a,c,!1,!0).id,s(K,a)||s(D,a)}}),c||(e.undef=function(a){j();var b=f(a,c,!0),d=m(D,a);delete K[a],delete L[b.url],delete F[a],d&&(d.events.defined&&(F[a]=d.events),k(a))}),e},enable:function(a){m(D,a.id)&&g(a).enable()},completeLoad:function(a){var b,c,e=m(C.shim,a)||{},f=e.exports;for(j();H.length;){if(c=H.shift(),null===c[0]){if(c[0]=a,b)break;b=!0}else c[0]===a&&(b=!0);p(c)}if(c=m(D,a),!b&&!s(K,a)&&c&&!c.inited){if(C.enforceDefine&&(!f||!ba(f)))return d(a)?void 0:i(B("nodefine","No define call for "+a,null,[a]));p([a,e.deps||[],e.exportsFn])}o()},nameToUrl:function(a,b,c){var d,e,f,g,h,i;if(l.jsExtRegExp.test(a))g=a+(b||"");else{for(d=C.paths,e=C.pkgs,g=a.split("/"),h=g.length;h>0;h-=1){if(i=g.slice(0,h).join("/"),f=m(e,i),i=m(d,i)){J(i)&&(i=i[0]),g.splice(0,h,i);break}if(f){a=a===f.name?f.location+"/"+f.main:f.location,g.splice(0,h,a);break}}g=g.join("/"),g+=b||(/\?/.test(g)||c?"":".js"),g=("/"===g.charAt(0)||g.match(/^[\w\+\.\-]+:/)?"":C.baseUrl)+g}return C.urlArgs?g+((-1===g.indexOf("?")?"?":"&")+C.urlArgs):g},load:function(a,b){l.load(w,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){("load"===a.type||ka.test((a.currentTarget||a.srcElement).readyState))&&(P=null,a=q(a),w.completeLoad(a.id))},onScriptError:function(a){var b=q(a);return d(b.id)?void 0:i(B("scripterror","Script error",a,[b.id]))}},w.require=w.makeRequire(),w}var l,w,x,D,t,E,P,K,Q,fa,la=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,ma=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,ea=/\.js$/,ja=/^\.\//;w=Object.prototype;var L=w.toString,ga=w.hasOwnProperty,ia=Array.prototype.splice,A=!("undefined"==typeof window||!navigator||!document),da=!A&&"undefined"!=typeof importScripts,ka=A&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,Y="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),F={},r={},T=[],O=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(I(requirejs))return;r=requirejs,requirejs=void 0}"undefined"!=typeof require&&!I(require)&&(r=require,require=void 0),l=requirejs=function(a,b,c,d){var e,f="_";return!J(a)&&"string"!=typeof a&&(e=a,J(b)?(a=b,b=c,c=d):a=[]),e&&e.context&&(f=e.context),(d=m(F,f))||(d=F[f]=l.s.newContext(f)),e&&d.configure(e),d.require(a,b,c)},l.config=function(a){return l(a)},l.nextTick="undefined"!=typeof setTimeout?function(a){setTimeout(a,4)}:function(a){a()},require||(require=l),l.version="2.1.5",l.jsExtRegExp=/^\/|:|\?|\.js$/,l.isBrowser=A,w=l.s={contexts:F,newContext:ha},l({}),y(["toUrl","undef","defined","specified"],function(a){l[a]=function(){var b=F._;return b.require[a].apply(b,arguments)}}),A&&(x=w.head=document.getElementsByTagName("head")[0],D=document.getElementsByTagName("base")[0])&&(x=w.head=D.parentNode),l.onError=function(a){throw a},l.load=function(a,b,c){var d,e=a&&a.config||{};if(A)return d=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),d.type=e.scriptType||"text/javascript",d.charset="utf-8",d.async=!0,d.setAttribute("data-requirecontext",a.contextName),d.setAttribute("data-requiremodule",b),!d.attachEvent||d.attachEvent.toString&&0>d.attachEvent.toString().indexOf("[native code")||Y?(d.addEventListener("load",a.onScriptLoad,!1),d.addEventListener("error",a.onScriptError,!1)):(O=!0,d.attachEvent("onreadystatechange",a.onScriptLoad)),d.src=c,K=d,D?x.insertBefore(d,D):x.appendChild(d),K=null,d;if(da)try{importScripts(c),a.completeLoad(b)}catch(f){a.onError(B("importscripts","importScripts failed for "+b+" at "+c,f,[b]))}},A&&M(document.getElementsByTagName("script"),function(a){return x||(x=a.parentNode),(t=a.getAttribute("data-main"))?(r.baseUrl||(E=t.split("/"),Q=E.pop(),fa=E.length?E.join("/")+"/":"./",r.baseUrl=fa,t=Q),t=t.replace(ea,""),r.deps=r.deps?r.deps.concat(t):[t],!0):void 0}),define=function(a,b,c){var d,e;"string"!=typeof a&&(c=b,b=a,a=null),J(b)||(c=b,b=[]),!b.length&&I(c)&&c.length&&(c.toString().replace(la,"").replace(ma,function(a,c){b.push(c)}),b=(1===c.length?["require"]:["require","exports","module"]).concat(b)),O&&((d=K)||(P&&"interactive"===P.readyState||M(document.getElementsByTagName("script"),function(a){return"interactive"===a.readyState?P=a:void 0}),d=P),d&&(a||(a=d.getAttribute("data-requiremodule")),e=F[d.getAttribute("data-requirecontext")])),(e?e.defQueue:T).push([a,b,c])},define.amd={jQuery:!0},l.exec=function(b){return eval(b)},l(r)}}(this),Namespace=function(a){for(var b=a.split("."),c=window,d=b.length,e=0;d>e;e++)c[b[e]]=c[b[e]]||{},c=c[b[e]];return c},requirejs.config({paths:{jquery:["//cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min"],underscore:["//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min"],backbone:["//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js"],enginecore:["/js/materia.enginecore"],creatorcore:["/js/materia.creatorcore"],score:["/js/materia.score"],storage:["/js/materia.storage.manager"],storage_table:["/js/materia.storage.table"]},shim:{underscore:{deps:["jquery"],exports:"_"},enginecore:{deps:["jquery"]},creatorcore:{deps:["jquery"]},score:{deps:["enginecore"],exports:"Score"},storage:{deps:["enginecore","storage_table"],exports:"Storage"},backbone:{deps:["underscore","jquery"],exports:"Backbone"}}});