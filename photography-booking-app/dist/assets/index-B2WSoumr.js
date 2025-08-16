function hE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fE={exports:{}},Ih={},pE={exports:{}},pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ol=Symbol.for("react.element"),l1=Symbol.for("react.portal"),u1=Symbol.for("react.fragment"),c1=Symbol.for("react.strict_mode"),h1=Symbol.for("react.profiler"),d1=Symbol.for("react.provider"),f1=Symbol.for("react.context"),p1=Symbol.for("react.forward_ref"),m1=Symbol.for("react.suspense"),g1=Symbol.for("react.memo"),y1=Symbol.for("react.lazy"),Ny=Symbol.iterator;function _1(t){return t===null||typeof t!="object"?null:(t=Ny&&t[Ny]||t["@@iterator"],typeof t=="function"?t:null)}var mE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gE=Object.assign,yE={};function Lo(t,e,n){this.props=t,this.context=e,this.refs=yE,this.updater=n||mE}Lo.prototype.isReactComponent={};Lo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Lo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _E(){}_E.prototype=Lo.prototype;function Qp(t,e,n){this.props=t,this.context=e,this.refs=yE,this.updater=n||mE}var Yp=Qp.prototype=new _E;Yp.constructor=Qp;gE(Yp,Lo.prototype);Yp.isPureReactComponent=!0;var by=Array.isArray,vE=Object.prototype.hasOwnProperty,Jp={current:null},wE={key:!0,ref:!0,__self:!0,__source:!0};function EE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vE.call(e,r)&&!wE.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ol,type:t,key:s,ref:o,props:i,_owner:Jp.current}}function v1(t,e){return{$$typeof:Ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ol}function w1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Dy=/\/+/g;function Sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w1(""+t.key):e.toString(36)}function Yu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ol:case l1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sd(o,0):r,by(i)?(n="",t!=null&&(n=t.replace(Dy,"$&/")+"/"),Yu(i,e,n,"",function(c){return c})):i!=null&&(Xp(i)&&(i=v1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Dy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",by(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Sd(s,l);o+=Yu(s,e,n,u,i)}else if(u=_1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Sd(s,l++),o+=Yu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wu(t,e,n){if(t==null)return t;var r=[],i=0;return Yu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function E1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var zt={current:null},Ju={transition:null},T1={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:Ju,ReactCurrentOwner:Jp};function TE(){throw Error("act(...) is not supported in production builds of React.")}pe.Children={map:wu,forEach:function(t,e,n){wu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wu(t,function(){e++}),e},toArray:function(t){return wu(t,function(e){return e})||[]},only:function(t){if(!Xp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};pe.Component=Lo;pe.Fragment=u1;pe.Profiler=h1;pe.PureComponent=Qp;pe.StrictMode=c1;pe.Suspense=m1;pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1;pe.act=TE;pe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)vE.call(e,u)&&!wE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Ol,type:t.type,key:i,ref:s,props:r,_owner:o}};pe.createContext=function(t){return t={$$typeof:f1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:d1,_context:t},t.Consumer=t};pe.createElement=EE;pe.createFactory=function(t){var e=EE.bind(null,t);return e.type=t,e};pe.createRef=function(){return{current:null}};pe.forwardRef=function(t){return{$$typeof:p1,render:t}};pe.isValidElement=Xp;pe.lazy=function(t){return{$$typeof:y1,_payload:{_status:-1,_result:t},_init:E1}};pe.memo=function(t,e){return{$$typeof:g1,type:t,compare:e===void 0?null:e}};pe.startTransition=function(t){var e=Ju.transition;Ju.transition={};try{t()}finally{Ju.transition=e}};pe.unstable_act=TE;pe.useCallback=function(t,e){return zt.current.useCallback(t,e)};pe.useContext=function(t){return zt.current.useContext(t)};pe.useDebugValue=function(){};pe.useDeferredValue=function(t){return zt.current.useDeferredValue(t)};pe.useEffect=function(t,e){return zt.current.useEffect(t,e)};pe.useId=function(){return zt.current.useId()};pe.useImperativeHandle=function(t,e,n){return zt.current.useImperativeHandle(t,e,n)};pe.useInsertionEffect=function(t,e){return zt.current.useInsertionEffect(t,e)};pe.useLayoutEffect=function(t,e){return zt.current.useLayoutEffect(t,e)};pe.useMemo=function(t,e){return zt.current.useMemo(t,e)};pe.useReducer=function(t,e,n){return zt.current.useReducer(t,e,n)};pe.useRef=function(t){return zt.current.useRef(t)};pe.useState=function(t){return zt.current.useState(t)};pe.useSyncExternalStore=function(t,e,n){return zt.current.useSyncExternalStore(t,e,n)};pe.useTransition=function(){return zt.current.useTransition()};pe.version="18.3.1";pE.exports=pe;var U=pE.exports;const Ll=dE(U),I1=hE({__proto__:null,default:Ll},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1=U,A1=Symbol.for("react.element"),R1=Symbol.for("react.fragment"),C1=Object.prototype.hasOwnProperty,P1=S1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k1={key:!0,ref:!0,__self:!0,__source:!0};function IE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)C1.call(e,r)&&!k1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:A1,type:t,key:s,ref:o,props:i,_owner:P1.current}}Ih.Fragment=R1;Ih.jsx=IE;Ih.jsxs=IE;fE.exports=Ih;var v=fE.exports,SE={exports:{}},hn={},AE={exports:{}},RE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,ie){var ue=W.length;W.push(ie);e:for(;0<ue;){var Ae=ue-1>>>1,fe=W[Ae];if(0<i(fe,ie))W[Ae]=ie,W[ue]=fe,ue=Ae;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var ie=W[0],ue=W.pop();if(ue!==ie){W[0]=ue;e:for(var Ae=0,fe=W.length,Ne=fe>>>1;Ae<Ne;){var Ut=2*(Ae+1)-1,Ye=W[Ut],_t=Ut+1,vt=W[_t];if(0>i(Ye,ue))_t<fe&&0>i(vt,Ye)?(W[Ae]=vt,W[_t]=ue,Ae=_t):(W[Ae]=Ye,W[Ut]=ue,Ae=Ut);else if(_t<fe&&0>i(vt,ue))W[Ae]=vt,W[_t]=ue,Ae=_t;else break e}}return ie}function i(W,ie){var ue=W.sortIndex-ie.sortIndex;return ue!==0?ue:W.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,f=null,m=3,T=!1,S=!1,k=!1,b=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(W){for(var ie=n(c);ie!==null;){if(ie.callback===null)r(c);else if(ie.startTime<=W)r(c),ie.sortIndex=ie.expirationTime,e(u,ie);else break;ie=n(c)}}function O(W){if(k=!1,R(W),!S)if(n(u)!==null)S=!0,Vn($);else{var ie=n(c);ie!==null&&Wt(O,ie.startTime-W)}}function $(W,ie){S=!1,k&&(k=!1,A(y),y=-1),T=!0;var ue=m;try{for(R(ie),f=n(u);f!==null&&(!(f.expirationTime>ie)||W&&!P());){var Ae=f.callback;if(typeof Ae=="function"){f.callback=null,m=f.priorityLevel;var fe=Ae(f.expirationTime<=ie);ie=t.unstable_now(),typeof fe=="function"?f.callback=fe:f===n(u)&&r(u),R(ie)}else r(u);f=n(u)}if(f!==null)var Ne=!0;else{var Ut=n(c);Ut!==null&&Wt(O,Ut.startTime-ie),Ne=!1}return Ne}finally{f=null,m=ue,T=!1}}var F=!1,g=null,y=-1,I=5,E=-1;function P(){return!(t.unstable_now()-E<I)}function N(){if(g!==null){var W=t.unstable_now();E=W;var ie=!0;try{ie=g(!0,W)}finally{ie?C():(F=!1,g=null)}}else F=!1}var C;if(typeof w=="function")C=function(){w(N)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,yt=Ce.port2;Ce.port1.onmessage=N,C=function(){yt.postMessage(null)}}else C=function(){b(N,0)};function Vn(W){g=W,F||(F=!0,C())}function Wt(W,ie){y=b(function(){W(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){S||T||(S=!0,Vn($))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(W){switch(m){case 1:case 2:case 3:var ie=3;break;default:ie=m}var ue=m;m=ie;try{return W()}finally{m=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,ie){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ue=m;m=W;try{return ie()}finally{m=ue}},t.unstable_scheduleCallback=function(W,ie,ue){var Ae=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Ae+ue:Ae):ue=Ae,W){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=ue+fe,W={id:d++,callback:ie,priorityLevel:W,startTime:ue,expirationTime:fe,sortIndex:-1},ue>Ae?(W.sortIndex=ue,e(c,W),n(u)===null&&W===n(c)&&(k?(A(y),y=-1):k=!0,Wt(O,ue-Ae))):(W.sortIndex=fe,e(u,W),S||T||(S=!0,Vn($))),W},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(W){var ie=m;return function(){var ue=m;m=ie;try{return W.apply(this,arguments)}finally{m=ue}}}})(RE);AE.exports=RE;var x1=AE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1=U,cn=x1;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var CE=new Set,tl={};function vs(t,e){wo(t,e),wo(t+"Capture",e)}function wo(t,e){for(tl[t]=e,t=0;t<e.length;t++)CE.add(e[t])}var Sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tf=Object.prototype.hasOwnProperty,b1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oy={},Ly={};function D1(t){return Tf.call(Ly,t)?!0:Tf.call(Oy,t)?!1:b1.test(t)?Ly[t]=!0:(Oy[t]=!0,!1)}function O1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L1(t,e,n,r){if(e===null||typeof e>"u"||O1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new Ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new Ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new Ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new Ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new Ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new Ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zp=/[\-:]([a-z])/g;function em(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zp,em);Rt[e]=new Ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zp,em);Rt[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zp,em);Rt[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function tm(t,e,n,r){var i=Rt.hasOwnProperty(e)?Rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L1(e,n,i,r)&&(n=null),r||i===null?D1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Or=N1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Eu=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),PE=Symbol.for("react.provider"),kE=Symbol.for("react.context"),rm=Symbol.for("react.forward_ref"),Sf=Symbol.for("react.suspense"),Af=Symbol.for("react.suspense_list"),im=Symbol.for("react.memo"),Kr=Symbol.for("react.lazy"),xE=Symbol.for("react.offscreen"),My=Symbol.iterator;function ua(t){return t===null||typeof t!="object"?null:(t=My&&t[My]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Object.assign,Ad;function Ia(t){if(Ad===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ad=e&&e[1]||""}return`
`+Ad+t}var Rd=!1;function Cd(t,e){if(!t||Rd)return"";Rd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Rd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ia(t):""}function M1(t){switch(t.tag){case 5:return Ia(t.type);case 16:return Ia("Lazy");case 13:return Ia("Suspense");case 19:return Ia("SuspenseList");case 0:case 2:case 15:return t=Cd(t.type,!1),t;case 11:return t=Cd(t.type.render,!1),t;case 1:return t=Cd(t.type,!0),t;default:return""}}function Rf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qs:return"Fragment";case Ws:return"Portal";case If:return"Profiler";case nm:return"StrictMode";case Sf:return"Suspense";case Af:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case kE:return(t.displayName||"Context")+".Consumer";case PE:return(t._context.displayName||"Context")+".Provider";case rm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case im:return e=t.displayName||null,e!==null?e:Rf(t.type)||"Memo";case Kr:e=t._payload,t=t._init;try{return Rf(t(e))}catch{}}return null}function V1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rf(e);case 8:return e===nm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ti(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function NE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function U1(t){var e=NE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tu(t){t._valueTracker||(t._valueTracker=U1(t))}function bE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=NE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cf(t,e){var n=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ti(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function DE(t,e){e=e.checked,e!=null&&tm(t,"checked",e,!1)}function Pf(t,e){DE(t,e);var n=Ti(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kf(t,e.type,n):e.hasOwnProperty("defaultValue")&&kf(t,e.type,Ti(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Uy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kf(t,e,n){(e!=="number"||Tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sa=Array.isArray;function oo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ti(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Sa(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ti(n)}}function OE(t,e){var n=Ti(e.value),r=Ti(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function LE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?LE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Iu,ME=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Iu=Iu||document.createElement("div"),Iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function nl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F1=["Webkit","ms","Moz","O"];Object.keys(Ma).forEach(function(t){F1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ma[e]=Ma[t]})});function VE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ma.hasOwnProperty(t)&&Ma[t]?(""+e).trim():e+"px"}function UE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=VE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var j1=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bf(t,e){if(e){if(j1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Of=null;function sm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lf=null,ao=null,lo=null;function $y(t){if(t=Ul(t)){if(typeof Lf!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Ph(e),Lf(t.stateNode,t.type,e))}}function FE(t){ao?lo?lo.push(t):lo=[t]:ao=t}function jE(){if(ao){var t=ao,e=lo;if(lo=ao=null,$y(t),e)for(t=0;t<e.length;t++)$y(e[t])}}function $E(t,e){return t(e)}function BE(){}var Pd=!1;function zE(t,e,n){if(Pd)return t(e,n);Pd=!0;try{return $E(t,e,n)}finally{Pd=!1,(ao!==null||lo!==null)&&(BE(),jE())}}function rl(t,e){var n=t.stateNode;if(n===null)return null;var r=Ph(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var Mf=!1;if(Sr)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){Mf=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{Mf=!1}function $1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Va=!1,Ic=null,Sc=!1,Vf=null,B1={onError:function(t){Va=!0,Ic=t}};function z1(t,e,n,r,i,s,o,l,u){Va=!1,Ic=null,$1.apply(B1,arguments)}function H1(t,e,n,r,i,s,o,l,u){if(z1.apply(this,arguments),Va){if(Va){var c=Ic;Va=!1,Ic=null}else throw Error(H(198));Sc||(Sc=!0,Vf=c)}}function ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function HE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function By(t){if(ws(t)!==t)throw Error(H(188))}function W1(t){var e=t.alternate;if(!e){if(e=ws(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return By(i),t;if(s===r)return By(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function WE(t){return t=W1(t),t!==null?qE(t):null}function qE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=qE(t);if(e!==null)return e;t=t.sibling}return null}var GE=cn.unstable_scheduleCallback,zy=cn.unstable_cancelCallback,q1=cn.unstable_shouldYield,G1=cn.unstable_requestPaint,Xe=cn.unstable_now,K1=cn.unstable_getCurrentPriorityLevel,om=cn.unstable_ImmediatePriority,KE=cn.unstable_UserBlockingPriority,Ac=cn.unstable_NormalPriority,Q1=cn.unstable_LowPriority,QE=cn.unstable_IdlePriority,Sh=null,Yn=null;function Y1(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Sh,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:Z1,J1=Math.log,X1=Math.LN2;function Z1(t){return t>>>=0,t===0?32:31-(J1(t)/X1|0)|0}var Su=64,Au=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Aa(l):(s&=o,s!==0&&(r=Aa(s)))}else o=n&~i,o!==0?r=Aa(o):s!==0&&(r=Aa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bn(e),i=1<<n,r|=t[n],e&=~i;return r}function eR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=eR(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Uf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function YE(){var t=Su;return Su<<=1,!(Su&4194240)&&(Su=64),t}function kd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function nR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function am(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function JE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var XE,lm,ZE,eT,tT,Ff=!1,Ru=[],li=null,ui=null,ci=null,il=new Map,sl=new Map,Yr=[],rR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hy(t,e){switch(t){case"focusin":case"focusout":li=null;break;case"dragenter":case"dragleave":ui=null;break;case"mouseover":case"mouseout":ci=null;break;case"pointerover":case"pointerout":il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":sl.delete(e.pointerId)}}function ha(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ul(e),e!==null&&lm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function iR(t,e,n,r,i){switch(e){case"focusin":return li=ha(li,t,e,n,r,i),!0;case"dragenter":return ui=ha(ui,t,e,n,r,i),!0;case"mouseover":return ci=ha(ci,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return il.set(s,ha(il.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,sl.set(s,ha(sl.get(s)||null,t,e,n,r,i)),!0}return!1}function nT(t){var e=Xi(t.target);if(e!==null){var n=ws(e);if(n!==null){if(e=n.tag,e===13){if(e=HE(n),e!==null){t.blockedOn=e,tT(t.priority,function(){ZE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Of=r,n.target.dispatchEvent(r),Of=null}else return e=Ul(n),e!==null&&lm(e),t.blockedOn=n,!1;e.shift()}return!0}function Wy(t,e,n){Xu(t)&&n.delete(e)}function sR(){Ff=!1,li!==null&&Xu(li)&&(li=null),ui!==null&&Xu(ui)&&(ui=null),ci!==null&&Xu(ci)&&(ci=null),il.forEach(Wy),sl.forEach(Wy)}function da(t,e){t.blockedOn===e&&(t.blockedOn=null,Ff||(Ff=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,sR)))}function ol(t){function e(i){return da(i,t)}if(0<Ru.length){da(Ru[0],t);for(var n=1;n<Ru.length;n++){var r=Ru[n];r.blockedOn===t&&(r.blockedOn=null)}}for(li!==null&&da(li,t),ui!==null&&da(ui,t),ci!==null&&da(ci,t),il.forEach(e),sl.forEach(e),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)nT(n),n.blockedOn===null&&Yr.shift()}var uo=Or.ReactCurrentBatchConfig,Cc=!0;function oR(t,e,n,r){var i=xe,s=uo.transition;uo.transition=null;try{xe=1,um(t,e,n,r)}finally{xe=i,uo.transition=s}}function aR(t,e,n,r){var i=xe,s=uo.transition;uo.transition=null;try{xe=4,um(t,e,n,r)}finally{xe=i,uo.transition=s}}function um(t,e,n,r){if(Cc){var i=jf(t,e,n,r);if(i===null)Fd(t,e,r,Pc,n),Hy(t,r);else if(iR(i,t,e,n,r))r.stopPropagation();else if(Hy(t,r),e&4&&-1<rR.indexOf(t)){for(;i!==null;){var s=Ul(i);if(s!==null&&XE(s),s=jf(t,e,n,r),s===null&&Fd(t,e,r,Pc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Fd(t,e,r,null,n)}}var Pc=null;function jf(t,e,n,r){if(Pc=null,t=sm(r),t=Xi(t),t!==null)if(e=ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=HE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pc=t,null}function rT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K1()){case om:return 1;case KE:return 4;case Ac:case Q1:return 16;case QE:return 536870912;default:return 16}default:return 16}}var ri=null,cm=null,Zu=null;function iT(){if(Zu)return Zu;var t,e=cm,n=e.length,r,i="value"in ri?ri.value:ri.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zu=i.slice(t,1<r?1-r:void 0)}function ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cu(){return!0}function qy(){return!1}function dn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Cu:qy,this.isPropagationStopped=qy,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cu)},persist:function(){},isPersistent:Cu}),e}var Mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hm=dn(Mo),Vl=qe({},Mo,{view:0,detail:0}),lR=dn(Vl),xd,Nd,fa,Ah=qe({},Vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(xd=t.screenX-fa.screenX,Nd=t.screenY-fa.screenY):Nd=xd=0,fa=t),xd)},movementY:function(t){return"movementY"in t?t.movementY:Nd}}),Gy=dn(Ah),uR=qe({},Ah,{dataTransfer:0}),cR=dn(uR),hR=qe({},Vl,{relatedTarget:0}),bd=dn(hR),dR=qe({},Mo,{animationName:0,elapsedTime:0,pseudoElement:0}),fR=dn(dR),pR=qe({},Mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mR=dn(pR),gR=qe({},Mo,{data:0}),Ky=dn(gR),yR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_R={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vR[t])?!!e[t]:!1}function dm(){return wR}var ER=qe({},Vl,{key:function(t){if(t.key){var e=yR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_R[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dm,charCode:function(t){return t.type==="keypress"?ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TR=dn(ER),IR=qe({},Ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qy=dn(IR),SR=qe({},Vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dm}),AR=dn(SR),RR=qe({},Mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),CR=dn(RR),PR=qe({},Ah,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kR=dn(PR),xR=[9,13,27,32],fm=Sr&&"CompositionEvent"in window,Ua=null;Sr&&"documentMode"in document&&(Ua=document.documentMode);var NR=Sr&&"TextEvent"in window&&!Ua,sT=Sr&&(!fm||Ua&&8<Ua&&11>=Ua),Yy=" ",Jy=!1;function oT(t,e){switch(t){case"keyup":return xR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function bR(t,e){switch(t){case"compositionend":return aT(e);case"keypress":return e.which!==32?null:(Jy=!0,Yy);case"textInput":return t=e.data,t===Yy&&Jy?null:t;default:return null}}function DR(t,e){if(Gs)return t==="compositionend"||!fm&&oT(t,e)?(t=iT(),Zu=cm=ri=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sT&&e.locale!=="ko"?null:e.data;default:return null}}var OR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OR[t.type]:e==="textarea"}function lT(t,e,n,r){FE(r),e=kc(e,"onChange"),0<e.length&&(n=new hm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fa=null,al=null;function LR(t){vT(t,0)}function Rh(t){var e=Ys(t);if(bE(e))return t}function MR(t,e){if(t==="change")return e}var uT=!1;if(Sr){var Dd;if(Sr){var Od="oninput"in document;if(!Od){var Zy=document.createElement("div");Zy.setAttribute("oninput","return;"),Od=typeof Zy.oninput=="function"}Dd=Od}else Dd=!1;uT=Dd&&(!document.documentMode||9<document.documentMode)}function e_(){Fa&&(Fa.detachEvent("onpropertychange",cT),al=Fa=null)}function cT(t){if(t.propertyName==="value"&&Rh(al)){var e=[];lT(e,al,t,sm(t)),zE(LR,e)}}function VR(t,e,n){t==="focusin"?(e_(),Fa=e,al=n,Fa.attachEvent("onpropertychange",cT)):t==="focusout"&&e_()}function UR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rh(al)}function FR(t,e){if(t==="click")return Rh(e)}function jR(t,e){if(t==="input"||t==="change")return Rh(e)}function $R(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var On=typeof Object.is=="function"?Object.is:$R;function ll(t,e){if(On(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tf.call(e,i)||!On(t[i],e[i]))return!1}return!0}function t_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function n_(t,e){var n=t_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=t_(n)}}function hT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dT(){for(var t=window,e=Tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tc(t.document)}return e}function pm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function BR(t){var e=dT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hT(n.ownerDocument.documentElement,n)){if(r!==null&&pm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=n_(n,s);var o=n_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zR=Sr&&"documentMode"in document&&11>=document.documentMode,Ks=null,$f=null,ja=null,Bf=!1;function r_(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bf||Ks==null||Ks!==Tc(r)||(r=Ks,"selectionStart"in r&&pm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ja&&ll(ja,r)||(ja=r,r=kc($f,"onSelect"),0<r.length&&(e=new hm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ks)))}function Pu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qs={animationend:Pu("Animation","AnimationEnd"),animationiteration:Pu("Animation","AnimationIteration"),animationstart:Pu("Animation","AnimationStart"),transitionend:Pu("Transition","TransitionEnd")},Ld={},fT={};Sr&&(fT=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function Ch(t){if(Ld[t])return Ld[t];if(!Qs[t])return t;var e=Qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fT)return Ld[t]=e[n];return t}var pT=Ch("animationend"),mT=Ch("animationiteration"),gT=Ch("animationstart"),yT=Ch("transitionend"),_T=new Map,i_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ni(t,e){_T.set(t,e),vs(e,[t])}for(var Md=0;Md<i_.length;Md++){var Vd=i_[Md],HR=Vd.toLowerCase(),WR=Vd[0].toUpperCase()+Vd.slice(1);Ni(HR,"on"+WR)}Ni(pT,"onAnimationEnd");Ni(mT,"onAnimationIteration");Ni(gT,"onAnimationStart");Ni("dblclick","onDoubleClick");Ni("focusin","onFocus");Ni("focusout","onBlur");Ni(yT,"onTransitionEnd");wo("onMouseEnter",["mouseout","mouseover"]);wo("onMouseLeave",["mouseout","mouseover"]);wo("onPointerEnter",["pointerout","pointerover"]);wo("onPointerLeave",["pointerout","pointerover"]);vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function s_(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,H1(r,e,void 0,t),t.currentTarget=null}function vT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;s_(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;s_(i,l,c),s=u}}}if(Sc)throw t=Vf,Sc=!1,Vf=null,t}function Fe(t,e){var n=e[Gf];n===void 0&&(n=e[Gf]=new Set);var r=t+"__bubble";n.has(r)||(wT(e,t,2,!1),n.add(r))}function Ud(t,e,n){var r=0;e&&(r|=4),wT(n,t,r,e)}var ku="_reactListening"+Math.random().toString(36).slice(2);function ul(t){if(!t[ku]){t[ku]=!0,CE.forEach(function(n){n!=="selectionchange"&&(qR.has(n)||Ud(n,!1,t),Ud(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ku]||(e[ku]=!0,Ud("selectionchange",!1,e))}}function wT(t,e,n,r){switch(rT(e)){case 1:var i=oR;break;case 4:i=aR;break;default:i=um}n=i.bind(null,e,n,t),i=void 0,!Mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Fd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Xi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}zE(function(){var c=s,d=sm(n),f=[];e:{var m=_T.get(t);if(m!==void 0){var T=hm,S=t;switch(t){case"keypress":if(ec(n)===0)break e;case"keydown":case"keyup":T=TR;break;case"focusin":S="focus",T=bd;break;case"focusout":S="blur",T=bd;break;case"beforeblur":case"afterblur":T=bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Gy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=cR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=AR;break;case pT:case mT:case gT:T=fR;break;case yT:T=CR;break;case"scroll":T=lR;break;case"wheel":T=kR;break;case"copy":case"cut":case"paste":T=mR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Qy}var k=(e&4)!==0,b=!k&&t==="scroll",A=k?m!==null?m+"Capture":null:m;k=[];for(var w=c,R;w!==null;){R=w;var O=R.stateNode;if(R.tag===5&&O!==null&&(R=O,A!==null&&(O=rl(w,A),O!=null&&k.push(cl(w,O,R)))),b)break;w=w.return}0<k.length&&(m=new T(m,S,null,n,d),f.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Of&&(S=n.relatedTarget||n.fromElement)&&(Xi(S)||S[Ar]))break e;if((T||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,T?(S=n.relatedTarget||n.toElement,T=c,S=S?Xi(S):null,S!==null&&(b=ws(S),S!==b||S.tag!==5&&S.tag!==6)&&(S=null)):(T=null,S=c),T!==S)){if(k=Gy,O="onMouseLeave",A="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(k=Qy,O="onPointerLeave",A="onPointerEnter",w="pointer"),b=T==null?m:Ys(T),R=S==null?m:Ys(S),m=new k(O,w+"leave",T,n,d),m.target=b,m.relatedTarget=R,O=null,Xi(d)===c&&(k=new k(A,w+"enter",S,n,d),k.target=R,k.relatedTarget=b,O=k),b=O,T&&S)t:{for(k=T,A=S,w=0,R=k;R;R=Fs(R))w++;for(R=0,O=A;O;O=Fs(O))R++;for(;0<w-R;)k=Fs(k),w--;for(;0<R-w;)A=Fs(A),R--;for(;w--;){if(k===A||A!==null&&k===A.alternate)break t;k=Fs(k),A=Fs(A)}k=null}else k=null;T!==null&&o_(f,m,T,k,!1),S!==null&&b!==null&&o_(f,b,S,k,!0)}}e:{if(m=c?Ys(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var $=MR;else if(Xy(m))if(uT)$=jR;else{$=UR;var F=VR}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&($=FR);if($&&($=$(t,c))){lT(f,$,n,d);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&kf(m,"number",m.value)}switch(F=c?Ys(c):window,t){case"focusin":(Xy(F)||F.contentEditable==="true")&&(Ks=F,$f=c,ja=null);break;case"focusout":ja=$f=Ks=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,r_(f,n,d);break;case"selectionchange":if(zR)break;case"keydown":case"keyup":r_(f,n,d)}var g;if(fm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Gs?oT(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(sT&&n.locale!=="ko"&&(Gs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Gs&&(g=iT()):(ri=d,cm="value"in ri?ri.value:ri.textContent,Gs=!0)),F=kc(c,y),0<F.length&&(y=new Ky(y,t,null,n,d),f.push({event:y,listeners:F}),g?y.data=g:(g=aT(n),g!==null&&(y.data=g)))),(g=NR?bR(t,n):DR(t,n))&&(c=kc(c,"onBeforeInput"),0<c.length&&(d=new Ky("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=g))}vT(f,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rl(t,n),s!=null&&r.unshift(cl(t,s,i)),s=rl(t,e),s!=null&&r.push(cl(t,s,i))),t=t.return}return r}function Fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function o_(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=rl(n,s),u!=null&&o.unshift(cl(n,u,l))):i||(u=rl(n,s),u!=null&&o.push(cl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var GR=/\r\n?/g,KR=/\u0000|\uFFFD/g;function a_(t){return(typeof t=="string"?t:""+t).replace(GR,`
`).replace(KR,"")}function xu(t,e,n){if(e=a_(e),a_(t)!==e&&n)throw Error(H(425))}function xc(){}var zf=null,Hf=null;function Wf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,QR=typeof clearTimeout=="function"?clearTimeout:void 0,l_=typeof Promise=="function"?Promise:void 0,YR=typeof queueMicrotask=="function"?queueMicrotask:typeof l_<"u"?function(t){return l_.resolve(null).then(t).catch(JR)}:qf;function JR(t){setTimeout(function(){throw t})}function jd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ol(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ol(e)}function hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function u_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vo=Math.random().toString(36).slice(2),Gn="__reactFiber$"+Vo,hl="__reactProps$"+Vo,Ar="__reactContainer$"+Vo,Gf="__reactEvents$"+Vo,XR="__reactListeners$"+Vo,ZR="__reactHandles$"+Vo;function Xi(t){var e=t[Gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ar]||n[Gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=u_(t);t!==null;){if(n=t[Gn])return n;t=u_(t)}return e}t=n,n=t.parentNode}return null}function Ul(t){return t=t[Gn]||t[Ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Ph(t){return t[hl]||null}var Kf=[],Js=-1;function bi(t){return{current:t}}function je(t){0>Js||(t.current=Kf[Js],Kf[Js]=null,Js--)}function Me(t,e){Js++,Kf[Js]=t.current,t.current=e}var Ii={},Mt=bi(Ii),Yt=bi(!1),as=Ii;function Eo(t,e){var n=t.type.contextTypes;if(!n)return Ii;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Jt(t){return t=t.childContextTypes,t!=null}function Nc(){je(Yt),je(Mt)}function c_(t,e,n){if(Mt.current!==Ii)throw Error(H(168));Me(Mt,e),Me(Yt,n)}function ET(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,V1(t)||"Unknown",i));return qe({},n,r)}function bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ii,as=Mt.current,Me(Mt,t),Me(Yt,Yt.current),!0}function h_(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=ET(t,e,as),r.__reactInternalMemoizedMergedChildContext=t,je(Yt),je(Mt),Me(Mt,t)):je(Yt),Me(Yt,n)}var yr=null,kh=!1,$d=!1;function TT(t){yr===null?yr=[t]:yr.push(t)}function eC(t){kh=!0,TT(t)}function Di(){if(!$d&&yr!==null){$d=!0;var t=0,e=xe;try{var n=yr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yr=null,kh=!1}catch(i){throw yr!==null&&(yr=yr.slice(t+1)),GE(om,Di),i}finally{xe=e,$d=!1}}return null}var Xs=[],Zs=0,Dc=null,Oc=0,mn=[],gn=0,ls=null,_r=1,vr="";function qi(t,e){Xs[Zs++]=Oc,Xs[Zs++]=Dc,Dc=t,Oc=e}function IT(t,e,n){mn[gn++]=_r,mn[gn++]=vr,mn[gn++]=ls,ls=t;var r=_r;t=vr;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var s=32-bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_r=1<<32-bn(e)+i|n<<i|r,vr=s+t}else _r=1<<s|n<<i|r,vr=t}function mm(t){t.return!==null&&(qi(t,1),IT(t,1,0))}function gm(t){for(;t===Dc;)Dc=Xs[--Zs],Xs[Zs]=null,Oc=Xs[--Zs],Xs[Zs]=null;for(;t===ls;)ls=mn[--gn],mn[gn]=null,vr=mn[--gn],mn[gn]=null,_r=mn[--gn],mn[gn]=null}var ln=null,on=null,ze=!1,xn=null;function ST(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function d_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ln=t,on=hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ln=t,on=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ls!==null?{id:_r,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ln=t,on=null,!0):!1;default:return!1}}function Qf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yf(t){if(ze){var e=on;if(e){var n=e;if(!d_(t,e)){if(Qf(t))throw Error(H(418));e=hi(n.nextSibling);var r=ln;e&&d_(t,e)?ST(r,n):(t.flags=t.flags&-4097|2,ze=!1,ln=t)}}else{if(Qf(t))throw Error(H(418));t.flags=t.flags&-4097|2,ze=!1,ln=t}}}function f_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ln=t}function Nu(t){if(t!==ln)return!1;if(!ze)return f_(t),ze=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wf(t.type,t.memoizedProps)),e&&(e=on)){if(Qf(t))throw AT(),Error(H(418));for(;e;)ST(t,e),e=hi(e.nextSibling)}if(f_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){on=hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}on=null}}else on=ln?hi(t.stateNode.nextSibling):null;return!0}function AT(){for(var t=on;t;)t=hi(t.nextSibling)}function To(){on=ln=null,ze=!1}function ym(t){xn===null?xn=[t]:xn.push(t)}var tC=Or.ReactCurrentBatchConfig;function pa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function bu(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function p_(t){var e=t._init;return e(t._payload)}function RT(t){function e(A,w){if(t){var R=A.deletions;R===null?(A.deletions=[w],A.flags|=16):R.push(w)}}function n(A,w){if(!t)return null;for(;w!==null;)e(A,w),w=w.sibling;return null}function r(A,w){for(A=new Map;w!==null;)w.key!==null?A.set(w.key,w):A.set(w.index,w),w=w.sibling;return A}function i(A,w){return A=mi(A,w),A.index=0,A.sibling=null,A}function s(A,w,R){return A.index=R,t?(R=A.alternate,R!==null?(R=R.index,R<w?(A.flags|=2,w):R):(A.flags|=2,w)):(A.flags|=1048576,w)}function o(A){return t&&A.alternate===null&&(A.flags|=2),A}function l(A,w,R,O){return w===null||w.tag!==6?(w=Kd(R,A.mode,O),w.return=A,w):(w=i(w,R),w.return=A,w)}function u(A,w,R,O){var $=R.type;return $===qs?d(A,w,R.props.children,O,R.key):w!==null&&(w.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Kr&&p_($)===w.type)?(O=i(w,R.props),O.ref=pa(A,w,R),O.return=A,O):(O=ac(R.type,R.key,R.props,null,A.mode,O),O.ref=pa(A,w,R),O.return=A,O)}function c(A,w,R,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==R.containerInfo||w.stateNode.implementation!==R.implementation?(w=Qd(R,A.mode,O),w.return=A,w):(w=i(w,R.children||[]),w.return=A,w)}function d(A,w,R,O,$){return w===null||w.tag!==7?(w=ss(R,A.mode,O,$),w.return=A,w):(w=i(w,R),w.return=A,w)}function f(A,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Kd(""+w,A.mode,R),w.return=A,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Eu:return R=ac(w.type,w.key,w.props,null,A.mode,R),R.ref=pa(A,null,w),R.return=A,R;case Ws:return w=Qd(w,A.mode,R),w.return=A,w;case Kr:var O=w._init;return f(A,O(w._payload),R)}if(Sa(w)||ua(w))return w=ss(w,A.mode,R,null),w.return=A,w;bu(A,w)}return null}function m(A,w,R,O){var $=w!==null?w.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return $!==null?null:l(A,w,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Eu:return R.key===$?u(A,w,R,O):null;case Ws:return R.key===$?c(A,w,R,O):null;case Kr:return $=R._init,m(A,w,$(R._payload),O)}if(Sa(R)||ua(R))return $!==null?null:d(A,w,R,O,null);bu(A,R)}return null}function T(A,w,R,O,$){if(typeof O=="string"&&O!==""||typeof O=="number")return A=A.get(R)||null,l(w,A,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Eu:return A=A.get(O.key===null?R:O.key)||null,u(w,A,O,$);case Ws:return A=A.get(O.key===null?R:O.key)||null,c(w,A,O,$);case Kr:var F=O._init;return T(A,w,R,F(O._payload),$)}if(Sa(O)||ua(O))return A=A.get(R)||null,d(w,A,O,$,null);bu(w,O)}return null}function S(A,w,R,O){for(var $=null,F=null,g=w,y=w=0,I=null;g!==null&&y<R.length;y++){g.index>y?(I=g,g=null):I=g.sibling;var E=m(A,g,R[y],O);if(E===null){g===null&&(g=I);break}t&&g&&E.alternate===null&&e(A,g),w=s(E,w,y),F===null?$=E:F.sibling=E,F=E,g=I}if(y===R.length)return n(A,g),ze&&qi(A,y),$;if(g===null){for(;y<R.length;y++)g=f(A,R[y],O),g!==null&&(w=s(g,w,y),F===null?$=g:F.sibling=g,F=g);return ze&&qi(A,y),$}for(g=r(A,g);y<R.length;y++)I=T(g,A,y,R[y],O),I!==null&&(t&&I.alternate!==null&&g.delete(I.key===null?y:I.key),w=s(I,w,y),F===null?$=I:F.sibling=I,F=I);return t&&g.forEach(function(P){return e(A,P)}),ze&&qi(A,y),$}function k(A,w,R,O){var $=ua(R);if(typeof $!="function")throw Error(H(150));if(R=$.call(R),R==null)throw Error(H(151));for(var F=$=null,g=w,y=w=0,I=null,E=R.next();g!==null&&!E.done;y++,E=R.next()){g.index>y?(I=g,g=null):I=g.sibling;var P=m(A,g,E.value,O);if(P===null){g===null&&(g=I);break}t&&g&&P.alternate===null&&e(A,g),w=s(P,w,y),F===null?$=P:F.sibling=P,F=P,g=I}if(E.done)return n(A,g),ze&&qi(A,y),$;if(g===null){for(;!E.done;y++,E=R.next())E=f(A,E.value,O),E!==null&&(w=s(E,w,y),F===null?$=E:F.sibling=E,F=E);return ze&&qi(A,y),$}for(g=r(A,g);!E.done;y++,E=R.next())E=T(g,A,y,E.value,O),E!==null&&(t&&E.alternate!==null&&g.delete(E.key===null?y:E.key),w=s(E,w,y),F===null?$=E:F.sibling=E,F=E);return t&&g.forEach(function(N){return e(A,N)}),ze&&qi(A,y),$}function b(A,w,R,O){if(typeof R=="object"&&R!==null&&R.type===qs&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Eu:e:{for(var $=R.key,F=w;F!==null;){if(F.key===$){if($=R.type,$===qs){if(F.tag===7){n(A,F.sibling),w=i(F,R.props.children),w.return=A,A=w;break e}}else if(F.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Kr&&p_($)===F.type){n(A,F.sibling),w=i(F,R.props),w.ref=pa(A,F,R),w.return=A,A=w;break e}n(A,F);break}else e(A,F);F=F.sibling}R.type===qs?(w=ss(R.props.children,A.mode,O,R.key),w.return=A,A=w):(O=ac(R.type,R.key,R.props,null,A.mode,O),O.ref=pa(A,w,R),O.return=A,A=O)}return o(A);case Ws:e:{for(F=R.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===R.containerInfo&&w.stateNode.implementation===R.implementation){n(A,w.sibling),w=i(w,R.children||[]),w.return=A,A=w;break e}else{n(A,w);break}else e(A,w);w=w.sibling}w=Qd(R,A.mode,O),w.return=A,A=w}return o(A);case Kr:return F=R._init,b(A,w,F(R._payload),O)}if(Sa(R))return S(A,w,R,O);if(ua(R))return k(A,w,R,O);bu(A,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,w!==null&&w.tag===6?(n(A,w.sibling),w=i(w,R),w.return=A,A=w):(n(A,w),w=Kd(R,A.mode,O),w.return=A,A=w),o(A)):n(A,w)}return b}var Io=RT(!0),CT=RT(!1),Lc=bi(null),Mc=null,eo=null,_m=null;function vm(){_m=eo=Mc=null}function wm(t){var e=Lc.current;je(Lc),t._currentValue=e}function Jf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function co(t,e){Mc=t,_m=eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(_m!==t)if(t={context:t,memoizedValue:e,next:null},eo===null){if(Mc===null)throw Error(H(308));eo=t,Mc.dependencies={lanes:0,firstContext:t}}else eo=eo.next=t;return e}var Zi=null;function Em(t){Zi===null?Zi=[t]:Zi.push(t)}function PT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Em(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rr(t,r)}function Rr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qr=!1;function Tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function di(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rr(t,n)}return i=r.interleaved,i===null?(e.next=e,Em(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rr(t,n)}function tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,am(t,n)}}function m_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vc(t,e,n,r){var i=t.updateQueue;Qr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,k=l;switch(m=e,T=n,k.tag){case 1:if(S=k.payload,typeof S=="function"){f=S.call(T,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=k.payload,m=typeof S=="function"?S.call(T,f,m):S,m==null)break e;f=qe({},f,m);break e;case 2:Qr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=T,u=f):d=d.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=f}}function g_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Fl={},Jn=bi(Fl),dl=bi(Fl),fl=bi(Fl);function es(t){if(t===Fl)throw Error(H(174));return t}function Im(t,e){switch(Me(fl,e),Me(dl,t),Me(Jn,Fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nf(e,t)}je(Jn),Me(Jn,e)}function So(){je(Jn),je(dl),je(fl)}function xT(t){es(fl.current);var e=es(Jn.current),n=Nf(e,t.type);e!==n&&(Me(dl,t),Me(Jn,n))}function Sm(t){dl.current===t&&(je(Jn),je(dl))}var He=bi(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bd=[];function Am(){for(var t=0;t<Bd.length;t++)Bd[t]._workInProgressVersionPrimary=null;Bd.length=0}var nc=Or.ReactCurrentDispatcher,zd=Or.ReactCurrentBatchConfig,us=0,We=null,ut=null,pt=null,Fc=!1,$a=!1,pl=0,nC=0;function xt(){throw Error(H(321))}function Rm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!On(t[n],e[n]))return!1;return!0}function Cm(t,e,n,r,i,s){if(us=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nc.current=t===null||t.memoizedState===null?oC:aC,t=n(r,i),$a){s=0;do{if($a=!1,pl=0,25<=s)throw Error(H(301));s+=1,pt=ut=null,e.updateQueue=null,nc.current=lC,t=n(r,i)}while($a)}if(nc.current=jc,e=ut!==null&&ut.next!==null,us=0,pt=ut=We=null,Fc=!1,e)throw Error(H(300));return t}function Pm(){var t=pl!==0;return pl=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?We.memoizedState=pt=t:pt=pt.next=t,pt}function En(){if(ut===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var e=pt===null?We.memoizedState:pt.next;if(e!==null)pt=e,ut=t;else{if(t===null)throw Error(H(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},pt===null?We.memoizedState=pt=t:pt=pt.next=t}return pt}function ml(t,e){return typeof e=="function"?e(t):e}function Hd(t){var e=En(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=ut,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((us&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,o=r):u=u.next=f,We.lanes|=d,cs|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,On(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,We.lanes|=s,cs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wd(t){var e=En(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);On(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function NT(){}function bT(t,e){var n=We,r=En(),i=e(),s=!On(r.memoizedState,i);if(s&&(r.memoizedState=i,Qt=!0),r=r.queue,km(LT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,gl(9,OT.bind(null,n,r,i,e),void 0,null),gt===null)throw Error(H(349));us&30||DT(n,e,i)}return i}function DT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function OT(t,e,n,r){e.value=n,e.getSnapshot=r,MT(e)&&VT(t)}function LT(t,e,n){return n(function(){MT(e)&&VT(t)})}function MT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!On(t,n)}catch{return!0}}function VT(t){var e=Rr(t,1);e!==null&&Dn(e,t,1,-1)}function y_(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ml,lastRenderedState:t},e.queue=t,t=t.dispatch=sC.bind(null,We,t),[e.memoizedState,t]}function gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function UT(){return En().memoizedState}function rc(t,e,n,r){var i=Wn();We.flags|=t,i.memoizedState=gl(1|e,n,void 0,r===void 0?null:r)}function xh(t,e,n,r){var i=En();r=r===void 0?null:r;var s=void 0;if(ut!==null){var o=ut.memoizedState;if(s=o.destroy,r!==null&&Rm(r,o.deps)){i.memoizedState=gl(e,n,s,r);return}}We.flags|=t,i.memoizedState=gl(1|e,n,s,r)}function __(t,e){return rc(8390656,8,t,e)}function km(t,e){return xh(2048,8,t,e)}function FT(t,e){return xh(4,2,t,e)}function jT(t,e){return xh(4,4,t,e)}function $T(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function BT(t,e,n){return n=n!=null?n.concat([t]):null,xh(4,4,$T.bind(null,e,t),n)}function xm(){}function zT(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function HT(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function WT(t,e,n){return us&21?(On(n,e)||(n=YE(),We.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function rC(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=zd.transition;zd.transition={};try{t(!1),e()}finally{xe=n,zd.transition=r}}function qT(){return En().memoizedState}function iC(t,e,n){var r=pi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},GT(t))KT(e,n);else if(n=PT(t,e,n,r),n!==null){var i=Bt();Dn(n,t,r,i),QT(n,e,r)}}function sC(t,e,n){var r=pi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(GT(t))KT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,On(l,o)){var u=e.interleaved;u===null?(i.next=i,Em(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=PT(t,e,i,r),n!==null&&(i=Bt(),Dn(n,t,r,i),QT(n,e,r))}}function GT(t){var e=t.alternate;return t===We||e!==null&&e===We}function KT(t,e){$a=Fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function QT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,am(t,n)}}var jc={readContext:wn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},oC={readContext:wn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:__,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,$T.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iC.bind(null,We,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:y_,useDebugValue:xm,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=y_(!1),e=t[0];return t=rC.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=We,i=Wn();if(ze){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),gt===null)throw Error(H(349));us&30||DT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,__(LT.bind(null,r,s,t),[t]),r.flags|=2048,gl(9,OT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=gt.identifierPrefix;if(ze){var n=vr,r=_r;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=pl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},aC={readContext:wn,useCallback:zT,useContext:wn,useEffect:km,useImperativeHandle:BT,useInsertionEffect:FT,useLayoutEffect:jT,useMemo:HT,useReducer:Hd,useRef:UT,useState:function(){return Hd(ml)},useDebugValue:xm,useDeferredValue:function(t){var e=En();return WT(e,ut.memoizedState,t)},useTransition:function(){var t=Hd(ml)[0],e=En().memoizedState;return[t,e]},useMutableSource:NT,useSyncExternalStore:bT,useId:qT,unstable_isNewReconciler:!1},lC={readContext:wn,useCallback:zT,useContext:wn,useEffect:km,useImperativeHandle:BT,useInsertionEffect:FT,useLayoutEffect:jT,useMemo:HT,useReducer:Wd,useRef:UT,useState:function(){return Wd(ml)},useDebugValue:xm,useDeferredValue:function(t){var e=En();return ut===null?e.memoizedState=t:WT(e,ut.memoizedState,t)},useTransition:function(){var t=Wd(ml)[0],e=En().memoizedState;return[t,e]},useMutableSource:NT,useSyncExternalStore:bT,useId:qT,unstable_isNewReconciler:!1};function Cn(t,e){if(t&&t.defaultProps){e=qe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:qe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nh={isMounted:function(t){return(t=t._reactInternals)?ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=pi(t),s=Tr(r,i);s.payload=e,n!=null&&(s.callback=n),e=di(t,s,i),e!==null&&(Dn(e,t,i,r),tc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=pi(t),s=Tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=di(t,s,i),e!==null&&(Dn(e,t,i,r),tc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),r=pi(t),i=Tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=di(t,i,r),e!==null&&(Dn(e,t,r,n),tc(e,t,r))}};function v_(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ll(n,r)||!ll(i,s):!0}function YT(t,e,n){var r=!1,i=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(i=Jt(e)?as:Mt.current,r=e.contextTypes,s=(r=r!=null)?Eo(t,i):Ii),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function w_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nh.enqueueReplaceState(e,e.state,null)}function Zf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Tm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wn(s):(s=Jt(e)?as:Mt.current,i.context=Eo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Nh.enqueueReplaceState(i,i.state,null),Vc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",r=e;do n+=M1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ep(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uC=typeof WeakMap=="function"?WeakMap:Map;function JT(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Bc||(Bc=!0,cp=r),ep(t,e)},n}function XT(t,e,n){n=Tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ep(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ep(t,e),typeof r!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function E_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=IC.bind(null,t,e,n),e.then(t,t))}function T_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function I_(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tr(-1,1),e.tag=2,di(n,e,1))),n.lanes|=1),t)}var cC=Or.ReactCurrentOwner,Qt=!1;function jt(t,e,n,r){e.child=t===null?CT(e,null,n,r):Io(e,t.child,n,r)}function S_(t,e,n,r,i){n=n.render;var s=e.ref;return co(e,i),r=Cm(t,e,n,r,s,i),n=Pm(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(ze&&n&&mm(e),e.flags|=1,jt(t,e,r,i),e.child)}function A_(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Um(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ZT(t,e,s,r,i)):(t=ac(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ll,n(o,r)&&t.ref===e.ref)return Cr(t,e,i)}return e.flags|=1,t=mi(s,r),t.ref=e.ref,t.return=e,e.child=t}function ZT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ll(s,r)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,Cr(t,e,i)}return tp(t,e,n,r,i)}function eI(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(no,nn),nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(no,nn),nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Me(no,nn),nn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Me(no,nn),nn|=r;return jt(t,e,i,n),e.child}function tI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tp(t,e,n,r,i){var s=Jt(n)?as:Mt.current;return s=Eo(e,s),co(e,i),n=Cm(t,e,n,r,s,i),r=Pm(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(ze&&r&&mm(e),e.flags|=1,jt(t,e,n,i),e.child)}function R_(t,e,n,r,i){if(Jt(n)){var s=!0;bc(e)}else s=!1;if(co(e,i),e.stateNode===null)ic(t,e),YT(e,n,r),Zf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=Jt(n)?as:Mt.current,c=Eo(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&w_(e,o,r,c),Qr=!1;var m=e.memoizedState;o.state=m,Vc(e,r,o,i),u=e.memoizedState,l!==r||m!==u||Yt.current||Qr?(typeof d=="function"&&(Xf(e,n,d,r),u=e.memoizedState),(l=Qr||v_(e,n,l,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kT(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:Cn(e.type,l),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=wn(u):(u=Jt(n)?as:Mt.current,u=Eo(e,u));var T=n.getDerivedStateFromProps;(d=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||m!==u)&&w_(e,o,r,u),Qr=!1,m=e.memoizedState,o.state=m,Vc(e,r,o,i);var S=e.memoizedState;l!==f||m!==S||Yt.current||Qr?(typeof T=="function"&&(Xf(e,n,T,r),S=e.memoizedState),(c=Qr||v_(e,n,c,r,m,S,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return np(t,e,n,r,s,i)}function np(t,e,n,r,i,s){tI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&h_(e,n,!1),Cr(t,e,s);r=e.stateNode,cC.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Io(e,t.child,null,s),e.child=Io(e,null,l,s)):jt(t,e,l,s),e.memoizedState=r.state,i&&h_(e,n,!0),e.child}function nI(t){var e=t.stateNode;e.pendingContext?c_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&c_(t,e.context,!1),Im(t,e.containerInfo)}function C_(t,e,n,r,i){return To(),ym(i),e.flags|=256,jt(t,e,n,r),e.child}var rp={dehydrated:null,treeContext:null,retryLane:0};function ip(t){return{baseLanes:t,cachePool:null,transitions:null}}function rI(t,e,n){var r=e.pendingProps,i=He.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(He,i&1),t===null)return Yf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Oh(o,r,0,null),t=ss(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ip(n),e.memoizedState=rp,t):Nm(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hC(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mi(l,s):(s=ss(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ip(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rp,r}return s=t.child,t=s.sibling,r=mi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Nm(t,e){return e=Oh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Du(t,e,n,r){return r!==null&&ym(r),Io(e,t.child,null,n),t=Nm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qd(Error(H(422))),Du(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Oh({mode:"visible",children:r.children},i,0,null),s=ss(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Io(e,t.child,null,o),e.child.memoizedState=ip(o),e.memoizedState=rp,s);if(!(e.mode&1))return Du(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(H(419)),r=qd(s,r,void 0),Du(t,e,o,r)}if(l=(o&t.childLanes)!==0,Qt||l){if(r=gt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rr(t,i),Dn(r,t,i,-1))}return Vm(),r=qd(Error(H(421))),Du(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=SC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,on=hi(i.nextSibling),ln=e,ze=!0,xn=null,t!==null&&(mn[gn++]=_r,mn[gn++]=vr,mn[gn++]=ls,_r=t.id,vr=t.overflow,ls=e),e=Nm(e,r.children),e.flags|=4096,e)}function P_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Jf(t.return,e,n)}function Gd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iI(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(jt(t,e,r.children,n),r=He.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&P_(t,n,e);else if(t.tag===19)P_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(He,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Gd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Gd(e,!0,n,null,s);break;case"together":Gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ic(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=mi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dC(t,e,n){switch(e.tag){case 3:nI(e),To();break;case 5:xT(e);break;case 1:Jt(e.type)&&bc(e);break;case 4:Im(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(Lc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(He,He.current&1),e.flags|=128,null):n&e.child.childLanes?rI(t,e,n):(Me(He,He.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);Me(He,He.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iI(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(He,He.current),r)break;return null;case 22:case 23:return e.lanes=0,eI(t,e,n)}return Cr(t,e,n)}var sI,sp,oI,aI;sI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sp=function(){};oI=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,es(Jn.current);var s=null;switch(n){case"input":i=Cf(t,i),r=Cf(t,r),s=[];break;case"select":i=qe({},i,{value:void 0}),r=qe({},r,{value:void 0}),s=[];break;case"textarea":i=xf(t,i),r=xf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xc)}bf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(tl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(tl.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};aI=function(t,e,n,r){n!==r&&(e.flags|=4)};function ma(t,e){if(!ze)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fC(t,e,n){var r=e.pendingProps;switch(gm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Jt(e.type)&&Nc(),Nt(e),null;case 3:return r=e.stateNode,So(),je(Yt),je(Mt),Am(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Nu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xn!==null&&(fp(xn),xn=null))),sp(t,e),Nt(e),null;case 5:Sm(e);var i=es(fl.current);if(n=e.type,t!==null&&e.stateNode!=null)oI(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Nt(e),null}if(t=es(Jn.current),Nu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Gn]=e,r[hl]=s,t=(e.mode&1)!==0,n){case"dialog":Fe("cancel",r),Fe("close",r);break;case"iframe":case"object":case"embed":Fe("load",r);break;case"video":case"audio":for(i=0;i<Ra.length;i++)Fe(Ra[i],r);break;case"source":Fe("error",r);break;case"img":case"image":case"link":Fe("error",r),Fe("load",r);break;case"details":Fe("toggle",r);break;case"input":Vy(r,s),Fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fe("invalid",r);break;case"textarea":Fy(r,s),Fe("invalid",r)}bf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&xu(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&xu(r.textContent,l,t),i=["children",""+l]):tl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Fe("scroll",r)}switch(n){case"input":Tu(r),Uy(r,s,!0);break;case"textarea":Tu(r),jy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=LE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Gn]=e,t[hl]=r,sI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Df(n,r),n){case"dialog":Fe("cancel",t),Fe("close",t),i=r;break;case"iframe":case"object":case"embed":Fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ra.length;i++)Fe(Ra[i],t);i=r;break;case"source":Fe("error",t),i=r;break;case"img":case"image":case"link":Fe("error",t),Fe("load",t),i=r;break;case"details":Fe("toggle",t),i=r;break;case"input":Vy(t,r),i=Cf(t,r),Fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=qe({},r,{value:void 0}),Fe("invalid",t);break;case"textarea":Fy(t,r),i=xf(t,r),Fe("invalid",t);break;default:i=r}bf(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?UE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ME(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&nl(t,u):typeof u=="number"&&nl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(tl.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Fe("scroll",t):u!=null&&tm(t,s,u,o))}switch(n){case"input":Tu(t),Uy(t,r,!1);break;case"textarea":Tu(t),jy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ti(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?oo(t,!!r.multiple,s,!1):r.defaultValue!=null&&oo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)aI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=es(fl.current),es(Jn.current),Nu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gn]=e,(s=r.nodeValue!==n)&&(t=ln,t!==null))switch(t.tag){case 3:xu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gn]=e,e.stateNode=r}return Nt(e),null;case 13:if(je(He),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ze&&on!==null&&e.mode&1&&!(e.flags&128))AT(),To(),e.flags|=98560,s=!1;else if(s=Nu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[Gn]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),s=!1}else xn!==null&&(fp(xn),xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||He.current&1?ct===0&&(ct=3):Vm())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return So(),sp(t,e),t===null&&ul(e.stateNode.containerInfo),Nt(e),null;case 10:return wm(e.type._context),Nt(e),null;case 17:return Jt(e.type)&&Nc(),Nt(e),null;case 19:if(je(He),s=e.memoizedState,s===null)return Nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ma(s,!1);else{if(ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uc(t),o!==null){for(e.flags|=128,ma(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(He,He.current&1|2),e.child}t=t.sibling}s.tail!==null&&Xe()>Ro&&(e.flags|=128,r=!0,ma(s,!1),e.lanes=4194304)}else{if(!r)if(t=Uc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ma(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ze)return Nt(e),null}else 2*Xe()-s.renderingStartTime>Ro&&n!==1073741824&&(e.flags|=128,r=!0,ma(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Xe(),e.sibling=null,n=He.current,Me(He,r?n&1|2:n&1),e):(Nt(e),null);case 22:case 23:return Mm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nn&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function pC(t,e){switch(gm(e),e.tag){case 1:return Jt(e.type)&&Nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),je(Yt),je(Mt),Am(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sm(e),null;case 13:if(je(He),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return je(He),null;case 4:return So(),null;case 10:return wm(e.type._context),null;case 22:case 23:return Mm(),null;case 24:return null;default:return null}}var Ou=!1,Ot=!1,mC=typeof WeakSet=="function"?WeakSet:Set,J=null;function to(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(t,e,r)}else n.current=null}function op(t,e,n){try{n()}catch(r){Qe(t,e,r)}}var k_=!1;function gC(t,e){if(zf=Cc,t=dT(),pm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=t,m=null;t:for(;;){for(var T;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(T=f.firstChild)!==null;)m=f,f=T;for(;;){if(f===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(T=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hf={focusedElem:t,selectionRange:n},Cc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var k=S.memoizedProps,b=S.memoizedState,A=e.stateNode,w=A.getSnapshotBeforeUpdate(e.elementType===e.type?k:Cn(e.type,k),b);A.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(O){Qe(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return S=k_,k_=!1,S}function Ba(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&op(e,n,s)}i=i.next}while(i!==r)}}function bh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ap(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lI(t){var e=t.alternate;e!==null&&(t.alternate=null,lI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gn],delete e[hl],delete e[Gf],delete e[XR],delete e[ZR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uI(t){return t.tag===5||t.tag===3||t.tag===4}function x_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xc));else if(r!==4&&(t=t.child,t!==null))for(lp(t,e,n),t=t.sibling;t!==null;)lp(t,e,n),t=t.sibling}function up(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(up(t,e,n),t=t.sibling;t!==null;)up(t,e,n),t=t.sibling}var Tt=null,Pn=!1;function Hr(t,e,n){for(n=n.child;n!==null;)cI(t,e,n),n=n.sibling}function cI(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Sh,n)}catch{}switch(n.tag){case 5:Ot||to(n,e);case 6:var r=Tt,i=Pn;Tt=null,Hr(t,e,n),Tt=r,Pn=i,Tt!==null&&(Pn?(t=Tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Tt.removeChild(n.stateNode));break;case 18:Tt!==null&&(Pn?(t=Tt,n=n.stateNode,t.nodeType===8?jd(t.parentNode,n):t.nodeType===1&&jd(t,n),ol(t)):jd(Tt,n.stateNode));break;case 4:r=Tt,i=Pn,Tt=n.stateNode.containerInfo,Pn=!0,Hr(t,e,n),Tt=r,Pn=i;break;case 0:case 11:case 14:case 15:if(!Ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&op(n,e,o),i=i.next}while(i!==r)}Hr(t,e,n);break;case 1:if(!Ot&&(to(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Qe(n,e,l)}Hr(t,e,n);break;case 21:Hr(t,e,n);break;case 22:n.mode&1?(Ot=(r=Ot)||n.memoizedState!==null,Hr(t,e,n),Ot=r):Hr(t,e,n);break;default:Hr(t,e,n)}}function N_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mC),e.forEach(function(r){var i=AC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Tt=l.stateNode,Pn=!1;break e;case 3:Tt=l.stateNode.containerInfo,Pn=!0;break e;case 4:Tt=l.stateNode.containerInfo,Pn=!0;break e}l=l.return}if(Tt===null)throw Error(H(160));cI(s,o,i),Tt=null,Pn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Qe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hI(e,t),e=e.sibling}function hI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),zn(t),r&4){try{Ba(3,t,t.return),bh(3,t)}catch(k){Qe(t,t.return,k)}try{Ba(5,t,t.return)}catch(k){Qe(t,t.return,k)}}break;case 1:Rn(e,t),zn(t),r&512&&n!==null&&to(n,n.return);break;case 5:if(Rn(e,t),zn(t),r&512&&n!==null&&to(n,n.return),t.flags&32){var i=t.stateNode;try{nl(i,"")}catch(k){Qe(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&DE(i,s),Df(l,o);var c=Df(l,s);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?UE(i,f):d==="dangerouslySetInnerHTML"?ME(i,f):d==="children"?nl(i,f):tm(i,d,f,c)}switch(l){case"input":Pf(i,s);break;case"textarea":OE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?oo(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?oo(i,!!s.multiple,s.defaultValue,!0):oo(i,!!s.multiple,s.multiple?[]:"",!1))}i[hl]=s}catch(k){Qe(t,t.return,k)}}break;case 6:if(Rn(e,t),zn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Qe(t,t.return,k)}}break;case 3:if(Rn(e,t),zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ol(e.containerInfo)}catch(k){Qe(t,t.return,k)}break;case 4:Rn(e,t),zn(t);break;case 13:Rn(e,t),zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Om=Xe())),r&4&&N_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||d,Rn(e,t),Ot=c):Rn(e,t),zn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(J=t,d=t.child;d!==null;){for(f=J=d;J!==null;){switch(m=J,T=m.child,m.tag){case 0:case 11:case 14:case 15:Ba(4,m,m.return);break;case 1:to(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(k){Qe(r,n,k)}}break;case 5:to(m,m.return);break;case 22:if(m.memoizedState!==null){D_(f);continue}}T!==null?(T.return=m,J=T):D_(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=VE("display",o))}catch(k){Qe(t,t.return,k)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(k){Qe(t,t.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Rn(e,t),zn(t),r&4&&N_(t);break;case 21:break;default:Rn(e,t),zn(t)}}function zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uI(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(nl(i,""),r.flags&=-33);var s=x_(t);up(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=x_(t);lp(t,l,o);break;default:throw Error(H(161))}}catch(u){Qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yC(t,e,n){J=t,dI(t)}function dI(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ou;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ot;l=Ou;var c=Ot;if(Ou=o,(Ot=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?O_(i):u!==null?(u.return=o,J=u):O_(i);for(;s!==null;)J=s,dI(s),s=s.sibling;J=i,Ou=l,Ot=c}b_(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):b_(t)}}function b_(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||bh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ot)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&g_(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}g_(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ol(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Ot||e.flags&512&&ap(e)}catch(m){Qe(e,e.return,m)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function D_(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function O_(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bh(4,e)}catch(u){Qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Qe(e,i,u)}}var s=e.return;try{ap(e)}catch(u){Qe(e,s,u)}break;case 5:var o=e.return;try{ap(e)}catch(u){Qe(e,o,u)}}}catch(u){Qe(e,e.return,u)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var _C=Math.ceil,$c=Or.ReactCurrentDispatcher,bm=Or.ReactCurrentOwner,vn=Or.ReactCurrentBatchConfig,Te=0,gt=null,rt=null,At=0,nn=0,no=bi(0),ct=0,yl=null,cs=0,Dh=0,Dm=0,za=null,Kt=null,Om=0,Ro=1/0,gr=null,Bc=!1,cp=null,fi=null,Lu=!1,ii=null,zc=0,Ha=0,hp=null,sc=-1,oc=0;function Bt(){return Te&6?Xe():sc!==-1?sc:sc=Xe()}function pi(t){return t.mode&1?Te&2&&At!==0?At&-At:tC.transition!==null?(oc===0&&(oc=YE()),oc):(t=xe,t!==0||(t=window.event,t=t===void 0?16:rT(t.type)),t):1}function Dn(t,e,n,r){if(50<Ha)throw Ha=0,hp=null,Error(H(185));Ml(t,n,r),(!(Te&2)||t!==gt)&&(t===gt&&(!(Te&2)&&(Dh|=n),ct===4&&Jr(t,At)),Xt(t,r),n===1&&Te===0&&!(e.mode&1)&&(Ro=Xe()+500,kh&&Di()))}function Xt(t,e){var n=t.callbackNode;tR(t,e);var r=Rc(t,t===gt?At:0);if(r===0)n!==null&&zy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zy(n),e===1)t.tag===0?eC(L_.bind(null,t)):TT(L_.bind(null,t)),YR(function(){!(Te&6)&&Di()}),n=null;else{switch(JE(r)){case 1:n=om;break;case 4:n=KE;break;case 16:n=Ac;break;case 536870912:n=QE;break;default:n=Ac}n=wI(n,fI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fI(t,e){if(sc=-1,oc=0,Te&6)throw Error(H(327));var n=t.callbackNode;if(ho()&&t.callbackNode!==n)return null;var r=Rc(t,t===gt?At:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hc(t,r);else{e=r;var i=Te;Te|=2;var s=mI();(gt!==t||At!==e)&&(gr=null,Ro=Xe()+500,is(t,e));do try{EC();break}catch(l){pI(t,l)}while(!0);vm(),$c.current=s,Te=i,rt!==null?e=0:(gt=null,At=0,e=ct)}if(e!==0){if(e===2&&(i=Uf(t),i!==0&&(r=i,e=dp(t,i))),e===1)throw n=yl,is(t,0),Jr(t,r),Xt(t,Xe()),n;if(e===6)Jr(t,r);else{if(i=t.current.alternate,!(r&30)&&!vC(i)&&(e=Hc(t,r),e===2&&(s=Uf(t),s!==0&&(r=s,e=dp(t,s))),e===1))throw n=yl,is(t,0),Jr(t,r),Xt(t,Xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Gi(t,Kt,gr);break;case 3:if(Jr(t,r),(r&130023424)===r&&(e=Om+500-Xe(),10<e)){if(Rc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qf(Gi.bind(null,t,Kt,gr),e);break}Gi(t,Kt,gr);break;case 4:if(Jr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_C(r/1960))-r,10<r){t.timeoutHandle=qf(Gi.bind(null,t,Kt,gr),r);break}Gi(t,Kt,gr);break;case 5:Gi(t,Kt,gr);break;default:throw Error(H(329))}}}return Xt(t,Xe()),t.callbackNode===n?fI.bind(null,t):null}function dp(t,e){var n=za;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=Hc(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&fp(e)),t}function fp(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function vC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!On(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jr(t,e){for(e&=~Dm,e&=~Dh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),r=1<<n;t[n]=-1,e&=~r}}function L_(t){if(Te&6)throw Error(H(327));ho();var e=Rc(t,0);if(!(e&1))return Xt(t,Xe()),null;var n=Hc(t,e);if(t.tag!==0&&n===2){var r=Uf(t);r!==0&&(e=r,n=dp(t,r))}if(n===1)throw n=yl,is(t,0),Jr(t,e),Xt(t,Xe()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gi(t,Kt,gr),Xt(t,Xe()),null}function Lm(t,e){var n=Te;Te|=1;try{return t(e)}finally{Te=n,Te===0&&(Ro=Xe()+500,kh&&Di())}}function hs(t){ii!==null&&ii.tag===0&&!(Te&6)&&ho();var e=Te;Te|=1;var n=vn.transition,r=xe;try{if(vn.transition=null,xe=1,t)return t()}finally{xe=r,vn.transition=n,Te=e,!(Te&6)&&Di()}}function Mm(){nn=no.current,je(no)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,QR(n)),rt!==null)for(n=rt.return;n!==null;){var r=n;switch(gm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Nc();break;case 3:So(),je(Yt),je(Mt),Am();break;case 5:Sm(r);break;case 4:So();break;case 13:je(He);break;case 19:je(He);break;case 10:wm(r.type._context);break;case 22:case 23:Mm()}n=n.return}if(gt=t,rt=t=mi(t.current,null),At=nn=e,ct=0,yl=null,Dm=Dh=cs=0,Kt=za=null,Zi!==null){for(e=0;e<Zi.length;e++)if(n=Zi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zi=null}return t}function pI(t,e){do{var n=rt;try{if(vm(),nc.current=jc,Fc){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fc=!1}if(us=0,pt=ut=We=null,$a=!1,pl=0,bm.current=null,n===null||n.return===null){ct=1,yl=e,rt=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=At,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=T_(o);if(T!==null){T.flags&=-257,I_(T,o,l,s,e),T.mode&1&&E_(s,c,e),e=T,u=c;var S=e.updateQueue;if(S===null){var k=new Set;k.add(u),e.updateQueue=k}else S.add(u);break e}else{if(!(e&1)){E_(s,c,e),Vm();break e}u=Error(H(426))}}else if(ze&&l.mode&1){var b=T_(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),I_(b,o,l,s,e),ym(Ao(u,l));break e}}s=u=Ao(u,l),ct!==4&&(ct=2),za===null?za=[s]:za.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var A=JT(s,u,e);m_(s,A);break e;case 1:l=u;var w=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(fi===null||!fi.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=XT(s,l,e);m_(s,O);break e}}s=s.return}while(s!==null)}yI(n)}catch($){e=$,rt===n&&n!==null&&(rt=n=n.return);continue}break}while(!0)}function mI(){var t=$c.current;return $c.current=jc,t===null?jc:t}function Vm(){(ct===0||ct===3||ct===2)&&(ct=4),gt===null||!(cs&268435455)&&!(Dh&268435455)||Jr(gt,At)}function Hc(t,e){var n=Te;Te|=2;var r=mI();(gt!==t||At!==e)&&(gr=null,is(t,e));do try{wC();break}catch(i){pI(t,i)}while(!0);if(vm(),Te=n,$c.current=r,rt!==null)throw Error(H(261));return gt=null,At=0,ct}function wC(){for(;rt!==null;)gI(rt)}function EC(){for(;rt!==null&&!q1();)gI(rt)}function gI(t){var e=vI(t.alternate,t,nn);t.memoizedProps=t.pendingProps,e===null?yI(t):rt=e,bm.current=null}function yI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=pC(n,e),n!==null){n.flags&=32767,rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ct=6,rt=null;return}}else if(n=fC(n,e,nn),n!==null){rt=n;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);ct===0&&(ct=5)}function Gi(t,e,n){var r=xe,i=vn.transition;try{vn.transition=null,xe=1,TC(t,e,n,r)}finally{vn.transition=i,xe=r}return null}function TC(t,e,n,r){do ho();while(ii!==null);if(Te&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nR(t,s),t===gt&&(rt=gt=null,At=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Lu||(Lu=!0,wI(Ac,function(){return ho(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=xe;xe=1;var l=Te;Te|=4,bm.current=null,gC(t,n),hI(n,t),BR(Hf),Cc=!!zf,Hf=zf=null,t.current=n,yC(n),G1(),Te=l,xe=o,vn.transition=s}else t.current=n;if(Lu&&(Lu=!1,ii=t,zc=i),s=t.pendingLanes,s===0&&(fi=null),Y1(n.stateNode),Xt(t,Xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bc)throw Bc=!1,t=cp,cp=null,t;return zc&1&&t.tag!==0&&ho(),s=t.pendingLanes,s&1?t===hp?Ha++:(Ha=0,hp=t):Ha=0,Di(),null}function ho(){if(ii!==null){var t=JE(zc),e=vn.transition,n=xe;try{if(vn.transition=null,xe=16>t?16:t,ii===null)var r=!1;else{if(t=ii,ii=null,zc=0,Te&6)throw Error(H(331));var i=Te;for(Te|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(J=c;J!==null;){var d=J;switch(d.tag){case 0:case 11:case 15:Ba(8,d,s)}var f=d.child;if(f!==null)f.return=d,J=f;else for(;J!==null;){d=J;var m=d.sibling,T=d.return;if(lI(d),d===c){J=null;break}if(m!==null){m.return=T,J=m;break}J=T}}}var S=s.alternate;if(S!==null){var k=S.child;if(k!==null){S.child=null;do{var b=k.sibling;k.sibling=null,k=b}while(k!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ba(9,s,s.return)}var A=s.sibling;if(A!==null){A.return=s.return,J=A;break e}J=s.return}}var w=t.current;for(J=w;J!==null;){o=J;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,J=R;else e:for(o=w;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bh(9,l)}}catch($){Qe(l,l.return,$)}if(l===o){J=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,J=O;break e}J=l.return}}if(Te=i,Di(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Sh,t)}catch{}r=!0}return r}finally{xe=n,vn.transition=e}}return!1}function M_(t,e,n){e=Ao(n,e),e=JT(t,e,1),t=di(t,e,1),e=Bt(),t!==null&&(Ml(t,1,e),Xt(t,e))}function Qe(t,e,n){if(t.tag===3)M_(t,t,n);else for(;e!==null;){if(e.tag===3){M_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fi===null||!fi.has(r))){t=Ao(n,t),t=XT(e,t,1),e=di(e,t,1),t=Bt(),e!==null&&(Ml(e,1,t),Xt(e,t));break}}e=e.return}}function IC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,gt===t&&(At&n)===n&&(ct===4||ct===3&&(At&130023424)===At&&500>Xe()-Om?is(t,0):Dm|=n),Xt(t,e)}function _I(t,e){e===0&&(t.mode&1?(e=Au,Au<<=1,!(Au&130023424)&&(Au=4194304)):e=1);var n=Bt();t=Rr(t,e),t!==null&&(Ml(t,e,n),Xt(t,n))}function SC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_I(t,n)}function AC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),_I(t,n)}var vI;vI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Yt.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,dC(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,ze&&e.flags&1048576&&IT(e,Oc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ic(t,e),t=e.pendingProps;var i=Eo(e,Mt.current);co(e,n),i=Cm(null,e,r,t,i,n);var s=Pm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jt(r)?(s=!0,bc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Tm(e),i.updater=Nh,e.stateNode=i,i._reactInternals=e,Zf(e,r,t,n),e=np(null,e,r,!0,s,n)):(e.tag=0,ze&&s&&mm(e),jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ic(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=CC(r),t=Cn(r,t),i){case 0:e=tp(null,e,r,t,n);break e;case 1:e=R_(null,e,r,t,n);break e;case 11:e=S_(null,e,r,t,n);break e;case 14:e=A_(null,e,r,Cn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),tp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),R_(t,e,r,i,n);case 3:e:{if(nI(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,kT(t,e),Vc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ao(Error(H(423)),e),e=C_(t,e,r,n,i);break e}else if(r!==i){i=Ao(Error(H(424)),e),e=C_(t,e,r,n,i);break e}else for(on=hi(e.stateNode.containerInfo.firstChild),ln=e,ze=!0,xn=null,n=CT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),r===i){e=Cr(t,e,n);break e}jt(t,e,r,n)}e=e.child}return e;case 5:return xT(e),t===null&&Yf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wf(r,i)?o=null:s!==null&&Wf(r,s)&&(e.flags|=32),tI(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Yf(e),null;case 13:return rI(t,e,n);case 4:return Im(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Io(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),S_(t,e,r,i,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Me(Lc,r._currentValue),r._currentValue=o,s!==null)if(On(s.value,o)){if(s.children===i.children&&!Yt.current){e=Cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Tr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Jf(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Jf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,co(e,n),i=wn(i),r=r(i),e.flags|=1,jt(t,e,r,n),e.child;case 14:return r=e.type,i=Cn(r,e.pendingProps),i=Cn(r.type,i),A_(t,e,r,i,n);case 15:return ZT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Cn(r,i),ic(t,e),e.tag=1,Jt(r)?(t=!0,bc(e)):t=!1,co(e,n),YT(e,r,i),Zf(e,r,i,n),np(null,e,r,!0,t,n);case 19:return iI(t,e,n);case 22:return eI(t,e,n)}throw Error(H(156,e.tag))};function wI(t,e){return GE(t,e)}function RC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,r){return new RC(t,e,n,r)}function Um(t){return t=t.prototype,!(!t||!t.isReactComponent)}function CC(t){if(typeof t=="function")return Um(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rm)return 11;if(t===im)return 14}return 2}function mi(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ac(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Um(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qs:return ss(n.children,i,s,e);case nm:o=8,i|=8;break;case If:return t=_n(12,n,e,i|2),t.elementType=If,t.lanes=s,t;case Sf:return t=_n(13,n,e,i),t.elementType=Sf,t.lanes=s,t;case Af:return t=_n(19,n,e,i),t.elementType=Af,t.lanes=s,t;case xE:return Oh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case PE:o=10;break e;case kE:o=9;break e;case rm:o=11;break e;case im:o=14;break e;case Kr:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=_n(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ss(t,e,n,r){return t=_n(7,t,r,e),t.lanes=n,t}function Oh(t,e,n,r){return t=_n(22,t,r,e),t.elementType=xE,t.lanes=n,t.stateNode={isHidden:!1},t}function Kd(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function Qd(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kd(0),this.expirationTimes=kd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fm(t,e,n,r,i,s,o,l,u){return t=new PC(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=_n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tm(s),t}function kC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function EI(t){if(!t)return Ii;t=t._reactInternals;e:{if(ws(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(Jt(n))return ET(t,n,e)}return e}function TI(t,e,n,r,i,s,o,l,u){return t=Fm(n,r,!0,t,i,s,o,l,u),t.context=EI(null),n=t.current,r=Bt(),i=pi(n),s=Tr(r,i),s.callback=e??null,di(n,s,i),t.current.lanes=i,Ml(t,i,r),Xt(t,r),t}function Lh(t,e,n,r){var i=e.current,s=Bt(),o=pi(i);return n=EI(n),e.context===null?e.context=n:e.pendingContext=n,e=Tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=di(i,e,o),t!==null&&(Dn(t,i,o,s),tc(t,i,o)),o}function Wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function V_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jm(t,e){V_(t,e),(t=t.alternate)&&V_(t,e)}function xC(){return null}var II=typeof reportError=="function"?reportError:function(t){console.error(t)};function $m(t){this._internalRoot=t}Mh.prototype.render=$m.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Lh(t,e,null,null)};Mh.prototype.unmount=$m.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hs(function(){Lh(null,t,null,null)}),e[Ar]=null}};function Mh(t){this._internalRoot=t}Mh.prototype.unstable_scheduleHydration=function(t){if(t){var e=eT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yr.length&&e!==0&&e<Yr[n].priority;n++);Yr.splice(n,0,t),n===0&&nT(t)}};function Bm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function U_(){}function NC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Wc(o);s.call(c)}}var o=TI(e,r,t,0,null,!1,!1,"",U_);return t._reactRootContainer=o,t[Ar]=o.current,ul(t.nodeType===8?t.parentNode:t),hs(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Wc(u);l.call(c)}}var u=Fm(t,0,!1,null,null,!1,!1,"",U_);return t._reactRootContainer=u,t[Ar]=u.current,ul(t.nodeType===8?t.parentNode:t),hs(function(){Lh(e,u,n,r)}),u}function Uh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Wc(o);l.call(u)}}Lh(e,o,t,i)}else o=NC(n,e,t,i,r);return Wc(o)}XE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Aa(e.pendingLanes);n!==0&&(am(e,n|1),Xt(e,Xe()),!(Te&6)&&(Ro=Xe()+500,Di()))}break;case 13:hs(function(){var r=Rr(t,1);if(r!==null){var i=Bt();Dn(r,t,1,i)}}),jm(t,1)}};lm=function(t){if(t.tag===13){var e=Rr(t,134217728);if(e!==null){var n=Bt();Dn(e,t,134217728,n)}jm(t,134217728)}};ZE=function(t){if(t.tag===13){var e=pi(t),n=Rr(t,e);if(n!==null){var r=Bt();Dn(n,t,e,r)}jm(t,e)}};eT=function(){return xe};tT=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};Lf=function(t,e,n){switch(e){case"input":if(Pf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ph(r);if(!i)throw Error(H(90));bE(r),Pf(r,i)}}}break;case"textarea":OE(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};$E=Lm;BE=hs;var bC={usingClientEntryPoint:!1,Events:[Ul,Ys,Ph,FE,jE,Lm]},ga={findFiberByHostInstance:Xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DC={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=WE(t),t===null?null:t.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||xC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Sh=Mu.inject(DC),Yn=Mu}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bC;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bm(e))throw Error(H(200));return kC(t,e,null,n)};hn.createRoot=function(t,e){if(!Bm(t))throw Error(H(299));var n=!1,r="",i=II;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fm(t,1,!1,null,null,n,!1,r,i),t[Ar]=e.current,ul(t.nodeType===8?t.parentNode:t),new $m(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=WE(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return hs(t)};hn.hydrate=function(t,e,n){if(!Vh(e))throw Error(H(200));return Uh(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Bm(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=II;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=TI(e,null,t,1,n??null,i,!1,s,o),t[Ar]=e.current,ul(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Mh(e)};hn.render=function(t,e,n){if(!Vh(e))throw Error(H(200));return Uh(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Vh(t))throw Error(H(40));return t._reactRootContainer?(hs(function(){Uh(null,null,t,!1,function(){t._reactRootContainer=null,t[Ar]=null})}),!0):!1};hn.unstable_batchedUpdates=Lm;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vh(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Uh(t,e,n,!1,r)};hn.version="18.3.1-next-f1338f8080-20240426";function SI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SI)}catch(t){console.error(t)}}SI(),SE.exports=hn;var zm=SE.exports;const OC=dE(zm),LC=hE({__proto__:null,default:OC},[zm]);var AI,F_=zm;AI=F_.createRoot,F_.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Be(){return Be=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Be.apply(this,arguments)}var nt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nt||(nt={}));const j_="popstate";function MC(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:l="",hash:u=""}=Lr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),_l("",{pathname:o,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),l="";if(o&&o.getAttribute("href")){let u=i.location.href,c=u.indexOf("#");l=c===-1?u:u.slice(0,c)}return l+"#"+(typeof s=="string"?s:fs(s))}function r(i,s){ds(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return UC(e,n,r,t)}function de(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ds(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VC(){return Math.random().toString(36).substr(2,8)}function $_(t,e){return{usr:t.state,key:t.key,idx:e}}function _l(t,e,n,r){return n===void 0&&(n=null),Be({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Lr(e):e,{state:n,key:e&&e.key||r||VC()})}function fs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Lr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function UC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=nt.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Be({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=nt.Pop;let b=d(),A=b==null?null:b-c;c=b,u&&u({action:l,location:k.location,delta:A})}function m(b,A){l=nt.Push;let w=_l(k.location,b,A);n&&n(w,b),c=d()+1;let R=$_(w,c),O=k.createHref(w);try{o.pushState(R,"",O)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;i.location.assign(O)}s&&u&&u({action:l,location:k.location,delta:1})}function T(b,A){l=nt.Replace;let w=_l(k.location,b,A);n&&n(w,b),c=d();let R=$_(w,c),O=k.createHref(w);o.replaceState(R,"",O),s&&u&&u({action:l,location:k.location,delta:0})}function S(b){let A=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof b=="string"?b:fs(b);return w=w.replace(/ $/,"%20"),de(A,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,A)}let k={get action(){return l},get location(){return t(i,o)},listen(b){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(j_,f),u=b,()=>{i.removeEventListener(j_,f),u=null}},createHref(b){return e(i,b)},createURL:S,encodeLocation(b){let A=S(b);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:m,replace:T,go(b){return o.go(b)}};return k}var ke;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ke||(ke={}));const FC=new Set(["lazy","caseSensitive","path","id","index","children"]);function jC(t){return t.index===!0}function qc(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],l=typeof i.id=="string"?i.id:o.join("-");if(de(i.index!==!0||!i.children,"Cannot specify children on an index route"),de(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),jC(i)){let u=Be({},i,e(i),{id:l});return r[l]=u,u}else{let u=Be({},i,e(i),{id:l,children:void 0});return r[l]=u,i.children&&(u.children=qc(i.children,e,o,r)),u}})}function Qi(t,e,n){return n===void 0&&(n="/"),lc(t,e,n,!1)}function lc(t,e,n,r){let i=typeof e=="string"?Lr(e):e,s=Pr(i.pathname||"/",n);if(s==null)return null;let o=RI(t);BC(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=ZC(s);l=JC(o[u],c,r)}return l}function $C(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function RI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(de(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Ir([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(de(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),RI(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:QC(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of CI(s.path))i(s,o,u)}),e}function CI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=CI(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function BC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:YC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zC=/^:[\w-]+$/,HC=3,WC=2,qC=1,GC=10,KC=-2,B_=t=>t==="*";function QC(t,e){let n=t.split("/"),r=n.length;return n.some(B_)&&(r+=KC),e&&(r+=WC),n.filter(i=>!B_(i)).reduce((i,s)=>i+(zC.test(s)?HC:s===""?qC:GC),r)}function YC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function JC(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=Gc({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Gc({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ir([s,f.pathname]),pathnameBase:nP(Ir([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=Ir([s,f.pathnameBase]))}return o}function Gc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=XC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:m,isOptional:T}=d;if(m==="*"){let k=l[f]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const S=l[f];return T&&!S?c[m]=void 0:c[m]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function XC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ds(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ZC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ds(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Pr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function eP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Lr(t):t;return{pathname:n?n.startsWith("/")?n:tP(n,e):e,search:rP(r),hash:iP(i)}}function tP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fh(t,e){let n=PI(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Lr(t):(i=Be({},t),de(!i.pathname||!i.pathname.includes("?"),Yd("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),Yd("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),Yd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}l=f>=0?e[f]:"/"}let u=eP(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),nP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,iP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Kc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function vl(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kI=["post","put","patch","delete"],sP=new Set(kI),oP=["get",...kI],aP=new Set(oP),lP=new Set([301,302,303,307,308]),uP=new Set([307,308]),Jd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},cP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ya={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Hm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hP=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),xI="remix-router-transitions";function dP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;de(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let x=t.detectErrorBoundary;i=D=>({hasErrorBoundary:x(D)})}else i=hP;let s={},o=qc(t.routes,i,void 0,s),l,u=t.basename||"/",c=t.dataStrategy||gP,d=t.patchRoutesOnNavigation,f=Be({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),m=null,T=new Set,S=null,k=null,b=null,A=t.hydrationData!=null,w=Qi(o,t.history.location,u),R=!1,O=null;if(w==null&&!d){let x=qt(404,{pathname:t.history.location.pathname}),{matches:D,route:M}=Z_(o);w=D,O={[M.id]:x}}w&&!t.hydrationData&&zi(w,o,t.history.location.pathname).active&&(w=null);let $;if(w)if(w.some(x=>x.route.lazy))$=!1;else if(!w.some(x=>x.route.loader))$=!0;else if(f.v7_partialHydration){let x=t.hydrationData?t.hydrationData.loaderData:null,D=t.hydrationData?t.hydrationData.errors:null;if(D){let M=w.findIndex(z=>D[z.route.id]!==void 0);$=w.slice(0,M+1).every(z=>!mp(z.route,x,D))}else $=w.every(M=>!mp(M.route,x,D))}else $=t.hydrationData!=null;else if($=!1,w=[],f.v7_partialHydration){let x=zi(null,o,t.history.location.pathname);x.active&&x.matches&&(R=!0,w=x.matches)}let F,g={historyAction:t.history.action,location:t.history.location,matches:w,initialized:$,navigation:Jd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||O,fetchers:new Map,blockers:new Map},y=nt.Pop,I=!1,E,P=!1,N=new Map,C=null,Ce=!1,yt=!1,Vn=[],Wt=new Set,W=new Map,ie=0,ue=-1,Ae=new Map,fe=new Set,Ne=new Map,Ut=new Map,Ye=new Set,_t=new Map,vt=new Map,Ps;function pd(){if(m=t.history.listen(x=>{let{action:D,location:M,delta:z}=x;if(Ps){Ps(),Ps=void 0;return}ds(vt.size===0||z!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let G=Zo({currentLocation:g.location,nextLocation:M,historyAction:D});if(G&&z!=null){let ee=new Promise(ae=>{Ps=ae});t.history.go(z*-1),ji(G,{state:"blocked",location:M,proceed(){ji(G,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),ee.then(()=>t.history.go(z))},reset(){let ae=new Map(g.blockers);ae.set(G,ya),ot({blockers:ae})}});return}return Fn(D,M)}),n){xP(e,N);let x=()=>NP(e,N);e.addEventListener("pagehide",x),C=()=>e.removeEventListener("pagehide",x)}return g.initialized||Fn(nt.Pop,g.location,{initialHydration:!0}),F}function ks(){m&&m(),C&&C(),T.clear(),E&&E.abort(),g.fetchers.forEach((x,D)=>bs(D)),g.blockers.forEach((x,D)=>Os(D))}function xs(x){return T.add(x),()=>T.delete(x)}function ot(x,D){D===void 0&&(D={}),g=Be({},g,x);let M=[],z=[];f.v7_fetcherPersist&&g.fetchers.forEach((G,ee)=>{G.state==="idle"&&(Ye.has(ee)?z.push(ee):M.push(ee))}),Ye.forEach(G=>{!g.fetchers.has(G)&&!W.has(G)&&z.push(G)}),[...T].forEach(G=>G(g,{deletedFetchers:z,viewTransitionOpts:D.viewTransitionOpts,flushSync:D.flushSync===!0})),f.v7_fetcherPersist?(M.forEach(G=>g.fetchers.delete(G)),z.forEach(G=>bs(G))):z.forEach(G=>Ye.delete(G))}function Un(x,D,M){var z,G;let{flushSync:ee}=M===void 0?{}:M,ae=g.actionData!=null&&g.navigation.formMethod!=null&&kn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((z=x.state)==null?void 0:z._isRedirect)!==!0,Z;D.actionData?Object.keys(D.actionData).length>0?Z=D.actionData:Z=null:ae?Z=g.actionData:Z=null;let X=D.loaderData?J_(g.loaderData,D.loaderData,D.matches||[],D.errors):g.loaderData,Y=g.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((he,et)=>Y.set(et,ya)));let te=I===!0||g.navigation.formMethod!=null&&kn(g.navigation.formMethod)&&((G=x.state)==null?void 0:G._isRedirect)!==!0;l&&(o=l,l=void 0),Ce||y===nt.Pop||(y===nt.Push?t.history.push(x,x.state):y===nt.Replace&&t.history.replace(x,x.state));let ce;if(y===nt.Pop){let he=N.get(g.location.pathname);he&&he.has(x.pathname)?ce={currentLocation:g.location,nextLocation:x}:N.has(x.pathname)&&(ce={currentLocation:x,nextLocation:g.location})}else if(P){let he=N.get(g.location.pathname);he?he.add(x.pathname):(he=new Set([x.pathname]),N.set(g.location.pathname,he)),ce={currentLocation:g.location,nextLocation:x}}ot(Be({},D,{actionData:Z,loaderData:X,historyAction:y,location:x,initialized:!0,navigation:Jd,revalidation:"idle",restoreScrollPosition:Bi(x,D.matches||g.matches),preventScrollReset:te,blockers:Y}),{viewTransitionOpts:ce,flushSync:ee===!0}),y=nt.Pop,I=!1,P=!1,Ce=!1,yt=!1,Vn=[]}async function Ns(x,D){if(typeof x=="number"){t.history.go(x);return}let M=pp(g.location,g.matches,u,f.v7_prependBasename,x,f.v7_relativeSplatPath,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:z,submission:G,error:ee}=z_(f.v7_normalizeFormMethod,!1,M,D),ae=g.location,Z=_l(g.location,z,D&&D.state);Z=Be({},Z,t.history.encodeLocation(Z));let X=D&&D.replace!=null?D.replace:void 0,Y=nt.Push;X===!0?Y=nt.Replace:X===!1||G!=null&&kn(G.formMethod)&&G.formAction===g.location.pathname+g.location.search&&(Y=nt.Replace);let te=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,ce=(D&&D.flushSync)===!0,he=Zo({currentLocation:ae,nextLocation:Z,historyAction:Y});if(he){ji(he,{state:"blocked",location:Z,proceed(){ji(he,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),Ns(x,D)},reset(){let et=new Map(g.blockers);et.set(he,ya),ot({blockers:et})}});return}return await Fn(Y,Z,{submission:G,pendingError:ee,preventScrollReset:te,replace:D&&D.replace,enableViewTransition:D&&D.viewTransition,flushSync:ce})}function Go(){if(lt(),ot({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Fn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Fn(y||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:P===!0})}}async function Fn(x,D,M){E&&E.abort(),E=null,y=x,Ce=(M&&M.startUninterruptedRevalidation)===!0,ou(g.location,g.matches),I=(M&&M.preventScrollReset)===!0,P=(M&&M.enableViewTransition)===!0;let z=l||o,G=M&&M.overrideNavigation,ee=M!=null&&M.initialHydration&&g.matches&&g.matches.length>0&&!R?g.matches:Qi(z,D,u),ae=(M&&M.flushSync)===!0;if(ee&&g.initialized&&!yt&&TP(g.location,D)&&!(M&&M.submission&&kn(M.submission.formMethod))){Un(D,{matches:ee},{flushSync:ae});return}let Z=zi(ee,z,D.pathname);if(Z.active&&Z.matches&&(ee=Z.matches),!ee){let{error:Pe,notFoundMatches:_e,route:Le}=cr(D.pathname);Un(D,{matches:_e,loaderData:{},errors:{[Le.id]:Pe}},{flushSync:ae});return}E=new AbortController;let X=js(t.history,D,E.signal,M&&M.submission),Y;if(M&&M.pendingError)Y=[Yi(ee).route.id,{type:ke.error,error:M.pendingError}];else if(M&&M.submission&&kn(M.submission.formMethod)){let Pe=await md(X,D,M.submission,ee,Z.active,{replace:M.replace,flushSync:ae});if(Pe.shortCircuited)return;if(Pe.pendingActionResult){let[_e,Le]=Pe.pendingActionResult;if(rn(Le)&&vl(Le.error)&&Le.error.status===404){E=null,Un(D,{matches:Pe.matches,loaderData:{},errors:{[_e]:Le.error}});return}}ee=Pe.matches||ee,Y=Pe.pendingActionResult,G=Xd(D,M.submission),ae=!1,Z.active=!1,X=js(t.history,X.url,X.signal)}let{shortCircuited:te,matches:ce,loaderData:he,errors:et}=await gd(X,D,ee,Z.active,G,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,ae,Y);te||(E=null,Un(D,Be({matches:ce||ee},X_(Y),{loaderData:he,errors:et})))}async function md(x,D,M,z,G,ee){ee===void 0&&(ee={}),lt();let ae=PP(D,M);if(ot({navigation:ae},{flushSync:ee.flushSync===!0}),G){let Y=await $n(z,D.pathname,x.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){let te=Yi(Y.partialMatches).route.id;return{matches:Y.partialMatches,pendingActionResult:[te,{type:ke.error,error:Y.error}]}}else if(Y.matches)z=Y.matches;else{let{notFoundMatches:te,error:ce,route:he}=cr(D.pathname);return{matches:te,pendingActionResult:[he.id,{type:ke.error,error:ce}]}}}let Z,X=Ca(z,D);if(!X.route.action&&!X.route.lazy)Z={type:ke.error,error:qt(405,{method:x.method,pathname:D.pathname,routeId:X.route.id})};else if(Z=(await Ur("action",g,x,[X],z,null))[X.route.id],x.signal.aborted)return{shortCircuited:!0};if(ts(Z)){let Y;return ee&&ee.replace!=null?Y=ee.replace:Y=K_(Z.response.headers.get("Location"),new URL(x.url),u)===g.location.pathname+g.location.search,await Tn(x,Z,!0,{submission:M,replace:Y}),{shortCircuited:!0}}if(si(Z))throw qt(400,{type:"defer-action"});if(rn(Z)){let Y=Yi(z,X.route.id);return(ee&&ee.replace)!==!0&&(y=nt.Push),{matches:z,pendingActionResult:[Y.route.id,Z]}}return{matches:z,pendingActionResult:[X.route.id,Z]}}async function gd(x,D,M,z,G,ee,ae,Z,X,Y,te){let ce=G||Xd(D,ee),he=ee||ae||tv(ce),et=!Ce&&(!f.v7_partialHydration||!X);if(z){if(et){let Ve=Ko(te);ot(Be({navigation:ce},Ve!==void 0?{actionData:Ve}:{}),{flushSync:Y})}let we=await $n(M,D.pathname,x.signal);if(we.type==="aborted")return{shortCircuited:!0};if(we.type==="error"){let Ve=Yi(we.partialMatches).route.id;return{matches:we.partialMatches,loaderData:{},errors:{[Ve]:we.error}}}else if(we.matches)M=we.matches;else{let{error:Ve,notFoundMatches:fr,route:$r}=cr(D.pathname);return{matches:fr,loaderData:{},errors:{[$r.id]:Ve}}}}let Pe=l||o,[_e,Le]=W_(t.history,g,M,he,D,f.v7_partialHydration&&X===!0,f.v7_skipActionErrorRevalidation,yt,Vn,Wt,Ye,Ne,fe,Pe,u,te);if($i(we=>!(M&&M.some(Ve=>Ve.route.id===we))||_e&&_e.some(Ve=>Ve.route.id===we)),ue=++ie,_e.length===0&&Le.length===0){let we=Ds();return Un(D,Be({matches:M,loaderData:{},errors:te&&rn(te[1])?{[te[0]]:te[1].error}:null},X_(te),we?{fetchers:new Map(g.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(et){let we={};if(!z){we.navigation=ce;let Ve=Ko(te);Ve!==void 0&&(we.actionData=Ve)}Le.length>0&&(we.fetchers=Qo(Le)),ot(we,{flushSync:Y})}Le.forEach(we=>{In(we.key),we.controller&&W.set(we.key,we.controller)});let hr=()=>Le.forEach(we=>In(we.key));E&&E.signal.addEventListener("abort",hr);let{loaderResults:Fr,fetcherResults:Sn}=await at(g,M,_e,Le,x);if(x.signal.aborted)return{shortCircuited:!0};E&&E.signal.removeEventListener("abort",hr),Le.forEach(we=>W.delete(we.key));let Ft=Vu(Fr);if(Ft)return await Tn(x,Ft.result,!0,{replace:Z}),{shortCircuited:!0};if(Ft=Vu(Sn),Ft)return fe.add(Ft.key),await Tn(x,Ft.result,!0,{replace:Z}),{shortCircuited:!0};let{loaderData:Ls,errors:dr}=Y_(g,M,Fr,te,Le,Sn,_t);_t.forEach((we,Ve)=>{we.subscribe(fr=>{(fr||we.done)&&_t.delete(Ve)})}),f.v7_partialHydration&&X&&g.errors&&(dr=Be({},g.errors,dr));let en=Ds(),pn=su(ue),jr=en||pn||Le.length>0;return Be({matches:M,loaderData:Ls,errors:dr},jr?{fetchers:new Map(g.fetchers)}:{})}function Ko(x){if(x&&!rn(x[1]))return{[x[0]]:x[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function Qo(x){return x.forEach(D=>{let M=g.fetchers.get(D.key),z=_a(void 0,M?M.data:void 0);g.fetchers.set(D.key,z)}),new Map(g.fetchers)}function iu(x,D,M,z){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");In(x);let G=(z&&z.flushSync)===!0,ee=l||o,ae=pp(g.location,g.matches,u,f.v7_prependBasename,M,f.v7_relativeSplatPath,D,z==null?void 0:z.relative),Z=Qi(ee,ae,u),X=zi(Z,ee,ae);if(X.active&&X.matches&&(Z=X.matches),!Z){fn(x,D,qt(404,{pathname:ae}),{flushSync:G});return}let{path:Y,submission:te,error:ce}=z_(f.v7_normalizeFormMethod,!0,ae,z);if(ce){fn(x,D,ce,{flushSync:G});return}let he=Ca(Z,Y),et=(z&&z.preventScrollReset)===!0;if(te&&kn(te.formMethod)){yd(x,D,Y,he,Z,X.active,G,et,te);return}Ne.set(x,{routeId:D,path:Y}),Yo(x,D,Y,he,Z,X.active,G,et,te)}async function yd(x,D,M,z,G,ee,ae,Z,X){lt(),Ne.delete(x);function Y($e){if(!$e.route.action&&!$e.route.lazy){let Bn=qt(405,{method:X.formMethod,pathname:M,routeId:D});return fn(x,D,Bn,{flushSync:ae}),!0}return!1}if(!ee&&Y(z))return;let te=g.fetchers.get(x);Zt(x,kP(X,te),{flushSync:ae});let ce=new AbortController,he=js(t.history,M,ce.signal,X);if(ee){let $e=await $n(G,new URL(he.url).pathname,he.signal,x);if($e.type==="aborted")return;if($e.type==="error"){fn(x,D,$e.error,{flushSync:ae});return}else if($e.matches){if(G=$e.matches,z=Ca(G,M),Y(z))return}else{fn(x,D,qt(404,{pathname:M}),{flushSync:ae});return}}W.set(x,ce);let et=ie,_e=(await Ur("action",g,he,[z],G,x))[z.route.id];if(he.signal.aborted){W.get(x)===ce&&W.delete(x);return}if(f.v7_fetcherPersist&&Ye.has(x)){if(ts(_e)||rn(_e)){Zt(x,Gr(void 0));return}}else{if(ts(_e))if(W.delete(x),ue>et){Zt(x,Gr(void 0));return}else return fe.add(x),Zt(x,_a(X)),Tn(he,_e,!1,{fetcherSubmission:X,preventScrollReset:Z});if(rn(_e)){fn(x,D,_e.error);return}}if(si(_e))throw qt(400,{type:"defer-action"});let Le=g.navigation.location||g.location,hr=js(t.history,Le,ce.signal),Fr=l||o,Sn=g.navigation.state!=="idle"?Qi(Fr,g.navigation.location,u):g.matches;de(Sn,"Didn't find any matches after fetcher action");let Ft=++ie;Ae.set(x,Ft);let Ls=_a(X,_e.data);g.fetchers.set(x,Ls);let[dr,en]=W_(t.history,g,Sn,X,Le,!1,f.v7_skipActionErrorRevalidation,yt,Vn,Wt,Ye,Ne,fe,Fr,u,[z.route.id,_e]);en.filter($e=>$e.key!==x).forEach($e=>{let Bn=$e.key,ta=g.fetchers.get(Bn),lu=_a(void 0,ta?ta.data:void 0);g.fetchers.set(Bn,lu),In(Bn),$e.controller&&W.set(Bn,$e.controller)}),ot({fetchers:new Map(g.fetchers)});let pn=()=>en.forEach($e=>In($e.key));ce.signal.addEventListener("abort",pn);let{loaderResults:jr,fetcherResults:we}=await at(g,Sn,dr,en,hr);if(ce.signal.aborted)return;ce.signal.removeEventListener("abort",pn),Ae.delete(x),W.delete(x),en.forEach($e=>W.delete($e.key));let Ve=Vu(jr);if(Ve)return Tn(hr,Ve.result,!1,{preventScrollReset:Z});if(Ve=Vu(we),Ve)return fe.add(Ve.key),Tn(hr,Ve.result,!1,{preventScrollReset:Z});let{loaderData:fr,errors:$r}=Y_(g,Sn,jr,void 0,en,we,_t);if(g.fetchers.has(x)){let $e=Gr(_e.data);g.fetchers.set(x,$e)}su(Ft),g.navigation.state==="loading"&&Ft>ue?(de(y,"Expected pending action"),E&&E.abort(),Un(g.navigation.location,{matches:Sn,loaderData:fr,errors:$r,fetchers:new Map(g.fetchers)})):(ot({errors:$r,loaderData:J_(g.loaderData,fr,Sn,$r),fetchers:new Map(g.fetchers)}),yt=!1)}async function Yo(x,D,M,z,G,ee,ae,Z,X){let Y=g.fetchers.get(x);Zt(x,_a(X,Y?Y.data:void 0),{flushSync:ae});let te=new AbortController,ce=js(t.history,M,te.signal);if(ee){let _e=await $n(G,new URL(ce.url).pathname,ce.signal,x);if(_e.type==="aborted")return;if(_e.type==="error"){fn(x,D,_e.error,{flushSync:ae});return}else if(_e.matches)G=_e.matches,z=Ca(G,M);else{fn(x,D,qt(404,{pathname:M}),{flushSync:ae});return}}W.set(x,te);let he=ie,Pe=(await Ur("loader",g,ce,[z],G,x))[z.route.id];if(si(Pe)&&(Pe=await Wm(Pe,ce.signal,!0)||Pe),W.get(x)===te&&W.delete(x),!ce.signal.aborted){if(Ye.has(x)){Zt(x,Gr(void 0));return}if(ts(Pe))if(ue>he){Zt(x,Gr(void 0));return}else{fe.add(x),await Tn(ce,Pe,!1,{preventScrollReset:Z});return}if(rn(Pe)){fn(x,D,Pe.error);return}de(!si(Pe),"Unhandled fetcher deferred data"),Zt(x,Gr(Pe.data))}}async function Tn(x,D,M,z){let{submission:G,fetcherSubmission:ee,preventScrollReset:ae,replace:Z}=z===void 0?{}:z;D.response.headers.has("X-Remix-Revalidate")&&(yt=!0);let X=D.response.headers.get("Location");de(X,"Expected a Location header on the redirect Response"),X=K_(X,new URL(x.url),u);let Y=_l(g.location,X,{_isRedirect:!0});if(n){let _e=!1;if(D.response.headers.has("X-Remix-Reload-Document"))_e=!0;else if(Hm.test(X)){const Le=t.history.createURL(X);_e=Le.origin!==e.location.origin||Pr(Le.pathname,u)==null}if(_e){Z?e.location.replace(X):e.location.assign(X);return}}E=null;let te=Z===!0||D.response.headers.has("X-Remix-Replace")?nt.Replace:nt.Push,{formMethod:ce,formAction:he,formEncType:et}=g.navigation;!G&&!ee&&ce&&he&&et&&(G=tv(g.navigation));let Pe=G||ee;if(uP.has(D.response.status)&&Pe&&kn(Pe.formMethod))await Fn(te,Y,{submission:Be({},Pe,{formAction:X}),preventScrollReset:ae||I,enableViewTransition:M?P:void 0});else{let _e=Xd(Y,G);await Fn(te,Y,{overrideNavigation:_e,fetcherSubmission:ee,preventScrollReset:ae||I,enableViewTransition:M?P:void 0})}}async function Ur(x,D,M,z,G,ee){let ae,Z={};try{ae=await yP(c,x,D,M,z,G,ee,s,i)}catch(X){return z.forEach(Y=>{Z[Y.route.id]={type:ke.error,error:X}}),Z}for(let[X,Y]of Object.entries(ae))if(IP(Y)){let te=Y.result;Z[X]={type:ke.redirect,response:wP(te,M,X,G,u,f.v7_relativeSplatPath)}}else Z[X]=await vP(Y);return Z}async function at(x,D,M,z,G){let ee=x.matches,ae=Ur("loader",x,G,M,D,null),Z=Promise.all(z.map(async te=>{if(te.matches&&te.match&&te.controller){let he=(await Ur("loader",x,js(t.history,te.path,te.controller.signal),[te.match],te.matches,te.key))[te.match.route.id];return{[te.key]:he}}else return Promise.resolve({[te.key]:{type:ke.error,error:qt(404,{pathname:te.path})}})})),X=await ae,Y=(await Z).reduce((te,ce)=>Object.assign(te,ce),{});return await Promise.all([RP(D,X,G.signal,ee,x.loaderData),CP(D,Y,z)]),{loaderResults:X,fetcherResults:Y}}function lt(){yt=!0,Vn.push(...$i()),Ne.forEach((x,D)=>{W.has(D)&&Wt.add(D),In(D)})}function Zt(x,D,M){M===void 0&&(M={}),g.fetchers.set(x,D),ot({fetchers:new Map(g.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function fn(x,D,M,z){z===void 0&&(z={});let G=Yi(g.matches,D);bs(x),ot({errors:{[G.route.id]:M},fetchers:new Map(g.fetchers)},{flushSync:(z&&z.flushSync)===!0})}function Jo(x){return Ut.set(x,(Ut.get(x)||0)+1),Ye.has(x)&&Ye.delete(x),g.fetchers.get(x)||cP}function bs(x){let D=g.fetchers.get(x);W.has(x)&&!(D&&D.state==="loading"&&Ae.has(x))&&In(x),Ne.delete(x),Ae.delete(x),fe.delete(x),f.v7_fetcherPersist&&Ye.delete(x),Wt.delete(x),g.fetchers.delete(x)}function Fi(x){let D=(Ut.get(x)||0)-1;D<=0?(Ut.delete(x),Ye.add(x),f.v7_fetcherPersist||bs(x)):Ut.set(x,D),ot({fetchers:new Map(g.fetchers)})}function In(x){let D=W.get(x);D&&(D.abort(),W.delete(x))}function Xo(x){for(let D of x){let M=Jo(D),z=Gr(M.data);g.fetchers.set(D,z)}}function Ds(){let x=[],D=!1;for(let M of fe){let z=g.fetchers.get(M);de(z,"Expected fetcher: "+M),z.state==="loading"&&(fe.delete(M),x.push(M),D=!0)}return Xo(x),D}function su(x){let D=[];for(let[M,z]of Ae)if(z<x){let G=g.fetchers.get(M);de(G,"Expected fetcher: "+M),G.state==="loading"&&(In(M),Ae.delete(M),D.push(M))}return Xo(D),D.length>0}function _d(x,D){let M=g.blockers.get(x)||ya;return vt.get(x)!==D&&vt.set(x,D),M}function Os(x){g.blockers.delete(x),vt.delete(x)}function ji(x,D){let M=g.blockers.get(x)||ya;de(M.state==="unblocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="blocked"||M.state==="blocked"&&D.state==="proceeding"||M.state==="blocked"&&D.state==="unblocked"||M.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+D.state);let z=new Map(g.blockers);z.set(x,D),ot({blockers:z})}function Zo(x){let{currentLocation:D,nextLocation:M,historyAction:z}=x;if(vt.size===0)return;vt.size>1&&ds(!1,"A router only supports one blocker at a time");let G=Array.from(vt.entries()),[ee,ae]=G[G.length-1],Z=g.blockers.get(ee);if(!(Z&&Z.state==="proceeding")&&ae({currentLocation:D,nextLocation:M,historyAction:z}))return ee}function cr(x){let D=qt(404,{pathname:x}),M=l||o,{matches:z,route:G}=Z_(M);return $i(),{notFoundMatches:z,route:G,error:D}}function $i(x){let D=[];return _t.forEach((M,z)=>{(!x||x(z))&&(M.cancel(),D.push(z),_t.delete(z))}),D}function ea(x,D,M){if(S=x,b=D,k=M||null,!A&&g.navigation===Jd){A=!0;let z=Bi(g.location,g.matches);z!=null&&ot({restoreScrollPosition:z})}return()=>{S=null,b=null,k=null}}function jn(x,D){return k&&k(x,D.map(z=>$C(z,g.loaderData)))||x.key}function ou(x,D){if(S&&b){let M=jn(x,D);S[M]=b()}}function Bi(x,D){if(S){let M=jn(x,D),z=S[M];if(typeof z=="number")return z}return null}function zi(x,D,M){if(d)if(x){if(Object.keys(x[0].params).length>0)return{active:!0,matches:lc(D,M,u,!0)}}else return{active:!0,matches:lc(D,M,u,!0)||[]};return{active:!1,matches:null}}async function $n(x,D,M,z){if(!d)return{type:"success",matches:x};let G=x;for(;;){let ee=l==null,ae=l||o,Z=s;try{await d({signal:M,path:D,matches:G,fetcherKey:z,patch:(te,ce)=>{M.aborted||G_(te,ce,ae,Z,i)}})}catch(te){return{type:"error",error:te,partialMatches:G}}finally{ee&&!M.aborted&&(o=[...o])}if(M.aborted)return{type:"aborted"};let X=Qi(ae,D,u);if(X)return{type:"success",matches:X};let Y=lc(ae,D,u,!0);if(!Y||G.length===Y.length&&G.every((te,ce)=>te.route.id===Y[ce].route.id))return{type:"success",matches:null};G=Y}}function au(x){s={},l=qc(x,i,void 0,s)}function wt(x,D){let M=l==null;G_(x,D,l||o,s,i),M&&(o=[...o],ot({}))}return F={get basename(){return u},get future(){return f},get state(){return g},get routes(){return o},get window(){return e},initialize:pd,subscribe:xs,enableScrollRestoration:ea,navigate:Ns,fetch:iu,revalidate:Go,createHref:x=>t.history.createHref(x),encodeLocation:x=>t.history.encodeLocation(x),getFetcher:Jo,deleteFetcher:Fi,dispose:ks,getBlocker:_d,deleteBlocker:Os,patchRoutes:wt,_internalFetchControllers:W,_internalActiveDeferreds:_t,_internalSetRoutes:au},F}function fP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function pp(t,e,n,r,i,s,o,l){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let d=jh(i||".",Fh(u,s),Pr(t.pathname,n)||t.pathname,l==="path");if(i==null&&(d.search=t.search,d.hash=t.hash),(i==null||i===""||i===".")&&c){let f=qm(d.search);if(c.route.index&&!f)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let m=new URLSearchParams(d.search),T=m.getAll("index");m.delete("index"),T.filter(k=>k).forEach(k=>m.append("index",k));let S=m.toString();d.search=S?"?"+S:""}}return r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Ir([n,d.pathname])),fs(d)}function z_(t,e,n,r){if(!r||!fP(r))return{path:n};if(r.formMethod&&!AP(r.formMethod))return{path:n,error:qt(405,{method:r.formMethod})};let i=()=>({path:n,error:qt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),l=DI(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!kn(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((T,S)=>{let[k,b]=S;return""+T+k+"="+b+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!kn(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:l,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}de(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=gp(r.formData),c=r.formData;else if(r.body instanceof FormData)u=gp(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=Q_(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=Q_(u)}catch{return i()}let d={formMethod:o,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(kn(d.formMethod))return{path:n,submission:d};let f=Lr(n);return e&&f.search&&qm(f.search)&&u.append("index",""),f.search="?"+u,{path:fs(f),submission:d}}function H_(t,e,n){n===void 0&&(n=!1);let r=t.findIndex(i=>i.route.id===e);return r>=0?t.slice(0,n?r+1:r):t}function W_(t,e,n,r,i,s,o,l,u,c,d,f,m,T,S,k){let b=k?rn(k[1])?k[1].error:k[1].data:void 0,A=t.createURL(e.location),w=t.createURL(i),R=n;s&&e.errors?R=H_(n,Object.keys(e.errors)[0],!0):k&&rn(k[1])&&(R=H_(n,k[0]));let O=k?k[1].statusCode:void 0,$=o&&O&&O>=400,F=R.filter((y,I)=>{let{route:E}=y;if(E.lazy)return!0;if(E.loader==null)return!1;if(s)return mp(E,e.loaderData,e.errors);if(pP(e.loaderData,e.matches[I],y)||u.some(C=>C===y.route.id))return!0;let P=e.matches[I],N=y;return q_(y,Be({currentUrl:A,currentParams:P.params,nextUrl:w,nextParams:N.params},r,{actionResult:b,actionStatus:O,defaultShouldRevalidate:$?!1:l||A.pathname+A.search===w.pathname+w.search||A.search!==w.search||NI(P,N)}))}),g=[];return f.forEach((y,I)=>{if(s||!n.some(Ce=>Ce.route.id===y.routeId)||d.has(I))return;let E=Qi(T,y.path,S);if(!E){g.push({key:I,routeId:y.routeId,path:y.path,matches:null,match:null,controller:null});return}let P=e.fetchers.get(I),N=Ca(E,y.path),C=!1;m.has(I)?C=!1:c.has(I)?(c.delete(I),C=!0):P&&P.state!=="idle"&&P.data===void 0?C=l:C=q_(N,Be({currentUrl:A,currentParams:e.matches[e.matches.length-1].params,nextUrl:w,nextParams:n[n.length-1].params},r,{actionResult:b,actionStatus:O,defaultShouldRevalidate:$?!1:l})),C&&g.push({key:I,routeId:y.routeId,path:y.path,matches:E,match:N,controller:new AbortController})}),[F,g]}function mp(t,e,n){if(t.lazy)return!0;if(!t.loader)return!1;let r=e!=null&&e[t.id]!==void 0,i=n!=null&&n[t.id]!==void 0;return!r&&i?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!r&&!i}function pP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function NI(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function q_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function G_(t,e,n,r,i){var s;let o;if(t){let c=r[t];de(c,"No route found to patch children into: routeId = "+t),c.children||(c.children=[]),o=c.children}else o=n;let l=e.filter(c=>!o.some(d=>bI(c,d))),u=qc(l,i,[t||"_","patch",String(((s=o)==null?void 0:s.length)||"0")],r);o.push(...u)}function bI(t,e){return"id"in t&&"id"in e&&t.id===e.id?!0:t.index===e.index&&t.path===e.path&&t.caseSensitive===e.caseSensitive?(!t.children||t.children.length===0)&&(!e.children||e.children.length===0)?!0:t.children.every((n,r)=>{var i;return(i=e.children)==null?void 0:i.some(s=>bI(n,s))}):!1}async function mP(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];de(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";ds(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!FC.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Be({},e(i),{lazy:void 0}))}async function gP(t){let{matches:e}=t,n=e.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,s,o)=>Object.assign(i,{[n[o].route.id]:s}),{})}async function yP(t,e,n,r,i,s,o,l,u,c){let d=s.map(T=>T.route.lazy?mP(T.route,u,l):void 0),f=s.map((T,S)=>{let k=d[S],b=i.some(w=>w.route.id===T.route.id);return Be({},T,{shouldLoad:b,resolve:async w=>(w&&r.method==="GET"&&(T.route.lazy||T.route.loader)&&(b=!0),b?_P(e,r,T,k,w,c):Promise.resolve({type:ke.data,result:void 0}))})}),m=await t({matches:f,request:r,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(d)}catch{}return m}async function _P(t,e,n,r,i,s){let o,l,u=c=>{let d,f=new Promise((S,k)=>d=k);l=()=>d(),e.signal.addEventListener("abort",l);let m=S=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:s},...S!==void 0?[S]:[]),T=(async()=>{try{return{type:"data",result:await(i?i(k=>m(k)):m())}}catch(S){return{type:"error",result:S}}})();return Promise.race([T,f])};try{let c=n.route[t];if(r)if(c){let d,[f]=await Promise.all([u(c).catch(m=>{d=m}),r]);if(d!==void 0)throw d;o=f}else if(await r,c=n.route[t],c)o=await u(c);else if(t==="action"){let d=new URL(e.url),f=d.pathname+d.search;throw qt(405,{method:e.method,pathname:f,routeId:n.route.id})}else return{type:ke.data,result:void 0};else if(c)o=await u(c);else{let d=new URL(e.url),f=d.pathname+d.search;throw qt(404,{pathname:f})}de(o.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:ke.error,result:c}}finally{l&&e.signal.removeEventListener("abort",l)}return o}async function vP(t){let{result:e,type:n}=t;if(OI(e)){let f;try{let m=e.headers.get("Content-Type");m&&/\bapplication\/json\b/.test(m)?e.body==null?f=null:f=await e.json():f=await e.text()}catch(m){return{type:ke.error,error:m}}return n===ke.error?{type:ke.error,error:new Kc(e.status,e.statusText,f),statusCode:e.status,headers:e.headers}:{type:ke.data,data:f,statusCode:e.status,headers:e.headers}}if(n===ke.error){if(ev(e)){var r,i;if(e.data instanceof Error){var s,o;return{type:ke.error,error:e.data,statusCode:(s=e.init)==null?void 0:s.status,headers:(o=e.init)!=null&&o.headers?new Headers(e.init.headers):void 0}}return{type:ke.error,error:new Kc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data),statusCode:vl(e)?e.status:void 0,headers:(i=e.init)!=null&&i.headers?new Headers(e.init.headers):void 0}}return{type:ke.error,error:e,statusCode:vl(e)?e.status:void 0}}if(SP(e)){var l,u;return{type:ke.deferred,deferredData:e,statusCode:(l=e.init)==null?void 0:l.status,headers:((u=e.init)==null?void 0:u.headers)&&new Headers(e.init.headers)}}if(ev(e)){var c,d;return{type:ke.data,data:e.data,statusCode:(c=e.init)==null?void 0:c.status,headers:(d=e.init)!=null&&d.headers?new Headers(e.init.headers):void 0}}return{type:ke.data,data:e}}function wP(t,e,n,r,i,s){let o=t.headers.get("Location");if(de(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Hm.test(o)){let l=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=pp(new URL(e.url),l,i,!0,o,s),t.headers.set("Location",o)}return t}function K_(t,e,n){if(Hm.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Pr(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function js(t,e,n,r){let i=t.createURL(DI(e)).toString(),s={signal:n};if(r&&kn(r.formMethod)){let{formMethod:o,formEncType:l}=r;s.method=o.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=gp(r.formData):s.body=r.formData}return new Request(i,s)}function gp(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Q_(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function EP(t,e,n,r,i){let s={},o=null,l,u=!1,c={},d=n&&rn(n[1])?n[1].error:void 0;return t.forEach(f=>{if(!(f.route.id in e))return;let m=f.route.id,T=e[m];if(de(!ts(T),"Cannot handle redirect results in processLoaderData"),rn(T)){let S=T.error;d!==void 0&&(S=d,d=void 0),o=o||{};{let k=Yi(t,m);o[k.route.id]==null&&(o[k.route.id]=S)}s[m]=void 0,u||(u=!0,l=vl(T.error)?T.error.status:500),T.headers&&(c[m]=T.headers)}else si(T)?(r.set(m,T.deferredData),s[m]=T.deferredData.data,T.statusCode!=null&&T.statusCode!==200&&!u&&(l=T.statusCode),T.headers&&(c[m]=T.headers)):(s[m]=T.data,T.statusCode&&T.statusCode!==200&&!u&&(l=T.statusCode),T.headers&&(c[m]=T.headers))}),d!==void 0&&n&&(o={[n[0]]:d},s[n[0]]=void 0),{loaderData:s,errors:o,statusCode:l||200,loaderHeaders:c}}function Y_(t,e,n,r,i,s,o){let{loaderData:l,errors:u}=EP(e,n,r,o);return i.forEach(c=>{let{key:d,match:f,controller:m}=c,T=s[d];if(de(T,"Did not find corresponding fetcher result"),!(m&&m.signal.aborted))if(rn(T)){let S=Yi(t.matches,f==null?void 0:f.route.id);u&&u[S.route.id]||(u=Be({},u,{[S.route.id]:T.error})),t.fetchers.delete(d)}else if(ts(T))de(!1,"Unhandled fetcher revalidation redirect");else if(si(T))de(!1,"Unhandled fetcher deferred data");else{let S=Gr(T.data);t.fetchers.set(d,S)}}),{loaderData:l,errors:u}}function J_(t,e,n,r){let i=Be({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function X_(t){return t?rn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Yi(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Z_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function qt(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,l="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(l="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(l="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(l="Not Found",u='No route matches URL "'+n+'"'):t===405&&(l="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Kc(t||500,l,new Error(u),!0)}function Vu(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[r,i]=e[n];if(ts(i))return{key:r,result:i}}}function DI(t){let e=typeof t=="string"?Lr(t):t;return fs(Be({},e,{hash:""}))}function TP(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function IP(t){return OI(t.result)&&lP.has(t.result.status)}function si(t){return t.type===ke.deferred}function rn(t){return t.type===ke.error}function ts(t){return(t&&t.type)===ke.redirect}function ev(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function SP(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function OI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function AP(t){return aP.has(t.toLowerCase())}function kn(t){return sP.has(t.toLowerCase())}async function RP(t,e,n,r,i){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[l,u]=s[o],c=t.find(m=>(m==null?void 0:m.route.id)===l);if(!c)continue;let d=r.find(m=>m.route.id===c.route.id),f=d!=null&&!NI(d,c)&&(i&&i[c.route.id])!==void 0;si(u)&&f&&await Wm(u,n,!1).then(m=>{m&&(e[l]=m)})}}async function CP(t,e,n){for(let r=0;r<n.length;r++){let{key:i,routeId:s,controller:o}=n[r],l=e[i];t.find(c=>(c==null?void 0:c.route.id)===s)&&si(l)&&(de(o,"Expected an AbortController for revalidating fetcher deferred result"),await Wm(l,o.signal,!0).then(c=>{c&&(e[i]=c)}))}}async function Wm(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:ke.data,data:t.deferredData.unwrappedData}}catch(i){return{type:ke.error,error:i}}return{type:ke.data,data:t.deferredData.data}}}function qm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Ca(t,e){let n=typeof e=="string"?Lr(e).search:e.search;if(t[t.length-1].route.index&&qm(n||""))return t[t.length-1];let r=PI(t);return r[r.length-1]}function tv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function Xd(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function PP(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function _a(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function kP(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Gr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function xP(t,e){try{let n=t.sessionStorage.getItem(xI);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function NP(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(xI,JSON.stringify(n))}catch(r){ds(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qc.apply(this,arguments)}const jl=U.createContext(null),Gm=U.createContext(null),Mr=U.createContext(null),Km=U.createContext(null),Vr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),LI=U.createContext(null);function bP(t,e){let{relative:n}=e===void 0?{}:e;Uo()||de(!1);let{basename:r,navigator:i}=U.useContext(Mr),{hash:s,pathname:o,search:l}=$h(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Ir([r,o])),i.createHref({pathname:u,search:l,hash:s})}function Uo(){return U.useContext(Km)!=null}function Fo(){return Uo()||de(!1),U.useContext(Km).location}function MI(t){U.useContext(Mr).static||U.useLayoutEffect(t)}function Qm(){let{isDataRoute:t}=U.useContext(Vr);return t?qP():DP()}function DP(){Uo()||de(!1);let t=U.useContext(jl),{basename:e,future:n,navigator:r}=U.useContext(Mr),{matches:i}=U.useContext(Vr),{pathname:s}=Fo(),o=JSON.stringify(Fh(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return MI(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let f=jh(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ir([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,t])}const OP=U.createContext(null);function LP(t){let e=U.useContext(Vr).outlet;return e&&U.createElement(OP.Provider,{value:t},e)}function $h(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Mr),{matches:i}=U.useContext(Vr),{pathname:s}=Fo(),o=JSON.stringify(Fh(i,r.v7_relativeSplatPath));return U.useMemo(()=>jh(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function MP(t,e,n,r){Uo()||de(!1);let{navigator:i}=U.useContext(Mr),{matches:s}=U.useContext(Vr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Fo(),d;d=c;let f=d.pathname||"/",m=f;if(u!=="/"){let k=u.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let T=Qi(t,{pathname:m});return $P(T&&T.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:Ir([u,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Ir([u,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r)}function VP(){let t=WP(),e=vl(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const UP=U.createElement(VP,null);class FP extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Vr.Provider,{value:this.props.routeContext},U.createElement(LI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jP(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(jl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Vr.Provider,{value:e},r)}function $P(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||de(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:m,errors:T}=n,S=f.route.loader&&m[f.route.id]===void 0&&(!T||T[f.route.id]===void 0);if(f.route.lazy||S){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let T,S=!1,k=null,b=null;n&&(T=l&&f.route.id?l[f.route.id]:void 0,k=f.route.errorElement||UP,u&&(c<0&&m===0?(GP("route-fallback"),S=!0,b=null):c===m&&(S=!0,b=f.route.hydrateFallbackElement||null)));let A=e.concat(o.slice(0,m+1)),w=()=>{let R;return T?R=k:S?R=b:f.route.Component?R=U.createElement(f.route.Component,null):f.route.element?R=f.route.element:R=d,U.createElement(jP,{match:f,routeContext:{outlet:d,matches:A,isDataRoute:n!=null},children:R})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?U.createElement(FP,{location:n.location,revalidation:n.revalidation,component:k,error:T,children:w(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):w()},null)}var VI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(VI||{}),UI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(UI||{});function BP(t){let e=U.useContext(jl);return e||de(!1),e}function zP(t){let e=U.useContext(Gm);return e||de(!1),e}function HP(t){let e=U.useContext(Vr);return e||de(!1),e}function FI(t){let e=HP(),n=e.matches[e.matches.length-1];return n.route.id||de(!1),n.route.id}function WP(){var t;let e=U.useContext(LI),n=zP(UI.UseRouteError),r=FI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function qP(){let{router:t}=BP(VI.UseNavigateStable),e=FI(),n=U.useRef(!1);return MI(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Qc({fromRouteId:e},s)))},[t,e])}const nv={};function GP(t,e,n){nv[t]||(nv[t]=!0)}function KP(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function QP(t){let{to:e,replace:n,state:r,relative:i}=t;Uo()||de(!1);let{future:s,static:o}=U.useContext(Mr),{matches:l}=U.useContext(Vr),{pathname:u}=Fo(),c=Qm(),d=jh(e,Fh(l,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return U.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function YP(t){return LP(t.context)}function JP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nt.Pop,navigator:s,static:o=!1,future:l}=t;Uo()&&de(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Qc({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Lr(r));let{pathname:d="/",search:f="",hash:m="",state:T=null,key:S="default"}=r,k=U.useMemo(()=>{let b=Pr(d,u);return b==null?null:{location:{pathname:b,search:f,hash:m,state:T,key:S},navigationType:i}},[u,d,f,m,T,S,i]);return k==null?null:U.createElement(Mr.Provider,{value:c},U.createElement(Km.Provider,{children:n,value:k}))}new Promise(()=>{});function XP(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Co.apply(this,arguments)}function jI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ZP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ek(t,e){return t.button===0&&(!e||e==="_self")&&!ZP(t)}const tk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nk=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],rk="6";try{window.__reactRouterVersion=rk}catch{}function ik(t,e){return dP({basename:void 0,future:Co({},void 0,{v7_prependBasename:!0}),history:MC({window:void 0}),hydrationData:sk(),routes:t,mapRouteProperties:XP,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function sk(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Co({},e,{errors:ok(e.errors)})),e}function ok(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new Kc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const $I=U.createContext({isTransitioning:!1}),ak=U.createContext(new Map),lk="startTransition",rv=I1[lk],uk="flushSync",iv=LC[uk];function ck(t){rv?rv(t):t()}function va(t){iv?iv(t):t()}let hk=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function dk(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,l]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[d,f]=U.useState(),[m,T]=U.useState(),[S,k]=U.useState(),b=U.useRef(new Map),{v7_startTransition:A}=r||{},w=U.useCallback(y=>{A?ck(y):y()},[A]),R=U.useCallback((y,I)=>{let{deletedFetchers:E,flushSync:P,viewTransitionOpts:N}=I;y.fetchers.forEach((Ce,yt)=>{Ce.data!==void 0&&b.current.set(yt,Ce.data)}),E.forEach(Ce=>b.current.delete(Ce));let C=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!N||C){P?va(()=>s(y)):w(()=>s(y));return}if(P){va(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:N.currentLocation,nextLocation:N.nextLocation})});let Ce=n.window.document.startViewTransition(()=>{va(()=>s(y))});Ce.finished.finally(()=>{va(()=>{f(void 0),T(void 0),l(void 0),c({isTransitioning:!1})})}),va(()=>T(Ce));return}m?(d&&d.resolve(),m.skipTransition(),k({state:y,currentLocation:N.currentLocation,nextLocation:N.nextLocation})):(l(y),c({isTransitioning:!0,flushSync:!1,currentLocation:N.currentLocation,nextLocation:N.nextLocation}))},[n.window,m,d,b,w]);U.useLayoutEffect(()=>n.subscribe(R),[n,R]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new hk)},[u]),U.useEffect(()=>{if(d&&o&&n.window){let y=o,I=d.promise,E=n.window.document.startViewTransition(async()=>{w(()=>s(y)),await I});E.finished.finally(()=>{f(void 0),T(void 0),l(void 0),c({isTransitioning:!1})}),T(E)}},[w,o,d,n.window]),U.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&S&&(l(S.state),c({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),k(void 0))},[u.isTransitioning,S]),U.useEffect(()=>{},[]);let O=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:y=>n.navigate(y),push:(y,I,E)=>n.navigate(y,{state:I,preventScrollReset:E==null?void 0:E.preventScrollReset}),replace:(y,I,E)=>n.navigate(y,{replace:!0,state:I,preventScrollReset:E==null?void 0:E.preventScrollReset})}),[n]),$=n.basename||"/",F=U.useMemo(()=>({router:n,navigator:O,static:!1,basename:$}),[n,O,$]),g=U.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return U.useEffect(()=>KP(r,n.future),[r,n.future]),U.createElement(U.Fragment,null,U.createElement(jl.Provider,{value:F},U.createElement(Gm.Provider,{value:i},U.createElement(ak.Provider,{value:b.current},U.createElement($I.Provider,{value:u},U.createElement(JP,{basename:$,location:i.location,navigationType:i.historyAction,navigator:O,future:g},i.initialized||n.future.v7_partialHydration?U.createElement(fk,{routes:n.routes,future:n.future,state:i}):e))))),null)}const fk=U.memo(pk);function pk(t){let{routes:e,future:n,state:r}=t;return MP(e,void 0,r,n)}const mk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fo=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,m=jI(e,tk),{basename:T}=U.useContext(Mr),S,k=!1;if(typeof c=="string"&&gk.test(c)&&(S=c,mk))try{let R=new URL(window.location.href),O=c.startsWith("//")?new URL(R.protocol+c):new URL(c),$=Pr(O.pathname,T);O.origin===R.origin&&$!=null?c=$+O.search+O.hash:k=!0}catch{}let b=bP(c,{relative:i}),A=_k(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function w(R){r&&r(R),R.defaultPrevented||A(R)}return U.createElement("a",Co({},m,{href:S||b,onClick:k||s?r:w,ref:n,target:u}))}),Hn=U.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:c,children:d}=e,f=jI(e,nk),m=$h(u,{relative:f.relative}),T=Fo(),S=U.useContext(Gm),{navigator:k,basename:b}=U.useContext(Mr),A=S!=null&&vk(m)&&c===!0,w=k.encodeLocation?k.encodeLocation(m).pathname:m.pathname,R=T.pathname,O=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(R=R.toLowerCase(),O=O?O.toLowerCase():null,w=w.toLowerCase()),O&&b&&(O=Pr(O,b)||O);const $=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let F=R===w||!o&&R.startsWith(w)&&R.charAt($)==="/",g=O!=null&&(O===w||!o&&O.startsWith(w)&&O.charAt(w.length)==="/"),y={isActive:F,isPending:g,isTransitioning:A},I=F?r:void 0,E;typeof s=="function"?E=s(y):E=[s,F?"active":null,g?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(y):l;return U.createElement(fo,Co({},f,{"aria-current":I,className:E,ref:n,style:P,to:u,viewTransition:c}),typeof d=="function"?d(y):d)});var yp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(yp||(yp={}));var sv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sv||(sv={}));function yk(t){let e=U.useContext(jl);return e||de(!1),e}function _k(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Qm(),c=Fo(),d=$h(t,{relative:o});return U.useCallback(f=>{if(ek(f,n)){f.preventDefault();let m=r!==void 0?r:fs(c)===fs(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}function vk(t,e){e===void 0&&(e={});let n=U.useContext($I);n==null&&de(!1);let{basename:r}=yk(yp.useViewTransitionState),i=$h(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Pr(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Pr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Gc(i.pathname,o)!=null||Gc(i.pathname,s)!=null}function wk(){const[t,e]=U.useState(!1);return v.jsxs("header",{className:"sticky top-0 z-20 border-b border-rose/40 bg-blush/80 backdrop-blur font-sans",children:[v.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-3 flex items-center justify-between",children:[v.jsxs(fo,{to:"/",className:"flex items-center gap-2",onClick:()=>e(!1),children:[v.jsx("div",{className:"h-9 w-9 rounded-xl bg-rose text-ivory flex items-center justify-center shadow-md",children:"📷"}),v.jsx("span",{className:"text-base font-serif font-semibold tracking-tight text-charcoal",children:"Lama Photo NC"})]}),v.jsxs("nav",{className:"hidden md:flex gap-6 text-sm text-charcoal",children:[v.jsx(Hn,{to:"/portfolio",className:"hover:text-gold transition-colors",children:"Portfolio"}),v.jsx(Hn,{to:"/booking",className:"hover:text-gold transition-colors",children:"Book"}),v.jsx(Hn,{to:"/client",className:"hover:text-gold transition-colors",children:"Clients"}),v.jsx(Hn,{to:"/faq",className:"hover:text-gold transition-colors",children:"FAQ"}),v.jsx(Hn,{to:"/admin",className:"hover:text-gold transition-colors",children:"Admin"})]}),v.jsx(fo,{to:"/booking",className:"hidden md:block",children:v.jsx("button",{className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md",children:"Book Now →"})}),v.jsx("button",{"aria-label":"Toggle menu",onClick:()=>e(n=>!n),className:"block md:hidden p-2 rounded-lg bg-rose text-ivory",children:"☰"})]}),v.jsxs("div",{className:`${t?"block":"hidden"} md:hidden border-t border-rose/40 bg-blush/80 px-4 py-3 space-y-3`,children:[v.jsx(Hn,{to:"/portfolio",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Portfolio"}),v.jsx(Hn,{to:"/booking",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Book"}),v.jsx(Hn,{to:"/client",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Clients"}),v.jsx(Hn,{to:"/faq",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"FAQ"}),v.jsx(Hn,{to:"/admin",className:"block text-sm text-charcoal hover:text-gold transition-colors",onClick:()=>e(!1),children:"Admin"}),v.jsx(fo,{to:"/booking",onClick:()=>e(!1),children:v.jsx("button",{className:"w-full mt-2 rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold transition-all shadow-md",children:"Book Now →"})})]})]})}function Ek(){return v.jsx("footer",{className:"border-t border-rose/40 bg-blush/20 py-10 font-sans",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 text-sm text-charcoal flex flex-col md:flex-row items-center justify-between gap-3",children:[v.jsxs("div",{className:"font-serif text-rose",children:["© ",new Date().getFullYear()," Lama NC"]}),v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("a",{href:"mailto:hello@example.com",className:"hover:text-gold transition-colors",children:"hello@example.com"}),v.jsx("a",{href:"tel:+15551234567",className:"hover:text-gold transition-colors",children:"(555) 123-4567"})]})]})})}function Tk(){return v.jsxs("div",{className:"min-h-screen flex flex-col",children:[v.jsx(wk,{}),v.jsx("main",{className:"flex-1",children:v.jsx(YP,{})}),v.jsx(Ek,{})]})}function Ik(){return v.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-3xl md:text-5xl font-serif font-semibold leading-tight text-charcoal",children:"Book stunning, story-driven photography."}),v.jsx("p",{className:"mt-4 text-charcoal/70 text-base md:text-lg",children:"Portraits, events, and weddings—crafted with care and delivered fast. Pick a package, choose a time, and lock it in."}),v.jsxs("div",{className:"mt-6 flex gap-3",children:[v.jsx(fo,{to:"/booking",className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Start Booking"}),v.jsx(fo,{to:"/portfolio",className:"px-5 py-3 rounded-full border border-rose/40 text-sm font-semibold text-charcoal hover:bg-blush/50 transition-all",children:"View Portfolio"})]}),v.jsxs("div",{className:"mt-6 flex items-center gap-2 text-sm text-charcoal/70",children:[v.jsx("span",{children:"★★★★★"}),v.jsx("span",{children:"100+ happy clients"})]})]}),v.jsx("div",{className:"glass rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-rose/30 p-4 md:p-6 bg-white/80",children:v.jsx("img",{className:"rounded-xl w-full object-cover aspect-[4/3]",src:"https://picsum.photos/800/600?blur=0",alt:"Featured photography sample"})})]})})}const ov="lamaphoto",Sk="portfolio";function Ak(){const[t,e]=U.useState([]),[n,r]=U.useState("");return U.useEffect(()=>{(async()=>{try{const i=await fetch(`https://res.cloudinary.com/${ov}/image/list/${Sk}.json`,{cache:"no-store"});if(!i.ok)throw new Error(`HTTP ${i.status}`);const s=await i.json();e(s.resources||[])}catch(i){console.error(i),r("Could not load images. Check Cloudinary ‘Asset lists’ setting and that photos are tagged ‘portfolio’.")}})()},[]),v.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[v.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Portfolio"}),v.jsxs("p",{className:"mt-2 text-charcoal/70",children:["Uploads with the ",v.jsx("code",{children:"portfolio"})," tag appear here automatically."]}),n&&v.jsx("div",{className:"mt-4 text-red-700 text-sm",children:n}),v.jsx("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",children:t.map(i=>{const s=`https://res.cloudinary.com/${ov}/image/upload/c_fill,g_auto,f_auto,q_auto,w_800,h_800/${i.public_id}.${i.format}`;return v.jsx("div",{className:"overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow",children:v.jsx("img",{src:s,alt:i.public_id,loading:"lazy",className:"w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"})},i.public_id)})}),!n&&t.length===0&&v.jsxs("div",{className:"mt-6 text-charcoal/60",children:["No images yet. Upload in ",v.jsx("code",{children:"/admin"}),"."]})]})})}function Rk({step:t}){const e=["Package","Date & Time","Details","Review"];return v.jsx("div",{className:"flex items-center gap-3 font-sans",children:e.map((n,r)=>v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:`h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold shadow-sm transition-all ${r<=t?"bg-rose text-ivory":"bg-blush/40 text-charcoal/70"}`,children:r+1}),v.jsx("span",{className:`hidden sm:block text-sm transition-colors ${r===t?"font-semibold text-charcoal":"text-charcoal/60"}`,children:n}),r<e.length-1&&v.jsx("div",{className:`w-6 sm:w-10 h-px transition-colors ${r<t?"bg-rose/70":"bg-blush/50"}`})]},n))})}function Ck({p:t,selected:e,onSelect:n}){return v.jsxs("div",{className:`glass rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 ${e?"border-rose":"border-transparent"} p-5 md:p-6 bg-ivory`,children:[v.jsxs("div",{className:"flex items-start justify-between gap-3",children:[v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:t.name}),v.jsx("p",{className:"text-rose/80",children:t.desc})]}),v.jsxs("div",{className:"text-right",children:[v.jsxs("div",{className:"text-2xl font-bold text-rose",children:["$",t.price]}),v.jsx("div",{className:"text-xs text-charcoal/60",children:t.duration})]})]}),v.jsx("ul",{className:"mt-4 space-y-2 text-sm text-charcoal/80",children:t.includes.map((r,i)=>v.jsxs("li",{children:["✔️ ",r]},i))}),v.jsx("div",{className:"mt-5",children:v.jsx("button",{onClick:n,className:`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${e?"bg-gold text-charcoal hover:bg-rose hover:text-ivory":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:e?"Selected":"Select"})})]})}const Pk=()=>{};var av={};/**
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
 */const BI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},zI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[d],n[f],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(BI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new xk;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let xk=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const Nk=function(t){const e=BI(t);return zI.encodeByteArray(e,!0)},Yc=function(t){return Nk(t).replace(/\./g,"")},HI=function(t){try{return zI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dk=()=>bk().__FIREBASE_DEFAULTS__,Ok=()=>{if(typeof process>"u"||typeof av>"u")return;const t=av.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&HI(t[1]);return e&&JSON.parse(e)},Bh=()=>{try{return Pk()||Dk()||Ok()||Lk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},WI=t=>{var e,n;return(n=(e=Bh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},qI=t=>{const e=WI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},GI=()=>{var t;return(t=Bh())==null?void 0:t.config},KI=t=>{var e;return(e=Bh())==null?void 0:e[`_${t}`]};/**
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
 */class Mk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ym(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function QI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Yc(JSON.stringify(n)),Yc(JSON.stringify(o)),""].join(".")}const Wa={};function Vk(){const t={prod:[],emulator:[]};for(const e of Object.keys(Wa))Wa[e]?t.emulator.push(e):t.prod.push(e);return t}function Uk(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let lv=!1;function Jm(t,e){if(typeof window>"u"||typeof document>"u"||!Es(window.location.host)||Wa[t]===e||Wa[t]||lv)return;Wa[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",s=Vk().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function u(m,T){m.setAttribute("width","24"),m.setAttribute("id",T),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function c(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{lv=!0,o()},m}function d(m,T){m.setAttribute("id",T),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=Uk(r),T=n("text"),S=document.getElementById(T)||document.createElement("span"),k=n("learnmore"),b=document.getElementById(k)||document.createElement("a"),A=n("preprendIcon"),w=document.getElementById(A)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const R=m.element;l(R),d(b,k);const O=c();u(w,A),R.append(w,S,b,O),document.body.appendChild(R)}s?(S.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function jk(){var e;const t=(e=Bh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $k(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hk(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wk(){return!jk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qk(){try{return typeof indexedDB=="object"}catch{return!1}}function Gk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Kk="FirebaseError";let Oi=class YI extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Kk,Object.setPrototypeOf(this,YI.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$l.prototype.create)}},$l=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Qk(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Oi(i,l,r)}};function Qk(t,e){return t.replace(Yk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Yk=/\{\$([^}]+)}/g;function Jk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ps(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(uv(s)&&uv(o)){if(!ps(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uv(t){return t!==null&&typeof t=="object"}/**
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
 */function Bl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ka(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Xk(t,e){const n=new Zk(t,e);return n.subscribe.bind(n)}let Zk=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ex(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zd),i.error===void 0&&(i.error=Zd),i.complete===void 0&&(i.complete=Zd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function ex(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zd(){}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}let Si=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Ki="[DEFAULT]";/**
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
 */class tx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rx(e))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ki){return this.instances.has(e)}getOptions(e=Ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ki){return this.component?this.component.multipleInstances?e:Ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nx(t){return t===Ki?void 0:t}function rx(t){return t.instantiationMode==="EAGER"}/**
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
 */class ix{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const sx={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},ox=me.INFO,ax={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},lx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ax[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Xm=class{constructor(e){this.name=e,this._logLevel=ox,this._logHandler=lx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}};const ux=(t,e)=>e.some(n=>t instanceof n);let cv,hv;function cx(){return cv||(cv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hx(){return hv||(hv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const JI=new WeakMap,_p=new WeakMap,XI=new WeakMap,ef=new WeakMap,Zm=new WeakMap;function dx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&JI.set(n,t)}).catch(()=>{}),Zm.set(e,t),e}function fx(t){if(_p.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_p.set(t,e)}let vp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _p.get(t);if(e==="objectStoreNames")return t.objectStoreNames||XI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function px(t){vp=t(vp)}function mx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tf(this),e,...n);return XI.set(r,e.sort?e.sort():[e]),gi(r)}:hx().includes(t)?function(...e){return t.apply(tf(this),e),gi(JI.get(this))}:function(...e){return gi(t.apply(tf(this),e))}}function gx(t){return typeof t=="function"?mx(t):(t instanceof IDBTransaction&&fx(t),ux(t,cx())?new Proxy(t,vp):t)}function gi(t){if(t instanceof IDBRequest)return dx(t);if(ef.has(t))return ef.get(t);const e=gx(t);return e!==t&&(ef.set(t,e),Zm.set(e,t)),e}const tf=t=>Zm.get(t);function yx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=gi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gi(o.result),u.oldVersion,u.newVersion,gi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const _x=["get","getKey","getAll","getAllKeys","count"],vx=["put","add","delete","clear"],nf=new Map;function dv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_x.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return nf.set(e,s),s}px(t=>({...t,get:(e,n,r)=>dv(e,n)||t.get(e,n,r),has:(e,n)=>!!dv(e,n)||t.has(e,n)}));/**
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
 */let wx=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ex(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function Ex(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wp="@firebase/app",fv="0.14.1";/**
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
 */const kr=new Xm("@firebase/app"),Tx="@firebase/app-compat",Ix="@firebase/analytics-compat",Sx="@firebase/analytics",Ax="@firebase/app-check-compat",Rx="@firebase/app-check",Cx="@firebase/auth",Px="@firebase/auth-compat",kx="@firebase/database",xx="@firebase/data-connect",Nx="@firebase/database-compat",bx="@firebase/functions",Dx="@firebase/functions-compat",Ox="@firebase/installations",Lx="@firebase/installations-compat",Mx="@firebase/messaging",Vx="@firebase/messaging-compat",Ux="@firebase/performance",Fx="@firebase/performance-compat",jx="@firebase/remote-config",$x="@firebase/remote-config-compat",Bx="@firebase/storage",zx="@firebase/storage-compat",Hx="@firebase/firestore",Wx="@firebase/ai",qx="@firebase/firestore-compat",Gx="firebase",Kx="12.1.0";/**
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
 */const Ep="[DEFAULT]",Qx={[wp]:"fire-core",[Tx]:"fire-core-compat",[Sx]:"fire-analytics",[Ix]:"fire-analytics-compat",[Rx]:"fire-app-check",[Ax]:"fire-app-check-compat",[Cx]:"fire-auth",[Px]:"fire-auth-compat",[kx]:"fire-rtdb",[xx]:"fire-data-connect",[Nx]:"fire-rtdb-compat",[bx]:"fire-fn",[Dx]:"fire-fn-compat",[Ox]:"fire-iid",[Lx]:"fire-iid-compat",[Mx]:"fire-fcm",[Vx]:"fire-fcm-compat",[Ux]:"fire-perf",[Fx]:"fire-perf-compat",[jx]:"fire-rc",[$x]:"fire-rc-compat",[Bx]:"fire-gcs",[zx]:"fire-gcs-compat",[Hx]:"fire-fst",[qx]:"fire-fst-compat",[Wx]:"fire-vertex","fire-js":"fire-js",[Gx]:"fire-js-all"};/**
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
 */const Jc=new Map,Yx=new Map,Tp=new Map;function pv(t,e){try{t.container.addComponent(e)}catch(n){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ms(t){const e=t.name;if(Tp.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;Tp.set(e,t);for(const n of Jc.values())pv(n,t);for(const n of Yx.values())pv(n,t);return!0}function zh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Jx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new $l("app","Firebase",Jx);/**
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
 */class Xx{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
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
 */const Ts=Kx;function ZI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ep,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw yi.create("bad-app-name",{appName:String(i)});if(n||(n=GI()),!n)throw yi.create("no-options");const s=Jc.get(i);if(s){if(ps(n,s.options)&&ps(r,s.config))return s;throw yi.create("duplicate-app",{appName:i})}const o=new ix(i);for(const u of Tp.values())o.addComponent(u);const l=new Xx(n,r,o);return Jc.set(i,l),l}function eg(t=Ep){const e=Jc.get(t);if(!e&&t===Ep&&GI())return ZI();if(!e)throw yi.create("no-app",{appName:t});return e}function Xn(t,e,n){let r=Qx[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(o.join(" "));return}ms(new Si(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Zx="firebase-heartbeat-database",eN=1,wl="firebase-heartbeat-store";let rf=null;function e0(){return rf||(rf=yx(Zx,eN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wl)}catch(n){console.warn(n)}}}}).catch(t=>{throw yi.create("idb-open",{originalErrorMessage:t.message})})),rf}async function tN(t){try{const n=(await e0()).transaction(wl),r=await n.objectStore(wl).get(t0(t));return await n.done,r}catch(e){if(e instanceof Oi)kr.warn(e.message);else{const n=yi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(n.message)}}}async function mv(t,e){try{const r=(await e0()).transaction(wl,"readwrite");await r.objectStore(wl).put(e,t0(t)),await r.done}catch(n){if(n instanceof Oi)kr.warn(n.message);else{const r=yi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kr.warn(r.message)}}}function t0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nN=1024,rN=30;let iN=class{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>rN){const o=aN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gv(),{heartbeatsToSend:r,unsentEntries:i}=sN(this._heartbeatsCache.heartbeats),s=Yc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return kr.warn(n),""}}};function gv(){return new Date().toISOString().substring(0,10)}function sN(t,e=nN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),yv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}let oN=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qk()?Gk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}};function yv(t){return Yc(JSON.stringify({version:2,heartbeats:t})).length}function aN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function lN(t){ms(new Si("platform-logger",e=>new wx(e),"PRIVATE")),ms(new Si("heartbeat",e=>new iN(e),"PRIVATE")),Xn(wp,fv,t),Xn(wp,fv,"esm2020"),Xn("fire-js","")}lN("");var _v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _i,n0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,y){function I(){}I.prototype=y.prototype,g.D=y.prototype,g.prototype=new I,g.prototype.constructor=g,g.C=function(E,P,N){for(var C=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)C[Ce-2]=arguments[Ce];return y.prototype[P].apply(E,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(g,y,I){I||(I=0);var E=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)E[P]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(P=0;16>P;++P)E[P]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=g.g[0],I=g.g[1],P=g.g[2];var N=g.g[3],C=y+(N^I&(P^N))+E[0]+3614090360&4294967295;y=I+(C<<7&4294967295|C>>>25),C=N+(P^y&(I^P))+E[1]+3905402710&4294967295,N=y+(C<<12&4294967295|C>>>20),C=P+(I^N&(y^I))+E[2]+606105819&4294967295,P=N+(C<<17&4294967295|C>>>15),C=I+(y^P&(N^y))+E[3]+3250441966&4294967295,I=P+(C<<22&4294967295|C>>>10),C=y+(N^I&(P^N))+E[4]+4118548399&4294967295,y=I+(C<<7&4294967295|C>>>25),C=N+(P^y&(I^P))+E[5]+1200080426&4294967295,N=y+(C<<12&4294967295|C>>>20),C=P+(I^N&(y^I))+E[6]+2821735955&4294967295,P=N+(C<<17&4294967295|C>>>15),C=I+(y^P&(N^y))+E[7]+4249261313&4294967295,I=P+(C<<22&4294967295|C>>>10),C=y+(N^I&(P^N))+E[8]+1770035416&4294967295,y=I+(C<<7&4294967295|C>>>25),C=N+(P^y&(I^P))+E[9]+2336552879&4294967295,N=y+(C<<12&4294967295|C>>>20),C=P+(I^N&(y^I))+E[10]+4294925233&4294967295,P=N+(C<<17&4294967295|C>>>15),C=I+(y^P&(N^y))+E[11]+2304563134&4294967295,I=P+(C<<22&4294967295|C>>>10),C=y+(N^I&(P^N))+E[12]+1804603682&4294967295,y=I+(C<<7&4294967295|C>>>25),C=N+(P^y&(I^P))+E[13]+4254626195&4294967295,N=y+(C<<12&4294967295|C>>>20),C=P+(I^N&(y^I))+E[14]+2792965006&4294967295,P=N+(C<<17&4294967295|C>>>15),C=I+(y^P&(N^y))+E[15]+1236535329&4294967295,I=P+(C<<22&4294967295|C>>>10),C=y+(P^N&(I^P))+E[1]+4129170786&4294967295,y=I+(C<<5&4294967295|C>>>27),C=N+(I^P&(y^I))+E[6]+3225465664&4294967295,N=y+(C<<9&4294967295|C>>>23),C=P+(y^I&(N^y))+E[11]+643717713&4294967295,P=N+(C<<14&4294967295|C>>>18),C=I+(N^y&(P^N))+E[0]+3921069994&4294967295,I=P+(C<<20&4294967295|C>>>12),C=y+(P^N&(I^P))+E[5]+3593408605&4294967295,y=I+(C<<5&4294967295|C>>>27),C=N+(I^P&(y^I))+E[10]+38016083&4294967295,N=y+(C<<9&4294967295|C>>>23),C=P+(y^I&(N^y))+E[15]+3634488961&4294967295,P=N+(C<<14&4294967295|C>>>18),C=I+(N^y&(P^N))+E[4]+3889429448&4294967295,I=P+(C<<20&4294967295|C>>>12),C=y+(P^N&(I^P))+E[9]+568446438&4294967295,y=I+(C<<5&4294967295|C>>>27),C=N+(I^P&(y^I))+E[14]+3275163606&4294967295,N=y+(C<<9&4294967295|C>>>23),C=P+(y^I&(N^y))+E[3]+4107603335&4294967295,P=N+(C<<14&4294967295|C>>>18),C=I+(N^y&(P^N))+E[8]+1163531501&4294967295,I=P+(C<<20&4294967295|C>>>12),C=y+(P^N&(I^P))+E[13]+2850285829&4294967295,y=I+(C<<5&4294967295|C>>>27),C=N+(I^P&(y^I))+E[2]+4243563512&4294967295,N=y+(C<<9&4294967295|C>>>23),C=P+(y^I&(N^y))+E[7]+1735328473&4294967295,P=N+(C<<14&4294967295|C>>>18),C=I+(N^y&(P^N))+E[12]+2368359562&4294967295,I=P+(C<<20&4294967295|C>>>12),C=y+(I^P^N)+E[5]+4294588738&4294967295,y=I+(C<<4&4294967295|C>>>28),C=N+(y^I^P)+E[8]+2272392833&4294967295,N=y+(C<<11&4294967295|C>>>21),C=P+(N^y^I)+E[11]+1839030562&4294967295,P=N+(C<<16&4294967295|C>>>16),C=I+(P^N^y)+E[14]+4259657740&4294967295,I=P+(C<<23&4294967295|C>>>9),C=y+(I^P^N)+E[1]+2763975236&4294967295,y=I+(C<<4&4294967295|C>>>28),C=N+(y^I^P)+E[4]+1272893353&4294967295,N=y+(C<<11&4294967295|C>>>21),C=P+(N^y^I)+E[7]+4139469664&4294967295,P=N+(C<<16&4294967295|C>>>16),C=I+(P^N^y)+E[10]+3200236656&4294967295,I=P+(C<<23&4294967295|C>>>9),C=y+(I^P^N)+E[13]+681279174&4294967295,y=I+(C<<4&4294967295|C>>>28),C=N+(y^I^P)+E[0]+3936430074&4294967295,N=y+(C<<11&4294967295|C>>>21),C=P+(N^y^I)+E[3]+3572445317&4294967295,P=N+(C<<16&4294967295|C>>>16),C=I+(P^N^y)+E[6]+76029189&4294967295,I=P+(C<<23&4294967295|C>>>9),C=y+(I^P^N)+E[9]+3654602809&4294967295,y=I+(C<<4&4294967295|C>>>28),C=N+(y^I^P)+E[12]+3873151461&4294967295,N=y+(C<<11&4294967295|C>>>21),C=P+(N^y^I)+E[15]+530742520&4294967295,P=N+(C<<16&4294967295|C>>>16),C=I+(P^N^y)+E[2]+3299628645&4294967295,I=P+(C<<23&4294967295|C>>>9),C=y+(P^(I|~N))+E[0]+4096336452&4294967295,y=I+(C<<6&4294967295|C>>>26),C=N+(I^(y|~P))+E[7]+1126891415&4294967295,N=y+(C<<10&4294967295|C>>>22),C=P+(y^(N|~I))+E[14]+2878612391&4294967295,P=N+(C<<15&4294967295|C>>>17),C=I+(N^(P|~y))+E[5]+4237533241&4294967295,I=P+(C<<21&4294967295|C>>>11),C=y+(P^(I|~N))+E[12]+1700485571&4294967295,y=I+(C<<6&4294967295|C>>>26),C=N+(I^(y|~P))+E[3]+2399980690&4294967295,N=y+(C<<10&4294967295|C>>>22),C=P+(y^(N|~I))+E[10]+4293915773&4294967295,P=N+(C<<15&4294967295|C>>>17),C=I+(N^(P|~y))+E[1]+2240044497&4294967295,I=P+(C<<21&4294967295|C>>>11),C=y+(P^(I|~N))+E[8]+1873313359&4294967295,y=I+(C<<6&4294967295|C>>>26),C=N+(I^(y|~P))+E[15]+4264355552&4294967295,N=y+(C<<10&4294967295|C>>>22),C=P+(y^(N|~I))+E[6]+2734768916&4294967295,P=N+(C<<15&4294967295|C>>>17),C=I+(N^(P|~y))+E[13]+1309151649&4294967295,I=P+(C<<21&4294967295|C>>>11),C=y+(P^(I|~N))+E[4]+4149444226&4294967295,y=I+(C<<6&4294967295|C>>>26),C=N+(I^(y|~P))+E[11]+3174756917&4294967295,N=y+(C<<10&4294967295|C>>>22),C=P+(y^(N|~I))+E[2]+718787259&4294967295,P=N+(C<<15&4294967295|C>>>17),C=I+(N^(P|~y))+E[9]+3951481745&4294967295,g.g[0]=g.g[0]+y&4294967295,g.g[1]=g.g[1]+(P+(C<<21&4294967295|C>>>11))&4294967295,g.g[2]=g.g[2]+P&4294967295,g.g[3]=g.g[3]+N&4294967295}r.prototype.u=function(g,y){y===void 0&&(y=g.length);for(var I=y-this.blockSize,E=this.B,P=this.h,N=0;N<y;){if(P==0)for(;N<=I;)i(this,g,N),N+=this.blockSize;if(typeof g=="string"){for(;N<y;)if(E[P++]=g.charCodeAt(N++),P==this.blockSize){i(this,E),P=0;break}}else for(;N<y;)if(E[P++]=g[N++],P==this.blockSize){i(this,E),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var y=1;y<g.length-8;++y)g[y]=0;var I=8*this.o;for(y=g.length-8;y<g.length;++y)g[y]=I&255,I/=256;for(this.u(g),g=Array(16),y=I=0;4>y;++y)for(var E=0;32>E;E+=8)g[I++]=this.g[y]>>>E&255;return g};function s(g,y){var I=l;return Object.prototype.hasOwnProperty.call(I,g)?I[g]:I[g]=y(g)}function o(g,y){this.h=y;for(var I=[],E=!0,P=g.length-1;0<=P;P--){var N=g[P]|0;E&&N==y||(I[P]=N,E=!1)}this.g=I}var l={};function u(g){return-128<=g&&128>g?s(g,function(y){return new o([y|0],0>y?-1:0)}):new o([g|0],0>g?-1:0)}function c(g){if(isNaN(g)||!isFinite(g))return f;if(0>g)return b(c(-g));for(var y=[],I=1,E=0;g>=I;E++)y[E]=g/I|0,I*=4294967296;return new o(y,0)}function d(g,y){if(g.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(g.charAt(0)=="-")return b(d(g.substring(1),y));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(y,8)),E=f,P=0;P<g.length;P+=8){var N=Math.min(8,g.length-P),C=parseInt(g.substring(P,P+N),y);8>N?(N=c(Math.pow(y,N)),E=E.j(N).add(c(C))):(E=E.j(I),E=E.add(c(C)))}return E}var f=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-b(this).m();for(var g=0,y=1,I=0;I<this.g.length;I++){var E=this.i(I);g+=(0<=E?E:4294967296+E)*y,y*=4294967296}return g},t.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(S(this))return"0";if(k(this))return"-"+b(this).toString(g);for(var y=c(Math.pow(g,6)),I=this,E="";;){var P=O(I,y).g;I=A(I,P.j(y));var N=((0<I.g.length?I.g[0]:I.h)>>>0).toString(g);if(I=P,S(I))return N+E;for(;6>N.length;)N="0"+N;E=N+E}},t.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function S(g){if(g.h!=0)return!1;for(var y=0;y<g.g.length;y++)if(g.g[y]!=0)return!1;return!0}function k(g){return g.h==-1}t.l=function(g){return g=A(this,g),k(g)?-1:S(g)?0:1};function b(g){for(var y=g.g.length,I=[],E=0;E<y;E++)I[E]=~g.g[E];return new o(I,~g.h).add(m)}t.abs=function(){return k(this)?b(this):this},t.add=function(g){for(var y=Math.max(this.g.length,g.g.length),I=[],E=0,P=0;P<=y;P++){var N=E+(this.i(P)&65535)+(g.i(P)&65535),C=(N>>>16)+(this.i(P)>>>16)+(g.i(P)>>>16);E=C>>>16,N&=65535,C&=65535,I[P]=C<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function A(g,y){return g.add(b(y))}t.j=function(g){if(S(this)||S(g))return f;if(k(this))return k(g)?b(this).j(b(g)):b(b(this).j(g));if(k(g))return b(this.j(b(g)));if(0>this.l(T)&&0>g.l(T))return c(this.m()*g.m());for(var y=this.g.length+g.g.length,I=[],E=0;E<2*y;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var P=0;P<g.g.length;P++){var N=this.i(E)>>>16,C=this.i(E)&65535,Ce=g.i(P)>>>16,yt=g.i(P)&65535;I[2*E+2*P]+=C*yt,w(I,2*E+2*P),I[2*E+2*P+1]+=N*yt,w(I,2*E+2*P+1),I[2*E+2*P+1]+=C*Ce,w(I,2*E+2*P+1),I[2*E+2*P+2]+=N*Ce,w(I,2*E+2*P+2)}for(E=0;E<y;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=y;E<2*y;E++)I[E]=0;return new o(I,0)};function w(g,y){for(;(g[y]&65535)!=g[y];)g[y+1]+=g[y]>>>16,g[y]&=65535,y++}function R(g,y){this.g=g,this.h=y}function O(g,y){if(S(y))throw Error("division by zero");if(S(g))return new R(f,f);if(k(g))return y=O(b(g),y),new R(b(y.g),b(y.h));if(k(y))return y=O(g,b(y)),new R(b(y.g),y.h);if(30<g.g.length){if(k(g)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,E=y;0>=E.l(g);)I=$(I),E=$(E);var P=F(I,1),N=F(E,1);for(E=F(E,2),I=F(I,2);!S(E);){var C=N.add(E);0>=C.l(g)&&(P=P.add(I),N=C),E=F(E,1),I=F(I,1)}return y=A(g,P.j(y)),new R(P,y)}for(P=f;0<=g.l(y);){for(I=Math.max(1,Math.floor(g.m()/y.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),N=c(I),C=N.j(y);k(C)||0<C.l(g);)I-=E,N=c(I),C=N.j(y);S(N)&&(N=m),P=P.add(N),g=A(g,C)}return new R(P,g)}t.A=function(g){return O(this,g).h},t.and=function(g){for(var y=Math.max(this.g.length,g.g.length),I=[],E=0;E<y;E++)I[E]=this.i(E)&g.i(E);return new o(I,this.h&g.h)},t.or=function(g){for(var y=Math.max(this.g.length,g.g.length),I=[],E=0;E<y;E++)I[E]=this.i(E)|g.i(E);return new o(I,this.h|g.h)},t.xor=function(g){for(var y=Math.max(this.g.length,g.g.length),I=[],E=0;E<y;E++)I[E]=this.i(E)^g.i(E);return new o(I,this.h^g.h)};function $(g){for(var y=g.g.length+1,I=[],E=0;E<y;E++)I[E]=g.i(E)<<1|g.i(E-1)>>>31;return new o(I,g.h)}function F(g,y){var I=y>>5;y%=32;for(var E=g.g.length-I,P=[],N=0;N<E;N++)P[N]=0<y?g.i(N+I)>>>y|g.i(N+I+1)<<32-y:g.i(N+I);return new o(P,g.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,n0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,_i=o}).apply(typeof _v<"u"?_v:typeof self<"u"?self:typeof window<"u"?window:{});var Uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var r0,xa,i0,uc,Ip,s0,o0,a0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uu=="object"&&Uu];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var L=a[_];if(!(L in p))break e;p=p[L]}a=a[a.length-1],_=p[a],h=h(_),h!=_&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,_=!1,L={next:function(){if(!_&&p<a.length){var V=p++;return{value:h(V,a[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,_),a.apply(h,L)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function T(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(_,L,V){for(var q=Array(arguments.length-2),De=2;De<arguments.length;De++)q[De-2]=arguments[De];return h.prototype[L].apply(_,q)}}function k(a){const h=a.length;if(0<h){const p=Array(h);for(let _=0;_<h;_++)p[_]=a[_];return p}return[]}function b(a,h){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const L=a.length||0,V=_.length||0;a.length=L+V;for(let q=0;q<V;q++)a[L+q]=_[q]}else a.push(_)}}class A{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function w(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var $=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function F(a,h,p){for(const _ in a)h.call(p,a[_],_,a)}function g(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function y(a){const h={};for(const p in a)h[p]=a[p];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,h){let p,_;for(let L=1;L<arguments.length;L++){_=arguments[L];for(p in _)a[p]=_[p];for(let V=0;V<I.length;V++)p=I[V],Object.prototype.hasOwnProperty.call(_,p)&&(a[p]=_[p])}}function P(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function N(a){l.setTimeout(()=>{throw a},0)}function C(){var a=ie;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Ce{constructor(){this.h=this.g=null}add(h,p){const _=yt.get();_.set(h,p),this.h?this.h.next=_:this.g=_,this.h=_}}var yt=new A(()=>new Vn,a=>a.reset());class Vn{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,W=!1,ie=new Ce,ue=()=>{const a=l.Promise.resolve(void 0);Wt=()=>{a.then(Ae)}};var Ae=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(p){N(p)}var h=yt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}W=!1};function fe(){this.s=this.s,this.C=this.C}fe.prototype.s=!1,fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Ut=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};l.addEventListener("test",p,h),l.removeEventListener("test",p,h)}catch{}return a}();function Ye(a,h){if(Ne.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if($){e:{try{O(h.nodeName);var L=!0;break e}catch{}L=!1}L||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:_t[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ye.aa.h.call(this)}}S(Ye,Ne);var _t={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vt="closure_listenable_"+(1e6*Math.random()|0),Ps=0;function pd(a,h,p,_,L){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!_,this.ha=L,this.key=++Ps,this.da=this.fa=!1}function ks(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function xs(a){this.src=a,this.g={},this.h=0}xs.prototype.add=function(a,h,p,_,L){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var q=Un(a,h,_,L);return-1<q?(h=a[q],p||(h.fa=!1)):(h=new pd(h,this.src,V,!!_,L),h.fa=p,a.push(h)),h};function ot(a,h){var p=h.type;if(p in a.g){var _=a.g[p],L=Array.prototype.indexOf.call(_,h,void 0),V;(V=0<=L)&&Array.prototype.splice.call(_,L,1),V&&(ks(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Un(a,h,p,_){for(var L=0;L<a.length;++L){var V=a[L];if(!V.da&&V.listener==h&&V.capture==!!p&&V.ha==_)return L}return-1}var Ns="closure_lm_"+(1e6*Math.random()|0),Go={};function Fn(a,h,p,_,L){if(Array.isArray(h)){for(var V=0;V<h.length;V++)Fn(a,h[V],p,_,L);return null}return p=Ur(p),a&&a[vt]?a.K(h,p,c(_)?!!_.capture:!1,L):md(a,h,p,!1,_,L)}function md(a,h,p,_,L,V){if(!h)throw Error("Invalid event type");var q=c(L)?!!L.capture:!!L,De=Yo(a);if(De||(a[Ns]=De=new xs(a)),p=De.add(h,p,_,q,V),p.proxy)return p;if(_=gd(),p.proxy=_,_.src=a,_.listener=p,a.addEventListener)Ut||(L=q),L===void 0&&(L=!1),a.addEventListener(h.toString(),_,L);else if(a.attachEvent)a.attachEvent(iu(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function gd(){function a(p){return h.call(a.src,a.listener,p)}const h=yd;return a}function Ko(a,h,p,_,L){if(Array.isArray(h))for(var V=0;V<h.length;V++)Ko(a,h[V],p,_,L);else _=c(_)?!!_.capture:!!_,p=Ur(p),a&&a[vt]?(a=a.i,h=String(h).toString(),h in a.g&&(V=a.g[h],p=Un(V,p,_,L),-1<p&&(ks(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete a.g[h],a.h--)))):a&&(a=Yo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Un(h,p,_,L)),(p=-1<a?h[a]:null)&&Qo(p))}function Qo(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[vt])ot(h.i,a);else{var p=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(p,_,a.capture):h.detachEvent?h.detachEvent(iu(p),_):h.addListener&&h.removeListener&&h.removeListener(_),(p=Yo(h))?(ot(p,a),p.h==0&&(p.src=null,h[Ns]=null)):ks(a)}}}function iu(a){return a in Go?Go[a]:Go[a]="on"+a}function yd(a,h){if(a.da)a=!0;else{h=new Ye(h,this);var p=a.listener,_=a.ha||a.src;a.fa&&Qo(a),a=p.call(_,h)}return a}function Yo(a){return a=a[Ns],a instanceof xs?a:null}var Tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ur(a){return typeof a=="function"?a:(a[Tn]||(a[Tn]=function(h){return a.handleEvent(h)}),a[Tn])}function at(){fe.call(this),this.i=new xs(this),this.M=this,this.F=null}S(at,fe),at.prototype[vt]=!0,at.prototype.removeEventListener=function(a,h,p,_){Ko(this,a,h,p,_)};function lt(a,h){var p,_=a.F;if(_)for(p=[];_;_=_.F)p.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Ne(h,a);else if(h instanceof Ne)h.target=h.target||a;else{var L=h;h=new Ne(_,a),E(h,L)}if(L=!0,p)for(var V=p.length-1;0<=V;V--){var q=h.g=p[V];L=Zt(q,_,!0,h)&&L}if(q=h.g=a,L=Zt(q,_,!0,h)&&L,L=Zt(q,_,!1,h)&&L,p)for(V=0;V<p.length;V++)q=h.g=p[V],L=Zt(q,_,!1,h)&&L}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],_=0;_<p.length;_++)ks(p[_]);delete a.g[h],a.h--}}this.F=null},at.prototype.K=function(a,h,p,_){return this.i.add(String(a),h,!1,p,_)},at.prototype.L=function(a,h,p,_){return this.i.add(String(a),h,!0,p,_)};function Zt(a,h,p,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var L=!0,V=0;V<h.length;++V){var q=h[V];if(q&&!q.da&&q.capture==p){var De=q.listener,Et=q.ha||q.src;q.fa&&ot(a.i,q),L=De.call(Et,_)!==!1&&L}}return L&&!_.defaultPrevented}function fn(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Jo(a){a.g=fn(()=>{a.g=null,a.i&&(a.i=!1,Jo(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class bs extends fe{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Jo(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(a){fe.call(this),this.h=a,this.g={}}S(Fi,fe);var In=[];function Xo(a){F(a.g,function(h,p){this.g.hasOwnProperty(p)&&Qo(h)},a),a.g={}}Fi.prototype.N=function(){Fi.aa.N.call(this),Xo(this)},Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ds=l.JSON.stringify,su=l.JSON.parse,_d=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Os(){}Os.prototype.h=null;function ji(a){return a.h||(a.h=a.i())}function Zo(){}var cr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $i(){Ne.call(this,"d")}S($i,Ne);function ea(){Ne.call(this,"c")}S(ea,Ne);var jn={},ou=null;function Bi(){return ou=ou||new at}jn.La="serverreachability";function zi(a){Ne.call(this,jn.La,a)}S(zi,Ne);function $n(a){const h=Bi();lt(h,new zi(h))}jn.STAT_EVENT="statevent";function au(a,h){Ne.call(this,jn.STAT_EVENT,a),this.stat=h}S(au,Ne);function wt(a){const h=Bi();lt(h,new au(h,a))}jn.Ma="timingevent";function x(a,h){Ne.call(this,jn.Ma,a),this.size=h}S(x,Ne);function D(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function M(){this.g=!0}M.prototype.xa=function(){this.g=!1};function z(a,h,p,_,L,V){a.info(function(){if(a.g)if(V)for(var q="",De=V.split("&"),Et=0;Et<De.length;Et++){var Ie=De[Et].split("=");if(1<Ie.length){var Pt=Ie[0];Ie=Ie[1];var kt=Pt.split("_");q=2<=kt.length&&kt[1]=="type"?q+(Pt+"="+Ie+"&"):q+(Pt+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+_+") [attempt "+L+"]: "+h+`
`+p+`
`+q})}function G(a,h,p,_,L,V,q){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+L+"]: "+h+`
`+p+`
`+V+" "+q})}function ee(a,h,p,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Z(a,p)+(_?" "+_:"")})}function ae(a,h){a.info(function(){return"TIMEOUT: "+h})}M.prototype.info=function(){};function Z(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var _=p[a];if(!(2>_.length)){var L=_[1];if(Array.isArray(L)&&!(1>L.length)){var V=L[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<L.length;q++)L[q]=""}}}}return Ds(p)}catch{return h}}var X={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Y={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},te;function ce(){}S(ce,Os),ce.prototype.g=function(){return new XMLHttpRequest},ce.prototype.i=function(){return{}},te=new ce;function he(a,h,p,_){this.j=a,this.i=h,this.l=p,this.R=_||1,this.U=new Fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new et}function et(){this.i=null,this.g="",this.h=!1}var Pe={},_e={};function Le(a,h,p){a.L=1,a.v=hu(pr(h)),a.m=p,a.P=!0,hr(a,null)}function hr(a,h){a.F=Date.now(),Ft(a),a.A=pr(a.v);var p=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),uy(p.i,"t",_),a.C=0,p=a.j.J,a.h=new et,a.g=Cy(a.j,p?h:null,!a.m),0<a.O&&(a.M=new bs(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,_=a.ca;var L="readystatechange";Array.isArray(L)||(L&&(In[0]=L.toString()),L=In);for(var V=0;V<L.length;V++){var q=Fn(p,L[V],_||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),$n(),z(a.i,a.u,a.A,a.l,a.R,a.m)}he.prototype.ca=function(a){a=a.target;const h=this.M;h&&mr(a)==3?h.j():this.Y(a)},he.prototype.Y=function(a){try{if(a==this.g)e:{const kt=mr(this.g);var h=this.g.Ba();const Us=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||gy(this.g)))){this.J||kt!=4||h==7||(h==8||0>=Us?$n(3):$n(2)),dr(this);var p=this.g.Z();this.X=p;t:if(Fr(this)){var _=gy(this.g);a="";var L=_.length,V=mr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pn(this),en(this);var q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(V&&h==L-1)});_.length=0,this.h.g+=a,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,G(this.i,this.u,this.A,this.l,this.R,kt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var De,Et=this.g;if((De=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(De)){var Ie=De;break t}}Ie=null}if(p=Ie)ee(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jr(this,p);else{this.o=!1,this.s=3,wt(12),pn(this),en(this);break e}}if(this.P){p=!0;let An;for(;!this.J&&this.C<q.length;)if(An=Sn(this,q),An==_e){kt==4&&(this.s=4,wt(14),p=!1),ee(this.i,this.l,null,"[Incomplete Response]");break}else if(An==Pe){this.s=4,wt(15),ee(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else ee(this.i,this.l,An,null),jr(this,An);if(Fr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||q.length!=0||this.h.h||(this.s=1,wt(16),p=!1),this.o=this.o&&p,!p)ee(this.i,this.l,q,"[Invalid Chunked Response]"),pn(this),en(this);else if(0<q.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Td(Pt),Pt.M=!0,wt(11))}}else ee(this.i,this.l,q,null),jr(this,q);kt==4&&pn(this),this.o&&!this.J&&(kt==4?Iy(this.j,this):(this.o=!1,Ft(this)))}else o1(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),pn(this),en(this)}}}catch{}finally{}};function Fr(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Sn(a,h){var p=a.C,_=h.indexOf(`
`,p);return _==-1?_e:(p=Number(h.substring(p,_)),isNaN(p)?Pe:(_+=1,_+p>h.length?_e:(h=h.slice(_,_+p),a.C=_+p,h)))}he.prototype.cancel=function(){this.J=!0,pn(this)};function Ft(a){a.S=Date.now()+a.I,Ls(a,a.I)}function Ls(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=D(m(a.ba,a),h)}function dr(a){a.B&&(l.clearTimeout(a.B),a.B=null)}he.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ae(this.i,this.A),this.L!=2&&($n(),wt(17)),pn(this),this.s=2,en(this)):Ls(this,this.S-a)};function en(a){a.j.G==0||a.J||Iy(a.j,a)}function pn(a){dr(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Xo(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function jr(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||$e(p.h,a))){if(!a.K&&$e(p.h,a)&&p.G==3){try{var _=p.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var L=_;if(L[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)yu(p),mu(p);else break e;Ed(p),wt(18)}}else p.za=L[1],0<p.za-p.T&&37500>L[2]&&p.F&&p.v==0&&!p.C&&(p.C=D(m(p.Za,p),6e3));if(1>=$r(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Wi(p,11)}else if((a.K||p.g==a)&&yu(p),!w(h))for(L=p.Da.g.parse(h),h=0;h<L.length;h++){let Ie=L[h];if(p.T=Ie[0],Ie=Ie[1],p.G==2)if(Ie[0]=="c"){p.K=Ie[1],p.ia=Ie[2];const Pt=Ie[3];Pt!=null&&(p.la=Pt,p.j.info("VER="+p.la));const kt=Ie[4];kt!=null&&(p.Aa=kt,p.j.info("SVER="+p.Aa));const Us=Ie[5];Us!=null&&typeof Us=="number"&&0<Us&&(_=1.5*Us,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const An=a.g;if(An){const vu=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vu){var V=_.h;V.g||vu.indexOf("spdy")==-1&&vu.indexOf("quic")==-1&&vu.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Bn(V,V.h),V.h=null))}if(_.D){const Id=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Id&&(_.ya=Id,Ue(_.I,_.D,Id))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var q=a;if(_.qa=Ry(_,_.J?_.ia:null,_.W),q.K){ta(_.h,q);var De=q,Et=_.L;Et&&(De.I=Et),De.B&&(dr(De),Ft(De)),_.g=q}else Ey(_);0<p.i.length&&gu(p)}else Ie[0]!="stop"&&Ie[0]!="close"||Wi(p,7);else p.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Wi(p,7):wd(p):Ie[0]!="noop"&&p.l&&p.l.ta(Ie),p.v=0)}}$n(4)}catch{}}var we=class{constructor(a,h){this.g=a,this.map=h}};function Ve(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fr(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function $r(a){return a.h?1:a.g?a.g.size:0}function $e(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Bn(a,h){a.g?a.g.add(h):a.h=h}function ta(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Ve.prototype.cancel=function(){if(this.i=lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return k(a.i)}function WA(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,_=0;_<p;_++)h.push(a[_]);return h}h=[],p=0;for(_ in a)h[p++]=a[_];return h}function qA(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const _ in a)h[p++]=_;return h}}}function ry(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=qA(a),_=WA(a),L=_.length,V=0;V<L;V++)h.call(void 0,_[V],p&&p[V],a)}var iy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GA(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var _=a[p].indexOf("="),L=null;if(0<=_){var V=a[p].substring(0,_);L=a[p].substring(_+1)}else V=a[p];h(V,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Hi(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Hi){this.h=a.h,uu(this,a.j),this.o=a.o,this.g=a.g,cu(this,a.s),this.l=a.l;var h=a.i,p=new ia;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),sy(this,p),this.m=a.m}else a&&(h=String(a).match(iy))?(this.h=!1,uu(this,h[1]||"",!0),this.o=na(h[2]||""),this.g=na(h[3]||"",!0),cu(this,h[4]),this.l=na(h[5]||"",!0),sy(this,h[6]||"",!0),this.m=na(h[7]||"")):(this.h=!1,this.i=new ia(null,this.h))}Hi.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ra(h,oy,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ra(h,oy,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(ra(p,p.charAt(0)=="/"?YA:QA,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",ra(p,XA)),a.join("")};function pr(a){return new Hi(a)}function uu(a,h,p){a.j=p?na(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function cu(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function sy(a,h,p){h instanceof ia?(a.i=h,ZA(a.i,a.h)):(p||(h=ra(h,JA)),a.i=new ia(h,a.h))}function Ue(a,h,p){a.i.set(h,p)}function hu(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function na(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ra(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,KA),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function KA(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var oy=/[#\/\?@]/g,QA=/[#\?:]/g,YA=/[#\?]/g,JA=/[#\?@]/g,XA=/#/g;function ia(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Br(a){a.g||(a.g=new Map,a.h=0,a.i&&GA(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=ia.prototype,t.add=function(a,h){Br(this),this.i=null,a=Ms(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function ay(a,h){Br(a),h=Ms(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ly(a,h){return Br(a),h=Ms(a,h),a.g.has(h)}t.forEach=function(a,h){Br(this),this.g.forEach(function(p,_){p.forEach(function(L){a.call(h,L,_,this)},this)},this)},t.na=function(){Br(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let _=0;_<h.length;_++){const L=a[_];for(let V=0;V<L.length;V++)p.push(h[_])}return p},t.V=function(a){Br(this);let h=[];if(typeof a=="string")ly(this,a)&&(h=h.concat(this.g.get(Ms(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return Br(this),this.i=null,a=Ms(this,a),ly(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function uy(a,h,p){ay(a,h),0<p.length&&(a.i=null,a.g.set(Ms(a,h),k(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var _=h[p];const V=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var L=V;q[_]!==""&&(L+="="+encodeURIComponent(String(q[_]))),a.push(L)}}return this.i=a.join("&")};function Ms(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ZA(a,h){h&&!a.j&&(Br(a),a.i=null,a.g.forEach(function(p,_){var L=_.toLowerCase();_!=L&&(ay(this,_),uy(this,L,p))},a)),a.j=h}function e1(a,h){const p=new M;if(l.Image){const _=new Image;_.onload=T(zr,p,"TestLoadImage: loaded",!0,h,_),_.onerror=T(zr,p,"TestLoadImage: error",!1,h,_),_.onabort=T(zr,p,"TestLoadImage: abort",!1,h,_),_.ontimeout=T(zr,p,"TestLoadImage: timeout",!1,h,_),l.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function t1(a,h){const p=new M,_=new AbortController,L=setTimeout(()=>{_.abort(),zr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(V=>{clearTimeout(L),V.ok?zr(p,"TestPingServer: ok",!0,h):zr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(L),zr(p,"TestPingServer: error",!1,h)})}function zr(a,h,p,_,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),_(p)}catch{}}function n1(){this.g=new _d}function r1(a,h,p){const _=p||"";try{ry(a,function(L,V){let q=L;c(L)&&(q=Ds(L)),h.push(_+V+"="+encodeURIComponent(q))})}catch(L){throw h.push(_+"type="+encodeURIComponent("_badmap")),L}}function du(a){this.l=a.Ub||null,this.j=a.eb||!1}S(du,Os),du.prototype.g=function(){return new fu(this.l,this.j)},du.prototype.i=function(a){return function(){return a}}({});function fu(a,h){at.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(fu,at),t=fu.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,oa(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sa(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,oa(this)),this.g&&(this.readyState=3,oa(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cy(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function cy(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?sa(this):oa(this),this.readyState==3&&cy(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,sa(this))},t.Qa=function(a){this.g&&(this.response=a,sa(this))},t.ga=function(){this.g&&sa(this)};function sa(a){a.readyState=4,a.l=null,a.j=null,a.v=null,oa(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function oa(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(fu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function hy(a){let h="";return F(a,function(p,_){h+=_,h+=":",h+=p,h+=`\r
`}),h}function vd(a,h,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=hy(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Ue(a,h,p))}function Ke(a){at.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ke,at);var i1=/^https?$/i,s1=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():te.g(),this.v=this.o?ji(this.o):ji(te),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){dy(this,V);return}if(a=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var L in _)p.set(L,_[L]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())p.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),L=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(s1,h,void 0))||_||L||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of p)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{my(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){dy(this,V)}};function dy(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,fy(a),pu(a)}function fy(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),pu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pu(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?py(this):this.bb())},t.bb=function(){py(this)};function py(a){if(a.h&&typeof o<"u"&&(!a.v[1]||mr(a)!=4||a.Z()!=2)){if(a.u&&mr(a)==4)fn(a.Ea,0,a);else if(lt(a,"readystatechange"),mr(a)==4){a.h=!1;try{const q=a.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var _;if(_=q===0){var L=String(a.D).match(iy)[1]||null;!L&&l.self&&l.self.location&&(L=l.self.location.protocol.slice(0,-1)),_=!i1.test(L?L.toLowerCase():"")}p=_}if(p)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var V=2<mr(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",fy(a)}}finally{pu(a)}}}}function pu(a,h){if(a.g){my(a);const p=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||lt(a,"ready");try{p.onreadystatechange=_}catch{}}}function my(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function mr(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<mr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),su(h)}};function gy(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function o1(a){const h={};a=(a.g&&2<=mr(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(w(a[_]))continue;var p=P(a[_]);const L=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=h[L]||[];h[L]=V,V.push(p)}g(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function aa(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function yy(a){this.Aa=0,this.i=[],this.j=new M,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=aa("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=aa("baseRetryDelayMs",5e3,a),this.cb=aa("retryDelaySeedMs",1e4,a),this.Wa=aa("forwardChannelMaxRetries",2,a),this.wa=aa("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Ve(a&&a.concurrentRequestLimit),this.Da=new n1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=yy.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,_){wt(0),this.W=a,this.H=h||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=Ry(this,null,this.W),gu(this)};function wd(a){if(_y(a),a.G==3){var h=a.U++,p=pr(a.I);if(Ue(p,"SID",a.K),Ue(p,"RID",h),Ue(p,"TYPE","terminate"),la(a,p),h=new he(a,a.j,h),h.L=2,h.v=hu(pr(p)),p=!1,l.navigator&&l.navigator.sendBeacon)try{p=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&l.Image&&(new Image().src=h.v,p=!0),p||(h.g=Cy(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ft(h)}Ay(a)}function mu(a){a.g&&(Td(a),a.g.cancel(),a.g=null)}function _y(a){mu(a),a.u&&(l.clearTimeout(a.u),a.u=null),yu(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function gu(a){if(!fr(a.h)&&!a.s){a.s=!0;var h=a.Ga;Wt||ue(),W||(Wt(),W=!0),ie.add(h,a),a.B=0}}function a1(a,h){return $r(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=D(m(a.Ga,a,h),Sy(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const L=new he(this,this.j,a);let V=this.o;if(this.S&&(V?(V=y(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(L.H=V,V=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=wy(this,L,h),p=pr(this.I),Ue(p,"RID",a),Ue(p,"CVER",22),this.D&&Ue(p,"X-HTTP-Session-Id",this.D),la(this,p),V&&(this.O?h="headers="+encodeURIComponent(String(hy(V)))+"&"+h:this.m&&vd(p,this.m,V)),Bn(this.h,L),this.Ua&&Ue(p,"TYPE","init"),this.P?(Ue(p,"$req",h),Ue(p,"SID","null"),L.T=!0,Le(L,p,null)):Le(L,p,h),this.G=2}}else this.G==3&&(a?vy(this,a):this.i.length==0||fr(this.h)||vy(this))};function vy(a,h){var p;h?p=h.l:p=a.U++;const _=pr(a.I);Ue(_,"SID",a.K),Ue(_,"RID",p),Ue(_,"AID",a.T),la(a,_),a.m&&a.o&&vd(_,a.m,a.o),p=new he(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=wy(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Bn(a.h,p),Le(p,_,h)}function la(a,h){a.H&&F(a.H,function(p,_){Ue(h,_,p)}),a.l&&ry({},function(p,_){Ue(h,_,p)})}function wy(a,h,p){p=Math.min(a.i.length,p);var _=a.l?m(a.l.Na,a.l,a):null;e:{var L=a.i;let V=-1;for(;;){const q=["count="+p];V==-1?0<p?(V=L[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let De=!0;for(let Et=0;Et<p;Et++){let Ie=L[Et].g;const Pt=L[Et].map;if(Ie-=V,0>Ie)V=Math.max(0,L[Et].g-100),De=!1;else try{r1(Pt,q,"req"+Ie+"_")}catch{_&&_(Pt)}}if(De){_=q.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,_}function Ey(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Wt||ue(),W||(Wt(),W=!0),ie.add(h,a),a.v=0}}function Ed(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=D(m(a.Fa,a),Sy(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ty(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=D(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),mu(this),Ty(this))};function Td(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ty(a){a.g=new he(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=pr(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),la(a,h),a.m&&a.o&&vd(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=hu(pr(h)),p.m=null,p.P=!0,hr(p,a)}t.Za=function(){this.C!=null&&(this.C=null,mu(this),Ed(this),wt(19))};function yu(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Iy(a,h){var p=null;if(a.g==h){yu(a),Td(a),a.g=null;var _=2}else if($e(a.h,h))p=h.D,ta(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var L=a.B;_=Bi(),lt(_,new x(_,p)),gu(a)}else Ey(a);else if(L=h.s,L==3||L==0&&0<h.X||!(_==1&&a1(a,h)||_==2&&Ed(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),L){case 1:Wi(a,5);break;case 4:Wi(a,10);break;case 3:Wi(a,6);break;default:Wi(a,2)}}}function Sy(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Wi(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),_=a.Xa;const L=!_;_=new Hi(_||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||uu(_,"https"),hu(_),L?e1(_.toString(),p):t1(_.toString(),p)}else wt(2);a.G=0,a.l&&a.l.sa(h),Ay(a),_y(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function Ay(a){if(a.G=0,a.ka=[],a.l){const h=lu(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Ry(a,h,p){var _=p instanceof Hi?pr(p):new Hi(p);if(_.g!="")h&&(_.g=h+"."+_.g),cu(_,_.s);else{var L=l.location;_=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var V=new Hi(null);_&&uu(V,_),h&&(V.g=h),L&&cu(V,L),p&&(V.l=p),_=V}return p=a.D,h=a.ya,p&&h&&Ue(_,p,h),Ue(_,"VER",a.la),la(a,_),_}function Cy(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ke(new du({eb:p})):new Ke(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Py(){}t=Py.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _u(){}_u.prototype.g=function(a,h){return new tn(a,h)};function tn(a,h){at.call(this),this.g=new yy(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!w(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!w(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Vs(this)}S(tn,at),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){wd(this.g)},tn.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Ds(a),a=p);h.i.push(new we(h.Ya++,a)),h.G==3&&gu(h)},tn.prototype.N=function(){this.g.l=null,delete this.j,wd(this.g),delete this.g,tn.aa.N.call(this)};function ky(a){$i.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(ky,$i);function xy(){ea.call(this),this.status=1}S(xy,ea);function Vs(a){this.g=a}S(Vs,Py),Vs.prototype.ua=function(){lt(this.g,"a")},Vs.prototype.ta=function(a){lt(this.g,new ky(a))},Vs.prototype.sa=function(a){lt(this.g,new xy)},Vs.prototype.ra=function(){lt(this.g,"b")},_u.prototype.createWebChannel=_u.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,a0=function(){return new _u},o0=function(){return Bi()},s0=jn,Ip={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},X.NO_ERROR=0,X.TIMEOUT=8,X.HTTP_ERROR=6,uc=X,Y.COMPLETE="complete",i0=Y,Zo.EventType=cr,cr.OPEN="a",cr.CLOSE="b",cr.ERROR="c",cr.MESSAGE="d",at.prototype.listen=at.prototype.K,xa=Zo,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,r0=Ke}).apply(typeof Uu<"u"?Uu:typeof self<"u"?self:typeof window<"u"?window:{});const vv="@firebase/firestore",wv="4.9.0";/**
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
 */let jo="12.0.0";/**
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
 */const gs=new Xm("@firebase/firestore");function $s(){return gs.logLevel}function Q(t,...e){if(gs.logLevel<=me.DEBUG){const n=e.map(tg);gs.debug(`Firestore (${jo}): ${t}`,...n)}}function xr(t,...e){if(gs.logLevel<=me.ERROR){const n=e.map(tg);gs.error(`Firestore (${jo}): ${t}`,...n)}}function Po(t,...e){if(gs.logLevel<=me.WARN){const n=e.map(tg);gs.warn(`Firestore (${jo}): ${t}`,...n)}}function tg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function re(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,l0(t,r,n)}function l0(t,e,n){let r=`FIRESTORE (${jo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw xr(r),new Error(r)}function ve(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||l0(e,i,r)}function le(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Oi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class u0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class cN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hN{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new u0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new Dt(e)}}class dN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ev{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ev(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ev(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ng{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=mN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Sp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return sf(i)===sf(s)?ge(i,s):sf(i)?1:-1}return ge(t.length,e.length)}const gN=55296,yN=57343;function sf(t){const e=t.charCodeAt(0);return e>=gN&&e<=yN}function ko(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Tv="__name__";class qn{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&re(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=qn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ge(e.length,n.length)}static compareSegments(e,n){const r=qn.isNumericId(e),i=qn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?qn.extractNumericId(e).compare(qn.extractNumericId(n)):Sp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _i.fromString(e.substring(4,e.length-2))}}class be extends qn{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const _N=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class St extends qn{construct(e,n,r){return new St(e,n,r)}static isValidIdentifier(e){return _N.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),St.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tv}static keyField(){return new St([Tv])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new St(n)}static emptyPath(){return new St([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(be.fromString(e))}static fromName(e){return new ne(be.fromString(e).popFirst(5))}static empty(){return new ne(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new be(e.slice()))}}/**
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
 */function c0(t,e,n){if(!n)throw new K(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vN(t,e,n,r){if(e===!0&&r===!0)throw new K(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Iv(t){if(!ne.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sv(t){if(ne.isDocumentKey(t))throw new K(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function h0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Hh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re(12329,{type:typeof t})}function sr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hh(t);throw new K(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function st(t,e){const n={typeString:t};return e&&(n.value=e),n}function zl(t,e){if(!h0(t))throw new K(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new K(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const Av=-62135596800,Rv=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Rv);return new Re(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Av)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rv}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zl(e,Re._jsonSchema))return new Re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Av;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Re._jsonSchemaVersion="firestore/timestamp/1.0",Re._jsonSchema={type:st("string",Re._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Re(0,0))}static max(){return new se(new Re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const El=-1;function wN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new Ai(i,ne.empty(),e)}function EN(t){return new Ai(t.readTime,t.key,El)}class Ai{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ai(se.min(),ne.empty(),El)}static max(){return new Ai(se.max(),ne.empty(),El)}}function TN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $o(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==IN)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new B((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function AN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Wh.ce=-1;/**
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
 */const rg=-1;function Hl(t){return t==null}function Xc(t){return t===0&&1/t==-1/0}function RN(t){return typeof t=="number"&&Number.isInteger(t)&&!Xc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const d0="";function CN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Cv(e)),e=PN(t.get(n),e);return Cv(e)}function PN(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case d0:n+="";break;default:n+=s}}return n}function Cv(t){return t+d0+""}/**
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
 */function Pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kN(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function f0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ge{constructor(e,n){this.comparator=e,this.root=n||It.EMPTY}insert(e,n){return new Ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new Ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fu(this.root,e,this.comparator,!0)}}class Fu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class It{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??It.RED,this.left=i??It.EMPTY,this.right=s??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new It(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return It.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new It(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new Ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kv(this.data.getIterator())}getIteratorFrom(e){return new kv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class kv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.fields=e,e.sort(St.comparator)}static empty(){return new an([])}unionWith(e){let n=new ht(St.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new an(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ko(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class p0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new p0("Invalid base64 string: "+s):s}}(e);return new Ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const xN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=xN.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="server_timestamp",g0="__type__",y0="__previous_value__",_0="__local_write_time__";function ig(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[g0])==null?void 0:r.stringValue)===m0}function qh(t){const e=t.mapValue.fields[y0];return ig(e)?qh(e):e}function Tl(t){const e=Ri(t.mapValue.fields[_0].timestampValue);return new Re(e.seconds,e.nanos)}/**
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
 */class NN{constructor(e,n,r,i,s,o,l,u,c,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d}}const Zc="(default)";class Il{constructor(e,n){this.projectId=e,this.database=n||Zc}static empty(){return new Il("","")}get isDefaultDatabase(){return this.database===Zc}isEqual(e){return e instanceof Il&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="__type__",bN="__max__",ju={mapValue:{}},w0="__vector__",eh="value";function Pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ig(t)?4:ON(t)?9007199254740991:DN(t)?10:11:re(28295,{value:t})}function or(t,e){if(t===e)return!0;const n=Pi(t);if(n!==Pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tl(t).isEqual(Tl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ri(i.timestampValue),l=Ri(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ci(i.bytesValue).isEqual(Ci(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Je(i.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Je(i.integerValue)===Je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Je(i.doubleValue),l=Je(s.doubleValue);return o===l?Xc(o)===Xc(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ko(t.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Pv(o)!==Pv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!or(o[u],l[u])))return!1;return!0}(t,e);default:return re(52216,{left:t})}}function Sl(t,e){return(t.values||[]).find(n=>or(n,e))!==void 0}function xo(t,e){if(t===e)return 0;const n=Pi(t),r=Pi(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Je(s.integerValue||s.doubleValue),u=Je(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return xv(t.timestampValue,e.timestampValue);case 4:return xv(Tl(t),Tl(e));case 5:return Sp(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Ci(s),u=Ci(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=ge(l[c],u[c]);if(d!==0)return d}return ge(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ge(Je(s.latitude),Je(o.latitude));return l!==0?l:ge(Je(s.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Nv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,T,S,k;const l=s.fields||{},u=o.fields||{},c=(m=l[eh])==null?void 0:m.arrayValue,d=(T=u[eh])==null?void 0:T.arrayValue,f=ge(((S=c==null?void 0:c.values)==null?void 0:S.length)||0,((k=d==null?void 0:d.values)==null?void 0:k.length)||0);return f!==0?f:Nv(c,d)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ju.mapValue&&o===ju.mapValue)return 0;if(s===ju.mapValue)return 1;if(o===ju.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const m=Sp(u[f],d[f]);if(m!==0)return m;const T=xo(l[u[f]],c[d[f]]);if(T!==0)return T}return ge(u.length,d.length)}(t.mapValue,e.mapValue);default:throw re(23264,{he:n})}}function xv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Ri(t),r=Ri(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function Nv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=xo(n[i],r[i]);if(s)return s}return ge(n.length,r.length)}function No(t){return Ap(t)}function Ap(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ri(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ci(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ap(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ap(n.fields[o])}`;return i+"}"}(t.mapValue):re(61005,{value:t})}function cc(t){switch(Pi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qh(t);return e?16+cc(e):16;case 5:return 2*t.stringValue.length;case 6:return Ci(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+cc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Li(r.fields,(s,o)=>{i+=s.length+cc(o)}),i}(t.mapValue);default:throw re(13486,{value:t})}}function bv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Rp(t){return!!t&&"integerValue"in t}function sg(t){return!!t&&"arrayValue"in t}function Dv(t){return!!t&&"nullValue"in t}function Ov(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function hc(t){return!!t&&"mapValue"in t}function DN(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[v0])==null?void 0:r.stringValue)===w0}function qa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qa(t.arrayValue.values[n]);return e}return{...t}}function ON(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===bN}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!hc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qa(n)}setAll(e){let n=St.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=qa(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());hc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];hc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Li(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new $t(qa(this.value))}}function E0(t){const e=[];return Li(t.fields,(n,r)=>{const i=new St([n]);if(hc(r)){const s=E0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new an(e)}/**
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
 */class mt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new mt(e,0,se.min(),se.min(),se.min(),$t.empty(),0)}static newFoundDocument(e,n,r,i){return new mt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new mt(e,2,n,se.min(),se.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,se.min(),se.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class th{constructor(e,n){this.position=e,this.inclusive=n}}function Lv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=xo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!or(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Al{constructor(e,n="asc"){this.field=e,this.dir=n}}function LN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class T0{}class it extends T0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new VN(e,n,r):n==="array-contains"?new jN(e,r):n==="in"?new $N(e,r):n==="not-in"?new BN(e,r):n==="array-contains-any"?new zN(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UN(e,r):new FN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(xo(n,this.value)):n!==null&&Pi(this.value)===Pi(n)&&this.matchesComparison(xo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends T0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ln(e,n)}matches(e){return I0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function I0(t){return t.op==="and"}function S0(t){return MN(t)&&I0(t)}function MN(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function Cp(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+No(t.value);if(S0(t))return t.filters.map(e=>Cp(e)).join(",");{const e=t.filters.map(n=>Cp(n)).join(",");return`${t.op}(${e})`}}function A0(t,e){return t instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&or(r.value,i.value)}(t,e):t instanceof Ln?function(r,i){return i instanceof Ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&A0(o,i.filters[l]),!0):!1}(t,e):void re(19439)}function R0(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${No(n.value)}`}(t):t instanceof Ln?function(n){return n.op.toString()+" {"+n.getFilters().map(R0).join(" ,")+"}"}(t):"Filter"}class VN extends it{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class UN extends it{constructor(e,n){super(e,"in",n),this.keys=C0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FN extends it{constructor(e,n){super(e,"not-in",n),this.keys=C0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function C0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class jN extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sg(n)&&Sl(n.arrayValue,this.value)}}class $N extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Sl(this.value.arrayValue,n)}}class BN extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(Sl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Sl(this.value.arrayValue,n)}}class zN extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Sl(this.value.arrayValue,r))}}/**
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
 */class HN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Vv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new HN(t,e,n,r,i,s,o)}function og(t){const e=le(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Hl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>No(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>No(r)).join(",")),e.Te=n}return e.Te}function ag(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mv(t.startAt,e.startAt)&&Mv(t.endAt,e.endAt)}function Pp(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class zo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function WN(t,e,n,r,i,s,o,l){return new zo(t,e,n,r,i,s,o,l)}function P0(t){return new zo(t)}function Uv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function k0(t){return t.collectionGroup!==null}function Ga(t){const e=le(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ht(St.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Al(s,r))}),n.has(St.keyField().canonicalString())||e.Ie.push(new Al(St.keyField(),r))}return e.Ie}function er(t){const e=le(t);return e.Ee||(e.Ee=x0(e,Ga(t))),e.Ee}function qN(t){const e=le(t);return e.de||(e.de=x0(e,t.explicitOrderBy)),e.de}function x0(t,e){if(t.limitType==="F")return Vv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Al(i.field,s)});const n=t.endAt?new th(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new th(t.startAt.position,t.startAt.inclusive):null;return Vv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kp(t,e){const n=t.filters.concat([e]);return new zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function nh(t,e,n){return new zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gh(t,e){return ag(er(t),er(e))&&t.limitType===e.limitType}function N0(t){return`${og(er(t))}|lt:${t.limitType}`}function Bs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>R0(i)).join(", ")}]`),Hl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>No(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>No(i)).join(",")),`Target(${r})`}(er(t))}; limitType=${t.limitType})`}function Kh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ne.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ga(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Lv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,Ga(r),i)||r.endAt&&!function(o,l,u){const c=Lv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,Ga(r),i))}(t,e)}function GN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function b0(t){return(e,n)=>{let r=!1;for(const i of Ga(t)){const s=KN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KN(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?xo(u,c):re(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:t.dir})}}/**
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
 */class Is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Li(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return f0(this.inner)}size(){return this.innerSize}}/**
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
 */const QN=new Ge(ne.comparator);function Nr(){return QN}const D0=new Ge(ne.comparator);function Na(...t){let e=D0;for(const n of t)e=e.insert(n.key,n);return e}function O0(t){let e=D0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ns(){return Ka()}function L0(){return Ka()}function Ka(){return new Is(t=>t.toString(),(t,e)=>t.isEqual(e))}const YN=new Ge(ne.comparator),JN=new ht(ne.comparator);function ye(...t){let e=JN;for(const n of t)e=e.add(n);return e}const XN=new ht(ge);function ZN(){return XN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xc(e)?"-0":e}}function M0(t){return{integerValue:""+t}}function eb(t,e){return RN(e)?M0(e):lg(t,e)}/**
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
 */class Qh{constructor(){this._=void 0}}function tb(t,e,n){return t instanceof Rl?function(i,s){const o={fields:{[g0]:{stringValue:m0},[_0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ig(s)&&(s=qh(s)),s&&(o.fields[y0]=s),{mapValue:o}}(n,e):t instanceof Cl?U0(t,e):t instanceof Pl?F0(t,e):function(i,s){const o=V0(i,s),l=Fv(o)+Fv(i.Ae);return Rp(o)&&Rp(i.Ae)?M0(l):lg(i.serializer,l)}(t,e)}function nb(t,e,n){return t instanceof Cl?U0(t,e):t instanceof Pl?F0(t,e):n}function V0(t,e){return t instanceof rh?function(r){return Rp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Rl extends Qh{}class Cl extends Qh{constructor(e){super(),this.elements=e}}function U0(t,e){const n=j0(e);for(const r of t.elements)n.some(i=>or(i,r))||n.push(r);return{arrayValue:{values:n}}}class Pl extends Qh{constructor(e){super(),this.elements=e}}function F0(t,e){let n=j0(e);for(const r of t.elements)n=n.filter(i=>!or(i,r));return{arrayValue:{values:n}}}class rh extends Qh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Fv(t){return Je(t.integerValue||t.doubleValue)}function j0(t){return sg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class rb{constructor(e,n){this.field=e,this.transform=n}}function ib(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Cl&&i instanceof Cl||r instanceof Pl&&i instanceof Pl?ko(r.elements,i.elements,or):r instanceof rh&&i instanceof rh?or(r.Ae,i.Ae):r instanceof Rl&&i instanceof Rl}(t.transform,e.transform)}class sb{constructor(e,n){this.version=e,this.transformResults=n}}class Lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Lt}static exists(e){return new Lt(void 0,e)}static updateTime(e){return new Lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yh{}function $0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ug(t.key,Lt.none()):new Wl(t.key,t.data,Lt.none());{const n=t.data,r=$t.empty();let i=new ht(St.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Mi(t.key,r,new an(i.toArray()),Lt.none())}}function ob(t,e,n){t instanceof Wl?function(i,s,o){const l=i.value.clone(),u=$v(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mi?function(i,s,o){if(!dc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=$v(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(B0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qa(t,e,n,r){return t instanceof Wl?function(s,o,l,u){if(!dc(s.precondition,o))return l;const c=s.value.clone(),d=Bv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mi?function(s,o,l,u){if(!dc(s.precondition,o))return l;const c=Bv(s.fieldTransforms,u,o),d=o.data;return d.setAll(B0(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,l){return dc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function ab(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=V0(r.transform,i||null);s!=null&&(n===null&&(n=$t.empty()),n.set(r.field,s))}return n||null}function jv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ko(r,i,(s,o)=>ib(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wl extends Yh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mi extends Yh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function B0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $v(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,nb(o,l,n[i]))}return r}function Bv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tb(s,o,e))}return r}class ug extends Yh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z0 extends Yh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class lb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ob(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=L0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=$0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&ko(this.mutations,e.mutations,(n,r)=>jv(n,r))&&ko(this.baseMutations,e.baseMutations,(n,r)=>jv(n,r))}}class cg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return YN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cg(e,n,r,i)}}/**
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
 */class ub{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class cb{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class hb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var tt,Ee;function H0(t){switch(t){case j.OK:return re(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return re(15467,{code:t})}}function W0(t){if(t===void 0)return xr("GRPC error has no .code"),j.UNKNOWN;switch(t){case tt.OK:return j.OK;case tt.CANCELLED:return j.CANCELLED;case tt.UNKNOWN:return j.UNKNOWN;case tt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case tt.INTERNAL:return j.INTERNAL;case tt.UNAVAILABLE:return j.UNAVAILABLE;case tt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case tt.NOT_FOUND:return j.NOT_FOUND;case tt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case tt.ABORTED:return j.ABORTED;case tt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case tt.DATA_LOSS:return j.DATA_LOSS;default:return re(39323,{code:t})}}(Ee=tt||(tt={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function db(){return new TextEncoder}/**
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
 */const fb=new _i([4294967295,4294967295],0);function zv(t){const e=db().encode(t),n=new n0;return n.update(e),new Uint8Array(n.digest())}function Hv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _i([n,r],0),new _i([i,s],0)]}class hg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ba(`Invalid padding: ${n}`);if(r<0)throw new ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ba(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=_i.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(_i.fromNumber(r)));return i.compare(fb)===1&&(i=new _i([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=zv(e),[r,i]=Hv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hg(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=zv(e),[r,i]=Hv(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Jh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ql.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jh(se.min(),i,new Ge(ge),Nr(),ye())}}class ql{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ql(r,n,ye(),ye(),ye())}}/**
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
 */class fc{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class q0{constructor(e,n){this.targetId=e,this.Ce=n}}class G0{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Wv{constructor(){this.ve=0,this.Fe=qv(),this.Me=Ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ye(),n=ye(),r=ye();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re(38017,{changeType:s})}}),new ql(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=qv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class pb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nr(),this.Je=$u(),this.He=$u(),this.Ye=new Ge(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Pp(s))if(r===0){const o=new ne(s.path);this.et(n,o,mt.newNoDocument(o,se.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,c)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Ci(r).toUint8Array()}catch(u){if(u instanceof p0)return Po("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hg(o,i,s)}catch(u){return Po(u instanceof ba?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Pp(l.target)){const u=new ne(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,mt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ye();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Jh(e,n,this.Ye,this.je,r);return this.je=Nr(),this.Je=$u(),this.He=$u(),this.Ye=new Ge(ge),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Wv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ht(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ht(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function $u(){return new Ge(ne.comparator)}function qv(){return new Ge(ne.comparator)}const mb={asc:"ASCENDING",desc:"DESCENDING"},gb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yb={and:"AND",or:"OR"};class _b{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xp(t,e){return t.useProto3Json||Hl(e)?e:{value:e}}function ih(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function K0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vb(t,e){return ih(t,e.toTimestamp())}function un(t){return ve(!!t,49232),se.fromTimestamp(function(n){const r=Ri(n);return new Re(r.seconds,r.nanos)}(t))}function dg(t,e){return Np(t,e).canonicalString()}function Np(t,e){const n=function(i){return new be(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Q0(t){const e=be.fromString(t);return ve(nS(e),10190,{key:e.toString()}),e}function sh(t,e){return dg(t.databaseId,e.path)}function Ya(t,e){const n=Q0(e);if(n.get(1)!==t.databaseId.projectId)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(J0(n))}function Y0(t,e){return dg(t.databaseId,e)}function wb(t){const e=Q0(t);return e.length===4?be.emptyPath():J0(e)}function bp(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function J0(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Gv(t,e,n){return{name:sh(t,e),fields:n.value.mapValue.fields}}function Eb(t,e){return"found"in e?function(r,i){ve(!!i.found,43571),i.found.name,i.found.updateTime;const s=Ya(r,i.found.name),o=un(i.found.updateTime),l=i.found.createTime?un(i.found.createTime):se.min(),u=new $t({mapValue:{fields:i.found.fields}});return mt.newFoundDocument(s,o,l,u)}(t,e):"missing"in e?function(r,i){ve(!!i.missing,3894),ve(!!i.readTime,22933);const s=Ya(r,i.missing),o=un(i.readTime);return mt.newNoDocument(s,o)}(t,e):re(7234,{result:e})}function Tb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:re(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ve(d===void 0||typeof d=="string",58123),Ct.fromBase64String(d||"")):(ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ct.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?j.UNKNOWN:W0(c.code);return new K(d,c.message||"")}(o);n=new G0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ya(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):se.min(),l=new $t({mapValue:{fields:r.document.fields}}),u=mt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new fc(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ya(t,r.document),s=r.readTime?un(r.readTime):se.min(),o=mt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new fc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ya(t,r.document),s=r.removedTargetIds||[];n=new fc([],s,i,null)}else{if(!("filter"in e))return re(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hb(i,s),l=r.targetId;n=new q0(l,o)}}return n}function X0(t,e){let n;if(e instanceof Wl)n={update:Gv(t,e.key,e.value)};else if(e instanceof ug)n={delete:sh(t,e.key)};else if(e instanceof Mi)n={update:Gv(t,e.key,e.data),updateMask:Nb(e.fieldMask)};else{if(!(e instanceof z0))return re(16599,{Vt:e.type});n={verify:sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Rl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Cl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Pl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof rh)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw re(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re(27497)}(t,e.precondition)),n}function Ib(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(se.min())&&(o=un(s)),new sb(o,i.transformResults||[])}(n,e))):[]}function Sb(t,e){return{documents:[Y0(t,e.path)]}}function Z0(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Y0(t,i);const s=function(c){if(c.length!==0)return tS(Ln.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Xr(m.field),direction:Pb(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=xp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ft:n,parent:i}}function Ab(t,e,n,r){const{ft:i,parent:s}=Z0(t,e),o={},l=[];let u=0;return n.forEach(c=>{const d="aggregate_"+u++;o[d]=c.alias,c.aggregateType==="count"?l.push({alias:d,count:{}}):c.aggregateType==="avg"?l.push({alias:d,avg:{field:Xr(c.fieldPath)}}):c.aggregateType==="sum"&&l.push({alias:d,sum:{field:Xr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:i.structuredQuery},parent:i.parent},gt:o,parent:s}}function Rb(t){let e=wb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1,65062);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const m=eS(f);return m instanceof Ln&&S0(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(S){return new Al(zs(S.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(f){let m;return m=typeof f=="object"?f.value:f,Hl(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,T=f.values||[];return new th(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,T=f.values||[];return new th(T,m)}(n.endAt)),WN(e,i,o,s,l,"F",u,c)}function Cb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function eS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zs(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zs(n.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zs(n.unaryFilter.field);return it.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zs(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(t):t.fieldFilter!==void 0?function(n){return it.create(zs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ln.create(n.compositeFilter.filters.map(r=>eS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(n.compositeFilter.op))}(t):re(30097,{filter:t})}function Pb(t){return mb[t]}function kb(t){return gb[t]}function xb(t){return yb[t]}function Xr(t){return{fieldPath:t.canonicalString()}}function zs(t){return St.fromServerFormat(t.fieldPath)}function tS(t){return t instanceof it?function(n){if(n.op==="=="){if(Ov(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NAN"}};if(Dv(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ov(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NAN"}};if(Dv(n.value))return{unaryFilter:{field:Xr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xr(n.field),op:kb(n.op),value:n.value}}}(t):t instanceof Ln?function(n){const r=n.getFilters().map(i=>tS(i));return r.length===1?r[0]:{compositeFilter:{op:xb(n.op),filters:r}}}(t):re(54877,{filter:t})}function Nb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class oi{constructor(e,n,r,i,s=se.min(),o=se.min(),l=Ct.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class bb{constructor(e){this.yt=e}}function Db(t){const e=Rb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nh(e,e.limit,"L"):e}/**
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
 */class Ob{constructor(){this.Cn=new Lb}addToCollectionParentIndex(e,n){return this.Cn.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(Ai.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class Lb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ht(be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ht(be.comparator)).toArray()}}/**
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
 */const Kv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rS=41943040;class Gt{static withCacheSize(e){return new Gt(e,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Gt.DEFAULT_COLLECTION_PERCENTILE=10,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gt.DEFAULT=new Gt(rS,Gt.DEFAULT_COLLECTION_PERCENTILE,Gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gt.DISABLED=new Gt(-1,0,0);/**
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
 */class bo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new bo(0)}static cr(){return new bo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv="LruGarbageCollector",Mb=1048576;function Yv([t,e],[n,r]){const i=ge(t,n);return i===0?ge(e,r):i}class Vb{constructor(e){this.Ir=e,this.buffer=new ht(Yv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Yv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Ub{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){Q(Qv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bo(n)?Q(Qv,"Ignoring IndexedDB error during garbage collection: ",n):await $o(n)}await this.Vr(3e5)})}}class Fb{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return B.resolve(Wh.ce);const r=new Vb(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Q("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Kv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kv):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,l=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),$s()<=me.DEBUG&&Q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function jb(t,e){return new Fb(t,e)}/**
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
 */class $b{constructor(){this.changes=new Is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Bb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Qa(r.mutation,i,an.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const i=ns();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Na();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ns();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Nr();const o=Ka(),l=function(){return Ka()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Mi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Qa(d.mutation,c,d.mutation.getFieldMask(),Re.now())):o.set(c.key,an.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>l.set(c,new Bb(d,o.get(c)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ka();let i=new Ge((o,l)=>o-l),s=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||an.empty();d=l.applyToLocalView(c,d),r.set(u,d);const f=(i.get(l.batchId)||ye()).add(u);i=i.insert(l.batchId,f)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,f=L0();d.forEach(m=>{if(!s.has(m)){const T=$0(n.get(m),r.get(m));T!==null&&f.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):k0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):B.resolve(ns());let l=El,u=s;return o.next(c=>B.forEach(c,(d,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),s.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ye())).next(d=>({batchId:l,changes:O0(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let i=Na();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Na();return this.indexManager.getCollectionParents(e,s).next(l=>B.forEach(l,u=>{const c=function(f,m){return new zo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,mt.newInvalidDocument(d)))});let l=Na();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Qa(d.mutation,c,an.empty(),Re.now()),Kh(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return B.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:Db(i.bundledQuery),readTime:un(i.readTime)}}(n)),B.resolve()}}/**
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
 */class Wb{constructor(){this.overlays=new Ge(ne.comparator),this.qr=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ns();return B.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=ns(),s=n.length+1,o=new ne(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ge((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=ns(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=ns(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return B.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ub(n,r));let s=this.qr.get(n);s===void 0&&(s=ye(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class qb{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
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
 */class fg{constructor(){this.Qr=new ht(ft.$r),this.Ur=new ht(ft.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new ft(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ne(new be([])),r=new ft(n,e),i=new ft(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new be([])),r=new ft(n,e),i=new ft(n,e+1);let s=ye();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ft(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
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
 */class Gb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ht(ft.$r)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lb(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new ft(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,n){return B.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?rg:this.tr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),i=new ft(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(ge);return n.forEach(i=>{const s=new ft(i,0),o=new ft(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),B.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ne.isDocumentKey(s)||(s=s.child(""));const o=new ft(new ne(s),0);let l=new ht(ge);return this.Zr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.Yr)),!0)},o),B.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return B.forEach(n.mutations,i=>{const s=new ft(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new ft(n,0),i=this.Zr.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Kb{constructor(e){this.ri=e,this.docs=function(){return new Ge(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():mt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nr();const o=n.path,l=new ne(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||TN(EN(d),r)<=0||(i.has(d.key)||Kh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,n,r,i){re(9500)}ii(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qb(this)}getSize(e){return B.resolve(this.size)}}class Qb extends $b{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class Yb{constructor(e){this.persistence=e,this.si=new Is(n=>og(n),ag),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new fg,this.targetCount=0,this.ai=bo.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),B.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new bo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Pr(n),B.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this._i.containsKey(n))}}/**
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
 */class iS{constructor(e,n){this.ui={},this.overlays={},this.ci=new Wh(0),this.li=!1,this.li=!0,this.hi=new qb,this.referenceDelegate=e(this),this.Pi=new Yb(this),this.indexManager=new Ob,this.remoteDocumentCache=function(i){return new Kb(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new bb(n),this.Ii=new Hb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Wb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new Gb(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new Jb(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return B.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Jb extends SN{constructor(e){super(),this.currentSequenceNumber=e}}class pg{constructor(e){this.persistence=e,this.Ri=new fg,this.Vi=null}static mi(e){return new pg(e)}get fi(){if(this.Vi)return this.Vi;throw re(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),B.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.fi,r=>{const i=ne.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,se.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return B.or([()=>B.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class oh{constructor(e,n){this.persistence=e,this.pi=new Is(r=>CN(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=jb(this,n)}static mi(e,n){return new oh(e,n)}Ei(){}di(e){return B.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return B.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?B.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,se.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),B.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=cc(e.data.value)),n}br(e,n,r){return B.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return B.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class mg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ye(),i=ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mg(e,n.fromCache,r,i)}}/**
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
 */class Xb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Zb{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Wk()?8:AN(Vt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Xb;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?($s()<=me.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",Bs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),B.resolve()):($s()<=me.DEBUG&&Q("QueryEngine","Query:",Bs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?($s()<=me.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",Bs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,er(n))):B.resolve())}ys(e,n){if(Uv(n))return B.resolve(null);let r=er(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=nh(n,null,"F"),r=er(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ye(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Ds(n,l);return this.Cs(n,c,o,u.readTime)?this.ys(e,nh(n,null,"F")):this.vs(e,c,n,u)}))})))}ws(e,n,r,i){return Uv(n)||i.isEqual(se.min())?B.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?B.resolve(null):($s()<=me.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bs(n)),this.vs(e,o,n,wN(i,El)).next(l=>l))})}Ds(e,n){let r=new ht(b0(e));return n.forEach((i,s)=>{Kh(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return $s()<=me.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",Bs(n)),this.ps.getDocumentsMatchingQuery(e,n,Ai.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="LocalStore",eD=3e8;class tD{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ge(ge),this.xs=new Is(s=>og(s),ag),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zb(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function nD(t,e,n,r){return new tD(t,e,n,r)}async function sS(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ye();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ls:c,removedBatchIds:o,addedBatchIds:l}))})})}function rD(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const f=c.batch,m=f.keys();let T=B.resolve();return m.forEach(S=>{T=T.next(()=>d.getEntry(u,S)).next(k=>{const b=c.docVersions.get(S);ve(b!==null,48541),k.version.compareTo(b)<0&&(f.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ye();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oS(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function iD(t,e){const n=le(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;l.push(n.Pi.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Pi.addMatchingKeys(s,d.addedDocuments,f)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?T=T.withResumeToken(Ct.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),i=i.insert(f,T),function(k,b,A){return k.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=eD?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(m,T,d)&&l.push(n.Pi.updateTargetData(s,T))});let u=Nr(),c=ye();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(sD(s,o,e.documentUpdates).next(d=>{u=d.ks,c=d.qs})),!r.isEqual(se.min())){const d=n.Pi.getLastRemoteSnapshotVersion(s).next(f=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return B.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.Ms=i,s))}function sD(t,e,n){let r=ye(),i=ye();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nr();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Q(gg,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{ks:o,qs:i}})}function oD(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=rg),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aD(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new oi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Dp(t,e,n){const r=le(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bo(o))throw o;Q(gg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Jv(t,e,n){const r=le(t);let i=se.min(),s=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=le(u),m=f.xs.get(d);return m!==void 0?B.resolve(f.Ms.get(m)):f.Pi.getTargetData(c,d)}(r,o,er(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:se.min(),n?s:ye())).next(l=>(lD(r,GN(e),l),{documents:l,Qs:s})))}function lD(t,e,n){let r=t.Os.get(e)||se.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Xv{constructor(){this.activeTargetIds=ZN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uD{constructor(){this.Mo=new Xv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Xv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cD{Oo(e){}shutdown(){}}/**
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
 */let Bu=null;function Op(){return Bu===null?Bu=function(){return 268435456+Math.round(2147483648*Math.random())}():Bu++,"0x"+Bu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="RestConnection",hD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dD{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Zc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Op(),l=this.zo(e,n.toUriEncodedString());Q(of,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:c}=new URL(l),d=Es(c);return this.Jo(e,l,u,r,d).then(f=>(Q(of,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Po(of,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+jo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=hD[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class fD{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const bt="WebChannelConnection";class pD extends dD{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Op();return new Promise((l,u)=>{const c=new r0;c.setWithCredentials(!0),c.listenOnce(i0.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case uc.NO_ERROR:const f=c.getResponseJson();Q(bt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case uc.TIMEOUT:Q(bt,`RPC '${e}' ${o} timed out`),u(new K(j.DEADLINE_EXCEEDED,"Request time out"));break;case uc.HTTP_ERROR:const m=c.getStatus();if(Q(bt,`RPC '${e}' ${o} failed with status:`,m,"response text:",c.getResponseText()),m>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const S=T==null?void 0:T.error;if(S&&S.status&&S.message){const k=function(A){const w=A.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(w)>=0?w:j.UNKNOWN}(S.status);u(new K(k,S.message))}else u(new K(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new K(j.UNAVAILABLE,"Connection failed."));break;default:re(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{Q(bt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Q(bt,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",d,r,15)})}T_(e,n,r){const i=Op(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=a0(),l=o0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");Q(bt,`Creating RPC '${e}' stream ${i}: ${d}`,u);const f=o.createWebChannel(d,u);this.I_(f);let m=!1,T=!1;const S=new fD({Yo:b=>{T?Q(bt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(Q(bt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),Q(bt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},Zo:()=>f.close()}),k=(b,A,w)=>{b.listen(A,R=>{try{w(R)}catch(O){setTimeout(()=>{throw O},0)}})};return k(f,xa.EventType.OPEN,()=>{T||(Q(bt,`RPC '${e}' stream ${i} transport opened.`),S.o_())}),k(f,xa.EventType.CLOSE,()=>{T||(T=!0,Q(bt,`RPC '${e}' stream ${i} transport closed`),S.a_(),this.E_(f))}),k(f,xa.EventType.ERROR,b=>{T||(T=!0,Po(bt,`RPC '${e}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),S.a_(new K(j.UNAVAILABLE,"The operation could not be completed")))}),k(f,xa.EventType.MESSAGE,b=>{var A;if(!T){const w=b.data[0];ve(!!w,16349);const R=w,O=(R==null?void 0:R.error)||((A=R[0])==null?void 0:A.error);if(O){Q(bt,`RPC '${e}' stream ${i} received error:`,O);const $=O.status;let F=function(I){const E=tt[I];if(E!==void 0)return W0(E)}($),g=O.message;F===void 0&&(F=j.INTERNAL,g="Unknown error status: "+$+" with message "+O.message),T=!0,S.a_(new K(F,g)),f.close()}else Q(bt,`RPC '${e}' stream ${i} received:`,w),S.u_(w)}}),k(l,s0.STAT_EVENT,b=>{b.stat===Ip.PROXY?Q(bt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Ip.NOPROXY&&Q(bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.__()},0),S}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function af(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){return new _b(t,!0)}/**
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
 */class yg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const tw="PersistentStream";class aS{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new yg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new K(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return Q(tw,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(Q(tw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mD extends aS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Tb(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?un(o.readTime):se.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=bp(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Pp(u)?{documents:Sb(s,u)}:{query:Z0(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=K0(s,o.resumeToken);const c=xp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=ih(s,o.snapshotVersion.toTimestamp());const c=xp(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Cb(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=bp(this.serializer),n.removeTarget=e,this.q_(n)}}class gD extends aS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Ib(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=bp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>X0(this.serializer,r))};this.q_(n)}}/**
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
 */class yD{}class _D extends yD{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Np(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(j.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Np(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class vD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(xr(n),this.aa=!1):Q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ys="RemoteStore";class wD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ss(this)&&(Q(ys,"Restarting streams for network reachability change."),await async function(u){const c=le(u);c.Ea.add(4),await Gl(c),c.Ra.set("Unknown"),c.Ea.delete(4),await Zh(c)}(this))})}),this.Ra=new vD(r,i)}}async function Zh(t){if(Ss(t))for(const e of t.da)await e(!0)}async function Gl(t){for(const e of t.da)await e(!1)}function lS(t,e){const n=le(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Eg(n)?wg(n):Ho(n).O_()&&vg(n,e))}function _g(t,e){const n=le(t),r=Ho(n);n.Ia.delete(e),r.O_()&&uS(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ss(n)&&n.Ra.set("Unknown"))}function vg(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ho(t).Y_(e)}function uS(t,e){t.Va.Ue(e),Ho(t).Z_(e)}function wg(t){t.Va=new pb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ho(t).start(),t.Ra.ua()}function Eg(t){return Ss(t)&&!Ho(t).x_()&&t.Ia.size>0}function Ss(t){return le(t).Ea.size===0}function cS(t){t.Va=void 0}async function ED(t){t.Ra.set("Online")}async function TD(t){t.Ia.forEach((e,n)=>{vg(t,e)})}async function ID(t,e){cS(t),Eg(t)?(t.Ra.ha(e),wg(t)):t.Ra.set("Unknown")}async function SD(t,e,n){if(t.Ra.set("Online"),e instanceof G0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){Q(ys,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ah(t,r)}else if(e instanceof fc?t.Va.Ze(e):e instanceof q0?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await oS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.Ia.get(u);if(!d)return;s.Ia.set(u,d.withResumeToken(Ct.EMPTY_BYTE_STRING,d.snapshotVersion)),uS(s,u);const f=new oi(d.target,u,c,d.sequenceNumber);vg(s,f)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Q(ys,"Failed to raise snapshot:",r),await ah(t,r)}}async function ah(t,e,n){if(!Bo(e))throw e;t.Ea.add(1),await Gl(t),t.Ra.set("Offline"),n||(n=()=>oS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q(ys,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Zh(t)})}function hS(t,e){return e().catch(n=>ah(t,n,e))}async function ed(t){const e=le(t),n=ki(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:rg;for(;AD(e);)try{const i=await oD(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,RD(e,i)}catch(i){await ah(e,i)}dS(e)&&fS(e)}function AD(t){return Ss(t)&&t.Ta.length<10}function RD(t,e){t.Ta.push(e);const n=ki(t);n.O_()&&n.X_&&n.ea(e.mutations)}function dS(t){return Ss(t)&&!ki(t).x_()&&t.Ta.length>0}function fS(t){ki(t).start()}async function CD(t){ki(t).ra()}async function PD(t){const e=ki(t);for(const n of t.Ta)e.ea(n.mutations)}async function kD(t,e,n){const r=t.Ta.shift(),i=cg.from(r,e,n);await hS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ed(t)}async function xD(t,e){e&&ki(t).X_&&await async function(r,i){if(function(o){return H0(o)&&o!==j.ABORTED}(i.code)){const s=r.Ta.shift();ki(r).B_(),await hS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ed(r)}}(t,e),dS(t)&&fS(t)}async function nw(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),Q(ys,"RemoteStore received new credentials");const r=Ss(n);n.Ea.add(3),await Gl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Zh(n)}async function ND(t,e){const n=le(t);e?(n.Ea.delete(2),await Zh(n)):e||(n.Ea.add(2),await Gl(n),n.Ra.set("Unknown"))}function Ho(t){return t.ma||(t.ma=function(n,r,i){const s=le(n);return s.sa(),new mD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:ED.bind(null,t),t_:TD.bind(null,t),r_:ID.bind(null,t),H_:SD.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Eg(t)?wg(t):t.Ra.set("Unknown")):(await t.ma.stop(),cS(t))})),t.ma}function ki(t){return t.fa||(t.fa=function(n,r,i){const s=le(n);return s.sa(),new gD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:CD.bind(null,t),r_:xD.bind(null,t),ta:PD.bind(null,t),na:kD.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await ed(t)):(await t.fa.stop(),t.Ta.length>0&&(Q(ys,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Tg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Tg(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ig(t,e){if(xr("AsyncQueue",`${e}: ${t}`),Bo(t))return new K(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Na(),this.sortedSet=new Ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class rw{constructor(){this.ga=new Ge(ne.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):re(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Do{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Do(e,n,po.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class bD{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class DD{constructor(){this.queries=iw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=le(n),s=i.queries;i.queries=iw(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new K(j.ABORTED,"Firestore shutting down"))}}function iw(){return new Is(t=>N0(t),Gh)}async function OD(t,e){const n=le(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new bD,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Ig(o,`Initialization of query '${Bs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Sg(n)}async function LD(t,e){const n=le(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MD(t,e){const n=le(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Sg(n)}function VD(t,e,n){const r=le(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Sg(t){t.Ca.forEach(e=>{e.next()})}var Lp,sw;(sw=Lp||(Lp={})).Ma="default",sw.Cache="cache";class UD{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Do(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Do.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Lp.Cache}}/**
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
 */class pS{constructor(e){this.key=e}}class mS{constructor(e){this.key=e}}class FD{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ye(),this.mutatedKeys=ye(),this.eu=b0(e),this.tu=new po(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new rw,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),T=Kh(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let b=!1;m&&T?m.data.isEqual(T.data)?S!==k&&(r.track({type:3,doc:T}),b=!0):this.su(m,T)||(r.track({type:2,doc:T}),b=!0,(u&&this.eu(T,u)>0||c&&this.eu(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),b=!0):m&&!T&&(r.track({type:1,doc:m}),b=!0,(u||c)&&(l=!0)),b&&(T?(o=o.add(T),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(T,S){const k=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Rt:b})}};return k(T)-k(S)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,c=u!==this.Za;return this.Za=u,o.length!==0||c?{snapshot:new Do(this.query,e.tu,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new rw,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ye(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new mS(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new pS(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ye();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Do.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ag="SyncEngine";class jD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $D{constructor(e){this.key=e,this.hu=!1}}class BD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Is(l=>N0(l),Gh),this.Iu=new Map,this.Eu=new Set,this.du=new Ge(ne.comparator),this.Au=new Map,this.Ru=new fg,this.Vu={},this.mu=new Map,this.fu=bo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function zD(t,e,n=!0){const r=ES(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await gS(r,e,n,!0),i}async function HD(t,e){const n=ES(t);await gS(n,e,!0,!1)}async function gS(t,e,n,r){const i=await aD(t.localStore,er(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await WD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&lS(t.remoteStore,i),l}async function WD(t,e,n,r,i){t.pu=(f,m,T)=>async function(k,b,A,w){let R=b.view.ru(A);R.Cs&&(R=await Jv(k.localStore,b.query,!1).then(({documents:g})=>b.view.ru(g,R)));const O=w&&w.targetChanges.get(b.targetId),$=w&&w.targetMismatches.get(b.targetId)!=null,F=b.view.applyChanges(R,k.isPrimaryClient,O,$);return aw(k,b.targetId,F.au),F.snapshot}(t,f,m,T);const s=await Jv(t.localStore,e,!0),o=new FD(e,s.Qs),l=o.ru(s.documents),u=ql.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);aw(t,n,c.au);const d=new jD(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),c.snapshot}async function qD(t,e,n){const r=le(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!Gh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Dp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&_g(r.remoteStore,i.targetId),Mp(r,i.targetId)}).catch($o)):(Mp(r,i.targetId),await Dp(r.localStore,i.targetId,!0))}async function GD(t,e){const n=le(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_g(n.remoteStore,r.targetId))}async function KD(t,e,n){const r=tO(t);try{const i=await function(o,l){const u=le(o),c=Re.now(),d=l.reduce((T,S)=>T.add(S.key),ye());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=Nr(),k=ye();return u.Ns.getEntries(T,d).next(b=>{S=b,S.forEach((A,w)=>{w.isValidDocument()||(k=k.add(A))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,S)).next(b=>{f=b;const A=[];for(const w of l){const R=ab(w,f.get(w.key).overlayedDocument);R!=null&&A.push(new Mi(w.key,R,E0(R.value.mapValue),Lt.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,A,l)}).next(b=>{m=b;const A=b.applyToLocalDocumentSet(f,k);return u.documentOverlayCache.saveOverlays(T,b.batchId,A)})}).then(()=>({batchId:m.batchId,changes:O0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Vu[o.currentUser.toKey()];c||(c=new Ge(ge)),c=c.insert(l,u),o.Vu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Kl(r,i.changes),await ed(r.remoteStore)}catch(i){const s=Ig(i,"Failed to persist write");n.reject(s)}}async function yS(t,e){const n=le(t);try{const r=await iD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?ve(o.hu,14607):i.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await Kl(n,r,e)}catch(r){await $o(r)}}function ow(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=le(o);u.onlineState=l;let c=!1;u.queries.forEach((d,f)=>{for(const m of f.Sa)m.va(l)&&(c=!0)}),c&&Sg(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QD(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ge(ne.comparator);o=o.insert(s,mt.newNoDocument(s,se.min()));const l=ye().add(s),u=new Jh(se.min(),new Map,new Ge(ge),o,l);await yS(r,u),r.du=r.du.remove(s),r.Au.delete(e),Rg(r)}else await Dp(r.localStore,e,!1).then(()=>Mp(r,e,n)).catch($o)}async function YD(t,e){const n=le(t),r=e.batch.batchId;try{const i=await rD(n.localStore,e);vS(n,r,null),_S(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Kl(n,i)}catch(i){await $o(i)}}async function JD(t,e,n){const r=le(t);try{const i=await function(o,l){const u=le(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(f=>(ve(f!==null,37113),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);vS(r,e,n),_S(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Kl(r,i)}catch(i){await $o(i)}}function _S(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function vS(t,e,n){const r=le(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Mp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||wS(t,r)})}function wS(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(_g(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Rg(t))}function aw(t,e,n){for(const r of n)r instanceof pS?(t.Ru.addReference(r.key,e),XD(t,r)):r instanceof mS?(Q(Ag,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||wS(t,r.key)):re(19791,{wu:r})}function XD(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(Q(Ag,"New document in limbo: "+n),t.Eu.add(r),Rg(t))}function Rg(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(be.fromString(e)),r=t.fu.next();t.Au.set(r,new $D(n)),t.du=t.du.insert(n,r),lS(t.remoteStore,new oi(er(P0(n.path)),r,"TargetPurposeLimboResolution",Wh.ce))}}async function Kl(t,e,n){const r=le(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=mg.As(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,c){const d=le(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(c,m=>B.forEach(m.Es,T=>d.persistence.referenceDelegate.addReference(f,m.targetId,T)).next(()=>B.forEach(m.ds,T=>d.persistence.referenceDelegate.removeReference(f,m.targetId,T)))))}catch(f){if(!Bo(f))throw f;Q(gg,"Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const T=d.Ms.get(m),S=T.snapshotVersion,k=T.withLastLimboFreeSnapshotVersion(S);d.Ms=d.Ms.insert(m,k)}}}(r.localStore,s))}async function ZD(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){Q(Ag,"User change. New user:",e.toKey());const r=await sS(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new K(j.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Kl(n,r.Ls)}}function eO(t,e){const n=le(t),r=n.Au.get(e);if(r&&r.hu)return ye().add(r.key);{let i=ye();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function ES(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QD.bind(null,e),e.Pu.H_=MD.bind(null,e.eventManager),e.Pu.yu=VD.bind(null,e.eventManager),e}function tO(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JD.bind(null,e),e}class lh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return nD(this.persistence,new Zb,e.initialUser,this.serializer)}Cu(e){return new iS(pg.mi,this.serializer)}Du(e){return new uD}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lh.provider={build:()=>new lh};class nO extends lh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof oh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ub(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Gt.withCacheSize(this.cacheSizeBytes):Gt.DEFAULT;return new iS(r=>oh.mi(r,n),this.serializer)}}class Vp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ow(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZD.bind(null,this.syncEngine),await ND(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DD}()}createDatastore(e){const n=Xh(e.databaseInfo.databaseId),r=function(s){return new pD(s)}(e.databaseInfo);return function(s,o,l,u){return new _D(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new wD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ow(this.syncEngine,n,0),function(){return ew.v()?new ew:new cD}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const f=new BD(i,s,o,l,u,c);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=le(i);Q(ys,"RemoteStore shutting down."),s.Ea.add(5),await Gl(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Vp.provider={build:()=>new Vp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class iO{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new K(j.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=le(i),l={documents:s.map(f=>sh(o.serializer,f))},u=await o.Ho("BatchGetDocuments",o.serializer.databaseId,be.emptyPath(),l,s.length),c=new Map;u.forEach(f=>{const m=Eb(o.serializer,f);c.set(m.key.toString(),m)});const d=[];return s.forEach(f=>{const m=c.get(f.toString());ve(!!m,55234,{key:f}),d.push(m)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ug(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=ne.fromPath(r);this.mutations.push(new z0(i,this.precondition(i)))}),await async function(r,i){const s=le(r),o={writes:i.map(l=>X0(s.serializer,l))};await s.Go("Commit",s.serializer.databaseId,be.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw re(50498,{Gu:e.constructor.name});n=se.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new K(j.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(se.min())?Lt.exists(!1):Lt.updateTime(n):Lt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(se.min()))throw new K(j.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Lt.updateTime(n)}return Lt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class sO{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new yg(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_(async()=>{const e=new iO(this.datastore),n=this.Hu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Yu(i)}))}).catch(r=>{this.Yu(r)})})}Hu(e){try{const n=this.updateFunction(e);return!Hl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ju(),Promise.resolve()))):this.deferred.reject(e)}Zu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!H0(n)}return!1}}/**
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
 */const xi="FirestoreClient";class oO{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Dt.UNAUTHENTICATED,this.clientId=ng.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Q(xi,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Q(xi,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ig(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lf(t,e){t.asyncQueue.verifyOperationInProgress(),Q(xi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function lw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await aO(t);Q(xi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>nw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>nw(e.remoteStore,i)),t._onlineComponents=e}async function aO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q(xi,"Using user provided OfflineComponentProvider");try{await lf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Po("Error using user provided cache. Falling back to memory cache: "+n),await lf(t,new lh)}}else Q(xi,"Using default OfflineComponentProvider"),await lf(t,new nO(void 0));return t._offlineComponents}async function Cg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q(xi,"Using user provided OnlineComponentProvider"),await lw(t,t._uninitializedComponentsProvider._online)):(Q(xi,"Using default OnlineComponentProvider"),await lw(t,new Vp))),t._onlineComponents}function lO(t){return Cg(t).then(e=>e.syncEngine)}function TS(t){return Cg(t).then(e=>e.datastore)}async function uO(t){const e=await Cg(t),n=e.eventManager;return n.onListen=zD.bind(null,e.syncEngine),n.onUnlisten=qD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=GD.bind(null,e.syncEngine),n}function cO(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new rO({next:m=>{d.Nu(),o.enqueueAndForget(()=>LD(s,f)),m.fromCache&&u.source==="server"?c.reject(new K(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new UD(l,d,{includeMetadataChanges:!0,qa:!0});return OD(s,f)}(await uO(t),t.asyncQueue,e,n,r)),r.promise}function hO(t,e,n){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await TS(t);r.resolve(async function(o,l,u){var k;const c=le(o),{request:d,gt:f,parent:m}=Ab(c.serializer,qN(l),u);c.connection.$o||delete d.parent;const T=(await c.Ho("RunAggregationQuery",c.serializer.databaseId,m,d,1)).filter(b=>!!b.result);ve(T.length===1,64727);const S=(k=T[0].result)==null?void 0:k.aggregateFields;return Object.keys(S).reduce((b,A)=>(b[f[A]]=S[A],b),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}/**
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
 */function IS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const SS="firestore.googleapis.com",cw=!0;class hw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=SS,this.ssl=cw}else this.host=e.host,this.ssl=e.ssl??cw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Mb)throw new K(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=IS(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class td{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uN;switch(r.type){case"firstParty":return new fN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=uw.get(n);r&&(Q("ComponentProvider","Removing Datastore"),uw.delete(n),r.terminate())}(this),Promise.resolve()}}function dO(t,e,n,r={}){var c;t=sr(t,td);const i=Es(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(Ym(`https://${l}`),Jm("Firestore",!0)),s.host!==SS&&s.host!==l&&Po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ps(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=Dt.MOCK_USER;else{d=QI(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new K(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Dt(m)}t._authCredentials=new cN(new u0(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vi(this.firestore,e,this._query)}}class Ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(zl(n,Ze._jsonSchema))return new Ze(e,r||null,new ne(be.fromString(n.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:st("string",Ze._jsonSchemaVersion),referencePath:st("string")};class vi extends Vi{constructor(e,n,r){super(e,n,P0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new ne(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function mo(t,e,...n){if(t=dt(t),c0("collection","path",e),t instanceof td){const r=be.fromString(e,...n);return Sv(r),new vi(t,null,r)}{if(!(t instanceof Ze||t instanceof vi))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Sv(r),new vi(t.firestore,null,r)}}function Pg(t,e,...n){if(t=dt(t),arguments.length===1&&(e=ng.newId()),c0("doc","path",e),t instanceof td){const r=be.fromString(e,...n);return Iv(r),new Ze(t,null,new ne(r))}{if(!(t instanceof Ze||t instanceof vi))throw new K(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Iv(r),new Ze(t.firestore,t instanceof vi?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dw="AsyncQueue";class fw{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new yg(this,"async_queue_retry"),this._c=()=>{const r=af();r&&Q(dw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=af();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=af();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Bo(e))throw e;Q(dw,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,xr("INTERNAL UNHANDLED ERROR: ",pw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Tg.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&re(47125,{Pc:pw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function pw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class As extends td{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new fw,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fw(e),this._firestoreClient=void 0,await e}}}function fO(t,e){const n=typeof t=="object"?t:eg(),r=typeof t=="string"?t:Zc,i=zh(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=qI("firestore");s&&dO(i,...s)}return i}function nd(t){if(t._terminated)throw new K(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||pO(t),t._firestoreClient}function pO(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,c,d){return new NN(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,IS(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new oO(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mO{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class gO{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new sn(Ct.fromBase64String(e))}catch(n){throw new K(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new sn(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:sn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zl(e,sn._jsonSchema))return sn.fromBase64String(e.bytes)}}sn._jsonSchemaVersion="firestore/bytes/1.0",sn._jsonSchema={type:st("string",sn._jsonSchemaVersion),bytes:st("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new St(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this._methodName=e}}/**
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
 */class tr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tr._jsonSchemaVersion}}static fromJSON(e){if(zl(e,tr._jsonSchema))return new tr(e.latitude,e.longitude)}}tr._jsonSchemaVersion="firestore/geoPoint/1.0",tr._jsonSchema={type:st("string",tr._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
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
 */class nr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:nr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zl(e,nr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new nr(e.vectorValues);throw new K(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nr._jsonSchemaVersion="firestore/vectorValue/1.0",nr._jsonSchema={type:st("string",nr._jsonSchemaVersion),vectorValues:st("object")};/**
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
 */const yO=/^__.*__$/;class _O{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wl(e,this.data,n,this.fieldTransforms)}}class AS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function RS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ac:t})}}class kg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new kg({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return uh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(RS(this.Ac)&&yO.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class vO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xh(e)}Cc(e,n,r,i=!1){return new kg({Ac:e,methodName:n,Dc:r,path:St.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yl(t){const e=t._freezeSettings(),n=Xh(t._databaseId);return new vO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xg(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);bg("Data must be an object, but it was:",o,r);const l=kS(r,o);let u,c;if(s.merge)u=new an(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Up(e,f,n);if(!o.contains(m))throw new K(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);NS(d,m)||d.push(m)}u=new an(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new _O(new $t(l),u,c)}class id extends rd{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof id}}class Ng extends rd{_toFieldTransform(e){return new rb(e.path,new Rl)}isEqual(e){return e instanceof Ng}}function CS(t,e,n,r){const i=t.Cc(1,e,n);bg("Data must be an object, but it was:",i,r);const s=[],o=$t.empty();Li(r,(u,c)=>{const d=Dg(e,u,n);c=dt(c);const f=i.yc(d);if(c instanceof id)s.push(d);else{const m=Jl(c,f);m!=null&&(s.push(d),o.set(d,m))}});const l=new an(s);return new AS(o,l,i.fieldTransforms)}function PS(t,e,n,r,i,s){const o=t.Cc(1,e,n),l=[Up(e,r,n)],u=[i];if(s.length%2!=0)throw new K(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Up(e,s[m])),u.push(s[m+1]);const c=[],d=$t.empty();for(let m=l.length-1;m>=0;--m)if(!NS(c,l[m])){const T=l[m];let S=u[m];S=dt(S);const k=o.yc(T);if(S instanceof id)c.push(T);else{const b=Jl(S,k);b!=null&&(c.push(T),d.set(T,b))}}const f=new an(c);return new AS(d,f,o.fieldTransforms)}function wO(t,e,n,r=!1){return Jl(n,t.Cc(r?4:3,e))}function Jl(t,e){if(xS(t=dt(t)))return bg("Unsupported field value:",e,t),kS(t,e);if(t instanceof rd)return function(r,i){if(!RS(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Jl(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:ih(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ih(i.serializer,s)}}if(r instanceof tr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof sn)return{bytesValue:K0(i.serializer,r._byteString)};if(r instanceof Ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:dg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof nr)return function(o,l){return{mapValue:{fields:{[v0]:{stringValue:w0},[eh]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Sc("VectorValues must only contain numeric values.");return lg(l.serializer,c)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Hh(r)}`)}(t,e)}function kS(t,e){const n={};return f0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(t,(r,i)=>{const s=Jl(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof tr||t instanceof sn||t instanceof Ze||t instanceof rd||t instanceof nr)}function bg(t,e,n){if(!xS(n)||!h0(n)){const r=Hh(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Up(t,e,n){if((e=dt(e))instanceof Ql)return e._internalPath;if(typeof e=="string")return Dg(t,e);throw uh("Field path arguments must be of type string or ",t,!1,void 0,n)}const EO=new RegExp("[~\\*/\\[\\]]");function Dg(t,e,n){if(e.search(EO)>=0)throw uh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ql(...e.split("."))._internalPath}catch{throw uh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(j.INVALID_ARGUMENT,l+t+u)}function NS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TO extends ch{data(){return super.data()}}function sd(t,e){return typeof e=="string"?Dg(t,e):e instanceof Ql?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Og{}class Lg extends Og{}function Ji(t,e,...n){let r=[];e instanceof Og&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Mg).length,l=s.filter(u=>u instanceof od).length;if(o>1||o>0&&l>0)throw new K(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class od extends Lg{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new od(e,n,r)}_apply(e){const n=this._parse(e);return bS(e._query,n),new Vi(e.firestore,e.converter,kp(e._query,n))}_parse(e){const n=Yl(e.firestore);return function(s,o,l,u,c,d,f){let m;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new K(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){gw(f,d);const S=[];for(const k of f)S.push(mw(u,s,k));m={arrayValue:{values:S}}}else m=mw(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||gw(f,d),m=wO(l,o,f,d==="in"||d==="not-in");return it.create(c,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Kn(t,e,n){const r=e,i=sd("where",t);return od._create(i,r,n)}class Mg extends Og{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Mg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)bS(o,u),o=kp(o,u)}(e._query,n),new Vi(e.firestore,e.converter,kp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vg extends Lg{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Vg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new K(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Al(s,o)}(e._query,this._field,this._direction);return new Vi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new zo(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function SO(t,e="asc"){const n=e,r=sd("orderBy",t);return Vg._create(r,n)}class Ug extends Lg{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ug(e,n,r)}_apply(e){return new Vi(e.firestore,e.converter,nh(e._query,this._limit,this._limitType))}}function AO(t){return Ug._create("limit",t,"F")}function mw(t,e,n){if(typeof(n=dt(n))=="string"){if(n==="")throw new K(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!k0(e)&&n.indexOf("/")!==-1)throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!ne.isDocumentKey(r))throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return bv(t,new ne(r))}if(n instanceof Ze)return bv(t,n._key);throw new K(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hh(n)}.`)}function gw(t,e){if(!Array.isArray(t)||t.length===0)throw new K(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bS(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class DS{convertValue(e,n="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Li(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[eh].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Je(o.doubleValue));return new nr(n)}convertGeoPoint(e){return new tr(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Tl(e));default:return null}}convertTimestamp(e){const n=Ri(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);ve(nS(r),9688,{name:e});const i=new Il(r.get(1),r.get(3)),s=new ne(r.popFirst(5));return i.isEqual(n)||xr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class RO extends DS{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function CO(){return new mO("count")}class Da{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class os extends ch{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=os._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}os._jsonSchemaVersion="firestore/documentSnapshot/1.0",os._jsonSchema={type:st("string",os._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class pc extends os{data(e={}){return super.data(e)}}class go{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Da(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pc(this._firestore,this._userDataWriter,r.key,r,new Da(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new pc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Da(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new pc(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Da(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:PO(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=go._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ng.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function PO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:t})}}go._jsonSchemaVersion="firestore/querySnapshot/1.0",go._jsonSchema={type:st("string",go._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};class jg extends DS{constructor(e){super(),this.firestore=e}convertBytes(e){return new sn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function ad(t){t=sr(t,Vi);const e=sr(t.firestore,As),n=nd(e),r=new jg(e);return IO(t._query),cO(n,t._query).then(i=>new go(e,r,t,i))}function IU(t,e,n){t=sr(t,Ze);const r=sr(t.firestore,As),i=Fg(t.converter,e,n);return $g(r,[xg(Yl(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Lt.none())])}function kO(t,e,n,...r){t=sr(t,Ze);const i=sr(t.firestore,As),s=Yl(i);let o;return o=typeof(e=dt(e))=="string"||e instanceof Ql?PS(s,"updateDoc",t._key,e,n,r):CS(s,"updateDoc",t._key,e),$g(i,[o.toMutation(t._key,Lt.exists(!0))])}function SU(t,e){const n=sr(t.firestore,As),r=Pg(t),i=Fg(t.converter,e);return $g(n,[xg(Yl(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Lt.exists(!1))]).then(()=>r)}function $g(t,e){return function(r,i){const s=new Zn;return r.asyncQueue.enqueueAndForget(async()=>KD(await lO(r),i,s)),s.promise}(nd(t),e)}function xO(t){return NO(t,{count:CO()})}function NO(t,e){const n=sr(t.firestore,As),r=nd(n),i=kN(e,(s,o)=>new cb(o,s.aggregateType,s._internalFieldPath));return hO(r,t._query,i).then(s=>function(l,u,c){const d=new jg(l);return new gO(u,d,c)}(n,t,s))}/**
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
 */const bO={maxAttempts:5};function Oa(t,e){if((t=dt(t)).firestore!==e)throw new K(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Yl(e)}get(e){const n=Oa(e,this._firestore),r=new RO(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return re(24041);const s=i[0];if(s.isFoundDocument())return new ch(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new ch(this._firestore,r,n._key,null,n.converter);throw re(18433,{doc:s})})}set(e,n,r){const i=Oa(e,this._firestore),s=Fg(i.converter,n,r),o=xg(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Oa(e,this._firestore);let o;return o=typeof(n=dt(n))=="string"||n instanceof Ql?PS(this._dataReader,"Transaction.update",s._key,n,r,i):CS(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Oa(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO extends DO{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Oa(e,this._firestore),r=new jg(this._firestore);return super.get(e).then(i=>new os(this._firestore,r,n._key,i._document,new Da(!1,!1),n.converter))}}function LO(t,e,n){t=sr(t,As);const r={...bO,...n};return function(s){if(s.maxAttempts<1)throw new K(j.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,l){const u=new Zn;return s.asyncQueue.enqueueAndForget(async()=>{const c=await TS(s);new sO(s.asyncQueue,c,l,o,u).ju()}),u.promise}(nd(t),i=>e(new OO(t,i)),r)}function OS(){return new Ng("serverTimestamp")}(function(e,n=!0){(function(i){jo=i})(Ts),ms(new Si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new As(new hN(r.getProvider("auth-internal")),new pN(o,r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Il(c.options.projectId,d)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Xn(vv,wv,e),Xn(vv,wv,"esm2020")})();var MO="firebase",VO="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn(MO,VO,"app");function LS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UO=LS,MS=new $l("auth","Firebase",LS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=new Xm("@firebase/auth");function FO(t,...e){hh.logLevel<=me.WARN&&hh.warn(`Auth (${Ts}): ${t}`,...e)}function mc(t,...e){hh.logLevel<=me.ERROR&&hh.error(`Auth (${Ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,...e){throw Bg(t,...e)}function rr(t,...e){return Bg(t,...e)}function VS(t,e,n){const r={...UO(),[e]:n};return new $l("auth","Firebase",r).create(e,{appName:t.name})}function wi(t){return VS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return MS.create(t,...e)}function oe(t,e,...n){if(!t)throw Bg(e,...n)}function wr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mc(e),new Error(e)}function br(t,e){t||wr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function jO(){return yw()==="http:"||yw()==="https:"}function yw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jO()||Bk()||"connection"in navigator)?navigator.onLine:!0}function BO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xl=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=Fk()||zk()}get(){return $O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let US=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],WO=new Xl(3e4,6e4);function Rs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ui(t,e,n,r,i={}){return FS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Bl({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return $k()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Es(t.emulatorConfig.host)&&(c.credentials="include"),US.fetch()(await jS(t,t.config.apiHost,n,l),c)})}async function FS(t,e,n){t._canInitEmulator=!1;const r={...zO,...e};try{const i=new GO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw zu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw zu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw zu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw VS(t,d,c);Mn(t,d)}}catch(i){if(i instanceof Oi)throw i;Mn(t,"network-request-failed",{message:String(i)})}}async function ld(t,e,n,r,i={}){const s=await Ui(t,e,n,r,i);return"mfaPendingCredential"in s&&Mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function jS(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?zg(t.config,i):`${t.config.apiScheme}://${i}`;return HO.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function qO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}let GO=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rr(this.auth,"network-request-failed")),WO.get())})}};function zu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rr(t,e,r);return i.customData._tokenResponse=n,i}function _w(t){return t!==void 0&&t.enterprise!==void 0}class KO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function QO(t,e){return Ui(t,"GET","/v2/recaptchaConfig",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YO(t,e){return Ui(t,"POST","/v1/accounts:delete",e)}async function dh(t,e){return Ui(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JO(t,e=!1){const n=dt(t),r=await n.getIdToken(e),i=Hg(r);oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ja(uf(i.auth_time)),issuedAtTime:Ja(uf(i.iat)),expirationTime:Ja(uf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function uf(t){return Number(t)*1e3}function Hg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mc("JWT malformed, contained fewer than 3 sections"),null;try{const i=HI(n);return i?JSON.parse(i):(mc("Failed to decode base64 JWT payload"),null)}catch(i){return mc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vw(t){const e=Hg(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Oi&&XO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ZO=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jp=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ja(this.lastLoginAt),this.creationTime=Ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
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
 */async function fh(t){var f;const e=t.auth,n=await t.getIdToken(),r=await kl(t,dh(e,{idToken:n}));oe(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?$S(i.providerUserInfo):[],o=tL(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new jp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function eL(t){const e=dt(t);await fh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $S(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nL(t,e){const n=await FS(t,{},async()=>{const r=Bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await jS(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Es(t.emulatorConfig.host)&&(u.credentials="include"),US.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rL(t,e){return Ui(t,"POST","/v2/accounts:revokeToken",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cf=class $p{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=vw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $p;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $p,this.toJSON())}_performRefresh(){return wr("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let ro=class La{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new ZO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await kl(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JO(this,e)}reload(){return eL(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new La({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(yn(this.auth.app))return Promise.reject(wi(this.auth));const e=await this.getIdToken();return await kl(this,YO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:T,providerData:S,stsTokenManager:k}=n;oe(f&&k,e,"internal-error");const b=cf.fromJSON(this.name,k);oe(typeof f=="string",e,"internal-error"),Wr(r,e.name),Wr(i,e.name),oe(typeof m=="boolean",e,"internal-error"),oe(typeof T=="boolean",e,"internal-error"),Wr(s,e.name),Wr(o,e.name),Wr(l,e.name),Wr(u,e.name),Wr(c,e.name),Wr(d,e.name);const A=new La({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:d});return S&&Array.isArray(S)&&(A.providerData=S.map(w=>({...w}))),u&&(A._redirectEventId=u),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new cf;i.updateFromServerResponse(n);const s=new La({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fh(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];oe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$S(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new cf;l.updateFromIdToken(r);const u=new La({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new jp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww=new Map;function Er(t){br(t instanceof Function,"Expected a class definition");let e=ww.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ww.set(t,e),e)}/**
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
 */let BS=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};BS.type="NONE";const Ew=BS;/**
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
 */function gc(t,e,n){return`firebase:${t}:${e}:${n}`}let Tw=class yc{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gc(this.userKey,i.apiKey,s),this.fullPersistenceKey=gc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await dh(this.auth,{idToken:e}).catch(()=>{});return n?ro._fromGetAccountInfoResponse(this.auth,n,e):null}return ro._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yc(Er(Ew),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Er(Ew);const o=gc(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await dh(e,{idToken:d}).catch(()=>{});if(!m)break;f=await ro._fromGetAccountInfoResponse(e,m,d)}else f=ro._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new yc(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new yc(s,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KS(e))return"Blackberry";if(QS(e))return"Webos";if(HS(e))return"Safari";if((e.includes("chrome/")||WS(e))&&!e.includes("edge/"))return"Chrome";if(GS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zS(t=Vt()){return/firefox\//i.test(t)}function HS(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function WS(t=Vt()){return/crios\//i.test(t)}function qS(t=Vt()){return/iemobile/i.test(t)}function GS(t=Vt()){return/android/i.test(t)}function KS(t=Vt()){return/blackberry/i.test(t)}function QS(t=Vt()){return/webos/i.test(t)}function Wg(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iL(t=Vt()){var e;return Wg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function sL(){return Hk()&&document.documentMode===10}function YS(t=Vt()){return Wg(t)||GS(t)||QS(t)||KS(t)||/windows phone/i.test(t)||qS(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t,e=[]){let n;switch(t){case"Browser":n=Iw(Vt());break;case"Worker":n=`${Iw(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
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
 */let oL=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
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
 */async function aL(t,e={}){return Ui(t,"GET","/v2/passwordPolicy",Rs(t,e))}/**
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
 */const lL=6;let uL=class{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??lL,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cL=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sw(this),this.idTokenSubscription=new Sw(this),this.beforeStateQueue=new oL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=MS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Tw.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dh(this,{idToken:e}),r=await ro._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(yn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(yn(this.app))return Promise.reject(wi(this));const n=e?dt(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return yn(this.app)?Promise.reject(wi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return yn(this.app)?Promise.reject(wi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aL(this),n=new uL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $l("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Tw.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=JS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&FO(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}};function Wo(t){return dt(t)}let Sw=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xk(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ud={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hL(t){ud=t}function XS(t){return ud.loadJS(t)}function dL(){return ud.recaptchaEnterpriseScript}function fL(){return ud.gapiScript}function pL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class mL{constructor(){this.enterprise=new gL}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gL{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const yL="recaptcha-enterprise",ZS="NO_RECAPTCHA";class _L{constructor(e){this.type=yL,this.auth=Wo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{QO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new KO(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;_w(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(ZS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new mL().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&_w(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=dL();u.length!==0&&(u+=l),XS(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Aw(t,e,n,r=!1,i=!1){const s=new _L(t);let o;if(i)o=ZS;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Rw(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Aw(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Aw(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vL(t,e){const n=zh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ps(s,e??{}))return i;Mn(i,"already-initialized")}return n.initialize({options:e})}function wL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EL(t,e,n){const r=Wo(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=eA(e),{host:o,port:l}=TL(e),u=l===null?"":`:${l}`,c={url:`${s}//${o}${u}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(ps(c,r.config.emulator)&&ps(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Es(o)?(Ym(`${s}//${o}${u}`),Jm("Auth",!0)):IL()}function eA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TL(t){const e=eA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cw(o)}}}function Cw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function IL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,n){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}async function SL(t,e){return Ui(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AL(t,e){return ld(t,"POST","/v1/accounts:signInWithPassword",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RL(t,e){return ld(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}async function CL(t,e){return ld(t,"POST","/v1/accounts:signInWithEmailLink",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends qg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rw(e,n,"signInWithPassword",AL);case"emailLink":return RL(e,{email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rw(e,r,"signUpPassword",SL);case"emailLink":return CL(e,{idToken:n,email:this._email,oobCode:this._password});default:Mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e){return ld(t,"POST","/v1/accounts:signInWithIdp",Rs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL="http://localhost";class _s extends qg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new _s(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yo(e,n)}buildRequest(){const e={requestUri:PL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xL(t){const e=Pa(ka(t)).link,n=e?Pa(ka(e)).deep_link_id:null,r=Pa(ka(t)).deep_link_id;return(r?Pa(ka(r)).link:null)||r||n||e||t}class Gg{constructor(e){const n=Pa(ka(e)),r=n.apiKey??null,i=n.oobCode??null,s=kL(n.mode??null);oe(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=xL(e);try{return new Gg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.providerId=qo.PROVIDER_ID}static credential(e,n){return xl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gg.parseLink(n);return oe(r,"argument-error"),xl._fromEmailAndCode(e,r.code,r.tenantId)}}qo.PROVIDER_ID="password";qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zl extends tA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Zl{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Zl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _s._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ei.credential(n,r)}catch{return null}}}ei.GOOGLE_SIGN_IN_METHOD="google.com";ei.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends Zl{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.GITHUB_SIGN_IN_METHOD="github.com";ti.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends Zl{constructor(){super("twitter.com")}static credential(e,n){return _s._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ni.credential(n,r)}catch{return null}}}ni.TWITTER_SIGN_IN_METHOD="twitter.com";ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ro._fromIdTokenResponse(e,r,i),o=Pw(r);return new Oo({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Pw(r);return new Oo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Pw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph extends Oi{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ph.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ph(e,n,r,i)}}function nA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ph._fromErrorAndOperation(t,s,e,r):s})}async function NL(t,e,n=!1){const r=await kl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oo._forOperation(t,"link",r)}/**
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
 */async function bL(t,e,n=!1){const{auth:r}=t;if(yn(r.app))return Promise.reject(wi(r));const i="reauthenticate";try{const s=await kl(t,nA(r,i,e,t),n);oe(s.idToken,r,"internal-error");const o=Hg(s.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),Oo._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rA(t,e,n=!1){if(yn(t.app))return Promise.reject(wi(t));const r="signIn",i=await nA(t,r,e),s=await Oo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function DL(t,e){return rA(Wo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OL(t){const e=Wo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function LL(t,e,n){return yn(t.app)?Promise.reject(wi(t)):DL(dt(t),qo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&OL(t),r})}function ML(t,e,n,r){return dt(t).onIdTokenChanged(e,n,r)}function VL(t,e,n){return dt(t).beforeAuthStateChanged(e,n)}const mh="__sak";/**
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
 */class iA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mh,"1"),this.storage.removeItem(mh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=1e3,FL=10;class sA extends iA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=YS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sA.type="LOCAL";const jL=sA;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA extends iA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oA.type="SESSION";const aA=oA;/**
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
 */function $L(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await $L(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Kg("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}function zL(t){ir().location.href=t}/**
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
 */function lA(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function HL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function qL(){return lA()?self:null}/**
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
 */const uA="firebaseLocalStorageDb",GL=1,gh="firebaseLocalStorage",cA="fbase_key";class eu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hd(t,e){return t.transaction([gh],e?"readwrite":"readonly").objectStore(gh)}function KL(){const t=indexedDB.deleteDatabase(uA);return new eu(t).toPromise()}function Bp(){const t=indexedDB.open(uA,GL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gh,{keyPath:cA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gh)?e(r):(r.close(),await KL(),e(await Bp()))})})}async function kw(t,e,n){const r=hd(t,!0).put({[cA]:e,value:n});return new eu(r).toPromise()}async function QL(t,e){const n=hd(t,!1).get(e),r=await new eu(n).toPromise();return r===void 0?null:r.value}function xw(t,e){const n=hd(t,!0).delete(e);return new eu(n).toPromise()}const YL=800,JL=3;class hA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cd._getInstance(qL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await HL(),!this.activeServiceWorker)return;this.sender=new BL(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bp();return await kw(e,mh,"1"),await xw(e,mh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=hd(i,!1).getAll();return new eu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hA.type="LOCAL";const XL=hA;new Xl(3e4,6e4);/**
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
 */function ZL(t,e){return e?Er(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Qg extends qg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e2(t){return rA(t.auth,new Qg(t),t.bypassAuthState)}function t2(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),bL(n,new Qg(t),t.bypassAuthState)}async function n2(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),NL(n,new Qg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e2;case"linkViaPopup":case"linkViaRedirect":return n2;case"reauthViaPopup":case"reauthViaRedirect":return t2;default:Mn(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r2=new Xl(2e3,1e4);class io extends dA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,io.currentPopupAction&&io.currentPopupAction.cancel(),io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=Kg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r2.get())};e()}}io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i2="pendingRedirect",_c=new Map;class s2 extends dA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_c.get(this.auth._key());if(!e){try{const r=await o2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_c.set(this.auth._key(),e)}return this.bypassAuthState||_c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o2(t,e){const n=u2(e),r=l2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function a2(t,e){_c.set(t._key(),e)}function l2(t){return Er(t._redirectPersistence)}function u2(t){return gc(i2,t.config.apiKey,t.name)}async function c2(t,e,n=!1){if(yn(t.app))return Promise.reject(wi(t));const r=Wo(t),i=ZL(r,e),o=await new s2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=10*60*1e3;class d2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fA(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(rr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nw(e))}saveEventToCache(e){this.cachedEventUids.add(Nw(e)),this.lastProcessedEventTime=Date.now()}}function Nw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e={}){return Ui(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g2=/^https?/;async function y2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p2(t);for(const n of e)try{if(_2(n))return}catch{}Mn(t,"unauthorized-domain")}function _2(t){const e=Fp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!g2.test(n))return!1;if(m2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const v2=new Xl(3e4,6e4);function bw(){const t=ir().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w2(t){return new Promise((e,n)=>{var i,s,o;function r(){bw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bw(),n(rr(t,"network-request-failed"))},timeout:v2.get()})}if((s=(i=ir().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=ir().gapi)!=null&&o.load)r();else{const l=pL("iframefcb");return ir()[l]=()=>{gapi.load?r():n(rr(t,"network-request-failed"))},XS(`${fL()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw vc=null,e})}let vc=null;function E2(t){return vc=vc||w2(t),vc}/**
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
 */const T2=new Xl(5e3,15e3),I2="__/auth/iframe",S2="emulator/auth/iframe",A2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C2(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zg(e,S2):`https://${t.config.authDomain}/${I2}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},i=R2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Bl(r).slice(1)}`}async function P2(t){const e=await E2(t),n=ir().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:C2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rr(t,"network-request-failed"),l=ir().setTimeout(()=>{s(o)},T2.get());function u(){ir().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const k2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},x2=500,N2=600,b2="_blank",D2="http://localhost";class Dw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function O2(t,e,n,r=x2,i=N2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...k2,width:r.toString(),height:i.toString(),top:s,left:o},c=Vt().toLowerCase();n&&(l=WS(c)?b2:n),zS(c)&&(e=e||D2,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[T,S])=>`${m}${T}=${S},`,"");if(iL(c)&&l!=="_self")return L2(e||"",l),new Dw(null);const f=window.open(e||"",l,d);oe(f,t,"popup-blocked");try{f.focus()}catch{}return new Dw(f)}function L2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const M2="__/auth/handler",V2="emulator/auth/handler",U2=encodeURIComponent("fac");async function Ow(t,e,n,r,i,s){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:i};if(e instanceof tA){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Zl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${U2}=${encodeURIComponent(u)}`:"";return`${F2(t)}?${Bl(l).slice(1)}${c}`}function F2({config:t}){return t.emulator?zg(t,V2):`https://${t.authDomain}/${M2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="webStorageSupport";class j2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aA,this._completeRedirectFn=c2,this._overrideRedirectResult=a2}async _openPopup(e,n,r,i){var o;br((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ow(e,n,r,Fp(),i);return O2(e,s,Kg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ow(e,n,r,Fp(),i);return zL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await P2(e),r=new d2(e);return n.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hf,{type:hf},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[hf];s!==void 0&&n(!!s),Mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=y2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return YS()||HS()||Wg()}}const $2=j2;var Lw="@firebase/auth",Mw="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B2=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H2(t){ms(new Si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JS(t)},c=new cL(r,i,s,u);return wL(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ms(new Si("auth-internal",e=>{const n=Wo(e.getProvider("auth").getImmediate());return(r=>new B2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xn(Lw,Mw,z2(t)),Xn(Lw,Mw,"esm2020")}/**
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
 */const W2=5*60,q2=KI("authIdTokenMaxAge")||W2;let Vw=null;const G2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>q2)return;const i=n==null?void 0:n.token;Vw!==i&&(Vw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function K2(t=eg()){const e=zh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vL(t,{popupRedirectResolver:$2,persistence:[XL,jL,aA]}),r=KI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=G2(s.toString());VL(n,o,()=>o(n.currentUser)),ML(n,l=>o(l))}}const i=WI("auth");return i&&EL(n,`http://${i}`),n}function Q2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}hL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Q2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H2("Browser");/**
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
 */const pA="firebasestorage.googleapis.com",Y2="storageBucket",J2=2*60*1e3,X2=10*60*1e3;/**
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
 */class ur extends Oi{constructor(e,n,r=0){super(df(e),`Firebase Storage: ${n} (${df(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ur.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return df(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ar;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ar||(ar={}));function df(t){return"storage/"+t}function Z2(){const t="An unknown error occurred, please check the error payload for server response.";return new ur(ar.UNKNOWN,t)}function eM(){return new ur(ar.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tM(){return new ur(ar.CANCELED,"User canceled the upload/download.")}function nM(t){return new ur(ar.INVALID_URL,"Invalid URL '"+t+"'.")}function rM(t){return new ur(ar.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Uw(t){return new ur(ar.INVALID_ARGUMENT,t)}function mA(){return new ur(ar.APP_DELETED,"The Firebase app was deleted.")}function iM(t){return new ur(ar.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nn.makeFromUrl(e,n)}catch{return new Nn(e,"")}if(r.path==="")return r;throw rM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${f}/${d}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},k=n===pA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",A=new RegExp(`^https?://${k}/${i}/${b}`,"i"),R=[{regex:l,indices:u,postModify:s},{regex:T,indices:S,postModify:c},{regex:A,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<R.length;O++){const $=R[O],F=$.regex.exec(e);if(F){const g=F[$.indices.bucket];let y=F[$.indices.path];y||(y=""),r=new Nn(g,y),$.postModify(r);break}}if(r==null)throw nM(e);return r}}class sM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function oM(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function d(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(T,u())},b)}function m(){s&&clearTimeout(s)}function T(b,...A){if(c){m();return}if(b){m(),d.call(null,b,...A);return}if(u()||o){m(),d.call(null,b,...A);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,f(R)}let S=!1;function k(b){S||(S=!0,m(),!c&&(i!==null?(b||(l=2),clearTimeout(i),f(0)):b||(l=1)))}return f(0),s=setTimeout(()=>{o=!0,k(!0)},n),k}function aM(t){t(!1)}/**
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
 */function lM(t){return t!==void 0}function Fw(t,e,n,r){if(r<e)throw Uw(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Uw(`Invalid value for '${t}'. Expected ${n} or less.`)}function uM(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var yh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yh||(yh={}));/**
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
 */function cM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class hM{constructor(e,n,r,i,s,o,l,u,c,d,f,m=!0,T=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,k)=>{this.resolve_=S,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Hu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===yh.NO_ERROR,u=s.getStatus();if(!l||cM(u,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===yh.ABORT;r(!1,new Hu(!1,null,d));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Hu(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());lM(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Z2();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?mA():tM();o(u)}else{const u=eM();o(u)}};this.canceled_?n(!1,new Hu(!1,null,!0)):this.backoffId_=oM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Hu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gM(t,e,n,r,i,s,o=!0,l=!1){const u=uM(t.urlParams),c=t.url+u,d=Object.assign({},t.headers);return pM(d,e),dM(d,n),fM(d,s),mM(d,r),new hM(c,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function yM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function _M(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class _h{constructor(e,n){this._service=e,n instanceof Nn?this._location=n:this._location=Nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _h(e,n)}get root(){const e=new Nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _M(this._location.path)}get storage(){return this._service}get parent(){const e=yM(this._location.path);if(e===null)return null;const n=new Nn(this._location.bucket,e);return new _h(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iM(e)}}function jw(t,e){const n=e==null?void 0:e[Y2];return n==null?null:Nn.makeFromBucketSpec(n,t)}function vM(t,e,n,r={}){t.host=`${e}:${n}`;const i=Es(e);i&&(Ym(`https://${t.host}/b`),Jm("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:QI(s,t.app.options.projectId))}class wM{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=pA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=J2,this._maxUploadRetryTime=X2,this._requests=new Set,i!=null?this._bucket=Nn.makeFromBucketSpec(i,this._host):this._bucket=jw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nn.makeFromBucketSpec(this._url,e):this._bucket=jw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _h(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new sM(mA());{const o=gM(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const $w="@firebase/storage",Bw="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="storage";function EM(t=eg(),e){t=dt(t);const r=zh(t,gA).getImmediate({identifier:e}),i=qI("storage");return i&&TM(r,...i),r}function TM(t,e,n,r={}){vM(t,e,n,r)}function IM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new wM(n,r,i,e,Ts)}function SM(){ms(new Si(gA,IM,"PUBLIC").setMultipleInstances(!0)),Xn($w,Bw,""),Xn($w,Bw,"esm2020")}SM();const AM={apiKey:"AIzaSyCWfqdRcuoy8opgUwyWAUbc6iVmtw1wSfE",authDomain:"limlim-32e6a.firebaseapp.com",projectId:"limlim-32e6a",storageBucket:void 0,messagingSenderId:void 0,appId:"1:525168702365:web:79f3fe9d2ea7a77bd0f574"},Yg=ZI(AM),Jg=K2(Yg),ai=fO(Yg);EM(Yg);const RM=9*60+30,CM=21*60+30,yA=90,_A=90;function vA(t,e){const[n,r,i]=t.split("-").map(Number),[s,o]=e.split(":").map(Number);return new Date(n,r-1,i,s,o,0,0)}function PM(t){const[e,n]=t.split(":").map(Number);return e*60+n}function zw(t){const e=PM(t);return e>=RM&&e<=CM}function kM(t){return Number(t.split(":")[1]||0)%30===0}function xM(t,e){return new Date(t.getTime()+e*60*1e3)}function NM(t){if(!t||typeof t.duration!="string")return 60;const e=t.duration.toLowerCase().trim().replace(/\s+/g," "),n=e.match(/\d+/g);if(!n||n.length===0)return 60;const r=Number(n[0]);return e.includes("hour")?r*60:r}async function bM(t){try{await fetch("/.netlify/functions/send-confirmation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({booking:t})})}catch{}}async function wA({date:t,time:e,pkg:n}){try{if(!t||!e)return{available:!1,reason:"Missing date/time"};if(!kM(e))return{available:!1,reason:"Please choose a :00 or :30 time."};if(!zw(e))return{available:!1,reason:"Outside hours (09:30–21:30)"};const r=vA(t,e),i=NM(n),s=xM(r,i),o=`${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}`;if(!zw(o))return{available:!1,reason:"Outside hours (09:30–21:30)"};const l=new Date(r.getTime()-yA*60*1e3),u=new Date(r.getTime()+_A*60*1e3),c=Ji(mo(ai,"bookings"),Kn("startAt",">=",Re.fromDate(l)),Kn("startAt","<=",Re.fromDate(u)),Kn("status","in",["pending","confirmed"])),f=!(await ad(c)).empty;return{available:!f,reason:f?"Conflicts with another session":null}}catch(r){return console.error("checkAvailability error:",r),{available:!1,reason:"Availability check failed"}}}async function DM({pkg:t,date:e,time:n,details:r}){try{const i=await wA({date:e,time:n,pkg:t});if(!i.available)return{ok:!1,error:i.reason||"Not available"};if(!t||typeof t.id!="string"||typeof t.name!="string"||typeof t.price!="number"||typeof t.duration!="string")return{ok:!1,error:"Invalid package format"};if(!r||typeof r.name!="string"||typeof r.email!="string"||typeof r.phone!="string"||typeof r.location!="string")return{ok:!1,error:"Missing contact details"};const s=vA(e,n),o=Math.random().toString(36).slice(2,8).toUpperCase(),l=mo(ai,"bookings"),u=Pg(l);return await LO(ai,async c=>{const d=new Date(s.getTime()-yA*60*1e3),f=new Date(s.getTime()+_A*60*1e3),m=Ji(l,Kn("startAt",">=",Re.fromDate(d)),Kn("startAt","<=",Re.fromDate(f)),Kn("status","in",["pending","confirmed"]));if(!(await ad(m)).empty)throw new Error("Conflicts with another session");c.set(u,{reference:o,status:"pending",package:{id:t.id,name:t.name,price:t.price,duration:t.duration},date:e,time:n,startAt:Re.fromDate(s),details:{name:r.name,email:r.email,phone:r.phone,location:r.location},createdAt:OS()})}),bM({id:u.id,reference:o,status:"pending",package:{...t},details:{...r},date:e,time:n}),{ok:!0,id:u.id,reference:o}}catch(i){console.error("submitBooking error:",i);const s=(i==null?void 0:i.message)||"Failed to submit booking";return s.includes("Conflicts with another session")?{ok:!1,error:"Conflicts with another session"}:{ok:!1,error:s}}}const ff=[{id:"portrait",name:"Portrait",price:250,duration:"60–90 min",desc:"Clean, crisp portraits in studio or on location.",includes:["Up to 2 outfits","15 edited photos","Online gallery"]},{id:"event",name:"Event",price:700,duration:"3 hours",desc:"Coverage for birthdays, engagements, and more.",includes:["Candid + posed","Next-day sneak peek","Highlight reel add-on"]},{id:"wedding",name:"Wedding",price:2200,duration:"8 hours",desc:"Story-driven wedding coverage for your day.",includes:["Timeline planning","Second shooter (optional)","Album-ready edits"]}],OM=9*60+30,LM=21*60+30;function MM(){const t=[];for(let e=OM;e<=LM;e+=30){const n=String(Math.floor(e/60)).padStart(2,"0"),r=String(e%60).padStart(2,"0");t.push(`${n}:${r}`)}return t}function Hw(t){const[e,n]=t.split(":").map(Number),r=e>=12?"PM":"AM";return`${(e+11)%12+1}:${String(n).padStart(2,"0")} ${r}`}const VM=MM();function UM(){const[t,e]=U.useState(0),[n,r]=U.useState(ff[0]),[i,s]=U.useState(""),[o,l]=U.useState(""),[u,c]=U.useState(!1),[d,f]=U.useState(null),[m,T]=U.useState(""),[S,k]=U.useState({name:"",email:"",phone:"",location:"Studio"}),[b,A]=U.useState(!1),[w,R]=U.useState(null),O=!!n,$=!!i&&!!o&&d===!0,F=S.name&&S.email&&S.phone,g=async()=>{if(T(""),f(null),!i||!o)return;c(!0);const E=await wA({date:i,time:o,pkg:n});f(E.available),!E.available&&E.reason&&T(E.reason),c(!1)},y=async()=>{if(b)return;A(!0);const E=await DM({pkg:n,date:i,time:o,details:S});R(E),A(!1)},I=()=>{e(0),r(ff[0]),s(""),l(""),f(null),k({name:"",email:"",phone:"",location:"Studio"}),A(!1),R(null),T("")};return v.jsx("section",{id:"booking",className:"w-full py-16 md:py-24 bg-ivory",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[v.jsxs("div",{className:"flex items-center justify-between mb-6",children:[v.jsxs("div",{children:[v.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Book a Session"}),v.jsxs("p",{className:"text-charcoal/70 mt-1",children:["Complete the steps to request your slot. ",v.jsx("span",{className:"text-rose/80"})]})]}),v.jsx(Rk,{step:t})]}),v.jsxs("div",{className:"glass p-5 md:p-6 rounded-2xl border border-rose/30 shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-white/80",children:[t===0&&v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Choose a package"}),v.jsxs("p",{className:"text-charcoal/70 text-sm mt-1",children:["You’ve selected ",v.jsx("span",{className:"font-semibold text-rose",children:n.name}),"."]}),v.jsx("div",{className:"mt-6 grid md:grid-cols-3 gap-6",children:ff.map(E=>v.jsx(Ck,{p:E,selected:E.id===n.id,onSelect:()=>r(E)},E.id))}),v.jsx("div",{className:"mt-6 flex justify-end",children:v.jsx("button",{onClick:()=>e(1),disabled:!O,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${O?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})})]}),t===1&&v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Pick date & time"}),v.jsxs("div",{className:"mt-4 grid md:grid-cols-3 gap-4",children:[v.jsxs("div",{className:"col-span-1",children:[v.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Date"}),v.jsx("input",{type:"date",value:i,onChange:E=>s(E.target.value),className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white"})]}),v.jsxs("div",{className:"col-span-1",children:[v.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Time"}),v.jsxs("select",{value:o,onChange:E=>l(E.target.value),className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",children:[v.jsx("option",{value:"",children:"— Select time —"}),VM.map(E=>v.jsx("option",{value:E,children:Hw(E)},E))]}),m&&d===!1&&v.jsx("div",{className:"text-xs text-rose mt-1",children:m})]}),v.jsx("div",{className:"col-span-1 flex items-end",children:v.jsx("button",{onClick:g,disabled:!i||!o||u,className:`w-full rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${!i||!o||u?"bg-blush text-charcoal/50 cursor-not-allowed":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:u?"Checking...":"Check Availability"})})]}),d===!0&&v.jsx("p",{className:"mt-3 text-sm text-green-700",children:"✅ Slot available. You can proceed."}),d===!1&&v.jsxs("p",{className:"mt-3 text-sm text-red-700",children:["❌ Sorry, that time is taken. ",m?`(${m})`:"Try a different time."]}),v.jsxs("div",{className:"mt-6 flex justify-between",children:[v.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(0),children:"← Back"}),v.jsx("button",{onClick:()=>e(2),disabled:!$,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${$?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})]})]}),t===2&&v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Your details"}),v.jsxs("div",{className:"mt-4 grid md:grid-cols-2 gap-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Full name"}),v.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:S.name,onChange:E=>k({...S,name:E.target.value}),placeholder:"e.g., Lama NC"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Email"}),v.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:S.email,onChange:E=>k({...S,email:E.target.value}),placeholder:"you@example.com"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Phone"}),v.jsx("input",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:S.phone,onChange:E=>k({...S,phone:E.target.value}),placeholder:"(555) 123-4567"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"text-sm font-medium text-charcoal",children:"Location"}),v.jsxs("select",{className:"mt-2 w-full rounded-xl border border-rose/30 focus:border-rose focus:ring-rose/40 px-3 py-2 bg-white",value:S.location,onChange:E=>k({...S,location:E.target.value}),children:[v.jsx("option",{children:"Studio"}),v.jsx("option",{children:"Client Location"}),v.jsx("option",{children:"Outdoors"})]})]})]}),v.jsxs("div",{className:"mt-6 flex justify-between",children:[v.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(1),children:"← Back"}),v.jsx("button",{onClick:()=>e(3),disabled:!F,className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${F?"bg-rose text-ivory hover:bg-gold hover:text-charcoal":"bg-blush text-charcoal/50 cursor-not-allowed"}`,children:"Next →"})]})]}),t===3&&v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-serif font-semibold text-charcoal",children:"Review & confirm"}),v.jsxs("div",{className:"mt-4 grid md:grid-cols-2 gap-6",children:[v.jsxs("div",{className:"p-4 rounded-xl border border-rose/30 bg-blush/20",children:[v.jsx("h4",{className:"font-semibold text-charcoal",children:"Summary"}),v.jsxs("ul",{className:"mt-2 text-sm text-charcoal/80 space-y-1",children:[v.jsxs("li",{children:["Package: ",v.jsx("span",{className:"font-medium text-rose",children:n.name})," — $",n.price]}),v.jsxs("li",{children:["Date & Time: ",v.jsxs("span",{className:"font-medium",children:[i||"—"," ",o?Hw(o):""]})]}),v.jsxs("li",{children:["Duration: ",n.duration]}),v.jsxs("li",{children:["Location: ",S.location]})]})]}),v.jsxs("div",{className:"p-4 rounded-xl border border-rose/30 bg-blush/20",children:[v.jsx("h4",{className:"font-semibold text-charcoal",children:"Contact"}),v.jsxs("ul",{className:"mt-2 text-sm text-charcoal/80 space-y-1",children:[v.jsxs("li",{children:["Name: ",S.name||"—"]}),v.jsxs("li",{children:["Email: ",S.email||"—"]}),v.jsxs("li",{children:["Phone: ",S.phone||"—"]})]})]})]}),w?v.jsxs("div",{className:"mt-6 rounded-xl border border-rose/30 p-4 bg-blush/20",children:[v.jsx("p",{className:"font-semibold text-charcoal",children:"🎉 Booking requested!"}),v.jsxs("p",{className:"text-sm text-charcoal/80 mt-1",children:["Your reference: ",v.jsx("span",{className:"font-mono text-rose",children:w.reference}),"."]}),v.jsx("div",{className:"mt-4 flex gap-3",children:v.jsx("button",{onClick:I,className:"rounded-full px-5 py-3 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Book Another"})})]}):v.jsxs("div",{className:"mt-6 flex justify-between",children:[v.jsx("button",{className:"text-sm underline text-charcoal/70 hover:text-rose",onClick:()=>e(2),children:"← Back"}),v.jsx("button",{onClick:y,disabled:b,className:"rounded-full px-5 py-3 text-sm font-semibold shadow-md bg-gold text-charcoal hover:bg-rose hover:text-ivory transition-all",children:b?"Submitting...":"Confirm Booking"})]})]})]})]})})}function FM(){const t=[{q:"How fast do I get photos?",a:"Sneak peeks within 24–48 hours. Full galleries typically within 10–14 days."},{q:"Do you travel?",a:"Yes! Travel within 25 miles is included. Beyond that, a small fee applies."},{q:"Can I reschedule?",a:"Absolutely—please let me know 48 hours in advance when possible."},{q:"Do you offer video?",a:"Yes, as an add-on for events and weddings. Ask for bundles."}];return v.jsx("section",{id:"faq",className:"w-full py-16 md:py-24 bg-pink-50",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[v.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-pink-700",children:"FAQ"}),v.jsx("div",{className:"mt-6 grid md:grid-cols-2 gap-4",children:t.map((e,n)=>v.jsxs("div",{className:"p-4 rounded-2xl border border-pink-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] bg-white hover:shadow-lg transition-shadow",children:[v.jsx("div",{className:"font-semibold text-pink-700",children:e.q}),v.jsx("div",{className:"text-pink-900/80 text-sm mt-1",children:e.a})]},n))})]})})}const zp="lamaphoto";async function jM(t){const e=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function $M(t,e){return`https://res.cloudinary.com/${zp}/image/upload/fl_attachment/${t}.${e}`}function BM(t,e){return t.filter(n=>!!e[n.public_id]).map(n=>n.public_id)}function zM(){const[t,e]=U.useState(""),[n,r]=U.useState(!1),[i,s]=U.useState(null),[o,l]=U.useState([]),[u,c]=U.useState(""),[d,f]=U.useState({}),[m,T]=U.useState(!1),S=async()=>{c(""),r(!0),s(null),l([]),f({});try{const g=(await ad(mo(ai,"galleries"))).docs.map(E=>E.data()),y=await jM(t.trim()),I=g.find(E=>E.codeHash===y);if(!I){c("Invalid access code. Double-check and try again."),r(!1);return}s(I);try{const E=await fetch(`https://res.cloudinary.com/${zp}/image/list/${I.tag}.json`,{cache:"no-store"});if(!E.ok)throw new Error(`HTTP ${E.status}`);const N=(await E.json()).resources||[];l(N);const C={};N.forEach(Ce=>C[Ce.public_id]=!0),f(C)}catch(E){console.error(E),c("Could not load images. Make sure Cloudinary ‘Asset lists’ are enabled and your photos are tagged with the gallery tag.")}}catch(F){console.error(F),c("There was a problem checking your code. Please try again.")}finally{r(!1)}},k=()=>{e(""),s(null),l([]),f({}),T(!1),c("")},b=o.length>0&&o.every(F=>!!d[F.public_id]),A=o.some(F=>!!d[F.public_id]);function w(F){f(g=>({...g,[F]:!g[F]}))}function R(F){const g={};o.forEach(y=>g[y.public_id]=F),f(g)}async function O(){var y;const F=BM(o,d);if(!F.length)return;if(i!=null&&i.tag&&F.length===o.length||F.length>120)return $();T(!0);try{const I=await fetch("/.netlify/functions/cloudinary-zip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({public_ids:F,filename:"selected-images.zip"})}),E=await I.text(),P=E?JSON.parse(E):{};if(!I.ok)throw console.error("Archive error detail (selected):",P),new Error(((y=P==null?void 0:P.detail)==null?void 0:y.message)||(P==null?void 0:P.error)||"Cloudinary error");window.location.assign(P.url)}catch(I){console.error(I),alert(I.message||"Download failed. Please try again.")}finally{T(!1)}}async function $(){var g,y;if(i!=null&&i.tag){T(!0);try{const I=await fetch("/.netlify/functions/cloudinary-zip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tag:i.tag,filename:"all-images.zip"})}),E=await I.text(),P=E?JSON.parse(E):{};if(!I.ok)throw console.error("Archive error detail (all by tag):",P),new Error(((g=P==null?void 0:P.detail)==null?void 0:g.message)||(P==null?void 0:P.error)||"Cloudinary error");window.location.assign(P.url)}catch(I){console.error(I),alert(I.message||"Download failed. Please try again.")}finally{T(!1)}return}const F=o.map(I=>I.public_id);if(F.length){T(!0);try{const I=await fetch("/.netlify/functions/cloudinary-zip",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({public_ids:F,filename:"all-images.zip"})}),E=await I.text(),P=E?JSON.parse(E):{};if(!I.ok)throw console.error("Archive error detail (all fallback):",P),new Error(((y=P==null?void 0:P.detail)==null?void 0:y.message)||(P==null?void 0:P.error)||"Cloudinary error");window.location.assign(P.url)}catch(I){console.error(I),alert(I.message||"Download failed. Please try again.")}finally{T(!1)}}}return v.jsx("section",{className:"w-full py-16 md:py-24 bg-ivory",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[v.jsx("h2",{className:"text-2xl md:text-3xl font-serif font-semibold text-charcoal",children:"Client Gallery"}),!i&&v.jsxs("div",{className:"mt-6 max-w-md space-y-3",children:[v.jsx("p",{className:"text-charcoal/70",children:"Enter your access code to view your photos."}),v.jsx("input",{type:"password",value:t,onChange:F=>e(F.target.value),placeholder:"Access code",className:"w-full rounded-xl border border-rose/30 px-3 py-2 bg-white",onKeyDown:F=>{F.key==="Enter"&&!n&&t.trim()&&S()}}),v.jsx("button",{onClick:S,disabled:n||!t.trim(),className:`rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all ${n||!t.trim()?"bg-blush text-charcoal/50 cursor-not-allowed":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:n?"Checking…":"Open Gallery"}),u&&v.jsx("div",{className:"text-sm text-red-700",children:u})]}),i&&v.jsxs("div",{className:"mt-8",children:[v.jsxs("div",{className:"flex items-center justify-between gap-3 flex-wrap",children:[v.jsxs("div",{children:[v.jsx("h3",{className:"font-serif text-xl text-charcoal",children:i.name}),v.jsxs("div",{className:"text-xs text-charcoal/60",children:["Tag: ",v.jsx("code",{children:i.tag})]})]}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[v.jsx("input",{type:"checkbox",checked:!!b,ref:F=>F&&(F.indeterminate=!b&&A),onChange:F=>R(F.target.checked)}),"Select all"]}),v.jsx("button",{onClick:O,disabled:!A||m,className:`rounded-full px-4 py-2 text-sm font-semibold shadow-md ${!A||m?"bg-blush text-charcoal/50":"bg-rose text-ivory hover:bg-gold hover:text-charcoal"}`,children:m?"Preparing…":"Download Selected"}),v.jsx("button",{onClick:$,disabled:!o.length||m,className:`rounded-full px-4 py-2 text-sm font-semibold shadow-md ${!o.length||m?"bg-blush text-charcoal/50":"bg-gold text-charcoal hover:bg-rose hover:text-ivory"}`,children:m?"Please wait…":"Download All"}),v.jsx("button",{onClick:k,className:"text-sm underline text-charcoal/70 hover:text-rose",children:"Use a different code"})]})]}),o.length>0?v.jsx("div",{className:"mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",children:o.map(F=>{const g=`https://res.cloudinary.com/${zp}/image/upload/c_fill,g_auto,f_auto,q_auto,w_800,h_800/${F.public_id}.${F.format}`;return v.jsxs("figure",{className:"overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow",children:[v.jsx("img",{src:g,alt:F.public_id,loading:"lazy",className:"w-full aspect-square object-cover transition-transform duration-200 hover:scale-[1.01]"}),v.jsxs("figcaption",{className:"flex items-center justify-between px-3 py-2 text-xs bg-white/70",children:[v.jsxs("label",{className:"flex items-center gap-2",children:[v.jsx("input",{type:"checkbox",checked:!!d[F.public_id],onChange:()=>w(F.public_id)}),v.jsx("span",{className:"truncate max-w-[10rem]",children:F.public_id.split("/").pop()})]}),v.jsx("a",{className:"underline text-charcoal/70 hover:text-rose",href:$M(F.public_id,F.format),title:"Download original",children:"Original"})]})]},F.public_id)})}):v.jsx("div",{className:"mt-6 text-charcoal/60",children:"No images yet for this gallery."})]})]})})}function HM(){const[t,e]=U.useState(""),[n,r]=U.useState(""),[i,s]=U.useState(""),o=Qm(),l=async u=>{u.preventDefault(),s("");try{await LL(Jg,t,n),o("/admin")}catch{s("Invalid email or password")}};return v.jsxs("div",{className:"max-w-sm mx-auto py-12",children:[v.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Admin Login"}),i&&v.jsx("p",{className:"text-red-500",children:i}),v.jsxs("form",{onSubmit:l,className:"space-y-4",children:[v.jsx("input",{type:"email",placeholder:"Email",className:"w-full border px-3 py-2 rounded",value:t,onChange:u=>e(u.target.value)}),v.jsx("input",{type:"password",placeholder:"Password",className:"w-full border px-3 py-2 rounded",value:n,onChange:u=>r(u.target.value)}),v.jsx("button",{type:"submit",className:"bg-rose text-ivory px-4 py-2 rounded w-full",children:"Login"})]})]})}const WM="modulepreload",qM=function(t){return"/"+t},Ww={},Xg=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=qM(u),u in Ww)return;Ww[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":WM,c||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((m,T)=>{f.addEventListener("load",m),f.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})},GM=Ll.lazy(()=>Xg(()=>import("./AdminUpload-B3oyXNHW.js"),[])),KM=Ll.lazy(()=>Xg(()=>import("./AdminGallery-D5AQsOoD.js"),[]));Ll.lazy(()=>Xg(()=>import("./AdminBookings-CLTOlf9Z.js"),[]));async function Wu(t){try{return(await xO(t)).data().count||0}catch{return 0}}const dd=(...t)=>t.filter(Boolean).join(" ");function pf(t){const e=Array.from(document.querySelectorAll("h3")).find(n=>{var r;return((r=n.textContent)==null?void 0:r.trim())===t});e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function QM(){const[t,e]=U.useState(null),[n,r]=U.useState({rows:[],loading:!0,error:""}),[i,s]=U.useState(!0);U.useEffect(()=>{(async()=>{s(!0);const u=mo(ai,"bookings"),c=mo(ai,"galleries"),d=await Wu(Ji(u)),f=await Wu(Ji(u,Kn("status","==","pending"))),m=await Wu(Ji(u,Kn("status","==","confirmed"),Kn("startAt",">=",new Date))),T=await Wu(Ji(c));e({totalBookings:d,pending:f,confirmedUpcoming:m,galleries:T}),s(!1),await o(r)})()},[]);async function o(u){try{const c=mo(ai,"bookings"),d=Ji(c,Kn("startAt",">=",new Date),SO("startAt","asc"),AO(6)),m=(await ad(d)).docs.map(T=>({id:T.id,...T.data()}));u({rows:m,loading:!1,error:""})}catch(c){console.warn("Upcoming query failed:",c),u({rows:[],loading:!1,error:"Couldn’t load upcoming bookings (index needed?)."})}}async function l(u){if(window.confirm("Cancel this appointment? This cannot be undone."))try{await kO(Pg(ai,"bookings",u),{status:"canceled",canceledAt:OS()}),r(d=>({...d,loading:!0})),await o(r)}catch(d){console.error("Cancel failed:",d),alert("Could not cancel. Check Firestore rules/connection."),r(f=>({...f,loading:!1}))}}return v.jsx("section",{className:"w-full py-10 md:py-14 bg-ivory",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[v.jsxs("div",{className:"flex items-center justify-between gap-4",children:[v.jsxs("div",{children:[v.jsx("h1",{className:"text-2xl md:3xl font-serif font-semibold text-charcoal",children:"Admin"}),v.jsx("p",{className:"text-sm text-charcoal/70",children:"Manage uploads, client galleries, and bookings in one place."})]}),v.jsx("button",{onClick:()=>Jg.signOut(),className:"rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow-md",children:"Sign out"})]}),v.jsx("div",{className:"mt-6 grid grid-cols-2 md:grid-cols-4 gap-4",children:i?v.jsxs(v.Fragment,{children:[v.jsx(Gu,{}),v.jsx(Gu,{}),v.jsx(Gu,{}),v.jsx(Gu,{})]}):v.jsxs(v.Fragment,{children:[v.jsx(qu,{label:"Total Bookings",value:t.totalBookings}),v.jsx(qu,{label:"Pending",value:t.pending,accent:"rose"}),v.jsx(qu,{label:"Upcoming (Confirmed)",value:t.confirmedUpcoming,accent:"gold"}),v.jsx(qu,{label:"Galleries",value:t.galleries})]})}),v.jsx("div",{className:"mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6",children:v.jsxs(wa,{title:"Quick Actions",className:"lg:col-span-12",children:[v.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[v.jsx(Ku,{label:"New Gallery",onClick:()=>pf("Galleries")}),v.jsx(Ku,{label:"Upload Photos",onClick:()=>pf("Upload")}),v.jsx(Ku,{label:"View Upcoming",onClick:()=>pf("Upcoming Bookings")}),v.jsx(Ku,{label:"Go to Portfolio",href:"/portfolio"})]}),v.jsxs("p",{className:"text-xs text-charcoal/60 mt-4",children:["Tip: For fastest queries on ",v.jsx("code",{children:"bookings"}),", add a composite index:",v.jsx("code",{children:" status (ASC) "})," + ",v.jsx("code",{children:" startAt (ASC)"}),"."]})]})}),v.jsxs("div",{className:"mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6",children:[v.jsxs(wa,{title:"Upload",className:"lg:col-span-6 xl:col-span-7",children:[v.jsxs("p",{className:"text-sm text-charcoal/70 mb-4",children:["Upload to ",v.jsx("span",{className:"font-semibold",children:"Portfolio"})," or a selected ",v.jsx("span",{className:"font-semibold",children:"Client Gallery"}),". Tags are applied automatically."]}),v.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:v.jsx(U.Suspense,{fallback:v.jsx("div",{className:"p-4 text-sm text-charcoal/60",children:"Loading…"}),children:v.jsx(GM,{})})})]}),v.jsx(wa,{title:"Upcoming Bookings",className:"lg:col-span-6 xl:col-span-5",children:n.loading?v.jsx(YM,{rows:4}):n.error?v.jsx("div",{className:"text-sm text-red-700",children:n.error}):n.rows.length===0?v.jsx("div",{className:"text-sm text-charcoal/60",children:"No upcoming bookings."}):v.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:v.jsx("div",{className:"overflow-x-auto",children:v.jsx("div",{className:"max-h-[28rem] overflow-y-auto",children:v.jsxs("table",{className:"w-full text-sm min-w-[760px]",children:[v.jsx("thead",{className:"bg-rose-50 text-charcoal/80 sticky top-0 z-10",children:v.jsxs("tr",{children:[v.jsx(Ea,{children:"When"}),v.jsx(Ea,{children:"Client"}),v.jsx(Ea,{children:"Package"}),v.jsx(Ea,{children:"Ref"}),v.jsx(Ea,{className:"w-36",children:"Actions"})]})}),v.jsx("tbody",{children:n.rows.map(u=>{var T,S,k,b,A,w,R,O,$;const c=(S=(T=u.startAt)==null?void 0:T.toDate)==null?void 0:S.call(T),d=c?c.toLocaleString([],{dateStyle:"medium",timeStyle:"short"}):`${u.date} ${u.time}`,f=c?c.getTime()<Date.now():!1,m=(u.status||"").toLowerCase()==="canceled";return v.jsxs("tr",{className:"border-t border-slate-100",children:[v.jsxs(Ta,{children:[v.jsxs("div",{className:"flex items-center gap-2",children:[m&&v.jsx("span",{className:"text-rose font-semibold",children:"●"}),v.jsx("span",{children:d})]}),v.jsx("div",{className:"text-slate-500",children:(k=u.details)==null?void 0:k.location})]}),v.jsxs(Ta,{children:[v.jsx("div",{className:"font-medium",children:(b=u.details)==null?void 0:b.name}),v.jsx("div",{className:"text-slate-500",children:(A=u.details)==null?void 0:A.email}),v.jsx("div",{className:"text-slate-500",children:(w=u.details)==null?void 0:w.phone})]}),v.jsxs(Ta,{children:[v.jsx("div",{className:"font-medium",children:(R=u.package)==null?void 0:R.name}),v.jsxs("div",{className:"text-slate-500",children:["$",(O=u.package)==null?void 0:O.price," — ",($=u.package)==null?void 0:$.duration]})]}),v.jsx(Ta,{className:"font-mono",children:u.reference}),v.jsx(Ta,{children:m?v.jsx("span",{className:"text-rose font-semibold",children:"Canceled"}):v.jsx("button",{className:"rounded-full px-3 py-2 text-xs font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all",onClick:()=>l(u.id),disabled:f,title:f?"This time has already passed":"Cancel appointment",children:"Cancel"})})]},u.id)})})]})})})})}),v.jsxs(wa,{title:"Galleries",className:"lg:col-span-12",children:[v.jsxs("p",{className:"text-sm text-charcoal/70 mb-4",children:["Create a client gallery (slug + access code). Then upload with the generated tag (e.g., ",v.jsx("code",{children:"gal-aliyah-sam"}),")."]}),v.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:v.jsx(U.Suspense,{fallback:v.jsx("div",{className:"p-4 text-sm text-charcoal/60",children:"Loading…"}),children:v.jsx(KM,{})})})]}),v.jsx(wa,{title:"Notes",className:"lg:col-span-12",children:v.jsxs("ul",{className:"text-sm text-charcoal/80 list-disc ml-5 space-y-2",children:[v.jsx("li",{children:"Confirm pending bookings and send welcome emails."}),v.jsx("li",{children:"Create galleries for upcoming shoots."}),v.jsx("li",{children:"Upload highlight images to Portfolio."})]})})]})]})})}function qu({label:t,value:e,accent:n}){const r=n==="rose"?"ring-rose/30":n==="gold"?"ring-gold/30":"ring-slate-200";return v.jsxs("div",{className:dd("rounded-2xl bg-white/80 border border-rose/30 shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-4 ring-1",r),children:[v.jsx("div",{className:"text-sm text-charcoal/70",children:t}),v.jsx("div",{className:"text-2xl font-semibold text-charcoal mt-1",children:e})]})}function Gu(){return v.jsxs("div",{className:"rounded-2xl bg-white/80 border border-rose/30 p-4 animate-pulse",children:[v.jsx("div",{className:"h-3 w-24 bg-slate-200 rounded mb-3"}),v.jsx("div",{className:"h-7 w-12 bg-slate-200 rounded"})]})}function wa({title:t,className:e,children:n}){return v.jsxs("section",{className:dd("rounded-2xl border border-rose/30 bg-blush/20 p-4 md:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]",e),children:[v.jsx("h3",{className:"text-lg font-serif font-semibold text-charcoal mb-3",children:t}),n]})}function Ea({children:t,className:e}){return v.jsx("th",{className:dd("text-left px-4 py-3",e),children:t})}function Ta({children:t,className:e}){return v.jsx("td",{className:dd("px-4 py-3 align-top",e),children:t})}function YM({rows:t=4}){return v.jsx("div",{className:"rounded-2xl border border-rose/30 bg-white overflow-hidden",children:v.jsx("div",{className:"animate-pulse p-4 space-y-3",children:Array.from({length:t}).map((e,n)=>v.jsx("div",{className:"h-10 bg-slate-100 rounded"},n))})})}function Ku({label:t,onClick:e,href:n}){return n?v.jsx("a",{href:n,className:"w-full text-center rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow",children:t}):v.jsx("button",{onClick:e,className:"w-full rounded-full px-4 py-2 text-sm font-semibold bg-rose text-ivory hover:bg-gold hover:text-charcoal transition-all shadow",children:t})}const JM=()=>{};var qw={};/**
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
 */const EA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},TA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,f=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[d],n[f],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(EA(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new ZM;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eV=function(t){const e=EA(t);return TA.encodeByteArray(e,!0)},IA=function(t){return eV(t).replace(/\./g,"")},SA=function(t){try{return TA.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tV(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nV=()=>tV().__FIREBASE_DEFAULTS__,rV=()=>{if(typeof process>"u"||typeof qw>"u")return;const t=qw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iV=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&SA(t[1]);return e&&JSON.parse(e)},sV=()=>{try{return JM()||nV()||rV()||iV()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oV=t=>{var e;return(e=sV())==null?void 0:e[`_${t}`]};/**
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
 */function AA(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
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
 */function lr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aV(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lr())}function lV(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uV(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cV(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hV(){try{return typeof indexedDB=="object"}catch{return!1}}function dV(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const fV="FirebaseError";class Cs extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fV,Object.setPrototypeOf(this,Cs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tu.prototype.create)}}class tu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pV(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Cs(i,l,r)}}function pV(t,e){return t.replace(mV,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mV=/\{\$([^}]+)}/g;/**
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
 */function RA(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function gV(t,e){const n=new yV(t,e);return n.subscribe.bind(n)}class yV{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_V(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mf),i.error===void 0&&(i.error=mf),i.complete===void 0&&(i.complete=mf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _V(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mf(){}/**
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
 */function nu(t){return t&&t._delegate?t._delegate:t}class Nl{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const vV={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},wV=Oe.INFO,EV={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},TV=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=EV[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class CA{constructor(e){this.name=e,this._logLevel=wV,this._logHandler=TV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vV[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const IV=(t,e)=>e.some(n=>t instanceof n);let Gw,Kw;function SV(){return Gw||(Gw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AV(){return Kw||(Kw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PA=new WeakMap,Hp=new WeakMap,kA=new WeakMap,gf=new WeakMap,Zg=new WeakMap;function RV(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ei(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&PA.set(n,t)}).catch(()=>{}),Zg.set(e,t),e}function CV(t){if(Hp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hp.set(t,e)}let Wp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kA.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ei(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PV(t){Wp=t(Wp)}function kV(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yf(this),e,...n);return kA.set(r,e.sort?e.sort():[e]),Ei(r)}:AV().includes(t)?function(...e){return t.apply(yf(this),e),Ei(PA.get(this))}:function(...e){return Ei(t.apply(yf(this),e))}}function xV(t){return typeof t=="function"?kV(t):(t instanceof IDBTransaction&&CV(t),IV(t,SV())?new Proxy(t,Wp):t)}function Ei(t){if(t instanceof IDBRequest)return RV(t);if(gf.has(t))return gf.get(t);const e=xV(t);return e!==t&&(gf.set(t,e),Zg.set(e,t)),e}const yf=t=>Zg.get(t);function NV(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ei(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ei(o.result),u.oldVersion,u.newVersion,Ei(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const bV=["get","getKey","getAll","getAllKeys","count"],DV=["put","add","delete","clear"],_f=new Map;function Qw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_f.get(e))return _f.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=DV.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bV.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return _f.set(e,s),s}PV(t=>({...t,get:(e,n,r)=>Qw(e,n)||t.get(e,n,r),has:(e,n)=>!!Qw(e,n)||t.has(e,n)}));/**
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
 */class OV{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LV(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LV(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qp="@firebase/app",Yw="0.14.1";/**
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
 */const Dr=new CA("@firebase/app"),MV="@firebase/app-compat",VV="@firebase/analytics-compat",UV="@firebase/analytics",FV="@firebase/app-check-compat",jV="@firebase/app-check",$V="@firebase/auth",BV="@firebase/auth-compat",zV="@firebase/database",HV="@firebase/data-connect",WV="@firebase/database-compat",qV="@firebase/functions",GV="@firebase/functions-compat",KV="@firebase/installations",QV="@firebase/installations-compat",YV="@firebase/messaging",JV="@firebase/messaging-compat",XV="@firebase/performance",ZV="@firebase/performance-compat",e4="@firebase/remote-config",t4="@firebase/remote-config-compat",n4="@firebase/storage",r4="@firebase/storage-compat",i4="@firebase/firestore",s4="@firebase/ai",o4="@firebase/firestore-compat",a4="firebase",l4="12.1.0",u4={[qp]:"fire-core",[MV]:"fire-core-compat",[UV]:"fire-analytics",[VV]:"fire-analytics-compat",[jV]:"fire-app-check",[FV]:"fire-app-check-compat",[$V]:"fire-auth",[BV]:"fire-auth-compat",[zV]:"fire-rtdb",[HV]:"fire-data-connect",[WV]:"fire-rtdb-compat",[qV]:"fire-fn",[GV]:"fire-fn-compat",[KV]:"fire-iid",[QV]:"fire-iid-compat",[YV]:"fire-fcm",[JV]:"fire-fcm-compat",[XV]:"fire-perf",[ZV]:"fire-perf-compat",[e4]:"fire-rc",[t4]:"fire-rc-compat",[n4]:"fire-gcs",[r4]:"fire-gcs-compat",[i4]:"fire-fst",[o4]:"fire-fst-compat",[s4]:"fire-vertex","fire-js":"fire-js",[a4]:"fire-js-all"};/**
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
 */const c4=new Map,h4=new Map,Jw=new Map;function Xw(t,e){try{t.container.addComponent(e)}catch(n){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bl(t){const e=t.name;if(Jw.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Jw.set(e,t);for(const n of c4.values())Xw(n,t);for(const n of h4.values())Xw(n,t);return!0}function Hs(t){return t==null?!1:t.settings!==void 0}/**
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
 */const d4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ey=new tu("app","Firebase",d4);/**
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
 */const ty=l4;function Xa(t,e,n){let r=u4[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(o.join(" "));return}bl(new Nl(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const f4="firebase-heartbeat-database",p4=1,Dl="firebase-heartbeat-store";let vf=null;function xA(){return vf||(vf=NV(f4,p4,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Dl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ey.create("idb-open",{originalErrorMessage:t.message})})),vf}async function m4(t){try{const n=(await xA()).transaction(Dl),r=await n.objectStore(Dl).get(NA(t));return await n.done,r}catch(e){if(e instanceof Cs)Dr.warn(e.message);else{const n=ey.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(n.message)}}}async function Zw(t,e){try{const r=(await xA()).transaction(Dl,"readwrite");await r.objectStore(Dl).put(e,NA(t)),await r.done}catch(n){if(n instanceof Cs)Dr.warn(n.message);else{const r=ey.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dr.warn(r.message)}}}function NA(t){return`${t.name}!${t.options.appId}`}/**
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
 */const g4=1024,y4=30;class _4{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new w4(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eE();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>y4){const o=E4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=eE(),{heartbeatsToSend:r,unsentEntries:i}=v4(this._heartbeatsCache.heartbeats),s=IA(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Dr.warn(n),""}}}function eE(){return new Date().toISOString().substring(0,10)}function v4(t,e=g4){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class w4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hV()?dV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await m4(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tE(t){return IA(JSON.stringify({version:2,heartbeats:t})).length}function E4(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function T4(t){bl(new Nl("platform-logger",e=>new OV(e),"PRIVATE")),bl(new Nl("heartbeat",e=>new _4(e),"PRIVATE")),Xa(qp,Yw,t),Xa(qp,Yw,"esm2020"),Xa("fire-js","")}T4("");function bA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I4=bA,DA=new tu("auth","Firebase",bA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=new CA("@firebase/auth");function S4(t,...e){vh.logLevel<=Oe.WARN&&vh.warn(`Auth (${ty}): ${t}`,...e)}function wc(t,...e){vh.logLevel<=Oe.ERROR&&vh.error(`Auth (${ty}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(t,...e){throw ny(t,...e)}function OA(t,...e){return ny(t,...e)}function LA(t,e,n){const r={...I4(),[e]:n};return new tu("auth","Firebase",r).create(e,{appName:t.name})}function Ec(t){return LA(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ny(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return DA.create(t,...e)}function Se(t,e,...n){if(!t)throw ny(e,...n)}function Za(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wc(e),new Error(e)}function wh(t,e){t||Za(e)}function A4(){return rE()==="http:"||rE()==="https:"}function rE(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A4()||uV()||"connection"in navigator)?navigator.onLine:!0}function C4(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.shortDelay=e,this.longDelay=n,wh(n>e,"Short delay should be less than long delay!"),this.isMobile=aV()||cV()}get(){return R4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(t,e){wh(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Za("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Za("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Za("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],N4=new ru(3e4,6e4);function VA(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fd(t,e,n,r,i={}){return UA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=RA({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:u,...s};return lV()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&AA(t.emulatorConfig.host)&&(c.credentials="include"),MA.fetch()(await FA(t,t.config.apiHost,n,l),c)})}async function UA(t,e,n){t._canInitEmulator=!1;const r={...k4,...e};try{const i=new b4(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Qu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Qu(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw LA(t,d,c);nE(t,d)}}catch(i){if(i instanceof Cs)throw i;nE(t,"network-request-failed",{message:String(i)})}}async function FA(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?P4(t.config,i):`${t.config.apiScheme}://${i}`;return x4.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class b4{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(OA(this.auth,"network-request-failed")),N4.get())})}}function Qu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=OA(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D4(t,e){return fd(t,"POST","/v1/accounts:delete",e)}async function Eh(t,e){return fd(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O4(t,e=!1){const n=nu(t),r=await n.getIdToken(e),i=jA(r);Se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:el(wf(i.auth_time)),issuedAtTime:el(wf(i.iat)),expirationTime:el(wf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wf(t){return Number(t)*1e3}function jA(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wc("JWT malformed, contained fewer than 3 sections"),null;try{const i=SA(n);return i?JSON.parse(i):(wc("Failed to decode base64 JWT payload"),null)}catch(i){return wc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function iE(t){const e=jA(t);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cs&&L4(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function L4({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=el(this.lastLoginAt),this.creationTime=el(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Th(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Gp(t,Eh(e,{idToken:n}));Se(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?$A(i.providerUserInfo):[],o=U4(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Kp(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function V4(t){const e=nu(t);await Th(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U4(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $A(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F4(t,e){const n=await UA(t,{},async()=>{const r=RA({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await FA(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&AA(t.emulatorConfig.host)&&(u.credentials="include"),MA.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function j4(t,e){return fd(t,"POST","/v2/accounts:revokeToken",VA(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const n=iE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await F4(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _o;return r&&(Se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return Za("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t,e){Se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new M4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gp(this,this.stsTokenManager.getToken(this.auth,e));return Se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return O4(this,e)}reload(){return V4(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Th(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hs(this.auth.app))return Promise.reject(Ec(this.auth));const e=await this.getIdToken();return await Gp(this,D4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:T,providerData:S,stsTokenManager:k}=n;Se(f&&k,e,"internal-error");const b=_o.fromJSON(this.name,k);Se(typeof f=="string",e,"internal-error"),qr(r,e.name),qr(i,e.name),Se(typeof m=="boolean",e,"internal-error"),Se(typeof T=="boolean",e,"internal-error"),qr(s,e.name),qr(o,e.name),qr(l,e.name),qr(u,e.name),qr(c,e.name),qr(d,e.name);const A=new Qn({uid:f,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:T,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:b,createdAt:c,lastLoginAt:d});return S&&Array.isArray(S)&&(A.providerData=S.map(w=>({...w}))),u&&(A._redirectEventId=u),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new _o;i.updateFromServerResponse(n);const s=new Qn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Th(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$A(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new _o;l.updateFromIdToken(r);const u=new Qn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Kp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=new Map;function rs(t){wh(t instanceof Function,"Expected a class definition");let e=sE.get(t);return e?(wh(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sE.set(t,e),e)}/**
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
 */class BA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}BA.type="NONE";const oE=BA;/**
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
 */function Ef(t,e,n){return`firebase:${t}:${e}:${n}`}class vo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ef(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ef("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Eh(this.auth,{idToken:e}).catch(()=>{});return n?Qn._fromGetAccountInfoResponse(this.auth,n,e):null}return Qn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vo(rs(oE),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||rs(oE);const o=Ef(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){let f;if(typeof d=="string"){const m=await Eh(e,{idToken:d}).catch(()=>{});if(!m)break;f=await Qn._fromGetAccountInfoResponse(e,m,d)}else f=Qn._fromJSON(e,d);c!==s&&(l=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new vo(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new vo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H4(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($4(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q4(e))return"Blackberry";if(G4(e))return"Webos";if(B4(e))return"Safari";if((e.includes("chrome/")||z4(e))&&!e.includes("edge/"))return"Chrome";if(W4(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $4(t=lr()){return/firefox\//i.test(t)}function B4(t=lr()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z4(t=lr()){return/crios\//i.test(t)}function H4(t=lr()){return/iemobile/i.test(t)}function W4(t=lr()){return/android/i.test(t)}function q4(t=lr()){return/blackberry/i.test(t)}function G4(t=lr()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t,e=[]){let n;switch(t){case"Browser":n=aE(lr());break;case"Worker":n=`${aE(lr())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ty}/${r}`}/**
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
 */class K4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Q4(t,e={}){return fd(t,"GET","/v2/passwordPolicy",VA(t,e))}/**
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
 */const Y4=6;class J4{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Y4,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lE(this),this.idTokenSubscription=new lE(this),this.beforeStateQueue=new K4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rs(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Eh(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Hs(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Th(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Hs(this.app))return Promise.reject(Ec(this));const n=e?nu(e):null;return n&&Se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Hs(this.app)?Promise.reject(Ec(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Hs(this.app)?Promise.reject(Ec(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Q4(this),n=new J4(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new tu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await j4(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rs(e)||this._popupRedirectResolver;Se(n,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[rs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Hs(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&S4(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Z4(t){return nu(t)}class lE{constructor(e){this.auth=e,this.observer=null,this.addObserver=gV(n=>this.observer=n)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function eU(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tU(t,e,n,r){return nu(t).onAuthStateChanged(e,n,r)}new ru(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ru(2e3,1e4);/**
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
 */new ru(3e4,6e4);/**
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
 */new ru(5e3,15e3);var uE="@firebase/auth",cE="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iU(t){bl(new Nl("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zA(t)},c=new X4(r,i,s,u);return eU(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bl(new Nl("auth-internal",e=>{const n=Z4(e.getProvider("auth").getImmediate());return(r=>new nU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xa(uE,cE,rU(t)),Xa(uE,cE,"esm2020")}/**
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
 */const sU=5*60;oV("authIdTokenMaxAge");iU("Browser");/*! *****************************************************************************
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
***************************************************************************** */function oU(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{c(r.next(d))}catch(f){o(f)}}function u(d){try{c(r.throw(d))}catch(f){o(f)}}function c(d){d.done?s(d.value):i(d.value).then(l,u)}c((r=r.apply(t,[])).next())})}function aU(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(c){return function(d){return u([c,d])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(d){c=[6,d],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var so=function(){return so=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},so.apply(this,arguments)},HA=function(t){return{loading:t==null,value:t}},lU=function(){return function(t,e){switch(e.type){case"error":return so(so({},t),{error:e.error,loading:!1,value:void 0});case"reset":return HA(e.defaultValue);case"value":return so(so({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},uU=function(t){var e=t?t():void 0,n=U.useReducer(lU(),HA(e)),r=n[0],i=n[1],s=U.useCallback(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=U.useCallback(function(u){i({type:"error",error:u})},[]),l=U.useCallback(function(u){i({type:"value",value:u})},[]);return U.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:l,value:r.value}},[r.error,r.loading,s,o,l,r.value])},cU=function(t,e){var n=uU(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,l=n.value;return U.useEffect(function(){var u=tU(t,function(c){return oU(void 0,void 0,void 0,function(){var d;return aU(this,function(f){switch(f.label){case 0:return[3,4];case 1:return f.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return f.sent(),[3,4];case 3:return d=f.sent(),s(d),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]),[l,i,r]};function hU({children:t}){const[e,n]=cU(Jg);return n?v.jsx("div",{className:"p-8 text-center",children:"Loading..."}):e?t:v.jsx(QP,{to:"/admin-login",replace:!0})}const dU=ik([{path:"/",element:v.jsx(Tk,{}),children:[{index:!0,element:v.jsx(Ik,{})},{path:"portfolio",element:v.jsx(Ak,{})},{path:"booking",element:v.jsx(UM,{})},{path:"faq",element:v.jsx(FM,{})},{path:"client",element:v.jsx(zM,{})},{path:"admin-login",element:v.jsx(HM,{})},{path:"admin",element:v.jsx(hU,{children:v.jsx(QM,{})})}]}]);AI(document.getElementById("root")).render(v.jsx(Ll.StrictMode,{children:v.jsx(dk,{router:dU})}));export{Pg as a,OS as b,mo as c,ai as d,SU as e,ad as g,v as j,SO as o,Ji as q,U as r,IU as s,kO as u};
