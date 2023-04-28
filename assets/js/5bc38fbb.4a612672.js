"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[33725],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(a),u=r,d=m["".concat(p,".").concat(u)]||m[u]||k[u]||l;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48386:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],s={title:"Slack",sidebar_label:"Slack"},p=void 0,i={unversionedId:"platform_concepts/channelConfiguration/slack2",id:"platform_concepts/channelConfiguration/slack2",title:"Slack",description:"Slack is a workplace communication tool, \u201ca single place for messaging, tools, and files.\u201d This means Slack is an instant messaging system with lots of add-ins for other workplace tools. Slack has an intuitive UI with both group and person-to-person messaging. These are more than 1500 apps and allow users to create their own app, which has evolved Slack to become a one-stop-shop for a lot of users.",source:"@site/docs/platform_concepts/channelConfiguration/slack2.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/slack2",permalink:"/docs/platform_concepts/channelConfiguration/slack2",draft:!1,tags:[],version:"current",frontMatter:{title:"Slack",sidebar_label:"Slack"},sidebar:"platform_concepts",previous:{title:"Email",permalink:"/docs/platform_concepts/channelConfiguration/email-outbound"},next:{title:"Microsoft Teams",permalink:"/docs/platform_concepts/channelConfiguration/teams"}},c={},m=[{value:"1. Slack Context Management",id:"1-slack-context-management",level:2},{value:"Channel",id:"channel",level:4},{value:"DM",id:"dm",level:4},{value:'<a name="2"></a> 2. Create an App',id:"-2-create-an-app",level:2},{value:'<a name="3"></a> 3. Configure Single/Multi-workspace',id:"-3-configure-singlemulti-workspace",level:2},{value:"3.1 Single Workspace",id:"31-single-workspace",level:3},{value:"3.2 Multiple Workspace",id:"32-multiple-workspace",level:3},{value:'<a name="4"></a> 4. Adding Slack app to Direct Message/Channel',id:"-4-adding-slack-app-to-direct-messagechannel",level:2},{value:'<a name="5"></a> 5.\xa0API',id:"-5api",level:2},{value:"5.1 Slash Commands",id:"51-slash-commands",level:3},{value:"5.2 Shortcuts",id:"52-shortcuts",level:3},{value:'<a name="6"></a> 6. Supported slack features',id:"-6-supported-slack-features",level:2}],k={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Slack is a workplace communication tool, \u201ca single place for messaging, tools, and files.\u201d This means Slack is an instant messaging system with lots of add-ins for other workplace tools. Slack has an intuitive UI with both group and person-to-person messaging. These are more than 1500 apps and allow users to create their own app, which has evolved Slack to become a one-stop-shop for a lot of users."),(0,l.kt)("p",null,"In this article, you will learn: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-create-an-app"},"How to create an app on Slack")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-configure-singlemulti-workspace"},"How to configure a workspace")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#4-adding-slack-app-to-direct-messagechannel"},"How to add Slack to Direct message/Channel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#5-api"},"Slack APIs integration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#6-supported-slack-features"},"Slack features supported by yellow.ai"))),(0,l.kt)("h2",{id:"1-slack-context-management"},"1. Slack Context Management"),(0,l.kt)("p",null,"Slack provides threaded messaging. It is important to understand how Yellow.ai platform handles context in channel, threads, and DM."),(0,l.kt)("h4",{id:"channel"},"Channel"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Bot will always reply in the respective thread.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Each thread has an independent context, if multiple threads are activated by same/different person \u2192 bot will maintain individual context/flow for each thread. Same flow can be run in parallel on different threads.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"User profiles are preserved across channels, threads, and DMs, ensuring that the sender is always the same."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/IV7TTDq.png",alt:null})))),(0,l.kt)("h4",{id:"dm"},"DM"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Bot will always reply in 1-1 a conversation (without threads formation).")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Bot ignores thread formation for a better conversational experience.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"User profiles are preserved across channels, threads, and DMs, ensuring that the sender is always the same."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/GRn6ZVV.png",alt:null})))),(0,l.kt)("h2",{id:"-2-create-an-app"},(0,l.kt)("a",{name:"2"})," 2. Create an App"),(0,l.kt)("p",null,"Follow the steps below to create an app on Slack: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Visit ",(0,l.kt)("a",{parentName:"p",href:"https://api.slack.com/apps"},"https://api.slack.com/apps")," and click ",(0,l.kt)("strong",{parentName:"p"},"Create a new app"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter app name and select an app development workspace.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After creating the app, goto the event subscription on the left panel. Enable the event subscription and add request URL to ",(0,l.kt)("a",{parentName:"p",href:"https://app.yellowmessenger.com/integrations/slack/receive/"},"https://app.yellowmessenger.com/integrations/slack/receive/")," botID"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/hLHzre9.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Scroll down to the event subscription section and expand ",(0,l.kt)("strong",{parentName:"p"},"Subscribe to bot events"),". Add the events scope according to your bot requirement."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Some of the common events- ",(0,l.kt)("a",{parentName:"p",href:"https://api.slack.com/events"},"references"),".")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Required Events:"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.slack.com/events/app_home_opened"},"app_home_opened")),(0,l.kt)("td",{parentName:"tr",align:null},"User clicked into your App Home tab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.slack.com/events/message.channels"},"message.channels ")),(0,l.kt)("td",{parentName:"tr",align:null},"A message was posted to a channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.slack.com/events/message.groups"},"message.groups")),(0,l.kt)("td",{parentName:"tr",align:null},"A message was posted to a private channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.slack.com/events/message.im"},"message.im")),(0,l.kt)("td",{parentName:"tr",align:null},"A message was posted in a direct message channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://api.slack.com/events/message.mpim"},"message.mpim")),(0,l.kt)("td",{parentName:"tr",align:null},"A message was posted in a multiparty direct message channel")))),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("strong",{parentName:"li"},"OAuth & Permission"),". Add redirect URL: ",(0,l.kt)("a",{parentName:"li",href:"https://app.yellow.ai/integrations/oauth/redirect"},"https://app.yellow.ai/integrations/oauth/redirect")," and Bot Token Scope according to your requirement. ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Click ",(0,l.kt)("a",{parentName:"p",href:"https://api.slack.com/scopes"},"here")," for scope references. ")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Required Bot Token Scopes:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- [channels:history](https://api.slack.com/scopes/channels:history) View messages and other content in public channels that App has been added.\n- [chat:write ](https://api.slack.com/scopes/chat:write)Send messages as @yourBot.\n- [commands](https://api.slack.com/scopes/commands) Add shortcuts and/or slash commands that people can use.\n- [groups:history](https://api.slack.com/scopes/groups:history) View messages and other content in private channels that App has been added.\n- [groups:read](https://api.slack.com/scopes/groups:read) View basic information about private channels that App has been added to.\n- [im:history](https://api.slack.com/scopes/im:history) View messages and other content in direct messages that App has been added.\n- [im:read](https://api.slack.com/scopes/im:read) View basic information about direct messages that App has been added to.\n- [incoming-webhook](https://api.slack.com/scopes/incoming-webhook) Post messages to specific channels in Slack.\n- [mpim:history](https://api.slack.com/scopes/mpim:history) View messages and other content in group direct messages that App has been added to.\n- [mpim:read](https://api.slack.com/scopes/mpim:read) View basic information about group direct messages that App has been added to.\n- [team:read](https://api.slack.com/scopes/team:read) View the name, email domain, and icon for workspaces App is connected to.\n- [users:read](https://api.slack.com/scopes/users:read) View people in a workspace.\n")),(0,l.kt)("p",null,"  ",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/rMWt5KS.png",alt:null})),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open ",(0,l.kt)("strong",{parentName:"p"},"Interactivity & Shortcuts"),", enable and add request URL to: ",(0,l.kt)("a",{parentName:"p",href:"https://app.yellowmessenger.com/integrations/slack/interaction/"},"https://app.yellowmessenger.com/integrations/slack/interaction/")," botID"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/ecPETcX.png",alt:null})))),(0,l.kt)("h2",{id:"-3-configure-singlemulti-workspace"},(0,l.kt)("a",{name:"3"})," 3. Configure Single/Multi-workspace"),(0,l.kt)("p",null,"Slack App can be built for both ",(0,l.kt)("strong",{parentName:"p"},"single")," workspace use cases (example, apps for a particular organisation) or app can be built for ",(0,l.kt)("strong",{parentName:"p"},"multi-tenant")," workspaces (example, apps for marketplace)."),(0,l.kt)("h3",{id:"31-single-workspace"},"3.1 Single Workspace"),(0,l.kt)("p",null,"Slack app uses a ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"bot access token (xoxb)"))," to communicate with workspace users. A Bot access token is obtained when the slack workspace admin adds the app to their workspace."),(0,l.kt)("p",null,"Follow these steps to configure a single workspace:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open ",(0,l.kt)("strong",{parentName:"p"},"OAuth & Permissions"),", Click ",(0,l.kt)("strong",{parentName:"p"},"Install App to Workspace"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/tFspnLG.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select a channel, incase you have enabled external incoming ",(0,l.kt)("a",{parentName:"p",href:"https://api.slack.com/apps/%5BAPPID%5D/incoming-webhooks"},"webhooks")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/3ufAVAy.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After installing the app in workspace, go back to ",(0,l.kt)("strong",{parentName:"p"},"OAuth & Permission"),". Copy the Bot ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"em"},"Access token (xoxb- )")),". ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Head to Channels > Messaging > Slack > Select token type > ",(0,l.kt)("strong",{parentName:"p"},"Slack tokens")," > Add the Slack access token > Save."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/8FE6ih8.png",alt:null})))),(0,l.kt)("h3",{id:"32-multiple-workspace"},"3.2 Multiple Workspace"),(0,l.kt)("p",null,"Slack multi-workspace can be handled using the ",(0,l.kt)("inlineCode",{parentName:"p"},"OAuth token"),", and YM bot will map the ",(0,l.kt)("inlineCode",{parentName:"p"},"accessToken")," to the requesting workspace's ",(0,l.kt)("inlineCode",{parentName:"p"},"teamId"),"."),(0,l.kt)("p",null,"Follow the steps to configure multi-workspace: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open ",(0,l.kt)("a",{parentName:"p",href:"https://api.slack.com/apps/"},"https://api.slack.com/apps/")," > Basic Information on the left panel. Copy the ",(0,l.kt)("inlineCode",{parentName:"p"},"Client ID")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"Client Secret"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/CIdAjUw.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open Channels > Messaging > Slack > Select token type > OAuth tokens > Add the Client ID, Client Secret, Scope, User Scope > Save."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/toGSrt8.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Store the accessToken of every workspace if you want to use Slack ",(0,l.kt)("a",{parentName:"p",href:"#5"},"APIs"),". Set up a flow to capture your ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"accessToken <> teamId"))," mapping in the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/database#1-create-table"},"Bot Table"),":"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add a custom event ",(0,l.kt)("inlineCode",{parentName:"li"},"slack-oauth-access-token")," in ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub"},"Event Hub"),". You will receive this event each time your app is added to a workspace and will have the following schema:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "event": {\n    "code": "slack-oauth-access-token",\n    "data": {\n      "appId": "A03********",\n      "teamId": "T03********",\n      "teamName": "Slack Bot Testing",\n      "accessToken": "xoxb-*************-***********-****************"\n    }\n  }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using the above event, you can trigger a ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow"},"flow"),". "),(0,l.kt)("li",{parentName:"ul"},"In the triggered flow, you can access the accessToken with ",(0,l.kt)("inlineCode",{parentName:"li"},"{{data.event.data.accessToken}}")," and teamId with ",(0,l.kt)("inlineCode",{parentName:"li"},"{{data.event.data.teamId}}"),"."),(0,l.kt)("li",{parentName:"ul"},"Store the above 2 mappings in the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/database#1-create-table"},"Bot Table")," using the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#database"},"Database Node"),".")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"You can install a multi-workspace App through OAuth flow, using the following link ",(0,l.kt)("a",{parentName:"li",href:"https://app.yellow.ai/integrations/slack/install/"},"https://app.yellow.ai/integrations/slack/install/")," botId")),(0,l.kt)("h2",{id:"-4-adding-slack-app-to-direct-messagechannel"},(0,l.kt)("a",{name:"4"})," 4. Adding Slack app to Direct Message/Channel"),(0,l.kt)("p",null,"After adding the Slack app to the workspace, you are required to add the app to a group or DM for testing or interacting with the bot."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Adding slack app to DM"),": Use the ",(0,l.kt)("strong",{parentName:"li"},"+button")," near Apps and select the app > Add > Messages , or search for the App using the top workspace search.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"DM"),": Bot will reply in 1-1 conversation fashion (no threads will be formed).")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Adding slack app to Group/Channel"),": Open Channel details > More > View App in channels. You can add/remove the app to the channel.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Group/Channel"),": Bot will reply in the threads and context will be mentioned within the respective threads.")),(0,l.kt)("p",null,"  ",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/sONDbA6.png",alt:null})),(0,l.kt)("p",null,"  ",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/gkDK36B.png",alt:null})),(0,l.kt)("h2",{id:"-5api"},(0,l.kt)("a",{name:"5"})," 5.\xa0API"),(0,l.kt)("p",null,"The Slack Web API is an interface for querying information from and enacting change in a Slack workspace. Reference: ",(0,l.kt)("a",{parentName:"p",href:"https://api.slack.com/methods"},"https://api.slack.com/methods")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Bot access token")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"For single workspace configuration")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You would already have the accessToken.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"For multi-workspace configuration")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"As a pre-requisite, you should complete Step3 mentioned in Multi-workspace configuration."),(0,l.kt)("li",{parentName:"ul"},"For every user who interacts with the bot, you can fetch their teamId using ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#22-system-variables"},"sender"),". Sender would include ",(0,l.kt)("inlineCode",{parentName:"li"},"[teamId]_[userId]"),"."),(0,l.kt)("li",{parentName:"ul"},"Using the ",(0,l.kt)("inlineCode",{parentName:"li"},"teamId"),", you can fetch the relevant ",(0,l.kt)("inlineCode",{parentName:"li"},"accessToken")," from the Bot Table.")),(0,l.kt)("h3",{id:"51-slash-commands"},"5.1 Slash Commands"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Slash Commands")," allows users to invoke the app by typing a string into the message composer box. Slash commands are not sent as a message but as a command to the bot.\nE.g: /channel invite @bob to #tech Reference: ",(0,l.kt)("a",{parentName:"p",href:"https://api.slack.com/interactivity/slash-commands"},"https://api.slack.com/interactivity/slash-commands")),(0,l.kt)("p",null,"Follow the below steps to add slash command:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Goto ",(0,l.kt)("a",{parentName:"p",href:"https://api.slack.com/apps/"},"https://api.slack.com/apps/")," > Select you App > Select the Slash Commands in left panel > Create New Command."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/iqVY0Y3.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Fill the command, Description and add Request URL > SAVE Request URL: ",(0,l.kt)("a",{parentName:"p",href:"https://app.yellowmessenger.com/integrations/slack/shortcuts/"},"https://app.yellowmessenger.com/integrations/slack/shortcuts/")," botID"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/HU5qrLT.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enable ",(0,l.kt)("inlineCode",{parentName:"p"},"slack-shortcuts")," event in ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub"},"Event Hub"),". If a flow is triggered using this event, the Event Payload can be accessed in builder using {{data.event.[]}}. Schema for this event would be:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "event": {\n        "code": "slack-shortcuts",\n        "data": {\n            "command": "/raiseticket",\n            "text": "pc is not working",\n            "message": "pc is not working",\n            "userId": "U01BXXX9A7"\n        }\n    }\n}\n')),(0,l.kt)("h3",{id:"52-shortcuts"},"5.2 Shortcuts"),(0,l.kt)("p",null,"Similar to Slash command, this is used to send commands to the bot. Shortcut can be initiated from the ",(0,l.kt)("strong",{parentName:"p"},"shortcuts")," button the message composer or from within search. Reference: ",(0,l.kt)("a",{parentName:"p",href:"https://api.slack.com/interactivity/shortcuts/using"},"https://api.slack.com/interactivity/shortcuts/using")),(0,l.kt)("p",null,"  ",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/2qIzPz0.png",alt:null})),(0,l.kt)("p",null,"Follow the given steps to add shortcuts:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open api.slack.com > Interactivity & Shortcuts > Create new Shortcut."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/3nmEdaK.png",alt:null})))),(0,l.kt)("h2",{id:"-6-supported-slack-features"},(0,l.kt)("a",{name:"6"})," 6. Supported slack features"),(0,l.kt)("p",null,"Yellow.ai supports the following slack features: "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2-way conversation"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Outbound messaging"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Interactive Features"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slash Commands/Shortcuts"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ephemeral Message"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"V2 Notification API"),(0,l.kt)("td",{parentName:"tr",align:null},"no")))))}u.isMDXComponent=!0}}]);