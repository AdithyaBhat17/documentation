"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[51699],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46423:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={title:"Advanced call management options in Yellow.ai (call disconnection and call recording)",sidebar_label:"Call management options"},c=void 0,s={unversionedId:"cookbooks/voice-as-channel/callmgmt",id:"cookbooks/voice-as-channel/callmgmt",title:"Advanced call management options in Yellow.ai (call disconnection and call recording)",description:"Managing calls effectively is crucial to ensure seamless customer experience. The Yellow.ai platform offers several advanced call management options that enable you to configure your voice bot as per your specific requirements.",source:"@site/docs/cookbooks/voice-as-channel/callmgmt.md",sourceDirName:"cookbooks/voice-as-channel",slug:"/cookbooks/voice-as-channel/callmgmt",permalink:"/docs/cookbooks/voice-as-channel/callmgmt",draft:!1,tags:[],version:"current",frontMatter:{title:"Advanced call management options in Yellow.ai (call disconnection and call recording)",sidebar_label:"Call management options"},sidebar:"cookbooks",previous:{title:"Transfer call to an agent",permalink:"/docs/cookbooks/voice-as-channel/transfertoagent"},next:{title:"Architecture of a voice bot",permalink:"/docs/cookbooks/voice-as-channel/voicearchitecture"}},u={},p=[{value:"1. Configure your flow to disconnect a call",id:"1-configure-your-flow-to-disconnect-a-call",level:2},{value:"2. Manage call recording behaviour",id:"2-manage-call-recording-behaviour",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Managing calls effectively is crucial to ensure seamless customer experience. The Yellow.ai platform offers several advanced call management options that enable you to configure your voice bot as per your specific requirements. "),(0,r.kt)("p",null,"This article provides an overview of the additional call management options available on the Yellow.ai platform like ",(0,r.kt)("strong",{parentName:"p"},"call disconnection")," and ",(0,r.kt)("strong",{parentName:"p"},"call recording")," and how to configure them."),(0,r.kt)("p",null,"These are ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes#32-configure-node-for-a-voice-bot"},"node level options"),", you can find them by clicking the tools icon and selective voice options. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/fvQNhlg.png",alt:null})),(0,r.kt)("h2",{id:"1-configure-your-flow-to-disconnect-a-call"},"1. Configure your flow to disconnect a call"),(0,r.kt)("p",null,"Enabling the call disconnect option will atutomatically disconnect the voice call when the respective node is reached in the flow. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use-cases:")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Call disconnect can be used to ",(0,r.kt)("strong",{parentName:"li"},"end a use case"),"."),(0,r.kt)("li",{parentName:"ul"},"When the ",(0,r.kt)("strong",{parentName:"li"},"bot is unable to understand the user's response")," due to noise or any other reason, you can add a ",(0,r.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes"},"condition node")," to identify the user's intent and disconnect the call. "),(0,r.kt)("li",{parentName:"ul"},"When the user's input is not relavant despite repeated attempts, you can set maxium number of retries on the voice input node and disconnect once the limit is reached. ")),(0,r.kt)("p",null,"On the node (question, text, voice input, etc.) that you want to disconnect the call, configure the following: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Tools")," icon > ",(0,r.kt)("strong",{parentName:"li"},"Voice"),"."),(0,r.kt)("li",{parentName:"ol"},"Enable ",(0,r.kt)("strong",{parentName:"li"},"Disconnect call"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),". "),(0,r.kt)("li",{parentName:"ol"},"When this node is reached, the configured ",(0,r.kt)("strong",{parentName:"li"},"bot says")," message will be played, and the call gets disconnected. Example: ",(0,r.kt)("em",{parentName:"li"},"Thanks  for the details"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/T6bjkPK.png",alt:null})),(0,r.kt)("h2",{id:"2-manage-call-recording-behaviour"},"2. Manage call recording behaviour"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("strong",{parentName:"p"},"end-to-end call is always recorded"),", but you can change this behavior (",(0,r.kt)("strong",{parentName:"p"},"pause, stop, resume"),") based on specific cases.\nThe Yellow.ai platform provides an additional option to manage call recording effectively. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This must be configured for each node individually based on your use-case. ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use-cases:")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the user shares sensitive information like a PAN number, you can pause the recording to prevent such information from being recorded. "),(0,r.kt)("li",{parentName:"ul"},"If you need to comply with regulations that require you to avoid recording the support agent and user conversation, you can configure the platform to pause the recording during that part of the conversation.")),(0,r.kt)("p",null,"On the node (question, text, voice input, etc.) that you want to ",(0,r.kt)("strong",{parentName:"p"},"pause")," recording, configure the following: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Tools")," icon > ",(0,r.kt)("strong",{parentName:"li"},"Voice"),"."),(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("strong",{parentName:"li"},"Recording action")," select ",(0,r.kt)("strong",{parentName:"li"},"Pause"),". "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/q5H5b2Q.png",alt:null})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can also select ",(0,r.kt)("strong",{parentName:"p"},"Resume")," and ",(0,r.kt)("strong",{parentName:"p"},"Stop")," for other nodes. Resume will resume the paused recording and Stop will stop the call recording altogether. ")))}m.isMDXComponent=!0}}]);