function qw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kw={exports:{}},gh={},Qw={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nl=Symbol.for("react.element"),WA=Symbol.for("react.portal"),qA=Symbol.for("react.fragment"),GA=Symbol.for("react.strict_mode"),KA=Symbol.for("react.profiler"),QA=Symbol.for("react.provider"),YA=Symbol.for("react.context"),XA=Symbol.for("react.forward_ref"),JA=Symbol.for("react.suspense"),ZA=Symbol.for("react.memo"),e1=Symbol.for("react.lazy"),gy=Symbol.iterator;function t1(t){return t===null||typeof t!="object"?null:(t=gy&&t[gy]||t["@@iterator"],typeof t=="function"?t:null)}var Yw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xw=Object.assign,Jw={};function xo(t,e,n){this.props=t,this.context=e,this.refs=Jw,this.updater=n||Yw}xo.prototype.isReactComponent={};xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zw(){}Zw.prototype=xo.prototype;function jp(t,e,n){this.props=t,this.context=e,this.refs=Jw,this.updater=n||Yw}var $p=jp.prototype=new Zw;$p.constructor=jp;Xw($p,xo.prototype);$p.isPureReactComponent=!0;var yy=Array.isArray,eE=Object.prototype.hasOwnProperty,Bp={current:null},tE={key:!0,ref:!0,__self:!0,__source:!0};function nE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)eE.call(e,r)&&!tE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Nl,type:t,key:s,ref:o,props:i,_owner:Bp.current}}function n1(t,e){return{$$typeof:Nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nl}function r1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _y=/\/+/g;function yd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?r1(""+t.key):e.toString(36)}function Wu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nl:case WA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yd(o,0):r,yy(i)?(n="",t!=null&&(n=t.replace(_y,"$&/")+"/"),Wu(i,e,n,"",function(c){return c})):i!=null&&(zp(i)&&(i=n1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(_y,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",yy(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+yd(s,l);o+=Wu(s,e,n,u,i)}else if(u=t1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+yd(s,l++),o+=Wu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function gu(t,e,n){if(t==null)return t;var r=[],i=0;return Wu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function i1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var zt={current:null},qu={transition:null},s1={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:qu,ReactCurrentOwner:Bp};function rE(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:gu,forEach:function(t,e,n){gu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return gu(t,function(){e++}),e},toArray:function(t){return gu(t,function(e){return e})||[]},only:function(t){if(!zp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=xo;pe.Fragment=qA;pe.Profiler=KA;pe.PureComponent=jp;pe.StrictMode=GA;pe.Suspense=JA;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s1;pe.act=rE;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Bp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)eE.call(e,u)&&!tE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Nl,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:YA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:QA,_context:t},t.Consumer=t};pe.createElement=nE;pe.createFactory=function(t){var e=nE.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:XA,render:t}};pe.isValidElement=zp;pe.lazy=function(t){return{$$typeof:e1,_payload:{_status:-1,_result:t},_init:i1}};pe.memo=function(t,e){return{$$typeof:ZA,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=qu.transition;qu.transition={};try{t()}finally{qu.transition=e}};pe.unstable_act=rE;pe.useCallback=function(t,e){return zt.current.useCallback(t,e)};pe.useContext=function(t){return zt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return zt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return zt.current.useEffect(t,e)};pe.useId=function(){return zt.current.useId()};pe.useImperativeHandle=function(t,e,n){return zt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return zt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return zt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return zt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return zt.current.useReducer(t,e,n)};pe.useRef=function(t){return zt.current.useRef(t)};pe.useState=function(t){return zt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return zt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return zt.current.useTransition()};pe.version="18.3.1";Qw.exports=pe;var U=Qw.exports;const bl=Gw(U),o1=qw({__proto__:null,default:bl},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1=U,l1=Symbol.for("react.element"),u1=Symbol.for("react.fragment"),c1=Object.prototype.hasOwnProperty,h1=a1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d1={key:!0,ref:!0,__self:!0,__source:!0};function iE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)c1.call(e,r)&&!d1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:l1,type:t,key:s,ref:o,props:i,_owner:h1.current}}gh.Fragment=u1;gh.jsx=iE;gh.jsxs=iE;Kw.exports=gh;var w=Kw.exports,sE={exports:{}},hn={},oE={exports:{}},aE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,ie){var ue=W.length;W.push(ie);e:for(;0<ue;){var Ae=ue-1>>>1,fe=W[Ae];if(0<i(fe,ie))W[Ae]=ie,W[ue]=fe,ue=Ae;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ie=W[0],ue=W.pop();if(ue!==ie){W[0]=ue;e:for(var Ae=0,fe=W.length,ke=fe>>>1;Ae<ke;){var Vt=2*(Ae+1)-1,Ye=W[Vt],_t=Vt+1,vt=W[_t];if(0>i(Ye,ue))_t<fe&&0>i(vt,Ye)?(W[Ae]=vt,W[_t]=ue,Ae=_t):(W[Ae]=Ye,W[Vt]=ue,Ae=Vt);else if(_t<fe&&0>i(vt,ue))W[Ae]=vt,W[_t]=ue,Ae=_t;else break e}}return ie}function i(W,ie){var ue=W.sortIndex-ie.sortIndex;return ue!==0?ue:W.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,E=!1,A=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(W){for(var ie=n(c);ie!==null;){if(ie.callback===null)r(c);else if(ie.startTime<=W)r(c),ie.sortIndex=ie.expirationTime,e(u,ie);else break;ie=n(c)}}function L(W){if(P=!1,C(W),!A)if(n(u)!==null)A=!0,Mn($);else{var ie=n(c);ie!==null&&Wt(L,ie.startTime-W)}}function $(W,ie){A=!1,P&&(P=!1,S(y),y=-1),E=!0;var ue=m;try{for(C(ie),f=n(u);f!==null&&(!(f.expirationTime>ie)||W&&!k());){var Ae=f.callback;if(typeof Ae=="function"){f.callback=null,m=f.priorityLevel;var fe=Ae(f.expirationTime<=ie);ie=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(u)&&r(u),C(ie)}else r(u);f=n(u)}if(f!==null)var ke=!0;else{var Vt=n(c);Vt!==null&&Wt(L,Vt.startTime-ie),ke=!1}return ke}finally{f=null,m=ue,E=!1}}var H=!1,g=null,y=-1,I=5,T=-1;function k(){return!(t.unstable_now()-T<I)}function N(){if(g!==null){var W=t.unstable_now();T=W;var ie=!0;try{ie=g(!0,W)}finally{ie?R():(H=!1,g=null)}}else H=!1}var R;if(typeof v=="function")R=function(){v(N)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,yt=be.port2;be.port1.onmessage=N,R=function(){yt.postMessage(null)}}else R=function(){b(N,0)};function Mn(W){g=W,H||(H=!0,R())}function Wt(W,ie){y=b(function(){W(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){A||E||(A=!0,Mn($))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var ie=3;break;default:ie=m}var ue=m;m=ie;try{return W()}finally{m=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,ie){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ue=m;m=W;try{return ie()}finally{m=ue}},t.unstable_scheduleCallback=function(W,ie,ue){var Ae=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Ae+ue:Ae):ue=Ae,W){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ue+fe,W={id:d++,callback:ie,priorityLevel:W,startTime:ue,expirationTime:fe,sortIndex:-1},ue>Ae?(W.sortIndex=ue,e(c,W),n(u)===null&&W===n(c)&&(P?(S(y),y=-1):P=!0,Wt(L,ue-Ae))):(W.sortIndex=fe,e(u,W),A||E||(A=!0,Mn($))),W},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(W){var ie=m;return function(){var ue=m;m=ie;try{return W.apply(this,arguments)}finally{m=ue}}}})(aE);oE.exports=aE;var f1=oE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p1=U,cn=f1;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lE=new Set,Ja={};function ps(t,e){fo(t,e),fo(t+"Capture",e)}function fo(t,e){for(Ja[t]=e,t=0;t<e.length;t++)lE.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pf=Object.prototype.hasOwnProperty,m1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vy={},wy={};function g1(t){return pf.call(wy,t)?!0:pf.call(vy,t)?!1:m1.test(t)?wy[t]=!0:(vy[t]=!0,!1)}function y1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _1(t,e,n,r){if(e===null||typeof e>"u"||y1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ct[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ct[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ct[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hp=/[\-:]([a-z])/g;function Wp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hp,Wp);Ct[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hp,Wp);Ct[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hp,Wp);Ct[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Ct.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ct[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function qp(t,e,n,r){var i=Ct.hasOwnProperty(e)?Ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_1(e,n,i,r)&&(n=null),r||i===null?g1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xr=p1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yu=Symbol.for("react.element"),Us=Symbol.for("react.portal"),Fs=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),mf=Symbol.for("react.profiler"),uE=Symbol.for("react.provider"),cE=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),gf=Symbol.for("react.suspense"),yf=Symbol.for("react.suspense_list"),Qp=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),hE=Symbol.for("react.offscreen"),Ey=Symbol.iterator;function oa(t){return t===null||typeof t!="object"?null:(t=Ey&&t[Ey]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Object.assign,_d;function wa(t){if(_d===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_d=e&&e[1]||""}return`
`+_d+t}var vd=!1;function wd(t,e){if(!t||vd)return"";vd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{vd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wa(t):""}function v1(t){switch(t.tag){case 5:return wa(t.type);case 16:return wa("Lazy");case 13:return wa("Suspense");case 19:return wa("SuspenseList");case 0:case 2:case 15:return t=wd(t.type,!1),t;case 11:return t=wd(t.type.render,!1),t;case 1:return t=wd(t.type,!0),t;default:return""}}function _f(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fs:return"Fragment";case Us:return"Portal";case mf:return"Profiler";case Gp:return"StrictMode";case gf:return"Suspense";case yf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cE:return(t.displayName||"Context")+".Consumer";case uE:return(t._context.displayName||"Context")+".Provider";case Kp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qp:return e=t.displayName||null,e!==null?e:_f(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return _f(t(e))}catch{}}return null}function w1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _f(e);case 8:return e===Gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E1(t){var e=dE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _u(t){t._valueTracker||(t._valueTracker=E1(t))}function fE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vf(t,e){var n=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ty(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_i(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pE(t,e){e=e.checked,e!=null&&qp(t,"checked",e,!1)}function wf(t,e){pE(t,e);var n=_i(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ef(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ef(t,e.type,_i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Iy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ef(t,e,n){(e!=="number"||yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function Zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_i(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Tf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Ea(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_i(n)}}function mE(t,e){var n=_i(e.value),r=_i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ay(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function If(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vu,yE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vu=vu||document.createElement("div"),vu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T1=["Webkit","ms","Moz","O"];Object.keys(Da).forEach(function(t){T1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Da[e]=Da[t]})});function _E(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Da.hasOwnProperty(t)&&Da[t]?(""+e).trim():e+"px"}function vE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_E(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var I1=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sf(t,e){if(e){if(I1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cf=null;function Yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rf=null,eo=null,to=null;function Cy(t){if(t=Ll(t)){if(typeof Rf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Eh(e),Rf(t.stateNode,t.type,e))}}function wE(t){eo?to?to.push(t):to=[t]:eo=t}function EE(){if(eo){var t=eo,e=to;if(to=eo=null,Cy(t),e)for(t=0;t<e.length;t++)Cy(e[t])}}function TE(t,e){return t(e)}function IE(){}var Ed=!1;function SE(t,e,n){if(Ed)return t(e,n);Ed=!0;try{return TE(t,e,n)}finally{Ed=!1,(eo!==null||to!==null)&&(IE(),EE())}}function el(t,e){var n=t.stateNode;if(n===null)return null;var r=Eh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Pf=!1;if(vr)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){Pf=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{Pf=!1}function S1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Oa=!1,_c=null,vc=!1,xf=null,A1={onError:function(t){Oa=!0,_c=t}};function C1(t,e,n,r,i,s,o,l,u){Oa=!1,_c=null,S1.apply(A1,arguments)}function R1(t,e,n,r,i,s,o,l,u){if(C1.apply(this,arguments),Oa){if(Oa){var c=_c;Oa=!1,_c=null}else throw Error(z(198));vc||(vc=!0,xf=c)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function AE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ry(t){if(ms(t)!==t)throw Error(z(188))}function P1(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ry(i),t;if(s===r)return Ry(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function CE(t){return t=P1(t),t!==null?RE(t):null}function RE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=RE(t);if(e!==null)return e;t=t.sibling}return null}var PE=cn.unstable_scheduleCallback,Py=cn.unstable_cancelCallback,x1=cn.unstable_shouldYield,k1=cn.unstable_requestPaint,Je=cn.unstable_now,N1=cn.unstable_getCurrentPriorityLevel,Xp=cn.unstable_ImmediatePriority,xE=cn.unstable_UserBlockingPriority,wc=cn.unstable_NormalPriority,b1=cn.unstable_LowPriority,kE=cn.unstable_IdlePriority,yh=null,Qn=null;function D1(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(yh,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:M1,O1=Math.log,L1=Math.LN2;function M1(t){return t>>>=0,t===0?32:31-(O1(t)/L1|0)|0}var wu=64,Eu=4194304;function Ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ta(l):(s&=o,s!==0&&(r=Ta(s)))}else o=n&~i,o!==0?r=Ta(o):s!==0&&(r=Ta(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),i=1<<n,r|=t[n],e&=~i;return r}function V1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Nn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=V1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function NE(){var t=wu;return wu<<=1,!(wu&4194240)&&(wu=64),t}function Td(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Dl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function F1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function bE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var DE,Zp,OE,LE,ME,Nf=!1,Tu=[],ri=null,ii=null,si=null,tl=new Map,nl=new Map,Wr=[],j1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xy(t,e){switch(t){case"focusin":case"focusout":ri=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":tl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(e.pointerId)}}function la(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ll(e),e!==null&&Zp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $1(t,e,n,r,i){switch(e){case"focusin":return ri=la(ri,t,e,n,r,i),!0;case"dragenter":return ii=la(ii,t,e,n,r,i),!0;case"mouseover":return si=la(si,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return tl.set(s,la(tl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,nl.set(s,la(nl.get(s)||null,t,e,n,r,i)),!0}return!1}function VE(t){var e=Gi(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=AE(n),e!==null){t.blockedOn=e,ME(t.priority,function(){OE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cf=r,n.target.dispatchEvent(r),Cf=null}else return e=Ll(n),e!==null&&Zp(e),t.blockedOn=n,!1;e.shift()}return!0}function ky(t,e,n){Gu(t)&&n.delete(e)}function B1(){Nf=!1,ri!==null&&Gu(ri)&&(ri=null),ii!==null&&Gu(ii)&&(ii=null),si!==null&&Gu(si)&&(si=null),tl.forEach(ky),nl.forEach(ky)}function ua(t,e){t.blockedOn===e&&(t.blockedOn=null,Nf||(Nf=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,B1)))}function rl(t){function e(i){return ua(i,t)}if(0<Tu.length){ua(Tu[0],t);for(var n=1;n<Tu.length;n++){var r=Tu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ri!==null&&ua(ri,t),ii!==null&&ua(ii,t),si!==null&&ua(si,t),tl.forEach(e),nl.forEach(e),n=0;n<Wr.length;n++)r=Wr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wr.length&&(n=Wr[0],n.blockedOn===null);)VE(n),n.blockedOn===null&&Wr.shift()}var no=xr.ReactCurrentBatchConfig,Tc=!0;function z1(t,e,n,r){var i=xe,s=no.transition;no.transition=null;try{xe=1,em(t,e,n,r)}finally{xe=i,no.transition=s}}function H1(t,e,n,r){var i=xe,s=no.transition;no.transition=null;try{xe=4,em(t,e,n,r)}finally{xe=i,no.transition=s}}function em(t,e,n,r){if(Tc){var i=bf(t,e,n,r);if(i===null)bd(t,e,r,Ic,n),xy(t,r);else if($1(i,t,e,n,r))r.stopPropagation();else if(xy(t,r),e&4&&-1<j1.indexOf(t)){for(;i!==null;){var s=Ll(i);if(s!==null&&DE(s),s=bf(t,e,n,r),s===null&&bd(t,e,r,Ic,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else bd(t,e,r,null,n)}}var Ic=null;function bf(t,e,n,r){if(Ic=null,t=Yp(r),t=Gi(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=AE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function UE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N1()){case Xp:return 1;case xE:return 4;case wc:case b1:return 16;case kE:return 536870912;default:return 16}default:return 16}}var Jr=null,tm=null,Ku=null;function FE(){if(Ku)return Ku;var t,e=tm,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ku=i.slice(t,1<r?1-r:void 0)}function Qu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Iu(){return!0}function Ny(){return!1}function dn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Iu:Ny,this.isPropagationStopped=Ny,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Iu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Iu)},persist:function(){},isPersistent:Iu}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nm=dn(ko),Ol=qe({},ko,{view:0,detail:0}),W1=dn(Ol),Id,Sd,ca,_h=qe({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(Id=t.screenX-ca.screenX,Sd=t.screenY-ca.screenY):Sd=Id=0,ca=t),Id)},movementY:function(t){return"movementY"in t?t.movementY:Sd}}),by=dn(_h),q1=qe({},_h,{dataTransfer:0}),G1=dn(q1),K1=qe({},Ol,{relatedTarget:0}),Ad=dn(K1),Q1=qe({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),Y1=dn(Q1),X1=qe({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),J1=dn(X1),Z1=qe({},ko,{data:0}),Dy=dn(Z1),eC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=nC[t])?!!e[t]:!1}function rm(){return rC}var iC=qe({},Ol,{key:function(t){if(t.key){var e=eC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?tC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rm,charCode:function(t){return t.type==="keypress"?Qu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sC=dn(iC),oC=qe({},_h,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oy=dn(oC),aC=qe({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rm}),lC=dn(aC),uC=qe({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),cC=dn(uC),hC=qe({},_h,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dC=dn(hC),fC=[9,13,27,32],im=vr&&"CompositionEvent"in window,La=null;vr&&"documentMode"in document&&(La=document.documentMode);var pC=vr&&"TextEvent"in window&&!La,jE=vr&&(!im||La&&8<La&&11>=La),Ly=" ",My=!1;function $E(t,e){switch(t){case"keyup":return fC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function BE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var js=!1;function mC(t,e){switch(t){case"compositionend":return BE(e);case"keypress":return e.which!==32?null:(My=!0,Ly);case"textInput":return t=e.data,t===Ly&&My?null:t;default:return null}}function gC(t,e){if(js)return t==="compositionend"||!im&&$E(t,e)?(t=FE(),Ku=tm=Jr=null,js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jE&&e.locale!=="ko"?null:e.data;default:return null}}var yC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yC[t.type]:e==="textarea"}function zE(t,e,n,r){wE(r),e=Sc(e,"onChange"),0<e.length&&(n=new nm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ma=null,il=null;function _C(t){eT(t,0)}function vh(t){var e=zs(t);if(fE(e))return t}function vC(t,e){if(t==="change")return e}var HE=!1;if(vr){var Cd;if(vr){var Rd="oninput"in document;if(!Rd){var Uy=document.createElement("div");Uy.setAttribute("oninput","return;"),Rd=typeof Uy.oninput=="function"}Cd=Rd}else Cd=!1;HE=Cd&&(!document.documentMode||9<document.documentMode)}function Fy(){Ma&&(Ma.detachEvent("onpropertychange",WE),il=Ma=null)}function WE(t){if(t.propertyName==="value"&&vh(il)){var e=[];zE(e,il,t,Yp(t)),SE(_C,e)}}function wC(t,e,n){t==="focusin"?(Fy(),Ma=e,il=n,Ma.attachEvent("onpropertychange",WE)):t==="focusout"&&Fy()}function EC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vh(il)}function TC(t,e){if(t==="click")return vh(e)}function IC(t,e){if(t==="input"||t==="change")return vh(e)}function SC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:SC;function sl(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pf.call(e,i)||!Dn(t[i],e[i]))return!1}return!0}function jy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $y(t,e){var n=jy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jy(n)}}function qE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function GE(){for(var t=window,e=yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yc(t.document)}return e}function sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function AC(t){var e=GE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qE(n.ownerDocument.documentElement,n)){if(r!==null&&sm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$y(n,s);var o=$y(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CC=vr&&"documentMode"in document&&11>=document.documentMode,$s=null,Df=null,Va=null,Of=!1;function By(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Of||$s==null||$s!==yc(r)||(r=$s,"selectionStart"in r&&sm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Va&&sl(Va,r)||(Va=r,r=Sc(Df,"onSelect"),0<r.length&&(e=new nm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$s)))}function Su(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Bs={animationend:Su("Animation","AnimationEnd"),animationiteration:Su("Animation","AnimationIteration"),animationstart:Su("Animation","AnimationStart"),transitionend:Su("Transition","TransitionEnd")},Pd={},KE={};vr&&(KE=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function wh(t){if(Pd[t])return Pd[t];if(!Bs[t])return t;var e=Bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in KE)return Pd[t]=e[n];return t}var QE=wh("animationend"),YE=wh("animationiteration"),XE=wh("animationstart"),JE=wh("transitionend"),ZE=new Map,zy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(t,e){ZE.set(t,e),ps(e,[t])}for(var xd=0;xd<zy.length;xd++){var kd=zy[xd],RC=kd.toLowerCase(),PC=kd[0].toUpperCase()+kd.slice(1);Ri(RC,"on"+PC)}Ri(QE,"onAnimationEnd");Ri(YE,"onAnimationIteration");Ri(XE,"onAnimationStart");Ri("dblclick","onDoubleClick");Ri("focusin","onFocus");Ri("focusout","onBlur");Ri(JE,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Hy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,R1(r,e,void 0,t),t.currentTarget=null}function eT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Hy(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Hy(i,l,c),s=u}}}if(vc)throw t=xf,vc=!1,xf=null,t}function Fe(t,e){var n=e[Ff];n===void 0&&(n=e[Ff]=new Set);var r=t+"__bubble";n.has(r)||(tT(e,t,2,!1),n.add(r))}function Nd(t,e,n){var r=0;e&&(r|=4),tT(n,t,r,e)}var Au="_reactListening"+Math.random().toString(36).slice(2);function ol(t){if(!t[Au]){t[Au]=!0,lE.forEach(function(n){n!=="selectionchange"&&(xC.has(n)||Nd(n,!1,t),Nd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Au]||(e[Au]=!0,Nd("selectionchange",!1,e))}}function tT(t,e,n,r){switch(UE(e)){case 1:var i=z1;break;case 4:i=H1;break;default:i=em}n=i.bind(null,e,n,t),i=void 0,!Pf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Gi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}SE(function(){var c=s,d=Yp(n),f=[];e:{var m=ZE.get(t);if(m!==void 0){var E=nm,A=t;switch(t){case"keypress":if(Qu(n)===0)break e;case"keydown":case"keyup":E=sC;break;case"focusin":A="focus",E=Ad;break;case"focusout":A="blur",E=Ad;break;case"beforeblur":case"afterblur":E=Ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=by;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=G1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=lC;break;case QE:case YE:case XE:E=Y1;break;case JE:E=cC;break;case"scroll":E=W1;break;case"wheel":E=dC;break;case"copy":case"cut":case"paste":E=J1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Oy}var P=(e&4)!==0,b=!P&&t==="scroll",S=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,C;v!==null;){C=v;var L=C.stateNode;if(C.tag===5&&L!==null&&(C=L,S!==null&&(L=el(v,S),L!=null&&P.push(al(v,L,C)))),b)break;v=v.return}0<P.length&&(m=new E(m,A,null,n,d),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==Cf&&(A=n.relatedTarget||n.fromElement)&&(Gi(A)||A[wr]))break e;if((E||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,E?(A=n.relatedTarget||n.toElement,E=c,A=A?Gi(A):null,A!==null&&(b=ms(A),A!==b||A.tag!==5&&A.tag!==6)&&(A=null)):(E=null,A=c),E!==A)){if(P=by,L="onMouseLeave",S="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Oy,L="onPointerLeave",S="onPointerEnter",v="pointer"),b=E==null?m:zs(E),C=A==null?m:zs(A),m=new P(L,v+"leave",E,n,d),m.target=b,m.relatedTarget=C,L=null,Gi(d)===c&&(P=new P(S,v+"enter",A,n,d),P.target=C,P.relatedTarget=b,L=P),b=L,E&&A)t:{for(P=E,S=A,v=0,C=P;C;C=bs(C))v++;for(C=0,L=S;L;L=bs(L))C++;for(;0<v-C;)P=bs(P),v--;for(;0<C-v;)S=bs(S),C--;for(;v--;){if(P===S||S!==null&&P===S.alternate)break t;P=bs(P),S=bs(S)}P=null}else P=null;E!==null&&Wy(f,m,E,P,!1),A!==null&&b!==null&&Wy(f,b,A,P,!0)}}e:{if(m=c?zs(c):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var $=vC;else if(Vy(m))if(HE)$=IC;else{$=EC;var H=wC}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&($=TC);if($&&($=$(t,c))){zE(f,$,n,d);break e}H&&H(t,m,c),t==="focusout"&&(H=m._wrapperState)&&H.controlled&&m.type==="number"&&Ef(m,"number",m.value)}switch(H=c?zs(c):window,t){case"focusin":(Vy(H)||H.contentEditable==="true")&&($s=H,Df=c,Va=null);break;case"focusout":Va=Df=$s=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,By(f,n,d);break;case"selectionchange":if(CC)break;case"keydown":case"keyup":By(f,n,d)}var g;if(im)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else js?$E(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(jE&&n.locale!=="ko"&&(js||y!=="onCompositionStart"?y==="onCompositionEnd"&&js&&(g=FE()):(Jr=d,tm="value"in Jr?Jr.value:Jr.textContent,js=!0)),H=Sc(c,y),0<H.length&&(y=new Dy(y,t,null,n,d),f.push({event:y,listeners:H}),g?y.data=g:(g=BE(n),g!==null&&(y.data=g)))),(g=pC?mC(t,n):gC(t,n))&&(c=Sc(c,"onBeforeInput"),0<c.length&&(d=new Dy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=g))}eT(f,e)})}function al(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=el(t,n),s!=null&&r.unshift(al(t,s,i)),s=el(t,e),s!=null&&r.push(al(t,s,i))),t=t.return}return r}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=el(n,s),u!=null&&o.unshift(al(n,u,l))):i||(u=el(n,s),u!=null&&o.push(al(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var kC=/\r\n?/g,NC=/\u0000|\uFFFD/g;function qy(t){return(typeof t=="string"?t:""+t).replace(kC,`
`).replace(NC,"")}function Cu(t,e,n){if(e=qy(e),qy(t)!==e&&n)throw Error(z(425))}function Ac(){}var Lf=null,Mf=null;function Vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uf=typeof setTimeout=="function"?setTimeout:void 0,bC=typeof clearTimeout=="function"?clearTimeout:void 0,Gy=typeof Promise=="function"?Promise:void 0,DC=typeof queueMicrotask=="function"?queueMicrotask:typeof Gy<"u"?function(t){return Gy.resolve(null).then(t).catch(OC)}:Uf;function OC(t){setTimeout(function(){throw t})}function Dd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),rl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);rl(e)}function oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ky(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var No=Math.random().toString(36).slice(2),qn="__reactFiber$"+No,ll="__reactProps$"+No,wr="__reactContainer$"+No,Ff="__reactEvents$"+No,LC="__reactListeners$"+No,MC="__reactHandles$"+No;function Gi(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ky(t);t!==null;){if(n=t[qn])return n;t=Ky(t)}return e}t=n,n=t.parentNode}return null}function Ll(t){return t=t[qn]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Eh(t){return t[ll]||null}var jf=[],Hs=-1;function Pi(t){return{current:t}}function je(t){0>Hs||(t.current=jf[Hs],jf[Hs]=null,Hs--)}function Me(t,e){Hs++,jf[Hs]=t.current,t.current=e}var vi={},Lt=Pi(vi),Yt=Pi(!1),ns=vi;function po(t,e){var n=t.type.contextTypes;if(!n)return vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xt(t){return t=t.childContextTypes,t!=null}function Cc(){je(Yt),je(Lt)}function Qy(t,e,n){if(Lt.current!==vi)throw Error(z(168));Me(Lt,e),Me(Yt,n)}function nT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,w1(t)||"Unknown",i));return qe({},n,r)}function Rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vi,ns=Lt.current,Me(Lt,t),Me(Yt,Yt.current),!0}function Yy(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=nT(t,e,ns),r.__reactInternalMemoizedMergedChildContext=t,je(Yt),je(Lt),Me(Lt,t)):je(Yt),Me(Yt,n)}var dr=null,Th=!1,Od=!1;function rT(t){dr===null?dr=[t]:dr.push(t)}function VC(t){Th=!0,rT(t)}function xi(){if(!Od&&dr!==null){Od=!0;var t=0,e=xe;try{var n=dr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dr=null,Th=!1}catch(i){throw dr!==null&&(dr=dr.slice(t+1)),PE(Xp,xi),i}finally{xe=e,Od=!1}}return null}var Ws=[],qs=0,Pc=null,xc=0,mn=[],gn=0,rs=null,fr=1,pr="";function $i(t,e){Ws[qs++]=xc,Ws[qs++]=Pc,Pc=t,xc=e}function iT(t,e,n){mn[gn++]=fr,mn[gn++]=pr,mn[gn++]=rs,rs=t;var r=fr;t=pr;var i=32-Nn(r)-1;r&=~(1<<i),n+=1;var s=32-Nn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fr=1<<32-Nn(e)+i|n<<i|r,pr=s+t}else fr=1<<s|n<<i|r,pr=t}function om(t){t.return!==null&&($i(t,1),iT(t,1,0))}function am(t){for(;t===Pc;)Pc=Ws[--qs],Ws[qs]=null,xc=Ws[--qs],Ws[qs]=null;for(;t===rs;)rs=mn[--gn],mn[gn]=null,pr=mn[--gn],mn[gn]=null,fr=mn[--gn],mn[gn]=null}var ln=null,on=null,ze=!1,xn=null;function sT(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Xy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,on=oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rs!==null?{id:fr,overflow:pr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,on=null,!0):!1;default:return!1}}function $f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(ze){var e=on;if(e){var n=e;if(!Xy(t,e)){if($f(t))throw Error(z(418));e=oi(n.nextSibling);var r=ln;e&&Xy(t,e)?sT(r,n):(t.flags=t.flags&-4097|2,ze=!1,ln=t)}}else{if($f(t))throw Error(z(418));t.flags=t.flags&-4097|2,ze=!1,ln=t}}}function Jy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function Ru(t){if(t!==ln)return!1;if(!ze)return Jy(t),ze=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vf(t.type,t.memoizedProps)),e&&(e=on)){if($f(t))throw oT(),Error(z(418));for(;e;)sT(t,e),e=oi(e.nextSibling)}if(Jy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=ln?oi(t.stateNode.nextSibling):null;return!0}function oT(){for(var t=on;t;)t=oi(t.nextSibling)}function mo(){on=ln=null,ze=!1}function lm(t){xn===null?xn=[t]:xn.push(t)}var UC=xr.ReactCurrentBatchConfig;function ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Pu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Zy(t){var e=t._init;return e(t._payload)}function aT(t){function e(S,v){if(t){var C=S.deletions;C===null?(S.deletions=[v],S.flags|=16):C.push(v)}}function n(S,v){if(!t)return null;for(;v!==null;)e(S,v),v=v.sibling;return null}function r(S,v){for(S=new Map;v!==null;)v.key!==null?S.set(v.key,v):S.set(v.index,v),v=v.sibling;return S}function i(S,v){return S=ci(S,v),S.index=0,S.sibling=null,S}function s(S,v,C){return S.index=C,t?(C=S.alternate,C!==null?(C=C.index,C<v?(S.flags|=2,v):C):(S.flags|=2,v)):(S.flags|=1048576,v)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,v,C,L){return v===null||v.tag!==6?(v=$d(C,S.mode,L),v.return=S,v):(v=i(v,C),v.return=S,v)}function u(S,v,C,L){var $=C.type;return $===Fs?d(S,v,C.props.children,L,C.key):v!==null&&(v.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===zr&&Zy($)===v.type)?(L=i(v,C.props),L.ref=ha(S,v,C),L.return=S,L):(L=nc(C.type,C.key,C.props,null,S.mode,L),L.ref=ha(S,v,C),L.return=S,L)}function c(S,v,C,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Bd(C,S.mode,L),v.return=S,v):(v=i(v,C.children||[]),v.return=S,v)}function d(S,v,C,L,$){return v===null||v.tag!==7?(v=es(C,S.mode,L,$),v.return=S,v):(v=i(v,C),v.return=S,v)}function f(S,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=$d(""+v,S.mode,C),v.return=S,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yu:return C=nc(v.type,v.key,v.props,null,S.mode,C),C.ref=ha(S,null,v),C.return=S,C;case Us:return v=Bd(v,S.mode,C),v.return=S,v;case zr:var L=v._init;return f(S,L(v._payload),C)}if(Ea(v)||oa(v))return v=es(v,S.mode,C,null),v.return=S,v;Pu(S,v)}return null}function m(S,v,C,L){var $=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return $!==null?null:l(S,v,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case yu:return C.key===$?u(S,v,C,L):null;case Us:return C.key===$?c(S,v,C,L):null;case zr:return $=C._init,m(S,v,$(C._payload),L)}if(Ea(C)||oa(C))return $!==null?null:d(S,v,C,L,null);Pu(S,C)}return null}function E(S,v,C,L,$){if(typeof L=="string"&&L!==""||typeof L=="number")return S=S.get(C)||null,l(v,S,""+L,$);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case yu:return S=S.get(L.key===null?C:L.key)||null,u(v,S,L,$);case Us:return S=S.get(L.key===null?C:L.key)||null,c(v,S,L,$);case zr:var H=L._init;return E(S,v,C,H(L._payload),$)}if(Ea(L)||oa(L))return S=S.get(C)||null,d(v,S,L,$,null);Pu(v,L)}return null}function A(S,v,C,L){for(var $=null,H=null,g=v,y=v=0,I=null;g!==null&&y<C.length;y++){g.index>y?(I=g,g=null):I=g.sibling;var T=m(S,g,C[y],L);if(T===null){g===null&&(g=I);break}t&&g&&T.alternate===null&&e(S,g),v=s(T,v,y),H===null?$=T:H.sibling=T,H=T,g=I}if(y===C.length)return n(S,g),ze&&$i(S,y),$;if(g===null){for(;y<C.length;y++)g=f(S,C[y],L),g!==null&&(v=s(g,v,y),H===null?$=g:H.sibling=g,H=g);return ze&&$i(S,y),$}for(g=r(S,g);y<C.length;y++)I=E(g,S,y,C[y],L),I!==null&&(t&&I.alternate!==null&&g.delete(I.key===null?y:I.key),v=s(I,v,y),H===null?$=I:H.sibling=I,H=I);return t&&g.forEach(function(k){return e(S,k)}),ze&&$i(S,y),$}function P(S,v,C,L){var $=oa(C);if(typeof $!="function")throw Error(z(150));if(C=$.call(C),C==null)throw Error(z(151));for(var H=$=null,g=v,y=v=0,I=null,T=C.next();g!==null&&!T.done;y++,T=C.next()){g.index>y?(I=g,g=null):I=g.sibling;var k=m(S,g,T.value,L);if(k===null){g===null&&(g=I);break}t&&g&&k.alternate===null&&e(S,g),v=s(k,v,y),H===null?$=k:H.sibling=k,H=k,g=I}if(T.done)return n(S,g),ze&&$i(S,y),$;if(g===null){for(;!T.done;y++,T=C.next())T=f(S,T.value,L),T!==null&&(v=s(T,v,y),H===null?$=T:H.sibling=T,H=T);return ze&&$i(S,y),$}for(g=r(S,g);!T.done;y++,T=C.next())T=E(g,S,y,T.value,L),T!==null&&(t&&T.alternate!==null&&g.delete(T.key===null?y:T.key),v=s(T,v,y),H===null?$=T:H.sibling=T,H=T);return t&&g.forEach(function(N){return e(S,N)}),ze&&$i(S,y),$}function b(S,v,C,L){if(typeof C=="object"&&C!==null&&C.type===Fs&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case yu:e:{for(var $=C.key,H=v;H!==null;){if(H.key===$){if($=C.type,$===Fs){if(H.tag===7){n(S,H.sibling),v=i(H,C.props.children),v.return=S,S=v;break e}}else if(H.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===zr&&Zy($)===H.type){n(S,H.sibling),v=i(H,C.props),v.ref=ha(S,H,C),v.return=S,S=v;break e}n(S,H);break}else e(S,H);H=H.sibling}C.type===Fs?(v=es(C.props.children,S.mode,L,C.key),v.return=S,S=v):(L=nc(C.type,C.key,C.props,null,S.mode,L),L.ref=ha(S,v,C),L.return=S,S=L)}return o(S);case Us:e:{for(H=C.key;v!==null;){if(v.key===H)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(S,v.sibling),v=i(v,C.children||[]),v.return=S,S=v;break e}else{n(S,v);break}else e(S,v);v=v.sibling}v=Bd(C,S.mode,L),v.return=S,S=v}return o(S);case zr:return H=C._init,b(S,v,H(C._payload),L)}if(Ea(C))return A(S,v,C,L);if(oa(C))return P(S,v,C,L);Pu(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(S,v.sibling),v=i(v,C),v.return=S,S=v):(n(S,v),v=$d(C,S.mode,L),v.return=S,S=v),o(S)):n(S,v)}return b}var go=aT(!0),lT=aT(!1),kc=Pi(null),Nc=null,Gs=null,um=null;function cm(){um=Gs=Nc=null}function hm(t){var e=kc.current;je(kc),t._currentValue=e}function zf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ro(t,e){Nc=t,um=Gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(um!==t)if(t={context:t,memoizedValue:e,next:null},Gs===null){if(Nc===null)throw Error(z(308));Gs=t,Nc.dependencies={lanes:0,firstContext:t}}else Gs=Gs.next=t;return e}var Ki=null;function dm(t){Ki===null?Ki=[t]:Ki.push(t)}function uT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hr=!1;function fm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ai(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Er(t,n)}return i=r.interleaved,i===null?(e.next=e,dm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Er(t,n)}function Yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jp(t,n)}}function e_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bc(t,e,n,r){var i=t.updateQueue;Hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,E=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:E,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,P=l;switch(m=e,E=n,P.tag){case 1:if(A=P.payload,typeof A=="function"){f=A.call(E,f,m);break e}f=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=P.payload,m=typeof A=="function"?A.call(E,f,m):A,m==null)break e;f=qe({},f,m);break e;case 2:Hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else E={eventTime:E,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=E,u=f):d=d.next=E,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=f}}function t_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Ml={},Yn=Pi(Ml),ul=Pi(Ml),cl=Pi(Ml);function Qi(t){if(t===Ml)throw Error(z(174));return t}function pm(t,e){switch(Me(cl,e),Me(ul,t),Me(Yn,Ml),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:If(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=If(e,t)}je(Yn),Me(Yn,e)}function yo(){je(Yn),je(ul),je(cl)}function hT(t){Qi(cl.current);var e=Qi(Yn.current),n=If(e,t.type);e!==n&&(Me(ul,t),Me(Yn,n))}function mm(t){ul.current===t&&(je(Yn),je(ul))}var He=Pi(0);function Dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ld=[];function gm(){for(var t=0;t<Ld.length;t++)Ld[t]._workInProgressVersionPrimary=null;Ld.length=0}var Xu=xr.ReactCurrentDispatcher,Md=xr.ReactCurrentBatchConfig,is=0,We=null,ut=null,ft=null,Oc=!1,Ua=!1,hl=0,FC=0;function kt(){throw Error(z(321))}function ym(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function _m(t,e,n,r,i,s){if(is=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xu.current=t===null||t.memoizedState===null?zC:HC,t=n(r,i),Ua){s=0;do{if(Ua=!1,hl=0,25<=s)throw Error(z(301));s+=1,ft=ut=null,e.updateQueue=null,Xu.current=WC,t=n(r,i)}while(Ua)}if(Xu.current=Lc,e=ut!==null&&ut.next!==null,is=0,ft=ut=We=null,Oc=!1,e)throw Error(z(300));return t}function vm(){var t=hl!==0;return hl=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?We.memoizedState=ft=t:ft=ft.next=t,ft}function wn(){if(ut===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=ft===null?We.memoizedState:ft.next;if(e!==null)ft=e,ut=t;else{if(t===null)throw Error(z(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},ft===null?We.memoizedState=ft=t:ft=ft.next=t}return ft}function dl(t,e){return typeof e=="function"?e(t):e}function Vd(t){var e=wn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((is&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,We.lanes|=d,ss|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Dn(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,We.lanes|=s,ss|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ud(t){var e=wn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function dT(){}function fT(t,e){var n=We,r=wn(),i=e(),s=!Dn(r.memoizedState,i);if(s&&(r.memoizedState=i,Qt=!0),r=r.queue,wm(gT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,fl(9,mT.bind(null,n,r,i,e),void 0,null),mt===null)throw Error(z(349));is&30||pT(n,e,i)}return i}function pT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mT(t,e,n,r){e.value=n,e.getSnapshot=r,yT(e)&&_T(t)}function gT(t,e,n){return n(function(){yT(e)&&_T(t)})}function yT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function _T(t){var e=Er(t,1);e!==null&&bn(e,t,1,-1)}function n_(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:t},e.queue=t,t=t.dispatch=BC.bind(null,We,t),[e.memoizedState,t]}function fl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vT(){return wn().memoizedState}function Ju(t,e,n,r){var i=Hn();We.flags|=t,i.memoizedState=fl(1|e,n,void 0,r===void 0?null:r)}function Ih(t,e,n,r){var i=wn();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&ym(r,o.deps)){i.memoizedState=fl(e,n,s,r);return}}We.flags|=t,i.memoizedState=fl(1|e,n,s,r)}function r_(t,e){return Ju(8390656,8,t,e)}function wm(t,e){return Ih(2048,8,t,e)}function wT(t,e){return Ih(4,2,t,e)}function ET(t,e){return Ih(4,4,t,e)}function TT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function IT(t,e,n){return n=n!=null?n.concat([t]):null,Ih(4,4,TT.bind(null,e,t),n)}function Em(){}function ST(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ym(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function AT(t,e){var n=wn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ym(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function CT(t,e,n){return is&21?(Dn(n,e)||(n=NE(),We.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function jC(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=Md.transition;Md.transition={};try{t(!1),e()}finally{xe=n,Md.transition=r}}function RT(){return wn().memoizedState}function $C(t,e,n){var r=ui(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},PT(t))xT(e,n);else if(n=uT(t,e,n,r),n!==null){var i=Bt();bn(n,t,r,i),kT(n,e,r)}}function BC(t,e,n){var r=ui(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(PT(t))xT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Dn(l,o)){var u=e.interleaved;u===null?(i.next=i,dm(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=uT(t,e,i,r),n!==null&&(i=Bt(),bn(n,t,r,i),kT(n,e,r))}}function PT(t){var e=t.alternate;return t===We||e!==null&&e===We}function xT(t,e){Ua=Oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jp(t,n)}}var Lc={readContext:vn,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},zC={readContext:vn,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:r_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ju(4194308,4,TT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ju(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ju(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$C.bind(null,We,t),[r.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:n_,useDebugValue:Em,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=n_(!1),e=t[0];return t=jC.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=We,i=Hn();if(ze){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),mt===null)throw Error(z(349));is&30||pT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,r_(gT.bind(null,r,s,t),[t]),r.flags|=2048,fl(9,mT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=mt.identifierPrefix;if(ze){var n=pr,r=fr;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=hl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=FC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},HC={readContext:vn,useCallback:ST,useContext:vn,useEffect:wm,useImperativeHandle:IT,useInsertionEffect:wT,useLayoutEffect:ET,useMemo:AT,useReducer:Vd,useRef:vT,useState:function(){return Vd(dl)},useDebugValue:Em,useDeferredValue:function(t){var e=wn();return CT(e,ut.memoizedState,t)},useTransition:function(){var t=Vd(dl)[0],e=wn().memoizedState;return[t,e]},useMutableSource:dT,useSyncExternalStore:fT,useId:RT,unstable_isNewReconciler:!1},WC={readContext:vn,useCallback:ST,useContext:vn,useEffect:wm,useImperativeHandle:IT,useInsertionEffect:wT,useLayoutEffect:ET,useMemo:AT,useReducer:Ud,useRef:vT,useState:function(){return Ud(dl)},useDebugValue:Em,useDeferredValue:function(t){var e=wn();return ut===null?e.memoizedState=t:CT(e,ut.memoizedState,t)},useTransition:function(){var t=Ud(dl)[0],e=wn().memoizedState;return[t,e]},useMutableSource:dT,useSyncExternalStore:fT,useId:RT,unstable_isNewReconciler:!1};function Cn(t,e){if(t&&t.defaultProps){e=qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sh={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=ui(t),s=yr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ai(t,s,i),e!==null&&(bn(e,t,i,r),Yu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=ui(t),s=yr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ai(t,s,i),e!==null&&(bn(e,t,i,r),Yu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),r=ui(t),i=yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ai(t,i,r),e!==null&&(bn(e,t,r,n),Yu(e,t,r))}};function i_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!sl(n,r)||!sl(i,s):!0}function NT(t,e,n){var r=!1,i=vi,s=e.contextType;return typeof s=="object"&&s!==null?s=vn(s):(i=Xt(e)?ns:Lt.current,r=e.contextTypes,s=(r=r!=null)?po(t,i):vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function s_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sh.enqueueReplaceState(e,e.state,null)}function Wf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vn(s):(s=Xt(e)?ns:Lt.current,i.context=po(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sh.enqueueReplaceState(i,i.state,null),bc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e){try{var n="",r=e;do n+=v1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var qC=typeof WeakMap=="function"?WeakMap:Map;function bT(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vc||(Vc=!0,np=r),qf(t,e)},n}function DT(t,e,n){n=yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qf(t,e),typeof r!="function"&&(li===null?li=new Set([this]):li.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function o_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new qC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=oR.bind(null,t,e,n),e.then(t,t))}function a_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function l_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yr(-1,1),e.tag=2,ai(n,e,1))),n.lanes|=1),t)}var GC=xr.ReactCurrentOwner,Qt=!1;function Ft(t,e,n,r){e.child=t===null?lT(e,null,n,r):go(e,t.child,n,r)}function u_(t,e,n,r,i){n=n.render;var s=e.ref;return ro(e,i),r=_m(t,e,n,r,s,i),n=vm(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(ze&&n&&om(e),e.flags|=1,Ft(t,e,r,i),e.child)}function c_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,OT(t,e,s,r,i)):(t=nc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:sl,n(o,r)&&t.ref===e.ref)return Tr(t,e,i)}return e.flags|=1,t=ci(s,r),t.ref=e.ref,t.return=e,e.child=t}function OT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(sl(s,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,Tr(t,e,i)}return Gf(t,e,n,r,i)}function LT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Qs,nn),nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(Qs,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(Qs,nn),nn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(Qs,nn),nn|=r;return Ft(t,e,i,n),e.child}function MT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,r,i){var s=Xt(n)?ns:Lt.current;return s=po(e,s),ro(e,i),n=_m(t,e,n,r,s,i),r=vm(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(ze&&r&&om(e),e.flags|=1,Ft(t,e,n,i),e.child)}function h_(t,e,n,r,i){if(Xt(n)){var s=!0;Rc(e)}else s=!1;if(ro(e,i),e.stateNode===null)Zu(t,e),NT(e,n,r),Wf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=vn(c):(c=Xt(n)?ns:Lt.current,c=po(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&s_(e,o,r,c),Hr=!1;var m=e.memoizedState;o.state=m,bc(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Yt.current||Hr?(typeof d=="function"&&(Hf(e,n,d,r),u=e.memoizedState),(l=Hr||i_(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cT(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Cn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=vn(u):(u=Xt(n)?ns:Lt.current,u=po(e,u));var E=n.getDerivedStateFromProps;(d=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&s_(e,o,r,u),Hr=!1,m=e.memoizedState,o.state=m,bc(e,r,o,i);var A=e.memoizedState;l!==f||m!==A||Yt.current||Hr?(typeof E=="function"&&(Hf(e,n,E,r),A=e.memoizedState),(c=Hr||i_(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Kf(t,e,n,r,s,i)}function Kf(t,e,n,r,i,s){MT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Yy(e,n,!1),Tr(t,e,s);r=e.stateNode,GC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=go(e,t.child,null,s),e.child=go(e,null,l,s)):Ft(t,e,l,s),e.memoizedState=r.state,i&&Yy(e,n,!0),e.child}function VT(t){var e=t.stateNode;e.pendingContext?Qy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qy(t,e.context,!1),pm(t,e.containerInfo)}function d_(t,e,n,r,i){return mo(),lm(i),e.flags|=256,Ft(t,e,n,r),e.child}var Qf={dehydrated:null,treeContext:null,retryLane:0};function Yf(t){return{baseLanes:t,cachePool:null,transitions:null}}function UT(t,e,n){var r=e.pendingProps,i=He.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(He,i&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rh(o,r,0,null),t=es(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yf(n),e.memoizedState=Qf,t):Tm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return KC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ci(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ci(l,s):(s=es(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Yf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qf,r}return s=t.child,t=s.sibling,r=ci(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tm(t,e){return e=Rh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xu(t,e,n,r){return r!==null&&lm(r),go(e,t.child,null,n),t=Tm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fd(Error(z(422))),xu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rh({mode:"visible",children:r.children},i,0,null),s=es(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&go(e,t.child,null,o),e.child.memoizedState=Yf(o),e.memoizedState=Qf,s);if(!(e.mode&1))return xu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(z(419)),r=Fd(s,r,void 0),xu(t,e,o,r)}if(l=(o&t.childLanes)!==0,Qt||l){if(r=mt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(t,i),bn(r,t,i,-1))}return Pm(),r=Fd(Error(z(421))),xu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,on=oi(i.nextSibling),ln=e,ze=!0,xn=null,t!==null&&(mn[gn++]=fr,mn[gn++]=pr,mn[gn++]=rs,fr=t.id,pr=t.overflow,rs=e),e=Tm(e,r.children),e.flags|=4096,e)}function f_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zf(t.return,e,n)}function jd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function FT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ft(t,e,r.children,n),r=He.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&f_(t,n,e);else if(t.tag===19)f_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(He,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Dc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Dc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jd(e,!0,n,null,s);break;case"together":jd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ci(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ci(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QC(t,e,n){switch(e.tag){case 3:VT(e),mo();break;case 5:hT(e);break;case 1:Xt(e.type)&&Rc(e);break;case 4:pm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(kc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(He,He.current&1),e.flags|=128,null):n&e.child.childLanes?UT(t,e,n):(Me(He,He.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);Me(He,He.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return FT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(He,He.current),r)break;return null;case 22:case 23:return e.lanes=0,LT(t,e,n)}return Tr(t,e,n)}var jT,Xf,$T,BT;jT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xf=function(){};$T=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qi(Yn.current);var s=null;switch(n){case"input":i=vf(t,i),r=vf(t,r),s=[];break;case"select":i=qe({},i,{value:void 0}),r=qe({},r,{value:void 0}),s=[];break;case"textarea":i=Tf(t,i),r=Tf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ac)}Sf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ja.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};BT=function(t,e,n,r){n!==r&&(e.flags|=4)};function da(t,e){if(!ze)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function YC(t,e,n){var r=e.pendingProps;switch(am(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Xt(e.type)&&Cc(),Nt(e),null;case 3:return r=e.stateNode,yo(),je(Yt),je(Lt),gm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ru(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xn!==null&&(sp(xn),xn=null))),Xf(t,e),Nt(e),null;case 5:mm(e);var i=Qi(cl.current);if(n=e.type,t!==null&&e.stateNode!=null)$T(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return Nt(e),null}if(t=Qi(Yn.current),Ru(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[qn]=e,r[ll]=s,t=(e.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<Ia.length;i++)Fe(Ia[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":Ty(r,s),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fe("invalid",r);break;case"textarea":Sy(r,s),Fe("invalid",r)}Sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Cu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Cu(r.textContent,l,t),i=["children",""+l]):Ja.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Fe("scroll",r)}switch(n){case"input":_u(r),Iy(r,s,!0);break;case"textarea":_u(r),Ay(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ac)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[qn]=e,t[ll]=r,jT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Af(n,r),n){case"dialog":Fe("cancel",t),Fe("close",t),i=r;break;case"iframe":case"object":case"embed":Fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ia.length;i++)Fe(Ia[i],t);i=r;break;case"source":Fe("error",t),i=r;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),i=r;break;case"details":Fe("toggle",t),i=r;break;case"input":Ty(t,r),i=vf(t,r),Fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=qe({},r,{value:void 0}),Fe("invalid",t);break;case"textarea":Sy(t,r),i=Tf(t,r),Fe("invalid",t);break;default:i=r}Sf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?vE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Za(t,u):typeof u=="number"&&Za(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ja.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Fe("scroll",t):u!=null&&qp(t,s,u,o))}switch(n){case"input":_u(t),Iy(t,r,!1);break;case"textarea":_u(t),Ay(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_i(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ac)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)BT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Qi(cl.current),Qi(Yn.current),Ru(e)){if(r=e.stateNode,n=e.memoizedProps,r[qn]=e,(s=r.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:Cu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[qn]=e,e.stateNode=r}return Nt(e),null;case 13:if(je(He),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ze&&on!==null&&e.mode&1&&!(e.flags&128))oT(),mo(),e.flags|=98560,s=!1;else if(s=Ru(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[qn]=e}else mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else xn!==null&&(sp(xn),xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||He.current&1?ct===0&&(ct=3):Pm())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return yo(),Xf(t,e),t===null&&ol(e.stateNode.containerInfo),Nt(e),null;case 10:return hm(e.type._context),Nt(e),null;case 17:return Xt(e.type)&&Cc(),Nt(e),null;case 19:if(je(He),s=e.memoizedState,s===null)return Nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)da(s,!1);else{if(ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dc(t),o!==null){for(e.flags|=128,da(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(He,He.current&1|2),e.child}t=t.sibling}s.tail!==null&&Je()>vo&&(e.flags|=128,r=!0,da(s,!1),e.lanes=4194304)}else{if(!r)if(t=Dc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ze)return Nt(e),null}else 2*Je()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,n=He.current,Me(He,r?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Rm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function XC(t,e){switch(am(e),e.tag){case 1:return Xt(e.type)&&Cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yo(),je(Yt),je(Lt),gm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mm(e),null;case 13:if(je(He),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(He),null;case 4:return yo(),null;case 10:return hm(e.type._context),null;case 22:case 23:return Rm(),null;case 24:return null;default:return null}}var ku=!1,Ot=!1,JC=typeof WeakSet=="function"?WeakSet:Set,X=null;function Ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(t,e,r)}else n.current=null}function Jf(t,e,n){try{n()}catch(r){Qe(t,e,r)}}var p_=!1;function ZC(t,e){if(Lf=Tc,t=GE(),sm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var E;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(E=f.firstChild)!==null;)m=f,f=E;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(E=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=E}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mf={focusedElem:t,selectionRange:n},Tc=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var P=A.memoizedProps,b=A.memoizedState,S=e.stateNode,v=S.getSnapshotBeforeUpdate(e.elementType===e.type?P:Cn(e.type,P),b);S.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(L){Qe(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return A=p_,p_=!1,A}function Fa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jf(e,n,s)}i=i.next}while(i!==r)}}function Ah(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zT(t){var e=t.alternate;e!==null&&(t.alternate=null,zT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[ll],delete e[Ff],delete e[LC],delete e[MC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function HT(t){return t.tag===5||t.tag===3||t.tag===4}function m_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||HT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ep(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ac));else if(r!==4&&(t=t.child,t!==null))for(ep(t,e,n),t=t.sibling;t!==null;)ep(t,e,n),t=t.sibling}function tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tp(t,e,n),t=t.sibling;t!==null;)tp(t,e,n),t=t.sibling}var Tt=null,Rn=!1;function Fr(t,e,n){for(n=n.child;n!==null;)WT(t,e,n),n=n.sibling}function WT(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(yh,n)}catch{}switch(n.tag){case 5:Ot||Ks(n,e);case 6:var r=Tt,i=Rn;Tt=null,Fr(t,e,n),Tt=r,Rn=i,Tt!==null&&(Rn?(t=Tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Rn?(t=Tt,n=n.stateNode,t.nodeType===8?Dd(t.parentNode,n):t.nodeType===1&&Dd(t,n),rl(t)):Dd(Tt,n.stateNode));break;case 4:r=Tt,i=Rn,Tt=n.stateNode.containerInfo,Rn=!0,Fr(t,e,n),Tt=r,Rn=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jf(n,e,o),i=i.next}while(i!==r)}Fr(t,e,n);break;case 1:if(!Ot&&(Ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Qe(n,e,l)}Fr(t,e,n);break;case 21:Fr(t,e,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,Fr(t,e,n),Ot=r):Fr(t,e,n);break;default:Fr(t,e,n)}}function g_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new JC),e.forEach(function(r){var i=lR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function An(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Tt=l.stateNode,Rn=!1;break e;case 3:Tt=l.stateNode.containerInfo,Rn=!0;break e;case 4:Tt=l.stateNode.containerInfo,Rn=!0;break e}l=l.return}if(Tt===null)throw Error(z(160));WT(s,o,i),Tt=null,Rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qT(e,t),e=e.sibling}function qT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(An(e,t),Bn(t),r&4){try{Fa(3,t,t.return),Ah(3,t)}catch(P){Qe(t,t.return,P)}try{Fa(5,t,t.return)}catch(P){Qe(t,t.return,P)}}break;case 1:An(e,t),Bn(t),r&512&&n!==null&&Ks(n,n.return);break;case 5:if(An(e,t),Bn(t),r&512&&n!==null&&Ks(n,n.return),t.flags&32){var i=t.stateNode;try{Za(i,"")}catch(P){Qe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&pE(i,s),Af(l,o);var c=Af(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?vE(i,f):d==="dangerouslySetInnerHTML"?yE(i,f):d==="children"?Za(i,f):qp(i,d,f,c)}switch(l){case"input":wf(i,s);break;case"textarea":mE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var E=s.value;E!=null?Zs(i,!!s.multiple,E,!1):m!==!!s.multiple&&(s.defaultValue!=null?Zs(i,!!s.multiple,s.defaultValue,!0):Zs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ll]=s}catch(P){Qe(t,t.return,P)}}break;case 6:if(An(e,t),Bn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Qe(t,t.return,P)}}break;case 3:if(An(e,t),Bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{rl(e.containerInfo)}catch(P){Qe(t,t.return,P)}break;case 4:An(e,t),Bn(t);break;case 13:An(e,t),Bn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Am=Je())),r&4&&g_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||d,An(e,t),Ot=c):An(e,t),Bn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(X=t,d=t.child;d!==null;){for(f=X=d;X!==null;){switch(m=X,E=m.child,m.tag){case 0:case 11:case 14:case 15:Fa(4,m,m.return);break;case 1:Ks(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(P){Qe(r,n,P)}}break;case 5:Ks(m,m.return);break;case 22:if(m.memoizedState!==null){__(f);continue}}E!==null?(E.return=m,X=E):__(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=_E("display",o))}catch(P){Qe(t,t.return,P)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Qe(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:An(e,t),Bn(t),r&4&&g_(t);break;case 21:break;default:An(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(HT(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Za(i,""),r.flags&=-33);var s=m_(t);tp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=m_(t);ep(t,l,o);break;default:throw Error(z(161))}}catch(u){Qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eR(t,e,n){X=t,GT(t)}function GT(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ku;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ot;l=ku;var c=Ot;if(ku=o,(Ot=u)&&!c)for(X=i;X!==null;)o=X,u=o.child,o.tag===22&&o.memoizedState!==null?v_(i):u!==null?(u.return=o,X=u):v_(i);for(;s!==null;)X=s,GT(s),s=s.sibling;X=i,ku=l,Ot=c}y_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):y_(t)}}function y_(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Ah(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&t_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}t_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&rl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ot||e.flags&512&&Zf(e)}catch(m){Qe(e,e.return,m)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function __(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function v_(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ah(4,e)}catch(u){Qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Qe(e,i,u)}}var s=e.return;try{Zf(e)}catch(u){Qe(e,s,u)}break;case 5:var o=e.return;try{Zf(e)}catch(u){Qe(e,o,u)}}}catch(u){Qe(e,e.return,u)}if(e===t){X=null;break}var l=e.sibling;if(l!==null){l.return=e.return,X=l;break}X=e.return}}var tR=Math.ceil,Mc=xr.ReactCurrentDispatcher,Im=xr.ReactCurrentOwner,_n=xr.ReactCurrentBatchConfig,Te=0,mt=null,nt=null,At=0,nn=0,Qs=Pi(0),ct=0,pl=null,ss=0,Ch=0,Sm=0,ja=null,Kt=null,Am=0,vo=1/0,hr=null,Vc=!1,np=null,li=null,Nu=!1,Zr=null,Uc=0,$a=0,rp=null,ec=-1,tc=0;function Bt(){return Te&6?Je():ec!==-1?ec:ec=Je()}function ui(t){return t.mode&1?Te&2&&At!==0?At&-At:UC.transition!==null?(tc===0&&(tc=NE()),tc):(t=xe,t!==0||(t=window.event,t=t===void 0?16:UE(t.type)),t):1}function bn(t,e,n,r){if(50<$a)throw $a=0,rp=null,Error(z(185));Dl(t,n,r),(!(Te&2)||t!==mt)&&(t===mt&&(!(Te&2)&&(Ch|=n),ct===4&&qr(t,At)),Jt(t,r),n===1&&Te===0&&!(e.mode&1)&&(vo=Je()+500,Th&&xi()))}function Jt(t,e){var n=t.callbackNode;U1(t,e);var r=Ec(t,t===mt?At:0);if(r===0)n!==null&&Py(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Py(n),e===1)t.tag===0?VC(w_.bind(null,t)):rT(w_.bind(null,t)),DC(function(){!(Te&6)&&xi()}),n=null;else{switch(bE(r)){case 1:n=Xp;break;case 4:n=xE;break;case 16:n=wc;break;case 536870912:n=kE;break;default:n=wc}n=tI(n,KT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function KT(t,e){if(ec=-1,tc=0,Te&6)throw Error(z(327));var n=t.callbackNode;if(io()&&t.callbackNode!==n)return null;var r=Ec(t,t===mt?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fc(t,r);else{e=r;var i=Te;Te|=2;var s=YT();(mt!==t||At!==e)&&(hr=null,vo=Je()+500,Zi(t,e));do try{iR();break}catch(l){QT(t,l)}while(!0);cm(),Mc.current=s,Te=i,nt!==null?e=0:(mt=null,At=0,e=ct)}if(e!==0){if(e===2&&(i=kf(t),i!==0&&(r=i,e=ip(t,i))),e===1)throw n=pl,Zi(t,0),qr(t,r),Jt(t,Je()),n;if(e===6)qr(t,r);else{if(i=t.current.alternate,!(r&30)&&!nR(i)&&(e=Fc(t,r),e===2&&(s=kf(t),s!==0&&(r=s,e=ip(t,s))),e===1))throw n=pl,Zi(t,0),qr(t,r),Jt(t,Je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Bi(t,Kt,hr);break;case 3:if(qr(t,r),(r&130023424)===r&&(e=Am+500-Je(),10<e)){if(Ec(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Uf(Bi.bind(null,t,Kt,hr),e);break}Bi(t,Kt,hr);break;case 4:if(qr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Nn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tR(r/1960))-r,10<r){t.timeoutHandle=Uf(Bi.bind(null,t,Kt,hr),r);break}Bi(t,Kt,hr);break;case 5:Bi(t,Kt,hr);break;default:throw Error(z(329))}}}return Jt(t,Je()),t.callbackNode===n?KT.bind(null,t):null}function ip(t,e){var n=ja;return t.current.memoizedState.isDehydrated&&(Zi(t,e).flags|=256),t=Fc(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&sp(e)),t}function sp(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function nR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qr(t,e){for(e&=~Sm,e&=~Ch,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function w_(t){if(Te&6)throw Error(z(327));io();var e=Ec(t,0);if(!(e&1))return Jt(t,Je()),null;var n=Fc(t,e);if(t.tag!==0&&n===2){var r=kf(t);r!==0&&(e=r,n=ip(t,r))}if(n===1)throw n=pl,Zi(t,0),qr(t,e),Jt(t,Je()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bi(t,Kt,hr),Jt(t,Je()),null}function Cm(t,e){var n=Te;Te|=1;try{return t(e)}finally{Te=n,Te===0&&(vo=Je()+500,Th&&xi())}}function os(t){Zr!==null&&Zr.tag===0&&!(Te&6)&&io();var e=Te;Te|=1;var n=_n.transition,r=xe;try{if(_n.transition=null,xe=1,t)return t()}finally{xe=r,_n.transition=n,Te=e,!(Te&6)&&xi()}}function Rm(){nn=Qs.current,je(Qs)}function Zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bC(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(am(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cc();break;case 3:yo(),je(Yt),je(Lt),gm();break;case 5:mm(r);break;case 4:yo();break;case 13:je(He);break;case 19:je(He);break;case 10:hm(r.type._context);break;case 22:case 23:Rm()}n=n.return}if(mt=t,nt=t=ci(t.current,null),At=nn=e,ct=0,pl=null,Sm=Ch=ss=0,Kt=ja=null,Ki!==null){for(e=0;e<Ki.length;e++)if(n=Ki[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ki=null}return t}function QT(t,e){do{var n=nt;try{if(cm(),Xu.current=Lc,Oc){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oc=!1}if(is=0,ft=ut=We=null,Ua=!1,hl=0,Im.current=null,n===null||n.return===null){ct=1,pl=e,nt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=At,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var E=a_(o);if(E!==null){E.flags&=-257,l_(E,o,l,s,e),E.mode&1&&o_(s,c,e),e=E,u=c;var A=e.updateQueue;if(A===null){var P=new Set;P.add(u),e.updateQueue=P}else A.add(u);break e}else{if(!(e&1)){o_(s,c,e),Pm();break e}u=Error(z(426))}}else if(ze&&l.mode&1){var b=a_(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),l_(b,o,l,s,e),lm(_o(u,l));break e}}s=u=_o(u,l),ct!==4&&(ct=2),ja===null?ja=[s]:ja.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=bT(s,u,e);e_(s,S);break e;case 1:l=u;var v=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(li===null||!li.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=DT(s,l,e);e_(s,L);break e}}s=s.return}while(s!==null)}JT(n)}catch($){e=$,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(!0)}function YT(){var t=Mc.current;return Mc.current=Lc,t===null?Lc:t}function Pm(){(ct===0||ct===3||ct===2)&&(ct=4),mt===null||!(ss&268435455)&&!(Ch&268435455)||qr(mt,At)}function Fc(t,e){var n=Te;Te|=2;var r=YT();(mt!==t||At!==e)&&(hr=null,Zi(t,e));do try{rR();break}catch(i){QT(t,i)}while(!0);if(cm(),Te=n,Mc.current=r,nt!==null)throw Error(z(261));return mt=null,At=0,ct}function rR(){for(;nt!==null;)XT(nt)}function iR(){for(;nt!==null&&!x1();)XT(nt)}function XT(t){var e=eI(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?JT(t):nt=e,Im.current=null}function JT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=XC(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,nt=null;return}}else if(n=YC(n,e,nn),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);ct===0&&(ct=5)}function Bi(t,e,n){var r=xe,i=_n.transition;try{_n.transition=null,xe=1,sR(t,e,n,r)}finally{_n.transition=i,xe=r}return null}function sR(t,e,n,r){do io();while(Zr!==null);if(Te&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(F1(t,s),t===mt&&(nt=mt=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nu||(Nu=!0,tI(wc,function(){return io(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_n.transition,_n.transition=null;var o=xe;xe=1;var l=Te;Te|=4,Im.current=null,ZC(t,n),qT(n,t),AC(Mf),Tc=!!Lf,Mf=Lf=null,t.current=n,eR(n),k1(),Te=l,xe=o,_n.transition=s}else t.current=n;if(Nu&&(Nu=!1,Zr=t,Uc=i),s=t.pendingLanes,s===0&&(li=null),D1(n.stateNode),Jt(t,Je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vc)throw Vc=!1,t=np,np=null,t;return Uc&1&&t.tag!==0&&io(),s=t.pendingLanes,s&1?t===rp?$a++:($a=0,rp=t):$a=0,xi(),null}function io(){if(Zr!==null){var t=bE(Uc),e=_n.transition,n=xe;try{if(_n.transition=null,xe=16>t?16:t,Zr===null)var r=!1;else{if(t=Zr,Zr=null,Uc=0,Te&6)throw Error(z(331));var i=Te;for(Te|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(X=c;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:Fa(8,d,s)}var f=d.child;if(f!==null)f.return=d,X=f;else for(;X!==null;){d=X;var m=d.sibling,E=d.return;if(zT(d),d===c){X=null;break}if(m!==null){m.return=E,X=m;break}X=E}}}var A=s.alternate;if(A!==null){var P=A.child;if(P!==null){A.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fa(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,X=S;break e}X=s.return}}var v=t.current;for(X=v;X!==null;){o=X;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,X=C;else e:for(o=v;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ah(9,l)}}catch($){Qe(l,l.return,$)}if(l===o){X=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,X=L;break e}X=l.return}}if(Te=i,xi(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(yh,t)}catch{}r=!0}return r}finally{xe=n,_n.transition=e}}return!1}function E_(t,e,n){e=_o(n,e),e=bT(t,e,1),t=ai(t,e,1),e=Bt(),t!==null&&(Dl(t,1,e),Jt(t,e))}function Qe(t,e,n){if(t.tag===3)E_(t,t,n);else for(;e!==null;){if(e.tag===3){E_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(li===null||!li.has(r))){t=_o(n,t),t=DT(e,t,1),e=ai(e,t,1),t=Bt(),e!==null&&(Dl(e,1,t),Jt(e,t));break}}e=e.return}}function oR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,mt===t&&(At&n)===n&&(ct===4||ct===3&&(At&130023424)===At&&500>Je()-Am?Zi(t,0):Sm|=n),Jt(t,e)}function ZT(t,e){e===0&&(t.mode&1?(e=Eu,Eu<<=1,!(Eu&130023424)&&(Eu=4194304)):e=1);var n=Bt();t=Er(t,e),t!==null&&(Dl(t,e,n),Jt(t,n))}function aR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ZT(t,n)}function lR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),ZT(t,n)}var eI;eI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,QC(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,ze&&e.flags&1048576&&iT(e,xc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zu(t,e),t=e.pendingProps;var i=po(e,Lt.current);ro(e,n),i=_m(null,e,r,t,i,n);var s=vm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xt(r)?(s=!0,Rc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fm(e),i.updater=Sh,e.stateNode=i,i._reactInternals=e,Wf(e,r,t,n),e=Kf(null,e,r,!0,s,n)):(e.tag=0,ze&&s&&om(e),Ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cR(r),t=Cn(r,t),i){case 0:e=Gf(null,e,r,t,n);break e;case 1:e=h_(null,e,r,t,n);break e;case 11:e=u_(null,e,r,t,n);break e;case 14:e=c_(null,e,r,Cn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),Gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),h_(t,e,r,i,n);case 3:e:{if(VT(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cT(t,e),bc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=_o(Error(z(423)),e),e=d_(t,e,r,n,i);break e}else if(r!==i){i=_o(Error(z(424)),e),e=d_(t,e,r,n,i);break e}else for(on=oi(e.stateNode.containerInfo.firstChild),ln=e,ze=!0,xn=null,n=lT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mo(),r===i){e=Tr(t,e,n);break e}Ft(t,e,r,n)}e=e.child}return e;case 5:return hT(e),t===null&&Bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vf(r,i)?o=null:s!==null&&Vf(r,s)&&(e.flags|=32),MT(t,e),Ft(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return UT(t,e,n);case 4:return pm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=go(e,null,r,n):Ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),u_(t,e,r,i,n);case 7:return Ft(t,e,e.pendingProps,n),e.child;case 8:return Ft(t,e,e.pendingProps.children,n),e.child;case 12:return Ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(kc,r._currentValue),r._currentValue=o,s!==null)if(Dn(s.value,o)){if(s.children===i.children&&!Yt.current){e=Tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=yr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),zf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ro(e,n),i=vn(i),r=r(i),e.flags|=1,Ft(t,e,r,n),e.child;case 14:return r=e.type,i=Cn(r,e.pendingProps),i=Cn(r.type,i),c_(t,e,r,i,n);case 15:return OT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),Zu(t,e),e.tag=1,Xt(r)?(t=!0,Rc(e)):t=!1,ro(e,n),NT(e,r,i),Wf(e,r,i,n),Kf(null,e,r,!0,t,n);case 19:return FT(t,e,n);case 22:return LT(t,e,n)}throw Error(z(156,e.tag))};function tI(t,e){return PE(t,e)}function uR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,r){return new uR(t,e,n,r)}function xm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cR(t){if(typeof t=="function")return xm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kp)return 11;if(t===Qp)return 14}return 2}function ci(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fs:return es(n.children,i,s,e);case Gp:o=8,i|=8;break;case mf:return t=yn(12,n,e,i|2),t.elementType=mf,t.lanes=s,t;case gf:return t=yn(13,n,e,i),t.elementType=gf,t.lanes=s,t;case yf:return t=yn(19,n,e,i),t.elementType=yf,t.lanes=s,t;case hE:return Rh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uE:o=10;break e;case cE:o=9;break e;case Kp:o=11;break e;case Qp:o=14;break e;case zr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=yn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function es(t,e,n,r){return t=yn(7,t,r,e),t.lanes=n,t}function Rh(t,e,n,r){return t=yn(22,t,r,e),t.elementType=hE,t.lanes=n,t.stateNode={isHidden:!1},t}function $d(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function Bd(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Td(0),this.expirationTimes=Td(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Td(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function km(t,e,n,r,i,s,o,l,u){return t=new hR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fm(s),t}function dR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nI(t){if(!t)return vi;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Xt(n))return nT(t,n,e)}return e}function rI(t,e,n,r,i,s,o,l,u){return t=km(n,r,!0,t,i,s,o,l,u),t.context=nI(null),n=t.current,r=Bt(),i=ui(n),s=yr(r,i),s.callback=e??null,ai(n,s,i),t.current.lanes=i,Dl(t,i,r),Jt(t,r),t}function Ph(t,e,n,r){var i=e.current,s=Bt(),o=ui(i);return n=nI(n),e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ai(i,e,o),t!==null&&(bn(t,i,o,s),Yu(t,i,o)),o}function jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function T_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nm(t,e){T_(t,e),(t=t.alternate)&&T_(t,e)}function fR(){return null}var iI=typeof reportError=="function"?reportError:function(t){console.error(t)};function bm(t){this._internalRoot=t}xh.prototype.render=bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Ph(t,e,null,null)};xh.prototype.unmount=bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){Ph(null,t,null,null)}),e[wr]=null}};function xh(t){this._internalRoot=t}xh.prototype.unstable_scheduleHydration=function(t){if(t){var e=LE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wr.length&&e!==0&&e<Wr[n].priority;n++);Wr.splice(n,0,t),n===0&&VE(t)}};function Dm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function I_(){}function pR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=jc(o);s.call(c)}}var o=rI(e,r,t,0,null,!1,!1,"",I_);return t._reactRootContainer=o,t[wr]=o.current,ol(t.nodeType===8?t.parentNode:t),os(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=jc(u);l.call(c)}}var u=km(t,0,!1,null,null,!1,!1,"",I_);return t._reactRootContainer=u,t[wr]=u.current,ol(t.nodeType===8?t.parentNode:t),os(function(){Ph(e,u,n,r)}),u}function Nh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=jc(o);l.call(u)}}Ph(e,o,t,i)}else o=pR(n,e,t,i,r);return jc(o)}DE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ta(e.pendingLanes);n!==0&&(Jp(e,n|1),Jt(e,Je()),!(Te&6)&&(vo=Je()+500,xi()))}break;case 13:os(function(){var r=Er(t,1);if(r!==null){var i=Bt();bn(r,t,1,i)}}),Nm(t,1)}};Zp=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=Bt();bn(e,t,134217728,n)}Nm(t,134217728)}};OE=function(t){if(t.tag===13){var e=ui(t),n=Er(t,e);if(n!==null){var r=Bt();bn(n,t,e,r)}Nm(t,e)}};LE=function(){return xe};ME=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};Rf=function(t,e,n){switch(e){case"input":if(wf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Eh(r);if(!i)throw Error(z(90));fE(r),wf(r,i)}}}break;case"textarea":mE(t,n);break;case"select":e=n.value,e!=null&&Zs(t,!!n.multiple,e,!1)}};TE=Cm;IE=os;var mR={usingClientEntryPoint:!1,Events:[Ll,zs,Eh,wE,EE,Cm]},fa={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gR={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=CE(t),t===null?null:t.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||fR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{yh=bu.inject(gR),Qn=bu}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mR;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dm(e))throw Error(z(200));return dR(t,e,null,n)};hn.createRoot=function(t,e){if(!Dm(t))throw Error(z(299));var n=!1,r="",i=iI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=km(t,1,!1,null,null,n,!1,r,i),t[wr]=e.current,ol(t.nodeType===8?t.parentNode:t),new bm(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=CE(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return os(t)};hn.hydrate=function(t,e,n){if(!kh(e))throw Error(z(200));return Nh(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Dm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iI;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rI(e,null,t,1,n??null,i,!1,s,o),t[wr]=e.current,ol(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xh(e)};hn.render=function(t,e,n){if(!kh(e))throw Error(z(200));return Nh(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!kh(t))throw Error(z(40));return t._reactRootContainer?(os(function(){Nh(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};hn.unstable_batchedUpdates=Cm;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kh(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Nh(t,e,n,!1,r)};hn.version="18.3.1-next-f1338f8080-20240426";function sI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sI)}catch(t){console.error(t)}}sI(),sE.exports=hn;var Om=sE.exports;const yR=Gw(Om),_R=qw({__proto__:null,default:yR},[Om]);var oI,S_=Om;oI=S_.createRoot,S_.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Be(){return Be=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Be.apply(this,arguments)}var tt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tt||(tt={}));const A_="popstate";function vR(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=kr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ml("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:ls(s))}function r(i,s){as(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return ER(e,n,r,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function as(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function wR(){return Math.random().toString(36).substr(2,8)}function C_(t,e){return{usr:t.state,key:t.key,idx:e}}function ml(t,e,n,r){return n===void 0&&(n=null),Be({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?kr(e):e,{state:n,key:e&&e.key||r||wR()})}function ls(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function kr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ER(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Be({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=tt.Pop;let b=d(),S=b==null?null:b-c;c=b,u&&u({action:l,location:P.location,delta:S})}function m(b,S){l=tt.Push;let v=ml(P.location,b,S);n&&n(v,b),c=d()+1;let C=C_(v,c),L=P.createHref(v);try{o.pushState(C,"",L)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;i.location.assign(L)}s&&u&&u({action:l,location:P.location,delta:1})}function E(b,S){l=tt.Replace;let v=ml(P.location,b,S);n&&n(v,b),c=d();let C=C_(v,c),L=P.createHref(v);o.replaceState(C,"",L),s&&u&&u({action:l,location:P.location,delta:0})}function A(b){let S=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof b=="string"?b:ls(b);return v=v.replace(/ $/,"%20"),de(S,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,S)}let P={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(A_,f),u=b,()=>{i.removeEventListener(A_,f),u=null}},createHref(b){return e(i,b)},createURL:A,encodeLocation(b){let S=A(b);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:E,go(b){return o.go(b)}};return P}var Pe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Pe||(Pe={}));const TR=new Set(["lazy","caseSensitive","path","id","index","children"]);function IR(t){return t.index===!0}function $c(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(de(i.index!==!0||!i.children,"Cannot specify children on an index route"),de(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),IR(i)){let u=Be({},i,e(i),{id:l});return r[l]=u,u}else{let u=Be({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=$c(i.children,e,o,r)),u}})}function Hi(t,e,n){return n===void 0&&(n="/"),rc(t,e,n,!1)}function rc(t,e,n,r){let i=typeof e=="string"?kr(e):e,s=Ir(i.pathname||"/",n);if(s==null)return null;let o=aI(t);AR(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=MR(s);l=OR(o[u],c,r)}return l}function SR(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function aI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(de(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=_r([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),aI(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:bR(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of lI(s.path))i(s,o,u)}),e}function lI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=lI(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function AR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:DR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const CR=/^:[\w-]+$/,RR=3,PR=2,xR=1,kR=10,NR=-2,R_=t=>t==="*";function bR(t,e){let n=t.split("/"),r=n.length;return n.some(R_)&&(r+=NR),e&&(r+=PR),n.filter(i=>!R_(i)).reduce((i,s)=>i+(CR.test(s)?RR:s===""?xR:kR),r)}function DR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function OR(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Bc({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Bc({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:_r([s,f.pathname]),pathnameBase:FR(_r([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=_r([s,f.pathnameBase]))}return o}function Bc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=LR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let P=l[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const A=l[f];return E&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function LR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),as(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function MR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return as(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ir(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function VR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?kr(t):t;return{pathname:n?n.startsWith("/")?n:UR(n,e):e,search:jR(r),hash:$R(i)}}function UR(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bh(t,e){let n=uI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Dh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=kr(t):(i=Be({},t),de(!i.pathname||!i.pathname.includes("?"),zd("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),zd("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),zd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=VR(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const _r=t=>t.join("/").replace(/\/\/+/g,"/"),FR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),jR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$R=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class zc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function gl(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cI=["post","put","patch","delete"],BR=new Set(cI),zR=["get",...cI],HR=new Set(zR),WR=new Set([301,302,303,307,308]),qR=new Set([307,308]),Hd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},GR={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},pa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Lm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,KR=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),hI="remix-router-transitions";function QR(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;de(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=D=>({hasErrorBoundary:x(D)})}else i=KR;let s={},o=$c(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.dataStrategy||ZR,d=t.patchRoutesOnNavigation,f=Be({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),m=null,E=new Set,A=null,P=null,b=null,S=t.hydrationData!=null,v=Hi(o,t.history.location,u),C=!1,L=null;if(v==null&&!d){let x=qt(404,{pathname:t.history.location.pathname}),{matches:D,route:M}=U_(o);v=D,L={[M.id]:x}}v&&!t.hydrationData&&Ui(v,o,t.history.location.pathname).active&&(v=null);let $;if(v)if(v.some(x=>x.route.lazy))$=!1;else if(!v.some(x=>x.route.loader))$=!0;else if(f.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null;if(D){let M=v.findIndex(B=>D[B.route.id]!==void 0);$=v.slice(0,M+1).every(B=>!ap(B.route,x,D))}else $=v.every(M=>!ap(M.route,x,D))}else $=t.hydrationData!=null;else if($=!1,v=[],f.v7_partialHydration){let x=Ui(null,o,t.history.location.pathname);x.active&&x.matches&&(C=!0,v=x.matches)}let H,g={historyAction:t.history.action,location:t.history.location,matches:v,initialized:$,navigation:Hd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||L,fetchers:new Map,blockers:new Map},y=tt.Pop,I=!1,T,k=!1,N=new Map,R=null,be=!1,yt=!1,Mn=[],Wt=new Set,W=new Map,ie=0,ue=-1,Ae=new Map,fe=new Set,ke=new Map,Vt=new Map,Ye=new Set,_t=new Map,vt=new Map,Es;function ad(){if(m=t.history.listen(x=>{let{action:D,location:M,delta:B}=x;if(Es){Es(),Es=void 0;return}as(vt.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=Yo({currentLocation:g.location,nextLocation:M,historyAction:D});if(G&&B!=null){let ee=new Promise(ae=>{Es=ae});t.history.go(B*-1),Li(G,{state:"blocked",location:M,proceed(){Li(G,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),ee.then(()=>t.history.go(B))},reset(){let ae=new Map(g.blockers);ae.set(G,pa),ot({blockers:ae})}});return}return Un(D,M)}),n){fP(e,N);let x=()=>pP(e,N);e.addEventListener("pagehide",x),R=()=>e.removeEventListener("pagehide",x)}return g.initialized||Un(tt.Pop,g.location,{initialHydration:!0}),H}function Ts(){m&&m(),R&&R(),E.clear(),T&&T.abort(),g.fetchers.forEach((x,D)=>As(D)),g.blockers.forEach((x,D)=>Rs(D))}function Is(x){return E.add(x),()=>E.delete(x)}function ot(x,D){D===void 0&&(D={}),g=Be({},g,x);let M=[],B=[];f.v7_fetcherPersist&&g.fetchers.forEach((G,ee)=>{G.state==="idle"&&(Ye.has(ee)?B.push(ee):M.push(ee))}),Ye.forEach(G=>{!g.fetchers.has(G)&&!W.has(G)&&B.push(G)}),[...E].forEach(G=>G(g,{deletedFetchers:B,viewTransitionOpts:D.viewTransitionOpts,flushSync:D.flushSync===!0})),f.v7_fetcherPersist?(M.forEach(G=>g.fetchers.delete(G)),B.forEach(G=>As(G))):B.forEach(G=>Ye.delete(G))}function Vn(x,D,M){var B,G;let{flushSync:ee}=M===void 0?{}:M,ae=g.actionData!=null&&g.navigation.formMethod!=null&&Pn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((B=x.state)==null?void 0:B._isRedirect)!==!0,Z;D.actionData?Object.keys(D.actionData).length>0?Z=D.actionData:Z=null:ae?Z=g.actionData:Z=null;let J=D.loaderData?M_(g.loaderData,D.loaderData,D.matches||[],D.errors):g.loaderData,Y=g.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((he,Ze)=>Y.set(Ze,pa)));let te=I===!0||g.navigation.formMethod!=null&&Pn(g.navigation.formMethod)&&((G=x.state)==null?void 0:G._isRedirect)!==!0;l&&(o=l,l=void 0),be||y===tt.Pop||(y===tt.Push?t.history.push(x,x.state):y===tt.Replace&&t.history.replace(x,x.state));let ce;if(y===tt.Pop){let he=N.get(g.location.pathname);he&&he.has(x.pathname)?ce={currentLocation:g.location,nextLocation:x}:N.has(x.pathname)&&(ce={currentLocation:x,nextLocation:g.location})}else if(k){let he=N.get(g.location.pathname);he?he.add(x.pathname):(he=new Set([x.pathname]),N.set(g.location.pathname,he)),ce={currentLocation:g.location,nextLocation:x}}ot(Be({},D,{actionData:Z,loaderData:J,historyAction:y,location:x,initialized:!0,navigation:Hd,revalidation:"idle",restoreScrollPosition:Vi(x,D.matches||g.matches),preventScrollReset:te,blockers:Y}),{viewTransitionOpts:ce,flushSync:ee===!0}),y=tt.Pop,I=!1,k=!1,be=!1,yt=!1,Mn=[]}async function Ss(x,D){if(typeof x=="number"){t.history.go(x);return}let M=op(g.location,g.matches,u,f.v7_prependBasename,x,f.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:B,submission:G,error:ee}=P_(f.v7_normalizeFormMethod,!1,M,D),ae=g.location,Z=ml(g.location,B,D&&D.state);Z=Be({},Z,t.history.encodeLocation(Z));let J=D&&D.replace!=null?D.replace:void 0,Y=tt.Push;J===!0?Y=tt.Replace:J===!1||G!=null&&Pn(G.formMethod)&&G.formAction===g.location.pathname+g.location.search&&(Y=tt.Replace);let te=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,ce=(D&&D.flushSync)===!0,he=Yo({currentLocation:ae,nextLocation:Z,historyAction:Y});if(he){Li(he,{state:"blocked",location:Z,proceed(){Li(he,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),Ss(x,D)},reset(){let Ze=new Map(g.blockers);Ze.set(he,pa),ot({blockers:Ze})}});return}return await Un(Y,Z,{submission:G,pendingError:ee,preventScrollReset:te,replace:D&&D.replace,enableViewTransition:D&&D.viewTransition,flushSync:ce})}function Ho(){if(lt(),ot({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Un(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Un(y||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:k===!0})}}async function Un(x,D,M){T&&T.abort(),T=null,y=x,be=(M&&M.startUninterruptedRevalidation)===!0,nu(g.location,g.matches),I=(M&&M.preventScrollReset)===!0,k=(M&&M.enableViewTransition)===!0;let B=l||o,G=M&&M.overrideNavigation,ee=M!=null&&M.initialHydration&&g.matches&&g.matches.length>0&&!C?g.matches:Hi(B,D,u),ae=(M&&M.flushSync)===!0;if(ee&&g.initialized&&!yt&&sP(g.location,D)&&!(M&&M.submission&&Pn(M.submission.formMethod))){Vn(D,{matches:ee},{flushSync:ae});return}let Z=Ui(ee,B,D.pathname);if(Z.active&&Z.matches&&(ee=Z.matches),!ee){let{error:Re,notFoundMatches:_e,route:Le}=sr(D.pathname);Vn(D,{matches:_e,loaderData:{},errors:{[Le.id]:Re}},{flushSync:ae});return}T=new AbortController;let J=Ds(t.history,D,T.signal,M&&M.submission),Y;if(M&&M.pendingError)Y=[Wi(ee).route.id,{type:Pe.error,error:M.pendingError}];else if(M&&M.submission&&Pn(M.submission.formMethod)){let Re=await ld(J,D,M.submission,ee,Z.active,{replace:M.replace,flushSync:ae});if(Re.shortCircuited)return;if(Re.pendingActionResult){let[_e,Le]=Re.pendingActionResult;if(rn(Le)&&gl(Le.error)&&Le.error.status===404){T=null,Vn(D,{matches:Re.matches,loaderData:{},errors:{[_e]:Le.error}});return}}ee=Re.matches||ee,Y=Re.pendingActionResult,G=Wd(D,M.submission),ae=!1,Z.active=!1,J=Ds(t.history,J.url,J.signal)}let{shortCircuited:te,matches:ce,loaderData:he,errors:Ze}=await ud(J,D,ee,Z.active,G,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,ae,Y);te||(T=null,Vn(D,Be({matches:ce||ee},V_(Y),{loaderData:he,errors:Ze})))}async function ld(x,D,M,B,G,ee){ee===void 0&&(ee={}),lt();let ae=hP(D,M);if(ot({navigation:ae},{flushSync:ee.flushSync===!0}),G){let Y=await jn(B,D.pathname,x.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){let te=Wi(Y.partialMatches).route.id;return{matches:Y.partialMatches,pendingActionResult:[te,{type:Pe.error,error:Y.error}]}}else if(Y.matches)B=Y.matches;else{let{notFoundMatches:te,error:ce,route:he}=sr(D.pathname);return{matches:te,pendingActionResult:[he.id,{type:Pe.error,error:ce}]}}}let Z,J=Sa(B,D);if(!J.route.action&&!J.route.lazy)Z={type:Pe.error,error:qt(405,{method:x.method,pathname:D.pathname,routeId:J.route.id})};else if(Z=(await Dr("action",g,x,[J],B,null))[J.route.id],x.signal.aborted)return{shortCircuited:!0};if(Yi(Z)){let Y;return ee&&ee.replace!=null?Y=ee.replace:Y=D_(Z.response.headers.get("Location"),new URL(x.url),u)===g.location.pathname+g.location.search,await En(x,Z,!0,{submission:M,replace:Y}),{shortCircuited:!0}}if(ei(Z))throw qt(400,{type:"defer-action"});if(rn(Z)){let Y=Wi(B,J.route.id);return(ee&&ee.replace)!==!0&&(y=tt.Push),{matches:B,pendingActionResult:[Y.route.id,Z]}}return{matches:B,pendingActionResult:[J.route.id,Z]}}async function ud(x,D,M,B,G,ee,ae,Z,J,Y,te){let ce=G||Wd(D,ee),he=ee||ae||j_(ce),Ze=!be&&(!f.v7_partialHydration||!J);if(B){if(Ze){let Ve=Wo(te);ot(Be({navigation:ce},Ve!==void 0?{actionData:Ve}:{}),{flushSync:Y})}let we=await jn(M,D.pathname,x.signal);if(we.type==="aborted")return{shortCircuited:!0};if(we.type==="error"){let Ve=Wi(we.partialMatches).route.id;return{matches:we.partialMatches,loaderData:{},errors:{[Ve]:we.error}}}else if(we.matches)M=we.matches;else{let{error:Ve,notFoundMatches:lr,route:Mr}=sr(D.pathname);return{matches:lr,loaderData:{},errors:{[Mr.id]:Ve}}}}let Re=l||o,[_e,Le]=k_(t.history,g,M,he,D,f.v7_partialHydration&&J===!0,f.v7_skipActionErrorRevalidation,yt,Mn,Wt,Ye,ke,fe,Re,u,te);if(Mi(we=>!(M&&M.some(Ve=>Ve.route.id===we))||_e&&_e.some(Ve=>Ve.route.id===we)),ue=++ie,_e.length===0&&Le.length===0){let we=Cs();return Vn(D,Be({matches:M,loaderData:{},errors:te&&rn(te[1])?{[te[0]]:te[1].error}:null},V_(te),we?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(Ze){let we={};if(!B){we.navigation=ce;let Ve=Wo(te);Ve!==void 0&&(we.actionData=Ve)}Le.length>0&&(we.fetchers=qo(Le)),ot(we,{flushSync:Y})}Le.forEach(we=>{Tn(we.key),we.controller&&W.set(we.key,we.controller)});let or=()=>Le.forEach(we=>Tn(we.key));T&&T.signal.addEventListener("abort",or);let{loaderResults:Or,fetcherResults:In}=await at(g,M,_e,Le,x);if(x.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",or),Le.forEach(we=>W.delete(we.key));let Ut=Du(Or);if(Ut)return await En(x,Ut.result,!0,{replace:Z}),{shortCircuited:!0};if(Ut=Du(In),Ut)return fe.add(Ut.key),await En(x,Ut.result,!0,{replace:Z}),{shortCircuited:!0};let{loaderData:Ps,errors:ar}=L_(g,M,Or,te,Le,In,_t);_t.forEach((we,Ve)=>{we.subscribe(lr=>{(lr||we.done)&&_t.delete(Ve)})}),f.v7_partialHydration&&J&&g.errors&&(ar=Be({},g.errors,ar));let en=Cs(),pn=tu(ue),Lr=en||pn||Le.length>0;return Be({matches:M,loaderData:Ps,errors:ar},Lr?{fetchers:new Map(g.fetchers)}:{})}function Wo(x){if(x&&!rn(x[1]))return{[x[0]]:x[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function qo(x){return x.forEach(D=>{let M=g.fetchers.get(D.key),B=ma(void 0,M?M.data:void 0);g.fetchers.set(D.key,B)}),new Map(g.fetchers)}function eu(x,D,M,B){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Tn(x);let G=(B&&B.flushSync)===!0,ee=l||o,ae=op(g.location,g.matches,u,f.v7_prependBasename,M,f.v7_relativeSplatPath,D,B==null?void 0:B.relative),Z=Hi(ee,ae,u),J=Ui(Z,ee,ae);if(J.active&&J.matches&&(Z=J.matches),!Z){fn(x,D,qt(404,{pathname:ae}),{flushSync:G});return}let{path:Y,submission:te,error:ce}=P_(f.v7_normalizeFormMethod,!0,ae,B);if(ce){fn(x,D,ce,{flushSync:G});return}let he=Sa(Z,Y),Ze=(B&&B.preventScrollReset)===!0;if(te&&Pn(te.formMethod)){cd(x,D,Y,he,Z,J.active,G,Ze,te);return}ke.set(x,{routeId:D,path:Y}),Go(x,D,Y,he,Z,J.active,G,Ze,te)}async function cd(x,D,M,B,G,ee,ae,Z,J){lt(),ke.delete(x);function Y($e){if(!$e.route.action&&!$e.route.lazy){let $n=qt(405,{method:J.formMethod,pathname:M,routeId:D});return fn(x,D,$n,{flushSync:ae}),!0}return!1}if(!ee&&Y(B))return;let te=g.fetchers.get(x);Zt(x,dP(J,te),{flushSync:ae});let ce=new AbortController,he=Ds(t.history,M,ce.signal,J);if(ee){let $e=await jn(G,new URL(he.url).pathname,he.signal,x);if($e.type==="aborted")return;if($e.type==="error"){fn(x,D,$e.error,{flushSync:ae});return}else if($e.matches){if(G=$e.matches,B=Sa(G,M),Y(B))return}else{fn(x,D,qt(404,{pathname:M}),{flushSync:ae});return}}W.set(x,ce);let Ze=ie,_e=(await Dr("action",g,he,[B],G,x))[B.route.id];if(he.signal.aborted){W.get(x)===ce&&W.delete(x);return}if(f.v7_fetcherPersist&&Ye.has(x)){if(Yi(_e)||rn(_e)){Zt(x,Br(void 0));return}}else{if(Yi(_e))if(W.delete(x),ue>Ze){Zt(x,Br(void 0));return}else return fe.add(x),Zt(x,ma(J)),En(he,_e,!1,{fetcherSubmission:J,preventScrollReset:Z});if(rn(_e)){fn(x,D,_e.error);return}}if(ei(_e))throw qt(400,{type:"defer-action"});let Le=g.navigation.location||g.location,or=Ds(t.history,Le,ce.signal),Or=l||o,In=g.navigation.state!=="idle"?Hi(Or,g.navigation.location,u):g.matches;de(In,"Didn't find any matches after fetcher action");let Ut=++ie;Ae.set(x,Ut);let Ps=ma(J,_e.data);g.fetchers.set(x,Ps);let[ar,en]=k_(t.history,g,In,J,Le,!1,f.v7_skipActionErrorRevalidation,yt,Mn,Wt,Ye,ke,fe,Or,u,[B.route.id,_e]);en.filter($e=>$e.key!==x).forEach($e=>{let $n=$e.key,Jo=g.fetchers.get($n),iu=ma(void 0,Jo?Jo.data:void 0);g.fetchers.set($n,iu),Tn($n),$e.controller&&W.set($n,$e.controller)}),ot({fetchers:new Map(g.fetchers)});let pn=()=>en.forEach($e=>Tn($e.key));ce.signal.addEventListener("abort",pn);let{loaderResults:Lr,fetcherResults:we}=await at(g,In,ar,en,or);if(ce.signal.aborted)return;ce.signal.removeEventListener("abort",pn),Ae.delete(x),W.delete(x),en.forEach($e=>W.delete($e.key));let Ve=Du(Lr);if(Ve)return En(or,Ve.result,!1,{preventScrollReset:Z});if(Ve=Du(we),Ve)return fe.add(Ve.key),En(or,Ve.result,!1,{preventScrollReset:Z});let{loaderData:lr,errors:Mr}=L_(g,In,Lr,void 0,en,we,_t);if(g.fetchers.has(x)){let $e=Br(_e.data);g.fetchers.set(x,$e)}tu(Ut),g.navigation.state==="loading"&&Ut>ue?(de(y,"Expected pending action"),T&&T.abort(),Vn(g.navigation.location,{matches:In,loaderData:lr,errors:Mr,fetchers:new Map(g.fetchers)})):(ot({errors:Mr,loaderData:M_(g.loaderData,lr,In,Mr),fetchers:new Map(g.fetchers)}),yt=!1)}async function Go(x,D,M,B,G,ee,ae,Z,J){let Y=g.fetchers.get(x);Zt(x,ma(J,Y?Y.data:void 0),{flushSync:ae});let te=new AbortController,ce=Ds(t.history,M,te.signal);if(ee){let _e=await jn(G,new URL(ce.url).pathname,ce.signal,x);if(_e.type==="aborted")return;if(_e.type==="error"){fn(x,D,_e.error,{flushSync:ae});return}else if(_e.matches)G=_e.matches,B=Sa(G,M);else{fn(x,D,qt(404,{pathname:M}),{flushSync:ae});return}}W.set(x,te);let he=ie,Re=(await Dr("loader",g,ce,[B],G,x))[B.route.id];if(ei(Re)&&(Re=await Mm(Re,ce.signal,!0)||Re),W.get(x)===te&&W.delete(x),!ce.signal.aborted){if(Ye.has(x)){Zt(x,Br(void 0));return}if(Yi(Re))if(ue>he){Zt(x,Br(void 0));return}else{fe.add(x),await En(ce,Re,!1,{preventScrollReset:Z});return}if(rn(Re)){fn(x,D,Re.error);return}de(!ei(Re),"Unhandled fetcher deferred data"),Zt(x,Br(Re.data))}}async function En(x,D,M,B){let{submission:G,fetcherSubmission:ee,preventScrollReset:ae,replace:Z}=B===void 0?{}:B;D.response.headers.has("X-Remix-Revalidate")&&(yt=!0);let J=D.response.headers.get("Location");de(J,"Expected a Location header on the redirect Response"),J=D_(J,new URL(x.url),u);let Y=ml(g.location,J,{_isRedirect:!0});if(n){let _e=!1;if(D.response.headers.has("X-Remix-Reload-Document"))_e=!0;else if(Lm.test(J)){const Le=t.history.createURL(J);_e=Le.origin!==e.location.origin||Ir(Le.pathname,u)==null}if(_e){Z?e.location.replace(J):e.location.assign(J);return}}T=null;let te=Z===!0||D.response.headers.has("X-Remix-Replace")?tt.Replace:tt.Push,{formMethod:ce,formAction:he,formEncType:Ze}=g.navigation;!G&&!ee&&ce&&he&&Ze&&(G=j_(g.navigation));let Re=G||ee;if(qR.has(D.response.status)&&Re&&Pn(Re.formMethod))await Un(te,Y,{submission:Be({},Re,{formAction:J}),preventScrollReset:ae||I,enableViewTransition:M?k:void 0});else{let _e=Wd(Y,G);await Un(te,Y,{overrideNavigation:_e,fetcherSubmission:ee,preventScrollReset:ae||I,enableViewTransition:M?k:void 0})}}async function Dr(x,D,M,B,G,ee){let ae,Z={};try{ae=await eP(c,x,D,M,B,G,ee,s,i)}catch(J){return B.forEach(Y=>{Z[Y.route.id]={type:Pe.error,error:J}}),Z}for(let[J,Y]of Object.entries(ae))if(oP(Y)){let te=Y.result;Z[J]={type:Pe.redirect,response:rP(te,M,J,G,u,f.v7_relativeSplatPath)}}else Z[J]=await nP(Y);return Z}async function at(x,D,M,B,G){let ee=x.matches,ae=Dr("loader",x,G,M,D,null),Z=Promise.all(B.map(async te=>{if(te.matches&&te.match&&te.controller){let he=(await Dr("loader",x,Ds(t.history,te.path,te.controller.signal),[te.match],te.matches,te.key))[te.match.route.id];return{[te.key]:he}}else return Promise.resolve({[te.key]:{type:Pe.error,error:qt(404,{pathname:te.path})}})})),J=await ae,Y=(await Z).reduce((te,ce)=>Object.assign(te,ce),{});return await Promise.all([uP(D,J,G.signal,ee,x.loaderData),cP(D,Y,B)]),{loaderResults:J,fetcherResults:Y}}function lt(){yt=!0,Mn.push(...Mi()),ke.forEach((x,D)=>{W.has(D)&&Wt.add(D),Tn(D)})}function Zt(x,D,M){M===void 0&&(M={}),g.fetchers.set(x,D),ot({fetchers:new Map(g.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function fn(x,D,M,B){B===void 0&&(B={});let G=Wi(g.matches,D);As(x),ot({errors:{[G.route.id]:M},fetchers:new Map(g.fetchers)},{flushSync:(B&&B.flushSync)===!0})}function Ko(x){return Vt.set(x,(Vt.get(x)||0)+1),Ye.has(x)&&Ye.delete(x),g.fetchers.get(x)||GR}function As(x){let D=g.fetchers.get(x);W.has(x)&&!(D&&D.state==="loading"&&Ae.has(x))&&Tn(x),ke.delete(x),Ae.delete(x),fe.delete(x),f.v7_fetcherPersist&&Ye.delete(x),Wt.delete(x),g.fetchers.delete(x)}function Oi(x){let D=(Vt.get(x)||0)-1;D<=0?(Vt.delete(x),Ye.add(x),f.v7_fetcherPersist||As(x)):Vt.set(x,D),ot({fetchers:new Map(g.fetchers)})}function Tn(x){let D=W.get(x);D&&(D.abort(),W.delete(x))}function Qo(x){for(let D of x){let M=Ko(D),B=Br(M.data);g.fetchers.set(D,B)}}function Cs(){let x=[],D=!1;for(let M of fe){let B=g.fetchers.get(M);de(B,"Expected fetcher: "+M),B.state==="loading"&&(fe.delete(M),x.push(M),D=!0)}return Qo(x),D}function tu(x){let D=[];for(let[M,B]of Ae)if(B<x){let G=g.fetchers.get(M);de(G,"Expected fetcher: "+M),G.state==="loading"&&(Tn(M),Ae.delete(M),D.push(M))}return Qo(D),D.length>0}function hd(x,D){let M=g.blockers.get(x)||pa;return vt.get(x)!==D&&vt.set(x,D),M}function Rs(x){g.blockers.delete(x),vt.delete(x)}function Li(x,D){let M=g.blockers.get(x)||pa;de(M.state==="unblocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="proceeding"||M.state==="blocked"&&D.state==="unblocked"||M.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+D.state);let B=new Map(g.blockers);B.set(x,D),ot({blockers:B})}function Yo(x){let{currentLocation:D,nextLocation:M,historyAction:B}=x;if(vt.size===0)return;vt.size>1&&as(!1,"A router only supports one blocker at a time");let G=Array.from(vt.entries()),[ee,ae]=G[G.length-1],Z=g.blockers.get(ee);if(!(Z&&Z.state==="proceeding")&&ae({currentLocation:D,nextLocation:M,historyAction:B}))return ee}function sr(x){let D=qt(404,{pathname:x}),M=l||o,{matches:B,route:G}=U_(M);return Mi(),{notFoundMatches:B,route:G,error:D}}function Mi(x){let D=[];return _t.forEach((M,B)=>{(!x||x(B))&&(M.cancel(),D.push(B),_t.delete(B))}),D}function Xo(x,D,M){if(A=x,b=D,P=M||null,!S&&g.navigation===Hd){S=!0;let B=Vi(g.location,g.matches);B!=null&&ot({restoreScrollPosition:B})}return()=>{A=null,b=null,P=null}}function Fn(x,D){return P&&P(x,D.map(B=>SR(B,g.loaderData)))||x.key}function nu(x,D){if(A&&b){let M=Fn(x,D);A[M]=b()}}function Vi(x,D){if(A){let M=Fn(x,D),B=A[M];if(typeof B=="number")return B}return null}function Ui(x,D,M){if(d)if(x){if(Object.keys(x[0].params).length>0)return{active:!0,matches:rc(D,M,u,!0)}}else return{active:!0,matches:rc(D,M,u,!0)||[]};return{active:!1,matches:null}}async function jn(x,D,M,B){if(!d)return{type:"success",matches:x};let G=x;for(;;){let ee=l==null,ae=l||o,Z=s;try{await d({signal:M,path:D,matches:G,fetcherKey:B,patch:(te,ce)=>{M.aborted||b_(te,ce,ae,Z,i)}})}catch(te){return{type:"error",error:te,partialMatches:G}}finally{ee&&!M.aborted&&(o=[...o])}if(M.aborted)return{type:"aborted"};let J=Hi(ae,D,u);if(J)return{type:"success",matches:J};let Y=rc(ae,D,u,!0);if(!Y||G.length===Y.length&&G.every((te,ce)=>te.route.id===Y[ce].route.id))return{type:"success",matches:null};G=Y}}function ru(x){s={},l=$c(x,i,void 0,s)}function wt(x,D){let M=l==null;b_(x,D,l||o,s,i),M&&(o=[...o],ot({}))}return H={get basename(){return u},get future(){return f},get state(){return g},get routes(){return o},get window(){return e},initialize:ad,subscribe:Is,enableScrollRestoration:Xo,navigate:Ss,fetch:eu,revalidate:Ho,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Ko,deleteFetcher:Oi,dispose:Ts,getBlocker:hd,deleteBlocker:Rs,patchRoutes:wt,_internalFetchControllers:W,_internalActiveDeferreds:_t,_internalSetRoutes:ru},H}function YR(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function op(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=Dh(i||".",bh(u,s),Ir(t.pathname,n)||t.pathname,l==="path");if(i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c){let f=Vm(d.search);if(c.route.index&&!f)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let m=new URLSearchParams(d.search),E=m.getAll("index");m.delete("index"),E.filter(P=>P).forEach(P=>m.append("index",P));let A=m.toString();d.search=A?"?"+A:""}}return r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:_r([n,d.pathname])),ls(d)}function P_(t,e,n,r){if(!r||!YR(r))return{path:n};if(r.formMethod&&!lP(r.formMethod))return{path:n,error:qt(405,{method:r.formMethod})};let i=()=>({path:n,error:qt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=pI(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Pn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,A)=>{let[P,b]=A;return""+E+P+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Pn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}de(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=lp(r.formData),c=r.formData;else if(r.body instanceof FormData)u=lp(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=O_(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=O_(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Pn(d.formMethod))return{path:n,submission:d};let f=kr(n);return e&&f.search&&Vm(f.search)&&u.append("index",""),f.search="?"+u,{path:ls(f),submission:d}}function x_(t,e,n){n===void 0&&(n=!1);let r=t.findIndex(i=>i.route.id===e);return r>=0?t.slice(0,n?r+1:r):t}function k_(t,e,n,r,i,s,o,l,u,c,d,f,m,E,A,P){let b=P?rn(P[1])?P[1].error:P[1].data:void 0,S=t.createURL(e.location),v=t.createURL(i),C=n;s&&e.errors?C=x_(n,Object.keys(e.errors)[0],!0):P&&rn(P[1])&&(C=x_(n,P[0]));let L=P?P[1].statusCode:void 0,$=o&&L&&L>=400,H=C.filter((y,I)=>{let{route:T}=y;if(T.lazy)return!0;if(T.loader==null)return!1;if(s)return ap(T,e.loaderData,e.errors);if(XR(e.loaderData,e.matches[I],y)||u.some(R=>R===y.route.id))return!0;let k=e.matches[I],N=y;return N_(y,Be({currentUrl:S,currentParams:k.params,nextUrl:v,nextParams:N.params},r,{actionResult:b,actionStatus:L,defaultShouldRevalidate:$?!1:l||S.pathname+S.search===v.pathname+v.search||S.search!==v.search||dI(k,N)}))}),g=[];return f.forEach((y,I)=>{if(s||!n.some(be=>be.route.id===y.routeId)||d.has(I))return;let T=Hi(E,y.path,A);if(!T){g.push({key:I,routeId:y.routeId,path:y.path,matches:null,match:null,controller:null});return}let k=e.fetchers.get(I),N=Sa(T,y.path),R=!1;m.has(I)?R=!1:c.has(I)?(c.delete(I),R=!0):k&&k.state!=="idle"&&k.data===void 0?R=l:R=N_(N,Be({currentUrl:S,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},r,{actionResult:b,actionStatus:L,defaultShouldRevalidate:$?!1:l})),R&&g.push({key:I,routeId:y.routeId,path:y.path,matches:T,match:N,controller:new AbortController})}),[H,g]}function ap(t,e,n){if(t.lazy)return!0;if(!t.loader)return!1;let r=e!=null&&e[t.id]!==void 0,i=n!=null&&n[t.id]!==void 0;return!r&&i?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!r&&!i}function XR(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function dI(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function N_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function b_(t,e,n,r,i){var s;let o;if(t){let c=r[t];de(c,"No route found to patch children into: routeId = "+t),c.children||(c.children=[]),o=c.children}else o=n;let l=e.filter(c=>!o.some(d=>fI(c,d))),u=$c(l,i,[t||"_","patch",String(((s=o)==null?void 0:s.length)||"0")],r);o.push(...u)}function fI(t,e){return"id"in t&&"id"in e&&t.id===e.id?!0:t.index===e.index&&t.path===e.path&&t.caseSensitive===e.caseSensitive?(!t.children||t.children.length===0)&&(!e.children||e.children.length===0)?!0:t.children.every((n,r)=>{var i;return(i=e.children)==null?void 0:i.some(s=>fI(n,s))}):!1}async function JR(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];de(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";as(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!TR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Be({},e(i),{lazy:void 0}))}async function ZR(t){let{matches:e}=t,n=e.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,s,o)=>Object.assign(i,{[n[o].route.id]:s}),{})}async function eP(t,e,n,r,i,s,o,l,u,c){let d=s.map(E=>E.route.lazy?JR(E.route,u,l):void 0),f=s.map((E,A)=>{let P=d[A],b=i.some(v=>v.route.id===E.route.id);return Be({},E,{shouldLoad:b,resolve:async v=>(v&&r.method==="GET"&&(E.route.lazy||E.route.loader)&&(b=!0),b?tP(e,r,E,P,v,c):Promise.resolve({type:Pe.data,result:void 0}))})}),m=await t({matches:f,request:r,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(d)}catch{}return m}async function tP(t,e,n,r,i,s){let o,l,u=c=>{let d,f=new Promise((A,P)=>d=P);l=()=>d(),e.signal.addEventListener("abort",l);let m=A=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:s},...A!==void 0?[A]:[]),E=(async()=>{try{return{type:"data",result:await(i?i(P=>m(P)):m())}}catch(A){return{type:"error",result:A}}})();return Promise.race([E,f])};try{let c=n.route[t];if(r)if(c){let d,[f]=await Promise.all([u(c).catch(m=>{d=m}),r]);if(d!==void 0)throw d;o=f}else if(await r,c=n.route[t],c)o=await u(c);else if(t==="action"){let d=new URL(e.url),f=d.pathname+d.search;throw qt(405,{method:e.method,pathname:f,routeId:n.route.id})}else return{type:Pe.data,result:void 0};else if(c)o=await u(c);else{let d=new URL(e.url),f=d.pathname+d.search;throw qt(404,{pathname:f})}de(o.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:Pe.error,result:c}}finally{l&&e.signal.removeEventListener("abort",l)}return o}async function nP(t){let{result:e,type:n}=t;if(mI(e)){let f;try{let m=e.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?e.body==null?f=null:f=await e.json():f=await e.text()}catch(m){return{type:Pe.error,error:m}}return n===Pe.error?{type:Pe.error,error:new zc(e.status,e.statusText,f),statusCode:e.status,headers:e.headers}:{type:Pe.data,data:f,statusCode:e.status,headers:e.headers}}if(n===Pe.error){if(F_(e)){var r,i;if(e.data instanceof Error){var s,o;return{type:Pe.error,error:e.data,statusCode:(s=e.init)==null?void 0:s.status,headers:(o=e.init)!=null&&o.headers?new Headers(e.init.headers):void 0}}return{type:Pe.error,error:new zc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data),statusCode:gl(e)?e.status:void 0,headers:(i=e.init)!=null&&i.headers?new Headers(e.init.headers):void 0}}return{type:Pe.error,error:e,statusCode:gl(e)?e.status:void 0}}if(aP(e)){var l,u;return{type:Pe.deferred,deferredData:e,statusCode:(l=e.init)==null?void 0:l.status,headers:((u=e.init)==null?void 0:u.headers)&&new Headers(e.init.headers)}}if(F_(e)){var c,d;return{type:Pe.data,data:e.data,statusCode:(c=e.init)==null?void 0:c.status,headers:(d=e.init)!=null&&d.headers?new Headers(e.init.headers):void 0}}return{type:Pe.data,data:e}}function rP(t,e,n,r,i,s){let o=t.headers.get("Location");if(de(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Lm.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=op(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function D_(t,e,n){if(Lm.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Ir(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Ds(t,e,n,r){let i=t.createURL(pI(e)).toString(),s={signal:n};if(r&&Pn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=lp(r.formData):s.body=r.formData}return new Request(i,s)}function lp(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function O_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function iP(t,e,n,r,i){let s={},o=null,l,u=!1,c={},d=n&&rn(n[1])?n[1].error:void 0;return t.forEach(f=>{if(!(f.route.id in e))return;let m=f.route.id,E=e[m];if(de(!Yi(E),"Cannot handle redirect results in processLoaderData"),rn(E)){let A=E.error;d!==void 0&&(A=d,d=void 0),o=o||{};{let P=Wi(t,m);o[P.route.id]==null&&(o[P.route.id]=A)}s[m]=void 0,u||(u=!0,l=gl(E.error)?E.error.status:500),E.headers&&(c[m]=E.headers)}else ei(E)?(r.set(m,E.deferredData),s[m]=E.deferredData.data,E.statusCode!=null&&E.statusCode!==200&&!u&&(l=E.statusCode),E.headers&&(c[m]=E.headers)):(s[m]=E.data,E.statusCode&&E.statusCode!==200&&!u&&(l=E.statusCode),E.headers&&(c[m]=E.headers))}),d!==void 0&&n&&(o={[n[0]]:d},s[n[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:c}}function L_(t,e,n,r,i,s,o){let{loaderData:l,errors:u}=iP(e,n,r,o);return i.forEach(c=>{let{key:d,match:f,controller:m}=c,E=s[d];if(de(E,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(rn(E)){let A=Wi(t.matches,f==null?void 0:f.route.id);u&&u[A.route.id]||(u=Be({},u,{[A.route.id]:E.error})),t.fetchers.delete(d)}else if(Yi(E))de(!1,"Unhandled fetcher revalidation redirect");else if(ei(E))de(!1,"Unhandled fetcher deferred data");else{let A=Br(E.data);t.fetchers.set(d,A)}}),{loaderData:l,errors:u}}function M_(t,e,n,r){let i=Be({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function V_(t){return t?rn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Wi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function U_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function qt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new zc(t||500,l,new Error(u),!0)}function Du(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[r,i]=e[n];if(Yi(i))return{key:r,result:i}}}function pI(t){let e=typeof t=="string"?kr(t):t;return ls(Be({},e,{hash:""}))}function sP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function oP(t){return mI(t.result)&&WR.has(t.result.status)}function ei(t){return t.type===Pe.deferred}function rn(t){return t.type===Pe.error}function Yi(t){return(t&&t.type)===Pe.redirect}function F_(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function aP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function mI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function lP(t){return HR.has(t.toLowerCase())}function Pn(t){return BR.has(t.toLowerCase())}async function uP(t,e,n,r,i){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[l,u]=s[o],c=t.find(m=>(m==null?void 0:m.route.id)===l);if(!c)continue;let d=r.find(m=>m.route.id===c.route.id),f=d!=null&&!dI(d,c)&&(i&&i[c.route.id])!==void 0;ei(u)&&f&&await Mm(u,n,!1).then(m=>{m&&(e[l]=m)})}}async function cP(t,e,n){for(let r=0;r<n.length;r++){let{key:i,routeId:s,controller:o}=n[r],l=e[i];t.find(c=>(c==null?void 0:c.route.id)===s)&&ei(l)&&(de(o,"Expected an AbortController for revalidating fetcher deferred result"),await Mm(l,o.signal,!0).then(c=>{c&&(e[i]=c)}))}}async function Mm(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Pe.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Pe.error,error:i}}return{type:Pe.data,data:t.deferredData.data}}}function Vm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Sa(t,e){let n=typeof e=="string"?kr(e).search:e.search;if(t[t.length-1].route.index&&Vm(n||""))return t[t.length-1];let r=uI(t);return r[r.length-1]}function j_(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Wd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function hP(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ma(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function dP(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Br(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function fP(t,e){try{let n=t.sessionStorage.getItem(hI);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function pP(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(hI,JSON.stringify(n))}catch(r){as(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hc(){return Hc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hc.apply(this,arguments)}const Vl=U.createContext(null),Um=U.createContext(null),Nr=U.createContext(null),Fm=U.createContext(null),br=U.createContext({outlet:null,matches:[],isDataRoute:!1}),gI=U.createContext(null);function mP(t,e){let{relative:n}=e===void 0?{}:e;bo()||de(!1);let{basename:r,navigator:i}=U.useContext(Nr),{hash:s,pathname:o,search:l}=Oh(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:_r([r,o])),i.createHref({pathname:u,search:l,hash:s})}function bo(){return U.useContext(Fm)!=null}function Do(){return bo()||de(!1),U.useContext(Fm).location}function yI(t){U.useContext(Nr).static||U.useLayoutEffect(t)}function jm(){let{isDataRoute:t}=U.useContext(br);return t?xP():gP()}function gP(){bo()||de(!1);let t=U.useContext(Vl),{basename:e,future:n,navigator:r}=U.useContext(Nr),{matches:i}=U.useContext(br),{pathname:s}=Do(),o=JSON.stringify(bh(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return yI(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=Dh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:_r([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const yP=U.createContext(null);function _P(t){let e=U.useContext(br).outlet;return e&&U.createElement(yP.Provider,{value:t},e)}function Oh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Nr),{matches:i}=U.useContext(br),{pathname:s}=Do(),o=JSON.stringify(bh(i,r.v7_relativeSplatPath));return U.useMemo(()=>Dh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function vP(t,e,n,r){bo()||de(!1);let{navigator:i}=U.useContext(Nr),{matches:s}=U.useContext(br),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Do(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let P=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(P.length).join("/")}let E=Hi(t,{pathname:m});return SP(E&&E.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:_r([u,i.encodeLocation?i.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:_r([u,i.encodeLocation?i.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),s,n,r)}function wP(){let t=PP(),e=gl(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const EP=U.createElement(wP,null);class TP extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(br.Provider,{value:this.props.routeContext},U.createElement(gI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IP(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(Vl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(br.Provider,{value:e},r)}function SP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||de(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:E}=n,A=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,A=!1,P=null,b=null;n&&(E=l&&f.route.id?l[f.route.id]:void 0,P=f.route.errorElement||EP,u&&(c<0&&m===0?(kP("route-fallback"),A=!0,b=null):c===m&&(A=!0,b=f.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),v=()=>{let C;return E?C=P:A?C=b:f.route.Component?C=U.createElement(f.route.Component,null):f.route.element?C=f.route.element:C=d,U.createElement(IP,{match:f,routeContext:{outlet:d,matches:S,isDataRoute:n!=null},children:C})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?U.createElement(TP,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):v()},null)}var _I=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(_I||{}),vI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vI||{});function AP(t){let e=U.useContext(Vl);return e||de(!1),e}function CP(t){let e=U.useContext(Um);return e||de(!1),e}function RP(t){let e=U.useContext(br);return e||de(!1),e}function wI(t){let e=RP(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function PP(){var t;let e=U.useContext(gI),n=CP(vI.UseRouteError),r=wI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xP(){let{router:t}=AP(_I.UseNavigateStable),e=wI(),n=U.useRef(!1);return yI(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Hc({fromRouteId:e},s)))},[t,e])}const $_={};function kP(t,e,n){$_[t]||($_[t]=!0)}function NP(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function bP(t){let{to:e,replace:n,state:r,relative:i}=t;bo()||de(!1);let{future:s,static:o}=U.useContext(Nr),{matches:l}=U.useContext(br),{pathname:u}=Do(),c=jm(),d=Dh(e,bh(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return U.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function DP(t){return _P(t.context)}function OP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tt.Pop,navigator:s,static:o=!1,future:l}=t;bo()&&de(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Hc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=kr(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:A="default"}=r,P=U.useMemo(()=>{let b=Ir(d,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:E,key:A},navigationType:i}},[u,d,f,m,E,A,i]);return P==null?null:U.createElement(Nr.Provider,{value:c},U.createElement(Fm.Provider,{children:n,value:P}))}new Promise(()=>{});function LP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wo(){return wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wo.apply(this,arguments)}function EI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function MP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VP(t,e){return t.button===0&&(!e||e==="_self")&&!MP(t)}const UP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],FP=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],jP="6";try{window.__reactRouterVersion=jP}catch{}function $P(t,e){return QR({basename:void 0,future:wo({},void 0,{v7_prependBasename:!0}),history:vR({window:void 0}),hydrationData:BP(),routes:t,mapRouteProperties:LP,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function BP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=wo({},e,{errors:zP(e.errors)})),e}function zP(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new zc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const TI=U.createContext({isTransitioning:!1}),HP=U.createContext(new Map),WP="startTransition",B_=o1[WP],qP="flushSync",z_=_R[qP];function GP(t){B_?B_(t):t()}function ga(t){z_?z_(t):t()}let KP=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function QP(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,l]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,f]=U.useState(),[m,E]=U.useState(),[A,P]=U.useState(),b=U.useRef(new Map),{v7_startTransition:S}=r||{},v=U.useCallback(y=>{S?GP(y):y()},[S]),C=U.useCallback((y,I)=>{let{deletedFetchers:T,flushSync:k,viewTransitionOpts:N}=I;y.fetchers.forEach((be,yt)=>{be.data!==void 0&&b.current.set(yt,be.data)}),T.forEach(be=>b.current.delete(be));let R=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!N||R){k?ga(()=>s(y)):v(()=>s(y));return}if(k){ga(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let be=n.window.document.startViewTransition(()=>{ga(()=>s(y))});be.finished.finally(()=>{ga(()=>{f(void 0),E(void 0),l(void 0),c({isTransitioning:!1})})}),ga(()=>E(be));return}m?(d&&d.resolve(),m.skipTransition(),P({state:y,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(l(y),c({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,m,d,b,v]);U.useLayoutEffect(()=>n.subscribe(C),[n,C]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new KP)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let y=o,I=d.promise,T=n.window.document.startViewTransition(async()=>{v(()=>s(y)),await I});T.finished.finally(()=>{f(void 0),E(void 0),l(void 0),c({isTransitioning:!1})}),E(T)}},[v,o,d,n.window]),U.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&A&&(l(A.state),c({isTransitioning:!0,flushSync:!1,currentLocation:A.currentLocation,nextLocation:A.nextLocation}),P(void 0))},[u.isTransitioning,A]),U.useEffect(()=>{},[]);let L=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:y=>n.navigate(y),push:(y,I,T)=>n.navigate(y,{state:I,preventScrollReset:T==null?void 0:T.preventScrollReset}),replace:(y,I,T)=>n.navigate(y,{replace:!0,state:I,preventScrollReset:T==null?void 0:T.preventScrollReset})}),[n]),$=n.basename||"/",H=U.useMemo(()=>({router:n,navigator:L,static:!1,basename:$}),[n,L,$]),g=U.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return U.useEffect(()=>NP(r,n.future),[r,n.future]),U.createElement(U.Fragment,null,U.createElement(Vl.Provider,{value:H},U.createElement(Um.Provider,{value:i},U.createElement(HP.Provider,{value:b.current},U.createElement(TI.Provider,{value:u},U.createElement(OP,{basename:$,location:i.location,navigationType:i.historyAction,navigator:L,future:g},i.initialized||n.future.v7_partialHydration?U.createElement(YP,{routes:n.routes,future:n.future,state:i}):e))))),null)}const YP=U.memo(XP);function XP(t){let{routes:e,future:n,state:r}=t;return vP(e,void 0,r,n)}const JP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,so=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=EI(e,UP),{basename:E}=U.useContext(Nr),A,P=!1;if(typeof c=="string"&&ZP.test(c)&&(A=c,JP))try{let C=new URL(window.location.href),L=c.startsWith("//")?new URL(C.protocol+c):new URL(c),$=Ir(L.pathname,E);L.origin===C.origin&&$!=null?c=$+L.search+L.hash:P=!0}catch{}let b=mP(c,{relative:i}),S=tx(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function v(C){r&&r(C),C.defaultPrevented||S(C)}return U.createElement("a",wo({},m,{href:A||b,onClick:P||s?r:v,ref:n,target:u}))}),zn=U.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=e,f=EI(e,FP),m=Oh(u,{relative:f.relative}),E=Do(),A=U.useContext(Um),{navigator:P,basename:b}=U.useContext(Nr),S=A!=null&&nx(m)&&c===!0,v=P.encodeLocation?P.encodeLocation(m).pathname:m.pathname,C=E.pathname,L=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;i||(C=C.toLowerCase(),L=L?L.toLowerCase():null,v=v.toLowerCase()),L&&b&&(L=Ir(L,b)||L);const $=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let H=C===v||!o&&C.startsWith(v)&&C.charAt($)==="/",g=L!=null&&(L===v||!o&&L.startsWith(v)&&L.charAt(v.length)==="/"),y={isActive:H,isPending:g,isTransitioning:S},I=H?r:void 0,T;typeof s=="function"?T=s(y):T=[s,H?"active":null,g?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(y):l;return U.createElement(so,wo({},f,{"aria-current":I,className:T,ref:n,style:k,to:u,viewTransition:c}),typeof d=="function"?d(y):d)});var up;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(up||(up={}));var H_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(H_||(H_={}));function ex(t){let e=U.useContext(Vl);return e||de(!1),e}function tx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=jm(),c=Do(),d=Oh(t,{relative:o});return U.useCallback(f=>{if(VP(f,n)){f.preventDefault();let m=r!==void 0?r:ls(c)===ls(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function nx(t,e){e===void 0&&(e={});let n=U.useContext(TI);n==null&&de(!1);let{basename:r}=ex(up.useViewTransitionState),i=Oh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ir(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ir(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Bc(i.pathname,o)!=null||Bc(i.pathname,s)!=null}function rx(){const[t,e]=U.useState(!1);return w.jsxs("header",{className:"sticky top-0 z-20 border-b border-rose/40 bg-blush/80 backdrop-blur font-sans",children:[w.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-3 flex items-center justify-between",children:[w.jsxs(so,{to:"/",className:"flex items-center gap-2",onClick:()=>e(!1),children:[w.jsx("div",{className:"h-9 w-9 rounded-xl bg-rose text-ivory flex items-center justify-center shadow-md",children:"📷"}),w.jsx("span",{className:"text-base font-serif font-semibold tracking-tight text-charcoal",children:"Lama Photo NC"})]}),w.jsxs("nav",{className:"hidden md:flex gap-6 text-sm text-charcoal",children:[w.jsx(zn,{to:"/portfolio",className:"hover:text-gold transition-colors",children:"Portfolio"}),w.jsx(zn,{to:"/booking",className:"hover:text-gold transition-colors",children:"Book"}),w.jsx(zn,{to:"/client",className:"hover:text-gold transition-colors",children:"Clients"}),w.jsx(zn,{to:"/faq",className:"hover:text-gold transition-colors",children:"FAQ"}),w.jsx(zn,{to:"/admin",className:"hover:text-gold transition-colors",children:"Admin"})]}),w.jsx(so,{to:"/booking",className:"hidden md:block",children:w.jsx("button",{className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md",children:"Book Now →"})}),w.jsx("button",{"aria-label":"Toggle menu",onClick:()=>e(n=>!n),className:"block md:hidden p-2 rounded-lg bg-rose text-ivory",children:"☰"})]}),w.jsxs("div",{className:`${t?"block":"hidden"} md:hidden border-t border-rose/40 bg-blush/80 px-4 py-3 space-y-3`,children:[w.jsx(zn,{to:"/portfolio",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Portfolio"}),w.jsx(zn,{to:"/booking",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Book"}),w.jsx(zn,{to:"/client",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Clients"}),w.jsx(zn,{to:"/faq",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"FAQ"}),w.jsx(zn,{to:"/admin",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Admin"}),w.jsx(so,{to:"/booking",onClick:()=>e(!1),children:w.jsx("button",{className:"w-full mt-2 rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md",children:"Book Now →"})})]})]})}function ix(){return w.jsx("footer",{className:"border-t border-rose/40 bg-blush/20 py-10 font-sans",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4 text-sm text-charcoal flex flex-col md:flex-row items-center justify-between gap-3",children:[w.jsxs("div",{className:"font-serif text-rose",children:["© ",new Date().getFullYear()," Lama NC"]}),w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsx("a",{href:"mailto:hello@example.com",className:"hover:text-gold transition-colors",children:"hello@example.com"}),w.jsx("a",{href:"tel:+15551234567",className:"hover:text-gold transition-colors",children:"(555) 123-4567"})]})]})})}function sx(){return w.jsxs("div",{className:"min-h-screen flex flex-col",children:[w.jsx(rx,{}),w.jsx("main",{className:"flex-1",children:w.jsx(DP,{})}),w.jsx(ix,{})]})}function ox(){return w.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center",children:[w.jsxs("div",{children:[w.jsx("h1",{className:"text-3xl md:text-5xl font-serif font-semibold leading-tight text-charcoal",children:"Book stunning, story-driven photography."}),w.jsx("p",{className:"mt-4 text-charcoal/70 text-base md:text-lg",children:"Portraits, events, and weddings—crafted with care and delivered fast. Pick a package, choose a time, and lock it in."}),w.jsxs("div",{className:"mt-6 flex gap-3",children:[w.jsx(so,{to:"/booking",className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Start Booking"}),w.jsx(so,{to:"/portfolio",className:"px-5 py-3 rounded-full border border-rose/40 text-sm font-semibold text-charcoal hover:bg-blush/50 transition-all",children:"View Portfolio"})]}),w.jsxs("div",{className:"mt-6 flex items-center gap-2 text-sm text-charcoal/70",children:[w.jsx("span",{children:"★★★★★"}),w.jsx("span",{children:"100+ happy clients"})]})]}),w.jsx("div",{className:"glass rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-rose/30 p-4 md:p-6 bg-white/80",children:w.jsx("img",{className:"rounded-xl w-full object-cover aspect-[4/3]",src:"https://picsum.photos/800/600?blur=0",alt:"Featured photography sample"})})]})})}const W_="lamaphoto",ax="portfolio";function lx(){const[t,e]=U.useState([]),[n,r]=U.useState("");return U.useEffect(()=>{(async()=>{try{const i=await fetch(`https://res.cloudinary.com/${W_}/image/list/${ax}.json`,{cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.json();e(s.resources||[])}catch(i){console.error(i),r("Could not load images. Check Cloudinary ‘Asset lists’ setting and that photos are tagged ‘portfolio’.")}})()},[]),w.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Portfolio"}),w.jsxs("p",{className:"mt-2 text-charcoal/70",children:["Uploads with the ",w.jsx("code",{children:"portfolio"})," tag appear here automatically."]}),n&&w.jsx("div",{className:"mt-4 text-red-700 text-sm",children:n}),w.jsx("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",children:t.map(i=>{const s=`https://res.cloudinary.com/${W_}/image/upload/c_fill,g_auto,f_auto,q_auto,w_800,h_800/${i.public_id}.${i.format}`;return w.jsx("div",{className:"overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow",children:w.jsx("img",{src:s,alt:i.public_id,loading:"lazy",className:"w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"})},i.public_id)})}),!n&&t.length===0&&w.jsxs("div",{className:"mt-6 text-charcoal/60",children:["No images yet. Upload in ",w.jsx("code",{children:"/admin"}),"."]})]})})}function ux({step:t}){const e=["Package","Date & Time","Details","Review"];return w.jsx("div",{className:"flex items-center gap-3 font-sans",children:e.map((n,r)=>w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:`h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold shadow-sm transition-all ${r<=t?"bg-rose text-ivory":"bg-blush/40 text-charcoal/70"}`,children:r+1}),w.jsx("span",{className:`hidden sm:block text-sm transition-colors ${r===t?"font-semibold text-charcoal":"text-charcoal/60"}`,children:n}),r<e.length-1&&w.jsx("div",{className:`w-6 sm:w-10 h-px transition-colors ${r<t?"bg-rose/70":"bg-blush/50"}`})]},n))})}function cx({p:t,selected:e,onSelect:n}){return w.jsxs("div",{className:`glass rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 ${e?"border-rose":"border-transparent"} p-5 md:p-6 bg-ivory`,children:[w.jsxs("div",{className:"flex items-start justify-between gap-3",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:t.name}),w.jsx("p",{className:"text-rose/80",children:t.desc})]}),w.jsxs("div",{className:"text-right",children:[w.jsxs("div",{className:"text-2xl font-bold text-rose",children:["$",t.price]}),w.jsx("div",{className:"text-xs text-charcoal/60",children:t.duration})]})]}),w.jsx("ul",{className:"mt-4 space-y-2 text-sm text-charcoal/80",children:t.includes.map((r,i)=>w.jsxs("li",{children:["✔️ ",r]},i))}),w.jsx("div",{className:"mt-5",children:w.jsx("button",{onClick:n,className:`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${e?"bg-gold text-charcoal hover:bg-rose hover:text-ivory":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:e?"Selected":"Select"})})]})}const hx=()=>{};var q_={};/**
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
 */const II=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},SI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(II(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new fx;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),f!==64){const A=c<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let fx=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const px=function(t){const e=II(t);return SI.encodeByteArray(e,!0)},Wc=function(t){return px(t).replace(/\./g,"")},AI=function(t){try{return SI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gx=()=>mx().__FIREBASE_DEFAULTS__,yx=()=>{if(typeof process>"u"||typeof q_>"u")return;const t=q_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_x=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&AI(t[1]);return e&&JSON.parse(e)},Lh=()=>{try{return hx()||gx()||yx()||_x()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},CI=t=>{var e,n;return(n=(e=Lh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},vx=t=>{const e=CI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},RI=()=>{var t;return(t=Lh())==null?void 0:t.config},PI=t=>{var e;return(e=Lh())==null?void 0:e[`_${t}`]};/**
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
 */class wx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Oo(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xI(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Ex(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Wc(JSON.stringify(n)),Wc(JSON.stringify(o)),""].join(".")}const Ba={};function Tx(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ba))Ba[e]?t.emulator.push(e):t.prod.push(e);return t}function Ix(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let G_=!1;function kI(t,e){if(typeof window>"u"||typeof document>"u"||!Oo(window.location.host)||Ba[t]===e||Ba[t]||G_)return;Ba[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=Tx().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,E){m.setAttribute("width","24"),m.setAttribute("id",E),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{G_=!0,o()},m}function d(m,E){m.setAttribute("id",E),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=Ix(r),E=n("text"),A=document.getElementById(E)||document.createElement("span"),P=n("learnmore"),b=document.getElementById(P)||document.createElement("a"),S=n("preprendIcon"),v=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const C=m.element;l(C),d(b,P);const L=c();u(v,S),C.append(v,A,b,L),document.body.appendChild(C)}s?(A.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function Ax(){var e;const t=(e=Lh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Px(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xx(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kx(){return!Ax()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nx(){try{return typeof indexedDB=="object"}catch{return!1}}function bx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Dx="FirebaseError";let gs=class NI extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dx,Object.setPrototypeOf(this,NI.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ul.prototype.create)}},Ul=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ox(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new gs(i,l,r)}};function Ox(t,e){return t.replace(Lx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Lx=/\{\$([^}]+)}/g;function Mx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function us(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(K_(s)&&K_(o)){if(!us(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function K_(t){return t!==null&&typeof t=="object"}/**
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
 */function Fl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Aa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ca(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Vx(t,e){const n=new Ux(t,e);return n.subscribe.bind(n)}let Ux=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Fx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qd),i.error===void 0&&(i.error=qd),i.complete===void 0&&(i.complete=qd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Fx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qd(){}/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}let cs=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const zi="[DEFAULT]";/**
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
 */class jx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bx(e))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zi){return this.instances.has(e)}getOptions(e=zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$x(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zi){return this.component?this.component.multipleInstances?e:zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $x(t){return t===zi?void 0:t}function Bx(t){return t.instantiationMode==="EAGER"}/**
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
 */class zx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const Hx={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Wx=me.INFO,qx={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Gx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let $m=class{constructor(e){this.name=e,this._logLevel=Wx,this._logHandler=Gx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}};const Kx=(t,e)=>e.some(n=>t instanceof n);let Q_,Y_;function Qx(){return Q_||(Q_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yx(){return Y_||(Y_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bI=new WeakMap,cp=new WeakMap,DI=new WeakMap,Gd=new WeakMap,Bm=new WeakMap;function Xx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bI.set(n,t)}).catch(()=>{}),Bm.set(e,t),e}function Jx(t){if(cp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cp.set(t,e)}let hp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||DI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zx(t){hp=t(hp)}function ek(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kd(this),e,...n);return DI.set(r,e.sort?e.sort():[e]),hi(r)}:Yx().includes(t)?function(...e){return t.apply(Kd(this),e),hi(bI.get(this))}:function(...e){return hi(t.apply(Kd(this),e))}}function tk(t){return typeof t=="function"?ek(t):(t instanceof IDBTransaction&&Jx(t),Kx(t,Qx())?new Proxy(t,hp):t)}function hi(t){if(t instanceof IDBRequest)return Xx(t);if(Gd.has(t))return Gd.get(t);const e=tk(t);return e!==t&&(Gd.set(t,e),Bm.set(e,t)),e}const Kd=t=>Bm.get(t);function nk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hi(o.result),u.oldVersion,u.newVersion,hi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const rk=["get","getKey","getAll","getAllKeys","count"],ik=["put","add","delete","clear"],Qd=new Map;function X_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ik.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rk.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return Qd.set(e,s),s}Zx(t=>({...t,get:(e,n,r)=>X_(e,n)||t.get(e,n,r),has:(e,n)=>!!X_(e,n)||t.has(e,n)}));/**
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
 */let sk=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ok(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function ok(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dp="@firebase/app",J_="0.14.1";/**
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
 */const Sr=new $m("@firebase/app"),ak="@firebase/app-compat",lk="@firebase/analytics-compat",uk="@firebase/analytics",ck="@firebase/app-check-compat",hk="@firebase/app-check",dk="@firebase/auth",fk="@firebase/auth-compat",pk="@firebase/database",mk="@firebase/data-connect",gk="@firebase/database-compat",yk="@firebase/functions",_k="@firebase/functions-compat",vk="@firebase/installations",wk="@firebase/installations-compat",Ek="@firebase/messaging",Tk="@firebase/messaging-compat",Ik="@firebase/performance",Sk="@firebase/performance-compat",Ak="@firebase/remote-config",Ck="@firebase/remote-config-compat",Rk="@firebase/storage",Pk="@firebase/storage-compat",xk="@firebase/firestore",kk="@firebase/ai",Nk="@firebase/firestore-compat",bk="firebase",Dk="12.1.0";/**
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
 */const fp="[DEFAULT]",Ok={[dp]:"fire-core",[ak]:"fire-core-compat",[uk]:"fire-analytics",[lk]:"fire-analytics-compat",[hk]:"fire-app-check",[ck]:"fire-app-check-compat",[dk]:"fire-auth",[fk]:"fire-auth-compat",[pk]:"fire-rtdb",[mk]:"fire-data-connect",[gk]:"fire-rtdb-compat",[yk]:"fire-fn",[_k]:"fire-fn-compat",[vk]:"fire-iid",[wk]:"fire-iid-compat",[Ek]:"fire-fcm",[Tk]:"fire-fcm-compat",[Ik]:"fire-perf",[Sk]:"fire-perf-compat",[Ak]:"fire-rc",[Ck]:"fire-rc-compat",[Rk]:"fire-gcs",[Pk]:"fire-gcs-compat",[xk]:"fire-fst",[Nk]:"fire-fst-compat",[kk]:"fire-vertex","fire-js":"fire-js",[bk]:"fire-js-all"};/**
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
 */const qc=new Map,Lk=new Map,pp=new Map;function Z_(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Eo(t){const e=t.name;if(pp.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;pp.set(e,t);for(const n of qc.values())Z_(n,t);for(const n of Lk.values())Z_(n,t);return!0}function zm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Mk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new Ul("app","Firebase",Mk);/**
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
 */class Vk{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
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
 */const Lo=Dk;function OI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:fp,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw di.create("bad-app-name",{appName:String(i)});if(n||(n=RI()),!n)throw di.create("no-options");const s=qc.get(i);if(s){if(us(n,s.options)&&us(r,s.config))return s;throw di.create("duplicate-app",{appName:i})}const o=new zx(i);for(const u of pp.values())o.addComponent(u);const l=new Vk(n,r,o);return qc.set(i,l),l}function LI(t=fp){const e=qc.get(t);if(!e&&t===fp&&RI())return OI();if(!e)throw di.create("no-app",{appName:t});return e}function fi(t,e,n){let r=Ok[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(o.join(" "));return}Eo(new cs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Uk="firebase-heartbeat-database",Fk=1,yl="firebase-heartbeat-store";let Yd=null;function MI(){return Yd||(Yd=nk(Uk,Fk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yl)}catch(n){console.warn(n)}}}}).catch(t=>{throw di.create("idb-open",{originalErrorMessage:t.message})})),Yd}async function jk(t){try{const n=(await MI()).transaction(yl),r=await n.objectStore(yl).get(VI(t));return await n.done,r}catch(e){if(e instanceof gs)Sr.warn(e.message);else{const n=di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(n.message)}}}async function ev(t,e){try{const r=(await MI()).transaction(yl,"readwrite");await r.objectStore(yl).put(e,VI(t)),await r.done}catch(n){if(n instanceof gs)Sr.warn(n.message);else{const r=di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sr.warn(r.message)}}}function VI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $k=1024,Bk=30;let zk=class{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Wk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Bk){const o=qk(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tv(),{heartbeatsToSend:r,unsentEntries:i}=Hk(this._heartbeatsCache.heartbeats),s=Wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Sr.warn(n),""}}};function tv(){return new Date().toISOString().substring(0,10)}function Hk(t,e=$k){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),nv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}let Wk=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nx()?bx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ev(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ev(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}};function nv(t){return Wc(JSON.stringify({version:2,heartbeats:t})).length}function qk(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Gk(t){Eo(new cs("platform-logger",e=>new sk(e),"PRIVATE")),Eo(new cs("heartbeat",e=>new zk(e),"PRIVATE")),fi(dp,J_,t),fi(dp,J_,"esm2020"),fi("fire-js","")}Gk("");var rv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pi,UI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function I(){}I.prototype=y.prototype,g.D=y.prototype,g.prototype=new I,g.prototype.constructor=g,g.C=function(T,k,N){for(var R=Array(arguments.length-2),be=2;be<arguments.length;be++)R[be-2]=arguments[be];return y.prototype[k].apply(T,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,y,I){I||(I=0);var T=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)T[k]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(k=0;16>k;++k)T[k]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=g.g[0],I=g.g[1],k=g.g[2];var N=g.g[3],R=y+(N^I&(k^N))+T[0]+3614090360&4294967295;y=I+(R<<7&4294967295|R>>>25),R=N+(k^y&(I^k))+T[1]+3905402710&4294967295,N=y+(R<<12&4294967295|R>>>20),R=k+(I^N&(y^I))+T[2]+606105819&4294967295,k=N+(R<<17&4294967295|R>>>15),R=I+(y^k&(N^y))+T[3]+3250441966&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(N^I&(k^N))+T[4]+4118548399&4294967295,y=I+(R<<7&4294967295|R>>>25),R=N+(k^y&(I^k))+T[5]+1200080426&4294967295,N=y+(R<<12&4294967295|R>>>20),R=k+(I^N&(y^I))+T[6]+2821735955&4294967295,k=N+(R<<17&4294967295|R>>>15),R=I+(y^k&(N^y))+T[7]+4249261313&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(N^I&(k^N))+T[8]+1770035416&4294967295,y=I+(R<<7&4294967295|R>>>25),R=N+(k^y&(I^k))+T[9]+2336552879&4294967295,N=y+(R<<12&4294967295|R>>>20),R=k+(I^N&(y^I))+T[10]+4294925233&4294967295,k=N+(R<<17&4294967295|R>>>15),R=I+(y^k&(N^y))+T[11]+2304563134&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(N^I&(k^N))+T[12]+1804603682&4294967295,y=I+(R<<7&4294967295|R>>>25),R=N+(k^y&(I^k))+T[13]+4254626195&4294967295,N=y+(R<<12&4294967295|R>>>20),R=k+(I^N&(y^I))+T[14]+2792965006&4294967295,k=N+(R<<17&4294967295|R>>>15),R=I+(y^k&(N^y))+T[15]+1236535329&4294967295,I=k+(R<<22&4294967295|R>>>10),R=y+(k^N&(I^k))+T[1]+4129170786&4294967295,y=I+(R<<5&4294967295|R>>>27),R=N+(I^k&(y^I))+T[6]+3225465664&4294967295,N=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(N^y))+T[11]+643717713&4294967295,k=N+(R<<14&4294967295|R>>>18),R=I+(N^y&(k^N))+T[0]+3921069994&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(k^N&(I^k))+T[5]+3593408605&4294967295,y=I+(R<<5&4294967295|R>>>27),R=N+(I^k&(y^I))+T[10]+38016083&4294967295,N=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(N^y))+T[15]+3634488961&4294967295,k=N+(R<<14&4294967295|R>>>18),R=I+(N^y&(k^N))+T[4]+3889429448&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(k^N&(I^k))+T[9]+568446438&4294967295,y=I+(R<<5&4294967295|R>>>27),R=N+(I^k&(y^I))+T[14]+3275163606&4294967295,N=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(N^y))+T[3]+4107603335&4294967295,k=N+(R<<14&4294967295|R>>>18),R=I+(N^y&(k^N))+T[8]+1163531501&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(k^N&(I^k))+T[13]+2850285829&4294967295,y=I+(R<<5&4294967295|R>>>27),R=N+(I^k&(y^I))+T[2]+4243563512&4294967295,N=y+(R<<9&4294967295|R>>>23),R=k+(y^I&(N^y))+T[7]+1735328473&4294967295,k=N+(R<<14&4294967295|R>>>18),R=I+(N^y&(k^N))+T[12]+2368359562&4294967295,I=k+(R<<20&4294967295|R>>>12),R=y+(I^k^N)+T[5]+4294588738&4294967295,y=I+(R<<4&4294967295|R>>>28),R=N+(y^I^k)+T[8]+2272392833&4294967295,N=y+(R<<11&4294967295|R>>>21),R=k+(N^y^I)+T[11]+1839030562&4294967295,k=N+(R<<16&4294967295|R>>>16),R=I+(k^N^y)+T[14]+4259657740&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(I^k^N)+T[1]+2763975236&4294967295,y=I+(R<<4&4294967295|R>>>28),R=N+(y^I^k)+T[4]+1272893353&4294967295,N=y+(R<<11&4294967295|R>>>21),R=k+(N^y^I)+T[7]+4139469664&4294967295,k=N+(R<<16&4294967295|R>>>16),R=I+(k^N^y)+T[10]+3200236656&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(I^k^N)+T[13]+681279174&4294967295,y=I+(R<<4&4294967295|R>>>28),R=N+(y^I^k)+T[0]+3936430074&4294967295,N=y+(R<<11&4294967295|R>>>21),R=k+(N^y^I)+T[3]+3572445317&4294967295,k=N+(R<<16&4294967295|R>>>16),R=I+(k^N^y)+T[6]+76029189&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(I^k^N)+T[9]+3654602809&4294967295,y=I+(R<<4&4294967295|R>>>28),R=N+(y^I^k)+T[12]+3873151461&4294967295,N=y+(R<<11&4294967295|R>>>21),R=k+(N^y^I)+T[15]+530742520&4294967295,k=N+(R<<16&4294967295|R>>>16),R=I+(k^N^y)+T[2]+3299628645&4294967295,I=k+(R<<23&4294967295|R>>>9),R=y+(k^(I|~N))+T[0]+4096336452&4294967295,y=I+(R<<6&4294967295|R>>>26),R=N+(I^(y|~k))+T[7]+1126891415&4294967295,N=y+(R<<10&4294967295|R>>>22),R=k+(y^(N|~I))+T[14]+2878612391&4294967295,k=N+(R<<15&4294967295|R>>>17),R=I+(N^(k|~y))+T[5]+4237533241&4294967295,I=k+(R<<21&4294967295|R>>>11),R=y+(k^(I|~N))+T[12]+1700485571&4294967295,y=I+(R<<6&4294967295|R>>>26),R=N+(I^(y|~k))+T[3]+2399980690&4294967295,N=y+(R<<10&4294967295|R>>>22),R=k+(y^(N|~I))+T[10]+4293915773&4294967295,k=N+(R<<15&4294967295|R>>>17),R=I+(N^(k|~y))+T[1]+2240044497&4294967295,I=k+(R<<21&4294967295|R>>>11),R=y+(k^(I|~N))+T[8]+1873313359&4294967295,y=I+(R<<6&4294967295|R>>>26),R=N+(I^(y|~k))+T[15]+4264355552&4294967295,N=y+(R<<10&4294967295|R>>>22),R=k+(y^(N|~I))+T[6]+2734768916&4294967295,k=N+(R<<15&4294967295|R>>>17),R=I+(N^(k|~y))+T[13]+1309151649&4294967295,I=k+(R<<21&4294967295|R>>>11),R=y+(k^(I|~N))+T[4]+4149444226&4294967295,y=I+(R<<6&4294967295|R>>>26),R=N+(I^(y|~k))+T[11]+3174756917&4294967295,N=y+(R<<10&4294967295|R>>>22),R=k+(y^(N|~I))+T[2]+718787259&4294967295,k=N+(R<<15&4294967295|R>>>17),R=I+(N^(k|~y))+T[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,g.g[2]=g.g[2]+k&4294967295,g.g[3]=g.g[3]+N&4294967295}r.prototype.u=function(g,y){y===void 0&&(y=g.length);for(var I=y-this.blockSize,T=this.B,k=this.h,N=0;N<y;){if(k==0)for(;N<=I;)i(this,g,N),N+=this.blockSize;if(typeof g=="string"){for(;N<y;)if(T[k++]=g.charCodeAt(N++),k==this.blockSize){i(this,T),k=0;break}}else for(;N<y;)if(T[k++]=g[N++],k==this.blockSize){i(this,T),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;var I=8*this.o;for(y=g.length-8;y<g.length;++y)g[y]=I&255,I/=256;for(this.u(g),g=Array(16),y=I=0;4>y;++y)for(var T=0;32>T;T+=8)g[I++]=this.g[y]>>>T&255;return g};function s(g,y){var I=l;return Object.prototype.hasOwnProperty.call(I,g)?I[g]:I[g]=y(g)}function o(g,y){this.h=y;for(var I=[],T=!0,k=g.length-1;0<=k;k--){var N=g[k]|0;T&&N==y||(I[k]=N,T=!1)}this.g=I}var l={};function u(g){return-128<=g&&128>g?s(g,function(y){return new o([y|0],0>y?-1:0)}):new o([g|0],0>g?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return f;if(0>g)return b(c(-g));for(var y=[],I=1,T=0;g>=I;T++)y[T]=g/I|0,I*=4294967296;return new o(y,0)}function d(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return b(d(g.substring(1),y));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),T=f,k=0;k<g.length;k+=8){var N=Math.min(8,g.length-k),R=parseInt(g.substring(k,k+N),y);8>N?(N=c(Math.pow(y,N)),T=T.j(N).add(c(R))):(T=T.j(I),T=T.add(c(R)))}return T}var f=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var g=0,y=1,I=0;I<this.g.length;I++){var T=this.i(I);g+=(0<=T?T:4294967296+T)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(A(this))return"0";if(P(this))return"-"+b(this).toString(g);for(var y=c(Math.pow(g,6)),I=this,T="";;){var k=L(I,y).g;I=S(I,k.j(y));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(g);if(I=k,A(I))return N+T;for(;6>N.length;)N="0"+N;T=N+T}},t.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function A(g){if(g.h!=0)return!1;for(var y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function P(g){return g.h==-1}t.l=function(g){return g=S(this,g),P(g)?-1:A(g)?0:1};function b(g){for(var y=g.g.length,I=[],T=0;T<y;T++)I[T]=~g.g[T];return new o(I,~g.h).add(m)}t.abs=function(){return P(this)?b(this):this},t.add=function(g){for(var y=Math.max(this.g.length,g.g.length),I=[],T=0,k=0;k<=y;k++){var N=T+(this.i(k)&65535)+(g.i(k)&65535),R=(N>>>16)+(this.i(k)>>>16)+(g.i(k)>>>16);T=R>>>16,N&=65535,R&=65535,I[k]=R<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function S(g,y){return g.add(b(y))}t.j=function(g){if(A(this)||A(g))return f;if(P(this))return P(g)?b(this).j(b(g)):b(b(this).j(g));if(P(g))return b(this.j(b(g)));if(0>this.l(E)&&0>g.l(E))return c(this.m()*g.m());for(var y=this.g.length+g.g.length,I=[],T=0;T<2*y;T++)I[T]=0;for(T=0;T<this.g.length;T++)for(var k=0;k<g.g.length;k++){var N=this.i(T)>>>16,R=this.i(T)&65535,be=g.i(k)>>>16,yt=g.i(k)&65535;I[2*T+2*k]+=R*yt,v(I,2*T+2*k),I[2*T+2*k+1]+=N*yt,v(I,2*T+2*k+1),I[2*T+2*k+1]+=R*be,v(I,2*T+2*k+1),I[2*T+2*k+2]+=N*be,v(I,2*T+2*k+2)}for(T=0;T<y;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=y;T<2*y;T++)I[T]=0;return new o(I,0)};function v(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function C(g,y){this.g=g,this.h=y}function L(g,y){if(A(y))throw Error("division by zero");if(A(g))return new C(f,f);if(P(g))return y=L(b(g),y),new C(b(y.g),b(y.h));if(P(y))return y=L(g,b(y)),new C(b(y.g),y.h);if(30<g.g.length){if(P(g)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,T=y;0>=T.l(g);)I=$(I),T=$(T);var k=H(I,1),N=H(T,1);for(T=H(T,2),I=H(I,2);!A(T);){var R=N.add(T);0>=R.l(g)&&(k=k.add(I),N=R),T=H(T,1),I=H(I,1)}return y=S(g,k.j(y)),new C(k,y)}for(k=f;0<=g.l(y);){for(I=Math.max(1,Math.floor(g.m()/y.m())),T=Math.ceil(Math.log(I)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),N=c(I),R=N.j(y);P(R)||0<R.l(g);)I-=T,N=c(I),R=N.j(y);A(N)&&(N=m),k=k.add(N),g=S(g,R)}return new C(k,g)}t.A=function(g){return L(this,g).h},t.and=function(g){for(var y=Math.max(this.g.length,g.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)&g.i(T);return new o(I,this.h&g.h)},t.or=function(g){for(var y=Math.max(this.g.length,g.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)|g.i(T);return new o(I,this.h|g.h)},t.xor=function(g){for(var y=Math.max(this.g.length,g.g.length),I=[],T=0;T<y;T++)I[T]=this.i(T)^g.i(T);return new o(I,this.h^g.h)};function $(g){for(var y=g.g.length+1,I=[],T=0;T<y;T++)I[T]=g.i(T)<<1|g.i(T-1)>>>31;return new o(I,g.h)}function H(g,y){var I=y>>5;y%=32;for(var T=g.g.length-I,k=[],N=0;N<T;N++)k[N]=0<y?g.i(N+I)>>>y|g.i(N+I+1)<<32-y:g.i(N+I);return new o(k,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,UI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,pi=o}).apply(typeof rv<"u"?rv:typeof self<"u"?self:typeof window<"u"?window:{});var Ou=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FI,Ra,jI,ic,mp,$I,BI,zI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ou=="object"&&Ou];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var O=a[_];if(!(O in p))break e;p=p[O]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,_=!1,O={next:function(){if(!_&&p<a.length){var V=p++;return{value:h(V,a[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,_),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function E(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function A(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,O,V){for(var q=Array(arguments.length-2),De=2;De<arguments.length;De++)q[De-2]=arguments[De];return h.prototype[O].apply(_,q)}}function P(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function b(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const O=a.length||0,V=_.length||0;a.length=O+V;for(let q=0;q<V;q++)a[O+q]=_[q]}else a.push(_)}}class S{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function C(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var $=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function H(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function g(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function y(a){const h={};for(const p in a)h[p]=a[p];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let p,_;for(let O=1;O<arguments.length;O++){_=arguments[O];for(p in _)a[p]=_[p];for(let V=0;V<I.length;V++)p=I[V],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function k(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function R(){var a=ie;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class be{constructor(){this.h=this.g=null}add(h,p){const _=yt.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var yt=new S(()=>new Mn,a=>a.reset());class Mn{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,W=!1,ie=new be,ue=()=>{const a=l.Promise.resolve(void 0);Wt=()=>{a.then(Ae)}};var Ae=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(p){N(p)}var h=yt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}W=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}ke.prototype.h=function(){this.defaultPrevented=!0};var Vt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Ye(a,h){if(ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if($){e:{try{L(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_t[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ye.aa.h.call(this)}}A(Ye,ke);var _t={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vt="closure_listenable_"+(1e6*Math.random()|0),Es=0;function ad(a,h,p,_,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=O,this.key=++Es,this.da=this.fa=!1}function Ts(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Is(a){this.src=a,this.g={},this.h=0}Is.prototype.add=function(a,h,p,_,O){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var q=Vn(a,h,_,O);return-1<q?(h=a[q],p||(h.fa=!1)):(h=new ad(h,this.src,V,!!_,O),h.fa=p,a.push(h)),h};function ot(a,h){var p=h.type;if(p in a.g){var _=a.g[p],O=Array.prototype.indexOf.call(_,h,void 0),V;(V=0<=O)&&Array.prototype.splice.call(_,O,1),V&&(Ts(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Vn(a,h,p,_){for(var O=0;O<a.length;++O){var V=a[O];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==_)return O}return-1}var Ss="closure_lm_"+(1e6*Math.random()|0),Ho={};function Un(a,h,p,_,O){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Un(a,h[V],p,_,O);return null}return p=Dr(p),a&&a[vt]?a.K(h,p,c(_)?!!_.capture:!1,O):ld(a,h,p,!1,_,O)}function ld(a,h,p,_,O,V){if(!h)throw Error("Invalid event type");var q=c(O)?!!O.capture:!!O,De=Go(a);if(De||(a[Ss]=De=new Is(a)),p=De.add(h,p,_,q,V),p.proxy)return p;if(_=ud(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)Vt||(O=q),O===void 0&&(O=!1),a.addEventListener(h.toString(),_,O);else if(a.attachEvent)a.attachEvent(eu(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ud(){function a(p){return h.call(a.src,a.listener,p)}const h=cd;return a}function Wo(a,h,p,_,O){if(Array.isArray(h))for(var V=0;V<h.length;V++)Wo(a,h[V],p,_,O);else _=c(_)?!!_.capture:!!_,p=Dr(p),a&&a[vt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],p=Vn(V,p,_,O),-1<p&&(Ts(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Go(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Vn(h,p,_,O)),(p=-1<a?h[a]:null)&&qo(p))}function qo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[vt])ot(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(eu(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Go(h))?(ot(p,a),p.h==0&&(p.src=null,h[Ss]=null)):Ts(a)}}}function eu(a){return a in Ho?Ho[a]:Ho[a]="on"+a}function cd(a,h){if(a.da)a=!0;else{h=new Ye(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&qo(a),a=p.call(_,h)}return a}function Go(a){return a=a[Ss],a instanceof Is?a:null}var En="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dr(a){return typeof a=="function"?a:(a[En]||(a[En]=function(h){return a.handleEvent(h)}),a[En])}function at(){fe.call(this),this.i=new Is(this),this.M=this,this.F=null}A(at,fe),at.prototype[vt]=!0,at.prototype.removeEventListener=function(a,h,p,_){Wo(this,a,h,p,_)};function lt(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new ke(h,a);else if(h instanceof ke)h.target=h.target||a;else{var O=h;h=new ke(_,a),T(h,O)}if(O=!0,p)for(var V=p.length-1;0<=V;V--){var q=h.g=p[V];O=Zt(q,_,!0,h)&&O}if(q=h.g=a,O=Zt(q,_,!0,h)&&O,O=Zt(q,_,!1,h)&&O,p)for(V=0;V<p.length;V++)q=h.g=p[V],O=Zt(q,_,!1,h)&&O}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)Ts(p[_]);delete a.g[h],a.h--}}this.F=null},at.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},at.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function Zt(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,V=0;V<h.length;++V){var q=h[V];if(q&&!q.da&&q.capture==p){var De=q.listener,Et=q.ha||q.src;q.fa&&ot(a.i,q),O=De.call(Et,_)!==!1&&O}}return O&&!_.defaultPrevented}function fn(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ko(a){a.g=fn(()=>{a.g=null,a.i&&(a.i=!1,Ko(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class As extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ko(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oi(a){fe.call(this),this.h=a,this.g={}}A(Oi,fe);var Tn=[];function Qo(a){H(a.g,function(h,p){this.g.hasOwnProperty(p)&&qo(h)},a),a.g={}}Oi.prototype.N=function(){Oi.aa.N.call(this),Qo(this)},Oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cs=l.JSON.stringify,tu=l.JSON.parse,hd=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Rs(){}Rs.prototype.h=null;function Li(a){return a.h||(a.h=a.i())}function Yo(){}var sr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mi(){ke.call(this,"d")}A(Mi,ke);function Xo(){ke.call(this,"c")}A(Xo,ke);var Fn={},nu=null;function Vi(){return nu=nu||new at}Fn.La="serverreachability";function Ui(a){ke.call(this,Fn.La,a)}A(Ui,ke);function jn(a){const h=Vi();lt(h,new Ui(h))}Fn.STAT_EVENT="statevent";function ru(a,h){ke.call(this,Fn.STAT_EVENT,a),this.stat=h}A(ru,ke);function wt(a){const h=Vi();lt(h,new ru(h,a))}Fn.Ma="timingevent";function x(a,h){ke.call(this,Fn.Ma,a),this.size=h}A(x,ke);function D(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function M(){this.g=!0}M.prototype.xa=function(){this.g=!1};function B(a,h,p,_,O,V){a.info(function(){if(a.g)if(V)for(var q="",De=V.split("&"),Et=0;Et<De.length;Et++){var Ie=De[Et].split("=");if(1<Ie.length){var Pt=Ie[0];Ie=Ie[1];var xt=Pt.split("_");q=2<=xt.length&&xt[1]=="type"?q+(Pt+"="+Ie+"&"):q+(Pt+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+_+") [attempt "+O+"]: "+h+`
`+p+`
`+q})}function G(a,h,p,_,O,V,q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+O+"]: "+h+`
`+p+`
`+V+" "+q})}function ee(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Z(a,p)+(_?" "+_:"")})}function ae(a,h){a.info(function(){return"TIMEOUT: "+h})}M.prototype.info=function(){};function Z(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var O=_[1];if(Array.isArray(O)&&!(1>O.length)){var V=O[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<O.length;q++)O[q]=""}}}}return Cs(p)}catch{return h}}var J={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Y={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},te;function ce(){}A(ce,Rs),ce.prototype.g=function(){return new XMLHttpRequest},ce.prototype.i=function(){return{}},te=new ce;function he(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new Oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ze}function Ze(){this.i=null,this.g="",this.h=!1}var Re={},_e={};function Le(a,h,p){a.L=1,a.v=au(ur(h)),a.m=p,a.P=!0,or(a,null)}function or(a,h){a.F=Date.now(),Ut(a),a.A=ur(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Kg(p.i,"t",_),a.C=0,p=a.j.J,a.h=new Ze,a.g=dy(a.j,p?h:null,!a.m),0<a.O&&(a.M=new As(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Tn[0]=O.toString()),O=Tn);for(var V=0;V<O.length;V++){var q=Un(p,O[V],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),jn(),B(a.i,a.u,a.A,a.l,a.R,a.m)}he.prototype.ca=function(a){a=a.target;const h=this.M;h&&cr(a)==3?h.j():this.Y(a)},he.prototype.Y=function(a){try{if(a==this.g)e:{const xt=cr(this.g);var h=this.g.Ba();const Ns=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||ty(this.g)))){this.J||xt!=4||h==7||(h==8||0>=Ns?jn(3):jn(2)),ar(this);var p=this.g.Z();this.X=p;t:if(Or(this)){var _=ty(this.g);a="";var O=_.length,V=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),en(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(V&&h==O-1)});_.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,G(this.i,this.u,this.A,this.l,this.R,xt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var De,Et=this.g;if((De=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(De)){var Ie=De;break t}}Ie=null}if(p=Ie)ee(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lr(this,p);else{this.o=!1,this.s=3,wt(12),pn(this),en(this);break e}}if(this.P){p=!0;let Sn;for(;!this.J&&this.C<q.length;)if(Sn=In(this,q),Sn==_e){xt==4&&(this.s=4,wt(14),p=!1),ee(this.i,this.l,null,"[Incomplete Response]");break}else if(Sn==Re){this.s=4,wt(15),ee(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else ee(this.i,this.l,Sn,null),Lr(this,Sn);if(Or(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||q.length!=0||this.h.h||(this.s=1,wt(16),p=!1),this.o=this.o&&p,!p)ee(this.i,this.l,q,"[Invalid Chunked Response]"),pn(this),en(this);else if(0<q.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),md(Pt),Pt.M=!0,wt(11))}}else ee(this.i,this.l,q,null),Lr(this,q);xt==4&&pn(this),this.o&&!this.J&&(xt==4?ly(this.j,this):(this.o=!1,Ut(this)))}else zA(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),pn(this),en(this)}}}catch{}finally{}};function Or(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function In(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?_e:(p=Number(h.substring(p,_)),isNaN(p)?Re:(_+=1,_+p>h.length?_e:(h=h.slice(_,_+p),a.C=_+p,h)))}he.prototype.cancel=function(){this.J=!0,pn(this)};function Ut(a){a.S=Date.now()+a.I,Ps(a,a.I)}function Ps(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=D(m(a.ba,a),h)}function ar(a){a.B&&(l.clearTimeout(a.B),a.B=null)}he.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ae(this.i,this.A),this.L!=2&&(jn(),wt(17)),pn(this),this.s=2,en(this)):Ps(this,this.S-a)};function en(a){a.j.G==0||a.J||ly(a.j,a)}function pn(a){ar(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Qo(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Lr(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||$e(p.h,a))){if(!a.K&&$e(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var O=_;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)fu(p),hu(p);else break e;pd(p),wt(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=D(m(p.Za,p),6e3));if(1>=Mr(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ji(p,11)}else if((a.K||p.g==a)&&fu(p),!v(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let Ie=O[h];if(p.T=Ie[0],Ie=Ie[1],p.G==2)if(Ie[0]=="c"){p.K=Ie[1],p.ia=Ie[2];const Pt=Ie[3];Pt!=null&&(p.la=Pt,p.j.info("VER="+p.la));const xt=Ie[4];xt!=null&&(p.Aa=xt,p.j.info("SVER="+p.Aa));const Ns=Ie[5];Ns!=null&&typeof Ns=="number"&&0<Ns&&(_=1.5*Ns,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const Sn=a.g;if(Sn){const mu=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(mu){var V=_.h;V.g||mu.indexOf("spdy")==-1&&mu.indexOf("quic")==-1&&mu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&($n(V,V.h),V.h=null))}if(_.D){const gd=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;gd&&(_.ya=gd,Ue(_.I,_.D,gd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var q=a;if(_.qa=hy(_,_.J?_.ia:null,_.W),q.K){Jo(_.h,q);var De=q,Et=_.L;Et&&(De.I=Et),De.B&&(ar(De),Ut(De)),_.g=q}else oy(_);0<p.i.length&&du(p)}else Ie[0]!="stop"&&Ie[0]!="close"||ji(p,7);else p.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?ji(p,7):fd(p):Ie[0]!="noop"&&p.l&&p.l.ta(Ie),p.v=0)}}jn(4)}catch{}}var we=class{constructor(a,h){this.g=a,this.map=h}};function Ve(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lr(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Mr(a){return a.h?1:a.g?a.g.size:0}function $e(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function $n(a,h){a.g?a.g.add(h):a.h=h}function Jo(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ve.prototype.cancel=function(){if(this.i=iu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function iu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return P(a.i)}function PA(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function xA(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function Bg(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=xA(a),_=PA(a),O=_.length,V=0;V<O;V++)h.call(void 0,_[V],p&&p[V],a)}var zg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kA(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),O=null;if(0<=_){var V=a[p].substring(0,_);O=a[p].substring(_+1)}else V=a[p];h(V,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Fi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Fi){this.h=a.h,su(this,a.j),this.o=a.o,this.g=a.g,ou(this,a.s),this.l=a.l;var h=a.i,p=new ta;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Hg(this,p),this.m=a.m}else a&&(h=String(a).match(zg))?(this.h=!1,su(this,h[1]||"",!0),this.o=Zo(h[2]||""),this.g=Zo(h[3]||"",!0),ou(this,h[4]),this.l=Zo(h[5]||"",!0),Hg(this,h[6]||"",!0),this.m=Zo(h[7]||"")):(this.h=!1,this.i=new ta(null,this.h))}Fi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ea(h,Wg,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ea(h,Wg,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ea(p,p.charAt(0)=="/"?DA:bA,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ea(p,LA)),a.join("")};function ur(a){return new Fi(a)}function su(a,h,p){a.j=p?Zo(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ou(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Hg(a,h,p){h instanceof ta?(a.i=h,MA(a.i,a.h)):(p||(h=ea(h,OA)),a.i=new ta(h,a.h))}function Ue(a,h,p){a.i.set(h,p)}function au(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zo(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ea(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,NA),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function NA(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wg=/[#\/\?@]/g,bA=/[#\?:]/g,DA=/[#\?]/g,OA=/[#\?@]/g,LA=/#/g;function ta(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Vr(a){a.g||(a.g=new Map,a.h=0,a.i&&kA(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ta.prototype,t.add=function(a,h){Vr(this),this.i=null,a=xs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function qg(a,h){Vr(a),h=xs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Gg(a,h){return Vr(a),h=xs(a,h),a.g.has(h)}t.forEach=function(a,h){Vr(this),this.g.forEach(function(p,_){p.forEach(function(O){a.call(h,O,_,this)},this)},this)},t.na=function(){Vr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const O=a[_];for(let V=0;V<O.length;V++)p.push(h[_])}return p},t.V=function(a){Vr(this);let h=[];if(typeof a=="string")Gg(this,a)&&(h=h.concat(this.g.get(xs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Vr(this),this.i=null,a=xs(this,a),Gg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Kg(a,h,p){qg(a,h),0<p.length&&(a.i=null,a.g.set(xs(a,h),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const V=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var O=V;q[_]!==""&&(O+="="+encodeURIComponent(String(q[_]))),a.push(O)}}return this.i=a.join("&")};function xs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function MA(a,h){h&&!a.j&&(Vr(a),a.i=null,a.g.forEach(function(p,_){var O=_.toLowerCase();_!=O&&(qg(this,_),Kg(this,O,p))},a)),a.j=h}function VA(a,h){const p=new M;if(l.Image){const _=new Image;_.onload=E(Ur,p,"TestLoadImage: loaded",!0,h,_),_.onerror=E(Ur,p,"TestLoadImage: error",!1,h,_),_.onabort=E(Ur,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=E(Ur,p,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function UA(a,h){const p=new M,_=new AbortController,O=setTimeout(()=>{_.abort(),Ur(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(O),V.ok?Ur(p,"TestPingServer: ok",!0,h):Ur(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Ur(p,"TestPingServer: error",!1,h)})}function Ur(a,h,p,_,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),_(p)}catch{}}function FA(){this.g=new hd}function jA(a,h,p){const _=p||"";try{Bg(a,function(O,V){let q=O;c(O)&&(q=Cs(O)),h.push(_+V+"="+encodeURIComponent(q))})}catch(O){throw h.push(_+"type="+encodeURIComponent("_badmap")),O}}function lu(a){this.l=a.Ub||null,this.j=a.eb||!1}A(lu,Rs),lu.prototype.g=function(){return new uu(this.l,this.j)},lu.prototype.i=function(a){return function(){return a}}({});function uu(a,h){at.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(uu,at),t=uu.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ra(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,na(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ra(this)),this.g&&(this.readyState=3,ra(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?na(this):ra(this),this.readyState==3&&Qg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,na(this))},t.Qa=function(a){this.g&&(this.response=a,na(this))},t.ga=function(){this.g&&na(this)};function na(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ra(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function ra(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(uu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yg(a){let h="";return H(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function dd(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Yg(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ue(a,h,p))}function Ke(a){at.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Ke,at);var $A=/^https?$/i,BA=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?Li(this.o):Li(te),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){Xg(this,V);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var O in _)p.set(O,_[O]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())p.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(BA,h,void 0))||_||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of p)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ey(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Xg(this,V)}};function Xg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Jg(a),cu(a)}function Jg(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),cu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cu(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zg(this):this.bb())},t.bb=function(){Zg(this)};function Zg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||cr(a)!=4||a.Z()!=2)){if(a.u&&cr(a)==4)fn(a.Ea,0,a);else if(lt(a,"readystatechange"),cr(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=q===0){var O=String(a.D).match(zg)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),_=!$A.test(O?O.toLowerCase():"")}p=_}if(p)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var V=2<cr(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",Jg(a)}}finally{cu(a)}}}}function cu(a,h){if(a.g){ey(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||lt(a,"ready");try{p.onreadystatechange=_}catch{}}}function ey(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function cr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),tu(h)}};function ty(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function zA(a){const h={};a=(a.g&&2<=cr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(v(a[_]))continue;var p=k(a[_]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[O]||[];h[O]=V,V.push(p)}g(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ia(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function ny(a){this.Aa=0,this.i=[],this.j=new M,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ia("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ia("baseRetryDelayMs",5e3,a),this.cb=ia("retryDelaySeedMs",1e4,a),this.Wa=ia("forwardChannelMaxRetries",2,a),this.wa=ia("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ve(a&&a.concurrentRequestLimit),this.Da=new FA,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ny.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,_){wt(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=hy(this,null,this.W),du(this)};function fd(a){if(ry(a),a.G==3){var h=a.U++,p=ur(a.I);if(Ue(p,"SID",a.K),Ue(p,"RID",h),Ue(p,"TYPE","terminate"),sa(a,p),h=new he(a,a.j,h),h.L=2,h.v=au(ur(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=dy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ut(h)}cy(a)}function hu(a){a.g&&(md(a),a.g.cancel(),a.g=null)}function ry(a){hu(a),a.u&&(l.clearTimeout(a.u),a.u=null),fu(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function du(a){if(!lr(a.h)&&!a.s){a.s=!0;var h=a.Ga;Wt||ue(),W||(Wt(),W=!0),ie.add(h,a),a.B=0}}function HA(a,h){return Mr(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=D(m(a.Ga,a,h),uy(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new he(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(O.H=V,V=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=sy(this,O,h),p=ur(this.I),Ue(p,"RID",a),Ue(p,"CVER",22),this.D&&Ue(p,"X-HTTP-Session-Id",this.D),sa(this,p),V&&(this.O?h="headers="+encodeURIComponent(String(Yg(V)))+"&"+h:this.m&&dd(p,this.m,V)),$n(this.h,O),this.Ua&&Ue(p,"TYPE","init"),this.P?(Ue(p,"$req",h),Ue(p,"SID","null"),O.T=!0,Le(O,p,null)):Le(O,p,h),this.G=2}}else this.G==3&&(a?iy(this,a):this.i.length==0||lr(this.h)||iy(this))};function iy(a,h){var p;h?p=h.l:p=a.U++;const _=ur(a.I);Ue(_,"SID",a.K),Ue(_,"RID",p),Ue(_,"AID",a.T),sa(a,_),a.m&&a.o&&dd(_,a.m,a.o),p=new he(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=sy(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),$n(a.h,p),Le(p,_,h)}function sa(a,h){a.H&&H(a.H,function(p,_){Ue(h,_,p)}),a.l&&Bg({},function(p,_){Ue(h,_,p)})}function sy(a,h,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let V=-1;for(;;){const q=["count="+p];V==-1?0<p?(V=O[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let De=!0;for(let Et=0;Et<p;Et++){let Ie=O[Et].g;const Pt=O[Et].map;if(Ie-=V,0>Ie)V=Math.max(0,O[Et].g-100),De=!1;else try{jA(Pt,q,"req"+Ie+"_")}catch{_&&_(Pt)}}if(De){_=q.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function oy(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Wt||ue(),W||(Wt(),W=!0),ie.add(h,a),a.v=0}}function pd(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=D(m(a.Fa,a),uy(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ay(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=D(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),hu(this),ay(this))};function md(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ay(a){a.g=new he(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=ur(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),sa(a,h),a.m&&a.o&&dd(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=au(ur(h)),p.m=null,p.P=!0,or(p,a)}t.Za=function(){this.C!=null&&(this.C=null,hu(this),pd(this),wt(19))};function fu(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ly(a,h){var p=null;if(a.g==h){fu(a),md(a),a.g=null;var _=2}else if($e(a.h,h))p=h.D,Jo(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;_=Vi(),lt(_,new x(_,p)),du(a)}else oy(a);else if(O=h.s,O==3||O==0&&0<h.X||!(_==1&&HA(a,h)||_==2&&pd(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),O){case 1:ji(a,5);break;case 4:ji(a,10);break;case 3:ji(a,6);break;default:ji(a,2)}}}function uy(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function ji(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),_=a.Xa;const O=!_;_=new Fi(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||su(_,"https"),au(_),O?VA(_.toString(),p):UA(_.toString(),p)}else wt(2);a.G=0,a.l&&a.l.sa(h),cy(a),ry(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function cy(a){if(a.G=0,a.ka=[],a.l){const h=iu(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function hy(a,h,p){var _=p instanceof Fi?ur(p):new Fi(p);if(_.g!="")h&&(_.g=h+"."+_.g),ou(_,_.s);else{var O=l.location;_=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var V=new Fi(null);_&&su(V,_),h&&(V.g=h),O&&ou(V,O),p&&(V.l=p),_=V}return p=a.D,h=a.ya,p&&h&&Ue(_,p,h),Ue(_,"VER",a.la),sa(a,_),_}function dy(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new lu({eb:p})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fy(){}t=fy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function pu(){}pu.prototype.g=function(a,h){return new tn(a,h)};function tn(a,h){at.call(this),this.g=new ny(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ks(this)}A(tn,at),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){fd(this.g)},tn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Cs(a),a=p);h.i.push(new we(h.Ya++,a)),h.G==3&&du(h)},tn.prototype.N=function(){this.g.l=null,delete this.j,fd(this.g),delete this.g,tn.aa.N.call(this)};function py(a){Mi.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(py,Mi);function my(){Xo.call(this),this.status=1}A(my,Xo);function ks(a){this.g=a}A(ks,fy),ks.prototype.ua=function(){lt(this.g,"a")},ks.prototype.ta=function(a){lt(this.g,new py(a))},ks.prototype.sa=function(a){lt(this.g,new my)},ks.prototype.ra=function(){lt(this.g,"b")},pu.prototype.createWebChannel=pu.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,zI=function(){return new pu},BI=function(){return Vi()},$I=Fn,mp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},J.NO_ERROR=0,J.TIMEOUT=8,J.HTTP_ERROR=6,ic=J,Y.COMPLETE="complete",jI=Y,Yo.EventType=sr,sr.OPEN="a",sr.CLOSE="b",sr.ERROR="c",sr.MESSAGE="d",at.prototype.listen=at.prototype.K,Ra=Yo,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,FI=Ke}).apply(typeof Ou<"u"?Ou:typeof self<"u"?self:typeof window<"u"?window:{});const iv="@firebase/firestore",sv="4.9.0";/**
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
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
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
 */const hs=new $m("@firebase/firestore");function Os(){return hs.logLevel}function Q(t,...e){if(hs.logLevel<=me.DEBUG){const n=e.map(Hm);hs.debug(`Firestore (${Mo}): ${t}`,...n)}}function Ar(t,...e){if(hs.logLevel<=me.ERROR){const n=e.map(Hm);hs.error(`Firestore (${Mo}): ${t}`,...n)}}function To(t,...e){if(hs.logLevel<=me.WARN){const n=e.map(Hm);hs.warn(`Firestore (${Mo}): ${t}`,...n)}}function Hm(t){if(typeof t=="string")return t;try{/**
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
 */function re(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,HI(t,r,n)}function HI(t,e,n){let r=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ar(r),new Error(r)}function ve(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||HI(e,i,r)}function le(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends gs{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class WI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class Qk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Yk{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Xn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new WI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new Dt(e)}}class Xk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Xk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ov{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ov(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ov(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Wm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=eN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function gp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Xd(i)===Xd(s)?ge(i,s):Xd(i)?1:-1}return ge(t.length,e.length)}const tN=55296,nN=57343;function Xd(t){const e=t.charCodeAt(0);return e>=tN&&e<=nN}function Io(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const av="__name__";class Wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&re(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Wn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ge(e.length,n.length)}static compareSegments(e,n){const r=Wn.isNumericId(e),i=Wn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Wn.extractNumericId(e).compare(Wn.extractNumericId(n)):gp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pi.fromString(e.substring(4,e.length-2))}}class Ne extends Wn{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const rN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends Wn{construct(e,n,r){return new St(e,n,r)}static isValidIdentifier(e){return rN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===av}static keyField(){return new St([av])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Ne.fromString(e))}static fromName(e){return new ne(Ne.fromString(e).popFirst(5))}static empty(){return new ne(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Ne(e.slice()))}}/**
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
 */function qI(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iN(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lv(t){if(!ne.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function uv(t){if(ne.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function GI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re(12329,{type:typeof t})}function wi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mh(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function it(t,e){const n={typeString:t};return e&&(n.value=e),n}function jl(t,e){if(!GI(t))throw new K(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new K(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const cv=-62135596800,hv=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*hv);return new Ce(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<cv)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hv}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(jl(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cv;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:it("string",Ce._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ce(0,0))}static max(){return new se(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const _l=-1;function sN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new Ei(i,ne.empty(),e)}function oN(t){return new Ei(t.readTime,t.key,_l)}class Ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ei(se.min(),ne.empty(),_l)}static max(){return new Ei(se.max(),ne.empty(),_l)}}function aN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const lN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Vo(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==lN)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function cN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Uo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Vh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vh.ce=-1;/**
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
 */const qm=-1;function $l(t){return t==null}function Gc(t){return t===0&&1/t==-1/0}function hN(t){return typeof t=="number"&&Number.isInteger(t)&&!Gc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const KI="";function dN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dv(e)),e=fN(t.get(n),e);return dv(e)}function fN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case KI:n+="";break;default:n+=s}}return n}function dv(t){return t+KI+""}/**
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
 */function fv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pN(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function QI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||It.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lu(this.root,e,this.comparator,!0)}}class Lu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class It{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??It.RED,this.left=i??It.EMPTY,this.right=s??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new It(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return It.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new It(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pv(this.data.getIterator())}getIteratorFrom(e){return new pv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class pv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class an{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new an([])}unionWith(e){let n=new ht(St.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Io(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class YI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new YI("Invalid base64 string: "+s):s}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const mN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=mN.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ii(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
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
 */const XI="server_timestamp",JI="__type__",ZI="__previous_value__",e0="__local_write_time__";function Gm(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[JI])==null?void 0:r.stringValue)===XI}function Uh(t){const e=t.mapValue.fields[ZI];return Gm(e)?Uh(e):e}function vl(t){const e=Ti(t.mapValue.fields[e0].timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class gN{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Kc="(default)";class wl{constructor(e,n){this.projectId=e,this.database=n||Kc}static empty(){return new wl("","")}get isDefaultDatabase(){return this.database===Kc}isEqual(e){return e instanceof wl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const t0="__type__",yN="__max__",Mu={mapValue:{}},n0="__vector__",Qc="value";function Si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gm(t)?4:vN(t)?9007199254740991:_N(t)?10:11:re(28295,{value:t})}function rr(t,e){if(t===e)return!0;const n=Si(t);if(n!==Si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vl(t).isEqual(vl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ti(i.timestampValue),l=Ti(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ii(i.bytesValue).isEqual(Ii(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Xe(i.geoPointValue.latitude)===Xe(s.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Xe(i.integerValue)===Xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Xe(i.doubleValue),l=Xe(s.doubleValue);return o===l?Gc(o)===Gc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Io(t.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(fv(o)!==fv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!rr(o[u],l[u])))return!1;return!0}(t,e);default:return re(52216,{left:t})}}function El(t,e){return(t.values||[]).find(n=>rr(n,e))!==void 0}function So(t,e){if(t===e)return 0;const n=Si(t),r=Si(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Xe(s.integerValue||s.doubleValue),u=Xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return mv(t.timestampValue,e.timestampValue);case 4:return mv(vl(t),vl(e));case 5:return gp(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ii(s),u=Ii(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ge(l[c],u[c]);if(d!==0)return d}return ge(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ge(Xe(s.latitude),Xe(o.latitude));return l!==0?l:ge(Xe(s.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return gv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,E,A,P;const l=s.fields||{},u=o.fields||{},c=(m=l[Qc])==null?void 0:m.arrayValue,d=(E=u[Qc])==null?void 0:E.arrayValue,f=ge(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return f!==0?f:gv(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Mu.mapValue&&o===Mu.mapValue)return 0;if(s===Mu.mapValue)return 1;if(o===Mu.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=gp(u[f],d[f]);if(m!==0)return m;const E=So(l[u[f]],c[d[f]]);if(E!==0)return E}return ge(u.length,d.length)}(t.mapValue,e.mapValue);default:throw re(23264,{he:n})}}function mv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Ti(t),r=Ti(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function gv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=So(n[i],r[i]);if(s)return s}return ge(n.length,r.length)}function Ao(t){return yp(t)}function yp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ti(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ii(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yp(n.fields[o])}`;return i+"}"}(t.mapValue):re(61005,{value:t})}function sc(t){switch(Si(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uh(t);return e?16+sc(e):16;case 5:return 2*t.stringValue.length;case 6:return Ii(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+sc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ki(r.fields,(s,o)=>{i+=s.length+sc(o)}),i}(t.mapValue);default:throw re(13486,{value:t})}}function yv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _p(t){return!!t&&"integerValue"in t}function Km(t){return!!t&&"arrayValue"in t}function _v(t){return!!t&&"nullValue"in t}function vv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oc(t){return!!t&&"mapValue"in t}function _N(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[t0])==null?void 0:r.stringValue)===n0}function za(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=za(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=za(t.arrayValue.values[n]);return e}return{...t}}function vN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===yN}/**
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
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=za(n)}setAll(e){let n=St.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=za(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());oc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];oc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(za(this.value))}}function r0(t){const e=[];return ki(t.fields,(n,r)=>{const i=new St([n]);if(oc(r)){const s=r0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new an(e)}/**
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
 */class pt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,se.min(),se.min(),se.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,se.min(),se.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,se.min(),se.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yc{constructor(e,n){this.position=e,this.inclusive=n}}function wv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=So(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ev(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function wN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class i0{}class rt extends i0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TN(e,n,r):n==="array-contains"?new AN(e,r):n==="in"?new CN(e,r):n==="not-in"?new RN(e,r):n==="array-contains-any"?new PN(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IN(e,r):new SN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(So(n,this.value)):n!==null&&Si(this.value)===Si(n)&&this.matchesComparison(So(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends i0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new On(e,n)}matches(e){return s0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function s0(t){return t.op==="and"}function o0(t){return EN(t)&&s0(t)}function EN(t){for(const e of t.filters)if(e instanceof On)return!1;return!0}function vp(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+Ao(t.value);if(o0(t))return t.filters.map(e=>vp(e)).join(",");{const e=t.filters.map(n=>vp(n)).join(",");return`${t.op}(${e})`}}function a0(t,e){return t instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&rr(r.value,i.value)}(t,e):t instanceof On?function(r,i){return i instanceof On&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&a0(o,i.filters[l]),!0):!1}(t,e):void re(19439)}function l0(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ao(n.value)}`}(t):t instanceof On?function(n){return n.op.toString()+" {"+n.getFilters().map(l0).join(" ,")+"}"}(t):"Filter"}class TN extends rt{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class IN extends rt{constructor(e,n){super(e,"in",n),this.keys=u0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SN extends rt{constructor(e,n){super(e,"not-in",n),this.keys=u0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function u0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class AN extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Km(n)&&El(n.arrayValue,this.value)}}class CN extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&El(this.value.arrayValue,n)}}class RN extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(El(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!El(this.value.arrayValue,n)}}class PN extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Km(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>El(this.value.arrayValue,r))}}/**
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
 */class xN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Tv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xN(t,e,n,r,i,s,o)}function Qm(t){const e=le(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),$l(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),e.Te=n}return e.Te}function Ym(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!a0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ev(t.startAt,e.startAt)&&Ev(t.endAt,e.endAt)}function wp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Fo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function kN(t,e,n,r,i,s,o,l){return new Fo(t,e,n,r,i,s,o,l)}function c0(t){return new Fo(t)}function Iv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function h0(t){return t.collectionGroup!==null}function Ha(t){const e=le(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ht(St.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Tl(s,r))}),n.has(St.keyField().canonicalString())||e.Ie.push(new Tl(St.keyField(),r))}return e.Ie}function Jn(t){const e=le(t);return e.Ee||(e.Ee=d0(e,Ha(t))),e.Ee}function NN(t){const e=le(t);return e.de||(e.de=d0(e,t.explicitOrderBy)),e.de}function d0(t,e){if(t.limitType==="F")return Tv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Tl(i.field,s)});const n=t.endAt?new Yc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yc(t.startAt.position,t.startAt.inclusive):null;return Tv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ep(t,e){const n=t.filters.concat([e]);return new Fo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xc(t,e,n){return new Fo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fh(t,e){return Ym(Jn(t),Jn(e))&&t.limitType===e.limitType}function f0(t){return`${Qm(Jn(t))}|lt:${t.limitType}`}function Ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>l0(i)).join(", ")}]`),$l(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ao(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ao(i)).join(",")),`Target(${r})`}(Jn(t))}; limitType=${t.limitType})`}function jh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ha(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=wv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ha(r),i)||r.endAt&&!function(o,l,u){const c=wv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ha(r),i))}(t,e)}function bN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function p0(t){return(e,n)=>{let r=!1;for(const i of Ha(t)){const s=DN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function DN(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?So(u,c):re(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:t.dir})}}/**
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
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return QI(this.inner)}size(){return this.innerSize}}/**
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
 */const ON=new Ge(ne.comparator);function Cr(){return ON}const m0=new Ge(ne.comparator);function Pa(...t){let e=m0;for(const n of t)e=e.insert(n.key,n);return e}function g0(t){let e=m0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xi(){return Wa()}function y0(){return Wa()}function Wa(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const LN=new Ge(ne.comparator),MN=new ht(ne.comparator);function ye(...t){let e=MN;for(const n of t)e=e.add(n);return e}const VN=new ht(ge);function UN(){return VN}/**
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
 */function Xm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gc(e)?"-0":e}}function _0(t){return{integerValue:""+t}}function FN(t,e){return hN(e)?_0(e):Xm(t,e)}/**
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
 */class $h{constructor(){this._=void 0}}function jN(t,e,n){return t instanceof Il?function(i,s){const o={fields:{[JI]:{stringValue:XI},[e0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Gm(s)&&(s=Uh(s)),s&&(o.fields[ZI]=s),{mapValue:o}}(n,e):t instanceof Sl?w0(t,e):t instanceof Al?E0(t,e):function(i,s){const o=v0(i,s),l=Sv(o)+Sv(i.Ae);return _p(o)&&_p(i.Ae)?_0(l):Xm(i.serializer,l)}(t,e)}function $N(t,e,n){return t instanceof Sl?w0(t,e):t instanceof Al?E0(t,e):n}function v0(t,e){return t instanceof Jc?function(r){return _p(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Il extends $h{}class Sl extends $h{constructor(e){super(),this.elements=e}}function w0(t,e){const n=T0(e);for(const r of t.elements)n.some(i=>rr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Al extends $h{constructor(e){super(),this.elements=e}}function E0(t,e){let n=T0(e);for(const r of t.elements)n=n.filter(i=>!rr(i,r));return{arrayValue:{values:n}}}class Jc extends $h{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Sv(t){return Xe(t.integerValue||t.doubleValue)}function T0(t){return Km(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class BN{constructor(e,n){this.field=e,this.transform=n}}function zN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Sl&&i instanceof Sl||r instanceof Al&&i instanceof Al?Io(r.elements,i.elements,rr):r instanceof Jc&&i instanceof Jc?rr(r.Ae,i.Ae):r instanceof Il&&i instanceof Il}(t.transform,e.transform)}class HN{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ac(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bh{}function I0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jm(t.key,$t.none()):new Bl(t.key,t.data,$t.none());{const n=t.data,r=jt.empty();let i=new ht(St.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ni(t.key,r,new an(i.toArray()),$t.none())}}function WN(t,e,n){t instanceof Bl?function(i,s,o){const l=i.value.clone(),u=Cv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ni?function(i,s,o){if(!ac(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Cv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(S0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function qa(t,e,n,r){return t instanceof Bl?function(s,o,l,u){if(!ac(s.precondition,o))return l;const c=s.value.clone(),d=Rv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ni?function(s,o,l,u){if(!ac(s.precondition,o))return l;const c=Rv(s.fieldTransforms,u,o),d=o.data;return d.setAll(S0(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return ac(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function qN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=v0(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function Av(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Io(r,i,(s,o)=>zN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bl extends Bh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ni extends Bh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function S0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cv(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,$N(o,l,n[i]))}return r}function Rv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jN(s,o,e))}return r}class Jm extends Bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class A0 extends Bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class GN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&WN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=y0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=I0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&Io(this.mutations,e.mutations,(n,r)=>Av(n,r))&&Io(this.baseMutations,e.baseMutations,(n,r)=>Av(n,r))}}class Zm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return LN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Zm(e,n,r,i)}}/**
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
 */class KN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QN{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class YN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,Ee;function C0(t){switch(t){case F.OK:return re(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return re(15467,{code:t})}}function R0(t){if(t===void 0)return Ar("GRPC error has no .code"),F.UNKNOWN;switch(t){case et.OK:return F.OK;case et.CANCELLED:return F.CANCELLED;case et.UNKNOWN:return F.UNKNOWN;case et.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case et.INTERNAL:return F.INTERNAL;case et.UNAVAILABLE:return F.UNAVAILABLE;case et.UNAUTHENTICATED:return F.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case et.NOT_FOUND:return F.NOT_FOUND;case et.ALREADY_EXISTS:return F.ALREADY_EXISTS;case et.PERMISSION_DENIED:return F.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case et.ABORTED:return F.ABORTED;case et.OUT_OF_RANGE:return F.OUT_OF_RANGE;case et.UNIMPLEMENTED:return F.UNIMPLEMENTED;case et.DATA_LOSS:return F.DATA_LOSS;default:return re(39323,{code:t})}}(Ee=et||(et={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function XN(){return new TextEncoder}/**
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
 */const JN=new pi([4294967295,4294967295],0);function Pv(t){const e=XN().encode(t),n=new UI;return n.update(e),new Uint8Array(n.digest())}function xv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new pi([n,r],0),new pi([i,s],0)]}class eg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xa(`Invalid padding: ${n}`);if(r<0)throw new xa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=pi.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(pi.fromNumber(r)));return i.compare(JN)===1&&(i=new pi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Pv(e),[r,i]=xv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new eg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Pv(e),[r,i]=xv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class zh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,zl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zh(se.min(),i,new Ge(ge),Cr(),ye())}}class zl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new zl(r,n,ye(),ye(),ye())}}/**
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
 */class lc{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class P0{constructor(e,n){this.targetId=e,this.Ce=n}}class x0{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class kv{constructor(){this.ve=0,this.Fe=Nv(),this.Me=Rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re(38017,{changeType:s})}}),new zl(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Nv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ZN{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cr(),this.Je=Vu(),this.He=Vu(),this.Ye=new Ge(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(wp(s))if(r===0){const o=new ne(s.path);this.et(n,o,pt.newNoDocument(o,se.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ii(r).toUint8Array()}catch(u){if(u instanceof YI)return To("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new eg(o,i,s)}catch(u){return To(u instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&wp(l.target)){const u=new ne(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,pt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ye();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new zh(e,n,this.Ye,this.je,r);return this.je=Cr(),this.Je=Vu(),this.He=Vu(),this.Ye=new Ge(ge),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new kv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ht(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ht(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Vu(){return new Ge(ne.comparator)}function Nv(){return new Ge(ne.comparator)}const eb={asc:"ASCENDING",desc:"DESCENDING"},tb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nb={and:"AND",or:"OR"};class rb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tp(t,e){return t.useProto3Json||$l(e)?e:{value:e}}function Zc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function k0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ib(t,e){return Zc(t,e.toTimestamp())}function un(t){return ve(!!t,49232),se.fromTimestamp(function(n){const r=Ti(n);return new Ce(r.seconds,r.nanos)}(t))}function tg(t,e){return Ip(t,e).canonicalString()}function Ip(t,e){const n=function(i){return new Ne(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function N0(t){const e=Ne.fromString(t);return ve(U0(e),10190,{key:e.toString()}),e}function eh(t,e){return tg(t.databaseId,e.path)}function Ga(t,e){const n=N0(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(D0(n))}function b0(t,e){return tg(t.databaseId,e)}function sb(t){const e=N0(t);return e.length===4?Ne.emptyPath():D0(e)}function Sp(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function D0(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function bv(t,e,n){return{name:eh(t,e),fields:n.value.mapValue.fields}}function ob(t,e){return"found"in e?function(r,i){ve(!!i.found,43571),i.found.name,i.found.updateTime;const s=Ga(r,i.found.name),o=un(i.found.updateTime),l=i.found.createTime?un(i.found.createTime):se.min(),u=new jt({mapValue:{fields:i.found.fields}});return pt.newFoundDocument(s,o,l,u)}(t,e):"missing"in e?function(r,i){ve(!!i.missing,3894),ve(!!i.readTime,22933);const s=Ga(r,i.missing),o=un(i.readTime);return pt.newNoDocument(s,o)}(t,e):re(7234,{result:e})}function ab(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ve(d===void 0||typeof d=="string",58123),Rt.fromBase64String(d||"")):(ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Rt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?F.UNKNOWN:R0(c.code);return new K(d,c.message||"")}(o);n=new x0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ga(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):se.min(),l=new jt({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new lc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ga(t,r.document),s=r.readTime?un(r.readTime):se.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new lc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ga(t,r.document),s=r.removedTargetIds||[];n=new lc([],s,i,null)}else{if(!("filter"in e))return re(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new YN(i,s),l=r.targetId;n=new P0(l,o)}}return n}function O0(t,e){let n;if(e instanceof Bl)n={update:bv(t,e.key,e.value)};else if(e instanceof Jm)n={delete:eh(t,e.key)};else if(e instanceof Ni)n={update:bv(t,e.key,e.data),updateMask:gb(e.fieldMask)};else{if(!(e instanceof A0))return re(16599,{Vt:e.type});n={verify:eh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Il)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Al)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Jc)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw re(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ib(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re(27497)}(t,e.precondition)),n}function lb(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(se.min())&&(o=un(s)),new HN(o,i.transformResults||[])}(n,e))):[]}function ub(t,e){return{documents:[b0(t,e.path)]}}function L0(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=b0(t,i);const s=function(c){if(c.length!==0)return V0(On.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Gr(m.field),direction:fb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Tp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function cb(t,e,n,r){const{ft:i,parent:s}=L0(t,e),o={},l=[];let u=0;return n.forEach(c=>{const d="aggregate_"+u++;o[d]=c.alias,c.aggregateType==="count"?l.push({alias:d,count:{}}):c.aggregateType==="avg"?l.push({alias:d,avg:{field:Gr(c.fieldPath)}}):c.aggregateType==="sum"&&l.push({alias:d,sum:{field:Gr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:i.structuredQuery},parent:i.parent},gt:o,parent:s}}function hb(t){let e=sb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=M0(f);return m instanceof On&&o0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(A){return new Tl(Ms(A.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,$l(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,E=f.values||[];return new Yc(E,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,E=f.values||[];return new Yc(E,m)}(n.endAt)),kN(e,i,o,s,l,"F",u,c)}function db(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function M0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ms(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ms(n.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ms(n.unaryFilter.field);return rt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ms(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Ms(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return On.create(n.compositeFilter.filters.map(r=>M0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(n.compositeFilter.op))}(t):re(30097,{filter:t})}function fb(t){return eb[t]}function pb(t){return tb[t]}function mb(t){return nb[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Ms(t){return St.fromServerFormat(t.fieldPath)}function V0(t){return t instanceof rt?function(n){if(n.op==="=="){if(vv(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(_v(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vv(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(_v(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:pb(n.op),value:n.value}}}(t):t instanceof On?function(n){const r=n.getFilters().map(i=>V0(i));return r.length===1?r[0]:{compositeFilter:{op:mb(n.op),filters:r}}}(t):re(54877,{filter:t})}function gb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function U0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ti{constructor(e,n,r,i,s=se.min(),o=se.min(),l=Rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yb{constructor(e){this.yt=e}}function _b(t){const e=hb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xc(e,e.limit,"L"):e}/**
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
 */class vb{constructor(){this.Cn=new wb}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Ei.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class wb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ht(Ne.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ht(Ne.comparator)).toArray()}}/**
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
 */const Dv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},F0=41943040;class Gt{static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(F0,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);/**
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
 */class Co{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Co(0)}static cr(){return new Co(-1)}}/**
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
 */const Ov="LruGarbageCollector",Eb=1048576;function Lv([t,e],[n,r]){const i=ge(t,n);return i===0?ge(e,r):i}class Tb{constructor(e){this.Ir=e,this.buffer=new ht(Lv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Lv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Ib{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Q(Ov,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Uo(n)?Q(Ov,"Ignoring IndexedDB error during garbage collection: ",n):await Vo(n)}await this.Vr(3e5)})}}class Sb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Vh.ce);const r=new Tb(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Dv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Dv):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Os()<=me.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function Ab(t,e){return new Sb(t,e)}/**
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
 */class Cb{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Rb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Pb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&qa(r.mutation,i,an.empty(),Ce.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const i=Xi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Pa();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cr();const o=Wa(),l=function(){return Wa()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ni)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),qa(d.mutation,c,d.mutation.getFieldMask(),Ce.now())):o.set(c.key,an.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new Rb(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Wa();let i=new Ge((o,l)=>o-l),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||an.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||ye()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=y0();d.forEach(m=>{if(!s.has(m)){const E=I0(n.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):h0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Xi());let l=_l,u=s;return o.next(c=>j.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ye())).next(d=>({batchId:l,changes:g0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=Pa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Pa();return this.indexManager.getCollectionParents(e,s).next(l=>j.forEach(l,u=>{const c=function(f,m){return new Fo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,pt.newInvalidDocument(d)))});let l=Pa();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&qa(d.mutation,c,an.empty(),Ce.now()),jh(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class xb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return j.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:_b(i.bundledQuery),readTime:un(i.readTime)}}(n)),j.resolve()}}/**
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
 */class kb{constructor(){this.overlays=new Ge(ne.comparator),this.qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xi();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Xi(),s=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ge((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Xi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Xi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return j.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KN(n,r));let s=this.qr.get(n);s===void 0&&(s=ye(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class Nb{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class ng{constructor(){this.Qr=new ht(dt.$r),this.Ur=new ht(dt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new dt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ne(new Ne([])),r=new dt(n,e),i=new dt(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new Ne([])),r=new dt(n,e),i=new dt(n,e+1);let s=ye();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new dt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
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
 */class bb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ht(dt.$r)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new dt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?qm:this.tr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(ge);return n.forEach(i=>{const s=new dt(i,0),o=new dt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),j.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new dt(new ne(s),0);let l=new ht(ge);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),j.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return j.forEach(n.mutations,i=>{const s=new dt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new dt(n,0),i=this.Zr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Db{constructor(e){this.ri=e,this.docs=function(){return new Ge(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cr();const o=n.path,l=new ne(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||aN(oN(d),r)<=0||(i.has(d.key)||jh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re(9500)}ii(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ob(this)}getSize(e){return j.resolve(this.size)}}class Ob extends Cb{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class Lb{constructor(e){this.persistence=e,this.si=new ys(n=>Qm(n),Ym),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new ng,this.targetCount=0,this.ai=Co.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),j.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Co(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Pr(n),j.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this._i.containsKey(n))}}/**
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
 */class j0{constructor(e,n){this.ui={},this.overlays={},this.ci=new Vh(0),this.li=!1,this.li=!0,this.hi=new Nb,this.referenceDelegate=e(this),this.Pi=new Lb(this),this.indexManager=new vb,this.remoteDocumentCache=function(i){return new Db(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new yb(n),this.Ii=new xb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new bb(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new Mb(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return j.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Mb extends uN{constructor(e){super(),this.currentSequenceNumber=e}}class rg{constructor(e){this.persistence=e,this.Ri=new ng,this.Vi=null}static mi(e){return new rg(e)}get fi(){if(this.Vi)return this.Vi;throw re(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.fi,r=>{const i=ne.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return j.or([()=>j.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class th{constructor(e,n){this.persistence=e,this.pi=new ys(r=>dN(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Ab(this,n)}static mi(e,n){return new th(e,n)}Ei(){}di(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return j.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?j.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,se.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),j.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=sc(e.data.value)),n}br(e,n,r){return j.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return j.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ig{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ye(),i=ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ig(e,n.fromCache,r,i)}}/**
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
 */class Vb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ub{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return kx()?8:cN(Mt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Vb;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(Os()<=me.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),j.resolve()):(Os()<=me.DEBUG&&Q("QueryEngine","Query:",Ls(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Os()<=me.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jn(n))):j.resolve())}ys(e,n){if(Iv(n))return j.resolve(null);let r=Jn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xc(n,null,"F"),r=Jn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ye(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,Xc(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Iv(n)||i.isEqual(se.min())?j.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?j.resolve(null):(Os()<=me.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ls(n)),this.vs(e,o,n,sN(i,_l)).next(l=>l))})}Ds(e,n){let r=new ht(p0(e));return n.forEach((i,s)=>{jh(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return Os()<=me.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Ls(n)),this.ps.getDocumentsMatchingQuery(e,n,Ei.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const sg="LocalStore",Fb=3e8;class jb{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ge(ge),this.xs=new ys(s=>Qm(s),Ym),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function $b(t,e,n,r){return new jb(t,e,n,r)}async function $0(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ye();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function Bb(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let E=j.resolve();return m.forEach(A=>{E=E.next(()=>d.getEntry(u,A)).next(P=>{const b=c.docVersions.get(A);ve(b!==null,48541),P.version.compareTo(b)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),d.addEntry(P)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ye();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function B0(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function zb(t,e){const n=le(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(Rt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(P,b,S){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Fb?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,E,d)&&l.push(n.Pi.updateTargetData(s,E))});let u=Cr(),c=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(Hb(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(se.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(f=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return j.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function Hb(t,e,n){let r=ye(),i=ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Q(sg,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function Wb(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=qm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qb(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new ti(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Ap(t,e,n){const r=le(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Uo(o))throw o;Q(sg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Mv(t,e,n){const r=le(t);let i=se.min(),s=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=le(u),m=f.xs.get(d);return m!==void 0?j.resolve(f.Ms.get(m)):f.Pi.getTargetData(c,d)}(r,o,Jn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:ye())).next(l=>(Gb(r,bN(e),l),{documents:l,Qs:s})))}function Gb(t,e,n){let r=t.Os.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Vv{constructor(){this.activeTargetIds=UN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kb{constructor(){this.Mo=new Vv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Vv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Qb{Oo(e){}shutdown(){}}/**
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
 */const Uv="ConnectivityMonitor";class Fv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){Q(Uv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){Q(Uv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Uu=null;function Cp(){return Uu===null?Uu=function(){return 268435456+Math.round(2147483648*Math.random())}():Uu++,"0x"+Uu.toString(16)}/**
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
 */const Jd="RestConnection",Yb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Xb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Kc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Cp(),l=this.zo(e,n.toUriEncodedString());Q(Jd,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=Oo(c);return this.Jo(e,l,u,r,d).then(f=>(Q(Jd,`Received RPC '${e}' ${o}: `,f),f),f=>{throw To(Jd,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=Yb[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class Jb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const bt="WebChannelConnection";class Zb extends Xb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Cp();return new Promise((l,u)=>{const c=new FI;c.setWithCredentials(!0),c.listenOnce(jI.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ic.NO_ERROR:const f=c.getResponseJson();Q(bt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case ic.TIMEOUT:Q(bt,`RPC '${e}' ${o} timed out`),u(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const m=c.getStatus();if(Q(bt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const A=E==null?void 0:E.error;if(A&&A.status&&A.message){const P=function(S){const v=S.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(v)>=0?v:F.UNKNOWN}(A.status);u(new K(P,A.message))}else u(new K(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new K(F.UNAVAILABLE,"Connection failed."));break;default:re(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{Q(bt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Q(bt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Cp(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zI(),l=BI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");Q(bt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);this.I_(f);let m=!1,E=!1;const A=new Jb({Yo:b=>{E?Q(bt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(Q(bt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),Q(bt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},Zo:()=>f.close()}),P=(b,S,v)=>{b.listen(S,C=>{try{v(C)}catch(L){setTimeout(()=>{throw L},0)}})};return P(f,Ra.EventType.OPEN,()=>{E||(Q(bt,`RPC '${e}' stream ${i} transport opened.`),A.o_())}),P(f,Ra.EventType.CLOSE,()=>{E||(E=!0,Q(bt,`RPC '${e}' stream ${i} transport closed`),A.a_(),this.E_(f))}),P(f,Ra.EventType.ERROR,b=>{E||(E=!0,To(bt,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),A.a_(new K(F.UNAVAILABLE,"The operation could not be completed")))}),P(f,Ra.EventType.MESSAGE,b=>{var S;if(!E){const v=b.data[0];ve(!!v,16349);const C=v,L=(C==null?void 0:C.error)||((S=C[0])==null?void 0:S.error);if(L){Q(bt,`RPC '${e}' stream ${i} received error:`,L);const $=L.status;let H=function(I){const T=et[I];if(T!==void 0)return R0(T)}($),g=L.message;H===void 0&&(H=F.INTERNAL,g="Unknown error status: "+$+" with message "+L.message),E=!0,A.a_(new K(H,g)),f.close()}else Q(bt,`RPC '${e}' stream ${i} received:`,v),A.u_(v)}}),P(l,$I.STAT_EVENT,b=>{b.stat===mp.PROXY?Q(bt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===mp.NOPROXY&&Q(bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.__()},0),A}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Zd(){return typeof document<"u"?document:null}/**
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
 */function Hh(t){return new rb(t,!0)}/**
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
 */class og{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const jv="PersistentStream";class z0{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new og(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Ar(n.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(jv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Q(jv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eD extends z0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=ab(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?un(o.readTime):se.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Sp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=wp(u)?{documents:ub(s,u)}:{query:L0(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=k0(s,o.resumeToken);const c=Tp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=Zc(s,o.snapshotVersion.toTimestamp());const c=Tp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=db(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Sp(this.serializer),n.removeTarget=e,this.q_(n)}}class tD extends z0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=lb(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Sp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>O0(this.serializer,r))};this.q_(n)}}/**
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
 */class nD{}class rD extends nD{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Ip(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Ip(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class iD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const ds="RemoteStore";class sD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{_s(this)&&(Q(ds,"Restarting streams for network reachability change."),await async function(u){const c=le(u);c.Ea.add(4),await Hl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Wh(c)}(this))})}),this.Ra=new iD(r,i)}}async function Wh(t){if(_s(t))for(const e of t.da)await e(!0)}async function Hl(t){for(const e of t.da)await e(!1)}function H0(t,e){const n=le(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),cg(n)?ug(n):jo(n).O_()&&lg(n,e))}function ag(t,e){const n=le(t),r=jo(n);n.Ia.delete(e),r.O_()&&W0(n,e),n.Ia.size===0&&(r.O_()?r.L_():_s(n)&&n.Ra.set("Unknown"))}function lg(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}jo(t).Y_(e)}function W0(t,e){t.Va.Ue(e),jo(t).Z_(e)}function ug(t){t.Va=new ZN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),jo(t).start(),t.Ra.ua()}function cg(t){return _s(t)&&!jo(t).x_()&&t.Ia.size>0}function _s(t){return le(t).Ea.size===0}function q0(t){t.Va=void 0}async function oD(t){t.Ra.set("Online")}async function aD(t){t.Ia.forEach((e,n)=>{lg(t,e)})}async function lD(t,e){q0(t),cg(t)?(t.Ra.ha(e),ug(t)):t.Ra.set("Unknown")}async function uD(t,e,n){if(t.Ra.set("Online"),e instanceof x0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){Q(ds,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nh(t,r)}else if(e instanceof lc?t.Va.Ze(e):e instanceof P0?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await B0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(Rt.EMPTY_BYTE_STRING,d.snapshotVersion)),W0(s,u);const f=new ti(d.target,u,c,d.sequenceNumber);lg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Q(ds,"Failed to raise snapshot:",r),await nh(t,r)}}async function nh(t,e,n){if(!Uo(e))throw e;t.Ea.add(1),await Hl(t),t.Ra.set("Offline"),n||(n=()=>B0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q(ds,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Wh(t)})}function G0(t,e){return e().catch(n=>nh(t,n,e))}async function qh(t){const e=le(t),n=Ai(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:qm;for(;cD(e);)try{const i=await Wb(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,hD(e,i)}catch(i){await nh(e,i)}K0(e)&&Q0(e)}function cD(t){return _s(t)&&t.Ta.length<10}function hD(t,e){t.Ta.push(e);const n=Ai(t);n.O_()&&n.X_&&n.ea(e.mutations)}function K0(t){return _s(t)&&!Ai(t).x_()&&t.Ta.length>0}function Q0(t){Ai(t).start()}async function dD(t){Ai(t).ra()}async function fD(t){const e=Ai(t);for(const n of t.Ta)e.ea(n.mutations)}async function pD(t,e,n){const r=t.Ta.shift(),i=Zm.from(r,e,n);await G0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await qh(t)}async function mD(t,e){e&&Ai(t).X_&&await async function(r,i){if(function(o){return C0(o)&&o!==F.ABORTED}(i.code)){const s=r.Ta.shift();Ai(r).B_(),await G0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qh(r)}}(t,e),K0(t)&&Q0(t)}async function $v(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),Q(ds,"RemoteStore received new credentials");const r=_s(n);n.Ea.add(3),await Hl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Wh(n)}async function gD(t,e){const n=le(t);e?(n.Ea.delete(2),await Wh(n)):e||(n.Ea.add(2),await Hl(n),n.Ra.set("Unknown"))}function jo(t){return t.ma||(t.ma=function(n,r,i){const s=le(n);return s.sa(),new eD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:oD.bind(null,t),t_:aD.bind(null,t),r_:lD.bind(null,t),H_:uD.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),cg(t)?ug(t):t.Ra.set("Unknown")):(await t.ma.stop(),q0(t))})),t.ma}function Ai(t){return t.fa||(t.fa=function(n,r,i){const s=le(n);return s.sa(),new tD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:dD.bind(null,t),r_:mD.bind(null,t),ta:fD.bind(null,t),na:pD.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await qh(t)):(await t.fa.stop(),t.Ta.length>0&&(Q(ds,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class hg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dg(t,e){if(Ar("AsyncQueue",`${e}: ${t}`),Uo(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class oo{static emptySet(e){return new oo(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Pa(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof oo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new oo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Bv{constructor(){this.ga=new Ge(ne.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):re(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ro{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ro(e,n,oo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class _D{constructor(){this.queries=zv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=le(n),s=i.queries;i.queries=zv(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function zv(){return new ys(t=>f0(t),Fh)}async function vD(t,e){const n=le(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new yD,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=dg(o,`Initialization of query '${Ls(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&fg(n)}async function wD(t,e){const n=le(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ED(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&fg(n)}function TD(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function fg(t){t.Ca.forEach(e=>{e.next()})}var Rp,Hv;(Hv=Rp||(Rp={})).Ma="default",Hv.Cache="cache";class ID{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Rp.Cache}}/**
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
 */class Y0{constructor(e){this.key=e}}class X0{constructor(e){this.key=e}}class SD{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ye(),this.mutatedKeys=ye(),this.eu=p0(e),this.tu=new oo(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Bv,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=jh(this.query,f)?f:null,A=!!m&&this.mutatedKeys.has(m.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let b=!1;m&&E?m.data.isEqual(E.data)?A!==P&&(r.track({type:3,doc:E}),b=!0):this.su(m,E)||(r.track({type:2,doc:E}),b=!0,(u&&this.eu(E,u)>0||c&&this.eu(E,c)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),b=!0):m&&!E&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(E?(o=o.add(E),s=P?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(E,A){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Rt:b})}};return P(E)-P(A)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Ro(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ye(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new X0(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new Y0(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ro.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const pg="SyncEngine";class AD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CD{constructor(e){this.key=e,this.hu=!1}}class RD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ys(l=>f0(l),Fh),this.Iu=new Map,this.Eu=new Set,this.du=new Ge(ne.comparator),this.Au=new Map,this.Ru=new ng,this.Vu={},this.mu=new Map,this.fu=Co.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function PD(t,e,n=!0){const r=rS(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await J0(r,e,n,!0),i}async function xD(t,e){const n=rS(t);await J0(n,e,!0,!1)}async function J0(t,e,n,r){const i=await qb(t.localStore,Jn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await kD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&H0(t.remoteStore,i),l}async function kD(t,e,n,r,i){t.pu=(f,m,E)=>async function(P,b,S,v){let C=b.view.ru(S);C.Cs&&(C=await Mv(P.localStore,b.query,!1).then(({documents:g})=>b.view.ru(g,C)));const L=v&&v.targetChanges.get(b.targetId),$=v&&v.targetMismatches.get(b.targetId)!=null,H=b.view.applyChanges(C,P.isPrimaryClient,L,$);return qv(P,b.targetId,H.au),H.snapshot}(t,f,m,E);const s=await Mv(t.localStore,e,!0),o=new SD(e,s.Qs),l=o.ru(s.documents),u=zl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);qv(t,n,c.au);const d=new AD(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function ND(t,e,n){const r=le(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Fh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ap(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ag(r.remoteStore,i.targetId),Pp(r,i.targetId)}).catch(Vo)):(Pp(r,i.targetId),await Ap(r.localStore,i.targetId,!0))}async function bD(t,e){const n=le(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ag(n.remoteStore,r.targetId))}async function DD(t,e,n){const r=jD(t);try{const i=await function(o,l){const u=le(o),c=Ce.now(),d=l.reduce((E,A)=>E.add(A.key),ye());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let A=Cr(),P=ye();return u.Ns.getEntries(E,d).next(b=>{A=b,A.forEach((S,v)=>{v.isValidDocument()||(P=P.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,A)).next(b=>{f=b;const S=[];for(const v of l){const C=qN(v,f.get(v.key).overlayedDocument);C!=null&&S.push(new Ni(v.key,C,r0(C.value.mapValue),$t.exists(!0)))}return u.mutationQueue.addMutationBatch(E,c,S,l)}).next(b=>{m=b;const S=b.applyToLocalDocumentSet(f,P);return u.documentOverlayCache.saveOverlays(E,b.batchId,S)})}).then(()=>({batchId:m.batchId,changes:g0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ge(ge)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Wl(r,i.changes),await qh(r.remoteStore)}catch(i){const s=dg(i,"Failed to persist write");n.reject(s)}}async function Z0(t,e){const n=le(t);try{const r=await zb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ve(o.hu,14607):i.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await Wl(n,r,e)}catch(r){await Vo(r)}}function Wv(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=le(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(c=!0)}),c&&fg(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OD(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ge(ne.comparator);o=o.insert(s,pt.newNoDocument(s,se.min()));const l=ye().add(s),u=new zh(se.min(),new Map,new Ge(ge),o,l);await Z0(r,u),r.du=r.du.remove(s),r.Au.delete(e),mg(r)}else await Ap(r.localStore,e,!1).then(()=>Pp(r,e,n)).catch(Vo)}async function LD(t,e){const n=le(t),r=e.batch.batchId;try{const i=await Bb(n.localStore,e);tS(n,r,null),eS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wl(n,i)}catch(i){await Vo(i)}}async function MD(t,e,n){const r=le(t);try{const i=await function(o,l){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(ve(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);tS(r,e,n),eS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wl(r,i)}catch(i){await Vo(i)}}function eS(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function tS(t,e,n){const r=le(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Pp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||nS(t,r)})}function nS(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ag(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),mg(t))}function qv(t,e,n){for(const r of n)r instanceof Y0?(t.Ru.addReference(r.key,e),VD(t,r)):r instanceof X0?(Q(pg,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||nS(t,r.key)):re(19791,{wu:r})}function VD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Q(pg,"New document in limbo: "+n),t.Eu.add(r),mg(t))}function mg(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(Ne.fromString(e)),r=t.fu.next();t.Au.set(r,new CD(n)),t.du=t.du.insert(n,r),H0(t.remoteStore,new ti(Jn(c0(n.path)),r,"TargetPurposeLimboResolution",Vh.ce))}}async function Wl(t,e,n){const r=le(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=ig.As(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=le(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,m=>j.forEach(m.Es,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>j.forEach(m.ds,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!Uo(f))throw f;Q(sg,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const E=d.Ms.get(m),A=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(A);d.Ms=d.Ms.insert(m,P)}}}(r.localStore,s))}async function UD(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){Q(pg,"User change. New user:",e.toKey());const r=await $0(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wl(n,r.Ls)}}function FD(t,e){const n=le(t),r=n.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let i=ye();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function rS(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Z0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OD.bind(null,e),e.Pu.H_=ED.bind(null,e.eventManager),e.Pu.yu=TD.bind(null,e.eventManager),e}function jD(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MD.bind(null,e),e}class rh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return $b(this.persistence,new Ub,e.initialUser,this.serializer)}Cu(e){return new j0(rg.mi,this.serializer)}Du(e){return new Kb}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rh.provider={build:()=>new rh};class $D extends rh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof th,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ib(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new j0(r=>th.mi(r,n),this.serializer)}}class xp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UD.bind(null,this.syncEngine),await gD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _D}()}createDatastore(e){const n=Hh(e.databaseInfo.databaseId),r=function(s){return new Zb(s)}(e.databaseInfo);return function(s,o,l,u){return new rD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new sD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Wv(this.syncEngine,n,0),function(){return Fv.v()?new Fv:new Qb}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new RD(i,s,o,l,u,c);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=le(i);Q(ds,"RemoteStore shutting down."),s.Ea.add(5),await Hl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}xp.provider={build:()=>new xp};/**
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
 */class BD{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class zD{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new K(F.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=le(i),l={documents:s.map(f=>eh(o.serializer,f))},u=await o.Ho("BatchGetDocuments",o.serializer.databaseId,Ne.emptyPath(),l,s.length),c=new Map;u.forEach(f=>{const m=ob(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());ve(!!m,55234,{key:f}),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Jm(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=ne.fromPath(r);this.mutations.push(new A0(i,this.precondition(i)))}),await async function(r,i){const s=le(r),o={writes:i.map(l=>O0(s.serializer,l))};await s.Go("Commit",s.serializer.databaseId,Ne.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw re(50498,{Gu:e.constructor.name});n=se.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new K(F.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(se.min())?$t.exists(!1):$t.updateTime(n):$t.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(se.min()))throw new K(F.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return $t.updateTime(n)}return $t.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class HD{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new og(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new zD(this.datastore),n=this.Hu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Yu(i)}))}).catch(r=>{this.Yu(r)})})}Hu(e){try{const n=this.updateFunction(e);return!$l(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!C0(n)}return!1}}/**
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
 */const Ci="FirestoreClient";class WD{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Dt.UNAUTHENTICATED,this.clientId=Wm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Q(Ci,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q(Ci,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ef(t,e){t.asyncQueue.verifyOperationInProgress(),Q(Ci,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qD(t);Q(Ci,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$v(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$v(e.remoteStore,i)),t._onlineComponents=e}async function qD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q(Ci,"Using user provided OfflineComponentProvider");try{await ef(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;To("Error using user provided cache. Falling back to memory cache: "+n),await ef(t,new rh)}}else Q(Ci,"Using default OfflineComponentProvider"),await ef(t,new $D(void 0));return t._offlineComponents}async function gg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q(Ci,"Using user provided OnlineComponentProvider"),await Gv(t,t._uninitializedComponentsProvider._online)):(Q(Ci,"Using default OnlineComponentProvider"),await Gv(t,new xp))),t._onlineComponents}function GD(t){return gg(t).then(e=>e.syncEngine)}function iS(t){return gg(t).then(e=>e.datastore)}async function KD(t){const e=await gg(t),n=e.eventManager;return n.onListen=PD.bind(null,e.syncEngine),n.onUnlisten=ND.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bD.bind(null,e.syncEngine),n}function QD(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new BD({next:m=>{d.Nu(),o.enqueueAndForget(()=>wD(s,f)),m.fromCache&&u.source==="server"?c.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new ID(l,d,{includeMetadataChanges:!0,qa:!0});return vD(s,f)}(await KD(t),t.asyncQueue,e,n,r)),r.promise}function YD(t,e,n){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await iS(t);r.resolve(async function(o,l,u){var P;const c=le(o),{request:d,gt:f,parent:m}=cb(c.serializer,NN(l),u);c.connection.$o||delete d.parent;const E=(await c.Ho("RunAggregationQuery",c.serializer.databaseId,m,d,1)).filter(b=>!!b.result);ve(E.length===1,64727);const A=(P=E[0].result)==null?void 0:P.aggregateFields;return Object.keys(A).reduce((b,S)=>(b[f[S]]=A[S],b),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
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
 */function sS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Kv=new Map;/**
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
 */const oS="firestore.googleapis.com",Qv=!0;class Yv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=oS,this.ssl=Qv}else this.host=e.host,this.ssl=e.ssl??Qv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=F0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Eb)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Kk;switch(r.type){case"firstParty":return new Jk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kv.get(n);r&&(Q("ComponentProvider","Removing Datastore"),Kv.delete(n),r.terminate())}(this),Promise.resolve()}}function XD(t,e,n,r={}){var c;t=wi(t,Gh);const i=Oo(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(xI(`https://${l}`),kI("Firestore",!0)),s.host!==oS&&s.host!==l&&To("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!us(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Dt.MOCK_USER;else{d=Ex(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Dt(m)}t._authCredentials=new Qk(new WI(d,f))}}/**
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
 */class bi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bi(this.firestore,e,this._query)}}class st{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(jl(n,st._jsonSchema))return new st(e,r||null,new ne(Ne.fromString(n.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:it("string",st._jsonSchemaVersion),referencePath:it("string")};class mi extends bi{constructor(e,n,r){super(e,n,c0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new ne(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function ao(t,e,...n){if(t=gt(t),qI("collection","path",e),t instanceof Gh){const r=Ne.fromString(e,...n);return uv(r),new mi(t,null,r)}{if(!(t instanceof st||t instanceof mi))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return uv(r),new mi(t.firestore,null,r)}}function yg(t,e,...n){if(t=gt(t),arguments.length===1&&(e=Wm.newId()),qI("doc","path",e),t instanceof Gh){const r=Ne.fromString(e,...n);return lv(r),new st(t,null,new ne(r))}{if(!(t instanceof st||t instanceof mi))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return lv(r),new st(t.firestore,t instanceof mi?t.converter:null,new ne(r))}}/**
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
 */const Xv="AsyncQueue";class Jv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new og(this,"async_queue_retry"),this._c=()=>{const r=Zd();r&&Q(Xv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Zd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Zd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Xn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Uo(e))throw e;Q(Xv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Ar("INTERNAL UNHANDLED ERROR: ",Zv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=hg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&re(47125,{Pc:Zv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Zv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class $o extends Gh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Jv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jv(e),this._firestoreClient=void 0,await e}}}function JD(t,e){const n=typeof t=="object"?t:LI(),r=typeof t=="string"?t:Kc,i=zm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vx("firestore");s&&XD(i,...s)}return i}function Kh(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ZD(t),t._firestoreClient}function ZD(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new gN(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,sS(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new WD(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class e2{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class t2{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(Rt.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new sn(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(jl(e,sn._jsonSchema))return sn.fromBase64String(e.bytes)}}sn._jsonSchemaVersion="firestore/bytes/1.0",sn._jsonSchema={type:it("string",sn._jsonSchemaVersion),bytes:it("string")};/**
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
 */class ql{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qh{constructor(e){this._methodName=e}}/**
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
 */class Zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zn._jsonSchemaVersion}}static fromJSON(e){if(jl(e,Zn._jsonSchema))return new Zn(e.latitude,e.longitude)}}Zn._jsonSchemaVersion="firestore/geoPoint/1.0",Zn._jsonSchema={type:it("string",Zn._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
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
 */class er{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(jl(e,er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new er(e.vectorValues);throw new K(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}er._jsonSchemaVersion="firestore/vectorValue/1.0",er._jsonSchema={type:it("string",er._jsonSchemaVersion),vectorValues:it("object")};/**
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
 */const n2=/^__.*__$/;class r2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bl(e,this.data,n,this.fieldTransforms)}}class aS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ni(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function lS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ac:t})}}class _g{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new _g({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return ih(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(lS(this.Ac)&&n2.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class i2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hh(e)}Cc(e,n,r,i=!1){return new _g({Ac:e,methodName:n,Dc:r,path:St.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yh(t){const e=t._freezeSettings(),n=Hh(t._databaseId);return new i2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uS(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);wg("Data must be an object, but it was:",o,r);const l=dS(r,o);let u,c;if(s.merge)u=new an(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=kp(e,f,n);if(!o.contains(m))throw new K(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);pS(d,m)||d.push(m)}u=new an(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new r2(new jt(l),u,c)}class Xh extends Qh{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xh}}class vg extends Qh{_toFieldTransform(e){return new BN(e.path,new Il)}isEqual(e){return e instanceof vg}}function cS(t,e,n,r){const i=t.Cc(1,e,n);wg("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();ki(r,(u,c)=>{const d=Eg(e,u,n);c=gt(c);const f=i.yc(d);if(c instanceof Xh)s.push(d);else{const m=Gl(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new an(s);return new aS(o,l,i.fieldTransforms)}function hS(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[kp(e,r,n)],u=[i];if(s.length%2!=0)throw new K(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(kp(e,s[m])),u.push(s[m+1]);const c=[],d=jt.empty();for(let m=l.length-1;m>=0;--m)if(!pS(c,l[m])){const E=l[m];let A=u[m];A=gt(A);const P=o.yc(E);if(A instanceof Xh)c.push(E);else{const b=Gl(A,P);b!=null&&(c.push(E),d.set(E,b))}}const f=new an(c);return new aS(d,f,o.fieldTransforms)}function s2(t,e,n,r=!1){return Gl(n,t.Cc(r?4:3,e))}function Gl(t,e){if(fS(t=gt(t)))return wg("Unsupported field value:",e,t),dS(t,e);if(t instanceof Qh)return function(r,i){if(!lS(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Gl(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=gt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return FN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ce.fromDate(r);return{timestampValue:Zc(i.serializer,s)}}if(r instanceof Ce){const s=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zc(i.serializer,s)}}if(r instanceof Zn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sn)return{bytesValue:k0(i.serializer,r._byteString)};if(r instanceof st){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:tg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof er)return function(o,l){return{mapValue:{fields:{[t0]:{stringValue:n0},[Qc]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return Xm(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Mh(r)}`)}(t,e)}function dS(t,e){const n={};return QI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=Gl(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function fS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof Zn||t instanceof sn||t instanceof st||t instanceof Qh||t instanceof er)}function wg(t,e,n){if(!fS(n)||!GI(n)){const r=Mh(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function kp(t,e,n){if((e=gt(e))instanceof ql)return e._internalPath;if(typeof e=="string")return Eg(t,e);throw ih("Field path arguments must be of type string or ",t,!1,void 0,n)}const o2=new RegExp("[~\\*/\\[\\]]");function Eg(t,e,n){if(e.search(o2)>=0)throw ih(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ql(...e.split("."))._internalPath}catch{throw ih(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ih(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,l+t+u)}function pS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class sh{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new a2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class a2 extends sh{data(){return super.data()}}function Jh(t,e){return typeof e=="string"?Eg(t,e):e instanceof ql?e._internalPath:e._delegate._internalPath}/**
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
 */function l2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tg{}class Ig extends Tg{}function qi(t,e,...n){let r=[];e instanceof Tg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Sg).length,l=s.filter(u=>u instanceof Zh).length;if(o>1||o>0&&l>0)throw new K(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Zh extends Ig{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Zh(e,n,r)}_apply(e){const n=this._parse(e);return mS(e._query,n),new bi(e.firestore,e.converter,Ep(e._query,n))}_parse(e){const n=Yh(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){tw(f,d);const A=[];for(const P of f)A.push(ew(u,s,P));m={arrayValue:{values:A}}}else m=ew(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||tw(f,d),m=s2(l,o,f,d==="in"||d==="not-in");return rt.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Gn(t,e,n){const r=e,i=Jh("where",t);return Zh._create(i,r,n)}class Sg extends Tg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:On.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)mS(o,u),o=Ep(o,u)}(e._query,n),new bi(e.firestore,e.converter,Ep(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ag extends Ig{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ag(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(F.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tl(s,o)}(e._query,this._field,this._direction);return new bi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Fo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function u2(t,e="asc"){const n=e,r=Jh("orderBy",t);return Ag._create(r,n)}class Cg extends Ig{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Cg(e,n,r)}_apply(e){return new bi(e.firestore,e.converter,Xc(e._query,this._limit,this._limitType))}}function c2(t){return Cg._create("limit",t,"F")}function ew(t,e,n){if(typeof(n=gt(n))=="string"){if(n==="")throw new K(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!h0(e)&&n.indexOf("/")!==-1)throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!ne.isDocumentKey(r))throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yv(t,new ne(r))}if(n instanceof st)return yv(t,n._key);throw new K(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mh(n)}.`)}function tw(t,e){if(!Array.isArray(t)||t.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function mS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gS{convertValue(e,n="none"){switch(Si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ki(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Qc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Xe(o.doubleValue));return new er(n)}convertGeoPoint(e){return new Zn(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Uh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vl(e));default:return null}}convertTimestamp(e){const n=Ti(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);ve(U0(r),9688,{name:e});const i=new wl(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||Ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function yS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class h2 extends gS{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function d2(){return new e2("count")}class ka{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ts extends sh{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ts._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ts._jsonSchemaVersion="firestore/documentSnapshot/1.0",ts._jsonSchema={type:it("string",ts._jsonSchemaVersion),bundleSource:it("string","DocumentSnapshot"),bundleName:it("string"),bundle:it("string")};class uc extends ts{data(e={}){return super.data(e)}}class lo{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ka(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new uc(this._firestore,this._userDataWriter,r.key,r,new ka(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new uc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ka(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new uc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ka(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:f2(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=lo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function f2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:t})}}lo._jsonSchemaVersion="firestore/querySnapshot/1.0",lo._jsonSchema={type:it("string",lo._jsonSchemaVersion),bundleSource:it("string","QuerySnapshot"),bundleName:it("string"),bundle:it("string")};class Rg extends gS{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,n)}}function ed(t){t=wi(t,bi);const e=wi(t.firestore,$o),n=Kh(e),r=new Rg(e);return l2(t._query),QD(n,t._query).then(i=>new lo(e,r,t,i))}function p2(t,e,n,...r){t=wi(t,st);const i=wi(t.firestore,$o),s=Yh(i);let o;return o=typeof(e=gt(e))=="string"||e instanceof ql?hS(s,"updateDoc",t._key,e,n,r):cS(s,"updateDoc",t._key,e),_S(i,[o.toMutation(t._key,$t.exists(!0))])}function N4(t,e){const n=wi(t.firestore,$o),r=yg(t),i=yS(t.converter,e);return _S(n,[uS(Yh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function _S(t,e){return function(r,i){const s=new Xn;return r.asyncQueue.enqueueAndForget(async()=>DD(await GD(r),i,s)),s.promise}(Kh(t),e)}function m2(t){return g2(t,{count:d2()})}function g2(t,e){const n=wi(t.firestore,$o),r=Kh(n),i=pN(e,(s,o)=>new QN(o,s.aggregateType,s._internalFieldPath));return YD(r,t._query,i).then(s=>function(l,u,c){const d=new Rg(l);return new t2(u,d,c)}(n,t,s))}/**
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
 */const y2={maxAttempts:5};function Na(t,e){if((t=gt(t)).firestore!==e)throw new K(F.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class _2{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Yh(e)}get(e){const n=Na(e,this._firestore),r=new h2(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return re(24041);const s=i[0];if(s.isFoundDocument())return new sh(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new sh(this._firestore,r,n._key,null,n.converter);throw re(18433,{doc:s})})}set(e,n,r){const i=Na(e,this._firestore),s=yS(i.converter,n,r),o=uS(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Na(e,this._firestore);let o;return o=typeof(n=gt(n))=="string"||n instanceof ql?hS(this._dataReader,"Transaction.update",s._key,n,r,i):cS(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Na(e,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class v2 extends _2{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Na(e,this._firestore),r=new Rg(this._firestore);return super.get(e).then(i=>new ts(this._firestore,r,n._key,i._document,new ka(!1,!1),n.converter))}}function w2(t,e,n){t=wi(t,$o);const r={...y2,...n};return function(s){if(s.maxAttempts<1)throw new K(F.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new Xn;return s.asyncQueue.enqueueAndForget(async()=>{const c=await iS(s);new HD(s.asyncQueue,c,l,o,u).ju()}),u.promise}(Kh(t),i=>e(new v2(t,i)),r)}function vS(){return new vg("serverTimestamp")}(function(e,n=!0){(function(i){Mo=i})(Lo),Eo(new cs("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new $o(new Yk(r.getProvider("auth-internal")),new Zk(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wl(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),fi(iv,sv,e),fi(iv,sv,"esm2020")})();var E2="firebase",T2="12.1.0";/**
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
 */fi(E2,T2,"app");function wS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I2=wS,ES=new Ul("auth","Firebase",wS());/**
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
 */const oh=new $m("@firebase/auth");function S2(t,...e){oh.logLevel<=me.WARN&&oh.warn(`Auth (${Lo}): ${t}`,...e)}function cc(t,...e){oh.logLevel<=me.ERROR&&oh.error(`Auth (${Lo}): ${t}`,...e)}/**
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
 */function Ln(t,...e){throw Pg(t,...e)}function tr(t,...e){return Pg(t,...e)}function TS(t,e,n){const r={...I2(),[e]:n};return new Ul("auth","Firebase",r).create(e,{appName:t.name})}function gi(t){return TS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ES.create(t,...e)}function oe(t,e,...n){if(!t)throw Pg(e,...n)}function mr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cc(e),new Error(e)}function Rr(t,e){t||mr(e)}/**
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
 */function Np(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function A2(){return nw()==="http:"||nw()==="https:"}function nw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function C2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A2()||Rx()||"connection"in navigator)?navigator.onLine:!0}function R2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */let Kl=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rr(n>e,"Short delay should be less than long delay!"),this.isMobile=Sx()||Px()}get(){return C2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
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
 */function xg(t,e){Rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */let IS=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
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
 */const P2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const x2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],k2=new Kl(3e4,6e4);function vs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Di(t,e,n,r,i={}){return SS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Fl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return Cx()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Oo(t.emulatorConfig.host)&&(c.credentials="include"),IS.fetch()(await AS(t,t.config.apiHost,n,l),c)})}async function SS(t,e,n){t._canInitEmulator=!1;const r={...P2,...e};try{const i=new b2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Fu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw TS(t,d,c);Ln(t,d)}}catch(i){if(i instanceof gs)throw i;Ln(t,"network-request-failed",{message:String(i)})}}async function td(t,e,n,r,i={}){const s=await Di(t,e,n,r,i);return"mfaPendingCredential"in s&&Ln(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function AS(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?xg(t.config,i):`${t.config.apiScheme}://${i}`;return x2.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function N2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let b2=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tr(this.auth,"network-request-failed")),k2.get())})}};function Fu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tr(t,e,r);return i.customData._tokenResponse=n,i}function rw(t){return t!==void 0&&t.enterprise!==void 0}class D2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return N2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function O2(t,e){return Di(t,"GET","/v2/recaptchaConfig",vs(t,e))}/**
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
 */async function L2(t,e){return Di(t,"POST","/v1/accounts:delete",e)}async function ah(t,e){return Di(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ka(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M2(t,e=!1){const n=gt(t),r=await n.getIdToken(e),i=kg(r);oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ka(tf(i.auth_time)),issuedAtTime:Ka(tf(i.iat)),expirationTime:Ka(tf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tf(t){return Number(t)*1e3}function kg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=AI(n);return i?JSON.parse(i):(cc("Failed to decode base64 JWT payload"),null)}catch(i){return cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function iw(t){const e=kg(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Cl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gs&&V2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function V2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */let U2=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
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
 */let bp=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ka(this.lastLoginAt),this.creationTime=Ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function lh(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Cl(t,ah(e,{idToken:n}));oe(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?CS(i.providerUserInfo):[],o=j2(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new bp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function F2(t){const e=gt(t);await lh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CS(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function $2(t,e){const n=await SS(t,{},async()=>{const r=Fl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await AS(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Oo(t.emulatorConfig.host)&&(u.credentials="include"),IS.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function B2(t,e){return Di(t,"POST","/v2/accounts:revokeToken",vs(t,e))}/**
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
 */let nf=class Dp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=iw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Dp;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Dp,this.toJSON())}_performRefresh(){return mr("not implemented")}};/**
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
 */function jr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let Ys=class ba{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new U2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Cl(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return M2(this,e)}reload(){return F2(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ba({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await lh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(gi(this.auth));const e=await this.getIdToken();return await Cl(this,L2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:E,providerData:A,stsTokenManager:P}=n;oe(f&&P,e,"internal-error");const b=nf.fromJSON(this.name,P);oe(typeof f=="string",e,"internal-error"),jr(r,e.name),jr(i,e.name),oe(typeof m=="boolean",e,"internal-error"),oe(typeof E=="boolean",e,"internal-error"),jr(s,e.name),jr(o,e.name),jr(l,e.name),jr(u,e.name),jr(c,e.name),jr(d,e.name);const S=new ba({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:d});return A&&Array.isArray(A)&&(S.providerData=A.map(v=>({...v}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new nf;i.updateFromServerResponse(n);const s=new ba({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await lh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];oe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?CS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new nf;l.updateFromIdToken(r);const u=new ba({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}};/**
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
 */const sw=new Map;function gr(t){Rr(t instanceof Function,"Expected a class definition");let e=sw.get(t);return e?(Rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sw.set(t,e),e)}/**
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
 */let RS=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};RS.type="NONE";const ow=RS;/**
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
 */function hc(t,e,n){return`firebase:${t}:${e}:${n}`}let aw=class dc{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hc(this.userKey,i.apiKey,s),this.fullPersistenceKey=hc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ah(this.auth,{idToken:e}).catch(()=>{});return n?Ys._fromGetAccountInfoResponse(this.auth,n,e):null}return Ys._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new dc(gr(ow),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||gr(ow);const o=hc(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await ah(e,{idToken:d}).catch(()=>{});if(!m)break;f=await Ys._fromGetAccountInfoResponse(e,m,d)}else f=Ys._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new dc(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new dc(s,e,r))}};/**
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
 */function lw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(PS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(DS(e))return"Blackberry";if(OS(e))return"Webos";if(xS(e))return"Safari";if((e.includes("chrome/")||kS(e))&&!e.includes("edge/"))return"Chrome";if(bS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function PS(t=Mt()){return/firefox\//i.test(t)}function xS(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kS(t=Mt()){return/crios\//i.test(t)}function NS(t=Mt()){return/iemobile/i.test(t)}function bS(t=Mt()){return/android/i.test(t)}function DS(t=Mt()){return/blackberry/i.test(t)}function OS(t=Mt()){return/webos/i.test(t)}function Ng(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function z2(t=Mt()){var e;return Ng(t)&&!!((e=window.navigator)!=null&&e.standalone)}function H2(){return xx()&&document.documentMode===10}function LS(t=Mt()){return Ng(t)||bS(t)||OS(t)||DS(t)||/windows phone/i.test(t)||NS(t)}/**
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
 */function MS(t,e=[]){let n;switch(t){case"Browser":n=lw(Mt());break;case"Worker":n=`${lw(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lo}/${r}`}/**
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
 */let W2=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function q2(t,e={}){return Di(t,"GET","/v2/passwordPolicy",vs(t,e))}/**
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
 */const G2=6;let K2=class{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??G2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
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
 */let Q2=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uw(this),this.idTokenSubscription=new uw(this),this.beforeStateQueue=new W2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ES,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gr(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await aw.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ah(this,{idToken:e}),r=await Ys._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(kn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(gi(this));const n=e?gt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(gi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(gi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await q2(this),n=new K2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ul("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await B2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gr(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await aw.create(this,[gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=MS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&S2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}};function Bo(t){return gt(t)}let uw=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Vx(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
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
 */let nd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Y2(t){nd=t}function VS(t){return nd.loadJS(t)}function X2(){return nd.recaptchaEnterpriseScript}function J2(){return nd.gapiScript}function Z2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class eO{constructor(){this.enterprise=new tO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class tO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const nO="recaptcha-enterprise",US="NO_RECAPTCHA";class rO{constructor(e){this.type=nO,this.auth=Bo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{O2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new D2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;rw(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(US)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eO().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&rw(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=X2();u.length!==0&&(u+=l),VS(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function cw(t,e,n,r=!1,i=!1){const s=new rO(t);let o;if(i)o=US;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function hw(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await cw(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await cw(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function iO(t,e){const n=zm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(us(s,e??{}))return i;Ln(i,"already-initialized")}return n.initialize({options:e})}function sO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oO(t,e,n){const r=Bo(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=FS(e),{host:o,port:l}=aO(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(us(c,r.config.emulator)&&us(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Oo(o)?(xI(`${s}//${o}${u}`),kI("Auth",!0)):lO()}function FS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aO(t){const e=FS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:dw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:dw(o)}}}function dw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class bg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mr("not implemented")}_getIdTokenResponse(e){return mr("not implemented")}_linkToIdToken(e,n){return mr("not implemented")}_getReauthenticationResolver(e){return mr("not implemented")}}async function uO(t,e){return Di(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function cO(t,e){return td(t,"POST","/v1/accounts:signInWithPassword",vs(t,e))}/**
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
 */async function hO(t,e){return td(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}async function dO(t,e){return td(t,"POST","/v1/accounts:signInWithEmailLink",vs(t,e))}/**
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
 */class Rl extends bg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Rl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Rl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hw(e,n,"signInWithPassword",cO);case"emailLink":return hO(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hw(e,r,"signUpPassword",uO);case"emailLink":return dO(e,{idToken:n,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function uo(t,e){return td(t,"POST","/v1/accounts:signInWithIdp",vs(t,e))}/**
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
 */const fO="http://localhost";class fs extends bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new fs(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return uo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,uo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,uo(e,n)}buildRequest(){const e={requestUri:fO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fl(n)}return e}}/**
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
 */function pO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mO(t){const e=Aa(Ca(t)).link,n=e?Aa(Ca(e)).deep_link_id:null,r=Aa(Ca(t)).deep_link_id;return(r?Aa(Ca(r)).link:null)||r||n||e||t}class Dg{constructor(e){const n=Aa(Ca(e)),r=n.apiKey??null,i=n.oobCode??null,s=pO(n.mode??null);oe(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=mO(e);try{return new Dg(n)}catch{return null}}}/**
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
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,n){return Rl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dg.parseLink(n);return oe(r,"argument-error"),Rl._fromEmailAndCode(e,r.code,r.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ql extends jS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends Ql{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class Qr extends Ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qr.credential(n,r)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
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
 */class Yr extends Ql{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
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
 */class Xr extends Ql{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
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
 */class Po{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ys._fromIdTokenResponse(e,r,i),o=fw(r);return new Po({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=fw(r);return new Po({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function fw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class uh extends gs{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new uh(e,n,r,i)}}function $S(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(t,s,e,r):s})}async function gO(t,e,n=!1){const r=await Cl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Po._forOperation(t,"link",r)}/**
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
 */async function yO(t,e,n=!1){const{auth:r}=t;if(kn(r.app))return Promise.reject(gi(r));const i="reauthenticate";try{const s=await Cl(t,$S(r,i,e,t),n);oe(s.idToken,r,"internal-error");const o=kg(s.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),Po._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ln(r,"user-mismatch"),s}}/**
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
 */async function BS(t,e,n=!1){if(kn(t.app))return Promise.reject(gi(t));const r="signIn",i=await $S(t,r,e),s=await Po._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function _O(t,e){return BS(Bo(t),e)}/**
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
 */async function vO(t){const e=Bo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function wO(t,e,n){return kn(t.app)?Promise.reject(gi(t)):_O(gt(t),zo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vO(t),r})}function EO(t,e,n,r){return gt(t).onIdTokenChanged(e,n,r)}function TO(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}const ch="__sak";/**
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
 */class zS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ch,"1"),this.storage.removeItem(ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IO=1e3,SO=10;class HS extends zS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=LS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);H2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,SO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HS.type="LOCAL";const AO=HS;/**
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
 */class WS extends zS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}WS.type="SESSION";const qS=WS;/**
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
 */function CO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new rd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await CO(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rd.receivers=[];/**
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
 */function Og(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class RO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Og("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nr(){return window}function PO(t){nr().location.href=t}/**
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
 */function GS(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function xO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function NO(){return GS()?self:null}/**
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
 */const KS="firebaseLocalStorageDb",bO=1,hh="firebaseLocalStorage",QS="fbase_key";class Yl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function id(t,e){return t.transaction([hh],e?"readwrite":"readonly").objectStore(hh)}function DO(){const t=indexedDB.deleteDatabase(KS);return new Yl(t).toPromise()}function Op(){const t=indexedDB.open(KS,bO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(hh,{keyPath:QS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(hh)?e(r):(r.close(),await DO(),e(await Op()))})})}async function pw(t,e,n){const r=id(t,!0).put({[QS]:e,value:n});return new Yl(r).toPromise()}async function OO(t,e){const n=id(t,!1).get(e),r=await new Yl(n).toPromise();return r===void 0?null:r.value}function mw(t,e){const n=id(t,!0).delete(e);return new Yl(n).toPromise()}const LO=800,MO=3;class YS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Op(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return GS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rd._getInstance(NO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await xO(),!this.activeServiceWorker)return;this.sender=new RO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Op();return await pw(e,ch,"1"),await mw(e,ch),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=id(i,!1).getAll();return new Yl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}YS.type="LOCAL";const VO=YS;new Kl(3e4,6e4);/**
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
 */function UO(t,e){return e?gr(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lg extends bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return uo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return uo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function FO(t){return BS(t.auth,new Lg(t),t.bypassAuthState)}function jO(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),yO(n,new Lg(t),t.bypassAuthState)}async function $O(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),gO(n,new Lg(t),t.bypassAuthState)}/**
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
 */class XS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return FO;case"linkViaPopup":case"linkViaRedirect":return $O;case"reauthViaPopup":case"reauthViaRedirect":return jO;default:Ln(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const BO=new Kl(2e3,1e4);class Xs extends XS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xs.currentPopupAction&&Xs.currentPopupAction.cancel(),Xs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=Og();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BO.get())};e()}}Xs.currentPopupAction=null;/**
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
 */const zO="pendingRedirect",fc=new Map;class HO extends XS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fc.get(this.auth._key());if(!e){try{const r=await WO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fc.set(this.auth._key(),e)}return this.bypassAuthState||fc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WO(t,e){const n=KO(e),r=GO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qO(t,e){fc.set(t._key(),e)}function GO(t){return gr(t._redirectPersistence)}function KO(t){return hc(zO,t.config.apiKey,t.name)}async function QO(t,e,n=!1){if(kn(t.app))return Promise.reject(gi(t));const r=Bo(t),i=UO(r,e),o=await new HO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const YO=10*60*1e3;class XO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!JS(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(tr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YO&&this.cachedEventUids.clear(),this.cachedEventUids.has(gw(e))}saveEventToCache(e){this.cachedEventUids.add(gw(e)),this.lastProcessedEventTime=Date.now()}}function gw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function JS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JS(t);default:return!1}}/**
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
 */async function ZO(t,e={}){return Di(t,"GET","/v1/projects",e)}/**
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
 */const eL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tL=/^https?/;async function nL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZO(t);for(const n of e)try{if(rL(n))return}catch{}Ln(t,"unauthorized-domain")}function rL(t){const e=Np(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tL.test(n))return!1;if(eL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const iL=new Kl(3e4,6e4);function yw(){const t=nr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sL(t){return new Promise((e,n)=>{var i,s,o;function r(){yw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yw(),n(tr(t,"network-request-failed"))},timeout:iL.get()})}if((s=(i=nr().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=nr().gapi)!=null&&o.load)r();else{const l=Z2("iframefcb");return nr()[l]=()=>{gapi.load?r():n(tr(t,"network-request-failed"))},VS(`${J2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw pc=null,e})}let pc=null;function oL(t){return pc=pc||sL(t),pc}/**
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
 */const aL=new Kl(5e3,15e3),lL="__/auth/iframe",uL="emulator/auth/iframe",cL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dL(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xg(e,uL):`https://${t.config.authDomain}/${lL}`,r={apiKey:e.apiKey,appName:t.name,v:Lo},i=hL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fl(r).slice(1)}`}async function fL(t){const e=await oL(t),n=nr().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:dL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=tr(t,"network-request-failed"),l=nr().setTimeout(()=>{s(o)},aL.get());function u(){nr().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const pL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mL=500,gL=600,yL="_blank",_L="http://localhost";class _w{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vL(t,e,n,r=mL,i=gL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...pL,width:r.toString(),height:i.toString(),top:s,left:o},c=Mt().toLowerCase();n&&(l=kS(c)?yL:n),PS(c)&&(e=e||_L,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[E,A])=>`${m}${E}=${A},`,"");if(z2(c)&&l!=="_self")return wL(e||"",l),new _w(null);const f=window.open(e||"",l,d);oe(f,t,"popup-blocked");try{f.focus()}catch{}return new _w(f)}function wL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const EL="__/auth/handler",TL="emulator/auth/handler",IL=encodeURIComponent("fac");async function vw(t,e,n,r,i,s){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lo,eventId:i};if(e instanceof jS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Ql){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${IL}=${encodeURIComponent(u)}`:"";return`${SL(t)}?${Fl(l).slice(1)}${c}`}function SL({config:t}){return t.emulator?xg(t,TL):`https://${t.authDomain}/${EL}`}/**
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
 */const rf="webStorageSupport";class AL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qS,this._completeRedirectFn=QO,this._overrideRedirectResult=qO}async _openPopup(e,n,r,i){var o;Rr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await vw(e,n,r,Np(),i);return vL(e,s,Og())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await vw(e,n,r,Np(),i);return PO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fL(e),r=new XO(e);return n.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rf,{type:rf},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[rf];s!==void 0&&n(!!s),Ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return LS()||xS()||Ng()}}const CL=AL;var ww="@firebase/auth",Ew="1.11.0";/**
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
 */let RL=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
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
 */function PL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xL(t){Eo(new cs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:MS(t)},c=new Q2(r,i,s,u);return sO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Eo(new cs("auth-internal",e=>{const n=Bo(e.getProvider("auth").getImmediate());return(r=>new RL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fi(ww,Ew,PL(t)),fi(ww,Ew,"esm2020")}/**
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
 */const kL=5*60,NL=PI("authIdTokenMaxAge")||kL;let Tw=null;const bL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NL)return;const i=n==null?void 0:n.token;Tw!==i&&(Tw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function DL(t=LI()){const e=zm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iO(t,{popupRedirectResolver:CL,persistence:[VO,AO,qS]}),r=PI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=bL(s.toString());TO(n,o,()=>o(n.currentUser)),EO(n,l=>o(l))}}const i=CI("auth");return i&&oO(n,`http://${i}`),n}function OL(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Y2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=tr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xL("Browser");const LL={apiKey:"AIzaSyCWfqdRcuoy8opgUwyWAUbc6iVmtw1wSfE",authDomain:"limlim-32e6a.firebaseapp.com",projectId:"limlim-32e6a",storageBucket:void 0,messagingSenderId:void 0,appId:"1:525168702365:web:79f3fe9d2ea7a77bd0f574"},ZS=OI(LL),Mg=DL(ZS),ni=JD(ZS),ML=9*60+30,VL=21*60+30,eA=90,tA=90;function nA(t,e){const[n,r,i]=t.split("-").map(Number),[s,o]=e.split(":").map(Number);return new Date(n,r-1,i,s,o,0,0)}function UL(t){const[e,n]=t.split(":").map(Number);return e*60+n}function Iw(t){const e=UL(t);return e>=ML&&e<=VL}function FL(t){return Number(t.split(":")[1]||0)%30===0}function jL(t,e){return new Date(t.getTime()+e*60*1e3)}function $L(t){if(!t||typeof t.duration!="string")return 60;const e=t.duration.toLowerCase().trim().replace(/\s+/g," "),n=e.match(/\d+/g);if(!n||n.length===0)return 60;const r=Number(n[0]);return e.includes("hour")?r*60:r}async function BL(t){try{await fetch("/.netlify/functions/send-confirmation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({booking:t})})}catch{}}async function rA({date:t,time:e,pkg:n}){try{if(!t||!e)return{available:!1,reason:"Missing date/time"};if(!FL(e))return{available:!1,reason:"Please choose a :00 or :30 time."};if(!Iw(e))return{available:!1,reason:"Outside hours (09:30–21:30)"};const r=nA(t,e),i=$L(n),s=jL(r,i),o=`${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}`;if(!Iw(o))return{available:!1,reason:"Outside hours (09:30–21:30)"};const l=new Date(r.getTime()-eA*60*1e3),u=new Date(r.getTime()+tA*60*1e3),c=qi(ao(ni,"bookings"),Gn("startAt",">=",Ce.fromDate(l)),Gn("startAt","<=",Ce.fromDate(u)),Gn("status","in",["pending","confirmed"])),f=!(await ed(c)).empty;return{available:!f,reason:f?"Conflicts with another session":null}}catch(r){return console.error("checkAvailability error:",r),{available:!1,reason:"Availability check failed"}}}async function zL({pkg:t,date:e,time:n,details:r}){try{const i=await rA({date:e,time:n,pkg:t});if(!i.available)return{ok:!1,error:i.reason||"Not available"};if(!t||typeof t.id!="string"||typeof t.name!="string"||typeof t.price!="number"||typeof t.duration!="string")return{ok:!1,error:"Invalid package format"};if(!r||typeof r.name!="string"||typeof r.email!="string"||typeof r.phone!="string"||typeof r.location!="string")return{ok:!1,error:"Missing contact details"};const s=nA(e,n),o=Math.random().toString(36).slice(2,8).toUpperCase(),l=ao(ni,"bookings"),u=yg(l);return await w2(ni,async c=>{const d=new Date(s.getTime()-eA*60*1e3),f=new Date(s.getTime()+tA*60*1e3),m=qi(l,Gn("startAt",">=",Ce.fromDate(d)),Gn("startAt","<=",Ce.fromDate(f)),Gn("status","in",["pending","confirmed"]));if(!(await ed(m)).empty)throw new Error("Conflicts with another session");c.set(u,{reference:o,status:"pending",package:{id:t.id,name:t.name,price:t.price,duration:t.duration},date:e,time:n,startAt:Ce.fromDate(s),details:{name:r.name,email:r.email,phone:r.phone,location:r.location},createdAt:vS()})}),BL({id:u.id,reference:o,status:"pending",package:{...t},details:{...r},date:e,time:n}),{ok:!0,id:u.id,reference:o}}catch(i){console.error("submitBooking error:",i);const s=(i==null?void 0:i.message)||"Failed to submit booking";return s.includes("Conflicts with another session")?{ok:!1,error:"Conflicts with another session"}:{ok:!1,error:s}}}const sf=[{id:"portrait",name:"Portrait",price:250,duration:"60–90 min",desc:"Clean, crisp portraits in studio or on location.",includes:["Up to 2 outfits","15 edited photos","Online gallery"]},{id:"event",name:"Event",price:700,duration:"3 hours",desc:"Coverage for birthdays, engagements, and more.",includes:["Candid + posed","Next-day sneak peek","Highlight reel add-on"]},{id:"wedding",name:"Wedding",price:2200,duration:"8 hours",desc:"Story-driven wedding coverage for your day.",includes:["Timeline planning","Second shooter (optional)","Album-ready edits"]}],HL=9*60+30,WL=21*60+30;function qL(){const t=[];for(let e=HL;e<=WL;e+=30){const n=String(Math.floor(e/60)).padStart(2,"0"),r=String(e%60).padStart(2,"0");t.push(`${n}:${r}`)}return t}function Sw(t){const[e,n]=t.split(":").map(Number),r=e>=12?"PM":"AM";return`${(e+11)%12+1}:${String(n).padStart(2,"0")} ${r}`}const GL=qL();function KL(){const[t,e]=U.useState(0),[n,r]=U.useState(sf[0]),[i,s]=U.useState(""),[o,l]=U.useState(""),[u,c]=U.useState(!1),[d,f]=U.useState(null),[m,E]=U.useState(""),[A,P]=U.useState({name:"",email:"",phone:"",location:"Studio"}),[b,S]=U.useState(!1),[v,C]=U.useState(null),L=!!n,$=!!i&&!!o&&d===!0,H=A.name&&A.email&&A.phone,g=async()=>{if(E(""),f(null),!i||!o)return;c(!0);const T=await rA({date:i,time:o,pkg:n});f(T.available),!T.available&&T.reason&&E(T.reason),c(!1)},y=async()=>{if(b)return;S(!0);const T=await zL({pkg:n,date:i,time:o,details:A});C(T),S(!1)},I=()=>{e(0),r(sf[0]),s(""),l(""),f(null),P({name:"",email:"",phone:"",location:"Studio"}),S(!1),C(null),E("")};return w.jsx("section",{id:"booking",className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsxs("div",{className:"flex items-center justify-between mb-6",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Book a Session"}),w.jsxs("p",{className:"text-charcoal/70 mt-1",children:["Complete the steps to request your slot. ",w.jsx("span",{className:"text-rose/80"})]})]}),w.jsx(ux,{step:t})]}),w.jsxs("div",{className:"glass p-5 md:p-6 rounded-2xl border border-rose/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white/80",children:[t===0&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Choose a package"}),w.jsxs("p",{className:"text-charcoal/70 text-sm mt-1",children:["You’ve selected ",w.jsx("span",{className:"font-semibold text-rose",children:n.name}),"."]}),w.jsx("div",{className:"mt-6 grid md:grid-cols-3 gap-6",children:sf.map(T=>w.jsx(cx,{p:T,selected:T.id===n.id,onSelect:()=>r(T)},T.id))}),w.jsx("div",{className:"mt-6 flex justify-end",children:w.jsx("button",{onClick:()=>e(1),disabled:!L,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${L?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})})]}),t===1&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Pick date & time"}),w.jsxs("div",{className:"mt-4 grid md:grid-cols-3 gap-4",children:[w.jsxs("div",{className:"col-span-1",children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Date"}),w.jsx("input",{type:"date",value:i,onChange:T=>s(T.target.value),className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"})]}),w.jsxs("div",{className:"col-span-1",children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Time"}),w.jsxs("select",{value:o,onChange:T=>l(T.target.value),className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",children:[w.jsx("option",{value:"",children:"— Select time —"}),GL.map(T=>w.jsx("option",{value:T,children:Sw(T)},T))]}),m&&d===!1&&w.jsx("div",{className:"text-xs text-rose mt-1",children:m})]}),w.jsx("div",{className:"col-span-1 flex items-end",children:w.jsx("button",{onClick:g,disabled:!i||!o||u,className:`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${!i||!o||u?"bg-blush text-charcoal/50 cursor-not-allowed":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:u?"Checking...":"Check Availability"})})]}),d===!0&&w.jsx("p",{className:"mt-3 text-sm text-green-700",children:"✅ Slot available. You can proceed."}),d===!1&&w.jsxs("p",{className:"mt-3 text-sm text-red-700",children:["❌ Sorry, that time is taken. ",m?`(${m})`:"Try a different time."]}),w.jsxs("div",{className:"mt-6 flex justify-between",children:[w.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(0),children:"← Back"}),w.jsx("button",{onClick:()=>e(2),disabled:!$,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${$?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})]})]}),t===2&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Your details"}),w.jsxs("div",{className:"mt-4 grid md:grid-cols-2 gap-4",children:[w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Full name"}),w.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:A.name,onChange:T=>P({...A,name:T.target.value}),placeholder:"e.g., Lama NC"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Email"}),w.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:A.email,onChange:T=>P({...A,email:T.target.value}),placeholder:"you@example.com"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Phone"}),w.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:A.phone,onChange:T=>P({...A,phone:T.target.value}),placeholder:"(555) 123-4567"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Location"}),w.jsxs("select",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:A.location,onChange:T=>P({...A,location:T.target.value}),children:[w.jsx("option",{children:"Studio"}),w.jsx("option",{children:"Client Location"}),w.jsx("option",{children:"Outdoors"})]})]})]}),w.jsxs("div",{className:"mt-6 flex justify-between",children:[w.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(1),children:"← Back"}),w.jsx("button",{onClick:()=>e(3),disabled:!H,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${H?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})]})]}),t===3&&w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Review & confirm"}),w.jsxs("div",{className:"mt-4 grid md:grid-cols-2 gap-6",children:[w.jsxs("div",{className:"p-4 rounded-xl border border-rose/30 bg-blush/20",children:[w.jsx("h4",{className:"font-semibold text-charcoal",children:"Summary"}),w.jsxs("ul",{className:"mt-2 text-sm text-charcoal/80 space-y-1",children:[w.jsxs("li",{children:["Package: ",w.jsx("span",{className:"font-medium text-rose",children:n.name})," — $",n.price]}),w.jsxs("li",{children:["Date & Time: ",w.jsxs("span",{className:"font-medium",children:[i||"—"," ",o?Sw(o):""]})]}),w.jsxs("li",{children:["Duration: ",n.duration]}),w.jsxs("li",{children:["Location: ",A.location]})]})]}),w.jsxs("div",{className:"p-4 rounded-xl border border-rose/30 bg-blush/20",children:[w.jsx("h4",{className:"font-semibold text-charcoal",children:"Contact"}),w.jsxs("ul",{className:"mt-2 text-sm text-charcoal/80 space-y-1",children:[w.jsxs("li",{children:["Name: ",A.name||"—"]}),w.jsxs("li",{children:["Email: ",A.email||"—"]}),w.jsxs("li",{children:["Phone: ",A.phone||"—"]})]})]})]}),v?w.jsxs("div",{className:"mt-6 rounded-xl border border-rose/30 p-4 bg-blush/20",children:[w.jsx("p",{className:"font-semibold text-charcoal",children:"🎉 Booking requested!"}),w.jsxs("p",{className:"text-sm text-charcoal/80 mt-1",children:["Your reference: ",w.jsx("span",{className:"font-mono text-rose",children:v.reference}),"."]}),w.jsx("div",{className:"mt-4 flex gap-3",children:w.jsx("button",{onClick:I,className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Book Another"})})]}):w.jsxs("div",{className:"mt-6 flex justify-between",children:[w.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(2),children:"← Back"}),w.jsx("button",{onClick:y,disabled:b,className:"rounded-full px-5 py-3 text-sm font-semibold shadow-md bg-gold text-charcoal hover:bg-rose hover:text-ivory transition-all",children:b?"Submitting...":"Confirm Booking"})]})]})]})]})})}function QL(){const t=[{q:"How fast do I get photos?",a:"Sneak peeks within 24–48 hours. Full galleries typically within 10–14 days."},{q:"Do you travel?",a:"Yes! Travel within 25 miles is included. Beyond that, a small fee applies."},{q:"Can I reschedule?",a:"Absolutely—please let me know 48 hours in advance when possible."},{q:"Do you offer video?",a:"Yes, as an add-on for events and weddings. Ask for bundles."}];return w.jsx("section",{id:"faq",className:"w-full py-16 md:py-24 bg-pink-50",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-pink-700",children:"FAQ"}),w.jsx("div",{className:"mt-6 grid md:grid-cols-2 gap-4",children:t.map((e,n)=>w.jsxs("div",{className:"p-4 rounded-2xl border border-pink-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-white hover:shadow-lg transition-shadow",children:[w.jsx("div",{className:"font-semibold text-pink-700",children:e.q}),w.jsx("div",{className:"text-pink-900/80 text-sm mt-1",children:e.a})]},n))})]})})}const Aw="lamaphoto";async function YL(t){const e=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function XL(){const[t,e]=U.useState(""),[n,r]=U.useState(!1),[i,s]=U.useState(null),[o,l]=U.useState([]),[u,c]=U.useState(""),d=async()=>{c(""),r(!0),s(null),l([]);try{const E=(await ed(ao(ni,"galleries"))).docs.map(b=>b.data()),A=await YL(t.trim()),P=E.find(b=>b.codeHash===A);if(!P){c("Invalid access code. Double-check and try again."),r(!1);return}s(P);try{const b=await fetch(`https://res.cloudinary.com/${Aw}/image/list/${P.tag}.json`,{cache:"no-store"});if(!b.ok)throw new Error(`HTTP ${b.status}`);const S=await b.json();l(S.resources||[])}catch(b){console.error(b),c("Could not load images. Make sure Cloudinary ‘Asset lists’ are enabled and your photos are tagged with the gallery tag.")}}catch(m){console.error(m),c("There was a problem checking your code. Please try again.")}finally{r(!1)}},f=()=>{e(""),s(null),l([]),c("")};return w.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Client Gallery"}),!i&&w.jsxs("div",{className:"mt-6 max-w-md space-y-3",children:[w.jsx("p",{className:"text-charcoal/70",children:"Enter your access code to view your photos."}),w.jsx("input",{type:"password",value:t,onChange:m=>e(m.target.value),placeholder:"Access code",className:"w-full rounded-xl border border-rose/30 px-3 py-2 bg-white",onKeyDown:m=>{m.key==="Enter"&&!n&&t.trim()&&d()}}),w.jsx("button",{onClick:d,disabled:n||!t.trim(),className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${n||!t.trim()?"bg-blush text-charcoal/50 cursor-not-allowed":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:n?"Checking…":"Open Gallery"}),u&&w.jsx("div",{className:"text-sm text-red-700",children:u})]}),i&&w.jsxs("div",{className:"mt-8",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"font-serif text-xl text-charcoal",children:i.name}),w.jsxs("div",{className:"text-xs text-charcoal/60",children:["Tag: ",w.jsx("code",{children:i.tag})]})]}),w.jsx("button",{onClick:f,className:"text-sm underline text-charcoal/70 hover:text-rose",children:"Use a different code"})]}),o.length>0?w.jsx("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",children:o.map(m=>{const E=`https://res.cloudinary.com/${Aw}/image/upload/c_fill,g_auto,f_auto,q_auto,w_800,h_800/${m.public_id}.${m.format}`;return w.jsx("div",{className:"overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow",children:w.jsx("img",{src:E,alt:m.public_id,loading:"lazy",className:"w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"})},m.public_id)})}):w.jsx("div",{className:"mt-6 text-charcoal/60",children:"No images yet for this gallery."})]})]})})}function JL(){const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(""),o=jm(),l=async u=>{u.preventDefault(),s("");try{await wO(Mg,t,n),o("/admin")}catch{s("Invalid email or password")}};return w.jsxs("div",{className:"max-w-sm mx-auto py-12",children:[w.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Admin Login"}),i&&w.jsx("p",{className:"text-red-500",children:i}),w.jsxs("form",{onSubmit:l,className:"space-y-4",children:[w.jsx("input",{type:"email",placeholder:"Email",className:"w-full border px-3 py-2 rounded",value:t,onChange:u=>e(u.target.value)}),w.jsx("input",{type:"password",placeholder:"Password",className:"w-full border px-3 py-2 rounded",value:n,onChange:u=>r(u.target.value)}),w.jsx("button",{type:"submit",className:"bg-rose text-ivory px-4 py-2 rounded w-full",children:"Login"})]})]})}const ZL="modulepreload",eM=function(t){return"/"+t},Cw={},Vg=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=eM(u),u in Cw)return;Cw[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":ZL,c||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((m,E)=>{f.addEventListener("load",m),f.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},tM=bl.lazy(()=>Vg(()=>import("./AdminUpload-XkVYj6YI.js"),[])),nM=bl.lazy(()=>Vg(()=>import("./AdminGallery-Der5yDvF.js"),[]));bl.lazy(()=>Vg(()=>import("./AdminBookings-Bo-v76Px.js"),[]));async function ju(t){try{return(await m2(t)).data().count||0}catch{return 0}}const sd=(...t)=>t.filter(Boolean).join(" ");function of(t){const e=Array.from(document.querySelectorAll("h3")).find(n=>{var r;return((r=n.textContent)==null?void 0:r.trim())===t});e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function rM(){const[t,e]=U.useState(null),[n,r]=U.useState({rows:[],loading:!0,error:""}),[i,s]=U.useState(!0);U.useEffect(()=>{(async()=>{s(!0);const u=ao(ni,"bookings"),c=ao(ni,"galleries"),d=await ju(qi(u)),f=await ju(qi(u,Gn("status","==","pending"))),m=await ju(qi(u,Gn("status","==","confirmed"),Gn("startAt",">=",new Date))),E=await ju(qi(c));e({totalBookings:d,pending:f,confirmedUpcoming:m,galleries:E}),s(!1),await o(r)})()},[]);async function o(u){try{const c=ao(ni,"bookings"),d=qi(c,Gn("startAt",">=",new Date),u2("startAt","asc"),c2(6)),m=(await ed(d)).docs.map(E=>({id:E.id,...E.data()}));u({rows:m,loading:!1,error:""})}catch(c){console.warn("Upcoming query failed:",c),u({rows:[],loading:!1,error:"Couldn’t load upcoming bookings (index needed?)."})}}async function l(u){if(window.confirm("Cancel this appointment? This cannot be undone."))try{await p2(yg(ni,"bookings",u),{status:"canceled",canceledAt:vS()}),r(d=>({...d,loading:!0})),await o(r)}catch(d){console.error("Cancel failed:",d),alert("Could not cancel. Check Firestore rules/connection."),r(f=>({...f,loading:!1}))}}return w.jsx("section",{className:"w-full py-10 md:py-14 bg-ivory",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[w.jsxs("div",{className:"flex items-center justify-between gap-4",children:[w.jsxs("div",{children:[w.jsx("h1",{className:"text-2xl md:3xl font-serif font-semibold text-charcoal",children:"Admin"}),w.jsx("p",{className:"text-sm text-charcoal/70",children:"Manage uploads, client galleries, and bookings in one place."})]}),w.jsx("button",{onClick:()=>Mg.signOut(),className:"rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Sign out"})]}),w.jsx("div",{className:"mt-6 grid grid-cols-2 md:grid-cols-4 gap-4",children:i?w.jsxs(w.Fragment,{children:[w.jsx(Bu,{}),w.jsx(Bu,{}),w.jsx(Bu,{}),w.jsx(Bu,{})]}):w.jsxs(w.Fragment,{children:[w.jsx($u,{label:"Total Bookings",value:t.totalBookings}),w.jsx($u,{label:"Pending",value:t.pending,accent:"rose"}),w.jsx($u,{label:"Upcoming (Confirmed)",value:t.confirmedUpcoming,accent:"gold"}),w.jsx($u,{label:"Galleries",value:t.galleries})]})}),w.jsx("div",{className:"mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6",children:w.jsxs(ya,{title:"Quick Actions",className:"lg:col-span-12",children:[w.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[w.jsx(zu,{label:"New Gallery",onClick:()=>of("Galleries")}),w.jsx(zu,{label:"Upload Photos",onClick:()=>of("Upload")}),w.jsx(zu,{label:"View Upcoming",onClick:()=>of("Upcoming Bookings")}),w.jsx(zu,{label:"Go to Portfolio",href:"/portfolio"})]}),w.jsxs("p",{className:"text-xs text-charcoal/60 mt-4",children:["Tip: For fastest queries on ",w.jsx("code",{children:"bookings"}),", add a composite index:",w.jsx("code",{children:" status (ASC) "})," + ",w.jsx("code",{children:" startAt (ASC)"}),"."]})]})}),w.jsxs("div",{className:"mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6",children:[w.jsxs(ya,{title:"Upload",className:"lg:col-span-6 xl:col-span-7",children:[w.jsxs("p",{className:"text-sm text-charcoal/70 mb-4",children:["Upload to ",w.jsx("span",{className:"font-semibold",children:"Portfolio"})," or a selected ",w.jsx("span",{className:"font-semibold",children:"Client Gallery"}),". Tags are applied automatically."]}),w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsx(U.Suspense,{fallback:w.jsx("div",{className:"p-4 text-sm text-charcoal/60",children:"Loading…"}),children:w.jsx(tM,{})})})]}),w.jsx(ya,{title:"Upcoming Bookings",className:"lg:col-span-6 xl:col-span-5",children:n.loading?w.jsx(iM,{rows:4}):n.error?w.jsx("div",{className:"text-sm text-red-700",children:n.error}):n.rows.length===0?w.jsx("div",{className:"text-sm text-charcoal/60",children:"No upcoming bookings."}):w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsx("div",{className:"overflow-x-auto",children:w.jsx("div",{className:"max-h-[28rem] overflow-y-auto",children:w.jsxs("table",{className:"w-full text-sm min-w-[760px]",children:[w.jsx("thead",{className:"bg-rose-50 text-charcoal/80 sticky top-0 z-10",children:w.jsxs("tr",{children:[w.jsx(_a,{children:"When"}),w.jsx(_a,{children:"Client"}),w.jsx(_a,{children:"Package"}),w.jsx(_a,{children:"Ref"}),w.jsx(_a,{className:"w-36",children:"Actions"})]})}),w.jsx("tbody",{children:n.rows.map(u=>{var E,A,P,b,S,v,C,L,$;const c=(A=(E=u.startAt)==null?void 0:E.toDate)==null?void 0:A.call(E),d=c?c.toLocaleString([],{dateStyle:"medium",timeStyle:"short"}):`${u.date} ${u.time}`,f=c?c.getTime()<Date.now():!1,m=(u.status||"").toLowerCase()==="canceled";return w.jsxs("tr",{className:"border-t border-slate-100",children:[w.jsxs(va,{children:[w.jsxs("div",{className:"flex items-center gap-2",children:[m&&w.jsx("span",{className:"text-rose font-semibold",children:"●"}),w.jsx("span",{children:d})]}),w.jsx("div",{className:"text-slate-500",children:(P=u.details)==null?void 0:P.location})]}),w.jsxs(va,{children:[w.jsx("div",{className:"font-medium",children:(b=u.details)==null?void 0:b.name}),w.jsx("div",{className:"text-slate-500",children:(S=u.details)==null?void 0:S.email}),w.jsx("div",{className:"text-slate-500",children:(v=u.details)==null?void 0:v.phone})]}),w.jsxs(va,{children:[w.jsx("div",{className:"font-medium",children:(C=u.package)==null?void 0:C.name}),w.jsxs("div",{className:"text-slate-500",children:["$",(L=u.package)==null?void 0:L.price," — ",($=u.package)==null?void 0:$.duration]})]}),w.jsx(va,{className:"font-mono",children:u.reference}),w.jsx(va,{children:m?w.jsx("span",{className:"text-rose font-semibold",children:"Canceled"}):w.jsx("button",{className:"rounded-full px-3 py-2 text-xs font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all",onClick:()=>l(u.id),disabled:f,title:f?"This time has already passed":"Cancel appointment",children:"Cancel"})})]},u.id)})})]})})})})}),w.jsxs(ya,{title:"Galleries",className:"lg:col-span-12",children:[w.jsxs("p",{className:"text-sm text-charcoal/70 mb-4",children:["Create a client gallery (slug + access code). Then upload with the generated tag (e.g., ",w.jsx("code",{children:"gal-aliyah-sam"}),")."]}),w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsx(U.Suspense,{fallback:w.jsx("div",{className:"p-4 text-sm text-charcoal/60",children:"Loading…"}),children:w.jsx(nM,{})})})]}),w.jsx(ya,{title:"Notes",className:"lg:col-span-12",children:w.jsxs("ul",{className:"text-sm text-charcoal/80 list-disc ml-5 space-y-2",children:[w.jsx("li",{children:"Confirm pending bookings and send welcome emails."}),w.jsx("li",{children:"Create galleries for upcoming shoots."}),w.jsx("li",{children:"Upload highlight images to Portfolio."})]})})]})]})})}function $u({label:t,value:e,accent:n}){const r=n==="rose"?"ring-rose/30":n==="gold"?"ring-gold/30":"ring-slate-200";return w.jsxs("div",{className:sd("rounded-2xl bg-white/80 border border-rose/30 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-4 ring-1",r),children:[w.jsx("div",{className:"text-sm text-charcoal/70",children:t}),w.jsx("div",{className:"text-2xl font-semibold text-charcoal mt-1",children:e})]})}function Bu(){return w.jsxs("div",{className:"rounded-2xl bg-white/80 border border-rose/30 p-4 animate-pulse",children:[w.jsx("div",{className:"h-3 w-24 bg-slate-200 rounded mb-3"}),w.jsx("div",{className:"h-7 w-12 bg-slate-200 rounded"})]})}function ya({title:t,className:e,children:n}){return w.jsxs("section",{className:sd("rounded-2xl border border-rose/30 bg-blush/20 p-4 md:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",e),children:[w.jsx("h3",{className:"text-lg font-serif font-semibold text-charcoal mb-3",children:t}),n]})}function _a({children:t,className:e}){return w.jsx("th",{className:sd("text-left px-4 py-3",e),children:t})}function va({children:t,className:e}){return w.jsx("td",{className:sd("px-4 py-3 align-top",e),children:t})}function iM({rows:t=4}){return w.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:w.jsx("div",{className:"animate-pulse p-4 space-y-3",children:Array.from({length:t}).map((e,n)=>w.jsx("div",{className:"h-10 bg-slate-100 rounded"},n))})})}function zu({label:t,onClick:e,href:n}){return n?w.jsx("a",{href:n,className:"w-full text-center rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow",children:t}):w.jsx("button",{onClick:e,className:"w-full rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow",children:t})}const sM=()=>{};var Rw={};/**
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
 */const iA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,E=c&63;u||(E=64,o||(m=64)),r.push(n[d],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iA(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new aM;const m=s<<2|l>>4;if(r.push(m),c!==64){const E=l<<4&240|c>>2;if(r.push(E),f!==64){const A=c<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lM=function(t){const e=iA(t);return sA.encodeByteArray(e,!0)},oA=function(t){return lM(t).replace(/\./g,"")},aA=function(t){try{return sA.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cM=()=>uM().__FIREBASE_DEFAULTS__,hM=()=>{if(typeof process>"u"||typeof Rw>"u")return;const t=Rw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&aA(t[1]);return e&&JSON.parse(e)},fM=()=>{try{return sM()||cM()||hM()||dM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pM=t=>{var e;return(e=fM())==null?void 0:e[`_${t}`]};/**
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
 */function lA(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
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
 */function ir(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mM(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ir())}function gM(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yM(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _M(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vM(){try{return typeof indexedDB=="object"}catch{return!1}}function wM(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const EM="FirebaseError";class ws extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EM,Object.setPrototypeOf(this,ws.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xl.prototype.create)}}class Xl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TM(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ws(i,l,r)}}function TM(t,e){return t.replace(IM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IM=/\{\$([^}]+)}/g;/**
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
 */function uA(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function SM(t,e){const n=new AM(t,e);return n.subscribe.bind(n)}class AM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=af),i.error===void 0&&(i.error=af),i.complete===void 0&&(i.complete=af);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function af(){}/**
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
 */function Jl(t){return t&&t._delegate?t._delegate:t}class Pl{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const RM={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},PM=Oe.INFO,xM={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},kM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cA{constructor(e){this.name=e,this._logLevel=PM,this._logHandler=kM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const NM=(t,e)=>e.some(n=>t instanceof n);let Pw,xw;function bM(){return Pw||(Pw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DM(){return xw||(xw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hA=new WeakMap,Lp=new WeakMap,dA=new WeakMap,lf=new WeakMap,Ug=new WeakMap;function OM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hA.set(n,t)}).catch(()=>{}),Ug.set(e,t),e}function LM(t){if(Lp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lp.set(t,e)}let Mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dA.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MM(t){Mp=t(Mp)}function VM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uf(this),e,...n);return dA.set(r,e.sort?e.sort():[e]),yi(r)}:DM().includes(t)?function(...e){return t.apply(uf(this),e),yi(hA.get(this))}:function(...e){return yi(t.apply(uf(this),e))}}function UM(t){return typeof t=="function"?VM(t):(t instanceof IDBTransaction&&LM(t),NM(t,bM())?new Proxy(t,Mp):t)}function yi(t){if(t instanceof IDBRequest)return OM(t);if(lf.has(t))return lf.get(t);const e=UM(t);return e!==t&&(lf.set(t,e),Ug.set(e,t)),e}const uf=t=>Ug.get(t);function FM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(yi(o.result),u.oldVersion,u.newVersion,yi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const jM=["get","getKey","getAll","getAllKeys","count"],$M=["put","add","delete","clear"],cf=new Map;function kw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cf.get(e))return cf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$M.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jM.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return cf.set(e,s),s}MM(t=>({...t,get:(e,n,r)=>kw(e,n)||t.get(e,n,r),has:(e,n)=>!!kw(e,n)||t.has(e,n)}));/**
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
 */class BM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function zM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vp="@firebase/app",Nw="0.14.1";/**
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
 */const Pr=new cA("@firebase/app"),HM="@firebase/app-compat",WM="@firebase/analytics-compat",qM="@firebase/analytics",GM="@firebase/app-check-compat",KM="@firebase/app-check",QM="@firebase/auth",YM="@firebase/auth-compat",XM="@firebase/database",JM="@firebase/data-connect",ZM="@firebase/database-compat",eV="@firebase/functions",tV="@firebase/functions-compat",nV="@firebase/installations",rV="@firebase/installations-compat",iV="@firebase/messaging",sV="@firebase/messaging-compat",oV="@firebase/performance",aV="@firebase/performance-compat",lV="@firebase/remote-config",uV="@firebase/remote-config-compat",cV="@firebase/storage",hV="@firebase/storage-compat",dV="@firebase/firestore",fV="@firebase/ai",pV="@firebase/firestore-compat",mV="firebase",gV="12.1.0",yV={[Vp]:"fire-core",[HM]:"fire-core-compat",[qM]:"fire-analytics",[WM]:"fire-analytics-compat",[KM]:"fire-app-check",[GM]:"fire-app-check-compat",[QM]:"fire-auth",[YM]:"fire-auth-compat",[XM]:"fire-rtdb",[JM]:"fire-data-connect",[ZM]:"fire-rtdb-compat",[eV]:"fire-fn",[tV]:"fire-fn-compat",[nV]:"fire-iid",[rV]:"fire-iid-compat",[iV]:"fire-fcm",[sV]:"fire-fcm-compat",[oV]:"fire-perf",[aV]:"fire-perf-compat",[lV]:"fire-rc",[uV]:"fire-rc-compat",[cV]:"fire-gcs",[hV]:"fire-gcs-compat",[dV]:"fire-fst",[pV]:"fire-fst-compat",[fV]:"fire-vertex","fire-js":"fire-js",[mV]:"fire-js-all"};/**
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
 */const _V=new Map,vV=new Map,bw=new Map;function Dw(t,e){try{t.container.addComponent(e)}catch(n){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xl(t){const e=t.name;if(bw.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;bw.set(e,t);for(const n of _V.values())Dw(n,t);for(const n of vV.values())Dw(n,t);return!0}function Vs(t){return t==null?!1:t.settings!==void 0}/**
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
 */const wV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fg=new Xl("app","Firebase",wV);/**
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
 */const jg=gV;function Qa(t,e,n){let r=yV[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(o.join(" "));return}xl(new Pl(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const EV="firebase-heartbeat-database",TV=1,kl="firebase-heartbeat-store";let hf=null;function fA(){return hf||(hf=FM(EV,TV,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(kl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fg.create("idb-open",{originalErrorMessage:t.message})})),hf}async function IV(t){try{const n=(await fA()).transaction(kl),r=await n.objectStore(kl).get(pA(t));return await n.done,r}catch(e){if(e instanceof ws)Pr.warn(e.message);else{const n=Fg.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(n.message)}}}async function Ow(t,e){try{const r=(await fA()).transaction(kl,"readwrite");await r.objectStore(kl).put(e,pA(t)),await r.done}catch(n){if(n instanceof ws)Pr.warn(n.message);else{const r=Fg.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pr.warn(r.message)}}}function pA(t){return`${t.name}!${t.options.appId}`}/**
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
 */const SV=1024,AV=30;class CV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>AV){const o=xV(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lw(),{heartbeatsToSend:r,unsentEntries:i}=RV(this._heartbeatsCache.heartbeats),s=oA(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Pr.warn(n),""}}}function Lw(){return new Date().toISOString().substring(0,10)}function RV(t,e=SV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vM()?wM().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await IV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ow(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ow(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mw(t){return oA(JSON.stringify({version:2,heartbeats:t})).length}function xV(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function kV(t){xl(new Pl("platform-logger",e=>new BM(e),"PRIVATE")),xl(new Pl("heartbeat",e=>new CV(e),"PRIVATE")),Qa(Vp,Nw,t),Qa(Vp,Nw,"esm2020"),Qa("fire-js","")}kV("");function mA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NV=mA,gA=new Xl("auth","Firebase",mA());/**
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
 */const dh=new cA("@firebase/auth");function bV(t,...e){dh.logLevel<=Oe.WARN&&dh.warn(`Auth (${jg}): ${t}`,...e)}function mc(t,...e){dh.logLevel<=Oe.ERROR&&dh.error(`Auth (${jg}): ${t}`,...e)}/**
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
 */function Vw(t,...e){throw $g(t,...e)}function yA(t,...e){return $g(t,...e)}function _A(t,e,n){const r={...NV(),[e]:n};return new Xl("auth","Firebase",r).create(e,{appName:t.name})}function gc(t){return _A(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $g(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gA.create(t,...e)}function Se(t,e,...n){if(!t)throw $g(e,...n)}function Ya(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mc(e),new Error(e)}function fh(t,e){t||Ya(e)}function DV(){return Uw()==="http:"||Uw()==="https:"}function Uw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function OV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DV()||yM()||"connection"in navigator)?navigator.onLine:!0}function LV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zl{constructor(e,n){this.shortDelay=e,this.longDelay=n,fh(n>e,"Short delay should be less than long delay!"),this.isMobile=mM()||_M()}get(){return OV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function MV(t,e){fh(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ya("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ya("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ya("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const UV=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],FV=new Zl(3e4,6e4);function wA(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function od(t,e,n,r,i={}){return EA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=uA({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return gM()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&lA(t.emulatorConfig.host)&&(c.credentials="include"),vA.fetch()(await TA(t,t.config.apiHost,n,l),c)})}async function EA(t,e,n){t._canInitEmulator=!1;const r={...VV,...e};try{const i=new jV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Hu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Hu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _A(t,d,c);Vw(t,d)}}catch(i){if(i instanceof ws)throw i;Vw(t,"network-request-failed",{message:String(i)})}}async function TA(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?MV(t.config,i):`${t.config.apiScheme}://${i}`;return UV.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class jV{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yA(this.auth,"network-request-failed")),FV.get())})}}function Hu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yA(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function $V(t,e){return od(t,"POST","/v1/accounts:delete",e)}async function ph(t,e){return od(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BV(t,e=!1){const n=Jl(t),r=await n.getIdToken(e),i=IA(r);Se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xa(df(i.auth_time)),issuedAtTime:Xa(df(i.iat)),expirationTime:Xa(df(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function df(t){return Number(t)*1e3}function IA(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mc("JWT malformed, contained fewer than 3 sections"),null;try{const i=aA(n);return i?JSON.parse(i):(mc("Failed to decode base64 JWT payload"),null)}catch(i){return mc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fw(t){const e=IA(t);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Up(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ws&&zV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xa(this.lastLoginAt),this.creationTime=Xa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mh(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Up(t,ph(e,{idToken:n}));Se(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?SA(i.providerUserInfo):[],o=qV(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Fp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function WV(t){const e=Jl(t);await mh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SA(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function GV(t,e){const n=await EA(t,{},async()=>{const r=uA({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await TA(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&lA(t.emulatorConfig.host)&&(u.credentials="include"),vA.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KV(t,e){return od(t,"POST","/v2/accounts:revokeToken",wA(t,e))}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const n=Fw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await GV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new co;return r&&(Se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Ya("not implemented")}}/**
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
 */function $r(t,e){Se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new HV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Up(this,this.stsTokenManager.getToken(this.auth,e));return Se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BV(this,e)}reload(){return WV(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vs(this.auth.app))return Promise.reject(gc(this.auth));const e=await this.getIdToken();return await Up(this,$V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:E,providerData:A,stsTokenManager:P}=n;Se(f&&P,e,"internal-error");const b=co.fromJSON(this.name,P);Se(typeof f=="string",e,"internal-error"),$r(r,e.name),$r(i,e.name),Se(typeof m=="boolean",e,"internal-error"),Se(typeof E=="boolean",e,"internal-error"),$r(s,e.name),$r(o,e.name),$r(l,e.name),$r(u,e.name),$r(c,e.name),$r(d,e.name);const S=new Kn({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:d});return A&&Array.isArray(A)&&(S.providerData=A.map(v=>({...v}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new co;i.updateFromServerResponse(n);const s=new Kn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await mh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?SA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new co;l.updateFromIdToken(r);const u=new Kn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const jw=new Map;function Ji(t){fh(t instanceof Function,"Expected a class definition");let e=jw.get(t);return e?(fh(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jw.set(t,e),e)}/**
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
 */class AA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AA.type="NONE";const $w=AA;/**
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
 */function ff(t,e,n){return`firebase:${t}:${e}:${n}`}class ho{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ff(this.userKey,i.apiKey,s),this.fullPersistenceKey=ff("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ph(this.auth,{idToken:e}).catch(()=>{});return n?Kn._fromGetAccountInfoResponse(this.auth,n,e):null}return Kn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ho(Ji($w),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ji($w);const o=ff(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await ph(e,{idToken:d}).catch(()=>{});if(!m)break;f=await Kn._fromGetAccountInfoResponse(e,m,d)}else f=Kn._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ho(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ho(s,e,r))}}/**
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
 */function Bw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(JV(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(QV(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(e4(e))return"Blackberry";if(t4(e))return"Webos";if(YV(e))return"Safari";if((e.includes("chrome/")||XV(e))&&!e.includes("edge/"))return"Chrome";if(ZV(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function QV(t=ir()){return/firefox\//i.test(t)}function YV(t=ir()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function XV(t=ir()){return/crios\//i.test(t)}function JV(t=ir()){return/iemobile/i.test(t)}function ZV(t=ir()){return/android/i.test(t)}function e4(t=ir()){return/blackberry/i.test(t)}function t4(t=ir()){return/webos/i.test(t)}/**
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
 */function CA(t,e=[]){let n;switch(t){case"Browser":n=Bw(ir());break;case"Worker":n=`${Bw(ir())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jg}/${r}`}/**
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
 */class n4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function r4(t,e={}){return od(t,"GET","/v2/passwordPolicy",wA(t,e))}/**
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
 */const i4=6;class s4{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??i4,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class o4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zw(this),this.idTokenSubscription=new zw(this),this.beforeStateQueue=new n4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ji(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ph(this,{idToken:e}),r=await Kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Vs(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vs(this.app))return Promise.reject(gc(this));const n=e?Jl(e):null;return n&&Se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vs(this.app)?Promise.reject(gc(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vs(this.app)?Promise.reject(gc(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ji(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await r4(this),n=new s4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ji(e)||this._popupRedirectResolver;Se(n,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Ji(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Vs(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&bV(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function a4(t){return Jl(t)}class zw{constructor(e){this.auth=e,this.observer=null,this.addObserver=SM(n=>this.observer=n)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function l4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ji);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function u4(t,e,n,r){return Jl(t).onAuthStateChanged(e,n,r)}new Zl(3e4,6e4);/**
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
 */new Zl(2e3,1e4);/**
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
 */new Zl(3e4,6e4);/**
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
 */new Zl(5e3,15e3);var Hw="@firebase/auth",Ww="1.11.0";/**
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
 */class c4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function h4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function d4(t){xl(new Pl("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CA(t)},c=new o4(r,i,s,u);return l4(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xl(new Pl("auth-internal",e=>{const n=a4(e.getProvider("auth").getImmediate());return(r=>new c4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qa(Hw,Ww,h4(t)),Qa(Hw,Ww,"esm2020")}/**
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
 */const f4=5*60;pM("authIdTokenMaxAge");d4("Browser");/*! *****************************************************************************
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
***************************************************************************** */function p4(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{c(r.next(d))}catch(f){o(f)}}function u(d){try{c(r.throw(d))}catch(f){o(f)}}function c(d){d.done?s(d.value):i(d.value).then(l,u)}c((r=r.apply(t,[])).next())})}function m4(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(c){return function(d){return u([c,d])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var Js=function(){return Js=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Js.apply(this,arguments)},RA=function(t){return{loading:t==null,value:t}},g4=function(){return function(t,e){switch(e.type){case"error":return Js(Js({},t),{error:e.error,loading:!1,value:void 0});case"reset":return RA(e.defaultValue);case"value":return Js(Js({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},y4=function(t){var e=t?t():void 0,n=U.useReducer(g4(),RA(e)),r=n[0],i=n[1],s=U.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=U.useCallback(function(u){i({type:"error",error:u})},[]),l=U.useCallback(function(u){i({type:"value",value:u})},[]);return U.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},_4=function(t,e){var n=y4(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return U.useEffect(function(){var u=u4(t,function(c){return p4(void 0,void 0,void 0,function(){var d;return m4(this,function(f){switch(f.label){case 0:return[3,4];case 1:return f.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return f.sent(),[3,4];case 3:return d=f.sent(),s(d),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]),[l,i,r]};function v4({children:t}){const[e,n]=_4(Mg);return n?w.jsx("div",{className:"p-8 text-center",children:"Loading..."}):e?t:w.jsx(bP,{to:"/admin-login",replace:!0})}const w4=$P([{path:"/",element:w.jsx(sx,{}),children:[{index:!0,element:w.jsx(ox,{})},{path:"portfolio",element:w.jsx(lx,{})},{path:"booking",element:w.jsx(KL,{})},{path:"faq",element:w.jsx(QL,{})},{path:"client",element:w.jsx(XL,{})},{path:"admin-login",element:w.jsx(JL,{})},{path:"admin",element:w.jsx(v4,{children:w.jsx(rM,{})})}]}]);oI(document.getElementById("root")).render(w.jsx(bl.StrictMode,{children:w.jsx(QP,{router:w4})}));export{N4 as a,yg as b,ao as c,ni as d,ed as g,w as j,u2 as o,qi as q,U as r,vS as s,p2 as u};
