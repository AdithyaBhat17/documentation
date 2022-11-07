(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{290:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=(n(0),n(450)),s=["components"],i={title:"Get response data and alter the the information to show",sidebar_label:"Fetch & transform response data"},c={unversionedId:"platform_concepts/studio/api/receive-data",id:"platform_concepts/studio/api/receive-data",isDocsHomePage:!1,title:"Get response data and alter the the information to show",description:"In this article, you will learn -",source:"@site/docs/platform_concepts/studio/api/receive-data.md",slug:"/platform_concepts/studio/api/receive-data",permalink:"/docs/platform_concepts/studio/api/receive-data",version:"current",sidebar_label:"Fetch & transform response data",sidebar:"platform_concepts",previous:{title:"Send data to API",permalink:"/docs/platform_concepts/studio/api/send-data"},next:{title:"Add Enviroment Variables to API",permalink:"/docs/platform_concepts/studio/api/enviroment-variables"}},p=[{value:"1. Get the response data from API",id:"1-get-the-response-data-from-api",children:[]},{value:"2. Display response information using Function",id:"2-display-response-information-using-function",children:[]}],l={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,s);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this article, you will learn -"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#1"},"How to get response from an API")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#2"},"How to parse the response information and alter the data to show a specific information the user needs in a better readable format"))),Object(r.b)("h2",{id:"1-get-the-response-data-from-api"},"1. Get the response data from API"),Object(r.b)("p",null,"In the preceding article you have learnt how to pass input parameters in a API. In this article, we will show how to retrieve the data from response and parse the data in the way that you need to display."),Object(r.b)("p",null,"To retrieve the API response and display it to the user, follow these steps -"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"When configuring a flow, add a Prompt/Message node after the actions node where you want to retrieve the response."),Object(r.b)("li",{parentName:"ol"},"Select the variable where you have stored the API response."),Object(r.b)("li",{parentName:"ol"},"Using the dot notation, access the value of API response.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/zGICqxJ.png",alt:null})),Object(r.b)("p",null,"When a user inputs values through the conversation, the bot displays the ID."),Object(r.b)("p",null,"Learn more about the API node ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#api"},"here"),"."),Object(r.b)("h2",{id:"2-display-response-information-using-function"},"2. Display response information using Function"),Object(r.b)("p",null,"With the preceding procedure, you get the response object. You can use ",Object(r.b)("em",{parentName:"p"},"Function")," to alter the structure and format of the raw data and show it in a more meaningful format.  "),Object(r.b)("p",null,"Use the ",Object(r.b)("em",{parentName:"p"},"API")," section to invoke APIs. However, to parse and manipulate the API response, you need to use the ",Object(r.b)("strong",{parentName:"p"},"Functions")," tab."),Object(r.b)("p",null,"To parse and alter the response data, follow these steps -"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open ",Object(r.b)("strong",{parentName:"li"},"Studio")," > ",Object(r.b)("strong",{parentName:"li"},"Build")," > ",Object(r.b)("strong",{parentName:"li"},"Functions"),". "),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"+Add new function"),".  ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/jY6FbVp.png",alt:null})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Code Snippet"),": Example- transformationFN"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let { apiResponse } = ymLib.args; // retrieve API response\nlet  weather_condition, actions = [],result=[];\nlet  response = JSON.parse(apiResponse.body);\nresponse = response.weather; // fetch weather data from API response\nresponse.forEach((element, index) => {\nactions = [];\nweather_condition = `<strong>${element.main}</strong>`;\n});\nconsole.log(weather_condition);\nreturn  weather_condition;\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"You will see the JSON response in the ",Object(r.b)("em",{parentName:"li"},"API Response")," pane on the right. Fetch and parse the API response as JSON using the following code snippet.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ttqljrF.png",alt:null})),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let  apiResponse = ymLib.args.apiResponse; // fetch API response\nlet  body;\nif(apiResponse && apiResponse.body)\n{\nbody = JSON.parse(apiResponse.body) // parse API response and store it in body variable\n}\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"In the API response, it starts with an array followed by JSON objects. To access response from the array and store it in the ",Object(r.b)("inlineCode",{parentName:"li"},"postOffice")," variable, add the following lines of code in the ",Object(r.b)("em",{parentName:"li"},"Transformation function"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"let  postOffice = body[0].PostOffice; // Access and store PostOffice field from the API response\nconsole.log(postOffice);\nlet  postofficeName = [];\n")),Object(r.b)("p",null,"In the transformation function, you can access the API response in ymLib.args. You can write your own logic in javascript to fetch only the fields you wish to have in the response of API."),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"After getting access to JSON object, use a for loop to iterate over all objects and parse ",Object(r.b)("inlineCode",{parentName:"li"},"Name")," key from the objects, which will be pushed to the ",Object(r.b)("inlineCode",{parentName:"li"},"postofficeName")," array.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"for(let  i=0;i< postOffice.length; i++)\n{\npostofficeName.push(postOffice[i].Name) // fetch PostOffice Name and store in postOfficeName array\n}\nreturn  resolve(postofficeName);\n")),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"In the API node, select the transformation function that was created using the  ",Object(r.b)("strong",{parentName:"li"},"Parse API response")," drop-down.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/058ZmtW.png",alt:null})))}b.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=o,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);