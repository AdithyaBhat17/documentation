(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),c=(n(0),n(274)),r={title:"Chatbot SDK for cordova",sidebar_label:"cordova Chatbot SDK"},i={unversionedId:"platform_concepts/channelConfiguration/cordova",id:"platform_concepts/channelConfiguration/cordova",isDocsHomePage:!1,title:"Chatbot SDK for cordova",description:"Installation",source:"@site/docs/platform_concepts/channelConfiguration/cordova.md",slug:"/platform_concepts/channelConfiguration/cordova",permalink:"/docs/platform_concepts/channelConfiguration/cordova",version:"current",sidebar_label:"cordova Chatbot SDK",sidebar:"platform_concepts",previous:{title:"react-native Chatbot SDK",permalink:"/docs/platform_concepts/channelConfiguration/react-native"},next:{title:"Facebook Messenger",permalink:"/docs/platform_concepts/channelConfiguration/facebook-messenger"}},l=[{value:"Installation",id:"installation",children:[{value:"cordova",id:"cordova",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Set botId",id:"set-botid",children:[]},{value:"Present chatbot",id:"present-chatbot",children:[]},{value:"Other configurations",id:"other-configurations",children:[]},{value:"Payload",id:"payload",children:[]},{value:"History",id:"history",children:[]},{value:"Event from bot",id:"event-from-bot",children:[]}]},{value:"Close bot",id:"close-bot",children:[]},{value:"Close bot event",id:"close-bot-event",children:[]},{value:"Push Notifications",id:"push-notifications",children:[{value:"Authentication Token",id:"authentication-token",children:[]},{value:"Device Token",id:"device-token",children:[]}]},{value:"On-Prem Deployments",id:"on-prem-deployments",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)("h3",{id:"cordova"},"cordova"),Object(c.b)("p",null,"Run this command in terminal form project root folder"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{}),"ionic cordova plugin add cordova-plugin-ymchat\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("h3",{id:"set-botid"},"Set botId"),Object(c.b)("p",null,"This is the first and compulsory step."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'cordova.plugins.ymchat.setBotId("botId");\n')),Object(c.b)("h3",{id:"present-chatbot"},"Present chatbot"),Object(c.b)("p",null,"Chat bot can be presented by calling ",Object(c.b)("inlineCode",{parentName:"p"},"startChatbot()"),". This method will display full screen chat view"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'cordova.plugins.ymchat.startChatbot(\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),Object(c.b)("h3",{id:"other-configurations"},"Other configurations"),Object(c.b)("p",null,"Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is ",Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"cordova.plugins.ymchat.setEnableSpeech(true);\n")),Object(c.b)("h3",{id:"payload"},"Payload"),Object(c.b)("p",null,"Information can be passed from app to bot using payload."),Object(c.b)("p",null,"The payload dictionary should be JSON compatible else an error will be thrown"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'cordova.plugins.ymchat.setPayload({ "Company-name": "Yellow.ai" });\n')),Object(c.b)("h3",{id:"history"},"History"),Object(c.b)("p",null,"Chat history can be enabled by calling ",Object(c.b)("inlineCode",{parentName:"p"},"setEnableHistory()"),' and setting "UserID" in the payload\nDefault value is ',Object(c.b)("inlineCode",{parentName:"p"},"false")),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'cordova.plugins.ymchat.setPayload({ "UserId": "unique-id" }); //set unique id like email or UUID\ncordova.plugins.ymchat.setEnableHistory(true);\n')),Object(c.b)("h3",{id:"event-from-bot"},"Event from bot"),Object(c.b)("p",null,"Bot can send events to the host app."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'cordova.plugins.ymchat.onEventFromBot((result) => {\n  console.log("Code : " + result.code); // Prints the event sent to the chat bot\n  console.log("Data : " + JSON.stringify(result.data)); // Prints the event sent to the chat bot\n});\n')),Object(c.b)("h2",{id:"close-bot"},"Close bot"),Object(c.b)("p",null,"Bot can be closed by tapping on cross button at top, and they can be programmatically closed using ",Object(c.b)("inlineCode",{parentName:"p"},"closeBot()")," function"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"cordova.plugins.ymchat.closeBot();\n")),Object(c.b)("h2",{id:"close-bot-event"},"Close bot event"),Object(c.b)("p",null,"Bot close event is separately sent and it can be handled in following way."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'cordova.plugins.ymchat.onBotClose(() => {\n  console.log("Bot Closed"); // Prints Bot Closed\n});\n')),Object(c.b)("h2",{id:"push-notifications"},"Push Notifications"),Object(c.b)("p",null,"cordova-plugin-ymchat supports firebase notifications. Push notifications needs ",Object(c.b)("inlineCode",{parentName:"p"},"authentication token")," and ",Object(c.b)("inlineCode",{parentName:"p"},"device token")),Object(c.b)("h3",{id:"authentication-token"},"Authentication Token"),Object(c.b)("p",null,"Authentication token can be set using ",Object(c.b)("inlineCode",{parentName:"p"},"setAuthenticationToken")," method. Auth token can be a unique identifier like email or UUID"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'cordova.plugins.ymchat.setAuthenticationToken("token");\n')),Object(c.b)("h3",{id:"device-token"},"Device Token"),Object(c.b)("p",null,"Device token can be set using ",Object(c.b)("inlineCode",{parentName:"p"},"setDeviceToken")," method. Pass ",Object(c.b)("inlineCode",{parentName:"p"},"fcmToken")," as a parameter to this method."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'cordova.plugins.ymchat.setDeviceToken("token");\n')),Object(c.b)("p",null,"It is recommended to set authentication token and device token before ",Object(c.b)("inlineCode",{parentName:"p"},"startChatbot()")),Object(c.b)("p",null,"Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"}),"here")),Object(c.b)("h2",{id:"on-prem-deployments"},"On-Prem Deployments"),Object(c.b)("p",null,"cordova-plugin-ymchat supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to ",Object(c.b)("inlineCode",{parentName:"p"},"setCustomURL()")," method."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),'cordova.plugins.ymchat.setCustomURL("https://your-on-prem-url.com");\n')))}b.isMDXComponent=!0},274:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=o,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||c;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<c;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);