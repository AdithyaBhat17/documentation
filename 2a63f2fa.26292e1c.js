(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(457)),i=["components"],l={title:"Upgrade to New Engage Module (for app bots)",sidebar_label:"Upgrade engage (App to Cloud)"},c={unversionedId:"cookbooks/Upgrade_new_engage_app",id:"cookbooks/Upgrade_new_engage_app",isDocsHomePage:!1,title:"Upgrade to New Engage Module (for app bots)",description:"App bots are now provided with an option to upgrade the Engage module by migrating all the campaign and audience data to the new engage module.",source:"@site/docs/cookbooks/Upgrade_new_engage_app.md",slug:"/cookbooks/Upgrade_new_engage_app",permalink:"/docs/cookbooks/Upgrade_new_engage_app",version:"current",sidebar_label:"Upgrade engage (App to Cloud)",sidebar:"cookbooks",previous:{title:"Notify Agents when they are offline/busy/away",permalink:"/docs/cookbooks/inbox/notifyagents"},next:{title:"Email outbound",permalink:"/docs/cookbooks/Understanding channels 101/email-outbound-101"}},p=[{value:"What&#39;s new in Engage - Cloud ?",id:"whats-new-in-engage---cloud-",children:[{value:"User 360",id:"user-360",children:[]},{value:"Template manager",id:"template-manager",children:[]},{value:"Inbound campaigns",id:"inbound-campaigns",children:[]}]},{value:"What are the limitations?",id:"what-are-the-limitations",children:[]},{value:"Who cannot use this feature?",id:"who-cannot-use-this-feature",children:[]},{value:"Step by Step guide for migration process",id:"step-by-step-guide-for-migration-process",children:[]},{value:"Few benefits of migrating to new cloud engage",id:"few-benefits-of-migrating-to-new-cloud-engage",children:[]}],b={toc:p};function s(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"App bots are now provided with an option to upgrade the Engage module by migrating all the campaign and audience data to the new engage module. "),Object(r.b)("h2",{id:"whats-new-in-engage---cloud-"},"What's new in Engage - Cloud ?"),Object(r.b)("h3",{id:"user-360"},"User 360"),Object(r.b)("h4",{id:"know-more-about-user-360"},Object(r.b)("em",{parentName:"h4"},Object(r.b)("a",{parentName:"em",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/cdp/overview"},"Know more about User 360"))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/dFehW6I.png",alt:null})),Object(r.b)("h3",{id:"template-manager"},"Template manager"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/cEjUFmq.png",alt:null})),Object(r.b)("h3",{id:"inbound-campaigns"},"Inbound campaigns"),Object(r.b)("h4",{id:"know-more-about-inbound-campaigns"},Object(r.b)("em",{parentName:"h4"},Object(r.b)("a",{parentName:"em",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign/"},"Know more about Inbound Campaigns"))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/MexHCVf.png",alt:null})),Object(r.b)("h2",{id:"what-are-the-limitations"},"What are the limitations?"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Up to ",Object(r.b)("strong",{parentName:"li"},"5 audience table")," will be migrated to cloud platform"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Segment details will not be migrated"),". But you can download all the segment details once the migration is completed"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Scheduled campaigns (runs multiple times) will not be resumed"),". You need to schedule the campaigns again from cloud UI."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Function executions")," using cron jobs will not be supported.")),Object(r.b)("h2",{id:"who-cannot-use-this-feature"},"Who cannot use this feature?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'Bots which has active "',Object(r.b)("strong",{parentName:"li"},"cron jobs"),'" which runs functions executions will not be able to proceed with the migration process.'),Object(r.b)("li",{parentName:"ul"},"In case of any ",Object(r.b)("strong",{parentName:"li"},"in-progress campaigns")," you will not be allowed to process with migration. You can try once the in-progress campaigns are completed.")),Object(r.b)("h2",{id:"step-by-step-guide-for-migration-process"},"Step by Step guide for migration process"),Object(r.b)("h4",{id:"step-1-login"},"Step 1: Login"),Object(r.b)("p",null,"Login to ",Object(r.b)("a",{parentName:"p",href:"https://app.yellowmessenger.com"},"https://app.yellowmessenger.com")," and open your bot"),Object(r.b)("h4",{id:"step-2-open-engagement"},"Step 2: Open Engagement"),Object(r.b)("p",null,'Navigate to Engagement module and click on "upgrade to new platform" from top right corner.'),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/iK8DUAJ.png",alt:null})),Object(r.b)("h4",{id:"step-3-start-migration"},"Step 3: Start Migration"),Object(r.b)("p",null,'What\'s new slides will give you a glimpse of new features which will be available in Engage - cloud platform. Click on "start migration" to proceed.'),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/nLhja7z.png",alt:null})),Object(r.b)("h4",{id:"step-4-wait-for-migration-progress"},"Step 4: Wait for Migration progress"),Object(r.b)("p",null,"Migration window will be opened and the below data will be migrated by default."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Preferences details"),Object(r.b)("li",{parentName:"ol"},"Campaign reports and details")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/9nmccU3.png",alt:null})),Object(r.b)("h4",{id:"step-5-proceed-user-data-migration"},"Step 5: Proceed User data Migration"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"User data migration is optional."),Object(r.b)("li",{parentName:"ul"},'If you do not want to migrate the older audience table, you can give "skip" and start clean with new cloud  module by uploading the user data.'),Object(r.b)("li",{parentName:"ul"},"If you want to migrate the user data to cloud, Click on start")),Object(r.b)("h4",{id:"step-6-select-audience-tables-to-be-migarted"},"Step 6: Select Audience tables to be migarted"),Object(r.b)("p",null,"You can select up to 5 audience table for migration.  Select and give next."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"Note : Audience tables are sorted in ascending order based on number of rows present in each table."))),Object(r.b)("p",null,"Here, I have selected 5 tables which I would need to migrate to new platform."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/RkzfnPx.png",alt:null})),Object(r.b)("h4",{id:"step-7-map-your-audeince-tables-properties-to-new-properties"},"Step 7: Map your audeince tables properties to new properties"),Object(r.b)("p",null,"In cloud engage, we maintain single user database called CDP (User 360). Hence we need to merge the audience tables from app to CDP attributes."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/cdp/overview"},"Learn more about CDP (User 360)")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"From left side drop downs you can select you older column names."),Object(r.b)("li",{parentName:"ul"},'Right side properties are "default CDP properties".'),Object(r.b)("li",{parentName:"ul"},"You can create new property as well and map your existing columns."),Object(r.b)("li",{parentName:"ul"},'Here, I need to map my older column "number" to "phone number" in new CDP property.')),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/YGzyRzs.png",alt:null})),Object(r.b)("p",null,"Here, I have ",Object(r.b)("em",{parentName:"p"},"link")," and ",Object(r.b)("em",{parentName:"p"},"offer code")," as new columns which is not in default CDP properties."),Object(r.b)("p",null,'Hence creating, new attribute by clicking on "add new property" and mapping the column.'),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/C0bMC3u.gif",alt:null})),Object(r.b)("h4",{id:"step-8-complete-user-data-migration"},"Step 8: Complete User Data Migration"),Object(r.b)("p",null,"Once the user data migration started, the progress will be shown as below"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/q7qXLT8.png",alt:null})),Object(r.b)("p",null,"Once the process is completed you can see this finish screen, where you can download the segment details and open Engage module in new platform."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/9Z9i5I5.png",alt:null})),Object(r.b)("h4",{id:"note"},"Note:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},'You will get this screen only once to download segment details. Post migration as soon as you click on "Engagement" from left vertical tab, you will be redirected to cloud engage.')),Object(r.b)("h2",{id:"few-benefits-of-migrating-to-new-cloud-engage"},"Few benefits of migrating to new cloud engage"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You can use ",Object(r.b)("strong",{parentName:"li"},"User 360 module")," which is helps you to unify your user data at single place and maintain rich profile across channels"),Object(r.b)("li",{parentName:"ol"},"Improvised outbound campaign ",Object(r.b)("strong",{parentName:"li"},"overview"),"."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Whatsapp templates")," can be created and submitted directly from yellow's Engage module instead of raising SUD or from facebook business manager."),Object(r.b)("li",{parentName:"ol"},"Manage templates across channels (SMS, email, whatsapp, Viber)"),Object(r.b)("li",{parentName:"ol"},"You can use ",Object(r.b)("strong",{parentName:"li"},"inbound campaigns")," module"),Object(r.b)("li",{parentName:"ol"},"You can run ",Object(r.b)("strong",{parentName:"li"},"Viber business outbound campaigns"))))}s.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return n?o.a.createElement(d,l(l({ref:t},p),{},{components:n})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);