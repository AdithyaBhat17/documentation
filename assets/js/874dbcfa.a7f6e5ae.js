"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[5057],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],r={title:"Configure and use video call in chats",sidebar_label:"Video calling"},c=void 0,s={unversionedId:"platform_concepts/inbox/chats/videocall",id:"platform_concepts/inbox/chats/videocall",title:"Configure and use video call in chats",description:"Text-based communications have limitations when dealing with complex issues to offer personalized support. it takes a lot of time and effort to provide an effective resolution.",source:"@site/docs/platform_concepts/inbox/chats/videocall.md",sourceDirName:"platform_concepts/inbox/chats",slug:"/platform_concepts/inbox/chats/videocall",permalink:"/docs/platform_concepts/inbox/chats/videocall",draft:!1,tags:[],version:"current",frontMatter:{title:"Configure and use video call in chats",sidebar_label:"Video calling"},sidebar:"platform_concepts",previous:{title:"Chat search and filters",permalink:"/docs/platform_concepts/inbox/chats/chatsearch"},next:{title:"WhatsApp policy",permalink:"/docs/platform_concepts/inbox/chats/whatsapp-24hr-window-policy"}},p={},u=[{value:'<a name="configure"></a> 1. Configure video call',id:"-1-configure-video-call",level:2},{value:"1.1 Enable Video call from inbox settings",id:"11-enable-video-call-from-inbox-settings",level:3},{value:"1.2 Raise a video call for each live chat",id:"12-raise-a-video-call-for-each-live-chat",level:3},{value:'<a name="usage"></a> 2. Video calling workflow',id:"-2-video-calling-workflow",level:2},{value:"2.1  Agent side video calling features",id:"21--agent-side-video-calling-features",level:3},{value:"2.2 Customer side video calling features",id:"22-customer-side-video-calling-features",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Text-based communications have limitations when dealing with complex issues to offer personalized support. it takes a lot of time and effort to provide an effective resolution.\nTo resolve this complication, Inbox provides the option of video calls. Video call provides humanized digital customer experience. Other advantages of video calling are: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It is easier to achieve a meaningful interaction with the customer face to face (compared to a live chat or an email)."),(0,o.kt)("li",{parentName:"ul"},"It helps provide in-person support from anywhere across the world. "),(0,o.kt)("li",{parentName:"ul"},"It improves customer satisfaction, increases the efficiency of the team's fast and stick resolution, boosts sales, and increases the trust with the customer.")),(0,o.kt)("p",null,"In this article, you will learn: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#configure"},"How to configure video calling?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"How video calling works for agents vs. customers?"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-1-configure-video-call"},(0,o.kt)("a",{name:"configure"})," 1. Configure video call"),(0,o.kt)("p",null,"To configure video calls, it must be enabled on the settings page, agents page, and on individual raise ticket nodes."),(0,o.kt)("h3",{id:"11-enable-video-call-from-inbox-settings"},"1.1 Enable Video call from inbox settings"),(0,o.kt)("p",null,"To avail of this functionality for your customers, Video call must be enabled:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Through Inbox settings"),(0,o.kt)("li",{parentName:"ol"},"For each of the individual agents")),(0,o.kt)("p",null,"This steps are achieved through Inbox settings, explained in detail ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/video-call-settings"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/oDxRiD9.png",alt:null})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"12-raise-a-video-call-for-each-live-chat"},"1.2 Raise a video call for each live chat"),(0,o.kt)("p",null,"You can allow the customer to raise a video call for a live chat by setting it up in the Studio flow. "),(0,o.kt)("p",null,"Follow the below steps to enable video call through the Raise ticket node: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Studio")," > ",(0,o.kt)("strong",{parentName:"p"},"Build")," > ",(0,o.kt)("strong",{parentName:"p"},"Flows"),".  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket"},"Raise ticket action node")," on the respective flow.   ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll down to advanced settings. On the ",(0,o.kt)("strong",{parentName:"p"},"Voice ticket options")," field select ",(0,o.kt)("strong",{parentName:"p"},"Voice call")," (mandatory to enable video for particular live chat).   "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/5OuBB2P.png",alt:null})))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Complete video call option")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"If you add ",(0,o.kt)("strong",{parentName:"li"},"Auto start call")," to the ",(0,o.kt)("strong",{parentName:"li"},"Voice ticket options")," field (optional) on the Raise ticket node, the customer can directly initiate a video call (that is, without having to textually converse with a live agent, the agent will be assigned and customers screen switches to video call)."),(0,o.kt)("li",{parentName:"ul"},"There will be no live chat between the Agent and customer as they are directly connected via. video call. "),(0,o.kt)("li",{parentName:"ul"},"This is currently available only if the channel is ",(0,o.kt)("strong",{parentName:"li"},"Web widget"),". "))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-2-video-calling-workflow"},(0,o.kt)("a",{name:"usage"})," 2. Video calling workflow"),(0,o.kt)("p",null,"Agents can tend to their customer, share their screen, focus their products, provide consultation and superior customer experience, with a click of a button by using the video calling feature."),(0,o.kt)("p",null,"While resolving a query on live chat, Agents/customers might encounter instances where the solution is dependent on understanding the query through video call. For example: to fix a WIFI modem. In these situations a video call can be initiated. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This switch from live chat to video call is possible when the ",(0,o.kt)("strong",{parentName:"p"},"Video call")," option is selected on the Raise ticket node. ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On the customers side the call option(icon) is disabled by default (unless ",(0,o.kt)("strong",{parentName:"p"},"Voice call")," is enabled within Raise ticket node). ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When the call icon is enabled, customers can request for a video call, agent gets notified, agent can join the video call and understand the query. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Similarly, when an agent wants to understand the customer query better, they can request for video call and the customer can join the video call. "),(0,o.kt)("img",{src:"https://i.imgur.com/EAIojQz.png",alt:"drawing",width:"50%"}))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Resolving a query on video call does not mean that the live chat is resolved. After disconnecting the video call, the agent must resolve the live chat by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Resolve")," button on the chat screen.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"21--agent-side-video-calling-features"},"2.1  Agent side video calling features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click the phone icon next to the chat name (from ",(0,o.kt)("strong",{parentName:"p"},"Inbox")," > ",(0,o.kt)("strong",{parentName:"p"},"Chats"),"). "),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/kkboOLy.png",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Provide permission to your system to access video and call. "),(0,o.kt)("img",{src:"https://i.imgur.com/iWiZ4dc.png",alt:"drawing",width:"100%"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For other channels like WhatsApp or Facebook, agents can just copy the video call link and paste it on the customer chat for them to join. "),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/9Pikvvh.png",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Agent will have all the video calling facilities (view in full screen, share screen, mute audio, mute video, disconnect, etc.). They can disconnect/leave the call after providing the resolution. "),(0,o.kt)("h4",{parentName:"li",id:"share-screen-during-the-video-call"},"Share screen during the video call"),(0,o.kt)("img",{src:"https://i.imgur.com/bsf42Ib.png",alt:"drawing",width:"40%"}))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"22-customer-side-video-calling-features"},"2.2 Customer side video calling features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Customer must click on the phone icon to receive/initiate the call with the agent. "),(0,o.kt)("img",{src:"https://i.imgur.com/nSHQYWe.png",alt:"drawing",width:"60%"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Customer will have all the video calling facilities (view in full screen, share screen with agent or customer, mute audio, mute video, disconnect, etc.). They can disconnect/leave the call after finding the resolution. "),(0,o.kt)("img",{src:"https://i.imgur.com/YhzCYQq.png",alt:"drawing",width:"50%"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To minimize the video call screen and view the chat screen, customers can click the message button. For example: if the agent has sent a URL for registration during video call, customer can minimize or maximize video call to view the chat screen. "),(0,o.kt)("img",{src:"https://i.imgur.com/4QDTgSg.png",alt:"drawing",width:"50%"}))))}m.isMDXComponent=!0}}]);