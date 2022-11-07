(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(450)),c=["components"],i={title:"Freshchat",sidebar_label:"Freshchat"},l={unversionedId:"platform_concepts/appConfiguration/freshchat",id:"platform_concepts/appConfiguration/freshchat",isDocsHomePage:!1,title:"Freshchat",description:"Yellow.ai Integration with Freshchat allows you to seamlessly connect your Freshchat service with the yellow.ai platform.",source:"@site/docs/platform_concepts/appConfiguration/freshchat.md",slug:"/platform_concepts/appConfiguration/freshchat",permalink:"/docs/platform_concepts/appConfiguration/freshchat",version:"current",sidebar_label:"Freshchat",sidebar:"platform_concepts",previous:{title:"Custom Live Agent API Specification",permalink:"/docs/platform_concepts/appConfiguration/customliveagent"},next:{title:"Freshservice ITSM",permalink:"/docs/platform_concepts/appConfiguration/freshservice"}},s=[{value:"1. Use Case",id:"1-use-case",children:[]},{value:"2. Configuration",id:"2-configuration",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Yellow.ai Integration with Freshchat allows you to seamlessly connect your Freshchat service with the yellow.ai platform."),Object(o.b)("p",null,"In this article, you will learn how to integrate yellow with Freshchat."),Object(o.b)("h2",{id:"1-use-case"},"1. Use Case"),Object(o.b)("p",null,"In this integration, you can use the ",Object(o.b)("strong",{parentName:"p"},"raise ticket node")," to start a conversation with Freshchat Agent. Firstly you'll have to select Freshchat from the dropdown and add the necessary parameters. Then you can trigger the journey where tickets will be assigned to Freshchat agents."),Object(o.b)("h2",{id:"2-configuration"},"2. Configuration"),Object(o.b)("p",null,"Follow the steps below to integrate with Freshchat: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to ",Object(o.b)("strong",{parentName:"li"},"Integrations")," and search for Freshchat under ",Object(o.b)("strong",{parentName:"li"},"All integrations"),".")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/fDLSt6FZ4GJV1667370185339.png",alt:null})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Navigate to ",Object(o.b)("strong",{parentName:"li"},"Admin Settings")," > ",Object(o.b)("strong",{parentName:"li"},"Account Settings")," > ",Object(o.b)("strong",{parentName:"li"},"Integration Settings")," for App ID of your Freshchat application. "),Object(o.b)("li",{parentName:"ol"},"Navigate to ",Object(o.b)("strong",{parentName:"li"},"Admin Settings")," > ",Object(o.b)("strong",{parentName:"li"},"API Tokens"),". Click ",Object(o.b)("strong",{parentName:"li"},"Generate Token"),", and you will get your API token."),Object(o.b)("li",{parentName:"ol"},"For Channel ID, you will have to make an API call to the channel's route. Add the Authorization header as 'Bearer YOUR_API_TOKEN', you'll receive the channel ID in the response.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/kEJN6xkq5n0X1667370247026.png",alt:null})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Copy Webhook URL from the Integrations page.  Navigate to ",Object(o.b)("strong",{parentName:"li"},"Admin Settings")," > ",Object(o.b)("strong",{parentName:"li"},"Webhooks"),". Paste the copied URL in the prompt.")),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Connect"),".")))}u.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,f=u["".concat(c,".").concat(h)]||u[h]||b[h]||o;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);