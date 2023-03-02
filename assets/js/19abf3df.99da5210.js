"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[7281],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(o),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return o?a.createElement(h,i(i({ref:t},c),{},{components:o})):a.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},11046:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],s={title:"Use yellow.ai's inbox live chat",sidebar_label:"Try inbox demo"},l=void 0,p={unversionedId:"platform_concepts/inbox/inbox_setup/inboxdemo",id:"platform_concepts/inbox/inbox_setup/inboxdemo",title:"Use yellow.ai's inbox live chat",description:"While trained flows on yellow.ai bots provide exceptional customer experience, sometimes, customers prefer human interactions. The inbox module is designed to provide bot users with technical customer assistance by helping them resolve any issues they have with the products or services. Inbox Agents are appointed to provide solutions to customer queries, this process is also familiar among industries that choose to promote products, create promotions and provide positive customer experiences.",source:"@site/docs/platform_concepts/inbox/inbox_setup/inboxdemo.md",sourceDirName:"platform_concepts/inbox/inbox_setup",slug:"/platform_concepts/inbox/inbox_setup/inboxdemo",permalink:"/docs/platform_concepts/inbox/inbox_setup/inboxdemo",draft:!1,tags:[],version:"current",frontMatter:{title:"Use yellow.ai's inbox live chat",sidebar_label:"Try inbox demo"},sidebar:"platform_concepts",previous:{title:"Provide customer support using yellow.ai's Inbox",permalink:"/docs/platform_concepts/inbox/"},next:{title:"Add inbox support agents",permalink:"/docs/platform_concepts/inbox/inbox_setup/supportagents"}},c={},m=[{value:"1. Implement live chat",id:"1-implement-live-chat",level:2},{value:"Tab 1: Import/create a flow and request for support",id:"tab-1-importcreate-a-flow-and-request-for-support",level:3},{value:"Tab 2: Live chat request and assignment on the Inbox chat screen",id:"tab-2-live-chat-request-and-assignment-on-the-inbox-chat-screen",level:3}],u={toc:m};function d(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"While trained flows on yellow.ai bots provide exceptional customer experience, sometimes, customers prefer human interactions. The inbox module is designed to provide bot users with technical customer assistance by helping them resolve any issues they have with the products or services. Inbox Agents are appointed to provide solutions to customer queries, this process is also familiar among industries that choose to promote products, create promotions and provide positive customer experiences."),(0,r.kt)("p",null,"When the customer opts to switch from bot interaction to human interaction, with Inbox, they are connected to the Live agents (who are available to accept live chats). "),(0,r.kt)("p",null,"In this article, you will learn:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Basic steps required to get started with Inbox. "),(0,r.kt)("li",{parentName:"ol"},"Simple demo of raising a live chat request (as a customer) and addressing it (as an agent).")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This article discusses the creation of ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat"},"live chat requests")," that are received by the Inbox agent for live resolution. This is a simplified demo.     "),(0,r.kt)("li",{parentName:"ul"},"Email tickets are configured using different ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro"},"steps"),"."))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To get started with ",(0,r.kt)("em",{parentName:"p"},"Live agent transfer"),", you must configure ",(0,r.kt)("strong",{parentName:"p"},"Studio")," with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket"},"raise ticket")," action node and ",(0,r.kt)("strong",{parentName:"p"},"Inbox"),". "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Studio")," must be configured:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"With a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys"},"flow")," that can be imported from marketplace or created from scratch to identify ",(0,r.kt)("em",{parentName:"li"},"chat with an agent")," intent and raise a live chat request to Inbox."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Inbox")," must be configured:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To receive tickets. "),(0,r.kt)("li",{parentName:"ul"},"To allow agents to converse with the bot users by providing ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/supportagents"},"Inbox agent access"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You will not be able to create flows on Studio module when the bot is in ",(0,r.kt)("strong",{parentName:"p"},"Live")," mode, hence, try Inbox demo in ",(0,r.kt)("strong",{parentName:"p"},"Development")," mode. ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-implement-live-chat"},"1. Implement live chat"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"On your web browser, open 2 different tabs (Studio module and Inbox module)")),(0,r.kt)("h3",{id:"tab-1-importcreate-a-flow-and-request-for-support"},"Tab 1: Import/create a flow and request for support"),(0,r.kt)("p",null,"To import the ",(0,r.kt)("strong",{parentName:"p"},"Connect with support")," template from the ",(0,r.kt)("strong",{parentName:"p"},"Marketplace"),", follow the below steps: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create flow")," from Studio. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow"},"steps")," here."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/fBwX5fx.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai/marketplace?name=support"},"Support templates"),"(prebuilt marketplace flows). Add the most suited flow to your bot. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/aFNSjUa.png",alt:null})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro#-1-choose-a-right-marketplace-template"},"this")," guide to work with ",(0,r.kt)("strong",{parentName:"p"},"Marketplace")," templates. ")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To create a support flow from scratch on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys"},"Studio"),", follow the steps below: "),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Create an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents"},"Intent")," and add ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#24-add-utterance"},"utterances")," to identify the flow that connects a user to a live inbox agent. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Utterance examples, \u201cCan I talk to a Live agent?\u201d, and \u201cConnect me to Customer Support\u201d."))),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"prompts")," to collect information(name and query) from the users. Store the collected details in the respective ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#-4-store-and-access-variables-via-nodes"},"variables"),". "),(0,r.kt)("li",{parentName:"ol"},"Connect the flow to ",(0,r.kt)("strong",{parentName:"li"},"Raise ticket action node")," (pass the collected information). Click ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket"},"here")," to learn about the action node. "),(0,r.kt)("li",{parentName:"ol"},"Advanced options can be enabled and optional fields can be entered.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/ZXdujQO.png",alt:null})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the flow is created (either ",(0,r.kt)("strong",{parentName:"p"},"From scratch")," or ",(0,r.kt)("strong",{parentName:"p"},"Marketplace"),"), test it on the demo bot space by raising a live chat request. That is, enter a message in the input bar to ",(0,r.kt)("em",{parentName:"p"},"connect to an agent"),", and provide details. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/5ozZv9r.png",alt:null})))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the live chat request is raised successfully and the Inbox agent has received the chat (explained in the next section), the name of the agent connected will be displayed."),(0,r.kt)("img",{src:"https://i.imgur.com/6HzAMVf.png",alt:"drawing",width:"40%"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You will not be able to raise another live chat request until the current live chat is resolved. ")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tab-2-live-chat-request-and-assignment-on-the-inbox-chat-screen"},"Tab 2: Live chat request and assignment on the Inbox chat screen"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"To test the live agent transfer, you must have ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/supportagents"},"Inbox agent")," access"),"."),(0,r.kt)("li",{parentName:"ul"},"You (inbox agent) must be ",(0,r.kt)("strong",{parentName:"li"},"Available"),". "))),(0,r.kt)("p",null,"Once you have created the live agent flow, follow these steps to test how tickets get created and get assigned to inbox agents:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("strong",{parentName:"p"},"Inbox")," > ",(0,r.kt)("strong",{parentName:"p"},"Chats")," > ",(0,r.kt)("strong",{parentName:"p"},"My chats"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"As only you will be the only available Inbox agent to your bot, the live chat will be assigned to you. Make sure you are ",(0,r.kt)("strong",{parentName:"p"},"Available"),". To check your status, click on the profile icon on the right corner, and verify the status drop-down. "),(0,r.kt)("img",{src:"https://i.imgur.com/I7XrOLT.png",alt:"drawing",width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see a live chat raised. It will be displayed as a message on ",(0,r.kt)("strong",{parentName:"p"},"My chat")," page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/khxffRF.jpg",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can reply to that message from your live chat screen. This is a real-time conversation on the bot."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/LEdGd40.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can close the live chat (and click ",(0,r.kt)("strong",{parentName:"p"},"Resolve")," to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#3-resolve-or-transfer-tickets"},"resolve the live chat")," and test the message displayed on ",(0,r.kt)("em",{parentName:"p"},"Tab 1")," after the live chat has ended with the agent. "),(0,r.kt)("img",{src:"https://i.imgur.com/Gld3MHU.png",alt:"drawing",width:"50%"}))))}d.isMDXComponent=!0}}]);