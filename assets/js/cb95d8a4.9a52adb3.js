"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[3485],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Call recording",sidebar_label:"Call recording"},l=void 0,s={unversionedId:"cookbooks/voice-as-channel/callrecording",id:"cookbooks/voice-as-channel/callrecording",title:"Call recording",description:"Depending on the different use-cases and different kind of compliances that comes along with the industry regulations, we have designed a recording management feature that allows user to pause, resume or stop call recording during the conversation.",source:"@site/docs/cookbooks/voice-as-channel/callrecording.md",sourceDirName:"cookbooks/voice-as-channel",slug:"/cookbooks/voice-as-channel/callrecording",permalink:"/docs/cookbooks/voice-as-channel/callrecording",draft:!1,tags:[],version:"current",frontMatter:{title:"Call recording",sidebar_label:"Call recording"},sidebar:"cookbooks",previous:{title:"Call forwarding",permalink:"/docs/cookbooks/voice-as-channel/callforwarding"},next:{title:"Wait music",permalink:"/docs/cookbooks/voice-as-channel/waitmusic"}},u={},d=[{value:"1. Configure call recording",id:"1-configure-call-recording",level:2},{value:"2. Implement call recording",id:"2-implement-call-recording",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Depending on the different use-cases and different kind of compliances that comes along with the industry regulations, we have designed a recording management feature that allows user to pause, resume or stop call recording during the conversation."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"By default, the call recording feature is enabled to record the conversation.")),(0,a.kt)("h2",{id:"1-configure-call-recording"},"1. Configure call recording"),(0,a.kt)("p",null,"By default, call recording is turned on by default for all the bots. In case, you want to pause it for some recording sensitive conversation like OTP or ID number, you will have to configure the recording action on the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes#32-configure-node-for-a-voice-bot"},"node level options"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To pause recording")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set the recording action to ",(0,a.kt)("em",{parentName:"li"},"pause")," on that specific step."),(0,a.kt)("li",{parentName:"ol"},"Set the recording action back to ",(0,a.kt)("em",{parentName:"li"},"resume")," on the very next step following the sensitive step/s.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Once you stop the recording for a call at any step, it can\u2019t be resumed again."),(0,a.kt)("li",{parentName:"ol"},"You can also configure the recording behaviour in case the conversation is transferred to an Agent. Set the required recording action on the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice"},"global options"),". Setting it to True will record the conversation with the agent and vice-versa."),(0,a.kt)("li",{parentName:"ol"},"Recording action can only be set for the specific turn. If you set it to pause, all three, options below are not  captured for the turn: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Question asked by bot. "),(0,a.kt)("li",{parentName:"ul"},"Response from the user. "),(0,a.kt)("li",{parentName:"ul"},"The processing duration."))))),(0,a.kt)("h2",{id:"2-implement-call-recording"},"2. Implement call recording"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use case")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pausing the recording while the user provides the Aadhar number to the bot."),(0,a.kt)("li",{parentName:"ul"},"On the question node where the bot asks the user to provide the Aadhar details, the bot developer can set the recording action to ",(0,a.kt)("em",{parentName:"li"},"pause"),"."),(0,a.kt)("li",{parentName:"ul"},"On the next node, where the bot follows up with another question (non-recording sensitive), ",(0,a.kt)("em",{parentName:"li"},"resume")," the recording action.")))}f.isMDXComponent=!0}}]);