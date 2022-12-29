"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[2223],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"Regression Tests on Cloud",sidebar_label:"Regression Tests on Cloud"},s=void 0,u={unversionedId:"cookbooks/studio/regressiontest",id:"cookbooks/studio/regressiontest",title:"Regression Tests on Cloud",description:"The regression test feature enables the QA team to do the bulk testing of utterances to check whether it is triggering the expected journey/intent. It is available for both cloud/app bots.",source:"@site/docs/cookbooks/studio/regressiontest.md",sourceDirName:"cookbooks/studio",slug:"/cookbooks/studio/regressiontest",permalink:"/docs/cookbooks/studio/regressiontest",draft:!1,tags:[],version:"current",frontMatter:{title:"Regression Tests on Cloud",sidebar_label:"Regression Tests on Cloud"},sidebar:"platform_concepts",previous:{title:"Conversation Logs",permalink:"/docs/platform_concepts/studio/analyze/chat-logs"},next:{title:"Debug bot flows",permalink:"/docs/platform_concepts/studio/test-and-publish-bot/debug-flow"}},p={},c=[{value:"1. Demo for cloud bot",id:"1-demo-for-cloud-bot",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The regression test feature enables the QA team to do the bulk testing of utterances to check whether it is triggering the expected journey/intent. It is available for both cloud/app bots."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use-case")),(0,a.kt)("p",null,"After the QA team has written the set of utterances, it takes a lot of time to manually execute those utterances one by one. Using this feature you can reduce the time taken for the execution of test utterances from days to hours."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is an MVP and not enabled for multilingual and FAQs")),(0,a.kt)("h2",{id:"1-demo-for-cloud-bot"},"1. Demo for cloud bot"),(0,a.kt)("p",null,"Follow the given steps to perform a regression test for cloud bots: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Prepare the Utterance List and write the expected intent."))),(0,a.kt)("p",null,"Even before going to the platform to use this feature, prepare the list of utterances and their respective expected intent. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"QA Team will write the list of utterances."),(0,a.kt)("li",{parentName:"ul"},"During handover studio devs will write the expected intent in the journey column. "),(0,a.kt)("li",{parentName:"ul"},"Keep the utterance list ready with columns only as (utterance, journey, and tag).")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Make sure that it is written the same. These column names are case-sensitive. "),(0,a.kt)("li",{parentName:"ul"},"Bug to be resolved: Intent name must be entered in the journey column (excel sheet)."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/27smAMS.jpg",alt:null})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Upload the list (from the previous step)and Generate the report."),"   ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open ",(0,a.kt)("strong",{parentName:"li"},"Studio")," > ",(0,a.kt)("strong",{parentName:"li"},"Regression")," (on left sidebar).  ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Ig2613P.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clicking regression will open the regression suite in a new tab.   ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Q3OiT7x.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Utterance Management"),". ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/07JkyCG.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the utterance list file generated in step 1 as CSV and upload it here.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/fiongPq.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wait for the utterance 'report ready' icon to pop up and click ",(0,a.kt)("strong",{parentName:"li"},"Reports"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/xS1mEQO.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the report for the latest uploaded utterance list.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/hNPOLjm.jpg",alt:null})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you are in Dev Environment it will open up the flows and intents in dev env only. It will give results based on the intent trained in the dev environment. If the bot is published on live, then you can select live env respectively. The same goes for sandbox, staging, and production.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Add Pass/Fail result."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the report."),(0,a.kt)("li",{parentName:"ul"},"Add the downloaded data in the same file as a different sheet. Preferably named as \u201cReport\u201d.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/zfBdrQs.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove/hide columns Confidence, status, created from, and created date. Add a column \u201cResult\u201d")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"As mentioned above Journey here means expected intent & Predicted Journey means predicted intent.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Va43gFR.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Write formula in Column D. (=B2=C2) and drag down. It will populate the column with True/False. ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/dUf08QW.jpg",alt:null})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Verify results"),".")),(0,a.kt)("p",null,"If the result is: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"True"),": Expected Intent is the Predicted Intent. It confirms the correct intent will be triggered with the respective intent.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"False"),": Filter out the false results and check if you need to retrain the bot/or do some other corrective steps."))))}d.isMDXComponent=!0}}]);