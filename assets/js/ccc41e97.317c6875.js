"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6217],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17206:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Google Assistant",sidebar_label:"Google Assistant"},s=void 0,c={unversionedId:"platform_concepts/channelConfiguration/google-assistant",id:"platform_concepts/channelConfiguration/google-assistant",title:"Google Assistant",description:"How to Use",source:"@site/docs/platform_concepts/channelConfiguration/google-assistant.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/google-assistant",permalink:"/docs/platform_concepts/channelConfiguration/google-assistant",draft:!1,tags:[],version:"current",frontMatter:{title:"Google Assistant",sidebar_label:"Google Assistant"},sidebar:"platform_concepts",previous:{title:"Voice Channels",permalink:"/docs/platform_concepts/channelConfiguration/voice-overview"},next:{title:"IVR (for app)",permalink:"/docs/platform_concepts/channelConfiguration/ivr-bots"}},p={},u=[{value:"How to Use",id:"how-to-use",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing the CLI",id:"installing-the-cli",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-use"},"How to Use"),(0,a.kt)("p",null,"Replace BOT_ID and PROJECT_ID with applicable botId and projectId"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit Actions Console and login."),(0,a.kt)("li",{parentName:"ol"},"Create a Project")),(0,a.kt)("p",null,"Turn AdBlocker Off in case the popup doesn\u2019t appear.\nGive a project name. It takes a couple of minutes to create a project and go to the next screen Choose assistant SDK. The Screen should be somewhat similar to the below photo."),(0,a.kt)("p",null,"Copy the command shown in pop up which is displayed after clicking on assistant SDK"),(0,a.kt)("p",null,"Agree to the Terms and Conditions and continue / Click Ok."),(0,a.kt)("h2",{id:"installing-the-cli"},"Installing the CLI"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please choose your OS and install from google developers.\nMake an empty folder and copy the gactions CLI into it. To be sure it has execution permissions run chmod +x ./gactions Make a file action.json in the directory and copy the following contents. Do not forget to replace BOT_ID with your botId.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n"actions": [\n {\n "name": "MAIN",\n "intent": {\n "name": "actions.intent.MAIN"\n },\n "fulfillment": {\n "conversationName": "ym"\n }\n }\n ],\n"conversations": {\n "ym": {\n "name": "ym",\n "url": "https://app.yellowmessenger.com/integrations/googleAssistant/BOT_ID",  "fulfillmentApiVersion": 2\n }\n }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Paste the command you copied in the previous step. replace PACKAGE_NAME with action.json ( eg., gactions update -- action_package action.json --project gabot-4581e)")),(0,a.kt)("p",null,"In case if you have missed your project name. You can find it in overview -> settings or in the home screen"),(0,a.kt)("p",null,"Follow along the CLI prompts to finish successfully deploying the bot."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Further reading The guide to building/porting a bot for Google Assistant")))}m.isMDXComponent=!0}}]);