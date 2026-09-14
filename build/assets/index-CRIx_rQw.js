function a_(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function o_(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ou={exports:{}},Ha={},ku={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function l_(){if(Kp)return vt;Kp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,R={};function S(D,re,ve){this.props=D,this.context=re,this.refs=R,this.updater=ve||E}S.prototype.isReactComponent={},S.prototype.setState=function(D,re){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,re,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=S.prototype;function L(D,re,ve){this.props=D,this.context=re,this.refs=R,this.updater=ve||E}var O=L.prototype=new _;O.constructor=L,b(O,S.prototype),O.isPureReactComponent=!0;var A=Array.isArray,C=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function y(D,re,ve){var Le,ke={},He=null,Z=null;if(re!=null)for(Le in re.ref!==void 0&&(Z=re.ref),re.key!==void 0&&(He=""+re.key),re)C.call(re,Le)&&!F.hasOwnProperty(Le)&&(ke[Le]=re[Le]);var de=arguments.length-2;if(de===1)ke.children=ve;else if(1<de){for(var Me=Array(de),je=0;je<de;je++)Me[je]=arguments[je+2];ke.children=Me}if(D&&D.defaultProps)for(Le in de=D.defaultProps,de)ke[Le]===void 0&&(ke[Le]=de[Le]);return{$$typeof:r,type:D,key:He,ref:Z,props:ke,_owner:P.current}}function N(D,re){return{$$typeof:r,type:D.type,key:re,ref:D.ref,props:D.props,_owner:D._owner}}function B(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function X(D){var re={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ve){return re[ve]})}var $=/\/+/g;function se(D,re){return typeof D=="object"&&D!==null&&D.key!=null?X(""+D.key):re.toString(36)}function Y(D,re,ve,Le,ke){var He=typeof D;(He==="undefined"||He==="boolean")&&(D=null);var Z=!1;if(D===null)Z=!0;else switch(He){case"string":case"number":Z=!0;break;case"object":switch(D.$$typeof){case r:case e:Z=!0}}if(Z)return Z=D,ke=ke(Z),D=Le===""?"."+se(Z,0):Le,A(ke)?(ve="",D!=null&&(ve=D.replace($,"$&/")+"/"),Y(ke,re,ve,"",function(je){return je})):ke!=null&&(B(ke)&&(ke=N(ke,ve+(!ke.key||Z&&Z.key===ke.key?"":(""+ke.key).replace($,"$&/")+"/")+D)),re.push(ke)),1;if(Z=0,Le=Le===""?".":Le+":",A(D))for(var de=0;de<D.length;de++){He=D[de];var Me=Le+se(He,de);Z+=Y(He,re,ve,Me,ke)}else if(Me=g(D),typeof Me=="function")for(D=Me.call(D),de=0;!(He=D.next()).done;)He=He.value,Me=Le+se(He,de++),Z+=Y(He,re,ve,Me,ke);else if(He==="object")throw re=String(D),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Z}function ee(D,re,ve){if(D==null)return D;var Le=[],ke=0;return Y(D,Le,"","",function(He){return re.call(ve,He,ke++)}),Le}function fe(D){if(D._status===-1){var re=D._result;re=re(),re.then(function(ve){(D._status===0||D._status===-1)&&(D._status=1,D._result=ve)},function(ve){(D._status===0||D._status===-1)&&(D._status=2,D._result=ve)}),D._status===-1&&(D._status=0,D._result=re)}if(D._status===1)return D._result.default;throw D._result}var Q={current:null},k={transition:null},q={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:k,ReactCurrentOwner:P};function j(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:ee,forEach:function(D,re,ve){ee(D,function(){re.apply(this,arguments)},ve)},count:function(D){var re=0;return ee(D,function(){re++}),re},toArray:function(D){return ee(D,function(re){return re})||[]},only:function(D){if(!B(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},vt.Component=S,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=L,vt.StrictMode=s,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,vt.act=j,vt.cloneElement=function(D,re,ve){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Le=b({},D.props),ke=D.key,He=D.ref,Z=D._owner;if(re!=null){if(re.ref!==void 0&&(He=re.ref,Z=P.current),re.key!==void 0&&(ke=""+re.key),D.type&&D.type.defaultProps)var de=D.type.defaultProps;for(Me in re)C.call(re,Me)&&!F.hasOwnProperty(Me)&&(Le[Me]=re[Me]===void 0&&de!==void 0?de[Me]:re[Me])}var Me=arguments.length-2;if(Me===1)Le.children=ve;else if(1<Me){de=Array(Me);for(var je=0;je<Me;je++)de[je]=arguments[je+2];Le.children=de}return{$$typeof:r,type:D.type,key:ke,ref:He,props:Le,_owner:Z}},vt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},vt.createElement=y,vt.createFactory=function(D){var re=y.bind(null,D);return re.type=D,re},vt.createRef=function(){return{current:null}},vt.forwardRef=function(D){return{$$typeof:f,render:D}},vt.isValidElement=B,vt.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:fe}},vt.memo=function(D,re){return{$$typeof:p,type:D,compare:re===void 0?null:re}},vt.startTransition=function(D){var re=k.transition;k.transition={};try{D()}finally{k.transition=re}},vt.unstable_act=j,vt.useCallback=function(D,re){return Q.current.useCallback(D,re)},vt.useContext=function(D){return Q.current.useContext(D)},vt.useDebugValue=function(){},vt.useDeferredValue=function(D){return Q.current.useDeferredValue(D)},vt.useEffect=function(D,re){return Q.current.useEffect(D,re)},vt.useId=function(){return Q.current.useId()},vt.useImperativeHandle=function(D,re,ve){return Q.current.useImperativeHandle(D,re,ve)},vt.useInsertionEffect=function(D,re){return Q.current.useInsertionEffect(D,re)},vt.useLayoutEffect=function(D,re){return Q.current.useLayoutEffect(D,re)},vt.useMemo=function(D,re){return Q.current.useMemo(D,re)},vt.useReducer=function(D,re,ve){return Q.current.useReducer(D,re,ve)},vt.useRef=function(D){return Q.current.useRef(D)},vt.useState=function(D){return Q.current.useState(D)},vt.useSyncExternalStore=function(D,re,ve){return Q.current.useSyncExternalStore(D,re,ve)},vt.useTransition=function(){return Q.current.useTransition()},vt.version="18.3.1",vt}var $p;function hf(){return $p||($p=1,ku.exports=l_()),ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function c_(){if(Zp)return Ha;Zp=1;var r=hf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,x={},g=null,E=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(E=h.ref);for(v in h)s.call(h,v)&&!l.hasOwnProperty(v)&&(x[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:E,props:x,_owner:o.current}}return Ha.Fragment=t,Ha.jsx=u,Ha.jsxs=u,Ha}var Jp;function u_(){return Jp||(Jp=1,Ou.exports=c_()),Ou.exports}var te=u_(),pl={},Bu={exports:{}},Hn={},zu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function d_(){return Qp||(Qp=1,(function(r){function e(k,q){var j=k.length;k.push(q);e:for(;0<j;){var D=j-1>>>1,re=k[D];if(0<o(re,q))k[D]=q,k[j]=re,j=D;else break e}}function t(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var q=k[0],j=k.pop();if(j!==q){k[0]=j;e:for(var D=0,re=k.length,ve=re>>>1;D<ve;){var Le=2*(D+1)-1,ke=k[Le],He=Le+1,Z=k[He];if(0>o(ke,j))He<re&&0>o(Z,ke)?(k[D]=Z,k[He]=j,D=He):(k[D]=ke,k[Le]=j,D=Le);else if(He<re&&0>o(Z,j))k[D]=Z,k[He]=j,D=He;else break e}}return q}function o(k,q){var j=k.sortIndex-q.sortIndex;return j!==0?j:k.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,x=null,g=3,E=!1,b=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(k){for(var q=t(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=k)s(p),q.sortIndex=q.expirationTime,e(h,q);else break;q=t(p)}}function A(k){if(R=!1,O(k),!b)if(t(h)!==null)b=!0,fe(C);else{var q=t(p);q!==null&&Q(A,q.startTime-k)}}function C(k,q){b=!1,R&&(R=!1,_(y),y=-1),E=!0;var j=g;try{for(O(q),x=t(h);x!==null&&(!(x.expirationTime>q)||k&&!X());){var D=x.callback;if(typeof D=="function"){x.callback=null,g=x.priorityLevel;var re=D(x.expirationTime<=q);q=r.unstable_now(),typeof re=="function"?x.callback=re:x===t(h)&&s(h),O(q)}else s(h);x=t(h)}if(x!==null)var ve=!0;else{var Le=t(p);Le!==null&&Q(A,Le.startTime-q),ve=!1}return ve}finally{x=null,g=j,E=!1}}var P=!1,F=null,y=-1,N=5,B=-1;function X(){return!(r.unstable_now()-B<N)}function $(){if(F!==null){var k=r.unstable_now();B=k;var q=!0;try{q=F(!0,k)}finally{q?se():(P=!1,F=null)}}else P=!1}var se;if(typeof L=="function")se=function(){L($)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ee=Y.port2;Y.port1.onmessage=$,se=function(){ee.postMessage(null)}}else se=function(){S($,0)};function fe(k){F=k,P||(P=!0,se())}function Q(k,q){y=S(function(){k(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){b||E||(b=!0,fe(C))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(k){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var j=g;g=q;try{return k()}finally{g=j}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,q){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var j=g;g=k;try{return q()}finally{g=j}},r.unstable_scheduleCallback=function(k,q,j){var D=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?D+j:D):j=D,k){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,k={id:v++,callback:q,priorityLevel:k,startTime:j,expirationTime:re,sortIndex:-1},j>D?(k.sortIndex=j,e(p,k),t(h)===null&&k===t(p)&&(R?(_(y),y=-1):R=!0,Q(A,j-D))):(k.sortIndex=re,e(h,k),b||E||(b=!0,fe(C))),k},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(k){var q=g;return function(){var j=g;g=q;try{return k.apply(this,arguments)}finally{g=j}}}})(Vu)),Vu}var em;function f_(){return em||(em=1,zu.exports=d_()),zu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function h_(){if(tm)return Hn;tm=1;var r=hf(),e=f_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function g(n){return h.call(x,n)?!0:h.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function E(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,a,c){if(i===null||typeof i>"u"||E(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,L);S[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,L);S[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,L);S[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function O(n,i,a,c){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),X=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),k=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,D;function re(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var ve=!1;function Le(n,i){if(!n||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),m=c.stack.split(`
`),w=d.length-1,U=m.length-1;1<=w&&0<=U&&d[w]!==m[U];)U--;for(;1<=w&&0<=U;w--,U--)if(d[w]!==m[U]){if(w!==1||U!==1)do if(w--,U--,0>U||d[w]!==m[U]){var z=`
`+d[w].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=w&&0<=U);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function ke(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Le(n.type,!1),n;case 11:return n=Le(n.type.render,!1),n;case 1:return n=Le(n.type,!0),n;default:return""}}function He(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case P:return"Portal";case N:return"Profiler";case y:return"StrictMode";case se:return"Suspense";case Y:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case X:return(n.displayName||"Context")+".Consumer";case B:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return i=n.displayName||null,i!==null?i:He(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return He(n(i))}catch{}}return null}function Z(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return He(i);case 8:return i===y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(n){var i=Me(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ie(n){n._valueTracker||(n._valueTracker=je(n))}function lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Me(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Gt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ft(n,i){var a=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function xt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=de(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ut(n,i){i=i.checked,i!=null&&O(n,"checked",i,!1)}function ht(n,i){Ut(n,i);var a=de(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?$t(n,i.type,a):i.hasOwnProperty("defaultValue")&&$t(n,i.type,de(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function kt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function $t(n,i,a){(i!=="number"||Gt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var rn=Array.isArray;function Dt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+de(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Wt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function G(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(rn(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:de(a)}}function on(n,i){var a=de(i.value),c=de(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function At(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?I(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,le=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function pe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function ge(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=pe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ce=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(n,i){if(i){if(Ce[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Te=null;function Je(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var nt=null,st=null,V=null;function Ae(n){if(n=Aa(n)){if(typeof nt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Co(i),nt(n.stateNode,n.type,i))}}function me(n){st?V?V.push(n):V=[n]:st=n}function Re(){if(st){var n=st,i=V;if(V=st=null,Ae(n),i)for(n=0;n<i.length;n++)Ae(i[n])}}function Oe(n,i){return n(i)}function _e(){}var et=!1;function Ke(n,i,a){if(et)return n(i,a);et=!0;try{return Oe(n,i,a)}finally{et=!1,(st!==null||V!==null)&&(_e(),Re())}}function Rt(n,i){var a=n.stateNode;if(a===null)return null;var c=Co(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var wt=!1;if(f)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){wt=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{wt=!1}function Qn(n,i,a,c,d,m,w,U,z){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(Se){this.onError(Se)}}var Fr=!1,fs=null,Or=!1,kr=null,ac={onError:function(n){Fr=!0,fs=n}};function uo(n,i,a,c,d,m,w,U,z){Fr=!1,fs=null,Qn.apply(ac,arguments)}function fo(n,i,a,c,d,m,w,U,z){if(uo.apply(this,arguments),Fr){if(Fr){var ue=fs;Fr=!1,fs=null}else throw Error(t(198));Or||(Or=!0,kr=ue)}}function Nn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function hs(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function aa(n){if(Nn(n)!==n)throw Error(t(188))}function ho(n){var i=n.alternate;if(!i){if(i=Nn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return aa(d),n;if(m===c)return aa(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var w=!1,U=d.child;U;){if(U===a){w=!0,a=d,c=m;break}if(U===c){w=!0,c=d,a=m;break}U=U.sibling}if(!w){for(U=m.child;U;){if(U===a){w=!0,a=m,c=d;break}if(U===c){w=!0,c=m,a=d;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Br(n){return n=ho(n),n!==null?oa(n):null}function oa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=oa(n);if(i!==null)return i;n=n.sibling}return null}var zr=e.unstable_scheduleCallback,la=e.unstable_cancelCallback,po=e.unstable_shouldYield,oc=e.unstable_requestPaint,qt=e.unstable_now,lc=e.unstable_getCurrentPriorityLevel,ca=e.unstable_ImmediatePriority,ua=e.unstable_UserBlockingPriority,T=e.unstable_NormalPriority,H=e.unstable_LowPriority,ce=e.unstable_IdlePriority,ne=null,J=null;function Ue(n){if(J&&typeof J.onCommitFiberRoot=="function")try{J.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:Qe,De=Math.log,We=Math.LN2;function Qe(n){return n>>>=0,n===0?32:31-(De(n)/We|0)|0}var ct=64,dt=4194304;function Ve(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function St(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var U=w&~d;U!==0?c=Ve(U):(m&=w,m!==0&&(c=Ve(m)))}else w=a&~d,w!==0?c=Ve(w):m!==0&&(c=Ve(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ne(i),d=1<<a,c|=n[a],i&=~d;return c}function Zt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-Ne(m),U=1<<w,z=d[w];z===-1?((U&a)===0||(U&c)!==0)&&(d[w]=Zt(U,i)):z<=i&&(n.expiredLanes|=U),m&=~U}}function Nt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ln(){var n=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),n}function Be(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function en(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ne(i),n[i]=a}function yt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ne(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function En(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ne(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var pt=0;function fi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Gi,Ct,Xt,hi,Ft,ei=!1,pi=[],mi=null,ur=null,dr=null,da=new Map,fa=new Map,fr=[],R0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nf(n,i){switch(n){case"focusin":case"focusout":mi=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":da.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(i.pointerId)}}function ha(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Aa(i),i!==null&&Ct(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function C0(n,i,a,c,d){switch(i){case"focusin":return mi=ha(mi,n,i,a,c,d),!0;case"dragenter":return ur=ha(ur,n,i,a,c,d),!0;case"mouseover":return dr=ha(dr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return da.set(m,ha(da.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,fa.set(m,ha(fa.get(m)||null,n,i,a,c,d)),!0}return!1}function Df(n){var i=Vr(n.target);if(i!==null){var a=Nn(i);if(a!==null){if(i=a.tag,i===13){if(i=hs(a),i!==null){n.blockedOn=i,Ft(n.priority,function(){Xt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Te=c,a.target.dispatchEvent(c),Te=null}else return i=Aa(a),i!==null&&Ct(i),n.blockedOn=a,!1;i.shift()}return!0}function If(n,i,a){mo(n)&&a.delete(i)}function P0(){ei=!1,mi!==null&&mo(mi)&&(mi=null),ur!==null&&mo(ur)&&(ur=null),dr!==null&&mo(dr)&&(dr=null),da.forEach(If),fa.forEach(If)}function pa(n,i){n.blockedOn===i&&(n.blockedOn=null,ei||(ei=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,P0)))}function ma(n){function i(d){return pa(d,n)}if(0<pi.length){pa(pi[0],n);for(var a=1;a<pi.length;a++){var c=pi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(mi!==null&&pa(mi,n),ur!==null&&pa(ur,n),dr!==null&&pa(dr,n),da.forEach(i),fa.forEach(i),a=0;a<fr.length;a++)c=fr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Df(a),a.blockedOn===null&&fr.shift()}var ps=A.ReactCurrentBatchConfig,go=!0;function L0(n,i,a,c){var d=pt,m=ps.transition;ps.transition=null;try{pt=1,cc(n,i,a,c)}finally{pt=d,ps.transition=m}}function N0(n,i,a,c){var d=pt,m=ps.transition;ps.transition=null;try{pt=4,cc(n,i,a,c)}finally{pt=d,ps.transition=m}}function cc(n,i,a,c){if(go){var d=uc(n,i,a,c);if(d===null)Ac(n,i,c,vo,a),Nf(n,c);else if(C0(d,n,i,a,c))c.stopPropagation();else if(Nf(n,c),i&4&&-1<R0.indexOf(n)){for(;d!==null;){var m=Aa(d);if(m!==null&&Gi(m),m=uc(n,i,a,c),m===null&&Ac(n,i,c,vo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Ac(n,i,c,null,a)}}var vo=null;function uc(n,i,a,c){if(vo=null,n=Je(c),n=Vr(n),n!==null)if(i=Nn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=hs(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return vo=n,null}function Uf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lc()){case ca:return 1;case ua:return 4;case T:case H:return 16;case ce:return 536870912;default:return 16}default:return 16}}var hr=null,dc=null,_o=null;function Ff(){if(_o)return _o;var n,i=dc,a=i.length,c,d="value"in hr?hr.value:hr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===d[m-c];c++);return _o=d.slice(n,1<c?1-c:void 0)}function xo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function So(){return!0}function Of(){return!1}function Xn(n){function i(a,c,d,m,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?So:Of,this.isPropagationStopped=Of,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=Xn(ms),ga=j({},ms,{view:0,detail:0}),D0=Xn(ga),hc,pc,va,yo=j({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==va&&(va&&n.type==="mousemove"?(hc=n.screenX-va.screenX,pc=n.screenY-va.screenY):pc=hc=0,va=n),hc)},movementY:function(n){return"movementY"in n?n.movementY:pc}}),kf=Xn(yo),I0=j({},yo,{dataTransfer:0}),U0=Xn(I0),F0=j({},ga,{relatedTarget:0}),mc=Xn(F0),O0=j({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),k0=Xn(O0),B0=j({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),z0=Xn(B0),V0=j({},ms,{data:0}),Bf=Xn(V0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=W0[n])?!!i[n]:!1}function gc(){return X0}var Y0=j({},ga,{key:function(n){if(n.key){var i=H0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?G0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(n){return n.type==="keypress"?xo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),q0=Xn(Y0),j0=j({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=Xn(j0),K0=j({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),$0=Xn(K0),Z0=j({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=Xn(Z0),Q0=j({},yo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ev=Xn(Q0),tv=[9,13,27,32],vc=f&&"CompositionEvent"in window,_a=null;f&&"documentMode"in document&&(_a=document.documentMode);var nv=f&&"TextEvent"in window&&!_a,Vf=f&&(!vc||_a&&8<_a&&11>=_a),Hf=" ",Gf=!1;function Wf(n,i){switch(n){case"keyup":return tv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function iv(n,i){switch(n){case"compositionend":return Xf(i);case"keypress":return i.which!==32?null:(Gf=!0,Hf);case"textInput":return n=i.data,n===Hf&&Gf?null:n;default:return null}}function rv(n,i){if(gs)return n==="compositionend"||!vc&&Wf(n,i)?(n=Ff(),_o=dc=hr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vf&&i.locale!=="ko"?null:i.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!sv[n.type]:i==="textarea"}function qf(n,i,a,c){me(c),i=bo(i,"onChange"),0<i.length&&(a=new fc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var xa=null,Sa=null;function av(n){dh(n,0)}function Mo(n){var i=ys(n);if(lt(i))return n}function ov(n,i){if(n==="change")return i}var jf=!1;if(f){var _c;if(f){var xc="oninput"in document;if(!xc){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),xc=typeof Kf.oninput=="function"}_c=xc}else _c=!1;jf=_c&&(!document.documentMode||9<document.documentMode)}function $f(){xa&&(xa.detachEvent("onpropertychange",Zf),Sa=xa=null)}function Zf(n){if(n.propertyName==="value"&&Mo(Sa)){var i=[];qf(i,Sa,n,Je(n)),Ke(av,i)}}function lv(n,i,a){n==="focusin"?($f(),xa=i,Sa=a,xa.attachEvent("onpropertychange",Zf)):n==="focusout"&&$f()}function cv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Mo(Sa)}function uv(n,i){if(n==="click")return Mo(i)}function dv(n,i){if(n==="input"||n==="change")return Mo(i)}function fv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var gi=typeof Object.is=="function"?Object.is:fv;function ya(n,i){if(gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!gi(n[d],i[d]))return!1}return!0}function Jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qf(n,i){var a=Jf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jf(a)}}function eh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?eh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function th(){for(var n=window,i=Gt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Gt(n.document)}return i}function Sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function hv(n){var i=th(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&eh(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Qf(a,m);var w=Qf(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var pv=f&&"documentMode"in document&&11>=document.documentMode,vs=null,yc=null,Ma=null,Mc=!1;function nh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mc||vs==null||vs!==Gt(c)||(c=vs,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ma&&ya(Ma,c)||(Ma=c,c=bo(yc,"onSelect"),0<c.length&&(i=new fc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=vs)))}function Eo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Ec={},ih={};f&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function wo(n){if(Ec[n])return Ec[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ih)return Ec[n]=i[a];return n}var rh=wo("animationend"),sh=wo("animationiteration"),ah=wo("animationstart"),oh=wo("transitionend"),lh=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,i){lh.set(n,i),l(i,[n])}for(var wc=0;wc<ch.length;wc++){var Tc=ch[wc],mv=Tc.toLowerCase(),gv=Tc[0].toUpperCase()+Tc.slice(1);pr(mv,"on"+gv)}pr(rh,"onAnimationEnd"),pr(sh,"onAnimationIteration"),pr(ah,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(oh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function uh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,fo(c,i,void 0,n),n.currentTarget=null}function dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var U=c[w],z=U.instance,ue=U.currentTarget;if(U=U.listener,z!==m&&d.isPropagationStopped())break e;uh(d,U,ue),m=z}else for(w=0;w<c.length;w++){if(U=c[w],z=U.instance,ue=U.currentTarget,U=U.listener,z!==m&&d.isPropagationStopped())break e;uh(d,U,ue),m=z}}}if(Or)throw n=kr,Or=!1,kr=null,n}function Vt(n,i){var a=i[Dc];a===void 0&&(a=i[Dc]=new Set);var c=n+"__bubble";a.has(c)||(fh(i,n,2,!1),a.add(c))}function bc(n,i,a){var c=0;i&&(c|=4),fh(a,n,c,i)}var To="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[To]){n[To]=!0,s.forEach(function(a){a!=="selectionchange"&&(vv.has(a)||bc(a,!1,n),bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[To]||(i[To]=!0,bc("selectionchange",!1,i))}}function fh(n,i,a,c){switch(Uf(i)){case 1:var d=L0;break;case 4:d=N0;break;default:d=cc}a=d.bind(null,i,a,n),d=void 0,!wt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Ac(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;w=w.return}for(;U!==null;){if(w=Vr(U),w===null)return;if(z=w.tag,z===5||z===6){c=m=w;continue e}U=U.parentNode}}c=c.return}Ke(function(){var ue=m,Se=Je(a),ye=[];e:{var xe=lh.get(n);if(xe!==void 0){var ze=fc,Xe=n;switch(n){case"keypress":if(xo(a)===0)break e;case"keydown":case"keyup":ze=q0;break;case"focusin":Xe="focus",ze=mc;break;case"focusout":Xe="blur",ze=mc;break;case"beforeblur":case"afterblur":ze=mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=U0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=$0;break;case rh:case sh:case ah:ze=k0;break;case oh:ze=J0;break;case"scroll":ze=D0;break;case"wheel":ze=ev;break;case"copy":case"cut":case"paste":ze=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=zf}var $e=(i&4)!==0,tn=!$e&&n==="scroll",ie=$e?xe!==null?xe+"Capture":null:xe;$e=[];for(var W=ue,ae;W!==null;){ae=W;var we=ae.stateNode;if(ae.tag===5&&we!==null&&(ae=we,ie!==null&&(we=Rt(W,ie),we!=null&&$e.push(Ta(W,we,ae)))),tn)break;W=W.return}0<$e.length&&(xe=new ze(xe,Xe,null,a,Se),ye.push({event:xe,listeners:$e}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",ze=n==="mouseout"||n==="pointerout",xe&&a!==Te&&(Xe=a.relatedTarget||a.fromElement)&&(Vr(Xe)||Xe[Wi]))break e;if((ze||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,ze?(Xe=a.relatedTarget||a.toElement,ze=ue,Xe=Xe?Vr(Xe):null,Xe!==null&&(tn=Nn(Xe),Xe!==tn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ze=null,Xe=ue),ze!==Xe)){if($e=kf,we="onMouseLeave",ie="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&($e=zf,we="onPointerLeave",ie="onPointerEnter",W="pointer"),tn=ze==null?xe:ys(ze),ae=Xe==null?xe:ys(Xe),xe=new $e(we,W+"leave",ze,a,Se),xe.target=tn,xe.relatedTarget=ae,we=null,Vr(Se)===ue&&($e=new $e(ie,W+"enter",Xe,a,Se),$e.target=ae,$e.relatedTarget=tn,we=$e),tn=we,ze&&Xe)t:{for($e=ze,ie=Xe,W=0,ae=$e;ae;ae=xs(ae))W++;for(ae=0,we=ie;we;we=xs(we))ae++;for(;0<W-ae;)$e=xs($e),W--;for(;0<ae-W;)ie=xs(ie),ae--;for(;W--;){if($e===ie||ie!==null&&$e===ie.alternate)break t;$e=xs($e),ie=xs(ie)}$e=null}else $e=null;ze!==null&&hh(ye,xe,ze,$e,!1),Xe!==null&&tn!==null&&hh(ye,tn,Xe,$e,!0)}}e:{if(xe=ue?ys(ue):window,ze=xe.nodeName&&xe.nodeName.toLowerCase(),ze==="select"||ze==="input"&&xe.type==="file")var tt=ov;else if(Yf(xe))if(jf)tt=dv;else{tt=cv;var it=lv}else(ze=xe.nodeName)&&ze.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(tt=uv);if(tt&&(tt=tt(n,ue))){qf(ye,tt,a,Se);break e}it&&it(n,xe,ue),n==="focusout"&&(it=xe._wrapperState)&&it.controlled&&xe.type==="number"&&$t(xe,"number",xe.value)}switch(it=ue?ys(ue):window,n){case"focusin":(Yf(it)||it.contentEditable==="true")&&(vs=it,yc=ue,Ma=null);break;case"focusout":Ma=yc=vs=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,nh(ye,a,Se);break;case"selectionchange":if(pv)break;case"keydown":case"keyup":nh(ye,a,Se)}var rt;if(vc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else gs?Wf(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Vf&&a.locale!=="ko"&&(gs||at!=="onCompositionStart"?at==="onCompositionEnd"&&gs&&(rt=Ff()):(hr=Se,dc="value"in hr?hr.value:hr.textContent,gs=!0)),it=bo(ue,at),0<it.length&&(at=new Bf(at,n,null,a,Se),ye.push({event:at,listeners:it}),rt?at.data=rt:(rt=Xf(a),rt!==null&&(at.data=rt)))),(rt=nv?iv(n,a):rv(n,a))&&(ue=bo(ue,"onBeforeInput"),0<ue.length&&(Se=new Bf("onBeforeInput","beforeinput",null,a,Se),ye.push({event:Se,listeners:ue}),Se.data=rt))}dh(ye,i)})}function Ta(n,i,a){return{instance:n,listener:i,currentTarget:a}}function bo(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Rt(n,a),m!=null&&c.unshift(Ta(n,m,d)),m=Rt(n,i),m!=null&&c.push(Ta(n,m,d))),n=n.return}return c}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hh(n,i,a,c,d){for(var m=i._reactName,w=[];a!==null&&a!==c;){var U=a,z=U.alternate,ue=U.stateNode;if(z!==null&&z===c)break;U.tag===5&&ue!==null&&(U=ue,d?(z=Rt(a,m),z!=null&&w.unshift(Ta(a,z,U))):d||(z=Rt(a,m),z!=null&&w.push(Ta(a,z,U)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var _v=/\r\n?/g,xv=/\u0000|\uFFFD/g;function ph(n){return(typeof n=="string"?n:""+n).replace(_v,`
`).replace(xv,"")}function Ao(n,i,a){if(i=ph(i),ph(n)!==i&&a)throw Error(t(425))}function Ro(){}var Rc=null,Cc=null;function Pc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,Sv=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,yv=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(n){return mh.resolve(null).then(n).catch(Mv)}:Lc;function Mv(n){setTimeout(function(){throw n})}function Nc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ma(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ma(i)}function mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function gh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Ss,ba="__reactProps$"+Ss,Wi="__reactContainer$"+Ss,Dc="__reactEvents$"+Ss,Ev="__reactListeners$"+Ss,wv="__reactHandles$"+Ss;function Vr(n){var i=n[Ci];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Wi]||a[Ci]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=gh(n);n!==null;){if(a=n[Ci])return a;n=gh(n)}return i}n=a,a=n.parentNode}return null}function Aa(n){return n=n[Ci]||n[Wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Co(n){return n[ba]||null}var Ic=[],Ms=-1;function gr(n){return{current:n}}function Ht(n){0>Ms||(n.current=Ic[Ms],Ic[Ms]=null,Ms--)}function zt(n,i){Ms++,Ic[Ms]=n.current,n.current=i}var vr={},wn=gr(vr),On=gr(!1),Hr=vr;function Es(n,i){var a=n.type.contextTypes;if(!a)return vr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function kn(n){return n=n.childContextTypes,n!=null}function Po(){Ht(On),Ht(wn)}function vh(n,i,a){if(wn.current!==vr)throw Error(t(168));zt(wn,i),zt(On,a)}function _h(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Z(n)||"Unknown",d));return j({},a,c)}function Lo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,Hr=wn.current,zt(wn,n),zt(On,On.current),!0}function xh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=_h(n,i,Hr),c.__reactInternalMemoizedMergedChildContext=n,Ht(On),Ht(wn),zt(wn,n)):Ht(On),zt(On,a)}var Xi=null,No=!1,Uc=!1;function Sh(n){Xi===null?Xi=[n]:Xi.push(n)}function Tv(n){No=!0,Sh(n)}function _r(){if(!Uc&&Xi!==null){Uc=!0;var n=0,i=pt;try{var a=Xi;for(pt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Xi=null,No=!1}catch(d){throw Xi!==null&&(Xi=Xi.slice(n+1)),zr(ca,_r),d}finally{pt=i,Uc=!1}}return null}var ws=[],Ts=0,Do=null,Io=0,ti=[],ni=0,Gr=null,Yi=1,qi="";function Wr(n,i){ws[Ts++]=Io,ws[Ts++]=Do,Do=n,Io=i}function yh(n,i,a){ti[ni++]=Yi,ti[ni++]=qi,ti[ni++]=Gr,Gr=n;var c=Yi;n=qi;var d=32-Ne(c)-1;c&=~(1<<d),a+=1;var m=32-Ne(i)+d;if(30<m){var w=d-d%5;m=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Yi=1<<32-Ne(i)+d|a<<d|c,qi=m+n}else Yi=1<<m|a<<d|c,qi=n}function Fc(n){n.return!==null&&(Wr(n,1),yh(n,1,0))}function Oc(n){for(;n===Do;)Do=ws[--Ts],ws[Ts]=null,Io=ws[--Ts],ws[Ts]=null;for(;n===Gr;)Gr=ti[--ni],ti[ni]=null,qi=ti[--ni],ti[ni]=null,Yi=ti[--ni],ti[ni]=null}var Yn=null,qn=null,Yt=!1,vi=null;function Mh(n,i){var a=ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Eh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Yn=n,qn=mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Yn=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Gr!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Yn=n,qn=null,!0):!1;default:return!1}}function kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bc(n){if(Yt){var i=qn;if(i){var a=i;if(!Eh(n,i)){if(kc(n))throw Error(t(418));i=mr(a.nextSibling);var c=Yn;i&&Eh(n,i)?Mh(c,a):(n.flags=n.flags&-4097|2,Yt=!1,Yn=n)}}else{if(kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,Yn=n}}}function wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function Uo(n){if(n!==Yn)return!1;if(!Yt)return wh(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Pc(n.type,n.memoizedProps)),i&&(i=qn)){if(kc(n))throw Th(),Error(t(418));for(;i;)Mh(n,i),i=mr(i.nextSibling)}if(wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){qn=mr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=Yn?mr(n.stateNode.nextSibling):null;return!0}function Th(){for(var n=qn;n;)n=mr(n.nextSibling)}function bs(){qn=Yn=null,Yt=!1}function zc(n){vi===null?vi=[n]:vi.push(n)}var bv=A.ReactCurrentBatchConfig;function Ra(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var U=d.refs;w===null?delete U[m]:U[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Fo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function bh(n){var i=n._init;return i(n._payload)}function Ah(n){function i(ie,W){if(n){var ae=ie.deletions;ae===null?(ie.deletions=[W],ie.flags|=16):ae.push(W)}}function a(ie,W){if(!n)return null;for(;W!==null;)i(ie,W),W=W.sibling;return null}function c(ie,W){for(ie=new Map;W!==null;)W.key!==null?ie.set(W.key,W):ie.set(W.index,W),W=W.sibling;return ie}function d(ie,W){return ie=br(ie,W),ie.index=0,ie.sibling=null,ie}function m(ie,W,ae){return ie.index=ae,n?(ae=ie.alternate,ae!==null?(ae=ae.index,ae<W?(ie.flags|=2,W):ae):(ie.flags|=2,W)):(ie.flags|=1048576,W)}function w(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function U(ie,W,ae,we){return W===null||W.tag!==6?(W=Lu(ae,ie.mode,we),W.return=ie,W):(W=d(W,ae),W.return=ie,W)}function z(ie,W,ae,we){var tt=ae.type;return tt===F?Se(ie,W,ae.props.children,we,ae.key):W!==null&&(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===fe&&bh(tt)===W.type)?(we=d(W,ae.props),we.ref=Ra(ie,W,ae),we.return=ie,we):(we=al(ae.type,ae.key,ae.props,null,ie.mode,we),we.ref=Ra(ie,W,ae),we.return=ie,we)}function ue(ie,W,ae,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==ae.containerInfo||W.stateNode.implementation!==ae.implementation?(W=Nu(ae,ie.mode,we),W.return=ie,W):(W=d(W,ae.children||[]),W.return=ie,W)}function Se(ie,W,ae,we,tt){return W===null||W.tag!==7?(W=Jr(ae,ie.mode,we,tt),W.return=ie,W):(W=d(W,ae),W.return=ie,W)}function ye(ie,W,ae){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Lu(""+W,ie.mode,ae),W.return=ie,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case C:return ae=al(W.type,W.key,W.props,null,ie.mode,ae),ae.ref=Ra(ie,null,W),ae.return=ie,ae;case P:return W=Nu(W,ie.mode,ae),W.return=ie,W;case fe:var we=W._init;return ye(ie,we(W._payload),ae)}if(rn(W)||q(W))return W=Jr(W,ie.mode,ae,null),W.return=ie,W;Fo(ie,W)}return null}function xe(ie,W,ae,we){var tt=W!==null?W.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return tt!==null?null:U(ie,W,""+ae,we);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case C:return ae.key===tt?z(ie,W,ae,we):null;case P:return ae.key===tt?ue(ie,W,ae,we):null;case fe:return tt=ae._init,xe(ie,W,tt(ae._payload),we)}if(rn(ae)||q(ae))return tt!==null?null:Se(ie,W,ae,we,null);Fo(ie,ae)}return null}function ze(ie,W,ae,we,tt){if(typeof we=="string"&&we!==""||typeof we=="number")return ie=ie.get(ae)||null,U(W,ie,""+we,tt);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case C:return ie=ie.get(we.key===null?ae:we.key)||null,z(W,ie,we,tt);case P:return ie=ie.get(we.key===null?ae:we.key)||null,ue(W,ie,we,tt);case fe:var it=we._init;return ze(ie,W,ae,it(we._payload),tt)}if(rn(we)||q(we))return ie=ie.get(ae)||null,Se(W,ie,we,tt,null);Fo(W,we)}return null}function Xe(ie,W,ae,we){for(var tt=null,it=null,rt=W,at=W=0,gn=null;rt!==null&&at<ae.length;at++){rt.index>at?(gn=rt,rt=null):gn=rt.sibling;var Pt=xe(ie,rt,ae[at],we);if(Pt===null){rt===null&&(rt=gn);break}n&&rt&&Pt.alternate===null&&i(ie,rt),W=m(Pt,W,at),it===null?tt=Pt:it.sibling=Pt,it=Pt,rt=gn}if(at===ae.length)return a(ie,rt),Yt&&Wr(ie,at),tt;if(rt===null){for(;at<ae.length;at++)rt=ye(ie,ae[at],we),rt!==null&&(W=m(rt,W,at),it===null?tt=rt:it.sibling=rt,it=rt);return Yt&&Wr(ie,at),tt}for(rt=c(ie,rt);at<ae.length;at++)gn=ze(rt,ie,at,ae[at],we),gn!==null&&(n&&gn.alternate!==null&&rt.delete(gn.key===null?at:gn.key),W=m(gn,W,at),it===null?tt=gn:it.sibling=gn,it=gn);return n&&rt.forEach(function(Ar){return i(ie,Ar)}),Yt&&Wr(ie,at),tt}function $e(ie,W,ae,we){var tt=q(ae);if(typeof tt!="function")throw Error(t(150));if(ae=tt.call(ae),ae==null)throw Error(t(151));for(var it=tt=null,rt=W,at=W=0,gn=null,Pt=ae.next();rt!==null&&!Pt.done;at++,Pt=ae.next()){rt.index>at?(gn=rt,rt=null):gn=rt.sibling;var Ar=xe(ie,rt,Pt.value,we);if(Ar===null){rt===null&&(rt=gn);break}n&&rt&&Ar.alternate===null&&i(ie,rt),W=m(Ar,W,at),it===null?tt=Ar:it.sibling=Ar,it=Ar,rt=gn}if(Pt.done)return a(ie,rt),Yt&&Wr(ie,at),tt;if(rt===null){for(;!Pt.done;at++,Pt=ae.next())Pt=ye(ie,Pt.value,we),Pt!==null&&(W=m(Pt,W,at),it===null?tt=Pt:it.sibling=Pt,it=Pt);return Yt&&Wr(ie,at),tt}for(rt=c(ie,rt);!Pt.done;at++,Pt=ae.next())Pt=ze(rt,ie,at,Pt.value,we),Pt!==null&&(n&&Pt.alternate!==null&&rt.delete(Pt.key===null?at:Pt.key),W=m(Pt,W,at),it===null?tt=Pt:it.sibling=Pt,it=Pt);return n&&rt.forEach(function(s_){return i(ie,s_)}),Yt&&Wr(ie,at),tt}function tn(ie,W,ae,we){if(typeof ae=="object"&&ae!==null&&ae.type===F&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case C:e:{for(var tt=ae.key,it=W;it!==null;){if(it.key===tt){if(tt=ae.type,tt===F){if(it.tag===7){a(ie,it.sibling),W=d(it,ae.props.children),W.return=ie,ie=W;break e}}else if(it.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===fe&&bh(tt)===it.type){a(ie,it.sibling),W=d(it,ae.props),W.ref=Ra(ie,it,ae),W.return=ie,ie=W;break e}a(ie,it);break}else i(ie,it);it=it.sibling}ae.type===F?(W=Jr(ae.props.children,ie.mode,we,ae.key),W.return=ie,ie=W):(we=al(ae.type,ae.key,ae.props,null,ie.mode,we),we.ref=Ra(ie,W,ae),we.return=ie,ie=we)}return w(ie);case P:e:{for(it=ae.key;W!==null;){if(W.key===it)if(W.tag===4&&W.stateNode.containerInfo===ae.containerInfo&&W.stateNode.implementation===ae.implementation){a(ie,W.sibling),W=d(W,ae.children||[]),W.return=ie,ie=W;break e}else{a(ie,W);break}else i(ie,W);W=W.sibling}W=Nu(ae,ie.mode,we),W.return=ie,ie=W}return w(ie);case fe:return it=ae._init,tn(ie,W,it(ae._payload),we)}if(rn(ae))return Xe(ie,W,ae,we);if(q(ae))return $e(ie,W,ae,we);Fo(ie,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,W!==null&&W.tag===6?(a(ie,W.sibling),W=d(W,ae),W.return=ie,ie=W):(a(ie,W),W=Lu(ae,ie.mode,we),W.return=ie,ie=W),w(ie)):a(ie,W)}return tn}var As=Ah(!0),Rh=Ah(!1),Oo=gr(null),ko=null,Rs=null,Vc=null;function Hc(){Vc=Rs=ko=null}function Gc(n){var i=Oo.current;Ht(Oo),n._currentValue=i}function Wc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Cs(n,i){ko=n,Vc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Bn=!0),n.firstContext=null)}function ii(n){var i=n._currentValue;if(Vc!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(ko===null)throw Error(t(308));Rs=n,ko.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var Xr=null;function Xc(n){Xr===null?Xr=[n]:Xr.push(n)}function Ch(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Xc(i)):(a.next=d.next,d.next=a),i.interleaved=a,ji(n,c)}function ji(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var xr=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Sr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,ji(n,a)}return d=c.interleaved,d===null?(i.next=i,Xc(c)):(i.next=d.next,d.next=i),c.interleaved=i,ji(n,a)}function Bo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,En(n,a)}}function Lh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function zo(n,i,a,c){var d=n.updateQueue;xr=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var z=U,ue=z.next;z.next=null,w===null?m=ue:w.next=ue,w=z;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,U=Se.lastBaseUpdate,U!==w&&(U===null?Se.firstBaseUpdate=ue:U.next=ue,Se.lastBaseUpdate=z))}if(m!==null){var ye=d.baseState;w=0,Se=ue=z=null,U=m;do{var xe=U.lane,ze=U.eventTime;if((c&xe)===xe){Se!==null&&(Se=Se.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,$e=U;switch(xe=i,ze=a,$e.tag){case 1:if(Xe=$e.payload,typeof Xe=="function"){ye=Xe.call(ze,ye,xe);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=$e.payload,xe=typeof Xe=="function"?Xe.call(ze,ye,xe):Xe,xe==null)break e;ye=j({},ye,xe);break e;case 2:xr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[U]:xe.push(U))}else ze={eventTime:ze,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Se===null?(ue=Se=ze,z=ye):Se=Se.next=ze,w|=xe;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(Se===null&&(z=ye),d.baseState=z,d.firstBaseUpdate=ue,d.lastBaseUpdate=Se,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);jr|=w,n.lanes=w,n.memoizedState=ye}}function Nh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ca={},Pi=gr(Ca),Pa=gr(Ca),La=gr(Ca);function Yr(n){if(n===Ca)throw Error(t(174));return n}function qc(n,i){switch(zt(La,i),zt(Pa,n),zt(Pi,Ca),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Ht(Pi),zt(Pi,i)}function Ps(){Ht(Pi),Ht(Pa),Ht(La)}function Dh(n){Yr(La.current);var i=Yr(Pi.current),a=M(i,n.type);i!==a&&(zt(Pa,n),zt(Pi,a))}function jc(n){Pa.current===n&&(Ht(Pi),Ht(Pa))}var jt=gr(0);function Vo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kc=[];function $c(){for(var n=0;n<Kc.length;n++)Kc[n]._workInProgressVersionPrimary=null;Kc.length=0}var Ho=A.ReactCurrentDispatcher,Zc=A.ReactCurrentBatchConfig,qr=0,Kt=null,cn=null,pn=null,Go=!1,Na=!1,Da=0,Av=0;function Tn(){throw Error(t(321))}function Jc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!gi(n[a],i[a]))return!1;return!0}function Qc(n,i,a,c,d,m){if(qr=m,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ho.current=n===null||n.memoizedState===null?Lv:Nv,n=a(c,d),Na){m=0;do{if(Na=!1,Da=0,25<=m)throw Error(t(301));m+=1,pn=cn=null,i.updateQueue=null,Ho.current=Dv,n=a(c,d)}while(Na)}if(Ho.current=Yo,i=cn!==null&&cn.next!==null,qr=0,pn=cn=Kt=null,Go=!1,i)throw Error(t(300));return n}function eu(){var n=Da!==0;return Da=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Kt.memoizedState=pn=n:pn=pn.next=n,pn}function ri(){if(cn===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var i=pn===null?Kt.memoizedState:pn.next;if(i!==null)pn=i,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},pn===null?Kt.memoizedState=pn=n:pn=pn.next=n}return pn}function Ia(n,i){return typeof i=="function"?i(n):i}function tu(n){var i=ri(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=cn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var U=w=null,z=null,ue=m;do{var Se=ue.lane;if((qr&Se)===Se)z!==null&&(z=z.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var ye={lane:Se,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};z===null?(U=z=ye,w=c):z=z.next=ye,Kt.lanes|=Se,jr|=Se}ue=ue.next}while(ue!==null&&ue!==m);z===null?w=c:z.next=U,gi(c,i.memoizedState)||(Bn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Kt.lanes|=m,jr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function nu(n){var i=ri(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);gi(m,i.memoizedState)||(Bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Ih(){}function Uh(n,i){var a=Kt,c=ri(),d=i(),m=!gi(c.memoizedState,d);if(m&&(c.memoizedState=d,Bn=!0),c=c.queue,iu(kh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,Ua(9,Oh.bind(null,a,c,d,i),void 0,null),mn===null)throw Error(t(349));(qr&30)!==0||Fh(a,i,d)}return d}function Fh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Oh(n,i,a,c){i.value=a,i.getSnapshot=c,Bh(i)&&zh(n)}function kh(n,i,a){return a(function(){Bh(i)&&zh(n)})}function Bh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!gi(n,a)}catch{return!0}}function zh(n){var i=ji(n,1);i!==null&&yi(i,n,1,-1)}function Vh(n){var i=Li();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:n},i.queue=n,n=n.dispatch=Pv.bind(null,Kt,n),[i.memoizedState,n]}function Ua(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Hh(){return ri().memoizedState}function Wo(n,i,a,c){var d=Li();Kt.flags|=n,d.memoizedState=Ua(1|i,a,void 0,c===void 0?null:c)}function Xo(n,i,a,c){var d=ri();c=c===void 0?null:c;var m=void 0;if(cn!==null){var w=cn.memoizedState;if(m=w.destroy,c!==null&&Jc(c,w.deps)){d.memoizedState=Ua(i,a,m,c);return}}Kt.flags|=n,d.memoizedState=Ua(1|i,a,m,c)}function Gh(n,i){return Wo(8390656,8,n,i)}function iu(n,i){return Xo(2048,8,n,i)}function Wh(n,i){return Xo(4,2,n,i)}function Xh(n,i){return Xo(4,4,n,i)}function Yh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function qh(n,i,a){return a=a!=null?a.concat([n]):null,Xo(4,4,Yh.bind(null,i,n),a)}function ru(){}function jh(n,i){var a=ri();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Kh(n,i){var a=ri();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function $h(n,i,a){return(qr&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=a):(gi(a,i)||(a=ln(),Kt.lanes|=a,jr|=a,n.baseState=!0),i)}function Rv(n,i){var a=pt;pt=a!==0&&4>a?a:4,n(!0);var c=Zc.transition;Zc.transition={};try{n(!1),i()}finally{pt=a,Zc.transition=c}}function Zh(){return ri().memoizedState}function Cv(n,i,a){var c=wr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Jh(n))Qh(i,a);else if(a=Ch(n,i,a,c),a!==null){var d=In();yi(a,n,c,d),ep(a,i,c)}}function Pv(n,i,a){var c=wr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jh(n))Qh(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,U=m(w,a);if(d.hasEagerState=!0,d.eagerState=U,gi(U,w)){var z=i.interleaved;z===null?(d.next=d,Xc(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=Ch(n,i,d,c),a!==null&&(d=In(),yi(a,n,c,d),ep(a,i,c))}}function Jh(n){var i=n.alternate;return n===Kt||i!==null&&i===Kt}function Qh(n,i){Na=Go=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ep(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,En(n,a)}}var Yo={readContext:ii,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},Lv={readContext:ii,useCallback:function(n,i){return Li().memoizedState=[n,i===void 0?null:i],n},useContext:ii,useEffect:Gh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Wo(4194308,4,Yh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Wo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Wo(4,2,n,i)},useMemo:function(n,i){var a=Li();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Li();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Cv.bind(null,Kt,n),[c.memoizedState,n]},useRef:function(n){var i=Li();return n={current:n},i.memoizedState=n},useState:Vh,useDebugValue:ru,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=Vh(!1),i=n[0];return n=Rv.bind(null,n[1]),Li().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Kt,d=Li();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),mn===null)throw Error(t(349));(qr&30)!==0||Fh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Gh(kh.bind(null,c,m,n),[n]),c.flags|=2048,Ua(9,Oh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Li(),i=mn.identifierPrefix;if(Yt){var a=qi,c=Yi;a=(c&~(1<<32-Ne(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Av++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Nv={readContext:ii,useCallback:jh,useContext:ii,useEffect:iu,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:Kh,useReducer:tu,useRef:Hh,useState:function(){return tu(Ia)},useDebugValue:ru,useDeferredValue:function(n){var i=ri();return $h(i,cn.memoizedState,n)},useTransition:function(){var n=tu(Ia)[0],i=ri().memoizedState;return[n,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1},Dv={readContext:ii,useCallback:jh,useContext:ii,useEffect:iu,useImperativeHandle:qh,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:Kh,useReducer:nu,useRef:Hh,useState:function(){return nu(Ia)},useDebugValue:ru,useDeferredValue:function(n){var i=ri();return cn===null?i.memoizedState=n:$h(i,cn.memoizedState,n)},useTransition:function(){var n=nu(Ia)[0],i=ri().memoizedState;return[n,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1};function _i(n,i){if(n&&n.defaultProps){i=j({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function su(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:j({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var qo={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=In(),d=wr(n),m=Ki(c,d);m.payload=i,a!=null&&(m.callback=a),i=Sr(n,m,d),i!==null&&(yi(i,n,d,c),Bo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=In(),d=wr(n),m=Ki(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Sr(n,m,d),i!==null&&(yi(i,n,d,c),Bo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=In(),c=wr(n),d=Ki(a,c);d.tag=2,i!=null&&(d.callback=i),i=Sr(n,d,c),i!==null&&(yi(i,n,c,a),Bo(i,n,c))}};function tp(n,i,a,c,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!ya(a,c)||!ya(d,m):!0}function np(n,i,a){var c=!1,d=vr,m=i.contextType;return typeof m=="object"&&m!==null?m=ii(m):(d=kn(i)?Hr:wn.current,c=i.contextTypes,m=(c=c!=null)?Es(n,d):vr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function ip(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&qo.enqueueReplaceState(i,i.state,null)}function au(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Yc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ii(m):(m=kn(i)?Hr:wn.current,d.context=Es(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(su(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&qo.enqueueReplaceState(d,d.state,null),zo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",c=i;do a+=ke(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function ou(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function lu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Iv=typeof WeakMap=="function"?WeakMap:Map;function rp(n,i,a){a=Ki(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){el||(el=!0,Eu=c),lu(n,i)},a}function sp(n,i,a){a=Ki(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){lu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){lu(n,i),typeof c!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function ap(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Iv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=jv.bind(null,n,i,a),i.then(n,n))}function op(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function lp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ki(-1,1),i.tag=2,Sr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Uv=A.ReactCurrentOwner,Bn=!1;function Dn(n,i,a,c){i.child=n===null?Rh(i,null,a,c):As(i,n.child,a,c)}function cp(n,i,a,c,d){a=a.render;var m=i.ref;return Cs(i,d),c=Qc(n,i,a,c,m,d),a=eu(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,$i(n,i,d)):(Yt&&a&&Fc(i),i.flags|=1,Dn(n,i,c,d),i.child)}function up(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Pu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,dp(n,i,m,c,d)):(n=al(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(w,c)&&n.ref===i.ref)return $i(n,i,d)}return i.flags|=1,n=br(m,c),n.ref=i.ref,n.return=i,i.child=n}function dp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(ya(m,c)&&n.ref===i.ref)if(Bn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Bn=!0);else return i.lanes=n.lanes,$i(n,i,d)}return cu(n,i,a,c,d)}function fp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Ds,jn),jn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,zt(Ds,jn),jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,zt(Ds,jn),jn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,zt(Ds,jn),jn|=c;return Dn(n,i,d,a),i.child}function hp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function cu(n,i,a,c,d){var m=kn(a)?Hr:wn.current;return m=Es(i,m),Cs(i,d),a=Qc(n,i,a,c,m,d),c=eu(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,$i(n,i,d)):(Yt&&c&&Fc(i),i.flags|=1,Dn(n,i,a,d),i.child)}function pp(n,i,a,c,d){if(kn(a)){var m=!0;Lo(i)}else m=!1;if(Cs(i,d),i.stateNode===null)Ko(n,i),np(i,a,c),au(i,a,c,d),c=!0;else if(n===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var z=w.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ii(ue):(ue=kn(a)?Hr:wn.current,ue=Es(i,ue));var Se=a.getDerivedStateFromProps,ye=typeof Se=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==c||z!==ue)&&ip(i,w,c,ue),xr=!1;var xe=i.memoizedState;w.state=xe,zo(i,c,w,d),z=i.memoizedState,U!==c||xe!==z||On.current||xr?(typeof Se=="function"&&(su(i,a,Se,c),z=i.memoizedState),(U=xr||tp(i,a,U,c,xe,z,ue))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),w.props=c,w.state=z,w.context=ue,c=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Ph(n,i),U=i.memoizedProps,ue=i.type===i.elementType?U:_i(i.type,U),w.props=ue,ye=i.pendingProps,xe=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=ii(z):(z=kn(a)?Hr:wn.current,z=Es(i,z));var ze=a.getDerivedStateFromProps;(Se=typeof ze=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==ye||xe!==z)&&ip(i,w,c,z),xr=!1,xe=i.memoizedState,w.state=xe,zo(i,c,w,d);var Xe=i.memoizedState;U!==ye||xe!==Xe||On.current||xr?(typeof ze=="function"&&(su(i,a,ze,c),Xe=i.memoizedState),(ue=xr||tp(i,a,ue,c,xe,Xe,z)||!1)?(Se||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Xe,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Xe,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),w.props=c,w.state=Xe,w.context=z,c=ue):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return uu(n,i,a,c,m,d)}function uu(n,i,a,c,d,m){hp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&xh(i,a,!1),$i(n,i,m);c=i.stateNode,Uv.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=As(i,n.child,null,m),i.child=As(i,null,U,m)):Dn(n,i,U,m),i.memoizedState=c.state,d&&xh(i,a,!0),i.child}function mp(n){var i=n.stateNode;i.pendingContext?vh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(n,i.context,!1),qc(n,i.containerInfo)}function gp(n,i,a,c,d){return bs(),zc(d),i.flags|=256,Dn(n,i,a,c),i.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function vp(n,i,a){var c=i.pendingProps,d=jt.current,m=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),zt(jt,d&1),n===null)return Bc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=ol(w,c,0,null),n=Jr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=fu(a),i.memoizedState=du,n):hu(i,w));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return Fv(n,i,w,c,U,d,a);if(m){m=c.fallback,w=i.mode,d=n.child,U=d.sibling;var z={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=br(d,z),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=br(U,m):(m=Jr(m,w,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?fu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=du,c}return m=n.child,n=m.sibling,c=br(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function hu(n,i){return i=ol({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function jo(n,i,a,c){return c!==null&&zc(c),As(i,n.child,null,a),n=hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Fv(n,i,a,c,d,m,w){if(a)return i.flags&256?(i.flags&=-257,c=ou(Error(t(422))),jo(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=ol({mode:"visible",children:c.children},d,0,null),m=Jr(m,d,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&As(i,n.child,null,w),i.child.memoizedState=fu(w),i.memoizedState=du,m);if((i.mode&1)===0)return jo(n,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,m=Error(t(419)),c=ou(m,c,void 0),jo(n,i,w,c)}if(U=(w&n.childLanes)!==0,Bn||U){if(c=mn,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,ji(n,d),yi(c,n,d,-1))}return Cu(),c=ou(Error(t(421))),jo(n,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Kv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,qn=mr(d.nextSibling),Yn=i,Yt=!0,vi=null,n!==null&&(ti[ni++]=Yi,ti[ni++]=qi,ti[ni++]=Gr,Yi=n.id,qi=n.overflow,Gr=i),i=hu(i,c.children),i.flags|=4096,i)}function _p(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Wc(n.return,i,a)}function pu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function xp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Dn(n,i,c.children,a),c=jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_p(n,a,i);else if(n.tag===19)_p(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(zt(jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Vo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),pu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Vo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}pu(i,!0,a,null,m);break;case"together":pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ko(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function $i(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),jr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=br(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=br(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ov(n,i,a){switch(i.tag){case 3:mp(i),bs();break;case 5:Dh(i);break;case 1:kn(i.type)&&Lo(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;zt(Oo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(zt(jt,jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?vp(n,i,a):(zt(jt,jt.current&1),n=$i(n,i,a),n!==null?n.sibling:null);zt(jt,jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return xp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),zt(jt,jt.current),c)break;return null;case 22:case 23:return i.lanes=0,fp(n,i,a)}return $i(n,i,a)}var Sp,mu,yp,Mp;Sp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},mu=function(){},yp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Yr(Pi.current);var m=null;switch(a){case"input":d=ft(n,d),c=ft(n,c),m=[];break;case"select":d=j({},d,{value:void 0}),c=j({},c,{value:void 0}),m=[];break;case"textarea":d=Wt(n,d),c=Wt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ro)}Ze(a,c);var w;a=null;for(ue in d)if(!c.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var U=d[ue];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in c){var z=c[ue];if(U=d?.[ue],c.hasOwnProperty(ue)&&z!==U&&(z!=null||U!=null))if(ue==="style")if(U){for(w in U)!U.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&U[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(m||(m=[]),m.push(ue,a)),a=z;else ue==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(m=m||[]).push(ue,z)):ue==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(ue,""+z):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(z!=null&&ue==="onScroll"&&Vt("scroll",n),m||U===z||(m=[])):(m=m||[]).push(ue,z))}a&&(m=m||[]).push("style",a);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},Mp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Fa(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function kv(n,i,a){var c=i.pendingProps;switch(Oc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return kn(i.type)&&Po(),bn(i),null;case 3:return c=i.stateNode,Ps(),Ht(On),Ht(wn),$c(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Uo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vi!==null&&(bu(vi),vi=null))),mu(n,i),bn(i),null;case 5:jc(i);var d=Yr(La.current);if(a=i.type,n!==null&&i.stateNode!=null)yp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return bn(i),null}if(n=Yr(Pi.current),Uo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ci]=i,c[ba]=m,n=(i.mode&1)!==0,a){case"dialog":Vt("cancel",c),Vt("close",c);break;case"iframe":case"object":case"embed":Vt("load",c);break;case"video":case"audio":for(d=0;d<Ea.length;d++)Vt(Ea[d],c);break;case"source":Vt("error",c);break;case"img":case"image":case"link":Vt("error",c),Vt("load",c);break;case"details":Vt("toggle",c);break;case"input":xt(c,m),Vt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Vt("invalid",c);break;case"textarea":G(c,m),Vt("invalid",c)}Ze(a,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var U=m[w];w==="children"?typeof U=="string"?c.textContent!==U&&(m.suppressHydrationWarning!==!0&&Ao(c.textContent,U,n),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Ao(c.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&Vt("scroll",c)}switch(a){case"input":Ie(c),kt(c,m,!0);break;case"textarea":Ie(c),At(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ro)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Ci]=i,n[ba]=c,Sp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Pe(a,c),a){case"dialog":Vt("cancel",n),Vt("close",n),d=c;break;case"iframe":case"object":case"embed":Vt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ea.length;d++)Vt(Ea[d],n);d=c;break;case"source":Vt("error",n),d=c;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),d=c;break;case"details":Vt("toggle",n),d=c;break;case"input":xt(n,c),d=ft(n,c),Vt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=j({},c,{value:void 0}),Vt("invalid",n);break;case"textarea":G(n,c),d=Wt(n,c),Vt("invalid",n);break;default:d=c}Ze(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var z=U[m];m==="style"?ge(n,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&le(n,z)):m==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&he(n,z):typeof z=="number"&&he(n,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?z!=null&&m==="onScroll"&&Vt("scroll",n):z!=null&&O(n,m,z,w))}switch(a){case"input":Ie(n),kt(n,c,!1);break;case"textarea":Ie(n),At(n);break;case"option":c.value!=null&&n.setAttribute("value",""+de(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?Dt(n,!!c.multiple,m,!1):c.defaultValue!=null&&Dt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ro)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bn(i),null;case 6:if(n&&i.stateNode!=null)Mp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Yr(La.current),Yr(Pi.current),Uo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ci]=i,(m=c.nodeValue!==a)&&(n=Yn,n!==null))switch(n.tag){case 3:Ao(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ao(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ci]=i,i.stateNode=c}return bn(i),null;case 13:if(Ht(jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Th(),bs(),i.flags|=98560,m=!1;else if(m=Uo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ci]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),m=!1}else vi!==null&&(bu(vi),vi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(jt.current&1)!==0?un===0&&(un=3):Cu())),i.updateQueue!==null&&(i.flags|=4),bn(i),null);case 4:return Ps(),mu(n,i),n===null&&wa(i.stateNode.containerInfo),bn(i),null;case 10:return Gc(i.type._context),bn(i),null;case 17:return kn(i.type)&&Po(),bn(i),null;case 19:if(Ht(jt),m=i.memoizedState,m===null)return bn(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)Fa(m,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Vo(n),w!==null){for(i.flags|=128,Fa(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return zt(jt,jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&qt()>Is&&(i.flags|=128,c=!0,Fa(m,!1),i.lanes=4194304)}else{if(!c)if(n=Vo(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Fa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Yt)return bn(i),null}else 2*qt()-m.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,c=!0,Fa(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qt(),i.sibling=null,a=jt.current,zt(jt,c?a&1|2:a&1),i):(bn(i),null);case 22:case 23:return Ru(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(jn&1073741824)!==0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Bv(n,i){switch(Oc(i),i.tag){case 1:return kn(i.type)&&Po(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),Ht(On),Ht(wn),$c(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return jc(i),null;case 13:if(Ht(jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ht(jt),null;case 4:return Ps(),null;case 10:return Gc(i.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var $o=!1,An=!1,zv=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Ns(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Jt(n,i,c)}else a.current=null}function gu(n,i,a){try{a()}catch(c){Jt(n,i,c)}}var Ep=!1;function Vv(n,i){if(Rc=go,n=th(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,U=-1,z=-1,ue=0,Se=0,ye=n,xe=null;t:for(;;){for(var ze;ye!==a||d!==0&&ye.nodeType!==3||(U=w+d),ye!==m||c!==0&&ye.nodeType!==3||(z=w+c),ye.nodeType===3&&(w+=ye.nodeValue.length),(ze=ye.firstChild)!==null;)xe=ye,ye=ze;for(;;){if(ye===n)break t;if(xe===a&&++ue===d&&(U=w),xe===m&&++Se===c&&(z=w),(ze=ye.nextSibling)!==null)break;ye=xe,xe=ye.parentNode}ye=ze}a=U===-1||z===-1?null:{start:U,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:n,selectionRange:a},go=!1,Ge=i;Ge!==null;)if(i=Ge,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ge=n;else for(;Ge!==null;){i=Ge;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var $e=Xe.memoizedProps,tn=Xe.memoizedState,ie=i.stateNode,W=ie.getSnapshotBeforeUpdate(i.elementType===i.type?$e:_i(i.type,$e),tn);ie.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Jt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Ge=n;break}Ge=i.return}return Xe=Ep,Ep=!1,Xe}function Oa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&gu(i,a,m)}d=d.next}while(d!==c)}}function Zo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function vu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function wp(n){var i=n.alternate;i!==null&&(n.alternate=null,wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ci],delete i[ba],delete i[Dc],delete i[Ev],delete i[wv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Tp(n){return n.tag===5||n.tag===3||n.tag===4}function bp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Tp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ro));else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}function xu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(xu(n,i,a),n=n.sibling;n!==null;)xu(n,i,a),n=n.sibling}var xn=null,xi=!1;function yr(n,i,a){for(a=a.child;a!==null;)Ap(n,i,a),a=a.sibling}function Ap(n,i,a){if(J&&typeof J.onCommitFiberUnmount=="function")try{J.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:An||Ns(a,i);case 6:var c=xn,d=xi;xn=null,yr(n,i,a),xn=c,xi=d,xn!==null&&(xi?(n=xn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):xn.removeChild(a.stateNode));break;case 18:xn!==null&&(xi?(n=xn,a=a.stateNode,n.nodeType===8?Nc(n.parentNode,a):n.nodeType===1&&Nc(n,a),ma(n)):Nc(xn,a.stateNode));break;case 4:c=xn,d=xi,xn=a.stateNode.containerInfo,xi=!0,yr(n,i,a),xn=c,xi=d;break;case 0:case 11:case 14:case 15:if(!An&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&gu(a,i,w),d=d.next}while(d!==c)}yr(n,i,a);break;case 1:if(!An&&(Ns(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Jt(a,i,U)}yr(n,i,a);break;case 21:yr(n,i,a);break;case 22:a.mode&1?(An=(c=An)||a.memoizedState!==null,yr(n,i,a),An=c):yr(n,i,a);break;default:yr(n,i,a)}}function Rp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new zv),i.forEach(function(c){var d=$v.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Si(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:xn=U.stateNode,xi=!1;break e;case 3:xn=U.stateNode.containerInfo,xi=!0;break e;case 4:xn=U.stateNode.containerInfo,xi=!0;break e}U=U.return}if(xn===null)throw Error(t(160));Ap(m,w,d),xn=null,xi=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ue){Jt(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Cp(i,n),i=i.sibling}function Cp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(i,n),Ni(n),c&4){try{Oa(3,n,n.return),Zo(3,n)}catch($e){Jt(n,n.return,$e)}try{Oa(5,n,n.return)}catch($e){Jt(n,n.return,$e)}}break;case 1:Si(i,n),Ni(n),c&512&&a!==null&&Ns(a,a.return);break;case 5:if(Si(i,n),Ni(n),c&512&&a!==null&&Ns(a,a.return),n.flags&32){var d=n.stateNode;try{he(d,"")}catch($e){Jt(n,n.return,$e)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,U=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&Ut(d,m),Pe(U,w);var ue=Pe(U,m);for(w=0;w<z.length;w+=2){var Se=z[w],ye=z[w+1];Se==="style"?ge(d,ye):Se==="dangerouslySetInnerHTML"?le(d,ye):Se==="children"?he(d,ye):O(d,Se,ye,ue)}switch(U){case"input":ht(d,m);break;case"textarea":on(d,m);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ze=m.value;ze!=null?Dt(d,!!m.multiple,ze,!1):xe!==!!m.multiple&&(m.defaultValue!=null?Dt(d,!!m.multiple,m.defaultValue,!0):Dt(d,!!m.multiple,m.multiple?[]:"",!1))}d[ba]=m}catch($e){Jt(n,n.return,$e)}}break;case 6:if(Si(i,n),Ni(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch($e){Jt(n,n.return,$e)}}break;case 3:if(Si(i,n),Ni(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ma(i.containerInfo)}catch($e){Jt(n,n.return,$e)}break;case 4:Si(i,n),Ni(n);break;case 13:Si(i,n),Ni(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Mu=qt())),c&4&&Rp(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(An=(ue=An)||Se,Si(i,n),An=ue):Si(i,n),Ni(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!Se&&(n.mode&1)!==0)for(Ge=n,Se=n.child;Se!==null;){for(ye=Ge=Se;Ge!==null;){switch(xe=Ge,ze=xe.child,xe.tag){case 0:case 11:case 14:case 15:Oa(4,xe,xe.return);break;case 1:Ns(xe,xe.return);var Xe=xe.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch($e){Jt(c,a,$e)}}break;case 5:Ns(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Np(ye);continue}}ze!==null?(ze.return=xe,Ge=ze):Np(ye)}Se=Se.sibling}e:for(Se=null,ye=n;;){if(ye.tag===5){if(Se===null){Se=ye;try{d=ye.stateNode,ue?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=ye.stateNode,z=ye.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=pe("display",w))}catch($e){Jt(n,n.return,$e)}}}else if(ye.tag===6){if(Se===null)try{ye.stateNode.nodeValue=ue?"":ye.memoizedProps}catch($e){Jt(n,n.return,$e)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;Se===ye&&(Se=null),ye=ye.return}Se===ye&&(Se=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Si(i,n),Ni(n),c&4&&Rp(n);break;case 21:break;default:Si(i,n),Ni(n)}}function Ni(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Tp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(he(d,""),c.flags&=-33);var m=bp(n);xu(n,m,d);break;case 3:case 4:var w=c.stateNode.containerInfo,U=bp(n);_u(n,U,w);break;default:throw Error(t(161))}}catch(z){Jt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Hv(n,i,a){Ge=n,Pp(n)}function Pp(n,i,a){for(var c=(n.mode&1)!==0;Ge!==null;){var d=Ge,m=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||$o;if(!w){var U=d.alternate,z=U!==null&&U.memoizedState!==null||An;U=$o;var ue=An;if($o=w,(An=z)&&!ue)for(Ge=d;Ge!==null;)w=Ge,z=w.child,w.tag===22&&w.memoizedState!==null?Dp(d):z!==null?(z.return=w,Ge=z):Dp(d);for(;m!==null;)Ge=m,Pp(m),m=m.sibling;Ge=d,$o=U,An=ue}Lp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ge=m):Lp(n)}}function Lp(n){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:An||Zo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!An)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:_i(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Nh(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Nh(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Se=ue.memoizedState;if(Se!==null){var ye=Se.dehydrated;ye!==null&&ma(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||i.flags&512&&vu(i)}catch(xe){Jt(i,i.return,xe)}}if(i===n){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function Np(n){for(;Ge!==null;){var i=Ge;if(i===n){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function Dp(n){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Zo(4,i)}catch(z){Jt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){Jt(i,d,z)}}var m=i.return;try{vu(i)}catch(z){Jt(i,m,z)}break;case 5:var w=i.return;try{vu(i)}catch(z){Jt(i,w,z)}}}catch(z){Jt(i,i.return,z)}if(i===n){Ge=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ge=U;break}Ge=i.return}}var Gv=Math.ceil,Jo=A.ReactCurrentDispatcher,Su=A.ReactCurrentOwner,si=A.ReactCurrentBatchConfig,bt=0,mn=null,sn=null,Sn=0,jn=0,Ds=gr(0),un=0,ka=null,jr=0,Qo=0,yu=0,Ba=null,zn=null,Mu=0,Is=1/0,Zi=null,el=!1,Eu=null,Mr=null,tl=!1,Er=null,nl=0,za=0,wu=null,il=-1,rl=0;function In(){return(bt&6)!==0?qt():il!==-1?il:il=qt()}function wr(n){return(n.mode&1)===0?1:(bt&2)!==0&&Sn!==0?Sn&-Sn:bv.transition!==null?(rl===0&&(rl=ln()),rl):(n=pt,n!==0||(n=window.event,n=n===void 0?16:Uf(n.type)),n)}function yi(n,i,a,c){if(50<za)throw za=0,wu=null,Error(t(185));en(n,a,c),((bt&2)===0||n!==mn)&&(n===mn&&((bt&2)===0&&(Qo|=a),un===4&&Tr(n,Sn)),Vn(n,c),a===1&&bt===0&&(i.mode&1)===0&&(Is=qt()+500,No&&_r()))}function Vn(n,i){var a=n.callbackNode;Bt(n,i);var c=St(n,n===mn?Sn:0);if(c===0)a!==null&&la(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&la(a),i===1)n.tag===0?Tv(Up.bind(null,n)):Sh(Up.bind(null,n)),yv(function(){(bt&6)===0&&_r()}),a=null;else{switch(fi(c)){case 1:a=ca;break;case 4:a=ua;break;case 16:a=T;break;case 536870912:a=ce;break;default:a=T}a=Gp(a,Ip.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Ip(n,i){if(il=-1,rl=0,(bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Us()&&n.callbackNode!==a)return null;var c=St(n,n===mn?Sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=sl(n,c);else{i=c;var d=bt;bt|=2;var m=Op();(mn!==n||Sn!==i)&&(Zi=null,Is=qt()+500,$r(n,i));do try{Yv();break}catch(U){Fp(n,U)}while(!0);Hc(),Jo.current=m,bt=d,sn!==null?i=0:(mn=null,Sn=0,i=un)}if(i!==0){if(i===2&&(d=Nt(n),d!==0&&(c=d,i=Tu(n,d))),i===1)throw a=ka,$r(n,0),Tr(n,c),Vn(n,qt()),a;if(i===6)Tr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Wv(d)&&(i=sl(n,c),i===2&&(m=Nt(n),m!==0&&(c=m,i=Tu(n,m))),i===1))throw a=ka,$r(n,0),Tr(n,c),Vn(n,qt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Zr(n,zn,Zi);break;case 3:if(Tr(n,c),(c&130023424)===c&&(i=Mu+500-qt(),10<i)){if(St(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){In(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Lc(Zr.bind(null,n,zn,Zi),i);break}Zr(n,zn,Zi);break;case 4:if(Tr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var w=31-Ne(c);m=1<<w,w=i[w],w>d&&(d=w),c&=~m}if(c=d,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Gv(c/1960))-c,10<c){n.timeoutHandle=Lc(Zr.bind(null,n,zn,Zi),c);break}Zr(n,zn,Zi);break;case 5:Zr(n,zn,Zi);break;default:throw Error(t(329))}}}return Vn(n,qt()),n.callbackNode===a?Ip.bind(null,n):null}function Tu(n,i){var a=Ba;return n.current.memoizedState.isDehydrated&&($r(n,i).flags|=256),n=sl(n,i),n!==2&&(i=zn,zn=a,i!==null&&bu(i)),n}function bu(n){zn===null?zn=n:zn.push.apply(zn,n)}function Wv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!gi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(n,i){for(i&=~yu,i&=~Qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ne(i),c=1<<a;n[a]=-1,i&=~c}}function Up(n){if((bt&6)!==0)throw Error(t(327));Us();var i=St(n,0);if((i&1)===0)return Vn(n,qt()),null;var a=sl(n,i);if(n.tag!==0&&a===2){var c=Nt(n);c!==0&&(i=c,a=Tu(n,c))}if(a===1)throw a=ka,$r(n,0),Tr(n,i),Vn(n,qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zr(n,zn,Zi),Vn(n,qt()),null}function Au(n,i){var a=bt;bt|=1;try{return n(i)}finally{bt=a,bt===0&&(Is=qt()+500,No&&_r())}}function Kr(n){Er!==null&&Er.tag===0&&(bt&6)===0&&Us();var i=bt;bt|=1;var a=si.transition,c=pt;try{if(si.transition=null,pt=1,n)return n()}finally{pt=c,si.transition=a,bt=i,(bt&6)===0&&_r()}}function Ru(){jn=Ds.current,Ht(Ds)}function $r(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Sv(a)),sn!==null)for(a=sn.return;a!==null;){var c=a;switch(Oc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Po();break;case 3:Ps(),Ht(On),Ht(wn),$c();break;case 5:jc(c);break;case 4:Ps();break;case 13:Ht(jt);break;case 19:Ht(jt);break;case 10:Gc(c.type._context);break;case 22:case 23:Ru()}a=a.return}if(mn=n,sn=n=br(n.current,null),Sn=jn=i,un=0,ka=null,yu=Qo=jr=0,zn=Ba=null,Xr!==null){for(i=0;i<Xr.length;i++)if(a=Xr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var w=m.next;m.next=d,c.next=w}a.pending=c}Xr=null}return n}function Fp(n,i){do{var a=sn;try{if(Hc(),Ho.current=Yo,Go){for(var c=Kt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Go=!1}if(qr=0,pn=cn=Kt=null,Na=!1,Da=0,Su.current=null,a===null||a.return===null){un=1,ka=i,sn=null;break}e:{var m=n,w=a.return,U=a,z=i;if(i=Sn,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=z,Se=U,ye=Se.tag;if((Se.mode&1)===0&&(ye===0||ye===11||ye===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var ze=op(w);if(ze!==null){ze.flags&=-257,lp(ze,w,U,m,i),ze.mode&1&&ap(m,ue,i),i=ze,z=ue;var Xe=i.updateQueue;if(Xe===null){var $e=new Set;$e.add(z),i.updateQueue=$e}else Xe.add(z);break e}else{if((i&1)===0){ap(m,ue,i),Cu();break e}z=Error(t(426))}}else if(Yt&&U.mode&1){var tn=op(w);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),lp(tn,w,U,m,i),zc(Ls(z,U));break e}}m=z=Ls(z,U),un!==4&&(un=2),Ba===null?Ba=[m]:Ba.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ie=rp(m,z,i);Lh(m,ie);break e;case 1:U=z;var W=m.type,ae=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Mr===null||!Mr.has(ae)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=sp(m,U,i);Lh(m,we);break e}}m=m.return}while(m!==null)}Bp(a)}catch(tt){i=tt,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function Op(){var n=Jo.current;return Jo.current=Yo,n===null?Yo:n}function Cu(){(un===0||un===3||un===2)&&(un=4),mn===null||(jr&268435455)===0&&(Qo&268435455)===0||Tr(mn,Sn)}function sl(n,i){var a=bt;bt|=2;var c=Op();(mn!==n||Sn!==i)&&(Zi=null,$r(n,i));do try{Xv();break}catch(d){Fp(n,d)}while(!0);if(Hc(),bt=a,Jo.current=c,sn!==null)throw Error(t(261));return mn=null,Sn=0,un}function Xv(){for(;sn!==null;)kp(sn)}function Yv(){for(;sn!==null&&!po();)kp(sn)}function kp(n){var i=Hp(n.alternate,n,jn);n.memoizedProps=n.pendingProps,i===null?Bp(n):sn=i,Su.current=null}function Bp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=kv(a,i,jn),a!==null){sn=a;return}}else{if(a=Bv(a,i),a!==null){a.flags&=32767,sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=n}while(i!==null);un===0&&(un=5)}function Zr(n,i,a){var c=pt,d=si.transition;try{si.transition=null,pt=1,qv(n,i,a,c)}finally{si.transition=d,pt=c}return null}function qv(n,i,a,c){do Us();while(Er!==null);if((bt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(yt(n,m),n===mn&&(sn=mn=null,Sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tl||(tl=!0,Gp(T,function(){return Us(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=si.transition,si.transition=null;var w=pt;pt=1;var U=bt;bt|=4,Su.current=null,Vv(n,a),Cp(a,n),hv(Cc),go=!!Rc,Cc=Rc=null,n.current=a,Hv(a),oc(),bt=U,pt=w,si.transition=m}else n.current=a;if(tl&&(tl=!1,Er=n,nl=d),m=n.pendingLanes,m===0&&(Mr=null),Ue(a.stateNode),Vn(n,qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(el)throw el=!1,n=Eu,Eu=null,n;return(nl&1)!==0&&n.tag!==0&&Us(),m=n.pendingLanes,(m&1)!==0?n===wu?za++:(za=0,wu=n):za=0,_r(),null}function Us(){if(Er!==null){var n=fi(nl),i=si.transition,a=pt;try{if(si.transition=null,pt=16>n?16:n,Er===null)var c=!1;else{if(n=Er,Er=null,nl=0,(bt&6)!==0)throw Error(t(331));var d=bt;for(bt|=4,Ge=n.current;Ge!==null;){var m=Ge,w=m.child;if((Ge.flags&16)!==0){var U=m.deletions;if(U!==null){for(var z=0;z<U.length;z++){var ue=U[z];for(Ge=ue;Ge!==null;){var Se=Ge;switch(Se.tag){case 0:case 11:case 15:Oa(8,Se,m)}var ye=Se.child;if(ye!==null)ye.return=Se,Ge=ye;else for(;Ge!==null;){Se=Ge;var xe=Se.sibling,ze=Se.return;if(wp(Se),Se===ue){Ge=null;break}if(xe!==null){xe.return=ze,Ge=xe;break}Ge=ze}}}var Xe=m.alternate;if(Xe!==null){var $e=Xe.child;if($e!==null){Xe.child=null;do{var tn=$e.sibling;$e.sibling=null,$e=tn}while($e!==null)}}Ge=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Ge=w;else e:for(;Ge!==null;){if(m=Ge,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oa(9,m,m.return)}var ie=m.sibling;if(ie!==null){ie.return=m.return,Ge=ie;break e}Ge=m.return}}var W=n.current;for(Ge=W;Ge!==null;){w=Ge;var ae=w.child;if((w.subtreeFlags&2064)!==0&&ae!==null)ae.return=w,Ge=ae;else e:for(w=W;Ge!==null;){if(U=Ge,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Zo(9,U)}}catch(tt){Jt(U,U.return,tt)}if(U===w){Ge=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Ge=we;break e}Ge=U.return}}if(bt=d,_r(),J&&typeof J.onPostCommitFiberRoot=="function")try{J.onPostCommitFiberRoot(ne,n)}catch{}c=!0}return c}finally{pt=a,si.transition=i}}return!1}function zp(n,i,a){i=Ls(a,i),i=rp(n,i,1),n=Sr(n,i,1),i=In(),n!==null&&(en(n,1,i),Vn(n,i))}function Jt(n,i,a){if(n.tag===3)zp(n,n,a);else for(;i!==null;){if(i.tag===3){zp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Mr===null||!Mr.has(c))){n=Ls(a,n),n=sp(i,n,1),i=Sr(i,n,1),n=In(),i!==null&&(en(i,1,n),Vn(i,n));break}}i=i.return}}function jv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=In(),n.pingedLanes|=n.suspendedLanes&a,mn===n&&(Sn&a)===a&&(un===4||un===3&&(Sn&130023424)===Sn&&500>qt()-Mu?$r(n,0):yu|=a),Vn(n,i)}function Vp(n,i){i===0&&((n.mode&1)===0?i=1:(i=dt,dt<<=1,(dt&130023424)===0&&(dt=4194304)));var a=In();n=ji(n,i),n!==null&&(en(n,i,a),Vn(n,a))}function Kv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Vp(n,a)}function $v(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Vp(n,a)}var Hp;Hp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||On.current)Bn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Bn=!1,Ov(n,i,a);Bn=(n.flags&131072)!==0}else Bn=!1,Yt&&(i.flags&1048576)!==0&&yh(i,Io,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ko(n,i),n=i.pendingProps;var d=Es(i,wn.current);Cs(i,a),d=Qc(null,i,c,n,d,a);var m=eu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(m=!0,Lo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(i),d.updater=qo,i.stateNode=d,d._reactInternals=i,au(i,c,n,a),i=uu(null,i,c,!0,m,a)):(i.tag=0,Yt&&m&&Fc(i),Dn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ko(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Jv(c),n=_i(c,n),d){case 0:i=cu(null,i,c,n,a);break e;case 1:i=pp(null,i,c,n,a);break e;case 11:i=cp(null,i,c,n,a);break e;case 14:i=up(null,i,c,_i(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),cu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),pp(n,i,c,d,a);case 3:e:{if(mp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Ph(n,i),zo(i,c,null,a);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ls(Error(t(423)),i),i=gp(n,i,c,a,d);break e}else if(c!==d){d=Ls(Error(t(424)),i),i=gp(n,i,c,a,d);break e}else for(qn=mr(i.stateNode.containerInfo.firstChild),Yn=i,Yt=!0,vi=null,a=Rh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),c===d){i=$i(n,i,a);break e}Dn(n,i,c,a)}i=i.child}return i;case 5:return Dh(i),n===null&&Bc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,Pc(c,d)?w=null:m!==null&&Pc(c,m)&&(i.flags|=32),hp(n,i),Dn(n,i,w,a),i.child;case 6:return n===null&&Bc(i),null;case 13:return vp(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=As(i,null,c,a):Dn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),cp(n,i,c,d,a);case 7:return Dn(n,i,i.pendingProps,a),i.child;case 8:return Dn(n,i,i.pendingProps.children,a),i.child;case 12:return Dn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,zt(Oo,c._currentValue),c._currentValue=w,m!==null)if(gi(m.value,w)){if(m.children===d.children&&!On.current){i=$i(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){w=m.child;for(var z=U.firstContext;z!==null;){if(z.context===c){if(m.tag===1){z=Ki(-1,a&-a),z.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var Se=ue.pending;Se===null?z.next=z:(z.next=Se.next,Se.next=z),ue.pending=z}}m.lanes|=a,z=m.alternate,z!==null&&(z.lanes|=a),Wc(m.return,a,i),U.lanes|=a;break}z=z.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),Wc(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Dn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Cs(i,a),d=ii(d),c=c(d),i.flags|=1,Dn(n,i,c,a),i.child;case 14:return c=i.type,d=_i(c,i.pendingProps),d=_i(c.type,d),up(n,i,c,d,a);case 15:return dp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),Ko(n,i),i.tag=1,kn(c)?(n=!0,Lo(i)):n=!1,Cs(i,a),np(i,c,d),au(i,c,d,a),uu(null,i,c,!0,n,a);case 19:return xp(n,i,a);case 22:return fp(n,i,a)}throw Error(t(156,i.tag))};function Gp(n,i){return zr(n,i)}function Zv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(n,i,a,c){return new Zv(n,i,a,c)}function Pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jv(n){if(typeof n=="function")return Pu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===ee)return 14}return 2}function br(n,i){var a=n.alternate;return a===null?(a=ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function al(n,i,a,c,d,m){var w=2;if(c=n,typeof n=="function")Pu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case F:return Jr(a.children,d,m,i);case y:w=8,d|=8;break;case N:return n=ai(12,a,i,d|2),n.elementType=N,n.lanes=m,n;case se:return n=ai(13,a,i,d),n.elementType=se,n.lanes=m,n;case Y:return n=ai(19,a,i,d),n.elementType=Y,n.lanes=m,n;case Q:return ol(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:w=10;break e;case X:w=9;break e;case $:w=11;break e;case ee:w=14;break e;case fe:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ai(w,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Jr(n,i,a,c){return n=ai(7,n,c,i),n.lanes=a,n}function ol(n,i,a,c){return n=ai(22,n,c,i),n.elementType=Q,n.lanes=a,n.stateNode={isHidden:!1},n}function Lu(n,i,a){return n=ai(6,n,null,i),n.lanes=a,n}function Nu(n,i,a){return i=ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Qv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Be(0),this.expirationTimes=Be(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Be(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Du(n,i,a,c,d,m,w,U,z){return n=new Qv(n,i,a,U,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ai(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(m),n}function e_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Wp(n){if(!n)return vr;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(kn(a))return _h(n,a,i)}return i}function Xp(n,i,a,c,d,m,w,U,z){return n=Du(a,c,!0,n,d,m,w,U,z),n.context=Wp(null),a=n.current,c=In(),d=wr(a),m=Ki(c,d),m.callback=i??null,Sr(a,m,d),n.current.lanes=d,en(n,d,c),Vn(n,c),n}function ll(n,i,a,c){var d=i.current,m=In(),w=wr(d);return a=Wp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ki(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Sr(d,i,w),n!==null&&(yi(n,d,w,m),Bo(n,d,w)),w}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Yp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Iu(n,i){Yp(n,i),(n=n.alternate)&&Yp(n,i)}function t_(){return null}var qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uu(n){this._internalRoot=n}ul.prototype.render=Uu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ll(n,i,null,null)},ul.prototype.unmount=Uu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Kr(function(){ll(null,n,null,null)}),i[Wi]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=hi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,n),a===0&&Df(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jp(){}function n_(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var ue=cl(w);m.call(ue)}}var w=Xp(i,c,n,0,null,!1,!1,"",jp);return n._reactRootContainer=w,n[Wi]=w.current,wa(n.nodeType===8?n.parentNode:n),Kr(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var ue=cl(z);U.call(ue)}}var z=Du(n,0,!1,null,null,!1,!1,"",jp);return n._reactRootContainer=z,n[Wi]=z.current,wa(n.nodeType===8?n.parentNode:n),Kr(function(){ll(i,z,a,c)}),z}function fl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var U=d;d=function(){var z=cl(w);U.call(z)}}ll(i,w,n,d)}else w=n_(a,i,n,d,c);return cl(w)}Gi=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ve(i.pendingLanes);a!==0&&(En(i,a|1),Vn(i,qt()),(bt&6)===0&&(Is=qt()+500,_r()))}break;case 13:Kr(function(){var c=ji(n,1);if(c!==null){var d=In();yi(c,n,1,d)}}),Iu(n,1)}},Ct=function(n){if(n.tag===13){var i=ji(n,134217728);if(i!==null){var a=In();yi(i,n,134217728,a)}Iu(n,134217728)}},Xt=function(n){if(n.tag===13){var i=wr(n),a=ji(n,i);if(a!==null){var c=In();yi(a,n,i,c)}Iu(n,i)}},hi=function(){return pt},Ft=function(n,i){var a=pt;try{return pt=n,i()}finally{pt=a}},nt=function(n,i,a){switch(i){case"input":if(ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Co(c);if(!d)throw Error(t(90));lt(c),ht(c,d)}}}break;case"textarea":on(n,a);break;case"select":i=a.value,i!=null&&Dt(n,!!a.multiple,i,!1)}},Oe=Au,_e=Kr;var i_={usingClientEntryPoint:!1,Events:[Aa,ys,Co,me,Re,Au]},Va={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},r_={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Br(n),n===null?null:n.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||t_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{ne=hl.inject(r_),J=hl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i_,Hn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return e_(n,i,null,a)},Hn.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,c="",d=qp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Du(n,1,!1,null,null,a,!1,c,d),n[Wi]=i.current,wa(n.nodeType===8?n.parentNode:n),new Uu(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Br(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return Kr(n)},Hn.hydrate=function(n,i,a){if(!dl(i))throw Error(t(200));return fl(null,n,i,!0,a)},Hn.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",w=qp;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Xp(i,null,n,1,a??null,d,!1,m,w),n[Wi]=i.current,wa(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ul(i)},Hn.render=function(n,i,a){if(!dl(i))throw Error(t(200));return fl(null,n,i,!1,a)},Hn.unmountComponentAtNode=function(n){if(!dl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[Wi]=null})}),!0):!1},Hn.unstable_batchedUpdates=Au,Hn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!dl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,a,!1,c)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var nm;function dg(){if(nm)return Bu.exports;nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Bu.exports=h_(),Bu.exports}var im;function p_(){if(im)return pl;im=1;var r=dg();return pl.createRoot=r.createRoot,pl.hydrateRoot=r.hydrateRoot,pl}var m_=p_(),_t=hf();const g_=o_(_t),v_=a_({__proto__:null,default:g_},[_t]),fg=_t.createContext(void 0),hg=()=>{const r=_t.useContext(fg);if(!r)throw new Error("useTheme must be used within a ThemeProvider");return r},__=({children:r})=>{const[e,t]=_t.useState(()=>{if(typeof window<"u"){const l=localStorage.getItem("theme");if(l)return l;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"}),s=l=>{t(l),localStorage.setItem("theme",l)},o=()=>{s(e==="light"?"dark":"light")};return _t.useEffect(()=>{const l=window.document.documentElement;l.classList.remove("light","dark"),l.classList.add(e)},[e]),_t.useEffect(()=>{const l=window.matchMedia("(prefers-color-scheme: dark)"),u=f=>{localStorage.getItem("theme")||t(f.matches?"dark":"light")};return l.addEventListener("change",u),()=>{l.removeEventListener("change",u)}},[]),te.jsx(fg.Provider,{value:{theme:e,toggleTheme:o,setTheme:s},children:r})};function rm(r,e){if(typeof r=="function")return r(e);r!=null&&(r.current=e)}function x_(...r){return e=>{let t=!1;const s=r.map(o=>{const l=rm(o,e);return!t&&typeof l=="function"&&(t=!0),l});if(t)return()=>{for(let o=0;o<s.length;o++){const l=s[o];typeof l=="function"?l():rm(r[o],null)}}}}var S_=Symbol.for("react.lazy"),Yl=v_[" use ".trim().toString()];function y_(r){return typeof r=="object"&&r!==null&&"then"in r}function pg(r){return r!=null&&typeof r=="object"&&"$$typeof"in r&&r.$$typeof===S_&&"_payload"in r&&y_(r._payload)}function mg(r){const e=E_(r),t=_t.forwardRef((s,o)=>{let{children:l,...u}=s;pg(l)&&typeof Yl=="function"&&(l=Yl(l._payload));const f=_t.Children.toArray(l),h=f.find(T_);if(h){const p=h.props.children,v=f.map(x=>x===h?_t.Children.count(p)>1?_t.Children.only(null):_t.isValidElement(p)?p.props.children:null:x);return te.jsx(e,{...u,ref:o,children:_t.isValidElement(p)?_t.cloneElement(p,void 0,v):null})}return te.jsx(e,{...u,ref:o,children:l})});return t.displayName=`${r}.Slot`,t}var M_=mg("Slot");function E_(r){const e=_t.forwardRef((t,s)=>{let{children:o,...l}=t;if(pg(o)&&typeof Yl=="function"&&(o=Yl(o._payload)),_t.isValidElement(o)){const u=A_(o),f=b_(l,o.props);return o.type!==_t.Fragment&&(f.ref=s?x_(s,u):u),_t.cloneElement(o,f)}return _t.Children.count(o)>1?_t.Children.only(null):null});return e.displayName=`${r}.SlotClone`,e}var w_=Symbol("radix.slottable");function T_(r){return _t.isValidElement(r)&&typeof r.type=="function"&&"__radixId"in r.type&&r.type.__radixId===w_}function b_(r,e){const t={...e};for(const s in e){const o=r[s],l=e[s];/^on[A-Z]/.test(s)?o&&l?t[s]=(...f)=>{const h=l(...f);return o(...f),h}:o&&(t[s]=o):s==="style"?t[s]={...o,...l}:s==="className"&&(t[s]=[o,l].filter(Boolean).join(" "))}return{...r,...t}}function A_(r){let e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?r.props.ref:r.props.ref||r.ref)}function gg(r){var e,t,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var o=r.length;for(e=0;e<o;e++)r[e]&&(t=gg(r[e]))&&(s&&(s+=" "),s+=t)}else for(t in r)r[t]&&(s&&(s+=" "),s+=t);return s}function vg(){for(var r,e,t=0,s="",o=arguments.length;t<o;t++)(r=arguments[t])&&(e=gg(r))&&(s&&(s+=" "),s+=e);return s}const sm=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,am=vg,R_=(r,e)=>t=>{var s;if(e?.variants==null)return am(r,t?.class,t?.className);const{variants:o,defaultVariants:l}=e,u=Object.keys(o).map(p=>{const v=t?.[p],x=l?.[p];if(v===null)return null;const g=sm(v)||sm(x);return o[p][g]}),f=t&&Object.entries(t).reduce((p,v)=>{let[x,g]=v;return g===void 0||(p[x]=g),p},{}),h=e==null||(s=e.compoundVariants)===null||s===void 0?void 0:s.reduce((p,v)=>{let{class:x,className:g,...E}=v;return Object.entries(E).every(b=>{let[R,S]=b;return Array.isArray(S)?S.includes({...l,...f}[R]):{...l,...f}[R]===S})?[...p,x,g]:p},[]);return am(r,u,h,t?.class,t?.className)},C_=(r,e)=>{const t=new Array(r.length+e.length);for(let s=0;s<r.length;s++)t[s]=r[s];for(let s=0;s<e.length;s++)t[r.length+s]=e[s];return t},P_=(r,e)=>({classGroupId:r,validator:e}),_g=(r=new Map,e=null,t)=>({nextPart:r,validators:e,classGroupId:t}),ql="-",om=[],L_="arbitrary..",N_=r=>{const e=I_(r),{conflictingClassGroups:t,conflictingClassGroupModifiers:s}=r;return{getClassGroupId:u=>{if(u.startsWith("[")&&u.endsWith("]"))return D_(u);const f=u.split(ql),h=f[0]===""&&f.length>1?1:0;return xg(f,h,e)},getConflictingClassGroupIds:(u,f)=>{if(f){const h=s[u],p=t[u];return h?p?C_(p,h):h:p||om}return t[u]||om}}},xg=(r,e,t)=>{if(r.length-e===0)return t.classGroupId;const o=r[e],l=t.nextPart.get(o);if(l){const p=xg(r,e+1,l);if(p)return p}const u=t.validators;if(u===null)return;const f=e===0?r.join(ql):r.slice(e).join(ql),h=u.length;for(let p=0;p<h;p++){const v=u[p];if(v.validator(f))return v.classGroupId}},D_=r=>r.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=r.slice(1,-1),t=e.indexOf(":"),s=e.slice(0,t);return s?L_+s:void 0})(),I_=r=>{const{theme:e,classGroups:t}=r;return U_(t,e)},U_=(r,e)=>{const t=_g();for(const s in r){const o=r[s];pf(o,t,s,e)}return t},pf=(r,e,t,s)=>{const o=r.length;for(let l=0;l<o;l++){const u=r[l];F_(u,e,t,s)}},F_=(r,e,t,s)=>{if(typeof r=="string"){O_(r,e,t);return}if(typeof r=="function"){k_(r,e,t,s);return}B_(r,e,t,s)},O_=(r,e,t)=>{const s=r===""?e:Sg(e,r);s.classGroupId=t},k_=(r,e,t,s)=>{if(z_(r)){pf(r(s),e,t,s);return}e.validators===null&&(e.validators=[]),e.validators.push(P_(t,r))},B_=(r,e,t,s)=>{const o=Object.entries(r),l=o.length;for(let u=0;u<l;u++){const[f,h]=o[u];pf(h,Sg(e,f),t,s)}},Sg=(r,e)=>{let t=r;const s=e.split(ql),o=s.length;for(let l=0;l<o;l++){const u=s[l];let f=t.nextPart.get(u);f||(f=_g(),t.nextPart.set(u,f)),t=f}return t},z_=r=>"isThemeGetter"in r&&r.isThemeGetter===!0,V_=r=>{if(r<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),s=Object.create(null);const o=(l,u)=>{t[l]=u,e++,e>r&&(e=0,s=t,t=Object.create(null))};return{get(l){let u=t[l];if(u!==void 0)return u;if((u=s[l])!==void 0)return o(l,u),u},set(l,u){l in t?t[l]=u:o(l,u)}}},Ed="!",lm=":",H_=[],cm=(r,e,t,s,o)=>({modifiers:r,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:s,isExternal:o}),G_=r=>{const{prefix:e,experimentalParseClassName:t}=r;let s=o=>{const l=[];let u=0,f=0,h=0,p;const v=o.length;for(let R=0;R<v;R++){const S=o[R];if(u===0&&f===0){if(S===lm){l.push(o.slice(h,R)),h=R+1;continue}if(S==="/"){p=R;continue}}S==="["?u++:S==="]"?u--:S==="("?f++:S===")"&&f--}const x=l.length===0?o:o.slice(h);let g=x,E=!1;x.endsWith(Ed)?(g=x.slice(0,-1),E=!0):x.startsWith(Ed)&&(g=x.slice(1),E=!0);const b=p&&p>h?p-h:void 0;return cm(l,E,g,b)};if(e){const o=e+lm,l=s;s=u=>u.startsWith(o)?l(u.slice(o.length)):cm(H_,!1,u,void 0,!0)}if(t){const o=s;s=l=>t({className:l,parseClassName:o})}return s},W_=r=>{const e=new Map;return r.orderSensitiveModifiers.forEach((t,s)=>{e.set(t,1e6+s)}),t=>{const s=[];let o=[];for(let l=0;l<t.length;l++){const u=t[l],f=u[0]==="[",h=e.has(u);f||h?(o.length>0&&(o.sort(),s.push(...o),o=[]),s.push(u)):o.push(u)}return o.length>0&&(o.sort(),s.push(...o)),s}},X_=r=>({cache:V_(r.cacheSize),parseClassName:G_(r),sortModifiers:W_(r),...N_(r)}),Y_=/\s+/,q_=(r,e)=>{const{parseClassName:t,getClassGroupId:s,getConflictingClassGroupIds:o,sortModifiers:l}=e,u=[],f=r.trim().split(Y_);let h="";for(let p=f.length-1;p>=0;p-=1){const v=f[p],{isExternal:x,modifiers:g,hasImportantModifier:E,baseClassName:b,maybePostfixModifierPosition:R}=t(v);if(x){h=v+(h.length>0?" "+h:h);continue}let S=!!R,_=s(S?b.substring(0,R):b);if(!_){if(!S){h=v+(h.length>0?" "+h:h);continue}if(_=s(b),!_){h=v+(h.length>0?" "+h:h);continue}S=!1}const L=g.length===0?"":g.length===1?g[0]:l(g).join(":"),O=E?L+Ed:L,A=O+_;if(u.indexOf(A)>-1)continue;u.push(A);const C=o(_,S);for(let P=0;P<C.length;++P){const F=C[P];u.push(O+F)}h=v+(h.length>0?" "+h:h)}return h},j_=(...r)=>{let e=0,t,s,o="";for(;e<r.length;)(t=r[e++])&&(s=yg(t))&&(o&&(o+=" "),o+=s);return o},yg=r=>{if(typeof r=="string")return r;let e,t="";for(let s=0;s<r.length;s++)r[s]&&(e=yg(r[s]))&&(t&&(t+=" "),t+=e);return t},K_=(r,...e)=>{let t,s,o,l;const u=h=>{const p=e.reduce((v,x)=>x(v),r());return t=X_(p),s=t.cache.get,o=t.cache.set,l=f,f(h)},f=h=>{const p=s(h);if(p)return p;const v=q_(h,t);return o(h,v),v};return l=u,(...h)=>l(j_(...h))},$_=[],dn=r=>{const e=t=>t[r]||$_;return e.isThemeGetter=!0,e},Mg=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Eg=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Z_=/^\d+\/\d+$/,J_=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Q_=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ex=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,tx=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,nx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Fs=r=>Z_.test(r),gt=r=>!!r&&!Number.isNaN(Number(r)),Rr=r=>!!r&&Number.isInteger(Number(r)),Hu=r=>r.endsWith("%")&&gt(r.slice(0,-1)),Ji=r=>J_.test(r),ix=()=>!0,rx=r=>Q_.test(r)&&!ex.test(r),wg=()=>!1,sx=r=>tx.test(r),ax=r=>nx.test(r),ox=r=>!Ye(r)&&!qe(r),lx=r=>na(r,Ag,wg),Ye=r=>Mg.test(r),Qr=r=>na(r,Rg,rx),Gu=r=>na(r,hx,gt),um=r=>na(r,Tg,wg),cx=r=>na(r,bg,ax),ml=r=>na(r,Cg,sx),qe=r=>Eg.test(r),Ga=r=>ia(r,Rg),ux=r=>ia(r,px),dm=r=>ia(r,Tg),dx=r=>ia(r,Ag),fx=r=>ia(r,bg),gl=r=>ia(r,Cg,!0),na=(r,e,t)=>{const s=Mg.exec(r);return s?s[1]?e(s[1]):t(s[2]):!1},ia=(r,e,t=!1)=>{const s=Eg.exec(r);return s?s[1]?e(s[1]):t:!1},Tg=r=>r==="position"||r==="percentage",bg=r=>r==="image"||r==="url",Ag=r=>r==="length"||r==="size"||r==="bg-size",Rg=r=>r==="length",hx=r=>r==="number",px=r=>r==="family-name",Cg=r=>r==="shadow",mx=()=>{const r=dn("color"),e=dn("font"),t=dn("text"),s=dn("font-weight"),o=dn("tracking"),l=dn("leading"),u=dn("breakpoint"),f=dn("container"),h=dn("spacing"),p=dn("radius"),v=dn("shadow"),x=dn("inset-shadow"),g=dn("text-shadow"),E=dn("drop-shadow"),b=dn("blur"),R=dn("perspective"),S=dn("aspect"),_=dn("ease"),L=dn("animate"),O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],A=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],C=()=>[...A(),qe,Ye],P=()=>["auto","hidden","clip","visible","scroll"],F=()=>["auto","contain","none"],y=()=>[qe,Ye,h],N=()=>[Fs,"full","auto",...y()],B=()=>[Rr,"none","subgrid",qe,Ye],X=()=>["auto",{span:["full",Rr,qe,Ye]},Rr,qe,Ye],$=()=>[Rr,"auto",qe,Ye],se=()=>["auto","min","max","fr",qe,Ye],Y=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ee=()=>["start","end","center","stretch","center-safe","end-safe"],fe=()=>["auto",...y()],Q=()=>[Fs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...y()],k=()=>[r,qe,Ye],q=()=>[...A(),dm,um,{position:[qe,Ye]}],j=()=>["no-repeat",{repeat:["","x","y","space","round"]}],D=()=>["auto","cover","contain",dx,lx,{size:[qe,Ye]}],re=()=>[Hu,Ga,Qr],ve=()=>["","none","full",p,qe,Ye],Le=()=>["",gt,Ga,Qr],ke=()=>["solid","dashed","dotted","double"],He=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Z=()=>[gt,Hu,dm,um],de=()=>["","none",b,qe,Ye],Me=()=>["none",gt,qe,Ye],je=()=>["none",gt,qe,Ye],Ie=()=>[gt,qe,Ye],lt=()=>[Fs,"full",...y()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ji],breakpoint:[Ji],color:[ix],container:[Ji],"drop-shadow":[Ji],ease:["in","out","in-out"],font:[ox],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ji],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ji],shadow:[Ji],spacing:["px",gt],text:[Ji],"text-shadow":[Ji],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Fs,Ye,qe,S]}],container:["container"],columns:[{columns:[gt,Ye,qe,f]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:C()}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:F()}],"overscroll-x":[{"overscroll-x":F()}],"overscroll-y":[{"overscroll-y":F()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:N()}],"inset-x":[{"inset-x":N()}],"inset-y":[{"inset-y":N()}],start:[{start:N()}],end:[{end:N()}],top:[{top:N()}],right:[{right:N()}],bottom:[{bottom:N()}],left:[{left:N()}],visibility:["visible","invisible","collapse"],z:[{z:[Rr,"auto",qe,Ye]}],basis:[{basis:[Fs,"full","auto",f,...y()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[gt,Fs,"auto","initial","none",Ye]}],grow:[{grow:["",gt,qe,Ye]}],shrink:[{shrink:["",gt,qe,Ye]}],order:[{order:[Rr,"first","last","none",qe,Ye]}],"grid-cols":[{"grid-cols":B()}],"col-start-end":[{col:X()}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":B()}],"row-start-end":[{row:X()}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":se()}],"auto-rows":[{"auto-rows":se()}],gap:[{gap:y()}],"gap-x":[{"gap-x":y()}],"gap-y":[{"gap-y":y()}],"justify-content":[{justify:[...Y(),"normal"]}],"justify-items":[{"justify-items":[...ee(),"normal"]}],"justify-self":[{"justify-self":["auto",...ee()]}],"align-content":[{content:["normal",...Y()]}],"align-items":[{items:[...ee(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ee(),{baseline:["","last"]}]}],"place-content":[{"place-content":Y()}],"place-items":[{"place-items":[...ee(),"baseline"]}],"place-self":[{"place-self":["auto",...ee()]}],p:[{p:y()}],px:[{px:y()}],py:[{py:y()}],ps:[{ps:y()}],pe:[{pe:y()}],pt:[{pt:y()}],pr:[{pr:y()}],pb:[{pb:y()}],pl:[{pl:y()}],m:[{m:fe()}],mx:[{mx:fe()}],my:[{my:fe()}],ms:[{ms:fe()}],me:[{me:fe()}],mt:[{mt:fe()}],mr:[{mr:fe()}],mb:[{mb:fe()}],ml:[{ml:fe()}],"space-x":[{"space-x":y()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":y()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[f,"screen",...Q()]}],"min-w":[{"min-w":[f,"screen","none",...Q()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[u]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",t,Ga,Qr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,qe,Gu]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Hu,Ye]}],"font-family":[{font:[ux,Ye,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,qe,Ye]}],"line-clamp":[{"line-clamp":[gt,"none",qe,Gu]}],leading:[{leading:[l,...y()]}],"list-image":[{"list-image":["none",qe,Ye]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",qe,Ye]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:k()}],"text-color":[{text:k()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ke(),"wavy"]}],"text-decoration-thickness":[{decoration:[gt,"from-font","auto",qe,Qr]}],"text-decoration-color":[{decoration:k()}],"underline-offset":[{"underline-offset":[gt,"auto",qe,Ye]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",qe,Ye]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",qe,Ye]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:q()}],"bg-repeat":[{bg:j()}],"bg-size":[{bg:D()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Rr,qe,Ye],radial:["",qe,Ye],conic:[Rr,qe,Ye]},fx,cx]}],"bg-color":[{bg:k()}],"gradient-from-pos":[{from:re()}],"gradient-via-pos":[{via:re()}],"gradient-to-pos":[{to:re()}],"gradient-from":[{from:k()}],"gradient-via":[{via:k()}],"gradient-to":[{to:k()}],rounded:[{rounded:ve()}],"rounded-s":[{"rounded-s":ve()}],"rounded-e":[{"rounded-e":ve()}],"rounded-t":[{"rounded-t":ve()}],"rounded-r":[{"rounded-r":ve()}],"rounded-b":[{"rounded-b":ve()}],"rounded-l":[{"rounded-l":ve()}],"rounded-ss":[{"rounded-ss":ve()}],"rounded-se":[{"rounded-se":ve()}],"rounded-ee":[{"rounded-ee":ve()}],"rounded-es":[{"rounded-es":ve()}],"rounded-tl":[{"rounded-tl":ve()}],"rounded-tr":[{"rounded-tr":ve()}],"rounded-br":[{"rounded-br":ve()}],"rounded-bl":[{"rounded-bl":ve()}],"border-w":[{border:Le()}],"border-w-x":[{"border-x":Le()}],"border-w-y":[{"border-y":Le()}],"border-w-s":[{"border-s":Le()}],"border-w-e":[{"border-e":Le()}],"border-w-t":[{"border-t":Le()}],"border-w-r":[{"border-r":Le()}],"border-w-b":[{"border-b":Le()}],"border-w-l":[{"border-l":Le()}],"divide-x":[{"divide-x":Le()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Le()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...ke(),"hidden","none"]}],"divide-style":[{divide:[...ke(),"hidden","none"]}],"border-color":[{border:k()}],"border-color-x":[{"border-x":k()}],"border-color-y":[{"border-y":k()}],"border-color-s":[{"border-s":k()}],"border-color-e":[{"border-e":k()}],"border-color-t":[{"border-t":k()}],"border-color-r":[{"border-r":k()}],"border-color-b":[{"border-b":k()}],"border-color-l":[{"border-l":k()}],"divide-color":[{divide:k()}],"outline-style":[{outline:[...ke(),"none","hidden"]}],"outline-offset":[{"outline-offset":[gt,qe,Ye]}],"outline-w":[{outline:["",gt,Ga,Qr]}],"outline-color":[{outline:k()}],shadow:[{shadow:["","none",v,gl,ml]}],"shadow-color":[{shadow:k()}],"inset-shadow":[{"inset-shadow":["none",x,gl,ml]}],"inset-shadow-color":[{"inset-shadow":k()}],"ring-w":[{ring:Le()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:k()}],"ring-offset-w":[{"ring-offset":[gt,Qr]}],"ring-offset-color":[{"ring-offset":k()}],"inset-ring-w":[{"inset-ring":Le()}],"inset-ring-color":[{"inset-ring":k()}],"text-shadow":[{"text-shadow":["none",g,gl,ml]}],"text-shadow-color":[{"text-shadow":k()}],opacity:[{opacity:[gt,qe,Ye]}],"mix-blend":[{"mix-blend":[...He(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":He()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[gt]}],"mask-image-linear-from-pos":[{"mask-linear-from":Z()}],"mask-image-linear-to-pos":[{"mask-linear-to":Z()}],"mask-image-linear-from-color":[{"mask-linear-from":k()}],"mask-image-linear-to-color":[{"mask-linear-to":k()}],"mask-image-t-from-pos":[{"mask-t-from":Z()}],"mask-image-t-to-pos":[{"mask-t-to":Z()}],"mask-image-t-from-color":[{"mask-t-from":k()}],"mask-image-t-to-color":[{"mask-t-to":k()}],"mask-image-r-from-pos":[{"mask-r-from":Z()}],"mask-image-r-to-pos":[{"mask-r-to":Z()}],"mask-image-r-from-color":[{"mask-r-from":k()}],"mask-image-r-to-color":[{"mask-r-to":k()}],"mask-image-b-from-pos":[{"mask-b-from":Z()}],"mask-image-b-to-pos":[{"mask-b-to":Z()}],"mask-image-b-from-color":[{"mask-b-from":k()}],"mask-image-b-to-color":[{"mask-b-to":k()}],"mask-image-l-from-pos":[{"mask-l-from":Z()}],"mask-image-l-to-pos":[{"mask-l-to":Z()}],"mask-image-l-from-color":[{"mask-l-from":k()}],"mask-image-l-to-color":[{"mask-l-to":k()}],"mask-image-x-from-pos":[{"mask-x-from":Z()}],"mask-image-x-to-pos":[{"mask-x-to":Z()}],"mask-image-x-from-color":[{"mask-x-from":k()}],"mask-image-x-to-color":[{"mask-x-to":k()}],"mask-image-y-from-pos":[{"mask-y-from":Z()}],"mask-image-y-to-pos":[{"mask-y-to":Z()}],"mask-image-y-from-color":[{"mask-y-from":k()}],"mask-image-y-to-color":[{"mask-y-to":k()}],"mask-image-radial":[{"mask-radial":[qe,Ye]}],"mask-image-radial-from-pos":[{"mask-radial-from":Z()}],"mask-image-radial-to-pos":[{"mask-radial-to":Z()}],"mask-image-radial-from-color":[{"mask-radial-from":k()}],"mask-image-radial-to-color":[{"mask-radial-to":k()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":A()}],"mask-image-conic-pos":[{"mask-conic":[gt]}],"mask-image-conic-from-pos":[{"mask-conic-from":Z()}],"mask-image-conic-to-pos":[{"mask-conic-to":Z()}],"mask-image-conic-from-color":[{"mask-conic-from":k()}],"mask-image-conic-to-color":[{"mask-conic-to":k()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:q()}],"mask-repeat":[{mask:j()}],"mask-size":[{mask:D()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",qe,Ye]}],filter:[{filter:["","none",qe,Ye]}],blur:[{blur:de()}],brightness:[{brightness:[gt,qe,Ye]}],contrast:[{contrast:[gt,qe,Ye]}],"drop-shadow":[{"drop-shadow":["","none",E,gl,ml]}],"drop-shadow-color":[{"drop-shadow":k()}],grayscale:[{grayscale:["",gt,qe,Ye]}],"hue-rotate":[{"hue-rotate":[gt,qe,Ye]}],invert:[{invert:["",gt,qe,Ye]}],saturate:[{saturate:[gt,qe,Ye]}],sepia:[{sepia:["",gt,qe,Ye]}],"backdrop-filter":[{"backdrop-filter":["","none",qe,Ye]}],"backdrop-blur":[{"backdrop-blur":de()}],"backdrop-brightness":[{"backdrop-brightness":[gt,qe,Ye]}],"backdrop-contrast":[{"backdrop-contrast":[gt,qe,Ye]}],"backdrop-grayscale":[{"backdrop-grayscale":["",gt,qe,Ye]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[gt,qe,Ye]}],"backdrop-invert":[{"backdrop-invert":["",gt,qe,Ye]}],"backdrop-opacity":[{"backdrop-opacity":[gt,qe,Ye]}],"backdrop-saturate":[{"backdrop-saturate":[gt,qe,Ye]}],"backdrop-sepia":[{"backdrop-sepia":["",gt,qe,Ye]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":y()}],"border-spacing-x":[{"border-spacing-x":y()}],"border-spacing-y":[{"border-spacing-y":y()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",qe,Ye]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[gt,"initial",qe,Ye]}],ease:[{ease:["linear","initial",_,qe,Ye]}],delay:[{delay:[gt,qe,Ye]}],animate:[{animate:["none",L,qe,Ye]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[R,qe,Ye]}],"perspective-origin":[{"perspective-origin":C()}],rotate:[{rotate:Me()}],"rotate-x":[{"rotate-x":Me()}],"rotate-y":[{"rotate-y":Me()}],"rotate-z":[{"rotate-z":Me()}],scale:[{scale:je()}],"scale-x":[{"scale-x":je()}],"scale-y":[{"scale-y":je()}],"scale-z":[{"scale-z":je()}],"scale-3d":["scale-3d"],skew:[{skew:Ie()}],"skew-x":[{"skew-x":Ie()}],"skew-y":[{"skew-y":Ie()}],transform:[{transform:[qe,Ye,"","none","gpu","cpu"]}],"transform-origin":[{origin:C()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:lt()}],"translate-x":[{"translate-x":lt()}],"translate-y":[{"translate-y":lt()}],"translate-z":[{"translate-z":lt()}],"translate-none":["translate-none"],accent:[{accent:k()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:k()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",qe,Ye]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":y()}],"scroll-mx":[{"scroll-mx":y()}],"scroll-my":[{"scroll-my":y()}],"scroll-ms":[{"scroll-ms":y()}],"scroll-me":[{"scroll-me":y()}],"scroll-mt":[{"scroll-mt":y()}],"scroll-mr":[{"scroll-mr":y()}],"scroll-mb":[{"scroll-mb":y()}],"scroll-ml":[{"scroll-ml":y()}],"scroll-p":[{"scroll-p":y()}],"scroll-px":[{"scroll-px":y()}],"scroll-py":[{"scroll-py":y()}],"scroll-ps":[{"scroll-ps":y()}],"scroll-pe":[{"scroll-pe":y()}],"scroll-pt":[{"scroll-pt":y()}],"scroll-pr":[{"scroll-pr":y()}],"scroll-pb":[{"scroll-pb":y()}],"scroll-pl":[{"scroll-pl":y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",qe,Ye]}],fill:[{fill:["none",...k()]}],"stroke-w":[{stroke:[gt,Ga,Qr,Gu]}],stroke:[{stroke:["none",...k()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},gx=K_(mx);function ec(...r){return gx(vg(r))}const vx=R_("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Pg({className:r,variant:e,size:t,asChild:s=!1,...o}){const l=s?M_:"button";return te.jsx(l,{"data-slot":"button",className:ec(vx({variant:e,size:t,className:r})),...o})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xx=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),fm=r=>{const e=xx(r);return e.charAt(0).toUpperCase()+e.slice(1)},Lg=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Sx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=_t.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:u,...f},h)=>_t.createElement("svg",{ref:h,...Sx,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:Lg("lucide",o),...f},[...u.map(([p,v])=>_t.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=(r,e)=>{const t=_t.forwardRef(({className:s,...o},l)=>_t.createElement(yx,{ref:l,iconNode:e,className:Lg(`lucide-${_x(fm(r))}`,`lucide-${r}`,s),...o}));return t.displayName=fm(r),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]],Ex=Jn("arrow-down-right",Mx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Tx=Jn("external-link",wx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],mf=Jn("github",bx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Ng=Jn("linkedin",Ax);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Cx=Jn("loader-circle",Rx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Dg=Jn("mail",Px);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Nx=Jn("map-pin",Lx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Ix=Jn("menu",Dx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],Fx=Jn("moon",Ux);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],kx=Jn("phone",Ox);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],zx=Jn("send",Bx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Hx=Jn("sun",Vx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wx=Jn("x",Gx),hm=()=>{const{theme:r,toggleTheme:e}=hg();return te.jsx(Pg,{variant:"ghost",size:"sm",onClick:e,className:"w-10 h-10 p-0 rounded-full hover:bg-accent transition-colors","aria-label":`Switch to ${r==="light"?"dark":"light"} mode`,children:r==="light"?te.jsx(Fx,{className:"h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"}):te.jsx(Hx,{className:"h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"})})},pm=[{id:"work",label:"Work"},{id:"about",label:"About"},{id:"experience",label:"Path"},{id:"contact",label:"Contact"}],Xx=()=>{const[r,e]=_t.useState(!1),[t,s]=_t.useState(!1);_t.useEffect(()=>{const l=()=>s(window.scrollY>24);return window.addEventListener("scroll",l,{passive:!0}),()=>window.removeEventListener("scroll",l)},[]);const o=l=>{document.getElementById(l)?.scrollIntoView({behavior:"smooth"}),e(!1)};return te.jsxs("nav",{className:`fixed top-0 z-50 w-full transition-all duration-300 ${t?"border-b border-border/80 bg-background/80 backdrop-blur-md":"bg-transparent"}`,children:[te.jsxs("div",{className:"mx-auto flex max-w-6xl items-center justify-between px-6 py-4",children:[te.jsx("button",{onClick:()=>o("home"),className:"font-serif text-xl tracking-tight",children:"DY"}),te.jsxs("div",{className:"hidden items-center gap-8 md:flex",children:[pm.map(l=>te.jsx("button",{onClick:()=>o(l.id),className:"text-sm text-muted-foreground transition-colors hover:text-foreground",children:l.label},l.id)),te.jsx(hm,{})]}),te.jsxs("div",{className:"flex items-center gap-1 md:hidden",children:[te.jsx(hm,{}),te.jsx("button",{className:"rounded-full p-2 text-foreground",onClick:()=>e(l=>!l),"aria-label":"Toggle menu",children:r?te.jsx(Wx,{className:"h-5 w-5"}):te.jsx(Ix,{className:"h-5 w-5"})})]})]}),r&&te.jsx("div",{className:"border-t border-border bg-background px-6 py-4 md:hidden",children:te.jsx("div",{className:"flex flex-col gap-3",children:pm.map(l=>te.jsx("button",{onClick:()=>o(l.id),className:"text-left text-sm text-muted-foreground",children:l.label},l.id))})})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gf="186",Yx=0,mm=1,qx=2,zl=1,jx=2,Za=3,os=0,Wn=1,rr=2,ar=0,eo=1,gm=2,vm=3,_m=4,Kx=5,$s=100,$x=101,Zx=102,Jx=103,Qx=104,eS=200,tS=201,nS=202,iS=203,Ig=204,Ug=205,rS=206,sS=207,aS=208,oS=209,lS=210,cS=211,uS=212,dS=213,fS=214,wd=0,Td=1,bd=2,to=3,Ad=4,Rd=5,Cd=6,Pd=7,Fg=0,hS=1,pS=2,ki=0,Og=1,kg=2,Bg=3,zg=4,Vg=5,Hg=6,Gg=7,Wg=300,ls=301,ea=302,Wu=303,Xu=304,tc=306,Ld=1e3,sr=1001,Nd=1002,Mn=1003,mS=1004,vl=1005,Ln=1006,Yu=1007,ss=1008,ui=1009,Xg=1010,Yg=1011,no=1012,vf=1013,Bi=1014,Fi=1015,zi=1016,_f=1017,xf=1018,io=1020,qg=35902,jg=35899,Kg=1021,$g=1022,bi=1023,cr=1026,as=1027,Zg=1028,Sf=1029,cs=1030,yf=1031,Mf=1033,Vl=33776,Hl=33777,Gl=33778,Wl=33779,Dd=35840,Id=35841,Ud=35842,Fd=35843,Od=36196,kd=37492,Bd=37496,zd=37488,Vd=37489,jl=37490,Hd=37491,Gd=37808,Wd=37809,Xd=37810,Yd=37811,qd=37812,jd=37813,Kd=37814,$d=37815,Zd=37816,Jd=37817,Qd=37818,ef=37819,tf=37820,nf=37821,rf=36492,sf=36494,af=36495,of=36283,lf=36284,Kl=36285,cf=36286,gS=3200,xm=0,vS=1,Ur="",li="srgb",$l="srgb-linear",Zl="linear",Ot="srgb",qu=7680,_S=519,xS=512,SS=513,yS=514,Ef=515,MS=516,ES=517,wf=518,wS=519,TS=35044,Sm="300 es",Oi=2e3,Jl=2001;function bS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AS(){const r=Ql("canvas");return r.style.display="block",r}const ym={};function Mm(...r){const e="THREE."+r.shift();console.log(e,...r)}function Jg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ot(...r){r=Jg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Lt(...r){r=Jg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Js(...r){const e=r.join(" ");e in ym||(ym[e]=!0,ot(...r))}function RS(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const CS={[wd]:Td,[bd]:Cd,[Ad]:Pd,[to]:Rd,[Td]:wd,[Cd]:bd,[Pd]:Ad,[Rd]:to};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=Math.PI/180,uf=180/Math.PI;function so(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function PS(r,e){return(r%e+e)%e}function Ku(r,e,t){return(1-t)*r+t*e}function Wa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Tt{static{Tt.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ra{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3],g=l[u+0],E=l[u+1],b=l[u+2],R=l[u+3];if(x!==R||h!==g||p!==E||v!==b){let S=h*g+p*E+v*b+x*R;S<0&&(g=-g,E=-E,b=-b,R=-R,S=-S);let _=1-f;if(S<.9995){const L=Math.acos(S),O=Math.sin(L);_=Math.sin(_*L)/O,f=Math.sin(f*L)/O,h=h*_+g*f,p=p*_+E*f,v=v*_+b*f,x=x*_+R*f}else{h=h*_+g*f,p=p*_+E*f,v=v*_+b*f,x=x*_+R*f;const L=1/Math.sqrt(h*h+p*p+v*v+x*x);h*=L,p*=L,v*=L,x*=L}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],h=s[o+1],p=s[o+2],v=s[o+3],x=l[u],g=l[u+1],E=l[u+2],b=l[u+3];return e[t]=f*b+v*x+h*E-p*g,e[t+1]=h*b+v*g+p*x-f*E,e[t+2]=p*b+v*E+f*g-h*x,e[t+3]=v*b-f*x-h*g-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(s/2),v=f(o/2),x=f(l/2),g=h(s/2),E=h(o/2),b=h(l/2);switch(u){case"XYZ":this._x=g*v*x+p*E*b,this._y=p*E*x-g*v*b,this._z=p*v*b+g*E*x,this._w=p*v*x-g*E*b;break;case"YXZ":this._x=g*v*x+p*E*b,this._y=p*E*x-g*v*b,this._z=p*v*b-g*E*x,this._w=p*v*x+g*E*b;break;case"ZXY":this._x=g*v*x-p*E*b,this._y=p*E*x+g*v*b,this._z=p*v*b+g*E*x,this._w=p*v*x-g*E*b;break;case"ZYX":this._x=g*v*x-p*E*b,this._y=p*E*x+g*v*b,this._z=p*v*b-g*E*x,this._w=p*v*x+g*E*b;break;case"YZX":this._x=g*v*x+p*E*b,this._y=p*E*x+g*v*b,this._z=p*v*b-g*E*x,this._w=p*v*x-g*E*b;break;case"XZY":this._x=g*v*x-p*E*b,this._y=p*E*x-g*v*b,this._z=p*v*b+g*E*x,this._w=p*v*x+g*E*b;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],x=t[10],g=s+f+x;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-h)*E,this._y=(l-p)*E,this._z=(u-o)*E}else if(s>f&&s>x){const E=2*Math.sqrt(1+s-f-x);this._w=(v-h)/E,this._x=.25*E,this._y=(o+u)/E,this._z=(l+p)/E}else if(f>x){const E=2*Math.sqrt(1+f-s-x);this._w=(l-p)/E,this._x=(o+u)/E,this._y=.25*E,this._z=(h+v)/E}else{const E=2*Math.sqrt(1+x-s-f);this._w=(u-o)/E,this._x=(l+p)/E,this._y=(h+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=s*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-s*p,this._z=l*v+u*p+s*h-o*f,this._w=u*v-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{static{oe.prototype.isVector3=!0}constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Em.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Em.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*s),v=2*(f*t-l*o),x=2*(l*s-u*t);return this.x=t+h*p+u*x-f*v,this.y=s+h*v+f*p-l*x,this.z=o+h*x+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-s*h,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Et(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $u=new oe,Em=new ra;class ut{static{ut.prototype.isMatrix3=!0}constructor(e,t,s,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p)}set(e,t,s,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=s,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],v=s[4],x=s[7],g=s[2],E=s[5],b=s[8],R=o[0],S=o[3],_=o[6],L=o[1],O=o[4],A=o[7],C=o[2],P=o[5],F=o[8];return l[0]=u*R+f*L+h*C,l[3]=u*S+f*O+h*P,l[6]=u*_+f*A+h*F,l[1]=p*R+v*L+x*C,l[4]=p*S+v*O+x*P,l[7]=p*_+v*A+x*F,l[2]=g*R+E*L+b*C,l[5]=g*S+E*O+b*P,l[8]=g*_+E*A+b*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-s*l*v+s*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],x=v*u-f*p,g=f*h-v*l,E=p*l-u*h,b=t*x+s*g+o*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=x*R,e[1]=(o*p-v*s)*R,e[2]=(f*s-o*u)*R,e[3]=g*R,e[4]=(v*t-o*h)*R,e[5]=(o*l-f*t)*R,e[6]=E*R,e[7]=(s*h-p*t)*R,e[8]=(u*t-s*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return Js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Zu.makeScale(e,t)),this}rotate(e){return Js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Zu.makeRotation(-e)),this}translate(e,t){return Js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zu=new ut,wm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LS(){const r={enabled:!0,workingColorSpace:$l,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ot&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ot&&(o.r=Qs(o.r),o.g=Qs(o.g),o.b=Qs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?Zl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[$l]:{primaries:e,whitePoint:s,transfer:Zl,toXYZ:wm,fromXYZ:Tm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:s,transfer:Ot,toXYZ:wm,fromXYZ:Tm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const Mt=LS();function or(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Os;class NS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Os===void 0&&(Os=Ql("canvas")),Os.width=e.width,Os.height=e.height;const o=Os.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Os}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ql("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=or(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(or(t[s]/255)*255):t[s]=or(t[s]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let DS=0;class Tf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Ju(o[u].image)):l.push(Ju(o[u]))}else l=Ju(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Ju(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?NS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let IS=0;const Qu=new oe;class Fn extends ds{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,s=sr,o=sr,l=Ln,u=ss,f=bi,h=ui,p=Fn.DEFAULT_ANISOTROPY,v=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=so(),this.name="",this.source=new Tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qu).x}get height(){return this.source.getSize(Qu).y}get depth(){return this.source.getSize(Qu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Wg;Fn.DEFAULT_ANISOTROPY=1;class Qt{static{Qt.prototype.isVector4=!0}constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],v=h[4],x=h[8],g=h[1],E=h[5],b=h[9],R=h[2],S=h[6],_=h[10];if(Math.abs(v-g)<.01&&Math.abs(x-R)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+R)<.1&&Math.abs(b+S)<.1&&Math.abs(p+E+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(p+1)/2,A=(E+1)/2,C=(_+1)/2,P=(v+g)/4,F=(x+R)/4,y=(b+S)/4;return O>A&&O>C?O<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(O),o=P/s,l=F/s):A>C?A<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),s=P/o,l=y/o):C<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(C),s=F/l,o=y/l),this.set(s,o,l,t),this}let L=Math.sqrt((S-b)*(S-b)+(x-R)*(x-R)+(g-v)*(g-v));return Math.abs(L)<.001&&(L=1),this.x=(S-b)/L,this.y=(x-R)/L,this.z=(g-v)/L,this.w=Math.acos((p+E+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class US extends ds{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new Fn(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Tf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends US{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class Qg extends Fn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FS extends Fn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class nn{static{nn.prototype.isMatrix4=!0}constructor(e,t,s,o,l,u,f,h,p,v,x,g,E,b,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p,v,x,g,E,b,R,S)}set(e,t,s,o,l,u,f,h,p,v,x,g,E,b,R,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=s,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=x,_[14]=g,_[3]=E,_[7]=b,_[11]=R,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=u*v,E=u*x,b=f*v,R=f*x;t[0]=h*v,t[4]=-h*x,t[8]=p,t[1]=E+b*p,t[5]=g-R*p,t[9]=-f*h,t[2]=R-g*p,t[6]=b+E*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,E=h*x,b=p*v,R=p*x;t[0]=g+R*f,t[4]=b*f-E,t[8]=u*p,t[1]=u*x,t[5]=u*v,t[9]=-f,t[2]=E*f-b,t[6]=R+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,E=h*x,b=p*v,R=p*x;t[0]=g-R*f,t[4]=-u*x,t[8]=b+E*f,t[1]=E+b*f,t[5]=u*v,t[9]=R-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,E=u*x,b=f*v,R=f*x;t[0]=h*v,t[4]=b*p-E,t[8]=g*p+R,t[1]=h*x,t[5]=R*p+g,t[9]=E*p-b,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,E=u*p,b=f*h,R=f*p;t[0]=h*v,t[4]=R-g*x,t[8]=b*x+E,t[1]=x,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=E*x+b,t[10]=g-R*x}else if(e.order==="XZY"){const g=u*h,E=u*p,b=f*h,R=f*p;t[0]=h*v,t[4]=-x,t[8]=p*v,t[1]=g*x+R,t[5]=u*v,t[9]=E*x-b,t[2]=b*x-E,t[6]=f*v,t[10]=R*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OS,e,kS)}lookAt(e,t,s){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Cr.crossVectors(s,Kn),Cr.lengthSq()===0&&(Math.abs(s.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Cr.crossVectors(s,Kn)),Cr.normalize(),_l.crossVectors(Kn,Cr),o[0]=Cr.x,o[4]=_l.x,o[8]=Kn.x,o[1]=Cr.y,o[5]=_l.y,o[9]=Kn.y,o[2]=Cr.z,o[6]=_l.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],v=s[1],x=s[5],g=s[9],E=s[13],b=s[2],R=s[6],S=s[10],_=s[14],L=s[3],O=s[7],A=s[11],C=s[15],P=o[0],F=o[4],y=o[8],N=o[12],B=o[1],X=o[5],$=o[9],se=o[13],Y=o[2],ee=o[6],fe=o[10],Q=o[14],k=o[3],q=o[7],j=o[11],D=o[15];return l[0]=u*P+f*B+h*Y+p*k,l[4]=u*F+f*X+h*ee+p*q,l[8]=u*y+f*$+h*fe+p*j,l[12]=u*N+f*se+h*Q+p*D,l[1]=v*P+x*B+g*Y+E*k,l[5]=v*F+x*X+g*ee+E*q,l[9]=v*y+x*$+g*fe+E*j,l[13]=v*N+x*se+g*Q+E*D,l[2]=b*P+R*B+S*Y+_*k,l[6]=b*F+R*X+S*ee+_*q,l[10]=b*y+R*$+S*fe+_*j,l[14]=b*N+R*se+S*Q+_*D,l[3]=L*P+O*B+A*Y+C*k,l[7]=L*F+O*X+A*ee+C*q,l[11]=L*y+O*$+A*fe+C*j,l[15]=L*N+O*se+A*Q+C*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],x=e[6],g=e[10],E=e[14],b=e[3],R=e[7],S=e[11],_=e[15],L=h*E-p*g,O=f*E-p*x,A=f*g-h*x,C=u*E-p*v,P=u*g-h*v,F=u*x-f*v;return t*(R*L-S*O+_*A)-s*(b*L-S*C+_*P)+o*(b*O-R*C+_*F)-l*(b*A-R*P+S*F)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],v=e[10];return t*(u*v-f*p)-s*(l*v-f*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],x=e[9],g=e[10],E=e[11],b=e[12],R=e[13],S=e[14],_=e[15],L=t*f-s*u,O=t*h-o*u,A=t*p-l*u,C=s*h-o*f,P=s*p-l*f,F=o*p-l*h,y=v*R-x*b,N=v*S-g*b,B=v*_-E*b,X=x*S-g*R,$=x*_-E*R,se=g*_-E*S,Y=L*se-O*$+A*X+C*B-P*N+F*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/Y;return e[0]=(f*se-h*$+p*X)*ee,e[1]=(o*$-s*se-l*X)*ee,e[2]=(R*F-S*P+_*C)*ee,e[3]=(g*P-x*F-E*C)*ee,e[4]=(h*B-u*se-p*N)*ee,e[5]=(t*se-o*B+l*N)*ee,e[6]=(S*A-b*F-_*O)*ee,e[7]=(v*F-g*A+E*O)*ee,e[8]=(u*$-f*B+p*y)*ee,e[9]=(s*B-t*$-l*y)*ee,e[10]=(b*P-R*A+_*L)*ee,e[11]=(x*A-v*P-E*L)*ee,e[12]=(f*N-u*X-h*y)*ee,e[13]=(t*X-s*N+o*y)*ee,e[14]=(R*O-b*C-S*L)*ee,e[15]=(v*C-x*O+g*L)*ee,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+s,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+s,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,x=f+f,g=l*p,E=l*v,b=l*x,R=u*v,S=u*x,_=f*x,L=h*p,O=h*v,A=h*x,C=s.x,P=s.y,F=s.z;return o[0]=(1-(R+_))*C,o[1]=(E+A)*C,o[2]=(b-O)*C,o[3]=0,o[4]=(E-A)*P,o[5]=(1-(g+_))*P,o[6]=(S+L)*P,o[7]=0,o[8]=(b+O)*F,o[9]=(S-L)*F,o[10]=(1-(g+R))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let u=ks.set(o[0],o[1],o[2]).length();const f=ks.set(o[4],o[5],o[6]).length(),h=ks.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Mi.copy(this);const p=1/u,v=1/f,x=1/h;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=v,Mi.elements[5]*=v,Mi.elements[6]*=v,Mi.elements[8]*=x,Mi.elements[9]*=x,Mi.elements[10]*=x,t.setFromRotationMatrix(Mi),s.x=u,s.y=f,s.z=h,this}makePerspective(e,t,s,o,l,u,f=Oi,h=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(s-o),g=(t+e)/(t-e),E=(s+o)/(s-o);let b,R;if(h)b=l/(u-l),R=u*l/(u-l);else if(f===Oi)b=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===Jl)b=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Oi,h=!1){const p=this.elements,v=2/(t-e),x=2/(s-o),g=-(t+e)/(t-e),E=-(s+o)/(s-o);let b,R;if(h)b=1/(u-l),R=u/(u-l);else if(f===Oi)b=-2/(u-l),R=-(u+l)/(u-l);else if(f===Jl)b=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const ks=new oe,Mi=new nn,OS=new oe(0,0,0),kS=new oe(1,1,1),Cr=new oe,_l=new oe,Kn=new oe,bm=new nn,Am=new ra;class us{constructor(e=0,t=0,s=0,o=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],x=o[2],g=o[6],E=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,E),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,E),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,E));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,E),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class e0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BS=0;const Rm=new oe,Bs=new ra,Qi=new nn,xl=new oe,Xa=new oe,zS=new oe,VS=new ra,Cm=new oe(1,0,0),Pm=new oe(0,1,0),Lm=new oe(0,0,1),Nm={type:"added"},HS={type:"removed"},zs={type:"childadded",child:null},ed={type:"childremoved",child:null};class Zn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new oe,t=new us,s=new ra,o=new oe(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new ut}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Pm,e)}rotateZ(e){return this.rotateOnAxis(Lm,e)}translateOnAxis(e,t){return Rm.copy(e).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Pm,e)}translateZ(e){return this.translateOnAxis(Lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?xl.copy(e):xl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt(Xa,xl,this.up):Qi.lookAt(xl,Xa,this.up),this.quaternion.setFromRotationMatrix(Qi),o&&(Qi.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(Qi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nm),zs.child=e,this.dispatchEvent(zs),zs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HS),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,zS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,VS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),x=u(e.shapes),g=u(e.skeletons),E=u(e.animations),b=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),x.length>0&&(s.shapes=x),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=o,s;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zn.DEFAULT_UP=new oe(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ja extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GS={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const S=t.getJointPose(R,s),_=this._getHandJoint(p,R);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),E=.02,b=.005;p.inputState.pinching&&g>E+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=E-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(GS)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Ja;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const t0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function nd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class It{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Mt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Mt.workingColorSpace){if(e=PS(e,1),t=Et(t,0,1),s=Et(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=nd(u,l,e+1/3),this.g=nd(u,l,e),this.b=nd(u,l,e-1/3)}return Mt.colorSpaceToWorking(this,o),this}setStyle(e,t=li){function s(l){l!==void 0&&parseFloat(l)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const s=t0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Mt.workingToColorSpace(Cn.copy(this),e),Math.round(Et(Cn.r*255,0,255))*65536+Math.round(Et(Cn.g*255,0,255))*256+Math.round(Et(Cn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(Cn.copy(this),t);const s=Cn.r,o=Cn.g,l=Cn.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const x=u-f;switch(p=v<=.5?x/(u+f):x/(2-u-f),u){case s:h=(o-l)/x+(o<l?6:0);break;case o:h=(l-s)/x+2;break;case l:h=(s-o)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=li){Mt.workingToColorSpace(Cn.copy(this),e);const t=Cn.r,s=Cn.g,o=Cn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(Sl);const s=Ku(Pr.h,Sl.h,t),o=Ku(Pr.s,Sl.s,t),l=Ku(Pr.l,Sl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new It;It.NAMES=t0;class WS extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ei=new oe,er=new oe,id=new oe,tr=new oe,Vs=new oe,Hs=new oe,Dm=new oe,rd=new oe,sd=new oe,ad=new oe,od=new Qt,ld=new Qt,cd=new Qt;class Ti{constructor(e=new oe,t=new oe,s=new oe){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),Ei.subVectors(e,t),o.cross(Ei);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){Ei.subVectors(o,t),er.subVectors(s,t),id.subVectors(e,t);const u=Ei.dot(Ei),f=Ei.dot(er),h=Ei.dot(id),p=er.dot(er),v=er.dot(id),x=u*p-f*f;if(x===0)return l.set(0,0,0),null;const g=1/x,E=(p*h-f*v)*g,b=(u*v-f*h)*g;return l.set(1-E-b,b,E)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,t,s,o,l,u,f,h){return this.getBarycoord(e,t,s,o,tr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,tr.x),h.addScaledVector(u,tr.y),h.addScaledVector(f,tr.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return od.setScalar(0),ld.setScalar(0),cd.setScalar(0),od.fromBufferAttribute(e,t),ld.fromBufferAttribute(e,s),cd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(od,l.x),u.addScaledVector(ld,l.y),u.addScaledVector(cd,l.z),u}static isFrontFacing(e,t,s,o){return Ei.subVectors(s,t),er.subVectors(e,t),Ei.cross(er).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Ei.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Ti.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;Vs.subVectors(o,s),Hs.subVectors(l,s),rd.subVectors(e,s);const h=Vs.dot(rd),p=Hs.dot(rd);if(h<=0&&p<=0)return t.copy(s);sd.subVectors(e,o);const v=Vs.dot(sd),x=Hs.dot(sd);if(v>=0&&x<=v)return t.copy(o);const g=h*x-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(s).addScaledVector(Vs,u);ad.subVectors(e,l);const E=Vs.dot(ad),b=Hs.dot(ad);if(b>=0&&E<=b)return t.copy(l);const R=E*p-h*b;if(R<=0&&p>=0&&b<=0)return f=p/(p-b),t.copy(s).addScaledVector(Hs,f);const S=v*b-E*x;if(S<=0&&x-v>=0&&E-b>=0)return Dm.subVectors(l,o),f=(x-v)/(x-v+(E-b)),t.copy(o).addScaledVector(Dm,f);const _=1/(S+R+g);return u=R*_,f=g*_,t.copy(s).addScaledVector(Vs,u).addScaledVector(Hs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,wi):wi.fromBufferAttribute(l,u),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yl.copy(s.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),Ml.subVectors(this.max,Ya),Gs.subVectors(e.a,Ya),Ws.subVectors(e.b,Ya),Xs.subVectors(e.c,Ya),Lr.subVectors(Ws,Gs),Nr.subVectors(Xs,Ws),es.subVectors(Gs,Xs);let t=[0,-Lr.z,Lr.y,0,-Nr.z,Nr.y,0,-es.z,es.y,Lr.z,0,-Lr.x,Nr.z,0,-Nr.x,es.z,0,-es.x,-Lr.y,Lr.x,0,-Nr.y,Nr.x,0,-es.y,es.x,0];return!ud(t,Gs,Ws,Xs,Ml)||(t=[1,0,0,0,1,0,0,0,1],!ud(t,Gs,Ws,Xs,Ml))?!1:(El.crossVectors(Lr,Nr),t=[El.x,El.y,El.z],ud(t,Gs,Ws,Xs,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nr=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],wi=new oe,yl=new ao,Gs=new oe,Ws=new oe,Xs=new oe,Lr=new oe,Nr=new oe,es=new oe,Ya=new oe,Ml=new oe,El=new oe,ts=new oe;function ud(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){ts.fromArray(r,l);const f=o.x*Math.abs(ts.x)+o.y*Math.abs(ts.y)+o.z*Math.abs(ts.z),h=e.dot(ts),p=t.dot(ts),v=s.dot(ts);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const an=new oe,wl=new Tt;let XS=0;class lr extends ds{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=TS,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Wa(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),s=Gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),s=Gn(s,this.array),o=Gn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),s=Gn(s,this.array),o=Gn(o,this.array),l=Gn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class n0 extends lr{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class i0 extends lr{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class di extends lr{constructor(e,t,s){super(new Float32Array(e),t,s)}}const YS=new ao,qa=new oe,dd=new oe;class bf{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):YS.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qa.subVectors(e,this.center);const t=qa.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(qa,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qa.copy(e.center).add(dd)),this.expandByPoint(qa.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qS=0;const oi=new nn,fd=new Zn,Ys=new oe,$n=new ao,ja=new ao,vn=new oe;class Hi extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bS(e)?i0:n0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ut().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,s){return oi.makeTranslation(e,t,s),this.applyMatrix4(oi),this}scale(e,t,s){return oi.makeScale(e,t,s),this.applyMatrix4(oi),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new di(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];ja.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors($n.min,ja.min),$n.expandByPoint(vn),vn.addVectors($n.max,ja.max),$n.expandByPoint(vn)):($n.expandByPoint(ja.min),$n.expandByPoint(ja.max))}$n.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)vn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(vn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)vn.fromBufferAttribute(f,p),h&&(Ys.fromBufferAttribute(e,p),vn.add(Ys)),o=Math.max(o,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==s.count)&&(u=new lr(new Float32Array(4*s.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let y=0;y<s.count;y++)f[y]=new oe,h[y]=new oe;const p=new oe,v=new oe,x=new oe,g=new Tt,E=new Tt,b=new Tt,R=new oe,S=new oe;function _(y,N,B){p.fromBufferAttribute(s,y),v.fromBufferAttribute(s,N),x.fromBufferAttribute(s,B),g.fromBufferAttribute(l,y),E.fromBufferAttribute(l,N),b.fromBufferAttribute(l,B),v.sub(p),x.sub(p),E.sub(g),b.sub(g);const X=1/(E.x*b.y-b.x*E.y);isFinite(X)&&(R.copy(v).multiplyScalar(b.y).addScaledVector(x,-E.y).multiplyScalar(X),S.copy(x).multiplyScalar(E.x).addScaledVector(v,-b.x).multiplyScalar(X),f[y].add(R),f[N].add(R),f[B].add(R),h[y].add(S),h[N].add(S),h[B].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let y=0,N=L.length;y<N;++y){const B=L[y],X=B.start,$=B.count;for(let se=X,Y=X+$;se<Y;se+=3)_(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const O=new oe,A=new oe,C=new oe,P=new oe;function F(y){C.fromBufferAttribute(o,y),P.copy(C);const N=f[y];O.copy(N),O.sub(C.multiplyScalar(C.dot(N))).normalize(),A.crossVectors(P,N);const X=A.dot(h[y])<0?-1:1;u.setXYZW(y,O.x,O.y,O.z,X)}for(let y=0,N=L.length;y<N;++y){const B=L[y],X=B.start,$=B.count;for(let se=X,Y=X+$;se<Y;se+=3)F(e.getX(se+0)),F(e.getX(se+1)),F(e.getX(se+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new lr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const o=new oe,l=new oe,u=new oe,f=new oe,h=new oe,p=new oe,v=new oe,x=new oe;if(e)for(let g=0,E=e.count;g<E;g+=3){const b=e.getX(g+0),R=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,S),v.subVectors(u,l),x.subVectors(o,l),v.cross(x),f.fromBufferAttribute(s,b),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),f.add(v),h.add(v),p.add(v),s.setXYZ(b,f.x,f.y,f.z),s.setXYZ(R,h.x,h.y,h.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,E=t.count;g<E;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),x.subVectors(o,l),v.cross(x),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,x=f.normalized,g=new p.constructor(h.length*v);let E=0,b=0;for(let R=0,S=h.length;R<S;R++){f.isInterleavedBufferAttribute?E=h[R]*f.data.stride+f.offset:E=h[R]*v;for(let _=0;_<v;_++)g[b++]=p[E++]}return new lr(g,v,x)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,x=p.length;v<x;v++){const g=p[v],E=e(g,s);h.push(E)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let x=0,g=p.length;x<g;x++){const E=p[x];v.push(E.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let g=0,E=x.length;g<E;g++)v.push(x[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hd=new oe,jS=new oe,KS=new ut;class Ir{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=hd.subVectors(s,t).cross(jS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(hd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||KS.getNormalMatrix(e),o=this.coplanarPoint(hd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let $S=0;class nc extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=so(),this.name="",this.type="Material",this.blending=eo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ig,this.blendDst=Ug,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_S,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qu,this.stencilZFail=qu,this.stencilZPass=qu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new It().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new Ir().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Tt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Tt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ir=new oe,pd=new oe,Tl=new oe,bl=new oe;class ZS{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ir.copy(this.origin).addScaledVector(this.direction,t),ir.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){pd.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),bl.copy(this.origin).sub(pd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),f=bl.dot(this.direction),h=-bl.dot(Tl),p=bl.lengthSq(),v=Math.abs(1-u*u);let x,g,E,b;if(v>0)if(x=u*h-f,g=u*f-h,b=l*v,x>=0)if(g>=-b)if(g<=b){const R=1/v;x*=R,g*=R,E=x*(x+u*g+2*f)+g*(u*x+g+2*h)+p}else g=l,x=Math.max(0,-(u*g+f)),E=-x*x+g*(g+2*h)+p;else g=-l,x=Math.max(0,-(u*g+f)),E=-x*x+g*(g+2*h)+p;else g<=-b?(x=Math.max(0,-(-u*l+f)),g=x>0?-l:Math.min(Math.max(-l,-h),l),E=-x*x+g*(g+2*h)+p):g<=b?(x=0,g=Math.min(Math.max(-l,-h),l),E=g*(g+2*h)+p):(x=Math.max(0,-(u*l+f)),g=x>0?l:Math.min(Math.max(-l,-h),l),E=-x*x+g*(g+2*h)+p);else g=u>0?-l:l,x=Math.max(0,-(u*g+f)),E=-x*x+g*(g+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(pd).addScaledVector(Tl,g),E}intersectSphere(e,t){if(e.radius<0)return null;ir.subVectors(e.center,this.origin);const s=ir.dot(this.direction),o=ir.dot(ir)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),x>=0?(f=(e.min.z-g.z)*x,h=(e.max.z-g.z)*x):(f=(e.max.z-g.z)*x,h=(e.min.z-g.z)*x),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,ir)!==null}intersectTriangle(e,t,s,o,l){const u=this.origin,f=this.direction,h=f.x,p=f.y,v=f.z,x=e.x-u.x,g=e.y-u.y,E=e.z-u.z,b=t.x-u.x,R=t.y-u.y,S=t.z-u.z,_=s.x-u.x,L=s.y-u.y,O=s.z-u.z,A=Math.abs(h),C=Math.abs(p),P=Math.abs(v);let F,y,N,B,X,$,se,Y,ee,fe,Q,k;if(A>=C&&A>=P?(N=h,$=x,ee=b,k=_,h>=0?(F=p,y=v,B=g,X=E,se=R,Y=S,fe=L,Q=O):(F=v,y=p,B=E,X=g,se=S,Y=R,fe=O,Q=L)):C>=P?(N=p,$=g,ee=R,k=L,p>=0?(F=v,y=h,B=E,X=x,se=S,Y=b,fe=O,Q=_):(F=h,y=v,B=x,X=E,se=b,Y=S,fe=_,Q=O)):(N=v,$=E,ee=S,k=O,v>=0?(F=h,y=p,B=x,X=g,se=b,Y=R,fe=_,Q=L):(F=p,y=h,B=g,X=x,se=R,Y=b,fe=L,Q=_)),N===0)return null;const q=F/N,j=y/N,D=1/N,re=B-q*$,ve=X-j*$,Le=se-q*ee,ke=Y-j*ee,He=fe-q*k,Z=Q-j*k,de=He*ke-Z*Le,Me=re*Z-ve*He,je=Le*ve-ke*re;if(o){if(de<0||Me<0||je<0)return null}else if((de<0||Me<0||je<0)&&(de>0||Me>0||je>0))return null;const Ie=de+Me+je;if(Ie===0)return null;const lt=D*(de*$+Me*ee+je*k);return(Ie>0?lt<0:lt>0)?null:this.at(lt/Ie,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Af extends nc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=Fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Im=new nn,ns=new ZS,Al=new bf,Um=new oe,Rl=new oe,Cl=new oe,Pl=new oe,md=new oe,Ll=new oe,Fm=new oe,Nl=new oe;class Ri extends Zn{constructor(e=new Hi,t=new Af){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ll.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],x=l[h];v!==0&&(md.fromBufferAttribute(x,e),u?Ll.addScaledVector(md,v):Ll.addScaledVector(md.sub(t),v))}t.add(Ll)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Al.copy(s.boundingSphere),Al.applyMatrix4(l),ns.copy(e.ray).recast(e.near),!(Al.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Al,Um)===null||ns.origin.distanceToSquared(Um)>(e.far-e.near)**2))&&(Im.copy(l).invert(),ns.copy(e.ray).applyMatrix4(Im),!(s.boundingBox!==null&&ns.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,g=l.groups,E=l.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,R=g.length;b<R;b++){const S=g[b],_=u[S.materialIndex],L=Math.max(S.start,E.start),O=Math.min(f.count,Math.min(S.start+S.count,E.start+E.count));for(let A=L,C=O;A<C;A+=3){const P=f.getX(A),F=f.getX(A+1),y=f.getX(A+2);o=Dl(this,_,e,s,p,v,x,P,F,y),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const b=Math.max(0,E.start),R=Math.min(f.count,E.start+E.count);for(let S=b,_=R;S<_;S+=3){const L=f.getX(S),O=f.getX(S+1),A=f.getX(S+2);o=Dl(this,u,e,s,p,v,x,L,O,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let b=0,R=g.length;b<R;b++){const S=g[b],_=u[S.materialIndex],L=Math.max(S.start,E.start),O=Math.min(h.count,Math.min(S.start+S.count,E.start+E.count));for(let A=L,C=O;A<C;A+=3){const P=A,F=A+1,y=A+2;o=Dl(this,_,e,s,p,v,x,P,F,y),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const b=Math.max(0,E.start),R=Math.min(h.count,E.start+E.count);for(let S=b,_=R;S<_;S+=3){const L=S,O=S+1,A=S+2;o=Dl(this,u,e,s,p,v,x,L,O,A),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function JS(r,e,t,s,o,l,u,f){let h;if(e.side===Wn?h=s.intersectTriangle(u,l,o,!0,f):h=s.intersectTriangle(o,l,u,e.side===os,f),h===null)return null;Nl.copy(f),Nl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Nl);return p<t.near||p>t.far?null:{distance:p,point:Nl.clone(),object:r}}function Dl(r,e,t,s,o,l,u,f,h,p){r.getVertexPosition(f,Rl),r.getVertexPosition(h,Cl),r.getVertexPosition(p,Pl);const v=JS(r,e,t,s,Rl,Cl,Pl,Fm);if(v){const x=new oe;Ti.getBarycoord(Fm,Rl,Cl,Pl,x),o&&(v.uv=Ti.getInterpolatedAttribute(o,f,h,p,x,new Tt)),l&&(v.uv1=Ti.getInterpolatedAttribute(l,f,h,p,x,new Tt)),u&&(v.normal=Ti.getInterpolatedAttribute(u,f,h,p,x,new oe),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new oe,materialIndex:0};Ti.getNormal(Rl,Cl,Pl,g.normal),v.face=g,v.barycoord=x}return v}class QS extends Fn{constructor(e=null,t=1,s=1,o,l,u,f,h,p=Mn,v=Mn,x,g){super(null,u,f,h,p,v,o,l,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const is=new bf,ey=new Tt(.5,.5),Il=new oe;class r0{constructor(e=new Ir,t=new Ir,s=new Ir,o=new Ir,l=new Ir,u=new Ir){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Oi,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],x=l[5],g=l[6],E=l[7],b=l[8],R=l[9],S=l[10],_=l[11],L=l[12],O=l[13],A=l[14],C=l[15];if(o[0].setComponents(p-u,E-v,_-b,C-L).normalize(),o[1].setComponents(p+u,E+v,_+b,C+L).normalize(),o[2].setComponents(p+f,E+x,_+R,C+O).normalize(),o[3].setComponents(p-f,E-x,_-R,C-O).normalize(),s)o[4].setComponents(h,g,S,A).normalize(),o[5].setComponents(p-h,E-g,_-S,C-A).normalize();else if(o[4].setComponents(p-h,E-g,_-S,C-A).normalize(),t===Oi)o[5].setComponents(p+h,E+g,_+S,C+A).normalize();else if(t===Jl)o[5].setComponents(h,g,S,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);const t=ey.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Il.x=o.normal.x>0?e.max.x:e.min.x,Il.y=o.normal.y>0?e.max.y:e.min.y,Il.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class s0 extends Fn{constructor(e=[],t=ls,s,o,l,u,f,h,p,v){super(e,t,s,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ro extends Fn{constructor(e,t,s=Bi,o,l,u,f=Mn,h=Mn,p,v=cr,x=1){if(v!==cr&&v!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,o,l,u,f,h,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ty extends ro{constructor(e,t=Bi,s=ls,o,l,u=Mn,f=Mn,h,p=cr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,s,o,l,u,f,h,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class a0 extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oo extends Hi{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],x=[];let g=0,E=0;b("z","y","x",-1,-1,s,t,e,u,l,0),b("z","y","x",1,-1,s,t,-e,u,l,1),b("x","z","y",1,1,e,s,t,o,u,2),b("x","z","y",1,-1,e,s,-t,o,u,3),b("x","y","z",1,-1,e,t,s,o,l,4),b("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new di(p,3)),this.setAttribute("normal",new di(v,3)),this.setAttribute("uv",new di(x,2));function b(R,S,_,L,O,A,C,P,F,y,N){const B=A/F,X=C/y,$=A/2,se=C/2,Y=P/2,ee=F+1,fe=y+1;let Q=0,k=0;const q=new oe;for(let j=0;j<fe;j++){const D=j*X-se;for(let re=0;re<ee;re++){const ve=re*B-$;q[R]=ve*L,q[S]=D*O,q[_]=Y,p.push(q.x,q.y,q.z),q[R]=0,q[S]=0,q[_]=P>0?1:-1,v.push(q.x,q.y,q.z),x.push(re/F),x.push(1-j/y),Q+=1}}for(let j=0;j<y;j++)for(let D=0;D<F;D++){const re=g+D+ee*j,ve=g+D+ee*(j+1),Le=g+(D+1)+ee*(j+1),ke=g+(D+1)+ee*j;h.push(re,ve,ke),h.push(ve,Le,ke),k+=6}f.addGroup(E,k,N),E+=k,g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lo extends Hi{constructor(e=[],t=[],s=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:o};const l=[],u=[];f(o),p(s),v(),this.setAttribute("position",new di(l,3)),this.setAttribute("normal",new di(l.slice(),3)),this.setAttribute("uv",new di(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(L){const O=new oe,A=new oe,C=new oe;for(let P=0;P<t.length;P+=3)E(t[P+0],O),E(t[P+1],A),E(t[P+2],C),h(O,A,C,L)}function h(L,O,A,C){const P=C+1,F=[];for(let y=0;y<=P;y++){F[y]=[];const N=L.clone().lerp(A,y/P),B=O.clone().lerp(A,y/P),X=P-y;for(let $=0;$<=X;$++)$===0&&y===P?F[y][$]=N:F[y][$]=N.clone().lerp(B,$/X)}for(let y=0;y<P;y++)for(let N=0;N<2*(P-y)-1;N++){const B=Math.floor(N/2);N%2===0?(g(F[y][B+1]),g(F[y+1][B]),g(F[y][B])):(g(F[y][B+1]),g(F[y+1][B+1]),g(F[y+1][B]))}}function p(L){const O=new oe;for(let A=0;A<l.length;A+=3)O.x=l[A+0],O.y=l[A+1],O.z=l[A+2],O.normalize().multiplyScalar(L),l[A+0]=O.x,l[A+1]=O.y,l[A+2]=O.z}function v(){const L=new oe;for(let O=0;O<l.length;O+=3){L.x=l[O+0],L.y=l[O+1],L.z=l[O+2];const A=S(L)/2/Math.PI+.5,C=_(L)/Math.PI+.5;u.push(A,1-C)}b(),x()}function x(){for(let L=0;L<u.length;L+=6){const O=u[L+0],A=u[L+2],C=u[L+4],P=Math.max(O,A,C),F=Math.min(O,A,C);P>.9&&F<.1&&(O<.2&&(u[L+0]+=1),A<.2&&(u[L+2]+=1),C<.2&&(u[L+4]+=1))}}function g(L){l.push(L.x,L.y,L.z)}function E(L,O){const A=L*3;O.x=e[A+0],O.y=e[A+1],O.z=e[A+2]}function b(){const L=new oe,O=new oe,A=new oe,C=new oe,P=new Tt,F=new Tt,y=new Tt;for(let N=0,B=0;N<l.length;N+=9,B+=6){L.set(l[N+0],l[N+1],l[N+2]),O.set(l[N+3],l[N+4],l[N+5]),A.set(l[N+6],l[N+7],l[N+8]),P.set(u[B+0],u[B+1]),F.set(u[B+2],u[B+3]),y.set(u[B+4],u[B+5]),C.copy(L).add(O).add(A).divideScalar(3);const X=S(C);R(P,B+0,L,X),R(F,B+2,O,X),R(y,B+4,A,X)}}function R(L,O,A,C){C<0&&L.x===1&&(u[O]=L.x-1),A.x===0&&A.z===0&&(u[O]=C/2/Math.PI+.5)}function S(L){return Math.atan2(L.z,-L.x)}function _(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.vertices,e.indices,e.radius,e.detail)}}class Rf extends lo{constructor(e=1,t=0){const s=(1+Math.sqrt(5))/2,o=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Rf(e.radius,e.detail)}}class Cf extends lo{constructor(e=1,t=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cf(e.radius,e.detail)}}class ic extends Hi{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,v=h+1,x=e/f,g=t/h,E=[],b=[],R=[],S=[];for(let _=0;_<v;_++){const L=_*g-u;for(let O=0;O<p;O++){const A=O*x-l;b.push(A,-L,0),R.push(0,0,1),S.push(O/f),S.push(1-_/h)}}for(let _=0;_<h;_++)for(let L=0;L<f;L++){const O=L+p*_,A=L+p*(_+1),C=L+1+p*(_+1),P=L+1+p*_;E.push(O,A,P),E.push(A,C,P)}this.setIndex(E),this.setAttribute("position",new di(b,3)),this.setAttribute("normal",new di(R,3)),this.setAttribute("uv",new di(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pf extends lo{constructor(e=1,t=0){const s=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],o=[2,1,0,0,3,2,1,3,0,2,3,1];super(s,o,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pf(e.radius,e.detail)}}function ta(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(Om(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(Om(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Un(r){const e={};for(let t=0;t<r.length;t++){const s=ta(r[t]);for(const o in s)e[o]=s[o]}return e}function Om(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function ny(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function o0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const iy={clone:ta,merge:Un};var ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends nc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new It().setHex(o.value);break;case"v2":this.uniforms[s].value=new Tt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new oe().fromArray(o.value);break;case"v4":this.uniforms[s].value=new Qt().fromArray(o.value);break;case"m3":this.uniforms[s].value=new ut().fromArray(o.value);break;case"m4":this.uniforms[s].value=new nn().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ay extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oy extends nc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ly extends nc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ul=new oe,Fl=new ra,Di=new oe;class l0 extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ul,Fl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Di.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(Ul,Fl,Di),Di.x===1&&Di.y===1&&Di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ul,Fl,Di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new oe,km=new Tt,Bm=new Tt;class ci extends l0{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uf*2*Math.atan(Math.tan(ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,km,Bm),t.subVectors(Bm,km)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ju*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class c0 extends l0{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qs=-90,js=1;class cy extends Zn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ci(qs,js,e,t);o.layers=this.layers,this.add(o);const l=new ci(qs,js,e,t);l.layers=this.layers,this.add(l);const u=new ci(qs,js,e,t);u.layers=this.layers,this.add(u);const f=new ci(qs,js,e,t);f.layers=this.layers,this.add(f);const h=new ci(qs,js,e,t);h.layers=this.layers,this.add(h);const p=new ci(qs,js,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Jl)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,g,E),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class uy extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class dy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ot("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class u0{static{u0.prototype.isMatrix2=!0}constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}}function zm(r,e,t,s){const o=fy(s);switch(t){case Kg:return r*e;case Zg:return r*e/o.components*o.byteLength;case Sf:return r*e/o.components*o.byteLength;case cs:return r*e*2/o.components*o.byteLength;case yf:return r*e*2/o.components*o.byteLength;case $g:return r*e*3/o.components*o.byteLength;case bi:return r*e*4/o.components*o.byteLength;case Mf:return r*e*4/o.components*o.byteLength;case Vl:case Hl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Id:case Fd:return Math.max(r,16)*Math.max(e,8)/4;case Dd:case Ud:return Math.max(r,8)*Math.max(e,8)/2;case Od:case kd:case zd:case Vd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bd:case jl:case Hd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ef:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case tf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case nf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case rf:case sf:case af:return Math.ceil(r/4)*Math.ceil(e/4)*16;case of:case lf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Kl:case cf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(r){switch(r){case ui:case Xg:return{byteLength:1,components:1};case no:case Yg:case zi:return{byteLength:2,components:1};case _f:case xf:return{byteLength:2,components:4};case Bi:case vf:case Fi:return{byteLength:4,components:1};case qg:case jg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gf}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function d0(){let r=null,e=!1,t=null,s=null;function o(l,u){s=r.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function hy(r){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,x=p.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,p,v),f.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function s(f,h,p){const v=h.array,x=h.updateRanges;if(r.bindBuffer(p,f),x.length===0)r.bufferSubData(p,0,v);else{x.sort((E,b)=>E.start-b.start);let g=0;for(let E=1;E<x.length;E++){const b=x[g],R=x[E];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++g,x[g]=R)}x.length=g+1;for(let E=0,b=x.length;E<b;E++){const R=x[E];r.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,my=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ay=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ky=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,By=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,aM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,OM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,WM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ME=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,EE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,DE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:py,alphahash_pars_fragment:my,alphamap_fragment:gy,alphamap_pars_fragment:vy,alphatest_fragment:_y,alphatest_pars_fragment:xy,aomap_fragment:Sy,aomap_pars_fragment:yy,batching_pars_vertex:My,batching_vertex:Ey,begin_vertex:wy,beginnormal_vertex:Ty,bsdfs:by,iridescence_fragment:Ay,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Ny,color_fragment:Dy,color_pars_fragment:Iy,color_pars_vertex:Uy,color_vertex:Fy,common:Oy,cube_uv_reflection_fragment:ky,defaultnormal_vertex:By,displacementmap_pars_vertex:zy,displacementmap_vertex:Vy,emissivemap_fragment:Hy,emissivemap_pars_fragment:Gy,colorspace_fragment:Wy,colorspace_pars_fragment:Xy,envmap_fragment:Yy,envmap_common_pars_fragment:qy,envmap_pars_fragment:jy,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:aM,envmap_vertex:$y,fog_vertex:Zy,fog_pars_vertex:Jy,fog_fragment:Qy,fog_pars_fragment:eM,gradientmap_pars_fragment:tM,lightmap_pars_fragment:nM,lights_lambert_fragment:iM,lights_lambert_pars_fragment:rM,lights_pars_begin:sM,lights_toon_fragment:oM,lights_toon_pars_fragment:lM,lights_phong_fragment:cM,lights_phong_pars_fragment:uM,lights_physical_fragment:dM,lights_physical_pars_fragment:fM,lights_fragment_begin:hM,lights_fragment_maps:pM,lights_fragment_end:mM,lightprobes_pars_fragment:gM,logdepthbuf_fragment:vM,logdepthbuf_pars_fragment:_M,logdepthbuf_pars_vertex:xM,logdepthbuf_vertex:SM,map_fragment:yM,map_pars_fragment:MM,map_particle_fragment:EM,map_particle_pars_fragment:wM,metalnessmap_fragment:TM,metalnessmap_pars_fragment:bM,morphinstance_vertex:AM,morphcolor_vertex:RM,morphnormal_vertex:CM,morphtarget_pars_vertex:PM,morphtarget_vertex:LM,normal_fragment_begin:NM,normal_fragment_maps:DM,normal_pars_fragment:IM,normal_pars_vertex:UM,normal_vertex:FM,normalmap_pars_fragment:OM,clearcoat_normal_fragment_begin:kM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:zM,iridescence_pars_fragment:VM,opaque_fragment:HM,packing:GM,premultiplied_alpha_fragment:WM,project_vertex:XM,dithering_fragment:YM,dithering_pars_fragment:qM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:KM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:ZM,shadowmap_vertex:JM,shadowmask_pars_fragment:QM,skinbase_vertex:eE,skinning_pars_vertex:tE,skinning_vertex:nE,skinnormal_vertex:iE,specularmap_fragment:rE,specularmap_pars_fragment:sE,tonemapping_fragment:aE,tonemapping_pars_fragment:oE,transmission_fragment:lE,transmission_pars_fragment:cE,uv_pars_fragment:uE,uv_pars_vertex:dE,uv_vertex:fE,worldpos_vertex:hE,background_vert:pE,background_frag:mE,backgroundCube_vert:gE,backgroundCube_frag:vE,cube_vert:_E,cube_frag:xE,depth_vert:SE,depth_frag:yE,distance_vert:ME,distance_frag:EE,equirect_vert:wE,equirect_frag:TE,linedashed_vert:bE,linedashed_frag:AE,meshbasic_vert:RE,meshbasic_frag:CE,meshlambert_vert:PE,meshlambert_frag:LE,meshmatcap_vert:NE,meshmatcap_frag:DE,meshnormal_vert:IE,meshnormal_frag:UE,meshphong_vert:FE,meshphong_frag:OE,meshphysical_vert:kE,meshphysical_frag:BE,meshtoon_vert:zE,meshtoon_frag:VE,points_vert:HE,points_frag:GE,shadow_vert:WE,shadow_frag:XE,sprite_vert:YE,sprite_frag:qE},Fe={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ui={basic:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Un([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Un([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Un([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new It(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Un([Fe.points,Fe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Un([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Un([Fe.common,Fe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Un([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Un([Fe.sprite,Fe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Un([Fe.common,Fe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Un([Fe.lights,Fe.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ui.physical={uniforms:Un([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ol={r:0,b:0,g:0},jE=new nn,f0=new ut;f0.set(-1,0,0,0,1,0,0,0,1);function KE(r,e,t,s,o,l){const u=new It(0);let f=o===!0?0:1,h,p,v=null,x=0,g=null;function E(L){let O=L.isScene===!0?L.background:null;if(O&&O.isTexture){const A=L.backgroundBlurriness>0;O=e.get(O,A)}return O}function b(L){let O=!1;const A=E(L);A===null?S(u,f):A&&A.isColor&&(S(A,1),O=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,l):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(L,O){const A=E(O);A&&(A.isCubeTexture||A.mapping===tc)?(p===void 0&&(p=new Ri(new oo(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:ta(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(C,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(jE.makeRotationFromEuler(O.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(f0),p.material.toneMapped=Mt.getTransfer(A.colorSpace)!==Ot,(v!==A||x!==A.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=A,x=A.version,g=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(h===void 0&&(h=new Ri(new ic(2,2),new Vi({name:"BackgroundMaterial",uniforms:ta(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=A,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(A.colorSpace)!==Ot,A.matrixAutoUpdate===!0&&A.updateMatrix(),h.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||x!==A.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,v=A,x=A.version,g=r.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function S(L,O){L.getRGB(Ol,o0(r)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,O,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(L,O=1){u.set(L),f=O,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,S(u,f)},render:b,addToRenderList:R,dispose:_}}function $E(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=g(null);let l=o,u=!1;function f(X,$,se,Y,ee){let fe=!1;const Q=x(X,Y,se,$);l!==Q&&(l=Q,p(l.object)),fe=E(X,Y,se,ee),fe&&b(X,Y,se,ee),ee!==null&&e.update(ee,r.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,A(X,$,se,Y),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function h(){return r.createVertexArray()}function p(X){return r.bindVertexArray(X)}function v(X){return r.deleteVertexArray(X)}function x(X,$,se,Y){const ee=Y.wireframe===!0;let fe=s[$.id];fe===void 0&&(fe={},s[$.id]=fe);const Q=X.isInstancedMesh===!0?X.id:0;let k=fe[Q];k===void 0&&(k={},fe[Q]=k);let q=k[se.id];q===void 0&&(q={},k[se.id]=q);let j=q[ee];return j===void 0&&(j=g(h()),q[ee]=j),j}function g(X){const $=[],se=[],Y=[];for(let ee=0;ee<t;ee++)$[ee]=0,se[ee]=0,Y[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:se,attributeDivisors:Y,object:X,attributes:{},index:null}}function E(X,$,se,Y){const ee=l.attributes,fe=$.attributes;let Q=0;const k=se.getAttributes();for(const q in k)if(k[q].location>=0){const D=ee[q];let re=fe[q];if(re===void 0&&(q==="instanceMatrix"&&X.instanceMatrix&&(re=X.instanceMatrix),q==="instanceColor"&&X.instanceColor&&(re=X.instanceColor)),D===void 0||D.attribute!==re||re&&D.data!==re.data)return!0;Q++}return l.attributesNum!==Q||l.index!==Y}function b(X,$,se,Y){const ee={},fe=$.attributes;let Q=0;const k=se.getAttributes();for(const q in k)if(k[q].location>=0){let D=fe[q];D===void 0&&(q==="instanceMatrix"&&X.instanceMatrix&&(D=X.instanceMatrix),q==="instanceColor"&&X.instanceColor&&(D=X.instanceColor));const re={};re.attribute=D,D&&D.data&&(re.data=D.data),ee[q]=re,Q++}l.attributes=ee,l.attributesNum=Q,l.index=Y}function R(){const X=l.newAttributes;for(let $=0,se=X.length;$<se;$++)X[$]=0}function S(X){_(X,0)}function _(X,$){const se=l.newAttributes,Y=l.enabledAttributes,ee=l.attributeDivisors;se[X]=1,Y[X]===0&&(r.enableVertexAttribArray(X),Y[X]=1),ee[X]!==$&&(r.vertexAttribDivisor(X,$),ee[X]=$)}function L(){const X=l.newAttributes,$=l.enabledAttributes;for(let se=0,Y=$.length;se<Y;se++)$[se]!==X[se]&&(r.disableVertexAttribArray(se),$[se]=0)}function O(X,$,se,Y,ee,fe,Q){Q===!0?r.vertexAttribIPointer(X,$,se,ee,fe):r.vertexAttribPointer(X,$,se,Y,ee,fe)}function A(X,$,se,Y){R();const ee=Y.attributes,fe=se.getAttributes(),Q=$.defaultAttributeValues;for(const k in fe){const q=fe[k];if(q.location>=0){let j=ee[k];if(j===void 0&&(k==="instanceMatrix"&&X.instanceMatrix&&(j=X.instanceMatrix),k==="instanceColor"&&X.instanceColor&&(j=X.instanceColor)),j!==void 0){const D=j.normalized,re=j.itemSize,ve=e.get(j);if(ve===void 0)continue;const Le=ve.buffer,ke=ve.type,He=ve.bytesPerElement,Z=ke===r.INT||ke===r.UNSIGNED_INT||j.gpuType===vf;if(j.isInterleavedBufferAttribute){const de=j.data,Me=de.stride,je=j.offset;if(de.isInstancedInterleavedBuffer){for(let Ie=0;Ie<q.locationSize;Ie++)_(q.location+Ie,de.meshPerAttribute);X.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ie=0;Ie<q.locationSize;Ie++)S(q.location+Ie);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let Ie=0;Ie<q.locationSize;Ie++)O(q.location+Ie,re/q.locationSize,ke,D,Me*He,(je+re/q.locationSize*Ie)*He,Z)}else{if(j.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)_(q.location+de,j.meshPerAttribute);X.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let de=0;de<q.locationSize;de++)S(q.location+de);r.bindBuffer(r.ARRAY_BUFFER,Le);for(let de=0;de<q.locationSize;de++)O(q.location+de,re/q.locationSize,ke,D,re*He,re/q.locationSize*de*He,Z)}}else if(Q!==void 0){const D=Q[k];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(q.location,D);break;case 3:r.vertexAttrib3fv(q.location,D);break;case 4:r.vertexAttrib4fv(q.location,D);break;default:r.vertexAttrib1fv(q.location,D)}}}}L()}function C(){N();for(const X in s){const $=s[X];for(const se in $){const Y=$[se];for(const ee in Y){const fe=Y[ee];for(const Q in fe)v(fe[Q].object),delete fe[Q];delete Y[ee]}}delete s[X]}}function P(X){if(s[X.id]===void 0)return;const $=s[X.id];for(const se in $){const Y=$[se];for(const ee in Y){const fe=Y[ee];for(const Q in fe)v(fe[Q].object),delete fe[Q];delete Y[ee]}}delete s[X.id]}function F(X){for(const $ in s){const se=s[$];for(const Y in se){const ee=se[Y];if(ee[X.id]===void 0)continue;const fe=ee[X.id];for(const Q in fe)v(fe[Q].object),delete fe[Q];delete ee[X.id]}}}function y(X){for(const $ in s){const se=s[$],Y=X.isInstancedMesh===!0?X.id:0,ee=se[Y];if(ee!==void 0){for(const fe in ee){const Q=ee[fe];for(const k in Q)v(Q[k].object),delete Q[k];delete ee[fe]}delete se[Y],Object.keys(se).length===0&&delete s[$]}}}function N(){B(),u=!0,l!==o&&(l=o,p(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfObject:y,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:S,disableUnusedAttributes:L}}function ZE(r,e,t){let s;function o(h){s=h}function l(h,p){r.drawArrays(s,h,p),t.update(p,s,1)}function u(h,p,v){v!==0&&(r.drawArraysInstanced(s,h,p,v),t.update(p,s,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,p,0,v);let g=0;for(let E=0;E<v;E++)g+=p[E];t.update(g,s,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function JE(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==bi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const y=F===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ui&&F!==Fi&&!y&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(ot("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:O,maxFragmentUniforms:A,maxSamples:C,samples:P}}function QE(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new Ir,f=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const E=x.length!==0||g||s!==0||o;return o=g,s=x.length,E},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){t=v(x,g,0)},this.setState=function(x,g,E){const b=x.clippingPlanes,R=x.clipIntersection,S=x.clipShadows,_=r.get(x);if(!o||b===null||b.length===0||l&&!S)l?v(null):p();else{const L=l?0:s,O=L*4;let A=_.clippingState||null;h.value=A,A=v(b,g,O,E);for(let C=0;C!==O;++C)A[C]=t[C];_.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(x,g,E,b){const R=x!==null?x.length:0;let S=null;if(R!==0){if(S=h.value,b!==!0||S===null){const _=E+R*4,L=g.matrixWorldInverse;f.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let O=0,A=E;O!==R;++O,A+=4)u.copy(x[O]).applyMatrix4(L,f),u.normal.toArray(S,A),S[A+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const Zs=4,ew=6,tw=20,nw=256,Ka=new c0,Vm=new It;let gd=null,vd=0,_d=0,xd=!1;const iw=new oe,rs=new oe;class Hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=iw}=l;gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,_d),this._renderer.xr.enabled=xd,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===ea?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:zi,format:bi,colorSpace:$l,depthBuffer:!1},o=Gm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gm(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rw(l)),this._blurMaterial=aw(l,e,t),this._ggxMaterial=sw(l,e,t)}return o}_compileMaterial(e){const t=new Ri(new Hi,e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,s,o,l){const h=new ci(90,1,t,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,E=x.toneMapping;x.getClearColor(Vm),x.toneMapping=ki,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ri(new oo,new Af({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let _=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,_=!0):(S.color.copy(Vm),_=!0);for(let O=0;O<6;O++){const A=O%3;A===0?(h.up.set(0,p[O],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[O],l.y,l.z)):A===1?(h.up.set(0,0,p[O]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[O],l.z)):(h.up.set(0,p[O],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[O]));const C=this._cubeSize;Ks(o,A*C,O>2?C:0,C,C),x.setRenderTarget(o),_&&x.render(R,h),x.render(e,h)}x.toneMapping=E,x.autoClear=g,e.background=L}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ls||e.mapping===ea;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Ks(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,Ka)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const h=u.uniforms,p=s/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=p*1.25,E=x*g,{_lodMax:b}=this,R=this._sizeLods[s],S=3*R*(s>b-Zs?s-b+Zs:0),_=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=E,h.mipInt.value=b-t,Ks(l,S,_,3*R,2*R),o.setRenderTarget(l),o.render(f,Ka),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=b-s,Ks(e,S,_,3*R,2*R),o.setRenderTarget(e),o.render(f,Ka)}_blur(e,t,s,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,s,u),this._blurPass(l,e,s,s,u)}_blurPass(e,t,s,o,l){const u=this._renderer,f=this._blurMaterial,h=this._lodMeshes[o];h.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-s;const v=this._sizeLods[o],x=3*v*(o>this._lodMax-Zs?o-this._lodMax+Zs:0),g=4*(this._cubeSize-v);Ks(t,x,g,3*v,2*v),u.setRenderTarget(t),u.render(h,Ka)}}function rw(r){const e=[],t=[];let s=r;const o=r-Zs+1+ew;for(let l=0;l<o;l++){const u=Math.pow(2,s);e.push(u);const f=1/(u-2),h=-f,p=1+f,v=[h,h,p,h,p,p,h,h,p,p,h,p],x=6,g=6,E=3,b=new Float32Array(E*g*x),R=new Float32Array(E*g*x);for(let _=0;_<x;_++){const L=_%3*2/3-1,O=_>2?0:-1,A=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];b.set(A,E*g*_);for(let C=0;C<g;C++){const P=v[C*2]*2-1,F=v[C*2+1]*2-1;_===0?rs.set(1,F,P):_===1?rs.set(-P,1,-F):_===2?rs.set(-P,F,1):_===3?rs.set(-1,F,-P):_===4?rs.set(-P,-1,F):rs.set(P,F,-1),rs.toArray(R,(_*g+C)*E)}}const S=new Hi;S.setAttribute("position",new lr(b,E)),S.setAttribute("outputDirection",new lr(R,E)),t.push(new Ri(S,null)),s>Zs&&s--}return{lodMeshes:t,sizeLods:e}}function Gm(r,e,t){const s=new Ai(r,e,t);return s.texture.mapping=tc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ks(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function sw(r,e,t){return new Vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function aw(r,e,t){return new Vi({name:"SphericalGaussianBlur",defines:{SAMPLES:tw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:rc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Wm(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Xm(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class h0 extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new s0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new oo(5,5,5),l=new Vi({name:"CubemapFromEquirect",uniforms:ta(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ar});l.uniforms.tEquirect.value=t;const u=new Ri(o,l),f=t.minFilter;return t.minFilter===ss&&(t.minFilter=Ln),new cy(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function ow(r){let e=new WeakMap,t=new WeakMap,s=null;function o(g,E=!1){return g==null?null:E?u(g):l(g)}function l(g){if(g&&g.isTexture){const E=g.mapping;if(E===Wu||E===Xu)if(e.has(g)){const b=e.get(g).texture;return f(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const R=new h0(b.height);return R.fromEquirectangularTexture(r,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const E=g.mapping,b=E===Wu||E===Xu,R=E===ls||E===ea;if(b||R){let S=t.get(g);const _=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return s===null&&(s=new Hm(r)),S=b?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const L=g.image;return b&&L&&L.height>0||R&&L&&h(L)?(s===null&&(s=new Hm(r)),S=b?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function f(g,E){return E===Wu?g.mapping=ls:E===Xu&&(g.mapping=ea),g}function h(g){let E=0;const b=6;for(let R=0;R<b;R++)g[R]!==void 0&&E++;return E===b}function p(g){const E=g.target;E.removeEventListener("dispose",p);const b=e.get(E);b!==void 0&&(e.delete(E),b.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const b=t.get(E);b!==void 0&&(t.delete(E),b.dispose())}function x(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:x}}function lw(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&Js("WebGLRenderer: "+s+" extension not supported."),o}}}function cw(r,e,t,s){const o={},l=new WeakMap;function u(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",u),delete o[g.id];const E=l.get(g);E&&(e.remove(E),l.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(x,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(x){const g=x.attributes;for(const E in g)e.update(g[E],r.ARRAY_BUFFER)}function p(x){const g=[],E=x.index,b=x.attributes.position;let R=0;if(b===void 0)return;if(E!==null){const L=E.array;R=E.version;for(let O=0,A=L.length;O<A;O+=3){const C=L[O+0],P=L[O+1],F=L[O+2];g.push(C,P,P,F,F,C)}}else{const L=b.array;R=b.version;for(let O=0,A=L.length/3-1;O<A;O+=3){const C=O+0,P=O+1,F=O+2;g.push(C,P,P,F,F,C)}}const S=new(b.count>=65535?i0:n0)(g,1);S.version=R;const _=l.get(x);_&&e.remove(_),l.set(x,S)}function v(x){const g=l.get(x);if(g){const E=x.index;E!==null&&g.version<E.version&&p(x)}else p(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:v}}function uw(r,e,t){let s;function o(x){s=x}let l,u;function f(x){l=x.type,u=x.bytesPerElement}function h(x,g){r.drawElements(s,g,l,x*u),t.update(g,s,1)}function p(x,g,E){E!==0&&(r.drawElementsInstanced(s,g,l,x*u,E),t.update(g,s,E))}function v(x,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,l,x,0,E);let R=0;for(let S=0;S<E;S++)R+=g[S];t.update(R,s,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function dw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:Lt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function fw(r,e,t){const s=new WeakMap,o=new Qt;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let g=s.get(f);if(g===void 0||g.count!==x){let B=function(){y.dispose(),s.delete(f),f.removeEventListener("dispose",B)};var E=B;g!==void 0&&g.texture.dispose();const b=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],O=f.morphAttributes.color||[];let A=0;b===!0&&(A=1),R===!0&&(A=2),S===!0&&(A=3);let C=f.attributes.position.count*A,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const F=new Float32Array(C*P*4*x),y=new Qg(F,C,P,x);y.type=Fi,y.needsUpdate=!0;const N=A*4;for(let X=0;X<x;X++){const $=_[X],se=L[X],Y=O[X],ee=C*P*4*X;for(let fe=0;fe<$.count;fe++){const Q=fe*N;b===!0&&(o.fromBufferAttribute($,fe),F[ee+Q+0]=o.x,F[ee+Q+1]=o.y,F[ee+Q+2]=o.z,F[ee+Q+3]=0),R===!0&&(o.fromBufferAttribute(se,fe),F[ee+Q+4]=o.x,F[ee+Q+5]=o.y,F[ee+Q+6]=o.z,F[ee+Q+7]=0),S===!0&&(o.fromBufferAttribute(Y,fe),F[ee+Q+8]=o.x,F[ee+Q+9]=o.y,F[ee+Q+10]=o.z,F[ee+Q+11]=Y.itemSize===4?o.w:1)}}g={count:x,texture:y,size:new Tt(C,P)},s.set(f,g),f.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const R=f.morphTargetsRelative?1:1-b;h.getUniforms().setValue(r,"morphTargetBaseInfluence",R),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:l}}function hw(r,e,t,s,o){let l=new WeakMap;function u(p){const v=o.render.frame,x=p.geometry,g=e.get(p,x);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const E=p.skeleton;l.get(E)!==v&&(E.update(),l.set(E,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),s.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const pw={[Og]:"LINEAR_TONE_MAPPING",[kg]:"REINHARD_TONE_MAPPING",[Bg]:"CINEON_TONE_MAPPING",[zg]:"ACES_FILMIC_TONE_MAPPING",[Hg]:"AGX_TONE_MAPPING",[Gg]:"NEUTRAL_TONE_MAPPING",[Vg]:"CUSTOM_TONE_MAPPING"};function mw(r,e,t,s,o,l){const u=new Ai(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null;const p=new Hi;p.setAttribute("position",new di([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new di([0,2,0,0,2,0],2));const v=new ay({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Ri(p,v),g=new c0(-1,1,1,-1,0,1);let E=null,b=null,R=!1,S,_=null,L=[],O=!1;this.setSize=function(A,C){u.setSize(A,C),f!==null&&f.setSize(A,C),h!==null&&h.setSize(A,C);for(let P=0;P<L.length;P++){const F=L[P];F.setSize&&F.setSize(A,C)}},this.setEffects=function(A){L=A,O=L.length>0&&L[0].isRenderPass===!0;const C=u.width,P=u.height;L.length>0&&f===null&&(f=new Ai(C,P,{type:zi,depthBuffer:!1,stencilBuffer:!1}),h=new Ai(C,P,{type:zi,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<L.length;F++){const y=L[F];y.setSize&&y.setSize(C,P)}},this.begin=function(A,C){if(R||A.toneMapping===ki&&L.length===0)return!1;if(_=C,C!==null){const P=C.width,F=C.height;(u.width!==P||u.height!==F)&&this.setSize(P,F)}return O===!1&&A.setRenderTarget(u),S=A.toneMapping,A.toneMapping=ki,!0},this.hasRenderPass=function(){return O},this.end=function(A,C){A.toneMapping=S,R=!0;let P=u,F=f;for(let y=0;y<L.length;y++){const N=L[y];N.enabled!==!1&&(N.render(A,F,P,C),N.needsSwap!==!1&&(P=F,F=F===f?h:f))}if(E!==A.outputColorSpace||b!==A.toneMapping){E=A.outputColorSpace,b=A.toneMapping,v.defines={},Mt.getTransfer(E)===Ot&&(v.defines.SRGB_TRANSFER="");const y=pw[b];y&&(v.defines[y]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=P.texture,A.setRenderTarget(_),A.render(x,g),_=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),p.dispose(),v.dispose()}}const p0=new Fn,df=new ro(1,1),m0=new Qg,g0=new FS,v0=new s0,Ym=[],qm=[],jm=new Float32Array(16),Km=new Float32Array(9),$m=new Float32Array(4);function sa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=Ym[o];if(l===void 0&&(l=new Float32Array(o),Ym[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function sc(r,e){let t=qm[e];t===void 0&&(t=new Int32Array(e),qm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function gw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function vw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function _w(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function xw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function Sw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,s))return;$m.set(s),r.uniformMatrix2fv(this.addr,!1,$m),hn(t,s)}}function yw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,s))return;Km.set(s),r.uniformMatrix3fv(this.addr,!1,Km),hn(t,s)}}function Mw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,s))return;jm.set(s),r.uniformMatrix4fv(this.addr,!1,jm),hn(t,s)}}function Ew(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ww(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function Tw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function bw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function Aw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Rw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function Cw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function Pw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function Lw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(df.compareFunction=t.isReversedDepthBuffer()?wf:Ef,l=df):l=p0,t.setTexture2D(e||l,o)}function Nw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||g0,o)}function Dw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||v0,o)}function Iw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||m0,o)}function Uw(r){switch(r){case 5126:return gw;case 35664:return vw;case 35665:return _w;case 35666:return xw;case 35674:return Sw;case 35675:return yw;case 35676:return Mw;case 5124:case 35670:return Ew;case 35667:case 35671:return ww;case 35668:case 35672:return Tw;case 35669:case 35673:return bw;case 5125:return Aw;case 36294:return Rw;case 36295:return Cw;case 36296:return Pw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Dw;case 36289:case 36303:case 36311:case 36292:return Iw}}function Fw(r,e){r.uniform1fv(this.addr,e)}function Ow(r,e){const t=sa(e,this.size,2);r.uniform2fv(this.addr,t)}function kw(r,e){const t=sa(e,this.size,3);r.uniform3fv(this.addr,t)}function Bw(r,e){const t=sa(e,this.size,4);r.uniform4fv(this.addr,t)}function zw(r,e){const t=sa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Vw(r,e){const t=sa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Hw(r,e){const t=sa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Gw(r,e){r.uniform1iv(this.addr,e)}function Ww(r,e){r.uniform2iv(this.addr,e)}function Xw(r,e){r.uniform3iv(this.addr,e)}function Yw(r,e){r.uniform4iv(this.addr,e)}function qw(r,e){r.uniform1uiv(this.addr,e)}function jw(r,e){r.uniform2uiv(this.addr,e)}function Kw(r,e){r.uniform3uiv(this.addr,e)}function $w(r,e){r.uniform4uiv(this.addr,e)}function Zw(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=df:u=p0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function Jw(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||g0,l[u])}function Qw(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||v0,l[u])}function eT(r,e,t){const s=this.cache,o=e.length,l=sc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||m0,l[u])}function tT(r){switch(r){case 5126:return Fw;case 35664:return Ow;case 35665:return kw;case 35666:return Bw;case 35674:return zw;case 35675:return Vw;case 35676:return Hw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return Yw;case 5125:return qw;case 36294:return jw;case 36295:return Kw;case 36296:return $w;case 35678:case 36198:case 36298:case 36306:case 35682:return Zw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return eT}}class nT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=Uw(t.type)}}class iT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tT(t.type)}}class rT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function Zm(r,e){r.seq.push(e),r.map[e.id]=e}function sT(r,e,t){const s=r.name,o=s.length;for(Sd.lastIndex=0;;){const l=Sd.exec(s),u=Sd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){Zm(t,p===void 0?new nT(f,r,e):new iT(f,r,e));break}else{let x=t.map[f];x===void 0&&(x=new rT(f),Zm(t,x)),t=x}}}class Xl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);sT(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function Jm(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const aT=37297;let oT=0;function lT(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const Qm=new ut;function cT(r){Mt._getMatrix(Qm,Mt.workingColorSpace,r);const e=`mat3( ${Qm.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(r)){case Zl:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function eg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+lT(r.getShaderSource(e),f)}else return l}function uT(r,e){const t=cT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const dT={[Og]:"Linear",[kg]:"Reinhard",[Bg]:"Cineon",[zg]:"ACESFilmic",[Hg]:"AgX",[Gg]:"Neutral",[Vg]:"Custom"};function fT(r,e){const t=dT[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kl=new oe;function hT(){Mt.getLuminanceCoefficients(kl);const r=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function mT(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function gT(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function Qa(r){return r!==""}function tg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ng(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(r){return r.replace(vT,xT)}const _T=new Map;function xT(r,e){let t=mt[e];if(t===void 0){const s=_T.get(e);if(s!==void 0)t=mt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ff(t)}const ST=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ig(r){return r.replace(ST,yT)}function yT(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function rg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const MT={[zl]:"SHADOWMAP_TYPE_PCF",[Za]:"SHADOWMAP_TYPE_VSM"};function ET(r){return MT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wT={[ls]:"ENVMAP_TYPE_CUBE",[ea]:"ENVMAP_TYPE_CUBE",[tc]:"ENVMAP_TYPE_CUBE_UV"};function TT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":wT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const bT={[ea]:"ENVMAP_MODE_REFRACTION"};function AT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":bT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RT={[Fg]:"ENVMAP_BLENDING_MULTIPLY",[hS]:"ENVMAP_BLENDING_MIX",[pS]:"ENVMAP_BLENDING_ADD"};function CT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":RT[r.combine]||"ENVMAP_BLENDING_NONE"}function PT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function LT(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=ET(t),p=TT(t),v=AT(t),x=CT(t),g=PT(t),E=pT(t),b=mT(l),R=o.createProgram();let S,_,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Qa).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Qa).join(`
`),_.length>0&&(_+=`
`)):(S=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),_=[rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?mt.tonemapping_pars_fragment:"",t.toneMapping!==ki?fT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,uT("linearToOutputTexel",t.outputColorSpace),hT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),u=ff(u),u=tg(u,t),u=ng(u,t),f=ff(f),f=tg(f,t),f=ng(f,t),u=ig(u),f=ig(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===Sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=L+S+u,A=L+_+f,C=Jm(o,o.VERTEX_SHADER,O),P=Jm(o,o.FRAGMENT_SHADER,A);o.attachShader(R,C),o.attachShader(R,P),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function F(X){if(r.debug.checkShaderErrors){const $=o.getProgramInfoLog(R)||"",se=o.getShaderInfoLog(C)||"",Y=o.getShaderInfoLog(P)||"",ee=$.trim(),fe=se.trim(),Q=Y.trim();let k=!0,q=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,R,C,P);else{const j=eg(o,C,"vertex"),D=eg(o,P,"fragment");Lt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ee+`
`+j+`
`+D)}else ee!==""?ot("WebGLProgram: Program Info Log:",ee):(fe===""||Q==="")&&(q=!1);q&&(X.diagnostics={runnable:k,programLog:ee,vertexShader:{log:fe,prefix:S},fragmentShader:{log:Q,prefix:_}})}o.deleteShader(C),o.deleteShader(P),y=new Xl(o,R),N=gT(o,R)}let y;this.getUniforms=function(){return y===void 0&&F(this),y};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(R,aT)),B},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oT++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=C,this.fragmentShader=P,this}let NT=0;class DT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new IT(e),t.set(e,s)),s}}class IT{constructor(e){this.id=NT++,this.code=e,this.usedTimes=0}}function UT(r){return r===cs||r===jl||r===Kl}function FT(r,e,t,s,o,l){const u=new e0,f=new DT,h=new Set,p=[],v=new Map,x=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return h.add(y),y===0?"uv":`uv${y}`}function R(y,N,B,X,$,se){const Y=X.fog,ee=$.geometry,fe=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?X.environment:null,Q=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||fe,Q),q=k&&k.mapping===tc?k.image.height:null,j=E[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&ot("WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const D=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,re=D!==void 0?D.length:0;let ve=0;ee.morphAttributes.position!==void 0&&(ve=1),ee.morphAttributes.normal!==void 0&&(ve=2),ee.morphAttributes.color!==void 0&&(ve=3);let Le,ke,He,Z;if(j){const Rt=Ui[j];Le=Rt.vertexShader,ke=Rt.fragmentShader}else{Le=y.vertexShader,ke=y.fragmentShader;const Rt=f.getVertexShaderStage(y),wt=f.getFragmentShaderStage(y);f.update(y,Rt,wt),He=Rt.id,Z=wt.id}const de=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),je=$.isInstancedMesh===!0,Ie=$.isBatchedMesh===!0,lt=!!y.map,Gt=!!y.matcap,ft=!!k,xt=!!y.aoMap,Ut=!!y.lightMap,ht=!!y.bumpMap&&y.wireframe===!1,kt=!!y.normalMap,$t=!!y.displacementMap,rn=!!y.emissiveMap,Dt=!!y.metalnessMap,Wt=!!y.roughnessMap,G=y.anisotropy>0,on=y.clearcoat>0,At=y.dispersion>0,I=y.retroreflectivity>0,M=y.iridescence>0,K=y.sheen>0,le=y.transmission>0,he=G&&!!y.anisotropyMap,Ee=on&&!!y.clearcoatMap,be=on&&!!y.clearcoatNormalMap,pe=on&&!!y.clearcoatRoughnessMap,ge=M&&!!y.iridescenceMap,Ce=M&&!!y.iridescenceThicknessMap,Ze=K&&!!y.sheenColorMap,Pe=K&&!!y.sheenRoughnessMap,Te=!!y.specularMap,Je=!!y.specularColorMap,nt=!!y.specularIntensityMap,st=le&&!!y.transmissionMap,V=le&&!!y.thicknessMap,Ae=!!y.gradientMap,me=!!y.alphaMap,Re=y.alphaTest>0,Oe=!!y.alphaHash,_e=!!y.extensions;let et=ki;y.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(et=r.toneMapping);const Ke={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Le,fragmentShader:ke,defines:y.defines,customVertexShaderID:He,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ie,batchingColor:Ie&&$._colorsTexture!==null,instancing:je,instancingColor:je&&$.instanceColor!==null,instancingMorph:je&&$.morphTexture!==null,outputColorSpace:de===null?r.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:lt,matcap:Gt,envMap:ft,envMapMode:ft&&k.mapping,envMapCubeUVHeight:q,aoMap:xt,lightMap:Ut,bumpMap:ht,normalMap:kt,displacementMap:$t,emissiveMap:rn,normalMapObjectSpace:kt&&y.normalMapType===vS,normalMapTangentSpace:kt&&y.normalMapType===xm,packedNormalMap:kt&&y.normalMapType===xm&&UT(y.normalMap.format),metalnessMap:Dt,roughnessMap:Wt,anisotropy:G,anisotropyMap:he,clearcoat:on,clearcoatMap:Ee,clearcoatNormalMap:be,clearcoatRoughnessMap:pe,dispersion:At,retroreflection:I,iridescence:M,iridescenceMap:ge,iridescenceThicknessMap:Ce,sheen:K,sheenColorMap:Ze,sheenRoughnessMap:Pe,specularMap:Te,specularColorMap:Je,specularIntensityMap:nt,transmission:le,transmissionMap:st,thicknessMap:V,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===eo&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:Re,alphaHash:Oe,combine:y.combine,mapUv:lt&&b(y.map.channel),aoMapUv:xt&&b(y.aoMap.channel),lightMapUv:Ut&&b(y.lightMap.channel),bumpMapUv:ht&&b(y.bumpMap.channel),normalMapUv:kt&&b(y.normalMap.channel),displacementMapUv:$t&&b(y.displacementMap.channel),emissiveMapUv:rn&&b(y.emissiveMap.channel),metalnessMapUv:Dt&&b(y.metalnessMap.channel),roughnessMapUv:Wt&&b(y.roughnessMap.channel),anisotropyMapUv:he&&b(y.anisotropyMap.channel),clearcoatMapUv:Ee&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:be&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(y.sheenRoughnessMap.channel),specularMapUv:Te&&b(y.specularMap.channel),specularColorMapUv:Je&&b(y.specularColorMap.channel),specularIntensityMapUv:nt&&b(y.specularIntensityMap.channel),transmissionMapUv:st&&b(y.transmissionMap.channel),thicknessMapUv:V&&b(y.thicknessMap.channel),alphaMapUv:me&&b(y.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(kt||G),vertexNormals:!!ee.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ee.attributes.uv&&(lt||me),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||ee.attributes.normal===void 0&&kt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Me,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ve,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:et,decodeVideoTexture:lt&&y.map.isVideoTexture===!0&&Mt.getTransfer(y.map.colorSpace)===Ot,decodeVideoTextureEmissive:rn&&y.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(y.emissiveMap.colorSpace)===Ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===rr,flipSided:y.side===Wn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&y.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ke.vertexUv1s=h.has(1),Ke.vertexUv2s=h.has(2),Ke.vertexUv3s=h.has(3),h.clear(),Ke}function S(y){const N=[];if(y.shaderID?N.push(y.shaderID):(N.push(y.customVertexShaderID),N.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)N.push(B),N.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(_(N,y),L(N,y),N.push(r.outputColorSpace)),N.push(y.customProgramCacheKey),N.join()}function _(y,N){y.push(N.precision),y.push(N.outputColorSpace),y.push(N.envMapMode),y.push(N.envMapCubeUVHeight),y.push(N.mapUv),y.push(N.alphaMapUv),y.push(N.lightMapUv),y.push(N.aoMapUv),y.push(N.bumpMapUv),y.push(N.normalMapUv),y.push(N.displacementMapUv),y.push(N.emissiveMapUv),y.push(N.metalnessMapUv),y.push(N.roughnessMapUv),y.push(N.anisotropyMapUv),y.push(N.clearcoatMapUv),y.push(N.clearcoatNormalMapUv),y.push(N.clearcoatRoughnessMapUv),y.push(N.iridescenceMapUv),y.push(N.iridescenceThicknessMapUv),y.push(N.sheenColorMapUv),y.push(N.sheenRoughnessMapUv),y.push(N.specularMapUv),y.push(N.specularColorMapUv),y.push(N.specularIntensityMapUv),y.push(N.transmissionMapUv),y.push(N.thicknessMapUv),y.push(N.combine),y.push(N.fogExp2),y.push(N.sizeAttenuation),y.push(N.morphTargetsCount),y.push(N.morphAttributeCount),y.push(N.numSunLights),y.push(N.numDirLights),y.push(N.numPointLights),y.push(N.numSpotLights),y.push(N.numSpotLightMaps),y.push(N.numHemiLights),y.push(N.numRectAreaLights),y.push(N.numSunLightShadows),y.push(N.numDirLightShadows),y.push(N.numPointLightShadows),y.push(N.numSpotLightShadows),y.push(N.numSpotLightShadowsWithMaps),y.push(N.numLightProbes),y.push(N.shadowMapType),y.push(N.toneMapping),y.push(N.numClippingPlanes),y.push(N.numClipIntersection),y.push(N.depthPacking)}function L(y,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.retroreflection&&u.enable(24),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),y.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),y.push(u.mask)}function O(y){const N=E[y.type];let B;if(N){const X=Ui[N];B=iy.clone(X.uniforms)}else B=y.uniforms;return B}function A(y,N){let B=v.get(N);return B!==void 0?++B.usedTimes:(B=new LT(r,N,y,o),p.push(B),v.set(N,B)),B}function C(y){if(--y.usedTimes===0){const N=p.indexOf(y);p[N]=p[p.length-1],p.pop(),v.delete(y.cacheKey),y.destroy()}}function P(y){f.remove(y)}function F(){f.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:O,acquireProgram:A,releaseProgram:C,releaseShaderCache:P,programs:p,dispose:F}}function OT(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function kT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function sg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ag(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function f(g,E,b,R,S,_){let L=r[e];return L===void 0?(L={id:g.id,object:g,geometry:E,material:b,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:S,group:_},r[e]=L):(L.id=g.id,L.object=g,L.geometry=E,L.material=b,L.materialVariant=u(g),L.groupOrder=R,L.renderOrder=g.renderOrder,L.z=S,L.group=_),e++,L}function h(g,E,b,R,S,_,L){L.reversedDepth===!0&&(S=-S);const O=f(g,E,b,R,S,_);b.transmission>0?s.push(O):b.transparent===!0?o.push(O):t.push(O)}function p(g,E,b,R,S,_){const L=f(g,E,b,R,S,_);b.transmission>0?s.unshift(L):b.transparent===!0?o.unshift(L):t.unshift(L)}function v(g,E){t.length>1&&t.sort(g||kT),s.length>1&&s.sort(E||sg),o.length>1&&o.sort(E||sg)}function x(){for(let g=e,E=r.length;g<E;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:p,finish:x,sort:v}}function BT(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new ag,r.set(s,[u])):o>=l.length?(u=new ag,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function zT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new oe,color:new It};break;case"SpotLight":t={position:new oe,direction:new oe,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new It,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new It,groundColor:new It};break;case"RectAreaLight":t={color:new It,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=t,t}}}function VT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let HT=0;function GT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function WT(r){const e=new zT,t=VT(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new oe);const o=new oe,l=new nn,u=new nn;function f(p){let v=0,x=0,g=0;for(let $=0;$<9;$++)s.probe[$].set(0,0,0);let E=0,b=0,R=0,S=0,_=0,L=0,O=0,A=0,C=0,P=0,F=0,y=0,N=0,B=0;p.sort(GT);for(let $=0,se=p.length;$<se;$++){const Y=p[$],ee=Y.color,fe=Y.intensity,Q=Y.distance;let k=null;if(Y.shadow&&Y.shadow.map&&(Y.shadow.map.texture.format===cs?k=Y.shadow.map.texture:k=Y.shadow.map.depthTexture||Y.shadow.map.texture),Y.isAmbientLight)v+=ee.r*fe,x+=ee.g*fe,g+=ee.b*fe;else if(Y.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(Y.sh.coefficients[q],fe);B++}else if(Y.isSunLight){const q=e.get(Y);if(q.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const j=Y.shadow,D=t.get(Y);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),s.sunShadow[b]=D,s.sunShadowMap[b]=k;const re=j.getViewportCount();for(let ve=0;ve<re;ve++)s.sunShadowMatrix[R+ve]=j.getMatrix(ve),s.sunShadowCascade[R+ve]=j._cascadeData[ve];R+=re,b++}s.sun[E]=q,E++}else if(Y.isDirectionalLight){const q=e.get(Y);if(q.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const j=Y.shadow,D=t.get(Y);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,s.directionalShadow[S]=D,s.directionalShadowMap[S]=k,s.directionalShadowMatrix[S]=Y.shadow.matrix,C++}s.directional[S]=q,S++}else if(Y.isSpotLight){const q=e.get(Y);q.position.setFromMatrixPosition(Y.matrixWorld),q.color.copy(ee).multiplyScalar(fe),q.distance=Q,q.coneCos=Math.cos(Y.angle),q.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),q.decay=Y.decay,s.spot[L]=q;const j=Y.shadow;if(Y.map&&(s.spotLightMap[y]=Y.map,y++,j.updateMatrices(Y),Y.castShadow&&N++),s.spotLightMatrix[L]=j.matrix,Y.castShadow){const D=t.get(Y);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,s.spotShadow[L]=D,s.spotShadowMap[L]=k,F++}L++}else if(Y.isRectAreaLight){const q=e.get(Y);q.color.copy(ee).multiplyScalar(fe),q.halfWidth.set(Y.width*.5,0,0),q.halfHeight.set(0,Y.height*.5,0),s.rectArea[O]=q,O++}else if(Y.isPointLight){const q=e.get(Y);if(q.color.copy(Y.color).multiplyScalar(Y.intensity),q.distance=Y.distance,q.decay=Y.decay,Y.castShadow){const j=Y.shadow,D=t.get(Y);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,s.pointShadow[_]=D,s.pointShadowMap[_]=k,s.pointShadowMatrix[_]=Y.shadow.matrix,P++}s.point[_]=q,_++}else if(Y.isHemisphereLight){const q=e.get(Y);q.skyColor.copy(Y.color).multiplyScalar(fe),q.groundColor.copy(Y.groundColor).multiplyScalar(fe),s.hemi[A]=q,A++}}O>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=x,s.ambient[2]=g;const X=s.hash;(X.sunLength!==E||X.directionalLength!==S||X.pointLength!==_||X.spotLength!==L||X.rectAreaLength!==O||X.hemiLength!==A||X.numSunShadows!==b||X.numDirectionalShadows!==C||X.numPointShadows!==P||X.numSpotShadows!==F||X.numSpotMaps!==y||X.numLightProbes!==B)&&(s.sun.length=E,s.directional.length=S,s.spot.length=L,s.rectArea.length=O,s.point.length=_,s.hemi.length=A,s.sunShadow.length=b,s.sunShadowMap.length=b,s.sunShadowMatrix.length=R,s.sunShadowCascade.length=R,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.directionalShadowMatrix.length=C,s.pointShadow.length=P,s.pointShadowMap.length=P,s.pointShadowMatrix.length=P,s.spotShadow.length=F,s.spotShadowMap.length=F,s.spotLightMatrix.length=F+y-N,s.spotLightMap.length=y,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=B,X.sunLength=E,X.directionalLength=S,X.pointLength=_,X.spotLength=L,X.rectAreaLength=O,X.hemiLength=A,X.numSunShadows=b,X.numDirectionalShadows=C,X.numPointShadows=P,X.numSpotShadows=F,X.numSpotMaps=y,X.numLightProbes=B,s.version=HT++)}function h(p,v){let x=0,g=0,E=0,b=0,R=0,S=0;const _=v.matrixWorldInverse;for(let L=0,O=p.length;L<O;L++){const A=p[L];if(A.isSunLight){const C=s.sun[x];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(_),x++}else if(A.isDirectionalLight){const C=s.directional[g];C.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(_),g++}else if(A.isSpotLight){const C=s.spot[b];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(_),C.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(_),b++}else if(A.isRectAreaLight){const C=s.rectArea[R];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(_),u.identity(),l.copy(A.matrixWorld),l.premultiply(_),u.extractRotation(l),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),R++}else if(A.isPointLight){const C=s.point[E];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(_),E++}else if(A.isHemisphereLight){const C=s.hemi[S];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(_),S++}}}return{setup:f,setupView:h,state:s}}function og(r){const e=new WT(r),t=[],s=[],o=[];function l(g){x.camera=g,t.length=0,s.length=0,o.length=0}function u(g){t.push(g)}function f(g){s.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const x={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function XT(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new og(r),e.set(o,[f])):l>=u.length?(f=new og(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const YT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jT=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],KT=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],lg=new nn,$a=new oe,yd=new oe;function $T(r,e,t){let s=new r0;const o=new Tt,l=new Tt,u=new Qt,f=new oy,h=new ly,p={},v=t.maxTextureSize,x={[os]:Wn,[Wn]:os,[rr]:rr},g=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:YT,fragmentShader:qT}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const b=new Hi;b.setAttribute("position",new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ri(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let _=this.type;this.render=function(P,F,y){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===jx&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zl);const N=r.getRenderTarget(),B=r.getActiveCubeFace(),X=r.getActiveMipmapLevel(),$=r.state;$.setBlending(ar),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const se=_!==this.type;se&&F.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(ee=>ee.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,ee=P.length;Y<ee;Y++){const fe=P[Y],Q=fe.shadow;if(Q===void 0){ot("WebGLShadowMap:",fe,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const k=Q.getFrameExtents();o.multiply(k),l.copy(Q.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/k.x),o.x=l.x*k.x,Q.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/k.y),o.y=l.y*k.y,Q.mapSize.y=l.y));const q=r.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=q,Q.map===null||se===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Za){if(fe.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Ai(o.x,o.y,{format:cs,type:zi,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),Q.map.texture.name=fe.name+".shadowMap",Q.map.depthTexture=new ro(o.x,o.y,Fi),Q.map.depthTexture.name=fe.name+".shadowMapDepth",Q.map.depthTexture.format=cr,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Mn,Q.map.depthTexture.magFilter=Mn}else fe.isPointLight?(Q.map=new h0(o.x),Q.map.depthTexture=new ty(o.x,Bi)):(Q.map=new Ai(o.x,o.y),Q.map.depthTexture=new ro(o.x,o.y,Bi)),Q.map.depthTexture.name=fe.name+".shadowMap",Q.map.depthTexture.format=cr,this.type===zl?(Q.map.depthTexture.compareFunction=q?wf:Ef,Q.map.depthTexture.minFilter=Ln,Q.map.depthTexture.magFilter=Ln):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Mn,Q.map.depthTexture.magFilter=Mn);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==o.x||Q.map.height!==o.y)&&Q.map.setSize(o.x,o.y);const j=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();fe.isPointLight!==!0&&Q.updateMatrices(fe,y);for(let D=0;D<j;D++){const re=Q.getCamera(D);if(fe.isPointLight){const ve=Q.camera,Le=Q.matrix,ke=fe.distance||ve.far;ke!==ve.far&&(ve.far=ke,ve.updateProjectionMatrix()),$a.setFromMatrixPosition(fe.matrixWorld),ve.position.copy($a),yd.copy(ve.position),yd.add(jT[D]),ve.up.copy(KT[D]),ve.lookAt(yd),ve.updateMatrixWorld(),Le.makeTranslation(-$a.x,-$a.y,-$a.z),lg.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(lg,ve.coordinateSystem,ve.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)r.setRenderTarget(Q.map,D),r.clear();else{D===0&&(r.setRenderTarget(Q.map),r.clear());const ve=Q.getViewport(D);u.set(l.x*ve.x,l.y*ve.y,l.x*ve.z,l.y*ve.w),$.viewport(u)}s=Q.getFrustum(D),A(F,y,re,fe,this.type)}Q.isPointLightShadow!==!0&&this.type===Za&&L(Q,y),Q.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(N,B,X)};function L(P,F){const y=e.update(R);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ai(o.x,o.y,{format:cs,type:zi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value.set(P.map.width,P.map.height),g.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(F,null,y,g,R,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value.set(P.map.width,P.map.height),E.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(F,null,y,E,R,null)}function O(P,F,y,N){let B=null;const X=y.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(X!==void 0)B=X;else if(B=y.isPointLight===!0?h:f,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=B.uuid,se=F.uuid;let Y=p[$];Y===void 0&&(Y={},p[$]=Y);let ee=Y[se];ee===void 0&&(ee=B.clone(),Y[se]=ee,F.addEventListener("dispose",C)),B=ee}if(B.visible=F.visible,B.wireframe=F.wireframe,N===Za?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:x[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,y.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const $=r.properties.get(B);$.light=y}return B}function A(P,F,y,N,B){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===Za)&&(!P.frustumCulled||P.intersectsFrustum(s))){P.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,P.matrixWorld);const se=e.update(P),Y=P.material;if(Array.isArray(Y)){const ee=se.groups;for(let fe=0,Q=ee.length;fe<Q;fe++){const k=ee[fe],q=Y[k.materialIndex];if(q&&q.visible){const j=O(P,q,N,B);P.onBeforeShadow(r,P,F,y,se,j,k),r.renderBufferDirect(y,null,se,j,P,k),P.onAfterShadow(r,P,F,y,se,j,k)}}}else if(Y.visible){const ee=O(P,Y,N,B);P.onBeforeShadow(r,P,F,y,se,ee,null),r.renderBufferDirect(y,null,se,ee,P,null),P.onAfterShadow(r,P,F,y,se,ee,null)}}const $=P.children;for(let se=0,Y=$.length;se<Y;se++)A($[se],F,y,N,B)}function C(P){P.target.removeEventListener("dispose",C);for(const y in p){const N=p[y],B=P.target.uuid;B in N&&(N[B].dispose(),delete N[B])}}}function ZT(r,e){function t(){let V=!1;const Ae=new Qt;let me=null;const Re=new Qt(0,0,0,0);return{setMask:function(Oe){me!==Oe&&!V&&(r.colorMask(Oe,Oe,Oe,Oe),me=Oe)},setLocked:function(Oe){V=Oe},setClear:function(Oe,_e,et,Ke,Rt){Rt===!0&&(Oe*=Ke,_e*=Ke,et*=Ke),Ae.set(Oe,_e,et,Ke),Re.equals(Ae)===!1&&(r.clearColor(Oe,_e,et,Ke),Re.copy(Ae))},reset:function(){V=!1,me=null,Re.set(-1,0,0,0)}}}function s(){let V=!1,Ae=!1,me=null,Re=null,Oe=null;return{setReversed:function(_e){if(Ae!==_e){const et=e.get("EXT_clip_control");_e?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Ae=_e;const Ke=Oe;Oe=null,this.setClear(Ke)}},getReversed:function(){return Ae},setTest:function(_e){_e?de(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(_e){me!==_e&&!V&&(r.depthMask(_e),me=_e)},setFunc:function(_e){if(Ae&&(_e=CS[_e]),Re!==_e){switch(_e){case wd:r.depthFunc(r.NEVER);break;case Td:r.depthFunc(r.ALWAYS);break;case bd:r.depthFunc(r.LESS);break;case to:r.depthFunc(r.LEQUAL);break;case Ad:r.depthFunc(r.EQUAL);break;case Rd:r.depthFunc(r.GEQUAL);break;case Cd:r.depthFunc(r.GREATER);break;case Pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Re=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Oe!==_e&&(Oe=_e,Ae&&(_e=1-_e),r.clearDepth(_e))},reset:function(){V=!1,me=null,Re=null,Oe=null,Ae=!1}}}function o(){let V=!1,Ae=null,me=null,Re=null,Oe=null,_e=null,et=null,Ke=null,Rt=null;return{setTest:function(wt){V||(wt?de(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(wt){Ae!==wt&&!V&&(r.stencilMask(wt),Ae=wt)},setFunc:function(wt,_n,Qn){(me!==wt||Re!==_n||Oe!==Qn)&&(r.stencilFunc(wt,_n,Qn),me=wt,Re=_n,Oe=Qn)},setOp:function(wt,_n,Qn){(_e!==wt||et!==_n||Ke!==Qn)&&(r.stencilOp(wt,_n,Qn),_e=wt,et=_n,Ke=Qn)},setLocked:function(wt){V=wt},setClear:function(wt){Rt!==wt&&(r.clearStencil(wt),Rt=wt)},reset:function(){V=!1,Ae=null,me=null,Re=null,Oe=null,_e=null,et=null,Ke=null,Rt=null}}}const l=new t,u=new s,f=new o,h=new WeakMap,p=new WeakMap;let v={},x={},g={},E=new WeakMap,b=[],R=null,S=!1,_=null,L=null,O=null,A=null,C=null,P=null,F=null,y=new It(0,0,0),N=0,B=!1,X=null,$=null,se=null,Y=null,ee=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,k=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),Q=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Q=k>=2);let j=null,D={};const re=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),Le=new Qt().fromArray(re),ke=new Qt().fromArray(ve);function He(V,Ae,me,Re){const Oe=new Uint8Array(4),_e=r.createTexture();r.bindTexture(V,_e),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<me;et++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,Re,0,r.RGBA,r.UNSIGNED_BYTE,Oe):r.texImage2D(Ae+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Oe);return _e}const Z={};Z[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),de(r.DEPTH_TEST),u.setFunc(to),ht(!1),kt(mm),de(r.CULL_FACE),xt(ar);function de(V){v[V]!==!0&&(r.enable(V),v[V]=!0)}function Me(V){v[V]!==!1&&(r.disable(V),v[V]=!1)}function je(V,Ae){return g[V]!==Ae?(r.bindFramebuffer(V,Ae),g[V]=Ae,V===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ae),V===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ie(V,Ae){let me=b,Re=!1;if(V){me=E.get(Ae),me===void 0&&(me=[],E.set(Ae,me));const Oe=V.textures;if(me.length!==Oe.length||me[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,et=Oe.length;_e<et;_e++)me[_e]=r.COLOR_ATTACHMENT0+_e;me.length=Oe.length,Re=!0}}else me[0]!==r.BACK&&(me[0]=r.BACK,Re=!0);Re&&r.drawBuffers(me)}function lt(V){return R!==V?(r.useProgram(V),R=V,!0):!1}const Gt={[$s]:r.FUNC_ADD,[$x]:r.FUNC_SUBTRACT,[Zx]:r.FUNC_REVERSE_SUBTRACT};Gt[Jx]=r.MIN,Gt[Qx]=r.MAX;const ft={[eS]:r.ZERO,[tS]:r.ONE,[nS]:r.SRC_COLOR,[Ig]:r.SRC_ALPHA,[lS]:r.SRC_ALPHA_SATURATE,[aS]:r.DST_COLOR,[rS]:r.DST_ALPHA,[iS]:r.ONE_MINUS_SRC_COLOR,[Ug]:r.ONE_MINUS_SRC_ALPHA,[oS]:r.ONE_MINUS_DST_COLOR,[sS]:r.ONE_MINUS_DST_ALPHA,[cS]:r.CONSTANT_COLOR,[uS]:r.ONE_MINUS_CONSTANT_COLOR,[dS]:r.CONSTANT_ALPHA,[fS]:r.ONE_MINUS_CONSTANT_ALPHA};function xt(V,Ae,me,Re,Oe,_e,et,Ke,Rt,wt){if(V===ar){S===!0&&(Me(r.BLEND),S=!1);return}if(S===!1&&(de(r.BLEND),S=!0),V!==Kx){if(V!==_||wt!==B){if((L!==$s||C!==$s)&&(r.blendEquation(r.FUNC_ADD),L=$s,C=$s),wt)switch(V){case eo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gm:r.blendFunc(r.ONE,r.ONE);break;case vm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _m:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",V);break}else switch(V){case eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vm:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _m:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",V);break}O=null,A=null,P=null,F=null,y.set(0,0,0),N=0,_=V,B=wt}return}Oe=Oe||Ae,_e=_e||me,et=et||Re,(Ae!==L||Oe!==C)&&(r.blendEquationSeparate(Gt[Ae],Gt[Oe]),L=Ae,C=Oe),(me!==O||Re!==A||_e!==P||et!==F)&&(r.blendFuncSeparate(ft[me],ft[Re],ft[_e],ft[et]),O=me,A=Re,P=_e,F=et),(Ke.equals(y)===!1||Rt!==N)&&(r.blendColor(Ke.r,Ke.g,Ke.b,Rt),y.copy(Ke),N=Rt),_=V,B=!1}function Ut(V,Ae){V.side===rr?Me(r.CULL_FACE):de(r.CULL_FACE);let me=V.side===Wn;Ae&&(me=!me),ht(me),V.blending===eo&&V.transparent===!1?xt(ar):xt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const Re=V.stencilWrite;f.setTest(Re),Re&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),rn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){X!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),X=V)}function kt(V){V!==Yx?(de(r.CULL_FACE),V!==$&&(V===mm?r.cullFace(r.BACK):V===qx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),$=V}function $t(V){V!==se&&(Q&&r.lineWidth(V),se=V)}function rn(V,Ae,me){V?(de(r.POLYGON_OFFSET_FILL),(Y!==Ae||ee!==me)&&(Y=Ae,ee=me,u.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,me))):Me(r.POLYGON_OFFSET_FILL)}function Dt(V){V?de(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function Wt(V){V===void 0&&(V=r.TEXTURE0+fe-1),j!==V&&(r.activeTexture(V),j=V)}function G(V,Ae,me){me===void 0&&(j===null?me=r.TEXTURE0+fe-1:me=j);let Re=D[me];Re===void 0&&(Re={type:void 0,texture:void 0},D[me]=Re),(Re.type!==V||Re.texture!==Ae)&&(j!==me&&(r.activeTexture(me),j=me),r.bindTexture(V,Ae||Z[V]),Re.type=V,Re.texture=Ae)}function on(){const V=D[j];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function At(){try{r.compressedTexImage2D(...arguments)}catch(V){Lt("WebGLState:",V)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(V){Lt("WebGLState:",V)}}function M(){try{r.texSubImage2D(...arguments)}catch(V){Lt("WebGLState:",V)}}function K(){try{r.texSubImage3D(...arguments)}catch(V){Lt("WebGLState:",V)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(V){Lt("WebGLState:",V)}}function he(){try{r.compressedTexSubImage3D(...arguments)}catch(V){Lt("WebGLState:",V)}}function Ee(){try{r.texStorage2D(...arguments)}catch(V){Lt("WebGLState:",V)}}function be(){try{r.texStorage3D(...arguments)}catch(V){Lt("WebGLState:",V)}}function pe(){try{r.texImage2D(...arguments)}catch(V){Lt("WebGLState:",V)}}function ge(){try{r.texImage3D(...arguments)}catch(V){Lt("WebGLState:",V)}}function Ce(V){return x[V]!==void 0?x[V]:r.getParameter(V)}function Ze(V,Ae){x[V]!==Ae&&(r.pixelStorei(V,Ae),x[V]=Ae)}function Pe(V){Le.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Le.copy(V))}function Te(V){ke.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),ke.copy(V))}function Je(V,Ae){let me=p.get(Ae);me===void 0&&(me=new WeakMap,p.set(Ae,me));let Re=me.get(V);Re===void 0&&(Re=r.getUniformBlockIndex(Ae,V.name),me.set(V,Re))}function nt(V,Ae){const Re=p.get(Ae).get(V);h.get(Ae)!==Re&&(r.uniformBlockBinding(Ae,Re,V.__bindingPointIndex),h.set(Ae,Re))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},x={},j=null,D={},g={},E=new WeakMap,b=[],R=null,S=!1,_=null,L=null,O=null,A=null,C=null,P=null,F=null,y=new It(0,0,0),N=0,B=!1,X=null,$=null,se=null,Y=null,ee=null,Le.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:de,disable:Me,bindFramebuffer:je,drawBuffers:Ie,useProgram:lt,setBlending:xt,setMaterial:Ut,setFlipSided:ht,setCullFace:kt,setLineWidth:$t,setPolygonOffset:rn,setScissorTest:Dt,activeTexture:Wt,bindTexture:G,unbindTexture:on,compressedTexImage2D:At,compressedTexImage3D:I,texImage2D:pe,texImage3D:ge,pixelStorei:Ze,getParameter:Ce,updateUBOMapping:Je,uniformBlockBinding:nt,texStorage2D:Ee,texStorage3D:be,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:le,compressedTexSubImage3D:he,scissor:Pe,viewport:Te,reset:st}}function JT(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Tt,v=new WeakMap,x=new Set;let g;const E=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(I,M){return b?new OffscreenCanvas(I,M):Ql("canvas")}function S(I,M,K){let le=1;const he=At(I);if((he.width>K||he.height>K)&&(le=K/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ee=Math.floor(le*he.width),be=Math.floor(le*he.height);g===void 0&&(g=R(Ee,be));const pe=M?R(Ee,be):g;return pe.width=Ee,pe.height=be,pe.getContext("2d").drawImage(I,0,0,Ee,be),ot("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+be+")."),pe}else return"data"in I&&ot("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),I;return I}function _(I){return I.generateMipmaps}function L(I){r.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function A(I,M,K,le,he,Ee=!1){if(I!==null){if(r[I]!==void 0)return r[I];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let be;le&&(be=e.get("EXT_texture_norm16"),be||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=M;if(M===r.RED&&(K===r.FLOAT&&(pe=r.R32F),K===r.HALF_FLOAT&&(pe=r.R16F),K===r.UNSIGNED_BYTE&&(pe=r.R8),K===r.UNSIGNED_SHORT&&be&&(pe=be.R16_EXT),K===r.SHORT&&be&&(pe=be.R16_SNORM_EXT)),M===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.R8UI),K===r.UNSIGNED_SHORT&&(pe=r.R16UI),K===r.UNSIGNED_INT&&(pe=r.R32UI),K===r.BYTE&&(pe=r.R8I),K===r.SHORT&&(pe=r.R16I),K===r.INT&&(pe=r.R32I)),M===r.RG&&(K===r.FLOAT&&(pe=r.RG32F),K===r.HALF_FLOAT&&(pe=r.RG16F),K===r.UNSIGNED_BYTE&&(pe=r.RG8),K===r.UNSIGNED_SHORT&&be&&(pe=be.RG16_EXT),K===r.SHORT&&be&&(pe=be.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.RG8UI),K===r.UNSIGNED_SHORT&&(pe=r.RG16UI),K===r.UNSIGNED_INT&&(pe=r.RG32UI),K===r.BYTE&&(pe=r.RG8I),K===r.SHORT&&(pe=r.RG16I),K===r.INT&&(pe=r.RG32I)),M===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),K===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),K===r.UNSIGNED_INT&&(pe=r.RGB32UI),K===r.BYTE&&(pe=r.RGB8I),K===r.SHORT&&(pe=r.RGB16I),K===r.INT&&(pe=r.RGB32I)),M===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),K===r.UNSIGNED_INT&&(pe=r.RGBA32UI),K===r.BYTE&&(pe=r.RGBA8I),K===r.SHORT&&(pe=r.RGBA16I),K===r.INT&&(pe=r.RGBA32I)),M===r.RGB&&(K===r.UNSIGNED_SHORT&&be&&(pe=be.RGB16_EXT),K===r.SHORT&&be&&(pe=be.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),M===r.RGBA){const ge=Ee?Zl:Mt.getTransfer(he);K===r.FLOAT&&(pe=r.RGBA32F),K===r.HALF_FLOAT&&(pe=r.RGBA16F),K===r.UNSIGNED_BYTE&&(pe=ge===Ot?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&be&&(pe=be.RGBA16_EXT),K===r.SHORT&&be&&(pe=be.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function C(I,M){let K;return I?M===null||M===Bi||M===io?K=r.DEPTH24_STENCIL8:M===Fi?K=r.DEPTH32F_STENCIL8:M===no&&(K=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Bi||M===io?K=r.DEPTH_COMPONENT24:M===Fi?K=r.DEPTH_COMPONENT32F:M===no&&(K=r.DEPTH_COMPONENT16),K}function P(I,M){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==Mn&&I.minFilter!==Ln?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function F(I){const M=I.target;M.removeEventListener("dispose",F),N(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&x.delete(M)}function y(I){const M=I.target;M.removeEventListener("dispose",y),X(M)}function N(I){const M=s.get(I);if(M.__webglInit===void 0)return;const K=I.source,le=E.get(K);if(le){const he=le[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&B(I),Object.keys(le).length===0&&E.delete(K)}s.remove(I)}function B(I){const M=s.get(I);r.deleteTexture(M.__webglTexture);const K=I.source,le=E.get(K);delete le[M.__cacheKey],u.memory.textures--}function X(I){const M=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let he=0;he<M.__webglFramebuffer[le].length;he++)r.deleteFramebuffer(M.__webglFramebuffer[le][he]);else r.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)r.deleteFramebuffer(M.__webglFramebuffer[le]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=I.textures;for(let le=0,he=K.length;le<he;le++){const Ee=s.get(K[le]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),u.memory.textures--),s.remove(K[le])}s.remove(I)}let $=0;function se(){$=0}function Y(){return $}function ee(I){$=I}function fe(){const I=$;return I>=o.maxTextures&&ot("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),$+=1,I}function Q(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function k(I,M){const K=s.get(I);if(I.isVideoTexture&&G(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){const le=I.image;if(le===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(K,I,M);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+M)}function q(I,M){const K=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Me(K,I,M);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+M)}function j(I,M){const K=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Me(K,I,M);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+M)}function D(I,M){const K=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&K.__version!==I.version){je(K,I,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+M)}const re={[Ld]:r.REPEAT,[sr]:r.CLAMP_TO_EDGE,[Nd]:r.MIRRORED_REPEAT},ve={[Mn]:r.NEAREST,[mS]:r.NEAREST_MIPMAP_NEAREST,[vl]:r.NEAREST_MIPMAP_LINEAR,[Ln]:r.LINEAR,[Yu]:r.LINEAR_MIPMAP_NEAREST,[ss]:r.LINEAR_MIPMAP_LINEAR},Le={[xS]:r.NEVER,[wS]:r.ALWAYS,[SS]:r.LESS,[Ef]:r.LEQUAL,[yS]:r.EQUAL,[wf]:r.GEQUAL,[MS]:r.GREATER,[ES]:r.NOTEQUAL};function ke(I,M){if(M.type===Fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ln||M.magFilter===Yu||M.magFilter===vl||M.magFilter===ss||M.minFilter===Ln||M.minFilter===Yu||M.minFilter===vl||M.minFilter===ss)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,re[M.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,re[M.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,re[M.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ve[M.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Mn||M.minFilter!==vl&&M.minFilter!==ss||M.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function He(I,M){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",F));const le=M.source;let he=E.get(le);he===void 0&&(he={},E.set(le,he));const Ee=Q(M);if(Ee!==I.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,K=!0),he[Ee].usedTimes++;const be=he[I.__cacheKey];be!==void 0&&(he[I.__cacheKey].usedTimes--,be.usedTimes===0&&B(M)),I.__cacheKey=Ee,I.__webglTexture=he[Ee].texture}return K}function Z(I,M,K){return Math.floor(Math.floor(I/K)/M)}function de(I,M,K,le){const Ee=I.updateRanges;if(Ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,K,le,M.data);else{Ee.sort((Ze,Pe)=>Ze.start-Pe.start);let be=0;for(let Ze=1;Ze<Ee.length;Ze++){const Pe=Ee[be],Te=Ee[Ze],Je=Pe.start+Pe.count,nt=Z(Te.start,M.width,4),st=Z(Pe.start,M.width,4);Te.start<=Je+1&&nt===st&&Z(Te.start+Te.count-1,M.width,4)===nt?Pe.count=Math.max(Pe.count,Te.start+Te.count-Pe.start):(++be,Ee[be]=Te)}Ee.length=be+1;const pe=t.getParameter(r.UNPACK_ROW_LENGTH),ge=t.getParameter(r.UNPACK_SKIP_PIXELS),Ce=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ze=0,Pe=Ee.length;Ze<Pe;Ze++){const Te=Ee[Ze],Je=Math.floor(Te.start/4),nt=Math.ceil(Te.count/4),st=Je%M.width,V=Math.floor(Je/M.width),Ae=nt,me=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,st),t.pixelStorei(r.UNPACK_SKIP_ROWS,V),t.texSubImage2D(r.TEXTURE_2D,0,st,V,Ae,me,K,le,M.data)}I.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,pe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}function Me(I,M,K){let le=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=r.TEXTURE_3D);const he=He(I,M),Ee=M.source;t.bindTexture(le,I.__webglTexture,r.TEXTURE0+K);const be=s.get(Ee);if(Ee.version!==be.__version||he===!0){if(t.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const me=Mt.getPrimaries(Mt.workingColorSpace),Re=M.colorSpace===Ur?null:Mt.getPrimaries(M.colorSpace),Oe=M.colorSpace===Ur||me===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let ge=S(M.image,!1,o.maxTextureSize);ge=on(M,ge);const Ce=l.convert(M.format,M.colorSpace),Ze=l.convert(M.type);let Pe=A(M.internalFormat,Ce,Ze,M.normalized,M.colorSpace,M.isVideoTexture);ke(le,M);let Te;const Je=M.mipmaps,nt=M.isVideoTexture!==!0,st=be.__version===void 0||he===!0,V=Ee.dataReady,Ae=P(M,ge);if(M.isDepthTexture)Pe=C(M.format===as,M.type),st&&(nt?t.texStorage2D(r.TEXTURE_2D,1,Pe,ge.width,ge.height):t.texImage2D(r.TEXTURE_2D,0,Pe,ge.width,ge.height,0,Ce,Ze,null));else if(M.isDataTexture)if(Je.length>0){nt&&st&&t.texStorage2D(r.TEXTURE_2D,Ae,Pe,Je[0].width,Je[0].height);for(let me=0,Re=Je.length;me<Re;me++)Te=Je[me],nt?V&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,Te.width,Te.height,Ce,Ze,Te.data):t.texImage2D(r.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Ce,Ze,Te.data);M.generateMipmaps=!1}else nt?(st&&t.texStorage2D(r.TEXTURE_2D,Ae,Pe,ge.width,ge.height),V&&de(M,ge,Ce,Ze)):t.texImage2D(r.TEXTURE_2D,0,Pe,ge.width,ge.height,0,Ce,Ze,ge.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Pe,Je[0].width,Je[0].height,ge.depth);for(let me=0,Re=Je.length;me<Re;me++)if(Te=Je[me],M.format!==bi)if(Ce!==null)if(nt){if(V)if(M.layerUpdates.size>0){const Oe=zm(Te.width,Te.height,M.format,M.type);for(const _e of M.layerUpdates){const et=Te.data.subarray(_e*Oe/Te.data.BYTES_PER_ELEMENT,(_e+1)*Oe/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,_e,Te.width,Te.height,1,Ce,et)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,Ce,Te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,me,Pe,Te.width,Te.height,ge.depth,0,Te.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ge.depth,Ce,Ze,Te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,me,Pe,Te.width,Te.height,ge.depth,0,Ce,Ze,Te.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{nt&&st&&t.texStorage2D(r.TEXTURE_2D,Ae,Pe,Je[0].width,Je[0].height);for(let me=0,Re=Je.length;me<Re;me++)Te=Je[me],M.format!==bi?Ce!==null?nt?V&&t.compressedTexSubImage2D(r.TEXTURE_2D,me,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(r.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Te.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,Te.width,Te.height,Ce,Ze,Te.data):t.texImage2D(r.TEXTURE_2D,me,Pe,Te.width,Te.height,0,Ce,Ze,Te.data)}else if(M.isDataArrayTexture)if(nt){if(st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ae,Pe,ge.width,ge.height,ge.depth),V)if(M.layerUpdates.size>0){const me=zm(ge.width,ge.height,M.format,M.type);for(const Re of M.layerUpdates){const Oe=ge.data.subarray(Re*me/ge.data.BYTES_PER_ELEMENT,(Re+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Re,ge.width,ge.height,1,Ce,Ze,Oe)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Ze,ge.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,ge.width,ge.height,ge.depth,0,Ce,Ze,ge.data);else if(M.isData3DTexture)nt?(st&&t.texStorage3D(r.TEXTURE_3D,Ae,Pe,ge.width,ge.height,ge.depth),V&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Ze,ge.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,ge.width,ge.height,ge.depth,0,Ce,Ze,ge.data);else if(M.isFramebufferTexture){if(st)if(nt)t.texStorage2D(r.TEXTURE_2D,Ae,Pe,ge.width,ge.height);else{let me=ge.width,Re=ge.height;for(let Oe=0;Oe<Ae;Oe++)t.texImage2D(r.TEXTURE_2D,Oe,Pe,me,Re,0,Ce,Ze,null),me>>=1,Re>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const me=r.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),x.add(M),me.onpaint=Re=>{const Oe=Re.changedElements;for(const _e of x)Oe.includes(_e.image)&&(_e.needsUpdate=!0)},me.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ge);else{const Oe=r.RGBA,_e=r.RGBA,et=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Oe,_e,et,ge)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Je.length>0){if(nt&&st){const me=At(Je[0]);t.texStorage2D(r.TEXTURE_2D,Ae,Pe,me.width,me.height)}for(let me=0,Re=Je.length;me<Re;me++)Te=Je[me],nt?V&&t.texSubImage2D(r.TEXTURE_2D,me,0,0,Ce,Ze,Te):t.texImage2D(r.TEXTURE_2D,me,Pe,Ce,Ze,Te);M.generateMipmaps=!1}else if(nt){if(st){const me=At(ge);t.texStorage2D(r.TEXTURE_2D,Ae,Pe,me.width,me.height)}V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,Ze,ge)}else t.texImage2D(r.TEXTURE_2D,0,Pe,Ce,Ze,ge);_(M)&&L(le),be.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function je(I,M,K){if(M.image.length!==6)return;const le=He(I,M),he=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+K);const Ee=s.get(he);if(he.version!==Ee.__version||le===!0){t.activeTexture(r.TEXTURE0+K);const be=Mt.getPrimaries(Mt.workingColorSpace),pe=M.colorSpace===Ur?null:Mt.getPrimaries(M.colorSpace),ge=M.colorSpace===Ur||be===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Ze=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let _e=0;_e<6;_e++)!Ce&&!Ze?Pe[_e]=S(M.image[_e],!0,o.maxCubemapSize):Pe[_e]=Ze?M.image[_e].image:M.image[_e],Pe[_e]=on(M,Pe[_e]);const Te=Pe[0],Je=l.convert(M.format,M.colorSpace),nt=l.convert(M.type),st=A(M.internalFormat,Je,nt,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,Ae=Ee.__version===void 0||le===!0,me=he.dataReady;let Re=P(M,Te);ke(r.TEXTURE_CUBE_MAP,M);let Oe;if(Ce){V&&Ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,st,Te.width,Te.height);for(let _e=0;_e<6;_e++){Oe=Pe[_e].mipmaps;for(let et=0;et<Oe.length;et++){const Ke=Oe[et];M.format!==bi?Je!==null?V?me&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,Ke.width,Ke.height,Je,Ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,st,Ke.width,Ke.height,0,Ke.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,0,0,Ke.width,Ke.height,Je,nt,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et,st,Ke.width,Ke.height,0,Je,nt,Ke.data)}}}else{if(Oe=M.mipmaps,V&&Ae){Oe.length>0&&Re++;const _e=At(Pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,st,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ze){V?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Pe[_e].width,Pe[_e].height,Je,nt,Pe[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,st,Pe[_e].width,Pe[_e].height,0,Je,nt,Pe[_e].data);for(let et=0;et<Oe.length;et++){const Rt=Oe[et].image[_e].image;V?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,Rt.width,Rt.height,Je,nt,Rt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,st,Rt.width,Rt.height,0,Je,nt,Rt.data)}}else{V?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Je,nt,Pe[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,st,Je,nt,Pe[_e]);for(let et=0;et<Oe.length;et++){const Ke=Oe[et];V?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,0,0,Je,nt,Ke.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,et+1,st,Je,nt,Ke.image[_e])}}}_(M)&&L(r.TEXTURE_CUBE_MAP),Ee.__version=he.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Ie(I,M,K,le,he,Ee){const be=l.convert(K.format,K.colorSpace),pe=l.convert(K.type),ge=A(K.internalFormat,be,pe,K.normalized,K.colorSpace),Ce=s.get(M),Ze=s.get(K);if(Ze.__renderTarget=M,!Ce.__hasExternalTextures){const Pe=Math.max(1,M.width>>Ee),Te=Math.max(1,M.height>>Ee);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,ge,Pe,Te,M.depth,0,be,pe,null):t.texImage2D(he,Ee,ge,Pe,Te,0,be,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Wt(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,he,Ze.__webglTexture,0,Dt(M)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,le,he,Ze.__webglTexture,Ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(I,M,K){if(r.bindRenderbuffer(r.RENDERBUFFER,I),M.depthBuffer){const le=M.depthTexture,he=le&&le.isDepthTexture?le.type:null,Ee=C(M.stencilBuffer,he),be=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Wt(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt(M),Ee,M.width,M.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt(M),Ee,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,be,r.RENDERBUFFER,I)}else{const le=M.textures;for(let he=0;he<le.length;he++){const Ee=le[he],be=l.convert(Ee.format,Ee.colorSpace),pe=l.convert(Ee.type),ge=A(Ee.internalFormat,be,pe,Ee.normalized,Ee.colorSpace);Wt(M)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Dt(M),ge,M.width,M.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt(M),ge,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ge,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Gt(I,M,K){const le=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=s.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ke(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ce=l.convert(M.depthTexture.format),Ze=l.convert(M.depthTexture.type);let Pe;M.depthTexture.format===cr?Pe=r.DEPTH_COMPONENT24:M.depthTexture.format===as&&(Pe=r.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Pe,M.width,M.height,0,Ce,Ze,null)}}else k(M.depthTexture,0);const Ee=he.__webglTexture,be=Dt(M),pe=le?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,ge=M.depthTexture.format===as?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===cr)Wt(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,pe,Ee,0,be):r.framebufferTexture2D(r.FRAMEBUFFER,ge,pe,Ee,0);else if(M.depthTexture.format===as)Wt(M)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,pe,Ee,0,be):r.framebufferTexture2D(r.FRAMEBUFFER,ge,pe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(I){const M=s.get(I),K=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const le=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",he)};le.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=le}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let le=0;le<6;le++)Gt(M.__webglFramebuffer[le],I,le);else{const le=I.texture.mipmaps;le&&le.length>0?Gt(M.__webglFramebuffer[0],I,0):Gt(M.__webglFramebuffer,I,0)}else if(K){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=r.createRenderbuffer(),lt(M.__webglDepthbuffer[le],I,!1);else{const he=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer[le];r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ee)}}else{const le=I.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),lt(M.__webglDepthbuffer,I,!1);else{const he=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(I,M,K){const le=s.get(I);M!==void 0&&Ie(le.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&ft(I)}function Ut(I){const M=I.texture,K=s.get(I),le=s.get(M);I.addEventListener("dispose",y);const he=I.textures,Ee=I.isWebGLCubeRenderTarget===!0,be=he.length>1;if(be||(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=M.version,u.memory.textures++),Ee){K.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[pe]=[];for(let ge=0;ge<M.mipmaps.length;ge++)K.__webglFramebuffer[pe][ge]=r.createFramebuffer()}else K.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)K.__webglFramebuffer[pe]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(be)for(let pe=0,ge=he.length;pe<ge;pe++){const Ce=s.get(he[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),u.memory.textures++)}if(I.samples>0&&Wt(I)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ge=he[pe];K.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[pe]);const Ce=l.convert(ge.format,ge.colorSpace),Ze=l.convert(ge.type),Pe=A(ge.internalFormat,Ce,Ze,ge.normalized,ge.colorSpace,I.isXRRenderTarget===!0),Te=Dt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,Pe,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,K.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),lt(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(r.TEXTURE_CUBE_MAP,le.__webglTexture),ke(r.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Ie(K.__webglFramebuffer[pe][ge],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Ie(K.__webglFramebuffer[pe],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(M)&&L(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let pe=0,ge=he.length;pe<ge;pe++){const Ce=he[pe],Ze=s.get(Ce);let Pe=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ze.__webglTexture),ke(Pe,Ce),Ie(K.__webglFramebuffer,I,Ce,r.COLOR_ATTACHMENT0+pe,Pe,0),_(Ce)&&L(Pe)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,le.__webglTexture),ke(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)Ie(K.__webglFramebuffer[ge],I,M,r.COLOR_ATTACHMENT0,pe,ge);else Ie(K.__webglFramebuffer,I,M,r.COLOR_ATTACHMENT0,pe,0);_(M)&&L(pe),t.unbindTexture()}I.depthBuffer&&ft(I)}function ht(I){const M=I.textures;for(let K=0,le=M.length;K<le;K++){const he=M[K];if(_(he)){const Ee=O(I),be=s.get(he).__webglTexture;t.bindTexture(Ee,be),L(Ee),t.unbindTexture()}}}const kt=[],$t=[];function rn(I){if(I.samples>0){if(Wt(I)===!1){const M=I.textures,K=I.width,le=I.height;let he=r.COLOR_BUFFER_BIT;const Ee=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,be=s.get(I),pe=M.length>1;if(pe)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ge=I.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);const Ze=s.get(M[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ze,0)}r.blitFramebuffer(0,0,K,le,0,0,K,le,he,r.NEAREST),h===!0&&(kt.length=0,$t.length=0,kt.push(r.COLOR_ATTACHMENT0+Ce),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(kt.push(Ee),$t.push(Ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,$t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,be.__webglColorRenderbuffer[Ce]);const Ze=s.get(M[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,Ze,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&h){const M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Dt(I){return Math.min(o.maxSamples,I.samples)}function Wt(I){const M=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function G(I){const M=u.render.frame;v.get(I)!==M&&(v.set(I,M),I.update())}function on(I,M){const K=I.colorSpace,le=I.format,he=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==$l&&K!==Ur&&(Mt.getTransfer(K)===Ot?(le!==bi||he!==ui)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",K)),M}function At(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=se,this.getTextureUnits=Y,this.setTextureUnits=ee,this.setTexture2D=k,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=D,this.rebindTextures=xt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function QT(r,e){function t(s,o=Ur){let l;const u=Mt.getTransfer(o);if(s===ui)return r.UNSIGNED_BYTE;if(s===_f)return r.UNSIGNED_SHORT_4_4_4_4;if(s===xf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===qg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===jg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Xg)return r.BYTE;if(s===Yg)return r.SHORT;if(s===no)return r.UNSIGNED_SHORT;if(s===vf)return r.INT;if(s===Bi)return r.UNSIGNED_INT;if(s===Fi)return r.FLOAT;if(s===zi)return r.HALF_FLOAT;if(s===Kg)return r.ALPHA;if(s===$g)return r.RGB;if(s===bi)return r.RGBA;if(s===cr)return r.DEPTH_COMPONENT;if(s===as)return r.DEPTH_STENCIL;if(s===Zg)return r.RED;if(s===Sf)return r.RED_INTEGER;if(s===cs)return r.RG;if(s===yf)return r.RG_INTEGER;if(s===Mf)return r.RGBA_INTEGER;if(s===Vl||s===Hl||s===Gl||s===Wl)if(u===Ot)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Vl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Vl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dd||s===Id||s===Ud||s===Fd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Dd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Id)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ud)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Od||s===kd||s===Bd||s===zd||s===Vd||s===jl||s===Hd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Od||s===kd)return u===Ot?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Bd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===zd)return l.COMPRESSED_R11_EAC;if(s===Vd)return l.COMPRESSED_SIGNED_R11_EAC;if(s===jl)return l.COMPRESSED_RG11_EAC;if(s===Hd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Gd||s===Wd||s===Xd||s===Yd||s===qd||s===jd||s===Kd||s===$d||s===Zd||s===Jd||s===Qd||s===ef||s===tf||s===nf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Gd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$d)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Jd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qd)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ef)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===nf)return u===Ot?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rf||s===sf||s===af)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===rf)return u===Ot?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===af)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===of||s===lf||s===Kl||s===cf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===of)return l.COMPRESSED_RED_RGTC1_EXT;if(s===lf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===io?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const e1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new a0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Vi({vertexShader:e1,fragmentShader:t1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ri(new ic(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i1 extends ds{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,x=null,g=null,E=null,b=null;const R=typeof XRWebGLBinding<"u",S=new n1,_={},L=t.getContextAttributes();let O=null,A=null;const C=[],P=[],F=new Tt;let y=null,N=null;const B=new ci;B.viewport=new Qt;const X=new ci;X.viewport=new Qt;const $=[B,X],se=new uy;let Y=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=C[Z];return de===void 0&&(de=new td,C[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=C[Z];return de===void 0&&(de=new td,C[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=C[Z];return de===void 0&&(de=new td,C[Z]=de),de.getHandSpace()};function fe(Z){const de=P.indexOf(Z.inputSource);if(de===-1)return;const Me=C[de];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,p||u),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Q(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",k);for(let Z=0;Z<C.length;Z++){const de=P[Z];de!==null&&(P[Z]=null,C[Z].disconnect(de))}Y=null,ee=null,S.reset();for(const Z in _)delete _[Z];if(e.setRenderTarget(O),E=null,g=null,x=null,o=null,A=null,He.stop(),s.isPresenting=!1,e.setPixelRatio(y),e.setSize(F.width,F.height,!1),N!==null){const Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return x===null&&R&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",k),L.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,je=null,Ie=null;L.depth&&(Ie=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=L.stencil?as:cr,je=L.stencil?io:Bi);const lt={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(lt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),A=new Ai(g.textureWidth,g.textureHeight,{format:bi,type:ui,depthTexture:new ro(g.textureWidth,g.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Me={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};E=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),A=new Ai(E.framebufferWidth,E.framebufferHeight,{format:bi,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),He.setContext(o),He.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function k(Z){for(let de=0;de<Z.removed.length;de++){const Me=Z.removed[de],je=P.indexOf(Me);je>=0&&(P[je]=null,C[je].disconnect(Me))}for(let de=0;de<Z.added.length;de++){const Me=Z.added[de];let je=P.indexOf(Me);if(je===-1){for(let lt=0;lt<C.length;lt++)if(lt>=P.length){P.push(Me),je=lt;break}else if(P[lt]===null){P[lt]=Me,je=lt;break}if(je===-1)break}const Ie=C[je];Ie&&Ie.connect(Me)}}const q=new oe,j=new oe;function D(Z,de,Me){q.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(Me.matrixWorld);const je=q.distanceTo(j),Ie=de.projectionMatrix.elements,lt=Me.projectionMatrix.elements,Gt=Ie[14]/(Ie[10]-1),ft=Ie[14]/(Ie[10]+1),xt=(Ie[9]+1)/Ie[5],Ut=(Ie[9]-1)/Ie[5],ht=(Ie[8]-1)/Ie[0],kt=(lt[8]+1)/lt[0],$t=Gt*ht,rn=Gt*kt,Dt=je/(-ht+kt),Wt=Dt*-ht;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Wt),Z.translateZ(Dt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const G=Gt+Dt,on=ft+Dt,At=$t-Wt,I=rn+(je-Wt),M=xt*ft/on*G,K=Ut*ft/on*G;Z.projectionMatrix.makePerspective(At,I,M,K,G,on),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let de=Z.near,Me=Z.far;S.texture!==null&&(S.depthNear>0&&(de=S.depthNear),S.depthFar>0&&(Me=S.depthFar)),se.near=X.near=B.near=de,se.far=X.far=B.far=Me,(Y!==se.near||ee!==se.far)&&(o.updateRenderState({depthNear:se.near,depthFar:se.far}),Y=se.near,ee=se.far),se.layers.mask=Z.layers.mask|6,B.layers.mask=se.layers.mask&-5,X.layers.mask=se.layers.mask&-3;const je=Z.parent,Ie=se.cameras;re(se,je);for(let lt=0;lt<Ie.length;lt++)re(Ie[lt],je);Ie.length===2?D(se,B,X):se.projectionMatrix.copy(B.projectionMatrix),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),ve(Z,se,je)};function ve(Z,de,Me){Me===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=uf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(g===null&&E===null))return h},this.setFoveation=function(Z){h=Z,g!==null&&(g.fixedFoveation=Z),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=Z)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(se)},this.getCameraTexture=function(Z){return _[Z]};let Le=null;function ke(Z,de){if(v=de.getViewerPose(p||u),b=de,v!==null){const Me=v.views;E!==null&&(e.setRenderTargetFramebuffer(A,E.framebuffer),e.setRenderTarget(A));let je=!1;Me.length!==se.cameras.length&&(se.cameras.length=0,je=!0);for(let ft=0;ft<Me.length;ft++){const xt=Me[ft];let Ut=null;if(E!==null)Ut=E.getViewport(xt);else{const kt=x.getViewSubImage(g,xt);Ut=kt.viewport,ft===0&&(e.setRenderTargetTextures(A,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(A))}let ht=$[ft];ht===void 0&&(ht=new ci,ht.layers.enable(ft),ht.viewport=new Qt,$[ft]=ht),ht.matrix.fromArray(xt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(xt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),ft===0&&(se.matrix.copy(ht.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),je===!0&&se.cameras.push(ht)}const Ie=o.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){x=s.getBinding();const ft=x.getDepthInformation(Me[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,o.renderState)}if(Ie&&Ie.includes("camera-access")&&R){e.state.unbindTexture(),x=s.getBinding();for(let ft=0;ft<Me.length;ft++){const xt=Me[ft].camera;if(xt){let Ut=_[xt];Ut||(Ut=new a0,_[xt]=Ut);const ht=x.getCameraImage(xt);Ut.sourceTexture=ht}}}}for(let Me=0;Me<C.length;Me++){const je=P[Me],Ie=C[Me];je!==null&&Ie!==void 0&&Ie.update(je,de,p||u)}Le&&Le(Z,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),b=null}const He=new d0;He.setAnimationLoop(ke),this.setAnimationLoop=function(Z){Le=Z},this.dispose=function(){}}}const r1=new nn,_0=new ut;_0.set(-1,0,0,0,1,0,0,0,1);function s1(r,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,o0(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,L,O,A){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(S,_):_.isMeshLambertMaterial?(l(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(S,_),x(S,_)):_.isMeshPhongMaterial?(l(S,_),v(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(S,_),g(S,_),_.isMeshPhysicalMaterial&&E(S,_,A)):_.isMeshMatcapMaterial?(l(S,_),b(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),R(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(u(S,_),_.isLineDashedMaterial&&f(S,_)):_.isPointsMaterial?h(S,_,L,O):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Wn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Wn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),O=L.envMap,A=L.envMapRotation;O&&(S.envMap.value=O,S.envMapRotation.value.setFromMatrix4(r1.makeRotationFromEuler(A)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(_0),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function u(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function f(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function h(S,_,L,O){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=O*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function g(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function E(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.retroreflectivity>0&&(S.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function R(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function a1(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,C){const P=C.program;s.uniformBlockBinding(A,P)}function p(A,C){let P=o[A.id];P===void 0&&(S(A),P=v(A),o[A.id]=P,A.addEventListener("dispose",L));const F=C.program;s.updateUBOMapping(A,F);const y=e.render.frame;l[A.id]!==y&&(g(A),l[A.id]=y)}function v(A){const C=x();A.__bindingPointIndex=C;const P=r.createBuffer(),F=A.__size,y=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,F,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,P),P}function x(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const C=o[A.id],P=A.uniforms,F=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let y=0,N=P.length;y<N;y++){const B=P[y];if(Array.isArray(B))for(let X=0,$=B.length;X<$;X++)E(B[X],y,X,F);else E(B,y,0,F)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(A,C,P,F){if(R(A,C,P,F)===!0){const y=A.__offset,N=A.value;if(Array.isArray(N)){let B=0;for(let X=0;X<N.length;X++){const $=N[X],se=_($);b($,A.__data,B),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(B+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(N,A.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,y,A.__data)}}function b(A,C,P){typeof A=="number"||typeof A=="boolean"?C[0]=A:A.isMatrix3?(C[0]=A.elements[0],C[1]=A.elements[1],C[2]=A.elements[2],C[3]=0,C[4]=A.elements[3],C[5]=A.elements[4],C[6]=A.elements[5],C[7]=0,C[8]=A.elements[6],C[9]=A.elements[7],C[10]=A.elements[8],C[11]=0):ArrayBuffer.isView(A)?C.set(new A.constructor(A.buffer,A.byteOffset,C.length)):A.toArray(C,P)}function R(A,C,P,F){const y=A.value,N=C+"_"+P;if(F[N]===void 0)return typeof y=="number"||typeof y=="boolean"?F[N]=y:ArrayBuffer.isView(y)?F[N]=y.slice():F[N]=y.clone(),!0;{const B=F[N];if(typeof y=="number"||typeof y=="boolean"){if(B!==y)return F[N]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(B.equals(y)===!1)return B.copy(y),!0}}return!1}function S(A){const C=A.uniforms;let P=0;const F=16;for(let N=0,B=C.length;N<B;N++){const X=Array.isArray(C[N])?C[N]:[C[N]];for(let $=0,se=X.length;$<se;$++){const Y=X[$],ee=Array.isArray(Y.value)?Y.value:[Y.value];for(let fe=0,Q=ee.length;fe<Q;fe++){const k=ee[fe],q=_(k),j=P%F,D=j%q.boundary,re=j+D;P+=D,re!==0&&F-re<q.storage&&(P+=F-re),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=q.storage}}}const y=P%F;return y>0&&(P+=F-y),A.__size=P,A.__cache={},this}function _(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(C.boundary=16,C.storage=A.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",A),C}function L(A){const C=A.target;C.removeEventListener("dispose",L);const P=u.indexOf(C.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function O(){for(const A in o)r.deleteBuffer(o[A]);u=[],o={},l={}}return{bind:h,update:p,dispose:O}}const o1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function l1(){return Ii===null&&(Ii=new QS(o1,16,16,cs,zi),Ii.name="DFG_LUT",Ii.minFilter=Ln,Ii.magFilter=Ln,Ii.wrapS=sr,Ii.wrapT=sr,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class c1{constructor(e={}){const{canvas:t=AS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:E=ui}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=u;const R=E,S=new Set([Mf,yf,Sf]),_=new Set([ui,Bi,no,io,_f,xf]),L=new Uint32Array(4),O=new Int32Array(4),A=new oe;let C=null,P=null;const F=[],y=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let X=!1,$=null,se=null,Y=null,ee=null;this._outputColorSpace=li;let fe=0,Q=0,k=null,q=-1,j=null;const D=new Qt,re=new Qt;let ve=null;const Le=new It(0);let ke=0,He=t.width,Z=t.height,de=1,Me=null,je=null;const Ie=new Qt(0,0,He,Z),lt=new Qt(0,0,He,Z);let Gt=!1;const ft=new r0;let xt=!1,Ut=!1;const ht=new nn,kt=new oe,$t=new Qt,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Wt(){return k===null?de:1}let G=s;function on(T,H){return t.getContext(T,H)}let At,I,M,K,le,he,Ee,be,pe,ge,Ce,Ze,Pe,Te,Je,nt,st,V,Ae,me,Re,Oe,_e;try{const T={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gf}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",_n,!1),G===null){const H="webgl2";if(G=on(H,T),G===null)throw on(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(T){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),Lt("WebGLRenderer: "+T.message),T}function et(){At=new lw(G),At.init(),Re=new QT(G,At),I=new JE(G,At,e,Re),M=new ZT(G,At),I.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),se=G.createFramebuffer(),Y=G.createFramebuffer(),ee=G.createFramebuffer(),K=new dw(G),le=new OT,he=new JT(G,At,M,le,I,Re,K),Ee=new ow(B),be=new hy(G),Oe=new $E(G,be),pe=new cw(G,be,K,Oe),ge=new hw(G,pe,be,Oe,K),V=new fw(G,I,he),Je=new QE(le),Ce=new FT(B,Ee,At,I,Oe,Je),Ze=new s1(B,le),Pe=new BT,Te=new XT(At),st=new KE(B,Ee,M,ge,b,h),nt=new $T(B,ge,I),_e=new a1(G,K,I,M),Ae=new ZE(G,At,K),me=new uw(G,At,K),K.programs=Ce.programs,B.capabilities=I,B.extensions=At,B.properties=le,B.renderLists=Pe,B.shadowMap=nt,B.state=M,B.info=K}R!==ui&&(N=new mw(R,t.width,t.height,f,o,l));const Ke=new i1(B,G);this.xr=Ke,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=At.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=At.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(T){T!==void 0&&(de=T,this.setSize(He,Z,!1))},this.getSize=function(T){return T.set(He,Z)},this.setSize=function(T,H,ce=!0){if(Ke.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}He=T,Z=H,t.width=Math.floor(T*de),t.height=Math.floor(H*de),ce===!0&&(t.style.width=T+"px",t.style.height=H+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(He*de,Z*de).floor()},this.setDrawingBufferSize=function(T,H,ce){He=T,Z=H,de=ce,t.width=Math.floor(T*ce),t.height=Math.floor(H*ce),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(R===ui){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(Ie)},this.setViewport=function(T,H,ce,ne){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,H,ce,ne),M.viewport(D.copy(Ie).multiplyScalar(de).round())},this.getScissor=function(T){return T.copy(lt)},this.setScissor=function(T,H,ce,ne){T.isVector4?lt.set(T.x,T.y,T.z,T.w):lt.set(T,H,ce,ne),M.scissor(re.copy(lt).multiplyScalar(de).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(T){M.setScissorTest(Gt=T)},this.setOpaqueSort=function(T){Me=T},this.setTransparentSort=function(T){je=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,ce=!0){let ne=0;if(T){let J=!1;if(k!==null){const Ue=k.texture.format;J=S.has(Ue)}if(J){const Ue=k.texture.type,Ne=_.has(Ue),De=st.getClearColor(),We=st.getClearAlpha(),Qe=De.r,ct=De.g,dt=De.b;Ne?(L[0]=Qe,L[1]=ct,L[2]=dt,L[3]=We,G.clearBufferuiv(G.COLOR,0,L)):(O[0]=Qe,O[1]=ct,O[2]=dt,O[3]=We,G.clearBufferiv(G.COLOR,0,O))}else ne|=G.COLOR_BUFFER_BIT}H&&(ne|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),$=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",_n,!1),st.dispose(),Pe.dispose(),Te.dispose(),le.dispose(),Ee.dispose(),ge.dispose(),Oe.dispose(),_e.dispose(),Ce.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",uo),Ke.removeEventListener("sessionend",fo),Nn.stop()};function Rt(T){T.preventDefault(),Mm("WebGLRenderer: Context Lost."),X=!0}function wt(){Mm("WebGLRenderer: Context Restored."),X=!1;const T=K.autoReset,H=nt.enabled,ce=nt.autoUpdate,ne=nt.needsUpdate,J=nt.type;et(),K.autoReset=T,nt.enabled=H,nt.autoUpdate=ce,nt.needsUpdate=ne,nt.type=J}function _n(T){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Qn(T){const H=T.target;H.removeEventListener("dispose",Qn),Fr(H)}function Fr(T){fs(T),le.remove(T)}function fs(T){const H=le.get(T).programs;H!==void 0&&(H.forEach(function(ce){Ce.releaseProgram(ce)}),T.isShaderMaterial&&Ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,ce,ne,J,Ue){H===null&&(H=rn);const Ne=J.isMesh&&J.matrixWorld.determinantAffine()<0,De=qt(T,H,ce,ne,J);M.setMaterial(ne,Ne);let We=ce.index,Qe=1;if(ne.wireframe===!0){if(We=pe.getWireframeAttribute(ce),We===void 0)return;Qe=2}const ct=ce.drawRange,dt=ce.attributes.position;let Ve=ct.start*Qe,St=(ct.start+ct.count)*Qe;Ue!==null&&(Ve=Math.max(Ve,Ue.start*Qe),St=Math.min(St,(Ue.start+Ue.count)*Qe)),We!==null?(Ve=Math.max(Ve,0),St=Math.min(St,We.count)):dt!=null&&(Ve=Math.max(Ve,0),St=Math.min(St,dt.count));const Zt=St-Ve;if(Zt<0||Zt===1/0)return;Oe.setup(J,ne,De,ce,We);let Bt,Nt=Ae;if(We!==null&&(Bt=be.get(We),Nt=me,Nt.setIndex(Bt)),J.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*Wt()),Nt.setMode(G.LINES)):Nt.setMode(G.TRIANGLES);else if(J.isLine){let ln=ne.linewidth;ln===void 0&&(ln=1),M.setLineWidth(ln*Wt()),J.isLineSegments?Nt.setMode(G.LINES):J.isLineLoop?Nt.setMode(G.LINE_LOOP):Nt.setMode(G.LINE_STRIP)}else J.isPoints?Nt.setMode(G.POINTS):J.isSprite&&Nt.setMode(G.TRIANGLES);if(J.isBatchedMesh)if(At.get("WEBGL_multi_draw"))Nt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ln=J._multiDrawStarts,Be=J._multiDrawCounts,en=J._multiDrawCount,yt=We?be.get(We).bytesPerElement:1,En=le.get(ne).currentProgram.getUniforms();for(let pt=0;pt<en;pt++)En.setValue(G,"_gl_DrawID",pt),Nt.render(ln[pt]/yt,Be[pt])}else if(J.isInstancedMesh)Nt.renderInstances(Ve,Zt,J.count);else if(ce.isInstancedBufferGeometry){const ln=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Be=Math.min(ce.instanceCount,ln);Nt.renderInstances(Ve,Zt,Be)}else Nt.render(Ve,Zt)};function Or(T,H,ce,ne){$!==null&&T.isNodeMaterial&&$.setObject(ne,T),xt===!0&&Je.setState(T,ce,!1),T.transparent===!0&&T.side===rr&&T.forceSinglePass===!1?(T.side=Wn,T.needsUpdate=!0,zr(T,H,ne),T.side=os,T.needsUpdate=!0,zr(T,H,ne),T.side=rr):zr(T,H,ne)}this.compile=function(T,H,ce=null){ce===null&&(ce=T),$!==null&&$.renderStart(T,H,ce),P=Te.get(ce),P.init(H),y.push(P),ce.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),T!==ce&&T.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights(),$!==null&&$.updateLights(P.state.lightsArray),Ut=this.localClippingEnabled,xt=Je.init(this.clippingPlanes,Ut),xt===!0&&Je.setGlobalState(this.clippingPlanes,H),$!==null&&nt.render(P.state.shadowsArray,ce,H);const ne=new Set;return T.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ue=J.material;if(Ue)if(Array.isArray(Ue))for(let Ne=0;Ne<Ue.length;Ne++){const De=Ue[Ne];Or(De,ce,H,J),ne.add(De)}else Or(Ue,ce,H,J),ne.add(Ue)}),P=y.pop(),$!==null&&$.renderEnd(),ne},this.compileAsync=function(T,H,ce=null){const ne=this.compile(T,H,ce);return new Promise(J=>{function Ue(){if(ne.forEach(function(Ne){const We=le.get(Ne).currentProgram;(We===void 0||We.isReady())&&ne.delete(Ne)}),ne.size===0){J(T);return}setTimeout(Ue,10)}At.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let kr=null;function ac(T){kr&&kr(T)}function uo(){Nn.stop()}function fo(){Nn.start()}const Nn=new d0;Nn.setAnimationLoop(ac),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(T){kr=T,Ke.setAnimationLoop(T),T===null?Nn.stop():Nn.start()},Ke.addEventListener("sessionstart",uo),Ke.addEventListener("sessionend",fo),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;$!==null&&$.renderStart(T,H);const ce=Ke.enabled===!0&&Ke.isPresenting===!0,ne=N!==null&&(k===null||ce)&&N.begin(B,k);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(H),H=Ke.getCamera()),T.isScene===!0&&T.onBeforeRender(B,T,H,k),P=Te.get(T,y.length),P.init(H),P.state.textureUnits=he.getTextureUnits(),y.push(P),ht.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ft.setFromProjectionMatrix(ht,Oi,H.reversedDepth),Ut=this.localClippingEnabled,xt=Je.init(this.clippingPlanes,Ut),C=Pe.get(T,F.length),C.init(),F.push(C),Ke.enabled===!0&&Ke.isPresenting===!0){const Ne=B.xr.getDepthSensingMesh();Ne!==null&&hs(Ne,H,-1/0,B.sortObjects)}hs(T,H,0,B.sortObjects),C.finish(),$!==null&&$.updateLights(P.state.lightsArray),B.sortObjects===!0&&C.sort(Me,je),Dt=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,Dt&&st.addToRenderList(C,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Je.beginShadows();const J=P.state.shadowsArray;if(nt.render(J,T,H),xt===!0&&Je.endShadows(),(ne&&N.hasRenderPass())===!1){const Ne=C.opaque,De=C.transmissive;if(P.setupLights(),H.isArrayCamera){const We=H.cameras;if(De.length>0)for(let Qe=0,ct=We.length;Qe<ct;Qe++){const dt=We[Qe];ho(Ne,De,T,dt)}Dt&&st.render(T);for(let Qe=0,ct=We.length;Qe<ct;Qe++){const dt=We[Qe];aa(C,T,dt,dt.viewport)}}else De.length>0&&ho(Ne,De,T,H),Dt&&st.render(T),aa(C,T,H)}k!==null&&Q===0&&(he.updateMultisampleRenderTarget(k),he.updateRenderTargetMipmap(k)),ne&&N.end(B),T.isScene===!0&&T.onAfterRender(B,T,H),Oe.resetDefaultState(),q=-1,j=null,y.pop(),y.length>0?(P=y[y.length-1],he.setTextureUnits(P.state.textureUnits),xt===!0&&Je.setGlobalState(B.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?C=F[F.length-1]:C=null,$!==null&&$.renderEnd()};function hs(T,H,ce,ne){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)ce=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLightProbeGrid)P.pushLightProbeGrid(T);else if(T.isLight)P.pushLight(T),T.castShadow&&P.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ft)){ne&&$t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);const Ne=ge.update(T),De=T.material;De.visible&&C.push(T,Ne,De,ce,$t.z,null,H)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ft))){const Ne=ge.update(T),De=T.material;if(ne&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$t.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),$t.copy(Ne.boundingSphere.center)),$t.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(De)){const We=Ne.groups;for(let Qe=0,ct=We.length;Qe<ct;Qe++){const dt=We[Qe],Ve=De[dt.materialIndex];Ve&&Ve.visible&&C.push(T,Ne,Ve,ce,$t.z,dt,H)}}else De.visible&&C.push(T,Ne,De,ce,$t.z,null,H)}}const Ue=T.children;for(let Ne=0,De=Ue.length;Ne<De;Ne++)hs(Ue[Ne],H,ce,ne)}function aa(T,H,ce,ne){const{opaque:J,transmissive:Ue,transparent:Ne}=T;P.setupLightsView(ce),xt===!0&&Je.setGlobalState(B.clippingPlanes,ce),ne&&M.viewport(D.copy(ne)),J.length>0&&Br(J,H,ce),Ue.length>0&&Br(Ue,H,ce),Ne.length>0&&Br(Ne,H,ce),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ho(T,H,ce,ne){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){const Ve=At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new Ai(1,1,{generateMipmaps:!0,type:Ve?zi:ui,minFilter:ss,samples:Math.max(4,I.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ue=P.state.transmissionRenderTarget[ne.id],Ne=ne.viewport||D;Ue.setSize(Ne.z*B.transmissionResolutionScale,Ne.w*B.transmissionResolutionScale);const De=B.getRenderTarget(),We=B.getActiveCubeFace(),Qe=B.getActiveMipmapLevel();B.setRenderTarget(Ue),B.getClearColor(Le),ke=B.getClearAlpha(),ke<1&&B.setClearColor(16777215,.5),B.clear(),Dt&&st.render(ce);const ct=B.toneMapping;B.toneMapping=ki;const dt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),xt===!0&&Je.setGlobalState(B.clippingPlanes,ne),Br(T,ce,ne),he.updateMultisampleRenderTarget(Ue),he.updateRenderTargetMipmap(Ue),At.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let St=0,Zt=H.length;St<Zt;St++){const Bt=H[St],{object:Nt,geometry:ln,material:Be,group:en}=Bt;if(Be.side===rr&&Nt.layers.test(ne.layers)){const yt=Be.side;Be.side=Wn,Be.needsUpdate=!0,oa(Nt,ce,ne,ln,Be,en),Be.side=yt,Be.needsUpdate=!0,Ve=!0}}Ve===!0&&(he.updateMultisampleRenderTarget(Ue),he.updateRenderTargetMipmap(Ue))}B.setRenderTarget(De,We,Qe),B.setClearColor(Le,ke),dt!==void 0&&(ne.viewport=dt),B.toneMapping=ct}function Br(T,H,ce){const ne=H.isScene===!0?H.overrideMaterial:null;for(let J=0,Ue=T.length;J<Ue;J++){const Ne=T[J],{object:De,geometry:We,group:Qe}=Ne;let ct=Ne.material;ct.allowOverride===!0&&ne!==null&&(ct=ne),De.layers.test(ce.layers)&&oa(De,H,ce,We,ct,Qe)}}function oa(T,H,ce,ne,J,Ue){$!==null&&J.isNodeMaterial&&$.setObject(T,J),T.onBeforeRender(B,H,ce,ne,J,Ue),T.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),J.onBeforeRender(B,H,ce,ne,T,Ue),J.transparent===!0&&J.side===rr&&J.forceSinglePass===!1?(J.side=Wn,J.needsUpdate=!0,B.renderBufferDirect(ce,H,ne,J,T,Ue),J.side=os,J.needsUpdate=!0,B.renderBufferDirect(ce,H,ne,J,T,Ue),J.side=rr):B.renderBufferDirect(ce,H,ne,J,T,Ue),T.onAfterRender(B,H,ce,ne,J,Ue)}function zr(T,H,ce){H.isScene!==!0&&(H=rn);const ne=le.get(T),J=P.state.lights,Ue=P.state.shadowsArray,Ne=J.state.version,De=Ce.getParameters(T,J.state,Ue,H,ce,P.state.lightProbeGridArray),We=Ce.getProgramCacheKey(De);let Qe=ne.programs;ne.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,ne.fog=H.fog;const ct=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ne.envMap=Ee.get(T.envMap||ne.environment,ct),ne.envMapRotation=ne.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Qe===void 0&&(T.addEventListener("dispose",Qn),Qe=new Map,ne.programs=Qe);let dt=Qe.get(We);if(dt!==void 0){if(ne.currentProgram===dt&&ne.lightsStateVersion===Ne)return po(T,De),dt}else De.uniforms=Ce.getUniforms(T),$!==null&&T.isNodeMaterial&&$.build(T,ce,De),T.onBeforeCompile(De,B),dt=Ce.acquireProgram(De,We),Qe.set(We,dt),ne.uniforms=De.uniforms;const Ve=ne.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=Je.uniform),po(T,De),ne.needsLights=ca(T),ne.lightsStateVersion=Ne,ne.needsLights&&(Ve.ambientLightColor.value=J.state.ambient,Ve.lightProbe.value=J.state.probe,Ve.sunLights.value=J.state.sun,Ve.sunLightShadows.value=J.state.sunShadow,Ve.directionalLights.value=J.state.directional,Ve.directionalLightShadows.value=J.state.directionalShadow,Ve.spotLights.value=J.state.spot,Ve.spotLightShadows.value=J.state.spotShadow,Ve.rectAreaLights.value=J.state.rectArea,Ve.ltc_1.value=J.state.rectAreaLTC1,Ve.ltc_2.value=J.state.rectAreaLTC2,Ve.pointLights.value=J.state.point,Ve.pointLightShadows.value=J.state.pointShadow,Ve.hemisphereLights.value=J.state.hemi,Ve.sunShadowMatrix.value=J.state.sunShadowMatrix,Ve.sunShadowCascade.value=J.state.sunShadowCascade,Ve.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ve.spotLightMatrix.value=J.state.spotLightMatrix,Ve.spotLightMap.value=J.state.spotLightMap,Ve.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.lightProbeGrid=P.state.lightProbeGridArray.length>0,ne.currentProgram=dt,ne.uniformsList=null,dt}function la(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Xl.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function po(T,H){const ce=le.get(T);ce.outputColorSpace=H.outputColorSpace,ce.batching=H.batching,ce.batchingColor=H.batchingColor,ce.instancing=H.instancing,ce.instancingColor=H.instancingColor,ce.instancingMorph=H.instancingMorph,ce.skinning=H.skinning,ce.morphTargets=H.morphTargets,ce.morphNormals=H.morphNormals,ce.morphColors=H.morphColors,ce.morphTargetsCount=H.morphTargetsCount,ce.numClippingPlanes=H.numClippingPlanes,ce.numIntersection=H.numClipIntersection,ce.vertexAlphas=H.vertexAlphas,ce.vertexTangents=H.vertexTangents,ce.toneMapping=H.toneMapping}function oc(T,H){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;A.setFromMatrixPosition(H.matrixWorld);for(let ce=0,ne=T.length;ce<ne;ce++){const J=T[ce];if(J.texture!==null&&J.boundingBox.containsPoint(A))return J}return null}function qt(T,H,ce,ne,J){H.isScene!==!0&&(H=rn),he.resetTextureUnits();const Ue=H.fog,Ne=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?H.environment:null,De=k===null?B.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Mt.workingColorSpace,We=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=Ee.get(ne.envMap||Ne,We),ct=ne.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,dt=!!ce.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ve=!!ce.morphAttributes.position,St=!!ce.morphAttributes.normal,Zt=!!ce.morphAttributes.color;let Bt=ki;ne.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Bt=B.toneMapping);const Nt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,ln=Nt!==void 0?Nt.length:0,Be=le.get(ne),en=P.state.lights;if(xt===!0&&(Ut===!0||T!==j)){const Ft=T===j&&ne.id===q;Je.setState(ne,T,Ft)}let yt=!1;ne.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==en.state.version||Be.outputColorSpace!==De||J.isBatchedMesh&&Be.batching===!1||!J.isBatchedMesh&&Be.batching===!0||J.isBatchedMesh&&Be.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Be.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Be.instancing===!1||!J.isInstancedMesh&&Be.instancing===!0||J.isSkinnedMesh&&Be.skinning===!1||!J.isSkinnedMesh&&Be.skinning===!0||J.isInstancedMesh&&Be.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Be.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Be.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Be.instancingMorph===!1&&J.morphTexture!==null||Be.envMap!==Qe||ne.fog===!0&&Be.fog!==Ue||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Je.numPlanes||Be.numIntersection!==Je.numIntersection)||Be.vertexAlphas!==ct||Be.vertexTangents!==dt||Be.morphTargets!==Ve||Be.morphNormals!==St||Be.morphColors!==Zt||Be.toneMapping!==Bt||Be.morphTargetsCount!==ln||!!Be.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Be.__version=ne.version);let En=Be.currentProgram;yt===!0&&(En=zr(ne,H,J),$&&ne.isNodeMaterial&&$.onUpdateProgram(ne,En,Be));let pt=!1,fi=!1,Gi=!1;const Ct=En.getUniforms(),Xt=Be.uniforms;if(M.useProgram(En.program)&&(pt=!0,fi=!0,Gi=!0),ne.id!==q&&(q=ne.id,fi=!0),Be.needsLights){const Ft=oc(P.state.lightProbeGridArray,J);Be.lightProbeGrid!==Ft&&(Be.lightProbeGrid=Ft,fi=!0)}if(pt||j!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ct.setValue(G,"projectionMatrix",T.projectionMatrix),Ct.setValue(G,"viewMatrix",T.matrixWorldInverse);const ei=Ct.map.cameraPosition;ei!==void 0&&ei.setValue(G,kt.setFromMatrixPosition(T.matrixWorld)),I.logarithmicDepthBuffer&&Ct.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ct.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,fi=!0,Gi=!0)}if(Be.needsLights&&(en.state.sunShadowMap.length>0&&Ct.setValue(G,"sunShadowMap",en.state.sunShadowMap,he),en.state.directionalShadowMap.length>0&&Ct.setValue(G,"directionalShadowMap",en.state.directionalShadowMap,he),en.state.spotShadowMap.length>0&&Ct.setValue(G,"spotShadowMap",en.state.spotShadowMap,he),en.state.pointShadowMap.length>0&&Ct.setValue(G,"pointShadowMap",en.state.pointShadowMap,he)),J.isSkinnedMesh){Ct.setOptional(G,J,"bindMatrix"),Ct.setOptional(G,J,"bindMatrixInverse");const Ft=J.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Ct.setValue(G,"boneTexture",Ft.boneTexture,he))}J.isBatchedMesh&&(Ct.setOptional(G,J,"batchingTexture"),Ct.setValue(G,"batchingTexture",J._matricesTexture,he),Ct.setOptional(G,J,"batchingIdTexture"),Ct.setValue(G,"batchingIdTexture",J._indirectTexture,he),Ct.setOptional(G,J,"batchingColorTexture"),J._colorsTexture!==null&&Ct.setValue(G,"batchingColorTexture",J._colorsTexture,he));const hi=ce.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&V.update(J,ce,En),(fi||Be.receiveShadow!==J.receiveShadow)&&(Be.receiveShadow=J.receiveShadow,Ct.setValue(G,"receiveShadow",J.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&H.environment!==null&&(Xt.envMapIntensity.value=H.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=l1()),fi){if(Ct.setValue(G,"toneMappingExposure",B.toneMappingExposure),Be.needsLights&&lc(Xt,Gi),Ue&&ne.fog===!0&&Ze.refreshFogUniforms(Xt,Ue),Ze.refreshMaterialUniforms(Xt,ne,de,Z,P.state.transmissionRenderTarget[T.id]),Be.needsLights&&Be.lightProbeGrid){const Ft=Be.lightProbeGrid;Xt.probesSH.value=Ft.texture,Xt.probesMin.value.copy(Ft.boundingBox.min),Xt.probesMax.value.copy(Ft.boundingBox.max),Xt.probesResolution.value.copy(Ft.resolution)}Xl.upload(G,la(Be),Xt,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Xl.upload(G,la(Be),Xt,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ct.setValue(G,"center",J.center),Ct.setValue(G,"modelViewMatrix",J.modelViewMatrix),Ct.setValue(G,"normalMatrix",J.normalMatrix),Ct.setValue(G,"modelMatrix",J.matrixWorld),ne.uniformsGroups!==void 0){const Ft=ne.uniformsGroups;for(let ei=0,pi=Ft.length;ei<pi;ei++){const mi=Ft[ei];_e.update(mi,En),_e.bind(mi,En)}}return En}function lc(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.sunLights.needsUpdate=H,T.sunLightShadows.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function ca(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,H,ce){const ne=le.get(T);ne.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),le.get(T.texture).__webglTexture=H,le.get(T.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ce,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const ce=le.get(T);ce.__webglFramebuffer=H,ce.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,ce=0){k=T,fe=H,Q=ce;let ne=null,J=!1,Ue=!1;if(T){const De=le.get(T);if(De.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(G.FRAMEBUFFER,De.__webglFramebuffer),D.copy(T.viewport),re.copy(T.scissor),ve=T.scissorTest,M.viewport(D),M.scissor(re),M.setScissorTest(ve),q=-1;return}else if(De.__webglFramebuffer===void 0)he.setupRenderTarget(T);else if(De.__hasExternalTextures)he.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ct=T.depthTexture;if(De.__boundDepthTexture!==ct){if(ct!==null&&le.has(ct)&&(T.width!==ct.image.width||T.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(T)}}const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ue=!0);const Qe=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[H])?ne=Qe[H][ce]:ne=Qe[H],J=!0):T.samples>0&&he.useMultisampledRTT(T)===!1?ne=le.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[ce]:ne=Qe,D.copy(T.viewport),re.copy(T.scissor),ve=T.scissorTest}else D.copy(Ie).multiplyScalar(de).floor(),re.copy(lt).multiplyScalar(de).floor(),ve=Gt;if(ce!==0&&(ne=se),M.bindFramebuffer(G.FRAMEBUFFER,ne)&&M.drawBuffers(T,ne),M.viewport(D),M.scissor(re),M.setScissorTest(ve),J){const De=le.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+H,De.__webglTexture,ce)}else if(Ue){const De=H;for(let We=0;We<T.textures.length;We++){const Qe=le.get(T.textures[We]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+We,Qe.__webglTexture,ce,De)}}else if(T!==null&&ce!==0){const De=le.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,De.__webglTexture,ce)}q=-1};function ua(T){const H=le.get(T);return(H.__readFormat!==T.format||H.__readType!==T.type)&&(H.__readFormat=T.format,H.__readType=T.type,H.__formatReadable=I.textureFormatReadable(T.format),H.__typeReadable=I.textureTypeReadable(T.type)),H}this.readRenderTargetPixels=function(T,H,ce,ne,J,Ue,Ne,De=0){if(!(T&&T.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We){M.bindFramebuffer(G.FRAMEBUFFER,We);try{const Qe=T.textures[De],ct=Qe.format,dt=Qe.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+De);const Ve=ua(Qe);if(Ve.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-ne&&ce>=0&&ce<=T.height-J&&G.readPixels(H,ce,ne,J,Re.convert(ct),Re.convert(dt),Ue)}finally{const Qe=k!==null?le.get(k).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(T,H,ce,ne,J,Ue,Ne,De=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(We=We[Ne]),We)if(H>=0&&H<=T.width-ne&&ce>=0&&ce<=T.height-J){M.bindFramebuffer(G.FRAMEBUFFER,We);const Qe=T.textures[De],ct=Qe.format,dt=Qe.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+De);const Ve=ua(Qe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,St),G.bufferData(G.PIXEL_PACK_BUFFER,Ue.byteLength,G.STREAM_READ),G.readPixels(H,ce,ne,J,Re.convert(ct),Re.convert(dt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const Zt=k!==null?le.get(k).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Zt);const Bt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await RS(G,Bt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,St),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ue),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(St),G.deleteSync(Bt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,ce=0){const ne=Math.pow(2,-ce),J=Math.floor(T.image.width*ne),Ue=Math.floor(T.image.height*ne),Ne=H!==null?H.x:0,De=H!==null?H.y:0;he.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,ce,0,0,Ne,De,J,Ue),M.unbindTexture()},this.copyTextureToTexture=function(T,H,ce=null,ne=null,J=0,Ue=0){let Ne,De,We,Qe,ct,dt,Ve,St,Zt;const Bt=T.isCompressedTexture?T.mipmaps[Ue]:T.image;if(ce!==null)Ne=ce.max.x-ce.min.x,De=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,Qe=ce.min.x,ct=ce.min.y,dt=ce.isBox3?ce.min.z:0;else{const Xt=Math.pow(2,-J);Ne=Math.floor(Bt.width*Xt),De=Math.floor(Bt.height*Xt),T.isDataArrayTexture?We=Bt.depth:T.isData3DTexture?We=Math.floor(Bt.depth*Xt):We=1,Qe=0,ct=0,dt=0}ne!==null?(Ve=ne.x,St=ne.y,Zt=ne.z):(Ve=0,St=0,Zt=0);const Nt=Re.convert(H.format),ln=Re.convert(H.type);let Be;H.isData3DTexture?(he.setTexture3D(H,0),Be=G.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(he.setTexture2DArray(H,0),Be=G.TEXTURE_2D_ARRAY):(he.setTexture2D(H,0),Be=G.TEXTURE_2D),M.activeTexture(G.TEXTURE0),M.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);const en=M.getParameter(G.UNPACK_ROW_LENGTH),yt=M.getParameter(G.UNPACK_IMAGE_HEIGHT),En=M.getParameter(G.UNPACK_SKIP_PIXELS),pt=M.getParameter(G.UNPACK_SKIP_ROWS),fi=M.getParameter(G.UNPACK_SKIP_IMAGES);M.pixelStorei(G.UNPACK_ROW_LENGTH,Bt.width),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Bt.height),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Qe),M.pixelStorei(G.UNPACK_SKIP_ROWS,ct),M.pixelStorei(G.UNPACK_SKIP_IMAGES,dt);const Gi=T.isDataArrayTexture||T.isData3DTexture,Ct=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const Xt=le.get(T),hi=le.get(H),Ft=le.get(Xt.__renderTarget),ei=le.get(hi.__renderTarget);M.bindFramebuffer(G.READ_FRAMEBUFFER,Ft.__webglFramebuffer),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let pi=0;pi<We;pi++)Gi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,le.get(T).__webglTexture,J,dt+pi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,le.get(H).__webglTexture,Ue,Zt+pi)),G.blitFramebuffer(Qe,ct,Ne,De,Ve,St,Ne,De,G.DEPTH_BUFFER_BIT,G.NEAREST);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(J!==0||T.isRenderTargetTexture||le.has(T)){const Xt=le.get(T),hi=le.get(H);M.bindFramebuffer(G.READ_FRAMEBUFFER,Y),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,ee);for(let Ft=0;Ft<We;Ft++)Gi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Xt.__webglTexture,J,dt+Ft):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Xt.__webglTexture,J),Ct?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,hi.__webglTexture,Ue,Zt+Ft):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,hi.__webglTexture,Ue),J!==0?G.blitFramebuffer(Qe,ct,Ne,De,Ve,St,Ne,De,G.COLOR_BUFFER_BIT,G.NEAREST):Ct?G.copyTexSubImage3D(Be,Ue,Ve,St,Zt+Ft,Qe,ct,Ne,De):G.copyTexSubImage2D(Be,Ue,Ve,St,Qe,ct,Ne,De);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ct?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Be,Ue,Ve,St,Zt,Ne,De,We,Nt,ln,Bt.data):H.isCompressedArrayTexture?G.compressedTexSubImage3D(Be,Ue,Ve,St,Zt,Ne,De,We,Nt,Bt.data):G.texSubImage3D(Be,Ue,Ve,St,Zt,Ne,De,We,Nt,ln,Bt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ue,Ve,St,Ne,De,Nt,ln,Bt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ue,Ve,St,Bt.width,Bt.height,Nt,Bt.data):G.texSubImage2D(G.TEXTURE_2D,Ue,Ve,St,Ne,De,Nt,ln,Bt);M.pixelStorei(G.UNPACK_ROW_LENGTH,en),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,yt),M.pixelStorei(G.UNPACK_SKIP_PIXELS,En),M.pixelStorei(G.UNPACK_SKIP_ROWS,pt),M.pixelStorei(G.UNPACK_SKIP_IMAGES,fi),Ue===0&&H.generateMipmaps&&G.generateMipmap(Be),M.unbindTexture()},this.initRenderTarget=function(T){le.get(T).__webglFramebuffer===void 0&&he.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?he.setTextureCube(T,0):T.isData3DTexture?he.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?he.setTexture2DArray(T,0):he.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){fe=0,Q=0,k=null,M.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const u1=()=>{const r=_t.useRef(null),{theme:e}=hg();return _t.useEffect(()=>{const t=r.current;if(!t)return;const s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=new WS,l=new ci(42,1,.1,40);l.position.set(0,0,6.2);const u=new c1({antialias:!0,alpha:!0,powerPreference:"low-power"});u.setPixelRatio(Math.min(window.devicePixelRatio,1.4)),u.setClearColor(0,0),u.domElement.style.width="100%",u.domElement.style.height="100%",u.domElement.style.display="block",t.appendChild(u.domElement);const f=e==="dark"?15254430:9202506,h=e==="dark"?8227458:6056803,p=new Ja;o.add(p);const v=(A,C,P,F,y)=>{const N=new Af({color:C,wireframe:!0,transparent:!0,opacity:y,depthWrite:!1}),B=new Ri(A,N);B.position.set(...P),B.scale.setScalar(F),p.add(B)};v(new Rf(1.55,0),f,[.55,.05,0],1,.42),v(new Cf(1,0),h,[-2.35,.85,-1.1],.52,.32),v(new Pf(1,0),f,[2.15,-.95,-.7],.48,.34);const x={x:0,y:0},g=A=>{x.x=(A.clientX/window.innerWidth-.5)*2,x.y=(A.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",g,{passive:!0});const E=()=>{const A=t.clientWidth,C=t.clientHeight;!A||!C||(l.aspect=A/C,l.updateProjectionMatrix(),u.setSize(A,C,!1))};E();const b=new ResizeObserver(E);b.observe(t);let R=!0;const S=new IntersectionObserver(([A])=>{R=A.isIntersecting},{threshold:.05});S.observe(t);let _=0;const L=new dy,O=()=>{if(_=requestAnimationFrame(O),!R||document.hidden)return;const A=L.getElapsedTime();s?(p.rotation.y=.35,p.rotation.x=.16):(p.rotation.y=A*.1+x.x*.22,p.rotation.x=.16+x.y*.12),u.render(o,l)};return O(),()=>{cancelAnimationFrame(_),window.removeEventListener("pointermove",g),b.disconnect(),S.disconnect(),p.traverse(A=>{if(A instanceof Ri){A.geometry.dispose();const C=A.material;Array.isArray(C)?C.forEach(P=>P.dispose()):C.dispose()}}),u.dispose(),u.domElement.remove()}},[e]),te.jsx("div",{ref:r,className:"pointer-events-none absolute inset-0 -z-10","aria-hidden":!0})},Pn={name:"Dagm Yibabe",role:"Software developer",location:"Debre Berhan, Ethiopia",email:"dagimyibabe19@gmail.com",phone:"+251-97-913-5593",phoneHref:"tel:+251979135593",resume:"https://drive.google.com/file/d/19zcaLwVOTHwAOmXU2pwwgZ6hAtBtWt_y/view?usp=sharing",github:"https://github.com/dag12y",linkedin:"https://www.linkedin.com/in/dagm-yibabe-46b85b353/",twitter:"https://x.com/Dagm0852389280?t=I0AFervOaxY1izTAy-3P_A&s=09",summary:"I build practical software — from supply-chain security tools to language tech for Amharic and Tigrigna — with clean code and a light visual touch."},d1=["React","TypeScript","Node.js","Go","Python","PostgreSQL","MongoDB","Docker","NLP","Git"],cg=[{id:1,title:"SafeRun",description:"A CLI and Docker sandbox that inspects npm packages before install, so teams can catch supply-chain risk early.",image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200",category:"Security",technologies:["Go","Docker","Node.js"],links:{live:"https://www.saferun.tech/",github:"https://github.com/dag12y/saferun"},status:"Live",featured:!0},{id:2,title:"EthioNLP",description:"NLP tooling for Ethiopian languages, with a focus on Amharic and Tigrigna research workflows.",image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",category:"AI / NLP",technologies:["Python","NLP","ML"],links:{live:null,github:"https://github.com/dag12y/ethionlp"},status:"In progress",featured:!0},{id:3,title:"Chef-AI",description:"Recipes from whatever is in the fridge — an ingredient-first cooking assistant.",image:"https://i.postimg.cc/L6xJbx3Q/image.png",category:"Web",technologies:["React","AI APIs","Vite"],links:{live:"https://chef-ai-two.vercel.app/",github:"https://github.com/dag12y/Chef-AI"},status:"Live",featured:!0},{id:4,title:"Chat App",description:"Realtime messaging with auth and history, built on the MERN stack and Socket.io.",image:"https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200",category:"Web",technologies:["React","Node.js","MongoDB"],links:{live:null,github:"https://github.com/dag12y/chat-app"},status:"Completed",featured:!1},{id:5,title:"Letter Hunt",description:"A compact word game: guess letters, uncover the word, stay within the attempt limit.",image:"https://i.postimg.cc/7LYmysFC/Screenshot-2025-07-17-212657.png",category:"Game",technologies:["React","Vite"],links:{live:"https://letter-hunt.vercel.app/",github:"https://github.com/dag12y/Letter-Hunt"},status:"Live",featured:!1},{id:6,title:"Tenzies",description:"Hold matching dice, reroll the rest, lock a full set. Fast React gameplay.",image:"https://i.postimg.cc/YCxbZKsK/Screenshot-2025-07-17-212026.png",category:"Game",technologies:["React","Vite"],links:{live:"https://tenzies-dagm.vercel.app/",github:"https://github.com/dag12y/Tenzies"},status:"Live",featured:!1},{id:7,title:"Amharic–Tigrigna Analyser",description:"Morphology and syntax helpers for Amharic and Tigrigna text, aimed at researchers and learners.",image:"https://i.postimg.cc/PxzDrZBC/Screenshot-2025-07-17-220555.png",category:"Language",technologies:["Python","Flask","NLP"],links:{live:null,github:"https://github.com/dag12y/amharic-tigrigna-analyser"},status:"Completed",featured:!1}],f1=[{title:"Ambassador Team Leader",place:"SkillBridge Institute of Technology",period:"2025 — Present",note:"Workshops, mentorship, and a community around practical coding."},{title:"BSc Electrical & Computer Engineering",place:"Addis Ababa University",period:"2023 — Present",note:"Hardware, embedded systems, and computer architecture."},{title:"Data Structures & Algorithms",place:"A2SV",period:"2025 — Present",note:"Problem-solving and interview-ready algorithm practice."},{title:"Independent developer",place:"Freelance & personal work",period:"2020 — Present",note:"Web apps, local tools, and shipping projects end to end."}],h1=()=>te.jsxs("section",{id:"home",className:"relative flex min-h-screen items-center overflow-hidden",children:[te.jsx(u1,{}),te.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-background/55 to-background"}),te.jsxs("div",{className:"relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20",children:[te.jsx("p",{className:"mb-6 text-sm tracking-[0.28em] text-warm uppercase",children:Pn.role}),te.jsx("h1",{className:"font-serif max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl",children:Pn.name}),te.jsx("p",{className:"mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground",children:Pn.summary}),te.jsxs("div",{className:"mt-10 flex flex-wrap items-center gap-6",children:[te.jsxs("button",{onClick:()=>document.getElementById("work")?.scrollIntoView({behavior:"smooth"}),className:"inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground",children:["Selected work",te.jsx(Ex,{className:"h-4 w-4"})]}),te.jsxs("div",{className:"flex items-center gap-4 text-muted-foreground",children:[te.jsx("a",{href:Pn.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",className:"hover:text-foreground",children:te.jsx(mf,{className:"h-5 w-5"})}),te.jsx("a",{href:Pn.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",className:"hover:text-foreground",children:te.jsx(Ng,{className:"h-5 w-5"})}),te.jsx("a",{href:`mailto:${Pn.email}`,"aria-label":"Email",className:"hover:text-foreground",children:te.jsx(Dg,{className:"h-5 w-5"})})]})]})]})]}),p1=()=>te.jsx("section",{id:"about",className:"scroll-mt-20 border-t border-border py-24",children:te.jsxs("div",{className:"mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]",children:[te.jsxs("div",{children:[te.jsx("p",{className:"mb-3 text-sm tracking-[0.22em] text-warm uppercase",children:"About"}),te.jsx("h2",{className:"font-serif text-4xl tracking-tight md:text-5xl",children:"Building software that stays useful."}),te.jsxs("div",{className:"mt-8 space-y-4 text-muted-foreground leading-relaxed",children:[te.jsx("p",{children:"I’m a software developer and electrical engineering student. I care about tools people actually use: security sandboxes, language tech for Ethiopian languages, and small web apps that feel considered rather than crowded."}),te.jsx("p",{children:"I study at Addis Ababa University, train with A2SV, and lead community work at SkillBridge. When I’m not shipping, I’m usually learning — currently around ML, Rust, and cloud."})]})]}),te.jsxs("div",{className:"flex flex-col justify-between gap-10",children:[te.jsxs("div",{className:"grid grid-cols-3 gap-6 border-y border-border py-8",children:[te.jsxs("div",{children:[te.jsx("p",{className:"font-serif text-3xl",children:"3+"}),te.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Years building"})]}),te.jsxs("div",{children:[te.jsx("p",{className:"font-serif text-3xl",children:"7"}),te.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"Shown here"})]}),te.jsxs("div",{children:[te.jsx("p",{className:"font-serif text-3xl",children:"AAU"}),te.jsx("p",{className:"mt-1 text-xs text-muted-foreground",children:"ECE student"})]})]}),te.jsxs("div",{children:[te.jsx("p",{className:"mb-4 text-sm text-muted-foreground",children:"Stack I reach for"}),te.jsx("div",{className:"flex flex-wrap gap-2",children:d1.map(r=>te.jsx("span",{className:"rounded-full border border-border px-3 py-1 text-sm",children:r},r))}),te.jsx("a",{href:Pn.resume,target:"_blank",rel:"noopener noreferrer",className:"mt-8 inline-block text-sm text-warm underline-offset-4 hover:underline",children:"Resume"})]})]})]})}),m1="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function g1(r){const[e,t]=_t.useState(!1),s=()=>{t(!0)},{src:o,alt:l,style:u,className:f,...h}=r;return e?te.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:u,children:te.jsx("div",{className:"flex items-center justify-center w-full h-full",children:te.jsx("img",{src:m1,alt:"Error loading image",...h,"data-original-url":o})})}):te.jsx("img",{src:o,alt:l,className:f,style:u,...h,onError:s})}const v1=()=>{const r=cg.filter(t=>t.featured),e=cg.filter(t=>!t.featured);return te.jsx("section",{id:"work",className:"scroll-mt-20 py-8 md:py-12",children:te.jsxs("div",{className:"mx-auto max-w-6xl px-6",children:[te.jsxs("div",{className:"mb-12 flex items-end justify-between gap-6",children:[te.jsxs("div",{children:[te.jsx("p",{className:"mb-3 text-sm tracking-[0.22em] text-warm uppercase",children:"Work"}),te.jsx("h2",{className:"font-serif text-4xl tracking-tight md:text-5xl",children:"Selected projects"})]}),te.jsx("p",{className:"hidden max-w-xs text-right text-sm text-muted-foreground md:block",children:"Each piece once — no duplicate featured grid."})]}),te.jsx("div",{className:"space-y-16",children:r.map((t,s)=>te.jsxs("article",{className:"grid items-center gap-8 lg:grid-cols-2",children:[te.jsx("div",{className:`overflow-hidden rounded-2xl border border-border bg-card ${s%2===1?"lg:order-2":""}`,children:te.jsx(g1,{src:t.image,alt:t.title,className:"h-64 w-full object-cover sm:h-80"})}),te.jsxs("div",{children:[te.jsxs("p",{className:"text-xs tracking-[0.18em] text-muted-foreground uppercase",children:[t.category," · ",t.status]}),te.jsx("h3",{className:"font-serif mt-3 text-3xl",children:t.title}),te.jsx("p",{className:"mt-4 max-w-md leading-relaxed text-muted-foreground",children:t.description}),te.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:t.technologies.map(o=>te.jsx("span",{className:"rounded-full bg-secondary px-3 py-1 text-xs",children:o},o))}),te.jsxs("div",{className:"mt-6 flex gap-5 text-sm",children:[t.links.live&&te.jsxs("a",{href:t.links.live,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-warm hover:underline underline-offset-4",children:[te.jsx(Tx,{className:"h-4 w-4"}),"Live"]}),te.jsxs("a",{href:t.links.github,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground",children:[te.jsx(mf,{className:"h-4 w-4"}),"Code"]})]})]})]},t.id))}),te.jsx("div",{className:"mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2",children:e.map(t=>te.jsxs("article",{className:"bg-background p-6 transition-colors hover:bg-card",children:[te.jsx("p",{className:"text-xs tracking-[0.16em] text-muted-foreground uppercase",children:t.category}),te.jsx("h3",{className:"font-serif mt-2 text-2xl",children:t.title}),te.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:t.description}),te.jsxs("div",{className:"mt-5 flex gap-4 text-sm",children:[t.links.live&&te.jsx("a",{href:t.links.live,target:"_blank",rel:"noopener noreferrer",className:"text-warm hover:underline underline-offset-4",children:"Live"}),te.jsx("a",{href:t.links.github,target:"_blank",rel:"noopener noreferrer",className:"text-muted-foreground hover:text-foreground",children:"Code"})]})]},t.id))})]})})},_1=()=>te.jsx("section",{id:"experience",className:"scroll-mt-20 py-24",children:te.jsxs("div",{className:"mx-auto max-w-6xl px-6",children:[te.jsx("p",{className:"mb-3 text-sm tracking-[0.22em] text-warm uppercase",children:"Path"}),te.jsx("h2",{className:"font-serif mb-12 text-4xl tracking-tight md:text-5xl",children:"Experience & study"}),te.jsx("ol",{className:"divide-y divide-border border-y border-border",children:f1.map(r=>te.jsxs("li",{className:"grid gap-3 py-8 md:grid-cols-[10rem_1fr_1.2fr] md:gap-8",children:[te.jsx("p",{className:"text-sm text-muted-foreground",children:r.period}),te.jsxs("div",{children:[te.jsx("h3",{className:"text-lg",children:r.title}),te.jsx("p",{className:"mt-1 text-sm text-warm",children:r.place})]}),te.jsx("p",{className:"text-sm leading-relaxed text-muted-foreground",children:r.note})]},r.title))})]})});function Md({className:r,type:e,...t}){return te.jsx("input",{type:e,"data-slot":"input",className:ec("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r),...t})}function x1({className:r,...e}){return te.jsx("textarea",{"data-slot":"textarea",className:ec("resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),...e})}dg();var S1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],y1=S1.reduce((r,e)=>{const t=mg(`Primitive.${e}`),s=_t.forwardRef((o,l)=>{const{asChild:u,...f}=o,h=u?t:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),te.jsx(h,{...f,ref:l})});return s.displayName=`Primitive.${e}`,{...r,[e]:s}},{}),M1="Label",x0=_t.forwardRef((r,e)=>te.jsx(y1.label,{...r,ref:e,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(r.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));x0.displayName=M1;var E1=x0;function Bl({className:r,...e}){return te.jsx(E1,{"data-slot":"label",className:ec("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",r),...e})}class co{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const w1=()=>{if(!(typeof localStorage>"u"))return{get:r=>Promise.resolve(localStorage.getItem(r)),set:(r,e)=>Promise.resolve(localStorage.setItem(r,e)),remove:r=>Promise.resolve(localStorage.removeItem(r))}},yn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:w1()},Lf=r=>r?typeof r=="string"?{publicKey:r}:r.toString()==="[object Object]"?r:{}:{},T1=(r,e="https://api.emailjs.com")=>{if(!r)return;const t=Lf(r);yn.publicKey=t.publicKey,yn.blockHeadless=t.blockHeadless,yn.storageProvider=t.storageProvider,yn.blockList=t.blockList,yn.limitRate=t.limitRate,yn.origin=t.origin||e},S0=async(r,e,t={})=>{const s=await fetch(yn.origin+r,{method:"POST",headers:t,body:e}),o=await s.text(),l=new co(s.status,o);if(s.ok)return l;throw l},y0=(r,e,t)=>{if(!r||typeof r!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},b1=r=>{if(r&&r.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},M0=r=>r.webdriver||!r.languages||r.languages.length===0,E0=()=>new co(451,"Unavailable For Headless Browser"),A1=(r,e)=>{if(!Array.isArray(r))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},R1=r=>!r.list?.length||!r.watchVariable,C1=(r,e)=>r instanceof FormData?r.get(e):r[e],w0=(r,e)=>{if(R1(r))return!1;A1(r.list,r.watchVariable);const t=C1(e,r.watchVariable);return typeof t!="string"?!1:r.list.includes(t)},T0=()=>new co(403,"Forbidden"),P1=(r,e)=>{if(typeof r!="number"||r<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},L1=async(r,e,t)=>{const s=Number(await t.get(r)||0);return e-Date.now()+s},b0=async(r,e,t)=>{if(!e.throttle||!t)return!1;P1(e.throttle,e.id);const s=e.id||r;return await L1(s,e.throttle,t)>0?!0:(await t.set(s,Date.now().toString()),!1)},A0=()=>new co(429,"Too Many Requests"),N1=async(r,e,t,s)=>{const o=Lf(s),l=o.publicKey||yn.publicKey,u=o.blockHeadless||yn.blockHeadless,f=o.storageProvider||yn.storageProvider,h={...yn.blockList,...o.blockList},p={...yn.limitRate,...o.limitRate};return u&&M0(navigator)?Promise.reject(E0()):(y0(l,r,e),b1(t),t&&w0(h,t)?Promise.reject(T0()):await b0(location.pathname,p,f)?Promise.reject(A0()):S0("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:l,service_id:r,template_id:e,template_params:t}),{"Content-type":"application/json"}))},D1=r=>{if(!r||r.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},I1=r=>typeof r=="string"?document.querySelector(r):r,U1=async(r,e,t,s)=>{const o=Lf(s),l=o.publicKey||yn.publicKey,u=o.blockHeadless||yn.blockHeadless,f=yn.storageProvider||o.storageProvider,h={...yn.blockList,...o.blockList},p={...yn.limitRate,...o.limitRate};if(u&&M0(navigator))return Promise.reject(E0());const v=I1(t);y0(l,r,e),D1(v);const x=new FormData(v);return w0(h,x)?Promise.reject(T0()):await b0(location.pathname,p,f)?Promise.reject(A0()):(x.append("lib_version","4.4.1"),x.append("service_id",r),x.append("template_id",e),x.append("user_id",l),S0("/api/v1.0/email/send-form",x))},ug={init:T1,send:N1,sendForm:U1,EmailJSResponseStatus:co},F1=()=>{const[r,e]=_t.useState({name:"",email:"",subject:"",message:""}),[t,s]=_t.useState(!1),[o,l]=_t.useState("idle"),[u,f]=_t.useState(""),h="service_gg1lz2q",p="template_stuomxn",v="3RMmvCbY-hBZmtDY3",x=E=>{e(b=>({...b,[E.target.name]:E.target.value}))},g=async E=>{E.preventDefault(),s(!0),l("idle"),f("");try{if(ug.init(v),(await ug.send(h,p,{from_name:r.name,from_email:r.email,subject:r.subject,message:r.message,to_name:"Dagm Yibabe",to_email:Pn.email})).status===200)l("success"),f("Thanks — I’ll reply soon."),e({name:"",email:"",subject:"",message:""});else throw new Error("Failed to send email")}catch(b){console.error("EmailJS error:",b),l("error"),f("Couldn’t send. Email me directly instead.")}finally{s(!1)}};return te.jsx("section",{id:"contact",className:"scroll-mt-20 border-t border-border py-24",children:te.jsxs("div",{className:"mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2",children:[te.jsxs("div",{children:[te.jsx("p",{className:"mb-3 text-sm tracking-[0.22em] text-warm uppercase",children:"Contact"}),te.jsx("h2",{className:"font-serif text-4xl tracking-tight md:text-5xl",children:"Say hello"}),te.jsx("p",{className:"mt-6 max-w-sm text-muted-foreground",children:"Open to internships, collaborations, and interesting problems."}),te.jsxs("ul",{className:"mt-10 space-y-4 text-sm",children:[te.jsx("li",{children:te.jsxs("a",{href:`mailto:${Pn.email}`,className:"inline-flex items-center gap-3 hover:text-warm",children:[te.jsx(Dg,{className:"h-4 w-4"}),Pn.email]})}),te.jsx("li",{children:te.jsxs("a",{href:Pn.phoneHref,className:"inline-flex items-center gap-3 hover:text-warm",children:[te.jsx(kx,{className:"h-4 w-4"}),Pn.phone]})}),te.jsxs("li",{className:"inline-flex items-center gap-3 text-muted-foreground",children:[te.jsx(Nx,{className:"h-4 w-4"}),Pn.location]})]}),te.jsxs("div",{className:"mt-8 flex gap-4",children:[te.jsx("a",{href:Pn.github,target:"_blank",rel:"noopener noreferrer",children:te.jsx(mf,{className:"h-5 w-5 text-muted-foreground hover:text-foreground"})}),te.jsx("a",{href:Pn.linkedin,target:"_blank",rel:"noopener noreferrer",children:te.jsx(Ng,{className:"h-5 w-5 text-muted-foreground hover:text-foreground"})})]})]}),te.jsxs("form",{onSubmit:g,className:"space-y-5",children:[te.jsxs("div",{className:"space-y-2",children:[te.jsx(Bl,{htmlFor:"name",children:"Name"}),te.jsx(Md,{id:"name",name:"name",value:r.name,onChange:x,required:!0,disabled:t})]}),te.jsxs("div",{className:"space-y-2",children:[te.jsx(Bl,{htmlFor:"email",children:"Email"}),te.jsx(Md,{id:"email",name:"email",type:"email",value:r.email,onChange:x,required:!0,disabled:t})]}),te.jsxs("div",{className:"space-y-2",children:[te.jsx(Bl,{htmlFor:"subject",children:"Subject"}),te.jsx(Md,{id:"subject",name:"subject",value:r.subject,onChange:x,required:!0,disabled:t})]}),te.jsxs("div",{className:"space-y-2",children:[te.jsx(Bl,{htmlFor:"message",children:"Message"}),te.jsx(x1,{id:"message",name:"message",value:r.message,onChange:x,required:!0,disabled:t,rows:5})]}),o!=="idle"&&te.jsx("p",{className:o==="success"?"text-sm":"text-sm text-destructive",children:u}),te.jsx(Pg,{type:"submit",disabled:t,className:"rounded-full",children:t?te.jsxs(te.Fragment,{children:[te.jsx(Cx,{className:"h-4 w-4 animate-spin"}),"Sending"]}):te.jsxs(te.Fragment,{children:[te.jsx(zx,{className:"h-4 w-4"}),"Send"]})})]})]})})};function O1(){return te.jsx(__,{children:te.jsxs("div",{className:"min-h-screen bg-background text-foreground",children:[te.jsx(Xx,{}),te.jsxs("main",{children:[te.jsx(h1,{}),te.jsx(v1,{}),te.jsx(p1,{}),te.jsx(_1,{}),te.jsx(F1,{})]}),te.jsx("footer",{className:"border-t border-border py-8",children:te.jsxs("div",{className:"mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center",children:[te.jsxs("p",{children:["© ",new Date().getFullYear()," ",Pn.name]}),te.jsx("p",{children:"Minimal 3D, maximum signal."})]})})]})})}m_.createRoot(document.getElementById("root")).render(te.jsx(O1,{}));
