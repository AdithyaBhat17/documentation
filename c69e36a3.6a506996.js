(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{295:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),r=(n(0),n(349));const a={title:"Transformation Function",sidebar_label:"Transformation Function"},i={unversionedId:"platform_concepts/studio/api-management/transformation-function",id:"platform_concepts/studio/api-management/transformation-function",isDocsHomePage:!1,title:"Transformation Function",description:"API section can be used to invoke APIs but to parse and manipulate the API response, transformation function come in handy. Let's see how to add a new transformation function and use it to parse the API response.",source:"@site/docs/platform_concepts/studio/api-management/transformation-function.md",slug:"/platform_concepts/studio/api-management/transformation-function",permalink:"/docs/platform_concepts/studio/api-management/transformation-function",version:"current",sidebar_label:"Transformation Function",sidebar:"platform_concepts",previous:{title:"How to send bearer token from one API result to another APIs header?",permalink:"/docs/platform_concepts/studio/api-management/bearer-token"},next:{title:"Adding Contextual Responses",permalink:"/docs/platform_concepts/studio/context-management/add-contextual-response"}},s=[],c={toc:s};function p({components:e,...t}){return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"API section can be used to invoke APIs but to parse and manipulate the API response, transformation function come in handy. Let's see how to add a new transformation function and use it to parse the API response."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to Studio>Code and click on add a new function.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/Nsi7oCD.png",alt:null})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"As you can see on the right side of the below screenshot, API response is given which is in JSON format. Let's fetch and parse the API response as JSON using following code snippet.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ttqljrF.png",alt:null})),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let apiResponse = ymLib.args.apiResponse; // fetch API response\nlet body;\n\nif(apiResponse && apiResponse.body)\n{\n    body = JSON.parse(apiResponse.body) // parse API response and store it in body variable\n}\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"In the API response, it starts with an array followed by JSON objects. To access response from the array and store it in the ",Object(r.b)("inlineCode",{parentName:"li"},"postOffice")," variable, we can add following lines of code in the transformation function.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let postOffice = body[0].PostOffice; // Access and store PostOffice field from the API response\nconsole.log(postOffice);\n    \nlet postofficeName = [];\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Now that we have access to JSON object, we can use a for loop to iterate over all objects and parse ",Object(r.b)("inlineCode",{parentName:"li"},"Name")," key from the objects, which will be pushed to the ",Object(r.b)("inlineCode",{parentName:"li"},"postofficeName")," array.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"for(let i=0;i< postOffice.length; i++) \n    {\n        postofficeName.push(postOffice[i].Name) // fetch PostOffice Name and store in postOfficeName array\n    }\n\nreturn resolve(postofficeName);s\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Finally, in the API node select transformation function we created now and you bot is good to go!")),Object(r.b)("img",{src:"https://i.imgur.com/cxV10YT.png",alt:"drawing",width:"60%"}))}p.isMDXComponent=!0},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,b=f["".concat(i,".").concat(m)]||f[m]||u[m]||a;return n?r.a.createElement(b,s(s({ref:t},p),{},{components:n})):r.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);