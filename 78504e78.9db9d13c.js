(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{252:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),o=(a(0),a(461)),c=["components"],i={title:"Event-triggered Workflow campaign",sidebar_label:"Event-triggered Workflow campaign"},p={unversionedId:"platform_concepts/engagement/event-triggered-campaign",id:"platform_concepts/engagement/event-triggered-campaign",isDocsHomePage:!1,title:"Event-triggered Workflow campaign",description:"1. Introduction",source:"@site/docs/platform_concepts/engagement/event-triggered-campaign.md",slug:"/platform_concepts/engagement/event-triggered-campaign",permalink:"/docs/platform_concepts/engagement/event-triggered-campaign",version:"current",sidebar_label:"Event-triggered Workflow campaign",sidebar:"platform_concepts",previous:{title:"Time-based Workflow campaign",permalink:"/docs/platform_concepts/engagement/workflowCampaign"},next:{title:"Workflow campaign report",permalink:"/docs/platform_concepts/engagement/workflow-report"}},b=[{value:"1. Introduction",id:"1-introduction",children:[]},{value:"2. Create an Event-Triggered workflow campaign",id:"2-create-an-event-triggered-workflow-campaign",children:[{value:"Step 1: Create Workflow",id:"step-1-create-workflow",children:[]},{value:"Step 2: <strong>Add an event</strong>:",id:"step-2-add-an-event",children:[]},{value:"Step 3: Schedule an event-triggered workflow",id:"step-3-schedule-an-event-triggered-workflow",children:[]}]}],l={toc:b};function s(e){var t=e.components,a=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(o.b)("p",null,"Event-Triggered workflows enable you to trigger personalized campaigns based on user actions.  These workflow campaigns enable reaching out to your users on multiple channels at the right time, in the right context."),Object(o.b)("h4",{id:"use-cases"},"Use cases"),Object(o.b)("p",null,"The following are some examples of where you can use Event-Triggered workflows: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Reducing cart abandonment")," - Send reminders to complete the purchase to users who have added items to their cart and didn't proceed with the purchase."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Welcome mail to new users")," - Welcome your new users after they have successfully signed up."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Driving up LTV")," - Engaging loyal customers at critical moments to drive sales.")),Object(o.b)("h2",{id:"2-create-an-event-triggered-workflow-campaign"},"2. Create an Event-Triggered workflow campaign"),Object(o.b)("h3",{id:"step-1-create-workflow"},"Step 1: Create Workflow"),Object(o.b)("p",null,"Workflow campaign is like a flow which you can trigger from the Engage Module. "),Object(o.b)("p",null,"To create a Workflow campaign, follow these steps - "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a new flow to use in your Workflow campaign."),Object(o.b)("p",{parentName:"li"},"From ",Object(o.b)("strong",{parentName:"p"},"Studio")," >  ",Object(o.b)("strong",{parentName:"p"},"Create flow"),". ","[OR]","\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/owb39Q6.png",alt:null})),Object(o.b)("p",{parentName:"li"},"From ",Object(o.b)("strong",{parentName:"p"},"Studio")," > ",Object(o.b)("strong",{parentName:"p"},"Flows")," > ",Object(o.b)("strong",{parentName:"p"},"Create flow"),"."),Object(o.b)("p",{parentName:"li"}," ",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/KtDjtdm.png",alt:null})))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To the Start node add a new ",Object(o.b)("strong",{parentName:"p"},"Action")," node, ",Object(o.b)("strong",{parentName:"p"},"Outbound notification"),". There is no need to configure the start node for workflows."),Object(o.b)("p",{parentName:"li"},".   ",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/clEtIEw.png",alt:null})))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Eo7aEiZ.png",alt:null})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Map ",Object(o.b)("strong",{parentName:"li"},"To")," to a CDP attribute of the notification type (for example, phone for WhatsApp, email for Email)."),Object(o.b)("li",{parentName:"ol"},"Use various ",Object(o.b)("em",{parentName:"li"},"Action")," nodes in between flows to fetch notification status; use the Delay node to add timeout.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/gL830m9.png",alt:null})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Map Template params properly with CDP Attribute or Bot variable so that the Template can be sent to the user.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"There should be at least 1-2 minutes delay between an Outbound Node and Notification Status Node."),Object(o.b)("li",{parentName:"ul"},"It is recommended to have at least 2-3 channels configured in a bot for  Workflow Campaigns to have better fallbacks."),Object(o.b)("li",{parentName:"ul"},"Currently, not all the Action Nodes are supported in a Workflow. Basic functionalities such as Outbound Nodes, Delay Nodes, and DB Updates are compatible with Workflow Campaign.")))),Object(o.b)("h3",{id:"step-2-add-an-event"},"Step 2: ",Object(o.b)("strong",{parentName:"h3"},"Add an event"),":"),Object(o.b)("p",null,"To create a custom user event, follow these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In Studio, go to the ",Object(o.b)("strong",{parentName:"li"},"Event")," tab and click ",Object(o.b)("strong",{parentName:"li"},"Custom events")," > ",Object(o.b)("strong",{parentName:"li"},"+Add event"),"."),Object(o.b)("li",{parentName:"ol"},"In ",Object(o.b)("strong",{parentName:"li"},"Event name"),", name the event."),Object(o.b)("li",{parentName:"ol"},"In ",Object(o.b)("strong",{parentName:"li"},"Event description"),", enter a brief description about the event.")),Object(o.b)("center",null,Object(o.b)("img",{src:"https://i.imgur.com/GhMQpyZ.png",width:"400"})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Create event"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Push the custom event data of a user using the ",Object(o.b)("a",{parentName:"p",href:"(https://documenter.getpostman.com/view/17583548/UVsEVUsg#00eb59cf-7f00-461e-8d53-94eafb056a9a)"},"Push user event")," API. It needs the ",Object(o.b)("inlineCode",{parentName:"p"},"userId")," of the registered user. Events help you track user actions or trigger a Journey or Campaign for that user."),Object(o.b)("p",{parentName:"li"},"If the ",Object(o.b)("inlineCode",{parentName:"p"},"userId")," does not exist on ",Object(o.b)("a",{parentName:"p",href:"http://yellow.ai/"},"yellow.ai"),"'s User360 module, you need to call the ",Object(o.b)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/17583548/UVsEVUsg#e7271fa6-4122-4e0b-a535-fe0354462c35"},"User create API")," and then ",Object(o.b)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/17583548/UVsEVUsg#00eb59cf-7f00-461e-8d53-94eafb056a9a"},"push the event"),") data."),Object(o.b)("p",{parentName:"li"},"You can use a phone number or email address as a UserID and needs to be unique. For more details, see ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties/#1-user-id"},"userId"),"."))),Object(o.b)("h3",{id:"step-3-schedule-an-event-triggered-workflow"},"Step 3: Schedule an event-triggered workflow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once the flow configuration is completed, go to the ",Object(o.b)("strong",{parentName:"p"},"Engage")," module > ",Object(o.b)("strong",{parentName:"p"},"Journeys"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/fBLgv79om61Wkayxka4j4CN2DkH7RzhJqGLMgedFeUXayq6vGVewyUg8TvzoEJobPXBAc6huFJLc96a9p4n3NUizovumCGyAyBZNY3eGCaseAZ4KA1yvaQe356BHiNUKGQu2UJxEJSoLmiFg9aF4KnPCvn8AUcv1DCWApE8CpVKk3sgv8VmLhrY6WMEcB9B9wnHobhyxsXs3NXccjFwXWSw9woF4T8wcHG6gdmCj8U27niPYymAZKNDTTjS3uCnLD5qXyYbpHSEw7cJXXGvtWRTtC3ybgwup3BEj8NVU3EejhEC9Ko/Screenshot%202022-11-07%20at%2011.32.36%20PM.jpg",alt:null}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Create campaign"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter a Journey trigger name.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select a flow with the Outbound node that you want to associate with the campaign from the list of workflow journeys.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Next"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/fBLgv79om61Wkayxka4j4CN2DkH7RzhJqGLMgedFeUXayq6vGVewyUg8TvzoEJobPXBAc6huFJLc96a9p4n3NUizovumCGyAyBZNY3eGCaseAguydXRaQ38ggwZxWxHN8r7gFoF1pAbUWeDqa5pbGnUtdTrxeB3xv1s7QDGWCwZci7nAgjZAz79zrNU88ZoGpfNyYqW7UDPRVRZmdtfrqbT6oZCB8khJg1MsimiBExn2rMaFqvbaXGNvRQD2wYv9mbrkyQsmZZGY9UKaLLcbpkN71FEabfRAzRDaywMeM1csyY6wk7/Screenshot%202022-11-07%20at%2011.36.08%20PM.jpg",alt:null}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select your preferred target audience (segment). Make sure to add your users' CDP records to use for any type of campaign. Know more about ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview"},"User 360"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/fBLgv79om61Wkayxka4j4CN2DkH7RzhJqGLMgedFeUXayq6vGVewyUg8TvzoEJobPXBAc6huFJLc96a9p4n3NUizovumCGyAyBZNY3eGCaseAexxwNhm3cUPwjfz4eyDUF7C8ZbJzT6rbhW2jEE6AuduW7JNvdvJGRo31JiZbRjD3WMU39MzNcLTtqD6Zk2FPKY1j1Z7ueRtxQz6iLG7vPMmPExgDKYdBeQLWfiUMEHhVbWbVFb2VvrcrcSvJiPY9WiQ6eMvn9HwU612LekGELZ41FatuNDWEHoZvU48h8FY9RPCgg/Image.jpg",alt:null}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the ",Object(o.b)("strong",{parentName:"p"},"Schedule")," screen, select ",Object(o.b)("em",{parentName:"p"},"User event-based"),". "),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/fBLgv79om61Wkayxka4j4CN2DkH7RzhJqGLMgedFeUXayq6vGVewyUg8TvzoEJobPXBAc6huFJLc96a9p4n3NUizovumCGyAyBZNY3eGCaseAexxwNhm3cUPwjfz4eyDUF7C8ZbJzT6rbhW2jEE6AuduWCwCguonwTZ6skY2vMfRiLfjZtuFdzRJdsiAxytmc8A4gb8NZoVygcyMgUrP2mS3aFZfVE54TTh85mDT7isa3dnhcuL8RedxtHugsSnq5hampcAKUGiRZM4S8hd4JKaDm4Ro3hXysCfWQjQ8CZmJ91t7WC/Image.jpg",alt:null})))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Option"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Campaign triggers when user"),Object(o.b)("td",{parentName:"tr",align:null},"Choose the event for which the campaign should trigger.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"After the event, the campaign triggers"),Object(o.b)("td",{parentName:"tr",align:null},"Choose when to trigger the event. ",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"Immediately"),": To trigger the event as soon as the event occurs.",Object(o.b)("br",null),Object(o.b)("strong",{parentName:"td"},"At a specific time"),": To trigger the event at your preferred time after the event occurred. ",Object(o.b)("br",null)," ",Object(o.b)("strong",{parentName:"td"},"After a delay"),": To trigger the campaign for the user after specific hours, minutes, or seconds from the event occurred time.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Run this campaign"),Object(o.b)("td",{parentName:"tr",align:null},"Choose ",Object(o.b)("em",{parentName:"td"},"Once per user")," to trigger the campaign only once per user, and choose ",Object(o.b)("em",{parentName:"td"},"Every time the event is fired")," to trigger any number of times whenever the event occurs for the user.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Exclude if conversion has happened"),Object(o.b)("td",{parentName:"tr",align:null},"Enable this to stop triggering the campaign when the conversation has happened, and choose the ",Object(o.b)("strong",{parentName:"td"},"Conversation event"),". For example, for a Cart abandonment event, a transaction could be a Conversation event.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Start this campaign"),Object(o.b)("td",{parentName:"tr",align:null},"Choose when to start the campaign - ",Object(o.b)("em",{parentName:"td"},"Now")," or at a ",Object(o.b)("em",{parentName:"td"},"Later")," date and time.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"End this campaign"),Object(o.b)("td",{parentName:"tr",align:null},"Choose when to end the campaign. Choose a future date and time.")))))}s.isMDXComponent=!0},461:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(a),g=n,u=s["".concat(c,".").concat(g)]||s[g]||m[g]||o;return a?r.a.createElement(u,i(i({ref:t},b),{},{components:a})):r.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);