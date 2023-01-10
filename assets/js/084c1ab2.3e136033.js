"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[291],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(d,i(i({ref:t},g),{},{components:n})):a.createElement(d,i({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99098:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Web behaviour conditions",sidebar_label:"Campaign display conditions"},s=void 0,p={unversionedId:"platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",id:"platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",title:"Web behaviour conditions",description:"When creating an Inbound campaign, you need to define when the campaign should show. You can use various conditions or strategies to run effective inbound campaigns.",source:"@site/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType.md",sourceDirName:"platform_concepts/engagement/inbound/webBehaviourTriggers",slug:"/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",permalink:"/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorTriggerType",draft:!1,tags:[],version:"current",frontMatter:{title:"Web behaviour conditions",sidebar_label:"Campaign display conditions"},sidebar:"platform_concepts",previous:{title:"Create Inbound campaign",permalink:"/docs/platform_concepts/engagement/inbound/gettingStarted/launchingYourFirstInboundCampaign"},next:{title:"Inbound report",permalink:"/docs/platform_concepts/engagement/inbound/gettingStarted/campaignsOverviewScreen"}},g={},c=[{value:"1. Evaluate multiple conditions",id:"1-evaluate-multiple-conditions",level:2},{value:"2. Trigger events",id:"2-trigger-events",level:2},{value:"2.1 Custom event based trigger",id:"21-custom-event-based-trigger",level:3},{value:"3. Web behaviour triggers for content marketing",id:"3-web-behaviour-triggers-for-content-marketing",level:2},{value:"3.1 Homepage",id:"31-homepage",level:3},{value:"1. Homepage help",id:"1-homepage-help",level:4},{value:"2. Homepage Ad Banner",id:"2-homepage-ad-banner",level:4},{value:"3.2 Solutions page",id:"32-solutions-page",level:3},{value:"Social proof",id:"social-proof",level:4},{value:"3.3 Blog page",id:"33-blog-page",level:3},{value:"1. Blog Recommendation",id:"1-blog-recommendation",level:4},{value:"2. Collecting opt-ins",id:"2-collecting-opt-ins",level:4},{value:"3. Pricing page",id:"3-pricing-page",level:4},{value:"4. Qualify leads &amp; schedule demos",id:"4-qualify-leads--schedule-demos",level:4},{value:"5. Increase conversions",id:"5-increase-conversions",level:4},{value:"4. Web behavior triggers for e-commerce",id:"4-web-behavior-triggers-for-e-commerce",level:2},{value:"4.1 Homepage",id:"41-homepage",level:3},{value:"1. Homepage Help",id:"1-homepage-help-1",level:4},{value:"2. Homepage ad. bar",id:"2-homepage-ad-bar",level:4},{value:"4.2 Product search page",id:"42-product-search-page",level:3},{value:"1. Product search filter nudge",id:"1-product-search-filter-nudge",level:4},{value:"2. Product search exit intent",id:"2-product-search-exit-intent",level:4},{value:"4.3 Product details page",id:"43-product-details-page",level:3},{value:"1. Product purchase urgency nudge",id:"1-product-purchase-urgency-nudge",level:4},{value:"2. Product Details Page Exit Intent",id:"2-product-details-page-exit-intent",level:4},{value:"3. Product add to cart upsell",id:"3-product-add-to-cart-upsell",level:4},{value:"4.4 Cart page",id:"44-cart-page",level:3},{value:"1. Cart page urgency nudge",id:"1-cart-page-urgency-nudge",level:4},{value:"2. Cart page exit intent",id:"2-cart-page-exit-intent",level:4}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When creating an Inbound campaign, you need to define when the campaign should show. You can use various conditions or strategies to run effective inbound campaigns. "),(0,o.kt)("p",null,"This article provides various conditions (web behaviour) that the Inbound campaign supports and helps you with setting up multiple conditions."),(0,o.kt)("h2",{id:"1-evaluate-multiple-conditions"},"1. Evaluate multiple conditions"),(0,o.kt)("p",null,"For every Condition set, you can have one or more conditions, and for every campaign (Web behaviour settings), you can have multiple Condition sets."),(0,o.kt)("p",null,"By default, ",(0,o.kt)("em",{parentName:"p"},"and")," is applied between each condition within a Condition set and ",(0,o.kt)("em",{parentName:"p"},"or")," is applied between each Condition set of Web behaviour settings. "),(0,o.kt)("p",null,"Hence, the campaign is displayed only when all the conditions of any Condition set are met."),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZFgKhu2.png",alt:null})),(0,o.kt)("p",null,"To know how to define conditions, [see the following section"),(0,o.kt)("h2",{id:"2-trigger-events"},"2. Trigger events"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/8H9dVFY.png",alt:null})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"URL"),(0,o.kt)("td",{parentName:"tr",align:null},"Show the campaign only when visitors are on a particular URL or if the URL includes/excludes a specific keyword. You can use ",(0,o.kt)("em",{parentName:"td"},"is/is not"),", or ",(0,o.kt)("em",{parentName:"td"},"includes/ does not include"),". ",(0,o.kt)("br",null),"You can also use  ",(0,o.kt)("strong",{parentName:"td"},"Wildcard (*)"),", an asterisk to mention any keyword in the URL that is not specific. For example, the URL ",(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("a",{parentName:"strong",href:"http://yellow.ai/*/blog"},"http://yellow.ai/*/blog"))," considers any value in the URL in place of *.",(0,o.kt)("img",{parentName:"td",src:"https://i.imgur.com/peathJj.png",alt:null}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Referrer"),(0,o.kt)("td",{parentName:"tr",align:null},"The source (URL) from which the visitor has redirected to the current page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Number of site visits"),(0,o.kt)("td",{parentName:"tr",align:null},"The number of times a user has visited the specified website site (It considers sessions, not page views).")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Device"),(0,o.kt)("td",{parentName:"tr",align:null},"The device from which the visitor accessed the website - mobile, desktop, or tablet.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Seconds on page"),(0,o.kt)("td",{parentName:"tr",align:null},"Show the campaign if the visitor has been on the page for a certain number of seconds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Scroll percentage"),(0,o.kt)("td",{parentName:"tr",align:null},"Show the campaign when a visitor scrolls down X percent of the page.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"On exit intent"),(0,o.kt)("td",{parentName:"tr",align:null},"Show the campaign when a visitors's cursor leaves the window on the top half of the screen, usually indicating they intend to change browser tabs or close the current tab or window.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Cookie"),(0,o.kt)("td",{parentName:"tr",align:null},"Show the campaign either to visitors who have or do not have a specific cookie attached to them. You will have to define the cookies using ",(0,o.kt)("em",{parentName:"td"},"key-value")," pairs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CTA"),(0,o.kt)("td",{parentName:"tr",align:null},"Show the campaign when the visitor clicked on a specific page element. Use the selector and define the ",(0,o.kt)("em",{parentName:"td"},"key-value")," pair.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Element hovered over"),(0,o.kt)("td",{parentName:"tr",align:null},"Show the campaign when the vision hovered on a specific element of the page. Use the selector and define the ",(0,o.kt)("em",{parentName:"td"},"key-value")," pair.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Custom Event"),(0,o.kt)("td",{parentName:"tr",align:null},"Show the campaign based on custom events. See ",(0,o.kt)("a",{parentName:"td",href:"#21-custom-event-based-trigger"},"Custom event based trigger"))))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"To know when to use different trigger events, see ",(0,o.kt)("a",{parentName:"p",href:"#3-web-behaviour-triggers-for-content-marketing"},"Web behaviour triggers for content marketing")," and ",(0,o.kt)("a",{parentName:"p",href:"#4-web-behavior-triggers-for-e-commerce"},"Web behavior triggers for e-commerce"),".")),(0,o.kt)("h3",{id:"21-custom-event-based-trigger"},"2.1 Custom event based trigger"),(0,o.kt)("p",null,"To post custom event to the bot, use the following script - "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({\n   event_code: 'ym-inbound-event',\n   data: JSON.stringify({\n      >event: { \n         code: \"eventName\u201d\n         }\n      })\n   }))`\n\n")),(0,o.kt)("p",null,"To know how to create custom event, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub/#8-custom-event"},"Custom event"),". "),(0,o.kt)("p",null,"In the Condition set, choose Custom event and select the event on which you want to set trigger condition."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/64CABEA8-624F-4F24-8D77-48FB40D78208_2/Image.png",alt:"Image.png"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"3-web-behaviour-triggers-for-content-marketing"},"3. Web behaviour triggers for content marketing"),(0,o.kt)("p",null,"This section explains how you can configure the condition for different web pages such as Home, Solutions, Product details, Blog, and Pricing pages."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can just use this for reference and there could be many other pages and use cases that were not covered in this section.")),(0,o.kt)("h3",{id:"31-homepage"},"3.1 Homepage"),(0,o.kt)("h4",{id:"1-homepage-help"},"1. Homepage help"),(0,o.kt)("p",null,"Brands do not want visitors to spend too much time on the homepage. Instead, they prefer quickly moving to the next stage in the funnel (example: solutions page, blogs or pricing page). "),(0,o.kt)("p",null,"Use ",(0,o.kt)("strong",{parentName:"p"},"URL targeting"),", ",(0,o.kt)("strong",{parentName:"p"},"Seconds on page"),", ",(0,o.kt)("strong",{parentName:"p"},"Seconds of inactivity")," and ",(0,o.kt)("strong",{parentName:"p"},"Scroll %")," triggers to identify visitors who are stuck on the homepage, and use Inbound Campaigns to help them move to the next stage."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/8TQMeeo.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/htw0adEMq1T01629804244269.gif",alt:"ezgif.com-gif-maker.gif"})),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"2-homepage-ad-banner"},"2. Homepage Ad Banner"),(0,o.kt)("p",null,"Visitors often land on to your website through an external campaign or referrer. Such visitors have a very specific intent. "),(0,o.kt)("p",null,"You can identify the source from which they have come from using ",(0,o.kt)("strong",{parentName:"p"},"URL Query Param")," and ",(0,o.kt)("strong",{parentName:"p"},"Referrer")," targeting rules to create personalised engagements."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/CsfBfGbQsCUx1629804257597.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/bchBX92IerXQ1629804274400.gif",alt:"ezgif.com-gif-maker (1).gif"})),(0,o.kt)("h3",{id:"32-solutions-page"},"3.2 Solutions page"),(0,o.kt)("h4",{id:"social-proof"},"Social proof"),(0,o.kt)("p",null,"A visitor exploring your solutions is a potential customer. Win their confidence by suggesting related blogs, customer success-stories and move them a step closer to conversion. Identify such visitors using ",(0,o.kt)("strong",{parentName:"p"},"URL Targeting.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Y47tty0.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/tfe0sqdg81541629804330710.gif",alt:"ezgif.com-gif-maker.gif"})),(0,o.kt)("h3",{id:"33-blog-page"},"3.3 Blog page"),(0,o.kt)("h4",{id:"1-blog-recommendation"},"1. Blog Recommendation"),(0,o.kt)("p",null,"A visitor who exists on your blog page without reading a significant chunk of your blog probably did not find what they were looking for. "),(0,o.kt)("p",null,"You can prevent such drop-offs by collecting visitor preference, and recommending better content right when the visitor is about to bounce off. Identify such visitors using ",(0,o.kt)("strong",{parentName:"p"},"URL Targeting, Scroll % and Exit Intent")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/NPjs7mYqF3QZ1629804358314.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/2dPu7xLU2ns81629804379454.gif",alt:"ezgif.com-gif-maker.gif"})),(0,o.kt)("h4",{id:"2-collecting-opt-ins"},"2. Collecting opt-ins"),(0,o.kt)("p",null,"When a visitor finishes reading the entire blog, they probably liked what they read. This might be the perfect moment to collect a WhatsApp or email opt-in in order to start sending them similar blogs. Identify such visitors using ",(0,o.kt)("strong",{parentName:"p"},"URL Targeting and Scroll %")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/tzb6xdugR4BZ1629804390864.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/ORxl4xBq3r1H1629804415641.gif",alt:"ezgif.com-gif-maker.gif"})),(0,o.kt)("h4",{id:"3-pricing-page"},"3. Pricing page"),(0,o.kt)("h4",{id:"4-qualify-leads--schedule-demos"},"4. Qualify leads & schedule demos"),(0,o.kt)("p",null,"Identify visitors who want to schedule a demo, let the chatbot qualify them and set-up a meeting, ensuring that your sales team wake up to a productive calendar. Use the ",(0,o.kt)("strong",{parentName:"p"},"CTA")," event to achieve the same"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/PlWkoFTGir171629804427468.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/OxhEwfzByVdR1629804440683.gif",alt:"ezgif.com-gif-maker (1).gif"})),(0,o.kt)("h4",{id:"5-increase-conversions"},"5. Increase conversions"),(0,o.kt)("p",null,"You can use targeted promotions to quickly convert visitors who spend a decent time on the pricing page and are about to exit it. "),(0,o.kt)("p",null,"Identify such visitors using ",(0,o.kt)("strong",{parentName:"p"},"URL targeting"),", ",(0,o.kt)("strong",{parentName:"p"},"Seconds on page"),", ",(0,o.kt)("strong",{parentName:"p"},"Seconds of inactivity")," and ",(0,o.kt)("strong",{parentName:"p"},"Exit intent")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/5JeUL4F4ELkM1629804452289.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/r9qRLk7FYPDs1629804472578.gif",alt:"ezgif.com-gif-maker.gif"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"4-web-behavior-triggers-for-e-commerce"},"4. Web behavior triggers for e-commerce"),(0,o.kt)("p",null,"In this section, we have provided some examples on how you can leverage Web behaviour triggers for some e-commerce use cases. We have considered the following pages for a typical e-commerce website - ",(0,o.kt)("em",{parentName:"p"},"Homepage, Product search page,  Product details page**, and "),"Cart page*. "),(0,o.kt)("h3",{id:"41-homepage"},"4.1 Homepage"),(0,o.kt)("h4",{id:"1-homepage-help-1"},"1. Homepage Help"),(0,o.kt)("p",null,"Brands do not want visitors spending too much time on the homepage. Visitors should quickly move to the next stage in the funnel, ie, product search, product details or the cart checkout page. "),(0,o.kt)("p",null,"Use ",(0,o.kt)("strong",{parentName:"p"},"URL Targeting"),", ",(0,o.kt)("strong",{parentName:"p"},"Seconds on Page"),", ",(0,o.kt)("strong",{parentName:"p"},"Seconds of Inactivity")," and ",(0,o.kt)("strong",{parentName:"p"},"Scroll %")," triggers to identify visitors who are stuck on the homepage. Create Inbound campaigns to help them move to other pages."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/nUe4p56DkEpC1628175899461.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/Gbz77mhH5QLl1628180208877.gif",alt:"Shopify Homepage Help.gif"})),(0,o.kt)("h4",{id:"2-homepage-ad-bar"},"2. Homepage ad. bar"),(0,o.kt)("p",null,"Visitors often land on to your website through an external campaign or referrer. Such visitors have a very specific intent. Identify which source they have come from using ",(0,o.kt)("strong",{parentName:"p"},"URL Query Param")," and ",(0,o.kt)("strong",{parentName:"p"},"Referrer")," targeting rules, and create personalised engagements accordingly."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/TOhLLTnkAh9j1628176246228.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/5EqowOFREACk1628176355440.png",alt:"Image.png"})),(0,o.kt)("h3",{id:"42-product-search-page"},"4.2 Product search page"),(0,o.kt)("h4",{id:"1-product-search-filter-nudge"},"1. Product search filter nudge"),(0,o.kt)("p",null,"When a visitor spends too much time on the Product search page, you might want to nudge them to apply filters in order to find more relevant results. *"),(0,o.kt)("p",null,"Use ",(0,o.kt)("em",{parentName:"p"},"URL targeting**, "),"Seconds on page*",(0,o.kt)("em",{parentName:"p"},",  "),"Seconds of inactivity",(0,o.kt)("em",{parentName:"p"},", and "),"Scroll %* are the right triggers to identify such users."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/A8gNfmc1UXks1628176482772.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/vHEbQFvjwC8P1628180269801.gif",alt:"Product Search Filter Nudge.gif"})),(0,o.kt)("h4",{id:"2-product-search-exit-intent"},"2. Product search exit intent"),(0,o.kt)("p",null,"When a visitor is about to exit from the Product search page, you can do any of the following - "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Collect Opt-in for outbound retargeting"),(0,o.kt)("li",{parentName:"ul"},"Nudge to save the search results for the next time they visit"),(0,o.kt)("li",{parentName:"ul"},"Ask them to apply product filters in case they didn\u2019t find anything relevant")),(0,o.kt)("p",null,"To identify such visitors, use  the ",(0,o.kt)("strong",{parentName:"p"},"Exit Intent")," trigger."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/bPCxx37UjVCj1628176592057.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/C005oWo04ZCY1628180303612.gif",alt:"Product Search Exit Intent.gif"})),(0,o.kt)("h3",{id:"43-product-details-page"},"4.3 Product details page"),(0,o.kt)("h4",{id:"1-product-purchase-urgency-nudge"},"1. Product purchase urgency nudge"),(0,o.kt)("p",null,"When you have a visitor spending too much time on the Product details page, you might want to expedite the purchase by creating a sense of urgency. "),(0,o.kt)("p",null,"You can identify such visitors using ",(0,o.kt)("em",{parentName:"p"},"URL Targeting"),", ",(0,o.kt)("em",{parentName:"p"},"Seconds on Page")," & ",(0,o.kt)("em",{parentName:"p"},"Seconds of Inactivity")," triggers."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/XEx4bUTh9nfz1628176670704.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/lIE8lEF8ftVo1628181214689.gif",alt:"Product Purchase Urgency Nudge.gif"})),(0,o.kt)("h4",{id:"2-product-details-page-exit-intent"},"2. Product Details Page Exit Intent"),(0,o.kt)("p",null,"When a visitor is about to exit the Product details page, you might want to increase the chances of conversion by asking them to shortlist the product, or by offering them an exciting discount. "),(0,o.kt)("p",null,"You can identify such visitors using a combination of ",(0,o.kt)("strong",{parentName:"p"},"URL")," and ",(0,o.kt)("strong",{parentName:"p"},"Exit Intent")," triggers."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/GoXy0cBtJbtR1628176811949.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/bhjERW794E0k1628181249819.gif",alt:"Product Details Page Exit Intent.gif"})),(0,o.kt)("h4",{id:"3-product-add-to-cart-upsell"},"3. Product add to cart upsell"),(0,o.kt)("p",null,"When a visitor adds a product to a cart, it might be the perfect opportunity for you to do an upsell. These high intent visitors can be targeted using the ",(0,o.kt)("strong",{parentName:"p"},"CTA clicked")," trigger"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/wKPpHEsZUEne1628176881352.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/hZ7N0UrgJhiG1628181296760.gif",alt:"Product Add to Cart Upsell.gif"})),(0,o.kt)("h3",{id:"44-cart-page"},"4.4 Cart page"),(0,o.kt)("h4",{id:"1-cart-page-urgency-nudge"},"1. Cart page urgency nudge"),(0,o.kt)("p",null,"When you have a visitor spending too much time on the cart page, you might want to expedite the purchase by creating a sense of urgency. "),(0,o.kt)("p",null,"You can identify such visitors using ",(0,o.kt)("em",{parentName:"p"},"URL Targeting"),", ",(0,o.kt)("em",{parentName:"p"},"Seconds on Page")," and ",(0,o.kt)("em",{parentName:"p"},"Seconds of Inactivity")," triggers."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/0y1hjRCcsDwj1628176966290.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/373D62D3-8040-4E7B-820C-FC2BEC9832E9_2/Cart%20Page%20Urgency%20Nudge.gif",alt:"Cart Page Urgency Nudge.gif"})),(0,o.kt)("h4",{id:"2-cart-page-exit-intent"},"2. Cart page exit intent"),(0,o.kt)("p",null,"When a visitor is about to exit the Cart Page, you might want to increase chances of conversion by offering them an exciting discount. "),(0,o.kt)("p",null,"You can identify such visitors using a combination of ",(0,o.kt)("em",{parentName:"p"},"URL")," and ",(0,o.kt)("em",{parentName:"p"},"Exit Intent")," triggers."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/cqjPOHzA4iLb1628177078408.png",alt:"Image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/rTdcBwyny5MV1628181353125.gif",alt:"Cart Page Exit Intent.gif"})))}m.isMDXComponent=!0}}]);