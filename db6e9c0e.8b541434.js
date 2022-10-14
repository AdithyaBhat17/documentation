(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{391:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),o=(n(0),n(445)),r=["components"],s={title:"August updates",sidebar_label:"August updates"},c={unversionedId:"updates/2022/aug",id:"updates/2022/aug",isDocsHomePage:!1,title:"August updates",description:"1. Inbox",source:"@site/docs/updates/2022/aug.md",slug:"/updates/2022/aug",permalink:"/docs/updates/2022/aug",version:"current",sidebar_label:"August updates",sidebar:"updates",previous:{title:"Product updates",permalink:"/docs/updates/overview"},next:{title:"July updates",permalink:"/docs/updates/2022/july"}},l=[{value:"1. Inbox",id:"1-inbox",children:[{value:"1.1 Email tickets deeplink",id:"11-email-tickets-deeplink",children:[]},{value:"1.2 No code email ticketing",id:"12-no-code-email-ticketing",children:[]},{value:"1.3 Queued chats access for Inbox Supervisor",id:"13-queued-chats-access-for-inbox-supervisor",children:[]}]},{value:"2. Insights",id:"2-insights",children:[{value:"2.1 Enriched channel filter",id:"21-enriched-channel-filter",children:[]},{value:"2.1 Failure reasons in Notifications report",id:"21-failure-reasons-in-notifications-report",children:[]},{value:"2.3 Extended session period (24 hrs)",id:"23-extended-session-period-24-hrs",children:[]}]},{value:"3. Integrations",id:"3-integrations",children:[{value:"3.1 CleverTap integration",id:"31-clevertap-integration",children:[]},{value:"3.2 Media File support with caption for custom live agent integrations",id:"32-media-file-support-with-caption-for-custom-live-agent-integrations",children:[]},{value:"3.3 Integration UI enhancements",id:"33-integration-ui-enhancements",children:[]},{value:"3.4 In-Bot reply events for Webhook based integrations",id:"34-in-bot-reply-events-for-webhook-based-integrations",children:[]},{value:"3.5 Cashfree - Whatsapp payment  integration",id:"35-cashfree---whatsapp-payment--integration",children:[]}]},{value:"4. Marketplace",id:"4-marketplace",children:[{value:"4.1 Marketplace components",id:"41-marketplace-components",children:[]}]},{value:"5. Engage",id:"5-engage",children:[{value:"5.1 Test campaign feature for outbound campaigns",id:"51-test-campaign-feature-for-outbound-campaigns",children:[]},{value:"5.2  App to cloud migration",id:"52--app-to-cloud-migration",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-inbox"},"1. Inbox"),Object(o.b)("h3",{id:"11-email-tickets-deeplink"},"1.1 Email tickets deeplink"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Type - Enhancement")),Object(o.b)("p",null,"Email tickets are now deeplinked to improves the overall process of navigation and usability within Inbox. Agents and Admins will find it much easier to search, and filter ticket history."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/0ozN6uc.png",alt:null})),Object(o.b)("h3",{id:"12-no-code-email-ticketing"},"1.2 No code email ticketing"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Type - New feature")),Object(o.b)("p",null,"One can configure email ticketing channel and raise tickets in Inbox cloud without the hassle of getting code access, app object, or  main function etc anymore. This speeds up the process and the experience of going live with email channel for support usecases."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/JInKmIw.png",alt:null})),Object(o.b)("h3",{id:"13-queued-chats-access-for-inbox-supervisor"},"1.3 Queued chats access for Inbox Supervisor"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Type - Enhancement")),Object(o.b)("p",null,"Queued chats would now be visible to Inbox Supervisor role. They also have more control over queued chats wherein admins & aupervisors can now assign or push chats from queue to agents in case of need."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"2-insights"},"2. Insights"),Object(o.b)("h3",{id:"21-enriched-channel-filter"},"2.1 Enriched channel filter"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Type: Enhancement")),Object(o.b)("p",null,"To understand user behaviour in much better depth, YellowMessenger channel filter is now divided into -"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Web - users interacting with bot deployed on websites")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Mobile - users interacting with bot via mobile apps"))),Object(o.b)("p",null,"Additionally, Yellow API is a new channel introduced for users who only use our backend API to deploy bots with their own in-house UI."),Object(o.b)("h3",{id:"21-failure-reasons-in-notifications-report"},"2.1 Failure reasons in Notifications report"),Object(o.b)("p",null,"Introduced a new column, ",Object(o.b)("em",{parentName:"p"},"ERRORMESSAGE"),", in the Notifications report of Data Explorer specifying the reasons behind failure of notifications delivery. For example, Recipient number is invalid, the user doesn\u2019t have a WhatsApp account and so on."),Object(o.b)("p",null,"There are filters to drill down data that helps understand different reasons for notifications failing, retargeting of those users, plan how to avoid such failures in the future, etc."),Object(o.b)("p",null,"  ",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/R2rvE4a.png",alt:null})),Object(o.b)("h3",{id:"23-extended-session-period-24-hrs"},"2.3 Extended session period (24 hrs)"),Object(o.b)("p",null,"The definition of a session is now updated to user interaction occurring with the bot within a 24-hours window. A single session is considered for any number of interactions the user has within 24 hours from the start of a session. A new session starts after 24 hours. This is to ensure better accuracy in the Sessions data and bring consistency across channels (like WhatsApp)."),Object(o.b)("p",null,"From a billing point of view, irrespective of the number of messages sent in the last 24 hours time frame, only 1 session will be counted for billing purposes."),Object(o.b)("hr",null),Object(o.b)("h2",{id:"3-integrations"},"3. Integrations"),Object(o.b)("h3",{id:"31-clevertap-integration"},"3.1 CleverTap integration"),Object(o.b)("p",null,"The CleverTap integration allows you to create Whatsapp templates on Yellow.ai and run campaigns for your user base directly on CleverTap. ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/appConfiguration/clevertap"},"Know more details"),"."),Object(o.b)("h3",{id:"32-media-file-support-with-caption-for-custom-live-agent-integrations"},"3.2 Media File support with caption for custom live agent integrations"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Type: Fix")),Object(o.b)("p",null,"Earlier, users were not able to receive videos that were sent during custom live chat. This has now been fixed and clients using Custom Live Agent will now receive media files with correct captions.  "),Object(o.b)("h3",{id:"33-integration-ui-enhancements"},"3.3 Integration UI enhancements"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Type: Enhancements"),Object(o.b)("p",{parentName:"blockquote"},"The following are the enhancements made to the UI - ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Updated the Descriptions section on the Integration page with improved UX. "),Object(o.b)("li",{parentName:"ul"},"Added video tutorials for some complex integrations that would help bot builders with setting up flows")),Object(o.b)("h3",{id:"34-in-bot-reply-events-for-webhook-based-integrations"},"3.4 In-Bot reply events for Webhook based integrations"),Object(o.b)("p",null,"Clients using webhook-based live chat integrations will receive the agent reply events in the bot itself so that they can perform further operations based on that event data which was not supported earlier  "),Object(o.b)("h3",{id:"35-cashfree---whatsapp-payment--integration"},"3.5 Cashfree - Whatsapp payment  integration"),Object(o.b)("p",null,"With this integration, you can now generate Cashfree tokens that can be passed on to WhatsApp pay to process payments. Post transactions you can also receive notifications on payment statuses.  "),Object(o.b)("hr",null),Object(o.b)("h2",{id:"4-marketplace"},"4. Marketplace"),Object(o.b)("h3",{id:"41-marketplace-components"},"4.1 Marketplace components"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Healthcare: Collect reports",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Access and download lab test reports in pdf format."))),Object(o.b)("li",{parentName:"ul"},"HR",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Use cases like apply for leave, dispatch of onboarding kit, compensation roll out and employee feedback."))),Object(o.b)("li",{parentName:"ul"},"Energy and Utility"),Object(o.b)("li",{parentName:"ul"},"Use cases like billing enquiries, payments, meter readings; change of personal information, address, and also provides information around new connections, transfer of connections, and latest customer benefit schemes.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"5-engage"},"5. Engage"),Object(o.b)("h3",{id:"51-test-campaign-feature-for-outbound-campaigns"},"5.1 Test campaign feature for outbound campaigns"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Type: New feature")),Object(o.b)("p",null,"You can schedule campaigns targeting larger audience and test their notification messages just before launching it. You can add up to five test users and send real-time notifications\nThere is no need to create separate campaigns to check the end-user experience."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Available only from Cloud Engage."))),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/whatsapp-campaign/#3-test-campaigns-recommended"},"Documentation link")),Object(o.b)("p",null,"How does it help the customers?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lets business go through the end-user experience"),Object(o.b)("li",{parentName:"ul"},"Ensures variables are mapped to the respective column"),Object(o.b)("li",{parentName:"ul"},"Prevents business from sending wrong content to the customers"),Object(o.b)("li",{parentName:"ul"},"Reduces campaign failures due to parameters mismatch or images size issues")),Object(o.b)("h3",{id:"52--app-to-cloud-migration"},"5.2  App to cloud migration"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Type: Enhancement")),Object(o.b)("p",null,"Category : Upgradation to Cloud Engage"),Object(o.b)("p",null,"App bots are provided with an option to upgrade the Engage module by migrating all the campaigns and audience data with simple steps."),Object(o.b)("p",null,"App bots can now use new features available from CLOUD engage with improved UI/UX."),Object(o.b)("p",null,"The following are new in the New Engage Cloud -"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"User 360"),Object(o.b)("li",{parentName:"ul"},"Inbound Campaigns"),Object(o.b)("li",{parentName:"ul"},"Template manager"),Object(o.b)("li",{parentName:"ul"},"Viber Business outbound campaign")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/Upgrade_new_engage_app"},"Documentation link")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Limitation:The migration to the new platform is not allowed for app bots that have schedule  (Status:pending) cron jobs with Function Executions."))))}u.isMDXComponent=!0},445:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(r,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);