/**
 * tomasky.core.all.js
 * Created by hai on 2015/12/11.
 */
/**
 * tomasky.core.base.js
 * Created by hai on 2015/12/11.
 */
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});

/**
 * tmsky common js
 * Created by hai on 2015/11/27.
 */
(function (global) {
    var tmsky = tmsky || {},

        __toString = Object.prototype.toString;
    // hasOwnProperty = Object.prototype.hasOwnProperty,
    // push = Array.prototype.push,
    // slice = Array.prototype.slice,
    // indexOf = Array.prototype.indexOf;

    tmsky.version = '0.0.2';

    tmsky.noop = function () {
    };

    /**
     * 获取js对象类型
     * @param obj
     * @returns {*}
     */
    tmsky.type = function (obj) {
        var type;
        if (obj == null) {
            type = String(obj);
        } else {
            type = __toString.call(obj).toLowerCase();
            type = type.substring(8, type.length - 1);
        }
        return type;
    }

    /**
     * js对象扩展方法
     * @returns {*|{}}
     */
    tmsky.extend = function () {
        var src, options, name, copy, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (typeof target === "boolean") {
            deep = target;
            target = arguments[i] || {};
            i = 2;
        }
        if (typeof target !== "object" && !tmsky.isFunction(target)) {
            target = {};
        }
        // 默认扩展自身TC
        if (i === length) {
            target = this;
            i--;
        }
        for (; i < length; i++) {
            if ((options = arguments[i]) != null) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    // 防止死循环
                    if (target === copy) {
                        continue;
                    }
                    if (deep && copy && typeof copy === "object" && !copy.nodeTCype) {
                        if (tmsky.isArray(copy)) {
                            clone = src && tmsky.isArray(src) ? src : [];
                        } else {
                            clone = src && (typeof src === "object" && !src.nodeTCype) ? src : {};
                        }
                        target[name] = tmsky.extend(deep, clone, copy);

                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }
        return target;
    }

    /**
     * avalon 获取vm
     * @param name
     * @returns {*}
     */
    tmsky.getVm = function (name) {
        return avalon.vmodels[name];
    }

    tmsky.extendUI = function (obj) {
        if (tmsky.isEmptyObject(obj)) {
            return
        }
        tmsky.extend({ui : tmsky.ui || {}});
        tmsky.extend(tmsky.ui, obj)
    }

    // 暴露给全局变量
    global.tmsky = tmsky;

    // 脚本中的路径资源 标记作用 用于后期构建替换
    global.__uri = function (path) {
        return path
    }
    var _console = {
        log : function () {
        }
    }
    global.console = global.console || _console;

})(window);
/**
 * tmsky.const
 * Created by hai on 2015/12/11.
 */
(function (global, tmsky) {
    tmsky.extend({
        ENCRYPT_FLAG : {
            CACHE : {
                LOCALSTORAGE : true
            }
        },
        banks : [
            '中国工商银行', '中国农业银行', '中国建设银行', '招商银行', '中国银行', '中国邮政储蓄银行', '交通银行', '中信银行', '中国民生银行', '安徽省农村信用社', '鞍山银行', '北京银行', '北京农商行', '渤海银行', '包商银行',
            '长安银行', '长沙银行', '沧州银行', '成都银行', '重庆农村商业银行', '常熟农商银行', '重庆银行', '承德银行', '成都农商银行', '东亚银行', '德阳银行', '大连银行', '东莞农村商业银行', '东莞银行', '东营银行', '德州银行',
            '鄂尔多斯银行', '富邦华一银行', '福建省农村信用社联合社', '阜新银行', '富滇银行', '福建海峡银行', '广发银行', '贵阳银行', '桂林银行', '贵州省农村信用社联合社', '广西北部湾银行', '广东省农村信用社联合社', '广东华兴银行',
            '广州农村商业银行', '赣州银行', '广西壮族自治区农村信用社联合社', '广东南粤银行', '广州银行', '华夏银行', '恒丰银行', '湖北省农村信用合作联社', '韩亚银行', '徽商银行', '哈尔滨银行', '葫芦岛银行', '海口联合农商银行', '杭州银行', '河北银行', '邯郸银行', '海南省农村信用社', '汉口银行', '湖北银行', '湖州银行',
            '江苏银行', '江苏省农村信用社联合社', '济宁银行', '吉林银行', '吉林省农村信用社联合社', '晋商银行', '江苏太仓农村商业银行', '晋城银行', '江西省农村信用社', '九江银行', '嘉兴银行', '江苏长江商业银行',
            '江苏江阴农村商业银行', '锦州银行', '昆仑银行', '昆山农村商业银行', '莱商银行', '龙江银行', '柳州银行', '兰州银行', '临商银行', '洛阳银行', '廊坊银行', '绵阳市商业银行',
            '宁波银行', '南京银行', '宁夏银行', '宁夏黄河农村商业银行', '南充市商业银行', '内蒙古银行', '南昌银行', '浦发银行', '平安银行', '攀枝花市商业银行',
            '平顶山银行', '齐商银行', '青岛银行', '泉州银行', '青海银行', '齐鲁银行', '日照银行', '上海银行', '绍兴银行', '深圳农村商业银行', '顺德农商银行', '上饶银行', '陕西信合', '上海农商银行', '苏州银行',
            '四川省农村信用社联合社', '山东省农村信用社联合社', '天津银行', '泰安市商业银行', '天津农商银行', '天津滨海农村商业银行', '台州银行', '潍坊银行', '乌鲁木齐市商业银行', '威海市商业银行', '温州银行', '武汉农村商业银行',
            '吴江农村商业银行', '兴业银行', '邢台银行', '厦门银行', '西安银行', '新韩银行', '鄞州银行', '烟台银行', '友利银行', '云南省农村信用社', '营口银行', '中国光大银行',
            '浙江民泰商业银行', '浙商银行', '枣庄银行', '珠海华润银行', '郑州银行', '张家港农村商业银行', '中原银行', '张家口市商业银行', '浙江稠州商业银行', '浙江泰隆商业银行',
            '浙江省农村信用社联合社', '自贡市商业银行','贵州银行','重庆渝北银座村镇银行','重庆黔江银座村镇银行','衡水银行','曲靖市商业银行','深圳福田银座村镇银行','无锡农村商业银行','乌海银行','玉溪市商业银行',
            '浙江景宁银座村镇银行','浙江三门银座村镇银行'
        ]
    })
})(window, tmsky);
/**
 * tmsky.ajax
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {

    function _serialize(obj, ret, namespace) {
        var hasOwnProperty = Object.prototype.hasOwnProperty, k, v

        namespace = namespace ? namespace + '.' : '';
        for (k in obj) {
            if (hasOwnProperty.call(obj, k)) {
                v = obj[k];
                if (tmsky.isArray(v)) {
                    v.forEach(function (el, i) {
                        _serialize(el, ret, namespace + k + '[' + i + ']')
                    });
                } else if (tmsky.type(v) === 'object') {
                    _serialize(v, ret, namespace + k)
                } else {
                    if (ret.constructor === jQuery)
                        $('<input/>').attr('name', namespace + k).val(v).appendTo(ret)
                    else
                        ret[namespace + k] = v
                }
            }
        }
    }

    tmsky.extend({
        ajax : {
            /**
             * form序列化
             * @param {Object} obj form对象
             * @param {String} namespace
             * @param ret {Object}
             *
             */
            serialize : function (obj, namespace, ret) {
                var hasOwnProperty = Object.prototype.hasOwnProperty,
                    ret = ret || {}, k, v

                namespace = namespace ? namespace + '.' : '';
                for (k in obj) {
                    if (hasOwnProperty.call(obj, k)) {
                        v = obj[k];
                        if (tmsky.isArray(v)) {
                            v.forEach(function (el, i) {
                                _serialize(el, ret, namespace + k + '[' + i + ']')
                            });
                        } else if (tmsky.type(v) === 'object') {
                            _serialize(v, ret, namespace + k)
                        } else {
                            if (ret.constructor === jQuery)
                                $('<input/>').attr('name', namespace + k).val(v).appendTo(ret)
                            else
                                ret[namespace + k] = v
                        }
                    }
                }

                return ret
            },
            /**
             * 模拟原生表单提交
             * @param url
             * @param method
             * @param data
             */
            formSubmit : function (url, method, data) {
                var $form = $('<form></form>', {
                    'method' : method,
                    'action' : url
                });
                _serialize(data, null, $form)
                $form.css('display', 'none').appendTo($('body')).submit() // ie 下必须插入文档后提交
            }
        }
    })
})(tmsky);
/**
 * tmsky.array
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {

    tmsky.extend({
        array : {
            /**
             * 据值获取索引
             * @param arr
             * @param value
             * @returns {number}
             */
            getIndexByUniqueValue : function (arr, value) {
                var index = -1;
                for (var i = 0, len = arr.length; i < len; i++) {
                    if (arr[i] == value) {
                        index = i;
                        break;
                    }
                }
                return index;
            },
            /**
             * 去重
             * @param arr
             * @returns {*}
             */
            distinct : function (arr) {
                if (!arr.length) {
                    return arr;
                }
                var self = arr, first = arr[0];
                var _t = arr.concat().sort();
                _t.sort(function (a, b) {
                    if (a == b) {
                        self.splice(self.indexOf(a), 1);
                    }
                });
                if (!self.length) {
                    self.push(first);
                }
                return self;
            },
            /**
             * 递归连接，目前最多支持三级子元素数组即四维数组形式
             * @param {Array} arr 原始数组
             * @param {String} join 最终连接符
             * @param {String} oneJoin 二维数组连接符
             * @param {String} twoJoin 三维数组连接符
             * @param {String} threeJoin 四维数组连接符
             * @returns {*|string}
             */
            joinAll : function (arr, join, oneJoin, twoJoin, threeJoin) {
                for (var i = 0; i < arr.length; i++) {
                    var _i = arr[i];
                    if (tmsky.isArray(_i)) {// 第一层数组子元素
                        for (var j = 0; j < _i.length; j++) {
                            var _j = _i[j];
                            if (tmsky.isArray(_j)) {// 第二层数组子元素
                                for (var k = 0; k < _j.length; k++) {
                                    var _k = _j[k];
                                    if (tmsky.isArray(_k)) {// 第三层数组子元素，不再深入
                                        _j[k] = _k.join(threeJoin);
                                    }
                                }
                                _i[j] = _j.join(twoJoin);
                            }
                        }
                        arr[i] = _i.join(oneJoin);
                    }
                }
                return arr.join(join || ',');
            }
        }
    });
})(tmsky);
/**
 * tmsky.browser
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    tmsky.extend({
        browser : {
            isFromMobile : function () {
                var sUserAgent = navigator.userAgent.toLowerCase(),
                    bIsIpad = sUserAgent.match(/ipad/i) == "ipad",
                    bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os",
                    bIsMidp = sUserAgent.match(/midp/i) == "midp",
                    bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
                    bIsUc = sUserAgent.match(/ucweb/i) == "ucweb",
                    bIsAndroid = sUserAgent.match(/android/i) == "android",
                    bIsCE = sUserAgent.match(/windows ce/i) == "windows ce",
                    bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                return (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM);
            },
            isFromWx : function () {
                var ua = window.navigator.userAgent.toLowerCase(),
                    matchs = ua.match(/MicroMessenger/i);
                return matchs && matchs == 'micromessenger'
            },
            getWxVersion : function () {
                var ua = window.navigator.userAgent.toLowerCase(),
                    matchs = ua.match(/(MicroMessenger\/([0-9.]+))\s*/i);
                return matchs && matchs[2];
            }
        }
    })
})(tmsky);
/**
 * tmsky.date
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    var _Seconds = 1000,
        _Minute = 60 * _Seconds,
        _Houre = 60 * _Minute,
        _Day = 24 * _Houre,
        _Week = 7 * _Day,
        _Week_Name = ['日', '一', '二', '三', '四', '五', '六'],
        DATCE_TCYPE = {
            y : 'FullYear',
            M : 'Month',
            d : 'Date',
            h : 'Hours',
            w : 'Week',
            m : 'Minutes',
            s : 'Seconds',
            S : 'Milliseconds'
        },
        _holiday = {
            lunarInfo : [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0],
            sTermInfo : [0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758],
            solarTerm : new Array("", "", "", "", "", "", "清明", "", "", "", "", "", "", "", "立秋", "", "", "", "", "", "立冬", "", "", "冬至"),
            lFtv : new Array("0101*春节", "0115 元宵", "0505 端午", "0707 七夕", "0715 中元", "0815 中秋", "0909 重阳", "1208 腊八", "1224 小年", "0100*除夕"),
            sFtv : new Array("0101*元旦", "0214 情人", "0308 妇女", "0401 愚人", "0501 劳动", "0504 青年", "0601 儿童", "0910 教师", "1001*国庆", "1224 平安", "1225 圣诞"),
            Lunar : function (objDate) {
                var returndata = {};
                var i,
                    leap = 0,
                    temp = 0
                var baseDate = new Date(1900, 0, 31)
                var offset = (objDate - baseDate) / 86400000

                returndata.dayCyl = offset + 40
                returndata.monCyl = 14

                for (i = 1900; i < 2050 && offset > 0; i++) {
                    temp = this.lYearDays(i)
                    offset -= temp
                    returndata.monCyl += 12
                }
                if (offset < 0) {
                    offset += temp;
                    i--;
                    returndata.monCyl -= 12
                }

                returndata.year = i
                returndata.yearCyl = i - 1864

                leap = this.leapMonth(i) // 闰哪个月
                returndata.isLeap = false

                for (i = 1; i < 13 && offset > 0; i++) {
                    // 闰月
                    if (leap > 0 && i == (leap + 1) && returndata.isLeap == false) {
                        --i;
                        returndata.isLeap = true;
                        temp = this.leapDays(returndata.year);
                    } else {
                        temp = this.monthDays(returndata.year, i);
                    }

                    // 解除闰月
                    if (returndata.isLeap == true && i == (leap + 1))
                        returndata.isLeap = false

                    offset -= temp
                    if (returndata.isLeap == false)
                        returndata.monCyl++
                }

                if (offset == 0 && leap > 0 && i == leap + 1)
                    if (returndata.isLeap) {
                        returndata.isLeap = false;
                    } else {
                        returndata.isLeap = true;
                        --i;
                        --returndata.monCyl;
                    }

                if (offset < 0) {
                    offset += temp;
                    --i;
                    --returndata.monCyl;
                }
                returndata.month = i
                returndata.day = offset + 1
                return returndata;

            },
            getHoliday : function (date) {
                var sDObj = tmsky.date.date(date);
                var lDObj = this.Lunar(sDObj);
                var lDPOS = new Array(3);
                var SY = sDObj.getFullYear();
                var SM = sDObj.getMonth();
                var SD = sDObj.getDate();
                var festival = '',
                    solarTerms = '',
                    solarFestival = '',
                    lunarFestival = '', tmp1, tmp2;
                // 农历节日
                var lFtv = this.lFtv;
                var sFtv = this.sFtv;
                for (i in lFtv)
                    if (lFtv.hasOwnProperty(i) && lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
                        tmp1 = Number(RegExp.$1) - lDObj.month
                        tmp2 = Number(RegExp.$2) - parseInt(lDObj.day)
                        if (tmp1 == 0 && tmp2 == 0)
                            lunarFestival = RegExp.$4
                    }
                // 国历节日
                for (i in sFtv)
                    if (sFtv.hasOwnProperty(i) && sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
                        tmp1 = Number(RegExp.$1) - (SM + 1)
                        tmp2 = Number(RegExp.$2) - SD
                        if (tmp1 == 0 && tmp2 == 0)
                            solarFestival = RegExp.$4
                    }
                // 节气
                tmp1 = new Date((31556925974.7 * (SY - 1900) + this.sTermInfo[SM * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5))
                tmp2 = tmp1.getUTCDate()
                if (tmp2 == SD)
                    solarTerms = this.solarTerm[SM * 2 + 1]
                tmp1 = new Date((31556925974.7 * (SY - 1900) + this.sTermInfo[SM * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5))
                tmp2 = tmp1.getUTCDate()
                if (tmp2 == SD)
                    solarTerms = this.solarTerm[SM * 2]

                if (solarTerms == '' && solarFestival == '' && lunarFestival == '')
                    festival = '';
                else
                    festival = solarTerms + solarFestival + lunarFestival;

                return festival;
            },
            lYearDays : function (y) {
                var i,
                    sum = 348
                for (i = 0x8000; i > 0x8; i >>= 1)
                    sum += (this.lunarInfo[y - 1900] & i) ? 1 : 0
                return (sum + this.leapDays(y))
            },
            leapDays : function (y) {
                if (this.leapMonth(y))
                    return ((this.lunarInfo[y - 1900] & 0x10000) ? 30 : 29)
                else
                    return (0)
            },
            // ==== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
            leapMonth : function (y) {
                return (this.lunarInfo[y - 1900] & 0xf)
            },
            // ====================================== 传回农历 y年m月的总天数
            monthDays : function (y, m) {
                return ((this.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29)
            }
        }

    tmsky.extend({
        date : {
            __FIELDS__ : {
                FORMAT : {
                    DATE : 'yyyy-MM-dd',
                    TIME : 'HH:mm:ss',
                    DATE_TIME : 'yyyy-MM-dd HH:mm:ss',
                    DATE_TIME_S : 'yyyy-MM-dd HH:mm:ss.SSS'
                },
                TIME : {
                    SECONDS : _Seconds,
                    MINUTE : _Minute,
                    HOURS : _Houre,
                    DAY : _Day,
                    WEEK : _Week
                }
            },
            getFormat : function (fmt) {
                if (fmt) {
                    fmt = typeof fmt === 'string' ? fmt : this.__FIELDS__.FORMAT.DATE
                } else {
                    fmt = null
                }
                return fmt
            },
            // 生成日期
            date : function (arg) {
                if (!arg)
                    return new Date();
                if (typeof arg === 'string') {
                    arg = arg.replace(/-/g, "/");
                    return new Date(arg);
                }
                return tmsky.isDate(arg) ? arg : new Date(arg)
            },
            yesterday : function (fmt) {
                var d = this.plusDate(new Date(), -1, DATCE_TCYPE.d)
                return fmt ? this.format(d, this.getFormat(fmt)) : d
            },
            // 今天日期字符
            today : function () {
                return this.format(new Date())
            },
            tomorrow : function (fmt) {
                var d = this.plusDate(new Date(), 1, DATCE_TCYPE.d)
                return fmt ? this.format(d, this.getFormat(fmt)) : d
            },
            parse : function (s) {
                return tmsky.isDate(s) ? s : new Date(Date.parse(s))
            },
            getWeek : function (date) {
                return _Week_Name[this.date(date).getDay()]
            },
            // 获取节日（包括阴历）
            getHoliday : function () {
                return _holiday.getHoliday.apply(_holiday, arguments)
            },
            getDayOfWeek : function (sDate) {
                var nWeek = null
                var oDate = new Date(sDate.replace(/-/g, "/"));
                nWeek = oDate.getDay();
                nWeek = (nWeek === 0) ? 7 : nWeek;
                return nWeek;
            },
            // 返回传入日期为星期几（星期一到星期日 分别为一---日）
            getDayOfWeekName : function (nDayOfWeek) {
                var index = 0;
                if (typeof nDayOfWeek == "string") {
                    index = Number(nDayOfWeek);
                } else {
                    index = nDayOfWeek;
                }
                var weekDays = ["一", "二", "三", "四", "五", "六", "日"];
                return weekDays[index - 1];
            },
            // 日期格式化
            format : function (d, fmt) {
                if (!tmsky.isDate(d))
                    d = new Date(d)
                var o = {
                    "M+" : d.getMonth() + 1, // 月份
                    "d+" : d.getDate(), // 日
                    "h+" : d.getHours(), // 小时
                    "m+" : d.getMinutes(), // 分
                    "s+" : d.getSeconds(), // 秒
                    "q+" : Math.floor((d.getMonth() + 3) / 3), // 季度
                    "S" : d.getMilliseconds() // 毫秒
                };
                fmt = fmt || this.__FIELDS__.FORMAT.DATE;
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(fmt)) {
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                    }
                }
                return fmt;
            },
            /**
             * 指定日期加上 xx日期单位 后的日期
             *
             * @param date 日期或日期字符串(String|Date)
             * @param type [日期类型 | 默认为 天 'd'] 具体看 DATCE_TCYPE
             * @param num 向后几日期单位 默认为 1
             * @param fmt 格式化
             * @return Date新对象
             */
            plusDate : function (date, num, type, fmt) {
                if (date) {
                    num = num == null ? 1 : +num;
                    type = type ? type.length === 1 ? DATCE_TCYPE[type] : type : DATCE_TCYPE.d;
                    var d = this.date(date),
                        setter = 'set' + type,
                        getter = 'get' + type;
                    if (DATCE_TCYPE.w === type) {
                        d.setDate(d.getDate() + num * 7);
                    } else {
                        d[setter](d[getter]() + num);
                    }
                    if (fmt)
                        return this.format(d, tmsky.isBoolean(fmt) ? this.__FIELDS__.FORMAT.DATE : fmt)
                    return d;
                }
            },
            /**
             * 获取 结束日期 与开始日期 的差值（可能为负值）
             *
             * @param start [开始日期]
             * @param finish [结束日期]
             * @param type [差值类型 | 默认为 天] type值如：'d', 'y' 'M'....
             * @return [差值]
             */
            getDatePeriod : function (start, finish, type) {
                var start = this.date(start);
                var finish = this.date(finish);
                switch (type) {
                    case 'y':
                        return finish.getFullYear() - start.getFullYear();
                    case 'M':
                        return (finish.getFullYear() - start.getFullYear()) * 12 + (finish.getMonth() - start.getMonth());
                    case 'w':
                        return Math.floor((finish * 1 - start * 1) / _Day / 7);
                    case 'h':
                        return Math.floor((finish * 1 - start * 1) / _Houre);
                    case 'm':
                        return Math.floor((finish * 1 - start * 1) / 60 / 1000);
                    case 's':
                        return Math.floor((finish * 1 - start * 1) / 1000);
                    case 'S':
                        return Math.floor((finish * 1 - start * 1));
                    default:
                        return Math.floor((finish * 1 - start * 1) / _Day);
                }
            },
            /**
             * 获取某月的最后一天， date : 某月的一天
             */
            getLastDayOfMon : function (date) {
                date = typeof date == 'string' ? new Date(date.replace(/-/g, "/")) : date;
                var nextMon = tmsky.date.addMonths(date, 1);
                var lastday = new Date(nextMon.getTime() - this.__FIELDS__.TIME.DAY);
                return tmsky.date.format(lastday);
            },
            equals : function (d1, d2) {
                return d1 && d2 ? this.diffTime(d1, d2) == 0 : false
            },
            after : function (d1, d2) {
                return d1 && d2 ? this.diffTime(d1, d2) < 0 : false
            },
            before : function (d1, d2) {
                return d1 && d2 ? this.diffTime(d1, d2) > 0 : false
            },
            prevDate : function (date, fmt) {
                return date ? tmsky.date.addDays(date, -1, fmt) : tmsky.date.yesterday(fmt)
            },
            nextDate : function (date, fmt) {
                return date ? tmsky.date.addDays(date, 1, fmt) : tmsky.date.tomorrow(fmt)
            },
            getToMonthsEnd : function (date) {
                var tmpDate = this.date(date);
                var toDate = this.addMonths(tmpDate, 1);
                var days = this.diffDays(tmpDate, toDate);
                var tmp = this.format(tmpDate, "yyyy-MM");
                toDate = tmp + "-" + days;
                return toDate;
            },
            addMinutes : function (date, minutes, fmt) {
                return this.plusDate(date, minutes, DATCE_TCYPE.m, this.getFormat(fmt))
            },
            addHours : function (date, hours, fmt) {
                return this.plusDate(date, hours, DATCE_TCYPE.h, this.getFormat(fmt))
            },
            addDays : function (date, days, fmt) {
                return this.plusDate(date, days, DATCE_TCYPE.d, this.getFormat(fmt))
            },
            addWeeks : function (d1, weeks, fmt) {
                return this.plusDate(date, weeks, DATCE_TCYPE.w, this.getFormat(fmt))
            },
            addMonths : function (date, months, fmt) {
                return this.plusDate(date, months, DATCE_TCYPE.M, this.getFormat(fmt))
            },
            addQuarters : function (date, q, fmt) {
                return this.plusDate(date, q * 4, DATCE_TCYPE.M, this.getFormat(fmt))
            },
            addYears : function (date, years, fmt) {
                return this.plusDate(date, years, DATCE_TCYPE.y, this.getFormat(fmt))
            },
            diffTime : function (d1, d2, unit) {
                d1 = this.parse(d1)
                d2 = this.parse(d2)
                var t1 = d1.getTime(), t2 = d2.getTime(), diffTime = t2 - t1
                return unit ? diffTime / unit : diffTime
            },
            diffSeconds : function (d1, d2) {
                return this.diffTime(d1, d2, this.__FIELDS__.TIME.SECONDS)
            },
            diffMinutes : function (d1, d2) {
                return this.diffTime(d1, d2, this.__FIELDS__.TIME.MINUTE)
            },
            diffHours : function (d1, d2) {
                return this.diffTime(d1, d2, this.__FIELDS__.TIME.HOURS)
            },
            diffDays : function (d1, d2) {
                return this.diffTime(d1, d2, this.__FIELDS__.TIME.DAY)
            },
            getDiffDays : function (date1, date2, resultType, dataType, join) {
                var rt = !resultType ? 'string' : resultType, dt = !dataType ? 'string' : (('date' == dataType && 'string' == resultType) ? 'string' : dataType);
                var d1t = typeof date1 == 'string', d2t = typeof date2 == 'string';
                var d1 = d1t ? new Date(date1.replace(/-/g, '/')) : date1, d2 = d2t ? new Date(date2.replace(/-/g, '/')) : date2;
                var diffDay = this.diffDays(d1, d2);
                if (diffDay == 0) {
                    return rt == 'string' ? (d1t ? date1 : tmsky.Date.format(date1)) : ([dt == 'string' ? (d1t ? date1 : tmsky.Date.format(date1)) : (d1t ? d1 : date1)]);
                }
                var addDay = diffDay > 0 ? 1 : -1, dateArr = [], addDate = null;
                dateArr.push(d1);
                for (var i = 1; i <= diffDay; i++) {
                    addDate = new Date();
                    addDate.setDate(d1.getDate() + i * addDay);
                    dateArr.push(addDate);
                }
                if (rt == 'string') {
                    return this.convertDateToString(dateArr).join(join || ',');
                }
                if (dt == 'string') {
                    return this.convertDateToString(dateArr);
                }
                return dateArr;
            },
            isBetween : function (sDate, sBegin, sEnd) {
                if (this.diffDays(sBegin, sDate) < 0 || this.diffDays(sEnd, sDate) > 0) {
                    return false;
                }
                return true;
            },
            convertDateToString : function (dateArr, format) {
                var result = [],
                    f = tmsky.isNull(format) ? this.__FIELDS__.FORMAT.DATE : format;
                for (var i = 0; i < dateArr.length; i++) {
                    result.push(dateArr[i].format(f));
                }
                return result;
            }
        }
    })
})(tmsky);
/**
 * tmsky.json
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    tmsky.extend({
        json : {
            parse : function (str) {
                if (tmsky.isEmpty(str)) return {}
                var r = str
                try {
                    if (tmsky.isString(str)) r = JSON.parse(str)
                } catch (err) {
                    r = null
                    tmsky.log('tmsky.json.parse error: ')
                    tmsky.log(err)
                    tmsky.log("origin str: " + str)
                }
                return r || {}
            },
            stringify : function (obj) {
                if (tmsky.isEmpty(obj)) return ''
                var s = obj
                try {
                    if (tmsky.isObject(obj)) s = JSON.stringify(obj)
                } catch (err) {
                    s = null
                    tmsky.log('tmsky.json.stringify error: ')
                    tmsky.log(err)
                }
                return s || ''
            },
            //json convert 2 form data
            toForm : function (params, prefix) {
                if (!params) {
                    return;
                }

                params = typeof params == "string" ? JSON.parse(params) : params;
                var result = "";
                var isArr = function (obj) {
                    return Object.prototype.toString.call(obj) === "[object Array]";
                }
                var isObject = function (obj) {
                    return Object.prototype.toString.call(obj) === "[object Object]";
                }
                var arr2json = function (arr, prefix) {
                    var result = "";
                    prefix = prefix || "";
                    for (var i = 0, len = arr.length; i < len; i++) {
                        var curr = arr[i];
                        for (name in curr) {
                            var currPrefix = prefix + "[" + i + "].",
                                _curr = curr[name];
                            if (isArr(_curr)) {
                                result += arr2json(_curr, currPrefix + name);
                            } else if (isObject(_curr)) {
                                for (cname in _curr) {
                                    result += "&" + currPrefix + name + "." + cname + "=" + (_curr[cname] || null);
                                }
                            } else {
                                result += "&" + currPrefix + name + "=" + (curr[name] || null);
                            }
                        }
                    }
                    return result;
                }

                if (isArr(params)) {
                    result = arr2json(params, prefix || "params");
                } else {
                    for (name in params) {
                        if (isArr(params[name])) {
                            result += arr2json(params[name], name);
                        } else if (isObject(params[name])) {
                            var curr = params[name];
                            for (cname in curr) {
                                result += "&" + name + "." + cname + "=" + (curr[cname] || null);
                            }
                        } else {
                            result += "&" + name + "=" + (params[name] || null);
                        }
                    }
                }

                return result.substring(1);
            }
        }
    })
})(tmsky);
/**
 * tmsky.log
 * Created by hai on 2015/11/27.
 */
