"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[8477],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},15739:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={title:"Set up outbound campaign via. yellow.ai voice bots",sidebar_label:"Set up outbound campaign"},s=void 0,c={unversionedId:"cookbooks/voice-as-channel/OBcampaign/setupOBC",id:"cookbooks/voice-as-channel/OBcampaign/setupOBC",title:"Set up outbound campaign via. yellow.ai voice bots",description:"In this article, you will learn how to select an entry rule and design a campaign flow for voice bots.",source:"@site/docs/cookbooks/voice-as-channel/OBcampaign/setupOBC.md",sourceDirName:"cookbooks/voice-as-channel/OBcampaign",slug:"/cookbooks/voice-as-channel/OBcampaign/setupOBC",permalink:"/docs/cookbooks/voice-as-channel/OBcampaign/setupOBC",draft:!1,tags:[],version:"current",frontMatter:{title:"Set up outbound campaign via. yellow.ai voice bots",sidebar_label:"Set up outbound campaign"},sidebar:"platform_concepts",previous:{title:"Outbound campaign overview",permalink:"/docs/cookbooks/voice-as-channel/OBcampaign/introOBC"},next:{title:"Global & node level options",permalink:"/docs/cookbooks/voice-as-channel/build/botbuilderintro"}},p={},m=[{value:"Step 1: Create a voice bot campaign workflow",id:"step-1-create-a-voice-bot-campaign-workflow",level:2},{value:"Step 2: Select entry rule for the voice bot campaign",id:"step-2-select-entry-rule-for-the-voice-bot-campaign",level:2},{value:"Step 3: Add voice call node and configure the campaign",id:"step-3-add-voice-call-node-and-configure-the-campaign",level:2},{value:"Step 4: Add goal to end the voice bot campaign",id:"step-4-add-goal-to-end-the-voice-bot-campaign",level:2},{value:"Step 5: Publish workflow for voice bot campaign",id:"step-5-publish-workflow-for-voice-bot-campaign",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article, you will learn how to select an entry rule and design a campaign flow for voice bots."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Prerequisite")),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"User segmentation"),": Grouping users based on shared characteristics, such as interests or behaviors, is known as user segmentation. There are two types of segments: static segments, which remain constant, and dynamic segments, which update automatically based on user data. To send targeted campaigns, you need to have user data grouped into segments in ",(0,r.kt)("strong",{parentName:"li"},"user360"),". Segments like product interest or recent purchasers can be created for effective messaging.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Follow the steps ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview"},"here")," to create and manage user segments"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Events"),": an event refers to a recognized occurrence by the bot (asynchronous). In ",(0,r.kt)("strong",{parentName:"li"},"Studio"),", there are various events available, such as widget, inbox, engage, integration, user inactivity, schedule, User 360, and custom events, which are used to handle occurrences and perform tasks.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Learn more about events and the steps to create custom events ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub"},"here"),"."))))),(0,r.kt)("p",null,"To create a voice bot campaign, follow these steps:"),(0,r.kt)("h2",{id:"step-1-create-a-voice-bot-campaign-workflow"},"Step 1: Create a voice bot campaign workflow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log in to your ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.yellow.ai/"},"yellow.ai")," account. Open ",(0,r.kt)("strong",{parentName:"li"},"Engage")," > ",(0,r.kt)("strong",{parentName:"li"},"Outbound"),". "),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Flows")," tab, select ",(0,r.kt)("strong",{parentName:"li"},"+Create workflow"),".\n",(0,r.kt)("img",{parentName:"li",src:"https://hackmd.io/_uploads/HknRKzRS2.png",alt:null}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-2-select-entry-rule-for-the-voice-bot-campaign"},"Step 2: Select entry rule for the voice bot campaign"),(0,r.kt)("p",null,"To get started, follow the steps below: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the entry rule that best aligns with your business needs.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Entry rule"),(0,r.kt)("th",{parentName:"tr",align:null},"Trigger"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#user-events"},"User events")),(0,r.kt)("td",{parentName:"tr",align:null},"Select this to trigger the flow when a specific user event occurs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#user-entered-a-segment"},"User entered a segment")),(0,r.kt)("td",{parentName:"tr",align:null},"Select this to trigger the campaign when the user enters a specific segment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#user-exited-a-segment"},"User exited a segment")),(0,r.kt)("td",{parentName:"tr",align:null},"Select this to trigger the campaign when the user exits a specific segment.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#user-present-in-a-segment"},"User present in a segment")),(0,r.kt)("td",{parentName:"tr",align:null},"Select this to trigger the campaign only when the user is in a specific segment.")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Choose your audience"),": When selecting entry rules, you have the option to choose one or multiple user segments or target all users in User360.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Set campaign schedule"),": For each entry rule, you can determine the frequency and specific time for running the campaign.           "),(0,r.kt)("img",{src:"https://hackmd.io/_uploads/BJTjcGRH2.png",width:"50%"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-3-add-voice-call-node-and-configure-the-campaign"},"Step 3: Add voice call node and configure the campaign"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Voice calls can only be added to the workflow if the voice bot has an IVR (Interactive Voice Response) configuration in place."),(0,r.kt)("li",{parentName:"ul"},"It is necessary to configure a flow that the voice bot will follow when the campaign is triggered. This flow will serve as a template for voice calls."),(0,r.kt)("li",{parentName:"ul"},"If you intend to use other message channels such as SMS or Email, you need to configure the senderID/channel and ensure that a corresponding template is available for that particular channel."))),(0,r.kt)("p",null,"To initiate a voice call, follow the steps below: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect the ",(0,r.kt)("strong",{parentName:"p"},"Voice call node")," (available under the message category) to the initial node in the workflow."),(0,r.kt)("img",{src:"https://hackmd.io/_uploads/HJcCv70Bh.png",width:"90%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the details."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable answering machine detection (AMD)")," : You have the option to enable AMD, which helps determine if a voice call made by the bot is answered by a human or a machine (such as a voicemail system)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bot flow"),": From the dropdown menu, select the desired flow that should be triggered when the campaign call is made to customers. All available flows in Studio are listed here."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"From"),": Choose the IVR number(s) from which the voice call should be made. If multiple IVRs are added, the calls will be made randomly from any of those numbers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"To"),": Select the variable that contains the user identifier. Click ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/userid-flow"},"here")," for steps on setting up user identification."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Call trigger time"),": Set the business hours in the ",(0,r.kt)("strong",{parentName:"li"},"Settings")," and configure the flow to be triggered only during those designated business hours.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/SyIl0Q0S2.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add connecting nodes to the voice node to determine the subsequent steps based on different scenarios. You can define the next actions based on whether AMD is detected, the call is answered, the line is busy, there is no answer, or if the call fails to connect.\n",(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/BkiZpQCBn.png",alt:null})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can add ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#condition-to-trigger-flow-campaign"},"conditions"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#flow-control"},"flow control")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#action"},"action")," to design the flow. ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-4-add-goal-to-end-the-voice-bot-campaign"},"Step 4: Add goal to end the voice bot campaign"),(0,r.kt)("p",null,"To prevent spamming users, it is recommended to add a campaign goal. When an event is detected that signifies the completion of the goal, users will exit the flow and the campaign will end."),(0,r.kt)("p",null,"Follow these steps to add a new goal to the flow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Add new goal to the flow"),"."),(0,r.kt)("li",{parentName:"ol"},"Add details: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name"),": Type any custom name. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Event"),": Select an event that you have activated in Studio. When this ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub"},"event")," is identified, it will indicate that the goal has been reached."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Set goal validity"),": Choose the duration for which the goal should remain valid. After the specified duration, the campaign will still be active, but the goal won't be considered."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Save")," the goal.",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{parentName:"li",src:"https://hackmd.io/_uploads/rJwmAQ0B2.png",alt:null}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"step-5-publish-workflow-for-voice-bot-campaign"},"Step 5: Publish workflow for voice bot campaign"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Publish")," to publish the flow and make it active.\n",(0,r.kt)("img",{parentName:"li",src:"https://hackmd.io/_uploads/HJVXeVCB3.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"Once the campaign is published, it will automatically run for users who meet the entry rule criteria."),(0,r.kt)("li",{parentName:"ol"},"To monitor the status of the voice bot campaign, track the users who have entered the campaign, and keep a count of the number of times the goal has been achieved, refer to the flow campaign page.\n",(0,r.kt)("img",{parentName:"li",src:"https://hackmd.io/_uploads/rJYgl40Hn.png",alt:null}))))}d.isMDXComponent=!0}}]);