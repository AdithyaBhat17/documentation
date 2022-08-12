(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(406)),i=["components"],l={title:"Intents",sidebar_label:"Intents"},c={unversionedId:"platform_concepts/studio/train/intents",id:"platform_concepts/studio/train/intents",isDocsHomePage:!1,title:"Intents",description:"NLU deals with training machines to read and converse in any human language. Making AI Models understand nuances of language is very complex problem. Thankfully, using Linguistic Semantics i.e. by creating a structured format of sentences, models are able to percieve natural language with good accuracy.",source:"@site/docs/platform_concepts/studio/train/intents.md",slug:"/platform_concepts/studio/train/intents",permalink:"/docs/platform_concepts/studio/train/intents",version:"current",sidebar_label:"Intents",sidebar:"platform_concepts",previous:{title:"Localization",permalink:"/docs/platform_concepts/studio/build/localization"},next:{title:"Entities",permalink:"/docs/platform_concepts/studio/train/entities"}},s=[{value:"Usecase",id:"usecase",children:[]},{value:'<a name="add"></a> 1. Add Intents and Utterances',id:"1-add-intents-and-utterances",children:[{value:"1.1 Set up a flow/journey",id:"11-set-up-a-flowjourney",children:[]},{value:"1.2 Open Intents Page",id:"12-open-intents-page",children:[]},{value:"1.3 Add Intent",id:"13-add-intent",children:[]},{value:"1.4 Add Utterance",id:"14-add-utterance",children:[]}]},{value:'<a name="train"></a> 2. Train Intents',id:"2-train-intents",children:[{value:"2.1 Change Epochs (optional)",id:"21-change-epochs-optional",children:[]},{value:"2.2 Connect to Bot",id:"22-connect-to-bot",children:[]}]},{value:'<a name="test"></a> 3. Test Intents',id:"3-test-intents",children:[{value:"3.1  Test Bot",id:"31--test-bot",children:[]},{value:"3.2 Test Intent",id:"32-test-intent",children:[]},{value:"3.3 Generate Utterance Report",id:"33-generate-utterance-report",children:[]}]},{value:'<a name="bp"></a> 4. Best Practices',id:"4-best-practices",children:[{value:'<a name="Intn"></a> 4.1 Intent Naming',id:"41-intent-naming",children:[]},{value:"4.2 Utterance &amp; Journey",id:"42-utterance--journey",children:[]}]}],b={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"NLU deals with training machines to read and converse in any human language. Making AI Models understand nuances of language is very complex problem. Thankfully, using Linguistic Semantics i.e. by creating a structured format of sentences, models are able to percieve natural language with good accuracy."),Object(o.b)("blockquote",null,Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Linguistic")," : study of language"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Semantics")," : study of the meaning of words, phrases or sentences i.e. how arranging group of words in particular fashion to derive meaning."))),Object(o.b)("p",null,"Question is - how does knowledge of word meanings or sentence formation help in better training AI Models?"),Object(o.b)("p",null,"Fortunately, solution is easy to gauge by learning about a few key concepts - ",Object(o.b)("strong",{parentName:"p"},"Intents"),", ",Object(o.b)("strong",{parentName:"p"},"Entities")," and ",Object(o.b)("strong",{parentName:"p"},"Context"),"."),Object(o.b)("p",null,"Any sentence can be broken down into smaller components - "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/7M9C8YcyuCJk1626109495211.png",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Intents")," - These are the literal meanings or core objective of any sentence like in the above example it is ",Object(o.b)("strong",{parentName:"p"},"booking a flight"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Entities")," - These are facts or additional information that adds meaning to sentence, for example Delhi, New York and 11th August."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Context"),' - In a day-to-day conversation, this generally refers to the underlying meaning of previous few exchanges. For Example - if a person is asking repeated questions about a product and says "Buy IT" , the IT here refers to the product.'),Object(o.b)("p",null,"In this doc, following topics will be covered:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#add"},"How to add intents and utterances?")," "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#train"},"How to train Intents?")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#test"},"How to test bots prediction-accuracy?")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#bp"},"Best practices to create intents and utterances"))),Object(o.b)("h3",{id:"usecase"},"Usecase"),Object(o.b)("p",null,"In this guide, we use the following scenario for building an intent for Jimmy's cafe."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"You are the owner of Jimmy's cafe and are setting up a bot for your website. Your customers would like to enjoy the simplicity of ordering a coffee through your bot. For this to happen, you want your bot to understand the different ways a customer may ask to place an order so that the ",Object(o.b)("a",{parentName:"em",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys"},"flow")," you built gets triggered."))),Object(o.b)("h2",{id:"1-add-intents-and-utterances"},Object(o.b)("a",{name:"add"})," 1. Add Intents and Utterances"),Object(o.b)("p",null,"Follow the given steps to add intents and utterances: "),Object(o.b)("h3",{id:"11-set-up-a-flowjourney"},"1.1 Set up a flow/journey"),Object(o.b)("p",null,"Before you train your first intent, create your first ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys"},"flow")," in the studio module of the platform. "),Object(o.b)("p",null,"To know more about setting up your first bot ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/getting-started#step-by-step-guide-on-how-to-get-started-with-yellowai"},"click here")),Object(o.b)("h3",{id:"12-open-intents-page"},"1.2 Open Intents Page"),Object(o.b)("p",null,"After creating the required flows, click on ",Object(o.b)("strong",{parentName:"p"},"Intents")," in the ",Object(o.b)("strong",{parentName:"p"},"NLU")," dropdown."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Eh21nPG.png",alt:null})),Object(o.b)("h3",{id:"13-add-intent"},"1.3 Add Intent"),Object(o.b)("p",null,"There are several ways in which a customer would like to  place an order for a cup of coffee:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Place an order"),Object(o.b)("li",{parentName:"ul"},"I want to place an order"),Object(o.b)("li",{parentName:"ul"},"Place order, and many more...")),Object(o.b)("p",null,"You can group all these statements in an intent called ",Object(o.b)("strong",{parentName:"p"},"order"),". "),Object(o.b)("p",null,"To add a new intent, click on ",Object(o.b)("strong",{parentName:"p"},"+ Add new Intent")," button and manually add the first Utterance."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/AnO2L8s.png",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"With \u201cYellow.ai DynamicNLP\u201d, NLP based on Zero-shot learning we eliminate the need for training the NLP model. To take advantage of this, follow the guidelines in Best Practices > ",Object(o.b)("a",{parentName:"p",href:"#Intn"},"4.1 Intent Naming")," .")),Object(o.b)("h3",{id:"14-add-utterance"},"1.4 Add Utterance"),Object(o.b)("p",null,"Once you have created an intent, add utterances to the intent. Utterances are phrases or queries that users may type in the bot hoping that the bot would understand. "),Object(o.b)("p",null,"There are two ways to add Utterances to an intent:"),Object(o.b)("h4",{id:"141-add-utterance-manually"},"1.4.1 Add Utterance Manually"),Object(o.b)("p",null,"While adding utterances manually to your intent, you do not need to pay attention to the case of the utterance, the bot will consider all such scenarios."),Object(o.b)("p",null,"Type in your utterance and click on add to add the utterance to an intent."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/N7S5mO5.png",alt:null})),Object(o.b)("h4",{id:"142-use-suggested-utterance"},"1.4.2 Use Suggested Utterance"),Object(o.b)("p",null,"Yellow.ai has data collected from over 100+ bots. This data is used to curate the suggested utterance section. In this section, you can see phrases similar to the first utterance you added. "),Object(o.b)("p",null,"The refresh button will allow you to access a fresh batch of utterances every time you click on it. You may add a few utterances by clicking the ",Object(o.b)("strong",{parentName:"p"},"'+'")," sign next to them or add all of them by selecting the check box next to 'Suggested utterances'."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/YQ9p7HK.png",alt:null})),Object(o.b)("p",null,"This would save you the effort of thinking of phrases and help you create intents in minutes."),Object(o.b)("h2",{id:"2-train-intents"},Object(o.b)("a",{name:"train"})," 2. Train Intents"),Object(o.b)("p",null,"Finally, click ",Object(o.b)("strong",{parentName:"p"},"Train Intents"),"."),Object(o.b)("p",null,"You can train the intent after adding 2 utterances, but it's recommended to train your intent after adding at least 15 utterances. "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Rh5BkD1.png",alt:null})),Object(o.b)("h3",{id:"21-change-epochs-optional"},"2.1 Change Epochs (optional)"),Object(o.b)("p",null,"You can increase the number of epochs for training your intent. The number of epochs is set to 20 by default. However, they could be a deciding factor when it comes to underfitting or overfitting the model."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/EzsE4ZB.png",alt:null})),Object(o.b)("h3",{id:"22-connect-to-bot"},"2.2 Connect to Bot"),Object(o.b)("p",null,"Now that you have trained your intent,  it is time to connect it to your bot. You have to connect the flow you built to the intent '",Object(o.b)("strong",{parentName:"p"},"Order"),"'."),Object(o.b)("p",null,"To do this click on the ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys#5-configure-start-trigger"},"Start Trigger")," and configure the intent to the node. "),Object(o.b)("p",null,"Click the drop-down and select \u2018#order\u2019 intent."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/arEPFgW.gif",alt:null})),Object(o.b)("p",null,"Every time a user asks a query similar to the utterances within 'order' the flow you created would get triggered."),Object(o.b)("div",{className:"admonition admonition-success alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Congratulations! You trained and connected your first intent!\ud83c\udf89\ud83c\udf89\ud83c\udf89"))),Object(o.b)("h2",{id:"3-test-intents"},Object(o.b)("a",{name:"test"})," 3. Test Intents"),Object(o.b)("p",null,"Once you have trained your intent you can test it for the results and retrain it (if required) based on the utterance report.\nThere are two methods to test your intent. "),Object(o.b)("h3",{id:"31--test-bot"},"3.1  Test Bot"),Object(o.b)("p",null,"To test your bot you can follow these steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"On the studio page, click the right panel to test your bot."),Object(o.b)("li",{parentName:"ul"},'To test your intent, type "Place an order" in your bot.'),Object(o.b)("li",{parentName:"ul"},"You will see that your flow gets triggered.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/WqSgkzc.gif",alt:null})),Object(o.b)("h3",{id:"32-test-intent"},"3.2 Test Intent"),Object(o.b)("p",null,"To see what response is generated by the model when a user types a query. Click on ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools"},"Tools")," and the section 'Test your bot'."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/I8iUEwt.gif",alt:null})),Object(o.b)("p",null,"You can test how confident your bot is about a phrase and whether it can identify the intent you just built."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json="},'{\n  "text": "place order.",\n  "intents": {\n    "order": 0.999\n  },\n  "global_model": {},\n  "intent": "order",\n  "confidence": 0.999,\n  "global_entities": [],\n  "entities": {}\n}\n')),Object(o.b)("p",null,"As you can see my model understands that the phrase is a part of the intent 'order' and is completely confident about it. "),Object(o.b)("h3",{id:"33-generate-utterance-report"},"3.3 Generate Utterance Report"),Object(o.b)("p",null,"For a better understanding of your intent, you can generate an utterance report after the intital NLU is set up on a monthly basis."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Understanding Confidence score"))," (0 to 1) is a rating generated for every utterance to show how accurate is that utterance in pointing towards the given intent. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Once you have trained your bot. Every utterance under the NLU section will generate this confidence. A value between 0 to 1 (1 being good and 0 being bad) will be assigned to every utterance. "),Object(o.b)("li",{parentName:"ul"},"Any utterance with lower value (lower confidence) will mean that the utterance is bad or does not go with the utterances added in that particular intent. ")),Object(o.b)("p",null,"The report will give you insights into the following:"),Object(o.b)("h4",{id:"331-conflicts-within-intents-and-faqs"},"3.3.1 Conflicts within Intents and FAQs"),Object(o.b)("p",null,"Let's say that you have an intent to Welcome a customer. You add two utterances:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Hi"),Object(o.b)("li",{parentName:"ol"},"Hiii")),Object(o.b)("p",null,"The report would point out the relation between the two utterances as a conflict as they have high similarities. "),Object(o.b)("p",null,"To dismiss this conflict you can delete one of the utterances."),Object(o.b)("h4",{id:"332-conflicts-across-intents-and-faqs"},"3.3.2 Conflicts across Intents and FAQ's"),Object(o.b)("p",null,"Let's say that you have 2 intents in Jimmy's cafe and you want to trigger 2 different flows for 2 different varieties of coffee you serve at the cafe."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Coffee 1"),Object(o.b)("li",{parentName:"ol"},"Coffee 2")),Object(o.b)("p",null,'You add an utterance "Order Coffee" in both the intents. '),Object(o.b)("p",null,"This would result in a 100% similarity between both the intents and would confuse the bot on which intent to pick and which flow to trigger. "),Object(o.b)("p",null,"This conflict can be resolved by either deleting the intent or by deleting a similar utterance. "),Object(o.b)("p",null,"To learn more about generating an utterance report ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/utterance-report"},"click here")),Object(o.b)("h2",{id:"4-best-practices"},Object(o.b)("a",{name:"bp"})," 4. Best Practices"),Object(o.b)("p",null,"This section is divided as:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Best practices to follow while naming intents."),Object(o.b)("li",{parentName:"ol"},"Best practices to follow while adding utterances to the intents.")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"41-intent-naming"},Object(o.b)("a",{name:"Intn"})," 4.1 Intent Naming"),Object(o.b)("p",null,"There are guidelines for new bots and for the bots in productions. Follow the respective guidelines for your intents to work best globally:"),Object(o.b)("h4",{id:"411-new-bots"},"4.1.1 New bots"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Intent names will need to be at least 3 words long with unique words and no special characters. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Be mindful of intent names, make sure they are as descriptive as possible."),Object(o.b)("li",{parentName:"ul"},"Don't create intent names like, intent test one, faq number one etc."),Object(o.b)("li",{parentName:"ul"},"Bad intent names will result in bad NLP performance (False positives) and unnecessary issues in the bot."),Object(o.b)("li",{parentName:"ul"},"For Cloud : It is possible to rename intent names."))),Object(o.b)("li",{parentName:"ol"},"The more descriptive the intent name, the better (add names with more than 3 words)."),Object(o.b)("li",{parentName:"ol"},"Avoid uncommon and business specific abbreviations: Example: PO (purchase order ), GMV, etc - use the full forms and add synonyms if necessary. Few common abbreviations like UPI, EMI, HR are acceptable."),Object(o.b)("li",{parentName:"ol"},"Phrase the intent name as a verb followed by a noun. Example: get premium receipt, pay renewal amount, fetch order status."),Object(o.b)("li",{parentName:"ol"},"Keywords and sentences less than 3 words will fallback to the existing bot model and will work as-is. These type of utterances will not go to the new model."),Object(o.b)("li",{parentName:"ol"},"This model is applicable and works well for ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs"},"FAQs")," as well (since FAQs are descriptive and longer sentences) "),Object(o.b)("li",{parentName:"ol"},"Suggestions are enabled by default for all new bots - as this is critical for model improvement and to provide the full performance benefit.")),Object(o.b)("h4",{id:"412-existing-bots"},"4.1.2 Existing bots"),Object(o.b)("p",null,"Following are a few important pointers for Bots already in production: "),Object(o.b)("h5",{id:"cloud"},"Cloud"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Enable suggestions for bots where it may not be enabled. This ensures that the model is used to the fullest. "),Object(o.b)("li",{parentName:"ol"},"Suggestions only show up for intents that are connected to the flows. Verify that unwanted flows are removed (or disconnected from intents)."),Object(o.b)("li",{parentName:"ol"},"If the intent name is camelCase (eg: chatWithAgent)  or has underscore/hyphens (eg: chat_with_agent, chat-with-agent), use the edit option to rename these following the guidelines mentioned in the above setion(for new bots). "),Object(o.b)("li",{parentName:"ol"},"Ensure that there is no Small Talk in FAQs / Flows. If these are present, delete them - platform small talk is enabled for all cloud bots. ")),Object(o.b)("h5",{id:"app"},"App"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Enable suggestions for bots. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"To do this: In app.ym ensure that ",Object(o.b)("strong",{parentName:"li"},"enableDidYouMean")," is set to true in app options within code as well as in Tools \u2192 App Options \u2192 Prediction \u2192 Enable Suggestions."),Object(o.b)("li",{parentName:"ul"},"If there\u2019s any existing ",Object(o.b)("strong",{parentName:"li"},"DidYouMean")," function in default:response, remove it."))),Object(o.b)("li",{parentName:"ol"},"Verify that journey DESCRIPTION is in line with guidelines mentioned above. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If these are not in line and are in camelCase or have special characters, change these by going to journey settings for that journey (you need not change the journey name, only the description can to be changed)."))),Object(o.b)("li",{parentName:"ol"},"Ensure that there is no Small Talk in FAQs / Flows. If these are present, delete them and enable platform small talk in ",Object(o.b)("strong",{parentName:"li"},"Context Management")," and enable ",Object(o.b)("strong",{parentName:"li"},"Small Talk"),".")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"42-utterance--journey"},"4.2 Utterance & Journey"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"DONTs \u274c"),Object(o.b)("th",{parentName:"tr",align:null},"DOs \u2705"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not add utterances in which the only variation is Upper Case/Lower Case"),Object(o.b)("td",{parentName:"tr",align:null},"Do add at least 15-20 utterances per journey")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not add utterances in which the only variation is Name, Date, City etc"),Object(o.b)("td",{parentName:"tr",align:null},"Do ensure that there are equal number of utterances in each journey")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not create multiple journeys which have similar purpose"),Object(o.b)("td",{parentName:"tr",align:null},"Do merge journeys that are subsets of other journeys")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not overfit the model while training"),Object(o.b)("td",{parentName:"tr",align:null},"Do use the didYouMean (suggestions) feature extensively")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not add utterances if a journey will only be triggered through 'Trigger Journey'"),Object(o.b)("td",{parentName:"tr",align:null},"Do minimize False Positives")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Do add abbreviations/shortforms in the \u201csynonyms\u201d section")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Do not add single words as utterances"),Object(o.b)("td",{parentName:"tr",align:null},"Add complete sentences")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-not-add-utterances-in-which-the-only-variation-is-upper-caselower-case"},"Do not add utterances in which the only variation is Upper Case/Lower Case"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong")," \u274c  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"apply for leave\n\nApply for leave\n\napply For Leave\n\nAPPLY FOR LEAVE\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"please apply for leave\n\ncan you please apply for leave?\n\nhow do I apply for leave?\n\nprocedure to apply for leave\n")),Object(o.b)("p",null,"This will make the model overfit and not learn the underlying sentence structure resulting in bad performance. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-not-add-utterances-in-which-the-only-variation-is-name-date-city-etc"},"Do not add utterances in which the only variation is Name, Date, City etc"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong")," \u274c  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"apply for leave on 23rd Jan\n\napply for leave on 24th Jan\n\napply for leave on 5th Jan\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"please apply for leave on 23rd Jan\n\ncan you please apply for leave tomorrow?\n\nhow do I apply for leave?\n\nprocedure to apply for leave\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong")," \u274c  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"schedule meeting with John\n\nSchedule meeting with Adam\n\nSchedule meeting with Ram\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"schedule meeting with John \n\nplease block Adams calendar tomorrow for a meeting\n\nsync up with Ram on 3rd Jan\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A few utterances (2-3) like the ones mentioned below are ok but ensure that there are other utterances that show the different variations in sentence structure "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"apply for leave tomorrow "),Object(o.b)("li",{parentName:"ul"},"apply for leave on 3rd "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-add-at-least-15-20-utterances-per-journey"},"Do add at least 15-20 utterances per journey"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The minimum number of utterances in each journey heavily depends on the complexity of the bot (number, type of journeys and quality of the utterances)"),Object(o.b)("li",{parentName:"ul"},"More utterances are always better especially when there are less than 10 journeys.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-ensure-that-there-are-equal-number-of-utterances-in-each-journey"},"Do ensure that there are equal number of utterances in each journey"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong"),"  \u274c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Apply Leave Journey - 50 Utterances\n\nLeave Balance Journey - 2 Utterances\n\nSchedule Meeting Journey - 30 Utterances\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Apply Leave Journey - 50 Utterances \n\nLeave Balance Journey - 50 Utterances \n\nSchedule Meeting Journey - 50 Utterances\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Try to maintain a balance in the number of utterances per journey"),Object(o.b)("li",{parentName:"ul"},"The NLP model is robust enough to handle small variations in the number of utterances (difference of 3-5 utterances) "),Object(o.b)("li",{parentName:"ul"},"For smaller bots (< 10 journeys) maintaining balance is important to ensure good performance. ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-not-create-multiple-journeys-which-have-similar-purpose"},"Do not create multiple journeys which have similar purpose"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong"),"  \u274c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Journey: talk-to-agent\n\nJourney: transfer-to-live-chat\n\nJourney: speak-to-agent\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Single Journey: talk-to-agent\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Having multiple journeys which have similar utterances will confuse the model since there is a high amount of overlap."),Object(o.b)("li",{parentName:"ul"},"Merge all these journeys into one single journey")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-merge-journeys-that-are-subsets-of-other-journeys"},"Do merge journeys that are subsets of other journeys"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Wrong"),"  \u274c"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Journey: apply-for-loan\n\nJourney: apply-for-home-loan\n\nJourney: apply-for-personal-loan\n\nJourney: benefits-of-home-loan\n\nJourney: benefits-of-automobile-loan\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Correct")," \u2705"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Journey: apply-for-loan\n\n    Steps: What kind of loan are you interested in?\n\n        - Home, Personal, Automobile\n\nJourney: benefits\n\n    Steps: Which loan would you like to know more about?\n\n        - Home, Personal, Automobile\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the example above ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"apply-for-home-loan"))," is a subset or part  of the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"apply-for-loan journey")),".\nThis means that ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"apply-for-home-loan"))," will have utterances that are very similar to ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"apply-for-loan"))),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"- Eg: \u201ccan you please help me apply for home loan?\u201d , \u201cCan you please apply for loan?\u201d\n\nThis will confuse the model during training \n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"There are 2 Steps to fix this: "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Move all utterances to the parent journey in this case ",Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"apply-for-loan"))),Object(o.b)("li",{parentName:"ul"},"Create a step asking the user for additional details (in this case type of loan)")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  *    Another option is to setup entities (eg: type-of-loan - Personal, Home can be a type of entity) within the journey.\n")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-not-add-utterances-if-a-journey-will-only-be-triggered-through-trigger-journey-option"},"Do not add utterances if a journey will only be triggered through Trigger Journey option"),"There may be some journeys in the bot that are meant to be triggered only from another journey. (i.e. these wont be triggered by the user\u2019s input)")),Object(o.b)("p",null,"Eg: Feedback Journey"),Object(o.b)("p",null,"For these journeys do ",Object(o.b)("strong",{parentName:"p"},"NOT")," add any user expressions/utterances\nAdding utterances here will unnecessarily increase the complexity of the NLP Model."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-minimize-false-positives"},"Do minimize False Positives"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"When an incorrect journey is triggered with high confidence it is considered a False Positive."),Object(o.b)("li",{parentName:"ul"},"False Positives occur because of overfitting and spoil the customer/user experience"),Object(o.b)("li",{parentName:"ul"},"These are minimized by following the best practices laid out in this document."),Object(o.b)("li",{parentName:"ul"},"If there are a lot of false positives during training (even after checking for overfitting) try raising the minConfidence threshold."),Object(o.b)("li",{parentName:"ul"},"The best strategy is to use didYouMean(Suggestions) feature and retrain the bot periodically with the new data."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-use-the-didyoumean-feature-extensively"},"Do use the didYouMean feature extensively"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"After ensuring that the model did not overfit (no False Positives) the next step is to enable the didYouMean feature"),Object(o.b)("li",{parentName:"ul"},"When the user\u2019s input is not recognized by the model the didYouMean feature elegantly handles the case as a fallback."),Object(o.b)("li",{parentName:"ul"},"This is especially useful in the first few weeks after deploying a bot in production when accuracy may be low. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The self-learning capability allows the bot to improve the confidence of different types of user expressions. "))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-add-abbreviationsshortforms-in-the-synonyms-section"},"Do add abbreviations/shortforms in the \u201csynonyms\u201d section"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For short forms and abbreviations add all the possible variations in the Synonyms section located under \u201centities\u201d "),Object(o.b)("li",{parentName:"ul"},"The NLP pipeline will check for these abbreviations and replace it with the \u201cfull form\u201d before passing it into the ML model which will increase the accuracy "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("h4",{parentName:"li",id:"do-not-overfit-the-model-while-training"},"Do not overfit the model while training"))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"\ud83d\udccc ",Object(o.b)("strong",{parentName:"p"},"Training Checklist")),Object(o.b)("ul",{parentName:"div",className:"contains-task-list"},Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","15-20 Utterances in each journey "),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Utterances in journeys are varied and unique "),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Journeys are distinct and conflicting journeys have been merged"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Model does not overfit (False Positives have been handled)"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","didYouMean (Suggestions) feature is enabled"),Object(o.b)("li",{parentName:"ul",className:"task-list-item"},Object(o.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Mininum 2 intents are required to train a bot")))))}u.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);