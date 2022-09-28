(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(435)),l=["components"],r={title:"Inbox SDK for Android",sidebar_label:"Android"},c={unversionedId:"platform_concepts/mobile/inbox/android",id:"platform_concepts/mobile/inbox/android",isDocsHomePage:!1,title:"Inbox SDK for Android",description:"SDK integration",source:"@site/docs/platform_concepts/mobile/inbox/android.md",slug:"/platform_concepts/mobile/inbox/android",permalink:"/docs/platform_concepts/mobile/inbox/android",version:"current",sidebar_label:"Android",sidebar:"platform_concepts",previous:{title:"Custom Usecases",permalink:"/docs/platform_concepts/inbox/custom-usecases"},next:{title:"Inbox SDK for iOS",permalink:"/docs/platform_concepts/mobile/inbox/ios"}},s=[{value:"SDK integration",id:"sdk-integration",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"Overview",id:"overview",children:[{value:"Overview Activity",id:"overview-activity",children:[]},{value:"Overview Fragment",id:"overview-fragment",children:[]}]},{value:"My Chat",id:"my-chat",children:[{value:"My Chat Activity",id:"my-chat-activity",children:[]},{value:"My Chat Fragment",id:"my-chat-fragment",children:[]}]},{value:"Notifications",id:"notifications",children:[{value:"Background Notification",id:"background-notification",children:[]},{value:"Local Notification",id:"local-notification",children:[]},{value:"Video call Notification",id:"video-call-notification",children:[]}]},{value:"Agent Status",id:"agent-status",children:[{value:"Get All Agent Statuses",id:"get-all-agent-statuses",children:[]},{value:"Get Agent Status",id:"get-agent-status",children:[]},{value:"Set Agent Status",id:"set-agent-status",children:[]}]},{value:"Logout",id:"logout",children:[]},{value:"Mandatory overrides",id:"mandatory-overrides",children:[]},{value:"Optional overrides",id:"optional-overrides",children:[{value:"colors.xml",id:"colorsxml",children:[]},{value:"Dimens.xml",id:"dimensxml",children:[]}]},{value:"Informational",id:"informational",children:[{value:"Versions",id:"versions",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Permissions",id:"permissions",children:[]}]}],d={toc:s};function b(e){var t=e.components,n=Object(i.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"sdk-integration"},"SDK integration"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You can see what's new and download the sdk ",Object(o.b)("a",{parentName:"li",href:"https://github.com/yellowmessenger/inbox-sdk-link/blob/master/android.md"},"here")),Object(o.b)("li",{parentName:"ol"},"Add the SDK to your project")),Object(o.b)("h4",{id:"demo-app"},"Demo App"),Object(o.b)("p",null,"A demo app has been created to understand the integration and usage of the SDK. It can be found here ",Object(o.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/Inbox-SDK-Demo-App-Android"},"https://github.com/yellowmessenger/Inbox-SDK-Demo-App-Android")),Object(o.b)("h2",{id:"initialization"},"Initialization"),Object(o.b)("p",null,"The SDK can be initialised by passing API_KEY, USER_ID and BOT_ID to the init method."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"YellowInbox.init(applicationContext : Context,\n    apiKey : String,\n    userId: String,\n    botId : String\n) : LiveData<Resource<Void>>\n")),Object(o.b)("h4",{id:"applicationcontext"},"applicationContext"),Object(o.b)("p",null,"Application context is used to initialise the service which runs XMPP."),Object(o.b)("h4",{id:"apikey"},"apiKey"),Object(o.b)("p",null,"API_KEY will be provided by yellow.ai, It is clients responsibility to keep the API_KEY safe.\nThis is a mandatory parameter."),Object(o.b)("h4",{id:"userid"},"userId"),Object(o.b)("p",null,"UserId will be the id registered/provided to yellow.ai by the client to authenticate their employee. This is a mandatory parameter."),Object(o.b)("h4",{id:"botid"},"botId"),Object(o.b)("p",null,"BOT_ID will be provided by yellow.ai.\nThis is a mandatory parameter."),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'import android.app.Application\nimport androidx.lifecycle.ProcessLifecycleOwner\nimport com.yellowmessenger.YellowInbox\nimport com.yellowmessenger.YmAppProcessLifeCycleListener\n\nclass TestApplication : Application() {\n\n  override fun onCreate() {\n    super.onCreate()\n\n    //Set Process lifecycle listener\n    // This is required to listen to application state\n    ProcessLifecycleOwner.get()\n        .lifecycle\n        .addObserver(YmAppProcessLifeCycleListener())\n\n    // Initialise the SDK\n    YellowInbox.init(applicationContext, "API_KEY", "USER_ID", "BOT_ID")\n           .observe(lifecycleOwner, Observer {\n              when(it.status) {\n              SUCCESS-> Log.d(TAG, "SDK initialised successfully")\n              ERROR -> Log.d(TAG, "Error while initialising the SDK")\n              else-> null\n         }\n      })\n    }\n}\n')),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Overview view is provided as a fragment and activity"),Object(o.b)("h3",{id:"overview-activity"},"Overview Activity"),Object(o.b)("p",null,"If clients want to use Overview Activity in their application, they can call the following method to get the Activity."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"YellowInbox.startOverviewActivity(context:Context)\n")),Object(o.b)("h3",{id:"overview-fragment"},"Overview Fragment"),Object(o.b)("p",null,"If clients want to use Overview Fragment in their application, they can call the following method to get the fragment"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"val fragment =YellowInbox.getOverviewFragment()\n")),Object(o.b)("p",null,"Clients can embed this fragment in their activity and begin the transaction as they do for any other fragment."),Object(o.b)("h2",{id:"my-chat"},"My Chat"),Object(o.b)("p",null,"Chats view is provided as a fragment and activity"),Object(o.b)("h3",{id:"my-chat-activity"},"My Chat Activity"),Object(o.b)("p",null,"If clients want to use MyChat Activity in their application, they can call the following method to get the Activity."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"YellowInbox.startMyChatActivity(context:Context)\n")),Object(o.b)("h3",{id:"my-chat-fragment"},"My Chat Fragment"),Object(o.b)("p",null,"If clients want to use MyChat Fragment in their application, they can call the following method to get the fragment"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"val fragment =YellowInbox.getMyChatsFragment()\n")),Object(o.b)("p",null,"Clients can embed this fragment in their activity and begin the transaction as they do for any other fragment."),Object(o.b)("h2",{id:"notifications"},"Notifications"),Object(o.b)("h3",{id:"background-notification"},"Background Notification"),Object(o.b)("p",null,"To receive firebase notification clients need to send Firebase device token to SDK. To do so the following method can be used."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'YellowInbox.setFirebaseDeviceToken("FIRE_BASE_DEVICE_TOKEN")\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Make sure to call this function when the device token is changed."))),Object(o.b)("p",null,"Clients will receive firebase notification if the app is not running in foreground or in background, or if Ticket Create, User Message or Agent is added as collaborator actions happening on a ticket."),Object(o.b)("p",null,"Clients need not to listen to these notifications when the app is running, SDK will take care of such events."),Object(o.b)("p",null,"Clients need to call following method if they want to take user to appropriate view once user clicks on notification delivered in system tray and sent by yellow.ai"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'fun getDataFromIntent(): MutableMap<String, Any?> {\n   val data = mutableMapOf<String, Any?>()\n   if (intent.extras != null) {\n     for (key in intent.extras!!.keySet()) {\n       val value = intent.extras!![key]\n       data[key] = value\n     }\n     this.intent.putExtras(Bundle.EMPTY)\n   }\n   return data\n}\n\nval data: Map<String, Any?> = getDataFromIntent()\n\nif (data.containsKey("ym")) {\n  YellowInbox.handleBackgroundNotification(\n    context = applicationContext,\n    data = data\n  )\n}\n')),Object(o.b)("p",null,"Notification data will get delivered as intent extra in launcher Activity. Clients can use the above mentioned method to fetch data from Intent and create a map."),Object(o.b)("h3",{id:"local-notification"},"Local Notification"),Object(o.b)("p",null,"Clients will receive local notification that will be triggered by the SDK based on the events received over XMPP.\nIn case a client wants to override the normal behaviour of notification or want to update title/body, they can do so by overriding the YmMessageReceiver class."),Object(o.b)("p",null,"Clients need to call following method for listening to local event notification and modifying them"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"YellowInbox.setLocalReceiver(receiver:BroadcastReceiver)\n")),Object(o.b)("p",null,"Example (How to use YmMessageReceiver)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"import com.yellowmessenger.YmMessageReceiver\nimport com.yellowmessenger.ui.xmpp.model.YmTicketCreateModel\nimport com.yellowmessenger.ui.xmpp.model.YmXMPPMessageModel\n\nclass TestMessageReceiver : YmMessageReceiver() {\n    override fun onTicketCreateEventReceived(\n        title: String?,\n        body: String?,\n        model: YmTicketCreateModel\n    ) {\n        super.onTicketCreateEventReceived(title, body, model)\n    }\n\n    override fun onTicketUpdateEventReceived(\n        title: String?,\n        body: String?,\n        model: YmXMPPMessageModel\n    ) {\n        super.onTicketUpdateEventReceived(title, body, model)\n    }\n}\n")),Object(o.b)("p",null,"Clients will receive events for Ticket Create and Ticket Update (new message, agent added as collaborator).\nWe recommend not to modify model data as it may result in not showing notification at all. Model is exposed so the client can make use of data present in it to create the required title and body."),Object(o.b)("h3",{id:"video-call-notification"},"Video call Notification"),Object(o.b)("p",null,"If a client is receiving a video call notification while the app is in background, there is no special handling required for it. Simply tapping on notification will take the user to the appropriate view and show a dialog to answer/decline the call."),Object(o.b)("p",null,"In case the app is running and in the foreground, the client needs to listen to Firebase notification and call the following function."),Object(o.b)("p",null,"Assuming client has already have a service which overrides FirebaseMessagingService"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Client need to set the Firebase token in case device token changes by calling")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"YellowInbox.setFirebaseDeviceToken(token)\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"In onMessageReceived(message:RemoteMessage) function client need to check if message contains \u201ccallJoinUrl\u201d call the SDK function to handle it")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'if (message.data.containsKey("callJoinUrl") && !message.data["callJoinUrl"].isNullOrEmpty()) {\n    YellowInbox.handleBackgroundNotification(applicationContext, message.data)\n}\n')),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'class YmSupportFirebaseMessagingService : FirebaseMessagingService() {\n    override fun onNewToken(token: String) {\n        sendRegistrationToServer(token)\n    }\n\n    private fun sendRegistrationToServer(token: String) {\n        val hasValidData = hasValidData(this.applicationContext)\n        if (hasValidData) {\n            YellowInbox.setFirebaseDeviceToken(token)\n        }\n    }\n\n    override fun onMessageReceived(message: RemoteMessage) {\n        super.onMessageReceived(message)\n        if (message.data.containsKey("callJoinUrl") && !message.data["callJoinUrl"].isNullOrEmpty()) {\n            YellowInbox.handleBackgroundNotification(applicationContext, message.data)\n        }\n    }\n}\n')),Object(o.b)("p",null,"A call declined from notification can be joined from the Chat view by tapping on the call icon"),Object(o.b)("h2",{id:"agent-status"},"Agent Status"),Object(o.b)("h3",{id:"get-all-agent-statuses"},"Get All Agent Statuses"),Object(o.b)("p",null,"To get all possible statuses of logged in User against the bot id (Used for initialising the SDK), client can call the following method.\nThis can be used to show all the possible status when Agent want to change the status."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"YellowInbox.getAllAgentStatus(): List<YmAgentStatus>\n")),Object(o.b)("h3",{id:"get-agent-status"},"Get Agent Status"),Object(o.b)("p",null,"To get availability status of logged in User against the bot id (Used for initialising the SDK), client can call the following method and observe on it."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"YellowInbox.getAgentStatus(): LiveData<Resource<YmAgentStatus>>\n")),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"YellowInbox.getAgentStatus().observe(lifecycleOwner, Observer {\n  when(it.status) {\n    Resource.SUCCESS -> {\n      val data:YmAgentStatus = it.data\n    }\n    Resource.ERROR -> {\n      val msg:String = it.message\n    }\n    else -> {\n\n    }\n  }\n})\n")),Object(o.b)("h3",{id:"set-agent-status"},"Set Agent Status"),Object(o.b)("p",null,"To set the status of logged in user against the bot id (Used for initialising the SDK), the client can call the following method and observe on it.\nClient need to pass the YmAgentStatus object received from making ",Object(o.b)("inlineCode",{parentName:"p"},"YellowInbox.getAllAgentStatus()")," call."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"YellowInbox.setAgentStatus(status: YmAgentStatus): LiveData<Resource<Void>>\n")),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'YellowInbox.setAgentStatus(status)\n  .observe(lifecycleOwner,Observer{\n     when(it.status){\n       Resource.SUCCESS -> {\n         showToast("Status changed")\n       }\n       Resource.ERROR -> {\n         val msg:String = it.message\n       }\n       else -> {\n\n       }\n   }\n})\n')),Object(o.b)("h2",{id:"logout"},"Logout"),Object(o.b)("p",null,"By calling logout, all the services and notifications will be terminated. You can call this function when user logs out of the app"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"YellowInbox.logout(): MutableLiveData<Resource<Void>>\n")),Object(o.b)("p",null,"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'YellowInbox.logout()\n  .observe(lifecycleOwner,Observer{\n     when(it.status){\n       Resource.SUCCESS -> {\n         showToast("Logout Success!")\n       }\n       Resource.ERROR -> {\n         val msg:String = it.message\n       }\n       else -> {\n\n       }\n   }\n})\n')),Object(o.b)("h2",{id:"mandatory-overrides"},"Mandatory overrides"),Object(o.b)("p",null,"Please add the following key in your strings.xml file and change the value."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<string name="application_id_for_provider">your.app.id.fileprovider</string>\n')),Object(o.b)("p",null,"By doing this all the images/files will be sandboxed for your app."),Object(o.b)("h2",{id:"optional-overrides"},"Optional overrides"),Object(o.b)("h3",{id:"colorsxml"},"colors.xml"),Object(o.b)("p",null,"You can update your colors.xml. By overriding these value you can the color as per your app design"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<color name="ym_app_bar_color">@color/primaryColor</color>\n<color name="ym_status_bar_color">@color/primaryDarkColor</color>\n<color name="ym_app_bar_text_color">@color/white</color>\n<color name="ym_app_bar_icon_color">@color/white</color>\n<color name="ym_text_color_primary">@color/primaryTextColor</color>\n<color name="ym_text_color_secondary">@color/secondaryTextColor</color>\n<color name="ym_accent_color">@color/colorAccent</color>\n<color name="ym_icon_color">#707E8A</color>\n<color name="ym_event_msg_background_color">#EAF5FB</color> //light color\n<color name="ym_sent_msg_background_color">#007ED4</color> //dark color\n<color name="ym_rcv_msg_background_color">#F5F8FA</color> // light color\n<color name="ym_progressbar_color">#14568E</color>\n')),Object(o.b)("h3",{id:"dimensxml"},"Dimens.xml"),Object(o.b)("p",null,"By overriding the client can control size texts and progress bar."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<dimen  name="ym_title_size">16sp</dimen>\n<dimen  name="ym_subtitle_size">14sp</dimen>\n<dimen  name="ym_caption_size">12sp</dimen>\n<dimen name="ym_body_size">14dp</dimen>\n<dimen name="ym_progress_bar_size">36dp</dimen>\n<dimen name="ym_in_view_progress_bar_size">24dp</dimen>\n')),Object(o.b)("h2",{id:"informational"},"Informational"),Object(o.b)("h3",{id:"versions"},"Versions"),Object(o.b)("p",null,"YellowInbox SDK usage following minimumSdkVersion targetSdkVersion."),Object(o.b)("p",null,"minSdkVersion 21\ntargetSdkVersion 30"),Object(o.b)("h3",{id:"dependencies"},"Dependencies"),Object(o.b)("p",null,"YellowInbox SDK usage following dependencies."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"dependencies {\n\n    implementation \"org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version\"\n    implementation 'androidx.core:core-ktx:1.5.0'\n    implementation 'androidx.appcompat:appcompat:1.3.0'\n    implementation 'com.google.android.material:material:1.3.0'\n    implementation 'androidx.legacy:legacy-support-v4:1.0.0'\n    implementation 'androidx.gridlayout:gridlayout:1.0.0'\n\n    implementation 'com.squareup.retrofit2:retrofit:2.9.0'\n    implementation 'com.squareup.retrofit2:converter-gson:2.9.0'\n    implementation 'com.squareup.okhttp3:logging-interceptor:4.7.2'\n\n    implementation 'com.google.dagger:dagger:2.27'\n    implementation 'androidx.constraintlayout:constraintlayout:2.0.4'\n    kapt 'com.google.dagger:dagger-compiler:2.27'\n\n    implementation 'androidx.lifecycle:lifecycle-livedata-ktx:2.3.1'\n    implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.3.1'\n    implementation 'androidx.lifecycle:lifecycle-runtime-ktx:2.3.1'\n    implementation 'androidx.lifecycle:lifecycle-common-java8:2.3.1'\n\n    // Glide\n    implementation 'com.github.bumptech.glide:glide:4.12.0'\n    annotationProcessor 'com.github.bumptech.glide:compiler:4.12.0'\n\n    //Smack\n    implementation \"org.igniterealtime.smack:smack-android-extensions:4.2.0\"\n    implementation \"org.igniterealtime.smack:smack-tcp:4.2.0\"\n\n    //Event bus\n    implementation 'org.greenrobot:eventbus:3.2.0'\n\n    testImplementation 'junit:junit:4.+'\n    androidTestImplementation 'androidx.test.ext:junit:1.1.2'\n    androidTestImplementation 'androidx.test.espresso:espresso-core:3.3.0'\n}\n")),Object(o.b)("h3",{id:"permissions"},"Permissions"),Object(o.b)("p",null,"YellowInbox SDK usage following permissions."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />\n<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />\n')))}b.isMDXComponent=!0},435:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,u=b["".concat(l,".").concat(p)]||b[p]||m[p]||o;return n?i.a.createElement(u,r(r({ref:t},s),{},{components:n})):i.a.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);