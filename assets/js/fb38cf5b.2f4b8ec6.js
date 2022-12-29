"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[3888],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65773:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={title:"Android Chatbot SDK",sidebar_label:"Android"},s="Migration Guide",p={unversionedId:"platform_concepts/mobile/chatbot/android",id:"platform_concepts/mobile/chatbot/android",title:"Android Chatbot SDK",description:"Version 1.x had an issue where a corrupted ymAuthentication token was passed in some cases from SDK to the server. The conversation history was thus mapped to the corrupted ymAuthenticationToken",source:"@site/docs/platform_concepts/mobile/chatbot/android.md",sourceDirName:"platform_concepts/mobile/chatbot",slug:"/platform_concepts/mobile/chatbot/android",permalink:"/docs/platform_concepts/mobile/chatbot/android",draft:!1,tags:[],version:"current",frontMatter:{title:"Android Chatbot SDK",sidebar_label:"Android"},sidebar:"platform_concepts",previous:{title:"Cordova",permalink:"/docs/platform_concepts/mobile/inbox/cordova"},next:{title:"Cordova",permalink:"/docs/platform_concepts/mobile/chatbot/cordova"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Gradle",id:"gradle",level:3},{value:"File provider",id:"file-provider",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"YMConfig",id:"ymconfig",level:2},{value:"Initialize YMConfig",id:"initialize-ymconfig",level:3},{value:"YM AuthenticationToken",id:"ym-authenticationtoken",level:3},{value:"Push Notifications",id:"push-notifications",level:3},{value:"Payload",id:"payload",level:3},{value:"Trigger journey",id:"trigger-journey",level:4},{value:"On Premise / Region Specific deployments",id:"on-premise--region-specific-deployments",level:3},{value:"Custom loader",id:"custom-loader",level:3},{value:"V2 bot",id:"v2-bot",level:3},{value:"Speech to Text",id:"speech-to-text",level:3},{value:"Hide Input Bar",id:"hide-input-bar",level:3},{value:"Use Lite version",id:"use-lite-version",level:3},{value:"Colors",id:"colors",level:3},{value:"Status bar",id:"status-bar",level:4},{value:"Close button",id:"close-button",level:4},{value:"Starting the bot",id:"starting-the-bot",level:2},{value:"Get Chatbot Fragment",id:"get-chatbot-fragment",level:2},{value:"Bot Events",id:"bot-events",level:2},{value:"Bot close event",id:"bot-close-event",level:4},{value:"Close bot",id:"close-bot",level:2},{value:"Register Device",id:"register-device",level:2},{value:"Unlink Device Token",id:"unlink-device-token",level:2},{value:"Unread Message Count",id:"unread-message-count",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Conditional Permission",id:"conditional-permission",level:3},{value:"Record Audio",id:"record-audio",level:4},{value:"Location",id:"location",level:4},{value:"Important",id:"important",level:2},{value:"Demo App",id:"demo-app",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-guide"},"Migration Guide"),(0,i.kt)("p",null,"Version 1.x had an issue where a corrupted ymAuthentication token was passed in some cases from SDK to the server. The conversation history was thus mapped to the corrupted ymAuthenticationToken"),(0,i.kt)("p",null,"Version 2.x has fix for this issue and thus a correct ymAuthenticationToken is always passed.\nHowever, as the correct ymAuthentication is different from the corrupted token, our server treats this user as a new user which leads to a complete loss of history of user conversations.\nThe user will have a fresh start after updating the app."),(0,i.kt)("p",null,"Note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"ymAuthentication was corrupted only when it contained ",(0,i.kt)("inlineCode",{parentName:"li"},"=")," character in 1.x versions"),(0,i.kt)("li",{parentName:"ol"},"This issue was happening only on Android platform.")),(0,i.kt)("p",null,"For more info feel free to email us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:mobile@yellow.ai"},"mobile@yellow.ai")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"gradle"},"Gradle"),(0,i.kt)("p",null,"To integrate YMChat into your Android project using gradle, specify the following configurations in App level ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},'repositories {\n    jcenter()\n    // Add these two lines\n    maven { url "https://jitpack.io" }\n    maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }\n}\n\n...\n...\n...\n\ndependencies {\n    ...\n    ...\n       implementation \'com.github.yellowmessenger:YMChatbot-Android:2.2.+\n}\n')),(0,i.kt)("p",null,"Note: By puting + at the end, you need not to worry about updating and releaseing your app for every patch we are making in SDK.\nStill, if you want to use exact and latest version please visit the github repository mentioned\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yellowmessenger/YMChatbot-Android/releases"},"https://github.com/yellowmessenger/YMChatbot-Android/releases")),(0,i.kt)("h3",{id:"file-provider"},"File provider"),(0,i.kt)("p",null,"Note: Only for version v1.4.0 & above"),(0,i.kt)("p",null,"Add following key in your ",(0,i.kt)("inlineCode",{parentName:"p"},"strings.xml")," file, this will override default file provider used by SDK."),(0,i.kt)("p",null,'Overriding the file provider path will avoid conflict with other app using YM CHATBOT SDK. You can use your application id and suffix it with ".fileprovider"\nExample - applicationId : "com.abc.xyz" then application_id_for_provider = com.abc.xyz.fileprovider'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<string name="application_id_for_provider">your.application.id.fileprovider</string>\n')),(0,i.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,i.kt)("p",null,"Import the YMChat library in your Activity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import com.yellowmessenger.ymchat.YMChat;\nimport com.yellowmessenger.ymchat.YMConfig;\n")),(0,i.kt)("p",null,"After the library is imported the basic bot can be presented with few lines as below"),(0,i.kt)("p",null,"Example ",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate")," method of the Activity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    // Dummy bot id. (Purrs a lot)\n    String botID = "x1587041004122";\n\n    //Get YMChat instance\n    YMChat ymChat = YMChat.getInstance();\n    ymChat.config = new YMConfig(botId);\n    setContentView(R.layout.activity_main);\n    FloatingActionButton fab = findViewById(R.id.fab);\n    fab.setOnClickListener(view -> {\n        //Starting the bot activity\n        try {\n            ymChat.startChatbot(this);\n          } catch (Exception e) {\n           //Catch and handle the exception\n            e.printStackTrace();\n          }\n    });\n}\n')),(0,i.kt)("h2",{id:"ymconfig"},"YMConfig"),(0,i.kt)("p",null,"YMConfig can be used to set the bot id and other bot related settings. It is recommended to set all appropriate config ",(0,i.kt)("strong",{parentName:"p"},"before")," starting the bot"),(0,i.kt)("h3",{id:"initialize-ymconfig"},"Initialize YMConfig"),(0,i.kt)("p",null,"YMConfig requires ",(0,i.kt)("inlineCode",{parentName:"p"},"botID")," to initialize. All other settings are optional."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ymChat.config = new YMConfig("<BOT-ID>");\n')),(0,i.kt)("h3",{id:"ym-authenticationtoken"},"YM AuthenticationToken"),(0,i.kt)("p",null,"ymAuthenticationToken is used to associate an identity of the user with the chat bot."),(0,i.kt)("p",null,"Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since ",(0,i.kt)("strong",{parentName:"p"},"inception"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ymChat.config.ymAuthenticationToken = "your-token"\n')),(0,i.kt)("p",null,"Note: History will load only when ",(0,i.kt)("inlineCode",{parentName:"p"},"Show history")," flag is enabled in the channel settings"),(0,i.kt)("h3",{id:"push-notifications"},"Push Notifications"),(0,i.kt)("p",null,"YMChat supports firebase notifications. Assign your ",(0,i.kt)("inlineCode",{parentName:"p"},"FCM token")," to deviceToken"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ymChat.config.deviceToken = "your-firebase-device-token"\n')),(0,i.kt)("admonition",{title:"Mapping Firebase service key against Bot Id",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Firebase service account Json file is required to send notifications. You need to map service account json file against your bot ID. Request your contact person from ",(0,i.kt)("inlineCode",{parentName:"p"},"yellow.ai")," to share api for same. For more information about Firebase service account json file and how to get it check link ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"},"here"))),(0,i.kt)("h3",{id:"payload"},"Payload"),(0,i.kt)("p",null,"Additional information can be passed in the form of key value pair from app to bot using payload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'HashMap<String, Object> payloadData = new HashMap<>();\n//Setting Payload Data\npayloadData.put("some-key", "some-value");\nymChat.config.payload = payloadData;\n')),(0,i.kt)("p",null,"Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown"),(0,i.kt)("p",null,"For passing data from bot to app refer bot ",(0,i.kt)("a",{parentName:"p",href:"#bot-events"},"Bot Events")),(0,i.kt)("admonition",{title:"payload security",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Payload is securely passed in HTTPS post request to protect the information passed in it")),(0,i.kt)("h4",{id:"trigger-journey"},"Trigger journey"),(0,i.kt)("p",null,"A specific journey can be triggered on launch, by passing the slug in the payload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'HashMap<String, Object> payloadData = new HashMap<>();\n//Setting Payload Data\npayloadData.put("JourneySlug", "checkout-cart");\nymChat.config.payload = payloadData;\n')),(0,i.kt)("h3",{id:"on-premise--region-specific-deployments"},"On Premise / Region Specific deployments"),(0,i.kt)("p",null,"Your on-prem deployment URL can be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"customBaseUrl")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ymChat.config.customBaseUrl = "https://yourcustomurl.com";\n')),(0,i.kt)("p",null,"If the bot is deployed in a specific region(e.g. r1,r2,r3..rn)) on yellow.ai cloud, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"customBaseUrl")," as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ymChat.config.customBaseUrl = "https://rx.cloud.yellow.ai";\n')),(0,i.kt)("p",null,"Here rx = r1,r2,r3,r4,r5 etc."),(0,i.kt)("h3",{id:"custom-loader"},"Custom loader"),(0,i.kt)("p",null,"You can customize the loading image while bot loads. Just pass the URL in the following way. It is recommended to use jpg, png, svg or gif"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ymChat.config.customLoaderUrl = "https://example.com/your/custom/image.gif"\n')),(0,i.kt)("h3",{id:"v2-bot"},"V2 bot"),(0,i.kt)("p",null,"You can enable V2 bot by setting the version in config. Default value is 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ymChat.config.version = 2;\n")),(0,i.kt)("h3",{id:"speech-to-text"},"Speech to Text"),(0,i.kt)("p",null,"Speech to text can be enabled by setting the enableSpeech flag present in config. Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ymChat.config.enableSpeech = true\n")),(0,i.kt)("admonition",{title:"Imporant",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To enable Speech to text Please add record audio permission  (",(0,i.kt)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.RECORD_AUDIO" />'),") in manifest file.")),(0,i.kt)("h3",{id:"hide-input-bar"},"Hide Input Bar"),(0,i.kt)("p",null,"You can hide the input bar while bot is loading by setting the disableActionsOnLoad flag present in config. Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ymChat.config.disableActionsOnLoad = true\n")),(0,i.kt)("h3",{id:"use-lite-version"},"Use Lite version"),(0,i.kt)("p",null,"You can use lite version of the bot by setting the useLiteVersion flag present in config. Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ymChat.config.useLiteVersion = true\n")),(0,i.kt)("h3",{id:"colors"},"Colors"),(0,i.kt)("h4",{id:"status-bar"},"Status bar"),(0,i.kt)("p",null,"Status bar color can be set on ",(0,i.kt)("inlineCode",{parentName:"p"},"statusBarColor")," color variable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ymChat.config.statusBarColor = R.color.red\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ymChat.config.statusBarColorFromHex = "#FF0000"\n')),(0,i.kt)("p",null,"Note: if both ",(0,i.kt)("inlineCode",{parentName:"p"},"statusBarColor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"statusBarColorFromHex")," is used then ",(0,i.kt)("inlineCode",{parentName:"p"},"statusBarColorFromHex")," will take priority"),(0,i.kt)("h4",{id:"close-button"},"Close button"),(0,i.kt)("p",null,"Close button color can be set on ",(0,i.kt)("inlineCode",{parentName:"p"},"closeButtonColor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ymChat.config.closeButtonColor = R.color.white\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ymChat.config.closeButtonColorHex = "#FFFFFF"\n')),(0,i.kt)("p",null,"Note: if both ",(0,i.kt)("inlineCode",{parentName:"p"},"closeButtonColor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"closeButtonColorFromHex")," is used then ",(0,i.kt)("inlineCode",{parentName:"p"},"closeButtonColorFromHex")," will take priority"),(0,i.kt)("h2",{id:"starting-the-bot"},"Starting the bot"),(0,i.kt)("p",null,"Once the config is set, chat bot can be presented by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"startChatbot()")," and passing your Activity context as an argument"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ymChat.startChatbot(this);\n")),(0,i.kt)("h2",{id:"get-chatbot-fragment"},"Get Chatbot Fragment"),(0,i.kt)("p",null,"If clients want to use Chatbot Fragment in thier application, they can call the following method to get the fragment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Fragment chatbotView = ymChat.getChatBotView(this);\n")),(0,i.kt)("p",null,"Clients can embed this fragment in their activity and begin the transaction as they do for any other fragment."),(0,i.kt)("h2",{id:"bot-events"},"Bot Events"),(0,i.kt)("p",null,"Bot events are used to pass information from bot to app. Events from bot can be handled using event Listeners. Simply define the ",(0,i.kt)("inlineCode",{parentName:"p"},"onSuccess")," method of ",(0,i.kt)("inlineCode",{parentName:"p"},"onEventFromBot")," listener."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ymChat.onEventFromBot(botEvent -> {\n    switch (botEvent.getCode()) {\n    case "event-name": break;\n    }\n});\n')),(0,i.kt)("h4",{id:"bot-close-event"},"Bot close event"),(0,i.kt)("p",null,"Bot close event is separately sent and it can be handled by listening to onBotClose event as mentioned below. To programatically close bot use ",(0,i.kt)("inlineCode",{parentName:"p"},"ymChat.closeBot()")," method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'ymChat.onBotClose(() -> {\n  Log.d("Example App", "Bot Was closed");\n });\n')),(0,i.kt)("h2",{id:"close-bot"},"Close bot"),(0,i.kt)("p",null,"Bot can be programatically closed using ",(0,i.kt)("inlineCode",{parentName:"p"},"closeBot()")," function"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"ymChat.closeBot();\n")),(0,i.kt)("h2",{id:"register-device"},"Register Device"),(0,i.kt)("p",null,"If you want to receiving push notifications without or before launching the bot, you can register your device.\nTo use this api ",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"botId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"deviceToken")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ymAuthenticationToken")," are mandatory parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    try {\n            YMChat ymChat = YMChat.getInstance();\n            //Mandatory config  `botId`, `deviceToken` and `ymAuthenticationToken`\n            YMConfig ymConfig = new YMConfig("your bot id");\n            ymConfig.deviceToken = "your FCM Token";\n            ymConfig.ymAuthenticationToken = "your ymAuthentiction token";\n            // Set custom base url in case your bot does not belong to india region and yellow cloud\n            // Example- If your bot is in `r5` region custom base url would be `https://r5.cloud.yellow.ai\n            // ymConfig.customBaseUrl = "https://r5.cloud.yellow.ai";\n            ymChat.registerDevice(apiKey, ymConfig, new YellowCallback() {\n                @Override\n                public void success() {\n                    Toast.makeText(MainActivity.this, "Device Registered", Toast.LENGTH_SHORT).show();\n                }\n\n                @Override\n                public void failure(String message) {\n                    Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show();\n                }\n            });\n        } catch (Exception e) {\n            //Catch and handle the exception\n            e.printStackTrace();\n        }\n')),(0,i.kt)("h2",{id:"unlink-device-token"},"Unlink Device Token"),(0,i.kt)("p",null,"If you want to stop receiving push notifications you can unlink the device.\nTo use this api ",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"botId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deviceToken")," are mandatory parameters.\nDevice token typically is unlinked when the user logs out of the app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    try {\n            YMChat ymChat = YMChat.getInstance();\n            YMConfig ymConfig = new YMConfig("your bot id");\n            // Set the FCM token as device token, this is required so that it can be removed and customer stop receiving the notification\n            ymConfig.deviceToken = "your FCM Token";\n            // Set custom base url in case your bot does not belong to india region and yellow cloud\n            // Example- If your bot is in `r5` or EURO region custom base url would be `https://r5.cloud.yellow.ai\n            // ymConfig.customBaseUrl = "https://r5.cloud.yellow.ai";\n            ymChat.unlinkDeviceToken(apiKey, ymConfig, new YellowCallback() {\n                @Override\n                public void success() {\n                    Toast.makeText(MainActivity.this, "Token unlinked", Toast.LENGTH_SHORT).show();\n                }\n\n                @Override\n                public void failure(String message) {\n                    Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show();\n                }\n            });\n        } catch (Exception e) {\n            //Catch and handle the exception\n            e.printStackTrace();\n        }\n')),(0,i.kt)("admonition",{title:"API Key",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"API key can be generated/found by visiting ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cloud.yellow.ai")," -> Overview -> Configure -> API Key section"),(0,i.kt)("p",{parentName:"admonition"},"Existing client can upgrade their dependency to ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.1.+")," and replace exisitng key with new API Key.\nClient using SDK version below ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.1.0")," will have no impact.")),(0,i.kt)("h2",{id:"unread-message-count"},"Unread Message Count"),(0,i.kt)("p",null,"If you want to show an indicator in your app if there is any unread messages, you can achieve that by calling the given api when bot is in closed state.\nPre condition to use this api is that customer must have opened the bot at least once with ",(0,i.kt)("inlineCode",{parentName:"p"},"ymAuthenticationToken")," otherwise you will receive an error message.\nTo use this api ",(0,i.kt)("inlineCode",{parentName:"p"},"botId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ymAuthenticationToken")," are mandatory parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'        try {\n            YMChat ymChat = YMChat.getInstance();\n            YMConfig ymConfig = new YMConfig("your bot id");\n            // `ymAuthenticationToken` is required to identify the right\n            ymConfig.ymAuthenticationToken = "your ymAuthentiction token";\n            // Set custom base url in case your bot does not belong to india region and yellow cloud\n            // Example- If your bot is in `r5` region custom base url would be `https://r5.cloud.yellow.ai\n            // ymConfig.customBaseUrl = "https://r5.cloud.yellow.ai";\n            ymChat.getUnreadMessagesCount(ymConfig, new YellowDataCallback() {\n                @Override\n                public <T> void success(T data) {\n                    YellowUnreadMessageResponse response = (YellowUnreadMessageResponse) data;\n                    Toast.makeText(MainActivity.this, "Unread messages - " + response.getUnreadCount(), Toast.LENGTH_SHORT).show();\n                }\n\n                @Override\n                public void failure(String message) {\n                    Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show();\n                }\n            });\n        } catch (Exception e) {\n            //Catch and handle the exception\n            e.printStackTrace();\n        }\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Following dependencies are used in chat bot SDK"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    implementation 'androidx.appcompat:appcompat:1.3.0'\n    implementation 'androidx.legacy:legacy-support-v4:1.0.0'\n    implementation 'com.google.android.material:material:1.3.0'\n    implementation 'com.squareup.okhttp3:okhttp:4.7.2'\n    implementation 'com.google.code.gson:gson:2.8.6'\n    implementation 'androidx.multidex:multidex:2.0.1'\n\n    testImplementation 'junit:junit:4.13.2'\n    androidTestImplementation 'androidx.test.ext:junit:1.1.2'\n    androidTestImplementation 'androidx.test.espresso:espresso-core:3.3.0'\n")),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"We are declaring and asking for following permission in our manifest file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    <uses-permission android:name="android.permission.INTERNET" />\n    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" /> \n')),(0,i.kt)("p",null,"All permissions will be asked at run time except INTERNET.\nFor attachment (picking file/images from phone storage)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n')),(0,i.kt)("h3",{id:"conditional-permission"},"Conditional Permission"),(0,i.kt)("h4",{id:"record-audio"},"Record Audio"),(0,i.kt)("p",null,"If you want to use Speech to text feature please add following permission in your manifest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    <uses-permission android:name="android.permission.RECORD_AUDIO" />\n')),(0,i.kt)("h4",{id:"location"},"Location"),(0,i.kt)("p",null,"If your bot requires Location permission please add following permission in your manifest"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'     <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />\n')),(0,i.kt)("h2",{id:"important"},"Important"),(0,i.kt)("p",null,"If facing problem in release build, add the following configuration in the app's proguard-rules.pro file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"-keep public class com.yellowmessenger.ymchat.** {\n   *;\n}\n")),(0,i.kt)("h2",{id:"demo-app"},"Demo App"),(0,i.kt)("p",null,"A demo has been created to better understand the integration of SDK in Android app\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yellowmessenger/YmChatBot-Android-DemoApp"},"https://github.com/yellowmessenger/YmChatBot-Android-DemoApp")))}m.isMDXComponent=!0}}]);