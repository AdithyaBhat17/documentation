"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[4565],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(a),h=i,d=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return a?n.createElement(d,r(r({ref:e},p),{},{components:a})):n.createElement(d,r({ref:e},p))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[m]="string"==typeof t?t:i,r[1]=l;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},52333:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=["components"],l={title:"Contacts (send proactive notifications)",sidebar_label:"Contacts"},c=void 0,s={unversionedId:"platform_concepts/inbox/contacts",id:"platform_concepts/inbox/contacts",title:"Contacts (send proactive notifications)",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/inbox/contacts.md",sourceDirName:"platform_concepts/inbox",slug:"/platform_concepts/inbox/contacts",permalink:"/docs/platform_concepts/inbox/contacts",draft:!1,tags:[],version:"current",frontMatter:{title:"Contacts (send proactive notifications)",sidebar_label:"Contacts"},sidebar:"platform_concepts",previous:{title:"Service-level agreement",permalink:"/docs/platform_concepts/inbox/tickets/slaintro"},next:{title:"Chat, Agent & Email analytics",permalink:"/docs/platform_concepts/inbox/analytics-reports/analytics"}},p={},m=[{value:'<a name="defination"></a>  <strong>Proactive notifications</strong>',id:"--proactive-notifications",level:4},{value:'<a name="1"></a> 1. Create a new contact',id:"-1-create-a-new-contact",level:2},{value:'<a name="2"></a>  2. Send proactive notification to a contact',id:"--2-send-proactive-notification-to-a-contact",level:2},{value:'<a name="3"></a> 3. Chat with the contact',id:"-3-chat-with-the-contact",level:2}],u={toc:m};function h(t){var e=t.components,a=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this article, you will learn: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#defination"},"What are proactive notifications?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1"},"How to create new contacts in the inbox?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2"},"How to send notifications to the contacts?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3"},"How to followup with the tickets created for proactive notifications"))),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"--proactive-notifications"},(0,o.kt)("a",{name:"defination"}),"  ",(0,o.kt)("strong",{parentName:"h4"},"Proactive notifications")),(0,o.kt)("p",null,"The support process is a reactive process that takes place when a customer faces an issue and reaches out to the brand for resolution, through their website (or other configured channels). A live agent is connected to a customer and their issues are resolved.\nThis proactive notification is an outbound reach out where the agents or the businesses, reach out to the customers (using our ",(0,o.kt)("strong",{parentName:"p"},"Contacts")," feature) to identify issues, problems, and opportunities to maintain relationships (especially in the case of B2B scenarios), to introduce new products/provide product updates, to personally address their queries, etc. This personalization and proactiveness provide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A better experience for the end users. "),(0,o.kt)("li",{parentName:"ul"},"Increased customer loyalty."),(0,o.kt)("li",{parentName:"ul"},"Increased potential sales.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"This feature is available only for the WhatsApp channel.   "),(0,o.kt)("li",{parentName:"ul"},"To extend this to other channels, contact ",(0,o.kt)("a",{parentName:"li",href:"mailto:sandeep.rajaram@yellow.ai"},"sandeep Rajaram")))),(0,o.kt)("h2",{id:"-1-create-a-new-contact"},(0,o.kt)("a",{name:"1"})," 1. Create a new contact"),(0,o.kt)("p",null,"Follow the steps below to create a new contact:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to the yellow.ai platform. Open ",(0,o.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,o.kt)("strong",{parentName:"li"},"Contacts"),". ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/n9Sgfrq.png",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"If you want to send notifications to a new contact, you can add a new contact by clicking ",(0,o.kt)("strong",{parentName:"li"},"+Create contact"),".  ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/EyUiBa0.png",alt:null}),"  "),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Enter the contact details: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Name, email address, and Phone number with the correct country code (+91 for India). "),(0,o.kt)("li",{parentName:"ul"},"Upload a contact image (if required). "))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),". "),(0,o.kt)("li",{parentName:"ol"},"This page will contain all the contacts created in Inbox, use the search bar to find a particular contact by entering the details. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Za2s5v6.png",alt:null})),(0,o.kt)("h2",{id:"--2-send-proactive-notification-to-a-contact"},(0,o.kt)("a",{name:"2"}),"  2. Send proactive notification to a contact"),(0,o.kt)("p",null,"Follow the steps below to send a notification to any particular contact:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Search for the required contact and click on the contact name. "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Send message"),". ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/KocHhhp.png",alt:null})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"From")," contact number (WhatsApp business number) from which this notification will be sent. For more details on WhatsApp channel, click ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration"},"here"),". "),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"To")," contact number. Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),". ")),(0,o.kt)("img",{src:"https://i.imgur.com/aTNnnoI.png",alt:"drawing",width:"40%"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If there is an active chat ","[In Assigned, Queued, Open status]"," existing for the customer to whom you are trying to reach, you cannot send another proactive notification.\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZRAJhLL.png",alt:null}))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Select the template. Click ",(0,o.kt)("strong",{parentName:"li"},"Next"),". ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use the search bar to find the required template. "),(0,o.kt)("li",{parentName:"ul"},"Hover on a template, to preview it. ")))),(0,o.kt)("img",{src:"https://i.imgur.com/NyoAjdh.png",alt:"drawing",width:"40%"}),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"You can attach media/ variables/ dynamic content and click ",(0,o.kt)("strong",{parentName:"li"},"Next"),". ")),(0,o.kt)("img",{src:"https://i.imgur.com/91jzw4O.png",alt:"drawing",width:"70%"}),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Add the following details and click ",(0,o.kt)("strong",{parentName:"li"},"Create ticket and send"),": ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Priority"),"."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Assignee")," from the drop-down to assign this ticket to an inbox agent. "),(0,o.kt)("li",{parentName:"ul"},"Add a ",(0,o.kt)("strong",{parentName:"li"},"Description"),". ")))),(0,o.kt)("img",{src:"https://i.imgur.com/VxFCRYN.png",alt:"drawing",width:"40%"}),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"A ticket will be created and assigned to the agent. These details will be visible on the ",(0,o.kt)("strong",{parentName:"li"},"Timeline")," tab.")),(0,o.kt)("img",{src:"https://i.imgur.com/oUb3kba.png",alt:"drawing",width:"50%"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ticket creation through the contacts tab will take 1-2 minutes to process because Inbox verifies that the user number entered is valid or invalid before creating a ticket. Once the message is sent it will not get updated automatically, you must refresh the page to update ticket status. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Verification message"),"  "),(0,o.kt)("img",{src:"https://i.imgur.com/gK1uMBF.png",alt:"drawing",width:"50%"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Failure message"),"  "),(0,o.kt)("img",{src:"https://i.imgur.com/tbit8zO.png",alt:"drawing",width:"50%"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Success message"),"  "),(0,o.kt)("img",{src:"https://i.imgur.com/EQfLVEv.png",alt:"drawing",width:"50%"})))))),(0,o.kt)("h2",{id:"-3-chat-with-the-contact"},(0,o.kt)("a",{name:"3"})," 3. Chat with the contact"),(0,o.kt)("p",null,"Follow the steps below to follow up with the contact after the notification is sent:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Once the number is verified, the ticket is created and a notification is sent to the contact, you can view it on the ",(0,o.kt)("strong",{parentName:"li"},"Chats")," tab."),(0,o.kt)("li",{parentName:"ol"},"On ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat"},"chats"),", ticket details, and the chat screen will be open (to the assigned inbox agent). ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Depending on the agent to whom the ticket is assigned, tickets will be visible on the My Chats tab."),(0,o.kt)("li",{parentName:"ul"},"Admins can see this chat on the Active chats tab. ")))),(0,o.kt)("img",{src:"https://i.imgur.com/RB5TnXj.png",alt:"drawing",width:"100%"}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"When the contact responds to the notification, the Chat restriction is lifted and the agents can have a free-flow conversation. ")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"As per ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/whatsapp-24hr-window-policy"},"WhatsApp guidelines"),", live agents cannot have a free flowing conversation with the customers up until they respond back to the proactive template message sent by the agents. Once the customer responds, the 24hr session rule is lifted and agents can handhold the customer to resolution. ")))}h.isMDXComponent=!0}}]);