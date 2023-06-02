"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[60760],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(n),m=i,g=k["".concat(s,".").concat(m)]||k[m]||u[m]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[k]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45413:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return k}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"Change status, Assign/Reassign, and Merge tickets in bulk",sidebar_label:"Bulk actions"},s=void 0,c={unversionedId:"platform_concepts/inbox/tickets/bulkaction",id:"platform_concepts/inbox/tickets/bulkaction",title:"Change status, Assign/Reassign, and Merge tickets in bulk",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/inbox/tickets/bulkaction.md",sourceDirName:"platform_concepts/inbox/tickets",slug:"/platform_concepts/inbox/tickets/bulkaction",permalink:"/docs/platform_concepts/inbox/tickets/bulkaction",draft:!1,tags:[],version:"current",frontMatter:{title:"Change status, Assign/Reassign, and Merge tickets in bulk",sidebar_label:"Bulk actions"},sidebar:"platform_concepts",previous:{title:"Search and filter",permalink:"/docs/platform_concepts/inbox/tickets/searchandfilter"},next:{title:"Service-level agreement",permalink:"/docs/platform_concepts/inbox/tickets/slaintro"}},p={},k=[{value:'<a name="1"></a>  Change status of tickets in bulk',id:"--change-status-of-tickets-in-bulk",level:2},{value:"Bulk resolve (bulk close) / Bulk reopen email tickets",id:"bulk-resolve-bulk-close--bulk-reopen-email-tickets",level:4},{value:'<a name="11"></a>  Assign tickets to a group/agent in bulk',id:"--assign-tickets-to-a-groupagent-in-bulk",level:2},{value:'<a name="2"></a>  Merge multiple tickets into one ticket',id:"--merge-multiple-tickets-into-one-ticket",level:2}],u={toc:k};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article, you will learn: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1"},"How to change the status of multiple tickets?")," "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#11"},"How to assign tickets to a group/agent?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2"},"How to merge multiple tickets into one ticket?"))),(0,r.kt)("p",null,"An Inbox agent's daily operations may involve performing the same task multiple times. For example, transferring a certain number of tickets to another agent or changing the status of multiple tickets.\nTo simplify the repetitive tasks performed by agents, bulk actions can be used by selecting multiple tickets and performing a common action on them. Tickets can be merged into one ticket and assigned to one agent. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Not more than 20 tickets can be selected at once for any of the bulk actions.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"--change-status-of-tickets-in-bulk"},(0,r.kt)("a",{name:"1"}),"  Change status of tickets in bulk"),(0,r.kt)("p",null,"To select tickets in bulk and perform bulk actions on them, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to your account. Open ",(0,r.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,r.kt)("strong",{parentName:"li"},"Tickets"),"."),(0,r.kt)("li",{parentName:"ol"},"You can select multiple tickets by clicking the boxes on the left of each ticket.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/UDeF3YU.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"After selecting the tickets, the ",(0,r.kt)("strong",{parentName:"li"},"Bulk action")," button will be available on the top right of the page. Click ",(0,r.kt)("strong",{parentName:"li"},"Bulk action"),".\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/LJNlovs.png",alt:null}),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can deselect the tickets by clicking ",(0,r.kt)("strong",{parentName:"p"},"Clear selection"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/JjPBSkF.png",alt:null})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Bulk action")," can be used to change the status of the tickets.")),(0,r.kt)("h4",{id:"bulk-resolve-bulk-close--bulk-reopen-email-tickets"},"Bulk resolve (bulk close) / Bulk reopen email tickets"),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Change status"),". "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the status (Resolved, Pending, On-hold, or In-progress) you want to apply to the selected tickets."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Resolved")," to close email tickets in bulk. Tickets in pending, on hold and in progress status can be resolved (closed). "),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"In progress")," to reopen the resolved (closed) tickets in bulk. You can change the status to in progress even if your tickets are in pending/on hold. "),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"On hold/ Pending")," to change the email ticket status in bulk. "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Change"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there are any custom fields configured for these tickets, you will be prompted to fill in the new custom field values and these values will be applicable to all the selected tickets.       "),(0,r.kt)("img",{src:"https://i.imgur.com/3hBCa5X.png",alt:"drawing",width:"50%"}))),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You cannot change the ticket status to ",(0,r.kt)("strong",{parentName:"p"},"Open"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"--assign-tickets-to-a-groupagent-in-bulk"},(0,r.kt)("a",{name:"11"}),"  Assign tickets to a group/agent in bulk"),(0,r.kt)("p",null,"You can select multiple tickets and assign them to one agent /group. Follow the steps below: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to your account. Open ",(0,r.kt)("strong",{parentName:"p"},"Inbox")," > ",(0,r.kt)("strong",{parentName:"p"},"Tickets"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can select multiple tickets by clicking the boxes on the left of each ticket.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/UDeF3YU.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After selecting the tickets, the ",(0,r.kt)("strong",{parentName:"p"},"Bulk action")," button will be available on the top right of the page. Click ",(0,r.kt)("strong",{parentName:"p"},"Bulk action"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/LJNlovs.png",alt:null})),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can deselect the tickets by clicking ",(0,r.kt)("strong",{parentName:"p"},"Clear selection"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/JjPBSkF.png",alt:null})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bulk action")," can be used to change the status of the tickets.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Assign"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Select the Group, Agent, or Agent of a particular group to that you want to transfer the selected tickets."),(0,r.kt)("li",{parentName:"ul"},"If there are any ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields"},"custom fields")," configured to reassign tickets, you must enter the custom fields values. "),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Assign"),".       ")),(0,r.kt)("img",{src:"https://i.imgur.com/eEC0VDa.png",alt:"drawing",width:"50%"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"--merge-multiple-tickets-into-one-ticket"},(0,r.kt)("a",{name:"2"}),"  Merge multiple tickets into one ticket"),(0,r.kt)("p",null,"Multiple tickets from the same customer can be merged into a single ticket and it can be resolved by one agent. To merge tickets, follow the steps below: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Merge")," after selecting the tickets to be merged.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/bDkLVyR.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can choose a ticket to be a primary ticket. For example, there are 2 tickets - one is to find a resolution for the case - 'Order received was not the order placed' and the second is to -'Provide refund for the order mismatch'. These 2 tickets can be merged into one and the agent can inform the customer that the pickup has been initiated to provide the correct product and the refund will be given only after canceling the order.  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you choose ",(0,r.kt)("strong",{parentName:"p"},"Add secondary recipients to CC"),", all the other ticket's email addresses will be copied to the primary ticket. Any communication further will be CC'd to those email IDs. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Continue"),". "),(0,r.kt)("img",{src:"https://i.imgur.com/TH95aKm.png",alt:"drawing",width:"80%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Merge"),"."),(0,r.kt)("img",{src:"https://i.imgur.com/fqJpdCc.png",alt:"drawing",width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ticket selected as primary will be retained and the other tickets will be merged into the selected primary ticket."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can click on the secondary ticket numbers to view those old tickets. "),(0,r.kt)("li",{parentName:"ul"},"Any further emails will contain CC's to the respective email IDs. ")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/L1oUnM6.png",alt:null})))))}m.isMDXComponent=!0}}]);