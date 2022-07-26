(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{370:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(394)),l=["components"],r={title:"Action Nodes",sidebar_label:"Actions"},c={unversionedId:"platform_concepts/studio/build/nodes/action-nodes",id:"platform_concepts/studio/build/nodes/action-nodes",isDocsHomePage:!1,title:"Action Nodes",description:"Nodes- Actions",source:"@site/docs/platform_concepts/studio/build/nodes/action-nodes.md",slug:"/platform_concepts/studio/build/nodes/action-nodes",permalink:"/docs/platform_concepts/studio/build/nodes/action-nodes",version:"current",sidebar_label:"Actions",sidebar:"platform_concepts",previous:{title:"Prompt Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/prompt-nodes"},next:{title:"Logic Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/logic-nodes"}},s=[{value:"1. General",id:"1-general",children:[{value:"Send Event",id:"send-event",children:[]},{value:"Send OTP",id:"send-otp",children:[]},{value:"Verify OTP",id:"verify-otp",children:[]},{value:"Document Search",id:"document-search",children:[]},{value:"Execute Flow",id:"execute-flow",children:[]},{value:"Delay",id:"delay",children:[]},{value:"Raise Ticket",id:"raise-ticket",children:[]},{value:"Analytics",id:"analytics",children:[]},{value:"Generate PDF/ Image",id:"generate-pdf-image",children:[]},{value:"Data Formatter",id:"data-formatter",children:[]},{value:"Payment",id:"payment",children:[]},{value:"Switch Flow",id:"switch-flow",children:[]}]},{value:"2. Code Based",id:"2-code-based",children:[{value:"API",id:"api",children:[]},{value:"Variables",id:"variables",children:[]},{value:"Database",id:"database",children:[]},{value:"Function",id:"function",children:[]},{value:"Modifier",id:"modifier",children:[]},{value:"Connect TransXT",id:"connect-transxt",children:[]}]},{value:"3. Language",id:"3-language",children:[{value:"Set Language",id:"set-language",children:[]}]},{value:"4. Notification",id:"4-notification",children:[{value:"Outbound Notification",id:"outbound-notification",children:[]},{value:"Notification Status",id:"notification-status",children:[]},{value:"Voice Call",id:"voice-call",children:[]}]}],b={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"nodes--actions"},"Nodes- Actions"),Object(i.b)("p",null,"Actions are non-interactive nodes that can be used to perform a specific task (background action). "),Object(i.b)("h2",{id:"1-general"},"1. General"),Object(i.b)("h3",{id:"send-event"},"Send Event"),Object(i.b)("p",null,"Send an event with this node. Events are used to record a specific actions or capture an important conversion, click ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub"},"here")," to learn more."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/6obnCs8.png",alt:null})),Object(i.b)("h3",{id:"send-otp"},"Send OTP"),Object(i.b)("p",null,"Send OTP to a phone number with this node. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ask and Store the phone number in a variable. "),Object(i.b)("li",{parentName:"ul"},"Select the variable name (phone) on the Send OTP node. ")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/SKvCnqm.png",alt:null})),Object(i.b)("p",null,"Following text message will be sent to the respective number. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/mDlVuCn.jpg",alt:null})),Object(i.b)("h3",{id:"verify-otp"},"Verify OTP"),Object(i.b)("p",null,"Store the entered OTP as a variable and verify it with this node. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/hH8AAr0.png",alt:null})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Success")," and ",Object(i.b)("strong",{parentName:"p"},"Fallback")," cases must be handled by connecting them to other nodes to continue the flow."),Object(i.b)("h3",{id:"document-search"},"Document Search"),Object(i.b)("p",null,"Answer user query referring to the available documents from your knowledge base using this node. "),Object(i.b)("img",{src:"https://i.imgur.com/cu1uk7M.png",alt:"drawing",width:"50%"}),Object(i.b)("p",null,"Document Search action node is used to answer user query at any point in the flow (or fallback) from documents uploaded in the Knowledge base.  (This node shows results from ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition"},"Document Cognition"),")"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/plCzZin.png",alt:null})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can select a variable containing search query"),Object(i.b)("li",{parentName:"ul"},"You can also choose too add metadata filters (optional) to your query (the filters you tagged your documents with will show in dropdown). "),Object(i.b)("li",{parentName:"ul"},"You can branch flow from here based on whether any results were found in the documents (success) or not (failure)."),Object(i.b)("li",{parentName:"ul"},"There is no store output here, as the results are directly shown in carousels. "),Object(i.b)("li",{parentName:"ul"},"In node settings, you can configure total no. of results shown, total number of results per document and messages shown while showing results/reporting failure. ")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/7qtaA9G.png",alt:null})),Object(i.b)("h3",{id:"execute-flow"},"Execute Flow"),Object(i.b)("p",null,"Enter another flow with this node.\nFor example, in the below flow, based on the entered user reply the conversation gets directed to other flows. Once that flow is executed, control comes back to the current flow. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/se58HZm.png",alt:null})),Object(i.b)("h3",{id:"delay"},"Delay"),Object(i.b)("p",null,"Add a time delay between components with this node.\nSelect the number of minutes/hours you want the bot to wait for before moving on to the next node."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/Bh3ly48.png",alt:null})),Object(i.b)("p",null,"Alternative method is to set the dealy on each of the node: "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/t8cBzXn.png",alt:null})),Object(i.b)("h3",{id:"raise-ticket"},"Raise Ticket"),Object(i.b)("p",null,"Raise ticket is used in order to connect user to the human agent.\nConnect the user to an agent after collecting info and query with this node.  "),Object(i.b)("p",null,"This simple UI node can be used to setup basic & advanced scenarios such as Working Hours, Agent Availibiity, voice/video calling, etc required to create a ticket."),Object(i.b)("h4",{id:"raise-ticket-outputs"},"Raise Ticket Outputs"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Ticket Closed")," - This essentially is bot behaviour after the Agent closes a ticket (i.e. s/he has resolved user query)."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Error")," - This can be used as a generic message in any case ticket creation is not successful. For customised messages, specific errors event hub can be configured. ")),Object(i.b)("h4",{id:"raise-ticket-response"},"Raise Ticket Response"),Object(i.b)("p",null,"Raise Ticket action node returns an object response as shown below. You can parse important information from this response to store it in a database or use it an another journey."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "tags": [],\n  "responded": false,\n  "ticketType": "livechat",\n  "ticketCsatScore": null,\n  "agentCsatScore": null,\n  "assignedByAdmin": false,\n  "manualAssignment": false,\n  "lastAgentMessageTime": null,\n  "lastUserMessageTime": null,\n  "lastBotMessageTime": null,\n  "userActiveStatus": null,\n  "agentActiveStatus": null,\n  "replyCount": 0,\n  "voiceCall": false,\n  "sipCall": false,\n  "agentCurrentHandlingTicketsCount": 0,\n  "autoStartCall": false,\n  "autoTranslate": false,\n  "autoDetectLanguage": false,\n  "_id": "6156df377b7bb14e16bae116",\n  "botId": "YOUR_BOT_ID_HERE",\n  "uid": "106265078787462873391306131746",\n  "source": "yellowmessenger",\n  "issue": "ISSUE_TITLE_HERE",\n  "priority": "MEDIUM",\n  "severity": "MEDIUM",\n  "contact": {\n    "phone": "1234567890",\n    "name": "CUSTOMER_NAME",\n    "email": "[community@yellow.ai](mailto:community@yellow.ai)"\n  },\n  "assignedTo": "community_yello_ai",\n  "sessionId": "5b8a665e69dbc5c451d88bf0",\n  "userLanguage": "en",\n  "ticketId": "100001",\n  "logs": [],\n  "timestamp": "2021-10-01T10:13:11.657Z",\n  "reassignmentLog": [],\n  "collaborators": [\n    {\n      "_id": "6156df377b7bb15d9fbae11a",\n      "username": "community_yello_ai",\n      "xmppUsername": "user_1624003758958",\n      "name": "yellow.ai Community"\n    }\n  ],\n  "agentLanguage": "en",\n  "status": "ASSIGNED",\n  "assignedTime": "2021-10-01T10:13:11.695Z",\n  "xmpp": "user_1624003758958"\n}\n')),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/br1Lrcf.png",alt:null})),Object(i.b)("p",null,"While raising a ticket, you can pass fields such as ",Object(i.b)("strong",{parentName:"p"},"Name")," , ",Object(i.b)("strong",{parentName:"p"},"Contact")," (Email/Phone Number), and ",Object(i.b)("strong",{parentName:"p"},"Query"),". Message after ticket assignment will be seen by user on getting connected to the agent."),Object(i.b)("h4",{id:"advanced-options"},"Advanced Options"),Object(i.b)("p",null,"To provide additional information to the ticket."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/hWTC8FI.png",alt:null})),Object(i.b)("p",null,"As configured in Inbox Settings, ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/chats-configuration/tags"},"Tags")," and ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/chats-configuration/custom-fields"},"Custom Fields")," will be visible in a multi-select dropdown(i.e. more than one options can be added to ticket)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Tags")," - Selected Tags from dropdown will be added to the extra details of the ticket (useful for agents to get a quick overview of the issue)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Department")," - Similar tickets can be assigned to relevant departments."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Priority")," - Denotes the priority of ticket from high, medium or low. (default priority is MEDIUM)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Voice Call Options")," - Voice Call, SIP Call and Auto Start Call can be enabled."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Custom Fields")," - Based on the use case additonal information collected by bot can be added to ticket. for example, in ecommerce Order ID, Payment Mode, Delivery date etc can be asked before connecting to the agent. Just like key value pairs, once a custom field is selected, additional prompt will be seen.")),Object(i.b)("img",{src:"https://cdn.yellowmessenger.com/iE4ppldmrE7k1625673583277.png",alt:"drawing",width:"65%"}),Object(i.b)("h4",{id:"error-handling"},"Error Handling"),Object(i.b)("p",null,"Output of Raise Ticket Node dictates general behaviour for any error in creating a ticket. In most real life scenarios, it is preferred to show appropriate reason to user as to why they cannot to an agent. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Once any specific event is active and configured, the corresponding flow will be given preference. Bot is never paused unless ticket is in ASSIGNED state (i.e. Agent is interating with the user).")),Object(i.b)("p",null,"Follow two steps to handle custom scenarios -"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"In Event Hub, activate the custom inbox event. Scenarios that can be handled:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"All Available Agents Busy"),Object(i.b)("li",{parentName:"ul"},"All Available Agents Away"),Object(i.b)("li",{parentName:"ul"},"All Available Agents Offline"),Object(i.b)("li",{parentName:"ul"},"All Available Agents Limit Reached"),Object(i.b)("li",{parentName:"ul"},"Queue Not Enabled"),Object(i.b)("li",{parentName:"ul"},"Group Queue Not Enabled"),Object(i.b)("li",{parentName:"ul"},"Group Queue Limit Reached"),Object(i.b)("li",{parentName:"ul"},"Offline Ticketing Not Enabled"),Object(i.b)("li",{parentName:"ul"},"Offline Ticketing Not Enabled for Groups"),Object(i.b)("li",{parentName:"ul"},"Offline Ticket Queue Limit Reached")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Build a Flow with relevant event added in the Start Trigger.")),Object(i.b)("h4",{id:"working-hours"},"Working Hours"),Object(i.b)("p",null,"If bot is suppose to respond with a different message outside of agent working hours, ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes"},"Logic Node"))," can be used. "),Object(i.b)("img",{src:"https://cdn.yellowmessenger.com/ciDa5Gn2ZzbK1625675537775.png",alt:"drawing",width:"60%"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The bot default timezone considered while evalutaing whether a user is outside working hours.")),Object(i.b)("p",null,"Inbox support auto translate feature out of the box so agents don't need to know the customers langauge in order to help them. Just enable ",Object(i.b)("inlineCode",{parentName:"p"},"Translate User Message")," in the raise ticket node configuration to use this feature."),Object(i.b)("img",{src:"https://i.imgur.com/frCvffs.png",alt:"drawing",width:"40%"}),Object(i.b)("h3",{id:"analytics"},"Analytics"),Object(i.b)("p",null,"Capture analytics with this node. "),Object(i.b)("p",null,"Analytics node can be used to sent analytics events at any point in the execution of journey. You type the event name to push and select value."),Object(i.b)("p",null,"The analytics node can be used to capture custom events at any point in the execution of a journey. The data passed via the node will flow into the analytics table of Data Explorer inside the Insights section."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Event")," - This can be a static name or a variable which will be captured under the Events column on the analytics table."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Value")," - A variable needs to be selected here which will be captured under the eventValue column."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Keys")," - This is an optional field to capture metadata and will be created as a new column. Multiple columns can be created using keys."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pro-tip"),": Using custom events, you can analyse user flow from one journey/step to another, filter by specific custom events, summarise by different user responses, visualise drop offs and conversion funnels, etc."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/GlLrwaa.png",alt:null})),Object(i.b)("p",null,"Open the Analytics page by clicking Analytics Table link.  "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/BvNwdWt.jpg",alt:null})),Object(i.b)("h3",{id:"generate-pdf-image"},"Generate PDF/ Image"),Object(i.b)("p",null,"Generate PDF/JPG/JPEG/PNG files having dynamic details with this node. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/eQvbk2I.png",alt:null})),Object(i.b)("p",null,"Steps to generate dynamic documents:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Upload a template document"),": This document should be in .docx format and have placeholder values wherever the dynamic data is to be inserted. The placeholder should be enclosed in single brackets, that is",Object(i.b)("inlineCode",{parentName:"li"},"{placeholdername}"),". Example, The company name is {company name}"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Map placeholder names to variables"),": Enter the placeholder name without the brackets in the left column and select variable value in the right column. "),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Save to a variable"),": This can now be sent through the ",Object(i.b)("strong",{parentName:"li"},"Send file")," node. Simply choose the relevant variable from the ",Object(i.b)("strong",{parentName:"li"},"fetch from variable")," dropdown, it will send the dynamically generated file as a PDF to the user.")),Object(i.b)("h3",{id:"data-formatter"},"Data Formatter"),Object(i.b)("p",null,"Convert data from CSV to JSON with this node.\nyou can ask and store the CSV data in any variable and change it to JSON using data formatter node. The formatted value can be stored in variable of type array or object and be displayed using another node. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/X20qA35.png",alt:null})),Object(i.b)("h3",{id:"payment"},"Payment"),Object(i.b)("p",null,"(Currently unavailable.)"),Object(i.b)("p",null,"Generate a payment link with this node. "),Object(i.b)("h3",{id:"switch-flow"},"Switch Flow"),Object(i.b)("p",null,"(Currently unavailable.)"),Object(i.b)("p",null,"Quit the current flow and launch another flow with this node. Here, flow switches to another flow from that point (one cannot have any nodes post this)."),Object(i.b)("h2",{id:"2-code-based"},"2. Code Based"),Object(i.b)("h3",{id:"api"},"API"),Object(i.b)("p",null,"API action node allows you to hit an API at that point of the flow, assign dynamic API parameters (if any) from user inputs and then store API response in a variable for further use. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/E0pFw7e.png",alt:null})),Object(i.b)("p",null,"In above node, we selected an API (explore_car) to hit, we provided value to parameter using variable.\nThen we store the whole response we will get from that API in a variable."),Object(i.b)("h4",{id:"transformation-function-optional-field"},"Transformation function (optional field)"),Object(i.b)("p",null," Sometimes, an API response can be too big, or not in a proper format for us to be able to parse from easily. (A function is not needed just to access a simple field of a JSON API response).\nIn those cases, we can write a function to parse and transform API response according to our needs and return desirable response. "),Object(i.b)("h4",{id:"snippet-for-transformation-function"},"Snippet for Transformation function"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"return new Promise\n  (resolve => {\n\n    // For transfromation function tagged in API Node, To fetch api response\n    const response = ymLib.args.apiResponse;\n\n    // Your logic here \n\n    // Any value returned (or promisified value) - is stored in bot Variable storing API response\n    \n    return resolve(<parsed response>);\n  });         \n       \n\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),": To be able to invoke an API at certain point, it should already be added/configured at API management section of platform. All APIs added there are available in dropdown of the action node. ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api"},"Click here")," to learn how to add APIs.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/dklBqQZ.jpg",alt:null})),Object(i.b)("h3",{id:"variables"},"Variables"),Object(i.b)("p",null,"Set the value of one or more variables with this node. Learn how to create a variable ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"here"),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If the value is blank, it will be set to empty string.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/FTDanHl.png",alt:null})),Object(i.b)("h3",{id:"database"},"Database"),Object(i.b)("p",null,"Database action node helps you in perform simple insert, update and search operations on your ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/table/create-tables"},"database tables"),". "),Object(i.b)("h4",{id:"insert"},"Insert"),Object(i.b)("p",null,"You select insert operation to insert details against each column into any database table you select. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/Tb0EHym.png",alt:null})),Object(i.b)("h4",{id:"bulk-insert"},"Bulk Insert"),Object(i.b)("p",null,"You can also do bulk insert in database instead of just one row at a time. All you need on this node is to select a variable containing data you want to insert. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/eLowVBI.png",alt:null})),Object(i.b)("h4",{id:"search"},"Search"),Object(i.b)("p",null,"You can also perform search operation in database node. "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"For searching, you can ",Object(i.b)("strong",{parentName:"li"},"select a table")," you want to perform search on. "),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Add filter"),": You can also add filters to your search (optional). ")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/Y92xIGt.png",alt:null})),Object(i.b)("p",null," Each of the following filter conditions are explained with examples of what all will match with '",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"Model car")),"' string - "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Is/Is not")," : for exactly matching/exactly not matching with value given. Eg: 'Model car' will be matched "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"contains/does not contain")," : will be matched/omitted if it contains the given value. Eg: 'Model car', 'this is a Model car', 'Model car 101' all will be matched/omitted"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"contains any/does not contain any"),": this is like above, but here each word will be matched/omitted as contains instead of whole phrase. Eg: 'Model car', 'Model', 'car', 'this is a Model', 'car 242' etc all will be matched. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Range"),": In range you can enter a ",Object(i.b)("inlineCode",{parentName:"li"},"from")," and ",Object(i.b)("inlineCode",{parentName:"li"},"to")," value as a filter. Eg: prince ",Object(i.b)("inlineCode",{parentName:"li"},"from"),":'1000' ",Object(i.b)("inlineCode",{parentName:"li"},"to"),":5000.")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Output")," : You can sort the output based on a string type column (optional), modify the size of output (maximum no. of records to fetch) and store this result in a variable.")),Object(i.b)("h4",{id:"update"},"Update"),Object(i.b)("img",{src:"https://i.imgur.com/o7lvCdC.png",alt:"drawing",width:"50%"}),Object(i.b)("p",null,"Update option in the database node can be used to update values stored in the tables following the given steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Select update option in database node."),Object(i.b)("li",{parentName:"ol"},"Select the name of the table."),Object(i.b)("li",{parentName:"ol"},"You can add a where condition that acts as condition that has to be met in order to update the value."),Object(i.b)("li",{parentName:"ol"},"In Update with :")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In Fields add the name of column."),Object(i.b)("li",{parentName:"ul"},"In with value add the variable storing the value that you want to update current.")),Object(i.b)("h3",{id:"function"},"Function"),Object(i.b)("p",null,"Execute custom code written for a function with this node. In this node you can select the function you wish to execute and ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"variable")," to store the return value of function (optional)."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/v4HNlCq.png",alt:null})),Object(i.b)("h3",{id:"modifier"},"Modifier"),Object(i.b)("p",null,"Modify input variable or text to lowercase, capitalize, remove from end, replace with\u2019 and store the modified value using this node.\nThis node can be used when you want to modify some user input before entering them to a Database or pass to API node, or fetch from API and show to user etc."),Object(i.b)("p",null,"You can also test your series of modifiers by entering different input strings to check whether you are getting the desired output in test window shown below. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/EbhyWqD.png",alt:null})),Object(i.b)("h3",{id:"connect-transxt"},"Connect TransXT"),Object(i.b)("p",null,"(Currently unavailable.)"),Object(i.b)("p",null,"Connect TransXT function with this node.  "),Object(i.b)("h2",{id:"3-language"},"3. Language"),Object(i.b)("h3",{id:"set-language"},"Set Language"),Object(i.b)("p",null,"Change the bot language to any of the configured languages using this node. "),Object(i.b)("p",null,"Set language action node takes only one input - variable containing ISO code of language you wish to change to. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Configure a node to ask for a valid ISO code (only languages configured with the bot are allowed) to change the language and store the variable. ",Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported"},"Click Here")," for the list of languages that we support."),Object(i.b)("li",{parentName:"ul"},"Connect the Set Language node to the node that takes ISO input. Select the variable in which the previous reply is stored.\nThis language will be permanently set (currently set 2 days of expiry), unless it is being changed by same action node only.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/1jPB6iz.png",alt:null})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Language can only be changed to only if that language is configured in bot settings, otherwise the node will fail. ")),Object(i.b)("h2",{id:"4-notification"},"4. Notification"),Object(i.b)("p",null,"(Notification Nodes are currently not in use. Coming soon!)"),Object(i.b)("h3",{id:"outbound-notification"},"Outbound Notification"),Object(i.b)("p",null,"Send outbound SMS, email, whatsapp, voice notification with this node. "),Object(i.b)("h3",{id:"notification-status"},"Notification Status"),Object(i.b)("p",null,"Check outbound notification status with this node. "),Object(i.b)("h3",{id:"voice-call"},"Voice Call"),Object(i.b)("p",null,"Make voice calls with this node. "))}u.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?o.a.createElement(m,r(r({ref:t},s),{},{components:n})):o.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);