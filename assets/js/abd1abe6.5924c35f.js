"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[51469],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(n),d=r,k=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(k,s(s({ref:e},u),{},{components:n})):a.createElement(k,s({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[p]="string"==typeof t?t:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78919:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={title:"Email ticketing statuses",sidebar_label:"Email ticket statuses",featured:!0},o=void 0,c={unversionedId:"platform_concepts/inbox/tickets/emailticketstatus",id:"platform_concepts/inbox/tickets/emailticketstatus",title:"Email ticketing statuses",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/inbox/tickets/emailticketstatus.md",sourceDirName:"platform_concepts/inbox/tickets",slug:"/platform_concepts/inbox/tickets/emailticketstatus",permalink:"/docs/platform_concepts/inbox/tickets/emailticketstatus",draft:!1,tags:[],version:"current",frontMatter:{title:"Email ticketing statuses",sidebar_label:"Email ticket statuses",featured:!0},sidebar:"platform_concepts",previous:{title:"Setup and configuration",permalink:"/docs/platform_concepts/inbox/tickets/setupandconfig"},next:{title:"Manual ticket creation",permalink:"/docs/platform_concepts/inbox/tickets/manualticket"}},u={},p=[{value:'<a name="1"></a> 1. Predefined email ticket status',id:"-1-predefined-email-ticket-status",level:2}],m={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this article, you will learn: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1"},"The pre-defined statuses in email ticketing")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2"},"Transitioning of statuses from different views"))),(0,i.kt)("p",null,"These statuses will affect everything from SLA timers to workflows, as an increment to this users will be allowed to create their own statuses to accommodate more complex use cases but the system-defined statuses remain the same. "),(0,i.kt)("h2",{id:"-1-predefined-email-ticket-status"},(0,i.kt)("a",{name:"1"})," 1. Predefined email ticket status"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The following are the ",(0,i.kt)("strong",{parentName:"li"},"default statuses"),": ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Open"),(0,i.kt)("td",{parentName:"tr",align:null},"When a ticket is raised and lies unassigned it states is open, open is a system-assigned state, and the ticket cannot be manually moved to an open state once removed from it.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"In Progress"),(0,i.kt)("td",{parentName:"tr",align:null},"In-progress means it is currently assigned to agent and the agent is yet to send a reply/respond back to the customer or the agent is working on the ticket")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pending"),(0,i.kt)("td",{parentName:"tr",align:null},"This status signifies that the agent is waiting on a response from the person who requested the ticket. If a ticket is in this status once the user replies the ticket shall automatically be moved to the in-progress state.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"On-hold"),(0,i.kt)("td",{parentName:"tr",align:null},"This status signifies that the ticket is on hold as it is awaiting the response from a third party ie. not the person requesting the ticket. For example, if the agent is blocked or waiting for  information from the internal team,  the ticket will be put under ON-HOLD status so that the agent's support metrics are not impacted by the waiting time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Resolved"),(0,i.kt)("td",{parentName:"tr",align:null},"This status states that the solution is provided by the agent hence this ticket is marked as closed.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Transition")," from one status to another: ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Initial status"),(0,i.kt)("th",{parentName:"tr",align:null},"Final status"),(0,i.kt)("th",{parentName:"tr",align:null},"Action"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Open"),(0,i.kt)("td",{parentName:"tr",align:null},"Any status"),(0,i.kt)("td",{parentName:"tr",align:null},"This action is irreversible. Once the status is changed from open, a ticket cannot be marked as new again.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Open"),(0,i.kt)("td",{parentName:"tr",align:null},"Assigned"),(0,i.kt)("td",{parentName:"tr",align:null},"When the Agent assigns the ticket to self or someone else, the states changes from open to assigned.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pending"),(0,i.kt)("td",{parentName:"tr",align:null},"Assigned"),(0,i.kt)("td",{parentName:"tr",align:null},"When a new reply comes from the requester, the status will be set to Assigned.")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If a user replies back on the same thread and the ticket is resolved, the ticket will be reopened and the status will change to in-progress (and it will be assigned to the same agent it was previously assigned). ")))}d.isMDXComponent=!0}}]);