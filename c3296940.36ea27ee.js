(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{329:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),o=(n(0),n(426)),l=["components"],c={title:"Google Chat",sidebar_label:"Google Chat"},b={unversionedId:"platform_concepts/channelConfiguration/googleChat",id:"platform_concepts/channelConfiguration/googleChat",isDocsHomePage:!1,title:"Google Chat",description:"Google Chat Channel Setup Help Doc",source:"@site/docs/platform_concepts/channelConfiguration/googleChat.md",slug:"/platform_concepts/channelConfiguration/googleChat",permalink:"/docs/platform_concepts/channelConfiguration/googleChat",version:"current",sidebar_label:"Google Chat",sidebar:"platform_concepts",previous:{title:"Google Assistant",permalink:"/docs/platform_concepts/channelConfiguration/google-assistant"},next:{title:"Google Business Messages (GBM)",permalink:"/docs/platform_concepts/channelConfiguration/google-message"}},p=[],s={toc:p};function i(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"google-chat-channel-setup-help-doc"},"Google Chat Channel Setup Help Doc"),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"introduction"},"Introduction")),Object(o.b)("hr",null),Object(o.b)("p",null,"This document will help you understand features and limitations of Google Chat channel, and guide you in setting up your own Google Chat chatbot on Yellow AI platform."),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"pre-requisites"},"Pre-requisites")),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Before setting up a chatbot:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developers.google.com/workspace/guides/create-project#create_a_new_google_cloud_platform_gcp_project"},"Create a new Google Cloud Platform (GCP) project")," if you don\u2019t have one.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/5209602D-6F58-4EC0-BEF5-2ED88C1BEE07_2/Screenshot%202021-12-09%20at%204.13.52%20PM.png",alt:"Screenshot 2021-12-09 at 4.13.52 PM.png"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Enable Service Account and Generate Keys:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In the navigation panel go to ",Object(o.b)("strong",{parentName:"li"},"IAM & Admin \u2192 Service Accounts"))))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/1AE5CCA9-077B-4A0C-B0DC-9FD8823B1091_2/Screenshot%202021-12-09%20at%204.21.32%20PM.png",alt:"Screenshot 2021-12-09 at 4.21.32 PM.png"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"On the next screen click on ",Object(o.b)("strong",{parentName:"li"},"+ CREATE SERVICE ACCOUNT"))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/3FCC51F4-550E-4324-AA24-36F103711F38_2/Screenshot%202021-12-09%20at%204.21.46%20PM.png",alt:"Screenshot 2021-12-09 at 4.21.46 PM.png"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add the Service Account Details in Step 1. Skip Step 2 & 3.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/770B11C7-1BDA-4AC3-B5B9-9EC74F6225DC_2/Screenshot%202021-12-09%20at%204.22.15%20PM.png",alt:"Screenshot 2021-12-09 at 4.22.15 PM.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/B33EE2E1-9FAD-411A-8A78-40FE2DB6D87D_2/Screenshot%202021-12-09%20at%204.22.28%20PM.png",alt:"Screenshot 2021-12-09 at 4.22.28 PM.png"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Once the service account is created, open it."),Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("strong",{parentName:"li"},"KEYS")," tab and click on ",Object(o.b)("strong",{parentName:"li"},"ADD KEY \u2192")," Create new key and select JSON. Please save this file carefully as this can not be recovered.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/3C8E7187-B6C4-48AD-997F-CB2734BE8AC2_2/Screenshot%202021-12-09%20at%204.37.47%20PM.png",alt:"Screenshot 2021-12-09 at 4.37.47 PM.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/97524A85-DDA8-4F58-8227-4CE5CCFFFEFD_2/Screenshot%202021-12-09%20at%204.38.05%20PM.png",alt:"Screenshot 2021-12-09 at 4.38.05 PM.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/A30EC30C-57F2-4900-8398-1BC81923DE5B_2/Screenshot%202021-12-09%20at%204.38.19%20PM.png",alt:"Screenshot 2021-12-09 at 4.38.19 PM.png"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Enable Google Chat API:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"In navigation go click on ",Object(o.b)("strong",{parentName:"li"},"APIs & Services"))))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/C7AAEBB4-7064-4865-941A-C9A480AE8BDE_2/Screenshot%202021-12-09%20at%204.18.05%20PM.png",alt:"Screenshot 2021-12-09 at 4.18.05 PM.png"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click on ",Object(o.b)("strong",{parentName:"li"},"+ ENABLE APIS AND SERVICES"))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/B7481934-6896-4B39-8A79-1893F7EB0C9F_2/Screenshot%202021-12-09%20at%204.18.20%20PM.png",alt:"Screenshot 2021-12-09 at 4.18.20 PM.png"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Search for ",Object(o.b)("strong",{parentName:"li"},"Google Chat API"))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/2BD3DF66-6CE9-4390-A0A1-BDAE4E4EA5A1_2/Screenshot%202021-12-09%20at%204.18.38%20PM.png",alt:"Screenshot 2021-12-09 at 4.18.38 PM.png"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Enable")," on Google Chat API:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Once enabled, go to ",Object(o.b)("strong",{parentName:"li"},"Configuration."))))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/C0DB5ACA-670F-4778-874B-41AC76472B5E_2/Screenshot%202021-12-09%20at%204.18.47%20PM.png",alt:"Screenshot 2021-12-09 at 4.18.47 PM.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/D47ABAAE-533B-4101-9ECB-F69264705E33_2/Screenshot%202021-12-09%20at%204.42.26%20PM.png",alt:"Screenshot 2021-12-09 at 4.42.26 PM.png"})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fill in all the details to configure your Google Chat Bot:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Please check both the options for ",Object(o.b)("strong",{parentName:"li"},"Functionality")),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("strong",{parentName:"li"},"Connection setting")," select \u201cBot URL\u201d and add the following:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("inlineCode",{parentName:"li"},"cloud.yellow.ai")," \u2192 ",Object(o.b)("inlineCode",{parentName:"li"},"https://cloud.yellow.ai/integrations/googleChat/receive/[BOT ID]")),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("inlineCode",{parentName:"li"},"app.yellowmessenger.com")," \u2192 ",Object(o.b)("inlineCode",{parentName:"li"},"https://app.yellowmessenger.com/integrations/googleChat/receive/[BOT ID]"))))))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/E4909823-7968-4FE2-9F76-06CE93A50BB2_2/Screenshot%202021-12-09%20at%204.43.47%20PM.png",alt:"Screenshot 2021-12-09 at 4.43.47 PM.png"})),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"channel-setup-on-yellowai-platform"},"Channel setup on yellow.ai platform")),Object(o.b)("hr",null),Object(o.b)("p",null,"1) To connect your Google Chat account, go to ",Object(o.b)("strong",{parentName:"p"},"Channels \u2192 Communication \u2192 Google Chat \u2192 Connect.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/52FFDE5A-4E81-4AE0-86F0-78383E741894_2/Screenshot%202021-12-10%20at%201.09.18%20PM.png",alt:"Screenshot 2021-12-10 at 1.09.18 PM.png"})),Object(o.b)("p",null,"2) Enter the ",Object(o.b)("strong",{parentName:"p"},"Client Email")," and ",Object(o.b)("strong",{parentName:"p"},"Private Key.")," You will find this in the JSON file you had downloaded earlier."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/722C1A3D-BC4D-438D-BDF0-D62850284AB0_2/Image.png",alt:"Image.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/88CCF5CF-BB04-4777-9032-B801146B9C0E_2/Image.png",alt:"Image.png"})),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/57CAC722-2F2F-4D02-A3B6-260C833E59FF_2/Image.png",alt:"Image.png"})),Object(o.b)("p",null,"3) Your Google Chat Channel should now be configured successfully!!"),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/F68A2ECF-346C-48C7-966A-C0775CAAFC46_2/Image.png",alt:"Image.png"})),Object(o.b)("blockquote",null,Object(o.b)("h2",{parentName:"blockquote",id:"supported-features"},"Supported Features")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Following variables are passed to the profile object and can be accessed using {{{profile.",Object(o.b)("strong",{parentName:"li"},"Variable"),"}}}:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"spaceId \u2192 This refers to the Google Chat space in which the user has messaged"),Object(o.b)("li",{parentName:"ul"},"displayName \u2192 This refers to the name of the Google Chat user"),Object(o.b)("li",{parentName:"ul"},"email \u2192 This refers to the email of the Google Chat user"),Object(o.b)("li",{parentName:"ul"},"thread \u2192 This refers to the thread in which the User has messaged"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developers.google.com/chat/api/guides/message-formats/events"},Object(o.b)("strong",{parentName:"a"},"Events")),Object(o.b)("strong",{parentName:"li"},":")," Upon successful configuration, the following events are auto-added to the Event Hub in yellow.ai platform:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"google_chat_added_to_space")," \u2192 Received when your Bot is added to a Space."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"google_chat_removed_from_space")," \u2192 Received when your Bot is removed from a Space."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Text Messages:")," Synchronous messages supported only."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Card Messages:")," This is ",Object(o.b)("strong",{parentName:"li"},"not supported")," right now.")))}i.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),i=s(n),f=a,g=i["".concat(l,".").concat(f)]||i[f]||u[f]||o;return n?r.a.createElement(g,c(c({ref:t},p),{},{components:n})):r.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);