"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[8052],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={title:"Chatbot SDK for xamarin",sidebar_label:"Xamarin"},s="Migration Guide for Android",p={unversionedId:"platform_concepts/mobile/chatbot/xamarin",id:"platform_concepts/mobile/chatbot/xamarin",title:"Chatbot SDK for xamarin",description:"Version 1.x had an issue where a corrupted ymAuthentication token was passed in some cases from SDK to the server. The conversation history was thus mapped to the corrupted ymAuthenticationToken",source:"@site/docs/platform_concepts/mobile/chatbot/xamarin.md",sourceDirName:"platform_concepts/mobile/chatbot",slug:"/platform_concepts/mobile/chatbot/xamarin",permalink:"/docs/platform_concepts/mobile/chatbot/xamarin",draft:!1,tags:[],version:"current",frontMatter:{title:"Chatbot SDK for xamarin",sidebar_label:"Xamarin"},sidebar:"platform_concepts",previous:{title:"React Native",permalink:"/docs/platform_concepts/mobile/chatbot/react-native"},next:{title:"Mobile SDK FAQs",permalink:"/docs/platform_concepts/mobile/chatbot/mobile-sdk-faq"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Xamarin",id:"xamarin",level:3},{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Setting up Xamarin.Forms",id:"setting-up-xamarinforms",level:3},{value:"Setting up Android",id:"setting-up-android",level:3},{value:"Setting up iOS",id:"setting-up-ios",level:3},{value:"File provider",id:"file-provider",level:4},{value:"Usage",id:"usage",level:2},{value:"Set botId",id:"set-botid",level:3},{value:"YM AuthenticationToken",id:"ym-authenticationtoken",level:3},{value:"Push Notifications",id:"push-notifications",level:3},{value:"Payload",id:"payload",level:3},{value:"Trigger journey",id:"trigger-journey",level:4},{value:"On-Premise / Region Specific deployments",id:"on-premise--region-specific-deployments",level:3},{value:"Custom loader",id:"custom-loader",level:3},{value:"V2 bot",id:"v2-bot",level:3},{value:"Speech to Text",id:"speech-to-text",level:3},{value:"Hide Input Bar",id:"hide-input-bar",level:3},{value:"Colors",id:"colors",level:3},{value:"Status bar",id:"status-bar",level:4},{value:"Close button",id:"close-button",level:4},{value:"iOS",id:"ios",level:4},{value:"Present chatbot",id:"present-chatbot",level:3},{value:"Bot Events",id:"bot-events",level:2},{value:"Bot close event",id:"bot-close-event",level:4},{value:"Close bot",id:"close-bot",level:2},{value:"Unlink Device Token",id:"unlink-device-token",level:2},{value:"Demo App",id:"demo-app",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-guide-for-android"},"Migration Guide for Android"),(0,i.kt)("p",null,"Version 1.x had an issue where a corrupted ymAuthentication token was passed in some cases from SDK to the server. The conversation history was thus mapped to the corrupted ymAuthenticationToken"),(0,i.kt)("p",null,"Version 2.x has fix for this issue and thus a correct ymAuthenticationToken is always passed.\nHowever, as the correct ymAuthentication is different from the corrupted token, our server treats this user as a new user which leads to a complete loss of history of user conversations.\nThe user will have a fresh start after updating the app."),(0,i.kt)("p",null,"Note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"ymAuthentication was corrupted only when it contained ",(0,i.kt)("inlineCode",{parentName:"li"},"=")," character in 1.x versions"),(0,i.kt)("li",{parentName:"ol"},"This issue was happening only on Android platform.")),(0,i.kt)("p",null,"For more info feel free to email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:mobile@yellow.ai"},"mobile@yellow.ai")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"xamarin"},"Xamarin"),(0,i.kt)("p",null,"Open NuGet package manager"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Search for YmChat"),(0,i.kt)("li",{parentName:"ul"},"Install the package for",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Xamarin.Forms"),(0,i.kt)("li",{parentName:"ul"},"Android"),(0,i.kt)("li",{parentName:"ul"},"iOS")))),(0,i.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,i.kt)("h3",{id:"setting-up-xamarinforms"},"Setting up Xamarin.Forms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"App.xaml.cs")),(0,i.kt)("li",{parentName:"ul"},"import namespace YmChat",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"using YmChat;\n"))),(0,i.kt)("li",{parentName:"ul"},"Accept parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"IYmChat")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"App")," constructor\nand pass down to the class where you are using the SDK",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"public App(IYmChat iymchat)\n{\n    InitializeComponent();\n    MainPage = new MainPage(iymchat);\n}\n")))),(0,i.kt)("h3",{id:"setting-up-android"},"Setting up Android"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"MainActivity.cs")),(0,i.kt)("li",{parentName:"ul"},"import namespace YmChat",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"using YmChat;\n"))),(0,i.kt)("li",{parentName:"ul"},"Inside ",(0,i.kt)("inlineCode",{parentName:"li"},"onCreate")," function add this snippet at the end",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"YmChatImplementation ymchat = new YmChatImplementation();\nLoadApplication(new App(ymchat));\n")))),(0,i.kt)("h3",{id:"setting-up-ios"},"Setting up iOS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to ",(0,i.kt)("inlineCode",{parentName:"li"},"AppDelegate.cs")),(0,i.kt)("li",{parentName:"ul"},"import namespace YmChat",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"using YmChat;\n"))),(0,i.kt)("li",{parentName:"ul"},"Inside ",(0,i.kt)("inlineCode",{parentName:"li"},"FinishedLaunching")," function add this snippet before return",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"YmChatImplementation ymchat = new YmChatImplementation();\nLoadApplication(new App(ymchat));\n")))),(0,i.kt)("h4",{id:"file-provider"},"File provider"),(0,i.kt)("p",null,"Add following key in your ",(0,i.kt)("inlineCode",{parentName:"p"},"strings.xml")," file found at ",(0,i.kt)("inlineCode",{parentName:"p"},"yourproject.Android/Resources/values/strings.xml"),", this will override default file provider used by SDK."),(0,i.kt)("p",null,'Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"\nExample - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<string name="application_id_for_provider">your.application.id.fileprovider</string>\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"set-botid"},"Set botId"),(0,i.kt)("p",null,"This is the first and compulsory step."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setBotId("botId");\n')),(0,i.kt)("h3",{id:"ym-authenticationtoken"},"YM AuthenticationToken"),(0,i.kt)("p",null,"ymAuthenticationToken is used to associate an identity of the user with the chat bot."),(0,i.kt)("p",null,"Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since ",(0,i.kt)("strong",{parentName:"p"},"inception"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setAuthenticationToken("token");\n')),(0,i.kt)("p",null,"Note: History will load only when ",(0,i.kt)("inlineCode",{parentName:"p"},"Show history")," flag is enabled in the channel settings"),(0,i.kt)("h3",{id:"push-notifications"},"Push Notifications"),(0,i.kt)("p",null,"YMChat supports firebase notifications. Pass your ",(0,i.kt)("inlineCode",{parentName:"p"},"FCM token")," in setDeviceToken method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setDeviceToken("token");\n')),(0,i.kt)("p",null,"Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"},"here")),(0,i.kt)("h3",{id:"payload"},"Payload"),(0,i.kt)("p",null,"Additional information can be passed in the form of key value pair from app to bot using payload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'var Payload = new Dictionary<string, object> { { "name": "Integration", "type": "Xamarin" } };\nymChatInterface.setPayLoad(Payload);\n')),(0,i.kt)("p",null,"Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown"),(0,i.kt)("p",null,"For passing data from bot to app refer bot ",(0,i.kt)("a",{parentName:"p",href:"#bot-events"},"Bot Events")),(0,i.kt)("admonition",{title:"payload security",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Payload is securely passed in HTTPS post request to protect the information passed in it")),(0,i.kt)("h4",{id:"trigger-journey"},"Trigger journey"),(0,i.kt)("p",null,"A specific journey can be triggered on launch, by passing the slug in the payload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},'ymChatInterface.setPayload({ "JourneySlug" : "checkout-cart" });\n')),(0,i.kt)("h3",{id:"on-premise--region-specific-deployments"},"On-Premise / Region Specific deployments"),(0,i.kt)("p",null,"YmChat supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to ",(0,i.kt)("inlineCode",{parentName:"p"},"setCustomURL()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCustomURL("https://your-on-prem-url.com");\n')),(0,i.kt)("p",null,"If the bot is deployed in a specific region(e.g. r1,r2,r3..rn)) on yellow.ai cloud, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"customBaseUrl")," as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCustomURL("https://rx.cloud.yellow.ai");\n')),(0,i.kt)("p",null,"Here rx = r1,r2,r3,r4,r5 etc"),(0,i.kt)("h3",{id:"custom-loader"},"Custom loader"),(0,i.kt)("p",null,"You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCustomLoaderURL(\n  "https://example.com/your/custom/image.gif"\n);\n')),(0,i.kt)("h3",{id:"v2-bot"},"V2 bot"),(0,i.kt)("p",null,"You can enable V2 bot by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"setVersion()")," method. Default value is 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.setVersion(2);\n")),(0,i.kt)("h3",{id:"speech-to-text"},"Speech to Text"),(0,i.kt)("p",null,"Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.setEnableSpeech(true);\n")),(0,i.kt)("h3",{id:"hide-input-bar"},"Hide Input Bar"),(0,i.kt)("p",null,"You can hide the input bar while bot is loading by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"setDisableActionsOnLoad")," API . Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.setDisableActionsOnLoad(true);\n")),(0,i.kt)("h3",{id:"colors"},"Colors"),(0,i.kt)("h4",{id:"status-bar"},"Status bar"),(0,i.kt)("p",null,"Status bar color can be set by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"setStatusBarColor")," method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setStatusBarColor("#FFFFFF")\n')),(0,i.kt)("h4",{id:"close-button"},"Close button"),(0,i.kt)("p",null,"Close button color can be set by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"setCloseButtonColor")," method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.setCloseButtonColor("#000000")\n')),(0,i.kt)("h4",{id:"ios"},"iOS"),(0,i.kt)("p",null,"If you are supporting Speech recognition, add following snippet to Info.plist of the host app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<key>NSMicrophoneUsageDescription</key>\n<string>Your microphone will be used to record your speech when you use the Voice feature.</string>\n<key>NSSpeechRecognitionUsageDescription</key>\n<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>\n")),(0,i.kt)("h3",{id:"present-chatbot"},"Present chatbot"),(0,i.kt)("p",null,"Chat bot can be presented by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"startChatbot()"),". This method will display full screen chat view"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.startChatBot();\n")),(0,i.kt)("h2",{id:"bot-events"},"Bot Events"),(0,i.kt)("p",null,"Bot events are used to pass information from bot to app. For passing events from app to bot refer ",(0,i.kt)("a",{parentName:"p",href:"#payload"},"Payload")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},' ymChatInterface.onEventFromBot((botEvent) =>\n  {\n    Console.WriteLine(botEvent["code"]);\n    Console.WriteLine(botEvent["data"]);\n  });\n')),(0,i.kt)("h4",{id:"bot-close-event"},"Bot close event"),(0,i.kt)("p",null,"Bot close event is separately sent and it can be handled in following way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'ymChatInterface.onBotClose(() =>\n  {\n    Console.WriteLine("Chatbot closed");\n  });\n')),(0,i.kt)("h2",{id:"close-bot"},"Close bot"),(0,i.kt)("p",null,"Bot can be closed by tapping on cross button at top, and they can be programmatically closed using ",(0,i.kt)("inlineCode",{parentName:"p"},"closeBot()")," function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},"ymChatInterface.closeBot();\n")),(0,i.kt)("h2",{id:"unlink-device-token"},"Unlink Device Token"),(0,i.kt)("p",null,"If you want to stop receiving push notifications you can unlink the device token.\nDevice token typically is unlinked when the user logs out of the app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c#"},'  ymChatInterface.unLinkDeviceToken(\n    botId,\n    apiKey,\n    deviceToken,\n    (isDeviceTokenUnlinked) {\n      Console.WriteLine("Device token unlinked");\n      },\n    (failureMessage) {\n      Console.WriteLine(failureMessage);\n      });\n')),(0,i.kt)("admonition",{title:"API Key",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"API key can be generated/found by visiting ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cloud.yellow.ai")," -> Overview -> Configure -> API Key section"),(0,i.kt)("p",{parentName:"admonition"},"Existing client can upgrade their dependency to ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.1.+")," and replace exisitng key with new API Key.\nClient using SDK version below ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.1.0")," will have no impact.")),(0,i.kt)("h2",{id:"demo-app"},"Demo App"),(0,i.kt)("p",null,"A demo app can be used as a reference to better understand how this SDK can be integrated in the app\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yellowmessenger/ymchat-xamarin-demo"},"https://github.com/yellowmessenger/ymchat-xamarin-demo")))}d.isMDXComponent=!0}}]);