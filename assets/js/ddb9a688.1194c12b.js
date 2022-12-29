"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[9165],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},96306:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],l={title:"iOS Chatbot SDK",sidebar_label:"iOS"},s=void 0,c={unversionedId:"platform_concepts/mobile/chatbot/ios",id:"platform_concepts/mobile/chatbot/ios",title:"iOS Chatbot SDK",description:"Installation",source:"@site/docs/platform_concepts/mobile/chatbot/ios.md",sourceDirName:"platform_concepts/mobile/chatbot",slug:"/platform_concepts/mobile/chatbot/ios",permalink:"/docs/platform_concepts/mobile/chatbot/ios",draft:!1,tags:[],version:"current",frontMatter:{title:"iOS Chatbot SDK",sidebar_label:"iOS"},sidebar:"platform_concepts",previous:{title:"Flutter",permalink:"/docs/platform_concepts/mobile/chatbot/flutter"},next:{title:"React Native",permalink:"/docs/platform_concepts/mobile/chatbot/react-native"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"CocoaPods",id:"cocoapods",level:3},{value:"Swift Package Manager Install",id:"swift-package-manager-install",level:3},{value:"Add Package directly to your Swift Project",id:"add-package-directly-to-your-swift-project",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"YMConfig",id:"ymconfig",level:2},{value:"Initialize YMConfig",id:"initialize-ymconfig",level:3},{value:"YM AuthenticationToken",id:"ym-authenticationtoken",level:3},{value:"Push Notifications",id:"push-notifications",level:3},{value:"Payload",id:"payload",level:3},{value:"Trigger journey",id:"trigger-journey",level:4},{value:"On Premise / Region Specific deployments",id:"on-premise--region-specific-deployments",level:3},{value:"Custom loader",id:"custom-loader",level:3},{value:"V2 bot",id:"v2-bot",level:3},{value:"Speech to Text",id:"speech-to-text",level:3},{value:"Hide Input Bar",id:"hide-input-bar",level:3},{value:"Use Lite version",id:"use-lite-version",level:3},{value:"Colors",id:"colors",level:3},{value:"Status bar background",id:"status-bar-background",level:4},{value:"Status bar style",id:"status-bar-style",level:4},{value:"Close button",id:"close-button",level:4},{value:"Start chatbot",id:"start-chatbot",level:2},{value:"Initialise View",id:"initialise-view",level:2},{value:"Bot Events",id:"bot-events",level:2},{value:"Bot close event",id:"bot-close-event",level:4},{value:"Close bot",id:"close-bot",level:2},{value:"Register Device",id:"register-device",level:2},{value:"Unlink Device Token",id:"unlink-device-token",level:2},{value:"Unread Message Count",id:"unread-message-count",level:2},{value:"Logging",id:"logging",level:2},{value:"Demo App",id:"demo-app",level:2}],d={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"cocoapods"},"CocoaPods"),(0,i.kt)("p",null,"To integrate YMChatbot into your Xcode project using CocoaPods, specify it in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'YMChat'\n")),(0,i.kt)("h3",{id:"swift-package-manager-install"},"Swift Package Manager Install"),(0,i.kt)("p",null,"To integrate YMChatbot into your Xcode project using SPM, specify it in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.swift"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},'dependencies: [\n    .package(url: "https://github.com/yellowmessenger/YMChatbot-iOS.git", .upToNextMajor(from: "1.7.3"))\n]\n')),(0,i.kt)("h3",{id:"add-package-directly-to-your-swift-project"},"Add Package directly to your Swift Project"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/3NnDTb2GSSDG1644486017511.png",alt:null})),(0,i.kt)("admonition",{title:"Supported iOS versions:",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"iOS 12 and above")),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"Import the ",(0,i.kt)("inlineCode",{parentName:"p"},"YMChat")," framework in the Swift file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"import YMChat\n")),(0,i.kt)("p",null,"After the framework is imported the bot can be presented with few lines as below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'do {\n    let config = YMConfig(botId: "x1234567890")\n    YMChat.shared.config = config\n    try YMChat.shared.startChatbot(on: self)\n} catch {\n    print("Error occured while loading chatbot \\(error)")\n}\n')),(0,i.kt)("h2",{id:"ymconfig"},"YMConfig"),(0,i.kt)("p",null,"YMConfig can be used to set the bot id and other bot related settings. It is recommended to set all appropriate config ",(0,i.kt)("strong",{parentName:"p"},"before")," starting the bot"),(0,i.kt)("h3",{id:"initialize-ymconfig"},"Initialize YMConfig"),(0,i.kt)("p",null,"YMConfig requires ",(0,i.kt)("inlineCode",{parentName:"p"},"botID")," to initialize. All other settings are optional."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let config = YMConfig(botId: "<bot-id>")\n')),(0,i.kt)("h3",{id:"ym-authenticationtoken"},"YM AuthenticationToken"),(0,i.kt)("p",null,"ymAuthenticationToken is used to associate an identity of the user with the chat bot."),(0,i.kt)("p",null,"Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since ",(0,i.kt)("strong",{parentName:"p"},"inception"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'config.ymAuthenticationToken = "your-token"\n')),(0,i.kt)("p",null,"Note: History will load only when ",(0,i.kt)("inlineCode",{parentName:"p"},"Show history")," flag is enabled in the channel settings"),(0,i.kt)("h3",{id:"push-notifications"},"Push Notifications"),(0,i.kt)("p",null,"YMChat supports firebase notifications. Assign your ",(0,i.kt)("inlineCode",{parentName:"p"},"FCM token")," to deviceToken"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'config.deviceToken = "your-firebase-device-token"\n')),(0,i.kt)("admonition",{title:"Mapping Firebase service key against Bot Id",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Firebase service account Json file is required to send notifications. You need to map service account json file against your bot ID. Request your contact person from ",(0,i.kt)("inlineCode",{parentName:"p"},"yellow.ai")," to share api for same. For more information about Firebase service account json file and how to get it check link ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"},"here"))),(0,i.kt)("h3",{id:"payload"},"Payload"),(0,i.kt)("p",null,"Additional information can be passed in the form of key value pair from app to bot using payload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'config.payload = ["name": "ym.bot.name", "device-type": "mobile"]\n')),(0,i.kt)("p",null,"Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown"),(0,i.kt)("p",null,"For passing data from bot to app refer bot ",(0,i.kt)("a",{parentName:"p",href:"#bot-events"},"Bot Events")),(0,i.kt)("admonition",{title:"payload security",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Payload is securely passed in HTTPS post request to protect the information passed in it")),(0,i.kt)("h4",{id:"trigger-journey"},"Trigger journey"),(0,i.kt)("p",null,"A specific journey can be triggered on launch, by passing the slug in the payload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'config.payload = ["JourneySlug" : "checkout-cart"]\n')),(0,i.kt)("h3",{id:"on-premise--region-specific-deployments"},"On Premise / Region Specific deployments"),(0,i.kt)("p",null,"Your on-prem deployment URL can be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"customBaseUrl")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'config.customBaseUrl = "https://yourcustomurl.com"\n')),(0,i.kt)("p",null,"If the bot is deployed in a specific region(e.g. r1,r2,r3..rn)) on yellow.ai cloud, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"customBaseUrl")," as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'config.customBaseUrl = "https://rx.cloud.yellow.ai"\n')),(0,i.kt)("p",null,"Here rx = r1,r2,r3,r4,r5 etc"),(0,i.kt)("h3",{id:"custom-loader"},"Custom loader"),(0,i.kt)("p",null,"You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'config.customLoaderUrl = "https://example.com/your/custom/image.gif"\n')),(0,i.kt)("h3",{id:"v2-bot"},"V2 bot"),(0,i.kt)("p",null,"You can enable V2 bot by setting the version in config. Default value is 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"config.version = 2\n")),(0,i.kt)("h3",{id:"speech-to-text"},"Speech to Text"),(0,i.kt)("p",null,"Speech to text can be enabled by setting the enableSpeech flag. Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"config.enableSpeech = true\n")),(0,i.kt)("p",null,"If you are adding Speech recognization, add following snippet to Info.plist of the host app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSMicrophoneUsageDescription</key>\n<string>Your microphone will be used to record your speech when you use the Voice feature.</string>\n<key>NSSpeechRecognitionUsageDescription</key>\n<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>\n")),(0,i.kt)("h3",{id:"hide-input-bar"},"Hide Input Bar"),(0,i.kt)("p",null,"You can hide the input bar while bot is loading by setting the disableActionsOnLoad flag present in config. Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"config.disableActionsOnLoad = true\n")),(0,i.kt)("h3",{id:"use-lite-version"},"Use Lite version"),(0,i.kt)("p",null,"You can use lite version of the bot by setting the useLiteVersion flag present in config. Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"config.useLiteVersion = true\n")),(0,i.kt)("h3",{id:"colors"},"Colors"),(0,i.kt)("h4",{id:"status-bar-background"},"Status bar background"),(0,i.kt)("p",null,"Status bar background color can be set using ",(0,i.kt)("inlineCode",{parentName:"p"},"statusBarColor")," variable present in YMConfig"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"config.statusBarColor = UIColor.red\n")),(0,i.kt)("h4",{id:"status-bar-style"},"Status bar style"),(0,i.kt)("p",null,"Status bar style can be set on ",(0,i.kt)("inlineCode",{parentName:"p"},"statusBarStyle")," variable present in YMConfig."),(0,i.kt)("p",null,"Values can be either ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"lightContent")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"darkContent"),". Default type is ",(0,i.kt)("inlineCode",{parentName:"p"},"default")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"config.statusBarStyle = UIStatusBarStyle.darkContent\n")),(0,i.kt)("h4",{id:"close-button"},"Close button"),(0,i.kt)("p",null,"Close button color can be set on ",(0,i.kt)("inlineCode",{parentName:"p"},"closeButtonColor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"config.closeButtonColor = UIColor.blue\n")),(0,i.kt)("h2",{id:"start-chatbot"},"Start chatbot"),(0,i.kt)("p",null,"Once the config is set, chat bot can be presented by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"startChatbot()")," method and passing your view controller as an argument"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'do {\n    try YMChat.shared.startChatbot(on: self)\n} catch {\n    print("Error occured while loading chatbot \\(error)")\n}\n')),(0,i.kt)("h2",{id:"initialise-view"},"Initialise View"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"initialiseView()")," creates an instance of UIViewController which can be used to show the chat view. This view controller can be presented over an existing view controller or can be pushed in navigation controller."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'do {\n   let chatViewController = try YMChat.shared.initialiseView()\n   self.navigationController?.pushViewController(chatViewController, animated: true)\n} catch {\n    print("Error occured while loading chatbot \\(error)")\n}\n')),(0,i.kt)("h2",{id:"bot-events"},"Bot Events"),(0,i.kt)("p",null,"Bot events are used to pass information from bot to app. For passing events from app to bot refer ",(0,i.kt)("a",{parentName:"p",href:"#payload"},"Payload")),(0,i.kt)("p",null,"Events from bot can be handled using delegate pattern."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"YMChat.shared.delegate = self\n")),(0,i.kt)("p",null,"Once the delegate is assigned define the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventResponse(_:)")," function. The handler class should conform to ",(0,i.kt)("inlineCode",{parentName:"p"},"YMChatDelegate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func onEventFromBot(_ response: YMBotEventResponse) {\n    print("Event received \\(response)")\n    if response.code == "code-from-bot" {\n        print("Even from a bot has been received", response.data)\n    }\n}\n')),(0,i.kt)("h4",{id:"bot-close-event"},"Bot close event"),(0,i.kt)("p",null,"Bot close event is separetly sent and it can be handled in following way. The handler class should conform to ",(0,i.kt)("inlineCode",{parentName:"p"},"YMChatDelegate")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'func onBotClose() {\n    print("Bot closed")\n}\n')),(0,i.kt)("h2",{id:"close-bot"},"Close bot"),(0,i.kt)("p",null,"Bot can be programatically closed using ",(0,i.kt)("inlineCode",{parentName:"p"},"closeBot()")," function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"YMChat.shared.closeBot()\n")),(0,i.kt)("h2",{id:"register-device"},"Register Device"),(0,i.kt)("p",null,"If you want to receiving push notifications without or before launching the bot, you can register your device.\nTo use this api ",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"botId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"deviceToken")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ymAuthenticationToken")," are mandatory parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'    let config = YMConfig(botId: "your bot id")\n    config.deviceToken = "your FCM Token"\n    config.ymAuthenticationToken = "your ymAuthentication token"\n\n    // Set custom base url in case your bot does not belong to india region and yellow cloud\n    // Example- If your bot is in `r5` region custom base url would be `https://r5.cloud.yellow.ai\n    // config.customBaseUrl = "https://r5.cloud.yellow.ai"\n\n    YMChat.shared.registerDevice(apiKey: apiKey, ymConfig: config) {\n        print("Success")\n    } failure: { error in\n        print(error)\n    }\n')),(0,i.kt)("h2",{id:"unlink-device-token"},"Unlink Device Token"),(0,i.kt)("p",null,"If you want to stop receiving push notifications you can unlink the device.\nTo use this api ",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"botId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deviceToken")," are mandatory parameters.\nDevice token typically is unlinked when the user logs out of the app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'    let config = YMConfig(botId: "your bot id")\n    // Set the FCM token as device token, this is required so that it can be removed and customer stop receiving the notification\n    config.deviceToken = "your FCM Token"\n    // Set custom base url in case your bot does not belong to india region and yellow cloud\n    // Example- If your bot is in `r5` or EURO region custom base url would be `https://r5.cloud.yellow.ai\n    // config.customBaseUrl = "https://r5.cloud.yellow.ai";\n\n    YMChat.shared.unlinkDeviceToken(apiKey: apiKey, ymConfig: config) {\n        print("Token removed successfully")\n    } failure: { errorString in\n        print("ERROR: \\(errorString)")\n    }\n')),(0,i.kt)("admonition",{title:"API Key",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"API key can be generated/found by visiting ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cloud.yellow.ai")," -> Overview -> Configure -> API Key section")),(0,i.kt)("h2",{id:"unread-message-count"},"Unread Message Count"),(0,i.kt)("p",null,"If you want to show an indicator in your app if there is any unread messages, you can achieve that by calling the given api when bot is in closed state.\nPre condition to use this api is that customer must have opened the bot at least once with ",(0,i.kt)("inlineCode",{parentName:"p"},"ymAuthenticationToken")," otherwise you will receive an error message.\nTo use this api ",(0,i.kt)("inlineCode",{parentName:"p"},"botId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ymAuthenticationToken")," are mandatory parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'    let config = YMConfig(botId: "your bot id")\n    // `ymAuthenticationToken` is required to identify the right\n    config.ymAuthenticationToken = "your ymAuthentication token"\n    // Set custom base url in case your bot does not belong to india region and yellow cloud\n    // Example- If your bot is in `r5` region custom base url would be `https://r5.cloud.yellow.ai\n    // config.customBaseUrl = "https://r5.cloud.yellow.ai";\n\n    YMChat.shared.getUnreadMessagesCount(ymConfig: config) { count in\n        print("Unread message count:" + count)\n    } failure: { error in\n        print(error)\n    }\n')),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Logging can be enabled to understand the code flow and to fix bugs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"YMChat.shared.enableLogging = true\n")),(0,i.kt)("h2",{id:"demo-app"},"Demo App"),(0,i.kt)("p",null,"A demo has been created to better understand the integration of SDK in iOS app\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp"},"https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp")))}g.isMDXComponent=!0}}]);