(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),l=a(7),o=(a(0),a(406)),r=["components"],i={title:"Translation",sidebar_label:"Translation"},c={unversionedId:"platform_concepts/studio/build/localization",id:"platform_concepts/studio/build/localization",isDocsHomePage:!1,title:"Translation",description:"Translation is used to provide multilingual support by manual translation for the bots when the user decides to switch the bot-language.",source:"@site/docs/platform_concepts/studio/build/localization.md",slug:"/platform_concepts/studio/build/localization",permalink:"/docs/platform_concepts/studio/build/localization",version:"current",sidebar_label:"Translation",sidebar:"platform_concepts",previous:{title:"Variables",permalink:"/docs/platform_concepts/studio/build/bot-variables"},next:{title:"Intents",permalink:"/docs/platform_concepts/studio/train/intents"}},b=[{value:'<a name="1"></a>  1. Translation',id:"1-translation",children:[{value:'<a name="11"></a> 1.1 Bulk Manage',id:"11-bulk-manage",children:[]},{value:'<a name="12"></a> 1.2 Using Code',id:"12-using-code",children:[]}]},{value:'<a name="2"></a> 2. Configure Nodes',id:"2-configure-nodes",children:[]},{value:'<a name="3"></a> 3. Advanced options',id:"3-advanced-options",children:[{value:"3.1 Variable in Translation",id:"31-variable-in-translation",children:[]}]}],s={toc:b};function p(e){var t=e.components,a=Object(l.a)(e,r);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Translation is used to provide multilingual support by manual translation for the bots when the user decides to switch the bot-language. "),Object(o.b)("p",null,"This also allows easy shifting of the bot to include more languages without much effort imposed on a bot developer. Businesses can simply go to Translation screen and add (import) translations / auto translate after adding languages themselves. This feature is created to enable easy visibility & decision making in multilingual bots."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Use Case")),Object(o.b)("p",null,"Bot is configured to display a welcome message - ",Object(o.b)("strong",{parentName:"p"},"Hello, welcome to India :)"),"\nIf the user prefers to converse in Hindi, the word ",Object(o.b)("strong",{parentName:"p"},"Hello")," can be translated with a personal touch like how a native Hindi speaker would speak - ",Object(o.b)("strong",{parentName:"p"},"Namaskar"),".\nSimilarly, for Tamil, the word ",Object(o.b)("strong",{parentName:"p"},"Hello")," can be translated to - ",Object(o.b)("strong",{parentName:"p"},"Wanakam"),".\nFew translations that could provide a human touch can be configured using the Translation feature. "),Object(o.b)("p",null,"This document discusses the following topics: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#1"},"How to configure multilingual messages"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#11"},"Using Bulk Manage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#12"},"Using Code")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#2"},"How to configure nodes to provide multilingual support"),"  "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#3"},"Advance options in Translation")," ")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"1-translation"},Object(o.b)("a",{name:"1"}),"  1. Translation"),Object(o.b)("p",null,"On this page, you can configure your messages in multiple languages.\nFollow the given steps: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open ",Object(o.b)("strong",{parentName:"li"},"Studio")," > ",Object(o.b)("strong",{parentName:"li"},"Translation"),". "),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"+Add Key"),".")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/haQzRRa.png",alt:null})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Enter ",Object(o.b)("strong",{parentName:"li"},"Key"),", which will be used as a keyword which will switch the language. "),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Description")," is optional. "),Object(o.b)("li",{parentName:"ol"},"Add the translated lines in the required languages.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/04wtZLQ.jpg",alt:null})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Scroll down, and click ",Object(o.b)("strong",{parentName:"li"},"Add"),". Manual configuration is completed. "),Object(o.b)("li",{parentName:"ol"},"You can add multiple keys and lines as per your requirement. ")),Object(o.b)("h3",{id:"11-bulk-manage"},Object(o.b)("a",{name:"11"})," 1.1 Bulk Manage"),Object(o.b)("p",null,"In the previous section, keys were added manually one by one. Manual translations take an immense amount of effort to add translations for each node.\nUsing Bulk Manage, you can upload all the keys at a time."),Object(o.b)("p",null,"Follow the steps below: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Bulk Manage")," > ",Object(o.b)("strong",{parentName:"li"},"Import"),".")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/6GhFAom.png",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Bulk Manage")," > ",Object(o.b)("strong",{parentName:"p"},"Export")," is used to download the existing data that is available.")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a CSV file with mandatory columns: ",Object(o.b)("strong",{parentName:"p"},"name")," (key), ",Object(o.b)("strong",{parentName:"p"},"english_text"),". This can be followed by the other configured languages (columns) like ",Object(o.b)("strong",{parentName:"p"},"hindi_text"),", ",Object(o.b)("strong",{parentName:"p"},"kannada_text"),", ",Object(o.b)("strong",{parentName:"p"},"tamil_text"),", etc.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click ",Object(o.b)("strong",{parentName:"p"},"Upload File"),". Select the CSV file from your local system to import the keys. Click ",Object(o.b)("strong",{parentName:"p"},"Import"),". "))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/BIj6OLQ.png",alt:null})),Object(o.b)("h3",{id:"12-using-code"},Object(o.b)("a",{name:"12"})," 1.2 Using Code"),Object(o.b)("p",null,"Translation can also be configured via code (from the ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/code"},"code")," tab).\nUse the following code in your function to get text message from code ",Object(o.b)("strong",{parentName:"p"},"app.renderMessage('code-goes-here', {}, 'default message')")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click ",Object(o.b)("strong",{parentName:"li"},"+Add Code"),". Add the above line in the code along with the default message in the required language.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/VCQyjt8.jpg",alt:null})),Object(o.b)("hr",null),Object(o.b)("h2",{id:"2-configure-nodes"},Object(o.b)("a",{name:"2"})," 2. Configure Nodes"),Object(o.b)("p",null,"Nodes must be configured in order to switch to the required language when required.\nFollow the steps below: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"On each of the nodes there is a Translation icon available (in the text field). Click on the icon. ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Bzlt66X.png",alt:null})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("strong",{parentName:"li"},"Key")," configured for that text translation (or, add new translations as you create each node). ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/wmSwZYu.png",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Bot is configured to switch the languages automatically using ISO codes (en- English, hi- Hindi).\nText node is set to 'Welcome' Translation key. Irrespective of what the text gets translated to, the bot displays the phrases that are configured manually. ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/anvjusp.jpg",alt:null})),Object(o.b)("hr",null),Object(o.b)("h2",{id:"3-advanced-options"},Object(o.b)("a",{name:"3"})," 3. Advanced options"),Object(o.b)("h3",{id:"31-variable-in-translation"},"3.1 Variable in Translation"),Object(o.b)("p",null,"With this feature, variables can be a part of the Translation messages with the help of '",Object(o.b)("strong",{parentName:"p"},"Fetch from"),"' field available in the nodes. "),Object(o.b)("p",null,"Consider a use-case ",Object(o.b)("strong",{parentName:"p"},"without")," ",Object(o.b)("strong",{parentName:"p"},"Translation"),": Variables are accessed directly on the ",Object(o.b)("strong",{parentName:"p"},"Boy says")," field using {{{variables.name}}}."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/yLteeOz.png",alt:null})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"With Translation"),", this node can be configured by following the given steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Select the localisation key on the node. "),Object(o.b)("li",{parentName:"ol"},"Select the variable in the ",Object(o.b)("strong",{parentName:"li"},"Fetch from")," field which must be displayed with the Translation text. ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/IjmOSrM.png",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Only variables of the datatype string can be used in the Translation text. To learn about the variable datatypes stored in each node, click ",Object(o.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables/"},"here"),".")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Add params in the message (",Object(o.b)("strong",{parentName:"li"},"Studio")," > ",Object(o.b)("strong",{parentName:"li"},"Build")," > ",Object(o.b)("strong",{parentName:"li"},"Translation"),").\nExample- {{{variable.<var_name>}}}.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/f0Y4mFa.png",alt:null})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Variable values will not change. Suppose a name is entered in English, it will not get translated to any other language through-out the flow.")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"This can also be accessed through code. ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"+Add new function")," in code. "),Object(o.b)("li",{parentName:"ul"},"Enter the required code. ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/QoqUT9C.png",alt:null})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"In the flow, add a ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#function"},"function")," action node. ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/D6fiGHo.png",alt:null})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Select a function name from the dropdown. ",Object(o.b)("strong",{parentName:"li"},"Store response in")," a variable. "),Object(o.b)("li",{parentName:"ul"},"In the further node, select the variable name at ",Object(o.b)("strong",{parentName:"li"},"Fetch from")," (for which the variable> function is configured via code). ")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/LQUae5f.png",alt:null})))}p.isMDXComponent=!0},406:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),l=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b=l.a.createContext({}),s=function(e){var t=l.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||o;return a?l.a.createElement(d,i(i({ref:t},b),{},{components:a})):l.a.createElement(d,i({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var b=2;b<o;b++)r[b]=a[b];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);