"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[76493],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3536:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"PayU Business",sidebar_label:"PayU Business"},p=void 0,s={unversionedId:"platform_concepts/appConfiguration/payuBiz",id:"platform_concepts/appConfiguration/payuBiz",title:"PayU Business",description:"Integrate your Yellow.ai platform with PayU account to receive payments from your users through PayU. You can generate payment links, UPI intents for whatsapp pay and receive notifications on the success/failure of the payments.",source:"@site/docs/platform_concepts/appConfiguration/payuBiz.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/payuBiz",permalink:"/docs/platform_concepts/appConfiguration/payuBiz",draft:!1,tags:[],version:"current",frontMatter:{title:"PayU Business",sidebar_label:"PayU Business"},sidebar:"platform_concepts",previous:{title:"Paytm",permalink:"/docs/platform_concepts/appConfiguration/paytm"},next:{title:"Razorpay",permalink:"/docs/platform_concepts/appConfiguration/razorpay"}},u={},m=[{value:"1. Connect PayU with Yellow.ai",id:"1-connect-payu-with-yellowai",level:2},{value:"1.1 Get API keys for your PayU account",id:"11-get-api-keys-for-your-payu-account",level:3},{value:"1.2 Enable the integration in yellow.ai",id:"12-enable-the-integration-in-yellowai",level:3},{value:"1.3 Configure webhook url",id:"13-configure-webhook-url",level:3},{value:"1.4 Receive event in yellow.ai",id:"14-receive-event-in-yellowai",level:3},{value:"2. Use-Cases",id:"2-use-cases",level:2},{value:"2.1 Generate payment link",id:"21-generate-payment-link",level:3},{value:"2.1 Generate UPI intent",id:"21-generate-upi-intent",level:3}],d={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Integrate your Yellow.ai platform with ",(0,l.kt)("a",{parentName:"p",href:"https://payu.in/about-us?_ga=2.219146714.274874686.1677657469-282964387.1677657469"},"PayU "),"account to receive payments from your users through PayU. You can generate payment links, UPI intents for whatsapp pay and receive notifications on the success/failure of the payments."),(0,l.kt)("h2",{id:"1-connect-payu-with-yellowai"},"1. Connect PayU with Yellow.ai"),(0,l.kt)("p",null,"To connect your PayU account with yellow.ai, follow these steps:"),(0,l.kt)("h3",{id:"11-get-api-keys-for-your-payu-account"},"1.1 Get API keys for your PayU account"),(0,l.kt)("p",null,"You need to write to ",(0,l.kt)("a",{parentName:"p",href:"mailto:integration@payu.in"},"PayUBiz team")," for the API keys. They will provide the keys for both the modes."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Test Mode:")," The test mode is a simulation mode that you can use to test your integration flow. Your customers will not be able to make payments in this mode."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Live Mode:")," Once you have tested your integration, you can switch to the live mode by replacing the test mode keys(in the yellow.ai integration section) with the live mode keys to accept payments from customers.")),(0,l.kt)("p",null,"Enter the API keys in the ",(0,l.kt)("strong",{parentName:"p"},"Client ID")," field of Yellow.ai's integration module, which we will cover in the following section."),(0,l.kt)("h3",{id:"12-enable-the-integration-in-yellowai"},"1.2 Enable the integration in yellow.ai"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Login to cloud.yellow.ai and click ",(0,l.kt)("strong",{parentName:"li"},"Integrations"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/RcDIdCN.png",alt:null})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Look for ",(0,l.kt)("strong",{parentName:"li"},"PayU Business")," in the search box or choose the ",(0,l.kt)("strong",{parentName:"li"},"Payment")," category and click ",(0,l.kt)("strong",{parentName:"li"},"PayU Business"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/zWeFVSs.png",alt:null}))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Fill in the following fields:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Salt value:")," Salt Value is used to create a unique hash for each transaction, which is then used to verify the authenticity of the transaction. The Salt Value is provided by PayU and should be kept confidential."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Client ID:")," Enter the ",(0,l.kt)("strong",{parentName:"li"},"API")," keys here."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payu base URL:")," Payubase URL is used to send API requests to the PayU payment gateway for payment processing."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Payu UPI base URL:")," Payu UPI base URL is used to send API requests to the PayU UPI payment gateway for UPI payment processing.")),(0,l.kt)("p",null,"Payu base URL and and Payu UPI base URL will differ for test and live modes."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payubase URL")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test mode - ",(0,l.kt)("a",{parentName:"li",href:"https://test.payu.in"},"https://test.payu.in")),(0,l.kt)("li",{parentName:"ul"},"Live mode - ",(0,l.kt)("a",{parentName:"li",href:"https://info.payu.in"},"https://info.payu.in"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payu UPI Base URL")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Test mode - ",(0,l.kt)("a",{parentName:"li",href:"https://test.payu.in"},"https://test.payu.in")),(0,l.kt)("li",{parentName:"ul"},"Live mode - ",(0,l.kt)("a",{parentName:"li",href:"https://secure.payu.in"},"https://secure.payu.in"))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Connect")," when you're done.")),(0,l.kt)("h3",{id:"13-configure-webhook-url"},"1.3 Configure webhook url"),(0,l.kt)("p",null,"Copy the webhook URL and the API key mentioned in the ",(0,l.kt)("strong",{parentName:"p"},"Instructions")," section of the PayUBiz Integration section in the yellow.ai platform."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/2cyhP5e.png",alt:null})),(0,l.kt)("p",null,"Use the webhook URL specific to your region -  ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D"},"India"),", ",(0,l.kt)("a",{parentName:"p",href:"https://r1.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D"},"MEA"),", ",(0,l.kt)("a",{parentName:"p",href:"https://r2.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D"},"Jakarta"),", ",(0,l.kt)("a",{parentName:"p",href:"https://r3.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D"},"Singapore"),",",(0,l.kt)("a",{parentName:"p",href:"https://r4.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D"}," USA"),", and ",(0,l.kt)("a",{parentName:"p",href:"https://r5.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D"},"Europe"),"."),(0,l.kt)("p",null,"PayUBiz will whitelist the webhook URL provided by the merchant in their systems. You can write to the ",(0,l.kt)("a",{parentName:"p",href:"mailto:integration@payu.in"},"PayU Integration team")," for more information ."),(0,l.kt)("h3",{id:"14-receive-event-in-yellowai"},"1.4 Receive event in yellow.ai"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Login to cloud.yellow.ai and click the ",(0,l.kt)("strong",{parentName:"li"},"Studio")," module from module-switcher."),(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"Event")," > ",(0,l.kt)("strong",{parentName:"li"},"Integrations"),". Activate the event 'PayUBiz Payment Status' by clicking the three dots next to it. ")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/yVp8jkd.png",alt:null})),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Once the event is activated, create a flow in the ",(0,l.kt)("strong",{parentName:"li"},"Studio")," module with this event as its trigger point. Based on the received event data, a message will be displayed to the end user. ")),(0,l.kt)("p",null,"The following is an example of payment status event, once the payment is received, 'Payment Done' message will be displayed to the user. "),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/hFfvxaR.png",alt:null})),(0,l.kt)("h2",{id:"2-use-cases"},"2. Use-Cases"),(0,l.kt)("p",null,"The following use-cases are accomodated in this integration."),(0,l.kt)("h3",{id:"21-generate-payment-link"},"2.1 Generate payment link"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys"},"Studio flow builder"),", choose the node type as ",(0,l.kt)("strong",{parentName:"li"},"Integrations")," and select ",(0,l.kt)("strong",{parentName:"li"},"PayU")," from the list of integrations that have been enabled for that particular bot. An ",(0,l.kt)("strong",{parentName:"li"},"Integration Action Node")," will be added to the flow builder.")),(0,l.kt)("img",{src:"https://i.imgur.com/gOTE1zk.png",alt:"drawing",width:"60%"}),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"When you click the node, you will see the a drop-down with supported actions in this integration. Select ",(0,l.kt)("strong",{parentName:"li"},"Generate Payment Link"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/saWr4er.png",alt:null})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Fill in the fields based on the details provided in the following table. ")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample value"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amount"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to be paid using the payment link.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ProductInfo"),(0,l.kt)("td",{parentName:"tr",align:null},"Iphone"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the product the user wants to purchase.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"Test"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the product.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CustomerName"),(0,l.kt)("td",{parentName:"tr",align:null},"Manish"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the customer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CustomerEmail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:test@test.com"},"test@test.com")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Email address of the customer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CustomerMobileNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"9999933344"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact number of the customer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"txnID"),(0,l.kt)("td",{parentName:"tr",align:null},"Order123"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The unique transaction ID that is generated dynamically.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CustomerAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"Ashoka Road, Mysore, Karnataka"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Address of the customer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CustomerCity"),(0,l.kt)("td",{parentName:"tr",align:null},"New york"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"City of the customer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CustomerResidentState"),(0,l.kt)("td",{parentName:"tr",align:null},"Karnataka"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"State of the customer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CustomerZipcode"),(0,l.kt)("td",{parentName:"tr",align:null},"845309"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Pincode of the customer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Send Email"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"The email address of the customer to send the invoice.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time Unit"),(0,l.kt)("td",{parentName:"tr",align:null},"h"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Frequency(in days, hours, minutes) at which a recurring payment will be charged.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDF"),(0,l.kt)("td",{parentName:"tr",align:null},"Shipping Method"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"User defined field - used to store any information corresponding to a particular transaction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Validation Period"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"Determines how long PayU will continue trying to charge the customer if the initial payment fails.")))),(0,l.kt)("p",null,"To use this Integration Action Node in an app.yellow.ai bot, refer the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'app.executeIntegrationAction({\n    "integrationName": "payu-payment-gateway",\n    "action": "Generate Payment Link",\n    "dynamicParams": {\n        "amount": "1",\n        "productInfo": "testProduct",\n        "customerFirstName": "Test Customer",\n        "customerEmail": "test@test.com",\n        "customerMobileNumber": "9999999999",\n        "txnid": "123456789"\n    }\n}).then((res)=>{\n    console.log("response from action node", res);\n    app.log(res, \'||Response from action node||\')\n}).catch((err)=>{\n    console.log("Error in action node",err);\n    app.log(err, \'||Error in action node||\')\n})\n')),(0,l.kt)("h3",{id:"21-generate-upi-intent"},"2.1 Generate UPI intent"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"In the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys"},"Studio flow builder"),", choose the node type as ",(0,l.kt)("strong",{parentName:"li"},"Integrations")," and select ",(0,l.kt)("strong",{parentName:"li"},"PayU")," from the list of integrations that have been enabled for that particular bot. An ",(0,l.kt)("strong",{parentName:"li"},"Integration Action Node")," will be added to the flow builder.")),(0,l.kt)("img",{src:"https://i.imgur.com/gOTE1zk.png",alt:"drawing",width:"60%"}),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"When you click the node, you will see the a drop-down with supported actions in this integration. Select ",(0,l.kt)("strong",{parentName:"li"},"Generate Payment Link"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/gkeqscs.png",alt:null})),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Fill in the following fields for the execution of the use-case. The following is a table that consists of the sample value,data type and description for each of these fields.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample value"),(0,l.kt)("th",{parentName:"tr",align:null},"Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amount"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to be paid using the payment link.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CustomerEmail"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"mailto:test@test.com"},"test@test.com")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Email address of the customer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CustomerPhoneNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"9999933344"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Contact number of the customer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CustomerName"),(0,l.kt)("td",{parentName:"tr",align:null},"Manish"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the customer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fail URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://alpha6.yellowmessenger.com/"},"https://alpha6.yellowmessenger.com/")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The redirection URL in case there's a payment failure.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Success URL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://alpha6.yellowmessenger.com/"},"https://alpha6.yellowmessenger.com/")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"The redirection URL in case of successful payment."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TXN S2S flow"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Txn S2S flow.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Transaction ID"),(0,l.kt)("td",{parentName:"tr",align:null},"Order123"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The unique transaction ID that is generated dynamically.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Product Info"),(0,l.kt)("td",{parentName:"tr",align:null},"Iphone"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the product.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UDF"),(0,l.kt)("td",{parentName:"tr",align:null},"CustomField"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"User defined Field - used to store any information corresponding to a particular transaction.")))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("strong",{parentName:"li"},"Generate UPI intenrt Integration Action Node")," has two outcomes, ",(0,l.kt)("strong",{parentName:"li"},"success")," or ",(0,l.kt)("strong",{parentName:"li"},"failure"),". If the payment link is generated successfully, the ",(0,l.kt)("strong",{parentName:"li"},"Integration Action Node")," returns a ",(0,l.kt)("strong",{parentName:"li"},"Success")," response code as shown below:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n       "metaData": {\n         "message": null,\n         "referenceId": "af65159e8566652849bc12a3450a8fca",\n         "statusCode": null,\n         "txnId": "wa5iy6b82pvquxcd1vby",\n         "txnStatus": "pending",\n         "unmappedStatus": "pending"\n       },\n       "result": {\n         "paymentId": 15961819086,\n         "merchantName": "wwwmerchantnamecom",\n         "merchantVpa": "payumoney@hdfcbank",\n         "amount": "1.00",\n         "intentURIData": "pa=payumoney@hdfcbank&pn=Gaurav Dua&tr=15961819086&tid=wa5iy6b82pvquxcd1vby&am=1.00&cu=INR&tn=UPI Transaction for wa5iy6b82pvquxcd1vby",\n         "acsTemplate": "PGh0bWw+PGJvZHk+PGZvcm0gbmFt"\n       }\n     }\n\n')),(0,l.kt)("p",null,"If generating UPI intent fails, the ",(0,l.kt)("strong",{parentName:"p"},"Integration Action Node")," returns a Failure response code as shown below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n{"message":"[INTG ERROR] Node API Execution failed for payu-payment-gateway_Create UPI Intent in bot x1645073590274: 4xx or 5xx series code encountered","name":"IntegrationNodeAPIError","apiResponseBody":{"result":null,"status":"failed","error":"EX117","message":"Invalid amount #~#Please ensure that you send all mandatory parameters in the transaction request to PayU.<br><div style=\'font-size: 13px;padding: 0 150px; padding: 0 150px; line-height: 18px;\'>Mandatory parameters which must be sent in the transaction are: <br><b>key, txnid, amount, productinfo, firstname, email, phone, surl, furl, hash</b></div>.<br><div style=\'font-size: 13px;padding: 0 150px; line-height: 18px;\'>The parameters which you have actually sent in the transaction are: <br><b> key, txnid, amount, productinfo, surl, hash, firstname, email, phone</b>.</div><br><div style=\'font-size: 13px;padding: 0 150px; line-height: 18px;\'>Mandatory parameter missing from your transaction request are: <br><b></b>.</div><br><div style=\'font-size: 13px;padding: 0 150px; line-height: 18px;\'>Please re-initiate the transaction with all the mandatory parameters.</div></p> "},"apiResponseStatusCode":500}\n')),(0,l.kt)("p",null,"To use this ",(0,l.kt)("strong",{parentName:"p"},"Integration Action Node")," in an app.yellow.ai bot, refer the following example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\napp.executeIntegrationAction({\n    "integrationName": "payu-payment-gateway",\n    "action": "Create UPI Intent",\n    "dynamicParams": {\n        "amount": "1",\n        "customerName": "farhan",\n        "customerEmail": "farhan.jafri2011a@gmail.com",\n        "customerMobileNumber": "9643999539",\n        "productInfo": "test",\n        "txnid":"wa5iy6b82pvquxcd1vby",\n        "successUrl":"https://staging.yellow.ai",\n        "failUrl":"https://staging.yellow.ai",\n        "txnFlow": 4\n    }\n}).then((res)=>{\n    console.log("response from action node", res);\n    app.log(res, \'||Response from action node||\')\n}).catch((err)=>{\n    console.log("Error in action node",err);\n    app.log(err, \'||Error in action node||\')\n})\n')))}c.isMDXComponent=!0}}]);