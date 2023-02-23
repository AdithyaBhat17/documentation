"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[2996],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(l,".").concat(d)]||p[d]||g[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],c={title:"Understand language detection in voice bots",sidebar_label:"Language detection"},l=void 0,s={unversionedId:"cookbooks/voice-as-channel/usecases/languagedetection",id:"cookbooks/voice-as-channel/usecases/languagedetection",title:"Understand language detection in voice bots",description:"You can now interact with the bot in multiple languages without the need to manually select the language each time you use it. The bot will automatically recognize the language you are speaking and respond accordingly.",source:"@site/docs/cookbooks/voice-as-channel/usecases/languagedetection.md",sourceDirName:"cookbooks/voice-as-channel/usecases",slug:"/cookbooks/voice-as-channel/usecases/languagedetection",permalink:"/docs/cookbooks/voice-as-channel/usecases/languagedetection",draft:!1,tags:[],version:"current",frontMatter:{title:"Understand language detection in voice bots",sidebar_label:"Language detection"},sidebar:"cookbooks",previous:{title:"Interruption handling",permalink:"/docs/cookbooks/voice-as-channel/usecases/interrupthandling"},next:{title:"Usecases",permalink:"/docs/cookbooks/inbox/custom-usecases"}},u={},p=[],g={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can now interact with the bot in multiple languages without the need to manually select the language each time you use it. The bot will automatically recognize the language you are speaking and respond accordingly."),(0,r.kt)("p",null,"The success of an automated Voice conversation depends heavily on the correct transcription of the caller\u2019s speech inputs to text with the help of third-party speech-to-text services."),(0,r.kt)("p",null,"With Language detection, each step can now be configured with a set of languages (as opposed to a single language limitation in earlier implementation)."),(0,r.kt)("p",null,"In addition to the ability to accept multiple languages, Language detection also detects the language being spoken on the call and sends this information back to the Bot for relevant actions (like changing the language of the conversation from English to Hindi). For Example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bot question"),": \u201cWelcome to Yellow Bank. How can I help you today\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User input configuration"),": Expected Language = English, Hindi, Gujarati"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User says"),": \u201c\u092e\u0947\u0930\u0947 \u0916\u093e\u0924\u0947 \u0915\u093e \u092c\u0948\u0932\u0947\u0902\u0938 \u0915\u093f\u0924\u0928\u093e \u0939\u0948? (What is my Account Balance?)\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bot question"),": \u201c\u0915\u094d\u092f\u093e \u0906\u092a \u092e\u0941\u091d\u0947 \u0905\u092a\u0928\u093e 12 \u0905\u0902\u0915\u094b\u0902 \u0915\u093e \u0905\u0915\u093e\u0909\u0902\u091f \u0928\u0902\u092c\u0930 \u092c\u0924\u093e \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u201d (Can you please share your 12 digit account number with me?)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to utilize this feature?")," "),(0,r.kt)("p",null,"This feature is part of the new voice 2.0 architecture. To utilize this, while passing the ",(0,r.kt)("em",{parentName:"p"},"STTlanguage parameter")," (voice options), pass all the expected STT language codes comma separated. For example, if you are at a phone number node, pass the node level option of STT_language as \u201cen-IN,hi-IN\u201d to enable auto-capture in both English and Hindi for that specific node only."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The switching of bot language needs to be part of bot logic. This is not a direct platform feature in v1.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage recommendations"),"\nLanguage detection is an additional processing overhead for the STT engine and hence should be used at selected steps. Using this across all the steps will probably result in higher conversational latency. From our internal testing, the additional latency is directly proportional to the number of languages added for detection."))}d.isMDXComponent=!0}}]);