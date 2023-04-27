"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[85719],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Web Behavior Triggers to identify in E-commerce",sidebar_label:"Web Behavior Triggers to identify in E-commerce"},c=void 0,l={unversionedId:"platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm",id:"platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm",title:"Web Behavior Triggers to identify in E-commerce",description:"Web Behaviours to Identify in eCommerce",source:"@site/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm.md",sourceDirName:"platform_concepts/engagement/inbound/webBehaviourTriggers",slug:"/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm",permalink:"/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm",draft:!1,tags:[],version:"current",frontMatter:{title:"Web Behavior Triggers to identify in E-commerce",sidebar_label:"Web Behavior Triggers to identify in E-commerce"}},g={},p=[{value:"Web Behaviours to Identify in eCommerce",id:"web-behaviours-to-identify-in-ecommerce",level:2},{value:"Homepage",id:"homepage",level:2},{value:"Product Search Page",id:"product-search-page",level:2},{value:"Product Details Page",id:"product-details-page",level:2},{value:"Cart Page",id:"cart-page",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"web-behaviours-to-identify-in-ecommerce"},"Web Behaviours to Identify in eCommerce"),(0,o.kt)("h1",{id:"in-this-guide"},"In this guide"),(0,o.kt)("p",null,"In this guide, we walk through the various ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType"},"behavioural automation rules"),",that can be used to improve the navigation for an e-commerce website visitor."),(0,o.kt)("p",null,"For this walkthrough, we have broken down the website into ",(0,o.kt)("strong",{parentName:"p"},"Homepage, Product Search Page, Product Details Page")," and ",(0,o.kt)("strong",{parentName:"p"},"Cart Page"),". There could, of course, be many more pages and use cases other than the ones covered in this guide."),(0,o.kt)("h2",{id:"homepage"},"Homepage"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Homepage Help \u2192")," Brands do not want visitors spending too much time on the homepage. Visitors should quickly move to the next stage in the funnel, ie, product search, product details or the cart checkout page. We can use ",(0,o.kt)("strong",{parentName:"li"},"URL Targeting"),", ",(0,o.kt)("strong",{parentName:"li"},"Seconds on Page"),", ",(0,o.kt)("strong",{parentName:"li"},"Seconds of Inactivity")," and ",(0,o.kt)("strong",{parentName:"li"},"Scroll %")," triggers to identify visitors who are stuck on the homepage, and use Inbound Campaigns to help them move to the next stage.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/nUe4p56DkEpC1628175899461.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Gbz77mhH5QLl1628180208877.gif",alt:"Shopify Homepage Help.gif"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Homepage Ad Bar \u2192")," Visitors will often land on your website through an external campaign or referrer. Such visitors have a very specific intent. You can identify which source they've come from using ",(0,o.kt)("strong",{parentName:"li"},"URL Query Param")," and ",(0,o.kt)("strong",{parentName:"li"},"Referrer")," targeting rules, and create personalised engagements.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/TOhLLTnkAh9j1628176246228.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/5EqowOFREACk1628176355440.png",alt:"Image.png"})),(0,o.kt)("h2",{id:"product-search-page"},"Product Search Page"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Product Search Filter Nudge \u2192")," When the visitor spends too much time on the Product Search page, you might want to nudge them to apply filters in order to find more relevant results. ",(0,o.kt)("strong",{parentName:"li"},"URL Targeting"),", ",(0,o.kt)("strong",{parentName:"li"},"Seconds on Page"),", ",(0,o.kt)("strong",{parentName:"li"},"Seconds of Inactivity")," and ",(0,o.kt)("strong",{parentName:"li"},"Scroll %")," are the right triggers to identify such users")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/A8gNfmc1UXks1628176482772.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/vHEbQFvjwC8P1628180269801.gif",alt:"Product Search Filter Nudge.gif"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Product Search Exit Intent \u2192")," When the visitor is about to exit from the Product Search page, you might want to do any of the following:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Collect Opt-in for outbound retargeting"),(0,o.kt)("li",{parentName:"ul"},"Nudge them to Save the Search Result for the next time they visit"),(0,o.kt)("li",{parentName:"ul"},"Ask them to apply product filters in case they didn\u2019t find anything relevant")),(0,o.kt)("p",{parentName:"li"},"To identify such visitors, ",(0,o.kt)("strong",{parentName:"p"},"Exit Intent")," trigger comes in handy."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/bPCxx37UjVCj1628176592057.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/C005oWo04ZCY1628180303612.gif",alt:"Product Search Exit Intent.gif"})),(0,o.kt)("h2",{id:"product-details-page"},"Product Details Page"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Product Purchase Urgency Nudge \u2192")," When you have a visitor spending too much time on the Product Details Page, you might want to expedite the purchase by creating a sense of urgency. Such visitors can be identified using ",(0,o.kt)("strong",{parentName:"li"},"URL Targeting"),", ",(0,o.kt)("strong",{parentName:"li"},"Seconds on Page")," & ",(0,o.kt)("strong",{parentName:"li"},"Seconds of Inactivity")," triggers.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/XEx4bUTh9nfz1628176670704.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/lIE8lEF8ftVo1628181214689.gif",alt:"Product Purchase Urgency Nudge.gif"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Product Details Page Exit Intent \u2192")," When a visitor is about to exit the Product Details Page, you might want to increase chances of conversion by asking them to shortlist the product, or by offering them an exciting discount. Such visitors can be identified by using a combination of ",(0,o.kt)("strong",{parentName:"li"},"URL")," and ",(0,o.kt)("strong",{parentName:"li"},"Exit Intent")," triggers.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/GoXy0cBtJbtR1628176811949.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/bhjERW794E0k1628181249819.gif",alt:"Product Details Page Exit Intent.gif"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Product Add to Cart Upsell \u2192")," When a visitor adds a product to a cart, it might be the perfect opportunity for you to do an upsell. These high intent visitors can be targeted using the ",(0,o.kt)("strong",{parentName:"li"},"CTA Clicked")," trigger")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/wKPpHEsZUEne1628176881352.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/hZ7N0UrgJhiG1628181296760.gif",alt:"Product Add to Cart Upsell.gif"})),(0,o.kt)("h2",{id:"cart-page"},"Cart Page"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Cart Page Urgency Nudge \u2192")," When you have a visitor spending too much time on the Cart Page, you might want to expedite the purchase by creating a sense of urgency. Such visitors can be identified using ",(0,o.kt)("strong",{parentName:"li"},"URL Targeting"),", ",(0,o.kt)("strong",{parentName:"li"},"Seconds on Page")," & ",(0,o.kt)("strong",{parentName:"li"},"Seconds of Inactivity")," triggers.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/0y1hjRCcsDwj1628176966290.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/373D62D3-8040-4E7B-820C-FC2BEC9832E9_2/Cart%20Page%20Urgency%20Nudge.gif",alt:"Cart Page Urgency Nudge.gif"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Cart Page Exit Intent \u2192")," When a visitor is about to exit the Cart Page, you might want to increase chances of conversion by offering them an exciting discount. Such visitors can be identified by using a combination of ",(0,o.kt)("strong",{parentName:"li"},"URL")," and ",(0,o.kt)("strong",{parentName:"li"},"Exit Intent")," triggers.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/cqjPOHzA4iLb1628177078408.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/rTdcBwyny5MV1628181353125.gif",alt:"Cart Page Exit Intent.gif"})))}u.isMDXComponent=!0}}]);