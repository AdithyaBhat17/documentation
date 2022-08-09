(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return f}));var o=n(3),r=n(7),a=(n(0),n(397)),s=["components"],i={title:"Parse API Response/ Transformation Function",sidebar_label:"Parse API Response"},c={unversionedId:"platform_concepts/studio/api/transformation-function",id:"platform_concepts/studio/api/transformation-function",isDocsHomePage:!1,title:"Parse API Response/ Transformation Function",description:"API section can be used to invoke APIs but to parse and manipulate the API response, transformation function come in handy. This document discusses how to add a new transformation function and use it to parse the API response.",source:"@site/docs/platform_concepts/studio/api/transformation-function.md",slug:"/platform_concepts/studio/api/transformation-function",permalink:"/docs/platform_concepts/studio/api/transformation-function",version:"current",sidebar_label:"Parse API Response"},p=[],l={toc:p};function f(e){var t=e.components,n=Object(r.a)(e,s);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"API section can be used to invoke APIs but to parse and manipulate the API response, transformation function come in handy. This document discusses how to add a new transformation function and use it to parse the API response."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open ",Object(a.b)("strong",{parentName:"li"},"Studio > Build > Code"),". Click ",Object(a.b)("strong",{parentName:"li"},"+Add new function"),".")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/tAgKjlN.png",alt:null})),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"On the right side of the below screenshot, API response is given which is in JSON format. Fetch and parse the API response as JSON using following code snippet.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/ttqljrF.png",alt:null})),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let apiResponse = ymLib.args.apiResponse; // fetch API response\nlet body;\n\nif(apiResponse && apiResponse.body)\n{\n    body = JSON.parse(apiResponse.body) // parse API response and store it in body variable\n}\n")),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"In the API response, it starts with an array followed by JSON objects. To access response from the array and store it in the ",Object(a.b)("inlineCode",{parentName:"li"},"postOffice")," variable, add following lines of code in the transformation function.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"let postOffice = body[0].PostOffice; // Access and store PostOffice field from the API response\nconsole.log(postOffice);\n    \nlet postofficeName = [];\n")),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"After getting access to JSON object, use a for loop to iterate over all objects and parse ",Object(a.b)("inlineCode",{parentName:"li"},"Name")," key from the objects, which will be pushed to the ",Object(a.b)("inlineCode",{parentName:"li"},"postofficeName")," array.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"for(let i=0;i< postOffice.length; i++) \n    {\n        postofficeName.push(postOffice[i].Name) // fetch PostOffice Name and store in postOfficeName array\n    }\n\nreturn resolve(postofficeName);s\n")),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"In the API node, select transformation function that was created from the ",Object(a.b)("strong",{parentName:"li"},"Parse API response")," dropdown.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/058ZmtW.png",alt:null})))}f.isMDXComponent=!0},397:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),b=o,m=f["".concat(s,".").concat(b)]||f[b]||u[b]||a;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);