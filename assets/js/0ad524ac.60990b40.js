"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[51383],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return h}});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=i.createContext({}),p=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(h,r(r({ref:e},c),{},{components:n})):i.createElement(h,r({ref:e},c))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[m]="string"==typeof t?t:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84141:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"Domain whitelisting for Chat widget",sidebar_label:"Domain whitelisting for Chat widget"},s=void 0,p={unversionedId:"platform_concepts/channelConfiguration/domain-whitelisting",id:"platform_concepts/channelConfiguration/domain-whitelisting",title:"Domain whitelisting for Chat widget",description:"Domain whitelisting allows you to secure your chatbot and ensures that the chatbot can be accessed only in authorized domains. It prevents unauthorized users from copying the script and embedding the bot on their websites or mobile applications.",source:"@site/docs/platform_concepts/channelConfiguration/domain-whitelisting.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/domain-whitelisting",permalink:"/docs/platform_concepts/channelConfiguration/domain-whitelisting",draft:!1,tags:[],version:"current",frontMatter:{title:"Domain whitelisting for Chat widget",sidebar_label:"Domain whitelisting for Chat widget"},sidebar:"platform_concepts",previous:{title:"Chat separator",permalink:"/docs/platform_concepts/channelConfiguration/chat-separator"},next:{title:"Chat Widget Localization",permalink:"/docs/platform_concepts/channelConfiguration/chat-widget-localization"}},c={},m=[{value:"Whitelist domain(s) to deploy chat widget",id:"whitelist-domains-to-deploy-chat-widget",level:2},{value:"Delete whitelisted domains",id:"delete-whitelisted-domains",level:2}],u={toc:m};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Domain whitelisting allows you to secure your chatbot and ensures that the chatbot can be accessed only in authorized domains. It prevents unauthorized users from copying the script and embedding the bot on their websites or mobile applications. "),(0,o.kt)("p",null,"Yellow.ai allows businesses to whitelist a list of domains to host their chatbot on a particular website. Let's say you want a list of domains where you can load the bots so that other website users cannot copy the script and use the bot on their websites. In such a case, you can whitelist the respective domain."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"When a domain (example: yellow.ai) is whitelisted, all its subdomains (example: cloud.yellow.ai, live.yellow.ai) will also be included by default."),(0,o.kt)("li",{parentName:"ul"},"By default, Yellow.ai and Yellow Messenger are whitelisted to allow you to preview your chatbot."))),(0,o.kt)("h2",{id:"whitelist-domains-to-deploy-chat-widget"},"Whitelist domain(s) to deploy chat widget"),(0,o.kt)("p",null,"To whitelist specific domains for the chat widget, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the module switcher, click ",(0,o.kt)("strong",{parentName:"p"},"Channels"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/UuFZ2eR.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on ",(0,o.kt)("strong",{parentName:"p"},"Chat widget"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/1KzP77W.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the\xa0",(0,o.kt)("strong",{parentName:"p"},"Whitelist Domain")," tab and enter the domain that you want to whitelist, then click ",(0,o.kt)("strong",{parentName:"p"},"+Add"),". You can also add multiple domains based on your requirements."),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/WjQ8LtU.png",alt:null}),"\t ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The domain will be successfully whitelisted."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/uJvQ7o1.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To test your chatbot locally, you need to enable ",(0,o.kt)("strong",{parentName:"p"},"Allow localhost"),". Note that, you need to disable it after deployment."),(0,o.kt)("img",{src:"https://i.imgur.com/K57Qa7e.png",alt:"drawing",width:"80%"}))),(0,o.kt)("h2",{id:"delete-whitelisted-domains"},"Delete whitelisted domains"),(0,o.kt)("p",null,"To delete whitelisted domains, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you wish to delete the added domain, click ",(0,o.kt)("strong",{parentName:"p"},"Delete")," icon."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/TIMG7Sl.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A pop-up is displayed with a confirmation message ",(0,o.kt)("strong",{parentName:"p"},'Are you sure you want to delete "app.yellowmessenger.com"?'),", click ",(0,o.kt)("strong",{parentName:"p"},"Delete"),"."),(0,o.kt)("img",{src:"https://i.imgur.com/xA2D6Po.png",alt:"drawing",width:"60%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The domain will be successfully deleted."))))}d.isMDXComponent=!0}}]);