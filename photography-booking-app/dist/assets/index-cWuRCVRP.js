function Uw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jw={exports:{}},ch={},$w={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Al=Symbol.for("react.element"),PA=Symbol.for("react.portal"),xA=Symbol.for("react.fragment"),kA=Symbol.for("react.strict_mode"),NA=Symbol.for("react.profiler"),bA=Symbol.for("react.provider"),DA=Symbol.for("react.context"),OA=Symbol.for("react.forward_ref"),LA=Symbol.for("react.suspense"),MA=Symbol.for("react.memo"),VA=Symbol.for("react.lazy"),cy=Symbol.iterator;function UA(t){return t===null||typeof t!="object"?null:(t=cy&&t[cy]||t["@@iterator"],typeof t=="function"?t:null)}var Bw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zw=Object.assign,Hw={};function Ro(t,e,n){this.props=t,this.context=e,this.refs=Hw,this.updater=n||Bw}Ro.prototype.isReactComponent={};Ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ww(){}Ww.prototype=Ro.prototype;function Op(t,e,n){this.props=t,this.context=e,this.refs=Hw,this.updater=n||Bw}var Lp=Op.prototype=new Ww;Lp.constructor=Op;zw(Lp,Ro.prototype);Lp.isPureReactComponent=!0;var hy=Array.isArray,qw=Object.prototype.hasOwnProperty,Mp={current:null},Gw={key:!0,ref:!0,__self:!0,__source:!0};function Kw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qw.call(e,r)&&!Gw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Al,type:t,key:s,ref:o,props:i,_owner:Mp.current}}function FA(t,e){return{$$typeof:Al,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Al}function jA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dy=/\/+/g;function ud(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jA(""+t.key):e.toString(36)}function $u(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Al:case PA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ud(o,0):r,hy(i)?(n="",t!=null&&(n=t.replace(dy,"$&/")+"/"),$u(i,e,n,"",function(c){return c})):i!=null&&(Vp(i)&&(i=FA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",hy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ud(s,l);o+=$u(s,e,n,u,i)}else if(u=UA(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ud(s,l++),o+=$u(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function uu(t,e,n){if(t==null)return t;var r=[],i=0;return $u(t,r,"","",function(s){return e.call(n,s,i++)}),r}function $A(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},Bu={transition:null},BA={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:Bu,ReactCurrentOwner:Mp};function Qw(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:uu,forEach:function(t,e,n){uu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return uu(t,function(){e++}),e},toArray:function(t){return uu(t,function(e){return e})||[]},only:function(t){if(!Vp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=Ro;pe.Fragment=xA;pe.Profiler=NA;pe.PureComponent=Op;pe.StrictMode=kA;pe.Suspense=LA;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BA;pe.act=Qw;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)qw.call(e,u)&&!Gw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Al,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:DA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bA,_context:t},t.Consumer=t};pe.createElement=Kw;pe.createFactory=function(t){var e=Kw.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:OA,render:t}};pe.isValidElement=Vp;pe.lazy=function(t){return{$$typeof:VA,_payload:{_status:-1,_result:t},_init:$A}};pe.memo=function(t,e){return{$$typeof:MA,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Bu.transition;Bu.transition={};try{t()}finally{Bu.transition=e}};pe.unstable_act=Qw;pe.useCallback=function(t,e){return $t.current.useCallback(t,e)};pe.useContext=function(t){return $t.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};pe.useEffect=function(t,e){return $t.current.useEffect(t,e)};pe.useId=function(){return $t.current.useId()};pe.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return $t.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};pe.useRef=function(t){return $t.current.useRef(t)};pe.useState=function(t){return $t.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return $t.current.useTransition()};pe.version="18.3.1";$w.exports=pe;var U=$w.exports;const Cl=Fw(U),zA=Uw({__proto__:null,default:Cl},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HA=U,WA=Symbol.for("react.element"),qA=Symbol.for("react.fragment"),GA=Object.prototype.hasOwnProperty,KA=HA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QA={key:!0,ref:!0,__self:!0,__source:!0};function Yw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GA.call(e,r)&&!QA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:WA,type:t,key:s,ref:o,props:i,_owner:KA.current}}ch.Fragment=qA;ch.jsx=Yw;ch.jsxs=Yw;jw.exports=ch;var w=jw.exports,Xw={exports:{}},ln={},Jw={exports:{}},Zw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,re){var ae=W.length;W.push(re);e:for(;0<ae;){var Ae=ae-1>>>1,fe=W[Ae];if(0<i(fe,re))W[Ae]=re,W[ae]=fe,ae=Ae;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var re=W[0],ae=W.pop();if(ae!==re){W[0]=ae;e:for(var Ae=0,fe=W.length,xe=fe>>>1;Ae<xe;){var Vt=2*(Ae+1)-1,Ye=W[Vt],gt=Vt+1,yt=W[gt];if(0>i(Ye,ae))gt<fe&&0>i(yt,Ye)?(W[Ae]=yt,W[gt]=ae,Ae=gt):(W[Ae]=Ye,W[Vt]=ae,Ae=Vt);else if(gt<fe&&0>i(yt,ae))W[Ae]=yt,W[gt]=ae,Ae=gt;else break e}}return re}function i(W,re){var ae=W.sortIndex-re.sortIndex;return ae!==0?ae:W.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,E=!1,A=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(W){for(var re=n(c);re!==null;){if(re.callback===null)r(c);else if(re.startTime<=W)r(c),re.sortIndex=re.expirationTime,e(u,re);else break;re=n(c)}}function L(W){if(P=!1,R(W),!A)if(n(u)!==null)A=!0,On(B);else{var re=n(c);re!==null&&zt(L,re.startTime-W)}}function B(W,re){A=!1,P&&(P=!1,S(y),y=-1),E=!0;var ae=m;try{for(R(re),f=n(u);f!==null&&(!(f.expirationTime>re)||W&&!k());){var Ae=f.callback;if(typeof Ae=="function"){f.callback=null,m=f.priorityLevel;var fe=Ae(f.expirationTime<=re);re=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(u)&&r(u),R(re)}else r(u);f=n(u)}if(f!==null)var xe=!0;else{var Vt=n(c);Vt!==null&&zt(L,Vt.startTime-re),xe=!1}return xe}finally{f=null,m=ae,E=!1}}var H=!1,g=null,y=-1,T=5,I=-1;function k(){return!(t.unstable_now()-I<T)}function N(){if(g!==null){var W=t.unstable_now();I=W;var re=!0;try{re=g(!0,W)}finally{re?C():(H=!1,g=null)}}else H=!1}var C;if(typeof v=="function")C=function(){v(N)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,mt=Ne.port2;Ne.port1.onmessage=N,C=function(){mt.postMessage(null)}}else C=function(){b(N,0)};function On(W){g=W,H||(H=!0,C())}function zt(W,re){y=b(function(){W(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){A||E||(A=!0,On(B))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var ae=m;m=re;try{return W()}finally{m=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,re){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ae=m;m=W;try{return re()}finally{m=ae}},t.unstable_scheduleCallback=function(W,re,ae){var Ae=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ae+ae:Ae):ae=Ae,W){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ae+fe,W={id:d++,callback:re,priorityLevel:W,startTime:ae,expirationTime:fe,sortIndex:-1},ae>Ae?(W.sortIndex=ae,e(c,W),n(u)===null&&W===n(c)&&(P?(S(y),y=-1):P=!0,zt(L,ae-Ae))):(W.sortIndex=fe,e(u,W),A||E||(A=!0,On(B))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var re=m;return function(){var ae=m;m=re;try{return W.apply(this,arguments)}finally{m=ae}}}})(Zw);Jw.exports=Zw;var YA=Jw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XA=U,an=YA;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eE=new Set,Ha={};function hs(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(Ha[t]=e,t=0;t<e.length;t++)eE.add(e[t])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=Object.prototype.hasOwnProperty,JA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fy={},py={};function ZA(t){return af.call(py,t)?!0:af.call(fy,t)?!1:JA.test(t)?py[t]=!0:(fy[t]=!0,!1)}function e1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t1(t,e,n,r){if(e===null||typeof e>"u"||e1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){St[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];St[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){St[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){St[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){St[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){St[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){St[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){St[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){St[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function Fp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Up,Fp);St[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Up,Fp);St[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Up,Fp);St[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){St[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});St.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){St[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function jp(t,e,n,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t1(e,n,i,r)&&(n=null),r||i===null?ZA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pr=XA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cu=Symbol.for("react.element"),Ms=Symbol.for("react.portal"),Vs=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),tE=Symbol.for("react.provider"),nE=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),cf=Symbol.for("react.suspense_list"),zp=Symbol.for("react.memo"),Br=Symbol.for("react.lazy"),rE=Symbol.for("react.offscreen"),my=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=my&&t[my]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Object.assign,cd;function ma(t){if(cd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cd=e&&e[1]||""}return`
`+cd+t}var hd=!1;function dd(t,e){if(!t||hd)return"";hd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{hd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ma(t):""}function n1(t){switch(t.tag){case 5:return ma(t.type);case 16:return ma("Lazy");case 13:return ma("Suspense");case 19:return ma("SuspenseList");case 0:case 2:case 15:return t=dd(t.type,!1),t;case 11:return t=dd(t.type.render,!1),t;case 1:return t=dd(t.type,!0),t;default:return""}}function hf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vs:return"Fragment";case Ms:return"Portal";case lf:return"Profiler";case $p:return"StrictMode";case uf:return"Suspense";case cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nE:return(t.displayName||"Context")+".Consumer";case tE:return(t._context.displayName||"Context")+".Provider";case Bp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zp:return e=t.displayName||null,e!==null?e:hf(t.type)||"Memo";case Br:e=t._payload,t=t._init;try{return hf(t(e))}catch{}}return null}function r1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hf(e);case 8:return e===$p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i1(t){var e=iE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hu(t){t._valueTracker||(t._valueTracker=i1(t))}function sE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=iE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function df(t,e){var n=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function gy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function oE(t,e){e=e.checked,e!=null&&jp(t,"checked",e,!1)}function ff(t,e){oE(t,e);var n=gi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ga=Array.isArray;function Xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _y(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ga(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gi(n)}}function aE(t,e){var n=gi(e.value),r=gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var du,uE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(du=du||document.createElement("div"),du.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=du.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ca={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s1=["Webkit","ms","Moz","O"];Object.keys(Ca).forEach(function(t){s1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ca[e]=Ca[t]})});function cE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ca.hasOwnProperty(t)&&Ca[t]?(""+e).trim():e+"px"}function hE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var o1=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yf(t,e){if(e){if(o1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function _f(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vf=null;function Hp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wf=null,Js=null,Zs=null;function wy(t){if(t=xl(t)){if(typeof wf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=mh(e),wf(t.stateNode,t.type,e))}}function dE(t){Js?Zs?Zs.push(t):Zs=[t]:Js=t}function fE(){if(Js){var t=Js,e=Zs;if(Zs=Js=null,wy(t),e)for(t=0;t<e.length;t++)wy(e[t])}}function pE(t,e){return t(e)}function mE(){}var fd=!1;function gE(t,e,n){if(fd)return t(e,n);fd=!0;try{return pE(t,e,n)}finally{fd=!1,(Js!==null||Zs!==null)&&(mE(),fE())}}function qa(t,e){var n=t.stateNode;if(n===null)return null;var r=mh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Ef=!1;if(_r)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){Ef=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{Ef=!1}function a1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ra=!1,pc=null,mc=!1,Tf=null,l1={onError:function(t){Ra=!0,pc=t}};function u1(t,e,n,r,i,s,o,l,u){Ra=!1,pc=null,a1.apply(l1,arguments)}function c1(t,e,n,r,i,s,o,l,u){if(u1.apply(this,arguments),Ra){if(Ra){var c=pc;Ra=!1,pc=null}else throw Error(z(198));mc||(mc=!0,Tf=c)}}function ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ey(t){if(ds(t)!==t)throw Error(z(188))}function h1(t){var e=t.alternate;if(!e){if(e=ds(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ey(i),t;if(s===r)return Ey(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function _E(t){return t=h1(t),t!==null?vE(t):null}function vE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vE(t);if(e!==null)return e;t=t.sibling}return null}var wE=an.unstable_scheduleCallback,Ty=an.unstable_cancelCallback,d1=an.unstable_shouldYield,f1=an.unstable_requestPaint,Je=an.unstable_now,p1=an.unstable_getCurrentPriorityLevel,Wp=an.unstable_ImmediatePriority,EE=an.unstable_UserBlockingPriority,gc=an.unstable_NormalPriority,m1=an.unstable_LowPriority,TE=an.unstable_IdlePriority,hh=null,qn=null;function g1(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(hh,t,void 0,(t.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:v1,y1=Math.log,_1=Math.LN2;function v1(t){return t>>>=0,t===0?32:31-(y1(t)/_1|0)|0}var fu=64,pu=4194304;function ya(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ya(l):(s&=o,s!==0&&(r=ya(s)))}else o=n&~i,o!==0?r=ya(o):s!==0&&(r=ya(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xn(e),i=1<<n,r|=t[n],e&=~i;return r}function w1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function E1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=w1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function If(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function IE(){var t=fu;return fu<<=1,!(fu&4194240)&&(fu=64),t}function pd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xn(e),t[e]=n}function T1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-xn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Pe=0;function SE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var AE,Gp,CE,RE,PE,Sf=!1,mu=[],ti=null,ni=null,ri=null,Ga=new Map,Ka=new Map,Hr=[],I1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iy(t,e){switch(t){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ni=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":Ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(e.pointerId)}}function sa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xl(e),e!==null&&Gp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function S1(t,e,n,r,i){switch(e){case"focusin":return ti=sa(ti,t,e,n,r,i),!0;case"dragenter":return ni=sa(ni,t,e,n,r,i),!0;case"mouseover":return ri=sa(ri,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ga.set(s,sa(Ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ka.set(s,sa(Ka.get(s)||null,t,e,n,r,i)),!0}return!1}function xE(t){var e=zi(t.target);if(e!==null){var n=ds(e);if(n!==null){if(e=n.tag,e===13){if(e=yE(n),e!==null){t.blockedOn=e,PE(t.priority,function(){CE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Af(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vf=r,n.target.dispatchEvent(r),vf=null}else return e=xl(n),e!==null&&Gp(e),t.blockedOn=n,!1;e.shift()}return!0}function Sy(t,e,n){zu(t)&&n.delete(e)}function A1(){Sf=!1,ti!==null&&zu(ti)&&(ti=null),ni!==null&&zu(ni)&&(ni=null),ri!==null&&zu(ri)&&(ri=null),Ga.forEach(Sy),Ka.forEach(Sy)}function oa(t,e){t.blockedOn===e&&(t.blockedOn=null,Sf||(Sf=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,A1)))}function Qa(t){function e(i){return oa(i,t)}if(0<mu.length){oa(mu[0],t);for(var n=1;n<mu.length;n++){var r=mu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ti!==null&&oa(ti,t),ni!==null&&oa(ni,t),ri!==null&&oa(ri,t),Ga.forEach(e),Ka.forEach(e),n=0;n<Hr.length;n++)r=Hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hr.length&&(n=Hr[0],n.blockedOn===null);)xE(n),n.blockedOn===null&&Hr.shift()}var eo=Pr.ReactCurrentBatchConfig,_c=!0;function C1(t,e,n,r){var i=Pe,s=eo.transition;eo.transition=null;try{Pe=1,Kp(t,e,n,r)}finally{Pe=i,eo.transition=s}}function R1(t,e,n,r){var i=Pe,s=eo.transition;eo.transition=null;try{Pe=4,Kp(t,e,n,r)}finally{Pe=i,eo.transition=s}}function Kp(t,e,n,r){if(_c){var i=Af(t,e,n,r);if(i===null)Sd(t,e,r,vc,n),Iy(t,r);else if(S1(i,t,e,n,r))r.stopPropagation();else if(Iy(t,r),e&4&&-1<I1.indexOf(t)){for(;i!==null;){var s=xl(i);if(s!==null&&AE(s),s=Af(t,e,n,r),s===null&&Sd(t,e,r,vc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sd(t,e,r,null,n)}}var vc=null;function Af(t,e,n,r){if(vc=null,t=Hp(r),t=zi(t),t!==null)if(e=ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function kE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p1()){case Wp:return 1;case EE:return 4;case gc:case m1:return 16;case TE:return 536870912;default:return 16}default:return 16}}var Xr=null,Qp=null,Hu=null;function NE(){if(Hu)return Hu;var t,e=Qp,n=e.length,r,i="value"in Xr?Xr.value:Xr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Hu=i.slice(t,1<r?1-r:void 0)}function Wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function gu(){return!0}function Ay(){return!1}function un(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?gu:Ay,this.isPropagationStopped=Ay,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gu)},persist:function(){},isPersistent:gu}),e}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yp=un(Po),Pl=qe({},Po,{view:0,detail:0}),P1=un(Pl),md,gd,aa,dh=qe({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(md=t.screenX-aa.screenX,gd=t.screenY-aa.screenY):gd=md=0,aa=t),md)},movementY:function(t){return"movementY"in t?t.movementY:gd}}),Cy=un(dh),x1=qe({},dh,{dataTransfer:0}),k1=un(x1),N1=qe({},Pl,{relatedTarget:0}),yd=un(N1),b1=qe({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),D1=un(b1),O1=qe({},Po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),L1=un(O1),M1=qe({},Po,{data:0}),Ry=un(M1),V1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=F1[t])?!!e[t]:!1}function Xp(){return j1}var $1=qe({},Pl,{key:function(t){if(t.key){var e=V1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?U1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xp,charCode:function(t){return t.type==="keypress"?Wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B1=un($1),z1=qe({},dh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Py=un(z1),H1=qe({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xp}),W1=un(H1),q1=qe({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),G1=un(q1),K1=qe({},dh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q1=un(K1),Y1=[9,13,27,32],Jp=_r&&"CompositionEvent"in window,Pa=null;_r&&"documentMode"in document&&(Pa=document.documentMode);var X1=_r&&"TextEvent"in window&&!Pa,bE=_r&&(!Jp||Pa&&8<Pa&&11>=Pa),xy=" ",ky=!1;function DE(t,e){switch(t){case"keyup":return Y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function OE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function J1(t,e){switch(t){case"compositionend":return OE(e);case"keypress":return e.which!==32?null:(ky=!0,xy);case"textInput":return t=e.data,t===xy&&ky?null:t;default:return null}}function Z1(t,e){if(Us)return t==="compositionend"||!Jp&&DE(t,e)?(t=NE(),Hu=Qp=Xr=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bE&&e.locale!=="ko"?null:e.data;default:return null}}var eC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ny(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eC[t.type]:e==="textarea"}function LE(t,e,n,r){dE(r),e=wc(e,"onChange"),0<e.length&&(n=new Yp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xa=null,Ya=null;function tC(t){qE(t,0)}function fh(t){var e=$s(t);if(sE(e))return t}function nC(t,e){if(t==="change")return e}var ME=!1;if(_r){var _d;if(_r){var vd="oninput"in document;if(!vd){var by=document.createElement("div");by.setAttribute("oninput","return;"),vd=typeof by.oninput=="function"}_d=vd}else _d=!1;ME=_d&&(!document.documentMode||9<document.documentMode)}function Dy(){xa&&(xa.detachEvent("onpropertychange",VE),Ya=xa=null)}function VE(t){if(t.propertyName==="value"&&fh(Ya)){var e=[];LE(e,Ya,t,Hp(t)),gE(tC,e)}}function rC(t,e,n){t==="focusin"?(Dy(),xa=e,Ya=n,xa.attachEvent("onpropertychange",VE)):t==="focusout"&&Dy()}function iC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fh(Ya)}function sC(t,e){if(t==="click")return fh(e)}function oC(t,e){if(t==="input"||t==="change")return fh(e)}function aC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:aC;function Xa(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!af.call(e,i)||!Nn(t[i],e[i]))return!1}return!0}function Oy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ly(t,e){var n=Oy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oy(n)}}function UE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?UE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function FE(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fc(t.document)}return e}function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lC(t){var e=FE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&UE(n.ownerDocument.documentElement,n)){if(r!==null&&Zp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ly(n,s);var o=Ly(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uC=_r&&"documentMode"in document&&11>=document.documentMode,Fs=null,Cf=null,ka=null,Rf=!1;function My(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rf||Fs==null||Fs!==fc(r)||(r=Fs,"selectionStart"in r&&Zp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ka&&Xa(ka,r)||(ka=r,r=wc(Cf,"onSelect"),0<r.length&&(e=new Yp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fs)))}function yu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var js={animationend:yu("Animation","AnimationEnd"),animationiteration:yu("Animation","AnimationIteration"),animationstart:yu("Animation","AnimationStart"),transitionend:yu("Transition","TransitionEnd")},wd={},jE={};_r&&(jE=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function ph(t){if(wd[t])return wd[t];if(!js[t])return t;var e=js[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jE)return wd[t]=e[n];return t}var $E=ph("animationend"),BE=ph("animationiteration"),zE=ph("animationstart"),HE=ph("transitionend"),WE=new Map,Vy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(t,e){WE.set(t,e),hs(e,[t])}for(var Ed=0;Ed<Vy.length;Ed++){var Td=Vy[Ed],cC=Td.toLowerCase(),hC=Td[0].toUpperCase()+Td.slice(1);Si(cC,"on"+hC)}Si($E,"onAnimationEnd");Si(BE,"onAnimationIteration");Si(zE,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(HE,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dC=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Uy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,c1(r,e,void 0,t),t.currentTarget=null}function qE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Uy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Uy(i,l,c),s=u}}}if(mc)throw t=Tf,mc=!1,Tf=null,t}function Fe(t,e){var n=e[bf];n===void 0&&(n=e[bf]=new Set);var r=t+"__bubble";n.has(r)||(GE(e,t,2,!1),n.add(r))}function Id(t,e,n){var r=0;e&&(r|=4),GE(n,t,r,e)}var _u="_reactListening"+Math.random().toString(36).slice(2);function Ja(t){if(!t[_u]){t[_u]=!0,eE.forEach(function(n){n!=="selectionchange"&&(dC.has(n)||Id(n,!1,t),Id(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_u]||(e[_u]=!0,Id("selectionchange",!1,e))}}function GE(t,e,n,r){switch(kE(e)){case 1:var i=C1;break;case 4:i=R1;break;default:i=Kp}n=i.bind(null,e,n,t),i=void 0,!Ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=zi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}gE(function(){var c=s,d=Hp(n),f=[];e:{var m=WE.get(t);if(m!==void 0){var E=Yp,A=t;switch(t){case"keypress":if(Wu(n)===0)break e;case"keydown":case"keyup":E=B1;break;case"focusin":A="focus",E=yd;break;case"focusout":A="blur",E=yd;break;case"beforeblur":case"afterblur":E=yd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Cy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=k1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=W1;break;case $E:case BE:case zE:E=D1;break;case HE:E=G1;break;case"scroll":E=P1;break;case"wheel":E=Q1;break;case"copy":case"cut":case"paste":E=L1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Py}var P=(e&4)!==0,b=!P&&t==="scroll",S=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,R;v!==null;){R=v;var L=R.stateNode;if(R.tag===5&&L!==null&&(R=L,S!==null&&(L=qa(v,S),L!=null&&P.push(Za(v,L,R)))),b)break;v=v.return}0<P.length&&(m=new E(m,A,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==vf&&(A=n.relatedTarget||n.fromElement)&&(zi(A)||A[vr]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(A=n.relatedTarget||n.toElement,E=c,A=A?zi(A):null,A!==null&&(b=ds(A),A!==b||A.tag!==5&&A.tag!==6)&&(A=null)):(E=null,A=c),E!==A)){if(P=Cy,L="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Py,L="onPointerLeave",S="onPointerEnter",v="pointer"),b=E==null?m:$s(E),R=A==null?m:$s(A),m=new P(L,v+"leave",E,n,d),m.target=b,m.relatedTarget=R,L=null,zi(d)===c&&(P=new P(S,v+"enter",A,n,d),P.target=R,P.relatedTarget=b,L=P),b=L,E&&A)t:{for(P=E,S=A,v=0,R=P;R;R=xs(R))v++;for(R=0,L=S;L;L=xs(L))R++;for(;0<v-R;)P=xs(P),v--;for(;0<R-v;)S=xs(S),R--;for(;v--;){if(P===S||S!==null&&P===S.alternate)break t;P=xs(P),S=xs(S)}P=null}else P=null;E!==null&&Fy(f,m,E,P,!1),A!==null&&b!==null&&Fy(f,b,A,P,!0)}}e:{if(m=c?$s(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var B=nC;else if(Ny(m))if(ME)B=oC;else{B=iC;var H=rC}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(B=sC);if(B&&(B=B(t,c))){LE(f,B,n,d);break e}H&&H(t,m,c),t==="focusout"&&(H=m._wrapperState)&&H.controlled&&m.type==="number"&&pf(m,"number",m.value)}switch(H=c?$s(c):window,t){case"focusin":(Ny(H)||H.contentEditable==="true")&&(Fs=H,Cf=c,ka=null);break;case"focusout":ka=Cf=Fs=null;break;case"mousedown":Rf=!0;break;case"contextmenu":case"mouseup":case"dragend":Rf=!1,My(f,n,d);break;case"selectionchange":if(uC)break;case"keydown":case"keyup":My(f,n,d)}var g;if(Jp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Us?DE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(bE&&n.locale!=="ko"&&(Us||y!=="onCompositionStart"?y==="onCompositionEnd"&&Us&&(g=NE()):(Xr=d,Qp="value"in Xr?Xr.value:Xr.textContent,Us=!0)),H=wc(c,y),0<H.length&&(y=new Ry(y,t,null,n,d),f.push({event:y,listeners:H}),g?y.data=g:(g=OE(n),g!==null&&(y.data=g)))),(g=X1?J1(t,n):Z1(t,n))&&(c=wc(c,"onBeforeInput"),0<c.length&&(d=new Ry("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=g))}qE(f,e)})}function Za(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=qa(t,n),s!=null&&r.unshift(Za(t,s,i)),s=qa(t,e),s!=null&&r.push(Za(t,s,i))),t=t.return}return r}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=qa(n,s),u!=null&&o.unshift(Za(n,u,l))):i||(u=qa(n,s),u!=null&&o.push(Za(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fC=/\r\n?/g,pC=/\u0000|\uFFFD/g;function jy(t){return(typeof t=="string"?t:""+t).replace(fC,`
`).replace(pC,"")}function vu(t,e,n){if(e=jy(e),jy(t)!==e&&n)throw Error(z(425))}function Ec(){}var Pf=null,xf=null;function kf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nf=typeof setTimeout=="function"?setTimeout:void 0,mC=typeof clearTimeout=="function"?clearTimeout:void 0,$y=typeof Promise=="function"?Promise:void 0,gC=typeof queueMicrotask=="function"?queueMicrotask:typeof $y<"u"?function(t){return $y.resolve(null).then(t).catch(yC)}:Nf;function yC(t){setTimeout(function(){throw t})}function Ad(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Qa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qa(e)}function ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function By(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),Hn="__reactFiber$"+xo,el="__reactProps$"+xo,vr="__reactContainer$"+xo,bf="__reactEvents$"+xo,_C="__reactListeners$"+xo,vC="__reactHandles$"+xo;function zi(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vr]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=By(t);t!==null;){if(n=t[Hn])return n;t=By(t)}return e}t=n,n=t.parentNode}return null}function xl(t){return t=t[Hn]||t[vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function mh(t){return t[el]||null}var Df=[],Bs=-1;function Ai(t){return{current:t}}function je(t){0>Bs||(t.current=Df[Bs],Df[Bs]=null,Bs--)}function Me(t,e){Bs++,Df[Bs]=t.current,t.current=e}var yi={},Ot=Ai(yi),Qt=Ai(!1),Ji=yi;function ho(t,e){var n=t.type.contextTypes;if(!n)return yi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(t){return t=t.childContextTypes,t!=null}function Tc(){je(Qt),je(Ot)}function zy(t,e,n){if(Ot.current!==yi)throw Error(z(168));Me(Ot,e),Me(Qt,n)}function KE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,r1(t)||"Unknown",i));return qe({},n,r)}function Ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yi,Ji=Ot.current,Me(Ot,t),Me(Qt,Qt.current),!0}function Hy(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=KE(t,e,Ji),r.__reactInternalMemoizedMergedChildContext=t,je(Qt),je(Ot),Me(Ot,t)):je(Qt),Me(Qt,n)}var cr=null,gh=!1,Cd=!1;function QE(t){cr===null?cr=[t]:cr.push(t)}function wC(t){gh=!0,QE(t)}function Ci(){if(!Cd&&cr!==null){Cd=!0;var t=0,e=Pe;try{var n=cr;for(Pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,gh=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),wE(Wp,Ci),i}finally{Pe=e,Cd=!1}}return null}var zs=[],Hs=0,Sc=null,Ac=0,dn=[],fn=0,Zi=null,hr=1,dr="";function Ui(t,e){zs[Hs++]=Ac,zs[Hs++]=Sc,Sc=t,Ac=e}function YE(t,e,n){dn[fn++]=hr,dn[fn++]=dr,dn[fn++]=Zi,Zi=t;var r=hr;t=dr;var i=32-xn(r)-1;r&=~(1<<i),n+=1;var s=32-xn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hr=1<<32-xn(e)+i|n<<i|r,dr=s+t}else hr=1<<s|n<<i|r,dr=t}function em(t){t.return!==null&&(Ui(t,1),YE(t,1,0))}function tm(t){for(;t===Sc;)Sc=zs[--Hs],zs[Hs]=null,Ac=zs[--Hs],zs[Hs]=null;for(;t===Zi;)Zi=dn[--fn],dn[fn]=null,dr=dn[--fn],dn[fn]=null,hr=dn[--fn],dn[fn]=null}var on=null,rn=null,ze=!1,Rn=null;function XE(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,on=t,rn=ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,on=t,rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zi!==null?{id:hr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,on=t,rn=null,!0):!1;default:return!1}}function Of(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(ze){var e=rn;if(e){var n=e;if(!Wy(t,e)){if(Of(t))throw Error(z(418));e=ii(n.nextSibling);var r=on;e&&Wy(t,e)?XE(r,n):(t.flags=t.flags&-4097|2,ze=!1,on=t)}}else{if(Of(t))throw Error(z(418));t.flags=t.flags&-4097|2,ze=!1,on=t}}}function qy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;on=t}function wu(t){if(t!==on)return!1;if(!ze)return qy(t),ze=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kf(t.type,t.memoizedProps)),e&&(e=rn)){if(Of(t))throw JE(),Error(z(418));for(;e;)XE(t,e),e=ii(e.nextSibling)}if(qy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rn=ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rn=null}}else rn=on?ii(t.stateNode.nextSibling):null;return!0}function JE(){for(var t=rn;t;)t=ii(t.nextSibling)}function fo(){rn=on=null,ze=!1}function nm(t){Rn===null?Rn=[t]:Rn.push(t)}var EC=Pr.ReactCurrentBatchConfig;function la(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Eu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gy(t){var e=t._init;return e(t._payload)}function ZE(t){function e(S,v){if(t){var R=S.deletions;R===null?(S.deletions=[v],S.flags|=16):R.push(v)}}function n(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=li(S,v),S.index=0,S.sibling=null,S}function s(S,v,R){return S.index=R,t?(R=S.alternate,R!==null?(R=R.index,R<v?(S.flags|=2,v):R):(S.flags|=2,v)):(S.flags|=1048576,v)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,v,R,L){return v===null||v.tag!==6?(v=Dd(R,S.mode,L),v.return=S,v):(v=i(v,R),v.return=S,v)}function u(S,v,R,L){var B=R.type;return B===Vs?d(S,v,R.props.children,L,R.key):v!==null&&(v.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Br&&Gy(B)===v.type)?(L=i(v,R.props),L.ref=la(S,v,R),L.return=S,L):(L=Ju(R.type,R.key,R.props,null,S.mode,L),L.ref=la(S,v,R),L.return=S,L)}function c(S,v,R,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=Od(R,S.mode,L),v.return=S,v):(v=i(v,R.children||[]),v.return=S,v)}function d(S,v,R,L,B){return v===null||v.tag!==7?(v=Xi(R,S.mode,L,B),v.return=S,v):(v=i(v,R),v.return=S,v)}function f(S,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Dd(""+v,S.mode,R),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case cu:return R=Ju(v.type,v.key,v.props,null,S.mode,R),R.ref=la(S,null,v),R.return=S,R;case Ms:return v=Od(v,S.mode,R),v.return=S,v;case Br:var L=v._init;return f(S,L(v._payload),R)}if(ga(v)||ra(v))return v=Xi(v,S.mode,R,null),v.return=S,v;Eu(S,v)}return null}function m(S,v,R,L){var B=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return B!==null?null:l(S,v,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case cu:return R.key===B?u(S,v,R,L):null;case Ms:return R.key===B?c(S,v,R,L):null;case Br:return B=R._init,m(S,v,B(R._payload),L)}if(ga(R)||ra(R))return B!==null?null:d(S,v,R,L,null);Eu(S,R)}return null}function E(S,v,R,L,B){if(typeof L=="string"&&L!==""||typeof L=="number")return S=S.get(R)||null,l(v,S,""+L,B);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case cu:return S=S.get(L.key===null?R:L.key)||null,u(v,S,L,B);case Ms:return S=S.get(L.key===null?R:L.key)||null,c(v,S,L,B);case Br:var H=L._init;return E(S,v,R,H(L._payload),B)}if(ga(L)||ra(L))return S=S.get(R)||null,d(v,S,L,B,null);Eu(v,L)}return null}function A(S,v,R,L){for(var B=null,H=null,g=v,y=v=0,T=null;g!==null&&y<R.length;y++){g.index>y?(T=g,g=null):T=g.sibling;var I=m(S,g,R[y],L);if(I===null){g===null&&(g=T);break}t&&g&&I.alternate===null&&e(S,g),v=s(I,v,y),H===null?B=I:H.sibling=I,H=I,g=T}if(y===R.length)return n(S,g),ze&&Ui(S,y),B;if(g===null){for(;y<R.length;y++)g=f(S,R[y],L),g!==null&&(v=s(g,v,y),H===null?B=g:H.sibling=g,H=g);return ze&&Ui(S,y),B}for(g=r(S,g);y<R.length;y++)T=E(g,S,y,R[y],L),T!==null&&(t&&T.alternate!==null&&g.delete(T.key===null?y:T.key),v=s(T,v,y),H===null?B=T:H.sibling=T,H=T);return t&&g.forEach(function(k){return e(S,k)}),ze&&Ui(S,y),B}function P(S,v,R,L){var B=ra(R);if(typeof B!="function")throw Error(z(150));if(R=B.call(R),R==null)throw Error(z(151));for(var H=B=null,g=v,y=v=0,T=null,I=R.next();g!==null&&!I.done;y++,I=R.next()){g.index>y?(T=g,g=null):T=g.sibling;var k=m(S,g,I.value,L);if(k===null){g===null&&(g=T);break}t&&g&&k.alternate===null&&e(S,g),v=s(k,v,y),H===null?B=k:H.sibling=k,H=k,g=T}if(I.done)return n(S,g),ze&&Ui(S,y),B;if(g===null){for(;!I.done;y++,I=R.next())I=f(S,I.value,L),I!==null&&(v=s(I,v,y),H===null?B=I:H.sibling=I,H=I);return ze&&Ui(S,y),B}for(g=r(S,g);!I.done;y++,I=R.next())I=E(g,S,y,I.value,L),I!==null&&(t&&I.alternate!==null&&g.delete(I.key===null?y:I.key),v=s(I,v,y),H===null?B=I:H.sibling=I,H=I);return t&&g.forEach(function(N){return e(S,N)}),ze&&Ui(S,y),B}function b(S,v,R,L){if(typeof R=="object"&&R!==null&&R.type===Vs&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case cu:e:{for(var B=R.key,H=v;H!==null;){if(H.key===B){if(B=R.type,B===Vs){if(H.tag===7){n(S,H.sibling),v=i(H,R.props.children),v.return=S,S=v;break e}}else if(H.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Br&&Gy(B)===H.type){n(S,H.sibling),v=i(H,R.props),v.ref=la(S,H,R),v.return=S,S=v;break e}n(S,H);break}else e(S,H);H=H.sibling}R.type===Vs?(v=Xi(R.props.children,S.mode,L,R.key),v.return=S,S=v):(L=Ju(R.type,R.key,R.props,null,S.mode,L),L.ref=la(S,v,R),L.return=S,S=L)}return o(S);case Ms:e:{for(H=R.key;v!==null;){if(v.key===H)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){n(S,v.sibling),v=i(v,R.children||[]),v.return=S,S=v;break e}else{n(S,v);break}else e(S,v);v=v.sibling}v=Od(R,S.mode,L),v.return=S,S=v}return o(S);case Br:return H=R._init,b(S,v,H(R._payload),L)}if(ga(R))return A(S,v,R,L);if(ra(R))return P(S,v,R,L);Eu(S,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,v!==null&&v.tag===6?(n(S,v.sibling),v=i(v,R),v.return=S,S=v):(n(S,v),v=Dd(R,S.mode,L),v.return=S,S=v),o(S)):n(S,v)}return b}var po=ZE(!0),eT=ZE(!1),Cc=Ai(null),Rc=null,Ws=null,rm=null;function im(){rm=Ws=Rc=null}function sm(t){var e=Cc.current;je(Cc),t._currentValue=e}function Mf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function to(t,e){Rc=t,rm=Ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(rm!==t)if(t={context:t,memoizedValue:e,next:null},Ws===null){if(Rc===null)throw Error(z(308));Ws=t,Rc.dependencies={lanes:0,firstContext:t}}else Ws=Ws.next=t;return e}var Hi=null;function om(t){Hi===null?Hi=[t]:Hi.push(t)}function tT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,om(e)):(n.next=i.next,i.next=n),e.interleaved=n,wr(t,r)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zr=!1;function am(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function si(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wr(t,n)}return i=r.interleaved,i===null?(e.next=e,om(r)):(e.next=i.next,i.next=e),r.interleaved=e,wr(t,n)}function qu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qp(t,n)}}function Ky(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pc(t,e,n,r){var i=t.updateQueue;zr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,P=l;switch(m=e,E=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){f=A.call(E,f,m);break e}f=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,m=typeof A=="function"?A.call(E,f,m):A,m==null)break e;f=qe({},f,m);break e;case 2:zr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=f}}function Qy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var kl={},Gn=Ai(kl),tl=Ai(kl),nl=Ai(kl);function Wi(t){if(t===kl)throw Error(z(174));return t}function lm(t,e){switch(Me(nl,e),Me(tl,t),Me(Gn,kl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}je(Gn),Me(Gn,e)}function mo(){je(Gn),je(tl),je(nl)}function rT(t){Wi(nl.current);var e=Wi(Gn.current),n=gf(e,t.type);e!==n&&(Me(tl,t),Me(Gn,n))}function um(t){tl.current===t&&(je(Gn),je(tl))}var He=Ai(0);function xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rd=[];function cm(){for(var t=0;t<Rd.length;t++)Rd[t]._workInProgressVersionPrimary=null;Rd.length=0}var Gu=Pr.ReactCurrentDispatcher,Pd=Pr.ReactCurrentBatchConfig,es=0,We=null,lt=null,ft=null,kc=!1,Na=!1,rl=0,TC=0;function Pt(){throw Error(z(321))}function hm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function dm(t,e,n,r,i,s){if(es=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gu.current=t===null||t.memoizedState===null?CC:RC,t=n(r,i),Na){s=0;do{if(Na=!1,rl=0,25<=s)throw Error(z(301));s+=1,ft=lt=null,e.updateQueue=null,Gu.current=PC,t=n(r,i)}while(Na)}if(Gu.current=Nc,e=lt!==null&&lt.next!==null,es=0,ft=lt=We=null,kc=!1,e)throw Error(z(300));return t}function fm(){var t=rl!==0;return rl=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?We.memoizedState=ft=t:ft=ft.next=t,ft}function _n(){if(lt===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var e=ft===null?We.memoizedState:ft.next;if(e!==null)ft=e,lt=t;else{if(t===null)throw Error(z(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},ft===null?We.memoizedState=ft=t:ft=ft.next=t}return ft}function il(t,e){return typeof e=="function"?e(t):e}function xd(t){var e=_n(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=lt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((es&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,We.lanes|=d,ts|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Nn(r,e.memoizedState)||(Kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,We.lanes|=s,ts|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kd(t){var e=_n(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function iT(){}function sT(t,e){var n=We,r=_n(),i=e(),s=!Nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Kt=!0),r=r.queue,pm(lT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,sl(9,aT.bind(null,n,r,i,e),void 0,null),pt===null)throw Error(z(349));es&30||oT(n,e,i)}return i}function oT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function aT(t,e,n,r){e.value=n,e.getSnapshot=r,uT(e)&&cT(t)}function lT(t,e,n){return n(function(){uT(e)&&cT(t)})}function uT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function cT(t){var e=wr(t,1);e!==null&&kn(e,t,1,-1)}function Yy(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:t},e.queue=t,t=t.dispatch=AC.bind(null,We,t),[e.memoizedState,t]}function sl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function hT(){return _n().memoizedState}function Ku(t,e,n,r){var i=Bn();We.flags|=t,i.memoizedState=sl(1|e,n,void 0,r===void 0?null:r)}function yh(t,e,n,r){var i=_n();r=r===void 0?null:r;var s=void 0;if(lt!==null){var o=lt.memoizedState;if(s=o.destroy,r!==null&&hm(r,o.deps)){i.memoizedState=sl(e,n,s,r);return}}We.flags|=t,i.memoizedState=sl(1|e,n,s,r)}function Xy(t,e){return Ku(8390656,8,t,e)}function pm(t,e){return yh(2048,8,t,e)}function dT(t,e){return yh(4,2,t,e)}function fT(t,e){return yh(4,4,t,e)}function pT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mT(t,e,n){return n=n!=null?n.concat([t]):null,yh(4,4,pT.bind(null,e,t),n)}function mm(){}function gT(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yT(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _T(t,e,n){return es&21?(Nn(n,e)||(n=IE(),We.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function IC(t,e){var n=Pe;Pe=n!==0&&4>n?n:4,t(!0);var r=Pd.transition;Pd.transition={};try{t(!1),e()}finally{Pe=n,Pd.transition=r}}function vT(){return _n().memoizedState}function SC(t,e,n){var r=ai(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wT(t))ET(e,n);else if(n=tT(t,e,n,r),n!==null){var i=jt();kn(n,t,r,i),TT(n,e,r)}}function AC(t,e,n){var r=ai(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wT(t))ET(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Nn(l,o)){var u=e.interleaved;u===null?(i.next=i,om(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=tT(t,e,i,r),n!==null&&(i=jt(),kn(n,t,r,i),TT(n,e,r))}}function wT(t){var e=t.alternate;return t===We||e!==null&&e===We}function ET(t,e){Na=kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function TT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qp(t,n)}}var Nc={readContext:yn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},CC={readContext:yn,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:Xy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4194308,4,pT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ku(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ku(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SC.bind(null,We,t),[r.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:Yy,useDebugValue:mm,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=Yy(!1),e=t[0];return t=IC.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=We,i=Bn();if(ze){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),pt===null)throw Error(z(349));es&30||oT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xy(lT.bind(null,r,s,t),[t]),r.flags|=2048,sl(9,aT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=pt.identifierPrefix;if(ze){var n=dr,r=hr;n=(r&~(1<<32-xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},RC={readContext:yn,useCallback:gT,useContext:yn,useEffect:pm,useImperativeHandle:mT,useInsertionEffect:dT,useLayoutEffect:fT,useMemo:yT,useReducer:xd,useRef:hT,useState:function(){return xd(il)},useDebugValue:mm,useDeferredValue:function(t){var e=_n();return _T(e,lt.memoizedState,t)},useTransition:function(){var t=xd(il)[0],e=_n().memoizedState;return[t,e]},useMutableSource:iT,useSyncExternalStore:sT,useId:vT,unstable_isNewReconciler:!1},PC={readContext:yn,useCallback:gT,useContext:yn,useEffect:pm,useImperativeHandle:mT,useInsertionEffect:dT,useLayoutEffect:fT,useMemo:yT,useReducer:kd,useRef:hT,useState:function(){return kd(il)},useDebugValue:mm,useDeferredValue:function(t){var e=_n();return lt===null?e.memoizedState=t:_T(e,lt.memoizedState,t)},useTransition:function(){var t=kd(il)[0],e=_n().memoizedState;return[t,e]},useMutableSource:iT,useSyncExternalStore:sT,useId:vT,unstable_isNewReconciler:!1};function Sn(t,e){if(t&&t.defaultProps){e=qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Vf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _h={isMounted:function(t){return(t=t._reactInternals)?ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),i=ai(t),s=mr(r,i);s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&(kn(e,t,i,r),qu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),i=ai(t),s=mr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=si(t,s,i),e!==null&&(kn(e,t,i,r),qu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=ai(t),i=mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=si(t,i,r),e!==null&&(kn(e,t,r,n),qu(e,t,r))}};function Jy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xa(n,r)||!Xa(i,s):!0}function IT(t,e,n){var r=!1,i=yi,s=e.contextType;return typeof s=="object"&&s!==null?s=yn(s):(i=Yt(e)?Ji:Ot.current,r=e.contextTypes,s=(r=r!=null)?ho(t,i):yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_h,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_h.enqueueReplaceState(e,e.state,null)}function Uf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},am(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yn(s):(s=Yt(e)?Ji:Ot.current,i.context=ho(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Vf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_h.enqueueReplaceState(i,i.state,null),Pc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",r=e;do n+=n1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xC=typeof WeakMap=="function"?WeakMap:Map;function ST(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Dc||(Dc=!0,Qf=r),Ff(t,e)},n}function AT(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ff(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ff(t,e),typeof r!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function e_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zC.bind(null,t,e,n),e.then(t,t))}function t_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function n_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,si(n,e,1))),n.lanes|=1),t)}var kC=Pr.ReactCurrentOwner,Kt=!1;function Ft(t,e,n,r){e.child=t===null?eT(e,null,n,r):po(e,t.child,n,r)}function r_(t,e,n,r,i){n=n.render;var s=e.ref;return to(e,i),r=dm(t,e,n,r,s,i),n=fm(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(ze&&n&&em(e),e.flags|=1,Ft(t,e,r,i),e.child)}function i_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Im(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,CT(t,e,s,r,i)):(t=Ju(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(o,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=li(s,r),t.ref=e.ref,t.return=e,e.child=t}function CT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xa(s,r)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,Er(t,e,i)}return jf(t,e,n,r,i)}function RT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Gs,tn),tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(Gs,tn),tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(Gs,tn),tn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(Gs,tn),tn|=r;return Ft(t,e,i,n),e.child}function PT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jf(t,e,n,r,i){var s=Yt(n)?Ji:Ot.current;return s=ho(e,s),to(e,i),n=dm(t,e,n,r,s,i),r=fm(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(ze&&r&&em(e),e.flags|=1,Ft(t,e,n,i),e.child)}function s_(t,e,n,r,i){if(Yt(n)){var s=!0;Ic(e)}else s=!1;if(to(e,i),e.stateNode===null)Qu(t,e),IT(e,n,r),Uf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=yn(c):(c=Yt(n)?Ji:Ot.current,c=ho(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Zy(e,o,r,c),zr=!1;var m=e.memoizedState;o.state=m,Pc(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Qt.current||zr?(typeof d=="function"&&(Vf(e,n,d,r),u=e.memoizedState),(l=zr||Jy(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,nT(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Sn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=yn(u):(u=Yt(n)?Ji:Ot.current,u=ho(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&Zy(e,o,r,u),zr=!1,m=e.memoizedState,o.state=m,Pc(e,r,o,i);var A=e.memoizedState;l!==f||m!==A||Qt.current||zr?(typeof E=="function"&&(Vf(e,n,E,r),A=e.memoizedState),(c=zr||Jy(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return $f(t,e,n,r,s,i)}function $f(t,e,n,r,i,s){PT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hy(e,n,!1),Er(t,e,s);r=e.stateNode,kC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,l,s)):Ft(t,e,l,s),e.memoizedState=r.state,i&&Hy(e,n,!0),e.child}function xT(t){var e=t.stateNode;e.pendingContext?zy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zy(t,e.context,!1),lm(t,e.containerInfo)}function o_(t,e,n,r,i){return fo(),nm(i),e.flags|=256,Ft(t,e,n,r),e.child}var Bf={dehydrated:null,treeContext:null,retryLane:0};function zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function kT(t,e,n){var r=e.pendingProps,i=He.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(He,i&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eh(o,r,0,null),t=Xi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zf(n),e.memoizedState=Bf,t):gm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return NC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=li(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=li(l,s):(s=Xi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bf,r}return s=t.child,t=s.sibling,r=li(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gm(t,e){return e=Eh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tu(t,e,n,r){return r!==null&&nm(r),po(e,t.child,null,n),t=gm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nd(Error(z(422))),Tu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Eh({mode:"visible",children:r.children},i,0,null),s=Xi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=zf(o),e.memoizedState=Bf,s);if(!(e.mode&1))return Tu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(z(419)),r=Nd(s,r,void 0),Tu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Kt||l){if(r=pt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wr(t,i),kn(r,t,i,-1))}return Tm(),r=Nd(Error(z(421))),Tu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=HC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,rn=ii(i.nextSibling),on=e,ze=!0,Rn=null,t!==null&&(dn[fn++]=hr,dn[fn++]=dr,dn[fn++]=Zi,hr=t.id,dr=t.overflow,Zi=e),e=gm(e,r.children),e.flags|=4096,e)}function a_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mf(t.return,e,n)}function bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function NT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ft(t,e,r.children,n),r=He.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&a_(t,n,e);else if(t.tag===19)a_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(He,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bd(e,!0,n,null,s);break;case"together":bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=li(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=li(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function bC(t,e,n){switch(e.tag){case 3:xT(e),fo();break;case 5:rT(e);break;case 1:Yt(e.type)&&Ic(e);break;case 4:lm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(Cc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(He,He.current&1),e.flags|=128,null):n&e.child.childLanes?kT(t,e,n):(Me(He,He.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Me(He,He.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return NT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(He,He.current),r)break;return null;case 22:case 23:return e.lanes=0,RT(t,e,n)}return Er(t,e,n)}var bT,Hf,DT,OT;bT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hf=function(){};DT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wi(Gn.current);var s=null;switch(n){case"input":i=df(t,i),r=df(t,r),s=[];break;case"select":i=qe({},i,{value:void 0}),r=qe({},r,{value:void 0}),s=[];break;case"textarea":i=mf(t,i),r=mf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ec)}yf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};OT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ua(t,e){if(!ze)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function DC(t,e,n){var r=e.pendingProps;switch(tm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return Yt(e.type)&&Tc(),xt(e),null;case 3:return r=e.stateNode,mo(),je(Qt),je(Ot),cm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(Jf(Rn),Rn=null))),Hf(t,e),xt(e),null;case 5:um(e);var i=Wi(nl.current);if(n=e.type,t!==null&&e.stateNode!=null)DT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return xt(e),null}if(t=Wi(Gn.current),wu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Hn]=e,r[el]=s,t=(e.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<_a.length;i++)Fe(_a[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":gy(r,s),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fe("invalid",r);break;case"textarea":_y(r,s),Fe("invalid",r)}yf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&vu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&vu(r.textContent,l,t),i=["children",""+l]):Ha.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Fe("scroll",r)}switch(n){case"input":hu(r),yy(r,s,!0);break;case"textarea":hu(r),vy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ec)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Hn]=e,t[el]=r,bT(t,e,!1,!1),e.stateNode=t;e:{switch(o=_f(n,r),n){case"dialog":Fe("cancel",t),Fe("close",t),i=r;break;case"iframe":case"object":case"embed":Fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<_a.length;i++)Fe(_a[i],t);i=r;break;case"source":Fe("error",t),i=r;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),i=r;break;case"details":Fe("toggle",t),i=r;break;case"input":gy(t,r),i=df(t,r),Fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=qe({},r,{value:void 0}),Fe("invalid",t);break;case"textarea":_y(t,r),i=mf(t,r),Fe("invalid",t);break;default:i=r}yf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?hE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&uE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Wa(t,u):typeof u=="number"&&Wa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Fe("scroll",t):u!=null&&jp(t,s,u,o))}switch(n){case"input":hu(t),yy(t,r,!1);break;case"textarea":hu(t),vy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ec)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)OT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Wi(nl.current),Wi(Gn.current),wu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(s=r.nodeValue!==n)&&(t=on,t!==null))switch(t.tag){case 3:vu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return xt(e),null;case 13:if(je(He),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ze&&rn!==null&&e.mode&1&&!(e.flags&128))JE(),fo(),e.flags|=98560,s=!1;else if(s=wu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Hn]=e}else fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),s=!1}else Rn!==null&&(Jf(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||He.current&1?ut===0&&(ut=3):Tm())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return mo(),Hf(t,e),t===null&&Ja(e.stateNode.containerInfo),xt(e),null;case 10:return sm(e.type._context),xt(e),null;case 17:return Yt(e.type)&&Tc(),xt(e),null;case 19:if(je(He),s=e.memoizedState,s===null)return xt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ua(s,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xc(t),o!==null){for(e.flags|=128,ua(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(He,He.current&1|2),e.child}t=t.sibling}s.tail!==null&&Je()>yo&&(e.flags|=128,r=!0,ua(s,!1),e.lanes=4194304)}else{if(!r)if(t=xc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ze)return xt(e),null}else 2*Je()-s.renderingStartTime>yo&&n!==1073741824&&(e.flags|=128,r=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,n=He.current,Me(He,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return Em(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tn&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function OC(t,e){switch(tm(e),e.tag){case 1:return Yt(e.type)&&Tc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),je(Qt),je(Ot),cm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return um(e),null;case 13:if(je(He),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(He),null;case 4:return mo(),null;case 10:return sm(e.type._context),null;case 22:case 23:return Em(),null;case 24:return null;default:return null}}var Iu=!1,bt=!1,LC=typeof WeakSet=="function"?WeakSet:Set,X=null;function qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(t,e,r)}else n.current=null}function Wf(t,e,n){try{n()}catch(r){Qe(t,e,r)}}var l_=!1;function MC(t,e){if(Pf=_c,t=FE(),Zp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xf={focusedElem:t,selectionRange:n},_c=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,b=A.memoizedState,S=e.stateNode,v=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:Sn(e.type,P),b);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(L){Qe(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return A=l_,l_=!1,A}function ba(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wf(e,n,s)}i=i.next}while(i!==r)}}function vh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function LT(t){var e=t.alternate;e!==null&&(t.alternate=null,LT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[el],delete e[bf],delete e[_C],delete e[vC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function MT(t){return t.tag===5||t.tag===3||t.tag===4}function u_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||MT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ec));else if(r!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}function Kf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kf(t,e,n),t=t.sibling;t!==null;)Kf(t,e,n),t=t.sibling}var wt=null,An=!1;function Ur(t,e,n){for(n=n.child;n!==null;)VT(t,e,n),n=n.sibling}function VT(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(hh,n)}catch{}switch(n.tag){case 5:bt||qs(n,e);case 6:var r=wt,i=An;wt=null,Ur(t,e,n),wt=r,An=i,wt!==null&&(An?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(An?(t=wt,n=n.stateNode,t.nodeType===8?Ad(t.parentNode,n):t.nodeType===1&&Ad(t,n),Qa(t)):Ad(wt,n.stateNode));break;case 4:r=wt,i=An,wt=n.stateNode.containerInfo,An=!0,Ur(t,e,n),wt=r,An=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wf(n,e,o),i=i.next}while(i!==r)}Ur(t,e,n);break;case 1:if(!bt&&(qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Qe(n,e,l)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,Ur(t,e,n),bt=r):Ur(t,e,n);break;default:Ur(t,e,n)}}function c_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LC),e.forEach(function(r){var i=WC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:wt=l.stateNode,An=!1;break e;case 3:wt=l.stateNode.containerInfo,An=!0;break e;case 4:wt=l.stateNode.containerInfo,An=!0;break e}l=l.return}if(wt===null)throw Error(z(160));VT(s,o,i),wt=null,An=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)UT(e,t),e=e.sibling}function UT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),jn(t),r&4){try{ba(3,t,t.return),vh(3,t)}catch(P){Qe(t,t.return,P)}try{ba(5,t,t.return)}catch(P){Qe(t,t.return,P)}}break;case 1:In(e,t),jn(t),r&512&&n!==null&&qs(n,n.return);break;case 5:if(In(e,t),jn(t),r&512&&n!==null&&qs(n,n.return),t.flags&32){var i=t.stateNode;try{Wa(i,"")}catch(P){Qe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&oE(i,s),_f(l,o);var c=_f(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?hE(i,f):d==="dangerouslySetInnerHTML"?uE(i,f):d==="children"?Wa(i,f):jp(i,d,f,c)}switch(l){case"input":ff(i,s);break;case"textarea":aE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Xs(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Xs(i,!!s.multiple,s.defaultValue,!0):Xs(i,!!s.multiple,s.multiple?[]:"",!1))}i[el]=s}catch(P){Qe(t,t.return,P)}}break;case 6:if(In(e,t),jn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Qe(t,t.return,P)}}break;case 3:if(In(e,t),jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(P){Qe(t,t.return,P)}break;case 4:In(e,t),jn(t);break;case 13:In(e,t),jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vm=Je())),r&4&&c_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(c=bt)||d,In(e,t),bt=c):In(e,t),jn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(X=t,d=t.child;d!==null;){for(f=X=d;X!==null;){switch(m=X,E=m.child,m.tag){case 0:case 11:case 14:case 15:ba(4,m,m.return);break;case 1:qs(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){Qe(r,n,P)}}break;case 5:qs(m,m.return);break;case 22:if(m.memoizedState!==null){d_(f);continue}}E!==null?(E.return=m,X=E):d_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=cE("display",o))}catch(P){Qe(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Qe(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),jn(t),r&4&&c_(t);break;case 21:break;default:In(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(MT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wa(i,""),r.flags&=-33);var s=u_(t);Kf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=u_(t);Gf(t,l,o);break;default:throw Error(z(161))}}catch(u){Qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VC(t,e,n){X=t,FT(t)}function FT(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Iu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||bt;l=Iu;var c=bt;if(Iu=o,(bt=u)&&!c)for(X=i;X!==null;)o=X,u=o.child,o.tag===22&&o.memoizedState!==null?f_(i):u!==null?(u.return=o,X=u):f_(i);for(;s!==null;)X=s,FT(s),s=s.sibling;X=i,Iu=l,bt=c}h_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):h_(t)}}function h_(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||vh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Sn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Qa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}bt||e.flags&512&&qf(e)}catch(m){Qe(e,e.return,m)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function d_(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function f_(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vh(4,e)}catch(u){Qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Qe(e,i,u)}}var s=e.return;try{qf(e)}catch(u){Qe(e,s,u)}break;case 5:var o=e.return;try{qf(e)}catch(u){Qe(e,o,u)}}}catch(u){Qe(e,e.return,u)}if(e===t){X=null;break}var l=e.sibling;if(l!==null){l.return=e.return,X=l;break}X=e.return}}var UC=Math.ceil,bc=Pr.ReactCurrentDispatcher,ym=Pr.ReactCurrentOwner,gn=Pr.ReactCurrentBatchConfig,Ee=0,pt=null,nt=null,It=0,tn=0,Gs=Ai(0),ut=0,ol=null,ts=0,wh=0,_m=0,Da=null,qt=null,vm=0,yo=1/0,ur=null,Dc=!1,Qf=null,oi=null,Su=!1,Jr=null,Oc=0,Oa=0,Yf=null,Yu=-1,Xu=0;function jt(){return Ee&6?Je():Yu!==-1?Yu:Yu=Je()}function ai(t){return t.mode&1?Ee&2&&It!==0?It&-It:EC.transition!==null?(Xu===0&&(Xu=IE()),Xu):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:kE(t.type)),t):1}function kn(t,e,n,r){if(50<Oa)throw Oa=0,Yf=null,Error(z(185));Rl(t,n,r),(!(Ee&2)||t!==pt)&&(t===pt&&(!(Ee&2)&&(wh|=n),ut===4&&Wr(t,It)),Xt(t,r),n===1&&Ee===0&&!(e.mode&1)&&(yo=Je()+500,gh&&Ci()))}function Xt(t,e){var n=t.callbackNode;E1(t,e);var r=yc(t,t===pt?It:0);if(r===0)n!==null&&Ty(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ty(n),e===1)t.tag===0?wC(p_.bind(null,t)):QE(p_.bind(null,t)),gC(function(){!(Ee&6)&&Ci()}),n=null;else{switch(SE(r)){case 1:n=Wp;break;case 4:n=EE;break;case 16:n=gc;break;case 536870912:n=TE;break;default:n=gc}n=GT(n,jT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jT(t,e){if(Yu=-1,Xu=0,Ee&6)throw Error(z(327));var n=t.callbackNode;if(no()&&t.callbackNode!==n)return null;var r=yc(t,t===pt?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Lc(t,r);else{e=r;var i=Ee;Ee|=2;var s=BT();(pt!==t||It!==e)&&(ur=null,yo=Je()+500,Yi(t,e));do try{$C();break}catch(l){$T(t,l)}while(!0);im(),bc.current=s,Ee=i,nt!==null?e=0:(pt=null,It=0,e=ut)}if(e!==0){if(e===2&&(i=If(t),i!==0&&(r=i,e=Xf(t,i))),e===1)throw n=ol,Yi(t,0),Wr(t,r),Xt(t,Je()),n;if(e===6)Wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!FC(i)&&(e=Lc(t,r),e===2&&(s=If(t),s!==0&&(r=s,e=Xf(t,s))),e===1))throw n=ol,Yi(t,0),Wr(t,r),Xt(t,Je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Fi(t,qt,ur);break;case 3:if(Wr(t,r),(r&130023424)===r&&(e=vm+500-Je(),10<e)){if(yc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nf(Fi.bind(null,t,qt,ur),e);break}Fi(t,qt,ur);break;case 4:if(Wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-xn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UC(r/1960))-r,10<r){t.timeoutHandle=Nf(Fi.bind(null,t,qt,ur),r);break}Fi(t,qt,ur);break;case 5:Fi(t,qt,ur);break;default:throw Error(z(329))}}}return Xt(t,Je()),t.callbackNode===n?jT.bind(null,t):null}function Xf(t,e){var n=Da;return t.current.memoizedState.isDehydrated&&(Yi(t,e).flags|=256),t=Lc(t,e),t!==2&&(e=qt,qt=n,e!==null&&Jf(e)),t}function Jf(t){qt===null?qt=t:qt.push.apply(qt,t)}function FC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~_m,e&=~wh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xn(e),r=1<<n;t[n]=-1,e&=~r}}function p_(t){if(Ee&6)throw Error(z(327));no();var e=yc(t,0);if(!(e&1))return Xt(t,Je()),null;var n=Lc(t,e);if(t.tag!==0&&n===2){var r=If(t);r!==0&&(e=r,n=Xf(t,r))}if(n===1)throw n=ol,Yi(t,0),Wr(t,e),Xt(t,Je()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fi(t,qt,ur),Xt(t,Je()),null}function wm(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(yo=Je()+500,gh&&Ci())}}function ns(t){Jr!==null&&Jr.tag===0&&!(Ee&6)&&no();var e=Ee;Ee|=1;var n=gn.transition,r=Pe;try{if(gn.transition=null,Pe=1,t)return t()}finally{Pe=r,gn.transition=n,Ee=e,!(Ee&6)&&Ci()}}function Em(){tn=Gs.current,je(Gs)}function Yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mC(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(tm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Tc();break;case 3:mo(),je(Qt),je(Ot),cm();break;case 5:um(r);break;case 4:mo();break;case 13:je(He);break;case 19:je(He);break;case 10:sm(r.type._context);break;case 22:case 23:Em()}n=n.return}if(pt=t,nt=t=li(t.current,null),It=tn=e,ut=0,ol=null,_m=wh=ts=0,qt=Da=null,Hi!==null){for(e=0;e<Hi.length;e++)if(n=Hi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hi=null}return t}function $T(t,e){do{var n=nt;try{if(im(),Gu.current=Nc,kc){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kc=!1}if(es=0,ft=lt=We=null,Na=!1,rl=0,ym.current=null,n===null||n.return===null){ut=1,ol=e,nt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=It,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=t_(o);if(E!==null){E.flags&=-257,n_(E,o,l,s,e),E.mode&1&&e_(s,c,e),e=E,u=c;var A=e.updateQueue;if(A===null){var P=new Set;P.add(u),e.updateQueue=P}else A.add(u);break e}else{if(!(e&1)){e_(s,c,e),Tm();break e}u=Error(z(426))}}else if(ze&&l.mode&1){var b=t_(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),n_(b,o,l,s,e),nm(go(u,l));break e}}s=u=go(u,l),ut!==4&&(ut=2),Da===null?Da=[s]:Da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=ST(s,u,e);Ky(s,S);break e;case 1:l=u;var v=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(oi===null||!oi.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=AT(s,l,e);Ky(s,L);break e}}s=s.return}while(s!==null)}HT(n)}catch(B){e=B,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(!0)}function BT(){var t=bc.current;return bc.current=Nc,t===null?Nc:t}function Tm(){(ut===0||ut===3||ut===2)&&(ut=4),pt===null||!(ts&268435455)&&!(wh&268435455)||Wr(pt,It)}function Lc(t,e){var n=Ee;Ee|=2;var r=BT();(pt!==t||It!==e)&&(ur=null,Yi(t,e));do try{jC();break}catch(i){$T(t,i)}while(!0);if(im(),Ee=n,bc.current=r,nt!==null)throw Error(z(261));return pt=null,It=0,ut}function jC(){for(;nt!==null;)zT(nt)}function $C(){for(;nt!==null&&!d1();)zT(nt)}function zT(t){var e=qT(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?HT(t):nt=e,ym.current=null}function HT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OC(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,nt=null;return}}else if(n=DC(n,e,tn),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);ut===0&&(ut=5)}function Fi(t,e,n){var r=Pe,i=gn.transition;try{gn.transition=null,Pe=1,BC(t,e,n,r)}finally{gn.transition=i,Pe=r}return null}function BC(t,e,n,r){do no();while(Jr!==null);if(Ee&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(T1(t,s),t===pt&&(nt=pt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Su||(Su=!0,GT(gc,function(){return no(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gn.transition,gn.transition=null;var o=Pe;Pe=1;var l=Ee;Ee|=4,ym.current=null,MC(t,n),UT(n,t),lC(xf),_c=!!Pf,xf=Pf=null,t.current=n,VC(n),f1(),Ee=l,Pe=o,gn.transition=s}else t.current=n;if(Su&&(Su=!1,Jr=t,Oc=i),s=t.pendingLanes,s===0&&(oi=null),g1(n.stateNode),Xt(t,Je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Dc)throw Dc=!1,t=Qf,Qf=null,t;return Oc&1&&t.tag!==0&&no(),s=t.pendingLanes,s&1?t===Yf?Oa++:(Oa=0,Yf=t):Oa=0,Ci(),null}function no(){if(Jr!==null){var t=SE(Oc),e=gn.transition,n=Pe;try{if(gn.transition=null,Pe=16>t?16:t,Jr===null)var r=!1;else{if(t=Jr,Jr=null,Oc=0,Ee&6)throw Error(z(331));var i=Ee;for(Ee|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(X=c;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:ba(8,d,s)}var f=d.child;if(f!==null)f.return=d,X=f;else for(;X!==null;){d=X;var m=d.sibling,E=d.return;if(LT(d),d===c){X=null;break}if(m!==null){m.return=E,X=m;break}X=E}}}var A=s.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ba(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,X=S;break e}X=s.return}}var v=t.current;for(X=v;X!==null;){o=X;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,X=R;else e:for(o=v;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vh(9,l)}}catch(B){Qe(l,l.return,B)}if(l===o){X=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,X=L;break e}X=l.return}}if(Ee=i,Ci(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(hh,t)}catch{}r=!0}return r}finally{Pe=n,gn.transition=e}}return!1}function m_(t,e,n){e=go(n,e),e=ST(t,e,1),t=si(t,e,1),e=jt(),t!==null&&(Rl(t,1,e),Xt(t,e))}function Qe(t,e,n){if(t.tag===3)m_(t,t,n);else for(;e!==null;){if(e.tag===3){m_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(oi===null||!oi.has(r))){t=go(n,t),t=AT(e,t,1),e=si(e,t,1),t=jt(),e!==null&&(Rl(e,1,t),Xt(e,t));break}}e=e.return}}function zC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,pt===t&&(It&n)===n&&(ut===4||ut===3&&(It&130023424)===It&&500>Je()-vm?Yi(t,0):_m|=n),Xt(t,e)}function WT(t,e){e===0&&(t.mode&1?(e=pu,pu<<=1,!(pu&130023424)&&(pu=4194304)):e=1);var n=jt();t=wr(t,e),t!==null&&(Rl(t,e,n),Xt(t,n))}function HC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),WT(t,n)}function WC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),WT(t,n)}var qT;qT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,bC(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,ze&&e.flags&1048576&&YE(e,Ac,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qu(t,e),t=e.pendingProps;var i=ho(e,Ot.current);to(e,n),i=dm(null,e,r,t,i,n);var s=fm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(r)?(s=!0,Ic(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,am(e),i.updater=_h,e.stateNode=i,i._reactInternals=e,Uf(e,r,t,n),e=$f(null,e,r,!0,s,n)):(e.tag=0,ze&&s&&em(e),Ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GC(r),t=Sn(r,t),i){case 0:e=jf(null,e,r,t,n);break e;case 1:e=s_(null,e,r,t,n);break e;case 11:e=r_(null,e,r,t,n);break e;case 14:e=i_(null,e,r,Sn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),jf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),s_(t,e,r,i,n);case 3:e:{if(xT(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,nT(t,e),Pc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=go(Error(z(423)),e),e=o_(t,e,r,n,i);break e}else if(r!==i){i=go(Error(z(424)),e),e=o_(t,e,r,n,i);break e}else for(rn=ii(e.stateNode.containerInfo.firstChild),on=e,ze=!0,Rn=null,n=eT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),r===i){e=Er(t,e,n);break e}Ft(t,e,r,n)}e=e.child}return e;case 5:return rT(e),t===null&&Lf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kf(r,i)?o=null:s!==null&&kf(r,s)&&(e.flags|=32),PT(t,e),Ft(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return kT(t,e,n);case 4:return lm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=po(e,null,r,n):Ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),r_(t,e,r,i,n);case 7:return Ft(t,e,e.pendingProps,n),e.child;case 8:return Ft(t,e,e.pendingProps.children,n),e.child;case 12:return Ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(Cc,r._currentValue),r._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===i.children&&!Qt.current){e=Er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=mr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Mf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,to(e,n),i=yn(i),r=r(i),e.flags|=1,Ft(t,e,r,n),e.child;case 14:return r=e.type,i=Sn(r,e.pendingProps),i=Sn(r.type,i),i_(t,e,r,i,n);case 15:return CT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Sn(r,i),Qu(t,e),e.tag=1,Yt(r)?(t=!0,Ic(e)):t=!1,to(e,n),IT(e,r,i),Uf(e,r,i,n),$f(null,e,r,!0,t,n);case 19:return NT(t,e,n);case 22:return RT(t,e,n)}throw Error(z(156,e.tag))};function GT(t,e){return wE(t,e)}function qC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new qC(t,e,n,r)}function Im(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GC(t){if(typeof t=="function")return Im(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bp)return 11;if(t===zp)return 14}return 2}function li(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ju(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Im(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vs:return Xi(n.children,i,s,e);case $p:o=8,i|=8;break;case lf:return t=mn(12,n,e,i|2),t.elementType=lf,t.lanes=s,t;case uf:return t=mn(13,n,e,i),t.elementType=uf,t.lanes=s,t;case cf:return t=mn(19,n,e,i),t.elementType=cf,t.lanes=s,t;case rE:return Eh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tE:o=10;break e;case nE:o=9;break e;case Bp:o=11;break e;case zp:o=14;break e;case Br:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xi(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function Eh(t,e,n,r){return t=mn(22,t,r,e),t.elementType=rE,t.lanes=n,t.stateNode={isHidden:!1},t}function Dd(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Od(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pd(0),this.expirationTimes=pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sm(t,e,n,r,i,s,o,l,u){return t=new KC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},am(s),t}function QC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function KT(t){if(!t)return yi;t=t._reactInternals;e:{if(ds(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Yt(n))return KE(t,n,e)}return e}function QT(t,e,n,r,i,s,o,l,u){return t=Sm(n,r,!0,t,i,s,o,l,u),t.context=KT(null),n=t.current,r=jt(),i=ai(n),s=mr(r,i),s.callback=e??null,si(n,s,i),t.current.lanes=i,Rl(t,i,r),Xt(t,r),t}function Th(t,e,n,r){var i=e.current,s=jt(),o=ai(i);return n=KT(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=si(i,e,o),t!==null&&(kn(t,i,o,s),qu(t,i,o)),o}function Mc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function g_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Am(t,e){g_(t,e),(t=t.alternate)&&g_(t,e)}function YC(){return null}var YT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cm(t){this._internalRoot=t}Ih.prototype.render=Cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Th(t,e,null,null)};Ih.prototype.unmount=Cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){Th(null,t,null,null)}),e[vr]=null}};function Ih(t){this._internalRoot=t}Ih.prototype.unstable_scheduleHydration=function(t){if(t){var e=RE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hr.length&&e!==0&&e<Hr[n].priority;n++);Hr.splice(n,0,t),n===0&&xE(t)}};function Rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function y_(){}function XC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Mc(o);s.call(c)}}var o=QT(e,r,t,0,null,!1,!1,"",y_);return t._reactRootContainer=o,t[vr]=o.current,Ja(t.nodeType===8?t.parentNode:t),ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Mc(u);l.call(c)}}var u=Sm(t,0,!1,null,null,!1,!1,"",y_);return t._reactRootContainer=u,t[vr]=u.current,Ja(t.nodeType===8?t.parentNode:t),ns(function(){Th(e,u,n,r)}),u}function Ah(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Mc(o);l.call(u)}}Th(e,o,t,i)}else o=XC(n,e,t,i,r);return Mc(o)}AE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ya(e.pendingLanes);n!==0&&(qp(e,n|1),Xt(e,Je()),!(Ee&6)&&(yo=Je()+500,Ci()))}break;case 13:ns(function(){var r=wr(t,1);if(r!==null){var i=jt();kn(r,t,1,i)}}),Am(t,1)}};Gp=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=jt();kn(e,t,134217728,n)}Am(t,134217728)}};CE=function(t){if(t.tag===13){var e=ai(t),n=wr(t,e);if(n!==null){var r=jt();kn(n,t,e,r)}Am(t,e)}};RE=function(){return Pe};PE=function(t,e){var n=Pe;try{return Pe=t,e()}finally{Pe=n}};wf=function(t,e,n){switch(e){case"input":if(ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mh(r);if(!i)throw Error(z(90));sE(r),ff(r,i)}}}break;case"textarea":aE(t,n);break;case"select":e=n.value,e!=null&&Xs(t,!!n.multiple,e,!1)}};pE=wm;mE=ns;var JC={usingClientEntryPoint:!1,Events:[xl,$s,mh,dE,fE,wm]},ca={findFiberByHostInstance:zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZC={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_E(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||YC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{hh=Au.inject(ZC),qn=Au}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JC;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rm(e))throw Error(z(200));return QC(t,e,null,n)};ln.createRoot=function(t,e){if(!Rm(t))throw Error(z(299));var n=!1,r="",i=YT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sm(t,1,!1,null,null,n,!1,r,i),t[vr]=e.current,Ja(t.nodeType===8?t.parentNode:t),new Cm(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=_E(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return ns(t)};ln.hydrate=function(t,e,n){if(!Sh(e))throw Error(z(200));return Ah(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!Rm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=YT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=QT(e,null,t,1,n??null,i,!1,s,o),t[vr]=e.current,Ja(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ih(e)};ln.render=function(t,e,n){if(!Sh(e))throw Error(z(200));return Ah(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!Sh(t))throw Error(z(40));return t._reactRootContainer?(ns(function(){Ah(null,null,t,!1,function(){t._reactRootContainer=null,t[vr]=null})}),!0):!1};ln.unstable_batchedUpdates=wm;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Sh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Ah(t,e,n,!1,r)};ln.version="18.3.1-next-f1338f8080-20240426";function XT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XT)}catch(t){console.error(t)}}XT(),Xw.exports=ln;var Pm=Xw.exports;const eR=Fw(Pm),tR=Uw({__proto__:null,default:eR},[Pm]);var JT,__=Pm;JT=__.createRoot,__.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Be(){return Be=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Be.apply(this,arguments)}var tt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tt||(tt={}));const v_="popstate";function nR(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=xr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),al("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:is(s))}function r(i,s){rs(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return iR(e,n,r,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rs(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function rR(){return Math.random().toString(36).substr(2,8)}function w_(t,e){return{usr:t.state,key:t.key,idx:e}}function al(t,e,n,r){return n===void 0&&(n=null),Be({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xr(e):e,{state:n,key:e&&e.key||r||rR()})}function is(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function iR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Be({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=tt.Pop;let b=d(),S=b==null?null:b-c;c=b,u&&u({action:l,location:P.location,delta:S})}function m(b,S){l=tt.Push;let v=al(P.location,b,S);n&&n(v,b),c=d()+1;let R=w_(v,c),L=P.createHref(v);try{o.pushState(R,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;i.location.assign(L)}s&&u&&u({action:l,location:P.location,delta:1})}function E(b,S){l=tt.Replace;let v=al(P.location,b,S);n&&n(v,b),c=d();let R=w_(v,c),L=P.createHref(v);o.replaceState(R,"",L),s&&u&&u({action:l,location:P.location,delta:0})}function A(b){let S=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:is(b);return v=v.replace(/ $/,"%20"),de(S,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,S)}let P={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(v_,f),u=b,()=>{i.removeEventListener(v_,f),u=null}},createHref(b){return e(i,b)},createURL:A,encodeLocation(b){let S=A(b);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:E,go(b){return o.go(b)}};return P}var Re;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Re||(Re={}));const sR=new Set(["lazy","caseSensitive","path","id","index","children"]);function oR(t){return t.index===!0}function Vc(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(de(i.index!==!0||!i.children,"Cannot specify children on an index route"),de(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),oR(i)){let u=Be({},i,e(i),{id:l});return r[l]=u,u}else{let u=Be({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=Vc(i.children,e,o,r)),u}})}function $i(t,e,n){return n===void 0&&(n="/"),Zu(t,e,n,!1)}function Zu(t,e,n,r){let i=typeof e=="string"?xr(e):e,s=Tr(i.pathname||"/",n);if(s==null)return null;let o=ZT(t);lR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=vR(s);l=yR(o[u],c,r)}return l}function aR(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function ZT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(de(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=gr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ZT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:mR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of eI(s.path))i(s,o,u)}),e}function eI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=eI(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function lR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uR=/^:[\w-]+$/,cR=3,hR=2,dR=1,fR=10,pR=-2,E_=t=>t==="*";function mR(t,e){let n=t.split("/"),r=n.length;return n.some(E_)&&(r+=pR),e&&(r+=hR),n.filter(i=>!E_(i)).reduce((i,s)=>i+(uR.test(s)?cR:s===""?dR:fR),r)}function gR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function yR(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Uc({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Uc({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:gr([s,f.pathname]),pathnameBase:TR(gr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=gr([s,f.pathnameBase]))}return o}function Uc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=_R(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let P=l[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const A=l[f];return E&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function _R(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),rs(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return rs(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Tr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function wR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xr(t):t;return{pathname:n?n.startsWith("/")?n:ER(n,e):e,search:IR(r),hash:SR(i)}}function ER(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ld(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ch(t,e){let n=tI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xr(t):(i=Be({},t),de(!i.pathname||!i.pathname.includes("?"),Ld("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),Ld("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),Ld("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=wR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const gr=t=>t.join("/").replace(/\/\/+/g,"/"),TR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),IR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,SR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Fc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ll(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nI=["post","put","patch","delete"],AR=new Set(nI),CR=["get",...nI],RR=new Set(CR),PR=new Set([301,302,303,307,308]),xR=new Set([307,308]),Md={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},kR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ha={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},xm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NR=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),rI="remix-router-transitions";function bR(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;de(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=D=>({hasErrorBoundary:x(D)})}else i=NR;let s={},o=Vc(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.dataStrategy||MR,d=t.patchRoutesOnNavigation,f=Be({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),m=null,E=new Set,A=null,P=null,b=null,S=t.hydrationData!=null,v=$i(o,t.history.location,u),R=!1,L=null;if(v==null&&!d){let x=Ht(404,{pathname:t.history.location.pathname}),{matches:D,route:M}=b_(o);v=D,L={[M.id]:x}}v&&!t.hydrationData&&Li(v,o,t.history.location.pathname).active&&(v=null);let B;if(v)if(v.some(x=>x.route.lazy))B=!1;else if(!v.some(x=>x.route.loader))B=!0;else if(f.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null;if(D){let M=v.findIndex($=>D[$.route.id]!==void 0);B=v.slice(0,M+1).every($=>!ep($.route,x,D))}else B=v.every(M=>!ep(M.route,x,D))}else B=t.hydrationData!=null;else if(B=!1,v=[],f.v7_partialHydration){let x=Li(null,o,t.history.location.pathname);x.active&&x.matches&&(R=!0,v=x.matches)}let H,g={historyAction:t.history.action,location:t.history.location,matches:v,initialized:B,navigation:Md,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||L,fetchers:new Map,blockers:new Map},y=tt.Pop,T=!1,I,k=!1,N=new Map,C=null,Ne=!1,mt=!1,On=[],zt=new Set,W=new Map,re=0,ae=-1,Ae=new Map,fe=new Set,xe=new Map,Vt=new Map,Ye=new Set,gt=new Map,yt=new Map,_s;function Zh(){if(m=t.history.listen(x=>{let{action:D,location:M,delta:$}=x;if(_s){_s(),_s=void 0;return}rs(yt.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=Go({currentLocation:g.location,nextLocation:M,historyAction:D});if(G&&$!=null){let ee=new Promise(oe=>{_s=oe});t.history.go($*-1),bi(G,{state:"blocked",location:M,proceed(){bi(G,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),ee.then(()=>t.history.go($))},reset(){let oe=new Map(g.blockers);oe.set(G,ha),st({blockers:oe})}});return}return Mn(D,M)}),n){YR(e,N);let x=()=>XR(e,N);e.addEventListener("pagehide",x),C=()=>e.removeEventListener("pagehide",x)}return g.initialized||Mn(tt.Pop,g.location,{initialHydration:!0}),H}function vs(){m&&m(),C&&C(),E.clear(),I&&I.abort(),g.fetchers.forEach((x,D)=>Ts(D)),g.blockers.forEach((x,D)=>Ss(D))}function ws(x){return E.add(x),()=>E.delete(x)}function st(x,D){D===void 0&&(D={}),g=Be({},g,x);let M=[],$=[];f.v7_fetcherPersist&&g.fetchers.forEach((G,ee)=>{G.state==="idle"&&(Ye.has(ee)?$.push(ee):M.push(ee))}),Ye.forEach(G=>{!g.fetchers.has(G)&&!W.has(G)&&$.push(G)}),[...E].forEach(G=>G(g,{deletedFetchers:$,viewTransitionOpts:D.viewTransitionOpts,flushSync:D.flushSync===!0})),f.v7_fetcherPersist?(M.forEach(G=>g.fetchers.delete(G)),$.forEach(G=>Ts(G))):$.forEach(G=>Ye.delete(G))}function Ln(x,D,M){var $,G;let{flushSync:ee}=M===void 0?{}:M,oe=g.actionData!=null&&g.navigation.formMethod!=null&&Cn(g.navigation.formMethod)&&g.navigation.state==="loading"&&(($=x.state)==null?void 0:$._isRedirect)!==!0,Z;D.actionData?Object.keys(D.actionData).length>0?Z=D.actionData:Z=null:oe?Z=g.actionData:Z=null;let J=D.loaderData?k_(g.loaderData,D.loaderData,D.matches||[],D.errors):g.loaderData,Y=g.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((he,Ze)=>Y.set(Ze,ha)));let te=T===!0||g.navigation.formMethod!=null&&Cn(g.navigation.formMethod)&&((G=x.state)==null?void 0:G._isRedirect)!==!0;l&&(o=l,l=void 0),Ne||y===tt.Pop||(y===tt.Push?t.history.push(x,x.state):y===tt.Replace&&t.history.replace(x,x.state));let le;if(y===tt.Pop){let he=N.get(g.location.pathname);he&&he.has(x.pathname)?le={currentLocation:g.location,nextLocation:x}:N.has(x.pathname)&&(le={currentLocation:x,nextLocation:g.location})}else if(k){let he=N.get(g.location.pathname);he?he.add(x.pathname):(he=new Set([x.pathname]),N.set(g.location.pathname,he)),le={currentLocation:g.location,nextLocation:x}}st(Be({},D,{actionData:Z,loaderData:J,historyAction:y,location:x,initialized:!0,navigation:Md,revalidation:"idle",restoreScrollPosition:Oi(x,D.matches||g.matches),preventScrollReset:te,blockers:Y}),{viewTransitionOpts:le,flushSync:ee===!0}),y=tt.Pop,T=!1,k=!1,Ne=!1,mt=!1,On=[]}async function Es(x,D){if(typeof x=="number"){t.history.go(x);return}let M=Zf(g.location,g.matches,u,f.v7_prependBasename,x,f.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:$,submission:G,error:ee}=T_(f.v7_normalizeFormMethod,!1,M,D),oe=g.location,Z=al(g.location,$,D&&D.state);Z=Be({},Z,t.history.encodeLocation(Z));let J=D&&D.replace!=null?D.replace:void 0,Y=tt.Push;J===!0?Y=tt.Replace:J===!1||G!=null&&Cn(G.formMethod)&&G.formAction===g.location.pathname+g.location.search&&(Y=tt.Replace);let te=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,le=(D&&D.flushSync)===!0,he=Go({currentLocation:oe,nextLocation:Z,historyAction:Y});if(he){bi(he,{state:"blocked",location:Z,proceed(){bi(he,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),Es(x,D)},reset(){let Ze=new Map(g.blockers);Ze.set(he,ha),st({blockers:Ze})}});return}return await Mn(Y,Z,{submission:G,pendingError:ee,preventScrollReset:te,replace:D&&D.replace,enableViewTransition:D&&D.viewTransition,flushSync:le})}function $o(){if(at(),st({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Mn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Mn(y||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:k===!0})}}async function Mn(x,D,M){I&&I.abort(),I=null,y=x,Ne=(M&&M.startUninterruptedRevalidation)===!0,Ql(g.location,g.matches),T=(M&&M.preventScrollReset)===!0,k=(M&&M.enableViewTransition)===!0;let $=l||o,G=M&&M.overrideNavigation,ee=M!=null&&M.initialHydration&&g.matches&&g.matches.length>0&&!R?g.matches:$i($,D,u),oe=(M&&M.flushSync)===!0;if(ee&&g.initialized&&!mt&&BR(g.location,D)&&!(M&&M.submission&&Cn(M.submission.formMethod))){Ln(D,{matches:ee},{flushSync:oe});return}let Z=Li(ee,$,D.pathname);if(Z.active&&Z.matches&&(ee=Z.matches),!ee){let{error:Ce,notFoundMatches:_e,route:Oe}=rr(D.pathname);Ln(D,{matches:_e,loaderData:{},errors:{[Oe.id]:Ce}},{flushSync:oe});return}I=new AbortController;let J=ks(t.history,D,I.signal,M&&M.submission),Y;if(M&&M.pendingError)Y=[Bi(ee).route.id,{type:Re.error,error:M.pendingError}];else if(M&&M.submission&&Cn(M.submission.formMethod)){let Ce=await ed(J,D,M.submission,ee,Z.active,{replace:M.replace,flushSync:oe});if(Ce.shortCircuited)return;if(Ce.pendingActionResult){let[_e,Oe]=Ce.pendingActionResult;if(nn(Oe)&&ll(Oe.error)&&Oe.error.status===404){I=null,Ln(D,{matches:Ce.matches,loaderData:{},errors:{[_e]:Oe.error}});return}}ee=Ce.matches||ee,Y=Ce.pendingActionResult,G=Vd(D,M.submission),oe=!1,Z.active=!1,J=ks(t.history,J.url,J.signal)}let{shortCircuited:te,matches:le,loaderData:he,errors:Ze}=await td(J,D,ee,Z.active,G,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,oe,Y);te||(I=null,Ln(D,Be({matches:le||ee},N_(Y),{loaderData:he,errors:Ze})))}async function ed(x,D,M,$,G,ee){ee===void 0&&(ee={}),at();let oe=KR(D,M);if(st({navigation:oe},{flushSync:ee.flushSync===!0}),G){let Y=await Un($,D.pathname,x.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){let te=Bi(Y.partialMatches).route.id;return{matches:Y.partialMatches,pendingActionResult:[te,{type:Re.error,error:Y.error}]}}else if(Y.matches)$=Y.matches;else{let{notFoundMatches:te,error:le,route:he}=rr(D.pathname);return{matches:te,pendingActionResult:[he.id,{type:Re.error,error:le}]}}}let Z,J=va($,D);if(!J.route.action&&!J.route.lazy)Z={type:Re.error,error:Ht(405,{method:x.method,pathname:D.pathname,routeId:J.route.id})};else if(Z=(await br("action",g,x,[J],$,null))[J.route.id],x.signal.aborted)return{shortCircuited:!0};if(qi(Z)){let Y;return ee&&ee.replace!=null?Y=ee.replace:Y=R_(Z.response.headers.get("Location"),new URL(x.url),u)===g.location.pathname+g.location.search,await vn(x,Z,!0,{submission:M,replace:Y}),{shortCircuited:!0}}if(Zr(Z))throw Ht(400,{type:"defer-action"});if(nn(Z)){let Y=Bi($,J.route.id);return(ee&&ee.replace)!==!0&&(y=tt.Push),{matches:$,pendingActionResult:[Y.route.id,Z]}}return{matches:$,pendingActionResult:[J.route.id,Z]}}async function td(x,D,M,$,G,ee,oe,Z,J,Y,te){let le=G||Vd(D,ee),he=ee||oe||O_(le),Ze=!Ne&&(!f.v7_partialHydration||!J);if($){if(Ze){let Ve=Bo(te);st(Be({navigation:le},Ve!==void 0?{actionData:Ve}:{}),{flushSync:Y})}let ve=await Un(M,D.pathname,x.signal);if(ve.type==="aborted")return{shortCircuited:!0};if(ve.type==="error"){let Ve=Bi(ve.partialMatches).route.id;return{matches:ve.partialMatches,loaderData:{},errors:{[Ve]:ve.error}}}else if(ve.matches)M=ve.matches;else{let{error:Ve,notFoundMatches:or,route:Lr}=rr(D.pathname);return{matches:or,loaderData:{},errors:{[Lr.id]:Ve}}}}let Ce=l||o,[_e,Oe]=S_(t.history,g,M,he,D,f.v7_partialHydration&&J===!0,f.v7_skipActionErrorRevalidation,mt,On,zt,Ye,xe,fe,Ce,u,te);if(Di(ve=>!(M&&M.some(Ve=>Ve.route.id===ve))||_e&&_e.some(Ve=>Ve.route.id===ve)),ae=++re,_e.length===0&&Oe.length===0){let ve=Is();return Ln(D,Be({matches:M,loaderData:{},errors:te&&nn(te[1])?{[te[0]]:te[1].error}:null},N_(te),ve?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(Ze){let ve={};if(!$){ve.navigation=le;let Ve=Bo(te);Ve!==void 0&&(ve.actionData=Ve)}Oe.length>0&&(ve.fetchers=zo(Oe)),st(ve,{flushSync:Y})}Oe.forEach(ve=>{wn(ve.key),ve.controller&&W.set(ve.key,ve.controller)});let ir=()=>Oe.forEach(ve=>wn(ve.key));I&&I.signal.addEventListener("abort",ir);let{loaderResults:Dr,fetcherResults:En}=await ot(g,M,_e,Oe,x);if(x.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",ir),Oe.forEach(ve=>W.delete(ve.key));let Ut=Cu(Dr);if(Ut)return await vn(x,Ut.result,!0,{replace:Z}),{shortCircuited:!0};if(Ut=Cu(En),Ut)return fe.add(Ut.key),await vn(x,Ut.result,!0,{replace:Z}),{shortCircuited:!0};let{loaderData:As,errors:sr}=x_(g,M,Dr,te,Oe,En,gt);gt.forEach((ve,Ve)=>{ve.subscribe(or=>{(or||ve.done)&&gt.delete(Ve)})}),f.v7_partialHydration&&J&&g.errors&&(sr=Be({},g.errors,sr));let Zt=Is(),hn=Kl(ae),Or=Zt||hn||Oe.length>0;return Be({matches:M,loaderData:As,errors:sr},Or?{fetchers:new Map(g.fetchers)}:{})}function Bo(x){if(x&&!nn(x[1]))return{[x[0]]:x[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function zo(x){return x.forEach(D=>{let M=g.fetchers.get(D.key),$=da(void 0,M?M.data:void 0);g.fetchers.set(D.key,$)}),new Map(g.fetchers)}function Gl(x,D,M,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");wn(x);let G=($&&$.flushSync)===!0,ee=l||o,oe=Zf(g.location,g.matches,u,f.v7_prependBasename,M,f.v7_relativeSplatPath,D,$==null?void 0:$.relative),Z=$i(ee,oe,u),J=Li(Z,ee,oe);if(J.active&&J.matches&&(Z=J.matches),!Z){cn(x,D,Ht(404,{pathname:oe}),{flushSync:G});return}let{path:Y,submission:te,error:le}=T_(f.v7_normalizeFormMethod,!0,oe,$);if(le){cn(x,D,le,{flushSync:G});return}let he=va(Z,Y),Ze=($&&$.preventScrollReset)===!0;if(te&&Cn(te.formMethod)){nd(x,D,Y,he,Z,J.active,G,Ze,te);return}xe.set(x,{routeId:D,path:Y}),Ho(x,D,Y,he,Z,J.active,G,Ze,te)}async function nd(x,D,M,$,G,ee,oe,Z,J){at(),xe.delete(x);function Y($e){if(!$e.route.action&&!$e.route.lazy){let Fn=Ht(405,{method:J.formMethod,pathname:M,routeId:D});return cn(x,D,Fn,{flushSync:oe}),!0}return!1}if(!ee&&Y($))return;let te=g.fetchers.get(x);Jt(x,QR(J,te),{flushSync:oe});let le=new AbortController,he=ks(t.history,M,le.signal,J);if(ee){let $e=await Un(G,new URL(he.url).pathname,he.signal,x);if($e.type==="aborted")return;if($e.type==="error"){cn(x,D,$e.error,{flushSync:oe});return}else if($e.matches){if(G=$e.matches,$=va(G,M),Y($))return}else{cn(x,D,Ht(404,{pathname:M}),{flushSync:oe});return}}W.set(x,le);let Ze=re,_e=(await br("action",g,he,[$],G,x))[$.route.id];if(he.signal.aborted){W.get(x)===le&&W.delete(x);return}if(f.v7_fetcherPersist&&Ye.has(x)){if(qi(_e)||nn(_e)){Jt(x,$r(void 0));return}}else{if(qi(_e))if(W.delete(x),ae>Ze){Jt(x,$r(void 0));return}else return fe.add(x),Jt(x,da(J)),vn(he,_e,!1,{fetcherSubmission:J,preventScrollReset:Z});if(nn(_e)){cn(x,D,_e.error);return}}if(Zr(_e))throw Ht(400,{type:"defer-action"});let Oe=g.navigation.location||g.location,ir=ks(t.history,Oe,le.signal),Dr=l||o,En=g.navigation.state!=="idle"?$i(Dr,g.navigation.location,u):g.matches;de(En,"Didn't find any matches after fetcher action");let Ut=++re;Ae.set(x,Ut);let As=da(J,_e.data);g.fetchers.set(x,As);let[sr,Zt]=S_(t.history,g,En,J,Oe,!1,f.v7_skipActionErrorRevalidation,mt,On,zt,Ye,xe,fe,Dr,u,[$.route.id,_e]);Zt.filter($e=>$e.key!==x).forEach($e=>{let Fn=$e.key,Qo=g.fetchers.get(Fn),Xl=da(void 0,Qo?Qo.data:void 0);g.fetchers.set(Fn,Xl),wn(Fn),$e.controller&&W.set(Fn,$e.controller)}),st({fetchers:new Map(g.fetchers)});let hn=()=>Zt.forEach($e=>wn($e.key));le.signal.addEventListener("abort",hn);let{loaderResults:Or,fetcherResults:ve}=await ot(g,En,sr,Zt,ir);if(le.signal.aborted)return;le.signal.removeEventListener("abort",hn),Ae.delete(x),W.delete(x),Zt.forEach($e=>W.delete($e.key));let Ve=Cu(Or);if(Ve)return vn(ir,Ve.result,!1,{preventScrollReset:Z});if(Ve=Cu(ve),Ve)return fe.add(Ve.key),vn(ir,Ve.result,!1,{preventScrollReset:Z});let{loaderData:or,errors:Lr}=x_(g,En,Or,void 0,Zt,ve,gt);if(g.fetchers.has(x)){let $e=$r(_e.data);g.fetchers.set(x,$e)}Kl(Ut),g.navigation.state==="loading"&&Ut>ae?(de(y,"Expected pending action"),I&&I.abort(),Ln(g.navigation.location,{matches:En,loaderData:or,errors:Lr,fetchers:new Map(g.fetchers)})):(st({errors:Lr,loaderData:k_(g.loaderData,or,En,Lr),fetchers:new Map(g.fetchers)}),mt=!1)}async function Ho(x,D,M,$,G,ee,oe,Z,J){let Y=g.fetchers.get(x);Jt(x,da(J,Y?Y.data:void 0),{flushSync:oe});let te=new AbortController,le=ks(t.history,M,te.signal);if(ee){let _e=await Un(G,new URL(le.url).pathname,le.signal,x);if(_e.type==="aborted")return;if(_e.type==="error"){cn(x,D,_e.error,{flushSync:oe});return}else if(_e.matches)G=_e.matches,$=va(G,M);else{cn(x,D,Ht(404,{pathname:M}),{flushSync:oe});return}}W.set(x,te);let he=re,Ce=(await br("loader",g,le,[$],G,x))[$.route.id];if(Zr(Ce)&&(Ce=await km(Ce,le.signal,!0)||Ce),W.get(x)===te&&W.delete(x),!le.signal.aborted){if(Ye.has(x)){Jt(x,$r(void 0));return}if(qi(Ce))if(ae>he){Jt(x,$r(void 0));return}else{fe.add(x),await vn(le,Ce,!1,{preventScrollReset:Z});return}if(nn(Ce)){cn(x,D,Ce.error);return}de(!Zr(Ce),"Unhandled fetcher deferred data"),Jt(x,$r(Ce.data))}}async function vn(x,D,M,$){let{submission:G,fetcherSubmission:ee,preventScrollReset:oe,replace:Z}=$===void 0?{}:$;D.response.headers.has("X-Remix-Revalidate")&&(mt=!0);let J=D.response.headers.get("Location");de(J,"Expected a Location header on the redirect Response"),J=R_(J,new URL(x.url),u);let Y=al(g.location,J,{_isRedirect:!0});if(n){let _e=!1;if(D.response.headers.has("X-Remix-Reload-Document"))_e=!0;else if(xm.test(J)){const Oe=t.history.createURL(J);_e=Oe.origin!==e.location.origin||Tr(Oe.pathname,u)==null}if(_e){Z?e.location.replace(J):e.location.assign(J);return}}I=null;let te=Z===!0||D.response.headers.has("X-Remix-Replace")?tt.Replace:tt.Push,{formMethod:le,formAction:he,formEncType:Ze}=g.navigation;!G&&!ee&&le&&he&&Ze&&(G=O_(g.navigation));let Ce=G||ee;if(xR.has(D.response.status)&&Ce&&Cn(Ce.formMethod))await Mn(te,Y,{submission:Be({},Ce,{formAction:J}),preventScrollReset:oe||T,enableViewTransition:M?k:void 0});else{let _e=Vd(Y,G);await Mn(te,Y,{overrideNavigation:_e,fetcherSubmission:ee,preventScrollReset:oe||T,enableViewTransition:M?k:void 0})}}async function br(x,D,M,$,G,ee){let oe,Z={};try{oe=await VR(c,x,D,M,$,G,ee,s,i)}catch(J){return $.forEach(Y=>{Z[Y.route.id]={type:Re.error,error:J}}),Z}for(let[J,Y]of Object.entries(oe))if(zR(Y)){let te=Y.result;Z[J]={type:Re.redirect,response:jR(te,M,J,G,u,f.v7_relativeSplatPath)}}else Z[J]=await FR(Y);return Z}async function ot(x,D,M,$,G){let ee=x.matches,oe=br("loader",x,G,M,D,null),Z=Promise.all($.map(async te=>{if(te.matches&&te.match&&te.controller){let he=(await br("loader",x,ks(t.history,te.path,te.controller.signal),[te.match],te.matches,te.key))[te.match.route.id];return{[te.key]:he}}else return Promise.resolve({[te.key]:{type:Re.error,error:Ht(404,{pathname:te.path})}})})),J=await oe,Y=(await Z).reduce((te,le)=>Object.assign(te,le),{});return await Promise.all([qR(D,J,G.signal,ee,x.loaderData),GR(D,Y,$)]),{loaderResults:J,fetcherResults:Y}}function at(){mt=!0,On.push(...Di()),xe.forEach((x,D)=>{W.has(D)&&zt.add(D),wn(D)})}function Jt(x,D,M){M===void 0&&(M={}),g.fetchers.set(x,D),st({fetchers:new Map(g.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function cn(x,D,M,$){$===void 0&&($={});let G=Bi(g.matches,D);Ts(x),st({errors:{[G.route.id]:M},fetchers:new Map(g.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Wo(x){return Vt.set(x,(Vt.get(x)||0)+1),Ye.has(x)&&Ye.delete(x),g.fetchers.get(x)||kR}function Ts(x){let D=g.fetchers.get(x);W.has(x)&&!(D&&D.state==="loading"&&Ae.has(x))&&wn(x),xe.delete(x),Ae.delete(x),fe.delete(x),f.v7_fetcherPersist&&Ye.delete(x),zt.delete(x),g.fetchers.delete(x)}function Ni(x){let D=(Vt.get(x)||0)-1;D<=0?(Vt.delete(x),Ye.add(x),f.v7_fetcherPersist||Ts(x)):Vt.set(x,D),st({fetchers:new Map(g.fetchers)})}function wn(x){let D=W.get(x);D&&(D.abort(),W.delete(x))}function qo(x){for(let D of x){let M=Wo(D),$=$r(M.data);g.fetchers.set(D,$)}}function Is(){let x=[],D=!1;for(let M of fe){let $=g.fetchers.get(M);de($,"Expected fetcher: "+M),$.state==="loading"&&(fe.delete(M),x.push(M),D=!0)}return qo(x),D}function Kl(x){let D=[];for(let[M,$]of Ae)if($<x){let G=g.fetchers.get(M);de(G,"Expected fetcher: "+M),G.state==="loading"&&(wn(M),Ae.delete(M),D.push(M))}return qo(D),D.length>0}function rd(x,D){let M=g.blockers.get(x)||ha;return yt.get(x)!==D&&yt.set(x,D),M}function Ss(x){g.blockers.delete(x),yt.delete(x)}function bi(x,D){let M=g.blockers.get(x)||ha;de(M.state==="unblocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="proceeding"||M.state==="blocked"&&D.state==="unblocked"||M.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+D.state);let $=new Map(g.blockers);$.set(x,D),st({blockers:$})}function Go(x){let{currentLocation:D,nextLocation:M,historyAction:$}=x;if(yt.size===0)return;yt.size>1&&rs(!1,"A router only supports one blocker at a time");let G=Array.from(yt.entries()),[ee,oe]=G[G.length-1],Z=g.blockers.get(ee);if(!(Z&&Z.state==="proceeding")&&oe({currentLocation:D,nextLocation:M,historyAction:$}))return ee}function rr(x){let D=Ht(404,{pathname:x}),M=l||o,{matches:$,route:G}=b_(M);return Di(),{notFoundMatches:$,route:G,error:D}}function Di(x){let D=[];return gt.forEach((M,$)=>{(!x||x($))&&(M.cancel(),D.push($),gt.delete($))}),D}function Ko(x,D,M){if(A=x,b=D,P=M||null,!S&&g.navigation===Md){S=!0;let $=Oi(g.location,g.matches);$!=null&&st({restoreScrollPosition:$})}return()=>{A=null,b=null,P=null}}function Vn(x,D){return P&&P(x,D.map($=>aR($,g.loaderData)))||x.key}function Ql(x,D){if(A&&b){let M=Vn(x,D);A[M]=b()}}function Oi(x,D){if(A){let M=Vn(x,D),$=A[M];if(typeof $=="number")return $}return null}function Li(x,D,M){if(d)if(x){if(Object.keys(x[0].params).length>0)return{active:!0,matches:Zu(D,M,u,!0)}}else return{active:!0,matches:Zu(D,M,u,!0)||[]};return{active:!1,matches:null}}async function Un(x,D,M,$){if(!d)return{type:"success",matches:x};let G=x;for(;;){let ee=l==null,oe=l||o,Z=s;try{await d({signal:M,path:D,matches:G,fetcherKey:$,patch:(te,le)=>{M.aborted||C_(te,le,oe,Z,i)}})}catch(te){return{type:"error",error:te,partialMatches:G}}finally{ee&&!M.aborted&&(o=[...o])}if(M.aborted)return{type:"aborted"};let J=$i(oe,D,u);if(J)return{type:"success",matches:J};let Y=Zu(oe,D,u,!0);if(!Y||G.length===Y.length&&G.every((te,le)=>te.route.id===Y[le].route.id))return{type:"success",matches:null};G=Y}}function Yl(x){s={},l=Vc(x,i,void 0,s)}function _t(x,D){let M=l==null;C_(x,D,l||o,s,i),M&&(o=[...o],st({}))}return H={get basename(){return u},get future(){return f},get state(){return g},get routes(){return o},get window(){return e},initialize:Zh,subscribe:ws,enableScrollRestoration:Ko,navigate:Es,fetch:Gl,revalidate:$o,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Wo,deleteFetcher:Ni,dispose:vs,getBlocker:rd,deleteBlocker:Ss,patchRoutes:_t,_internalFetchControllers:W,_internalActiveDeferreds:gt,_internalSetRoutes:Yl},H}function DR(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Zf(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=Rh(i||".",Ch(u,s),Tr(t.pathname,n)||t.pathname,l==="path");if(i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c){let f=Nm(d.search);if(c.route.index&&!f)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let m=new URLSearchParams(d.search),E=m.getAll("index");m.delete("index"),E.filter(P=>P).forEach(P=>m.append("index",P));let A=m.toString();d.search=A?"?"+A:""}}return r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:gr([n,d.pathname])),is(d)}function T_(t,e,n,r){if(!r||!DR(r))return{path:n};if(r.formMethod&&!WR(r.formMethod))return{path:n,error:Ht(405,{method:r.formMethod})};let i=()=>({path:n,error:Ht(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=oI(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Cn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,A)=>{let[P,b]=A;return""+E+P+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Cn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}de(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=tp(r.formData),c=r.formData;else if(r.body instanceof FormData)u=tp(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=P_(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=P_(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Cn(d.formMethod))return{path:n,submission:d};let f=xr(n);return e&&f.search&&Nm(f.search)&&u.append("index",""),f.search="?"+u,{path:is(f),submission:d}}function I_(t,e,n){n===void 0&&(n=!1);let r=t.findIndex(i=>i.route.id===e);return r>=0?t.slice(0,n?r+1:r):t}function S_(t,e,n,r,i,s,o,l,u,c,d,f,m,E,A,P){let b=P?nn(P[1])?P[1].error:P[1].data:void 0,S=t.createURL(e.location),v=t.createURL(i),R=n;s&&e.errors?R=I_(n,Object.keys(e.errors)[0],!0):P&&nn(P[1])&&(R=I_(n,P[0]));let L=P?P[1].statusCode:void 0,B=o&&L&&L>=400,H=R.filter((y,T)=>{let{route:I}=y;if(I.lazy)return!0;if(I.loader==null)return!1;if(s)return ep(I,e.loaderData,e.errors);if(OR(e.loaderData,e.matches[T],y)||u.some(C=>C===y.route.id))return!0;let k=e.matches[T],N=y;return A_(y,Be({currentUrl:S,currentParams:k.params,nextUrl:v,nextParams:N.params},r,{actionResult:b,actionStatus:L,defaultShouldRevalidate:B?!1:l||S.pathname+S.search===v.pathname+v.search||S.search!==v.search||iI(k,N)}))}),g=[];return f.forEach((y,T)=>{if(s||!n.some(Ne=>Ne.route.id===y.routeId)||d.has(T))return;let I=$i(E,y.path,A);if(!I){g.push({key:T,routeId:y.routeId,path:y.path,matches:null,match:null,controller:null});return}let k=e.fetchers.get(T),N=va(I,y.path),C=!1;m.has(T)?C=!1:c.has(T)?(c.delete(T),C=!0):k&&k.state!=="idle"&&k.data===void 0?C=l:C=A_(N,Be({currentUrl:S,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:b,actionStatus:L,defaultShouldRevalidate:B?!1:l})),C&&g.push({key:T,routeId:y.routeId,path:y.path,matches:I,match:N,controller:new AbortController})}),[H,g]}function ep(t,e,n){if(t.lazy)return!0;if(!t.loader)return!1;let r=e!=null&&e[t.id]!==void 0,i=n!=null&&n[t.id]!==void 0;return!r&&i?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!r&&!i}function OR(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function iI(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function A_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function C_(t,e,n,r,i){var s;let o;if(t){let c=r[t];de(c,"No route found to patch children into: routeId = "+t),c.children||(c.children=[]),o=c.children}else o=n;let l=e.filter(c=>!o.some(d=>sI(c,d))),u=Vc(l,i,[t||"_","patch",String(((s=o)==null?void 0:s.length)||"0")],r);o.push(...u)}function sI(t,e){return"id"in t&&"id"in e&&t.id===e.id?!0:t.index===e.index&&t.path===e.path&&t.caseSensitive===e.caseSensitive?(!t.children||t.children.length===0)&&(!e.children||e.children.length===0)?!0:t.children.every((n,r)=>{var i;return(i=e.children)==null?void 0:i.some(s=>sI(n,s))}):!1}async function LR(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];de(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";rs(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!sR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Be({},e(i),{lazy:void 0}))}async function MR(t){let{matches:e}=t,n=e.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,s,o)=>Object.assign(i,{[n[o].route.id]:s}),{})}async function VR(t,e,n,r,i,s,o,l,u,c){let d=s.map(E=>E.route.lazy?LR(E.route,u,l):void 0),f=s.map((E,A)=>{let P=d[A],b=i.some(v=>v.route.id===E.route.id);return Be({},E,{shouldLoad:b,resolve:async v=>(v&&r.method==="GET"&&(E.route.lazy||E.route.loader)&&(b=!0),b?UR(e,r,E,P,v,c):Promise.resolve({type:Re.data,result:void 0}))})}),m=await t({matches:f,request:r,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(d)}catch{}return m}async function UR(t,e,n,r,i,s){let o,l,u=c=>{let d,f=new Promise((A,P)=>d=P);l=()=>d(),e.signal.addEventListener("abort",l);let m=A=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:s},...A!==void 0?[A]:[]),E=(async()=>{try{return{type:"data",result:await(i?i(P=>m(P)):m())}}catch(A){return{type:"error",result:A}}})();return Promise.race([E,f])};try{let c=n.route[t];if(r)if(c){let d,[f]=await Promise.all([u(c).catch(m=>{d=m}),r]);if(d!==void 0)throw d;o=f}else if(await r,c=n.route[t],c)o=await u(c);else if(t==="action"){let d=new URL(e.url),f=d.pathname+d.search;throw Ht(405,{method:e.method,pathname:f,routeId:n.route.id})}else return{type:Re.data,result:void 0};else if(c)o=await u(c);else{let d=new URL(e.url),f=d.pathname+d.search;throw Ht(404,{pathname:f})}de(o.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:Re.error,result:c}}finally{l&&e.signal.removeEventListener("abort",l)}return o}async function FR(t){let{result:e,type:n}=t;if(aI(e)){let f;try{let m=e.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?e.body==null?f=null:f=await e.json():f=await e.text()}catch(m){return{type:Re.error,error:m}}return n===Re.error?{type:Re.error,error:new Fc(e.status,e.statusText,f),statusCode:e.status,headers:e.headers}:{type:Re.data,data:f,statusCode:e.status,headers:e.headers}}if(n===Re.error){if(D_(e)){var r,i;if(e.data instanceof Error){var s,o;return{type:Re.error,error:e.data,statusCode:(s=e.init)==null?void 0:s.status,headers:(o=e.init)!=null&&o.headers?new Headers(e.init.headers):void 0}}return{type:Re.error,error:new Fc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data),statusCode:ll(e)?e.status:void 0,headers:(i=e.init)!=null&&i.headers?new Headers(e.init.headers):void 0}}return{type:Re.error,error:e,statusCode:ll(e)?e.status:void 0}}if(HR(e)){var l,u;return{type:Re.deferred,deferredData:e,statusCode:(l=e.init)==null?void 0:l.status,headers:((u=e.init)==null?void 0:u.headers)&&new Headers(e.init.headers)}}if(D_(e)){var c,d;return{type:Re.data,data:e.data,statusCode:(c=e.init)==null?void 0:c.status,headers:(d=e.init)!=null&&d.headers?new Headers(e.init.headers):void 0}}return{type:Re.data,data:e}}function jR(t,e,n,r,i,s){let o=t.headers.get("Location");if(de(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!xm.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Zf(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function R_(t,e,n){if(xm.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Tr(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function ks(t,e,n,r){let i=t.createURL(oI(e)).toString(),s={signal:n};if(r&&Cn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=tp(r.formData):s.body=r.formData}return new Request(i,s)}function tp(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function P_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function $R(t,e,n,r,i){let s={},o=null,l,u=!1,c={},d=n&&nn(n[1])?n[1].error:void 0;return t.forEach(f=>{if(!(f.route.id in e))return;let m=f.route.id,E=e[m];if(de(!qi(E),"Cannot handle redirect results in processLoaderData"),nn(E)){let A=E.error;d!==void 0&&(A=d,d=void 0),o=o||{};{let P=Bi(t,m);o[P.route.id]==null&&(o[P.route.id]=A)}s[m]=void 0,u||(u=!0,l=ll(E.error)?E.error.status:500),E.headers&&(c[m]=E.headers)}else Zr(E)?(r.set(m,E.deferredData),s[m]=E.deferredData.data,E.statusCode!=null&&E.statusCode!==200&&!u&&(l=E.statusCode),E.headers&&(c[m]=E.headers)):(s[m]=E.data,E.statusCode&&E.statusCode!==200&&!u&&(l=E.statusCode),E.headers&&(c[m]=E.headers))}),d!==void 0&&n&&(o={[n[0]]:d},s[n[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:c}}function x_(t,e,n,r,i,s,o){let{loaderData:l,errors:u}=$R(e,n,r,o);return i.forEach(c=>{let{key:d,match:f,controller:m}=c,E=s[d];if(de(E,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(nn(E)){let A=Bi(t.matches,f==null?void 0:f.route.id);u&&u[A.route.id]||(u=Be({},u,{[A.route.id]:E.error})),t.fetchers.delete(d)}else if(qi(E))de(!1,"Unhandled fetcher revalidation redirect");else if(Zr(E))de(!1,"Unhandled fetcher deferred data");else{let A=$r(E.data);t.fetchers.set(d,A)}}),{loaderData:l,errors:u}}function k_(t,e,n,r){let i=Be({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function N_(t){return t?nn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Bi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function b_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Ht(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Fc(t||500,l,new Error(u),!0)}function Cu(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[r,i]=e[n];if(qi(i))return{key:r,result:i}}}function oI(t){let e=typeof t=="string"?xr(t):t;return is(Be({},e,{hash:""}))}function BR(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function zR(t){return aI(t.result)&&PR.has(t.result.status)}function Zr(t){return t.type===Re.deferred}function nn(t){return t.type===Re.error}function qi(t){return(t&&t.type)===Re.redirect}function D_(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function HR(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function aI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function WR(t){return RR.has(t.toLowerCase())}function Cn(t){return AR.has(t.toLowerCase())}async function qR(t,e,n,r,i){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[l,u]=s[o],c=t.find(m=>(m==null?void 0:m.route.id)===l);if(!c)continue;let d=r.find(m=>m.route.id===c.route.id),f=d!=null&&!iI(d,c)&&(i&&i[c.route.id])!==void 0;Zr(u)&&f&&await km(u,n,!1).then(m=>{m&&(e[l]=m)})}}async function GR(t,e,n){for(let r=0;r<n.length;r++){let{key:i,routeId:s,controller:o}=n[r],l=e[i];t.find(c=>(c==null?void 0:c.route.id)===s)&&Zr(l)&&(de(o,"Expected an AbortController for revalidating fetcher deferred result"),await km(l,o.signal,!0).then(c=>{c&&(e[i]=c)}))}}async function km(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Re.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Re.error,error:i}}return{type:Re.data,data:t.deferredData.data}}}function Nm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function va(t,e){let n=typeof e=="string"?xr(e).search:e.search;if(t[t.length-1].route.index&&Nm(n||""))return t[t.length-1];let r=tI(t);return r[r.length-1]}function O_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Vd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function KR(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function da(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function QR(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function $r(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function YR(t,e){try{let n=t.sessionStorage.getItem(rI);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function XR(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(rI,JSON.stringify(n))}catch(r){rs(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jc(){return jc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jc.apply(this,arguments)}const Nl=U.createContext(null),bm=U.createContext(null),kr=U.createContext(null),Dm=U.createContext(null),Nr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),lI=U.createContext(null);function JR(t,e){let{relative:n}=e===void 0?{}:e;ko()||de(!1);let{basename:r,navigator:i}=U.useContext(kr),{hash:s,pathname:o,search:l}=Ph(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:gr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ko(){return U.useContext(Dm)!=null}function No(){return ko()||de(!1),U.useContext(Dm).location}function uI(t){U.useContext(kr).static||U.useLayoutEffect(t)}function Om(){let{isDataRoute:t}=U.useContext(Nr);return t?dP():ZR()}function ZR(){ko()||de(!1);let t=U.useContext(Nl),{basename:e,future:n,navigator:r}=U.useContext(kr),{matches:i}=U.useContext(Nr),{pathname:s}=No(),o=JSON.stringify(Ch(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return uI(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Rh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:gr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const eP=U.createContext(null);function tP(t){let e=U.useContext(Nr).outlet;return e&&U.createElement(eP.Provider,{value:t},e)}function Ph(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(kr),{matches:i}=U.useContext(Nr),{pathname:s}=No(),o=JSON.stringify(Ch(i,r.v7_relativeSplatPath));return U.useMemo(()=>Rh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function nP(t,e,n,r){ko()||de(!1);let{navigator:i}=U.useContext(kr),{matches:s}=U.useContext(Nr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=No(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let P=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(P.length).join("/")}let E=$i(t,{pathname:m});return aP(E&&E.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:gr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:gr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r)}function rP(){let t=hP(),e=ll(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const iP=U.createElement(rP,null);class sP extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Nr.Provider,{value:this.props.routeContext},U.createElement(lI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oP(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(Nl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Nr.Provider,{value:e},r)}function aP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||de(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:E}=n,A=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,A=!1,P=null,b=null;n&&(E=l&&f.route.id?l[f.route.id]:void 0,P=f.route.errorElement||iP,u&&(c<0&&m===0?(fP("route-fallback"),A=!0,b=null):c===m&&(A=!0,b=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),v=()=>{let R;return E?R=P:A?R=b:f.route.Component?R=U.createElement(f.route.Component,null):f.route.element?R=f.route.element:R=d,U.createElement(oP,{match:f,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:R})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?U.createElement(sP,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):v()},null)}var cI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(cI||{}),hI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hI||{});function lP(t){let e=U.useContext(Nl);return e||de(!1),e}function uP(t){let e=U.useContext(bm);return e||de(!1),e}function cP(t){let e=U.useContext(Nr);return e||de(!1),e}function dI(t){let e=cP(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function hP(){var t;let e=U.useContext(lI),n=uP(hI.UseRouteError),r=dI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function dP(){let{router:t}=lP(cI.UseNavigateStable),e=dI(),n=U.useRef(!1);return uI(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,jc({fromRouteId:e},s)))},[t,e])}const L_={};function fP(t,e,n){L_[t]||(L_[t]=!0)}function pP(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function mP(t){let{to:e,replace:n,state:r,relative:i}=t;ko()||de(!1);let{future:s,static:o}=U.useContext(kr),{matches:l}=U.useContext(Nr),{pathname:u}=No(),c=Om(),d=Rh(e,Ch(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return U.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function gP(t){return tP(t.context)}function yP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tt.Pop,navigator:s,static:o=!1,future:l}=t;ko()&&de(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:jc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=xr(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:A="default"}=r,P=U.useMemo(()=>{let b=Tr(d,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:E,key:A},navigationType:i}},[u,d,f,m,E,A,i]);return P==null?null:U.createElement(kr.Provider,{value:c},U.createElement(Dm.Provider,{children:n,value:P}))}new Promise(()=>{});function _P(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _o(){return _o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_o.apply(this,arguments)}function fI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function wP(t,e){return t.button===0&&(!e||e==="_self")&&!vP(t)}const EP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],TP=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],IP="6";try{window.__reactRouterVersion=IP}catch{}function SP(t,e){return bR({basename:void 0,future:_o({},void 0,{v7_prependBasename:!0}),history:nR({window:void 0}),hydrationData:AP(),routes:t,mapRouteProperties:_P,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function AP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=_o({},e,{errors:CP(e.errors)})),e}function CP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Fc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const pI=U.createContext({isTransitioning:!1}),RP=U.createContext(new Map),PP="startTransition",M_=zA[PP],xP="flushSync",V_=tR[xP];function kP(t){M_?M_(t):t()}function fa(t){V_?V_(t):t()}let NP=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function bP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,l]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,f]=U.useState(),[m,E]=U.useState(),[A,P]=U.useState(),b=U.useRef(new Map),{v7_startTransition:S}=r||{},v=U.useCallback(y=>{S?kP(y):y()},[S]),R=U.useCallback((y,T)=>{let{deletedFetchers:I,flushSync:k,viewTransitionOpts:N}=T;y.fetchers.forEach((Ne,mt)=>{Ne.data!==void 0&&b.current.set(mt,Ne.data)}),I.forEach(Ne=>b.current.delete(Ne));let C=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!N||C){k?fa(()=>s(y)):v(()=>s(y));return}if(k){fa(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let Ne=n.window.document.startViewTransition(()=>{fa(()=>s(y))});Ne.finished.finally(()=>{fa(()=>{f(void 0),E(void 0),l(void 0),c({isTransitioning:!1})})}),fa(()=>E(Ne));return}m?(d&&d.resolve(),m.skipTransition(),P({state:y,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(l(y),c({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,m,d,b,v]);U.useLayoutEffect(()=>n.subscribe(R),[n,R]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new NP)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let y=o,T=d.promise,I=n.window.document.startViewTransition(async()=>{v(()=>s(y)),await T});I.finished.finally(()=>{f(void 0),E(void 0),l(void 0),c({isTransitioning:!1})}),E(I)}},[v,o,d,n.window]),U.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&A&&(l(A.state),c({isTransitioning:!0,flushSync:!1,currentLocation:A.currentLocation,nextLocation:A.nextLocation}),P(void 0))},[u.isTransitioning,A]),U.useEffect(()=>{},[]);let L=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:y=>n.navigate(y),push:(y,T,I)=>n.navigate(y,{state:T,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(y,T,I)=>n.navigate(y,{replace:!0,state:T,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[n]),B=n.basename||"/",H=U.useMemo(()=>({router:n,navigator:L,static:!1,basename:B}),[n,L,B]),g=U.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return U.useEffect(()=>pP(r,n.future),[r,n.future]),U.createElement(U.Fragment,null,U.createElement(Nl.Provider,{value:H},U.createElement(bm.Provider,{value:i},U.createElement(RP.Provider,{value:b.current},U.createElement(pI.Provider,{value:u},U.createElement(yP,{basename:B,location:i.location,navigationType:i.historyAction,navigator:L,future:g},i.initialized||n.future.v7_partialHydration?U.createElement(DP,{routes:n.routes,future:n.future,state:i}):e))))),null)}const DP=U.memo(OP);function OP(t){let{routes:e,future:n,state:r}=t;return nP(e,void 0,r,n)}const LP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",MP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ro=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=fI(e,EP),{basename:E}=U.useContext(kr),A,P=!1;if(typeof c=="string"&&MP.test(c)&&(A=c,LP))try{let R=new URL(window.location.href),L=c.startsWith("//")?new URL(R.protocol+c):new URL(c),B=Tr(L.pathname,E);L.origin===R.origin&&B!=null?c=B+L.search+L.hash:P=!0}catch{}let b=JR(c,{relative:i}),S=UP(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function v(R){r&&r(R),R.defaultPrevented||S(R)}return U.createElement("a",_o({},m,{href:A||b,onClick:P||s?r:v,ref:n,target:u}))}),$n=U.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=e,f=fI(e,TP),m=Ph(u,{relative:f.relative}),E=No(),A=U.useContext(bm),{navigator:P,basename:b}=U.useContext(kr),S=A!=null&&FP(m)&&c===!0,v=P.encodeLocation?P.encodeLocation(m).pathname:m.pathname,R=E.pathname,L=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;i||(R=R.toLowerCase(),L=L?L.toLowerCase():null,v=v.toLowerCase()),L&&b&&(L=Tr(L,b)||L);const B=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let H=R===v||!o&&R.startsWith(v)&&R.charAt(B)==="/",g=L!=null&&(L===v||!o&&L.startsWith(v)&&L.charAt(v.length)==="/"),y={isActive:H,isPending:g,isTransitioning:S},T=H?r:void 0,I;typeof s=="function"?I=s(y):I=[s,H?"active":null,g?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(y):l;return U.createElement(ro,_o({},f,{"aria-current":T,className:I,ref:n,style:k,to:u,viewTransition:c}),typeof d=="function"?d(y):d)});var np;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(np||(np={}));var U_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(U_||(U_={}));function VP(t){let e=U.useContext(Nl);return e||de(!1),e}function UP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Om(),c=No(),d=Ph(t,{relative:o});return U.useCallback(f=>{if(wP(f,n)){f.preventDefault();let m=r!==void 0?r:is(c)===is(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function FP(t,e){e===void 0&&(e={});let n=U.useContext(pI);n==null&&de(!1);let{basename:r}=VP(np.useViewTransitionState),i=Ph(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Tr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Tr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Uc(i.pathname,o)!=null||Uc(i.pathname,s)!=null}function jP(){const[t,e]=U.useState(!1);return w.jsxs("header",{className:"sticky top-0 z-20 border-b border-rose/40 bg-blush/80 backdrop-blur font-sans",children:[w.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-3 flex items-center justify-between",children:[w.jsxs(ro,{to:"/",className:"flex items-center gap-2",onClick:()=>e(!1),children:[w.jsx("div",{className:"h-9 w-9 rounded-xl bg-rose text-ivory flex items-center justify-center shadow-md",children:"📷"}),w.jsx("span",{className:"text-base font-serif font-semibold tracking-tight text-charcoal",children:"Lama Photo NC"})]}),w.jsxs("nav",{className:"hidden md:flex gap-6 text-sm text-charcoal",children:[w.jsx($n,{to:"/portfolio",className:"hover:text-gold transition-colors",children:"Portfolio"}),w.jsx($n,{to:"/booking",className:"hover:text-gold transition-colors",children:"Book"}),w.jsx($n,{to:"/client",className:"hover:text-gold transition-colors",children:"Clients"}),w.jsx($n,{to:"/faq",className:"hover:text-gold transition-colors",children:"FAQ"}),w.jsx($n,{to:"/admin",className:"hover:text-gold transition-colors",children:"Admin"})]}),w.jsx(ro,{to:"/booking",className:"hidden md:block",children:w.jsx("button",{className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md",children:"Book Now →"})}),w.jsx("button",{"aria-label":"Toggle menu",onClick:()=>e(n=>!n),className:"block md:hidden p-2 rounded-lg bg-rose text-ivory",children:"☰"})]}),w.jsxs("div",{className:`${t?"block":"hidden"} md:hidden border-t border-rose/40 bg-blush/80 px-4 py-3 space-y-3`,children:[w.jsx($n,{to:"/portfolio",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Portfolio"}),w.jsx($n,{to:"/booking",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Book"}),w.jsx($n,{to:"/client",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Clients"}),w.jsx($n,{to:"/faq",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"FAQ"}),w.jsx($n,{to:"/admin",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Admin"}),w.jsx(ro,{to:"/booking",onClick:()=>e(!1),children:w.jsx("button",{className:"w-full mt-2 rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md",children:"Book Now →"})})]})]})}function $P(){return w.jsx("footer",{className:"border-t border-rose/40 bg-blush/20 py-10 font-sans",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4 text-sm text-charcoal flex flex-col md:flex-row items-center justify-between gap-3",children:[w.jsxs("div",{className:"font-serif text-rose",children:["© ",new Date().getFullYear()," Lama NC"]}),w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsx("a",{href:"mailto:hello@example.com",className:"hover:text-gold transition-colors",children:"hello@example.com"}),w.jsx("a",{href:"tel:+15551234567",className:"hover:text-gold transition-colors",children:"(555) 123-4567"})]})]})})}function BP(){return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(jP,{}),w.jsx("main",{className:"flex-1",children:w.jsx(gP,{})}),w.jsx($P,{})]})}function zP(){return w.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center",children:[w.jsxs("div",{children:[w.jsx("h1",{className:"text-3xl md:text-5xl font-serif font-semibold leading-tight text-charcoal",children:"Book stunning, story-driven photography."}),w.jsx("p",{className:"mt-4 text-charcoal/70 text-base md:text-lg",children:"Portraits, events, and weddings—crafted with care and delivered fast. Pick a package, choose a time, and lock it in."}),w.jsxs("div",{className:"mt-6 flex gap-3",children:[w.jsx(ro,{to:"/booking",className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Start Booking"}),w.jsx(ro,{to:"/portfolio",className:"px-5 py-3 rounded-full border border-rose/40 text-sm font-semibold text-charcoal hover:bg-blush/50 transition-all",children:"View Portfolio"})]}),w.jsxs("div",{className:"mt-6 flex items-center gap-2 text-sm text-charcoal/70",children:[w.jsx("span",{children:"★★★★★"}),w.jsx("span",{children:"100+ happy clients"})]})]}),w.jsx("div",{className:"glass rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-rose/30 p-4 md:p-6 bg-white/80",children:w.jsx("img",{className:"rounded-xl w-full object-cover aspect-[4/3]",src:"https://picsum.photos/800/600?blur=0",alt:"Featured photography sample"})})]})})}const F_="lamaphoto",HP="portfolio";function WP(){const[t,e]=U.useState([]),[n,r]=U.useState("");return U.useEffect(()=>{(async()=>{try{const i=await fetch(`https://res.cloudinary.com/${F_}/image/list/${HP}.json`,{cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.json();e(s.resources||[])}catch(i){console.error(i),r("Could not load images. Check Cloudinary ‘Asset lists’ setting and that photos are tagged ‘portfolio’.")}})()},[]),w.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Portfolio"}),w.jsxs("p",{className:"mt-2 text-charcoal/70",children:["Uploads with the ",w.jsx("code",{children:"portfolio"})," tag appear here automatically."]}),n&&w.jsx("div",{className:"mt-4 text-red-700 text-sm",children:n}),w.jsx("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",children:t.map(i=>{const s=`https://res.cloudinary.com/${F_}/image/upload/c_fill,g_auto,f_auto,q_auto,w_800,h_800/${i.public_id}.${i.format}`;return w.jsx("div",{className:"overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow",children:w.jsx("img",{src:s,alt:i.public_id,loading:"lazy",className:"w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"})},i.public_id)})}),!n&&t.length===0&&w.jsxs("div",{className:"mt-6 text-charcoal/60",children:["No images yet. Upload in ",w.jsx("code",{children:"/admin"}),"."]})]})})}function qP({step:t}){const e=["Package","Date & Time","Details","Review"];return w.jsx("div",{className:"flex items-center gap-3 font-sans",children:e.map((n,r)=>w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:`h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold shadow-sm transition-all ${r<=t?"bg-rose text-ivory":"bg-blush/40 text-charcoal/70"}`,children:r+1}),w.jsx("span",{className:`hidden sm:block text-sm transition-colors ${r===t?"font-semibold text-charcoal":"text-charcoal/60"}`,children:n}),r<e.length-1&&w.jsx("div",{className:`w-6 sm:w-10 h-px transition-colors ${r<t?"bg-rose/70":"bg-blush/50"}`})]},n))})}function GP({p:t,selected:e,onSelect:n}){return w.jsxs("div",{className:`glass rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 ${e?"border-rose":"border-transparent"} p-5 md:p-6 bg-ivory`,children:[w.jsxs("div",{className:"flex items-start justify-between gap-3",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:t.name}),w.jsx("p",{className:"text-rose/80",children:t.desc})]}),w.jsxs("div",{className:"text-right",children:[w.jsxs("div",{className:"text-2xl font-bold text-rose",children:["$",t.price]}),w.jsx("div",{className:"text-xs text-charcoal/60",children:t.duration})]})]}),w.jsx("ul",{className:"mt-4 space-y-2 text-sm text-charcoal/80",children:t.includes.map((r,i)=>w.jsxs("li",{children:["✔️ ",r]},i))}),w.jsx("div",{className:"mt-5",children:w.jsx("button",{onClick:n,className:`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${e?"bg-gold text-charcoal hover:bg-rose hover:text-ivory":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:e?"Selected":"Select"})})]})}const KP=()=>{};var j_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new YP;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),f!==64){const A=c<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let YP=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const XP=function(t){const e=mI(t);return gI.encodeByteArray(e,!0)},$c=function(t){return XP(t).replace(/\./g,"")},yI=function(t){try{return gI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP=()=>JP().__FIREBASE_DEFAULTS__,ex=()=>{if(typeof process>"u"||typeof j_>"u")return;const t=j_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yI(t[1]);return e&&JSON.parse(e)},xh=()=>{try{return KP()||ZP()||ex()||tx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_I=t=>{var e,n;return(n=(e=xh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},nx=t=>{const e=_I(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vI=()=>{var t;return(t=xh())==null?void 0:t.config},wI=t=>{var e;return(e=xh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function EI(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[$c(JSON.stringify(n)),$c(JSON.stringify(o)),""].join(".")}const La={};function sx(){const t={prod:[],emulator:[]};for(const e of Object.keys(La))La[e]?t.emulator.push(e):t.prod.push(e);return t}function ox(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let $_=!1;function TI(t,e){if(typeof window>"u"||typeof document>"u"||!bo(window.location.host)||La[t]===e||La[t]||$_)return;La[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=sx().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,E){m.setAttribute("width","24"),m.setAttribute("id",E),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{$_=!0,o()},m}function d(m,E){m.setAttribute("id",E),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=ox(r),E=n("text"),A=document.getElementById(E)||document.createElement("span"),P=n("learnmore"),b=document.getElementById(P)||document.createElement("a"),S=n("preprendIcon"),v=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const R=m.element;l(R),d(b,P);const L=c();u(v,S),R.append(v,A,b,L),document.body.appendChild(R)}s?(A.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ax(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function lx(){var e;const t=(e=xh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ux(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dx(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fx(){return!lx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function px(){try{return typeof indexedDB=="object"}catch{return!1}}function mx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="FirebaseError";let fs=class II extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gx,Object.setPrototypeOf(this,II.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bl.prototype.create)}},bl=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new fs(i,l,r)}};function yx(t,e){return t.replace(_x,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _x=/\{\$([^}]+)}/g;function vx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ss(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(B_(s)&&B_(o)){if(!ss(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function B_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function wa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wx(t,e){const n=new Ex(t,e);return n.subscribe.bind(n)}let Ex=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Tx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ud),i.error===void 0&&(i.error=Ud),i.complete===void 0&&(i.complete=Ud);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Tx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ud(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return t&&t._delegate?t._delegate:t}let os=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ax(e))try{this.getOrInitializeService({instanceIdentifier:ji})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ji){return this.instances.has(e)}getOptions(e=ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ji){return this.component?this.component.multipleInstances?e:ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sx(t){return t===ji?void 0:t}function Ax(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ix(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const Rx={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Px=me.INFO,xx={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},kx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Lm=class{constructor(e){this.name=e,this._logLevel=Px,this._logHandler=kx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}};const Nx=(t,e)=>e.some(n=>t instanceof n);let z_,H_;function bx(){return z_||(z_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dx(){return H_||(H_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SI=new WeakMap,rp=new WeakMap,AI=new WeakMap,Fd=new WeakMap,Mm=new WeakMap;function Ox(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ui(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&SI.set(n,t)}).catch(()=>{}),Mm.set(e,t),e}function Lx(t){if(rp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rp.set(t,e)}let ip={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Mx(t){ip=t(ip)}function Vx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jd(this),e,...n);return AI.set(r,e.sort?e.sort():[e]),ui(r)}:Dx().includes(t)?function(...e){return t.apply(jd(this),e),ui(SI.get(this))}:function(...e){return ui(t.apply(jd(this),e))}}function Ux(t){return typeof t=="function"?Vx(t):(t instanceof IDBTransaction&&Lx(t),Nx(t,bx())?new Proxy(t,ip):t)}function ui(t){if(t instanceof IDBRequest)return Ox(t);if(Fd.has(t))return Fd.get(t);const e=Ux(t);return e!==t&&(Fd.set(t,e),Mm.set(e,t)),e}const jd=t=>Mm.get(t);function Fx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ui(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ui(o.result),u.oldVersion,u.newVersion,ui(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const jx=["get","getKey","getAll","getAllKeys","count"],$x=["put","add","delete","clear"],$d=new Map;function W_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($d.get(e))return $d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return $d.set(e,s),s}Mx(t=>({...t,get:(e,n,r)=>W_(e,n)||t.get(e,n,r),has:(e,n)=>!!W_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bx=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function zx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sp="@firebase/app",q_="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Lm("@firebase/app"),Hx="@firebase/app-compat",Wx="@firebase/analytics-compat",qx="@firebase/analytics",Gx="@firebase/app-check-compat",Kx="@firebase/app-check",Qx="@firebase/auth",Yx="@firebase/auth-compat",Xx="@firebase/database",Jx="@firebase/data-connect",Zx="@firebase/database-compat",ek="@firebase/functions",tk="@firebase/functions-compat",nk="@firebase/installations",rk="@firebase/installations-compat",ik="@firebase/messaging",sk="@firebase/messaging-compat",ok="@firebase/performance",ak="@firebase/performance-compat",lk="@firebase/remote-config",uk="@firebase/remote-config-compat",ck="@firebase/storage",hk="@firebase/storage-compat",dk="@firebase/firestore",fk="@firebase/ai",pk="@firebase/firestore-compat",mk="firebase",gk="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="[DEFAULT]",yk={[sp]:"fire-core",[Hx]:"fire-core-compat",[qx]:"fire-analytics",[Wx]:"fire-analytics-compat",[Kx]:"fire-app-check",[Gx]:"fire-app-check-compat",[Qx]:"fire-auth",[Yx]:"fire-auth-compat",[Xx]:"fire-rtdb",[Jx]:"fire-data-connect",[Zx]:"fire-rtdb-compat",[ek]:"fire-fn",[tk]:"fire-fn-compat",[nk]:"fire-iid",[rk]:"fire-iid-compat",[ik]:"fire-fcm",[sk]:"fire-fcm-compat",[ok]:"fire-perf",[ak]:"fire-perf-compat",[lk]:"fire-rc",[uk]:"fire-rc-compat",[ck]:"fire-gcs",[hk]:"fire-gcs-compat",[dk]:"fire-fst",[pk]:"fire-fst-compat",[fk]:"fire-vertex","fire-js":"fire-js",[mk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new Map,_k=new Map,ap=new Map;function G_(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vo(t){const e=t.name;if(ap.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;ap.set(e,t);for(const n of Bc.values())G_(n,t);for(const n of _k.values())G_(n,t);return!0}function Vm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ci=new bl("app","Firebase",vk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ci.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=gk;function CI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:op,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ci.create("bad-app-name",{appName:String(i)});if(n||(n=vI()),!n)throw ci.create("no-options");const s=Bc.get(i);if(s){if(ss(n,s.options)&&ss(r,s.config))return s;throw ci.create("duplicate-app",{appName:i})}const o=new Cx(i);for(const u of ap.values())o.addComponent(u);const l=new wk(n,r,o);return Bc.set(i,l),l}function RI(t=op){const e=Bc.get(t);if(!e&&t===op&&vI())return CI();if(!e)throw ci.create("no-app",{appName:t});return e}function hi(t,e,n){let r=yk[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(o.join(" "));return}vo(new os(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="firebase-heartbeat-database",Tk=1,ul="firebase-heartbeat-store";let Bd=null;function PI(){return Bd||(Bd=Fx(Ek,Tk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ul)}catch(n){console.warn(n)}}}}).catch(t=>{throw ci.create("idb-open",{originalErrorMessage:t.message})})),Bd}async function Ik(t){try{const n=(await PI()).transaction(ul),r=await n.objectStore(ul).get(xI(t));return await n.done,r}catch(e){if(e instanceof fs)Ir.warn(e.message);else{const n=ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function K_(t,e){try{const r=(await PI()).transaction(ul,"readwrite");await r.objectStore(ul).put(e,xI(t)),await r.done}catch(n){if(n instanceof fs)Ir.warn(n.message);else{const r=ci.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(r.message)}}}function xI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=1024,Ak=30;let Ck=class{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Q_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Ak){const o=xk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Q_(),{heartbeatsToSend:r,unsentEntries:i}=Rk(this._heartbeatsCache.heartbeats),s=$c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ir.warn(n),""}}};function Q_(){return new Date().toISOString().substring(0,10)}function Rk(t,e=Sk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Y_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Y_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}let Pk=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return px()?mx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ik(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return K_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return K_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}};function Y_(t){return $c(JSON.stringify({version:2,heartbeats:t})).length}function xk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t){vo(new os("platform-logger",e=>new Bx(e),"PRIVATE")),vo(new os("heartbeat",e=>new Ck(e),"PRIVATE")),hi(sp,q_,t),hi(sp,q_,"esm2020"),hi("fire-js","")}kk("");var Nk="firebase",bk="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi(Nk,bk,"app");function kI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dk=kI,NI=new bl("auth","Firebase",kI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Lm("@firebase/auth");function Ok(t,...e){zc.logLevel<=me.WARN&&zc.warn(`Auth (${Do}): ${t}`,...e)}function ec(t,...e){zc.logLevel<=me.ERROR&&zc.error(`Auth (${Do}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw Um(t,...e)}function Kn(t,...e){return Um(t,...e)}function bI(t,e,n){const r={...Dk(),[e]:n};return new bl("auth","Firebase",r).create(e,{appName:t.name})}function di(t){return bI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Um(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NI.create(t,...e)}function ie(t,e,...n){if(!t)throw Um(e,...n)}function fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ec(e),new Error(e)}function Sr(t,e){t||fr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Lk(){return X_()==="http:"||X_()==="https:"}function X_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lk()||cx()||"connection"in navigator)?navigator.onLine:!0}function Vk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=ax()||hx()}get(){return Mk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DI=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jk=new Ol(3e4,6e4);function ps(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ri(t,e,n,r,i={}){return OI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Dl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return ux()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&bo(t.emulatorConfig.host)&&(c.credentials="include"),DI.fetch()(await LI(t,t.config.apiHost,n,l),c)})}async function OI(t,e,n){t._canInitEmulator=!1;const r={...Uk,...e};try{const i=new Bk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ru(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ru(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ru(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ru(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bI(t,d,c);bn(t,d)}}catch(i){if(i instanceof fs)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function kh(t,e,n,r,i={}){const s=await Ri(t,e,n,r,i);return"mfaPendingCredential"in s&&bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function LI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Fm(t.config,i):`${t.config.apiScheme}://${i}`;return Fk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function $k(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let Bk=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kn(this.auth,"network-request-failed")),jk.get())})}};function Ru(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kn(t,e,r);return i.customData._tokenResponse=n,i}function J_(t){return t!==void 0&&t.enterprise!==void 0}class zk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $k(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Hk(t,e){return Ri(t,"GET","/v2/recaptchaConfig",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){return Ri(t,"POST","/v1/accounts:delete",e)}async function Hc(t,e){return Ri(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qk(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),i=jm(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ma(zd(i.auth_time)),issuedAtTime:Ma(zd(i.iat)),expirationTime:Ma(zd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zd(t){return Number(t)*1e3}function jm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const i=yI(n);return i?JSON.parse(i):(ec("Failed to decode base64 JWT payload"),null)}catch(i){return ec("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Z_(t){const e=jm(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fs&&Gk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Gk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kk=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let up=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(t){var f;const e=t.auth,n=await t.getIdToken(),r=await cl(t,Hc(e,{idToken:n}));ie(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?MI(i.providerUserInfo):[],o=Yk(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new up(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Qk(t){const e=Mt(t);await Wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e){const n=await OI(t,{},async()=>{const r=Dl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await LI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&bo(t.emulatorConfig.host)&&(u.credentials="include"),DI.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jk(t,e){return Ri(t,"POST","/v2/accounts:revokeToken",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hd=class cp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Z_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Z_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Xk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new cp;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new cp,this.toJSON())}_performRefresh(){return fr("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let Ks=class Ta{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new up(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cl(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qk(this,e)}reload(){return Qk(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ta({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(di(this.auth));const e=await this.getIdToken();return await cl(this,Wk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:E,providerData:A,stsTokenManager:P}=n;ie(f&&P,e,"internal-error");const b=Hd.fromJSON(this.name,P);ie(typeof f=="string",e,"internal-error"),Fr(r,e.name),Fr(i,e.name),ie(typeof m=="boolean",e,"internal-error"),ie(typeof E=="boolean",e,"internal-error"),Fr(s,e.name),Fr(o,e.name),Fr(l,e.name),Fr(u,e.name),Fr(c,e.name),Fr(d,e.name);const S=new Ta({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:d});return A&&Array.isArray(A)&&(S.providerData=A.map(v=>({...v}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hd;i.updateFromServerResponse(n);const s=new Ta({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?MI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Hd;l.updateFromIdToken(r);const u=new Ta({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new up(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=new Map;function pr(t){Sr(t instanceof Function,"Expected a class definition");let e=ev.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ev.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VI=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};VI.type="NONE";const tv=VI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e,n){return`firebase:${t}:${e}:${n}`}let nv=class nc{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=tc(this.userKey,i.apiKey,s),this.fullPersistenceKey=tc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hc(this.auth,{idToken:e}).catch(()=>{});return n?Ks._fromGetAccountInfoResponse(this.auth,n,e):null}return Ks._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nc(pr(tv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||pr(tv);const o=tc(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await Hc(e,{idToken:d}).catch(()=>{});if(!m)break;f=await Ks._fromGetAccountInfoResponse(e,m,d)}else f=Ks._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new nc(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new nc(s,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($I(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(UI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zI(e))return"Blackberry";if(HI(e))return"Webos";if(FI(e))return"Safari";if((e.includes("chrome/")||jI(e))&&!e.includes("edge/"))return"Chrome";if(BI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function UI(t=Lt()){return/firefox\//i.test(t)}function FI(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jI(t=Lt()){return/crios\//i.test(t)}function $I(t=Lt()){return/iemobile/i.test(t)}function BI(t=Lt()){return/android/i.test(t)}function zI(t=Lt()){return/blackberry/i.test(t)}function HI(t=Lt()){return/webos/i.test(t)}function $m(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zk(t=Lt()){var e;return $m(t)&&!!((e=window.navigator)!=null&&e.standalone)}function eN(){return dx()&&document.documentMode===10}function WI(t=Lt()){return $m(t)||BI(t)||HI(t)||zI(t)||/windows phone/i.test(t)||$I(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e=[]){let n;switch(t){case"Browser":n=rv(Lt());break;case"Worker":n=`${rv(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Do}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tN=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t,e={}){return Ri(t,"GET","/v2/passwordPolicy",ps(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN=6;let iN=class{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??rN,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sN=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iv(this),this.idTokenSubscription=new iv(this),this.beforeStateQueue=new tN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await nv.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hc(this,{idToken:e}),r=await Ks._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(di(this));const n=e?Mt(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(di(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(di(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nN(this),n=new iN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pr(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await nv.create(this,[pr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Pn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Ok(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}};function Oo(t){return Mt(t)}let iv=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=wx(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oN(t){Nh=t}function GI(t){return Nh.loadJS(t)}function aN(){return Nh.recaptchaEnterpriseScript}function lN(){return Nh.gapiScript}function uN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class cN{constructor(){this.enterprise=new hN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class hN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const dN="recaptcha-enterprise",KI="NO_RECAPTCHA";class fN{constructor(e){this.type=dN,this.auth=Oo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Hk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new zk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;J_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(KI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new cN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&J_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=aN();u.length!==0&&(u+=l),GI(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function sv(t,e,n,r=!1,i=!1){const s=new fN(t);let o;if(i)o=KI;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ov(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await sv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await sv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t,e){const n=Vm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ss(s,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function mN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gN(t,e,n){const r=Oo(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=QI(e),{host:o,port:l}=yN(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(ss(c,r.config.emulator)&&ss(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,bo(o)?(EI(`${s}//${o}${u}`),TI("Auth",!0)):_N()}function QI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yN(t){const e=QI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:av(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:av(o)}}}function av(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _N(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}async function vN(t,e){return Ri(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wN(t,e){return kh(t,"POST","/v1/accounts:signInWithPassword",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(t,e){return kh(t,"POST","/v1/accounts:signInWithEmailLink",ps(t,e))}async function TN(t,e){return kh(t,"POST","/v1/accounts:signInWithEmailLink",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Bm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ov(e,n,"signInWithPassword",wN);case"emailLink":return EN(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ov(e,r,"signUpPassword",vN);case"emailLink":return TN(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e){return kh(t,"POST","/v1/accounts:signInWithIdp",ps(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="http://localhost";class as extends Bm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new as(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return io(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,io(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,io(e,n)}buildRequest(){const e={requestUri:IN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Dl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AN(t){const e=wa(Ea(t)).link,n=e?wa(Ea(e)).deep_link_id:null,r=wa(Ea(t)).deep_link_id;return(r?wa(Ea(r)).link:null)||r||n||e||t}class zm{constructor(e){const n=wa(Ea(e)),r=n.apiKey??null,i=n.oobCode??null,s=SN(n.mode??null);ie(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=AN(e);try{return new zm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(){this.providerId=Lo.PROVIDER_ID}static credential(e,n){return hl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zm.parseLink(n);return ie(r,"argument-error"),hl._fromEmailAndCode(e,r.code,r.tenantId)}}Lo.PROVIDER_ID="password";Lo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends YI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Ll{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Ll{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gr.credential(n,r)}catch{return null}}}Gr.GOOGLE_SIGN_IN_METHOD="google.com";Gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Ll{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.GITHUB_SIGN_IN_METHOD="github.com";Kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Ll{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qr.credential(n,r)}catch{return null}}}Qr.TWITTER_SIGN_IN_METHOD="twitter.com";Qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ks._fromIdTokenResponse(e,r,i),o=lv(r);return new wo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=lv(r);return new wo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function lv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends fs{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qc(e,n,r,i)}}function XI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(t,s,e,r):s})}async function CN(t,e,n=!1){const r=await cl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wo._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e,n=!1){const{auth:r}=t;if(Pn(r.app))return Promise.reject(di(r));const i="reauthenticate";try{const s=await cl(t,XI(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=jm(s.idToken);ie(o,r,"internal-error");const{sub:l}=o;return ie(t.uid===l,r,"user-mismatch"),wo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e,n=!1){if(Pn(t.app))return Promise.reject(di(t));const r="signIn",i=await XI(t,r,e),s=await wo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function PN(t,e){return JI(Oo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xN(t){const e=Oo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function kN(t,e,n){return Pn(t.app)?Promise.reject(di(t)):PN(Mt(t),Lo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&xN(t),r})}function NN(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function bN(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}const Gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gc,"1"),this.storage.removeItem(Gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=1e3,ON=10;class e0 extends ZI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=WI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ON):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e0.type="LOCAL";const LN=e0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0 extends ZI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t0.type="SESSION";const n0=t0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await MN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Hm("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}function UN(t){Qn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function FN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function $N(){return r0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0="firebaseLocalStorageDb",BN=1,Kc="firebaseLocalStorage",s0="fbase_key";class Ml{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dh(t,e){return t.transaction([Kc],e?"readwrite":"readonly").objectStore(Kc)}function zN(){const t=indexedDB.deleteDatabase(i0);return new Ml(t).toPromise()}function hp(){const t=indexedDB.open(i0,BN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kc,{keyPath:s0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kc)?e(r):(r.close(),await zN(),e(await hp()))})})}async function uv(t,e,n){const r=Dh(t,!0).put({[s0]:e,value:n});return new Ml(r).toPromise()}async function HN(t,e){const n=Dh(t,!1).get(e),r=await new Ml(n).toPromise();return r===void 0?null:r.value}function cv(t,e){const n=Dh(t,!0).delete(e);return new Ml(n).toPromise()}const WN=800,qN=3;class o0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bh._getInstance($N()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await FN(),!this.activeServiceWorker)return;this.sender=new VN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hp();return await uv(e,Gc,"1"),await cv(e,Gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>uv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dh(i,!1).getAll();return new Ml(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o0.type="LOCAL";const GN=o0;new Ol(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t,e){return e?pr(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm extends Bm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QN(t){return JI(t.auth,new Wm(t),t.bypassAuthState)}function YN(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),RN(n,new Wm(t),t.bypassAuthState)}async function XN(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),CN(n,new Wm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QN;case"linkViaPopup":case"linkViaRedirect":return XN;case"reauthViaPopup":case"reauthViaRedirect":return YN;default:bn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=new Ol(2e3,1e4);class Qs extends a0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qs.currentPopupAction&&Qs.currentPopupAction.cancel(),Qs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=Hm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JN.get())};e()}}Qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN="pendingRedirect",rc=new Map;class eb extends a0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=rc.get(this.auth._key());if(!e){try{const r=await tb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}rc.set(this.auth._key(),e)}return this.bypassAuthState||rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tb(t,e){const n=ib(e),r=rb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nb(t,e){rc.set(t._key(),e)}function rb(t){return pr(t._redirectPersistence)}function ib(t){return tc(ZN,t.config.apiKey,t.name)}async function sb(t,e,n=!1){if(Pn(t.app))return Promise.reject(di(t));const r=Oo(t),i=KN(r,e),o=await new eb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=10*60*1e3;class ab{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!l0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ob&&this.cachedEventUids.clear(),this.cachedEventUids.has(hv(e))}saveEventToCache(e){this.cachedEventUids.add(hv(e)),this.lastProcessedEventTime=Date.now()}}function hv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function l0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e={}){return Ri(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hb=/^https?/;async function db(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ub(t);for(const n of e)try{if(fb(n))return}catch{}bn(t,"unauthorized-domain")}function fb(t){const e=lp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hb.test(n))return!1;if(cb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb=new Ol(3e4,6e4);function dv(){const t=Qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mb(t){return new Promise((e,n)=>{var i,s,o;function r(){dv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dv(),n(Kn(t,"network-request-failed"))},timeout:pb.get()})}if((s=(i=Qn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Qn().gapi)!=null&&o.load)r();else{const l=uN("iframefcb");return Qn()[l]=()=>{gapi.load?r():n(Kn(t,"network-request-failed"))},GI(`${lN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ic=null,e})}let ic=null;function gb(t){return ic=ic||mb(t),ic}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=new Ol(5e3,15e3),_b="__/auth/iframe",vb="emulator/auth/iframe",wb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tb(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fm(e,vb):`https://${t.config.authDomain}/${_b}`,r={apiKey:e.apiKey,appName:t.name,v:Do},i=Eb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Dl(r).slice(1)}`}async function Ib(t){const e=await gb(t),n=Qn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:Tb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kn(t,"network-request-failed"),l=Qn().setTimeout(()=>{s(o)},yb.get());function u(){Qn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ab=500,Cb=600,Rb="_blank",Pb="http://localhost";class fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xb(t,e,n,r=Ab,i=Cb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Sb,width:r.toString(),height:i.toString(),top:s,left:o},c=Lt().toLowerCase();n&&(l=jI(c)?Rb:n),UI(c)&&(e=e||Pb,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,A])=>`${m}${E}=${A},`,"");if(Zk(c)&&l!=="_self")return kb(e||"",l),new fv(null);const f=window.open(e||"",l,d);ie(f,t,"popup-blocked");try{f.focus()}catch{}return new fv(f)}function kb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="__/auth/handler",bb="emulator/auth/handler",Db=encodeURIComponent("fac");async function pv(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Do,eventId:i};if(e instanceof YI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Ll){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Db}=${encodeURIComponent(u)}`:"";return`${Ob(t)}?${Dl(l).slice(1)}${c}`}function Ob({config:t}){return t.emulator?Fm(t,bb):`https://${t.authDomain}/${Nb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="webStorageSupport";class Lb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n0,this._completeRedirectFn=sb,this._overrideRedirectResult=nb}async _openPopup(e,n,r,i){var o;Sr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await pv(e,n,r,lp(),i);return xb(e,s,Hm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await pv(e,n,r,lp(),i);return UN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ib(e),r=new ab(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wd,{type:Wd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Wd];s!==void 0&&n(!!s),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=db(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WI()||FI()||$m()}}const Mb=Lb;var mv="@firebase/auth",gv="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vb=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fb(t){vo(new os("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qI(t)},c=new sN(r,i,s,u);return mN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vo(new os("auth-internal",e=>{const n=Oo(e.getProvider("auth").getImmediate());return(r=>new Vb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hi(mv,gv,Ub(t)),hi(mv,gv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=5*60,$b=wI("authIdTokenMaxAge")||jb;let yv=null;const Bb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$b)return;const i=n==null?void 0:n.token;yv!==i&&(yv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function zb(t=RI()){const e=Vm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pN(t,{popupRedirectResolver:Mb,persistence:[GN,LN,n0]}),r=wI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Bb(s.toString());bN(n,o,()=>o(n.currentUser)),NN(n,l=>o(l))}}const i=_I("auth");return i&&gN(n,`http://${i}`),n}function Hb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}oN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Hb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fb("Browser");var _v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fi,u0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function T(){}T.prototype=y.prototype,g.D=y.prototype,g.prototype=new T,g.prototype.constructor=g,g.C=function(I,k,N){for(var C=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)C[Ne-2]=arguments[Ne];return y.prototype[k].apply(I,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,y,T){T||(T=0);var I=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)I[k]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(k=0;16>k;++k)I[k]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=g.g[0],T=g.g[1],k=g.g[2];var N=g.g[3],C=y+(N^T&(k^N))+I[0]+3614090360&4294967295;y=T+(C<<7&4294967295|C>>>25),C=N+(k^y&(T^k))+I[1]+3905402710&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(T^N&(y^T))+I[2]+606105819&4294967295,k=N+(C<<17&4294967295|C>>>15),C=T+(y^k&(N^y))+I[3]+3250441966&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(N^T&(k^N))+I[4]+4118548399&4294967295,y=T+(C<<7&4294967295|C>>>25),C=N+(k^y&(T^k))+I[5]+1200080426&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(T^N&(y^T))+I[6]+2821735955&4294967295,k=N+(C<<17&4294967295|C>>>15),C=T+(y^k&(N^y))+I[7]+4249261313&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(N^T&(k^N))+I[8]+1770035416&4294967295,y=T+(C<<7&4294967295|C>>>25),C=N+(k^y&(T^k))+I[9]+2336552879&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(T^N&(y^T))+I[10]+4294925233&4294967295,k=N+(C<<17&4294967295|C>>>15),C=T+(y^k&(N^y))+I[11]+2304563134&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(N^T&(k^N))+I[12]+1804603682&4294967295,y=T+(C<<7&4294967295|C>>>25),C=N+(k^y&(T^k))+I[13]+4254626195&4294967295,N=y+(C<<12&4294967295|C>>>20),C=k+(T^N&(y^T))+I[14]+2792965006&4294967295,k=N+(C<<17&4294967295|C>>>15),C=T+(y^k&(N^y))+I[15]+1236535329&4294967295,T=k+(C<<22&4294967295|C>>>10),C=y+(k^N&(T^k))+I[1]+4129170786&4294967295,y=T+(C<<5&4294967295|C>>>27),C=N+(T^k&(y^T))+I[6]+3225465664&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(N^y))+I[11]+643717713&4294967295,k=N+(C<<14&4294967295|C>>>18),C=T+(N^y&(k^N))+I[0]+3921069994&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(T^k))+I[5]+3593408605&4294967295,y=T+(C<<5&4294967295|C>>>27),C=N+(T^k&(y^T))+I[10]+38016083&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(N^y))+I[15]+3634488961&4294967295,k=N+(C<<14&4294967295|C>>>18),C=T+(N^y&(k^N))+I[4]+3889429448&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(T^k))+I[9]+568446438&4294967295,y=T+(C<<5&4294967295|C>>>27),C=N+(T^k&(y^T))+I[14]+3275163606&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(N^y))+I[3]+4107603335&4294967295,k=N+(C<<14&4294967295|C>>>18),C=T+(N^y&(k^N))+I[8]+1163531501&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(k^N&(T^k))+I[13]+2850285829&4294967295,y=T+(C<<5&4294967295|C>>>27),C=N+(T^k&(y^T))+I[2]+4243563512&4294967295,N=y+(C<<9&4294967295|C>>>23),C=k+(y^T&(N^y))+I[7]+1735328473&4294967295,k=N+(C<<14&4294967295|C>>>18),C=T+(N^y&(k^N))+I[12]+2368359562&4294967295,T=k+(C<<20&4294967295|C>>>12),C=y+(T^k^N)+I[5]+4294588738&4294967295,y=T+(C<<4&4294967295|C>>>28),C=N+(y^T^k)+I[8]+2272392833&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^T)+I[11]+1839030562&4294967295,k=N+(C<<16&4294967295|C>>>16),C=T+(k^N^y)+I[14]+4259657740&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(T^k^N)+I[1]+2763975236&4294967295,y=T+(C<<4&4294967295|C>>>28),C=N+(y^T^k)+I[4]+1272893353&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^T)+I[7]+4139469664&4294967295,k=N+(C<<16&4294967295|C>>>16),C=T+(k^N^y)+I[10]+3200236656&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(T^k^N)+I[13]+681279174&4294967295,y=T+(C<<4&4294967295|C>>>28),C=N+(y^T^k)+I[0]+3936430074&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^T)+I[3]+3572445317&4294967295,k=N+(C<<16&4294967295|C>>>16),C=T+(k^N^y)+I[6]+76029189&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(T^k^N)+I[9]+3654602809&4294967295,y=T+(C<<4&4294967295|C>>>28),C=N+(y^T^k)+I[12]+3873151461&4294967295,N=y+(C<<11&4294967295|C>>>21),C=k+(N^y^T)+I[15]+530742520&4294967295,k=N+(C<<16&4294967295|C>>>16),C=T+(k^N^y)+I[2]+3299628645&4294967295,T=k+(C<<23&4294967295|C>>>9),C=y+(k^(T|~N))+I[0]+4096336452&4294967295,y=T+(C<<6&4294967295|C>>>26),C=N+(T^(y|~k))+I[7]+1126891415&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~T))+I[14]+2878612391&4294967295,k=N+(C<<15&4294967295|C>>>17),C=T+(N^(k|~y))+I[5]+4237533241&4294967295,T=k+(C<<21&4294967295|C>>>11),C=y+(k^(T|~N))+I[12]+1700485571&4294967295,y=T+(C<<6&4294967295|C>>>26),C=N+(T^(y|~k))+I[3]+2399980690&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~T))+I[10]+4293915773&4294967295,k=N+(C<<15&4294967295|C>>>17),C=T+(N^(k|~y))+I[1]+2240044497&4294967295,T=k+(C<<21&4294967295|C>>>11),C=y+(k^(T|~N))+I[8]+1873313359&4294967295,y=T+(C<<6&4294967295|C>>>26),C=N+(T^(y|~k))+I[15]+4264355552&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~T))+I[6]+2734768916&4294967295,k=N+(C<<15&4294967295|C>>>17),C=T+(N^(k|~y))+I[13]+1309151649&4294967295,T=k+(C<<21&4294967295|C>>>11),C=y+(k^(T|~N))+I[4]+4149444226&4294967295,y=T+(C<<6&4294967295|C>>>26),C=N+(T^(y|~k))+I[11]+3174756917&4294967295,N=y+(C<<10&4294967295|C>>>22),C=k+(y^(N|~T))+I[2]+718787259&4294967295,k=N+(C<<15&4294967295|C>>>17),C=T+(N^(k|~y))+I[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,g.g[2]=g.g[2]+k&4294967295,g.g[3]=g.g[3]+N&4294967295}r.prototype.u=function(g,y){y===void 0&&(y=g.length);for(var T=y-this.blockSize,I=this.B,k=this.h,N=0;N<y;){if(k==0)for(;N<=T;)i(this,g,N),N+=this.blockSize;if(typeof g=="string"){for(;N<y;)if(I[k++]=g.charCodeAt(N++),k==this.blockSize){i(this,I),k=0;break}}else for(;N<y;)if(I[k++]=g[N++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;var T=8*this.o;for(y=g.length-8;y<g.length;++y)g[y]=T&255,T/=256;for(this.u(g),g=Array(16),y=T=0;4>y;++y)for(var I=0;32>I;I+=8)g[T++]=this.g[y]>>>I&255;return g};function s(g,y){var T=l;return Object.prototype.hasOwnProperty.call(T,g)?T[g]:T[g]=y(g)}function o(g,y){this.h=y;for(var T=[],I=!0,k=g.length-1;0<=k;k--){var N=g[k]|0;I&&N==y||(T[k]=N,I=!1)}this.g=T}var l={};function u(g){return-128<=g&&128>g?s(g,function(y){return new o([y|0],0>y?-1:0)}):new o([g|0],0>g?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return f;if(0>g)return b(c(-g));for(var y=[],T=1,I=0;g>=T;I++)y[I]=g/T|0,T*=4294967296;return new o(y,0)}function d(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return b(d(g.substring(1),y));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),I=f,k=0;k<g.length;k+=8){var N=Math.min(8,g.length-k),C=parseInt(g.substring(k,k+N),y);8>N?(N=c(Math.pow(y,N)),I=I.j(N).add(c(C))):(I=I.j(T),I=I.add(c(C)))}return I}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var g=0,y=1,T=0;T<this.g.length;T++){var I=this.i(T);g+=(0<=I?I:4294967296+I)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(A(this))return"0";if(P(this))return"-"+b(this).toString(g);for(var y=c(Math.pow(g,6)),T=this,I="";;){var k=L(T,y).g;T=S(T,k.j(y));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(g);if(T=k,A(T))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function A(g){if(g.h!=0)return!1;for(var y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function P(g){return g.h==-1}t.l=function(g){return g=S(this,g),P(g)?-1:A(g)?0:1};function b(g){for(var y=g.g.length,T=[],I=0;I<y;I++)T[I]=~g.g[I];return new o(T,~g.h).add(m)}t.abs=function(){return P(this)?b(this):this},t.add=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],I=0,k=0;k<=y;k++){var N=I+(this.i(k)&65535)+(g.i(k)&65535),C=(N>>>16)+(this.i(k)>>>16)+(g.i(k)>>>16);I=C>>>16,N&=65535,C&=65535,T[k]=C<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(g,y){return g.add(b(y))}t.j=function(g){if(A(this)||A(g))return f;if(P(this))return P(g)?b(this).j(b(g)):b(b(this).j(g));if(P(g))return b(this.j(b(g)));if(0>this.l(E)&&0>g.l(E))return c(this.m()*g.m());for(var y=this.g.length+g.g.length,T=[],I=0;I<2*y;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<g.g.length;k++){var N=this.i(I)>>>16,C=this.i(I)&65535,Ne=g.i(k)>>>16,mt=g.i(k)&65535;T[2*I+2*k]+=C*mt,v(T,2*I+2*k),T[2*I+2*k+1]+=N*mt,v(T,2*I+2*k+1),T[2*I+2*k+1]+=C*Ne,v(T,2*I+2*k+1),T[2*I+2*k+2]+=N*Ne,v(T,2*I+2*k+2)}for(I=0;I<y;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=y;I<2*y;I++)T[I]=0;return new o(T,0)};function v(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function R(g,y){this.g=g,this.h=y}function L(g,y){if(A(y))throw Error("division by zero");if(A(g))return new R(f,f);if(P(g))return y=L(b(g),y),new R(b(y.g),b(y.h));if(P(y))return y=L(g,b(y)),new R(b(y.g),y.h);if(30<g.g.length){if(P(g)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,I=y;0>=I.l(g);)T=B(T),I=B(I);var k=H(T,1),N=H(I,1);for(I=H(I,2),T=H(T,2);!A(I);){var C=N.add(I);0>=C.l(g)&&(k=k.add(T),N=C),I=H(I,1),T=H(T,1)}return y=S(g,k.j(y)),new R(k,y)}for(k=f;0<=g.l(y);){for(T=Math.max(1,Math.floor(g.m()/y.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=c(T),C=N.j(y);P(C)||0<C.l(g);)T-=I,N=c(T),C=N.j(y);A(N)&&(N=m),k=k.add(N),g=S(g,C)}return new R(k,g)}t.A=function(g){return L(this,g).h},t.and=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],I=0;I<y;I++)T[I]=this.i(I)&g.i(I);return new o(T,this.h&g.h)},t.or=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],I=0;I<y;I++)T[I]=this.i(I)|g.i(I);return new o(T,this.h|g.h)},t.xor=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],I=0;I<y;I++)T[I]=this.i(I)^g.i(I);return new o(T,this.h^g.h)};function B(g){for(var y=g.g.length+1,T=[],I=0;I<y;I++)T[I]=g.i(I)<<1|g.i(I-1)>>>31;return new o(T,g.h)}function H(g,y){var T=y>>5;y%=32;for(var I=g.g.length-T,k=[],N=0;N<I;N++)k[N]=0<y?g.i(N+T)>>>y|g.i(N+T+1)<<32-y:g.i(N+T);return new o(k,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,u0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,fi=o}).apply(typeof _v<"u"?_v:typeof self<"u"?self:typeof window<"u"?window:{});var Pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var c0,Ia,h0,sc,dp,d0,f0,p0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Pu=="object"&&Pu];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var O=a[_];if(!(O in p))break e;p=p[O]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,_=!1,O={next:function(){if(!_&&p<a.length){var V=p++;return{value:h(V,a[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function E(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,O,V){for(var q=Array(arguments.length-2),be=2;be<arguments.length;be++)q[be-2]=arguments[be];return h.prototype[O].apply(_,q)}}function P(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function b(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const O=a.length||0,V=_.length||0;a.length=O+V;for(let q=0;q<V;q++)a[O+q]=_[q]}else a.push(_)}}class S{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var B=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function H(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function g(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function y(a){const h={};for(const p in a)h[p]=a[p];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(p in _)a[p]=_[p];for(let V=0;V<T.length;V++)p=T[V],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function k(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function C(){var a=re;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ne{constructor(){this.h=this.g=null}add(h,p){const _=mt.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var mt=new S(()=>new On,a=>a.reset());class On{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let zt,W=!1,re=new Ne,ae=()=>{const a=l.Promise.resolve(void 0);zt=()=>{a.then(Ae)}};var Ae=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(p){N(p)}var h=mt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}W=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Vt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Ye(a,h){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(B){e:{try{L(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:gt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ye.aa.h.call(this)}}A(Ye,xe);var gt={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),_s=0;function Zh(a,h,p,_,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=O,this.key=++_s,this.da=this.fa=!1}function vs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ws(a){this.src=a,this.g={},this.h=0}ws.prototype.add=function(a,h,p,_,O){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var q=Ln(a,h,_,O);return-1<q?(h=a[q],p||(h.fa=!1)):(h=new Zh(h,this.src,V,!!_,O),h.fa=p,a.push(h)),h};function st(a,h){var p=h.type;if(p in a.g){var _=a.g[p],O=Array.prototype.indexOf.call(_,h,void 0),V;(V=0<=O)&&Array.prototype.splice.call(_,O,1),V&&(vs(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Ln(a,h,p,_){for(var O=0;O<a.length;++O){var V=a[O];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==_)return O}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),$o={};function Mn(a,h,p,_,O){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Mn(a,h[V],p,_,O);return null}return p=br(p),a&&a[yt]?a.K(h,p,c(_)?!!_.capture:!1,O):ed(a,h,p,!1,_,O)}function ed(a,h,p,_,O,V){if(!h)throw Error("Invalid event type");var q=c(O)?!!O.capture:!!O,be=Ho(a);if(be||(a[Es]=be=new ws(a)),p=be.add(h,p,_,q,V),p.proxy)return p;if(_=td(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)Vt||(O=q),O===void 0&&(O=!1),a.addEventListener(h.toString(),_,O);else if(a.attachEvent)a.attachEvent(Gl(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function td(){function a(p){return h.call(a.src,a.listener,p)}const h=nd;return a}function Bo(a,h,p,_,O){if(Array.isArray(h))for(var V=0;V<h.length;V++)Bo(a,h[V],p,_,O);else _=c(_)?!!_.capture:!!_,p=br(p),a&&a[yt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],p=Ln(V,p,_,O),-1<p&&(vs(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Ho(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ln(h,p,_,O)),(p=-1<a?h[a]:null)&&zo(p))}function zo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[yt])st(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(Gl(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Ho(h))?(st(p,a),p.h==0&&(p.src=null,h[Es]=null)):vs(a)}}}function Gl(a){return a in $o?$o[a]:$o[a]="on"+a}function nd(a,h){if(a.da)a=!0;else{h=new Ye(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&zo(a),a=p.call(_,h)}return a}function Ho(a){return a=a[Es],a instanceof ws?a:null}var vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function br(a){return typeof a=="function"?a:(a[vn]||(a[vn]=function(h){return a.handleEvent(h)}),a[vn])}function ot(){fe.call(this),this.i=new ws(this),this.M=this,this.F=null}A(ot,fe),ot.prototype[yt]=!0,ot.prototype.removeEventListener=function(a,h,p,_){Bo(this,a,h,p,_)};function at(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new xe(h,a);else if(h instanceof xe)h.target=h.target||a;else{var O=h;h=new xe(_,a),I(h,O)}if(O=!0,p)for(var V=p.length-1;0<=V;V--){var q=h.g=p[V];O=Jt(q,_,!0,h)&&O}if(q=h.g=a,O=Jt(q,_,!0,h)&&O,O=Jt(q,_,!1,h)&&O,p)for(V=0;V<p.length;V++)q=h.g=p[V],O=Jt(q,_,!1,h)&&O}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)vs(p[_]);delete a.g[h],a.h--}}this.F=null},ot.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},ot.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function Jt(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,V=0;V<h.length;++V){var q=h[V];if(q&&!q.da&&q.capture==p){var be=q.listener,vt=q.ha||q.src;q.fa&&st(a.i,q),O=be.call(vt,_)!==!1&&O}}return O&&!_.defaultPrevented}function cn(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Wo(a){a.g=cn(()=>{a.g=null,a.i&&(a.i=!1,Wo(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ts extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Wo(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ni(a){fe.call(this),this.h=a,this.g={}}A(Ni,fe);var wn=[];function qo(a){H(a.g,function(h,p){this.g.hasOwnProperty(p)&&zo(h)},a),a.g={}}Ni.prototype.N=function(){Ni.aa.N.call(this),qo(this)},Ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Is=l.JSON.stringify,Kl=l.JSON.parse,rd=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ss(){}Ss.prototype.h=null;function bi(a){return a.h||(a.h=a.i())}function Go(){}var rr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Di(){xe.call(this,"d")}A(Di,xe);function Ko(){xe.call(this,"c")}A(Ko,xe);var Vn={},Ql=null;function Oi(){return Ql=Ql||new ot}Vn.La="serverreachability";function Li(a){xe.call(this,Vn.La,a)}A(Li,xe);function Un(a){const h=Oi();at(h,new Li(h))}Vn.STAT_EVENT="statevent";function Yl(a,h){xe.call(this,Vn.STAT_EVENT,a),this.stat=h}A(Yl,xe);function _t(a){const h=Oi();at(h,new Yl(h,a))}Vn.Ma="timingevent";function x(a,h){xe.call(this,Vn.Ma,a),this.size=h}A(x,xe);function D(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function M(){this.g=!0}M.prototype.xa=function(){this.g=!1};function $(a,h,p,_,O,V){a.info(function(){if(a.g)if(V)for(var q="",be=V.split("&"),vt=0;vt<be.length;vt++){var Te=be[vt].split("=");if(1<Te.length){var Ct=Te[0];Te=Te[1];var Rt=Ct.split("_");q=2<=Rt.length&&Rt[1]=="type"?q+(Ct+"="+Te+"&"):q+(Ct+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+h+`
`+p+`
`+q})}function G(a,h,p,_,O,V,q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+h+`
`+p+`
`+V+" "+q})}function ee(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Z(a,p)+(_?" "+_:"")})}function oe(a,h){a.info(function(){return"TIMEOUT: "+h})}M.prototype.info=function(){};function Z(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<O.length;q++)O[q]=""}}}}return Is(p)}catch{return h}}var J={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Y={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},te;function le(){}A(le,Ss),le.prototype.g=function(){return new XMLHttpRequest},le.prototype.i=function(){return{}},te=new le;function he(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new Ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ze}function Ze(){this.i=null,this.g="",this.h=!1}var Ce={},_e={};function Oe(a,h,p){a.L=1,a.v=eu(ar(h)),a.m=p,a.P=!0,ir(a,null)}function ir(a,h){a.F=Date.now(),Ut(a),a.A=ar(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Bg(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Ze,a.g=oy(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Ts(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(wn[0]=O.toString()),O=wn);for(var V=0;V<O.length;V++){var q=Mn(p,O[V],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Un(),$(a.i,a.u,a.A,a.l,a.R,a.m)}he.prototype.ca=function(a){a=a.target;const h=this.M;h&&lr(a)==3?h.j():this.Y(a)},he.prototype.Y=function(a){try{if(a==this.g)e:{const Rt=lr(this.g);var h=this.g.Ba();const Ps=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Qg(this.g)))){this.J||Rt!=4||h==7||(h==8||0>=Ps?Un(3):Un(2)),sr(this);var p=this.g.Z();this.X=p;t:if(Dr(this)){var _=Qg(this.g);a="";var O=_.length,V=lr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Zt(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(V&&h==O-1)});_.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,G(this.i,this.u,this.A,this.l,this.R,Rt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var be,vt=this.g;if((be=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(be)){var Te=be;break t}}Te=null}if(p=Te)ee(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Or(this,p);else{this.o=!1,this.s=3,_t(12),hn(this),Zt(this);break e}}if(this.P){p=!0;let Tn;for(;!this.J&&this.C<q.length;)if(Tn=En(this,q),Tn==_e){Rt==4&&(this.s=4,_t(14),p=!1),ee(this.i,this.l,null,"[Incomplete Response]");break}else if(Tn==Ce){this.s=4,_t(15),ee(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else ee(this.i,this.l,Tn,null),Or(this,Tn);if(Dr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||q.length!=0||this.h.h||(this.s=1,_t(16),p=!1),this.o=this.o&&p,!p)ee(this.i,this.l,q,"[Invalid Chunked Response]"),hn(this),Zt(this);else if(0<q.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),ad(Ct),Ct.M=!0,_t(11))}}else ee(this.i,this.l,q,null),Or(this,q);Rt==4&&hn(this),this.o&&!this.J&&(Rt==4?ny(this.j,this):(this.o=!1,Ut(this)))}else CA(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),hn(this),Zt(this)}}}catch{}finally{}};function Dr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function En(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?_e:(p=Number(h.substring(p,_)),isNaN(p)?Ce:(_+=1,_+p>h.length?_e:(h=h.slice(_,_+p),a.C=_+p,h)))}he.prototype.cancel=function(){this.J=!0,hn(this)};function Ut(a){a.S=Date.now()+a.I,As(a,a.I)}function As(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=D(m(a.ba,a),h)}function sr(a){a.B&&(l.clearTimeout(a.B),a.B=null)}he.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(oe(this.i,this.A),this.L!=2&&(Un(),_t(17)),hn(this),this.s=2,Zt(this)):As(this,this.S-a)};function Zt(a){a.j.G==0||a.J||ny(a.j,a)}function hn(a){sr(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,qo(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Or(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||$e(p.h,a))){if(!a.K&&$e(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)ou(p),iu(p);else break e;od(p),_t(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=D(m(p.Za,p),6e3));if(1>=Lr(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Vi(p,11)}else if((a.K||p.g==a)&&ou(p),!v(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let Te=O[h];if(p.T=Te[0],Te=Te[1],p.G==2)if(Te[0]=="c"){p.K=Te[1],p.ia=Te[2];const Ct=Te[3];Ct!=null&&(p.la=Ct,p.j.info("VER="+p.la));const Rt=Te[4];Rt!=null&&(p.Aa=Rt,p.j.info("SVER="+p.Aa));const Ps=Te[5];Ps!=null&&typeof Ps=="number"&&0<Ps&&(_=1.5*Ps,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Tn=a.g;if(Tn){const lu=Tn.g?Tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lu){var V=_.h;V.g||lu.indexOf("spdy")==-1&&lu.indexOf("quic")==-1&&lu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Fn(V,V.h),V.h=null))}if(_.D){const ld=Tn.g?Tn.g.getResponseHeader("X-HTTP-Session-Id"):null;ld&&(_.ya=ld,Ue(_.I,_.D,ld))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var q=a;if(_.qa=sy(_,_.J?_.ia:null,_.W),q.K){Qo(_.h,q);var be=q,vt=_.L;vt&&(be.I=vt),be.B&&(sr(be),Ut(be)),_.g=q}else ey(_);0<p.i.length&&su(p)}else Te[0]!="stop"&&Te[0]!="close"||Vi(p,7);else p.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Vi(p,7):sd(p):Te[0]!="noop"&&p.l&&p.l.ta(Te),p.v=0)}}Un(4)}catch{}}var ve=class{constructor(a,h){this.g=a,this.map=h}};function Ve(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function or(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Lr(a){return a.h?1:a.g?a.g.size:0}function $e(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Fn(a,h){a.g?a.g.add(h):a.h=h}function Qo(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ve.prototype.cancel=function(){if(this.i=Xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return P(a.i)}function hA(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function dA(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function Mg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=dA(a),_=hA(a),O=_.length,V=0;V<O;V++)h.call(void 0,_[V],p&&p[V],a)}var Vg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fA(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),O=null;if(0<=_){var V=a[p].substring(0,_);O=a[p].substring(_+1)}else V=a[p];h(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Mi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Mi){this.h=a.h,Jl(this,a.j),this.o=a.o,this.g=a.g,Zl(this,a.s),this.l=a.l;var h=a.i,p=new Jo;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Ug(this,p),this.m=a.m}else a&&(h=String(a).match(Vg))?(this.h=!1,Jl(this,h[1]||"",!0),this.o=Yo(h[2]||""),this.g=Yo(h[3]||"",!0),Zl(this,h[4]),this.l=Yo(h[5]||"",!0),Ug(this,h[6]||"",!0),this.m=Yo(h[7]||"")):(this.h=!1,this.i=new Jo(null,this.h))}Mi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Xo(h,Fg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Xo(h,Fg,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Xo(p,p.charAt(0)=="/"?gA:mA,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Xo(p,_A)),a.join("")};function ar(a){return new Mi(a)}function Jl(a,h,p){a.j=p?Yo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Zl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ug(a,h,p){h instanceof Jo?(a.i=h,vA(a.i,a.h)):(p||(h=Xo(h,yA)),a.i=new Jo(h,a.h))}function Ue(a,h,p){a.i.set(h,p)}function eu(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Yo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xo(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,pA),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pA(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fg=/[#\/\?@]/g,mA=/[#\?:]/g,gA=/[#\?]/g,yA=/[#\?@]/g,_A=/#/g;function Jo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Mr(a){a.g||(a.g=new Map,a.h=0,a.i&&fA(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Jo.prototype,t.add=function(a,h){Mr(this),this.i=null,a=Cs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function jg(a,h){Mr(a),h=Cs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function $g(a,h){return Mr(a),h=Cs(a,h),a.g.has(h)}t.forEach=function(a,h){Mr(this),this.g.forEach(function(p,_){p.forEach(function(O){a.call(h,O,_,this)},this)},this)},t.na=function(){Mr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const O=a[_];for(let V=0;V<O.length;V++)p.push(h[_])}return p},t.V=function(a){Mr(this);let h=[];if(typeof a=="string")$g(this,a)&&(h=h.concat(this.g.get(Cs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Mr(this),this.i=null,a=Cs(this,a),$g(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Bg(a,h,p){jg(a,h),0<p.length&&(a.i=null,a.g.set(Cs(a,h),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const V=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var O=V;q[_]!==""&&(O+="="+encodeURIComponent(String(q[_]))),a.push(O)}}return this.i=a.join("&")};function Cs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function vA(a,h){h&&!a.j&&(Mr(a),a.i=null,a.g.forEach(function(p,_){var O=_.toLowerCase();_!=O&&(jg(this,_),Bg(this,O,p))},a)),a.j=h}function wA(a,h){const p=new M;if(l.Image){const _=new Image;_.onload=E(Vr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=E(Vr,p,"TestLoadImage: error",!1,h,_),_.onabort=E(Vr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=E(Vr,p,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function EA(a,h){const p=new M,_=new AbortController,O=setTimeout(()=>{_.abort(),Vr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(O),V.ok?Vr(p,"TestPingServer: ok",!0,h):Vr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Vr(p,"TestPingServer: error",!1,h)})}function Vr(a,h,p,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(p)}catch{}}function TA(){this.g=new rd}function IA(a,h,p){const _=p||"";try{Mg(a,function(O,V){let q=O;c(O)&&(q=Is(O)),h.push(_+V+"="+encodeURIComponent(q))})}catch(O){throw h.push(_+"type="+encodeURIComponent("_badmap")),O}}function tu(a){this.l=a.Ub||null,this.j=a.eb||!1}A(tu,Ss),tu.prototype.g=function(){return new nu(this.l,this.j)},tu.prototype.i=function(a){return function(){return a}}({});function nu(a,h){ot.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(nu,ot),t=nu.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ea(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ea(this)),this.g&&(this.readyState=3,ea(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function zg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Zo(this):ea(this),this.readyState==3&&zg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Zo(this))},t.Qa=function(a){this.g&&(this.response=a,Zo(this))},t.ga=function(){this.g&&Zo(this)};function Zo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ea(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ea(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(nu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hg(a){let h="";return H(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function id(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Hg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ue(a,h,p))}function Ke(a){ot.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ke,ot);var SA=/^https?$/i,AA=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?bi(this.o):bi(te),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Wg(this,V);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)p.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())p.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(AA,h,void 0))||_||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of p)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kg(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Wg(this,V)}};function Wg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,qg(a),ru(a)}function qg(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,at(this,"complete"),at(this,"abort"),ru(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ru(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Gg(this):this.bb())},t.bb=function(){Gg(this)};function Gg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||lr(a)!=4||a.Z()!=2)){if(a.u&&lr(a)==4)cn(a.Ea,0,a);else if(at(a,"readystatechange"),lr(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=q===0){var O=String(a.D).match(Vg)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),_=!SA.test(O?O.toLowerCase():"")}p=_}if(p)at(a,"complete"),at(a,"success");else{a.m=6;try{var V=2<lr(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",qg(a)}}finally{ru(a)}}}}function ru(a,h){if(a.g){Kg(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||at(a,"ready");try{p.onreadystatechange=_}catch{}}}function Kg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function lr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<lr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Kl(h)}};function Qg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function CA(a){const h={};a=(a.g&&2<=lr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(v(a[_]))continue;var p=k(a[_]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[O]||[];h[O]=V,V.push(p)}g(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ta(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Yg(a){this.Aa=0,this.i=[],this.j=new M,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ta("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ta("baseRetryDelayMs",5e3,a),this.cb=ta("retryDelaySeedMs",1e4,a),this.Wa=ta("forwardChannelMaxRetries",2,a),this.wa=ta("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ve(a&&a.concurrentRequestLimit),this.Da=new TA,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yg.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,_){_t(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=sy(this,null,this.W),su(this)};function sd(a){if(Xg(a),a.G==3){var h=a.U++,p=ar(a.I);if(Ue(p,"SID",a.K),Ue(p,"RID",h),Ue(p,"TYPE","terminate"),na(a,p),h=new he(a,a.j,h),h.L=2,h.v=eu(ar(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=oy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ut(h)}iy(a)}function iu(a){a.g&&(ad(a),a.g.cancel(),a.g=null)}function Xg(a){iu(a),a.u&&(l.clearTimeout(a.u),a.u=null),ou(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function su(a){if(!or(a.h)&&!a.s){a.s=!0;var h=a.Ga;zt||ae(),W||(zt(),W=!0),re.add(h,a),a.B=0}}function RA(a,h){return Lr(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=D(m(a.Ga,a,h),ry(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new he(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Zg(this,O,h),p=ar(this.I),Ue(p,"RID",a),Ue(p,"CVER",22),this.D&&Ue(p,"X-HTTP-Session-Id",this.D),na(this,p),V&&(this.O?h="headers="+encodeURIComponent(String(Hg(V)))+"&"+h:this.m&&id(p,this.m,V)),Fn(this.h,O),this.Ua&&Ue(p,"TYPE","init"),this.P?(Ue(p,"$req",h),Ue(p,"SID","null"),O.T=!0,Oe(O,p,null)):Oe(O,p,h),this.G=2}}else this.G==3&&(a?Jg(this,a):this.i.length==0||or(this.h)||Jg(this))};function Jg(a,h){var p;h?p=h.l:p=a.U++;const _=ar(a.I);Ue(_,"SID",a.K),Ue(_,"RID",p),Ue(_,"AID",a.T),na(a,_),a.m&&a.o&&id(_,a.m,a.o),p=new he(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Zg(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Fn(a.h,p),Oe(p,_,h)}function na(a,h){a.H&&H(a.H,function(p,_){Ue(h,_,p)}),a.l&&Mg({},function(p,_){Ue(h,_,p)})}function Zg(a,h,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let V=-1;for(;;){const q=["count="+p];V==-1?0<p?(V=O[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let be=!0;for(let vt=0;vt<p;vt++){let Te=O[vt].g;const Ct=O[vt].map;if(Te-=V,0>Te)V=Math.max(0,O[vt].g-100),be=!1;else try{IA(Ct,q,"req"+Te+"_")}catch{_&&_(Ct)}}if(be){_=q.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function ey(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;zt||ae(),W||(zt(),W=!0),re.add(h,a),a.v=0}}function od(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=D(m(a.Fa,a),ry(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ty(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=D(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),iu(this),ty(this))};function ad(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ty(a){a.g=new he(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=ar(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),na(a,h),a.m&&a.o&&id(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=eu(ar(h)),p.m=null,p.P=!0,ir(p,a)}t.Za=function(){this.C!=null&&(this.C=null,iu(this),od(this),_t(19))};function ou(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ny(a,h){var p=null;if(a.g==h){ou(a),ad(a),a.g=null;var _=2}else if($e(a.h,h))p=h.D,Qo(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;_=Oi(),at(_,new x(_,p)),su(a)}else ey(a);else if(O=h.s,O==3||O==0&&0<h.X||!(_==1&&RA(a,h)||_==2&&od(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),O){case 1:Vi(a,5);break;case 4:Vi(a,10);break;case 3:Vi(a,6);break;default:Vi(a,2)}}}function ry(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Vi(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),_=a.Xa;const O=!_;_=new Mi(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Jl(_,"https"),eu(_),O?wA(_.toString(),p):EA(_.toString(),p)}else _t(2);a.G=0,a.l&&a.l.sa(h),iy(a),Xg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function iy(a){if(a.G=0,a.ka=[],a.l){const h=Xl(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function sy(a,h,p){var _=p instanceof Mi?ar(p):new Mi(p);if(_.g!="")h&&(_.g=h+"."+_.g),Zl(_,_.s);else{var O=l.location;_=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var V=new Mi(null);_&&Jl(V,_),h&&(V.g=h),O&&Zl(V,O),p&&(V.l=p),_=V}return p=a.D,h=a.ya,p&&h&&Ue(_,p,h),Ue(_,"VER",a.la),na(a,_),_}function oy(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new tu({eb:p})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ay(){}t=ay.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function au(){}au.prototype.g=function(a,h){return new en(a,h)};function en(a,h){ot.call(this),this.g=new Yg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Rs(this)}A(en,ot),en.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){sd(this.g)},en.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Is(a),a=p);h.i.push(new ve(h.Ya++,a)),h.G==3&&su(h)},en.prototype.N=function(){this.g.l=null,delete this.j,sd(this.g),delete this.g,en.aa.N.call(this)};function ly(a){Di.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(ly,Di);function uy(){Ko.call(this),this.status=1}A(uy,Ko);function Rs(a){this.g=a}A(Rs,ay),Rs.prototype.ua=function(){at(this.g,"a")},Rs.prototype.ta=function(a){at(this.g,new ly(a))},Rs.prototype.sa=function(a){at(this.g,new uy)},Rs.prototype.ra=function(){at(this.g,"b")},au.prototype.createWebChannel=au.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,p0=function(){return new au},f0=function(){return Oi()},d0=Vn,dp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},J.NO_ERROR=0,J.TIMEOUT=8,J.HTTP_ERROR=6,sc=J,Y.COMPLETE="complete",h0=Y,Go.EventType=rr,rr.OPEN="a",rr.CLOSE="b",rr.ERROR="c",rr.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Ia=Go,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,c0=Ke}).apply(typeof Pu<"u"?Pu:typeof self<"u"?self:typeof window<"u"?window:{});const vv="@firebase/firestore",wv="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Lm("@firebase/firestore");function Ns(){return ls.logLevel}function Q(t,...e){if(ls.logLevel<=me.DEBUG){const n=e.map(qm);ls.debug(`Firestore (${Mo}): ${t}`,...n)}}function Ar(t,...e){if(ls.logLevel<=me.ERROR){const n=e.map(qm);ls.error(`Firestore (${Mo}): ${t}`,...n)}}function Eo(t,...e){if(ls.logLevel<=me.WARN){const n=e.map(qm);ls.warn(`Firestore (${Mo}): ${t}`,...n)}}function qm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,m0(t,r,n)}function m0(t,e,n){let r=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ar(r),new Error(r)}function Se(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||m0(e,i,r)}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends fs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}}class qb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Gb{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new g0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new Nt(e)}}class Kb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Qb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Kb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ev{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ev(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ev(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Xb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function fp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return qd(i)===qd(s)?ge(i,s):qd(i)?1:-1}return ge(t.length,e.length)}const Jb=55296,Zb=57343;function qd(t){const e=t.charCodeAt(0);return e>=Jb&&e<=Zb}function To(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="__name__";class zn{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=zn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ge(e.length,n.length)}static compareSegments(e,n){const r=zn.isNumericId(e),i=zn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?zn.extractNumericId(e).compare(zn.extractNumericId(n)):fp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fi.fromString(e.substring(4,e.length-2))}}class Le extends zn{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const eD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends zn{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return eD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tv}static keyField(){return new Tt([Tv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Le.fromString(e))}static fromName(e){return new ne(Le.fromString(e).popFirst(5))}static empty(){return new ne(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Le(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tD(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Iv(t){if(!ne.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sv(t){if(ne.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Oh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function us(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oh(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){const n={typeString:t};return e&&(n.value=e),n}function Vl(t,e){if(!_0(t))throw new K(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new K(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=-62135596800,Cv=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Cv);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Av)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cv}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Vl(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Av;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:it("string",ke._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ke(0,0))}static max(){return new ce(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=-1;function nD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new _i(i,ne.empty(),e)}function rD(t){return new _i(t.readTime,t.key,dl)}class _i{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _i(ce.min(),ne.empty(),dl)}static max(){return new _i(ce.max(),ne.empty(),dl)}}function iD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==sD)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function aD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Uo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Lh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=-1;function Mh(t){return t==null}function Qc(t){return t===0&&1/t==-1/0}function lD(t){return typeof t=="number"&&Number.isInteger(t)&&!Qc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="";function uD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Rv(e)),e=cD(t.get(n),e);return Rv(e)}function cD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case v0:n+="";break;default:n+=s}}return n}function Rv(t){return t+v0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hD(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function w0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Et.RED,this.left=i??Et.EMPTY,this.right=s??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xv(this.data.getIterator())}getIteratorFrom(e){return new xv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class xv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new sn([])}unionWith(e){let n=new ht(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new E0("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const dD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=dD.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wi(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="server_timestamp",I0="__type__",S0="__previous_value__",A0="__local_write_time__";function Qm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[I0])==null?void 0:r.stringValue)===T0}function Vh(t){const e=t.mapValue.fields[S0];return Qm(e)?Vh(e):e}function fl(t){const e=vi(t.mapValue.fields[A0].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Yc="(default)";class pl{constructor(e,n){this.projectId=e,this.database=n||Yc}static empty(){return new pl("","")}get isDefaultDatabase(){return this.database===Yc}isEqual(e){return e instanceof pl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="__type__",pD="__max__",ku={mapValue:{}},R0="__vector__",Xc="value";function Ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qm(t)?4:gD(t)?9007199254740991:mD(t)?10:11:se(28295,{value:t})}function tr(t,e){if(t===e)return!0;const n=Ei(t);if(n!==Ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fl(t).isEqual(fl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vi(i.timestampValue),l=vi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return wi(i.bytesValue).isEqual(wi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Xe(i.geoPointValue.latitude)===Xe(s.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Xe(i.integerValue)===Xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Xe(i.doubleValue),l=Xe(s.doubleValue);return o===l?Qc(o)===Qc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return To(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Pv(o)!==Pv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!tr(o[u],l[u])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function ml(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function Io(t,e){if(t===e)return 0;const n=Ei(t),r=Ei(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Xe(s.integerValue||s.doubleValue),u=Xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return kv(t.timestampValue,e.timestampValue);case 4:return kv(fl(t),fl(e));case 5:return fp(t.stringValue,e.stringValue);case 6:return function(s,o){const l=wi(s),u=wi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ge(l[c],u[c]);if(d!==0)return d}return ge(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ge(Xe(s.latitude),Xe(o.latitude));return l!==0?l:ge(Xe(s.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Nv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,E,A,P;const l=s.fields||{},u=o.fields||{},c=(m=l[Xc])==null?void 0:m.arrayValue,d=(E=u[Xc])==null?void 0:E.arrayValue,f=ge(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return f!==0?f:Nv(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ku.mapValue&&o===ku.mapValue)return 0;if(s===ku.mapValue)return 1;if(o===ku.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=fp(u[f],d[f]);if(m!==0)return m;const E=Io(l[u[f]],c[d[f]]);if(E!==0)return E}return ge(u.length,d.length)}(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function kv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=vi(t),r=vi(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function Nv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Io(n[i],r[i]);if(s)return s}return ge(n.length,r.length)}function So(t){return pp(t)}function pp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=pp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pp(n.fields[o])}`;return i+"}"}(t.mapValue):se(61005,{value:t})}function oc(t){switch(Ei(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vh(t);return e?16+oc(e):16;case 5:return 2*t.stringValue.length;case 6:return wi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+oc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Pi(r.fields,(s,o)=>{i+=s.length+oc(o)}),i}(t.mapValue);default:throw se(13486,{value:t})}}function bv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mp(t){return!!t&&"integerValue"in t}function Ym(t){return!!t&&"arrayValue"in t}function Dv(t){return!!t&&"nullValue"in t}function Ov(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ac(t){return!!t&&"mapValue"in t}function mD(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[C0])==null?void 0:r.stringValue)===R0}function Va(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Pi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Va(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Va(t.arrayValue.values[n]);return e}return{...t}}function gD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===pD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ac(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Va(n)}setAll(e){let n=Tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Va(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ac(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ac(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Pi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Gt(Va(this.value))}}function P0(t){const e=[];return Pi(t.fields,(n,r)=>{const i=new Tt([n]);if(ac(r)){const s=P0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new sn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Dt(e,0,ce.min(),ce.min(),ce.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,i){return new Dt(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,ce.min(),ce.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,ce.min(),ce.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.position=e,this.inclusive=n}}function Lv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=Io(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n="asc"){this.field=e,this.dir=n}}function yD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{}class rt extends x0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vD(e,n,r):n==="array-contains"?new TD(e,r):n==="in"?new ID(e,r):n==="not-in"?new SD(e,r):n==="array-contains-any"?new AD(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wD(e,r):new ED(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Io(n,this.value)):n!==null&&Ei(this.value)===Ei(n)&&this.matchesComparison(Io(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends x0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Dn(e,n)}matches(e){return k0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function k0(t){return t.op==="and"}function N0(t){return _D(t)&&k0(t)}function _D(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function gp(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+So(t.value);if(N0(t))return t.filters.map(e=>gp(e)).join(",");{const e=t.filters.map(n=>gp(n)).join(",");return`${t.op}(${e})`}}function b0(t,e){return t instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&tr(r.value,i.value)}(t,e):t instanceof Dn?function(r,i){return i instanceof Dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&b0(o,i.filters[l]),!0):!1}(t,e):void se(19439)}function D0(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${So(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(D0).join(" ,")+"}"}(t):"Filter"}class vD extends rt{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class wD extends rt{constructor(e,n){super(e,"in",n),this.keys=O0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ED extends rt{constructor(e,n){super(e,"not-in",n),this.keys=O0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function O0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class TD extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ym(n)&&ml(n.arrayValue,this.value)}}class ID extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ml(this.value.arrayValue,n)}}class SD extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ml(this.value.arrayValue,n)}}class AD extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ym(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ml(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Vv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new CD(t,e,n,r,i,s,o)}function Xm(t){const e=ue(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Mh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>So(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>So(r)).join(",")),e.Te=n}return e.Te}function Jm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!b0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mv(t.startAt,e.startAt)&&Mv(t.endAt,e.endAt)}function yp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function RD(t,e,n,r,i,s,o,l){return new Fo(t,e,n,r,i,s,o,l)}function L0(t){return new Fo(t)}function Uv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function M0(t){return t.collectionGroup!==null}function Ua(t){const e=ue(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ht(Tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new gl(s,r))}),n.has(Tt.keyField().canonicalString())||e.Ie.push(new gl(Tt.keyField(),r))}return e.Ie}function Yn(t){const e=ue(t);return e.Ee||(e.Ee=V0(e,Ua(t))),e.Ee}function PD(t){const e=ue(t);return e.de||(e.de=V0(e,t.explicitOrderBy)),e.de}function V0(t,e){if(t.limitType==="F")return Vv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gl(i.field,s)});const n=t.endAt?new Jc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Jc(t.startAt.position,t.startAt.inclusive):null;return Vv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _p(t,e){const n=t.filters.concat([e]);return new Fo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zc(t,e,n){return new Fo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uh(t,e){return Jm(Yn(t),Yn(e))&&t.limitType===e.limitType}function U0(t){return`${Xm(Yn(t))}|lt:${t.limitType}`}function bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>D0(i)).join(", ")}]`),Mh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>So(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>So(i)).join(",")),`Target(${r})`}(Yn(t))}; limitType=${t.limitType})`}function Fh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ua(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Lv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ua(r),i)||r.endAt&&!function(o,l,u){const c=Lv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ua(r),i))}(t,e)}function xD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function F0(t){return(e,n)=>{let r=!1;for(const i of Ua(t)){const s=kD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function kD(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?Io(u,c):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Pi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return w0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=new Ge(ne.comparator);function Cr(){return ND}const j0=new Ge(ne.comparator);function Sa(...t){let e=j0;for(const n of t)e=e.insert(n.key,n);return e}function $0(t){let e=j0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gi(){return Fa()}function B0(){return Fa()}function Fa(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const bD=new Ge(ne.comparator),DD=new ht(ne.comparator);function ye(...t){let e=DD;for(const n of t)e=e.add(n);return e}const OD=new ht(ge);function LD(){return OD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qc(e)?"-0":e}}function z0(t){return{integerValue:""+t}}function MD(t,e){return lD(e)?z0(e):Zm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this._=void 0}}function VD(t,e,n){return t instanceof yl?function(i,s){const o={fields:{[I0]:{stringValue:T0},[A0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qm(s)&&(s=Vh(s)),s&&(o.fields[S0]=s),{mapValue:o}}(n,e):t instanceof _l?W0(t,e):t instanceof vl?q0(t,e):function(i,s){const o=H0(i,s),l=Fv(o)+Fv(i.Ae);return mp(o)&&mp(i.Ae)?z0(l):Zm(i.serializer,l)}(t,e)}function UD(t,e,n){return t instanceof _l?W0(t,e):t instanceof vl?q0(t,e):n}function H0(t,e){return t instanceof eh?function(r){return mp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yl extends jh{}class _l extends jh{constructor(e){super(),this.elements=e}}function W0(t,e){const n=G0(e);for(const r of t.elements)n.some(i=>tr(i,r))||n.push(r);return{arrayValue:{values:n}}}class vl extends jh{constructor(e){super(),this.elements=e}}function q0(t,e){let n=G0(e);for(const r of t.elements)n=n.filter(i=>!tr(i,r));return{arrayValue:{values:n}}}class eh extends jh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Fv(t){return Xe(t.integerValue||t.doubleValue)}function G0(t){return Ym(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n){this.field=e,this.transform=n}}function jD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof _l&&i instanceof _l||r instanceof vl&&i instanceof vl?To(r.elements,i.elements,tr):r instanceof eh&&i instanceof eh?tr(r.Ae,i.Ae):r instanceof yl&&i instanceof yl}(t.transform,e.transform)}class $D{constructor(e,n){this.version=e,this.transformResults=n}}class Xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $h{}function K0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Y0(t.key,Xn.none()):new Ul(t.key,t.data,Xn.none());{const n=t.data,r=Gt.empty();let i=new ht(Tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xi(t.key,r,new sn(i.toArray()),Xn.none())}}function BD(t,e,n){t instanceof Ul?function(i,s,o){const l=i.value.clone(),u=$v(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xi?function(i,s,o){if(!lc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=$v(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Q0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ja(t,e,n,r){return t instanceof Ul?function(s,o,l,u){if(!lc(s.precondition,o))return l;const c=s.value.clone(),d=Bv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof xi?function(s,o,l,u){if(!lc(s.precondition,o))return l;const c=Bv(s.fieldTransforms,u,o),d=o.data;return d.setAll(Q0(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return lc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function zD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=H0(r.transform,i||null);s!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,s))}return n||null}function jv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&To(r,i,(s,o)=>jD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ul extends $h{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xi extends $h{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Q0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $v(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,UD(o,l,n[i]))}return r}function Bv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,VD(s,o,e))}return r}class Y0 extends $h{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HD extends $h{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&BD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ja(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=B0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=K0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,(n,r)=>jv(n,r))&&To(this.baseMutations,e.baseMutations,(n,r)=>jv(n,r))}}class eg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return bD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new eg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,we;function QD(t){switch(t){case F.OK:return se(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function X0(t){if(t===void 0)return Ar("GRPC error has no .code"),F.UNKNOWN;switch(t){case et.OK:return F.OK;case et.CANCELLED:return F.CANCELLED;case et.UNKNOWN:return F.UNKNOWN;case et.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case et.INTERNAL:return F.INTERNAL;case et.UNAVAILABLE:return F.UNAVAILABLE;case et.UNAUTHENTICATED:return F.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case et.NOT_FOUND:return F.NOT_FOUND;case et.ALREADY_EXISTS:return F.ALREADY_EXISTS;case et.PERMISSION_DENIED:return F.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case et.ABORTED:return F.ABORTED;case et.OUT_OF_RANGE:return F.OUT_OF_RANGE;case et.UNIMPLEMENTED:return F.UNIMPLEMENTED;case et.DATA_LOSS:return F.DATA_LOSS;default:return se(39323,{code:t})}}(we=et||(et={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=new fi([4294967295,4294967295],0);function zv(t){const e=YD().encode(t),n=new u0;return n.update(e),new Uint8Array(n.digest())}function Hv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fi([n,r],0),new fi([i,s],0)]}class tg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Aa(`Invalid padding: ${n}`);if(r<0)throw new Aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=fi.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(fi.fromNumber(r)));return i.compare(XD)===1&&(i=new fi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=zv(e),[r,i]=Hv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new tg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=zv(e),[r,i]=Hv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Bh(ce.min(),i,new Ge(ge),Cr(),ye())}}class Fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fl(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class J0{constructor(e,n){this.targetId=e,this.Ce=n}}class Z0{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Wv{constructor(){this.ve=0,this.Fe=qv(),this.Me=At.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:se(38017,{changeType:s})}}),new Fl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=qv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class JD{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cr(),this.Je=Nu(),this.He=Nu(),this.Ye=new Ge(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(yp(s))if(r===0){const o=new ne(s.path);this.et(n,o,Dt.newNoDocument(o,ce.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=wi(r).toUint8Array()}catch(u){if(u instanceof E0)return Eo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new tg(o,i,s)}catch(u){return Eo(u instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&yp(l.target)){const u=new ne(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Dt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ye();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Bh(e,n,this.Ye,this.je,r);return this.je=Cr(),this.Je=Nu(),this.He=Nu(),this.Ye=new Ge(ge),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Wv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ht(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ht(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Nu(){return new Ge(ne.comparator)}function qv(){return new Ge(ne.comparator)}const ZD={asc:"ASCENDING",desc:"DESCENDING"},eO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tO={and:"AND",or:"OR"};class nO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vp(t,e){return t.useProto3Json||Mh(e)?e:{value:e}}function th(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function rO(t,e){return th(t,e.toTimestamp())}function Jn(t){return Se(!!t,49232),ce.fromTimestamp(function(n){const r=vi(n);return new ke(r.seconds,r.nanos)}(t))}function ng(t,e){return wp(t,e).canonicalString()}function wp(t,e){const n=function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function tS(t){const e=Le.fromString(t);return Se(aS(e),10190,{key:e.toString()}),e}function Ep(t,e){return ng(t.databaseId,e.path)}function Gd(t,e){const n=tS(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(rS(n))}function nS(t,e){return ng(t.databaseId,e)}function iO(t){const e=tS(t);return e.length===4?Le.emptyPath():rS(e)}function Tp(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rS(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Gv(t,e,n){return{name:Ep(t,e),fields:n.value.mapValue.fields}}function sO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Se(d===void 0||typeof d=="string",58123),At.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),At.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?F.UNKNOWN:X0(c.code);return new K(d,c.message||"")}(o);n=new Z0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gd(t,r.document.name),s=Jn(r.document.updateTime),o=r.document.createTime?Jn(r.document.createTime):ce.min(),l=new Gt({mapValue:{fields:r.document.fields}}),u=Dt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new uc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gd(t,r.document),s=r.readTime?Jn(r.readTime):ce.min(),o=Dt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new uc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gd(t,r.document),s=r.removedTargetIds||[];n=new uc([],s,i,null)}else{if(!("filter"in e))return se(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new KD(i,s),l=r.targetId;n=new J0(l,o)}}return n}function oO(t,e){let n;if(e instanceof Ul)n={update:Gv(t,e.key,e.value)};else if(e instanceof Y0)n={delete:Ep(t,e.key)};else if(e instanceof xi)n={update:Gv(t,e.key,e.data),updateMask:mO(e.fieldMask)};else{if(!(e instanceof HD))return se(16599,{Vt:e.type});n={verify:Ep(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof yl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _l)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof eh)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:rO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se(27497)}(t,e.precondition)),n}function aO(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Jn(i.updateTime):Jn(s);return o.isEqual(ce.min())&&(o=Jn(s)),new $D(o,i.transformResults||[])}(n,e))):[]}function lO(t,e){return{documents:[nS(t,e.path)]}}function iS(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=nS(t,i);const s=function(c){if(c.length!==0)return oS(Dn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Yr(m.field),direction:dO(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=vp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function uO(t,e,n,r){const{ft:i,parent:s}=iS(t,e),o={},l=[];let u=0;return n.forEach(c=>{const d="aggregate_"+u++;o[d]=c.alias,c.aggregateType==="count"?l.push({alias:d,count:{}}):c.aggregateType==="avg"?l.push({alias:d,avg:{field:Yr(c.fieldPath)}}):c.aggregateType==="sum"&&l.push({alias:d,sum:{field:Yr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:i.structuredQuery},parent:i.parent},gt:o,parent:s}}function cO(t){let e=iO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=sS(f);return m instanceof Dn&&N0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(A){return new gl(Ds(A.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Mh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new Jc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new Jc(E,m)}(n.endAt)),RD(e,i,o,s,l,"F",u,c)}function hO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ds(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ds(n.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ds(n.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Ds(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>sS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function dO(t){return ZD[t]}function fO(t){return eO[t]}function pO(t){return tO[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Ds(t){return Tt.fromServerFormat(t.fieldPath)}function oS(t){return t instanceof rt?function(n){if(n.op==="=="){if(Ov(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NAN"}};if(Dv(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ov(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NAN"}};if(Dv(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(n.field),op:fO(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(i=>oS(i));return r.length===1?r[0]:{compositeFilter:{op:pO(n.op),filters:r}}}(t):se(54877,{filter:t})}function mO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r,i,s=ce.min(),o=ce.min(),l=At.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e){this.yt=e}}function yO(t){const e=cO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(){this.Cn=new vO}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(_i.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(_i.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class vO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ht(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ht(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lS=41943040;class Wt{static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(lS,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ao(0)}static cr(){return new Ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="LruGarbageCollector",wO=1048576;function Yv([t,e],[n,r]){const i=ge(t,n);return i===0?ge(e,r):i}class EO{constructor(e){this.Ir=e,this.buffer=new ht(Yv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Yv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class TO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Q(Qv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Uo(n)?Q(Qv,"Ignoring IndexedDB error during garbage collection: ",n):await Vo(n)}await this.Vr(3e5)})}}class IO{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Lh.ce);const r=new EO(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Kv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kv):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Ns()<=me.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function SO(t,e){return new IO(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ja(r.mutation,i,sn.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const i=Gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Sa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cr();const o=Fa(),l=function(){return Fa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof xi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ja(d.mutation,c,d.mutation.getFieldMask(),ke.now())):o.set(c.key,sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new CO(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Fa();let i=new Ge((o,l)=>o-l),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||sn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||ye()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=B0();d.forEach(m=>{if(!s.has(m)){const E=K0(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):M0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Gi());let l=dl,u=s;return o.next(c=>j.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ye())).next(d=>({batchId:l,changes:$0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=Sa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Sa();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(f,m){return new Fo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Dt.newInvalidDocument(d)))});let l=Sa();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&ja(d.mutation,c,sn.empty(),ke.now()),Fh(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Jn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:yO(i.bundledQuery),readTime:Jn(i.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(){this.overlays=new Ge(ne.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gi();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Gi(),s=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ge((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Gi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Gi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return j.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qD(n,r));let s=this.qr.get(n);s===void 0&&(s=ye(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.Qr=new ht(dt.$r),this.Ur=new ht(dt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new dt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ne(new Le([])),r=new dt(n,e),i=new dt(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new Le([])),r=new dt(n,e),i=new dt(n,e+1);let s=ye();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new dt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ht(dt.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new dt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Km:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(ge);return n.forEach(i=>{const s=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new dt(new ne(s),0);let l=new ht(ge);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,i=>{const s=new dt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new dt(n,0),i=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.ri=e,this.docs=function(){return new Ge(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Dt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cr();const o=n.path,l=new ne(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||iD(rD(d),r)<=0||(i.has(d.key)||Fh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){se(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new DO(this)}getSize(e){return j.resolve(this.size)}}class DO extends AO{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.persistence=e,this.si=new ms(n=>Xm(n),Jm),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.oi=0,this._i=new rg,this.targetCount=0,this.ai=Ao.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ao(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n){this.ui={},this.overlays={},this.ci=new Lh(0),this.li=!1,this.li=!0,this.hi=new kO,this.referenceDelegate=e(this),this.Pi=new OO(this),this.indexManager=new _O,this.remoteDocumentCache=function(i){return new bO(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new gO(n),this.Ii=new PO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new NO(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new LO(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class LO extends oD{constructor(e){super(),this.currentSequenceNumber=e}}class ig{constructor(e){this.persistence=e,this.Ri=new rg,this.Vi=null}static mi(e){return new ig(e)}get fi(){if(this.Vi)return this.Vi;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const i=ne.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,ce.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class nh{constructor(e,n){this.persistence=e,this.pi=new ms(r=>uD(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=SO(this,n)}static mi(e,n){return new nh(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?j.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ce.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=oc(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return j.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ye(),i=ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new sg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return fx()?8:aD(Lt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new MO;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Ns()<=me.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Ns()<=me.DEBUG&&Q("QueryEngine","Query:",bs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ns()<=me.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):j.resolve())}ys(e,n){if(Uv(n))return j.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zc(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ye(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Zc(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Uv(n)||i.isEqual(ce.min())?j.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?j.resolve(null):(Ns()<=me.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bs(n)),this.vs(e,o,n,nD(i,dl)).next(l=>l))})}Ds(e,n){let r=new ht(F0(e));return n.forEach((i,s)=>{Fh(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Ns()<=me.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",bs(n)),this.ps.getDocumentsMatchingQuery(e,n,_i.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="LocalStore",UO=3e8;class FO{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ge(ge),this.xs=new ms(s=>Xm(s),Jm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function jO(t,e,n,r){return new FO(t,e,n,r)}async function cS(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ye();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function $O(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let E=j.resolve();return m.forEach(A=>{E=E.next(()=>d.getEntry(u,A)).next(P=>{const b=c.docVersions.get(A);Se(b!==null,48541),P.version.compareTo(b)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ye();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hS(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function BO(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(At.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(P,b,S){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=UO?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,E,d)&&l.push(n.Pi.updateTargetData(s,E))});let u=Cr(),c=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(zO(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(ce.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(f=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function zO(t,e,n){let r=ye(),i=ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ce.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Q(og,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function HO(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Km),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WO(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new ei(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Ip(t,e,n){const r=ue(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Uo(o))throw o;Q(og,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Xv(t,e,n){const r=ue(t);let i=ce.min(),s=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ue(u),m=f.xs.get(d);return m!==void 0?j.resolve(f.Ms.get(m)):f.Pi.getTargetData(c,d)}(r,o,Yn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:ce.min(),n?s:ye())).next(l=>(qO(r,xD(e),l),{documents:l,Qs:s})))}function qO(t,e,n){let r=t.Os.get(e)||ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Jv{constructor(){this.activeTargetIds=LD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GO{constructor(){this.Mo=new Jv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Jv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="ConnectivityMonitor";class ew{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Q(Zv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Q(Zv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu=null;function Sp(){return bu===null?bu=function(){return 268435456+Math.round(2147483648*Math.random())}():bu++,"0x"+bu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="RestConnection",QO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Yc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Sp(),l=this.zo(e,n.toUriEncodedString());Q(Kd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=bo(c);return this.Jo(e,l,u,r,d).then(f=>(Q(Kd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Eo(Kd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=QO[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt="WebChannelConnection";class JO extends YO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Sp();return new Promise((l,u)=>{const c=new c0;c.setWithCredentials(!0),c.listenOnce(h0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case sc.NO_ERROR:const f=c.getResponseJson();Q(kt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case sc.TIMEOUT:Q(kt,`RPC '${e}' ${o} timed out`),u(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case sc.HTTP_ERROR:const m=c.getStatus();if(Q(kt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const A=E==null?void 0:E.error;if(A&&A.status&&A.message){const P=function(S){const v=S.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(v)>=0?v:F.UNKNOWN}(A.status);u(new K(P,A.message))}else u(new K(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new K(F.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{Q(kt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Q(kt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Sp(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=p0(),l=f0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");Q(kt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);this.I_(f);let m=!1,E=!1;const A=new XO({Yo:b=>{E?Q(kt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(Q(kt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),Q(kt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},Zo:()=>f.close()}),P=(b,S,v)=>{b.listen(S,R=>{try{v(R)}catch(L){setTimeout(()=>{throw L},0)}})};return P(f,Ia.EventType.OPEN,()=>{E||(Q(kt,`RPC '${e}' stream ${i} transport opened.`),A.o_())}),P(f,Ia.EventType.CLOSE,()=>{E||(E=!0,Q(kt,`RPC '${e}' stream ${i} transport closed`),A.a_(),this.E_(f))}),P(f,Ia.EventType.ERROR,b=>{E||(E=!0,Eo(kt,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),A.a_(new K(F.UNAVAILABLE,"The operation could not be completed")))}),P(f,Ia.EventType.MESSAGE,b=>{var S;if(!E){const v=b.data[0];Se(!!v,16349);const R=v,L=(R==null?void 0:R.error)||((S=R[0])==null?void 0:S.error);if(L){Q(kt,`RPC '${e}' stream ${i} received error:`,L);const B=L.status;let H=function(T){const I=et[T];if(I!==void 0)return X0(I)}(B),g=L.message;H===void 0&&(H=F.INTERNAL,g="Unknown error status: "+B+" with message "+L.message),E=!0,A.a_(new K(H,g)),f.close()}else Q(kt,`RPC '${e}' stream ${i} received:`,v),A.u_(v)}}),P(l,d0.STAT_EVENT,b=>{b.stat===dp.PROXY?Q(kt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===dp.NOPROXY&&Q(kt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.__()},0),A}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Qd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t){return new nO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="PersistentStream";class fS{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new dS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Ar(n.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(tw,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Q(tw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZO extends fS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=sO(this.serializer,e),r=function(s){if(!("targetChange"in s))return ce.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?Jn(o.readTime):ce.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Tp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=yp(u)?{documents:lO(s,u)}:{query:iS(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=eS(s,o.resumeToken);const c=vp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=th(s,o.snapshotVersion.toTimestamp());const c=vp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=hO(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Tp(this.serializer),n.removeTarget=e,this.q_(n)}}class e2 extends fS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=aO(e.writeResults,e.commitTime),r=Jn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Tp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>oO(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{}class n2 extends t2{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,wp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,wp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class r2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ar(n),this.aa=!1):Q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="RemoteStore";class i2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{gs(this)&&(Q(cs,"Restarting streams for network reachability change."),await async function(u){const c=ue(u);c.Ea.add(4),await jl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Hh(c)}(this))})}),this.Ra=new r2(r,i)}}async function Hh(t){if(gs(t))for(const e of t.da)await e(!0)}async function jl(t){for(const e of t.da)await e(!1)}function pS(t,e){const n=ue(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),cg(n)?ug(n):jo(n).O_()&&lg(n,e))}function ag(t,e){const n=ue(t),r=jo(n);n.Ia.delete(e),r.O_()&&mS(n,e),n.Ia.size===0&&(r.O_()?r.L_():gs(n)&&n.Ra.set("Unknown"))}function lg(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}jo(t).Y_(e)}function mS(t,e){t.Va.Ue(e),jo(t).Z_(e)}function ug(t){t.Va=new JD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),jo(t).start(),t.Ra.ua()}function cg(t){return gs(t)&&!jo(t).x_()&&t.Ia.size>0}function gs(t){return ue(t).Ea.size===0}function gS(t){t.Va=void 0}async function s2(t){t.Ra.set("Online")}async function o2(t){t.Ia.forEach((e,n)=>{lg(t,e)})}async function a2(t,e){gS(t),cg(t)?(t.Ra.ha(e),ug(t)):t.Ra.set("Unknown")}async function l2(t,e,n){if(t.Ra.set("Online"),e instanceof Z0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){Q(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rh(t,r)}else if(e instanceof uc?t.Va.Ze(e):e instanceof J0?t.Va.st(e):t.Va.tt(e),!n.isEqual(ce.min()))try{const r=await hS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(At.EMPTY_BYTE_STRING,d.snapshotVersion)),mS(s,u);const f=new ei(d.target,u,c,d.sequenceNumber);lg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Q(cs,"Failed to raise snapshot:",r),await rh(t,r)}}async function rh(t,e,n){if(!Uo(e))throw e;t.Ea.add(1),await jl(t),t.Ra.set("Offline"),n||(n=()=>hS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q(cs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Hh(t)})}function yS(t,e){return e().catch(n=>rh(t,n,e))}async function Wh(t){const e=ue(t),n=Ti(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Km;for(;u2(e);)try{const i=await HO(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,c2(e,i)}catch(i){await rh(e,i)}_S(e)&&vS(e)}function u2(t){return gs(t)&&t.Ta.length<10}function c2(t,e){t.Ta.push(e);const n=Ti(t);n.O_()&&n.X_&&n.ea(e.mutations)}function _S(t){return gs(t)&&!Ti(t).x_()&&t.Ta.length>0}function vS(t){Ti(t).start()}async function h2(t){Ti(t).ra()}async function d2(t){const e=Ti(t);for(const n of t.Ta)e.ea(n.mutations)}async function f2(t,e,n){const r=t.Ta.shift(),i=eg.from(r,e,n);await yS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wh(t)}async function p2(t,e){e&&Ti(t).X_&&await async function(r,i){if(function(o){return QD(o)&&o!==F.ABORTED}(i.code)){const s=r.Ta.shift();Ti(r).B_(),await yS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Wh(r)}}(t,e),_S(t)&&vS(t)}async function nw(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),Q(cs,"RemoteStore received new credentials");const r=gs(n);n.Ea.add(3),await jl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Hh(n)}async function m2(t,e){const n=ue(t);e?(n.Ea.delete(2),await Hh(n)):e||(n.Ea.add(2),await jl(n),n.Ra.set("Unknown"))}function jo(t){return t.ma||(t.ma=function(n,r,i){const s=ue(n);return s.sa(),new ZO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:s2.bind(null,t),t_:o2.bind(null,t),r_:a2.bind(null,t),H_:l2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),cg(t)?ug(t):t.Ra.set("Unknown")):(await t.ma.stop(),gS(t))})),t.ma}function Ti(t){return t.fa||(t.fa=function(n,r,i){const s=ue(n);return s.sa(),new e2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:h2.bind(null,t),r_:p2.bind(null,t),ta:d2.bind(null,t),na:f2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Wh(t)):(await t.fa.stop(),t.Ta.length>0&&(Q(cs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dg(t,e){if(Ar("AsyncQueue",`${e}: ${t}`),Uo(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{static emptySet(e){return new so(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Sa(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new so;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.ga=new Ge(ne.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):se(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Co{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Co(e,n,so.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class y2{constructor(){this.queries=iw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ue(n),s=i.queries;i.queries=iw(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function iw(){return new ms(t=>U0(t),Uh)}async function _2(t,e){const n=ue(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new g2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=dg(o,`Initialization of query '${bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&fg(n)}async function v2(t,e){const n=ue(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function w2(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&fg(n)}function E2(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function fg(t){t.Ca.forEach(e=>{e.next()})}var Ap,sw;(sw=Ap||(Ap={})).Ma="default",sw.Cache="cache";class T2{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Co(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ap.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e){this.key=e}}class ES{constructor(e){this.key=e}}class I2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ye(),this.mutatedKeys=ye(),this.eu=F0(e),this.tu=new so(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new rw,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=Fh(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let b=!1;m&&E?m.data.isEqual(E.data)?A!==P&&(r.track({type:3,doc:E}),b=!0):this.su(m,E)||(r.track({type:2,doc:E}),b=!0,(u&&this.eu(E,u)>0||c&&this.eu(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),b=!0):m&&!E&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(E?(o=o.add(E),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(E,A){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Rt:b})}};return P(E)-P(A)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Co(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new rw,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ye(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new ES(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new wS(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Co.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const pg="SyncEngine";class S2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class A2{constructor(e){this.key=e,this.hu=!1}}class C2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ms(l=>U0(l),Uh),this.Iu=new Map,this.Eu=new Set,this.du=new Ge(ne.comparator),this.Au=new Map,this.Ru=new rg,this.Vu={},this.mu=new Map,this.fu=Ao.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function R2(t,e,n=!0){const r=RS(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await TS(r,e,n,!0),i}async function P2(t,e){const n=RS(t);await TS(n,e,!0,!1)}async function TS(t,e,n,r){const i=await WO(t.localStore,Yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await x2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pS(t.remoteStore,i),l}async function x2(t,e,n,r,i){t.pu=(f,m,E)=>async function(P,b,S,v){let R=b.view.ru(S);R.Cs&&(R=await Xv(P.localStore,b.query,!1).then(({documents:g})=>b.view.ru(g,R)));const L=v&&v.targetChanges.get(b.targetId),B=v&&v.targetMismatches.get(b.targetId)!=null,H=b.view.applyChanges(R,P.isPrimaryClient,L,B);return aw(P,b.targetId,H.au),H.snapshot}(t,f,m,E);const s=await Xv(t.localStore,e,!0),o=new I2(e,s.Qs),l=o.ru(s.documents),u=Fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);aw(t,n,c.au);const d=new S2(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function k2(t,e,n){const r=ue(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Uh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ip(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ag(r.remoteStore,i.targetId),Cp(r,i.targetId)}).catch(Vo)):(Cp(r,i.targetId),await Ip(r.localStore,i.targetId,!0))}async function N2(t,e){const n=ue(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ag(n.remoteStore,r.targetId))}async function b2(t,e,n){const r=F2(t);try{const i=await function(o,l){const u=ue(o),c=ke.now(),d=l.reduce((E,A)=>E.add(A.key),ye());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=Cr(),P=ye();return u.Ns.getEntries(E,d).next(b=>{A=b,A.forEach((S,v)=>{v.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,A)).next(b=>{f=b;const S=[];for(const v of l){const R=zD(v,f.get(v.key).overlayedDocument);R!=null&&S.push(new xi(v.key,R,P0(R.value.mapValue),Xn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,S,l)}).next(b=>{m=b;const S=b.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(E,b.batchId,S)})}).then(()=>({batchId:m.batchId,changes:$0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ge(ge)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await $l(r,i.changes),await Wh(r.remoteStore)}catch(i){const s=dg(i,"Failed to persist write");n.reject(s)}}async function IS(t,e){const n=ue(t);try{const r=await BO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Se(o.hu,14607):i.removedDocuments.size>0&&(Se(o.hu,42227),o.hu=!1))}),await $l(n,r,e)}catch(r){await Vo(r)}}function ow(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ue(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(c=!0)}),c&&fg(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function D2(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ge(ne.comparator);o=o.insert(s,Dt.newNoDocument(s,ce.min()));const l=ye().add(s),u=new Bh(ce.min(),new Map,new Ge(ge),o,l);await IS(r,u),r.du=r.du.remove(s),r.Au.delete(e),mg(r)}else await Ip(r.localStore,e,!1).then(()=>Cp(r,e,n)).catch(Vo)}async function O2(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await $O(n.localStore,e);AS(n,r,null),SS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $l(n,i)}catch(i){await Vo(i)}}async function L2(t,e,n){const r=ue(t);try{const i=await function(o,l){const u=ue(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(Se(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);AS(r,e,n),SS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $l(r,i)}catch(i){await Vo(i)}}function SS(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function AS(t,e,n){const r=ue(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Cp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||CS(t,r)})}function CS(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ag(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),mg(t))}function aw(t,e,n){for(const r of n)r instanceof wS?(t.Ru.addReference(r.key,e),M2(t,r)):r instanceof ES?(Q(pg,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||CS(t,r.key)):se(19791,{wu:r})}function M2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Q(pg,"New document in limbo: "+n),t.Eu.add(r),mg(t))}function mg(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(Le.fromString(e)),r=t.fu.next();t.Au.set(r,new A2(n)),t.du=t.du.insert(n,r),pS(t.remoteStore,new ei(Yn(L0(n.path)),r,"TargetPurposeLimboResolution",Lh.ce))}}async function $l(t,e,n){const r=ue(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=sg.As(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=ue(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,m=>j.forEach(m.Es,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>j.forEach(m.ds,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!Uo(f))throw f;Q(og,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.Ms.get(m),A=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(A);d.Ms=d.Ms.insert(m,P)}}}(r.localStore,s))}async function V2(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){Q(pg,"User change. New user:",e.toKey());const r=await cS(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $l(n,r.Ls)}}function U2(t,e){const n=ue(t),r=n.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let i=ye();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function RS(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=D2.bind(null,e),e.Pu.H_=w2.bind(null,e.eventManager),e.Pu.yu=E2.bind(null,e.eventManager),e}function F2(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=O2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=L2.bind(null,e),e}class ih{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return jO(this.persistence,new VO,e.initialUser,this.serializer)}Cu(e){return new uS(ig.mi,this.serializer)}Du(e){return new GO}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ih.provider={build:()=>new ih};class j2 extends ih{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof nh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new TO(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new uS(r=>nh.mi(r,n),this.serializer)}}class Rp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ow(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=V2.bind(null,this.syncEngine),await m2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new y2}()}createDatastore(e){const n=zh(e.databaseInfo.databaseId),r=function(s){return new JO(s)}(e.databaseInfo);return function(s,o,l,u){return new n2(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new i2(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ow(this.syncEngine,n,0),function(){return ew.v()?new ew:new KO}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new C2(i,s,o,l,u,c);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ue(i);Q(cs,"RemoteStore shutting down."),s.Ea.add(5),await jl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Rp.provider={build:()=>new Rp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="FirestoreClient";class B2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Nt.UNAUTHENTICATED,this.clientId=Gm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Q(Ii,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q(Ii,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yd(t,e){t.asyncQueue.verifyOperationInProgress(),Q(Ii,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function lw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await z2(t);Q(Ii,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>nw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>nw(e.remoteStore,i)),t._onlineComponents=e}async function z2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q(Ii,"Using user provided OfflineComponentProvider");try{await Yd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Eo("Error using user provided cache. Falling back to memory cache: "+n),await Yd(t,new ih)}}else Q(Ii,"Using default OfflineComponentProvider"),await Yd(t,new j2(void 0));return t._offlineComponents}async function gg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q(Ii,"Using user provided OnlineComponentProvider"),await lw(t,t._uninitializedComponentsProvider._online)):(Q(Ii,"Using default OnlineComponentProvider"),await lw(t,new Rp))),t._onlineComponents}function H2(t){return gg(t).then(e=>e.syncEngine)}function W2(t){return gg(t).then(e=>e.datastore)}async function q2(t){const e=await gg(t),n=e.eventManager;return n.onListen=R2.bind(null,e.syncEngine),n.onUnlisten=k2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=P2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=N2.bind(null,e.syncEngine),n}function G2(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new $2({next:m=>{d.Nu(),o.enqueueAndForget(()=>v2(s,f)),m.fromCache&&u.source==="server"?c.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new T2(l,d,{includeMetadataChanges:!0,qa:!0});return _2(s,f)}(await q2(t),t.asyncQueue,e,n,r)),r.promise}function K2(t,e,n){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await W2(t);r.resolve(async function(o,l,u){var P;const c=ue(o),{request:d,gt:f,parent:m}=uO(c.serializer,PD(l),u);c.connection.$o||delete d.parent;const E=(await c.Ho("RunAggregationQuery",c.serializer.databaseId,m,d,1)).filter(b=>!!b.result);Se(E.length===1,64727);const A=(P=E[0].result)==null?void 0:P.aggregateFields;return Object.keys(A).reduce((b,S)=>(b[f[S]]=A[S],b),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="firestore.googleapis.com",cw=!0;class hw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xS,this.ssl=cw}else this.host=e.host,this.ssl=e.ssl??cw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wO)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wb;switch(r.type){case"firstParty":return new Qb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=uw.get(n);r&&(Q("ComponentProvider","Removing Datastore"),uw.delete(n),r.terminate())}(this),Promise.resolve()}}function Q2(t,e,n,r={}){var c;t=us(t,qh);const i=bo(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(EI(`https://${l}`),TI("Firestore",!0)),s.host!==xS&&s.host!==l&&Eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ss(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Nt.MOCK_USER;else{d=ix(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Nt(m)}t._authCredentials=new qb(new g0(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ki(this.firestore,e,this._query)}}class ct{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Vl(n,ct._jsonSchema))return new ct(e,r||null,new ne(Le.fromString(n.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:it("string",ct._jsonSchemaVersion),referencePath:it("string")};class pi extends ki{constructor(e,n,r){super(e,n,L0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new ne(e))}withConverter(e){return new pi(this.firestore,e,this._path)}}function wl(t,e,...n){if(t=Mt(t),y0("collection","path",e),t instanceof qh){const r=Le.fromString(e,...n);return Sv(r),new pi(t,null,r)}{if(!(t instanceof ct||t instanceof pi))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Sv(r),new pi(t.firestore,null,r)}}function Y2(t,e,...n){if(t=Mt(t),arguments.length===1&&(e=Gm.newId()),y0("doc","path",e),t instanceof qh){const r=Le.fromString(e,...n);return Iv(r),new ct(t,null,new ne(r))}{if(!(t instanceof ct||t instanceof pi))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Iv(r),new ct(t.firestore,t instanceof pi?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="AsyncQueue";class fw{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new dS(this,"async_queue_retry"),this._c=()=>{const r=Qd();r&&Q(dw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Qd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Qd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new yr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Uo(e))throw e;Q(dw,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ar("INTERNAL UNHANDLED ERROR: ",pw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=hg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&se(47125,{Pc:pw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function pw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Bl extends qh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new fw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fw(e),this._firestoreClient=void 0,await e}}}function X2(t,e){const n=typeof t=="object"?t:RI(),r=typeof t=="string"?t:Yc,i=Vm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nx("firestore");s&&Q2(i,...s)}return i}function yg(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||J2(t),t._firestoreClient}function J2(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new fD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,PS(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new B2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class eL{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(At.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pn(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Vl(e,pn._jsonSchema))return pn.fromBase64String(e.bytes)}}pn._jsonSchemaVersion="firestore/bytes/1.0",pn._jsonSchema={type:it("string",pn._jsonSchemaVersion),bytes:it("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zn._jsonSchemaVersion}}static fromJSON(e){if(Vl(e,Zn._jsonSchema))return new Zn(e.latitude,e.longitude)}}Zn._jsonSchemaVersion="firestore/geoPoint/1.0",Zn._jsonSchema={type:it("string",Zn._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Vl(e,er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new er(e.vectorValues);throw new K(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}er._jsonSchemaVersion="firestore/vectorValue/1.0",er._jsonSchema={type:it("string",er._jsonSchemaVersion),vectorValues:it("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL=/^__.*__$/;class nL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ul(e,this.data,n,this.fieldTransforms)}}class kS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function NS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{Ac:t})}}class _g{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new _g({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return sh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(NS(this.Ac)&&tL.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class rL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zh(e)}Cc(e,n,r,i=!1){return new _g({Ac:e,methodName:n,Dc:r,path:Tt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vg(t){const e=t._freezeSettings(),n=zh(t._databaseId);return new rL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iL(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Eg("Data must be an object, but it was:",o,r);const l=bS(r,o);let u,c;if(s.merge)u=new sn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Pp(e,f,n);if(!o.contains(m))throw new K(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);OS(d,m)||d.push(m)}u=new sn(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new nL(new Gt(l),u,c)}class Qh extends Kh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qh}}class wg extends Kh{_toFieldTransform(e){return new FD(e.path,new yl)}isEqual(e){return e instanceof wg}}function sL(t,e,n,r){const i=t.Cc(1,e,n);Eg("Data must be an object, but it was:",i,r);const s=[],o=Gt.empty();Pi(r,(u,c)=>{const d=Tg(e,u,n);c=Mt(c);const f=i.yc(d);if(c instanceof Qh)s.push(d);else{const m=zl(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new sn(s);return new kS(o,l,i.fieldTransforms)}function oL(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Pp(e,r,n)],u=[i];if(s.length%2!=0)throw new K(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Pp(e,s[m])),u.push(s[m+1]);const c=[],d=Gt.empty();for(let m=l.length-1;m>=0;--m)if(!OS(c,l[m])){const E=l[m];let A=u[m];A=Mt(A);const P=o.yc(E);if(A instanceof Qh)c.push(E);else{const b=zl(A,P);b!=null&&(c.push(E),d.set(E,b))}}const f=new sn(c);return new kS(d,f,o.fieldTransforms)}function aL(t,e,n,r=!1){return zl(n,t.Cc(r?4:3,e))}function zl(t,e){if(DS(t=Mt(t)))return Eg("Unsupported field value:",e,t),bS(t,e);if(t instanceof Kh)return function(r,i){if(!NS(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=zl(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:th(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:th(i.serializer,s)}}if(r instanceof Zn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pn)return{bytesValue:eS(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ng(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof er)return function(o,l){return{mapValue:{fields:{[C0]:{stringValue:R0},[Xc]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Zm(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Oh(r)}`)}(t,e)}function bS(t,e){const n={};return w0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pi(t,(r,i)=>{const s=zl(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function DS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Zn||t instanceof pn||t instanceof ct||t instanceof Kh||t instanceof er)}function Eg(t,e,n){if(!DS(n)||!_0(n)){const r=Oh(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Pp(t,e,n){if((e=Mt(e))instanceof Gh)return e._internalPath;if(typeof e=="string")return Tg(t,e);throw sh("Field path arguments must be of type string or ",t,!1,void 0,n)}const lL=new RegExp("[~\\*/\\[\\]]");function Tg(t,e,n){if(e.search(lL)>=0)throw sh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gh(...e.split("."))._internalPath}catch{throw sh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,l+t+u)}function OS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Yh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uL extends LS{data(){return super.data()}}function Yh(t,e){return typeof e=="string"?Tg(t,e):e instanceof Gh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ig{}class Sg extends Ig{}function Os(t,e,...n){let r=[];e instanceof Ig&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ag).length,l=s.filter(u=>u instanceof Xh).length;if(o>1||o>0&&l>0)throw new K(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Xh extends Sg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xh(e,n,r)}_apply(e){const n=this._parse(e);return MS(e._query,n),new ki(e.firestore,e.converter,_p(e._query,n))}_parse(e){const n=vg(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){gw(f,d);const A=[];for(const P of f)A.push(mw(u,s,P));m={arrayValue:{values:A}}}else m=mw(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||gw(f,d),m=aL(l,o,f,d==="in"||d==="not-in");return rt.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ki(t,e,n){const r=e,i=Yh("where",t);return Xh._create(i,r,n)}class Ag extends Ig{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ag(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)MS(o,u),o=_p(o,u)}(e._query,n),new ki(e.firestore,e.converter,_p(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Cg extends Sg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Cg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gl(s,o)}(e._query,this._field,this._direction);return new ki(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Fo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function hL(t,e="asc"){const n=e,r=Yh("orderBy",t);return Cg._create(r,n)}class Rg extends Sg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Rg(e,n,r)}_apply(e){return new ki(e.firestore,e.converter,Zc(e._query,this._limit,this._limitType))}}function dL(t){return Rg._create("limit",t,"F")}function mw(t,e,n){if(typeof(n=Mt(n))=="string"){if(n==="")throw new K(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!M0(e)&&n.indexOf("/")!==-1)throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!ne.isDocumentKey(r))throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bv(t,new ne(r))}if(n instanceof ct)return bv(t,n._key);throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oh(n)}.`)}function gw(t,e){if(!Array.isArray(t)||t.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function MS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class fL{convertValue(e,n="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Pi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Xc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Xe(o.doubleValue));return new er(n)}convertGeoPoint(e){return new Zn(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Vh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fl(e));default:return null}}convertTimestamp(e){const n=vi(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Se(aS(r),9688,{name:e});const i=new pl(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||Ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function mL(){return new Z2("count")}class Du{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oo extends LS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Yh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=oo._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}oo._jsonSchemaVersion="firestore/documentSnapshot/1.0",oo._jsonSchema={type:it("string",oo._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class cc extends oo{data(e={}){return super.data(e)}}class ao{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Du(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cc(this._firestore,this._userDataWriter,r.key,r,new Du(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new cc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Du(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new cc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Du(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:gL(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ao._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Gm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function gL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}ao._jsonSchemaVersion="firestore/querySnapshot/1.0",ao._jsonSchema={type:it("string",ao._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};class VS extends fL{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,n)}}function Pg(t){t=us(t,ki);const e=us(t.firestore,Bl),n=yg(e),r=new VS(e);return cL(t._query),G2(n,t._query).then(i=>new ao(e,r,t,i))}function _4(t,e,n,...r){t=us(t,ct);const i=us(t.firestore,Bl),s=vg(i);let o;return o=typeof(e=Mt(e))=="string"||e instanceof Gh?oL(s,"updateDoc",t._key,e,n,r):sL(s,"updateDoc",t._key,e),US(i,[o.toMutation(t._key,Xn.exists(!0))])}function yL(t,e){const n=us(t.firestore,Bl),r=Y2(t),i=pL(t.converter,e);return US(n,[iL(vg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Xn.exists(!1))]).then(()=>r)}function US(t,e){return function(r,i){const s=new yr;return r.asyncQueue.enqueueAndForget(async()=>b2(await H2(r),i,s)),s.promise}(yg(t),e)}function _L(t){return vL(t,{count:mL()})}function vL(t,e){const n=us(t.firestore,Bl),r=yg(n),i=hD(e,(s,o)=>new GD(o,s.aggregateType,s._internalFieldPath));return K2(r,t._query,i).then(s=>function(l,u,c){const d=new VS(l);return new eL(u,d,c)}(n,t,s))}function wL(){return new wg("serverTimestamp")}(function(e,n=!0){(function(i){Mo=i})(Do),vo(new os("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Bl(new Gb(r.getProvider("auth-internal")),new Yb(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pl(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),hi(vv,wv,e),hi(vv,wv,"esm2020")})();const EL={apiKey:"AIzaSyCWfqdRcuoy8opgUwyWAUbc6iVmtw1wSfE",authDomain:"limlim-32e6a.firebaseapp.com",projectId:"limlim-32e6a",storageBucket:void 0,messagingSenderId:void 0,appId:"1:525168702365:web:79f3fe9d2ea7a77bd0f574"},FS=CI(EL),xg=zb(FS),El=X2(FS);function jS(t,e){const[n,r,i]=t.split("-").map(Number),[s,o]=e.split(":").map(Number);return ke.fromDate(new Date(n,r-1,i,s,o,0))}async function TL({date:t,time:e}){if(!t||!e)return{available:!1};const n=jS(t,e),r=90*60*1e3,i=ke.fromMillis(n.toMillis()-r),s=ke.fromMillis(n.toMillis()+r),o=Os(wl(El,"bookings"),Ki("startAt",">=",i),Ki("startAt","<=",s),Ki("status","in",["pending","confirmed"]));return{available:(await Pg(o)).empty}}async function IL({package:t,date:e,time:n,details:r}){const i=jS(e,n),s={reference:`BK-${Math.random().toString(36).slice(2,8).toUpperCase()}`,status:"pending",package:t,date:e,time:n,startAt:i,details:r,createdAt:wL()};return{id:(await yL(wl(El,"bookings"),s)).id,reference:s.reference}}const Xd=[{id:"portrait",name:"Portrait",price:250,duration:"60–90 min",desc:"Clean, crisp portraits in studio or on location.",includes:["Up to 2 outfits","15 edited photos","Online gallery"]},{id:"event",name:"Event",price:700,duration:"3 hours",desc:"Coverage for birthdays, engagements, and more.",includes:["Candid + posed","Next-day sneak peek","Highlight reel add-on"]},{id:"wedding",name:"Wedding",price:2200,duration:"8 hours",desc:"Story-driven wedding coverage for your day.",includes:["Timeline planning","Second shooter (optional)","Album-ready edits"]}];function SL(){const[t,e]=U.useState(0),[n,r]=U.useState(Xd[0]),[i,s]=U.useState(""),[o,l]=U.useState(""),[u,c]=U.useState(!1),[d,f]=U.useState(null),[m,E]=U.useState({name:"",email:"",phone:"",location:"Studio"}),[A,P]=U.useState(!1),[b,S]=U.useState(null),v=!!n,R=!!i&&!!o&&d===!0,L=m.name&&m.email&&m.phone,B=async()=>{c(!0),f(null);const y=await TL({date:i,time:o});f(y.available),c(!1)},H=async()=>{P(!0);const y=await IL({package:n,date:i,time:o,details:m});S(y),P(!1)},g=()=>{e(0),r(Xd[0]),s(""),l(""),f(null),E({name:"",email:"",phone:"",location:"Studio"}),P(!1),S(null)};return w.jsx("section",{id:"booking",className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsxs("div",{className:"flex items-center justify-between mb-6",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Book a Session"}),w.jsxs("p",{className:"text-charcoal/70 mt-1",children:["Complete the steps to request your slot. ",w.jsx("span",{className:"text-rose/80",children:"(Demo only—no emails are sent.)"})]})]}),w.jsx(qP,{step:t})]}),w.jsxs("div",{className:"glass p-5 md:p-6 rounded-2xl border border-rose/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white/80",children:[t===0&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Choose a package"}),w.jsxs("p",{className:"text-charcoal/70 text-sm mt-1",children:["You’ve selected ",w.jsx("span",{className:"font-semibold text-rose",children:n.name}),"."]}),w.jsx("div",{className:"mt-6 grid md:grid-cols-3 gap-6",children:Xd.map(y=>w.jsx(GP,{p:y,selected:y.id===n.id,onSelect:()=>r(y)},y.id))}),w.jsx("div",{className:"mt-6 flex justify-end",children:w.jsx("button",{onClick:()=>e(1),disabled:!v,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${v?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})})]}),t===1&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Pick date & time"}),w.jsxs("div",{className:"mt-4 grid md:grid-cols-3 gap-4",children:[w.jsxs("div",{className:"col-span-1",children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Date"}),w.jsx("input",{type:"date",value:i,onChange:y=>s(y.target.value),className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"})]}),w.jsxs("div",{className:"col-span-1",children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Time"}),w.jsx("input",{type:"time",value:o,onChange:y=>l(y.target.value),className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"})]}),w.jsx("div",{className:"col-span-1 flex items-end",children:w.jsx("button",{onClick:B,disabled:!i||!o||u,className:`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${!i||!o||u?"bg-blush text-charcoal/50 cursor-not-allowed":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:u?"Checking...":"Check Availability"})})]}),d===!0&&w.jsx("p",{className:"mt-3 text-sm text-green-700",children:"✅ Slot available. You can proceed."}),d===!1&&w.jsx("p",{className:"mt-3 text-sm text-red-700",children:"❌ Sorry, that time is taken. Try a different time."}),w.jsxs("div",{className:"mt-6 flex justify-between",children:[w.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(0),children:"← Back"}),w.jsx("button",{onClick:()=>e(2),disabled:!R,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${R?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})]})]}),t===2&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Your details"}),w.jsxs("div",{className:"mt-4 grid md:grid-cols-2 gap-4",children:[w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Full name"}),w.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:m.name,onChange:y=>E({...m,name:y.target.value}),placeholder:"e.g., Lama NC"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Email"}),w.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:m.email,onChange:y=>E({...m,email:y.target.value}),placeholder:"you@example.com"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Phone"}),w.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:m.phone,onChange:y=>E({...m,phone:y.target.value}),placeholder:"(555) 123-4567"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Location"}),w.jsxs("select",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:m.location,onChange:y=>E({...m,location:y.target.value}),children:[w.jsx("option",{children:"Studio"}),w.jsx("option",{children:"Client Location"}),w.jsx("option",{children:"Outdoors"})]})]})]}),w.jsxs("div",{className:"mt-6 flex justify-between",children:[w.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(1),children:"← Back"}),w.jsx("button",{onClick:()=>e(3),disabled:!L,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${L?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})]})]}),t===3&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Review & confirm"}),w.jsxs("div",{className:"mt-4 grid md:grid-cols-2 gap-6",children:[w.jsxs("div",{className:"p-4 rounded-xl border border-rose/30 bg-blush/20",children:[w.jsx("h4",{className:"font-semibold text-charcoal",children:"Summary"}),w.jsxs("ul",{className:"mt-2 text-sm text-charcoal/80 space-y-1",children:[w.jsxs("li",{children:["Package: ",w.jsx("span",{className:"font-medium text-rose",children:n.name})," — $",n.price]}),w.jsxs("li",{children:["Date & Time: ",w.jsxs("span",{className:"font-medium",children:[i||"—"," ",o||""]})]}),w.jsxs("li",{children:["Duration: ",n.duration]}),w.jsxs("li",{children:["Location: ",m.location]})]})]}),w.jsxs("div",{className:"p-4 rounded-xl border border-rose/30 bg-blush/20",children:[w.jsx("h4",{className:"font-semibold text-charcoal",children:"Contact"}),w.jsxs("ul",{className:"mt-2 text-sm text-charcoal/80 space-y-1",children:[w.jsxs("li",{children:["Name: ",m.name||"—"]}),w.jsxs("li",{children:["Email: ",m.email||"—"]}),w.jsxs("li",{children:["Phone: ",m.phone||"—"]})]})]})]}),b?w.jsxs("div",{className:"mt-6 rounded-xl border border-rose/30 p-4 bg-blush/20",children:[w.jsx("p",{className:"font-semibold text-charcoal",children:"🎉 Booking requested!"}),w.jsxs("p",{className:"text-sm text-charcoal/80 mt-1",children:["Your reference: ",w.jsx("span",{className:"font-mono text-rose",children:b.reference}),"."]}),w.jsx("div",{className:"mt-4 flex gap-3",children:w.jsx("button",{onClick:g,className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Book Another"})})]}):w.jsxs("div",{className:"mt-6 flex justify-between",children:[w.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(2),children:"← Back"}),w.jsx("button",{onClick:H,disabled:A,className:"rounded-full px-5 py-3 text-sm font-semibold shadow-md bg-gold text-charcoal hover:bg-rose hover:text-ivory transition-all",children:A?"Submitting...":"Confirm Booking"})]})]})]})]})})}function AL(){const t=[{q:"How fast do I get photos?",a:"Sneak peeks within 24–48 hours. Full galleries typically within 10–14 days."},{q:"Do you travel?",a:"Yes! Travel within 25 miles is included. Beyond that, a small fee applies."},{q:"Can I reschedule?",a:"Absolutely—please let me know 48 hours in advance when possible."},{q:"Do you offer video?",a:"Yes, as an add-on for events and weddings. Ask for bundles."}];return w.jsx("section",{id:"faq",className:"w-full py-16 md:py-24 bg-pink-50",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-pink-700",children:"FAQ"}),w.jsx("div",{className:"mt-6 grid md:grid-cols-2 gap-4",children:t.map((e,n)=>w.jsxs("div",{className:"p-4 rounded-2xl border border-pink-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-white hover:shadow-lg transition-shadow",children:[w.jsx("div",{className:"font-semibold text-pink-700",children:e.q}),w.jsx("div",{className:"text-pink-900/80 text-sm mt-1",children:e.a})]},n))})]})})}const yw="lamaphoto";async function CL(t){const e=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function RL(){const[t,e]=U.useState(""),[n,r]=U.useState(!1),[i,s]=U.useState(null),[o,l]=U.useState([]),[u,c]=U.useState(""),d=async()=>{c(""),r(!0),s(null),l([]);try{const E=(await Pg(wl(El,"galleries"))).docs.map(b=>b.data()),A=await CL(t.trim()),P=E.find(b=>b.codeHash===A);if(!P){c("Invalid access code. Double-check and try again."),r(!1);return}s(P);try{const b=await fetch(`https://res.cloudinary.com/${yw}/image/list/${P.tag}.json`,{cache:"no-store"});if(!b.ok)throw new Error(`HTTP ${b.status}`);const S=await b.json();l(S.resources||[])}catch(b){console.error(b),c("Could not load images. Make sure Cloudinary ‘Asset lists’ are enabled and your photos are tagged with the gallery tag.")}}catch(m){console.error(m),c("There was a problem checking your code. Please try again.")}finally{r(!1)}},f=()=>{e(""),s(null),l([]),c("")};return w.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Client Gallery"}),!i&&w.jsxs("div",{className:"mt-6 max-w-md space-y-3",children:[w.jsx("p",{className:"text-charcoal/70",children:"Enter your access code to view your photos."}),w.jsx("input",{type:"password",value:t,onChange:m=>e(m.target.value),placeholder:"Access code",className:"w-full rounded-xl border border-rose/30 px-3 py-2 bg-white",onKeyDown:m=>{m.key==="Enter"&&!n&&t.trim()&&d()}}),w.jsx("button",{onClick:d,disabled:n||!t.trim(),className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${n||!t.trim()?"bg-blush text-charcoal/50 cursor-not-allowed":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:n?"Checking…":"Open Gallery"}),u&&w.jsx("div",{className:"text-sm text-red-700",children:u})]}),i&&w.jsxs("div",{className:"mt-8",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"font-serif text-xl text-charcoal",children:i.name}),w.jsxs("div",{className:"text-xs text-charcoal/60",children:["Tag: ",w.jsx("code",{children:i.tag})]})]}),w.jsx("button",{onClick:f,className:"text-sm underline text-charcoal/70 hover:text-rose",children:"Use a different code"})]}),o.length>0?w.jsx("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",children:o.map(m=>{const E=`https://res.cloudinary.com/${yw}/image/upload/c_fill,g_auto,f_auto,q_auto,w_800,h_800/${m.public_id}.${m.format}`;return w.jsx("div",{className:"overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow",children:w.jsx("img",{src:E,alt:m.public_id,loading:"lazy",className:"w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"})},m.public_id)})}):w.jsx("div",{className:"mt-6 text-charcoal/60",children:"No images yet for this gallery."})]})]})})}function PL(){const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(""),o=Om(),l=async u=>{u.preventDefault(),s("");try{await kN(xg,t,n),o("/admin")}catch{s("Invalid email or password")}};return w.jsxs("div",{className:"max-w-sm mx-auto py-12",children:[w.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Admin Login"}),i&&w.jsx("p",{className:"text-red-500",children:i}),w.jsxs("form",{onSubmit:l,className:"space-y-4",children:[w.jsx("input",{type:"email",placeholder:"Email",className:"w-full border px-3 py-2 rounded",value:t,onChange:u=>e(u.target.value)}),w.jsx("input",{type:"password",placeholder:"Password",className:"w-full border px-3 py-2 rounded",value:n,onChange:u=>r(u.target.value)}),w.jsx("button",{type:"submit",className:"bg-rose text-ivory px-4 py-2 rounded w-full",children:"Login"})]})]})}const xL="modulepreload",kL=function(t){return"/"+t},_w={},kg=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=kL(u),u in _w)return;_w[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":xL,c||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((m,E)=>{f.addEventListener("load",m),f.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},NL=Cl.lazy(()=>kg(()=>import("./AdminUpload-CRDj4WXc.js"),[])),bL=Cl.lazy(()=>kg(()=>import("./AdminGallery-DwWqnDRK.js"),[]));Cl.lazy(()=>kg(()=>import("./AdminBookings-DDKIhXXM.js"),[]));async function Ou(t){try{return(await _L(t)).data().count||0}catch{return 0}}const Ng=(...t)=>t.filter(Boolean).join(" ");function Jd(t){const e=Array.from(document.querySelectorAll("h3")).find(n=>{var r;return((r=n.textContent)==null?void 0:r.trim())===t});e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function DL(){const[t,e]=U.useState(null),[n,r]=U.useState({rows:[],loading:!0,error:""}),[i,s]=U.useState(!0);return U.useEffect(()=>{(async()=>{s(!0);const o=wl(El,"bookings"),l=wl(El,"galleries"),u=await Ou(Os(o)),c=await Ou(Os(o,Ki("status","==","pending"))),d=await Ou(Os(o,Ki("status","==","confirmed"),Ki("startAt",">=",new Date))),f=await Ou(Os(l));e({totalBookings:u,pending:c,confirmedUpcoming:d,galleries:f}),s(!1);try{const m=Os(o,Ki("startAt",">=",new Date),hL("startAt","asc"),dL(6)),A=(await Pg(m)).docs.map(P=>({id:P.id,...P.data()}));r({rows:A,loading:!1,error:""})}catch{r({rows:[],loading:!1,error:"Couldn’t load upcoming bookings (index needed?)."})}})()},[]),w.jsx("section",{className:"w-full py-10 md:py-14 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsxs("div",{className:"flex items-center justify-between gap-4",children:[w.jsxs("div",{children:[w.jsx("h1",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Admin"}),w.jsx("p",{className:"text-sm text-charcoal/70",children:"Manage uploads, client galleries, and bookings in one place."})]}),w.jsx("button",{onClick:()=>xg.signOut(),className:"rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Sign out"})]}),w.jsx("div",{className:"mt-6 grid grid-cols-2 md:grid-cols-4 gap-4",children:i?w.jsxs(w.Fragment,{children:[w.jsx(Mu,{}),w.jsx(Mu,{}),w.jsx(Mu,{}),w.jsx(Mu,{})]}):w.jsxs(w.Fragment,{children:[w.jsx(Lu,{label:"Total Bookings",value:t.totalBookings}),w.jsx(Lu,{label:"Pending",value:t.pending,accent:"rose"}),w.jsx(Lu,{label:"Upcoming (Confirmed)",value:t.confirmedUpcoming,accent:"gold"}),w.jsx(Lu,{label:"Galleries",value:t.galleries})]})}),w.jsx("div",{className:"mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6",children:w.jsxs(pa,{title:"Quick Actions",className:"lg:col-span-12",children:[w.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[w.jsx(Fu,{label:"New Gallery",onClick:()=>Jd("Galleries")}),w.jsx(Fu,{label:"Upload Photos",onClick:()=>Jd("Upload")}),w.jsx(Fu,{label:"View Upcoming",onClick:()=>Jd("Upcoming Bookings")}),w.jsx(Fu,{label:"Go to Portfolio",href:"/portfolio"})]}),w.jsxs("p",{className:"text-xs text-charcoal/60 mt-4",children:["Tip: For fastest queries on ",w.jsx("code",{children:"bookings"}),", add a composite index:",w.jsx("code",{children:" status (ASC) "})," + ",w.jsx("code",{children:" startAt (ASC)"}),"."]})]})}),w.jsxs("div",{className:"mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6",children:[w.jsxs(pa,{title:"Upload",className:"lg:col-span-6 xl:col-span-7",children:[w.jsxs("p",{className:"text-sm text-charcoal/70 mb-4",children:["Upload to ",w.jsx("span",{className:"font-semibold",children:"Portfolio"})," or a selected ",w.jsx("span",{className:"font-semibold",children:"Client Gallery"}),". Tags are applied automatically."]}),w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsx(U.Suspense,{fallback:w.jsx("div",{className:"p-4 text-sm text-charcoal/60",children:"Loading…"}),children:w.jsx(NL,{})})})]}),w.jsx(pa,{title:"Upcoming Bookings",className:"lg:col-span-6 xl:col-span-5",children:n.loading?w.jsx(OL,{rows:4}):n.error?w.jsx("div",{className:"text-sm text-red-700",children:n.error}):n.rows.length===0?w.jsx("div",{className:"text-sm text-charcoal/60",children:"No upcoming bookings."}):w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsxs("table",{className:"w-full text-sm",children:[w.jsx("thead",{className:"bg-rose-50 text-charcoal/80",children:w.jsxs("tr",{children:[w.jsx(Vu,{children:"When"}),w.jsx(Vu,{children:"Client"}),w.jsx(Vu,{children:"Package"}),w.jsx(Vu,{children:"Ref"})]})}),w.jsx("tbody",{children:n.rows.map(o=>{var c,d,f,m,E,A,P,b,S;const l=(d=(c=o.startAt)==null?void 0:c.toDate)==null?void 0:d.call(c),u=l?l.toLocaleString([],{dateStyle:"medium",timeStyle:"short"}):`${o.date} ${o.time}`;return w.jsxs("tr",{className:"border-t border-slate-100",children:[w.jsxs(Uu,{children:[w.jsx("div",{children:u}),w.jsx("div",{className:"text-slate-500",children:(f=o.details)==null?void 0:f.location})]}),w.jsxs(Uu,{children:[w.jsx("div",{className:"font-medium",children:(m=o.details)==null?void 0:m.name}),w.jsx("div",{className:"text-slate-500",children:(E=o.details)==null?void 0:E.email}),w.jsx("div",{className:"text-slate-500",children:(A=o.details)==null?void 0:A.phone})]}),w.jsxs(Uu,{children:[w.jsx("div",{className:"font-medium",children:(P=o.package)==null?void 0:P.name}),w.jsxs("div",{className:"text-slate-500",children:["$",(b=o.package)==null?void 0:b.price," — ",(S=o.package)==null?void 0:S.duration]})]}),w.jsx(Uu,{className:"font-mono",children:o.reference})]},o.id)})})]})})}),w.jsxs(pa,{title:"Galleries",className:"lg:col-span-12",children:[w.jsxs("p",{className:"text-sm text-charcoal/70 mb-4",children:["Create a client gallery (slug + access code). Then upload with the generated tag (e.g., ",w.jsx("code",{children:"gal-aliyah-sam"}),")."]}),w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsx(U.Suspense,{fallback:w.jsx("div",{className:"p-4 text-sm text-charcoal/60",children:"Loading…"}),children:w.jsx(bL,{})})})]}),w.jsx(pa,{title:"Notes",className:"lg:col-span-12",children:w.jsxs("ul",{className:"text-sm text-charcoal/80 list-disc ml-5 space-y-2",children:[w.jsx("li",{children:"Confirm pending bookings and send welcome emails."}),w.jsx("li",{children:"Create galleries for upcoming shoots."}),w.jsx("li",{children:"Upload highlight images to Portfolio."})]})})]})]})})}function Lu({label:t,value:e,accent:n}){const r=n==="rose"?"ring-rose/30":n==="gold"?"ring-gold/30":"ring-slate-200";return w.jsxs("div",{className:Ng("rounded-2xl bg-white/80 border border-rose/30 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-4 ring-1",r),children:[w.jsx("div",{className:"text-sm text-charcoal/70",children:t}),w.jsx("div",{className:"text-2xl font-semibold text-charcoal mt-1",children:e})]})}function Mu(){return w.jsxs("div",{className:"rounded-2xl bg-white/80 border border-rose/30 p-4 animate-pulse",children:[w.jsx("div",{className:"h-3 w-24 bg-slate-200 rounded mb-3"}),w.jsx("div",{className:"h-7 w-12 bg-slate-200 rounded"})]})}function pa({title:t,className:e,children:n}){return w.jsxs("section",{className:Ng("rounded-2xl border border-rose/30 bg-blush/20 p-4 md:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",e),children:[w.jsx("h3",{className:"text-lg font-serif font-semibold text-charcoal mb-3",children:t}),n]})}const Vu=({children:t})=>w.jsx("th",{className:"text-left px-4 py-3",children:t}),Uu=({children:t,className:e})=>w.jsx("td",{className:Ng("px-4 py-3 align-top",e),children:t});function OL({rows:t=4}){return w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsx("div",{className:"animate-pulse p-4 space-y-3",children:Array.from({length:t}).map((e,n)=>w.jsx("div",{className:"h-10 bg-slate-100 rounded"},n))})})}function Fu({label:t,onClick:e,href:n}){return n?w.jsx("a",{href:n,className:"w-full text-center rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow",children:t}):w.jsx("button",{onClick:e,className:"w-full rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow",children:t})}const LL=()=>{};var vw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ML=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},BS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($S(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ML(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new VL;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),f!==64){const A=c<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UL=function(t){const e=$S(t);return BS.encodeByteArray(e,!0)},zS=function(t){return UL(t).replace(/\./g,"")},HS=function(t){try{return BS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jL=()=>FL().__FIREBASE_DEFAULTS__,$L=()=>{if(typeof process>"u"||typeof vw>"u")return;const t=vw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&HS(t[1]);return e&&JSON.parse(e)},zL=()=>{try{return LL()||jL()||$L()||BL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HL=t=>{var e;return(e=zL())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nr())}function qL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QL(){try{return typeof indexedDB=="object"}catch{return!1}}function YL(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XL="FirebaseError";class ys extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XL,Object.setPrototypeOf(this,ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hl.prototype.create)}}class Hl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JL(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ys(i,l,r)}}function JL(t,e){return t.replace(ZL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZL=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eM(t,e){const n=new tM(t,e);return n.subscribe.bind(n)}class tM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zd),i.error===void 0&&(i.error=Zd),i.complete===void 0&&(i.complete=Zd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){return t&&t._delegate?t._delegate:t}class Tl{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const rM={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},iM=De.INFO,sM={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},oM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class GS{constructor(e){this.name=e,this._logLevel=iM,this._logHandler=oM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const aM=(t,e)=>e.some(n=>t instanceof n);let ww,Ew;function lM(){return ww||(ww=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uM(){return Ew||(Ew=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KS=new WeakMap,xp=new WeakMap,QS=new WeakMap,ef=new WeakMap,bg=new WeakMap;function cM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&KS.set(n,t)}).catch(()=>{}),bg.set(e,t),e}function hM(t){if(xp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xp.set(t,e)}let kp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||QS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dM(t){kp=t(kp)}function fM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tf(this),e,...n);return QS.set(r,e.sort?e.sort():[e]),mi(r)}:uM().includes(t)?function(...e){return t.apply(tf(this),e),mi(KS.get(this))}:function(...e){return mi(t.apply(tf(this),e))}}function pM(t){return typeof t=="function"?fM(t):(t instanceof IDBTransaction&&hM(t),aM(t,lM())?new Proxy(t,kp):t)}function mi(t){if(t instanceof IDBRequest)return cM(t);if(ef.has(t))return ef.get(t);const e=pM(t);return e!==t&&(ef.set(t,e),bg.set(e,t)),e}const tf=t=>bg.get(t);function mM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=mi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mi(o.result),u.oldVersion,u.newVersion,mi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const gM=["get","getKey","getAll","getAllKeys","count"],yM=["put","add","delete","clear"],nf=new Map;function Tw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=yM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gM.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return nf.set(e,s),s}dM(t=>({...t,get:(e,n,r)=>Tw(e,n)||t.get(e,n,r),has:(e,n)=>!!Tw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Np="@firebase/app",Iw="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new GS("@firebase/app"),wM="@firebase/app-compat",EM="@firebase/analytics-compat",TM="@firebase/analytics",IM="@firebase/app-check-compat",SM="@firebase/app-check",AM="@firebase/auth",CM="@firebase/auth-compat",RM="@firebase/database",PM="@firebase/data-connect",xM="@firebase/database-compat",kM="@firebase/functions",NM="@firebase/functions-compat",bM="@firebase/installations",DM="@firebase/installations-compat",OM="@firebase/messaging",LM="@firebase/messaging-compat",MM="@firebase/performance",VM="@firebase/performance-compat",UM="@firebase/remote-config",FM="@firebase/remote-config-compat",jM="@firebase/storage",$M="@firebase/storage-compat",BM="@firebase/firestore",zM="@firebase/ai",HM="@firebase/firestore-compat",WM="firebase",qM="12.1.0",GM={[Np]:"fire-core",[wM]:"fire-core-compat",[TM]:"fire-analytics",[EM]:"fire-analytics-compat",[SM]:"fire-app-check",[IM]:"fire-app-check-compat",[AM]:"fire-auth",[CM]:"fire-auth-compat",[RM]:"fire-rtdb",[PM]:"fire-data-connect",[xM]:"fire-rtdb-compat",[kM]:"fire-fn",[NM]:"fire-fn-compat",[bM]:"fire-iid",[DM]:"fire-iid-compat",[OM]:"fire-fcm",[LM]:"fire-fcm-compat",[MM]:"fire-perf",[VM]:"fire-perf-compat",[UM]:"fire-rc",[FM]:"fire-rc-compat",[jM]:"fire-gcs",[$M]:"fire-gcs-compat",[BM]:"fire-fst",[HM]:"fire-fst-compat",[zM]:"fire-vertex","fire-js":"fire-js",[WM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KM=new Map,QM=new Map,Sw=new Map;function Aw(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Il(t){const e=t.name;if(Sw.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;Sw.set(e,t);for(const n of KM.values())Aw(n,t);for(const n of QM.values())Aw(n,t);return!0}function Ls(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dg=new Hl("app","Firebase",YM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=qM;function $a(t,e,n){let r=GM[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(o.join(" "));return}Il(new Tl(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM="firebase-heartbeat-database",JM=1,Sl="firebase-heartbeat-store";let rf=null;function YS(){return rf||(rf=mM(XM,JM,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Sl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dg.create("idb-open",{originalErrorMessage:t.message})})),rf}async function ZM(t){try{const n=(await YS()).transaction(Sl),r=await n.objectStore(Sl).get(XS(t));return await n.done,r}catch(e){if(e instanceof ys)Rr.warn(e.message);else{const n=Dg.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function Cw(t,e){try{const r=(await YS()).transaction(Sl,"readwrite");await r.objectStore(Sl).put(e,XS(t)),await r.done}catch(n){if(n instanceof ys)Rr.warn(n.message);else{const r=Dg.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function XS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV=1024,tV=30;class nV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>tV){const o=sV(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rw(),{heartbeatsToSend:r,unsentEntries:i}=rV(this._heartbeatsCache.heartbeats),s=zS(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rr.warn(n),""}}}function Rw(){return new Date().toISOString().substring(0,10)}function rV(t,e=eV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QL()?YL().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZM(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Cw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pw(t){return zS(JSON.stringify({version:2,heartbeats:t})).length}function sV(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oV(t){Il(new Tl("platform-logger",e=>new _M(e),"PRIVATE")),Il(new Tl("heartbeat",e=>new nV(e),"PRIVATE")),$a(Np,Iw,t),$a(Np,Iw,"esm2020"),$a("fire-js","")}oV("");function JS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aV=JS,ZS=new Hl("auth","Firebase",JS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=new GS("@firebase/auth");function lV(t,...e){oh.logLevel<=De.WARN&&oh.warn(`Auth (${Og}): ${t}`,...e)}function hc(t,...e){oh.logLevel<=De.ERROR&&oh.error(`Auth (${Og}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t,...e){throw Lg(t,...e)}function eA(t,...e){return Lg(t,...e)}function tA(t,e,n){const r={...aV(),[e]:n};return new Hl("auth","Firebase",r).create(e,{appName:t.name})}function dc(t){return tA(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ZS.create(t,...e)}function Ie(t,e,...n){if(!t)throw Lg(e,...n)}function Ba(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hc(e),new Error(e)}function ah(t,e){t||Ba(e)}function uV(){return kw()==="http:"||kw()==="https:"}function kw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uV()||GL()||"connection"in navigator)?navigator.onLine:!0}function hV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n){this.shortDelay=e,this.longDelay=n,ah(n>e,"Short delay should be less than long delay!"),this.isMobile=WL()||KL()}get(){return cV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dV(t,e){ah(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ba("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ba("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ba("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pV=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mV=new ql(3e4,6e4);function rA(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Jh(t,e,n,r,i={}){return iA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=qS({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return qL()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&WS(t.emulatorConfig.host)&&(c.credentials="include"),nA.fetch()(await sA(t,t.config.apiHost,n,l),c)})}async function iA(t,e,n){t._canInitEmulator=!1;const r={...fV,...e};try{const i=new gV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ju(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ju(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ju(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ju(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw tA(t,d,c);xw(t,d)}}catch(i){if(i instanceof ys)throw i;xw(t,"network-request-failed",{message:String(i)})}}async function sA(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?dV(t.config,i):`${t.config.apiScheme}://${i}`;return pV.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class gV{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(eA(this.auth,"network-request-failed")),mV.get())})}}function ju(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=eA(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yV(t,e){return Jh(t,"POST","/v1/accounts:delete",e)}async function lh(t,e){return Jh(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _V(t,e=!1){const n=Wl(t),r=await n.getIdToken(e),i=oA(r);Ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:za(sf(i.auth_time)),issuedAtTime:za(sf(i.iat)),expirationTime:za(sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sf(t){return Number(t)*1e3}function oA(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hc("JWT malformed, contained fewer than 3 sections"),null;try{const i=HS(n);return i?JSON.parse(i):(hc("Failed to decode base64 JWT payload"),null)}catch(i){return hc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nw(t){const e=oA(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ys&&vV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=za(this.lastLoginAt),this.creationTime=za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(t){var f;const e=t.auth,n=await t.getIdToken(),r=await bp(t,lh(e,{idToken:n}));Ie(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?aA(i.providerUserInfo):[],o=TV(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Dp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function EV(t){const e=Wl(t);await uh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aA(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IV(t,e){const n=await iA(t,{},async()=>{const r=qS({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await sA(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&WS(t.emulatorConfig.host)&&(u.credentials="include"),nA.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SV(t,e){return Jh(t,"POST","/v2/accounts:revokeToken",rA(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const n=Nw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await IV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new lo;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return Ba("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new wV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bp(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _V(this,e)}reload(){return EV(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ls(this.auth.app))return Promise.reject(dc(this.auth));const e=await this.getIdToken();return await bp(this,yV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:E,providerData:A,stsTokenManager:P}=n;Ie(f&&P,e,"internal-error");const b=lo.fromJSON(this.name,P);Ie(typeof f=="string",e,"internal-error"),jr(r,e.name),jr(i,e.name),Ie(typeof m=="boolean",e,"internal-error"),Ie(typeof E=="boolean",e,"internal-error"),jr(s,e.name),jr(o,e.name),jr(l,e.name),jr(u,e.name),jr(c,e.name),jr(d,e.name);const S=new Wn({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:d});return A&&Array.isArray(A)&&(S.providerData=A.map(v=>({...v}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new lo;i.updateFromServerResponse(n);const s=new Wn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?aA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new lo;l.updateFromIdToken(r);const u=new Wn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Dp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=new Map;function Qi(t){ah(t instanceof Function,"Expected a class definition");let e=bw.get(t);return e?(ah(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,bw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lA.type="NONE";const Dw=lA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t,e,n){return`firebase:${t}:${e}:${n}`}class uo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=of(this.userKey,i.apiKey,s),this.fullPersistenceKey=of("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lh(this.auth,{idToken:e}).catch(()=>{});return n?Wn._fromGetAccountInfoResponse(this.auth,n,e):null}return Wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new uo(Qi(Dw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Qi(Dw);const o=of(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await lh(e,{idToken:d}).catch(()=>{});if(!m)break;f=await Wn._fromGetAccountInfoResponse(e,m,d)}else f=Wn._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new uo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new uo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PV(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(AV(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kV(e))return"Blackberry";if(NV(e))return"Webos";if(CV(e))return"Safari";if((e.includes("chrome/")||RV(e))&&!e.includes("edge/"))return"Chrome";if(xV(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function AV(t=nr()){return/firefox\//i.test(t)}function CV(t=nr()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RV(t=nr()){return/crios\//i.test(t)}function PV(t=nr()){return/iemobile/i.test(t)}function xV(t=nr()){return/android/i.test(t)}function kV(t=nr()){return/blackberry/i.test(t)}function NV(t=nr()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t,e=[]){let n;switch(t){case"Browser":n=Ow(nr());break;case"Worker":n=`${Ow(nr())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Og}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DV(t,e={}){return Jh(t,"GET","/v2/passwordPolicy",rA(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OV=6;class LV{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??OV,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lw(this),this.idTokenSubscription=new Lw(this),this.beforeStateQueue=new bV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qi(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lh(this,{idToken:e}),r=await Wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ls(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ls(this.app))return Promise.reject(dc(this));const n=e?Wl(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ls(this.app)?Promise.reject(dc(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ls(this.app)?Promise.reject(dc(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DV(this),n=new LV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qi(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[Qi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ls(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&lV(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function VV(t){return Wl(t)}class Lw{constructor(e){this.auth=e,this.observer=null,this.addObserver=eM(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function UV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FV(t,e,n,r){return Wl(t).onAuthStateChanged(e,n,r)}new ql(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ql(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ql(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ql(5e3,15e3);var Mw="@firebase/auth",Vw="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $V(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BV(t){Il(new Tl("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uA(t)},c=new MV(r,i,s,u);return UV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Il(new Tl("auth-internal",e=>{const n=VV(e.getProvider("auth").getImmediate());return(r=>new jV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$a(Mw,Vw,$V(t)),$a(Mw,Vw,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV=5*60;HL("authIdTokenMaxAge");BV("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function HV(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{c(r.next(d))}catch(f){o(f)}}function u(d){try{c(r.throw(d))}catch(f){o(f)}}function c(d){d.done?s(d.value):i(d.value).then(l,u)}c((r=r.apply(t,[])).next())})}function WV(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(c){return function(d){return u([c,d])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ys=function(){return Ys=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ys.apply(this,arguments)},cA=function(t){return{loading:t==null,value:t}},qV=function(){return function(t,e){switch(e.type){case"error":return Ys(Ys({},t),{error:e.error,loading:!1,value:void 0});case"reset":return cA(e.defaultValue);case"value":return Ys(Ys({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},GV=function(t){var e=t?t():void 0,n=U.useReducer(qV(),cA(e)),r=n[0],i=n[1],s=U.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=U.useCallback(function(u){i({type:"error",error:u})},[]),l=U.useCallback(function(u){i({type:"value",value:u})},[]);return U.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},KV=function(t,e){var n=GV(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return U.useEffect(function(){var u=FV(t,function(c){return HV(void 0,void 0,void 0,function(){var d;return WV(this,function(f){switch(f.label){case 0:return[3,4];case 1:return f.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return f.sent(),[3,4];case 3:return d=f.sent(),s(d),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]),[l,i,r]};function QV({children:t}){const[e,n]=KV(xg);return n?w.jsx("div",{className:"p-8 text-center",children:"Loading..."}):e?t:w.jsx(mP,{to:"/admin-login",replace:!0})}const YV=SP([{path:"/",element:w.jsx(BP,{}),children:[{index:!0,element:w.jsx(zP,{})},{path:"portfolio",element:w.jsx(WP,{})},{path:"booking",element:w.jsx(SL,{})},{path:"faq",element:w.jsx(AL,{})},{path:"client",element:w.jsx(RL,{})},{path:"admin-login",element:w.jsx(PL,{})},{path:"admin",element:w.jsx(QV,{children:w.jsx(DL,{})})}]}]);JT(document.getElementById("root")).render(w.jsx(Cl.StrictMode,{children:w.jsx(bP,{router:YV})}));export{yL as a,Y2 as b,wl as c,El as d,Pg as g,w as j,hL as o,Os as q,U as r,wL as s,_4 as u};
