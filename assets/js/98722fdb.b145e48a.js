"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[41158],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},52360:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],o={title:"How user records are created through conversations & unified in User 360?",sidebar_label:"How are user records created from conversations & unified in User 360"},d=void 0,l={unversionedId:"platform_concepts/engagement/cdp/user_data/data_capture_convers",id:"platform_concepts/engagement/cdp/user_data/data_capture_convers",title:"How user records are created through conversations & unified in User 360?",description:"This article provides complete information on how user records are automatically created in User 360 and unified based on bot conversations.",source:"@site/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers.md",sourceDirName:"platform_concepts/engagement/cdp/user_data",slug:"/platform_concepts/engagement/cdp/user_data/data_capture_convers",permalink:"/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers",draft:!1,tags:[],version:"current",frontMatter:{title:"How user records are created through conversations & unified in User 360?",sidebar_label:"How are user records created from conversations & unified in User 360"},sidebar:"platform_concepts",previous:{title:"Logic",permalink:"/docs/platform_concepts/studio/build/nodes/logic-nodes"},next:{title:"User identification flow",permalink:"/docs/platform_concepts/engagement/cdp/user_data/userid-flow"}},u={},p=[{value:"How are unidentified records auto-created from bot conversations?",id:"how-are-unidentified-records-auto-created-from-bot-conversations",level:2},{value:"What happens when a userId is captured for the first time?",id:"what-happens-when-a-userid-is-captured-for-the-first-time",level:2},{value:"When a new userId is captured",id:"when-a-new-userid-is-captured",level:3},{value:"When an existing userId is captured",id:"when-an-existing-userid-is-captured",level:3},{value:"Effects of merging on user properties",id:"effects-of-merging-on-user-properties",level:4},{value:"Scnerios where a user record with the same userId exists in User 360",id:"scnerios-where-a-user-record-with-the-same-userid-exists-in-user-360",level:4},{value:"What happens when the userId is recaptured?",id:"what-happens-when-the-userid-is-recaptured",level:2},{value:"When the recaptured userId does not exist",id:"when-the-recaptured-userid-does-not-exist",level:3},{value:"When the recaptured userId already exists",id:"when-the-recaptured-userid-already-exists",level:3}],c={toc:p};function h(e){var t=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article provides complete information on how user records are automatically created in User 360 and unified based on bot conversations."),(0,i.kt)("p",null,"Bot users are classified into the following categories:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Unidentified user - A user whose userId is not known or captured by the bot yet."),(0,i.kt)("li",{parentName:"ol"},"Identified user - A user whose userId has been captured by the bot.")),(0,i.kt)("h2",{id:"how-are-unidentified-records-auto-created-from-bot-conversations"},"How are unidentified records auto-created from bot conversations?"),(0,i.kt)("p",null,"When a user starts a conversation with the bot and starts capturing user properties, it automatically creates a new unidentified record in User 360. A record for which the userId is unknown is considered as an unidentified record. The ongoing session is always mapped to the record in user 360 and user properties captured will be stored in that record."),(0,i.kt)("p",null,"   ",(0,i.kt)("img",{src:r(7222).Z,width:"2880",height:"1430"})),(0,i.kt)("p",null,"   ",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/3nMWou9.png",alt:null})),(0,i.kt)("p",null,"The following table summarizes the behavior of userId capturing in User 360."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"#what-happens-when-a-userid-is-captured-for-the-first-time"},"UserId captured for the first time")),(0,i.kt)("th",{parentName:"tr",align:null},"Effect"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#when-a-new-userid-is-captured"},"userId is new")),(0,i.kt)("td",{parentName:"tr",align:null},"The current session record will be updated with the provided ",(0,i.kt)("inlineCode",{parentName:"td"},"userId")," without altering the details captured during the session.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#when-an-existing-userid-is-captured"},"userId exists")),(0,i.kt)("td",{parentName:"tr",align:null},"The mapping switches to the existing record, and any new properties captured during the session are merged.")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"#what-happens-when-the-userid-is-recaptured"},"UserId recaptured")),(0,i.kt)("th",{parentName:"tr",align:null},"Effect"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#when-the-recaptured-userid-does-not-exist"},"userId is new")),(0,i.kt)("td",{parentName:"tr",align:null},"A new record is created using the provided ",(0,i.kt)("inlineCode",{parentName:"td"},"userId"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#when-the-recaptured-userid-already-exists"},"userId exists")),(0,i.kt)("td",{parentName:"tr",align:null},"The mapping switches to the respective record.")))),(0,i.kt)("h2",{id:"what-happens-when-a-userid-is-captured-for-the-first-time"},"What happens when a userId is captured for the first time?"),(0,i.kt)("p",null,"In a bot conversation, a user is identified through the userId and can be captured through ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"Prompt")," or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables"},"Variables")," nodes. A userId is a unique indetifier such as mobile number, email address, or any other identifier such as driving livence number. "),(0,i.kt)("p",null,"For more information, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.aidocs/platform_concepts/engagement/cdp/user_data/userid-flow"},"how to capture userId through bot conversations"),"."),(0,i.kt)("p",null,"The following sections explain how the current record is affected based on the provided userId."),(0,i.kt)("h3",{id:"when-a-new-userid-is-captured"},"When a new userId is captured"),(0,i.kt)("p",null,"If the provided userId does not exist in User 360, the current record will be updated with the userId without affecting the details captured during the session."),(0,i.kt)("img",{src:"https://i.imgur.com/kWWhX4m.png",width:"90%"}),(0,i.kt)("h3",{id:"when-an-existing-userid-is-captured"},"When an existing userId is captured"),(0,i.kt)("p",null,"If the provided userId already exists, it switches the mapping to the existing record and merges new details, without overriding the existing data. It then deletes the unidentified record."),(0,i.kt)("p",null,"These are the steps that take place:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It ",(0,i.kt)("strong",{parentName:"p"},"Switches")," to the existing record."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/OZU7XCI.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It then ",(0,i.kt)("strong",{parentName:"p"},"Merges")," the details that are not available in the existing record. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"#effect-of-merging-on-user-properties"},"Effects of merging on user properties"),"."),(0,i.kt)("center",null,(0,i.kt)("img",{src:"https://i.imgur.com/p9cDdHl.png",width:"90%"})))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"It deletes the unidentified record after merging. However, if either country or timezone is already captured in the existing record, no changes will be made to both the values as shown in the following."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/68MCC0a.png",alt:null})))),(0,i.kt)("h4",{id:"effects-of-merging-on-user-properties"},"Effects of merging on user properties"),(0,i.kt)("p",null," The following are the effects of account merging:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/hqybAgj.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Properties with single values"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The user properties that are not present in the identified record will be obtained from the unidentified record. For example, refer to ",(0,i.kt)("inlineCode",{parentName:"li"},"WhatsAppOptIn"),"."),(0,i.kt)("li",{parentName:"ul"},"User properties that already exist in the identified record will be ignored and no changes will be made to them. For example, ",(0,i.kt)("inlineCode",{parentName:"li"},"firstName")," in the above table."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Auto-captured property values"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the existing record has blank values, the country and timezone in the existing record will be updated with the auto-captured values."),(0,i.kt)("li",{parentName:"ul"},"If the existing record has some value for timezone or country, the system will skip those values without making any changes. "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Properties with list values"),": These values will be unified. Example: ",(0,i.kt)("inlineCode",{parentName:"li"},"labels")," in the above table."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Unidentified record")," will be deleted post-merging.")),(0,i.kt)("h4",{id:"scnerios-where-a-user-record-with-the-same-userid-exists-in-user-360"},"Scnerios where a user record with the same userId exists in User 360"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The client created the user record via CSV import or API."),(0,i.kt)("li",{parentName:"ul"},"The same user was already identified once on a different channel.")),(0,i.kt)("h2",{id:"what-happens-when-the-userid-is-recaptured"},"What happens when the userId is recaptured?"),(0,i.kt)("p",null,"There could be cases when a userId is recaptured. For example, the user logs out and logs in again or when the user whats interacts with the bot with a different userId."),(0,i.kt)("h3",{id:"when-the-recaptured-userid-does-not-exist"},"When the recaptured userId does not exist"),(0,i.kt)("p",null,"The chatbot will create a new record with the provided userId. This means that the chatbot will treat the user as a new user and will not have access to any previous information or conversation history associated with that user. However, the chatbot can still capture new information about the user's preferences and behavior going forward, which can be used to personalize future interactions."),(0,i.kt)("p",null,"   ",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/pPxBuhn.png",alt:null})),(0,i.kt)("h3",{id:"when-the-recaptured-userid-already-exists"},"When the recaptured userId already exists"),(0,i.kt)("p",null,"When a user provides a new userId that already exists in User 360, the chatbot will switch the current record mapping to the respective record that already exists. It uses information associated with that userId to personalize conversations."),(0,i.kt)("p",null,"   ",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Ew2Efrb.png",alt:null})))}h.isMDXComponent=!0},7222:function(e,t,r){t.Z=r.p+"assets/images/userrecord_blank-20533c53186354cee7f232ddbd129673.png"}}]);