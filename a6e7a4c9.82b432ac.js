(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{277:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"toc",(function(){return b})),o.d(t,"default",(function(){return p}));var a=o(3),n=o(7),r=(o(0),o(404)),l=["components"],i={title:"Getting Started With Flows",sidebar_label:"Flow"},c={unversionedId:"platform_concepts/studio/build/journeys",id:"platform_concepts/studio/build/journeys",isDocsHomePage:!1,title:"Getting Started With Flows",description:"The words Flows and Journeys are used synonymously.",source:"@site/docs/platform_concepts/studio/build/journeys.md",slug:"/platform_concepts/studio/build/journeys",permalink:"/docs/platform_concepts/studio/build/journeys",version:"current",sidebar_label:"Flow",sidebar:"platform_concepts",previous:{title:"Studio overview",permalink:"/docs/platform_concepts/studio/overview"},next:{title:"Nodes Overview",permalink:"/docs/platform_concepts/studio/build/nodes/nodes"}},b=[{value:"1. Home",id:"1-home",children:[]},{value:"2. Workflow",id:"2-workflow",children:[]},{value:"3. Flow",id:"3-flow",children:[{value:"3.1 Create a Flow",id:"31-create-a-flow",children:[]}]},{value:"4. Configure Start trigger",id:"4-configure-start-trigger",children:[]},{value:"5. Trigger the flow",id:"5-trigger-the-flow",children:[{value:"5.1 URL",id:"51-url",children:[]},{value:"5.2 Code",id:"52-code",children:[]}]}],s={toc:b};function p(e){var t=e.components,o=Object(n.a)(e,l);return Object(r.b)("wrapper",Object(a.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The words ",Object(r.b)("strong",{parentName:"p"},"Flows")," and ",Object(r.b)("strong",{parentName:"p"},"Journeys")," are used synonymously. ")),Object(r.b)("p",null,"In this document, we discuss: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Home "),Object(r.b)("li",{parentName:"ol"},"Workflow "),Object(r.b)("li",{parentName:"ol"},"Flow",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"How to create a flow?"))),Object(r.b)("li",{parentName:"ol"},"How to trigger a flow?",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Types of start trigger ")))),Object(r.b)("h2",{id:"1-home"},"1. Home"),Object(r.b)("p",null,"This is a general (",Object(r.b)("strong",{parentName:"p"},"Home"),") flow that the bot follows irrespective of the training given to it. First, there is always a welcome message ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/getting-started/#21-configure-the-welcome-message"},"configured")," and displayed to the user, then, bot responds to the queries it understands and does not understand.\nSuch a flow is configured on the Home -flow. It is further customized as per the usecase."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/yGwYdRl.png",alt:null})),Object(r.b)("h2",{id:"2-workflow"},"2. Workflow"),Object(r.b)("p",null,"Workflows are background processes that run along with the conversational flow. Workflow option can be selected while creating a flow. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/eMMSl5H.jpg",alt:null})),Object(r.b)("p",null,"Workflow is the same as any other flow page, it will have a start node. Nodes connecting the start node can only be ",Object(r.b)("strong",{parentName:"p"},"Action")," or ",Object(r.b)("strong",{parentName:"p"},"Logic")," nodes (Message and Prompt nodes are not available to build a workflow)."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/U3akD5c.jpg",alt:null})),Object(r.b)("h2",{id:"3-flow"},"3. Flow"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," Flow is the logical design of your conversational flow, which will be the actual path that the end users will go through.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"- User: \u201cShow me the menu\u201d\n- Bot: \u201cPlease select your Cuisine: South Indian, North Indian\u201d\n- User: \u201cSouth Indian\u201d\n- Bot: \u201cPlease select the Item: Dosa, Pongal . . .\u201d\n")),Object(r.b)("p",null,"Once you have the scope of your bot ready, depending on the purpose user has for chatting with your bot, the bot must be built to respond accordingly. This is done by dividing the scope into multiple flows. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/1SsOIAA.jpg",alt:null})),Object(r.b)("p",null,"Suppose the bot is used as an office portal to apply for leaves or check salary, bot must converse with the user and fetch the information from all the steps(Nodes) to do just that. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ckLhNXJ.png",alt:null})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Flows can be further categoriesed using Categories.")),Object(r.b)("h3",{id:"31-create-a-flow"},"3.1 Create a Flow"),Object(r.b)("p",null,"You must create a flow before you create a start trigger for the flow. You can create a flow using a template or from scratch. When you create a flow from scratch, you create a placeholder for the flow first."),Object(r.b)("p",null,"Follow the steps below to create a flow:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Log in to your studio account. On the Overview page, select your bot."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Overview")," > ",Object(r.b)("strong",{parentName:"li"},"Studio"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/jGuxkYh.png",alt:null})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Flows")," > Create flow.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/JlpH4nD.jpg",alt:null})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"If you want to select from the available template, click a suitable template. ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/cSzWyao.jpg",alt:null})),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Otherwise, Click ",Object(r.b)("strong",{parentName:"li"},"Start from scratch")," in the top menu bar.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/CmT5YpH.jpg",alt:null})),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Enter the following details:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Flow name"),": Name of the flow; make sure the name is accoridng to the task of the flow. For example, flight booking, customer service, and products on discount.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Flow Description"),": Description of the flow; you can also convert the description in\nto any language other than English by clicking Google translator button.   . For\nexample, this flows lead customers to flight booking workflow.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Category"),": One flow can have multiple categories. The created flow will fall into default categories if no category is mentioned. You can either select an existing category from the drop-down or, add a new category:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"+Create category")),Object(r.b)("li",{parentName:"ul"},"Enter the ",Object(r.b)("strong",{parentName:"li"},"Name")," of the category"),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Create Category")," to save it")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Create as a workflow"),": Click on the right of the toggle to convert the flow to a workflow. Workflows run in the back-end along with the conversational flow.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/gsXNfvM.png",alt:null})),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Click Save.")),Object(r.b)("h2",{id:"4-configure-start-trigger"},"4. Configure Start trigger"),Object(r.b)("p",null,"Follow the steps below to configure a start trigger:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open the bot ",Object(r.b)("strong",{parentName:"li"},"Overview")," page. "),Object(r.b)("li",{parentName:"ol"},"Click Design bot flows > Flows tab. Click Flows node of the bot. Expand a category and click a flow.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/xOt35dU.png",alt:null})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Click anywhere on the Start node.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/2bBwPfh.png",alt:null})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"In the Start trigger pop-up, select a type of trigger from the drop-down. In the Select field, select the value of the type of trigger.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/aKBVekp.png",alt:null})),Object(r.b)("p",null,"Start trigger enables you to configure the initiation of a bot communication flow. When a customer types a query, the bot starts the conversation based on the logic of the trigger."),Object(r.b)("p",null,"Flow is triggered using one of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Intent"),": Start the flow with an action statement, how to book a test drive, connect to a service center, find the status of an order, and find the best product on a website. For example, if a customer types How to book a test ride, the bot triggers the configured flow of the ",Object(r.b)("em",{parentName:"li"},"#test ride")," intent. ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents/"},"Click here "),"to learn more about intents. ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/nGgAQVN.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Entities"),": Start the flow with the primary object(s) of a query, such as the cheapest flight, customer service number, sedan cars, rooms in a hotel, and best beauty products. For example, if a customer types studio, the bot triggers the configured flow associated with the studio model. ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/entities/#entity-types"},"Click here "),"to learn more about entities. ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/pMCcjPJ.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Event"),": Start the flow with an event, such as a bot pops up when a customer visits the Contact us page or the Home page of the website or app. ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub/"},"Click here "),"to learn more about configuration of events.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Page Url"),": Start a flow with a page Url. For example, triggering the help center url on contact us page."))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/wt8EyFh.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Execute Flow"),": Apart from start trigger, users can also set up when to trigger another flow manually from or inside a flow using Execute Flow action node.\nYou can add an action node- ",Object(r.b)("strong",{parentName:"li"},"Execute Flow")," and select the flow you want to execute next. ")),Object(r.b)("p",null,"For example, track your application, know your ID and view FAQ's are three user responses linked to different flows (which are configured as separate flows). When one of the response is sent, respective flows are executed. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/aSBbMJX.png",alt:null})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Click ",Object(r.b)("strong",{parentName:"p"},"Add new trigger")," to add additional triggers for the flow. You can train the bot with more than one start trigger to accomodate maximum use cases. Every trigger type has a logic for triggering the start of the communication. At least one logic must meet, when a customer is interacting with the website or application, to trigger the communication flow.\nFor example, a start trigger can have two events, three intents, and five entities. If you meet any conditions configured for the types of trigger, the bot triggers the flow.")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"5-trigger-the-flow"},"5. Trigger the flow"),Object(r.b)("p",null,"When you are configuring a bot, there could be several complex flows in the bot. You need to always ensure whether the outcome of a flow is as desired before moving on to the next flow and it\u2019s tedious to run the entire bot everytime you make some change in a flow."),Object(r.b)("p",null,"You just need to add a parameter to the URL or widget code to preview changes made in a particular flow of your bot. You no longer have to run through the entire bot flow everytime you make some changes to a flow."),Object(r.b)("p",null,"To preview a specific bot flow there are two methods, discussed in the further sections: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Via URL"),Object(r.b)("li",{parentName:"ol"},"Via Code")),Object(r.b)("h3",{id:"51-url"},"5.1 URL"),Object(r.b)("p",null,"Follow the given steps to preview a bot via URL: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Open the bot and navigate to ",Object(r.b)("strong",{parentName:"p"},"Studio")," > ",Object(r.b)("strong",{parentName:"p"},"Flows"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click the Flows drop-down and select the flow that you want to preview")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy the path of the flow that you see in the URL (after ",Object(r.b)("inlineCode",{parentName:"p"},"flow/"),")"),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/eXcmAlN.png",alt:null}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click Preview bot. You will see the entire bot flow in a new tab.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the address bar, append ",Object(r.b)("inlineCode",{parentName:"p"},"?ym.triggerJourney={flow path}"),"."),Object(r.b)("p",{parentName:"li"}," Example:\n",Object(r.b)("inlineCode",{parentName:"p"},"https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=docs-feedback")))),Object(r.b)("p",null,"   ",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/CLmlHyp.png",alt:null})),Object(r.b)("p",null,"Ensure that you clear the browser cache before you preview the bot. It is recommended to use Incognito mode or Private window to preview flows."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note:"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"?")," to append right after the base URL of the bot. Example: ",Object(r.b)("a",{parentName:"li",href:"https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=feedback"},"https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=feedback")),Object(r.b)("li",{parentName:"ul"},"Use & if you want to append it after a variable. Example: ",Object(r.b)("a",{parentName:"li",href:"https://cloud.yellow.ai/liveBot/x1635319612954?region=&ym.triggerJourney=feedback"},"https://cloud.yellow.ai/liveBot/x1635319612954?region=&ym.triggerJourney=feedback")))),Object(r.b)("h3",{id:"52-code"},"5.2 Code"),Object(r.b)("p",null,"Follow the steps below to preview a bot via code (embedded on your website)."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Get the path of the flow as explained in the previous section."),Object(r.b)("li",{parentName:"ol"},"In ",Object(r.b)("inlineCode",{parentName:"li"},"window.ymConfig"),", pass the parameter ",Object(r.b)("inlineCode",{parentName:"li"},"triggerJourney")," and specify the path of the flow you copied.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'<script type = "text/javascript" >\n    window.ymConfig = {\n        "bot": "x1625119673009",\n        "host": "https://cloud.yellow.ai",\n        triggerJourney: "malaga_vftkqv"\n    };\n(function() {\n    var w = window,\n        ic = w.YellowMessenger;\n    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);\n    else {\n        var d = document,\n            i = function() {\n                i.c(arguments)\n            };\n\n        function l() {\n            var e = d.createElement("script");\n            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";\n            var t = d.getElementsByTagName("script")[0];\n            t.parentNode.insertBefore(e, t)\n        }\n        i.q = [], i.c = function(e) {\n            i.q.push(e)\n        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)\n    }\n})(); \n<\/script>\n')),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Paste the code in the Header or body of your website as per your need to preview the flow.")),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"What Next?")),Object(r.b)("p",null,"Series of ",Object(r.b)("strong",{parentName:"p"},"nodes")," are used to create a flow. There are multiple nodes available on our platform."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Learn about different ",Object(r.b)("strong",{parentName:"li"},"nodes")," ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes/"},"here")," and create a complete flow."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"http://localhost:3000/docs/platform_concepts/studio/tools#21-test-your-bot"},"Test")," the flow.")))}p.isMDXComponent=!0},404:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return h}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(o),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return o?n.a.createElement(h,i(i({ref:t},b),{},{components:o})):n.a.createElement(h,i({ref:t},b))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<r;b++)l[b]=o[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);