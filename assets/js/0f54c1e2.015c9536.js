"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[4415],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,d=p["".concat(i,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26971:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],s={title:"Inbox FAQs",sidebar_label:"Inbox FAQs"},i=void 0,c={unversionedId:"platform_concepts/inbox/inboxfaqs",id:"platform_concepts/inbox/inboxfaqs",title:"Inbox FAQs",description:"Can we have primary and secondary WhatsApp numbers(2 phone numbers) connecting a bot user to the live agents?",source:"@site/docs/platform_concepts/inbox/inboxfaqs.md",sourceDirName:"platform_concepts/inbox",slug:"/platform_concepts/inbox/inboxfaqs",permalink:"/docs/platform_concepts/inbox/inboxfaqs",draft:!1,tags:[],version:"current",frontMatter:{title:"Inbox FAQs",sidebar_label:"Inbox FAQs"},sidebar:"platform_concepts",previous:{title:"Security settings",permalink:"/docs/platform_concepts/inbox/inbox-settings/account/security"},next:{title:"User 360 overview",permalink:"/docs/platform_concepts/engagement/cdp/overview"}},u={},p=[],m={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can we have primary and secondary WhatsApp numbers(2 phone numbers) connecting a bot user to the live agents? "),(0,r.kt)("div",null,"Each bot has only one inbox, the bot can have multiple Whatsapp numbers activated, and the agent queries will be directed to the bot's Inbox. Hence, all Whatsapp numbers are sourced to the same Inbox module, and agents can pick up conversations(tickets) from any of the numbers.")),(0,r.kt)("details",null,(0,r.kt)("summary",null," Why is the agent's language is getting translated automatically to the user's language even when the agent is replying in English?"),(0,r.kt)("div",null,"You can set the default language of the agent to English in ",(0,r.kt)("b",null,"Inbox")," > ",(0,r.kt)("b",null,"Settings")," > ",(0,r.kt)("b",null,"Team")," > ",(0,r.kt)("b",null,"Agents"),". Open the agent profile and select the ",(0,r.kt)("b",null,"Default Language"),". Click ",(0,r.kt)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents/#11-editmodify-existing-agent-properties"},"here")," to learn more.")),(0,r.kt)("details",null,(0,r.kt)("summary",null," How can I delete my chat and email tickets? "),(0,r.kt)("div",null,"Inbox Agent or Admin cannot delete any tickets from Inbox. Tickets can only be deleted from the database.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sticky agents")," "),(0,r.kt)("details",null,(0,r.kt)("summary",null,' What does "agents not eligible to take chats" mean? '),(0,r.kt)("div",null,"Agents are considered to be not eligible for assignment when the agent status is currently offline/busy/away and when the agent has no vacant concurrency to assign chats.")),(0,r.kt)("details",null,(0,r.kt)("summary",null," Will a sticky ticket go into the queue if it is raised when all my agents are occupied? "),(0,r.kt)("div",null,"Sticky tickets will not go into the queue even if the group queue is turned ON. When an agent is at maximum concurrency OR busy/away/offline they are considered to be not eligible and will be skipped in consideration. It is recommended to a higher number than the set chat concurrency.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WhatsApp policy"),"   "),(0,r.kt)("details",null,(0,r.kt)("summary",null," What is the cost of sending WhatsApp templates? "),(0,r.kt)("div",null,"Whatsapp charges a per-message fee for all the templates sent outside the 24 hr session based on the number of messages & country you send to. Click ",(0,r.kt)("a",{href:"https://developers.facebook.com/docs/whatsapp/pricing"}," here ")," to learn more.")),(0,r.kt)("details",null,(0,r.kt)("summary",null," Why is my chatbox not visible even though I have sent the WA template? "),(0,r.kt)("div",null,"Just sending out the template message will not reinitiate the 24 hr window. The end-user has to reply back in the conversation.")),(0,r.kt)("details",null,(0,r.kt)("summary",null," Why can\u2019t I cannot attach my media to the template? "),(0,r.kt)("div",null,"You cannot change the type of media once the template is approved. Also, you can only send out the following types of media:",(0,r.kt)("b",null," Image ")," - Jpeg or png format not more than 5MB, ",(0,r.kt)("b",null," Video ")," - MP4 video not more than 16MB, ",(0,r.kt)("b",null," Document ")," - PDF.")),(0,r.kt)("details",null,(0,r.kt)("summary",null," Why am I not able to see any templates? "),(0,r.kt)("div",null,"There are two reasons why you are not able to see any WhatsApp templates within your  Inbox:  None of your templates are approved by WhatsApp yet or you have not created any templates yet.")),(0,r.kt)("details",null,(0,r.kt)("summary",null," Why am I not able to see the template message content that I just sent? "),(0,r.kt)("div",null,"WhatsApp templates created with ",(0,r.kt)("a",{href:"https://developers.facebook.com/docs/whatsapp/pricing"},"hsm"),"  object will not be displayed with the actual content inside Inbox. However templates created with ",(0,r.kt)("a",{href:"https://developers.facebook.com/docs/whatsapp/pricing"}," template ")," object will be displayed inside Inbox. If you are not seeing the actual template content, then the template you sent out is most likely created with hsm object.")))}h.isMDXComponent=!0}}]);