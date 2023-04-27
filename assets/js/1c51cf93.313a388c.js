"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[81866],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return g}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(g,i(i({ref:e},s),{},{components:n})):r.createElement(g,i({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55428:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Talisma Livechat Integration",sidebar_label:"Talisma Livechat"},c=void 0,p={unversionedId:"platform_concepts/appConfiguration/talisma",id:"platform_concepts/appConfiguration/talisma",title:"Talisma Livechat Integration",description:"1. Configuration",source:"@site/docs/platform_concepts/appConfiguration/talisma.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/talisma",permalink:"/docs/platform_concepts/appConfiguration/talisma",draft:!1,tags:[],version:"current",frontMatter:{title:"Talisma Livechat Integration",sidebar_label:"Talisma Livechat"},sidebar:"platform_concepts",previous:{title:"Salesforce Live Chat",permalink:"/docs/platform_concepts/appConfiguration/salesforcelivechat"},next:{title:"Zoho SalesIQ",permalink:"/docs/platform_concepts/appConfiguration/zoho-live-chat"}},s={},u=[{value:"1. Configuration",id:"1-configuration",level:2},{value:"2. Use Case",id:"2-use-case",level:2}],f={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-configuration"},"1. Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inside your project, navigate to the Configuration tab and click ",(0,o.kt)("strong",{parentName:"li"},"Integrations"),". Search for ",(0,o.kt)("strong",{parentName:"li"},"Talisma live chat"),".")),(0,o.kt)("img",{src:"https://i.imgur.com/IS8WKTm.png",alt:"drawing",width:"60%"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connect"),". Enter ",(0,o.kt)("strong",{parentName:"li"},"Talisma Api Base Url")," and ",(0,o.kt)("strong",{parentName:"li"},"Agent Timeout")," value.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/z3ORF31.png",alt:null})),(0,o.kt)("h2",{id:"2-use-case"},"2. Use Case"),(0,o.kt)("p",null,"In this integration, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket"},"raise ticket")," node to create a conversation with Talisma agent. Once the conversation is initiated the user can talk to the talisma agent.\nAfter the conversation between them ends, the bot takes over the conversation with the user."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/V37htaq.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Support")," "),(0,o.kt)("p",null,"The text and attachments (image, file) is being supported from the user and agent's side."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference")," "),(0,o.kt)("iframe",{src:"https://drive.google.com/file/d/1gKbAt5OFpuOIT5bABIYMEXxjEgMMBwid/preview",width:"640",height:"480",allow:"autoplay"}))}m.isMDXComponent=!0}}]);