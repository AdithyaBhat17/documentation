(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(435)),r=["components"],c={title:"Agent Actions",sidebar_label:"Agent Actions"},s={unversionedId:"platform_concepts/inbox/inbox-settings/automation/agent-actions",id:"platform_concepts/inbox/inbox-settings/automation/agent-actions",isDocsHomePage:!1,title:"Agent Actions",description:"Agent actions are similar to commands that agents can trigger from within inbox - to automate a micro-task. Every journey created in the builder/studio section is available in inbox to be converted into an automated agent action, to help save agent\u2019s time and improve their productivity.",source:"@site/docs/platform_concepts/inbox/inbox-settings/automation/agent-actions.md",slug:"/platform_concepts/inbox/inbox-settings/automation/agent-actions",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/agent-actions",version:"current",sidebar_label:"Agent Actions"},l=[{value:"Enabling agent actions",id:"enabling-agent-actions",children:[{value:"How is a journey mapped to an action?",id:"how-is-a-journey-mapped-to-an-action",children:[]}]}],p={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Agent actions are similar to commands that agents can trigger from within inbox - to automate a micro-task. Every journey created in the builder/studio section is available in inbox to be converted into an automated agent action, to help save agent\u2019s time and improve their productivity."),Object(i.b)("p",null,"Agent actions can be invoked by simply typing \u201c/\u201c in the message box as shown below:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/v67ccp5.png",alt:null})),Object(i.b)("p",null,"Once successfully triggered, the bot triggers the corresponding journey and presents the final response to the agent, which the agent can validate and send to the end user (by clicking on the green tick icon). Note the example response when \u201cPlaceOrder\u201d action is triggered in this case."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/yiyl2Ju.png",alt:null})),Object(i.b)("h2",{id:"enabling-agent-actions"},"Enabling agent actions"),Object(i.b)("p",null,"Admins can enable agent actions by going to Inbox > Chats > Settings > Productivity Tools > Agent Actions. All the journeys defined in builder are available here and can be enabled as an agent action."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/KMngkZf.png",alt:null})),Object(i.b)("p",null,"To enable an agent action, click on the edit icon to the right of it and set 'mark action enabled for this journey' as TRUE. You can also enable shortcut in which case agents can directly pass arguments as part of the message when trigegring an action - e.g. PlaceOrder OrderID can be triggered by simply typing /PlaceOrder AABV123009."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/W6dGyDR.png",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/jnktBcm.png",alt:null})),Object(i.b)("h3",{id:"how-is-a-journey-mapped-to-an-action"},"How is a journey mapped to an action?"),Object(i.b)("p",null,"Each step in the journey is converted into an argument that is expected to passed, so that the entire action can be executed:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/diPNrmC.png",alt:null})),Object(i.b)("p",null,"You can mnake a step mandatory in which case the bot will prompt the agent to enter this value to trigger the action. If its not marked as mandatory, please make sure that you handle empty value for this step in your journey definition (for example, by providing a default value for that step)."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/qntAnbQ.png",alt:null})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udca1 ",Object(i.b)("strong",{parentName:"p"},"Things to consider")),Object(i.b)("p",{parentName:"div"},"Please note that agent actions are completely stateless where the journey defined should eb a complete independent unit. So, you cant use a variable previously defined in another journey. You can of course, fetch a variable form the database."),Object(i.b)("p",{parentName:"div"},"Since agent actions are currently single shot, all the step values must be passed before the action is triggered."))))}b.isMDXComponent=!0},435:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||i;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);