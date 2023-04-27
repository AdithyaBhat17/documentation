"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[81810],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,g=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={sidebar_label:"User segments overview",title:"User segments overview"},c=void 0,p={unversionedId:"platform_concepts/engagement/cdp/user_data_segments/segments_overview",id:"platform_concepts/engagement/cdp/user_data_segments/segments_overview",title:"User segments overview",description:"A user segment is grouping of users based on some common characteristics. You need to define a condition on what basis you want to group your users. Segments are dynamic. Hence, according to the condition set, customers will be added to the segment automatically whenever user updates to match those conditions.",source:"@site/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview.md",sourceDirName:"platform_concepts/engagement/cdp/user_data_segments",slug:"/platform_concepts/engagement/cdp/user_data_segments/segments_overview",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"User segments overview",title:"User segments overview"},sidebar:"platform_concepts",previous:{title:"Manage user data",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data"},next:{title:"User segment",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment"}},u={},l=[{value:"Sample use cases",id:"sample-use-cases",level:2}],m={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A user segment is grouping of users based on some common characteristics. You need to define a condition on what basis you want to group your users. Segments are dynamic. Hence, according to the condition set, customers will be added to the segment automatically whenever user updates to match those conditions."),(0,o.kt)("p",null,"For example, users interested in a particular use case, users who have visited your pricing page, users in a particular department, users whose renewal data is nearing, etc."),(0,o.kt)("p",null,"It is recommended to create segments for different conditions on basis which you want to target them. For example, users interested in a particular use case, users who have visited your pricing page, users in a particular department, users whose renewal data is nearing, etc."),(0,o.kt)("p",null,"It is recommended to segment all your user base so that you can filter and send messages to your preferred user  groups, so you can send them targeted messages. For example, you could create a segment of trial users and send them onboarding messages."),(0,o.kt)("h2",{id:"sample-use-cases"},"Sample use cases"),(0,o.kt)("p",null,"The segments you create should be specific to your use case. Here are some ideas to get you started:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Create segment specific workflows"),": In bot conversations, you might want to show a specific to the right set of users."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For example, when talking about the pricing plan, you might want to share different plans with different set of users. For example, this set of users could be defined on the basis of their country."),(0,o.kt)("p",{parentName:"blockquote"},"This is where the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-if--condition"},"Condition Node")," comes in handy.")),(0,o.kt)("p",{parentName:"li"},"   ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/h75l167.png",alt:null}),"\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Customers nearing subscription expiry"),": These are customers whose subscription expiry date is nearing. You can send out reminders to this group to renew their subscription. "),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Sample filter setting:  Subscription End Date will be exactly 6 days later."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Employees in a certain department"),": You might want to send out communication related to a training activity to junior employees from a certain department. "),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},'Sample filter setting: Department is "Product" or "Engineering" AND Title ',(0,o.kt)("strong",{parentName:"p"},"includes"),' "Junior" or "Associate".'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Visitors who have opted in to receive updates on email"),": Create a group of users to whom you want to regularly share content with, over email. "),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Sample filter setting: Email Subscription is true."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Potential leads"),": Create a segment of users who have visited your pricing page more than twice. Give them a little nudge and incentivise them with an offer or set up a demo with your sales team. "),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Sample filter setting: Pricing Page visited more than twice."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Exclude users who opted out from campaigns"),": You might often want to exclude users who have opted out from all your campaigns. For this:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First ensure that your opt-in data is up to date. This can be regularly updated through  ",(0,o.kt)("a",{parentName:"p",href:"/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder"},"conversational data"),", by uploading fresh data through  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/import_users"},"CSV"),", or by using  ",(0,o.kt)("a",{parentName:"p",href:"/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api"},"REST APIs"),"  to sync with your CRM.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Next, you can include a condition in your  ",(0,o.kt)("a",{parentName:"p",href:"/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview"},"segment"),"  where, \u201cOpt-in is true\u201d. This segment will exclude all users for whom the opt-in is either false or unknown."))),(0,o.kt)("center",null,(0,o.kt)("img",{src:"https://i.imgur.com/xr4X98S.png",width:"60%"})))}d.isMDXComponent=!0}}]);