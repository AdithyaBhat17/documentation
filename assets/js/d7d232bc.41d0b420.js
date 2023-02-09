"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[7265],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,k=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?o.createElement(k,l(l({ref:t},p),{},{components:n})):o.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},23071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"Facebook Workplace",sidebar_label:"Facebook Workplace"},c=void 0,s={unversionedId:"platform_concepts/channelConfiguration/fb-workplace",id:"platform_concepts/channelConfiguration/fb-workplace",title:"Facebook Workplace",description:"On Workplace, bots are represented as pages. A page is automatically created when you create a custom integration app. Only System Administrators of a Workplace community can create apps and generate access tokens in that community.",source:"@site/docs/platform_concepts/channelConfiguration/fb-workplace.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/fb-workplace",permalink:"/docs/platform_concepts/channelConfiguration/fb-workplace",draft:!1,tags:[],version:"current",frontMatter:{title:"Facebook Workplace",sidebar_label:"Facebook Workplace"},sidebar:"platform_concepts",previous:{title:"FB Lead Ads",permalink:"/docs/platform_concepts/channelConfiguration/fb-lead-ads"},next:{title:"Generic Channel Integration",permalink:"/docs/platform_concepts/channelConfiguration/generic-webhook"}},p={},u=[{value:"Overall Workflow",id:"overall-workflow",level:2},{value:"Creating Custom Integrations",id:"creating-custom-integrations",level:2},{value:"General List of permissions required",id:"general-list-of-permissions-required",level:2},{value:"Configuring workplace as a channel in the Portal",id:"configuring-workplace-as-a-channel-in-the-portal",level:2},{value:"Documentations References",id:"documentations-references",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On Workplace, bots are represented as pages. A page is automatically created when you create a custom integration app. Only System Administrators of a Workplace community can create apps and generate access tokens in that community."),(0,a.kt)("h2",{id:"overall-workflow"},"Overall Workflow"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Each YM Bot is considered as a custom integration for the workplace (page). "),(0,a.kt)("li",{parentName:"ol"},"The workplace custom integration interacts with the YM Bot through webhooks which can be configured from within the workplace settings."),(0,a.kt)("li",{parentName:"ol"},"The YM Bot consumes workplace APIs to send messages across. ")),(0,a.kt)("h2",{id:"creating-custom-integrations"},"Creating Custom Integrations"),(0,a.kt)("p",null,"You will be needing a Super Administrator role.\nTo create an app for Workplace, follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Admin Panel, open the Integrations tab."),(0,a.kt)("li",{parentName:"ol"},"Click on the Create Custom Integration button.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/SfBlkFwlUjXn1612757417910.png",alt:null})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Choose a relevant name and description for the app."),(0,a.kt)("li",{parentName:"ol"},"Add a profile picture for the app. This will be used any time the app is visually represented, for instance if it makes a post to a group."),(0,a.kt)("li",{parentName:"ol"},"Choose the required permissions for the app, based on the integration functionality you require."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Create Access Token")," once you are landed to the Integration details page")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/3JEzEJQmYnte1612757515594.png",alt:null})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Copy and safely store the access token that is shown to you. You will need this when making API calls and configuring in the YM Portal.")),(0,a.kt)("h2",{id:"general-list-of-permissions-required"},"General List of permissions required"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Message any member")," - ",(0,a.kt)("em",{parentName:"p"},"This permission is used to send a message to any member in the workplace team."),"\n",(0,a.kt)("strong",{parentName:"p"},"Real all messages")," - ",(0,a.kt)("em",{parentName:"p"},"See messages sent to anyone in the workplace team.")),(0,a.kt)("h2",{id:"configuring-workplace-as-a-channel-in-the-portal"},"Configuring workplace as a channel in the Portal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the portal, go to Configuration and then select Channels."),(0,a.kt)("li",{parentName:"ol"},"Now select Facebook workplace form the list of channels, there paste the App ID from the workplace integration page, and the access token which was generated earlier, and click on connect.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/W14rzpSfqCPY1612757606237.png",alt:null})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Now, post successful connection, copy the Webhook configuration, both callback URL and the verify token and paste under the \u201cPage\u201d tab of the \u201cConfigure Webhooks\u201d section in the workplace integrations page. ")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/v014KVvMnf9h1612757653829.png",alt:null})),(0,a.kt)("p",null,"Making sure that all the checkboxes are selected under the Page tab, click on save.\nNow the created workplace integration is successfully configured with the YM Bot as a channel, and all the messages can be exchanged between."),(0,a.kt)("h3",{id:"documentations-references"},"Documentations References"),(0,a.kt)("p",null,"Permission Reference : ",(0,a.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/workplace/reference/permissions"},"Permission Documents"),"\nFor official documentation : ",(0,a.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/workplace/integrations/custom-integrations/bots/"},"read more")))}f.isMDXComponent=!0}}]);