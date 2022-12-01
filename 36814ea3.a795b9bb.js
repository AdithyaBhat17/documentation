(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(457)),i=["components"],l={title:"Configure start trigger",sidebar_label:"Configure flow triggers"},c={unversionedId:"platform_concepts/studio/build/understandingflows/configureflow",id:"platform_concepts/studio/build/understandingflows/configureflow",isDocsHomePage:!1,title:"Configure start trigger",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/studio/build/understandingflows/configureflow.md",slug:"/platform_concepts/studio/build/understandingflows/configureflow",permalink:"/docs/platform_concepts/studio/build/understandingflows/configureflow",version:"current",sidebar_label:"Configure flow triggers",sidebar:"platform_concepts",previous:{title:"Flows",permalink:"/docs/platform_concepts/studio/build/understandingflows/journeys"},next:{title:"Export flow from one bot to another",permalink:"/docs/platform_concepts/studio/build/understandingflows/exportflow"}},s=[{value:'<a name="starttrigger"></a> 1. Configure start trigger',id:"1-configure-start-trigger",children:[]},{value:'<a name="triggerflow"></a> 2. Trigger the flow',id:"2-trigger-the-flow",children:[{value:"5.1 Trigger via. URL",id:"51-trigger-via-url",children:[]},{value:"5.2 Trigger via. code",id:"52-trigger-via-code",children:[]}]}],b={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this article, you will learn: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#1-configure-start-trigger"},"How to configure a start trigger")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#2-trigger-the-flow"},"How to trigger a flow?"))),Object(r.b)("h2",{id:"1-configure-start-trigger"},Object(r.b)("a",{name:"starttrigger"})," 1. Configure start trigger"),Object(r.b)("p",null,"To configure a start trigger, follow the steps below:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open the bot ",Object(r.b)("strong",{parentName:"li"},"Studio")," page."),Object(r.b)("li",{parentName:"ol"},"Design bot flows > Flows tab. Click the Flows node of the bot. Expand a category and click a flow.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/d1V0J56.png",alt:null})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Click anywhere on the Start node.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/uGpfjTZ.png",alt:null})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"In the Start trigger pop-up, select a type of trigger from the drop-down. In the Select field, select the value of the type of trigger.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/uRV6zAC.png",alt:null})),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"}," Start trigger enables you to configure the initiation of a bot communication flow. When a customer types a query, the bot starts the conversation based on the logic of the trigger."))),Object(r.b)("p",null,"Flow is triggered using one of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Intent"),": Start the flow with an action statement, how to book a test drive, connect to a service centre, find the status of an order, and find the best product on a website. For example, if a customer types How to book a test ride, the bot triggers the configured flow of the ",Object(r.b)("em",{parentName:"li"},"#test ride")," intent. ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents/"},"Click here "),"to learn more about intents.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/24m919A.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Entities"),": Start the flow with the primary object(s) of a query, such as the cheapest flight, customer service number, sedan cars, rooms in a hotel, and best beauty products. For example, if a customer types studio, the bot triggers the configured flow associated with the studio model. ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/entities/#entity-types"},"Click here "),"to learn more about entities.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/Y5dviXE.jpg",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Event"),": Start the flow with an event, such as a bot that pops up when a customer visits the Contact us page or the Home page of the website or app. ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub/"},"Click here "),"to learn more about the configuration of events.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Page Url"),": Start a flow with a page Url. For example, triggering the help centre URL on the contact us page."))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/wt8EyFh.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Execute Flow"),": Apart from the start trigger, users can also set up when to trigger another flow manually from or inside a flow using Execute Flow action node."),Object(r.b)("p",{parentName:"li"}," You can add an action node- ",Object(r.b)("strong",{parentName:"p"},"Execute Flow")," and select the flow you want to execute next."),Object(r.b)("p",{parentName:"li"}," For example, track your application, know your ID and view FAQs are three user responses linked to different flows (which are configured as separate flows). When one of the responses is sent, respective flows are executed."))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/zr7bkqW.jpg",alt:null})),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Add new trigger")," to add additional triggers for the flow. You can train the bot with more than one start trigger to accommodate maximum use cases. Every trigger type has a logic for triggering the start of the communication. At least one logic must meet, when a customer is interacting with the website or application, to trigger the communication flow."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/fF9TrGB.png",alt:null}))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"For example, a start trigger can have two events, three intents, and five entities. If you meet any conditions configured for the types of a trigger, the bot triggers the flow."))))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"2-trigger-the-flow"},Object(r.b)("a",{name:"triggerflow"})," 2. Trigger the flow"),Object(r.b)("p",null,"When you are configuring a bot, there could be several complex flows in the bot. You need to always ensure whether the outcome of a flow is as desired before moving on to the next flow and it\u2019s tedious to run the entire bot every time you make some change in a flow."),Object(r.b)("p",null,"You just need to add a parameter to the URL or widget code to preview changes made in a particular flow of your bot. You no longer have to run through the entire bot flow every time you make some changes to a flow."),Object(r.b)("p",null,"To preview a specific bot flow there are two methods, discussed in the further sections:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Via URL"),Object(r.b)("li",{parentName:"ol"},"Via Code")),Object(r.b)("h3",{id:"51-trigger-via-url"},"5.1 Trigger via. URL"),Object(r.b)("p",null,"To preview a bot via URL, follow the given steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open the bot and navigate to ",Object(r.b)("strong",{parentName:"li"},"Studio")," > ",Object(r.b)("strong",{parentName:"li"},"Flows"),"."),Object(r.b)("li",{parentName:"ol"},"Click the Flows drop-down and select the flow that you want to preview."),Object(r.b)("li",{parentName:"ol"},"Copy the path of the flow that you see in the URL (after ",Object(r.b)("inlineCode",{parentName:"li"},"flow/"),")")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/K9naz4Z.jpg",alt:null})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Click Preview bot. You will see the entire bot flow in a new tab."),Object(r.b)("li",{parentName:"ol"},"In the address bar, append ",Object(r.b)("inlineCode",{parentName:"li"},"?ym.triggerJourney={flow path}"),".")),Object(r.b)("p",null,"Example:\n",Object(r.b)("inlineCode",{parentName:"p"},"https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=docs-feedback")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/CLmlHyp.png",alt:null})),Object(r.b)("p",null,"Ensure that you clear the browser cache before you preview the bot. It is recommended to use Incognito mode or Private window to preview flows."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"Use ",Object(r.b)("inlineCode",{parentName:"li"},"?")," to append right after the base URL of the bot. Example: ",Object(r.b)("a",{parentName:"li",href:"https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=feedback"},"https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=feedback")),Object(r.b)("li",{parentName:"ul"},"Use & if you want to append it after a variable. Example: ",Object(r.b)("a",{parentName:"li",href:"https://cloud.yellow.ai/liveBot/x1635319612954?region=&ym.triggerJourney=feedback"},"https://cloud.yellow.ai/liveBot/x1635319612954?region=&ym.triggerJourney=feedback"))))),Object(r.b)("h3",{id:"52-trigger-via-code"},"5.2 Trigger via. code"),Object(r.b)("p",null,"To preview a bot via code (embedded on your website), follow the steps below:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Get the path of the flow as explained in the previous section."),Object(r.b)("li",{parentName:"ol"},"In ",Object(r.b)("inlineCode",{parentName:"li"},"window.ymConfig"),", pass the parameter ",Object(r.b)("inlineCode",{parentName:"li"},"triggerJourney")," and specify the path of the flow you copied.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'<script type = "text/javascript" >\n    window.ymConfig = {\n        "bot": "x1625119673009",\n        "host": "https://cloud.yellow.ai",\n        triggerJourney: "malaga_vftkqv"\n    };\n(function() {\n    var w = window,\n        ic = w.YellowMessenger;\n    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);\n    else {\n        var d = document,\n            i = function() {\n                i.c(arguments)\n            };\n\n        function l() {\n            var e = d.createElement("script");\n            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";\n            var t = d.getElementsByTagName("script")[0];\n            t.parentNode.insertBefore(e, t)\n        }\n        i.q = [], i.c = function(e) {\n            i.q.push(e)\n        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)\n    }\n})(); \n<\/script>\n')),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Paste the code in the Header or body of your website as per your need to preview the flow.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"What Next?")),Object(r.b)("p",null,"Series of ",Object(r.b)("strong",{parentName:"p"},"nodes")," are used to create a flow. There are multiple nodes available on our platform."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Learn about different ",Object(r.b)("strong",{parentName:"li"},"nodes")," ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes/"},"here")," and create a complete flow."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot"},"Test")," the flow.")))}p.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);