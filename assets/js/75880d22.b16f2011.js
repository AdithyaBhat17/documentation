"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[64058],{3905:function(t,e,o){o.d(e,{Zo:function(){return u},kt:function(){return f}});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):l(l({},e),t)),o},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(o),m=n,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return o?a.createElement(f,l(l({ref:e},u),{},{components:o})):a.createElement(f,l({ref:e},u))}));function f(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:n,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},12133:function(t,e,o){o.r(e),o.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),l=["components"],i={title:"Create Flow",sidebar_label:"Create Flow"},s=void 0,p={unversionedId:"platform_concepts/studio/build/Flows/journeys",id:"platform_concepts/studio/build/Flows/journeys",title:"Create Flow",description:"A flow is the logical design of your conversational journey. It is a structure that defines the sequence of a chatbot conversation with the virtual agent based on the questions your chatbot would ask and the various replies that a user would provide.",source:"@site/docs/platform_concepts/studio/build/Flows/journeys.md",sourceDirName:"platform_concepts/studio/build/Flows",slug:"/platform_concepts/studio/build/Flows/journeys",permalink:"/docs/platform_concepts/studio/build/Flows/journeys",draft:!1,tags:[],version:"current",frontMatter:{title:"Create Flow",sidebar_label:"Create Flow"},sidebar:"platform_concepts",previous:{title:"Overview",permalink:"/docs/platform_concepts/studio/overview"},next:{title:"Configure flow triggers",permalink:"/docs/platform_concepts/studio/build/Flows/configureflow"}},u={},c=[{value:'<a name="home"></a> 1. Understand UI elements to build a flow',id:"-1-understand-ui-elements-to-build-a-flow",level:2},{value:"2. Create a flow",id:"2-create-a-flow",level:2},{value:"2.1 Edit a flow",id:"21-edit-a-flow",level:3},{value:'<a name="workflow"></a> 2.2 Workflow - a variant of flow',id:"-22-workflow---a-variant-of-flow",level:3},{value:"3. Preview a flow",id:"3-preview-a-flow",level:2},{value:"3.1 Preview single flow",id:"31-preview-single-flow",level:3},{value:"3.2 Preview a bot",id:"32-preview-a-bot",level:3}],d={toc:c};function m(t){var e=t.components,o=(0,n.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A flow is the logical design of your conversational journey. It is a structure that defines the sequence of a chatbot conversation with the virtual agent based on the questions your chatbot would ask and the various replies that a user would provide."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Flows can be further categorised using ",(0,r.kt)("strong",{parentName:"p"},"Categories"),".\nThe words ",(0,r.kt)("strong",{parentName:"p"},"Flows")," and ",(0,r.kt)("strong",{parentName:"p"},"Journeys")," are used synonymously.")),(0,r.kt)("p",null,"In the platform, there are different types of nodes, and you can connect each individual node to build a single  conversational flow based on your use case. Each of these nodes either displays, requests, or processes information when a particular flow is triggered."),(0,r.kt)("p",null,"Once you have the scope of your bot ready, depending on the use case, the bot must be built to respond accordingly. This is done by dividing the scope into multiple flows."),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User: \u201cShow me the menu\u201d"),(0,r.kt)("li",{parentName:"ul"},"Bot: \u201cPlease select your Cuisine: South Indian, North Indian\u201d"),(0,r.kt)("li",{parentName:"ul"},"User: \u201cSouth Indian\u201d"),(0,r.kt)("li",{parentName:"ul"},"Bot: \u201cPlease select the Item: Dosa, Pongal . . .\u201d")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/z6dx9sS.jpg",alt:null})),(0,r.kt)("p",null,"Suppose the bot is used as an official portal to apply for leaves or check salary, bot must converse with the user and fetch the information from all the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes"},"nodes"),"."),(0,r.kt)("p",null,"In this article, you will learn:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-understand-ui-elements-to-build-a-flow"},"What are the different UI elements to build a flow?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-create-a-flow"},"How to create a flow?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#21-edit-a-flow"},"How to edit a flow?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#22-workflow---a-variant-of-flow"},"Workflow- a variation of flow?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-preview-a-flow"},"How to preview a flow?"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-1-understand-ui-elements-to-build-a-flow"},(0,r.kt)("a",{name:"home"})," 1. Understand UI elements to build a flow"),(0,r.kt)("p",null,"The icons available on the side are shortcuts to access the following: "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/cXboxyj.jpg",alt:null})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Icon"),(0,r.kt)("th",{parentName:"tr",align:null},"Functionality"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node navigator"),(0,r.kt)("td",{parentName:"tr",align:null},"Used to navigate to a specific node. You can also use it to filter and segregate nodes in your flow.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview"},"Channel")," - Use to configure how bot functions in each channel."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"https://i.imgur.com/Jzrwr57.png",alt:"drawing",width:"60%"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"Prompts")),(0,r.kt)("td",{parentName:"tr",align:null},"Shortcut to drag and drop prompt nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes"},"Message")),(0,r.kt)("td",{parentName:"tr",align:null},"Shortcut to drag and drop message nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes"},"Action")),(0,r.kt)("td",{parentName:"tr",align:null},"Shortcut to drag and drop action nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes"},"Logic")),(0,r.kt)("td",{parentName:"tr",align:null},"Shortcut to drag and drop logic nodes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"Variables")),(0,r.kt)("td",{parentName:"tr",align:null},"Variables are used throught this module for multiple purposes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported#2-add-languages"},"Language")),(0,r.kt)("td",{parentName:"tr",align:null},"Select a language your bot is accessible in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools"},"Tools")),(0,r.kt)("td",{parentName:"tr",align:null},"Used to open the global tools tab.")))),(0,r.kt)("h2",{id:"2-create-a-flow"},"2. Create a flow"),(0,r.kt)("p",null,"You must first create a flow and then trigger a flow. You can create a flow using a template or from scratch. When you create a flow from scratch, you must create a placeholder for the flow first."),(0,r.kt)("p",null,"To create a flow, follow the below steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.yellow.ai"},"yellow.ai"),", select your bot. "),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Overview")," > ",(0,r.kt)("strong",{parentName:"li"},"Studio"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview#access-studio"},"Studio"),". ")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"+ Create a new flow"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/5CVs4FT.png",alt:null})))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To open flows, use the keyboard shortcut",(0,r.kt)("inlineCode",{parentName:"p"},"s")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"f"),".")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to select from the available templates, click a suitable template from the ",(0,r.kt)("strong",{parentName:"p"},"Flow template")," dialog box. To know more about templates, click ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/marketplaceintro"},"here"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/azyPYFo.png",alt:null})))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Otherwise, click ",(0,r.kt)("strong",{parentName:"p"},"Create from scratch")," in the top menu bar."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/7YKTYeG.png",alt:null})))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following details:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Flow name"),": Enter the name of your flow and make sure the name is according to the task of the flow. For example, flight booking, customer service, and products on discount.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Flow Description"),": Enter the description of the flow. You can also convert the description into any language other than ",(0,r.kt)("strong",{parentName:"p"},"English")," by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Google translator")," button. For example, these flows lead customers to flight booking workflow.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Category"),": One flow can have multiple categories. The created flow will fall into default categories if no category is mentioned. You can either select an existing category from the drop-down or, add a new category:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"+Create category"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter the ",(0,r.kt)("strong",{parentName:"li"},"Name")," of the category."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create Category")," to save it."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Create as a workflow"),": Click the toggle button if you want to convert the flow to a workflow. Workflows run in the backend along with the conversational flow. To know more about workflow, click ",(0,r.kt)("a",{parentName:"p",href:"#2-workflow---a-variant-of-flow"},"here"),"."))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/r9qKPuo.jpg",alt:null})))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),"."),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes"},"nodes")," and build a flow as per your use-case. ")),(0,r.kt)("h3",{id:"21-edit-a-flow"},"2.1 Edit a flow"),(0,r.kt)("p",null,"To edit a flow, follow these steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ensure the environment (on the top right corner) is in the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes"},"development mode"),"."),(0,r.kt)("li",{parentName:"ol"},"Go to the flows drop-down on the top and click the flow you would like to edit. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/YwwLdK3.png",alt:null})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-22-workflow---a-variant-of-flow"},(0,r.kt)("a",{name:"workflow"})," 2.2 Workflow - a variant of flow"),(0,r.kt)("p",null,"Workflows are background processes that run along with the conversational flow. ",(0,r.kt)("strong",{parentName:"p"},"Workflow")," option can be selected while creating a flow."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/icmGvq4.png",alt:null})),(0,r.kt)("p",null,"Workflow is the same as any other flow page, it will have a start node. Nodes connecting the start node can only be ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes"},"Action")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes"},"Logic")," nodes (Message and Prompt nodes are not available to build a workflow)."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/vwmAHUY.jpg",alt:null})),(0,r.kt)("h2",{id:"3-preview-a-flow"},"3. Preview a flow"),(0,r.kt)("p",null,"After creating a flow, you can preview it to ensure that its functionality is working as expected. You can quickly preview a single flow, or you can use a preview bot based on your business needs. "),(0,r.kt)("h3",{id:"31-preview-single-flow"},"3.1 Preview single flow"),(0,r.kt)("p",null,"You can preview directly a selected flow instead of always triggering a flow from the welcome journey using ",(0,r.kt)("strong",{parentName:"p"},"Preview current flow")," option. This option helps you quickly test the single flow without triggering the welcome message or any intents that are not related to the selected flow."),(0,r.kt)("p",null,"Consider that you have created a flow to order food from a restaurant, and you can preview this particular flow by clicking ",(0,r.kt)("strong",{parentName:"p"},"Preview current flow")," option. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/BhWRW6n.jpg",alt:null})),(0,r.kt)("p",null,"While testing your flow, you can view ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/debug-flow"},"debugging details"),", which provide the details of the respective node in the flow."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/LuHokrC.png",alt:null})),(0,r.kt)("h3",{id:"32-preview-a-bot"},"3.2 Preview a bot"),(0,r.kt)("p",null,"You can preview all the flows that are intended a bot by clicking ",(0,r.kt)("strong",{parentName:"p"},"Preview bot")," option."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/SxReC72.jpg",alt:null})),(0,r.kt)("p",null,"You can also select the channels from the ",(0,r.kt)("strong",{parentName:"p"},"Website")," drop-down to test your flows in the respective channels. "),(0,r.kt)("img",{src:"https://i.imgur.com/zNjLfee.png",alt:"drawing",width:"60%"}),(0,r.kt)("p",null,"After testing the flow, click the below highlighted icon to preview your bot."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/BDujOLo.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/zhXqsM1.png",alt:null})," "),(0,r.kt)("p",null,"After previewing your flow, you can publish your bot to the respective environmnet. To know more about publish bot, click ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes#2-publish-bot"},"here"),"."))}m.isMDXComponent=!0}}]);