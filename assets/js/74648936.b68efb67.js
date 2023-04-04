"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6183],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return f}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,l(l({ref:e},c),{},{components:a})):n.createElement(f,l({ref:e},c))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58350:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={title:"Send data to API",sidebar_label:"Send data to API"},s=void 0,p={unversionedId:"platform_concepts/studio/api/send-data",id:"platform_concepts/studio/api/send-data",title:"Send data to API",description:"In this article, you will learn -",source:"@site/docs/platform_concepts/studio/api/send-data.md",sourceDirName:"platform_concepts/studio/api",slug:"/platform_concepts/studio/api/send-data",permalink:"/docs/platform_concepts/studio/api/send-data",draft:!1,tags:[],version:"current",frontMatter:{title:"Send data to API",sidebar_label:"Send data to API"},sidebar:"platform_concepts",previous:{title:"Add APIs",permalink:"/docs/platform_concepts/studio/api/add-api"},next:{title:"Fetch & transform response data",permalink:"/docs/platform_concepts/studio/api/receive-data"}},c={},u=[{value:'<a name="1"></a>1. Send data to API from a bot flow',id:"1-send-data-to-api-from-a-bot-flow",level:2},{value:'<a name="2"></a>2. Use base64 URL conversion for files',id:"2-use-base64-url-conversion-for-files",level:2},{value:'<a name="3"></a>3. Pass JSON in Array/Object variable',id:"3-pass-json-in-arrayobject-variable",level:2},{value:"What next?",id:"what-next",level:4}],m={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this article, you will learn -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1"},"How to send data from bot flow to an API")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2"},"How to pass URLs in an API parameter")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3"},"How to send JSON object in API parameter"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"1-send-data-to-api-from-a-bot-flow"},(0,o.kt)("a",{name:"1"}),"1. Send data to API from a bot flow"),(0,o.kt)("p",null,"Once you configure an API as mentioned in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api"},"add a new API"),", you can pass all the input parameter values in the bot flow where you want to consume it. These are usually dynamic values that you can capture directly from the user conversation. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To send a dynamic data from a flow, rename the parameters with {{{parameterName}}} for the API in ",(0,o.kt)("strong",{parentName:"li"},"Studio")," > ",(0,o.kt)("strong",{parentName:"li"},"API")," and save it.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/a6xTjqL.png",alt:null})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Open the flow where you wish to send data using the user's input."),(0,o.kt)("li",{parentName:"ol"},"Add the API actions node in the flow.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/AfLDOBK.png",alt:null})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Select the API you wish to add.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/iSBQmEu.png",alt:null})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the dynamic parameter fields (such as authentication, email, token, name etc. as per the API).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select a value (",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/transformation-function"},"transformation function"),") in ",(0,o.kt)("strong",{parentName:"p"},"Parse API response")," to extract a part of API response before storing.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test the API to ensure it is working as desired."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Qu6rfqB.png",alt:null})),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("strong",{parentName:"li"},"Store Response in")," to store the response in a variable to access it.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"2-use-base64-url-conversion-for-files"},(0,o.kt)("a",{name:"2"}),"2. Use base64 URL conversion for files"),(0,o.kt)("p",null,"In cases like uploading an image, video, or any other file formats, you can convert images into a readable string that can be used or transferred anywhere. It is a common practice to upload files through URL through Base64 encoding."),(0,o.kt)("p",null,"Use the following code inside a body/params -"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Pass URL"),(0,o.kt)("th",{parentName:"tr",align:null},"Format"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Directly"),(0,o.kt)("td",{parentName:"tr",align:null},"$$tobase64{url}")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Through variable"),(0,o.kt)("td",{parentName:"tr",align:null},"$$tobase64{{{{url}}}")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/SRHt8OM.png",alt:null})),(0,o.kt)("h2",{id:"3-pass-json-in-arrayobject-variable"},(0,o.kt)("a",{name:"3"}),"3. Pass JSON in Array/Object variable"),(0,o.kt)("p",null,"You need to pass the JSON file or the details to be entered as an array/object."),(0,o.kt)("p",null,"For example, in the below screenshot Details_1 can also be written as Details_2 by storing array details in array_details variable."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/41MaV4r.png",alt:null})),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"what-next"},"What next?"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/studio/api/receive-data"},"Know how to receive data from API response")))))}d.isMDXComponent=!0}}]);