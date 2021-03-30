(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),s=(n(0),n(221)),r={title:"Context Management",sidebar_label:"Adding Contextual Responses"},i={unversionedId:"howtos/context/add-contextual-response",id:"howtos/context/add-contextual-response",isDocsHomePage:!1,title:"Context Management",description:"How to add Contextual Responses?",source:"@site/docs/howtos/context/add-contextual-response.md",slug:"/howtos/context/add-contextual-response",permalink:"/docs/howtos/context/add-contextual-response",version:"current",sidebar_label:"Adding Contextual Responses",sidebar:"howtos",previous:{title:"Localisation",permalink:"/docs/howtos/create/localisation"},next:{title:"Setup Web Widget",permalink:"/docs/howtos/design/setup-web-widget"}},l=[{value:"How to add Contextual Responses?",id:"how-to-add-contextual-responses",children:[]},{value:"How to setup context at any step?",id:"how-to-setup-context-at-any-step",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"how-to-add-contextual-responses"},"How to add Contextual Responses?"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Keywords")," : contextual, why, what, how"),Object(s.b)("p",null,"Setting up contextual responses means adding more context to the response to a particular step. To simplify it further lets take an example",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("strong",{parentName:"p"},"Bot")," : Can you share your email with me?",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("del",{parentName:"p"},Object(s.b)("strong",{parentName:"del"},"User")," : Sure, ",Object(s.b)("a",Object(a.a)({parentName:"del"},{href:"mailto:gooduser@email.com"}),"gooduser@email.com")),Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("strong",{parentName:"p"},"Bot")," : Why do you need my email?  "),Object(s.b)("p",null,"What if instead of giving their email address during a conversation, customer asked ",Object(s.b)("em",{parentName:"p"},"What is an email")," Or ",Object(s.b)("em",{parentName:"p"},"Why do you need my email"),".\nThese type of contextual intents can be handled in the following ways :"),Object(s.b)("h4",{id:"first-way-of-adding-contextual-responses--adding-global-contextual-responses"},"First Way of Adding Contextual Responses : Adding Global Contextual Responses"),Object(s.b)("p",null,"Setting up standard contextual responses for all steps in all journeys in the bot. Basically if the users ask Why/What/How/ etc at any step, the response will be the same. If you want the same, please follow the following steps : "),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Step 1")," : On the Yellow Messenger Platform, under Studio > Learn > Context Management as shown below.\n",Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/VcWZIGBahtyb1615525545331.png",alt:"contextual"}))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Step 2")," : You can change or add the responses for the various predefined contextual intents like What/Why/How/When/Where/etc.\n",Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/lDKUvR0i95JI1615525572272.png",alt:"contextual"}))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Step 3")," : You can Bulk Upload and Export these intents and responses as well.\n",Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/Cvhplh0fIFoc1615525606462.png",alt:"contextual"}))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Step 4")," : In order to add new intents click on ",Object(s.b)("em",{parentName:"p"}," '+ Add Contextual Responses'"),"\n",Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/grzVMIxid0Tr1615525631900.png",alt:"contextual"}))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Step 5")," : Add as many training utterances as possible, prompts that the user can type for a particular context. "),Object(s.b)("p",null,"Now when the user will ask for these questions ","[Why/What/How/etc]"," at any step during the conversation. The bot will be able to send these contexual responses to the user. "),Object(s.b)("p",null,"Please note that the user is not moving ahead while user is asking contextual responses. The user will remain at the same step untill the correct response if given. "),Object(s.b)("p",null,Object(s.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/fZN8lIisIfxw1615525657154.png",alt:"contextual"}))),Object(s.b)("h4",{id:"second-way-of-adding-contextual-responses--adding-step-contextual-responses"},"Second Way of Adding Contextual Responses : Adding Step Contextual Responses"),Object(s.b)("p",null,"In case you want a different contextual response at every step in the bot, please follow the given steps : "),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Step 1")," : Could not find this in the new platform UI. "),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Step 2")," : "),Object(s.b)("h3",{id:"how-to-setup-context-at-any-step"},"How to setup context at any step?"),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"We humans are always aware of context. Even chatbots also store the context to maintain the state of conversation.\nConversations always happen on a particular topic (like intent), and it is a chain of texts (steps) exchanged between the user and the bot. So, this context keeps the conversation flowing.")),Object(s.b)("p",null,"This context is stored as a JSON which is constantly updated at each and every step of a conversation. It stores all the info required to identify the state of a conversation, like the ",Object(s.b)("em",{parentName:"p"},"step information")," (visited steps), ",Object(s.b)("em",{parentName:"p"},"intent name")," (current intent) any many more.\nIt is available at app.context"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'app.context object\n{\n   "complete": true,\n   "steps": {\n        "mobile_num": "9999999999",\n       "customer_id": "-",\n        "otp": "-"\n    },\n    "intent": "login"\n}\n')),Object(s.b)("p",null,"At any point, you can access this object to do things like"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"getting data of the steps"),Object(s.b)("li",{parentName:"ul"},"knowing the current status of the conversation ( Intent name & the number of steps visited )"),Object(s.b)("li",{parentName:"ul"},"changing a step value")),Object(s.b)("h4",{id:"getting-data-of-the-steps"},"Getting data of the steps"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"app.context.steps is an object which contains key-value pairs of steps and the step values (user inputs) in the format step_name: step_value"),Object(s.b)("li",{parentName:"ul"},"A new step is added into app.context.steps only after the validation of that step."),Object(s.b)("li",{parentName:"ul"},"When it hits an intent, this steps object is initially empty"),Object(s.b)("li",{parentName:"ul"})),Object(s.b)("h4",{id:"getting-intent-name"},"Getting Intent name"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"app.context.intent contains the current intent name")),Object(s.b)("h4",{id:"other-data"},"Other data"),Object(s.b)("p",null,"(Very limited use cases though)"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"app.context.complete contains a boolean value. If it\u2019s true then the intent is done with visiting all the steps"),Object(s.b)("li",{parentName:"ul"},"app.dataHistory contains an array of most recent incoming messages to the bot\nIn action function, you can make use of this app.context object to get all the required information to process the answer.")),Object(s.b)("p",null,"A typical action function below"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"return new Promise(resolve => {\n\n    // Getting the data from the steps\n    let otp = app.context.steps.otp\n    let mobile = app.context.steps['mobile_number'] // another way of accessing data\n\n    // API CALL which requires the above data\n    // api logic here\n    \n    app.sendTextMessage('You have been successfully logged in')\n\n    resolve();\n});\n\n")),Object(s.b)("p",null,"This object is always updated for every intent. When it hits another intent all the steps data will erased and the intent name will be changed."))}p.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(r,".").concat(d)]||b[d]||u[d]||s;return n?o.a.createElement(h,i(i({ref:t},c),{},{components:n})):o.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);