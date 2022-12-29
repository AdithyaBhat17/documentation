"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[5854],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(n),h=i,d=u["".concat(l,".").concat(h)]||u[h]||g[h]||r;return n?o.createElement(d,a(a({ref:e},p),{},{components:n})):o.createElement(d,a({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[u]="string"==typeof t?t:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},35372:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={title:"Change the priority of the ticket and assign it to a different agent or a group",sidebar_label:"Change ticket priority and assignee"},l=void 0,c={unversionedId:"cookbooks/inbox/priority-assignee",id:"cookbooks/inbox/priority-assignee",title:"Change the priority of the ticket and assign it to a different agent or a group",description:"In this article, you will learn how to change the priority of a chat/email ticket and transfer it from one inbox agent to another.",source:"@site/docs/cookbooks/inbox/priority-assignee.md",sourceDirName:"cookbooks/inbox",slug:"/cookbooks/inbox/priority-assignee",permalink:"/docs/cookbooks/inbox/priority-assignee",draft:!1,tags:[],version:"current",frontMatter:{title:"Change the priority of the ticket and assign it to a different agent or a group",sidebar_label:"Change ticket priority and assignee"},sidebar:"cookbooks",previous:{title:"Ticket notification to unavailable agents",permalink:"/docs/cookbooks/inbox/notifyagents"},next:{title:"Agent transfer without user information",permalink:"/docs/cookbooks/inbox/transferwithoutinfo"}},p={},u=[{value:"Configure priority and group on the Raise ticket node",id:"configure-priority-and-group-on-the-raise-ticket-node",level:4},{value:"Assign chat tickets to a different agent or group",id:"assign-chat-tickets-to-a-different-agent-or-group",level:4},{value:"Change priority and assign email tickets to a different agent",id:"change-priority-and-assign-email-tickets-to-a-different-agent",level:4}],g={toc:u};function h(t){var e=t.components,n=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,o.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article, you will learn how to change the ",(0,r.kt)("strong",{parentName:"p"},"priority")," of a chat/email ticket and ",(0,r.kt)("strong",{parentName:"p"},"transfer")," it from one inbox agent to another. "),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"configure-priority-and-group-on-the-raise-ticket-node"},"Configure priority and group on the Raise ticket node"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"While creating flows (on Studio) using ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket"},"Raise ticket action node"),", the bot builder can assign a priority to the chat/email tickets. Tickets created through this flow will have the assigned ",(0,r.kt)("strong",{parentName:"li"},"Priority"),".  ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/07hndDx.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can configure Priority in the action node by enabling Advanced options. In the below example, all the tickets created will be assigned to the Complaints Department (configured in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups"},"group settings"),") and the priority is High. ")),(0,r.kt)("img",{src:"https://i.imgur.com/mTUphFf.png",alt:"drawing",width:"50%"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"To change the ",(0,r.kt)("strong",{parentName:"p"},"Priority"),"/",(0,r.kt)("strong",{parentName:"p"},"Assignee"),", follow the below steps: "),(0,r.kt)("h4",{id:"assign-chat-tickets-to-a-different-agent-or-group"},"Assign chat tickets to a different agent or group"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Inbox Agent or Admins cannot change the priority of chat tickets.  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#2-user-details"},"this doc")," to learn about chat screen and chat details. ")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open any ongoing chat > ",(0,r.kt)("strong",{parentName:"li"},"Details")," and click ",(0,r.kt)("strong",{parentName:"li"},"Transfer")," (this option will be available based on the configuration of ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields"},"custom fields"),")."),(0,r.kt)("li",{parentName:"ol"},"Select the Agent/Group to which you want to transfer the ticket.  Confirm the reassignment. "),(0,r.kt)("li",{parentName:"ol"},"Your chat will be transferred to the selected inbox agent or the concerned group/team (tickets will be autoassigned to the agents in this group). ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/FhEUhju.png",alt:null})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"While re-opening the missed/resolved chats, Inbox Admins can select the ",(0,r.kt)("strong",{parentName:"li"},"Priority")," of the ticket and assign the ticket to a particular ",(0,r.kt)("strong",{parentName:"li"},"Category/Agent"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/MGdy64a.png",alt:null})),(0,r.kt)("h4",{id:"change-priority-and-assign-email-tickets-to-a-different-agent"},"Change priority and assign email tickets to a different agent"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/emailticketstatus#2-status-transition-from-different-views"},"this doc")," to learn about email ticket screen and statuses. ")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Inbox Agent and Admins can change the priority of email tickets.  "))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Priority and Assignee can be changed from the email tickets page. Search for the required ticket and select the priority/assignee (group/agent) from the dropdown. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/9I1uCWK.png",alt:null})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"You can open the email ticket and view the details. Modify the Ticket Details (change the priority and assignee).  These changes will be updated on the Activity log.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/XH92KJK.png",alt:null})))}h.isMDXComponent=!0}}]);