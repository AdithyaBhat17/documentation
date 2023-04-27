"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[27936],{3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(a),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,l(l({ref:e},c),{},{components:a})):n.createElement(h,l({ref:e},c))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},10365:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=["components"],i={title:"Setup WhatsApp catalog",sidebar_label:"Setup WhatsApp catalog"},s=void 0,p={unversionedId:"platform_concepts/channelConfiguration/whatsapp-product-catalog",id:"platform_concepts/channelConfiguration/whatsapp-product-catalog",title:"Setup WhatsApp catalog",description:"This document will guide you through how to create a WhatsApp catalog.",source:"@site/docs/platform_concepts/channelConfiguration/whatsapp-product-catalog.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/whatsapp-product-catalog",permalink:"/docs/platform_concepts/channelConfiguration/whatsapp-product-catalog",draft:!1,tags:[],version:"current",frontMatter:{title:"Setup WhatsApp catalog",sidebar_label:"Setup WhatsApp catalog"},sidebar:"platform_concepts",previous:{title:"Setup WhatsApp",permalink:"/docs/platform_concepts/channelConfiguration/whatsapp-configuration"},next:{title:"WhatsApp number migration",permalink:"/docs/platform_concepts/channelConfiguration/wa-migration"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Sample flow of WhatsApp single/multi product message (SPM/MPM)",id:"sample-flow-of-whatsapp-singlemulti-product-message-spmmpm",level:4},{value:"Create product catalog on Facebook",id:"create-product-catalog-on-facebook",level:3},{value:"Link Catalog to a WhatsApp business account",id:"link-catalog-to-a-whatsapp-business-account",level:3},{value:"Compliance to use SPM/MPM on WhatsApp (Mandatory for Indian WABA)",id:"compliance-to-use-spmmpm-on-whatsapp-mandatory-for-indian-waba",level:3},{value:"FAQs",id:"faqs",level:3}],m={toc:u};function d(t){var e=t.components,a=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document will guide you through how to create a WhatsApp catalog."),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The following are the prerequisites to use WhatsApp Product node:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#21-create-product-catalog-on-facebook"},"Product Listed on Catalog"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#23-business-and-compliance-info-mandatory-for-indian-number-waba"},"Updated Business and Compliance Info"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Additional fields added incase of Indian businesses")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#22-link-catalog-to-a-waba"},"Catalog linked with the WABA")))),(0,r.kt)("h4",{id:"sample-flow-of-whatsapp-singlemulti-product-message-spmmpm"},"Sample flow of WhatsApp single/multi product message (SPM/MPM)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Currently, WhatsApp supports either a single product or a vertical carousel of up to 30 products in a single two way message."),(0,r.kt)("img",{src:"https://i.imgur.com/0Fc5Asl.png",width:"350px"}),(0,r.kt)("img",{src:"https://i.imgur.com/Nlw4IDw.png",width:"350px"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The recipient can click just on the view option to expand the product details or the vertical carousel of products as shown here."),(0,r.kt)("img",{src:"https://i.imgur.com/GnDzjeE.png",width:"350px"}),(0,r.kt)("img",{src:"https://i.imgur.com/CgEn4CB.png",width:"350px"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The recipient can add preferred products to the cart using the Add To Cart option or the + option across each item. Once the products are added to the cart, the recipient can send the cart to the business to proceed to the next step."),(0,r.kt)("img",{src:"https://i.imgur.com/ClYimi7.png",width:"350px"}))),(0,r.kt)("h3",{id:"create-product-catalog-on-facebook"},"Create product catalog on Facebook"),(0,r.kt)("p",null,"The Facebook Commerce Manager (FCM) helps in listing the products to be used for SPM (Single Product Message) or MPM (Multi Product Message). It is not possible to send any product on WhatsApp without listing the products on the FB's Commerce Manager."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use catalog, it's mandatory for the businesses to have a business manager account with Catalog.")),(0,r.kt)("p",null,"To create a Catalog in FB Commerce Manager for your Business:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log on to ",(0,r.kt)("a",{parentName:"p",href:"https://business.facebook.com/settings"},"Facebook Business Manager")," and go to ",(0,r.kt)("strong",{parentName:"p"},"Business Settings"),". Use the client's BM to create Production Catalogs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("strong",{parentName:"p"},"Data Sources")," and click on ",(0,r.kt)("strong",{parentName:"p"},"Catalog"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/kBNq6tm.png",alt:null})))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add")," > ",(0,r.kt)("strong",{parentName:"p"},"Create a New Catalog"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If this will be your first catalog, click Get Started. Select ",(0,r.kt)("strong",{parentName:"li"},"Create a catalog")," and then click ",(0,r.kt)("strong",{parentName:"li"},"Get Started"),"."),(0,r.kt)("li",{parentName:"ul"},"If you already have at least one catalog, you will see all of your catalogs listed. Select ",(0,r.kt)("strong",{parentName:"li"},"+ Add Catalog")," to create a new one.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/EebkHmM.png",alt:null})))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the type of inventory you advertise or sell, then click ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose how you want to add items to your catalog - Upload product info or Connect a partner platform.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the Business Manager account that your catalog belongs to. This unlocks more ways to use your catalog than selecting a personal account and enables you to assign other people permission to work on the catalog. To select a Business Manager account, you must be a ",(0,r.kt)("a",{parentName:"p",href:"https://en-gb.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fen-gb.facebook.com%2Fbusiness%2Fhelp%2F442345745885606&event_type=click&last_nav_impression_id=2bDTYoj64VaSUC2PQ&max_percent_page_viewed=52&max_viewport_height_px=711&max_viewport_width_px=1437&orig_http_referrer=https%3A%2F%2Fwww.google.com%2F&orig_request_uri=https%3A%2F%2Fen-gb.facebook.com%2Fbusiness%2Fhelp%2F1275400645914358&primary_cmsid=1275400645914358&primary_content_locale=en_GB&region=apac&scrolled=true&session_id=1QKGQufmtkRFBOVm3&site=fb4b&extra_data%5Bview_type%5D=v3_initial_view&extra_data%5Bsite_section%5D=help&extra_data%5Bplacement%5D=%2Fbusiness%2Fhelp%2F1275400645914358"},"business admin"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for your catalogue and click ",(0,r.kt)("strong",{parentName:"p"},"Create"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://secure-res.craft.do/v2/L4WM1z6kJj18seBUUw2MuARGoGtYBZnsDbGiZ3oGKryUqPeWhxw6C4pK8vL23CmUiucQdeLh1YfYgmFg9TUaAhenEm6BPkxe7hedEtKwgZsKhiQfwNq9FEYvnMqZ96dCER56Nt13CzPmyRQJxCFRLsHNBTy1qh81pXxw1St8NXU9ZiCfaw29VfbfkiWo9vFZyGem8Evjc3CSBKnpgnaX2Yw1PqPq9UYVxQ6azZQvjfN6sg21tCgDLt2b1rr5N7WVz5V7vRJtawHHqbPh3H6Cvpcd6d56iRgRLURKGxB5TGGQY67ncV/Image.jpg",alt:null})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For detailed instructions, see ",(0,r.kt)("a",{parentName:"p",href:"https://en-gb.facebook.com/business/help/1275400645914358?id=725943027795860"},"Facebook's documentation"),".")),(0,r.kt)("p",null,"Once the Catalog is created, you can go to the Commerce Manager available on the top right and manage your Catalog from the Commerce Manager Dashboard."),(0,r.kt)("p",null,"You can add products to the Catalog either manually or through a ",(0,r.kt)("a",{parentName:"p",href:"https://www.facebook.com/business/help/1898524300466211?id=725943027795860"},"Data Feed"),". "),(0,r.kt)("p",null,"An ideal way to manage your products is through Data Feed as it allows adding products with complete information using a CSV file, and sync the data through the Commerce Manager (CM). "),(0,r.kt)("p",null,"You can automate the sync based on your preferred cadence such as Hourly, Daily etc. To find the CSV headers and supported values on the Data Feed, see ",(0,r.kt)("a",{parentName:"p",href:"https://www.facebook.com/business/help/120325381656392?id=725943027795860"},"here"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/fL3D0n7.png",alt:null})),(0,r.kt)("p",null,"It is important to note the following points in Catalog before using its products:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"ContentID can be given from the business side or will be generated automatically from FB side. This ID needs to be unique and will be used as Product ID in the WhatsApp product message node.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It takes some time to update products when syncing the catalogs using the data feed. You cannot send products on WhatsApp until this process is completed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Businesses in India, it is mandatory to have these fields (origin_country, importer_name, and importer_address) filled in as per field specification before each product can be used as SPM/MPM. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can add the field values (origin_country, importer_name, and importer_address) in the CSV file or use a Data Rule to fill the values by default from the Data Feed settings page."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1oEGBny.png",alt:null})))),(0,r.kt)("h3",{id:"link-catalog-to-a-whatsapp-business-account"},"Link Catalog to a WhatsApp business account"),(0,r.kt)("p",null,"Once the Catalog is set up, the business has to share the Catalog access with the BSP (Yellow.ai) to use items from the Catalog in WABA accounts created by Yellow. "),(0,r.kt)("p",null,"To share Catalog access with the BSP and connect it to WABA - "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the client's BM, go to ",(0,r.kt)("strong",{parentName:"p"},"Catalog"),"  and select ",(0,r.kt)("strong",{parentName:"p"},"Assign Partner"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/BCh7ZBZ.png",alt:null})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the BSP's (yellow.ai\u2019s) BM ID to link to the Catalog of the business."),(0,r.kt)("img",{src:"https://i.imgur.com/kzQnZTG.png",width:"70%"}))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Businesses Catalog should show the BSPs name as a partner for the Catalog. Provide Manage Catalog Permission."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/23bYVrY.png",alt:null})))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the access is shared, the BSP will get the Catalog listed at their end, as shown below."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/XEcYZTy.png",alt:null})))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After getting access, the BSP has to link the Catalog to the WABA. To do this, the BSP has to go to the ",(0,r.kt)("strong",{parentName:"p"},"Phone Number")," page on the WABA account on BM, click on the ",(0,r.kt)("strong",{parentName:"p"},"Cart")," icon on the left pane, and then choose the Catalog that needs to be linked."),(0,r.kt)("img",{src:"https://i.imgur.com/5oJrzpP.png",width:"70%"}))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your Catalog should appear in the connected catalog list. This confirms that the Catalog is ready to be used on the WABA and the Phone number attached to this WABA."),(0,r.kt)("img",{src:"https://i.imgur.com/6NAB8Uy.png",width:"70%"}))),(0,r.kt)("h3",{id:"compliance-to-use-spmmpm-on-whatsapp-mandatory-for-indian-waba"},"Compliance to use SPM/MPM on WhatsApp (Mandatory for Indian WABA)"),(0,r.kt)("p",null,"It is mandatory for Indian businesses to provide the business and compliance information to use the SPM/MPM feature on their WABA accounts. This is mandatory for all Indian WhatsApp business accounts."),(0,r.kt)("p",null,"Log on to the ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai/"},"Cloud Platform")," and go to ",(0,r.kt)("strong",{parentName:"p"},"Channels")," > ",(0,r.kt)("strong",{parentName:"p"},"WhatsApp"),", and fill in all the basic and additional details."),(0,r.kt)("img",{src:"https://i.imgur.com/g7gw6v9.png",width:"65%"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.craft.do/s/0loidngTNNAzkK/b/8CA0C2DD-ECD2-437F-BBFB-C1303B7E0966/How_to_Create_an_End_to_End_Catalog_"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To create a new Catalog on the the Yellow.ai Platform, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#8-whatsapp-product-message"},"here"),".")),(0,r.kt)("h3",{id:"faqs"},"FAQs"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is SPM/MPM supported on Cloud API?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"Yes, WhatsApp SPM/MPM are now supported on Cloud API hosted WABAs as well."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can we integrate the Catalog with the platform?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"No, Catalog integration is not live yet and will be evaluated in Q1 2023."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can Shopify or other ecom platforms be used for syncing the products on FB Catalog?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"Yes, Shopify Catalogs can be synced with WhatsApp Catalogs for the products uploaded on Shopify to be used on the SPM/MPM as well. Its requested to the client to get in touch with the Shopify Team to add the Sync of the products with WA Catalog to get started. The feature is available but not explored yet from Yellow\u2019s side due to the limitation to access to an active Shopify instance."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can we upload or update the product quantity or availability from the Platform?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"No, since there is no integration available for the CM and the platform, it is not currently possible to manage the catalog in any way from the platform."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How many products can be added to a Catalog?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"There is no limit as of now on the number of items that can be added to a catalog."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How many products can be sent in a single message to the user?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"Businesses can send up to 30 products on a MPM."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is the feature available similar to the Jio Mart WABA?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"No, Jio Mart Catalog feature is a beta feature that is exclusive to JioMart and not available for GA or any other BSPs. There is no tentative timeline for the release of the feature."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can the business send dynamic pricing based on the user's location or other parameters?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"No, product pricing is static and cannot be changed from user to user."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can the price or other mandatory fields be hidden if not required?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null,"No, it's not possible to hide the mandatory fields like Image, Product Title, Description and Price can be hidden from the user while sending."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is it possible to send digital goods like recharges, Loan offers, and so on to be sent as a product message?"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("div",null," Yes, digital goods are allowed to be sent as SPM/MPM. BFSI customers can also use SPM/MPM to showcase card, load or other finance related products on SPM/MPM."))))}d.isMDXComponent=!0}}]);