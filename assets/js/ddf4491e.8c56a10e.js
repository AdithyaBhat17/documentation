"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6604],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99660:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={sidebar_label:"User properties",title:"User properties"},p=void 0,l={unversionedId:"platform_concepts/engagement/cdp/user_data/user_properties",id:"platform_concepts/engagement/cdp/user_data/user_properties",title:"User properties",description:"Properties are individual fields to be captured for a customer. For example, name, phone number, gender, email address and more. There are several predefined fields that you can use to capture a user's data. You can also create custom properties if required.",source:"@site/docs/platform_concepts/engagement/cdp/user_data/user_properties.md",sourceDirName:"platform_concepts/engagement/cdp/user_data",slug:"/platform_concepts/engagement/cdp/user_data/user_properties",permalink:"/docs/platform_concepts/engagement/cdp/user_data/user_properties",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"User properties",title:"User properties"},sidebar:"platform_concepts",previous:{title:"Migrate data to User 360",permalink:"/docs/platform_concepts/engagement/cdp/user360forbotsbefore01-06022"},next:{title:"Manage users",permalink:"/docs/platform_concepts/engagement/cdp/user_data/add_users"}},u={},c=[{value:"1. User ID",id:"1-user-id",level:2},{value:"2. Add user properties",id:"2-add-user-properties",level:2},{value:"3. Create prsonalised conversations with user properties",id:"3-create-prsonalised-conversations-with-user-properties",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Properties are individual fields to be captured for a customer. For example, name, phone number, gender, email address and more. There are several predefined fields that you can use to capture a user's data. You can also create custom properties if required."),(0,o.kt)("p",null,"A customer is identified with a unique identifier ",(0,o.kt)("inlineCode",{parentName:"p"},"userId"),". This can be any unique identifier such as mobile number, email adress, or any other identifier. However, you can set only one property for the ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," for your org."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is enabled only for ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai"},"https://cloud.yellow.ai"))),(0,o.kt)("h2",{id:"1-user-id"},"1. User ID"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"userId")," is a unique property in the users schema. It is used as a unique identifier for every user."),(0,o.kt)("p",null,"You may want to set a userId (a unique user identifier) for every user you create, to be able to recognise them as the same user on multiple touch-points. When the userId is the same as email, you might want to pass it both as userId and email. "),(0,o.kt)("p",null,"Passing the userId for your users will allow you to identify them on multiple touch-points, which will further allow you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Offer personalised engagement across multiple touch-points/channels"),(0,o.kt)("li",{parentName:"ul"},"Enrich the profile of that user with the data collected from multiple touch-points/channels")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"userId")," can be set through the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/#3-using-builder-to-create--update-user-records-in-users-table"},"Data collection")," nodes in builder"),(0,o.kt)("li",{parentName:"ul"},"While ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data/#add--edit-users"},"adding or editing")," a single user through UI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv/#using-the-userid-column-to-identify-users"},"userId column"),", while importing users from a CSV"),(0,o.kt)("li",{parentName:"ul"},"Create and Edit User ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api/"},"REST APIs"))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"No two users can have the same userId")),(0,o.kt)("p",null,"You can customise the fields or information that you want to capture for your users and set the order in which you want the fields to appear on the UI."),(0,o.kt)("h2",{id:"2-add-user-properties"},"2. Add user properties"),(0,o.kt)("p",null,"To manage user properties, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"User 360")," page, click ",(0,o.kt)("strong",{parentName:"li"},"User properties"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/BOUV1hq.png",alt:null})),(0,o.kt)("p",null,"In the left panel, you can see the user schema, which includes all the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview#22-system-user-properties"},"system")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview#23-custom-user-properties"},"custom properties")," along with their data types. "),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the property that you want to include. You can see all the selected properties on the right. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/O5nuQaz.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To create a new custom property, cick ",(0,o.kt)("strong",{parentName:"p"},"Add property"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Enter a name for the property > Choose the data type > Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/T9mEJaM.png",alt:null})),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/xwdOtpt.png",alt:null})),(0,o.kt)("p",{parentName:"li"},"To add more properties, click ",(0,o.kt)("strong",{parentName:"p"},"New property"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/O5nuQaz.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To order user properties, in the selected properties section, drag a property to the required position."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Eyk5uce.gif",alt:null})))),(0,o.kt)("p",null,"   ",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/xwdOtpt.png",alt:null})),(0,o.kt)("h2",{id:"3-create-prsonalised-conversations-with-user-properties"},"3. Create prsonalised conversations with user properties"),(0,o.kt)("p",null,"If you\u2019ve built a bot on yellow.ai, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview"},"Conversational Studio")," to create hyper-personalised conversations based on user properties."),(0,o.kt)("p",null,"While these user properties are accessible in all the nodes of Studio, we\u2019ll cover some of them with-in this document, to show you how you can create the right conversion for the right set of users."),(0,o.kt)("p",null,"First you might want to read ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data"},"Using Builder to capture user data through conversations"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All user properties are accessible in nodes under \u201cUser properties\u201d.")),(0,o.kt)("p",null,"You can improve the engagement rates by creating personalised content. To do this, in your ",(0,o.kt)("strong",{parentName:"p"},"Message Nodes"),", you can can access user properties by clicking on the variable dropdown and selecting any ",(0,o.kt)("strong",{parentName:"p"},"User Property"),", or my simply accessing it using {{user.",(0,o.kt)("strong",{parentName:"p"},"propertyName"),"}}."),(0,o.kt)("img",{src:"https://i.imgur.com/Mebonpy.png",alt:"drawing",width:"60%"}))}m.isMDXComponent=!0}}]);