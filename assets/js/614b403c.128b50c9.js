"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[50725],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,k=m["".concat(c,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(k,o(o({ref:t},l),{},{components:n})):r.createElement(k,o({ref:t},l))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1507:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"Chat Report Metrics explained",sidebar_label:"Chat metrics explained"},c=void 0,p={unversionedId:"platform_concepts/inbox/analytics-reports/reports/chats/chat-report-metrics",id:"platform_concepts/inbox/analytics-reports/reports/chats/chat-report-metrics",title:"Chat Report Metrics explained",description:"1. Average Response Time (Archive report)",source:"@site/docs/platform_concepts/inbox/analytics-reports/reports/chats/chat-report-metrics.md",sourceDirName:"platform_concepts/inbox/analytics-reports/reports/chats",slug:"/platform_concepts/inbox/analytics-reports/reports/chats/chat-report-metrics",permalink:"/docs/platform_concepts/inbox/analytics-reports/reports/chats/chat-report-metrics",draft:!1,tags:[],version:"current",frontMatter:{title:"Chat Report Metrics explained",sidebar_label:"Chat metrics explained"},sidebar:"platform_concepts",previous:{title:"Chat archives",permalink:"/docs/platform_concepts/inbox/analytics-reports/reports/chats/chat-archives-report"},next:{title:"Agent performance",permalink:"/docs/platform_concepts/inbox/analytics-reports/reports/tickets/ticket-agent-performance-report"}},l={},m=[{value:"1. Average Response Time (Archive report)",id:"1-average-response-time-archive-report",level:2},{value:"2. Average Response Time (Agent performance report)",id:"2-average-response-time-agent-performance-report",level:2},{value:"3. Average First Response Time",id:"3-average-first-response-time",level:2},{value:"4. Average Handling Time",id:"4-average-handling-time",level:2},{value:"5. User Wait time",id:"5-user-wait-time",level:2},{value:"6. Customer agent interactivity time",id:"6-customer-agent-interactivity-time",level:2},{value:"7. Spent time",id:"7-spent-time",level:2}],u={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-average-response-time-archive-report"},"1. Average Response Time (Archive report)"),(0,a.kt)("p",null,"It is the average time taken by the agent to respond to each message of the customer in a chat conversation. This metric is present in the Archives report. Response time is calculated for every agent response in a conversation. It is calculated by the following logic;"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"ART = Sum of time duration between end user\u2019s initial and agent\u2019s initial message divided by the number of replies in the conversation."))),(0,a.kt)("p",null,"Example conversation A,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"09:01:30 - Ticket created  \n09:02:00 - Agent    = [#1] Hi! How can I help you?\n09:02:15 - Customer = [#2] I\u2019m yet to receive my order and it was supposed to arrive 3 days before.\n09:02:30 - Agent    = [#3] Sure, I\u2019ll look into it\n09:02:32 - Agent    = [#4] Can you let me know your order id?\n09:02:45 - Customer = [#5] 123456789\n09:03:00 - Agent    = [#6] Thanks, just hold on till I fetch the order information\n09:03:15 - Agent    = [#7] Thanks for waiting, there have been some problems with the transportation. We\u2019ve now sent your order to a different vendor and it will reach you by today. Your new tracking id is 987654321.\n09:03:30 - Agent    = [#8] Regret your inconvenience\n09:03:45 - Customer = [#9] Sure thanks!\n09:04:00 - Agent    = [#10] Is there anything else you\u2019d like me to help you with?\n")),(0,a.kt)("p",null,"ART = (#3 - #2) + (#6 - #5) + (#10 - #9) / 3"),(0,a.kt)("p",null,"ART = (15s + 15s + 15s) / 3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ART = 00:00:15 ","[HH:MM:SS]")),(0,a.kt)("p",null,"Note: ART will be N/A if the user or the agent doesn\u2019t reply in the conversation"),(0,a.kt)("h2",{id:"2-average-response-time-agent-performance-report"},"2. Average Response Time (Agent performance report)"),(0,a.kt)("p",null,"It is the average time taken by the agent to respond to the user\u2019s message in all the conversations during the selected day. This metric is present in the Agent performance report."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Avg ART = Sum of Average response time of each ticket / No. of tickets"))),(0,a.kt)("p",null,"Suppose,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"An agent received 10 tickets in a day and this ART for each ticket stands as below;    \nTicket #1  - 00:01:00    \nTicket #2  - 00:01:00\nTicket #3  - 00:01:00    \nTicket #4  - 00:01:00\nTicket #5  - 00:01:00    \nTicket #6  - 00:01:00    \nTicket #7  - 00:01:00    \nTicket #8  - 00:01:00    \nTicket #9  - 00:01:00    \nTicket #10  - 00:01:00\n")),(0,a.kt)("p",null,"Then their ",(0,a.kt)("strong",{parentName:"p"},"ART for that day in the Agent Performance report is 00:01:00 ","[1 min]")),(0,a.kt)("h2",{id:"3-average-first-response-time"},"3. Average First Response Time"),(0,a.kt)("p",null,"First response time is the time taken by the agent to make the first response to the customer after a ticket is assigned to them. The average first response time is the average time taken by the agent to make the first response in all the tickets assigned to them that day"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Avg FRT = Sum of FRT of each ticket in the day / No. of the ticket during the day"))),(0,a.kt)("p",null,"From the example conversation above,"),(0,a.kt)("p",null,"The ticket got assigned to the agent at ",(0,a.kt)("strong",{parentName:"p"},"09:01:30")," and the agent sent the first response to the ticket at ",(0,a.kt)("strong",{parentName:"p"},"09:02:00")," after 30 secs. So the First response duration for the ticket was 30 secs,"),(0,a.kt)("p",null,"Suppose,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"An agent received 10 tickets in a day and the FRT for each ticket stands as below;\nTicket #1  - 00:00:30\nTicket #2  - 00:00:30\nTicket #3  - 00:00:30\nTicket #4  - 00:00:30\nTicket #5  - 00:00:30\nTicket #6  - 00:00:30\nTicket #7  - 00:00:30\nTicket #8  - 00:00:30\nTicket #9  - 00:00:30\nTicket #10  - 00:00:30\n")),(0,a.kt)("p",null,"Then their ",(0,a.kt)("strong",{parentName:"p"},"Avg FRT for that day in the Agent Performance report is 00:00:30 ","[30 sec]")),(0,a.kt)("h2",{id:"4-average-handling-time"},"4. Average Handling Time"),(0,a.kt)("p",null,"Handling time is the total time taken by the agent to resolve the ticket. Average handling time is the average time taken by the agent to resolve all the tickets assigned to them during that day"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Handling time of a ticket = Resolved time - Assigned time\nAvg HT = Sum of all (resolved time - assigned time) for all tickets / No. of tickets during the day"))),(0,a.kt)("p",null,"Suppose,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"An agent received 10 tickets in a day and the handling time for each ticket stands as below;\nTicket #1  - 5 mins\nTicket #2  - 5 mins\nTicket #3  - 5 mins\nTicket #4  - 5 mins\nTicket #5  - 5 mins\nTicket #6  - 5 mins\nTicket #7  - 5 mins\nTicket #8  - 5 mins\nTicket #9  - 5 mins\nTicket #10  - 5 mins\n")),(0,a.kt)("p",null,"Then their ",(0,a.kt)("strong",{parentName:"p"},"Avg Handling Time for that day in the Agent Performance report is 00:05:00 ","[5 min]")),(0,a.kt)("h2",{id:"5-user-wait-time"},"5. User Wait time"),(0,a.kt)("p",null,"User wait time is the time a customer waits in a QUEUE or OPEN state before an agent is assigned to the ticket. This metric provides insights into the operating effectiveness of the customer support team."),(0,a.kt)("p",null,"Example conversation B,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"10:00:00 - Customer raises a ticket\n10:00:00 - Ticket gets queued\n10:05:00 - Ticket gets assigned to an agent\n10:30:00 - Agent resolves the ticket\n")),(0,a.kt)("p",null,"  Here, the ",(0,a.kt)("strong",{parentName:"p"},"user wait time would be 00:05:00 ","[5 mins]",".")),(0,a.kt)("h2",{id:"6-customer-agent-interactivity-time"},"6. Customer agent interactivity time"),(0,a.kt)("p",null,"Customer agent interactivity is the total time duration in which both the parties - customer and the agent, chat in that conversation. It is basically the agent handling time of that ticket."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Customer agent inactivity time = Resolved time - Assigned time"))),(0,a.kt)("p",null,"Considering the example conversation B, the ",(0,a.kt)("strong",{parentName:"p"},"customer agent interactivity time would be 00:25:00 ","[25 mins]")),(0,a.kt)("h2",{id:"7-spent-time"},"7. Spent time"),(0,a.kt)("p",null,"It is the total time a customer spends right from creating a live agent ticket to getting their query resolved."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Spent time = User wait time + Customer agent interactivity time OR\nSpent time = Resolved time - Initialized time ","[ i,e Min(open, queued, assigned time)]"))),(0,a.kt)("p",null,"Considering the example conversation B, the ",(0,a.kt)("strong",{parentName:"p"},"spent time would be 00:30:00 ","[30 mins]")))}h.isMDXComponent=!0}}]);