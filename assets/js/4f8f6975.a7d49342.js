"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[84461],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return g}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(a),d=l,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(g,r(r({ref:e},u),{},{components:a})):n.createElement(g,r({ref:e},u))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},581:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=a(87462),l=a(63366),o=(a(67294),a(3905)),r=["components"],i={title:"Translation",sidebar_label:"Language translation"},s=void 0,p={unversionedId:"platform_concepts/studio/build/localization",id:"platform_concepts/studio/build/localization",title:"Translation",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/studio/build/localization.md",sourceDirName:"platform_concepts/studio/build",slug:"/platform_concepts/studio/build/localization",permalink:"/docs/platform_concepts/studio/build/localization",draft:!1,tags:[],version:"current",frontMatter:{title:"Translation",sidebar_label:"Language translation"},sidebar:"platform_concepts",previous:{title:"Bot Variables",permalink:"/docs/platform_concepts/studio/build/bot-variables"},next:{title:"Intents",permalink:"/docs/platform_concepts/studio/train/intents"}},u={},c=[{value:'<a name="1"></a> 1. Translation',id:"-1-translation",level:2},{value:'<a name="11"></a> 1.1 Add multiple translations at once',id:"-11-add-multiple-translations-at-once",level:3},{value:'<a name="12"></a> 1.2 Add translations using code',id:"-12-add-translations-using-code",level:3},{value:'<a name="2"></a> 2. Configure nodes',id:"-2-configure-nodes",level:2},{value:'<a name="3"></a> 3. Advanced options',id:"-3-advanced-options",level:2},{value:"3.1 Using variables in translation",id:"31-using-variables-in-translation",level:3}],m={toc:c};function d(t){var e=t.components,a=(0,l.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this article, you will learn:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1"},"How to configure multilingual messages"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#11"},"Using bulk manage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#12"},"Using code")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2"},"How to configure nodes to provide multilingual support")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3"},"Advance options in Translation"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-1-translation"},(0,o.kt)("a",{name:"1"})," 1. Translation"),(0,o.kt)("p",null,"Translation is used to provide multilingual support by manual translation for the bots when the user decides to switch the bot language.\nThis also allows easy shifting of the bot to include more languages without much effort imposed on a bot developer. Businesses can simply go to the Translation screen and add (import) translations/auto-translate after adding languages themselves. This feature is created to enable easy visibility & decision-making in multilingual bots."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use Case")),(0,o.kt)("p",null,"The bot is configured to display a welcome message - ",(0,o.kt)("strong",{parentName:"p"},"Greetings, welcome to India :)"),"\nIf the user prefers to converse in Hindi, the word ",(0,o.kt)("strong",{parentName:"p"},"Greetings")," can be translated with a personal touch like how a native Hindi speaker would speak - ",(0,o.kt)("strong",{parentName:"p"},"Namaskar"),".\nSimilarly, for Tamil, the word ",(0,o.kt)("strong",{parentName:"p"},"Greetings")," can be translated to - ",(0,o.kt)("strong",{parentName:"p"},"Wanakam"),".\nFew translations that could provide a human touch can be configured using the Translation feature."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"On the translations page, you can configure your messages in multiple languages. To add translations, follow the given steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Studio")," > ",(0,o.kt)("strong",{parentName:"li"},"Translation"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"+Add Key"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/haQzRRa.png",alt:null})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Enter ",(0,o.kt)("strong",{parentName:"li"},"Key"),", which will be used as a keyword that will switch the language."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Description")," is optional."),(0,o.kt)("li",{parentName:"ol"},"Add the translated lines in the required languages.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/04wtZLQ.jpg",alt:null})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Scroll down, and click ",(0,o.kt)("strong",{parentName:"li"},"Add"),". This will complete the manual configuration."),(0,o.kt)("li",{parentName:"ol"},"You can add multiple keys and lines as per your requirement.")),(0,o.kt)("h3",{id:"-11-add-multiple-translations-at-once"},(0,o.kt)("a",{name:"11"})," 1.1 Add multiple translations at once"),(0,o.kt)("p",null,"In the previous section, you learnt how keys can be added manually one after the other. Manual translations take immense effort to add translations for each node. Using ",(0,o.kt)("strong",{parentName:"p"},"Bulk Manage"),", you can upload all the keys at a time."),(0,o.kt)("p",null,"To import/export translations in bulk, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Bulk Manage")," > ",(0,o.kt)("strong",{parentName:"li"},"Import"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/6GhFAom.png",alt:null})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," ",(0,o.kt)("strong",{parentName:"p"},"Bulk Manage")," > ",(0,o.kt)("strong",{parentName:"p"},"Export")," is used to download the existing data that is available.")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create a CSV file with mandatory columns: ",(0,o.kt)("strong",{parentName:"li"},"name")," (key), ",(0,o.kt)("strong",{parentName:"li"},"english_text"),". This can be followed by the other configured languages (columns) like ",(0,o.kt)("strong",{parentName:"li"},"hindi_text"),", ",(0,o.kt)("strong",{parentName:"li"},"kannada_text"),", ",(0,o.kt)("strong",{parentName:"li"},"tamil_text"),", etc."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Upload File"),". Select the CSV file from your local system to import the keys. Click ",(0,o.kt)("strong",{parentName:"li"},"Import"),". ")),(0,o.kt)("img",{src:"https://i.imgur.com/BIj6OLQ.png",alt:"drawing",width:"70%"}),(0,o.kt)("h3",{id:"-12-add-translations-using-code"},(0,o.kt)("a",{name:"12"})," 1.2 Add translations using code"),(0,o.kt)("p",null,"Translation can also be configured via code (from the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/code"},"function")," tab)."),(0,o.kt)("p",null,"Use the following code in your function to get a text message from the code\n",(0,o.kt)("inlineCode",{parentName:"p"},"app.renderMessage('code-goes-here', {}, 'default message')")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"+Add Code"),". Add the above line in the code along with the default message in the required language.\n",(0,o.kt)("img",{parentName:"li",src:"https://i.imgur.com/VCQyjt8.jpg",alt:null}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-2-configure-nodes"},(0,o.kt)("a",{name:"2"})," 2. Configure nodes"),(0,o.kt)("p",null,"Nodes must be configured to use the translation feature and switch to the required language when needed. To configure translations in nodes, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On each node, there is a Translation icon available (in the text field). Click on the icon.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Bzlt66X.png",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("strong",{parentName:"li"},"Key")," that is already configured for that text translation (or, add new translations as you create each node).")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/wmSwZYu.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Bot is configured to switch the languages automatically using ISO codes (en- English, hi- Hindi).\nText node is set to 'Welcome' Translation key. Irrespective of what the text gets translated to, the bot displays the phrases that are configured manually.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/anvjusp.jpg",alt:null})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-3-advanced-options"},(0,o.kt)("a",{name:"3"})," 3. Advanced options"),(0,o.kt)("h3",{id:"31-using-variables-in-translation"},"3.1 Using variables in translation"),(0,o.kt)("p",null,"Variables can be a part of the Translation messages with the help of the ",(0,o.kt)("strong",{parentName:"p"},"Fetch from")," field available in the nodes.\nConsider a use-case ",(0,o.kt)("strong",{parentName:"p"},"without"),"  ",(0,o.kt)("strong",{parentName:"p"},"Translation"),": Variables are accessed directly on the ",(0,o.kt)("strong",{parentName:"p"},"Bot says")," field using {{{variables.name}}}."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/yLteeOz.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"With Translation"),", this node can be configured by following the given steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the localization key on the node."),(0,o.kt)("li",{parentName:"ol"},"Select the variable in the ",(0,o.kt)("strong",{parentName:"li"},"Fetch from")," field which must be displayed with the Translation text.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/IjmOSrM.png",alt:null})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Variable values will not change. Suppose a name is entered in English, it will not get translated to any other language throughout the flow."),(0,o.kt)("li",{parentName:"ul"},"Only variables of the datatype string can be used in the Translation text. To learn about the variable datatypes stored in each node, click ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables"},"here"),"."))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add params in the message (",(0,o.kt)("strong",{parentName:"li"},"Studio")," > ",(0,o.kt)("strong",{parentName:"li"},"Build")," > ",(0,o.kt)("strong",{parentName:"li"},"Translation"),").",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"{{{variable.<var_name>}}}"))))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/f0Y4mFa.png",alt:null})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Variables can also be added to translations through code."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"On the functions screen, click ",(0,o.kt)("strong",{parentName:"p"},"+Add new function")," and enter the required code for translation using variables.\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/QoqUT9C.png",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the flow, add a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#function"},"function")," action node. Select a function name from the dropdown. ",(0,o.kt)("strong",{parentName:"p"},"Store response in")," a variable."),(0,o.kt)("img",{src:"https://i.imgur.com/D6fiGHo.png",alt:"drawing",width:"80%"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the further node, select the variable name at ",(0,o.kt)("strong",{parentName:"p"},"Fetch from")," (for which the variable> function is configured via code)."),(0,o.kt)("img",{src:"https://i.imgur.com/LQUae5f.png",alt:"drawing",width:"80%"}))))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What Next?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add translations to the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes"},"nodes")," and see how it impacts the bot conversation.")))}d.isMDXComponent=!0}}]);