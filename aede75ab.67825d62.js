(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{314:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),l=(n(0),n(446)),b=["components"],i={title:"Custom Live Agent API Specification",sidebar_label:"Custom Live Agent"},c={unversionedId:"platform_concepts/appConfiguration/customliveagent",id:"platform_concepts/appConfiguration/customliveagent",isDocsHomePage:!1,title:"Custom Live Agent API Specification",description:"This document elaborates the integration approach for a custom live agent to integrate with Yellow. The major use cases covered in this document are:",source:"@site/docs/platform_concepts/appConfiguration/customliveagent.md",slug:"/platform_concepts/appConfiguration/customliveagent",permalink:"/docs/platform_concepts/appConfiguration/customliveagent",version:"current",sidebar_label:"Custom Live Agent",sidebar:"platform_concepts",previous:{title:"Integrate Yellow with CleverTap",permalink:"/docs/platform_concepts/appConfiguration/clevertap"},next:{title:"Freshchat",permalink:"/docs/platform_concepts/appConfiguration/freshchat"}},o=[{value:"1. Design Principles",id:"1-design-principles",children:[{value:"1.1 Workflow Diagram",id:"11-workflow-diagram",children:[]}]},{value:"2. Business Use Cases",id:"2-business-use-cases",children:[{value:"2.1 Initiate Conversations",id:"21-initiate-conversations",children:[]},{value:"2.2 Enable conversation",id:"22-enable-conversation",children:[]}]},{value:"3. API Specification",id:"3-api-specification",children:[{value:"3.1 Create Ticket",id:"31-create-ticket",children:[]},{value:"3.2 Send Message to Agent",id:"32-send-message-to-agent",children:[]},{value:"3.3 Send User Media to Agent",id:"33-send-user-media-to-agent",children:[]}]},{value:"4. Webhook",id:"4-webhook",children:[{value:"4.1 Text Message Sent by Agent",id:"41-text-message-sent-by-agent",children:[]},{value:"4.2 Media message sent by the Agent",id:"42-media-message-sent-by-the-agent",children:[]},{value:"4.3 Ticket Assignment to Agent",id:"43-ticket-assignment-to-agent",children:[]},{value:"4.4 Closure of ticket",id:"44-closure-of-ticket",children:[]},{value:"4.5 Agent Logout during the conversation (After Working hours)",id:"45-agent-logout-during-the-conversation-after-working-hours",children:[]},{value:"4.6. Agent Logged In but not active in Conversation",id:"46-agent-logged-in-but-not-active-in-conversation",children:[]}]}],s={toc:o};function d(e){var t=e.components,n=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This document elaborates the integration approach for a custom live agent to integrate with Yellow. The major use cases covered in this document are:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"End Customer wants to talk to an agent"),Object(l.b)("li",{parentName:"ol"},"End Customer sends Text/Image/Video/PDF ( or other media) to the Agent"),Object(l.b)("li",{parentName:"ol"},"The interaction details updated to End Customer through the ticket ID & details"),Object(l.b)("li",{parentName:"ol"},"Additional information about Agent Availability ( Queue Status, Typing status etc)"),Object(l.b)("li",{parentName:"ol"},"Agent connection established"),Object(l.b)("li",{parentName:"ol"},"Two Way communication between the end customer and agent"),Object(l.b)("li",{parentName:"ol"},"Closure of the ticket")),Object(l.b)("h2",{id:"1-design-principles"},"1. Design Principles"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The Integration approach is defined to be channel agnostic, the 3rd party system should consider Yellow as the channel and Yellow will ensure that end customer is able to connect to Agent from any channel ( Web, WhatsApp etc.) "),Object(l.b)("li",{parentName:"ol"},"Details of the end customer\u2019s channel will be presented to the 3rd party system for proper reconciliation. "),Object(l.b)("li",{parentName:"ol"},"The receiving system should be able to define custom parameters for their consumption and as needed for the business use case. ")),Object(l.b)("h3",{id:"11-workflow-diagram"},"1.1 Workflow Diagram"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/FCyWNDp.png",alt:null})),Object(l.b)("h2",{id:"2-business-use-cases"},"2. Business Use Cases"),Object(l.b)("h3",{id:"21-initiate-conversations"},"2.1 Initiate Conversations"),Object(l.b)("p",null,"For an end customer, in the bot experience the following actions take place for connecting to a live agent:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Bot gives an option to connect to a Live Agent"),Object(l.b)("li",{parentName:"ol"},"Bot goes into a paused state once the agent is connect"),Object(l.b)("li",{parentName:"ol"},"Once the bot is in paused state , the 2-way communication between the agent and end -customer takes place. "),Object(l.b)("li",{parentName:"ol"},"Once the agent ends the conversation, the bot takes over. ")),Object(l.b)("p",null,"The following is the expectation of business use cases to be supported by the 3rd Party Tool for enabling this conversation:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Use case"),Object(l.b)("th",{parentName:"tr",align:null},"Remark"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Send Message {text + media}"),Object(l.b)("td",{parentName:"tr",align:null},"Chat history will be present in the first message as link"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Send typing event"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Create Ticket"),Object(l.b)("td",{parentName:"tr",align:null},"Response should contain ticketID: Scenarios ( Ticket Lifecycle) 1. Request is in queue > 2. Ticket is created & OPEN > 3. Ticket is created & ASSIGNED"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"User details {Channel ID, Sender ID, Unique ID}"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Transfer to a particular group"),Object(l.b)("td",{parentName:"tr",align:null},"Department wise, as per business need"),Object(l.b)("td",{parentName:"tr",align:null},"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Ability to pass custom parameter"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Is User Active"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Custom Parameters"),Object(l.b)("td",{parentName:"tr",align:null},"Ability to pass custom parameters as per business need"),Object(l.b)("td",{parentName:"tr",align:null},"yes")))),Object(l.b)("h3",{id:"22-enable-conversation"},"2.2 Enable conversation"),Object(l.b)("p",null,"The below use cases depict the use cases & details required during a 2-way communication between the 3rd party system & Yellow."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"For this, Yellow\u2019s webhook must be configured at 3rd party systems end."))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Use case"),Object(l.b)("th",{parentName:"tr",align:null},"Remark"),Object(l.b)("th",{parentName:"tr",align:null},"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Event name/code specification"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Agent message {text + media}"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Agent assigned{along with agent details}"),Object(l.b)("td",{parentName:"tr",align:null},"Agent details should be received; like agent name, department"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Queue Positioning"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Closed ticket"),Object(l.b)("td",{parentName:"tr",align:null},"Closed ticket event"),Object(l.b)("td",{parentName:"tr",align:null},"yes")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Updation of any ticket detail (e.g. transferred to another agent)"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"no")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Is Agent active?"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"no")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"3-api-specification"},"3. API Specification"),Object(l.b)("p",null,"The header that will be common across all the APIs which the third party needs to create is an auth token:-"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Authorization: {{token}}\nContent-type: application/json\n")),Object(l.b)("h3",{id:"31-create-ticket"},"3.1 Create Ticket"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"URL"),Object(l.b)("th",{parentName:"tr",align:null},"https://{{domainName}}/createTicket/{{companyName}}"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"METHOD"),Object(l.b)("td",{parentName:"tr",align:null},"POST")))),Object(l.b)("h4",{id:"body-parameters"},"Body Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Data type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"senderId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier of the user generated by Yellow.AI"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"messageId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier of every message sent"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"source"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Channel from where the message can be sent"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"conversationId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier of this conversation"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"userName"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Name of the user/customer"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"userMobile"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Mobile number of the user. Accepts 10 digit mobile number"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"userEmail"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Email Id of the user"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"conversationHistory"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"The URL of the conversation prior to connecting to agent"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ticketPriority"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Priority of the ticket. Possible values low/medium/high"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ticketCategory"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Category to which a ticket may belong"),Object(l.b)("td",{parentName:"tr",align:null},"N")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ticketGroupId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"If we want the ticket to get assigned to a particular group of agents, then we need to add this"),Object(l.b)("td",{parentName:"tr",align:null},"N")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"customFields"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"If any custom key value pairs need to be passed, we need to use this. The data type of the values can be either string/number/boolean/object"),Object(l.b)("td",{parentName:"tr",align:null},"N")))),Object(l.b)("h4",{id:"curl"},"CURL"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'curl --location --request POST \'https://{{domainName}}/createTicket/{{companyName}}\' \\\n--header \'Authorization: Bearer {{token}}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "body": {\n        "user": {\n            "userName": "Shubh",\n            "userMobile": "99999999",\n            "senderId": "11111111211111",\n            "userEmail": "test@gmail.com"\n        },\n        "ticket": {\n            "conversationHistory": "https://google.com",\n    "source": "web",\n            "ticketPriority": "medium",\n            "ticketCategory": "sales",\n            "conversationId": "efrfrfrfr",\n            "ticketGroupId":  "14343", \n            "customFields": {}\n           }\n        }\n}\'\n\n')),Object(l.b)("h4",{id:"response"},"Response"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"{\nstatus: success/failure\ndata: {ticketId: 25633, isAgentAvailable: true/false, isQueued: true/false }\nmessage: <Description of Error/ Success Message>\n} \n \n")),Object(l.b)("h3",{id:"32-send-message-to-agent"},"3.2 Send Message to Agent"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"URL"),Object(l.b)("th",{parentName:"tr",align:null},"https://{{domainName}}/sendMessage/{{companyName}}"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"METHOD"),Object(l.b)("td",{parentName:"tr",align:null},"POST")))),Object(l.b)("h4",{id:"body-parameters-1"},"Body Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Data type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"senderId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier of the user generated by Yellow.ai"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"message"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Message sent by the user"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"messageId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier of every message sent"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ticketId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Generated ticketId from API 1"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"source"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Channel from where the message can be sent"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"conversationId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier of this conversation"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"messageType"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Type of the message sent. The value will be text"),Object(l.b)("td",{parentName:"tr",align:null},"Y")))),Object(l.b)("h4",{id:"curl-1"},"CURL"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"curl --location --request POST 'https://{{domainName}}/sendMessage/{{companyName}}' \\\n--header 'Authorization: Bearer {{token}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"body\": {\n        \u201cuser\u201d:{\n         \u201csenderId\u201d: \u201c11111\u201d\n         }\n        \"ticket\": {\n           \u201cmessageType\u201d: \u201ctext\u201d,\n            \u201cmessage\u201d: \u201chello\u201d\n            \u201cmessageId\u201d: \u201cefefe-eefe-fefef-feefefe\u201d,\n            \u201cticketId\u201d: \u201c275333\u201d,\n             \u201csource\u201d: \u201cweb\u201d,\n            \u201cconversationId\u201d : \u201cyguyegdee\u201d\n           }\n        }\n}'\n\n")),Object(l.b)("h4",{id:"response-1"},"Response"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"{\n\u201cstatus\u201d: \u201csuccess/failure\u201d\n\u201cdata\u201d: {ticketId: 25633}\n\u201cmessage\u201d: \u201c<Description of Error/ Success Message>\u201d\n}\n\n")),Object(l.b)("h3",{id:"33-send-user-media-to-agent"},"3.3 Send User Media to Agent"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"URL"),Object(l.b)("th",{parentName:"tr",align:null},"https://{{domainName}}/sendMedia/{{companyName}}"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"METHOD"),Object(l.b)("td",{parentName:"tr",align:null},"POST")))),Object(l.b)("h4",{id:"body-parameters-2"},"Body Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Name"),Object(l.b)("th",{parentName:"tr",align:null},"Data type"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"senderId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier of the user generated by Yellow.AI"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"mediaJson"),Object(l.b)("td",{parentName:"tr",align:null},"object"),Object(l.b)("td",{parentName:"tr",align:null},"Has two properties. The first property is \u201ctype\u201d, and its possible values are image/video/file, the second property is \u201curl\u201d, which will have the url of the media"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"messageId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier of every message sent"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ticketId"),Object(l.b)("td",{parentName:"tr",align:null},"number"),Object(l.b)("td",{parentName:"tr",align:null},"Generated ticketId from API 1"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"source"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Channel from where the message can be sent"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"conversationId"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Unique identifier of this conversation"),Object(l.b)("td",{parentName:"tr",align:null},"Y")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"messageType"),Object(l.b)("td",{parentName:"tr",align:null},"string"),Object(l.b)("td",{parentName:"tr",align:null},"Type of the message sent. The value will be media"),Object(l.b)("td",{parentName:"tr",align:null},"Y")))),Object(l.b)("h4",{id:"curl-2"},"CURL"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"curl --location --request POST 'https://{{domainName}}/sendMedia/{{companyName}}' \\\n--header 'Authorization: Bearer {{token}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"body\": {\n        \u201cuser\u201d:{\n         \u201csenderId\u201d: \u201c11111\u201d\n         }\n        \"ticket\": {\n           \u201cmessageType\u201d: \u201cmedia\u201d,\n            \u201cmediaJson\u201d: {\u201ctype\u201d:\u201dimage/video/file\u201d,\u201curl\u201d: \u201chttps://image.com\u201d},\n            \u201cmessageId\u201d: \u201cefefe-eefe-fefef-feefefe\u201d,\n            \u201cticketId\u201d: \u201c275333\u201d,\n             \u201csource\u201d: \u201cweb\u201d,\n            \u201cconversationId\u201d : \u201cyguyegdee\u201d\n           }\n        }\n}'\n\n\n")),Object(l.b)("h4",{id:"response-2"},"Response"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"{\n\u201cstatus\u201d: \u201csuccess/failure\u201d,\n\u201cdata\u201d: {ticketId: 25633}\n\u201cmessage\u201d: \u201c<Description of Error/ Success Message>\u201d\n}\n\n")),Object(l.b)("h2",{id:"4-webhook"},"4. Webhook"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"URL"),Object(l.b)("th",{parentName:"tr",align:null},"https://{{domainName}}/sendMedia/{{companyName}}"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Method"),Object(l.b)("td",{parentName:"tr",align:null},"POST")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"x-auth-token"),Object(l.b)("td",{parentName:"tr",align:null},"Will be provided by yellow")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Response Code"),Object(l.b)("td",{parentName:"tr",align:null},"200")))),Object(l.b)("h3",{id:"41-text-message-sent-by-agent"},"4.1 Text Message Sent by Agent"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Event")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Text message sent by agent")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "payload-received-from-agent"\n"message": {\n"type": "text\u201d,\n"payLoad": {\n"content": "Hello"\n}\n}\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454\n}\n\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n\u201cstatus\u201d: \u201csuccess\u201d,\ndata: {"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "payload-received-from-agent"\n"message": {\n"type": "text\u201d,\n"payLoad": {\n"content": "Hello"\n}\n}\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454\n}\n},\nmessage: <Description of Error/ Success Message>\n}\n\n')),Object(l.b)("h3",{id:"42-media-message-sent-by-the-agent"},"4.2 Media message sent by the Agent"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Event")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Media message sent by the Agent ")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "payload-received-from-agent"\n"message": {\n"type": "media",\n"payLoad": {\n"content": {\u201ctype\u201d: \u201cimage/video/file\u201d, \u201cmediaUrl\u201d: \u201chttps://www.google.com\u201d}\n}\n}\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454\n}\n\n\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\nstatus: success\ndata: {"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "payload-received-from-agent"\n"message": {\n"type": "media\u201d,\n"payLoad": {\n"content": {\u201ctype\u201d: \u201cimage/video/file\u201d, \u201cmediaUrl\u201d: \u201chttps://www.google.com\u201d}\n}\n}\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454\n}\n},\nmessage: <Description of Error/ Success Message>\n}\n\n\n')),Object(l.b)("h3",{id:"43-ticket-assignment-to-agent"},"4.3 Ticket Assignment to Agent"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Event")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Ticket Assignment to Agent ")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "ticket-assigned"\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454\n}\n\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\nstatus: success\ndata: {"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "ticket-assigned"\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454\n}\nmessage: <Description of Error/ Success Message>\n}\n\n')),Object(l.b)("h3",{id:"44-closure-of-ticket"},"4.4 Closure of ticket"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Event")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Closure of ticket")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "ticket-closed"\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454,\n"ticketResolvedTime": 4545454\n}\n\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\nstatus: success\ndata: {\n"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "ticket-closed"\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454,\n"ticketResolvedTime": 4545454}\nmessage: <Description of Error/ Success Message>\n}\n\n')),Object(l.b)("h3",{id:"45-agent-logout-during-the-conversation-after-working-hours"},"4.5 Agent Logout during the conversation (After Working hours)"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Event")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Agent Logout during the conversation (After Working hours)")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "agent-logout"\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454\n}\n\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\nstatus: success\ndata: {"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "agent-logout"\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454}\nmessage: <Description of Error/ Success Message>\n}\n\n')),Object(l.b)("h3",{id:"46-agent-logged-in-but-not-active-in-conversation"},"4.6. Agent Logged In but not active in Conversation"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Event")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Agent Logged In but not active in Conversation ")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Payload")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "agent-inactivity"\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454,\n"inactivityDuration": 120,\n"inactivityReason": "Network issue"\n}\n\n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Response")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\nstatus: success/failure\ndata: {"ticketId": 354545,\n"senderId": "efrf",\n"source": "erfr4rf4"\n"event": "agent-inactivity"\n"agentName": "gefgeuf",\n"agentId": "locobuzzagentId",\n"ticketAssignedTime": 3545454,\n"inactivityDuration": 120,\n"inactivityReason": "Network issue"}\nmessage: <Description of Error/ Success Message>\n}\n\n')))}d.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(b,".").concat(m)]||d[m]||p[m]||l;return n?r.a.createElement(u,i(i({ref:t},o),{},{components:n})):r.a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var o=2;o<l;o++)b[o]=n[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);