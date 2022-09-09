(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{380:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),l=(n(0),n(406)),i=["components"],r={title:"Action Nodes",sidebar_label:"Actions"},c={unversionedId:"platform_concepts/studio/build/nodes/action-nodes",id:"platform_concepts/studio/build/nodes/action-nodes",isDocsHomePage:!1,title:"Action Nodes",description:"Actions are non-interactive nodes that can be used to perform a specific task (background action). These nodes will not display any messages to the user while having a conversation but they run the said tasks in the background.",source:"@site/docs/platform_concepts/studio/build/nodes/action-nodes.md",slug:"/platform_concepts/studio/build/nodes/action-nodes",permalink:"/docs/platform_concepts/studio/build/nodes/action-nodes",version:"current",sidebar_label:"Actions",sidebar:"platform_concepts",previous:{title:"Message Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/message-nodes"},next:{title:"Logic Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/logic-nodes"}},s=[{value:'<a name="gen"></a> 1. General',id:"1-general",children:[{value:"1.1 Send Event",id:"11-send-event",children:[]},{value:"1.2 Send OTP",id:"12-send-otp",children:[]},{value:"1.3 Verify OTP",id:"13-verify-otp",children:[]},{value:"1.4 Document Search",id:"14-document-search",children:[]},{value:"1.5 Execute Flow",id:"15-execute-flow",children:[]},{value:"1.6 Delay",id:"16-delay",children:[]},{value:"1.7 Raise Ticket",id:"17-raise-ticket",children:[]},{value:"1.8 Analytics",id:"18-analytics",children:[]},{value:"1.9 Generate PDF/ Image",id:"19-generate-pdf-image",children:[]},{value:"1.10 Data Formatter",id:"110-data-formatter",children:[]},{value:"1.11 Payment",id:"111-payment",children:[]},{value:"1.12 Switch Flow",id:"112-switch-flow",children:[]}]},{value:'<a name="cb"></a> 2. Code Based',id:"2-code-based",children:[{value:"2.1 API",id:"21-api",children:[]},{value:"2.2 Variables",id:"22-variables",children:[]},{value:"2.3 Database",id:"23-database",children:[]},{value:"2.4 Function",id:"24-function",children:[]},{value:"2.5 Modifier",id:"25-modifier",children:[]},{value:"2.6 Connect TransXT",id:"26-connect-transxt",children:[]}]},{value:'<a name="lang"></a>  3. Language &amp; Notification',id:"3-language--notification",children:[{value:"3.1 Set Language",id:"31-set-language",children:[]},{value:"3.2 Outbound Notification",id:"32-outbound-notification",children:[]},{value:"3.3 Notification Status",id:"33-notification-status",children:[]},{value:"3.4 Voice Call",id:"34-voice-call",children:[]}]},{value:'<a name="wf"></a> 4. Workflow nodes',id:"4-workflow-nodes",children:[{value:"4.1 Sync Database",id:"41-sync-database",children:[]}]}],b={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Actions are non-interactive nodes that can be used to perform a specific task (background action). These nodes will not display any messages to the user while having a conversation but they run the said tasks in the background.\nFollowing are the different types of action nodes: "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#gen"},"General")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#cb"},"Code Based")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#lang"},"Language & Notification")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#wf"},"Nodes available only for Workflow"))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"1-general"},Object(l.b)("a",{name:"gen"})," 1. General"),Object(l.b)("h3",{id:"11-send-event"},"1.1 Send Event"),Object(l.b)("p",null,"Record an event with this node.\nEvents are used to record specific actions or capture an important conversion, click ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub"},"here")," to learn more."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/6obnCs8.png",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"12-send-otp"},"1.2 Send OTP"),Object(l.b)("p",null,"Send OTP to a phone number with this node. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ask and Store the phone number in a variable. "),Object(l.b)("li",{parentName:"ul"},"Select the variable name (phone) on the Send OTP node. ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/SKvCnqm.png",alt:null})),Object(l.b)("p",null,"Following text message will be sent to the respective number. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/mDlVuCn.jpg",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"13-verify-otp"},"1.3 Verify OTP"),Object(l.b)("p",null,"Store the entered OTP as a variable and verify it with this node. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/hH8AAr0.png",alt:null})),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Success")," and ",Object(l.b)("strong",{parentName:"p"},"Fallback")," cases must be handled by connecting them to other nodes to continue the flow.\nThat is, node connected to success will be executed if the OTP is matched, otherwise, node connected to fallback will get executed. "),Object(l.b)("hr",null),Object(l.b)("h3",{id:"14-document-search"},"1.4 Document Search"),Object(l.b)("p",null,"Answer user queries referring to the available documents from your knowledge base using this node. "),Object(l.b)("img",{src:"https://i.imgur.com/cu1uk7M.png",alt:"drawing",width:"50%"}),Object(l.b)("p",null,"Document Search action node is used to answer user query at any point in the flow (or fallback) from documents uploaded in the Knowledge base (This node shows results from configured ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition"},"Document Cognition"),")."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/plCzZin.png",alt:null})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can select a variable containing a search query"),Object(l.b)("li",{parentName:"ul"},"You can also choose to add metadata filters (optional) to your query (the filters you tagged your documents with will show in dropdown). "),Object(l.b)("li",{parentName:"ul"},"You can branch flow from here based on whether any results were found in the documents (success) or not (failure)."),Object(l.b)("li",{parentName:"ul"},"There is no store output here, as the results are directly shown in carousels. "),Object(l.b)("li",{parentName:"ul"},"In node settings, you can configure the total no. of results shown, the total number of results per document and messages shown while showing results/reporting failure. ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/7qtaA9G.png",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"15-execute-flow"},"1.5 Execute Flow"),Object(l.b)("p",null,"Enter another flow with this node.\nFor example, in the below flow, based on the entered user reply the conversation gets directed to other flows. Once that flow is executed, control comes back to the current flow. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/se58HZm.png",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"16-delay"},"1.6 Delay"),Object(l.b)("p",null,"Add a time delay between components with this node.\nSelect the number of minutes/hours you want the bot to wait for before executing the next node."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/Bh3ly48.png",alt:null})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Alternative method is to set the delay on each of the nodes:\n",Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/t8cBzXn.png",alt:null}))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"17-raise-ticket"},"1.7 Raise Ticket"),Object(l.b)("p",null,"Raise ticket is used in order to connect bot user to the human agent.\nConnect the user to an agent after collecting info and query with this node.  "),Object(l.b)("p",null,"This simple UI node can be used to set up basic & advanced scenarios such as Working Hours, Agent Availability, voice/video calling, etc required to create a ticket."),Object(l.b)("h4",{id:"raise-ticket-outputs"},"Raise Ticket Outputs"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Ticket Closed")," - This essentially is bot behaviour after the Agent closes a ticket (i.e. s/he has resolved user query)."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Error")," - This can be used as a generic message in any case ticket creation is not successful. For customised messages, specific errors event hub can be configured. ")),Object(l.b)("h4",{id:"raise-ticket-response"},"Raise Ticket Response"),Object(l.b)("p",null,"Raise Ticket action node returns an object response as shown below. You can parse important information from this response to store it in a database or use it on another flow."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json"},'{\n  "tags": [],\n  "responded": false,\n  "ticketType": "livechat",\n  "ticketCsatScore": null,\n  "agentCsatScore": null,\n  "assignedByAdmin": false,\n  "manualAssignment": false,\n  "lastAgentMessageTime": null,\n  "lastUserMessageTime": null,\n  "lastBotMessageTime": null,\n  "userActiveStatus": null,\n  "agentActiveStatus": null,\n  "replyCount": 0,\n  "voiceCall": false,\n  "sipCall": false,\n  "agentCurrentHandlingTicketsCount": 0,\n  "autoStartCall": false,\n  "autoTranslate": false,\n  "autoDetectLanguage": false,\n  "_id": "6156df377b7bb14e16bae116",\n  "botId": "YOUR_BOT_ID_HERE",\n  "uid": "106265078787462873391306131746",\n  "source": "yellowmessenger",\n  "issue": "ISSUE_TITLE_HERE",\n  "priority": "MEDIUM",\n  "severity": "MEDIUM",\n  "contact": {\n    "phone": "1234567890",\n    "name": "CUSTOMER_NAME",\n    "email": "[community@yellow.ai](mailto:community@yellow.ai)"\n  },\n  "assignedTo": "community_yello_ai",\n  "sessionId": "5b8a665e69dbc5c451d88bf0",\n  "userLanguage": "en",\n  "ticketId": "100001",\n  "logs": [],\n  "timestamp": "2021-10-01T10:13:11.657Z",\n  "reassignmentLog": [],\n  "collaborators": [\n    {\n      "_id": "6156df377b7bb15d9fbae11a",\n      "username": "community_yello_ai",\n      "xmppUsername": "user_1624003758958",\n      "name": "yellow.ai Community"\n    }\n  ],\n  "agentLanguage": "en",\n  "status": "ASSIGNED",\n  "assignedTime": "2021-10-01T10:13:11.695Z",\n  "xmpp": "user_1624003758958"\n}\n')),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/br1Lrcf.png",alt:null})),Object(l.b)("p",null,"While raising a ticket, you can pass fields such as ",Object(l.b)("strong",{parentName:"p"},"Name")," , ",Object(l.b)("strong",{parentName:"p"},"Contact")," (Email/Phone Number), and ",Object(l.b)("strong",{parentName:"p"},"Query"),". Message after ticket assignment will be seen by the user on getting connected to the agent."),Object(l.b)("h4",{id:"advanced-options"},"Advanced Options"),Object(l.b)("p",null,"To provide additional information to the ticket."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/hWTC8FI.png",alt:null})),Object(l.b)("p",null,"As configured in Inbox Settings, ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/chats-configuration/tags"},"Tags")," and ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/chats-configuration/chat_custom_fields"},"Custom Fields")," will be visible in a multi-select dropdown(i.e. more than one options can be added to ticket)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Tags")," - Selected Tags from dropdown will be added to the extra details of the ticket (useful for agents to get a quick overview of the issue)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Department")," - Similar tickets can be assigned to relevant departments."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Priority")," - Denotes the priority of tickets from high, medium or low. (default priority is MEDIUM)"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Voice Call Options")," - Voice Call, SIP Call and Auto Start Call can be enabled."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Custom Fields")," - Based on the use case additional information collected by bot can be added to ticket. for example, in eCommerce Order ID, Payment Mode, Delivery date etc can be asked before connecting to the agent. Just like key value pairs, once a custom field is selected, an additional prompt will be seen.")),Object(l.b)("img",{src:"https://cdn.yellowmessenger.com/iE4ppldmrE7k1625673583277.png",alt:"drawing",width:"65%"}),Object(l.b)("h4",{id:"error-handling"},"Error Handling"),Object(l.b)("p",null,"Output of Raise Ticket Node dictates general behaviour for any error in creating a ticket. In most real life scenarios, it is preferred to show appropriate reasons to users as to why they cannot to an agent. "),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Once any specific event is active and configured, the corresponding flow will be given preference. Bot is never paused unless a ticket is in ASSIGNED state (i.e. Agent is interacting with the user).")),Object(l.b)("p",null,"Two steps to handle custom scenarios are as follows:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"In Event Hub, activate the custom inbox event. Scenarios that can be handled:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"All Available Agents Busy"),Object(l.b)("li",{parentName:"ul"},"All Available Agents Away"),Object(l.b)("li",{parentName:"ul"},"All Available Agents Offline"),Object(l.b)("li",{parentName:"ul"},"All Available Agents Limit Reached"),Object(l.b)("li",{parentName:"ul"},"Queue Not Enabled"),Object(l.b)("li",{parentName:"ul"},"Group Queue Not Enabled"),Object(l.b)("li",{parentName:"ul"},"Group Queue Limit Reached"),Object(l.b)("li",{parentName:"ul"},"Offline Ticketing Not Enabled"),Object(l.b)("li",{parentName:"ul"},"Offline Ticketing Not Enabled for Groups"),Object(l.b)("li",{parentName:"ul"},"Offline Ticket Queue Limit Reached")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Build a Flow with relevant events added in the Start Trigger.")),Object(l.b)("h4",{id:"working-hours"},"Working Hours"),Object(l.b)("p",null,"If the bot is supposed to respond with a different message outside of agent working hours, ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes"},"Logic Node"))," can be used. "),Object(l.b)("img",{src:"https://cdn.yellowmessenger.com/ciDa5Gn2ZzbK1625675537775.png",alt:"drawing",width:"60%"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The bot default timezone is considered while evaluating whether a user is outside working hours.")),Object(l.b)("p",null,"Inbox support auto translate feature out of the box so agents don't need to know the customer's language in order to help them. Just enable ",Object(l.b)("inlineCode",{parentName:"p"},"Translate User Message")," in the raise ticket node configuration to use this feature."),Object(l.b)("img",{src:"https://i.imgur.com/frCvffs.png",alt:"drawing",width:"40%"}),Object(l.b)("hr",null),Object(l.b)("h3",{id:"18-analytics"},"1.8 Analytics"),Object(l.b)("p",null,"Capture analytics with this node. "),Object(l.b)("p",null,"The analytics node can be used to  send analytics events and capture custom events at any point in the execution of a flow.  You can type the event name to push and select a value.\nThe data passed via the node will flow into the analytics table of Data Explorer inside the Insights section."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Event")," - This can be a static name or a variable which will be captured under the Events column on the analytics table."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Value")," - A variable needs to be selected here which will be captured under the eventValue column."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Keys")," - This is an optional field to capture metadata and will be created as a new column. Multiple columns can be created using keys."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Pro-tip"),": Using custom events, you can analyse user flow from one flow/step to another, filter by specific custom events, summarise by different user responses, visualise drop offs and conversion funnels, etc."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/GlLrwaa.png",alt:null})),Object(l.b)("p",null,"Open the Analytics page by clicking the Analytics Table link.  "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/BvNwdWt.jpg",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"19-generate-pdf-image"},"1.9 Generate PDF/ Image"),Object(l.b)("p",null,"Generate PDF/JPG/JPEG/PNG files having dynamic details with this node. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/eQvbk2I.png",alt:null})),Object(l.b)("p",null,"Steps to generate dynamic documents:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Upload a template document"),": This document should be in .docx format and have placeholder values wherever the dynamic data is to be inserted. The placeholder should be enclosed in single brackets, that is",Object(l.b)("inlineCode",{parentName:"li"},"{placeholdername}"),". For example, The company name is {company name}."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Map placeholder names to variables"),": Enter the placeholder name without the brackets in the left column and select a variable value in the right column. "),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Save to a variable"),": This can now be sent through the ",Object(l.b)("strong",{parentName:"li"},"Send file")," node. Simply choose the relevant variable from the ",Object(l.b)("strong",{parentName:"li"},"fetch from variable")," dropdown, it will send the dynamically generated file as a PDF to the user.")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"110-data-formatter"},"1.10 Data Formatter"),Object(l.b)("p",null,"Convert data from CSV to JSON with this node.\nyou can ask and store the CSV data in any variable and change it to JSON using the data formatter node. The formatted value can be stored in a variable of type array or object and be displayed using another node. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/X20qA35.png",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"111-payment"},"1.11 Payment"),Object(l.b)("p",null,"(Currently unavailable.)"),Object(l.b)("p",null,"Generate a payment link with this node. "),Object(l.b)("hr",null),Object(l.b)("h3",{id:"112-switch-flow"},"1.12 Switch Flow"),Object(l.b)("p",null,"(Currently unavailable.)"),Object(l.b)("p",null,"Quit the current flow and launch another flow with this node. Here, flow switches to another flow from that point (one cannot have any nodes post this)."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"2-code-based"},Object(l.b)("a",{name:"cb"})," 2. Code Based"),Object(l.b)("h3",{id:"21-api"},"2.1 API"),Object(l.b)("p",null,"API action node allows you to hit an API at that point of the flow, assign dynamic API parameters (if any) from user inputs and then store API response in a variable for further use. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/E0pFw7e.png",alt:null})),Object(l.b)("p",null,"In the above node, we selected an API (explore_car) to hit, and we provided value to the parameter using a variable.\nThen we store the whole response we will get from that API in a variable."),Object(l.b)("h4",{id:"function-optional-field"},"Function (optional field)"),Object(l.b)("p",null," Sometimes, an API response can be too big, or not in a proper format for us to be able to parse easily. (A function is not needed just to access a simple field of a JSON API response).\nIn those cases, we can write a ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/code#3-functions-in-flow"},"function")," to parse and transform API response according to our needs and return desirable response. "),Object(l.b)("h4",{id:"snippet-for-function"},"Snippet for function"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"return new Promise\n  (resolve => {\n\n    // For transfromation function tagged in API Node, To fetch api response\n    const response = ymLib.args.apiResponse;\n\n    // Your logic here \n\n    // Any value returned (or promisified value) - is stored in bot Variable storing API response\n    \n    return resolve(<parsed response>);\n  });         \n       \n\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note"),": To be able to invoke an API at a certain point, it should already be added/configured at the API management section of the platform. All APIs added there are available in dropdown of the action node. ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api"},"Click here")," to learn how to add APIs.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/dklBqQZ.jpg",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"22-variables"},"2.2 Variables"),Object(l.b)("p",null,"Set the value of one or more variables with this node. Learn how to create a variable ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"here"),"."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If the value is blank, it will be set to an empty string.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/FTDanHl.png",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"23-database"},"2.3 Database"),Object(l.b)("p",null,"Database action node helps you in performing simple insert, update and search operations on your ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/database"},"database tables"),". "),Object(l.b)("h4",{id:"1-insert"},"1. Insert"),Object(l.b)("p",null,"You select the insert operation to insert details in each column into any existing database table you select. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/Tb0EHym.png",alt:null})),Object(l.b)("p",null,"You can collect the entered information and store it in the new record (by adding a new record to the existing database table)."),Object(l.b)("h4",{id:"2-search"},"2. Search"),Object(l.b)("p",null,"You can perform the search operation for database node. "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Select Table"),": For searching, you can ",Object(l.b)("strong",{parentName:"li"},"select a table")," you want to perform a search on. "),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Add filter"),": You can also add filters to your search. "),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Sort Response"),": Sort the entered information. ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/Y92xIGt.png",alt:null})),Object(l.b)("h5",{id:"filter"},"Filter"),Object(l.b)("p",null,"Each of the following filter conditions are explained for the use-case when the user enters a date : 15/aug/2022"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Is")," : searches for the exact match. Eg: To search how many times 15/aug/2022 is entered. ")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Contains")," : This will be matched if it contains the given value. Eg: contains 08 (august), any date with 08 will be searched 10/aug/2022, 25/aug/2005, so on.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Does not contain"),": This will be matched if it does not contain the given value. Eg: Does not contain aug/2022, all the available dates that are not from August 2022 will be searched.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Range"),": In range you can enter a ",Object(l.b)("inlineCode",{parentName:"p"},"from")," and ",Object(l.b)("inlineCode",{parentName:"p"},"to")," value as a filter. Eg: date ",Object(l.b)("inlineCode",{parentName:"p"},"from"),":'10' ",Object(l.b)("inlineCode",{parentName:"p"},"to"),": '20'."))),Object(l.b)("h5",{id:"and--or-filter"},"And / Or Filter"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can add another filter which compares both the filter with and/or condition. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"And"),": Search will display results only when both the filters are true. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Or"),": Search will display results if either of the filters holds true. ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/nAU53aM.png",alt:null})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Output")," : You can sort the output based on a string type column (optional), modify the size of output (maximum no. of records to fetch) and store this result in a variable.")),Object(l.b)("h5",{id:"sort-response"},"Sort Response"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Select the column name you want to sort and click ASC/DEC (this will sort the info in the table in ascending/descending order based on that column).")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/GUMXUfd.png",alt:null})),Object(l.b)("h5",{id:"more-options"},"More Options"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Filter distinct")," : Select a column on which distinct must be performed (this removes all the duplicate records when retrieving the records from a table)."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Pagination")," :Page number and Size limit can be set here.")),Object(l.b)("h4",{id:"3-update"},"3. Update"),Object(l.b)("p",null,"Update option in the database node can be used to update values stored in the tables following the given steps:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Select update option in database node."),Object(l.b)("li",{parentName:"ol"},"Select the name of the table."),Object(l.b)("li",{parentName:"ol"},"You can add a where condition that acts as condition that has to be met in order to update the value."),Object(l.b)("li",{parentName:"ol"},"In Update with :")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In Fields add the name of column."),Object(l.b)("li",{parentName:"ul"},"In with value add the variable storing the value that you want to update current.")),Object(l.b)("img",{src:"https://i.imgur.com/o7lvCdC.png",alt:"drawing",width:"50%"}),Object(l.b)("hr",null),Object(l.b)("h3",{id:"24-function"},"2.4 Function"),Object(l.b)("p",null,"Execute custom code written for a function with this node. In this node, you can select the function you wish to execute and ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"variable")," to store the return value of a function (optional)."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/v4HNlCq.png",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"25-modifier"},"2.5 Modifier"),Object(l.b)("p",null,"Modify input variable or text to lowercase, capitalize, remove from the end, replace with\u2019 and store the modified value using this node.\nThis node can be used when you want to modify some user input before entering them to a Database or pass them to an API node, or fetch from API and show them to user etc."),Object(l.b)("p",null,"You can also test your series of modifiers by entering different input strings to check whether you are getting the desired output in the test window shown below. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/EbhyWqD.png",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"26-connect-transxt"},"2.6 Connect TransXT"),Object(l.b)("p",null,"(This node is Currently unavailable.)"),Object(l.b)("p",null,"Connect TransXT function with this node.  "),Object(l.b)("hr",null),Object(l.b)("h2",{id:"3-language--notification"},Object(l.b)("a",{name:"lang"}),"  3. Language & Notification"),Object(l.b)("h3",{id:"31-set-language"},"3.1 Set Language"),Object(l.b)("p",null,"Change the bot language to any of the configured languages using this node. "),Object(l.b)("p",null,"Set language action node takes only one input - variable containing ",Object(l.b)("strong",{parentName:"p"},"ISO code")," of language you wish to change to.  Arrange the nodes as follows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Configure a node to ask for a valid ISO code (only languages configured with the bot are allowed) and store the value in the variable. You can use a question node for this. ",Object(l.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported"},"Click here")," for the list of languages that we support."),Object(l.b)("li",{parentName:"ul"},"Connect the ",Object(l.b)("strong",{parentName:"li"},"Set Language node")," to the node that takes ISO input. Select the variable in which the previous reply is stored.\nThis language will be permanently set (currently set 2 days of expiry), unless it is being changed by same action node only.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/1jPB6iz.png",alt:null})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Language can only be changed to only if that language is configured in bot settings, otherwise, the node will fail. ")),Object(l.b)("hr",null),Object(l.b)("p",null,"Notification Nodes (Outbound Notification, Notification Status and Voice Call) are currently not in use.\nComing soon!"),Object(l.b)("h3",{id:"32-outbound-notification"},"3.2 Outbound Notification"),Object(l.b)("p",null,"Send outbound SMS, email, WhatsApp, and voice notification with this node. "),Object(l.b)("hr",null),Object(l.b)("h3",{id:"33-notification-status"},"3.3 Notification Status"),Object(l.b)("p",null,"Check outbound notification status with this node. "),Object(l.b)("hr",null),Object(l.b)("h3",{id:"34-voice-call"},"3.4 Voice Call"),Object(l.b)("p",null,"Make voice calls with this node."),Object(l.b)("hr",null),Object(l.b)("h2",{id:"4-workflow-nodes"},Object(l.b)("a",{name:"wf"})," 4. Workflow nodes"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"These nodes are only available when a flow is created as a ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys#3-workflow"},"workflow"),". ")),Object(l.b)("h3",{id:"41-sync-database"},"4.1 Sync Database"),Object(l.b)("p",null,'This node enables bulk operations like "Import, Insert, Update" on tables (of bigger databases) from external data sources through APIs instead of updating them manually. You can also schedule database updates.'),Object(l.b)("h4",{id:"usage"},"Usage"),Object(l.b)("p",null,"To setup a sync database node, follow the steps below: "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create a ",Object(l.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#sch-1"},"Schedule Event")," (if there is a requirement to schedule the database updates).")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/QjIIo2d.png",alt:null})),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Create an ",Object(l.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api"},"API"),". Create a table in the required format (template without any rows).")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/JeMgAdJ.jpg",alt:null})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Create/open a ",Object(l.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys#3-workflow"},"workflow"),". On the start node, select the scheduled event as the start trigger. ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/BpOb6o5.png",alt:null})),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Connect the start node to the Sync Database node. "),Object(l.b)("li",{parentName:"ol"},"Select the API, Table and appropriate action.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Insert"),": Adds rows from API call to the end of the table."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Update"),": Compares rows from API call to the existing table and checks if there is a match in Unique ID and updates those rows."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Import"),": Truncates existing table completely and replaces it with data from API call.")))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/SsJcSCp.png",alt:null})),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"When this is triggered, the node pulls all the data through API. ")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Data is supported only in CSV format.\nThere is no restriction on the file size.\nAll the rows will be imported, processed and sent to the selected table to perform the selected action.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"(Optional)")),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"Configure a parser function where individual row attributes could be accessed with a custom code: ")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"return new Promise(resolve => {\n  let record = ymLib.args.record;\n  /*\n    record is an object, representing a row. all values will be of type string, keys will be fetched from the csv-header.\n  */\n  resolve({\n    identifier: record.identifier,\n    category: record.category\n  });\n});\n")),Object(l.b)("ol",{start:8},Object(l.b)("li",{parentName:"ol"},'On the scheduled time, status of the sync can be viewed in "status" object.')),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"{\nsuccess: true,\nerror : 'if any, we show it',\nrecordsProcessed: 1230,\n}\n")))}u.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,h=u["".concat(i,".").concat(p)]||u[p]||d[p]||l;return n?o.a.createElement(h,r(r({ref:t},s),{},{components:n})):o.a.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var s=2;s<l;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);