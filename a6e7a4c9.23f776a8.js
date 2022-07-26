(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{278:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return s})),o.d(t,"default",(function(){return p}));var r=o(3),n=o(7),a=(o(0),o(394)),l=["components"],i={title:"Getting Started With Flows/ Journey",sidebar_label:"Journeys"},c={unversionedId:"platform_concepts/studio/build/journeys",id:"platform_concepts/studio/build/journeys",isDocsHomePage:!1,title:"Getting Started With Flows/ Journey",description:"In this document, we discuss:",source:"@site/docs/platform_concepts/studio/build/journeys.md",slug:"/platform_concepts/studio/build/journeys",permalink:"/docs/platform_concepts/studio/build/journeys",version:"current",sidebar_label:"Journeys",sidebar:"platform_concepts",previous:{title:"Understanding Conversational Studio",permalink:"/docs/platform_concepts/studio/overview"},next:{title:"Nodes Overview",permalink:"/docs/platform_concepts/studio/build/nodes/nodes"}},s=[{value:"1. Home",id:"1-home",children:[]},{value:"2. Flow",id:"2-flow",children:[]},{value:"3. Workflow",id:"3-workflow",children:[]},{value:"4. Create a Flow",id:"4-create-a-flow",children:[]},{value:"5. Configure Start trigger",id:"5-configure-start-trigger",children:[]}],b={toc:s};function p(e){var t=e.components,o=Object(n.a)(e,l);return Object(a.b)("wrapper",Object(r.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this document, we discuss: "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Home "),Object(a.b)("li",{parentName:"ol"},"Flow "),Object(a.b)("li",{parentName:"ol"},"Workflow"),Object(a.b)("li",{parentName:"ol"},"How to create a flow?"),Object(a.b)("li",{parentName:"ol"},"How to trigger a flow?",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Types of start trigger ")))),Object(a.b)("h2",{id:"1-home"},"1. Home"),Object(a.b)("p",null,"This is a general (",Object(a.b)("strong",{parentName:"p"},"Home"),") flow that the bot follows irrespective of the training given to it. First, there is always a welcome message displayed to the user, then, bot responds to the queries it understands and does not understand.\nSuch a flow is configured on the Home -flow. It is further customized as per the usecase."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/yGwYdRl.png",alt:null})),Object(a.b)("h2",{id:"2-flow"},"2. Flow"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"}," Flow is the logical design of your conversational flow, which will be the actual path that the end users will go through.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"- User: \u201cShow me the menu\u201d\n- Bot: \u201cPlease select your Cuisine: South Indian, North Indian\u201d\n- User: \u201cSouth Indian\u201d\n- Bot: \u201cPlease select the Item: Dosa, Pongal . . .\u201d\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The words ",Object(a.b)("strong",{parentName:"p"},"Flows")," and ",Object(a.b)("strong",{parentName:"p"},"Journeys")," are used synonymously. ")),Object(a.b)("p",null,"Once you have the scope of your bot ready, depending on the purpose user has for chatting with your bot, the bot must be built to respond accordingly. This is done by dividing the scope into multiple flows. "),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/1SsOIAA.jpg",alt:null})),Object(a.b)("p",null,"Suppose the bot is used as an office portal to apply for leaves or check salary, bot must converse with the user and fetch the information from all the steps(Nodes) to do just that. "),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/ckLhNXJ.png",alt:null})),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Flows can be further categoriesed using Categories."))),Object(a.b)("h2",{id:"3-workflow"},"3. Workflow"),Object(a.b)("p",null,"Workflows are background processes that run along with the conversational flow. Workflow option can be selected while creating a flow. "),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/eMMSl5H.jpg",alt:null})),Object(a.b)("p",null,"Workflow is the same as any other flow page, it will have a start node. Nodes connecting the start node can only be ",Object(a.b)("strong",{parentName:"p"},"Action")," or ",Object(a.b)("strong",{parentName:"p"},"Logic")," nodes (Message and Prompt nodes are not available to build a workflow)."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/U3akD5c.jpg",alt:null})),Object(a.b)("h2",{id:"4-create-a-flow"},"4. Create a Flow"),Object(a.b)("p",null,"You must create a flow before you create a start trigger for the flow. You can create a flow using a template or from scratch. When you create a flow from scratch, you create a placeholder for the flow first."),Object(a.b)("p",null,"Follow the steps below to create a flow:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Log in to your studio account. On the Overview page, select your bot."),Object(a.b)("li",{parentName:"ol"},"Select Overview > Studio.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/jGuxkYh.png",alt:null})),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Select Flows > Create flow.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/JlpH4nD.jpg",alt:null})),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"If you want to select from the available template, click a suitable template. ")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/cSzWyao.jpg",alt:null})),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Otherwise, Click ",Object(a.b)("strong",{parentName:"li"},"Start from scratch")," in the top menu bar.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/CmT5YpH.jpg",alt:null})),Object(a.b)("ol",{start:6},Object(a.b)("li",{parentName:"ol"},"Enter the following details:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Flow name"),": Name of the flow; make sure the name is accoridng to the task of the flow. For example, flight booking, customer service, and products on discount.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Flow Description"),": Description of the flow; you can also convert the description in\nto any language other than English by clicking Google translator button.   . For\nexample, this flows lead customers to flight booking workflow.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Category"),": One flow can have multiple categories. The created flow will fall into default categories if no category is mentioned. You can either select an existing category from the drop-down or, add a new category:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Click ",Object(a.b)("strong",{parentName:"li"},"+Create category")),Object(a.b)("li",{parentName:"ul"},"Enter the ",Object(a.b)("strong",{parentName:"li"},"Name")," of the category"),Object(a.b)("li",{parentName:"ul"},"Click ",Object(a.b)("strong",{parentName:"li"},"Create Category")," to save it")))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Create as a workflow"),": Click on the right of the toggle to convert the flow to a workflow. Workflows run in the back-end along with the conversational flow.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/gsXNfvM.png",alt:null})),Object(a.b)("ol",{start:7},Object(a.b)("li",{parentName:"ol"},"Click Save.")),Object(a.b)("h2",{id:"5-configure-start-trigger"},"5. Configure Start trigger"),Object(a.b)("p",null,"Follow the steps below to configure a start trigger:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Open the bot ",Object(a.b)("strong",{parentName:"li"},"Overview")," page. "),Object(a.b)("li",{parentName:"ol"},"Click Design bot flows > Flows tab. Click Flows node of the bot. Expand a category and click a flow.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/xOt35dU.png",alt:null})),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Click anywhere on the Start node.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/2bBwPfh.png",alt:null})),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"In the Start trigger pop-up, select a type of trigger from the drop-down. In the Select field, select the value of the type of trigger.")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/aKBVekp.png",alt:null})),Object(a.b)("p",null,"Start trigger enables you to configure the initiation of a bot communication flow. When a customer types a query, the bot starts the conversation based on the logic of the trigger."),Object(a.b)("p",null,"Flow is triggered using one of the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Intent"),": Start the flow with an action statement, how to book a test drive, connect to a service center, find the status of an order, and find the best product on a website. For example, if a customer types How to book a test ride, the bot triggers the configured flow of the ",Object(a.b)("em",{parentName:"li"},"#test ride")," intent. ",Object(a.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents/"},"Click here "),"to learn more about intents. ")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/nGgAQVN.png",alt:null})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Entities"),": Start the flow with the primary object(s) of a query, such as the cheapest flight, customer service number, sedan cars, rooms in a hotel, and best beauty products. For example, if a customer types studio, the bot triggers the configured flow associated with the studio model. ",Object(a.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/entities/#entity-types"},"Click here "),"to learn more about entities. ")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/pMCcjPJ.png",alt:null})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Event"),": Start the flow with an event, such as a bot pops up when a customer visits the Contact us page or the Home page of the website or app. ",Object(a.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub/"},"Click here "),"to learn more about configuration of events.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Page Url"),": Start a flow with a page Url. For example, triggering the help center url on contact us page."))),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/wt8EyFh.png",alt:null})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Execute Flow"),": Apart from start trigger, users can also set up when to trigger another journey manually from or inside a journey using Execute Flow action node.\nYou can add an action node- ",Object(a.b)("strong",{parentName:"li"},"Execute Flow")," and select the flow you want to execute next. ")),Object(a.b)("p",null,"For example, track your application, know your ID and view FAQ's are three user responses linked to different flows (which are configured as separate flows). When one of the response is sent, respective flows are executed. "),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/aSBbMJX.png",alt:null})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Click ",Object(a.b)("strong",{parentName:"p"},"Add new trigger")," to add additional triggers for the flow. You can train the bot with more than one start trigger to accomodate maximum use cases. Every trigger type has a logic for triggering the start of the communication. At least one logic must meet, when a customer is interacting with the website or application, to trigger the communication flow.\nFor example, a start trigger can have two events, three intents, and five entities. If you meet any conditions configured for the types of trigger, the bot triggers the flow.")),Object(a.b)("hr",null),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"What Next?")),Object(a.b)("p",null,"Series of ",Object(a.b)("strong",{parentName:"p"},"nodes")," are used to create a flow. There are multiple nodes available on our platform."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Learn about different ",Object(a.b)("strong",{parentName:"li"},"nodes")," ",Object(a.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes/"},"here")," and create a complete flow."),Object(a.b)("li",{parentName:"ul"},"Test the flow.")))}p.isMDXComponent=!0},394:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return g}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(o),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return o?n.a.createElement(g,i(i({ref:t},s),{},{components:o})):n.a.createElement(g,i({ref:t},s))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=o[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);