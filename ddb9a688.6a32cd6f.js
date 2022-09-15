(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{365:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(407)),c=["components"],r={title:"iOS Chatbot SDK",sidebar_label:"iOS"},l={unversionedId:"platform_concepts/mobile/chatbot/ios",id:"platform_concepts/mobile/chatbot/ios",isDocsHomePage:!1,title:"iOS Chatbot SDK",description:"Installation",source:"@site/docs/platform_concepts/mobile/chatbot/ios.md",slug:"/platform_concepts/mobile/chatbot/ios",permalink:"/docs/platform_concepts/mobile/chatbot/ios",version:"current",sidebar_label:"iOS",sidebar:"platform_concepts",previous:{title:"Flutter Chatbot SDK",permalink:"/docs/platform_concepts/mobile/chatbot/flutter"},next:{title:"react-native Chatbot SDK",permalink:"/docs/platform_concepts/mobile/chatbot/react-native"}},s=[{value:"Installation",id:"installation",children:[{value:"CocoaPods",id:"cocoapods",children:[]},{value:"Swift Package Manager Install",id:"swift-package-manager-install",children:[]},{value:"Add Package directly to your Swift Project",id:"add-package-directly-to-your-swift-project",children:[]}]},{value:"Basic Usage",id:"basic-usage",children:[]},{value:"YMConfig",id:"ymconfig",children:[{value:"Initialize YMConfig",id:"initialize-ymconfig",children:[]},{value:"YM AuthenticationToken",id:"ym-authenticationtoken",children:[]},{value:"Push Notifications",id:"push-notifications",children:[]},{value:"Payload",id:"payload",children:[]},{value:"On Premise / Region Specific deployments",id:"on-premise--region-specific-deployments",children:[]},{value:"Custom loader",id:"custom-loader",children:[]},{value:"V2 bot",id:"v2-bot",children:[]},{value:"Speech to Text",id:"speech-to-text",children:[]},{value:"Hide Input Bar",id:"hide-input-bar",children:[]},{value:"Use Lite version",id:"use-lite-version",children:[]},{value:"Colors",id:"colors",children:[]}]},{value:"Start chatbot",id:"start-chatbot",children:[]},{value:"Initialise View",id:"initialise-view",children:[]},{value:"Bot Events",id:"bot-events",children:[]},{value:"Close bot",id:"close-bot",children:[]},{value:"Unlink Device Token",id:"unlink-device-token",children:[]},{value:"Logging",id:"logging",children:[]},{value:"Demo App",id:"demo-app",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"cocoapods"},"CocoaPods"),Object(i.b)("p",null,"To integrate YMChatbot into your Xcode project using CocoaPods, specify it in your ",Object(i.b)("inlineCode",{parentName:"p"},"Podfile"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},"pod 'YMChat'\n")),Object(i.b)("h3",{id:"swift-package-manager-install"},"Swift Package Manager Install"),Object(i.b)("p",null,"To integrate YMChatbot into your Xcode project using SPM, specify it in your ",Object(i.b)("inlineCode",{parentName:"p"},"Package.swift"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-ruby"},'dependencies: [\n    .package(url: "https://github.com/yellowmessenger/YMChatbot-iOS.git", .upToNextMajor(from: "1.7.3"))\n]\n')),Object(i.b)("h3",{id:"add-package-directly-to-your-swift-project"},"Add Package directly to your Swift Project"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/3NnDTb2GSSDG1644486017511.png",alt:null})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Supported iOS versions:")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"iOS 12 and above"))),Object(i.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(i.b)("p",null,"Import the ",Object(i.b)("inlineCode",{parentName:"p"},"YMChat")," framework in the Swift file"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"import YMChat\n")),Object(i.b)("p",null,"After the framework is imported the bot can be presented with few lines as below"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'do {\n    let config = YMConfig(botId: "x1234567890")\n    YMChat.shared.config = config\n    try YMChat.shared.startChatbot(on: self)\n} catch {\n    print("Error occured while loading chatbot \\(error)")\n}\n')),Object(i.b)("h2",{id:"ymconfig"},"YMConfig"),Object(i.b)("p",null,"YMConfig can be used to set the bot id and other bot related settings. It is recommended to set all appropriate config ",Object(i.b)("strong",{parentName:"p"},"before")," starting the bot"),Object(i.b)("h3",{id:"initialize-ymconfig"},"Initialize YMConfig"),Object(i.b)("p",null,"YMConfig requires ",Object(i.b)("inlineCode",{parentName:"p"},"botID")," to initialize. All other settings are optional."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'let config = YMConfig(botId: "<bot-id>")\n')),Object(i.b)("h3",{id:"ym-authenticationtoken"},"YM AuthenticationToken"),Object(i.b)("p",null,"ymAuthenticationToken is used to associate an identity of the user with the chat bot."),Object(i.b)("p",null,"Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since ",Object(i.b)("strong",{parentName:"p"},"inception"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'config.ymAuthenticationToken = "your-token"\n')),Object(i.b)("p",null,"Note: History will load only when ",Object(i.b)("inlineCode",{parentName:"p"},"Show history")," flag is enabled in the channel settings"),Object(i.b)("h3",{id:"push-notifications"},"Push Notifications"),Object(i.b)("p",null,"YMChat supports firebase notifications. Assign your ",Object(i.b)("inlineCode",{parentName:"p"},"FCM token")," to deviceToken"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'config.deviceToken = "your-firebase-device-token"\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Mapping Firebase service key against Bot Id")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Firebase service account Json file is required to send notifications. You need to map service account json file against your bot ID. Request your contact person from ",Object(i.b)("inlineCode",{parentName:"p"},"yellow.ai")," to share api for same. For more information about Firebase service account json file and how to get it check link ",Object(i.b)("a",{parentName:"p",href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"},"here")))),Object(i.b)("h3",{id:"payload"},"Payload"),Object(i.b)("p",null,"Additional information can be passed in the form of key value pair from app to bot using payload."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'config.payload = ["name": "ym.bot.name", "device-type": "mobile"]\n')),Object(i.b)("p",null,"Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown"),Object(i.b)("p",null,"For passing data from bot to app refer bot ",Object(i.b)("a",{parentName:"p",href:"#bot-events"},"Bot Events")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"payload security")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Payload is securely passed in HTTPS post request to protect the information passed in it"))),Object(i.b)("h4",{id:"trigger-journey"},"Trigger journey"),Object(i.b)("p",null,"A specific journey can be triggered on launch, by passing the slug in the payload."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'config.payload = ["JourneySlug" : "checkout-cart"]\n')),Object(i.b)("h3",{id:"on-premise--region-specific-deployments"},"On Premise / Region Specific deployments"),Object(i.b)("p",null,"Your on-prem deployment URL can be set to ",Object(i.b)("inlineCode",{parentName:"p"},"customBaseUrl")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'config.customBaseUrl = "https://yourcustomurl.com"\n')),Object(i.b)("p",null,"If the bot is deployed in a specific region(e.g. r1,r2,r3..rn)) on yellow.ai cloud, set the ",Object(i.b)("inlineCode",{parentName:"p"},"customBaseUrl")," as follows"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'config.customBaseUrl = "https://rx.cloud.yellow.ai"\n')),Object(i.b)("p",null,"Here rx = r1,r2,r3,r4,r5 etc"),Object(i.b)("h3",{id:"custom-loader"},"Custom loader"),Object(i.b)("p",null,"You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'config.customLoaderUrl = "https://example.com/your/custom/image.gif"\n')),Object(i.b)("h3",{id:"v2-bot"},"V2 bot"),Object(i.b)("p",null,"You can enable V2 bot by setting the version in config. Default value is 1"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"config.version = 2\n")),Object(i.b)("h3",{id:"speech-to-text"},"Speech to Text"),Object(i.b)("p",null,"Speech to text can be enabled by setting the enableSpeech flag. Default value is ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"config.enableSpeech = true\n")),Object(i.b)("p",null,"If you are adding Speech recognization, add following snippet to Info.plist of the host app"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},"<key>NSMicrophoneUsageDescription</key>\n<string>Your microphone will be used to record your speech when you use the Voice feature.</string>\n<key>NSSpeechRecognitionUsageDescription</key>\n<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>\n")),Object(i.b)("h3",{id:"hide-input-bar"},"Hide Input Bar"),Object(i.b)("p",null,"You can hide the input bar while bot is loading by setting the disableActionsOnLoad flag present in config. Default value is ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"config.disableActionsOnLoad = true\n")),Object(i.b)("h3",{id:"use-lite-version"},"Use Lite version"),Object(i.b)("p",null,"You can use lite version of the bot by setting the useLiteVersion flag present in config. Default value is ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"config.useLiteVersion = true\n")),Object(i.b)("h3",{id:"colors"},"Colors"),Object(i.b)("h4",{id:"status-bar-background"},"Status bar background"),Object(i.b)("p",null,"Status bar background color can be set using ",Object(i.b)("inlineCode",{parentName:"p"},"statusBarColor")," variable present in YMConfig"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"config.statusBarColor = UIColor.red\n")),Object(i.b)("h4",{id:"status-bar-style"},"Status bar style"),Object(i.b)("p",null,"Status bar style can be set on ",Object(i.b)("inlineCode",{parentName:"p"},"statusBarStyle")," variable present in YMConfig."),Object(i.b)("p",null,"Values can be either ",Object(i.b)("inlineCode",{parentName:"p"},"default"),", ",Object(i.b)("inlineCode",{parentName:"p"},"lightContent")," or ",Object(i.b)("inlineCode",{parentName:"p"},"darkContent"),". Default type is ",Object(i.b)("inlineCode",{parentName:"p"},"default")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"config.statusBarStyle = UIStatusBarStyle.darkContent\n")),Object(i.b)("h4",{id:"close-button"},"Close button"),Object(i.b)("p",null,"Close button color can be set on ",Object(i.b)("inlineCode",{parentName:"p"},"closeButtonColor")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"config.closeButtonColor = UIColor.blue\n")),Object(i.b)("h2",{id:"start-chatbot"},"Start chatbot"),Object(i.b)("p",null,"Once the config is set, chat bot can be presented by calling ",Object(i.b)("inlineCode",{parentName:"p"},"startChatbot()")," method and passing your view controller as an argument"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'do {\n    try YMChat.shared.startChatbot(on: self)\n} catch {\n    print("Error occured while loading chatbot \\(error)")\n}\n')),Object(i.b)("h2",{id:"initialise-view"},"Initialise View"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"initialiseView()")," creates an instance of UIViewController which can be used to show the chat view. This view controller can be presented over an existing view controller or can be pushed in navigation controller."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'do {\n   let chatViewController = try YMChat.shared.initialiseView()\n   self.navigationController?.pushViewController(chatViewController, animated: true)\n} catch {\n    print("Error occured while loading chatbot \\(error)")\n}\n')),Object(i.b)("h2",{id:"bot-events"},"Bot Events"),Object(i.b)("p",null,"Bot events are used to pass information from bot to app. For passing events from app to bot refer ",Object(i.b)("a",{parentName:"p",href:"#payload"},"Payload")),Object(i.b)("p",null,"Events from bot can be handled using delegate pattern."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"YMChat.shared.delegate = self\n")),Object(i.b)("p",null,"Once the delegate is assigned define the ",Object(i.b)("inlineCode",{parentName:"p"},"eventResponse(_:)")," function. The handler class should conform to ",Object(i.b)("inlineCode",{parentName:"p"},"YMChatDelegate")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'func onEventFromBot(_ response: YMBotEventResponse) {\n    print("Event received \\(response)")\n    if response.code == "code-from-bot" {\n        print("Even from a bot has been received", response.data)\n    }\n}\n')),Object(i.b)("h4",{id:"bot-close-event"},"Bot close event"),Object(i.b)("p",null,"Bot close event is separetly sent and it can be handled in following way. The handler class should conform to ",Object(i.b)("inlineCode",{parentName:"p"},"YMChatDelegate")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'func onBotClose() {\n    print("Bot closed")\n}\n')),Object(i.b)("h2",{id:"close-bot"},"Close bot"),Object(i.b)("p",null,"Bot can be programatically closed using ",Object(i.b)("inlineCode",{parentName:"p"},"closeBot()")," function"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"YMChat.shared.closeBot()\n")),Object(i.b)("h2",{id:"unlink-device-token"},"Unlink Device Token"),Object(i.b)("p",null,"If you want to stop receiving push notifications you can unlink the device token.\nDevice token typically is unlinked when the user logs out of the app."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},'YMChat.shared.unlinkDeviceToken(botId: <#bot-id#>, apiKey: <#api-key#>, deviceToken: <#firebase-device-token#>) {\n    print("Token removed successfully")\n} failure: { errorString in\n    print("ERROR: \\(errorString)")\n}\n')),Object(i.b)("p",null,"Note: API key can be found in account settings under Access keys section after you login."),Object(i.b)("h2",{id:"logging"},"Logging"),Object(i.b)("p",null,"Logging can be enabled to understand the code flow and to fix bugs."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"YMChat.shared.enableLogging = true\n")),Object(i.b)("h2",{id:"demo-app"},"Demo App"),Object(i.b)("p",null,"A demo has been created to better understand the integration of SDK in iOS app\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp"},"https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp")))}p.isMDXComponent=!0},407:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?o.a.createElement(m,r(r({ref:t},s),{},{components:n})):o.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);