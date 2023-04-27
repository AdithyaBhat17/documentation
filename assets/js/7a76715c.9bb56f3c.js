"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[70874],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(o),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return o?n.createElement(f,s(s({ref:t},p),{},{components:o})):n.createElement(f,s({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},65649:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),s=["components"],i={title:"Salesforce CRM",sidebar_label:"Salesforce CRM"},c=void 0,l={unversionedId:"platform_concepts/appConfiguration/salesforce-service-cloud",id:"platform_concepts/appConfiguration/salesforce-service-cloud",title:"Salesforce CRM",description:"Integrate your yellow.ai platform with your Salesforce CRM account to recieve updates on your Salesforce objects and to perform actions like create and update objects, etc.,",source:"@site/docs/platform_concepts/appConfiguration/salesforce-service-cloud.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/salesforce-service-cloud",permalink:"/docs/platform_concepts/appConfiguration/salesforce-service-cloud",draft:!1,tags:[],version:"current",frontMatter:{title:"Salesforce CRM",sidebar_label:"Salesforce CRM"},sidebar:"platform_concepts",previous:{title:"Microsoft Dynamics 365",permalink:"/docs/platform_concepts/appConfiguration/microsoft-dynamics"},next:{title:"Zoho CRM",permalink:"/docs/platform_concepts/appConfiguration/zoho-crm"}},p={},u=[{value:"1. Connect Salesforce CRM with Yellow.ai",id:"1-connect-salesforce-crm-with-yellowai",level:2},{value:"2. Payload to access Salesforce CRM on app.yellow.ai",id:"2-payload-to-access-salesforce-crm-on-appyellowai",level:2},{value:"3. Use-case",id:"3-use-case",level:2},{value:"Supported Version",id:"supported-version",level:4}],m={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Integrate your yellow.ai platform with your ",(0,a.kt)("a",{parentName:"p",href:"https://www.salesforce.com/in/crm/"},"Salesforce CRM")," account to recieve updates on your Salesforce objects and to perform actions like create and update objects, etc.,"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"An object is a Salesforce crm term which means a collection of related fields, which can be customized to suit the specific needs of an organization. These fields are essentially data points that hold specific pieces of information related to the entity represented by the object."),(0,a.kt)("p",{parentName:"admonition"},"For example, in Salesforce CRM, an ",(0,a.kt)("strong",{parentName:"p"},"Account")," object is used to store information about your customers or clients. This object can include fields such as ",(0,a.kt)("strong",{parentName:"p"},"Company Name"),", ",(0,a.kt)("strong",{parentName:"p"},"Phone Number"),", ",(0,a.kt)("strong",{parentName:"p"},"Billing Address"),", and ",(0,a.kt)("strong",{parentName:"p"},"Industry"),". By using the ",(0,a.kt)("strong",{parentName:"p"},"Account")," object, you can easily track and manage information about your customers, such as their contact information, buying history, and preferences.")),(0,a.kt)("h2",{id:"1-connect-salesforce-crm-with-yellowai"},"1. Connect Salesforce CRM with Yellow.ai"),(0,a.kt)("p",null,"To connect your Salesforce CRM account with Yellow.ai, follow the these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to cloud.yellow.ai and click ",(0,a.kt)("strong",{parentName:"p"},"Integrations")," on the module switcher."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/1EjCvqy.png",alt:null})))),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Search for ",(0,a.kt)("strong",{parentName:"p"},"Salesforce CRM")," in the search box or go to the category ",(0,a.kt)("strong",{parentName:"p"},"CRM")," > ",(0,a.kt)("strong",{parentName:"p"},"Salesforce CRM"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/KkbUVou.png",alt:null})))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose the ",(0,a.kt)("strong",{parentName:"p"},"Salesforce CRM environment"),". "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/xwCT87l.png",alt:null})))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Connect to Salesforce CRM")," button. "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Rn5nXuX.png",alt:null})))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Log in to your Salesforce CRM account in the following pop-up to establish this integration. "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/W4rrs7W.gif",alt:null})))),(0,a.kt)("h2",{id:"2-payload-to-access-salesforce-crm-on-appyellowai"},"2. Payload to access Salesforce CRM on app.yellow.ai"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'app.executeIntegrationAction({\n        "action": <NODE TO BE EXECUTED>,\n        "dynamicParams": {\n    "context": [{\n       "key": "objects",\n       "value": <VALUE OF OBJECT SELECTED>,\n       "label": <VALUE LABEL OF OBJECT SELECTED>,\n       "nextStep":"fields"\n   }],\n   "botId": <BOT ID>,\n   "integrationName": "salesforce-crm",\n   "nodeName": <NODE NAME>,\n   "source": <SOURCE>,\n   "sender": <SENDER>,\n   "dynamicParams": {\n       <VALUES TO BE POPULATED>\n   }\n}})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Yellow.ai uses oAuth 2.0 to connect with a client's Salesforce account and refrains from retaining the client's authentication details. During the integration process, Yellow.ai redirects the user to either the ",(0,a.kt)("a",{parentName:"p",href:"https://www.salesforce.com/in/?ir=1"},"Salesforce login page"),", or to the previously used subdomain within the same browser. If the integration is required in a different browser, the user must delete their cookies and then login via the Yellow.ai platform.")),(0,a.kt)("h2",{id:"3-use-case"},"3. Use-case"),(0,a.kt)("p",null,"Through this integration you can create,update,fetch objects and perform further more actions in your Salesforce CRM account."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys"},"Studio flow builder"),", choose the node type as ",(0,a.kt)("strong",{parentName:"li"},"Integrations")," and select ",(0,a.kt)("strong",{parentName:"li"},"PayU")," from the list of integrations that have been enabled for that particular bot. An ",(0,a.kt)("strong",{parentName:"li"},"Integration Action Node")," will be added to the flow builder.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/oGH7ZRI.png",alt:null})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Click the node, choose the action to be performed and the object in which it has to be performed.")),(0,a.kt)("img",{src:"https://i.imgur.com/QdJX2pg.png",alt:"drawing",width:"50%"}),(0,a.kt)("img",{src:"https://i.imgur.com/BnqxBTc.png",alt:"drawing",width:"60%"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample success response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "success": true,\n   "message": "Execution Successful",\n   "data": {\n       "statusCode": 201,\n       "body": "{\\"id\\":\\"00Q5i00000DcsbKEAR\\",\\"success\\":true,\\"errors\\":[]}",\n       "headers": {\n           "date": "Tue, 21 Feb 2023 09:03:59 GMT",\n           "set-cookie": [\n               "CookieConsentPolicy=0:1; path=/; expires=Wed, 21-Feb-2024 09:03:59 GMT; Max-Age=31536000",\n               "LSKey-c$CookieConsentPolicy=0:1; path=/; expires=Wed, 21-Feb-2024 09:03:59 GMT; Max-Age=31536000",\n               "BrowserId=re5NTLHGEe2nD8spPHPlfg; domain=.salesforce.com; path=/; expires=Wed, 21-Feb-2024 09:03:59 GMT; Max-Age=31536000"\n           ],\n           "strict-transport-security": "max-age=63072000; includeSubDomains",\n           "x-content-type-options": "nosniff",\n           "x-xss-protection": "1; mode=block",\n           "x-robots-tag": "none",\n           "cache-control": "no-cache,must-revalidate,max-age=0,no-store,private",\n           "sforce-limit-info": "api-usage=16/15000",\n           "location": "/services/data/v51.0/sobjects/Lead/00Q5i00000DcsbKEAR",\n           "content-type": "application/json;charset=UTF-8",\n           "vary": "Accept-Encoding",\n           "content-encoding": "gzip",\n           "transfer-encoding": "chunked",\n           "connection": "close"\n       },\n},\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample failure response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "success": false,\n   "message": "Execution Failed",\n   "data": {\n       "success": false,\n       "error": "Error processing createRecord :: {\\"message\\":\\"[INTG ERROR] Node API Execution failed for salesforce-crm_createRecord in bot x1664176494495: 4xx or 5xx series code encountered\\",\\"name\\":\\"IntegrationNodeAPIError\\",\\"response\\":{\\"statusCode\\":400,\\"body\\":\\"[{\\\\\\"message\\\\\\":\\\\\\"Required fields are missing: [Company]\\\\\\",\\\\\\"errorCode\\\\\\":\\\\\\"REQUIRED_FIELD_MISSING\\\\\\",\\\\\\"fields\\\\\\":[\\\\\\"Company\\\\\\"]}]\\",\\"headers\\":{\\"date\\":\\"Tue, 21 Feb 2023 09:12:48 GMT\\",\\"set-cookie\\":[\\"CookieConsentPolicy=0:1; path=/; expires=Wed, 21-Feb-2024 09:12:48 GMT; Max-Age=31536000\\",\\"LSKey-c$CookieConsentPolicy=0:1; path=/; expires=Wed, 21-Feb-2024 09:12:48 GMT; Max-Age=31536000\\",\\"BrowserId=6Oq-_bHHEe2M0bfscs6ulA; domain=.salesforce.com; path=/; expires=Wed, 21-Feb-2024 09:12:48 GMT; Max-Age=31536000\\"],\\"strict-transport-security\\":\\"max-age=63072000; includeSubDomains\\",\\"x-content-type-options\\":\\"nosniff\\",\\"x-xss-protection\\":\\"1; mode=block\\",\\"x-robots-tag\\":\\"none\\",\\"cache-control\\":\\"no-cache,must-revalidate,max-age=0,no-store,private\\",\\"sforce-limit-info\\":\\"api-usage=18/15000\\",\\"content-type\\":\\"application/json;charset=UTF-8\\",\\"transfer-encoding\\":\\"chunked\\",\\"connection\\":\\"close\\"},\\"request\\":{\\"uri\\":{\\"protocol\\":\\"https:\\",\\"slashes\\":true,\\"auth\\":null,\\"host\\":\\"101.53.168.117\\",\\"port\\":443,\\"hostname\\":\\"101.53.168.117\\",\\"hash\\":null,\\"search\\":null,\\"query\\":null,\\"pathname\\":\\"/services/data/v51.0/sobjects/Lead\\",\\"path\\":\\"/services/data/v51.0/sobjects/Lead\\",\\"href\\":\\"https://101.53.168.117/services/data/v51.0/sobjects/Lead\\"},\\"method\\":\\"POST\\",\\"headers\\":{\\"content-type\\":\\"application/json\\",\\"authorization\\":\\"Bearer 00D5i000009LFUq!AQIAQBNgSYLObvxoKFK.j8O7bIkkus.vcKGUHB75C8RfTUgK0kZNe6W6TCH.FAkF3hejM5fLLVPmewiFfk6x8wcBByElBUTQ\\",\\"host\\":\\"yellowai-b-dev-ed.my.salesforce.com\\",\\"user-agent\\":\\"yellow-ai/api_processor\\",\\"accept-encoding\\":\\"gzip, deflate\\",\\"content-length\\":18}}}}",\n       "node": "createRecord",\n}\n\n')),(0,a.kt)("h4",{id:"supported-version"},"Supported Version"),(0,a.kt)("p",null,"This integration will support the latest version's (52.0) releases. For more information on this, please click ",(0,a.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/api_rest_eol.htm"},"here"),"."))}d.isMDXComponent=!0}}]);