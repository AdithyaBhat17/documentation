"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[27755],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},92144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Understand Context-Aware Interruption Handling in voice bots",sidebar_label:"Interruption handling"},s=void 0,c={unversionedId:"cookbooks/voice-as-channel/usecases/interrupthandling",id:"cookbooks/voice-as-channel/usecases/interrupthandling",title:"Understand Context-Aware Interruption Handling in voice bots",description:"(Available in Private-Beta)",source:"@site/docs/cookbooks/voice-as-channel/usecases/interrupthandling.md",sourceDirName:"cookbooks/voice-as-channel/usecases",slug:"/cookbooks/voice-as-channel/usecases/interrupthandling",permalink:"/docs/cookbooks/voice-as-channel/usecases/interrupthandling",draft:!1,tags:[],version:"current",frontMatter:{title:"Understand Context-Aware Interruption Handling in voice bots",sidebar_label:"Interruption handling"},sidebar:"cookbooks",previous:{title:"Understand conversational delays",permalink:"/docs/cookbooks/voice-as-channel/conversationaldelays"},next:{title:"Language detection",permalink:"/docs/cookbooks/voice-as-channel/usecases/languagedetection"}},u={},p=[],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"(Available in Private-Beta)"),(0,a.kt)("p",null,"Voice is a full duplex channel, i.e. even when the bot is speaking something, if the user has some clarification or doubts, they expect the bot to listen and answer those queries first. From a user behavior perspective, this is equivalent to a customer interrupting a Human-agent while the agent is speaking something on a call."),(0,a.kt)("p",null,"Our new design approach for the feature is influenced by the way humans process interruptions over call. Likewise, humans are smarter to listen to interruptions, judging the validity of all the interruptions in parallel and only stopping when a valid (intended) interruption is observed. In case an invalid interruption is observed, the bot will automatically ignore that and be on track with the ongoing conversation. Detailed conversational flow is demonstrated below for both valid and invalid interruptions."),(0,a.kt)("p",null,"To ensure that only relevant inputs from the callers are respected as Interruptions, the Voice Bot can now be configured to define what constitutes a Valid interruption:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Positive case"),": With the new feature of interruption, the bot will only stop speaking (moving away from the current conversation) when it\u2019s a valid interruption (that is acceptable in the context of the conversation).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("img",{parentName:"strong",src:"https://lh5.googleusercontent.com/3tl6o_3FlCe8bcyp-OAvwf-c5wQ5SVN4JKBVXXSbatfrZ4P5yT07FsonlVFDxBySpqJhH4-BUi-uChd6X9LZowvrgdcYMa_1jHVWhqcQonPgu1fmvJq0s84z4KHLBBfd1D0Y3oQIjiwWIcPRo4t6CiI",alt:null})),"\n2. ",(0,a.kt)("strong",{parentName:"p"},"Negative case")," : If there is a background conversation (unrelated to the current context of bot conversation) that gets picked up by the bot, it will be treated as an invalid interruption and the flow will not be broken (the interruption will be ignored)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("img",{parentName:"strong",src:"https://lh5.googleusercontent.com/VEtSe9A-IEX5ca7Wi1I4YNlOnFa3yz7Mh22hPCE7YvEKU2qUkoZiZJS9zi-3apb_OIHISoYOUZxYQmSMdpjeIMPXbWmVD6b0xSqmHc0T9TH4DQoNDloleTPAORsEXKGflcHB-Ee1ICKeJuJCkHyKi9Y",alt:null}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Voice Options (to be used)"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set the below options to interject")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"interject = true; \ninterject_early : true (optional)\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Dynamically set the below option for a posted utterance to respond or ignore:")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'interjection_response: "no_action"; (OR "take_action")')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"This new feature is under private beta only and will only be enabled (on the bot) after evaluation of a valid use-case requirement."),(0,a.kt)("li",{parentName:"ol"},"Currently the platform doesn\u2019t evaluate the validity of the interruption but instead needs to be handled via bot logic (ex - if entity = language then next node, else ignore)"),(0,a.kt)("li",{parentName:"ol"},"Only 1 user interruption will be respected per node to start with under private beta."))))}h.isMDXComponent=!0}}]);