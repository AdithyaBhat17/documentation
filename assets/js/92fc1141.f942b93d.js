"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[7224],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52097:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"Manage support agents",sidebar_label:"Manage support agents"},s=void 0,p={unversionedId:"platform_concepts/inbox/inbox_setup/supportagents",id:"platform_concepts/inbox/inbox_setup/supportagents",title:"Manage support agents",description:"- There are two roles to access the inbox module, Inbox Admin and Inbox Agent",source:"@site/docs/platform_concepts/inbox/inbox_setup/supportagents.md",sourceDirName:"platform_concepts/inbox/inbox_setup",slug:"/platform_concepts/inbox/inbox_setup/supportagents",permalink:"/docs/platform_concepts/inbox/inbox_setup/supportagents",draft:!1,tags:[],version:"current",frontMatter:{title:"Manage support agents",sidebar_label:"Manage support agents"},sidebar:"platform_concepts",previous:{title:"Overview",permalink:"/docs/platform_concepts/inbox/"},next:{title:"Inbox demo",permalink:"/docs/platform_concepts/inbox/inbox_setup/inboxdemo"}},c={},u=[{value:'<a name="provideaccess"></a> 1. Provide inbox agent/admin access',id:"-1-provide-inbox-agentadmin-access",level:2},{value:'<a name="acceptaccess"></a> 2. Accept invite to join as a support agent',id:"-2-accept-invite-to-join-as-a-support-agent",level:2},{value:"3. Difference between each Inbox roles - Admin/Supervisor/Agent",id:"3-difference-between-each-inbox-roles---adminsupervisoragent",level:2}],m={toc:u};function g(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are two roles to access the inbox module, ",(0,r.kt)("strong",{parentName:"li"},"Inbox Admin")," and ",(0,r.kt)("strong",{parentName:"li"},"Inbox Agent")),(0,r.kt)("li",{parentName:"ul"},"Incoming tickets (from the bot user) are assigned to the support agents."),(0,r.kt)("li",{parentName:"ul"},"Admin can add support agents and Agent can accept an invite sent by an admin to join as a support agent."),(0,r.kt)("li",{parentName:"ul"},"Support agents will have access to the chats/tickets/analytics/performance to help understand and resolve queries in Inbox (other modules such as Studio, Channels, etc. will not be visible to the inbox admin/agent)."),(0,r.kt)("li",{parentName:"ul"},"For supporting documents to add/accept bot access, click ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/add-bot-collaborators"},"here"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-1-provide-inbox-agentadmin-access"},(0,r.kt)("a",{name:"provideaccess"})," 1. Provide inbox agent/admin access"),(0,r.kt)("p",null,"To add ",(0,r.kt)("strong",{parentName:"p"},"inbox admin/agent"),", follow the below steps: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Access Control")," from the overview page. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/5ME81yH.png",alt:null})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"On ",(0,r.kt)("strong",{parentName:"li"},"Users")," tab, click ",(0,r.kt)("strong",{parentName:"li"},"+Invite users"),"."),(0,r.kt)("li",{parentName:"ol"},"Enter ",(0,r.kt)("strong",{parentName:"li"},"email ID")," and from the Access control dropdown menu select ",(0,r.kt)("strong",{parentName:"li"},"Inbox (Agent)")," and click ",(0,r.kt)("strong",{parentName:"li"},"Invite"),". ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Follow the same to add Inbox (Admin) access.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/n5E7zhY.png",alt:null})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Supervisor")," role can be added for agents.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can make your agents supervisors to a group where they can monitor & supervise the group's incoming chats as well as the agents."),(0,r.kt)("li",{parentName:"ul"},"While you share inbox agent access, you will get an additional option to make them supervisor for a group."),(0,r.kt)("li",{parentName:"ul"},"From the dropdown, select the group that you want them to be a supervisor.  "),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/groups"},"here")," to configure a group.")))),(0,r.kt)("img",{src:"https://i.imgur.com/RNsGTzx.png",alt:"drawing",width:"60%"}),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"You can open the ",(0,r.kt)("strong",{parentName:"li"},"Invites tab")," and resend/revoke the invite. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/Qd85Tlw.png",alt:null})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Once the agent accepts the request, their information will be listed in the user's tab. "),(0,r.kt)("li",{parentName:"ol"},"You can edit or delete the users (if required).")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-2-accept-invite-to-join-as-a-support-agent"},(0,r.kt)("a",{name:"acceptaccess"})," 2. Accept invite to join as a support agent"),(0,r.kt)("p",null,"To join the team as an inbox agent, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you don't have an account on ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.yellow.ai"},"Yellow.ai Platform")," you will receive an email from Yellow.ai to Sign Up on the platform and accept the invite to join the platform as a support agent.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("img",{parentName:"strong",src:"https://i.imgur.com/T1kacbw.png",alt:null}))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"If you already have an account on the Yellow.ai platform, check the notification icon on the overview page. ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/q20mMo4.png",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Click on the tick mark to accept the invite.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/CGK4W7h.png",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Only the user with bot ",(0,r.kt)("strong",{parentName:"li"},"Admin")," access can provide ",(0,r.kt)("strong",{parentName:"li"},"Inbox admin")," / ",(0,r.kt)("strong",{parentName:"li"},"Inbox agent")," access to any user (or themselves)."),(0,r.kt)("li",{parentName:"ul"},"If you have only admin access, you can give yourself the Inbox (agent/Admin) access to explore the Inbox functionalities. In the Users tab, edit your row to add ",(0,r.kt)("strong",{parentName:"li"},"inbox agent")," access along with admin access.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/ZFp5TUO.png",alt:null})),(0,r.kt)("li",{parentName:"ul"},"Users with ",(0,r.kt)("strong",{parentName:"li"},"Inbox admin")," access can add ",(0,r.kt)("strong",{parentName:"li"},"Inbox agents/supervisors"),"."),(0,r.kt)("li",{parentName:"ul"},"Any user provided with ",(0,r.kt)("strong",{parentName:"li"},"Inbox agent invite")," can join as a support agent. "))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-difference-between-each-inbox-roles---adminsupervisoragent"},"3. Difference between each Inbox roles - Admin/Supervisor/Agent"),(0,r.kt)("p",null,"Coming soon!"))}g.isMDXComponent=!0}}]);