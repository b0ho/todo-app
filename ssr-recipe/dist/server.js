!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t){e.exports=require("react/jsx-runtime")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),u=n(3),c=n.n(u),i=n(1),l=n(0),s=function(){return Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.Link,{to:"/red",children:"Red"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.Link,{to:"/blue",children:"Blue"})})]})},j=function(){return Object(l.jsx)("div",{className:"Red",children:"Red"})},f=function(){return Object(l.jsx)(j,{})},d=function(){return Object(l.jsx)("div",{className:"Blue",children:"Blue"})},a=function(){return Object(l.jsx)(d,{})};var b=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(s,{}),Object(l.jsx)("hr",{}),Object(l.jsx)(i.Route,{path:"/red",component:f}),Object(l.jsx)(i.Route,{path:"/blue",component:a})]})},x=c()();x.use((function(e,t,n){var r=Object(l.jsx)(i.StaticRouter,{location:e.url,context:{},children:Object(l.jsx)(b,{})}),u=o.a.renderToString(r);t.send(u)})),x.listen(5e3,(function(){console.log("run on 5000")}))}]);