(function (tmsky, global) {
    var __TOMASKY_FE_LOGGER__ = {
        isDev : false,
        _console_ : global.console || {log : false},
        isLogable : function () {
            return __TOMASKY_FE_LOGGER__._console_.log && __TOMASKY_FE_LOGGER__.isDev
        },
        log : function (msg, newLine, tab) {
            if (__TOMASKY_FE_LOGGER__.isLogable()) {
                if (Object.prototype.toString.call(msg) == '[object Object]') {
                    try {
                        msg = JSON.stringify(msg)
                    } catch (err) {
                        msg = 'JSON stringify error.'
                    }
                }
                __TOMASKY_FE_LOGGER__._console_.log(msg)
                __TOMASKY_FE_LOGGER__.escapeCharacter('\n', newLine).escapeCharacter('\t', tab)
            }
            return __TOMASKY_FE_LOGGER__
        },
        disableLog : function () {
            __TOMASKY_FE_LOGGER__.isDev = false
        },
        enableLog : function () {
            __TOMASKY_FE_LOGGER__.isDev = true
        },
        getLogEnvFlag : function () {
            return __TOMASKY_FE_LOGGER__.isDev
        },
        escapeCharacter : function (character, num) {
            if (__TOMASKY_FE_LOGGER__.isLogable() && num && character) {
                if (Object.prototype.toString.call(num) == '[object Number]') {
                    num = num > 0 ? num : 1
                } else {
                    num = 1
                }
                var nls = []
                for (var i = 0; i < num; i++) {
                    nls.push(character)
                }
                __TOMASKY_FE_LOGGER__._console_.log(nls.join(''))
            }
            return __TOMASKY_FE_LOGGER__
        }
    }
    tmsky.extend({
        log : __TOMASKY_FE_LOGGER__.log,
        //escapeCharacter : __TOMASKY_FE_LOGGER__.escapeCharacter,
        disableLog : __TOMASKY_FE_LOGGER__.disableLog,
        enableLog : __TOMASKY_FE_LOGGER__.enableLog,
        getLogEnvFlag : __TOMASKY_FE_LOGGER__.getLogEnvFlag
    })
})(tmsky, window);
/**
 * tmsky.number
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    tmsky.extend({
        number : {
            /**
             * 数字格式化
             *
             * @param num [数字]
             * @param pattern # , 0 [模式] tmsky.numberFmt(12345.00, '#,###.00') 12,345.00 tmsky.numberFmt(12345.00, '#,###.##') 12,345 tmsky.numberFmt(12345.006) 12345
             */
            format : function (num, pattern) {
                var strArr = num ? String(num).split('.') : [0],
                    fmtArr = pattern ? String(pattern).split('.') : [''],
                    ret = '';
                // 整数部分
                var str = strArr[0],
                    fmt = fmtArr[0],
                    i = str.length - 1,
                    comma = false;
                for (var j = fmt.length - 1; j >= 0; j--) {
                    switch (fmt.substr(j, 1)) {
                        case '#':
                            if (i >= 0)
                                ret = str.substr(i--, 1) + ret;
                            break;
                        case '0':
                            if (i >= 0)
                                ret = str.substr(i--, 1) + ret;
                            else
                                ret = '0' + ret;
                            break;
                        case ',':
                            comma = true;
                            ret = ',' + ret;
                            break;
                    }
                }
                if (i >= 0) {
                    if (comma) {
                        var len = str.length;
                        for (; i >= 0; i--) {
                            ret = str.substr(i, 1) + ret;
                            if (i > 0 && (len - i) % 3 === 0)
                                ret = ',' + ret;
                        }

                    } else
                        ret = str.substr(0, i + 1) + ret;
                }
                ret += '.';
                // 小数部分
                str = strArr.length > 1 ? strArr[1] : '';
                fmt = fmtArr.length > 1 ? fmtArr[1] : '';
                i = 0;
                for (var j = 0; j < fmt.length; j++) {
                    switch (fmt.substr(j, 1)) {
                        case '#':
                            if (i < str.length)
                                ret += str.substr(i++, 1);
                            break;
                        case '0':
                            if (i < str.length)
                                ret += str.substr(i++, 1);
                            else
                                ret += '0';
                            break;
                    }
                }
                return ret.replace(/^,+/, '').replace(/\.$/, '')
            },
            /**
             * 去除非数字字符
             *
             * @param str [description]
             * @param strict [description]
             * @return [description]
             */
            filt : function (str, strict) {
                var rg = /[^\d\.]+/g

                str = str || str + ''
                if (strict) {
                    rg = /[^\d]+/g
                }
                return str.replace(rg, '')
            },
            /**
             * 精度保留
             * @param {Number} n 数值
             * @param {Number} [precision] 精度|默认：2
             * @returns {*}
             */
            toFixed : function (n, precision) {
                if (!n || isNaN(n))
                    return 0;
                return new Number(n).toFixed(precision || 2);
            },
            fixFloat : function (number, num, def) {
                if (tmsky.isEmpty(number)) {
                    return (tmsky.isEmpty(def)) ? '' : def;
                }
                if (parseInt(number) == number) {
                    return number;
                }
                return parseFloat(parseFloat(number).toFixed(num));
            }
        }
    })
})(tmsky);
/**
 * tmsky.string
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    tmsky.extend({
        string : {
            // 去除空格
            trim : function (text) {
                text = text == null ? '' : (text + '');
                return ''.trim ? ''.trim.call(text) : text.replace(rtrim, "");
            },
            trimAll : function (str) {
                return str.replace(/\s*/g, "");
            },
            ltrim : function (str) {
                return str.replace(/^\s*/g, "");
            },
            rtrim : function (str) {
                return str.replace(/\s*$/g, "");
            },
            isEmpty : function (str) {
                return tmsky.isEmpty(str, true)
            },
            // 字符串过长截取 (默认为 ...)
            truncate : function (str, max, truncation) {
                var rs = str || '';
                truncation = truncation || '...';
                if (this.utf8len(rs) > max) {
                    // rs = rs.substr(0, max) + truncation;
                    var length = 0, index;
                    for (var i = 0, len = rs.length; i < len; i++) {
                        length += tmsky.isChinese(rs.charAt(i)) ? 2 : 1;
                        if (length > max) {
                            index = i;
                            break;
                        }
                    }
                    if (index) {
                        rs = rs.substring(0, index) + truncation;
                    }
                }
                return rs;
            },
            utf8len : function (s) {
                return s.replace(/[^\x00-\xff]/g, "xx").length;
            },
            clearLocalStorage : function (item) {
                if (item) {
                    localStorage.removeItem(item);
                } else {
                    localStorage.clear();
                }
            },
            // 判断某个字符是否是汉字
            isCHS : function (s, i) {
                return s.charCodeAt(i) > 255 || s.charCodeAt(i) < 0;
            },
            toChars : function (s) {
                var chars = [];
                for (var i = 0, len = s.length; i < len; i++) {
                    chars[i] = [s.substr(i, 1), this.isCHS(s, i)];
                }
                return chars;
            },
            // 截取字符串（从start字节到end字节）
            subCHString : function (s, start, end) {
                var len = 0, str = "";
                var arr = this.toChars(s)
                for (var i = 0, lenth = s.length; i < length; i++) {
                    len += arr[i][1] ? 2 : 1;
                    if (end < len)
                        return str;
                    else if (start < len)
                        str += arr[i][0];
                }
                return str;
            },
            /**
             * 判断字符串中是否存在指定的子字符串
             *
             * @param strs
             * @param exist
             *            必选。要查找的子字符串，可有两种格式：1、字符串，多个子字符默认以","分隔、若分隔符不是","则需在sign参数位置指明自定义的分隔符；2、数组格式
             * @param split
             *            可选。是否分隔，默认分隔【当要查找的子字符串为字符串格式且只有一个查找项是，此参数最好设置为false】
             * @param sign
             *            可选。分隔符，默认","
             */
            exist : function (strs, exist, split, sign) {
                if (undefined == exist || null == exist) {
                    return false;
                }

                var result = false, s = (undefined == split || null == split) ? true : split, f = sign || ",";
                if (typeof exist == "string") {
                    if (s) {
                        _strCheck(strs, exist.split(f));
                    } else {
                        result = strs.indexOf(exist, 0) != -1;
                    }
                } else {// 数组格式
                    _strCheck(strs, exist);
                }

                function _strCheck(str, strArr) {
                    for (var i = 0; i < strArr.length; i++) {
                        if (str.indexOf(strArr[i], 0) != -1) {
                            result = true;
                            break;
                        }
                    }
                }

                return result;
            },
            notExist : function (strs, exist, split, sign) {
                return !tmsky.string.exist(strs, exist, split, sign);
            },
            startsWith : function (str, start) {
                return str.substring(0, start.length) == start;
            },
            notStartsWith : function (str, start) {
                return !tmsky.string.startsWith(str, start)
            },
            endsWith : function (str, end) {
                return str.substring(str.length - end.length, str.length) == end;
            },
            notEndsWith : function (str, end) {
                return !tmsky.string.endsWith(str, end)
            },
            getBytes : function(str) {
            	var cArr = str.match(/[^\x00-\xff]/ig);
            	return str.length + (cArr == null ? 0 : cArr.length);
            }
        }
    })
})(tmsky);
/**
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    tmsky.extend({
        util : {
            timestampUrl : function (url, params) {
                url = url || ''
                var c = 0
                if (!tmsky.isEmpty(params)) {
                    for (name in params) {
                        url += (c > 0 ? '&' : '?') + name + '=' + params[name]
                        c++
                    }
                }
                return url + (c > 0 ? '&' : '?') + 'temp=' + new Date().getTime()
            },
            generateUrlEndStr : function () {
                return '?temp=' + new Date().getTime()
            },
            urlParams : function () {
                var params = {}, searchs = location.search
                if (searchs) {
                    searchs = searchs.substring(1)
                    if (searchs) {
                        searchs = searchs.split('&')
                        for (i in searchs) {
                            var curr = searchs[i].split('=')
                            params[curr[0]] = curr[1]
                        }
                    }
                }
                return params
            },
            /**
             * 字符编码
             * @param str
             * @param num 进制单位。默认转16进制
             * @returns {string}
             */
            string2unicode : function (str, num) {
                var arr = []
                if (str) {
                    num = num || 16
                    arr.push(str.charCodeAt(0).toString(num))
                    for (var i = 1, len = str.length; i < len; i++) {
                        arr.push(',' + str.charCodeAt(i).toString(num))
                    }
                }
                return arr.join('')
            },
            /**
             * 字符解码。默认解16进制
             * @param str
             * @param num 进制单位。默认转16进制
             * @returns {string}
             */
            unicode2string : function (str, num) {
                var arr = []
                if (str) {
                    num = num || 16
                    str = str.split(',')
                    for (var i = 0, len = str.length; i < len; i++) {
                        arr.push(String.fromCharCode(parseInt(str[i], num)))
                    }
                }
                return arr.join('')
            }
        }
    })
})(tmsky);
/**
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    tmsky.extend({
        isType : function (obj) {
            return obj && tmsky.isType(obj)
        },
        isUndefined : function (obj) {
            return undefined === obj
        },
        isNull : function (obj) {
            return undefined === obj || null === obj
        },
        // 判断是否为空（undefined/null/空字符） 注意不包含空白字符
        isEmpty : function (str, trim) {
            if (this.isNull(str)) {
                return true
            }
            if (typeof str === 'string') {
                str = trim ? tmsky.string.trim(str) : str
                return str == ''
            }
            //目前只判断undefined、null、string是否为空，其它暂不提供
            return false
        },
        isEmptyObject : function (obj) {
            return this.isNull(obj) || this.isPlanObject(obj)
        },
        isPlanObject : function (obj) {
            if (this.isObject(obj)) {
                var count = 0
                for (name in obj) {
                    if (obj.hasOwnProperty(name)) {
                        count++
                        break
                    }
                }
                return count == 0
            } else {
                return false
            }
        },
        isString : function (obj) {
            return obj && typeof obj == "string";
        },
        isObject : function (obj) {
            return obj && tmsky.type(obj) === "object";
        },
        isArray : function (obj) {
            return obj && tmsky.type(obj) === "array";
        },
        isFunction : function (obj) {
            return obj && tmsky.type(obj) === "function";
        },
        isDate : function (obj) {
            return obj && tmsky.type(obj) === 'date'
        },
        isInt : function (str) {
            return /^(-|\+)?\d+$/.test(str);
        },
        isNumber : function (obj) {
            return obj && tmsky.type(obj) === 'number'
        },
        isBoolean : function (obj) {
            return obj && tmsky.type(obj) === 'boolean'
        },
        // 判断是否为正数
        isBigZero : function (str) {
            return /^\d+$/.test(str);
        },
        isFloatOne : function (str) {
            return /^-?\d+\.?\d{0,1}$/.test(str);
        },
        // 判断是否为负数
        isLessZero : function (str) {
            return /^-\d+$/.test(str);
        },
        // 判断是否为float型数值
        isFloat : function (str) {
            return /^(-?\d+)(\.\d+)?$/.test(str);
        },
        // 判断是否为非负数
        isNoLessZero : function (str) {
            return /^\d+(\.?\d+)?$/.test(str);
        },
        isEmail : function (str) {
            var pattern = /^[a-zA-Z0-9_\-]{1,}@[a-zA-Z0-9_\-]{1,}\.[a-zA-Z0-9_\-.]{1,}$/;
            return pattern.test(str);
        },
        isPhone : function (str) {
            var reg = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/;
            return reg.test(str);
        },
        isMobile : function (str) {
            var reg = /^(13|14|15|18)[0-9]{9}$/;
            return reg.test(str);
        },
        // 是否为中文
        isChinese : function (str) {
            var pattern = /[^\x00-\xff]/g;
            return pattern.test(str);
        },
        isQQ : function (str) {
            return /^\d{5,9}$/.test(str);
        },
        /**
         * 是否在指定dom中
         * @param curr 当前dom
         * @param target 目标dom
         *
         */
        inDomScope : function (curr, target) {
            if (!curr || !target)
                return false
            curr = typeof curr === 'string' ? $(curr) : curr
            if (curr.hasClass(target) || curr.attr("id") == target)
                return true
            var tg = curr.parents(target)
            return tg && tg.length
        }
    })
})(tmsky);
/**
 * tmsky.cipher js文本加密 hai
 * dependences:[tmsky.string2unicode|tmsky.unicode2string]
 * Created by hai on 2015/12/10.
 */
(function (tmsky) {
    tmsky.extend({
        cipher : {
            encrypt : function (data, options) {
                if (data) {
                    data = !tmsky.isString(data) ? tmsky.json.stringify(data) : data
                    options = this.getOptions(options)
                    if (options.reverse) {
                        data = data.split('').reverse().join('')
                    }
                    if (options.toHex) {
                        data = tmsky.util.string2unicode(data)
                    }
                    if (options.encodeURIComponent) {
                        data = encodeURIComponent(data)
                    }
                }
                return data || ''
            },
            decrypt : function (data, options) {
                if (data) {
                    data = !tmsky.isString(data) ? tmsky.json.stringify(data) : data
                    options = this.getOptions(options)
                    if (options.encodeURIComponent) {
                        data = decodeURIComponent(data)
                    }
                    if (options.toHex) {
                        if (data.charAt(0) == '"') {
                            data = data.substring(1)
                        }
                        if (data.charAt(data.length - 1) == '"') {
                            data = data.substring(0, data.length - 1)
                        }
                        data = tmsky.util.unicode2string(data)
                    }
                    if (options.reverse) {
                        data = data.split('').reverse().join('')
                    }
                }
                return data || ''
            },
            getOptions : function (options) {
                options = $.extend({}, {
                    reverse : true,
                    toHex : true,
                    encodeURIComponent : true
                }, options)
                return options
            },
            cache : function (key, data, options) {
                localStorage.setItem(key, tmsky.ENCRYPT_FLAG.CACHE.LOCALSTORAGE ? this.encrypt(data, options) : data)
            },
            getFromCache : function (key, options) {
                var cache = localStorage.getItem(key)
                if (cache) {
                    cache = tmsky.ENCRYPT_FLAG.CACHE.LOCALSTORAGE ? this.decrypt(cache, options) : cache
                    cache = tmsky.json.parse(cache, false)
                }
                return cache
            }
        }
    })
})(tmsky);
/**
 * Created by hai on 2016/2/22.
 */
(function (tmsky, global) {
    var _location_ = {
        hash: function () {
            var i = global.location.href.indexOf('#'),
                hash = ''
            if (i != -1) {
                hash = global.location.href.substr(i)
                var searchIndex = hash.indexOf('?')
                if (searchIndex != -1) {
                    hash = hash.substr(0, searchIndex)
                }
            }
            return hash
        },
        host: function host() {
            return global.location.host
        },
        hastname: function hastname() {
            return global.location.hostname
        },
        href: function href() {
            return global.location.href
        },
        pathname: function pathname() {
            return global.location.pathname
        },
        port: function port() {
            return global.location.port
        },
        protocol: function protoco() {
            return global.location.protocol
        },
        search: function search() {
            var href = global.location.href,
                searchIndex = href.indexOf('?'),
                search = ''
            if (searchIndex != -1) {
                search = href.substr(searchIndex)
                var hashIndex = search.indexOf('#')
                if (hashIndex != -1) {
                    search = search.substr(0, hashIndex)
                }
            }
            return search
        },
        urlPrams: function urlPrams() {
            var params = {}, searchs = tmsky.location().search
            if (searchs) {
                searchs = searchs.substring(1)
                if (searchs) {
                    searchs = searchs.split('&')
                    for (i in searchs) {
                        var curr = searchs[i].split('=')
                        params[curr[0]] = curr[1]
                    }
                }
            }
            return params
        },
        toString: function toString() {
            var _locations = tmsky.location(),
                href = _locations.host + _locations.pathname
            if (_locations.search) {
                href += _locations.search
            }
            if (_locations.hash) {
                href += _locations.hash
            }
            return href
        }
    }
    tmsky.extend({
        location: function () {
            return {
                hash: _location_.hash(),
                host: _location_.host(),
                hastname: _location_.hastname(),
                href: _location_.href(),
                pathname: _location_.pathname(),
                port: _location_.port(),
                protocol: _location_.protocol(),
                search: _location_.search(),
                urlPrams: _location_.urlPrams(),
                toString: _location_.toString()
            }
        }
    })
})(tmsky, window);
//特别注意，tc.ui.dialog是默认嵌入到tomasky.base.js里的；因为dialog区别于其它特殊ui，使用较频繁
/**
 * tmsky.ui.dialog
 * Created by hai on 2015/11/27.
 */
(function (tmsky) {
    // 弹窗消息
    var dialog = (function () {
        var _count = 0,
            _defaults = {
                title : '',
                content : '',
                visible : true,
                width : null,
                height : null,
                button : null,
                time : 0,
                lock : true,
                maskName : '',
                skin : '',
                okText : '确定',
                ok : null,
                cancel : null,
                cancelText : '取消',
                parent : null,
                openAnimate : null,
                closeAnimate : null
            },
        // 可用 dialog._$(name) 获取 data-dom 的jQuery对象
        // 已知dom: wrap,dialog,title,content,foot,buttons,head
            _template = "<div class=\"tomasky-ui-dialog\">\r\n    <div class=\"ui-dialog-inner\" data-dom=\"dialog\">\r\n        <div class=\"ui-dialog-head\" data-dom=\"head\">\r\n            <h3 class=\"ui-dialog-title\" data-dom=\"title\"></h3>\r\n            <a class=\"ui-dialog-close\" href=\"javascript:;\" data-dom=\"close\">×</a>\r\n        </div>\r\n        <div class=\"ui-dialog-body\" data-dom=\"body\"></div>\r\n        <div class=\"ui-dialog-foot\" data-dom=\"foot\">\r\n            <div class=\"ui-dialog-btns\" data-dom=\"buttons\"></div>\r\n        </div>\r\n    </div>\r\n</div>";

        var Dialog = function (config) {
            // 配置分析
            config = config || {};// 如果没有配置参数

            if (typeof config === 'string') {
                config = {
                    content : config
                }
            }
            // 合并默认配置
            config = tmsky.extend({}, _defaults, config)

            if (!tmsky.isArray(config.button)) {
                config.button = [];
            }

            // 确定按钮
            if (config.ok) {// 如果有确认按钮则追加到button数组里
                config.button.push({
                    id : 'ok',
                    text : config.okText,
                    cb : config.ok,
                    highlight : true
                    // 高亮
                })
            }

            // 取消按钮
            if (config.cancel) {// 如果有取消按钮则追加到button数组里
                config.button.push({
                    id : 'cancel',
                    text : config.cancelText,
                    cb : config.cancel
                });
            }

            config.id = config.id || 'dialog-' + _count++;

            if (Dialog.list[config.id]) {
                return Dialog.list[config.id]
            }

            return Dialog.list[config.id] = new Dialog.fn._create(config)
        }

        // jQuery式无需new返回新实例
        Dialog.fn = Dialog.prototype = {
            visible : function () {
                var $dialog = this._$('wrap')

                $dialog.addClass('tomasky-ui-dialog-visible')
                this.config.openAnimate ? this.config.openAnimate($dialog) : this._$('wrap').show()
                return this
            },
            hide : function () {
                this._$('wrap').removeClass('tomasky-ui-dialog-visible').fadeOut()

                this.time().unlock()

                return this
            },
            close : function () {
                var self = this,
                    $dialog = this._$('wrap');
                if (!$dialog) {
                    return self;
                }

                self.time().unlock()

                this.config.closeAnimate ? this.config.closeAnimate($dialog) : this._$('wrap').fadeOut('fast', function () {
                    $(this).remove()
                })

                delete Dialog.list[self.config.id]
                // 删除，减少资源
                for (var i in self) {
                    delete self[i]
                }

                return self
            },
            title : function (text) {
                if (text) {
                    this._$('title').html(text).parent().show()
                } else {
                    this._$('title').parent().empty().hide()
                }
                return this
            },
            content : function (content) {
                this._$('body').html(content)
                return this
            },
            width : function (width) {
                if (tmsky.type(width) === 'number') {
                    this._$('body').width(width)
                }
                return this
            },
            height : function (height) {
                if (tmsky.type(height) === 'number') {
                    this._$('body').height(height)
                }
                return this
            },
            button : function (arr) {
                var buttons = this._$('buttons')[0],
                    callback = this._callback,
                    arr = arr || []

                var i, el, len, text, button, className, id
                buttons.innerHTML = ''
                for (i = 0, len = arr.length; i < len; i++) {
                    el = arr[i]
                    id = el.id
                    button = document.createElement('button')
                    className = 'ui-dialog-btn' // 按钮class
                    // 如果高亮
                    if (el.highlight) {
                        className += ' ui-dialog-btn-on'
                    }
                    // 如果配置的按钮有class则追加下
                    if (el.className) {
                        className += ' ' + el.className
                    }
                    button.innerHTML = el.text
                    button.className = className
                    button.setAttribute('callback', id); // 为了委托事件用
                    callback[id] = {}
                    // 如果有回调
                    if (el.cb) {
                        callback[id].cb = el.cb
                    }

                    buttons.appendChild(button)
                }

                buttons.style.display = arr.length ? '' : 'none';

                return this
            },
            /**
             * 定时关闭
             *
             * @param {Number} 单位秒, 无参数则停止计时器
             */
            time : function (time) {
                var self = this,
                    timer = self._timer;

                timer && clearTimeout(timer);

                if (time) {
                    self._timer = setTimeout(function () {
                        self._click('close')
                    }, time)
                }

                return self
            },
            clearTimer : function () {
                var self = this,
                    timer = self._timer;
                timer && clearTimeout(timer);
                return self;
            },
            lock : function (maskName) {
                var div = document.createElement("div"),
                    className = 'tomasky-ui-dialog-mask'

                if (maskName) {
                    className += ' ' + maskName
                }

                div.className = className

                document.body.appendChild(div)

                this._dom.mask = $(div).fadeIn()

                return this
            },
            unlock : function () {
                this._$('mask').fadeOut().remove()
            },
            _create : function (config) {
                var self = this

                self._callback = {} // 按钮事件空间
                self._dom = {} // jQuery对象
                self._createHTML(config)
                self.config = config

                self._$('close').on('click', function () {
                    self._click("cancel")
                })

                config.skin && self._$('wrap').addClass(config.skin);// 设置皮肤

                self.title(config.title) // 设置标题
                    .content(config.content) // 设置内容
                    .width(config.width) // 设置宽高
                    .height(config.height) // 设置宽高
                    .button(config.button) // 设置按钮
                    .time(config.time)// 设置自动关闭
                    ._addEvent()// 绑定事件

                config.lock && self.lock(config.maskName);// 如果有遮罩

                self[config.visible ? 'visible' : 'hide']();

                return self;
            },
            // 创建元素
            _createHTML : function (config) {
                var $wrap = $(_template),
                    $parent = config.parent ? $(config.parent) : $(document.body)

                $parent.append($wrap)
                $wrap.find('.ui-dialog-inner').addClass(config.id)
                this._dom.wrap = $wrap

                return this
            },
            // 获取jQuery对象
            _$ : function (i) {
                var dom = this._dom;
                return dom && (dom[i] || (dom[i] = dom.wrap.find('[data-dom=' + i + ']')));
            },
            // 事件代理
            _addEvent : function () {
                var self = this
                self._$("buttons").on("click", "button", function () {
                    var callbackID,
                        $this = $(this);

                    callbackID = $this.attr('callback');
                    callbackID && self._click(callbackID);
                })

                return this
            },
            // 按钮回调函数触发
            _click : function (id) {
                var self = this,
                    fn = self._callback[id] && self._callback[id].cb;
                return (typeof fn !== 'function' || fn.call(self) !== false) ? self.close() : self;
            }
        }

        Dialog.fn._create.prototype = Dialog.fn;

        Dialog.version = '0.0.1'

        Dialog.list = {}

        Dialog.get = function (id) {
            if (id) {
                return Dialog.list[id];
            }
        }

        // ================================================ API ==============================
        Dialog.isVisible = function (dialogId, dialog) {
            var dialog = dialog || Dialog.get(dialogId);
            return dialog && dialog._dom.wrap.hasClass('ui-dialog-visible') && dialog._dom.wrap.attr('style') && dialog._dom.wrap.attr('style').substring('display:'.length).indexOf('none') < 0
        }

        Dialog.alert = function (options, icon, title, iconSize, time) {
            if (!tmsky.isObject(options)) {
                options = {
                    content : options,
                    icon : icon,
                    title : title || '消息提示',
                    iconSize : iconSize,
                    time : time
                }
            }
            options.id = 'dialog-alert'
            var hasIcon = options.icon ? true : false, isPredefineIcon, iconClass, className, ct;
            if (hasIcon) {
                options.icon = options.icon.toLowerCase(), ct = options.content;
                isPredefineIcon = options.icon == "success" || options.icon == "error" || options.icon == "warning";
                iconClass = 'msc-dialog-alert-' + (isPredefineIcon ? options.icon : "cus") + '-icon';
                className = 'msc-dialog-alert-icon ' + iconClass;
                options.content = '<div class="' + className + '"></div>';
                options.content += '<div class="msc-dialog-alert-content">' + ct + '</div>';
            }

            if (options.ok) {
                if (typeof options.ok === 'function') {
                    delete options.time
                }
            } else {
                options.ok = true;
            }

            var _alert = Dialog(options)

            var $alert;
            var getAlertDialog = function () {
                if (!$alert || !$alert.length) {
                    $alert = $("." + iconClass);
                }
                return $alert;
            };
            if (hasIcon && !isPredefineIcon) {
                getAlertDialog().css("background-image", "url(" + options.icon + ")");
                if (options.iconSize) {
                    getAlertDialog().css({
                        "width" : options.iconSize,
                        "height" : options.iconSize,
                        "background-size" : options.iconSize
                    });
                }
            }
            return _alert;
        }

        Dialog.ask = function (options, ok, cancel, icon, title, iconSize) {
            if (!tmsky.isObject(options)) {
                options = {
                    content : options,
                    ok : ok ? ok : true,
                    cancel : cancel ? cancel : true,
                    icon : icon,
                    title : title,
                    iconSize : iconSize
                }
            }
            options.id = 'dialog-ask'
            if (!options.icon) {
                return tmsky.ui.dialog.confirm(options.content, options.ok, options.cancel, options.title);
            }
            options.icon = options.icon.toLowerCase();
            var isPredefineIcon = options.icon == "delete" || options.icon == "close" || options.icon == "warning", iconClass, className, ct;
            iconClass = "ask-icon-", className = "msc-dialog-ask-icon";
            iconClass += isPredefineIcon ? options.icon : "cus", ct = options.content;
            className += " " + iconClass;
            options.content = "<div class='" + className + "'></div>";
            options.content += "<div class='msc-dialog-ask-content'>" + ct + "</div>";

            var _ask = Dialog(options),
                $ask = $("." + iconClass);
            $ask.parent().parent().css({
                "min-width" : "20%",
                "border-radius" : "6px"
            }).find(".ui-dialog-btn-on").removeClass("ui-dialog-btn-on").addClass("ui-dialog-btn-on-ask");
            if (!isPredefineIcon) {
                $ask.css("background-image", "url(" + options.icon + ")");
                if (options.iconSize) {
                    $ask.css({
                        "height" : options.iconSize
                    });
                }
            }
            return _ask;
        }

        Dialog.confirm = function (txt, okfn, cancelfn, title) {
            var options = {
                title : title ? title : '提示消息',
                content : txt ? txt : '',
                ok : okfn ? okfn : true,
                cancel : cancelfn ? cancelfn : true
            };
            options.id = 'dialog-confirm'
            return Dialog(options);
        }

        Dialog.tips = function (options, icon, time, id) {
            if (!tmsky.isObject(options)) {
                options = {
                    content : options,
                    time : time
                }
            }
            options.id = options.id || id || 'dialog-tips'
            var iconClass = icon ? 'tomasky-ui-msc-dialog-tips-icon tomasky-ui-msc-dialog-tips-' + icon + '-icon' : '',
                contentClass = icon ? 'tomasky-ui-msc-dialog-tips-' + icon + '-content' : '', content
            options = options || {}
            options.skin = 'tomasky-ui-msc-dialog-tips'
            content = '<div class="' + iconClass + '"></div>'
            content += '<div class="tomasky-ui-msc-dialog-tips-content ' + contentClass + '">' + options.content + '</div>'
            options.content = content
            options.time = options.time || 2 * 1e3

            return Dialog(options)
        }

        Dialog.successTips = function (options, time) {
            return Dialog.tips(options, 'success', time, 'dialog-success-tips')
        }

        Dialog.warnTips = function (options, time) {
            return Dialog.tips(options, 'warning', time, 'dialog-warning-tips')
        }

        Dialog.errorTips = function (options, time) {
            return Dialog.tips(options, 'error', time, 'dialog-error-tips')
        }

        Dialog.notify = function (options, time) {
            var $noticeWrap = Dialog.notify.wrap || $('<div>', {
                    'class' : 'tomasky-ui-dialog-notify-fixed'
                }).appendTo($(document.body))

            Dialog.notify.wrap = $noticeWrap

            var defOpts = {
                id : 'dialog-notify',
                title : '番茄来了提醒您 ',
                skin : 'tomasky-ui-dialog-notice',
                content : '',
                lock : false,
                ok : true,
                parent : $noticeWrap,
                openAnimate : function ($dialog) {
                    var h = $dialog.height()

                    $dialog.height(0).animate({
                        height : h
                    }, 'slow');
                },
                closeAnimate : function ($dialog) {
                    $dialog && $dialog.animate({
                        height : 0
                    }, 'slow', function () {
                        $(this).remove()
                    })
                }
            }

            if (options && options.button && options.button.length > 0) {
                defOpts.ok = false
            }

            if (tmsky.isObject(options)) {
                $.extend(defOpts, options);
            } else {
                defOpts.content = options
                if (time) {
                    defOpts.time = time
                }
            }

            var dialog = Dialog(defOpts);
            if (undefined === defOpts.isSuccess || null === defOpts.isSuccess) {
                dialog._dom.wrap.css("visibility", "visible").parent().css("z-index", "100");
                return dialog;
            }

            var hasExist = tmsky.ui.dialog.simpleNotify(dialog._dom.wrap.find(".ui-dialog-title").text().replace(/-/g, ""), dialog.config.id, defOpts.isSuccess);
            if (!hasExist) {
                dialog._dom.wrap.css("visibility", "hidden").parent().css("z-index", "-100");
            }

            return dialog;
        }

        Dialog.simpleNotify = function (msg, detailNotifyId, isSuccess) {

            var $notify = $('.tomasky-ui-dialog-notify-fixed .ui-dialog-notice'),
                hasExist = true;
            if (($notify.length && $notify.css("visibility") == "visible") || Dialog.simpleNotify.wrap) {
                return hasExist;
            }

            hasExist = false;
            var $simpleNoticeWrap = Dialog.simpleNotify.wrap || $('<div>', {
                    'class' : 'tomasky-ui-dialog-notify-fixed-simple'
                }).appendTo($(document.body)), content;

            Dialog.simpleNotify.wrap = $simpleNoticeWrap;
            Dialog.simpleNotify.counter = Dialog.simpleNotify.counter ? Dialog.simpleNotify.counter++ : 1;

            content = "<div class='tomasky-ui-dialog-notify-simple " + (isSuccess ? "tomasky-ui-dialog-notify-simple-success" : "tomasky-ui-dialog-notify-simple-fail") + "'>";
            content += "<em></em>";
            content += "<div class='content'>" + msg;
            if (!isSuccess) {
                content += "<a id='detail'>详情 > </a>";
            }
            content += "</div></div>";

            $simpleNoticeWrap.append(content);

            $simpleNoticeWrap.data("dialog-id", detailNotifyId || Dialog.simpleNotify.counter);
            $simpleNoticeWrap.mouseover(function (e) {
                __tomato_simple_notify_timer__ && clearTimeout(__tomato_simple_notify_timer__);
            }).mouseout(function (e) {
                tmsky.ui.dialog.simpleNotify.time();
            }).find(".tomasky-ui-dialog-notify-simple #detail").click(function () {
                var _this = $(".tomasky-ui-dialog-notify-fixed-simple").hide();
                var dialog = tmsky.ui.dialog.get(_this.data("dialog-id"));
                dialog && dialog._dom.wrap.css("visibility", "visible").parent().css("z-index", 100);
                tmsky.ui.dialog.simpleNotify.wrap = null;
                _this.remove();
            });

            $simpleNoticeWrap.find("em").click(function () {
                var _this = $(this).parent().parent(), dialog;
                dialog = tmsky.ui.dialog.get(_this.data("dialog-id"));
                dialog && dialog.close();
                _this.remove();
                tmsky.ui.dialog.simpleNotify.wrap = null;
            });

            tmsky.ui.dialog.simpleNotify.time();

            return hasExist;
        }

        Dialog.simpleNotify.time = function () {
            window.__tomato_simple_notify_timer__ = setTimeout(function () {
                var $simpleNotify = $(".tomasky-ui-dialog-notify-fixed-simple");
                var detailNotify = tmsky.ui.dialog.get($simpleNotify.data("dialog-id"));
                detailNotify && detailNotify.close();
                $simpleNotify.remove();
                tmsky.ui.dialog.simpleNotify.wrap = null;
            }, 4000);
        }

        Dialog.loading = function (msg) {
            var api = Dialog.get("dialog-loading"),
                maskName = 'tomasky-ui-dialog-mask-white', content

            msg = msg == null ? '玩命加载中...' : msg
            content = '<div class="ui-dialog-loading" title="加载中">' + msg + '</div>'

            //if (api)
            //    return api.lock(maskName).content(content).visible()

            if (api) {
                if (Dialog.isVisible('dialog-loading', api)) {
                    var $content = api._dom.wrap.find('.ui-dialog-loading')
                    if ($content && $content.text() !== msg) {
                        $content.text(msg)
                    }
                    return api
                }
                return api.content(content).visible()
            }

            return Dialog({
                id : 'dialog-loading',
                skin : 'tomasky-ui-msc-dialog-loading',
                content : content,
                maskName : maskName
            })
        }

        Dialog.loading.close = function () {
            var api = Dialog.get("dialog-loading")
            if (api) {
                api.hide()
                api = null
            }
            $('.tomasky-ui-dialog-mask-white').remove()
        }

        Dialog.mask = function () {
            var $mask = Dialog.mask.$mask || $('<div>', {
                    id : 'dialog-mask',
                    'class' : 'tomasky-ui-dialog-mask'
                }).appendTo($(document.body))

            Dialog.mask.$mask = $mask.fadeIn()
        }

        Dialog.mask.close = function () {
            Dialog.mask.$mask && Dialog.mask.$mask.fadeOut()
        }

        return Dialog;
    })();

    tmsky.extendUI({dialog : dialog})

})(tmsky);
/**
 * jquery extends. hai.
 */
