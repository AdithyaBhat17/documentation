(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{298:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(415)),i=["components"],l={title:"Google Business Messages (GBM)",sidebar_label:"Google Business Message"},b={unversionedId:"platform_concepts/channelConfiguration/google-message",id:"platform_concepts/channelConfiguration/google-message",isDocsHomePage:!1,title:"Google Business Messages (GBM)",description:"1. Introduction",source:"@site/docs/platform_concepts/channelConfiguration/google-message.md",slug:"/platform_concepts/channelConfiguration/google-message",permalink:"/docs/platform_concepts/channelConfiguration/google-message",version:"current",sidebar_label:"Google Business Message",sidebar:"platform_concepts",previous:{title:"Google Chat",permalink:"/docs/platform_concepts/channelConfiguration/googleChat"},next:{title:"Instagram",permalink:"/docs/platform_concepts/channelConfiguration/instagram"}},s=[{value:"1. Introduction",id:"1-introduction",children:[{value:"1.1 Understand entry point",id:"11-understand-entry-point",children:[]}]},{value:"2. Limitations",id:"2-limitations",children:[]},{value:"3. Steps to connect a bot to GBM",id:"3-steps-to-connect-a-bot-to-gbm",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"1. Go to the channels configuration page",id:"1-go-to-the-channels-configuration-page",children:[]},{value:"2.  Enter brand details.",id:"2--enter-brand-details",children:[]},{value:"3.  Enter bot details",id:"3--enter-bot-details",children:[]},{value:"4.  Enter your business location",id:"4--enter-your-business-location",children:[]},{value:"5.  Verify the bot",id:"5--verify-the-bot",children:[]},{value:"6. Verify locations associated with bot",id:"6-verify-locations-associated-with-bot",children:[]},{value:"7. Launch bot",id:"7-launch-bot",children:[]}]},{value:"4. Monitor your bot performance",id:"4-monitor-your-bot-performance",children:[]}],c={toc:s};function p(e){var t=e.components,a=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(r.b)("p",null,"Google Business Messages (GBM) is a mobile conversational channel that combines multiple entry points on Google Maps, and Search to create rich, asynchronous messaging experiences that delight customers and drive business results."),Object(r.b)("p",null,"With GBM, you give your customers the opportunity to interact with your organization when they search for the organization on their mobile browser (Android phone) or in Google Maps."),Object(r.b)("p",null,"Depending how bot users start conversations with GBM agent, you have two different ",Object(r.b)("a",{parentName:"p",href:"#11-understand-entry-point"},"entry points"),". "),Object(r.b)("h3",{id:"11-understand-entry-point"},"1.1 Understand entry point"),Object(r.b)("p",null,"Entry points are surfaces where users can start conversations with Business Messages bot. Each entry point has a unique appearance and appears in a different place."),Object(r.b)("p",null,"With GBM, you can launch your bots with the Non-local, and Local entry point groups, each of which enables multiple entry points. Each entry point your bot supports increases your bot's visibility and drives more conversations for your bot."),Object(r.b)("h4",{id:"local-entry-point"},"Local entry point"),Object(r.b)("p",null,"The Local entry point group encompasses entry points that rely on locations."),Object(r.b)("p",null,"Local entry points can be used for organisations which have a physical location. This entry point enables conversations with locations associated with your brand from the Maps app (Supports Android and IOS) and when a user finds the location in Search (Supports Android and IOS (with the Google Maps app installed))."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("img",{src:"https://secure-res.craft.do/v2/ApoqpVP8dN7x9m9uxqRYwYHcnyAYCkDj94X3GchdiatMxCm9zav2pYtDeQNFAuwKM2HZCdPoRsGUw13kERz4CtsBNLcmdvhddhSKDZrHsXYwWnyLhYNNgxeCLBKSaVozz5ajkZnSK1vqBybXsSgwVQRvhtn281eZ72ogJNj4VSN58yx/Screenshot_20220806-121747_Chrome.jpg",width:"80%"})),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("img",{src:"https://secure-res.craft.do/v2/ApoqpVP8dN7x9m9uxqRYwYHcnyAYCkDj94X3GchdiatMxCm9zav2pYtDeQNFAuwKM2HZCdPoRsGUw13kERz4CtsBNLcmdvhddhSKDZrHsXYwWqQ92Ey4gxYBqMrfHhwHbsJ7xjwWryBzgQPCiMXLvJWpmMF7rSZT1sjJZKEZFg5VsZN/Screenshot_20220806-131149_Maps.jpg",width:"60%"}))))),Object(r.b)("h4",{id:"non-local-entry-point"},"Non-local entry Point"),Object(r.b)("p",null,"The Non-local entry point group contains entry points that do not rely on locations. If the brand does not have a physical location, or does not want to share its physical location on Google, you can use Google Business Messages with Non-local entry points."),Object(r.b)("p",null,"To enable non-local entry points,"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Update your agent's non-local information."),Object(r.b)("li",{parentName:"ol"},"Verify your agent."),Object(r.b)("li",{parentName:"ol"},"Business Messages approves your agent for various entry points based on the non-local information you specify.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You need to specify all non-local data before you verify your agent. You cannot edit it later.\nLaunch your agent."))),Object(r.b)("h2",{id:"2-limitations"},"2. Limitations"),Object(r.b)("p",null,"The following are the limitations of the GBM channel in different bot functionalitie."),Object(r.b)("h4",{id:"welcome-message-limitations"},"Welcome message limitations"),Object(r.b)("p",null,"The following are the limitations for a Welcome message."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Quick reply buttons"),Object(r.b)("td",{parentName:"tr",align:null},"5")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Length of quick reply"),Object(r.b)("td",{parentName:"tr",align:null},"35 characters")))),Object(r.b)("h4",{id:"flow-limitation"},"Flow limitation"),Object(r.b)("p",null,"The following are limitations in flows."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Quick replies"),Object(r.b)("td",{parentName:"tr",align:null},"13")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Quick reply character length"),Object(r.b)("td",{parentName:"tr",align:null},"25")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/business-communications/business-messages/reference/rest/v1/conversations.messages#resource:-message"},"See more details"))),Object(r.b)("h4",{id:"text-message"},"Text message"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The a text message sent to the user can have up to 3072 characters.")),Object(r.b)("h4",{id:"image-file"},"Image file"),Object(r.b)("p",null,"The following are the limitations of the file shared by the bot."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Image sharing"),Object(r.b)("td",{parentName:"tr",align:null},"Use only publicly reachable URL of the file. The platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Max file size"),Object(r.b)("td",{parentName:"tr",align:null},"5 MB.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Supported formats"),Object(r.b)("td",{parentName:"tr",align:null},"image/jpeg, image/jpg, image/png, image/webp")))),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/business-communications/business-messages/reference/rest/v1/conversations.messages#ContentInfo"},"See more details")),Object(r.b)("h4",{id:"carousel-card"},"Carousel card"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null}),Object(r.b)("th",{parentName:"tr",align:null}))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Min. cards"),Object(r.b)("td",{parentName:"tr",align:null},"2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Max. cards"),Object(r.b)("td",{parentName:"tr",align:null},"10")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Max. buttons in card"),Object(r.b)("td",{parentName:"tr",align:null},"4")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/business-communications/business-messages/reference/rest/v1/conversations.messages#carouselcard"},"See more details"))),Object(r.b)("h2",{id:"3-steps-to-connect-a-bot-to-gbm"},"3. Steps to connect a bot to GBM"),Object(r.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ensure that a live agent configuration has been set up on Inbox. GBM requires its bots to have at least one live agent.")),Object(r.b)("h3",{id:"1-go-to-the-channels-configuration-page"},"1. Go to the channels configuration page"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log on to ",Object(r.b)("a",{parentName:"p",href:"https://cloud.yellow.ai"},"https://cloud.yellow.ai")," and navigate to ",Object(r.b)("strong",{parentName:"p"},"Channels")," > ",Object(r.b)("strong",{parentName:"p"},"Google business messages"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Connect your account"),"."),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/HSqDeI4.jpg",alt:null})),Object(r.b)("p",{parentName:"li"}," You will see a prompt to check if you have a live agent configured in Inbox."))),Object(r.b)("h3",{id:"2--enter-brand-details"},"2.  Enter brand details."),Object(r.b)("p",null,"   a. ",Object(r.b)("strong",{parentName:"p"},"Brand Name"),": Enter the name of the client. As this is verified by the Google support team over email, we would recommend you to keep the brand name similar to your domain."),Object(r.b)("p",null,"   b. ",Object(r.b)("strong",{parentName:"p"},"Point of contact name"),": Name of the point of contact(PoC) from the client."),Object(r.b)("p",null,"   c. ",Object(r.b)("strong",{parentName:"p"},"Contact email"),": The email address of the PoC."),Object(r.b)("p",null,"   d. ",Object(r.b)("strong",{parentName:"p"},"Website URL"),": Website address of the brand associated with the bot. This should be a publicly available URL starting with ",Object(r.b)("inlineCode",{parentName:"p"},"https://")," "),Object(r.b)("p",null,"   e. Click ",Object(r.b)("strong",{parentName:"p"},"Save and next")," to proceed to ",Object(r.b)("a",{parentName:"p",href:"#3-enter-bot-details"},"setting up bot details"),"."),Object(r.b)("p",null,"   ",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/kTFWTA8.png",alt:null})),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The brand name will not be visible when the bot goes live on GBM. It is only used for verification purposes."))),Object(r.b)("h3",{id:"3--enter-bot-details"},"3.  Enter bot details"),Object(r.b)("p",null,"Enter the bot details based on the descriptions provided for each field in the following table and click ",Object(r.b)("strong",{parentName:"p"},"Save and next")," to proceed to configuring ",Object(r.b)("a",{parentName:"p",href:"#4-enter-your-business-location"},"Business locations"),". "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/6YJsEZN.png",alt:null})),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Option"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Bot details")),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Bot name"),Object(r.b)("td",{parentName:"tr",align:null},"The name of the bot to appear to the end-users. It is recommended to choose a bot name that corresponds with the brand instead of a personal or random name. Do not use words such as personal, test, or demo in bot names.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Bot logo"),Object(r.b)("td",{parentName:"tr",align:null},"1024x1024 px. In conversations, logos appear in 1024px diameter circles. Make sure that your logo appears well in the circle.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"td",href:"#11-understand-entry-point"},"Entry points")),Object(r.b)("td",{parentName:"tr",align:null},"Select where users can start conversations with the bot. ",Object(r.b)("strong",{parentName:"td"},"Local")," if the organisation has a physical location, select ",Object(r.b)("strong",{parentName:"td"},"Non-Local")," otherwise.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Domain"),Object(r.b)("td",{parentName:"tr",align:null},"The org's domain URL. Use ",Object(r.b)("strong",{parentName:"td"},"Add domain")," to add multiple domain addresses.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Regions"),Object(r.b)("td",{parentName:"tr",align:null},"Countries and localities in which the bot is allowed to launch the non-local entry points.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Customer care number"),Object(r.b)("td",{parentName:"tr",align:null},"The customer care contact number to display in Google results.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Call deflection phone number"),Object(r.b)("td",{parentName:"tr",align:null},"The fallback phone number when the customer care number is not reachable. This number is not shown in Google results.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Contact as URL"),Object(r.b)("td",{parentName:"tr",align:null},"The URL of the Contact us page from the organisation's website.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Conversational settings")),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Language"),Object(r.b)("td",{parentName:"tr",align:null},"Languages that the bot supports. This will be pre-filled based on the configuration setting saved in the builder. You can also set the default language using the check box next to this.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Privacy policy"),Object(r.b)("td",{parentName:"tr",align:null},"Provide the link where the privacy policy details of your organisation are available.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Welcome message"),Object(r.b)("td",{parentName:"tr",align:null},"The first message in a conversation between a bot and a user. The welcome message automatically appears when a user starts a new conversation.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Offline message"),Object(r.b)("td",{parentName:"tr",align:null},"Message to show to the bot user during non-operating hours - when the is offline.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Quick replies"),Object(r.b)("td",{parentName:"tr",align:null},"Conversation starters appear as vertically stacked suggested replies and directly follow the welcome message. When the end-user taps a conversation starter, the bot receives predefined content. You can add up to five quick replies . Quick replies are not visible (when the live agent is not available) if an offline message is set.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Interactions")),Object(r.b)("td",{parentName:"tr",align:null},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Primary interaction"),Object(r.b)("td",{parentName:"tr",align:null},"The primary mode of interaction with the bot users. It is mandatory to have a live agent configuration for GBM. If human messaging is not available 24*7, uncheck ",Object(r.b)("strong",{parentName:"td"},"Always available")," and specify the available days, time, and timezone.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Secondary interaction"),Object(r.b)("td",{parentName:"tr",align:null},"Secondary mode of interaction to activate when the primary mode is unable to respond to user queries.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Start day"),Object(r.b)("td",{parentName:"tr",align:null},"Weekdays from when the live-agent is available. You can choose from Monday to Sunday. For example, available from Monday (Start day) - Friday (End day).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Start time (hours, minutes)"),Object(r.b)("td",{parentName:"tr",align:null},"Set the available from time in hours and minutes. For example, available from 10hrs. 00min. - 18hrs 00min in the selected available days.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"End day"),Object(r.b)("td",{parentName:"tr",align:null},"Weekdays until when the live-agent is available. You can choose from Monday to Sunday. For example, available from Monday (Start day) - Friday (End day).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"End time (hours, minutes)"),Object(r.b)("td",{parentName:"tr",align:null},"Set the available until time in hours and minutes. For example, available from 10hrs. 00min. - 18hrs 00min in the selected available days.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Timezone"),Object(r.b)("td",{parentName:"tr",align:null},"Base timezone considered for the specified availability period.")))),Object(r.b)("h3",{id:"4--enter-your-business-location"},"4.  Enter your business location"),Object(r.b)("p",null,"Add location IDs as per the operating mode of business. If you have selected ",Object(r.b)("em",{parentName:"p"},"Local entry")," point in the previous step, you need to add at least one business location."),Object(r.b)("p",null,"   a. ",Object(r.b)("strong",{parentName:"p"},"Place ID"),": Enter the unique ID the location (in Google places) that you want to add to the GBM configuration. To search for a place ID, click ",Object(r.b)("strong",{parentName:"p"},"Find place ID"),".\n",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/vBLSZYJ.png",alt:null})),Object(r.b)("p",null,"   ",Object(r.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/3vGZHauMSsJPgPcxywtP2vSoKhZwxU3gyVNFVaQRTbfbN9Yuc1V633ymNtGMJnbwcdYxaFAcW6Kvek5MRMRG3ZTttenNNuefhqqrUsemqxmbAEqyXTGB6dVzmnZaCEKBBAsRFLY1qZuKzSsqZQ9yWYsTr7wTQxUF9EovWrqykDGtfwagd1ZbKWtxsDPTBFMfrbrL7E7zBaZd6ZrF4dtM7fdyVnT/Screen_Recording_2022-08-06_at_4_29_10_PM_AdobeExpress.jpg",alt:null})),Object(r.b)("p",null,"   b. Click ",Object(r.b)("strong",{parentName:"p"},"Add location")," to add another location."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"   To upload multiple locations at once, click ",Object(r.b)("em",{parentName:"p"},"Upload locations")," and upload the CSV file containing different place IDs."))),Object(r.b)("p",null,"   c. Click ",Object(r.b)("strong",{parentName:"p"},"Save and next")," to proceed to next step."),Object(r.b)("p",null,"With this, the GBM bot configuration is completed. You then need to verify whether everything is working fine. "),Object(r.b)("h3",{id:"5--verify-the-bot"},"5.  Verify the bot"),Object(r.b)("p",null,"For the ",Object(r.b)("em",{parentName:"p"},"Live")," environment, you need to complete the verification and launch processes to ensure your bot goes live on GBM."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"In Development environment, you do not need to complete the verification and launch process. Copy the Test URLs for Android or iOS and open it in the respective devices to test the bot on GBM."))),Object(r.b)("p",null,"The bot needs to be verified along with its associated locations before going live. The process includes bot verification, location verification, bot launch status verification, and location launch status verification."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/k8efR78.jpg",alt:null})),Object(r.b)("p",null,"You need to request for verification. A verification email will be sent to the point of contact to confirm if the bot information provided is correct."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/fSLzJqG.png",alt:null})),Object(r.b)("p",null,"Google sends two separate emails asking for permission to send messages."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"One email will contain the instructions and the submitted information.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/CiSLwvw.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The second email will have the security key.")),Object(r.b)("p",null,"To verify the bot, the contact person needs to reply to the first email with the following information:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"I, ","[name of brand employee]"," and ","[title of employee]",", grant yellow.ai the right to send Business Messages using the information specified in this email. Security key: ","[Google-provided security key from separate email]")),Object(r.b)("p",null,"Next, Google will verify this email and mark the bot as verified if all the information is as per the Google's guidelines."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Know Google's ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/business-communications/support/aup"},"Acceptable use policy"),".")),Object(r.b)("h3",{id:"6-verify-locations-associated-with-bot"},"6. Verify locations associated with bot"),Object(r.b)("p",null,"After you verify a bot, verify locations associated with that bot. Once a location is verified and the bot is launched, you can launch the location that with the bot."),Object(r.b)("h3",{id:"7-launch-bot"},"7. Launch bot"),Object(r.b)("p",null,"When you launch a bot, Business Messages performs checks for necessary approvals before beginng the launch process. Once the launch process begins, the agent is available to users within a few hours."),Object(r.b)("h2",{id:"4-monitor-your-bot-performance"},"4. Monitor your bot performance"),Object(r.b)("p",null,"The super admin of yellow.ai receives the bot performance metrics on a weekly basis. To know the performance of your GBM bot, contact our support team."),Object(r.b)("p",null,"The following are the different metrics that GBM shares -"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CSAT (Customer Satisfaction) 80% + (over trailing 7 days),"),Object(r.b)("li",{parentName:"ul"},"MRR (Merchant Response Rate) 95% + (over trailing 7 days),"),Object(r.b)("li",{parentName:"ul"},"HMRR (Human Merchant Response Rate) 95% + (over trailing 7 days).")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Google bases these calculations on a minimum of 10 survey scores (CSAT), 10 sessions (MRR), and 10 live agent requests (HMRR) within the last 7 days. The MRR of bots with fewer than 10 sessions is based on the last 3 to 9 sessions within the last 35 days and is required to be only 60%+."))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Metric"),Object(r.b)("th",{parentName:"tr",align:null},"Definition"),Object(r.b)("th",{parentName:"tr",align:null},"Sample Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Survey score"),Object(r.b)("td",{parentName:"tr",align:null},"Percentage of positive survey responses."),Object(r.b)("td",{parentName:"tr",align:null},"Ranges from 0% to 100%")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"MRR"),Object(r.b)("td",{parentName:"tr",align:null},"Merchant response rate (MRR). The number of sessions that had responses (bot or live agent) relative to the total number of sessions."),Object(r.b)("td",{parentName:"tr",align:null},"Ranges from 0% to 100%")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"HMRR"),Object(r.b)("td",{parentName:"tr",align:null},"Human merchant response rate (HMRR). The number of sessions that had live agent responses relative to the total number of sessions that contained one or more live agent requests or live agent responses."),Object(r.b)("td",{parentName:"tr",align:null},"Ranges from 0% to 100%")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"To know more see ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/business-communications/business-messages/guides/how-to/measure/metrics#performance"},"here"))))}p.isMDXComponent=!0},415:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return a?o.a.createElement(u,l(l({ref:t},s),{},{components:a})):o.a.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);