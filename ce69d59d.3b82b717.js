(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{340:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),l=(n(0),n(406)),r=["components"],i={title:"Nodes Overview",sidebar_label:"Overview"},s={unversionedId:"platform_concepts/studio/build/nodes/nodes",id:"platform_concepts/studio/build/nodes/nodes",isDocsHomePage:!1,title:"Nodes Overview",description:"Nodes are the building blocks of a Flow/Journeys.",source:"@site/docs/platform_concepts/studio/build/nodes/nodes.md",slug:"/platform_concepts/studio/build/nodes/nodes",permalink:"/docs/platform_concepts/studio/build/nodes/nodes",version:"current",sidebar_label:"Overview",sidebar:"platform_concepts",previous:{title:"Getting Started With Flows",permalink:"/docs/platform_concepts/studio/build/journeys"},next:{title:"Prompt Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/prompt-nodes"}},c=[{value:'<a name="types"></a> 1. Types',id:"1-types",children:[]},{value:'<a name="addnode"></a> 2. Add Nodes',id:"2-add-nodes",children:[{value:"2.1 Build a Flow",id:"21-build-a-flow",children:[]}]},{value:'<a name="config"></a> 3. Configure Display',id:"3-configure-display",children:[{value:"3.1 General- Web",id:"31-general--web",children:[]},{value:"3.2 Voice",id:"32-voice",children:[]},{value:"3.3 Google Assistant",id:"33-google-assistant",children:[]},{value:"3.4 Alexa",id:"34-alexa",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,r);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Nodes are the building blocks of a ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys"},"Flow/Journeys"),".  "),Object(l.b)("p",null,"In this article, you will learn:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#types"},"Types of nodes")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#addnode"},"How to add nodes")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#config"},"What are the configurations available for nodes"))),Object(l.b)("h2",{id:"1-types"},Object(l.b)("a",{name:"types"})," 1. Types"),Object(l.b)("p",null,"Nodes are classified into the following types: "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Nodes"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"Prompts")),Object(l.b)("td",{parentName:"tr",align:null},"Prompts can be used when the bot expects a user to respond to the posed question. Click ",Object(l.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"here")," to learn more.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"Messages")),Object(l.b)("td",{parentName:"tr",align:null},"Messages can be used when the bot has to display information to the user without expecting any response. Click ",Object(l.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes"},"here")," to learn more.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"Action")),Object(l.b)("td",{parentName:"tr",align:null},"Actions are non-interactive nodes that can be used to perform a specific task. Click ",Object(l.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes"},"here")," to learn more.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("strong",{parentName:"td"},"Logic")),Object(l.b)("td",{parentName:"tr",align:null},"Logic nodes can be used when the flow must be branched based on the given conditions. Click ",Object(l.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes"},"here")," to learn more.")))),Object(l.b)("p",null,"After clicking ",Object(l.b)("strong",{parentName:"p"},"+Create flow"),", you will be directed to a canvas with a ",Object(l.b)("strong",{parentName:"p"},"start node")," from where you will have the flexibility to design a ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys"},"flow"),"."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/mfLbfy1.jpg",alt:null})),Object(l.b)("h2",{id:"2-add-nodes"},Object(l.b)("a",{name:"addnode"})," 2. Add Nodes"),Object(l.b)("p",null,"Nodes can be added in two different ways:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Click the black dot in the centre of a node.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/UjHsxhK.jpg",alt:null})),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Click any 4 of the icons on the left which represent each category of nodes. Drag and drop the nodes.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/lTiO07q.png",alt:null})),Object(l.b)("h3",{id:"21-build-a-flow"},"2.1 Build a Flow"),Object(l.b)("p",null,"A flow is built using a series of smaller nodes. Each flow must have a minimum of two nodes configured."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Start Trigger"),": The first node must always be a trigger (click ",Object(l.b)("a",{parentName:"p",href:"http://localhost:3000/docs/platform_concepts/studio/build/journeys#4-configure-start-trigger"},"here")," to learn more). You can configure how to trigger this flow. That is, by means of Intents, Entities, URL Events, or other flows.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Add any of the following nodes one by one to continue this flow with logic. "),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Prompts"),": These nodes expect user inputs- when the input is invalid, fallback messages are displayed. They are interactive/conversational nodes."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Messages"),": Use these nodes to display messages, files, images etc. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Actions"),": Background actions like Database Insert, Search, or executing an API are performed with these nodes."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Logic"),": Conditional branching nodes."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Connect all the nodes to complete the flow. Test it on the bot. "))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/kjnaZr1.jpg",alt:null})),Object(l.b)("h2",{id:"3-configure-display"},Object(l.b)("a",{name:"config"})," 3. Configure Display"),Object(l.b)("p",null,"This option is available for all the nodes that display some information on the bot. For example message and prompt nodes like name node, text node, video node etc. It is used to configure how the information must be produced on different platforms like Website, Alexa, Google Assistant, Voice etc."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Click the tools(channel option) symbol available below the node name.  ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/5Xv1ndp.png",alt:null})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Multiple channel options are available for each type of node. ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/78ie4Gm.png",alt:null})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Few commonly used configurations are listed below.  ")),Object(l.b)("h3",{id:"31-general--web"},"3.1 General- Web"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Hide Input")," - When enabled, user input won't be displayed on the bot."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Hide Home Button")," - When enabled and this node is executed in the flow, the user will not be able to click on the home button to restart the flow. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Sensitive information")," - Can be enabled to hide passwords and other personal information from being displayed. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Button Auto Width")," - For Quick replies and multi select, buttons can be configured."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Enable Multiple Files")," - This is used for file-related nodes, which gives the user permission to add more than one file at once.")),Object(l.b)("p",null,"Enable these options to improve the video viewing experience. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Thumbnail")," - This is the image that will be displayed when the video is not being played. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Autoplay")," - Video will play automatically."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Show controls")," - Controls such as Play/Pause, Forward etc will be displayed."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Downloadable")," - Displayed video can be downloaded to the local system."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Muted")," - Mute the audio until the user unmutes it. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Loop")," - To play the video again once it stops.")),Object(l.b)("h3",{id:"32-voice"},"3.2 Voice"),Object(l.b)("p",null,"This is configured for voice bots. You can modify voice related features like speed, delay, forward chat to etc. "),Object(l.b)("p",null,"Coming soon!"),Object(l.b)("h3",{id:"33-google-assistant"},"3.3 Google Assistant"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"End Session")," - Bot session on google assistant comes to an end when this node is reached.")),Object(l.b)("h3",{id:"34-alexa"},"3.4 Alexa"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"End Session")," - Bot session on Alexa comes to an end when this node is reached.")),Object(l.b)("hr",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"What Next?")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Build a ",Object(l.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys"},"flow")," and ",Object(l.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools"},"test")," it. "),Object(l.b)("li",{parentName:"ul"},"Explore more about the types of nodes in the further sections.")))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||l;return n?o.a.createElement(m,i(i({ref:t},c),{},{components:n})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);