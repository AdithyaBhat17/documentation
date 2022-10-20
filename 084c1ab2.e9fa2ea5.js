(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{439:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),g=r,m=s["".concat(i,".").concat(g)]||s[g]||u[g]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(439)),i=["components"],c={title:"Types of Web Behavior Triggers",sidebar_label:"Types of Web behavior triggers"},l={unversionedId:"platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",id:"platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",isDocsHomePage:!1,title:"Types of Web Behavior Triggers",description:"In this guide",source:"@site/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType.md",slug:"/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",permalink:"/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",version:"current",sidebar_label:"Types of Web behavior triggers",sidebar:"platform_concepts",previous:{title:"Campaign report",permalink:"/docs/platform_concepts/engagement/inbound/gettingStarted/campaignsOverviewScreen"},next:{title:"Web Behavior Triggers to identify in E-commerce",permalink:"/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm"}},p=[{value:"In this guide",id:"in-this-guide",children:[{value:"Here are the types of triggers you can choose:",id:"here-are-the-types-of-triggers-you-can-choose",children:[]}]},{value:"Creating multiple conditions and condition sets",id:"creating-multiple-conditions-and-condition-sets",children:[]},{value:"Up next",id:"up-next",children:[]}],b={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"in-this-guide"},"In this guide"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"This guide introduces you to the various types of Web Behaviour Triggers and what each of them mean. A Web Behaviour Trigger is used to define ",Object(o.b)("strong",{parentName:"li"},"When")," the campaign will be executed"),Object(o.b)("li",{parentName:"ol"},"This guide also gives a quick walkthrough of how to set up multiple conditions and condition sets, and how they can be used to create ",Object(o.b)("strong",{parentName:"li"},"AND"),", or ",Object(o.b)("strong",{parentName:"li"},"OR")," Conditions")),Object(o.b)("h3",{id:"here-are-the-types-of-triggers-you-can-choose"},"Here are the types of triggers you can choose:"),Object(o.b)("p",null,"You will have various Web Behaviour Triggers to choose from:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"URL"),' \u2013 When the visitor is on the URL defined, display the campaign. There are a few ways to target by URL, some of which are \u201cis/is not\u201d, and "includes / does not include."',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Wildcard (*) \u2192")," ",Object(o.b)("strong",{parentName:"li"},"*(an asterisk)")," is a wildcard symbol that stands for any amount\xa0of letters or characters in your URL.")))),Object(o.b)("p",null,"Test ",Object(o.b)("a",{parentName:"p",href:"http://yellow.ai/search/"},"http://yellow.ai/search/")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  \u2022 URLs like [**http://yellow.ai/search/**](http://yellow.ai/search/) (will work for anything after \n\n  \u2022 URLs like [**http://yellow.ai/*/blog**](http://yellow.ai/*/blog) will also work\n")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/528AEFE5-87E8-49DD-84EE-8F8D545741CC_2/Image.png",alt:"Image.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/17E1E522-2331-45F9-8778-2A2610E59CE3_2/Screen%20Recording%202021-07-12%20at%207.54.55%20PM.gif",alt:"Screen Recording 2021-07-12 at 7.54.55 PM.gif"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Referrer")," \u2013 This is the URL that refers the website to the page they're on now (",Object(o.b)("a",{parentName:"p",href:"http://google.com"},"google.com"),")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Number of Site Visits")," \u2013 The number of times a user has visited your site (",Object(o.b)("em",{parentName:"p"},"sessions"),", not page views).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Device")," \u2013 The options here are mobile, desktop, or tablet")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Seconds on Page")," \u2013 After somebody has been on the page for a certain number of seconds, the campaign will get triggered.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Scroll percentage")," \u2013 After a visitor scrolls X percent of a page, the campaign will get triggered.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"On Exit Intent")," \u2013 This triggers when a user's cursor leaves the window on the top half of the screen, usually indicating they intend to change browser tabs or close this tab/window.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Cookie")," \u2013 display your campaign to users who have or don't have a specific cookie attached to them! You will have to define the cookies using ",Object(o.b)("em",{parentName:"p"},"key=value")," pairs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"CTA")," - here you define an element of the page, which when clicked, will execute the campaign. Use the selector here and define the ",Object(o.b)("em",{parentName:"p"},"key=value")," pair.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Element Hovered Over")," - here you define an element of the page, which when hovered over, will trigger the campaign. Use the selector here and define the ",Object(o.b)("em",{parentName:"p"},"key=value")," pair.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Custom Event -")," You can send custom events to the bot to trigger an inbound campaign. Follow the steps below to use custom events:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use the following script to post custom events to the bot \u2b07\ufe0f"),Object(o.b)("p",{parentName:"li"},"   ",Object(o.b)("inlineCode",{parentName:"p"},"document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({")),Object(o.b)("p",{parentName:"li"},"   ",Object(o.b)("inlineCode",{parentName:"p"},"event_code: 'ym-inbound-event',\ndata: JSON.stringify({\nevent: {\ncode: \"eventName\u201d\n}\n})\n}))"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a custom event in the Event Hub using the same name \u2b07\ufe0f"))))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/52C9274F-B15B-473C-9097-AEC1F3A1277F_2/Image.png",alt:"Image.png"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use the ",Object(o.b)("strong",{parentName:"li"},"custom event")," trigger in the condition node \u2b07\ufe0f")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/64CABEA8-624F-4F24-8D77-48FB40D78208_2/Image.png",alt:"Image.png"})),Object(o.b)("h2",{id:"creating-multiple-conditions-and-condition-sets"},"Creating multiple conditions and condition sets"),Object(o.b)("p",null,'When to use "',Object(o.b)("strong",{parentName:"p"},"AND"),'\u201d or "',Object(o.b)("strong",{parentName:"p"},"OR"),"\u201d:"),Object(o.b)("p",null,"By default, every \u201ccondition\u201d within a \u201ccondition set\u201d will have an ",Object(o.b)("strong",{parentName:"p"},"AND")," between one another. Every \u201ccondition set\u201d will have an ",Object(o.b)("strong",{parentName:"p"},"OR")," between one another. When ALL conditions in ANY of the condition sets are met, the campaign will get triggered."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/94BC3EB3-F5AF-4AF7-9ED0-D85B993D1BFF_2/Screen%20Recording%202021-07-12%20at%207.57.13%20PM.gif",alt:"Screen Recording 2021-07-12 at 7.57.13 PM.gif"})),Object(o.b)("h2",{id:"up-next"},"Up next"),Object(o.b)("p",null,"We will talk about ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm"},"Web Behavior triggers to identify in e-commerce.")))}s.isMDXComponent=!0}}]);