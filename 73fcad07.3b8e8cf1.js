(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n(3),r=n(7),o=(n(0),n(385)),c=["components"],i={title:"Understanding Different Chat Types",sidebar_label:"Understanding Different Chat Types"},s={unversionedId:"platform_concepts/inbox/chats/types-of-chat",id:"platform_concepts/inbox/chats/types-of-chat",isDocsHomePage:!1,title:"Understanding Different Chat Types",description:"Presently there are 7 chat types in Chats that come to your inbox.",source:"@site/docs/platform_concepts/inbox/chats/types-of-chat.md",slug:"/platform_concepts/inbox/chats/types-of-chat",permalink:"/docs/platform_concepts/inbox/chats/types-of-chat",version:"current",sidebar_label:"Understanding Different Chat Types",sidebar:"platform_concepts",previous:{title:"Inbox SDK for Cordova",permalink:"/docs/platform_concepts/inbox/mobilesdk/cordova"},next:{title:"WhatsApp 24hr Window Policy",permalink:"/docs/platform_concepts/inbox/whatsapp-24hr-window-policy"}},l=[{value:"1. My Chats",id:"1-my-chats",children:[]},{value:"2. Queued Chats",id:"2-queued-chats",children:[]},{value:"3. Open Chats",id:"3-open-chats",children:[]},{value:"4. Missed Chats",id:"4-missed-chats",children:[]},{value:"5. Resolved Chats",id:"5-resolved-chats",children:[]},{value:"6. Active Chats",id:"6-active-chats",children:[]},{value:"7. Bot Messages",id:"7-bot-messages",children:[]}],u={toc:l};function h(e){var t=e.components,n=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Presently there are 7 chat types in Chats that come to your inbox."),Object(o.b)("h3",{id:"1-my-chats"},"1. My Chats"),Object(o.b)("p",null,"If you are an Inbox agent and you are available, the ticket raised and assigned to you will come under My chats."),Object(o.b)("p",null,"My chats will differ from agents to agents because here they can only see the tickets assigned to them."),Object(o.b)("h3",{id:"2-queued-chats"},"2. Queued Chats"),Object(o.b)("p",null,"If the chat concurrency for each of the agents is full the ticket raised after that will be found under queued chats only if chat queues are enabled. Follow these steps for enabling chat queues."),Object(o.b)("p",null,"Example, suppose we have set a limit that each agent can handle 5 tickets and there are 2 agents. So if 10 tickets are raised and they are in the assigned state then when the 11th ticket will be raised, if chat queues are enabled it will be queued and found under queued chats."),Object(o.b)("h3",{id:"3-open-chats"},"3. Open Chats"),Object(o.b)("p",null,"When offline ticketing is enabled, a ticket is raised outside working hours configured, and goes to open chats."),Object(o.b)("h3",{id:"4-missed-chats"},"4. Missed Chats"),Object(o.b)("p",null,"Whenever any raise ticket action fails due to inbox settings that can be controlled like offline ticketing disabled, group queue not configured etc.,  will be available in missed chats."),Object(o.b)("h3",{id:"5-resolved-chats"},"5. Resolved Chats"),Object(o.b)("p",null,"All the tickets that are solved or closed by the agents will be found under resolved chats"),Object(o.b)("h3",{id:"6-active-chats"},"6. Active Chats"),Object(o.b)("p",null,"This chat option will be available only to the users who are inbox Supervisor / Admin (Overall), where they can see all the active tickets that are being handled by the agents."),Object(o.b)("h3",{id:"7-bot-messages"},"7. Bot Messages"),Object(o.b)("p",null,"All the communication that happens on the bot will be seen here."))}h.isMDXComponent=!0},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,b=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?r.a.createElement(b,i(i({ref:t},l),{},{components:n})):r.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);