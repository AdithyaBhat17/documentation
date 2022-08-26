(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{213:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(403)),i=["components"],c={title:"Sending data to an API",sidebar_label:"Sending dynamic data"},l={unversionedId:"platform_concepts/studio/api/send-data",id:"platform_concepts/studio/api/send-data",isDocsHomePage:!1,title:"Sending data to an API",description:"1. How to Send Data to an API?",source:"@site/docs/platform_concepts/studio/api/send-data.md",slug:"/platform_concepts/studio/api/send-data",permalink:"/docs/platform_concepts/studio/api/send-data",version:"current",sidebar_label:"Sending dynamic data",sidebar:"platform_concepts",previous:{title:"Adding API - Importing CURL",permalink:"/docs/platform_concepts/studio/api/add-api"},next:{title:"Receive Data from API and Parse Response",permalink:"/docs/platform_concepts/studio/api/receive-data"}},s=[{value:"1. How to Send Data to an API?",id:"1-how-to-send-data-to-an-api",children:[]},{value:"2. File conversion from URL to base64",id:"2-file-conversion-from-url-to-base64",children:[]},{value:"3. Pass JSON as Array/Object Variable",id:"3-pass-json-as-arrayobject-variable",children:[]}],p={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-how-to-send-data-to-an-api"},"1. How to Send Data to an API?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To send a dynamic data from an journey, rename the parameters with {{{parametername}}} in the API.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/UOsO4KlWdRZf1623865589545.png",alt:"Create new API"})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Save")," button on the bottom left corner for the changes to be reflected. "),Object(o.b)("li",{parentName:"ol"},"Open the respective journey/flow you wish to send data from users input."),Object(o.b)("li",{parentName:"ol"},"Add the API actions node in the journey.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/AfLDOBK.png",alt:null})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Select the API you wish to add. ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/iSBQmEu.png",alt:null})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add the dynamic parameter fields (authentication, email, token, name etc. as per the API). ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select a value (",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/transformation-function"},"transformation function"),") in ",Object(o.b)("strong",{parentName:"p"},"Parse API response")," to extract a part of API response before storing."))),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"Test the API if required.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Qu6rfqB.png",alt:null})),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Store Response in")," a variable to access it.")),Object(o.b)("h2",{id:"2-file-conversion-from-url-to-base64"},"2. File conversion from URL to base64"),Object(o.b)("p",null,"Use the following code inside a Body/ Params-  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To pass a URL: $$tobase64{url}"),Object(o.b)("li",{parentName:"ul"},"To pass a Variable containing URL: $$tobase64{{{{url}}}")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/SRHt8OM.png",alt:null})),Object(o.b)("h2",{id:"3-pass-json-as-arrayobject-variable"},"3. Pass JSON as Array/Object Variable"),Object(o.b)("p",null,"The JSON file or the details to be entered can be passed as an array/object.\nFor example, in the below screenshot Details_1 can also be written as Details_2 by storing array details on array_details variable. "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/3aY0MXY.png",alt:null})))}b.isMDXComponent=!0},403:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);