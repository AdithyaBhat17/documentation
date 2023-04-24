"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6001],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(h,o(o({ref:e},p),{},{components:a})):n.createElement(h,o({ref:e},p))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57729:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"Get access to Call Details Report (CDR) of your voice bot on Insights module",sidebar_label:"Call details report (CDR)"},s=void 0,d={unversionedId:"cookbooks/voice-as-channel/reporting/advance/cdr",id:"cookbooks/voice-as-channel/reporting/advance/cdr",title:"Get access to Call Details Report (CDR) of your voice bot on Insights module",description:"In Data Explorer, CDR is available only for voice bots.",source:"@site/docs/cookbooks/voice-as-channel/reporting/advance/cdr.md",sourceDirName:"cookbooks/voice-as-channel/reporting/advance",slug:"/cookbooks/voice-as-channel/reporting/advance/cdr",permalink:"/docs/cookbooks/voice-as-channel/reporting/advance/cdr",draft:!1,tags:[],version:"current",frontMatter:{title:"Get access to Call Details Report (CDR) of your voice bot on Insights module",sidebar_label:"Call details report (CDR)"},sidebar:"cookbooks",previous:{title:"Voice dashboard",permalink:"/docs/cookbooks/voice-as-channel/reporting/dashboard"},next:{title:"Custom data report",permalink:"/docs/cookbooks/voice-as-channel/reporting/advance/convdata"}},p={},u=[{value:"1. How to access call details on Data Explorer",id:"1-how-to-access-call-details-on-data-explorer",level:2},{value:"1. Visualize call detail report",id:"1-visualize-call-detail-report",level:3},{value:"Use case 1: Create custom dasboards",id:"use-case-1-create-custom-dasboards",level:4},{value:"Use case 2: Schedule reports to be sent to your email",id:"use-case-2-schedule-reports-to-be-sent-to-your-email",level:4},{value:'<a name="cdr"></a> 2. CDR fields and their definitions',id:"-2-cdr-fields-and-their-definitions",level:2}],c={toc:u};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"In Data Explorer, CDR is available only for voice bots.")),(0,l.kt)("p",null,"This article focuses on ",(0,l.kt)("strong",{parentName:"p"},"Call detail report")," (CDR)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What is a call detail report?")),(0,l.kt)("p",null,"CDR is a report of telephony data obtained from each call (bot conversation with customer) for reporting and analytics purposes. Parameters of every call made through the ",(0,l.kt)("strong",{parentName:"p"},"yellow telephony system")," is recorded in the CDR, making it a reliable source of truth for call-related information."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The CDR table contains several fields that record various details about the call, such as ",(0,l.kt)("strong",{parentName:"li"},"call duration, caller ID, called number, call status, and call type"),". CDR fields are explained in the ",(0,l.kt)("a",{parentName:"li",href:"#cdr"},"last section")," of this article. "),(0,l.kt)("li",{parentName:"ul"},"CDR fields help businesses gain valuable insights into their call center operations and customer interactions."),(0,l.kt)("li",{parentName:"ul"},"By analyzing CDR data, businesses can ",(0,l.kt)("strong",{parentName:"li"},"identify trends and patterns")," in their call center operations, ",(0,l.kt)("strong",{parentName:"li"},"improve call quality"),", and ",(0,l.kt)("strong",{parentName:"li"},"enhance customer experience"),", make ",(0,l.kt)("strong",{parentName:"li"},"data-driven decisions")," and ",(0,l.kt)("strong",{parentName:"li"},"optimize")," the voice bot operations for maximum efficiency and effectiveness.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"1-how-to-access-call-details-on-data-explorer"},"1. How to access call details on Data Explorer"),(0,l.kt)("p",null,"To access the CDR for voice bots: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Navigate to ",(0,l.kt)("strong",{parentName:"li"},"Insights")," > ",(0,l.kt)("strong",{parentName:"li"},"Data Explorer"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/dmQSwnB.png",alt:null})),(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("strong",{parentName:"li"},"Call details report"),". You can see the report for the last 31 days. "),(0,l.kt)("li",{parentName:"ol"},"You can ",(0,l.kt)("strong",{parentName:"li"},"download")," this report as CSV by clicking the ",(0,l.kt)("strong",{parentName:"li"},"Actions")," button.",(0,l.kt)("br",{parentName:"li"}),(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/qp6CsVq.png",alt:null}))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"1-visualize-call-detail-report"},"1. Visualize call detail report"),(0,l.kt)("p",null,"On the data explorer, you have the option to filter or summarize the CDR data according to your specific needs. You can then visualize this data on a dashboard and download reports that only include the filtered data."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Details on how to perform tasks such as summarization, visualization, and query creation are provided in this ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer"},"guide"),". ")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"use-case-1-create-custom-dasboards"},"Use case 1: Create custom dasboards"),(0,l.kt)("p",null,"Suppose you're a ticket booking center using the yellow.ai voice bot, and you want to track the number of daily calls due to the different offers you provide. Here are the steps you can follow:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("strong",{parentName:"li"},"Call details report")," and click on the ",(0,l.kt)("strong",{parentName:"li"},"Summarize")," button."),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("strong",{parentName:"li"},"Add metrics")," and select ",(0,l.kt)("strong",{parentName:"li"},"Number of distinct values of"),"."),(0,l.kt)("li",{parentName:"ol"},"Choose ",(0,l.kt)("strong",{parentName:"li"},"Call ID")," to track calls from different IDs, and then click ",(0,l.kt)("strong",{parentName:"li"},"Save"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/OryFjfA.png",alt:null})),(0,l.kt)("li",{parentName:"ol"},"To filter the data further to obtain daily stats, select ",(0,l.kt)("strong",{parentName:"li"},"Timestamp")," under ",(0,l.kt)("strong",{parentName:"li"},"Group by")," and choose ",(0,l.kt)("strong",{parentName:"li"},"Day"),". Click ",(0,l.kt)("strong",{parentName:"li"},"Apply"),".",(0,l.kt)("img",{src:"https://i.imgur.com/yHXdF2z.png",width:"50%"})),(0,l.kt)("li",{parentName:"ol"},"You will now see a table with the required data. To visualize this data, click on the ",(0,l.kt)("strong",{parentName:"li"},"Visualization")," button."),(0,l.kt)("li",{parentName:"ol"},"Choose the type of visualization you want (e.g. bar graph), and click ",(0,l.kt)("strong",{parentName:"li"},"Done"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/UPVpmYk.png",alt:null})),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Save query"),", name your query, and then click ",(0,l.kt)("strong",{parentName:"li"},"Save"),". You can access this visualization as a ",(0,l.kt)("strong",{parentName:"li"},"saved report")," in the Data Explorer.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/fU5AoOq.png",alt:null})),(0,l.kt)("li",{parentName:"ol"},"Whenever you want to view the number of users per day, you can directly open the saved report from the ",(0,l.kt)("strong",{parentName:"li"},"Saved reports")," section in the Data Explorer.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/E0iwn1J.png",alt:null}))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"You can also use this data to create your own custom dashboard. For instructions on how to do this, click  ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#-52-add-report-to-dashboard"},"here"),".")),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"use-case-2-schedule-reports-to-be-sent-to-your-email"},"Use case 2: Schedule reports to be sent to your email"),(0,l.kt)("p",null,"Suppose you are a new support center on the yellow.ai voice bot, and you need to send a weekly report of the voice bot's billing duration to the accounts department. Here are the steps you can follow:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the ",(0,l.kt)("strong",{parentName:"li"},"Call Details Report")," and click the ",(0,l.kt)("strong",{parentName:"li"},"Summarize")," button."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Add metrics")," and select ",(0,l.kt)("strong",{parentName:"li"},"Number of distinct values of"),", then choose ",(0,l.kt)("strong",{parentName:"li"},"Call ID")," to fetch the unique calls attended by the bot."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Add metrics")," and select ",(0,l.kt)("strong",{parentName:"li"},"Sum of")," and ",(0,l.kt)("strong",{parentName:"li"},"Voice bot billing duration")," to calculate the total billing duration for the selected timestamp."),(0,l.kt)("li",{parentName:"ol"},"To filter the data further and get weekly stats, choose ",(0,l.kt)("strong",{parentName:"li"},"Timestamp")," under ",(0,l.kt)("strong",{parentName:"li"},"Group by")," and select ",(0,l.kt)("strong",{parentName:"li"},"Week"),". Click ",(0,l.kt)("strong",{parentName:"li"},"Apply"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/yITVlXG.png",alt:null})),(0,l.kt)("li",{parentName:"ol"},"You will now see a table with the required data. Click ",(0,l.kt)("strong",{parentName:"li"},"Save query"),", name your query, and click ",(0,l.kt)("strong",{parentName:"li"},"Save"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/GEy4pJe.png",alt:null})),(0,l.kt)("li",{parentName:"ol"},"(Optional) To visualize this data, click the Visualization button."),(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"Data Explorer")," > ",(0,l.kt)("strong",{parentName:"li"},"Saved Reports")," and open your custom report."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Schedule")," a weekly report by adding your email ID and the account team's email ID in the recipients field. Click ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#-51-schedule-a-report"},"here")," for the steps to ",(0,l.kt)("strong",{parentName:"li"},"schedule report"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/K59SALi.png",alt:null}))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Understand other operations on ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights"},"Insights modules"),". ")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"-2-cdr-fields-and-their-definitions"},(0,l.kt)("a",{name:"cdr"})," 2. CDR fields and their definitions"),(0,l.kt)("p",null,"The CDR report provides the following information:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Category"),(0,l.kt)("th",{parentName:"tr",align:null},"Fields"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp & Duration"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Ringing Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of time, in seconds, that the phone rang before the call was answered or ended.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"The total amount of time, in seconds, that the call lasted, including ringing, agent transfer, and conversation time.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Voice Bot Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration, in seconds, of the conversation between the user and the voice bot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Voice Billing Pulse"),(0,l.kt)("td",{parentName:"tr",align:null},"The time interval, in seconds, to which the Voice Bot Duration will be rounded up to for billing purposes (defaults to 60 sec).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Exempted Call Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration, in seconds, below which the Voice Bot Bill Duration will be set as 0, effectively exempting the call from billing (defaults to 0 sec).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Voice Bot Bill Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration, in seconds, of the conversation between the user and the voice bot, rounded up to the nearest Voice Billing Pulse interval for billing purposes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Start Time"),(0,l.kt)("td",{parentName:"tr",align:null},"The timestamp, in UTC, at which the call was initiated by the caller.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dial Time"),(0,l.kt)("td",{parentName:"tr",align:null},"The timestamp, in UTC, at which the call was dialed from the caller's phone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pickup Time"),(0,l.kt)("td",{parentName:"tr",align:null},"The timestamp, in UTC, at which the call was connected between the user and the bot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"End Time"),(0,l.kt)("td",{parentName:"tr",align:null},"The timestamp, in UTC, at which the call was hung up or disconnected between the user and the bot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Call Status & Disposition"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Status"),(0,l.kt)("td",{parentName:"tr",align:null},"The call status, such as ",(0,l.kt)("strong",{parentName:"td"},"Answered"),", ",(0,l.kt)("strong",{parentName:"td"},"Not Answered"),", ",(0,l.kt)("strong",{parentName:"td"},"Failed"),", or ",(0,l.kt)("strong",{parentName:"td"},"Not Valid"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Hangup Reason"),(0,l.kt)("td",{parentName:"tr",align:null},"A more detailed description of the hangup status, such as ",(0,l.kt)("strong",{parentName:"td"},"ring timeout")," or ",(0,l.kt)("strong",{parentName:"td"},"user busy"),". This field is used to provide a more refined view of why a call was not answered. ",(0,l.kt)("br",null)," ",(0,l.kt)("strong",{parentName:"td"},"List of hangup reasons"),": Invalid destination network error, Call switch off, Normal hangup, Bot failure, User busy, and Ring timeout.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Disconnected By"),(0,l.kt)("td",{parentName:"tr",align:null},"The entity that disconnected the call, such as ",(0,l.kt)("strong",{parentName:"td"},"User"),", ",(0,l.kt)("strong",{parentName:"td"},"Bot"),", or ",(0,l.kt)("strong",{parentName:"td"},"System"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AMD Status"),(0,l.kt)("td",{parentName:"tr",align:null},"A boolean value indicating whether the call landed on voice mail. This field is marked as True if an outbound call was landed on voice mail, and False otherwise.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Telco Code"),(0,l.kt)("td",{parentName:"tr",align:null},"The telco code received from the server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Telco Text"),(0,l.kt)("td",{parentName:"tr",align:null},"A text explaining the telco codes in detail. ",(0,l.kt)("a",{parentName:"td",href:"https://docs.google.com/spreadsheets/d/1j7zSREoLIgQiqkQm8zhtXvO_GHOmNiA0iylwl2C9_8c/edit#gid=0"},"Click here"),"  for codes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"User Drop Off Metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"Tracking the specific event at which the user dropped off, such as when the bot was playing a message, expecting a user response, or waiting for a user. The default value for this field is set to Unknown.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Call Identifier"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"SID (Session ID)"),(0,l.kt)("td",{parentName:"tr",align:null},"A system-generated unique identifier of the calls involving the Yellow platform.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Campaign ID"),(0,l.kt)("td",{parentName:"tr",align:null},"A system-generated unique identifier of the campaign placed from the Yellow platform. This field is empty for inbound calls by default.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Direction"),(0,l.kt)("td",{parentName:"tr",align:null},"Specifies the direction of the call, either ",(0,l.kt)("strong",{parentName:"td"},"Inbound")," or ",(0,l.kt)("strong",{parentName:"td"},"Outbound"),". For inbound calls, the Yellow platform is the call receiver from the user, and for outbound calls, the Yellow platform initiates the call to the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"From"),(0,l.kt)("td",{parentName:"tr",align:null},"The number from which the call is initiated. For inbound calls, this is the user's number, and for outbound calls, this is the bot's associated number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"To"),(0,l.kt)("td",{parentName:"tr",align:null},"The number on which the call is received. For outbound calls, this is the user's number, and for inbound calls, this is the bot's associated number.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Host"),(0,l.kt)("td",{parentName:"tr",align:null},"The machine/server information on which the call has landed. Some high-traffic calls may be routed through multiple servers.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Extra Params"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional parameters that can be sent with each outbound campaign call request, such as name, state, policy number, etc. These parameters can be used in the bot logic to personalize the conversation with the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"BotId"),(0,l.kt)("td",{parentName:"tr",align:null},"Each bot on the Yellow platform has a unique bot ID, and calls are diverted to that bot to continue the conversation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Recording Gateway"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows ",(0,l.kt)("strong",{parentName:"td"},"Default"),", if the Yellow storage solution is utilized or the name of the storage, if the customer has used external storage to push recording files.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Call Forwarding"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Forwarding Number"),(0,l.kt)("td",{parentName:"tr",align:null},"This records the phone number of the agent to whom the call is transferred by the bot during an agent transfer. If the call is not transferred to any agent, the field is set to null.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Child Legs"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON object that stores the content of the forwarded call, including its duration, timestamp, phone number, status, and other related information. It is used to keep track of the call transfer process and the status of the transferred call.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Call Content"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Transcripts"),(0,l.kt)("td",{parentName:"tr",align:null},"An array of user responses to the voice bot, captured during the call. These transcripts are generated through speech-to-text (STT) technology, which converts the user's spoken words into text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Recording URL"),(0,l.kt)("td",{parentName:"tr",align:null},"An URL to the end-to-end call recording of the call, which is usually recorded by default. Users have the option to pause recording during certain sections of the call or stop recording altogether as part of the bot logic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"TTS Characters"),(0,l.kt)("td",{parentName:"tr",align:null},"This is used to capture the total number of characters used in the text-to-speech (TTS) responses provided by the bot during the call.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"STT Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Records the duration in seconds for which the speech-to-text (STT) engine took to convert the user's spoken words into text.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Call Failure"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Failover Type"),(0,l.kt)("td",{parentName:"tr",align:null},"This field in the call data specifies the action taken by the platform in case of bot failover. The possible actions are ",(0,l.kt)("strong",{parentName:"td"},"call-forward with no msg"),", ",(0,l.kt)("strong",{parentName:"td"},"call-forward with a msg"),", ",(0,l.kt)("strong",{parentName:"td"},"hangup"),", ",(0,l.kt)("strong",{parentName:"td"},"hangup with a msg"),", and the field is empty if failover did not occur.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Bot Failed"),(0,l.kt)("td",{parentName:"tr",align:null},"Marked as ",(0,l.kt)("strong",{parentName:"td"},"True")," if the platform times out for any user response, and ",(0,l.kt)("strong",{parentName:"td"},"False")," if the platform responds to the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Bot Failover"),(0,l.kt)("td",{parentName:"tr",align:null},"Marked as ",(0,l.kt)("strong",{parentName:"td"},"True")," if the bot encountered technical issues during the call initiation, and ",(0,l.kt)("strong",{parentName:"td"},"False")," otherwise.")))))}m.isMDXComponent=!0}}]);