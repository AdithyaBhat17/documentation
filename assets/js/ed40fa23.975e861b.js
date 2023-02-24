"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[7248],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"Using conversation designer to build a voice bot",sidebar_label:"Using conversation design"},s=void 0,p={unversionedId:"cookbooks/voice-as-channel/build/convdesiVB",id:"cookbooks/voice-as-channel/build/convdesiVB",title:"Using conversation designer to build a voice bot",description:"Complete details on designing a voice bot conversation using the conversation design module are explained here.",source:"@site/docs/cookbooks/voice-as-channel/build/convdesiVB.md",sourceDirName:"cookbooks/voice-as-channel/build",slug:"/cookbooks/voice-as-channel/build/convdesiVB",permalink:"/docs/cookbooks/voice-as-channel/build/convdesiVB",draft:!1,tags:[],version:"current",frontMatter:{title:"Using conversation designer to build a voice bot",sidebar_label:"Using conversation design"},sidebar:"cookbooks",previous:{title:"Global & node level options",permalink:"/docs/cookbooks/voice-as-channel/build/botbuilderintro"},next:{title:"Using voice input nodes",permalink:"/docs/cookbooks/voice-as-channel/build/usingvoiceinput"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udca1 Complete details on designing a voice bot conversation using the conversation design module are explained ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/design/convdesignvoice"},"here"),". ")),(0,o.kt)("p",null,"In this article, you will understand how to design a conversation with help of an example. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example use case to build a voice bot")),(0,o.kt)("p",null,"Let us consider a use case to build a ",(0,o.kt)("em",{parentName:"p"},"Banking voice bot")," that asks a set of questions to identify the user and provide a resolution for the asked queries (as shown in the below conversation). This is a happy conversation flow where the bank account holder provides his name and phone number and asks for the eligible home loan and the bot replies with the details. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/zWCv0tr.png",alt:null})),(0,o.kt)("p",null,"Let's break down the conversation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bot")," (asks): What is your name? "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User"),"(replies): Karan"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bot"),"(stores): Karan as Name "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bot")," (asks): How may I help? "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User"),"(replies): Loan eligibility "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bot"),"(understands): User request = Loan eligibility"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bot"),"(logic): Required phone number to calculate Loan eligibility"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bot")," (asks): What is your phone number?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"User"),"(replies): 9890",(0,o.kt)("strong",{parentName:"li"},"**")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bot"),"(validates if the number is correct): Uses logic to calculate Loan eligibility"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bot")," (response): You can avail X amount on X% interest. ")),(0,o.kt)("p",null,"--- End of the call ---"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To build this, "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("strong",{parentName:"p"},"Conversation design"),". "),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"This will work as a voice conversation designer only if you had selected the Type as Voice while creating a bot). "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a dialogue for the initial conversation: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add initial conversation, fetch user details (Example: Name)"),(0,o.kt)("li",{parentName:"ul"},"Ask the determining question to fetch the response from the user(example: Response). "),(0,o.kt)("li",{parentName:"ul"},"The answer fetched will be the intent based on which the next flows will be executed.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/fwfSd3u.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Determine the ",(0,o.kt)("strong",{parentName:"p"},"Intent")," (next action) based on the user input using a condition."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If the user response is identified as Loan eligibility, execute ",(0,o.kt)("strong",{parentName:"li"},"Loan eligibility")," flow. "),(0,o.kt)("li",{parentName:"ul"},"If the response is to create a new bank account, execute the ",(0,o.kt)("strong",{parentName:"li"},"Crete account")," flow. So on...  ")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/AzIT8BX.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the next flows based on the obtained information. That is- loan eligibility flow. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Two dialogues are used in this because, after obtaining the phone number a logical action must be performed where the number is verified on the database and the loan details are obtained. This can be added on ",(0,o.kt)("strong",{parentName:"li"},"Studio"),". ")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/pwa8dss.png",alt:null}),"    ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Settings"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configure fallbacks that are spoken out when the user responds with an unexpected message. ")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/eJCDSe2.png",alt:null})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Add node-level settings like emphasis, interpret, pause, and music. ")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/cvgJlI4.png",alt:null})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Bot persona is already configured with the default settings. To customize further, click ",(0,o.kt)("strong",{parentName:"li"},"Settings")," and select the required options. ")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/vmKrZgv.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/design/convdesignvoice#33-voice-bot-demoreceive-a-live-call"},"preview")," the design by connecting your bot to the IVR number and requesting a call. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch to ",(0,o.kt)("strong",{parentName:"p"},"Studio"),". Flows are in sync with the design module, you can edit them further. "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For example, open the ",(0,o.kt)("strong",{parentName:"li"},"Loan eligibility")," flow, add database and function to calculate the loan and interest rate. ")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/tbvwtgH.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Publish the changes. Once approved, the voice bot will go live and can receive customer calls."))))}d.isMDXComponent=!0}}]);