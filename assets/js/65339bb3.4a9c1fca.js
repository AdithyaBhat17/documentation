"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[79994],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(o),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},73911:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],c={title:"Zoho CRM",sidebar_label:"Zoho CRM"},s=void 0,l={unversionedId:"platform_concepts/appConfiguration/zoho-crm",id:"platform_concepts/appConfiguration/zoho-crm",title:"Zoho CRM",description:"Integrate your yellow.ai platform with your Zoho CRM account to create, update and search for records in your Zoho CRM modules.",source:"@site/docs/platform_concepts/appConfiguration/zoho-crm.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/zoho-crm",permalink:"/docs/platform_concepts/appConfiguration/zoho-crm",draft:!1,tags:[],version:"current",frontMatter:{title:"Zoho CRM",sidebar_label:"Zoho CRM"},sidebar:"platform_concepts",previous:{title:"Salesforce CRM",permalink:"/docs/platform_concepts/appConfiguration/salesforce-service-cloud"},next:{title:"Freshservice ITSM",permalink:"/docs/platform_concepts/appConfiguration/freshservice"}},p={},u=[{value:"1. Connect Zoho CRM with Yellow.ai",id:"1-connect-zoho-crm-with-yellowai",level:2},{value:"2. Payload to access Zoho CRM on app.yellow.ai",id:"2-payload-to-access-zoho-crm-on-appyellowai",level:2},{value:"3. Use-case",id:"3-use-case",level:2},{value:"Supported version",id:"supported-version",level:4}],d={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Integrate your yellow.ai platform with your ",(0,a.kt)("a",{parentName:"p",href:"https://www.zoho.com/en-in/crm/"},"Zoho CRM")," account to create, update and search for records in your Zoho CRM modules."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In Zoho CRM, data is categorized into groups or divisions based on similarity. Each division that has similar data is called a ",(0,a.kt)("strong",{parentName:"p"},"module"),". For example, Leads is a module that contains all your business leads' details.")),(0,a.kt)("h2",{id:"1-connect-zoho-crm-with-yellowai"},"1. Connect Zoho CRM with Yellow.ai"),(0,a.kt)("p",null,"To connect your Zoho CRM account with Yellow.ai, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to cloud.yellow.ai and click ",(0,a.kt)("strong",{parentName:"li"},"Integrations")," on the module switcher.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/1EjCvqy.png",alt:null})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Search for ",(0,a.kt)("strong",{parentName:"li"},"Zoho CRM")," in the search box or go to the category ",(0,a.kt)("strong",{parentName:"li"},"CRM")," > ",(0,a.kt)("strong",{parentName:"li"},"Zoho CRM"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/07zbS8L.png",alt:null})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Connect to Zoho-CRM")," button and log in to your Zoho CRM account in the following pop-up to establish this integration. ")),(0,a.kt)("h2",{id:"2-payload-to-access-zoho-crm-on-appyellowai"},"2. Payload to access Zoho CRM on app.yellow.ai"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'app.executeIntegrationAction({\n        "action": <NODE TO BE EXECUTED>,\n        "dynamicParams": {\n    "context": [{\n       "key": "objects",\n       "value": <VALUE OF OBJECT SELECTED>,\n       "label": <VALUE LABEL OF OBJECT SELECTED>,\n       "nextStep":"fields"\n   }],\n   "botId": <BOT ID>,\n   "integrationName": "zoho-crm",\n   "nodeName": <NODE NAME>,\n   "source": <SOURCE>,\n   "sender": <SENDER>,\n   "dynamicParams": {\n       <VALUES TO BE POPULATED>\n   }\n}})\n\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Yellow.ai adopts a secure approach towards client credential storage, whereby it refrains from storing the said credentials. Instead, it utilizes the oAuth 2.0 to integrate with the client's Zoho account. During the integration, Yellow.ai directs the user to log in to their Zoho CRM account and seek authorization to access the account on Yellow.ai. This process ensures optimal security and eliminates any potential risks associated with the storage of client credentials.")),(0,a.kt)("h2",{id:"3-use-case"},"3. Use-case"),(0,a.kt)("p",null,"Through this integration you can create and update all the standard records in your Zoho CRM account."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys"},"Studio flow builder"),", choose the node type as ",(0,a.kt)("strong",{parentName:"li"},"Integrations")," and select ",(0,a.kt)("strong",{parentName:"li"},"Zoho CRM")," from the list of integrations that have been enabled for that particular bot. An ",(0,a.kt)("strong",{parentName:"li"},"Integration Action Node")," will be added to the flow builder.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/IYe9Wxp.png",alt:null})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Choose the action to be performed, the module in which it has to be performed and fill in the respective fields.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/RGVFM3e.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/trU9nS8.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample success response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "success": true,\n   "message": "Execution Successful",\n   "data": {\n       "statusCode": 201,\n       "body": "{\\"data\\":[{\\"code\\":\\"SUCCESS\\",\\"details\\":{\\"Modified_Time\\":\\"2023-02-21T14:47:17+05:30\\",\\"Modified_By\\":{\\"name\\":\\"Raksha R\\",\\"id\\":\\"332678000000228001\\"},\\"Created_Time\\":\\"2023-02-21T14:47:17+05:30\\",\\"id\\":\\"332678000000867006\\",\\"Created_By\\":{\\"name\\":\\"Raksha R\\",\\"id\\":\\"332678000000228001\\"}},\\"message\\":\\"record added\\",\\"status\\":\\"success\\"}]}",\n  }\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample failure response:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   "success": false,\n   "message": "Execution Failed",\n   "data": {\n       "success": false,\n       "error": "Error processing createRecord :: {\\"message\\":\\"[INTG ERROR] Node API Execution failed for zoho-crm_createRecord in bot x1664176494495: 4xx or 5xx series code encountered\\",\\"name\\":\\"IntegrationNodeAPIError\\",\\"response\\":{\\"statusCode\\":400,\\"body\\":\\"{\\\\\\"code\\\\\\":\\\\\\"INVALID_DATA\\\\\\",\\\\\\"details\\\\\\":{\\\\\\"expected_data_type\\\\\\":\\\\\\"jsonobject\\\\\\"},\\\\\\"message\\\\\\":\\\\\\"body\\\\\\",\\\\\\"status\\\\\\":\\\\\\"error\\\\\\"}\\\\n\\",\\"headers\\":{\\"server\\":\\"ZGS\\",\\"date\\":\\"Tue, 21 Feb 2023 09:18:38 GMT\\",\\"content-type\\":\\"application/json;charset=UTF-8\\",\\"content-length\\":\\"104\\",\\"connection\\":\\"close\\",\\"set-cookie\\":[\\"941ef25d4b=1bfe2db6d19f9173efced4a75c6b6506; Path=/\\",\\"crmcsr=6e24c89f-15af-4a8d-a2ae-4a9ae41cd463;path=/;SameSite=None;Secure;priority=high\\",\\"_zcsr_tmp=6e24c89f-15af-4a8d-a2ae-4a9ae41cd463;path=/;SameSite=Strict;Secure;priority=high\\",\\"JSESSIONID=FAC2412202E8AC272350783D5A196B56; Path=/; Secure\\"],\\"referrer-policy\\":\\"strict-origin\\",\\"x-content-type-options\\":\\"nosniff\\",\\"x-xss-protection\\":\\"1; mode=block\\",\\"cache-control\\":\\"no-store, no-cache, must-revalidate, private\\",\\"pragma\\":\\"no-cache\\",\\"expires\\":\\"Thu, 01 Jan 1970 00:00:00 GMT\\",\\"x-frame-options\\":\\"SAMEORIGIN\\",\\"x-accesstoken-reset\\":\\"2023-02-21T15:46:28+05:30\\",\\"clientversion\\":\\"6007735\\",\\"clientsubversion\\":\\"73cb86c33821cf861d01dedd6b33d075\\",\\"content-disposition\\":\\"attachment; filename=response.json\\",\\"x-download-options\\":\\"noopen\\",\\"content-language\\":\\"en-US\\"},\\"request\\":{\\"uri\\":{\\"protocol\\":\\"https:\\",\\"slashes\\":true,\\"auth\\":null,\\"host\\":\\"169.148.148.66\\",\\"port\\":443,\\"hostname\\":\\"169.148.148.66\\",\\"hash\\":null,\\"search\\":null,\\"query\\":null,\\"pathname\\":\\"/crm/v2/Leads\\",\\"path\\":\\"/crm/v2/Leads\\",\\"href\\":\\"https://169.148.148.66/crm/v2/Leads\\"},\\"method\\":\\"POST\\",\\"headers\\":{\\"content-type\\":\\"application/json\\",\\"authorization\\":\\"Zoho-oauthtoken 1000.50a47d7f8e057fc7af19e15308f42d14.4013b576fa075e0dd91f586196903f27\\",\\"host\\":\\"www.zohoapis.in\\",\\"user-agent\\":\\"yellow-ai/api_processor\\",\\"accept-encoding\\":\\"gzip, deflate\\",\\"content-length\\":0}}}}",\n       "node": "createRecord",\n}}\n\n')),(0,a.kt)("h4",{id:"supported-version"},"Supported version"),(0,a.kt)("p",null,"This integration will work for API versions v1 and v2. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For more information on the action nodes you can use here, click ",(0,a.kt)("a",{parentName:"p",href:"https://www.zoho.com/crm/developer/docs/api/v2/insert-records.html"},"here"),".")))}h.isMDXComponent=!0}}]);