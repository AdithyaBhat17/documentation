(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{323:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),i=(n(0),n(456)),r=["components"],l={title:"Mobile SDK FAQs",sidebar_label:"Mobile SDK FAQs"},c={unversionedId:"platform_concepts/mobile/chatbot/mobile-sdk-faq",id:"platform_concepts/mobile/chatbot/mobile-sdk-faq",isDocsHomePage:!1,title:"Mobile SDK FAQs",description:"1. How to change the colour of the bot's close button?",source:"@site/docs/platform_concepts/mobile/chatbot/mobile-sdk-faq.md",slug:"/platform_concepts/mobile/chatbot/mobile-sdk-faq",permalink:"/docs/platform_concepts/mobile/chatbot/mobile-sdk-faq",version:"current",sidebar_label:"Mobile SDK FAQs",sidebar:"platform_concepts",previous:{title:"Chatbot SDK for xamarin",permalink:"/docs/platform_concepts/mobile/chatbot/xamarin"}},s=[],p={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,r);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1. How to change the colour of the bot's close button?")),Object(i.b)("p",null,"You can change the colour of the close button in ym config. To know more about Close bot, click ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android#close-bot"},"here"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"2. How to change the colour of the status bar?")),Object(i.b)("p",null,"You can change the colour of the status bar in ym config. To know more about Status bar, click ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android#use-lite-version"},"here"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"3. How to send bot events to the user?")),Object(i.b)("p",null,"Use the following code snippet to send an event from bot code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'app.sendEvent({\n   code: \'sendIOSEvent\',\n   data: {\n      code: `user_logged_out`,\n      data: JSON.stringify({"actionType": "login"})\n   }\n})\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"4. Is there a documentation on Mobile SDK?")),Object(i.b)("p",null,"Refer to the following documentation links for mobile SDK documentation:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios"},"IOS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/android"},"Android")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/cordova"},"Cordova")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/react-native"},"React Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/flutter"},"Flutter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/xamarin"},"Xamarian"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"5. How to enable history?")),Object(i.b)("p",null,"To enable history, follow these steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Ensure that mobile SDKs are passing the ymAuthenticationToken in the config before presenting the bot."),Object(i.b)("li",{parentName:"ol"},"Copy and paste the following code in the main function of the bot code:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"if (app.data.event && app.data.event.code === 'authenticate') {\n    return app.sendEvent({\n        code: \"verifiedUser\",\n        data: app.data.event.payload\n    });\n}\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Ensure the ",Object(i.b)("strong",{parentName:"p"},"Reset Context for every load"),' checkbox is unchecked in the dashboard settings for "app.yellowmessenger.com" or "app.yellow.ai".'),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/VVSmy15.png",alt:null})))),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Ensure ",Object(i.b)("strong",{parentName:"p"},"Show history of the conersation")," is enabled for ",Object(i.b)("a",{parentName:"p",href:"https://cloud.yellow.ai"},"cloud.yellow.ai"),"."),Object(i.b)("img",{src:"https://i.imgur.com/PoHJ0Yh.png)",alt:"drawing",width:"90%"}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"6. The push notifications are not working as expected. How to resolve this issue?")),Object(i.b)("p",null,"There are two ways to debug push notifications:\xa0"),Object(i.b)("h4",{id:"1-verify-in-demo-app"},"1. Verify in demo app"),Object(i.b)("p",null,"You must download our demo app for iOS or Android and see if they are able to receive push notifications for these apps. Here are links to demo apps for ",Object(i.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/YMChatbot-iOS-DemoApp"},"iOS")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/YmChatBot-Android-DemoApp"},"android"),".\nIf notifications are working as expected on a demo app, then  you have not configured the app properly to receive push notifications. You must refer to the code of the demo app to configure the push notifications.\nIf notifications are not displaying in the demo app, then you must follow these steps: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ensure that you have enabled push notifications in the Firebase console. "),Object(i.b)("li",{parentName:"ul"},"Ensure that you have shared the service key and it is properly configured. "),Object(i.b)("li",{parentName:"ul"},"Ensure the device token is being passed from the SDK. A lot of times, an empty string gets passed from the SDK.")),Object(i.b)("h4",{id:"2-verify-using-firebase-test-notifications"},"2. Verify using firebase test notifications"),Object(i.b)("p",null,"You must see if they are able to receive notifications in their own app from the Firebase notification testing system. This will ensure notifications are properly configured on the app side. ",Object(i.b)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging/ios/first-message"},"https://firebase.google.com/docs/cloud-messaging/ios/first-message")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"7. How to map Firebase Server JSON to a Bot ID?")),Object(i.b)("p",null,"Copy the following code and import to Postman. Enter the service key in the JSON body, replace your BotId in the request, and add an access token in the header against x-auth-token."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"curl --location --request POST 'https://cloud.yellow.ai/api/data/vault/saveBotConfig?bot=x1640006213013' \\\n--header 'x-auth-token: access-token-of-bot-admin ' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"notification\": {\n        \"firebaseConfig\": {\n            \"serviceAccount\": {}// Your Firebase Server json\n        }\n    }\n }\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"8. In Android, can we add a left-to-right view transition/animation or any animation?")),Object(i.b)("p",null,"Yes, it is possible to add left-to-right view transition/animation. You need to override the activity style by adding the following lines to the ",Object(i.b)("strong",{parentName:"p"},"themes.xml")," or ",Object(i.b)("strong",{parentName:"p"},"styles.xml")," files."),Object(i.b)("p",null,"This is an example of adding slide in left and slide out right transition. You can add your own animation based on your business needs."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'<style name="YmAppTheme.NoActionBar">\n<item name="windowActionBar">false</item>\n<item name="windowNoTitle">true</item>\n<item name="snackbarTextViewStyle">@style/YmSnackbarText</item>\n<item name="android:windowAnimationStyle">@style/WindowAnimationStyle</item>\n</style>\n\n\n<style name="WindowAnimationStyle">\n\n\xa0\xa0\xa0\xa0 <item name="android:activityOpenEnterAnimation">@android:anim/slide_in_left</item>\n\n\xa0\xa0\xa0\xa0 <item name="android:activityOpenExitAnimation">@android:anim/slide_out_right</item>\n\n\xa0\xa0\xa0\xa0 <item name="android:activityCloseEnterAnimation">@android:anim/slide_in_left</item>\n\n\xa0\xa0\xa0\xa0 <item name="android:activityCloseExitAnimation">@android:anim/slide_out_right</item>\n\n\xa0\xa0\xa0\xa0 <item name="android:windowEnterAnimation">@android:anim/slide_in_left</item>\n\n\xa0\xa0\xa0\xa0 <item name="android:windowExitAnimation">@android:anim/slide_out_right</item>\n\n</style>\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"9. How to access the payload in v2 chatbots built on ",Object(i.b)("a",{parentName:"strong",href:"https://cloud.yellow.ai"},"cloud.yellow.ai")),"?"),Object(i.b)("p",null,"When payload is sent from mobile SDK, it is always a string of JSON. Ensure that you parse it before accessing the values.\nFollow the steps below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a function node and code to parse the payload.")),Object(i.b)("p",null,"The following is a sample code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'return new Promise(resolve => {\n          let payload = data.profile.payload\n          if (typeof (payload) == "string") {\n            payload = JSON.parse(payload)\n          }\n          resolve(payload)\n        });\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Save the resolved value from the function node to a variable of type ",Object(i.b)("inlineCode",{parentName:"li"},"Object")," (for example, ",Object(i.b)("inlineCode",{parentName:"li"},"payload")," )"),Object(i.b)("li",{parentName:"ul"},"Then, you can access the values of the variable ( For example, ",Object(i.b)("inlineCode",{parentName:"li"},"{{{variables.payload.name}}}")," )")),Object(i.b)("img",{src:"https://i.imgur.com/3fmiI63.png)",alt:"drawing",width:"60%"}))}b.isMDXComponent=!0},456:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,u=b["".concat(r,".").concat(d)]||b[d]||m[d]||i;return n?a.a.createElement(u,l(l({ref:t},s),{},{components:n})):a.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);