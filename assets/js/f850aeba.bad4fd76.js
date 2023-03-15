"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[868],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"Conversation Logs",sidebar_label:"Conversation Logs"},s=void 0,c={unversionedId:"platform_concepts/studio/analyze/chat-logs",id:"platform_concepts/studio/analyze/chat-logs",title:"Conversation Logs",description:"1. Introduction",source:"@site/docs/platform_concepts/studio/analyze/chat-logs.md",sourceDirName:"platform_concepts/studio/analyze",slug:"/platform_concepts/studio/analyze/chat-logs",permalink:"/docs/platform_concepts/studio/analyze/chat-logs",draft:!1,tags:[],version:"current",frontMatter:{title:"Conversation Logs",sidebar_label:"Conversation Logs"},sidebar:"platform_concepts",previous:{title:"Event",permalink:"/docs/platform_concepts/studio/events/event-hub"},next:{title:"Training Performance",permalink:"/docs/platform_concepts/studio/analyze/training-performance"}},p={},u=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1 Session",id:"11-session",level:3},{value:"1.2 Key features",id:"12-key-features",level:3},{value:"2. Filters conversations",id:"2-filters-conversations",level:2},{value:"3. Label conversations",id:"3-label-conversations",level:2},{value:"3. Flag conversations",id:"3-flag-conversations",level:2},{value:"4. Troubleshoot bot flow",id:"4-troubleshoot-bot-flow",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,r.kt)("p",null,"Conversation Logs contain interactions of the user with your bot and responses the user received from the bot.  It monitors your bot conversations and automatically tags problematic conversations.  "),(0,r.kt)("p",null,"It helps you better analyze drop-offs, understand user perceptions, and optimise your flows accordingly. For example, you can review conversations to understand if your users are interacting with your bot as intended. It also enhances online chat with a persistent record of information exchanged and decisions reached."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/muGI3Km.png",alt:null})),(0,r.kt)("p",null,"The logs are stored for six months. You can keep an active store post in which logs move to the cold store and remain there till the validity of the contract. These logs can be archived on demand."),(0,r.kt)("h3",{id:"11-session"},"1.1 Session"),(0,r.kt)("p",null,"The Yellow.ai platform considers each conversation with a user as a session. Each user has a unique ID called a UID. For each UID, a conversation log is created for all sessions to analyse the complete context. Some logs hold data of upto 5 days of conversations and sometimes there are 3 logs for the conversation with one user."),(0,r.kt)("p",null,"See the session for each app in the following table -"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"App"),(0,r.kt)("th",{parentName:"tr",align:null},"Session Duration"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Web app"),(0,r.kt)("td",{parentName:"tr",align:null},"24 hours")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whatsapp"),(0,r.kt)("td",{parentName:"tr",align:null},"24 hours")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The conversation logs are updated everyday at 21:00 LT.")),(0,r.kt)("h3",{id:"12-key-features"},"1.2 Key features"),(0,r.kt)("p",null,"The following are some key features of the Yellow AI\u2019s Conversation Logs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"Auto-tagging of conversations")),":\nThere are several predefined tags created based on certain rules. The system tries to identify if there is any problem in a conversation and associates a relevant tag. For example, Long response time, Missing bot response time, Abuse, Unused quick replies, Fallback time exceeded, Human takeover, and unidentified. A conversation can have more than one tag.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/uH5lt1i.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Quick labeling")),":\nYou can make use of quick labeling to easily categorize conversations and provide better context to it.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Filter conversations")),":\nThis makes your life easy when there are too many conversations in the log. You can choose to see specific types of conversations using the various predefined filters. For example, see conversations having a specific flow,  logged on a specific date range, involving specific nodes, drop-offs. and more. To know more, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1_ThTAqcZo62EayDfH4vV90zZwXZJ0fId/edit#heading=h.hsg2jg34bnxe"},"here"),"."))),(0,r.kt)("h2",{id:"2-filters-conversations"},"2. Filters conversations"),(0,r.kt)("p",null,"As time passes, the conversation log keeps increasing. Filtering your conversations helps you get more specific conversations you would need."),(0,r.kt)("p",null,"To filter the conversations: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Conversation logs tab, click ",(0,r.kt)("strong",{parentName:"p"},"Filters"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1VqbO6y.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the filter that you want to apply and select the required option(s). Refer to the following table to know how to use each filter.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Apply filter."))),(0,r.kt)("img",{src:"https://i.imgur.com/l1VrFlT.png",width:"300"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Filter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"View conversations of a specific date range. Choose the desired date range using the calendar boxes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Source"),(0,r.kt)("td",{parentName:"tr",align:null},"View conversations of a specific channel. For example, Yellow.ai, Skype, WhatsApp, Facebook etc. Choose the desired source from the drop-down list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tags"),(0,r.kt)("td",{parentName:"tr",align:null},"View specific tagged conversations. There are some predefined tags associated with the conversations automatically according to the configured rules. Select your preferred tags from the list.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flagged Conversation"),(0,r.kt)("td",{parentName:"tr",align:null},"View either flagged or unflagged conversations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Labels"),(0,r.kt)("td",{parentName:"tr",align:null},"View conversations having specific labels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Journeys"),(0,r.kt)("td",{parentName:"tr",align:null},"View conversations that have a specific journey. You can also filter by specific steps and drop-offs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter conversations containing specific nodes. For example, you can view all conversations that have a phone number. Select multiple nodes if required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Drop-off"),(0,r.kt)("td",{parentName:"tr",align:null},"View all dropped (incomplete) conversations across all flows. Select All and apply the filter.")))),(0,r.kt)("h2",{id:"3-label-conversations"},"3. Label conversations"),(0,r.kt)("p",null,"Over time, there could be a range of conversations logging in the system - from complaints, product queries, or feedback. To keep a track of different conversations, you can label them appropriately. Eventually, you will get better insights on the intentions of a specific set of users. You can work on optimizing your bot better."),(0,r.kt)("p",null,"To label a conversation -"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the conversation for which you want to add Label."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Label")," box to see the list of available labels. Either select your preferred label from the existing list or type a new name in the box and press ",(0,r.kt)("strong",{parentName:"li"},"Enter"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/GIC3Mmm.png",alt:null})),(0,r.kt)("h2",{id:"3-flag-conversations"},"3. Flag conversations"),(0,r.kt)("p",null,"You can flag conversations that you want to revisit later. To see only your flagged conversations, use ",(0,r.kt)("strong",{parentName:"p"},"Filters")," > ",(0,r.kt)("strong",{parentName:"p"},"Flagged Conversation"),"."),(0,r.kt)("p",null,"To flag a conversation - "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the Studio page, click ",(0,r.kt)("strong",{parentName:"li"},"Analysis")," > ",(0,r.kt)("strong",{parentName:"li"},"Conversation logs"),"."),(0,r.kt)("li",{parentName:"ol"},"Navigate to the desired conversation and click on it. You will see the conversation details."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("img",{src:"https://i.imgur.com/W85He8x.png",width:"12"})," icon to turn black."),(0,r.kt)("li",{parentName:"ol"},"Close the widget once done.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/esbBRoG.png",alt:null}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To unflag a conversation, click on the flag again.")),(0,r.kt)("h2",{id:"4-troubleshoot-bot-flow"},"4. Troubleshoot bot flow"),(0,r.kt)("p",null,"Now that there are many conversations logged in the system, it becomes easy for you to choose specific conversation(s) using the filters and flags available."),(0,r.kt)("p",null,"To fix a problem or optimize your bot - "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the desired conversation and click on it to see the entire conversation. You can see at what interaction the issue was identified (auto-tagging)."),(0,r.kt)("li",{parentName:"ol"},"Go to Studio, open the flow and make the necessary changes to it."),(0,r.kt)("li",{parentName:"ol"},"Test the bot to see if your changes are reflecting.")),(0,r.kt)("img",{src:"https://i.imgur.com/ZLINu9R.png",width:"400"}),(0,r.kt)("p",null,"Consider the following example where the system has identified ",(0,r.kt)("em",{parentName:"p"},"Long response time")," during the interaction with the user. Go back to your flow, identify the reason, and make the necessary changes. Test the bot to see if your intended changes are reflecting."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/xFx9i5M.png",alt:null})))}m.isMDXComponent=!0}}]);