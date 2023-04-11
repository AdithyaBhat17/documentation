"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[665],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,u=m["".concat(s,".").concat(k)]||m[k]||h[k]||i;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9808:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={title:"Service-level agreement (SLA) policies for email tickets",sidebar_label:"Service-level agreement"},s=void 0,p={unversionedId:"platform_concepts/inbox/tickets/slaintro",id:"platform_concepts/inbox/tickets/slaintro",title:"Service-level agreement (SLA) policies for email tickets",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/inbox/tickets/slaintro.md",sourceDirName:"platform_concepts/inbox/tickets",slug:"/platform_concepts/inbox/tickets/slaintro",permalink:"/docs/platform_concepts/inbox/tickets/slaintro",draft:!1,tags:[],version:"current",frontMatter:{title:"Service-level agreement (SLA) policies for email tickets",sidebar_label:"Service-level agreement"},sidebar:"platform_concepts",previous:{title:"Bulk actions",permalink:"/docs/platform_concepts/inbox/tickets/bulkaction"},next:{title:"Contacts",permalink:"/docs/platform_concepts/inbox/contacts"}},c={},m=[{value:'<a name="1"></a> 1. Service level agreement for email tickets',id:"-1-service-level-agreement-for-email-tickets",level:2},{value:"1.1 View SLA time log",id:"11-view-sla-time-log",level:3},{value:'<a name="2"></a> 2. SLA filters',id:"-2-sla-filters",level:2},{value:'<a name="3"></a> 3. SLA reports',id:"-3-sla-reports",level:2},{value:"3.1 Monitor SLA in the Agent performance report",id:"31-monitor-sla-in-the-agent-performance-report",level:3},{value:"3.2 Monitor SLA in Ticket archive report",id:"32-monitor-sla-in-ticket-archive-report",level:3}],h={toc:m};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this article, you will learn: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1"},"Overview of SLA for email tickets")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2"},"How to use filters to view SLAs")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#3"},"How to analyze reports related to SLAs"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-1-service-level-agreement-for-email-tickets"},(0,i.kt)("a",{name:"1"})," 1. Service level agreement for email tickets"),(0,i.kt)("p",null,"A service level agreement (SLA) is a contract between your organisation and your customers, defining the types and standards of services that are offered.\nSLAs lay out the metrics by which a service is measured, and remedies or penalties to be followed when the agreed-on service levels are not achieved."),(0,i.kt)("p",null,"These SLAs are set for email tickets on the Inbox settings page."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"By default, there is no SLA applied to the email tickets. SLAs must be active on the settings page. "),(0,i.kt)("li",{parentName:"ul"},"After the configuration, SLA time logs will be available for all the email tickets that are created via the email channel (it will not be applicable for the email tickets created manually by any agents/admins). "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"First response time(FRT)"),", ",(0,i.kt)("strong",{parentName:"li"},"Resolution time(RT)")," and ",(0,i.kt)("strong",{parentName:"li"},"Every response time(ERT)")," are the SLA metrics monitored for all the tickets. ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For more details on how to set up and configure an SLA, read ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/sla"},"SLA settings"),". ")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"11-view-sla-time-log"},"1.1 View SLA time log"),(0,i.kt)("p",null,"To view the SLA time log, follow these steps: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("strong",{parentName:"p"},"Inbox")," > ",(0,i.kt)("strong",{parentName:"p"},"Tickets"),". ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open any ticket that was auto-assigned (and not created manually). SLAs will be applicable to particular tickets for which Group/Tag the SLA is configured.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Hover over ",(0,i.kt)("strong",{parentName:"p"},"SLA log"),". You can see the SLA log (SLA achieved/breeched) by the respective agent for that particular ticket. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"SLA details are also updated on the ",(0,i.kt)("strong",{parentName:"p"},"Activity log")," in the bottom right corner. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/66ffsP8.png",alt:null})," ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"SLA reminders/escalations/nudges are highlighted on the ",(0,i.kt)("strong",{parentName:"p"},"Tickets")," page along with the ticket details for each ticket. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/lIQv4tq.png",alt:null})))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-2-sla-filters"},(0,i.kt)("a",{name:"2"})," 2. SLA filters"),(0,i.kt)("p",null,"In the ",(0,i.kt)("em",{parentName:"p"},"ticket list view"),", you can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/searchandfilter#--3-filters-email-tickets"},"filter tickets")," based on the SLA time remaining. Follow the steps below: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the email tickets screen, click ",(0,i.kt)("strong",{parentName:"p"},"Filters"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/5ZmfOqh.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("strong",{parentName:"p"},"Response/resolution due by")," and choose your preferred filter: ",(0,i.kt)("strong",{parentName:"p"},"Resolution due by, First response due by, Next response due by"),". For example: "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Resolution due by")," (1 hour): This filters and displays all the tickets whose SLA would be breached unless the agent resolves the ticket within the mentioned time (next 1 hour). "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"First response due by")," (20 minutes): This filters and displays all the tickets whose SLA would be breached if the agent does not send a first response to the created ticket within the mentioned time (next 20 minutes). "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Next response due by")," (custom - 14/02/2023): This filters and displays all the open tickets whose SLA would be breached if the agent does not send a response to the ticket in-progress within the mentioned time (within 14/02/2023).")),(0,i.kt)("img",{src:"https://i.imgur.com/RN1tmD8.png",alt:"drawing",width:"50%"}))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Apply filter"),". "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"You can select the resolution time from the drop-down list or add a custom date to filter the response due time. ")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/nZO4N5E.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Search results will display the tickets which are filtered for a particular resolution time. For example, if ",(0,i.kt)("strong",{parentName:"p"},"First response due by")," is selected as ",(0,i.kt)("strong",{parentName:"p"},"Overdue"),", all the tickets that have not been replied to will be listed out. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can clear old filters by clicking ",(0,i.kt)("strong",{parentName:"p"},"Clear filters")," and adding new ones. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/YjAmBwQ.png",alt:null})))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"-3-sla-reports"},(0,i.kt)("a",{name:"3"})," 3. SLA reports"),(0,i.kt)("p",null,"You can download ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/tickets/ticket-agent-performance-report"},"Agent performance")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/tickets/ticket-archive-report"},"Ticket archive")," reports for email tickets and monitor SLA related fields. "),(0,i.kt)("h3",{id:"31-monitor-sla-in-the-agent-performance-report"},"3.1 Monitor SLA in the Agent performance report"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"These SLA metrics are calculated for agents (not tickets).")),(0,i.kt)("p",null,"The following are the metrics available in the Agent performance report for SLAs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Total SLAs triggers"),": Total count of SLAs ","[achievements + breach]"," applicable to the agent across all tickets on that date. "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Total SLA achievements"),": Total number of times the agent has successfully achieved the applicable SLAs in all the tickets on that date."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Total SLA Breaches"),": Total number of times the agent has breached the applicable SLAs in all the tickets on that date."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"FRT SLA achievements"),": Total number of times the agent has met the set FRT SLAs in all the tickets on that day."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"FRT SLA Breaches"),": Total number of times the agent has failed to meet the set FRT SLAs in all the tickets on that date ","[i.e of all the tickets where FRT was sent, how many were achieved]",".",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"If the ticket has already breached the FRT SLA even before getting assigned to the agent ","[i.e., when it is in OPEN for too long or transferred from another agent]"," that breach will not be counted on the agent's account."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Response time SLA achievements"),": Total number of times the agent has met the set response SLAs in all the tickets they responded to that date."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Response time SLA Breaches"),":Total number of times the agent has met the response SLAs in all the tickets they responded to that date."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Resolution time SLA achievements"),": Total number of times the agent has met the RT SLA in all the tickets they resolved on that date."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Resolution time SLA Breaches"),": Total number of times the agent has breached the RT SLA in all the tickets they resolved on that date.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"32-monitor-sla-in-ticket-archive-report"},"3.2 Monitor SLA in Ticket archive report"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In case a policy or a single SLA is not configured for a ticket all the corresponding values will be null.")),(0,i.kt)("p",null,"The following are the metrics available in the Ticket archive report for SLAs:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Total_sla_triggers"),": Total numbers of SLA events that were scheduled for the ticket."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Total_sla_breaches"),": Total SLA breaches that happened on this ticket"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Total_sla_achievement"),": Total SLAs achieved on this ticket"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Sla_achievement_percentage"),": (Achieved_sla / Total_sla) x 100"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"First_response_time_sla"),": In the case of SLA achievement, this is the value of the time left before the breach. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the SLA was 30 minutes and the agent replied within 10 minutes, ",(0,i.kt)("strong",{parentName:"li"},"First_response_time_sla")," will have +20:00. "),(0,i.kt)("li",{parentName:"ul"},"If the SLA was 30 minutes and the agent took 40 minutes to reply, ",(0,i.kt)("strong",{parentName:"li"},"First_response_time_sla")," will be -10:00 "),(0,i.kt)("li",{parentName:"ul"},"If the SLA was not configured, this value will be null."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Every_response_time_sla"),": (Total ERT achievement/ Total ERT SLA count)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Resolution_time_sla"),": In case of SLA achievement, this is the value of the time left before the breach.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the SLA was 30 minutes and the agent replied within 10 minutes, ",(0,i.kt)("strong",{parentName:"li"},"Every_response_time_sla")," will be +20:00."),(0,i.kt)("li",{parentName:"ul"},"If the SLA was 30 minutes and the agent took 40 minutes, ",(0,i.kt)("strong",{parentName:"li"},"Every_response_time_sla")," will be -10:00.")))))}k.isMDXComponent=!0}}]);