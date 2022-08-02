(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),l=(n(0),n(393)),i=["components"],r={title:"Prompt Nodes",sidebar_label:"Prompts"},s={unversionedId:"platform_concepts/studio/build/nodes/prompt-nodes",id:"platform_concepts/studio/build/nodes/prompt-nodes",isDocsHomePage:!1,title:"Prompt Nodes",description:"Nodes- Prompts",source:"@site/docs/platform_concepts/studio/build/nodes/prompt-nodes.md",slug:"/platform_concepts/studio/build/nodes/prompt-nodes",permalink:"/docs/platform_concepts/studio/build/nodes/prompt-nodes",version:"current",sidebar_label:"Prompts",sidebar:"platform_concepts",previous:{title:"Message Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/message-nodes"},next:{title:"Action Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/action-nodes"}},c=[{value:"1. User Details",id:"1-user-details",children:[{value:"Name",id:"name",children:[]},{value:"Phone",id:"phone",children:[]},{value:"Date",id:"date",children:[]},{value:"Location",id:"location",children:[]},{value:"Store Comment",id:"store-comment",children:[]}]},{value:"2. Feature",id:"2-feature",children:[{value:"Question",id:"question",children:[]},{value:"Carousel",id:"carousel",children:[]},{value:"Feedback",id:"feedback",children:[]},{value:"Quick Replies",id:"quick-replies",children:[]},{value:"Multi Select",id:"multi-select",children:[]},{value:"File Prompt",id:"file-prompt",children:[]}]},{value:"3. Social Media",id:"3-social-media",children:[{value:"WhatsApp List",id:"whatsapp-list",children:[]},{value:"Email",id:"email",children:[]}]},{value:"4. Voice",id:"4-voice",children:[{value:"Speak",id:"speak",children:[]}]},{value:"5. Make Prompt Smarter",id:"5-make-prompt-smarter",children:[{value:"Auto Complete",id:"auto-complete",children:[]},{value:"Autoskip",id:"autoskip",children:[]},{value:"Additional",id:"additional",children:[]}]}],p={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"nodes--prompts"},"Nodes- Prompts"),Object(l.b)("p",null,"Prompts are Interactive/conversational nodes which expect  user input.\nWhen user provides an invalid input to the prompt, fallback message will be displayed. There are different types of prompt nodes: "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"User Details"),"- Used to collect user details."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Feature"),"- Used for creative display of information and collection of response."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Social Media"),"- Nodes to collect social media related details."),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Voice"))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"All these prompts must be followed by another node as a response to this node.")),Object(l.b)("p",null,"You can also make your ",Object(l.b)("strong",{parentName:"p"},"prompts smarter"),". It will be discussed at the end of this document. "),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note"),"\nThe nodes which have an option to ask the users a question/ display a text are enabled with ",Object(l.b)("strong",{parentName:"p"},"Randomization")," feature. On any such node, click ",Object(l.b)("strong",{parentName:"p"},"Add multiple text for randomizing"),". Enter variations of text that you want your users to see. This feature will display different message to the user in a random order (instead of the same message every time) making the conversation more humanly. "),Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/KucDPVJ.png",alt:null}))),Object(l.b)("h2",{id:"1-user-details"},"1. User Details"),Object(l.b)("h3",{id:"name"},"Name"),Object(l.b)("p",null,"Ask and validate the user name with this node. When the user enters a sentence instead of first + last name, validation fails and the bot replies- 'Can you please repeat this, looks like an Invalid name'."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If you are building a multilingual bot, it's recommended to use a Question node instead of Name node.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/Rr81uih.png",alt:null})),Object(l.b)("p",null,"Create a Name ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/"},"Variable")," and store the user name in it. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/t8UFyzS.png",alt:null})),Object(l.b)("h3",{id:"phone"},"Phone"),Object(l.b)("p",null,"Ask and validate the phone number with this node. ",Object(l.b)("strong",{parentName:"p"},"Default ISD")," value can be selected if the bot is customized for a region.\nWhen the user enters a number of length greater than 10, validation fails and the bot replies- 'Enter a valid phone number'."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/OE9W6fH.png",alt:null})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"One phone node can only support validation of one country code. ")),Object(l.b)("p",null,"Create a Phone ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/"},"Variable")," and store the number in it. "),Object(l.b)("h3",{id:"date"},"Date"),Object(l.b)("p",null,"User will be able to select a date on the calendar widget with this node.\nIf the user input contains a date or a time, it will pass the validator. Else the specified validation fail message will be sent.\nWidgets are optional. Chat will not be disabled when a widget is sent, users can choose to type in their response."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/XZ2Im2N.png",alt:null})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"This node is supported only on Web and Mobile apps.")),Object(l.b)("p",null,"Different types of date pickers are available to be displayed to the users.\nExample of a Single Date Picker. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/QAIhG8M.png",alt:null})),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Storing date variables"),": Post validation, the user entered date will be stored in the specified variable as an object. The structure of the object is as follows:"),Object(l.b)("p",null,"For a single value"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n    "value": {\n        "timestamp": "2021-09-08T00:00:00.000Z",\n        "year": 2021,\n        "month": 8,\n        "date": 8,\n        "day": "Sunday",\n        "hour": 0,\n        "minute": 0\n    },\n    "range": {\n        "exists": false\n    }\n}\n')),Object(l.b)("p",null,"For a range"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n    "value": {\n        "timestamp": "2021-09-08T00:00:00.000Z",\n        "year": 2021,\n        "month": 8,\n        "date": 8,\n        "day": "Sunday",\n        "hour": 0,\n        "minute": 0\n    },\n    "range": {\n        "exists": false\n    }\n}\n')),Object(l.b)("h3",{id:"location"},"Location"),Object(l.b)("p",null,"Ask, validate and store user location with this node. "),Object(l.b)("p",null,'Validation is passed after extracting all the fields specified in "',Object(l.b)("strong",{parentName:"p"},"Required fields"),'". This does not mean user needs to provide all these fields, any info provided by the user is extracted.'),Object(l.b)("p",null,"It is then stored in the specified varialble with the folowing format: { userMessage: '', coordinates: { lat: \"\", lng: \"\", }, fullAddress: '', city: '', state: '', country: '', postalCode: '', }"),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/ukkmvnZ.png",alt:null})),Object(l.b)("p",null,'You can also send a "',Object(l.b)("strong",{parentName:"p"},"Share location"),'" button to allow users to share their current location. Customize the text in this button by clicking on it.'),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/bicgYat.png",alt:null})),Object(l.b)("h3",{id:"store-comment"},"Store Comment"),Object(l.b)("p",null,"Ask and store user messages and other comments with this node. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/ARH5lVv.png",alt:null})),Object(l.b)("h2",{id:"2-feature"},"2. Feature"),Object(l.b)("h3",{id:"question"},"Question"),Object(l.b)("p",null,"Ask a simple question with this node. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/MU4Awmg.png",alt:null})),Object(l.b)("h3",{id:"carousel"},"Carousel"),Object(l.b)("p",null,"Display interactive carousel cards with buttons with this node. Carousel can be used in places like displaying a list of products."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/plQBWHs.png",alt:null})),Object(l.b)("p",null,"Carousel response contains option to add image (less than 10MB), title and description.\nYou can also add multiple buttons in carousel. Clicking on the button can display a text, another flow, URL entered or will be sent to phone number. Configure this in the Carousel settings."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"On Whatsapp, carousel cards do not support hyper linking and allows for upto 3 clickable buttons")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/seysnzN.png",alt:null})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\ud83d\udccc Carousels without buttons will act as Messages instead of Prompts.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Success")," and ",Object(l.b)("strong",{parentName:"p"},"Fallback")," cases must be handled by connecting them to other nodes to continue the flow.  "),Object(l.b)("h4",{id:"dynamic-carousels"},"Dynamic Carousels"),Object(l.b)("p",null,"Similar to quick replies, Carousels can also be dynamically created using Fetch from option. Carousel object is an array of each card (JSoN objects). Sample Carousel object"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'[\n  {\n    "title": "Shirts",\n    "description": "Do you really need a shirt?",\n    "actions": [\n      {\n        "title": "Button #1",\n        "buttonDefault": "text",\n        "text": "Message1"\n      },\n      {\n        "title": "Button #2",\n        "buttonDefault": "triggerJourney",\n        "analytics": "analytics",\n        "triggerJourney": "test"\n      },\n      {\n        "title": "Button #3",\n        "buttonDefault": "url",\n        "analytics": "analytics",\n        "url": "https://www.yellow.ai",\n        "postback": "post-back"\n      }\n    ],\n    "image": "https://cdn.yellowmessenger.com/oCYK22c0vdoI1654657000460.jpg",\n    "text": "Description for item1"\n  },\n  {\n    "title": "Title",\n    "description": "Description",\n    "actions": [\n      {\n        "title": "Button #1"\n      },\n      {\n        "title": "Button #2"\n      }\n    ],\n    "image": "",\n    "video": "",\n    "text": "This is button 2"\n  }\n]\n\n')),Object(l.b)("p",null,"Actions above describe the card button, you can add multiple actions to a single card in carousel."),Object(l.b)("p",null,"To add a URL type action, for example, format becomes:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'    {\n        "title": "Explore more",\n        "buttonDefault": "url",\n        "url": "https://sampleurl.com",\n    }\n                    \n')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Sample function to add carousels")),Object(l.b)("p",null,"You can call this function from function node we will learn about and store the returning value in a variable."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'return new Promise(resolve => {\n    // Your logic goes here\n    let cars = data.variables.cars_h; //this bot variable contains an API response\n    let cars_cards = []; \n\n    for (let i = 0; i < cars.length; i++) {\n        \n            cars_cards.push({\n                "title": cars[i].model,\n\n                "actions": [\n                    {\n                        "title": "Explore more",\n                        "buttonDefault": "text",\n                        "text": cars[i].model,\n\n                    }\n                ],\n                "image": cars[i].main_img,\n                // "video" : "",\n                // "text" : "Desc1",\n\n            });\n\n    }\n\n    return resolve(cars_cards);\n});\n')),Object(l.b)("h3",{id:"feedback"},"Feedback"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Supported for all the mobile SDKs (Flutter, Android , iOS) and web.\nNot Supported for WhatsApp, Instagram, Facebook , Teams, and Slack.")),Object(l.b)("p",null,"Display a feedback widget and receive ratings and feedback with this node.\nOn this prompt you can configure what your questions should be when you ask for feedback. Feedback prompt will ask for rating on a scale of 5, and additional comments prompt will take additional comments from user in a text field if entered."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/v61glfs.png",alt:null})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Feedback data can be found in Insights section > Data Explorer. You do not need to store it seperately.\nYou can access this data if needed by using {{variables.var_name.rating}} and {{variables.var_name.comment}}")),Object(l.b)("h3",{id:"quick-replies"},"Quick Replies"),Object(l.b)("p",null,"Display a question along with quick reply buttons as its response with this node.\nUsers can either select from options or type out option.\nYou can drag and extend each quick reply to attach with further flow you want ahead of it. There is also an option to configure fallback which will work when none of the quick replies are validated from the user input."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/Ign5Rz9.png",alt:null})),Object(l.b)("p",null,"Buttons can be further customized by adding:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Button value")," - If configured, this is the actual value of the button - that will go to any Database insert or be stored in variable."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Text aliases"),": Other phrases user can type which means the same as the button. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Link and Postback"),": external URL link "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Prefix Image"),": icon that must be displayed for the button.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/mlA3ZYS.png",alt:null})),Object(l.b)("h4",{id:"dynamic-quick-replies"},"Dynamic Quick Replies"),Object(l.b)("p",null,"In above method to add quick replies you had to add each button yourself. You knew the number and text of buttons beforehand to create quick replies. You can generate some options from an API response or Database query where you either don't know what will be the option or number of options can change from where you want to fetch it from.\nIn this case, you need to dynamically generate quick replies.\nTo do this, we have a ",Object(l.b)("strong",{parentName:"p"},"Fetch from")," option in quick reply prompt. Here, instead of adding quick replies manually, you can select a variable containing a quick reply object. Format of quick reply object:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'{\n  "title": "Select one of the option",\n  "options": [\n    {\n      "title": "Docs",\n      "url": "https://docs.yellow.ai"\n    },\n    {\n      "title": "Community",\n      "url": "https://community.yellow.ai"\n    },\n    {\n      "title": "yellow.ai",\n      "text": "yellowdotai"\n    }\n  ]\n}\n')),Object(l.b)("p",null,"To dynamically generate quick replies, you can apply any logic in code (functions) around quick replies and store value of final object in intented variable. For example, you can apply for loop around options to dynamically add to them while parsing through some API response etc."),Object(l.b)("h4",{id:"workaround-for-whatsapp"},"Workaround for WhatsApp"),Object(l.b)("p",null,"Quick Replies are currently not supported on WhatsApp. That is, buttons wont be visible on the WhatsApp chat.\nTo use buttons (Quick reply like action) use one Carousel card without adding any images.  "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/nmWXMaR.png",alt:null})),Object(l.b)("p",null,"You will be permitted to add only 3 buttons on the Carousel. Create a ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/"},"Variable")," and store the selected response in it. "),Object(l.b)("p",null,"Given below is the whatsapp chat screen for the above flow."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/xw1ksvM.jpg",alt:null})),Object(l.b)("h3",{id:"multi-select"},"Multi Select"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Supported for all the mobile SDKs (Flutter, Android , iOS) and web.\nNot Supported for WhatsApp, Instagram, Facebook , Teams, and Slack.")),Object(l.b)("p",null,"Similar to Quick Replies node, display a question along with quick reply buttons where the user can select multiple responses with this node. "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Success")," and ",Object(l.b)("strong",{parentName:"p"},"Fallback")," cases must be handled by connecting them to other nodes to continue the flow.  "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/YfWQNyZ.png",alt:null})),Object(l.b)("h3",{id:"file-prompt"},"File Prompt"),Object(l.b)("p",null,"Ask, validate and store JPG/ PNG files with this node."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/2W8klkr.png",alt:null})),Object(l.b)("p",null,"It will validate if the uploaded file is in JPG/PNG format and its size is less than 5MB."),Object(l.b)("p",null,"Create a file ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/"},"Variable")," and store the file in it. "),Object(l.b)("h2",{id:"3-social-media"},"3. Social Media"),Object(l.b)("h3",{id:"whatsapp-list"},"WhatsApp List"),Object(l.b)("p",null,"Configure lists displayed on the WhatsApp channel with this node. "),Object(l.b)("p",null,"Whatsapp API provides a better UI for businesses to send List items (within 24 hours window).\nTo create a Whatsapp List:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Select Whatsapp List under Prompt Nodes."),Object(l.b)("li",{parentName:"ul"},"Edit Body Message, Footer, Section Title and Button Title/Name and list.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/vmDdimd.png",alt:null})),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Limitations")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Maximum of 10 Buttons can be added. Multiple buttons cannot be selected in one go and are not supported in notifications."),Object(l.b)("li",{parentName:"ul"},"Character limit of Body is 1024."),Object(l.b)("li",{parentName:"ul"},"Character limit of Footer is 60."),Object(l.b)("li",{parentName:"ul"},"Character limit of Button Text and Response is 24."),Object(l.b)("li",{parentName:"ul"},"Section Title and List Headers are optional.")),Object(l.b)("h3",{id:"email"},"Email"),Object(l.b)("p",null,"Ask, validate and store the user email with this node."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/LRJ93DG.png",alt:null})),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Validation"),"\nbot checks if the entered email is in ",Object(l.b)("a",{parentName:"p",href:"mailto:username@company.domain"},"username@company.domain")," format."),Object(l.b)("p",null,"Create a email ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/bot-variables/"},"Variable")," and store the email ID in it. "),Object(l.b)("h2",{id:"4-voice"},"4. Voice"),Object(l.b)("h3",{id:"speak"},"Speak"),Object(l.b)("p",null,"Users can input the SSML text and can play the configured/generated audio on the go."),Object(l.b)("p",null,"You can enter what a bot must ask the user in SSML format. This can be tested by clicking ",Object(l.b)("strong",{parentName:"p"},"Test Audio")," and playing the produced audio. When this node is reached in the flow, the user will be sent a voice message (when bot is configured for it)."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/A1komJk.png",alt:null})),Object(l.b)("p",null,"Sample SSML code: "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="en-US"><voice name="en-US-JennyNeural"><prosody rate="0%" pitch="0%"> What is your  query</prosody></voice></speak>\n')),Object(l.b)("h2",{id:"5-make-prompt-smarter"},"5. Make Prompt Smarter"),Object(l.b)("p",null,"Make Prompt Smarter option is available on all the prompt nodes. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/QoIUylO.png",alt:null})),Object(l.b)("hr",null),Object(l.b)("h3",{id:"auto-complete"},"Auto Complete"),Object(l.b)("p",null,"Autocomplete is set so that the bot can start predicting rest of the word or sentence for users as they start typing. This feature can be used for: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Discoverability: End user can easily discover what a bot or a point does"),Object(l.b)("li",{parentName:"ul"},"When there are multiple options available and a limit is set on the display, autocomplete is a good singular or assisiting alternative to show options."),Object(l.b)("li",{parentName:"ul"},"Faster typing, and improved user experience.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Autocomplete shows results after 3 characters are typed and it keeps filtering the results as customer continous typing / or selects an option.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/anyDc8z.png",alt:null})),Object(l.b)("p",null,"Auto complete is available at a ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/tools#22-conversation"},"global level")," and prompt level (that is triggered inside a prompt)."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/i0u48Ru.gif",alt:null})),Object(l.b)("p",null,"Following options can be set to auto-complete: "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Database column")," - Select a database table > column directly to populate autocomplete using that. "),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"List entity")," - Select a list entity , items of which will be used to populate autocomplete. ")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Only List Item names are considered, the is no search based on all synonyms. ")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"User properties")," -  Select a user property(string type ) from Users table to autocomplete. (Note: Only distinct results will be shown) and add upto one filter on any column. "),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"FAQs")," - Multiselect categories of FAQs which you want to include in Autocomplete. FAQ descriptions are populated in autocomplete (which are by default same as question itself) "),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"Function")," - If the use case turns is complicated complicated and none of the above steps work, select a function where you can write your custom logic to ultimately return an array of string items which will populate your autocomplete.")),Object(l.b)("p",null,"Sample code snippet for function: "),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'return new Promise(resolve => {\n    console.log("inside autoSuggestion");\n    let result = data.variables.autoComponents;\n    const { term } = data;\n    let suggestions = [];\n    result.forEach((hit) => {\n        if (hit.component.toLowerCase().includes(term.toLowerCase())) {\n            suggestions.push([hit.component, hit.component]);\n        }\n    });\n    resolve(suggestions);\n});\n')),Object(l.b)("hr",null),Object(l.b)("h3",{id:"autoskip"},"Autoskip"),Object(l.b)("p",null,"You can keep your conversations from being repetitive by auto-skipping the prompt with entities or variables if you already received the value and have stored it."),Object(l.b)("p",null,"In the below example, the user wont be asked for the name, phone number and email again in any of the flows. "),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/jIgnQRZ.png",alt:null})),Object(l.b)("p",null,"Configure Autoskip at a global level (from tools section), click ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/tools/#224-autoskipping-settings"},"here"),". "),Object(l.b)("h3",{id:"additional"},"Additional"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Use this as Unique ID for User"),": Info entered at this node will be unique for an user.\nFor example, instead of setting a new user ID, you can use the phone number as an unique ID to recognize this user. Other nodes that can be used as Unique IDs are Car Number, Aadhar Card, SSN, etc. that are unique to an individual. ")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Mark user message as sensitive info"),": Mask this user info from appearing in conversation logs.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Mark bot message as sensitive info"),": Mask this bot info from appearing in conversation logs."))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/0W4y8pO.png",alt:null})),Object(l.b)("h4",{id:"use-case"},"Use-case"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Where there are 2 nodes in this flow, one asking for password (",Object(l.b)("strong",{parentName:"li"},"marked user message as sensitive info"),") and the other providing a new password (",Object(l.b)("strong",{parentName:"li"},"marked bot message as sensitive info"),"). ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/ycX3lFa.png",alt:null})),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Text entered at these nodes will be displayed as "sensitive information" on the chat log. ')),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/qW4MoKt.png",alt:null})))}b.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||l;return n?o.a.createElement(m,r(r({ref:t},c),{},{components:n})):o.a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var c=2;c<l;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);