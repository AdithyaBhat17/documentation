(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{391:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(445)),r=["components"],s={title:"August updates",sidebar_label:"August"},c={unversionedId:"updates/2022/aug",id:"updates/2022/aug",isDocsHomePage:!1,title:"August updates",description:"1. Inbox",source:"@site/docs/updates/2022/aug.md",slug:"/updates/2022/aug",permalink:"/docs/updates/2022/aug",version:"current",sidebar_label:"August",sidebar:"updates",previous:{title:"Sep updates",permalink:"/docs/updates/2022/sep_updates"},next:{title:"July updates",permalink:"/docs/updates/2022/july"}},l=[{value:"1. <strong>Inbox</strong>",id:"1-inbox",children:[]},{value:"2. <strong>Insights</strong>",id:"2-insights",children:[]},{value:"3. <strong>Integrations</strong>",id:"3-integrations",children:[]},{value:"4. <strong>Marketplace</strong>",id:"4-marketplace",children:[]},{value:"5. <strong>Engage</strong>",id:"5-engage",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-inbox"},"1. ",Object(i.b)("strong",{parentName:"h2"},"Inbox")),Object(i.b)("h4",{id:"11-email-tickets-deeplink"},"1.1 Email tickets deeplink"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Type - Enhancement")),Object(i.b)("p",null,"Email tickets are now deeplinked to improves the overall process of navigation and usability within Inbox. Agents and Admins will find it much easier to search, and filter ticket history."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/0ozN6uc.png",alt:null})),Object(i.b)("h4",{id:"12-no-code-email-ticketing"},"1.2 No code email ticketing"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Type - New feature")),Object(i.b)("p",null,"One can configure email ticketing channel and raise tickets in Inbox cloud without the hassle of getting code access, app object, or  main function etc anymore. This speeds up the process and the experience of going live with email channel for support usecases."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/JInKmIw.png",alt:null})),Object(i.b)("h4",{id:"13-queued-chats-access-for-inbox-supervisor"},"1.3 Queued chats access for Inbox Supervisor"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Type - Enhancement")),Object(i.b)("p",null,"Queued chats would now be visible to Inbox Supervisor role. They also have more control over queued chats wherein admins & aupervisors can now assign or push chats from queue to agents in case of need."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"2-insights"},"2. ",Object(i.b)("strong",{parentName:"h2"},"Insights")),Object(i.b)("h4",{id:"21-enriched-channel-filter"},"2.1 Enriched channel filter"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Type: Enhancement")),Object(i.b)("p",null,"To understand user behaviour in much better depth, YellowMessenger channel filter is now divided into -"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Web - users interacting with bot deployed on websites")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Mobile - users interacting with bot via mobile apps"))),Object(i.b)("p",null,"Additionally, Yellow API is a new channel introduced for users who only use our backend API to deploy bots with their own in-house UI."),Object(i.b)("h4",{id:"21-failure-reasons-in-notifications-report"},"2.1 Failure reasons in Notifications report"),Object(i.b)("p",null,"Introduced a new column, ",Object(i.b)("em",{parentName:"p"},"ERRORMESSAGE"),", in the Notifications report of Data Explorer specifying the reasons behind failure of notifications delivery. For example, Recipient number is invalid, the user doesn\u2019t have a WhatsApp account and so on."),Object(i.b)("p",null,"There are filters to drill down data that helps understand different reasons for notifications failing, retargeting of those users, plan how to avoid such failures in the future, etc."),Object(i.b)("p",null,"  ",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/R2rvE4a.png",alt:null})),Object(i.b)("h4",{id:"23-extended-session-period-24-hrs"},"2.3 Extended session period (24 hrs)"),Object(i.b)("p",null,"The definition of a session is now updated to user interaction occurring with the bot within a 24-hours window. A single session is considered for any number of interactions the user has within 24 hours from the start of a session. A new session starts after 24 hours. This is to ensure better accuracy in the Sessions data and bring consistency across channels (like WhatsApp)."),Object(i.b)("p",null,"From a billing point of view, irrespective of the number of messages sent in the last 24 hours time frame, only 1 session will be counted for billing purposes."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"3-integrations"},"3. ",Object(i.b)("strong",{parentName:"h2"},"Integrations")),Object(i.b)("h4",{id:"31-clevertap-integration"},"3.1 CleverTap integration"),Object(i.b)("p",null,"The CleverTap integration allows you to create Whatsapp templates on Yellow.ai and run campaigns for your user base directly on CleverTap. ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/appConfiguration/clevertap"},"Know more details"),"."),Object(i.b)("h4",{id:"32-media-file-support-with-caption-for-custom-live-agent-integrations"},"3.2 Media File support with caption for custom live agent integrations"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Type: Fix")),Object(i.b)("p",null,"Earlier, users were not able to receive videos that were sent during custom live chat. This has now been fixed and clients using Custom Live Agent will now receive media files with correct captions.  "),Object(i.b)("h4",{id:"33-integration-ui-enhancements"},"3.3 Integration UI enhancements"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Type: Enhancements"),Object(i.b)("p",{parentName:"blockquote"},"The following are the enhancements made to the UI - ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Updated the Descriptions section on the Integration page with improved UX. "),Object(i.b)("li",{parentName:"ul"},"Added video tutorials for some complex integrations that would help bot builders with setting up flows")),Object(i.b)("h4",{id:"34-in-bot-reply-events-for-webhook-based-integrations"},"3.4 In-Bot reply events for Webhook based integrations"),Object(i.b)("p",null,"Clients using webhook-based live chat integrations will receive the agent reply events in the bot itself so that they can perform further operations based on that event data which was not supported earlier  "),Object(i.b)("h4",{id:"35-cashfree---whatsapp-payment--integration"},"3.5 Cashfree - Whatsapp payment  integration"),Object(i.b)("p",null,"With this integration, you can now generate Cashfree tokens that can be passed on to WhatsApp pay to process payments. Post transactions you can also receive notifications on payment statuses.  "),Object(i.b)("hr",null),Object(i.b)("h2",{id:"4-marketplace"},"4. ",Object(i.b)("strong",{parentName:"h2"},"Marketplace")),Object(i.b)("h4",{id:"41-new-marketplace-components-were-added"},"4.1 New Marketplace components were added"),Object(i.b)("p",null,"Following marketplace templates were relased:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Healthcare: Collect reports",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Access and download lab test reports in pdf format."))),Object(i.b)("li",{parentName:"ul"},"HR",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use cases like apply for leave, dispatch of onboarding kit, compensation roll out and employee feedback."))),Object(i.b)("li",{parentName:"ul"},"Energy and Utility"),Object(i.b)("li",{parentName:"ul"},"Use cases like billing enquiries, payments, meter readings; change of personal information, address, and also provides information around new connections, transfer of connections, and latest customer benefit schemes.")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"5-engage"},"5. ",Object(i.b)("strong",{parentName:"h2"},"Engage")),Object(i.b)("h4",{id:"51-test-campaign-feature-for-outbound-campaigns"},"5.1 Test campaign feature for outbound campaigns"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Type: New feature")),Object(i.b)("p",null,"You can schedule campaigns targeting larger audience and test their notification messages just before launching it. You can add up to five test users and send real-time notifications\nThere is no need to create separate campaigns to check the end-user experience."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Available only from Cloud Engage."))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/whatsapp-campaign/#3-test-campaigns-recommended"},"Documentation link")),Object(i.b)("p",null,"How does it help the customers?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Lets business go through the end-user experience"),Object(i.b)("li",{parentName:"ul"},"Ensures variables are mapped to the respective column"),Object(i.b)("li",{parentName:"ul"},"Prevents business from sending wrong content to the customers"),Object(i.b)("li",{parentName:"ul"},"Reduces campaign failures due to parameters mismatch or images size issues")),Object(i.b)("h4",{id:"52--app-to-cloud-migration"},"5.2  App to cloud migration"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Type: Enhancement")),Object(i.b)("p",null,"Category : Upgradation to Cloud Engage"),Object(i.b)("p",null,"App bots are provided with an option to upgrade the Engage module by migrating all the campaigns and audience data with simple steps."),Object(i.b)("p",null,"App bots can now use new features available from CLOUD engage with improved UI/UX."),Object(i.b)("p",null,"The following are new in the New Engage Cloud -"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"User 360"),Object(i.b)("li",{parentName:"ul"},"Inbound Campaigns"),Object(i.b)("li",{parentName:"ul"},"Template manager"),Object(i.b)("li",{parentName:"ul"},"Viber Business outbound campaign")),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/Upgrade_new_engage_app"},"Documentation link")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Limitation:The migration to the new platform is not allowed for app bots that have schedule  (Status:pending) cron jobs with Function Executions."))))}p.isMDXComponent=!0},445:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);