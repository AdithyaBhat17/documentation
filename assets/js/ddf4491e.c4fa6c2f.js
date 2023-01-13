"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6604],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,g=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},99660:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),l=["components"],s={sidebar_label:"User properties",title:"User properties"},i=void 0,p={unversionedId:"platform_concepts/engagement/cdp/user_data/user_properties",id:"platform_concepts/engagement/cdp/user_data/user_properties",title:"User properties",description:"1. User properties overview",source:"@site/docs/platform_concepts/engagement/cdp/user_data/user_properties.md",sourceDirName:"platform_concepts/engagement/cdp/user_data",slug:"/platform_concepts/engagement/cdp/user_data/user_properties",permalink:"/docs/platform_concepts/engagement/cdp/user_data/user_properties",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"User properties",title:"User properties"},sidebar:"platform_concepts",previous:{title:"Add users",permalink:"/docs/platform_concepts/engagement/cdp/user_data/add_user_overview"},next:{title:"Manage users",permalink:"/docs/platform_concepts/engagement/cdp/user_data/add_users"}},u={},d=[{value:"1. User properties overview",id:"1-user-properties-overview",level:2},{value:"1.1 System user properties",id:"11-system-user-properties",level:3},{value:"1.3 User ID (userId) as a property",id:"13-user-id-userid-as-a-property",level:3},{value:"1.5 Tag as a user property",id:"15-tag-as-a-user-property",level:3},{value:"2. Manage user properties",id:"2-manage-user-properties",level:2},{value:"2.1 Add user property",id:"21-add-user-property",level:3},{value:"2.2 Create custom user property",id:"22-create-custom-user-property",level:3},{value:"2.3 Order user properties",id:"23-order-user-properties",level:3},{value:"3. Create prsonalised conversations with user properties",id:"3-create-prsonalised-conversations-with-user-properties",level:2}],m={toc:d};function c(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1-user-properties-overview"},"1. User properties overview"),(0,o.kt)("p",null,"Properties are individual fields to be captured for a customer. For example, name, phone number, gender, email address and more. There are several predefined fields that you can use to capture a user's data. You can also create custom properties if required."),(0,o.kt)("p",null,"A customer is identified with a unique identifier ",(0,o.kt)("inlineCode",{parentName:"p"},"userId"),". This can be any unique identifier such as mobile number, email adress, or any other identifier. However, you can set only one property for the ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," for your org."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is enabled only for ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.yellow.ai"},"https://cloud.yellow.ai"))),(0,o.kt)("p",null,"We store three types of data about your users:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"System user properties (a default set of data that we capture about your users)."),(0,o.kt)("li",{parentName:"ol"},"Custom user properties (data you send us about your users)."),(0,o.kt)("li",{parentName:"ol"},"Events (data that records specific activities of users).")),(0,o.kt)("h3",{id:"11-system-user-properties"},"1.1 System user properties"),(0,o.kt)("p",null,"The following properties are enabled by default. You can see these in User 360."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Property Name")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Data Type")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"userId"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Unique identifier for a user NOTE: This can be passed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"firstName"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The first name of the user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lastName"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Last name of the user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"gender"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Gender of the user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"country"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Identifies based on the location of the user\u2019s IP address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"city"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Identifies based on the location of the user\u2019s IP address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ip"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Fetches from the user\u2019s browser")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"latitude"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"Identifies from the location of the user\u2019s IP address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"longitude"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"Identifies from the location of the user\u2019s IP address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"language"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Preferred language of the user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"timezone"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Identifies based on the location of user's IP address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"email"),(0,o.kt)("td",{parentName:"tr",align:null},"email"),(0,o.kt)("td",{parentName:"tr",align:null},"Email address of the user")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"phone"),(0,o.kt)("td",{parentName:"tr",align:null},"phone"),(0,o.kt)("td",{parentName:"tr",align:null},"Phone number of the user with country code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lastChannel"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Recent channel (set up on yellow.ai) where the user had an active session ",(0,o.kt)("br",null),"You can update this property to cover touch-points/channels outside yellow.ai.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dob"),(0,o.kt)("td",{parentName:"tr",align:null},"date"),(0,o.kt)("td",{parentName:"tr",align:null},"Date of birth of the user.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"lastSession"),(0,o.kt)("td",{parentName:"tr",align:null},"dateTime"),(0,o.kt)("td",{parentName:"tr",align:null},"timestamp of the last time the user had an active session on one of the channels set up on yellow.ai NOTE: You can update this property to cover touch-points/channels outside yellow.ai")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"emailOptin"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Subscription status of the user to emails. The value is ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," if a user has subscribed to your emails, else it is ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"smsOptin"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Subscription status of the user to SMS. The value is ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," if a user has subscribed to your SMS, else it is ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"whatsAppOptin"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"WhatsApp subscription status of the user. This is ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," if a user has subscribed to your WhatsApp messages, else it is ",(0,o.kt)("inlineCode",{parentName:"td"},"false"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"createdAt"),(0,o.kt)("td",{parentName:"tr",align:null},"dateTime"),(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp of when the user record was created")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"updatedAt"),(0,o.kt)("td",{parentName:"tr",align:null},"dateTime"),(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp of when the user record was recently updated")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"tags"),(0,o.kt)("td",{parentName:"tr",align:null},"list"),(0,o.kt)("td",{parentName:"tr",align:null},"List of groups associated to the user. You can add tags to users manually.")))),(0,o.kt)("h3",{id:"13-user-id-userid-as-a-property"},"1.3 User ID (userId) as a property"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"userId")," is a unique property in the users schema. It is used as a unique identifier for every user."),(0,o.kt)("p",null,"You may want to set a userId (a unique user identifier) for every user you create, to be able to recognise them as the same user on multiple touch-points. When the userId is the same as email, you might want to pass it both as userId and email. "),(0,o.kt)("p",null,"Passing the userId for your users will allow you to identify them on multiple touch-points, which will further allow you to:"),(0,o.kt)("img",{src:"https://i.imgur.com/aWczHLm.png"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Offer personalised engagement across multiple touch-points/channels"),(0,o.kt)("li",{parentName:"ul"},"Enrich the profile of that user with the data collected from multiple touch-points/channels")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"userId")," can be set through the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/#3-using-builder-to-create--update-user-records-in-users-table"},"Data collection")," nodes in builder"),(0,o.kt)("li",{parentName:"ul"},"While ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data/#add--edit-users"},"adding or editing")," a single user through UI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv/#using-the-userid-column-to-identify-users"},"userId column"),", while importing users from a CSV"),(0,o.kt)("li",{parentName:"ul"},"Create and Edit User ",(0,o.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api/"},"REST APIs"))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"No two users can have the same userId")),(0,o.kt)("p",null,"You can customise the fields or information that you want to capture for your users and set the order in which you want the fields to appear on the UI."),(0,o.kt)("h3",{id:"15-tag-as-a-user-property"},"1.5 Tag as a user property"),(0,o.kt)("p",null,"A tag is a label used to categorise users based on certain characteristics or attributes. These labels can be used to segment customers into different groups for targeted marketing, sales, or customer service efforts. Some examples of customer labels include High-value, New customer, Inactive, or campaign responders."),(0,o.kt)("p",null,"A user can have more than one tag."),(0,o.kt)("h2",{id:"2-manage-user-properties"},"2. Manage user properties"),(0,o.kt)("p",null,"You can add the System properties that you want to capture for your users. If required, you can also create your own property (custom property) that you want to capture."),(0,o.kt)("h3",{id:"21-add-user-property"},"2.1 Add user property"),(0,o.kt)("p",null,"To section explains how you can add a system property\nTo add an existing user property to your User 360 module, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"User 360")," page, click ",(0,o.kt)("strong",{parentName:"li"},"User properties"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/BOUV1hq.png",alt:null})),(0,o.kt)("p",null,"In the left panel, you can see the user schema, which includes all the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview#22-system-user-properties"},"system")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview#23-custom-user-properties"},"custom properties")," along with their data types. "),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the property that you want to include. You can see all the selected properties on the right. "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/O5nuQaz.png",alt:null})))),(0,o.kt)("h3",{id:"22-create-custom-user-property"},"2.2 Create custom user property"),(0,o.kt)("p",null,"Custom properties store additional information specific to your users. For example, you might want to store details such as the number of times they have visited your pricing page, what their department is, and their preferred product."),(0,o.kt)("p",null,"To create new user properties with your preferred label name and datatype, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"User 360")," page, click ",(0,o.kt)("strong",{parentName:"p"},"User properties"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/BOUV1hq.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Property name"),", enter a name for the property. "),(0,o.kt)("img",{src:"https://i.imgur.com/KrGzGpD.png",width:"60%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Property type"),", choose the data type of the property."))),(0,o.kt)("p",null,"The table lists the different datatypes supported for user properties."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Data Type")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores String data")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores positive or negative integer, or a decimal number")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"time"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores time in hh:mm:ss format")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"date"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores date in YYYY-MM-DD format")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"datetime"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores date and time in YYYY-MM-DD hh:mm:ss format")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"list"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores an array of String values")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores true or false")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"phone"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores phone numbers with country code and validates the format by checking country code and number of digits")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"url"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores URL and validates the format for the same")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"email"),(0,o.kt)("td",{parentName:"tr",align:null},"Stores email and validates the format for the same")))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To add more properties, click ",(0,o.kt)("strong",{parentName:"p"},"New property"),"."),(0,o.kt)("img",{src:"https://i.imgur.com/vB9DKVX.png",width:"60%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Currently, you cannot modify or delete a custom property once created.")),(0,o.kt)("h3",{id:"23-order-user-properties"},"2.3 Order user properties"),(0,o.kt)("p",null,"You can set the order in which user properties has to appear on the interface."),(0,o.kt)("p",null,"To set the order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the ",(0,o.kt)("strong",{parentName:"p"},"User 360")," page, click ",(0,o.kt)("strong",{parentName:"p"},"User properties"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/BOUV1hq.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the right pane, drag a property to the required position."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Eyk5uce.gif",alt:null})))),(0,o.kt)("h2",{id:"3-create-prsonalised-conversations-with-user-properties"},"3. Create prsonalised conversations with user properties"),(0,o.kt)("p",null,"If you\u2019ve built a bot on yellow.ai, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview"},"Conversational Studio")," to create hyper-personalised conversations based on user properties."),(0,o.kt)("p",null,"While these user properties are accessible in all the nodes of Studio, we\u2019ll cover some of them with-in this document, to show you how you can create the right conversion for the right set of users."),(0,o.kt)("p",null,"First you might want to read ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data"},"Using Builder to capture user data through conversations"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All user properties are accessible in nodes under \u201cUser properties\u201d.")),(0,o.kt)("p",null,"You can improve the engagement rates by creating personalised content. To do this, in your ",(0,o.kt)("strong",{parentName:"p"},"Message Nodes"),", you can can access user properties by clicking on the variable dropdown and selecting any ",(0,o.kt)("strong",{parentName:"p"},"User Property"),", or my simply accessing it using {{user.",(0,o.kt)("strong",{parentName:"p"},"propertyName"),"}}."),(0,o.kt)("img",{src:"https://i.imgur.com/Mebonpy.png",alt:"drawing",width:"60%"}))}c.isMDXComponent=!0}}]);