(function ($, undefined) {
    if (!jQuery.browser) {
        var ua = navigator.userAgent.toLowerCase();
        // 添加jQuery浏览器扩展对象
        jQuery.browser = {
            "msie" : false,
            "chrome" : false,
            "firefox" : false,
            "opera" : false,
            "safari" : false,
            "qq" : false
        };
        // 判断浏览器类型
        judgeBrowser();
        // 获取浏览器标识
        getBrowserFlag();
        // 获取浏览器版本
        getBrowserVersion();
        // 浏览器缩放提示
        attachZoomTips();
    }

    function attachZoomTips() {
        var zoomTips = {
            "detectZoom" : detectZoom,
            "bindZoomTips" : bindZoomTips
        };
        $.browser["zoomTips"] = zoomTips
        window.zoomTips = zoomTips;
    }

    function detectZoom() {
        var ratio = 0,
            screen = window.screen;
        if ($.browser.firefox) {
            if (window.devicePixelRatio !== undefined) {
                ratio = window.devicePixelRatio;
            }
        } else if ($.browser.msie) {
            if (screen.deviceXDPI && screen.logicalXDPI) {
                ratio = screen.deviceXDPI / screen.logicalXDPI;
            }
        } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
            ratio = window.outerWidth / window.innerWidth;
        }
        if (ratio) {
            ratio = Math.round(ratio * 100);
        }
        // alert(ratio);
        // 在非IE和360急速浏览器中，其它浏览器下浏览器在resize时诡异的outerWidth和innerWidth不相等
        if (ratio === 99 || ratio === 101 || ratio === 102 || ratio === 103) {
            ratio = 100;
        }
        return ratio;
    }

    function bindZoomTips() {
        autoDisplayZoomTips();
        bindCtrl0KeyPress();
        $(window).bind("resize", autoDisplayZoomTips);
    }

    function bindCtrl0KeyPress() {
        $(document).bind("keyup", function (event) {
            if (event.keyCode == 48) {
                if (event.ctrlKey || event.ctrlKey === 1) {
                    $("#zoomTips").hide();
                }
            }
        });
    }

    function autoDisplayZoomTips() {
        var zoomRatio = detectZoom();
        if (zoomRatio != 100) {
            var $zoomTips = $("#zoomTips");
            $zoomTips.find("#zoomStatus").text(zoomRatio > 100 ? "放大" : "缩小");
            $zoomTips.show();
        } else {
            $("#zoomTips").hide();
        }
    }

    // 判断浏览器类型
    function judgeBrowser() {
        var ua = navigator.userAgent.toLowerCase();
        if (!!window.ActiveXObject || ("ActiveXObject" in window) || tmsky.string.exist(ua, "msie")) {
            $.browser.msie = true;
        } else if (tmsky.string.exist(ua, "chrome", false) && tmsky.string.notExist(ua, "version,opera,opr")) {
            $.browser.chrome = true;
        } else if (tmsky.string.exist(ua, "firefox", false)) {
            $.browser.firefox = true;
        } else if (tmsky.string.exist(ua, "opera,opr")) {
            $.browser.opera = true;
        } else if (tmsky.string.exist(ua, "version,safari") && tmsky.string.notExist(ua, "chrome", false)) {
            $.browser.safari = true;
        } else if (tmsky.string.exist(ua, "QQBrowser")) {
            $.browser.qq = true;
        }
    }

    // 获取浏览器标识
    function getBrowserFlag(browser) {
        var bs;
        if ($.browser.msie) {
            bs = "msie";
        } else if ($.browser.chrome) {
            bs = "chrome";
        } else if ($.browser.firefox) {
            bs = "firefox";
        } else if ($.browser.opera) {
            bs = "opera";
        } else if ($.browser.safari) {
            bs = "safari";
        } else {
            bs = "qq";
        }
        $.browser["browser"] = bs;
    }

    // 获取浏览器版本
    function getBrowserVersion() {
        var v;
        if ($.browser.msie) {
            v = getIEVersion();
            // 添加判断浏览器具体版本的方法
            addJudgeBrowserVersionMethoed(v);
        } else {
            v = getNoNIEVersion();
        }
        $.browser["version"] = v;
    }

    // 添加判断浏览器具体版本的方法
    function addJudgeBrowserVersionMethoed(v) {
        var vn = parseInt(v, 10);
        // 是否为指定版本
        var isVersion = function (version) {
            if (version < 6) {
                version = 6;
            }
            return version == vn;
        };
        // 是否大于指定版本
        var isGTVersion = function (version) {
            if (version < 6) {
                version = 6;
            }
            return vn > version;
        };
        // 是小于指定版本
        var isLTVersion = function (version) {
            if (version < 6) {
                version = 6;
            }
            return vn < version;
        };
        // 是否为指定版本
        $.browser["isVersion"] = isVersion;
        // 是否大于指定版本
        $.browser["isGTVersion"] = isGTVersion;
        // 是小于指定版本
        $.browser["isLTVersion"] = isLTVersion;
    }

    // 获取IE浏览器版本
    function getIEVersion() {
        var ua = navigator.userAgent.toLowerCase();
        var i = ua.indexOf("msie");
        var vstr = ua.substring(i, ua.indexOf(";", i));
        return vstr.split(" ")[1];
    }

    // 获取非IE浏览器版本
    function getNoNIEVersion() {
        var v,
            ua = navigator.userAgent.toLowerCase();
        var arr = ua.split(" ");
        for (var i = 0; i < arr.length; i++) {
            if (tmsky.string.startsWith(arr[i], $.browser.browser)) {
                v = arr[i].split("/")[1];
                break;
            } else {
                if ($.browser.opera) {
                    if (tmsky.string.startsWith(arr[i], "opr")) {
                        v = arr[i].split("/")[1];
                        break;
                    }
                }
            }
        }
        return v;
    }

    // 方法扩展
    $.fn.extend({
        outerHTML : function (s) {
            return s ? this.before(s).remove() : jQuery("<p>").append(this.eq(0).clone()).html();
        },
        outerHTMLs : function (s) {
            if (this.length > 1) {
                var htmls = "";
                for (var i = 0; i < this.length; i++) {
                    htmls += $(this[i]).outerHTML(s);
                }
                return htmls;
            } else {
                return this.outerHTML(s);
            }
        },
        center : function (parent, icss, options) {
            var Z_INDEX_CONST = 1000,
                POSITION_CONST = "absolute",
                z_index = Z_INDEX_CONST,
                pos = POSITION_CONST;
            if (!tmsky.isNull(options)) {
                z_index = !tmsky.isNull(options.z_index) ? options.z_index : z_index;
                pos = !tmsky.isNull(options.position) ? options.position : pos;
            }
            if (!tmsky.isNull(icss)) {
                if (undefined == icss.z_index) {
                    icss["z_index"] = z_index;
                }
                if (undefined == icss.position) {
                    icss["position"] = pos;
                }
                this.css(icss);
                return this;
            }
            if (parent) {
                parent = this.parent();
            } else {
                parent = $(window);
            }
            this.css({
                "position" : pos,
                "top" : (((parent.height() - this.outerHeight()) / 2) + parent.scrollTop() + "px"),
                "left" : (((parent.width() - this.outerWidth()) / 2) + parent.scrollLeft() + "px"),
                "z-index" : z_index
            });
            return this;
        },
        isShow : function () {
            return !this.isHide();
        },
        isHide : function () {
            return this.css("display") == "none";
        },
        checked : function (checkType, checked, disabled) {
            if (null == this || undefined == this || this.length == 0) {
                return;
            }
            checked = undefined == checked || null == checked ? true : checked;
            checkType = undefined == checkType || null == checkType ? true : checkType;
            if (checkType) {
                if (tmsky.string.notExist(this.attr("type"), "checkbox,radio")) {
                    return;
                }
            }
            if (checked) {
                this.attr("checked", "checked")[0].checked = true;
            } else {
                this.removeAttr("checked")[0].checked = false;
            }
            if (disabled) {
                this.disabled(disabled);
            }
            return this;
        },
        unchecked : function (checkType) {
            return this.checked(checkType, false);
        },
        readonly : function (readonly) {
            var ro = _isNull(readonly) ? true : readonly;
            if (readonly) {
                this.attr("readonly", "readonly");
            } else {
                this.removeAttr("readonly");
            }
            return this;
        },
        /**
         * 绑定checkbox的单击事件
         *
         * @param selectorType 选择器类型：1、checkbox所在区域的父节点，2、已选择的要处理的checkbox数组【js数组或jq数组都可】，如果该对象本身不是数组则此必须指定其类型
         */
        bindChecked : function (domType) {
            if (_isNull(domType)) {
                domType = 1;
            }
            var $eachs = (1 == domType) ? this.find("input[type='checkbox']") : this;
            $.each($eachs, function (i, dom) {
                $(dom).on("click", function () {
                    if (this.checked) {
                        $(this).checked(false, true);
                    } else {
                        $(this).checked(false, false);
                    }
                });
            });
        },
        /**
         * 全选事件绑定处理
         *
         * @param parentFlag 全选按钮区的父节点
         * @param options 其它选项，目前只提供了默认选项的扩展、有需要可继续扩展 options{ defSelect :"默认选中的id，多个以逗号分隔", otAuth :"操作类型是否为权限，默认true" }
         */
        checkAll : function (parentFlag, options) {
            var $this = $(this),
                $parent = (typeof parentFlag == "string") ? $(parentFlag) : parentFlag,
                thisId = $this.attr("id");
            var $ipts = $parent.find("input[type='checkbox'][id!='" + thisId + "']"),
            // checkboxArr
                ds = null,
            // default select arr
                ot = null;
            // 操作类型是否为权限操作
            if (!tmsky.isNull(options) && !tmsky.isNull(options.defSelect)) {
                ds = options.defSelect.split(",");
                ot = tmsky.isNull(options.otAuth) ? true : options.otAuth;
            }
            $this.unbind("click").on("click", function (e) {
                var isSelectAll = tmsky.isEmpty($this.attr("checked"));
                if (isSelectAll) {
                    $this.attr("checked", "checked")[0].checked = true;
                } else {
                    $this.removeAttr("checked")[0].checked = false;
                }
                // 改变全选按钮状态
                $.each($ipts, function (i, item) {
                    var $item = $(item);
                    if (isSelectAll) {
                        $item.checked(false, true);
                    } else {
                        $item.unchecked(false, false);
                    }
                });
            });
            // 绑定全选所指定区的checkbox单击事件
            $.each($ipts, function (i, item) {
                $(item).on("click", function (e) {
                    var _im = $(this);
                    if (this.checked) {
                        _im.attr("checked", "checked");
                        if (ds != null) {
                            for (var i = 0; i < ds.length; i++) {
                                var t = ot ? _im.parent().parent().find("#" + ds[i]) : $parent.find("#" + ds[i]);
                                if (this.id != ds[i] && t[0] && !t[0].checked) {
                                    t.checked(false);
                                }
                            }
                        }
                    } else {
                        _im.removeAttr("checked");
                    }
                    if ($parent.find("input[checked][id!='" + thisId + "']").length == $ipts.length) {
                        $this.checked(false, true);
                    } else {
                        $this.unchecked(false, false);
                    }
                });
            });
            return this;
        },
        splitText : function (split) {
            var strs = "",
                split = _isNull(split) ? "," : split;
            this.each(function (i, item) {
                strs += $(item).text() + split;
            });
            return "" != strs ? strs.substring(0, strs.length - 1) : "";
        },
        /**
         * 批量设置或获取属性值
         *
         * @param names 属性名，多个以“,”分隔
         * @param values 属性值，只能为数组，当length为1但names有多个时则将指定的所有属性名设置为同一值
         * @param resultType 获取值操作时[values必须传null占位，(只处理null！)]、返回类型：string，array[默认]
         * @param join 获取值操作时且返回类型为string时的连接符，默认“,”
         * @author hai
         */
        attrs : function (names, values, resultType, join) {
            var nameArr = typeof names == "string" ? names.split(",") : names;
            var $this = this, result;
            if (!tmsky.isNull(values)) {
                if (values.length == 1) {
                    var val = values[0];
                    $.each(nameArr, function (i, attr) {
                        $this.attr(attr, val);
                    });
                } else {
                    $.each(nameArr, function (i, attr) {
                        $this.attr(attr, values[i]);
                    });
                }
                return this;
            } else {
                result = [];
                $.each(nameArr, function (i, attr) {
                    result.push($this.attr(attr));
                });
                if (_isNull(resultType) || "array" == resultType) {
                    return result;
                }
                return result.join(join || ",");
            }
        },
        /**
         * 删除dom的多个属性
         *
         * @param attrs 要删除的属性，以逗号分隔[要删除多个属性时采用该方法，若attrs属性只有一个请用原生removeAttr方法]
         */
        removeAttrs : function (attrs) {
            var eachs = attrs.split(",");
            for (var i = 0; i < eachs.length; i++) {
                this.removeAttr(eachs[i]);
            }
            return this;
        },
        clearAttrs : function (attrs) {
            var $this = this,
                attrArr = attrs.split(',');
            $.each(attrArr, function (i, attr) {
                $this.attr(attr, '');
                if ('value' == attr) {
                    $this.val('');
                }
            });
            return this;
        },
        disabled : function (disabled) {
            var dsb = _isNull(disabled) ? true : disabled;
            if (dsb) {
                this.attr("disabled", "disabled");
            } else {
                this.removeAttr("disabled");
            }
            return this;
        },
        left : function (left) {
            if (left) {
                var l = this.css("left");
                if (l.endsWith("px")) {
                    return Number(l.substring(0, l.length - 2));
                } else {
                    return Number(l);
                }
            } else {
                this.css("left", left);
                return this;
            }
        },
        top : function (top) {
            if (top) {
                var t = this.css("top");
                if (t.endsWith("px")) {
                    return Number(t.substring(0, t.length - 2));
                } else {
                    return Number(t);
                }
            } else {
                this.css("top", top);
                return this;
            }
        },
        replaceClass : function (oclass, nclass) {
            if (this.hasClass(oclass)) {
                this.removeClass(oclass);
            }
            this.addClass(nclass);
            return this;
        },
        resetValues : function (val) {
            var v = _isNull(val) || "" == val.trim() ? "" : val;
            this.find("input").each(function () {
                if (this.type == "text" || this.type == "hidden")
                    this.value = v;
            });
        },
        mposition : function (pos, zIndex) {
            this.css("position", pos);
            if (!tmsky.isNull(zIndex)) {
                this.css("z-index", zIndex);
            }
            return this;
        },
        absolutePos : function (zIndex) {
            return this.mposition("absolute", zIndex);
        },
        staticPos : function (zIndex) {
            return this.mposition("static", zIndex);
        },
        fixedPos : function (zIndex) {
            return this.mposition("fixed", zIndex);
        },
        relativePos : function (zIndex) {
            return this.mposition("relative", zIndex);
        },
        margin : function () {
            var marginLeft = this.css("margin-left");
            var marginRight = this.css("margin-right");
            var marginTop = this.css("margin-top");
            var marginBottom = this.css("margin-bottom");
            return {
                left : Number(marginLeft.substring(0, marginLeft.length - 2)),
                right : Number(marginRight.substring(0, marginRight.length - 2)),
                top : Number(marginTop.substring(0, marginTop.length - 2)),
                bottom : Number(marginBottom.substring(0, marginBottom.length - 2))
            };
        },
        marginTop : function () {
            var marginTop = this.css("margin-top");
            return Number(marginTop.substring(0, marginTop.length - 2));
        },
        marginBottom : function () {
            var marginBottom = this.css("margin-bottom");
            return Number(marginBottom.substring(0, marginBottom.length - 2));
        },
        marginLeft : function () {
            var marginLeft = this.css("margin-left");
            return Number(marginLeft.substring(0, marginLeft.length - 2));
        },
        marginRight : function () {
            var marginRight = this.css("margin-right");
            return Number(marginRight.substring(0, marginRight.length - 2));
        },
        padding : function () {
            var paddingLeft = this.css("padding-left");
            var paddingRight = this.css("padding-right");
            var paddingTop = this.css("padding-top");
            var paddingBottom = this.css("padding-bottom");
            return {
                left : Number(paddingLeft.substring(0, paddingLeft.length - 2)),
                right : Number(paddingRight.substring(0, paddingRight.length - 2)),
                top : Number(paddingTop.substring(0, paddingTop.length - 2)),
                bottom : Number(paddingBottom.substring(0, paddingBottom.length - 2))
            };
        },
        paddingTop : function () {
            var paddingTop = this.css("padding-top");
            return Number(paddingTop.substring(0, paddingTop.length - 2));
        },
        paddingBottom : function () {
            var paddingBottom = this.css("padding-bottom");
            return Number(paddingBottom.substring(0, paddingBottom.length - 2));
        },
        paddingLeft : function () {
            var paddingLeft = this.css("padding-left");
            return Number(paddingLeft.substring(0, paddingLeft.length - 2));
        },
        paddingRight : function () {
            var paddingRight = this.css("padding-right");
            return Number(paddingRight.substring(0, paddingRight.length - 2));
        },
        grandParent : function () {
            return this.parent().parent();
        },
        greatParent : function () {
            return this.parent().parent().parent();
        }
    });

    function _isNull(obj) {
        if (tmsky.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
                if (tmsky.isNull(obj[i])) {
                    return true;
                }
            }
            return false;
        } else {
            return tmsky.isNull(obj);
        }
    }

})(jQuery);

/**
 * tomasky.core.lib.js
 * Created by hai on 2015/12/11.
 */
