(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{244:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(458)),l=["components"],i={title:"Send data to API",sidebar_label:"Send data to API"},c={unversionedId:"platform_concepts/studio/api/send-data",id:"platform_concepts/studio/api/send-data",isDocsHomePage:!1,title:"Send data to API",description:"In this article, you will learn -",source:"@site/docs/platform_concepts/studio/api/send-data.md",slug:"/platform_concepts/studio/api/send-data",permalink:"/docs/platform_concepts/studio/api/send-data",version:"current",sidebar_label:"Send data to API",sidebar:"platform_concepts",previous:{title:"Add or import APIs",permalink:"/docs/platform_concepts/studio/api/add-api"},next:{title:"Get response data and alter the the information to show",permalink:"/docs/platform_concepts/studio/api/receive-data"}},b=[{value:'<a name="1"></a>1. Send data to API from a bot flow',id:"1-send-data-to-api-from-a-bot-flow",children:[]},{value:'<a name="2"></a>2. Use base64 URL conversion for files',id:"2-use-base64-url-conversion-for-files",children:[]},{value:'<a name="3"></a>3. Pass JSON in Array/Object variable',id:"3-pass-json-in-arrayobject-variable",children:[]}],s={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this article, you will learn -"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#1"},"How to send data from bot flow to an API")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#2"},"How to pass URLs in an API parameter")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#3"},"How to send JSON object in API parameter"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"1-send-data-to-api-from-a-bot-flow"},Object(o.b)("a",{name:"1"}),"1. Send data to API from a bot flow"),Object(o.b)("p",null,"Once you configure an API as mentioned in ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api/#1"},"add a new API"),", you can pass all the input parameter values in the bot flow where you want to consume it. These are usually dynamic values that you can capture directly from the user conversation. "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"To send a dynamic data from a flow, rename the parameters with {{{parameterName}}} for the API in ",Object(o.b)("strong",{parentName:"li"},"Studio")," > ",Object(o.b)("strong",{parentName:"li"},"API")," and save it.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/a6xTjqL.png",alt:null})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Open the flow where you wish to send data using the user's input."),Object(o.b)("li",{parentName:"ol"},"Add the API actions node in the flow.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/AfLDOBK.png",alt:null})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Select the API you wish to add.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/iSBQmEu.png",alt:null})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add the dynamic parameter fields (such as authentication, email, token, name etc. as per the API).")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select a value (",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/transformation-function"},"transformation function"),") in ",Object(o.b)("strong",{parentName:"p"},"Parse API response")," to extract a part of API response before storing.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Test the API to ensure it is working as desired."))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Qu6rfqB.png",alt:null})),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},"Use ",Object(o.b)("strong",{parentName:"li"},"Store Response in")," to store the response in a variable to access it.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"2-use-base64-url-conversion-for-files"},Object(o.b)("a",{name:"2"}),"2. Use base64 URL conversion for files"),Object(o.b)("p",null,"In cases like uploading an image, video, or any other file formats, you can convert images into a readable string that can be used or transferred anywhere. It is a common practice to upload files through URL through Base64 encoding."),Object(o.b)("p",null,"Use the following code inside a body/params -"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Pass URL"),Object(o.b)("th",{parentName:"tr",align:null},"Format"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Directly"),Object(o.b)("td",{parentName:"tr",align:null},"$$tobase64{url}")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Through variable"),Object(o.b)("td",{parentName:"tr",align:null},"$$tobase64{{{{url}}}")))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/SRHt8OM.png",alt:null})),Object(o.b)("h2",{id:"3-pass-json-in-arrayobject-variable"},Object(o.b)("a",{name:"3"}),"3. Pass JSON in Array/Object variable"),Object(o.b)("p",null,"You need to pass the JSON file or the details to be entered as an array/object."),Object(o.b)("p",null,"For example, in the below screenshot Details_1 can also be written as Details_2 by storing array details in array_details variable."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/41MaV4r.png",alt:null})),Object(o.b)("hr",null),Object(o.b)("h4",{id:"what-next"},"What next?"),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/platform_concepts/studio/api/receive-data"},"Know how to receive data from API response")))))}p.isMDXComponent=!0},458:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return a?r.a.createElement(m,i(i({ref:t},b),{},{components:a})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<o;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);