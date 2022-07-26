(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{394:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||i;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(394)),r=["components"],s={title:"Learn to handle FAQs & Knowledge from files",sidebar_label:"Bot Knowledge"},c={unversionedId:"cookbooks/bot-knowledge",id:"cookbooks/bot-knowledge",isDocsHomePage:!1,title:"Learn to handle FAQs & Knowledge from files",description:"We have covered a lot of things!",source:"@site/docs/cookbooks/bot-knowledge.md",slug:"/cookbooks/bot-knowledge",permalink:"/docs/cookbooks/bot-knowledge",version:"current",sidebar_label:"Bot Knowledge"},l=[{value:"Simple FAQs - FAQ List Section",id:"simple-faqs---faq-list-section",children:[{value:"Navigating to FAQs List",id:"navigating-to-faqs-list",children:[]},{value:"Adding Question and Answers",id:"adding-question-and-answers",children:[]},{value:"Adding Categories",id:"adding-categories",children:[]},{value:"Question variations &amp; Training",id:"question-variations--training",children:[]},{value:"Adding language specific responses",id:"adding-language-specific-responses",children:[]},{value:"Bulk Manage",id:"bulk-manage",children:[]}]},{value:"Knowledge from files - Document Cognition",id:"knowledge-from-files---document-cognition",children:[{value:"What is Document Cognition ?",id:"what-is-document-cognition-",children:[]},{value:"How does Document Cognition work ?",id:"how-does-document-cognition-work-",children:[]},{value:"\ud83d\udcdd Getting Started",id:"-getting-started",children:[]},{value:"Types of &quot;Search&quot;",id:"types-of-search",children:[]},{value:"Supported Formats",id:"supported-formats",children:[]},{value:"Appendix and FAQ",id:"appendix-and-faq",children:[]},{value:"Document Cognition Action Node (To be updated)",id:"document-cognition-action-node-to-be-updated",children:[]}]}],b={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We have covered a lot of things!\nNow if you notice, FAQs consists major part of a chatbot. Ability to answer user queries in conversational manner is a gem."),Object(i.b)("p",null,"When we say FAQ, we mean simple question & answer. We do not include complex logics here - for that we have Journeys."),Object(i.b)("p",null,"This section is divided into two parts"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"FAQ List Section - Here we will talk about simple Q&A section we have to take care of all your FAQ setup needs, easy to use for anyone."),Object(i.b)("li",{parentName:"ol"},"Document Cognition - Here we will talk about the process of generating FAQs automatically from a bulk load of documents.")),Object(i.b)("h2",{id:"simple-faqs---faq-list-section"},"Simple FAQs - FAQ List Section"),Object(i.b)("h3",{id:"navigating-to-faqs-list"},"Navigating to FAQs List"),Object(i.b)("p",null,"You can access the FAQ section by going to Studio>FAQs inside your Project.\n",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/iOe8C43.png",alt:null})),Object(i.b)("p",null,"This section consists of ability to add simple Question and answer, categorize them, configure Q & A based on languages, add question variations & training AI to understand questions better and lastly, handling all of what I just said in bulk using csv!"),Object(i.b)("p",null,"Don't get confused, we'll go through each of these components one by one."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/gfrxR6c.gif",alt:null})),Object(i.b)("h3",{id:"adding-question-and-answers"},"Adding Question and Answers"),Object(i.b)("p",null,"You can simply click on the \u2018",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"Add new question")),"\u2019 button to add a new pair for Question and Answer.\nMoreover, by clicking on ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"Add more"))," on the bottom of the Answer section you can also add ",Object(i.b)("em",{parentName:"p"},"Images, documents, videos")," and ",Object(i.b)("em",{parentName:"p"},"files")," in your answer."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Advanced")," : If you need to handle a complex logic following up to answering your FAQ, you can ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"trigger journey"))," or ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"function"))," as well from 'Add more'."),Object(i.b)("h3",{id:"adding-categories"},"Adding Categories"),Object(i.b)("p",null,"To add a new category, you can click on ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"\u2018+\u2019"))," top right of the Question section. (right to category list dropdown)\nDefault category already present is the category where any uncategorized FAQs can go."),Object(i.b)("p",null,"You can select the added categories from dropdown and add questions inside them then."),Object(i.b)("h3",{id:"question-variations--training"},"Question variations & Training"),Object(i.b)("p",null,"Question variations are nothing but \u2018",Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"different ways your user can ask a question")),"\u2019.\nAdding these helps our AI model learn from variations you just added to understand the variety of ways users can form questions and hence, answer your users better."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"TRAINING:"),"\nAfter making any changes to the FAQ section, it is important to click on ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"Train"))," button to train the AI model."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udccc ",Object(i.b)("strong",{parentName:"p"},"Note"),":\nIf your bot is a ",Object(i.b)("strong",{parentName:"p"},"multilingual")," bot (not only English/languages apart from English), you should train your bot on \u2018Multilingual\u2019 feature type.\nJust go to train settings and select Multilingual from dropdown in feature types."),Object(i.b)("p",{parentName:"div"},Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/ainhBSV.jpg",alt:null})))),Object(i.b)("h3",{id:"adding-language-specific-responses"},"Adding language specific responses"),Object(i.b)("p",null,"If you do not trust auto translate, you can always add language based responses yourself."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To ",Object(i.b)("strong",{parentName:"li"},"add questions in different languages"),", you can simply add it in \u2018",Object(i.b)("strong",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"strong"},"Question variations")),"\u2019 section."),Object(i.b)("li",{parentName:"ul"},"To ",Object(i.b)("strong",{parentName:"li"},"add answers in different languages"),", you can click on the following button on top right of screen and select language from dropdown, and edit the answer for that language.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/SnrZhEl.jpg",alt:null})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note")," : Only languages configured in your bot settings will appear in this dropdown.")),Object(i.b)("h3",{id:"bulk-manage"},"Bulk Manage"),Object(i.b)("p",null,"Now to the most important feature that can make your life very easy in adding FAQs."),Object(i.b)("p",null,"You can see Bulk Manage button on top of your screen. This contains two options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Bulk Export")," : To export(download) all your data from FAQ section in csv format."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Bulk Import"),": To import multiple FAQs at once from a structured CSV instead of adding from platform, this feature can be used.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/Akm1PYN.png",alt:null})),Object(i.b)("p",null,"Above image depicts our CSV format. ",Object(i.b)("strong",{parentName:"p"},"For importing, you will need to stick to same CSV format.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"It includes, category, question, question variations and answer columns.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE:"),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Answer column is named ",Object(i.b)("strong",{parentName:"p"},"answer_en")," (which means answer english, \u2018en\u2019 is the ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO code")," for English). For any other languages, you can similarly add more columns ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"answer_ISOCode"))," in your sheet.\n(Any additional language should be one of your bots languages in configuration section)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"New Categories cannot be directly added from CSV.")," You can use only those categories you have already added on the platform through ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"\u2018+\u2019"))," button. If you leave Category column empty and add a question, it will automatically go to \u2018Default Category\u2019.")))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("em",{parentName:"p"},"If you\u2019re someone dealing with Bulk Import, maybe wanting to maintain a single sheet, updating it and uploading again insteading of using platform features, Bulk Import will be very useful for you.\nYou can even do a mix of both, upload from sheet, and then add from platform.")),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"A good practice to follow every time you do bulk import then would be:")),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol"},"Export the csv first, or click on \u2018download format\u2019 on the Import screen. (So that you can make sure your local csv contains all the latest changes)"),Object(i.b)("li",{parentName:"ol"},"Add new questions/Edit answers etc."),Object(i.b)("li",{parentName:"ol"},"Bulk import the edited CSV.")),Object(i.b)("p",{parentName:"div"},Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/kcSCumK.jpg",alt:null})))),Object(i.b)("h2",{id:"knowledge-from-files---document-cognition"},"Knowledge from files - Document Cognition"),Object(i.b)("p",null,"In above section we saw how to deal with structured FAQs.\nWhat if you have some documents instead? Our doc cognition model helps you search for FAQs from your unstructured documents."),Object(i.b)("h6",{id:"tags-structured-data-auto-indexing-faq"},"tags: ",Object(i.b)("inlineCode",{parentName:"h6"},"structured data")," ",Object(i.b)("inlineCode",{parentName:"h6"},"auto-indexing")," ",Object(i.b)("inlineCode",{parentName:"h6"},"FAQ")),Object(i.b)("h3",{id:"what-is-document-cognition-"},"What is Document Cognition ?"),Object(i.b)("p",null,"Document Cognition is a way to process ",Object(i.b)("strong",{parentName:"p"},"==unstructured textual data=="),". When you have multiple documents (20 or more) containing mostly (~70%) text, it is humanly impossible to convert this large pile of data into a structured format so that you can feed it to a chatbot. In such cases, we can leverage this knowledge by feeding it to the DocCog engine which utilizes its NLP model and directly searches for the most relevant response from within these documents.\nIn such cases, we can expect the model to answer queries and take us to the right page/paragraph content with ~75-85% accuracy depending on the type and size of documents."),Object(i.b)("h3",{id:"how-does-document-cognition-work-"},"How does Document Cognition work ?"),Object(i.b)("p",null,"Document Cognition Model parses the entire document, tokenizes into headings and paragraphs, and maps each paragraph to a page number. It skips tables, images, and scanned pages wherever it finds them. It then indexes the textual data into our proprietary model, where it tries to predict the kind of questions that someone might ask by looking at a specific document.\nIt primarily relies on :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"TF-IDF score")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Keyword frequency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Sentence structure"))),Object(i.b)("p",null,"When a new query is made, the model searches through the embeddings created during the above indexing process and suggests the most relevant paragraphs along with a score for each for ranking purposes."),Object(i.b)("h3",{id:"-getting-started"},"\ud83d\udcdd Getting Started"),Object(i.b)("h4",{id:"step-1-navigating-to-your-knowledge-base"},"Step 1: Navigating to your Knowledge Base"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Enter your YM chatbot builder console and click on ",Object(i.b)("strong",{parentName:"li"},"Data")," found on the left tool bar."),Object(i.b)("li",{parentName:"ol"},"On clicking Data, the ",Object(i.b)("strong",{parentName:"li"},"Database")," and ",Object(i.b)("strong",{parentName:"li"},"Knowledge Base")," console will be shown as seen on the image."),Object(i.b)("li",{parentName:"ol"},"Selecting ",Object(i.b)("strong",{parentName:"li"},"Knowledge Base")," will take you to the Document uploader portal.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/jPvq6lO.gif",alt:null})),Object(i.b)("h4",{id:"step-2-uploading-your-documents"},"Step 2: Uploading your documents"),Object(i.b)("p",null,"Now click on the ",Object(i.b)("strong",{parentName:"p"},"Upload")," option to upload the document to be auto-indexed and consumed by chatbot.\n",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/5crH7eH.gif",alt:null}),"\nYou will find options like:"),Object(i.b)("ul",{className:"contains-task-list"},Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Upload Document \ud83c\udf89 )"),Object(i.b)("li",{parentName:"ul",className:"task-list-item"},Object(i.b)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Search Document icon\n:::info\nMake sure to check the ",Object(i.b)("strong",{parentName:"li"},"Convert into Q&A")," check box to enable auotmated Q&A synthesis.\nAlso add appropirate ",Object(i.b)("strong",{parentName:"li"},"tags")," for better search result outcomes\n:::")),Object(i.b)("h3",{id:"types-of-search"},'Types of "Search"'),Object(i.b)("h4",{id:"semantic-based-search"},"Semantic-based Search"),Object(i.b)("p",null,"Option to perform a ",Object(i.b)("strong",{parentName:"p"},"semantic-based search")," (the bot will look at the sentence structure and keywords, look at the sentence, and try to map it to the most relevant sections in the documents)."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"It's recommended to use a keyword search if the total no. of words in the input query is>3.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"app.searchDocumentsNew({text:'query'}).then((resp)=> {\n  // Your logic goes here\n });\n")),Object(i.b)("h4",{id:"keyword-search"},"Keyword Search"),Object(i.b)("p",null,"Option to perform an only ",Object(i.b)("strong",{parentName:"p"},"keyword search")," (the bot will simply do an ES match query in all the documents for that keyword)."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"It's recommended to use keyword search if the total no. of words in input query is <=3.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"app.searchDocumentsNew(\n            {\n                text: app.data.message,\n                keyWordQuery: true\n            })\n")),Object(i.b)("h4",{id:"metadata-search"},"MetaData Search"),Object(i.b)("p",null,"Option to search for files based on ",Object(i.b)("strong",{parentName:"p"},"metadata tags"),". Think of it as a Google Drive search where you can search for all files with a specific name."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note that this does not search inside documents")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"app.searchDocumentsNew(\n            {\n                text: fileName,\n                metadataQuery: true\n            })\n")),Object(i.b)("p",null,"Option to ",Object(i.b)("strong",{parentName:"p"},"filter documents by metadata tags")," is also added within Doc-Cog for improved search results rendering. Imagine if you have HR policies for U.S. and India based employees and for a U.S. based employees, you want to search in only specific documents, you can use this function to filter only U.S. based documents through a tag. ",Object(i.b)("strong",{parentName:"p"},"A tag is just a key: value pair"),". Each document can have multiple tags which can be configured through the UI below."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/JfIUvIO.png",alt:null})),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'app.searchDocumentsNew(\n            {\n                text: app.data.message,\n                keyWordQuery: searchType,\n                resultsPerDocument: 5,\n                filterByMetadata: { "country": "India" }\n            })\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udcdd When using embedded searches ",Object(i.b)("strong",{parentName:"p"},"do not")," filter ",Object(i.b)("strong",{parentName:"p"},"stop words")," as the query loses context and becomes a basic keyword search. This leads to inaccurate/failed search results."))),Object(i.b)("h3",{id:"supported-formats"},"Supported Formats"),Object(i.b)("p",null,"Currently, we support PDF, PPT, and .Docx formats. We do not support web scraping and HTML. However, you can export webpages as PDFs and feed them to the engine."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udccc ",Object(i.b)("strong",{parentName:"p"},"Important:")),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Do ",Object(i.b)("strong",{parentName:"li"},"NOT")," use online encoders for Doc and PDF conversions."),Object(i.b)("li",{parentName:"ul"},"Do not change file extensions by ",Object(i.b)("strong",{parentName:"li"},"rename")," Changing a .txt file to .pdf file by rename just corrupts the file. Use proper Word and PDF Native convertors availablew with MS Word or PDF viewers for this task."),Object(i.b)("li",{parentName:"ul"},"Do not upload internaal documents to online convertors as it is a violation of policy and compliance issue.\n:::")),Object(i.b)("h3",{parentName:"div",id:"donts-wrt-document-cognition"},"Dont's w.r.t Document Cognition"))),Object(i.b)("p",null,"\ud83d\udccc Please note that document cognition is not a replacement for intent classification (journeys)\n:::\nSince it takes unstructured data as input, accuracy will always be lower than the intent classification model, and wherever possible, it is recommended to prefer intent classification (journeys) over document cognition."),Object(i.b)("p",null,"Following are some examples when intent classification is the right tool to use as opposed to document cognition -"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Most of the data is already in a structured format (tabular data, excel files, etc.) - the right way to handle this is by uploading to the bot database."),Object(i.b)("li",{parentName:"ul"},"We already have data in a FAQ-like structure instead of a lot of paragraphs - the right way to handle this is by creating intents."),Object(i.b)("li",{parentName:"ul"},"No. of documents are fewer and can be converted into structured data."),Object(i.b)("li",{parentName:"ul"},"Documents are not clean and have a lot of images, scanned pages, complex charts, tables, and diagrams, etc.")),Object(i.b)("hr",null),Object(i.b)("h4",{id:"watch-document-cognition-in-action"},"Watch Document Cognition in Action"),Object(i.b)("p",null,"{",Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/VNLJdGLiFvA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"}"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udccc Want to learn more? \u279c ",Object(i.b)("a",{parentName:"p",href:"https://yellowmessenger.atlassian.net/wiki/spaces/docs/pages/1293451266/Document+Cognition+v2"},"Check out our Developers Guide")))),Object(i.b)("h3",{id:"appendix-and-faq"},"Appendix and FAQ"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"A list of frequently asked questions on Document Cognition:"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"What does a good document format look like?"),"\nThe following are some of the characteristics of a document that\u2019ll be processed well during document cognition. It's recommended following these guidelines while pre-processing your document -"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It does not have scanned pages and images.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"80% of the content is textual and well-formatted (e.g. Wikipedia articles)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Remove content and index pages, appendix pages, etc. (we will add the logic to skip these automatically in coming releases)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"No bullet points before headings. Headings should have a larger font size and no spaces so that the parser can detect headings easily.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Always prefer the Word (.doc, .docx) version of the document if available, as some properties might get lost when converting it into PDF.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Tables will be skipped. if possible, try to upload documents with less tabular data or remove pages with tables altogether from the document."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Does it automatically create Questions and Answers from the feed document?"),"\nYes. It Does :)\n",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/mmwguiK.png",alt:null})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Why am I not getting the right result in the first suggestion?")),Object(i.b)("p",null,"Because document cognition is a probabilistic model that is \u201cpredicting\u201d the relevance of a specific paragraph or page by looking at the input string. There is no guarantee that the first result will be the most relevant result."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Why am I getting the other documents in suggestions which actually don't have the answer?")),Object(i.b)("p",null,"Same answer as above. The model has no way of \u201cknowing\u201d which document is correct, it can, however, assign a score to all the results based on its assessment of the documents."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Why am I getting multiple occurrences of the same document in the results?")),Object(i.b)("p",null,"Because there might be multiple pages/occurrences of relevant content in the same document. In such cases, we rank them, based on the score and return only two occurrences in each document by default. If you want to see more or fewer occurrences within the same document, you can control by passing the value of results_per_document in your search query."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Can the model convert tabular data into FAQs?")),Object(i.b)("p",null,"No, Tables will be skipped. if possible, try to upload documents with less tabular data or remove pages with tables altogether from the document. These tables can be uploaded/recreated in our bot database, where we can write business logic on top of them."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Why am I not able to access a document link, from a conversation I had earlier?")),Object(i.b)("p",null,"Currently, we have restricted the life of each SAS link to an hour for security reasons. This can be removed/updated as per client request. You can generate a new link by asking the same query again in the bot.\n",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/oBIthnM.png",alt:null}),"\n",Object(i.b)("strong",{parentName:"p"},"How do I ensure that the bot shows only relevant documents?")),Object(i.b)("p",null,"There is no specific logic added to detect irrelevance right now. However, we do provide a relevance score with each search result that the bot developer can use. The model returns all documents which contain even a few keywords in the query in decreasing order of relevance. The bot developer can choose to show only Top N (e.g. Top 5) or Top 25% of the results based on relevance score."),Object(i.b)("h6",{id:"tags-templates-documentation"},"tags: ",Object(i.b)("inlineCode",{parentName:"h6"},"Templates")," ",Object(i.b)("inlineCode",{parentName:"h6"},"Documentation")),Object(i.b)("h3",{id:"document-cognition-action-node-to-be-updated"},"Document Cognition Action Node (To be updated)"),Object(i.b)("p",null,"Use Doc Search without writing code!"))}d.isMDXComponent=!0}}]);