;(function(e){"function"==typeof define&&define.amd?define(["jquery.ui.datepicker-zh-CN"],e):e(jQuery)})(function(e){function t(t,s){var a,n,o,r=t.nodeName.toLowerCase();return"area"===r?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(o=e("img[usemap='#"+n+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function a(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=n(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function n(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(d.inline?d.dpDiv.parent()[0]:d.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,a=t?/(auto|scroll|hidden)/:/(auto|scroll)/,n=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:a.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&n.length?n:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),a=isNaN(s);return(a||s>=0)&&t(i,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,n){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),n&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===i?["Left","Right"]:["Top","Bottom"],n=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(n,s(this,t)+"px")})},e.fn["outer"+i]=function(t,a){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(n,s(this,t,!0,a)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,a=e(this[0]);a.length&&a[0]!==document;){if(i=a.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i,s){var a,n=e.plugins[t];if(n&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(a=0;n.length>a;a++)e.options[n[a][0]]&&n[a][1].apply(e.element,i)}};var h=0,l=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,a,n;for(n=0;null!=(a=i[n]);n++)try{s=e._data(a,"events"),s&&s.remove&&e(a).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var a,n,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],a=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[l]=e[l]||{},n=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,n,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},a=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,n=this._superApply;return this._super=e,this._superApply=a,t=s.apply(this,arguments),this._super=i,this._superApply=n,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:n?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(e.each(n._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=l.call(arguments,1),n=0,o=a.length;o>n;n++)for(i in a[n])s=a[n][i],a[n].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var n="string"==typeof a,o=l.call(arguments,1),r=this;return a=!n&&o.length?e.widget.extend.apply(null,[a].concat(o)):a,n?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(r=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,o),i!==n&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))}),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,a,n,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(a=o[t]=e.widget.extend({},this.options[t]),n=0;s.length-1>n;n++)a[s[n]]=a[s[n]]||{},a=a[s[n]];if(t=s.pop(),1===arguments.length)return void 0===a[t]?null:a[t];a[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var a,n=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=a=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,a=this.widget()),e.each(s,function(s,o){function r(){return t||n.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?n[o]:o).apply(n,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+n.eventNamespace,u=h[2];u?a.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var a,n,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(a in n)a in i||(i[a]=n[a]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,a,n){"string"==typeof a&&(a={effect:a});var o,r=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),o=!e.isEmptyObject(a),a.complete=n,a.delay&&s.delay(a.delay),o&&e.effects&&e.effects.effect[r]?s[t](a):r!==t&&s[r]?s[r](a.duration,a.easing,n):s.queue(function(i){e(this)[t](),n&&n.call(s[0]),i()})}}),e.widget;var u=!1;e(document).mouseup(function(){u=!1}),e.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!u){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,a="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!a&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),u=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),u=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var a,n,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==a)return a;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),n=s.children()[0];return e("body").append(s),t=n.offsetWidth,s.css("overflow","scroll"),i=n.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),a=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),a="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,n="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:n?e.position.scrollbarWidth():0,height:a?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),a=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:a,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||a?i.width():i.outerWidth(),height:s||a?i.height():i.outerHeight()}}},e.fn.position=function(a){if(!a||!a.of)return f.apply(this,arguments);a=e.extend({},a);var p,m,g,v,y,b,_=e(a.of),x=e.position.getWithinInfo(a.within),w=e.position.getScrollInfo(x),k=(a.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(a.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(a[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],a[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===a.at[0]?y.left+=m:"center"===a.at[0]&&(y.left+=m/2),"bottom"===a.at[1]?y.top+=g:"center"===a.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===a.my[0]?N.left-=d:"center"===a.my[0]&&(N.left-=d/2),"bottom"===a.my[1]?N.top-=c:"center"===a.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],n||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:a.my,at:a.at,within:x,elem:u})}),a.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,n=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>n?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+n)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(n))?"horizontal":"vertical",a.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,a=s.isWindow?s.scrollLeft:s.offset.left,n=s.width,r=e.left-t.collisionPosition.marginLeft,h=a-r,l=r+t.collisionWidth-n-a;t.collisionWidth>n?h>0&&0>=l?(i=e.left+h+t.collisionWidth-n-a,e.left+=h-i):e.left=l>0&&0>=h?a:h>l?a+n-t.collisionWidth:a:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,a=s.isWindow?s.scrollTop:s.offset.top,n=t.within.height,r=e.top-t.collisionPosition.marginTop,h=a-r,l=r+t.collisionHeight-n-a;t.collisionHeight>n?h>0&&0>=l?(i=e.top+h+t.collisionHeight-n-a,e.top+=h-i):e.top=l>0&&0>=h?a:h>l?a+n-t.collisionHeight:a:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,a=t.within,n=a.offset.left+a.scrollLeft,o=a.width,h=a.isWindow?a.scrollLeft:a.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-n,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,a=t.within,n=a.offset.top+a.scrollTop,o=a.height,h=a.isWindow?a.scrollTop:a.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-n,e.top+p+f+m>u&&(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,e.top+p+f+m>d&&(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,a,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",a=e(h).offset().left,n=a>10&&11>a,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),a=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return a.parents("body").length||a.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&a[0]===this.element[0]&&this._setPositionRelative(),a[0]===this.element[0]||/(fixed|absolute)/.test(a.css("position"))||a.css("position","absolute"),a},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,a=this.options,n=this.document[0];return this.relativeContainer=null,a.containment?"window"===a.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===a.containment?(this.containment=[0,0,e(n).width()-this.helperProportions.width-this.margins.left,(e(n).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):a.containment.constructor===Array?(this.containment=a.containment,void 0):("parent"===a.containment&&(a.containment=this.helper[0].parentNode),i=e(a.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,a,n,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(a=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?a-this.offset.click.top>=i[1]||a-this.offset.click.top>i[3]?a:a-this.offset.click.top>=i[1]?a-o.grid[1]:a+o.grid[1]:a,n=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?n-this.offset.click.left>=i[0]||n-this.offset.click.left>i[2]?n:n-this.offset.click.left>=i[0]?n-o.grid[0]:n+o.grid[0]:n),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var a=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i,s){var a=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,a))})},drag:function(t,i,s){e.each(s.sortables,function(){var a=!1,n=this;n.positionAbs=s.positionAbs,n.helperProportions=s.helperProportions,n.offset.click=s.offset.click,n._intersectsWith(n.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==n&&this._intersectsWith(this.containerCache)&&e.contains(n.element[0],this.element[0])&&(a=!1),a})),a?(n.isOver||(n.isOver=1,n.currentItem=i.helper.appendTo(n.element).data("ui-sortable-item",!0),n.options._helper=n.options.helper,n.options.helper=function(){return i.helper[0]},t.target=n.currentItem[0],n._mouseCapture(t,!0),n._mouseStart(t,!0,!0),n.offset.click.top=s.offset.click.top,n.offset.click.left=s.offset.click.left,n.offset.parent.left-=s.offset.parent.left-n.offset.parent.left,n.offset.parent.top-=s.offset.parent.top-n.offset.parent.top,s._trigger("toSortable",t),s.dropped=n.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,n.fromOutside=s),n.currentItem&&(n._mouseDrag(t),i.position=n.position)):n.isOver&&(n.isOver=0,n.cancelHelperRemoval=!0,n.options._revert=n.options.revert,n.options.revert=!1,n._trigger("out",t,n._uiHash(n)),n._mouseStop(t,!0),n.options.revert=n.options._revert,n.options.helper=n.options._helper,n.placeholder&&n.placeholder.remove(),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var a=e("body"),n=s.options;a.css("cursor")&&(n._cursor=a.css("cursor")),a.css("cursor",n.cursor)},stop:function(t,i,s){var a=s.options;a._cursor&&e("body").css("cursor",a._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var a=e(i.helper),n=s.options;a.css("opacity")&&(n._opacity=a.css("opacity")),a.css("opacity",n.opacity)},stop:function(t,i,s){var a=s.options;a._opacity&&e(i.helper).css("opacity",a._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var a=s.options,n=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(a.axis&&"x"===a.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<a.scrollSensitivity?o.scrollTop=n=o.scrollTop+a.scrollSpeed:t.pageY-s.overflowOffset.top<a.scrollSensitivity&&(o.scrollTop=n=o.scrollTop-a.scrollSpeed)),a.axis&&"y"===a.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<a.scrollSensitivity?o.scrollLeft=n=o.scrollLeft+a.scrollSpeed:t.pageX-s.overflowOffset.left<a.scrollSensitivity&&(o.scrollLeft=n=o.scrollLeft-a.scrollSpeed))):(a.axis&&"x"===a.axis||(t.pageY-e(r).scrollTop()<a.scrollSensitivity?n=e(r).scrollTop(e(r).scrollTop()-a.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<a.scrollSensitivity&&(n=e(r).scrollTop(e(r).scrollTop()+a.scrollSpeed))),a.axis&&"y"===a.axis||(t.pageX-e(r).scrollLeft()<a.scrollSensitivity?n=e(r).scrollLeft(e(r).scrollLeft()-a.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<a.scrollSensitivity&&(n=e(r).scrollLeft(e(r).scrollLeft()+a.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!a.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var a=s.options;s.snapElements=[],e(a.snap.constructor!==String?a.snap.items||":data(ui-draggable)":a.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var a,n,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(a=m>=Math.abs(u-b),n=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),a&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),n&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=a||n||o||r,"outer"!==f.snapMode&&(a=m>=Math.abs(u-y),n=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),a&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),n&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(a||n||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=a||n||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var a,n=s.options,o=e.makeArray(e(n.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(a=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",a+t)}),this.css("zIndex",a+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var a=e(i.helper),n=s.options;a.css("zIndex")&&(n._zIndex=a.css("zIndex")),a.css("zIndex",n.zIndex)},stop:function(t,i,s){var a=s.options;a._zIndex&&e(i.helper).css("zIndex",a._zIndex)}}),e.ui.draggable,e.widget("ui.selectable",e.ui.mouse,{version:"1.11.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,a=e.data(this,"selectable-item");return a?(s=!t.metaKey&&!t.ctrlKey||!a.$element.hasClass("ui-selected"),a.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),a.unselecting=!s,a.selecting=s,a.selected=s,s?i._trigger("selecting",t,{selecting:a.element}):i._trigger("unselecting",t,{unselecting:a.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,a=this.options,n=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return n>r&&(i=r,r=n,n=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:n,top:o,width:r-n,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===a.tolerance?l=!(i.left>r||n>i.right||i.top>h||o>i.bottom):"fit"===a.tolerance&&(l=i.left>n&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,a=!1,n=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,n.widgetName+"-item")===n?(s=e(this),!1):void 0}),e.data(t.target,n.widgetName+"-item")===n&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(a=!0)}),a)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var a,n,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(n=this.document.find("body"),this.storedCursor=n.css("cursor"),n.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(n)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(a=this.containers.length-1;a>=0;a--)this.containers[a]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,a,n,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],a=s.item[0],n=this._intersectsWithPointer(s),n&&s.instance===this.currentContainer&&a!==this.currentItem[0]&&this.placeholder[1===n?"next":"prev"]()[0]!==a&&!e.contains(this.placeholder[0],a)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],a):!0)){if(this.direction=1===n?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,a=this.placeholder.offset(),n=this.options.axis,o={};n&&"x"!==n||(o.left=a.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),n&&"y"!==n||(o.top=a.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,a=s+this.helperProportions.height,n=e.left,o=n+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>n&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>n&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>a-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,a=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return s?this.floating?n&&"right"===n||"down"===a?2:1:a&&("down"===a?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return this.floating&&a?"right"===a&&i||"left"===a&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,a,n,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(n=e(l[s]),a=n.length-1;a>=0;a--)o=e.data(n[a],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,a,n,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(a=e(c[i]),s=a.length-1;s>=0;s--)n=e.data(a[s],this.widgetFullName),n&&n!==this&&!n.options.disabled&&(d.push([e.isFunction(n.options.items)?n.options.items.call(n.element[0],t,{item:this.currentItem}):e(n.options.items,n.element),n]),this.containers.push(n));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,a,n;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(a=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=a.outerWidth(),s.height=a.outerHeight()),n=a.offset(),s.left=n.left,s.top=n.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)n=this.containers[i].element.offset(),this.containers[i].containerCache.left=n.left,this.containers[i].containerCache.top=n.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),a=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(a)}):"img"===s&&a.attr("src",t.currentItem.attr("src")),i||a.css("visibility","hidden"),a},update:function(e,a){(!i||s.forcePlaceholderSize)&&(a.height()||a.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),a.width()||a.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var i,s,a,n,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(a=1e4,n=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),a>Math.abs(t[d]-h)&&(a=Math.abs(t[d]-h),n=this.items[s],this.direction=l?"up":"down"));if(!n&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;n?this._rearrange(t,n,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,a=this.options;"parent"===a.containment&&(a.containment=this.helper[0].parentNode),("document"===a.containment||"window"===a.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===a.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===a.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(a.containment)||(t=e(a.containment)[0],i=e(a.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,a="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,n=/(html|body)/i.test(a[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():n?0:a.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():n?0:a.scrollLeft())*s}},_generatePosition:function(t){var i,s,a=this.options,n=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(n=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(n=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),a.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/a.grid[1])*a.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-a.grid[1]:i+a.grid[1]:i,s=this.originalPageX+Math.round((n-this.originalPageX)/a.grid[0])*a.grid[0],n=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-a.grid[0]:s+a.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}
},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var a=this.counter;this._delay(function(){a===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,a=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&a.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||a.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(a.push(function(e){this._trigger("remove",e,this._uiHash())}),a.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),a.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||a.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(a.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;a.length>s;s++)a[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.extend(e.ui,{datepicker:{version:"1.11.2"}});var d;e.extend(a.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,a,n;s=t.nodeName.toLowerCase(),a="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),n=this._newInst(e(t),a),n.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,n):a&&this._inlineDatepicker(t,n)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?n(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,a,n,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(a=this._get(i,"buttonText"),n=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:n,alt:a,title:a}):e("<button type='button'></button>").addClass(this._triggerClass).html(n?e("<img/>").attr({src:n,alt:a,title:a}):a)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,a,n=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,a=0;e.length>a;a++)e[a].length>i&&(i=e[a].length,s=a);return s},n.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),n.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-n.getDay())),e.input.attr("size",this._formatDate(e,n).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,a,n){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,a||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=n?n.length?n:[n.pageX,n.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this},_destroyDatepicker:function(t){var i,s=e(t),a=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(a.append.remove(),a.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(t){var i,s,a=e(t),n=e.data(t,"datepicker");a.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=a.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,a=e(t),n=e.data(t,"datepicker");a.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=a.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var a,n,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(a=i||{},"string"==typeof i&&(a={},a[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),n=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,a),null!==o&&void 0!==a.dateFormat&&void 0===a.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==a.dateFormat&&void 0===a.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in a&&(a.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,n),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,a,n=e.datepicker._getInst(t.target),o=!0,r=n.dpDiv.is(".ui-datepicker-rtl");if(n._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return a=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",n.dpDiv),a[0]&&e.datepicker._selectDay(t.target,n.selectedMonth,n.selectedYear,a[0]),i=e.datepicker._get(n,"onSelect"),i?(s=e.datepicker._formatDate(n),i.apply(n.input?n.input[0]:null,[s,n])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(n,"stepBigMonths"):-e.datepicker._get(n,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(n,"stepBigMonths"):+e.datepicker._get(n,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,a=e.datepicker._getInst(t.target);return e.datepicker._get(a,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(a,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(a){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,a,n,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),a=e.datepicker._get(i,"beforeShow"),n=a?a.apply(t,[t,i]):{},n!==!1&&(r(i.settings,n),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1000),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,d=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),a=s[1],n=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),a>1&&t.dpDiv.addClass("ui-datepicker-multi-"+a).css("width",n*a+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var a=t.dpDiv.outerWidth(),n=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?a-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+a>h&&h>a?Math.abs(i.left+a-h):0),i.top-=Math.min(i.top,i.top+n>l&&l>n?Math.abs(n+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),a=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[a?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,a,n,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),a=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,a):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,a),i||a(),this._datepickerShowing=!1,n=this._get(o,"onClose"),n&&n.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var a=e(t),n=this._getInst(a[0]);this._isDisabledDatepicker(a[0])||(this._adjustInstDate(n,i+("M"===s?this._get(n,"showCurrentAtPos"):0),s),this._updateDatepicker(n))},_gotoToday:function(t){var i,s=e(t),a=this._getInst(s[0]);this._get(a,"gotoCurrent")&&a.currentDay?(a.selectedDay=a.currentDay,a.drawMonth=a.selectedMonth=a.currentMonth,a.drawYear=a.selectedYear=a.currentYear):(i=new Date,a.selectedDay=i.getDate(),a.drawMonth=a.selectedMonth=i.getMonth(),a.drawYear=a.selectedYear=i.getFullYear()),this._notifyChange(a),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var a=e(t),n=this._getInst(a[0]);n["selected"+("M"===s?"Month":"Year")]=n["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(n),this._adjustDate(a)},_selectDay:function(t,i,s,a){var n,o=e(t);e(a).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(n=this._getInst(o[0]),n.selectedDay=n.currentDay=e("a",a).html(),n.selectedMonth=n.currentMonth=i,n.selectedYear=n.currentYear=s,this._selectDate(t,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,a=e(t),n=this._getInst(a[0]);i=null!=i?i:this._formatDate(n),n.input&&n.input.val(i),this._updateAlternate(n),s=this._get(n,"onSelect"),s?s.apply(n.input?n.input[0]:null,[i,n]):n.input&&n.input.trigger("change"),n.inline?this._updateDatepicker(n):(this._hideDatepicker(),this._lastInput=n.input[0],"object"!=typeof n.input[0]&&n.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,a,n=this._get(t,"altField");n&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),a=this.formatDate(i,s,this._getFormatConfig(t)),e(n).each(function(){e(this).val(a)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var a,n,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>a+1&&t.charAt(a+1)===e;return i&&a++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,a="y"===e?s:1,n=RegExp("^\\d{"+a+","+s+"}"),o=i.substring(h).match(n);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,a){var n=-1,o=e.map(_(t)?a:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(n=t[0],h+=s.length,!1):void 0}),-1!==n)return n+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(a))throw"Unexpected literal at position "+h;h++};for(a=0;t.length>a;a++)if(b)"'"!==t.charAt(a)||_("'")?k():b=!1;else switch(t.charAt(a)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(n=this._getDaysInMonth(m,g-1),n>=v)break;g++,v-=n}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,a=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,n=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),a,n);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,a=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||a("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":a("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,a=this._getDefaultDate(e),n=a,o=this._getFormatConfig(e);try{n=this.parseDate(i,s,o)||a}catch(r){s=t?"":s}e.selectedDay=n.getDate(),e.drawMonth=e.selectedMonth=n.getMonth(),e.drawYear=e.selectedYear=n.getFullYear(),e.currentDay=s?n.getDate():0,e.currentMonth=s?n.getMonth():0,e.currentYear=s?n.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var a=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},n=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var a=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,n=a.getFullYear(),o=a.getMonth(),r=a.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(n,o));break;case"y":case"Y":n+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(n,o))}l=h.exec(i)}return new Date(n,o,r)},o=null==i||""===i?s:"string"==typeof i?n(i):"number"==typeof i?isNaN(i)?s:a(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,a=e.selectedMonth,n=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),a===e.selectedMonth&&n===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,a,n,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,N,M,C,A,P,I,H,z,F,E,W,L,O,j=new Date,R=this._daylightSavingAdjust(new Date(j.getFullYear(),j.getMonth(),j.getDate())),Y=this._get(e,"isRTL"),J=this._get(e,"showButtonPanel"),B=this._get(e,"hideIfNoPrevNext"),K=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),U=this._get(e,"showCurrentAtPos"),q=this._get(e,"stepMonths"),G=1!==V[0]||1!==V[1],X=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),Q=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-U,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-V[0]*V[1]+1,$.getDate())),t=Q&&Q>t?Q:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-q,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":B?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",a=this._get(e,"nextText"),a=K?this.formatDate(a,this._daylightSavingAdjust(new Date(et,Z+q,1)),this._getFormatConfig(e)):a,n=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+a+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+a+"</span></a>":B?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+a+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+a+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?X:R,o=K?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=J?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;V[0]>w;w++){for(k="",this.maxRows=4,T=0;V[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",N="",G){if(N+="<div class='ui-datepicker-group",V[1]>1)switch(T){case 0:N+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case V[1]-1:N+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:N+=" ui-datepicker-group-middle",S=""}N+="'>"}for(N+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?n:s:"")+(/all|right/.test(S)&&0===w?Y?s:n:"")+this._generateMonthYearHeader(e,Z,et,Q,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",M=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)C=(x+u)%7,M+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[C]+"'>"+p[C]+"</span></th>";for(N+=M+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),P=(this._getFirstDayOfMonth(et,Z)-u+7)%7,I=Math.ceil((P+A)/7),H=G?this.maxRows>I?this.maxRows:I:I,this.maxRows=H,z=this._daylightSavingAdjust(new Date(et,Z,1-P)),F=0;H>F;F++){for(N+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(z)+"</td>":"",x=0;7>x;x++)W=g?g.apply(e.input?e.input[0]:null,[z]):[!0,""],L=z.getMonth()!==Z,O=L&&!y||!W[0]||Q&&Q>z||$&&z>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(L?" ui-datepicker-other-month":"")+(z.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===z.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(O?" "+this._unselectableClass+" ui-state-disabled":"")+(L&&!v?"":" "+W[1]+(z.getTime()===X.getTime()?" "+this._currentClass:"")+(z.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(L&&!v||!W[2]?"":" title='"+W[2].replace(/'/g,"&#39;")+"'")+(O?"":" data-handler='selectDay' data-event='click' data-month='"+z.getMonth()+"' data-year='"+z.getFullYear()+"'")+">"+(L&&!v?"&#xa0;":O?"<span class='ui-state-default'>"+z.getDate()+"</span>":"<a class='ui-state-default"+(z.getTime()===R.getTime()?" ui-state-highlight":"")+(z.getTime()===X.getTime()?" ui-state-active":"")+(L?" ui-priority-secondary":"")+"' href='#'>"+z.getDate()+"</a>")+"</td>",z.setDate(z.getDate()+1),z=this._daylightSavingAdjust(z);N+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),N+="</tbody></table>"+(G?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=N}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,a,n,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(n||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=a&&a.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||a.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!n&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);
return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=a?Math.min(m,a.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!n&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),a=e.drawMonth+("M"===i?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(s,a))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,a,n)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),a=i&&i>t?i:t;return s&&a>s?s:a},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var a=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(i,s+(0>t?t:a[0]*a[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var i,s,a=this._getMinMaxDate(e,"min"),n=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!a||t.getTime()>=a.getTime())&&(!n||t.getTime()<=n.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var a=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),a,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new a,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.2",e.datepicker,e.widget("ui.slider",e.ui.mouse,{version:"1.11.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,a=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),n="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,a.length>i&&(a.slice(i).remove(),a=a.slice(0,i)),t=a.length;i>t;t++)o.push(n);this.handles=a.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,a,n,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),a=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(a>i||a===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(a=i,n=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,n.addClass("ui-state-active").focus(),h=n.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-n.width()/2,top:t.pageY-h.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,a,n;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),a=this._valueMax()-this._valueMin(),n=this._valueMin()+s*a,this._trimAlignValue(n)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,a,n;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(a=this.values(),a[t]=i,n=this._trigger("slide",e,{handle:this.handles[t],value:i,values:a}),s=this.values(t?0:1),n!==!1&&this.values(t,i))):i!==this.value()&&(n=this._trigger("slide",e,{handle:this.handles[t],value:i}),n!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,a,n;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,a=arguments[0],n=0;s.length>n;n+=1)s[n]=this._trimAlignValue(a[n]),this._change(null,n);this._refreshValue()},_setOption:function(t,i){var s,a=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(a=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;a>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=(this.options.max-this._valueMin())%this.options.step;this.max=this.options.max-e},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,a,n,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),a=this._valueMin(),n=this._valueMax(),i=n!==a?100*((s-a)/(n-a)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,a,n,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(n=this.options.step,s=a=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:a=this._valueMin();break;case e.ui.keyCode.END:a=this._valueMax();break;case e.ui.keyCode.PAGE_UP:a=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;a=this._trimAlignValue(s+n);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;a=this._trimAlignValue(s-n)}this._slide(t,o,a)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.tooltip",{version:"1.11.2",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),a=e.inArray(i,s);-1!==a&&s.splice(a,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var a=e.Event("blur");a.target=a.currentTarget=s.element[0],t.close(a,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,a=this,n=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){e.data("ui-tooltip-open")&&a._delay(function(){t&&(t.type=n),this._open(t,e,i)})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function a(e){u.of=e,o.is(":hidden")||o.position(u)}var n,o,r,h,l,u=e.extend({},this.options.position);if(s){if(n=this._find(i))return n.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),n=this._tooltip(i),o=n.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(l=s.clone(),l.removeAttr("id").find("[id]").removeAttr("id")):l=s,e("<div>").html(l).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:a}),a(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){o.is(":visible")&&(a(u.of),clearInterval(h))},e.fx.interval)),this._trigger("open",t,{tooltip:o}),r={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}},i[0]!==this.element[0]&&(r.remove=function(){this._removeTooltip(o)}),t&&"mouseover"!==t.type||(r.mouseleave="close"),t&&"focusin"!==t.type||(r.focusout="close"),this._on(!0,i,r)}},close:function(t){var i,s=this,a=e(t?t.currentTarget:this.element),n=this._find(a);n&&(i=n.tooltip,n.closing||(clearInterval(this.delayedShow),a.data("ui-tooltip-title")&&!a.attr("title")&&a.attr("title",a.data("ui-tooltip-title")),this._removeDescribedBy(a),n.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),a.removeData("ui-tooltip-open"),this._off(a,"mouseleave focusout keyup"),a[0]!==this.element[0]&&this._off(a,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),n.closing=!0,this._trigger("close",t,{tooltip:i}),n.hiding||(n.closing=!1)))},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var a=e.Event("blur"),n=s.element;a.target=a.currentTarget=n[0],t.close(a,!0),e("#"+i).remove(),n.data("ui-tooltip-title")&&(n.attr("title")||n.attr("title",n.data("ui-tooltip-title")),n.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});
/*
 * jQuery timepicker addon
 * By: Trent Richardson [http://trentrichardson.com]
 * Version 1.3
 * Last Modified: 05/05/2013
 *
 * Copyright 2013 Trent Richardson
 * You may use this project under MIT or GPL licenses.
 * http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
 * http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
 */

/*jslint evil: true, white: false, undef: false, nomen: false */

(function($) {

	/*
	* Lets not redefine timepicker, Prevent "Uncaught RangeError: Maximum call stack size exceeded"
	*/
	$.ui.timepicker = $.ui.timepicker || {};
	if ($.ui.timepicker.version) {
		return;
	}

	/*
	* Extend jQueryUI, get it started with our version number
	*/
	$.extend($.ui, {
		timepicker: {
			version: "1.3"
		}
	});

	/* 
	* Timepicker manager.
	* Use the singleton instance of this class, $.timepicker, to interact with the time picker.
	* Settings for (groups of) time pickers are maintained in an instance object,
	* allowing multiple different settings on the same page.
	*/
	var Timepicker = function() {
		this.regional = []; // Available regional settings, indexed by language code
		this.regional[''] = { // Default regional settings
			currentText: 'Now',
			closeText: 'Done',
			amNames: ['AM', 'A'],
			pmNames: ['PM', 'P'],
			timeFormat: 'HH:mm',
			timeSuffix: '',
			timeOnlyTitle: 'Choose Time',
			timeText: 'Time',
			hourText: 'Hour',
			minuteText: 'Minute',
			secondText: 'Second',
			millisecText: 'Millisecond',
			microsecText: 'Microsecond',
			timezoneText: 'Time Zone',
			isRTL: false
		};
		this._defaults = { // Global defaults for all the datetime picker instances
			showButtonPanel: true,
			timeOnly: false,
			showHour: null,
			showMinute: null,
			showSecond: null,
			showMillisec: null,
			showMicrosec: null,
			showTimezone: null,
			showTime: true,
			stepHour: 1,
			stepMinute: 1,
			stepSecond: 1,
			stepMillisec: 1,
			stepMicrosec: 1,
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			microsec: 0,
			timezone: null,
			hourMin: 0,
			minuteMin: 0,
			secondMin: 0,
			millisecMin: 0,
			microsecMin: 0,
			hourMax: 23,
			minuteMax: 59,
			secondMax: 59,
			millisecMax: 999,
			microsecMax: 999,
			minDateTime: null,
			maxDateTime: null,
			onSelect: null,
			hourGrid: 0,
			minuteGrid: 0,
			secondGrid: 0,
			millisecGrid: 0,
			microsecGrid: 0,
			alwaysSetTime: true,
			separator: ' ',
			altFieldTimeOnly: true,
			altTimeFormat: null,
			altSeparator: null,
			altTimeSuffix: null,
			pickerTimeFormat: null,
			pickerTimeSuffix: null,
			showTimepicker: true,
			timezoneList: null,
			addSliderAccess: false,
			sliderAccessArgs: null,
			controlType: 'slider',
			defaultValue: null,
			parse: 'strict'
		};
		$.extend(this._defaults, this.regional['']);
	};

	$.extend(Timepicker.prototype, {
		$input: null,
		$altInput: null,
		$timeObj: null,
		inst: null,
		hour_slider: null,
		minute_slider: null,
		second_slider: null,
		millisec_slider: null,
		microsec_slider: null,
		timezone_select: null,
		hour: 0,
		minute: 0,
		second: 0,
		millisec: 0,
		microsec: 0,
		timezone: null,
		hourMinOriginal: null,
		minuteMinOriginal: null,
		secondMinOriginal: null,
		millisecMinOriginal: null,
		microsecMinOriginal: null,
		hourMaxOriginal: null,
		minuteMaxOriginal: null,
		secondMaxOriginal: null,
		millisecMaxOriginal: null,
		microsecMaxOriginal: null,
		ampm: '',
		formattedDate: '',
		formattedTime: '',
		formattedDateTime: '',
		timezoneList: null,
		units: ['hour','minute','second','millisec', 'microsec'],
		support: {},
		control: null,

		/* 
		* Override the default settings for all instances of the time picker.
		* @param  settings  object - the new settings to use as defaults (anonymous object)
		* @return the manager object
		*/
		setDefaults: function(settings) {
			extendRemove(this._defaults, settings || {});
			return this;
		},

		/*
		* Create a new Timepicker instance
		*/
		_newInst: function($input, o) {
			var tp_inst = new Timepicker(),
				inlineSettings = {},
            	fns = {},
		    	overrides, i;

			for (var attrName in this._defaults) {
				if(this._defaults.hasOwnProperty(attrName)){
					var attrValue = $input.attr('time:' + attrName);
					if (attrValue) {
						try {
							inlineSettings[attrName] = eval(attrValue);
						} catch (err) {
							inlineSettings[attrName] = attrValue;
						}
					}
				}
			}

		    overrides = {
		        beforeShow: function (input, dp_inst) {
		            if ($.isFunction(tp_inst._defaults.evnts.beforeShow)) {
		                return tp_inst._defaults.evnts.beforeShow.call($input[0], input, dp_inst, tp_inst);
		            }
		        },
		        onChangeMonthYear: function (year, month, dp_inst) {
		            // Update the time as well : this prevents the time from disappearing from the $input field.
		            tp_inst._updateDateTime(dp_inst);
		            if ($.isFunction(tp_inst._defaults.evnts.onChangeMonthYear)) {
		                tp_inst._defaults.evnts.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
		            }
		        },
		        onClose: function (dateText, dp_inst) {
		            if (tp_inst.timeDefined === true && $input.val() !== '') {
		                tp_inst._updateDateTime(dp_inst);
		            }
		            if ($.isFunction(tp_inst._defaults.evnts.onClose)) {
		                tp_inst._defaults.evnts.onClose.call($input[0], dateText, dp_inst, tp_inst);
		            }
		        }
		    };
		    for (i in overrides) {
		        if (overrides.hasOwnProperty(i)) {
		            fns[i] = o[i] || null;
		        }
		    }

		    tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, overrides, {
		        evnts:fns,
		        timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
		    });
			tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) {
				return val.toUpperCase();
			});
			tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) {
				return val.toUpperCase();
			});

			// detect which units are supported
			tp_inst.support = detectSupport(
					tp_inst._defaults.timeFormat + 
					(tp_inst._defaults.pickerTimeFormat? tp_inst._defaults.pickerTimeFormat:'') + 
					(tp_inst._defaults.altTimeFormat? tp_inst._defaults.altTimeFormat:''));

			// controlType is string - key to our this._controls
			if(typeof(tp_inst._defaults.controlType) === 'string'){
				if(tp_inst._defaults.controlType == 'slider' && typeof(jQuery.ui.slider) === 'undefined'){
					tp_inst._defaults.controlType = 'select';
				}
				tp_inst.control = tp_inst._controls[tp_inst._defaults.controlType];
			}
			// controlType is an object and must implement create, options, value methods
			else{ 
				tp_inst.control = tp_inst._defaults.controlType;
			}

			// prep the timezone options
			var timezoneList = [-720,-660,-600,-570,-540,-480,-420,-360,-300,-270,-240,-210,-180,-120,-60,
					0,60,120,180,210,240,270,300,330,345,360,390,420,480,525,540,570,600,630,660,690,720,765,780,840];
			if (tp_inst._defaults.timezoneList !== null) {
				timezoneList = tp_inst._defaults.timezoneList;
			}
			var tzl=timezoneList.length,tzi=0,tzv=null;
			if (tzl > 0 && typeof timezoneList[0] !== 'object') {
				for(; tzi<tzl; tzi++){
					tzv = timezoneList[tzi];
					timezoneList[tzi] = { value: tzv, label: $.timepicker.timezoneOffsetString(tzv, tp_inst.support.iso8601) };
				}
			}
			tp_inst._defaults.timezoneList = timezoneList;

			// set the default units
			tp_inst.timezone = tp_inst._defaults.timezone !== null? $.timepicker.timezoneOffsetNumber(tp_inst._defaults.timezone) : 
							((new Date()).getTimezoneOffset()*-1);
			tp_inst.hour = tp_inst._defaults.hour < tp_inst._defaults.hourMin? tp_inst._defaults.hourMin : 
							tp_inst._defaults.hour > tp_inst._defaults.hourMax? tp_inst._defaults.hourMax : tp_inst._defaults.hour;
			tp_inst.minute = tp_inst._defaults.minute < tp_inst._defaults.minuteMin? tp_inst._defaults.minuteMin : 
							tp_inst._defaults.minute > tp_inst._defaults.minuteMax? tp_inst._defaults.minuteMax : tp_inst._defaults.minute;
			tp_inst.second = tp_inst._defaults.second < tp_inst._defaults.secondMin? tp_inst._defaults.secondMin : 
							tp_inst._defaults.second > tp_inst._defaults.secondMax? tp_inst._defaults.secondMax : tp_inst._defaults.second;
			tp_inst.millisec = tp_inst._defaults.millisec < tp_inst._defaults.millisecMin? tp_inst._defaults.millisecMin : 
							tp_inst._defaults.millisec > tp_inst._defaults.millisecMax? tp_inst._defaults.millisecMax : tp_inst._defaults.millisec;
			tp_inst.microsec = tp_inst._defaults.microsec < tp_inst._defaults.microsecMin? tp_inst._defaults.microsecMin : 
							tp_inst._defaults.microsec > tp_inst._defaults.microsecMax? tp_inst._defaults.microsecMax : tp_inst._defaults.microsec;
			tp_inst.ampm = '';
			tp_inst.$input = $input;

			if (o.altField) {
				tp_inst.$altInput = $(o.altField).css({
					cursor: 'pointer'
				}).focus(function() {
					$input.trigger("focus");
				});
			}

			if (tp_inst._defaults.minDate === 0 || tp_inst._defaults.minDateTime === 0) {
				tp_inst._defaults.minDate = new Date();
			}
			if (tp_inst._defaults.maxDate === 0 || tp_inst._defaults.maxDateTime === 0) {
				tp_inst._defaults.maxDate = new Date();
			}

			// datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
			if (tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
				tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
			}
			if (tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
				tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
			}
			if (tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
				tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
			}
			if (tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
				tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
			}
			tp_inst.$input.bind('focus', function() {
				tp_inst._onFocus();
			});

			return tp_inst;
		},

		/*
		* add our sliders to the calendar
		*/
		_addTimePicker: function(dp_inst) {
			var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ? this.$input.val() + ' ' + this.$altInput.val() : this.$input.val();

			this.timeDefined = this._parseTime(currDT);
			this._limitMinMaxDateTime(dp_inst, false);
			this._injectTimePicker();
		},

		/*
		* parse the time string from input value or _setTime
		*/
		_parseTime: function(timeString, withDate) {
			if (!this.inst) {
				this.inst = $.datepicker._getInst(this.$input[0]);
			}

			if (withDate || !this._defaults.timeOnly) {
				var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
				try {
					var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
					if (!parseRes.timeObj) {
						return false;
					}
					$.extend(this, parseRes.timeObj);
				} catch (err) {
					$.timepicker.log("Error parsing the date/time string: " + err +
									"\ndate/time string = " + timeString +
									"\ntimeFormat = " + this._defaults.timeFormat +
									"\ndateFormat = " + dp_dateFormat);
					return false;
				}
				return true;
			} else {
				var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
				if (!timeObj) {
					return false;
				}
				$.extend(this, timeObj);
				return true;
			}
		},

		/*
		* generate and inject html for timepicker into ui datepicker
		*/
		_injectTimePicker: function() {
			var $dp = this.inst.dpDiv,
				o = this.inst.settings,
				tp_inst = this,
				litem = '',
				uitem = '',
				show = null,
				max = {},
				gridSize = {},
				size = null,
				i=0,
				l=0;

			// Prevent displaying twice
			if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
				var noDisplay = ' style="display:none;"',
					html = '<div class="ui-timepicker-div'+ (o.isRTL? ' ui-timepicker-rtl' : '') +'"><dl>' + '<dt class="ui_tpicker_time_label"' + ((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' + 
								'<dd class="ui_tpicker_time"' + ((o.showTime) ? '' : noDisplay) + '></dd>';

				// Create the markup
				for(i=0,l=this.units.length; i<l; i++){
					litem = this.units[i];
					uitem = litem.substr(0,1).toUpperCase() + litem.substr(1);
					show = o['show'+uitem] !== null? o['show'+uitem] : this.support[litem];

					// Added by Peter Medeiros:
					// - Figure out what the hour/minute/second max should be based on the step values.
					// - Example: if stepMinute is 15, then minMax is 45.
					max[litem] = parseInt((o[litem+'Max'] - ((o[litem+'Max'] - o[litem+'Min']) % o['step'+uitem])), 10);
					gridSize[litem] = 0;

					html += '<dt class="ui_tpicker_'+ litem +'_label"' + (show ? '' : noDisplay) + '>' + o[litem +'Text'] + '</dt>' + 
								'<dd class="ui_tpicker_'+ litem +'"><div class="ui_tpicker_'+ litem +'_slider"' + (show ? '' : noDisplay) + '></div>';

					if (show && o[litem+'Grid'] > 0) {
						html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

						if(litem == 'hour'){
							for (var h = o[litem+'Min']; h <= max[litem]; h += parseInt(o[litem+'Grid'], 10)) {
								gridSize[litem]++;
								var tmph = $.datepicker.formatTime(this.support.ampm? 'hht':'HH', {hour:h}, o);									
								html += '<td data-for="'+litem+'">' + tmph + '</td>';
							}
						}
						else{
							for (var m = o[litem+'Min']; m <= max[litem]; m += parseInt(o[litem+'Grid'], 10)) {
								gridSize[litem]++;
								html += '<td data-for="'+litem+'">' + ((m < 10) ? '0' : '') + m + '</td>';
							}
						}

						html += '</tr></table></div>';
					}
					html += '</dd>';
				}
				
				// Timezone
				var showTz = o.showTimezone !== null? o.showTimezone : this.support.timezone;
				html += '<dt class="ui_tpicker_timezone_label"' + (showTz ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
				html += '<dd class="ui_tpicker_timezone" ' + (showTz ? '' : noDisplay) + '></dd>';

				// Create the elements from string
				html += '</dl></div>';
				var $tp = $(html);

				// if we only want time picker...
				if (o.timeOnly === true) {
					$tp.prepend('<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' + '<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' + '</div>');
					$dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
				}
				
				// add sliders, adjust grids, add events
				for(i=0,l=tp_inst.units.length; i<l; i++){
					litem = tp_inst.units[i];
					uitem = litem.substr(0,1).toUpperCase() + litem.substr(1);
					show = o['show'+uitem] !== null? o['show'+uitem] : this.support[litem];

					// add the slider
					tp_inst[litem+'_slider'] = tp_inst.control.create(tp_inst, $tp.find('.ui_tpicker_'+litem+'_slider'), litem, tp_inst[litem], o[litem+'Min'], max[litem], o['step'+uitem]);

					// adjust the grid and add click event
					if (show && o[litem+'Grid'] > 0) {
						size = 100 * gridSize[litem] * o[litem+'Grid'] / (max[litem] - o[litem+'Min']);
						$tp.find('.ui_tpicker_'+litem+' table').css({
							width: size + "%",
							marginLeft: o.isRTL? '0' : ((size / (-2 * gridSize[litem])) + "%"),
							marginRight: o.isRTL? ((size / (-2 * gridSize[litem])) + "%") : '0',
							borderCollapse: 'collapse'
						}).find("td").click(function(e){
								var $t = $(this),
									h = $t.html(),
									n = parseInt(h.replace(/[^0-9]/g),10),
									ap = h.replace(/[^apm]/ig),
									f = $t.data('for'); // loses scope, so we use data-for

								if(f == 'hour'){
									if(ap.indexOf('p') !== -1 && n < 12){
										n += 12;
									}
									else{
										if(ap.indexOf('a') !== -1 && n === 12){
											n = 0;
										}
									}
								}
								
								tp_inst.control.value(tp_inst, tp_inst[f+'_slider'], litem, n);

								tp_inst._onTimeChange();
								tp_inst._onSelectHandler();
							}).css({
								cursor: 'pointer',
								width: (100 / gridSize[litem]) + '%',
								textAlign: 'center',
								overflow: 'hidden'
							});
					} // end if grid > 0
				} // end for loop

				// Add timezone options
				this.timezone_select = $tp.find('.ui_tpicker_timezone').append('<select></select>').find("select");
				$.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function(val, idx) {
					return $("<option />").val(typeof val == "object" ? val.value : val).text(typeof val == "object" ? val.label : val);
				}));
				if (typeof(this.timezone) != "undefined" && this.timezone !== null && this.timezone !== "") {
					var local_timezone = (new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12)).getTimezoneOffset()*-1;
					if (local_timezone == this.timezone) {
						selectLocalTimezone(tp_inst);
					} else {
						this.timezone_select.val(this.timezone);
					}
				} else {
					if (typeof(this.hour) != "undefined" && this.hour !== null && this.hour !== "") {
						this.timezone_select.val(o.timezone);
					} else {
						selectLocalTimezone(tp_inst);
					}
				}
				this.timezone_select.change(function() {
					tp_inst._onTimeChange();
					tp_inst._onSelectHandler();
				});
				// End timezone options
				
				// inject timepicker into datepicker
				var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
				if ($buttonPanel.length) {
					$buttonPanel.before($tp);
				} else {
					$dp.append($tp);
				}

				this.$timeObj = $tp.find('.ui_tpicker_time');

				if (this.inst !== null) {
					var timeDefined = this.timeDefined;
					this._onTimeChange();
					this.timeDefined = timeDefined;
				}

				// slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
				if (this._defaults.addSliderAccess) {
					var sliderAccessArgs = this._defaults.sliderAccessArgs,
						rtl = this._defaults.isRTL;
					sliderAccessArgs.isRTL = rtl;
						
					setTimeout(function() { // fix for inline mode
						if ($tp.find('.ui-slider-access').length === 0) {
							$tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

							// fix any grids since sliders are shorter
							var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
							if (sliderAccessWidth) {
								$tp.find('table:visible').each(function() {
									var $g = $(this),
										oldWidth = $g.outerWidth(),
										oldMarginLeft = $g.css(rtl? 'marginRight':'marginLeft').toString().replace('%', ''),
										newWidth = oldWidth - sliderAccessWidth,
										newMarginLeft = ((oldMarginLeft * newWidth) / oldWidth) + '%',
										css = { width: newWidth, marginRight: 0, marginLeft: 0 };
									css[rtl? 'marginRight':'marginLeft'] = newMarginLeft;
									$g.css(css);
								});
							}
						}
					}, 10);
				}
				// end slideAccess integration

			}
		},

		/*
		* This function tries to limit the ability to go outside the
		* min/max date range
		*/
		_limitMinMaxDateTime: function(dp_inst, adjustSliders) {
			var o = this._defaults,
				dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

			if (!this._defaults.showTimepicker) {
				return;
			} // No time so nothing to check here

			if ($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date) {
				var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
					minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null || this.microsecMinOriginal === null) {
					this.hourMinOriginal = o.hourMin;
					this.minuteMinOriginal = o.minuteMin;
					this.secondMinOriginal = o.secondMin;
					this.millisecMinOriginal = o.millisecMin;
					this.microsecMinOriginal = o.microsecMin;
				}

				if (dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
					this._defaults.hourMin = minDateTime.getHours();
					if (this.hour <= this._defaults.hourMin) {
						this.hour = this._defaults.hourMin;
						this._defaults.minuteMin = minDateTime.getMinutes();
						if (this.minute <= this._defaults.minuteMin) {
							this.minute = this._defaults.minuteMin;
							this._defaults.secondMin = minDateTime.getSeconds();
							if (this.second <= this._defaults.secondMin) {
								this.second = this._defaults.secondMin;
								this._defaults.millisecMin = minDateTime.getMilliseconds();
								if(this.millisec <= this._defaults.millisecMin) {
									this.millisec = this._defaults.millisecMin;
									this._defaults.microsecMin = minDateTime.getMicroseconds();
								} else {
									if (this.microsec < this._defaults.microsecMin) {
										this.microsec = this._defaults.microsecMin;
									}
									this._defaults.microsecMin = this.microsecMinOriginal;
								}
							} else {
								this._defaults.millisecMin = this.millisecMinOriginal;
								this._defaults.microsecMin = this.microsecMinOriginal;
							}
						} else {
							this._defaults.secondMin = this.secondMinOriginal;
							this._defaults.millisecMin = this.millisecMinOriginal;
							this._defaults.microsecMin = this.microsecMinOriginal;
						}
					} else {
						this._defaults.minuteMin = this.minuteMinOriginal;
						this._defaults.secondMin = this.secondMinOriginal;
						this._defaults.millisecMin = this.millisecMinOriginal;
						this._defaults.microsecMin = this.microsecMinOriginal;
					}
				} else {
					this._defaults.hourMin = this.hourMinOriginal;
					this._defaults.minuteMin = this.minuteMinOriginal;
					this._defaults.secondMin = this.secondMinOriginal;
					this._defaults.millisecMin = this.millisecMinOriginal;
					this._defaults.microsecMin = this.microsecMinOriginal;
				}
			}

			if ($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date) {
				var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
					maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

				if (this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null || this.millisecMaxOriginal === null) {
					this.hourMaxOriginal = o.hourMax;
					this.minuteMaxOriginal = o.minuteMax;
					this.secondMaxOriginal = o.secondMax;
					this.millisecMaxOriginal = o.millisecMax;
					this.microsecMaxOriginal = o.microsecMax;
				}

				if (dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()) {
					this._defaults.hourMax = maxDateTime.getHours();
					if (this.hour >= this._defaults.hourMax) {
						this.hour = this._defaults.hourMax;
						this._defaults.minuteMax = maxDateTime.getMinutes();
						if (this.minute >= this._defaults.minuteMax) {
							this.minute = this._defaults.minuteMax;
							this._defaults.secondMax = maxDateTime.getSeconds();
							if (this.second >= this._defaults.secondMax) {
								this.second = this._defaults.secondMax;
								this._defaults.millisecMax = maxDateTime.getMilliseconds();
								if (this.millisec >= this._defaults.millisecMax) {
									this.millisec = this._defaults.millisecMax;
									this._defaults.microsecMax = maxDateTime.getMicroseconds();
								} else {
									if (this.microsec > this._defaults.microsecMax) {
										this.microsec = this._defaults.microsecMax;
									}
									this._defaults.microsecMax = this.microsecMaxOriginal;
								}
							} else {
								this._defaults.millisecMax = this.millisecMaxOriginal;
								this._defaults.microsecMax = this.microsecMaxOriginal;
							}
						} else {
							this._defaults.secondMax = this.secondMaxOriginal;
							this._defaults.millisecMax = this.millisecMaxOriginal;
							this._defaults.microsecMax = this.microsecMaxOriginal;
						}
					} else {
						this._defaults.minuteMax = this.minuteMaxOriginal;
						this._defaults.secondMax = this.secondMaxOriginal;
						this._defaults.millisecMax = this.millisecMaxOriginal;
						this._defaults.microsecMax = this.microsecMaxOriginal;
					}
				} else {
					this._defaults.hourMax = this.hourMaxOriginal;
					this._defaults.minuteMax = this.minuteMaxOriginal;
					this._defaults.secondMax = this.secondMaxOriginal;
					this._defaults.millisecMax = this.millisecMaxOriginal;
					this._defaults.microsecMax = this.microsecMaxOriginal;
				}
			}

			if (adjustSliders !== undefined && adjustSliders === true) {
				var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)), 10),
					minMax = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)), 10),
					secMax = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)), 10),
					millisecMax = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)), 10);
					microsecMax = parseInt((this._defaults.microsecMax - ((this._defaults.microsecMax - this._defaults.microsecMin) % this._defaults.stepMicrosec)), 10);

				if (this.hour_slider) {
					this.control.options(this, this.hour_slider, 'hour', { min: this._defaults.hourMin, max: hourMax });
					this.control.value(this, this.hour_slider, 'hour', this.hour - (this.hour % this._defaults.stepHour));
				}
				if (this.minute_slider) {
					this.control.options(this, this.minute_slider, 'minute', { min: this._defaults.minuteMin, max: minMax });
					this.control.value(this, this.minute_slider, 'minute', this.minute - (this.minute % this._defaults.stepMinute));
				}
				if (this.second_slider) {
					this.control.options(this, this.second_slider, 'second', { min: this._defaults.secondMin, max: secMax });
					this.control.value(this, this.second_slider, 'second', this.second - (this.second % this._defaults.stepSecond));
				}
				if (this.millisec_slider) {
					this.control.options(this, this.millisec_slider, 'millisec', { min: this._defaults.millisecMin, max: millisecMax });
					this.control.value(this, this.millisec_slider, 'millisec', this.millisec - (this.millisec % this._defaults.stepMillisec));
				}
				if (this.microsec_slider) {
					this.control.options(this, this.microsec_slider, 'microsec', { min: this._defaults.microsecMin, max: microsecMax });
					this.control.value(this, this.microsec_slider, 'microsec', this.microsec - (this.microsec % this._defaults.stepMicrosec));
				}
			}

		},

		/*
		* when a slider moves, set the internal time...
		* on time change is also called when the time is updated in the text field
		*/
		_onTimeChange: function() {
			var hour = (this.hour_slider) ? this.control.value(this, this.hour_slider, 'hour') : false,
				minute = (this.minute_slider) ? this.control.value(this, this.minute_slider, 'minute') : false,
				second = (this.second_slider) ? this.control.value(this, this.second_slider, 'second') : false,
				millisec = (this.millisec_slider) ? this.control.value(this, this.millisec_slider, 'millisec') : false,
				microsec = (this.microsec_slider) ? this.control.value(this, this.microsec_slider, 'microsec') : false,
				timezone = (this.timezone_select) ? this.timezone_select.val() : false,
				o = this._defaults,
				pickerTimeFormat = o.pickerTimeFormat || o.timeFormat,
				pickerTimeSuffix = o.pickerTimeSuffix || o.timeSuffix;

			if (typeof(hour) == 'object') {
				hour = false;
			}
			if (typeof(minute) == 'object') {
				minute = false;
			}
			if (typeof(second) == 'object') {
				second = false;
			}
			if (typeof(millisec) == 'object') {
				millisec = false;
			}
			if (typeof(microsec) == 'object') {
				microsec = false;
			}
			if (typeof(timezone) == 'object') {
				timezone = false;
			}

			if (hour !== false) {
				hour = parseInt(hour, 10);
			}
			if (minute !== false) {
				minute = parseInt(minute, 10);
			}
			if (second !== false) {
				second = parseInt(second, 10);
			}
			if (millisec !== false) {
				millisec = parseInt(millisec, 10);
			}
			if (microsec !== false) {
				microsec = parseInt(microsec, 10);
			}

			var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

			// If the update was done in the input field, the input field should not be updated.
			// If the update was done using the sliders, update the input field.
			var hasChanged = (hour != this.hour || minute != this.minute || second != this.second || millisec != this.millisec || microsec != this.microsec 
								|| (this.ampm.length > 0 && (hour < 12) != ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) 
								|| (this.timezone !== null && timezone != this.timezone));

			if (hasChanged) {

				if (hour !== false) {
					this.hour = hour;
				}
				if (minute !== false) {
					this.minute = minute;
				}
				if (second !== false) {
					this.second = second;
				}
				if (millisec !== false) {
					this.millisec = millisec;
				}
				if (microsec !== false) {
					this.microsec = microsec;
				}
				if (timezone !== false) {
					this.timezone = timezone;
				}

				if (!this.inst) {
					this.inst = $.datepicker._getInst(this.$input[0]);
				}

				this._limitMinMaxDateTime(this.inst, true);
			}
			if (this.support.ampm) {
				this.ampm = ampm;
			}

			// Updates the time within the timepicker
			this.formattedTime = $.datepicker.formatTime(o.timeFormat, this, o);
			if (this.$timeObj) {
				if(pickerTimeFormat === o.timeFormat){
					this.$timeObj.text(this.formattedTime + pickerTimeSuffix);
				}
				else{
					this.$timeObj.text($.datepicker.formatTime(pickerTimeFormat, this, o) + pickerTimeSuffix);
				}
			}

			this.timeDefined = true;
			if (hasChanged) {
				this._updateDateTime();
			}
		},

		/*
		* call custom onSelect.
		* bind to sliders slidestop, and grid click.
		*/
		_onSelectHandler: function() {
			var onSelect = this._defaults.onSelect || this.inst.settings.onSelect;
			var inputEl = this.$input ? this.$input[0] : null;
			if (onSelect && inputEl) {
				onSelect.apply(inputEl, [this.formattedDateTime, this]);
			}
		},

		/*
		* update our input with the new date time..
		*/
		_updateDateTime: function(dp_inst) {
			dp_inst = this.inst || dp_inst;
			var dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
				dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
				formatCfg = $.datepicker._getFormatConfig(dp_inst),
				timeAvailable = dt !== null && this.timeDefined;
			this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
			var formattedDateTime = this.formattedDate;
			
			// if a slider was changed but datepicker doesn't have a value yet, set it
			if(dp_inst.lastVal===""){
                dp_inst.currentYear=dp_inst.selectedYear;
                dp_inst.currentMonth=dp_inst.selectedMonth;
                dp_inst.currentDay=dp_inst.selectedDay;
            }

			/*
			* remove following lines to force every changes in date picker to change the input value
			* Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
			* If the user manually empty the value in the input field, the date picker will never change selected value.
			*/
			//if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
			//	return;
			//}

			if (this._defaults.timeOnly === true) {
				formattedDateTime = this.formattedTime;
			} else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
				formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
			}

			this.formattedDateTime = formattedDateTime;

			if (!this._defaults.showTimepicker) {
				this.$input.val(this.formattedDate);
			} else if (this.$altInput && this._defaults.timeOnly === false && this._defaults.altFieldTimeOnly === true) {
				this.$altInput.val(this.formattedTime);
				this.$input.val(this.formattedDate);
			} else if (this.$altInput) {
				this.$input.val(formattedDateTime);
				var altFormattedDateTime = '',
					altSeparator = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
					altTimeSuffix = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
				
				if(!this._defaults.timeOnly){
					if (this._defaults.altFormat){
						altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg);
					}
					else{
						altFormattedDateTime = this.formattedDate;
					}

					if (altFormattedDateTime){
						altFormattedDateTime += altSeparator;
					}
				}

				if(this._defaults.altTimeFormat){
					altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
				}
				else{
					altFormattedDateTime += this.formattedTime + altTimeSuffix;
				}
				this.$altInput.val(altFormattedDateTime);
			} else {
				this.$input.val(formattedDateTime);
			}

			this.$input.trigger("change");
		},

		_onFocus: function() {
			if (!this.$input.val() && this._defaults.defaultValue) {
				this.$input.val(this._defaults.defaultValue);
				var inst = $.datepicker._getInst(this.$input.get(0)),
					tp_inst = $.datepicker._get(inst, 'timepicker');
				if (tp_inst) {
					if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
						try {
							$.datepicker._updateDatepicker(inst);
						} catch (err) {
							$.timepicker.log(err);
						}
					}
				}
			}
		},

		/*
		* Small abstraction to control types
		* We can add more, just be sure to follow the pattern: create, options, value
		*/
		_controls: {
			// slider methods
			slider: {
				create: function(tp_inst, obj, unit, val, min, max, step){
					var rtl = tp_inst._defaults.isRTL; // if rtl go -60->0 instead of 0->60
					return obj.prop('slide', null).slider({
						orientation: "horizontal",
						value: rtl? val*-1 : val,
						min: rtl? max*-1 : min,
						max: rtl? min*-1 : max,
						step: step,
						slide: function(event, ui) {
							tp_inst.control.value(tp_inst, $(this), unit, rtl? ui.value*-1:ui.value);
							tp_inst._onTimeChange();
						},
						stop: function(event, ui) {
							tp_inst._onSelectHandler();
						}
					});	
				},
				options: function(tp_inst, obj, unit, opts, val){
					if(tp_inst._defaults.isRTL){
						if(typeof(opts) == 'string'){
							if(opts == 'min' || opts == 'max'){
								if(val !== undefined){
									return obj.slider(opts, val*-1);
								}
								return Math.abs(obj.slider(opts));
							}
							return obj.slider(opts);
						}
						var min = opts.min, 
							max = opts.max;
						opts.min = opts.max = null;
						if(min !== undefined){
							opts.max = min * -1;
						}
						if(max !== undefined){
							opts.min = max * -1;
						}
						return obj.slider(opts);
					}
					if(typeof(opts) == 'string' && val !== undefined){
							return obj.slider(opts, val);
					}
					return obj.slider(opts);
				},
				value: function(tp_inst, obj, unit, val){
					if(tp_inst._defaults.isRTL){
						if(val !== undefined){
							return obj.slider('value', val*-1);
						}
						return Math.abs(obj.slider('value'));
					}
					if(val !== undefined){
						return obj.slider('value', val);
					}
					return obj.slider('value');
				}
			},
			// select methods
			select: {
				create: function(tp_inst, obj, unit, val, min, max, step){
					var sel = '<select class="ui-timepicker-select" data-unit="'+ unit +'" data-min="'+ min +'" data-max="'+ max +'" data-step="'+ step +'">',
						format = tp_inst._defaults.pickerTimeFormat || tp_inst._defaults.timeFormat;

					for(var i=min; i<=max; i+=step){						
						sel += '<option value="'+ i +'"'+ (i==val? ' selected':'') +'>';
						if(unit == 'hour'){
							sel += $.datepicker.formatTime($.trim(format.replace(/[^ht ]/ig,'')), {hour:i}, tp_inst._defaults);
						}
						else if(unit == 'millisec' || unit == 'microsec' || i >= 10){ sel += i; }
						else {sel += '0'+ i.toString(); }
						sel += '</option>';
					}
					sel += '</select>';

					obj.children('select').remove();

					$(sel).appendTo(obj).change(function(e){
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					});

					return obj;
				},
				options: function(tp_inst, obj, unit, opts, val){
					var o = {},
						$t = obj.children('select');
					if(typeof(opts) == 'string'){
						if(val === undefined){
							return $t.data(opts);
						}
						o[opts] = val;	
					}
					else{ o = opts; }
					return tp_inst.control.create(tp_inst, obj, $t.data('unit'), $t.val(), o.min || $t.data('min'), o.max || $t.data('max'), o.step || $t.data('step'));
				},
				value: function(tp_inst, obj, unit, val){
					var $t = obj.children('select');
					if(val !== undefined){
						return $t.val(val);
					}
					return $t.val();
				}
			}
		} // end _controls

	});

	$.fn.extend({
		/*
		* shorthand just to use timepicker..
		*/
		timepicker: function(o) {
			o = o || {};
			var tmp_args = Array.prototype.slice.call(arguments);

			if (typeof o == 'object') {
				tmp_args[0] = $.extend(o, {
					timeOnly: true
				});
			}

			return $(this).each(function() {
				$.fn.datetimepicker.apply($(this), tmp_args);
			});
		},

		/*
		* extend timepicker to datepicker
		*/
		datetimepicker: function(o) {
			o = o || {};
			var tmp_args = arguments;

			if (typeof(o) == 'string') {
				if (o == 'getDate') {
					return $.fn.datepicker.apply($(this[0]), tmp_args);
				} else {
					return this.each(function() {
						var $t = $(this);
						$t.datepicker.apply($t, tmp_args);
					});
				}
			} else {
				return this.each(function() {
					var $t = $(this);
					$t.datepicker($.timepicker._newInst($t, o)._defaults);
				});
			}
		}
	});

	/*
	* Public Utility to parse date and time
	*/
	$.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
		if (parseRes.timeObj) {
			var t = parseRes.timeObj;
			parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
			parseRex.date.setMicroseconds(t.microsec);
		}

		return parseRes.date;
	};

	/*
	* Public utility to parse time
	*/
	$.datepicker.parseTime = function(timeFormat, timeString, options) {		
		var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {}),
			iso8601 = (timeFormat.replace(/\'.*?\'/g,'').indexOf('Z') !== -1);

		// Strict parse requires the timeString to match the timeFormat exactly
		var strictParse = function(f, s, o){

			// pattern for standard and localized AM/PM markers
			var getPatternAmpm = function(amNames, pmNames) {
				var markers = [];
				if (amNames) {
					$.merge(markers, amNames);
				}
				if (pmNames) {
					$.merge(markers, pmNames);
				}
				markers = $.map(markers, function(val) {
					return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&');
				});
				return '(' + markers.join('|') + ')?';
			};

			// figure out position of time elements.. cause js cant do named captures
			var getFormatPositions = function(timeFormat) {
				var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|c{1}|t{1,2}|z|'.*?')/g),
					orders = {
						h: -1,
						m: -1,
						s: -1,
						l: -1,
						c: -1,
						t: -1,
						z: -1
					};

				if (finds) {
					for (var i = 0; i < finds.length; i++) {
						if (orders[finds[i].toString().charAt(0)] == -1) {
							orders[finds[i].toString().charAt(0)] = i + 1;
						}
					}
				}
				return orders;
			};

			var regstr = '^' + f.toString()
					.replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|'.*?')/g, function (match) {
							var ml = match.length;
							switch (match.charAt(0).toLowerCase()) {
								case 'h': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 'm': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 's': return ml === 1? '(\\d?\\d)':'(\\d{'+ml+'})';
								case 'l': return '(\\d?\\d?\\d)';
								case 'c': return '(\\d?\\d?\\d)';
								case 'z': return '(z|[-+]\\d\\d:?\\d\\d|\\S+)?';
								case 't': return getPatternAmpm(o.amNames, o.pmNames);
								default:    // literal escaped in quotes
									return '(' + match.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (m) { return "\\" + m; }) + ')?';
							}
						})
					.replace(/\s/g, '\\s?') +
					o.timeSuffix + '$',
				order = getFormatPositions(f),
				ampm = '',
				treg;

			treg = s.match(new RegExp(regstr, 'i'));

			var resTime = {
				hour: 0,
				minute: 0,
				second: 0,
				millisec: 0,
				microsec: 0
			};

			if (treg) {
				if (order.t !== -1) {
					if (treg[order.t] === undefined || treg[order.t].length === 0) {
						ampm = '';
						resTime.ampm = '';
					} else {
						ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? 'AM' : 'PM';
						resTime.ampm = o[ampm == 'AM' ? 'amNames' : 'pmNames'][0];
					}
				}

				if (order.h !== -1) {
					if (ampm == 'AM' && treg[order.h] == '12') {
						resTime.hour = 0; // 12am = 0 hour
					} else {
						if (ampm == 'PM' && treg[order.h] != '12') {
							resTime.hour = parseInt(treg[order.h], 10) + 12; // 12pm = 12 hour, any other pm = hour + 12
						} else {
							resTime.hour = Number(treg[order.h]);
						}
					}
				}

				if (order.m !== -1) {
					resTime.minute = Number(treg[order.m]);
				}
				if (order.s !== -1) {
					resTime.second = Number(treg[order.s]);
				}
				if (order.l !== -1) {
					resTime.millisec = Number(treg[order.l]);
				}
				if (order.c !== -1) {
					resTime.microsec = Number(treg[order.c]);
				}
				if (order.z !== -1 && treg[order.z] !== undefined) {
					resTime.timezone = $.timepicker.timezoneOffsetNumber(treg[order.z]);
				}


				return resTime;
			}
			return false;
		};// end strictParse

		// First try JS Date, if that fails, use strictParse
		var looseParse = function(f,s,o){
			try{
				var d = new Date('2012-01-01 '+ s);
				if(isNaN(d.getTime())){
					d = new Date('2012-01-01T'+ s);
					if(isNaN(d.getTime())){
						d = new Date('01/01/2012 '+ s);
						if(isNaN(d.getTime())){
							throw "Unable to parse time with native Date: "+ s;
						}
					}
				}

				return {
					hour: d.getHours(),
					minute: d.getMinutes(),
					second: d.getSeconds(),
					millisec: d.getMilliseconds(),
					microsec: d.getMicroseconds(),
					timezone: d.getTimezoneOffset()*-1
				};
			}
			catch(err){
				try{
					return strictParse(f,s,o);
				}
				catch(err2){
					$.timepicker.log("Unable to parse \ntimeString: "+ s +"\ntimeFormat: "+ f);
				}				
			}
			return false;
		}; // end looseParse
		
		if(typeof o.parse === "function"){
			return o.parse(timeFormat, timeString, o);
		}
		if(o.parse === 'loose'){
			return looseParse(timeFormat, timeString, o);
		}
		return strictParse(timeFormat, timeString, o);
	};

	/*
	* Public utility to format the time
	* format = string format of the time
	* time = a {}, not a Date() for timezones
	* options = essentially the regional[].. amNames, pmNames, ampm
	*/
	$.datepicker.formatTime = function(format, time, options) {
		options = options || {};
		options = $.extend({}, $.timepicker._defaults, options);
		time = $.extend({
			hour: 0,
			minute: 0,
			second: 0,
			millisec: 0,
			timezone: 0
		}, time);

		var tmptime = format,
			ampmName = options.amNames[0],
			hour = parseInt(time.hour, 10);

		if (hour > 11) {
			ampmName = options.pmNames[0];
		}

		tmptime = tmptime.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[zZ]|[lc]|('.*?'|".*?"))/g, function(match) {
		switch (match) {
			case 'HH':
				return ('0' + hour).slice(-2);
			case 'H':
				return hour;
			case 'hh':
				return ('0' + convert24to12(hour)).slice(-2);
			case 'h':
				return convert24to12(hour);
			case 'mm':
				return ('0' + time.minute).slice(-2);
			case 'm':
				return time.minute;
			case 'ss':
				return ('0' + time.second).slice(-2);
			case 's':
				return time.second;
			case 'l':
				return ('00' + time.millisec).slice(-3);
			case 'c':
				return ('00' + time.microsec).slice(-3);
			case 'z':
				return $.timepicker.timezoneOffsetString(time.timezone === null? options.timezone : time.timezone, false);
			case 'Z':
				return $.timepicker.timezoneOffsetString(time.timezone === null? options.timezone : time.timezone, true);
			case 'T': 
				return ampmName.charAt(0).toUpperCase();
			case 'TT': 
				return ampmName.toUpperCase();
			case 't':
				return ampmName.charAt(0).toLowerCase();
			case 'tt':
				return ampmName.toLowerCase();
			default:
				return match.replace(/\'/g, "") || "'";
			}
		});

		tmptime = $.trim(tmptime);
		return tmptime;
	};

	/*
	* the bad hack :/ override datepicker so it doesnt close on select
	// inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
	*/
	$.datepicker._base_selectDate = $.datepicker._selectDate;
	$.datepicker._selectDate = function(id, dateStr) {
		var inst = this._getInst($(id)[0]),
			tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			tp_inst._limitMinMaxDateTime(inst, true);
			inst.inline = inst.stay_open = true;
			//This way the onSelect handler called from calendarpicker get the full dateTime
			this._base_selectDate(id, dateStr);
			inst.inline = inst.stay_open = false;
			this._notifyChange(inst);
			this._updateDatepicker(inst);
		} else {
			this._base_selectDate(id, dateStr);
		}
	};

	/*
	* second bad hack :/ override datepicker so it triggers an event when changing the input field
	* and does not redraw the datepicker on every selectDate event
	*/
	$.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
	$.datepicker._updateDatepicker = function(inst) {

		// don't popup the datepicker if there is another instance already opened
		var input = inst.input[0];
		if ($.datepicker._curInst && $.datepicker._curInst != inst && $.datepicker._datepickerShowing && $.datepicker._lastInput != input) {
			return;
		}

		if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {

			this._base_updateDatepicker(inst);

			// Reload the time control when changing something in the input text field.
			var tp_inst = this._get(inst, 'timepicker');
			if (tp_inst) {
				tp_inst._addTimePicker(inst);
			}
		}
	};

	/*
	* third bad hack :/ override datepicker so it allows spaces and colon in the input field
	*/
	$.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
	$.datepicker._doKeyPress = function(event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if ($.datepicker._get(inst, 'constrainInput')) {
				var ampm = tp_inst.support.ampm,
					tz = tp_inst._defaults.showTimezone !== null? tp_inst._defaults.showTimezone : tp_inst.support.timezone,					
					dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
					datetimeChars = tp_inst._defaults.timeFormat.toString()
											.replace(/[hms]/g, '')
											.replace(/TT/g, ampm ? 'APM' : '')
											.replace(/Tt/g, ampm ? 'AaPpMm' : '')
											.replace(/tT/g, ampm ? 'AaPpMm' : '')
											.replace(/T/g, ampm ? 'AP' : '')
											.replace(/tt/g, ampm ? 'apm' : '')
											.replace(/t/g, ampm ? 'ap' : '') + 
											" " + tp_inst._defaults.separator + 
											tp_inst._defaults.timeSuffix + 
											(tz ? tp_inst._defaults.timezoneList.join('') : '') + 
											(tp_inst._defaults.amNames.join('')) + (tp_inst._defaults.pmNames.join('')) + 
											dateChars,
					chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
				return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
			}
		}

		return $.datepicker._base_doKeyPress(event);
	};

	/*
	* Fourth bad hack :/ override _updateAlternate function used in inline mode to init altField
	*/
	$.datepicker._base_updateAlternate = $.datepicker._updateAlternate;
	/* Update any alternate field to synchronise with the main field. */
	$.datepicker._updateAlternate = function(inst) {
		var tp_inst = this._get(inst, 'timepicker');
		if(tp_inst){
			var altField = tp_inst._defaults.altField;
			if (altField) { // update alternate field too
				var altFormat = tp_inst._defaults.altFormat || tp_inst._defaults.dateFormat,
					date = this._getDate(inst),
					formatCfg = $.datepicker._getFormatConfig(inst),
					altFormattedDateTime = '', 
					altSeparator = tp_inst._defaults.altSeparator ? tp_inst._defaults.altSeparator : tp_inst._defaults.separator, 
					altTimeSuffix = tp_inst._defaults.altTimeSuffix ? tp_inst._defaults.altTimeSuffix : tp_inst._defaults.timeSuffix,
					altTimeFormat = tp_inst._defaults.altTimeFormat !== null ? tp_inst._defaults.altTimeFormat : tp_inst._defaults.timeFormat;
				
				altFormattedDateTime += $.datepicker.formatTime(altTimeFormat, tp_inst, tp_inst._defaults) + altTimeSuffix;
				if(!tp_inst._defaults.timeOnly && !tp_inst._defaults.altFieldTimeOnly && date !== null){
					if(tp_inst._defaults.altFormat){
						altFormattedDateTime = $.datepicker.formatDate(tp_inst._defaults.altFormat, date, formatCfg) + altSeparator + altFormattedDateTime;
					}
					else{
						altFormattedDateTime = tp_inst.formattedDate + altSeparator + altFormattedDateTime;
					}
				}
				$(altField).val(altFormattedDateTime);
			}
		}
		else{
			$.datepicker._base_updateAlternate(inst);
		}
	};

	/*
	* Override key up event to sync manual input changes.
	*/
	$.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
	$.datepicker._doKeyUp = function(event) {
		var inst = $.datepicker._getInst(event.target),
			tp_inst = $.datepicker._get(inst, 'timepicker');

		if (tp_inst) {
			if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
				try {
					$.datepicker._updateDatepicker(inst);
				} catch (err) {
					$.timepicker.log(err);
				}
			}
		}

		return $.datepicker._base_doKeyUp(event);
	};

	/*
	* override "Today" button to also grab the time.
	*/
	$.datepicker._base_gotoToday = $.datepicker._gotoToday;
	$.datepicker._gotoToday = function(id) {
		var inst = this._getInst($(id)[0]),
			$dp = inst.dpDiv;
		this._base_gotoToday(id);
		var tp_inst = this._get(inst, 'timepicker');
		selectLocalTimezone(tp_inst);
		var now = new Date();
		this._setTime(inst, now);
		$('.ui-datepicker-today', $dp).click();
	};

	/*
	* Disable & enable the Time in the datetimepicker
	*/
	$.datepicker._disableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			tp_inst._defaults.showTimepicker = false;
			tp_inst._updateDateTime(inst);
		}
	};

	$.datepicker._enableTimepickerDatepicker = function(target) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');
		$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
		if (tp_inst) {
			tp_inst._defaults.showTimepicker = true;
			tp_inst._addTimePicker(inst); // Could be disabled on page load
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create our own set time function
	*/
	$.datepicker._setTime = function(inst, date) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var defaults = tp_inst._defaults;

			// calling _setTime with no date sets time to defaults
			tp_inst.hour = date ? date.getHours() : defaults.hour;
			tp_inst.minute = date ? date.getMinutes() : defaults.minute;
			tp_inst.second = date ? date.getSeconds() : defaults.second;
			tp_inst.millisec = date ? date.getMilliseconds() : defaults.millisec;
			tp_inst.microsec = date ? date.getMicroseconds() : defaults.microsec;

			//check if within min/max times.. 
			tp_inst._limitMinMaxDateTime(inst, true);

			tp_inst._onTimeChange();
			tp_inst._updateDateTime(inst);
		}
	};

	/*
	* Create new public method to set only time, callable as $().datepicker('setTime', date)
	*/
	$.datepicker._setTimeDatepicker = function(target, date, withDate) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			this._setDateFromField(inst);
			var tp_date;
			if (date) {
				if (typeof date == "string") {
					tp_inst._parseTime(date, withDate);
					tp_date = new Date();
					tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
					tp_date.setMicroseconds(tp_inst.microsec);
				} else {
					tp_date = new Date(date.getTime());
				}
				if (tp_date.toString() == 'Invalid Date') {
					tp_date = undefined;
				}
				this._setTime(inst, tp_date);
			}
		}

	};

	/*
	* override setDate() to allow setting time too within Date object
	*/
	$.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
	$.datepicker._setDateDatepicker = function(target, date) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker'),
			tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;
		
		// This is important if you are using the timezone option, javascript's Date 
		// object will only return the timezone offset for the current locale, so we 
		// adjust it accordingly.  If not using timezone option this won't matter..
		// If a timezone is different in tp, keep the timezone as is
		if(tp_inst && tp_inst.timezone != null){
			date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
			tp_date = $.timepicker.timezoneAdjust(tp_date, tp_inst.timezone);
		}

		this._updateDatepicker(inst);
		this._base_setDateDatepicker.apply(this, arguments);
		this._setTimeDatepicker(target, tp_date, true);
	};

	/*
	* override getDate() to allow getting time too within Date object
	*/
	$.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
	$.datepicker._getDateDatepicker = function(target, noDefault) {
		var inst = this._getInst(target);
		if (!inst) {
			return;
		}

		var tp_inst = this._get(inst, 'timepicker');

		if (tp_inst) {
			// if it hasn't yet been defined, grab from field
			if(inst.lastVal === undefined){
				this._setDateFromField(inst, noDefault);
			}

			var date = this._getDate(inst);
			if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) {
				date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
				date.setMicroseconds(tp_inst.microsec);

				// This is important if you are using the timezone option, javascript's Date 
				// object will only return the timezone offset for the current locale, so we 
				// adjust it accordingly.  If not using timezone option this won't matter..
				if(tp_inst.timezone != null){
					date = $.timepicker.timezoneAdjust(date, tp_inst.timezone);
				}
			}
			return date;
		}
		return this._base_getDateDatepicker(target, noDefault);
	};

	/*
	* override parseDate() because UI 1.8.14 throws an error about "Extra characters"
	* An option in datapicker to ignore extra format characters would be nicer.
	*/
	$.datepicker._base_parseDate = $.datepicker.parseDate;
	$.datepicker.parseDate = function(format, value, settings) {
		var date;
		try {
			date = this._base_parseDate(format, value, settings);
		} catch (err) {
			// Hack!  The error message ends with a colon, a space, and
			// the "extra" characters.  We rely on that instead of
			// attempting to perfectly reproduce the parsing algorithm.
			if (err.indexOf(":") >= 0) {
				date = this._base_parseDate(format, value.substring(0,value.length-(err.length-err.indexOf(':')-2)), settings);
				$.timepicker.log("Error parsing the date string: " + err + "\ndate string = " + value + "\ndate format = " + format);
			} else {
				throw err;
			}
		}
		return date;
	};

	/*
	* override formatDate to set date with time to the input
	*/
	$.datepicker._base_formatDate = $.datepicker._formatDate;
	$.datepicker._formatDate = function(inst, day, month, year) {
		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			tp_inst._updateDateTime(inst);
			return tp_inst.$input.val();
		}
		return this._base_formatDate(inst);
	};

	/*
	* override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
	*/
	$.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
	$.datepicker._optionDatepicker = function(target, name, value) {
		var inst = this._getInst(target),
	        name_clone;
		if (!inst) {
			return null;
		}

		var tp_inst = this._get(inst, 'timepicker');
		if (tp_inst) {
			var min = null,
				max = null,
				onselect = null,
				overrides = tp_inst._defaults.evnts,
				fns = {},
				prop;
		    if (typeof name == 'string') { // if min/max was set with the string
		        if (name === 'minDate' || name === 'minDateTime') {
		            min = value;
		        } else if (name === 'maxDate' || name === 'maxDateTime') {
		            max = value;
		        } else if (name === 'onSelect') {
		            onselect = value;
		        } else if (overrides.hasOwnProperty(name)) {
		            if (typeof (value) === 'undefined') {
		                return overrides[name];
		            }
		            fns[name] = value;
		            name_clone = {}; //empty results in exiting function after overrides updated
		        }
		    } else if (typeof name == 'object') { //if min/max was set with the JSON
		        if (name.minDate) {
		            min = name.minDate;
		        } else if (name.minDateTime) {
		            min = name.minDateTime;
		        } else if (name.maxDate) {
		            max = name.maxDate;
		        } else if (name.maxDateTime) {
		            max = name.maxDateTime;
		        }
		        for (prop in overrides) {
		            if (overrides.hasOwnProperty(prop) && name[prop]) {
		                fns[prop] = name[prop];
		            }
		        }
		    }
		    for (prop in fns) {
		        if (fns.hasOwnProperty(prop)) {
		            overrides[prop] = fns[prop];
		            if (!name_clone) { name_clone = $.extend({}, name);}
		            delete name_clone[prop];
		        }
		    }
		    if (name_clone && isEmptyObject(name_clone)) { return; }
		    if (min) { //if min was set
		        if (min === 0) {
		            min = new Date();
		        } else {
		            min = new Date(min);
		        }
		        tp_inst._defaults.minDate = min;
		        tp_inst._defaults.minDateTime = min;
		    } else if (max) { //if max was set
		        if (max === 0) {
		            max = new Date();
		        } else {
		            max = new Date(max);
		        }
		        tp_inst._defaults.maxDate = max;
		        tp_inst._defaults.maxDateTime = max;
		    } else if (onselect) {
		        tp_inst._defaults.onSelect = onselect;
		    }
		}
		if (value === undefined) {
			return this._base_optionDatepicker.call($.datepicker, target, name);
		}
		return this._base_optionDatepicker.call($.datepicker, target, name_clone || name, value);
	};
	
	/*
	* jQuery isEmptyObject does not check hasOwnProperty - if someone has added to the object prototype,
	* it will return false for all objects
	*/
	var isEmptyObject = function(obj) {
		var prop;
		for (prop in obj) {
			if (obj.hasOwnProperty(obj)) {
				return false;
			}
		}
		return true;
	};

	/*
	* jQuery extend now ignores nulls!
	*/
	var extendRemove = function(target, props) {
		$.extend(target, props);
		for (var name in props) {
			if (props[name] === null || props[name] === undefined) {
				target[name] = props[name];
			}
		}
		return target;
	};

	/*
	* Determine by the time format which units are supported
	* Returns an object of booleans for each unit
	*/
	var detectSupport = function(timeFormat){
		var tf = timeFormat.replace(/\'.*?\'/g,'').toLowerCase(), // removes literals
			isIn = function(f, t){ // does the format contain the token?
					return f.indexOf(t) !== -1? true:false; 
				};
		return {
				hour: isIn(tf,'h'),
				minute: isIn(tf,'m'),
				second: isIn(tf,'s'),
				millisec: isIn(tf,'l'),
				microsec: isIn(tf,'c'),
				timezone: isIn(tf,'z'),
				ampm: isIn('t') && isIn(timeFormat,'h'),
				iso8601: isIn(timeFormat, 'Z')
			};
	};

	/*
	* Converts 24 hour format into 12 hour
	* Returns 12 hour without leading 0
	*/
	var convert24to12 = function(hour) {
		if (hour > 12) {
			hour = hour - 12;
		}

		if (hour === 0) {
			hour = 12;
		}

		return String(hour);
	};

	/*
	* Splits datetime string into date ans time substrings.
	* Throws exception when date can't be parsed
	* Returns [dateString, timeString]
	*/
	var splitDateTime = function(dateFormat, dateTimeString, dateSettings, timeSettings) {
		try {
			// The idea is to get the number separator occurances in datetime and the time format requested (since time has 
			// fewer unknowns, mostly numbers and am/pm). We will use the time pattern to split.
			var separator = timeSettings && timeSettings.separator ? timeSettings.separator : $.timepicker._defaults.separator,
				format = timeSettings && timeSettings.timeFormat ? timeSettings.timeFormat : $.timepicker._defaults.timeFormat,
				timeParts = format.split(separator), // how many occurances of separator may be in our format?
				timePartsLen = timeParts.length,
				allParts = dateTimeString.split(separator),
				allPartsLen = allParts.length;

			if (allPartsLen > 1) {
				return [
						allParts.splice(0,allPartsLen-timePartsLen).join(separator),
						allParts.splice(0,timePartsLen).join(separator)
					];
			}

		} catch (err) {
			$.timepicker.log('Could not split the date from the time. Please check the following datetimepicker options' +
					"\nthrown error: " + err +
					"\ndateTimeString" + dateTimeString +
					"\ndateFormat = " + dateFormat +
					"\nseparator = " + timeSettings.separator +
					"\ntimeFormat = " + timeSettings.timeFormat);

			if (err.indexOf(":") >= 0) {
				// Hack!  The error message ends with a colon, a space, and
				// the "extra" characters.  We rely on that instead of
				// attempting to perfectly reproduce the parsing algorithm.
				var dateStringLength = dateTimeString.length - (err.length - err.indexOf(':') - 2),
					timeString = dateTimeString.substring(dateStringLength);

				return [$.trim(dateTimeString.substring(0, dateStringLength)), $.trim(dateTimeString.substring(dateStringLength))];

			} else {
				throw err;
			}
		}
		return [dateTimeString, ''];
	};

	/*
	* Internal function to parse datetime interval
	* Returns: {date: Date, timeObj: Object}, where
	*   date - parsed date without time (type Date)
	*   timeObj = {hour: , minute: , second: , millisec: , microsec: } - parsed time. Optional
	*/
	var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
		var date;
		var splitRes = splitDateTime(dateFormat, dateTimeString, dateSettings, timeSettings);
		date = $.datepicker._base_parseDate(dateFormat, splitRes[0], dateSettings);
		if (splitRes[1] !== '') {
			var timeString = splitRes[1],
				parsedTime = $.datepicker.parseTime(timeFormat, timeString, timeSettings);

			if (parsedTime === null) {
				throw 'Wrong time format';
			}
			return {
				date: date,
				timeObj: parsedTime
			};
		} else {
			return {
				date: date
			};
		}
	};

	/*
	* Internal function to set timezone_select to the local timezone
	*/
	var selectLocalTimezone = function(tp_inst, date) {
		if (tp_inst && tp_inst.timezone_select) {
			var now = typeof date !== 'undefined' ? date : new Date();
			tp_inst.timezone_select.val(now.getTimezoneOffset()*-1);
		}
	};

	/*
	* Create a Singleton Insance
	*/
	$.timepicker = new Timepicker();

	/**
	 * Get the timezone offset as string from a date object (eg '+0530' for UTC+5.5)
	 * @param  number if not a number this value is returned
	 * @param boolean if true formats in accordance to iso8601 "+12:45"
	 * @return string
	 */
	$.timepicker.timezoneOffsetString = function(tzMinutes, iso8601) {
		if(isNaN(tzMinutes) || tzMinutes > 840){
			return tzMinutes;
		}

		var off = tzMinutes,
			minutes = off % 60,
			hours = (off - minutes) / 60,
			iso = iso8601? ':':'',
			tz = (off >= 0 ? '+' : '-') + ('0' + (hours * 101).toString()).slice(-2) + iso + ('0' + (minutes * 101).toString()).slice(-2);
		
		if(tz == '+00:00'){
			return 'Z';
		}
		return tz;
	};

	/**
	 * Get the number in minutes that represents a timezone string
	 * @param  string formated like "+0500", "-1245"
	 * @return number
	 */
	$.timepicker.timezoneOffsetNumber = function(tzString) {
		tzString = tzString.toString().replace(':',''); // excuse any iso8601, end up with "+1245"

		if(tzString.toUpperCase() === 'Z'){ // if iso8601 with Z, its 0 minute offset
			return 0;
		}

		if(!/^(\-|\+)\d{4}$/.test(tzString)){ // possibly a user defined tz, so just give it back
			return tzString;
		}

		return ((tzString.substr(0,1) =='-'? -1 : 1) * // plus or minus
					((parseInt(tzString.substr(1,2),10)*60) + // hours (converted to minutes)
					parseInt(tzString.substr(3,2),10))); // minutes
	};

	/**
	 * No way to set timezone in js Date, so we must adjust the minutes to compensate. (think setDate, getDate)
	 * @param  date
	 * @param  string formated like "+0500", "-1245"
	 * @return date
	 */
	$.timepicker.timezoneAdjust = function(date, toTimezone) {
		var toTz = $.timepicker.timezoneOffsetNumber(toTimezone);
		if(!isNaN(toTz)){
			var currTz = date.getTimezoneOffset()*-1,
				diff = currTz - toTz; // difference in minutes

			date.setMinutes(date.getMinutes()+diff);
		}
		return date;
	};

	/**
	 * Calls `timepicker()` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * n.b. The input value must be correctly formatted (reformatting is not supported)
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the timepicker() call
	 * @return jQuery
	 */
	$.timepicker.timeRange = function(startTime, endTime, options) {
		return $.timepicker.handleRange('timepicker', startTime, endTime, options);
	};

	/**
	 * Calls `datetimepicker` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @return jQuery
	 */
	$.timepicker.datetimeRange = function(startTime, endTime, options) {
		$.timepicker.handleRange('datetimepicker', startTime, endTime, options);
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @return jQuery
	 */
	$.timepicker.dateRange = function(startTime, endTime, options) {
		$.timepicker.handleRange('datepicker', startTime, endTime, options);
	};

	/**
	 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
	 * enforce date range limits.
	 * @param  string method Can be used to specify the type of picker to be added
	 * @param  Element startTime
	 * @param  Element endTime
	 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
	 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
	 * @return jQuery
	 */
	$.timepicker.handleRange = function(method, startTime, endTime, options) {
		options = $.extend({}, {
			minInterval: 0, // min allowed interval in milliseconds
			maxInterval: 0, // max allowed interval in milliseconds
			start: {},      // options for start picker
			end: {}         // options for end picker
		}, options);

		$.fn[method].call(startTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates($(this), endTime);
			},
			onSelect: function(selectedDateTime) {
				selected($(this), endTime, 'minDate');
			}
		}, options, options.start));
		$.fn[method].call(endTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates($(this), startTime);
			},
			onSelect: function(selectedDateTime) {
				selected($(this), startTime, 'maxDate');
			}
		}, options, options.end));

		checkDates(startTime, endTime);
		selected(startTime, endTime, 'minDate');
		selected(endTime, startTime, 'maxDate');

		function checkDates(changed, other) {
			var startdt = startTime[method]('getDate'),
				enddt = endTime[method]('getDate'),
				changeddt = changed[method]('getDate');

			if(startdt !== null){
				var minDate = new Date(startdt.getTime()),
					maxDate = new Date(startdt.getTime());

				minDate.setMilliseconds(minDate.getMilliseconds() + options.minInterval);
				maxDate.setMilliseconds(maxDate.getMilliseconds() + options.maxInterval);

				if(options.minInterval > 0 && minDate > enddt){ // minInterval check
					endTime[method]('setDate',minDate);
				}
				else if(options.maxInterval > 0 && maxDate < enddt){ // max interval check
					endTime[method]('setDate',maxDate);
				}
				else if (startdt > enddt) {
					other[method]('setDate',changeddt);
				}
			}
		}

		function selected(changed, other, option) {
			if (!changed.val()) {
				return;
			}
			var date = changed[method].call(changed, 'getDate');
			if(date !== null && options.minInterval > 0){
				if(option == 'minDate'){
					date.setMilliseconds(date.getMilliseconds() + options.minInterval); 
				}
				if(option == 'maxDate'){
					date.setMilliseconds(date.getMilliseconds() - options.minInterval);
				}
			}
			if (date.getTime) {
				other[method].call(other, 'option', option, date);
			}
		}
		return $([startTime.get(0), endTime.get(0)]);
	};

	/**
	 * Log error or data to the console during error or debugging
	 * @param  Object err pass any type object to log to the console during error or debugging
	 * @return void
	 */
	$.timepicker.log = function(err){
		if(window.console){
//			console.log(err);
		}
	};

	/*
	* Rough microsecond support
	*/
	if(!Date.prototype.getMicroseconds){
		Date.microseconds = 0;
		Date.prototype.getMicroseconds = function(){ return this.microseconds; };
		Date.prototype.setMicroseconds = function(m){ this.microseconds = m; return this; };
	}

	/*
	* Keep up with the version
	*/
	$.timepicker.version = "1.3";

})(jQuery);

