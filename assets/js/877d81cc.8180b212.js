"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[10226],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65079:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Key components of a voice bot",sidebar_label:"Components of a voice bot"},l=void 0,c={unversionedId:"cookbooks/voice-as-channel/components",id:"cookbooks/voice-as-channel/components",title:"Key components of a voice bot",description:"Voice bots use advanced technologies for seamless and interactive communication via voice channels. Understanding the key components is vital for designing and implementing an effective voice bot system. These components facilitate efficient user interaction and communication.",source:"@site/docs/cookbooks/voice-as-channel/components.md",sourceDirName:"cookbooks/voice-as-channel",slug:"/cookbooks/voice-as-channel/components",permalink:"/docs/cookbooks/voice-as-channel/components",draft:!1,tags:[],version:"current",frontMatter:{title:"Key components of a voice bot",sidebar_label:"Components of a voice bot"},sidebar:"platform_concepts",previous:{title:"Architecture of a voice bot",permalink:"/docs/cookbooks/voice-as-channel/voicearchitecture"},next:{title:"Set up customer support",permalink:"/docs/cookbooks/voice-as-channel/transfertoagent"}},p={},u=[{value:"Key components of voicebot workflow",id:"key-components-of-voicebot-workflow",level:4},{value:"1. Capturing user inputs",id:"1-capturing-user-inputs",level:2},{value:"2. Understanding &amp; responding to user responses",id:"2-understanding--responding-to-user-responses",level:2},{value:"3. Customizing bot responses",id:"3-customizing-bot-responses",level:2},{value:"Additional response customization on yellow.ai",id:"additional-response-customization-on-yellowai",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Voice bots use advanced technologies for seamless and interactive communication via voice channels. Understanding the key ",(0,r.kt)("strong",{parentName:"p"},"components")," is vital for designing and implementing an effective voice bot system. These components facilitate efficient user interaction and communication."),(0,r.kt)("p",null,"This article highlights the basics of voice bot components. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("h4",{parentName:"admonition",id:"recap-of-the-voicebot-workflow"},"Recap of the voicebot workflow"),(0,r.kt)("p",{parentName:"admonition"},"To understand the components of a voice bot, you must have a basic understanding of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/voice-as-channel/voicearchitecture#2-workflow-of-a-voice-bot"},"voice bot architecture"),". "),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Customer")," initiates a ",(0,r.kt)("strong",{parentName:"li"},"call")," to the voice bot and makes a service request."),(0,r.kt)("li",{parentName:"ol"},"The customer's ",(0,r.kt)("strong",{parentName:"li"},"speech is converted into text"),". This text is then sent to the ",(0,r.kt)("strong",{parentName:"li"},"telephony")," platform, which acts as the interface between the cloud and the customer."),(0,r.kt)("li",{parentName:"ol"},"The text representing the customer's ",(0,r.kt)("strong",{parentName:"li"},"request is processed")," by the backend logic, which can be implemented through flows or custom code on the ",(0,r.kt)("strong",{parentName:"li"},"Yellow.ai Cloud platform"),"."),(0,r.kt)("li",{parentName:"ol"},"Once the cloud platform understands the user's request, it generates a ",(0,r.kt)("strong",{parentName:"li"},"response in the form of text"),", which is then sent back to the ",(0,r.kt)("strong",{parentName:"li"},"telephony")," platform."),(0,r.kt)("li",{parentName:"ol"},"The voice bot ",(0,r.kt)("strong",{parentName:"li"},"converts the response text into speech")," and delivers it to the ",(0,r.kt)("strong",{parentName:"li"},"customer"),", allowing them to hear the response in a natural voice."))),(0,r.kt)("h4",{id:"key-components-of-voicebot-workflow"},"Key components of voicebot workflow"),(0,r.kt)("p",null,"The voice bot architecture consists of three key components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Capture user input"),": The bot records and captures the customer's input."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Understand user input"),": The bot processes and comprehends the customer's input to generate a response."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Customize bot response"),": The bot plays or communicates the response back to the customer.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/Hyp_msJBn.png",alt:null})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"1-capturing-user-inputs"},"1. Capturing user inputs"),(0,r.kt)("p",null,"There are three methods to capture user input on the IVR channel that is summarized below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Capturing user speech"),": Yellow.ai platform incorporates Speech-to-Text (STT) and Automatic Speech Recognition (ASR) technologies for accurate transcription and real-time recognition of user speech. Through partnerships with leading STT engines like Microsoft and Google, we ensure high-quality transcription. ASR leverages advanced machine learning algorithms to facilitate seamless and precise communication between users and voice bots, enabling natural and interactive interactions. You can configure parameters such as STT engine, mode, and silence parameters for optimal performance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Capturing keypad (DTMF) input"),": Users can provide input through the keypad while on a call, typically used for numeric inputs. Two configurations are available:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DTMF Digit Length"),": Captures fixed-length user input, like a mobile number."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DTMF Finish Character"),': Used for variable-length inputs, such as an application ID. Users can press "*" or "#" to indicate the completion of input.',(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"If there is no activity for more than 10 seconds, bot considers it as the end of input."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Capturing keypad and speech as input"),": In certain cases, the bot can allow users to provide input by either typing on the keypad or speaking it out. The bot recognizes the first response, whether it's from keypad activity or speech, as the final input."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-understanding--responding-to-user-responses"},"2. Understanding & responding to user responses"),(0,r.kt)("p",null,"Operations on yellow.ai cloud platform must be performed to understand the user input that is available in text format and analyze and provide output in text format. For example: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bot training by adding ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents"},"intent")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/entities"},"entities"),"."),(0,r.kt)("li",{parentName:"ul"},"Configuring output for failure or no-response messages. "),(0,r.kt)("li",{parentName:"ul"},"Configuring validations against the context (intents, entities, pre-trained entities, etc). "),(0,r.kt)("li",{parentName:"ul"},"Many more...")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/r1kLKoyHh.png",alt:null})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"3-customizing-bot-responses"},"3. Customizing bot responses"),(0,r.kt)("p",null,"To make the users hear the bot's responses during a call, the text generated by the bot must be converted into spoken words. This conversion is achieved using text-to-speech (TTS) technology in collaboration with leading TTS engines such as Microsoft, Google, and Amazon. These engines provide a range of capabilities to meet different business requirements, including the ability to create customized and lifelike speech."),(0,r.kt)("p",null,"There are three ways to convert bot-generated text into speech on the IVR channel:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Using pre-built neural voice models"),": TTS providers offer pre-built neural voice models that can be utilized for quick prototyping and building demo voice bots. Design module and Voice input node enable the conversion of text into speech, providing a basic understanding of how the bot's responses would sound."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Applying customization with SSML"),": For more advanced use cases where precise control over speech synthesis is needed, Speech Synthesis Markup Language (SSML) can be employed. SSML in design module and voice input node allows for fine-grained customization of speech, like adjustments to speech rate, pitch, style, pauses, etc. By incorporating SSML in the text, the resulting speech can be highly tailored and expressive."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Playing pre-recorded messages"),": In some scenarios, it may be necessary to play pre-recorded messages during a call. For example, when a custom proprietary sound or a welcome tone needs to be played. Pre-recorded messages,  in .wav or .mp3 formats, can be integrated into the call flow to provide a specific audio experience.")),(0,r.kt)("h3",{id:"additional-response-customization-on-yellowai"},"Additional response customization on yellow.ai"),(0,r.kt)("p",null,"Yellow AI offers extensive features for customizing bot responses. They are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Adding variables for custom responses (Dynamic messages)"),": Personalize interactions with the bot by incorporating variables. By storing and using variables in the design module or voice input node, you can dynamically include user-specific information in the bot's responses, creating a more tailored experience. For example, you can dynamically include the user's name or city in the responses."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Conversation 1"),(0,r.kt)("th",{parentName:"tr",align:null},"Conversation 2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"User"),": I live in ",(0,r.kt)("strong",{parentName:"td"},"Bangalore"),". ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Bot"),": ",(0,r.kt)("strong",{parentName:"td"},"Bangalore")," is a great place! May I know your account number?"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"User"),": My name is ",(0,r.kt)("strong",{parentName:"td"},"Sam"),". ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"td"},"Bot"),": Welcome to our store, ",(0,r.kt)("strong",{parentName:"td"},"Sam"),". What would you like to try first?")))))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Using the translations page for multilingual bots (Multi-lingual flows)"),": For multilingual bots, the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/localization"},"translations")," feature can be employed to customize speech in different languages. This means that you can build a single flow and use the translations feature on the platform to store configurations for each language. You can provide localized experiences to users in different languages without the need to duplicate or recreate entire flows. This streamlines the development process and ensures consistency across different language versions of the voice bot.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"The translation text should be in SSML format.")))))}d.isMDXComponent=!0}}]);