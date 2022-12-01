(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),r=(a(0),a(457)),l=["components"],c={title:"Flows",sidebar_label:"Flows"},i={unversionedId:"platform_concepts/studio/build/understandingflows/journeys",id:"platform_concepts/studio/build/understandingflows/journeys",isDocsHomePage:!1,title:"Flows",description:"The words Flows and Journeys are used synonymously.",source:"@site/docs/platform_concepts/studio/build/understandingflows/journeys.md",slug:"/platform_concepts/studio/build/understandingflows/journeys",permalink:"/docs/platform_concepts/studio/build/understandingflows/journeys",version:"current",sidebar_label:"Flows",sidebar:"platform_concepts",previous:{title:"Studio overview",permalink:"/docs/platform_concepts/studio/overview"},next:{title:"Configure start trigger",permalink:"/docs/platform_concepts/studio/build/understandingflows/configureflow"}},b=[{value:'<a name="createflow"></a> 1. Introdution to flow',id:"1-introdution-to-flow",children:[{value:"2.1 Create a flow",id:"21-create-a-flow",children:[]}]},{value:'<a name="workflow"></a> 2. Workflow - a variant of flow',id:"2-workflow---a-variant-of-flow",children:[]}],s={toc:b};function p(e){var t=e.components,a=Object(n.a)(e,l);return Object(r.b)("wrapper",Object(o.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The words ",Object(r.b)("strong",{parentName:"p"},"Flows")," and ",Object(r.b)("strong",{parentName:"p"},"Journeys")," are used synonymously.")),Object(r.b)("p",null,"In this article, you will learn: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#createflow"},"How to create a flow")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#workflow"},"Workflow- a variation of flow"))),Object(r.b)("h2",{id:"1-introdution-to-flow"},Object(r.b)("a",{name:"createflow"})," 1. Introdution to flow"),Object(r.b)("p",null,"Flow is the logical design of your conversational flow, which will be the actual path that the end users will go through."),Object(r.b)("hr",null),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"User: \u201cShow me the menu\u201d"),Object(r.b)("li",{parentName:"ul"},"Bot: \u201cPlease select your Cuisine: South Indian, North Indian\u201d"),Object(r.b)("li",{parentName:"ul"},"User: \u201cSouth Indian\u201d"),Object(r.b)("li",{parentName:"ul"},"Bot: \u201cPlease select the Item: Dosa, Pongal . . .\u201d")),Object(r.b)("hr",null),Object(r.b)("p",null,"Once you have the scope of your bot ready, depending on the purpose user has for chatting with your bot, the bot must be built to respond accordingly. This is done by dividing the scope into multiple flows."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/zroHc91.jpg",alt:null})),Object(r.b)("p",null,"Suppose the bot is used as an official portal to apply for leaves or check salary, bot must converse with the user and fetch the information from all the steps(",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes"},"Nodes"),") to do just that."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Flows can be further categorised using Categories.")),Object(r.b)("hr",null),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The icons available on the side are shortcuts to access the following: "),Object(r.b)("p",{parentName:"div"},Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/3rEtjur.jpg",alt:null})),Object(r.b)("table",{parentName:"div"},Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Icon"),Object(r.b)("th",{parentName:"tr",align:null},"Functionality"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Node navigator"),Object(r.b)("td",{parentName:"tr",align:null},"Used to navigate to a specific node. You can also use it to filter and segregate nodes in your flow.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"Prompts")),Object(r.b)("td",{parentName:"tr",align:null},"Shortcut to drag and drop prompt nodes.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes"},"Message")),Object(r.b)("td",{parentName:"tr",align:null},"Shortcut to drag and drop message nodes.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes"},"Action")),Object(r.b)("td",{parentName:"tr",align:null},"Shortcut to drag and drop action nodes.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes"},"Logic")),Object(r.b)("td",{parentName:"tr",align:null},"Shortcut to drag and drop logic nodes.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"Variables")),Object(r.b)("td",{parentName:"tr",align:null},"Variables are used throught this module for multiple purposes.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported#2-add-languages"},"Language")),Object(r.b)("td",{parentName:"tr",align:null},"Select a language your bot is accessable in.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview"},"Channel")," - Use to configure how bot functions in each channel."),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("img",{parentName:"td",src:"https://i.imgur.com/Jzrwr57.png",alt:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools"},"Tools")),Object(r.b)("td",{parentName:"tr",align:null},"Used to open the global tools tab.")))))),Object(r.b)("h3",{id:"21-create-a-flow"},"2.1 Create a flow"),Object(r.b)("p",null,"You must first create a flow and then trigger a flow. You can create a flow using a template or from scratch. When you create a flow from scratch, you create a placeholder for the flow first."),Object(r.b)("p",null,"To create a flow, follow these steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Log in to your studio account. On the Overview page, select your bot. "),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Overview")," > ",Object(r.b)("strong",{parentName:"li"},"Studio"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Learn more about ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview#access-studio"},"Studio"),". ")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Flows")," > Create flow.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/YZXi95w.jpg",alt:null})),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Keyboard shortcut to open flows ",Object(r.b)("inlineCode",{parentName:"p"},"s")," + ",Object(r.b)("inlineCode",{parentName:"p"},"f"),"."))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"If you want to select from the available template, click a suitable template.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/K2blabe.jpg",alt:null})),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Otherwise, Click ",Object(r.b)("strong",{parentName:"li"},"Start from scratch")," in the top menu bar.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/npIk9X3.jpg",alt:null})),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Enter the following details:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Flow name"),": Name of the flow; make sure the name is according to the task of the flow. For example, flight booking, customer service, and products on discount.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Flow Description"),": Description of the flow; you can also convert the description into any language other than English by clicking the Google translator button. For example, these flows lead customers to flight booking workflow.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Category"),": One flow can have multiple categories. The created flow will fall into default categories if no category is mentioned. You can either select an existing category from the drop-down or, add a new category:"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"+Create category"),"."),Object(r.b)("li",{parentName:"ol"},"Enter the ",Object(r.b)("strong",{parentName:"li"},"Name")," of the category."),Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Create Category")," to save it."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Create as a workflow"),": Click on the right of the toggle if you want to convert the flow to a workflow. Workflows run in the back-end along with the conversational flow."))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/GS5ENuC.png",alt:null})),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Save"),"."),Object(r.b)("li",{parentName:"ol"},"Add ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes"},"nodes")," and build a flow as per your use-case. ")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"2-workflow---a-variant-of-flow"},Object(r.b)("a",{name:"workflow"})," 2. Workflow - a variant of flow"),Object(r.b)("p",null,"Workflows are background processes that run along with the conversational flow. ",Object(r.b)("strong",{parentName:"p"},"Workflow")," option can be selected while creating a flow."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/yMThz0H.png",alt:null})),Object(r.b)("p",null,"Workflow is the same as any other flow page, it will have a start node. Nodes connecting the start node can only be ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes"},"Action")," or ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes"},"Logic")," nodes (Message and Prompt nodes are not available to build a workflow)."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/7Wfp9Yz.png",alt:null})))}p.isMDXComponent=!0},457:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return a?n.a.createElement(m,c(c({ref:t},b),{},{components:a})):n.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var b=2;b<r;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);