/*! jQuery UI - v1.10.3 - 2013-06-12
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
jQuery(function(e) {
    e.datepicker.regional['zh-CN'] = {
        closeText: '确定',
		clearText: '清空',
        prevText: '&#x3C;上月',
        nextText: '下月&#x3E;',
        currentText: '今天',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        weekHeader: '周',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        showAnim: "show",
        showOtherMonths: true,
		selectOtherMonths: true,
        yearSuffix: '年'
    },
    e.datepicker.setDefaults(e.datepicker.regional['zh-CN']);
});
/*! jQuery UI - v1.10.3 - 2013-06-12
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
jQuery(function(e) {
	$.timepicker.regional['zh-CN'] = {
		currentText: '现在',
		closeText: '确定',
		clearText: '清空',
		controlType: 'slider',
		timeOnlyTitle: '请选择时间',
		timeText: '时间：',
		hourText: '小时',
		minuteText: '分钟',
		secondText: '秒',
		millisecText: '666',
		timezoneText: '777',
		timeFormat: 'HH:mm',
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		isRTL: false
	};
    $.timepicker.setDefaults($.timepicker.regional['zh-CN']);
});
//__inline('library/md.js')
//__inline('library/template/handlebars/handlebars-v3.0.3.js')
/**
 * tomasky.core.ui.js
 * Created by hai on 2015/12/11.
 */
