"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[37830],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(n),h=i,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||r;return n?a.createElement(d,o(o({ref:e},p),{},{components:n})):a.createElement(d,o({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27202:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"Configure chat inactivity timeout / Handle inactive chats",sidebar_label:"Chat inactivity trigger",keywords:["chat timeoff","agent inactivity status","inactivity status","no agent reply","no user reply"]},c=void 0,s={unversionedId:"platform_concepts/inbox/inbox-settings/automation/chat-timeout",id:"platform_concepts/inbox/inbox-settings/automation/chat-timeout",title:"Configure chat inactivity timeout / Handle inactive chats",description:"Chat inactivity",source:"@site/docs/platform_concepts/inbox/inbox-settings/automation/chat-timeout.md",sourceDirName:"platform_concepts/inbox/inbox-settings/automation",slug:"/platform_concepts/inbox/inbox-settings/automation/chat-timeout",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/chat-timeout",draft:!1,tags:[],version:"current",frontMatter:{title:"Configure chat inactivity timeout / Handle inactive chats",sidebar_label:"Chat inactivity trigger",keywords:["chat timeoff","agent inactivity status","inactivity status","no agent reply","no user reply"]},sidebar:"platform_concepts",previous:{title:"Agent actions",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/agent-actions"},next:{title:"Email inactivity trigger",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/emailinactivity"}},p={},u=[{value:"1. Configure event to identify chat inactivity",id:"1-configure-event-to-identify-chat-inactivity",level:2},{value:"Add/Delete inactivity triggers for different channels",id:"adddelete-inactivity-triggers-for-different-channels",level:4},{value:"1.1 Send a message to an inactive bot user",id:"11-send-a-message-to-an-inactive-bot-user",level:3}],m={toc:u};function h(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Chat inactivity"),(0,r.kt)("br",{parentName:"p"}),"\n",'When a chat is assigned to an agent but neither the agent nor the customer has responded for a certain period of time, the chat is considered inactive and will eventually "timeout".',(0,r.kt)("br",{parentName:"p"}),"\n","Inbox admins can enable the inactivity trigger setting to identify these inactive chats.",(0,r.kt)("br",{parentName:"p"}),"\n","This can then be captured as an event called ",(0,r.kt)("inlineCode",{parentName:"p"},"ticket-inactive")," and further actions can be taken based on this event."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use case"),(0,r.kt)("br",{parentName:"p"}),"\n","The inactivity trigger setting can be useful in cases where customers do not respond to a chat, as it helps to prevent wasted time spent on manual follow-ups by agents. This can lead to increased productivity for agents."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-configure-event-to-identify-chat-inactivity"},"1. Configure event to identify chat inactivity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open inactivity trigger settings")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,r.kt)("strong",{parentName:"li"},"Settings"),". "),(0,r.kt)("li",{parentName:"ol"},"Search and select ",(0,r.kt)("strong",{parentName:"li"},"Inactivity trigger"),".\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/zw6AOj5.jpg",alt:null}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features of inactivity triggers")," "),(0,r.kt)("p",null,"The following are some key features of the chat timeouts which can be customized for different channels: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inactivity from customer"),(0,r.kt)("li",{parentName:"ul"},"Inactivity from agent"),(0,r.kt)("li",{parentName:"ul"},"Auto ticket closure"),(0,r.kt)("li",{parentName:"ul"},"Do not close ticket")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/8tmM8h4.png",alt:null})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Inactivity from customer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"(optional) This is a built-in setting to automatically trigger a ",(0,r.kt)("strong",{parentName:"td"},"customer inactivity")," event to timeout a customer if they have not responded to the agent's (bot's) reply on the chat for a while. You can check the box and set the duration in minutes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Inactivity from Agent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"(optional) This is a built-in setting to automatically trigger an event to timeout an agent if they have not responded to the customers's reply on the chat for a while. You can check the box and set the duration in minutes. ",(0,r.kt)("br",null),"The event trigger for ",(0,r.kt)("strong",{parentName:"td"},"agent inactivity")," can be enabled and then configured within ",(0,r.kt)("strong",{parentName:"td"},"Studio")," to notify the customer when the agent is under heavy workload and there might be a delay in their response.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Auto Ticket closure"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Checking this box will automatically close the chat (when there is no activity identified within the time period entered in the Channels settings below).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Do not close Ticket"),(0,r.kt)("td",{parentName:"tr",align:"center"},"This box can be set based on the tags present in the chat. A set of customised tags are available which you can choose from. You can choose not to close the ticket based on the presence or absence of a tag.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The default value is applicable to all the channels. The period set in it will be considered for Auto Ticket closure (when it is enabled).\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/3iHR8En.png",alt:null}))),(0,r.kt)("h4",{id:"adddelete-inactivity-triggers-for-different-channels"},"Add/Delete inactivity triggers for different channels"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"+Add channel")," and add different channels like WhatsApp, Slack etc for which the above settings can be applied.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/fGl18Fz.png",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click the delete icon next to the channel name, to delete any channel.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/DNCooqE.png",alt:null})))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"11-send-a-message-to-an-inactive-bot-user"},"1.1 Send a message to an inactive bot user"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use case"),(0,r.kt)("br",{parentName:"p"}),"\n","The bot asks the user if he is still on the chat if the user has not responded for more than one minute. "),(0,r.kt)("p",null,"Follow the bellow steps: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Configure the inactivity trigger on the settings page by following the above steps. "),(0,r.kt)("li",{parentName:"ol"},"When inactivity is identified (after 1 minute), ",(0,r.kt)("inlineCode",{parentName:"li"}," ticket-inactive")," event is generated.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/mkNjqbX.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Studio")," module. Go to ",(0,r.kt)("strong",{parentName:"li"},"Events"),". "),(0,r.kt)("li",{parentName:"ol"},"Search for ",(0,r.kt)("strong",{parentName:"li"},"ticket-inactive")," in ",(0,r.kt)("strong",{parentName:"li"},"Inbox events"),".\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/ja4aikO.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Activate"),".\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/Vln2xiw.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow"},"Create")," a new flow. "),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow"},"Start trigger")," as ",(0,r.kt)("strong",{parentName:"li"},"Event"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"/ticket-inactive")," from the drop down.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/DqNDhjY.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Connect the start node to any nodes to continue the flow. Connect to the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text"},"text node"),' to display "Hey! Are you still there?"')))}h.isMDXComponent=!0}}]);