"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[5531],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83824:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Flow to connect with an agent without asking for any information from the user",sidebar_label:"Agent transfer without user information"},l=void 0,c={unversionedId:"cookbooks/inbox/transferwithoutinfo",id:"cookbooks/inbox/transferwithoutinfo",title:"Flow to connect with an agent without asking for any information from the user",description:"Follow the below steps to transfer the chat to an agent without asking for any information from the user:",source:"@site/docs/cookbooks/inbox/transferwithoutinfo.md",sourceDirName:"cookbooks/inbox",slug:"/cookbooks/inbox/transferwithoutinfo",permalink:"/docs/cookbooks/inbox/transferwithoutinfo",draft:!1,tags:[],version:"current",frontMatter:{title:"Flow to connect with an agent without asking for any information from the user",sidebar_label:"Agent transfer without user information"},sidebar:"cookbooks",previous:{title:"Change ticket priority and assignee",permalink:"/docs/cookbooks/inbox/priority-assignee"},next:{title:"Upgrade engage (App to Cloud)",permalink:"/docs/cookbooks/Upgrade_new_engage_app"}},u={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow the below steps to transfer the chat to an agent without asking for any information from the user:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Name")," and ",(0,a.kt)("strong",{parentName:"li"},"Query")," are the mandatory fields to be passed into Raise ticket node. To create a flow that does not ask user for any of the information, create two ",(0,a.kt)("strong",{parentName:"li"},"global variables")," (click ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#3-create-a-variable"},"here")," to learn how) for storing names and queries with some dummy values (the dummy name and query won\u2019t be displayed to the user, it will be displayed to the live agent).")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/b2PcVD0.png",alt:null})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a simple flow and directly connect Raise ticket node to the start node. "),(0,a.kt)("li",{parentName:"ol"},"Pass the same variables in the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#17-raise-ticket"},"Raise ticket action node"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ojL2BAU.png",alt:null})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"This flow can end with ",(0,a.kt)("strong",{parentName:"li"},"Ticket closed")," and ",(0,a.kt)("strong",{parentName:"li"},"Error")," connected to a ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes"},"Message")," node.")))}m.isMDXComponent=!0}}]);