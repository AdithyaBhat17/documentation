"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[40387],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),k=i,d=p["".concat(s,".").concat(k)]||p[k]||u[k]||o;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},47819:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"Handle inactivity for email tickets",sidebar_label:"Email inactivity trigger"},s=void 0,c={unversionedId:"platform_concepts/inbox/inbox-settings/automation/emailinactivity",id:"platform_concepts/inbox/inbox-settings/automation/emailinactivity",title:"Handle inactivity for email tickets",description:"Email inactivity refers to a situation where a customer has not responded to an email, request, or inquiry from a business or service provider (sent by an inbox agent) within a set time and the ticket is considered inactive.",source:"@site/docs/platform_concepts/inbox/inbox-settings/automation/emailinactivity.md",sourceDirName:"platform_concepts/inbox/inbox-settings/automation",slug:"/platform_concepts/inbox/inbox-settings/automation/emailinactivity",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/emailinactivity",draft:!1,tags:[],version:"current",frontMatter:{title:"Handle inactivity for email tickets",sidebar_label:"Email inactivity trigger"},sidebar:"platform_concepts",previous:{title:"Chat inactivity trigger",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/chat-timeout"},next:{title:"Notification settings",permalink:"/docs/platform_concepts/inbox/inbox-settings/account/notification"}},m={},p=[{value:"1. Auto-close inactive email ticket",id:"1-auto-close-inactive-email-ticket",level:2},{value:"1.1 Send a reminder before auto-closing an inactive email ticket",id:"11-send-a-reminder-before-auto-closing-an-inactive-email-ticket",level:3},{value:"2. Use case",id:"2-use-case",level:2}],u={toc:p};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Email inactivity refers to a situation where a customer has not responded to an email, request, or inquiry from a business or service provider (sent by an inbox agent) within a set time and the ticket is considered inactive. "),(0,o.kt)("p",null,"It is necessary to keep track of such emails to which the customer has not replied so that the team can close the ticket and prioritize other tickets.\nWith email inactivity setting, email ticket inactivity is handled automatically without the inbox agent's interference. "),(0,o.kt)("p",null,"Email inactivity is handled by performing the below action: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Close the ticket"),": If the customer has not responded within the set time, you can choose to automatically close the ticket. So that the agent assigned to this ticket gets auto-assigned to another one (or, concurrency value reduces).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Send reminder and close the ticket"),": In addition to the above one, you can also send a reminder to the customer expecting a response. if the customer does not respond within the set time, you can choose to automatically close the ticket.")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"1-auto-close-inactive-email-ticket"},"1. Auto-close inactive email ticket"),(0,o.kt)("p",null,"To automatically close an inactive email ticket, follow these steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Inbox")," > ",(0,o.kt)("strong",{parentName:"p"},"Settings"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Search and select ",(0,o.kt)("strong",{parentName:"p"},"Inactivity trigger"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Email")," tab.    "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/RrqV6jB.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Automatically close inactive email tickets")," toggle. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the duration (in minutes, hours, days, or months) after which the ticket should get closed automatically. For example, the ticket will close if the customer has not responded for 30 min. after the Inbox agent has sent an email."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/bwMSFGO.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After step #5 when the ticket is closed, you can notify the customer over email when a ticket is auto-closed, by selecting (or creating) a prebuilt email template. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Click in the box. You will see the list of all the available templates. Select the template that you want to use for sending the notification.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/v2KjiDa.png",alt:null})),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The templates used here do not support dynamic variables like {ticketid} etc. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte"},"Learn more")," on creating email tempaltes. ")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Save")," the changes. "))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Trigger time must be more than 0. "),(0,o.kt)("li",{parentName:"ul"},"Auto-closed tickets will be tagged with - ",(0,o.kt)("em",{parentName:"li"},"autoclose"),", you can see them on the tickets page."))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"11-send-a-reminder-before-auto-closing-an-inactive-email-ticket"},"1.1 Send a reminder before auto-closing an inactive email ticket"),(0,o.kt)("p",null,"To send a reminder before auto-closing an inactive email ticket, follow these steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After step# 6, enable ",(0,o.kt)("strong",{parentName:"p"},"Send reminder")," toggle. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/rnV5LZl.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the time after which the customer must receive a reminder email. For example, inbox will send a reminder if the customer has not responded for 20 minutes after the Inbox agent sent an email.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can notify the customer over email when a ticket is about to become inactive, by selecting (or creating) a prebuilt email template. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Click in the box. You will see the list of all the available templates. Select the template that you want to use for sending the reminder notification.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/nLKzUWo.png",alt:null})),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Before selecting a reminder mail, you can edit the existing templates or create a new template. "),(0,o.kt)("li",{parentName:"ul"},"The templates used here do not support dynamic variables like {ticketid} etc. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte"},"Learn more")," on creating email tempaltes. ")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Save")," the changes. "))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Trigger time must be more than 0. "),(0,o.kt)("li",{parentName:"ul"},"Reminder timer must be less than the auto-close timer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Send reminder")," toggle can be enabled only if ",(0,o.kt)("strong",{parentName:"li"},"Automatically close inactive email tickets")," is enabled. "))),(0,o.kt)("h2",{id:"2-use-case"},"2. Use case"),(0,o.kt)("p",null,"Assume an email ticket was raised by a customer to Globex Corporation:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Customer's email ticket"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hi, \nI purchased a core i5 latitude from you before 2 months. \nI need replacement for the battery adapter. Can you help me out? \nRegards, \nJames\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response from the inbox agent"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(#223)\nHi James! \nI will help you with your issue. \nHowever to fetch your details, can you please send me your invoice?\nThanks, \nGlobex\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"No reply from the customer")," (ticket is still assigned to the agent until manually closed):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Admin enables Auto-close (with alerts). If the customer is inactivy for more than set time (30 min), reminder will be sent and ticket will be auto closed saving agents time.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Automated reminder from inbox"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Hi, \nWe noticed that you have not responded to our previous mail. \nAre you still looking for support?"\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"No reply from the customer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Automated closure from inbox"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hi, \nWe have closed your ticket (#223) due to inactivity. \nIf required, you can raise another ticket to get in touch with us. \nHave a great day!\n")))}k.isMDXComponent=!0}}]);