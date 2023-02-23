"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[4900],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),c=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),k=n,f=d["".concat(i,".").concat(k)]||d[k]||u[k]||r;return a?o.createElement(f,l(l({ref:t},p),{},{components:a})):o.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}k.displayName="MDXCreateElement"},76768:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),l=["components"],s={title:"Fetch CSAT(bot & agent feedback) from bot users on data explorer\xa0",sidebar_label:"Configure bot & agent feedback",Keywords:["Track CSAT","CSAT analytics","customer feedback analytics"]},i=void 0,c={unversionedId:"cookbooks/insights/botagentfedback",id:"cookbooks/insights/botagentfedback",title:"Fetch CSAT(bot & agent feedback) from bot users on data explorer\xa0",description:"You can configure your flows and collect user feedback (Customer Satisfaction Score-CSAT) for bot interactions. This data will be available in the Data Explorer] section. You can visualize it further by taking advantage of [Dashboards and visualization.",source:"@site/docs/cookbooks/insights/botagentfedback.md",sourceDirName:"cookbooks/insights",slug:"/cookbooks/insights/botagentfedback",permalink:"/docs/cookbooks/insights/botagentfedback",draft:!1,tags:[],version:"current",frontMatter:{title:"Fetch CSAT(bot & agent feedback) from bot users on data explorer\xa0",sidebar_label:"Configure bot & agent feedback",Keywords:["Track CSAT","CSAT analytics","customer feedback analytics"]},sidebar:"cookbooks",previous:{title:"Event(DB column names) descriptions",permalink:"/docs/cookbooks/insights/eventdescriptions"},next:{title:"Upgrade engage (App to Cloud)",permalink:"/docs/cookbooks/Upgrade_new_engage_app"}},p={},d=[{value:"1. Track user feedback on the default table",id:"1-track-user-feedback-on-the-default-table",level:2},{value:"2. Customize collection of user feedback\xa0",id:"2-customize-collection-of-user-feedback",level:2}],u={toc:d};function k(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can configure your flows and collect ",(0,r.kt)("strong",{parentName:"p"},"user feedback")," (Customer Satisfaction Score-CSAT) for bot interactions. This data will be available in the ","[Data Explorer]"," section. You can visualize it further by taking advantage of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/dashboards"},"Dashboards")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#43-visualization"},"visualization"),".\xa0"),(0,r.kt)("p",null,"Following are the different approaches that can be taken (as per your use case) to obtain the feedback data:\xa0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use the Studio Feedback node and view its analytics in Insights (and the default table).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Monitor customer feedback after an interaction with an Inbox agent."))),(0,r.kt)("li",{parentName:"ol"},"Create a custom flow requesting user for customized feedback fields and visualizing it on Insights.\xa0")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-track-user-feedback-on-the-default-table"},"1. Track user feedback on the default table"),(0,r.kt)("p",null,"To obtain the user feedback graph on the overview page and the user feedback default table on the data explorer page, follow the below steps:\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To obtain user feedback on the bot interaction:"),"\xa0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("strong",{parentName:"li"},"Studio"),", at the end of your existing flow, add a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#27-feedback"},"feedback node")," to collect user feedback.\xa0")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/SI8BwYL.png",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"After the user feedback is entered, it will be saved in the Feedback table (it is a default database, need not create any new table to save this data unless your use case demands it).")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"To obtain user feedback on the agent interaction:"),"\xa0"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Create a flow using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket"},"Raise ticket")," action node. Configure Inbox. Enable ",(0,r.kt)("strong",{parentName:"li"},"CSAT")," from the inbox settings. After a chat ticket is closed, your customers will be asked for, agent feedback and chat feedback. Click ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat"},"here")," to know more.\xa0"),(0,r.kt)("li",{parentName:"ul"},"These user feedbacks can be found in the Insights module, ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer"},"Data Explorer")," > ",(0,r.kt)("strong",{parentName:"li"},"Chat tickets")," table ."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Data attained from users will be available on ",(0,r.kt)("strong",{parentName:"li"},"Insights"),".\xa0   ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Insights"),"."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Data explorer")," > ",(0,r.kt)("strong",{parentName:"li"},"Default tables")," > ",(0,r.kt)("strong",{parentName:"li"},"User feeback"),". \xa0")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/cpnqjNR.png",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This user feedback table can be summarized, and visualized. Click ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#4-data-visualization-and-other-functions"},"here")," to know more.\xa0")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can save these queries and view them on a separate dashboard. Click ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/dashboards"},"here")," to know more.\xa0")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Customer feedback analytics can also be found on the ",(0,r.kt)("strong",{parentName:"p"},"Insights Overview")," page under ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/overview#8-user-feedback"},"User feedback"),".\xa0"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Bot feedback")," is obtained from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#27-feedback"},"feedback node"),".\xa0",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Agent feedback")," is obtained from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/csat"},"CSAT score")," provided to the live agent.\xa0",(0,r.kt)("br",{parentName:"p"}),"\n","This graph is available only for default tables - not custom tables.   ")),(0,r.kt)("img",{src:"https://i.imgur.com/sMmYWUz.jpg",alt:"drawing",width:"50%"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-customize-collection-of-user-feedback"},"2. Customize collection of user feedback\xa0"),(0,r.kt)("p",null,"The above-mentioned default feedback method will work only on your website chatbot.\xa0\nYou can create flows in Studio to manually collect user feedback (from the bot interaction) for two use cases:\xa0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Collect CSAT feedback for other channels like WhatsApp, Facebook, etc. after an inbox live agent interaction."),(0,r.kt)("li",{parentName:"ol"},'Customize your feedback parameters. The feedback node collects only the rating and comments from the user. If you want to collect other details, like "which product would you likely recommend to your friends," you can use this method.')),(0,r.kt)("p",null,"Follow the given steps:\xa0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a feedback flow.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/uE0Esxl.png",alt:null}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can add ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"prompt nodes")," to ask questions or other details and store the response in a variable.\xa0"),(0,r.kt)("li",{parentName:"ul"},"To collect ratings, use a node to present options ranging from 1 to 5 (the CSAT score) and ",(0,r.kt)("strong",{parentName:"li"},"store the response")," in a variable (for example, feedback).If your channel is WhatsApp, you can use the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-whatsapp-list"},"WhatsApp list node"),". You can also use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies"},"Quick replies node")," to fetch the user rating.\xa0")),(0,r.kt)("p",null,"\xa0 \xa0 ",(0,r.kt)("img",{src:"https://i.imgur.com/YUYBcyj.png",width:"50%"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a database with the required columns (for instructions, see ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/database"},"here"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/uQMNe3m.png",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Send the collected data (feedback variables) into the database using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database"},"database action node")," in the bot flow.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1GbRjx2.png",alt:null})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect this feedback flow at the end of your use case (i.e., the other flow where the bot interaction is expected to end) using an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow"},"Execute Flow node"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("strong",{parentName:"p"},"Insights")," > ",(0,r.kt)("strong",{parentName:"p"},"Data Explorer")," > ",(0,r.kt)("strong",{parentName:"p"},"Custom Tables")," > Select the table in which you have stored the feedback."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Click ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#3-create-custom-tables"},"here")," for detailed document on custom tables.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/bkDSbfc.png",alt:null})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/growth/dashboards"},"dashboard")," and track it. Refresh the page to update dashboards with newly added data points.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/wluH8KC.png",alt:null})))}k.isMDXComponent=!0}}]);