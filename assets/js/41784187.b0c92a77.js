"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6122],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80804:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"API error alerts and error Log",sidebar_label:"API errors & alerts"},s=void 0,p={unversionedId:"platform_concepts/studio/api/api-settings",id:"platform_concepts/studio/api/api-settings",title:"API error alerts and error Log",description:"Once everything is setup and data is flowing through APIs, there could be chances of getting errors for any reason.",source:"@site/docs/platform_concepts/studio/api/api-settings.md",sourceDirName:"platform_concepts/studio/api",slug:"/platform_concepts/studio/api/api-settings",permalink:"/docs/platform_concepts/studio/api/api-settings",draft:!1,tags:[],version:"current",frontMatter:{title:"API error alerts and error Log",sidebar_label:"API errors & alerts"},sidebar:"platform_concepts",previous:{title:"Use dynamic access token",permalink:"/docs/platform_concepts/studio/api/bearer-token"},next:{title:"Download API logs",permalink:"/docs/cookbooks/studio/downloadapilogs"}},u={},c=[{value:"1. Send alerts in case of API failures",id:"1-send-alerts-in-case-of-api-failures",level:2},{value:"2. View API error log",id:"2-view-api-error-log",level:2},{value:"2.1 Status Codes",id:"21-status-codes",level:3}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Once everything is setup and data is flowing through APIs, there could be chances of getting errors for any reason. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can keep all the PoCs associated with the bot configuration informed if there is any error in sending or retrieving data from any of the APIs you added in the API section."),(0,o.kt)("li",{parentName:"ul"},"See error log to identify the reason for failure and troubleshoot the API.\nThere are 4 options available on the platform to test and Configure and configure API:")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Tools and settings"),": One of the options that you see on the right of API configuration page. This is a global testing and setting tab. Click ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools#2-explore-tools"},"here")," to learn more."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/p2kJpgw.png",alt:null}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"1-send-alerts-in-case-of-api-failures"},"1. Send alerts in case of API failures"),(0,o.kt)("p",null,"You can email alerts to be sent to specific recipients (email) when there is some issue with an API and call got failed.  Recipients will get error alerts for all the APIs added in the API section and is not specific to one API.   "),(0,o.kt)("p",null,"To add recipients to whom you want to notify about the API failures - "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("strong",{parentName:"li"},"Studio")," > ",(0,o.kt)("strong",{parentName:"li"},"API"),"."),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("strong",{parentName:"li"},"Setup alerts")," icon and enable ",(0,o.kt)("strong",{parentName:"li"},"Setup alerts"),"."),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("strong",{parentName:"li"},"Email"),", enter each email address of the recipient you want to notify and click ",(0,o.kt)("strong",{parentName:"li"},"Include"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("img",{src:"https://i.imgur.com/Cx2lIw8.png",width:"80%"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"To remove a recipient from the included list, click ",(0,o.kt)("strong",{parentName:"li"},"Exclude"),"."),(0,o.kt)("li",{parentName:"ul"},"To move a recipient from the Include to Exclude list  or vice-versa, click on that respective email address. "))),(0,o.kt)("p",null,"The following is a sample screenshot of the error alert email."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/rAYsGkC.png",alt:null})),(0,o.kt)("h2",{id:"2-view-api-error-log"},"2. View API error log"),(0,o.kt)("p",null,"To see the failure log of the API, click on the API failure log icon.\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/OwHi4yQ.png",alt:null})),(0,o.kt)("p",null,"You will see the summary of all errors. Click on the arrow to expand that particular error details. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Q1zzyH4.jpg",alt:null})),(0,o.kt)("p",null,"To see errors of a specific API, use the API drop-down box and choose your preferred API. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If there are many errors, you can further filter the summary by error code using the ",(0,o.kt)("strong",{parentName:"p"},"Search")," box. ")),(0,o.kt)("p",null,"There are response codes tagged to each error to help you identify why the error has occurred. The following section provides the list of status codes and its description to help help you troubleshoot an error."),(0,o.kt)("h3",{id:"21-status-codes"},"2.1 Status Codes"),(0,o.kt)("p",null,"The following table contains the list of common HTTP Status codes - "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Code")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Error")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"401 (",(0,o.kt)("strong",{parentName:"td"},"Unauthorized"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"Error may be because of an expired, missing, or invalid token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"403 (",(0,o.kt)("strong",{parentName:"td"},"Forbidden"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"When the authorization fails. 404 is also used when the consumer is unaware that the resource exists.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"400 (",(0,o.kt)("strong",{parentName:"td"},"Bad Request"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"Error when the request is bad/unclear. Example: if required fields are missing or header values are not filled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"404 (",(0,o.kt)("strong",{parentName:"td"},"Not Found"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"Error when the requested resource is not found.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"500 (",(0,o.kt)("strong",{parentName:"td"},"Internal Server Error"),")"),(0,o.kt)("td",{parentName:"tr",align:null},"Server error. The users can try again later.")))),(0,o.kt)("p",null,"The timestamp(log) consists API details such as BotID, API name, etc. It is used to understand and rectify the error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n"botId": "x1624003758366",\n"apiName": "sony"\n"responseTime": 10133,\n"args": "{\\"env\\":{\\"test\\":\\"198\\"}}",\n"@version": "1",\n"@timestamp": "2022-07-25T04:12:08.385Z",\n"response": "ETIMEDOUT",\n"statusCode": "err",\n"id": "hdSOM4IB6hgCAvQOH-eq",\n"key": "hdSOM4IB6hgCAvQOH-eq"\n}\n')))}m.isMDXComponent=!0}}]);