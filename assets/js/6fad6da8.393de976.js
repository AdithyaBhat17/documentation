"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[9417],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(k,l(l({ref:e},p),{},{components:a})):n.createElement(k,l({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[m]="string"==typeof t?t:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21778:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],i={title:"Custom fields in chat details",sidebar_label:"Custom fields"},s=void 0,c={unversionedId:"platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields",id:"platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields",title:"Custom fields in chat details",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields.md",sourceDirName:"platform_concepts/inbox/inbox-settings/workflows",slug:"/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/chat_custom_fields",draft:!1,tags:[],version:"current",frontMatter:{title:"Custom fields in chat details",sidebar_label:"Custom fields"},sidebar:"platform_concepts",previous:{title:"Custom status",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/custom-status"},next:{title:"SLA settings",permalink:"/docs/platform_concepts/inbox/inbox-settings/workflows/sla"}},p={},m=[{value:'<a name="1"></a> 1. Custom field in chat details',id:"-1-custom-field-in-chat-details",level:2},{value:'<a name="2"></a> 2. Add custom fields',id:"-2-add-custom-fields",level:2},{value:"2.1 Transfer/Resolve chat ticket",id:"21-transferresolve-chat-ticket",level:3},{value:'<a name="3"></a>  3. Download custom fields report',id:"--3-download-custom-fields-report",level:2},{value:'<a name="4"></a>  4. Automation on custom fields',id:"--4-automation-on-custom-fields",level:2}],d={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this article, you will learn: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1"},"Function of custom fields.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2"},"How to add custom fields?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3"},"How to download custom field report?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#4"},"How to capture custom field event on Studio?"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"-1-custom-field-in-chat-details"},(0,o.kt)("a",{name:"1"})," 1. Custom field in chat details"),(0,o.kt)("p",null,"You can find the custom fields in the chat details. These are customized fields created by the admin to obtain additional details of the ticket based on the industry.\nCustom fields are necessary for the agent/admin to Resolve/Transfer any ticket. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/9ws77BL.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What are custom fields?")),(0,o.kt)("p",null,"Custom fields can be added to tickets and are used to track business-specific information related to the customer like Order ID, Address, case details, etc. Custom fields enable your teams to add more information about a case and add further context, which helps with better reporting and to resolve issues faster. Custom fields are available for both chats and email (ticketing) modules."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Access")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inbox Agent")," with access to edit that particular ticket will have permission to update these fields in the chat. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Inbox Admins")," can update/create custom fields for all the tickets. Agents can also search by custom field values (for example: searching by custom field ",(0,o.kt)("strong",{parentName:"li"},"Country"),")")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/6pLT9Cm.png",alt:null})),(0,o.kt)("h2",{id:"-2-add-custom-fields"},(0,o.kt)("a",{name:"2"})," 2. Add custom fields"),(0,o.kt)("p",null,"Follow the given steps to add new custom fields:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Inbox")," > ",(0,o.kt)("strong",{parentName:"li"},"Chats")," > ",(0,o.kt)("strong",{parentName:"li"},"Settings"),"."),(0,o.kt)("li",{parentName:"ol"},"Search and select ",(0,o.kt)("strong",{parentName:"li"},"Custom fields"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/RS3lgWj.jpg",alt:null})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"You can add custom fields for ",(0,o.kt)("strong",{parentName:"li"},"Chat")," and ",(0,o.kt)("strong",{parentName:"li"},"Email")," tickets. Select the required tab.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/mdezMvJ.png",alt:null})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Chat custom fields can have ",(0,o.kt)("strong",{parentName:"p"},"Short text")," and ",(0,o.kt)("strong",{parentName:"p"},"Long text")," as read-only fields (agents will not be able to edit this value).\nThis is not available for Email custom fields.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"+Add custom field"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the required custom field details as per your requirement."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom field type"),": Select from the dropdown.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/6BMzMfs.jpg",alt:null})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Field name"),": Type the name that must appear on the ticket details page."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Placeholder"),": This is the placeholder text that appears on the input bar on the ticket details page. Example: Enter phone number here, Type user name. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Options"),": If the custom field is of the type checkbox or radio button, you must enter the values in the options field by using enter key after each value. ")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/dgiHjOz.png",alt:null})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Types of custom fields")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Custom field"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Application"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Short Text"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Short text like credit card number or order id")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Long Text"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Long text like Address, Detailed reason for complaint, etc")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Keyword"),(0,o.kt)("td",{parentName:"tr",align:"center"},"A single word text/ alphanumeric value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Tags"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Predefined ",(0,o.kt)("a",{parentName:"td",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags/"},"tags")," like product category")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Checkbox"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Agent can select multiple values that are listed. For example following values can be listed VIP customer, Sales, IT department, and the agent can select one or many of the relevant values")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Radio buttons"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Agent can select only one value from the defined list. For example Location, Store name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Email"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Any email ID")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Number"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Any numerical /decimal value like an amount")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Phone"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Contact number. Example: Customer\u2019s emergency contact")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Date"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Any date value. Example: Date of return of the item, Order placement date")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Hierarchical"),(0,o.kt)("td",{parentName:"tr",align:"center"},"When there are multiple levels of information, you can use this field")))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Hierarchical custom field"),'\nFor example, when the customer sends "Charging broken", the agent can obtain the product details (Laptop/Mobile) and assign it to a component (Charger) and find a resolution for that component. '),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/HgH1VrT.png",alt:null}))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),". Once these fields are added, they will be listed on the ticket/chat details section on the right sidebar.")),(0,o.kt)("h3",{id:"21-transferresolve-chat-ticket"},"2.1 Transfer/Resolve chat ticket"),(0,o.kt)("p",null,"For chat disposition with custom fields, you must mark the below checkboxes: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Required to create ticket- A ticket cant is created if this field value is not entered. "),(0,o.kt)("li",{parentName:"ol"},"Required to transfer ticket- This value must be entered by the agent to transfer the ticket to another agent. "),(0,o.kt)("li",{parentName:"ol"},"Required to close ticket- This value must be entered by the agent if the ticket must be closed. ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/e5TbTK6.png",alt:null})),(0,o.kt)("p",null,"If these checkboxes are marked, the agent can not dispose of the chat without providing a value for the custom field."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/gb1Fcyw.png",alt:null})),(0,o.kt)("h2",{id:"--3-download-custom-fields-report"},(0,o.kt)("a",{name:"3"}),"  3. Download custom fields report"),(0,o.kt)("p",null,"There is a column dedicated to each custom field in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/chats/chat-archives-report"},"chat archives report"),"."),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/5JZOkYaOM9KO1635072241566.jpg",alt:"Custom field reports"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Click ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/inbox/analytics-reports/reports/reports"},"here")," to learn to download the chat archive report. ")),(0,o.kt)("h2",{id:"--4-automation-on-custom-fields"},(0,o.kt)("a",{name:"4"}),"  4. Automation on custom fields"),(0,o.kt)("p",null,"When a custom field is updated, the app sends an event ",(0,o.kt)("strong",{parentName:"p"},"ticket-update")," with changeType ",(0,o.kt)("strong",{parentName:"p"},"change_custom_field"),", you can capture this event in Builder/Studio on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#inb-1"},"Event Hub")," to develop automation flows following custom field updates.\nFor example: Updating an order in Shopify when the order ID custom field is updated in Yellow AI."))}u.isMDXComponent=!0}}]);