"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[7238],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47880:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={title:"Understand delays in a conversation",sidebar_label:"Understand conversational delays"},l=void 0,p={unversionedId:"cookbooks/voice-as-channel/personalize/conversationaldelays",id:"cookbooks/voice-as-channel/personalize/conversationaldelays",title:"Understand delays in a conversation",description:"Delays are the time between the user response and the bot response.",source:"@site/docs/cookbooks/voice-as-channel/personalize/conversationaldelays.md",sourceDirName:"cookbooks/voice-as-channel/personalize",slug:"/cookbooks/voice-as-channel/personalize/conversationaldelays",permalink:"/docs/cookbooks/voice-as-channel/personalize/conversationaldelays",draft:!1,tags:[],version:"current",frontMatter:{title:"Understand delays in a conversation",sidebar_label:"Understand conversational delays"},sidebar:"cookbooks",previous:{title:"Understand user response",permalink:"/docs/cookbooks/voice-as-channel/personalize/understanduserresponse"},next:{title:"Interruption handling",permalink:"/docs/cookbooks/voice-as-channel/usecases/interrupthandling"}},d={},u=[{value:"1. Types of delays",id:"1-types-of-delays",level:2},{value:"2. Configure delays for different use cases",id:"2-configure-delays-for-different-use-cases",level:2},{value:"2.1 Configure for Yes/ No response",id:"21-configure-for-yes-no-response",level:3}],c={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Delays are the time between the user response and the bot response.\nFor example, the user response is "is there any discount?", and the delay is the time that the bot takes to process a line and respond to it. '),(0,r.kt)("p",null,"The objective of the Telephony and Yellow cloud platform is to reduce the conversational delay and make the conversation more human-like."),(0,r.kt)("p",null,"Before understanding and configuring the voice bot for the best user experience in terms of minimising the conversation delay and still not cutting off the user mid-sentence, let's try to understand the way normal dialogue works."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When the response is a ",(0,r.kt)("strong",{parentName:"li"},"Yes/No")," value: This is supposed to be an instantaneous response and probably not a very long statement."),(0,r.kt)("li",{parentName:"ol"},"When the response is an ",(0,r.kt)("strong",{parentName:"li"},"address"),": This consists of multiple pauses/gaps and a longer time to complete the whole response. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ex: Door #1 < pause > Sector-D1 < pause > Kanpur Road < pause > Lucknow")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"When the response is a ",(0,r.kt)("strong",{parentName:"li"},"phone number"),": This will be a patterned delay and there will be a few pauses but the whole response is not very long. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ex: 99-44-32-06-11 or +1-202-795-3213")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-types-of-delays"},"1. Types of delays"),(0,r.kt)("p",null,"Once we have understood how normal dialogue dealy works, let's have a look at other kinds of delay that are introduced in the bot conversation.  After having a clear idea about the functioning of delays, we can better optimize the conversation around the same. "),(0,r.kt)("p",null,"Delay (or perceived delay to the user) is the amount of time it takes after the user completes the query/response and the bot voice out the next response."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/ossdeuj.png",alt:null})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"STT delay"),": When the user has responded and the telephony platform has received the audio file. This delay is caused when the audio file is getting converted to the text file on the STT engine. This delay depends on the number of characters, simple name response will take lesser time to process than an address. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Ex: Audio-to-text conversation of "My name is Jake, what is my bank balance?"')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The yellow cloud platform would have defined a range of duration for which the telephony platform accepts the response. For example, if the user is responding with a phone number we can ask the bot to only record it for 1 minute by setting the ",(0,r.kt)("strong",{parentName:"p"},"Recording max duration"),".")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Telephony to yellow cloud platform"),": The converted audio to text response will get transported from the telephony platform.  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"NLP engine response time within cloud platform"),": The text received on the yellow cloud platform will be sent to the NLP engine. Internally there will run a logical function where the software understands the user text response, finds a solution to continue the flow and generate a bot response. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Yellow to telephony cloud platform"),": The text response generated by the NLU-yellow cloud platform will get transported to the telephony platform. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TTS delay"),": This delay occurs while the bot response text is getting converted to an audio format by the TTS engine so that it can be played as a response to the user.  ")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"TTS delay optimisation using cache memory")),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Use case"),': Assume you own an ominous that converses with 1000 users in a day and the conversation flow is mostly the same. Ex: First bot question will be "what is your name" and the next would be to inform the user - "we have introduced a 0% intro APR offer on both purchases and transfers".'),(0,r.kt)("p",{parentName:"admonition"},"These repetitive messages or the small audio files remain the same throughout all the calls, hence the TTS delay that occurs while the NLP text response is getting converted to speech is optimised using ",(0,r.kt)("strong",{parentName:"p"},"cache"),". This skips the TTS delay and fetches the bot response from the cache database (present in the telephony platform). "),(0,r.kt)("p",{parentName:"admonition"},"The audio files generated from the first few user conversations are stored in the database and reused for the other calls reducing the overall latency. ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-configure-delays-for-different-use-cases"},"2. Configure delays for different use cases"),(0,r.kt)("p",null,"Finally, after understanding the art of human dialogue and the system of voice bot, let us drill down on designing and configuring the bot in much better way.\nWhile understanding the system delays, there were 3 major parts to it:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"STT"),"   "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Telephony-Cloud Communication"),"    "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"TTS"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Telephony-Cloud")," stacks are very tightly integrated with each other and with a very reliable and fast NLP engine the whole delay for this section is negligible.\n",(0,r.kt)("strong",{parentName:"p"},"TTS delay")," is already very well optimized by using the caching mechanism explained above.")),(0,r.kt)("p",null,"Clever configuration lies is on how we optimize the STT delay. Let's understand that process below: "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Understanding STT detection")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use-case"),': The bot asks the user "Are you sure you want to place this order?" and the user responds with Yes/No. '),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Initial delay"),": This delay occurs when the user hears the bot's response and takes time to process it before replying. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Information delay"),": The time taken for the user to speak the complete response. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Pauses"),": Pauses taken in between each of the words are considered a delay. Pause for a Yes/No answer will be nill and there will be multiple pauses while recording an address. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Final dealy"),": After the user has spoken the response, the duration of time the bot waits to understand that the user response is received and it must be processed as a single audio file. ")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To design a good voice bot you must configure these parameters at the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes#32-configure-node-for-a-voice-bot"},"node level")," based on the question being asked.")),(0,r.kt)("h3",{id:"21-configure-for-yes-no-response"},"2.1 Configure for Yes/ No response"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"STT engine:: Microsoft and STT mode:: Streaming")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Recording max duration")),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum duration after which the recording stops - the user response won't be accepted beyond this time."),(0,r.kt)("td",{parentName:"tr",align:null},"3 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Recording silence duration")),(0,r.kt)("td",{parentName:"tr",align:null},"This value is the Max duration for which the bot will wait after asking a question (in any step) for the user to respond."),(0,r.kt)("td",{parentName:"tr",align:null},"Not applicable for the streaming mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Initial silence duration")),(0,r.kt)("td",{parentName:"tr",align:null},"acceptable silence duration before a bot user starts speaking."),(0,r.kt)("td",{parentName:"tr",align:null},"0.8 - 1 second")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Final silence duration")),(0,r.kt)("td",{parentName:"tr",align:null},"Acceptable silence duration after a bot user starts speaking and the bot will have to process the response (Final dealy must be greater than expected pauses)."),(0,r.kt)("td",{parentName:"tr",align:null},"0.5-1 second")))))}h.isMDXComponent=!0}}]);