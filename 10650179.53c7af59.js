(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{393:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||r;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=(n(0),n(393)),c=["components"],i={id:"inbox",title:"Inbox Overview",description:"How to add agents",featured:!0,rank:5},l={unversionedId:"platform_concepts/inbox/inbox",id:"platform_concepts/inbox/inbox",isDocsHomePage:!1,title:"Inbox Overview",description:"How to add agents",source:"@site/docs/platform_concepts/inbox/inbox.md",slug:"/platform_concepts/inbox/inbox",permalink:"/docs/platform_concepts/inbox/inbox",version:"current",sidebar:"platform_concepts",previous:{title:"Dashboards",permalink:"/docs/platform_concepts/growth/dashboards"},next:{title:"Manage Support Agents",permalink:"/docs/platform_concepts/inbox/manage-support-agent"}},s=[{value:"Let\u2019s Get Started",id:"lets-get-started",children:[]},{value:"Testing the live agent module:",id:"testing-the-live-agent-module",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In case the user wants to talk to the live agent or sometimes it\u2019s better for humans to take over for better customer experience then the bot should be able to transfer the user\u2019s chat to a live agent and this can be achieved using the Inbox module and ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket"},"raise a ticket")," action node."),Object(r.b)("p",null,"There are two kinds of roles to access the inbox module:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Inbox Admin"),Object(r.b)("li",{parentName:"ul"},"Inbox Agent")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Click ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/configurations/access-management"},"here")," to know how to add an user and give the access to them."),Object(r.b)("h4",{id:"to-get-started-we-have-some-prerequisites"},"To get started, we have some prerequisites:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Have Inbox Agent Access"),Object(r.b)("li",{parentName:"ol"},"To configure the Journey to trigger live agent action, know more about ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys"},"Journeys")," and ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents"},"NLU")," "),Object(r.b)("li",{parentName:"ol"},"Understand the raise ticket action node and it\u2019s settings.")),Object(r.b)("h3",{id:"lets-get-started"},"Let\u2019s Get Started"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 1"),"  Create a Journey "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 2"),"  Add ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"Prompts")," to collect information from users."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 3"),"  Create an Intent and utterances to it. For example, \u201cCan I talk to Live agent? \u201d,\u201cConnect me to Customer Support\u201d "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Step 4"),"  Go ahead and Raise a ticket action node with the collected information"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/tkz07ty.png",alt:null})),Object(r.b)("h3",{id:"testing-the-live-agent-module"},"Testing the live agent module:"),Object(r.b)("p",null,"To test the live agent transfer you need to have access as an Inbox agent."),Object(r.b)("p",null,"If you have admin access to the bot follow ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/manage-support-agent"},"these steps")," to give yourself the inbox agent access."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: if you are an admin you don't have to add user again, in users just edit your row to add inbox agent access as well.")),Object(r.b)("p",null,"Once you have created the live agent journey, follow these steps to test it out:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Duplicate the tab or open the bot in another window. So now you will have two tabs opened."),Object(r.b)("li",{parentName:"ol"},"So in one of the tab go to ",Object(r.b)("strong",{parentName:"li"},"Inbox")),Object(r.b)("li",{parentName:"ol"},"Inside inbox, go to chats and then into ",Object(r.b)("strong",{parentName:"li"},"My chats"))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/9mYj74d.png",alt:null})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Make sure you are available. To check that click on the profile icon on the right corner and you will see a status drop down. ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/1CM2JqU.png",alt:null})),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Go to the previous tab or window where the bot was opened and raise a ticket. After ticket being raised it will show the name of the agent connected")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/O895hbq.png",alt:null})),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"In the tab in which the inbox was opened, you will see a ticket raised.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/y7ctMHT.png",alt:null})),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"You can reply from here and see the chat happening real-time on the bot.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/yoDC3VT.png",alt:null}),"\n",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/eUjdbs2.png",alt:null})),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Then you can close the chat and also test the message that should come on the ticket close.")))}b.isMDXComponent=!0}}]);