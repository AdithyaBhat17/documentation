"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[1276],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return a?r.createElement(g,s(s({ref:t},u),{},{components:a})):r.createElement(g,s({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},45577:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),s=["components"],o={sidebar_label:"Manage user data",title:"Manage user data"},i=void 0,p={unversionedId:"platform_concepts/engagement/cdp/user_data_segments/manage_user_data",id:"platform_concepts/engagement/cdp/user_data_segments/manage_user_data",title:"Manage user data",description:"View user details",source:"@site/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data.md",sourceDirName:"platform_concepts/engagement/cdp/user_data_segments",slug:"/platform_concepts/engagement/cdp/user_data_segments/manage_user_data",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Manage user data",title:"Manage user data"},sidebar:"platform_concepts",previous:{title:"Add user data through APIs",permalink:"/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api"},next:{title:"Segments overview",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview"}},u={},m=[{value:"View user details",id:"view-user-details",level:2},{value:"Export user data",id:"export-user-data",level:2},{value:"Delete user details",id:"delete-user-details",level:2},{value:"Delete an individual user",id:"delete-an-individual-user",level:3},{value:"Delete multiple users",id:"delete-multiple-users",level:3},{value:"Delete user through API",id:"delete-user-through-api",level:3},{value:"View user activity logs",id:"view-user-activity-logs",level:2}],d={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"view-user-details"},"View user details"),(0,l.kt)("p",null,"User 360 lets you view the complete details of a user including user properties, tags, user events, and segments. You can use the Filter option to fetch users based on a certain condition, especially when the user base is large."),(0,l.kt)("p",null,"To see details of an existing user, follow these steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"On the User 360 home page, navigate to the user whose details you want to see."),(0,l.kt)("li",{parentName:"ol"},"If the user list is long, use ",(0,l.kt)("strong",{parentName:"li"},"Filters")," to show a specific set of records from the entire user base."),(0,l.kt)("li",{parentName:"ol"},"In Conditions, define the condition by which you want to filter users.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/Qkqryav.png",alt:null})),(0,l.kt)("p",null,"You can see three boxes that correspond to {parameter}{operator}{value}."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameter: The user property that you want to use to filter records (first box)."),(0,l.kt)("li",{parentName:"ul"},"Operator: The condition that you want to define. It contains ",(0,l.kt)("inlineCode",{parentName:"li"},"Is known"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Is not known"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Is"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Isn't"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Contains"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"Does not contain"),". These values might differ based on the parameter selected."),(0,l.kt)("li",{parentName:"ul"},"Value: The value of the expression. This might not apply to all operators. For example, firstName Is Tom, phone is known, and emailOptin is true.")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Use ",(0,l.kt)("strong",{parentName:"li"},"+")," to evaluate ",(0,l.kt)("inlineCode",{parentName:"li"},"or")," conditions. For example, the condition ",(0,l.kt)("inlineCode",{parentName:"li"},"firstname is tom")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"sam")," fetches users whose first name is either Tom or Sam.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/cLBmKxf.png",alt:null})),(0,l.kt)("li",{parentName:"ol"},"Use ",(0,l.kt)("strong",{parentName:"li"},"+ Add condition")," to evaluate multiple conditions (",(0,l.kt)("inlineCode",{parentName:"li"},"and"),"). For example, the condition ",(0,l.kt)("inlineCode",{parentName:"li"},"gender is Male")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"phone is known")," fetches all male users whose phone number is available in User 360.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/kgMgHkw.png",alt:null})),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Apply"),". You will see the filtered user list."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/Phz6GeH.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on the user that you want to see."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/DZwlscG.png",alt:null})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Profile"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows the user name, user ID, and the date when the record was created. You can also modify the user details using the ",(0,l.kt)("strong",{parentName:"td"},"Edit")," icon.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows the label(s) associated with the user. You can use ",(0,l.kt)("strong",{parentName:"td"},"+ Add tags")," to add more tags or remove existing tags.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Segments"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows all the segments associated with the user.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User properties"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows all the user property details. ",(0,l.kt)("br",null),"Use the Search box to fetch a specific user property.",(0,l.kt)("img",{parentName:"td",src:"https://i.imgur.com/EyVb1j2.png",alt:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User events"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows the break up of events triggered for the user. You can see details such as events triggered for each day, event name, a summary of changes, and complete details of the changes in the user record. ",(0,l.kt)("img",{parentName:"td",src:"https://i.imgur.com/ANSvIeb.png",alt:null}))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"export-user-data"},"Export user data"),(0,l.kt)("p",null," You can download your entire user data or segment specific user data and use it wherever required. For example, you can update user details and import them again, and upload user data in a third-party system for your business use cases."),(0,l.kt)("p",null,"To download your entire user base, in All users, click ",(0,l.kt)("strong",{parentName:"p"},"Actions")," > ",(0,l.kt)("strong",{parentName:"p"},"Download all user data"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/EPBeFUv.png",alt:null})),(0,l.kt)("p",null,"To download users in a particular segment, select the desired ",(0,l.kt)("strong",{parentName:"p"},"Segment")," > ",(0,l.kt)("strong",{parentName:"p"},"Actions")," > ",(0,l.kt)("strong",{parentName:"p"},"Download segment user data"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/0FIZgh7.png",alt:null})),(0,l.kt)("p",null,"You will get a download link to your email. Alternatively, you can download it from ",(0,l.kt)("strong",{parentName:"p"},"User logs")," > Apply Bulk user download filter > Click on ",(0,l.kt)("strong",{parentName:"p"},"Download log"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/jNPgPuq.png",alt:null})),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"delete-user-details"},"Delete user details"),(0,l.kt)("p",null,"You can delete one or more users if required. However, you need to ",(0,l.kt)("a",{parentName:"p",href:"#export-user-data"},"export their data")," as a backup before deleting."),(0,l.kt)("h3",{id:"delete-an-individual-user"},"Delete an individual user"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Navigate to the user row and click on it to open user details page."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/2jZYHX7.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Delete"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/r9s3ml1.png",alt:null})))),(0,l.kt)("h3",{id:"delete-multiple-users"},"Delete multiple users"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the User 360 home page, select each user that you want to delete using the respective check boxes ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Delete users"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/ggBwK4A.png",alt:null})))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You can also use this process to delete an individual user.")),(0,l.kt)("h3",{id:"delete-user-through-api"},"Delete user through API"),(0,l.kt)("p",null,"To delete user data using API, use ",(0,l.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/17583548/UVsEVUsg#73c5f32f-e6a5-4a3b-afbe-c17b7770d65b"},"DELETE user API"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"view-user-activity-logs"},"View user activity logs"),(0,l.kt)("p",null,"User logs is a space for your to audit your user data. There are 3 types of logs that User 360 supports:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CSV import"),": This log appears whenever you ",(0,l.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/cdp/user_data/import_users"},"import users using a CSV file"),". The associated ",(0,l.kt)("em",{parentName:"li"},"Download log")," link contains details about the import process, that is, which records were imported, merged, or failed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bulk users download"),":  This log appears whenever you ",(0,l.kt)("a",{parentName:"li",href:"#export-user-data"},"export your user data"),". Use the associated ",(0,l.kt)("em",{parentName:"li"},"Download log")," to download the exported user data in a CSV file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bulk user delete "),": This log appears whenever you ",(0,l.kt)("a",{parentName:"li",href:"#delete-user-data"},"delete your user data"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/s86psKQ.png",alt:null})))}c.isMDXComponent=!0}}]);