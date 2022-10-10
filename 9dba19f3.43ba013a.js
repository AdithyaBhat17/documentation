(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{292:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return u}));var n=o(3),a=o(7),r=(o(0),o(446)),i=["components"],c={title:"July updates",sidebar_label:"July updates"},s={unversionedId:"updates/2022/july",id:"updates/2022/july",isDocsHomePage:!1,title:"July updates",description:"1. Studio",source:"@site/docs/updates/2022/july.md",slug:"/updates/2022/july",permalink:"/docs/updates/2022/july",version:"current",sidebar_label:"July updates",sidebar:"updates",previous:{title:"August updates",permalink:"/docs/updates/2022/aug"}},l=[{value:"1. Studio",id:"1-studio",children:[]},{value:"2. Inbox",id:"2-inbox",children:[]}],p={toc:l};function u(e){var t=e.components,o=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"1-studio"},"1. Studio"),Object(r.b)("h4",{id:"restructured-studio-navigation-as-per-the-usage-flow"},"Restructured Studio navigation as per the usage flow"),Object(r.b)("p",null,"All options in the Studio navigation are reordered according to the usage flow. This makes more convenient for you to navigate between the options sequentially when configuring a bot."),Object(r.b)("p",null,"New structure of the options in Studio's left navigation bar -"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/02x4CVF.png",alt:null})),Object(r.b)("p",null,"Once you enter a particular screen (say Train), here is how the sub-options are rearranged-"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/hgkY4sq.png",alt:null})),Object(r.b)("h4",{id:"autocomplete-suggestions-for-bot-users"},"Autocomplete suggestions for bot users"),Object(r.b)("p",null,"You can now make your bot users' life easy through our autocomplete suggestions. With this feature, the bot can predict the rest of the word when users types in the bot."),Object(r.b)("p",null,"Scope of the Autocomplete feature -"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Prompt level"),"- This works inside a prompt (after you ask a question and wait). You can configure this for ",Object(r.b)("strong",{parentName:"p"},"Database Column"),", ",Object(r.b)("strong",{parentName:"p"},"List entity"),", and ",Object(r.b)("strong",{parentName:"p"},"User properties"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Global level")," - This works outside of a Journey improving discoverability."))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#auto-complete"},"Know more"))),Object(r.b)("h4",{id:"zero-shot-model-to-replace-manual-training-of-intents"},"Zero Shot Model to replace manual training of intents"),Object(r.b)("p",null,"Now our system can automatically identify intents based on the intent naming. It works on Zero Shot Learning where you do not need to manually train each utterance. Just name intents properly to make it work best globally. For complete guidelines, see ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents/#4-best-practices"},"Naming intents"),"."),Object(r.b)("h4",{id:"make-localisation-more-effective-in-nodes"},"Make Localisation more effective in Nodes"),Object(r.b)("p",null,"We do have auto-translation support that can translate your text to your preferred language. However, there are several cases where your tranlation quality is compromised. With this release, you can get your text translated properly and add translated content for each node manually."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/localization"},"Know more"))),Object(r.b)("h4",{id:"real-time-conversation-logs"},"Real-time Conversation Logs"),Object(r.b)("p",null,"You can now monitor all the conversations real-time. The auto-tagging of problems identified in the conversation are also made real-time."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs"},"Know about Conversation logs"))),Object(r.b)("h4",{id:"add-api-to-sync-data-to-the-database"},"Add API to Sync data to the database"),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"Sync database")," node is available in Workflow - actions. You can now insert, update or import databases to external sources using APIs. You can update database tables in a scheduled manner using APIs."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Export file format"),":  CSV")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#sync-database"},"Know more"))),Object(r.b)("h4",{id:"quick-reply-buttons-in-whatsapp"},"Quick Reply buttons in WhatsApp"),Object(r.b)("p",null,"Earlier, WhatsApp bots used to support only lists for Quick replies. With this release, Quick replies node can also have buttons. You can switch between buttons and numbered list according to your preference."),Object(r.b)("p",null,"It supports upto three buttons and each button can have up to 20 characters. If you try to add more than 3 buttons, it defaults to the numbered list."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#quick-reply-node-for-whatsapp"},"Know more"))),Object(r.b)("h4",{id:"new-languages-support-in-document-cognition"},"New languages support in Document Cognition"),Object(r.b)("p",null,"Document Cognition now supports five more European languages. You can input content in Czech, Romanian, Polish, Croatian, Slovakia) German, Spanish, and French."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"}," ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition"},"Know about Document cognition"))),Object(r.b)("h2",{id:"2-inbox"},"2. Inbox"),Object(r.b)("h4",{id:"the-search-functionality-of-chat-is-revamped"},"The search functionality of Chat is revamped"),Object(r.b)("p",null,"Agents can find information like details & messages from all their chat tickets easily."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/Kn0ajbu.png",alt:null})),Object(r.b)("h4",{id:"data-explorer-integration-was-added-to-inbox"},"Data Explorer Integration was added to Inbox"),Object(r.b)("p",null,"Inbox data is exposed to Data explorer which allows businesses to build, and monitors custom reports & dashboards of choice."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("img",{parentName:"strong",src:"https://lh6.googleusercontent.com/YHOhZs9sJtFTkeRp_Fmtu7gOTMMUB7HJiTHmhY2AUoQWB844DUZlEe7sBFRjZCQTy0r2LPofIxSWeThywXJiw4c-9NdJR7ekKUKY_gi7x6Gh25xz7hgrnvdqfnMMeid7jSd6vEIKd_bct4v16N2WVOdDNg",alt:null}))),Object(r.b)("h4",{id:"the-video-calling-option-is-enhanced"},"The video calling option is enhanced"),Object(r.b)("p",null,"Customers can set custom virtual backgrounds for their agents and also redirect end-users to their own websites after the video call -to provide a consistent support experience. "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/chats-configuration/video-call-settings"},"Know more"))),Object(r.b)("h4",{id:"email-ticketing-now-works-without-any-code"},"Email ticketing now works without any code"),Object(r.b)("p",null,"No-code email ticketing is added to support the use case in cloud bots. "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Know ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/email-ticketing"},"more"),".")),Object(r.b)("h5",{id:"detailed-agent-performance-reports-can-be-downloaded-for-email-tickets"},"Detailed Agent performance reports can be downloaded for email tickets"),Object(r.b)("p",null,"A detailed dump of all metrics related to agents resolving tickets, to better understand the efficiency & performance of the team. "),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Know ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/reports/ticket-agent-performance-report"},"more"),". ")),Object(r.b)("h5",{id:"analytics-are-displayed-for-email-ticketing"},"Analytics are displayed for Email ticketing"),Object(r.b)("p",null,"Agents & Admins can get a quick insight into the status of incoming tickets, and performance metrics like AHT, FRT etc., to make decisions to optimize them."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/e896xIT.png",alt:null})),Object(r.b)("h5",{id:"email-ticketing-transcripts-can-be-copied-and-downloaded"},"Email ticketing transcripts can be copied and downloaded"),Object(r.b)("p",null,"Transcripts for each email ticket are used for legal, quality assurance or for auditing purposes. They can now be copied and downloaded. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("img",{parentName:"strong",src:"https://lh4.googleusercontent.com/8vaNdIlLcn4GwIRHGQ2UPXXZGevq6fwVi9G_WLjCvwzoREH1ZSHi_O14ut-p9OZi27dKwAqLSkGnDs0e-1pTV7leB5CfIFlSu6hv0RrmvBXPhNQGxajZ_Md-_aGdg7mf2kE1Qaf1Ghz6O0G5n8pMXSryfQ",alt:null}))),Object(r.b)("h4",{id:"email-ids-can-be-categorised-based-on-groups"},"Email IDs can be categorised based on groups"),Object(r.b)("p",null,"You can now map email IDs to certain groups to categorize & respond back easily."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("img",{parentName:"strong",src:"https://lh6.googleusercontent.com/e8UgQ44qFMHGmsk9nSZ6b1gZIbcgtsSrh9eeTBJ7pLhLkydsaKmmGwoG3QsT5io_MhemYrTodCTMXbic0G_RJZtSv5HNqpqYc2h3DW3xERMbbEXofQnBsVtYnKzpxyJtQHnSuSQ9ScUoHpxyjpTSbjj0EA",alt:null}))))}u.isMDXComponent=!0},446:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(o),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return o?a.a.createElement(m,c(c({ref:t},l),{},{components:o})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=o[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);