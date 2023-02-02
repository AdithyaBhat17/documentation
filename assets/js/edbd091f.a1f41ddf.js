"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6781],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(r),m=o,h=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[l]="string"==typeof e?e:o,s[1]=p;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8908:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],p={sidebar_label:"Capture user data through conversations",title:"Capture data through Studio & create personalised conversations"},i=void 0,u={unversionedId:"platform_concepts/engagement/cdp/user_data/conv_in_builder",id:"platform_concepts/engagement/cdp/user_data/conv_in_builder",title:"Capture data through Studio & create personalised conversations",description:"In a bot conversation, every bot session is mapped to a record in User 360. When building a bot using Studio, you can use Prompt nodes to capture User properties and store it in the database.",source:"@site/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder.md",sourceDirName:"platform_concepts/engagement/cdp/user_data",slug:"/platform_concepts/engagement/cdp/user_data/conv_in_builder",permalink:"/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Capture user data through conversations",title:"Capture data through Studio & create personalised conversations"},sidebar:"platform_concepts",previous:{title:"Import users",permalink:"/docs/platform_concepts/engagement/cdp/user_data/import_users"},next:{title:"Add user data through APIs",permalink:"/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api"}},c={},l=[{value:"Capture <code>userId</code> through conversations",id:"capture-userid-through-conversations",level:2},{value:"Capture user properties through conversations",id:"capture-user-properties-through-conversations",level:2},{value:"Fetch user properties through conversations",id:"fetch-user-properties-through-conversations",level:2}],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In a bot conversation, every bot session is mapped to a record in User 360. When building a bot using ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview"},"Studio"),", you can use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"Prompt nodes")," to capture ",(0,a.kt)("a",{parentName:"p",href:"/docs/platform_concepts/engagement/cdp/user_data/user_properties"},"User properties")," and store it in the database. "),(0,a.kt)("p",null,"It can store responses of conversations that involve asking for user details such as name, email, phone number, location, or any system/custom user property in the relevant field. You can also enrich user data and create personalised conversations using ",(0,a.kt)("a",{parentName:"p",href:"/docs/platform_concepts/engagement/cdp/user_data/user_properties"},"User properties")," in Studio conversations. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You need to use the ",(0,a.kt)("strong",{parentName:"p"},"userId")," property to identify a user in a conversation.")),(0,a.kt)("h2",{id:"capture-userid-through-conversations"},"Capture ",(0,a.kt)("inlineCode",{parentName:"h2"},"userId")," through conversations"),(0,a.kt)("p",null,"To update ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," of customers through bot conversations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When building flows in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview"},"Studio"),", use the ",(0,a.kt)("strong",{parentName:"p"},"Prompt")," node or ",(0,a.kt)("em",{parentName:"p"},"Variables")," node. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Make prompt smarter")," and scroll-down to the ",(0,a.kt)("em",{parentName:"p"},"Additional section"),".  "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/t2p6uHD.png",alt:null}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check ",(0,a.kt)("strong",{parentName:"p"},"Use this as Unique ID for user"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/7TPjvkH.png",alt:null})))),(0,a.kt)("h2",{id:"capture-user-properties-through-conversations"},"Capture user properties through conversations"),(0,a.kt)("p",null,"The user record is updated in the database using the session mapping. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the bot Builder, use ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"Prompt")," or ",(0,a.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables/#412-variables--action-node"},"Variable")," nodes to capture user properties (such as name, email, phone number, location, or any system/custom user property) through conversations.")),(0,a.kt)("center",null,(0,a.kt)("img",{src:"https://i.imgur.com/p6DvR3D.png",width:"60%"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To extract data from a payload, use the ",(0,a.kt)("strong",{parentName:"p"},"Input")," node and store information in the relevant user property. For example, fetch user details from the user add event payload and store them in relevant user properties. "),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/0kX3iJT.png",alt:null})))),(0,a.kt)("center",null,(0,a.kt)("img",{src:"https://i.imgur.com/7ltkBj4.png",width:"40%"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The data captured through Studio conversations for ",(0,a.kt)("a",{parentName:"p",href:"/docs/platform_concepts/engagement/cdp/user_data/add_user_overview#11-user-types"},"Identified Users")," will be updated automatically in the Users table.")),(0,a.kt)("h2",{id:"fetch-user-properties-through-conversations"},"Fetch user properties through conversations"),(0,a.kt)("p",null,"You can fetch user properties in conversations using the ",(0,a.kt)("strong",{parentName:"p"},"Text")," node by clicking on the variable dropdown and selecting any User Property manually. Instead, you can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"{{{user.propertyName}}}"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/tFyoRXF.png",alt:null})),(0,a.kt)("p",null,"You can also use user properties to improve engagement rates by creating personalised content."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For example, Hi {{{variables.user_name}}}, you have unlocked an exclusive offer. Shop today and get flat 50% off. ")),(0,a.kt)("p",null,"The property value is fetched from the user record mapped to the current session."))}m.isMDXComponent=!0}}]);