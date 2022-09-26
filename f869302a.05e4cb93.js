(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{410:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return p}));var n=o(3),r=o(7),a=(o(0),o(424)),c=["components"],i={title:"Voice overview",sidebar_label:"Voice overview"},s={unversionedId:"cookbooks/voice-as-channel/overview",id:"cookbooks/voice-as-channel/overview",isDocsHomePage:!1,title:"Voice overview",description:"In the yellow cloud platform, voice can be configured with quick settings and reusable nodes to ensure that the bot development is much faster and error-free.",source:"@site/docs/cookbooks/voice-as-channel/overview.md",slug:"/cookbooks/voice-as-channel/overview",permalink:"/docs/cookbooks/voice-as-channel/overview",version:"current",sidebar_label:"Voice overview",sidebar:"cookbooks",previous:{title:"Lead Generation Bot",permalink:"/docs/cookbooks/template-bots/lead-generation"},next:{title:"Getting started",permalink:"/docs/cookbooks/voice-as-channel/gettingstarted"}},l=[],d={toc:l};function p(e){var t=e.components,o=Object(r.a)(e,c);return Object(a.b)("wrapper",Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In the yellow cloud platform, voice can be configured with quick settings and reusable nodes to ensure that the bot development is much faster and error-free. "),Object(a.b)("p",null,"There are two methods to configure voice options:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice"},"Global options")," - Default options for all nodes/journeys."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes#32-configure-node-for-a-voice-bot"},"Node options")," - Overrides global options for specific nodes wherever it is defined.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Nodes supported for voice bots")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Category"),Object(a.b)("th",{parentName:"tr",align:null},"Nodes"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Message and Prompts"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#speak"},"Speak"),", ",Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#11-name"},"Name"),", ",Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#12-phone"},"Phone Number"),", ",Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#21-question"},"Question"),", ",Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text"},"Text"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Logic"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition"},"Condition"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Action"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables"},"Set variables"),", ",Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#24-function"},"Function"),", ",Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database"},"Database"),", ",Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#21-api"},"API"),", ",Object(a.b)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow"},"Execute Flow"))))),Object(a.b)("p",null,"In this section you will learn:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"How a voice bot flow works and how to get started. "),Object(a.b)("li",{parentName:"ol"},"Few use-cases on how to make use of the voice functionalities, like delays, recording and forwarding options, DTMF and configuring STT and TTS engines. ")))}p.isMDXComponent=!0},424:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return f}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(o),u=n,f=p["".concat(c,".").concat(u)]||p[u]||b[u]||a;return o?r.a.createElement(f,i(i({ref:t},l),{},{components:o})):r.a.createElement(f,i({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=o[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);