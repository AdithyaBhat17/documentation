"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[5887],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,f=c["".concat(l,".").concat(h)]||c[h]||m[h]||r;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48813:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={title:"Sending Notifications",sidebar_label:"Notifying Users"},l=void 0,p={unversionedId:"cookbooks/whatsapp-channel/sending-notifications",id:"cookbooks/whatsapp-channel/sending-notifications",title:"Sending Notifications",description:"Types of Conversation on WhatsApp:",source:"@site/docs/cookbooks/whatsapp-channel/sending-notifications.md",sourceDirName:"cookbooks/whatsapp-channel",slug:"/cookbooks/whatsapp-channel/sending-notifications",permalink:"/docs/cookbooks/whatsapp-channel/sending-notifications",draft:!1,tags:[],version:"current",frontMatter:{title:"Sending Notifications",sidebar_label:"Notifying Users"}},u={},c=[{value:"Types of Conversation on WhatsApp:",id:"types-of-conversation-on-whatsapp",level:3},{value:"User initiated:",id:"user-initiated",level:4},{value:"Business initiated:",id:"business-initiated",level:4},{value:"Why Businesses send notifications?",id:"why-businesses-send-notifications",level:3},{value:"How to send notification?",id:"how-to-send-notification",level:3},{value:"How to get Opt-in from the user?",id:"how-to-get-opt-in-from-the-user",level:3}],m={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"types-of-conversation-on-whatsapp"},"Types of Conversation on WhatsApp:"),(0,r.kt)("h4",{id:"user-initiated"},"User initiated:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"These kind of conversation happens when user has a query. They first ping the number and then business replies to it. The first response from the business starts a session of 24-hours."),(0,r.kt)("li",{parentName:"ol"},"All messages exchanged between this 24 hour window will be charged as a single conversation.")),(0,r.kt)("h4",{id:"business-initiated"},"Business initiated:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Conversations begin when the business first sends a message to the user."),(0,r.kt)("li",{parentName:"ol"},"This happens via pre-approved templates by WhatsApp and those templates has to follow a set of guidelines.")),(0,r.kt)("p",null,"This business initiated messages are otherwise called ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Push notifications"))," or outbound messages on WhatsApp."),(0,r.kt)("h3",{id:"why-businesses-send-notifications"},"Why Businesses send notifications?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To remind customers about the abandoned cart."),(0,r.kt)("li",{parentName:"ol"},"Sending the ongoing offer details"),(0,r.kt)("li",{parentName:"ol"},"Sending shipping updates"),(0,r.kt)("li",{parentName:"ol"},"Sending notification when they perform certain key activites on your platform.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example, buying a course, registering for an event etc.")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"you can run certain brand campaign or campaigns related to festivals etc")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/bV3jS6u.png",alt:null}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/dOoaBkE.png",alt:null})),(0,r.kt)("h3",{id:"how-to-send-notification"},"How to send notification?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect your WhatsApp number to the bot. Follow the channel setup guide to set it up."),(0,r.kt)("li",{parentName:"ol"},"Get Opt-in from the user."),(0,r.kt)("li",{parentName:"ol"},"Approve notification templates from WhatsApp"),(0,r.kt)("li",{parentName:"ol"},"Schedule the campaign.")),(0,r.kt)("h3",{id:"how-to-get-opt-in-from-the-user"},"How to get Opt-in from the user?"),(0,r.kt)("p",null,"In order to send push notification to a person, "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You must have permission confirming that they wish to receive future messages from you on WhatsApp. "),(0,r.kt)("li",{parentName:"ul"},"The opt-in must\n(a) clearly state that the person is opting in to receive messages from you over WhatsApp.\n(b) clearly state your business\u2019 name.")),(0,r.kt)("p",null,"There are different ways of getting opt-in from the user"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Website opt-ins"),(0,r.kt)("li",{parentName:"ul"},"Existing channels of  communication(WhatsApp, Web Chatbot etc.)"),(0,r.kt)("li",{parentName:"ul"},"Third-party channel  opt-ins"),(0,r.kt)("li",{parentName:"ul"},"Existing systems  opt-ins"),(0,r.kt)("li",{parentName:"ul"},"In-store opt-ins"),(0,r.kt)("li",{parentName:"ul"},"Contact us sections"),(0,r.kt)("li",{parentName:"ul"},"Updated sign up forms")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/hgRFFNd.png",alt:null}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/6hQXRWf.png",alt:null}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/5T6rsoe.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Read more about opt-in best practices ",(0,r.kt)("a",{parentName:"p",href:"https://www.whatsapp.com/legal/business-policy#opt-in-best-practices"},"here"))))}h.isMDXComponent=!0}}]);