"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6924],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9641:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),i=["components"],r={title:"Chat section and different types of chats",sidebar_label:"Getting started with live chat"},l=void 0,c={unversionedId:"platform_concepts/inbox/chats/getstartedwithlivechat",id:"platform_concepts/inbox/chats/getstartedwithlivechat",title:"Chat section and different types of chats",description:"Previously, live chats were referred to/termed as chat tickets. Please bear with the us while we make changes to our product and documentation.",source:"@site/docs/platform_concepts/inbox/chats/getstartedwithlivechat.md",sourceDirName:"platform_concepts/inbox/chats",slug:"/platform_concepts/inbox/chats/getstartedwithlivechat",permalink:"/docs/platform_concepts/inbox/chats/getstartedwithlivechat",draft:!1,tags:[],version:"current",frontMatter:{title:"Chat section and different types of chats",sidebar_label:"Getting started with live chat"},sidebar:"platform_concepts",previous:{title:"Monitor inbox",permalink:"/docs/platform_concepts/inbox/monitor"},next:{title:"Chat screen & user details",permalink:"/docs/platform_concepts/inbox/chats/chatscreen"}},h={},p=[{value:"1. Types of chats",id:"1-types-of-chats",level:2},{value:"1.1 My Chats",id:"11-my-chats",level:3},{value:"1.2 Active Chats",id:"12-active-chats",level:3},{value:"1.3 Queued Chats",id:"13-queued-chats",level:3},{value:"1.4 Open Chats",id:"14-open-chats",level:3},{value:"1.5 Resolved Chats",id:"15-resolved-chats",level:3},{value:"1.6 Missed Chats",id:"16-missed-chats",level:3},{value:"1.7 Bot Messages",id:"17-bot-messages",level:3}],u={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Previously, ",(0,s.kt)("strong",{parentName:"p"},"live chats")," were referred to/termed as ",(0,s.kt)("strong",{parentName:"p"},"chat tickets"),". Please bear with the us while we make changes to our product and documentation. ")),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The Chats section covers all the aspects of synchronous real-time conversations between a bot user and the agent. It is an omnichannel dashboard that supports chats on more than 15 different ",(0,s.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview"},"channels"),".  "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Any incoming live chat (from any channel) will be assigned to a particular inbox agent only when the inbox agent is ",(0,s.kt)("strong",{parentName:"li"},"Available"),".")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Know more on default agent statuses ",(0,s.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/agentstatuses"},"here"),".",(0,s.kt)("br",{parentName:"p"}),"\n","Know more on chat assignment logic ",(0,s.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/assignmentlogic"},"here"))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Live chats are assigned only to an ",(0,s.kt)("strong",{parentName:"p"},"Inbox agent")," (although ",(0,s.kt)("strong",{parentName:"p"},"Inbox admin")," will have the permission to see and contribute to  the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/roleaccess"},"operations")," in Inbox)."),(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"For an inbox admin, all the chats/tickets will be accessible.  "),(0,s.kt)("li",{parentName:"ul"},"For an inbox agent, only the chats/tickets assigned to them will be accessible."))),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The chat section screen is divided into 3 parts:"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/oSPem4b.png",alt:null})),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Section"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen"},"Chat conversation, resolve and transfer chat")),(0,s.kt)("td",{parentName:"tr",align:null},"View the chat. Reply to the user. Make notes of user conversation (summary) to help other agents understand the conversation quicker. Transfer the chat to another agent. Download the chat. ",(0,s.kt)("br",null)," Configure and understand how the ",(0,s.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/videocall"},"video calling")," works for live chats.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatsearch"},"Search and filter section")),(0,s.kt)("td",{parentName:"tr",align:null},"Choose the type of chat you want to see. Filter and search for specific chats. Perform bulk actions like transfer/resolve/reopene etc. by simple selecting multiple chats.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#-2-user-details"},"User details")),(0,s.kt)("td",{parentName:"tr",align:null},"Learn user details such as location, name, phone number, order ID, device details, etc. Add other agents to collaborate on this chat, to resolve the query quicker. Transfer or resolve the live chat.")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The above sub-sections are explained in detail in the upcoming articles. ")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"1-types-of-chats"},"1. Types of chats"),(0,s.kt)("p",null,"When a live chat is raised by the bot user (requesting to connect with an agent), that chat will be displayed under this section. "),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Only the ",(0,s.kt)("strong",{parentName:"p"},"My chats")," tab gets updated in real-time as and when the conversation occurs.",(0,s.kt)("br",{parentName:"p"}),"\n","Other chats are not updated unless the page is refreshed.")),(0,s.kt)("p",null,"Inbox classifies live chats into 7 different types, explained below: "),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/WP8TpCE.png",alt:null}),"    "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"To learn how to build a flow that will raise a ticket to a live agent, click ",(0,s.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/inboxdemo"},"here"),".",(0,s.kt)("br",{parentName:"p"}),"\n","To view chats, Open Inbox > Chats. Select from the Chat types dropdown. ")),(0,s.kt)("h3",{id:"11-my-chats"},"1.1 My Chats"),(0,s.kt)("p",null,"If you are an Inbox agent and your status is available, the live chats raised and assigned to you will be displayed under My chats. My chats will differ from agent to agent because they can only see the live chat assigned specifically to them. "),(0,s.kt)("h3",{id:"12-active-chats"},"1.2 Active Chats"),(0,s.kt)("p",null,"This chat option will be available/visible only to the users who are inbox ",(0,s.kt)("strong",{parentName:"p"},"Supervisor/Admin")," (Overall), where they can see all the active live chats that are being handled by the agents. Admins can monitor all the ongoing live chat from here."),(0,s.kt)("h3",{id:"13-queued-chats"},"1.3 Queued Chats"),(0,s.kt)("p",null,"If either of the below conditions is true, the live chat raised will not be assigned to any agent in particular and it will be found under queued chats (only if ",(0,s.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue"},"chat queues")," is enabled from the settings)."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If agent availability is ",(0,s.kt)("strong",{parentName:"li"},"busy")," or ",(0,s.kt)("strong",{parentName:"li"},"away"),"."),(0,s.kt)("li",{parentName:"ul"},"If the chat ",(0,s.kt)("strong",{parentName:"li"},"concurrency")," for each of the agents is full.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"For example:\nA limit is set that each agent can handle 5 live chats and there are 2 agents. 10 live chats are raised and they are in the assigned state.  In this case, when an 11th live chat is raised and the chat queues are enabled, it will be queued and found under queued chats.")),(0,s.kt)("p",null,"Users will be notified with the position in which these live chats are in the queue.\nWhen any agent's status becomes available or the concurrency is changed, the live chat gets assigned automatically to an agent without any manual intervention. "),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"Resolve queued live chat manually")),(0,s.kt)("p",{parentName:"admonition"},"Advanced customers can have a dedicated supervisor who can keep a look at all the live chats. When a high-priority live chat moves to the queued list, the supervisor can assign it to any agent who can take immediate action.  ")),(0,s.kt)("h3",{id:"14-open-chats"},"1.4 Open Chats"),(0,s.kt)("p",null,"When a live chat is incoming and there are no inbox agents available (inside or outside ",(0,s.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/chat_working_hours"},"working hours"),") to take this live chat, Open chats are created.\nOpen chats will be automatically assigned to the agents when they log in/ become available when ",(0,s.kt)("strong",{parentName:"p"},"Auto assign tickets")," on ",(0,s.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat"},"Offline handling setting")," is enabled. "),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Generally, customers cannot request for live chats outside working hours unless ",(0,s.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat"},"offline handling")," is enabled.")),(0,s.kt)("h3",{id:"15-resolved-chats"},"1.5 Resolved Chats"),(0,s.kt)("p",null,"All the live chats that are solved or ",(0,s.kt)("strong",{parentName:"p"},"closed")," by the agents will be found under resolved chats.\nAdmins can see all the resolved chats, while the agents can see only their resolved chats."),(0,s.kt)("h3",{id:"16-missed-chats"},"1.6 Missed Chats"),(0,s.kt)("p",null,"This is the ultimate fallback. When a chat doesn't belong to any other category of chats, it becomes a missed chat.\nThere are multiple ways in which a chat can move under missed chats. For example:  "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"When the Inbox settings hamper the experience of chats going into other categories. "),(0,s.kt)("li",{parentName:"ol"},"When the Raise ticket node (flow) is not configured correctly."),(0,s.kt)("li",{parentName:"ol"},"When Chat queue is not enabled in the Inbox setting, the incoming live chat that must be available under Queued chats moves into missed chats. "),(0,s.kt)("li",{parentName:"ol"},"When Offline handling is not enabled in the Inbox setting, the incoming live chat that must be available under Open chats moves into missed chats. ")),(0,s.kt)("p",null,"When any raise ticket action fails due to Inbox settings that can be controlled (for example, if offline handling is disabled, group queue is not configured, etc.), the chat will be available in missed chats."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The chats do not move into missed chats for cases that are not controllable (like the bot server is down, technical error, bot shut down).")),(0,s.kt)("h3",{id:"17-bot-messages"},"1.7 Bot Messages"),(0,s.kt)("p",null,"All the conversations that happen on the bot will be visible here (for admins and agents). This is an entire conversation, irrespective of the live chat request raised.\nThe purpose of this section is to monitor the bot responses. If the conversation is not going as expected, agents can take the control over from the bot and converse with the user. "),(0,s.kt)("blockquote",null,(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"For advance functionalities, you can see the ",(0,s.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs"},"Conversation logs")," in ",(0,s.kt)("strong",{parentName:"li"},"Studio"),". For example: To check if the bot is responding correctly, you can check the conversation logs.             "),(0,s.kt)("li",{parentName:"ul"},"If you have only Inbox agents/admins access consult your bot admin for Studio access."))))}d.isMDXComponent=!0}}]);