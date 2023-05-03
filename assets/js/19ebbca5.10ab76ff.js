"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[42218],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return h}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return a?o.createElement(h,r(r({ref:t},d),{},{components:a})):o.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,r[1]=i;for(var c=2;c<l;c++)r[c]=a[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57872:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=a(87462),n=a(63366),l=(a(67294),a(3905)),r=["components"],i={title:"Create flows to combine call details and conversational details for analysis",sidebar_label:"CDR & custom data analysis"},s=void 0,c={unversionedId:"cookbooks/voice-as-channel/reporting/conv_cdr",id:"cookbooks/voice-as-channel/reporting/conv_cdr",title:"Create flows to combine call details and conversational details for analysis",description:"This document outlines the application of custom fields and call detail report parameters for customer tracking purposes.",source:"@site/docs/cookbooks/voice-as-channel/reporting/conv_cdr.md",sourceDirName:"cookbooks/voice-as-channel/reporting",slug:"/cookbooks/voice-as-channel/reporting/conv_cdr",permalink:"/docs/cookbooks/voice-as-channel/reporting/conv_cdr",draft:!1,tags:[],version:"current",frontMatter:{title:"Create flows to combine call details and conversational details for analysis",sidebar_label:"CDR & custom data analysis"},sidebar:"cookbooks",previous:{title:"Custom data report",permalink:"/docs/cookbooks/voice-as-channel/reporting/convdata"},next:{title:"Architecture of a voice bot",permalink:"/docs/cookbooks/voice-as-channel/voicearchitecture"}},d={},p=[{value:"1. Call data collection and storage using variables",id:"1-call-data-collection-and-storage-using-variables",level:2},{value:"2. Create a callbackStatus event",id:"2-create-a-callbackstatus-event",level:2},{value:"Functionality of callbackStatus custom event",id:"functionality-of-callbackstatus-custom-event",level:4},{value:"3. Merge and analyse CDR and conversation data post-call disconnection",id:"3-merge-and-analyse-cdr-and-conversation-data-post-call-disconnection",level:2},{value:"4. Download or visualize call  details for better insights",id:"4-download-or-visualize-call--details-for-better-insights",level:2}],u={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document outlines the application of ",(0,l.kt)("strong",{parentName:"p"},"custom fields")," and ",(0,l.kt)("strong",{parentName:"p"},"call detail report")," parameters for customer tracking purposes."),(0,l.kt)("p",null,"Along with standard fields present in ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/advance/cdr"},"CDR")," and conversational data (",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/advance/convdata"},"custom fields"),"), voice bot developers can define fields based on their business logic requirements."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Use-case:")," "),(0,l.kt)("p",null,"To analyze both call details and conversational details for certain use cases, you can create a flow that integrates data from both sources. By doing so, you can gain insights by analyzing the combined data."),(0,l.kt)("p",null,"For example, if you are developing a voice bot for medical counseling aimed at different age groups, it may be necessary to track the age of customers, the nature of their queries, and the length of their calls, in accordance with company guidelines. You could record the customer's age and query as custom fields, while the call duration can be automatically tracked by CDR. By combining both sources of data, you could create a dashboard that is tailored to this use case."),(0,l.kt)("hr",null),(0,l.kt)("p",null,"To accomplish use cases that involve using both conversational data and CDR data, three steps need to be followed:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Set up a flow that can ",(0,l.kt)("strong",{parentName:"li"},"collect and store")," custom details from the conversation."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Create a callbackStatus")," event that can retrieve CDR data once the call has ended."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Merge")," the CDR data and custom fields into a table for analysis.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/026bBkJ.png",alt:null})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"1-call-data-collection-and-storage-using-variables"},"1. Call data collection and storage using variables"),(0,l.kt)("p",null,"To store the age and query type along with the rest of the flow, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"Studio")," and create a flow that supports your use case."),(0,l.kt)("li",{parentName:"ol"},"In the node that collects age and query type, select ",(0,l.kt)("strong",{parentName:"li"},"Store response in")," a global variable.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/qyw4l5R.png",alt:null}),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"Store the custom variables in a ",(0,l.kt)("strong",{parentName:"p"},"global variable")," so that it can be used in other flows. ")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"2-create-a-callbackstatus-event"},"2. Create a callbackStatus event"),(0,l.kt)("p",null,"To streamline call management, create a custom event named ",(0,l.kt)("inlineCode",{parentName:"p"},"callbackStatus"),". You can follow the steps provided ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#-8-custom-events"},"here")," to create a custom event. Once you've created the event, verify that its status is set to ",(0,l.kt)("strong",{parentName:"p"},"Active"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/TA01UPR.png",alt:null})),(0,l.kt)("h4",{id:"functionality-of-callbackstatus-custom-event"},"Functionality of callbackStatus custom event"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"callbackStatus")," object is a container that holds important CDR data and is dispatched to the platform immediately after a call is disconnected. In addition to this, an event is also dispatched to the platform as soon as the call is disconnected, which can be utilized by bot developers to receive the 'callbackStatus' JSON object."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"3-merge-and-analyse-cdr-and-conversation-data-post-call-disconnection"},"3. Merge and analyse CDR and conversation data post-call disconnection"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a new flow from scratch by following the steps provided ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow"},"here"),"."),(0,l.kt)("li",{parentName:"ol"},"On the start node, add an ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#trigger-flow-using-event"},"event trigger")," by selecting ",(0,l.kt)("strong",{parentName:"li"},"Event")," as the trigger and ",(0,l.kt)("inlineCode",{parentName:"li"},"callbackStatus")," as the value. This will ensure that the flow executes when the call has ended as per the backend logic. See the image below for reference.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/5xbfRqM.png",alt:null})),(0,l.kt)("li",{parentName:"ol"},"Add a ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables"},"variable")," action node to retrieve CDR-related entries.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/8wBb4Bf.png",alt:null})),(0,l.kt)("li",{parentName:"ol"},"Add a database node to combine CDR and custom fields into one table. Refer to the steps outlined ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database"},"here")," to learn how to use the DB node.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/yuogCEP.png",alt:null}),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Pre-requisite"),"\nBefore using this flow, you must create a table to store the collected data. For example, you can create a table with three columns to store the age, query, and call duration for each call. Here are the steps to create a table:"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"Studio")," > ",(0,l.kt)("strong",{parentName:"li"},"Database"),"."),(0,l.kt)("li",{parentName:"ol"},"Create a new table with three columns and mark all of them as Searchable. Refer to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/database#-1-create-table"},"these instructions")," for creating a table in Studio.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/wWAPpnu.png",alt:null}),"\nAll the information gathered from the calls will be accessible in the table.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/OXqQoHT.png",alt:null})))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"4-download-or-visualize-call--details-for-better-insights"},"4. Download or visualize call  details for better insights"),(0,l.kt)("p",null,"You can find all the information related to your use case, including data from both CDR and custom fields, on the table."),(0,l.kt)("p",null,"To download this data, navigate to ",(0,l.kt)("strong",{parentName:"p"},"Studio")," > ",(0,l.kt)("strong",{parentName:"p"},"Database"),", and click on ",(0,l.kt)("strong",{parentName:"p"},"Table actions"),". From there, you can easily download the data.\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/bZZlNeW.png",alt:null})),(0,l.kt)("p",null,"You can also view this data on ",(0,l.kt)("strong",{parentName:"p"},"Insights")," > ",(0,l.kt)("strong",{parentName:"p"},"Data explorer"),", where it can be summarized, visualized, and even added as a custom dashboard for easy access to analytics.\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/Xyig1o0.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Understand other operations on insights")),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"Check out the available actions for custom tables by visiting ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#-3-create-custom-tables"},"this page"),".    "),(0,l.kt)("li",{parentName:"ul"},"To visualize the data collected from calls, follow the steps outlined in ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/advance/cdr#1-visualize-call-detail-report"},"this guide"),"."),(0,l.kt)("li",{parentName:"ul"},"Understand other operations on ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights"},"Insights modules"),"."))))}m.isMDXComponent=!0}}]);