"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[9994],{3905:function(t,e,o){o.d(e,{Zo:function(){return s},kt:function(){return m}});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var c=n.createContext({}),u=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},p="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),p=u(o),g=r,m=p["".concat(c,".").concat(g)]||p[g]||h[g]||a;return o?n.createElement(m,i(i({ref:e},s),{},{components:o})):n.createElement(m,i({ref:e},s))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[p]="string"==typeof t?t:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},73911:function(t,e,o){o.r(e),o.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],l={title:"Zoho CRM",sidebar_label:"Zoho CRM"},c=void 0,u={unversionedId:"platform_concepts/appConfiguration/zoho-crm",id:"platform_concepts/appConfiguration/zoho-crm",title:"Zoho CRM",description:"1. Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/zoho-crm.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/zoho-crm",permalink:"/docs/platform_concepts/appConfiguration/zoho-crm",draft:!1,tags:[],version:"current",frontMatter:{title:"Zoho CRM",sidebar_label:"Zoho CRM"},sidebar:"platform_concepts",previous:{title:"Zoho SalesIQ",permalink:"/docs/platform_concepts/appConfiguration/zoho-live-chat"},next:{title:"BambooHR",permalink:"/docs/platform_concepts/appConfiguration/bamboohr"}},s={},p=[{value:"1. Scope of Integration",id:"1-scope-of-integration",level:2},{value:"2. Use-cases",id:"2-use-cases",level:2},{value:"2.1 Simple integration with Oauth",id:"21-simple-integration-with-oauth",level:3},{value:"2.2 Zoho action nodes",id:"22-zoho-action-nodes",level:3},{value:"3. Configuration",id:"3-configuration",level:2},{value:"3.1 Navigate to integration tab",id:"31-navigate-to-integration-tab",level:3},{value:"3.2 Connect to your Zoho account",id:"32-connect-to-your-zoho-account",level:3}],h={toc:p};function g(t){var e=t.components,o=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-scope-of-integration"},"1. Scope of Integration"),(0,a.kt)("p",null,"Yellow.ai Integration with Zoho CRM allows you to seamlessly connect your Zoho CRM instance with yellow.ai platform. Any customer having a Zoho CRM account can connect their Zoho instance with yellow.ai using OAuth. This connector is used to perform actions on your leads. This integration can be used to create, update, read leads and search for leads with email and phone number."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Supported Version"),"\nThis integration will work on versions 2.0 and above. ")),(0,a.kt)("h2",{id:"2-use-cases"},"2. Use-cases"),(0,a.kt)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),(0,a.kt)("h3",{id:"21-simple-integration-with-oauth"},"2.1 Simple integration with Oauth"),(0,a.kt)("p",null,"Yellow.ai does not store the client\u2019s credentials and leverages oAuth 2.0 approach for integrating with client\u2019s Zoho account.\nWhile integrating, yellow.ai navigates you to login into the Zoho CRM account and request for the consent to access it on yellow. "),(0,a.kt)("h3",{id:"22-zoho-action-nodes"},"2.2 Zoho action nodes"),(0,a.kt)("p",null,"Create, update and search all kinds of custom and standard records supported by ZOHO CRM."),(0,a.kt)("img",{src:"https://i.imgur.com/BgTi0n8.png",alt:"drawing",width:"60%"}),(0,a.kt)("img",{src:"https://cdn.yellowmessenger.com/kGsixlbw4kIL1659438563623.png",alt:"drawing",width:"60%"}),(0,a.kt)("img",{src:"https://cdn.yellowmessenger.com/BOHFMLICdTOb1659438675434.png",alt:"drawing",width:"60%"}),(0,a.kt)("img",{src:"https://cdn.yellowmessenger.com/1WPWGiMu2pAK1659438744032.png",alt:"drawing",width:"60%"}),(0,a.kt)("h2",{id:"3-configuration"},"3. Configuration"),(0,a.kt)("p",null,"Configuring the integration with zoho CRM is straightforward. Follow the steps defined below to integrate Zoho:"),(0,a.kt)("h3",{id:"31-navigate-to-integration-tab"},"3.1 Navigate to integration tab"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inside your project, navigate to the Configuration tab."),(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Integrations")," tab. "),(0,a.kt)("li",{parentName:"ul"},"Search for ",(0,a.kt)("strong",{parentName:"li"},"Zoho CRM"),".  ",(0,a.kt)("img",{src:"https://i.imgur.com/Ue3HDlB.png",alt:"drawing",width:"60%"}))),(0,a.kt)("h3",{id:"32-connect-to-your-zoho-account"},"3.2 Connect to your Zoho account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Connect")," and select ",(0,a.kt)("strong",{parentName:"li"},"Connect with Zoho-CRM"),". "),(0,a.kt)("li",{parentName:"ul"},"You will be prompted to login to your Zoho account.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/cyNeiG9.gif",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Following the above steps will connect your Zoho CRM account with the yellow.ai platform.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Click ",(0,a.kt)("a",{parentName:"p",href:"https://www.zoho.com/crm/developer/docs/api/v2/insert-records.html"},"here")," to learn about the action nodes used for this integration.")))}g.isMDXComponent=!0}}]);