"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[9901],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(n),m=i,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||r;return n?o.createElement(d,a(a({ref:e},u),{},{components:n})):o.createElement(d,a({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[p]="string"==typeof t?t:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55081:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],c={title:"Microsoft Dynamics 365",sidebar_label:"Microsoft Dynamics 365"},s=void 0,l={unversionedId:"platform_concepts/appConfiguration/microsoft-dynamics",id:"platform_concepts/appConfiguration/microsoft-dynamics",title:"Microsoft Dynamics 365",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/microsoft-dynamics.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/microsoft-dynamics",permalink:"/docs/platform_concepts/appConfiguration/microsoft-dynamics",draft:!1,tags:[],version:"current",frontMatter:{title:"Microsoft Dynamics 365",sidebar_label:"Microsoft Dynamics 365"},sidebar:"platform_concepts",previous:{title:"Magento Integration",permalink:"/docs/platform_concepts/appConfiguration/magento"},next:{title:"Microsoft Graph",permalink:"/docs/platform_concepts/appConfiguration/microsoft-graph"}},u={},p=[{value:"Scope of Integration",id:"scope-of-integration",level:2},{value:"Use-cases",id:"use-cases",level:2},{value:"Simple integration with Oauth",id:"simple-integration-with-oauth",level:3},{value:"Do actions with Microsoft Dynamics action nodes",id:"do-actions-with-microsoft-dynamics-action-nodes",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Navigate to integration tab",id:"navigate-to-integration-tab",level:3},{value:"Connect your Microsoft Dynamics 365 account",id:"connect-your-microsoft-dynamics-365-account",level:3},{value:"Reference",id:"reference",level:2}],f={toc:p};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"scope-of-integration"},"Scope of Integration"),(0,r.kt)("p",null,"Yellow.ai Integration with Microsoft Dynamics 365 allows you to seamlessly connect your Dynamics 365 organisation with the yellow.ai platform. Any customer who has a dynamics account will be able to connect with yellow.ai using OAuth. This connector will make sure you can do actions on your leads. Using this integration you can create, update, read, delete the leads."),(0,r.kt)("h2",{id:"use-cases"},"Use-cases"),(0,r.kt)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),(0,r.kt)("h3",{id:"simple-integration-with-oauth"},"Simple integration with Oauth"),(0,r.kt)("p",null,"Yellow.ai leverages OAuth 2.0 approach for integrating with the client's dynamics 365 account."),(0,r.kt)("p",null,"While integrating, the user has to provide some client credentials and then yellow.ai navigates the user to the login page of microsoft, the user has to login and provide his consent."),(0,r.kt)("h3",{id:"do-actions-with-microsoft-dynamics-action-nodes"},"Do actions with Microsoft Dynamics action nodes"),(0,r.kt)("p",null,"You can store a new Lead and save it in your dynamics 365 account. You can also update, read, delete the lead too with the leadId."),(0,r.kt)("img",{src:"https://cdn.yellowmessenger.com/XzXHeQEHSnUp1649095288332.png",alt:"drawing",width:"60%"}),(0,r.kt)("img",{src:"https://cdn.yellowmessenger.com/AuiKUKB9cvZL1649223437204.png",alt:"drawing",width:"60%"}),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Configuring the integration of Microsoft Dynamics 365 is straightforward. Follow the steps defined below\nto start integrating:"),(0,r.kt)("h3",{id:"navigate-to-integration-tab"},"Navigate to integration tab"),(0,r.kt)("p",null,"Inside your project, navigate to the Integrations tab and then on the left side bar, select CRM. You will find Microsoft Dynamics 365."),(0,r.kt)("img",{src:"https://cdn.yellowmessenger.com/BIOuqSZuFCfl1649095846294.png",alt:"drawing",width:"60%"}),(0,r.kt)("h3",{id:"connect-your-microsoft-dynamics-365-account"},"Connect your Microsoft Dynamics 365 account"),(0,r.kt)("p",null,"Please follow the instructions in integration page to get the client Id, client secret and tenant Id, then you have to provide your complete organisation url (ex: ",(0,r.kt)("a",{parentName:"p",href:"https://orgfd96595f.crm8.dynamics.com"},"https://orgfd96595f.crm8.dynamics.com"),") and then you have to click on connect with Microsoft Dynamics 365. After you click that, you will notice that you will be prompted to login into your Micro account."),(0,r.kt)("p",null,"Following the above steps will connect your dynamics 365 account with yellow.ai platform."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/gNwq8y3gIaj41649222821326.gif",alt:null})),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"For more information about action nodes you use here, refer this ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powerapps/developer/data-platform/webapi/create-entity-web-api"},"doc")))}m.isMDXComponent=!0}}]);