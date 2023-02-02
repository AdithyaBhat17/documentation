"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[7211],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(o),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return o?n.createElement(f,i(i({ref:t},d),{},{components:o})):n.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},20317:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),i=["components"],s={title:"Introduction to voice bot builder (voice nodes and voice options (global and node level)",sidebar_label:"Global & node level options"},c=void 0,l={unversionedId:"cookbooks/voice-as-channel/nuances/botbuilderintro",id:"cookbooks/voice-as-channel/nuances/botbuilderintro",title:"Introduction to voice bot builder (voice nodes and voice options (global and node level)",description:"Voice features (and supporting documentation) are constantly getting improved and updated, there may be some issues/feature mis-match.",source:"@site/docs/cookbooks/voice-as-channel/nuances/botbuilderintro.md",sourceDirName:"cookbooks/voice-as-channel/nuances",slug:"/cookbooks/voice-as-channel/nuances/botbuilderintro",permalink:"/docs/cookbooks/voice-as-channel/nuances/botbuilderintro",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction to voice bot builder (voice nodes and voice options (global and node level)",sidebar_label:"Global & node level options"},sidebar:"cookbooks",previous:{title:"Voice bot architecture",permalink:"/docs/cookbooks/voice-as-channel/nuances/voicearchitecture"},next:{title:"Building Flows",permalink:"/docs/cookbooks/whatsapp-channel/building-flows"}},d={},p=[],u={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Voice features (and supporting documentation) are constantly getting improved and updated, there may be some issues/feature mis-match.\nPlease get in touch with the team incase of any queries.")),(0,a.kt)("p",null,"In the yellow cloud platform, voice can be configured with quick settings and reusable nodes to ensure that the bot development is much faster and error-free. "),(0,a.kt)("p",null,"There are two methods to configure voice options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice"},"Global options")," - Default options for all nodes/flows."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes#32-configure-node-for-a-voice-bot"},"Node options")," - Overrides global options for specific nodes wherever it is defined.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nodes supported for voice bots")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Category"),(0,a.kt)("th",{parentName:"tr",align:null},"Nodes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message and Prompts"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#speak"},"Speak"),", ",(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#11-name"},"Name"),", ",(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#12-phone"},"Phone Number"),", ",(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#21-question"},"Question"),", ",(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text"},"Text"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Logic"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition"},"Condition"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables"},"Set variables"),", ",(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function"},"Function"),", ",(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database"},"Database"),", ",(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api"},"API"),", ",(0,a.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow"},"Execute Flow"))))))}m.isMDXComponent=!0}}]);