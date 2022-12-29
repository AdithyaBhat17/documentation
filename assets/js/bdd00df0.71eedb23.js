"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[2200],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"Zoho SalesIQ",sidebar_label:"Zoho SalesIQ"},c=void 0,s={unversionedId:"platform_concepts/appConfiguration/zoho-live-chat",id:"platform_concepts/appConfiguration/zoho-live-chat",title:"Zoho SalesIQ",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/zoho-live-chat.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/zoho-live-chat",permalink:"/docs/platform_concepts/appConfiguration/zoho-live-chat",draft:!1,tags:[],version:"current",frontMatter:{title:"Zoho SalesIQ",sidebar_label:"Zoho SalesIQ"},sidebar:"platform_concepts",previous:{title:"Zoho CRM",permalink:"/docs/platform_concepts/appConfiguration/zoho-crm"},next:{title:"Exposing cloud Integration to app.ym using app function",permalink:"/docs/platform_concepts/appConfiguration/exposing-integration-to-app"}},p={},u=[{value:"Scope of Integration",id:"scope-of-integration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Use Case",id:"use-case",level:2},{value:"Events",id:"events",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Steps to perform if webhook deletion fails while disconnecting the integration:",id:"steps-to-perform-if-webhook-deletion-fails-while-disconnecting-the-integration",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"scope-of-integration"},"Scope of Integration"),(0,r.kt)("p",null,"Yellow.ai Integration with Zoho Live Chat allows you to seamlessly connect your Zoho SalesIQservice with the yellow.ai platform. Any customer who has a Zoho SalesIQ account will be able to seamlessly connect their service with yellow.ai using Oauth. This connector will enable it to connect end users to live agents."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Setting up an account for Zoho SalesIQ :"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can create an account on Zoho and use ",(0,r.kt)("a",{parentName:"p",href:"https://api-console.zoho.com/add?client_type=ORG"},"this")," link to create a client. Use appropriate top level domain according to your location (for example .in for Indian users). ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai/integration/oauth/zoho-live-chat"},"this")," as a redirect URI. You'll need client Id and client secret for connection which you'll get on the \"Client Secret\" tab on the same window. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then you can navigate to the salesIQ dashboard where you can find your screen name in the URL. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can find Department Id in the settings section. For App Id, you'll need to call ",(0,r.kt)("a",{parentName:"p",href:"https://www.zoho.com/salesiq/help/developer-section/rest-api-apps-list.html"},"this")," API with appropriate credentials."))),(0,r.kt)("p",null,"Simple Integration with client ID, Client Secret, Screen Name, App ID and Dept ID: "),(0,r.kt)("p",null,"Once you have all these credentials, you can connect with Zoho Live Chat integration on yellow.ai dashboard. "),(0,r.kt)("p",null,"For connecting, you'll need to navigate to the integrations page and search for Zoho Live Chat integration. "),(0,r.kt)("img",{src:"https://cdn.yellowmessenger.com/k0xMy2WgMfnN1659344670385.png",alt:"drawing",width:"100%"}),(0,r.kt)("p",null,"On this screen you need to enter Client ID, Client Secret, Screen Name, App ID and Dept ID."),(0,r.kt)("p",null,"After that you can click on the Connect to Zoho Live Chat button to be prompted for the Oauth process where you need to give us access to your account for:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initiating the conversation"),(0,r.kt)("li",{parentName:"ol"},"Creating webhook"),(0,r.kt)("li",{parentName:"ol"},"Viewing webhook"),(0,r.kt)("li",{parentName:"ol"},"Deleting webhook.")),(0,r.kt)("p",null,"After you click accept, a webhook will automatically be created on your SalesIQ dashboard, which will empower the user-agent conversation."),(0,r.kt)("h2",{id:"use-case"},"Use Case"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In this integration you can use ",(0,r.kt)("strong",{parentName:"li"},"raise ticket")," node to create a conversation with Zoho SalesIQ agent and once conversation initiates the user can talk to the agent.")),(0,r.kt)("img",{src:"https://cdn.yellowmessenger.com/BYpyYutCB4G21659344783118.png",alt:"drawing",width:"100%"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("p",null,"Following are the events which are currently accommodated in the Integration:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zoho_operator_replied"),(0,r.kt)("td",{parentName:"tr",align:null},"This event reaches to bot when a salesIQ agent replies to the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ticket-closed"),(0,r.kt)("td",{parentName:"tr",align:null},"This event reaches to bot when salesIQ agent closes the user ticket.")))),(0,r.kt)("h2",{id:"limitations"},"Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Images, audio or video attachments are being supported only from the user side currently. Attachments from agents are not supported.")),(0,r.kt)("h2",{id:"steps-to-perform-if-webhook-deletion-fails-while-disconnecting-the-integration"},"Steps to perform if webhook deletion fails while disconnecting the integration:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check if you can access the webhook page on the client dashboard"),(0,r.kt)("li",{parentName:"ol"},"If you can access it, please try to delete it manually from the dashboard itself."),(0,r.kt)("li",{parentName:"ol"},"If you can't access it, please address the reason why you are not able to access it. (for example, the plan needs to be upgraded or the free trial expired).")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to Settings -> Webhooks.",(0,r.kt)("img",{src:"https://cdn.yellowmessenger.com/FsqfGcmOoKqk1663581470836.png",alt:"drawing",width:"100%"})),(0,r.kt)("li",{parentName:"ul"},"If your free trial has expired for Zoho SalesIQ, you will see the above error."),(0,r.kt)("li",{parentName:"ul"},"Please upgrade the plan if you need to register/ deregister webhooks for live chat use cases."),(0,r.kt)("li",{parentName:"ul"},"If you can view the webhook, then please try to delete it manually.")),(0,r.kt)("h1",{id:"reference"},"Reference"),(0,r.kt)("p",null,"API Documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://www.zoho.com/salesiq/help/developer-section/rest-api-v2.html"},"https://www.zoho.com/salesiq/help/developer-section/rest-api-v2.html")))}d.isMDXComponent=!0}}]);