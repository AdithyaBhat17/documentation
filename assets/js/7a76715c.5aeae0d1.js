"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[874],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return h}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(o),m=r,h=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return o?n.createElement(h,l(l({ref:t},u),{},{components:o})):n.createElement(h,l({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},65649:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),l=["components"],i={title:"Salesforce Service Cloud",sidebar_label:"Salesforce Service Cloud"},c=void 0,s={unversionedId:"platform_concepts/appConfiguration/salesforce-service-cloud",id:"platform_concepts/appConfiguration/salesforce-service-cloud",title:"Salesforce Service Cloud",description:"1. Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/salesforce-service-cloud.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/salesforce-service-cloud",permalink:"/docs/platform_concepts/appConfiguration/salesforce-service-cloud",draft:!1,tags:[],version:"current",frontMatter:{title:"Salesforce Service Cloud",sidebar_label:"Salesforce Service Cloud"},sidebar:"platform_concepts",previous:{title:"Razorpay",permalink:"/docs/platform_concepts/appConfiguration/razorpay"},next:{title:"Salesforce Live Chat",permalink:"/docs/platform_concepts/appConfiguration/salesforcelivechat"}},u={},p=[{value:"1. Scope of Integration",id:"1-scope-of-integration",level:2},{value:"2. Use-cases",id:"2-use-cases",level:2},{value:"2.1 Integration with oAuth 2.0",id:"21-integration-with-oauth-20",level:3},{value:"2.2 Take actions with Salesforce Nodes",id:"22-take-actions-with-salesforce-nodes",level:3},{value:"2.3 Receive Events from Salesforce",id:"23-receive-events-from-salesforce",level:3},{value:"3. Configuration",id:"3-configuration",level:2},{value:"3.1 Navigate to Integrations Tab",id:"31-navigate-to-integrations-tab",level:3},{value:"3.2 Connect to the Salesforce account",id:"32-connect-to-the-salesforce-account",level:3}],f={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-scope-of-integration"},"1. Scope of Integration"),(0,a.kt)("p",null,"Yellow.ai Integration with Salesforce CRM allows you to seamlessly connect your Salesforce CRM instance with yellow.ai platform. Any customer who has a Salesforce CRM account will be able to seamlessly connect their Salesforce instance with yellow.ai using oAuth. This connector enables users to receive events for Salesforce objects, both system defined and custom objects. Furthermore, this connector with enable you to take actions, such as create, update etc. on the objects."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Supported Version"),"\nThis integration will support the latest version releases, latest one being 52.0")),(0,a.kt)("h2",{id:"2-use-cases"},"2. Use-cases"),(0,a.kt)("p",null,"Following are the use-cases which are currently accommodated in this Integration:"),(0,a.kt)("h3",{id:"21-integration-with-oauth-20"},"2.1 Integration with oAuth 2.0"),(0,a.kt)("p",null,"Yellow.ai does not store the client\u2019s credentials and leverages oAuth 2.0 approach for integrating with client\u2019s Salesforce account.\n\u200b\nWhile integrating, yellow.ai navigates the user to the login page of Salesforce, i.e. login.salesforce.com or to the subdomain which was already used in the same browser. If you want to integrate in some other instance, clear your cookies and retry login in from yellow.ai platform."),(0,a.kt)("h3",{id:"22-take-actions-with-salesforce-nodes"},"2.2 Take actions with Salesforce Nodes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can store a new record or store data in any of your custom objects. "),(0,a.kt)("li",{parentName:"ul"},"The actions are not limited to the system defined Salesforce Objects, you can also use Custom Objects. "),(0,a.kt)("li",{parentName:"ul"},"Functionalities to update and search for records using a particular parameter is also available.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/BeijaEmjIOPY1659940145073.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On-click of the Salesforce CRM node, you can customize the object and action type along with the attributes that you wish to pass.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/H7KDA72IA3iB1659940427212.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/pBD9bJOeipap1659940497555.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/rrvyShcKtbKe1659940554939.png",alt:null})),(0,a.kt)("h3",{id:"23-receive-events-from-salesforce"},"2.3 Receive Events from Salesforce"),(0,a.kt)("p",null,"This feature is coming soon to the platform..."),(0,a.kt)("h2",{id:"3-configuration"},"3. Configuration"),(0,a.kt)("p",null,"Configuring the integration with Salesforce CRM is straightforward. Follow the steps defined below to integrate:"),(0,a.kt)("h3",{id:"31-navigate-to-integrations-tab"},"3.1 Navigate to Integrations Tab"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inside your project, navigate to the ",(0,a.kt)("strong",{parentName:"li"},"Configuration")," tab. "),(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Integrations")," Tab. "),(0,a.kt)("li",{parentName:"ul"},"Search for ",(0,a.kt)("strong",{parentName:"li"},"Salesforce CRM"),".\n\u200b\n",(0,a.kt)("img",{parentName:"li",src:"https://i.imgur.com/E9LZ68M.png",alt:null}))),(0,a.kt)("p",null,"Click ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=_Sp4bzTpjMI"},"here")," to learn more."),(0,a.kt)("h3",{id:"32-connect-to-the-salesforce-account"},"3.2 Connect to the Salesforce account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Connect")," and select ",(0,a.kt)("strong",{parentName:"li"},"Connect with Salesforce"),". "),(0,a.kt)("li",{parentName:"ul"},"You will be prompted to login to your Salesforce account.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/2ucDsE7.gif",alt:null})),(0,a.kt)("p",null,"Voila! You are now connected with your Salesforce account."),(0,a.kt)("p",null,"For more information, click ",(0,a.kt)("a",{parentName:"p",href:"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/api_rest_eol.htm"},"here"),"."))}m.isMDXComponent=!0}}]);