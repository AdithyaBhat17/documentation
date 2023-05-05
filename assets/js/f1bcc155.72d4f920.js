"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[40942],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return k}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),h=a,k=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return o?n.createElement(k,i(i({ref:t},p),{},{components:o})):n.createElement(k,i({ref:t},p))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},5721:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],s={title:"Display a message or/and trigger an action when chat is closed",sidebar_label:"End of the live chat"},c=void 0,l={unversionedId:"cookbooks/inbox/ticketclose-message",id:"cookbooks/inbox/ticketclose-message",title:"Display a message or/and trigger an action when chat is closed",description:"When a customer initiates a live chat, an inbox agent takes on the task of resolving the query. Once the agent has resolved the query, they mark the chat as Resolved. This triggers the execution of the node connected to the ticket closed in the raise ticket node, which is followed by the other nodes connected to it.",source:"@site/docs/cookbooks/inbox/ticketclose-message.md",sourceDirName:"cookbooks/inbox",slug:"/cookbooks/inbox/ticketclose-message",permalink:"/docs/cookbooks/inbox/ticketclose-message",draft:!1,tags:[],version:"current",frontMatter:{title:"Display a message or/and trigger an action when chat is closed",sidebar_label:"End of the live chat"},sidebar:"cookbooks",previous:{title:"Alias name for agents",permalink:"/docs/cookbooks/inbox/alias"},next:{title:"Ticket notification to unavailable agents",permalink:"/docs/cookbooks/inbox/notifyagents"}},p={},d=[{value:"Step 1: Attach nodes to ticket closed",id:"step-1-attach-nodes-to-ticket-closed",level:3},{value:"Step 2: Trigger other actions after ticket closed",id:"step-2-trigger-other-actions-after-ticket-closed",level:3}],u={toc:d};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When a customer initiates a live chat, an inbox agent takes on the task of resolving the query. Once the agent has resolved the query, they mark the chat as ",(0,r.kt)("strong",{parentName:"p"},"Resolved"),". This triggers the execution of the node connected to the ",(0,r.kt)("strong",{parentName:"p"},"ticket closed")," in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket-outputs"},"raise ticket")," node, which is followed by the other nodes connected to it."),(0,r.kt)("p",null,"After a chat has ended, you may want to perform actions like updating a database, calling an API, sending customer details to the CSM, or displaying promotional messages or products. However, you cannot connect the ",(0,r.kt)("strong",{parentName:"p"},"ticket closed")," part of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket-outputs"},"raise ticket")," node to both options simultaneously. In this case, you can use an ",(0,r.kt)("strong",{parentName:"p"},"event")," to identify the ticket closed and perform background actions on a different flow. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat"},"CSAT setting")," is enabled, the system records the customer feedback on the agent before closing the chat.")),(0,r.kt)("p",null,"To configure the system to automatically trigger an event when agents resolve a live chat, you need to manually enable it from the event hub and use it in the flows."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use-case")),(0,r.kt)("p",null,"After the ticket is resolved, you can:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Intimate the user and provide 3 options as promotional activity."),(0,r.kt)("li",{parentName:"ol"},"Immediately after the ticket is resolved, create a logic to filter the user data based on the type of query raised and send it to a CRM.")),(0,r.kt)("h3",{id:"step-1-attach-nodes-to-ticket-closed"},"Step 1: Attach nodes to ticket closed"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To attach nodes to ticket closed, connect the ",(0,r.kt)("strong",{parentName:"li"},"Raise ticket")," > ",(0,r.kt)("strong",{parentName:"li"},"Ticket closed")," with the nodes you want to execute. This will get triggered after the ticket is closed.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/tFTr2P5.png",alt:null}))),(0,r.kt)("h3",{id:"step-2-trigger-other-actions-after-ticket-closed"},"Step 2: Trigger other actions after ticket closed"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Studio")," > ",(0,r.kt)("strong",{parentName:"li"},"Events")," > ",(0,r.kt)("strong",{parentName:"li"},"Inbox")," and search for ",(0,r.kt)("strong",{parentName:"li"},"ticket-closed"),".\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/qZYPSZ2.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Click the three dots icon and select ",(0,r.kt)("strong",{parentName:"li"},"Activate")," to activate the event."),(0,r.kt)("li",{parentName:"ol"},"Create a new ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys"},"flow")," with the trigger set to ",(0,r.kt)("strong",{parentName:"li"},"Event")," and value set to ",(0,r.kt)("strong",{parentName:"li"},"ticket-closed"),".\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/5J4tjm4.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"To provide a personalized response from the bot when a ticket is closed, add ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes"},"nodes")," to the flow that are designed to execute specific tasks. The flow will automatically run whenever a ticket is closed.")))}h.isMDXComponent=!0}}]);