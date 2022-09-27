(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{151:function(t,e,o){"use strict";o.r(e),o.d(e,"frontMatter",(function(){return c})),o.d(e,"metadata",(function(){return s})),o.d(e,"toc",(function(){return u})),o.d(e,"default",(function(){return p}));var n=o(3),r=o(7),a=(o(0),o(426)),i=["components"],c={title:"Hubspot CRM",sidebar_label:"Hubspot CRM"},s={unversionedId:"platform_concepts/appConfiguration/hubspot-crm",id:"platform_concepts/appConfiguration/hubspot-crm",isDocsHomePage:!1,title:"Hubspot CRM",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/hubspot-crm.md",slug:"/platform_concepts/appConfiguration/hubspot-crm",permalink:"/docs/platform_concepts/appConfiguration/hubspot-crm",version:"current",sidebar_label:"Hubspot CRM",sidebar:"platform_concepts",previous:{title:"Google Sheets",permalink:"/docs/platform_concepts/appConfiguration/google-sheets"},next:{title:"Intercom Live Chat",permalink:"/docs/platform_concepts/appConfiguration/intercom-livechat"}},u=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Use-cases",id:"use-cases",children:[{value:"1. Simple integration with OAuth",id:"1-simple-integration-with-oauth",children:[]},{value:"2. Do actions with hubspot action nodes",id:"2-do-actions-with-hubspot-action-nodes",children:[]},{value:"3. Events",id:"3-events",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"1. Navigate to integration tab",id:"1-navigate-to-integration-tab",children:[]},{value:"2. Connect your hubspot account",id:"2-connect-your-hubspot-account",children:[]},{value:"3. Add our webhook",id:"3-add-our-webhook",children:[]}]},{value:"Supported Version",id:"supported-version",children:[]}],l={toc:u};function p(t){var e=t.components,o=Object(r.a)(t,i);return Object(a.b)("wrapper",Object(n.a)({},l,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(a.b)("p",null,"Yellow.ai Integration with Hubspot CRM allows you to seamlessly connect your Hubspot CRM instance with yellow.ai platform. Any customer who has a Hubspot CRM account will be able to connect their Hubspot instance with yellow.ai using OAuth. This connector will make sure you can do actions on your leads (contacts). Using this integration you can create, update, read, delete the leads (contacts) and also you can search for contacts with email and phone number."),Object(a.b)("h2",{id:"use-cases"},"Use-cases"),Object(a.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(a.b)("h3",{id:"1-simple-integration-with-oauth"},"1. Simple integration with OAuth"),Object(a.b)("p",null,"Yellow.ai does not store the client\u2019s credentials and leverages OAuth 2.0 approach for integrating with client\u2019s Hubspot account.\nWhile integrating, yellow.ai navigates the user to the login page of Hubspot, user has to login into his hubspot CRM account and has to provide his consent."),Object(a.b)("h3",{id:"2-do-actions-with-hubspot-action-nodes"},"2. Do actions with hubspot action nodes"),Object(a.b)("p",null,"   You can store a new ",Object(a.b)("strong",{parentName:"p"},"Lead(Contact)")," and save it in your hubspot CRM. You can update,\nread, delete the lead(contact) too. Also you can search the leads (contacts) in your crm\nwith email and phone number."),Object(a.b)("img",{src:"https://i.imgur.com/7pjdFH7.png",alt:"drawing",width:"60%"}),Object(a.b)("img",{src:"https://i.imgur.com/FnrPohB.png",alt:"drawing",width:"60%"}),Object(a.b)("h3",{id:"3-events"},"3. Events"),Object(a.b)("p",null,"Following are the events which are currently accommodated in the Integration:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Event"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"hubspot-contact-created"),Object(a.b)("td",{parentName:"tr",align:null},"You will receive this event to the bot when a new lead(contact) got created in yourhubspot CRM. Based on that event you can confirm the user or you can design your custom flow according to your use case.")))),Object(a.b)("img",{src:"https://i.imgur.com/r6s3N14.png",alt:"drawing",width:"60%"}),Object(a.b)("img",{src:"https://i.imgur.com/vPqTZBC.png",alt:"drawing",width:"60%"}),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Configuring the integration with hubspot CRM is straightforward. Follow the steps defined below\nto start integrating:"),Object(a.b)("h3",{id:"1-navigate-to-integration-tab"},"1. Navigate to integration tab"),Object(a.b)("p",null,"Inside your project, navigate to the Configuration tab and then click on the Integrations\nTab. Search for Hubspot CRM."),Object(a.b)("img",{src:"https://i.imgur.com/445XrpL.png",alt:"drawing",width:"50%"}),Object(a.b)("h3",{id:"2-connect-your-hubspot-account"},"2. Connect your hubspot account"),Object(a.b)("p",null,"Click on ",Object(a.b)("strong",{parentName:"p"},"Connect")," to see an option of click to ",Object(a.b)("strong",{parentName:"p"},"Connect with Hubspot"),". After you click that, you will notice that you will be prompted to login to your Hubspot account."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/v8CK0KN.gif",alt:null})),Object(a.b)("h3",{id:"3-add-our-webhook"},"3. Add our webhook"),Object(a.b)("p",null,"   You would need to add our webhook in your hubspot CRM account to receive events which were defined in this integration. The instructions that you have to follow to add our webhook will be available in the hubspot integration card."),Object(a.b)("img",{src:"https://i.imgur.com/hzAick6.png",alt:"drawing",width:"55%"}),Object(a.b)("p",null,"Following the above steps will connect your Hubspot CRM account with yellow.ai platform."),Object(a.b)("h2",{id:"supported-version"},"Supported Version"),Object(a.b)("p",null,"This integration will work on versions v3 and above."),Object(a.b)("p",null,"For more information about action nodes you use here, refer this",Object(a.b)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/api/crm/contacts"},"doc",Object(a.b)("br",{parentName:"a"})),"For more information about webhook events you receive, refer this",Object(a.b)("a",{parentName:"p",href:"https://developers.hubspot.com/docs/api/webhooks"},"doc")))}p.isMDXComponent=!0},426:function(t,e,o){"use strict";o.d(e,"a",(function(){return p})),o.d(e,"b",(function(){return d}));var n=o(0),r=o.n(n);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function c(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var u=r.a.createContext({}),l=function(t){var e=r.a.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):c(c({},e),t)),o},p=function(t){var e=l(t.components);return r.a.createElement(u.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},h=r.a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(o),h=n,d=p["".concat(i,".").concat(h)]||p[h]||b[h]||a;return o?r.a.createElement(d,c(c({ref:e},u),{},{components:o})):r.a.createElement(d,c({ref:e},u))}));function d(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,i=new Array(a);i[0]=h;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,i[1]=c;for(var u=2;u<a;u++)i[u]=o[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);