(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{433:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||r;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),i=n(7),r=(n(0),n(433)),a=["components"],c={title:"Microsoft Dynamics 365",sidebar_label:"Microsoft Dynamics 365"},s={unversionedId:"platform_concepts/appConfiguration/microsoft-dynamics",id:"platform_concepts/appConfiguration/microsoft-dynamics",isDocsHomePage:!1,title:"Microsoft Dynamics 365",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/microsoft-dynamics.md",slug:"/platform_concepts/appConfiguration/microsoft-dynamics",permalink:"/docs/platform_concepts/appConfiguration/microsoft-dynamics",version:"current",sidebar_label:"Microsoft Dynamics 365",sidebar:"platform_concepts",previous:{title:"LeadSquared Whatsapp Connector",permalink:"/docs/platform_concepts/appConfiguration/leadSquared-wa-connector"},next:{title:"Microsoft Graph",permalink:"/docs/platform_concepts/appConfiguration/microsoft-graph"}},l=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Use-cases",id:"use-cases",children:[{value:"Simple integration with Oauth",id:"simple-integration-with-oauth",children:[]},{value:"Do actions with Microsoft Dynamics action nodes",id:"do-actions-with-microsoft-dynamics-action-nodes",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Navigate to integration tab",id:"navigate-to-integration-tab",children:[]},{value:"Connect your Microsoft Dynamics 365 account",id:"connect-your-microsoft-dynamics-365-account",children:[]}]},{value:"Reference",id:"reference",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,a);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(r.b)("p",null,"Yellow.ai Integration with Microsoft Dynamics 365 allows you to seamlessly connect your Dynamics 365 organisation with the yellow.ai platform. Any customer who has a dynamics account will be able to connect with yellow.ai using OAuth. This connector will make sure you can do actions on your leads. Using this integration you can create, update, read, delete the leads."),Object(r.b)("h2",{id:"use-cases"},"Use-cases"),Object(r.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(r.b)("h3",{id:"simple-integration-with-oauth"},"Simple integration with Oauth"),Object(r.b)("p",null,"Yellow.ai leverages OAuth 2.0 approach for integrating with the client's dynamics 365 account."),Object(r.b)("p",null,"While integrating, the user has to provide some client credentials and then yellow.ai navigates the user to the login page of microsoft, the user has to login and provide his consent."),Object(r.b)("h3",{id:"do-actions-with-microsoft-dynamics-action-nodes"},"Do actions with Microsoft Dynamics action nodes"),Object(r.b)("p",null,"You can store a new Lead and save it in your dynamics 365 account. You can also update, read, delete the lead too with the leadId."),Object(r.b)("img",{src:"https://cdn.yellowmessenger.com/XzXHeQEHSnUp1649095288332.png",alt:"drawing",width:"60%"}),Object(r.b)("img",{src:"https://cdn.yellowmessenger.com/AuiKUKB9cvZL1649223437204.png",alt:"drawing",width:"60%"}),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Configuring the integration of Microsoft Dynamics 365 is straightforward. Follow the steps defined below\nto start integrating:"),Object(r.b)("h3",{id:"navigate-to-integration-tab"},"Navigate to integration tab"),Object(r.b)("p",null,"Inside your project, navigate to the Integrations tab and then on the left side bar, select CRM. You will find Microsoft Dynamics 365."),Object(r.b)("img",{src:"https://cdn.yellowmessenger.com/BIOuqSZuFCfl1649095846294.png",alt:"drawing",width:"60%"}),Object(r.b)("h3",{id:"connect-your-microsoft-dynamics-365-account"},"Connect your Microsoft Dynamics 365 account"),Object(r.b)("p",null,"Please follow the instructions in integration page to get the client Id, client secret and tenant Id, then you have to provide your complete organisation url (ex: ",Object(r.b)("a",{parentName:"p",href:"https://orgfd96595f.crm8.dynamics.com"},"https://orgfd96595f.crm8.dynamics.com"),") and then you have to click on connect with Microsoft Dynamics 365. After you click that, you will notice that you will be prompted to login into your Micro account."),Object(r.b)("p",null,"Following the above steps will connect your dynamics 365 account with yellow.ai platform."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/gNwq8y3gIaj41649222821326.gif",alt:null})),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("p",null,"For more information about action nodes you use here, refer this ",Object(r.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powerapps/developer/data-platform/webapi/create-entity-web-api"},"doc")))}p.isMDXComponent=!0}}]);