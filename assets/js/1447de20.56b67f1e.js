"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[93261],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return v}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),b=r,v=p["".concat(s,".").concat(b)]||p[b]||u[b]||l;return a?n.createElement(v,o(o({ref:t},d),{},{components:a})):n.createElement(v,o({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},11839:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"Access voice variables within a flow in studio",sidebar_label:"(Additional) Voice variables in studio"},s=void 0,c={unversionedId:"cookbooks/voice-as-channel/reporting/variables",id:"cookbooks/voice-as-channel/reporting/variables",title:"Access voice variables within a flow in studio",description:"Types of voice variables",source:"@site/docs/cookbooks/voice-as-channel/reporting/variables.md",sourceDirName:"cookbooks/voice-as-channel/reporting",slug:"/cookbooks/voice-as-channel/reporting/variables",permalink:"/docs/cookbooks/voice-as-channel/reporting/variables",draft:!1,tags:[],version:"current",frontMatter:{title:"Access voice variables within a flow in studio",sidebar_label:"(Additional) Voice variables in studio"},sidebar:"cookbooks",previous:{title:"Call & conversational details analysis",permalink:"/docs/cookbooks/voice-as-channel/reporting/conv_cdr"},next:{title:"Transfer call to an agent",permalink:"/docs/cookbooks/voice-as-channel/transfertoagent"}},d={},p=[{value:"Types of voice variables",id:"types-of-voice-variables",level:2},{value:"Access voice variable values",id:"access-voice-variable-values",level:2},{value:"Variables available for ongoing calls",id:"variables-available-for-ongoing-calls",level:3},{value:"Variables available for disconnected calls",id:"variables-available-for-disconnected-calls",level:3}],u={toc:p};function b(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"types-of-voice-variables"},"Types of voice variables"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Voice bot variables")," are similar to regular ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"variables"),", with the only difference being the way they are acquired. There are two types of voice variables that can be utilized in the process of building a flow in studio:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Bot variables"),": These variables are automatically available to the bot at the beginning of the voice call."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"CDR variables"),": These variables are obtained once the call is terminated and are the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/cdr"},"CDR values")," that are created for reporting purposes. They can also be used in flows for specific use cases.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"access-voice-variable-values"},"Access voice variable values"),(0,l.kt)("p",null,"To work with ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/convdata"},"conversational details reports")," or ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/conv_cdr"},"call and conversational details reports"),", you may require access to voice variables (default and CDR). To push the necessary values into the database node and tables, you must create variables. Follow the steps below:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open the variables tab and add a variable by selecting ",(0,l.kt)("em",{parentName:"li"},"Global variable"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://hackmd.io/_uploads/rJFt43sVh.png",alt:null})),(0,l.kt)("li",{parentName:"ol"},"Add a custom variable ",(0,l.kt)("strong",{parentName:"li"},"name")," and select the variable ",(0,l.kt)("strong",{parentName:"li"},"data type")," (usually a string). Add the ",(0,l.kt)("strong",{parentName:"li"},"value")," (you can only use the variables given in the section below) and click ",(0,l.kt)("strong",{parentName:"li"},"Add"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://hackmd.io/_uploads/S15eHno4n.png",alt:null}))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"To learn more about variables, visit ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"this")," page.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"variables-available-for-ongoing-calls"},"Variables available for ongoing calls"),(0,l.kt)("p",null,"Once the call is initiated, these voice bot variables (global variables) are accessible throughout the flows in the bot. To retrieve these variables, use the following format:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Datatype"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{{data.sid}}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A unique identifier assigned to each voice call")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{{data.recording_url}}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The downloadable URL of the ongoing call")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{{data.from}}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The phone number the call was made from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{{data.to}}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The phone number the voice bot called")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{{data.direction}}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Inbound or outbound call")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{{data.detected_language}}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The language of the conversation that was identified (only present when auto-detect option is enabled)")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"variables-available-for-disconnected-calls"},"Variables available for disconnected calls"),(0,l.kt)("p",null,"Additional details are only obtained after the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/reporting/conv_cdr#step-2-create-a-callbackstatus-event"},"callback event")," is triggered, which can be retrieved by creating a new flow that executes after the call ends. To retrieve these details, use the following format:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Datatype"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{variables.EVENT_DATA.duration}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The total duration of the call, including ring time, agent transfer, etc.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{variables.EVENT_DATA.voice_bot_duration}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration for which the voice bot was speaking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{variables.EVENT_DATA.voice_bot_bill_duration}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The duration considered for billing purposes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{variables.EVENT_DATA.disconnected_by}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The entity responsible for disconnecting the call (either Bot or User)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"{{variables.EVENT_DATA.status}}"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The call status (answered, not answered, or failed)")))))}b.isMDXComponent=!0}}]);