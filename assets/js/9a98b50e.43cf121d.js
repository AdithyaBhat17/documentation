"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[3696],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98333:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Default agent statuses",sidebar_label:"Default agent statuses"},l=void 0,c={unversionedId:"platform_concepts/inbox/inbox_setup/agentstatuses",id:"platform_concepts/inbox/inbox_setup/agentstatuses",title:"Default agent statuses",description:"An admin cannot change the status of any agent.",source:"@site/docs/platform_concepts/inbox/inbox_setup/agentstatuses.md",sourceDirName:"platform_concepts/inbox/inbox_setup",slug:"/platform_concepts/inbox/inbox_setup/agentstatuses",permalink:"/docs/platform_concepts/inbox/inbox_setup/agentstatuses",draft:!1,tags:[],version:"current",frontMatter:{title:"Default agent statuses",sidebar_label:"Default agent statuses"},sidebar:"platform_concepts",previous:{title:"Inbox role access explained",permalink:"/docs/platform_concepts/inbox/inbox_setup/roleaccess"},next:{title:"Auto assignment of chats/tickets",permalink:"/docs/platform_concepts/inbox/inbox_setup/assignmentlogic"}},u={},p=[],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An admin cannot change the status of any agent.")),(0,o.kt)("p",null,"Inbox offers three default agent statuses that you can choose to define the availability. These statuses are the foundation based on which the incoming chats/tickets are assigned to agents."),(0,o.kt)("p",null,"The default statuses are as follows:  "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Available")),(0,o.kt)("td",{parentName:"tr",align:null},"The new incoming chats/tickets will only be assigned to agents who have set their status to Available. The chats/tickets will be assigned based on their concurrency.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Busy")),(0,o.kt)("td",{parentName:"tr",align:null},"No new chats/tickets will be assigned to agents who have set their status to be Busy. These chats/tickets will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats will be converted as Missed chats and stored in Inbox for reference. Ex: When you are working on important issues/escalations, Documentation work, Internal meetings/discussions, etc.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Away")),(0,o.kt)("td",{parentName:"tr",align:null},"No new chats/tickets will be assigned to agents who have set their status to be Away. These chats/tickets will be queued in their respective group and then automatically assigned to agents when they make themselves Available. If the group queue is not enabled then these chats/tickets will be converted as Missed chats and stored in your account for reference. Ex: Recess, Bio break, Lunch break.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Offline")),(0,o.kt)("td",{parentName:"tr",align:null},"When an agent logs out or goes away from the Inbox module, they\u2019ll be treated as Offline and no new conversation will be assigned to that agent even if they are present inside the yellow.ai platform in any other module like Insights, Studio, etc.")))),(0,o.kt)("hr",null),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Difference between Busy & Away")),(0,o.kt)("p",{parentName:"admonition"},"For an Inbox agent, ",(0,o.kt)("strong",{parentName:"p"},"Busy")," and ",(0,o.kt)("strong",{parentName:"p"},"Away")," are both identical in function but when you log out after changing your status to ",(0,o.kt)("strong",{parentName:"p"},"Away"),", your status will not be ",(0,o.kt)("strong",{parentName:"p"},"Offline")," it will remain as ",(0,o.kt)("strong",{parentName:"p"},"Away"),". This is to avoid missing out on the chats/tickets raised by the end users when all the agents have logged off within working hours (for example, for a lunch break)."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Admins can manually transfer the chats/tickets to an agent who has set themselves to ",(0,o.kt)("strong",{parentName:"li"},"Busy/Away"),". This manual transfer operation will not consider the agent's current concurrency and will assign tickets even if their concurrency is full.")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",{parentName:"admonition"},"Consider a scenario wherein, all the agents break for lunch from 1 PM - 2 PM. If they are considered ",(0,o.kt)("strong",{parentName:"p"},"Offline")," during that time, the chats/tickets raised during the time will be completely missed unless ",(0,o.kt)("strong",{parentName:"p"},"Offline chats")," are ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat"},"enabled"),".  Even if they are enabled, those chats/tickets will only be captured in Open status and will not be assigned to agents immediately.\nNow if they are considered as ",(0,o.kt)("strong",{parentName:"p"},"Away"),", those chats/tickets will not be missed irrespective of whether Offline chats are enabled or not, and the chats/tickets will be queued, then automatically assigned to agents after 2 PM.")))}d.isMDXComponent=!0}}]);