/**
 * tomasky.core.ui.widgets.js
 * Created by hai on 2015/12/11.
 */
(function (window, tmsky, undefined) {
    var SHOW_ERROR_INTERVAL_TIME = 5000, perrorInterval;
    var TPAGE_SKIN = {
        RED : "red",
        GREEN : "green",
        GRAY : "gray",
        __COLORS__ : {
            RED : "#cf2d01",// _color = "#A9221C,#70A847,gray";
            GREEN : "#70A847",
            GRAY : "gray"
        }
    };
    var TPAGE_ALIGN = {
        LEFT : "left",
        RIGHT : "right",
        CENTER : "center"
    };
    var PAGE_ID_FLAG = {
        FIRST : "first",
        LAST : "last",
        PREV : "prev",
        NEXT : "next",
        ELLIPSIS : "ellipsis"
    };
    var _click = {
        url : "",
        stype : "rest",// rest/key-value
        method : "get",// get/post,当为rest风格且get方式时其参数传输格式固定为url + "/" + pageNo[ + "/" + pageSize]
        tPageSize : false,
        pageNoName : "pageNo",
        pageSizeName : "pageSize",
        params : undefined
    };
    var _options = {
        id : "",
        pageNo : 0,
        pages : 0,
        callback : null,
        callbackParams : undefined,
        click : undefined,
        returnParams : true,
        pageSize : undefined,
        totalCount : undefined,
        cpageNo : true,
        maxPages : 10,
        minPageSize : 10,
        maxPageSize : 100,
        align : TPAGE_ALIGN.RIGHT,
        disCount : 4,
        disStat : true,
        skin : TPAGE_SKIN.GREEN,
        color : undefined,
        cssUrl : undefined,
        statFontColor : undefined,
        errorMsgColor : undefined,
        // bizn field
        prePageSize : undefined,
        currPageSize : false
    };

    function hasExistJQObj(s) {
        return $(s).length > 0;
    }

    var isEmpty = function (o) {
        return undefined === o || null === o || "" === o;
    };

    function tPage(opts) {
        this._P_HTMLS = "";
        this.reset();
        this.setOptions(opts, false, true);
    }

    tPage.newInstance = function (opts) {
        return new tPage(opts);
    };

    tPage.prototype.getPIDSelector = function () {
        return "#" + this.id;
    };

    tPage.prototype.getBGColor = function () {
        if (this.color) {
            return this.color;
        }
        var _color;
        if (!this.skin)
            this.skin = TPAGE_SKIN.RED;
        return TPAGE_SKIN.__COLORS__[this.skin.toUpperCase()];
    };

    tPage.prototype.getMostOffset = function () {
        var $page = $(this.getPIDSelector()),
            $obj = $page.find('#gotoPageNo'),
            $last = $page.find('li#last'),
            lastMarginRight = $last.css('marginRight'),
            lastMarginRight = (lastMarginRight && Number(lastMarginRight.substr(0, lastMarginRight.length - 2)) ) || 0
        byLast = false

        if ($obj.length == 0) {
            $obj = $last
            byLast = true
        }
        var os = $obj.offset(),
            pos = $page.offset()
        return {
            byLast : byLast,
            top : os.top,
            left : os.left,
            ptop : pos.top,
            pleft : pos.left,
            owidth : $obj.outerWidth(),
            oheight : $obj.outerHeight(),
            lastMarginRight : lastMarginRight
        };
    };

    tPage.prototype.showPageErrors = function (msg, time) {
        var adjustPosition = function (_this, $perror) {
            var os = _this.getMostOffset();
            $perror.offset({
                top : os.top + os.oheight,
                left : os.left + os.owidth - $perror.innerWidth()
            });
        };
        var t = time ? time : SHOW_ERROR_INTERVAL_TIME, $perror;
        $perror = $(this.getPIDSelector() + " #pageErrors");
        $perror.text(msg);
        if ($perror.css("display") === "none") {
            $perror.slideDown();
            adjustPosition(this, $perror);
        } else {
            adjustPosition(this, $perror);
            if (perrorInterval) {
                clearTimeout(perrorInterval);
            }
        }

        perrorInterval = setTimeout(function () {
            if ($perror.css("display") != "none") {
                $perror.slideUp();
                if (perrorInterval) {
                    clearTimeout(perrorInterval);
                }
                $perror.text("");
            }
        }, t);
    };

    tPage.prototype.reset = function () {
        for (var name in _options) {
            if (_options.hasOwnProperty(name)) {
                this[name] = _options[name];
            }
        }
        return this;
    };

    var validateOptions = function (p) {
        if (p.minPageSize < _options.minPageSize) {
            p.minPageSize = _options.minPageSize;
        }
        if (p.maxPageSize > _options.maxPageSize) {
            p.maxPageSize = _options.maxPageSize;
        }
        if (p.minPageSize >= p.maxPageSize) {
            p.minPageSize = _options.minPageSize;
        }
        if (p.maxPageSize <= p.minPageSize) {
            p.maxPageSize = _options.maxPageSize;
        }
        if (p.pageSize < p.minPageSize) {
            p.pageSize = p.minPageSize;
        } else if (p.pageSize > p.maxPageSize) {
            p.pageSize = p.maxPageSize;
        }
    };

    tPage.prototype.setOptions = function (opts, toRender, toInit) {
        if (opts) {
            for (var name in opts) {
                if (opts.hasOwnProperty(name) && this.hasOwnProperty(name)) {
                    this[name] = opts[name];
                }
            }
            if (this.click) {
                var custClick = this.click;
                this.click = _click;
                if (typeof custClick === "string") {
                    this.click.url = url;
                } else {
                    for (var name in custClick) {
                        this.click[name] = custClick[name];
                    }
                }
            }
            validateOptions(this);
            if (toInit) {
                this.init();
            }
            if (toRender) {
                this.render();
            }
        }
    };

    var cacheBusinessProperties = function (p) {
        if (p.prePageSize) {
            p.cache("p-prePageSize", p.prePageSize);
        }
        if (p.currPageSize) {
            p.cache("p-currPageSize", p.currPageSize);
        }
    };

    tPage.prototype.init = function () {
        this.prePageSize = this.get("p-prePageSize", true);
        this.currPageSize = this.get("p-currPageSize", true);
        if (!this.pageNo) {
            this.pageNo = hasExistJQObj("#pageNo") ? parseInt($("#pageNo").val()) : 1;
        }
        if (!this.pages) {
            this.pages = hasExistJQObj("#pages") ? parseInt($("#pages").val()) : 1;
        }
        if (hasExistJQObj(this.getPIDSelector() + " #p-pageSize")) {
            this.pageSize = this.get("p-pageSize", true);
        }
        if (!this.pageSize) {
            this.pageSize = this.currPageSize;
        }
        if (!this.totalCount) {
            this.totalCount = hasExistJQObj("#totalCount") ? parseInt($("#totalCount").val()) : undefined;
        }
        if (this.cssUrl) {
            $("#t-page-css").remove();
            $("body").append('<link id="t-page-css" rel="stylesheet" href="' + this.cssUrl + '" />');
        }
        cacheBusinessProperties(this);
    };

    tPage.prototype.remove = function () {
        $(this.getPIDSelector() + " #t-page").remove();
    };

    tPage.prototype.cache = function (id, val) {
        var $tpage = $(this.getPIDSelector() + " #t-page");
        var $target = $tpage.find("#" + id);
        if ($target.length) {
            $target.val(val);
        } else {
            $tpage.prepend("<input type='hidden' id='" + id + "' value='" + val + "'/>");
        }
    };

    tPage.prototype.get = function (id, toParseInt) {
        var val = $(this.getPIDSelector() + " #" + id).val();
        return toParseInt ? parseInt(val) : val;
    };

    tPage.prototype.handlePageInfo = function (hpno, hpsize, hps) {
        var r = {},
            pid = this.getPIDSelector() + " #t-page";
        if (hpno) {
            var $thisPageNo = $(pid + " #p-pageNo");
            if (hpno.val) {
                $thisPageNo.val(hpno.val);
            } else {
                r.pageNo = parseInt($thisPageNo.val());
            }
        }
        if (hpsize) {
            var $iPageSize = $(pid + " #p-pageSize");
            if (hpsize.val) {
                $iPageSize.val(hpsize.val);
            } else {
                r.pageSize = parseInt($iPageSize.val());
            }
        }
        if (hps) {
            var $thisPages = $(pid + " #p-pages");
            if (hps.val) {
                $thisPages.val(hps.val);
            } else {
                r.pages = parseInt($thisPages.val());
            }
        }
        return r;
    };

    tPage.prototype.getCallbackParams = function () {
        var r = this.handlePageInfo(true, true, true),
            arr = this.callbackParams || [];
        if (this.returnParams) {
            arr.push(r);
        }
        return arr;
    };

    var toSubmitClickForm = function (p, pageNo, pageSize) {
        var formId = p.id + "-tpageForm",
            tpFormHtmls = "";
        tpFormHtmls += "<form id='" + formId + "' action='" + p.click.url + "' method='" + p.click.method + "'>";
        tpFormHtmls += "<input type='hidden' name='" + p.click.pageNoName + "' value='" + pageNo + "'/>";
        if (p.click.tPageSize) {
            tpFormHtmls += "<input type='hidden' name='" + p.click.pageSizeName + "' value='" + pageSize + "'/>";
        }
        if (p.click.params) {
            var _params = p.click.params;
            for (var name in _params) {
                if (_params.hasOwnProperty(name)) {
                    tpFormHtmls += "<input type='hidden' name='" + name + "' value='" + _params[name] + "'/>";
                }
            }
        }
        tpFormHtmls += "</form>";
        $("#" + formId).remove();
        $("body").append(tpFormHtmls);
        $("#" + formId).submit();
    };

    tPage.prototype.toCallback = function (pageNo, pageSize) {
        if (this.click) {
            if (this.click.stype === "rest") {
                if (this.click.method === "get") {
                    location.href = this.click.url + "/" + pageNo + (this.click.tPageSize ? "/" + pageSize : "");
                } else {
                    toSubmitClickForm(this, pageNo, pageSize);
                }
            } else {
                toSubmitClickForm(this, pageNo, pageSize);
            }
        } else {
            this.callback.apply(null, this.getCallbackParams());
            syncPageInfo(this);
        }
    };

    function syncPageInfo(p) {
        var $tpage = $(p.getPIDSelector() + " #t-page");
        var pageNo = parseInt($tpage.find("#p-pageNo").val());
        var preActiveItem = $tpage.find("li.active");
        if (pageNo + "" != preActiveItem.attr("id")) {
            preActiveItem.removeClass("active");
            $tpage.find("li[id='" + pageNo + "']").addClass("active");
            p.pageNo = pageNo;
        }
        if (p.pageSize && $tpage.find("#ipageSize").length) {
            var pageSize = parseInt($tpage.find("#p-pageSize").val());
            if (pageSize != p.pageSize) {
                p.pageSize = pageSize;
            }
            var pages = parseInt($tpage.find("#p-pages").val());
            if (pages != p.pages) {
                p.pages = pages;
            }
            if (p.totalCount) {
                var totalCount = parseInt($tpage.find("#p-totalCount").val());
                if (totalCount != p.totalCount) {
                    p.totalCount = totalCount;
                }
            }
        }
    }

    function bindItemsEvent(p) {
        if (p.pages == 1) {
            var dftcursor = function () {
                this.style.cursor = "default";
                this.style.color = "black";
            };
            $(p.getPIDSelector() + " #t-page").find("li.item").off().mouseover(dftcursor).mouseenter(dftcursor);
            return;
        }
        $(p.getPIDSelector() + " #t-page").find("li.item").off().click(function () {
            var prePageNo = p.pageNo, pageNo;
            switch (this.id) {
                case PAGE_ID_FLAG.FIRST:
                    pageNo = 1;
                    break;
                case PAGE_ID_FLAG.LAST:
                    pageNo = p.pages;
                    break;
                case PAGE_ID_FLAG.PREV:
                    pageNo = prePageNo - 1;
                    break;
                case PAGE_ID_FLAG.NEXT:
                    pageNo = prePageNo + 1;
                    break;
                case PAGE_ID_FLAG.ELLIPSIS:
                    pageNo = PAGE_ID_FLAG.ELLIPSIS;
                    break;
                default:
                    pageNo = parseInt(this.id);
                    break;
            }
            if (pageNo === PAGE_ID_FLAG.ELLIPSIS) {
                return;
            }
            pageNo = pageNo ? (pageNo <= 0 ? 1 : (pageNo > p.pages ? p.pages : pageNo)) : 1;
            if (pageNo === p.pageNo) {
                return;
            }
            p.handlePageInfo({
                val : pageNo
            });

            // execute callback method
            p.toCallback(pageNo, p.pageSize);
        });
    }

    function bindPageNoEvent(p) {
        $(p.getPIDSelector() + " #pageNum").off().keyup(function (e) {
            var _e = e || window.event;
            if (_e.keyCode == 13) {
                $("#gotoPageNo").click();
            }
        });

        $(p.getPIDSelector() + " #gotoPageNo").off().click(function () {
            var $pageNum = $(p.getPIDSelector() + " #pageNum"),
                pnum = $pageNum.val();
            if (!pnum) {
                return;
            }
            if (isNaN(pnum)) {
                p.showPageErrors("请输入数值");
                return;
            }
            pnum = parseInt(pnum);
            if (pnum <= 0) {
                p.showPageErrors("跳转页必须大于 0");
                return;
            }
            if (pnum > p.pages) {
                p.showPageErrors("跳转页不能大于最大页数 " + p.pages);
                return;
            }
            if (pnum === p.pageNo) {
                return;
            }
            p.handlePageInfo({
                val : pnum
            });

            // execute callback method
            p.toCallback(pnum, p.pageSize);
        });
    }

    function bindPageSizeEvent(p) {
        $(p.getPIDSelector() + " #ipageSize").off().keyup(function (e) {
            var _e = e || window.event;
            if (_e.keyCode == 13) {
                $(p.getPIDSelector() + " #pageSizeBtn").click();
            }
        });

        $(p.getPIDSelector() + " #pageSizeBtn").off().click(function () {
            var $iPageSize = $(p.getPIDSelector() + " #ipageSize"),
                ips = $iPageSize.val(), emsg;
            if (!ips) {
                return;
            }
            if (isNaN(ips)) {
                p.showPageErrors("请输入数值");
                return;
            }
            var nips = parseInt(ips);
            if (nips < p.minPageSize) {
                p.showPageErrors("每页最少显示 " + p.minPageSize + " 条数据");
                return;
            }
            if (nips > p.maxPageSize) {
                p.showPageErrors("每页最多显示 " + p.maxPageSize + " 条数据");
                return;
            }
            if (nips === p.pageSize) {
                return;
            }

            var tc, _cmaxPageNo,
                isToCallback = true;
            if (p.totalCount) {
                tc = p.totalCount;
            } else {
                tc = p.pageSize * p.pages;
            }

            if (p.pages == 1 && nips > tc) {
                isToCallback = false;
            }

            _cmaxPageNo = Math.ceil(tc / nips);
            if (p.pageNo > _cmaxPageNo) {
                p.pageNo = _cmaxPageNo;
                p.handlePageInfo({
                    val : p.pageNo
                });
            }
            p.cache("p-prePageSize", p.pageSize);
            p.cache("p-currPageSize", nips);
            p.handlePageInfo(undefined, {
                val : nips
            });

            if (isToCallback) {
                // execute callback method
                p.toCallback(p.pageNo, nips);
            } else {
                p.pageSize = nips;
            }
        });
    }

    function cachePageInfo(p) {
        $(p.getPIDSelector()).html(p._P_HTMLS);
        p._P_HTMLS = "";
    }

    function appendPageInfoHtmls(p) {
        p._P_HTMLS += "<input type='hidden' id='p-pageNo' value='" + p.pageNo + "'/>";
        p._P_HTMLS += "<input type='hidden' id='p-pages' value='" + p.pages + "'/>";
        if (p.pageSize) {
            p._P_HTMLS += "<input type='hidden' id='p-pageSize' value='" + p.pageSize + "'/>";
        }
        if (p.totalCount) {
            p._P_HTMLS += "<input type='hidden' id='p-totalCount' value='" + p.totalCount + "'/>";
        }
        return p._P_HTMLS;
    }

    function appendPageSizeHtmls(p) {
        p._P_HTMLS += "<li>每页 <input id='ipageSize' class='ipagesize' value='" + p.pageSize + "' pre-val='" + p.pageSize + "'/> 条 <button id='pageSizeBtn' class='pgesize-btn'>确定</button></li>";
    }

    function appendPageItemsHtmls(p) {
        if (p.pages >= p.maxPages) {
            var maxPages = p.maxPages % 2 == 0 ? p.maxPages : p.maxPages + 1,
                disCount = p.maxPages / 2 - 1;
            p.disCount = p.disCount > disCount ? disCount : p.disCount;
            var index = 1;
            var ellipsis = "<li id='" + PAGE_ID_FLAG.ELLIPSIS + "' class='" + PAGE_ID_FLAG.ELLIPSIS + "'>...</li>";
            var pnoGTDiscount = p.pageNo >= p.disCount,
                disFirstDisCount = p.pageNo >= p.disCount + 1;
            index = pnoGTDiscount ? p.pageNo : index;
            index = index == p.disCount ? --index : index;
            var _disCount = p.disCount,
                indexGTDisCount = index > p.disCount;
            _disCount = indexGTDisCount ? --_disCount : _disCount;
            var itemsCount = 0;

            var adjustDisCount = function (index, itemsCount, reverse) {
                var allDisCount = p.disCount * 2,
                    diffDisCount = allDisCount - itemsCount,
                    _htmls = "";
                if (diffDisCount > 0) {
                    if (reverse) {
                        for (var i = diffDisCount; i > 0; i--) {
                            var _i = index - i;
                            _htmls += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                        }
                    } else {
                        for (var i = 0; i < diffDisCount; i++) {
                            var _i = index + i;
                            _htmls += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                        }
                    }
                }
                return _htmls;
            };

            if (disFirstDisCount) {
                for (var i = 1; i <= _disCount; i++) {
                    p._P_HTMLS += "<li id='" + i + "' class='item'>" + i + "</li>";
                    itemsCount++;
                }
                p._P_HTMLS += ellipsis;
            }

            var currMaxCount = index + _disCount - 1,
                floorMaxMinPageNo = p.pages - _disCount + 1;
            if (p.pageNo >= floorMaxMinPageNo) {
                var _i = floorMaxMinPageNo - _disCount * 2 - 1;
                var adjustI = function (_ci) {
                    _ci = disFirstDisCount ? _ci <= _disCount ? _disCount + 2 : _ci : _ci;
                    _ci = _ci + _disCount >= floorMaxMinPageNo ? 0 : _ci;
                    return _ci;
                }
                _i = adjustI(_i);
                if (_i == 0) {
                    _i = adjustI(floorMaxMinPageNo - _disCount - 1);
                }
                var toAppend = disFirstDisCount ? _i > _disCount + 1 : _i > 0;
                if (toAppend) {
                    for (var i = 0; i < _disCount; i++) {
                        var ci = _i + i;
                        p._P_HTMLS += "<li id='" + ci + "' class='item'>" + ci + "</li>";
                        itemsCount++;
                    }
                    p._P_HTMLS += ellipsis;
                }
            }

            if (currMaxCount >= floorMaxMinPageNo) {
                index = currMaxCount >= p.pages ? floorMaxMinPageNo : index;
                var _htmls = "";
                for (var i = 0; i < _disCount; i++) {
                    var _i = index + i;
                    _htmls += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                    itemsCount++;
                }
                var surplusPages = p.pages - index - _disCount + 1;

                if (surplusPages > 0 && surplusPages <= _disCount) {
                    var _i = index + _disCount,
                        _chtmls = "";
                    for (var i = 0; i < surplusPages; i++) {
                        _i += i;
                        _chtmls += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                        itemsCount++;
                    }
                    p._P_HTMLS += adjustDisCount(index, itemsCount, true);
                    p._P_HTMLS += _htmls;
                    p._P_HTMLS += _chtmls;
                } else {
                    p._P_HTMLS += adjustDisCount(index, itemsCount, true);
                    p._P_HTMLS += _htmls;
                }
            } else {
                for (var i = 0; i < _disCount; i++) {
                    var _i = index + i;
                    p._P_HTMLS += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                    itemsCount++;
                }
                currMaxCount = index + _disCount;
                if (currMaxCount >= floorMaxMinPageNo) {
                    p._P_HTMLS += adjustDisCount(currMaxCount, itemsCount);
                } else {
                    p._P_HTMLS += ellipsis;
                    for (var i = _disCount; i > 0; i--) {
                        var _i = p.pages - i + 1;
                        p._P_HTMLS += "<li id='" + _i + "' class='item'>" + _i + "</li>";
                        itemsCount++;
                    }
                }
            }
        } else {
            for (var i = 1; i <= p.pages; i++) {
                p._P_HTMLS += "<li id='" + i + "' class='item'>" + i + "</li>";
                itemsCount++;
            }
        }
    }

    function appendPageContentHtmls(p) {
        p._P_HTMLS += "<li id='first' class='first item'>首页</li>";
        p._P_HTMLS += "<li id='prev' class='prev item' title=' 上一页 '><<</li>";
        appendPageItemsHtmls(p);
        p._P_HTMLS += "<li id='next' class='next item' title=' 下一页 '>>></li>";
        p._P_HTMLS += "<li id='last' class='last item'>尾页</li>";
    }

    function appendGotoPagetNoHtmls(p) {
        if (p.cpageNo && p.pages > p.maxPages) {
            p._P_HTMLS += "<li>跳转至 <input id='pageNum' class='page-num' value='" + p.pageNo + "'/> 页<button id='gotoPageNo' class='gotopageno-btn'>确定</button></li>";
        }
    }

    function appendStatInfoHtmls(p) {
        if (p.disStat && p.pages >= p.maxPages) {
            p._P_HTMLS += "<li class='stat-info' id='stat-info'>当前第<label class='page'>" + p.pageNo + "</label>页/共<label class='page'>" + p.pages + "</label>页</li>";
        }
    }

    function markSpecialAttrs(p) {
        $(p.getPIDSelector() + " #t-page li[id='" + p.pageNo + "']").addClass("active");
        if (p.pages == 1) {
            $(p.getPIDSelector()).find("#first,#last,#prev,#next").addClass("disabled");
        } else {
            if (p.pageNo === 1) {
                $(p.getPIDSelector()).find("#first,#prev").addClass("disabled");
            } else if (p.pageNo === p.pages) {
                $(p.getPIDSelector()).find("#last,#next").addClass("disabled");
            }
        }
    }

    function adustCSSClass(p) {
        var $continar = $(p.getPIDSelector()),
            $tPage = $continar.find("#t-page");
        $continar.css({
            clear : "both",
            padding : "20px 0"
        });
        $tPage.addClass("t-palign-" + p.align.toLowerCase());
        if (p.align === TPAGE_ALIGN.CENTER) {
            var os = p.getMostOffset(),
                _wid = os.left + os.owidth,
                _pwid = _wid + os.lastMarginRight,
                _hei = os.top;
            var wid = Math.floor((document.documentElement.clientWidth - _wid) / 2);
            $tPage.width(Math.ceil(_pwid)).offset({
                top : _hei,
                left : wid
            });
        }
        var ua = navigator.userAgent.toLowerCase();
        // 兼容IE内核浏览器
        if (ua.indexOf("qqbrowser") != -1 || !!window.ActiveXObject || ("ActiveXObject" in window)) {
            $tPage.find("input").css("padding", "2px 0 14px 3px");
        }
        if (p.statFontColor) {
            $tPage.find("#stat-info label").css("color", p.statFontColor);
        }
        if (p.errorMsgColor) {
            $tPage.find("#pageErrors").css("color", p.errorMsgColor);
        }

        var _color = p.getBGColor();
        var _hoverCss = {
            'background-color' : _color,
            color : 'white',
            'border-color' : _color
        }

        $("#t-page li.disabled").mouseover(function () {
            $(this).css({
                "background-color" : "white",
                cursor : "not-allowed",
                color : "black",
                "padding-bottom" : 0
            });
        }).mouseout(function () {
            $(this).removeAttr("style");
        });

        $("#t-page li.first,li.last").mouseover(function () {
            $(this).css({
                padding : "0 5px"
            });
        }).mouseout(function () {
            $(this).removeAttr("style");
        });

        $("#t-page li.ellipsis").mouseover(function () {
            $(this).css({
                cursor : "default",
                color : "black"
            });
        }).mouseout(function () {
            $(this).removeAttr("style");
        });

        $("#t-page li.item").mouseover(function () {
            var $this = $(this);
            if ($this.hasClass("disabled") || $this.hasClass("active")) {
                return;
            }
            var hasFLItem = $this.hasClass("first") || $this.hasClass("last");
            if (hasFLItem) {
                $this.css("color", "white");
                if (hasFLItem) {
                    $this.css({
                        'background-color' : _color,
                        'border-color' : _color
                    });
                }
            } else {
                $this.css(_hoverCss);
            }
        }).mouseout(function () {
            var $this = $(this);
            if ($this.hasClass("active")) {
                return;
            }
            $this.removeAttr("style");
        });

        $("#t-page li.active").css(_hoverCss);

        $("#t-page li.stat-info>.page").css({
            color : _color,
            "font-weight" : "bold"
        });

        $("#t-page button").mouseover(function () {
            $(this).css(_hoverCss);
        }).mouseout(function () {
            $(this).removeAttr("style");
        });
    }

    var unbindPageEvents = function (p) {
        $(p.getPIDSelector()).find("li.disabled,#first.disabled,#last.disabled").unbind().attr("title", "");
    };

    var checkNeedToRender = function (p) {
        var toGenera = true;
        if (p.pages <= 1) {
            if (!p.pageSize) {
                toGenera = false;
            } else {
                if (p.pages <= 0 || (p.totalCount && p.totalCount > p.minPageSize)) {
                    toGenera = false;
                }
            }
        }
        return toGenera;
    };

    tPage.prototype.render = function () {
        this.remove();
        var pageInfoHtmls = appendPageInfoHtmls(this);
        if (!checkNeedToRender(this)) {
            cachePageInfo(this);
            return;
        }

        // this._P_HTMLS = "<ul id='t-page' class='t-page-" + this.skin.toLowerCase() + "'>";
        this._P_HTMLS = "<ul id='t-page'>";
        this._P_HTMLS += pageInfoHtmls;
        if (this.pageSize) {
            appendPageSizeHtmls(this);
        }
        appendPageContentHtmls(this);
        appendStatInfoHtmls(this);
        appendGotoPagetNoHtmls(this);
        this._P_HTMLS += "<li id='pageErrors' class='page-errors'></li>";
        this._P_HTMLS += "</ul>";
        $(this.getPIDSelector()).html(this._P_HTMLS).show();

        markSpecialAttrs(this);
        // bind events
        bindItemsEvent(this);
        bindPageNoEvent(this);
        bindPageSizeEvent(this);
        unbindPageEvents(this);
        adustCSSClass(this);
        this._P_HTMLS = "";
    };

    function Page() {
    }

    Page.render = function (opts) {
        tPage.newInstance(opts).render();
    };

    Page.getParams = function (id) {
        var selector = "#" + id,
            $tp = $(selector), params;
        params = {
            pageNo : $tp.find("#p-pageNo").val(),
            pages : $tp.find("#p-pages").val(),
            pageSize : $tp.find("#p-pageSize").val(),
            totalCount : $tp.find("#p-totalCount").val()
        };
        if (!params.pageNo || params.pageNo === "0") {
            params.pageNo = "1";
        }
        return params;
    };

    Page.setParams = function (id, params) {
        var selector = "#" + id,
            $tp = $(selector);
        for (var name in params) {
            var slt = "#p-" + name;
            $tp.find(slt).val(params[name]);
        }
    };

    //window.Page = Page;
    tmsky.extendUI({page : Page})
})(window, tmsky);
/**
 * tmsky.ui.table
 * Created by hai on 2015/12/11.
 */
