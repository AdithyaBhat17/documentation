"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[79],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(a),f=r,g=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8978:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],p={title:"Integrate Yellow with CleverTap",sidebar_label:"CleverTap"},l=void 0,c={unversionedId:"platform_concepts/appConfiguration/clevertap",id:"platform_concepts/appConfiguration/clevertap",title:"Integrate Yellow with CleverTap",description:"The CleverTap integration allows you to create templates on Yellow.ai and run campaigns for your user base directly on CleverTap.",source:"@site/docs/platform_concepts/appConfiguration/clevertap.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/clevertap",permalink:"/docs/platform_concepts/appConfiguration/clevertap",draft:!1,tags:[],version:"current",frontMatter:{title:"Integrate Yellow with CleverTap",sidebar_label:"CleverTap"},sidebar:"platform_concepts",previous:{title:"Cashfree Payment",permalink:"/docs/platform_concepts/appConfiguration/cashfree"},next:{title:"Custom Live Agent",permalink:"/docs/platform_concepts/appConfiguration/customliveagent"}},s={},m=[{value:"1. Integration process",id:"1-integration-process",level:2},{value:"2. Limitations",id:"2-limitations",level:2}],u={toc:m};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The CleverTap integration allows you to create templates on Yellow.ai and run campaigns for your user base directly on CleverTap."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Contact your account administrator from CleverTap to configure the integration on CleverTap's end.")),(0,o.kt)("h2",{id:"1-integration-process"},"1. Integration process"),(0,o.kt)("p",null,"To integrate Yellow.ai with CleverTap, follow these steps - "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("strong",{parentName:"p"},"Integrations")," and search for CleverTap under ",(0,o.kt)("strong",{parentName:"p"},"All integrations"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/kUvNRVp.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate and copy the API key and paste it with in the Authorization header over on CleverTap. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable Postback URL from Preferences in Engage. To know how to enable this from Preferences, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine/#postback-webhook--url"},"Notification Engine"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the callback URL generated by CleverTap in the fields shown on the integrations page."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/eqNJf36.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Register ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai/integrations/genericIntegration/clevertap"},"https://cloud.yellow.ai/integrations/genericIntegration/clevertap")," as a static URL on the CleverTap dashboard to trigger Yellow.ai campaigns. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate regular templates through the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/overview"},"Template creation module")," and use those template names directly in CleverTap.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To dynamically change text within a template, you can make use of ",(0,o.kt)("strong",{parentName:"p"},"Freeform templates"),". These will help you to pass dynamic text on CleverTap. For this, you need to generate two separate templates."),(0,o.kt)("p",{parentName:"li"},"i. ",(0,o.kt)("strong",{parentName:"p"},"Freeform text template"),": This is a template with just a variable ",(0,o.kt)("inlineCode",{parentName:"p"},"{{1}}"),". Once approved, you can pass the template as a field within the Integrations page.\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/3TVLSl6.png",alt:null})),(0,o.kt)("p",{parentName:"li"},"ii. ",(0,o.kt)("strong",{parentName:"p"},"Freeform media template"),": This follows the same behaviour of the text template but with a media file attached at the time of approval. You can change the media dynamically changed over on CleverTap. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/E0kCb5K.jpg",alt:null})))),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the templates are approved, pass both of these template names into the integration page fields."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/4KzE6d1.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Connect"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/4KzE6d1.png",alt:null})))),(0,o.kt)("h2",{id:"2-limitations"},"2. Limitations"),(0,o.kt)("p",null,"The CleverTap integration does not support the following: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The text in a header cannot be dynamically changed."),(0,o.kt)("li",{parentName:"ol"},"Media formats supported within the header are png, jpg and mp4."),(0,o.kt)("li",{parentName:"ol"},"Error codes in callbacks from the WA server."),(0,o.kt)("li",{parentName:"ol"},"Dynamic quick replies.")))}f.isMDXComponent=!0}}]);