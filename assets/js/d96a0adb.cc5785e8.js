"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[20529],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28033:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=t(87462),o=t(63366),r=(t(67294),t(3905)),i=["components"],l={title:"IVR bots(for app platform)",sidebar_label:"IVR (for app)"},s=void 0,c={unversionedId:"platform_concepts/channelConfiguration/ivr-bots",id:"platform_concepts/channelConfiguration/ivr-bots",title:"IVR bots(for app platform)",description:"All the bots created after July 2022 operate on cloud. Refer to this article for the latest update.",source:"@site/docs/platform_concepts/channelConfiguration/ivr-bots.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/ivr-bots",permalink:"/docs/platform_concepts/channelConfiguration/ivr-bots",draft:!1,tags:[],version:"current",frontMatter:{title:"IVR bots(for app platform)",sidebar_label:"IVR (for app)"},sidebar:"platform_concepts",previous:{title:"Google Assistant",permalink:"/docs/platform_concepts/channelConfiguration/google-assistant"},next:{title:"IVR (for cloud)",permalink:"/docs/platform_concepts/channelConfiguration/Ivr"}},p={},u=[{value:"PRI and SIP numbers",id:"pri-and-sip-numbers",level:2},{value:"Connect BOT to an IVR number",id:"connect-bot-to-an-ivr-number",level:2},{value:"Configure bot for IVR bot",id:"configure-bot-for-ivr-bot",level:2},{value:"Bot Voice Options",id:"bot-voice-options",level:2},{value:"Voice Options",id:"voice-options",level:2},{value:"Change Language",id:"change-language",level:2},{value:"Custom Handler",id:"custom-handler",level:2},{value:"API for IVR Bot Testing",id:"api-for-ivr-bot-testing",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"All the bots created after July 2022 operate on cloud. Refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform_concepts/channelConfiguration/Ivr"},"this")," article for the latest update.")),(0,r.kt)("h2",{id:"pri-and-sip-numbers"},"PRI and SIP numbers"),(0,r.kt)("p",null,"PRI is the number used when user wants to call the bot. A SIP number has more functionality comes with noise cancellation and can be used when bot calls the user"),(0,r.kt)("h2",{id:"connect-bot-to-an-ivr-number"},"Connect BOT to an IVR number"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to old platform using link\n",(0,r.kt)("a",{parentName:"li",href:"https://app.yellowmessenger.com"},"botplatform.io")),(0,r.kt)("li",{parentName:"ol"},"Use cookie chrome extensions like EditThisCookie or other to login"),(0,r.kt)("li",{parentName:"ol"},"Copy and paste ym_xid cookie value  and refresh the bot it will login"),(0,r.kt)("li",{parentName:"ol"},"Go to IVR setup and add a phone number by prefixing +91 country code")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/JLKy793wPsAL1612444373769.png",alt:null})),(0,r.kt)("h2",{id:"configure-bot-for-ivr-bot"},"Configure bot for IVR bot"),(0,r.kt)("p",null,"The start point of IVR bot is the message \u201cwelcome\u201c, which can be captured in the main function through main function :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.data.message // welcome\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It will be in app.data.message when the user calls the bot. The context of the IVR bot should be cleared since when the user again calls the bot, it should not continue from the last endpoint. Context can be cleared by using code in the main function.\nContext can be cleared by this using code in the main function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'app.getContext() // get context in main app.context doesn\'t work in main function\n    .then(ctx => {\n\n        if (app.data && app.data.message == "welcome") {\n            app.clearContext() //clear context\n           }\n        });\n      \n')),(0,r.kt)("h2",{id:"bot-voice-options"},"Bot Voice Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"voiceOptions: {\n                    'voice_id': 'male' // for male voice in wavelet, comment out if you want a female voice \n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                }\n")),(0,r.kt)("p",null,"Bot voice options should be sent through the app. Start as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"return app.start({\n                voiceOptions: {\n                    'voice_id': 'male'// for male voice in wavelet, comment out if you want a female voice\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",\n                minConfidence: 0.6\n            });\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Total Code in Main Function")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.getContext()\n    .then(ctx => {\n\n        if (app.data && app.data.message == \"welcome\") {\n            app.clearContext()\n            app.memory.set(\"otpCount\",0)\n            return app.start({\n                voiceOptions: {\n                    'voice_id': 'male',// for male voice in wavelet, comment out if you want a female voice                    'recording_max_duration': 2,\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",// use en if not needed any other language\n                minConfidence: 0.6\n            });\n        }\n        else {\n            return app.start({\n                voiceOptions: {\n                    'voice_id': 'male',// for male voice in wavelet, comment out if you want a female voice                    'recording_max_duration': 2,\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",// use en if not needed any other language\n                minConfidence: 0.6\n            });\n        }\n    })\n")),(0,r.kt)("p",null,"Train 'welcome' for default/initial flow"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/6u4HhK6tnD4U1612444738132.png",alt:null})),(0,r.kt)("h2",{id:"voice-options"},"Voice Options"),(0,r.kt)("p",null,"Bot voice options and voice options are different. Voice options must be sent in app.data.message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.sendTextMessage(\"<message>\",\n{\n    'tts_engine': 'wavenet', // wave is google text to speach\n    'text_type': \"ssml\", \n    'lang': 'en-GB', // language option\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': false // to disconnect call make it true\n})\n")),(0,r.kt)("p",null,"It can be initialised in the main or child function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"app.CONNECT = {\n    'tts_engine': 'wavenet',\n    'text_type': \"ssml\",\n    'lang': 'en-GB',\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': false\n}\napp.DISCONNECT = {\n    'tts_engine': 'wavenet',\n    'text_type': \"ssml\",\n    'lang': 'en-GB',\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': true\n}\n\napp.getContext()\n    .then(ctx => {\n\n        if (app.data && app.data.message == \"welcome\") {\n            app.clearContext()\n            app.memory.set(\"otpCount\",0)\n            return app.start({\n                voiceOptions: {\n                    //'voice_id': 'male'\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",\n                minConfidence: 0.6\n            });\n        }\n        else {\n            return app.start({\n                voiceOptions: {\n                    //'voice_id': 'male'\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",\n                minConfidence: 0.6\n            });\n        }\n    })\n")),(0,r.kt)("p",null,"Usage in any function "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// connecting call normal message\napp.data.message("<message>",app.CONNECT)\n\n// disconnecting call\napp.data.message("<message>",app.DISCONNECT)\n')),(0,r.kt)("h2",{id:"change-language"},"Change Language"),(0,r.kt)("p",null,"For changing bot speech-language should be passed in both voice options and bot voice options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\napp.sendTextMessage(\u201c<message>\u201c,\n\n{\n    'tts_engine': 'wavenet',\n    'text_type': \"ssml\",\n    'lang': 'en-GB',\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': false\n})\n\nin main function - \n\nreturn app.start({\n                voiceOptions: {\n                    //'voice_id': 'male'\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",\n                minConfidence: 0.6\n            });\n\n")),(0,r.kt)("p",null,"Final Main Function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\n\napp.CONNECT = {\n    'tts_engine': 'wavenet',\n    'text_type': \"ssml\",\n    'lang': 'en-GB',// send language options\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': false\n}\napp.DISCONNECT = {\n    'tts_engine': 'wavenet',\n    'text_type': \"ssml\",\n    'lang': 'en-GB',// send language options\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': true\n}\n\napp.getContext()\n    .then(ctx => {\n\n        if (app.data && app.data.message == \"welcome\") {\n            app.clearContext()\n            app.memory.set(\"otpCount\",0)\n            return app.start({\n                voiceOptions: {\n                    //'voice_id': 'male'\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",\n                minConfidence: 0.6\n            });\n        }\n        else {\n            return app.start({\n                voiceOptions: {\n                    //'voice_id': 'male'\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",// send language options\n                minConfidence: 0.6\n            });\n        }\n    })\n\napp.sendTextMessage(\"<message>\",\n{\n    'tts_engine': 'wavenet', // wave is google text to speach\n    'text_type': \"ssml\", \n    'lang': 'en-GB', // language option\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": true },\n    //\"capture_dtmf\": true,\n    'disconnect': false // to disconnect call make it true\n})\n")),(0,r.kt)("p",null,"Use this link to find supported languages and to test samples for code only use (en-code) en-US not en-US-Wavenet-D"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/text-to-speech"},"https://cloud.google.com/text-to-speech")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE : This segment in the link takes some time to load. Please wait until the full page is loaded.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/fOnoy41uVvAx1612445154529.png",alt:null})),(0,r.kt)("h2",{id:"custom-handler"},"Custom Handler"),(0,r.kt)("p",null,"It doesn\u2019t work if you use other language."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},' app.sendTextMessage("Please enter a valid 4 digit pin", app.CONNECT)\n            .then(() => {\n                resolve({ success: false }) // use success false\n            })\n        \n')),(0,r.kt)("h2",{id:"api-for-ivr-bot-testing"},"API for IVR Bot Testing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'curl --location --request POST \'https://app.yellowmessenger.com/integrations/voice/execute\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Content-Type: text/plain\' \\\n--data-raw \'{\n    "from": "+918328485704",\n    "to": "+918068402327",\n    "message": "welcome",\n    "language": "en"\n}\'\n')))}m.isMDXComponent=!0}}]);