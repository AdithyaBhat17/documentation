(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),s=(n(0),n(450)),i=["components"],o={sidebar_label:"User segmentation",title:"User segmentation"},c={unversionedId:"platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment",id:"platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment",isDocsHomePage:!1,title:"User segmentation",description:"1. Introduction",source:"@site/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment.md",slug:"/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment",version:"current",sidebar_label:"User segmentation",sidebar:"platform_concepts",previous:{title:"User management",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data"},next:{title:"What is User ID and why you\u2019d want to use it?",permalink:"/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_id"}},l=[{value:"1. Introduction",id:"1-introduction",children:[]},{value:"2. Create a segment",id:"2-create-a-segment",children:[]},{value:"3. Manage segments",id:"3-manage-segments",children:[{value:"3.1 View segment users",id:"31-view-segment-users",children:[]},{value:"3.2 Edit segment",id:"32-edit-segment",children:[]},{value:"3.3 Download segment users",id:"33-download-segment-users",children:[]},{value:"3.4 Archive segment",id:"34-archive-segment",children:[]}]},{value:"Use case specific segments",id:"use-case-specific-segments",children:[{value:"Drip campaign",id:"drip-campaign",children:[]},{value:"Birthday Greetings",id:"birthday-greetings",children:[]},{value:"Exclude users who have opted out from campaigns",id:"exclude-users-who-have-opted-out-from-campaigns",children:[]}]}],p={toc:l};function m(e){var t=e.components,n=Object(r.a)(e,i);return Object(s.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"1-introduction"},"1. Introduction"),Object(s.b)("p",null,"A segment is grouping of users based on some common characteristics. You need to define a condition on what basis you want to group your users. Segments are dynamic. Hence, according to the condition set, customers will be added to the segment automatically whenever user updates to match those conditions."),Object(s.b)("p",null,"For example, users interested in a particular use case, users who have visited your pricing page, users in a particular department, users whose renewal data is nearing, etc."),Object(s.b)("p",null,"It is recommended to create segments for different conditions on basis which you want to target them. For example, users interested in a particular use case, users who have visited your pricing page, users in a particular department, users whose renewal data is nearing, etc."),Object(s.b)("p",null,"It is recommended to segment all your user base so that you can filter and send messages to your preferred user  groups, so you can send them targeted messages. For example, you could create a segment of trial users and send them onboarding messages."),Object(s.b)("h4",{id:"sample-use-cases"},"Sample use cases"),Object(s.b)("p",null,"The segments you create should be specific to your use case. Here are some ideas to get you started:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Customers nearing subscription expiry"),": These are customers whose subscription expiry date is nearing. You can send out reminders to this group to renew their subscription. "),Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},"Sample filter setting:  Subscription End Date will be exactly 6 days later."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Employees in a certain department"),": You might want to send out communication related to a training activity to junior employees from a certain department. "),Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},'Sample filter setting: Department is "Product" or "Engineering" AND Title ',Object(s.b)("strong",{parentName:"p"},"includes"),' "Junior" or "Associate".'))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Visitors who have opted in to receive updates on email"),": Create a group of users to whom you want to regularly share content with, over email. "),Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},"Sample filter setting: Email Subscription is true."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Potential leads"),": Create a segment of users who have visited your pricing page more than twice. Give them a little nudge and incentivise them with an offer or set up a demo with your sales team. "),Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},"Sample filter setting: Pricing Page visited more than twice."))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Exclude users who opted out from campaigns"),": You might often want to exclude users who have opted out from all your campaigns. For this:")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"First ensure that your opt-in data is up to date. This can be regularly updated through  ",Object(s.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/"},"conversational data"),", by uploading fresh data through  ",Object(s.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv"},"CSV"),", or by using  ",Object(s.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api/"},"REST APIs"),"  to sync with your CRM.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Next, you can include a condition in your  ",Object(s.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/targeted_segments/"},"segment"),"  where, \u201cOpt-in is true\u201d. This segment will exclude all users for whom the opt-in is either false or unknown."))),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/xr4X98S.png",alt:null})),Object(s.b)("h2",{id:"2-create-a-segment"},"2. Create a segment"),Object(s.b)("p",null,"To create a segment, follow these steps:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Navigate to ",Object(s.b)("strong",{parentName:"p"},"Engage")," > ",Object(s.b)("strong",{parentName:"p"},"User 360"),".")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Click ",Object(s.b)("strong",{parentName:"p"},"Add Segment"),"."),Object(s.b)("img",{src:"https://i.imgur.com/WmouIvi.png",width:"50%"})),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"In ",Object(s.b)("strong",{parentName:"p"},"Segment name"),", enter a unique name for the segment."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/6O2hgru.png",alt:null}))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"In ",Object(s.b)("strong",{parentName:"p"},"Conditions"),", define the condition basis which you want to create the group. A condition consists of the following pattern.\n{property} {operator} {value}"))),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Option"),Object(s.b)("th",{parentName:"tr",align:null},"Description"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"property"),Object(s.b)("td",{parentName:"tr",align:null},"The attribute by which you want to create the segment. You can choose from a list of user properties such as first name, last name, city, language, and so on.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"operator"),Object(s.b)("td",{parentName:"tr",align:null},"The condition operator that you want to use - is known, is not known, is, isn't, contains, does not contain.")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"value"),Object(s.b)("td",{parentName:"tr",align:null},"Value of the expression. Use + to add multiple values. For example, create users whose city is either Bangalore or Mummbai.",Object(s.b)("img",{parentName:"td",src:"https://i.imgur.com/vdcl0je.png",alt:null}))))),Object(s.b)("ol",{start:5},Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"To add more conditions, click ",Object(s.b)("strong",{parentName:"p"},"Add condition"),"."),Object(s.b)("p",{parentName:"li"},Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/PnSrqvJ.png",alt:null})))),Object(s.b)("p",null,"To create more sophisticated segments you can ",Object(s.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/targeted_segments"},"combine \u2018and\u2019 with \u2018or\u2019 conditions"),". This makes segments more powerful and flexible."),Object(s.b)("h2",{id:"3-manage-segments"},"3. Manage segments"),Object(s.b)("p",null,"Once you create a segment, you can view users in the segment, modify segment condition, download users of the segment, or delete it if not required."),Object(s.b)("h3",{id:"31-view-segment-users"},"3.1 View segment users"),Object(s.b)("p",null,"To view users of a segment, on the User 360 page, click on the segment. "),Object(s.b)("p",null,"You will see the list of users on the right."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/wrVY5eE.png",alt:null})),Object(s.b)("h3",{id:"32-edit-segment"},"3.2 Edit segment"),Object(s.b)("p",null,"To modify a segment's name or condition:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Click on ",Object(s.b)("strong",{parentName:"li"},"Actions")," > ",Object(s.b)("strong",{parentName:"li"},"Edit segment"),".")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/du1KLbt.png",alt:null})),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Edit the required details and ",Object(s.b)("strong",{parentName:"li"},"Save")," it.")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"When the conditions of the segment are edited, the users that show up in the segment might change based on the new condition."))),Object(s.b)("h3",{id:"33-download-segment-users"},"3.3 Download segment users"),Object(s.b)("p",null,"To download users of a segment:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Click ",Object(s.b)("strong",{parentName:"li"},"Actions")," > ",Object(s.b)("strong",{parentName:"li"},"Download segment user data"),".")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/tMtITgm.png",alt:null})),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"You will get an email with the download link. Click on the link. The file downloads as a CSV file. ")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/mOqzgWm.png",alt:null})),Object(s.b)("p",null,"The file contains complete details of each user that is available in the database."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/ECyBtOn.png",alt:null})),Object(s.b)("p",null,"Alternatively, you can also download the user details using ",Object(s.b)("strong",{parentName:"p"},"User logs")," > ",Object(s.b)("strong",{parentName:"p"},"Download log"),"."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/DJVTeUz.png",alt:null})),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/WlV8OQD.png",alt:null})),Object(s.b)("h3",{id:"34-archive-segment"},"3.4 Archive segment"),Object(s.b)("p",null,"Archiving a segment will not delete the user data associated with that segment. It  makes that particular segment unusable for new campaigns. Old campaigns will continue running as it is."),Object(s.b)("p",null,"To archive a segment, select the segment from the left panel, and click on ",Object(s.b)("strong",{parentName:"p"},"Actions")," > ",Object(s.b)("strong",{parentName:"p"},"Archive segment"),"."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/ml1Gh8j.png",alt:null})),Object(s.b)("p",null,"To view all archived segments, click on the ",Object(s.b)("strong",{parentName:"p"},"Archived")," tab in the left panel."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/huCOEOJ.png",alt:null})),Object(s.b)("p",null,"To unarchive a segment, select any archived segment and click on ",Object(s.b)("strong",{parentName:"p"},"Unarchive")," segment."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/OvBSbKU.png",alt:null})),Object(s.b)("h2",{id:"use-case-specific-segments"},"Use case specific segments"),Object(s.b)("h4",{id:"segments-for-drip-campaigns-birthday-greetings--other-date-based-campaigns"},"Segments for drip campaigns, birthday greetings, & other date based campaigns"),Object(s.b)("p",null,"You might often want to reach out to users on a particular date, or after they have completed a certain number of days from that particular date. Below we will show you how you can create date based ",Object(s.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/targeted_segments/"},"segment")," to achieve such use cases."),Object(s.b)("h3",{id:"drip-campaign"},"Drip campaign"),Object(s.b)("p",null,"Usecase:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Reaching out to employees who have completed 7 days since date of joining."),Object(s.b)("li",{parentName:"ul"},"Reaching out to users who signed up 7 days back.")),Object(s.b)("p",null,"Such segments target users who fall within a certain range from a particular date."),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/rK1T5sd.png",alt:null})),Object(s.b)("p",null,"This sort of a segment can be created using ",Object(s.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data/"},"properties")," that are of Date or DateTime data type.\nThe operator that can be selected are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"is was exactly"),Object(s.b)("li",{parentName:"ul"},"will be exactly"),Object(s.b)("li",{parentName:"ul"},"in the last"),Object(s.b)("li",{parentName:"ul"},"in the next")),Object(s.b)("h3",{id:"birthday-greetings"},"Birthday Greetings"),Object(s.b)("p",null,"Usecase:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("em",{parentName:"li"},"Sending out Birthday Greetings!"))),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/7lFf46V.png",alt:null})),Object(s.b)("p",null,"This segment can be set up only for Date type properties. If the campaign runs on 10th June 2022:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Current Day \u2192 Picks the day of when the segment is calculated, ie, 10th"),Object(s.b)("li",{parentName:"ul"},"Current Month \u2192 Picks the month of when the segment is calculated, ie, June"),Object(s.b)("li",{parentName:"ul"},"Any Year \u2192 Ignores the Year")),Object(s.b)("p",null,"Therefore, all users with Date = 10th June, regardless of year, will be targeted."),Object(s.b)("h3",{id:"exclude-users-who-have-opted-out-from-campaigns"},"Exclude users who have opted out from campaigns"),Object(s.b)("p",null,"You might often want to exclude users who have opted out from all your campaigns. Doing this is simple:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"First ensure that your opt-in data is up to date. This can be regularly updated through ",Object(s.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/"},"conversational data"),", by uploading fresh data through ",Object(s.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv"},"CSV"),", or by using ",Object(s.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api/"},"REST APIs")," to sync with your CRM."),Object(s.b)("li",{parentName:"ul"},"Next, you can include a condition in your ",Object(s.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/targeted_segments/"},"segment")," where, \u201cOpt-in is true\u201d. This segment will exclude all users for whom the opt-in is either false or unknown.")),Object(s.b)("p",null,Object(s.b)("img",{parentName:"p",src:"https://i.imgur.com/xr4X98S.png",alt:null})))}m.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(i,".").concat(u)]||m[u]||b[u]||s;return n?r.a.createElement(g,o(o({ref:t},l),{},{components:n})):r.a.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);