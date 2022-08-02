(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),o=n(7),a=(n(0),n(393)),r=["components"],c={title:"PayU Business",sidebar_label:"PayU Business"},p={unversionedId:"platform_concepts/appConfiguration/payuBiz",id:"platform_concepts/appConfiguration/payuBiz",isDocsHomePage:!1,title:"PayU Business",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/payuBiz.md",slug:"/platform_concepts/appConfiguration/payuBiz",permalink:"/docs/platform_concepts/appConfiguration/payuBiz",version:"current",sidebar_label:"PayU Business",sidebar:"platform_concepts",previous:{title:"Microsoft Graph",permalink:"/docs/platform_concepts/appConfiguration/microsoft-graph"},next:{title:"Power BI",permalink:"/docs/platform_concepts/appConfiguration/power-bi"}},l=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Use-cases",id:"use-cases",children:[{value:"1. Simple integration",id:"1-simple-integration",children:[]},{value:"2. Do actions with stripe action nodes",id:"2-do-actions-with-stripe-action-nodes",children:[]},{value:"1. Create an application",id:"1-create-an-application",children:[]},{value:"2. Configure webhook url",id:"2-configure-webhook-url",children:[]},{value:"3. Receiving event in yellow.ai Bot.",id:"3-receiving-event-in-yellowai-bot",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,r);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(a.b)("p",null,"Yellow.ai Integration with PayU Biz Payment Gateway allows you to generate payment links and view payment status with the yellow.ai platform. "),Object(a.b)("h2",{id:"use-cases"},"Use-cases"),Object(a.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(a.b)("h3",{id:"1-simple-integration"},"1. Simple integration"),Object(a.b)("p",null,"Yellow.ai uses the PayU Biz  api key or credentials for connecting PayU payment gateway.While integrating,the user has to provide some client credentials. "),Object(a.b)("h3",{id:"2-do-actions-with-stripe-action-nodes"},"2. Do actions with stripe action nodes"),Object(a.b)("p",null,"Using the action nodes, you can generate payment links according to your use cases."),Object(a.b)("img",{src:"https://i.imgur.com/YXyJfTv.png",alt:"drawing",width:"60%"}),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/3No6pkK.png",alt:"alt_text",title:"image_tooltip"})),Object(a.b)("h1",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Configuring the integration with PayU Biz payment gateway is straightforward. Follow the steps defined below to start integrating:"),Object(a.b)("h3",{id:"1-create-an-application"},"1. Create an application"),Object(a.b)("p",null,"  Before going to connect the integration you have to create an account in PayU-Biz dashboard,Login to the merchant Panel -> My Account -> Click on System Settings -> Take Salt from here for integration and Login Alias for client Id"),Object(a.b)("img",{src:"https://i.imgur.com/IkkZjsI.png",alt:"drawing",width:"60%"}),Object(a.b)("h3",{id:"2-configure-webhook-url"},"2. Configure webhook url"),Object(a.b)("p",null," Copy the webhook url from PayU integration card and Mail the link to payu Team. PayU will whitelist the webhook URL provided by the merchant in its systems. For more information, contact the PayU Integration Team by email: ",Object(a.b)("a",{parentName:"p",href:"mailto:integration@payu.in"},"integration@payu.in"),". ",Object(a.b)("a",{parentName:"p",href:"https://devguide.payu.in/merchant-integration/webhooks/"},"webhook docs"),". "),Object(a.b)("h3",{id:"3-receiving-event-in-yellowai-bot"},"3. Receiving event in yellow.ai Bot."),Object(a.b)("p",null,"  Go to yellow.ai dashboard->studio->Event hub->Custom->Activate PayU Biz Payment Status."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/pTpao57.png",alt:"alt_text",title:"image_tooltip"})),Object(a.b)("h1",{id:"reference"},"Reference"),Object(a.b)("p",null,"For more information about action nodes you use here, refer this ",Object(a.b)("a",{parentName:"p",href:"https://devguide.payu.in/api/integration-apis/invoice/create_invoice/"},"Create Invoice"),", ",Object(a.b)("a",{parentName:"p",href:"https://devguide.payu.in/merchant-integration/webhooks/"},"webhooks"),"."))}u.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(r,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);