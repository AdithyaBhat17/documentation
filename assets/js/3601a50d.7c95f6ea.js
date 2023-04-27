"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[65431],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),g=r,d=u["".concat(o,".").concat(g)]||u[g]||c[g]||s;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<s;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},64912:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],i={sidebar_label:"User segment",title:"User segment"},o=void 0,m={unversionedId:"platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment",id:"platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment",title:"User segment",description:"1. Create user segment",source:"@site/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment.md",sourceDirName:"platform_concepts/engagement/cdp/user_data_segments",slug:"/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"User segment",title:"User segment"},sidebar:"platform_concepts",previous:{title:"User segments overview",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview"},next:{title:"Segment use cases",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/segment_usecases"}},p={},u=[{value:"1. Create user segment",id:"1-create-user-segment",level:2},{value:"2. View segment users",id:"2-view-segment-users",level:2},{value:"3. Edit user segment",id:"3-edit-user-segment",level:2},{value:"4. Download segment users",id:"4-download-segment-users",level:2},{value:"5. Archive user segment",id:"5-archive-user-segment",level:2},{value:"5.1 Auto-deleting of unused segments",id:"51-auto-deleting-of-unused-segments",level:3},{value:"5.2 Manually delete user segment",id:"52-manually-delete-user-segment",level:3}],c={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-create-user-segment"},"1. Create user segment"),(0,s.kt)("p",null,"To create a user segment, follow these steps:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Navigate to ",(0,s.kt)("strong",{parentName:"p"},"Engage")," > ",(0,s.kt)("strong",{parentName:"p"},"User 360"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Add Segment"),"."),(0,s.kt)("img",{src:"https://i.imgur.com/WmouIvi.png",width:"50%"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In ",(0,s.kt)("strong",{parentName:"p"},"Segment name"),", enter a unique name for the segment."),(0,s.kt)("img",{src:"https://i.imgur.com/6O2hgru.png",width:"60%"})),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In ",(0,s.kt)("strong",{parentName:"p"},"Conditions"),", define the condition basis which you want to create the group. A condition consists of the following pattern.\n{property} {operator} {value}"))),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Option"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"property"),(0,s.kt)("td",{parentName:"tr",align:null},"The attribute by which you want to create the segment. You can choose from a list of user properties such as first name, last name, city, language, and so on.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"operator"),(0,s.kt)("td",{parentName:"tr",align:null},"The condition operator that you want to use - is known, is not known, is, isn't, contains, does not contain.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"value"),(0,s.kt)("td",{parentName:"tr",align:null},"Value of the expression. Use + to add multiple values. For example, create users whose city is either Bangalore or Mummbai.",(0,s.kt)("img",{parentName:"td",src:"https://i.imgur.com/vdcl0je.png",alt:null}))))),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"To add more conditions, click ",(0,s.kt)("strong",{parentName:"p"},"Add condition"),"."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/PnSrqvJ.png",alt:null})))),(0,s.kt)("p",null,"To create more sophisticated segments you can ",(0,s.kt)("a",{parentName:"p",href:"/docs/platform_concepts/engagement/cdp/user_data_segments/segment_usecases#21-segments-with-multiple-conditions-andor"},"combine ",(0,s.kt)("inlineCode",{parentName:"a"},"and")," with ",(0,s.kt)("inlineCode",{parentName:"a"},"or")," conditions"),". This makes segments more powerful and flexible."),(0,s.kt)("p",null,"Once you create a segment, you can view users in the segment, modify segment condition, download users of the segment, or delete it as explained in the following sections."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"2-view-segment-users"},"2. View segment users"),(0,s.kt)("p",null,"To view users of a segment, on the User 360 page, click on the segment. "),(0,s.kt)("p",null,"If the list is long, use the ",(0,s.kt)("strong",{parentName:"p"},"Search")," box to fetch for a specific segment."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/bvS0ofr.png",alt:null})),(0,s.kt)("p",null,"You will see the list of users on the right."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/wrVY5eE.png",alt:null})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"3-edit-user-segment"},"3. Edit user segment"),(0,s.kt)("p",null,"To modify a segment's name or condition:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click on ",(0,s.kt)("strong",{parentName:"p"},"Actions")," > ",(0,s.kt)("strong",{parentName:"p"},"Edit segment"),"."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/du1KLbt.png",alt:null}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Edit the required details and ",(0,s.kt)("strong",{parentName:"p"},"Save")," it."))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"When the conditions of the segment are edited, the users that show up in the segment might change based on the new condition.")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"4-download-segment-users"},"4. Download segment users"),(0,s.kt)("p",null,"To download users of a segment:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Actions")," > ",(0,s.kt)("strong",{parentName:"p"},"Download segment user data"),"."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/tMtITgm.png",alt:null}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"You will get an email with the download link. Click on the link. The file downloads as a CSV file. "),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/mOqzgWm.png",alt:null})))),(0,s.kt)("p",null,"The file contains complete details of each user that is available in the database."),(0,s.kt)("p",null,"   ",(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/ECyBtOn.png",alt:null})),(0,s.kt)("p",null,"Alternatively, you can also download the user details using ",(0,s.kt)("strong",{parentName:"p"},"User logs")," > ",(0,s.kt)("strong",{parentName:"p"},"Download log"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/DJVTeUz.png",alt:null})),(0,s.kt)("img",{src:"https://i.imgur.com/WlV8OQD.png",width:"60%"}),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"5-archive-user-segment"},"5. Archive user segment"),(0,s.kt)("p",null,"Archiving a segment will not delete the user data associated with that segment. It  makes that particular segment unusable for new campaigns. Old campaigns will continue running as it is."),(0,s.kt)("h3",{id:"51-auto-deleting-of-unused-segments"},"5.1 Auto-deleting of unused segments"),(0,s.kt)("p",null,"User segments that are not used in the last 60 days will be deleted automatically. A user segment is considered used if there is an activity (listed below)."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Viewed the segment"),(0,s.kt)("li",{parentName:"ol"},"Used in a campaign"),(0,s.kt)("li",{parentName:"ol"},"Updated the segment")),(0,s.kt)("p",null,"When there is an activity, the ",(0,s.kt)("inlineCode",{parentName:"p"},"updatedAt")," column changes. A cron job runs every day to check if the column is not updated for any of the segments in the last 60 days and deletes it automatically."),(0,s.kt)("h3",{id:"52-manually-delete-user-segment"},"5.2 Manually delete user segment"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"To archive a segment, select the segment from the left panel, and click on ",(0,s.kt)("strong",{parentName:"p"},"Actions")," > ",(0,s.kt)("strong",{parentName:"p"},"Archive segment"),"."),(0,s.kt)("p",{parentName:"li"}," ",(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/ml1Gh8j.png",alt:null}))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"To view all archived segments, click on the ",(0,s.kt)("strong",{parentName:"p"},"Archived")," tab in the left panel."),(0,s.kt)("p",{parentName:"li"}," ",(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/huCOEOJ.png",alt:null})))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"To unarchive a segment, select any archived segment and click on ",(0,s.kt)("strong",{parentName:"p"},"Unarchive")," segment."),(0,s.kt)("p",{parentName:"li"}," ",(0,s.kt)("img",{parentName:"p",src:"https://i.imgur.com/OvBSbKU.png",alt:null})))))}g.isMDXComponent=!0}}]);