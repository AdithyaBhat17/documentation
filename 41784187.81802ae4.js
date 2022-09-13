(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(407)),i=["components"],c={title:"API Error Alerts and Error Log",sidebar_label:"API Errors & Alerts"},s={unversionedId:"platform_concepts/studio/api/api-settings",id:"platform_concepts/studio/api/api-settings",isDocsHomePage:!1,title:"API Error Alerts and Error Log",description:"Once everything is setup and data is flowing through APIs, there could be chances of getting errors for any reason.",source:"@site/docs/platform_concepts/studio/api/api-settings.md",slug:"/platform_concepts/studio/api/api-settings",permalink:"/docs/platform_concepts/studio/api/api-settings",version:"current",sidebar_label:"API Errors & Alerts",sidebar:"platform_concepts",previous:{title:"Use access token directly from API response",permalink:"/docs/platform_concepts/studio/api/bearer-token"},next:{title:"Manage database tables & data",permalink:"/docs/platform_concepts/studio/database"}},l=[{value:"1. Send alerts in case of API failures",id:"1-send-alerts-in-case-of-api-failures",children:[]},{value:"2. View API error log",id:"2-view-api-error-log",children:[{value:"2.1 Status Codes",id:"21-status-codes",children:[]}]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Once everything is setup and data is flowing through APIs, there could be chances of getting errors for any reason. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can keep all the PoCs associated with the bot configuration informed if there is any error in sending or retrieving data from any of the APIs you added in the API section."),Object(o.b)("li",{parentName:"ul"},"See error log to identify the reason for failure and troubleshoot the API.\nThere are 4 options available on the platform to test and Configure and configure API:")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("strong",{parentName:"p"},"Tools and settings"),": One of the options that you see on the right of API configuration page. This is a global testing and setting tab. Click ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools#2-explore-tools"},"here")," to learn more."),Object(o.b)("p",{parentName:"div"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/p2kJpgw.png",alt:null})))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"1-send-alerts-in-case-of-api-failures"},"1. Send alerts in case of API failures"),Object(o.b)("p",null,"You can email alerts to be sent to specific recipients (email) when there is some issue with an API and call got failed.  Recipients will get error alerts for all the APIs added in the API section and is not specific to one API.   "),Object(o.b)("p",null,"To add recipients to whom you want to notify about the API failures - "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In ",Object(o.b)("strong",{parentName:"li"},"Studio")," > ",Object(o.b)("strong",{parentName:"li"},"API"),"."),Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Setup alerts")," icon and enable ",Object(o.b)("strong",{parentName:"li"},"Setup alerts"),"."),Object(o.b)("li",{parentName:"ol"},"In ",Object(o.b)("strong",{parentName:"li"},"Email"),", enter each email address of the recipient you want to notify and click ",Object(o.b)("strong",{parentName:"li"},"Include"),"."),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Save"),".")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Cx2lIw8.png",alt:null})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"To remove a recipient from the included list, click ",Object(o.b)("strong",{parentName:"li"},"Exclude"),"."),Object(o.b)("li",{parentName:"ul"},"To move a recipient from the Include to Exclude list  or vice-versa, click on that respective email address. ")))),Object(o.b)("p",null,"The following is a sample screenshot of the error alert email."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/rAYsGkC.png",alt:null})),Object(o.b)("h2",{id:"2-view-api-error-log"},"2. View API error log"),Object(o.b)("p",null,"To see the failure log of the API, click on the API failure log icon.\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/OwHi4yQ.png",alt:null})),Object(o.b)("p",null,"You will see the summary of all errors. Click on the arrow to expand that particular error details. "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Q1zzyH4.jpg",alt:null})),Object(o.b)("p",null,"To see errors of a specific API, use the API drop-down box and choose your preferred API. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If there are many errors, you can further filter the summary by error code using the ",Object(o.b)("strong",{parentName:"p"},"Search")," box. "))),Object(o.b)("p",null,"There are response codes tagged to each error to help you identify why the error has occurred. The following section provides the list of status codes and its description to help help you troubleshoot an error."),Object(o.b)("h3",{id:"21-status-codes"},"2.1 Status Codes"),Object(o.b)("p",null,"The following table contains the list of common HTTP Status codes - "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Code")),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"th"},"Error")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"401 (",Object(o.b)("strong",{parentName:"td"},"Unauthorized"),")"),Object(o.b)("td",{parentName:"tr",align:null},"Error may be because of an expired, missing, or invalid token.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"403 (",Object(o.b)("strong",{parentName:"td"},"Forbidden"),")"),Object(o.b)("td",{parentName:"tr",align:null},"When the authorization fails. 404 is also used when the consumer is unaware that the resource exists.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"400 (",Object(o.b)("strong",{parentName:"td"},"Bad Request"),")"),Object(o.b)("td",{parentName:"tr",align:null},"Error when the request is bad/unclear. Example: if required fields are missing or header values are not filled.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"404 (",Object(o.b)("strong",{parentName:"td"},"Not Found"),")"),Object(o.b)("td",{parentName:"tr",align:null},"Error when the requested resource is not found.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"500 (",Object(o.b)("strong",{parentName:"td"},"Internal Server Error"),")"),Object(o.b)("td",{parentName:"tr",align:null},"Server error. The users can try again later.")))),Object(o.b)("p",null,"The timestamp(log) consists API details such as BotID, API name, etc. It is used to understand and rectify the error."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n"botId": "x1624003758366",\n"apiName": "sony"\n"responseTime": 10133,\n"args": "{\\"env\\":{\\"test\\":\\"198\\"}}",\n"@version": "1",\n"@timestamp": "2022-07-25T04:12:08.385Z",\n"response": "ETIMEDOUT",\n"statusCode": "err",\n"id": "hdSOM4IB6hgCAvQOH-eq",\n"key": "hdSOM4IB6hgCAvQOH-eq"\n}\n')))}p.isMDXComponent=!0},407:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);