(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(406)),l=["components"],b={title:"Getting started with yellow.ai",sidebar_label:"Get started"},c={unversionedId:"platform_concepts/getting-started",id:"platform_concepts/getting-started",isDocsHomePage:!1,title:"Getting started with yellow.ai",description:"See the power of Conversational AI for yourself. You can read all about it in our Studio section or you can stay on this page and build a bot immediately.",source:"@site/docs/platform_concepts/getting-started.md",slug:"/platform_concepts/getting-started",permalink:"/docs/platform_concepts/getting-started",version:"current",sidebar_label:"Get started",sidebar:"platform_concepts",next:{title:"Studio Overview",permalink:"/docs/platform_concepts/studio/overview"}},i=[{value:"1. Prerequisites",id:"1-prerequisites",children:[{value:"1.1 Understand Your Use Case",id:"11-understand-your-use-case",children:[]},{value:"1.2 Get Familiar With the Bot Terms",id:"12-get-familiar-with-the-bot-terms",children:[]},{value:"1.3 Keyboard shortcuts",id:"13-keyboard-shortcuts",children:[]}]},{value:"2. Bot Building",id:"2-bot-building",children:[{value:"2.1. Configure the welcome message",id:"21-configure-the-welcome-message",children:[]},{value:"2.2. Set up a Flow/Journey",id:"22-set-up-a-flowjourney",children:[]},{value:"2.3 Add Nodes",id:"23-add-nodes",children:[]},{value:"2.4 Create and Store Values in Variables",id:"24-create-and-store-values-in-variables",children:[]},{value:"2.5. Handle User Response",id:"25-handle-user-response",children:[]},{value:"2.6. Trigger a Flow",id:"26-trigger-a-flow",children:[]},{value:"2.7. Store Records in a Database",id:"27-store-records-in-a-database",children:[]}]},{value:"3. Add Ons",id:"3-add-ons",children:[{value:"3.1 Integrations",id:"31-integrations",children:[]},{value:"3.2 Marketplace",id:"32-marketplace",children:[]},{value:"3.3 Channels",id:"33-channels",children:[]}]},{value:"4. Bot Troubleshooting",id:"4-bot-troubleshooting",children:[]}],s={toc:i};function p(e){var t=e.components,a=Object(o.a)(e,l);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"See the power of Conversational AI for yourself. You can read all about it in our Studio section or you can stay on this page and build a bot immediately."),Object(r.b)("p",null,"It is entirely your choice! If you don't know where to start, checkout this walkthrough video of yellow.ai Platform overview."),Object(r.b)("hr",null),Object(r.b)("p",null,"This is a step by step guide to help you understand yellow.ai platform and build your very own bot.\nAs we proceed, to learn more, you can gets your hands on our detailed ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/getting_started"},"Guides"),"."),Object(r.b)("p",null,"Here is a walkthrough of our platform."),Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/w80U82cU0l0",title:"YouTube video player",frameborder:"0",allow:"autoplay; clipboard-write; picture-in-picture",allowfullscreen:"True"})),Object(r.b)("p",null,"To get started, visit our official website (",Object(r.b)("a",{parentName:"p",href:"https://cloud.yellow.ai/"},"https://cloud.yellow.ai/"),"\xa0) and ",Object(r.b)("strong",{parentName:"p"},"sign up or sign in")," with your Email."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/dc5NS91.png",alt:null})),Object(r.b)("p",null,"Watch how to create a bot project."),Object(r.b)("p",{align:"center"},Object(r.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LaeNb_IV-UE",title:"YouTube video player",frameborder:"0",allow:"autoplay; clipboard-write; picture-in-picture",allowfullscreen:"True"})),":::info Get live sessions on how to create your own bot using yellow.ai by signing up to our free academy training: https://academy.ascend.yellow.ai/ :::",Object(r.b)("h2",{id:"1-prerequisites"},"1. Prerequisites"),Object(r.b)("h3",{id:"11-understand-your-use-case"},"1.1 Understand Your Use Case"),Object(r.b)("p",null,"Our platform yellow.ai\xa0assists you to build virtual assistants(bots) for various use cases. Most common use cases are: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Lead Generation"),Object(r.b)("li",{parentName:"ul"},"Connecting a user with a live agent"),Object(r.b)("li",{parentName:"ul"},"Automating responses FAQs"),Object(r.b)("li",{parentName:"ul"},"Accommodating a complete e-commerce experience"),Object(r.b)("li",{parentName:"ul"},"HR automation and many more!")),Object(r.b)("p",null,"Having a well defined use-case will make your bot building journey simpler and fun. For this, we recommend you to establish a flow that matches your primary use-case."),Object(r.b)("hr",null),Object(r.b)("p",null,"Attached below is a simple flowchart (for ordering a phone) that we will use as a reference to walk you through the bot building process. "),Object(r.b)("h2",{id:""},Object(r.b)("img",{parentName:"h2",src:"https://i.imgur.com/axuVMs9.png",alt:null})),Object(r.b)("h3",{id:"12-get-familiar-with-the-bot-terms"},"1.2 Get Familiar With the Bot Terms"),Object(r.b)("p",null,"After signing into our platform, click ",Object(r.b)("strong",{parentName:"p"},"Create New Project"),"."),Object(r.b)("p",null,"If you land on the ",Object(r.b)("strong",{parentName:"p"},"Overview")," page, it means that you have a project created.\nClick the dropdown icon next to the ",Object(r.b)("strong",{parentName:"p"},"Overview")," label on the top left corner of the page, you will be able to see various modules available on the platform. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/eKsXp8v.jpg",alt:null})),Object(r.b)("p",null,"Functionalities of the modules are listed below: "),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Studio"),Object(r.b)("td",{parentName:"tr",align:null},"The yellow.ai Studio is the place to build those intelligent bots to power your business using conversational AI. To know more, click ",Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview"},"here")),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Inbox"),Object(r.b)("td",{parentName:"tr",align:null},"Bring a human touch with the help of the Inbox module for your agents to take up conversations beyond the automation. More on that ",Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox"},"here")),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Insights"),Object(r.b)("td",{parentName:"tr",align:null},"Watch how the conversations unfold and which journeys you're taking your users through the most using our Insights module. Check out the docs ",Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/growth/growth"},"here")),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Engage"),Object(r.b)("td",{parentName:"tr",align:null},"Make use of our world class automation to run marketing campaigns across 20+ channels.",Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/engage"},"here")),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Channels"),Object(r.b)("td",{parentName:"tr",align:null},"The bots you build can be plugged across various applications. A list on all the channels available can be found ",Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration"},"here")),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Integrations"),Object(r.b)("td",{parentName:"tr",align:null},"The yellow.ai Studio is the place to build those intelligent bots to power your business using conversational AI. To know more, click ",Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/appConfiguration/razorpay"},"here")),".")))),Object(r.b)("h3",{id:"13-keyboard-shortcuts"},"1.3 Keyboard shortcuts"),Object(r.b)("p",null,"We have introduced keyboard shortcuts to make to easy for you to access key options and increase the productivity of repetetive tasks."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The scope in the table says from where you can you use the key to access that particular option."),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Global: You can use these keyboard shortcuts from any screen of ",Object(r.b)("a",{parentName:"li",href:"https://cloud.yellow.ai"},"https://cloud.yellow.ai")),Object(r.b)("li",{parentName:"ul"},"Studio: You can use these keyboard shortcuts only in the Studio module.")))),Object(r.b)("p",null,"The following table lists the keyboard shortcuts for Studio module -"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Action"),Object(r.b)("th",{parentName:"tr",align:null},"Shortcut Key"),Object(r.b)("th",{parentName:"tr",align:null},"Accessibility"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Open new node selector"),Object(r.b)("td",{parentName:"tr",align:null},"n"),Object(r.b)("td",{parentName:"tr",align:null},"Studio")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Go to Intents page"),Object(r.b)("td",{parentName:"tr",align:null},"i"),Object(r.b)("td",{parentName:"tr",align:null},"Studio")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Go to Entities page"),Object(r.b)("td",{parentName:"tr",align:null},"e"),Object(r.b)("td",{parentName:"tr",align:null},"Studio")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Opens select flow/journey dropdown"),Object(r.b)("td",{parentName:"tr",align:null},"s + f"),Object(r.b)("td",{parentName:"tr",align:null},"Studio")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Go back (wherever you are)"),Object(r.b)("td",{parentName:"tr",align:null},"b"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Opens select bot dropdown"),Object(r.b)("td",{parentName:"tr",align:null},"s + b"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Go to Studio module"),Object(r.b)("td",{parentName:"tr",align:null},"g + s"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Go to Overview page"),Object(r.b)("td",{parentName:"tr",align:null},"g + o"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Go to Inbox module"),Object(r.b)("td",{parentName:"tr",align:null},"g + i"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Go to Channels module"),Object(r.b)("td",{parentName:"tr",align:null},"g + c"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Go to Engage module"),Object(r.b)("td",{parentName:"tr",align:null},"g + e"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Go to Insights module"),Object(r.b)("td",{parentName:"tr",align:null},"g + r"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Go to Integrations module"),Object(r.b)("td",{parentName:"tr",align:null},"g + t"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Switch to Development environment"),Object(r.b)("td",{parentName:"tr",align:null},"m + d"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Switch to Production environment"),Object(r.b)("td",{parentName:"tr",align:null},"m + p"),Object(r.b)("td",{parentName:"tr",align:null},"Global")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Switch to Sandbox environment"),Object(r.b)("td",{parentName:"tr",align:null},"m + x"),Object(r.b)("td",{parentName:"tr",align:null},"Global")))),Object(r.b)("h2",{id:"2-bot-building"},"2. Bot Building"),Object(r.b)("p",null,"Let us get started..."),Object(r.b)("p",null,"On the ",Object(r.b)("strong",{parentName:"p"},"Overview")," page, click ",Object(r.b)("strong",{parentName:"p"},"Studio"),".\nYou will be directed to the ",Object(r.b)("strong",{parentName:"p"},"Studio")," page where you can play around with our cool features!"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/R3t2nXx.png",alt:null})),Object(r.b)("hr",null),Object(r.b)("p",null,"Follow the steps below to create your own bot: "),Object(r.b)("h3",{id:"21-configure-the-welcome-message"},"2.1. Configure the welcome message"),Object(r.b)("p",null,"The message displayed to the users when the bot is opened is termed as the welcome message.\nIt can be as simple as \u201cHey! How can I help you today\u201d or \u201cWelcome to the Phone company. I am Lana and I will be assisting you with your concerns. Please type in your name to get started.\u201d"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"It is important to keep the\xa0",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview#1-design-your-conversations"},"conversational design"))," \xa0aspect in mind right from the opening message as you build the flow. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"This message can be configured by clicking the ",Object(r.b)("strong",{parentName:"p"},"Welcome Message")," button. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Click here to Add New Response")," button or edit the existing response displayed by default. Here, new text/ button can be added and the flow can be triggered."))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/hceA8s2.png",alt:null})),Object(r.b)("h3",{id:"22-set-up-a-flowjourney"},"2.2. Set up a Flow/Journey"),Object(r.b)("p",null,"The words Flows and Journeys are used interchangeably throughout this documentation, it stands for the actual customer journey/ path we\u2019d like our end users to go through. "),Object(r.b)("p",null,"A more elaborate description can be found\xa0",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys"},"here")),".."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To create a flow, click the dropdown\xa0",Object(r.b)("strong",{parentName:"li"},"FLOWS"),"\xa0in the middle of the screen and select\xa0",Object(r.b)("strong",{parentName:"li"},"+ CREATE FLOW"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/bjIlt6H.png",alt:null})),Object(r.b)("h3",{id:"23-add-nodes"},"2.3 Add Nodes"),Object(r.b)("p",null,"Once that the flow is created, you will be directed to a canvas from where the nodes can be added. Each node is a point of a flow. "),Object(r.b)("p",null,"In the below flow, the rectangular boxes (Start, New Step, SAP Success Factors, etc.) are the nodes."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/HzjArCC.jpg",alt:null})),Object(r.b)("p",null,"Nodes can be added using two different methods, listed below: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"By clicking on the black dot in the center of any node, a popup window will be displayed with the available nodes. Select the type of node you require for your flow. ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/9Nc8ztc.png",alt:null})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"By clicking on any 4 of the icons on the left which represent each category of nodes. From these popups, you can drag and drop the nodes to your canvas. ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/uGOUyyI.png",alt:null})),Object(r.b)("p",null,"For example, from ",Object(r.b)("strong",{parentName:"p"},"Prompts"),", if you select ",Object(r.b)("strong",{parentName:"p"},"Name"),"- your bot will ask the user for their Name after getting started. Similarly, from ",Object(r.b)("strong",{parentName:"p"},"Actions"),", if you select ",Object(r.b)("strong",{parentName:"p"},"Send OTP"),", generated OTP will be sent to the email ID or the Phone Number. You can find more information on the nodes ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes"},"here")),"."),Object(r.b)("p",null,"Flow of the below use-case consists of Quick-Repy, Email, DB and Text nodes."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/sjFlMBv.png",alt:null})),Object(r.b)("h3",{id:"24-create-and-store-values-in-variables"},"2.4 Create and Store Values in Variables"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Variables")," are used when you want to save the user response to any of the questions asked during the flow. "),Object(r.b)("p",null,"There are different types of variables, some are pre-made for every bot and others are customizable.\nCustom variables can be added by you based on your needs. All the information you need on variables can be found ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"here")),"."),Object(r.b)("p",null,"Attached below is an example of custom variable that is used to store the user's query."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open the ",Object(r.b)("strong",{parentName:"li"},"Variables")," prompt by clicking the Variables icon on the left.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/GqeQ2oL.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"+Add Variable"),". ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/n7wpkek.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("strong",{parentName:"li"},"Variable")," and continue creating with the respective data type. Once the ",Object(r.b)("strong",{parentName:"li"},"Variable")," has been created, you can access it anywhere on the bot builder. ")),Object(r.b)("h3",{id:"25-handle-user-response"},"2.5. Handle User Response"),Object(r.b)("p",null,"Often times, instead of going with the flow that is expected, users type in queries that don't really resonate with the rest of the flow.\nIn such cases, we have a robust ",Object(r.b)("strong",{parentName:"p"},"Natural Language Understanding(NLU"),") engine which can be used to train the bot with commonly asked phrases based on which flows can be triggered."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This can be viewed and edited on the ",Object(r.b)("strong",{parentName:"li"},"NLU page"),". Click ",Object(r.b)("strong",{parentName:"li"},"+ Add New Intent")," to train the bot to respond accordingly. ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/y8g93H7.jpg",alt:null})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: You must always have a minimum of 2 trained intents.")),Object(r.b)("p",null,"Our documentation does a deep dive on ",Object(r.b)("strong",{parentName:"p"},"how to setup intents, utterances and entities")," along with best practices. You can find them ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents"},"here")),"."),Object(r.b)("p",null,"Attached below is an intent to identify and initilise a flow when a user wants ",Object(r.b)("strong",{parentName:"p"},"to place an order"),"."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/5HMaYEi.png",alt:null})),Object(r.b)("h3",{id:"26-trigger-a-flow"},"2.6. Trigger a Flow"),Object(r.b)("p",null,"It is considered as a good practice to build smaller flows and direct the users from one flow to another. For this, you will have to trigger the flow. "),Object(r.b)("p",null,"There are two methods to trigger a flow: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Using the ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#execute-flow"},"Execute Flow node"),". For example, in the below flowchart, PlaceOrder flow has been triggered.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/se58HZm.png",alt:null})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Another way to trigger a flow is based on the intent.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/84CPWK4.png",alt:null})),Object(r.b)("h3",{id:"27-store-records-in-a-database"},"2.7. Store Records in a Database"),Object(r.b)("p",null,"All the details and interactions with the bot can be stored in the database that can be designed to fetch the required details. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Start by creating ",Object(r.b)("strong",{parentName:"li"},"Tables")," on the ",Object(r.b)("strong",{parentName:"li"},"Database")," page. Learn more ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/studio/database"},"here")),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ZEXZO5P.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On the Database Node, add the fields you want to track by clicking on ",Object(r.b)("strong",{parentName:"p"},"+Add button."),"\n",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/RfSElwI.png",alt:null}))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Make use of the ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic/#database"},"Database Node")," to perform all the operations you intend to carry out like Insert, Update, Search and Count."))),Object(r.b)("p",null,"Attached below is the screenshot of the data collected by the bot for the fields assigned to it. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/n7L3hig.jpg",alt:null})),Object(r.b)("h2",{id:"3-add-ons"},"3. Add Ons"),Object(r.b)("h3",{id:"31-integrations"},"3.1 Integrations"),Object(r.b)("p",null,"For certain use-cases, there might be dependencies on modules which are not a core part of our platform. Such dependencies can be enabled with the help of out-of-the-box integrations."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/RgGBzsQ.jpg",alt:null})),Object(r.b)("p",null,"In this example, we'll be using a ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/appConfiguration/google-sheets"},"Google Sheets integration")," to push all the data into a Google Sheet using the out of the box support."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/n20AItW.jpg",alt:null})),Object(r.b)("p",null,"You can search for the integration you are looking for  at docs.yellow.ai."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ZooBWqK.png",alt:null})),Object(r.b)("h3",{id:"32-marketplace"},"3.2 Marketplace"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Marketplace")," has pre designed templates of the most commonly used bots.\nFor most use-cases and integrations, templates of user-journeys are available on this page. They can be further modified based on your needs. "),Object(r.b)("p",null,"Explore ",Object(r.b)("strong",{parentName:"p"},"Marketplace")," by clicking on the Marketplace icon on the top-right corner of the ",Object(r.b)("strong",{parentName:"p"},"Overview")," page. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/uQjekjD.png",alt:null})),Object(r.b)("hr",null),Object(r.b)("h4",{id:"live-customer-support-agents"},"Live Customer Support Agents"),Object(r.b)("p",null,"By using the ",Object(r.b)("strong",{parentName:"p"},"Chat with Agent template")," you can direct your users to your agents."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/MdTCVFM.jpg",alt:null})),Object(r.b)("p",null,"For example, when the ",Object(r.b)("strong",{parentName:"p"},"Chat With an Agent")," template is selected, the bot is pre-populated with all the necessary intents and flows needed for you to plug and play with. You can see this flow on the ",Object(r.b)("strong",{parentName:"p"},"Studio")," page. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/5udk4We.png",alt:null})),Object(r.b)("p",null,"Interactions here can be monitored on the ",Object(r.b)("strong",{parentName:"p"},"Inbox")," module. Learn more about Agents and Inbox module ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox"},"here")),"."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"33-channels"},"3.3 Channels"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Channels")," module enables you to engage your customer on external channels like Emails or SMS.\nOur bots can be setup across 20+ channels to give you the exact same experience of a web based chatbot \u2014 whether it's on Whatsapp, SMS, Instagram, or Slack."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/2r0259F.jpg",alt:null})),Object(r.b)("p",null,"A detailed description on how to configure your channel can be found ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound"},"here")),"."),Object(r.b)("h4",{id:"whatsapp-as-a-channel"},"Whatsapp as a Channel"),Object(r.b)("p",null,"We have an elaborate guide on the best practices to be followed while setting up the ",Object(r.b)("strong",{parentName:"p"},"Whatsapp channel"),". To learn more, click ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/cookbooks/whatsapp-channel/whatsapp-channel"},"here")),"."),Object(r.b)("h2",{id:"4-bot-troubleshooting"},"4. Bot Troubleshooting"),Object(r.b)("p",null,"Configured bots might not work as expected due a few errors like code based error, flow based error, data type based errors, etc.\nThese can be resolved by understanding and debugging the error. To learn more, click ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/debug-flow"},"here")),"."),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"What's Next?")),Object(r.b)("p",null,"Jump into Studio and automate your conversations like never before.\nHappy Bot building!!"))}p.isMDXComponent=!0},406:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return a?o.a.createElement(m,b(b({ref:t},i),{},{components:a})):o.a.createElement(m,b({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var i=2;i<r;i++)l[i]=a[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);