(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{267:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var l=n(3),o=n(7),r=(n(0),n(385)),i=["components"],c={title:"Shopify",sidebar_label:"Shopify"},a={unversionedId:"platform_concepts/appConfiguration/shopify",id:"platform_concepts/appConfiguration/shopify",isDocsHomePage:!1,title:"Shopify",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/shopify.md",slug:"/platform_concepts/appConfiguration/shopify",permalink:"/docs/platform_concepts/appConfiguration/shopify",version:"current",sidebar_label:"Shopify",sidebar:"platform_concepts",previous:{title:"SFTP",permalink:"/docs/platform_concepts/appConfiguration/sftp"},next:{title:"Stripe Payment",permalink:"/docs/platform_concepts/appConfiguration/stripe"}},b=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Use-cases",id:"use-cases",children:[{value:"Get All Collections:-",id:"get-all-collections-",children:[]},{value:"Get Products By Collection:-",id:"get-products-by-collection-",children:[]},{value:"Get Product Details:-",id:"get-product-details-",children:[]},{value:"Get Products by Title:-",id:"get-products-by-title-",children:[]},{value:"Get Product Variants:-",id:"get-product-variants-",children:[]},{value:"Get Order Details:-",id:"get-order-details-",children:[]},{value:"Find Customer by Email:-",id:"find-customer-by-email-",children:[]},{value:"Get Orders by Customer ID:-",id:"get-orders-by-customer-id-",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"To get shopify Admin API Access Token and API Secret Key",id:"to-get-shopify-admin-api-access-token-and-api-secret-key",children:[]},{value:"To integrate shopify with your bot on the platform:",id:"to-integrate-shopify-with-your-bot-on-the-platform",children:[]}]},{value:"References:-",id:"references-",children:[]},{value:"Sample Experience",id:"sample-experience",children:[]}],s={toc:b};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(r.b)("p",null,"Yellow.ai Integration with Shopify allows you to seamlessly connect your Shopify app with the yellow.ai platform. Using this integration one can get collections, get products(by Collection, Title, Product ID), get customer details(by email), and get order details(by Customer ID). Apart from this, it also provides support for handling webhook events."),Object(r.b)("h2",{id:"use-cases"},"Use-cases"),Object(r.b)("p",null,"Following are the use-cases which are currently accommodated in the Shopify Integration:"),Object(r.b)("h3",{id:"get-all-collections-"},"Get All Collections:-"),Object(r.b)("p",null,"Get all Collections Node fetches all the available collections from shopify. For accessing all the collections one must enable the custom app to access ",Object(r.b)("strong",{parentName:"p"},"storefront data.")),Object(r.b)("h3",{id:"get-products-by-collection-"},"Get Products By Collection:-"),Object(r.b)("p",null,"Get products by collection integration node helps users in retrieving all the products from shopify based on the collection id provided."),Object(r.b)("h4",{id:"node-input-params-"},"Node Input Params:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Parameter"),Object(r.b)("td",null,"Type"),Object(r.b)("td",null,"Sample Input")),Object(r.b)("tr",null,Object(r.b)("td",null,"collection_id"),Object(r.b)("td",null,"String"),Object(r.b)("td",null,Object(r.b)("code",null,Object(r.b)("em",null,"482865238"))))),Object(r.b)("h3",{id:"get-product-details-"},"Get Product Details:-"),Object(r.b)("p",null,"Get product details integration node helps users with retrieving the product details using the specified product id."),Object(r.b)("h4",{id:"node-input-params--1"},"Node Input Params:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Parameter"),Object(r.b)("td",null,"Type"),Object(r.b)("td",null,"Sample Input")),Object(r.b)("tr",null,Object(r.b)("td",null,"product_id"),Object(r.b)("td",null,"Number"),Object(r.b)("td",null,Object(r.b)("code",null,Object(r.b)("em",null,"632910392"))))),Object(r.b)("h3",{id:"get-products-by-title-"},"Get Products by Title:-"),Object(r.b)("p",null,"Get products by title integration node helps users with retrieving a list of products based on the specified title."),Object(r.b)("h4",{id:"node-input-params--2"},"Node Input Params:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Parameter"),Object(r.b)("td",null,"Type"),Object(r.b)("td",null,"Sample Input")),Object(r.b)("tr",null,Object(r.b)("td",null,"title"),Object(r.b)("td",null,"String"),Object(r.b)("td",null,Object(r.b)("code",null,Object(r.b)("em",null,"IPod Nano"))))),Object(r.b)("h3",{id:"get-product-variants-"},"Get Product Variants:-"),Object(r.b)("p",null,"Get product variants helps users in retrieving a list of all the available variants based on the specified product id."),Object(r.b)("h4",{id:"node-input-params--3"},"Node Input Params:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Parameter"),Object(r.b)("td",null,"Type"),Object(r.b)("td",null,"Sample Input")),Object(r.b)("tr",null,Object(r.b)("td",null,"product_id"),Object(r.b)("td",null,"Number"),Object(r.b)("td",null,Object(r.b)("code",null,Object(r.b)("em",null,"632910392"))))),Object(r.b)("h3",{id:"get-order-details-"},"Get Order Details:-"),Object(r.b)("p",null,"Get order details integration node helps users with retrieving the details of the order based on the order id provided."),Object(r.b)("h4",{id:"node-input-params--4"},"Node Input Params:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Parameter"),Object(r.b)("td",null,"Type"),Object(r.b)("td",null,"Sample Input")),Object(r.b)("tr",null,Object(r.b)("td",null,"order_id"),Object(r.b)("td",null,"Number"),Object(r.b)("td",null,Object(r.b)("code",null,Object(r.b)("em",null,"450789469"))))),Object(r.b)("h3",{id:"find-customer-by-email-"},"Find Customer by Email:-"),Object(r.b)("p",null,"Find customer by email integration node helps users with retrieving the details of the customer based on the provided email."),Object(r.b)("h4",{id:"node-input-params--5"},"Node Input Params:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Parameter"),Object(r.b)("td",null,"Type"),Object(r.b)("td",null,"Sample Input")),Object(r.b)("tr",null,Object(r.b)("td",null,"email"),Object(r.b)("td",null,"String"),Object(r.b)("td",null,Object(r.b)("code",null,Object(r.b)("em",null,"johndoe@gmail.com"))))),Object(r.b)("h3",{id:"get-orders-by-customer-id-"},"Get Orders by Customer ID:-"),Object(r.b)("p",null,"Get orders by customer id helps users with retrieving a list of all the available orders based on the customer id provided."),Object(r.b)("h4",{id:"node-input-params--6"},"Node Input Params:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,"Parameter"),Object(r.b)("td",null,"Type"),Object(r.b)("td",null,"Sample Input")),Object(r.b)("tr",null,Object(r.b)("td",null,"customer_id"),Object(r.b)("td",null,"Number"),Object(r.b)("td",null,Object(r.b)("code",null,Object(r.b)("em",null,"207119551"))))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Configuring the integration with Shopify is straightforward."),Object(r.b)("p",null,"Follow the steps defined below to start integrating:"),Object(r.b)("h3",{id:"to-get-shopify-admin-api-access-token-and-api-secret-key"},"To get shopify Admin API Access Token and API Secret Key"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Login into ",Object(r.b)("inlineCode",{parentName:"li"},"shopify")),Object(r.b)("li",{parentName:"ol"},"Go to your store"),Object(r.b)("li",{parentName:"ol"},"Go To Apps\n",Object(r.b)("img",{parentName:"li",src:"https://cdn.yellowmessenger.com/Juwo3hAYTvKA1650972582447.png",alt:"Shopify Apps"})),Object(r.b)("li",{parentName:"ol"},"Then click on ",Object(r.b)("inlineCode",{parentName:"li"},"Develop apps for your store")," and click on Create an app.\n",Object(r.b)("img",{parentName:"li",src:"https://cdn.yellowmessenger.com/V7791fauviuE1650972835358.png",alt:"Shopify Develop Apps"})),Object(r.b)("li",{parentName:"ol"},"Enter the name of the App and Emergency developer email id. click on Create app.\n",Object(r.b)("img",{parentName:"li",src:"https://cdn.yellowmessenger.com/IskNDOxC2G4x1650972595971.png",alt:"Shopify Create App"})),Object(r.b)("li",{parentName:"ol"},"Configure the necessary Admin Api read and write scope for Analytics, Assigned Fullfillment orders, customers, Discounts, Draft orders,  Fullfillment services, inventory,Merchant-managed-fullfillment orders, orders, product listing, Products and Storefront Api Scopes. Permission can be easily modified by the customer according to their need in private app."),Object(r.b)("li",{parentName:"ol"},"Then copy the Admin Access Token and API Secret Key.\n",Object(r.b)("img",{parentName:"li",src:"https://cdn.yellowmessenger.com/qnS1UjQEQa6Q1650972607979.png",alt:"Shopify Creds"}))),Object(r.b)("h3",{id:"to-integrate-shopify-with-your-bot-on-the-platform"},"To integrate shopify with your bot on the platform:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to the integration section by selecting integrations from the switcher."),Object(r.b)("li",{parentName:"ol"},"In Integration page search for the shopify .\n",Object(r.b)("img",{parentName:"li",src:"https://cdn.yellowmessenger.com/GOIeBSXPTJdH1653913528873.png",alt:"Yellow.ai Shopify Integration"})),Object(r.b)("li",{parentName:"ol"},"Enter the store name, Admin API Access Token and API Secret Key."),Object(r.b)("li",{parentName:"ol"},"Click on Connect."),Object(r.b)("li",{parentName:"ol"},"Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes.\n",Object(r.b)("img",{parentName:"li",src:"https://cdn.yellowmessenger.com/O1CsKkYAtet01650972874113.png",alt:"Shopify Integration Node"}))),Object(r.b)("p",null,"Following the above steps will connect your Shopify Store account with yellow.ai platform."),Object(r.b)("h2",{id:"references-"},"References:-"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://help.shopify.com/en/manual/apps/custom-apps"},"Shopify Custom Apps")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://community.shopify.com/c/shopify-apis-and-sdks/404-error-from-get-admin-collection-listings-json-for-one-store/m-p/367034/highlight/true#M19606"},"Configuring Storefront data for getAllCollections integration node"))),Object(r.b)("h2",{id:"sample-experience"},"Sample Experience"),Object(r.b)("p",null,"Below is a video that depicts how this integration works"),Object(r.b)("p",null,"<",Object(r.b)("strong",{parentName:"p"},"VIDEO WILL BE UPLOADED WITH UPDATED UI DESIGN LANGUAGE"),">"))}p.isMDXComponent=!0},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var l=n(0),o=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),p=s(n),u=l,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);