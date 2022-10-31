(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{392:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(445)),i=["components"],c={title:"Chat queue handing",sidebar_label:"Queue handling"},l={unversionedId:"platform_concepts/inbox/inbox-settings/workflows/chat-queue",id:"platform_concepts/inbox/inbox-settings/workflows/chat-queue",isDocsHomePage:!1,title:"Chat queue handing",description:"From the queue handling settings page, you can control how incoming chat tickets are handled when all your agents are occupied.",source:"@site/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue.md",slug:"/platform_concepts/inbox/inbox-settings/workflows/chat-queue",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/chat-queue",version:"current",sidebar_label:"Queue handling",sidebar:"platform_concepts",previous:{title:"SLA settings",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/sla"},next:{title:"Offline ticketing/chat handling",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat"}},s=[{value:"1. Configuration",id:"1-configuration",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"From the queue handling settings page, you can control how incoming chat tickets are handled when all your agents are occupied.\nCustomers enter the queue when your agents' chat limit has been reached. This way they can focus on finishing current chats before starting new ones. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can change the concurrency in your ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents"},"agents' profile settings"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Chat queues help you maintain a balance between wait time and internal resources. "),Object(o.b)("li",{parentName:"ul"},"It prevents concurrent chat overload for agents while keeping your waiting customers updated."),Object(o.b)("li",{parentName:"ul"},"Queue setting makes your chat queues easy to manage and customize and decides the queue limit for your groups to make sure your customers are handled well.")),Object(o.b)("p",null,"Functionalities of queue handling: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"View all pending chats and their current time in queue."),Object(o.b)("li",{parentName:"ul"},"Set queue rules based on agent availability and customer wait length."),Object(o.b)("li",{parentName:"ul"},"Time and customize the messages your chat users see while waiting."),Object(o.b)("li",{parentName:"ul"},"Create auto-accept rules to direct requests to the least busy operator."),Object(o.b)("li",{parentName:"ul"},"Access queue reports on a daily, weekly, and monthly basis.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"1-configuration"},"1. Configuration"),Object(o.b)("p",null,"Follow the given steps to configure the queue for different agent groups: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("strong",{parentName:"li"},"Inbox")," > ",Object(o.b)("strong",{parentName:"li"},"Setting"),". "),Object(o.b)("li",{parentName:"ol"},"Search and select ",Object(o.b)("strong",{parentName:"li"},"Queue handling"),". ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/NFgq6UD.jpg",alt:null})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"When the agents are occupied, incoming tickets can go into ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#14-open-chats"},"Open")," chats or ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#16-missed-chats"},"Missed")," chats. Select  ",Object(o.b)("strong",{parentName:"li"},"Open"),"/",Object(o.b)("strong",{parentName:"li"},"Missed")," from the drop-down menu. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Open"),": List of all the existing tickets the agents are working on."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Missed"),": List of all the tickets that are missed by the agents when they are occupied.")))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/nO0LbKq.png",alt:null})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Select the checkbox- ",Object(o.b)("strong",{parentName:"li"},"Mark the chat as missed when your customer who is queued in the website chatbot, becomes inactive for _ min(s)")," and add the minutes of inactivity.",Object(o.b)("br",{parentName:"li"}),"By checking this, if the user (who is in the queue) is not answered within (example) 3 minutes by the agent, chat automatically goes into ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/getstartedwithlivechat#16-missed-chats"},"missed"),". ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/B187p3D.png",alt:null})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"By selecting the ",Object(o.b)("strong",{parentName:"li"},"Enable queue position display on widget")," toggle, the customers can see the details that they are in a queue and queue position when they can expect a response from an agent. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You can display the position by entering the text in the ",Object(o.b)("strong",{parentName:"li"},"Enter custom message to display queue position")," field. Type in any message and use ",Object(o.b)("inlineCode",{parentName:"li"},"{{queuePosition}}")," to get the value. ")))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/BC5G9E3.png",alt:null})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"You can enable the Default position and display the required queue position value. This can be done to all the displayed agent groups. ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/mavglY7.png",alt:null})),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Save")," at the end of the page and save all the changes. ")))}b.isMDXComponent=!0},445:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,h=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);