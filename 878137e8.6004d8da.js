(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{281:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),i=(n(0),n(465)),c=["components"],s={title:"Message Nodes",sidebar_label:"Messages"},r={unversionedId:"platform_concepts/studio/build/nodes/message-nodes",id:"platform_concepts/studio/build/nodes/message-nodes",isDocsHomePage:!1,title:"Message Nodes",description:"Message nodes are one-way communication nodes which can be used when the bot has to display information to the user without expecting or taking any response.",source:"@site/docs/platform_concepts/studio/build/nodes/message-nodes.md",slug:"/platform_concepts/studio/build/nodes/message-nodes",permalink:"/docs/platform_concepts/studio/build/nodes/message-nodes",version:"current",sidebar_label:"Messages",sidebar:"platform_concepts",previous:{title:"Prompt Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/prompt-nodes"},next:{title:"Action Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/action-nodes"}},l=[{value:"1. Text",id:"1-text",children:[]},{value:"2. Image",id:"2-image",children:[]},{value:"3. Carousel",id:"3-carousel",children:[]},{value:"4. Video",id:"4-video",children:[]},{value:"5. File",id:"5-file",children:[]},{value:"6. Quick Replies",id:"6-quick-replies",children:[]},{value:"7. WhatsApp List",id:"7-whatsapp-list",children:[]},{value:"8. WhatsApp product message",id:"8-whatsapp-product-message",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,c);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Message nodes are one-way communication nodes which can be used when the bot has to display information to the user without expecting or taking any response.\nYou can ",Object(i.b)("strong",{parentName:"p"},"randomize")," the node text and add a ",Object(i.b)("strong",{parentName:"p"},"delay")," to each node. "),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Randomization")),Object(i.b)("p",null,"The nodes which have an option to ask the users a question/ display a text are enabled with ",Object(i.b)("strong",{parentName:"p"},"Randomization")," feature. On any such node, click ",Object(i.b)("strong",{parentName:"p"},"Add multiple text for randomizing"),". Enter variations of text that you want your users to see. This feature will display different messages to the user in a random order (instead of the same message every time) making the conversation more humanly. "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/k4kQYfg.png",alt:null}))),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configure text displayed on the bot")),Object(i.b)("p",null,"To know more about how to configure the text, click ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/studio/text-format/"},"here"),"."),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Delay")),Object(i.b)("p",null,"You can set a delay in displaying each of these nodes. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/t7Z5eb7.jpg",alt:null})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"}," Alternative to this is to use a ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#16-delay"},"delay node"),"."))),Object(i.b)("hr",null),Object(i.b)("p",null,"Given below is a flow created using message nodes to brief the users ",Object(i.b)("strong",{parentName:"p"},"about a coffee company"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/N8iN11b.jpg",alt:null})),Object(i.b)("hr",null),Object(i.b)("p",null,"Following are the different types of message nodes: "),Object(i.b)("h2",{id:"1-text"},"1. Text"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This node is available for voice bots. ")),Object(i.b)("p",null,"Display a simple text with this node.  "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This node can be used to follow up with most of the ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"prompt")," nodes. ")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/KwvAAwd.jpg",alt:null})),Object(i.b)("hr",null),Object(i.b)("h2",{id:"2-image"},"2. Image"),Object(i.b)("p",null,"Display any image (less than 10MB) with this node."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/NuHZKEb.jpg",alt:null})),Object(i.b)("hr",null),Object(i.b)("h2",{id:"3-carousel"},"3. Carousel"),Object(i.b)("p",null,"Display information using a carousel card with this node."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"These Carousel buttons do not perform any further action, nor the response can be stored in a variable. ")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/2iS11MA.png",alt:null})),Object(i.b)("hr",null),Object(i.b)("h2",{id:"4-video"},"4. Video"),Object(i.b)("p",null,"Display any MP4 video file with this node."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click the tools(channel option) symbol available below the node name.  "),Object(i.b)("li",{parentName:"ul"},"Enable autoplay, show controls and downloadable options to improve the video viewing experience. ")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/qxdhtox.jpg",alt:null})),Object(i.b)("hr",null),Object(i.b)("h2",{id:"5-file"},"5. File"),Object(i.b)("p",null,"Display a file of the most common extension (JPG, JPEG, MP3, MP4, CSV, PDF, Doc, Docx, Txt, HTML, PPT, PPTX, etc.) with this node. "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/jmqJpC8.jpg",alt:null})),Object(i.b)("hr",null),Object(i.b)("h2",{id:"6-quick-replies"},"6. Quick Replies"),Object(i.b)("p",null,"Display a question along with quick reply buttons with this node."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Unlike the Quick Replies Prompt node, a fallback message need not be configured to this nor this node is expected to follow another node.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/swL8R0v.png",alt:null})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can send files, images and videos either by uploading them in the node or by fetching the link to it from a variable.")),Object(i.b)("p",null,"Variable format: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'  [\n   {\n    "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRqBmDVlOF8jpQbmAcAglnp7Bxggt1JzZEw&usqp=CAU",\n    "options":\n     {\n     "caption":"kohli"\n     }\n   }\n  ]\n')),Object(i.b)("p",null,"Click ",Object(i.b)("strong",{parentName:"p"},"Fetch from")," and add a dynamic value - if required:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "title": [\n    "Select an option",\n    "Pick an option"\n  ],\n  "options": [\n    {\n      "text": "cold drink",\n      "title": "Cold Drink",\n      "advancedSettings": true,\n      "aliases": [\n        "coke",\n        "soft drink"\n      ],\n      "url": "https://www.tasty-food.com",\n      "postback": "post-back",\n      "image": "https://cdn.abc.com/coke-img.jpeg",\n      "textColor": "#4384f5",\n      "backgroundColor": "#FFFF",\n      "id": "quick_01d78e38b44e1915",\n      "analytics": {\n        "aevent": "test-analytics"\n      }\n    },\n    {\n      "text": "",\n      "title": "Btn #2",\n      "advancedSettings": false,\n      "id": "quick_d9eda393404266d4"\n    },\n    {\n      "text": "",\n      "title": "Btn #3",\n      "advancedSettings": false,\n      "id": "quick_39563a54f6889f4d"\n    }\n  ]\n}\n')),Object(i.b)("hr",null),Object(i.b)("h2",{id:"7-whatsapp-list"},"7. WhatsApp List"),Object(i.b)("p",null,"Configure lists displayed on the WhatsApp channel with this node. "),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"}," This node does not expect any user reply, hence the fallback message need not be configured nor this node is expected to follow another node. It simply displays the list values. This node is used for the interactive purposes only. "))),Object(i.b)("p",null,"Whatsapp API provides a better UI for businesses to send List items (within 24 hours window).\nTo create a Whatsapp List:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select Whatsapp List under Prompt Nodes."),Object(i.b)("li",{parentName:"ul"},"Edit Body Message, Footer, Section Title and Button Title/Name and list.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/vmDdimd.png",alt:null})),Object(i.b)("p",null,"Click ",Object(i.b)("strong",{parentName:"p"},"Fetch from")," and add a dynamic value - if required: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "title": "Please select your preferred slot for Appointment",\n  "optionText": "Appointment Slots",\n  "options": [\n    {\n      "section": "June 5, 2021",\n      "options": [\n        {\n          "title": "9am-11am",\n          "text": "5.9-5",\n          "description": "General Medicine"\n        },\n        {\n          "title": "12pm-2pm",\n          "text": "5.12-2",\n          "description": "Orthopedic"\n        },\n        {\n          "title": "2pm-4pm",\n          "text": "5.2-4",\n          "description": "Physiotherapy"\n        }\n      ]\n    },\n    {\n      "section": "June 6, 2021",\n      "options": [\n        {\n          "title": "9am-11am",\n          "text": "6.9-5",\n          "description": "General Medicine"\n        },\n        {\n          "title": "12pm-2pm",\n          "text": "6.12-2",\n          "description": "Orthopedic"\n        },\n        {\n          "title": "2pm-4pm",\n          "text": "6.2-4",\n          "description": "Physiotherapy"\n        }\n      ]\n    },\n    {\n      "section": "June 7, 2021",\n      "options": [\n        {\n          "title": "9am-11am",\n          "text": "7.9-5",\n          "description": "General Medicine"\n        },\n        {\n          "title": "12pm-2pm",\n          "text": "7.12-2",\n          "description": "Orthopedic"\n        },\n        {\n          "title": "2pm-4pm",\n          "text": "7.2-4",\n          "description": "Physiotherapy"\n        }\n      ]\n    }\n  ],\n  "footer": "Please follow Covid Guideline while consulting."\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Limitations")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Maximum of 10 Buttons can be added. Multiple buttons cannot be selected in one go and are not supported in notifications."),Object(i.b)("li",{parentName:"ul"},"Character limit of Body is 1024."),Object(i.b)("li",{parentName:"ul"},"Character limit of Footer is 60."),Object(i.b)("li",{parentName:"ul"},"Character limit of Button Text and Response is 24."),Object(i.b)("li",{parentName:"ul"},"Section Title and List Headers are optional.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"}," Click the tools icon and configure the node, click ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes/#3-configure-display"},"here")," to learn more. "))),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Configure text displayed on the bot")),Object(i.b)("p",null,"To beautify the text you enter in the field -",Object(i.b)("strong",{parentName:"p"},"bot says")," you can add the following. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'1. Web (use HTML tags)\n\n  - Bold: <strong> baggage </strong> \n  - Italics: <i> italics </i> \n  - Hyperlink: <a href="google.com"> Google </a> \n\n2. Whatsapp \n\n  - Bold: Message *- \n  - Italics: _ Message _ \n')),Object(i.b)("h2",{id:"8-whatsapp-product-message"},"8. WhatsApp product message"),Object(i.b)("p",null,"This section helps you create a WhatsApp product messaging journey with a sample use case."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/cIVo56o.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Prerequisites")," - "),Object(i.b)("p",null,"The following are the prerequisites to create a catalog journey - "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Fill the Compliance information on the ",Object(i.b)("em",{parentName:"li"},"Channel")," configuration page (Not required for WABA hosted on Cloud API)."),Object(i.b)("li",{parentName:"ol"},"Fill the Catalog with the required details as discussed earlier (Mandatory)."),Object(i.b)("li",{parentName:"ol"},"Connect the catalog to the WABA as discussed earlier."),Object(i.b)("li",{parentName:"ol"},"Add the products from the Catalog to the Bot DB to use them while sending SPM/MPM.")),Object(i.b)("p",null,"To create a catalog journey, follow these steps - "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Use the same CSV used on the Catalog Manager to fill the Bot DB. You can create a DB Table with the same headers as the Data Feed Sheet and use it to upload all the products on the DB")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"There is one limitation on Cloud DB Table creation which doesn\u2019t lets you to create a table column name with the header as ID due to the min character required for a header. You have to keep a copy of the original Feed Sheet with the header as IDS and use it to upload to DB."))),Object(i.b)("p",null,"Here is the screenshot of a sample CSV file."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfktJE4vn1LWBNwk843DQAoyX1b6zG3iRFcoKmicwyKhFt1ekgEaMrkaTWAXFfALWGfdaVc3RHujJEMAZswM7v231h1CtXDz5og5MwALtz2PEug4xqgEXABuDQBkFdghct2jVP2ZoMuCcoS3e5ZWefUqfTsG/Image.jpg",alt:null})),Object(i.b)("p",null,"It appears in the Database as shown here.\n",Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkf7c28AhauJGr4SMiysKKMeabHngvRHjiass3eBGBTccSx3Z1jcAjG1RyZCEjZbMfwp6wg9EheTLkn6tAzm2Y8Gf2NwmMZg9vHk7TS6WNbSz9i9GUcyhf6poQsK9DmRi6RLnJJVEH6k6HaGkz5BnFhA3Vo/Image.jpg",alt:null})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Once the DB is ready you can query products based on the Category/Title. Using the Variable node, you can dynamically fetch the product IDS and pass them to the SPM/MPM nodes to send message to users.")),Object(i.b)("p",null,"Here is a sample journey configuration screenshots - "),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfm1eDf9ABao1h8fnSDmPoasJjBnDejx5GjqJrM8sHMfnxSNzDFVG4uttJkpW99cJHSCQgQ1aWvEbeXvjEoPNWK2Xk7kH1kYptDe2yybNYLdf4m4jKCsU3WqzdaB7P3ph6KyZKMRJegM1mNebLZN3ZxB5BKZ/Image.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmBxak347sZVdEcGpJQnWzAxDpN5LtpkBsMJrUqJBVCCcYCk7LNm1Nc9Vw4yG2CjwqTf4jv24mB5iZhW6UEG8T6um6nmGYPdmB75qELen8x4R8DqZ9y5brSDWSMqaYAmywc7xPbDCyS5hFhWqWTpdVTWh3V/Image.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkovdq7cZdAVmCphzgXMuDtFuv2oey5d3esZ3v5fW1xHJsbm4hM3cdyzb3Mre2ewALHBXfhwAsFPjvK5ECnVwVJBrFF5sCCFjdsFjwfT9p3FmxMGCEic8yjsT8EkqnN1AG7dEjie1at7td9f5o6qr4Qi7H3/Image.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkhmSHKziMNo7CJeHaQUnZWW4SU7ceQute1dTJDpTX6rPHgf2T84B3aZorh2J1XgfWcBKbVP5i1e98ghw39f2GVdb2jdijYUnCQrJsRe1RUkYFQwwUcLrsZdYYFMfYJvcwqAN2NwnVUPJADBHaZHFQzubHm/Image.jpg",alt:null})),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"In the above step we have seen how a product can be fetch based on deifferent condition and can be used as an SPM. Now we will go through the step of how we can handle the Cart events which comes to the bot once the user decides to purchase the product.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Purchase flow of an end-user"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"User receives the SPM on WhatsApp"),Object(i.b)("li",{parentName:"ol"},"User views the products and decides to purchase it"),Object(i.b)("li",{parentName:"ol"},"User clicks on Add to Cart button and selects the quantity to purchase"),Object(i.b)("li",{parentName:"ol"},"The Product gets added with the quantity selected by the user"),Object(i.b)("li",{parentName:"ol"},"User send the cart to the Business")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Incase of invalid or rejected ProductID or ContentID passed on the node the message/product will not be sent to the user."))),Object(i.b)("p",null,"Once the user sends the cart, the products from the users Cart will be removed and will be sent to the Business as an events on the Bot. to recieve the Cart Event its required to enable it from the Event Hub"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkxJeooqj886spjGBpqA68UNcEvVx5FXGCYb2wp7dxtbG9m3Dgpgmzy9GudbTXK8uA1JXm16jKTDE6jaix5pBZftNZ3Pvh3oPhC9HkFnpLSsSHJmnvv581GuMAfUzTcmdLWpQjfros4DqqoDrGk3rRdq9qP/Image.jpg",alt:null})),Object(i.b)("p",null,"This event will contain the below Data in the backend which can be used for further information required on the bot to be processed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "type": "event",\n  "event": {\n    "code": "whatsapp-cart",\n    "data": {\n      "order": {\n        "catalog_id": "619431863167996",\n        "product_items": [\n          {\n            "currency": "INR",\n            "item_price": 55,\n            "product_retailer_id": "YM012",\n            "quantity": 3\n          }\n        ],\n        "text": "I want to buy this"\n      }\n    }\n  }\n}\n')),Object(i.b)("p",null,"You can handle this event using a journey to carry out the next steps of the buying journey for the user as shown below."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmMZnxd9TZ5Uy82euZXsv5KEXjambLofoHEkEdFhStUQzSWirJaXLdDZ3xKuHX8cBDhN2aECxLzPrrLxVX1PoBNpBnLutzYt5vYXGsXdbaUJN37sdWjiqpbHcdbvtpjgXvG1vYPVyrhZCaDDoUDwdJPFLHh/Image.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkbaaHAPRWZDbniK88mvqZhcRk823WjzNi31VjvC39PTK9xFqjbPAviWDLwWTe5hdtgUbQS2M5FtGX9z1cS4x3teZDpRd1cXEHttwEKjRy55BZJT6uc7YRMb7ym55BZPzZtQeFedfeLayEA2AumEHEcGDgz/Image.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfm7mos43J98Ex4czeVTuUQXZozjan4vAZQkybF5MpDPguAnsAPZ7RT23SzEpCHGMS4RR9LUHVFoFrwq2d3CPn7qoi4CwDe8GHCntRtDwEVtWWR3pm9K33Shi4VSATJiBwjF3v3DcGNdpF6tArZ8brbcvrmQ/Image.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkztavgtCYywBACEY5HRyKAJDRzybPJj3AFqcQNMZJUVaUPYDxtv1rQsyj3LMRuVs5qaPk53bp6SE5GcSw9rAWQMwb38Wd6NzjSD2rv4TfKUoQoDtbCgGLrAYsZaKpHQ2awXHNqK1jMSEQG278bd3eBZEkD/Image.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfm4KQDAm34rkXbz1fKKaw2Y1gr3LdtKX6gGCjtTHSASgFfweBsEeVwjsSNGF5p6SR2AV9Wqw3qQPUo5wxf2A2Y7Ac4tEkqZVmj73TSoCRGDKi4M9evAGsxmBvpMtJSLspF73ib9npa8K6SVQsfqoqMhgJfw/Image.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmHHPievXu1X8Qk2iP8HegpWun5GMj8ZqpYKLsifTBLzzqYQycjFEkHjK6uLS6KwLnHFgD8bAUmAeXAvkTKAQCKZrXKFs4kyYGy6JNKj4BXxrjCJ7M7KytztWQBcim6aHkgPSkc8fC1FkvuNV4B5CQ9aw3y/Image.jpg",alt:null})),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"There is also another type of event which can be configured for the Message Business option which the user can choose which we be sent back to the bot as a normal msg or can be fetched as an event as well to understand the context of the Product for which the message has been sent.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmNJL9wfkW5hC3z4pk1oFhjAUfdeFzEtZGD3g6dxz9BRwu5iqfX594rr9uTpyguRNHGQ7iKid5FKJMFeJ6nANvncEaSMezx1XPyQhZ2dpLvpk7CCVX4QiCnSh9ZVkYYEVTcsTwrnTuKfr32Hpb6chFpvmcF/Image.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkcfYd6DU4oUGwYZvCQSpDgiGJCZKoa3NmxoXdnhxu35pY9fnaACj453GPhhUu1A2p3fTkJ3NzKqAPFkhGBgvvQbw5BimA4fNfAbo7eHZ3DVQLwuGZv7D1AagypJTMwHteTwHjLjYoDZ5T2Rxfy9uSBHDpU/Image.jpg",alt:null})),Object(i.b)("p",null,"Ideally, it is suggested to have a human agent routing available to help users in case of queries related to the product or can be handled using NLP as well."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The Message Business will send both the message and the event to the bot if the event is active on the Event Hub. Incase the event is disabled the message can be handled using NLP and no event will be sent to the bot for getting the context of the product query."))),Object(i.b)("p",null,"The event will be as below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'{\n  "type": "event",\n  "event": {\n    "code": "whatsapp-product-query",\n    "data": {\n      "context": {\n        "referred_product": {\n          "catalog_id": "619431863167996",\n          "product_retailer_id": "YM012"\n        }\n      },\n      "from": "919999999999",\n      "id": "ABEGkYcjBiJlAgo-sDGvi1C_TNRG",\n      "text": {\n        "body": "Whats the expiry date of the product?"\n      },\n      "timestamp": "1664561602",\n      "type": "text"\n    }\n  }\n}\n')),Object(i.b)("p",null,"This completes the Bot Flow for the SPM/MPM Feature to be handled for a basic Commerce Flow."),Object(i.b)("p",null,"These flows can be also created with other complex use cases with live agent support for better user experince when the buyer wants to get consulatation or get more info on the product before purchasing."))}p.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?o.a.createElement(u,s(s({ref:t},l),{},{components:n})):o.a.createElement(u,s({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);