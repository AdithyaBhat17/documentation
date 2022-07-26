(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(394)),l=["components"],c={title:"Widget Functions and Events",sidebar_label:"Widget Functions and Events"},i={unversionedId:"platform_concepts/channelConfiguration/web",id:"platform_concepts/channelConfiguration/web",isDocsHomePage:!1,title:"Widget Functions and Events",description:"Bot script",source:"@site/docs/platform_concepts/channelConfiguration/web.md",slug:"/platform_concepts/channelConfiguration/web",permalink:"/docs/platform_concepts/channelConfiguration/web",version:"current",sidebar_label:"Widget Functions and Events",sidebar:"platform_concepts",previous:{title:"Setup Web Widget",permalink:"/docs/platform_concepts/channelConfiguration/web-widget"},next:{title:"How to setup a WhatsApp chatbot on Yellow Messenger?",permalink:"/docs/platform_concepts/channelConfiguration/whatsapp-configuration"}},b=[{value:"Bot script",id:"bot-script",children:[]},{value:"How to pass values from the web client to the bot",id:"how-to-pass-values-from-the-web-client-to-the-bot",children:[]},{value:"Custom Function",id:"custom-function",children:[]},{value:"Events",id:"events",children:[]}],p={toc:b};function s(e){var t=e.components,n=Object(o.a)(e,l);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"bot-script"},"Bot script"),Object(r.b)("p",null,"All of our bots on follow the same web widget script. To know more on how to configure the colors and font of your bot, you can check out our docs on web ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget"},"web widget styling")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Paste your script at the end of the ",Object(r.b)("inlineCode",{parentName:"p"},"</body>")," tag")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Sample script")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'<script type="text/javascript">\n  window.ymConfig = {\n   "bot":"Your botID",\n  "host":"https://cloud.yellow.ai"};\n  (function () {var w=window,ic=w.YellowMessenger;\n  if("function"===typeof ic)\n     ic("reattach_activator"),ic("update",ymConfig);\n  else {\n     var d=document,i=function(){i.c(arguments)\n  };\n\n  function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();\n<\/script>\n\n')),Object(r.b)("p",null,"Here, Host depends on the region in which your bot is deployed in"),Object(r.b)("h2",{id:"how-to-pass-values-from-the-web-client-to-the-bot"},"How to pass values from the web client to the bot"),Object(r.b)("p",null,"To pass values from your parent interface to the bot, you can make use of our ",Object(r.b)("strong",{parentName:"p"},"payload data")," which needs to be configured in the bot script itself."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'<script type="text/javascript">\n    window.ymConfig =\n    {\n      "bot":"ENTER_YOUR_BOT_ID_HERE",\n      "host":"https://cloud.yellowmessenger.com",\n\n      "payload":\n      {\n          "name": name,             // Add payload data here\n          "email": email           // The values can be dynamic\n      },\n\n      "partiallyOpen":false,"alignLeft":"right"\n    };\n    .\n    .\n    .        //Rest of the chatbot script\n    .\n<\/script>\n')),Object(r.b)("p",null,"Our bot undergoes initialization on page load. Once the boat loads in, we can assign these values to variables using our ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/#use-variables-in-a-node"},"Variables node"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Variable format is {{profile.payload.Your_Field_Name}}")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/3Np2ozp.png",alt:null})),Object(r.b)("h2",{id:"custom-function"},"Custom Function"),Object(r.b)("p",null,"You can make use of these out of the box functions to play around with our bot based on your specific use-case."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Function"),Object(r.b)("th",{parentName:"tr",align:null},"Functionality"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"window.YellowMessengerPlugin.hide()"),Object(r.b)("td",{parentName:"tr",align:null},"Hides bot icon")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"window.YellowMessengerPlugin.show()"),Object(r.b)("td",{parentName:"tr",align:null},"Unhides/Shows bot icon")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"window.YellowMessengerPlugin.openBot()"),Object(r.b)("td",{parentName:"tr",align:null},"Opens chat widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"window.YellowMessengerPlugin.closeBot()"),Object(r.b)("td",{parentName:"tr",align:null},"Closes chat widget")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"window.YellowMessengerPlugin.toggleChat()"),Object(r.b)("td",{parentName:"tr",align:null},"Toggles chat widget to opposite state i.e., Open chat widget if already closed. Closes chat widget if already open.")))),Object(r.b)("h2",{id:"events"},"Events"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"To send events to the bot")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'window.YellowMessengerPlugin.sendEvent(eventName, true)\nconst eventName = {\n    code: "Event name",\n    data: Event Data\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"To listen to events thrown by the bot")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'<script type="text/javascript">\n         window.addEventListener(\'message\', function(eventData) {\n            console.log(eventData,"eventDataeventData");\n         })\n<\/script>\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"List of events we track")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Event"),Object(r.b)("th",{parentName:"tr",align:null},"Functionality"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ym-bot-opened"),Object(r.b)("td",{parentName:"tr",align:null},"Bot opened")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ym-bot-closed"),Object(r.b)("td",{parentName:"tr",align:null},"Bot closed")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ym_event_quick_reply"),Object(r.b)("td",{parentName:"tr",align:null},"Quick Reply clicked")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ym_event_image_clicked"),Object(r.b)("td",{parentName:"tr",align:null},"Image opened in preview")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ym_event_card_action"),Object(r.b)("td",{parentName:"tr",align:null},"Card action button clicked")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ym-bot-loaded-on-page-reload"),Object(r.b)("td",{parentName:"tr",align:null},"When the refresh context is false, the bot will receive events as soon as the page reloads")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ym_home"),Object(r.b)("td",{parentName:"tr",align:null},"Home button clicked")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"page-url-based-trigger"),Object(r.b)("td",{parentName:"tr",align:null},"Whenever a notification is sent in the bot (for electron apps)")))),Object(r.b)("p",null,"If you've integrated the bot with Android, refer the docs ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/android/"},"here"),"."),Object(r.b)("p",null,"If you've integrated the bot with iOS, refer the docs ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/ios/"},"here"),"."))}s.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||r;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<r;b++)l[b]=n[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);