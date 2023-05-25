"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[41944],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,g=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5454:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),s=["components"],o={title:"Auto assignment of live chats and email tickets to agents",sidebar_label:"Auto assignment of chats & emails"},l=void 0,c={unversionedId:"platform_concepts/inbox/inbox_setup/assignmentlogic",id:"platform_concepts/inbox/inbox_setup/assignmentlogic",title:"Auto assignment of live chats and email tickets to agents",description:"- Live chats and email tickets are automatically assigned to inbox agents(considering the listed parameters in this article).",source:"@site/docs/platform_concepts/inbox/inbox_setup/assignmentlogic.md",sourceDirName:"platform_concepts/inbox/inbox_setup",slug:"/platform_concepts/inbox/inbox_setup/assignmentlogic",permalink:"/docs/platform_concepts/inbox/inbox_setup/assignmentlogic",draft:!1,tags:[],version:"current",frontMatter:{title:"Auto assignment of live chats and email tickets to agents",sidebar_label:"Auto assignment of chats & emails"},sidebar:"platform_concepts",previous:{title:"Default agent statuses",permalink:"/docs/platform_concepts/inbox/inbox_setup/agentstatuses"},next:{title:"Debug inbox errors",permalink:"/docs/platform_concepts/inbox/inbox_setup/debugchecklist"}},u={},p=[],m={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Live chats and email tickets")," are automatically assigned to inbox agents(considering the listed parameters in this article).    "),(0,r.kt)("li",{parentName:"ul"},"Auto-assignment of ",(0,r.kt)("strong",{parentName:"li"},"email tickets")," can be restricted(enabled/disabled) as per industry needs, follow these ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic"},"steps"),". "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is the Assignment logic?")),(0,r.kt)("p",null,"The auto-assignment feature automates the assignment of incoming live chats/email tickets based on agent's capacity, availability, and expertise."),(0,r.kt)("p",null,"Three parameters dictate the live chat/email ticket assignment logic based on which the live chats/email tickets will get assigned to the available agents, they are listed below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Agent availability"))),(0,r.kt)("p",null,"An agent within Inbox can be in any of the following statuses - Available, Busy, or Away.  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the agent is on Available status, they will be automatically assigned new incoming chats/emails."),(0,r.kt)("li",{parentName:"ul"},"If the agent is either Busy or Away, they\u2019ll be not actively assigned to new chats/emails. That chat/email will either be assigned to the next available agent or queued.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Click ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/agentstatuses"},"here"),", to know more about the difference between Busy and Away.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Last live chat/email ticket assigned time"))),(0,r.kt)("p",null,"This presents the timestamp at which the agent was last assigned with a live chat/email ticket i.e the longest duration each agent has gone without getting a new chat request/email ticket."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Concurrency"))),(0,r.kt)("p",null,"Each agent will have an upper limit for chats called Concurrency which explains the maximum number of concurrent live chats/email tickets that the agent can be assigned, at any time."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a new live chat/email ticket is raised (assuming it is raised within working hours), it will first fetch all the available agents in the group the live chat/email ticket was raised for. It will not consider agents who have set their status to Busy or Away."),(0,r.kt)("li",{parentName:"ul"},"All the available agents will be sorted in the ascending order of their last live chat/email ticket assigned time i.e the longest an agent has gone without getting a new live chat/email ticket. Then the live chat/email ticket will be assigned to the first agent who has available space in their concurrency.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Sticky agent for live chats")),(0,r.kt)("p",{parentName:"admonition"},"The other type of assignment which does not consider any of the above parameters is ",(0,r.kt)("strong",{parentName:"p"},"Sticky agent"),"."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Sticky agent is a type of live chat assignment where the customers can connect to an agent, of their choice (agents they are familiar with/ have conversed with before)."),(0,r.kt)("li",{parentName:"ul"},"Sticky agent feature is useful in Industries where the customer and agent relationship is crucial."))),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Understand Auto-assignment with an example")),(0,r.kt)("p",null,"Assume"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"A live chat request was raised at 10:00 AM\n")),(0,r.kt)("p",null,"At that instant, the agents have the following availability & concurrency settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Agent A = Status - Available\n\nAgent B = Status - Busy\n\nAgent C = Status - Available\n\nAgent D = Status - Away\n\nAgent E = Status - Available\n")),(0,r.kt)("p",null,"From the above agent list, only consider agents who are under available status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Agent A\n\nAgent C\n\nAgent E\n")),(0,r.kt)("p",null,"Then, they will be rearranged based on descending order of the last live chat/email ticket assigned time,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Agent C = The last live chat/email ticket assigned was 30 mins before & Concurrency - 3/6\n\nAgent A = the last live chat/email ticket assigned was 15 mins before & Concurrency - 4/6\n\nAgent E = the last live chat/email ticket assigned was 10 mins before & Concurrency - 6/6\n")),(0,r.kt)("p",null,"The live chat/email ticket will be assigned to ",(0,r.kt)("strong",{parentName:"p"},"Agent C"),", since ",(0,r.kt)("strong",{parentName:"p"},"C")," is the first agent who is not assigned a new chat/email ticket for the longest time and has space in their concurrency (3 more left to their max concurrency which is 6)."))}h.isMDXComponent=!0}}]);