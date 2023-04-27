"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[42917],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return h}});var n=a(67294);function s(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){s(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,s=function(t,e){if(null==t)return{};var a,n,s={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(s[a]=t[a]);return s}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(s[a]=t[a])}return s}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,s=t.mdxType,o=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),p=u(a),d=s,h=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return a?n.createElement(h,r(r({ref:e},m),{},{components:a})):n.createElement(h,r({ref:e},m))}));function h(t,e){var a=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[p]="string"==typeof t?t:s,r[1]=i;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57992:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),r=["components"],i={title:"Create & modify custom status for inbox agents",sidebar_label:"Custom status"},l=void 0,u={unversionedId:"platform_concepts/inbox/inbox-settings/workflows/custom-status",id:"platform_concepts/inbox/inbox-settings/workflows/custom-status",title:"Create & modify custom status for inbox agents",description:"Only Inbox admins can create and modify custom statuses.",source:"@site/docs/platform_concepts/inbox/inbox-settings/workflows/custom-status.md",sourceDirName:"platform_concepts/inbox/inbox-settings/workflows",slug:"/platform_concepts/inbox/inbox-settings/workflows/custom-status",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/custom-status",draft:!1,tags:[],version:"current",frontMatter:{title:"Create & modify custom status for inbox agents",sidebar_label:"Custom status"},sidebar:"platform_concepts",previous:{title:"Working hours",permalink:"/docs/platform_concepts/inbox/inbox-settings/team/chat_working_hours"},next:{title:"Custom fields",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields"}},m={},p=[{value:"1. Default status vs. custom status",id:"1-default-status-vs-custom-status",level:2},{value:'<a name="add"></a> 2. Add custom status',id:"-2-add-custom-status",level:2},{value:'<a name="modify"></a> 2.1 Edit/Delete custom status',id:"-21-editdelete-custom-status",level:3},{value:'<a name="report"></a> 3. Monitor agents custom status',id:"-3-monitor-agents-custom-status",level:2},{value:"Monitor custom status in reports",id:"monitor-custom-status-in-reports",level:4},{value:"Monitor custom status on the inbox monitor page",id:"monitor-custom-status-on-the-inbox-monitor-page",level:4}],c={toc:p};function d(t){var e=t.components,a=(0,s.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Only Inbox admins can create and modify custom statuses.")),(0,o.kt)("p",null,"In this article, you will learn:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#add"},"How to add custom status?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#modify"},"How to modify/delete custom status?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#report"},"How to view this data in reports?"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"1-default-status-vs-custom-status"},"1. Default status vs. custom status"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Default status"),"      "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Available"),", ",(0,o.kt)("strong",{parentName:"p"},"Busy")," and ",(0,o.kt)("strong",{parentName:"p"},"Away")," are the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/agentstatuses"},"default statuses")," that are present by default. These statuses cannot be modified/deleted."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/SjzhsdB.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Purpose of custom status")),(0,o.kt)("p",null,"On the custom status settings, admins can create a custom status for the agents to suit the business operations to accommodate live chat requests."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With this, agents can set their status depending on this availability (from available to busy or other options)."),(0,o.kt)("li",{parentName:"ul"},"Customizing the status also helps to provide visibility into what agents are doing on a day-to-day basis."),(0,o.kt)("li",{parentName:"ul"},"Admins can decide the statuses that are beneficial for the agents to effectively handle chats.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use cases of custom status")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If the agent has decides go for lunch, 1-1.30 PM can be set as ",(0,o.kt)("strong",{parentName:"li"},"Lunch")," (custom status) by the agent so that the incoming tickets don't get auto assigned within those 30 minutes. Also, admins can know that the agent has taken 30min lunch. "),(0,o.kt)("li",{parentName:"ol"},"If the agent is attending a meeting, status can be set to ",(0,o.kt)("strong",{parentName:"li"},"Internal meeting")," (custom status). Tickets won't be assigned to the agents and admin can track the time spent by that agent attending meetings. ")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-2-add-custom-status"},(0,o.kt)("a",{name:"add"})," 2. Add custom status"),(0,o.kt)("p",null,"You can create a custom status and map it to a default status(Away/Busy). With this, the admins can track why (reason like Lunch, documentation, etc.) the agents were Away/Busy. Follow the given steps to add/modify/delete custom status:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Inbox")," > ",(0,o.kt)("strong",{parentName:"p"},"Settings"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Search and select ",(0,o.kt)("strong",{parentName:"p"},"Custom status"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/mBYdAim.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"+Add status"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a new status label and select a behavior."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Away"),": When all your agents logout in away, by default new incoming tickets will be queued. For example: Lunch, Short breaks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Busy"),": When all your agents logout in busy, by default new incoming tickets will be missed. For example: Feedbacks, Documentation. To view these tickets, agents must open the Missed chats tab on the chat screen. ")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/f5UsCZI.png",alt:null})))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The above logic of chats moving to Queue/Missed will be applicable if ",(0,o.kt)("strong",{parentName:"p"},"All")," the agents are not available.",(0,o.kt)("br",{parentName:"p"}),"\n","If there is any agent from the team whose status is Available, the incoming chat will be assigned to them. ")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The custom status will be visible along with the default agent status."),(0,o.kt)("img",{src:"https://i.imgur.com/TwbGuGz.png",alt:"drawing",width:"60%"}))),(0,o.kt)("h3",{id:"-21-editdelete-custom-status"},(0,o.kt)("a",{name:"modify"})," 2.1 Edit/Delete custom status"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Inbox")," > ",(0,o.kt)("strong",{parentName:"p"},"Settings"),". Search and select ",(0,o.kt)("strong",{parentName:"p"},"Custom status"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the 3 dots (menu icon).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Edit"),"/",(0,o.kt)("strong",{parentName:"p"},"Delete"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/wyivIJJ.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm the action."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-3-monitor-agents-custom-status"},(0,o.kt)("a",{name:"report"})," 3. Monitor agents custom status"),(0,o.kt)("p",null,"Supervisors and Admins download reports and monitor the time in which Agent had set status to a custom status. "),(0,o.kt)("h4",{id:"monitor-custom-status-in-reports"},"Monitor custom status in reports"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Analytics > Reports"),". "),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/chats/chat-agent-performance-report"},"Chat"),"/",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/tickets/ticket-agent-performance-report"},"Email")," tab and ",(0,o.kt)("strong",{parentName:"li"},"Agent performance report"),". "),(0,o.kt)("li",{parentName:"ol"},"In the downloaded report, you can find default and custom status columns. ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Agent Online Duration (hh:mm:ss)\tThe total time the agent has set the status to AVAILABLE that day\t"),(0,o.kt)("li",{parentName:"ul"},"Agent Busy (hh:mm:ss)\tThe total time the agent has set the status to BUSY that day\t"),(0,o.kt)("li",{parentName:"ul"},"Agent Away (hh:mm:ss)\tThe total time the agent has set the status to AWAY that day\t"),(0,o.kt)("li",{parentName:"ul"},"Agent Lunch (hh:mm:ss) The total time the agent has set the status to Lunch that day (Custom status)")))),(0,o.kt)("h4",{id:"monitor-custom-status-on-the-inbox-monitor-page"},"Monitor custom status on the inbox monitor page"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Monitor > Team"),". "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Custom status")," column will be available under Agents.\n",(0,o.kt)("img",{parentName:"li",src:"https://i.imgur.com/llwTb7H.png",alt:null}))))}d.isMDXComponent=!0}}]);