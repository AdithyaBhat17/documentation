(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{446:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,h=p["".concat(r,".").concat(u)]||p[u]||m[u]||c;return a?o.a.createElement(h,s(s({ref:t},i),{},{components:a})):o.a.createElement(h,s({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var i=2;i<c;i++)r[i]=a[i];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),o=a(7),c=(a(0),a(446)),r=["components"],s={title:"WhatsApp chatbot",sidebar_label:"WhatsApp"},l={unversionedId:"platform_concepts/channelConfiguration/whatsapp-configuration",id:"platform_concepts/channelConfiguration/whatsapp-configuration",isDocsHomePage:!1,title:"WhatsApp chatbot",description:"This document will guide you for creating a WhatsApp account and setting up your own WhatsApp chatbot.",source:"@site/docs/platform_concepts/channelConfiguration/whatsapp-configuration.md",slug:"/platform_concepts/channelConfiguration/whatsapp-configuration",permalink:"/docs/platform_concepts/channelConfiguration/whatsapp-configuration",version:"current",sidebar_label:"WhatsApp",sidebar:"platform_concepts",previous:{title:"Widget Functions and Events",permalink:"/docs/platform_concepts/channelConfiguration/web"},next:{title:"Overview",permalink:"/docs/platform_concepts/appConfiguration/overview"}},i=[{value:"1. WhatsApp chatbot",id:"1-whatsapp-chatbot",children:[{value:"1.1 Create WhatsApp Business Account",id:"11-create-whatsapp-business-account",children:[]},{value:"1.2 Create Facebook Business Manager (FBM) account",id:"12-create-facebook-business-manager-fbm-account",children:[]},{value:"1.3 Verfiy Business account with Facebook",id:"13-verfiy-business-account-with-facebook",children:[]},{value:"1.4 Platform experience",id:"14-platform-experience",children:[]}]},{value:"2. Catalog setup",id:"2-catalog-setup",children:[{value:"2.1 Commerce manager (Catalog)",id:"21-commerce-manager-catalog",children:[]},{value:"2.2 Link Catalog to a WABA",id:"22-link-catalog-to-a-waba",children:[]},{value:"2.3 Business &amp; compliance info. (Mandatory for Indian number WABA)",id:"23-business--compliance-info-mandatory-for-indian-number-waba",children:[]},{value:"2.3 FAQs",id:"23-faqs",children:[]}]}],b={toc:i};function p(e){var t=e.components,a=Object(o.a)(e,r);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This document will guide you for creating a WhatsApp account and setting up your own WhatsApp chatbot. "),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"For detailed guide on whatsapp as a channel, click ",Object(c.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/cookbooks/whatsapp-channel/whatsapp-channel/"},"here"),".")),Object(c.b)("h2",{id:"1-whatsapp-chatbot"},"1. WhatsApp chatbot"),Object(c.b)("p",null,"Following steps must be followed to create a WhatsApp chatbot: "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Create a ",Object(c.b)("strong",{parentName:"li"},"WhatsApp Business Account")," on the Yellow.ai platform"),Object(c.b)("li",{parentName:"ol"},"Open a ",Object(c.b)("strong",{parentName:"li"},"Facebook Business Manager")," (FBM) account"),Object(c.b)("li",{parentName:"ol"},"Verfiy your business with Facebook.")),Object(c.b)("h3",{id:"11-create-whatsapp-business-account"},"1.1 Create WhatsApp Business Account"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"http://cloud.yellow.ai/"},"Sign-up")," with Yellow.ai's platfrom. If you signed-up already, just sign-in.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/cBtHl9QjdEtK1619535411755.png",alt:null})),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Navigate to your chatbot under ",Object(c.b)("strong",{parentName:"li"},"Projects > Select your chatbot"),".")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/98Uohu6oWwTw1619536105368.png",alt:null})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"If you haven't created your chatbot yet, create one by following these ",Object(c.b)("a",{parentName:"p",href:"/docs/cookbooks/getting_started"},"steps"),".")),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"To start with WhatsApp account creation, go to ",Object(c.b)("strong",{parentName:"li"},"Channels > Communication > Select WhatsApp"),".")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/sXl9Utb0eLlO1619540912699.png",alt:null})),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"Tap on ",Object(c.b)("strong",{parentName:"li"},"Connect your WhatsApp"),".")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/MXFhj6YWe2Jv1619542073374.png",alt:null})),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"Than, login to your Facebook account that is linked with your FB Business Manager account.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/xluqZo9ktZSa1619783923015.png",alt:null})),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"If you don't have an FB Business manager account, create one by following these ",Object(c.b)("a",{parentName:"p",href:"https://business.facebook.com/"},"steps"),"."))),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"Furnish your business details as mentioned in any legal business document that you have. Business name, Phone number, Business e-mail ID and Business website should be appropriate.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/YpiFVbVRDBT21619784836090.png",alt:null})),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},"Continue adding relevant business details as asked.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/UiWxV4eDz0Rh1619785303495.png",alt:null})),Object(c.b)("ol",{start:8},Object(c.b)("li",{parentName:"ol"},"Take a breather while the WhatsApp business account is being created.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/rYx7igVPuZYb1619785627342.png",alt:null})),Object(c.b)("ol",{start:9},Object(c.b)("li",{parentName:"ol"},"Carefully think and give the 'WhatsApp Business Display Name'. The name you give exactly will show up on your WhatsApp chatbot.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/SQtCesZ8EI8a1619792169449.png",alt:null})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"To give an appropriate name, read through the ",Object(c.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp/guides/display-name/"},"naming guidelines"),".")),Object(c.b)("p",null,"If the display name you give is different from the legal business name, tick the checkbox as highlighted in the image above."),Object(c.b)("ol",{start:10},Object(c.b)("li",{parentName:"ol"},"Stay with me. We are progressing. Select the industry that you are functioning. You can also give a description about your business. We recommend you fill this.")),Object(c.b)("p",null,"Example description: ",Object(c.b)("em",{parentName:"p"},'"XYZ is an organic food brand that offers fresh and exotic farm-grown fruits.')),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/NLe7zcub7VU51619794609099.png",alt:null})),Object(c.b)("ol",{start:11},Object(c.b)("li",{parentName:"ol"},"Awesome! Let's now choose the contact number that will be the WhatsApp chatbot's contact. You can either choose the business number you given to be the WhatsApp number or add a new number.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/G1yAjNffVoEr1619802704253.png",alt:null})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Note: The number you give should not be connected to any WhatsApp account. If connected, ensure you disconnect the number from WhatsApp account.")),Object(c.b)("p",null,"Complete the verification over text or voice call."),Object(c.b)("ol",{start:13},Object(c.b)("li",{parentName:"ol"},"Wuhoo! Congrats. You have successfully requested for WhatsApp Business Account. You can come back after 24 hours to check the status of apporval.")),Object(c.b)("p",null,"Once approved, you can scan the QR and test the WhastaApp chatbot."),Object(c.b)("h3",{id:"12-create-facebook-business-manager-fbm-account"},"1.2 Create Facebook Business Manager (FBM) account"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"If you already created the account, just login. If not, follows the steps to create an FBM account.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Go to ",Object(c.b)("a",{parentName:"p",href:"https://business.facebook.com/overview"},"Facebook Business Manager")," and click ",Object(c.b)("strong",{parentName:"p"},"Create Account"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Furnish your business name, your name and your business email ID.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Carefully give the business details asked correctly. This will help in creating the FBM account.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Hurray! You have now created the FBM."))),Object(c.b)("h3",{id:"13-verfiy-business-account-with-facebook"},"1.3 Verfiy Business account with Facebook"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Now, let's get to verification. In the FBM, go to ",Object(c.b)("strong",{parentName:"p"},"More Tools > Business Settings > Select your Business"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click on ",Object(c.b)("strong",{parentName:"p"},"Security Centre"),"."))),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/KkAtqbeljfoI1620219338763.png",alt:null})),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"Let's start with the verification.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/4lUE9WFC5jTX1620219352063.png",alt:null})),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"Furnish the legal business details.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/gv6oqZD4PnBQ1620219366519.png",alt:null})),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"Look for your business in the the list. This is listed based on the business name you given. If your business is listed, select your business and go to step 6. If not visible, click ",Object(c.b)("strong",{parentName:"li"},"None of these")," and directly ",Object(c.b)("strong",{parentName:"li"},"jump to step 7"),".")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/NOqzxCypg7kz1620219379343.png",alt:null})),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"Confirm the business details - business name, address, phone number. After this ",Object(c.b)("strong",{parentName:"li"},"jump to step 8"),".")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/87AUS5pRIYWd1620223310056.png",alt:null})),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},"Upload relevant legal business documents for the Facebook team to review. Check ",Object(c.b)("strong",{parentName:"li"},"accepted legal documents")," ",Object(c.b)("a",{parentName:"li",href:"https://www.facebook.com/business/help/159334372093366"},"here"),".")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/2mIxHaK9h8Ci1620219423439.png",alt:null})),Object(c.b)("ol",{start:8},Object(c.b)("li",{parentName:"ol"},"Final step: choose to get the ",Object(c.b)("strong",{parentName:"li"},"verification code via Email or phone")," and enter the code.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/fSpzqe5pizfV1620229125763.png",alt:null})),Object(c.b)("p",null,"Submit the verification recieved."),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/A0oGT8lwHe2s1620229140125.png",alt:null})),Object(c.b)("p",null,"For some reason, if you wish to cancel the verification request, go to ",Object(c.b)("strong",{parentName:"p"},"Security Center > Cancel"),"."),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/e1sHK0iR65w91620229510980.png",alt:null})),Object(c.b)("h3",{id:"14-platform-experience"},"1.4 Platform experience"),Object(c.b)("p",null,"Once the account is successfully approved, configure the chatbot with a journey you want. For example, let's try adding few FAQs and see how it gets refelcted in the WhatsApp chatbot."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Go to ",Object(c.b)("strong",{parentName:"p"},"Studio -> FAQs"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"FAQs can have multiple categories such as Delivery policy, Refund policy, Product quality. To create a new category, ",Object(c.b)("strong",{parentName:"p"},"Click on '+' with the FAQs screen"),"."))),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/9Fs4AGsK4eE61621348717008.png",alt:null})),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"Create a ",Object(c.b)("strong",{parentName:"li"},"new category"),".")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/c9BkdVzPuU4X1621348684735.png",alt:null})),Object(c.b)("p",null,"Similarly, you can add as many relevant categories as required."),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},"Now, ",Object(c.b)("strong",{parentName:"li"},"pick a 'Category'")," to add questions within.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/NuDtN4RpAkac1621348670878.png",alt:null})),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},"After choosing a category, you can ",Object(c.b)("strong",{parentName:"li"},"Add New Questions"),".")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/ps4qScjaoGqI1621348740566.png",alt:null})),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/RqBpexxNa6iS1621348659762.png",alt:null})),Object(c.b)("p",null,"Similarly, you can add as many relevant questions you want under each FAQ category."),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},"You can see the the Q & A that you added as below.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/ZLQ2ToYpxGDI1621348650914.png",alt:null})),Object(c.b)("ol",{start:7},Object(c.b)("li",{parentName:"ol"},"As a particular question can be asked in multiple ways, you can ",Object(c.b)("strong",{parentName:"li"},"add the possible 'Variants'")," of the same question.")),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/57fxwswxtysU1621348636393.png",alt:null})),Object(c.b)("p",null,"We recommend to add relevant variants for each question."),Object(c.b)("ol",{start:8},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Great, now before testing your WhatsApp chatbot, you should ",Object(c.b)("strong",{parentName:"p"},"Train")," the chatbot. You will find the button on the FAQs screen itself.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Wuhoo! Excited to test your WhatsApp chatbot? Start asking any of the added questions."))),Object(c.b)("p",null,"Note: Your WhatsApp chatbot will function on the number that you got approved previously by Facebook."),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/KMPmiULy5ARX1621420053934.png",alt:null})),Object(c.b)("p",null,"Awesome! Congratulations on successfully connecting and testing your WhatsApp chatbot. You can now explore other options such as adding different options (such as products showcase, order status) and test them the same way!"),Object(c.b)("h2",{id:"2-catalog-setup"},"2. Catalog setup"),Object(c.b)("p",null,"Prerequisites "),Object(c.b)("p",null,"The following are the prerequisites to use WhatsApp Product Node - "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"#21-commerce-manager-catalog"},"Product Listed on Catalog"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"#23-business-and-compliance-info-mandatory-for-indian-number-waba"},"Updated Business and Compliance Info"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Additional Fields added incase of Indian Businesses")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"#22-link-catalog-to-a-waba"},"Catalog Linked with the WABA")))),Object(c.b)("h4",{id:"sample-flow-of-whatsapp-singlemulti-product-message-spmmpm"},"Sample flow of WhatsApp single/multi product message (SPM/MPM)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Currently, WhatsApp supports either a single product or a vertical carousel of up tp 30 products in a single two way message."),Object(c.b)("img",{src:"https://i.imgur.com/0Fc5Asl.png",width:"350px"}),Object(c.b)("img",{src:"https://i.imgur.com/Nlw4IDw.png",width:"350px"}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The recipient can click just on the view option to expand the Product details or the vertical carousel of products as shown here."),Object(c.b)("img",{src:"https://i.imgur.com/GnDzjeE.png",width:"350px"}),Object(c.b)("img",{src:"https://i.imgur.com/CgEn4CB.png",width:"350px"}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The recipient can add preferred products to the cart using the Add To Cart option or the + option across each item. Once the products are added to the cart, the recipient can send the cart to the business to proceed to the next steps."),Object(c.b)("img",{src:"https://i.imgur.com/ClYimi7.png",width:"350px"}))),Object(c.b)("h3",{id:"21-commerce-manager-catalog"},"2.1 Commerce manager (Catalog)"),Object(c.b)("p",null,"The Facebook Commerce manager helps in listing the products to be used for SPM/MPM. It is not possible to send any product on WhatsApp without listing the products on the FB's Commerce Manager."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"To use catalog, it's mandatory for the Businesses to have a Business Manager Account with Catalog."))),Object(c.b)("p",null,"To create a Catalog in FB Commerce Manager for your Business - "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Log on to ",Object(c.b)("a",{parentName:"p",href:"https://business.facebook.com/settings"},"Facebook Business Manager")," and go to ",Object(c.b)("strong",{parentName:"p"},"Business Settings"),". Use the client's BM to create Production Catalogs.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Navigate to ",Object(c.b)("strong",{parentName:"p"},"Data Sources")," and click on ",Object(c.b)("strong",{parentName:"p"},"Catalog"),"."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/kBNq6tm.png",alt:null})))),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select ",Object(c.b)("strong",{parentName:"p"},"Add")," > ",Object(c.b)("strong",{parentName:"p"},"Create a New Catalog"),"."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"If this will be your first catalogue, click Get Started. Select Create a catalogue and then click Get Started."),Object(c.b)("li",{parentName:"ul"},"If you already have at least one catalogue, you'll see all of your catalogues listed. Select + Add Catalogue to create a new one.")),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/EebkHmM.png",alt:null})))),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select the type of inventory you advertise or sell, then click ",Object(c.b)("strong",{parentName:"p"},"Next"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Choose how you want to add items to your catalogue - Upload product info, or Connect a partner platform")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select the Business Manager account that your catalogue belongs to. This unlocks more ways to use your catalogue than selecting a personal account and enables you to assign other people permission to work on the catalogue. To select a Business Manager account, you must be a ",Object(c.b)("a",{parentName:"p",href:"https://en-gb.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fen-gb.facebook.com%2Fbusiness%2Fhelp%2F442345745885606&event_type=click&last_nav_impression_id=2bDTYoj64VaSUC2PQ&max_percent_page_viewed=52&max_viewport_height_px=711&max_viewport_width_px=1437&orig_http_referrer=https%3A%2F%2Fwww.google.com%2F&orig_request_uri=https%3A%2F%2Fen-gb.facebook.com%2Fbusiness%2Fhelp%2F1275400645914358&primary_cmsid=1275400645914358&primary_content_locale=en_GB&region=apac&scrolled=true&session_id=1QKGQufmtkRFBOVm3&site=fb4b&extra_data%5Bview_type%5D=v3_initial_view&extra_data%5Bsite_section%5D=help&extra_data%5Bplacement%5D=%2Fbusiness%2Fhelp%2F1275400645914358"},"business admin"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Enter a name for your catalogue and click ",Object(c.b)("strong",{parentName:"p"},"Create"),"."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/L4WM1z6kJj18seBUUw2MuARGoGtYBZnsDbGiZ3oGKryUqPeWhxw6C4pK8vL23CmUiucQdeLh1YfYgmFg9TUaAhenEm6BPkxe7hedEtKwgZsKhiQfwNq9FEYvnMqZ96dCER56Nt13CzPmyRQJxCFRLsHNBTy1qh81pXxw1St8NXU9ZiCfaw29VfbfkiWo9vFZyGem8Evjc3CSBKnpgnaX2Yw1PqPq9UYVxQ6azZQvjfN6sg21tCgDLt2b1rr5N7WVz5V7vRJtawHHqbPh3H6Cvpcd6d56iRgRLURKGxB5TGGQY67ncV/Image.jpg",alt:null})))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"For detailed instructions, see ",Object(c.b)("a",{parentName:"p",href:"https://en-gb.facebook.com/business/help/1275400645914358?id=725943027795860"},"Facebook's documentation")))),Object(c.b)("p",null,"Once the Catalog is created, you can go to the Commerce Manager available on the top right and manage your Catalog from the Commerce Manager Dashboard."),Object(c.b)("p",null,"You can add products to the Catalog either manually or through ",Object(c.b)("a",{parentName:"p",href:"https://www.facebook.com/business/help/1898524300466211?id=725943027795860"},"Data Feed"),". "),Object(c.b)("p",null,"An ideal way to manage your products is through Data Feed as it allows adding products with complete information using a CSV file, and sync the data through the Commerce Manager (CM). "),Object(c.b)("p",null,"You can automate the sync on your preferred cadence such as Hourly, Daily etc. To find the CSV headers and supported values on the Data Feed, see ",Object(c.b)("a",{parentName:"p",href:"https://www.facebook.com/business/help/120325381656392?id=725943027795860"},"here"),"."),Object(c.b)("p",null,Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/fL3D0n7.png",alt:null})),Object(c.b)("p",null,"It is important to note the following points in Catalog before using its products."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"ContentID can be given from the Business side or will get generated automatically from FB side. This id needs to be unique and will be used as Product ID in the WhatsApp product msg node.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"It takes some time to update products when syncing the catalogs using the data feed. You cannot send products on WhatsApp until this process is completed.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"For Businesses in India, it is mandatory to have these fields (origin_country, importer_name, and importer_address) filled in as per field specification bfor each product to be used as SPM/MPM. ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"You can add the field values (origin_country, importer_name, and importer_address) in the CSV file or use Data Rule to fill the values by default from the Data Feed settings page."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/1oEGBny.png",alt:null})))),Object(c.b)("h3",{id:"22-link-catalog-to-a-waba"},"2.2 Link Catalog to a WABA"),Object(c.b)("p",null,"Once the Catalog is set up, the Business has to share the Catalog cccess with the BSP (Yellow.ai) to use items from the Catalog in WABA accounts created by Yellow. "),Object(c.b)("p",null,"To share Catalog access with the BSP and connect it to WABA - "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"On the Client's BM, go to ",Object(c.b)("strong",{parentName:"p"},"Catalog"),"  and select ",Object(c.b)("strong",{parentName:"p"},"Assign Partner"),"."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/BCh7ZBZ.png",alt:null})))),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Enter the BSP's (yellow.ai\u2019s) BM ID to link to the Catalog of the business."),Object(c.b)("img",{src:"https://i.imgur.com/kzQnZTG.png",width:"70%"}))),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The Businesses Catalog should show the BSPs name as partner for the Catalog. Provide Manage Catalog Permission."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/23bYVrY.png",alt:null})))),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Once the access is shared, the BSP will get the Catalog listed at their end as shown below."),Object(c.b)("p",{parentName:"li"},Object(c.b)("img",{parentName:"p",src:"https://i.imgur.com/XEcYZTy.png",alt:null})))),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"After getting the access, the BSP have to link the Catalog to the WABA. To do this, the BSP has to go to the ",Object(c.b)("strong",{parentName:"p"},"Phone Number")," page on the WABA Account on BM and click on the ",Object(c.b)("strong",{parentName:"p"},"Cart")," icon on the left pane, and > Choose the Catalog which needs to be linked."),Object(c.b)("img",{src:"https://i.imgur.com/5oJrzpP.png",width:"70%"}))),Object(c.b)("ol",{start:6},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Your Catalog should appear in the Connected catalog list. This confirms that the Catalog is ready to be used on the WABA and the Phone number attached to this WABA."),Object(c.b)("img",{src:"https://i.imgur.com/6NAB8Uy.png",width:"70%"}))),Object(c.b)("h3",{id:"23-business--compliance-info-mandatory-for-indian-number-waba"},"2.3 Business & compliance info. (Mandatory for Indian number WABA)"),Object(c.b)("p",null,"It is mandatory for Indian Businesses to provide the Business and Compliance info to use the SPM/MPM feature on their WABA accounts. "),Object(c.b)("p",null,"Log on to the ",Object(c.b)("a",{parentName:"p",href:"https://cloud.yellow.ai/"},"Cloud Platform")," and go to ",Object(c.b)("strong",{parentName:"p"},"Channels")," > ",Object(c.b)("strong",{parentName:"p"},"WhatsApp"),", and fill in the details."),Object(c.b)("img",{src:"https://i.imgur.com/g7gw6v9.png",width:"65%"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://www.craft.do/s/0loidngTNNAzkK/b/8CA0C2DD-ECD2-437F-BBFB-C1303B7E0966/How_to_Create_an_End_to_End_Catalog_"})),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"To create a new Catalog Journey on the Yellow.ai Platform, see ",Object(c.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#8-whatsapp-product-message"},"here"),"."))),Object(c.b)("h3",{id:"23-faqs"},"2.3 FAQs"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Is SPM/MPM Supported on Cloud API?")),Object(c.b)("p",{parentName:"li"},"No, currently, SPM/MPM is not supported for Cloud API Hosted WABAs. Please reach out to Engagement Team for rolling back the WABA to OnPrem before using SPM/MPM. There will be additional hosting charges for the OnPrem Infra. AMs are required to get a sign off from the Customer for the infra cost before agreeing for the support of the SPM/MPM.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"When is the support of SPM/MPM will be available on Cloud API WABA?")),Object(c.b)("p",{parentName:"li"},"As of now there is no tentative timeline due to some issues with respect to SPM/MPM on Cloud API WABA which needs to be resolved before taking a decision on the same.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Can we integrate the Catalog with the platform?")),Object(c.b)("p",{parentName:"li"},"No, Catalog Integration is not live yet and will be evaluated in Q1 2023.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Can Shopify or other ecom platforms can be used for syncing the products on FB Catalog?")),Object(c.b)("p",{parentName:"li"},"Yes, Shopify Catalogs can be synced with WhatsApp Catalogs for the products uploaded on the Shopify to be used on the SPM/MPM as well. Its requested to the client to get in touch with Shopify Team to add the Sync of the Products with WA Catalog to get started. The feature is available but not explored yet from Yellow\u2019s side due to limitation of access of active Shopify instance")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Can we upload or update the Product quantity or availability from the Platform?")),Object(c.b)("p",{parentName:"li"},"No, since there is no integration available for the CM and the Platform its not possible to currently manage the catalog in any way from platform.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"How many products can be added in a Catalog?")),Object(c.b)("p",{parentName:"li"},"There is no set limit as of now on the number of items that can be added on a catalog.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"How many products can be sent in a single message to the user?")),Object(c.b)("p",{parentName:"li"},"Businesses can send upto 30 Products on a MPM.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Is the feature available similar to the Jio Mart WABA?")),Object(c.b)("p",{parentName:"li"},"No, Jio Mart Catalog feature is a Beta Feature and is exclusive to JioMart only and not available for GA or any other BSPs. There is no tentative timeline for the release of the feature.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Can the business send dynamic pricing based on the user location or other parameters?")),Object(c.b)("p",{parentName:"li"},"No, Product pricing is static and cannot be changed user to user.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Can the price or other mandatory fields be hidden if not required?")),Object(c.b)("p",{parentName:"li"},"No, it's not possible to hide the mandatory fields like Image, Product Title, Description and Price can be hidden from the user while sending.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Is it possible to send digital goods like recharges, Loan offers etc to be sent as a product message?")),Object(c.b)("p",{parentName:"li"},"Yes, digital goods are allowed to be sent as SPM/MPM. BFSI customers can also use SPM/MPM to showcase card, load or other finance related products on SPM/MPM."))))}p.isMDXComponent=!0}}]);