(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(446)),l=["components"],i={title:"Instamojo",sidebar_label:"Instamojo"},b={unversionedId:"platform_concepts/appConfiguration/instamojo",id:"platform_concepts/appConfiguration/instamojo",isDocsHomePage:!1,title:"Instamojo",description:"Yellow.ai Integration with Instamojo Payment Gateway allows you to generate payment links, view payment status, and create refunds with the yellow.ai platform.",source:"@site/docs/platform_concepts/appConfiguration/instamojo.md",slug:"/platform_concepts/appConfiguration/instamojo",permalink:"/docs/platform_concepts/appConfiguration/instamojo",version:"current",sidebar_label:"Instamojo",sidebar:"platform_concepts",previous:{title:"Hubspot CRM",permalink:"/docs/platform_concepts/appConfiguration/hubspot-crm"},next:{title:"Intercom Live Chat",permalink:"/docs/platform_concepts/appConfiguration/intercom-livechat"}},c=[{value:"1. Use cases",id:"1-use-cases",children:[{value:"1.1 Generate Payment link",id:"11-generate-payment-link",children:[]},{value:"1.2 Create a Refund",id:"12-create-a-refund",children:[]}]},{value:"2. Configuration",id:"2-configuration",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,l);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Yellow.ai Integration with Instamojo Payment Gateway allows you to generate payment links, view payment status, and create refunds with the yellow.ai platform. "),Object(o.b)("h2",{id:"1-use-cases"},"1. Use cases"),Object(o.b)("p",null,"Following are the use cases that are currently accommodated in the Integration:"),Object(o.b)("h3",{id:"11-generate-payment-link"},"1.1 Generate Payment link"),Object(o.b)("p",null,"Using the action nodes, you can generate payment links according to your use cases.\nGet the final amount from your cart total and call the Generate Payment link action node of integration."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Iwuif7lVqcdR1665990538864.png",alt:"alt_text",title:"image_tooltip"})),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Node Input Params")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Field Name"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Sample Input"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Amount")),Object(o.b)("td",{parentName:"tr",align:null},"The amount for the request. The minimum amount is 9. The maximum is 200000"),Object(o.b)("td",{parentName:"tr",align:null},"200")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Customer Name")),Object(o.b)("td",{parentName:"tr",align:null},"Name of payer"),Object(o.b)("td",{parentName:"tr",align:null},"John")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Customer Email")),Object(o.b)("td",{parentName:"tr",align:null},"Email of payer"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"mailto:John@test.com"},"John@test.com"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Customer Mobile Number")),Object(o.b)("td",{parentName:"tr",align:null},"Mobile no. of payer"),Object(o.b)("td",{parentName:"tr",align:null},"9999999999")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Purpose")),Object(o.b)("td",{parentName:"tr",align:null},"Purpose of the payment request"),Object(o.b)("td",{parentName:"tr",align:null},"Iphone")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Send Email")),Object(o.b)("td",{parentName:"tr",align:null},"Flag to send request link via email. If send_email is true, a request email will be sent to the email supplied. If send_email is true but no email is supplied, request creation will throw an error"),Object(o.b)("td",{parentName:"tr",align:null},"False")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("strong",{parentName:"td"},"Send SMS")),Object(o.b)("td",{parentName:"tr",align:null},"Flag to send request link via SMS. If send_sms is true, a request SMS will be sent to the phone number supplied. If send_sms is true but no phone number is supplied, request creation will throw an error"),Object(o.b)("td",{parentName:"tr",align:null},"False")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"StatusCallbackUrl"),"  : Copy Webhook URL from the Instamojo card at the integration page."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Example: ",Object(o.b)("a",{parentName:"p",href:"https://alpha6.yellowmessenger.com/integrations/genericIntegration/instamojo/x1645073590274?id=l%2B%2FD1yhpi5HjWFglhONPHbDYda7KtXeCEVUofPRsNBY%3D"},"https://alpha6.yellowmessenger.com/integrations/genericIntegration/instamojo/x1645073590274?id=l%2B%2FD1yhpi5HjWFglhONPHbDYda7KtXeCEVUofPRsNBY%3D"))),Object(o.b)("hr",null),Object(o.b)("h4",{id:"sample-success-response"},"Sample Success Response"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "id": "05f317448ad84649aa1a9c7328edb015",\n  "user": "https://api.instamojo.com/v2/users/90f01dfdacbe4fe7892fc27dbdc30906/",\n  "phone": "+919999999999",\n  "email": "foo@example.com",\n  "buyer_name": "John Doe",\n  "amount": "2500",\n  "purpose": "FIFA 16",\n  "status": "Pending",\n  "payments": [],\n  "send_sms": true,\n  "send_email": true,\n  "sms_status": "Pending",\n  "email_status": "Pending",\n  "shorturl": null,\n  "longurl": "https://www.instamojo.com/@foo/05f317448ad84649aa1a9c7328edb015",\n  "redirect_url": "http://www.example.com/redirect/",\n  "webhook": "http://www.example.com/webhook/",\n  "created_at": "2016-05-09T16:10:13.786Z",\n  "modified_at": "2016-05-09T16:10:13.786Z",\n  "resource_uri": "https://api.instamojo.com/v2/payment_requests/05f317448ad84649aa1a9c7328edb015/",\n  "allow_repeated_payments": false,\n  "mark_fulfilled": true\n}\n')),Object(o.b)("h4",{id:"event-for-receiving-payment-confirmation-on-the-bot"},"Event for receiving payment confirmation on the bot"),Object(o.b)("p",null,"Following are the events that are currently accommodated in the Integration:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Event"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Instamojo Payment Status"),Object(o.b)("td",{parentName:"tr",align:null},"In the case of payments the status can be checked with these details.")))),Object(o.b)("p",null,"Please Activate the Instamojo Payment Status after configuring Instamojo credentials on the integration page."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/tHfJQScwtIoy1665990705590.png",alt:"alt_text",title:"image_tooltip"})),Object(o.b)("h3",{id:"12-create-a-refund"},"1.2 Create a Refund"),Object(o.b)("p",null,"This will refund a payment made on Instamojo."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Node Input Params")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Field Name"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Sample Input"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Refund Amount"),Object(o.b)("td",{parentName:"tr",align:null},"This field can be used to specify the refund amount. For instance, you may want to issue a refund for an amount lesser than what was paid."),Object(o.b)("td",{parentName:"tr",align:null},"200")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Unique Transaction ID"),Object(o.b)("td",{parentName:"tr",align:null},"Mandatory parameter in the body from the second case creation onwards for the payment to prevent duplicate case creations due to replay of APIs"),Object(o.b)("td",{parentName:"tr",align:null},"C5c0751269")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Issue Type"),Object(o.b)("td",{parentName:"tr",align:null},"A three-letter short code identifying the reason for this case. Please refer to the below table for this field's value"),Object(o.b)("td",{parentName:"tr",align:null},"QFL")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Description"),Object(o.b)("td",{parentName:"tr",align:null},"Additional text explaining the refund"),Object(o.b)("td",{parentName:"tr",align:null},"Product is not good")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Payment Id"),Object(o.b)("td",{parentName:"tr",align:null},"Payment Id received in create payment link node. store in database for further use"),Object(o.b)("td",{parentName:"tr",align:null},"MOJO5c04000J30502939")))),Object(o.b)("h4",{id:"valid-values-for-different-type"},"Valid values for different type"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"RFD"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"TNR"),Object(o.b)("td",{parentName:"tr",align:null},"Product/service no longer available.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"QFL"),Object(o.b)("td",{parentName:"tr",align:null},"Customer not satisfied.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"QNR"),Object(o.b)("td",{parentName:"tr",align:null},"Product lost/damaged.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"EWN"),Object(o.b)("td",{parentName:"tr",align:null},"Digital download issue.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"TAN"),Object(o.b)("td",{parentName:"tr",align:null},"Event was canceled/changed.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"PTH"),Object(o.b)("td",{parentName:"tr",align:null},"Problem not described above.")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'{\n  "refund": {\n    "id": "C5c0751269",\n    "payment_id": "MOJO5c04000J30502939",\n    "status": "Refunded",\n    "type": "QFL",\n    "body": "Customer isn\'t satisfied with the quality",\n    "refund_amount": "100",\n    "total_amount": "100.00",\n    "created_at": "2015-12-07T11:01:37.640Z"\n  },\n  "success": true\n}\n')),Object(o.b)("h2",{id:"2-configuration"},"2. Configuration"),Object(o.b)("p",null,"Configuring the integration with Instamojo is straightforward. Follow the steps defined below to start integrating:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Sign up on Instamojo."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Test Mode:")," This mode is for testing and for developers who are just getting started in Instamojo Integration. Test Mode is completely Free of Charge. No real charges will be made, even if we give our valid card details in the Instamojo use (",Object(o.b)("a",{parentName:"li",href:"https://test.instamojo.com/"},"https://test.instamojo.com/"),") to sign Up"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Live Mode:")," As the name suggests, In the Live Mode, we would be charged for real. To work on Live Mode, we have to give our bank account and KYC Details. Use (",Object(o.b)("a",{parentName:"li",href:"https://www.instamojo.com/"},"https://www.instamojo.com/"),") to Signup."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"After signing up, log in to Dashboard > Go to API & Plugins > Generate Credentials > Select Direct Rest API Integration."))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/QMOhzge5GSgd1665990761659.png",alt:"alt_text",title:"image_tooltip"})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy the Client ID and Client Secret.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to the integration page of cloud.yellow.ai and search for Instamojo then Paste the client Id and Client Secret in the form.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For sandbox environment use ",Object(o.b)("inlineCode",{parentName:"p"},"https://test.instamojo.com")," as baseUrl and for production env use ",Object(o.b)("inlineCode",{parentName:"p"},"https://api.instamojo.com")," as baseUrl"))),Object(o.b)("hr",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Reference")),Object(o.b)("p",null,"For more information about the action nodes you use here, refer to ",Object(o.b)("a",{parentName:"p",href:"https://docs.instamojo.com/reference/create-a-payment-request-1"},"Create Payment"),", ",Object(o.b)("a",{parentName:"p",href:"https://docs.instamojo.com/reference/what-is-a-webhook"},"webhooks"),"."))}s.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,d=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return n?r.a.createElement(d,i(i({ref:t},c),{},{components:n})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);