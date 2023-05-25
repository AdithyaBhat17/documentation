"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[75884],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return h}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,h=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return o?n.createElement(h,i(i({ref:t},s),{},{components:o})):n.createElement(h,i({ref:t},s))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},35210:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],p={title:"Deploy WhatsApp bot on website and Mobile application",sidebar_label:"Deploy WhatsApp bot"},l=void 0,c={unversionedId:"platform_concepts/channelConfiguration/depoly-WA-bot",id:"platform_concepts/channelConfiguration/depoly-WA-bot",title:"Deploy WhatsApp bot on website and Mobile application",description:"Let's say that you have built a bot for the WhatsApp channel and now want to deploy it on your website or mobile application using a chat widget. This document will provide you with step-by-step instructions on how to port your WhatsApp bot to your website or mobile application using a chat widget.",source:"@site/docs/platform_concepts/channelConfiguration/depoly-WA-bot.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/depoly-WA-bot",permalink:"/docs/platform_concepts/channelConfiguration/depoly-WA-bot",draft:!1,tags:[],version:"current",frontMatter:{title:"Deploy WhatsApp bot on website and Mobile application",sidebar_label:"Deploy WhatsApp bot"},sidebar:"platform_concepts",previous:{title:"Progressive web app",permalink:"/docs/platform_concepts/channelConfiguration/pwa"},next:{title:"V2 migration guide",permalink:"/docs/platform_concepts/channelConfiguration/support-banner-migration"}},s={},u=[],f={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's say that you have built a bot for the WhatsApp channel and now want to deploy it on your website or mobile application using a chat widget. This document will provide you with step-by-step instructions on how to port your WhatsApp bot to your website or mobile application using a chat widget."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You can use the V2 widget using the bot script from the cloud.yellow.ai\xa0platform even if the bot code is in the app platform."),(0,a.kt)("li",{parentName:"ul"},"You can use Mobile SDKs for deploying WhatsApp bot on ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios"},"iOS")," and ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android"},"Android")," apps."))),(0,a.kt)("p",null,"To deploy an existing WhatsApp bot on a website or mobile application, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"To create a separate flow using the WhatsApp specific components such as WhatsApp quick reply and list card."),(0,a.kt)("li",{parentName:"ol"},"Use the provided code snippet in the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/code"},"function")," while creating the flows based on your use case:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'if (app.source == "whatsapp") {\n\n// actions or message list which you want to display\n}\nif(app.source == "yellowmessenger"){\n// actions or the quick replies which you want to display.\n}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the overview page, select your bot and enter your respective bot ID in the browser URL.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to ",(0,a.kt)("strong",{parentName:"p"},"Channels")," > ",(0,a.kt)("strong",{parentName:"p"},"Chat widget")," > ",(0,a.kt)("strong",{parentName:"p"},"Deploy")," > Copy the bot script provided.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the bot script on your website where you want the bot to appear. For more information, click ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget#24-deploy-chat-widget"},"here"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You can also configure the appearance of your bot on the cloud platform. For more information, click ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget"},"here"),".")))))}d.isMDXComponent=!0}}]);