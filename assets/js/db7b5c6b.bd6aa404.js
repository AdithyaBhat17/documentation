"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[3593],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(n),g=r,c=s["".concat(m,".").concat(g)]||s[g]||u[g]||l;return n?a.createElement(c,i(i({ref:e},p),{},{components:n})):a.createElement(c,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},69523:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"MS Outlook Calendar",sidebar_label:"MS Outlook Calendar"},m=void 0,d={unversionedId:"platform_concepts/appConfiguration/outlook-calendar",id:"platform_concepts/appConfiguration/outlook-calendar",title:"MS Outlook Calendar",description:"Yellow.ai integrates with MS Outlook Calendar to make it easy for you to manage your schedule. With this integration, you can create, reschedule, retrieve, and cancel online meetings and events. You can also see when others are free or busy and suggest times that work best for everyone. Lastly, you can attach files to events for easy organization.",source:"@site/docs/platform_concepts/appConfiguration/outlook-calendar.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/outlook-calendar",permalink:"/docs/platform_concepts/appConfiguration/outlook-calendar",draft:!1,tags:[],version:"current",frontMatter:{title:"MS Outlook Calendar",sidebar_label:"MS Outlook Calendar"},sidebar:"platform_concepts",previous:{title:"Okta",permalink:"/docs/platform_concepts/appConfiguration/okta"},next:{title:"SFTP",permalink:"/docs/platform_concepts/appConfiguration/sftp"}},p={},s=[{value:"1. Connect MS Outlook with Yellow.ai",id:"1-connect-ms-outlook-with-yellowai",level:2},{value:"1.1 Register an app on Azure Active Directory",id:"11-register-an-app-on-azure-active-directory",level:3},{value:"1.3 Enable MS Outlook on Yellow.ai",id:"13-enable-ms-outlook-on-yellowai",level:3},{value:"2. Use-cases",id:"2-use-cases",level:2},{value:"2.1 Create calendar event",id:"21-create-calendar-event",level:3},{value:"2.2 Get calendar events",id:"22-get-calendar-events",level:3},{value:"2.3 Recommend meeting slots",id:"23-recommend-meeting-slots",level:3},{value:"2.4 Update an event",id:"24-update-an-event",level:3},{value:"2.5 Add an attachment",id:"25-add-an-attachment",level:3},{value:"2.6 Cancel an event",id:"26-cancel-an-event",level:3},{value:"2.7 Get event details",id:"27-get-event-details",level:3},{value:"2.8 Get busy time slots",id:"28-get-busy-time-slots",level:3}],u={toc:s};function g(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Yellow.ai integrates with MS Outlook Calendar to make it easy for you to manage your schedule. With this integration, you can create, reschedule, retrieve, and cancel online meetings and events. You can also see when others are free or busy and suggest times that work best for everyone. Lastly, you can attach files to events for easy organization."),(0,l.kt)("h2",{id:"1-connect-ms-outlook-with-yellowai"},"1. Connect MS Outlook with Yellow.ai"),(0,l.kt)("p",null,"Yellow.ai integrates with the Outlook calendar using the OAuth 2.0  authentication. During integration, Yellow.ai guides you to login page of the Microsoft Identity provider, where you must log in to their work account and provide consent to access their calendar data. Follow the below- mentioned steps to connect your MS Outlook account with your yellow.ai bot. "),(0,l.kt)("h3",{id:"11-register-an-app-on-azure-active-directory"},"1.1 Register an app on Azure Active Directory"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to portal.azure.com > ",(0,l.kt)("strong",{parentName:"li"},"Active Directory")," > ",(0,l.kt)("strong",{parentName:"li"},"App Registrations"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/Oi2mf5O.png",alt:null})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"New Registration")," and provide the details for the new app.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/bF6XPpu.png",alt:null})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"To get the Redirect URI details, retrieve the redirect URL from the Outlook Calendar integration card in the Yellow.ai platform integration module. For e.g., ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.yellow.ai/integrations/genericIntegration/oauth/outlook-calendar"},"https://cloud.yellow.ai/integrations/genericIntegration/oauth/outlook-calendar"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/1i0Z6MV.png",alt:null})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Navigate to ",(0,l.kt)("strong",{parentName:"li"},"Certificates & Secrets")," > ",(0,l.kt)("strong",{parentName:"li"},"New client secret")," > Fill the description & select ",(0,l.kt)("strong",{parentName:"li"},"Expires")," to your convenience (recommended 6 months), click  ",(0,l.kt)("strong",{parentName:"li"},"Add")," button, a ",(0,l.kt)("strong",{parentName:"li"},"Client Secret")," will be generated, save the value of the Client Secret.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/vpA762g.png",alt:null})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Under ",(0,l.kt)("strong",{parentName:"li"},"API Permissions")," > ",(0,l.kt)("strong",{parentName:"li"},"Add a permission")," -> ",(0,l.kt)("strong",{parentName:"li"},"Select Microsoft Graph")," -> ",(0,l.kt)("strong",{parentName:"li"},"Delegated permission")," -> search and add the required permissions.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/ctnoNzO.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Permission scopes of Outlook Calendar:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Scope"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Calendars.ReadWrite"),(0,l.kt)("td",{parentName:"tr",align:null},"The app can create, read, update, and delete events in the user's calendars with the user's permission.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Calendars.ReadWrite.Shared"),(0,l.kt)("td",{parentName:"tr",align:null},"The application can perform operations such as creating, reading, updating, and deleting events in all calendars of the organization that the user has access to, including delegate and shared calendars.")))),(0,l.kt)("h3",{id:"13-enable-ms-outlook-on-yellowai"},"1.3 Enable MS Outlook on Yellow.ai"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to cloud.yellow.ai > ",(0,l.kt)("strong",{parentName:"li"},"Integrations"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/P1HQiDR.png",alt:null})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Search for ",(0,l.kt)("strong",{parentName:"li"},"Outlook calendar")," and enter the obtained ",(0,l.kt)("strong",{parentName:"li"},"Tenant ID"),", ",(0,l.kt)("strong",{parentName:"li"},"Client ID")," and ",(0,l.kt)("strong",{parentName:"li"},"Client Secret")," from the Azure portal in the integration card and click ",(0,l.kt)("strong",{parentName:"li"},"Connect"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/WRvwNX2.png",alt:null})),(0,l.kt)("p",null," You'll need to log in to your Microsoft work account and give the app permission to access your calendar data. "),(0,l.kt)("img",{src:"https://i.imgur.com/Rv7tLpj.png",alt:"drawing",width:"60%"}),(0,l.kt)("h2",{id:"2-use-cases"},"2. Use-cases"),(0,l.kt)("p",null,"This integration currently supports the following use-cases:"),(0,l.kt)("h3",{id:"21-create-calendar-event"},"2.1 Create calendar event"),(0,l.kt)("p",null,"This actions allows you to create online events in your default calendar, specifying the date, time, and time zone. Invitations are automatically sent to attendees' Outlook inboxes. Recurring events can also be set up."),(0,l.kt)("img",{src:"https://i.imgur.com/YM0695x.png",alt:"drawing",width:"60%"}),(0,l.kt)("img",{src:"https://i.imgur.com/FJuP7u7.png",alt:"drawing",width:"60%"}),(0,l.kt)("p",null,"The table below has sample inputs, data types and remarks of the fields for this action."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Datatype"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Start time"),(0,l.kt)("td",{parentName:"tr",align:null},'{"dateTime":"2023-04-11T09:00:00.000","timeZone":"India Standard Time"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Object Type"),(0,l.kt)("td",{parentName:"tr",align:null},"The start date, time, and time zone of the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"End time"),(0,l.kt)("td",{parentName:"tr",align:null},'{"dateTime":"2023-04-11T10:00:00.000","timeZone":"India standard Time"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Object Type"),(0,l.kt)("td",{parentName:"tr",align:null},"The date, time, and time zone when the event concludes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Can invitees propose a new time?"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"The meeting organizer has enabled the option for invitees to suggest an alternative time while responding.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Attendee details"),(0,l.kt)("td",{parentName:"tr",align:null},'[{"emailAddress":{"address":"samanthab@contoso.onmicrosoft.com","name":"Pradeep"},"type":"required"}]'),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of people attending the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Meeting description"),(0,l.kt)("td",{parentName:"tr",align:null},'{"contentType":"HTML","content":"Scrum"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Object Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Meeting agenda")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Importance of the event"),(0,l.kt)("td",{parentName:"tr",align:null},"High"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The priority of the event, the possible values are: low, normal, high.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Recurrence"),(0,l.kt)("td",{parentName:"tr",align:null},'{"pattern":{"type":"daily","interval":3},"range":{"type":"endDate","startDate":"2023-04-11"}}'),(0,l.kt)("td",{parentName:"tr",align:null},"Object Type"),(0,l.kt)("td",{parentName:"tr",align:null},"The pattern of how often the event will occur.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Meeting title"),(0,l.kt)("td",{parentName:"tr",align:null},"Scrum"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A brief summary that identifies the purpose of the meeting.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "id":"AAMkAGI1AAAt9AHjAAA=",\n    "createdDateTime":"2017-04-15T03:00:50.7579581Z",\n    "onlineMeetingUrl":null,\n    "isOnlineMeeting":true,\n    "body":{\n        "contentType":"html",\n        "content":"<html><head></head><body>Does late morning work for you?</body></html>"\n    },\n    "start":{\n        "dateTime":"2017-04-15T11:00:00.0000000",\n        "timeZone":"Pacific Standard Time"\n    },\n    "end":{\n        "dateTime":"2017-04-15T12:00:00.0000000",\n        "timeZone":"Pacific Standard Time"\n    },\n    "recurrence":null,\n "attendees":[\n        {\n            "type":"required",\n            "status":{\n                "response":"none",\n                "time":"0001-01-01T00:00:00Z"\n            },\n            "emailAddress":{\n                "name":"Samantha Booth",\n                "address":"samanthab@contoso.onmicrosoft.com"\n            }\n        }\n    ],\n    "organizer":{\n        "emailAddress":{\n            "name":"Dana Swope",\n            "address":"danas@contoso.onmicrosoft.com"\n        }\n    }\n},\n "onlineMeeting": {\n        "joinUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MDJmZWY5NTUtY2YxNy00NTJjLTllMWMtNGUxOGM0MWE5ZTEy%40thread.v2"\n    }\n\n')),(0,l.kt)("h3",{id:"22-get-calendar-events"},"2.2 Get calendar events"),(0,l.kt)("p",null,"The Get Calendar Events function returns a list of events from the your default calendar based on the defined start and end date time, including both single instance and recurring meetings."),(0,l.kt)("img",{src:"https://i.imgur.com/qrexSTP.png",alt:"drawing",width:"60%"}),(0,l.kt)("p",null,"The table below has sample inputs, data types and remarks of the fields for this action."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Start date time"),(0,l.kt)("td",{parentName:"tr",align:null},"2023-04-11T12:00:00.000"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The start date, time, and time zone of the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"End date time"),(0,l.kt)("td",{parentName:"tr",align:null},"2023-04-12T12:00:00.000"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The date, time, and time zone when the event concludes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Response time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"India standard time"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns the event\u2019s start time and end time in the specified time zone.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "value": [\n        {\n            "id": "AWtBH7_RLmY0nAoX3PzBwCh69yUb7hwSIjZoGosUcSzAAAAAAENAACh69yUb7hwSIjZoGosUcSzAAATuTBzAAA=",\n            "subject": "Hangouts",\n            "isCancelled": false,\n            "type": "singleInstance",\n            "allowNewTimeProposals": true,\n            "recurrence": null,\n            "start": {\n                "dateTime": "2023-04-15T05:30:00.0000000",\n                "timeZone": "UTC"\n            },\n            "end": {\n                "dateTime": "2023-04-15T06:30:00.0000000",\n                "timeZone": "UTC"\n            },\n            "attendees": [\n                {\n                    "type": "required",\n                    "status": {\n                        "response": "none",\n                        "time": "0001-01-01T00:00:00Z"\n                    },\n                    "emailAddress": {\n                        "name": "Samantha Gupta",\n                        "address": "samanthab@contoso.onmicrosoft.com"\n                    }\n                }\n            ],\n            "onlineMeeting": {\n                "joinUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzI1ZWNkMTQtYjM0OS00MzViLWE5ZmYtMDA2NTA4NGViMDZh%40thread.v2/0?context=%7b%22Tid%22%3a%"\n            }\n}\n')),(0,l.kt)("h3",{id:"23-recommend-meeting-slots"},"2.3 Recommend meeting slots"),(0,l.kt)("p",null,"This option allows you to set parameters such as date, time, and attendees for a meeting. It takes into consideration everyone's schedules and suggests appropriate times for the meeting. If it can't suggest any times, it will let you know why, such as if the organizer or a required attendee is unavailable. You can use this information to adjust your parameters and try again."),(0,l.kt)("img",{src:"https://i.imgur.com/1KIjMYr.png",alt:"drawing",width:"60%"}),(0,l.kt)("p",null,"The table below has sample inputs, data types and remarks of the fields for this action."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time constraints"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"timeslots":[{"end":{"dateTime":"2023-04-11T12:30:20.2020","timeZone":"India Standard Time"},"start":{"dateTime":"2023-04-11T09:00:00.000","timeZone":"India Standard Time"}},null]}')),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"You can set restrictions on a meeting's timing and nature by specifying the activity domain and available time slots.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Attendee details"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'[{"emailAddress":{"address":"samanthab@contoso.onmicrosoft.com","name":"Samantha"}}]')),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"Details of the people who will attend or be involved in the meeting.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Length of the meeting in minutes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"60")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the meeting")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Response time zone"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"India standard time")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"This provides the event's start and end times in the designated time zone.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "@odata.context":"https://graph.microsoft.com/v1.0/$metadata#microsoft.graph.meetingTimeSuggestionsResult",\n    "emptySuggestionsReason":"",\n    "meetingTimeSuggestions":[\n        {\n            "confidence":100.0,\n            "organizerAvailability":"free",\n            "suggestionReason":"Suggested because it is one of the nearest times when all attendees are available.",\n            "meetingTimeSlot":{\n                "start":{\n                    "dateTime":"2017-04-21T14:00:00.0000000",\n                    "timeZone":"Pacific Standard Time"\n                },\n                "end":{\n                    "dateTime":"2017-04-21T16:00:00.0000000",\n                    "timeZone":"Pacific Standard Time"\n                }\n            },\n            "attendeeAvailability":[\n                {\n                    "availability":"free",\n                    "attendee":{\n                        "type":"required",\n                        "emailAddress":{\n                            "address":"samanthab@contoso.onmicrosoft.com"\n                        }\n                    }\n                }\n            ],\n        }\n    ]\n}\n')),(0,l.kt)("h3",{id:"24-update-an-event"},"2.4 Update an event"),(0,l.kt)("p",null,"This action allows you to change the details of an event that is already on your calendar. To do this, you need to provide the ID of the event and a new object with the updated information."),(0,l.kt)("img",{src:"https://i.imgur.com/p18qnuL.png",alt:"drawing",width:"60%"}),(0,l.kt)("img",{src:"https://i.imgur.com/fJOuWmX.png",alt:"drawing",width:"60%"}),(0,l.kt)("p",null,"The table below has sample inputs, data types and remarks of the fields for this action."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Datatype"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Start time"),(0,l.kt)("td",{parentName:"tr",align:null},'{"dateTime":"2023-04-11T09:00:00.000","timeZone":"India Standard Time"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Object Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Start date, time, and time zone of the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"End time"),(0,l.kt)("td",{parentName:"tr",align:null},'{"dateTime":"2023-04-11T10:00:00.000","timeZone":"India standard Time"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Object Type"),(0,l.kt)("td",{parentName:"tr",align:null},"End date, time, and time zone for the event's end.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event ID"),(0,l.kt)("td",{parentName:"tr",align:null},"AAMkADA1ODMyOWE0LWNkZmUtNDJiYy1hNWI1LWE1NmQwY2RmNDhlOQBGAAAAAAAXtAWtBH7%2BRLmY0nAoX3PzBwCh69yUb7hwSIjZoGosUcSzAAAAAAENAACh69yUb7hwSIjZoGosUcSzAAAFJQ9WAAA%3D"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Event ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Can invitees propose"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Option to propose a new time if the organizer allows it.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"a new time?"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Attendee details"),(0,l.kt)("td",{parentName:"tr",align:null},'[{"emailAddress":{"address":"samanthab@contoso.onmicrosoft.com","name":"Pradeep"},"type":"required"}]'),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"List of attendees for the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Meeting description"),(0,l.kt)("td",{parentName:"tr",align:null},'{"contentType":"HTML","content":"Scrum"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Object Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Message body associated with the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Importance of event"),(0,l.kt)("td",{parentName:"tr",align:null},"High"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Importance of the event (low, normal, or high).")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Recurrence"),(0,l.kt)("td",{parentName:"tr",align:null},'{"pattern":{"type":"daily","interval":3},"range":{"type":"endDate","startDate":"2023-04-11"}}'),(0,l.kt)("td",{parentName:"tr",align:null},"Object Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Recurrence pattern for the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Meeting title"),(0,l.kt)("td",{parentName:"tr",align:null},"Scrum"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A brief summary of the meeting agenda.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n  "originalStartTimeZone": "originalStartTimeZone-value",\n  "originalEndTimeZone": "originalEndTimeZone-value",\n  "responseStatus": {\n    "response": "",\n    "time": "datetime-value"\n  },\n  "recurrence": null,\n  "reminderMinutesBeforeStart": 99,\n  "isOnlineMeeting": true,\n  "onlineMeetingProvider": "teamsForBusiness",\n  "isReminderOn": true,\n  "hideAttendees": false,\n  "onlineMeeting": {\n        "joinUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NzIyNzhlMGEtM2YyZC00ZmY0LTlhNzUtZmZjNWFmZGNlNzE2%40thread.v2/0?context=%7b%22Tid%22%3a%2272f988bf-86f1-41af-91ab-2d7cd011db47%22%2c%22Oid%22%3a%22bc55b173-cff6-457d-b7a1-64bda7d7581a%22%7d",\n        "conferenceId": "177513992",\n        "tollNumber": "+91 22 6241 6885"\n  }\n}\n\n')),(0,l.kt)("h3",{id:"25-add-an-attachment"},"2.5 Add an attachment"),(0,l.kt)("p",null,"This action adds a file to an event, and the size of the file should be less than 3 MB."),(0,l.kt)("img",{src:"https://i.imgur.com/wiMkvcB.png",alt:"drawing",width:"60%"}),(0,l.kt)("p",null,"The table below has sample inputs, data types and remarks of the fields for this action."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"File URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://image.crictracker.com/wp-content/uploads/2019/04/home.jpg"},"https://image.crictracker.com/wp-content/uploads/2019/04/home.jpg")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"URL of the file being attached.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event ID"),(0,l.kt)("td",{parentName:"tr",align:null},"AAMkAGI1AAAt9AHjAAA="),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Event ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Name of the file"),(0,l.kt)("td",{parentName:"tr",align:null},"image.jpeg"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Custom name (not necessarily the file name) to be displayed with the attachment icon.")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sample Response")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users(\'6aoGosUcSzAAAAAAENAACh69yUb7hwSIjZoGosUcSzAAATuTBwAAA%3D\')/attachments/$entity",\n    "@odata.type": "#microsoft.graph.fileAttachment",\n    "@odata.mediaContentType": "image/png",\n    "id": "AAMkADA1ODMyOWE0LWNkZmUtNDJiYy1hNWI1LWE1NmQwY2RmNDhlOQBGAAAAAAAXtAWtBH7_RLmY0nAoX3PzBwCh69yUb7hwSIjZoGosUcSzAAAAAAENAACh69yUb7hwSIjZoGosUcSzAAATuTBwAAABEgAQAKfJP9iJETBGnLIDXGog7_Q=",\n    "lastModifiedDateTime": "2023-03-30T06:05:51Z",\n    "name": "mahi.png",\n    "contentType": "image/png",\n    "size": 78744,      \n "contentBytes": "iVBORw0KGgoAAAANSUhEUgAAA7sAAAJKCAYAAADtI1L+AAAAAXNSR0IArs4c6QAAIABJREFUeF7snQf"\n}\n')),(0,l.kt)("h3",{id:"26-cancel-an-event"},"2.6 Cancel an event"),(0,l.kt)("p",null,"This action lets the meeting organizer cancel an event by sending a cancellation message, which moves the event to the Deleted Items folder. For recurring meetings, the organizer can also cancel a specific occurrence by providing the occurrence event ID."),(0,l.kt)("img",{src:"https://i.imgur.com/aUqeWRp.png",alt:"drawing",width:"60%"}),(0,l.kt)("p",null,"The table below has sample inputs, data types and remarks of the fields for this action."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event ID"),(0,l.kt)("td",{parentName:"tr",align:null},"AAMkAGI1AAAt9AHjAAA="),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Event ID.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send a cancellation message"),(0,l.kt)("td",{parentName:"tr",align:null},"Out of office"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Sends a cancellation message.")))),(0,l.kt)("h3",{id:"27-get-event-details"},"2.7 Get event details"),(0,l.kt)("p",null,"This action will provide information about a specific event, including its properties and relationships. The start and end times of the event will be in the time zone chosen by the user."),(0,l.kt)("img",{src:"https://i.imgur.com/wQrxfrG.png",alt:"drawing",width:"60%"}),(0,l.kt)("p",null,"The table below has sample inputs, data types and remarks of the fields for this action."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Event ID"),(0,l.kt)("td",{parentName:"tr",align:null},"AAMkADA1ODMyOWE0LWNkZmUtNDJiYy1hNWI1LWE1NmQwY2RmNDhlOQBGAAAAAAAXtAWtBH7%2BRLmY0nAoX3PzBwCh69yUb7hwSIjZoGosUcSzAAAAAAENAACh69yUb7hwSIjZoGosUcSzAAAFJQ9WAAA%3D"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier for the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Response time zone"),(0,l.kt)("td",{parentName:"tr",align:null},"India standard time"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Provides the start and end time of the event adjusted to the time zone specified by the user.")))),(0,l.kt)("h3",{id:"28-get-busy-time-slots"},"2.8 Get busy time slots"),(0,l.kt)("p",null,"This action shows a someone's scheduled events during a specific time period from their default calendar, indicating whether they are free or busy. If no events are scheduled, the user is assumed to be free during that time range."),(0,l.kt)("img",{src:"https://i.imgur.com/1ULuPGI.png",alt:"drawing",width:"60%"}),(0,l.kt)("p",null,"The table below has sample inputs, data types and remarks of the fields for this action."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Datatype"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Email addresses"),(0,l.kt)("td",{parentName:"tr",align:null},'["samanthab@contoso.onmicrosoft.com", "Rahul@contoso.onmicrosoft.com"]'),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"SMTP addresses of users to get availability information for.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Start time"),(0,l.kt)("td",{parentName:"tr",align:null},'{"dateTime":"2023-04-04T09:00:00.000","timeZone":"India Standard Time"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The start date, time, and time zone of the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"End time"),(0,l.kt)("td",{parentName:"tr",align:null},'{"dateTime":"2023-04-04T12:43:49.4949","timeZone":"India standard Time"}'),(0,l.kt)("td",{parentName:"tr",align:null},"Object"),(0,l.kt)("td",{parentName:"tr",align:null},"The end date, time, and time zone of the event.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View available interval"),(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration of a time slot in the ","[availability View]"," of the response.")))))}g.isMDXComponent=!0}}]);