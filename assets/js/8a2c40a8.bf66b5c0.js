"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6308],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76989:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"SLA settings",sidebar_label:"SLA settings"},s=void 0,p={unversionedId:"platform_concepts/inbox/inbox-settings/workflows/sla",id:"platform_concepts/inbox/inbox-settings/workflows/sla",title:"SLA settings",description:"A service-level agreement (SLA) defines the level of service expected by a customer from a supplier. It lays out the metrics by which that service is measured, and the remedies or penalties, if any, if the agreed-on service levels are not achieved. Usually, SLAs are between companies and external suppliers, but they may also be between two departments within a company.",source:"@site/docs/platform_concepts/inbox/inbox-settings/workflows/sla.md",sourceDirName:"platform_concepts/inbox/inbox-settings/workflows",slug:"/platform_concepts/inbox/inbox-settings/workflows/sla",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/sla",draft:!1,tags:[],version:"current",frontMatter:{title:"SLA settings",sidebar_label:"SLA settings"},sidebar:"platform_concepts",previous:{title:"Custom fields",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields"},next:{title:"Queue handling",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue"}},m={},c=[{value:"Add Reminders to remind agents before the SLA due time",id:"add-reminders-to-remind-agents-before-the-sla-due-time",level:4},{value:"Add Escalation to send escalations mails when the SLA is violated.",id:"add-escalation-to-send-escalations-mails-when-the-sla-is-violated",level:4}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A service-level agreement (SLA) defines the level of service expected by a customer from a supplier. It lays out the metrics by which that service is measured, and the remedies or penalties, if any, if the agreed-on service levels are not achieved. Usually, SLAs are between companies and external suppliers, but they may also be between two departments within a company."),(0,i.kt)("p",null,"Most service providers have standard SLAs reflecting various levels of service at different prices."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inbox Admins")," can define new SLAs, add conditions, and set targets for the inbox agents responsible for addressing the tickets. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"First SLA policy that gets applied to a ticket will not change at any point (even if the group/tag is changed) because SLAs are end customer facing. "),(0,i.kt)("li",{parentName:"ul"},"Two SLAs policies cannot be applied to a single ticket. "),(0,i.kt)("li",{parentName:"ul"},"The priority of assignment will be Top \u2192 Down as the policies appear in the UI. "))),(0,i.kt)("p",null,"To configure SLAs, follow the below steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,i.kt)("strong",{parentName:"li"},"Settings"),".  "),(0,i.kt)("li",{parentName:"ol"},"Search and select ",(0,i.kt)("strong",{parentName:"li"},"Service level agreement (SLA)"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/qAM0tUG.png",alt:null})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"All the available SLAs are listed on this page. Use the State toggle next to the SLA names to enable or disable an SLA."),(0,i.kt)("li",{parentName:"ol"},"Existing SLAs can be edited or deleted by clicking the menu next to the SLA name and selecting ",(0,i.kt)("strong",{parentName:"li"},"Edit")," or ",(0,i.kt)("strong",{parentName:"li"},"Delete"),". ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Ls5lfpG.png",alt:null})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"To create a new SLA, click ",(0,i.kt)("strong",{parentName:"li"},"+Create new policy"),". ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/qtn1eUy.png",alt:null})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Add ",(0,i.kt)("strong",{parentName:"li"},"Policy name")," and ",(0,i.kt)("strong",{parentName:"li"},"Policy description"),". Click ",(0,i.kt)("strong",{parentName:"li"},"Create"),". ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/dbUzC3g.png",alt:null})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By default, the SLA defined on this page will apply to all email tickets. If you want this SLA to apply only to certain ",(0,i.kt)("strong",{parentName:"p"},"Group")," or ",(0,i.kt)("strong",{parentName:"p"},"Tag"),": "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add another condition"),".\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/DKPPI94.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Group"),"/ ",(0,i.kt)("strong",{parentName:"p"},"Tag"),". ",(0,i.kt)("strong",{parentName:"p"},"Group")," / ",(0,i.kt)("strong",{parentName:"p"},"Tag")," names will be listed in the drop-down, and select the required value.\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/9aaLlRz.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can add multiple conditions by clicking on ",(0,i.kt)("strong",{parentName:"p"},"Add another condition"),". This SLA will be applicable if both conditions hold (AND condition). For example, in the above screenshot, SKmart SLA will be applied if the ticket belongs to the Payments group and is tagged as critical.  ")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"SLA targets are separated based on priority. You can set targets that the team should meet, or the SLA gets breached. You can set the Timings(Minutes/Hours/Days) in the normal calendar hours for High, Medium, and Low priority tickets. Agents will be notified by enabling the ",(0,i.kt)("strong",{parentName:"p"},"Escalations")," and ",(0,i.kt)("strong",{parentName:"p"},"Reminder")," toggle. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Resolution time"),": The total time taken by the agent to provide the resolution. It is calculated based on the time the ticket was opened (or assigned if it was directly assigned) to the time it was set as resolved."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"First response time"),": The time taken by an agent to send a first reply to the ticket that was created."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Every response time"),": The time taken for an agent to respond to a ticket after the end user/customer has replied. ")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/WkmTF39.png",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Setting the status of a ticket as ",(0,i.kt)("strong",{parentName:"li"},"Pending"),"/ ",(0,i.kt)("strong",{parentName:"li"},"On-hold")," will pause the SLA timers \x10for ",(0,i.kt)("strong",{parentName:"li"},"Resolution time")," and ",(0,i.kt)("strong",{parentName:"li"},"Every response time"),". Resolution time will be calculated by excluding the time spent in pending status. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reopening")," a ticket will resume the SLA timer from when it was paused. New resolution time will be calculated by including the time taken previously to resolve the ticket. "),(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("strong",{parentName:"li"},"Priority")," of the ticket is changed, SLA will also change based on the priority. Before changing the SLA, if there was a ",(0,i.kt)("strong",{parentName:"li"},"breach of policy"),", it will be recorded and will be present as part of reports. Breaches will not be back-dated. "))),(0,i.kt)("h4",{id:"add-reminders-to-remind-agents-before-the-sla-due-time"},"Add Reminders to remind agents before the SLA due time"),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},"Multiple reminders can be added to a single SLA policy to approach the agent or relevant stakeholders when the SLA rule breach approaches.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can select when the remainder must be sent. Select ",(0,i.kt)("strong",{parentName:"li"},"First response/Next response/Resolution time")),(0,i.kt)("li",{parentName:"ul"},"Add when the remainder must be sent by mentioning it next to ",(0,i.kt)("strong",{parentName:"li"},"approaches in"),", it is the representative of how much time before the reminder will be sent. "),(0,i.kt)("li",{parentName:"ul"},"The reminder will be sent as an email to the assigned agent, added agents/admins, or any email ID mentioned in the list. ")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/y0btViB.png",alt:null})),(0,i.kt)("h4",{id:"add-escalation-to-send-escalations-mails-when-the-sla-is-violated"},"Add Escalation to send escalations mails when the SLA is violated."),(0,i.kt)("ol",{start:10},(0,i.kt)("li",{parentName:"ol"},"Adding escalation will send an email to the mentioned list when an SLA is breached or after a selected time the SLA is breached.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can select when the escalation mail must be sent. Select ",(0,i.kt)("strong",{parentName:"li"},"First response/Next response/Resolution time")),(0,i.kt)("li",{parentName:"ul"},"Add when the escalation must be sent by mentioning it next to ",(0,i.kt)("strong",{parentName:"li"},"escalate in"),"."),(0,i.kt)("li",{parentName:"ul"},"Add the list of email IDs that this escalation must be sent to. ")))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/MXhiy4B.png",alt:null})),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Update")," to update all the changes. ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/gqt2tAy.png",alt:null})))}u.isMDXComponent=!0}}]);