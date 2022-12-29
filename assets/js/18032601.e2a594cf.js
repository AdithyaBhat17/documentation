"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[4189],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Chat widget payload",sidebar_label:"Chat widget payload"},l=void 0,c={unversionedId:"platform_concepts/channelConfiguration/chat-widget-payload",id:"platform_concepts/channelConfiguration/chat-widget-payload",title:"Chat widget payload",description:"A payload is used to pass the website's information to the bot.",source:"@site/docs/platform_concepts/channelConfiguration/chat-widget-payload.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/chat-widget-payload",permalink:"/docs/platform_concepts/channelConfiguration/chat-widget-payload",draft:!1,tags:[],version:"current",frontMatter:{title:"Chat widget payload",sidebar_label:"Chat widget payload"},sidebar:"platform_concepts",previous:{title:"Set up Chat widget",permalink:"/docs/platform_concepts/channelConfiguration/web-widget"},next:{title:"User authentication",permalink:"/docs/platform_concepts/channelConfiguration/user-authentication"}},p={},u=[{value:'<a name="payload"></a> 1. Pass values from the web client to the bot',id:"-1-pass-values-from-the-web-client-to-the-bot",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A payload is used to pass the website's information to the bot.  "),(0,r.kt)("p",null,"Consider that you have a requirement to pass the data of the user who is using the chat widget. In such cases, you can use payload to pass data from your website to the bot. For example, payload passes the data such as account IDs, customer identifiers like names, email addresses, and phone numbers, or other metadata associated with a user from your website to the bot. "),(0,r.kt)("p",null,"In the payload, you need to create a string that is a key - value pair consisting of data and its value (in lower case). The data must have string-to-string key-value pairs. Payload is passed in JSON format. An error is displayed when data other than key-value is passed in the JSON code. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"payload security")),(0,r.kt)("p",{parentName:"admonition"},"Payload is securely passed in HTTPS post request to secure the information passed in it.")),(0,r.kt)("h2",{id:"-1-pass-values-from-the-web-client-to-the-bot"},(0,r.kt)("a",{name:"payload"})," 1. Pass values from the web client to the bot"),(0,r.kt)("p",null,"To pass values from your parent interface to the bot, you can make use of ",(0,r.kt)("strong",{parentName:"p"},"payload data"),", which needs to be configured in the bot script."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample bot script:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<script type="text/javascript"> \n  window.ymConfig = {\n   "bot":"x1655954196162",\n  "host":"https://cloud.yellow.ai"};\n  (function () {var w=window,ic=w.YellowMessenger;\n  if("function"===typeof ic)\n     ic("reattach_activator"),ic("update",ymConfig);\n  else {\n     var d=document,i=function(){i.c(arguments)\n  };\n\n  function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();\n<\/script>\n\n')),(0,r.kt)("p",null,"Add the payload data in the following bot script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<script type="text/javascript">\n    window.ymConfig = \n    {\n      "bot":"ENTER_YOUR_BOT_ID_HERE",\n      "host":"https://cloud.yellow.ai",\n      \n      "payload":\n      {\n          "name": name,             // Add payload data here\n          "email": email           // The values can be dynamic\n      },\n      \n      "partiallyOpen":false,"alignLeft":"right"\n    };\n    .\n    .\n    .        //Rest of the chatbot script\n    .\n<\/script>\n')),(0,r.kt)("p",null,"The bot is initilized when the page loads. Once the boat loads, you can assign these values to variables using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#variables"},"Variables node"),"."),(0,r.kt)("p",null,"Variable format is ",(0,r.kt)("inlineCode",{parentName:"p"},"{{{profile.payload.Your_Field_Name}}")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/3Np2ozp.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"if(userIsAuthenticated) { \n\n// replace this with your own auth logic.\n    window.YellowMessengerPlugin.init({\n        payload: {\n            email: 'ted.lasso@yellow.ai',\n            member_id: '1231basd' // you can pass any info you want to be associated with the user based on your use case here. Note that this can be read by the bot using the {{profile.payload.member_id}} variable.\n        }\n    });\n    window.YellowMessengerPlugin.show(); // display the bot icon\n}\n")))}m.isMDXComponent=!0}}]);