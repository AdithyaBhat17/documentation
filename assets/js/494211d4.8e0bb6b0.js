"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[740],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),u=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},d="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(m,i(i({ref:e},c),{},{components:n})):a.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53862:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Debug inbox error logs",sidebar_label:"Debug inbox errors"},l=void 0,u={unversionedId:"platform_concepts/inbox/inbox_setup/debugchecklist",id:"platform_concepts/inbox/inbox_setup/debugchecklist",title:"Debug inbox error logs",description:"In this article, you will learn how to debug the errors that are encountered while testing the bot for Inbox configuration (on Studio module).",source:"@site/docs/platform_concepts/inbox/inbox_setup/debugchecklist.md",sourceDirName:"platform_concepts/inbox/inbox_setup",slug:"/platform_concepts/inbox/inbox_setup/debugchecklist",permalink:"/docs/platform_concepts/inbox/inbox_setup/debugchecklist",draft:!1,tags:[],version:"current",frontMatter:{title:"Debug inbox error logs",sidebar_label:"Debug inbox errors"},sidebar:"platform_concepts",previous:{title:"Auto assignment of chats & emails",permalink:"/docs/platform_concepts/inbox/inbox_setup/assignmentlogic"},next:{title:"Monitor inbox",permalink:"/docs/platform_concepts/inbox/monitor"}},c={},d=[],h={toc:d};function p(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article, you will learn how to debug the errors that are encountered while ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/debug-flow"},"testing")," the bot for Inbox configuration (on ",(0,r.kt)("strong",{parentName:"p"},"Studio")," module)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZKYGtgg.png",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Inbox may behave differently in Live and Development enviornments because the settings configured in Live mode are not reflected in Development mode, and vice versa.")),(0,r.kt)("p",null,"The following table provides different error messages along with the possible reasons and solutions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Error message ",(0,r.kt)("br",null)," (in debug logs)"),(0,r.kt)("th",{parentName:"tr",align:null},"Resolution"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Agents unavailable & Offline chats setting is disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"If customers try to contact agents for assistance but no agents are present in the Inbox, possibly due to working outside of business hours, the chat will be captured by Inbox to inform the business. However, if the offline chats feature is disabled in the settings, the chat will be considered a missed chat. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": Enabling the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat"},"offline chats")," feature allows you to receive incoming chats when your agents are unavailable, such as during breaks or outside of working hours.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Agents unavailable & Offline chats not enabled for a group - XYZ")),(0,r.kt)("td",{parentName:"tr",align:null},"Because no agent was available in the group to which the live chat request was raised and the offline chat feature was not enabled in the inbox settings, the chat was not received and considered missed. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": To receive and capture ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat"},"offline chats")," that are initiated for a particular group, you need to activate the feature in the Inbox settings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Agents unavailable & Offline chats limit for the group - XYZ has reached")),(0,r.kt)("td",{parentName:"tr",align:null},"When setting up offline chat capabilities for a group, you would have established a maximum limit for the number of chats that should be captured. The live chat request got missed because it surpassed the maximum offline chat limit that was configured in the settings. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": If you anticipate a high volume of offline chats for this group, you can adjust the Max offline tickets allowed limit in the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat"},"Inbox settings")," to accommodate this increased demand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"No agents online in Inbox with Available status")),(0,r.kt)("td",{parentName:"tr",align:null},"If there are no agents available in the Inbox to assign an incoming chat (because their status is not Available), it will be captured as an Offline chat by Inbox. However, if the Offline chat feature is disabled in the settings, the incoming chats will be missed.  ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": Enabling the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat"},"offline chats")," feature allows you to capture incoming chats during times when your agents are unavailable, such as during breaks or outside of working hours.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"All agents online in Inbox are under Busy status")),(0,r.kt)("td",{parentName:"tr",align:null},"All the agents in Inbox are currently marked as Busy, which means no more chats can be assigned to them. To avoid leaving the customer without a response, Inbox attempts to queue the incoming chat and assign it based on the agent's concurrency. However, if the Queue feature is disabled in the settings, the chat will be missed.  ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": Enabling the queue functionality allows you to continue serving incoming chats. These chats will be added to a temporary queue and automatically assigned to agents when they become available to handle them, based on their concurrency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"All available agents in Inbox have full concurrency")),(0,r.kt)("td",{parentName:"tr",align:null},"The concurrency of all agents in the Inbox is currently full, so no more chats can be assigned to them. To prevent leaving the customer without a response, Inbox attempts to queue the incoming chat and assign it to an agent based on their concurrency. However, if the Queue feature is disabled in the settings, the chat will be missed.  ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": Enabling the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue"},"queue functionality")," allows you to continue serving incoming chats. These chats will be added to a temporary queue and automatically assigned to agents when they become available to handle them, based on their concurrency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"All agents online in Inbox are under Away status")),(0,r.kt)("td",{parentName:"tr",align:null},"All agents in the Inbox are currently marked as Away, which means no more chats can be assigned to them. To avoid leaving the customer without a response, Inbox attempts to queue the incoming chat and assign it to an agent based on their concurrency. However, if the Queue feature is disabled in the settings, the chat will be missed. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": Enabling the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue"},"queue functionality")," allows you to continue serving incoming chats. These chats will be added to a temporary queue and automatically assigned to agents when they become available to handle them, based on their concurrency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Preferred agent not eligible for chat assignment")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("br",null)," 1. The preferred agent is not eligible for the current chat assignment, which could be because their concurrency is full or they are marked as Busy or Away. ",(0,r.kt)("br",null)," 2. None of the other agents in the group are eligible for the current chat assignment because their concurrencies are full or they are marked as Busy or Away. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": If this situation occurs frequently, you may want to consider increasing the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents#11-editmodify-existing-agent-properties"},"concurrency"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Agents fully occupied & Queue not enabled for group - XYZ")),(0,r.kt)("td",{parentName:"tr",align:null},"The chat was missed because it was routed to a group where all agents were either marked as Busy, Away, or had their concurrency full. Additionally, the group queue setting was not enabled. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": If you anticipate a high volume of chats being raised in this group during working hours, you can enable the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue"},"queue functionality")," to strike a balance between traffic and the agent workload.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Agents fully occupied & Queue limit for group - XYZ has reached")),(0,r.kt)("td",{parentName:"tr",align:null},"When setting up group queue settings, you may have specified a maximum limit on the number of chats that can be queued. In this case, the chat was missed because it exceeded the maximum queue limit that you have configured in the settings. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": If you anticipate a high volume of offline chats being raised for this group, you may want to consider increasing the maximum limit in the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue"},"Inbox settings"),". However, note that increasing the queue limit may result in longer waiting times for customers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"XYZ group does not exist")),(0,r.kt)("td",{parentName:"tr",align:null},"The group field that is being passed in the flow(Raise ticket node) does not exist. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": Verify if you have created this ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups"},"group")," in the Inbox settings under the correct environment. Additionally, check if you are using the appropriate variable in the group field in the ",(0,r.kt)("strong",{parentName:"td"},"Raise chat")," node.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"mailto:bruce.wayne@yellow.ai"},"bruce.wayne@yellow.ai")," agent does not exist")),(0,r.kt)("td",{parentName:"tr",align:null},"The agent name that is being passed does not exist. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": Check if the email ID of the agent being passed is correct and valid. Additionally, verify if the user is still added as an Inbox agent in the platform.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"At least one of Name, Number or Email is required to raise chats")),(0,r.kt)("td",{parentName:"tr",align:null},"In order to raise chats, at least one of the following information is required: Name, Number, or Email. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),":  Ensure that you are providing at least one of these details when raising a chat (via. ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/inboxdemo#3-steps-to-create-support-flow-from-scratch"},"raise ticket node"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Query field is either not being passed or has empty value")),(0,r.kt)("td",{parentName:"tr",align:null},"It seems that either the query field being passed is empty, or the variable that is supposed to contain the query data has null values. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": Ensure that the variable being passed as the query field in ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/inboxdemo#3-steps-to-create-support-flow-from-scratch"},"Raise ticket")," node is correct and has data. If you don't want to ask for this information from the customer, create a variable and set a default value when it is created. This will prevent the error from occurring.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Video call not enabled in settings")),(0,r.kt)("td",{parentName:"tr",align:null},"You are trying to initiate a video call in the chat, but the video call functionality is disabled in the settings. This is why the chat is not being raised with video call ability. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": Enable the video call functionality in the ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/video-call-settings"},"settings"),". Once you do that, you should be able to initiate video calls in the chat.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Agent info missing for manual assignment")),(0,r.kt)("td",{parentName:"tr",align:null},"Agent email ID is not being passed for manual assignment. ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Solution"),": Pass in a valid agent email ID for the manual assignment to take place.")))))}p.isMDXComponent=!0}}]);