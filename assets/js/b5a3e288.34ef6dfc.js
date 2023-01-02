"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[8276],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=s(n),m=o,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,r(r({ref:e},d),{},{components:n})):a.createElement(g,r({ref:e},d))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69319:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={title:"Android push notifications",sidebar_label:"Android push notifications"},p=void 0,s={unversionedId:"platform_concepts/channelConfiguration/android_push",id:"platform_concepts/channelConfiguration/android_push",title:"Android push notifications",description:"Push notifications help communicate important information through mobile apps. It could be offers, app updates, important announcements, order information, or any other details that you want your app users to notify.",source:"@site/docs/platform_concepts/channelConfiguration/android_push.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/android_push",permalink:"/docs/platform_concepts/channelConfiguration/android_push",draft:!1,tags:[],version:"current",frontMatter:{title:"Android push notifications",sidebar_label:"Android push notifications"}},d={},c=[{value:"1. Configure Android push notification",id:"1-configure-android-push-notification",level:2},{value:"Step 1: Add project to FCM &amp; generate private key",id:"step-1-add-project-to-fcm--generate-private-key",level:3},{value:"Step 2: Add key to Yellow.ai",id:"step-2-add-key-to-yellowai",level:3},{value:"2. Code snippets for Android Push notifications",id:"2-code-snippets-for-android-push-notifications",level:2},{value:"2.1 Notification without custom action",id:"21-notification-without-custom-action",level:3},{value:"2.2 Notification with deep link",id:"22-notification-with-deep-link",level:3},{value:"2.3 Notification with bot response",id:"23-notification-with-bot-response",level:3},{value:"2.4 Handle notification for foreground app",id:"24-handle-notification-for-foreground-app",level:3},{value:"2.5 Fetch extra data from notification when clicked",id:"25-fetch-extra-data-from-notification-when-clicked",level:3},{value:"2.6 Start bot with extra data and bot details",id:"26-start-bot-with-extra-data-and-bot-details",level:3}],u={toc:c};function m(t){var e=t.components,n=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Push notifications help communicate important information through mobile apps. It could be offers, app updates, important announcements, order information, or any other details that you want your app users to notify."),(0,i.kt)("center",null,(0,i.kt)("img",{src:"https://i.imgur.com/pYaY53f.jpg",width:"50%"})),(0,i.kt)("p",null,"You can send push notifications to Android or iOS applications using the following services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Firebase Cloud Messaging")," (FCM):  To send push notifications to Android apps."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Apple Push Notification Service")," (APNS): To send push notifications to iOS or Mac OS apps.")),(0,i.kt)("h2",{id:"1-configure-android-push-notification"},"1. Configure Android push notification"),(0,i.kt)("h3",{id:"step-1-add-project-to-fcm--generate-private-key"},"Step 1: Add project to FCM & generate private key"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log on to the ",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"Firebase Developer Console")," and add Firebase to your ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/android/setup"},"Android app"),".\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/wWLefrH.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In Project settings, navigate to ",(0,i.kt)("strong",{parentName:"p"},"Service accounts"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/3Z1ga3w.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Generate new private key"),". A JSON file will be downloaded which contains all the credentials."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Qzdl7Cf.png",alt:null})))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For detailed help,  ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/android/client"},"see Firebase documentation"),".\n2.  To set up Firebase Cloud Messaging client app on Android,  see the ",(0,i.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/android/client"},"Firebase official documentation"),".")),(0,i.kt)("h3",{id:"step-2-add-key-to-yellowai"},"Step 2: Add key to Yellow.ai"),(0,i.kt)("p",null,"Once you get the key JSON file, upload the key on Yellow.ai to establish a connection and grant access to send push notifications from Yellow.ai."),(0,i.kt)("p",null,"To connect FCM to yellow.ai, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"Channels")," > ",(0,i.kt)("strong",{parentName:"li"},"Push Notifications")," > ",(0,i.kt)("strong",{parentName:"li"},"Android (FCM)"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Upload")," and choose the downloaded JSON file."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/MXpitnt98nfq77xcERfHs5nKdeJUqQ42x1Paqh34KHvmo25ikVQryimMtxX8fAdU1SBcf9ZSL7SHduNiC1QsYBiwvFXXGgrEXzBXsR66jC14o7djEPtQKjWC2ZNyUmiYiYVsjd8UCUPNBKyRSKiXH3phdZF949jPshsBcT72G3ZqPoFiVGzQbgZLDEfUZSgDZZceh38sz116SVLCrGC4YFrLucpLLcUS41YppMQCXNEwcevcZYmjwagkzDJSJJvCPRUYTmqVkmC3r4sNaL511omqxMGaViz7HZw7LLyhEZVDifig8f/Image.jpg",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To know how to create a push notification campaign, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/platform_concepts/engagement/outbound/templates/mobilepush"},"Mobile push template"),".")),(0,i.kt)("h2",{id:"2-code-snippets-for-android-push-notifications"},"2. Code snippets for Android Push notifications"),(0,i.kt)("p",null,"The following table provides descriptions of different parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Datatype"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"notification"),(0,i.kt)("td",{parentName:"tr",align:null},"Obj"),(0,i.kt)("td",{parentName:"tr",align:null},"Details of the notification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"title"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Title of the notification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"body"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Content of the notification.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"payload"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Contains additional parameters such as iamge, botId, deeplink and journeySlug.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"botId"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The bot ID for which the notification has been triggered.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"image"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Path of the image file or URL of the image.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"deeplink"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"URL which redirects the user to a particular page of the application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"journeySlug"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"The journey which has to be triggered in the bot, when the user taps on the notification")))),(0,i.kt)("h3",{id:"21-notification-without-custom-action"},"2.1 Notification without custom action"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "notification": {\n        "title": "Hey there",\n        "body": "Body",\n        "image": "{ImageUrl}"\n    },\n    "token": "{deviceToken}"\n}\n')),(0,i.kt)("h3",{id:"22-notification-with-deep-link"},"2.2 Notification with deep link"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "notification": {\n        "title": "Hey there",\n        "body": "Body",\n        "image": "{imageUrl}"\n    },\n    "data": {\n        "botId": {botId},\n        "deeplink": "{url}"\n    },\n    "token": "{deviceToken}"\n}\n')),(0,i.kt)("h3",{id:"23-notification-with-bot-response"},"2.3 Notification with bot response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "notification": {\n        "title": "Hey there",\n        "body": "Body",\n        "image": "{imageUrl}"\n    },\n    "data": {\n        "botId": "{botId}",\n        "journeySlug": "{slug}"\n    },\n    "token": "{deviceToken}"\n}\n')),(0,i.kt)("h3",{id:"24-handle-notification-for-foreground-app"},"2.4 Handle notification for foreground app"),(0,i.kt)("p",null,"Use the following code snippet to display the notification when an incoming event notification payload is received."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import android.util.Log\nimport com.google.firebase.messaging.FirebaseMessagingService\nimport com.google.firebase.messaging.RemoteMessage\n\nclass MyFirebaseMessagingService: FirebaseMessagingService() {\n    final\n    var TAG: String = "YMLog"\n    override fun onMessageReceived(remoteMessage: RemoteMessage) {\n        Log.i(TAG + " Remote message", remoteMessage.toString())\n        Log.i(TAG + " Remote message", remoteMessage.data.toString())\n        super.onMessageReceived(remoteMessage)\n    }\n}\n')),(0,i.kt)("h3",{id:"25-fetch-extra-data-from-notification-when-clicked"},"2.5 Fetch extra data from notification when clicked"),(0,i.kt)("p",null,"Use the following code snippet to define what happens when the user clicks on the notification. You can fetch additional information from the user when the user clicks on the notification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'HashMap < String, Object > payloadData = new HashMap < > ();\nHashMap < String, Object > botPayloadData = new HashMap < > ();\n\nBundle bundle = getIntent().getExtras();\nif (bundle != null) {\n    String tmp = "";\n    for (String key: bundle.keySet()) {\n        Object value = bundle.get(key);\n        payloadData.put(key, value);\n        tmp += key + ": " + value + "\\n\\n";\n    }\n    mTextView.setText(tmp);\n}\n')),(0,i.kt)("h3",{id:"26-start-bot-with-extra-data-and-bot-details"},"2.6 Start bot with extra data and bot details"),(0,i.kt)("p",null,"Use the following code snippet to open the bot and trigger a specific bot flow when the user clicks on the notification. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'if (payloadData.get("botId") != null) {\n    String botId = (String) payloadData.get("botId");\n    YMChat ymChat = YMChat.getInstance();\n\n    ymChat.config = new YMConfig(botId);\n    ymChat.config.version = 2;\n    ymChat.config.ymAuthenticationToken = "2gs20emoof1666164936076";\n\n    if (payloadData.get("journeySlug") != null) {\n        String journeySlug = (String) payloadData.get("journeySlug");\n        botPayloadData.put("JourneySlug", journeySlug);\n        ymChat.config.payload = botPayloadData;\n    }\n\n    try {\n        ymChat.startChatbot(this);\n    } catch (Exception e) {\n        e.printStackTrace();\n    }\n}\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more details regarding the integration, see "),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android"},"Android SDK documentation"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/yellowmessenger/YmChatBot-Android-DemoApp"},"Test app with Android SDK and Firebase integration")))))}m.isMDXComponent=!0}}]);