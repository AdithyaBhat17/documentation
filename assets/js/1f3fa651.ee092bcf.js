"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[8659],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,k=u["".concat(l,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52118:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Use access token directly from API response",sidebar_label:"Use dynamic access token"},l=void 0,c={unversionedId:"platform_concepts/studio/api/bearer-token",id:"platform_concepts/studio/api/bearer-token",title:"Use access token directly from API response",description:"We support different authentication types to ensure you can configure any type of API irrespective of the authentication method. You can use Basic Auth, OAuth, Barer token and more.",source:"@site/docs/platform_concepts/studio/api/bearer-token.md",sourceDirName:"platform_concepts/studio/api",slug:"/platform_concepts/studio/api/bearer-token",permalink:"/docs/platform_concepts/studio/api/bearer-token",draft:!1,tags:[],version:"current",frontMatter:{title:"Use access token directly from API response",sidebar_label:"Use dynamic access token"},sidebar:"platform_concepts",previous:{title:"Add enviroment variables",permalink:"/docs/platform_concepts/studio/api/enviroment-variables"},next:{title:"API errors & alerts",permalink:"/docs/platform_concepts/studio/api/api-settings"}},p={},u=[{value:"1. Pass access token in API&#39;s Header",id:"1-pass-access-token-in-apis-header",level:2},{value:"2. Pass access token in Code function",id:"2-pass-access-token-in-code-function",level:2},{value:"What next?",id:"what-next",level:4}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We support different authentication types to ensure you can configure any type of API irrespective of the authentication method. You can use Basic Auth, OAuth, Barer token and more."),(0,r.kt)("p",null,"In this article, you will learn - "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"How to pass access token variables in the API header"),(0,r.kt)("li",{parentName:"ol"},"How to use access token variable in the code function")),(0,r.kt)("p",null,"This article explains different ways of using access token generated directly from the generate auth token API."),(0,r.kt)("h2",{id:"1-pass-access-token-in-apis-header"},"1. Pass access token in API's Header"),(0,r.kt)("p",null,"If you do not want to use code function, you can directly pass the access token received in the auth API response and pass it in the Header of another API that you want to authenticate."),(0,r.kt)("p",null,"To do so, follow these steps - "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"Studio")," > ",(0,r.kt)("strong",{parentName:"li"},"Build")," > ",(0,r.kt)("strong",{parentName:"li"},"API"),"  and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api"},"add a new API")," to fetch the access token."),(0,r.kt)("li",{parentName:"ol"},"Copy the access token from the source. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Here, we\u2019ve added a salesforce API to create a bearer token. During the course of this tutorial, we\u2019ll call it auth API. This API returns a ",(0,r.kt)("strong",{parentName:"p"},"Bearer token")," which we will use in another API for authentication.")),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/zZCcghI.png",alt:null})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Open the API or ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api"},"add a new API")," to which you want to add access token (Authorization header).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In the example, we will be adding a search lead API from Salesforce. Pass the bearer token in the header and email as a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/send-data"},"parameter to this API"),". So we will fetch values from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"variables")," and pass it to the API using this syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"{{{variable_name}}}"),"; as shown in the screenshots below.")),(0,r.kt)("img",{src:"https://i.imgur.com/HJUtzk7.png",alt:"drawing",width:"80%"}),(0,r.kt)("img",{src:"https://i.imgur.com/Xu6yn3O.png",alt:"drawing",width:"80%"}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Go back to ",(0,r.kt)("strong",{parentName:"li"},"Studio")," > ",(0,r.kt)("strong",{parentName:"li"},"Build")," > ",(0,r.kt)("strong",{parentName:"li"},"Flows")," and "),(0,r.kt)("li",{parentName:"ol"},"Create an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api"},"API action node")," to invoke auth API and store the response in a custom variable.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In the example, create an action node named ",(0,r.kt)("inlineCode",{parentName:"p"},"salesforceAuth")," to invoke auth API and store response in ",(0,r.kt)("inlineCode",{parentName:"p"},"sf_auth_response")," variable.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Problem with this API is that most API which requires bearer token authentication requires the token to be in this format ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer TOKEN_HERE"),". Auth API only returns a token without ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer")," prefix. Hence, we can use a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables"},"variable action node")," to add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer")," prefix to the token. Create another variable ",(0,r.kt)("inlineCode",{parentName:"p"},"auth_token")," and use this syntax to add a prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer {{{variables.sf_auth_response}}}"),".")),(0,r.kt)("p",null,"If the API node goes to fallback,  you can add a text message node and trigger a welcome journey."),(0,r.kt)("img",{src:"https://i.imgur.com/3M3NWMe.png",width:"400"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In the example"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Create or open a flow where you want to use Salesforce Search API, say ",(0,r.kt)("inlineCode",{parentName:"li"},"salesforceSearchLead")," journey. Here, what we want is to first trigger is the ",(0,r.kt)("inlineCode",{parentName:"li"},"salesforceauth")," API and store the bearer token in the ",(0,r.kt)("inlineCode",{parentName:"li"},"auth_token")," variable which will be used here."),(0,r.kt)("li",{parentName:"ul"},"Hence, in this flow,  add a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow"},"Trigger journey node")," and trigger ",(0,r.kt)("inlineCode",{parentName:"li"},"salesforceauth")," flow. Once the ",(0,r.kt)("inlineCode",{parentName:"li"},"salesforceauth")," flow is executed, the current ",(0,r.kt)("inlineCode",{parentName:"li"},"salesforceSearchLead")," will be executed. Now, in the API action node, select the ",(0,r.kt)("inlineCode",{parentName:"li"},"get_lead")," API and under parameters, select ",(0,r.kt)("inlineCode",{parentName:"li"},"auth_token")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"email")," variables."),(0,r.kt)("li",{parentName:"ul"},"Finally, store the response of this API in ",(0,r.kt)("inlineCode",{parentName:"li"},"sf_search_lead_response"),".",(0,r.kt)("img",{src:"https://i.imgur.com/ijhgh60.png",width:"400"})))),(0,r.kt)("h2",{id:"2-pass-access-token-in-code-function"},"2. Pass access token in Code function"),(0,r.kt)("p",null,"You can also use the Code function to send token from the generate auth token API and use it in another API that you want to authenticate."),(0,r.kt)("p",null,"To do so - "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open any journey where you've added API Action Node which invokes auth API.")),(0,r.kt)("img",{src:"https://i.imgur.com/sQsTVL9.png",width:"90%"}),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add a new function to parse bearer token from the API response. Store the response in a variable, here we'll be storing the response in ",(0,r.kt)("inlineCode",{parentName:"li"},"auth")," variable.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function: getAuthToken")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let { apiResponse } = ymLib.args; // retrieve API response\nlet  token = JSON.parse(apiResponse.body);\n\nconsole.log(token);\n\nreturn  token.token_type + " " + token.access_token;\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Open the API where you need to pass the bearer token and pass the token using this syntax: ",(0,r.kt)("inlineCode",{parentName:"li"},"{{{variable_name}}}"),".")),(0,r.kt)("p",null,"Here we need to pass the bearer token under headers, so click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Headers")," and enter this text: ",(0,r.kt)("inlineCode",{parentName:"p"},"{{{auth_token}}}"),"."),(0,r.kt)("img",{src:"https://i.imgur.com/wadPMWR.png",alt:"drawing",width:"50%"}),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"To try this workflow, try invoking the journey where you're using the auth API. \ud83d\ude80")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"what-next"},"What next?"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/platform_concepts/studio/api/send-data"},"Know how to send data to the API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/platform_concepts/studio/api/api-settings"},"Monitor errors in APIs")))))}h.isMDXComponent=!0}}]);