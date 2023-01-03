"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[1469],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var o=a.createContext({}),c=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return a.createElement(o.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(n),m=i,k=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(k,s(s({ref:e},u),{},{components:n})):a.createElement(k,s({ref:e},u))}));function k(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[p]="string"==typeof t?t:i,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78919:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),s=["components"],l={title:"Email ticketing statuses",sidebar_label:"Email ticket statuses",featured:!0},o=void 0,c={unversionedId:"platform_concepts/inbox/tickets/emailticketstatus",id:"platform_concepts/inbox/tickets/emailticketstatus",title:"Email ticketing statuses",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/inbox/tickets/emailticketstatus.md",sourceDirName:"platform_concepts/inbox/tickets",slug:"/platform_concepts/inbox/tickets/emailticketstatus",permalink:"/docs/platform_concepts/inbox/tickets/emailticketstatus",draft:!1,tags:[],version:"current",frontMatter:{title:"Email ticketing statuses",sidebar_label:"Email ticket statuses",featured:!0},sidebar:"platform_concepts",previous:{title:"Overview, setup & configuration",permalink:"/docs/platform_concepts/inbox/tickets/setupandconfig"},next:{title:"Manual ticket creation",permalink:"/docs/platform_concepts/inbox/tickets/manualticket"}},u={},p=[{value:'<a name="1"></a> 1. Predefined email ticket status',id:"-1-predefined-email-ticket-status",level:2},{value:'<a name="2"></a> 2. Status transition from different views',id:"-2-status-transition-from-different-views",level:2},{value:"2.1 Ticket list view",id:"21-ticket-list-view",level:3},{value:"2.2 Ticket details view",id:"22-ticket-details-view",level:3}],d={toc:p};function m(t){var e=t.components,n=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article, you will learn: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1"},"The pre-defined statuses in email ticketing")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2"},"Transitioning of statuses from different views"))),(0,r.kt)("p",null,"These statuses will affect everything from SLA timers to workflows, as an increment to this users will be allowed to create their own statuses to accommodate more complex use cases but the system-defined statuses remain the same. "),(0,r.kt)("h2",{id:"-1-predefined-email-ticket-status"},(0,r.kt)("a",{name:"1"})," 1. Predefined email ticket status"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The following are the ",(0,r.kt)("strong",{parentName:"li"},"default statuses"),": ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Open"),(0,r.kt)("td",{parentName:"tr",align:null},"When a ticket is raised and lies unassigned it states is open, open is a system-assigned state, and the ticket cannot be manually moved to an open state once removed from it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In Progress"),(0,r.kt)("td",{parentName:"tr",align:null},"This status signifies that the ticket is assigned to an agent and or is being worked upon, this status simply signifies that the agent is actively working on the ticket.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pending"),(0,r.kt)("td",{parentName:"tr",align:null},"This status signifies that the agent is waiting on a response from the person who requested the ticket. If a ticket is in this status once the user replies the ticket shall automatically be moved to the assigned state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"On-hold"),(0,r.kt)("td",{parentName:"tr",align:null},"This ticket signifies that the ticket is on hold as it is awaiting the response from a third party ie. not the person requesting the ticket.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resolved"),(0,r.kt)("td",{parentName:"tr",align:null},"This status states that the solution is provided by the agent hence this ticket is marked as closed.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Transition")," from one status to another: ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Initial status"),(0,r.kt)("th",{parentName:"tr",align:null},"Final status"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Open"),(0,r.kt)("td",{parentName:"tr",align:null},"Any status"),(0,r.kt)("td",{parentName:"tr",align:null},"This action is irreversible. Once the status is changed from open, a ticket cannot be marked as new again.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Open"),(0,r.kt)("td",{parentName:"tr",align:null},"Assigned"),(0,r.kt)("td",{parentName:"tr",align:null},"When the Agent assigns the ticket to self or someone else, the states changes from open to assigned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pending"),(0,r.kt)("td",{parentName:"tr",align:null},"Assigned"),(0,r.kt)("td",{parentName:"tr",align:null},"When a new reply comes from the requester, the status will be set to Assigned.")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"If a user replies back on the same thread and the ticket is resolved, the ticket will be set to assigned and will be ",(0,r.kt)("strong",{parentName:"li"},"assigned")," (and it will be assigned to the same agent it was previously assigned). "),(0,r.kt)("li",{parentName:"ul"},"If the agent profile is unavailable/the assignment fails:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ticket is set to assigned.  "),(0,r.kt)("li",{parentName:"ul"},"Status is set to open."))))),(0,r.kt)("h2",{id:"-2-status-transition-from-different-views"},(0,r.kt)("a",{name:"2"})," 2. Status transition from different views"),(0,r.kt)("h3",{id:"21-ticket-list-view"},"2.1 Ticket list view"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If an agent creates a ticket and the ticket is assigned to him, the ticket is created and the agent will be directed to the ",(0,r.kt)("strong",{parentName:"li"},"ticket details view"),"."),(0,r.kt)("li",{parentName:"ul"},"If an agent creates a ticket and the ticket is not assigned to him, the ticket is created and the agent will be directed to the ",(0,r.kt)("strong",{parentName:"li"},"ticket list view"),"."),(0,r.kt)("li",{parentName:"ul"},"If the agent creates a ticket and sets the status to ",(0,r.kt)("strong",{parentName:"li"},"Resolved"),"/",(0,r.kt)("strong",{parentName:"li"},"Pending"),"/",(0,r.kt)("strong",{parentName:"li"},"on-hold"),", the ticket is created and the agent will be directed to the ",(0,r.kt)("strong",{parentName:"li"},"ticket list view"),". "),(0,r.kt)("li",{parentName:"ul"},"If the agent creates an unassigned ticket, new ticket status is assigned and the agent will be directed to the ",(0,r.kt)("strong",{parentName:"li"},"ticket detail view"),". "),(0,r.kt)("li",{parentName:"ul"},"If the agent creates a ticket that is unassigned and sets the status to ",(0,r.kt)("strong",{parentName:"li"},"Resolved"),"/",(0,r.kt)("strong",{parentName:"li"},"Pending"),"/",(0,r.kt)("strong",{parentName:"li"},"On-hold"),", the ticket is created and the agent will be directed to the ",(0,r.kt)("strong",{parentName:"li"},"ticket list view"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/RAO9y0C.png",alt:null})),(0,r.kt)("h3",{id:"22-ticket-details-view"},"2.2 Ticket details view"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When an agent sends from the respective ticket page, the agent will remain on the page (view mode). "),(0,r.kt)("li",{parentName:"ul"},"When an agent sends a reply and sets the status in ticket details as ",(0,r.kt)("strong",{parentName:"li"},"Resolved"),"/ ",(0,r.kt)("strong",{parentName:"li"},"Pending"),"/ ",(0,r.kt)("strong",{parentName:"li"},"Hold"),", the ticket status will be updated and the agent will be redirected back to his ticket list view. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/31nUXNV.png",alt:null})))}m.isMDXComponent=!0}}]);