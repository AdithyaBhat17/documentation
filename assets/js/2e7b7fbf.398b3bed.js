"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[9569],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||a;return n?l.createElement(d,r(r({ref:t},c),{},{components:n})):l.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15658:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var l=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],i={title:"Alexa",sidebar_label:"Alexa"},s=void 0,p={unversionedId:"platform_concepts/channelConfiguration/alexa",id:"platform_concepts/channelConfiguration/alexa",title:"Alexa",description:"There are two parts to an Alexa skill. The first part is the Voice User Interface (VUI). This is where we define how we will handle a user's voice input. The second part is the actual code logic for our skill. Setting up of the VUI will take place completely in the Amazon Developer Portal, while",source:"@site/docs/platform_concepts/channelConfiguration/alexa.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/alexa",permalink:"/docs/platform_concepts/channelConfiguration/alexa",draft:!1,tags:[],version:"current",frontMatter:{title:"Alexa",sidebar_label:"Alexa"},sidebar:"platform_concepts",previous:{title:"SMS Outbound India",permalink:"/docs/platform_concepts/channelConfiguration/sms-outbound-india"},next:{title:"Google Business Message",permalink:"/docs/platform_concepts/channelConfiguration/google-message"}},c={},u=[{value:"Setting up Your Alexa Skill in the Developer Portal",id:"setting-up-your-alexa-skill-in-the-developer-portal",level:2},{value:"Skill Information Tips",id:"skill-information-tips",level:3}],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are two parts to an Alexa skill. The first part is the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.amazon.com/en-US/docs/alexa/custom-skills/define-the-interaction-model-in-json-and-text.html"},"Voice User Interface (VUI)"),". This is where we define how we will handle a user's voice input. The second part is the actual code logic for our skill. Setting up of the VUI will take place completely in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.amazon.com/ap/signin?openid.pape.preferred_auth_policies=Singlefactor&clientContext=133-4657237-7550651&openid.pape.max_auth_age=7200000&openid.return_to=https%3A%2F%2Fdeveloper.amazon.com%2Falexa%2Fconsole%2Fask&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_dante_us&openid.mode=checkid_setup&marketPlaceId=ATVPDKIKX0DER&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&#/skills"},"Amazon Developer Portal"),", while\nthe actual code logic will be written in the ",(0,a.kt)("a",{parentName:"p",href:"https://app.yellowmessenger.com"},"Platform"),"."),(0,a.kt)("h2",{id:"setting-up-your-alexa-skill-in-the-developer-portal"},"Setting up Your Alexa Skill in the Developer Portal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Go to the Amazon Developer Portal. In the top-right corner of the screen, click the "Sign In" button.')),(0,a.kt)("p",null,"Use your sign in credentials are as follows -"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/b7OXjkh.png",alt:null})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'Once you have signed in, go to "Developer Console". click the Alexa button at the top of the screen.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/N0jmyTl.png",alt:null})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Select "Alexa Skills Kit" Option')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Select "Create Skill" This will get you to the first page of your new Alexa skill.'))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/op9tu8H.png",alt:null})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Fill out the Skill Information screen. Make sure to review the tips provided below the screenshot.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/tKYVUoT.png",alt:null})),(0,a.kt)("h3",{id:"skill-information-tips"},"Skill Information Tips"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Skill Type")," - Create all skills using the Custom Interaction Model. This is the default choice.\n",(0,a.kt)("strong",{parentName:"p"},"Language")," - Choose the first language you want to support. You can add additional languages in the future. For now, set it to English(India).\n",(0,a.kt)("strong",{parentName:"p"},"Name")," - This is the name that will be shown in the Alexa Skills Store, and the name your users will refer to.\n",(0,a.kt)("strong",{parentName:"p"},"Invocation Name")," - This is the name that your users will need to say to start your skill. We have provided some common issues\ndevelopers encounter in the list below, but you should also review the entire Invocation Name Requirements."),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},'Click the "Continue with template" to move to the Interaction Model.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/n3BRd6Z.png",alt:null})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Selct each options from skills builder checklist and fill the details for each")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/xPAc74n.png",alt:null})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},'On slecting " Intents, Samples, and Slots" you will arrive at a page that looks like below.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/mRVu5Un.png",alt:null})),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},'Go to "Slot Types (0)" option from menu. Then Click on ADD+ to add a new slot type.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/AemONmPx62621612448145110.png",alt:null})),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Create a new custom slot type called \u201cFreeText\u201d.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/esWT9Lo71fif1612448167000.png",alt:null})),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"For the slot values, enter the most likely used utterances for the chatbot. You should enter about 10-15 utterances at least.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/c0lmdBuIy1Xl1612448182867.png",alt:null})),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"It\u2019s time to define the intent that sends the text to the backend of the chatbot. Click on ADD+ in \u201cIntents\u201d category.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/PVHhEMMzJMtF1612448209501.png",alt:null})),(0,a.kt)("ol",{start:13},(0,a.kt)("li",{parentName:"ol"},"Add an intent called \u201cRawText\u201d.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/SHdxO2bu9PaQ1612448232070.png",alt:null})),(0,a.kt)("ol",{start:14},(0,a.kt)("li",{parentName:"ol"},"Now we have to add something called Intent Slots. These intent slots are unique to intents. We have to add an intent slot called \u201cRawTextData\u201d to the intent \u201cRawText\u201d. Click on \u201cRawText\u201d on the left side of the page under the intents header. Then, on the right side of the page, under Intent Slots, type \u201cRawTextData\u201d and click \u201cAdd\u201d.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/dUbEFzJGrM7L1612448303103.png",alt:null})),(0,a.kt)("ol",{start:15},(0,a.kt)("li",{parentName:"ol"},"You have to set the slot type of the newly created intent slot to \u201cFreeText\u201d")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/kUF1An0sLMzU1612448320844.png",alt:null})),(0,a.kt)("ol",{start:16},(0,a.kt)("li",{parentName:"ol"},"Now we have to set up the sample utterances for this intent. However, we will only set up one sample utterance, which is going to be the intent slot that we just created. The result of this step will be that whatever is uttered to the Alexa device, will be sent as a raw text to the backend. Type {RawTextData} in the field and press enter.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Kq4wSatBWxlW1612448343229.png",alt:null})),(0,a.kt)("ol",{start:17},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Your VUI is all set. It\u2019s now time to build the model that you\u2019ve just created. In the top menu, click \u201cBuild Model\u201d.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now that your model has been built, it\u2019s time to configure it with the backend. In the top menu, click \u201cConfiguration\u201d.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Go to "endpoint" option from menu. Choose HTTPS as Service Endpoint Type and enter the following URL in Default - ',(0,a.kt)("a",{parentName:"p",href:"https://cloud.yellowmessenger.com/integrations/alexa/getResponse"},"https://cloud.yellowmessenger.com/integrations/alexa/getResponse")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/VHhWC15.png",alt:null})),(0,a.kt)("ol",{start:20},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The same page also contains permissions below. If your skill requires the address of the device, check out the following resource - ",(0,a.kt)("a",{parentName:"p",href:"https://developer.amazon.com/docs/custom-skills/device-address-api.html"},"https://developer.amazon.com/docs/custom-skills/device-address-api.html"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"you need to set up the SSL Certificate settings. Choose the second option. As shown in image at point 19")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Your VUI is ready. Now it\u2019s time to link it to the backend chatbot. On the left menu, navigate to \u201cSkill Information. Copy the Application Id. (It may look like this - amzn1.ask.skill.111ffc3d-229f-46f7-b537-0c19bf89aca2) Open BotPlatform and navigate to the admin of the desired chatbot that you want to link. In the left menu, click on Channels. Choose Amazon Alexa Skill and paste the Alexa Skill ID that you had copied earlier.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Your Alexa skill is good to go. Play around. Have fun."))))}h.isMDXComponent=!0}}]);