(function (window, tmsky, undefined) {

    function Table(id) { // 创建table
        this.table = document.getElementById(id);
        this.switch_btns = $('.nav-tabs .nav', this.table);
        this.switch_tables = $('.tomasky-table-box', this.table);
        this.len = this.switch_btns.length;
        this.settings = { // table默认参数
            'tableTitle' : [],
            'showTable' : 0,
            'insert_into' : document,
            'tableUrls' : {},
            'types' : [],
            'arguments' : [],
            'originPage' : [0, 0],
            'tableNum' : 2,
            'tablesColsRows' : [],
            'getPage' : function () {
            }
        };
    }

    Table.newInstance = function (id) {
        return new Table(id)
    }

    Table.prototype = {
        constructor : Table,
        config : function (options) {
            extend(this.settings, options); // 配置table参数
            this.init(); // table的初使化
        },
        /**
         * table的初使化设置，若id存在，则将其里面的所有组件事件绑定 若id不存在，则创建一个table,并以此id为id
         */
        init : function () {
            if (this.table) {
                this.createTableBox(); // 创建新tableBox
            }
            this.createTable();
            this.showTable(this.settings.showTable); // 显示table页
            // this.getPageInfo(0,this.settings.arguments[0]); //显示第0页
            this.switch_btns[0].hasShow = 1;
            this.bindDOMEvent(); // 为table中的元素绑定事件
            this.setTitle(this.settings.tableTitle)
        },
        /**
         * 显示第n页时发生的变化
         */
        showTable : function (n) {
            // 切换按钮切换
            this.switch_btns.eq(n).addClass('active').siblings().removeClass('active');
            // 表格切换
            this.switch_tables.eq(n).show().siblings('.tomasky-table-box').hide();
        },
        /**
         * 为table内元素绑定事件
         */
        bindDOMEvent : function () {
            var This = this;
            // 点击下拉框，使其出现或消失
            $('.filter_box', this.table).on('click.tc.filterbox', function () {
                $(this).find('.filter').slideToggle();
            });
            // 点击下拉框里的内容，选中文字，下拉框消失
            $('.filter li', this.table).on('click.tc.filter.li', function () {
                $(this).parent().prev().html($(this).html());
            });
            // 点击切换按钮，切换页面
            this.switch_btns.each(function (i) {
                $(this).on('click.tc.switch', function () {
                    if (!this.hasShow) {
                        This.getPageInfo(i, This.settings.arguments[i]); // 显示第i页
                        this.hasShow = 1;
                    }
                    This.showTable(i);
                })
            });

            $(document).on('keydown.tc.switch', function (ev) {
                var ev = ev || window.event;
                if (ev.keyCode == 9) {
                    This.settings.showTable++;
                    This.settings.showTable = This.settings.showTable >= This.len ? 0 : This.settings.showTable;
                    This.showTable(This.settings.showTable);
                    return false;
                }
            });

        },
        createTableBox : function () {
            var html = '';
            for (var i = 0; i < this.settings.table_num; i++) {
            }
        },
        createTable : function () {
            // 判定有多少个table，为每个table创建thead和tbody
            for (var i = 0; i < this.settings.tablesColsRows.length; i++) {
                // 创建列
                var thead = '<thead><tr>';
                var tbody = '<tbody>';
                var row = '';
                for (var j = 0; j < this.settings.tablesColsRows[i][0]; j++) {
                    thead += '<th></th>';
                    row += '<td></td>';
                }
                for (var j = 0; j < this.settings.tablesColsRows[i][1]; j++) {
                    tbody += '<tr>' + row + '</tr>';
                }
                thead += '</tr></thead>';
                tbody += '</tbody>';
                $('table', this.switch_tables.eq(i)).html(thead + tbody);
            }
        },
        setTitle : function (array) {
            for (var i = 0; i < array.length; i++) {
                var aThs = $('thead th', this.switch_tables.eq(i));
                for (var j = 0; j < array[i].length; j++) {
                    aThs.eq(j).html(array[i][j]);
                }
            }
        },
        getPageInfo : function (i, data) {
            $.ajax({
                data : data,
                url : this.settings.tableUrls[i],
                type : this.settings.types[i],
                success : this.settings.getPage[i]
            })
        }
    };

    function extend(a, b) {
        for (var attr in b) {
            a[attr] = b[attr];
        }
    }

    //window.Table = Table;
    tmsky.extendUI({table : Table})

})(window, tmsky);

