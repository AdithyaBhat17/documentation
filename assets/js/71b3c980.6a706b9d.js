"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[333],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76496:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={title:"Configure start trigger",sidebar_label:"Configure flow triggers"},s=void 0,p={unversionedId:"platform_concepts/studio/build/Flows/configureflow",id:"platform_concepts/studio/build/Flows/configureflow",title:"Configure start trigger",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/studio/build/Flows/configureflow.md",sourceDirName:"platform_concepts/studio/build/Flows",slug:"/platform_concepts/studio/build/Flows/configureflow",permalink:"/docs/platform_concepts/studio/build/Flows/configureflow",draft:!1,tags:[],version:"current",frontMatter:{title:"Configure start trigger",sidebar_label:"Configure flow triggers"},sidebar:"platform_concepts",previous:{title:"Create Flow",permalink:"/docs/platform_concepts/studio/build/Flows/journeys"},next:{title:"Export flow",permalink:"/docs/platform_concepts/studio/build/Flows/exportflow"}},u={},c=[{value:'<a name="starttrigger"></a> 1. Configure start trigger',id:"-1-configure-start-trigger",level:2},{value:'<a name="triggerflow"></a> 2. Trigger the flow',id:"-2-trigger-the-flow",level:2},{value:"5.1 Trigger via. URL",id:"51-trigger-via-url",level:3},{value:"5.2 Trigger via. code",id:"52-trigger-via-code",level:3},{value:"3. Flow settings",id:"3-flow-settings",level:2}],g={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this article, you will learn: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-configure-start-trigger"},"How to configure a start trigger")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-trigger-the-flow"},"How to trigger a flow?"))),(0,a.kt)("h2",{id:"-1-configure-start-trigger"},(0,a.kt)("a",{name:"starttrigger"})," 1. Configure start trigger"),(0,a.kt)("p",null,"To configure a start trigger, follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the bot ",(0,a.kt)("strong",{parentName:"li"},"Studio")," page."),(0,a.kt)("li",{parentName:"ol"},"Design bot flows > Flows tab. Click the Flows node of the bot. Expand a category and click a flow.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/d1V0J56.png",alt:null})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click anywhere on the Start node.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/uGpfjTZ.png",alt:null})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"In the Start trigger pop-up, select a type of trigger from the drop-down. In the Select field, select the value of the type of trigger.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/uRV6zAC.png",alt:null})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," Start trigger enables you to configure the initiation of a bot communication flow. When a customer types a query, the bot starts the conversation based on the logic of the trigger.")),(0,a.kt)("p",null,"Flow is triggered using one of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Intent"),": Start the flow with an action statement, how to book a test drive, connect to a service centre, find the status of an order, and find the best product on a website. For example, if a customer types How to book a test ride, the bot triggers the configured flow of the ",(0,a.kt)("em",{parentName:"li"},"#test ride")," intent. ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents"},"Click here "),"to learn more about intents.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/24m919A.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entities"),": Start the flow with the primary object(s) of a query, such as the cheapest flight, customer service number, sedan cars, rooms in a hotel, and best beauty products. For example, if a customer types studio, the bot triggers the configured flow associated with the studio model. ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/entities#-3-types-of-entities"},"Click here ")," to learn more about entities.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Y5dviXE.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Event"),": Start the flow with an event, such as a bot that pops up when a customer visits the Contact us page or the Home page of the website or app. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub"},"Click here "),"to learn more about the configuration of events.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Page Url"),": Start a flow with a page Url. For example, triggering the help centre URL on the contact us page."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/wt8EyFh.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Execute Flow"),": Apart from the start trigger, users can also set up when to trigger another flow manually from or inside a flow using Execute Flow action node."),(0,a.kt)("p",{parentName:"li"}," You can add an action node- ",(0,a.kt)("strong",{parentName:"p"},"Execute Flow")," and select the flow you want to execute next."),(0,a.kt)("p",{parentName:"li"}," For example, track your application, know your ID and view FAQs are three user responses linked to different flows (which are configured as separate flows). When one of the responses is sent, respective flows are executed."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/zr7bkqW.jpg",alt:null})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add new trigger")," to add additional triggers for the flow. You can train the bot with more than one start trigger to accommodate maximum use cases. Every trigger type has a logic for triggering the start of the communication. At least one logic must meet, when a customer is interacting with the website or application, to trigger the communication flow."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/fF9TrGB.png",alt:null}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For example, a start trigger can have two events, three intents, and five entities. If you meet any conditions configured for the types of a trigger, the bot triggers the flow.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"-2-trigger-the-flow"},(0,a.kt)("a",{name:"triggerflow"})," 2. Trigger the flow"),(0,a.kt)("p",null,"When you are configuring a bot, there could be several complex flows in the bot. You need to always ensure whether the outcome of a flow is as desired before moving on to the next flow and it\u2019s tedious to run the entire bot every time you make some change in a flow."),(0,a.kt)("p",null,"You just need to add a parameter to the URL or widget code to preview changes made in a particular flow of your bot. You no longer have to run through the entire bot flow every time you make some changes to a flow."),(0,a.kt)("p",null,"To preview a specific bot flow there are two methods, discussed in the further sections:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Via URL"),(0,a.kt)("li",{parentName:"ol"},"Via Code")),(0,a.kt)("h3",{id:"51-trigger-via-url"},"5.1 Trigger via. URL"),(0,a.kt)("p",null,"To preview a bot via URL, follow the given steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the bot and navigate to ",(0,a.kt)("strong",{parentName:"li"},"Studio")," > ",(0,a.kt)("strong",{parentName:"li"},"Flows"),"."),(0,a.kt)("li",{parentName:"ol"},"Click the Flows drop-down and select the flow that you want to preview."),(0,a.kt)("li",{parentName:"ol"},"Copy the path of the flow that you see in the URL (after ",(0,a.kt)("inlineCode",{parentName:"li"},"flow/"),")")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/K9naz4Z.jpg",alt:null})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Click Preview bot. You will see the entire bot flow in a new tab."),(0,a.kt)("li",{parentName:"ol"},"In the address bar, append ",(0,a.kt)("inlineCode",{parentName:"li"},"?ym.triggerJourney={flow path}"),".")),(0,a.kt)("p",null,"Example:\n",(0,a.kt)("inlineCode",{parentName:"p"},"https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=docs-feedback")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/CLmlHyp.png",alt:null})),(0,a.kt)("p",null,"Ensure that you clear the browser cache before you preview the bot. It is recommended to use Incognito mode or Private window to preview flows."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"?")," to append right after the base URL of the bot. Example: ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=feedback"},"https://cloud.yellow.ai/liveBot/x1635319612954?ym.triggerJourney=feedback")),(0,a.kt)("li",{parentName:"ul"},"Use & if you want to append it after a variable. Example: ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.yellow.ai/liveBot/x1635319612954?region=&ym.triggerJourney=feedback"},"https://cloud.yellow.ai/liveBot/x1635319612954?region=&ym.triggerJourney=feedback")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Flow slug:")," The flow name is displayed with the underscore and characters appended to the URL in the application header. You can view this when you select the created flows from the ",(0,a.kt)("strong",{parentName:"p"},"Flows")," drop-down. The slug is associated with every flow or journey created in the platform. If you want to trigger a flow or customise at the code level on your website, you can use flow or slug journey. The journey slug is captured by bot and it is used to gain insights.  "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/e8MjGPV.png",alt:null})),(0,a.kt)("h3",{id:"52-trigger-via-code"},"5.2 Trigger via. code"),(0,a.kt)("p",null,"To preview a bot via code (embedded on your website), follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get the path of the flow as explained in the previous section."),(0,a.kt)("li",{parentName:"ol"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"window.ymConfig"),", pass the parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"triggerJourney")," and specify the path of the flow you copied.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<script type = "text/javascript" >\n    window.ymConfig = {\n        "bot": "x1625119673009",\n        "host": "https://cloud.yellow.ai",\n        triggerJourney: "malaga_vftkqv"\n    };\n(function() {\n    var w = window,\n        ic = w.YellowMessenger;\n    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);\n    else {\n        var d = document,\n            i = function() {\n                i.c(arguments)\n            };\n\n        function l() {\n            var e = d.createElement("script");\n            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";\n            var t = d.getElementsByTagName("script")[0];\n            t.parentNode.insertBefore(e, t)\n        }\n        i.q = [], i.c = function(e) {\n            i.q.push(e)\n        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)\n    }\n})(); \n<\/script>\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Paste the code in the Header or body of your website as per your need to preview the flow.")),(0,a.kt)("h2",{id:"3-flow-settings"},"3. Flow settings"),(0,a.kt)("p",null,"To access a flow's settings,"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the gear icon at the bottom."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/toAQbCj.png",alt:null}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the following screen, you can configure the following,"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/M8b8icy.png",alt:null})))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Init function"),(0,a.kt)("td",{parentName:"tr",align:null},"Function that will be executed before going through a flow.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Change category"),(0,a.kt)("td",{parentName:"tr",align:null},"Category of the flow")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mandate words"),(0,a.kt)("td",{parentName:"tr",align:null},"Mandatory words that have to be in the user utterance to trigger this flow.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Precluded words"),(0,a.kt)("td",{parentName:"tr",align:null},"Flow will not be triggered if these words are present in the user utterance.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Disable steps for Go Back functionality"),(0,a.kt)("td",{parentName:"tr",align:null},"If the user response is 'go back' (or related words - configured in tools), this takes them to the previous question. At the flow level, you can disable some steps from which going back should not be allowed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Channels"),(0,a.kt)("td",{parentName:"tr",align:null},"Flow will only be available in the selected channels.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"What Next?")),(0,a.kt)("p",null,"Series of ",(0,a.kt)("strong",{parentName:"p"},"nodes")," are used to create a flow. There are multiple nodes available on our platform."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn about different ",(0,a.kt)("strong",{parentName:"li"},"nodes")," ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes"},"here")," and create a complete flow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot"},"Test")," the flow.")))}m.isMDXComponent=!0}}]);