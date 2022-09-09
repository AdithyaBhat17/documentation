(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{298:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(406)),o=["components"],l={title:"Entities",sidebar_label:"Entities"},s={unversionedId:"platform_concepts/studio/train/entities",id:"platform_concepts/studio/train/entities",isDocsHomePage:!1,title:"Entities",description:"Entities are background or any additional information that is valuable to the message. At times, users tend to provide all the information(entities) upfront in an utterance. Using entities appropriately in bot model training leads to a better conversational experience.",source:"@site/docs/platform_concepts/studio/train/entities.md",slug:"/platform_concepts/studio/train/entities",permalink:"/docs/platform_concepts/studio/train/entities",version:"current",sidebar_label:"Entities",sidebar:"platform_concepts",previous:{title:"Intents",permalink:"/docs/platform_concepts/studio/train/intents"},next:{title:"Synonyms",permalink:"/docs/platform_concepts/studio/train/synonyms"}},c=[{value:'<a name="ex"></a> 1. Examples',id:"1-examples",children:[]},{value:'<a name="na"></a> 2. Access Entities Use the keyboard shortcut: <code>e</code> from any of the Studio pages to land on to entities.',id:"2-access-entities-use-the-keyboard-shortcut-e-from-any-of-the-studio-pages-to-land-on-to-entities",children:[]},{value:'<a name="ate"></a> 3. Add and Train Entities',id:"3-add-and-train-entities",children:[]},{value:'<a name="et"></a> 4. Entity Types',id:"4-entity-types",children:[{value:"4.1 List",id:"41-list",children:[]},{value:"4.2 Regex",id:"42-regex",children:[]},{value:"4.3 Text",id:"43-text",children:[]},{value:"4.4 System Entities",id:"44-system-entities",children:[]}]},{value:'<a name="ape"></a> 5. Autoskipping prompts using entities',id:"5-autoskipping-prompts-using-entities",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Entities are background or any additional information that is valuable to the message. At times, users tend to provide all the information(entities) upfront in an utterance. Using entities appropriately in bot model training leads to a better conversational experience."),Object(r.b)("p",null,"This document covers the following topics: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#ex"},"Examples of entities")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#na"},"Where to find entities")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#ate"},"How to add and train entities")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#et"},"Types of entities")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#ape"},"Autoskipping prompts using entities"))),Object(r.b)("h2",{id:"1-examples"},Object(r.b)("a",{name:"ex"})," 1. Examples"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"I want to book an appointment with the ",Object(r.b)("strong",{parentName:"p"},"Dentist")," on ",Object(r.b)("strong",{parentName:"p"},"27th May"),"."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre"},"- Entity 'Type of Doctor' = Dentist, 'Date' = 27th May\n"))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Buy the latest ",Object(r.b)("strong",{parentName:"p"},"SUV")," for your brand."),Object(r.b)("pre",{parentName:"blockquote"},Object(r.b)("code",{parentName:"pre"},"- Entity 'Type of car'= SUV \n"))),Object(r.b)("h2",{id:"2-access-entities-use-the-keyboard-shortcut-e-from-any-of-the-studio-pages-to-land-on-to-entities"},Object(r.b)("a",{name:"na"})," 2. Access Entities Use the keyboard shortcut: ",Object(r.b)("inlineCode",{parentName:"h2"},"e")," from any of the Studio pages to land on to entities."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open ",Object(r.b)("strong",{parentName:"li"},"Studio")," > ",Object(r.b)("strong",{parentName:"li"},"NLU"),". Click ",Object(r.b)("strong",{parentName:"li"},"Entities")," from the dropdown. ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/V8vaG07.png",alt:null})),Object(r.b)("h2",{id:"3-add-and-train-entities"},Object(r.b)("a",{name:"ate"})," 3. Add and Train Entities"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For the bot to recognize entites they must be added and trained. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Add Entities")," "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"+Add new entity"),"."),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("strong",{parentName:"li"},"Name"),". Select a ",Object(r.b)("a",{parentName:"li",href:"#et"},"Type")," from the dropdown.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Entity name should be alphanumeric, lower case and must not contain spaces.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/CE2V23U.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If ",Object(r.b)("strong",{parentName:"li"},"Enable similar entities"),' is selected, bot detects an entity even if there is a partial match. For example: "How much does ',Object(r.b)("strong",{parentName:"li"},"mahindra scorp"),' cost?" will look for the entity- ',Object(r.b)("strong",{parentName:"li"},"Mahindra Scorpio")," as it is a partial match. ")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Train entities")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Train entities"),". "),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("strong",{parentName:"li"},"Model Type")," (it can be trained for english/multiple-languages).")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/SxmQacm.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"When ",Object(r.b)("strong",{parentName:"li"},"Fuzzy search"),' is selected, bot searches for text that matches a term closely instead of exactly even when the terms are misspelled. For example, fuzzy search for "rode" will find terms similar in spelling, such as \u201cride\u201d or \u201cnode\u201d. ')),Object(r.b)("h2",{id:"4-entity-types"},Object(r.b)("a",{name:"et"})," 4. Entity Types"),Object(r.b)("p",null,"In the ",Object(r.b)("a",{parentName:"p",href:"https://cloud.yellow.ai/"},"yellow.ai")," platform, following entities can be defined:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"List Type")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Regex Type")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Text Type")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"System Entities"))),Object(r.b)("h3",{id:"41-list"},"4.1 List"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"These consist of around 60-70% usecases such as product catalogues, type of leaves, mode of payments, etc. Ideally when all possible distinct values of the entity are known, list type of entity can be used. For example:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Type of loan")," : Home, Personal, Car, Bike. "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Type of Leave")," : Sick, Casual, Privilege, Maternity, Paternity."))),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("strong",{parentName:"li"},"List")," type, and ",Object(r.b)("strong",{parentName:"li"},"List items"),"."),Object(r.b)("li",{parentName:"ul"},"In the list, add ",Object(r.b)("strong",{parentName:"li"},"Names")," of the items. "),Object(r.b)("li",{parentName:"ul"},"For each item, ",Object(r.b)("strong",{parentName:"li"},"Name")," and ",Object(r.b)("strong",{parentName:"li"},"Synonyms")," can be added.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Synonyms")," are multiple variations - ",Object(r.b)("em",{parentName:"p"},"Car")," can be regarded as ",Object(r.b)("em",{parentName:"p"},"4 wheeler")," and ",Object(r.b)("em",{parentName:"p"},"Bike")," as ",Object(r.b)("em",{parentName:"p"},"2 wheeler"),". Synonyms can be other meanings of the entity in other languages.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ZrZaS93.png",alt:null})),Object(r.b)("h3",{id:"42-regex"},"4.2 Regex"),Object(r.b)("p",null,"Cases when the pattern of the information is known but there is no way to list all the possible exact values of the same entity. This includes entities like Flight Number, ID cards, etc."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Policy Numbers")," - OG - XXXX -XXX -XXXX\n",Object(r.b)("strong",{parentName:"p"},"PAN Number")," - ABCDE1234F")),Object(r.b)("p",null,'Defining these entities is very simple, by entering the regular expression (general format of input) Example, Regex for PAN card- "',"[A-Z]","{5}","[0-9]","{4}","[A-Z]",'{1}".'),Object(r.b)("h3",{id:"43-text"},"4.3 Text"),Object(r.b)("p",null,"Text Type entities can be used when the use-case doesn't require list/regex type (when there is no specific list/format of entity items). "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("strong",{parentName:"li"},"Entity name")," and ",Object(r.b)("strong",{parentName:"li"},"Type"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/i5RGVng.png",alt:null})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open ",Object(r.b)("strong",{parentName:"li"},"Studio")," > ",Object(r.b)("strong",{parentName:"li"},"NLU")," > ",Object(r.b)("strong",{parentName:"li"},"Intents")," and ",Object(r.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-intent"},"add intents"),".  "),Object(r.b)("li",{parentName:"ul"},"In each Intent- user utterance, select a word that hold the meaning of an entity and right click. Select the required entity.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/P6WYblV.jpg",alt:null})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"It is highly recommended not to use text entity unless required as it is not very definate. ")),Object(r.b)("h3",{id:"44-system-entities"},"4.4 System Entities"),Object(r.b)("p",null,"Apart from the List and Pattern type entities, a set of entities are recognized by the model out-of-the-box without any specific training. These include - "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Name"),Object(r.b)("li",{parentName:"ul"},"Date"),Object(r.b)("li",{parentName:"ul"},"Email"),Object(r.b)("li",{parentName:"ul"},"Location")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"5-autoskipping-prompts-using-entities"},Object(r.b)("a",{name:"ape"})," 5. Autoskipping prompts using entities"),Object(r.b)("p",null,"To detect entity and skip prompts, open ",Object(r.b)("strong",{parentName:"p"},"Make prompts smarter")," of that respective prompt and select the entity value. Click ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#4-make-prompt-smarter"},"here")," to learn more on Make prompts smarter option.\nIf the entity value is detected/ present in the memory, that prompt will be skipped from the flow. "),Object(r.b)("p",null,"For example, if date entity is selected for autoskipping in date prompt, value of date will be automatically assigned to given date and user will not be shown that prompt. "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/3FJBAdK.png",alt:null})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Test Entities detected in a phrase/utterance using ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/train/tools#21-test-your-bot"},"Test your bot")," option in tools.")))}p.isMDXComponent=!0},406:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||r;return n?i.a.createElement(d,l(l({ref:t},c),{},{components:n})):i.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);