"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[7226],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,k=u["".concat(i,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56918:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],p={title:"Context Management",sidebar_label:"Contextual Responses"},i=void 0,s={unversionedId:"platform_concepts/studio/train/add-contextual-response",id:"platform_concepts/studio/train/add-contextual-response",title:"Context Management",description:"Setting up contextual responses means adding more context as a response to a particular prompt.",source:"@site/docs/platform_concepts/studio/train/add-contextual-response.md",sourceDirName:"platform_concepts/studio/train",slug:"/platform_concepts/studio/train/add-contextual-response",permalink:"/docs/platform_concepts/studio/train/add-contextual-response",draft:!1,tags:[],version:"current",frontMatter:{title:"Context Management",sidebar_label:"Contextual Responses"},sidebar:"platform_concepts",previous:{title:"Small talk",permalink:"/docs/platform_concepts/studio/train/smalltalk"},next:{title:"Add APIs",permalink:"/docs/platform_concepts/studio/api/add-api"}},m={},u=[{value:"1. Add Global Contextual Responses",id:"1-add-global-contextual-responses",level:2},{value:"2. Train responses",id:"2-train-responses",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Setting up contextual responses means adding more context as a response to a particular prompt. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use case")),(0,o.kt)("p",null,"To simplify contextual response further, take an example:",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Bot")," : Can you share your email with me?",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("del",{parentName:"p"},(0,o.kt)("strong",{parentName:"del"},"User")," : Sure, ",(0,o.kt)("a",{parentName:"del",href:"mailto:gooduser@email.com"},"gooduser@email.com"))," (Expected response)",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"User")," : Why do you need my email?  (Received response)"),(0,o.kt)("p",null,"What if instead of giving their email address during a conversation, a customer asked ",(0,o.kt)("em",{parentName:"p"},"What is an email")," Or ",(0,o.kt)("em",{parentName:"p"},"Why do you need my email"),".\nThese types of contextual intents can be handled by adding contextual responses. "),(0,o.kt)("h2",{id:"1-add-global-contextual-responses"},"1. Add Global Contextual Responses"),(0,o.kt)("p",null,"Setting up standard contextual responses for all prompts in all journeys in the bot will give a response to the users when the bot has been asked questions with Why/What/How/ etc at any prompt.",(0,o.kt)("br",{parentName:"p"}),"\n","To explore the options available, follow the given steps: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Open Context management tab")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"On the Yellow.ai Platform, go to ",(0,o.kt)("strong",{parentName:"li"},"Studio")," > ",(0,o.kt)("strong",{parentName:"li"},"Train")," > ",(0,o.kt)("strong",{parentName:"li"},"Context Management"),".")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/XuwMeQP.png",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Add contextual responses")," "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"To add new intents click ",(0,o.kt)("strong",{parentName:"li"},"+Add Contextual Responses"),". "),(0,o.kt)("li",{parentName:"ul"},"Add an Intent name and supporting Utterances."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Submit"),". ")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/QzpYCLY.png",alt:null})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Modify existing contexts")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Utterances")," for the various predefined contextual intents like What/Why/How/When/Where/etc. can be modified by clicking the ",(0,o.kt)("strong",{parentName:"li"},"Edit")," option.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/nLiggZ6.png",alt:null}),"  "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Modify the default response of the existing contexts by clicking ",(0,o.kt)("strong",{parentName:"li"},"Set default response > Click here to add more response")," and adding a new response. ")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/4sGxnOE.png",alt:null})))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bulk upload")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can add multiple contexts at once. Click ",(0,o.kt)("strong",{parentName:"li"},"Bulk manage > Import"),". "),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Upload file"),"."),(0,o.kt)("li",{parentName:"ul"},"Upload a CSV file from your local system which has 2 columns (intent and utterance)."),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Upload"),". ")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/eBrK6HN.png",alt:null})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Add as many training utterances as possible for a particular context. ")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Enable small-talk")),(0,o.kt)("p",{parentName:"admonition"},"(This is available only for the ",(0,o.kt)("strong",{parentName:"p"},"older bots"),". Click ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/smalltalk/"},"here")," to configure small talk for new bots.)"),(0,o.kt)("p",{parentName:"admonition"},"If the small talk is enabled, when the user talking about generic topics, the bot will be able to answer the user with an appropriate answer. "),(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Bot"),": Please enter your desired location.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"User"),": Which location are you from?",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"Bot"),": I'm digital, so I'm always just... here.")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/vtWxpz2.png",alt:null}))),(0,o.kt)("h2",{id:"2-train-responses"},"2. Train responses"),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Train response")," to train the contexts. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/xfgFirr.png",alt:null})),(0,o.kt)("p",null,"Now, when the user will ask these questions ","[Why/What/How/etc]"," at any prompt during the conversation. The bot will be able to send these contextual responses to the user. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The user is not moving ahead while the user is asking for contextual responses. They will remain at the same prompt until the correct response is given.")),(0,o.kt)("img",{src:"https://cdn.yellowmessenger.com/fZN8lIisIfxw1615525657154.png",alt:"drawing",width:"60%"}))}d.isMDXComponent=!0}}]);