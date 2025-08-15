function Nw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dw={exports:{}},ah={},Ow={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Al=Symbol.for("react.element"),TA=Symbol.for("react.portal"),IA=Symbol.for("react.fragment"),SA=Symbol.for("react.strict_mode"),AA=Symbol.for("react.profiler"),CA=Symbol.for("react.provider"),RA=Symbol.for("react.context"),PA=Symbol.for("react.forward_ref"),xA=Symbol.for("react.suspense"),kA=Symbol.for("react.memo"),NA=Symbol.for("react.lazy"),ry=Symbol.iterator;function bA(t){return t===null||typeof t!="object"?null:(t=ry&&t[ry]||t["@@iterator"],typeof t=="function"?t:null)}var Lw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mw=Object.assign,Vw={};function Co(t,e,n){this.props=t,this.context=e,this.refs=Vw,this.updater=n||Lw}Co.prototype.isReactComponent={};Co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uw(){}Uw.prototype=Co.prototype;function Pp(t,e,n){this.props=t,this.context=e,this.refs=Vw,this.updater=n||Lw}var xp=Pp.prototype=new Uw;xp.constructor=Pp;Mw(xp,Co.prototype);xp.isPureReactComponent=!0;var iy=Array.isArray,Fw=Object.prototype.hasOwnProperty,kp={current:null},jw={key:!0,ref:!0,__self:!0,__source:!0};function $w(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fw.call(e,r)&&!jw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Al,type:t,key:s,ref:o,props:i,_owner:kp.current}}function DA(t,e){return{$$typeof:Al,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Np(t){return typeof t=="object"&&t!==null&&t.$$typeof===Al}function OA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sy=/\/+/g;function id(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OA(""+t.key):e.toString(36)}function Uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Al:case TA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+id(o,0):r,iy(i)?(n="",t!=null&&(n=t.replace(sy,"$&/")+"/"),Uu(i,e,n,"",function(c){return c})):i!=null&&(Np(i)&&(i=DA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",iy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+id(s,l);o+=Uu(s,e,n,u,i)}else if(u=bA(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+id(s,l++),o+=Uu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ou(t,e,n){if(t==null)return t;var r=[],i=0;return Uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},Fu={transition:null},MA={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:Fu,ReactCurrentOwner:kp};function Bw(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:ou,forEach:function(t,e,n){ou(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ou(t,function(){e++}),e},toArray:function(t){return ou(t,function(e){return e})||[]},only:function(t){if(!Np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=Co;pe.Fragment=IA;pe.Profiler=AA;pe.PureComponent=Pp;pe.StrictMode=SA;pe.Suspense=xA;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MA;pe.act=Bw;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Fw.call(e,u)&&!jw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Al,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:RA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CA,_context:t},t.Consumer=t};pe.createElement=$w;pe.createFactory=function(t){var e=$w.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:PA,render:t}};pe.isValidElement=Np;pe.lazy=function(t){return{$$typeof:NA,_payload:{_status:-1,_result:t},_init:LA}};pe.memo=function(t,e){return{$$typeof:kA,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Fu.transition;Fu.transition={};try{t()}finally{Fu.transition=e}};pe.unstable_act=Bw;pe.useCallback=function(t,e){return jt.current.useCallback(t,e)};pe.useContext=function(t){return jt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return jt.current.useEffect(t,e)};pe.useId=function(){return jt.current.useId()};pe.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return jt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};pe.useRef=function(t){return jt.current.useRef(t)};pe.useState=function(t){return jt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return jt.current.useTransition()};pe.version="18.3.1";Ow.exports=pe;var U=Ow.exports;const zw=bw(U),VA=Nw({__proto__:null,default:zw},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UA=U,FA=Symbol.for("react.element"),jA=Symbol.for("react.fragment"),$A=Object.prototype.hasOwnProperty,BA=UA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zA={key:!0,ref:!0,__self:!0,__source:!0};function Hw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$A.call(e,r)&&!zA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:FA,type:t,key:s,ref:o,props:i,_owner:BA.current}}ah.Fragment=jA;ah.jsx=Hw;ah.jsxs=Hw;Dw.exports=ah;var w=Dw.exports,Ww={exports:{}},on={},qw={exports:{}},Gw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,re){var ae=W.length;W.push(re);e:for(;0<ae;){var Ae=ae-1>>>1,fe=W[Ae];if(0<i(fe,re))W[Ae]=re,W[ae]=fe,ae=Ae;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var re=W[0],ae=W.pop();if(ae!==re){W[0]=ae;e:for(var Ae=0,fe=W.length,xe=fe>>>1;Ae<xe;){var Mt=2*(Ae+1)-1,Ye=W[Mt],gt=Mt+1,yt=W[gt];if(0>i(Ye,ae))gt<fe&&0>i(yt,Ye)?(W[Ae]=yt,W[gt]=ae,Ae=gt):(W[Ae]=Ye,W[Mt]=ae,Ae=Mt);else if(gt<fe&&0>i(yt,ae))W[Ae]=yt,W[gt]=ae,Ae=gt;else break e}}return re}function i(W,re){var ae=W.sortIndex-re.sortIndex;return ae!==0?ae:W.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,E=!1,C=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(W){for(var re=n(c);re!==null;){if(re.callback===null)r(c);else if(re.startTime<=W)r(c),re.sortIndex=re.expirationTime,e(u,re);else break;re=n(c)}}function L(W){if(P=!1,R(W),!C)if(n(u)!==null)C=!0,On(B);else{var re=n(c);re!==null&&Bt(L,re.startTime-W)}}function B(W,re){C=!1,P&&(P=!1,S(y),y=-1),E=!0;var ae=m;try{for(R(re),p=n(u);p!==null&&(!(p.expirationTime>re)||W&&!k());){var Ae=p.callback;if(typeof Ae=="function"){p.callback=null,m=p.priorityLevel;var fe=Ae(p.expirationTime<=re);re=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),R(re)}else r(u);p=n(u)}if(p!==null)var xe=!0;else{var Mt=n(c);Mt!==null&&Bt(L,Mt.startTime-re),xe=!1}return xe}finally{p=null,m=ae,E=!1}}var H=!1,g=null,y=-1,T=5,I=-1;function k(){return!(t.unstable_now()-I<T)}function N(){if(g!==null){var W=t.unstable_now();I=W;var re=!0;try{re=g(!0,W)}finally{re?A():(H=!1,g=null)}}else H=!1}var A;if(typeof v=="function")A=function(){v(N)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,mt=Ne.port2;Ne.port1.onmessage=N,A=function(){mt.postMessage(null)}}else A=function(){D(N,0)};function On(W){g=W,H||(H=!0,A())}function Bt(W,re){y=D(function(){W(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){C||E||(C=!0,On(B))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var ae=m;m=re;try{return W()}finally{m=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,re){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ae=m;m=W;try{return re()}finally{m=ae}},t.unstable_scheduleCallback=function(W,re,ae){var Ae=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ae+ae:Ae):ae=Ae,W){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ae+fe,W={id:d++,callback:re,priorityLevel:W,startTime:ae,expirationTime:fe,sortIndex:-1},ae>Ae?(W.sortIndex=ae,e(c,W),n(u)===null&&W===n(c)&&(P?(S(y),y=-1):P=!0,Bt(L,ae-Ae))):(W.sortIndex=fe,e(u,W),C||E||(C=!0,On(B))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var re=m;return function(){var ae=m;m=re;try{return W.apply(this,arguments)}finally{m=ae}}}})(Gw);qw.exports=Gw;var HA=qw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WA=U,rn=HA;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kw=new Set,za={};function as(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(za[t]=e,t=0;t<e.length;t++)Kw.add(e[t])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=Object.prototype.hasOwnProperty,qA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oy={},ay={};function GA(t){return tf.call(ay,t)?!0:tf.call(oy,t)?!1:qA.test(t)?ay[t]=!0:(oy[t]=!0,!1)}function KA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QA(t,e,n,r){if(e===null||typeof e>"u"||KA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var St={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){St[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];St[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){St[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){St[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){St[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){St[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){St[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){St[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){St[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var bp=/[\-:]([a-z])/g;function Dp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bp,Dp);St[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bp,Dp);St[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bp,Dp);St[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){St[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});St.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){St[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function Op(t,e,n,r){var i=St.hasOwnProperty(e)?St[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QA(e,n,i,r)&&(n=null),r||i===null?GA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pr=WA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,au=Symbol.for("react.element"),Os=Symbol.for("react.portal"),Ls=Symbol.for("react.fragment"),Lp=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),Qw=Symbol.for("react.provider"),Yw=Symbol.for("react.context"),Mp=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),sf=Symbol.for("react.suspense_list"),Vp=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),Xw=Symbol.for("react.offscreen"),ly=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=ly&&t[ly]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Object.assign,sd;function pa(t){if(sd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sd=e&&e[1]||""}return`
`+sd+t}var od=!1;function ad(t,e){if(!t||od)return"";od=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{od=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function YA(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=ad(t.type,!1),t;case 11:return t=ad(t.type.render,!1),t;case 1:return t=ad(t.type,!0),t;default:return""}}function of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ls:return"Fragment";case Os:return"Portal";case nf:return"Profiler";case Lp:return"StrictMode";case rf:return"Suspense";case sf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yw:return(t.displayName||"Context")+".Consumer";case Qw:return(t._context.displayName||"Context")+".Provider";case Mp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vp:return e=t.displayName||null,e!==null?e:of(t.type)||"Memo";case $r:e=t._payload,t=t._init;try{return of(t(e))}catch{}}return null}function XA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return of(e);case 8:return e===Lp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Jw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function JA(t){var e=Jw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lu(t){t._valueTracker||(t._valueTracker=JA(t))}function Zw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Jw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function cc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var n=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function eE(t,e){e=e.checked,e!=null&&Op(t,"checked",e,!1)}function lf(t,e){eE(t,e);var n=mi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&uf(t,e.type,mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uf(t,e,n){(e!=="number"||cc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function Qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ma(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mi(n)}}function tE(t,e){var n=mi(e.value),r=mi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function nE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?nE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var uu,rE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(uu=uu||document.createElement("div"),uu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=uu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZA=["Webkit","ms","Moz","O"];Object.keys(Aa).forEach(function(t){ZA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Aa[e]=Aa[t]})});function iE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Aa.hasOwnProperty(t)&&Aa[t]?(""+e).trim():e+"px"}function sE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=iE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var e1=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function df(t,e){if(e){if(e1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pf=null;function Up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mf=null,Ys=null,Xs=null;function fy(t){if(t=Pl(t)){if(typeof mf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=dh(e),mf(t.stateNode,t.type,e))}}function oE(t){Ys?Xs?Xs.push(t):Xs=[t]:Ys=t}function aE(){if(Ys){var t=Ys,e=Xs;if(Xs=Ys=null,fy(t),e)for(t=0;t<e.length;t++)fy(e[t])}}function lE(t,e){return t(e)}function uE(){}var ld=!1;function cE(t,e,n){if(ld)return t(e,n);ld=!0;try{return lE(t,e,n)}finally{ld=!1,(Ys!==null||Xs!==null)&&(uE(),aE())}}function Wa(t,e){var n=t.stateNode;if(n===null)return null;var r=dh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var gf=!1;if(_r)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){gf=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{gf=!1}function t1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ca=!1,hc=null,dc=!1,yf=null,n1={onError:function(t){Ca=!0,hc=t}};function r1(t,e,n,r,i,s,o,l,u){Ca=!1,hc=null,t1.apply(n1,arguments)}function i1(t,e,n,r,i,s,o,l,u){if(r1.apply(this,arguments),Ca){if(Ca){var c=hc;Ca=!1,hc=null}else throw Error(z(198));dc||(dc=!0,yf=c)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function hE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function py(t){if(ls(t)!==t)throw Error(z(188))}function s1(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return py(i),t;if(s===r)return py(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function dE(t){return t=s1(t),t!==null?fE(t):null}function fE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=fE(t);if(e!==null)return e;t=t.sibling}return null}var pE=rn.unstable_scheduleCallback,my=rn.unstable_cancelCallback,o1=rn.unstable_shouldYield,a1=rn.unstable_requestPaint,Je=rn.unstable_now,l1=rn.unstable_getCurrentPriorityLevel,Fp=rn.unstable_ImmediatePriority,mE=rn.unstable_UserBlockingPriority,fc=rn.unstable_NormalPriority,u1=rn.unstable_LowPriority,gE=rn.unstable_IdlePriority,lh=null,qn=null;function c1(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(lh,t,void 0,(t.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:f1,h1=Math.log,d1=Math.LN2;function f1(t){return t>>>=0,t===0?32:31-(h1(t)/d1|0)|0}var cu=64,hu=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ga(l):(s&=o,s!==0&&(r=ga(s)))}else o=n&~i,o!==0?r=ga(o):s!==0&&(r=ga(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xn(e),i=1<<n,r|=t[n],e&=~i;return r}function p1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=p1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yE(){var t=cu;return cu<<=1,!(cu&4194240)&&(cu=64),t}function ud(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xn(e),t[e]=n}function g1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-xn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Pe=0;function _E(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vE,$p,wE,EE,TE,vf=!1,du=[],ei=null,ti=null,ni=null,qa=new Map,Ga=new Map,zr=[],y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gy(t,e){switch(t){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function ia(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Pl(e),e!==null&&$p(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _1(t,e,n,r,i){switch(e){case"focusin":return ei=ia(ei,t,e,n,r,i),!0;case"dragenter":return ti=ia(ti,t,e,n,r,i),!0;case"mouseover":return ni=ia(ni,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qa.set(s,ia(qa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ga.set(s,ia(Ga.get(s)||null,t,e,n,r,i)),!0}return!1}function IE(t){var e=$i(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=hE(n),e!==null){t.blockedOn=e,TE(t.priority,function(){wE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ju(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pf=r,n.target.dispatchEvent(r),pf=null}else return e=Pl(n),e!==null&&$p(e),t.blockedOn=n,!1;e.shift()}return!0}function yy(t,e,n){ju(t)&&n.delete(e)}function v1(){vf=!1,ei!==null&&ju(ei)&&(ei=null),ti!==null&&ju(ti)&&(ti=null),ni!==null&&ju(ni)&&(ni=null),qa.forEach(yy),Ga.forEach(yy)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,vf||(vf=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,v1)))}function Ka(t){function e(i){return sa(i,t)}if(0<du.length){sa(du[0],t);for(var n=1;n<du.length;n++){var r=du[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ei!==null&&sa(ei,t),ti!==null&&sa(ti,t),ni!==null&&sa(ni,t),qa.forEach(e),Ga.forEach(e),n=0;n<zr.length;n++)r=zr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zr.length&&(n=zr[0],n.blockedOn===null);)IE(n),n.blockedOn===null&&zr.shift()}var Js=Pr.ReactCurrentBatchConfig,mc=!0;function w1(t,e,n,r){var i=Pe,s=Js.transition;Js.transition=null;try{Pe=1,Bp(t,e,n,r)}finally{Pe=i,Js.transition=s}}function E1(t,e,n,r){var i=Pe,s=Js.transition;Js.transition=null;try{Pe=4,Bp(t,e,n,r)}finally{Pe=i,Js.transition=s}}function Bp(t,e,n,r){if(mc){var i=wf(t,e,n,r);if(i===null)vd(t,e,r,gc,n),gy(t,r);else if(_1(i,t,e,n,r))r.stopPropagation();else if(gy(t,r),e&4&&-1<y1.indexOf(t)){for(;i!==null;){var s=Pl(i);if(s!==null&&vE(s),s=wf(t,e,n,r),s===null&&vd(t,e,r,gc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vd(t,e,r,null,n)}}var gc=null;function wf(t,e,n,r){if(gc=null,t=Up(r),t=$i(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=hE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gc=t,null}function SE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case Fp:return 1;case mE:return 4;case fc:case u1:return 16;case gE:return 536870912;default:return 16}default:return 16}}var Yr=null,zp=null,$u=null;function AE(){if($u)return $u;var t,e=zp,n=e.length,r,i="value"in Yr?Yr.value:Yr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return $u=i.slice(t,1<r?1-r:void 0)}function Bu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fu(){return!0}function _y(){return!1}function an(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fu:_y,this.isPropagationStopped=_y,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fu)},persist:function(){},isPersistent:fu}),e}var Ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hp=an(Ro),Rl=qe({},Ro,{view:0,detail:0}),T1=an(Rl),cd,hd,oa,uh=qe({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oa&&(oa&&t.type==="mousemove"?(cd=t.screenX-oa.screenX,hd=t.screenY-oa.screenY):hd=cd=0,oa=t),cd)},movementY:function(t){return"movementY"in t?t.movementY:hd}}),vy=an(uh),I1=qe({},uh,{dataTransfer:0}),S1=an(I1),A1=qe({},Rl,{relatedTarget:0}),dd=an(A1),C1=qe({},Ro,{animationName:0,elapsedTime:0,pseudoElement:0}),R1=an(C1),P1=qe({},Ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x1=an(P1),k1=qe({},Ro,{data:0}),wy=an(k1),N1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=D1[t])?!!e[t]:!1}function Wp(){return O1}var L1=qe({},Rl,{key:function(t){if(t.key){var e=N1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wp,charCode:function(t){return t.type==="keypress"?Bu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),M1=an(L1),V1=qe({},uh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ey=an(V1),U1=qe({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wp}),F1=an(U1),j1=qe({},Ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),$1=an(j1),B1=qe({},uh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z1=an(B1),H1=[9,13,27,32],qp=_r&&"CompositionEvent"in window,Ra=null;_r&&"documentMode"in document&&(Ra=document.documentMode);var W1=_r&&"TextEvent"in window&&!Ra,CE=_r&&(!qp||Ra&&8<Ra&&11>=Ra),Ty=" ",Iy=!1;function RE(t,e){switch(t){case"keyup":return H1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function PE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function q1(t,e){switch(t){case"compositionend":return PE(e);case"keypress":return e.which!==32?null:(Iy=!0,Ty);case"textInput":return t=e.data,t===Ty&&Iy?null:t;default:return null}}function G1(t,e){if(Ms)return t==="compositionend"||!qp&&RE(t,e)?(t=AE(),$u=zp=Yr=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return CE&&e.locale!=="ko"?null:e.data;default:return null}}var K1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K1[t.type]:e==="textarea"}function xE(t,e,n,r){oE(r),e=yc(e,"onChange"),0<e.length&&(n=new Hp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pa=null,Qa=null;function Q1(t){jE(t,0)}function ch(t){var e=Fs(t);if(Zw(e))return t}function Y1(t,e){if(t==="change")return e}var kE=!1;if(_r){var fd;if(_r){var pd="oninput"in document;if(!pd){var Ay=document.createElement("div");Ay.setAttribute("oninput","return;"),pd=typeof Ay.oninput=="function"}fd=pd}else fd=!1;kE=fd&&(!document.documentMode||9<document.documentMode)}function Cy(){Pa&&(Pa.detachEvent("onpropertychange",NE),Qa=Pa=null)}function NE(t){if(t.propertyName==="value"&&ch(Qa)){var e=[];xE(e,Qa,t,Up(t)),cE(Q1,e)}}function X1(t,e,n){t==="focusin"?(Cy(),Pa=e,Qa=n,Pa.attachEvent("onpropertychange",NE)):t==="focusout"&&Cy()}function J1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ch(Qa)}function Z1(t,e){if(t==="click")return ch(e)}function eC(t,e){if(t==="input"||t==="change")return ch(e)}function tC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:tC;function Ya(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!tf.call(e,i)||!Nn(t[i],e[i]))return!1}return!0}function Ry(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Py(t,e){var n=Ry(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ry(n)}}function bE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function DE(){for(var t=window,e=cc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cc(t.document)}return e}function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nC(t){var e=DE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bE(n.ownerDocument.documentElement,n)){if(r!==null&&Gp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Py(n,s);var o=Py(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rC=_r&&"documentMode"in document&&11>=document.documentMode,Vs=null,Ef=null,xa=null,Tf=!1;function xy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tf||Vs==null||Vs!==cc(r)||(r=Vs,"selectionStart"in r&&Gp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xa&&Ya(xa,r)||(xa=r,r=yc(Ef,"onSelect"),0<r.length&&(e=new Hp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vs)))}function pu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Us={animationend:pu("Animation","AnimationEnd"),animationiteration:pu("Animation","AnimationIteration"),animationstart:pu("Animation","AnimationStart"),transitionend:pu("Transition","TransitionEnd")},md={},OE={};_r&&(OE=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function hh(t){if(md[t])return md[t];if(!Us[t])return t;var e=Us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in OE)return md[t]=e[n];return t}var LE=hh("animationend"),ME=hh("animationiteration"),VE=hh("animationstart"),UE=hh("transitionend"),FE=new Map,ky="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(t,e){FE.set(t,e),as(e,[t])}for(var gd=0;gd<ky.length;gd++){var yd=ky[gd],iC=yd.toLowerCase(),sC=yd[0].toUpperCase()+yd.slice(1);Ii(iC,"on"+sC)}Ii(LE,"onAnimationEnd");Ii(ME,"onAnimationIteration");Ii(VE,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(UE,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function Ny(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,i1(r,e,void 0,t),t.currentTarget=null}function jE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Ny(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Ny(i,l,c),s=u}}}if(dc)throw t=yf,dc=!1,yf=null,t}function Fe(t,e){var n=e[Rf];n===void 0&&(n=e[Rf]=new Set);var r=t+"__bubble";n.has(r)||($E(e,t,2,!1),n.add(r))}function _d(t,e,n){var r=0;e&&(r|=4),$E(n,t,r,e)}var mu="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[mu]){t[mu]=!0,Kw.forEach(function(n){n!=="selectionchange"&&(oC.has(n)||_d(n,!1,t),_d(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mu]||(e[mu]=!0,_d("selectionchange",!1,e))}}function $E(t,e,n,r){switch(SE(e)){case 1:var i=w1;break;case 4:i=E1;break;default:i=Bp}n=i.bind(null,e,n,t),i=void 0,!gf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=$i(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}cE(function(){var c=s,d=Up(n),p=[];e:{var m=FE.get(t);if(m!==void 0){var E=Hp,C=t;switch(t){case"keypress":if(Bu(n)===0)break e;case"keydown":case"keyup":E=M1;break;case"focusin":C="focus",E=dd;break;case"focusout":C="blur",E=dd;break;case"beforeblur":case"afterblur":E=dd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=vy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=F1;break;case LE:case ME:case VE:E=R1;break;case UE:E=$1;break;case"scroll":E=T1;break;case"wheel":E=z1;break;case"copy":case"cut":case"paste":E=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Ey}var P=(e&4)!==0,D=!P&&t==="scroll",S=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,R;v!==null;){R=v;var L=R.stateNode;if(R.tag===5&&L!==null&&(R=L,S!==null&&(L=Wa(v,S),L!=null&&P.push(Ja(v,L,R)))),D)break;v=v.return}0<P.length&&(m=new E(m,C,null,n,d),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==pf&&(C=n.relatedTarget||n.fromElement)&&($i(C)||C[vr]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(C=n.relatedTarget||n.toElement,E=c,C=C?$i(C):null,C!==null&&(D=ls(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(E=null,C=c),E!==C)){if(P=vy,L="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Ey,L="onPointerLeave",S="onPointerEnter",v="pointer"),D=E==null?m:Fs(E),R=C==null?m:Fs(C),m=new P(L,v+"leave",E,n,d),m.target=D,m.relatedTarget=R,L=null,$i(d)===c&&(P=new P(S,v+"enter",C,n,d),P.target=R,P.relatedTarget=D,L=P),D=L,E&&C)t:{for(P=E,S=C,v=0,R=P;R;R=Rs(R))v++;for(R=0,L=S;L;L=Rs(L))R++;for(;0<v-R;)P=Rs(P),v--;for(;0<R-v;)S=Rs(S),R--;for(;v--;){if(P===S||S!==null&&P===S.alternate)break t;P=Rs(P),S=Rs(S)}P=null}else P=null;E!==null&&by(p,m,E,P,!1),C!==null&&D!==null&&by(p,D,C,P,!0)}}e:{if(m=c?Fs(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var B=Y1;else if(Sy(m))if(kE)B=eC;else{B=J1;var H=X1}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(B=Z1);if(B&&(B=B(t,c))){xE(p,B,n,d);break e}H&&H(t,m,c),t==="focusout"&&(H=m._wrapperState)&&H.controlled&&m.type==="number"&&uf(m,"number",m.value)}switch(H=c?Fs(c):window,t){case"focusin":(Sy(H)||H.contentEditable==="true")&&(Vs=H,Ef=c,xa=null);break;case"focusout":xa=Ef=Vs=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,xy(p,n,d);break;case"selectionchange":if(rC)break;case"keydown":case"keyup":xy(p,n,d)}var g;if(qp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ms?RE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(CE&&n.locale!=="ko"&&(Ms||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ms&&(g=AE()):(Yr=d,zp="value"in Yr?Yr.value:Yr.textContent,Ms=!0)),H=yc(c,y),0<H.length&&(y=new wy(y,t,null,n,d),p.push({event:y,listeners:H}),g?y.data=g:(g=PE(n),g!==null&&(y.data=g)))),(g=W1?q1(t,n):G1(t,n))&&(c=yc(c,"onBeforeInput"),0<c.length&&(d=new wy("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=g))}jE(p,e)})}function Ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wa(t,n),s!=null&&r.unshift(Ja(t,s,i)),s=Wa(t,e),s!=null&&r.push(Ja(t,s,i))),t=t.return}return r}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function by(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Wa(n,s),u!=null&&o.unshift(Ja(n,u,l))):i||(u=Wa(n,s),u!=null&&o.push(Ja(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aC=/\r\n?/g,lC=/\u0000|\uFFFD/g;function Dy(t){return(typeof t=="string"?t:""+t).replace(aC,`
`).replace(lC,"")}function gu(t,e,n){if(e=Dy(e),Dy(t)!==e&&n)throw Error(z(425))}function _c(){}var If=null,Sf=null;function Af(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cf=typeof setTimeout=="function"?setTimeout:void 0,uC=typeof clearTimeout=="function"?clearTimeout:void 0,Oy=typeof Promise=="function"?Promise:void 0,cC=typeof queueMicrotask=="function"?queueMicrotask:typeof Oy<"u"?function(t){return Oy.resolve(null).then(t).catch(hC)}:Cf;function hC(t){setTimeout(function(){throw t})}function wd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ka(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ka(e)}function ri(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ly(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Po=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Po,Za="__reactProps$"+Po,vr="__reactContainer$"+Po,Rf="__reactEvents$"+Po,dC="__reactListeners$"+Po,fC="__reactHandles$"+Po;function $i(t){var e=t[Hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vr]||n[Hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ly(t);t!==null;){if(n=t[Hn])return n;t=Ly(t)}return e}t=n,n=t.parentNode}return null}function Pl(t){return t=t[Hn]||t[vr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function dh(t){return t[Za]||null}var Pf=[],js=-1;function Si(t){return{current:t}}function je(t){0>js||(t.current=Pf[js],Pf[js]=null,js--)}function Me(t,e){js++,Pf[js]=t.current,t.current=e}var gi={},Ot=Si(gi),Gt=Si(!1),Yi=gi;function uo(t,e){var n=t.type.contextTypes;if(!n)return gi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Kt(t){return t=t.childContextTypes,t!=null}function vc(){je(Gt),je(Ot)}function My(t,e,n){if(Ot.current!==gi)throw Error(z(168));Me(Ot,e),Me(Gt,n)}function BE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,XA(t)||"Unknown",i));return qe({},n,r)}function wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gi,Yi=Ot.current,Me(Ot,t),Me(Gt,Gt.current),!0}function Vy(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=BE(t,e,Yi),r.__reactInternalMemoizedMergedChildContext=t,je(Gt),je(Ot),Me(Ot,t)):je(Gt),Me(Gt,n)}var ur=null,fh=!1,Ed=!1;function zE(t){ur===null?ur=[t]:ur.push(t)}function pC(t){fh=!0,zE(t)}function Ai(){if(!Ed&&ur!==null){Ed=!0;var t=0,e=Pe;try{var n=ur;for(Pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ur=null,fh=!1}catch(i){throw ur!==null&&(ur=ur.slice(t+1)),pE(Fp,Ai),i}finally{Pe=e,Ed=!1}}return null}var $s=[],Bs=0,Ec=null,Tc=0,cn=[],hn=0,Xi=null,cr=1,hr="";function Mi(t,e){$s[Bs++]=Tc,$s[Bs++]=Ec,Ec=t,Tc=e}function HE(t,e,n){cn[hn++]=cr,cn[hn++]=hr,cn[hn++]=Xi,Xi=t;var r=cr;t=hr;var i=32-xn(r)-1;r&=~(1<<i),n+=1;var s=32-xn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cr=1<<32-xn(e)+i|n<<i|r,hr=s+t}else cr=1<<s|n<<i|r,hr=t}function Kp(t){t.return!==null&&(Mi(t,1),HE(t,1,0))}function Qp(t){for(;t===Ec;)Ec=$s[--Bs],$s[Bs]=null,Tc=$s[--Bs],$s[Bs]=null;for(;t===Xi;)Xi=cn[--hn],cn[hn]=null,hr=cn[--hn],cn[hn]=null,cr=cn[--hn],cn[hn]=null}var nn=null,tn=null,ze=!1,Cn=null;function WE(t,e){var n=pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nn=t,tn=ri(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nn=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xi!==null?{id:cr,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nn=t,tn=null,!0):!1;default:return!1}}function xf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kf(t){if(ze){var e=tn;if(e){var n=e;if(!Uy(t,e)){if(xf(t))throw Error(z(418));e=ri(n.nextSibling);var r=nn;e&&Uy(t,e)?WE(r,n):(t.flags=t.flags&-4097|2,ze=!1,nn=t)}}else{if(xf(t))throw Error(z(418));t.flags=t.flags&-4097|2,ze=!1,nn=t}}}function Fy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function yu(t){if(t!==nn)return!1;if(!ze)return Fy(t),ze=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Af(t.type,t.memoizedProps)),e&&(e=tn)){if(xf(t))throw qE(),Error(z(418));for(;e;)WE(t,e),e=ri(e.nextSibling)}if(Fy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=ri(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=nn?ri(t.stateNode.nextSibling):null;return!0}function qE(){for(var t=tn;t;)t=ri(t.nextSibling)}function co(){tn=nn=null,ze=!1}function Yp(t){Cn===null?Cn=[t]:Cn.push(t)}var mC=Pr.ReactCurrentBatchConfig;function aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function _u(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jy(t){var e=t._init;return e(t._payload)}function GE(t){function e(S,v){if(t){var R=S.deletions;R===null?(S.deletions=[v],S.flags|=16):R.push(v)}}function n(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=ai(S,v),S.index=0,S.sibling=null,S}function s(S,v,R){return S.index=R,t?(R=S.alternate,R!==null?(R=R.index,R<v?(S.flags|=2,v):R):(S.flags|=2,v)):(S.flags|=1048576,v)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,v,R,L){return v===null||v.tag!==6?(v=Pd(R,S.mode,L),v.return=S,v):(v=i(v,R),v.return=S,v)}function u(S,v,R,L){var B=R.type;return B===Ls?d(S,v,R.props.children,L,R.key):v!==null&&(v.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===$r&&jy(B)===v.type)?(L=i(v,R.props),L.ref=aa(S,v,R),L.return=S,L):(L=Qu(R.type,R.key,R.props,null,S.mode,L),L.ref=aa(S,v,R),L.return=S,L)}function c(S,v,R,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=xd(R,S.mode,L),v.return=S,v):(v=i(v,R.children||[]),v.return=S,v)}function d(S,v,R,L,B){return v===null||v.tag!==7?(v=Qi(R,S.mode,L,B),v.return=S,v):(v=i(v,R),v.return=S,v)}function p(S,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Pd(""+v,S.mode,R),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case au:return R=Qu(v.type,v.key,v.props,null,S.mode,R),R.ref=aa(S,null,v),R.return=S,R;case Os:return v=xd(v,S.mode,R),v.return=S,v;case $r:var L=v._init;return p(S,L(v._payload),R)}if(ma(v)||na(v))return v=Qi(v,S.mode,R,null),v.return=S,v;_u(S,v)}return null}function m(S,v,R,L){var B=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return B!==null?null:l(S,v,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case au:return R.key===B?u(S,v,R,L):null;case Os:return R.key===B?c(S,v,R,L):null;case $r:return B=R._init,m(S,v,B(R._payload),L)}if(ma(R)||na(R))return B!==null?null:d(S,v,R,L,null);_u(S,R)}return null}function E(S,v,R,L,B){if(typeof L=="string"&&L!==""||typeof L=="number")return S=S.get(R)||null,l(v,S,""+L,B);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case au:return S=S.get(L.key===null?R:L.key)||null,u(v,S,L,B);case Os:return S=S.get(L.key===null?R:L.key)||null,c(v,S,L,B);case $r:var H=L._init;return E(S,v,R,H(L._payload),B)}if(ma(L)||na(L))return S=S.get(R)||null,d(v,S,L,B,null);_u(v,L)}return null}function C(S,v,R,L){for(var B=null,H=null,g=v,y=v=0,T=null;g!==null&&y<R.length;y++){g.index>y?(T=g,g=null):T=g.sibling;var I=m(S,g,R[y],L);if(I===null){g===null&&(g=T);break}t&&g&&I.alternate===null&&e(S,g),v=s(I,v,y),H===null?B=I:H.sibling=I,H=I,g=T}if(y===R.length)return n(S,g),ze&&Mi(S,y),B;if(g===null){for(;y<R.length;y++)g=p(S,R[y],L),g!==null&&(v=s(g,v,y),H===null?B=g:H.sibling=g,H=g);return ze&&Mi(S,y),B}for(g=r(S,g);y<R.length;y++)T=E(g,S,y,R[y],L),T!==null&&(t&&T.alternate!==null&&g.delete(T.key===null?y:T.key),v=s(T,v,y),H===null?B=T:H.sibling=T,H=T);return t&&g.forEach(function(k){return e(S,k)}),ze&&Mi(S,y),B}function P(S,v,R,L){var B=na(R);if(typeof B!="function")throw Error(z(150));if(R=B.call(R),R==null)throw Error(z(151));for(var H=B=null,g=v,y=v=0,T=null,I=R.next();g!==null&&!I.done;y++,I=R.next()){g.index>y?(T=g,g=null):T=g.sibling;var k=m(S,g,I.value,L);if(k===null){g===null&&(g=T);break}t&&g&&k.alternate===null&&e(S,g),v=s(k,v,y),H===null?B=k:H.sibling=k,H=k,g=T}if(I.done)return n(S,g),ze&&Mi(S,y),B;if(g===null){for(;!I.done;y++,I=R.next())I=p(S,I.value,L),I!==null&&(v=s(I,v,y),H===null?B=I:H.sibling=I,H=I);return ze&&Mi(S,y),B}for(g=r(S,g);!I.done;y++,I=R.next())I=E(g,S,y,I.value,L),I!==null&&(t&&I.alternate!==null&&g.delete(I.key===null?y:I.key),v=s(I,v,y),H===null?B=I:H.sibling=I,H=I);return t&&g.forEach(function(N){return e(S,N)}),ze&&Mi(S,y),B}function D(S,v,R,L){if(typeof R=="object"&&R!==null&&R.type===Ls&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case au:e:{for(var B=R.key,H=v;H!==null;){if(H.key===B){if(B=R.type,B===Ls){if(H.tag===7){n(S,H.sibling),v=i(H,R.props.children),v.return=S,S=v;break e}}else if(H.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===$r&&jy(B)===H.type){n(S,H.sibling),v=i(H,R.props),v.ref=aa(S,H,R),v.return=S,S=v;break e}n(S,H);break}else e(S,H);H=H.sibling}R.type===Ls?(v=Qi(R.props.children,S.mode,L,R.key),v.return=S,S=v):(L=Qu(R.type,R.key,R.props,null,S.mode,L),L.ref=aa(S,v,R),L.return=S,S=L)}return o(S);case Os:e:{for(H=R.key;v!==null;){if(v.key===H)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){n(S,v.sibling),v=i(v,R.children||[]),v.return=S,S=v;break e}else{n(S,v);break}else e(S,v);v=v.sibling}v=xd(R,S.mode,L),v.return=S,S=v}return o(S);case $r:return H=R._init,D(S,v,H(R._payload),L)}if(ma(R))return C(S,v,R,L);if(na(R))return P(S,v,R,L);_u(S,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,v!==null&&v.tag===6?(n(S,v.sibling),v=i(v,R),v.return=S,S=v):(n(S,v),v=Pd(R,S.mode,L),v.return=S,S=v),o(S)):n(S,v)}return D}var ho=GE(!0),KE=GE(!1),Ic=Si(null),Sc=null,zs=null,Xp=null;function Jp(){Xp=zs=Sc=null}function Zp(t){var e=Ic.current;je(Ic),t._currentValue=e}function Nf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){Sc=t,Xp=zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function gn(t){var e=t._currentValue;if(Xp!==t)if(t={context:t,memoizedValue:e,next:null},zs===null){if(Sc===null)throw Error(z(308));zs=t,Sc.dependencies={lanes:0,firstContext:t}}else zs=zs.next=t;return e}var Bi=null;function em(t){Bi===null?Bi=[t]:Bi.push(t)}function QE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,em(e)):(n.next=i.next,i.next=n),e.interleaved=n,wr(t,r)}function wr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Br=!1;function tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function YE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ii(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wr(t,n)}return i=r.interleaved,i===null?(e.next=e,em(r)):(e.next=i.next,i.next=e),r.interleaved=e,wr(t,n)}function zu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jp(t,n)}}function $y(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,r){var i=t.updateQueue;Br=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(m=e,E=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){p=C.call(E,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,m=typeof C=="function"?C.call(E,p,m):C,m==null)break e;p=qe({},p,m);break e;case 2:Br=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=p):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zi|=o,t.lanes=o,t.memoizedState=p}}function By(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var xl={},Gn=Si(xl),el=Si(xl),tl=Si(xl);function zi(t){if(t===xl)throw Error(z(174));return t}function nm(t,e){switch(Me(tl,e),Me(el,t),Me(Gn,xl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hf(e,t)}je(Gn),Me(Gn,e)}function fo(){je(Gn),je(el),je(tl)}function XE(t){zi(tl.current);var e=zi(Gn.current),n=hf(e,t.type);e!==n&&(Me(el,t),Me(Gn,n))}function rm(t){el.current===t&&(je(Gn),je(el))}var He=Si(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Td=[];function im(){for(var t=0;t<Td.length;t++)Td[t]._workInProgressVersionPrimary=null;Td.length=0}var Hu=Pr.ReactCurrentDispatcher,Id=Pr.ReactCurrentBatchConfig,Ji=0,We=null,lt=null,dt=null,Rc=!1,ka=!1,nl=0,gC=0;function Pt(){throw Error(z(321))}function sm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function om(t,e,n,r,i,s){if(Ji=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hu.current=t===null||t.memoizedState===null?wC:EC,t=n(r,i),ka){s=0;do{if(ka=!1,nl=0,25<=s)throw Error(z(301));s+=1,dt=lt=null,e.updateQueue=null,Hu.current=TC,t=n(r,i)}while(ka)}if(Hu.current=Pc,e=lt!==null&&lt.next!==null,Ji=0,dt=lt=We=null,Rc=!1,e)throw Error(z(300));return t}function am(){var t=nl!==0;return nl=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?We.memoizedState=dt=t:dt=dt.next=t,dt}function yn(){if(lt===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var e=dt===null?We.memoizedState:dt.next;if(e!==null)dt=e,lt=t;else{if(t===null)throw Error(z(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},dt===null?We.memoizedState=dt=t:dt=dt.next=t}return dt}function rl(t,e){return typeof e=="function"?e(t):e}function Sd(t){var e=yn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=lt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Ji&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,We.lanes|=d,Zi|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Nn(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,We.lanes|=s,Zi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ad(t){var e=yn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function JE(){}function ZE(t,e){var n=We,r=yn(),i=e(),s=!Nn(r.memoizedState,i);if(s&&(r.memoizedState=i,qt=!0),r=r.queue,lm(nT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,il(9,tT.bind(null,n,r,i,e),void 0,null),pt===null)throw Error(z(349));Ji&30||eT(n,e,i)}return i}function eT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tT(t,e,n,r){e.value=n,e.getSnapshot=r,rT(e)&&iT(t)}function nT(t,e,n){return n(function(){rT(e)&&iT(t)})}function rT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function iT(t){var e=wr(t,1);e!==null&&kn(e,t,1,-1)}function zy(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:t},e.queue=t,t=t.dispatch=vC.bind(null,We,t),[e.memoizedState,t]}function il(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sT(){return yn().memoizedState}function Wu(t,e,n,r){var i=Bn();We.flags|=t,i.memoizedState=il(1|e,n,void 0,r===void 0?null:r)}function ph(t,e,n,r){var i=yn();r=r===void 0?null:r;var s=void 0;if(lt!==null){var o=lt.memoizedState;if(s=o.destroy,r!==null&&sm(r,o.deps)){i.memoizedState=il(e,n,s,r);return}}We.flags|=t,i.memoizedState=il(1|e,n,s,r)}function Hy(t,e){return Wu(8390656,8,t,e)}function lm(t,e){return ph(2048,8,t,e)}function oT(t,e){return ph(4,2,t,e)}function aT(t,e){return ph(4,4,t,e)}function lT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function uT(t,e,n){return n=n!=null?n.concat([t]):null,ph(4,4,lT.bind(null,e,t),n)}function um(){}function cT(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function hT(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dT(t,e,n){return Ji&21?(Nn(n,e)||(n=yE(),We.lanes|=n,Zi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function yC(t,e){var n=Pe;Pe=n!==0&&4>n?n:4,t(!0);var r=Id.transition;Id.transition={};try{t(!1),e()}finally{Pe=n,Id.transition=r}}function fT(){return yn().memoizedState}function _C(t,e,n){var r=oi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pT(t))mT(e,n);else if(n=QE(t,e,n,r),n!==null){var i=Ft();kn(n,t,r,i),gT(n,e,r)}}function vC(t,e,n){var r=oi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pT(t))mT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Nn(l,o)){var u=e.interleaved;u===null?(i.next=i,em(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=QE(t,e,i,r),n!==null&&(i=Ft(),kn(n,t,r,i),gT(n,e,r))}}function pT(t){var e=t.alternate;return t===We||e!==null&&e===We}function mT(t,e){ka=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jp(t,n)}}var Pc={readContext:gn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},wC={readContext:gn,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:Hy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4194308,4,lT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wu(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_C.bind(null,We,t),[r.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:zy,useDebugValue:um,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=zy(!1),e=t[0];return t=yC.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=We,i=Bn();if(ze){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),pt===null)throw Error(z(349));Ji&30||eT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Hy(nT.bind(null,r,s,t),[t]),r.flags|=2048,il(9,tT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=pt.identifierPrefix;if(ze){var n=hr,r=cr;n=(r&~(1<<32-xn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=nl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},EC={readContext:gn,useCallback:cT,useContext:gn,useEffect:lm,useImperativeHandle:uT,useInsertionEffect:oT,useLayoutEffect:aT,useMemo:hT,useReducer:Sd,useRef:sT,useState:function(){return Sd(rl)},useDebugValue:um,useDeferredValue:function(t){var e=yn();return dT(e,lt.memoizedState,t)},useTransition:function(){var t=Sd(rl)[0],e=yn().memoizedState;return[t,e]},useMutableSource:JE,useSyncExternalStore:ZE,useId:fT,unstable_isNewReconciler:!1},TC={readContext:gn,useCallback:cT,useContext:gn,useEffect:lm,useImperativeHandle:uT,useInsertionEffect:oT,useLayoutEffect:aT,useMemo:hT,useReducer:Ad,useRef:sT,useState:function(){return Ad(rl)},useDebugValue:um,useDeferredValue:function(t){var e=yn();return lt===null?e.memoizedState=t:dT(e,lt.memoizedState,t)},useTransition:function(){var t=Ad(rl)[0],e=yn().memoizedState;return[t,e]},useMutableSource:JE,useSyncExternalStore:ZE,useId:fT,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mh={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ft(),i=oi(t),s=pr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(kn(e,t,i,r),zu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ft(),i=oi(t),s=pr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ii(t,s,i),e!==null&&(kn(e,t,i,r),zu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ft(),r=oi(t),i=pr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ii(t,i,r),e!==null&&(kn(e,t,r,n),zu(e,t,r))}};function Wy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ya(n,r)||!Ya(i,s):!0}function yT(t,e,n){var r=!1,i=gi,s=e.contextType;return typeof s=="object"&&s!==null?s=gn(s):(i=Kt(e)?Yi:Ot.current,r=e.contextTypes,s=(r=r!=null)?uo(t,i):gi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&mh.enqueueReplaceState(e,e.state,null)}function Df(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},tm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=gn(s):(s=Kt(e)?Yi:Ot.current,i.context=uo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&mh.enqueueReplaceState(i,i.state,null),Ac(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e){try{var n="",r=e;do n+=YA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Cd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IC=typeof WeakMap=="function"?WeakMap:Map;function _T(t,e,n){n=pr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){kc||(kc=!0,Hf=r),Of(t,e)},n}function vT(t,e,n){n=pr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Of(t,e),typeof r!="function"&&(si===null?si=new Set([this]):si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=VC.bind(null,t,e,n),e.then(t,t))}function Ky(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pr(-1,1),e.tag=2,ii(n,e,1))),n.lanes|=1),t)}var SC=Pr.ReactCurrentOwner,qt=!1;function Ut(t,e,n,r){e.child=t===null?KE(e,null,n,r):ho(e,t.child,n,r)}function Yy(t,e,n,r,i){n=n.render;var s=e.ref;return Zs(e,i),r=om(t,e,n,r,s,i),n=am(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(ze&&n&&Kp(e),e.flags|=1,Ut(t,e,r,i),e.child)}function Xy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ym(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wT(t,e,s,r,i)):(t=Qu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ya,n(o,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=ai(s,r),t.ref=e.ref,t.return=e,e.child=t}function wT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ya(s,r)&&t.ref===e.ref)if(qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,Er(t,e,i)}return Lf(t,e,n,r,i)}function ET(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Ws,Zt),Zt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(Ws,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(Ws,Zt),Zt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(Ws,Zt),Zt|=r;return Ut(t,e,i,n),e.child}function TT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lf(t,e,n,r,i){var s=Kt(n)?Yi:Ot.current;return s=uo(e,s),Zs(e,i),n=om(t,e,n,r,s,i),r=am(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(ze&&r&&Kp(e),e.flags|=1,Ut(t,e,n,i),e.child)}function Jy(t,e,n,r,i){if(Kt(n)){var s=!0;wc(e)}else s=!1;if(Zs(e,i),e.stateNode===null)qu(t,e),yT(e,n,r),Df(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=gn(c):(c=Kt(n)?Yi:Ot.current,c=uo(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&qy(e,o,r,c),Br=!1;var m=e.memoizedState;o.state=m,Ac(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Gt.current||Br?(typeof d=="function"&&(bf(e,n,d,r),u=e.memoizedState),(l=Br||Wy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,YE(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:In(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=gn(u):(u=Kt(n)?Yi:Ot.current,u=uo(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&qy(e,o,r,u),Br=!1,m=e.memoizedState,o.state=m,Ac(e,r,o,i);var C=e.memoizedState;l!==p||m!==C||Gt.current||Br?(typeof E=="function"&&(bf(e,n,E,r),C=e.memoizedState),(c=Br||Wy(e,n,c,r,m,C,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Mf(t,e,n,r,s,i)}function Mf(t,e,n,r,i,s){TT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Vy(e,n,!1),Er(t,e,s);r=e.stateNode,SC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ho(e,t.child,null,s),e.child=ho(e,null,l,s)):Ut(t,e,l,s),e.memoizedState=r.state,i&&Vy(e,n,!0),e.child}function IT(t){var e=t.stateNode;e.pendingContext?My(t,e.pendingContext,e.pendingContext!==e.context):e.context&&My(t,e.context,!1),nm(t,e.containerInfo)}function Zy(t,e,n,r,i){return co(),Yp(i),e.flags|=256,Ut(t,e,n,r),e.child}var Vf={dehydrated:null,treeContext:null,retryLane:0};function Uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function ST(t,e,n){var r=e.pendingProps,i=He.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(He,i&1),t===null)return kf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_h(o,r,0,null),t=Qi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uf(n),e.memoizedState=Vf,t):cm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return AC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ai(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ai(l,s):(s=Qi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vf,r}return s=t.child,t=s.sibling,r=ai(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cm(t,e){return e=_h({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vu(t,e,n,r){return r!==null&&Yp(r),ho(e,t.child,null,n),t=cm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Cd(Error(z(422))),vu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_h({mode:"visible",children:r.children},i,0,null),s=Qi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ho(e,t.child,null,o),e.child.memoizedState=Uf(o),e.memoizedState=Vf,s);if(!(e.mode&1))return vu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(z(419)),r=Cd(s,r,void 0),vu(t,e,o,r)}if(l=(o&t.childLanes)!==0,qt||l){if(r=pt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wr(t,i),kn(r,t,i,-1))}return gm(),r=Cd(Error(z(421))),vu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=UC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tn=ri(i.nextSibling),nn=e,ze=!0,Cn=null,t!==null&&(cn[hn++]=cr,cn[hn++]=hr,cn[hn++]=Xi,cr=t.id,hr=t.overflow,Xi=e),e=cm(e,r.children),e.flags|=4096,e)}function e_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nf(t.return,e,n)}function Rd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function AT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ut(t,e,r.children,n),r=He.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e_(t,n,e);else if(t.tag===19)e_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(He,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Cc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rd(e,!0,n,null,s);break;case"together":Rd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CC(t,e,n){switch(e.tag){case 3:IT(e),co();break;case 5:XE(e);break;case 1:Kt(e.type)&&wc(e);break;case 4:nm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(Ic,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(He,He.current&1),e.flags|=128,null):n&e.child.childLanes?ST(t,e,n):(Me(He,He.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Me(He,He.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return AT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(He,He.current),r)break;return null;case 22:case 23:return e.lanes=0,ET(t,e,n)}return Er(t,e,n)}var CT,Ff,RT,PT;CT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ff=function(){};RT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,zi(Gn.current);var s=null;switch(n){case"input":i=af(t,i),r=af(t,r),s=[];break;case"select":i=qe({},i,{value:void 0}),r=qe({},r,{value:void 0}),s=[];break;case"textarea":i=cf(t,i),r=cf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_c)}df(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(za.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(za.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};PT=function(t,e,n,r){n!==r&&(e.flags|=4)};function la(t,e){if(!ze)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RC(t,e,n){var r=e.pendingProps;switch(Qp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return Kt(e.type)&&vc(),xt(e),null;case 3:return r=e.stateNode,fo(),je(Gt),je(Ot),im(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(Gf(Cn),Cn=null))),Ff(t,e),xt(e),null;case 5:rm(e);var i=zi(tl.current);if(n=e.type,t!==null&&e.stateNode!=null)RT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return xt(e),null}if(t=zi(Gn.current),yu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Hn]=e,r[Za]=s,t=(e.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<ya.length;i++)Fe(ya[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":uy(r,s),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fe("invalid",r);break;case"textarea":hy(r,s),Fe("invalid",r)}df(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&gu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&gu(r.textContent,l,t),i=["children",""+l]):za.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Fe("scroll",r)}switch(n){case"input":lu(r),cy(r,s,!0);break;case"textarea":lu(r),dy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_c)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=nE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Hn]=e,t[Za]=r,CT(t,e,!1,!1),e.stateNode=t;e:{switch(o=ff(n,r),n){case"dialog":Fe("cancel",t),Fe("close",t),i=r;break;case"iframe":case"object":case"embed":Fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ya.length;i++)Fe(ya[i],t);i=r;break;case"source":Fe("error",t),i=r;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),i=r;break;case"details":Fe("toggle",t),i=r;break;case"input":uy(t,r),i=af(t,r),Fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=qe({},r,{value:void 0}),Fe("invalid",t);break;case"textarea":hy(t,r),i=cf(t,r),Fe("invalid",t);break;default:i=r}df(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?sE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&rE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ha(t,u):typeof u=="number"&&Ha(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(za.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Fe("scroll",t):u!=null&&Op(t,s,u,o))}switch(n){case"input":lu(t),cy(t,r,!1);break;case"textarea":lu(t),dy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_c)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)PT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=zi(tl.current),zi(Gn.current),yu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Hn]=e,(s=r.nodeValue!==n)&&(t=nn,t!==null))switch(t.tag){case 3:gu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Hn]=e,e.stateNode=r}return xt(e),null;case 13:if(je(He),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ze&&tn!==null&&e.mode&1&&!(e.flags&128))qE(),co(),e.flags|=98560,s=!1;else if(s=yu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Hn]=e}else co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),s=!1}else Cn!==null&&(Gf(Cn),Cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||He.current&1?ut===0&&(ut=3):gm())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return fo(),Ff(t,e),t===null&&Xa(e.stateNode.containerInfo),xt(e),null;case 10:return Zp(e.type._context),xt(e),null;case 17:return Kt(e.type)&&vc(),xt(e),null;case 19:if(je(He),s=e.memoizedState,s===null)return xt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)la(s,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cc(t),o!==null){for(e.flags|=128,la(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(He,He.current&1|2),e.child}t=t.sibling}s.tail!==null&&Je()>mo&&(e.flags|=128,r=!0,la(s,!1),e.lanes=4194304)}else{if(!r)if(t=Cc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ze)return xt(e),null}else 2*Je()-s.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,r=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,n=He.current,Me(He,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return mm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function PC(t,e){switch(Qp(e),e.tag){case 1:return Kt(e.type)&&vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fo(),je(Gt),je(Ot),im(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rm(e),null;case 13:if(je(He),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(He),null;case 4:return fo(),null;case 10:return Zp(e.type._context),null;case 22:case 23:return mm(),null;case 24:return null;default:return null}}var wu=!1,bt=!1,xC=typeof WeakSet=="function"?WeakSet:Set,X=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(t,e,r)}else n.current=null}function jf(t,e,n){try{n()}catch(r){Qe(t,e,r)}}var t_=!1;function kC(t,e){if(If=mc,t=DE(),Gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(E=p.firstChild)!==null;)m=p,p=E;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sf={focusedElem:t,selectionRange:n},mc=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,D=C.memoizedState,S=e.stateNode,v=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:In(e.type,P),D);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(L){Qe(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return C=t_,t_=!1,C}function Na(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&jf(e,n,s)}i=i.next}while(i!==r)}}function gh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xT(t){var e=t.alternate;e!==null&&(t.alternate=null,xT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Hn],delete e[Za],delete e[Rf],delete e[dC],delete e[fC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kT(t){return t.tag===5||t.tag===3||t.tag===4}function n_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_c));else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(zf(t,e,n),t=t.sibling;t!==null;)zf(t,e,n),t=t.sibling}var wt=null,Sn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)NT(t,e,n),n=n.sibling}function NT(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(lh,n)}catch{}switch(n.tag){case 5:bt||Hs(n,e);case 6:var r=wt,i=Sn;wt=null,Vr(t,e,n),wt=r,Sn=i,wt!==null&&(Sn?(t=wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):wt.removeChild(n.stateNode));break;case 18:wt!==null&&(Sn?(t=wt,n=n.stateNode,t.nodeType===8?wd(t.parentNode,n):t.nodeType===1&&wd(t,n),Ka(t)):wd(wt,n.stateNode));break;case 4:r=wt,i=Sn,wt=n.stateNode.containerInfo,Sn=!0,Vr(t,e,n),wt=r,Sn=i;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jf(n,e,o),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!bt&&(Hs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Qe(n,e,l)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,Vr(t,e,n),bt=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function r_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xC),e.forEach(function(r){var i=FC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:wt=l.stateNode,Sn=!1;break e;case 3:wt=l.stateNode.containerInfo,Sn=!0;break e;case 4:wt=l.stateNode.containerInfo,Sn=!0;break e}l=l.return}if(wt===null)throw Error(z(160));NT(s,o,i),wt=null,Sn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bT(e,t),e=e.sibling}function bT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(e,t),jn(t),r&4){try{Na(3,t,t.return),gh(3,t)}catch(P){Qe(t,t.return,P)}try{Na(5,t,t.return)}catch(P){Qe(t,t.return,P)}}break;case 1:Tn(e,t),jn(t),r&512&&n!==null&&Hs(n,n.return);break;case 5:if(Tn(e,t),jn(t),r&512&&n!==null&&Hs(n,n.return),t.flags&32){var i=t.stateNode;try{Ha(i,"")}catch(P){Qe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&eE(i,s),ff(l,o);var c=ff(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?sE(i,p):d==="dangerouslySetInnerHTML"?rE(i,p):d==="children"?Ha(i,p):Op(i,d,p,c)}switch(l){case"input":lf(i,s);break;case"textarea":tE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Qs(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Qs(i,!!s.multiple,s.defaultValue,!0):Qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[Za]=s}catch(P){Qe(t,t.return,P)}}break;case 6:if(Tn(e,t),jn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Qe(t,t.return,P)}}break;case 3:if(Tn(e,t),jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(P){Qe(t,t.return,P)}break;case 4:Tn(e,t),jn(t);break;case 13:Tn(e,t),jn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fm=Je())),r&4&&r_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(c=bt)||d,Tn(e,t),bt=c):Tn(e,t),jn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(X=t,d=t.child;d!==null;){for(p=X=d;X!==null;){switch(m=X,E=m.child,m.tag){case 0:case 11:case 14:case 15:Na(4,m,m.return);break;case 1:Hs(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){Qe(r,n,P)}}break;case 5:Hs(m,m.return);break;case 22:if(m.memoizedState!==null){s_(p);continue}}E!==null?(E.return=m,X=E):s_(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=iE("display",o))}catch(P){Qe(t,t.return,P)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){Qe(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Tn(e,t),jn(t),r&4&&r_(t);break;case 21:break;default:Tn(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ha(i,""),r.flags&=-33);var s=n_(t);zf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=n_(t);Bf(t,l,o);break;default:throw Error(z(161))}}catch(u){Qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NC(t,e,n){X=t,DT(t)}function DT(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wu;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||bt;l=wu;var c=bt;if(wu=o,(bt=u)&&!c)for(X=i;X!==null;)o=X,u=o.child,o.tag===22&&o.memoizedState!==null?o_(i):u!==null?(u.return=o,X=u):o_(i);for(;s!==null;)X=s,DT(s),s=s.sibling;X=i,wu=l,bt=c}i_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):i_(t)}}function i_(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||gh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&By(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}By(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ka(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}bt||e.flags&512&&$f(e)}catch(m){Qe(e,e.return,m)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function s_(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function o_(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gh(4,e)}catch(u){Qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Qe(e,i,u)}}var s=e.return;try{$f(e)}catch(u){Qe(e,s,u)}break;case 5:var o=e.return;try{$f(e)}catch(u){Qe(e,o,u)}}}catch(u){Qe(e,e.return,u)}if(e===t){X=null;break}var l=e.sibling;if(l!==null){l.return=e.return,X=l;break}X=e.return}}var bC=Math.ceil,xc=Pr.ReactCurrentDispatcher,hm=Pr.ReactCurrentOwner,mn=Pr.ReactCurrentBatchConfig,Ee=0,pt=null,nt=null,It=0,Zt=0,Ws=Si(0),ut=0,sl=null,Zi=0,yh=0,dm=0,ba=null,Wt=null,fm=0,mo=1/0,lr=null,kc=!1,Hf=null,si=null,Eu=!1,Xr=null,Nc=0,Da=0,Wf=null,Gu=-1,Ku=0;function Ft(){return Ee&6?Je():Gu!==-1?Gu:Gu=Je()}function oi(t){return t.mode&1?Ee&2&&It!==0?It&-It:mC.transition!==null?(Ku===0&&(Ku=yE()),Ku):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:SE(t.type)),t):1}function kn(t,e,n,r){if(50<Da)throw Da=0,Wf=null,Error(z(185));Cl(t,n,r),(!(Ee&2)||t!==pt)&&(t===pt&&(!(Ee&2)&&(yh|=n),ut===4&&Hr(t,It)),Qt(t,r),n===1&&Ee===0&&!(e.mode&1)&&(mo=Je()+500,fh&&Ai()))}function Qt(t,e){var n=t.callbackNode;m1(t,e);var r=pc(t,t===pt?It:0);if(r===0)n!==null&&my(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&my(n),e===1)t.tag===0?pC(a_.bind(null,t)):zE(a_.bind(null,t)),cC(function(){!(Ee&6)&&Ai()}),n=null;else{switch(_E(r)){case 1:n=Fp;break;case 4:n=mE;break;case 16:n=fc;break;case 536870912:n=gE;break;default:n=fc}n=$T(n,OT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function OT(t,e){if(Gu=-1,Ku=0,Ee&6)throw Error(z(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var r=pc(t,t===pt?It:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bc(t,r);else{e=r;var i=Ee;Ee|=2;var s=MT();(pt!==t||It!==e)&&(lr=null,mo=Je()+500,Ki(t,e));do try{LC();break}catch(l){LT(t,l)}while(!0);Jp(),xc.current=s,Ee=i,nt!==null?e=0:(pt=null,It=0,e=ut)}if(e!==0){if(e===2&&(i=_f(t),i!==0&&(r=i,e=qf(t,i))),e===1)throw n=sl,Ki(t,0),Hr(t,r),Qt(t,Je()),n;if(e===6)Hr(t,r);else{if(i=t.current.alternate,!(r&30)&&!DC(i)&&(e=bc(t,r),e===2&&(s=_f(t),s!==0&&(r=s,e=qf(t,s))),e===1))throw n=sl,Ki(t,0),Hr(t,r),Qt(t,Je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Vi(t,Wt,lr);break;case 3:if(Hr(t,r),(r&130023424)===r&&(e=fm+500-Je(),10<e)){if(pc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cf(Vi.bind(null,t,Wt,lr),e);break}Vi(t,Wt,lr);break;case 4:if(Hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-xn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bC(r/1960))-r,10<r){t.timeoutHandle=Cf(Vi.bind(null,t,Wt,lr),r);break}Vi(t,Wt,lr);break;case 5:Vi(t,Wt,lr);break;default:throw Error(z(329))}}}return Qt(t,Je()),t.callbackNode===n?OT.bind(null,t):null}function qf(t,e){var n=ba;return t.current.memoizedState.isDehydrated&&(Ki(t,e).flags|=256),t=bc(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&Gf(e)),t}function Gf(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function DC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hr(t,e){for(e&=~dm,e&=~yh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xn(e),r=1<<n;t[n]=-1,e&=~r}}function a_(t){if(Ee&6)throw Error(z(327));eo();var e=pc(t,0);if(!(e&1))return Qt(t,Je()),null;var n=bc(t,e);if(t.tag!==0&&n===2){var r=_f(t);r!==0&&(e=r,n=qf(t,r))}if(n===1)throw n=sl,Ki(t,0),Hr(t,e),Qt(t,Je()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vi(t,Wt,lr),Qt(t,Je()),null}function pm(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(mo=Je()+500,fh&&Ai())}}function es(t){Xr!==null&&Xr.tag===0&&!(Ee&6)&&eo();var e=Ee;Ee|=1;var n=mn.transition,r=Pe;try{if(mn.transition=null,Pe=1,t)return t()}finally{Pe=r,mn.transition=n,Ee=e,!(Ee&6)&&Ai()}}function mm(){Zt=Ws.current,je(Ws)}function Ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uC(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(Qp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vc();break;case 3:fo(),je(Gt),je(Ot),im();break;case 5:rm(r);break;case 4:fo();break;case 13:je(He);break;case 19:je(He);break;case 10:Zp(r.type._context);break;case 22:case 23:mm()}n=n.return}if(pt=t,nt=t=ai(t.current,null),It=Zt=e,ut=0,sl=null,dm=yh=Zi=0,Wt=ba=null,Bi!==null){for(e=0;e<Bi.length;e++)if(n=Bi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bi=null}return t}function LT(t,e){do{var n=nt;try{if(Jp(),Hu.current=Pc,Rc){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rc=!1}if(Ji=0,dt=lt=We=null,ka=!1,nl=0,hm.current=null,n===null||n.return===null){ut=1,sl=e,nt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=It,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=Ky(o);if(E!==null){E.flags&=-257,Qy(E,o,l,s,e),E.mode&1&&Gy(s,c,e),e=E,u=c;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){Gy(s,c,e),gm();break e}u=Error(z(426))}}else if(ze&&l.mode&1){var D=Ky(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Qy(D,o,l,s,e),Yp(po(u,l));break e}}s=u=po(u,l),ut!==4&&(ut=2),ba===null?ba=[s]:ba.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=_T(s,u,e);$y(s,S);break e;case 1:l=u;var v=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(si===null||!si.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=vT(s,l,e);$y(s,L);break e}}s=s.return}while(s!==null)}UT(n)}catch(B){e=B,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(!0)}function MT(){var t=xc.current;return xc.current=Pc,t===null?Pc:t}function gm(){(ut===0||ut===3||ut===2)&&(ut=4),pt===null||!(Zi&268435455)&&!(yh&268435455)||Hr(pt,It)}function bc(t,e){var n=Ee;Ee|=2;var r=MT();(pt!==t||It!==e)&&(lr=null,Ki(t,e));do try{OC();break}catch(i){LT(t,i)}while(!0);if(Jp(),Ee=n,xc.current=r,nt!==null)throw Error(z(261));return pt=null,It=0,ut}function OC(){for(;nt!==null;)VT(nt)}function LC(){for(;nt!==null&&!o1();)VT(nt)}function VT(t){var e=jT(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?UT(t):nt=e,hm.current=null}function UT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PC(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,nt=null;return}}else if(n=RC(n,e,Zt),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);ut===0&&(ut=5)}function Vi(t,e,n){var r=Pe,i=mn.transition;try{mn.transition=null,Pe=1,MC(t,e,n,r)}finally{mn.transition=i,Pe=r}return null}function MC(t,e,n,r){do eo();while(Xr!==null);if(Ee&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(g1(t,s),t===pt&&(nt=pt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eu||(Eu=!0,$T(fc,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=mn.transition,mn.transition=null;var o=Pe;Pe=1;var l=Ee;Ee|=4,hm.current=null,kC(t,n),bT(n,t),nC(Sf),mc=!!If,Sf=If=null,t.current=n,NC(n),a1(),Ee=l,Pe=o,mn.transition=s}else t.current=n;if(Eu&&(Eu=!1,Xr=t,Nc=i),s=t.pendingLanes,s===0&&(si=null),c1(n.stateNode),Qt(t,Je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(kc)throw kc=!1,t=Hf,Hf=null,t;return Nc&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===Wf?Da++:(Da=0,Wf=t):Da=0,Ai(),null}function eo(){if(Xr!==null){var t=_E(Nc),e=mn.transition,n=Pe;try{if(mn.transition=null,Pe=16>t?16:t,Xr===null)var r=!1;else{if(t=Xr,Xr=null,Nc=0,Ee&6)throw Error(z(331));var i=Ee;for(Ee|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(X=c;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:Na(8,d,s)}var p=d.child;if(p!==null)p.return=d,X=p;else for(;X!==null;){d=X;var m=d.sibling,E=d.return;if(xT(d),d===c){X=null;break}if(m!==null){m.return=E,X=m;break}X=E}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,X=S;break e}X=s.return}}var v=t.current;for(X=v;X!==null;){o=X;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,X=R;else e:for(o=v;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:gh(9,l)}}catch(B){Qe(l,l.return,B)}if(l===o){X=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,X=L;break e}X=l.return}}if(Ee=i,Ai(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(lh,t)}catch{}r=!0}return r}finally{Pe=n,mn.transition=e}}return!1}function l_(t,e,n){e=po(n,e),e=_T(t,e,1),t=ii(t,e,1),e=Ft(),t!==null&&(Cl(t,1,e),Qt(t,e))}function Qe(t,e,n){if(t.tag===3)l_(t,t,n);else for(;e!==null;){if(e.tag===3){l_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(si===null||!si.has(r))){t=po(n,t),t=vT(e,t,1),e=ii(e,t,1),t=Ft(),e!==null&&(Cl(e,1,t),Qt(e,t));break}}e=e.return}}function VC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ft(),t.pingedLanes|=t.suspendedLanes&n,pt===t&&(It&n)===n&&(ut===4||ut===3&&(It&130023424)===It&&500>Je()-fm?Ki(t,0):dm|=n),Qt(t,e)}function FT(t,e){e===0&&(t.mode&1?(e=hu,hu<<=1,!(hu&130023424)&&(hu=4194304)):e=1);var n=Ft();t=wr(t,e),t!==null&&(Cl(t,e,n),Qt(t,n))}function UC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),FT(t,n)}function FC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),FT(t,n)}var jT;jT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,CC(t,e,n);qt=!!(t.flags&131072)}else qt=!1,ze&&e.flags&1048576&&HE(e,Tc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qu(t,e),t=e.pendingProps;var i=uo(e,Ot.current);Zs(e,n),i=om(null,e,r,t,i,n);var s=am();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(s=!0,wc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tm(e),i.updater=mh,e.stateNode=i,i._reactInternals=e,Df(e,r,t,n),e=Mf(null,e,r,!0,s,n)):(e.tag=0,ze&&s&&Kp(e),Ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$C(r),t=In(r,t),i){case 0:e=Lf(null,e,r,t,n);break e;case 1:e=Jy(null,e,r,t,n);break e;case 11:e=Yy(null,e,r,t,n);break e;case 14:e=Xy(null,e,r,In(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),Lf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),Jy(t,e,r,i,n);case 3:e:{if(IT(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,YE(t,e),Ac(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=po(Error(z(423)),e),e=Zy(t,e,r,n,i);break e}else if(r!==i){i=po(Error(z(424)),e),e=Zy(t,e,r,n,i);break e}else for(tn=ri(e.stateNode.containerInfo.firstChild),nn=e,ze=!0,Cn=null,n=KE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),r===i){e=Er(t,e,n);break e}Ut(t,e,r,n)}e=e.child}return e;case 5:return XE(e),t===null&&kf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Af(r,i)?o=null:s!==null&&Af(r,s)&&(e.flags|=32),TT(t,e),Ut(t,e,o,n),e.child;case 6:return t===null&&kf(e),null;case 13:return ST(t,e,n);case 4:return nm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ho(e,null,r,n):Ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),Yy(t,e,r,i,n);case 7:return Ut(t,e,e.pendingProps,n),e.child;case 8:return Ut(t,e,e.pendingProps.children,n),e.child;case 12:return Ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(Ic,r._currentValue),r._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===i.children&&!Gt.current){e=Er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Nf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zs(e,n),i=gn(i),r=r(i),e.flags|=1,Ut(t,e,r,n),e.child;case 14:return r=e.type,i=In(r,e.pendingProps),i=In(r.type,i),Xy(t,e,r,i,n);case 15:return wT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),qu(t,e),e.tag=1,Kt(r)?(t=!0,wc(e)):t=!1,Zs(e,n),yT(e,r,i),Df(e,r,i,n),Mf(null,e,r,!0,t,n);case 19:return AT(t,e,n);case 22:return ET(t,e,n)}throw Error(z(156,e.tag))};function $T(t,e){return pE(t,e)}function jC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,e,n,r){return new jC(t,e,n,r)}function ym(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $C(t){if(typeof t=="function")return ym(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mp)return 11;if(t===Vp)return 14}return 2}function ai(t,e){var n=t.alternate;return n===null?(n=pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ym(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ls:return Qi(n.children,i,s,e);case Lp:o=8,i|=8;break;case nf:return t=pn(12,n,e,i|2),t.elementType=nf,t.lanes=s,t;case rf:return t=pn(13,n,e,i),t.elementType=rf,t.lanes=s,t;case sf:return t=pn(19,n,e,i),t.elementType=sf,t.lanes=s,t;case Xw:return _h(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qw:o=10;break e;case Yw:o=9;break e;case Mp:o=11;break e;case Vp:o=14;break e;case $r:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=pn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qi(t,e,n,r){return t=pn(7,t,r,e),t.lanes=n,t}function _h(t,e,n,r){return t=pn(22,t,r,e),t.elementType=Xw,t.lanes=n,t.stateNode={isHidden:!1},t}function Pd(t,e,n){return t=pn(6,t,null,e),t.lanes=n,t}function xd(t,e,n){return e=pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ud(0),this.expirationTimes=ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ud(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _m(t,e,n,r,i,s,o,l,u){return t=new BC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tm(s),t}function zC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function BT(t){if(!t)return gi;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Kt(n))return BE(t,n,e)}return e}function zT(t,e,n,r,i,s,o,l,u){return t=_m(n,r,!0,t,i,s,o,l,u),t.context=BT(null),n=t.current,r=Ft(),i=oi(n),s=pr(r,i),s.callback=e??null,ii(n,s,i),t.current.lanes=i,Cl(t,i,r),Qt(t,r),t}function vh(t,e,n,r){var i=e.current,s=Ft(),o=oi(i);return n=BT(n),e.context===null?e.context=n:e.pendingContext=n,e=pr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ii(i,e,o),t!==null&&(kn(t,i,o,s),zu(t,i,o)),o}function Dc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function u_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vm(t,e){u_(t,e),(t=t.alternate)&&u_(t,e)}function HC(){return null}var HT=typeof reportError=="function"?reportError:function(t){console.error(t)};function wm(t){this._internalRoot=t}wh.prototype.render=wm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));vh(t,e,null,null)};wh.prototype.unmount=wm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){vh(null,t,null,null)}),e[vr]=null}};function wh(t){this._internalRoot=t}wh.prototype.unstable_scheduleHydration=function(t){if(t){var e=EE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<zr.length&&e!==0&&e<zr[n].priority;n++);zr.splice(n,0,t),n===0&&IE(t)}};function Em(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function c_(){}function WC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Dc(o);s.call(c)}}var o=zT(e,r,t,0,null,!1,!1,"",c_);return t._reactRootContainer=o,t[vr]=o.current,Xa(t.nodeType===8?t.parentNode:t),es(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Dc(u);l.call(c)}}var u=_m(t,0,!1,null,null,!1,!1,"",c_);return t._reactRootContainer=u,t[vr]=u.current,Xa(t.nodeType===8?t.parentNode:t),es(function(){vh(e,u,n,r)}),u}function Th(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Dc(o);l.call(u)}}vh(e,o,t,i)}else o=WC(n,e,t,i,r);return Dc(o)}vE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(jp(e,n|1),Qt(e,Je()),!(Ee&6)&&(mo=Je()+500,Ai()))}break;case 13:es(function(){var r=wr(t,1);if(r!==null){var i=Ft();kn(r,t,1,i)}}),vm(t,1)}};$p=function(t){if(t.tag===13){var e=wr(t,134217728);if(e!==null){var n=Ft();kn(e,t,134217728,n)}vm(t,134217728)}};wE=function(t){if(t.tag===13){var e=oi(t),n=wr(t,e);if(n!==null){var r=Ft();kn(n,t,e,r)}vm(t,e)}};EE=function(){return Pe};TE=function(t,e){var n=Pe;try{return Pe=t,e()}finally{Pe=n}};mf=function(t,e,n){switch(e){case"input":if(lf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dh(r);if(!i)throw Error(z(90));Zw(r),lf(r,i)}}}break;case"textarea":tE(t,n);break;case"select":e=n.value,e!=null&&Qs(t,!!n.multiple,e,!1)}};lE=pm;uE=es;var qC={usingClientEntryPoint:!1,Events:[Pl,Fs,dh,oE,aE,pm]},ua={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GC={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dE(t),t===null?null:t.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||HC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tu.isDisabled&&Tu.supportsFiber)try{lh=Tu.inject(GC),qn=Tu}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qC;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Em(e))throw Error(z(200));return zC(t,e,null,n)};on.createRoot=function(t,e){if(!Em(t))throw Error(z(299));var n=!1,r="",i=HT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_m(t,1,!1,null,null,n,!1,r,i),t[vr]=e.current,Xa(t.nodeType===8?t.parentNode:t),new wm(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=dE(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return es(t)};on.hydrate=function(t,e,n){if(!Eh(e))throw Error(z(200));return Th(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!Em(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=HT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zT(e,null,t,1,n??null,i,!1,s,o),t[vr]=e.current,Xa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wh(e)};on.render=function(t,e,n){if(!Eh(e))throw Error(z(200));return Th(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!Eh(t))throw Error(z(40));return t._reactRootContainer?(es(function(){Th(null,null,t,!1,function(){t._reactRootContainer=null,t[vr]=null})}),!0):!1};on.unstable_batchedUpdates=pm;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Eh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Th(t,e,n,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function WT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(WT)}catch(t){console.error(t)}}WT(),Ww.exports=on;var Tm=Ww.exports;const KC=bw(Tm),QC=Nw({__proto__:null,default:KC},[Tm]);var qT,h_=Tm;qT=h_.createRoot,h_.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Be(){return Be=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Be.apply(this,arguments)}var tt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tt||(tt={}));const d_="popstate";function YC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ol("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ts(i)}return JC(e,n,null,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function go(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XC(){return Math.random().toString(36).substr(2,8)}function f_(t,e){return{usr:t.state,key:t.key,idx:e}}function ol(t,e,n,r){return n===void 0&&(n=null),Be({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ci(e):e,{state:n,key:e&&e.key||r||XC()})}function ts(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ci(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function JC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Be({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=tt.Pop;let D=d(),S=D==null?null:D-c;c=D,u&&u({action:l,location:P.location,delta:S})}function m(D,S){l=tt.Push;let v=ol(P.location,D,S);c=d()+1;let R=f_(v,c),L=P.createHref(v);try{o.pushState(R,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;i.location.assign(L)}s&&u&&u({action:l,location:P.location,delta:1})}function E(D,S){l=tt.Replace;let v=ol(P.location,D,S);c=d();let R=f_(v,c),L=P.createHref(v);o.replaceState(R,"",L),s&&u&&u({action:l,location:P.location,delta:0})}function C(D){let S=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof D=="string"?D:ts(D);return v=v.replace(/ $/,"%20"),de(S,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,S)}let P={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(d_,p),u=D,()=>{i.removeEventListener(d_,p),u=null}},createHref(D){return e(i,D)},createURL:C,encodeLocation(D){let S=C(D);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:E,go(D){return o.go(D)}};return P}var Re;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Re||(Re={}));const ZC=new Set(["lazy","caseSensitive","path","id","index","children"]);function eR(t){return t.index===!0}function Oc(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(de(i.index!==!0||!i.children,"Cannot specify children on an index route"),de(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),eR(i)){let u=Be({},i,e(i),{id:l});return r[l]=u,u}else{let u=Be({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=Oc(i.children,e,o,r)),u}})}function Fi(t,e,n){return n===void 0&&(n="/"),Yu(t,e,n,!1)}function Yu(t,e,n,r){let i=typeof e=="string"?Ci(e):e,s=Tr(i.pathname||"/",n);if(s==null)return null;let o=GT(t);nR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=fR(s);l=hR(o[u],c,r)}return l}function tR(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function GT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(de(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=mr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),GT(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:uR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of KT(s.path))i(s,o,u)}),e}function KT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=KT(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function nR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const rR=/^:[\w-]+$/,iR=3,sR=2,oR=1,aR=10,lR=-2,p_=t=>t==="*";function uR(t,e){let n=t.split("/"),r=n.length;return n.some(p_)&&(r+=lR),e&&(r+=sR),n.filter(i=>!p_(i)).reduce((i,s)=>i+(rR.test(s)?iR:s===""?oR:aR),r)}function cR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function hR(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Lc({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Lc({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:mr([s,p.pathname]),pathnameBase:gR(mr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=mr([s,p.pathnameBase]))}return o}function Lc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=dR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const C=l[p];return E&&!C?c[m]=void 0:c[m]=(C||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function dR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),go(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function fR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return go(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Tr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function pR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ci(t):t;return{pathname:n?n.startsWith("/")?n:mR(n,e):e,search:yR(r),hash:_R(i)}}function mR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ih(t,e){let n=QT(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Sh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ci(t):(i=Be({},t),de(!i.pathname||!i.pathname.includes("?"),kd("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),kd("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),kd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=pR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),gR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_R=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Mc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function al(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const YT=["post","put","patch","delete"],vR=new Set(YT),wR=["get",...YT],ER=new Set(wR),TR=new Set([301,302,303,307,308]),IR=new Set([307,308]),Nd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},SR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ca={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Im=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AR=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),XT="remix-router-transitions";function CR(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;de(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=b=>({hasErrorBoundary:x(b)})}else i=AR;let s={},o=Oc(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.dataStrategy||kR,d=t.patchRoutesOnNavigation,p=Be({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),m=null,E=new Set,C=null,P=null,D=null,S=t.hydrationData!=null,v=Fi(o,t.history.location,u),R=!1,L=null;if(v==null&&!d){let x=zt(404,{pathname:t.history.location.pathname}),{matches:b,route:M}=A_(o);v=b,L={[M.id]:x}}v&&!t.hydrationData&&Di(v,o,t.history.location.pathname).active&&(v=null);let B;if(v)if(v.some(x=>x.route.lazy))B=!1;else if(!v.some(x=>x.route.loader))B=!0;else if(p.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,b=t.hydrationData?t.hydrationData.errors:null;if(b){let M=v.findIndex($=>b[$.route.id]!==void 0);B=v.slice(0,M+1).every($=>!Qf($.route,x,b))}else B=v.every(M=>!Qf(M.route,x,b))}else B=t.hydrationData!=null;else if(B=!1,v=[],p.v7_partialHydration){let x=Di(null,o,t.history.location.pathname);x.active&&x.matches&&(R=!0,v=x.matches)}let H,g={historyAction:t.history.action,location:t.history.location,matches:v,initialized:B,navigation:Nd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||L,fetchers:new Map,blockers:new Map},y=tt.Pop,T=!1,I,k=!1,N=new Map,A=null,Ne=!1,mt=!1,On=[],Bt=new Set,W=new Map,re=0,ae=-1,Ae=new Map,fe=new Set,xe=new Map,Mt=new Map,Ye=new Set,gt=new Map,yt=new Map,gs;function Kh(){if(m=t.history.listen(x=>{let{action:b,location:M,delta:$}=x;if(gs){gs(),gs=void 0;return}go(yt.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=qo({currentLocation:g.location,nextLocation:M,historyAction:b});if(G&&$!=null){let ee=new Promise(oe=>{gs=oe});t.history.go($*-1),ki(G,{state:"blocked",location:M,proceed(){ki(G,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),ee.then(()=>t.history.go($))},reset(){let oe=new Map(g.blockers);oe.set(G,ca),st({blockers:oe})}});return}return Mn(b,M)}),n){HR(e,N);let x=()=>WR(e,N);e.addEventListener("pagehide",x),A=()=>e.removeEventListener("pagehide",x)}return g.initialized||Mn(tt.Pop,g.location,{initialHydration:!0}),H}function ys(){m&&m(),A&&A(),E.clear(),I&&I.abort(),g.fetchers.forEach((x,b)=>ws(b)),g.blockers.forEach((x,b)=>Ts(b))}function _s(x){return E.add(x),()=>E.delete(x)}function st(x,b){b===void 0&&(b={}),g=Be({},g,x);let M=[],$=[];p.v7_fetcherPersist&&g.fetchers.forEach((G,ee)=>{G.state==="idle"&&(Ye.has(ee)?$.push(ee):M.push(ee))}),Ye.forEach(G=>{!g.fetchers.has(G)&&!W.has(G)&&$.push(G)}),[...E].forEach(G=>G(g,{deletedFetchers:$,viewTransitionOpts:b.viewTransitionOpts,flushSync:b.flushSync===!0})),p.v7_fetcherPersist?(M.forEach(G=>g.fetchers.delete(G)),$.forEach(G=>ws(G))):$.forEach(G=>Ye.delete(G))}function Ln(x,b,M){var $,G;let{flushSync:ee}=M===void 0?{}:M,oe=g.actionData!=null&&g.navigation.formMethod!=null&&An(g.navigation.formMethod)&&g.navigation.state==="loading"&&(($=x.state)==null?void 0:$._isRedirect)!==!0,Z;b.actionData?Object.keys(b.actionData).length>0?Z=b.actionData:Z=null:oe?Z=g.actionData:Z=null;let J=b.loaderData?I_(g.loaderData,b.loaderData,b.matches||[],b.errors):g.loaderData,Y=g.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((he,Ze)=>Y.set(Ze,ca)));let te=T===!0||g.navigation.formMethod!=null&&An(g.navigation.formMethod)&&((G=x.state)==null?void 0:G._isRedirect)!==!0;l&&(o=l,l=void 0),Ne||y===tt.Pop||(y===tt.Push?t.history.push(x,x.state):y===tt.Replace&&t.history.replace(x,x.state));let le;if(y===tt.Pop){let he=N.get(g.location.pathname);he&&he.has(x.pathname)?le={currentLocation:g.location,nextLocation:x}:N.has(x.pathname)&&(le={currentLocation:x,nextLocation:g.location})}else if(k){let he=N.get(g.location.pathname);he?he.add(x.pathname):(he=new Set([x.pathname]),N.set(g.location.pathname,he)),le={currentLocation:g.location,nextLocation:x}}st(Be({},b,{actionData:Z,loaderData:J,historyAction:y,location:x,initialized:!0,navigation:Nd,revalidation:"idle",restoreScrollPosition:bi(x,b.matches||g.matches),preventScrollReset:te,blockers:Y}),{viewTransitionOpts:le,flushSync:ee===!0}),y=tt.Pop,T=!1,k=!1,Ne=!1,mt=!1,On=[]}async function vs(x,b){if(typeof x=="number"){t.history.go(x);return}let M=Kf(g.location,g.matches,u,p.v7_prependBasename,x,p.v7_relativeSplatPath,b==null?void 0:b.fromRouteId,b==null?void 0:b.relative),{path:$,submission:G,error:ee}=m_(p.v7_normalizeFormMethod,!1,M,b),oe=g.location,Z=ol(g.location,$,b&&b.state);Z=Be({},Z,t.history.encodeLocation(Z));let J=b&&b.replace!=null?b.replace:void 0,Y=tt.Push;J===!0?Y=tt.Replace:J===!1||G!=null&&An(G.formMethod)&&G.formAction===g.location.pathname+g.location.search&&(Y=tt.Replace);let te=b&&"preventScrollReset"in b?b.preventScrollReset===!0:void 0,le=(b&&b.flushSync)===!0,he=qo({currentLocation:oe,nextLocation:Z,historyAction:Y});if(he){ki(he,{state:"blocked",location:Z,proceed(){ki(he,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),vs(x,b)},reset(){let Ze=new Map(g.blockers);Ze.set(he,ca),st({blockers:Ze})}});return}return await Mn(Y,Z,{submission:G,pendingError:ee,preventScrollReset:te,replace:b&&b.replace,enableViewTransition:b&&b.viewTransition,flushSync:le})}function jo(){if(at(),st({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Mn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Mn(y||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:k===!0})}}async function Mn(x,b,M){I&&I.abort(),I=null,y=x,Ne=(M&&M.startUninterruptedRevalidation)===!0,ql(g.location,g.matches),T=(M&&M.preventScrollReset)===!0,k=(M&&M.enableViewTransition)===!0;let $=l||o,G=M&&M.overrideNavigation,ee=M!=null&&M.initialHydration&&g.matches&&g.matches.length>0&&!R?g.matches:Fi($,b,u),oe=(M&&M.flushSync)===!0;if(ee&&g.initialized&&!mt&&MR(g.location,b)&&!(M&&M.submission&&An(M.submission.formMethod))){Ln(b,{matches:ee},{flushSync:oe});return}let Z=Di(ee,$,b.pathname);if(Z.active&&Z.matches&&(ee=Z.matches),!ee){let{error:Ce,notFoundMatches:_e,route:Oe}=nr(b.pathname);Ln(b,{matches:_e,loaderData:{},errors:{[Oe.id]:Ce}},{flushSync:oe});return}I=new AbortController;let J=Ps(t.history,b,I.signal,M&&M.submission),Y;if(M&&M.pendingError)Y=[ji(ee).route.id,{type:Re.error,error:M.pendingError}];else if(M&&M.submission&&An(M.submission.formMethod)){let Ce=await Qh(J,b,M.submission,ee,Z.active,{replace:M.replace,flushSync:oe});if(Ce.shortCircuited)return;if(Ce.pendingActionResult){let[_e,Oe]=Ce.pendingActionResult;if(en(Oe)&&al(Oe.error)&&Oe.error.status===404){I=null,Ln(b,{matches:Ce.matches,loaderData:{},errors:{[_e]:Oe.error}});return}}ee=Ce.matches||ee,Y=Ce.pendingActionResult,G=bd(b,M.submission),oe=!1,Z.active=!1,J=Ps(t.history,J.url,J.signal)}let{shortCircuited:te,matches:le,loaderData:he,errors:Ze}=await Yh(J,b,ee,Z.active,G,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,oe,Y);te||(I=null,Ln(b,Be({matches:le||ee},S_(Y),{loaderData:he,errors:Ze})))}async function Qh(x,b,M,$,G,ee){ee===void 0&&(ee={}),at();let oe=BR(b,M);if(st({navigation:oe},{flushSync:ee.flushSync===!0}),G){let Y=await Un($,b.pathname,x.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){let te=ji(Y.partialMatches).route.id;return{matches:Y.partialMatches,pendingActionResult:[te,{type:Re.error,error:Y.error}]}}else if(Y.matches)$=Y.matches;else{let{notFoundMatches:te,error:le,route:he}=nr(b.pathname);return{matches:te,pendingActionResult:[he.id,{type:Re.error,error:le}]}}}let Z,J=_a($,b);if(!J.route.action&&!J.route.lazy)Z={type:Re.error,error:zt(405,{method:x.method,pathname:b.pathname,routeId:J.route.id})};else if(Z=(await Nr("action",g,x,[J],$,null))[J.route.id],x.signal.aborted)return{shortCircuited:!0};if(Hi(Z)){let Y;return ee&&ee.replace!=null?Y=ee.replace:Y=w_(Z.response.headers.get("Location"),new URL(x.url),u)===g.location.pathname+g.location.search,await _n(x,Z,!0,{submission:M,replace:Y}),{shortCircuited:!0}}if(Jr(Z))throw zt(400,{type:"defer-action"});if(en(Z)){let Y=ji($,J.route.id);return(ee&&ee.replace)!==!0&&(y=tt.Push),{matches:$,pendingActionResult:[Y.route.id,Z]}}return{matches:$,pendingActionResult:[J.route.id,Z]}}async function Yh(x,b,M,$,G,ee,oe,Z,J,Y,te){let le=G||bd(b,ee),he=ee||oe||R_(le),Ze=!Ne&&(!p.v7_partialHydration||!J);if($){if(Ze){let Ve=$o(te);st(Be({navigation:le},Ve!==void 0?{actionData:Ve}:{}),{flushSync:Y})}let ve=await Un(M,b.pathname,x.signal);if(ve.type==="aborted")return{shortCircuited:!0};if(ve.type==="error"){let Ve=ji(ve.partialMatches).route.id;return{matches:ve.partialMatches,loaderData:{},errors:{[Ve]:ve.error}}}else if(ve.matches)M=ve.matches;else{let{error:Ve,notFoundMatches:sr,route:Or}=nr(b.pathname);return{matches:sr,loaderData:{},errors:{[Or.id]:Ve}}}}let Ce=l||o,[_e,Oe]=y_(t.history,g,M,he,b,p.v7_partialHydration&&J===!0,p.v7_skipActionErrorRevalidation,mt,On,Bt,Ye,xe,fe,Ce,u,te);if(Ni(ve=>!(M&&M.some(Ve=>Ve.route.id===ve))||_e&&_e.some(Ve=>Ve.route.id===ve)),ae=++re,_e.length===0&&Oe.length===0){let ve=Es();return Ln(b,Be({matches:M,loaderData:{},errors:te&&en(te[1])?{[te[0]]:te[1].error}:null},S_(te),ve?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(Ze){let ve={};if(!$){ve.navigation=le;let Ve=$o(te);Ve!==void 0&&(ve.actionData=Ve)}Oe.length>0&&(ve.fetchers=Bo(Oe)),st(ve,{flushSync:Y})}Oe.forEach(ve=>{vn(ve.key),ve.controller&&W.set(ve.key,ve.controller)});let rr=()=>Oe.forEach(ve=>vn(ve.key));I&&I.signal.addEventListener("abort",rr);let{loaderResults:br,fetcherResults:wn}=await ot(g,M,_e,Oe,x);if(x.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",rr),Oe.forEach(ve=>W.delete(ve.key));let Vt=Iu(br);if(Vt)return await _n(x,Vt.result,!0,{replace:Z}),{shortCircuited:!0};if(Vt=Iu(wn),Vt)return fe.add(Vt.key),await _n(x,Vt.result,!0,{replace:Z}),{shortCircuited:!0};let{loaderData:Is,errors:ir}=T_(g,M,br,te,Oe,wn,gt);gt.forEach((ve,Ve)=>{ve.subscribe(sr=>{(sr||ve.done)&&gt.delete(Ve)})}),p.v7_partialHydration&&J&&g.errors&&(ir=Be({},g.errors,ir));let Xt=Es(),un=Wl(ae),Dr=Xt||un||Oe.length>0;return Be({matches:M,loaderData:Is,errors:ir},Dr?{fetchers:new Map(g.fetchers)}:{})}function $o(x){if(x&&!en(x[1]))return{[x[0]]:x[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function Bo(x){return x.forEach(b=>{let M=g.fetchers.get(b.key),$=ha(void 0,M?M.data:void 0);g.fetchers.set(b.key,$)}),new Map(g.fetchers)}function Hl(x,b,M,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");vn(x);let G=($&&$.flushSync)===!0,ee=l||o,oe=Kf(g.location,g.matches,u,p.v7_prependBasename,M,p.v7_relativeSplatPath,b,$==null?void 0:$.relative),Z=Fi(ee,oe,u),J=Di(Z,ee,oe);if(J.active&&J.matches&&(Z=J.matches),!Z){ln(x,b,zt(404,{pathname:oe}),{flushSync:G});return}let{path:Y,submission:te,error:le}=m_(p.v7_normalizeFormMethod,!0,oe,$);if(le){ln(x,b,le,{flushSync:G});return}let he=_a(Z,Y),Ze=($&&$.preventScrollReset)===!0;if(te&&An(te.formMethod)){Xh(x,b,Y,he,Z,J.active,G,Ze,te);return}xe.set(x,{routeId:b,path:Y}),zo(x,b,Y,he,Z,J.active,G,Ze,te)}async function Xh(x,b,M,$,G,ee,oe,Z,J){at(),xe.delete(x);function Y($e){if(!$e.route.action&&!$e.route.lazy){let Fn=zt(405,{method:J.formMethod,pathname:M,routeId:b});return ln(x,b,Fn,{flushSync:oe}),!0}return!1}if(!ee&&Y($))return;let te=g.fetchers.get(x);Yt(x,zR(J,te),{flushSync:oe});let le=new AbortController,he=Ps(t.history,M,le.signal,J);if(ee){let $e=await Un(G,new URL(he.url).pathname,he.signal,x);if($e.type==="aborted")return;if($e.type==="error"){ln(x,b,$e.error,{flushSync:oe});return}else if($e.matches){if(G=$e.matches,$=_a(G,M),Y($))return}else{ln(x,b,zt(404,{pathname:M}),{flushSync:oe});return}}W.set(x,le);let Ze=re,_e=(await Nr("action",g,he,[$],G,x))[$.route.id];if(he.signal.aborted){W.get(x)===le&&W.delete(x);return}if(p.v7_fetcherPersist&&Ye.has(x)){if(Hi(_e)||en(_e)){Yt(x,jr(void 0));return}}else{if(Hi(_e))if(W.delete(x),ae>Ze){Yt(x,jr(void 0));return}else return fe.add(x),Yt(x,ha(J)),_n(he,_e,!1,{fetcherSubmission:J,preventScrollReset:Z});if(en(_e)){ln(x,b,_e.error);return}}if(Jr(_e))throw zt(400,{type:"defer-action"});let Oe=g.navigation.location||g.location,rr=Ps(t.history,Oe,le.signal),br=l||o,wn=g.navigation.state!=="idle"?Fi(br,g.navigation.location,u):g.matches;de(wn,"Didn't find any matches after fetcher action");let Vt=++re;Ae.set(x,Vt);let Is=ha(J,_e.data);g.fetchers.set(x,Is);let[ir,Xt]=y_(t.history,g,wn,J,Oe,!1,p.v7_skipActionErrorRevalidation,mt,On,Bt,Ye,xe,fe,br,u,[$.route.id,_e]);Xt.filter($e=>$e.key!==x).forEach($e=>{let Fn=$e.key,Ko=g.fetchers.get(Fn),Kl=ha(void 0,Ko?Ko.data:void 0);g.fetchers.set(Fn,Kl),vn(Fn),$e.controller&&W.set(Fn,$e.controller)}),st({fetchers:new Map(g.fetchers)});let un=()=>Xt.forEach($e=>vn($e.key));le.signal.addEventListener("abort",un);let{loaderResults:Dr,fetcherResults:ve}=await ot(g,wn,ir,Xt,rr);if(le.signal.aborted)return;le.signal.removeEventListener("abort",un),Ae.delete(x),W.delete(x),Xt.forEach($e=>W.delete($e.key));let Ve=Iu(Dr);if(Ve)return _n(rr,Ve.result,!1,{preventScrollReset:Z});if(Ve=Iu(ve),Ve)return fe.add(Ve.key),_n(rr,Ve.result,!1,{preventScrollReset:Z});let{loaderData:sr,errors:Or}=T_(g,wn,Dr,void 0,Xt,ve,gt);if(g.fetchers.has(x)){let $e=jr(_e.data);g.fetchers.set(x,$e)}Wl(Vt),g.navigation.state==="loading"&&Vt>ae?(de(y,"Expected pending action"),I&&I.abort(),Ln(g.navigation.location,{matches:wn,loaderData:sr,errors:Or,fetchers:new Map(g.fetchers)})):(st({errors:Or,loaderData:I_(g.loaderData,sr,wn,Or),fetchers:new Map(g.fetchers)}),mt=!1)}async function zo(x,b,M,$,G,ee,oe,Z,J){let Y=g.fetchers.get(x);Yt(x,ha(J,Y?Y.data:void 0),{flushSync:oe});let te=new AbortController,le=Ps(t.history,M,te.signal);if(ee){let _e=await Un(G,new URL(le.url).pathname,le.signal,x);if(_e.type==="aborted")return;if(_e.type==="error"){ln(x,b,_e.error,{flushSync:oe});return}else if(_e.matches)G=_e.matches,$=_a(G,M);else{ln(x,b,zt(404,{pathname:M}),{flushSync:oe});return}}W.set(x,te);let he=re,Ce=(await Nr("loader",g,le,[$],G,x))[$.route.id];if(Jr(Ce)&&(Ce=await Sm(Ce,le.signal,!0)||Ce),W.get(x)===te&&W.delete(x),!le.signal.aborted){if(Ye.has(x)){Yt(x,jr(void 0));return}if(Hi(Ce))if(ae>he){Yt(x,jr(void 0));return}else{fe.add(x),await _n(le,Ce,!1,{preventScrollReset:Z});return}if(en(Ce)){ln(x,b,Ce.error);return}de(!Jr(Ce),"Unhandled fetcher deferred data"),Yt(x,jr(Ce.data))}}async function _n(x,b,M,$){let{submission:G,fetcherSubmission:ee,preventScrollReset:oe,replace:Z}=$===void 0?{}:$;b.response.headers.has("X-Remix-Revalidate")&&(mt=!0);let J=b.response.headers.get("Location");de(J,"Expected a Location header on the redirect Response"),J=w_(J,new URL(x.url),u);let Y=ol(g.location,J,{_isRedirect:!0});if(n){let _e=!1;if(b.response.headers.has("X-Remix-Reload-Document"))_e=!0;else if(Im.test(J)){const Oe=t.history.createURL(J);_e=Oe.origin!==e.location.origin||Tr(Oe.pathname,u)==null}if(_e){Z?e.location.replace(J):e.location.assign(J);return}}I=null;let te=Z===!0||b.response.headers.has("X-Remix-Replace")?tt.Replace:tt.Push,{formMethod:le,formAction:he,formEncType:Ze}=g.navigation;!G&&!ee&&le&&he&&Ze&&(G=R_(g.navigation));let Ce=G||ee;if(IR.has(b.response.status)&&Ce&&An(Ce.formMethod))await Mn(te,Y,{submission:Be({},Ce,{formAction:J}),preventScrollReset:oe||T,enableViewTransition:M?k:void 0});else{let _e=bd(Y,G);await Mn(te,Y,{overrideNavigation:_e,fetcherSubmission:ee,preventScrollReset:oe||T,enableViewTransition:M?k:void 0})}}async function Nr(x,b,M,$,G,ee){let oe,Z={};try{oe=await NR(c,x,b,M,$,G,ee,s,i)}catch(J){return $.forEach(Y=>{Z[Y.route.id]={type:Re.error,error:J}}),Z}for(let[J,Y]of Object.entries(oe))if(VR(Y)){let te=Y.result;Z[J]={type:Re.redirect,response:OR(te,M,J,G,u,p.v7_relativeSplatPath)}}else Z[J]=await DR(Y);return Z}async function ot(x,b,M,$,G){let ee=x.matches,oe=Nr("loader",x,G,M,b,null),Z=Promise.all($.map(async te=>{if(te.matches&&te.match&&te.controller){let he=(await Nr("loader",x,Ps(t.history,te.path,te.controller.signal),[te.match],te.matches,te.key))[te.match.route.id];return{[te.key]:he}}else return Promise.resolve({[te.key]:{type:Re.error,error:zt(404,{pathname:te.path})}})})),J=await oe,Y=(await Z).reduce((te,le)=>Object.assign(te,le),{});return await Promise.all([jR(b,J,G.signal,ee,x.loaderData),$R(b,Y,$)]),{loaderResults:J,fetcherResults:Y}}function at(){mt=!0,On.push(...Ni()),xe.forEach((x,b)=>{W.has(b)&&Bt.add(b),vn(b)})}function Yt(x,b,M){M===void 0&&(M={}),g.fetchers.set(x,b),st({fetchers:new Map(g.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function ln(x,b,M,$){$===void 0&&($={});let G=ji(g.matches,b);ws(x),st({errors:{[G.route.id]:M},fetchers:new Map(g.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Ho(x){return Mt.set(x,(Mt.get(x)||0)+1),Ye.has(x)&&Ye.delete(x),g.fetchers.get(x)||SR}function ws(x){let b=g.fetchers.get(x);W.has(x)&&!(b&&b.state==="loading"&&Ae.has(x))&&vn(x),xe.delete(x),Ae.delete(x),fe.delete(x),p.v7_fetcherPersist&&Ye.delete(x),Bt.delete(x),g.fetchers.delete(x)}function xi(x){let b=(Mt.get(x)||0)-1;b<=0?(Mt.delete(x),Ye.add(x),p.v7_fetcherPersist||ws(x)):Mt.set(x,b),st({fetchers:new Map(g.fetchers)})}function vn(x){let b=W.get(x);b&&(b.abort(),W.delete(x))}function Wo(x){for(let b of x){let M=Ho(b),$=jr(M.data);g.fetchers.set(b,$)}}function Es(){let x=[],b=!1;for(let M of fe){let $=g.fetchers.get(M);de($,"Expected fetcher: "+M),$.state==="loading"&&(fe.delete(M),x.push(M),b=!0)}return Wo(x),b}function Wl(x){let b=[];for(let[M,$]of Ae)if($<x){let G=g.fetchers.get(M);de(G,"Expected fetcher: "+M),G.state==="loading"&&(vn(M),Ae.delete(M),b.push(M))}return Wo(b),b.length>0}function Jh(x,b){let M=g.blockers.get(x)||ca;return yt.get(x)!==b&&yt.set(x,b),M}function Ts(x){g.blockers.delete(x),yt.delete(x)}function ki(x,b){let M=g.blockers.get(x)||ca;de(M.state==="unblocked"&&b.state==="blocked"||M.state==="blocked"&&b.state==="blocked"||M.state==="blocked"&&b.state==="proceeding"||M.state==="blocked"&&b.state==="unblocked"||M.state==="proceeding"&&b.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+b.state);let $=new Map(g.blockers);$.set(x,b),st({blockers:$})}function qo(x){let{currentLocation:b,nextLocation:M,historyAction:$}=x;if(yt.size===0)return;yt.size>1&&go(!1,"A router only supports one blocker at a time");let G=Array.from(yt.entries()),[ee,oe]=G[G.length-1],Z=g.blockers.get(ee);if(!(Z&&Z.state==="proceeding")&&oe({currentLocation:b,nextLocation:M,historyAction:$}))return ee}function nr(x){let b=zt(404,{pathname:x}),M=l||o,{matches:$,route:G}=A_(M);return Ni(),{notFoundMatches:$,route:G,error:b}}function Ni(x){let b=[];return gt.forEach((M,$)=>{(!x||x($))&&(M.cancel(),b.push($),gt.delete($))}),b}function Go(x,b,M){if(C=x,D=b,P=M||null,!S&&g.navigation===Nd){S=!0;let $=bi(g.location,g.matches);$!=null&&st({restoreScrollPosition:$})}return()=>{C=null,D=null,P=null}}function Vn(x,b){return P&&P(x,b.map($=>tR($,g.loaderData)))||x.key}function ql(x,b){if(C&&D){let M=Vn(x,b);C[M]=D()}}function bi(x,b){if(C){let M=Vn(x,b),$=C[M];if(typeof $=="number")return $}return null}function Di(x,b,M){if(d)if(x){if(Object.keys(x[0].params).length>0)return{active:!0,matches:Yu(b,M,u,!0)}}else return{active:!0,matches:Yu(b,M,u,!0)||[]};return{active:!1,matches:null}}async function Un(x,b,M,$){if(!d)return{type:"success",matches:x};let G=x;for(;;){let ee=l==null,oe=l||o,Z=s;try{await d({signal:M,path:b,matches:G,fetcherKey:$,patch:(te,le)=>{M.aborted||v_(te,le,oe,Z,i)}})}catch(te){return{type:"error",error:te,partialMatches:G}}finally{ee&&!M.aborted&&(o=[...o])}if(M.aborted)return{type:"aborted"};let J=Fi(oe,b,u);if(J)return{type:"success",matches:J};let Y=Yu(oe,b,u,!0);if(!Y||G.length===Y.length&&G.every((te,le)=>te.route.id===Y[le].route.id))return{type:"success",matches:null};G=Y}}function Gl(x){s={},l=Oc(x,i,void 0,s)}function _t(x,b){let M=l==null;v_(x,b,l||o,s,i),M&&(o=[...o],st({}))}return H={get basename(){return u},get future(){return p},get state(){return g},get routes(){return o},get window(){return e},initialize:Kh,subscribe:_s,enableScrollRestoration:Go,navigate:vs,fetch:Hl,revalidate:jo,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Ho,deleteFetcher:xi,dispose:ys,getBlocker:Jh,deleteBlocker:Ts,patchRoutes:_t,_internalFetchControllers:W,_internalActiveDeferreds:gt,_internalSetRoutes:Gl},H}function RR(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Kf(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let p of e)if(u.push(p),p.route.id===o){c=p;break}}else u=e,c=e[e.length-1];let d=Sh(i||".",Ih(u,s),Tr(t.pathname,n)||t.pathname,l==="path");if(i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c){let p=Am(d.search);if(c.route.index&&!p)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&p){let m=new URLSearchParams(d.search),E=m.getAll("index");m.delete("index"),E.filter(P=>P).forEach(P=>m.append("index",P));let C=m.toString();d.search=C?"?"+C:""}}return r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:mr([n,d.pathname])),ts(d)}function m_(t,e,n,r){if(!r||!RR(r))return{path:n};if(r.formMethod&&!FR(r.formMethod))return{path:n,error:zt(405,{method:r.formMethod})};let i=()=>({path:n,error:zt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=eI(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!An(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,C)=>{let[P,D]=C;return""+E+P+"="+D+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!An(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}de(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Yf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Yf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=E_(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=E_(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(An(d.formMethod))return{path:n,submission:d};let p=Ci(n);return e&&p.search&&Am(p.search)&&u.append("index",""),p.search="?"+u,{path:ts(p),submission:d}}function g_(t,e,n){n===void 0&&(n=!1);let r=t.findIndex(i=>i.route.id===e);return r>=0?t.slice(0,n?r+1:r):t}function y_(t,e,n,r,i,s,o,l,u,c,d,p,m,E,C,P){let D=P?en(P[1])?P[1].error:P[1].data:void 0,S=t.createURL(e.location),v=t.createURL(i),R=n;s&&e.errors?R=g_(n,Object.keys(e.errors)[0],!0):P&&en(P[1])&&(R=g_(n,P[0]));let L=P?P[1].statusCode:void 0,B=o&&L&&L>=400,H=R.filter((y,T)=>{let{route:I}=y;if(I.lazy)return!0;if(I.loader==null)return!1;if(s)return Qf(I,e.loaderData,e.errors);if(PR(e.loaderData,e.matches[T],y)||u.some(A=>A===y.route.id))return!0;let k=e.matches[T],N=y;return __(y,Be({currentUrl:S,currentParams:k.params,nextUrl:v,nextParams:N.params},r,{actionResult:D,actionStatus:L,defaultShouldRevalidate:B?!1:l||S.pathname+S.search===v.pathname+v.search||S.search!==v.search||JT(k,N)}))}),g=[];return p.forEach((y,T)=>{if(s||!n.some(Ne=>Ne.route.id===y.routeId)||d.has(T))return;let I=Fi(E,y.path,C);if(!I){g.push({key:T,routeId:y.routeId,path:y.path,matches:null,match:null,controller:null});return}let k=e.fetchers.get(T),N=_a(I,y.path),A=!1;m.has(T)?A=!1:c.has(T)?(c.delete(T),A=!0):k&&k.state!=="idle"&&k.data===void 0?A=l:A=__(N,Be({currentUrl:S,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:D,actionStatus:L,defaultShouldRevalidate:B?!1:l})),A&&g.push({key:T,routeId:y.routeId,path:y.path,matches:I,match:N,controller:new AbortController})}),[H,g]}function Qf(t,e,n){if(t.lazy)return!0;if(!t.loader)return!1;let r=e!=null&&e[t.id]!==void 0,i=n!=null&&n[t.id]!==void 0;return!r&&i?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!r&&!i}function PR(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function JT(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function __(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function v_(t,e,n,r,i){var s;let o;if(t){let c=r[t];de(c,"No route found to patch children into: routeId = "+t),c.children||(c.children=[]),o=c.children}else o=n;let l=e.filter(c=>!o.some(d=>ZT(c,d))),u=Oc(l,i,[t||"_","patch",String(((s=o)==null?void 0:s.length)||"0")],r);o.push(...u)}function ZT(t,e){return"id"in t&&"id"in e&&t.id===e.id?!0:t.index===e.index&&t.path===e.path&&t.caseSensitive===e.caseSensitive?(!t.children||t.children.length===0)&&(!e.children||e.children.length===0)?!0:t.children.every((n,r)=>{var i;return(i=e.children)==null?void 0:i.some(s=>ZT(n,s))}):!1}async function xR(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];de(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";go(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!ZC.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Be({},e(i),{lazy:void 0}))}async function kR(t){let{matches:e}=t,n=e.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,s,o)=>Object.assign(i,{[n[o].route.id]:s}),{})}async function NR(t,e,n,r,i,s,o,l,u,c){let d=s.map(E=>E.route.lazy?xR(E.route,u,l):void 0),p=s.map((E,C)=>{let P=d[C],D=i.some(v=>v.route.id===E.route.id);return Be({},E,{shouldLoad:D,resolve:async v=>(v&&r.method==="GET"&&(E.route.lazy||E.route.loader)&&(D=!0),D?bR(e,r,E,P,v,c):Promise.resolve({type:Re.data,result:void 0}))})}),m=await t({matches:p,request:r,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(d)}catch{}return m}async function bR(t,e,n,r,i,s){let o,l,u=c=>{let d,p=new Promise((C,P)=>d=P);l=()=>d(),e.signal.addEventListener("abort",l);let m=C=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:s},...C!==void 0?[C]:[]),E=(async()=>{try{return{type:"data",result:await(i?i(P=>m(P)):m())}}catch(C){return{type:"error",result:C}}})();return Promise.race([E,p])};try{let c=n.route[t];if(r)if(c){let d,[p]=await Promise.all([u(c).catch(m=>{d=m}),r]);if(d!==void 0)throw d;o=p}else if(await r,c=n.route[t],c)o=await u(c);else if(t==="action"){let d=new URL(e.url),p=d.pathname+d.search;throw zt(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:Re.data,result:void 0};else if(c)o=await u(c);else{let d=new URL(e.url),p=d.pathname+d.search;throw zt(404,{pathname:p})}de(o.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:Re.error,result:c}}finally{l&&e.signal.removeEventListener("abort",l)}return o}async function DR(t){let{result:e,type:n}=t;if(tI(e)){let p;try{let m=e.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?e.body==null?p=null:p=await e.json():p=await e.text()}catch(m){return{type:Re.error,error:m}}return n===Re.error?{type:Re.error,error:new Mc(e.status,e.statusText,p),statusCode:e.status,headers:e.headers}:{type:Re.data,data:p,statusCode:e.status,headers:e.headers}}if(n===Re.error){if(C_(e)){var r,i;if(e.data instanceof Error){var s,o;return{type:Re.error,error:e.data,statusCode:(s=e.init)==null?void 0:s.status,headers:(o=e.init)!=null&&o.headers?new Headers(e.init.headers):void 0}}return{type:Re.error,error:new Mc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data),statusCode:al(e)?e.status:void 0,headers:(i=e.init)!=null&&i.headers?new Headers(e.init.headers):void 0}}return{type:Re.error,error:e,statusCode:al(e)?e.status:void 0}}if(UR(e)){var l,u;return{type:Re.deferred,deferredData:e,statusCode:(l=e.init)==null?void 0:l.status,headers:((u=e.init)==null?void 0:u.headers)&&new Headers(e.init.headers)}}if(C_(e)){var c,d;return{type:Re.data,data:e.data,statusCode:(c=e.init)==null?void 0:c.status,headers:(d=e.init)!=null&&d.headers?new Headers(e.init.headers):void 0}}return{type:Re.data,data:e}}function OR(t,e,n,r,i,s){let o=t.headers.get("Location");if(de(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Im.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=Kf(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function w_(t,e,n){if(Im.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Tr(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Ps(t,e,n,r){let i=t.createURL(eI(e)).toString(),s={signal:n};if(r&&An(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=Yf(r.formData):s.body=r.formData}return new Request(i,s)}function Yf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function E_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function LR(t,e,n,r,i){let s={},o=null,l,u=!1,c={},d=n&&en(n[1])?n[1].error:void 0;return t.forEach(p=>{if(!(p.route.id in e))return;let m=p.route.id,E=e[m];if(de(!Hi(E),"Cannot handle redirect results in processLoaderData"),en(E)){let C=E.error;d!==void 0&&(C=d,d=void 0),o=o||{};{let P=ji(t,m);o[P.route.id]==null&&(o[P.route.id]=C)}s[m]=void 0,u||(u=!0,l=al(E.error)?E.error.status:500),E.headers&&(c[m]=E.headers)}else Jr(E)?(r.set(m,E.deferredData),s[m]=E.deferredData.data,E.statusCode!=null&&E.statusCode!==200&&!u&&(l=E.statusCode),E.headers&&(c[m]=E.headers)):(s[m]=E.data,E.statusCode&&E.statusCode!==200&&!u&&(l=E.statusCode),E.headers&&(c[m]=E.headers))}),d!==void 0&&n&&(o={[n[0]]:d},s[n[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:c}}function T_(t,e,n,r,i,s,o){let{loaderData:l,errors:u}=LR(e,n,r,o);return i.forEach(c=>{let{key:d,match:p,controller:m}=c,E=s[d];if(de(E,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(en(E)){let C=ji(t.matches,p==null?void 0:p.route.id);u&&u[C.route.id]||(u=Be({},u,{[C.route.id]:E.error})),t.fetchers.delete(d)}else if(Hi(E))de(!1,"Unhandled fetcher revalidation redirect");else if(Jr(E))de(!1,"Unhandled fetcher deferred data");else{let C=jr(E.data);t.fetchers.set(d,C)}}),{loaderData:l,errors:u}}function I_(t,e,n,r){let i=Be({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function S_(t){return t?en(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function ji(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function A_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function zt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Mc(t||500,l,new Error(u),!0)}function Iu(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[r,i]=e[n];if(Hi(i))return{key:r,result:i}}}function eI(t){let e=typeof t=="string"?Ci(t):t;return ts(Be({},e,{hash:""}))}function MR(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function VR(t){return tI(t.result)&&TR.has(t.result.status)}function Jr(t){return t.type===Re.deferred}function en(t){return t.type===Re.error}function Hi(t){return(t&&t.type)===Re.redirect}function C_(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function UR(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function tI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function FR(t){return ER.has(t.toLowerCase())}function An(t){return vR.has(t.toLowerCase())}async function jR(t,e,n,r,i){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[l,u]=s[o],c=t.find(m=>(m==null?void 0:m.route.id)===l);if(!c)continue;let d=r.find(m=>m.route.id===c.route.id),p=d!=null&&!JT(d,c)&&(i&&i[c.route.id])!==void 0;Jr(u)&&p&&await Sm(u,n,!1).then(m=>{m&&(e[l]=m)})}}async function $R(t,e,n){for(let r=0;r<n.length;r++){let{key:i,routeId:s,controller:o}=n[r],l=e[i];t.find(c=>(c==null?void 0:c.route.id)===s)&&Jr(l)&&(de(o,"Expected an AbortController for revalidating fetcher deferred result"),await Sm(l,o.signal,!0).then(c=>{c&&(e[i]=c)}))}}async function Sm(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Re.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Re.error,error:i}}return{type:Re.data,data:t.deferredData.data}}}function Am(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function _a(t,e){let n=typeof e=="string"?Ci(e).search:e.search;if(t[t.length-1].route.index&&Am(n||""))return t[t.length-1];let r=QT(t);return r[r.length-1]}function R_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function bd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function BR(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ha(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function zR(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function jr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function HR(t,e){try{let n=t.sessionStorage.getItem(XT);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function WR(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(XT,JSON.stringify(n))}catch(r){go(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vc(){return Vc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vc.apply(this,arguments)}const kl=U.createContext(null),Cm=U.createContext(null),xr=U.createContext(null),Rm=U.createContext(null),kr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),nI=U.createContext(null);function qR(t,e){let{relative:n}=e===void 0?{}:e;xo()||de(!1);let{basename:r,navigator:i}=U.useContext(xr),{hash:s,pathname:o,search:l}=Ah(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:mr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function xo(){return U.useContext(Rm)!=null}function ko(){return xo()||de(!1),U.useContext(Rm).location}function rI(t){U.useContext(xr).static||U.useLayoutEffect(t)}function Pm(){let{isDataRoute:t}=U.useContext(kr);return t?oP():GR()}function GR(){xo()||de(!1);let t=U.useContext(kl),{basename:e,future:n,navigator:r}=U.useContext(xr),{matches:i}=U.useContext(kr),{pathname:s}=ko(),o=JSON.stringify(Ih(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return rI(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=Sh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:mr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}const KR=U.createContext(null);function QR(t){let e=U.useContext(kr).outlet;return e&&U.createElement(KR.Provider,{value:t},e)}function Ah(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(xr),{matches:i}=U.useContext(kr),{pathname:s}=ko(),o=JSON.stringify(Ih(i,r.v7_relativeSplatPath));return U.useMemo(()=>Sh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function YR(t,e,n,r){xo()||de(!1);let{navigator:i}=U.useContext(xr),{matches:s}=U.useContext(kr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=ko(),d;d=c;let p=d.pathname||"/",m=p;if(u!=="/"){let P=u.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(P.length).join("/")}let E=Fi(t,{pathname:m});return tP(E&&E.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:mr([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:mr([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r)}function XR(){let t=sP(),e=al(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const JR=U.createElement(XR,null);class ZR extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(kr.Provider,{value:this.props.routeContext},U.createElement(nI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eP(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(kl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(kr.Provider,{value:e},r)}function tP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||de(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:E}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||C){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let E,C=!1,P=null,D=null;n&&(E=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||JR,u&&(c<0&&m===0?(aP("route-fallback"),C=!0,D=null):c===m&&(C=!0,D=p.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),v=()=>{let R;return E?R=P:C?R=D:p.route.Component?R=U.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=d,U.createElement(eP,{match:p,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:R})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?U.createElement(ZR,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):v()},null)}var iI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(iI||{}),sI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(sI||{});function nP(t){let e=U.useContext(kl);return e||de(!1),e}function rP(t){let e=U.useContext(Cm);return e||de(!1),e}function iP(t){let e=U.useContext(kr);return e||de(!1),e}function oI(t){let e=iP(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function sP(){var t;let e=U.useContext(nI),n=rP(sI.UseRouteError),r=oI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function oP(){let{router:t}=nP(iI.UseNavigateStable),e=oI(),n=U.useRef(!1);return rI(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Vc({fromRouteId:e},s)))},[t,e])}const P_={};function aP(t,e,n){P_[t]||(P_[t]=!0)}function lP(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function uP(t){let{to:e,replace:n,state:r,relative:i}=t;xo()||de(!1);let{future:s,static:o}=U.useContext(xr),{matches:l}=U.useContext(kr),{pathname:u}=ko(),c=Pm(),d=Sh(e,Ih(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(d);return U.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function cP(t){return QR(t.context)}function hP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tt.Pop,navigator:s,static:o=!1,future:l}=t;xo()&&de(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Vc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Ci(r));let{pathname:d="/",search:p="",hash:m="",state:E=null,key:C="default"}=r,P=U.useMemo(()=>{let D=Tr(d,u);return D==null?null:{location:{pathname:D,search:p,hash:m,state:E,key:C},navigationType:i}},[u,d,p,m,E,C,i]);return P==null?null:U.createElement(xr.Provider,{value:c},U.createElement(Rm.Provider,{children:n,value:P}))}new Promise(()=>{});function dP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yo.apply(this,arguments)}function aI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function fP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pP(t,e){return t.button===0&&(!e||e==="_self")&&!fP(t)}const mP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gP=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],yP="6";try{window.__reactRouterVersion=yP}catch{}function _P(t,e){return CR({basename:void 0,future:yo({},void 0,{v7_prependBasename:!0}),history:YC({window:void 0}),hydrationData:vP(),routes:t,mapRouteProperties:dP,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function vP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=yo({},e,{errors:wP(e.errors)})),e}function wP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Mc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const lI=U.createContext({isTransitioning:!1}),EP=U.createContext(new Map),TP="startTransition",x_=VA[TP],IP="flushSync",k_=QC[IP];function SP(t){x_?x_(t):t()}function da(t){k_?k_(t):t()}let AP=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function CP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,l]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,p]=U.useState(),[m,E]=U.useState(),[C,P]=U.useState(),D=U.useRef(new Map),{v7_startTransition:S}=r||{},v=U.useCallback(y=>{S?SP(y):y()},[S]),R=U.useCallback((y,T)=>{let{deletedFetchers:I,flushSync:k,viewTransitionOpts:N}=T;y.fetchers.forEach((Ne,mt)=>{Ne.data!==void 0&&D.current.set(mt,Ne.data)}),I.forEach(Ne=>D.current.delete(Ne));let A=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!N||A){k?da(()=>s(y)):v(()=>s(y));return}if(k){da(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let Ne=n.window.document.startViewTransition(()=>{da(()=>s(y))});Ne.finished.finally(()=>{da(()=>{p(void 0),E(void 0),l(void 0),c({isTransitioning:!1})})}),da(()=>E(Ne));return}m?(d&&d.resolve(),m.skipTransition(),P({state:y,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(l(y),c({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,m,d,D,v]);U.useLayoutEffect(()=>n.subscribe(R),[n,R]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&p(new AP)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let y=o,T=d.promise,I=n.window.document.startViewTransition(async()=>{v(()=>s(y)),await T});I.finished.finally(()=>{p(void 0),E(void 0),l(void 0),c({isTransitioning:!1})}),E(I)}},[v,o,d,n.window]),U.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&C&&(l(C.state),c({isTransitioning:!0,flushSync:!1,currentLocation:C.currentLocation,nextLocation:C.nextLocation}),P(void 0))},[u.isTransitioning,C]),U.useEffect(()=>{},[]);let L=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:y=>n.navigate(y),push:(y,T,I)=>n.navigate(y,{state:T,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(y,T,I)=>n.navigate(y,{replace:!0,state:T,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[n]),B=n.basename||"/",H=U.useMemo(()=>({router:n,navigator:L,static:!1,basename:B}),[n,L,B]),g=U.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return U.useEffect(()=>lP(r,n.future),[r,n.future]),U.createElement(U.Fragment,null,U.createElement(kl.Provider,{value:H},U.createElement(Cm.Provider,{value:i},U.createElement(EP.Provider,{value:D.current},U.createElement(lI.Provider,{value:u},U.createElement(hP,{basename:B,location:i.location,navigationType:i.historyAction,navigator:L,future:g},i.initialized||n.future.v7_partialHydration?U.createElement(RP,{routes:n.routes,future:n.future,state:i}):e))))),null)}const RP=U.memo(PP);function PP(t){let{routes:e,future:n,state:r}=t;return YR(e,void 0,r,n)}const xP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,to=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=aI(e,mP),{basename:E}=U.useContext(xr),C,P=!1;if(typeof c=="string"&&kP.test(c)&&(C=c,xP))try{let R=new URL(window.location.href),L=c.startsWith("//")?new URL(R.protocol+c):new URL(c),B=Tr(L.pathname,E);L.origin===R.origin&&B!=null?c=B+L.search+L.hash:P=!0}catch{}let D=qR(c,{relative:i}),S=bP(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function v(R){r&&r(R),R.defaultPrevented||S(R)}return U.createElement("a",yo({},m,{href:C||D,onClick:P||s?r:v,ref:n,target:u}))}),$n=U.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=e,p=aI(e,gP),m=Ah(u,{relative:p.relative}),E=ko(),C=U.useContext(Cm),{navigator:P,basename:D}=U.useContext(xr),S=C!=null&&DP(m)&&c===!0,v=P.encodeLocation?P.encodeLocation(m).pathname:m.pathname,R=E.pathname,L=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(R=R.toLowerCase(),L=L?L.toLowerCase():null,v=v.toLowerCase()),L&&D&&(L=Tr(L,D)||L);const B=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let H=R===v||!o&&R.startsWith(v)&&R.charAt(B)==="/",g=L!=null&&(L===v||!o&&L.startsWith(v)&&L.charAt(v.length)==="/"),y={isActive:H,isPending:g,isTransitioning:S},T=H?r:void 0,I;typeof s=="function"?I=s(y):I=[s,H?"active":null,g?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(y):l;return U.createElement(to,yo({},p,{"aria-current":T,className:I,ref:n,style:k,to:u,viewTransition:c}),typeof d=="function"?d(y):d)});var Xf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xf||(Xf={}));var N_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(N_||(N_={}));function NP(t){let e=U.useContext(kl);return e||de(!1),e}function bP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Pm(),c=ko(),d=Ah(t,{relative:o});return U.useCallback(p=>{if(pP(p,n)){p.preventDefault();let m=r!==void 0?r:ts(c)===ts(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function DP(t,e){e===void 0&&(e={});let n=U.useContext(lI);n==null&&de(!1);let{basename:r}=NP(Xf.useViewTransitionState),i=Ah(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Tr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Tr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Lc(i.pathname,o)!=null||Lc(i.pathname,s)!=null}function OP(){const[t,e]=U.useState(!1);return w.jsxs("header",{className:"sticky top-0 z-20 border-b border-rose/40 bg-blush/80 backdrop-blur font-sans",children:[w.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-3 flex items-center justify-between",children:[w.jsxs(to,{to:"/",className:"flex items-center gap-2",onClick:()=>e(!1),children:[w.jsx("div",{className:"h-9 w-9 rounded-xl bg-rose text-ivory flex items-center justify-center shadow-md",children:"📷"}),w.jsx("span",{className:"text-base font-serif font-semibold tracking-tight text-charcoal",children:"Lama Photo NC"})]}),w.jsxs("nav",{className:"hidden md:flex gap-6 text-sm text-charcoal",children:[w.jsx($n,{to:"/portfolio",className:"hover:text-gold transition-colors",children:"Portfolio"}),w.jsx($n,{to:"/booking",className:"hover:text-gold transition-colors",children:"Book"}),w.jsx($n,{to:"/client",className:"hover:text-gold transition-colors",children:"Clients"}),w.jsx($n,{to:"/faq",className:"hover:text-gold transition-colors",children:"FAQ"}),w.jsx($n,{to:"/admin",className:"hover:text-gold transition-colors",children:"Admin"})]}),w.jsx(to,{to:"/booking",className:"hidden md:block",children:w.jsx("button",{className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md",children:"Book Now →"})}),w.jsx("button",{"aria-label":"Toggle menu",onClick:()=>e(n=>!n),className:"block md:hidden p-2 rounded-lg bg-rose text-ivory",children:"☰"})]}),w.jsxs("div",{className:`${t?"block":"hidden"} md:hidden border-t border-rose/40 bg-blush/80 px-4 py-3 space-y-3`,children:[w.jsx($n,{to:"/portfolio",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Portfolio"}),w.jsx($n,{to:"/booking",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Book"}),w.jsx($n,{to:"/client",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Clients"}),w.jsx($n,{to:"/faq",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"FAQ"}),w.jsx($n,{to:"/admin",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Admin"}),w.jsx(to,{to:"/booking",onClick:()=>e(!1),children:w.jsx("button",{className:"w-full mt-2 rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md",children:"Book Now →"})})]})]})}function LP(){return w.jsx("footer",{className:"border-t border-rose/40 bg-blush/20 py-10 font-sans",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4 text-sm text-charcoal flex flex-col md:flex-row items-center justify-between gap-3",children:[w.jsxs("div",{className:"font-serif text-rose",children:["© ",new Date().getFullYear()," Lama NC"]}),w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsx("a",{href:"mailto:hello@example.com",className:"hover:text-gold transition-colors",children:"hello@example.com"}),w.jsx("a",{href:"tel:+15551234567",className:"hover:text-gold transition-colors",children:"(555) 123-4567"})]})]})})}function MP(){return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(OP,{}),w.jsx("main",{className:"flex-1",children:w.jsx(cP,{})}),w.jsx(LP,{})]})}function VP(){return w.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center",children:[w.jsxs("div",{children:[w.jsx("h1",{className:"text-3xl md:text-5xl font-serif font-semibold leading-tight text-charcoal",children:"Book stunning, story-driven photography."}),w.jsx("p",{className:"mt-4 text-charcoal/70 text-base md:text-lg",children:"Portraits, events, and weddings—crafted with care and delivered fast. Pick a package, choose a time, and lock it in."}),w.jsxs("div",{className:"mt-6 flex gap-3",children:[w.jsx(to,{to:"/booking",className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Start Booking"}),w.jsx(to,{to:"/portfolio",className:"px-5 py-3 rounded-full border border-rose/40 text-sm font-semibold text-charcoal hover:bg-blush/50 transition-all",children:"View Portfolio"})]}),w.jsxs("div",{className:"mt-6 flex items-center gap-2 text-sm text-charcoal/70",children:[w.jsx("span",{children:"★★★★★"}),w.jsx("span",{children:"100+ happy clients"})]})]}),w.jsx("div",{className:"glass rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-rose/30 p-4 md:p-6 bg-white/80",children:w.jsx("img",{className:"rounded-xl w-full object-cover aspect-[4/3]",src:"https://picsum.photos/800/600?blur=0",alt:"Featured photography sample"})})]})})}const b_="lamaphoto",UP="portfolio";function FP(){const[t,e]=U.useState([]),[n,r]=U.useState("");return U.useEffect(()=>{(async()=>{try{const i=await fetch(`https://res.cloudinary.com/${b_}/image/list/${UP}.json`,{cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.json();e(s.resources||[])}catch(i){console.error(i),r("Could not load images. Check Cloudinary ‘Asset lists’ setting and that photos are tagged ‘portfolio’.")}})()},[]),w.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Portfolio"}),w.jsxs("p",{className:"mt-2 text-charcoal/70",children:["Uploads with the ",w.jsx("code",{children:"portfolio"})," tag appear here automatically."]}),n&&w.jsx("div",{className:"mt-4 text-red-700 text-sm",children:n}),w.jsx("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",children:t.map(i=>{const s=`https://res.cloudinary.com/${b_}/image/upload/c_fill,g_auto,f_auto,q_auto,w_800,h_800/${i.public_id}.${i.format}`;return w.jsx("div",{className:"overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow",children:w.jsx("img",{src:s,alt:i.public_id,loading:"lazy",className:"w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"})},i.public_id)})}),!n&&t.length===0&&w.jsxs("div",{className:"mt-6 text-charcoal/60",children:["No images yet. Upload in ",w.jsx("code",{children:"/admin"}),"."]})]})})}function jP({step:t}){const e=["Package","Date & Time","Details","Review"];return w.jsx("div",{className:"flex items-center gap-3 font-sans",children:e.map((n,r)=>w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:`h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold shadow-sm transition-all ${r<=t?"bg-rose text-ivory":"bg-blush/40 text-charcoal/70"}`,children:r+1}),w.jsx("span",{className:`hidden sm:block text-sm transition-colors ${r===t?"font-semibold text-charcoal":"text-charcoal/60"}`,children:n}),r<e.length-1&&w.jsx("div",{className:`w-6 sm:w-10 h-px transition-colors ${r<t?"bg-rose/70":"bg-blush/50"}`})]},n))})}function $P({p:t,selected:e,onSelect:n}){return w.jsxs("div",{className:`glass rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 ${e?"border-rose":"border-transparent"} p-5 md:p-6 bg-ivory`,children:[w.jsxs("div",{className:"flex items-start justify-between gap-3",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:t.name}),w.jsx("p",{className:"text-rose/80",children:t.desc})]}),w.jsxs("div",{className:"text-right",children:[w.jsxs("div",{className:"text-2xl font-bold text-rose",children:["$",t.price]}),w.jsx("div",{className:"text-xs text-charcoal/60",children:t.duration})]})]}),w.jsx("ul",{className:"mt-4 space-y-2 text-sm text-charcoal/80",children:t.includes.map((r,i)=>w.jsxs("li",{children:["✔️ ",r]},i))}),w.jsx("div",{className:"mt-5",children:w.jsx("button",{onClick:n,className:`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${e?"bg-gold text-charcoal hover:bg-rose hover:text-ivory":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:e?"Selected":"Select"})})]})}const BP=()=>{};var D_={};/**
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
 */const uI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new HP;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let HP=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const WP=function(t){const e=uI(t);return cI.encodeByteArray(e,!0)},Uc=function(t){return WP(t).replace(/\./g,"")},hI=function(t){try{return cI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GP=()=>qP().__FIREBASE_DEFAULTS__,KP=()=>{if(typeof process>"u"||typeof D_>"u")return;const t=D_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},QP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hI(t[1]);return e&&JSON.parse(e)},Ch=()=>{try{return BP()||GP()||KP()||QP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dI=t=>{var e,n;return(n=(e=Ch())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},YP=t=>{const e=dI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fI=()=>{var t;return(t=Ch())==null?void 0:t.config},pI=t=>{var e;return(e=Ch())==null?void 0:e[`_${t}`]};/**
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
 */class XP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function No(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mI(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function JP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Uc(JSON.stringify(n)),Uc(JSON.stringify(o)),""].join(".")}const Oa={};function ZP(){const t={prod:[],emulator:[]};for(const e of Object.keys(Oa))Oa[e]?t.emulator.push(e):t.prod.push(e);return t}function ex(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let O_=!1;function gI(t,e){if(typeof window>"u"||typeof document>"u"||!No(window.location.host)||Oa[t]===e||Oa[t]||O_)return;Oa[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=ZP().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,E){m.setAttribute("width","24"),m.setAttribute("id",E),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{O_=!0,o()},m}function d(m,E){m.setAttribute("id",E),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=ex(r),E=n("text"),C=document.getElementById(E)||document.createElement("span"),P=n("learnmore"),D=document.getElementById(P)||document.createElement("a"),S=n("preprendIcon"),v=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const R=m.element;l(R),d(D,P);const L=c();u(v,S),R.append(v,C,D,L),document.body.appendChild(R)}s?(C.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function nx(){var e;const t=(e=Ch())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ix(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ox(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ax(){return!nx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lx(){try{return typeof indexedDB=="object"}catch{return!1}}function ux(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const cx="FirebaseError";let us=class yI extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cx,Object.setPrototypeOf(this,yI.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nl.prototype.create)}},Nl=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new us(i,l,r)}};function hx(t,e){return t.replace(dx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dx=/\{\$([^}]+)}/g;function fx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ns(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(L_(s)&&L_(o)){if(!ns(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L_(t){return t!==null&&typeof t=="object"}/**
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
 */function bl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function va(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function px(t,e){const n=new mx(t,e);return n.subscribe.bind(n)}let mx=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dd),i.error===void 0&&(i.error=Dd),i.complete===void 0&&(i.complete=Dd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function gx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dd(){}/**
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
 */function sn(t){return t&&t._delegate?t._delegate:t}let rs=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Ui="[DEFAULT]";/**
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
 */class yx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new XP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vx(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_x(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _x(t){return t===Ui?void 0:t}function vx(t){return t.instantiationMode==="EAGER"}/**
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
 */class wx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const Ex={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Tx=me.INFO,Ix={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Sx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ix[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let xm=class{constructor(e){this.name=e,this._logLevel=Tx,this._logHandler=Sx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ex[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}};const Ax=(t,e)=>e.some(n=>t instanceof n);let M_,V_;function Cx(){return M_||(M_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rx(){return V_||(V_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _I=new WeakMap,Jf=new WeakMap,vI=new WeakMap,Od=new WeakMap,km=new WeakMap;function Px(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(li(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_I.set(n,t)}).catch(()=>{}),km.set(e,t),e}function xx(t){if(Jf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jf.set(t,e)}let Zf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return li(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kx(t){Zf=t(Zf)}function Nx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ld(this),e,...n);return vI.set(r,e.sort?e.sort():[e]),li(r)}:Rx().includes(t)?function(...e){return t.apply(Ld(this),e),li(_I.get(this))}:function(...e){return li(t.apply(Ld(this),e))}}function bx(t){return typeof t=="function"?Nx(t):(t instanceof IDBTransaction&&xx(t),Ax(t,Cx())?new Proxy(t,Zf):t)}function li(t){if(t instanceof IDBRequest)return Px(t);if(Od.has(t))return Od.get(t);const e=bx(t);return e!==t&&(Od.set(t,e),km.set(e,t)),e}const Ld=t=>km.get(t);function Dx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=li(o);return r&&o.addEventListener("upgradeneeded",u=>{r(li(o.result),u.oldVersion,u.newVersion,li(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Ox=["get","getKey","getAll","getAllKeys","count"],Lx=["put","add","delete","clear"],Md=new Map;function U_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Md.get(e))return Md.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Lx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ox.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Md.set(e,s),s}kx(t=>({...t,get:(e,n,r)=>U_(e,n)||t.get(e,n,r),has:(e,n)=>!!U_(e,n)||t.has(e,n)}));/**
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
 */let Mx=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function Vx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ep="@firebase/app",F_="0.14.1";/**
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
 */const Ir=new xm("@firebase/app"),Ux="@firebase/app-compat",Fx="@firebase/analytics-compat",jx="@firebase/analytics",$x="@firebase/app-check-compat",Bx="@firebase/app-check",zx="@firebase/auth",Hx="@firebase/auth-compat",Wx="@firebase/database",qx="@firebase/data-connect",Gx="@firebase/database-compat",Kx="@firebase/functions",Qx="@firebase/functions-compat",Yx="@firebase/installations",Xx="@firebase/installations-compat",Jx="@firebase/messaging",Zx="@firebase/messaging-compat",ek="@firebase/performance",tk="@firebase/performance-compat",nk="@firebase/remote-config",rk="@firebase/remote-config-compat",ik="@firebase/storage",sk="@firebase/storage-compat",ok="@firebase/firestore",ak="@firebase/ai",lk="@firebase/firestore-compat",uk="firebase",ck="12.1.0";/**
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
 */const tp="[DEFAULT]",hk={[ep]:"fire-core",[Ux]:"fire-core-compat",[jx]:"fire-analytics",[Fx]:"fire-analytics-compat",[Bx]:"fire-app-check",[$x]:"fire-app-check-compat",[zx]:"fire-auth",[Hx]:"fire-auth-compat",[Wx]:"fire-rtdb",[qx]:"fire-data-connect",[Gx]:"fire-rtdb-compat",[Kx]:"fire-fn",[Qx]:"fire-fn-compat",[Yx]:"fire-iid",[Xx]:"fire-iid-compat",[Jx]:"fire-fcm",[Zx]:"fire-fcm-compat",[ek]:"fire-perf",[tk]:"fire-perf-compat",[nk]:"fire-rc",[rk]:"fire-rc-compat",[ik]:"fire-gcs",[sk]:"fire-gcs-compat",[ok]:"fire-fst",[lk]:"fire-fst-compat",[ak]:"fire-vertex","fire-js":"fire-js",[uk]:"fire-js-all"};/**
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
 */const Fc=new Map,dk=new Map,np=new Map;function j_(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _o(t){const e=t.name;if(np.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;np.set(e,t);for(const n of Fc.values())j_(n,t);for(const n of dk.values())j_(n,t);return!0}function Nm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const fk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ui=new Nl("app","Firebase",fk);/**
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
 */class pk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ui.create("app-deleted",{appName:this._name})}}/**
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
 */const bo=ck;function wI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:tp,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ui.create("bad-app-name",{appName:String(i)});if(n||(n=fI()),!n)throw ui.create("no-options");const s=Fc.get(i);if(s){if(ns(n,s.options)&&ns(r,s.config))return s;throw ui.create("duplicate-app",{appName:i})}const o=new wx(i);for(const u of np.values())o.addComponent(u);const l=new pk(n,r,o);return Fc.set(i,l),l}function EI(t=tp){const e=Fc.get(t);if(!e&&t===tp&&fI())return wI();if(!e)throw ui.create("no-app",{appName:t});return e}function ci(t,e,n){let r=hk[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(o.join(" "));return}_o(new rs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const mk="firebase-heartbeat-database",gk=1,ll="firebase-heartbeat-store";let Vd=null;function TI(){return Vd||(Vd=Dx(mk,gk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ll)}catch(n){console.warn(n)}}}}).catch(t=>{throw ui.create("idb-open",{originalErrorMessage:t.message})})),Vd}async function yk(t){try{const n=(await TI()).transaction(ll),r=await n.objectStore(ll).get(II(t));return await n.done,r}catch(e){if(e instanceof us)Ir.warn(e.message);else{const n=ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function $_(t,e){try{const r=(await TI()).transaction(ll,"readwrite");await r.objectStore(ll).put(e,II(t)),await r.done}catch(n){if(n instanceof us)Ir.warn(n.message);else{const r=ui.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(r.message)}}}function II(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _k=1024,vk=30;let wk=class{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=B_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>vk){const o=Ik(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=B_(),{heartbeatsToSend:r,unsentEntries:i}=Ek(this._heartbeatsCache.heartbeats),s=Uc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ir.warn(n),""}}};function B_(){return new Date().toISOString().substring(0,10)}function Ek(t,e=_k){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),z_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),z_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}let Tk=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lx()?ux().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return $_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return $_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}};function z_(t){return Uc(JSON.stringify({version:2,heartbeats:t})).length}function Ik(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Sk(t){_o(new rs("platform-logger",e=>new Mx(e),"PRIVATE")),_o(new rs("heartbeat",e=>new wk(e),"PRIVATE")),ci(ep,F_,t),ci(ep,F_,"esm2020"),ci("fire-js","")}Sk("");var Ak="firebase",Ck="12.1.0";/**
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
 */ci(Ak,Ck,"app");function SI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rk=SI,AI=new Nl("auth","Firebase",SI());/**
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
 */const jc=new xm("@firebase/auth");function Pk(t,...e){jc.logLevel<=me.WARN&&jc.warn(`Auth (${bo}): ${t}`,...e)}function Xu(t,...e){jc.logLevel<=me.ERROR&&jc.error(`Auth (${bo}): ${t}`,...e)}/**
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
 */function bn(t,...e){throw bm(t,...e)}function Kn(t,...e){return bm(t,...e)}function CI(t,e,n){const r={...Rk(),[e]:n};return new Nl("auth","Firebase",r).create(e,{appName:t.name})}function hi(t){return CI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return AI.create(t,...e)}function ie(t,e,...n){if(!t)throw bm(e,...n)}function dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xu(e),new Error(e)}function Sr(t,e){t||dr(e)}/**
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
 */function rp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function xk(){return H_()==="http:"||H_()==="https:"}function H_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function kk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xk()||ix()||"connection"in navigator)?navigator.onLine:!0}function Nk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */let Dl=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=tx()||sx()}get(){return kk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function Dm(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */let RI=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */const bk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Dk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ok=new Dl(3e4,6e4);function cs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ri(t,e,n,r,i={}){return PI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=bl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return rx()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&No(t.emulatorConfig.host)&&(c.credentials="include"),RI.fetch()(await xI(t,t.config.apiHost,n,l),c)})}async function PI(t,e,n){t._canInitEmulator=!1;const r={...bk,...e};try{const i=new Mk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Su(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Su(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Su(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw CI(t,d,c);bn(t,d)}}catch(i){if(i instanceof us)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function Rh(t,e,n,r,i={}){const s=await Ri(t,e,n,r,i);return"mfaPendingCredential"in s&&bn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function xI(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Dm(t.config,i):`${t.config.apiScheme}://${i}`;return Dk.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Lk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let Mk=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kn(this.auth,"network-request-failed")),Ok.get())})}};function Su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kn(t,e,r);return i.customData._tokenResponse=n,i}function W_(t){return t!==void 0&&t.enterprise!==void 0}class Vk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Lk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Uk(t,e){return Ri(t,"GET","/v2/recaptchaConfig",cs(t,e))}/**
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
 */async function Fk(t,e){return Ri(t,"POST","/v1/accounts:delete",e)}async function $c(t,e){return Ri(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function La(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jk(t,e=!1){const n=sn(t),r=await n.getIdToken(e),i=Om(r);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:La(Ud(i.auth_time)),issuedAtTime:La(Ud(i.iat)),expirationTime:La(Ud(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ud(t){return Number(t)*1e3}function Om(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xu("JWT malformed, contained fewer than 3 sections"),null;try{const i=hI(n);return i?JSON.parse(i):(Xu("Failed to decode base64 JWT payload"),null)}catch(i){return Xu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function q_(t){const e=Om(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ul(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof us&&$k(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $k({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */let Bk=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let ip=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=La(this.lastLoginAt),this.creationTime=La(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function Bc(t){var p;const e=t.auth,n=await t.getIdToken(),r=await ul(t,$c(e,{idToken:n}));ie(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?kI(i.providerUserInfo):[],o=Hk(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ip(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function zk(t){const e=sn(t);await Bc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Wk(t,e){const n=await PI(t,{},async()=>{const r=bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await xI(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&No(t.emulatorConfig.host)&&(u.credentials="include"),RI.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qk(t,e){return Ri(t,"POST","/v2/accounts:revokeToken",cs(t,e))}/**
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
 */let Fd=class sp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):q_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=q_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Wk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new sp;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sp,this.toJSON())}_performRefresh(){return dr("not implemented")}};/**
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
 */function Ur(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let qs=class Ea{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Bk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ip(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ul(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jk(this,e)}reload(){return zk(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ea({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rn(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await ul(this,Fk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:E,providerData:C,stsTokenManager:P}=n;ie(p&&P,e,"internal-error");const D=Fd.fromJSON(this.name,P);ie(typeof p=="string",e,"internal-error"),Ur(r,e.name),Ur(i,e.name),ie(typeof m=="boolean",e,"internal-error"),ie(typeof E=="boolean",e,"internal-error"),Ur(s,e.name),Ur(o,e.name),Ur(l,e.name),Ur(u,e.name),Ur(c,e.name),Ur(d,e.name);const S=new Ea({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:d});return C&&Array.isArray(C)&&(S.providerData=C.map(v=>({...v}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fd;i.updateFromServerResponse(n);const s=new Ea({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?kI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Fd;l.updateFromIdToken(r);const u=new Ea({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ip(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}};/**
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
 */const G_=new Map;function fr(t){Sr(t instanceof Function,"Expected a class definition");let e=G_.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,G_.set(t,e),e)}/**
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
 */let NI=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};NI.type="NONE";const K_=NI;/**
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
 */function Ju(t,e,n){return`firebase:${t}:${e}:${n}`}let Q_=class Zu{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ju(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ju("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $c(this.auth,{idToken:e}).catch(()=>{});return n?qs._fromGetAccountInfoResponse(this.auth,n,e):null}return qs._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zu(fr(K_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||fr(K_);const o=Ju(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await $c(e,{idToken:d}).catch(()=>{});if(!m)break;p=await qs._fromGetAccountInfoResponse(e,m,d)}else p=qs._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Zu(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Zu(s,e,r))}};/**
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
 */function Y_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VI(e))return"Blackberry";if(UI(e))return"Webos";if(DI(e))return"Safari";if((e.includes("chrome/")||OI(e))&&!e.includes("edge/"))return"Chrome";if(MI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bI(t=Lt()){return/firefox\//i.test(t)}function DI(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OI(t=Lt()){return/crios\//i.test(t)}function LI(t=Lt()){return/iemobile/i.test(t)}function MI(t=Lt()){return/android/i.test(t)}function VI(t=Lt()){return/blackberry/i.test(t)}function UI(t=Lt()){return/webos/i.test(t)}function Lm(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gk(t=Lt()){var e;return Lm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Kk(){return ox()&&document.documentMode===10}function FI(t=Lt()){return Lm(t)||MI(t)||UI(t)||VI(t)||/windows phone/i.test(t)||LI(t)}/**
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
 */function jI(t,e=[]){let n;switch(t){case"Browser":n=Y_(Lt());break;case"Worker":n=`${Y_(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bo}/${r}`}/**
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
 */let Qk=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function Yk(t,e={}){return Ri(t,"GET","/v2/passwordPolicy",cs(t,e))}/**
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
 */const Xk=6;let Jk=class{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Xk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
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
 */let Zk=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new X_(this),this.idTokenSubscription=new X_(this),this.beforeStateQueue=new Qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=AI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Q_.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $c(this,{idToken:e}),r=await qs._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rn(this.app))return Promise.reject(hi(this));const n=e?sn(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rn(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rn(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yk(this),n=new Jk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Nl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fr(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Q_.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Rn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Pk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}};function Do(t){return sn(t)}let X_=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=px(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let Ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function eN(t){Ph=t}function $I(t){return Ph.loadJS(t)}function tN(){return Ph.recaptchaEnterpriseScript}function nN(){return Ph.gapiScript}function rN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class iN{constructor(){this.enterprise=new sN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class sN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const oN="recaptcha-enterprise",BI="NO_RECAPTCHA";class aN{constructor(e){this.type=oN,this.auth=Do(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Uk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Vk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;W_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(BI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new iN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&W_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=tN();u.length!==0&&(u+=l),$I(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function J_(t,e,n,r=!1,i=!1){const s=new aN(t);let o;if(i)o=BI;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Z_(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await J_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await J_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function lN(t,e){const n=Nm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ns(s,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function uN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cN(t,e,n){const r=Do(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=zI(e),{host:o,port:l}=hN(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(ns(c,r.config.emulator)&&ns(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,No(o)?(mI(`${s}//${o}${u}`),gI("Auth",!0)):dN()}function zI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hN(t){const e=zI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ev(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ev(o)}}}function ev(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Mm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dr("not implemented")}_getIdTokenResponse(e){return dr("not implemented")}_linkToIdToken(e,n){return dr("not implemented")}_getReauthenticationResolver(e){return dr("not implemented")}}async function fN(t,e){return Ri(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function pN(t,e){return Rh(t,"POST","/v1/accounts:signInWithPassword",cs(t,e))}/**
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
 */async function mN(t,e){return Rh(t,"POST","/v1/accounts:signInWithEmailLink",cs(t,e))}async function gN(t,e){return Rh(t,"POST","/v1/accounts:signInWithEmailLink",cs(t,e))}/**
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
 */class cl extends Mm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new cl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Z_(e,n,"signInWithPassword",pN);case"emailLink":return mN(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Z_(e,r,"signUpPassword",fN);case"emailLink":return gN(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function no(t,e){return Rh(t,"POST","/v1/accounts:signInWithIdp",cs(t,e))}/**
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
 */const yN="http://localhost";class is extends Mm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new is(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return no(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,no(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,no(e,n)}buildRequest(){const e={requestUri:yN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bl(n)}return e}}/**
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
 */function _N(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vN(t){const e=va(wa(t)).link,n=e?va(wa(e)).deep_link_id:null,r=va(wa(t)).deep_link_id;return(r?va(wa(r)).link:null)||r||n||e||t}class Vm{constructor(e){const n=va(wa(e)),r=n.apiKey??null,i=n.oobCode??null,s=_N(n.mode??null);ie(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=vN(e);try{return new Vm(n)}catch{return null}}}/**
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
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,n){return cl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vm.parseLink(n);return ie(r,"argument-error"),cl._fromEmailAndCode(e,r.code,r.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class HI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ol extends HI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wr extends Ol{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wr.PROVIDER_ID="facebook.com";/**
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
 */class qr extends Ol{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qr.credential(n,r)}catch{return null}}}qr.GOOGLE_SIGN_IN_METHOD="google.com";qr.PROVIDER_ID="google.com";/**
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
 */class Gr extends Ol{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.GITHUB_SIGN_IN_METHOD="github.com";Gr.PROVIDER_ID="github.com";/**
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
 */class Kr extends Ol{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
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
 */class vo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qs._fromIdTokenResponse(e,r,i),o=tv(r);return new vo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tv(r);return new vo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function tv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zc extends us{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zc(e,n,r,i)}}function WI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zc._fromErrorAndOperation(t,s,e,r):s})}async function wN(t,e,n=!1){const r=await ul(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vo._forOperation(t,"link",r)}/**
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
 */async function EN(t,e,n=!1){const{auth:r}=t;if(Rn(r.app))return Promise.reject(hi(r));const i="reauthenticate";try{const s=await ul(t,WI(r,i,e,t),n);ie(s.idToken,r,"internal-error");const o=Om(s.idToken);ie(o,r,"internal-error");const{sub:l}=o;return ie(t.uid===l,r,"user-mismatch"),vo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),s}}/**
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
 */async function qI(t,e,n=!1){if(Rn(t.app))return Promise.reject(hi(t));const r="signIn",i=await WI(t,r,e),s=await vo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function TN(t,e){return qI(Do(t),e)}/**
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
 */async function IN(t){const e=Do(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function SN(t,e,n){return Rn(t.app)?Promise.reject(hi(t)):TN(sn(t),Oo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&IN(t),r})}function AN(t,e,n,r){return sn(t).onIdTokenChanged(e,n,r)}function CN(t,e,n){return sn(t).beforeAuthStateChanged(e,n)}const Hc="__sak";/**
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
 */class GI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hc,"1"),this.storage.removeItem(Hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const RN=1e3,PN=10;class KI extends GI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=FI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Kk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KI.type="LOCAL";const xN=KI;/**
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
 */class QI extends GI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}QI.type="SESSION";const YI=QI;/**
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
 */function kN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await kN(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xh.receivers=[];/**
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
 */function Um(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class NN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Um("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qn(){return window}function bN(t){Qn().location.href=t}/**
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
 */function XI(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function DN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ON(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function LN(){return XI()?self:null}/**
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
 */const JI="firebaseLocalStorageDb",MN=1,Wc="firebaseLocalStorage",ZI="fbase_key";class Ll{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kh(t,e){return t.transaction([Wc],e?"readwrite":"readonly").objectStore(Wc)}function VN(){const t=indexedDB.deleteDatabase(JI);return new Ll(t).toPromise()}function op(){const t=indexedDB.open(JI,MN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wc,{keyPath:ZI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wc)?e(r):(r.close(),await VN(),e(await op()))})})}async function nv(t,e,n){const r=kh(t,!0).put({[ZI]:e,value:n});return new Ll(r).toPromise()}async function UN(t,e){const n=kh(t,!1).get(e),r=await new Ll(n).toPromise();return r===void 0?null:r.value}function rv(t,e){const n=kh(t,!0).delete(e);return new Ll(n).toPromise()}const FN=800,jN=3;class e0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await op(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xh._getInstance(LN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await DN(),!this.activeServiceWorker)return;this.sender=new NN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ON()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await op();return await nv(e,Hc,"1"),await rv(e,Hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kh(i,!1).getAll();return new Ll(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}e0.type="LOCAL";const $N=e0;new Dl(3e4,6e4);/**
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
 */function BN(t,e){return e?fr(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fm extends Mm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return no(e,this._buildIdpRequest())}_linkToIdToken(e,n){return no(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return no(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zN(t){return qI(t.auth,new Fm(t),t.bypassAuthState)}function HN(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),EN(n,new Fm(t),t.bypassAuthState)}async function WN(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),wN(n,new Fm(t),t.bypassAuthState)}/**
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
 */class t0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zN;case"linkViaPopup":case"linkViaRedirect":return WN;case"reauthViaPopup":case"reauthViaRedirect":return HN;default:bn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qN=new Dl(2e3,1e4);class Gs extends t0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=Um();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qN.get())};e()}}Gs.currentPopupAction=null;/**
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
 */const GN="pendingRedirect",ec=new Map;class KN extends t0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ec.get(this.auth._key());if(!e){try{const r=await QN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ec.set(this.auth._key(),e)}return this.bypassAuthState||ec.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QN(t,e){const n=JN(e),r=XN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function YN(t,e){ec.set(t._key(),e)}function XN(t){return fr(t._redirectPersistence)}function JN(t){return Ju(GN,t.config.apiKey,t.name)}async function ZN(t,e,n=!1){if(Rn(t.app))return Promise.reject(hi(t));const r=Do(t),i=BN(r,e),o=await new KN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eb=10*60*1e3;class tb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!n0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eb&&this.cachedEventUids.clear(),this.cachedEventUids.has(iv(e))}saveEventToCache(e){this.cachedEventUids.add(iv(e)),this.lastProcessedEventTime=Date.now()}}function iv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function n0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n0(t);default:return!1}}/**
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
 */async function rb(t,e={}){return Ri(t,"GET","/v1/projects",e)}/**
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
 */const ib=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sb=/^https?/;async function ob(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rb(t);for(const n of e)try{if(ab(n))return}catch{}bn(t,"unauthorized-domain")}function ab(t){const e=rp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sb.test(n))return!1;if(ib.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lb=new Dl(3e4,6e4);function sv(){const t=Qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ub(t){return new Promise((e,n)=>{var i,s,o;function r(){sv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sv(),n(Kn(t,"network-request-failed"))},timeout:lb.get()})}if((s=(i=Qn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Qn().gapi)!=null&&o.load)r();else{const l=rN("iframefcb");return Qn()[l]=()=>{gapi.load?r():n(Kn(t,"network-request-failed"))},$I(`${nN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw tc=null,e})}let tc=null;function cb(t){return tc=tc||ub(t),tc}/**
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
 */const hb=new Dl(5e3,15e3),db="__/auth/iframe",fb="emulator/auth/iframe",pb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gb(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dm(e,fb):`https://${t.config.authDomain}/${db}`,r={apiKey:e.apiKey,appName:t.name,v:bo},i=mb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bl(r).slice(1)}`}async function yb(t){const e=await cb(t),n=Qn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:gb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kn(t,"network-request-failed"),l=Qn().setTimeout(()=>{s(o)},hb.get());function u(){Qn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const _b={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vb=500,wb=600,Eb="_blank",Tb="http://localhost";class ov{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ib(t,e,n,r=vb,i=wb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={..._b,width:r.toString(),height:i.toString(),top:s,left:o},c=Lt().toLowerCase();n&&(l=OI(c)?Eb:n),bI(c)&&(e=e||Tb,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,C])=>`${m}${E}=${C},`,"");if(Gk(c)&&l!=="_self")return Sb(e||"",l),new ov(null);const p=window.open(e||"",l,d);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new ov(p)}function Sb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ab="__/auth/handler",Cb="emulator/auth/handler",Rb=encodeURIComponent("fac");async function av(t,e,n,r,i,s){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bo,eventId:i};if(e instanceof HI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ol){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${Rb}=${encodeURIComponent(u)}`:"";return`${Pb(t)}?${bl(l).slice(1)}${c}`}function Pb({config:t}){return t.emulator?Dm(t,Cb):`https://${t.authDomain}/${Ab}`}/**
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
 */const jd="webStorageSupport";class xb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YI,this._completeRedirectFn=ZN,this._overrideRedirectResult=YN}async _openPopup(e,n,r,i){var o;Sr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await av(e,n,r,rp(),i);return Ib(e,s,Um())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await av(e,n,r,rp(),i);return bN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yb(e),r=new tb(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jd,{type:jd},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[jd];s!==void 0&&n(!!s),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ob(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return FI()||DI()||Lm()}}const kb=xb;var lv="@firebase/auth",uv="1.11.0";/**
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
 */let Nb=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
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
 */function bb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Db(t){_o(new rs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jI(t)},c=new Zk(r,i,s,u);return uN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_o(new rs("auth-internal",e=>{const n=Do(e.getProvider("auth").getImmediate());return(r=>new Nb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ci(lv,uv,bb(t)),ci(lv,uv,"esm2020")}/**
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
 */const Ob=5*60,Lb=pI("authIdTokenMaxAge")||Ob;let cv=null;const Mb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Lb)return;const i=n==null?void 0:n.token;cv!==i&&(cv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vb(t=EI()){const e=Nm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lN(t,{popupRedirectResolver:kb,persistence:[$N,xN,YI]}),r=pI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Mb(s.toString());CN(n,o,()=>o(n.currentUser)),AN(n,l=>o(l))}}const i=dI("auth");return i&&cN(n,`http://${i}`),n}function Ub(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}eN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ub().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Db("Browser");var hv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,r0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function T(){}T.prototype=y.prototype,g.D=y.prototype,g.prototype=new T,g.prototype.constructor=g,g.C=function(I,k,N){for(var A=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)A[Ne-2]=arguments[Ne];return y.prototype[k].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,y,T){T||(T=0);var I=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)I[k]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(k=0;16>k;++k)I[k]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=g.g[0],T=g.g[1],k=g.g[2];var N=g.g[3],A=y+(N^T&(k^N))+I[0]+3614090360&4294967295;y=T+(A<<7&4294967295|A>>>25),A=N+(k^y&(T^k))+I[1]+3905402710&4294967295,N=y+(A<<12&4294967295|A>>>20),A=k+(T^N&(y^T))+I[2]+606105819&4294967295,k=N+(A<<17&4294967295|A>>>15),A=T+(y^k&(N^y))+I[3]+3250441966&4294967295,T=k+(A<<22&4294967295|A>>>10),A=y+(N^T&(k^N))+I[4]+4118548399&4294967295,y=T+(A<<7&4294967295|A>>>25),A=N+(k^y&(T^k))+I[5]+1200080426&4294967295,N=y+(A<<12&4294967295|A>>>20),A=k+(T^N&(y^T))+I[6]+2821735955&4294967295,k=N+(A<<17&4294967295|A>>>15),A=T+(y^k&(N^y))+I[7]+4249261313&4294967295,T=k+(A<<22&4294967295|A>>>10),A=y+(N^T&(k^N))+I[8]+1770035416&4294967295,y=T+(A<<7&4294967295|A>>>25),A=N+(k^y&(T^k))+I[9]+2336552879&4294967295,N=y+(A<<12&4294967295|A>>>20),A=k+(T^N&(y^T))+I[10]+4294925233&4294967295,k=N+(A<<17&4294967295|A>>>15),A=T+(y^k&(N^y))+I[11]+2304563134&4294967295,T=k+(A<<22&4294967295|A>>>10),A=y+(N^T&(k^N))+I[12]+1804603682&4294967295,y=T+(A<<7&4294967295|A>>>25),A=N+(k^y&(T^k))+I[13]+4254626195&4294967295,N=y+(A<<12&4294967295|A>>>20),A=k+(T^N&(y^T))+I[14]+2792965006&4294967295,k=N+(A<<17&4294967295|A>>>15),A=T+(y^k&(N^y))+I[15]+1236535329&4294967295,T=k+(A<<22&4294967295|A>>>10),A=y+(k^N&(T^k))+I[1]+4129170786&4294967295,y=T+(A<<5&4294967295|A>>>27),A=N+(T^k&(y^T))+I[6]+3225465664&4294967295,N=y+(A<<9&4294967295|A>>>23),A=k+(y^T&(N^y))+I[11]+643717713&4294967295,k=N+(A<<14&4294967295|A>>>18),A=T+(N^y&(k^N))+I[0]+3921069994&4294967295,T=k+(A<<20&4294967295|A>>>12),A=y+(k^N&(T^k))+I[5]+3593408605&4294967295,y=T+(A<<5&4294967295|A>>>27),A=N+(T^k&(y^T))+I[10]+38016083&4294967295,N=y+(A<<9&4294967295|A>>>23),A=k+(y^T&(N^y))+I[15]+3634488961&4294967295,k=N+(A<<14&4294967295|A>>>18),A=T+(N^y&(k^N))+I[4]+3889429448&4294967295,T=k+(A<<20&4294967295|A>>>12),A=y+(k^N&(T^k))+I[9]+568446438&4294967295,y=T+(A<<5&4294967295|A>>>27),A=N+(T^k&(y^T))+I[14]+3275163606&4294967295,N=y+(A<<9&4294967295|A>>>23),A=k+(y^T&(N^y))+I[3]+4107603335&4294967295,k=N+(A<<14&4294967295|A>>>18),A=T+(N^y&(k^N))+I[8]+1163531501&4294967295,T=k+(A<<20&4294967295|A>>>12),A=y+(k^N&(T^k))+I[13]+2850285829&4294967295,y=T+(A<<5&4294967295|A>>>27),A=N+(T^k&(y^T))+I[2]+4243563512&4294967295,N=y+(A<<9&4294967295|A>>>23),A=k+(y^T&(N^y))+I[7]+1735328473&4294967295,k=N+(A<<14&4294967295|A>>>18),A=T+(N^y&(k^N))+I[12]+2368359562&4294967295,T=k+(A<<20&4294967295|A>>>12),A=y+(T^k^N)+I[5]+4294588738&4294967295,y=T+(A<<4&4294967295|A>>>28),A=N+(y^T^k)+I[8]+2272392833&4294967295,N=y+(A<<11&4294967295|A>>>21),A=k+(N^y^T)+I[11]+1839030562&4294967295,k=N+(A<<16&4294967295|A>>>16),A=T+(k^N^y)+I[14]+4259657740&4294967295,T=k+(A<<23&4294967295|A>>>9),A=y+(T^k^N)+I[1]+2763975236&4294967295,y=T+(A<<4&4294967295|A>>>28),A=N+(y^T^k)+I[4]+1272893353&4294967295,N=y+(A<<11&4294967295|A>>>21),A=k+(N^y^T)+I[7]+4139469664&4294967295,k=N+(A<<16&4294967295|A>>>16),A=T+(k^N^y)+I[10]+3200236656&4294967295,T=k+(A<<23&4294967295|A>>>9),A=y+(T^k^N)+I[13]+681279174&4294967295,y=T+(A<<4&4294967295|A>>>28),A=N+(y^T^k)+I[0]+3936430074&4294967295,N=y+(A<<11&4294967295|A>>>21),A=k+(N^y^T)+I[3]+3572445317&4294967295,k=N+(A<<16&4294967295|A>>>16),A=T+(k^N^y)+I[6]+76029189&4294967295,T=k+(A<<23&4294967295|A>>>9),A=y+(T^k^N)+I[9]+3654602809&4294967295,y=T+(A<<4&4294967295|A>>>28),A=N+(y^T^k)+I[12]+3873151461&4294967295,N=y+(A<<11&4294967295|A>>>21),A=k+(N^y^T)+I[15]+530742520&4294967295,k=N+(A<<16&4294967295|A>>>16),A=T+(k^N^y)+I[2]+3299628645&4294967295,T=k+(A<<23&4294967295|A>>>9),A=y+(k^(T|~N))+I[0]+4096336452&4294967295,y=T+(A<<6&4294967295|A>>>26),A=N+(T^(y|~k))+I[7]+1126891415&4294967295,N=y+(A<<10&4294967295|A>>>22),A=k+(y^(N|~T))+I[14]+2878612391&4294967295,k=N+(A<<15&4294967295|A>>>17),A=T+(N^(k|~y))+I[5]+4237533241&4294967295,T=k+(A<<21&4294967295|A>>>11),A=y+(k^(T|~N))+I[12]+1700485571&4294967295,y=T+(A<<6&4294967295|A>>>26),A=N+(T^(y|~k))+I[3]+2399980690&4294967295,N=y+(A<<10&4294967295|A>>>22),A=k+(y^(N|~T))+I[10]+4293915773&4294967295,k=N+(A<<15&4294967295|A>>>17),A=T+(N^(k|~y))+I[1]+2240044497&4294967295,T=k+(A<<21&4294967295|A>>>11),A=y+(k^(T|~N))+I[8]+1873313359&4294967295,y=T+(A<<6&4294967295|A>>>26),A=N+(T^(y|~k))+I[15]+4264355552&4294967295,N=y+(A<<10&4294967295|A>>>22),A=k+(y^(N|~T))+I[6]+2734768916&4294967295,k=N+(A<<15&4294967295|A>>>17),A=T+(N^(k|~y))+I[13]+1309151649&4294967295,T=k+(A<<21&4294967295|A>>>11),A=y+(k^(T|~N))+I[4]+4149444226&4294967295,y=T+(A<<6&4294967295|A>>>26),A=N+(T^(y|~k))+I[11]+3174756917&4294967295,N=y+(A<<10&4294967295|A>>>22),A=k+(y^(N|~T))+I[2]+718787259&4294967295,k=N+(A<<15&4294967295|A>>>17),A=T+(N^(k|~y))+I[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,g.g[2]=g.g[2]+k&4294967295,g.g[3]=g.g[3]+N&4294967295}r.prototype.u=function(g,y){y===void 0&&(y=g.length);for(var T=y-this.blockSize,I=this.B,k=this.h,N=0;N<y;){if(k==0)for(;N<=T;)i(this,g,N),N+=this.blockSize;if(typeof g=="string"){for(;N<y;)if(I[k++]=g.charCodeAt(N++),k==this.blockSize){i(this,I),k=0;break}}else for(;N<y;)if(I[k++]=g[N++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;var T=8*this.o;for(y=g.length-8;y<g.length;++y)g[y]=T&255,T/=256;for(this.u(g),g=Array(16),y=T=0;4>y;++y)for(var I=0;32>I;I+=8)g[T++]=this.g[y]>>>I&255;return g};function s(g,y){var T=l;return Object.prototype.hasOwnProperty.call(T,g)?T[g]:T[g]=y(g)}function o(g,y){this.h=y;for(var T=[],I=!0,k=g.length-1;0<=k;k--){var N=g[k]|0;I&&N==y||(T[k]=N,I=!1)}this.g=T}var l={};function u(g){return-128<=g&&128>g?s(g,function(y){return new o([y|0],0>y?-1:0)}):new o([g|0],0>g?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return p;if(0>g)return D(c(-g));for(var y=[],T=1,I=0;g>=T;I++)y[I]=g/T|0,T*=4294967296;return new o(y,0)}function d(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return D(d(g.substring(1),y));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),I=p,k=0;k<g.length;k+=8){var N=Math.min(8,g.length-k),A=parseInt(g.substring(k,k+N),y);8>N?(N=c(Math.pow(y,N)),I=I.j(N).add(c(A))):(I=I.j(T),I=I.add(c(A)))}return I}var p=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var g=0,y=1,T=0;T<this.g.length;T++){var I=this.i(T);g+=(0<=I?I:4294967296+I)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(C(this))return"0";if(P(this))return"-"+D(this).toString(g);for(var y=c(Math.pow(g,6)),T=this,I="";;){var k=L(T,y).g;T=S(T,k.j(y));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(g);if(T=k,C(T))return N+I;for(;6>N.length;)N="0"+N;I=N+I}},t.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function C(g){if(g.h!=0)return!1;for(var y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function P(g){return g.h==-1}t.l=function(g){return g=S(this,g),P(g)?-1:C(g)?0:1};function D(g){for(var y=g.g.length,T=[],I=0;I<y;I++)T[I]=~g.g[I];return new o(T,~g.h).add(m)}t.abs=function(){return P(this)?D(this):this},t.add=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],I=0,k=0;k<=y;k++){var N=I+(this.i(k)&65535)+(g.i(k)&65535),A=(N>>>16)+(this.i(k)>>>16)+(g.i(k)>>>16);I=A>>>16,N&=65535,A&=65535,T[k]=A<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function S(g,y){return g.add(D(y))}t.j=function(g){if(C(this)||C(g))return p;if(P(this))return P(g)?D(this).j(D(g)):D(D(this).j(g));if(P(g))return D(this.j(D(g)));if(0>this.l(E)&&0>g.l(E))return c(this.m()*g.m());for(var y=this.g.length+g.g.length,T=[],I=0;I<2*y;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<g.g.length;k++){var N=this.i(I)>>>16,A=this.i(I)&65535,Ne=g.i(k)>>>16,mt=g.i(k)&65535;T[2*I+2*k]+=A*mt,v(T,2*I+2*k),T[2*I+2*k+1]+=N*mt,v(T,2*I+2*k+1),T[2*I+2*k+1]+=A*Ne,v(T,2*I+2*k+1),T[2*I+2*k+2]+=N*Ne,v(T,2*I+2*k+2)}for(I=0;I<y;I++)T[I]=T[2*I+1]<<16|T[2*I];for(I=y;I<2*y;I++)T[I]=0;return new o(T,0)};function v(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function R(g,y){this.g=g,this.h=y}function L(g,y){if(C(y))throw Error("division by zero");if(C(g))return new R(p,p);if(P(g))return y=L(D(g),y),new R(D(y.g),D(y.h));if(P(y))return y=L(g,D(y)),new R(D(y.g),y.h);if(30<g.g.length){if(P(g)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,I=y;0>=I.l(g);)T=B(T),I=B(I);var k=H(T,1),N=H(I,1);for(I=H(I,2),T=H(T,2);!C(I);){var A=N.add(I);0>=A.l(g)&&(k=k.add(T),N=A),I=H(I,1),T=H(T,1)}return y=S(g,k.j(y)),new R(k,y)}for(k=p;0<=g.l(y);){for(T=Math.max(1,Math.floor(g.m()/y.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),N=c(T),A=N.j(y);P(A)||0<A.l(g);)T-=I,N=c(T),A=N.j(y);C(N)&&(N=m),k=k.add(N),g=S(g,A)}return new R(k,g)}t.A=function(g){return L(this,g).h},t.and=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],I=0;I<y;I++)T[I]=this.i(I)&g.i(I);return new o(T,this.h&g.h)},t.or=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],I=0;I<y;I++)T[I]=this.i(I)|g.i(I);return new o(T,this.h|g.h)},t.xor=function(g){for(var y=Math.max(this.g.length,g.g.length),T=[],I=0;I<y;I++)T[I]=this.i(I)^g.i(I);return new o(T,this.h^g.h)};function B(g){for(var y=g.g.length+1,T=[],I=0;I<y;I++)T[I]=g.i(I)<<1|g.i(I-1)>>>31;return new o(T,g.h)}function H(g,y){var T=y>>5;y%=32;for(var I=g.g.length-T,k=[],N=0;N<I;N++)k[N]=0<y?g.i(N+T)>>>y|g.i(N+T+1)<<32-y:g.i(N+T);return new o(k,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,r0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,di=o}).apply(typeof hv<"u"?hv:typeof self<"u"?self:typeof window<"u"?window:{});var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var i0,Ta,s0,nc,ap,o0,a0,l0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Au=="object"&&Au];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var O=a[_];if(!(O in f))break e;f=f[O]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,_=!1,O={next:function(){if(!_&&f<a.length){var V=f++;return{value:h(V,a[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function E(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,O,V){for(var q=Array(arguments.length-2),be=2;be<arguments.length;be++)q[be-2]=arguments[be];return h.prototype[O].apply(_,q)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function D(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(u(_)){const O=a.length||0,V=_.length||0;a.length=O+V;for(let q=0;q<V;q++)a[O+q]=_[q]}else a.push(_)}}class S{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var B=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function H(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function g(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let f,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(f in _)a[f]=_[f];for(let V=0;V<T.length;V++)f=T[V],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function k(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function A(){var a=re;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ne{constructor(){this.h=this.g=null}add(h,f){const _=mt.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var mt=new S(()=>new On,a=>a.reset());class On{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Bt,W=!1,re=new Ne,ae=()=>{const a=l.Promise.resolve(void 0);Bt=()=>{a.then(Ae)}};var Ae=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(f){N(f)}var h=mt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}W=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var Mt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function Ye(a,h){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(B){e:{try{L(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:gt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ye.aa.h.call(this)}}C(Ye,xe);var gt={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),gs=0;function Kh(a,h,f,_,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=O,this.key=++gs,this.da=this.fa=!1}function ys(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function _s(a){this.src=a,this.g={},this.h=0}_s.prototype.add=function(a,h,f,_,O){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var q=Ln(a,h,_,O);return-1<q?(h=a[q],f||(h.fa=!1)):(h=new Kh(h,this.src,V,!!_,O),h.fa=f,a.push(h)),h};function st(a,h){var f=h.type;if(f in a.g){var _=a.g[f],O=Array.prototype.indexOf.call(_,h,void 0),V;(V=0<=O)&&Array.prototype.splice.call(_,O,1),V&&(ys(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ln(a,h,f,_){for(var O=0;O<a.length;++O){var V=a[O];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==_)return O}return-1}var vs="closure_lm_"+(1e6*Math.random()|0),jo={};function Mn(a,h,f,_,O){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Mn(a,h[V],f,_,O);return null}return f=Nr(f),a&&a[yt]?a.K(h,f,c(_)?!!_.capture:!1,O):Qh(a,h,f,!1,_,O)}function Qh(a,h,f,_,O,V){if(!h)throw Error("Invalid event type");var q=c(O)?!!O.capture:!!O,be=zo(a);if(be||(a[vs]=be=new _s(a)),f=be.add(h,f,_,q,V),f.proxy)return f;if(_=Yh(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Mt||(O=q),O===void 0&&(O=!1),a.addEventListener(h.toString(),_,O);else if(a.attachEvent)a.attachEvent(Hl(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Yh(){function a(f){return h.call(a.src,a.listener,f)}const h=Xh;return a}function $o(a,h,f,_,O){if(Array.isArray(h))for(var V=0;V<h.length;V++)$o(a,h[V],f,_,O);else _=c(_)?!!_.capture:!!_,f=Nr(f),a&&a[yt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],f=Ln(V,f,_,O),-1<f&&(ys(V[f]),Array.prototype.splice.call(V,f,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=zo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Ln(h,f,_,O)),(f=-1<a?h[a]:null)&&Bo(f))}function Bo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[yt])st(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(Hl(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=zo(h))?(st(f,a),f.h==0&&(f.src=null,h[vs]=null)):ys(a)}}}function Hl(a){return a in jo?jo[a]:jo[a]="on"+a}function Xh(a,h){if(a.da)a=!0;else{h=new Ye(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&Bo(a),a=f.call(_,h)}return a}function zo(a){return a=a[vs],a instanceof _s?a:null}var _n="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nr(a){return typeof a=="function"?a:(a[_n]||(a[_n]=function(h){return a.handleEvent(h)}),a[_n])}function ot(){fe.call(this),this.i=new _s(this),this.M=this,this.F=null}C(ot,fe),ot.prototype[yt]=!0,ot.prototype.removeEventListener=function(a,h,f,_){$o(this,a,h,f,_)};function at(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new xe(h,a);else if(h instanceof xe)h.target=h.target||a;else{var O=h;h=new xe(_,a),I(h,O)}if(O=!0,f)for(var V=f.length-1;0<=V;V--){var q=h.g=f[V];O=Yt(q,_,!0,h)&&O}if(q=h.g=a,O=Yt(q,_,!0,h)&&O,O=Yt(q,_,!1,h)&&O,f)for(V=0;V<f.length;V++)q=h.g=f[V],O=Yt(q,_,!1,h)&&O}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)ys(f[_]);delete a.g[h],a.h--}}this.F=null},ot.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ot.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function Yt(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,V=0;V<h.length;++V){var q=h[V];if(q&&!q.da&&q.capture==f){var be=q.listener,vt=q.ha||q.src;q.fa&&st(a.i,q),O=be.call(vt,_)!==!1&&O}}return O&&!_.defaultPrevented}function ln(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ho(a){a.g=ln(()=>{a.g=null,a.i&&(a.i=!1,Ho(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ws extends fe{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ho(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xi(a){fe.call(this),this.h=a,this.g={}}C(xi,fe);var vn=[];function Wo(a){H(a.g,function(h,f){this.g.hasOwnProperty(f)&&Bo(h)},a),a.g={}}xi.prototype.N=function(){xi.aa.N.call(this),Wo(this)},xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Es=l.JSON.stringify,Wl=l.JSON.parse,Jh=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ts(){}Ts.prototype.h=null;function ki(a){return a.h||(a.h=a.i())}function qo(){}var nr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ni(){xe.call(this,"d")}C(Ni,xe);function Go(){xe.call(this,"c")}C(Go,xe);var Vn={},ql=null;function bi(){return ql=ql||new ot}Vn.La="serverreachability";function Di(a){xe.call(this,Vn.La,a)}C(Di,xe);function Un(a){const h=bi();at(h,new Di(h))}Vn.STAT_EVENT="statevent";function Gl(a,h){xe.call(this,Vn.STAT_EVENT,a),this.stat=h}C(Gl,xe);function _t(a){const h=bi();at(h,new Gl(h,a))}Vn.Ma="timingevent";function x(a,h){xe.call(this,Vn.Ma,a),this.size=h}C(x,xe);function b(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function M(){this.g=!0}M.prototype.xa=function(){this.g=!1};function $(a,h,f,_,O,V){a.info(function(){if(a.g)if(V)for(var q="",be=V.split("&"),vt=0;vt<be.length;vt++){var Te=be[vt].split("=");if(1<Te.length){var Ct=Te[0];Te=Te[1];var Rt=Ct.split("_");q=2<=Rt.length&&Rt[1]=="type"?q+(Ct+"="+Te+"&"):q+(Ct+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+h+`
`+f+`
`+q})}function G(a,h,f,_,O,V,q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+h+`
`+f+`
`+V+" "+q})}function ee(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Z(a,f)+(_?" "+_:"")})}function oe(a,h){a.info(function(){return"TIMEOUT: "+h})}M.prototype.info=function(){};function Z(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<O.length;q++)O[q]=""}}}}return Es(f)}catch{return h}}var J={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Y={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},te;function le(){}C(le,Ts),le.prototype.g=function(){return new XMLHttpRequest},le.prototype.i=function(){return{}},te=new le;function he(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new xi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ze}function Ze(){this.i=null,this.g="",this.h=!1}var Ce={},_e={};function Oe(a,h,f){a.L=1,a.v=Xl(or(h)),a.m=f,a.P=!0,rr(a,null)}function rr(a,h){a.F=Date.now(),Vt(a),a.A=or(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Lg(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Ze,a.g=Zg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new ws(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(vn[0]=O.toString()),O=vn);for(var V=0;V<O.length;V++){var q=Mn(f,O[V],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Un(),$(a.i,a.u,a.A,a.l,a.R,a.m)}he.prototype.ca=function(a){a=a.target;const h=this.M;h&&ar(a)==3?h.j():this.Y(a)},he.prototype.Y=function(a){try{if(a==this.g)e:{const Rt=ar(this.g);var h=this.g.Ba();const Cs=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||Bg(this.g)))){this.J||Rt!=4||h==7||(h==8||0>=Cs?Un(3):Un(2)),ir(this);var f=this.g.Z();this.X=f;t:if(br(this)){var _=Bg(this.g);a="";var O=_.length,V=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Xt(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(V&&h==O-1)});_.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,G(this.i,this.u,this.A,this.l,this.R,Rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var be,vt=this.g;if((be=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(be)){var Te=be;break t}}Te=null}if(f=Te)ee(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dr(this,f);else{this.o=!1,this.s=3,_t(12),un(this),Xt(this);break e}}if(this.P){f=!0;let En;for(;!this.J&&this.C<q.length;)if(En=wn(this,q),En==_e){Rt==4&&(this.s=4,_t(14),f=!1),ee(this.i,this.l,null,"[Incomplete Response]");break}else if(En==Ce){this.s=4,_t(15),ee(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else ee(this.i,this.l,En,null),Dr(this,En);if(br(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||q.length!=0||this.h.h||(this.s=1,_t(16),f=!1),this.o=this.o&&f,!f)ee(this.i,this.l,q,"[Invalid Chunked Response]"),un(this),Xt(this);else if(0<q.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),nd(Ct),Ct.M=!0,_t(11))}}else ee(this.i,this.l,q,null),Dr(this,q);Rt==4&&un(this),this.o&&!this.J&&(Rt==4?Qg(this.j,this):(this.o=!1,Vt(this)))}else wA(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),un(this),Xt(this)}}}catch{}finally{}};function br(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function wn(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?_e:(f=Number(h.substring(f,_)),isNaN(f)?Ce:(_+=1,_+f>h.length?_e:(h=h.slice(_,_+f),a.C=_+f,h)))}he.prototype.cancel=function(){this.J=!0,un(this)};function Vt(a){a.S=Date.now()+a.I,Is(a,a.I)}function Is(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=b(m(a.ba,a),h)}function ir(a){a.B&&(l.clearTimeout(a.B),a.B=null)}he.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(oe(this.i,this.A),this.L!=2&&(Un(),_t(17)),un(this),this.s=2,Xt(this)):Is(this,this.S-a)};function Xt(a){a.j.G==0||a.J||Qg(a.j,a)}function un(a){ir(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Wo(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Dr(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||$e(f.h,a))){if(!a.K&&$e(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ru(f),tu(f);else break e;td(f),_t(18)}}else f.za=O[1],0<f.za-f.T&&37500>O[2]&&f.F&&f.v==0&&!f.C&&(f.C=b(m(f.Za,f),6e3));if(1>=Or(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Li(f,11)}else if((a.K||f.g==a)&&ru(f),!v(h))for(O=f.Da.g.parse(h),h=0;h<O.length;h++){let Te=O[h];if(f.T=Te[0],Te=Te[1],f.G==2)if(Te[0]=="c"){f.K=Te[1],f.ia=Te[2];const Ct=Te[3];Ct!=null&&(f.la=Ct,f.j.info("VER="+f.la));const Rt=Te[4];Rt!=null&&(f.Aa=Rt,f.j.info("SVER="+f.Aa));const Cs=Te[5];Cs!=null&&typeof Cs=="number"&&0<Cs&&(_=1.5*Cs,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const En=a.g;if(En){const su=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(su){var V=_.h;V.g||su.indexOf("spdy")==-1&&su.indexOf("quic")==-1&&su.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Fn(V,V.h),V.h=null))}if(_.D){const rd=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;rd&&(_.ya=rd,Ue(_.I,_.D,rd))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var q=a;if(_.qa=Jg(_,_.J?_.ia:null,_.W),q.K){Ko(_.h,q);var be=q,vt=_.L;vt&&(be.I=vt),be.B&&(ir(be),Vt(be)),_.g=q}else Gg(_);0<f.i.length&&nu(f)}else Te[0]!="stop"&&Te[0]!="close"||Li(f,7);else f.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Li(f,7):ed(f):Te[0]!="noop"&&f.l&&f.l.ta(Te),f.v=0)}}Un(4)}catch{}}var ve=class{constructor(a,h){this.g=a,this.map=h}};function Ve(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sr(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Or(a){return a.h?1:a.g?a.g.size:0}function $e(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Fn(a,h){a.g?a.g.add(h):a.h=h}function Ko(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ve.prototype.cancel=function(){if(this.i=Kl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Kl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function sA(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function oA(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function xg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=oA(a),_=sA(a),O=_.length,V=0;V<O;V++)h.call(void 0,_[V],f&&f[V],a)}var kg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aA(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),O=null;if(0<=_){var V=a[f].substring(0,_);O=a[f].substring(_+1)}else V=a[f];h(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Oi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Oi){this.h=a.h,Ql(this,a.j),this.o=a.o,this.g=a.g,Yl(this,a.s),this.l=a.l;var h=a.i,f=new Xo;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Ng(this,f),this.m=a.m}else a&&(h=String(a).match(kg))?(this.h=!1,Ql(this,h[1]||"",!0),this.o=Qo(h[2]||""),this.g=Qo(h[3]||"",!0),Yl(this,h[4]),this.l=Qo(h[5]||"",!0),Ng(this,h[6]||"",!0),this.m=Qo(h[7]||"")):(this.h=!1,this.i=new Xo(null,this.h))}Oi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Yo(h,bg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Yo(h,bg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Yo(f,f.charAt(0)=="/"?cA:uA,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Yo(f,dA)),a.join("")};function or(a){return new Oi(a)}function Ql(a,h,f){a.j=f?Qo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Yl(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ng(a,h,f){h instanceof Xo?(a.i=h,fA(a.i,a.h)):(f||(h=Yo(h,hA)),a.i=new Xo(h,a.h))}function Ue(a,h,f){a.i.set(h,f)}function Xl(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Qo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Yo(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,lA),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function lA(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var bg=/[#\/\?@]/g,uA=/[#\?:]/g,cA=/[#\?]/g,hA=/[#\?@]/g,dA=/#/g;function Xo(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Lr(a){a.g||(a.g=new Map,a.h=0,a.i&&aA(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Xo.prototype,t.add=function(a,h){Lr(this),this.i=null,a=Ss(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Dg(a,h){Lr(a),h=Ss(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Og(a,h){return Lr(a),h=Ss(a,h),a.g.has(h)}t.forEach=function(a,h){Lr(this),this.g.forEach(function(f,_){f.forEach(function(O){a.call(h,O,_,this)},this)},this)},t.na=function(){Lr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const O=a[_];for(let V=0;V<O.length;V++)f.push(h[_])}return f},t.V=function(a){Lr(this);let h=[];if(typeof a=="string")Og(this,a)&&(h=h.concat(this.g.get(Ss(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Lr(this),this.i=null,a=Ss(this,a),Og(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Lg(a,h,f){Dg(a,h),0<f.length&&(a.i=null,a.g.set(Ss(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const V=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var O=V;q[_]!==""&&(O+="="+encodeURIComponent(String(q[_]))),a.push(O)}}return this.i=a.join("&")};function Ss(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function fA(a,h){h&&!a.j&&(Lr(a),a.i=null,a.g.forEach(function(f,_){var O=_.toLowerCase();_!=O&&(Dg(this,_),Lg(this,O,f))},a)),a.j=h}function pA(a,h){const f=new M;if(l.Image){const _=new Image;_.onload=E(Mr,f,"TestLoadImage: loaded",!0,h,_),_.onerror=E(Mr,f,"TestLoadImage: error",!1,h,_),_.onabort=E(Mr,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=E(Mr,f,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function mA(a,h){const f=new M,_=new AbortController,O=setTimeout(()=>{_.abort(),Mr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(O),V.ok?Mr(f,"TestPingServer: ok",!0,h):Mr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Mr(f,"TestPingServer: error",!1,h)})}function Mr(a,h,f,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(f)}catch{}}function gA(){this.g=new Jh}function yA(a,h,f){const _=f||"";try{xg(a,function(O,V){let q=O;c(O)&&(q=Es(O)),h.push(_+V+"="+encodeURIComponent(q))})}catch(O){throw h.push(_+"type="+encodeURIComponent("_badmap")),O}}function Jl(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Jl,Ts),Jl.prototype.g=function(){return new Zl(this.l,this.j)},Jl.prototype.i=function(a){return function(){return a}}({});function Zl(a,h){ot.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Zl,ot),t=Zl.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Zo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Jo(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zo(this)),this.g&&(this.readyState=3,Zo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Jo(this):Zo(this),this.readyState==3&&Mg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Jo(this))},t.Qa=function(a){this.g&&(this.response=a,Jo(this))},t.ga=function(){this.g&&Jo(this)};function Jo(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Zo(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Zo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Zl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vg(a){let h="";return H(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function Zh(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Vg(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ue(a,h,f))}function Ke(a){ot.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ke,ot);var _A=/^https?$/i,vA=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?ki(this.o):ki(te),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Ug(this,V);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)f.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())f.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(vA,h,void 0))||_||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of f)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$g(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Ug(this,V)}};function Ug(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Fg(a),eu(a)}function Fg(a){a.A||(a.A=!0,at(a,"complete"),at(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,at(this,"complete"),at(this,"abort"),eu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),eu(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jg(this):this.bb())},t.bb=function(){jg(this)};function jg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ar(a)!=4||a.Z()!=2)){if(a.u&&ar(a)==4)ln(a.Ea,0,a);else if(at(a,"readystatechange"),ar(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=q===0){var O=String(a.D).match(kg)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),_=!_A.test(O?O.toLowerCase():"")}f=_}if(f)at(a,"complete"),at(a,"success");else{a.m=6;try{var V=2<ar(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Fg(a)}}finally{eu(a)}}}}function eu(a,h){if(a.g){$g(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||at(a,"ready");try{f.onreadystatechange=_}catch{}}}function $g(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ar(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Wl(h)}};function Bg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function wA(a){const h={};a=(a.g&&2<=ar(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(v(a[_]))continue;var f=k(a[_]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[O]||[];h[O]=V,V.push(f)}g(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ea(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function zg(a){this.Aa=0,this.i=[],this.j=new M,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ea("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ea("baseRetryDelayMs",5e3,a),this.cb=ea("retryDelaySeedMs",1e4,a),this.Wa=ea("forwardChannelMaxRetries",2,a),this.wa=ea("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ve(a&&a.concurrentRequestLimit),this.Da=new gA,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){_t(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=Jg(this,null,this.W),nu(this)};function ed(a){if(Hg(a),a.G==3){var h=a.U++,f=or(a.I);if(Ue(f,"SID",a.K),Ue(f,"RID",h),Ue(f,"TYPE","terminate"),ta(a,f),h=new he(a,a.j,h),h.L=2,h.v=Xl(or(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Zg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Vt(h)}Xg(a)}function tu(a){a.g&&(nd(a),a.g.cancel(),a.g=null)}function Hg(a){tu(a),a.u&&(l.clearTimeout(a.u),a.u=null),ru(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function nu(a){if(!sr(a.h)&&!a.s){a.s=!0;var h=a.Ga;Bt||ae(),W||(Bt(),W=!0),re.add(h,a),a.B=0}}function EA(a,h){return Or(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=b(m(a.Ga,a,h),Yg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new he(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),I(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=qg(this,O,h),f=or(this.I),Ue(f,"RID",a),Ue(f,"CVER",22),this.D&&Ue(f,"X-HTTP-Session-Id",this.D),ta(this,f),V&&(this.O?h="headers="+encodeURIComponent(String(Vg(V)))+"&"+h:this.m&&Zh(f,this.m,V)),Fn(this.h,O),this.Ua&&Ue(f,"TYPE","init"),this.P?(Ue(f,"$req",h),Ue(f,"SID","null"),O.T=!0,Oe(O,f,null)):Oe(O,f,h),this.G=2}}else this.G==3&&(a?Wg(this,a):this.i.length==0||sr(this.h)||Wg(this))};function Wg(a,h){var f;h?f=h.l:f=a.U++;const _=or(a.I);Ue(_,"SID",a.K),Ue(_,"RID",f),Ue(_,"AID",a.T),ta(a,_),a.m&&a.o&&Zh(_,a.m,a.o),f=new he(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=qg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Fn(a.h,f),Oe(f,_,h)}function ta(a,h){a.H&&H(a.H,function(f,_){Ue(h,_,f)}),a.l&&xg({},function(f,_){Ue(h,_,f)})}function qg(a,h,f){f=Math.min(a.i.length,f);var _=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let V=-1;for(;;){const q=["count="+f];V==-1?0<f?(V=O[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let be=!0;for(let vt=0;vt<f;vt++){let Te=O[vt].g;const Ct=O[vt].map;if(Te-=V,0>Te)V=Math.max(0,O[vt].g-100),be=!1;else try{yA(Ct,q,"req"+Te+"_")}catch{_&&_(Ct)}}if(be){_=q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function Gg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Bt||ae(),W||(Bt(),W=!0),re.add(h,a),a.v=0}}function td(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=b(m(a.Fa,a),Yg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=b(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),tu(this),Kg(this))};function nd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Kg(a){a.g=new he(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=or(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),ta(a,h),a.m&&a.o&&Zh(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Xl(or(h)),f.m=null,f.P=!0,rr(f,a)}t.Za=function(){this.C!=null&&(this.C=null,tu(this),td(this),_t(19))};function ru(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Qg(a,h){var f=null;if(a.g==h){ru(a),nd(a),a.g=null;var _=2}else if($e(a.h,h))f=h.D,Ko(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;_=bi(),at(_,new x(_,f)),nu(a)}else Gg(a);else if(O=h.s,O==3||O==0&&0<h.X||!(_==1&&EA(a,h)||_==2&&td(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),O){case 1:Li(a,5);break;case 4:Li(a,10);break;case 3:Li(a,6);break;default:Li(a,2)}}}function Yg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Li(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),_=a.Xa;const O=!_;_=new Oi(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ql(_,"https"),Xl(_),O?pA(_.toString(),f):mA(_.toString(),f)}else _t(2);a.G=0,a.l&&a.l.sa(h),Xg(a),Hg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Xg(a){if(a.G=0,a.ka=[],a.l){const h=Kl(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Jg(a,h,f){var _=f instanceof Oi?or(f):new Oi(f);if(_.g!="")h&&(_.g=h+"."+_.g),Yl(_,_.s);else{var O=l.location;_=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var V=new Oi(null);_&&Ql(V,_),h&&(V.g=h),O&&Yl(V,O),f&&(V.l=f),_=V}return f=a.D,h=a.ya,f&&h&&Ue(_,f,h),Ue(_,"VER",a.la),ta(a,_),_}function Zg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new Jl({eb:f})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ey(){}t=ey.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function iu(){}iu.prototype.g=function(a,h){return new Jt(a,h)};function Jt(a,h){ot.call(this),this.g=new zg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new As(this)}C(Jt,ot),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){ed(this.g)},Jt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Es(a),a=f);h.i.push(new ve(h.Ya++,a)),h.G==3&&nu(h)},Jt.prototype.N=function(){this.g.l=null,delete this.j,ed(this.g),delete this.g,Jt.aa.N.call(this)};function ty(a){Ni.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(ty,Ni);function ny(){Go.call(this),this.status=1}C(ny,Go);function As(a){this.g=a}C(As,ey),As.prototype.ua=function(){at(this.g,"a")},As.prototype.ta=function(a){at(this.g,new ty(a))},As.prototype.sa=function(a){at(this.g,new ny)},As.prototype.ra=function(){at(this.g,"b")},iu.prototype.createWebChannel=iu.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,l0=function(){return new iu},a0=function(){return bi()},o0=Vn,ap={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},J.NO_ERROR=0,J.TIMEOUT=8,J.HTTP_ERROR=6,nc=J,Y.COMPLETE="complete",s0=Y,qo.EventType=nr,nr.OPEN="a",nr.CLOSE="b",nr.ERROR="c",nr.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Ta=qo,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,i0=Ke}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});const dv="@firebase/firestore",fv="4.9.0";/**
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
 */let Lo="12.0.0";/**
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
 */const ss=new xm("@firebase/firestore");function xs(){return ss.logLevel}function Q(t,...e){if(ss.logLevel<=me.DEBUG){const n=e.map(jm);ss.debug(`Firestore (${Lo}): ${t}`,...n)}}function Ar(t,...e){if(ss.logLevel<=me.ERROR){const n=e.map(jm);ss.error(`Firestore (${Lo}): ${t}`,...n)}}function wo(t,...e){if(ss.logLevel<=me.WARN){const n=e.map(jm);ss.warn(`Firestore (${Lo}): ${t}`,...n)}}function jm(t){if(typeof t=="string")return t;try{/**
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
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,u0(t,r,n)}function u0(t,e,n){let r=`FIRESTORE (${Lo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ar(r),new Error(r)}function Se(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||u0(e,i,r)}function ue(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends us{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class c0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}}class jb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $b{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new c0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new Nt(e)}}class Bb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Bb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Se(this.o===void 0,3512);const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new pv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Wb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class $m{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Wb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function lp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return $d(i)===$d(s)?ge(i,s):$d(i)?1:-1}return ge(t.length,e.length)}const qb=55296,Gb=57343;function $d(t){const e=t.charCodeAt(0);return e>=qb&&e<=Gb}function Eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const mv="__name__";class zn{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return zn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof zn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=zn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ge(e.length,n.length)}static compareSegments(e,n){const r=zn.isNumericId(e),i=zn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?zn.extractNumericId(e).compare(zn.extractNumericId(n)):lp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return di.fromString(e.substring(4,e.length-2))}}class Le extends zn{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const Kb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends zn{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return Kb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===mv}static keyField(){return new Tt([mv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
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
 */function h0(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Qb(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function gv(t){if(!ne.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yv(t){if(ne.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function d0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Nh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function hl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nh(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function it(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ml(t,e){if(!d0(t))throw new K(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new K(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const _v=-62135596800,vv=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*vv);return new ke(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_v)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vv}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ml(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_v;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:it("string",ke._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
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
 */const dl=-1;function Yb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ce.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new yi(i,ne.empty(),e)}function Xb(t){return new yi(t.readTime,t.key,dl)}class yi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yi(ce.min(),ne.empty(),dl)}static max(){return new yi(ce.max(),ne.empty(),dl)}}function Jb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const Zb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mo(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==Zb)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function tD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}bh.ce=-1;/**
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
 */const Bm=-1;function Dh(t){return t==null}function qc(t){return t===0&&1/t==-1/0}function nD(t){return typeof t=="number"&&Number.isInteger(t)&&!qc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const f0="";function rD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=wv(e)),e=iD(t.get(n),e);return wv(e)}function iD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case f0:n+="";break;default:n+=s}}return n}function wv(t){return t+f0+""}/**
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
 */function Ev(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function sD(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function p0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||Et.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cu(this.root,e,this.comparator,!0)}}class Cu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Et.RED,this.left=i??Et.EMPTY,this.right=s??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Et(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tv(this.data.getIterator())}getIteratorFrom(e){return new Tv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Tv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Pn{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new Pn([])}unionWith(e){let n=new ct(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class m0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new m0("Invalid base64 string: "+s):s}}(e);return new At(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new At(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const oD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(t){if(Se(!!t,39018),typeof t=="string"){let e=0;const n=oD.exec(t);if(Se(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function vi(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
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
 */const g0="server_timestamp",y0="__type__",_0="__previous_value__",v0="__local_write_time__";function zm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[y0])==null?void 0:r.stringValue)===g0}function Oh(t){const e=t.mapValue.fields[_0];return zm(e)?Oh(e):e}function fl(t){const e=_i(t.mapValue.fields[v0].timestampValue);return new ke(e.seconds,e.nanos)}/**
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
 */class aD{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Gc="(default)";class pl{constructor(e,n){this.projectId=e,this.database=n||Gc}static empty(){return new pl("","")}get isDefaultDatabase(){return this.database===Gc}isEqual(e){return e instanceof pl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const w0="__type__",lD="__max__",Ru={mapValue:{}},E0="__vector__",Kc="value";function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zm(t)?4:cD(t)?9007199254740991:uD(t)?10:11:se(28295,{value:t})}function er(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fl(t).isEqual(fl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_i(i.timestampValue),l=_i(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return vi(i.bytesValue).isEqual(vi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Xe(i.geoPointValue.latitude)===Xe(s.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Xe(i.integerValue)===Xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Xe(i.doubleValue),l=Xe(s.doubleValue);return o===l?qc(o)===qc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Eo(t.arrayValue.values||[],e.arrayValue.values||[],er);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ev(o)!==Ev(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!er(o[u],l[u])))return!1;return!0}(t,e);default:return se(52216,{left:t})}}function ml(t,e){return(t.values||[]).find(n=>er(n,e))!==void 0}function To(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Xe(s.integerValue||s.doubleValue),u=Xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Iv(t.timestampValue,e.timestampValue);case 4:return Iv(fl(t),fl(e));case 5:return lp(t.stringValue,e.stringValue);case 6:return function(s,o){const l=vi(s),u=vi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ge(l[c],u[c]);if(d!==0)return d}return ge(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ge(Xe(s.latitude),Xe(o.latitude));return l!==0?l:ge(Xe(s.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,E,C,P;const l=s.fields||{},u=o.fields||{},c=(m=l[Kc])==null?void 0:m.arrayValue,d=(E=u[Kc])==null?void 0:E.arrayValue,p=ge(((C=c==null?void 0:c.values)==null?void 0:C.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return p!==0?p:Sv(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ru.mapValue&&o===Ru.mapValue)return 0;if(s===Ru.mapValue)return 1;if(o===Ru.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=lp(u[p],d[p]);if(m!==0)return m;const E=To(l[u[p]],c[d[p]]);if(E!==0)return E}return ge(u.length,d.length)}(t.mapValue,e.mapValue);default:throw se(23264,{he:n})}}function Iv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=_i(t),r=_i(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function Sv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=To(n[i],r[i]);if(s)return s}return ge(n.length,r.length)}function Io(t){return up(t)}function up(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_i(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return vi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=up(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${up(n.fields[o])}`;return i+"}"}(t.mapValue):se(61005,{value:t})}function rc(t){switch(wi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oh(t);return e?16+rc(e):16;case 5:return 2*t.stringValue.length;case 6:return vi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+rc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return hs(r.fields,(s,o)=>{i+=s.length+rc(o)}),i}(t.mapValue);default:throw se(13486,{value:t})}}function Av(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cp(t){return!!t&&"integerValue"in t}function Hm(t){return!!t&&"arrayValue"in t}function Cv(t){return!!t&&"nullValue"in t}function Rv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ic(t){return!!t&&"mapValue"in t}function uD(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[w0])==null?void 0:r.stringValue)===E0}function Ma(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return hs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ma(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ma(t.arrayValue.values[n]);return e}return{...t}}function cD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===lD}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ic(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ma(n)}setAll(e){let n=Tt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ma(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return er(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dn(Ma(this.value))}}function T0(t){const e=[];return hs(t.fields,(n,r)=>{const i=new Tt([n]);if(ic(r)){const s=T0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pn(e)}/**
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
 */class Dt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Dt(e,0,ce.min(),ce.min(),ce.min(),dn.empty(),0)}static newFoundDocument(e,n,r,i){return new Dt(e,1,n,ce.min(),r,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,ce.min(),ce.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,ce.min(),ce.min(),dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qc{constructor(e,n){this.position=e,this.inclusive=n}}function Pv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=To(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function xv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!er(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class gl{constructor(e,n="asc"){this.field=e,this.dir=n}}function hD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class I0{}class rt extends I0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fD(e,n,r):n==="array-contains"?new gD(e,r):n==="in"?new yD(e,r):n==="not-in"?new _D(e,r):n==="array-contains-any"?new vD(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pD(e,r):new mD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(To(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(To(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends I0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Dn(e,n)}matches(e){return S0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function S0(t){return t.op==="and"}function A0(t){return dD(t)&&S0(t)}function dD(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function hp(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+Io(t.value);if(A0(t))return t.filters.map(e=>hp(e)).join(",");{const e=t.filters.map(n=>hp(n)).join(",");return`${t.op}(${e})`}}function C0(t,e){return t instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&er(r.value,i.value)}(t,e):t instanceof Dn?function(r,i){return i instanceof Dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&C0(o,i.filters[l]),!0):!1}(t,e):void se(19439)}function R0(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${Io(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(R0).join(" ,")+"}"}(t):"Filter"}class fD extends rt{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class pD extends rt{constructor(e,n){super(e,"in",n),this.keys=P0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mD extends rt{constructor(e,n){super(e,"not-in",n),this.keys=P0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function P0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class gD extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hm(n)&&ml(n.arrayValue,this.value)}}class yD extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ml(this.value.arrayValue,n)}}class _D extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ml(this.value.arrayValue,n)}}class vD extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ml(this.value.arrayValue,r))}}/**
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
 */class wD{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function kv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wD(t,e,n,r,i,s,o)}function Wm(t){const e=ue(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Dh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),e.Te=n}return e.Te}function qm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!C0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xv(t.startAt,e.startAt)&&xv(t.endAt,e.endAt)}function dp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Uo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ED(t,e,n,r,i,s,o,l){return new Uo(t,e,n,r,i,s,o,l)}function x0(t){return new Uo(t)}function Nv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function k0(t){return t.collectionGroup!==null}function Va(t){const e=ue(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ct(Tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new gl(s,r))}),n.has(Tt.keyField().canonicalString())||e.Ie.push(new gl(Tt.keyField(),r))}return e.Ie}function Yn(t){const e=ue(t);return e.Ee||(e.Ee=N0(e,Va(t))),e.Ee}function TD(t){const e=ue(t);return e.de||(e.de=N0(e,t.explicitOrderBy)),e.de}function N0(t,e){if(t.limitType==="F")return kv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gl(i.field,s)});const n=t.endAt?new Qc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qc(t.startAt.position,t.startAt.inclusive):null;return kv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fp(t,e){const n=t.filters.concat([e]);return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yc(t,e,n){return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lh(t,e){return qm(Yn(t),Yn(e))&&t.limitType===e.limitType}function b0(t){return`${Wm(Yn(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>R0(i)).join(", ")}]`),Dh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Io(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Io(i)).join(",")),`Target(${r})`}(Yn(t))}; limitType=${t.limitType})`}function Mh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Va(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Pv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Va(r),i)||r.endAt&&!function(o,l,u){const c=Pv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Va(r),i))}(t,e)}function ID(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function D0(t){return(e,n)=>{let r=!1;for(const i of Va(t)){const s=SD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function SD(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?To(u,c):se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
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
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return p0(this.inner)}size(){return this.innerSize}}/**
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
 */const AD=new Ge(ne.comparator);function Cr(){return AD}const O0=new Ge(ne.comparator);function Ia(...t){let e=O0;for(const n of t)e=e.insert(n.key,n);return e}function L0(t){let e=O0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wi(){return Ua()}function M0(){return Ua()}function Ua(){return new ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const CD=new Ge(ne.comparator),RD=new ct(ne.comparator);function ye(...t){let e=RD;for(const n of t)e=e.add(n);return e}const PD=new ct(ge);function xD(){return PD}/**
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
 */function Gm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qc(e)?"-0":e}}function V0(t){return{integerValue:""+t}}function kD(t,e){return nD(e)?V0(e):Gm(t,e)}/**
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
 */class Vh{constructor(){this._=void 0}}function ND(t,e,n){return t instanceof yl?function(i,s){const o={fields:{[y0]:{stringValue:g0},[v0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&zm(s)&&(s=Oh(s)),s&&(o.fields[_0]=s),{mapValue:o}}(n,e):t instanceof _l?F0(t,e):t instanceof vl?j0(t,e):function(i,s){const o=U0(i,s),l=bv(o)+bv(i.Ae);return cp(o)&&cp(i.Ae)?V0(l):Gm(i.serializer,l)}(t,e)}function bD(t,e,n){return t instanceof _l?F0(t,e):t instanceof vl?j0(t,e):n}function U0(t,e){return t instanceof Xc?function(r){return cp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yl extends Vh{}class _l extends Vh{constructor(e){super(),this.elements=e}}function F0(t,e){const n=$0(e);for(const r of t.elements)n.some(i=>er(i,r))||n.push(r);return{arrayValue:{values:n}}}class vl extends Vh{constructor(e){super(),this.elements=e}}function j0(t,e){let n=$0(e);for(const r of t.elements)n=n.filter(i=>!er(i,r));return{arrayValue:{values:n}}}class Xc extends Vh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function bv(t){return Xe(t.integerValue||t.doubleValue)}function $0(t){return Hm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class DD{constructor(e,n){this.field=e,this.transform=n}}function OD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof _l&&i instanceof _l||r instanceof vl&&i instanceof vl?Eo(r.elements,i.elements,er):r instanceof Xc&&i instanceof Xc?er(r.Ae,i.Ae):r instanceof yl&&i instanceof yl}(t.transform,e.transform)}class LD{constructor(e,n){this.version=e,this.transformResults=n}}class yr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yr}static exists(e){return new yr(void 0,e)}static updateTime(e){return new yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uh{}function B0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new H0(t.key,yr.none()):new Vl(t.key,t.data,yr.none());{const n=t.data,r=dn.empty();let i=new ct(Tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fs(t.key,r,new Pn(i.toArray()),yr.none())}}function MD(t,e,n){t instanceof Vl?function(i,s,o){const l=i.value.clone(),u=Ov(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof fs?function(i,s,o){if(!sc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ov(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(z0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fa(t,e,n,r){return t instanceof Vl?function(s,o,l,u){if(!sc(s.precondition,o))return l;const c=s.value.clone(),d=Lv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fs?function(s,o,l,u){if(!sc(s.precondition,o))return l;const c=Lv(s.fieldTransforms,u,o),d=o.data;return d.setAll(z0(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return sc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function VD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=U0(r.transform,i||null);s!=null&&(n===null&&(n=dn.empty()),n.set(r.field,s))}return n||null}function Dv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Eo(r,i,(s,o)=>OD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vl extends Uh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fs extends Uh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function z0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ov(t,e,n){const r=new Map;Se(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,bD(o,l,n[i]))}return r}function Lv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ND(s,o,e))}return r}class H0 extends Uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UD extends Uh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&MD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=M0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=B0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(n,r)=>Dv(n,r))&&Eo(this.baseMutations,e.baseMutations,(n,r)=>Dv(n,r))}}class Km{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return CD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Km(e,n,r,i)}}/**
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
 */class jD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $D{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class BD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,we;function zD(t){switch(t){case F.OK:return se(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function W0(t){if(t===void 0)return Ar("GRPC error has no .code"),F.UNKNOWN;switch(t){case et.OK:return F.OK;case et.CANCELLED:return F.CANCELLED;case et.UNKNOWN:return F.UNKNOWN;case et.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case et.INTERNAL:return F.INTERNAL;case et.UNAVAILABLE:return F.UNAVAILABLE;case et.UNAUTHENTICATED:return F.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case et.NOT_FOUND:return F.NOT_FOUND;case et.ALREADY_EXISTS:return F.ALREADY_EXISTS;case et.PERMISSION_DENIED:return F.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case et.ABORTED:return F.ABORTED;case et.OUT_OF_RANGE:return F.OUT_OF_RANGE;case et.UNIMPLEMENTED:return F.UNIMPLEMENTED;case et.DATA_LOSS:return F.DATA_LOSS;default:return se(39323,{code:t})}}(we=et||(et={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function HD(){return new TextEncoder}/**
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
 */const WD=new di([4294967295,4294967295],0);function Mv(t){const e=HD().encode(t),n=new r0;return n.update(e),new Uint8Array(n.digest())}function Vv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new di([n,r],0),new di([i,s],0)]}class Qm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Sa(`Invalid padding: ${n}`);if(r<0)throw new Sa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Sa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=di.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(di.fromNumber(r)));return i.compare(WD)===1&&(i=new di([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Mv(e),[r,i]=Vv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Qm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Mv(e),[r,i]=Vv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ul.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fh(ce.min(),i,new Ge(ge),Cr(),ye())}}class Ul{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ul(r,n,ye(),ye(),ye())}}/**
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
 */class oc{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class q0{constructor(e,n){this.targetId=e,this.Ce=n}}class G0{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Uv{constructor(){this.ve=0,this.Fe=Fv(),this.Me=At.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:se(38017,{changeType:s})}}),new Ul(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Fv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class qD{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cr(),this.Je=Pu(),this.He=Pu(),this.Ye=new Ge(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(dp(s))if(r===0){const o=new ne(s.path);this.et(n,o,Dt.newNoDocument(o,ce.min()))}else Se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=vi(r).toUint8Array()}catch(u){if(u instanceof m0)return wo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Qm(o,i,s)}catch(u){return wo(u instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&dp(l.target)){const u=new ne(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Dt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ye();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Fh(e,n,this.Ye,this.je,r);return this.je=Cr(),this.Je=Pu(),this.He=Pu(),this.Ye=new Ge(ge),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Uv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ct(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ct(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Uv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Pu(){return new Ge(ne.comparator)}function Fv(){return new Ge(ne.comparator)}const GD={asc:"ASCENDING",desc:"DESCENDING"},KD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QD={and:"AND",or:"OR"};class YD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pp(t,e){return t.useProto3Json||Dh(e)?e:{value:e}}function Jc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function K0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function XD(t,e){return Jc(t,e.toTimestamp())}function Xn(t){return Se(!!t,49232),ce.fromTimestamp(function(n){const r=_i(n);return new ke(r.seconds,r.nanos)}(t))}function Ym(t,e){return mp(t,e).canonicalString()}function mp(t,e){const n=function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Q0(t){const e=Le.fromString(t);return Se(tS(e),10190,{key:e.toString()}),e}function gp(t,e){return Ym(t.databaseId,e.path)}function Bd(t,e){const n=Q0(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(X0(n))}function Y0(t,e){return Ym(t.databaseId,e)}function JD(t){const e=Q0(t);return e.length===4?Le.emptyPath():X0(e)}function yp(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function X0(t){return Se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function jv(t,e,n){return{name:gp(t,e),fields:n.value.mapValue.fields}}function ZD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:se(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(Se(d===void 0||typeof d=="string",58123),At.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),At.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?F.UNKNOWN:W0(c.code);return new K(d,c.message||"")}(o);n=new G0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bd(t,r.document.name),s=Xn(r.document.updateTime),o=r.document.createTime?Xn(r.document.createTime):ce.min(),l=new dn({mapValue:{fields:r.document.fields}}),u=Dt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new oc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Bd(t,r.document),s=r.readTime?Xn(r.readTime):ce.min(),o=Dt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new oc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Bd(t,r.document),s=r.removedTargetIds||[];n=new oc([],s,i,null)}else{if(!("filter"in e))return se(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new BD(i,s),l=r.targetId;n=new q0(l,o)}}return n}function eO(t,e){let n;if(e instanceof Vl)n={update:jv(t,e.key,e.value)};else if(e instanceof H0)n={delete:gp(t,e.key)};else if(e instanceof fs)n={update:jv(t,e.key,e.data),updateMask:uO(e.fieldMask)};else{if(!(e instanceof UD))return se(16599,{Vt:e.type});n={verify:gp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof yl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _l)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw se(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:XD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se(27497)}(t,e.precondition)),n}function tO(t,e){return t&&t.length>0?(Se(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Xn(i.updateTime):Xn(s);return o.isEqual(ce.min())&&(o=Xn(s)),new LD(o,i.transformResults||[])}(n,e))):[]}function nO(t,e){return{documents:[Y0(t,e.path)]}}function J0(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Y0(t,i);const s=function(c){if(c.length!==0)return eS(Dn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Qr(m.field),direction:oO(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=pp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function rO(t,e,n,r){const{ft:i,parent:s}=J0(t,e),o={},l=[];let u=0;return n.forEach(c=>{const d="aggregate_"+u++;o[d]=c.alias,c.aggregateType==="count"?l.push({alias:d,count:{}}):c.aggregateType==="avg"?l.push({alias:d,avg:{field:Qr(c.fieldPath)}}):c.aggregateType==="sum"&&l.push({alias:d,sum:{field:Qr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:i.structuredQuery},parent:i.parent},gt:o,parent:s}}function iO(t){let e=JD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=Z0(p);return m instanceof Dn&&A0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new gl(Ns(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Dh(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,E=p.values||[];return new Qc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,E=p.values||[];return new Qc(E,m)}(n.endAt)),ED(e,i,o,s,l,"F",u,c)}function sO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Z0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ns(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ns(n.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ns(n.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ns(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Ns(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>Z0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return se(1026)}}(n.compositeFilter.op))}(t):se(30097,{filter:t})}function oO(t){return GD[t]}function aO(t){return KD[t]}function lO(t){return QD[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Ns(t){return Tt.fromServerFormat(t.fieldPath)}function eS(t){return t instanceof rt?function(n){if(n.op==="=="){if(Rv(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rv(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(Cv(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:aO(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(i=>eS(i));return r.length===1?r[0]:{compositeFilter:{op:lO(n.op),filters:r}}}(t):se(54877,{filter:t})}function uO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Zr{constructor(e,n,r,i,s=ce.min(),o=ce.min(),l=At.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Zr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cO{constructor(e){this.yt=e}}function hO(t){const e=iO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yc(e,e.limit,"L"):e}/**
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
 */class dO{constructor(){this.Cn=new fO}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(yi.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class fO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ct(Le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ct(Le.comparator)).toArray()}}/**
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
 */const $v={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nS=41943040;class Ht{static withCacheSize(e){return new Ht(e,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ht.DEFAULT_COLLECTION_PERCENTILE=10,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ht.DEFAULT=new Ht(nS,Ht.DEFAULT_COLLECTION_PERCENTILE,Ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ht.DISABLED=new Ht(-1,0,0);/**
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
 */class So{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new So(0)}static cr(){return new So(-1)}}/**
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
 */const Bv="LruGarbageCollector",pO=1048576;function zv([t,e],[n,r]){const i=ge(t,n);return i===0?ge(e,r):i}class mO{constructor(e){this.Ir=e,this.buffer=new ct(zv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();zv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class gO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Q(Bv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vo(n)?Q(Bv,"Ignoring IndexedDB error during garbage collection: ",n):await Mo(n)}await this.Vr(3e5)})}}class yO{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(bh.ce);const r=new mO(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve($v)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$v):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),xs()<=me.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function _O(t,e){return new yO(t,e)}/**
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
 */class vO{constructor(){this.changes=new ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class EO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Fa(r.mutation,i,Pn.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const i=Wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ia();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cr();const o=Ua(),l=function(){return Ua()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof fs)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Fa(d.mutation,c,d.mutation.getFieldMask(),ke.now())):o.set(c.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new wO(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ua();let i=new Ge((o,l)=>o-l),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Pn.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ye()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=M0();d.forEach(m=>{if(!s.has(m)){const E=B0(n.get(m),r.get(m));E!==null&&p.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):k0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Wi());let l=dl,u=s;return o.next(c=>j.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ye())).next(d=>({batchId:l,changes:L0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=Ia();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ia();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(p,m){return new Uo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,Dt.newInvalidDocument(d)))});let l=Ia();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Fa(d.mutation,c,Pn.empty(),ke.now()),Mh(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class TO{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:hO(i.bundledQuery),readTime:Xn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class IO{constructor(){this.overlays=new Ge(ne.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wi();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Wi(),s=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ge((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Wi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Wi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return j.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jD(n,r));let s=this.qr.get(n);s===void 0&&(s=ye(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class SO{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Xm{constructor(){this.Qr=new ct(ht.$r),this.Ur=new ct(ht.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ht(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ht(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ne(new Le([])),r=new ht(n,e),i=new ht(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new Le([])),r=new ht(n,e),i=new ht(n,e+1);let s=ye();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ht(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ht{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
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
 */class AO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ct(ht.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new ht(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Bm:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ht(n,0),i=new ht(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(ge);return n.forEach(i=>{const s=new ht(i,0),o=new ht(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new ht(new ne(s),0);let l=new ct(ge);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,i=>{const s=new ht(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ht(n,0),i=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class CO{constructor(e){this.ri=e,this.docs=function(){return new Ge(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Dt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cr();const o=n.path,l=new ne(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Jb(Xb(d),r)<=0||(i.has(d.key)||Mh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){se(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new RO(this)}getSize(e){return j.resolve(this.size)}}class RO extends vO{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class PO{constructor(e){this.persistence=e,this.si=new ds(n=>Wm(n),qm),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.oi=0,this._i=new Xm,this.targetCount=0,this.ai=So.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new So(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
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
 */class rS{constructor(e,n){this.ui={},this.overlays={},this.ci=new bh(0),this.li=!1,this.li=!0,this.hi=new SO,this.referenceDelegate=e(this),this.Pi=new PO(this),this.indexManager=new dO,this.remoteDocumentCache=function(i){return new CO(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new cO(n),this.Ii=new TO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new IO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new AO(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new xO(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class xO extends eD{constructor(e){super(),this.currentSequenceNumber=e}}class Jm{constructor(e){this.persistence=e,this.Ri=new Xm,this.Vi=null}static mi(e){return new Jm(e)}get fi(){if(this.Vi)return this.Vi;throw se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const i=ne.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,ce.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Zc{constructor(e,n){this.persistence=e,this.pi=new ds(r=>rD(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=_O(this,n)}static mi(e,n){return new Zc(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?j.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ce.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=rc(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return j.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Zm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ye(),i=ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zm(e,n.fromCache,r,i)}}/**
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
 */class kO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class NO{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return ax()?8:tD(Lt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new kO;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(xs()<=me.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(xs()<=me.DEBUG&&Q("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(xs()<=me.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):j.resolve())}ys(e,n){if(Nv(n))return j.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yc(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ye(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Yc(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Nv(n)||i.isEqual(ce.min())?j.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?j.resolve(null):(xs()<=me.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ks(n)),this.vs(e,o,n,Yb(i,dl)).next(l=>l))})}Ds(e,n){let r=new ct(D0(e));return n.forEach((i,s)=>{Mh(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return xs()<=me.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",ks(n)),this.ps.getDocumentsMatchingQuery(e,n,yi.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const eg="LocalStore",bO=3e8;class DO{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ge(ge),this.xs=new ds(s=>Wm(s),qm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EO(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function OO(t,e,n,r){return new DO(t,e,n,r)}async function iS(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ye();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function LO(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let E=j.resolve();return m.forEach(C=>{E=E.next(()=>d.getEntry(u,C)).next(P=>{const D=c.docVersions.get(C);Se(D!==null,48541),P.version.compareTo(D)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ye();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function sS(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function MO(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,p)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(At.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(p,E),function(P,D,S){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=bO?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,E,d)&&l.push(n.Pi.updateTargetData(s,E))});let u=Cr(),c=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(VO(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(ce.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function VO(t,e,n){let r=ye(),i=ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ce.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Q(eg,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function UO(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Bm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function FO(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Zr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function _p(t,e,n){const r=ue(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vo(o))throw o;Q(eg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Hv(t,e,n){const r=ue(t);let i=ce.min(),s=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=ue(u),m=p.xs.get(d);return m!==void 0?j.resolve(p.Ms.get(m)):p.Pi.getTargetData(c,d)}(r,o,Yn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:ce.min(),n?s:ye())).next(l=>(jO(r,ID(e),l),{documents:l,Qs:s})))}function jO(t,e,n){let r=t.Os.get(e)||ce.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Wv{constructor(){this.activeTargetIds=xD()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $O{constructor(){this.Mo=new Wv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Wv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BO{Oo(e){}shutdown(){}}/**
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
 */const qv="ConnectivityMonitor";class Gv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Q(qv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Q(qv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xu=null;function vp(){return xu===null?xu=function(){return 268435456+Math.round(2147483648*Math.random())}():xu++,"0x"+xu.toString(16)}/**
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
 */const zd="RestConnection",zO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class HO{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Gc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=vp(),l=this.zo(e,n.toUriEncodedString());Q(zd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=No(c);return this.Jo(e,l,u,r,d).then(p=>(Q(zd,`Received RPC '${e}' ${o}: `,p),p),p=>{throw wo(zd,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Lo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=zO[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class WO{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const kt="WebChannelConnection";class qO extends HO{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=vp();return new Promise((l,u)=>{const c=new i0;c.setWithCredentials(!0),c.listenOnce(s0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case nc.NO_ERROR:const p=c.getResponseJson();Q(kt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case nc.TIMEOUT:Q(kt,`RPC '${e}' ${o} timed out`),u(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const m=c.getStatus();if(Q(kt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const C=E==null?void 0:E.error;if(C&&C.status&&C.message){const P=function(S){const v=S.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(v)>=0?v:F.UNKNOWN}(C.status);u(new K(P,C.message))}else u(new K(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new K(F.UNAVAILABLE,"Connection failed."));break;default:se(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{Q(kt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Q(kt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=vp(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=l0(),l=a0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");Q(kt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);this.I_(p);let m=!1,E=!1;const C=new WO({Yo:D=>{E?Q(kt,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(m||(Q(kt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),Q(kt,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},Zo:()=>p.close()}),P=(D,S,v)=>{D.listen(S,R=>{try{v(R)}catch(L){setTimeout(()=>{throw L},0)}})};return P(p,Ta.EventType.OPEN,()=>{E||(Q(kt,`RPC '${e}' stream ${i} transport opened.`),C.o_())}),P(p,Ta.EventType.CLOSE,()=>{E||(E=!0,Q(kt,`RPC '${e}' stream ${i} transport closed`),C.a_(),this.E_(p))}),P(p,Ta.EventType.ERROR,D=>{E||(E=!0,wo(kt,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),C.a_(new K(F.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ta.EventType.MESSAGE,D=>{var S;if(!E){const v=D.data[0];Se(!!v,16349);const R=v,L=(R==null?void 0:R.error)||((S=R[0])==null?void 0:S.error);if(L){Q(kt,`RPC '${e}' stream ${i} received error:`,L);const B=L.status;let H=function(T){const I=et[T];if(I!==void 0)return W0(I)}(B),g=L.message;H===void 0&&(H=F.INTERNAL,g="Unknown error status: "+B+" with message "+L.message),E=!0,C.a_(new K(H,g)),p.close()}else Q(kt,`RPC '${e}' stream ${i} received:`,v),C.u_(v)}}),P(l,o0.STAT_EVENT,D=>{D.stat===ap.PROXY?Q(kt,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===ap.NOPROXY&&Q(kt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.__()},0),C}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Hd(){return typeof document<"u"?document:null}/**
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
 */function jh(t){return new YD(t,!0)}/**
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
 */class oS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Kv="PersistentStream";class aS{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new oS(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Ar(n.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(Kv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Q(Kv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GO extends aS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ZD(this.serializer,e),r=function(s){if(!("targetChange"in s))return ce.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?Xn(o.readTime):ce.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=yp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=dp(u)?{documents:nO(s,u)}:{query:J0(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=K0(s,o.resumeToken);const c=pp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(ce.min())>0){l.readTime=Jc(s,o.snapshotVersion.toTimestamp());const c=pp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=sO(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=yp(this.serializer),n.removeTarget=e,this.q_(n)}}class KO extends aS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=tO(e.writeResults,e.commitTime),r=Xn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=yp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eO(this.serializer,r))};this.q_(n)}}/**
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
 */class QO{}class YO extends QO{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,mp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,mp(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class XO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const os="RemoteStore";class JO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{ps(this)&&(Q(os,"Restarting streams for network reachability change."),await async function(u){const c=ue(u);c.Ea.add(4),await Fl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await $h(c)}(this))})}),this.Ra=new XO(r,i)}}async function $h(t){if(ps(t))for(const e of t.da)await e(!0)}async function Fl(t){for(const e of t.da)await e(!1)}function lS(t,e){const n=ue(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ig(n)?rg(n):Fo(n).O_()&&ng(n,e))}function tg(t,e){const n=ue(t),r=Fo(n);n.Ia.delete(e),r.O_()&&uS(n,e),n.Ia.size===0&&(r.O_()?r.L_():ps(n)&&n.Ra.set("Unknown"))}function ng(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fo(t).Y_(e)}function uS(t,e){t.Va.Ue(e),Fo(t).Z_(e)}function rg(t){t.Va=new qD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Fo(t).start(),t.Ra.ua()}function ig(t){return ps(t)&&!Fo(t).x_()&&t.Ia.size>0}function ps(t){return ue(t).Ea.size===0}function cS(t){t.Va=void 0}async function ZO(t){t.Ra.set("Online")}async function e2(t){t.Ia.forEach((e,n)=>{ng(t,e)})}async function t2(t,e){cS(t),ig(t)?(t.Ra.ha(e),rg(t)):t.Ra.set("Unknown")}async function n2(t,e,n){if(t.Ra.set("Online"),e instanceof G0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){Q(os,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eh(t,r)}else if(e instanceof oc?t.Va.Ze(e):e instanceof q0?t.Va.st(e):t.Va.tt(e),!n.isEqual(ce.min()))try{const r=await sS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(At.EMPTY_BYTE_STRING,d.snapshotVersion)),uS(s,u);const p=new Zr(d.target,u,c,d.sequenceNumber);ng(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Q(os,"Failed to raise snapshot:",r),await eh(t,r)}}async function eh(t,e,n){if(!Vo(e))throw e;t.Ea.add(1),await Fl(t),t.Ra.set("Offline"),n||(n=()=>sS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q(os,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await $h(t)})}function hS(t,e){return e().catch(n=>eh(t,n,e))}async function Bh(t){const e=ue(t),n=Ei(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bm;for(;r2(e);)try{const i=await UO(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,i2(e,i)}catch(i){await eh(e,i)}dS(e)&&fS(e)}function r2(t){return ps(t)&&t.Ta.length<10}function i2(t,e){t.Ta.push(e);const n=Ei(t);n.O_()&&n.X_&&n.ea(e.mutations)}function dS(t){return ps(t)&&!Ei(t).x_()&&t.Ta.length>0}function fS(t){Ei(t).start()}async function s2(t){Ei(t).ra()}async function o2(t){const e=Ei(t);for(const n of t.Ta)e.ea(n.mutations)}async function a2(t,e,n){const r=t.Ta.shift(),i=Km.from(r,e,n);await hS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bh(t)}async function l2(t,e){e&&Ei(t).X_&&await async function(r,i){if(function(o){return zD(o)&&o!==F.ABORTED}(i.code)){const s=r.Ta.shift();Ei(r).B_(),await hS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Bh(r)}}(t,e),dS(t)&&fS(t)}async function Qv(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),Q(os,"RemoteStore received new credentials");const r=ps(n);n.Ea.add(3),await Fl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await $h(n)}async function u2(t,e){const n=ue(t);e?(n.Ea.delete(2),await $h(n)):e||(n.Ea.add(2),await Fl(n),n.Ra.set("Unknown"))}function Fo(t){return t.ma||(t.ma=function(n,r,i){const s=ue(n);return s.sa(),new GO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:ZO.bind(null,t),t_:e2.bind(null,t),r_:t2.bind(null,t),H_:n2.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),ig(t)?rg(t):t.Ra.set("Unknown")):(await t.ma.stop(),cS(t))})),t.ma}function Ei(t){return t.fa||(t.fa=function(n,r,i){const s=ue(n);return s.sa(),new KO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:s2.bind(null,t),r_:l2.bind(null,t),ta:o2.bind(null,t),na:a2.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Bh(t)):(await t.fa.stop(),t.Ta.length>0&&(Q(os,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class sg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new sg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function og(t,e){if(Ar("AsyncQueue",`${e}: ${t}`),Vo(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ro{static emptySet(e){return new ro(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Ia(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ro)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ro;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Yv{constructor(){this.ga=new Ge(ne.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):se(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ao{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ao(e,n,ro.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class c2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class h2{constructor(){this.queries=Xv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ue(n),s=i.queries;i.queries=Xv(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function Xv(){return new ds(t=>b0(t),Lh)}async function d2(t,e){const n=ue(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new c2,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=og(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&ag(n)}async function f2(t,e){const n=ue(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function p2(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&ag(n)}function m2(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function ag(t){t.Ca.forEach(e=>{e.next()})}var wp,Jv;(Jv=wp||(wp={})).Ma="default",Jv.Cache="cache";class g2{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==wp.Cache}}/**
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
 */class pS{constructor(e){this.key=e}}class mS{constructor(e){this.key=e}}class y2{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ye(),this.mutatedKeys=ye(),this.eu=D0(e),this.tu=new ro(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Yv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),E=Mh(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;m&&E?m.data.isEqual(E.data)?C!==P&&(r.track({type:3,doc:E}),D=!0):this.su(m,E)||(r.track({type:2,doc:E}),D=!0,(u&&this.eu(E,u)>0||c&&this.eu(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),D=!0):m&&!E&&(r.track({type:1,doc:m}),D=!0,(u||c)&&(l=!0)),D&&(E?(o=o.add(E),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(E,C){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{Rt:D})}};return P(E)-P(C)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Ao(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ye(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new mS(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new pS(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ao.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const lg="SyncEngine";class _2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class v2{constructor(e){this.key=e,this.hu=!1}}class w2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ds(l=>b0(l),Lh),this.Iu=new Map,this.Eu=new Set,this.du=new Ge(ne.comparator),this.Au=new Map,this.Ru=new Xm,this.Vu={},this.mu=new Map,this.fu=So.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function E2(t,e,n=!0){const r=ES(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await gS(r,e,n,!0),i}async function T2(t,e){const n=ES(t);await gS(n,e,!0,!1)}async function gS(t,e,n,r){const i=await FO(t.localStore,Yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await I2(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&lS(t.remoteStore,i),l}async function I2(t,e,n,r,i){t.pu=(p,m,E)=>async function(P,D,S,v){let R=D.view.ru(S);R.Cs&&(R=await Hv(P.localStore,D.query,!1).then(({documents:g})=>D.view.ru(g,R)));const L=v&&v.targetChanges.get(D.targetId),B=v&&v.targetMismatches.get(D.targetId)!=null,H=D.view.applyChanges(R,P.isPrimaryClient,L,B);return ew(P,D.targetId,H.au),H.snapshot}(t,p,m,E);const s=await Hv(t.localStore,e,!0),o=new y2(e,s.Qs),l=o.ru(s.documents),u=Ul.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);ew(t,n,c.au);const d=new _2(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function S2(t,e,n){const r=ue(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Lh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await _p(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&tg(r.remoteStore,i.targetId),Ep(r,i.targetId)}).catch(Mo)):(Ep(r,i.targetId),await _p(r.localStore,i.targetId,!0))}async function A2(t,e){const n=ue(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),tg(n.remoteStore,r.targetId))}async function C2(t,e,n){const r=D2(t);try{const i=await function(o,l){const u=ue(o),c=ke.now(),d=l.reduce((E,C)=>E.add(C.key),ye());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let C=Cr(),P=ye();return u.Ns.getEntries(E,d).next(D=>{C=D,C.forEach((S,v)=>{v.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,C)).next(D=>{p=D;const S=[];for(const v of l){const R=VD(v,p.get(v.key).overlayedDocument);R!=null&&S.push(new fs(v.key,R,T0(R.value.mapValue),yr.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,S,l)}).next(D=>{m=D;const S=D.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(E,D.batchId,S)})}).then(()=>({batchId:m.batchId,changes:L0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ge(ge)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await jl(r,i.changes),await Bh(r.remoteStore)}catch(i){const s=og(i,"Failed to persist write");n.reject(s)}}async function yS(t,e){const n=ue(t);try{const r=await MO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Se(o.hu,14607):i.removedDocuments.size>0&&(Se(o.hu,42227),o.hu=!1))}),await jl(n,r,e)}catch(r){await Mo(r)}}function Zv(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ue(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(l)&&(c=!0)}),c&&ag(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function R2(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ge(ne.comparator);o=o.insert(s,Dt.newNoDocument(s,ce.min()));const l=ye().add(s),u=new Fh(ce.min(),new Map,new Ge(ge),o,l);await yS(r,u),r.du=r.du.remove(s),r.Au.delete(e),ug(r)}else await _p(r.localStore,e,!1).then(()=>Ep(r,e,n)).catch(Mo)}async function P2(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await LO(n.localStore,e);vS(n,r,null),_S(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jl(n,i)}catch(i){await Mo(i)}}async function x2(t,e,n){const r=ue(t);try{const i=await function(o,l){const u=ue(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(Se(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);vS(r,e,n),_S(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jl(r,i)}catch(i){await Mo(i)}}function _S(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function vS(t,e,n){const r=ue(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Ep(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||wS(t,r)})}function wS(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(tg(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),ug(t))}function ew(t,e,n){for(const r of n)r instanceof pS?(t.Ru.addReference(r.key,e),k2(t,r)):r instanceof mS?(Q(lg,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||wS(t,r.key)):se(19791,{wu:r})}function k2(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Q(lg,"New document in limbo: "+n),t.Eu.add(r),ug(t))}function ug(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(Le.fromString(e)),r=t.fu.next();t.Au.set(r,new v2(n)),t.du=t.du.insert(n,r),lS(t.remoteStore,new Zr(Yn(x0(n.path)),r,"TargetPurposeLimboResolution",bh.ce))}}async function jl(t,e,n){const r=ue(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Zm.As(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=ue(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>j.forEach(c,m=>j.forEach(m.Es,E=>d.persistence.referenceDelegate.addReference(p,m.targetId,E)).next(()=>j.forEach(m.ds,E=>d.persistence.referenceDelegate.removeReference(p,m.targetId,E)))))}catch(p){if(!Vo(p))throw p;Q(eg,"Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const E=d.Ms.get(m),C=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(C);d.Ms=d.Ms.insert(m,P)}}}(r.localStore,s))}async function N2(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){Q(lg,"User change. New user:",e.toKey());const r=await iS(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jl(n,r.Ls)}}function b2(t,e){const n=ue(t),r=n.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let i=ye();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function ES(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=b2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=R2.bind(null,e),e.Pu.H_=p2.bind(null,e.eventManager),e.Pu.yu=m2.bind(null,e.eventManager),e}function D2(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=x2.bind(null,e),e}class th{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=jh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return OO(this.persistence,new NO,e.initialUser,this.serializer)}Cu(e){return new rS(Jm.mi,this.serializer)}Du(e){return new $O}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}th.provider={build:()=>new th};class O2 extends th{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Se(this.persistence.referenceDelegate instanceof Zc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new gO(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ht.withCacheSize(this.cacheSizeBytes):Ht.DEFAULT;return new rS(r=>Zc.mi(r,n),this.serializer)}}class Tp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=N2.bind(null,this.syncEngine),await u2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new h2}()}createDatastore(e){const n=jh(e.databaseInfo.databaseId),r=function(s){return new qO(s)}(e.databaseInfo);return function(s,o,l,u){return new YO(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new JO(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Zv(this.syncEngine,n,0),function(){return Gv.v()?new Gv:new BO}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new w2(i,s,o,l,u,c);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ue(i);Q(os,"RemoteStore shutting down."),s.Ea.add(5),await Fl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Tp.provider={build:()=>new Tp};/**
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
 */class L2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ti="FirestoreClient";class M2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Nt.UNAUTHENTICATED,this.clientId=$m.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Q(Ti,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q(Ti,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=og(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wd(t,e){t.asyncQueue.verifyOperationInProgress(),Q(Ti,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await iS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await V2(t);Q(Ti,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qv(e.remoteStore,i)),t._onlineComponents=e}async function V2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q(Ti,"Using user provided OfflineComponentProvider");try{await Wd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;wo("Error using user provided cache. Falling back to memory cache: "+n),await Wd(t,new th)}}else Q(Ti,"Using default OfflineComponentProvider"),await Wd(t,new O2(void 0));return t._offlineComponents}async function cg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q(Ti,"Using user provided OnlineComponentProvider"),await tw(t,t._uninitializedComponentsProvider._online)):(Q(Ti,"Using default OnlineComponentProvider"),await tw(t,new Tp))),t._onlineComponents}function U2(t){return cg(t).then(e=>e.syncEngine)}function F2(t){return cg(t).then(e=>e.datastore)}async function j2(t){const e=await cg(t),n=e.eventManager;return n.onListen=E2.bind(null,e.syncEngine),n.onUnlisten=S2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=T2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=A2.bind(null,e.syncEngine),n}function $2(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new L2({next:m=>{d.Nu(),o.enqueueAndForget(()=>f2(s,p)),m.fromCache&&u.source==="server"?c.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new g2(l,d,{includeMetadataChanges:!0,qa:!0});return d2(s,p)}(await j2(t),t.asyncQueue,e,n,r)),r.promise}function B2(t,e,n){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await F2(t);r.resolve(async function(o,l,u){var P;const c=ue(o),{request:d,gt:p,parent:m}=rO(c.serializer,TD(l),u);c.connection.$o||delete d.parent;const E=(await c.Ho("RunAggregationQuery",c.serializer.databaseId,m,d,1)).filter(D=>!!D.result);Se(E.length===1,64727);const C=(P=E[0].result)==null?void 0:P.aggregateFields;return Object.keys(C).reduce((D,S)=>(D[p[S]]=C[S],D),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
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
 */function TS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const nw=new Map;/**
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
 */const IS="firestore.googleapis.com",rw=!0;class iw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=IS,this.ssl=rw}else this.host=e.host,this.ssl=e.ssl??rw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<pO)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fb;switch(r.type){case"firstParty":return new zb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=nw.get(n);r&&(Q("ComponentProvider","Removing Datastore"),nw.delete(n),r.terminate())}(this),Promise.resolve()}}function z2(t,e,n,r={}){var c;t=hl(t,zh);const i=No(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(mI(`https://${l}`),gI("Firestore",!0)),s.host!==IS&&s.host!==l&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ns(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=Nt.MOCK_USER;else{d=JP(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Nt(m)}t._authCredentials=new jb(new c0(d,p))}}/**
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
 */class Pi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pi(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ml(n,ft._jsonSchema))return new ft(e,r||null,new ne(Le.fromString(n.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:it("string",ft._jsonSchemaVersion),referencePath:it("string")};class fi extends Pi{constructor(e,n,r){super(e,n,x0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new ne(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function wl(t,e,...n){if(t=sn(t),h0("collection","path",e),t instanceof zh){const r=Le.fromString(e,...n);return yv(r),new fi(t,null,r)}{if(!(t instanceof ft||t instanceof fi))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return yv(r),new fi(t.firestore,null,r)}}function H2(t,e,...n){if(t=sn(t),arguments.length===1&&(e=$m.newId()),h0("doc","path",e),t instanceof zh){const r=Le.fromString(e,...n);return gv(r),new ft(t,null,new ne(r))}{if(!(t instanceof ft||t instanceof fi))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return gv(r),new ft(t.firestore,t instanceof fi?t.converter:null,new ne(r))}}/**
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
 */const sw="AsyncQueue";class ow{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new oS(this,"async_queue_retry"),this._c=()=>{const r=Hd();r&&Q(sw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Hd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new gr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Vo(e))throw e;Q(sw,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ar("INTERNAL UNHANDLED ERROR: ",aw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=sg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&se(47125,{Pc:aw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function aw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Hh extends zh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ow,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ow(e),this._firestoreClient=void 0,await e}}}function W2(t,e){const n=typeof t=="object"?t:EI(),r=typeof t=="string"?t:Gc,i=Nm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=YP("firestore");s&&z2(i,...s)}return i}function hg(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||q2(t),t._firestoreClient}function q2(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new aD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,TS(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new M2(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class G2{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class K2{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(At.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fn(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ml(e,fn._jsonSchema))return fn.fromBase64String(e.bytes)}}fn._jsonSchemaVersion="firestore/bytes/1.0",fn._jsonSchema={type:it("string",fn._jsonSchemaVersion),bytes:it("string")};/**
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
 */class dg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fg{constructor(e){this._methodName=e}}/**
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
 */class Jn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jn._jsonSchemaVersion}}static fromJSON(e){if(Ml(e,Jn._jsonSchema))return new Jn(e.latitude,e.longitude)}}Jn._jsonSchemaVersion="firestore/geoPoint/1.0",Jn._jsonSchema={type:it("string",Jn._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
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
 */class Zn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Zn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ml(e,Zn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Zn(e.vectorValues);throw new K(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Zn._jsonSchemaVersion="firestore/vectorValue/1.0",Zn._jsonSchema={type:it("string",Zn._jsonSchemaVersion),vectorValues:it("object")};/**
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
 */const Q2=/^__.*__$/;class Y2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vl(e,this.data,n,this.fieldTransforms)}}function SS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{Ac:t})}}class pg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new pg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return nh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(SS(this.Ac)&&Q2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class X2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jh(e)}Cc(e,n,r,i=!1){return new pg({Ac:e,methodName:n,Dc:r,path:Tt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function AS(t){const e=t._freezeSettings(),n=jh(t._databaseId);return new X2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function J2(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);PS("Data must be an object, but it was:",o,r);const l=CS(r,o);let u,c;if(s.merge)u=new Pn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=eL(e,p,n);if(!o.contains(m))throw new K(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);nL(d,m)||d.push(m)}u=new Pn(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new Y2(new dn(l),u,c)}class mg extends fg{_toFieldTransform(e){return new DD(e.path,new yl)}isEqual(e){return e instanceof mg}}function Z2(t,e,n,r=!1){return gg(n,t.Cc(r?4:3,e))}function gg(t,e){if(RS(t=sn(t)))return PS("Unsupported field value:",e,t),CS(t,e);if(t instanceof fg)return function(r,i){if(!SS(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=gg(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=sn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:Jc(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jc(i.serializer,s)}}if(r instanceof Jn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fn)return{bytesValue:K0(i.serializer,r._byteString)};if(r instanceof ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ym(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zn)return function(o,l){return{mapValue:{fields:{[w0]:{stringValue:E0},[Kc]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Gm(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Nh(r)}`)}(t,e)}function CS(t,e){const n={};return p0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(t,(r,i)=>{const s=gg(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function RS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Jn||t instanceof fn||t instanceof ft||t instanceof fg||t instanceof Zn)}function PS(t,e,n){if(!RS(n)||!d0(n)){const r=Nh(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function eL(t,e,n){if((e=sn(e))instanceof dg)return e._internalPath;if(typeof e=="string")return xS(t,e);throw nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const tL=new RegExp("[~\\*/\\[\\]]");function xS(t,e,n){if(e.search(tL)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dg(...e.split("."))._internalPath}catch{throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,l+t+u)}function nL(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class kS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rL extends kS{data(){return super.data()}}function Wh(t,e){return typeof e=="string"?xS(t,e):e instanceof dg?e._internalPath:e._delegate._internalPath}/**
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
 */function iL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yg{}class _g extends yg{}function bs(t,e,...n){let r=[];e instanceof yg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof vg).length,l=s.filter(u=>u instanceof qh).length;if(o>1||o>0&&l>0)throw new K(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class qh extends _g{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new qh(e,n,r)}_apply(e){const n=this._parse(e);return NS(e._query,n),new Pi(e.firestore,e.converter,fp(e._query,n))}_parse(e){const n=AS(e.firestore);return function(s,o,l,u,c,d,p){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){uw(p,d);const C=[];for(const P of p)C.push(lw(u,s,P));m={arrayValue:{values:C}}}else m=lw(u,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||uw(p,d),m=Z2(l,o,p,d==="in"||d==="not-in");return rt.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qi(t,e,n){const r=e,i=Wh("where",t);return qh._create(i,r,n)}class vg extends yg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new vg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)NS(o,u),o=fp(o,u)}(e._query,n),new Pi(e.firestore,e.converter,fp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class wg extends _g{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new wg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gl(s,o)}(e._query,this._field,this._direction);return new Pi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Uo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function sL(t,e="asc"){const n=e,r=Wh("orderBy",t);return wg._create(r,n)}class Eg extends _g{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Eg(e,n,r)}_apply(e){return new Pi(e.firestore,e.converter,Yc(e._query,this._limit,this._limitType))}}function oL(t){return Eg._create("limit",t,"F")}function lw(t,e,n){if(typeof(n=sn(n))=="string"){if(n==="")throw new K(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!k0(e)&&n.indexOf("/")!==-1)throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!ne.isDocumentKey(r))throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Av(t,new ne(r))}if(n instanceof ft)return Av(t,n._key);throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nh(n)}.`)}function uw(t,e){if(!Array.isArray(t)||t.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class aL{convertValue(e,n="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Kc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Xe(o.doubleValue));return new Zn(n)}convertGeoPoint(e){return new Jn(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Oh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fl(e));default:return null}}convertTimestamp(e){const n=_i(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Se(tS(r),9688,{name:e});const i=new pl(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||Ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function lL(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function uL(){return new G2("count")}class ku{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class io extends kS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=io._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}io._jsonSchemaVersion="firestore/documentSnapshot/1.0",io._jsonSchema={type:it("string",io._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class ac extends io{data(e={}){return super.data(e)}}class so{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ku(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ac(this._firestore,this._userDataWriter,r.key,r,new ku(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new ac(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ku(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new ac(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ku(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:cL(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=so._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$m.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}so._jsonSchemaVersion="firestore/querySnapshot/1.0",so._jsonSchema={type:it("string",so._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};class bS extends aL{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function Tg(t){t=hl(t,Pi);const e=hl(t.firestore,Hh),n=hg(e),r=new bS(e);return iL(t._query),$2(n,t._query).then(i=>new so(e,r,t,i))}function hL(t,e){const n=hl(t.firestore,Hh),r=H2(t),i=lL(t.converter,e);return dL(n,[J2(AS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,yr.exists(!1))]).then(()=>r)}function dL(t,e){return function(r,i){const s=new gr;return r.asyncQueue.enqueueAndForget(async()=>C2(await U2(r),i,s)),s.promise}(hg(t),e)}function fL(t){return pL(t,{count:uL()})}function pL(t,e){const n=hl(t.firestore,Hh),r=hg(n),i=sD(e,(s,o)=>new $D(o,s.aggregateType,s._internalFieldPath));return B2(r,t._query,i).then(s=>function(l,u,c){const d=new bS(l);return new K2(u,d,c)}(n,t,s))}function mL(){return new mg("serverTimestamp")}(function(e,n=!0){(function(i){Lo=i})(bo),_o(new rs("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Hh(new $b(r.getProvider("auth-internal")),new Hb(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pl(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ci(dv,fv,e),ci(dv,fv,"esm2020")})();const gL={apiKey:"AIzaSyCWfqdRcuoy8opgUwyWAUbc6iVmtw1wSfE",authDomain:"limlim-32e6a.firebaseapp.com",projectId:"limlim-32e6a",storageBucket:void 0,messagingSenderId:void 0,appId:"1:525168702365:web:79f3fe9d2ea7a77bd0f574"},DS=wI(gL),Ig=Vb(DS),El=W2(DS);function OS(t,e){const[n,r,i]=t.split("-").map(Number),[s,o]=e.split(":").map(Number);return ke.fromDate(new Date(n,r-1,i,s,o,0))}async function yL({date:t,time:e}){if(!t||!e)return{available:!1};const n=OS(t,e),r=90*60*1e3,i=ke.fromMillis(n.toMillis()-r),s=ke.fromMillis(n.toMillis()+r),o=bs(wl(El,"bookings"),qi("startAt",">=",i),qi("startAt","<=",s),qi("status","in",["pending","confirmed"]));return{available:(await Tg(o)).empty}}async function _L({package:t,date:e,time:n,details:r}){const i=OS(e,n),s={reference:`BK-${Math.random().toString(36).slice(2,8).toUpperCase()}`,status:"pending",package:t,date:e,time:n,startAt:i,details:r,createdAt:mL()};return{id:(await hL(wl(El,"bookings"),s)).id,reference:s.reference}}const qd=[{id:"portrait",name:"Portrait",price:250,duration:"60–90 min",desc:"Clean, crisp portraits in studio or on location.",includes:["Up to 2 outfits","15 edited photos","Online gallery"]},{id:"event",name:"Event",price:700,duration:"3 hours",desc:"Coverage for birthdays, engagements, and more.",includes:["Candid + posed","Next-day sneak peek","Highlight reel add-on"]},{id:"wedding",name:"Wedding",price:2200,duration:"8 hours",desc:"Story-driven wedding coverage for your day.",includes:["Timeline planning","Second shooter (optional)","Album-ready edits"]}];function vL(){const[t,e]=U.useState(0),[n,r]=U.useState(qd[0]),[i,s]=U.useState(""),[o,l]=U.useState(""),[u,c]=U.useState(!1),[d,p]=U.useState(null),[m,E]=U.useState({name:"",email:"",phone:"",location:"Studio"}),[C,P]=U.useState(!1),[D,S]=U.useState(null),v=!!n,R=!!i&&!!o&&d===!0,L=m.name&&m.email&&m.phone,B=async()=>{c(!0),p(null);const y=await yL({date:i,time:o});p(y.available),c(!1)},H=async()=>{P(!0);const y=await _L({package:n,date:i,time:o,details:m});S(y),P(!1)},g=()=>{e(0),r(qd[0]),s(""),l(""),p(null),E({name:"",email:"",phone:"",location:"Studio"}),P(!1),S(null)};return w.jsx("section",{id:"booking",className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsxs("div",{className:"flex items-center justify-between mb-6",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Book a Session"}),w.jsxs("p",{className:"text-charcoal/70 mt-1",children:["Complete the steps to request your slot. ",w.jsx("span",{className:"text-rose/80",children:"(Demo only—no emails are sent.)"})]})]}),w.jsx(jP,{step:t})]}),w.jsxs("div",{className:"glass p-5 md:p-6 rounded-2xl border border-rose/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white/80",children:[t===0&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Choose a package"}),w.jsxs("p",{className:"text-charcoal/70 text-sm mt-1",children:["You’ve selected ",w.jsx("span",{className:"font-semibold text-rose",children:n.name}),"."]}),w.jsx("div",{className:"mt-6 grid md:grid-cols-3 gap-6",children:qd.map(y=>w.jsx($P,{p:y,selected:y.id===n.id,onSelect:()=>r(y)},y.id))}),w.jsx("div",{className:"mt-6 flex justify-end",children:w.jsx("button",{onClick:()=>e(1),disabled:!v,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${v?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})})]}),t===1&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Pick date & time"}),w.jsxs("div",{className:"mt-4 grid md:grid-cols-3 gap-4",children:[w.jsxs("div",{className:"col-span-1",children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Date"}),w.jsx("input",{type:"date",value:i,onChange:y=>s(y.target.value),className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"})]}),w.jsxs("div",{className:"col-span-1",children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Time"}),w.jsx("input",{type:"time",value:o,onChange:y=>l(y.target.value),className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"})]}),w.jsx("div",{className:"col-span-1 flex items-end",children:w.jsx("button",{onClick:B,disabled:!i||!o||u,className:`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${!i||!o||u?"bg-blush text-charcoal/50 cursor-not-allowed":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:u?"Checking...":"Check Availability"})})]}),d===!0&&w.jsx("p",{className:"mt-3 text-sm text-green-700",children:"✅ Slot available. You can proceed."}),d===!1&&w.jsx("p",{className:"mt-3 text-sm text-red-700",children:"❌ Sorry, that time is taken. Try a different time."}),w.jsxs("div",{className:"mt-6 flex justify-between",children:[w.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(0),children:"← Back"}),w.jsx("button",{onClick:()=>e(2),disabled:!R,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${R?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})]})]}),t===2&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Your details"}),w.jsxs("div",{className:"mt-4 grid md:grid-cols-2 gap-4",children:[w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Full name"}),w.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:m.name,onChange:y=>E({...m,name:y.target.value}),placeholder:"e.g., Lama NC"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Email"}),w.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:m.email,onChange:y=>E({...m,email:y.target.value}),placeholder:"you@example.com"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Phone"}),w.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:m.phone,onChange:y=>E({...m,phone:y.target.value}),placeholder:"(555) 123-4567"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Location"}),w.jsxs("select",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:m.location,onChange:y=>E({...m,location:y.target.value}),children:[w.jsx("option",{children:"Studio"}),w.jsx("option",{children:"Client Location"}),w.jsx("option",{children:"Outdoors"})]})]})]}),w.jsxs("div",{className:"mt-6 flex justify-between",children:[w.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(1),children:"← Back"}),w.jsx("button",{onClick:()=>e(3),disabled:!L,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${L?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})]})]}),t===3&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Review & confirm"}),w.jsxs("div",{className:"mt-4 grid md:grid-cols-2 gap-6",children:[w.jsxs("div",{className:"p-4 rounded-xl border border-rose/30 bg-blush/20",children:[w.jsx("h4",{className:"font-semibold text-charcoal",children:"Summary"}),w.jsxs("ul",{className:"mt-2 text-sm text-charcoal/80 space-y-1",children:[w.jsxs("li",{children:["Package: ",w.jsx("span",{className:"font-medium text-rose",children:n.name})," — $",n.price]}),w.jsxs("li",{children:["Date & Time: ",w.jsxs("span",{className:"font-medium",children:[i||"—"," ",o||""]})]}),w.jsxs("li",{children:["Duration: ",n.duration]}),w.jsxs("li",{children:["Location: ",m.location]})]})]}),w.jsxs("div",{className:"p-4 rounded-xl border border-rose/30 bg-blush/20",children:[w.jsx("h4",{className:"font-semibold text-charcoal",children:"Contact"}),w.jsxs("ul",{className:"mt-2 text-sm text-charcoal/80 space-y-1",children:[w.jsxs("li",{children:["Name: ",m.name||"—"]}),w.jsxs("li",{children:["Email: ",m.email||"—"]}),w.jsxs("li",{children:["Phone: ",m.phone||"—"]})]})]})]}),D?w.jsxs("div",{className:"mt-6 rounded-xl border border-rose/30 p-4 bg-blush/20",children:[w.jsx("p",{className:"font-semibold text-charcoal",children:"🎉 Booking requested!"}),w.jsxs("p",{className:"text-sm text-charcoal/80 mt-1",children:["Your reference: ",w.jsx("span",{className:"font-mono text-rose",children:D.reference}),"."]}),w.jsx("div",{className:"mt-4 flex gap-3",children:w.jsx("button",{onClick:g,className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Book Another"})})]}):w.jsxs("div",{className:"mt-6 flex justify-between",children:[w.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(2),children:"← Back"}),w.jsx("button",{onClick:H,disabled:C,className:"rounded-full px-5 py-3 text-sm font-semibold shadow-md bg-gold text-charcoal hover:bg-rose hover:text-ivory transition-all",children:C?"Submitting...":"Confirm Booking"})]})]})]})]})})}function wL(){const t=[{q:"How fast do I get photos?",a:"Sneak peeks within 24–48 hours. Full galleries typically within 10–14 days."},{q:"Do you travel?",a:"Yes! Travel within 25 miles is included. Beyond that, a small fee applies."},{q:"Can I reschedule?",a:"Absolutely—please let me know 48 hours in advance when possible."},{q:"Do you offer video?",a:"Yes, as an add-on for events and weddings. Ask for bundles."}];return w.jsx("section",{id:"faq",className:"w-full py-16 md:py-24 bg-pink-50",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-pink-700",children:"FAQ"}),w.jsx("div",{className:"mt-6 grid md:grid-cols-2 gap-4",children:t.map((e,n)=>w.jsxs("div",{className:"p-4 rounded-2xl border border-pink-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-white hover:shadow-lg transition-shadow",children:[w.jsx("div",{className:"font-semibold text-pink-700",children:e.q}),w.jsx("div",{className:"text-pink-900/80 text-sm mt-1",children:e.a})]},n))})]})})}const cw="lamaphoto";async function EL(t){const e=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function TL(){const[t,e]=U.useState(""),[n,r]=U.useState(!1),[i,s]=U.useState(null),[o,l]=U.useState([]),[u,c]=U.useState(""),d=async()=>{c(""),r(!0),s(null),l([]);try{const E=(await Tg(wl(El,"galleries"))).docs.map(D=>D.data()),C=await EL(t.trim()),P=E.find(D=>D.codeHash===C);if(!P){c("Invalid access code. Double-check and try again."),r(!1);return}s(P);try{const D=await fetch(`https://res.cloudinary.com/${cw}/image/list/${P.tag}.json`,{cache:"no-store"});if(!D.ok)throw new Error(`HTTP ${D.status}`);const S=await D.json();l(S.resources||[])}catch(D){console.error(D),c("Could not load images. Make sure Cloudinary ‘Asset lists’ are enabled and your photos are tagged with the gallery tag.")}}catch(m){console.error(m),c("There was a problem checking your code. Please try again.")}finally{r(!1)}},p=()=>{e(""),s(null),l([]),c("")};return w.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Client Gallery"}),!i&&w.jsxs("div",{className:"mt-6 max-w-md space-y-3",children:[w.jsx("p",{className:"text-charcoal/70",children:"Enter your access code to view your photos."}),w.jsx("input",{type:"password",value:t,onChange:m=>e(m.target.value),placeholder:"Access code",className:"w-full rounded-xl border border-rose/30 px-3 py-2 bg-white",onKeyDown:m=>{m.key==="Enter"&&!n&&t.trim()&&d()}}),w.jsx("button",{onClick:d,disabled:n||!t.trim(),className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${n||!t.trim()?"bg-blush text-charcoal/50 cursor-not-allowed":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:n?"Checking…":"Open Gallery"}),u&&w.jsx("div",{className:"text-sm text-red-700",children:u})]}),i&&w.jsxs("div",{className:"mt-8",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"font-serif text-xl text-charcoal",children:i.name}),w.jsxs("div",{className:"text-xs text-charcoal/60",children:["Tag: ",w.jsx("code",{children:i.tag})]})]}),w.jsx("button",{onClick:p,className:"text-sm underline text-charcoal/70 hover:text-rose",children:"Use a different code"})]}),o.length>0?w.jsx("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",children:o.map(m=>{const E=`https://res.cloudinary.com/${cw}/image/upload/c_fill,g_auto,f_auto,q_auto,w_800,h_800/${m.public_id}.${m.format}`;return w.jsx("div",{className:"overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow",children:w.jsx("img",{src:E,alt:m.public_id,loading:"lazy",className:"w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"})},m.public_id)})}):w.jsx("div",{className:"mt-6 text-charcoal/60",children:"No images yet for this gallery."})]})]})})}function IL(){const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(""),o=Pm(),l=async u=>{u.preventDefault(),s("");try{await SN(Ig,t,n),o("/admin")}catch{s("Invalid email or password")}};return w.jsxs("div",{className:"max-w-sm mx-auto py-12",children:[w.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Admin Login"}),i&&w.jsx("p",{className:"text-red-500",children:i}),w.jsxs("form",{onSubmit:l,className:"space-y-4",children:[w.jsx("input",{type:"email",placeholder:"Email",className:"w-full border px-3 py-2 rounded",value:t,onChange:u=>e(u.target.value)}),w.jsx("input",{type:"password",placeholder:"Password",className:"w-full border px-3 py-2 rounded",value:n,onChange:u=>r(u.target.value)}),w.jsx("button",{type:"submit",className:"bg-rose text-ivory px-4 py-2 rounded w-full",children:"Login"})]})]})}async function Nu(t){try{return(await fL(t)).data().count||0}catch{return 0}}function Sg(...t){return t.filter(Boolean).join(" ")}function Gd(t){const e=Array.from(document.querySelectorAll("h3")).find(n=>{var r;return((r=n.textContent)==null?void 0:r.trim())===t});e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function SL(){const[t,e]=U.useState(null),[n,r]=U.useState({rows:[],loading:!0,error:""}),[i,s]=U.useState(!0);return U.useEffect(()=>{(async()=>{s(!0);const o=wl(El,"bookings"),l=wl(El,"galleries"),u=await Nu(bs(o)),c=await Nu(bs(o,qi("status","==","pending"))),d=await Nu(bs(o,qi("status","==","confirmed"),qi("startAt",">=",new Date))),p=await Nu(bs(l));e({totalBookings:u,pending:c,confirmedUpcoming:d,galleries:p}),s(!1);try{const m=bs(o,qi("startAt",">=",new Date),sL("startAt","asc"),oL(6)),C=(await Tg(m)).docs.map(P=>({id:P.id,...P.data()}));r({rows:C,loading:!1,error:""})}catch(m){console.warn("Upcoming query failed (likely needs composite index):",m),r({rows:[],loading:!1,error:"Couldn’t load upcoming bookings (index needed?)."})}})()},[]),w.jsx("section",{className:"w-full py-10 md:py-14 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsxs("div",{className:"flex items-center justify-between gap-4",children:[w.jsxs("div",{children:[w.jsx("h1",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Admin"}),w.jsx("p",{className:"text-sm text-charcoal/70",children:"Manage uploads, client galleries, and bookings in one place."})]}),w.jsx("button",{onClick:()=>Ig.signOut(),className:"rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Sign out"})]}),w.jsx("div",{className:"mt-6 grid grid-cols-2 md:grid-cols-4 gap-4",children:i?w.jsxs(w.Fragment,{children:[w.jsx(Du,{}),w.jsx(Du,{}),w.jsx(Du,{}),w.jsx(Du,{})]}):w.jsxs(w.Fragment,{children:[w.jsx(bu,{label:"Total Bookings",value:t.totalBookings}),w.jsx(bu,{label:"Pending",value:t.pending,accent:"rose"}),w.jsx(bu,{label:"Upcoming (Confirmed)",value:t.confirmedUpcoming,accent:"gold"}),w.jsx(bu,{label:"Galleries",value:t.galleries})]})}),w.jsx("div",{className:"mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6",children:w.jsxs(fa,{title:"Quick Actions",className:"lg:col-span-12",children:[w.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[w.jsx(Mu,{label:"New Gallery",onClick:()=>Gd("Galleries")}),w.jsx(Mu,{label:"Upload Photos",onClick:()=>Gd("Upload")}),w.jsx(Mu,{label:"View Upcoming",onClick:()=>Gd("Upcoming Bookings")}),w.jsx(Mu,{label:"Go to Portfolio",href:"/portfolio"})]}),w.jsxs("p",{className:"text-xs text-charcoal/60 mt-4",children:["Tip: For fastest queries on ",w.jsx("code",{children:"bookings"}),", add a composite index:",w.jsx("code",{children:" status (ASC) "})," + ",w.jsx("code",{children:" startAt (ASC)"}),"."]})]})}),w.jsxs("div",{className:"mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6",children:[w.jsxs(fa,{title:"Upload",className:"lg:col-span-6 xl:col-span-7",children:[w.jsxs("p",{className:"text-sm text-charcoal/70 mb-4",children:["Upload to ",w.jsx("span",{className:"font-semibold",children:"Portfolio"})," or a selected ",w.jsx("span",{className:"font-semibold",children:"Client Gallery"}),". Tags are applied automatically."]}),w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsx(hw,{componentPath:"../pages/AdminUpload"})})]}),w.jsx(fa,{title:"Upcoming Bookings",className:"lg:col-span-6 xl:col-span-5",children:n.loading?w.jsx(AL,{rows:4}):n.error?w.jsx("div",{className:"text-sm text-red-700",children:n.error}):n.rows.length===0?w.jsx("div",{className:"text-sm text-charcoal/60",children:"No upcoming bookings."}):w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsxs("table",{className:"w-full text-sm",children:[w.jsx("thead",{className:"bg-rose-50 text-charcoal/80",children:w.jsxs("tr",{children:[w.jsx(Ou,{children:"When"}),w.jsx(Ou,{children:"Client"}),w.jsx(Ou,{children:"Package"}),w.jsx(Ou,{children:"Ref"})]})}),w.jsx("tbody",{children:n.rows.map(o=>{var c,d,p,m,E,C,P,D,S;const l=(d=(c=o.startAt)==null?void 0:c.toDate)==null?void 0:d.call(c),u=l?l.toLocaleString([],{dateStyle:"medium",timeStyle:"short"}):`${o.date} ${o.time}`;return w.jsxs("tr",{className:"border-t border-slate-100",children:[w.jsxs(Lu,{children:[w.jsx("div",{children:u}),w.jsx("div",{className:"text-slate-500",children:(p=o.details)==null?void 0:p.location})]}),w.jsxs(Lu,{children:[w.jsx("div",{className:"font-medium",children:(m=o.details)==null?void 0:m.name}),w.jsx("div",{className:"text-slate-500",children:(E=o.details)==null?void 0:E.email}),w.jsx("div",{className:"text-slate-500",children:(C=o.details)==null?void 0:C.phone})]}),w.jsxs(Lu,{children:[w.jsx("div",{className:"font-medium",children:(P=o.package)==null?void 0:P.name}),w.jsxs("div",{className:"text-slate-500",children:["$",(D=o.package)==null?void 0:D.price," — ",(S=o.package)==null?void 0:S.duration]})]}),w.jsx(Lu,{className:"font-mono",children:o.reference})]},o.id)})})]})})}),w.jsxs(fa,{title:"Galleries",className:"lg:col-span-12",children:[w.jsxs("p",{className:"text-sm text-charcoal/70 mb-4",children:["Create a client gallery (slug + access code). Then upload with the generated tag (e.g., ",w.jsx("code",{children:"gal-aliyah-sam"}),")."]}),w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsx(hw,{componentPath:"../pages/AdminGallery"})})]}),w.jsx(fa,{title:"Notes",className:"lg:col-span-12",children:w.jsxs("ul",{className:"text-sm text-charcoal/80 list-disc ml-5 space-y-2",children:[w.jsx("li",{children:"Confirm pending bookings and send welcome emails."}),w.jsx("li",{children:"Create galleries for upcoming shoots."}),w.jsx("li",{children:"Upload highlight images to Portfolio."})]})})]})]})})}function bu({label:t,value:e,accent:n}){const r=n==="rose"?"ring-rose/30":n==="gold"?"ring-gold/30":"ring-slate-200";return w.jsxs("div",{className:Sg("rounded-2xl bg-white/80 border border-rose/30 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-4 ring-1",r),children:[w.jsx("div",{className:"text-sm text-charcoal/70",children:t}),w.jsx("div",{className:"text-2xl font-semibold text-charcoal mt-1",children:e})]})}function Du(){return w.jsxs("div",{className:"rounded-2xl bg-white/80 border border-rose/30 p-4 animate-pulse",children:[w.jsx("div",{className:"h-3 w-24 bg-slate-200 rounded mb-3"}),w.jsx("div",{className:"h-7 w-12 bg-slate-200 rounded"})]})}function fa({title:t,className:e,children:n}){return w.jsxs("section",{className:Sg("rounded-2xl border border-rose/30 bg-blush/20 p-4 md:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",e),children:[w.jsx("h3",{className:"text-lg font-serif font-semibold text-charcoal mb-3",children:t}),n]})}function Ou({children:t}){return w.jsx("th",{className:"text-left px-4 py-3",children:t})}function Lu({children:t,className:e}){return w.jsx("td",{className:Sg("px-4 py-3 align-top",e),children:t})}function AL({rows:t=4}){return w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsx("div",{className:"animate-pulse p-4 space-y-3",children:Array.from({length:t}).map((e,n)=>w.jsx("div",{className:"h-10 bg-slate-100 rounded"},n))})})}function Mu({label:t,onClick:e,href:n}){return n?w.jsx("a",{href:n,className:"w-full text-center rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow",children:t}):w.jsx("button",{onClick:e,className:"w-full rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow",children:t})}function hw({componentPath:t}){const[e,n]=U.useState(null);return U.useEffect(()=>{let r=!0;return import(t).then(i=>{r&&n(()=>i.default)}),()=>{r=!1}},[t]),e?w.jsx(e,{}):w.jsx("div",{className:"p-4 animate-pulse text-sm text-charcoal/60",children:"Loading…"})}const CL=()=>{};var dw={};/**
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
 */const LS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},MS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[p],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(LS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new PL;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),p!==64){const C=c<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xL=function(t){const e=LS(t);return MS.encodeByteArray(e,!0)},VS=function(t){return xL(t).replace(/\./g,"")},US=function(t){try{return MS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const NL=()=>kL().__FIREBASE_DEFAULTS__,bL=()=>{if(typeof process>"u"||typeof dw>"u")return;const t=dw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&US(t[1]);return e&&JSON.parse(e)},OL=()=>{try{return CL()||NL()||bL()||DL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},LL=t=>{var e;return(e=OL())==null?void 0:e[`_${t}`]};/**
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
 */function FS(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
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
 */function tr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ML(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tr())}function VL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function UL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jL(){try{return typeof indexedDB=="object"}catch{return!1}}function $L(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const BL="FirebaseError";class ms extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=BL,Object.setPrototypeOf(this,ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$l.prototype.create)}}class $l{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?zL(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ms(i,l,r)}}function zL(t,e){return t.replace(HL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const HL=/\{\$([^}]+)}/g;/**
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
 */function jS(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function WL(t,e){const n=new qL(t,e);return n.subscribe.bind(n)}class qL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kd),i.error===void 0&&(i.error=Kd),i.complete===void 0&&(i.complete=Kd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kd(){}/**
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
 */function Bl(t){return t&&t._delegate?t._delegate:t}class Tl{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const KL={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},QL=De.INFO,YL={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},XL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $S{constructor(e){this.name=e,this._logLevel=QL,this._logHandler=XL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const JL=(t,e)=>e.some(n=>t instanceof n);let fw,pw;function ZL(){return fw||(fw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eM(){return pw||(pw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const BS=new WeakMap,Ip=new WeakMap,zS=new WeakMap,Qd=new WeakMap,Ag=new WeakMap;function tM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&BS.set(n,t)}).catch(()=>{}),Ag.set(e,t),e}function nM(t){if(Ip.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ip.set(t,e)}let Sp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ip.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rM(t){Sp=t(Sp)}function iM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yd(this),e,...n);return zS.set(r,e.sort?e.sort():[e]),pi(r)}:eM().includes(t)?function(...e){return t.apply(Yd(this),e),pi(BS.get(this))}:function(...e){return pi(t.apply(Yd(this),e))}}function sM(t){return typeof t=="function"?iM(t):(t instanceof IDBTransaction&&nM(t),JL(t,ZL())?new Proxy(t,Sp):t)}function pi(t){if(t instanceof IDBRequest)return tM(t);if(Qd.has(t))return Qd.get(t);const e=sM(t);return e!==t&&(Qd.set(t,e),Ag.set(e,t)),e}const Yd=t=>Ag.get(t);function oM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=pi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(pi(o.result),u.oldVersion,u.newVersion,pi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const aM=["get","getKey","getAll","getAllKeys","count"],lM=["put","add","delete","clear"],Xd=new Map;function mw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xd.get(e))return Xd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aM.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Xd.set(e,s),s}rM(t=>({...t,get:(e,n,r)=>mw(e,n)||t.get(e,n,r),has:(e,n)=>!!mw(e,n)||t.has(e,n)}));/**
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
 */class uM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ap="@firebase/app",gw="0.14.1";/**
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
 */const Rr=new $S("@firebase/app"),hM="@firebase/app-compat",dM="@firebase/analytics-compat",fM="@firebase/analytics",pM="@firebase/app-check-compat",mM="@firebase/app-check",gM="@firebase/auth",yM="@firebase/auth-compat",_M="@firebase/database",vM="@firebase/data-connect",wM="@firebase/database-compat",EM="@firebase/functions",TM="@firebase/functions-compat",IM="@firebase/installations",SM="@firebase/installations-compat",AM="@firebase/messaging",CM="@firebase/messaging-compat",RM="@firebase/performance",PM="@firebase/performance-compat",xM="@firebase/remote-config",kM="@firebase/remote-config-compat",NM="@firebase/storage",bM="@firebase/storage-compat",DM="@firebase/firestore",OM="@firebase/ai",LM="@firebase/firestore-compat",MM="firebase",VM="12.1.0",UM={[Ap]:"fire-core",[hM]:"fire-core-compat",[fM]:"fire-analytics",[dM]:"fire-analytics-compat",[mM]:"fire-app-check",[pM]:"fire-app-check-compat",[gM]:"fire-auth",[yM]:"fire-auth-compat",[_M]:"fire-rtdb",[vM]:"fire-data-connect",[wM]:"fire-rtdb-compat",[EM]:"fire-fn",[TM]:"fire-fn-compat",[IM]:"fire-iid",[SM]:"fire-iid-compat",[AM]:"fire-fcm",[CM]:"fire-fcm-compat",[RM]:"fire-perf",[PM]:"fire-perf-compat",[xM]:"fire-rc",[kM]:"fire-rc-compat",[NM]:"fire-gcs",[bM]:"fire-gcs-compat",[DM]:"fire-fst",[LM]:"fire-fst-compat",[OM]:"fire-vertex","fire-js":"fire-js",[MM]:"fire-js-all"};/**
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
 */const FM=new Map,jM=new Map,yw=new Map;function _w(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Il(t){const e=t.name;if(yw.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;yw.set(e,t);for(const n of FM.values())_w(n,t);for(const n of jM.values())_w(n,t);return!0}function Ds(t){return t==null?!1:t.settings!==void 0}/**
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
 */const $M={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cg=new $l("app","Firebase",$M);/**
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
 */const Rg=VM;function ja(t,e,n){let r=UM[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(o.join(" "));return}Il(new Tl(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const BM="firebase-heartbeat-database",zM=1,Sl="firebase-heartbeat-store";let Jd=null;function HS(){return Jd||(Jd=oM(BM,zM,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Sl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cg.create("idb-open",{originalErrorMessage:t.message})})),Jd}async function HM(t){try{const n=(await HS()).transaction(Sl),r=await n.objectStore(Sl).get(WS(t));return await n.done,r}catch(e){if(e instanceof ms)Rr.warn(e.message);else{const n=Cg.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function vw(t,e){try{const r=(await HS()).transaction(Sl,"readwrite");await r.objectStore(Sl).put(e,WS(t)),await r.done}catch(n){if(n instanceof ms)Rr.warn(n.message);else{const r=Cg.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function WS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const WM=1024,qM=30;class GM{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QM(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ww();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>qM){const o=YM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ww(),{heartbeatsToSend:r,unsentEntries:i}=KM(this._heartbeatsCache.heartbeats),s=VS(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Rr.warn(n),""}}}function ww(){return new Date().toISOString().substring(0,10)}function KM(t,e=WM){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ew(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ew(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jL()?$L().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HM(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ew(t){return VS(JSON.stringify({version:2,heartbeats:t})).length}function YM(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function XM(t){Il(new Tl("platform-logger",e=>new uM(e),"PRIVATE")),Il(new Tl("heartbeat",e=>new GM(e),"PRIVATE")),ja(Ap,gw,t),ja(Ap,gw,"esm2020"),ja("fire-js","")}XM("");function qS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JM=qS,GS=new $l("auth","Firebase",qS());/**
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
 */const rh=new $S("@firebase/auth");function ZM(t,...e){rh.logLevel<=De.WARN&&rh.warn(`Auth (${Rg}): ${t}`,...e)}function lc(t,...e){rh.logLevel<=De.ERROR&&rh.error(`Auth (${Rg}): ${t}`,...e)}/**
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
 */function Tw(t,...e){throw Pg(t,...e)}function KS(t,...e){return Pg(t,...e)}function QS(t,e,n){const r={...JM(),[e]:n};return new $l("auth","Firebase",r).create(e,{appName:t.name})}function uc(t){return QS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return GS.create(t,...e)}function Ie(t,e,...n){if(!t)throw Pg(e,...n)}function $a(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lc(e),new Error(e)}function ih(t,e){t||$a(e)}function eV(){return Iw()==="http:"||Iw()==="https:"}function Iw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function tV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eV()||UL()||"connection"in navigator)?navigator.onLine:!0}function nV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ih(n>e,"Short delay should be less than long delay!"),this.isMobile=ML()||FL()}get(){return tV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rV(t,e){ih(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class YS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$a("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$a("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$a("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sV=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oV=new zl(3e4,6e4);function XS(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Gh(t,e,n,r,i={}){return JS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=jS({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return VL()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&FS(t.emulatorConfig.host)&&(c.credentials="include"),YS.fetch()(await ZS(t,t.config.apiHost,n,l),c)})}async function JS(t,e,n){t._canInitEmulator=!1;const r={...iV,...e};try{const i=new aV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Vu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Vu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw QS(t,d,c);Tw(t,d)}}catch(i){if(i instanceof ms)throw i;Tw(t,"network-request-failed",{message:String(i)})}}async function ZS(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?rV(t.config,i):`${t.config.apiScheme}://${i}`;return sV.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class aV{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(KS(this.auth,"network-request-failed")),oV.get())})}}function Vu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=KS(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function lV(t,e){return Gh(t,"POST","/v1/accounts:delete",e)}async function sh(t,e){return Gh(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ba(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uV(t,e=!1){const n=Bl(t),r=await n.getIdToken(e),i=eA(r);Ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ba(Zd(i.auth_time)),issuedAtTime:Ba(Zd(i.iat)),expirationTime:Ba(Zd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zd(t){return Number(t)*1e3}function eA(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const i=US(n);return i?JSON.parse(i):(lc("Failed to decode base64 JWT payload"),null)}catch(i){return lc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sw(t){const e=eA(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cp(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ms&&cV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class hV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ba(this.lastLoginAt),this.creationTime=Ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oh(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Cp(t,sh(e,{idToken:n}));Ie(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?tA(i.providerUserInfo):[],o=fV(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Rp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function dV(t){const e=Bl(t);await oh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tA(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function pV(t,e){const n=await JS(t,{},async()=>{const r=jS({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await ZS(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&FS(t.emulatorConfig.host)&&(u.credentials="include"),YS.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mV(t,e){return Gh(t,"POST","/v2/accounts:revokeToken",XS(t,e))}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const n=Sw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new oo;return r&&(Ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Ie(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return $a("not implemented")}}/**
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
 */function Fr(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new hV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Rp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Cp(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uV(this,e)}reload(){return dV(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ds(this.auth.app))return Promise.reject(uc(this.auth));const e=await this.getIdToken();return await Cp(this,lV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:E,providerData:C,stsTokenManager:P}=n;Ie(p&&P,e,"internal-error");const D=oo.fromJSON(this.name,P);Ie(typeof p=="string",e,"internal-error"),Fr(r,e.name),Fr(i,e.name),Ie(typeof m=="boolean",e,"internal-error"),Ie(typeof E=="boolean",e,"internal-error"),Fr(s,e.name),Fr(o,e.name),Fr(l,e.name),Fr(u,e.name),Fr(c,e.name),Fr(d,e.name);const S=new Wn({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:c,lastLoginAt:d});return C&&Array.isArray(C)&&(S.providerData=C.map(v=>({...v}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new oo;i.updateFromServerResponse(n);const s=new Wn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Ie(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?tA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new oo;l.updateFromIdToken(r);const u=new Wn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Rp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const Aw=new Map;function Gi(t){ih(t instanceof Function,"Expected a class definition");let e=Aw.get(t);return e?(ih(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Aw.set(t,e),e)}/**
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
 */class nA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}nA.type="NONE";const Cw=nA;/**
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
 */function ef(t,e,n){return`firebase:${t}:${e}:${n}`}class ao{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ef(this.userKey,i.apiKey,s),this.fullPersistenceKey=ef("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sh(this.auth,{idToken:e}).catch(()=>{});return n?Wn._fromGetAccountInfoResponse(this.auth,n,e):null}return Wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ao(Gi(Cw),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Gi(Cw);const o=ef(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const m=await sh(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Wn._fromGetAccountInfoResponse(e,m,d)}else p=Wn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ao(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ao(s,e,r))}}/**
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
 */function Rw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vV(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gV(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(EV(e))return"Blackberry";if(TV(e))return"Webos";if(yV(e))return"Safari";if((e.includes("chrome/")||_V(e))&&!e.includes("edge/"))return"Chrome";if(wV(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gV(t=tr()){return/firefox\//i.test(t)}function yV(t=tr()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _V(t=tr()){return/crios\//i.test(t)}function vV(t=tr()){return/iemobile/i.test(t)}function wV(t=tr()){return/android/i.test(t)}function EV(t=tr()){return/blackberry/i.test(t)}function TV(t=tr()){return/webos/i.test(t)}/**
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
 */function rA(t,e=[]){let n;switch(t){case"Browser":n=Rw(tr());break;case"Worker":n=`${Rw(tr())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rg}/${r}`}/**
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
 */class IV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SV(t,e={}){return Gh(t,"GET","/v2/passwordPolicy",XS(t,e))}/**
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
 */const AV=6;class CV{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??AV,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class RV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pw(this),this.idTokenSubscription=new Pw(this),this.beforeStateQueue=new IV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=GS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gi(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sh(this,{idToken:e}),r=await Wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ds(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ds(this.app))return Promise.reject(uc(this));const n=e?Bl(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ds(this.app)?Promise.reject(uc(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ds(this.app)?Promise.reject(uc(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SV(this),n=new CV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $l("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gi(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[Gi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ds(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ZM(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function PV(t){return Bl(t)}class Pw{constructor(e){this.auth=e,this.observer=null,this.addObserver=WL(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function xV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kV(t,e,n,r){return Bl(t).onAuthStateChanged(e,n,r)}new zl(3e4,6e4);/**
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
 */new zl(2e3,1e4);/**
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
 */new zl(3e4,6e4);/**
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
 */new zl(5e3,15e3);var xw="@firebase/auth",kw="1.11.0";/**
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
 */class NV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function bV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DV(t){Il(new Tl("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rA(t)},c=new RV(r,i,s,u);return xV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Il(new Tl("auth-internal",e=>{const n=PV(e.getProvider("auth").getImmediate());return(r=>new NV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ja(xw,kw,bV(t)),ja(xw,kw,"esm2020")}/**
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
 */const OV=5*60;LL("authIdTokenMaxAge");DV("Browser");/*! *****************************************************************************
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
***************************************************************************** */function LV(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{c(r.next(d))}catch(p){o(p)}}function u(d){try{c(r.throw(d))}catch(p){o(p)}}function c(d){d.done?s(d.value):i(d.value).then(l,u)}c((r=r.apply(t,[])).next())})}function MV(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(c){return function(d){return u([c,d])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var Ks=function(){return Ks=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ks.apply(this,arguments)},iA=function(t){return{loading:t==null,value:t}},VV=function(){return function(t,e){switch(e.type){case"error":return Ks(Ks({},t),{error:e.error,loading:!1,value:void 0});case"reset":return iA(e.defaultValue);case"value":return Ks(Ks({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},UV=function(t){var e=t?t():void 0,n=U.useReducer(VV(),iA(e)),r=n[0],i=n[1],s=U.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=U.useCallback(function(u){i({type:"error",error:u})},[]),l=U.useCallback(function(u){i({type:"value",value:u})},[]);return U.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},FV=function(t,e){var n=UV(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return U.useEffect(function(){var u=kV(t,function(c){return LV(void 0,void 0,void 0,function(){var d;return MV(this,function(p){switch(p.label){case 0:return[3,4];case 1:return p.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return p.sent(),[3,4];case 3:return d=p.sent(),s(d),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]),[l,i,r]};function jV({children:t}){const[e,n]=FV(Ig);return n?w.jsx("div",{className:"p-8 text-center",children:"Loading..."}):e?t:w.jsx(uP,{to:"/admin-login",replace:!0})}const $V=_P([{path:"/",element:w.jsx(MP,{}),children:[{index:!0,element:w.jsx(VP,{})},{path:"portfolio",element:w.jsx(FP,{})},{path:"booking",element:w.jsx(vL,{})},{path:"faq",element:w.jsx(wL,{})},{path:"client",element:w.jsx(TL,{})},{path:"admin-login",element:w.jsx(IL,{})},{path:"admin",element:w.jsx(jV,{children:w.jsx(SL,{})})}]}]);qT(document.getElementById("root")).render(w.jsx(zw.StrictMode,{children:w.jsx(CP,{router:$V})}));
