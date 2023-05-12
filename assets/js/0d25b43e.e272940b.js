"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[17048],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=o,h=u["".concat(i,".").concat(g)]||u[g]||m[g]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2631:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=["components"],s={title:"Generate Google Translate API key and enable auto-translate",sidebar_label:"Auto translate (Google API key generation)"},i=void 0,p={unversionedId:"platform_concepts/inbox/inbox-settings/automation/chat_auto_translate",id:"platform_concepts/inbox/inbox-settings/automation/chat_auto_translate",title:"Generate Google Translate API key and enable auto-translate",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate.md",sourceDirName:"platform_concepts/inbox/inbox-settings/automation",slug:"/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/chat_auto_translate",draft:!1,tags:[],version:"current",frontMatter:{title:"Generate Google Translate API key and enable auto-translate",sidebar_label:"Auto translate (Google API key generation)"},sidebar:"platform_concepts",previous:{title:"Chat assignment for sticky agent",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/stickyagent"},next:{title:"Agent actions",permalink:"/docs/platform_concepts/inbox/inbox-settings/automation/agent-actions"}},c={},u=[{value:'<a name="usecase"></a>  Auto-translate functionality',id:"--auto-translate-functionality",level:2},{value:"Use cases of auto translate",id:"use-cases-of-auto-translate",level:3},{value:'<a name="at"></a> Enable auto-translate settings',id:"-enable-auto-translate-settings",level:2},{value:'<a name="gt"></a> Generate google translate API key',id:"-generate-google-translate-api-key",level:3}],m={toc:u};function g(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article, you will learn: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#usecase"},"What is the purpose of auto translate?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#at"},"How to enable auto-translate?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gt"},"Steps to generate a google translate API key."))))),(0,r.kt)("h2",{id:"--auto-translate-functionality"},(0,r.kt)("a",{name:"usecase"}),"  Auto-translate functionality"),(0,r.kt)("p",null,"With the Auto translate feature agents can talk with customers who speak different languages. With auto-translation, messages will automatically be translated to the preferred language of both parties.\nYou can see its functioning on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/chats/chatscreen#translate"},"chat screen"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any incoming language will be auto-detected by the system. You can also hardcode to translate only a particular set of languages. Once a foreign language is detected, Agents can identify the language at the top of their chat input box. If needed, agents can manually change the language."),(0,r.kt)("li",{parentName:"ul"},"All incoming and outgoing messages would be translated according to the agents\u2019 and end-users preferred language. Agents can toggle and see both the original and translated message by clicking on the label - ",(0,r.kt)("strong",{parentName:"li"},"Show translated / Show original"),"."),(0,r.kt)("li",{parentName:"ul"},"If for any reason, the agents want to send a generic message such as an address without being translated, they can disable the auto-translate toggle in the chat input box. This will stop translation for that message alone. After that message is sent, the toggle will automatically enable itself for the translation of the next message.")),(0,r.kt)("h3",{id:"use-cases-of-auto-translate"},"Use cases of auto translate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Improving customer service"),": With auto-translate, agents can effectively communicate with customers who speak different languages, enabling businesses to offer better customer service and support to a global audience."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Breaking down language barriers"),": Auto-translate eliminates language barriers, allowing people who speak different languages to communicate with each other efficiently."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Streamlining communication"),": Auto-translate can save businesses time and resources by eliminating the need for multilingual agents or human translators."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Facilitating international expansion"),": Auto-translate is a valuable tool for businesses that want to expand their operations globally, as it allows them to communicate with customers in different regions and countries."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enhancing collaboration"),": Auto-translate can foster collaboration among teams that speak different languages, enabling them to work together on projects and achieve their goals more effectively.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/N6emsoU.png",alt:null})),(0,r.kt)("img",{src:"https://i.imgur.com/QK8T02e.png",alt:"drawing",width:"50%"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The cost of the Translate API is borne by the client."),(0,r.kt)("li",{parentName:"ul"},"You can either choose to auto-translate all the incoming languages or hardcode to translate only a particular set of languages. If you have set it to auto-translate any language in the bot, it will likely increase the billing."),(0,r.kt)("li",{parentName:"ul"},"The translation will also work when transferring chats. For example, when agent \u2018A\u2019 whose default language is English transfers the incoming French chat to agent \u2018B\u2019 whose default language is Hindi, our system will translate all the previous messages from English to Hindi for agent \u2018B\u2019."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"-enable-auto-translate-settings"},(0,r.kt)("a",{name:"at"})," Enable auto-translate settings"),(0,r.kt)("p",null,"Follow the steps below to enable auto-translate: "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Prerequisite")),(0,r.kt)("p",{parentName:"admonition"},"To Auto translate messages, you must first set  ",(0,r.kt)("strong",{parentName:"p"},"Translate user message")," to ",(0,r.kt)("strong",{parentName:"p"},"YES")," in ",(0,r.kt)("strong",{parentName:"p"},"Studio")," while configuring the ",(0,r.kt)("strong",{parentName:"p"},"Raise Ticket")," node.",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/FszdHVQ.png",alt:null}))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,r.kt)("strong",{parentName:"li"},"Settings"),"."),(0,r.kt)("li",{parentName:"ol"},"Search for ",(0,r.kt)("strong",{parentName:"li"},"Auto Translate"),".\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/EAkPKUL.png",alt:null})),(0,r.kt)("li",{parentName:"ol"},"To enable Auto to translate for Inbox, you need to generate and connect your Google Translate API key to your account by following the given steps (explained in detail in the next section):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a New Project in your Google Cloud account."),(0,r.kt)("li",{parentName:"ul"},"Activate Google Translation API service"),(0,r.kt)("li",{parentName:"ul"},"Generate your API Key"),(0,r.kt)("li",{parentName:"ul"},"Restrict the API usage (optional)"))),(0,r.kt)("li",{parentName:"ol"},"Once your API key is validated, you would get a success notification. If not,  check the API key and try again. If the issue persists, regenerate the API key.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/ocEzHGI.png",alt:null}))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-generate-google-translate-api-key"},(0,r.kt)("a",{name:"gt"})," Generate google translate API key"),(0,r.kt)("p",null,"Follow the below steps to generate the google translate API key: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com"},"Google Cloud Platform console")," and log in with your Google credentials.\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/UppSzrvO9uXf1622124831392.png",alt:"Get started"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("strong",{parentName:"p"},"New Project")," from the top menu bar. Give it a name and select ",(0,r.kt)("strong",{parentName:"p"},"Create"),". You will be directed to the project dashboard.\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/ePMPdJ9zF3BY1622137538978.png",alt:"Project"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/pi3Ma11DBHZP1622137648736.png",alt:"New Project"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/m0lExhNNcJU21622137667179.png",alt:"Project Dashboard"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the left hamburger button and select ",(0,r.kt)("strong",{parentName:"p"},"APIs & Services"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Z6RbvvZRRNl91622137705437.png",alt:"APIs & Services"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Press ",(0,r.kt)("strong",{parentName:"p"},"Enable APIS and SERVICES")," in the Dashboard.\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/7qKRLbr51MVo1622137798487.png",alt:"API Dashboard"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now search for ",(0,r.kt)("strong",{parentName:"p"},"translate")," and click  ",(0,r.kt)("strong",{parentName:"p"},"Google Cloud Translation API1"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/PkuVLBjqInkc1622137863640.png",alt:"Search"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Enable"),". This activates your Google Translation API service.\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/eWLwPwKwyMZl1622137899195.png",alt:"Enable API"})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"After you have enabled API, you might be asked to enter the billing details if you haven\u2019t done it already. You need a paid account to use Google\u2019s Translation services.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/i2pOWjN9o7RQ1622137922530.png",alt:"Enable Billing"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To generate your API key, select the ",(0,r.kt)("strong",{parentName:"p"},"create credentials")," button from the screen. If you can\u2019t find the button, Go to the ",(0,r.kt)("strong",{parentName:"p"},"credentials")," option from your side menu bar.\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/S1AVBSnRummH1622138154568.png",alt:"Create Credentials"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"Create credentials")," drop-down button and select the ",(0,r.kt)("inlineCode",{parentName:"p"},"API key"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/agTiOFTSBxh01622138206885.png",alt:"Create API key"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your API key would be displayed in a pop-up window. You can copy and paste this into your yellow inbox account.\n",(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/xFV0PrgCGUPy1622138248190.png",alt:"Your API key"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can also restrict your API key to prevent unauthorized or overuse of your account. There are two types of restrictions:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Restrict the API on where it is being used"),(0,r.kt)("li",{parentName:"ul"},"Restrict its usage quota.\n",(0,r.kt)("img",{parentName:"li",src:"https://cdn.yellowmessenger.com/DIxldtu4vinh1622138291995.png",alt:"Restrict API key"}))))))}g.isMDXComponent=!0}}]);