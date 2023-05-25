"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[17091],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return b}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return o?n.createElement(b,i(i({ref:t},p),{},{components:o})):n.createElement(b,i({ref:t},p))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},47976:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],l={title:"Introduction to voice bot builder",sidebar_label:"Global & node level options",Tags:["global level voice options","node level voice options","create a new voice bot"]},s=void 0,c={unversionedId:"cookbooks/voice-as-channel/build/botbuilderintro",id:"cookbooks/voice-as-channel/build/botbuilderintro",title:"Introduction to voice bot builder",description:"To explore the voice features, you must create a voice bot.",source:"@site/docs/cookbooks/voice-as-channel/build/botbuilderintro.md",sourceDirName:"cookbooks/voice-as-channel/build",slug:"/cookbooks/voice-as-channel/build/botbuilderintro",permalink:"/docs/cookbooks/voice-as-channel/build/botbuilderintro",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction to voice bot builder",sidebar_label:"Global & node level options",Tags:["global level voice options","node level voice options","create a new voice bot"]},sidebar:"platform_concepts",previous:{title:"Set up outbound campaign",permalink:"/docs/cookbooks/voice-as-channel/OBcampaign/setupOBC"},next:{title:"Using conversation design",permalink:"/docs/cookbooks/voice-as-channel/build/convdesiVB"}},p={},d=[{value:"1. Create a new voice bot",id:"1-create-a-new-voice-bot",level:2},{value:"2. Methods to build a voice bot conversation",id:"2-methods-to-build-a-voice-bot-conversation",level:2},{value:"3. Nodes supported for voice bots",id:"3-nodes-supported-for-voice-bots",level:2},{value:"4. Configure voice nodes/flows through settings",id:"4-configure-voice-nodesflows-through-settings",level:2}],u={toc:d};function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To explore the voice features, you must create a ",(0,r.kt)("strong",{parentName:"p"},"voice bot"),".\nFunctionalities such as Design(for voice), Voice input node, etc. will not work for chat bots.  ")),(0,r.kt)("h2",{id:"1-create-a-new-voice-bot"},"1. Create a new voice bot"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are a new user, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup"},"this")," article. ")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai"},"Log in")," to your account and click ",(0,r.kt)("strong",{parentName:"p"},"+Create new bot"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/wAbVsH9.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Create from scratch"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/0LG3d7y.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter these details: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Subscription"),": Select the ",(0,r.kt)("strong",{parentName:"li"},"subscription")," under which you want to create this bot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bot type"),": Choose ",(0,r.kt)("strong",{parentName:"li"},"Voice bot"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Avatar"),": Choose/upload an avatar (your bots display photo)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Industry"),": Select from the dropdown. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Region"),": Select from the dropdown."),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Add live chat support to your bot")," if you want to add a customer support flow."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Create bot"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/u2UEI56.png",alt:null})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-methods-to-build-a-voice-bot-conversation"},"2. Methods to build a voice bot conversation"),(0,r.kt)("p",null,"To convert your idea of a voice conversation (use-case) into a bot flow, there are three approaches: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Design a conversation using ",(0,r.kt)("strong",{parentName:"li"},"Conversation design for voice bots"),". "),(0,r.kt)("li",{parentName:"ol"},"Build a bot from scratch using ",(0,r.kt)("strong",{parentName:"li"},"Voice input node"),". "),(0,r.kt)("li",{parentName:"ol"},"Import a ",(0,r.kt)("strong",{parentName:"li"},"Marketplace template")," to your bot and modify it to accommodate voice conversations.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These methods are explained in further articles. ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-nodes-supported-for-voice-bots"},"3. Nodes supported for voice bots"),(0,r.kt)("p",null,"Only the following ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes"},"nodes")," can be used to build voice bot flows: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Nodes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text"},"Text"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prompts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/usingvoiceinput"},"Voice input")," , Call forwarding, Call disconnect ",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#28-speak"},"Speak"),", ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#12-name"},"Name"),", ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#13-phone"},"Phone Number"),", ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#11-question"},"Question"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Logic"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition"},"Condition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables"},"Set variables"),", ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function"},"Function"),", ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database"},"Database"),", ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api"},"API"),", ",(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow"},"Execute Flow"))))),(0,r.kt)("h2",{id:"4-configure-voice-nodesflows-through-settings"},"4. Configure voice nodes/flows through settings"),(0,r.kt)("p",null,"You can configure voice-related features like - Conversation language, Bot speed, User response capture duration, etc. for all the nodes used to build a flow for voice bots."),(0,r.kt)("p",null,"There are two methods to configure these voice options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Global options"),": These settings will be applicable by default for all nodes/flows. For example ",(0,r.kt)("strong",{parentName:"li"},"Conversation language")," and ",(0,r.kt)("strong",{parentName:"li"},"Speed")," of the conversation will ideally be constant throughout the conversation.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Learn more on configuring global options ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice"},"here"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Node options")," - Output of a few nodes demand to behave in a certain way, for this, the node level settings can be configured. This overrides global options for the nodes wherever it is defined. These settings can be different for each node. For example: ",(0,r.kt)("strong",{parentName:"li"},"Capture response time")," can be different while capturing the user's address (using the question node) vs. the user's phone number (using the phone node). ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Learn more on configuring node options ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes#32-configure-node-for-a-voice-bot"},"here"))))}m.isMDXComponent=!0}}]);