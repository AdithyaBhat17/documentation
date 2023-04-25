"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6083],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=l,c=u["".concat(p,".").concat(d)]||u[d]||k[d]||r;return n?a.createElement(c,i(i({ref:t},s),{},{components:n})):a.createElement(c,i({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97972:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={title:"BillDesk EmailPay",sidebar_label:"BillDesk EmailPay"},p="BillDesk EmailPay",m={unversionedId:"platform_concepts/appConfiguration/billdesk-emailpay",id:"platform_concepts/appConfiguration/billdesk-emailpay",title:"BillDesk EmailPay",description:"Integrate your Yellow.ai account with BillDesk EmailPay to receive payments from your users. This integration allows the following,",source:"@site/docs/platform_concepts/appConfiguration/billdesk-emailpay.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/billdesk-emailpay",permalink:"/docs/platform_concepts/appConfiguration/billdesk-emailpay",draft:!1,tags:[],version:"current",frontMatter:{title:"BillDesk EmailPay",sidebar_label:"BillDesk EmailPay"},sidebar:"platform_concepts",previous:{title:"Zoho SalesIQ",permalink:"/docs/platform_concepts/appConfiguration/zoho-live-chat"},next:{title:"Billdesk UPI",permalink:"/docs/platform_concepts/appConfiguration/billdesk"}},s={},u=[{value:"1. Connect BillDesk EmailPay with Yellow.ai",id:"1-connect-billdesk-emailpay-with-yellowai",level:2},{value:"1.1 Enable the integration in yellow.ai",id:"11-enable-the-integration-in-yellowai",level:3},{value:"1.2 Configure webhook URL in Billdesk dashboard.",id:"12-configure-webhook-url-in-billdesk-dashboard",level:3},{value:"1.3 Define the fields to be passed in the API",id:"13-define-the-fields-to-be-passed-in-the-api",level:3},{value:"1.4 Receive events in Yellow.ai",id:"14-receive-events-in-yellowai",level:3},{value:"2. Use-case",id:"2-use-case",level:2},{value:"2.1 Generate Payment Link",id:"21-generate-payment-link",level:3}],k={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"billdesk-emailpay"},"BillDesk EmailPay"),(0,r.kt)("p",null,"Integrate your Yellow.ai account with ",(0,r.kt)("a",{parentName:"p",href:"https://www.billdesk.com/web/"},"BillDesk EmailPay")," to receive payments from your users. This integration allows the following,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate a payment link to receive payments"),(0,r.kt)("li",{parentName:"ol"},"Check the status of the payments and recieve notifications on the same.")),(0,r.kt)("h2",{id:"1-connect-billdesk-emailpay-with-yellowai"},"1. Connect BillDesk EmailPay with Yellow.ai"),(0,r.kt)("p",null,"To connect your BillDesk account with yellow.ai, follow these steps:"),(0,r.kt)("h3",{id:"11-enable-the-integration-in-yellowai"},"1.1 Enable the integration in yellow.ai"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to cloud.yellow.ai and click ",(0,r.kt)("strong",{parentName:"li"},"Integrations")," from the module switcher.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/sOirlTU.png",alt:null})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Search for ",(0,r.kt)("strong",{parentName:"li"},"Billdesk EmailPay")," or choose the category named Payment from the left navigation bar and click ",(0,r.kt)("strong",{parentName:"li"},"Billdesk EmailPay"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/eILS2u2.png",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Fill in the following fields. Reach out to the ",(0,r.kt)("strong",{parentName:"li"},"BillDesk")," team for this info.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Message code"),(0,r.kt)("li",{parentName:"ul"},"Secret key"),(0,r.kt)("li",{parentName:"ul"},"Campaign ID"),(0,r.kt)("li",{parentName:"ul"},"Campaign code"),(0,r.kt)("li",{parentName:"ul"},"BillDesk base URL(this is already populated)")),(0,r.kt)("h3",{id:"12-configure-webhook-url-in-billdesk-dashboard"},"1.2 Configure webhook URL in Billdesk dashboard."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Copy the webhook URL mentioned in the ",(0,r.kt)("strong",{parentName:"li"},"Instructions to connect")," section of the ",(0,r.kt)("strong",{parentName:"li"},"Billdesk EmailPay Integration Card")," (previous screenshot). "),(0,r.kt)("li",{parentName:"ol"},"Append the region of your bot to the domain of the webhook url. r1/r2/r3/r4/r5 are the regions of your bot, you can refer the following list for the same.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"r1 - MEA "),(0,r.kt)("li",{parentName:"ul"},"r2 - Jakarta "),(0,r.kt)("li",{parentName:"ul"},"r4 - USA "),(0,r.kt)("li",{parentName:"ul"},"r5 - Europe "),(0,r.kt)("li",{parentName:"ul"},"r3 - Singapore")),(0,r.kt)("p",null,"For example, if the domain is ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai"},"https://cloud.yellow.ai"),", you need to change it to ",(0,r.kt)("a",{parentName:"p",href:"https://r1.cloud.yellow.ai"},"https://r1.cloud.yellow.ai")," if the region of the bot is MEA. If the bot belongs to India, you can use origin domain itself."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Share the webhook URL to ",(0,r.kt)("strong",{parentName:"li"},"BillDesk SPOC"),". They will configure the webhook at their end.")),(0,r.kt)("h3",{id:"13-define-the-fields-to-be-passed-in-the-api"},"1.3 Define the fields to be passed in the API"),(0,r.kt)("p",null,"Please specify the ",(0,r.kt)("strong",{parentName:"p"},"Min length"),", ",(0,r.kt)("strong",{parentName:"p"},"Max length")," and the ",(0,r.kt)("strong",{parentName:"p"},"data type"),"(numeric/alphanumeric) for the UDFs that are mentioned in this table."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"params"),(0,r.kt)("th",{parentName:"tr",align:null},"data_type"),(0,r.kt)("th",{parentName:"tr",align:null},"Min Length"),(0,r.kt)("th",{parentName:"tr",align:null},"Max Length"),(0,r.kt)("th",{parentName:"tr",align:null},"UDF Field mapped to BillDesk"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"numeric"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"10000000"),(0,r.kt)("td",{parentName:"tr",align:null},"UDF 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone_num"),(0,r.kt)("td",{parentName:"tr",align:null},"alphanumeric"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"UDF 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"alphanumeric"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"UDF 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sender"),(0,r.kt)("td",{parentName:"tr",align:null},"alphanumeric"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"UDF 4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"alphanumeric"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"UDF 5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unique_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"alphanumeric"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"UDF 6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"order_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"alphanumeric"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"UDF 7")))),(0,r.kt)("h3",{id:"14-receive-events-in-yellowai"},"1.4 Receive events in Yellow.ai"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Login to cloud.yellow.ai and click ",(0,r.kt)("strong",{parentName:"li"},"Studio"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Event")," from the left navigation bar and then choose ",(0,r.kt)("strong",{parentName:"li"},"Integrations"),"."),(0,r.kt)("li",{parentName:"ol"},"Activate the event ",(0,r.kt)("strong",{parentName:"li"},"Billdesk EmailPay Payment Status")," by clicking the three dots next to it.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/T0fRth0.png",alt:null})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"A journey with its trigger point as this event should be created in ",(0,r.kt)("strong",{parentName:"li"},"Studio"),". Based on the received event data, an appropriate message will be displayed to the end user.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/Bmi1ELe.png",alt:null})),(0,r.kt)("h2",{id:"2-use-case"},"2. Use-case"),(0,r.kt)("p",null,"You can generate payment links for your customers to pay."),(0,r.kt)("h3",{id:"21-generate-payment-link"},"2.1 Generate Payment Link"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Studio flow builder, select the ",(0,r.kt)("strong",{parentName:"li"},"Integrations")," node and click ",(0,r.kt)("strong",{parentName:"li"},"Billdesk EmailPay")," from the list of integrations that have been enabled for that bot.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/kHnNZrh.png",alt:null})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"After clicking ",(0,r.kt)("strong",{parentName:"li"},"Billdesk EmailPay"),", an ",(0,r.kt)("strong",{parentName:"li"},"Integration Action Node")," will be added to the flow builder. Click that node and select ",(0,r.kt)("strong",{parentName:"li"},"Generate Payment Link")," from them.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/PCSXyiW.png",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Fill in all the mandatory fields. The below-mentioned table consists of the sample value, data type and description for all these fields.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Amount"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to be paid using the Payment Link. Only two digit after decimal is supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customer Phone Number"),(0,r.kt)("td",{parentName:"tr",align:null},"INR"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Customer phone number.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customer Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Test"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the customer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Order ID"),(0,r.kt)("td",{parentName:"tr",align:null},"TestOrder122"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique Order ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Send Email"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Sending link through email",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"True:")," Payment link will be sent via email (Currently not supported).",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"td"},"False:")," Payment link will be generated in the bot.")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Generate Payment Link")," Integration Action Node has two outcomes, success or failure. If the payment link is generated successfully, the ",(0,r.kt)("strong",{parentName:"li"},"Integration Action Node")," returns a ",(0,r.kt)("strong",{parentName:"li"},"Success")," response code as shown below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n      "url": "https://uat.billdesk.com/MercOnline/URLRenderer/C7g",\n       "status": "success"\n      }\n\n\n')),(0,r.kt)("p",null,"If generating payment link fails, the ",(0,r.kt)("strong",{parentName:"p"},"Integration Action Node")," returns a ",(0,r.kt)("strong",{parentName:"p"},"Failure")," response code as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n"errorCode": "<<Error Code>>"\n"errorMessage": "<<Error Message/Description>>"\n"status": "failed"\n}\n')),(0,r.kt)("p",null,"To use this ",(0,r.kt)("strong",{parentName:"p"},"Integration Action Node")," in an app.yellow.ai bot, refer the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'app.executeIntegrationAction({\n  "integrationName": "billdesk-emailpay",\n  "action": "Generate payment link",\n  "dynamicParams": {\n    "amount": 10.00,\n    "customerName": "John",\n    "customerMobileNumber": "9955557879",\n    "orderId": "TestOrder123",\n    "sendEmail": "false"\n  }\n}).then((res) => {\n  console.log("response from action node", res);\n  app.log(res, \'||Response from action node||\')\n}).catch((err) => {\n  console.log("Error in action node", err);\n  app.log(err, \'||Error in action node||\')\n})\n\n')))}d.isMDXComponent=!0}}]);