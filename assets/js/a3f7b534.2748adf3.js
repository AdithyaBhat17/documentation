"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[87256],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78145:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Call Details Report (CDR) of your voice bot on Insights module",sidebar_label:"Auto-generated call details report"},s=void 0,c={unversionedId:"cookbooks/voice-as-channel/reporting/cdr",id:"cookbooks/voice-as-channel/reporting/cdr",title:"Call Details Report (CDR) of your voice bot on Insights module",description:"In Data Explorer, CDR is available only for voice bots. The data will be updated after the call is completed.",source:"@site/docs/cookbooks/voice-as-channel/reporting/cdr.md",sourceDirName:"cookbooks/voice-as-channel/reporting",slug:"/cookbooks/voice-as-channel/reporting/cdr",permalink:"/docs/cookbooks/voice-as-channel/reporting/cdr",draft:!1,tags:[],version:"current",frontMatter:{title:"Call Details Report (CDR) of your voice bot on Insights module",sidebar_label:"Auto-generated call details report"},sidebar:"platform_concepts",previous:{title:"Simplified voice dashboard",permalink:"/docs/cookbooks/voice-as-channel/reporting/dashboard"},next:{title:"Conversational details report",permalink:"/docs/cookbooks/voice-as-channel/reporting/convdata"}},p={},d=[{value:"1. Call details report overview",id:"1-call-details-report-overview",level:2},{value:"2. Access call details(CDR) on Data Explorer",id:"2-access-call-detailscdr-on-data-explorer",level:2},{value:"3. Visualize call detail report",id:"3-visualize-call-detail-report",level:2},{value:"Use case 1: Create custom dasboards",id:"use-case-1-create-custom-dasboards",level:3},{value:"Use case 2: Schedule reports to be sent to your email",id:"use-case-2-schedule-reports-to-be-sent-to-your-email",level:3},{value:'<a name="cdr"></a> 4. CDR fields and their definitions',id:"-4-cdr-fields-and-their-definitions",level:2},{value:"Call ID",id:"call-id",level:3},{value:"Call start time",id:"call-start-time",level:3},{value:"Call end time",id:"call-end-time",level:3},{value:"Ring Duration",id:"ring-duration",level:3},{value:"Call Duration",id:"call-duration",level:3},{value:"Voice Bot Duration",id:"voice-bot-duration",level:3},{value:"Voice Bot Bill Duration",id:"voice-bot-bill-duration",level:3},{value:"Campaign ID",id:"campaign-id",level:3},{value:"Hangup Reason",id:"hangup-reason",level:3},{value:"Hangup Source",id:"hangup-source",level:3},{value:"Source Number",id:"source-number",level:3},{value:"Destination Number",id:"destination-number",level:3},{value:"Call Status",id:"call-status",level:3},{value:"Direction",id:"direction",level:3},{value:"Recording URL",id:"recording-url",level:3}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In Data Explorer, CDR is available only for voice bots. The data will be updated after the call is completed. ")),(0,o.kt)("p",null,"This article focuses on ",(0,o.kt)("strong",{parentName:"p"},"Call details report")," (CDR) for voice bots, a database table maintained by yellow.ai platform which records more than 15+ important metrics (like start time, duration, recording url etc) for each call."),(0,o.kt)("h2",{id:"1-call-details-report-overview"},"1. Call details report overview"),(0,o.kt)("p",null,"CDR is a report of telephony data obtained from each call (bot conversation with customer) for reporting and analytics purposes. Parameters of every call made through the ",(0,o.kt)("strong",{parentName:"p"},"yellow telephony system")," is recorded in the CDR, making it a reliable source of truth for call-related information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CDR fields help businesses gain valuable insights into their call center operations and customer interactions."),(0,o.kt)("li",{parentName:"ul"},"The CDR table contains several fields that record various details about the call, such as ",(0,o.kt)("strong",{parentName:"li"},"call duration, caller ID, called number, call status, and call type"),". CDR fields are explained in the ",(0,o.kt)("a",{parentName:"li",href:"#cdr"},"last section")," of this article. "),(0,o.kt)("li",{parentName:"ul"},"By analyzing CDR data, businesses can ",(0,o.kt)("strong",{parentName:"li"},"identify trends and patterns")," in their call center operations, ",(0,o.kt)("strong",{parentName:"li"},"improve call quality"),", and ",(0,o.kt)("strong",{parentName:"li"},"enhance customer experience"),", make ",(0,o.kt)("strong",{parentName:"li"},"data-driven decisions")," and ",(0,o.kt)("strong",{parentName:"li"},"optimize")," the voice bot operations for maximum efficiency and effectiveness.")),(0,o.kt)("p",null,"Examples of insights you can derive from the auto generated call details report: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Retrieve a list of users who disconnected calls during the last 7 days."),(0,o.kt)("li",{parentName:"ul"},"Retrieve the answering rate for a specific campaign (identified by its ID) that was launched last Sunday."),(0,o.kt)("li",{parentName:"ul"},"Retrieve daily total calls handled by the voice bot.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"2-access-call-detailscdr-on-data-explorer"},"2. Access call details(CDR) on Data Explorer"),(0,o.kt)("p",null,"To access the CDR for voice bots: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("strong",{parentName:"li"},"Insights")," > ",(0,o.kt)("strong",{parentName:"li"},"Data Explorer"),".\n",(0,o.kt)("img",{parentName:"li",src:"https://i.imgur.com/dmQSwnB.png",alt:null})),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Call details report"),". You can see the report for the last 31 days. "),(0,o.kt)("li",{parentName:"ol"},"You can ",(0,o.kt)("strong",{parentName:"li"},"download")," this report as CSV by clicking the ",(0,o.kt)("strong",{parentName:"li"},"Actions")," button.\n",(0,o.kt)("img",{parentName:"li",src:"https://i.imgur.com/qp6CsVq.png",alt:null}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"3-visualize-call-detail-report"},"3. Visualize call detail report"),(0,o.kt)("p",null,"On the data explorer, you have the option to filter or summarize the CDR data according to your specific needs. You can then visualize this data on a dashboard and download reports that only include the filtered data."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Details on how to perform tasks such as summarization, visualization, and query creation are provided in this ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/intro"},"guide"),". ")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"use-case-1-create-custom-dasboards"},"Use case 1: Create custom dasboards"),(0,o.kt)("p",null,"Suppose you're a ticket booking center using the yellow.ai voice bot, and you want to track the number of daily calls due to the different offers you provide. Here are the steps you can follow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Call details report")," and click on the ",(0,o.kt)("strong",{parentName:"p"},"Summarize")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Add metrics")," and select ",(0,o.kt)("strong",{parentName:"p"},"Number of distinct values of"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose ",(0,o.kt)("strong",{parentName:"p"},"Call ID")," to track calls from different IDs, and then click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/OryFjfA.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To filter the data further to obtain daily stats, select ",(0,o.kt)("strong",{parentName:"p"},"Timestamp")," under ",(0,o.kt)("strong",{parentName:"p"},"Group by")," and choose ",(0,o.kt)("strong",{parentName:"p"},"Day"),". Click ",(0,o.kt)("strong",{parentName:"p"},"Apply"),". "),(0,o.kt)("img",{src:"https://i.imgur.com/yHXdF2z.png",width:"50%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will now see a table with the required data. To visualize this data, click on the ",(0,o.kt)("strong",{parentName:"p"},"Visualization")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose the type of visualization you want (e.g. bar graph), and click ",(0,o.kt)("strong",{parentName:"p"},"Done"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/UPVpmYk.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save query"),", name your query, and then click ",(0,o.kt)("strong",{parentName:"p"},"Save"),". You can access this visualization as a ",(0,o.kt)("strong",{parentName:"p"},"saved report")," in the Data Explorer."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/fU5AoOq.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Whenever you want to view the number of users per day, you can directly open the saved report from the ",(0,o.kt)("strong",{parentName:"p"},"Saved reports")," section in the Data Explorer."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/E0iwn1J.png",alt:null})))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also use this data to create your own custom dashboard. For instructions on how to do this, click  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/dashboards"},"here"),".")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"use-case-2-schedule-reports-to-be-sent-to-your-email"},"Use case 2: Schedule reports to be sent to your email"),(0,o.kt)("p",null,"Suppose you are a new support center on the yellow.ai voice bot, and you need to send a weekly report of the voice bot's billing duration to the accounts department. Here are the steps you can follow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("strong",{parentName:"p"},"Call Details Report")," and click the ",(0,o.kt)("strong",{parentName:"p"},"Summarize")," button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add metrics")," and select ",(0,o.kt)("strong",{parentName:"p"},"Number of distinct values of"),", then choose ",(0,o.kt)("strong",{parentName:"p"},"Call ID")," to fetch the unique calls attended by the bot.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add metrics")," and select ",(0,o.kt)("strong",{parentName:"p"},"Sum of")," and ",(0,o.kt)("strong",{parentName:"p"},"Voice bot billing duration")," to calculate the total billing duration for the selected timestamp.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To filter the data further and get weekly stats, choose ",(0,o.kt)("strong",{parentName:"p"},"Timestamp")," under ",(0,o.kt)("strong",{parentName:"p"},"Group by")," and select ",(0,o.kt)("strong",{parentName:"p"},"Week"),". Click ",(0,o.kt)("strong",{parentName:"p"},"Apply"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/yITVlXG.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will now see a table with the required data. Click ",(0,o.kt)("strong",{parentName:"p"},"Save query"),", name your query, and click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/GEy4pJe.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"(Optional) To visualize this data, click the Visualization button.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Data Explorer")," > ",(0,o.kt)("strong",{parentName:"p"},"Saved Reports")," and open your custom report.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Schedule")," a weekly report by adding your email ID and the account team's email ID in the recipients field. Click ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/savedreportsactions#1-schedule-a-report"},"here")," for the steps to ",(0,o.kt)("strong",{parentName:"p"},"schedule report"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/K59SALi.png",alt:null})))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Understand other operations on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights"},"Insights modules"),". ")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-4-cdr-fields-and-their-definitions"},(0,o.kt)("a",{name:"cdr"})," 4. CDR fields and their definitions"),(0,o.kt)("p",null,"The CDR report provides the following information:"),(0,o.kt)("h3",{id:"call-id"},"Call ID"),(0,o.kt)("p",null,"Call ID, or Call Identifier, is a system-generated unique identifier that is used to track and identify a specific phone call. It is used to keep track of various aspects of the call, such as its duration, call status, and other relevant information. Each call on the Yellow platform is assigned a unique Call ID, which can be used to look up details about the call in the platform's logs or reporting tools. "),(0,o.kt)("h3",{id:"call-start-time"},"Call start time"),(0,o.kt)("p",null,"Call start time refers to the timestamp, at which the call was initiated by the caller. This timestamp marks the beginning of the call and is used to track when the call was started."),(0,o.kt)("h3",{id:"call-end-time"},"Call end time"),(0,o.kt)("p",null,"Call End Time refers to the time when a phone call or a communication session is terminated or disconnected."),(0,o.kt)("h3",{id:"ring-duration"},"Ring Duration"),(0,o.kt)("p",null,"Ring duration refers to the length of time that a phone rings before the call is either answered or goes to voicemail. It is the time between when an incoming call is received and when it stops ringing. Ring duration is typically measured in seconds."),(0,o.kt)("h3",{id:"call-duration"},"Call Duration"),(0,o.kt)("p",null,"Call duration refers to the length of time that a phone call. It is the amount of time that starts from when the call is ringing, connected or answered and ends when the call is disconnected or ended. The call duration is important to measure for various reasons, such as billing purposes, quality assurance, and analysis of call traffic patterns."),(0,o.kt)("h3",{id:"voice-bot-duration"},"Voice Bot Duration"),(0,o.kt)("p",null,"Voice bot duration, in seconds refers to the length of time that a voice bot or automated voice response system interacts with a caller during a phone call. This duration starts when the caller is first connected to the voice bot and ends when the call is transferred to a live agent or when the call is disconnected. The voice bot duration can vary depending on the complexity of the bot's responses and the options provided to the caller."),(0,o.kt)("h3",{id:"voice-bot-bill-duration"},"Voice Bot Bill Duration"),(0,o.kt)("p",null,"The duration, in seconds, of the conversation between the user and the voice bot, rounded up to the nearest Voice Billing Pulse interval for billing purposes."),(0,o.kt)("h3",{id:"campaign-id"},"Campaign ID"),(0,o.kt)("p",null,"A Campaign ID is a system-generated unique identifier assigned to a marketing campaign to track its performance and measure the effectiveness of marketing efforts. This field is empty for inbound calls by default."),(0,o.kt)("h3",{id:"hangup-reason"},"Hangup Reason"),(0,o.kt)("p",null,"Hangup Reason refers to the reason why a call or communication session was terminated, ended, or disconnected.\nHangup Reason is a valuable metric for analyzing call center performance and identifying areas for improvement. By tracking and analyzing the reasons for call terminations, call centers can identify common issues, patterns, and trends, and take steps to address them to improve customer satisfaction and retention."),(0,o.kt)("h3",{id:"hangup-source"},"Hangup Source"),(0,o.kt)("p",null,"Hangup source specifies the party that disconnected the calls be it user or the bot.\nHangup Source can provide useful information for analyzing call quality, identifying problems with the network or equipment, and understanding the reasons for call failures."),(0,o.kt)("h3",{id:"source-number"},"Source Number"),(0,o.kt)("p",null,"Source number refers to the phone number or caller ID of the party that initiated the call. It is the number from which the call originated. In other words, it is the phone number of the person or device that made the call."),(0,o.kt)("h3",{id:"destination-number"},"Destination Number"),(0,o.kt)("p",null,"The destination number refers to the phone number that received the call or message. It is the phone number dialed by the caller or the recipient of an inbound call."),(0,o.kt)("h3",{id:"call-status"},"Call Status"),(0,o.kt)("p",null,"The call status field refers to the final status of a call when it ended or was terminated. This field indicates whether the call was successful or not and can provide more details about the reason for call termination. Some common call status codes are ",(0,o.kt)("strong",{parentName:"p"},"Answered, Not Answered, Failed, or Not Valid"),"."),(0,o.kt)("h3",{id:"direction"},"Direction"),(0,o.kt)("p",null,"Specifies the direction of the call, either Inbound or Outbound. It could be ",(0,o.kt)("strong",{parentName:"p"},"inbound"),", meaning the call was received from an external source, or ",(0,o.kt)("strong",{parentName:"p"},"outbound"),", meaning the call was initiated by the user from the system."),(0,o.kt)("h3",{id:"recording-url"},"Recording URL"),(0,o.kt)("p",null,"An URL to the end-to-end call recording of the call, which is usually recorded by default. Users have the option to pause recording during certain sections of the call or stop recording altogether as part of the bot logic.\nThe recording URL can be used to retrieve and listen to the recording of the call."))}m.isMDXComponent=!0}}]);