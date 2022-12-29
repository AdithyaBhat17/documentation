"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[5057],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94947:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],r={title:"Configure and use video call in chats",sidebar_label:"Video calling"},c=void 0,s={unversionedId:"platform_concepts/inbox/chats/videocall",id:"platform_concepts/inbox/chats/videocall",title:"Configure and use video call in chats",description:"Text-based communications have limitations when dealing with complex issues to offer personalized support. it takes a lot of time and effort to provide an effective resolution.",source:"@site/docs/platform_concepts/inbox/chats/videocall.md",sourceDirName:"platform_concepts/inbox/chats",slug:"/platform_concepts/inbox/chats/videocall",permalink:"/docs/platform_concepts/inbox/chats/videocall",draft:!1,tags:[],version:"current",frontMatter:{title:"Configure and use video call in chats",sidebar_label:"Video calling"},sidebar:"platform_concepts",previous:{title:"Chat search and filters",permalink:"/docs/platform_concepts/inbox/chats/chatsearch"},next:{title:"WhatsApp policy",permalink:"/docs/platform_concepts/inbox/chats/whatsapp-24hr-window-policy"}},u={},d=[{value:'<a name="configure"></a> 1. Configure video call',id:"-1-configure-video-call",level:2},{value:"1.1 Enable Video call from inbox settings",id:"11-enable-video-call-from-inbox-settings",level:3},{value:"1.2 Raise a video call for each ticket",id:"12-raise-a-video-call-for-each-ticket",level:3},{value:'<a name="usage"></a> 2. Video calling workflow',id:"-2-video-calling-workflow",level:2},{value:"2.1  Agent side video calling features",id:"21--agent-side-video-calling-features",level:3},{value:"2.2 Customer side video calling features",id:"22-customer-side-video-calling-features",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Text-based communications have limitations when dealing with complex issues to offer personalized support. it takes a lot of time and effort to provide an effective resolution.\nTo resolve this complication, Inbox provides the option of video calls. Video call provides humanized digital customer experience. Other advantages of video calling are: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is easier to achieve a meaningful interaction with the customer face to face (compared to a live chat or an email)."),(0,a.kt)("li",{parentName:"ul"},"It helps provide in-person support from anywhere across the world. "),(0,a.kt)("li",{parentName:"ul"},"It improves customer satisfaction, increases the efficiency of the team's fast and stick resolution, boosts sales, and increases the trust with the customer.")),(0,a.kt)("p",null,"In this article, you will learn: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#configure"},"How to configure video calling?")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#usage"},"How video calling works for agents vs. customers?"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"-1-configure-video-call"},(0,a.kt)("a",{name:"configure"})," 1. Configure video call"),(0,a.kt)("p",null,"To configure video calls, it must be enabled on the settings page, agents page, and on individual raise ticket nodes."),(0,a.kt)("h3",{id:"11-enable-video-call-from-inbox-settings"},"1.1 Enable Video call from inbox settings"),(0,a.kt)("p",null,"Video calling must be enabled for your customer to be able to avail of this functionality.\nVideo call must be enabled:  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"As a feature itself, on inbox settings."),(0,a.kt)("li",{parentName:"ol"},"For each of the individual agents. ")),(0,a.kt)("p",null,"This can be achieved through inbox settings, explained in detail ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/video-call-settings"},"here"),"."),(0,a.kt)("h3",{id:"12-raise-a-video-call-for-each-ticket"},"1.2 Raise a video call for each ticket"),(0,a.kt)("p",null,"You can raise a video call for every ticket created by setting it up in the flow. "),(0,a.kt)("p",null,"Follow the below steps to enable video call on the raise ticket node: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},"Studio")," > ",(0,a.kt)("strong",{parentName:"li"},"Build")," > ",(0,a.kt)("strong",{parentName:"li"},"Flows"),".  "),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket"},"Raise ticket action node")," on the respective flow.   "),(0,a.kt)("li",{parentName:"ol"},"Scroll down to advanced settings. On the ",(0,a.kt)("strong",{parentName:"li"},"Voice ticket options")," field select ",(0,a.kt)("strong",{parentName:"li"},"Voice call")," (mandatory to enable video for particular ticket).   ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/5OuBB2P.png",alt:null})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you add ",(0,a.kt)("strong",{parentName:"p"},"Auto start call")," to the ",(0,a.kt)("strong",{parentName:"p"},"Voice ticket options")," field (optional), it automatically starts the video for the end customers if the channel is ",(0,a.kt)("strong",{parentName:"p"},"web widget"),".\nThis will not work for other channels. ")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"-2-video-calling-workflow"},(0,a.kt)("a",{name:"usage"})," 2. Video calling workflow"),(0,a.kt)("p",null,"Video calls can directly be initiated with the agent or the customer can switch to video calls while chatting with an agent.\nFor example, if the customer is not able to fully understand the solution that you're recommending."),(0,a.kt)("p",null,"for example, this is where the customer is unable to understand the solution that the agent is recommending, or if there is something that can be resolved only via video/ images, the agent or customer can switch to the video call (when the functionality is enabled)."),(0,a.kt)("img",{src:"https://i.imgur.com/EAIojQz.png",alt:"drawing",width:"70%"}),(0,a.kt)("p",null,"When the customer has accepted to have a video call with the agent, Agent can initiate the call. "),(0,a.kt)("h3",{id:"21--agent-side-video-calling-features"},"2.1  Agent side video calling features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the phone icon next to the chat name (from ",(0,a.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,a.kt)("strong",{parentName:"li"},"Chats"),"). ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/kkboOLy.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide permission to your system to access video and call. ")),(0,a.kt)("img",{src:"https://i.imgur.com/iWiZ4dc.png",alt:"drawing",width:"100%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For other channels like WhatsApp or Facebook, agents can just copy the video call link and paste it on the customer chat for them to join. ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/9Pikvvh.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Agent will have all the video calling facilities (view in full screen, share screen, mute audio, mute video, disconnect, etc.). They can disconnect/leave the call after providing the resolution. "),(0,a.kt)("h4",{parentName:"li",id:"share-screen-during-the-video-call"},"Share screen during the video call"),(0,a.kt)("img",{src:"https://i.imgur.com/bsf42Ib.png",alt:"drawing",width:"40%"}))),(0,a.kt)("h3",{id:"22-customer-side-video-calling-features"},"2.2 Customer side video calling features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customer must click on the phone icon to receive/ initiate the call with the agent. ")),(0,a.kt)("img",{src:"https://i.imgur.com/nSHQYWe.png",alt:"drawing",width:"60%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customer will have all the video calling facilities (view in full screen, share screen with agent or customer, mute audio, mute video, disconnect, etc.). They can disconnect/leave the call after finding the resolution. ")),(0,a.kt)("img",{src:"https://i.imgur.com/YhzCYQq.png",alt:"drawing",width:"60%"}),(0,a.kt)("p",null,"This is how an agent can tend to their customer, share their screen, focus their products, provide consultation, superior customer experience, and work with those solutions with a click of a button."))}h.isMDXComponent=!0}}]);