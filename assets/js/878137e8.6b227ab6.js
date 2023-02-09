"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[9488],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24216:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],r={title:"Message Nodes",sidebar_label:"Messages"},l=void 0,p={unversionedId:"platform_concepts/studio/build/nodes/message-nodes",id:"platform_concepts/studio/build/nodes/message-nodes",title:"Message Nodes",description:"Message nodes are one-way communication nodes which can be used when the bot has to display information to the user without expecting or taking any response.",source:"@site/docs/platform_concepts/studio/build/nodes/message-nodes.md",sourceDirName:"platform_concepts/studio/build/nodes",slug:"/platform_concepts/studio/build/nodes/message-nodes",permalink:"/docs/platform_concepts/studio/build/nodes/message-nodes",draft:!1,tags:[],version:"current",frontMatter:{title:"Message Nodes",sidebar_label:"Messages"},sidebar:"platform_concepts",previous:{title:"Prompts",permalink:"/docs/platform_concepts/studio/build/nodes/prompt-nodes"},next:{title:"Actions",permalink:"/docs/platform_concepts/studio/build/nodes/action-nodes"}},c={},d=[{value:"1. Text",id:"1-text",level:2},{value:"2. Image",id:"2-image",level:2},{value:"3. Carousel",id:"3-carousel",level:2},{value:"4. Video",id:"4-video",level:2},{value:"5. File",id:"5-file",level:2},{value:"6. Quick Replies",id:"6-quick-replies",level:2},{value:"7. WhatsApp List",id:"7-whatsapp-list",level:2},{value:"8. WhatsApp product message",id:"8-whatsapp-product-message",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Message nodes are one-way communication nodes which can be used when the bot has to display information to the user without expecting or taking any response.\nYou can ",(0,i.kt)("strong",{parentName:"p"},"randomize")," the node text and add a ",(0,i.kt)("strong",{parentName:"p"},"delay")," to each node.  "),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Randomization")),(0,i.kt)("p",null,"The nodes which have an option to ask the users a question/ display a text are enabled with ",(0,i.kt)("strong",{parentName:"p"},"Randomization")," feature. On any such node, click ",(0,i.kt)("strong",{parentName:"p"},"Add multiple text for randomizing"),". Enter variations of text that you want your users to see. This feature will display different messages to the user in a random order (instead of the same message every time) making the conversation more humanly. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/k4kQYfg.png",alt:null}))),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configure text displayed on the bot")),(0,i.kt)("p",null,"To know more about how to configure the text, click ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/studio/text-format"},"here"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Delay")),(0,i.kt)("p",null,"You can set a delay in displaying each of these nodes. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/t7Z5eb7.jpg",alt:null})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Alternative to this is to use a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#16-delay"},"delay node"),".")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Given below is a flow created using message nodes to brief the users ",(0,i.kt)("strong",{parentName:"p"},"about a coffee company"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/N8iN11b.jpg",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Message nodes are used only for interactive purpose, you cannot do anything else apart from displaying text/video/image etc. (along with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#hed-1"},"variables"),") You cannot use auto complete and other features from ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#3-make-prompt-smarter"},"here")," and you cannot store the user responses because these nodes are not designed to fetch user responses.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Following are the different types of message nodes: "),(0,i.kt)("h2",{id:"1-text"},"1. Text"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This node is available for voice bots. ")),(0,i.kt)("p",null,"Display a simple text with this node.  "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This node can be used to follow up with most of the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"prompt")," nodes. ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/KwvAAwd.jpg",alt:null})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"2-image"},"2. Image"),(0,i.kt)("p",null,"Display any image (less than 10MB) with this node."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/NuHZKEb.jpg",alt:null})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"3-carousel"},"3. Carousel"),(0,i.kt)("p",null,"Display information using a carousel card with this node."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"These Carousel buttons do not perform any further action, nor the response can be stored in a variable. ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/2iS11MA.png",alt:null})),(0,i.kt)("p",null,"To disable the carousel list after a button has been clicked, "),(0,i.kt)("p",null,"Go to the Carousel node and click the ",(0,i.kt)("strong",{parentName:"p"},"settings")," icon."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/XnzkjGq.png",alt:null})),(0,i.kt)("p",null,"Enable ",(0,i.kt)("strong",{parentName:"p"},"Disable action after click")," and click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/0jQjuQp.png",alt:null})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"4-video"},"4. Video"),(0,i.kt)("p",null,"Display any MP4 video file with this node."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the tools(channel option) symbol available below the node name.  "),(0,i.kt)("li",{parentName:"ul"},"Enable autoplay, show controls and downloadable options to improve the video viewing experience. ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/qxdhtox.jpg",alt:null})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"5-file"},"5. File"),(0,i.kt)("p",null,"Display a file of the most common extension (JPG, JPEG, MP3, MP4, CSV, PDF, Doc, Docx, Txt, HTML, PPT, PPTX, etc.) with this node. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/jmqJpC8.jpg",alt:null})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"6-quick-replies"},"6. Quick Replies"),(0,i.kt)("p",null,"Display a question along with quick reply buttons with this node."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unlike the Quick Replies Prompt node, a fallback message need not be configured to this nor this node is expected to follow another node.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/swL8R0v.png",alt:null})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can send files, images and videos either by uploading them in the node or by fetching the link to it from a variable.")),(0,i.kt)("p",null,"Variable format: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  [\n   {\n    "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRqBmDVlOF8jpQbmAcAglnp7Bxggt1JzZEw&usqp=CAU",\n    "options":\n     {\n     "caption":"kohli"\n     }\n   }\n  ]\n')),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Fetch from")," and add a dynamic value - if required:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "title": [\n    "Select an option",\n    "Pick an option"\n  ],\n  "options": [\n    {\n      "text": "cold drink",\n      "title": "Cold Drink",\n      "advancedSettings": true,\n      "aliases": [\n        "coke",\n        "soft drink"\n      ],\n      "url": "https://www.tasty-food.com",\n      "postback": "post-back",\n      "image": "https://cdn.abc.com/coke-img.jpeg",\n      "textColor": "#4384f5",\n      "backgroundColor": "#FFFF",\n      "id": "quick_01d78e38b44e1915",\n      "analytics": {\n        "aevent": "test-analytics"\n      }\n    },\n    {\n      "text": "",\n      "title": "Btn #2",\n      "advancedSettings": false,\n      "id": "quick_d9eda393404266d4"\n    },\n    {\n      "text": "",\n      "title": "Btn #3",\n      "advancedSettings": false,\n      "id": "quick_39563a54f6889f4d"\n    }\n  ]\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"7-whatsapp-list"},"7. WhatsApp List"),(0,i.kt)("p",null,"Configure lists displayed on the WhatsApp channel with this node. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"}," This node does not expect any user reply, hence the fallback message need not be configured nor this node is expected to follow another node. It simply displays the list values. This node is used for the interactive purposes only. ")),(0,i.kt)("p",null,"Whatsapp API provides a better UI for businesses to send List items (within 24 hours window).\nTo create a Whatsapp List:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select Whatsapp List under Prompt Nodes."),(0,i.kt)("li",{parentName:"ul"},"Edit Body Message, Footer, Section Title and Button Title/Name and list.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/vmDdimd.png",alt:null})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Fetch from")," and add a dynamic value - if required: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "title": "Please select your preferred slot for Appointment",\n  "optionText": "Appointment Slots",\n  "options": [\n    {\n      "section": "June 5, 2021",\n      "options": [\n        {\n          "title": "9am-11am",\n          "text": "5.9-5",\n          "description": "General Medicine"\n        },\n        {\n          "title": "12pm-2pm",\n          "text": "5.12-2",\n          "description": "Orthopedic"\n        },\n        {\n          "title": "2pm-4pm",\n          "text": "5.2-4",\n          "description": "Physiotherapy"\n        }\n      ]\n    },\n    {\n      "section": "June 6, 2021",\n      "options": [\n        {\n          "title": "9am-11am",\n          "text": "6.9-5",\n          "description": "General Medicine"\n        },\n        {\n          "title": "12pm-2pm",\n          "text": "6.12-2",\n          "description": "Orthopedic"\n        },\n        {\n          "title": "2pm-4pm",\n          "text": "6.2-4",\n          "description": "Physiotherapy"\n        }\n      ]\n    },\n    {\n      "section": "June 7, 2021",\n      "options": [\n        {\n          "title": "9am-11am",\n          "text": "7.9-5",\n          "description": "General Medicine"\n        },\n        {\n          "title": "12pm-2pm",\n          "text": "7.12-2",\n          "description": "Orthopedic"\n        },\n        {\n          "title": "2pm-4pm",\n          "text": "7.2-4",\n          "description": "Physiotherapy"\n        }\n      ]\n    }\n  ],\n  "footer": "Please follow Covid Guideline while consulting."\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Limitations")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maximum of 10 Buttons can be added. Multiple buttons cannot be selected in one go and are not supported in notifications."),(0,i.kt)("li",{parentName:"ul"},"Character limit of Body is 1024."),(0,i.kt)("li",{parentName:"ul"},"Character limit of Footer is 60."),(0,i.kt)("li",{parentName:"ul"},"Character limit of Button Text and Response is 24."),(0,i.kt)("li",{parentName:"ul"},"Section Title and List Headers are optional.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"}," Click the tools icon and configure the node. For more details, see ","[Nodes]","(",(0,i.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes"},"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes"),". ")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configure text displayed on the bot")),(0,i.kt)("p",null,"To beautify the text you enter in the field -",(0,i.kt)("strong",{parentName:"p"},"bot says")," you can add the following. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'1. Web (use HTML tags)\n\n  - Bold: <strong> baggage </strong> \n  - Italics: <i> italics </i> \n  - Hyperlink: <a href="google.com"> Google </a> \n\n2. Whatsapp \n\n  - Bold: Message *- \n  - Italics: _ Message _ \n')),(0,i.kt)("h2",{id:"8-whatsapp-product-message"},"8. WhatsApp product message"),(0,i.kt)("p",null,"This section helps you create a WhatsApp product messaging journey with a sample use case."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/cIVo56o.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisites")," - "),(0,i.kt)("p",null,"The following are the prerequisites to create a catalog journey - "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fill the Compliance information on the ",(0,i.kt)("em",{parentName:"li"},"Channel")," configuration page (Not required for WABA hosted on Cloud API)."),(0,i.kt)("li",{parentName:"ol"},"Fill the Catalog with the required details as discussed earlier (Mandatory)."),(0,i.kt)("li",{parentName:"ol"},"Connect the catalog to the WABA as discussed earlier."),(0,i.kt)("li",{parentName:"ol"},"Add the products from the Catalog to the Bot DB to use them while sending SPM/MPM.")),(0,i.kt)("p",null,"To create a catalog journey, follow these steps - "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use the same CSV used on the Catalog Manager to fill the Bot DB. You can create a DB Table with the same headers as the Data Feed Sheet and use it to upload all the products on the DB")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"There is one limitation on Cloud DB Table creation which doesn\u2019t lets you to create a table column name with the header as ID due to the min character required for a header. You have to keep a copy of the original Feed Sheet with the header as IDS and use it to upload to DB.")),(0,i.kt)("p",null,"Here is the screenshot of a sample CSV file."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfktJE4vn1LWBNwk843DQAoyX1b6zG3iRFcoKmicwyKhFt1ekgEaMrkaTWAXFfALWGfdaVc3RHujJEMAZswM7v231h1CtXDz5og5MwALtz2PEug4xqgEXABuDQBkFdghct2jVP2ZoMuCcoS3e5ZWefUqfTsG/Image.jpg",alt:null})),(0,i.kt)("p",null,"It appears in the Database as shown here.\n",(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkf7c28AhauJGr4SMiysKKMeabHngvRHjiass3eBGBTccSx3Z1jcAjG1RyZCEjZbMfwp6wg9EheTLkn6tAzm2Y8Gf2NwmMZg9vHk7TS6WNbSz9i9GUcyhf6poQsK9DmRi6RLnJJVEH6k6HaGkz5BnFhA3Vo/Image.jpg",alt:null})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Once the DB is ready you can query products based on the Category/Title. Using the Variable node, you can dynamically fetch the product IDS and pass them to the SPM/MPM nodes to send message to users.")),(0,i.kt)("p",null,"Here is a sample journey configuration screenshots - "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfm1eDf9ABao1h8fnSDmPoasJjBnDejx5GjqJrM8sHMfnxSNzDFVG4uttJkpW99cJHSCQgQ1aWvEbeXvjEoPNWK2Xk7kH1kYptDe2yybNYLdf4m4jKCsU3WqzdaB7P3ph6KyZKMRJegM1mNebLZN3ZxB5BKZ/Image.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmBxak347sZVdEcGpJQnWzAxDpN5LtpkBsMJrUqJBVCCcYCk7LNm1Nc9Vw4yG2CjwqTf4jv24mB5iZhW6UEG8T6um6nmGYPdmB75qELen8x4R8DqZ9y5brSDWSMqaYAmywc7xPbDCyS5hFhWqWTpdVTWh3V/Image.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkovdq7cZdAVmCphzgXMuDtFuv2oey5d3esZ3v5fW1xHJsbm4hM3cdyzb3Mre2ewALHBXfhwAsFPjvK5ECnVwVJBrFF5sCCFjdsFjwfT9p3FmxMGCEic8yjsT8EkqnN1AG7dEjie1at7td9f5o6qr4Qi7H3/Image.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkhmSHKziMNo7CJeHaQUnZWW4SU7ceQute1dTJDpTX6rPHgf2T84B3aZorh2J1XgfWcBKbVP5i1e98ghw39f2GVdb2jdijYUnCQrJsRe1RUkYFQwwUcLrsZdYYFMfYJvcwqAN2NwnVUPJADBHaZHFQzubHm/Image.jpg",alt:null})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In the above step we have seen how a product can be fetch based on deifferent condition and can be used as an SPM. Now we will go through the step of how we can handle the Cart events which comes to the bot once the user decides to purchase the product.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Purchase flow of an end-user"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"User receives the SPM on WhatsApp"),(0,i.kt)("li",{parentName:"ol"},"User views the products and decides to purchase it"),(0,i.kt)("li",{parentName:"ol"},"User clicks on Add to Cart button and selects the quantity to purchase"),(0,i.kt)("li",{parentName:"ol"},"The Product gets added with the quantity selected by the user"),(0,i.kt)("li",{parentName:"ol"},"User send the cart to the Business")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Incase of invalid or rejected ProductID or ContentID passed on the node the message/product will not be sent to the user.")),(0,i.kt)("p",null,"Once the user sends the cart, the products from the users Cart will be removed and will be sent to the Business as an events on the Bot. to recieve the Cart Event its required to enable it from the Event Hub"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkxJeooqj886spjGBpqA68UNcEvVx5FXGCYb2wp7dxtbG9m3Dgpgmzy9GudbTXK8uA1JXm16jKTDE6jaix5pBZftNZ3Pvh3oPhC9HkFnpLSsSHJmnvv581GuMAfUzTcmdLWpQjfros4DqqoDrGk3rRdq9qP/Image.jpg",alt:null})),(0,i.kt)("p",null,"This event will contain the below Data in the backend which can be used for further information required on the bot to be processed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "event",\n  "event": {\n    "code": "whatsapp-cart",\n    "data": {\n      "order": {\n        "catalog_id": "619431863167996",\n        "product_items": [\n          {\n            "currency": "INR",\n            "item_price": 55,\n            "product_retailer_id": "YM012",\n            "quantity": 3\n          }\n        ],\n        "text": "I want to buy this"\n      }\n    }\n  }\n}\n')),(0,i.kt)("p",null,"You can handle this event using a journey to carry out the next steps of the buying journey for the user as shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmMZnxd9TZ5Uy82euZXsv5KEXjambLofoHEkEdFhStUQzSWirJaXLdDZ3xKuHX8cBDhN2aECxLzPrrLxVX1PoBNpBnLutzYt5vYXGsXdbaUJN37sdWjiqpbHcdbvtpjgXvG1vYPVyrhZCaDDoUDwdJPFLHh/Image.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkbaaHAPRWZDbniK88mvqZhcRk823WjzNi31VjvC39PTK9xFqjbPAviWDLwWTe5hdtgUbQS2M5FtGX9z1cS4x3teZDpRd1cXEHttwEKjRy55BZJT6uc7YRMb7ym55BZPzZtQeFedfeLayEA2AumEHEcGDgz/Image.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfm7mos43J98Ex4czeVTuUQXZozjan4vAZQkybF5MpDPguAnsAPZ7RT23SzEpCHGMS4RR9LUHVFoFrwq2d3CPn7qoi4CwDe8GHCntRtDwEVtWWR3pm9K33Shi4VSATJiBwjF3v3DcGNdpF6tArZ8brbcvrmQ/Image.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkztavgtCYywBACEY5HRyKAJDRzybPJj3AFqcQNMZJUVaUPYDxtv1rQsyj3LMRuVs5qaPk53bp6SE5GcSw9rAWQMwb38Wd6NzjSD2rv4TfKUoQoDtbCgGLrAYsZaKpHQ2awXHNqK1jMSEQG278bd3eBZEkD/Image.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfm4KQDAm34rkXbz1fKKaw2Y1gr3LdtKX6gGCjtTHSASgFfweBsEeVwjsSNGF5p6SR2AV9Wqw3qQPUo5wxf2A2Y7Ac4tEkqZVmj73TSoCRGDKi4M9evAGsxmBvpMtJSLspF73ib9npa8K6SVQsfqoqMhgJfw/Image.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmHHPievXu1X8Qk2iP8HegpWun5GMj8ZqpYKLsifTBLzzqYQycjFEkHjK6uLS6KwLnHFgD8bAUmAeXAvkTKAQCKZrXKFs4kyYGy6JNKj4BXxrjCJ7M7KytztWQBcim6aHkgPSkc8fC1FkvuNV4B5CQ9aw3y/Image.jpg",alt:null})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"There is also another type of event which can be configured for the Message Business option which the user can choose which we be sent back to the bot as a normal msg or can be fetched as an event as well to understand the context of the Product for which the message has been sent.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmNJL9wfkW5hC3z4pk1oFhjAUfdeFzEtZGD3g6dxz9BRwu5iqfX594rr9uTpyguRNHGQ7iKid5FKJMFeJ6nANvncEaSMezx1XPyQhZ2dpLvpk7CCVX4QiCnSh9ZVkYYEVTcsTwrnTuKfr32Hpb6chFpvmcF/Image.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkcfYd6DU4oUGwYZvCQSpDgiGJCZKoa3NmxoXdnhxu35pY9fnaACj453GPhhUu1A2p3fTkJ3NzKqAPFkhGBgvvQbw5BimA4fNfAbo7eHZ3DVQLwuGZv7D1AagypJTMwHteTwHjLjYoDZ5T2Rxfy9uSBHDpU/Image.jpg",alt:null})),(0,i.kt)("p",null,"Ideally, it is suggested to have a human agent routing available to help users in case of queries related to the product or can be handled using NLP as well."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Message Business will send both the message and the event to the bot if the event is active on the Event Hub. Incase the event is disabled the message can be handled using NLP and no event will be sent to the bot for getting the context of the product query.")),(0,i.kt)("p",null,"The event will be as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "event",\n  "event": {\n    "code": "whatsapp-product-query",\n    "data": {\n      "context": {\n        "referred_product": {\n          "catalog_id": "619431863167996",\n          "product_retailer_id": "YM012"\n        }\n      },\n      "from": "919999999999",\n      "id": "ABEGkYcjBiJlAgo-sDGvi1C_TNRG",\n      "text": {\n        "body": "Whats the expiry date of the product?"\n      },\n      "timestamp": "1664561602",\n      "type": "text"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"This completes the Bot Flow for the SPM/MPM Feature to be handled for a basic Commerce Flow."),(0,i.kt)("p",null,"These flows can be also created with other complex use cases with live agent support for better user experince when the buyer wants to get consulatation or get more info on the product before purchasing."))}m.isMDXComponent=!0}}]);