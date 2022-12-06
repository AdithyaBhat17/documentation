(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{352:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=(n(0),n(457)),l=["components"],s={title:"Things To Know While Building Flows On Whatsapp",sidebar_label:"Building Flows"},p={unversionedId:"cookbooks/whatsapp-channel/building-flows",id:"cookbooks/whatsapp-channel/building-flows",isDocsHomePage:!1,title:"Things To Know While Building Flows On Whatsapp",description:"On WhatsApp, User can build automated flows and use WhatsApp Business API account to connect a number to the bot.",source:"@site/docs/cookbooks/whatsapp-channel/building-flows.md",slug:"/cookbooks/whatsapp-channel/building-flows",permalink:"/docs/cookbooks/whatsapp-channel/building-flows",version:"current",sidebar_label:"Building Flows",sidebar:"cookbooks",previous:{title:"Capturing quick reply event from WhatsApp",permalink:"/docs/cookbooks/whatsapp-channel/wa-capturing-qr"},next:{title:"Frequently Asked Questions",permalink:"/docs/cookbooks/whatsapp-channel/faqs"}},i=[{value:"How to test your WhatsApp bot?",id:"how-to-test-your-whatsapp-bot",children:[]}],c={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"On WhatsApp, User can build automated flows and use WhatsApp Business API account to connect a number to the bot."),Object(r.b)("p",null,"You can design your conversation flows freely in studio like in case of other channels but"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1. Collecting user details became simpler:")),Object(r.b)("p",null,"We have a few system variables like:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"Sender")),": This shows the WhatsApp number of the user"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("em",{parentName:"strong"},"Profile")),": Gives user details like name,country of the user to access the name.\nFor example: use {{{profile.name}}}")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2.  Using Channel Filter:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If you want to customize your prompt to look or ask different question on WhatsApp than that of web you can use channel filter to set it to WhatsApp and customize accordingly."),Object(r.b)("li",{parentName:"ul"},"You can use system variable {{{source}}} to get source of users message and using condition node branch flows on basis of channel like web, whatsapp.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"3. WhatsApp reply buttons:")),Object(r.b)("p",null,"If you want to give users a button clickable option to choose from, you can use WhatsApp reply button in that case."),Object(r.b)("p",null,"Know how to configure WhatsApp reply buttons ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages/#whatsapp-reply-buttons"},"here")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"4. WhatsApp list:")),Object(r.b)("p",null,"If you want to give your user clickable list even on whatsapp to choose from you can use whatsapp list instead of quick reply."),Object(r.b)("p",null,"Know more about WhatsApp List ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages/#whatsapp-list-prompt"},"here")),Object(r.b)("h4",{id:"but-there-are-a-few-limitations"},"But there are a few limitations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Carousel node will not render multiple cards like it does in a website carousel. You can only use one card at a time."),Object(r.b)("li",{parentName:"ul"},"In date node, the web view will not be available on whatsapp."),Object(r.b)("li",{parentName:"ul"},"Try your bot is not the preview for whatsapp but for web. For whatsapp preview use the demo whatsapp account setup by yellow.ai"),Object(r.b)("li",{parentName:"ul"},"When you configure platform quick replies, they appear on whatsapp as a list of numbered items in text. "),Object(r.b)("li",{parentName:"ul"},"The current feedback prompt present on platform doesn't work on WhatsApp.")),Object(r.b)("h2",{id:"how-to-test-your-whatsapp-bot"},"How to test your WhatsApp bot?"),Object(r.b)("p",null,"To test your development bot, we have two options available:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1. WhatsApp Orch Bot:")),Object(r.b)("p",null,"If you want to test your bot on whatsApp, you can test that using the test whatsapp account set up by yellow.ai"),Object(r.b)("p",null,"To access the same:\nGo to try your bot click on the redirection link\nUnder chatbot preview you will find a QR code, scan the same and use it."),Object(r.b)("p",null,"But there are a few limitations:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Push notifications cannot be tested"),Object(r.b)("li",{parentName:"ul"},"Conversation with live agents cannot be tested"),Object(r.b)("li",{parentName:"ul"},"Each bot forgets context after 24 hrs, so in order to restart the conversation send talk to <bot_id> again")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"2. Enable development mode:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to channel, then WhatsApp\n",Object(r.b)("img",{parentName:"li",src:"https://i.imgur.com/ky5O5eZ.png",alt:null})),Object(r.b)("li",{parentName:"ol"},"Click on edit"),Object(r.b)("li",{parentName:"ol"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},'"Enable development mode"')),Object(r.b)("li",{parentName:"ol"},"Then add your number in ",Object(r.b)("inlineCode",{parentName:"li"},"Developer WhatsApp phone number")),Object(r.b)("li",{parentName:"ol"},"In ",Object(r.b)("inlineCode",{parentName:"li"},"Development bot ID"),", choose the stagging bot ID")),Object(r.b)("p",null,"In this case, when you ping on the whatsapp number connected to the bot from Developer WhatsApp phone number, development bot will respond rather than live bot.\nSo you can test your development bot also."))}b.isMDXComponent=!0},457:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),c=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=c(n),h=o,m=b["".concat(l,".").concat(h)]||b[h]||u[h]||r;return n?a.a.createElement(m,s(s({ref:t},i),{},{components:n})):a.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);