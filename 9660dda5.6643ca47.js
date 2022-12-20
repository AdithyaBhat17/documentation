(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{298:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),o=n(7),i=(n(0),n(461)),r=["components"],b={title:"Publish your bot",sidebar_label:"Publish your bot"},l={unversionedId:"platform_concepts/studio/test-and-publish-bot/modes",id:"platform_concepts/studio/test-and-publish-bot/modes",isDocsHomePage:!1,title:"Publish your bot",description:"1. Modes",source:"@site/docs/platform_concepts/studio/test-and-publish-bot/modes.md",slug:"/platform_concepts/studio/test-and-publish-bot/modes",permalink:"/docs/platform_concepts/studio/test-and-publish-bot/modes",version:"current",sidebar_label:"Publish your bot",sidebar:"platform_concepts",previous:{title:"Debug your bot flows",permalink:"/docs/platform_concepts/studio/test-and-publish-bot/debug-flow"},next:{title:"Tools and settings",permalink:"/docs/platform_concepts/studio/tools"}},s=[{value:"1. Modes",id:"1-modes",children:[{value:'<a name="development"></a>1.1 Development and Live modes',id:"11-development-and-live-modes",children:[]},{value:'<a name="staging"></a>1.2 Sandbox,Staging and Production modes',id:"12-sandboxstaging-and-production-modes",children:[]}]},{value:"2. Publish bot",id:"2-publish-bot",children:[{value:"2.1 Request for approval",id:"21-request-for-approval",children:[]},{value:"2.2 Approve request &amp; publish bot",id:"22-approve-request--publish-bot",children:[]}]},{value:"2.3 Selective Publish",id:"23-selective-publish",children:[]},{value:"2.4 Revert",id:"24-revert",children:[]}],p={toc:s};function c(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"1-modes"},"1. Modes"),Object(i.b)("p",null,"Yellow.ai supports multiple environments through which you can manage your published bots as well as the ongoing changes such as adding new functions, modifying flows, etc. You will encounter the following modes depending on your bot subscriptions,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#11-development-and-live-modes"},"Development and Live modes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#12-sandboxstaging-and-production-modes"},"Sandbox,Staging and Production modes"))),Object(i.b)("h3",{id:"11-development-and-live-modes"},Object(i.b)("a",{name:"development"}),"1.1 Development and Live modes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Development"),": Add/update bots with flows, functions and test it. If the bot works perfectly to your requirements, you can raise a request to ",Object(i.b)("strong",{parentName:"p"},"Publish")," it. Only ",Object(i.b)("strong",{parentName:"p"},"Admins")," can publish the bot. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Live:")," Published bots will be available in the ",Object(i.b)("strong",{parentName:"p"},"Live")," mode. You cannot make any changes in this mode. "))),Object(i.b)("p",null,"In the ",Object(i.b)("strong",{parentName:"p"},"Live")," mode, you can "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"View the analytics of live users in the ",Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/growth/overview/"},"Insights")," module"),Object(i.b)("li",{parentName:"ul"},"Run campaigns in ",Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/engage"},"Engage"),". "),Object(i.b)("li",{parentName:"ul"},"Attend live customer queries as an agent in ",Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox"},"Inbox"),".")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/4PLfGcE.png",alt:null})),Object(i.b)("h3",{id:"12-sandboxstaging-and-production-modes"},Object(i.b)("a",{name:"staging"}),"1.2 Sandbox,Staging and Production modes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Sandbox:")," Develop new bots, add/update them with flows, functions and test them. To publish changes from ",Object(i.b)("strong",{parentName:"p"},"Sandbox")," to ",Object(i.b)("strong",{parentName:"p"},"Production"),", you'll have to first deploy from ",Object(i.b)("strong",{parentName:"p"},"Sandbox")," to ",Object(i.b)("strong",{parentName:"p"},"Staging")," and then deploy from ",Object(i.b)("strong",{parentName:"p"},"Staging")," to ",Object(i.b)("strong",{parentName:"p"},"Production"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Staging:")," Staging is very similar to Sandbox except you can make quick fixes here and publish them without disturbing the ongoing work in the ",Object(i.b)("strong",{parentName:"p"},"Sandbox")," stage.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Production:")," Production contains the published live bots and is very similar to the ",Object(i.b)("strong",{parentName:"p"},"Live")," mode."))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/WI0YLmE.png",alt:null})),Object(i.b)("h2",{id:"2-publish-bot"},"2. Publish bot"),Object(i.b)("p",null,"Bot admins or approvers (access) can publish the bot. However, only super admin (who has created) can publish for the first time."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"To know how to add someone as an approver, see ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators/"},"here"),". ")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Only super admins can add approvers."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To see the super admin of the bot, go to ",Object(i.b)("strong",{parentName:"li"},"Access control"),".")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/gd7yn1Q.png",alt:null})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that the the following changes are not transferred to the Live environment after publishing the bot."),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"Records stored in database."),Object(i.b)("li",{parentName:"ul"},"Settings done in inbox module."),Object(i.b)("li",{parentName:"ul"},"Analytics of the bot in Insights tab."),Object(i.b)("li",{parentName:"ul"},"Campaigns scheduled in Engage module."),Object(i.b)("li",{parentName:"ul"},"Templates applied in the Engage module"),Object(i.b)("li",{parentName:"ul"},"Bot id is different in development and live environment."))),Object(i.b)("h3",{id:"21-request-for-approval"},"2.1 Request for approval"),Object(i.b)("p",null,"To request for publishing the bot from an approver -"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the bot's ",Object(i.b)("strong",{parentName:"p"},"Development")," mode.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to ",Object(i.b)("strong",{parentName:"p"},"Studio")," and click ",Object(i.b)("strong",{parentName:"p"},"Publish changes"),".\n",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/KpPExXP.jpg",alt:null}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify the ",Object(i.b)("em",{parentName:"p"},"List of changes pushed"),", enter a ",Object(i.b)("strong",{parentName:"p"},"Comment message"),"."),Object(i.b)("img",{src:"https://i.imgur.com/Vw2K047.png",width:"70%"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Publish"),". You will see the ",Object(i.b)("em",{parentName:"p"},"Publish approval awaited")," status until the bot is published."))),Object(i.b)("img",{src:"https://i.imgur.com/KP1Z06P.jpg"}),Object(i.b)("h3",{id:"22-approve-request--publish-bot"},"2.2 Approve request & publish bot"),Object(i.b)("p",null,"When someone raises a publish request, the super admin and approvers will receive an email with subject line ",Object(i.b)("em",{parentName:"p"},"Approval needed to publish Assistant : <YOUR_BOT_NAME>")),Object(i.b)("p",null,"Before approving"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Make sure the bot is working as expected in the development environment. You can test all the functionalities before approving."),Object(i.b)("li",{parentName:"ul"},"The bot is trained with correct intents.")),Object(i.b)("p",null,"To publish the bot follow these steps -"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you see the publish button is disabled and it says that bot is in read-only mode, make sure all the previous publish requests are approved and published."))),Object(i.b)("p",null,"When someone raises a publish request, the super admin and approvers will receive an email with subject line ",Object(i.b)("em",{parentName:"p"},"Approval needed to publish Assistant : <YOUR_BOT_NAME>")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the email and click on ",Object(i.b)("strong",{parentName:"p"},"Check publish request"),". It will redirect you to the bot approval page.\n",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/2P0Muuy.png",alt:null}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click in the Profile drop-down > ",Object(i.b)("strong",{parentName:"p"},"Take actions"),", and navigate to the ",Object(i.b)("strong",{parentName:"p"},"Bot approval")," tab\n",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/fWqYPzH.png",alt:null}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Approve"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify all the items mentioned in the checklist and select each checkbox post completing."),Object(i.b)("img",{src:"https://i.imgur.com/FT5KrCR.png",width:"70%"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Approvre")," to confirm approval."))),Object(i.b)("p",null,"When the bot is published successfully, the admins and approvers of the bot receive an email with the subject line ",Object(i.b)("em",{parentName:"p"},"Assistant : <BOT_NAME> has been approved")," with the name of the user who published it.\n",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/tcdvurC.png",alt:null})),Object(i.b)("h2",{id:"23-selective-publish"},"2.3 Selective Publish"),Object(i.b)("p",null,"Selective publish lets you publish certain flows of your bot instead of your entire bot. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Benefits")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can release a part of your bot and start seeing results while working on the other flows."),Object(i.b)("li",{parentName:"ul"},"You can make quick bug fixes or copy changes after your first release without disturbing the ongoing work."),Object(i.b)("li",{parentName:"ul"},"Proactively plan your work based on the feedback received for the currently published flows.")),Object(i.b)("p",null,"To access this feature,"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Publish changes")," button on the top and select ",Object(i.b)("strong",{parentName:"li"},"Publish selected flows"),".")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/feRhJWR.png",alt:null})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Choose the flows to be published, select the approvers, and post a comment on what the publish does. Click ",Object(i.b)("strong",{parentName:"li"},"Publish")," to publish the bot.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/9wX1vRD.png",alt:null})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"For bots with ",Object(i.b)("strong",{parentName:"p"},"Sandbox"),", ",Object(i.b)("strong",{parentName:"p"},"Staging")," and ",Object(i.b)("strong",{parentName:"p"},"Production")," modes, ",Object(i.b)("strong",{parentName:"p"},"Selective Publish")," will be available only if the bot is published from ",Object(i.b)("strong",{parentName:"p"},"Staging")," to ",Object(i.b)("strong",{parentName:"p"},"Production")," "))),Object(i.b)("h2",{id:"24-revert"},"2.4 Revert"),Object(i.b)("p",null,"Published bots can be reverted as well. This feature comes handy if the published bot has bugs."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Revert")," on the top.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/q37ebzW.png",alt:null})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Select the bot to be reverted and click ",Object(i.b)("strong",{parentName:"li"},"Revert")," in the following dialog box.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/T1Ixoqp.png",alt:null})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Revert")," action is possible only in ",Object(i.b)("strong",{parentName:"li"},"Live")," environments."),Object(i.b)("li",{parentName:"ol"},"Only admins can use the ",Object(i.b)("strong",{parentName:"li"},"Revert")," option.")))))}c.isMDXComponent=!0},461:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},c=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,d=c["".concat(r,".").concat(u)]||c[u]||m[u]||i;return n?o.a.createElement(d,b(b({ref:t},s),{},{components:n})):o.a.createElement(d,b({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);