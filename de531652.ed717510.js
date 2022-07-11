(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{350:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(385)),i=["components"],c={title:"Generic Webhook",sidebar_label:"Generic Channel Integration"},l={unversionedId:"platform_concepts/channelConfiguration/generic-webhook",id:"platform_concepts/channelConfiguration/generic-webhook",isDocsHomePage:!1,title:"Generic Webhook",description:"Below are the steps for integrating any Channel with Yellow Messenger Bots via Webhook.",source:"@site/docs/platform_concepts/channelConfiguration/generic-webhook.md",slug:"/platform_concepts/channelConfiguration/generic-webhook",permalink:"/docs/platform_concepts/channelConfiguration/generic-webhook",version:"current",sidebar_label:"Generic Channel Integration",sidebar:"platform_concepts",previous:{title:"Flutter Chatbot SDK",permalink:"/docs/platform_concepts/channelConfiguration/flutter"},next:{title:"Google Assistant",permalink:"/docs/platform_concepts/channelConfiguration/google-assistant"}},s=[{value:"Instructions",id:"instructions",children:[{value:"Steps for Integrations :",id:"steps-for-integrations-",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Below are the steps for integrating any Channel with Yellow Messenger Bots via Webhook."),Object(a.b)("h2",{id:"instructions"},"Instructions"),Object(a.b)("h3",{id:"steps-for-integrations-"},"Steps for Integrations :"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Steps for setting the route for Webhook in Controller.\na. In the Webhook send the channel access token as a param.\nb. Check the message signature if the channel support that (Optional).\nc. Check if the reply is to be send in the same response (Async or Sync Calls).")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Open the Messaging API for the channel and figure out the message types you can support .")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Write the Routes for the different message types in the Controller.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"When you will get a event in the webhook route you will get a token which will be used for the sending the reply so store it in the message data.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Do the necessary changes for the different message types in executor for the sending the reply back(In the message object store the channel access token and reply token(It can sender id or reply token or something else)).")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Test all the message types supported before pushing the changes.  ")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"For quick Replies and Cards  check the number of actions or cards limit and send the reply accordingly."))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Message Types to Check")),Object(a.b)("ol",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ol"},"Text Message"),Object(a.b)("li",{parentName:"ol"},"Image Message "),Object(a.b)("li",{parentName:"ol"},"Video Message"),Object(a.b)("li",{parentName:"ol"},"Audio Message"),Object(a.b)("li",{parentName:"ol"},"Cards(Carousel) Message "),Object(a.b)("li",{parentName:"ol"},"Quick Replies"),Object(a.b)("li",{parentName:"ol"},"WebView (Only supported in Yellow Messenger)"))))}b.isMDXComponent=!0},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),f=r,h=b["".concat(i,".").concat(f)]||b[f]||u[f]||a;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);