"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[8351],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var o=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,l=function(t,e){if(null==t)return{};var n,o,l={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=u(n),h=l,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(f,i(i({ref:e},c),{},{components:n})):o.createElement(f,i({ref:e},c))}));function f(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=h;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a[d]="string"==typeof t?t:l,i[1]=a;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},29635:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});var o=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],a={title:"Chat widget FAQs",sidebar_label:"Chat widget FAQs"},s=void 0,u={unversionedId:"platform_concepts/channelConfiguration/chat-widget-faq",id:"platform_concepts/channelConfiguration/chat-widget-faq",title:"Chat widget FAQs",description:"How to improve the website's performance after installing the bot?",source:"@site/docs/platform_concepts/channelConfiguration/chat-widget-faq.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/chat-widget-faq",permalink:"/docs/platform_concepts/channelConfiguration/chat-widget-faq",draft:!1,tags:[],version:"current",frontMatter:{title:"Chat widget FAQs",sidebar_label:"Chat widget FAQs"},sidebar:"platform_concepts",previous:{title:"Character limit",permalink:"/docs/platform_concepts/channelConfiguration/character-limits-sdk"},next:{title:"FB Lead Ads",permalink:"/docs/platform_concepts/channelConfiguration/fb-lead-ads"}},c={},d=[],p={toc:d};function h(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How to improve the website's performance after installing the bot?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"Ensure that the chatbot script is pasted in the <body> of the website rather than the <head>. This will ensure the bot loads only when the website is fully loaded without affecting its performance."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Why is the bot not displaying or loading any of the configured messages?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null," Make sure you have configured Welcome message in the ",(0,r.kt)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview"},"Studio")," . Login to cloud.yellow.ai platform. Navigate to  ",(0,r.kt)("b",null,"Studio -> Welcome Message -> Add welcome message"),". To know more, click ",(0,r.kt)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview#3-conversation-settings"},"here"),". "))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is it possible to deploy two bots on a single website?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null," No, you cannot deploy 2 bots on a single website. "))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How to set the position of the bot dynamically?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"The bot's position is set to right by default. On the ",(0,r.kt)("b",null,"Chat widget settings")," page, you can change it to left. To dynamically set the position of the bot on a website, set the position to ",(0,r.kt)("b",null,"right")," on the ",(0,r.kt)("b",null,"Settings")," page and pass `alignLeft:true` inside ",(0,r.kt)("b",null,"ymConfig")," of the chatbot script on the respective webpage."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Does the Chat widget or PWA contain a pop-up component?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,'No, the pop-up component appears only when an error message such as "device not connected to network" or "file upload limit exceeded" is displayed.'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is drop-down option supported in the Chat widget?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"Currently, drop-down is not supported for the Chat widget bot."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Chatbot is auto-scrolling upwards after navigating to a different tab by clicking the URL from the chatbot. How to resolve this issue"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,'You need to enable the "Scroll the chat window to the bottom" option in the Chat widget\'s ',(0,r.kt)("b",null,"Settings")," tab. Navigate to the ",(0,r.kt)("b",null,"Channels > Chat widget > Settings")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How to trigger the closeBot() function when a specific flow ends or when you reach a specific node?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"You must initiate an event at the end of the specific flow and will receive a callback in onEventFromBot(_ response: YMBotEventResponse) function of YMChatDelegate, where you can add the closeBot."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is it possible to change the bot title and description when the bot switches from parent bot to child bot?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"In orchestrator setup, you cannot interact with the child bot directly, and the UI loaded will be that of the parent bot. Therefore, there cannot be a separate Title, Description, or Icon for the child bot."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What to do if buttons are not loading on the parent website?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"This happens when a website blocks CDNs (Content Delivery Network). You need to whitelist these by updating content security policy:",(0,r.kt)("br",null)," * cdn.jsdelivr.net (to load the font) ",(0,r.kt)("br",null)," * https://cdn.yellowmessenger.com (to load buttons)"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is speech-to-text (STT) feature supported in the chat widget?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"Yes, STT feature is supported for the chat widget."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How to enable chat history conversation?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"To enable chat history, follow these steps:",(0,r.kt)("br",null),"1. Ensure ",(0,r.kt)("b",null,"Show history of the conersation")," is enabled for ",(0,r.kt)("a",{href:"https://cloud.yellow.ai"},"cloud.yellow.ai"),". ",(0,r.kt)("br",null)," ",(0,r.kt)("img",{src:"https://i.imgur.com/PoHJ0Yh.png"})," ",(0,r.kt)("br",null)," 2. Ensure the ",(0,r.kt)("b",null,"Reset Context for every load"),' checkbox is unchecked in the dashboard settings for "app.yellowmessenger.com" or "app.yellow.ai". ',(0,r.kt)("br",null)," ",(0,r.kt)("img",{src:"https://i.imgur.com/VVSmy15.png"}),(0,r.kt)("br",null)," 3. Ensure that you need to pass ymAuthenticationToken in the config before presenting the bot.",(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," if (app.data.event && app.data.event.code === 'authenticate') {\n return app.sendEvent({\n    code: \"verifiedUser\",\n    data: app.data.event.payload\n });\n }     \n"))))))}h.isMDXComponent=!0}}]);