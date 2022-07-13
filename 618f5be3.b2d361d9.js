(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(393)),l=["components"],i={title:"Nodes Overview",sidebar_label:"Overview"},s={unversionedId:"platform_concepts/studio/steps/steps",id:"platform_concepts/studio/steps/steps",isDocsHomePage:!1,title:"Nodes Overview",description:"Nodes are the building blocks of a Flow/Journeys.",source:"@site/docs/platform_concepts/studio/steps/steps.md",slug:"/platform_concepts/studio/steps/steps",permalink:"/docs/platform_concepts/studio/steps/steps",version:"current",sidebar_label:"Overview",sidebar:"platform_concepts",previous:{title:"Getting Started With Flows/ Journey",permalink:"/docs/platform_concepts/studio/journeys"},next:{title:"Message Nodes",permalink:"/docs/platform_concepts/studio/steps/message-nodes"}},c=[{value:"1. Types",id:"1-types",children:[]},{value:"2. Add Nodes",id:"2-add-nodes",children:[{value:"Build a Flow",id:"build-a-flow",children:[]}]},{value:"3. Configure Display",id:"3-configure-display",children:[{value:"General- Web",id:"general--web",children:[]},{value:"Voice",id:"voice",children:[]},{value:"Google Assistant",id:"google-assistant",children:[]},{value:"Alexa",id:"alexa",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,l);return Object(r.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Nodes are the building blocks of a ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/journeys"},"Flow/Journeys"),".  "),Object(r.b)("h2",{id:"1-types"},"1. Types"),Object(r.b)("p",null,"Nodes are classified into the following types: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Prompts"),": Prompts can be used when the bot expects a user response to the posed question. Click here to learn more. ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Messages"),": Messages can be used when the bot has to display information to the user without expecting any response. Click here to learn more. ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Action"),": Actions are non-interactive nodes that can be used to perform a specific task. Click here to learn more. ")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Logic"),": Logic nodes can be used when the flow must be branched based on the given conditions. Click here to learn more. "))),Object(r.b)("p",null,"After clicking +Create flow, you will be directed to a canvas with a start node from where you will have the flexibility to design a flow."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/uKrEbNH.jpg",alt:null})),Object(r.b)("h2",{id:"2-add-nodes"},"2. Add Nodes"),Object(r.b)("p",null,"Nodes can be added to this start node in two different ways:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Click on the black dot in the center of a node.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/04ar7yF.jpg",alt:null})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Click on any 4 of the icons on the left which represent each category of nodes.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/vFdHzKo.png",alt:null})),Object(r.b)("h3",{id:"build-a-flow"},"Build a Flow"),Object(r.b)("p",null,"A flow is usually built using a series of smaller nodes. Each flow must have a minimum of two nodes configured."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Start Trigger"),": First node must always be a trigger (click ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/journeys"},"here")," to learn more). You can configure how to trigger this flow. That is, by means of Intents, Entities, URL Events, or other flows.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add any of the following nodes one by one to continue this flow with a logic. "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Prompts"),": These nodes expect user inputs- when the input is invalid, fallback messages are displayed. They are interactive/conversational nodes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Messages"),": Use these nodes to display messages, files, images etc. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actions"),": Background action like Database Insert, Search, or executing an API are performed with these nodes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Logic"),": Conditional branching nodes."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Connect all the nodes to complete the flow. Test it on the bot. "))),Object(r.b)("h2",{id:"3-configure-display"},"3. Configure Display"),Object(r.b)("p",null,"This option is available for all the nodes that display some information on the bot. For example name node, text node, video node etc. It is used to configure how the information must be produced on different platforms like Website, Alexa, Google Assistant, Voice etc."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click the tools(channel option) symbol available below the node name.  ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/EFZSXmG.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Multiple channel options are available for each type of node. ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/X5unpvO.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Few commonly used configurations are listed below.  ")),Object(r.b)("h3",{id:"general--web"},"General- Web"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Hide Input")," - User input wont be displayed on the bot."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Hide Home Button")," - When this node is executed, user will not be able to click on the home button to restart the flow. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Sensitive information")," - Can be used to hide passwords and other personal information from being displayed. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Button Auto Width")," - For Quick replies and multi select, buttons can be configured."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Enable Multiple Files")," - This is used for file-related nodes, which gives the user permission to add more than one file at once.")),Object(r.b)("p",null,"Enable these options to improve the video viewing experience. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Thumbnail")," - This is the image that will be displayed when the video is not being played. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Autoplay")," - Video will play automatically."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Show controls")," - Controls such as Play/Pause, Forward etc will be displayed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Downloadable")," - Displayed video can be downloaded to the local system."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Muted")," - Mute the audio until user unmutes it. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Loop")," - To play the video again once it stops.")),Object(r.b)("h3",{id:"voice"},"Voice"),Object(r.b)("p",null,"This is configured for voice bots. Basically, you can modify voice related features like the speed, delay, forward chat to etc. "),Object(r.b)("h3",{id:"google-assistant"},"Google Assistant"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"End Session")," - Bot session on google assistant comes to an end when this node is reached.")),Object(r.b)("h3",{id:"alexa"},"Alexa"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"End Session")," - Bot session on alexa comes to an end when this node is reached.")),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"What Next?")),Object(r.b)("p",null,"Learn more about the types of nodes in the further sections."))}p.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?a.a.createElement(m,i(i({ref:t},c),{},{components:n})):a.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);