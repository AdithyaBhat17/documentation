"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[924],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||n;return a?o.createElement(f,l(l({ref:t},u),{},{components:a})):o.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<n;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88398:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=a(87462),r=a(63366),n=(a(67294),a(3905)),l=["components"],s={title:"Extract user responses from conversations and create custom reports",sidebar_label:"Custom data report"},i=void 0,c={unversionedId:"cookbooks/voice-as-channel/reporting/advance/convdata",id:"cookbooks/voice-as-channel/reporting/advance/convdata",title:"Extract user responses from conversations and create custom reports",description:"In this document, we will cover a use case where custom fields are used to track customer details.",source:"@site/docs/cookbooks/voice-as-channel/reporting/advance/convdata.md",sourceDirName:"cookbooks/voice-as-channel/reporting/advance",slug:"/cookbooks/voice-as-channel/reporting/advance/convdata",permalink:"/docs/cookbooks/voice-as-channel/reporting/advance/convdata",draft:!1,tags:[],version:"current",frontMatter:{title:"Extract user responses from conversations and create custom reports",sidebar_label:"Custom data report"},sidebar:"cookbooks",previous:{title:"Call details report (CDR)",permalink:"/docs/cookbooks/voice-as-channel/reporting/advance/cdr"},next:{title:"CDR & custom data analysis",permalink:"/docs/cookbooks/voice-as-channel/reporting/advance/conv_cdr"}},u={},p=[{value:"1. Create a flow to collect and store custom details from calls",id:"1-create-a-flow-to-collect-and-store-custom-details-from-calls",level:2},{value:"Step 1. Create a flow to store data in variables",id:"step-1-create-a-flow-to-store-data-in-variables",level:3},{value:"Step 2: Create a table to store variable data",id:"step-2-create-a-table-to-store-variable-data",level:3},{value:"2. Download or visualize custom call details for better insights",id:"2-download-or-visualize-custom-call-details-for-better-insights",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this document, we will cover a use case where custom fields are used to track customer details."),(0,n.kt)("p",null,"Voice bot developers have the ability to define custom fields based on their business logic requirements, in addition to standard fields. This allows them to derive additional insights from their data."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Examples of custom details"),": "),(0,n.kt)("p",null,"Phone numbers, ages, names, and other data points that are specific to the conversations, which can be used to generate custom reports."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Use-case:")),(0,n.kt)("p",null,"If you are developing a voice bot for educational counseling for students across various age groups, it may be required as per company guidelines to keep track of the customer/student's age and the type of query asked. This information can be recorded as custom fields, allowing you to gain insights into the types of queries being asked by different age groups and improve the voice bot's performance accordingly."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"1-create-a-flow-to-collect-and-store-custom-details-from-calls"},"1. Create a flow to collect and store custom details from calls"),(0,n.kt)("h3",{id:"step-1-create-a-flow-to-store-data-in-variables"},"Step 1. Create a flow to store data in variables"),(0,n.kt)("p",null,"To store the age and query type along with the rest of the flow, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Studio")," and create a flow that supports your use case."),(0,n.kt)("li",{parentName:"ol"},"In the node that collects age and query type, select ",(0,n.kt)("strong",{parentName:"li"},"Store response in")," a variable.\n",(0,n.kt)("img",{parentName:"li",src:"https://i.imgur.com/qyw4l5R.png",alt:null})),(0,n.kt)("li",{parentName:"ol"},"Add a ",(0,n.kt)("strong",{parentName:"li"},"Database")," node to store all the collected details in a table.\n",(0,n.kt)("img",{parentName:"li",src:"https://i.imgur.com/oUYYcPT.png",alt:null}),"    ",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database"},"these steps"),"  to learn how to use the DB node.")))),(0,n.kt)("h3",{id:"step-2-create-a-table-to-store-variable-data"},"Step 2: Create a table to store variable data"),(0,n.kt)("p",null,"To store data collected from flows, you need to create a table. For instance, you can create a table with two columns that collect the age and query from all calls. Follow these steps to create a table:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Studio")," > ",(0,n.kt)("strong",{parentName:"li"},"Database"),"."),(0,n.kt)("li",{parentName:"ol"},"Create a ",(0,n.kt)("strong",{parentName:"li"},"table")," with two columns.\n",(0,n.kt)("img",{parentName:"li",src:"https://i.imgur.com/4lXUJo5.png",alt:null})),(0,n.kt)("li",{parentName:"ol"},"The database will store all the details obtained from the calls.\n",(0,n.kt)("img",{parentName:"li",src:"https://i.imgur.com/icLbN3u.png",alt:null}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/database#-1-create-table"},"these instructions")," for creating a table in Studio.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"2-download-or-visualize-custom-call-details-for-better-insights"},"2. Download or visualize custom call details for better insights"),(0,n.kt)("p",null,"To download this data, navigate to ",(0,n.kt)("strong",{parentName:"p"},"Studio")," > ",(0,n.kt)("strong",{parentName:"p"},"Database"),", and click on ",(0,n.kt)("strong",{parentName:"p"},"Table actions"),". From there, you can easily download the data.\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZCrHFs2.png",alt:null})),(0,n.kt)("p",null,"You can also view this data on the data explorer, where it can be summarized, visualized, and even added as a custom dashboard for easy access to analytics.\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/Xyig1o0.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Understand other operations on insights")),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Check out the available actions for custom tables by visiting ",(0,n.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#-3-create-custom-tables"},"this page"),".    "),(0,n.kt)("li",{parentName:"ul"},"To visualize the data collected from calls, follow the steps outlined in ",(0,n.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/advance/cdr#1-visualize-call-detail-report"},"this guide"),"."),(0,n.kt)("li",{parentName:"ul"},"Understand other operations on ",(0,n.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/growth/introductiontoinsights"},"Insights modules"),"."))))}m.isMDXComponent=!0}}]);