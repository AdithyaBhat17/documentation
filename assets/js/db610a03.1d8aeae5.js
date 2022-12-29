"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[8471],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36215:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Paytm Payment Gateway",sidebar_label:"Paytm"},s=void 0,p={unversionedId:"platform_concepts/appConfiguration/paytm",id:"platform_concepts/appConfiguration/paytm",title:"Paytm Payment Gateway",description:"Yellow.ai Integration with Paytm Payment Gateway enables the end user to do the following:",source:"@site/docs/platform_concepts/appConfiguration/paytm.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/paytm",permalink:"/docs/platform_concepts/appConfiguration/paytm",draft:!1,tags:[],version:"current",frontMatter:{title:"Paytm Payment Gateway",sidebar_label:"Paytm"},sidebar:"platform_concepts",previous:{title:"Netcore Smartech",permalink:"/docs/platform_concepts/appConfiguration/netcore"},next:{title:"PayU Business",permalink:"/docs/platform_concepts/appConfiguration/payuBiz"}},u={},m=[{value:"1. Use cases",id:"1-use-cases",level:2},{value:"1.1 Generate Payment Link",id:"11-generate-payment-link",level:3},{value:"1.2 Initiate Refund",id:"12-initiate-refund",level:3},{value:"1.3 Check Refund Status",id:"13-check-refund-status",level:3},{value:"2. Configuration",id:"2-configuration",level:2}],d={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Yellow.ai Integration with Paytm Payment Gateway enables the end user to do the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate a payment link and receive an intimation regarding the status of the payment as to whether it was a success or failure."),(0,o.kt)("li",{parentName:"ol"},"Initiate the process of refund."),(0,o.kt)("li",{parentName:"ol"},"Check the status of the refund that was initiated.")),(0,o.kt)("h2",{id:"1-use-cases"},"1. Use cases"),(0,o.kt)("p",null,"Following are the use cases that are currently accommodated in the Integration:"),(0,o.kt)("h3",{id:"11-generate-payment-link"},"1.1 Generate Payment Link"),(0,o.kt)("p",null,"In the studio flow builder, you need to choose the node type Integrations from the dialog box and then you will see an option to select Paytm from the list of Integrations that have been enabled for that particular bot."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/7r0Td7w.png",alt:null})),(0,o.kt)("p",null,"After clicking on Paytm, you will see that an Integration Action Node is added to the flow builder. On clicking the Integration Action Node, you will see the dropdown of available use cases for this integration and you need to choose Generate Payment Link from that dropdown."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/mA9hm4Q.png",alt:null})),(0,o.kt)("p",null,"The set of mandatory fields required for the successful execution of this use case (Generate Payment Link in this case), will be displayed. The below-mentioned table consists of the sample value, data type, and description for each field present in the above screenshot:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field name"),(0,o.kt)("th",{parentName:"tr",align:null},"Sample value"),(0,o.kt)("th",{parentName:"tr",align:null},"Data type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,o.kt)("td",{parentName:"tr",align:null},"1588402269"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"EPOCH timestamp of the time at which the request is being sent")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Amount"),(0,o.kt)("td",{parentName:"tr",align:null},"3500"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Transaction amount")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LinkName"),(0,o.kt)("td",{parentName:"tr",align:null},"Test"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the link that you want to display to the customer, link name is used to generate a long URL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LinkType"),(0,o.kt)("td",{parentName:"tr",align:null},"FIXED"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Type of link")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LinkDescription"),(0,o.kt)("td",{parentName:"tr",align:null},"Test"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Description of the link that you want to display to the customer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SendSms"),(0,o.kt)("td",{parentName:"tr",align:null},"true/false"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Flag whether SMS is to be sent to the customer by Paytm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SendEmail"),(0,o.kt)("td",{parentName:"tr",align:null},"true/false"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Flag whether Email is to be sent to the customer by Paytm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CustomerName"),(0,o.kt)("td",{parentName:"tr",align:null},"Mahesh"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the customer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CustomerEmail"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"mailto:test@gmail.com"},"test@gmail.com")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Email ID of the customer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CustomerMobile"),(0,o.kt)("td",{parentName:"tr",align:null},"9876543210"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Mobile number of the customer")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"LinkNotes"),(0,o.kt)("td",{parentName:"tr",align:null},"Reference details"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Add additional notes to your link. This won\u2019t be shown to the customers")))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Generate Payment Link Integration")," Action Node has two possible outcomes, success or failure which are depicted by the success and fallback branches. Based on whether the execution of the Integration Action Node was successful or not, the flow will proceed to the ",(0,o.kt)("strong",{parentName:"p"},"success")," or ",(0,o.kt)("strong",{parentName:"p"},"fallback")," branches respectively."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The easiest way to identify success/failure is by looking at the key tokenType in the head object.\nIf its value is ",(0,o.kt)("strong",{parentName:"p"},"AES"),", the response is a success.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample response for success")),(0,o.kt)("p",null,"In case of success, you must extract the key ",(0,o.kt)("strong",{parentName:"p"},"shortUrl")," present in the ",(0,o.kt)("strong",{parentName:"p"},"body")," object and display it to the end user with an appropriate message with the help of any of the ",(0,o.kt)("strong",{parentName:"p"},"Message type")," nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "head": {\n        "version": null,\n        "timestamp": "1566994462639",\n        "channelId": null,\n        "tokenType": "AES",\n        "clientId": null\n    },\n    "body": {\n        "linkId": 5861,\n        "linkType": "GENERIC",\n        "longUrl": "https://securegw-stage.paytm.in/link/PAYMENTLINKNAME/LL_5861",\n        "shortUrl": "https://paytm.me/ID-PBo7",\n        "expiryDate": "27/08/2020 17:44:22",\n        "isActive": true,\n        "merchantHtml": "",\n        "createdDate": "28/08/2019 17:44:22",\n        "notificationDetails": [],\n        "resultInfo": {\n            "resultStatus": "SUCCESS",\n            "resultCode": "200",\n            "resultMessage": "Payment link is created successfully"\n }\n}\n} \n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample response for fallback")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "head": {\n        "version": "v2",\n        "timestamp": "28/08/2019 17:47:22",\n        "channelId": null,\n        "tokenType": null,\n        "clientId": null\n    },\n    "body": {\n        "resultInfo": {\n            "resultStatus": "FAILED",\n            "resultCode": "302",\n            "resultMessage": "link name contains sepcial character."\n        }\n    }\n}\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To use this Integration Action Node in an app.yellow.ai bot"),", refer to the below-mentioned example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' app.executeIntegrationAction({\n            "integrationName": "paytm",\n            "action": "Generate Payment Link",\n"dynamicParams": {\n    "amount": "5",\n    "timestamp": "1658203708983",\n    "linkName": "Test",\n               "linkType": "FIXED",\n               "linkDescription": "Test Description",\n                          "sendSms": false,\n                          "sendEmail": false,\n                          "customerName": "John Doe",\n                          "customerEmail":"test@test.com",\n                          "customerMobile":"9955995500",\n                          "linkNotes":"test note"\n}\n}).then((res)=>{\n    console.log("response from action node", res);\n    app.log(res, \'||Response from action node||\')\n}).catch((err)=>{\n    console.log("Error in action node",err);\n    app.log(err, \'||Error in action node||\')\n})\n\n\n')),(0,o.kt)("h3",{id:"12-initiate-refund"},"1.2 Initiate Refund"),(0,o.kt)("p",null,"In the studio flow builder, choose the node type as Integrations from the dialog box. You will see an option to select Paytm from the list of Integrations that have been enabled for that particular bot."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/7r0Td7w.png",alt:null})),(0,o.kt)("p",null,"After clicking on Paytm, you will see that an Integration Action Node is added to the flow builder. Upon clicking on the Integration Action Node, you will see the dropdown of available use cases for this integration and you need to choose Initiate Refund from that dropdown."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/s6AUREb.png",alt:null})),(0,o.kt)("p",null,"The set of mandatory fields required for the successful execution of this use case (Initiate Refund in this case), will be displayed. The below-mentioned table consists of the sample value, data type, and description for each field present in the above screenshot:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field name"),(0,o.kt)("th",{parentName:"tr",align:null},"Data type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Sample value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RequestTimestamp"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"POCH timestamp of the time at which the request is being sent"),(0,o.kt)("td",{parentName:"tr",align:null},"1588402269")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OrderId"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"It is a unique reference ID for a transaction passed in the transaction request. Order ID should be passed to raise the refund"),(0,o.kt)("td",{parentName:"tr",align:null},"OREDRID_98765")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ReferenceId"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Unique Reference ID for refund transaction which is generated by merchant. Duplicate REFID will be rejected by the Paytm gateway"),(0,o.kt)("td",{parentName:"tr",align:null},"REFUNDID_98765")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TransactionId"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"TXNID is the Paytm payment Transaction ID against which the refund transaction is being placed.TXNID is provided in response payload for every payment transaction"),(0,o.kt)("td",{parentName:"tr",align:null},"202005081112128XXXXXX68470101509706")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RefundAmount"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},'Amount for which the refund is to be made. It can be equal to or less than the transaction amount and should be up to two decimal places. The only special character allowed is (".")'),(0,o.kt)("td",{parentName:"tr",align:null},"30.00")))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Initiate Refund Integration")," Action Node has two possible outcomes, success or failure which are depicted by the success and fallback branches. Based on whether the execution of the Integration Action Node was successful or not, the flow will proceed to the ",(0,o.kt)("strong",{parentName:"p"},"success")," or ",(0,o.kt)("strong",{parentName:"p"},"fallback")," branches respectively."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The easiest way to identify success/failure is by looking at the key resultStatus in the resultInfo object. If its value is not TXN_FAILURE, the response is a success.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample response for success")),(0,o.kt)("p",null,"In case of success, you need to extract the key ",(0,o.kt)("strong",{parentName:"p"},"resultStatus"),", and ",(0,o.kt)("strong",{parentName:"p"},"resultMsg")," in the ",(0,o.kt)("strong",{parentName:"p"},"resultInfo")," object and display them to the end user with an appropriate message with the help of any of the ",(0,o.kt)("strong",{parentName:"p"},"Message type")," nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "head": {\n        "responseTimestamp": "1567421120859",\n        "signature": "WaFdplm36GmfBtZ6jPIFClLSEffhAk9fTpJ6i8WpgqiZvtUNl53mLL7mu4JWwxPpfSa5pdexyxK/68WtoTmd53TI+R9GffjGc3USoLgWcKI=",\n        "version": "v1"\n    },\n    "body": {\n        "txnTimestamp": "2019-09-02 12:31:49.0",\n        "orderId": "YOUR_ORDER_ID",\n        "mid": "YOUR_MID_HERE",\n        "refId": "UNIQUE_REFUND_ID",\n        "resultInfo": {\n            "resultStatus": "PENDING",\n            "resultCode": "601",\n            "resultMsg": "Refund request was raised for this transaction. But it is pending state"\n        },\n        "refundId": "PAYTM_REFUND_ID",\n        "txnId": "PAYTM_TRANSACTION_ID",\n        "refundAmount": "1.00"\n    }\n}    \n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample response for fallback")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "head": {\n        "responseTimestamp": "1567421388384",\n        "signature": "ry2bNQ+iq+geNezbFNBfIkXXWTFPUnavG6XkxciEJUNLmL7Op9S7qWP8V1TGHNYvggw2IsIt1OmprSfq92pODO5xiNJ+6pFyVtBUxnRrdL8=",\n        "version": "v1"\n    },\n    "body": {\n        "orderId": "YOUR_ORDER_ID",\n        "mid": "YOUR_MID_HERE",\n        "resultInfo": {\n            "resultStatus": "TXN_FAILURE",\n            "resultCode": "607",\n            "resultMsg": "Refund can not be initiated for acanceledd transaction."\n        },\n        "txnId": "PAYTM_TRANSACTION_ID",\n        "refundAmount": "1.00"\n    }\n}\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To use this Integration Action Node in an app.yellow.ai bot"),", refer to the below-mentioned example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app.executeIntegrationAction({\n            "integrationName": "paytm",\n            "action": "Initiate Refund",\n"dynamicParams": {\n    "requestTimestamp": "1658203708983",\n    "orderId": "OREDRID_98765",\n    "referenceId": "REFUNDID_98765",\n               "transactionId": "202005081112128XXXXXX68470101509706",\n               "refundAmount": "30.00"\n}\n}).then((res)=>{\n    console.log("response from action node", res);\n    app.log(res, \'||Response from action node||\')\n}).catch((err)=>{\n    console.log("Error in action node",err);\n    app.log(err, \'||Error in action node||\')\n})\n\n')),(0,o.kt)("h3",{id:"13-check-refund-status"},"1.3 Check Refund Status"),(0,o.kt)("p",null,"In the studio flow builder, choose the node type Integrations from the dialog box, and then you will see an option to select Paytm from the list of Integrations that have been enabled for that particular bot."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/7r0Td7w.png",alt:null})),(0,o.kt)("p",null,"After clicking on Paytm, you will see that an Integration Action Node is added to the flow builder. Upon clicking on the Integration Action Node, you will see the dropdown of available use cases for this integration and you need to choose ",(0,o.kt)("strong",{parentName:"p"},"Check Refund Status")," from that dropdown."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/W4AMMOB.png",alt:null})),(0,o.kt)("p",null,"The set of mandatory fields required for the successful execution of this use case (Check Refund Status in this case), will be displayed. The below-mentioned table consists of the sample value, data type, and description for each field present in the above screenshot:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field name"),(0,o.kt)("th",{parentName:"tr",align:null},"Sample value"),(0,o.kt)("th",{parentName:"tr",align:null},"Data type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RequestTimestamp"),(0,o.kt)("td",{parentName:"tr",align:null},"1588402269"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"EPOCH timestamp of the time at which the request is being sent")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OrderId"),(0,o.kt)("td",{parentName:"tr",align:null},"OREDRID_98765"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"It is a unique reference ID for a transaction passed in the transaction request and the Initiate Refund Integration Action Node. Order ID should be passed to check the actual status of the refund")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ReferenceId"),(0,o.kt)("td",{parentName:"tr",align:null},"REFUNDID_98765"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Merchant's Reference ID unique for every refund transaction. This is REFID for which refund status is being inquired")))),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Check Refund Status Integration")," Action Node has two possible outcomes, success or failure which are depicted by the success and fallback branches. Based on whether the execution of the Integration Action Node was successful or not, the flow will proceed to the ",(0,o.kt)("strong",{parentName:"p"},"success")," or ",(0,o.kt)("strong",{parentName:"p"},"fallback")," branches respectively."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The easiest way to identify success/failure is by looking at the key resultStatus in the resultInfo object. If its value is TXN_SUCCESS, the response is a success.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample response for success")),(0,o.kt)("p",null,"In case of success, extract the key(s) and display to the end user an appropriate message with the help of any of the Message type nodes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "head": {\n        "clientId": "C11",\n        "responseTimestamp": "1556719120393",\n        "signature": "Stx6P9HpnEG3GADkMuOcj50dm7ZHmvMPd29b8K5rxi4aVzRcJ5hklZo//RZdtTA+zcll8sdelyAYsxqPxFs66RVE0F2b9RElTMqYSfBj89I=",\n        "version": "v1"\n    },\n    "body": {\n        "orderId": "YOUR_ORDER_ID",\n        "userCreditInitiateStatus": "SUCCESS",\n        "mid": "YOUR_MID_HERE",\n        "merchantRefundRequestTimestamp": "2019-05-01 19:27:25.0",\n        "resultInfo": {\n            "resultStatus": "TXN_SUCCESS",\n            "resultCode": "10",\n            "resultMsg": "Refund Successfull"\n        },\n        "txnTimestamp": "2019-05-01 19:25:41.0",\n        "acceptRefundTimestamp": "2019-05-01 19:27:25.0",\n        "acceptRefundStatus": "SUCCESS",\n        "refundDetailInfoList": [{\n            "refundType": "TO_SOURCE",\n            "payMethod": "BALANCE",\n            "userCreditExpectedDate": "2019-05-02",\n            "userMobileNo": "91-******7777",\n            "refundAmount": "1.00"\n        }],\n        "userCreditInitiateTimestamp": "2019-05-01 19:27:26.0",\n"totalRefundAmount": "1.00",\n        "refId": "UNIQUE_REFUND_ID",\n        "txnAmount": "10.00",\n        "refundId": "PAYTM_REFUND_ID",\n        "txnId": "PAYTM_TRANSACTION_ID",\n        "refundAmount": "1.00",\n        "refundReason": "Testing refund reason",\n        "agentInfo": {\n            "name": "Lalit",\n            "employeeId": "Em1-00`",\n            "phoneNo": "7777777777",\n            "email": "customer@example.com"\n        }\n    }\n}  \n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample response for fallback")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "head": {\n        "clientId": "C11",\n        "responseTimestamp": "1556719175104",\n        "signature": "gJD0EM+p9rGekkXKRt1M0aTUTaqZ6SVcmWfysIO9s9tJKhjrfpySlCEG8Tb97G1h4iYyJuhCglTr1obhO7xX+TIFwlaIgrundaj7dyt2SdA=",\n        "version": "v1"\n    },\n    "body": {\n        "orderId": "YOUR_ORDER_ID",\n        "mid": "YOUR_MID_HERE",\n        "refId": "UNIQUE_REFUND_ID",\n        "resultInfo": {\n            "resultStatus": "PENDING",\n            "resultCode": "501",\n            "resultMsg": "System Error."\n        }\n    }\n}\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To use this Integration Action Node in an app.yellow.ai bot"),", refer to the below-mentioned example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  app.executeIntegrationAction({\n            "integrationName": "paytm",\n            "action": "Check Refund Status",\n"dynamicParams": {\n    "requestTimestamp": "1658203708983",\n    "orderId": "OREDRID_98765",\n    "referenceId": "REFUNDID_98765"\n}\n}).then((res)=>{\n    console.log("response from action node", res);\n    app.log(res, \'||Response from action node||\')\n}).catch((err)=>{\n    console.log("Error in action node",err);\n    app.log(err, \'||Error in action node||\')\n})\n\n')),(0,o.kt)("h2",{id:"2-configuration"},"2. Configuration"),(0,o.kt)("p",null,"You can configure the Paytm payment gateway by following the below steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enabling the Integration in the yellow.ai Integrations Module."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Login to cloud.yellow.ai and click the Integrations Module from the top left corner of your screen."),(0,o.kt)("li",{parentName:"ul"},"Then search the integration named ",(0,o.kt)("strong",{parentName:"li"},"Paytm")," or choose the category named Payment from the left navigation bar and then click ",(0,o.kt)("strong",{parentName:"li"},"Paytm"),"."),(0,o.kt)("li",{parentName:"ul"},"This will now open a section where we have to type in the required details to enable this integration. The required values are ",(0,o.kt)("strong",{parentName:"li"},"Merchant ID")," (To be provided by the client/Paytm spoc of the client), ",(0,o.kt)("strong",{parentName:"li"},"Merchant Key")," (To be provided by the client/Paytm spoc of the client) , ",(0,o.kt)("strong",{parentName:"li"},"API Domain")," (In case you want to use the staging domain of Paytm please use ",(0,o.kt)("a",{parentName:"li",href:"https://securegw-stage.paytm.in"},"https://securegw-stage.paytm.in")," otherwise please use ",(0,o.kt)("a",{parentName:"li",href:"https://securegw.paytm.in"},"https://securegw.paytm.in"),") , ",(0,o.kt)("strong",{parentName:"li"},"Channel ID")," (To be provided by the client/Paytm spoc of the client), ",(0,o.kt)("strong",{parentName:"li"},"Industry Type")," (To be provided by the client/Paytm spoc of the client)."),(0,o.kt)("li",{parentName:"ul"},"After entering these values, you need to click  ",(0,o.kt)("strong",{parentName:"li"},"Connect")," and the Integration will be enabled at yellow.ai\u2019s end.")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/D6FFCed.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/knahjjR.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/4e8mqVP.jpg",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the webhook URL in the Paytm dashboard."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Copy the webhook URL mentioned in the Instructions section of the Paytm Integration Card. Please note that based on the region of your bot i.e r1/r2/r3/r4/r5, you need to append that to the domain of the webhook URL. For example, if the domain is ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.yellow.ai"},"https://cloud.yellow.ai"),", you need to change it to ",(0,o.kt)("a",{parentName:"li",href:"https://r1.cloud.yellow.ai"},"https://r1.cloud.yellow.ai")," if the region of the bot is r1. If the bot belongs to the Indian region, you can use the origin domain itself.")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/17C5i0Y.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The client needs to log in to the Paytm dashboard and navigate to the Webhook URL Configuration section and add the provided webhook URL.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Receiving event in yellow.ai Bot."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Login to cloud.yellow.ai and click the Studio Module from the top left corner of your screen."),(0,o.kt)("li",{parentName:"ul"},"Click the Event, from the left navigation bar and then choose Integrations."),(0,o.kt)("li",{parentName:"ul"},"You will find an event named Paytm Payment Status that needs to be activated by clicking on the three dots next to the name of the event."),(0,o.kt)("li",{parentName:"ul"},"After activating the event, a flow needs to be created in the Studio module whose trigger point is this event. Now based on the event data received, an appropriate message is displayed to the end user.")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/D6FFCed.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/9Xkc7SK.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/lnAQscW.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample webhook event data sent by Paytm")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n "PAYMENTEMAILID": "user@example.com",\n "PAYMENTMOBILENUMBER": "7777777777",\n "GATEWAYNAME": "WALLET",\n "RESPMSG": "Txn Success",\n "BANKNAME": "WALLET",\n "PAYMENTMODE": "PPI",\n "CUSTID": "CUST_001",\n "MID": "INTEGR7769XXXXXX9383",\n "MERC_UNQ_REF": "LI_12345",\n "RESPCODE": "01",\n "TXNID": "202005081112128XXXXXX68470101509706",\n "TXNAMOUNT": "1.00",\n "ORDERID": "ORDERID_98765",\n "STATUS": "TXN_SUCCESS",\n "BANKTXNID": "63240520",\n "TXNDATETIME": "2020-09-10 13:03:05.0",\n "TXNDATE": "2020-09-10",\n "CHECKSUMHASH": "PMXJocjUUKGq7MXGwHO0LNOV+YxwuYi4gKjRgFOIZVGVqyxqfFuec+A8boUq5Q3c87yYM9DOeCmjIj5mH20SfIiDjOJiU4eFzNxu0J1qKdc=",\n "LINKNOTES": "Link Note Description"\n}\n')))}c.isMDXComponent=!0}}]);