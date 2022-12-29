"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[8351],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(n),d=a,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||r;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[h]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29635:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return h}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],p={title:"Chat widget FAQs",sidebar_label:"Chat widget FAQs"},l=void 0,s={unversionedId:"platform_concepts/channelConfiguration/chat-widget-faq",id:"platform_concepts/channelConfiguration/chat-widget-faq",title:"Chat widget FAQs",description:"1. How to improve the website's performance after installing the bot?",source:"@site/docs/platform_concepts/channelConfiguration/chat-widget-faq.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/chat-widget-faq",permalink:"/docs/platform_concepts/channelConfiguration/chat-widget-faq",draft:!1,tags:[],version:"current",frontMatter:{title:"Chat widget FAQs",sidebar_label:"Chat widget FAQs"},sidebar:"platform_concepts",previous:{title:"Chrome Extension",permalink:"/docs/platform_concepts/channelConfiguration/chrome-extension"},next:{title:"FB Lead Ads",permalink:"/docs/platform_concepts/channelConfiguration/fb-lead-ads"}},c={},h=[],m={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How to improve the website's performance after installing the bot?")),(0,r.kt)("p",{parentName:"li"},"Ensure that the chatbot script is pasted in the ","<","body",">"," of the website rather than the ","<","head",">",". This will ensure the bot loads only when the website is fully loaded without affecting its performance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Why is the bot not displaying or loading any of the configured messages??")),(0,r.kt)("p",{parentName:"li"},"Make sure you have configured Welcome message in the ",(0,r.kt)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview"},"Studio")," . Login to cloud.yellow.ai platform. Navigate to  ",(0,r.kt)("b",null,"Studio -> Welcome Message -> Add welcome message"),". To know more, click ",(0,r.kt)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview#3-conversation-settings"},"here")," .")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How to enable chat history conversation?")),(0,r.kt)("p",{parentName:"li"},"To enable chat history, follow these steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that you need to pass ymAuthenticationToken in the config before presenting the bot."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"if (app.data.event && app.data.event.code === 'authenticate') {\nreturn app.sendEvent({\n   code: \"verifiedUser\",\n   data: app.data.event.payload\n});\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure the ",(0,r.kt)("strong",{parentName:"p"},"Reset Context for every load"),' checkbox is unchecked in the dashboard settings for "app.yellowmessenger.com" or "app.yellow.ai".'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/VVSmy15.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure ",(0,r.kt)("strong",{parentName:"p"},"Show history of the conersation")," is enabled for ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai"},"cloud.yellow.ai"),"."),(0,r.kt)("img",{src:"https://i.imgur.com/PoHJ0Yh.png)",alt:"drawing",width:"90%"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Is it possible to deploy two bots on a single website?"),"    "),(0,r.kt)("p",{parentName:"li"}," No, you cannot deploy 2 bots on a single website.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How to set the position of the bot dynamically?")),(0,r.kt)("p",{parentName:"li"},"  The bot's position is set to right by default. On the ",(0,r.kt)("strong",{parentName:"p"},"Chat widget settings")," page, you can change it to left.\nTo dynamically set the position of the bot on a website, set the position to ",(0,r.kt)("strong",{parentName:"p"},"right")," on the ",(0,r.kt)("strong",{parentName:"p"},"Settings")," page and pass ",(0,r.kt)("inlineCode",{parentName:"p"},"alignLeft:true")," inside ",(0,r.kt)("strong",{parentName:"p"},"ymConfig")," of the chatbot script on the respective webpage.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Does the Chat widget or PWA contain a pop-up component?"),"  "),(0,r.kt)("p",{parentName:"li"},' No, the pop-up component appears only when an error message such as "device not connected to network" or "file upload limit exceeded" is displayed.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Is the drop-down option supported in the Chat widget?")),(0,r.kt)("p",{parentName:"li"}," Currently, drop-down is not supported for the Chat widget bot.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Chatbot is auto-scrolling upwards after navigating to a different tab by clicking the URL from the chatbot. How to resolve this issue"),"?"),(0,r.kt)("p",{parentName:"li"},' You need to enable the "Scroll the chat window to the bottom" option in the Chat widget\'s ',(0,r.kt)("strong",{parentName:"p"},"Settings")," tab. Navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Channels > Chat widget > Settings"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How to trigger the closeBot() function when a specific flow ends or when you reach a specific node?"),"  "),(0,r.kt)("p",{parentName:"li"}," You must initiate an event at the end of the specific flow and will receive a callback in onEventFromBot(_ response: YMBotEventResponse) function of YMChatDelegate, where you can add the closeBot. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Is it possible to change the bot title and description when the bot switches from parent bot to child bot?")),(0,r.kt)("p",{parentName:"li"}," In orchestrator setup, you cannot interact with the child bot directly, and the UI loaded will be that of the parent bot. Therefore, there cannot be a separate Title, Description, or Icon for the child bot.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"What to do if buttons are not loading on the parent website?"),"    "),(0,r.kt)("p",{parentName:"li"}," This happens when a website blocks CDNs (Content Delivery Network). You need to whitelist these by updating content security policy:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cdn.jsdelivr.net (to load the font)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cdn.yellowmessenger.com"},"https://cdn.yellowmessenger.com")," (to load buttons)")))))}d.isMDXComponent=!0}}]);