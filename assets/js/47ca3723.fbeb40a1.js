"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[7169],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},g="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),g=c(n),m=i,h=g["".concat(l,".").concat(m)]||g[m]||p[m]||o;return n?a.createElement(h,r(r({ref:e},u),{},{components:n})):a.createElement(h,r({ref:e},u))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[g]="string"==typeof t?t:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48027:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"Auto assignment of tickets to agents",sidebar_label:"Auto assignment logic"},l=void 0,c={unversionedId:"platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic",id:"platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic",title:"Auto assignment of tickets to agents",description:"The auto-assignment feature automates the assignment of incoming tickets based on agents' capacity, availability, and expertise.",source:"@site/docs/platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic.md",sourceDirName:"platform_concepts/inbox/inbox-settings/automation",slug:"/platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic",draft:!1,tags:[],version:"current",frontMatter:{title:"Auto assignment of tickets to agents",sidebar_label:"Auto assignment logic"},sidebar:"platform_concepts",previous:{title:"Email ticketing configuration",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/emailticketing"},next:{title:"Sticky agent",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/stickyagent"}},u={},g=[{value:'<a name="function"></a> 1. Functioning of auto-assign',id:"-1-functioning-of-auto-assign",level:2},{value:'<a name="enable"></a> 2. Enable auto-assign in  Inbox',id:"-2-enable-auto-assign-in--inbox",level:2}],p={toc:g};function m(t){var e=t.components,n=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The auto-assignment feature automates the assignment of incoming tickets based on agents' capacity, availability, and expertise.\nWhen the Automatic ticket assignment toggle is enabled, tickets will get distributed automatically to your available agents through round-robin assignment."),(0,o.kt)("p",null,"In this article, you will learn:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#function"},"How does Auto assignment work?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#enable"},"How to enable auto-assignment in Inbox?"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-1-functioning-of-auto-assign"},(0,o.kt)("a",{name:"function"})," 1. Functioning of auto-assign"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is the Assignment logic?")),(0,o.kt)("p",null,"Three parameters dictate the email ticket assignment logic based on which the tickets will get assigned to the available agents, they are listed below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Agent availability"))),(0,o.kt)("p",null,"An agent within Inbox can be in any of the following statuses - Available, Busy, or Away.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the agent is on Available status, they will be automatically assigned new incoming tickets."),(0,o.kt)("li",{parentName:"ul"},"If the agent is either Busy or Away, they\u2019ll be not actively assigned to new tickets. That ticket will either be assigned to the next available agent or queued.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Click ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox#-4-default-agent-status"},"here"),", to know more about the difference between Busy and Away.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Last ticket assigned time"))),(0,o.kt)("p",null,"This presents the timestamp at which the agent was last assigned with a email ticket i.e the longest duration each agent has gone without getting a new ticket."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Concurrency"))),(0,o.kt)("p",null,"Each agent will have an upper limit for chats called Concurrency which explains the maximum number of concurrent chat tickets that the agent can be assigned, at any time."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When a new email ticket is raised (assuming it is raised within working hours), it will first fetch all the available agents in the group the ticket was raised for. It will not consider agents who have set their status to Busy or Away."),(0,o.kt)("li",{parentName:"ul"},"All the available agents will be sorted in the ascending order of their last ticket assigned time i.e the longest an agent has gone without getting a new ticket. Then the email ticket will be assigned to the first agent who has available space in their concurrency.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Sticky agent")),(0,o.kt)("p",{parentName:"admonition"},"The other type of assignment which does not consider any of the above parameters is ",(0,o.kt)("strong",{parentName:"p"},"Sticky agent"),"."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Sticky agent is a type of ticket assignment where the customers can connect to an agent, of their choice (agents they are familiar with/ have conversed with before)."),(0,o.kt)("li",{parentName:"ul"},"Sticky agent feature is useful in Industries where the customer and agent relationship is crucial."))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand Auto-assignment with an example")),(0,o.kt)("p",null,"Assume"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"A chat Ticket was raised at 10:00 AM\n")),(0,o.kt)("p",null,"At that instant, the agents have the following availability & concurrency settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Agent A = Status - Available\n\nAgent B = Status - Busy\n\nAgent C = Status - Available\n\nAgent D = Status - Away\n\nAgent E = Status - Available\n")),(0,o.kt)("p",null,"From the above agent list, only consider agents who are under available status."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Agent A\n\nAgent C\n\nAgent E\n")),(0,o.kt)("p",null,"Then, they will be rearranged based on descending order of the last ticket assigned time,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Agent C = The last ticket assigned was 30 mins before & Concurrency - 3/6\n\nAgent A = the last ticket assigned was 15 mins before & Concurrency - 4/6\n\nAgent E = the last ticket assigned was 10 mins before & Concurrency - 6/6\n")),(0,o.kt)("p",null,"The email ticket will be assigned to ",(0,o.kt)("strong",{parentName:"p"},"Agent C"),", since ",(0,o.kt)("strong",{parentName:"p"},"C")," is the first agent that has gone the longest without a new ticket assigned to them and has space in their concurrency (3 more left to their max concurrency which is 6)."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-2-enable-auto-assign-in--inbox"},(0,o.kt)("a",{name:"enable"})," 2. Enable auto-assign in  Inbox"),(0,o.kt)("p",null,"Follow the given steps to enable email ticket auto-assignment:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,o.kt)("strong",{parentName:"li"},"Settings"),"."),(0,o.kt)("li",{parentName:"ol"},"Search and select ",(0,o.kt)("strong",{parentName:"li"},"Auto Assignment"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/EAkPKUL.png",alt:null})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Enable the toggle.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/1StI1XM.png",alt:null})))}m.isMDXComponent=!0}}]);