(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{295:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),o=(n(0),n(392)),r=["components"],s={title:"Entities",sidebar_label:"Entities"},c={unversionedId:"platform_concepts/studio/train/entities",id:"platform_concepts/studio/train/entities",isDocsHomePage:!1,title:"Entities",description:"Entities are background or any additional information that is valueable to the message. At times, users tend to provide all the information(entities) upfront in an utterance. Using entities appropriately in bot model training leads to a better conversational experience.",source:"@site/docs/platform_concepts/studio/train/entities.md",slug:"/platform_concepts/studio/train/entities",permalink:"/docs/platform_concepts/studio/train/entities",version:"current",sidebar_label:"Entities",sidebar:"platform_concepts",previous:{title:"Intents",permalink:"/docs/platform_concepts/studio/train/intents"},next:{title:"FAQ Management",permalink:"/docs/platform_concepts/studio/train/add-faqs"}},p=[{value:"Entity Types",id:"entity-types",children:[{value:"List Type",id:"list-type",children:[]},{value:"Pattern Type",id:"pattern-type",children:[]},{value:"System Entities",id:"system-entities",children:[]},{value:"Text type",id:"text-type",children:[]}]},{value:"Autoskipping prompts using entities",id:"autoskipping-prompts-using-entities",children:[]}],l={toc:p};function b(e){var t=e.components,n=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Entities are background or any additional information that is valueable to the message. At times, users tend to provide all the information(entities) upfront in an utterance. Using entities appropriately in bot model training leads to a better conversational experience."),Object(o.b)("p",null,"For Example - "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"I want to book an appointment with the ",Object(o.b)("strong",{parentName:"p"},"Dentist")," on ",Object(o.b)("strong",{parentName:"p"},"27th May")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",{parentName:"pre"},"-   Dentist is type of Doctor and 27th May is Date.\n"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Buy the latest ",Object(o.b)("strong",{parentName:"p"},"SUV")," for your brand"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",{parentName:"pre"},"-   Here, SUV referes to the type of car.\n"))),Object(o.b)("h2",{id:"entity-types"},"Entity Types"),Object(o.b)("p",null,"In ",Object(o.b)("a",{parentName:"p",href:"https://cloud.yellow.ai/"},"cloud.yellow.ai"),", there are two kind of entities that can be defined - "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"List Type")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Pattern Type")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"System Entities")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Text Type"))),Object(o.b)("h3",{id:"list-type"},"List Type"),Object(o.b)("p",null,"These consist of around 60-70% usecases such as product catalogues, type of leaves, mode of payments, etc. Ideally when all possible distinct values of the entity are known, list type of entity can be used. For example -"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Type of loan")," : Home, Personal, Car, Bike\n",Object(o.b)("strong",{parentName:"p"},"Type of Leave")," : Sick, Casual, Privilege, Maternity, Paternity ")),Object(o.b)("p",null,"Additionally, each value can have multiple variations - ",Object(o.b)("em",{parentName:"p"},"Car")," can be regarded as ",Object(o.b)("em",{parentName:"p"},"4 wheeler")," and ",Object(o.b)("em",{parentName:"p"},"Bike")," as ",Object(o.b)("em",{parentName:"p"},"2 wheeler"),". These variations can be added as synonyms to each value. Synonyms can be other meanings of the entity in other languages."),Object(o.b)("h3",{id:"pattern-type"},"Pattern Type"),Object(o.b)("p",null,"Cases when the pattern of the information is known but there is no way to list all the possible exact values of the same entity. This includes entities like Fligh Number, ID cards, etc."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Policy Numbers")," - OG - XXXX -XXX -XXXX\n",Object(o.b)("strong",{parentName:"p"},"PAN Number")," - ABCDE1234F")),Object(o.b)("p",null,"Defining these entities is very simple, by entering the regular expression (general format of input)."),Object(o.b)("h3",{id:"system-entities"},"System Entities"),Object(o.b)("p",null,"Apart from the List and Pattern type entities, a set of entities are recognized by the model out of the box without any specific training. These include - "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name"),Object(o.b)("li",{parentName:"ul"},"Date"),Object(o.b)("li",{parentName:"ul"},"Email"),Object(o.b)("li",{parentName:"ul"},"Location")),Object(o.b)("h3",{id:"text-type"},"Text type"),Object(o.b)("p",null,"Text Type entities should be used when your use case doesn't fall into any of the above entities use cases or when you do not have a specific list/format of you entity items. "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Most cases are covered by above 3 entity types, it's highly recommended you do not use text entity unless needed as it is not very definate as above 3. ")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2139\ufe0f  Text entites also need tagging on utterances for training purposes.\nAdd a few utterances to your intent (where you might need to detect this entity) containing some examples of this entity and ",Object(o.b)("strong",{parentName:"p"},"double click")," to tag. ")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Don't forget to ",Object(o.b)("inlineCode",{parentName:"p"},"Train Entities")," before trying!"))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"autoskipping-prompts-using-entities"},"Autoskipping prompts using entities"),Object(o.b)("p",null,"As a next step, to detect entity and skip prompts, we need to go to prompt settings of that prompt, and select entity value of which if  mentioned or present in memory, that prompt should be skipped. "),Object(o.b)("p",null,"For example, in above 1st example, if date entity is selected for autoskipping in date prompt, value of date will be automatically assigned to given date and user will not be shown that prompt. "),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/ipn5mLW.gif",alt:null})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can test Entities detected in a phrase/utterance using ",Object(o.b)("a",{parentName:"p",href:"../tools#1-test-your-bot"},"Test your bot")," option in tools !"))))}b.isMDXComponent=!0},392:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(r,".").concat(m)]||b[m]||u[m]||o;return n?i.a.createElement(d,s(s({ref:t},p),{},{components:n})):i.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);