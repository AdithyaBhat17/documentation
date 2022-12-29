"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[2416],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85077:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={title:"Logic Nodes",sidebar_label:"Logic"},s=void 0,c={unversionedId:"platform_concepts/studio/build/nodes/logic-nodes",id:"platform_concepts/studio/build/nodes/logic-nodes",title:"Logic Nodes",description:"Logic nodes can be used when the flow must be branched based on the given conditions.",source:"@site/docs/platform_concepts/studio/build/nodes/logic-nodes.md",sourceDirName:"platform_concepts/studio/build/nodes",slug:"/platform_concepts/studio/build/nodes/logic-nodes",permalink:"/docs/platform_concepts/studio/build/nodes/logic-nodes",draft:!1,tags:[],version:"current",frontMatter:{title:"Logic Nodes",sidebar_label:"Logic"},sidebar:"platform_concepts",previous:{title:"Actions",permalink:"/docs/platform_concepts/studio/build/nodes/action-nodes"},next:{title:"Function (code)",permalink:"/docs/platform_concepts/studio/build/code"}},p={},d=[{value:"1. Condition",id:"1-condition",level:2},{value:"2. Channel filter",id:"2-channel-filter",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Logic nodes can be used when the flow must be branched based on the given conditions. "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-condition"},"1. Condition"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This node is available for voice bots. ")),(0,r.kt)("p",null,"Branch the flow based on if-else logic with this node."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/0XiTCxA.jpg",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For example, in the given flow the variable ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"issueDetail"))," is storing the quick replies response (which is Yes/ No). Then the Condition is checked:\nIf issueDetail = Yes, the bot will move to the mentioned flow\nElse (if any other value is entered other than Yes), the text will be displayed to the user. ")),(0,r.kt)("p",null,"Condition node must have:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"If condition"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/EncYoay.png",alt:null})),(0,r.kt)("p",null,"Select a value (only one value can be selected) from the dropdown based on your use case, it consists of: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Journey Variables")," - Variables created for that particular flow. Use this to compare and branch flows based on variable values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Global Variables")," - Use these values to compare and branch flows based on existing global variables that are extracted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User Properties")," - Use these values to compare and branch flows based on user properties like first name, gender, city, dob etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Others")," -",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Intent"),": Used to compare and branch when a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents"},"Intent")," is detected."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Entity"),": Used to compare and branch when an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/entities"},"Entity")," is detected."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Entity Value"),": Used to compare and branch when a Entity value is detected. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mustache"),": You can write complex variable object and compare it to other variables (example variables.var_name.key_name)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Inside agent working hours"),": This can be used to branch conversation based on agent working hours configured at ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox/#agentstatus"},"Inbox"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sentiment"),": This is used to branch based on the Sentiment detected on the last user message (Sentiment can be Positive/ Negative/ Neutral). For example, if questioned about the user experience in the flow, and user replies with something negative, Conditional node can be used to \u2192 connect the user directly to an agent. If the reply is of positive or neutral sentiment, you can add them to reply back later with logic etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"globalModel:"),' This is a context handler that is used to branch the flow based on the identified context. For example, if the user enters "Why is this process getting delayed?", the globalModel identifies the context as "why" and diverts the flow to the attached node (Execute flow-> followup and reply "We are processing your application, please stay with us.")')))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/oFadY2l.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Context Handler")," is also available on our Beta release Input Node. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#29-input"},"Add an input node")," to your flow to access it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/HZNqOAi.png",alt:null})),(0,r.kt)("p",null,"To know more about handling contextual responses, click ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/add-contextual-response"},"here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"System")," - Page URL. This will branch conversation flow based on the page URL detected. ")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"}," These dropdown values are derived from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview#21-user-property-data-types"},"data available")," in the system. ",(0,r.kt)("strong",{parentName:"p"},"Journey variables")," are created by the user for that flow, ",(0,r.kt)("strong",{parentName:"p"},"Global variables")," are asked and extracted from the other nodes, ",(0,r.kt)("strong",{parentName:"p"},"User properties")," are extracted from variables and few are automatically fetched by the system like IP, Country, Timezone, Created at, etc. ")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Condition"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/3dmobD9.png",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Conditional Value"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multiple")," values can be selected based on the use-case. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZW4Mlpf.png",alt:null})),(0,r.kt)("p",null,"This dropdown will consist of: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Journey Variables"),(0,r.kt)("li",{parentName:"ol"},"Global Variables"),(0,r.kt)("li",{parentName:"ol"},"System Variables"),(0,r.kt)("li",{parentName:"ol"},"User Properties")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When If-condition is ",(0,r.kt)("strong",{parentName:"p"},"Others")," or ",(0,r.kt)("strong",{parentName:"p"},"System")," these values are updated automatically.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Else Condition"))),(0,r.kt)("p",null,"To add an Else-if condition, click ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"+Add another condition")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/Oij3X9z.jpg",alt:null})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-channel-filter"},"2. Channel filter"),(0,r.kt)("p",null,"Similar to the condition node, branch the flow based on the available active channels with this node. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/t1lgUpG.jpg",alt:null})),(0,r.kt)("p",null,"Multiple channels can be configured for a bot. Branching (based on If, Else-if and Else conditions) through this node can happen when the mentioned channels are configured. "),(0,r.kt)("p",null,"For example, for the above flow, the following conditions are checked:"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"If"),", Facebook or WhatsApp channels are configured, the first flow (provideCoupons) will be executed. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Else-if"),", the Telegram or Skype channels are configured, a second flow (socialHandle) will be executed. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Else"),", if none of the mentioned channels is configured, a question will be posed to a user to share their social media handle (text node). "))),(0,r.kt)("p",null,'Since none of the channels mentioned in If and Else-if was configured, the bot displayed a text message ("Please enter your social media handle where we can reach you")'),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);