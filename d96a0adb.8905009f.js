(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{399:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(3),o=t(7),r=(t(0),t(461)),i=["components"],c={title:"IVR bots(for app platform)",sidebar_label:"IVR (for app)"},s={unversionedId:"platform_concepts/channelConfiguration/ivr-bots",id:"platform_concepts/channelConfiguration/ivr-bots",isDocsHomePage:!1,title:"IVR bots(for app platform)",description:"All the bots created after July 2022 operate on cloud. Refer to this article for the latest update.",source:"@site/docs/platform_concepts/channelConfiguration/ivr-bots.md",slug:"/platform_concepts/channelConfiguration/ivr-bots",permalink:"/docs/platform_concepts/channelConfiguration/ivr-bots",version:"current",sidebar_label:"IVR (for app)",sidebar:"platform_concepts",previous:{title:"Google Assistant",permalink:"/docs/platform_concepts/channelConfiguration/google-assistant"},next:{title:"IVR Bots (for cloud)",permalink:"/docs/platform_concepts/channelConfiguration/Ivr"}},l=[{value:"PRI and SIP numbers",id:"pri-and-sip-numbers",children:[]},{value:"Connect BOT to an IVR number",id:"connect-bot-to-an-ivr-number",children:[]},{value:"Configure bot for IVR bot",id:"configure-bot-for-ivr-bot",children:[]},{value:"Bot Voice Options",id:"bot-voice-options",children:[]},{value:"Voice Options",id:"voice-options",children:[]},{value:"Change Language",id:"change-language",children:[]},{value:"Custom Handler",id:"custom-handler",children:[]},{value:"API for IVR Bot Testing",id:"api-for-ivr-bot-testing",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"All the bots created after July 2022 operate on cloud. Refer to ",Object(r.b)("a",{parentName:"p",href:"/docs/platform_concepts/channelConfiguration/Ivr"},"this")," article for the latest update."))),Object(r.b)("h2",{id:"pri-and-sip-numbers"},"PRI and SIP numbers"),Object(r.b)("p",null,"PRI is the number used when user wants to call the bot. A SIP number has more functionality comes with noise cancellation and can be used when bot calls the user"),Object(r.b)("h2",{id:"connect-bot-to-an-ivr-number"},"Connect BOT to an IVR number"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Navigate to old platform using link\n",Object(r.b)("a",{parentName:"li",href:"https://app.yellowmessenger.com"},"botplatform.io")),Object(r.b)("li",{parentName:"ol"},"Use cookie chrome extensions like EditThisCookie or other to login"),Object(r.b)("li",{parentName:"ol"},"Copy and paste ym_xid cookie value  and refresh the bot it will login"),Object(r.b)("li",{parentName:"ol"},"Go to IVR setup and add a phone number by prefixing +91 country code")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/JLKy793wPsAL1612444373769.png",alt:null})),Object(r.b)("h2",{id:"configure-bot-for-ivr-bot"},"Configure bot for IVR bot"),Object(r.b)("p",null,"The start point of IVR bot is the message \u201cwelcome\u201c, which can be captured in the main function through main function :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"app.data.message // welcome\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It will be in app.data.message when the user calls the bot. The context of the IVR bot should be cleared since when the user again calls the bot, it should not continue from the last endpoint. Context can be cleared by using code in the main function.\nContext can be cleared by this using code in the main function")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'app.getContext() // get context in main app.context doesn\'t work in main function\n    .then(ctx => {\n\n        if (app.data && app.data.message == "welcome") {\n            app.clearContext() //clear context\n           }\n        });\n      \n')),Object(r.b)("h2",{id:"bot-voice-options"},"Bot Voice Options"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"voiceOptions: {\n                    'voice_id': 'male' // for male voice in wavelet, comment out if you want a female voice \n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                }\n")),Object(r.b)("p",null,"Bot voice options should be sent through the app. Start as follows: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"return app.start({\n                voiceOptions: {\n                    'voice_id': 'male'// for male voice in wavelet, comment out if you want a female voice\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",\n                minConfidence: 0.6\n            });\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Total Code in Main Function")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"app.getContext()\n    .then(ctx => {\n\n        if (app.data && app.data.message == \"welcome\") {\n            app.clearContext()\n            app.memory.set(\"otpCount\",0)\n            return app.start({\n                voiceOptions: {\n                    'voice_id': 'male',// for male voice in wavelet, comment out if you want a female voice                    'recording_max_duration': 2,\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",// use en if not needed any other language\n                minConfidence: 0.6\n            });\n        }\n        else {\n            return app.start({\n                voiceOptions: {\n                    'voice_id': 'male',// for male voice in wavelet, comment out if you want a female voice                    'recording_max_duration': 2,\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",// use en if not needed any other language\n                minConfidence: 0.6\n            });\n        }\n    })\n")),Object(r.b)("p",null,"Train 'welcome' for default/initial flow"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/6u4HhK6tnD4U1612444738132.png",alt:null})),Object(r.b)("h2",{id:"voice-options"},"Voice Options"),Object(r.b)("p",null,"Bot voice options and voice options are different. Voice options must be sent in app.data.message."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"app.sendTextMessage(\"<message>\",\n{\n    'tts_engine': 'wavenet', // wave is google text to speach\n    'text_type': \"ssml\", \n    'lang': 'en-GB', // language option\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': false // to disconnect call make it true\n})\n")),Object(r.b)("p",null,"It can be initialised in the main or child function."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"app.CONNECT = {\n    'tts_engine': 'wavenet',\n    'text_type': \"ssml\",\n    'lang': 'en-GB',\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': false\n}\napp.DISCONNECT = {\n    'tts_engine': 'wavenet',\n    'text_type': \"ssml\",\n    'lang': 'en-GB',\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': true\n}\n\napp.getContext()\n    .then(ctx => {\n\n        if (app.data && app.data.message == \"welcome\") {\n            app.clearContext()\n            app.memory.set(\"otpCount\",0)\n            return app.start({\n                voiceOptions: {\n                    //'voice_id': 'male'\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",\n                minConfidence: 0.6\n            });\n        }\n        else {\n            return app.start({\n                voiceOptions: {\n                    //'voice_id': 'male'\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",\n                minConfidence: 0.6\n            });\n        }\n    })\n")),Object(r.b)("p",null,"Usage in any function "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'// connecting call normal message\napp.data.message("<message>",app.CONNECT)\n\n// disconnecting call\napp.data.message("<message>",app.DISCONNECT)\n')),Object(r.b)("h2",{id:"change-language"},"Change Language"),Object(r.b)("p",null,"For changing bot speech-language should be passed in both voice options and bot voice options."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"\napp.sendTextMessage(\u201c<message>\u201c,\n\n{\n    'tts_engine': 'wavenet',\n    'text_type': \"ssml\",\n    'lang': 'en-GB',\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': false\n})\n\nin main function - \n\nreturn app.start({\n                voiceOptions: {\n                    //'voice_id': 'male'\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",\n                minConfidence: 0.6\n            });\n\n")),Object(r.b)("p",null,"Final Main Function:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"\n\napp.CONNECT = {\n    'tts_engine': 'wavenet',\n    'text_type': \"ssml\",\n    'lang': 'en-GB',// send language options\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': false\n}\napp.DISCONNECT = {\n    'tts_engine': 'wavenet',\n    'text_type': \"ssml\",\n    'lang': 'en-GB',// send language options\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": false },\n    \"capture_dtmf\": true,\n    'disconnect': true\n}\n\napp.getContext()\n    .then(ctx => {\n\n        if (app.data && app.data.message == \"welcome\") {\n            app.clearContext()\n            app.memory.set(\"otpCount\",0)\n            return app.start({\n                voiceOptions: {\n                    //'voice_id': 'male'\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",\n                minConfidence: 0.6\n            });\n        }\n        else {\n            return app.start({\n                voiceOptions: {\n                    //'voice_id': 'male'\n                    'recording_max_duration': 2,\n                    'recording_silence_duration': 2,\n                },\n                targetLanguage: \"en-GB\",// send language options\n                minConfidence: 0.6\n            });\n        }\n    })\n\napp.sendTextMessage(\"<message>\",\n{\n    'tts_engine': 'wavenet', // wave is google text to speach\n    'text_type': \"ssml\", \n    'lang': 'en-GB', // language option\n    'speed': 0.9,\n    \"options\": { \"capture_voice\": true },\n    //\"capture_dtmf\": true,\n    'disconnect': false // to disconnect call make it true\n})\n")),Object(r.b)("p",null,"Use this link to find supported languages and to test samples for code only use (en-code) en-US not en-US-Wavenet-D"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://cloud.google.com/text-to-speech"},"https://cloud.google.com/text-to-speech")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE : This segment in the link takes some time to load. Please wait until the full page is loaded.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/fOnoy41uVvAx1612445154529.png",alt:null})),Object(r.b)("h2",{id:"custom-handler"},"Custom Handler"),Object(r.b)("p",null,"It doesn\u2019t work if you use other language."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},' app.sendTextMessage("Please enter a valid 4 digit pin", app.CONNECT)\n            .then(() => {\n                resolve({ success: false }) // use success false\n            })\n        \n')),Object(r.b)("h2",{id:"api-for-ivr-bot-testing"},"API for IVR Bot Testing"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'curl --location --request POST \'https://app.yellowmessenger.com/integrations/voice/execute\' \\\n--header \'Content-Type: application/json\' \\\n--header \'Content-Type: text/plain\' \\\n--data-raw \'{\n    "from": "+918328485704",\n    "to": "+918068402327",\n    "message": "welcome",\n    "language": "en"\n}\'\n')))}u.isMDXComponent=!0},461:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return t?o.a.createElement(b,c(c({ref:n},l),{},{components:t})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);