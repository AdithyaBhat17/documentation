"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[39629],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),l=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=l(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=l(n),m=i,d=u["".concat(p,".").concat(m)]||u[m]||h[m]||o;return n?a.createElement(d,r(r({ref:e},c),{},{components:n})):a.createElement(d,r({ref:e},c))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[u]="string"==typeof t?t:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16145:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"Fetch Chat widget history",sidebar_label:"Fetch Chat widget history"},p=void 0,l={unversionedId:"platform_concepts/channelConfiguration/chat-history",id:"platform_concepts/channelConfiguration/chat-history",title:"Fetch Chat widget history",description:"Chat history is a series of conversations that have happened between a user and a bot. The chat history includes details such as user\u2019s input, bot responses, and the date and time of the conversation.",source:"@site/docs/platform_concepts/channelConfiguration/chat-history.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/chat-history",permalink:"/docs/platform_concepts/channelConfiguration/chat-history",draft:!1,tags:[],version:"current",frontMatter:{title:"Fetch Chat widget history",sidebar_label:"Fetch Chat widget history"},sidebar:"platform_concepts",previous:{title:"Chat widget payload",permalink:"/docs/platform_concepts/channelConfiguration/chat-widget-payload"},next:{title:"Chat widget functions",permalink:"/docs/platform_concepts/channelConfiguration/function-widgets"}},c={},u=[{value:"1. Pass ymAuthentication for a chat widget",id:"1-pass-ymauthentication-for-a-chat-widget",level:2},{value:"1.1 Pass ymAuthentication token via script",id:"11-pass-ymauthentication-token-via-script",level:3},{value:"1.2 Pass ymAuthentication token via init function",id:"12-pass-ymauthentication-token-via-init-function",level:3},{value:"1.3 Pass ymAuthentication token for PWA bot",id:"13-pass-ymauthentication-token-for-pwa-bot",level:3}],h={toc:u};function m(t){var e=t.components,n=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Chat history is a series of conversations that have happened between a user and a bot. The chat history includes details such as user\u2019s input, bot responses, and the date and time of the conversation."),(0,o.kt)("p",null,"Chat history retrieves past conversations that tailor future interactions. It helps the bot to analyse the user\u2019s inputs and provide accurate automated responses to the user\u2019s queries. Thereby, it improves the overall efficiency and reliability of the bot."),(0,o.kt)("p",null,"Let's say that you want to fetch a user's chat history from a bot. To do so, you need to pass a unique identifier, the ymAuthentication token, via a bot script or\xa0init function."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Ensure that the ymAuthentication token is secured and only authorized users can access it.")),(0,o.kt)("p",null,"In this article, you will learn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#1-pass-ymauthentication-for-a-chat-widget"},"How to pass ymAuthentication token for a chat widget?"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prerequisites to pass ymAuthentication token:")),(0,o.kt)("p",null,"Before you passing the ymAuthentication token via the script or init function, you need to enable ",(0,o.kt)("strong",{parentName:"p"},"Show history of the conversation")," in the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," page."),(0,o.kt)("p",null,'To enable "Show history of the conversation", follow these steps:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the module switcher, click ",(0,o.kt)("strong",{parentName:"p"},"Channels"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/UuFZ2eR.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Chat widget"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/1KzP77W.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Widget panel")," is displayed."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/lO86cQ0.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," tab and enable ",(0,o.kt)("strong",{parentName:"p"},"Show history of the conversation"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/yti0HdF.png",alt:null})))),(0,o.kt)("h2",{id:"1-pass-ymauthentication-for-a-chat-widget"},"1. Pass ymAuthentication for a chat widget"),(0,o.kt)("p",null,"Chat history is fetched with the help of a unique token generated for each user who logs into your platform. Once this token is generated, you can verify if a user has been authenticated."),(0,o.kt)("h3",{id:"11-pass-ymauthentication-token-via-script"},"1.1 Pass ymAuthentication token via script"),(0,o.kt)("p",null,"To pass ymAuthentication token via script, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log in to ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai"},"Yellow.ai Platform"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the module switcher, click ",(0,o.kt)("strong",{parentName:"p"},"Channels"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/UuFZ2eR.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Chat widget"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/1KzP77W.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Widget panel")," is displayed."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/lO86cQ0.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Deploy")," tab and ",(0,o.kt)("strong",{parentName:"p"},"COPY CODE TO Install bot"),". A bot script is copied."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/2Mstpsg.png",alt:null})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample bot script:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'<script type="text/javascript">\nwindow.ymConfig = {"bot":"x1657623696077",\n"host":"https://cloud.yellow.ai"};\n(function() {\n    var w = window,\n        ic = w.YellowMessenger;\n    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);\n    else {\n        var d = document,\n            i = function() {\n                i.c(arguments)\n            };\n\n        function l() {\n            var e = d.createElement("script");\n            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";\n            var t = d.getElementsByTagName("script")[0];\n            t.parentNode.insertBefore(e, t)\n        }\n        i.q = [], i.c = function(e) {\n            i.q.push(e)\n        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)\n    }\n})(); \n<\/script>\n')),(0,o.kt)("p",null,"To fetch the user's chat history from a bot, add the ",(0,o.kt)("strong",{parentName:"p"},"ymAuthentication")," token in the following bot script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'<script type="text/javascript">\nwindow.ymConfig = {"bot":"x1657623696077","host":"https://cloud.yellow.ai", "ymAuthenticationToken": "1234"};  // Add ymAuthenticationToken here\n(function() {\n    var w = window,\n        ic = w.YellowMessenger;\n    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);\n    else {\n        var d = document,\n            i = function() {\n                i.c(arguments)\n            };\n\n        function l() {\n            var e = d.createElement("script");\n            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";\n            var t = d.getElementsByTagName("script")[0];\n            t.parentNode.insertBefore(e, t)\n        }\n        i.q = [], i.c = function(e) {\n            i.q.push(e)\n        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)\n    }\n})(); \n<\/script>\n')),(0,o.kt)("h3",{id:"12-pass-ymauthentication-token-via-init-function"},"1.2 Pass ymAuthentication token via init function"),(0,o.kt)("p",null,"To fetch the chat history, pass the ymAuthentication token in the below init function: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    window.YellowMessengerPlugin.init({\n        ymAuthenticationToken: 'Your_Unique_token'\n    });\n\n")),(0,o.kt)("h3",{id:"13-pass-ymauthentication-token-for-pwa-bot"},"1.3 Pass ymAuthentication token for PWA bot"),(0,o.kt)("p",null,"You can fetch the user's chat history from a PWA bot by passing the ymAuthentication token."),(0,o.kt)("p",null,"To pass the ymAuthentication token for a PWA bot, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use this ",(0,o.kt)("inlineCode",{parentName:"p"},"https://cloud.yellow.ai/pwa/v2/live/x1657623696077")," URL.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the address bar, append ",(0,o.kt)("inlineCode",{parentName:"p"},"?ymAuthenticationToken=12345"),".\nFor example, ",(0,o.kt)("inlineCode",{parentName:"p"},"https://cloud.yellow.ai/pwa/v2/live/x1657623696077?ymAuthenticationToken=12345")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/74H5PE5.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Refresh the page to view the chat history."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/dvkn3bQ.png",alt:null})))))}m.isMDXComponent=!0}}]);