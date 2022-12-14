(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{439:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(456)),i=["components"],l={title:"Conversation Logs",sidebar_label:"Conversation Logs"},s={unversionedId:"platform_concepts/studio/analyze/chat-logs",id:"platform_concepts/studio/analyze/chat-logs",isDocsHomePage:!1,title:"Conversation Logs",description:"1. Introduction",source:"@site/docs/platform_concepts/studio/analyze/chat-logs.md",slug:"/platform_concepts/studio/analyze/chat-logs",permalink:"/docs/platform_concepts/studio/analyze/chat-logs",version:"current",sidebar_label:"Conversation Logs",sidebar:"platform_concepts",previous:{title:"Events",permalink:"/docs/platform_concepts/studio/events/event-hub"},next:{title:"Regression Tests on Cloud",permalink:"/docs/cookbooks/studio/regressiontest"}},c=[{value:"1. Introduction",id:"1-introduction",children:[{value:"1.1 Session",id:"11-session",children:[]},{value:"1.2 Key features",id:"12-key-features",children:[]}]},{value:"2. Filters conversations",id:"2-filters-conversations",children:[]},{value:"3. Label conversations",id:"3-label-conversations",children:[]},{value:"3. Flag conversations",id:"3-flag-conversations",children:[]},{value:"4. Troubleshoot bot flow",id:"4-troubleshoot-bot-flow",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(r.b)("p",null,"Conversation Logs contain interactions of the user with your bot and responses the user received from the bot.  It monitors your bot conversations and automatically tags problematic conversations.  "),Object(r.b)("p",null,"It helps you better analyze drop-offs, understand user perceptions, and optimise your flows accordingly. For example, you can review conversations to understand if your users are interacting with your bot as intended. It also enhances online chat with a persistent record of information exchanged and decisions reached."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/muGI3Km.png",alt:null})),Object(r.b)("h3",{id:"11-session"},"1.1 Session"),Object(r.b)("p",null,"The Yellow.ai platform considers each conversation with a user as a session. Each user has a unique ID called a UID. For each UID, a conversation log is created for all sessions to analyse the complete context. Some logs hold data of upto 5 days of conversations and sometimes there are 3 logs for the conversation with one user."),Object(r.b)("p",null,"See the session for each app in the following table -"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"App"),Object(r.b)("th",{parentName:"tr",align:null},"Session Duration"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Web app"),Object(r.b)("td",{parentName:"tr",align:null},"24 hours")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Whatsapp"),Object(r.b)("td",{parentName:"tr",align:null},"24 hours")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The conversation logs are updated everyday at 21:00 LT."))),Object(r.b)("h3",{id:"12-key-features"},"1.2 Key features"),Object(r.b)("p",null,"The following are some key features of the Yellow AI\u2019s Conversation Logs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"Auto-tagging of conversations")),":\nThere are several predefined tags created based on certain rules. The system tries to identify if there is any problem in a conversation and associates a relevant tag. For example, Long response time, Missing bot response time, Abuse, Unused quick replies, Fallback time exceeded, Human takeover, and unidentified. A conversation can have more than one tag.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/uH5lt1i.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Quick labeling")),":\nYou can make use of quick labeling to easily categorize conversations and provide better context to it.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Filter conversations")),":\nThis makes your life easy when there are too many conversations in the log. You can choose to see specific types of conversations using the various predefined filters. For example, see conversations having a specific flow,  logged on a specific date range, involving specific nodes, drop-offs. and more. To know more, see ",Object(r.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1_ThTAqcZo62EayDfH4vV90zZwXZJ0fId/edit#heading=h.hsg2jg34bnxe"},"here"),"."))),Object(r.b)("h2",{id:"2-filters-conversations"},"2. Filters conversations"),Object(r.b)("p",null,"As time passes, the conversation log keeps increasing. Filtering your conversations helps you get more specific conversations you would need."),Object(r.b)("p",null,"To filter the conversations: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the Conversation logs tab, click ",Object(r.b)("strong",{parentName:"p"},"Filters"),".\n",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/1VqbO6y.png",alt:null}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to the filter that you want to apply and select the required option(s). Refer to the following table to know how to use each filter.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click Apply filter."))),Object(r.b)("img",{src:"https://i.imgur.com/l1VrFlT.png",width:"300"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Filter"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Date"),Object(r.b)("td",{parentName:"tr",align:null},"View conversations of a specific date range. Choose the desired date range using the calendar boxes.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Source"),Object(r.b)("td",{parentName:"tr",align:null},"View conversations of a specific channel. For example, Yellow.ai, Skype, WhatsApp, Facebook etc. Choose the desired source from the drop-down list.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Tags"),Object(r.b)("td",{parentName:"tr",align:null},"View specific tagged conversations. There are some predefined tags associated with the conversations automatically according to the configured rules. Select your preferred tags from the list.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Flagged Conversation"),Object(r.b)("td",{parentName:"tr",align:null},"View either flagged or unflagged conversations.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Labels"),Object(r.b)("td",{parentName:"tr",align:null},"View conversations having specific labels.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Journeys"),Object(r.b)("td",{parentName:"tr",align:null},"View conversations that have a specific journey. You can also filter by specific steps and drop-offs.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Nodes"),Object(r.b)("td",{parentName:"tr",align:null},"Filter conversations containing specific nodes. For example, you can view all conversations that have a phone number. Select multiple nodes if required.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Drop-off"),Object(r.b)("td",{parentName:"tr",align:null},"View all dropped (incomplete) conversations across all flows. Select All and apply the filter.")))),Object(r.b)("h2",{id:"3-label-conversations"},"3. Label conversations"),Object(r.b)("p",null,"Over time, there could be a range of conversations logging in the system - from complaints, product queries, or feedback. To keep a track of different conversations, you can label them appropriately. Eventually, you will get better insights on the intentions of a specific set of users. You can work on optimizing your bot better."),Object(r.b)("p",null,"To label a conversation -"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open the conversation for which you want to add Label."),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Label")," box to see the list of available labels. Either select your preferred label from the existing list or type a new name in the box and press ",Object(r.b)("strong",{parentName:"li"},"Enter"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/GIC3Mmm.png",alt:null})),Object(r.b)("h2",{id:"3-flag-conversations"},"3. Flag conversations"),Object(r.b)("p",null,"You can flag conversations that you want to revisit later. To see only your flagged conversations, use ",Object(r.b)("strong",{parentName:"p"},"Filters")," > ",Object(r.b)("strong",{parentName:"p"},"Flagged Conversation"),"."),Object(r.b)("p",null,"To flag a conversation - "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"On the Studio page, click ",Object(r.b)("strong",{parentName:"li"},"Analysis")," > ",Object(r.b)("strong",{parentName:"li"},"Conversation logs"),"."),Object(r.b)("li",{parentName:"ol"},"Navigate to the desired conversation and click on it. You will see the conversation details."),Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("img",{src:"https://i.imgur.com/W85He8x.png",width:"12"})," icon to turn black."),Object(r.b)("li",{parentName:"ol"},"Close the widget once done.\n",Object(r.b)("img",{parentName:"li",src:"https://i.imgur.com/esbBRoG.png",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To unflag a conversation, click on the flag again.")),Object(r.b)("h2",{id:"4-troubleshoot-bot-flow"},"4. Troubleshoot bot flow"),Object(r.b)("p",null,"Now that there are many conversations logged in the system, it becomes easy for you to choose specific conversation(s) using the filters and flags available."),Object(r.b)("p",null,"To fix a problem or optimize your bot - "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Navigate to the desired conversation and click on it to see the entire conversation. You can see at what interaction the issue was identified (auto-tagging)."),Object(r.b)("li",{parentName:"ol"},"Go to Studio, open the flow and make the necessary changes to it."),Object(r.b)("li",{parentName:"ol"},"Test the bot to see if your changes are reflecting.")),Object(r.b)("img",{src:"https://i.imgur.com/ZLINu9R.png",width:"400"}),Object(r.b)("p",null,"Consider the following example where the system has identified ",Object(r.b)("em",{parentName:"p"},"Long response time")," during the interaction with the user. Go back to your flow, identify the reason, and make the necessary changes. Test the bot to see if your intended changes are reflecting."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/xFx9i5M.png",alt:null})))}p.isMDXComponent=!0},456:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);