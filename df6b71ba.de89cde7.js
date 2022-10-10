(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{398:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a(3),r=a(7),o=(a(0),a(446)),c=["components"],i={title:"Workflow campaign",sidebar_label:"Workflow campaign"},l={unversionedId:"platform_concepts/engagement/workflowCampaign",id:"platform_concepts/engagement/workflowCampaign",isDocsHomePage:!1,title:"Workflow campaign",description:"1. Introduction",source:"@site/docs/platform_concepts/engagement/workflowCampaign.md",slug:"/platform_concepts/engagement/workflowCampaign",permalink:"/docs/platform_concepts/engagement/workflowCampaign",version:"current",sidebar_label:"Workflow campaign",sidebar:"platform_concepts",previous:{title:"Notification API",permalink:"/docs/platform_concepts/engagement/outbound/notification-engine"},next:{title:"Launching Your First Inbound Campaign",permalink:"/docs/platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign"}},b=[{value:"1. Introduction",id:"1-introduction",children:[{value:"1.1 Workflow vs. outbound campaigns",id:"11-workflow-vs-outbound-campaigns",children:[]},{value:"1.2 Features &amp; benefits",id:"12-features--benefits",children:[]},{value:"1.3 Use cases",id:"13-use-cases",children:[]}]},{value:"2. Create Workflow campaign",id:"2-create-workflow-campaign",children:[{value:"2.1 Schedule campaign",id:"21-schedule-campaign",children:[]}]},{value:"3. Campaign reports",id:"3-campaign-reports",children:[{value:"3.1 View summary report",id:"31-view-summary-report",children:[]},{value:"3.2 View channel-wise report",id:"32-view-channel-wise-report",children:[]},{value:"3.3 Downoad report",id:"33-downoad-report",children:[]}]}],p={toc:b};function m(e){var t=e.components,a=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(o.b)("p",null,"The Workflow campaign lets you automate your marketing or collection campaigns by providing you the leverage to reach out to your customers on multiple channels. You can also configure fallback channels and check the delivery status of messages inside the workflow."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/aJ1Espm.png",alt:null})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The Workflow campaign is not an alternate to Scheduler of app.ym platform."))),Object(o.b)("h3",{id:"11-workflow-vs-outbound-campaigns"},"1.1 Workflow vs. outbound campaigns"),Object(o.b)("p",null,"You can use Outbound campaigns only with a single channel and all the users will receive the same template. You cannot configure Fallbacks in case of failed notifications. "),Object(o.b)("p",null,"With Workflow campaigns,  you can configure multiple channels and add fallbacks to each priority channel. "),Object(o.b)("h3",{id:"12-features--benefits"},"1.2 Features & benefits"),Object(o.b)("p",null,"The following are some key benefits of Workflow campaigns - "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reach out to the target audience through multiple channels."),Object(o.b)("li",{parentName:"ul"},"Build Curated Flows based on the status of the outbound notification"),Object(o.b)("li",{parentName:"ul"},"Higher chances of user engagement compared to single channel outbound campaigns"),Object(o.b)("li",{parentName:"ul"},"Check in-flow outbound status."),Object(o.b)("li",{parentName:"ul"},"Better fallback handling for failed cases."),Object(o.b)("li",{parentName:"ul"},"Ability to call functions and APIs during execution.")),Object(o.b)("h3",{id:"13-use-cases"},"1.3 Use cases"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For Collection use-cases, the primary pain point of business is the reachability and to ensure that the user is getting the information about the pending or upcoming payment. "),Object(o.b)("p",{parentName:"li"},"But the concerning issue could be that the user is inactive or unavailable on the primary channel used by the business. This creates a necessity for businesses to track the delivery status for each user and then run separate campaigns on a different channel.\n",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/ivewgA4.png",alt:null})))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The above image shows a sample Workflow where three channels were used to ensure that the message is delivered to the user at least on one channel.")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Workflow campaign can also increase the ROI of campaigns by targeting the users on lesser expensive channels as primary channel and then using the higher cost consuming channels as fallback channels to minimise the cost incurred in a single collection campaign.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/zgoXaUP.png",alt:null})),Object(o.b)("p",null,"The above workflow shows how the campaign channels can be arranged by preference of low to high cost consumption channels to keep the overall campaign ROI high for the similar impression rate. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"One drawback of such type of campaigns is that the read rate for the lower cost incurring channels are also low compared to channels like WhatsApp."))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"2-create-workflow-campaign"},"2. Create Workflow campaign"),Object(o.b)("p",null,"Workflow campaign is like a flow which you can trigger from the Engage Module. "),Object(o.b)("p",null,"To create a Workflow campaign, follow these steps - "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a new flow (",Object(o.b)("strong",{parentName:"p"},"Studio")," > ",Object(o.b)("strong",{parentName:"p"},"Flows")," > ",Object(o.b)("strong",{parentName:"p"},"Create flow"),") to use in your Workflow campaign."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Tzc7zMP.png",alt:null}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To the Start node add a new ",Object(o.b)("strong",{parentName:"p"},"Action")," node, ",Object(o.b)("strong",{parentName:"p"},"Outbound notification"),". There is no need to configure the start node for workflows."),Object(o.b)("p",{parentName:"li"},".   ",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/clEtIEw.png",alt:null})))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Eo7aEiZ.png",alt:null})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Map ",Object(o.b)("strong",{parentName:"li"},"To")," to a CDP attribute of the notification type (for example, phone for WhatsApp, email for Email)."),Object(o.b)("li",{parentName:"ol"},"Use various ",Object(o.b)("em",{parentName:"li"},"Action")," nodes in between flows to fetch notification status; use the Delay node to add timeout.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/gL830m9.png",alt:null})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Map Template params properly with CDP Attribute or Bot variable so that the Template can be sent to the user.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"There should be at least 1-2 minutes delay between an Outbound Node and Notification Status Node."),Object(o.b)("li",{parentName:"ul"},"It is recommended to have at least 2-3 channels configured in a bot for  Workflow Campaigns to have better fallbacks."),Object(o.b)("li",{parentName:"ul"},"Currently, not all the Action Nodes are supported in a Workflow. Basic functionalities such as Outbound Nodes, Delay Nodes, and DB Updates are compatible with Workflow Campaign.")))),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once the flow configuration is completed, go to the ",Object(o.b)("strong",{parentName:"p"},"Engage")," module (shortcut key: g + e) > ",Object(o.b)("strong",{parentName:"p"},"Journeys"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/2c0NMpg.png",alt:null}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Create Campaign"),"."),Object(o.b)("p",{parentName:"li"},"a. Enter a ",Object(o.b)("strong",{parentName:"p"},"Journey trigger name"),"."),Object(o.b)("p",{parentName:"li"},"b. Select a flow with outbound node that you want to associate with the campaign from the list of workflow journeys."),Object(o.b)("p",{parentName:"li"},"c. Click ",Object(o.b)("strong",{parentName:"p"},"Next"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/TVYwXSw.png",alt:null})))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Invalid or incomplete (if ",Object(o.b)("em",{parentName:"p"},"To")," field not mapped) will throw as error message."))),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Select your preferred target audience (segment). Make sure to add your users' CDP records to use it for any type of Campaigns.  Know more about ",Object(o.b)("a",{parentName:"p",href:"/docs/platform_concepts/engagement/cdp/overview"},"User 360"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/9PD6caJ.png",alt:null}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Schedule the campaign as per your preference. "),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/e8iigtP.png",alt:null}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Launch campaign"),"."))),Object(o.b)("p",null,"The workflow campaign will be executed on the selected segment as per the configuration. By default, the status will be in pending and then moves to completed post execution. "),Object(o.b)("p",null,"  ",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/sUVITBo.jpg",alt:null})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Workflow Campaign might take some time to process due to the multi channel usage and other actions performed inside a user flow."),Object(o.b)("li",{parentName:"ul"},"You can download the report once the campaign is executed. The campaign status changes to ",Object(o.b)("em",{parentName:"li"},"Completed"),".")))),Object(o.b)("h3",{id:"21-schedule-campaign"},"2.1 Schedule campaign"),Object(o.b)("h4",{id:"how-many-times-should-the-campaign-run"},"How many times should the campaign run?"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Option"),Object(o.b)("th",{parentName:"tr",align:null},"-"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Run once")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"To run campaign only once. ",Object(o.b)("br",null),"In ",Object(o.b)("strong",{parentName:"td"},"When to run the campaign?"),", choose ",Object(o.b)("br",null),Object(o.b)("em",{parentName:"td"},"Now")," to execute the campaign immediately, ",Object(o.b)("br",null),Object(o.b)("em",{parentName:"td"},"Later")," to execute the campaign on a specific ",Object(o.b)("strong",{parentName:"td"},"Date and time"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Run multiple times")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"To schedule a recurring campaign.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Repeat"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Choose the campaign frequency.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"Daily"),Object(o.b)("td",{parentName:"tr",align:null},"Select to execute the campaign daily at a specific time. Set the time using the time box.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"Weekly"),Object(o.b)("td",{parentName:"tr",align:null},"Select to execute the campaign on a weekly basis. Select days of the week (Sun - Sat) using the respective check-boxes along with your preferred ",Object(o.b)("strong",{parentName:"td"},"Time")," of execution. For example, run every ",Object(o.b)("em",{parentName:"td"},"Sat and Sun at 9:00 AM"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"Monthly"),Object(o.b)("td",{parentName:"tr",align:null},"Select to execute the campaign on a monthly basis. Select the date and time when you want to run the campaign using the respective options. ",Object(o.b)("br",null),"For example, ",Object(o.b)("em",{parentName:"td"},"Every 1 of the month at Time 10:00 AM"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Ends"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"Never"),Object(o.b)("td",{parentName:"tr",align:null},"Choose to run the recurring campaign forever.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"On"),Object(o.b)("td",{parentName:"tr",align:null},"Choose to end the campaign on a specific date. Select the date using the calendar box. For example, stop the campaign after 2023-12-30 11:00 AM.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"-"),Object(o.b)("td",{parentName:"tr",align:null},"After"),Object(o.b)("td",{parentName:"tr",align:null},"Choose to end the campaign after certain occurrences. For example, stop the campaign after 10 occurrences.")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"3-campaign-reports"},"3. Campaign reports"),Object(o.b)("p",null,"Workflow Campaign provides a snapshot of your Ongoing and Completed campaigns. There are multiple places where the analytics is showcased with respect to different information on each."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/r7QVs9M.png",alt:null})),Object(o.b)("h3",{id:"31-view-summary-report"},"3.1 View summary report"),Object(o.b)("p",null,"On the ",Object(o.b)("strong",{parentName:"p"},"Engage")," > ",Object(o.b)("strong",{parentName:"p"},"Outbound")," > ",Object(o.b)("strong",{parentName:"p"},"Journeys")," page, click on the campaign for which you want to see the report. Choose your preferred duration using the date range boxes on the top-right."),Object(o.b)("p",null,"   ",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/SdZ6XOf.png",alt:null})),Object(o.b)("h3",{id:"32-view-channel-wise-report"},"3.2 View channel-wise report"),Object(o.b)("p",null,"To view channel-wise report, click View channel wise statistics."),Object(o.b)("p",null,"   ",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/mRmVyYC.png",alt:null})),Object(o.b)("p",null,"   ",Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/pOtMNMV.png",alt:null})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Total notifications sent - Channel wise: This shows the pie chart view of the total notifications and the contribution of each channel in percentages."),Object(o.b)("li",{parentName:"ul"},"User count: It shows the detailed break-up of message statuses (Sent, Delivered, Read, and Failed) for each channel.")),Object(o.b)("h3",{id:"33-downoad-report"},"3.3 Downoad report"),Object(o.b)("p",null,"To download a campaign report -  "),Object(o.b)("p",null,"Post completion of Workflow Campaigns, you can also download the report in a CSV file."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"On the Journeys home page, navigate to the campaign and click the More options icon > ",Object(o.b)("strong",{parentName:"p"},"Request report"),"."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/hLVOJxs.png",alt:null}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"An option to download the report is sent to your Slack. Click on the link."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/rahrp4A.png",alt:null}))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Download"),"."),Object(o.b)("img",{src:"https://i.imgur.com/MCWoQpR.png",width:"50%"}))),Object(o.b)("p",null,"Here is an example of a sample CSV file - "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/8NWIxEh.png",alt:null})),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Metric"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"BotId"),Object(o.b)("td",{parentName:"tr",align:null},"Unique ID of the bot from which Campaign was triggered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"UserId"),Object(o.b)("td",{parentName:"tr",align:null},"Phone number or email address of the user to which the campaign was sent.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Source"),Object(o.b)("td",{parentName:"tr",align:null},"Channel through which the message was sent - WhatsApp, Email, SMS etc.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Status"),Object(o.b)("td",{parentName:"tr",align:null},"Delivery status of the message.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"IP Address"),Object(o.b)("td",{parentName:"tr",align:null},"IP Address of the client if triggered using Workflow API (applicable only for Workflows triggered using API).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Message ID"),Object(o.b)("td",{parentName:"tr",align:null},"Unique MsgID for the messages triggered.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Workflow ID"),Object(o.b)("td",{parentName:"tr",align:null},"Unique Workflow ID of the specific campaign.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Custom payload"),Object(o.b)("td",{parentName:"tr",align:null},"Any custom payload sent using the Workflow API.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Template ID"),Object(o.b)("td",{parentName:"tr",align:null},"Unique ID of the template used to send the Workflow campaign.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Notification Sent By"),Object(o.b)("td",{parentName:"tr",align:null},"Username of the platform user whose API key is used to trigger the Workflow using API (only for Workflows triggered using API).")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Comments"),Object(o.b)("td",{parentName:"tr",align:null},"Comments on the message sent. ",Object(o.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#23-status-codes-of-response"},"Know more"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Created Time"),Object(o.b)("td",{parentName:"tr",align:null},"Time at which the record was create on the CSV.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Scheduled Time"),Object(o.b)("td",{parentName:"tr",align:null},"Time at which the record was scheduled to be sent.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Updated Time"),Object(o.b)("td",{parentName:"tr",align:null},"Time at which the status was last updated.")))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Delivery Status such as Delivered and Read are not available for all channels except WhatsApp."))))}m.isMDXComponent=!0},446:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,d=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return a?r.a.createElement(d,i(i({ref:t},b),{},{components:a})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);