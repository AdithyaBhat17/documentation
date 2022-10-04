(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{202:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(3),c=a(7),o=(a(0),a(445)),r=["components"],l={title:"Slack",sidebar_label:"Slack"},s={unversionedId:"platform_concepts/channelConfiguration/slack2",id:"platform_concepts/channelConfiguration/slack2",isDocsHomePage:!1,title:"Slack",description:"This document consists of:",source:"@site/docs/platform_concepts/channelConfiguration/slack2.md",slug:"/platform_concepts/channelConfiguration/slack2",permalink:"/docs/platform_concepts/channelConfiguration/slack2",version:"current",sidebar_label:"Slack",sidebar:"platform_concepts",previous:{title:"IVR Bots (for cloud)",permalink:"/docs/platform_concepts/channelConfiguration/Ivr"},next:{title:"SMS Outbound India",permalink:"/docs/platform_concepts/channelConfiguration/sms-outbound-india"}},i=[{value:'<a name="1"></a> 1. Introduction',id:"1-introduction",children:[{value:"1.1 Slack Context Management",id:"11-slack-context-management",children:[]}]},{value:'<a name="2"></a> 2. Create an App',id:"2-create-an-app",children:[]},{value:'<a name="3"></a> 3. Configure Single/Multi-workspace',id:"3-configure-singlemulti-workspace",children:[{value:"3.1 Single Workspace",id:"31-single-workspace",children:[]},{value:"3.2 Multiple Workspace",id:"32-multiple-workspace",children:[]}]},{value:'<a name="4"></a> 4. Adding Slack app to Direct Message/Channel',id:"4-adding-slack-app-to-direct-messagechannel",children:[]},{value:'<a name="5"></a> 5.\xa0API',id:"5-api",children:[{value:"5.1 Slash Commands",id:"51-slash-commands",children:[]},{value:"5.2 Shortcuts",id:"52-shortcuts",children:[]}]},{value:'<a name="6"></a> 6. Supported slack features',id:"6-supported-slack-features",children:[]}],p={toc:i};function b(e){var t=e.components,a=Object(c.a)(e,r);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This document consists of: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#1"},"Slack in yellow.ai")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#2"},"How to create an app on slack")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#3"},"How to configure a workspace")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#4"},"How to add Slack to Direct message/Channel")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#5"},"Slack APIs integration")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#6"},"Slack features supported by yellow.ai"))),Object(o.b)("h2",{id:"1-introduction"},Object(o.b)("a",{name:"1"})," 1. Introduction"),Object(o.b)("p",null,"Slack is a workplace communication tool, \u201ca single place for messaging, tools and files.\u201d This means Slack is an instant messaging system with lots of add-ins for other workplace tools. Slack has an intuitive UI with both group and person-to-person messaging. These are more than 1500 apps and allows users to create their own app which has evolved Slack to become a one-stop-shop for a lot of users."),Object(o.b)("h3",{id:"11-slack-context-management"},"1.1 Slack Context Management"),Object(o.b)("p",null,"Slack provides threaded messaging. It is important to understand how Yellow.ai platform handles the context in channel, threads and in DM."),Object(o.b)("h4",{id:"channel"},"Channel"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Bot will always reply in the respective thread."),Object(o.b)("li",{parentName:"ol"},"Each thread has an independent context, if multiple threads are activated by same/different person \u2192 bot will maintain individual context/journey for each thread. Same journey can be run in parallel on different threads."),Object(o.b)("li",{parentName:"ol"},"User profile is preserved cross channels/threads/DMs, ie, sender would always remain the same.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/IV7TTDq.png",alt:null})),Object(o.b)("h4",{id:"dm"},"DM"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Bot will always reply in 1-1 conversation (without threads formation)."),Object(o.b)("li",{parentName:"ol"},"Bot ignores thread formation for better conversational experience."),Object(o.b)("li",{parentName:"ol"},"User profile is preserved cross channels/threads/DMs, ie, sender would always remain the same.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/GRn6ZVV.png",alt:null})),Object(o.b)("h2",{id:"2-create-an-app"},Object(o.b)("a",{name:"2"})," 2. Create an App"),Object(o.b)("p",null,"Follow the steps below to create an app on slack: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Visit ",Object(o.b)("a",{parentName:"li",href:"https://api.slack.com/apps"},"https://api.slack.com/apps")," and click ",Object(o.b)("strong",{parentName:"li"},"Create a new app"),"."),Object(o.b)("li",{parentName:"ol"},"Enter app name and select an app development workspace."),Object(o.b)("li",{parentName:"ol"},"After creating the app, goto the event subscription on the left panel. Enable the event subscription and add request URL to ",Object(o.b)("a",{parentName:"li",href:"https://app.yellowmessenger.com/integrations/slack/receive/"},"https://app.yellowmessenger.com/integrations/slack/receive/")," botID")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/hLHzre9.png",alt:null})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Scroll down on the event subscription section and expand ",Object(o.b)("strong",{parentName:"li"},"Subscribe to bot events"),". Add the events scope according to your bot requirement.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Some of the common events- ",Object(o.b)("a",{parentName:"p",href:"https://api.slack.com/events"},"references"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Required Events:"))),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Event Name"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://api.slack.com/events/app_home_opened"},"app_home_opened")),Object(o.b)("td",{parentName:"tr",align:null},"User clicked into your App Home tab")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://api.slack.com/events/message.channels"},"message.channels ")),Object(o.b)("td",{parentName:"tr",align:null},"A message was posted to a channel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://api.slack.com/events/message.groups"},"message.groups")),Object(o.b)("td",{parentName:"tr",align:null},"A message was posted to a private channel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://api.slack.com/events/message.im"},"message.im")),Object(o.b)("td",{parentName:"tr",align:null},"A message was posted in a direct message channel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://api.slack.com/events/message.mpim"},"message.mpim")),Object(o.b)("td",{parentName:"tr",align:null},"A message was posted in a multiparty direct message channel")))),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("strong",{parentName:"li"},"OAuth & Permission"),". Add redirect URL: ",Object(o.b)("a",{parentName:"li",href:"https://app.yellow.ai/integrations/oauth/redirect"},"https://app.yellow.ai/integrations/oauth/redirect")," and Bot Token Scope according to your requirement. ")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Click ",Object(o.b)("a",{parentName:"p",href:"https://api.slack.com/scopes"},"here")," for scope references. ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Required Bot Token Scopes:"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"- [channels:history](https://api.slack.com/scopes/channels:history) View messages and other content in public channels that App has been added.\n- [chat:write ](https://api.slack.com/scopes/chat:write)Send messages as @yourBot.\n- [commands](https://api.slack.com/scopes/commands) Add shortcuts and/or slash commands that people can use.\n- [groups:history](https://api.slack.com/scopes/groups:history) View messages and other content in private channels that App has been added.\n- [groups:read](https://api.slack.com/scopes/groups:read) View basic information about private channels that App has been added to.\n- [im:history](https://api.slack.com/scopes/im:history) View messages and other content in direct messages that App has been added.\n- [im:read](https://api.slack.com/scopes/im:read) View basic information about direct messages that App has been added to.\n- [incoming-webhook](https://api.slack.com/scopes/incoming-webhook) Post messages to specific channels in Slack.\n- [mpim:history](https://api.slack.com/scopes/mpim:history) View messages and other content in group direct messages that App has been added to.\n- [mpim:read](https://api.slack.com/scopes/mpim:read) View basic information about group direct messages that App has been added to.\n- [team:read](https://api.slack.com/scopes/team:read) View the name, email domain, and icon for workspaces App is connected to.\n- [users:read](https://api.slack.com/scopes/users:read) View people in a workspace.\n")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/rMWt5KS.png",alt:null})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("strong",{parentName:"li"},"Interactivity & Shortcuts"),", enable and add request URL to: ",Object(o.b)("a",{parentName:"li",href:"https://app.yellowmessenger.com/integrations/slack/interaction/"},"https://app.yellowmessenger.com/integrations/slack/interaction/")," botID")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/ecPETcX.png",alt:null})),Object(o.b)("h2",{id:"3-configure-singlemulti-workspace"},Object(o.b)("a",{name:"3"})," 3. Configure Single/Multi-workspace"),Object(o.b)("p",null,"Slack App can be built for both ",Object(o.b)("strong",{parentName:"p"},"single")," workspace use cases (example, apps for a particular organisation) or app can be built for ",Object(o.b)("strong",{parentName:"p"},"multi-tenant")," workspaces (example, apps for marketplace)."),Object(o.b)("h3",{id:"31-single-workspace"},"3.1 Single Workspace"),Object(o.b)("p",null,"Slack app uses ",Object(o.b)("em",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"em"},"bot access token (xoxb)"))," to communicate with workspace users, Bot access token is obtained when the slack workspace admin add the app to their workspace."),Object(o.b)("p",null,"Follow the steps to configure single workspace: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("strong",{parentName:"li"},"OAuth & Permissions"),", Click ",Object(o.b)("strong",{parentName:"li"},"Install App to Workspace"),".")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/tFspnLG.png",alt:null})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Select a channel, incase you have enabled external incoming ",Object(o.b)("a",{parentName:"li",href:"https://api.slack.com/apps/%5BAPPID%5D/incoming-webhooks"},"webhooks"))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/3ufAVAy.png",alt:null})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"After installing the app to workspace, go back to the ",Object(o.b)("strong",{parentName:"li"},"OAuth & Permission"),". Copy the Bot ",Object(o.b)("em",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"em"},"Access token (xoxb- )")),". "),Object(o.b)("li",{parentName:"ol"},"Head to Channels > Messaging > Slack > Select token type > ",Object(o.b)("strong",{parentName:"li"},"Slack tokens")," > Add the Slack access token > Save.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/8FE6ih8.png",alt:null})),Object(o.b)("h3",{id:"32-multiple-workspace"},"3.2 Multiple Workspace"),Object(o.b)("p",null,"Slack multi-workspace can be handled using the ",Object(o.b)("inlineCode",{parentName:"p"},"OAuth token"),", YM bot will map the ",Object(o.b)("inlineCode",{parentName:"p"},"accessToken")," to the requesting workspace's ",Object(o.b)("inlineCode",{parentName:"p"},"teamId"),"."),Object(o.b)("p",null,"Follow the steps to configure multi-workspace: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("a",{parentName:"li",href:"https://api.slack.com/apps/"},"https://api.slack.com/apps/")," > Basic Information on the left panel. Copy the ",Object(o.b)("inlineCode",{parentName:"li"},"Client ID")," & ",Object(o.b)("inlineCode",{parentName:"li"},"Client Secret"),".")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/CIdAjUw.png",alt:null})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Open Channels > Messaging > Slack > Select token type > OAuth tokens > Add the Client ID, Client Secret, Scope, User Scope > Save.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/toGSrt8.png",alt:null})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Store the accessToken of every workspace if you want to use Slack ",Object(o.b)("a",{parentName:"li",href:"#5"},"APIs"),". Set up a journey to capture your ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"accessToken <> teamId"))," mapping in the ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/table/create-tables/"},"Bot Table"),":")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a custom event ",Object(o.b)("inlineCode",{parentName:"li"},"slack-oauth-access-token")," in ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub/"},"Event Hub"),". You will receive this event each time your app is added to a workspace and will have the following schema:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "event": {\n    "code": "slack-oauth-access-token",\n    "data": {\n      "appId": "A03********",\n      "teamId": "T03********",\n      "teamName": "Slack Bot Testing",\n      "accessToken": "xoxb-*************-***********-****************"\n    }\n  }\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Using the above event, you can trigger a ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys/#5-configure-start-trigger"},"Journey"),". "),Object(o.b)("li",{parentName:"ul"},"In the triggered journey, you can access the accessToken with ",Object(o.b)("inlineCode",{parentName:"li"},"{{data.event.data.accessToken}}")," and teamId with ",Object(o.b)("inlineCode",{parentName:"li"},"{{data.event.data.teamId}}"),"."),Object(o.b)("li",{parentName:"ul"},"Store the above 2 mappings in the ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/table/create-tables/"},"Bot Table")," using the ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#database"},"Database Node"),".")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"You can install a multi-workspace App through OAuth flow, using the following link ",Object(o.b)("a",{parentName:"li",href:"https://app.yellow.ai/integrations/slack/install/"},"https://app.yellow.ai/integrations/slack/install/")," botId")),Object(o.b)("h2",{id:"4-adding-slack-app-to-direct-messagechannel"},Object(o.b)("a",{name:"4"})," 4. Adding Slack app to Direct Message/Channel"),Object(o.b)("p",null,"After adding the Slack app to the workspace, you are required to add the app to a group or DM for testing or interacting with the bot."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Adding slack app to DM"),": Use the ",Object(o.b)("strong",{parentName:"li"},"+button")," near Apps and Select the app > Add > Messages , or search the App using the top workspace search.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"DM"),": Bot will reply in 1-1 conversation fashion (no threads will be formed)")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Adding slack app to Group/Channel"),": Open Channel details > More > View App in channels. You can add/remove the app to the channel.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Group/Channel"),": Bot will reply in the threads and context will be mentioned within the respective threads.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/sONDbA6.png",alt:null})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/gkDK36B.png",alt:null})),Object(o.b)("h2",{id:"5-api"},Object(o.b)("a",{name:"5"})," 5.\xa0API"),Object(o.b)("p",null,"The Slack Web API is an interface for querying information from and enacting change in a Slack workspace. Reference: ",Object(o.b)("a",{parentName:"p",href:"https://api.slack.com/methods"},"https://api.slack.com/methods")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Bot access token")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"For single workspace configuration")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You would already have the accessToken.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"For multi-workspace configuration")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"As a pre-requisite, you should complete Step3 mentioned in Multi-workspace configuration."),Object(o.b)("li",{parentName:"ul"},"For every user who interacts with the bot, you can fetch their teamId using ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables/#system-variables"},"sender"),". Sender would include ",Object(o.b)("inlineCode",{parentName:"li"},"[teamId]_[userId]"),"."),Object(o.b)("li",{parentName:"ul"},"Using the ",Object(o.b)("inlineCode",{parentName:"li"},"teamId"),", you can fetch the relevant ",Object(o.b)("inlineCode",{parentName:"li"},"accessToken")," from the Bot Table.")),Object(o.b)("h3",{id:"51-slash-commands"},"5.1 Slash Commands"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Slash Commands")," allows users to invoke the app by typing a string into the message composer box. Slash commands are not sent as a message but as a command to the bot.\nE.g: /channel invite @bob to #tech Reference: ",Object(o.b)("a",{parentName:"p",href:"https://api.slack.com/interactivity/slash-commands"},"https://api.slack.com/interactivity/slash-commands")),Object(o.b)("p",null,"Follow the below steps to add slash command:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Goto ",Object(o.b)("a",{parentName:"li",href:"https://api.slack.com/apps/"},"https://api.slack.com/apps/")," > Select you App > Select the Slash Commands in left panel > Create New Command.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/iqVY0Y3.png",alt:null})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Fill the command, Description and add Request URL > SAVE Request URL: ",Object(o.b)("a",{parentName:"li",href:"https://app.yellowmessenger.com/integrations/slack/shortcuts/"},"https://app.yellowmessenger.com/integrations/slack/shortcuts/")," botID")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/HU5qrLT.png",alt:null})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Enable ",Object(o.b)("inlineCode",{parentName:"li"},"slack-shortcuts")," event in ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub/"},"Event Hub"),". If a journey is triggered using this event, the Event Payload can be accessed in builder using {{data.event.[]}}. Schema for this event would be:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n    "event": {\n        "code": "slack-shortcuts",\n        "data": {\n            "command": "/raiseticket",\n            "text": "pc is not working",\n            "message": "pc is not working",\n            "userId": "U01BXXX9A7"\n        }\n    }\n}\n')),Object(o.b)("h3",{id:"52-shortcuts"},"5.2 Shortcuts"),Object(o.b)("p",null,"Similar to Slash command, this is used to send command to the bot. Shortcut can be initiated from the ",Object(o.b)("strong",{parentName:"p"},"shortcuts")," button the message composer, or from within search. Reference: ",Object(o.b)("a",{parentName:"p",href:"https://api.slack.com/interactivity/shortcuts/using"},"https://api.slack.com/interactivity/shortcuts/using")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/2qIzPz0.png",alt:null})),Object(o.b)("p",null,"Follow the given steps to add shortcuts:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open api.slack.com > Interactivity & Shortcuts > Create new Shortcut.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/3nmEdaK.png",alt:null})),Object(o.b)("h2",{id:"6-supported-slack-features"},Object(o.b)("a",{name:"6"})," 6. Supported slack features"),Object(o.b)("p",null,"Yellow.ai supports the following slack features: "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Feature"),Object(o.b)("th",{parentName:"tr",align:null},"Supported?"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"2-way conversation"),Object(o.b)("td",{parentName:"tr",align:null},"yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Outbound messaging"),Object(o.b)("td",{parentName:"tr",align:null},"no")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Interactive Features"),Object(o.b)("td",{parentName:"tr",align:null},"no")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Slash Commands/Shortcuts"),Object(o.b)("td",{parentName:"tr",align:null},"yes")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Ephemeral Message"),Object(o.b)("td",{parentName:"tr",align:null},"no")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"V2 Notification API"),Object(o.b)("td",{parentName:"tr",align:null},"no")))))}b.isMDXComponent=!0},445:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),c=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=c.a.createContext({}),p=function(e){var t=c.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=p(a),u=n,d=b["".concat(r,".").concat(u)]||b[u]||m[u]||o;return a?c.a.createElement(d,l(l({ref:t},i),{},{components:a})):c.a.createElement(d,l({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var i=2;i<o;i++)r[i]=a[i];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);