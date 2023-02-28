"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[3908],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(k,o(o({ref:e},u),{},{components:a})):n.createElement(k,o({ref:e},u))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42050:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"February 2023 product updates",sidebar_label:"Latest product updates (Feb-23)",featured:!0},s=void 0,p={unversionedId:"updates/overview",id:"updates/overview",title:"February 2023 product updates",description:"\x3c!--",source:"@site/docs/updates/overview.md",sourceDirName:"updates",slug:"/updates/overview",permalink:"/docs/updates/overview",draft:!1,tags:[],version:"current",frontMatter:{title:"February 2023 product updates",sidebar_label:"Latest product updates (Feb-23)",featured:!0},sidebar:"updates",next:{title:"January 2023",permalink:"/docs/updates/2022/jan2023"}},u={},d=[{value:"Studio",id:"studio",level:2},{value:"Design",id:"design",level:2},{value:"Voice",id:"voice",level:2},{value:"Widgets",id:"widgets",level:2},{value:"Marketplace",id:"marketplace",level:2},{value:"Engage",id:"engage",level:2}],c={toc:d};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"studio"},"Studio"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"New features"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Updated behavior of validation function in prompt nodes")," ",(0,l.kt)("br",null),"(Applicable to the Delivery QA Team)"),(0,l.kt)("td",{parentName:"tr",align:null},"Bot QA team can remove steps to validate Prompt Nodes (",(0,l.kt)("strong",{parentName:"td"},"Name, Email, Phone and Location"),") from their QA checklist as they are now handled by the platform.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"New features"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Voice Input node v0 to design dynamic voice flows")," ",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Voice input node is used to take inputs in the voice channel. It replaces 15+ nodes that were previously used to build a voice bot flow. ",(0,l.kt)("br",null)," Common inputs and settings are pre-filled, this reduces the lines of code written for validation. ",(0,l.kt)("br",null)," You can experience the conversation without previewing the bot with SSML quick hearing and testing features. ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput"},(0,l.kt)("strong",{parentName:"a"},"Learn more")))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"design"},"Design"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"New features"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Conversation designer for voice bots to design conversations before development")," ",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"A simple easy-to-use tool to design voice conversations, preview, and push for development. ",(0,l.kt)("br",null)," Design and Studio modules are in sync with the design, all the flows that you design on this module are automatically converted into builder flows. Bot persona and node-level settings are easily configurable. ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/design/convdesignvoice"},(0,l.kt)("strong",{parentName:"a"},"Learn more")))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"voice"},"Voice"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"New features"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Context-aware interruption handling")," ",(0,l.kt)("br",null)," (Private-Beta)",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"To ensure that only relevant inputs from the callers are considered as interruptions, the voice bot can be configured to identify valid interruptions (positive and negative cases). With a positive interruption, the bot stops speaking and allows the user to converse. With negative interruption(background noise), the bot continues speaking.",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/usecases/interrupthandling"},(0,l.kt)("strong",{parentName:"a"},"Learn more")))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"New features"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Auto-language detection")," ",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"You can now interact with the bot in multiple languages without manually selecting the language at any point.",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/usecases/languagedetection"},(0,l.kt)("strong",{parentName:"a"},"Learn more")))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"widgets"},"Widgets"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Enhancement"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Themes and changes on chat widget setup")),(0,l.kt)("td",{parentName:"tr",align:null},"- You can now select between Light or Dark theme.",(0,l.kt)("br",null)," - Colour schemes are now compliant with WCAG\u2019s accessibility standards. ",(0,l.kt)("br",null)," - You can choose between Solid, or Gradient colours for title bar. ",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget"},(0,l.kt)("strong",{parentName:"a"},"Learn more")))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"marketplace"},"Marketplace"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"New template"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"WhatsApp starter pack")),(0,l.kt)("td",{parentName:"tr",align:null},"Templates added to help showcase the implementation of buttons, lists, and date validators on WhatsApp. These can be easily customized and reused. ",(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget"},(0,l.kt)("strong",{parentName:"a"},"Whatsapp list")),(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.yellow.ai/marketplace/a1113aea29b76704cbf3f77bf89761ad"},(0,l.kt)("strong",{parentName:"a"},"Whatsapp buttons")),(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://cloud.yellow.ai/marketplace/33abc8f07ffc4b6e1cd047f9ad0c0e62"},(0,l.kt)("strong",{parentName:"a"},"Whatsapp date validator")))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"New template"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Healthcare template on WhatsApp channel")),(0,l.kt)("td",{parentName:"tr",align:null},"This template has New patient registration, Book a consultation, Collect reports, Talk to support, and Locate nearby clinic use cases. ",(0,l.kt)("br",null)," ",(0,l.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/cookbooks/marketplace-templates/healthcare_template"},(0,l.kt)("strong",{parentName:"a"},"Learn more")))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"engage"},"Engage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"New features"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Omni channel campaign planning tool (Flows)")," ",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"You can easily plan and coordinate your campaigns across Email, WhatsApp, SMS, Voice, and more, from Engage module to reach audience on your preferred channels. You will also have access to valuable insights and analytics that will help you measure the effectiveness of the campaigns and make informed decisions about marketing strategy.",(0,l.kt)("br",null))))))}m.isMDXComponent=!0}}]);