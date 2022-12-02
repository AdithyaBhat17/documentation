(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{450:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(458)),l=["components"],i={title:"Logic Nodes",sidebar_label:"Logic"},c={unversionedId:"platform_concepts/studio/build/nodes/logic-nodes",id:"platform_concepts/studio/build/nodes/logic-nodes",isDocsHomePage:!1,title:"Logic Nodes",description:"Logic nodes can be used when the flow must be branched based on the given conditions.",source:"@site/docs/platform_concepts/studio/build/nodes/logic-nodes.md",slug:"/platform_concepts/studio/build/nodes/logic-nodes",permalink:"/docs/platform_concepts/studio/build/nodes/logic-nodes",version:"current",sidebar_label:"Logic",sidebar:"platform_concepts",previous:{title:"Action Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/action-nodes"},next:{title:"Function",permalink:"/docs/platform_concepts/studio/build/code"}},s=[{value:"1. Condition",id:"1-condition",children:[]},{value:"2. Channel filter",id:"2-channel-filter",children:[]},{value:"3. Context Handler",id:"3-context-handler",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,l);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Logic nodes can be used when the flow must be branched based on the given conditions. "),Object(r.b)("hr",null),Object(r.b)("h2",{id:"1-condition"},"1. Condition"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This node is available for voice bots. ")),Object(r.b)("p",null,"Branch the flow based on if-else logic with this node."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/0XiTCxA.jpg",alt:null})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"For example, in the given flow the variable ",Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"issueDetail"))," is storing the quick replies response (which is Yes/ No). Then the Condition is checked:\nIf issueDetail = Yes, the bot will move to the mentioned flow\nElse (if any other value is entered other than Yes), the text will be displayed to the user. ")),Object(r.b)("p",null,"Condition node must have:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"If condition"))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/EncYoay.png",alt:null})),Object(r.b)("p",null,"Select a value (only one value can be selected) from the dropdown based on your use case, it consists of: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Journey Variables")," - Variables created for that particular flow. Use this to compare and branch flows based on variable values"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Global Variables")," - Use these values to compare and branch flows based on existing global variables that are extracted."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"User Properties")," - Use these values to compare and branch flows based on user properties like first name, gender, city, dob etc."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Others")," -",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Intent"),": Used to compare and branch when a ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents"},"Intent")," is detected."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Entity"),": Used to compare and branch when an ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/entities"},"Entity")," is detected."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Entity Value"),": Used to compare and branch when a Entity value is detected. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Mustache"),": You can write complex variable object and compare it to other variables (example variables.var_name.key_name)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Inside agent working hours"),": This can be used to branch conversation based on agent working hours configured at ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox/#agentstatus"},"Inbox"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Sentiment"),": This is used to branch based on the Sentiment detected on the last user message (Sentiment can be Positive/ Negative/ Neutral). For example, if questioned about the user experience in the flow, and user replies with something negative, Conditional node can be used to \u2192 connect the user directly to an agent. If the reply is of positive or neutral sentiment, you can add them to reply back later with logic etc. ")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"System")," - Page URL. This will branch conversation flow based on the page URL detected. ")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"}," These dropdown values are derived from the ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data/#user-property-data-types"},"data available")," in the system. ",Object(r.b)("strong",{parentName:"p"},"Journey variables")," are created by the user for that flow, ",Object(r.b)("strong",{parentName:"p"},"Global variables")," are asked and extracted from the other nodes, ",Object(r.b)("strong",{parentName:"p"},"User properties")," are extracted from variables and few are automatically fetched by the system like IP, Country, Timezone, Created at, etc. "))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Condition"))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/3dmobD9.png",alt:null})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Conditional Value"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Multiple")," values can be selected based on the use-case. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ZW4Mlpf.png",alt:null})),Object(r.b)("p",null,"This dropdown will consist of: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Journey Variables"),Object(r.b)("li",{parentName:"ol"},"Global Variables"),Object(r.b)("li",{parentName:"ol"},"System Variables"),Object(r.b)("li",{parentName:"ol"},"User Properties")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When If-condition is ",Object(r.b)("strong",{parentName:"p"},"Others")," or ",Object(r.b)("strong",{parentName:"p"},"System")," these values are updated automatically.")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Else Condition"))),Object(r.b)("p",null,"To add an Else-if condition, click ",Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"+Add another condition")),"."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/Oij3X9z.jpg",alt:null})),Object(r.b)("hr",null),Object(r.b)("h2",{id:"2-channel-filter"},"2. Channel filter"),Object(r.b)("p",null,"Similar to the condition node, branch the flow based on the available active channels with this node. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/t1lgUpG.jpg",alt:null})),Object(r.b)("p",null,"Multiple channels can be configured for a bot. Branching (based on If, Else-if and Else conditions) through this node can happen when the mentioned channels are configured. "),Object(r.b)("p",null,"For example, for the above flow, the following conditions are checked:"),Object(r.b)("blockquote",null,Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"If"),", Facebook or WhatsApp channels are configured, the first flow (provideCoupons) will be executed. "),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Else-if"),", the Telegram or Skype channels are configured, a second flow (socialHandle) will be executed. "),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Else"),", if none of the mentioned channels is configured, a question will be posed to a user to share their social media handle (text node). "))),Object(r.b)("p",null,'Since none of the channels mentioned in If and Else-if was configured, the bot displayed a text message ("Please enter your social media handle where we can reach you")'),Object(r.b)("hr",null),Object(r.b)("h2",{id:"3-context-handler"},"3. Context Handler"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This node can only be attached to an ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#15-input"},"Input node"),"."))),Object(r.b)("p",null,"In the condition node, questions around why, what, No, repeat, etc can be answered locally. Which handles multiple paths except for just validation failure or success."),Object(r.b)("p",null,"A context handler is used to branch the flow based on the identified context. Follow the steps mentioned below as per your use case: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Store the user query/ user input in a global variable. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select the variable on the ",Object(r.b)("strong",{parentName:"p"},"Context handler")," nodes ",Object(r.b)("strong",{parentName:"p"},"If condition"),"."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/qsiynIb.png",alt:null}))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select the context from the drop-down. Branch each of these conditions to other nodes. "))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/abxlkuP.png",alt:null})),Object(r.b)("p",null,'For example, if the user enters  "Why is this process getting delayed?" and it is stored in a variable -> approvalReminder, the Context handler identifies the context as "why" and diverts the flow to the attached node (Execute flow-> followup and reply "We are processing your application, please stay with us.")'),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/Q9gSP2j.png",alt:null})))}p.isMDXComponent=!0},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);