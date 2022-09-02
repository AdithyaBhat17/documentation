(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(404)),i=["components"],c={title:"Camspay Payment",sidebar_label:"Camspay Payment"},l={unversionedId:"platform_concepts/appConfiguration/camspay",id:"platform_concepts/appConfiguration/camspay",isDocsHomePage:!1,title:"Camspay Payment",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/camspay.md",slug:"/platform_concepts/appConfiguration/camspay",permalink:"/docs/platform_concepts/appConfiguration/camspay",version:"current",sidebar_label:"Camspay Payment",sidebar:"platform_concepts",previous:{title:"Azure AD",permalink:"/docs/platform_concepts/appConfiguration/azure-ad"},next:{title:"Integrate Yellow with CleverTap",permalink:"/docs/platform_concepts/appConfiguration/clevertap"}},p=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Use-cases",id:"use-cases",children:[{value:"1. Simple integration",id:"1-simple-integration",children:[]},{value:"2. Do actions with stripe action nodes",id:"2-do-actions-with-stripe-action-nodes",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"1. Create an application",id:"1-create-an-application",children:[]},{value:"2. Configure webhook url",id:"2-configure-webhook-url",children:[]},{value:"3. Receiving event in yellow.ai Bot.",id:"3-receiving-event-in-yellowai-bot",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(o.b)("p",null,"Yellow.ai Integration with Camspay Payment Gateway allows you to generate payment links and view payment status with the yellow.ai platform."),Object(o.b)("h2",{id:"use-cases"},"Use-cases"),Object(o.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Simple integration")),Object(o.b)("p",null,"Yellow.ai uses the Camspay  api key or credentials for connecting camspay payment gateway. While integrating,the user has to provide some client credentials."),Object(o.b)("h3",{id:"1-simple-integration"},"1. Simple integration"),Object(o.b)("p",null,"Yellow.ai uses the Camspay  api key or credentials for connecting camspay payment gateway.While integrating,the user has to provide some client credentials. "),Object(o.b)("h3",{id:"2-do-actions-with-stripe-action-nodes"},"2. Do actions with stripe action nodes"),Object(o.b)("p",null,"Using the action nodes, you can generate payment links according to your use cases."),Object(o.b)("img",{src:"https://i.imgur.com/wZHyTdt.png",alt:"drawing",width:"60%"}),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/yhnsDTc.png",alt:null})),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Configuring the integration with Camspay payment gateway is straightforward. Follow the steps defined below to start integrating:"),Object(o.b)("h3",{id:"1-create-an-application"},"1. Create an application"),Object(o.b)("p",null,"Before going to oauth you have to create an account in Camspay dashboard, Get the merchant id, Subbiller id, API key, Encryption Decryption key from the camspay team."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/NHksd6m.png",alt:null})),Object(o.b)("h3",{id:"2-configure-webhook-url"},"2. Configure webhook url"),Object(o.b)("p",null,"Copy the webhook url from the camspay integration card and paste in the redirectUrl field variable in the action node."),Object(o.b)("h3",{id:"3-receiving-event-in-yellowai-bot"},"3. Receiving event in yellow.ai Bot."),Object(o.b)("p",null,"Go to yellow.ai dashboard->studio->Event hub->Custom->Activate camspay-payment-gateway."))}u.isMDXComponent=!0},404:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.a.createElement(b,c(c({ref:t},p),{},{components:n})):r.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);