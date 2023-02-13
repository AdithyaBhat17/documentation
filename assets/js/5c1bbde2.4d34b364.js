"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6753],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(n),u=a,k=g["".concat(p,".").concat(u)]||g[u]||m[u]||r;return n?o.createElement(k,l(l({ref:t},s),{},{components:n})):o.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return g}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={title:"Integrate your knowledge base with google tag manager(GTM)",sidebar_label:"Integrate KB with GTM"},p=void 0,c={unversionedId:"platform_concepts/inbox/knowledge-base/int_gtm",id:"platform_concepts/inbox/knowledge-base/int_gtm",title:"Integrate your knowledge base with google tag manager(GTM)",description:"You can connect GTM to your knowledgebase from the knowledgebase settings page.",source:"@site/docs/platform_concepts/inbox/knowledge-base/int_gtm.md",sourceDirName:"platform_concepts/inbox/knowledge-base",slug:"/platform_concepts/inbox/knowledge-base/int_gtm",permalink:"/docs/platform_concepts/inbox/knowledge-base/int_gtm",draft:!1,tags:[],version:"current",frontMatter:{title:"Integrate your knowledge base with google tag manager(GTM)",sidebar_label:"Integrate KB with GTM"},sidebar:"platform_concepts",previous:{title:"Integrate KB with chatbot",permalink:"/docs/platform_concepts/inbox/knowledge-base/int_chatbot"},next:{title:"Canned responses",permalink:"/docs/platform_concepts/inbox/inbox-settings/productivitytools/canned-responses"}},s={},g=[{value:"Connect GTM to inbox knowledge base",id:"connect-gtm-to-inbox-knowledge-base",level:2},{value:"Debug GTM ID/ Delete GTM integration on KB",id:"debug-gtm-id-delete-gtm-integration-on-kb",level:4}],m={toc:g};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can connect GTM to your knowledgebase from the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/connecttosubdomain"},"knowledgebase settings")," page.")),(0,r.kt)("p",null,"Google Tag Manager(GTM) is a tag management system where you can quickly and easily update measurement codes and their related code fragments collectively known as ",(0,r.kt)("strong",{parentName:"p"},"tags")," on your website or mobile app.\nInstead of integrating and monitoring tracking code for tools like Google Analytics, Facebook pixel tracking, Google Ads, etc, you can create one GTM tag and monitor all the required tools in one place.  "),(0,r.kt)("p",null,"Google Tag Manager will be an intermediate between your knowledge base and the tools(tags) you want to integrate. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See the tag template types(tools) that are natively supported by Google Tag Manager ",(0,r.kt)("a",{parentName:"p",href:"https://support.google.com/tagmanager/answer/6106924?hl=en"},"here"),". ")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"connect-gtm-to-inbox-knowledge-base"},"Connect GTM to inbox knowledge base"),(0,r.kt)("p",null,"To integrate GTM with your knowledge base, follow the steps below: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://tagmanager.google.com/#/home"},"GTM account"),". Configure all the tools (required for your KB) like Google Analytics, Google Ads, Facebook pixel tracking, etc. in your GTM account. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the ",(0,r.kt)("strong",{parentName:"p"},"GTM ID"),"/ Tag tracking code from your GTM account (found on the top bar)."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=P4suvDuj0kI"},"Learn how"),". ")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/B3x1dPf.png",alt:null})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai/"},"yellow.ai")," platform. Open ",(0,r.kt)("strong",{parentName:"p"},"Inbox > Settings"),". Search and select ",(0,r.kt)("strong",{parentName:"p"},"Knowledge base"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/jPd74Ri.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"View")," next to integrations. "),(0,r.kt)("img",{src:"https://i.imgur.com/dUPObzp.png",alt:"drawing",width:"70%"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Google tag manager"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/WohfyTY.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Connect"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/TdWLYup.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter/paste your ",(0,r.kt)("strong",{parentName:"p"},"GTM ID")," (step#2). "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"}," (Your GTM ID starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"GTM-")," followed by an alphanumeric value)")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/fm3HjXg.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Manually verify if your GTM ID is correct. Click ",(0,r.kt)("strong",{parentName:"p"},"Connect"),". "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You can log in to your GTM account and verify the integration. ")))),(0,r.kt)("h4",{id:"debug-gtm-id-delete-gtm-integration-on-kb"},"Debug GTM ID/ Delete GTM integration on KB"),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the GTM ID is incorrect, you must ",(0,r.kt)("strong",{parentName:"p"},"Disconnect")," GTM from the Chatbot integration page and add the new(corrected) GTM ID again(step #7). "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/jDx8Ovt.png",alt:null})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can ",(0,r.kt)("strong",{parentName:"p"},"Disconnect/Connect")," GTM account to your knowledge base as and when required. ")),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);