(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(446)),o=["components"],c={title:"Camspay Payment",sidebar_label:"Camspay Payment"},l={unversionedId:"platform_concepts/appConfiguration/camspay",id:"platform_concepts/appConfiguration/camspay",isDocsHomePage:!1,title:"Camspay Payment",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/camspay.md",slug:"/platform_concepts/appConfiguration/camspay",permalink:"/docs/platform_concepts/appConfiguration/camspay",version:"current",sidebar_label:"Camspay Payment",sidebar:"platform_concepts",previous:{title:"Billdesk",permalink:"/docs/platform_concepts/appConfiguration/billdesk"},next:{title:"Cashfree Payment Gateway",permalink:"/docs/platform_concepts/appConfiguration/cashfree"}},p=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Use-cases",id:"use-cases",children:[{value:"1. Simple integration",id:"1-simple-integration",children:[]},{value:"2. Do actions with stripe action nodes",id:"2-do-actions-with-stripe-action-nodes",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"1. Create an application",id:"1-create-an-application",children:[]},{value:"2. Configure webhook url",id:"2-configure-webhook-url",children:[]},{value:"3. Receiving event in yellow.ai Bot.",id:"3-receiving-event-in-yellowai-bot",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(i.b)("p",null,"Yellow.ai Integration with Camspay Payment Gateway allows you to generate payment links and view payment status with the yellow.ai platform."),Object(i.b)("h2",{id:"use-cases"},"Use-cases"),Object(i.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Simple integration")),Object(i.b)("p",null,"Yellow.ai uses the Camspay  api key or credentials for connecting camspay payment gateway. While integrating,the user has to provide some client credentials."),Object(i.b)("h3",{id:"1-simple-integration"},"1. Simple integration"),Object(i.b)("p",null,"Yellow.ai uses the Camspay  api key or credentials for connecting camspay payment gateway.While integrating,the user has to provide some client credentials. "),Object(i.b)("h3",{id:"2-do-actions-with-stripe-action-nodes"},"2. Do actions with stripe action nodes"),Object(i.b)("p",null,"Using the action nodes, you can generate payment links according to your use cases."),Object(i.b)("img",{src:"https://i.imgur.com/wZHyTdt.png",alt:"drawing",width:"60%"}),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/yhnsDTc.png",alt:null})),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Configuring the integration with Camspay payment gateway is straightforward. Follow the steps defined below to start integrating:"),Object(i.b)("h3",{id:"1-create-an-application"},"1. Create an application"),Object(i.b)("p",null,"Before going to oauth you have to create an account in Camspay dashboard, Get the merchant id, Subbiller id, API key, Encryption Decryption key from the camspay team."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/NHksd6m.png",alt:null})),Object(i.b)("h3",{id:"2-configure-webhook-url"},"2. Configure webhook url"),Object(i.b)("p",null,"Copy the webhook url from the camspay integration card and paste in the redirectUrl field variable in the action node."),Object(i.b)("h3",{id:"3-receiving-event-in-yellowai-bot"},"3. Receiving event in yellow.ai Bot."),Object(i.b)("p",null,"Following are the events which are currently accommodated in the Integration:"),Object(i.b)("p",null,"Go to yellow.ai dashboard->studio->Event hub->Custom->Activate camspay-payment-gateway."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Event"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Camspay Payment Status"),Object(i.b)("td",{parentName:"tr",align:null},"In case of payments/refunds the status can be checked with these details.")))))}u.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);