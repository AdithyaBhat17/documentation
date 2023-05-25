"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[78580],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(r),m=o,h=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18842:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"Add or update user properties from bot conversations",sidebar_label:"Add/update user properties from bot conversations"},p=void 0,u={unversionedId:"platform_concepts/engagement/cdp/user_data/store_conv_data",id:"platform_concepts/engagement/cdp/user_data/store_conv_data",title:"Add or update user properties from bot conversations",description:"\x3c!--",source:"@site/docs/platform_concepts/engagement/cdp/user_data/store_conv_data.md",sourceDirName:"platform_concepts/engagement/cdp/user_data",slug:"/platform_concepts/engagement/cdp/user_data/store_conv_data",permalink:"/docs/platform_concepts/engagement/cdp/user_data/store_conv_data",draft:!1,tags:[],version:"current",frontMatter:{title:"Add or update user properties from bot conversations",sidebar_label:"Add/update user properties from bot conversations"},sidebar:"platform_concepts",previous:{title:"User identification flow",permalink:"/docs/platform_concepts/engagement/cdp/user_data/userid-flow"},next:{title:"Personalise conversations with user properties",permalink:"/docs/platform_concepts/engagement/cdp/user_data/personalise_conversations"}},c={},l=[{value:"Store user properties from bot conversations",id:"store-user-properties-from-bot-conversations",level:2},{value:"Update user properties through bot conversations",id:"update-user-properties-through-bot-conversations",level:2},{value:"Automated capturing of location-specific user properties",id:"automated-capturing-of-location-specific-user-properties",level:2}],d={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"store-user-properties-from-bot-conversations"},"Store user properties from bot conversations"),(0,a.kt)("p",null,"In addition to the userId, you can also store other user properties in the user record. User properties are stored in the current record, which is mapped in User 360.\nYou can use these properties to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/personalise_conversations"},"create personalised conversations")," with bot users based on their previous interactions and preferences."),(0,a.kt)("p",null,"To store user details (such as name, email address, phone number, and any other relevant information) through the bot, use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"Prompt nodes")," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#22-variables"},"Variables node")," in the bot Builder."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"All user properties captured for a record will be mapped to the user as soon as the `userId' is captured during the session."))),(0,a.kt)("p",null,"To store the user\u2019s response in User 360, in ",(0,a.kt)("strong",{parentName:"p"},"Store Response in"),", choose variables only under ",(0,a.kt)("strong",{parentName:"p"},"User properties"),". If a specific user property is not avilable, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#custom-user-properties"},"create a custom property")," and use it."),(0,a.kt)("p",null,"   ",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/h8FfpZE.png",alt:null})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"update-user-properties-through-bot-conversations"},"Update user properties through bot conversations"),(0,a.kt)("p",null,"Once the user is identified, you can update the user properties (other than userId) using the Prompt or Vaiable nodes."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You cannot update user properties once captured. If the userId is captured again in a flow, it will map to the existing record if it already exists, or create a new userId if it does not exist. To know about user identification in Builder, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/data_capture_convers"},"How user records are created through conversations & unified in User 360"),".")),(0,a.kt)("p",null,"To update existing user properties:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Capture the user property that you want to update using the Variable node or Prompt node, as explained in ",(0,a.kt)("a",{parentName:"p",href:"#store-user-id-through-builder"},"Store userId through builder"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Store them in the respective User properties, as explained in ",(0,a.kt)("a",{parentName:"p",href:"#store-user-properties-through-builder"},"Store user properties through builder"),"."))),(0,a.kt)("p",null,"In Prompt nodes, choose the relevant name under User properties."),(0,a.kt)("center",null," ",(0,a.kt)("img",{src:"https://i.imgur.com/mFz74Ka.png",width:"60%"})),(0,a.kt)("p",null,"In the Variable node, choose the relevant user property or add it manually using the syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"{{user.propertyName}}")),(0,a.kt)("center",null," ",(0,a.kt)("img",{src:"https://i.imgur.com/1MvEa5O.png",width:"60%"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"automated-capturing-of-location-specific-user-properties"},"Automated capturing of location-specific user properties"),(0,a.kt)("p",null,"The following are the auto-captured details for Web and WhatsApp bots."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Channel"),(0,a.kt)("th",{parentName:"tr",align:null},"User properties captured"),(0,a.kt)("th",{parentName:"tr",align:null},"Additional details"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WhatsApp bot"),(0,a.kt)("td",{parentName:"tr",align:null},"Phone number, Country code"),(0,a.kt)("td",{parentName:"tr",align:null},"Captures ",(0,a.kt)("inlineCode",{parentName:"td"},"country")," using the country code in phone number. However, the system may not capture the user's name in all cases, as the user might not have provided it, or the name might contain numbers or special characters that fail validation for the ",(0,a.kt)("inlineCode",{parentName:"td"},"firstName")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"lastName")," properties.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Web bot"),(0,a.kt)("td",{parentName:"tr",align:null},"Timezone and country code"),(0,a.kt)("td",{parentName:"tr",align:null},"Uses IP address to capture these details.")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is currently supported for web, and WhatsApp bots.")))}m.isMDXComponent=!0}}]);