"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[87330],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27308:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Email ticketing configuration",sidebar_label:"Email settings"},l=void 0,c={unversionedId:"platform_concepts/inbox/inbox-settings/workflows/emailticketing",id:"platform_concepts/inbox/inbox-settings/workflows/emailticketing",title:"Email ticketing configuration",description:"Email settings must be enabled to handle support emails in the Inbox tickets module.",source:"@site/docs/platform_concepts/inbox/inbox-settings/workflows/emailticketing.md",sourceDirName:"platform_concepts/inbox/inbox-settings/workflows",slug:"/platform_concepts/inbox/inbox-settings/workflows/emailticketing",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/emailticketing",draft:!1,tags:[],version:"current",frontMatter:{title:"Email ticketing configuration",sidebar_label:"Email settings"},sidebar:"platform_concepts",previous:{title:"Video call settings",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/video-call-settings"},next:{title:"Auto assign email tickets",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/tickets-assignment-logic"}},p={},u=[{value:"Sample acknowledgement emails",id:"sample-acknowledgement-emails",level:4}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Email settings must be enabled to handle support emails in the Inbox tickets module. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Prerequisite to email settings is available ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/setupandconfig"},"here"),".")),(0,r.kt)("p",null,"Follow the below steps to configure email settings: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,r.kt)("strong",{parentName:"li"},"Settings"),". "),(0,r.kt)("li",{parentName:"ol"},"Search and select ",(0,r.kt)("strong",{parentName:"li"},"Email settings"),".\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/2HwgDYg.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Support email"),". Enabling the support email option means that all incoming emails will be forwarded to the yellow.ai Inbox instead of the actual mailbox, where they will be automatically converted into support tickets.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/yAF6i63.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("strong",{parentName:"li"},"Acknowledgement email for new tickets"),". This allows an acknowledgement email to be automatically sent to the customer when a new support ticket is created in the inbox, while the inbox agent takes up the ticket to resolve the customer's query. This practice is widely used in the support ticketing industry. You can choose to not send an acknowledgement email by selecting the ",(0,r.kt)("strong",{parentName:"li"},"Do not send acknowledgement email")," option.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/hDE2Goz.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Add details and write the ",(0,r.kt)("strong",{parentName:"li"},"Acknowledgement email"),". ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Subject")," : Add ",(0,r.kt)("inlineCode",{parentName:"li"},"{{userSubject}}")," to reply to the same mail or you can type a new subject to send the acknowledgement as a new email instead of a reply."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Acknowledgement message"),": You can make use of the options available on the response screen (explained ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro#22-email-response-screen"},"here"),") and type a message. You can also use dynamic variables in the message, commonly used variables such as Ticket ID, User subject and User name can be included by clicking ",(0,r.kt)("strong",{parentName:"li"},"Add")," next to the name in ticket details.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/5CoCMca.png",alt:null})),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),". ")))),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"sample-acknowledgement-emails"},"Sample acknowledgement emails"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Dear [User Name],\nThank you for contacting us regarding [Email Subject]. We have received your support request and a ticket has been created with the ID [Ticket ID]. Our support team will review your request and get back to you as soon as possible.\nBest regards,\n[Your Company]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hello [User Name],\nThank you for reaching out to us with your question about [Email Subject]. This email is to confirm that your message has been received and a ticket with ID [Ticket ID] has been created. We will investigate your issue and get back to you shortly with a resolution.\nBest,\n[Your Company]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hi [User Name],\nThank you for your email about [Email Subject]. We appreciate your business and want to assure you that we have received your message. Your support request has been assigned a ticket with the ID [Ticket ID], and one of our support agents will follow up with you soon.\nBest regards,\n[Your Company]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Dear [User Name],\nThank you for contacting our support team with your question about [Email Subject]. We want to assure you that your support request has been received and assigned a ticket with the ID [Ticket ID]. We will investigate your issue and provide a prompt response as soon as possible.\nBest,\n[Your Company]\n")))}d.isMDXComponent=!0}}]);