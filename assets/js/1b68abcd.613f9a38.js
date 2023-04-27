"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[61427],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,o(o({ref:e},p),{},{components:r})):n.createElement(h,o({ref:e},p))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24621:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={title:"Chat widget alerts and error messages",sidebar_label:"Chat widget alerts and error messages"},s=void 0,c={unversionedId:"platform_concepts/channelConfiguration/chat-widget-errors",id:"platform_concepts/channelConfiguration/chat-widget-errors",title:"Chat widget alerts and error messages",description:"When a user interacts with the chat widget, they may encounter different types of error messages based on the type of error.",source:"@site/docs/platform_concepts/channelConfiguration/chat-widget-errors.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/chat-widget-errors",permalink:"/docs/platform_concepts/channelConfiguration/chat-widget-errors",draft:!1,tags:[],version:"current",frontMatter:{title:"Chat widget alerts and error messages",sidebar_label:"Chat widget alerts and error messages"},sidebar:"platform_concepts",previous:{title:"V2 migration guide",permalink:"/docs/platform_concepts/channelConfiguration/support-banner-migration"},next:{title:"Limitations and best practices",permalink:"/docs/platform_concepts/channelConfiguration/character-limits-sdk"}},p={},u=[],m={toc:u};function d(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When a user interacts with the chat widget, they may encounter different types of error messages based on the type of error."),(0,i.kt)("p",null,"The table provides all the possible errors with descriptions:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Errors"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"File upload limit"),(0,i.kt)("td",{parentName:"tr",align:null},"You can upload files with a maximum size of 20 MB. This error occurs when you try to upload files that exceed this limit.",(0,i.kt)("br",null)," ",(0,i.kt)("img",{src:"https://i.imgur.com/C4AEI7c.png",alt:"drawing",width:"40%"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Network disconnected"),(0,i.kt)("td",{parentName:"tr",align:null},"When the bot users are disconnected from the internet, the\xa0chatbot notifies them and provides an option to reload the page.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Note:")," If network connection is re-established, the chatbot will again connect to the internet without having to reload.",(0,i.kt)("br",null)," ",(0,i.kt)("img",{src:"https://i.imgur.com/ARNfqU8.png",alt:"drawing",width:"40%"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Network error"),(0,i.kt)("td",{parentName:"tr",align:null},"This error occurs when the chat widget is disconnected from the internet while sending a message, uploading a file, or selecting quick replies.",(0,i.kt)("br",null)," ",(0,i.kt)("img",{src:"https://i.imgur.com/zS1AXia.png",alt:"drawing",width:"40%"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Input bar typing limit"),(0,i.kt)("td",{parentName:"tr",align:null},"Displays a message when users reach the maximum limit of 500 or 1024 characters. If the user exceeds this limit or attempts to paste more than the maximum allowed characters, the system will prevent them from typing or pasting additional characters.",(0,i.kt)("br",null)," ",(0,i.kt)("strong",{parentName:"td"},"Note:"),(0,i.kt)("br",null),"\u2022 If the user reaches the maximum limit of 1024 characters for multi-line input, then ",(0,i.kt)("strong",{parentName:"td"},"You have reached maximum character limit of 1024")," error message is displayed, and this is enabled via bot mapping.",(0,i.kt)("br",null),"\u2022 If the user reaches the maximum limit of 500 characters for single-line input, then ",(0,i.kt)("strong",{parentName:"td"},"You have reached maximum character limit of 500"),"\xa0error message is displayed, and this is enabled via bot mapping. ",(0,i.kt)("br",null),(0,i.kt)("img",{src:"https://i.imgur.com/A4Bf0aY.png",alt:"drawing",width:"40%"}),(0,i.kt)("img",{src:"https://i.imgur.com/SFNBSQv.png",alt:"drawing",width:"40%"}))))))}d.isMDXComponent=!0}}]);