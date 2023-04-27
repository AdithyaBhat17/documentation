"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[63696],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,d=p["".concat(l,".").concat(f)]||p[f]||h[f]||s;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={title:"Default agent statuses",sidebar_label:"Default agent statuses"},l=void 0,c={unversionedId:"platform_concepts/inbox/inbox_setup/agentstatuses",id:"platform_concepts/inbox/inbox_setup/agentstatuses",title:"Default agent statuses",description:"An admin cannot change the status of any agent.",source:"@site/docs/platform_concepts/inbox/inbox_setup/agentstatuses.md",sourceDirName:"platform_concepts/inbox/inbox_setup",slug:"/platform_concepts/inbox/inbox_setup/agentstatuses",permalink:"/docs/platform_concepts/inbox/inbox_setup/agentstatuses",draft:!1,tags:[],version:"current",frontMatter:{title:"Default agent statuses",sidebar_label:"Default agent statuses"},sidebar:"platform_concepts",previous:{title:"Email vs. Chat tickets",permalink:"/docs/platform_concepts/inbox/inbox_setup/emailvschat"},next:{title:"Auto assignment of chats & emails",permalink:"/docs/platform_concepts/inbox/inbox_setup/assignmentlogic"}},u={},p=[{value:"Difference between Busy and Away status",id:"difference-between-busy-and-away-status",level:3}],h={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"An admin cannot change the status of any agent.")),(0,s.kt)("p",null,"Inbox offers three default agent statuses that you can choose to define the availability. These statuses are the foundation based on which the incoming chats/tickets are assigned to agents."),(0,s.kt)("p",null,"The default statuses are as follows:  "),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Status"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Available")),(0,s.kt)("td",{parentName:"tr",align:null},"The new incoming chats/tickets will only be assigned to agents who have set their status to Available. The chats/tickets will be assigned based on their concurrency.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Busy")),(0,s.kt)("td",{parentName:"tr",align:null},"No new chats/tickets will be assigned to agents who have set their status to be Busy. These chats/tickets will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats will be converted as Missed chats and stored in Inbox for reference. Ex: When you are working on important issues/escalations, Documentation work, Internal meetings/discussions, etc.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Away")),(0,s.kt)("td",{parentName:"tr",align:null},"No new chats/tickets will be assigned to agents who have set their status to be Away. These chats/tickets will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats/tickets will be converted as Missed chats and stored in your account for reference. Ex: Recess, Bio break, Lunch break.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"Offline")),(0,s.kt)("td",{parentName:"tr",align:null},"When an agent logs out or goes away from the Inbox module, they\u2019ll be treated as Offline and no new conversation will be assigned to that agent even if they are present inside the yellow.ai platform in any other module like Insights, Studio, etc.")))),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"difference-between-busy-and-away-status"},"Difference between Busy and Away status"),(0,s.kt)("p",null,"For an Inbox agent, ",(0,s.kt)("strong",{parentName:"p"},"Busy")," and ",(0,s.kt)("strong",{parentName:"p"},"Away")," are both identical in function but when you log out after changing your status to ",(0,s.kt)("strong",{parentName:"p"},"Away"),", your status will not be ",(0,s.kt)("strong",{parentName:"p"},"Offline")," it will remain as ",(0,s.kt)("strong",{parentName:"p"},"Away"),". This is to avoid missing out on the chats/tickets raised by the end users when all the agents have logged off within working hours (for example, for a lunch break)."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Admins can manually transfer the chats/tickets to an agent who has set themselves to ",(0,s.kt)("strong",{parentName:"li"},"Busy/Away"),". This manual transfer operation will not consider the agent's current concurrency and will assign tickets even if their concurrency is full.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"Consider a scenario wherein, all the agents break for lunch from 1 PM - 2 PM. If they are considered ",(0,s.kt)("strong",{parentName:"p"},"Offline")," during that time, the chats/tickets raised during the time will be completely missed unless ",(0,s.kt)("strong",{parentName:"p"},"Offline chats")," are ",(0,s.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat"},"enabled"),".  Even if they are enabled, those chats/tickets will only be captured in Open status and will not be assigned to agents immediately.\nNow if they are considered as ",(0,s.kt)("strong",{parentName:"p"},"Away"),", those chats/tickets will not be missed irrespective of whether Offline chats are enabled or not, and the chats/tickets will be queued, then automatically assigned to agents after 2 PM."))}f.isMDXComponent=!0}}]);