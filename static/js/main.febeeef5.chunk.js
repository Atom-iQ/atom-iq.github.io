(this["webpackJsonp@atom-iq/web-page"]=this["webpackJsonp@atom-iq/web-page"]||[]).push([[0],{48:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},53:function(e,n,t){},54:function(e,n,t){"use strict";var r,i,o;t.r(n),(o=r||(r={}))[o.HtmlElement=1]="HtmlElement",o[o.SvgElement=2]="SvgElement",o[o.InputElement=4]="InputElement",o[o.TextareaElement=8]="TextareaElement",o[o.SelectElement=16]="SelectElement",o[o.FormElement=28]="FormElement",o[o.NonSvgElement=29]="NonSvgElement",o[o.Element=31]="Element",o[o.Component=32]="Component",o[o.Fragment=64]="Fragment",o[o.NonKeyedFragment=128]="NonKeyedFragment",o[o.AnyFragment=192]="AnyFragment",function(e){e[e.HasSingleChild=1]="HasSingleChild",e[e.HasOnlyStaticChildren=2]="HasOnlyStaticChildren",e[e.HasMultipleChild=4]="HasMultipleChild",e[e.HasUnknownChildren=8]="HasUnknownChildren",e[e.HasSingleStaticChild=3]="HasSingleStaticChild",e[e.HasMultipleStaticChildren=6]="HasMultipleStaticChildren",e[e.HasSingleUnknownChild=9]="HasSingleUnknownChild",e[e.HasMultipleUnknownChildren=12]="HasMultipleUnknownChildren"}(i||(i={}));var a=Array.isArray;function l(e){return null==e}function u(e){return"function"==typeof e}function c(e){return"string"==typeof e}function s(e){return!0===e||!1===e}var d="_F_",f=function(e,n,t,r,i,o,a,l){return{elementFlag:e,type:n,className:t,props:r,children:i,childFlags:o,key:a,ref:l}},m=function(e,n,t,r){return n&&t?{type:"_F_",children:n,elementFlag:e,childFlags:t,key:r}:null},h=function(e,n,t,i){return{type:e,props:n,elementFlag:r.Component,key:t,ref:i}},g=t(57),p=t(3),b=t(67),y=t(58),v=t(71),O=t(41),C=t(61),k=t(29),w=t(66),x=t(59),F=t(60);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){E(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,i=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return t}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return I(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function M(e){return!(!e||!e.type)}function D(e,n,t,i,o,u){return function(c){if(l(c)||s(c))return e&&e();if(function(e){var n=typeof e;return"string"===n||"number"===n}(c))return n(c);if(a(c))return t(c);if(M(c)){if(c.elementFlag===r.Component)return i(c);if(function(e){return 0!=(r.AnyFragment&e.elementFlag)}(c))return o(c);if(function(e){return 0!=(r.Element&e.elementFlag)}(c))return u(c)}}}function R(e,n,t){return function(r,i){return i.has(r)?e(i.get(r)):i.hasFragment(r)?n(i.getFragment(r)):void 0!==t&&t()}}function K(e){return document.createTextNode(String(e))}function N(e,n){return e.appendChild(n)}function H(e,n,t){return e.insertBefore(n,t)}var P=function(e,n,t){Object.entries(e).forEach((function(e){var r=A(e,2),i=r[0],o=r[1],a=(i.includes("-"),i);Object(g.a)(o)?t.add(o.subscribe((function(e){n.style[a]=e}))):n.style[a]=o}))},T=function(e,n){return function(e,t){l(t)?n.removeAttribute(e):s(t)?t?n.setAttribute(e,e):n.removeAttribute(e):n.setAttribute(e,String(t))}},Q=function(e,n){return function(t){e===r.SvgElement?t?n.setAttribute("class",t):n.removeAttribute("class"):n.className=t}};function V(e){e.subscription&&e.subscription.unsubscribe()}var L=function(e){return{type:d,elementFlag:r.Fragment,children:e}},U=function e(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(r,i){var o=n.get(i)||n.getFragment(i);return o.fragmentChildIndexes?r.concat(o.fragmentChildIndexes.reduce(e(n,t),[])):r.concat(t?o.index:o)}};function q(e,n,t,r,i){if(i.empty())N(r,n);else if(i.hasOneChild())t>i.getFirstIndex()?N(r,n):H(r,n,i.getFirstChild().element);else{var o=i.getPositionInfoForNewChild(t),a=o.isFirst,l=o.isLast,u=o.nextSibling,c=o.firstChild;a?H(r,n,c.element):l?N(r,n):H(r,n,u.element)}return e({index:t,element:n})}function J(e,n,t,r,i){var o,a,l;if(o=r,a=n,l=i.get(t).element,o.replaceChild(a,l))return e({index:t,element:n})}function z(e,n,t,r){var i,o,a=r.get(n);if(i=t,o=a.element,i.removeChild(o))return e(a)}var $=function(e,n){return e>n?1:-1},B=function(){function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.indexes=[],this.children={},this.fragmentIndexes=[],this.fragmentChildren={},this.has=function(e){return!!n.children[e]},this.get=function(e){return n.children[e]},this.hasFragment=function(e){return!!n.fragmentChildren[e]},this.getFragment=function(e){return n.fragmentChildren[e]},this.setFnFactory=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(r,i){try{var o="add"===e,a=t?!!n.fragmentChildren[r]:!!n.children[r];return!!(o?!a:a)&&(t?(!o&&n.fragmentIndexes.includes(r)||(n.fragmentIndexes=n.fragmentIndexes.concat(r)),n.fragmentChildren[r]=i):(!o&&n.indexes.includes(r)||(n.indexes=n.indexes.concat(r)),n.children[r]=i),!0)}catch(e){return!1}}},this.add=this.setFnFactory("add"),this.replace=this.setFnFactory("replace"),this.addFragment=this.setFnFactory("add",!0),this.replaceFragment=this.setFnFactory("replace",!0),this.createEmptyFragment=function(e){return n.addFragment(e,{index:e,element:d,fragmentChildIndexes:[],fragmentChildKeys:{},fragmentChildrenLength:0})},this.remove=function(e){return n.has(e)&&n.delete(e)},this.removeFragment=function(e){return n.hasFragment(e)&&n.delete(e,!0)},this.size=function(){return n.indexes.length},this.empty=function(){return 0===n.indexes.length},this.getAll=function(){return n.indexes.map((function(e){return n.children[e]}))},this.getKeys=function(){return n.indexes},this.removeAll=function(){return n.indexes=[],n.children={},!0},this.toEntriesArray=function(){return n.indexes.map(n.mapToEntry)},this.getFirstIndex=function(){return n.indexes[0]},this.getFirstChild=function(){return n.children[n.indexes[0]]},this.hasOneChild=function(){return 1===n.indexes.length},this.delete=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{return t?(n.fragmentIndexes=n.fragmentIndexes.filter((function(n){return n!==e})),delete n.fragmentChildren[e]):(n.indexes=n.indexes.filter((function(n){return n!==e})),delete n.children[e]),!0}catch(e){return!1}},this.mapToEntry=function(e){return[e,n.children[e]]},this.getChildOrNull=function(e,t){return e?n.children[t()]:null},this.getPositionInfoForNewChild=function(t){var r=e.sortIndexes(n.indexes.concat(t)),i=r.indexOf(t),o=function(e){return 0===e}(i),a=function(e,n){return e===n.length-1}(i,r),l=n.getChildOrNull(!o,(function(){return r[0]})),u=n.getChildOrNull(!o,(function(){return r[i-1]})),c=n.getChildOrNull(!a,(function(){return r[i+1]}));return{indexInArray:i,allSortedIndexes:r,isFirst:o,isLast:a,previousSibling:u,nextSibling:c,firstChild:l}}}var n,t,r;return n=e,(t=[{key:Symbol.toStringTag,get:function(){return JSON.stringify(this.indexes)}}])&&_(n.prototype,t),r&&_(n,r),e}();B.sortIndexes=function(e){return e.sort($)};var W=function(){return new B},G=function(e,n,t){return function(r){var i=function(){q((function(n){return t.add(e,n)}),K(String(r)),e,n,t)};R((function(i){J((function(n){V(i),t.replace(e,n)}),K(String(r)),e,n,t)}),(function(r){var o;(o=r,B.sortIndexes(o.fragmentChildIndexes)).forEach((function(e){z((function(n){V(n),t.remove(e)}),e,n,t)})),V(r),t.removeFragment(e),i()}),i)(e,t)}},X=function(e,n,t,r,i,o){return function(){var a=e.elementSubscription;a&&i.add(a),q((function(e){return r.add(n,S(S({},e),{},{subscription:a,key:o}))}),e.dom,n,t,r)}},Y=function(e,n,t,r){return function(i){i.fragmentChildIndexes.reduce(U(r,!0),[]).forEach((function(n){z((function(t){i.key&&e[i.key]||V(t),r.remove(n)}),n,t,r)})),i.key&&e[i.key]||V(i),r.removeFragment(n)}},Z=function(e,n,t,r,i,o,a){return function(){var l=i.split(".").length;n.fragmentChildren.forEach((function(e){var n=e.index.split(".").slice(l).join("."),t="".concat(i,".").concat(n);q((function(n){a.add(t,S(S({},n),{},{key:e.key,subscription:e.subscription})),a.has(e.index)&&a.remove(e.index)}),e.element,t,o,a)})),r.fragmentChildKeys=S(S({},r.fragmentChildKeys),{},E({},e.key,i)),delete t[e.key]}},ee=function(e,n,t,r,i,o,a){q((function(o){a.add(i,S(S({},o),{},{key:e.key,subscription:n.child.subscription})),a.get(n.index)&&!r.fragmentChildKeys[a.get(n.index).key]&&a.remove(n.index),r.fragmentChildKeys=S(S({},r.fragmentChildKeys),{},E({},e.key,i)),delete t[e.key]}),n.child.element,i,o,a)};function ne(e,n,t,r,i){return function(o){var a=t.getFragment(e),l=function(e,n){return function(e){return e.oldKeyElementMap&&Object.keys(e.oldKeyElementMap).length>0}(n)&&Object.values(n.oldKeyElementMap).forEach((function(e){e.fragmentChildren&&e.fragmentChildren.forEach((function(e){return V(e)})),V(e.child)})),n.oldKeyElementMap=Object.keys(n.fragmentChildKeys).reduce((function(t,r){var i=n.fragmentChildKeys[r],o=e.get(i)||e.getFragment(i),a=o&&o.fragmentChildIndexes&&o.fragmentChildIndexes.reduce(U(e),[]);return t[r]={index:i,child:o,fragmentChildren:a},t}),{}),n.oldKeyElementMap}(t,a);a.fragmentChildKeys={},function(e,n,t,r,i,o){var a=o.fragmentChildrenLength,l=r.children.length;if(a>l){var u=a-l;Array.from({length:u},(function(e,n){return n+l})).forEach((function(r){var o="".concat(e,".").concat(r);t.has(o)?z((function(e){e.key&&i[e.key]||V(e),t.remove(e.index)}),o,n,t):t.hasFragment(o)&&Y(i,o,n,t)(t.getFragment(o))}))}}(e,n,t,o,l,a),o.children.forEach(function(e,n,t,r){return function(i,o){var a="".concat(e,".").concat(o);if(Object(g.a)(i)){var l=i.subscribe((function(e){M(e)&&e.key?t(e,a):r(e,a)}));n.add(l)}else M(i)&&i.key?t(i,a):r(i,a)}}(e,r,function(e,n,t,r,i){return function(o,a){var l=e[o.key];if(l){if(l.index===a)return function(e,n,t,r){n.fragmentChildKeys=S(S({},n.fragmentChildKeys),{},E({},r,t)),delete e[r]}(e,n,a,o.key);l.child.element===d?function(e,n,t,r,i,o,a){R((function(){z((function(e){a.remove(e.index),e.key&&t[e.key]||V(e)}),i,o,a),Z(e,n,t,r,i,o,a)()}),(function(l){Y(t,i,o,a)(l),Z(e,n,t,r,i,o,a)()}),Z(e,n,t,r,i,o,a))(i,a)}(o,l,e,n,a,t,r):function(e,n,t,r,i,o,a){R((function(l){J((function(o){l.key&&t[l.key]||V(l),a.replace(i,S(S({},o),{},{key:e.key,subscription:n.child.subscription})),a.get(n.index)&&!r.fragmentChildKeys[a.get(n.index).key]&&a.remove(n.index),r.fragmentChildKeys=S(S({},r.fragmentChildKeys),{},E({},e.key,i)),delete t[e.key]}),n.child.element,i,o,a)}),(function(l){Y(t,i,o,a)(l),ee(e,n,t,r,i,o,a)}),(function(){return ee(e,n,t,r,i,o,a)}))(i,a)}(o,l,e,n,a,t,r)}else n.fragmentChildKeys=S(S({},n.fragmentChildKeys),{},E({},o.key,a)),i(o,a)}}(l,a,n,t,i),i)),a.fragmentChildrenLength=o.children.length}}var te=function(e,n,t,r,i){return function(o){R(function(e,n,t,r,i,o){return function(){z((function(a){return V(a),r.remove(a.index),r.createEmptyFragment(n),ne(n,t,r,i,o)(e)}),n,t,r)}}(o,e,n,t,r,i),function(e,n,t,r,i,o){return function(){return ne(n,t,r,i,o)(e)}}(o,e,n,t,r,i),function(e,n,t,r,i,o){return function(){return r.createEmptyFragment(n),ne(n,t,r,i,o)(e)}}(o,e,n,t,r,i))(e,t)}},re=function(e,n,t,r,i){return function(o){return t.createEmptyFragment(e),ne(e,n,t,r,i)(o)}},ie=function(e,n){return n&&M(e)&&(e.key?e.key!==n&&(e.key="".concat(n,".").concat(e.key)):e.key=n),e};function oe(e,n,t,r,i){return function(n){var t,o=(t=n).type(t.props),a=n.key||null;if(!Object(g.a)(o))return i(ie(o,a),e);var l=o.subscribe((function(n){return i(ie(n,a),e)}));r.add(l)}}var ae=function(e,n,t,r){return function(i){var o=de(i),a=X(o,e,n,t,r,i.key);R(function(e,n,t,r,i,o){return function(a){var l=e.elementSubscription;l&&i.add(l),J((function(e){V(a),r.replace(n,S(S({},e),{},{subscription:l,key:o}))}),e.dom,n,t,r)}}(o,e,n,t,r,i.key),function(e,n,t,r,i){return function(n){n.fragmentChildIndexes.reduce(U(i,!0),[]).forEach((function(e){z((function(n){V(n),i.remove(e)}),e,r,i)})),V(n),i.removeFragment(t),e()}}(a,0,e,n,t),a)(e,t)}},le=function(e,n,t){return function(r,i){return ce(i,e,n,t)(r)}},ue=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0],i=n[1],o=n[2],a=n[3];return D(null,function(e,n,t){return function(r){q((function(n){return t.add(e,n)}),K(String(r)),e,n,t)}}.apply(void 0,n),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return re.apply(void 0,n)(L(e))}}(r,i,o,a,le(i,o,a)),oe(r,0,0,a,le(i,o,a)),re(r,i,o,a,le(i,o,a)),function(e,n,t,r){return function(i){var o=de(i);X(o,e,n,t,r,i.key)()}}.apply(void 0,n))},ce=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0],i=n[1],o=n[2],a=n[3];return D((function(){}),G.apply(void 0,n),function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){return te.apply(void 0,n)(L(e))}}(r,i,o,a,le(i,o,a)),oe(r,0,0,a,le(i,o,a)),te(r,i,o,a,le(i,o,a)),ae.apply(void 0,n))},se=function(e,n,t,r){return function(i,o){var a=String(o);if(!r&&Object(g.a)(i)){var l=i.subscribe(ce(a,e,n,t));t.add(l)}else ue(a,e,n,t)(i)}};function de(e){var n,t=(n=e.type,function(e){return e.elementFlag===r.SvgElement}(e)?document.createElementNS("http://www.w3.org/2000/svg",n):document.createElement(n)),o=function(e,n){var t,r,i,o,a=new p.b;return e.className&&function(e,n,t){Object(g.a)(e.className)?t.add(e.className.subscribe(Q(e.elementFlag,n))):Q(e.elementFlag,n)(e.className)}(e,n,a),e.props&&Object.entries(e.props).forEach((t=function(e,n,t){return function(e,r){Object(g.a)(r)?t.add(r.subscribe((function(e){c(e)?n.setAttribute("style",e):l(e)?n.removeAttribute("style"):P(e,n,t)}))):c(r)?n.setAttribute("style",r):l(r)||P(r,n,t)}}(0,n,a),r=function(e,n,t){return function(r,i){if(function(e){return e.startsWith("on")}(r))if(function(e,n){return e.endsWith("$")}(r)){var o=r.substr(0,r.length-1),a=o.slice(2).toLocaleLowerCase(),l=Object(k.a)((function(e){return Object.assign({element:n},e)}))(Object(b.a)(n,a));t.add(i(l).subscribe((function(n){e.props[o]&&e.props[o](n)})))}else{if(e.props[r+"$"])return;var u=r.slice(2).toLocaleLowerCase(),c=Object(k.a)((function(e){return Object.assign({element:n},e)}))(Object(b.a)(n,u));t.add(c.subscribe((function(e){return i(e)})))}}}(e,n,a),i=function(e,n,t){return function(e,r){t.add(r.subscribe((function(t){T(0,n)(e,t)})))}}(0,n,a),o=T(0,n),function(e){var n=A(e,2),a=n[0],l=n[1];if(a)return function(e,n){return"style"===e}(a)?t(a,l):u(l)?r(a,l):Object(g.a)(l)?i(a,l):o(a,l)})),a}(e,t);if(e.children){var a=function(e,n,t){var r=new p.b,o=W(),a=0!=(e&i.HasOnlyStaticChildren);return 0!=(e&i.HasSingleChild)?se(t,o,r,a)(n,0):n.forEach(se(t,o,r,a)),r}(e.childFlags,e.children,t);o.add(a)}return{dom:t,elementSubscription:o}}t(48);var fe=t.p+"static/media/logo.f8543ed5.png",me=t(42),he=t(70),ge=t(62),pe=t(43),be=t(69);const ye=["Next-gen","Reactive","Declarative","Functional","Scalable","The Fastest"];var ve=()=>{const[e,n]=function(e){var n=new y.a(e),t=n.asObservable();return[t,function(e){u(e)?Object(w.a)()(t).subscribe((function(t){n.next(e(t))})):n.next(e)}]}(0),t=Object(me.a)(Object(ge.a)(e),Object(pe.a)((([e,t])=>(n(t===ye.length-1?0:e=>++e),ye[t]))))(Object(he.a)(1500));return f(1,"header","header",null,[f(1,"section","header__menu"),f(1,"div","header__bar"),f(1,"section","header__logo",null,f(1,"img","logo__img",{src:fe}),3),f(1,"h3","header__subheader",null,[f(1,"span","subheader__prefix",null,Object(be.a)("Atom-iQ")(t),9),f(1,"span","subheader__suffix",null,"Front-end Framework",3)],6),f(1,"div","header__bar")],6)},Oe=(t(49),t(68)),Ce=t(44),ke=t(40),we=t(63),xe=t(64),Fe=t(65),je=t(45);t(50);const Se=({name:e,score:n,winner:t,scoreToPxDivider:r,replay:i})=>{const o=Math.round(n/r),a=Object(Fe.a)((()=>Object(me.a)(Object(we.a)((e=>e<=o)),Object(xe.a)(((e,n)=>150-n),150),Object(pe.a)((e=>({marginTop:e+"px",height:"100%"}))))(Object(he.a)(15,Oe.a))))(i),l=Object(Fe.a)((()=>Object(me.a)(Object(we.a)((e=>e<=o+1)),Object(pe.a)((e=>e===o+1?n:e*r)))(Object(he.a)(15,Oe.a))))(i);return f(1,"section","result",null,[f(1,"section","result__bar-container",null,f(1,"div",t?"result__bar result__bar--winner":"result__bar",{style:a}),3),f(1,"div","result__name",null,e,9),f(1,"div","result__score",null,[l," ops/sec"],12)],6)};var Ee=({header:e,results:n,subheader:t,description:r,scoreToPxDivider:i})=>{const[o,a]=function(e){var n=new v.a(1);return[n.asObservable(),function(t){return function(r){var i=e?e(t?t(r):r):t?t(r):r;return Object(O.a)(Object(x.a)((function(e){return n.next(e)})),Object(F.a)((function(e){return n.next(e),Object(C.a)((function(){return e}))})))(i)}}]}(Object(pe.a)((()=>null))),l=Object.entries(n),u=l.reduce(((e,[t,r])=>!e||r>n[e]?t:e),"");return f(1,"section","performance",null,[f(1,"header","performance__header",{title:"Click to replay animation!",onClick$:a()},e,9),t&&f(1,"p","performance__subheader",null,t,9),f(1,"section","performance__results",null,l.map((([e,n])=>h(Se,{name:e,score:n,winner:u===e,scoreToPxDivider:i,replay:Object(je.a)()(Object(Ce.a)([[null],o],ke.b))}))),9),r&&f(1,"p","performance__description",null,r,9)],12)};t(51);var _e=()=>f(1,"footer","footer",null,[f(1,"div","footer__bar"),f(1,"section","footer__content",null,[f(1,"section","footer__name",null,"Atom-iQ Framework v0.1.0-alpha.7",3),f(1,"section","footer__copyright",null,"\xa9 2020 Adam Filipek",3)],6)],6);t(52);var Ae=()=>f(1,"section","intro",null,[f(1,"h4","intro__header",null,"About Atom-iQ Framework",3),f(1,"p","intro__content",null,[m(128,[f(1,"strong",null,null,"Atom-iQ",3)," is DOM rendering framework. It's using\xa0",f(1,"strong",null,null,"Reactive Virtual DOM",3)," architecture, new concept for UI rendering."],6),m(128,["\xa0Instead of diffing nodes (reconciliation), it's creating\xa0",f(1,"strong",null,null,"Observers",3),'\xa0("connecting nodes/props") in changeable nodes and every state update is\xa0',f(1,"em",null,null,"atomic",3),","],6),m(128,['\xa0and is "visible" only in those connected nodes - it\xa0',f(1,"em",null,null,"drastically",3)],6),m(128,["\xa0reduces number of operations during single state/ui update, compared to\xa0",f(1,"strong",null,null,"Virtual DOM",3)," - it's always only ",f(1,"em",null,null,"nextState",3)," call +\xa0"],6),m(64,["transformations on that state (optional) + ",f(1,"strong",null,null,"DOM",3)," element(s) update (depending on number of connected nodes), while in ",f(1,"strong",null,null,"Virtual DOM",3),", all nodes returned by"," ",f(1,"strong",null,null,"Component",3)," (render) function call have to be checked."],12)],6)],6);t(53);var Ie=()=>f(1,"section","details",null,[f(1,"section","details__item",null,[f(1,"h4",null,null,"Components",3),f(1,"p",null,null,"Atom-iQ's Component API is inspired by React's Functional Components (no support for classes, they have no sense with Reactive Virtual DOM architecture).",3),f(1,"p",null,null,"In Atom-iQ, the Component is just a function, that's taking props as argument (and middleware props as second, optional argument - v0.2.0) and returns Reactive Virtual DOM Elements (or other values, that could be element children) - looks like React's Functional Component, the difference is how it's treated by the renderer.",3),f(1,"p",null,null,"While React is calling Component function everytime the props or state are changed (because of that, it needs hooks for state, lifecycle and some other performance improvements, what's making React Functional Component more than just a function), Atom-iQ is calling Component function only when it's added to rvDOM. Thanks to that, everything what's inside component, like state or functions, is existing in runtime, as just a closure.",3)],6),f(1,"section","details__item",null,[f(1,"h4",null,null,"Reactive programming and RxJS",3),f(1,"p",null,null,"Atom-iQ's Reactive Virtual DOM is based on Reactive Programming and the Observer patter. It's using RxJS as a streaming library - because it's the most popular and stable solution.",3),f(1,"p",null,null,"Every state field in Atom-iQ have to be RxJS Subject and every changeable value have to be Observable. Most common for state is BehaviorSubject (createState) or ReplaySubject (eventState).",3),f(1,"p",null,null,'Observables should be bound directly to Reactive Virtual DOM nodes - framework is automatically "connecting" (creating Observer and Subscription) it.',3),f(1,"p",null,null,"In case of Element's props, the Observer next callback is calling connected DOM Element setAttribute method (or doing some other operation in special cases like className or style).",3),f(1,"p",null,null,"In case of Element's children, Observer next callback is calling parent's Element appendChild, insertBefore, replaceChild or removeChild methods.",3),f(1,"p",null,null,"In case of Component's children or props, it's just passing reference to the Observable to nested Component.",3),f(1,"p",null,null,"Atom-iQ will provide iQRx Tools (@atom-iq/rx) package for easy and quick work with RxJS",3)],6),f(1,"section","details__item",null,[f(1,"h4",null,null,"Extendable/Scalable Framework Architecture",3),f(1,"p",null,null,"The Core library (@atom-iq/core) includes just a basic Reactive Virtual DOM Renderer (without features like ref or context, those will be available as Middleware) and TypeScript interfaces. It's only 4.4kb minified gzipped size.",3),f(1,"p",null,null,"It will provide also createState function, which looks similar to React's useState hook and new eventState function, that's providing a way to describe state, as a set of operations, with an event (or multiple events) as a source - connected by the Reactive Event Handler props of an element.",3),f(1,"p",null,null,"Additional features could be added to the Core library, by extending basic renderer logic with Middlewares or with other official Tools and Components libraries, making Atom-iQ full customizable framework.",3)],6)],6);const Me={header:"Color picker benchmark",subheader:"Dynamically change className of 2 DOM Elements",description:"*Average result from 3 benchmark runs with 266, 532, 1064 and 2118 colors (Elements) - on\n    Chrome - the fastest browser for all libs (except Atom-iQ, which is faster on Safari)",results:{"Atom-iQ":14388,Inferno:3524,React:1712,Preact:1197,Vue:929},scoreToPxDivider:100},De={header:"Search results benchmark",subheader:"Dynamically change content of 300 DOM Elements",description:"*Average result from 3 benchmark runs with 300 Elements (x3 compared to original benchmark) on\n    Safari - the fastest browser for all libs",results:{"Atom-iQ":1402,Inferno:147,React:126,Preact:67,Vue:62},scoreToPxDivider:10};var Re=()=>f(1,"main","app",null,[h(ve),h(Ae),f(1,"section","app__benchmarks",null,[f(1,"header","benchmarks__header",null,f(1,"h4",null,null,"Atom-iQ's Reactive Virtual DOM vs Virtual DOM in benchmarks (click on benchmark header to replay animation)",3),3),f(1,"section","benchmarks__content",null,[h(Ee,{...Me}),h(Ee,{...De})],6)],6),h(Ie),h(_e)],6);try{!function(e,n){var t=function(e){var n=A(function(e){return e?[!c(e)&&e,c(e)&&e]:[null,null]}(e),2),t=n[0],r=n[1];if(t)return t;if(!window||!window.document)throw new Error("Atom-iQ RvDOM Renderer Error: Element/Document is undefined");return r?window.document.querySelector(r):window.document.body}(n);if(!e)throw new Error("Root RvdElement cannot be undefined or null");if(!t)throw new Error("Root DOM Element cannot be undefined or null");(function(e,n){var t=new p.b,r=W();ue("0",n,r,t)(e)})(e,t)}(h(Re),document.querySelector("#root"))}catch(o){console.error(o)}}},[[54,1,2]]]);
//# sourceMappingURL=main.febeeef5.chunk.js.map