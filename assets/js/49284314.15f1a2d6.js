"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[9449],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96867:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"Stripe Payment",sidebar_label:"Stripe Payment"},p="Scope of Integration",s={unversionedId:"platform_concepts/appConfiguration/stripe",id:"platform_concepts/appConfiguration/stripe",title:"Stripe Payment",description:"Yellow.ai Integration with Stripe Payment Gateway  allows you to generate payment links and view payment status with yellow.ai platform.",source:"@site/docs/platform_concepts/appConfiguration/stripe.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/stripe",permalink:"/docs/platform_concepts/appConfiguration/stripe",draft:!1,tags:[],version:"current",frontMatter:{title:"Stripe Payment",sidebar_label:"Stripe Payment"},sidebar:"platform_concepts",previous:{title:"Shopify",permalink:"/docs/platform_concepts/appConfiguration/shopify"},next:{title:"Talisma Livechat",permalink:"/docs/platform_concepts/appConfiguration/talisma"}},c={},u=[{value:"1. Simple integration",id:"1-simple-integration",level:3},{value:"2. Do actions with stripe action nodes",id:"2-do-actions-with-stripe-action-nodes",level:3},{value:"1. Create an application",id:"1-create-an-application",level:3},{value:"2. Configure webhook url in stripe dashboard.",id:"2-configure-webhook-url-in-stripe-dashboard",level:3},{value:"3. Receiving event in yellow.ai Bot.",id:"3-receiving-event-in-yellowai-bot",level:3}],m={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scope-of-integration"},"Scope of Integration"),(0,a.kt)("p",null,"Yellow.ai Integration with Stripe Payment Gateway  allows you to generate payment links and view payment status with yellow.ai platform. "),(0,a.kt)("h1",{id:"use-cases"},"Use-cases"),(0,a.kt)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),(0,a.kt)("h3",{id:"1-simple-integration"},"1. Simple integration"),(0,a.kt)("p",null,"Yellow.ai connect with stripe payment gateway using the stripe api-key or credentials.While integrating,the user has to provide some client credentials."),(0,a.kt)("h3",{id:"2-do-actions-with-stripe-action-nodes"},"2. Do actions with stripe action nodes"),(0,a.kt)("p",null,"Using the action nodes you can generate payment links according to your use cases."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/IsFwMEI.png%22image_tooltip%22",alt:"alt_text"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/IsFwMEI.png",alt:"alt_text",title:"image_tooltip"})),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Configuring the integration with stripe payment gateway is straightforward. Follow the steps defined below to start integrating:"),(0,a.kt)("h3",{id:"1-create-an-application"},"1. Create an application"),(0,a.kt)("p",null,"Before going to oauth you have to create an account in stripe,Go to stripe dashboard->Developer-> API Keys-> copy the Secret key. And paste the secret key in the secret field of the stripe integration card. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/spWjBsK.png",alt:"alt_text",title:"image_tooltip"})),(0,a.kt)("h3",{id:"2-configure-webhook-url-in-stripe-dashboard"},"2. Configure webhook url in stripe dashboard."),(0,a.kt)("p",null,"Copy the webhook url from stripe integration card and Go to stripe Dashboard->Developers-> Webhooks->Add endpoint->Fill the webhook url in Endpoint field and select ",(0,a.kt)("strong",{parentName:"p"},"checkout.session.completed")," Event in the select events to listen field. "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/wZkHuwH.png",alt:"alt_text",title:"image_tooltip"})),(0,a.kt)("h3",{id:"3-receiving-event-in-yellowai-bot"},"3. Receiving event in yellow.ai Bot."),(0,a.kt)("p",null,"Following are the events which are currently accommodated in the Integration:"),(0,a.kt)("p",null,"Go to yellow.ai dashboard->studio->Event hub->Custom->Activate stripe-payment-gateway."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stripe Payment Status"),(0,a.kt)("td",{parentName:"tr",align:null},"In case of payments/refunds the status can be checked with these details.")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/X8d0WQR.png",alt:"alt_text",title:"image_tooltip"})),(0,a.kt)("h1",{id:"reference"},"Reference"),(0,a.kt)("p",null,"For more information about action nodes you use here, refer this ",(0,a.kt)("a",{parentName:"p",href:"https://stripe.com/docs/payments/payment-links"},"doc")))}d.isMDXComponent=!0}}]);