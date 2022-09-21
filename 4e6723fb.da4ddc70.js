(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(408)),r=["components"],c={title:"Chatbot SDK for xamarin",sidebar_label:"Xamarin"},l={unversionedId:"platform_concepts/mobile/chatbot/xamarin",id:"platform_concepts/mobile/chatbot/xamarin",isDocsHomePage:!1,title:"Chatbot SDK for xamarin",description:"Migration Guide for Android",source:"@site/docs/platform_concepts/mobile/chatbot/xamarin.md",slug:"/platform_concepts/mobile/chatbot/xamarin",permalink:"/docs/platform_concepts/mobile/chatbot/xamarin",version:"current",sidebar_label:"Xamarin",sidebar:"platform_concepts",previous:{title:"react-native Chatbot SDK",permalink:"/docs/platform_concepts/mobile/chatbot/react-native"},next:{title:"Overview",permalink:"/docs/platform_concepts/engagement/engage"}},s=[{value:"Installation",id:"installation",children:[{value:"Xamarin",id:"xamarin",children:[]}]},{value:"Pre-requisite",id:"pre-requisite",children:[{value:"Setting up Xamarin.Forms",id:"setting-up-xamarinforms",children:[]},{value:"Setting up Android",id:"setting-up-android",children:[]},{value:"Setting up iOS",id:"setting-up-ios",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Set botId",id:"set-botid",children:[]},{value:"YM AuthenticationToken",id:"ym-authenticationtoken",children:[]},{value:"Push Notifications",id:"push-notifications",children:[]},{value:"Payload",id:"payload",children:[]},{value:"On-Premise / Region Specific deployments",id:"on-premise--region-specific-deployments",children:[]},{value:"Custom loader",id:"custom-loader",children:[]},{value:"V2 bot",id:"v2-bot",children:[]},{value:"Speech to Text",id:"speech-to-text",children:[]},{value:"Hide Input Bar",id:"hide-input-bar",children:[]},{value:"Colors",id:"colors",children:[]},{value:"Present chatbot",id:"present-chatbot",children:[]}]},{value:"Bot Events",id:"bot-events",children:[]},{value:"Close bot",id:"close-bot",children:[]},{value:"Unlink Device Token",id:"unlink-device-token",children:[]},{value:"Demo App",id:"demo-app",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"migration-guide-for-android"},"Migration Guide for Android"),Object(o.b)("p",null,"Version 1.x had an issue where a corrupted ymAuthentication token was passed in some cases from SDK to the server. The conversation history was thus mapped to the corrupted ymAuthenticationToken"),Object(o.b)("p",null,"Version 2.x has fix for this issue and thus a correct ymAuthenticationToken is always passed.\nHowever, as the correct ymAuthentication is different from the corrupted token, our server treats this user as a new user which leads to a complete loss of history of user conversations.\nThe user will have a fresh start after updating the app."),Object(o.b)("p",null,"Note:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"ymAuthentication was corrupted only when it contained ",Object(o.b)("inlineCode",{parentName:"li"},"=")," character in 1.x versions"),Object(o.b)("li",{parentName:"ol"},"This issue was happening only on Android platform.")),Object(o.b)("p",null,"For more info feel free to email us at ",Object(o.b)("a",{parentName:"p",href:"mailto:mobile@yellow.ai"},"mobile@yellow.ai")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("h3",{id:"xamarin"},"Xamarin"),Object(o.b)("p",null,"Open NuGet package manager"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Search for YmChat"),Object(o.b)("li",{parentName:"ul"},"Install the package for",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Xamarin.Forms"),Object(o.b)("li",{parentName:"ul"},"Android"),Object(o.b)("li",{parentName:"ul"},"iOS")))),Object(o.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(o.b)("h3",{id:"setting-up-xamarinforms"},"Setting up Xamarin.Forms"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("inlineCode",{parentName:"li"},"App.xaml.cs")),Object(o.b)("li",{parentName:"ul"},"import namespace YmChat",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-c#"},"using YmChat;\n"))),Object(o.b)("li",{parentName:"ul"},"Accept parameter ",Object(o.b)("inlineCode",{parentName:"li"},"IYmChat")," in the ",Object(o.b)("inlineCode",{parentName:"li"},"App")," constructor\nand pass down to the class where you are using the SDK",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-c#"},"public App(IYmChat iymchat)\n{\n    InitializeComponent();\n    MainPage = new MainPage(iymchat);\n}\n")))),Object(o.b)("h3",{id:"setting-up-android"},"Setting up Android"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("inlineCode",{parentName:"li"},"MainActivity.cs")),Object(o.b)("li",{parentName:"ul"},"import namespace YmChat",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-c#"},"using YmChat;\n"))),Object(o.b)("li",{parentName:"ul"},"Inside ",Object(o.b)("inlineCode",{parentName:"li"},"onCreate")," function add this snippet at the end",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-c#"},"YmChatImplementation ymchat = new YmChatImplementation();\nLoadApplication(new App(ymchat));\n")))),Object(o.b)("h3",{id:"setting-up-ios"},"Setting up iOS"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("inlineCode",{parentName:"li"},"AppDelegate.cs")),Object(o.b)("li",{parentName:"ul"},"import namespace YmChat",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-c#"},"using YmChat;\n"))),Object(o.b)("li",{parentName:"ul"},"Inside ",Object(o.b)("inlineCode",{parentName:"li"},"FinishedLaunching")," function add this snippet before return",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-c#"},"YmChatImplementation ymchat = new YmChatImplementation();\nLoadApplication(new App(ymchat));\n")))),Object(o.b)("h4",{id:"file-provider"},"File provider"),Object(o.b)("p",null,"Add following key in your ",Object(o.b)("inlineCode",{parentName:"p"},"strings.xml")," file found at ",Object(o.b)("inlineCode",{parentName:"p"},"yourproject.Android/Resources/values/strings.xml"),", this will override default file provider used by SDK."),Object(o.b)("p",null,'Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"\nExample - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<string name="application_id_for_provider">your.application.id.fileprovider</string>\n')),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"set-botid"},"Set botId"),Object(o.b)("p",null,"This is the first and compulsory step."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setBotId("botId");\n')),Object(o.b)("h3",{id:"ym-authenticationtoken"},"YM AuthenticationToken"),Object(o.b)("p",null,"ymAuthenticationToken is used to associate an identity of the user with the chat bot."),Object(o.b)("p",null,"Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since ",Object(o.b)("strong",{parentName:"p"},"inception"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setAuthenticationToken("token");\n')),Object(o.b)("p",null,"Note: History will load only when ",Object(o.b)("inlineCode",{parentName:"p"},"Show history")," flag is enabled in the channel settings"),Object(o.b)("h3",{id:"push-notifications"},"Push Notifications"),Object(o.b)("p",null,"YMChat supports firebase notifications. Pass your ",Object(o.b)("inlineCode",{parentName:"p"},"FCM token")," in setDeviceToken method."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setDeviceToken("token");\n')),Object(o.b)("p",null,"Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info ",Object(o.b)("a",{parentName:"p",href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"},"here")),Object(o.b)("h3",{id:"payload"},"Payload"),Object(o.b)("p",null,"Additional information can be passed in the form of key value pair from app to bot using payload."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'var Payload = new Dictionary<string, object> { { "name": "Integration", "type": "Xamarin" } };\nymChatInterface.setPayLoad(Payload);\n')),Object(o.b)("p",null,"Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown"),Object(o.b)("p",null,"For passing data from bot to app refer bot ",Object(o.b)("a",{parentName:"p",href:"#bot-events"},"Bot Events")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"payload security")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Payload is securely passed in HTTPS post request to protect the information passed in it"))),Object(o.b)("h4",{id:"trigger-journey"},"Trigger journey"),Object(o.b)("p",null,"A specific journey can be triggered on launch, by passing the slug in the payload."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dart"},'ymChatInterface.setPayload({ "JourneySlug" : "checkout-cart" });\n')),Object(o.b)("h3",{id:"on-premise--region-specific-deployments"},"On-Premise / Region Specific deployments"),Object(o.b)("p",null,"YmChat supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to ",Object(o.b)("inlineCode",{parentName:"p"},"setCustomURL()")," method."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCustomURL("https://your-on-prem-url.com");\n')),Object(o.b)("p",null,"If the bot is deployed in a specific region(e.g. r1,r2,r3..rn)) on yellow.ai cloud, set the ",Object(o.b)("inlineCode",{parentName:"p"},"customBaseUrl")," as follows"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCustomURL("https://rx.cloud.yellow.ai");\n')),Object(o.b)("p",null,"Here rx = r1,r2,r3,r4,r5 etc"),Object(o.b)("h3",{id:"custom-loader"},"Custom loader"),Object(o.b)("p",null,"You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCustomLoaderURL(\n  "https://example.com/your/custom/image.gif"\n);\n')),Object(o.b)("h3",{id:"v2-bot"},"V2 bot"),Object(o.b)("p",null,"You can enable V2 bot by calling ",Object(o.b)("inlineCode",{parentName:"p"},"setVersion()")," method. Default value is 1"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.setVersion(2);\n")),Object(o.b)("h3",{id:"speech-to-text"},"Speech to Text"),Object(o.b)("p",null,"Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.setEnableSpeech(true);\n")),Object(o.b)("h3",{id:"hide-input-bar"},"Hide Input Bar"),Object(o.b)("p",null,"You can hide the input bar while bot is loading by calling the ",Object(o.b)("inlineCode",{parentName:"p"},"setDisableActionsOnLoad")," API . Default value is ",Object(o.b)("inlineCode",{parentName:"p"},"false")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.setDisableActionsOnLoad(true);\n")),Object(o.b)("h3",{id:"colors"},"Colors"),Object(o.b)("h4",{id:"status-bar"},"Status bar"),Object(o.b)("p",null,"Status bar color can be set by calling ",Object(o.b)("inlineCode",{parentName:"p"},"setStatusBarColor")," method"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setStatusBarColor("#FFFFFF")\n')),Object(o.b)("h4",{id:"close-button"},"Close button"),Object(o.b)("p",null,"Close button color can be set by calling ",Object(o.b)("inlineCode",{parentName:"p"},"setCloseButtonColor")," method"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCloseButtonColor("#000000")\n')),Object(o.b)("h4",{id:"ios"},"iOS"),Object(o.b)("p",null,"If you are supporting Speech recognition, add following snippet to Info.plist of the host app"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"<key>NSMicrophoneUsageDescription</key>\n<string>Your microphone will be used to record your speech when you use the Voice feature.</string>\n<key>NSSpeechRecognitionUsageDescription</key>\n<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>\n")),Object(o.b)("h3",{id:"present-chatbot"},"Present chatbot"),Object(o.b)("p",null,"Chat bot can be presented by calling ",Object(o.b)("inlineCode",{parentName:"p"},"startChatbot()"),". This method will display full screen chat view"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.startChatBot();\n")),Object(o.b)("h2",{id:"bot-events"},"Bot Events"),Object(o.b)("p",null,"Bot events are used to pass information from bot to app. For passing events from app to bot refer ",Object(o.b)("a",{parentName:"p",href:"#payload"},"Payload")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},' ymChatInterface.onEventFromBot((botEvent) =>\n  {\n    Console.WriteLine(botEvent["code"]);\n    Console.WriteLine(botEvent["data"]);\n  });\n')),Object(o.b)("h4",{id:"bot-close-event"},"Bot close event"),Object(o.b)("p",null,"Bot close event is separately sent and it can be handled in following way."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.onBotClose(() =>\n  {\n    Console.WriteLine("Chatbot closed");\n  });\n')),Object(o.b)("h2",{id:"close-bot"},"Close bot"),Object(o.b)("p",null,"Bot can be closed by tapping on cross button at top, and they can be programmatically closed using ",Object(o.b)("inlineCode",{parentName:"p"},"closeBot()")," function"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.closeBot();\n")),Object(o.b)("h2",{id:"unlink-device-token"},"Unlink Device Token"),Object(o.b)("p",null,"If you want to stop receiving push notifications you can unlink the device token.\nDevice token typically is unlinked when the user logs out of the app."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-c#"},'  ymChatInterface.unLinkDeviceToken(\n    botId,\n    apiKey,\n    deviceToken,\n    (isDeviceTokenUnlinked) {\n      Console.WriteLine("Device token unlinked");\n      },\n    (failureMessage) {\n      Console.WriteLine(failureMessage);\n      });\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"API Key")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"API key can be generated/found by visiting ",Object(o.b)("inlineCode",{parentName:"p"},"https://cloud.yellow.ai")," -> Overview -> Configure -> API Key section"),Object(o.b)("p",{parentName:"div"},"Existing client can upgrade their dependency to ",Object(o.b)("inlineCode",{parentName:"p"},"v2.1.+")," and replace exisitng key with new API Key.\nClient using SDK version below ",Object(o.b)("inlineCode",{parentName:"p"},"v2.1.0")," will have no impact."))),Object(o.b)("h2",{id:"demo-app"},"Demo App"),Object(o.b)("p",null,"A demo app can be used as a reference to better understand how this SDK can be integrated in the app\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/ymchat-xamarin-demo"},"https://github.com/yellowmessenger/ymchat-xamarin-demo")))}p.isMDXComponent=!0},408:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);