(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{277:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(393)),i=["components"],c={title:"Chat Custom fields",sidebar_label:"Chat Custom fields"},s={unversionedId:"platform_concepts/inbox/inbox-settings/chats-configuration/chat_custom_fields",id:"platform_concepts/inbox/inbox-settings/chats-configuration/chat_custom_fields",isDocsHomePage:!1,title:"Chat Custom fields",description:"Chat Custom fields",source:"@site/docs/platform_concepts/inbox/inbox-settings/chats-configuration/chat_custom_fields.md",slug:"/platform_concepts/inbox/inbox-settings/chats-configuration/chat_custom_fields",permalink:"/docs/platform_concepts/inbox/inbox-settings/chats-configuration/chat_custom_fields",version:"current",sidebar_label:"Chat Custom fields",sidebar:"platform_concepts",previous:{title:"Agent Actions",permalink:"/docs/platform_concepts/inbox/inbox-settings/agent-configuration/agent-actions"},next:{title:"Offline Ticketing / Chat",permalink:"/docs/platform_concepts/inbox/inbox-settings/chats-configuration/offline-chat"}},l=[{value:"What are custom fields?",id:"what-are-custom-fields",children:[]},{value:"Chat disposition with custom fields",id:"chat-disposition-with-custom-fields",children:[]},{value:"Reporting on custom fields",id:"reporting-on-custom-fields",children:[]},{value:"Automation on custom fields",id:"automation-on-custom-fields",children:[]}],d={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"chat-custom-fields"},"Chat Custom fields"),Object(o.b)("h3",{id:"what-are-custom-fields"},"What are custom fields?"),Object(o.b)("p",null,"Custom fields can be added to tickets and are used to track business-specific information related to the customer like Order ID, Address, case details, etc. Custom fields enable your terams to add more information about a case and add further context, which helps with better reporting and to resolve issues faster. Custom fields are available for both chat as well as ticketing modules."),Object(o.b)("h4",{id:"adding-a-new-custom-field"},"Adding a new custom field"),Object(o.b)("p",null,"You can define a new custom field by going to,"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Inbox > Chats > Settings > Chats configuration > Custom Fields > Add custom fields")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/iMY5utFBNX5I1635071973851.png",alt:"Adding custom fields"})),Object(o.b)("p",null,"There are several different types of custom fields availabel as shown below :\n",Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/WWLml6pNIMQz1635072064837.png",alt:"Types of custom fields"})),Object(o.b)("p",null,"Following are the steps to add a new field :"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add custom field type"),Object(o.b)("li",{parentName:"ol"},"Add field name - this is the name that appears in the ticket details page"),Object(o.b)("li",{parentName:"ol"},"Add placeholder - this is the placeholder text that appears on the input bar in the ticket details page")),Object(o.b)("p",null,"Following are the types and their examples :"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"Custom field"),Object(o.b)("th",{parentName:"tr",align:"center"},"Application"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Short Text"),Object(o.b)("td",{parentName:"tr",align:"center"},"Short text like credit card number or order id")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Long Text"),Object(o.b)("td",{parentName:"tr",align:"center"},"Address, Detailed reason for complain, etc")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Keyword"),Object(o.b)("td",{parentName:"tr",align:"center"},"A single word")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Tags"),Object(o.b)("td",{parentName:"tr",align:"center"},"Predefined tags like product category")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Checkbox"),Object(o.b)("td",{parentName:"tr",align:"center"},"e.g. is this a VIP customer, or was this a sale item?")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Radio buttons"),Object(o.b)("td",{parentName:"tr",align:"center"},"It acts like a drop-down list e.g. location, store name, etc")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Email"),Object(o.b)("td",{parentName:"tr",align:"center"},"Any email ID")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Number"),Object(o.b)("td",{parentName:"tr",align:"center"},"Any numerical value like an amount")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Phone"),Object(o.b)("td",{parentName:"tr",align:"center"},"Contact number, e.g. customer\u2019s emergency contact")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Date"),Object(o.b)("td",{parentName:"tr",align:"center"},"Any date value e.g. date of return of the item")))),Object(o.b)("p",null,"Once added, the field will be listed on the ticket/chat details section on the right sidebar as shown below :\n",Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/k5VEorRDldSg1635072109945.png",alt:"Example"})),Object(o.b)("p",null,"Only ",Object(o.b)("strong",{parentName:"p"},"inbox admin")," can create new custom fields."),Object(o.b)("h4",{id:"updating-a-custom-field"},"Updating a custom field"),Object(o.b)("p",null,"Any agent who has access to edit a ticket can update custom fields for that ticket by simply adding the information. Admins can, therefore, update custom fields for all the tickets. Agents can also search by custom field values as seen below (searching by custom field country)\n",Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/gJqieNE8tqm61635072154648.png",alt:"Custom field search"})),Object(o.b)("h3",{id:"chat-disposition-with-custom-fields"},"Chat disposition with custom fields"),Object(o.b)("p",null,"You can also mark a custom field as mandatory to create/transfer or close a ticket while creating the custom field. In such cases, the agent can not dispose off the chat without providing a value for the custom field as seen in the example below :\n",Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/NQEV68vQU6oF1635072213029.jpg",alt:"Chat disposition"})),Object(o.b)("h3",{id:"reporting-on-custom-fields"},"Reporting on custom fields"),Object(o.b)("p",null,"There is a column dedictaed to each custom field in the chat archives report as shown below\n",Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/5JZOkYaOM9KO1635072241566.jpg",alt:"Custom field reports"})),Object(o.b)("h3",{id:"automation-on-custom-fields"},"Automation on custom fields"),Object(o.b)("p",null,"Whenever a custom field is updated, we send an event ",Object(o.b)("strong",{parentName:"p"},"ticket-update")," with changeType ",Object(o.b)("strong",{parentName:"p"},"change_custom_field"),", you can capture this event in builder using event hub to develop automation flows following custom field updates - ",Object(o.b)("em",{parentName:"p"},"e.g. updating an order in shopify when the order ID custom field is updated in Yellow AI.")," "))}b.isMDXComponent=!0},393:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,u=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(u,c(c({ref:t},l),{},{components:n})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);