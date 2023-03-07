"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[8351],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var o=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,l=function(t,e){if(null==t)return{};var n,o,l={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var r=o.createContext({}),u=function(t){var e=o.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return o.createElement(r.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,r=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),p=l,k=d["".concat(r,".").concat(p)]||d[p]||h[p]||a;return n?o.createElement(k,i(i({ref:e},c),{},{components:n})):o.createElement(k,i({ref:e},c))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s[d]="string"==typeof t?t:l,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29635:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Chat widget FAQs",sidebar_label:"Chat widget FAQs"},r=void 0,u={unversionedId:"platform_concepts/channelConfiguration/chat-widget-faq",id:"platform_concepts/channelConfiguration/chat-widget-faq",title:"Chat widget FAQs",description:"How to improve the website's performance after installing the bot?",source:"@site/docs/platform_concepts/channelConfiguration/chat-widget-faq.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/chat-widget-faq",permalink:"/docs/platform_concepts/channelConfiguration/chat-widget-faq",draft:!1,tags:[],version:"current",frontMatter:{title:"Chat widget FAQs",sidebar_label:"Chat widget FAQs"},sidebar:"platform_concepts",previous:{title:"Limitations and best practices",permalink:"/docs/platform_concepts/channelConfiguration/character-limits-sdk"},next:{title:"FB Lead Ads",permalink:"/docs/platform_concepts/channelConfiguration/fb-lead-ads"}},c={},d=[],h={toc:d};function p(t){var e=t.components,n=(0,l.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How to improve the website's performance after installing the bot?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"Ensure that the chatbot script is pasted in the <body> of the website rather than the <head>. This will ensure the bot loads only when the website is fully loaded without affecting its performance."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Why is the bot not displaying or loading any of the configured messages?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null," Make sure you have configured Welcome message in the ",(0,a.kt)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview"},"Studio"),". Login to cloud.yellow.ai platform. Navigate to  ",(0,a.kt)("b",null,"Studio -> Welcome Message -> Add welcome message"),". To know more, click ",(0,a.kt)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview#3-conversation-settings"},"here"),". "))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to deploy two bots on a single website?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null," No, you cannot deploy 2 bots on a single website. "))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How to set the position of the bot dynamically?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"The bot's position is set to right by default. On the ",(0,a.kt)("b",null,"Chat widget settings")," page, you can change it to left. To dynamically set the position of the bot on a website, set the position to ",(0,a.kt)("b",null,"right")," on the ",(0,a.kt)("b",null,"Settings")," page and pass `alignLeft:true` inside ",(0,a.kt)("b",null,"ymConfig")," of the chatbot script on the respective webpage."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Does the Chat widget or PWA contain a pop-up component?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,'No, the pop-up component appears only when an error message such as "device not connected to network" or "file upload limit exceeded" is displayed.'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is drop-down option supported in the Chat widget?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"Currently, drop-down is not supported for the Chat widget bot."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Chatbot is auto-scrolling upwards after navigating to a different tab by clicking the URL from the chatbot. How to resolve this issue"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,'You need to enable the "Scroll the chat window to the bottom" option in the Chat widget\'s ',(0,a.kt)("b",null,"Settings")," tab. Navigate to the ",(0,a.kt)("b",null,"Channels > Chat widget > Settings")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How to trigger the closeBot() function when a specific flow ends or when you reach a specific node?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"You must initiate an event at the end of the specific flow and will receive a callback in onEventFromBot(_ response: YMBotEventResponse) function of YMChatDelegate, where you can add the closeBot."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to change the bot title and description when the bot switches from parent bot to child bot?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"In orchestrator setup, you cannot interact with the child bot directly, and the UI loaded will be that of the parent bot. Therefore, there cannot be a separate Title, Description, or Icon for the child bot."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"What to do if buttons are not loading on the parent website?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"This happens when a website blocks CDNs (Content Delivery Network). You need to whitelist these by updating content security policy:",(0,a.kt)("br",null)," * cdn.jsdelivr.net (to load the font) ",(0,a.kt)("br",null)," * https://cdn.yellowmessenger.com (to load buttons)"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is speech-to-text (STT) feature supported in the chat widget?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"Yes, STT feature is supported for the chat widget."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How to enable chat history conversation?"),(0,a.kt)("div",null,(0,a.kt)("div",null,"For ",(0,a.kt)("a",{href:"https://cloud.yellow.ai"},"cloud.yellow.ai")," platform, ensure that ",(0,a.kt)("b",null,"Show history of the conversation")," is enabled. ",(0,a.kt)("br",null)," ",(0,a.kt)("img",{src:"https://i.imgur.com/crMFACl.png"})," ",(0,a.kt)("br",null),' For "app.yellowmessenger.com" or "app.yellow.ai" platform, ensure that ',(0,a.kt)("b",null,"Reset Context for every load")," checkbox is unchecked in the dashboard settings. ",(0,a.kt)("br",null)," ",(0,a.kt)("img",{src:"https://i.imgur.com/VVSmy15.png"})," ",(0,a.kt)("br",null)," ",(0,a.kt)("b",null,"Note:")," If you want to maintain a history across devices or browsers, you can create an authentication token, which is a unique token, and pass it in the given format, as shown below:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"if (userIsAuthenticated) { \n\n  // replace this with your own auth logic and reload the bot with new info.\n    \n    window.YellowMessengerPlugin.init({\n        ymAuthenticationToken: 'Your_Unique_token'\n    });\n    window.YellowMessengerPlugin.show(); // display the bot icon\n}\n"))),(0,a.kt)("br",null))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to change the short cut iocn for PWA bot?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"Yes, you can change the PWA bot's shortcut icon via bot mapping. Note that the icons are supported with the following resolutions: ",(0,a.kt)("br",null)," * Mobile: 192*192 ",(0,a.kt)("br",null)," * Desktop: 512*512."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to integrate the Yellow AI chatbot with a ReactJS website?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"Yes, you can add the script to any NextJS page, to do so:",(0,a.kt)("br",null)," * Create a file called static/yellowai.js and paste our script. Note: You need to remove the tags. ",(0,a.kt)("br",null)," * You can now load this file on page (page name). (jsx|tsx) file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import Head from 'next/head';\nimport MyComponent from '../components/mycomponent';\nexport default () => (\n  <div>\n    <Head>\n      <script type=\"text/javascript\" src=\"/static/yellowai.js\"><\/script>\n    </Head>\n    <MyComponent />\n  </div>\n)\n")),(0,a.kt)("br",null))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to implement the callout banner for child bots and view them when the parent bot switches to child bots in the app?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,'Yes, to view the callout banner for child bots, send an event with "ui-event-close-promotion" to close the banner. In this way, you can control when to show or turn off the banner, in this case only for child bots.'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to auto-delete conversations between the user and the bot after 48 hours?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"There is no option to delete/hide conversation history after 48 hours. It will be accessible only for 30 days."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to change the language of the weekdays displayed on the Chat Widget"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"Yes, the platform supports 10+ languages for placeholder texts such as timestamps, and text fields. The bot user can choose their preferred language to see text in that language."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Can we have custom fonts for ",(0,a.kt)("a",{href:"http://cloud.yellow.ai"},"V2")," web bots?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"Currently, v2 web bots do not support custom fonts as we need to validate legibility on the chat interface, ensure the availability of appropriate font weights, and then support respective languages. If you need to add a new font, reach out to the ",(0,a.kt)("a",{href:"mailto:support@yellow.ai"},"support"),"."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How to disable the like and dislike buttons shown under the chats in the chat widget (PWA)?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,'By disabling message feedback in the chat widget, the "like" and "dislike" buttons are disabled.'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to share the same chat session history across PWA and mobile SDK\xa0if a script is used to integrate the chatbot?"),(0,a.kt)("div",null,(0,a.kt)("br",null),"On PWA, you can use the same ymAuthenticationToken that you used on the mobile SDK.You can add the same ymAuthenticationToken at the end of the PWA URL to get the same chat session history.",(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," https://cloud.yellow.ai/pwa/v2/live/<your_bot_id>?ymAuthenticationToken=<your_user_token>\n\n")),(0,a.kt)("div",null,"If a script is used to integrate the chatbot, you need to pass the token inside `window.ymConfig` in the script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'window.ymConfig = {\n\n\xa0\xa0ymAuthenticationToken: "your_unique_token"\n\n}\n')))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How do we add ymAuthenticationToken to the PWA script so that we can see the same chat history in the PWA and mobile SDK?"),(0,a.kt)("p",null," You need to pass the ymAuthenticationToken in the URL as a query parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://cloud.yellow.ai/pwa/v2/live/<your_bot_id>?ymAuthenticationToken=<your_user_token>\n\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to change the chat widget background colour for bot and agent messages?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"No, the background colour can be changed only for user messages. This can be done by updating the complimentary color in the ",(0,a.kt)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/speech-to-text"},"chat widget settings"),"."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is possible to display image and text in a single node?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"Yes, you can make use of ",(0,a.kt)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chat-widget-components#14-cards"},"Generic card"),", and don not include any options in it. You need to include image, and description. Store the ",(0,a.kt)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/code"},"function")," response in var of type array and connect it to a message carousel node.",(0,a.kt)("br",null),(0,a.kt)("img",{src:"https://i.imgur.com/UkcRGAy.png)",alt:"drawing",width:"40%"})))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to remove the user's button selection from the list or quick replies in chatbot?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"No. Every message exchanged between a bot, users, and agents needs to be tracked/recorded so that the users are aware of the message sent/selection made. Following are the reasons: ",(0,a.kt)("br",null),"\u2022 ",(0,a.kt)("b",null,"Providing feedback:")," When a user selects an option/sends a message, they expect feedback in response. By displaying the messages, users will know that their message has been received. ",(0,a.kt)("br",null),"\u2022 ",(0,a.kt)("b",null,"Transparency:")," When a user message is displayed, it builds trust between the user and the chatbot. ",(0,a.kt)("br",null),"\u2022 ",(0,a.kt)("b",null,"Clarification:")," At times, the bot may not understand the context of the user's message. Displaying the message in such instances will be essential."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to configure customized icons for carousel (card) buttons?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"Icons are supported only in quick replies. whereas for buttons inside cards, you can use emojis."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to update the token without refreshing the webpage?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"No, the token and payload are only fetched during page load. Hence, you cannot update the token automatically."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Even though the agent is not connected to the bot, the app.yellowmessenger.com chatbot displays a green round circle, indicating that the agent is online. Is it possible to change the settings of the bot on the app platform?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,'Yes, on "app.yellowmessenger.com" or "app.yellow.ai" platform you can disable it in ',(0,a.kt)("b",null,"Configuration > Channels > Chat Widget > General > Show Dot Status in Title"),".",(0,a.kt)("br",null)," ",(0,a.kt)("img",{src:"https://i.imgur.com/NolCgJx.png"})))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to change the language of the bot whenever the user switches from one language to another on the website?"),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,"Yes, the language of the bot is changed when a user switches from one language to another on the website. You have to update the bot's language and reinitialize the bot. Note that the language of the chat history cannot be updated, as those messages were already delivered, stored, and fetched from the backend in the respective language."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,'When a bot is migrated from V1 ("app.yellowmessenger.com" or "app.yellow.ai" platform) to V2 (cloud.yellow.ai platform) and you try to scroll through a widget, a blank space is displayed. What might be the reason?'),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("div",null,'On the "app.yellowmessenger.com" or "app.yellow.ai" platform, you need to disable "Voice First" for the V2 widget as it is not supported. To disable "Voice First" option, click ',(0,a.kt)("b",null,"Configuration > Channels > Chat Widget > General > Voice First"),".",(0,a.kt)("br",null)," ",(0,a.kt)("img",{src:"https://i.imgur.com/lS4ik8c.png"})))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is it possible to hide the icon of the chat widget on the website?"),(0,a.kt)("p",null,' Yes, use "window.YellowMessengerPlugin.hide()" function to hide the icon of the chat widget on the website.')))}p.isMDXComponent=!0}}]);