//$(function() {
//	var table_container = $('.tomasky-table-container');
//	for (var i = 0; i < table_container.length; i++) {
//		new tmsky.ui.table($(table_container.attr('id')));
//	}
//});
/**
 * tomasky.core.ui.plugins.js
 * Created by hai on 2015/12/11.
 */
;
!function ($) {
    'use strict';
    var flag = '[data-ui="dropdown"]',
        select = '[data-ui="dropdown"] [data-role="item"]',
        eTarget = null,
        openClass = 'tomasky-ui-dropdown-open'

    var Dropdown = function (element) {
        $(element).attr('data-ui', 'dropdown');
    }

    Dropdown.version = '0.1.0'

    var utils = {
        isRoleSearch : function (e) {
            return e && $(e.target).attr('data-role') == 'search'
        },
        showAllItems : function ($parent, value) {
            $parent.find('.dropdown-item').each(function () {
                this.style.display = 'block'
            })
        },
        filterInnerItems : function ($parent, value) {
            var count = 0;
            $parent.find('.dropdown-item').each(function () {
                $parent.find('.dropdown-item').each(function () {
                    var $this = $(this), val = $this.text(), isExist = val.toUpperCase().indexOf(value.toUpperCase()) != -1
                    this.style.display = isExist ? 'block' : 'none'
                    if (isExist) {
                        count++
                    }
                })
            })
            if (count == 0) {
                $parent.find('.ui-dropdown-list .tomasky-ui-dropdown-search-notexist').show()
            }
        }
    }

    /**
     * 展开或者收起
     */
    Dropdown.prototype.toggle = function (e) {

        var $this = $(this);
        if ($this.is('.disabled')) return;

        var isActive = $this.hasClass(openClass);

        clearList();

        if (!isActive) {
            var relatedTarget = {relatedTarget : this}
            $this.trigger(e = $.Event('show.tc.dropdown', relatedTarget));
            $this.find('[data-role="search"]').show()
            $this.find('.tomasky-ui-dropdown-search-input').val('')
            if (e.isDefaultPrevented()) return;

            $this
                .addClass(openClass)
                .trigger($.Event('shown.tc.dropdown', relatedTarget));

            eTarget = e.target
        }
    }

    Dropdown.prototype.searchClick = function (e) {
        e.preventDefault()
        e.stopPropagation()
        $(e.target).select()
    }

    Dropdown.prototype.search = function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (e.type == 'keyup' && e.keyCode != 13) {
            return
        }
        var $this = $(e.target), $parent = $this.parent(), $search = $parent.find('[data-role="search"]'),
            value = $search.val(),
            old = $search.data('old-value')
        value = value ? tmsky.string.trim(value) : ''
        old = old ? tmsky.string.trim(old) : ''
        if (value != old) {
            var _parent = $parent.parent()
            _parent.find('.ui-dropdown-list .tomasky-ui-dropdown-search-notexist').hide()
            utils[value ? 'filterInnerItems' : 'showAllItems'](_parent, value)
            $search.data('old-value', value)
        }
    }

    /**
     * 更新数据源  [{value:'value1', text: 'text1', selected: true, disabled: true}]
     */
    Dropdown.prototype.syncModel = function (model) {
        if (model && model.length) {
            var $this = $(this);
            var $list = $this.children('.ui-dropdown-list');
            var selected, items = [];

            model.forEach(function (el) {
                var $a = $('<a href="#" data-role="item"></a>');
                $a
                    .data('value', el.value)
                    .data('selected', el.selected)
                    .data('disabled', el.disabled)
                    .html(el.text)
                items.push($a);
                if (el.selected) selected = el;
                if (el.disabled) $a.addClass('disabled');
            });
            selected = selected || model[0];
            getRoleValue($this)
                .html(selected.text)
                .data('value', selected.value)
            $list.empty().append(items);
        }
    };

    /**
     * 禁用选择器
     */
    Dropdown.prototype.disabled = function () {
        var $this = $(this);
        if ($this.hasClass('.disabled')) return;
        $this.addClass('disabled').data('disabled', true);
    };

    /**
     * 选择某项目
     *
     * index(number) / value (string)
     */
    Dropdown.prototype.selected = function (index) {
        var $this = $(this),
            $list = $this.children('.ui-dropdown-list'),
            $item

        index = index === void 0 ? 0 : index
        if (typeof index === 'number') {
            // index
            $item = $list.children('[data-role="item"]').eq(index)
            _selectedItem($item)
        }
        else {
            index = index + ''
            $list.children('[data-role="item"]').each(function () {
                $item = $(this)
                if ('' + $item.data('value') === index) {
                    _selectedItem($item)
                    return false
                }
            });
        }
    };

    /**
     * 获取值
     */
    Dropdown.prototype.getValue = function () {
        return getRoleValue($(this)).data('value') || ''
    }

    function getParent($item) {
        return $item.closest('.tomasky-ui-dropdown');
    }

    function getRoleValue($parent) {
        return $parent.find('[data-role="value"]')
    }

    function _selectedItem($item) {
        var opt = {
            value : $item.data('value'),
            text : $item.text()
        }
        var $parent = getParent($item);
        var $roleValue = getRoleValue($parent);
        var prev = $roleValue.data('value') === undefined ? '' : $roleValue.data('value');
        var $input = $parent.children('[type=hidden]:first')

        opt.value = opt.value === undefined ? '' : opt.value

        $roleValue
            .html(opt.text)
            .data('value', opt.value)

        if ($input.length) {
            $input.val(opt.value)
        }

        // change 事件
        if (prev !== opt.value) {
            var relatedTarget = {relatedTarget : this}
            $parent.trigger($.Event('change.tc.dropdown', relatedTarget), [opt.value, prev]);

            if ($input.length) {
                // 触发原生change事件
                _fireEvent($input[0], 'change')
            }
        }
    }

    function _fireEvent(target, type) {
        if (document.createEvent) {
            var ev = document.createEvent('HTMLEvents');
            ev.initEvent(type, false, true);
            target.dispatchEvent(ev);
        } else {
            var eventObj = document.createEventObject();
            eventObj.target = target
            target.fireEvent("on" + type, eventObj);
        }
    }

    //项目选择
    function itemSelect(e) {
        var $item = $(this);
        if ($item.is('.disabled') || $item.data('disabled')) return false;
        _selectedItem($item)
    }

    //清除下拉
    function clearList(e) {
        $(flag).each(function () {
            var $this = $(this), hasOpen = $this.hasClass(openClass)
            var relatedTarget = {relatedTarget : this}
            if (this === eTarget && !hasOpen) {
                eTarget = null
                return;
            }
            if (!hasOpen) return;

            $this.trigger(e = $.Event('hide.tc.dropdown', relatedTarget));
            $this.find('[data-role="search"]').hide()
            if (e.isDefaultPrevented()) return;

            $this
                .removeClass(openClass)
                .trigger($.Event('hiden.tc.dropdown', relatedTarget));
        });
    }

    // PLUG 定义
    // ==========================
    function Plugin(option, params) {
        var ret
        this.each(function () {
            var $this = $(this);
            var data = $this.data('tc.dropdown');

            if (!data) $this.data('tc.dropdown', (data = new Dropdown(this)));

            if (typeof option === 'string') {
                ret = data[option].call($this, params)
            }
        });
        return ret === undefined ? this : ret
    }

    $.fn.dropdown = Plugin;
    $.fn.dropdown.Constructor = Dropdown;

    // 绑定默认
    // ===================================
    $(document)
        .on('click.tc.dropdown', select, itemSelect)
        .on('click.tc.dropdown', flag, Dropdown.prototype.toggle)
        .on('click.tc.dropdown', '[data-ui="dropdown"] .tomasky-ui-dropdown-search-notexist', Dropdown.prototype.searchClick)
        .on('click.tc.dropdown', '[data-ui="dropdown"] .tomasky-ui-dropdown-search-input', Dropdown.prototype.searchClick)
        .on('keyup.tc.dropdown', '[data-ui="dropdown"] .tomasky-ui-dropdown-search-input', Dropdown.prototype.search)
        .on('click.tc.dropdown', '[data-ui="dropdown"] .tomasky-ui-dropdown-search', Dropdown.prototype.search)

    $(document).click(function (e) {
        var $dom = $(e.target).parent()
        if (!$dom.hasClass('tomasky-ui-dropdown') && !$dom.parent().hasClass('tomasky-ui-dropdown') && $('[data-ui="dropdown"].' + openClass).length) {
            Dropdown.prototype.toggle()
        }
    })
}(jQuery);

;!function ($) {
	'use strict';

	var Pagination = function(element, options) {
		this.$element = $(element)
		$.extend(this, options || {})
		this.pages = this.pages || this._getPages()
	}

	Pagination.defaults = {
		items: 1,
		itemsOnPage: 10,
		pages: 0,
		displayedPages: 5,
		edges: 2,
		currentPage: 0,
		prevText: '上一页',
		nextText: '下一页',
		ellipseText: '&hellip;',
		theme: '',
		onPageClick: function(pageNumber, event) {
		}
	}

	Pagination.prototype = {
		drawPage: function(page) {
			if (page != null) {
				this.currentPage = page - 1;
			}
			this._draw()
			return this.$element
		},
		destroy: function(){
			return this.$element.empty()
		},
		prevPage: function() {
			this._selectPage(this.currentPage - 1)
			return this.$element
		},
		nextPage: function() {
			this._selectPage(this.currentPage + 1)
			return this.$element
		},
		selectPage: function(page) {
			this._selectPage(page - 1)
			return this.$element
		},
		getCurrentPage: function() {
			return this.currentPage + 1
		},
		getPagesCount: function() {
			return this.pages
		},
		_selectPage: function(pageIndex, event) {
			this.currentPage = pageIndex;
			this._draw()
			this.onPageClick(this.currentPage + 1, event)
		},
		_draw: function(){
			var self = this,
				interval = self._getInterval(),
				edges = self.edges,
				pages = self.pages,
				$element = self.$element,
				$panel, i, begin, end


			self.destroy()
			$panel = $('<ul class="tomasky-ui-pagination"></ul>').appendTo($element)

			if (self.theme) {
				$element.addClass(self.theme)
			}

			// 纠错
			self.currentPage = self.currentPage < 0 ? 0 :
								self.currentPage >= pages ? pages - 1 : 
								self.currentPage

			// 上一页
			if (self.prevText) {
				self._appendItem(self.currentPage - 1, {text: self.prevText, classes: 'prev'})
			}
			// 前部分边缘页码
			if (interval.start > 0 && edges > 0) {
				end = Math.min(edges, interval.start)
				for (i = 0; i < end; i++) {
					self._appendItem(i)
				}
				if (edges < interval.start && (interval.start - edges !== 1)) {
					$panel.append('<li class="ellipse"><span>' + self.ellipseText + '</span></li>')
				} else if (interval.start - edges === 1) {
					self._appendItem(edges)
				}
			}
			// 显示页面
			for (i = interval.start; i < interval.end; i++) {
				self._appendItem(i)
			}
			// 后部分边缘页码
			if (interval.end < self.pages && edges > 0) {
				if (pages - edges > interval.end && (pages - edges - interval.end !== 1)) {
					$panel.append('<li class="ellipse"><span>' + self.ellipseText + '</span></li>')
				} else if (pages - edges - interval.end === 1) {
					self._appendItem(interval.end)
				}
				begin = Math.max(pages - edges, interval.end);
				for (i = begin; i < pages; i++) {
					self._appendItem(i)
				}
			}
			if (self.nextText) {
				self._appendItem(self.currentPage + 1, {text: self.nextText, classes: 'next'})
			}

			// 绑定点击
			$panel.on('click', 'a', function(e) {
				var $link = $(this)
				var pageIndex = $link.data('pageIndex')

				self._selectPage(pageIndex, e)
			})
		},
		_appendItem: function(pageIndex, opts) {
			var self = this,
				$element = this.$element,
				$ul = $element.children('ul:first'),
				$linkWrapper = $('<li></li>'),
				overScope = pageIndex < 0 || pageIndex > (self.pages - 1),
				options, $link, statusClass

			pageIndex = pageIndex < 0 ? 0 : (pageIndex < self.pages ? pageIndex : self.pages - 1)

			options = {
				text: pageIndex + 1,
				classes: ''
			}

			options = $.extend(options, opts || {})

			if (pageIndex == self.currentPage || overScope) {
				statusClass = overScope ? 'disabled' : 'active'
				$linkWrapper.addClass(statusClass);
				$link = $('<span>' + (options.text) + '</span>')
			} else {
				$link = $('<a href="javascript:;">' + (options.text) + '</a>')
			}

			$link.data('pageIndex', pageIndex).appendTo($linkWrapper)

			$ul.length ?
				$ul.append($linkWrapper) :
				$element.append($linkWrapper)
		},
		_getInterval: function() {
			var self = this,
				half = this.displayedPages / 2,
				bigger = this.currentPage - half

			return {
				start: Math.ceil(bigger > 0 ? bigger : 0),
				end: Math.ceil(bigger > 0 ? 
						Math.min(self.currentPage + half, self.pages) 
						: Math.min(self.displayedPages, self.pages) )
			}
		},
		_getPages: function() {
			var pages = Math.ceil(this.items / this.itemsOnPage)
			return pages || 1;
		}
	}

	Pagination.prototype.Constructor = Pagination

	function Plugin(option, params) {
		var $this = $(this),
			data  = $this.data('tc.pagination'),
			options;

		if (option.currentPage) 
			option.currentPage = option.currentPage - 1
		options = $.extend({}, Pagination.defaults, typeof option == 'object' && option)

		if (!data || typeof option === 'object') 
			$this.data('tc.pagination', (data = new Pagination(this, options)) )

		if (typeof option === 'string') 
			return data[option](params)
		else 
			return data.drawPage()
	}

	$.fn.pagination = Plugin;
	$.fn.pagination.Constructor = Pagination;

}(jQuery);
;
!function ($) {
    'use strict';

    var defaults = {
        theme : '',
        arrow : 7,
        type : 'hover',
        delay : 200,
        item : null,//子代绑定
        container : null,
        content : null,
        onBeforeShow : null,
        onShow : null,
        onHide : null
    }

    var eventMap = {
        hover : {
            showEvent : 'mouseover',
            hideEvent : 'mouseout'
        },
        focus : {
            showEvent : 'focus',
            hideEvent : 'blur'
        }
    }

    var __plugName__ = 'tc.poptip'

    var template = "<div class=ui-poptip>\r\n    <div class=ui-poptip-container>\r\n        <div class=ui-poptip-arrow>\r\n            <em></em>\r\n            <span></span>\r\n        </div>\r\n        <div class=ui-poptip-content data-role=content></div>\r\n    </div>\r\n</div>";

    function Poptip(element, options) {
        this.element = $(element)
        // 提取 data 设置
        var dataApi = _getDataApi(this.element)

        this.settings = $.extend({}, defaults, dataApi, options)
        this._title = this.element.attr('title')
        this.mode = 'hide'
        this.timeout = null

        this.init()
    }

    function _getDataApi($element) {
        var ret = {},
            data = $element.data(),
            prop,
            val
        if (data) {
            for (prop in data) {
                if (prop.substr(0, 6) === 'poptip') {
                    val = data[prop]
                    prop = prop.substr(6).toLowerCase()
                    if (defaults[prop]) {
                        ret[prop] = val
                    }
                }
            }
        }
        return ret
    }


    $.extend(Poptip.prototype, {
        init : function () {
            var obj = this,
                $el = this.element,
                triggerType = this.settings.type

            $el.removeAttr('title')
            if (triggerType === 'none') {
                obj.show()
            }
            else if (triggerType === 'click') {
                $el.on('click.' + __plugName__, function (e) {
                    obj.toggle()
                })
                $(document).on('click.' + __plugName__, function (e) {
                    if (obj.mode == 'show' && e.target !== obj.element[0]) {
                        obj.hide()
                    }
                });
            }
            else {
                var eventObj = eventMap[triggerType] || eventMap['hover']
                $el.on(eventObj.showEvent + '.' + __plugName__, function () {
                    obj.show()
                })
                $el.on(eventObj.hideEvent + '.' + __plugName__, function () {
                    obj.hide()
                })
            }
        },
        _bubble : function () {
            if (!this.tip_bubble) {
                this.tip_bubble = $(template).appendTo('body').hide();
            }
            return this.tip_bubble
        },
        show : function () {
            var obj = this
            if (obj.mode == 'hide') {
                var bubble = obj._bubble()

                obj.content().reposition()
                $.isFunction(obj.settings.onBeforeShow) && obj.settings.onBeforeShow(obj)

                obj.timeout = window.setTimeout(function () {
                    bubble.show()
                    $.isFunction(obj.settings.onShow) && obj.settings.onShow(obj)
                    obj.mode = 'show'
                }, obj.settings.delay)
            }
        },
        hide : function () {
            var obj = this

            window.clearTimeout(obj.timeout)
            obj.timeout = null
            obj.tip_bubble && obj.tip_bubble.hide()
            $.isFunction(obj.settings.onHide) && obj.settings.onHide(obj)
            obj.mode = 'hide'
        },
        toggle : function () {
            this.mode == 'hide' ? this.show() : this.hide()
        },
        content : function (msg) {
            var bubble = this._bubble(),
                $el = this.element,
                settings = this.settings,
                ctn = bubble.find('[data-role="content"]'),
                content = settings.content

            if (msg != null) {
                content = msg + ''
            }
            else if ($.isFunction(content)) {
                content = content.call($el)
            }
            ctn && ctn.html(content)

            if (msg != null) {
                this.reposition()
            }
            return this
        },
        reposition : function () {
            var arrow = parseInt(this.settings.arrow, 10),
                bubble = this.tip_bubble

            var positionMap = this._getPosition(arrow)

            positionMap = this._makesureInViewport(positionMap)

            this._renderArrow(positionMap.arrow)
            bubble.css({
                left : positionMap.left,
                top : positionMap.top
            })
            return this
        },
        destroy : function () {
            var $el = this.element

            $el.off('.' + __plugName__)
            $el.removeData(__plugName__)
            $el.attr('title', this._title)
            this.tip_bubble && this.tip_bubble.remove()
        },
        _getPosition : function (arrow) {
            var $el = this.element,
                bubble = this.tip_bubble,
                elPosi = $el.offset(),
                positionMap = {
                    arrow : arrow,
                    left : elPosi.left,
                    top : elPosi.top,
                    right : elPosi.left,
                    bottom : elPosi.top
                },
                direction = '',
                gap = 10,
                arrowShift = 0,
                w = bubble.outerWidth(),
                h = bubble.outerHeight()
            switch (arrow) {
                case 10:
                    direction = 'right'
                    break;
                case 11:
                    direction = 'bottom'
                    break;
                case 1:
                    direction = 'bottom'
                    arrowShift = $el.outerWidth() - w
                    break;
                case 2:
                    direction = 'left'
                    break;
                case 5:
                    direction = 'top'
                    arrowShift = $el.outerWidth() - w
                    break;
                default: // 7
                    direction = 'top'
            }

            switch (direction) {
                case 'top':
                    positionMap.top -= (h + gap)
                    positionMap.left += arrowShift
                    break;
                case 'bottom':
                    positionMap.top += ($el.outerHeight() + gap)
                    positionMap.left += arrowShift
                    break;
                case 'left':
                    positionMap.left -= ( w + gap )
                    break;
                case 'right':
                    positionMap.left += ( $el.outerWidth() + gap )
                    break;
            }

            positionMap.right = positionMap.left + w
            positionMap.bottom = positionMap.top + h

            return positionMap
        },
        _makesureInViewport : function (positionMap) {
            var direct = {
                    'left' : 0,
                    'top' : 1,
                    'right' : 2,
                    'bottom' : 3
                },
                verticalMap = {
                    '1' : 5,
                    '5' : 1,
                    '7' : 11,
                    '11' : 7
                },
                crossMap = {
                    '5' : 7,
                    '7' : 5,
                    '11' : 1,
                    '1' : 11,
                    '10' : 2,
                    '2' : 10
                },
                ap = positionMap.arrow,
                $container = this.settings.container ? $(this.settings.container) : null,
                rs = positionMap,
                changeAp,
                containment
            // $container
            if ($container && $container.length) {
                var posi = $container.offset(),
                    h = $container.outerHeight(),
                    w = $container.outerWidth()
                containment = [posi.left, posi.top, posi.left + w, posi.top + h]
            } else {
                // window
                var $win = $(window),
                    left = $win.scrollLeft(),
                    top = $win.scrollTop(),
                    h = $win.outerHeight(),
                    w = $win.outerWidth()
                containment = [left, top, left + w, top + h]
            }
            // 纵向
            if ((ap == 7 || ap == 5) && (containment[direct.top] > positionMap.top)) {
                // tip 溢出屏幕上方
                ap = changeAp = verticalMap[ap]
            } else if ((ap == 11 || ap == 1) && (containment[direct.bottom] < positionMap.bottom)) {
                // tip 溢出屏幕下方
                ap = changeAp = verticalMap[ap]
            }
            // 横向 // tip 溢出屏幕右边/左边
            if (containment[direct.right] < positionMap.right || containment[direct.left] > positionMap.left) {
                ap = changeAp = crossMap[ap]
            }

            if (changeAp) {
                rs = this._getPosition(changeAp)
            }

            // 上下切换后可能再左右溢出
            if (containment[direct.right] < positionMap.right) {
                rs = this._getPosition(2)
            } else if (containment[direct.left] > positionMap.left) {
                rs = this._getPosition(10)
            }

            return rs
        },
        _renderArrow : function (arrow) {
            var bubble = this.tip_bubble,
                prev = bubble.data('poptip-arrow-current')
            bubble.find('.ui-poptip-arrow').removeClass('ui-poptip-arrow-' + prev).addClass('ui-poptip-arrow-' + arrow)
            bubble.data('poptip-arrow-current', arrow)
        }
    })

    // PLUG 定义
    // ==========================
    function Plugin(option, params) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data(__plugName__)

            if (typeof option === 'object' && option.item) {
                var triggerType = eventMap[option.type || defaults.type]
                $this.on(triggerType.showEvent, option.item, function (e) {
                    option.item = null
                    data = $(this).data(__plugName__)
                    if (!data) {
                        $(this).data(__plugName__, (data = new Poptip(this, option) ))
                        data.show()
                    }
                })
            }
            else {
                if (!data) $this.data(__plugName__, (data = new Poptip(this, option) ));

                if (typeof option === 'string')
                    data[option](params)
            }
        })

    }

    $.fn.poptip = Plugin
    $.fn.poptip.Constructor = Poptip
}(jQuery);
;
!function ($) {
    'use strict';
    var flag = '[data-ui="popups"]';
    var Popups = function (element, options) {
        this.options = options
        this.$element = $(element)
        this.isShown = false
        this.$backdrop = null
    }

    Popups.VERSION = '0.0.1'

    Popups.DEFAULTS = {
        backdrop : true
    }

    Popups.prototype.show = function (_relatedTarget) {
        var e = $.Event('show.tc.popups', {
            relatedTarget : _relatedTarget
        })

        this.$element && this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented())
            return;

        this.isShown = true
        this.$element.on('click.dismiss.tc.popups', '[data-dismiss="popups"]', $.proxy(this.hide, this))
        this.backdrop()
        this.$element.show().css('visibility', 'visible');

        e = $.Event('shown.tc.popups', {
            relatedTarget : _relatedTarget
        })
        this.$element.trigger(e)
    }

    Popups.prototype.justshow = function () {
        this.isShown = true
        this.$element.on('click.dismiss.tc.popups', '[data-dismiss="popups"]', $.proxy(this.hide, this))
        this.backdrop()
        this.$element.show().css('visibility', 'visible');
    }

    Popups.prototype.hide = function (e) {
        e = $.Event('hide.tc.popups')
        this.$element && this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented())
            return;

        this.$element.hide().off('click.dismiss.tc.popups')
        this.isShown = false

        e = $.Event('hiden.tc.popups')
        this.$element.trigger(e)
    }

    Popups.prototype.toggle = function (_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    }

    Popups.prototype.backdrop = function () {
        if (!this.options.backdrop) {
            this.removeBackdrop()
            return;
        }
        if (!this.$backdrop && this.options.backdrop) {
            this.$backdrop = $('<div class="tomasky-ui-popups-backdrop" />').prependTo(this.$element)
            // 覆盖指定区域
            if (this.options.scope) {
                var scope = this.options.scope
                if (!$(scope).length)
                    return;
                var $scope = $(scope), pos = $scope.position(), w = $scope.width(), h = $scope.height();
                this.$backdrop.css({
                    top : pos.top,
                    left : pos.left,
                    bottom : 'auto',
                    right : 'auto',
                    width : w,
                    height : h
                })
            }
        }
    }

    Popups.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }

    // PLUG 定义
    // ==========================
    function Plugin(option, params) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('tc.popups')
            var options = $.extend({}, Popups.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data)
                $this.data('tc.popups', (data = new Popups(this, options)))
            if (typeof option === 'string')
                data[option](params)
            else
                data.show(params)
        });
    }

    $.fn.popups = Plugin;
    $.fn.popups.Constructor = Popups;

    // 绑定默认
    // ===================================
    $(document).on('click.tc.popups', flag, function (e) {
        var $this = $(this)
        var $target = $($this.attr('data-target'))
        var option = $target.data() || 'toggle'
        if ($this.is('a'))
            e.preventDefault()
        Plugin.call($target, option, this)
    });
}(jQuery);
/* ========================================================================
 *  tabs 扩展
 *
 *  author: candy
 *
 *  version: 0.0.1
 * ======================================================================== */
;
!function ($) {
    'use strict';

    var Tabs = function (element) {
        this.element = $(element).attr('data-ui', 'tabs')
    }

    Tabs.VERSION = '0.0.1'

    Tabs.prototype = {
        select : function (index) {
            var $this = this.element,
                $contents = $this.children('.ui-tabs-content'),
                $navs = $this.children('.ui-tabs-nav'),
                index = index || 0,
                ele = $navs.children('li').eq(index),
                selector, panel, prev, e, url

            if (ele.hasClass('active')) return

            panel = ( selector = ele.data('target') ) ?
                $contents.children(selector).first() :
                $contents.children('.ui-tabs-panel').eq(index)

            prev = $navs.children('.active:last')

            // 选中前回调
            e = $.Event('select.tc.tabs', {
                relatedTarget : ele[0],
                prev : prev,
                panel : panel,
                title : ele,
                index : index
            })

            $this.trigger(e)

            if (e.isDefaultPrevented()) return


            $navs.children('.active').removeClass('active')
            $contents.children('.active').removeClass('active')

            ele.addClass('active')
            panel.addClass('active in')

            // 选择后回调
            $this.trigger({
                type : 'selected.tc.tabs',
                relatedTarget : ele[0]
            })

            // 统计
            if (url = ele.attr('url')) {
                _hmt && _hmt.push(['_trackPageview', '/' + url])
            }
        }
    }

    // PLUG 定义
    // ==========================
    function Plugin(option, params) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('tc.tabs')

            if (!data)
                $this.data('tc.tabs', (data = new Tabs(this, option) ))
            if (typeof option === 'string')
                data[option](params)
        })
    }

    $.fn.tabs = Plugin;
    $.fn.tabs.Constructor = Tabs;

    var clickHandler = function (e) {
        e.preventDefault()
        var $this = $(this),
            $parent = $this.closest('.tomasky-ui-tabs'),
            index = $this.index()
        Plugin.call($parent, 'select', index)
    }

    // 绑定默认
    // ===================================
    $(document).on('click.tc.tabs', '[data-ui="tabs"] li', clickHandler)

}(jQuery);
/**
 * tomasky.core.ui.components.js
 * Created by hai on 2015/12/11.
 */
/**
 * Created by hai on 2015/12/30.
 */
(function () {
    var BindComponents = {
        navAccordion : function (cb) {
            $('.nav-tabs .nav').click(function () {
                var $this = $(this)
                $this.closest('.nav-tabs').find('.nav').each(function () {
                    $(this).removeClass('active')
                })
                $this.addClass('active')
                BindComponents.fire(cb, $this)
            })
        },
        fire : function (cb, $nav) {
            if (cb && tmsky.isFunction(cb)) {
                cb($nav)
            }
        }
    }

    tmsky.extendUI({component : BindComponents})

})();

$(function () {
    tmsky.ui.component.navAccordion()
})
