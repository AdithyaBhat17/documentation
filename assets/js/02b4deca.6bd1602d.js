"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[8233],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14659:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Alias name for agents",sidebar_label:"Alias name for agents"},l=void 0,c={unversionedId:"cookbooks/inbox/alias",id:"cookbooks/inbox/alias",title:"Alias name for agents",description:"The Alias name feature is available for enterprise customers only.",source:"@site/docs/cookbooks/inbox/alias.md",sourceDirName:"cookbooks/inbox",slug:"/cookbooks/inbox/alias",permalink:"/docs/cookbooks/inbox/alias",draft:!1,tags:[],version:"current",frontMatter:{title:"Alias name for agents",sidebar_label:"Alias name for agents"},sidebar:"cookbooks",previous:{title:"Usecases",permalink:"/docs/cookbooks/inbox/custom-usecases"},next:{title:"Ticket notification to unavailable agents",permalink:"/docs/cookbooks/inbox/notifyagents"}},p={},m=[{value:"1. Add an alias name to be displayed on the chat widget",id:"1-add-an-alias-name-to-be-displayed-on-the-chat-widget",level:2},{value:"2. Display alias name in the chat when the agent is connected",id:"2-display-alias-name-in-the-chat-when-the-agent-is-connected",level:2},{value:"3. Access alias name through canned response on chats/tickets",id:"3-access-alias-name-through-canned-response-on-chatstickets",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Alias name feature is available for enterprise customers only.")),(0,r.kt)("p",null,"Maintaining confidentiality is crucial in chat conversations. To ensure privacy, you can display an alias name instead of an agent's actual name. This feature enables you to record information in reports while remaining anonymous. For security reasons, the system will store the agent's real name, but only the alias name will be visible on the widget. If you don't provide an alias name, the system will display the real name."),(0,r.kt)("p",null,"Here are some scenarios where you can use this feature:"),(0,r.kt)("h2",{id:"1-add-an-alias-name-to-be-displayed-on-the-chat-widget"},"1. Add an alias name to be displayed on the chat widget"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Only ",(0,r.kt)("strong",{parentName:"p"},"Inbox admins")," can modify agent details.      ")),(0,r.kt)("p",null,"When customers connect with an agent, the alias name will appear on the chat screen."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,r.kt)("strong",{parentName:"li"},"Settings")," > ",(0,r.kt)("strong",{parentName:"li"},"Team")," > ",(0,r.kt)("strong",{parentName:"li"},"Agents"),"."),(0,r.kt)("li",{parentName:"ol"},"Select the agent you want to assign an alias name to."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"Alias name")," and click ",(0,r.kt)("strong",{parentName:"li"},"Update"),".\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/fLh9Xeh.png",alt:null}))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"widget")," and ",(0,r.kt)("strong",{parentName:"p"},"preview")," screens will show the alias name when available: "),(0,r.kt)("img",{src:"https://i.imgur.com/jkWdsxl.png",alt:"drawing",width:"50%"}),(0,r.kt)("img",{src:"https://i.imgur.com/3HgQFWP.png",alt:"drawing",width:"40%"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-display-alias-name-in-the-chat-when-the-agent-is-connected"},"2. Display alias name in the chat when the agent is connected"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This feature is available to ",(0,r.kt)("strong",{parentName:"p"},"Bot developers")," with access to create studio flows, provided that the ",(0,r.kt)("strong",{parentName:"p"},"Inbox admin")," has configured the alias names.")),(0,r.kt)("p",null,"You can customize the message with alias name and display it to the bot user after they are connected to an agent. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Studio")," and open the flow where agent support is ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox_setup/inboxdemo"},"configured"),". "),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket"},"Raise ticket")," node, manually enter the required message and variables in the ",(0,r.kt)("strong",{parentName:"li"},"Message after ticket assignment")," field.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/2vuX8m0.png",alt:null}),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"{{agentAliasName}}")," variable to display the alias name. It will only be available if the agent's alias name is configured on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents"},"agent settings")," page.")))),(0,r.kt)("h2",{id:"3-access-alias-name-through-canned-response-on-chatstickets"},"3. Access alias name through canned response on chats/tickets"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Inbox admins")," can create canned responses that ",(0,r.kt)("strong",{parentName:"p"},"Inbox agents")," can use while conversing with customers via live chat or email.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Inbox admins:"),"  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Refer to ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/canned-responses"},"this")," procedure to create canned response. "),(0,r.kt)("li",{parentName:"ol"},"Add a tag and use ",(0,r.kt)("inlineCode",{parentName:"li"},"{{agent.aliasname}}")," in the response.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/9CogAuS.png",alt:null}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Inbox agents:")),(0,r.kt)("p",null,"On the chat/email screen, enter # followed by the tag to select the alias name that can be sent to the customer."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1lQiJrq.png",alt:null})))}d.isMDXComponent=!0}}]);