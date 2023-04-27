"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[34801],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(g,l(l({ref:n},d),{},{components:t})):o.createElement(g,l({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[p]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70958:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return p}});var o=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],r={title:"Inbox SDK for Cordova",sidebar_label:"Cordova"},s=void 0,c={unversionedId:"platform_concepts/mobile/inbox/cordova",id:"platform_concepts/mobile/inbox/cordova",title:"Inbox SDK for Cordova",description:"Installation",source:"@site/docs/platform_concepts/mobile/inbox/cordova.md",sourceDirName:"platform_concepts/mobile/inbox",slug:"/platform_concepts/mobile/inbox/cordova",permalink:"/docs/platform_concepts/mobile/inbox/cordova",draft:!1,tags:[],version:"current",frontMatter:{title:"Inbox SDK for Cordova",sidebar_label:"Cordova"},sidebar:"platform_concepts",previous:{title:"iOS",permalink:"/docs/platform_concepts/mobile/inbox/ios"},next:{title:"Android",permalink:"/docs/platform_concepts/mobile/chatbot/android"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Demo App",id:"demo-app",level:4},{value:"Initialization",id:"initialization",level:2},{value:"Overview",id:"overview",level:2},{value:"My Chats",id:"my-chats",level:2},{value:"Notification",id:"notification",level:2},{value:"Background Notification",id:"background-notification",level:3},{value:"Local Notification",id:"local-notification",level:3},{value:"Video call Notification",id:"video-call-notification",level:3},{value:"Agent Status",id:"agent-status",level:2},{value:"Get All Agent Statuses",id:"get-all-agent-statuses",level:3},{value:"Get Agent Status",id:"get-agent-status",level:3},{value:"Set Agent Status",id:"set-agent-status",level:3},{value:"Logout",id:"logout",level:3},{value:"Mandatory overrides",id:"mandatory-overrides",level:2},{value:"Optional overrides for Android",id:"optional-overrides-for-android",level:2},{value:"colors.xml",id:"colorsxml",level:3},{value:"Dimens.xml",id:"dimensxml",level:3},{value:"Informational",id:"informational",level:2},{value:"Versions",id:"versions",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Permissions",id:"permissions",level:3}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Run this command in terminal form project root folder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova plugin add cordova-plugin-yellowinbox\n")),(0,i.kt)("h4",{id:"demo-app"},"Demo App"),(0,i.kt)("p",null,"A demo app has been created to understand the integration and usage of the SDK. It can be found here ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/yellowmessenger/yellowinbox-ionic-demo"},"https://github.com/yellowmessenger/yellowinbox-ionic-demo")),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"To initialize the SDK, API_KEY, USER_ID and BOT_ID are three mandatory parameters.\nUsers can call the following method for initialization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.initialize(\n  "API_KEY",\n  "USER_ID",\n  "BOT_ID",\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"apiKey:\nAPI_KEY will be provided by yellow.ai. It's clients responsibility to keep the API_KEY safe."),(0,i.kt)("li",{parentName:"ol"},"userId:\nUserId will be the id registered/provided to yellow.ai by the client to authenticate their employee. This is a mandatory parameter."),(0,i.kt)("li",{parentName:"ol"},"botId:\nBOT_ID will be provided by yellow.ai, Client apps need to keep it safe such that no one else apart from the app can access it.")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Overview gives a high level picture of all the work by showing details like total online agents, average response time and so on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.startOverviewScreen(\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),(0,i.kt)("h2",{id:"my-chats"},"My Chats"),(0,i.kt)("p",null,"My Chats lets you view chats that are assigned to you, open and archived. You can also interact with the customer from my chats"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.startMyChatScreen(\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),(0,i.kt)("h2",{id:"notification"},"Notification"),(0,i.kt)("h3",{id:"background-notification"},"Background Notification"),(0,i.kt)("p",null,"To receive firebase notification clients need to send Firebase device token to SDK. To do so the following method can be used."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.setFirebaseDeviceToken("DEVICE_TOKEN");\n')),(0,i.kt)("p",null,"Clients will receive firebase notification if the app is not running in foreground or in background, or if Ticket Create, User Message or Agent is added as collaborator actions happening on a ticket.\nClients need not to listen to these notifications when the app is running, SDK will take care of such events."),(0,i.kt)("p",null,"Call the following method if you want to take user to appropriate view once user clicks on notification delivered in system tray and sent by yellow.ai. Call ",(0,i.kt)("inlineCode",{parentName:"p"},"handleBackgroundNotification"),' only if payload contains key "ym". This key indicates notification is coming from Yellow.ai'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'if (payload["ym"] != undefined) {\n  cordova.plugins.YellowInbox.handleBackgroundNotification(\n    backgroundNotificationData\n  );\n}\n')),(0,i.kt)("h3",{id:"local-notification"},"Local Notification"),(0,i.kt)("p",null,"Clients will receive local notification that will be triggered by the SDK based on the events received over XMPP."),(0,i.kt)("p",null,"In case a client wants to override the normal behaviour of notification or want to update title/body, they can do so by calling following method and catch the events\nClients need to call following method for listening to local event notification and modifying them"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.setLocalReceiver(\n  (event) => {\n    console.log(JSON.stringify(event));\n    /*console.log prints\n        {\n          title: String,\n          body: String,\n          model: Object,\n          eventType: String\n        }\n      */\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"eventType: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u201cTicketCreateEvent\u201d"),(0,i.kt)("li",{parentName:"ul"},"\u201cTicketUpdateEvent\u201d")))),(0,i.kt)("p",null,"Send back the updated data, to show local notification by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"setUpdatedEvent"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.setUpdatedEvent(\n  event,\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),(0,i.kt)("p",null,"Clients will receive events for Ticket Create and Ticket Update (new message, agent added as collaborator).\nWe recommend not to modify model data as it may result in not showing notification at all. Model is exposed so the client can make use of data present in it to create the required title and body."),(0,i.kt)("h3",{id:"video-call-notification"},"Video call Notification"),(0,i.kt)("p",null,"If a client is receiving a video call notification while the app is in background, there is no special handling required for it. Simply tapping on notification will take the user to the appropriate view and show a dialog to answer/decline the call.\nIn case the app is running and in the foreground, the client needs to listen to Firebase notification and call the following function.\nAssuming client is already using FCM"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Client need to set the Firebase token in case device token changes by calling"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.setFirebaseDeviceToken("DEVICE_TOKEN");\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In firebase push notification payload callback client need to check if payload contains \u201ccallJoinUrl\u201d call the SDK function to handle it"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.handleBackgroundNotification(\n if (payload.data["callJoinUrl"] != undefined) {\n    cordova.plugins.YellowInbox.handleBackgroundNotification(payload.data);\n  }\n);\n')),(0,i.kt)("p",{parentName:"li"},"A call declined from notification can be joined from the Chat view by tapping on the call icon"))),(0,i.kt)("h2",{id:"agent-status"},"Agent Status"),(0,i.kt)("h3",{id:"get-all-agent-statuses"},"Get All Agent Statuses"),(0,i.kt)("p",null,"To get all possible statuses of logged in User against the bot id (Used for initialising the SDK), client can call the following method.\nThis can be used to show all the possible status when Agent want to change the status."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.getAllAgentStatus(\n  (agentStatus) => {\n    console.log(agentStatus);\n    /* Console.log prints list of agent status\n      [\n        {\n          "parentStatus":"Available",\n          "status":"Working",\n          "statusId":"123456"\n        },\n         {\n          "parentStatus":"Busy",\n          "status":"Lunch",\n          "statusId":"789012"\n        }\n      ]\n    */\n  },\n  (failureJSON) => {\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),(0,i.kt)("h3",{id:"get-agent-status"},"Get Agent Status"),(0,i.kt)("p",null,"To get availability status of logged in user, client can call the following method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.getAgentStatus(\n  (agentStatus) => {\n    console.log(agentStatus);\n    /* Console.log prints Agent status\n      {\n          "parentStatus":"Busy",\n          "status":"Lunch",\n          "statusId":"789012"\n        }\n    */\n  },\n  (failureJSON) => {\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),(0,i.kt)("h3",{id:"set-agent-status"},"Set Agent Status"),(0,i.kt)("p",null,"To set the status of logged in User, the client can call the following method.\nClient need to pass the AgentStatus object received from making ",(0,i.kt)("inlineCode",{parentName:"p"},"cordova.plugins.YellowInbox.getAllAgentStatus()")," call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.setAgentStatus(\n  {\n    parentStatus: "Available",\n    status: "Working",\n    statusId: "123456",\n  },\n  (successResponse) => {\n    /* Console.log prints\n      "OK"\n     */\n  },\n  (failureJSON) => {\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),(0,i.kt)("h3",{id:"logout"},"Logout"),(0,i.kt)("p",null,"By calling logout, all the services and notifications will be terminated. You can call this function when user logs out of the app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'cordova.plugins.YellowInbox.logout(\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),(0,i.kt)("h2",{id:"mandatory-overrides"},"Mandatory overrides"),(0,i.kt)("p",null,"Please add the following key in your strings.xml file and change the value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<string name="application_id_for_provider">your.app.id.fileprovider</string>\n')),(0,i.kt)("p",null,"By doing this all the images/files will be sandboxed for your app."),(0,i.kt)("h2",{id:"optional-overrides-for-android"},"Optional overrides for Android"),(0,i.kt)("h3",{id:"colorsxml"},"colors.xml"),(0,i.kt)("p",null,"You can update your colors.xml. By overriding these value you can the color as per your app design\nNavigate to project/platforms/android/app/src/main/res/values and in values/colors.xml add the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<color name="ym_app_bar_color">@color/primaryColor</color>\n<color name="ym_status_bar_color">@color/primaryDarkColor</color>\n<color name="ym_app_bar_text_color">@color/white</color>\n<color name="ym_app_bar_icon_color">@color/white</color>\n<color name="ym_text_color_primary">@color/primaryTextColor</color>\n<color name="ym_text_color_secondary">@color/secondaryTextColor</color>\n<color name="ym_accent_color">@color/colorAccent</color>\n<color name="ym_icon_color">#707E8A</color>\n<color name="ym_event_msg_background_color">#EAF5FB</color> //light color\n<color name="ym_sent_msg_background_color">#007ED4</color> //dark color\n<color name="ym_rcv_msg_background_color">#F5F8FA</color> // light color\n<color name="ym_progressbar_color">#14568E</color>\n')),(0,i.kt)("p",null,"Note : if colors.xml is not present create it"),(0,i.kt)("h3",{id:"dimensxml"},"Dimens.xml"),(0,i.kt)("p",null,"Navigate to project/platforms/android/app/src/main/res/values and in values/dimens.xml add the following"),(0,i.kt)("p",null,"By overriding the client can control text size and progress bar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<dimen  name="ym_title_size">16sp</dimen>\n<dimen  name="ym_subtitle_size">14sp</dimen>\n<dimen  name="ym_caption_size">12sp</dimen>\n<dimen name="ym_body_size">14dp</dimen>\n<dimen name="ym_progress_bar_size">36dp</dimen>\n<dimen name="ym_in_view_progress_bar_size">24dp</dimen>\n')),(0,i.kt)("h2",{id:"informational"},"Informational"),(0,i.kt)("h3",{id:"versions"},"Versions"),(0,i.kt)("p",null,"YellowInbox SDK usage following minimumSdkVersion targetSdkVersion."),(0,i.kt)("p",null,"minSdkVersion 21\ntargetSdkVersion 30"),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"YellowInbox SDK usage following dependencies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"dependencies {\n    implementation \"org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version\"\n    implementation 'androidx.core:core-ktx:1.5.0'\n    implementation 'androidx.appcompat:appcompat:1.3.0'\n    implementation 'com.google.android.material:material:1.3.0'\n    implementation 'androidx.legacy:legacy-support-v4:1.0.0'\n    implementation 'androidx.gridlayout:gridlayout:1.0.0'\n\n    implementation 'com.squareup.retrofit2:retrofit:2.9.0'\n    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'\n    implementation 'com.squareup.okhttp3:logging-interceptor:4.7.2'\n\n    implementation 'com.google.dagger:dagger:2.27'\n    implementation 'androidx.constraintlayout:constraintlayout:2.0.4'\n    kapt 'com.google.dagger:dagger-compiler:2.27'\n\n    implementation 'androidx.lifecycle:lifecycle-livedata-ktx:2.3.1'\n    implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.3.1'\n    implementation 'androidx.lifecycle:lifecycle-runtime-ktx:2.3.1'\n    implementation 'androidx.lifecycle:lifecycle-common-java8:2.3.1'\n\n    // Glide\n    implementation 'com.github.bumptech.glide:glide:4.12.0'\n    annotationProcessor 'com.github.bumptech.glide:compiler:4.12.0'\n\n    //Smack\n    implementation \"org.igniterealtime.smack:smack-android-extensions:4.2.0\"\n    implementation \"org.igniterealtime.smack:smack-tcp:4.2.0\"\n\n    //Event bus\n    implementation 'org.greenrobot:eventbus:3.2.0'\n\n    testImplementation 'junit:junit:4.+'\n    androidTestImplementation 'androidx.test.ext:junit:1.1.2'\n    androidTestImplementation 'androidx.test.espresso:espresso-core:3.3.0'\n}\n")),(0,i.kt)("h3",{id:"permissions"},"Permissions"),(0,i.kt)("p",null,"YellowInbox SDK usage following permissions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n<uses-permission android:name="android.permission.READ_PHONE_STATE" />\n')))}m.isMDXComponent=!0}}]);