"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[934],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Design conversations for voice bots",sidebar_label:"Design conversations for voice bots"},s=void 0,p={unversionedId:"platform_concepts/design/convdesignvoice",id:"platform_concepts/design/convdesignvoice",title:"Design conversations for voice bots",description:"Design module on the yellow.ai platform allows you to design a bot without needing to learn all the platform aspects prior. You can input text as required to create a conversation between the bot and the user. Flows are built automatically on the Studio module.",source:"@site/docs/platform_concepts/design/convdesignvoice.md",sourceDirName:"platform_concepts/design",slug:"/platform_concepts/design/convdesignvoice",permalink:"/docs/platform_concepts/design/convdesignvoice",draft:!1,tags:[],version:"current",frontMatter:{title:"Design conversations for voice bots",sidebar_label:"Design conversations for voice bots"},sidebar:"platform_concepts",previous:{title:"Design conversations for chat bots",permalink:"/docs/platform_concepts/design/conversation-design"},next:{title:"Overview",permalink:"/docs/platform_concepts/studio/overview"}},u={},c=[{value:"1. Create a new voice bot",id:"1-create-a-new-voice-bot",level:2},{value:"2. Configure Bot persona and SSML",id:"2-configure-bot-persona-and-ssml",level:2},{value:"2.1 Bot persona settings",id:"21-bot-persona-settings",level:3},{value:"2.2 Bot response settings",id:"22-bot-response-settings",level:3},{value:"2.3 Preview your settings",id:"23-preview-your-settings",level:3},{value:"3. Store and use variables",id:"3-store-and-use-variables",level:2},{value:"4. Design conversations for voice bot (Demo)",id:"4-design-conversations-for-voice-bot-demo",level:2},{value:"5. Preview voice bot (Receive a live call)",id:"5-preview-voice-bot-receive-a-live-call",level:2},{value:"6. Share designs",id:"6-share-designs",level:2},{value:"7. Sync conversation flows to studio and deploy",id:"7-sync-conversation-flows-to-studio-and-deploy",level:2}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Design")," module helps you design a bot without needing to learn all the platform aspects prior. You can design a conversation between the bot and the user using text inputs. Based on the input, flows are created dynamically on the Studio module."),(0,o.kt)("p",null,"Once the text you input is converted into flows, you can train, test, and preview the flow before publishing. You can design multiple flows."),(0,o.kt)("p",null,"In this article, you will learn how to use the conversation design to build ",(0,o.kt)("strong",{parentName:"p"},"voice bots"),". "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"1-create-a-new-voice-bot"},"1. Create a new voice bot"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are a new user, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup"},"this")," article. ")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai"},"Log in")," to your account and click ",(0,o.kt)("strong",{parentName:"p"},"+Create new bot"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/wAbVsH9.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Create from scratch"),". "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/0LG3d7y.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter these details: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Subscription"),": Select the ",(0,o.kt)("strong",{parentName:"li"},"subscription")," under which you want to create this bot."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bot type"),": Choose ",(0,o.kt)("strong",{parentName:"li"},"Voice bot"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Avatar"),": Choose/upload an avatar (your bots display photo)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Industry"),": Select from the dropdown. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Region"),": Select from the dropdown."),(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("strong",{parentName:"li"},"Add live chat support to your bot")," if you want to add a customer support flow."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create bot"),". "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/u2UEI56.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the module switcher, select ",(0,o.kt)("strong",{parentName:"p"},"Design"),". "),(0,o.kt)("img",{src:"https://i.imgur.com/AcKCNyw.png",alt:"drawing",width:"70%"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"2-configure-bot-persona-and-ssml"},"2. Configure Bot persona and SSML"),(0,o.kt)("p",null,"While creating flows manually, for each of these nodes, you had to enter the text in Speech synthesis markup language(SSML) format and configure further using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice"},"Tools")," or ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes#32-configure-node-for-a-voice-bot"},"Node settings"),". "),(0,o.kt)("p",null,"With the conversation designer, you can design natural voice conversations by auto-generating SSML tags from voice effects such as emphasis, pronunciation, pause, etc."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Global and Node-level settings are configured with the default values. You can skip these steps if you do not want to customize it. ")),(0,o.kt)("h3",{id:"21-bot-persona-settings"},"2.1 Bot persona settings"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Bot persona settings (global settings) will only be applied to the conversations created after applying to the settings. The previous conversations are not updated with the new settings. ")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," button on the top-right of the screen. Changes made in Bot persona settings will apply to all the nodes. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Language"),": Select the language you want the bot to speak. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Voice"),": Voices available are listed in the dropdown, select your preferred voice.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pitch/Speed/Volume"),": Set the cursor to your preferred values. "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),". "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/QCSgznC.png",alt:null})))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"22-bot-response-settings"},"2.2 Bot response settings"),(0,o.kt)("p",null,"These are node-level settings. With this, voice input nodes are updated with ",(0,o.kt)("strong",{parentName:"p"},"SSML")," code(bot response) on ",(0,o.kt)("strong",{parentName:"p"},"Studio"),".  "),(0,o.kt)("p",null,"On the dialogue box, double-click on the entered text (bot says). You will see the following configurations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Emphasis"),": Select a text from the entered sentence and emphasize(stress) that word (",(0,o.kt)("strong",{parentName:"p"},"low, medium, high"),"). If you select ",(0,o.kt)("strong",{parentName:"p"},"Off"),", emphasis applied by default will detain. "),(0,o.kt)("img",{src:"https://i.imgur.com/pp9id0a.png",alt:"drawing",width:"70%"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Pause"),": You can add pauses (delays) between words/sentences. "),(0,o.kt)("img",{src:"https://i.imgur.com/RwtNLlj.png",alt:"drawing",width:"70%"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Music"),": You can add .mp3 or .wav music files, that can get played during the conversation."),(0,o.kt)("img",{src:"https://i.imgur.com/AqLhpza.png",alt:"drawing",width:"70%"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Interpret"),": You can use it to interpret a word in a particular format. "),(0,o.kt)("img",{src:"https://i.imgur.com/IBRZqiG.png",alt:"drawing",width:"70%"}))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Input"),(0,o.kt)("th",{parentName:"tr",align:null},"Output"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Off"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"If you are unhappy with the bot's interpretation, you can turn it off.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Spell out"),(0,o.kt)("td",{parentName:"tr",align:null},"EMI"),(0,o.kt)("td",{parentName:"tr",align:null},"E M I")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cardinal(for decimal numbers)"),(0,o.kt)("td",{parentName:"tr",align:null},"-0.345"),(0,o.kt)("td",{parentName:"tr",align:null},"Minus zero point three four five")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ordinal(integral numbers)"),(0,o.kt)("td",{parentName:"tr",align:null},"10 Jan"),(0,o.kt)("td",{parentName:"tr",align:null},"Tenth Jan")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number_di"),(0,o.kt)("td",{parentName:"tr",align:null},"9000080000"),(0,o.kt)("td",{parentName:"tr",align:null},"Nine zero zero zero zero eight zero zero zero zero")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Date"),(0,o.kt)("td",{parentName:"tr",align:null},"14/02"),(0,o.kt)("td",{parentName:"tr",align:null},"Fourteenth feburary")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Time"),(0,o.kt)("td",{parentName:"tr",align:null},"9:15 am"),(0,o.kt)("td",{parentName:"tr",align:null},"Nine fifteen A.M")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Duration"),(0,o.kt)("td",{parentName:"tr",align:null},"5hrs"),(0,o.kt)("td",{parentName:"tr",align:null},"Five hours")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Telephone"),(0,o.kt)("td",{parentName:"tr",align:null},"9000080000"),(0,o.kt)("td",{parentName:"tr",align:null},"9000-080-000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Currency"),(0,o.kt)("td",{parentName:"tr",align:null},"15 $"),(0,o.kt)("td",{parentName:"tr",align:null},"Fifteen dollars")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Address"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Mr.Aagam"),(0,o.kt)("td",{parentName:"tr",align:null},"Mister aagam")))),(0,o.kt)("h3",{id:"23-preview-your-settings"},"2.3 Preview your settings"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is the Text to speech conversion of SSML added to the nodes. ")),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Preview")," in the dialogue box and understand how the bot sounds after configuring it. "),(0,o.kt)("img",{src:"https://i.imgur.com/LlclIW4.png",alt:"drawing",width:"80%"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"3-store-and-use-variables"},"3. Store and use variables"),(0,o.kt)("p",null,"You can store and use user's information during the conversation by storing it in a variable. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"There are two types of variables you can store this data in: "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties"},"User properties"),": These are default variables avaiable on the platform. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#21-custom-variables"},"Custom variables"),": These are variables created specifically for your bot. "))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Store response in")," option is used for the user's side of the conversation (User says). You can store the input from the user in a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes"},"variable")," by selecting a variable next to ",(0,o.kt)("strong",{parentName:"li"},"Store the responses"),". You can choose an existing variable or click ",(0,o.kt)("strong",{parentName:"li"},"+Add new variable"),". Example: Store customers name in First name variable. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/evx9hB8.png",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Use response")," option is used on the bot's side of the conversation (Bot says). Bot can speak out the input stored in a ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes"},"variable")," by selecting a variable next to ",(0,o.kt)("strong",{parentName:"li"},"Use variable"),". After you add a variable, it will get fetched in the bot say's text. Example: Speak customers name that is stored in First name variable. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/oSJrnef.png",alt:null})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"4-design-conversations-for-voice-bot-demo"},"4. Design conversations for voice bot (Demo)"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Home")," flow is the main flow from where the conversation starts(you can rename/delete/add it as fallback). This can be followed by other flows. "),(0,o.kt)("li",{parentName:"ul"},"All the messages are trained as text. You cannot add buttons or other chat-design options. "))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Demo"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/rqP9Cp7.gif",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dialog box"),": You can add a bot and user conversation here. The name of the dialogue box can be changed by clicking the pencil icon on top.   ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bot says"),": Add the questions you want the bot to ask. Ex: Hey! What is your name? "),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Use response")," option can be used to speak out any stored variable."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"User says"),": Add the questions you are expecting from the bot user. Example: My name is Karan. I want to enquire about my bank balance. "),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Store response in")," option can be used to store user's input in a variable."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fallback"),": Message from the bot's side when the bot is unable to provide the solution/ understand the user's query. Example: I did not get your name, can you please repeat? ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create flow"),": Click ",(0,o.kt)("strong",{parentName:"p"},"+ Create flow")," to create a new flow. "),(0,o.kt)("img",{src:"https://i.imgur.com/GplCpZt.png",alt:"drawing",width:"100%"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Add components"),": Click ",(0,o.kt)("strong",{parentName:"p"},"+")," and connect this dialogue to a new ",(0,o.kt)("strong",{parentName:"p"},"flow"),"/",(0,o.kt)("strong",{parentName:"p"},"dialogue"),"/",(0,o.kt)("strong",{parentName:"p"},"condition"),"."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/lORvCQ3.png",alt:null})))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Click ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/convdesiVB"},"here")," for a detailed guide on building a voice bot for a sample use-case using design. ")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"5-preview-voice-bot-receive-a-live-call"},"5. Preview voice bot (Receive a live call)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This demo is accessible if your bot is connected with Interactive Voice Response (IVR). Click ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/Ivr"},"here")," for more details. ")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Preview")," at the top-right of your screen. "),(0,o.kt)("img",{src:"https://i.imgur.com/r1b7Mqb.png",alt:"drawing",width:"70%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter your phone number. Verify your OTP. "),(0,o.kt)("img",{src:"https://i.imgur.com/n0440Ru.png",alt:"drawing",width:"40%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Call"),". You will receive a phone call to the entered number. You can have a conversation with the bot and experience its behavior. "))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"6-share-designs"},"6. Share designs"),(0,o.kt)("p",null,"Share designs with others within the platform to quickly close the feedback loop"),(0,o.kt)("img",{src:"https://i.imgur.com/rdyRDoh.png",alt:"drawing",width:"80%"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"7-sync-conversation-flows-to-studio-and-deploy"},"7. Sync conversation flows to studio and deploy"),(0,o.kt)("p",null,"With bi-directional auto-sync, the information on the ",(0,o.kt)("strong",{parentName:"p"},"Design")," module will be available as ",(0,o.kt)("em",{parentName:"p"},"flows")," on ",(0,o.kt)("strong",{parentName:"p"},"Studio")," (and vice versa)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the overview switcher, select ",(0,o.kt)("strong",{parentName:"p"},"Studio > Flows"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you want to add a welcome message or change the flow from which the bot conversation starts, click ",(0,o.kt)("strong",{parentName:"p"},"Welcome message")," on the conversation settings section and edit it. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/zv58neq.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can click on the created flows to edit and test them. All the nodes in the flow would be accommodated with the SSLM input as configured.  "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/v0dgTFm.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Publish changes")," to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes"},"publish")," the bot. Once approved, your voice bot will be live and ready to handle calls."))))}d.isMDXComponent=!0}}]);