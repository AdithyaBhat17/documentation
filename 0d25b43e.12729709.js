(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{440:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?o.a.createElement(g,c(c({ref:t},s),{},{components:a})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<r;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),r=(a(0),a(440)),l=["components"],c={title:"Generate Google Translate API key and enable auto-translate",sidebar_label:"Auto translate (Google API key generation)"},i={unversionedId:"platform_concepts/inbox/inbox-settings/automation/chat_auto_translate",id:"platform_concepts/inbox/inbox-settings/automation/chat_auto_translate",isDocsHomePage:!1,title:"Generate Google Translate API key and enable auto-translate",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate.md",slug:"/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate",version:"current",sidebar_label:"Auto translate (Google API key generation)",sidebar:"platform_concepts",previous:{title:"Sticky agent chat assignment",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/stickyagent"},next:{title:"Automation agent actions with Studio",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/agent-actions"}},s=[{value:'<a name="at"></a> 1. Enable auto-translate',id:"1-enable-auto-translate",children:[]},{value:'<a name="gt"></a> 2. Generate google translate API key',id:"2-generate-google-translate-api-key",children:[]}],b={toc:s};function p(e){var t=e.components,a=Object(o.a)(e,l);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this article, you will learn: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#at"},"How to enable auto-translate?")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"#gt"},"Steps to generate a google translate API key."))),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"What is auto-translate?")),Object(r.b)("p",null,"With the Auto translate feature agents can talk with customers who speak different languages. With auto-translation, messages will automatically be translated to the preferred language of both parties.\nYou can see its functioning on the ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#1-chat-screen"},"chat screen"),". "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Any incoming language will be auto-detected by the system. You can also hardcode to translate only a particular set of languages. Once a foreign language is detected, Agents can identify the language at the top of their chat input box. If needed, agents can manually change the language."),Object(r.b)("li",{parentName:"ul"},"All incoming and outgoing messages would be translated according to the agents\u2019 and end-users preferred language. Agents can toggle and see both the original and translated message by clicking on the label - ",Object(r.b)("strong",{parentName:"li"},"Show translated / Show original"),"."),Object(r.b)("li",{parentName:"ul"},"If for any reason, the agents want to send a generic message such as an address without being translated, they can disable the auto-translate toggle in the chat input box. This will stop translation for that message alone. After that message is sent, the toggle will automatically enable itself for the translation of the next message.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/N6emsoU.png",alt:null})),Object(r.b)("img",{src:"https://i.imgur.com/QK8T02e.png",alt:"drawing",width:"50%"}),Object(r.b)("h2",{id:"1-enable-auto-translate"},Object(r.b)("a",{name:"at"})," 1. Enable auto-translate"),Object(r.b)("p",null," Follow the steps below to enable auto-translate: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open ",Object(r.b)("strong",{parentName:"li"},"Inbox")," > ",Object(r.b)("strong",{parentName:"li"},"Settings"),"."),Object(r.b)("li",{parentName:"ol"},"Search for ",Object(r.b)("strong",{parentName:"li"},"Auto Assignment"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/EAkPKUL.png",alt:null})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"To enable Auto to translate for Inbox, you need to generate and connect your Google Translate API key to your account by following the given steps (explained in detail in the next section):"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Create a New Project in your Google Cloud account."),Object(r.b)("li",{parentName:"ul"},"Activate Google Translation API service"),Object(r.b)("li",{parentName:"ul"},"Generate your API Key"),Object(r.b)("li",{parentName:"ul"},"Restrict the API usage (optional)"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Once your API key is validated, you would get a success notification. If not,  check the API key and try again. If the issue persists, regenerate the API key."))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/ocEzHGI.png",alt:null})),Object(r.b)("hr",null),Object(r.b)("h2",{id:"2-generate-google-translate-api-key"},Object(r.b)("a",{name:"gt"})," 2. Generate google translate API key"),Object(r.b)("p",null,"Follow the below steps to generate the google translate API key: "),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to ",Object(r.b)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"Google Cloud Platform console")," and log in with your Google credentials.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/UppSzrvO9uXf1622124831392.png",alt:"Get started"})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Create a ",Object(r.b)("strong",{parentName:"li"},"New Project")," from the top menu bar. Give it a name and select ",Object(r.b)("strong",{parentName:"li"},"Create"),". You will be directed to the project dashboard.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/ePMPdJ9zF3BY1622137538978.png",alt:"Project"})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/pi3Ma11DBHZP1622137648736.png",alt:"New Project"})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/m0lExhNNcJU21622137667179.png",alt:"Project Dashboard"})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Click the left hamburger button and select ",Object(r.b)("strong",{parentName:"li"},"APIs & Services"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Z6RbvvZRRNl91622137705437.png",alt:"APIs & Services"})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Press ",Object(r.b)("strong",{parentName:"li"},"Enable APIS and SERVICES")," in the Dashboard.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/7qKRLbr51MVo1622137798487.png",alt:"API Dashboard"})),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Now search for ",Object(r.b)("strong",{parentName:"li"},"translate")," and click  ",Object(r.b)("strong",{parentName:"li"},"Google Cloud Translation API1"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/PkuVLBjqInkc1622137863640.png",alt:"Search"})),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Click ",Object(r.b)("strong",{parentName:"li"},"Enable"),". This activates your Google Translation API service.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/eWLwPwKwyMZl1622137899195.png",alt:"Enable API"})),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"After you have enabled API, you might be asked to enter the billing details if you haven\u2019t done it already. You need a paid account to use Google\u2019s Translation services."))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/i2pOWjN9o7RQ1622137922530.png",alt:"Enable Billing"})),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"To generate your API key, select the ",Object(r.b)("strong",{parentName:"li"},"create credentials")," button from the screen. If you can\u2019t find the button, Go to the ",Object(r.b)("strong",{parentName:"li"},"credentials")," option from your side menu bar.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/S1AVBSnRummH1622138154568.png",alt:"Create Credentials"})),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Create credentials")," drop-down button and select the ",Object(r.b)("inlineCode",{parentName:"li"},"API key"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/agTiOFTSBxh01622138206885.png",alt:"Create API key"})),Object(r.b)("ol",{start:9},Object(r.b)("li",{parentName:"ol"},"Your API key would be displayed in a pop-up window. You can copy and paste this into your yellow inbox account.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/xFV0PrgCGUPy1622138248190.png",alt:"Your API key"})),Object(r.b)("ol",{start:10},Object(r.b)("li",{parentName:"ol"},"You can also restrict your API key to prevent unauthorized or overuse of your account. There are two types of restrictions:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Restrict the API on where it is being used"),Object(r.b)("li",{parentName:"ul"},"Restrict its usage quota.")))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/DIxldtu4vinh1622138291995.png",alt:"Restrict API key"})),Object(r.b)("hr",null),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"The cost of the Translate API is borne by the client."),Object(r.b)("li",{parentName:"ul"},"You can either choose to auto-translate all the incoming languages or hardcode to translate only a particular set of languages. Note that if you\u2019ve set it to auto-translate any language in the bot, it\u2019ll likely increase the billing."),Object(r.b)("li",{parentName:"ul"},"The translation will also work when transferring chats. For example, when agent \u2018A\u2019 whose default language is English transfers the incoming French chat to agent \u2018B\u2019 whose default language is Hindi, our system will translate all the previous messages from English to Hindi for agent \u2018B\u2019.")))))}p.isMDXComponent=!0}}]);