"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[7317],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,a[1]=r;for(var c=2;c<l;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var i=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],r={title:"Inbox SDK for iOS",sidebar_label:"iOS"},s=void 0,c={unversionedId:"platform_concepts/mobile/inbox/ios",id:"platform_concepts/mobile/inbox/ios",title:"Inbox SDK for iOS",description:"SDK integration",source:"@site/docs/platform_concepts/mobile/inbox/ios.md",sourceDirName:"platform_concepts/mobile/inbox",slug:"/platform_concepts/mobile/inbox/ios",permalink:"/docs/platform_concepts/mobile/inbox/ios",draft:!1,tags:[],version:"current",frontMatter:{title:"Inbox SDK for iOS",sidebar_label:"iOS"},sidebar:"platform_concepts",previous:{title:"Android",permalink:"/docs/platform_concepts/mobile/inbox/android"},next:{title:"Cordova",permalink:"/docs/platform_concepts/mobile/inbox/cordova"}},p={},u=[{value:"SDK integration",id:"sdk-integration",level:2},{value:"Initialization",id:"initialization",level:2},{value:"apiKey",id:"apikey",level:4},{value:"userId",id:"userid",level:4},{value:"botId",id:"botid",level:4},{value:"Example",id:"example",level:4},{value:"Overview",id:"overview",level:2},{value:"Overview Viewcontroller",id:"overview-viewcontroller",level:3},{value:"My Chat",id:"my-chat",level:2},{value:"My Chat Viewcontroller",id:"my-chat-viewcontroller",level:3},{value:"Notifications",id:"notifications",level:2},{value:"Background Notification",id:"background-notification",level:3},{value:"Local Notification",id:"local-notification",level:3},{value:"Video call Notification",id:"video-call-notification",level:3},{value:"Agent Status",id:"agent-status",level:2},{value:"Get All Agent Statuses",id:"get-all-agent-statuses",level:3},{value:"Get Agent Status",id:"get-agent-status",level:3},{value:"Set Agent Status",id:"set-agent-status",level:3},{value:"Logout",id:"logout",level:2},{value:"Informational",id:"informational",level:2},{value:"Versions",id:"versions",level:3},{value:"Permissions",id:"permissions",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"sdk-integration"},"SDK integration"),(0,l.kt)("p",null,"To add SDK into your project add the following pod into your pod file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"}," pod 'YellowInbox'\n")),(0,l.kt)("h2",{id:"initialization"},"Initialization"),(0,l.kt)("p",null,"The SDK can be initialised by passing API_KEY, USER_ID and BOT_ID to the initialize method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"}," @objc public class func initialize(with \n     botId: String, \n     apiKey: String, \n     userId: String,\n     completion: ((_ isSuccess: Bool) -> Void)? = nil\n)\n")),(0,l.kt)("h4",{id:"apikey"},"apiKey"),(0,l.kt)("p",null,"apiKey will be provided by yellow.ai, It is clients responsibility to keep the API_KEY safe.\nThis is a mandatory parameter."),(0,l.kt)("h4",{id:"userid"},"userId"),(0,l.kt)("p",null,"userId will be the id registered/provided to yellow.ai by the client to authenticate their employee. This is a mandatory parameter."),(0,l.kt)("h4",{id:"botid"},"botId"),(0,l.kt)("p",null,"botId will be provided by yellow.ai.\nThis is a mandatory parameter."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'import YellowInbox\n \nclass ViewController: UIViewController {\n \n  override func viewDidLoad() {\n    super.viewDidLoad()\n \n    YellowInbox.initialize(with: <#"bot id"#>, \n        apiKey: <#"API key"#>, \n        userId: <#"USER_ID"#>) { success in\n            if success {  print("SDK initialized successfully") }\n            else {  print("Error while initializing the SDK")  } \n      }\n   }\n}\n')),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Overview view is provided as a viewcontroller."),(0,l.kt)("h3",{id:"overview-viewcontroller"},"Overview Viewcontroller"),(0,l.kt)("p",null,"If clients want to use the Overview viewcontroller in their application, they can call the following method to get the viewcontroller object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let viewController = YellowInbox.makeOverviewViewController()\n")),(0,l.kt)("p",null,"client can push, present and embed this viewcontroller as they do for any other viewcontrollers."),(0,l.kt)("h2",{id:"my-chat"},"My Chat"),(0,l.kt)("p",null,"Chats view is provided as a viewcontroller."),(0,l.kt)("h3",{id:"my-chat-viewcontroller"},"My Chat Viewcontroller"),(0,l.kt)("p",null,"If clients want to use the MyChat viewcontroller in their application, they can call the following method to get the viewcontroller object."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let viewController = YellowInbox.makeMyChatsViewController()\n")),(0,l.kt)("p",null,"client can push, present and embed this viewcontroller as they do for any other viewcontrollers."),(0,l.kt)("h2",{id:"notifications"},"Notifications"),(0,l.kt)("h3",{id:"background-notification"},"Background Notification"),(0,l.kt)("p",null,"To receive firebase notification clients need to send Firebase device token to SDK. To do so the following method can be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'YellowInbox.setNotificationToken(<#"device token"#>)\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Make sure to call this function when the device token is changed.")),(0,l.kt)("p",null,"Clients will receive firebase notification if the app is not running in foreground or in background, or if Ticket Create, User Message or Agent is added as collaborator actions happening on a ticket."),(0,l.kt)("p",null,"Clients need not to listen to these notifications when the app is running, SDK will take care of such events."),(0,l.kt)("p",null,"Clients need to call following method if they want to take user to appropriate view once user clicks on notification delivered in system tray and sent by yellow.ai"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let viewController = YellowInbox.makeConversationView(ticketId: <#"ticket id"#>)\n')),(0,l.kt)("p",null,"client can push and present this viewcontroller as they do for any other viewcontrollers."),(0,l.kt)("h3",{id:"local-notification"},"Local Notification"),(0,l.kt)("p",null,"Clients will receive local notification that will be triggered by the SDK based on the events received over XMPP.\nIn case a client wants to override the normal behaviour of notification or want to update title/body, they can do so by they can do so by delegate methods."),(0,l.kt)("p",null,"Clients need to do the following step."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"YellowInbox.delegate = self\n")),(0,l.kt)("p",null,"Following are the delegates methods:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"@objc func willShowCreateTicketLocalNotification(\n    title: String?, \n    body: String?) -> YellowLocalNotification?\n \n@objc func willShowUpdateTicketLocalNotification(\n    title: String?, \n    body: String?) -> YellowLocalNotification?\n")),(0,l.kt)("p",null,"Example "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'class ViewController: UIViewController, YellowInboxDelegate {\n    func willShowCreateTicketLocalNotification(\n        title: String?,\n        body: String?) -> YellowLocalNotification? {\n          return YellowLocalNotification(title: <#"title"#>, body: <#"body"#>)\n    }\n    \n    func willShowUpdateTicketLocalNotification(\n        title: String?,\n        body: String?) -> YellowLocalNotification? {\n          return YellowLocalNotification(title: <#"title"#>, body: <#"body"#>)\n    }\n}  \n')),(0,l.kt)("p",null,"Clients will get callbacks on these methods for creating and updating tickets notification. Clients can return a YellowLocalNotification instance with a modified title and body. if client dont wont to update the content the can return nil."),(0,l.kt)("h3",{id:"video-call-notification"},"Video call Notification"),(0,l.kt)("p",null,"If a client is receiving a video call notification while the app is in background, Simply tapping on notification and check for the notification type in didReceive response function."),(0,l.kt)("p",null,"In case the app is running and in the foreground, client need to check for notification type into will present method."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Client need to set the Firebase token in case device token changes by calling")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'    YellowInbox.setNotificationToken("DEVICE_TOKEN")\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"In didReceive response function client need to check if notification type is video call. client can open received url on webview or any default webapp.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let notificationType: YellowInbox.Notification? = YellowInbox.notificationType(response.notification)\nswitch notificationType {\n  case let .videoCall(url, ticketId):\n      // Use this url to open in web browser        \n  default: break;\n}\n")),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"class AppDelegate: UIResponder, UIApplicationDelegate, UNUserNotificationCenterDelegate,   MessagingDelegate { \n    func userNotificationCenter(_ center: UNUserNotificationCenter, willPresent notification: UNNotification, withCompletionHandler completionHandler: @escaping (UNNotificationPresentationOptions) -> Void) {\n        let notificationType: YellowInbox.Notification? = YellowInbox.notificationType(notification)\n            if case .videoCall(let url, let ticketId) = notificationType {\n                SceneDelegate.shared?.showVideoCallAlert(for: url, ticketId: ticketId)          \n            }\n        completionHandler([.alert, .badge, .sound])\n    }\n \n    func userNotificationCenter(_ center: UNUserNotificationCenter didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {\n        let notificationType: YellowInbox.Notification? = YellowInbox.notificationType(response.notification)\n            if case .videoCall(let url, let ticketId) = notificationType {\n                SceneDelegate.shared?.showVideoCallAlert(for: url, ticketId: ticketId)          \n            }\n        completionHandler()\n    }\n}\n")),(0,l.kt)("p",null,"A call declined from notification can be joined from the Chat view by tapping on the call icon"),(0,l.kt)("h2",{id:"agent-status"},"Agent Status"),(0,l.kt)("h3",{id:"get-all-agent-statuses"},"Get All Agent Statuses"),(0,l.kt)("p",null,"To get all possible statuses of logged in User against the bot id (Used for initialising the SDK), client can call the following method. This can be used to show all the possible status when Agent want to change the status."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public class func getAllAgentStatus(\n    onSuccess: @escaping ([YellowAgentStatus]?) -> Void, \n    onFailure: @escaping (Error) -> Void)\n")),(0,l.kt)("h3",{id:"get-agent-status"},"Get Agent Status"),(0,l.kt)("p",null,"To get availability status of logged in User against the bot id (Used for initialising the SDK), client can call the following method"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public class func getAgentStatus(\n    onSuccess: @escaping (YellowAgentStatus?) -> Void, \n    onFailure: @escaping (Error) -> Void)\n")),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"YellowInbox.getAgentStatus(\n    onSuccess: { agentStatus in let status = agentStatus }, \n    onFailure: { error in print(error) }\n)\n")),(0,l.kt)("h3",{id:"set-agent-status"},"Set Agent Status"),(0,l.kt)("p",null,"To set the status of logged in user against the bot id (Used for initialising the SDK), the client can call the following method and observe on it. Client need to pass the YellowAgentStatus object received from making ",(0,l.kt)("inlineCode",{parentName:"p"},"YellowInbox.getAllAgentStatus()")," call"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public class func setAgentStatus(\n    _ status: YellowAgentStatus, \n    onSuccess: @escaping (YellowAgentStatus) -> Void, \n    onFailure: @escaping (Error) -> Void)\n")),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'YellowInbox.setAgentStatus(\n    status,\n    onSuccess: { _ in print("Status changed") },\n    onFailure: { error in print(error) }\n)\n')),(0,l.kt)("h2",{id:"logout"},"Logout"),(0,l.kt)("p",null,"By calling logout, all the services and notifications will be terminated. You can call this function when user logs out of the app"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"@objc public class func logout(completion: @escaping ((Bool, Error?) -> Void))\n")),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'YellowInbox.logout { isSuccess, error  in\n    if isSuccess { print("Logout successfully") }\n    else if let error = error { print(error) }\n}\n')),(0,l.kt)("h2",{id:"informational"},"Informational"),(0,l.kt)("h3",{id:"versions"},"Versions"),(0,l.kt)("p",null,"YellowInbox SDK requires iOS 13.0 and above"),(0,l.kt)("h3",{id:"permissions"},"Permissions"),(0,l.kt)("p",null,"YellowInbox SDK usage following permissions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<key>NSPhotoLibraryUsageDescription</key>\n<string>Your description</string>\n<key>NSCameraUsageDescription</key>\n<string>Your description</string>\n")),(0,l.kt)("p",null,"Clients need to add this permissions to their app\u2019s Info.plist."))}f.isMDXComponent=!0}}]);