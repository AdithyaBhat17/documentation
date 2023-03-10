"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[4331],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Chat widget events",sidebar_label:"Chat widget events"},s=void 0,c={unversionedId:"platform_concepts/channelConfiguration/event-widget",id:"platform_concepts/channelConfiguration/event-widget",title:"Chat widget events",description:"Yellow.ai\xa0offers a wide range of options to customize features for its web widget. However, sometimes, our clients need even more flexibility in crafting the widget\u2019s design, and functionality as per their use cases.",source:"@site/docs/platform_concepts/channelConfiguration/event-widget.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/event-widget",permalink:"/docs/platform_concepts/channelConfiguration/event-widget",draft:!1,tags:[],version:"current",frontMatter:{title:"Chat widget events",sidebar_label:"Chat widget events"},sidebar:"platform_concepts",previous:{title:"Chat widget functions",permalink:"/docs/platform_concepts/channelConfiguration/function-widgets"},next:{title:"Chrome extension",permalink:"/docs/platform_concepts/channelConfiguration/chrome-extension"}},u={},p=[{value:"1. Send event to bot",id:"1-send-event-to-bot",level:2},{value:"2. Listen to a bot event",id:"2-listen-to-a-bot-event",level:2},{value:"2.1 Available events",id:"21-available-events",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Yellow.ai\xa0offers a wide range of options to customize features for its web widget. However, sometimes, our clients need even more flexibility in crafting the widget\u2019s design, and functionality as per their use cases. "),(0,o.kt)("p",null,"You can use certain tricks to customize your web widget to suit your needs. This section helps you with different ways to customize your chat widget\u2019s look and feel,  functionality, and capture bot events."),(0,o.kt)("p",null,"When your bot is operational, it generates various events. You can use them to capture those occurrences and trigger a flow or automation workflow."),(0,o.kt)("h2",{id:"1-send-event-to-bot"},"1. Send event to bot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// find the yellow.ai widget iframe\nconst ymIframe = document.getElementById('ymIframe');\n// event_name should be a valid name supported by the widget.\nconst message = JSON.stringify({code: 'event_name', data: {...}});\n// send a cross-site message using \n// window.postMessage(message, targetOrigin, transfer) API.\nymIframe.contentWindow?.postMessage(message, window.location.origin);\n")),(0,o.kt)("h2",{id:"2-listen-to-a-bot-event"},"2. Listen to a bot event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'<script type="text/javascript">\n         window.addEventListener(\'message\', function(eventData) {\n                            // make sure to verify origin to prevent XSS attacks.\n                            // https://blog.yeswehack.com/yeswerhackers/introduction-postmessage-vulnerabilities/\n                            // if (event.origin !== <your_origin>) throw new Error(\'Message not allowed");\n            console.log(eventData,"eventData");\n         })\n<\/script>\n')),(0,o.kt)("h3",{id:"21-available-events"},"2.1 Available events"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Event"),(0,o.kt)("th",{parentName:"tr",align:null},"Functionality"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ym-bot-opened"),(0,o.kt)("td",{parentName:"tr",align:null},"Bot opened")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ym-bot-closed"),(0,o.kt)("td",{parentName:"tr",align:null},"Bot closed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ym_event_quick_reply"),(0,o.kt)("td",{parentName:"tr",align:null},"Quick Reply clicked")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ym_event_image_clicked"),(0,o.kt)("td",{parentName:"tr",align:null},"Image opened in preview")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ym_event_card_action"),(0,o.kt)("td",{parentName:"tr",align:null},"Card action button clicked")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ym-bot-loaded-on-page-reload"),(0,o.kt)("td",{parentName:"tr",align:null},"When the refresh context is false, the bot will receive events as soon as the page reloads")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ym_home"),(0,o.kt)("td",{parentName:"tr",align:null},"Home button clicked")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"message-received"),(0,o.kt)("td",{parentName:"tr",align:null},"New message received by user that is, sent by the bot")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"page-url-based-trigger"),(0,o.kt)("td",{parentName:"tr",align:null},"Whenever a notification is sent in the bot (for electron apps)")))))}m.isMDXComponent=!0}}]);