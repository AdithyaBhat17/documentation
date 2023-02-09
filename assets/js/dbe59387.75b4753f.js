"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[2207],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99554:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Chat queue handing",sidebar_label:"Queue handling"},l=void 0,u={unversionedId:"platform_concepts/inbox/inbox-settings/workflows/chat-queue",id:"platform_concepts/inbox/inbox-settings/workflows/chat-queue",title:"Chat queue handing",description:"From the queue handling settings page, you can control how incoming chat tickets are handled when all your agents are occupied.",source:"@site/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue.md",sourceDirName:"platform_concepts/inbox/inbox-settings/workflows",slug:"/platform_concepts/inbox/inbox-settings/workflows/chat-queue",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue",draft:!1,tags:[],version:"current",frontMatter:{title:"Chat queue handing",sidebar_label:"Queue handling"},sidebar:"platform_concepts",previous:{title:"SLA settings",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/sla"},next:{title:"Offline handling",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat"}},c={},p=[{value:"1. Configure queue handling",id:"1-configure-queue-handling",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"From the queue handling settings page, you can control how incoming chat tickets are handled when all your agents are occupied.\nCustomers enter the queue when your agents' chat limit has been reached. This way they can focus on finishing current chats before starting new ones. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can change the concurrency in your ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents"},"agents' profile settings"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chat queues help you maintain a balance between wait time and internal resources. "),(0,r.kt)("li",{parentName:"ul"},"It prevents concurrent chat overload for agents while keeping your waiting customers updated."),(0,r.kt)("li",{parentName:"ul"},"Queue setting makes your chat queues easy to manage and customize and decides the queue limit for your groups to make sure your customers are handled well.")),(0,r.kt)("p",null,"Functionalities of queue handling: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View all pending chats and their current time in queue."),(0,r.kt)("li",{parentName:"ul"},"Set queue rules based on agent availability and customer wait length."),(0,r.kt)("li",{parentName:"ul"},"Time and customize the messages your chat users see while waiting."),(0,r.kt)("li",{parentName:"ul"},"Create auto-accept rules to direct requests to the least busy operator."),(0,r.kt)("li",{parentName:"ul"},"Access queue reports on a daily, weekly, and monthly basis.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-configure-queue-handling"},"1. Configure queue handling"),(0,r.kt)("p",null,"Follow the given steps to configure the queue for different agent groups: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,r.kt)("strong",{parentName:"li"},"Setting"),". "),(0,r.kt)("li",{parentName:"ol"},"Search and select ",(0,r.kt)("strong",{parentName:"li"},"Queue handling"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/NFgq6UD.jpg",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"When the agents are occupied, incoming tickets can go into ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#14-open-chats"},"Open")," chats or ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#16-missed-chats"},"Missed")," chats. Select  ",(0,r.kt)("strong",{parentName:"li"},"Open"),"/",(0,r.kt)("strong",{parentName:"li"},"Missed")," from the drop-down menu. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open"),": List of all the existing tickets the agents are working on."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Missed"),": List of all the tickets that are missed by the agents when they are occupied.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/nO0LbKq.png",alt:null})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Select the checkbox- ",(0,r.kt)("strong",{parentName:"li"},"Mark the chat as missed when your customer who is queued in the website chatbot, becomes inactive for _ min(s)")," and add the minutes of inactivity (select a number in the range of 5 to 30 minutes).",(0,r.kt)("br",{parentName:"li"}),"By checking this, if the user (who is in the queue) is not answered within X minutes (example: 6 minutes) by the agent, chat automatically goes into ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#16-missed-chats"},"missed"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/B187p3D.png",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Queued chats moving to missed chats")),(0,r.kt)("p",{parentName:"admonition"},"A user whose chat is QUEUED will be considered inactive/dropped off and moved to MISSED if any of the following conditions are met:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"If the end-user closes the browser(any active windows which are embedded with the bot code) and does not return for X minutes."),(0,r.kt)("li",{parentName:"ol"},"If the end user who is using a browser on a mobile device minimizes the tab or closes the browser containing the bot and does not return for X minutes."),(0,r.kt)("li",{parentName:"ol"},"If there is no mouse or keyboard activity from the end user for 10+X minutes (for example, after 10+6=16 minutes, the chat is marked as missed). If any mouse/keyboard activity is encountered, the timer is reset. "))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"By selecting the ",(0,r.kt)("strong",{parentName:"li"},"Enable queue position display on widget")," toggle, the customers can see the details that they are in a queue and queue position when they can expect a response from an agent. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can display the position by entering the text in the ",(0,r.kt)("strong",{parentName:"li"},"Enter custom message to display queue position")," field. Type in any message and use ",(0,r.kt)("inlineCode",{parentName:"li"},"{{queuePosition}}")," to get the value. ")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/BC5G9E3.png",alt:null})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"You can enable the Default position and display the required queue position value. This can be done to all the displayed agent groups. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/mavglY7.png",alt:null})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Save")," at the end of the page and save all the changes.")))}h.isMDXComponent=!0}}]);