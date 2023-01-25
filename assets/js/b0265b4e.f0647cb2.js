"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[2223],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(n),h=r,k=c["".concat(s,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},60244:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"NLU automated testing",sidebar_label:"NLU automated testing"},s=void 0,p={unversionedId:"cookbooks/studio/regressiontest",id:"cookbooks/studio/regressiontest",title:"NLU automated testing",description:"Instead of creating utterances manually, you can now auto-generate them and run test utterances in bulk. Before publishing, you can test these utterances to check whether each one is mapped to the respective intents.",source:"@site/docs/cookbooks/studio/regressiontest.md",sourceDirName:"cookbooks/studio",slug:"/cookbooks/studio/regressiontest",permalink:"/docs/cookbooks/studio/regressiontest",draft:!1,tags:[],version:"current",frontMatter:{title:"NLU automated testing",sidebar_label:"NLU automated testing"},sidebar:"platform_concepts",previous:{title:"Conversation Logs",permalink:"/docs/platform_concepts/studio/analyze/chat-logs"},next:{title:"Debug bot flows",permalink:"/docs/platform_concepts/studio/test-and-publish-bot/debug-flow"}},u={},c=[{value:"1. Import intents",id:"1-import-intents",level:2},{value:"1.1 Test FAQs",id:"11-test-faqs",level:3},{value:"2. Upload utterances",id:"2-upload-utterances",level:2}],m={toc:c};function h(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Instead of creating utterances manually, you can now auto-generate them and run test utterances in bulk. Before publishing, you can test these utterances to check whether each one is mapped to the respective intents."),(0,o.kt)("p",null,"To try this, "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Studio")," and click ",(0,o.kt)("strong",{parentName:"li"},"Test bot"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/VsR4lqC.png",alt:null})),(0,o.kt)("p",null,"You will see the following options. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/QIdy6nP.jpg",alt:null})),(0,o.kt)("p",null,"Choose how you want to test your bot. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#11-import-intents"},"Import Intents"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"#12-upload-utterances"},"Upload Utterances")),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To switch between ",(0,o.kt)("strong",{parentName:"p"},"Upload Utterances")," and ",(0,o.kt)("strong",{parentName:"p"},"Import Intents"),", click the arrow beside ",(0,o.kt)("strong",{parentName:"p"},"Import Intents"),".\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/PBebGxT.png",alt:null}))))),(0,o.kt)("h2",{id:"1-import-intents"},"1. Import intents"),(0,o.kt)("p",null,"If you haven't uploaded utterances to your bot and would like to import them and test them, click ",(0,o.kt)("strong",{parentName:"p"},"Import Intents"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on any intent."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Utterances")," field, type any utterance and click ",(0,o.kt)("strong",{parentName:"li"},"Generate utterances"),". A list of utterances would be generated.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/NKiWG2R.png",alt:null})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select the utterances you need to test and click ",(0,o.kt)("strong",{parentName:"li"},"Test intent"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ed5sIaV.png",alt:null})),(0,o.kt)("p",null," The platform will run the prediction test and display results according to the confidence level. The result is pass if any utterance trigger has the same intent with high confidence, else it is fail. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/6Yp9J3B.png",alt:null})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"To test all the other intents, click the back arrow(on the top left next to the intent's name) and click ",(0,o.kt)("strong",{parentName:"li"},"Test Intents"),". ")),(0,o.kt)("p",null,"This action will test the utterances for all the intents and give the status regressively. It's useful when you are making changes to your bot. You don't have to test each and every change, with a click you can collectively train the bot on all the changes."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/iKGRhZP.png",alt:null})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"To download these tested utterances and access them offline click the ",(0,o.kt)("strong",{parentName:"li"},"Download report")," button. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/i1nW3Hn.png",alt:null})),(0,o.kt)("p",null,"The downloaded report has the following details"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"utterance")," - utterances generated for the intents\nintent - intents that will get triggered through those utterances."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"predictedIntent")," - The intent that was triggered for that utterance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"predictedConfidence")," - The % at which the respective intent gets triggered."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"result")," - result of the predictions, success- predicted successfully, fail - prediction failed.")),(0,o.kt)("h3",{id:"11-test-faqs"},"1.1 Test FAQs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on any FAQ."),(0,o.kt)("li",{parentName:"ol"},"In the variations field, type any question/text and click ",(0,o.kt)("strong",{parentName:"li"},"Generate variations"),". A list of variations would be generated.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/QvXdhqA.png",alt:null})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Select the variations you need to test and click ",(0,o.kt)("strong",{parentName:"li"},"Test FAQ"),". ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/0F9Is9F.png",alt:null})),(0,o.kt)("p",null,"The platform will run the prediction test and display results according to the confidence level. The result is pass if any utterance trigger has the same intent with high confidence, else it is fail. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/FTXS4Gp.png",alt:null})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click the back arrow(on the top left next to the faq's name) and click ",(0,o.kt)("strong",{parentName:"li"},"Test Intents")," to test all the other intents. This will test the variations for all the FAQs and give the status regressively. It's useful when you are making changes to your bot, you don't have to test each and every change, with a click you can collectively train the bot on all the changes.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/35gWFNY.png",alt:null})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"To download these tested utterances and access them offline click the ",(0,o.kt)("strong",{parentName:"li"},"Download report")," button on the same page. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/kPnJWSi.png",alt:null})),(0,o.kt)("p",null,"The downloaded report has the following details"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"utterance")," - utterances generated for the intents"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"intent")," - intents that will get triggered through those utterances."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"predictedIntent")," - The intent that was triggered for that utterance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"predictedConfidence")," - The % at which the respective intent gets triggered."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"result")," - result of the predictions, ",(0,o.kt)("strong",{parentName:"li"},"success"),"- predicted successfully, ",(0,o.kt)("strong",{parentName:"li"},"fail")," - prediction failed.")),(0,o.kt)("h2",{id:"2-upload-utterances"},"2. Upload utterances"),(0,o.kt)("p",null,"If you already have a list of test utterances and want to just test them, click on  ",(0,o.kt)("strong",{parentName:"p"},"Upload Utterances"),". "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the download icon to download the template.\n",(0,o.kt)("img",{parentName:"li",src:"https://i.imgur.com/bj9voiI.png",alt:null})),(0,o.kt)("li",{parentName:"ol"},"Populate your utterances in the template.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/GPG0zVE.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"utterance")," - utterance for your intent\n",(0,o.kt)("strong",{parentName:"p"},"journey")," - the journey/flow the utterances are associated with\n",(0,o.kt)("strong",{parentName:"p"},"tag")," - labels you add that helps in recognizing/filtering important journeys"),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Upload")," button to upload this file."),(0,o.kt)("li",{parentName:"ol"},"Check the status of those utterances by downloading the report from the ",(0,o.kt)("strong",{parentName:"li"},"REPORTS")," section.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/KIp9a0o.png",alt:null})),(0,o.kt)("p",null,"The report has the following details,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"utterance")," - The utterances that were uploaded"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Predicted Journey")," - The journey to which the utterances were mapped."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Journey")," - The journey that was uploaded in the template."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Status")," - Success/failure which depends on the mapping of the utterance with the right journey.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/bBeDZhn.png",alt:null})))}h.isMDXComponent=!0}}]);