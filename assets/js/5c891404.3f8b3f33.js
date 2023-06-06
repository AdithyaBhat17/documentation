"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[51635],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),g=r,d=u["".concat(p,".").concat(g)]||u[g]||c[g]||o;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},27722:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={sidebar_label:"Create Outbound campaign",title:"Create outbound campaign"},p=void 0,s={unversionedId:"platform_concepts/engagement/outbound/outbound-campaigns/run-campaign",id:"platform_concepts/engagement/outbound/outbound-campaigns/run-campaign",title:"Create outbound campaign",description:"This article provides how to create campaigns for any channel. The process for creating a campaign remains same for all channels. However, certain steps change in Step 2: Message template depending on the channel and variables used in the selected template.",source:"@site/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign.md",sourceDirName:"platform_concepts/engagement/outbound/outbound-campaigns",slug:"/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign",permalink:"/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Create Outbound campaign",title:"Create outbound campaign"},sidebar:"platform_concepts",previous:{title:"Line template",permalink:"/docs/platform_concepts/engagement/outbound/templates/linetemplate"},next:{title:"Outbound campaign report",permalink:"/docs/platform_concepts/engagement/outbound/outbound-campaigns/outbound-report"}},m={},u=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"2. Create Outbound campaign",id:"2-create-outbound-campaign",level:2},{value:"3. Configure templates for different channels",id:"3-configure-templates-for-different-channels",level:2},{value:"3.1 SMS campaign",id:"31-sms-campaign",level:3},{value:"3.2 Email campaign",id:"32-email-campaign",level:3},{value:"3.3 WhatsApp/Viber campaign",id:"33-whatsappviber-campaign",level:3},{value:"4. Schedule message",id:"4-schedule-message",level:2},{value:"4.1 How many times you want to run the campaign",id:"41-how-many-times-you-want-to-run-the-campaign",level:3},{value:"Run once",id:"run-once",level:5},{value:"Run multiple times",id:"run-multiple-times",level:5},{value:"4.2 Business hours",id:"42-business-hours",level:3},{value:"5. Segments",id:"5-segments",level:2},{value:"6. Campaign goal",id:"6-campaign-goal",level:2},{value:"1. Delivery goal",id:"1-delivery-goal",level:4},{value:"2. Conversion goal",id:"2-conversion-goal",level:4},{value:"3. Response goal",id:"3-response-goal",level:4},{value:"7. Test campaigns (Recommended)",id:"7-test-campaigns-recommended",level:2},{value:"Prerequisites for adding test user details",id:"prerequisites-for-adding-test-user-details",level:4},{value:"Test campaign",id:"test-campaign",level:4},{value:"8. Campaign errors",id:"8-campaign-errors",level:2}],c={toc:u};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This article provides how to create campaigns for any channel. The process for creating a campaign remains same for all channels. However, certain steps change in ",(0,o.kt)("em",{parentName:"p"},"Step 2: Message template")," depending on the channel and variables used in the selected template."),(0,o.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For WhatsApp")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/cookbooks/whatsapp-channel"},"Whatsapp channel")," configured with a business number."),(0,o.kt)("li",{parentName:"ul"},"Add only whitelisted templates (approved templates) in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/overview"},"templates")," module.")),(0,o.kt)("h2",{id:"2-create-outbound-campaign"},"2. Create Outbound campaign"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to your project and go to the ",(0,o.kt)("strong",{parentName:"p"},"Engage")," module.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"+ Create Campaign"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/CwsX8ok.png",alt:null})))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Provide ",(0,o.kt)("strong",{parentName:"p"},"Basic information"),"."),(0,o.kt)("p",{parentName:"li"},"a. Enter a suitable ",(0,o.kt)("strong",{parentName:"p"},"Campaign name")," that resonates well with the purpose of the campaign."),(0,o.kt)("p",{parentName:"li"},"b. Select your preferred channel through which you want to send communication in active channels."),(0,o.kt)("p",{parentName:"li"},"c. Click ",(0,o.kt)("strong",{parentName:"p"},"Next"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/wrrBEkl.gif",alt:null})))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Select your preferred ",(0,o.kt)("strong",{parentName:"li"},"Message template")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/outbound/templates/whatsapptemplate"},"WhatsApp"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/outbound/templates/email-template"},"Email"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/outbound/templates/sms-template"},"SMS"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/outbound/templates/mobilepush"},"Mobile push"),", ",(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/outbound/templates/viber-template"},"Viber")," using the radio button. For more details, see ",(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/outbound/templates/overview"},"Templates overview"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To view details of a template, click on the respective template. You can also see the preview of the template once you select it.")),(0,o.kt)("p",null,"You will see template configuration slide screen where you need to configure details like variables mapping, user identifier and so on."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Configure each template details and click ",(0,o.kt)("strong",{parentName:"li"},"Next")," to continue. ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For SMS, choose the user's phone number variable and map the variables used in the template to the user property variable.For more details, ",(0,o.kt)("a",{parentName:"p",href:"#21-sms-template"},"see here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For Email, choose the variable that contains email Id, select the sender ID (email ID), and map the user variables used in the template. For more details, ",(0,o.kt)("a",{parentName:"p",href:"#22-email-template"},"see here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For WhatsApp or Viber, choose the variable containing WhatsApp number, sender ID, and map the user variables used in the template. For more details, ",(0,o.kt)("a",{parentName:"p",href:"#23-whatsappviber-template"},"see here")),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/NXuyf1Q.gif",alt:null})))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The user contact details/ recipient column and other others can be selected from user data which you can upload/maintain in Yellow.ai User module.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In case you want to switch to User module to add audience, you can save the campaign as draft and continue later.")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select your ",(0,o.kt)("strong",{parentName:"p"},"Target Audience")," and click ",(0,o.kt)("strong",{parentName:"p"},"Next")," to proceed to scheduling the message (",(0,o.kt)("strong",{parentName:"p"},"Schedule"),")."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can either choose audience from the list of segments that you already created ","[OR]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a new segment using ",(0,o.kt)("strong",{parentName:"p"},"+ Add new segment"),". For more details, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview"},"Users module and segment creation"),".")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Schedule")," your Campaign: Define when to send the campaign (Timezone: Asia/Kolkata). For detailed procedure, see ",(0,o.kt)("a",{parentName:"p",href:"#3-schedule-message"},"Schedule message"),".  From the options, select "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Once")," to run the campaign for one occurrence."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Now")," to run after 10 min once you schedule the campaign."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Later")," to send out the campaign message on a specific date and time. Use the Calendar box to set your preferred date and time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Run multiple times")," to configure a recurring campaign.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ffRXb4m.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Set a goal"),", set the objective that you want to track for the campaign. For more details, see ",(0,o.kt)("a",{parentName:"p",href:"#6-campaign-goal"},"Campaign goals"),"."),(0,o.kt)("p",{parentName:"li"},"i. Select and configure your desired goal - ",(0,o.kt)("a",{parentName:"p",href:"#1-delivery-goal"},"Delivery"),", ",(0,o.kt)("a",{parentName:"p",href:"#2-conversion-goal"},"Conversion")," or ",(0,o.kt)("a",{parentName:"p",href:"#3-response-goal"},"Response"),".\nii. Set the duration (in hours/days) for which you want to track the goal in ",(0,o.kt)("strong",{parentName:"p"},"Track the goal for"),". For example, if there is a sale in a couple of days, you can set it to track for two days to get the count of messages delivered before the sale ends.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("strong",{parentName:"p"},"Test Campaigns")," to test it with internal team members before sending out actual audience. You can add upto five recipients. For a detailed procedure on how to test campaigns, see ",(0,o.kt)("a",{parentName:"p",href:"#5-test-campaigns-recommended"},"Test campaign"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Review and Launch")," the campaign. Preview all the campaign details on this page. You can go back to previous steps if you want to make any changes."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/WlmnEYU.png",alt:null})))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save as draft")," to save all your changes. You can resume from here anytime.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once you have reviewed all the details and is good to go, click on ",(0,o.kt)("strong",{parentName:"p"},"Launch Campaign")," to schedule. You will be redirected to ",(0,o.kt)("em",{parentName:"p"},"Campaigns overview")," page where you can monitor the campaign."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"3-configure-templates-for-different-channels"},"3. Configure templates for different channels"),(0,o.kt)("p",null,"This appears in the ",(0,o.kt)("em",{parentName:"p"},"Basic information")," screen once you select a channel template. You need to configure some settings depending on the channel and template. For example, setting up the sender ID, and mapping variables used in the template."),(0,o.kt)("p",null,"This section guides you on how to configure template for each channel - "),(0,o.kt)("h3",{id:"31-sms-campaign"},"3.1 SMS campaign"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Choose the field that contains users contact or number where they can receive the campaign"),", select the variable that contains the user's phone number."),(0,o.kt)("img",{src:"https://i.imgur.com/pndA2y7.png",width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Map variables"),", associate each variable mentioned in the template with the user variables. You can map a variable or provide a bot link "),(0,o.kt)("img",{src:"https://i.imgur.com/12hci2Z.png",class:"center",width:"60%"}))),(0,o.kt)("h3",{id:"32-email-campaign"},"3.2 Email campaign"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Choose the field that contains users contact or number where they can receive the campaign"),", select the variable that contains the user's email address."),(0,o.kt)("img",{src:"https://i.imgur.com/Y1h9Ui3.png",width:"350",height:"auto"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Select the email address from which you want to send the campaign"),", choose the email address from which you want to send the campaign. To know how to add email accounts, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/platform_concepts/channelConfiguration/email-outbound"},"Email channel"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Map variables"),", associate each variable mentioned in the template with the user variables. You can map a variable or provide a bot link "))),(0,o.kt)("h3",{id:"33-whatsappviber-campaign"},"3.3 WhatsApp/Viber campaign"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Choose the field that contains users contact or number where they can receive the campaign"),", select the variable that contains the user's WhatsApp number (mobile number)."),(0,o.kt)("img",{src:"https://i.imgur.com/94QMG8p.png",width:"350"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Sender ID"),", choose the WhatsApp business number from which you want to send the campaign."),(0,o.kt)("img",{src:"https://i.imgur.com/C2IrHHc.gif"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Map variables"),", associate each variable mentioned in the template with the user variables. You can map a variable or provide a bot link.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("strong",{parentName:"p"},"Media")," to configure personalized media for the campaign."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Static"),": Select to send a common media file to all the recipients. Use ",(0,o.kt)("strong",{parentName:"li"},"Browse")," to upload the media file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Dynamic"),": Select to send a personalized media to each user. Map the column from the db where you have included these details.")))),(0,o.kt)("h2",{id:"4-schedule-message"},"4. Schedule message"),(0,o.kt)("p",null,"As explained in the Step 6, you can choose when to run your campaign. However, there are advanced options to customize scheduling your message and make your campaign more effective."),(0,o.kt)("h3",{id:"41-how-many-times-you-want-to-run-the-campaign"},"4.1 How many times you want to run the campaign"),(0,o.kt)("p",null,"Choose whether to run the campaign only once or on a recurring basis."),(0,o.kt)("h5",{id:"run-once"},"Run once"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Now")," to run after 10 min once you schedule the campaign.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Later")," to send out the campaign message on a specific date and time. Use the Calendar box to set your preferred date and time."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/L8lNjcM.png",alt:null})),(0,o.kt)("h5",{id:"run-multiple-times"},"Run multiple times"),(0,o.kt)("p",null,"Select this to schedule a recurring campaign."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Repeat"),": Select the frequency of running the campaign.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Daily"),": Set your preferred date and time.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Weekly"),": Select the day of the week (Sun-Sat) when you want to run the campaign and set your preferred ",(0,o.kt)("strong",{parentName:"p"},"Time"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Monthly"),": Select the date of the month (1-31) when you want to send out the message and set your preferred ",(0,o.kt)("strong",{parentName:"p"},"Time"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Ends"),": Choose when you want to end the campaign."))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"never"),(0,o.kt)("td",{parentName:"tr",align:null},"To run the campaign for ever")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"on"),(0,o.kt)("td",{parentName:"tr",align:null},"To end on a specific date and set the desired date and time.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"after"),(0,o.kt)("td",{parentName:"tr",align:null},"to end after n number of occurrences and configure the respective options")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/6yd0sww.png",alt:null})),(0,o.kt)("h3",{id:"42-business-hours"},"4.2 Business hours"),(0,o.kt)("p",null,"This lets you can honor DND timings, so that you can prevent users from receiving campaigns during specific periods, such as late nights."),(0,o.kt)("p",null,"You can set business hours for each day of a week so that your campaign message will be sent out only during the configured business hours."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Enable Business hours"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/mCl051T.png",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"+ Add business hours setting")," > ",(0,o.kt)("strong",{parentName:"p"},"Add new business hour"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on each day of the week and configure business hours for that particular day. Enable ",(0,o.kt)("strong",{parentName:"p"},"Business hours same every day")," to set a common timeframe for all days."))),(0,o.kt)("img",{src:"https://i.imgur.com/SLqHfLu.png",width:"50%"}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Message handling during DND hours"))),(0,o.kt)("p",null,"You can configure what to do with the messages after the configured business hours using the following options."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/POhWjum.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Discard the message"),": The message will not be sent and will be marked failed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Postpone to next day"),": The campaign will be paused and will resume the next business hours."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/63KYDaH.png",alt:null})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can Pause a scheduled campaign and Resume it when required using the respective options from the Outbound campaign homepage."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/BlRcStg.png",alt:null}))),(0,o.kt)("h2",{id:"5-segments"},"5. Segments"),(0,o.kt)("p",null,"Segment is grouping of users based on certain condition sets. Segmentation can be based on city, tags, names, or any another user property."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can add multiple condition sets as required.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'In the below example, a segment is created with users whose country is mentioned as "india" from the User module.'))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/6UpBV4r.gif",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once the segment is created, you can see the number of users under the segment.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/mV0dGW4.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/HCNM7HD.png",alt:null})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"6-campaign-goal"},"6. Campaign goal"),(0,o.kt)("p",null,"The campaign goal represents a specific objective that you want to achieve through the campaign. Campaign goals can vary depending on the purpose of the campaign and the desired outcome. "),(0,o.kt)("p",null,"Tracking the progress of campaign goals is important to ensure the effectiveness of the campaign in meeting its objectives. This could include the template used, user segment targetted, scheduled time, or any other parameter."),(0,o.kt)("p",null,"Goals are categorised into three types depending on the purpose of the campaign:"),(0,o.kt)("h4",{id:"1-delivery-goal"},"1. Delivery goal"),(0,o.kt)("p",null,"The delivery goal helps you track the messages delivery status and assess the campaign reach. For example, for promoting a new outlet, your goal could be the number of messages delivered. "),(0,o.kt)("p",null,"Currently, there are three delivery statuses supported - sent, delivered, and read. However, not all channels support all three statuses. For example, the message read cannot be tracked for SMS."),(0,o.kt)("p",null,"  ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/KAEGKoJ.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("strong",{parentName:"li"},"What do you want to track"),",  select the delivery status to track.")),(0,o.kt)("h4",{id:"2-conversion-goal"},"2. Conversion goal"),(0,o.kt)("p",null,"Track the conversion event as the campaign goal."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/2jDXx4C.png",alt:null})),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"Select event"),", choose the event that you want to track."),(0,o.kt)("h4",{id:"3-response-goal"},"3. Response goal"),(0,o.kt)("p",null,"This goal helps you track the reactions or clicks received for the campaign. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ozLtuBo.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Select Any response"),": Tracks all types of responses received for the campaign."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Button clicks"),": Tracks only button clicks received for the campaign. You can use this only for templates with CTAs.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"7-test-campaigns-recommended"},"7. Test campaigns (Recommended)"),(0,o.kt)("p",null,"It is recommended to test your campaign with internal or test users before launching to ensure the campaign notifications are flawless. Especially, verify if images, buttons, deep links, and elements of personalisation are working or rendering as expected."),(0,o.kt)("p",null,"The following are the benefits of testing a campaign before launching -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prevent sending wrong content to the customers."),(0,o.kt)("li",{parentName:"ul"},"Enables viewing the notification messages as and how the end-users receive."),(0,o.kt)("li",{parentName:"ul"},"Ensures the variables are mapped to the right user properties."),(0,o.kt)("li",{parentName:"ul"},"Reduces campaign failures due to mismatch in parameters or issues with images size.")),(0,o.kt)("h4",{id:"prerequisites-for-adding-test-user-details"},"Prerequisites for adding test user details"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test users data should be available in the ",(0,o.kt)("em",{parentName:"li"},"User 360")," module"),(0,o.kt)("li",{parentName:"ul"},"Test users should have all the data which will be mapped to the variables used in the template.")),(0,o.kt)("h4",{id:"test-campaign"},"Test campaign"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you Schedule a campaign, you will see an option to Test campaign in Step 8 of ",(0,o.kt)("a",{parentName:"p",href:"#2-create-campaign"},"Create campaign"),", Review and launch."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/CzxSZrO.png",alt:null})))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Test campaign"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Xfxyepv.png",alt:null})))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Search for test users.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A wizard will be opened to add test user details.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can search users by name, email, phone number or userID. You will see auto-suggestions in the drop-down as you type."),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/UqXJZ3h.gif",alt:null})))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add test users"),(0,o.kt)("p",{parentName:"li"},"a. Click on the relevant user to populate all values like recipient ID and other parameters if any."),(0,o.kt)("p",{parentName:"li"},"b. Check whether all the parameters are mapped correctly to the desired user columns."),(0,o.kt)("p",{parentName:"li"},"c. Ensure all the values are available for the user. If not, use a different user use whose required details are available."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/mPC8ArU.png",alt:null})))),(0,o.kt)("p",null,"   d. To add more users (up to 5 test users) click on ",(0,o.kt)("strong",{parentName:"p"},"+Add Users")," and repeat the process."),(0,o.kt)("p",null,"   ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/OFDwZvH.gif",alt:null})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Send test campaign")," to trigger campaign to the selected users."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/AV194YX.png",alt:null})))),(0,o.kt)("p",null,"You will see the ",(0,o.kt)("em",{parentName:"p"},"Sending")," status. You can see the actual delivery status after a while (about 15 seconds) - Delivered or Failed."),(0,o.kt)("p",null,"   ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Sm9nuYW.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To send the test campaign to more users, click on ",(0,o.kt)("strong",{parentName:"p"},"Send new test campaign"),"."),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/UsOTzmX.png",alt:null})))),(0,o.kt)("p",null,"For Failed messages, you can also see the reason for failure."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"It takes 15 seconds to update the sent status of messages."),(0,o.kt)("li",{parentName:"ul"},"If there is any mismatch in the data, save the campaign using ",(0,o.kt)("strong",{parentName:"li"},"Save as draft"),". Then, navigate to templates step, correct your mappings and test again."))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"8-campaign-errors"},"8. Campaign errors"),(0,o.kt)("p",null,"Here are some common errors that you may encounter when working with campaigns:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For API related error codes and descriptions, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#24-response-codes"},"Notification API response codes"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What next")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"See how your campaign is performing using ",(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/outbound/outbound-campaigns/outbound-report"},"Outbound campaign report"),".")))}g.isMDXComponent=!0}}]);