"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[7127],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=o,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||r;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},46647:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"Upgrade to New Engage Module (for app bots)",sidebar_label:"Upgrade engage (App to Cloud)"},p=void 0,s={unversionedId:"cookbooks/Upgrade_new_engage_app",id:"cookbooks/Upgrade_new_engage_app",title:"Upgrade to New Engage Module (for app bots)",description:"App bots are now provided with an option to upgrade the Engage module by migrating all the campaign and audience data to the new engage module.",source:"@site/docs/cookbooks/Upgrade_new_engage_app.md",sourceDirName:"cookbooks",slug:"/cookbooks/Upgrade_new_engage_app",permalink:"/docs/cookbooks/Upgrade_new_engage_app",draft:!1,tags:[],version:"current",frontMatter:{title:"Upgrade to New Engage Module (for app bots)",sidebar_label:"Upgrade engage (App to Cloud)"},sidebar:"cookbooks",previous:{title:"Agent transfer without user information",permalink:"/docs/cookbooks/inbox/transferwithoutinfo"},next:{title:"Email outbound",permalink:"/docs/cookbooks/Understanding channels 101/email-outbound-101"}},u={},m=[{value:"What&#39;s new in Engage - Cloud ?",id:"whats-new-in-engage---cloud-",level:2},{value:"User 360",id:"user-360",level:3},{value:"<em>Know more about User 360</em>",id:"know-more-about-user-360",level:4},{value:"Template manager",id:"template-manager",level:3},{value:"Inbound campaigns",id:"inbound-campaigns",level:3},{value:"<em>Know more about Inbound Campaigns</em>",id:"know-more-about-inbound-campaigns",level:4},{value:"What are the limitations?",id:"what-are-the-limitations",level:2},{value:"Who cannot use this feature?",id:"who-cannot-use-this-feature",level:2},{value:"Step by Step guide for migration process",id:"step-by-step-guide-for-migration-process",level:2},{value:"Step 1: Login",id:"step-1-login",level:4},{value:"Step 2: Open Engagement",id:"step-2-open-engagement",level:4},{value:"Step 3: Start Migration",id:"step-3-start-migration",level:4},{value:"Step 4: Wait for Migration progress",id:"step-4-wait-for-migration-progress",level:4},{value:"Step 5: Proceed User data Migration",id:"step-5-proceed-user-data-migration",level:4},{value:"Step 6: Select Audience tables to be migarted",id:"step-6-select-audience-tables-to-be-migarted",level:4},{value:"Step 7: Map your audeince tables properties to new properties",id:"step-7-map-your-audeince-tables-properties-to-new-properties",level:4},{value:"Step 8: Complete User Data Migration",id:"step-8-complete-user-data-migration",level:4},{value:"Note:",id:"note",level:4},{value:"Few benefits of migrating to new cloud engage",id:"few-benefits-of-migrating-to-new-cloud-engage",level:2}],c={toc:m};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"App bots are now provided with an option to upgrade the Engage module by migrating all the campaign and audience data to the new engage module. "),(0,r.kt)("h2",{id:"whats-new-in-engage---cloud-"},"What's new in Engage - Cloud ?"),(0,r.kt)("h3",{id:"user-360"},"User 360"),(0,r.kt)("h4",{id:"know-more-about-user-360"},(0,r.kt)("em",{parentName:"h4"},(0,r.kt)("a",{parentName:"em",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview"},"Know more about User 360"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/dFehW6I.png",alt:null})),(0,r.kt)("h3",{id:"template-manager"},"Template manager"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/cEjUFmq.png",alt:null})),(0,r.kt)("h3",{id:"inbound-campaigns"},"Inbound campaigns"),(0,r.kt)("h4",{id:"know-more-about-inbound-campaigns"},(0,r.kt)("em",{parentName:"h4"},(0,r.kt)("a",{parentName:"em",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign/"},"Know more about Inbound Campaigns"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/MexHCVf.png",alt:null})),(0,r.kt)("h2",{id:"what-are-the-limitations"},"What are the limitations?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Up to ",(0,r.kt)("strong",{parentName:"li"},"5 audience table")," will be migrated to cloud platform"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Segment details will not be migrated"),". But you can download all the segment details once the migration is completed"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Scheduled campaigns (runs multiple times) will not be resumed"),". You need to schedule the campaigns again from cloud UI."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Function executions")," using cron jobs will not be supported.")),(0,r.kt)("h2",{id:"who-cannot-use-this-feature"},"Who cannot use this feature?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Bots which has active "',(0,r.kt)("strong",{parentName:"li"},"cron jobs"),'" which runs functions executions will not be able to proceed with the migration process.'),(0,r.kt)("li",{parentName:"ul"},"In case of any ",(0,r.kt)("strong",{parentName:"li"},"in-progress campaigns")," you will not be allowed to process with migration. You can try once the in-progress campaigns are completed.")),(0,r.kt)("h2",{id:"step-by-step-guide-for-migration-process"},"Step by Step guide for migration process"),(0,r.kt)("h4",{id:"step-1-login"},"Step 1: Login"),(0,r.kt)("p",null,"Login to ",(0,r.kt)("a",{parentName:"p",href:"https://app.yellowmessenger.com"},"https://app.yellowmessenger.com")," and open your bot"),(0,r.kt)("h4",{id:"step-2-open-engagement"},"Step 2: Open Engagement"),(0,r.kt)("p",null,'Navigate to Engagement module and click on "upgrade to new platform" from top right corner.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/iK8DUAJ.png",alt:null})),(0,r.kt)("h4",{id:"step-3-start-migration"},"Step 3: Start Migration"),(0,r.kt)("p",null,'What\'s new slides will give you a glimpse of new features which will be available in Engage - cloud platform. Click on "start migration" to proceed.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/nLhja7z.png",alt:null})),(0,r.kt)("h4",{id:"step-4-wait-for-migration-progress"},"Step 4: Wait for Migration progress"),(0,r.kt)("p",null,"Migration window will be opened and the below data will be migrated by default."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Preferences details"),(0,r.kt)("li",{parentName:"ol"},"Campaign reports and details")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/9nmccU3.png",alt:null})),(0,r.kt)("h4",{id:"step-5-proceed-user-data-migration"},"Step 5: Proceed User data Migration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User data migration is optional."),(0,r.kt)("li",{parentName:"ul"},'If you do not want to migrate the older audience table, you can give "skip" and start clean with new cloud  module by uploading the user data.'),(0,r.kt)("li",{parentName:"ul"},"If you want to migrate the user data to cloud, Click on start")),(0,r.kt)("h4",{id:"step-6-select-audience-tables-to-be-migarted"},"Step 6: Select Audience tables to be migarted"),(0,r.kt)("p",null,"You can select up to 5 audience table for migration.  Select and give next."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Note : Audience tables are sorted in ascending order based on number of rows present in each table."))),(0,r.kt)("p",null,"Here, I have selected 5 tables which I would need to migrate to new platform."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/RkzfnPx.png",alt:null})),(0,r.kt)("h4",{id:"step-7-map-your-audeince-tables-properties-to-new-properties"},"Step 7: Map your audeince tables properties to new properties"),(0,r.kt)("p",null,"In cloud engage, we maintain single user database called CDP (User 360). Hence we need to merge the audience tables from app to CDP attributes."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview"},"Learn more about CDP (User 360)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"From left side drop downs you can select you older column names."),(0,r.kt)("li",{parentName:"ul"},'Right side properties are "default CDP properties".'),(0,r.kt)("li",{parentName:"ul"},"You can create new property as well and map your existing columns."),(0,r.kt)("li",{parentName:"ul"},'Here, I need to map my older column "number" to "phone number" in new CDP property.')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/YGzyRzs.png",alt:null})),(0,r.kt)("p",null,"Here, I have ",(0,r.kt)("em",{parentName:"p"},"link")," and ",(0,r.kt)("em",{parentName:"p"},"offer code")," as new columns which is not in default CDP properties."),(0,r.kt)("p",null,'Hence creating, new attribute by clicking on "add new property" and mapping the column.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/C0bMC3u.gif",alt:null})),(0,r.kt)("h4",{id:"step-8-complete-user-data-migration"},"Step 8: Complete User Data Migration"),(0,r.kt)("p",null,"Once the user data migration started, the progress will be shown as below"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/q7qXLT8.png",alt:null})),(0,r.kt)("p",null,"Once the process is completed you can see this finish screen, where you can download the segment details and open Engage module in new platform."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/9Z9i5I5.png",alt:null})),(0,r.kt)("h4",{id:"note"},"Note:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'You will get this screen only once to download segment details. Post migration as soon as you click on "Engagement" from left vertical tab, you will be redirected to cloud engage.')),(0,r.kt)("h2",{id:"few-benefits-of-migrating-to-new-cloud-engage"},"Few benefits of migrating to new cloud engage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can use ",(0,r.kt)("strong",{parentName:"li"},"User 360 module")," which is helps you to unify your user data at single place and maintain rich profile across channels"),(0,r.kt)("li",{parentName:"ol"},"Improvised outbound campaign ",(0,r.kt)("strong",{parentName:"li"},"overview"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Whatsapp templates")," can be created and submitted directly from yellow's Engage module instead of raising SUD or from facebook business manager."),(0,r.kt)("li",{parentName:"ol"},"Manage templates across channels (SMS, email, whatsapp, Viber)"),(0,r.kt)("li",{parentName:"ol"},"You can use ",(0,r.kt)("strong",{parentName:"li"},"inbound campaigns")," module"),(0,r.kt)("li",{parentName:"ol"},"You can run ",(0,r.kt)("strong",{parentName:"li"},"Viber business outbound campaigns"))))}g.isMDXComponent=!0}}]);