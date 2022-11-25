(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{396:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(452)),o=["components"],s={sidebar_label:"Segment use cases",title:"Create segments for different use cases"},c={unversionedId:"platform_concepts/engagement/cdp/user_data_segments/segment_usecases",id:"platform_concepts/engagement/cdp/user_data_segments/segment_usecases",isDocsHomePage:!1,title:"Create segments for different use cases",description:"The segments you create should be specific to your use case. Here are some ideas to get you started:",source:"@site/docs/platform_concepts/engagement/cdp/user_data_segments/segment_usecases.md",slug:"/platform_concepts/engagement/cdp/user_data_segments/segment_usecases",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/segment_usecases",version:"current",sidebar_label:"Segment use cases",sidebar:"platform_concepts",previous:{title:"User segmentation",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment"},next:{title:"Engage overview",permalink:"/docs/platform_concepts/engagement/engage"}},l=[{value:"1. Campaign specific use cases",id:"1-campaign-specific-use-cases",children:[{value:"1.1 Drip campaign",id:"11-drip-campaign",children:[]},{value:"1.2 Birthday Greetings",id:"12-birthday-greetings",children:[]},{value:"1.3 Exclude users who have opted out from campaigns",id:"13-exclude-users-who-have-opted-out-from-campaigns",children:[]}]},{value:"2. Highly targeted segments",id:"2-highly-targeted-segments",children:[{value:"2.1 Segments with multiple conditions (and/or)",id:"21-segments-with-multiple-conditions-andor",children:[]},{value:"2.2 Customers nearing subscription expiry",id:"22-customers-nearing-subscription-expiry",children:[]},{value:"2.3 Employees in a certain department",id:"23-employees-in-a-certain-department",children:[]},{value:"2.4 Visitors who have opted in to receiving updates on email",id:"24-visitors-who-have-opted-in-to-receiving-updates-on-email",children:[]},{value:"2.5 Potential leads",id:"25-potential-leads",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The segments you create should be specific to your use case. Here are some ideas to get you started:"),Object(i.b)("h2",{id:"1-campaign-specific-use-cases"},"1. Campaign specific use cases"),Object(i.b)("p",null,"You might often want to reach out to users on a particular date, or after they have completed a certain number of days from that particular date. Below we will show you how you can create date based ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/targeted_segments/"},"segment")," to achieve such use cases."),Object(i.b)("h3",{id:"11-drip-campaign"},"1.1 Drip campaign"),Object(i.b)("p",null,"Usecase:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Reaching out to employees who have completed 7 days since date of joining."),Object(i.b)("li",{parentName:"ul"},"Reaching out to users who signed up 7 days back.")),Object(i.b)("p",null,"Such segments target users who fall within a certain range from a particular date."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/rK1T5sd.png",alt:null})),Object(i.b)("p",null,"This sort of a segment can be created using ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data/"},"properties")," that are of Date or DateTime data type.\nThe operator that can be selected are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"is was exactly"),Object(i.b)("li",{parentName:"ul"},"will be exactly"),Object(i.b)("li",{parentName:"ul"},"in the last"),Object(i.b)("li",{parentName:"ul"},"in the next")),Object(i.b)("h3",{id:"12-birthday-greetings"},"1.2 Birthday Greetings"),Object(i.b)("p",null,"Usecase:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Sending out Birthday Greetings!"))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/7lFf46V.png",alt:null})),Object(i.b)("p",null,"This segment can be set up only for Date type properties. If the campaign runs on 10th June 2022:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Current Day \u2192 Picks the day of when the segment is calculated, ie, 10th"),Object(i.b)("li",{parentName:"ul"},"Current Month \u2192 Picks the month of when the segment is calculated, ie, June"),Object(i.b)("li",{parentName:"ul"},"Any Year \u2192 Ignores the Year")),Object(i.b)("p",null,"Therefore, all users with Date June 10, (regardless of year), will be targeted."),Object(i.b)("h3",{id:"13-exclude-users-who-have-opted-out-from-campaigns"},"1.3 Exclude users who have opted out from campaigns"),Object(i.b)("p",null,"You might often want to exclude users who have opted out from all your campaigns. Doing this is simple:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"First ensure that your opt-in data is up to date. This can be regularly updated through ",Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/"},"conversational data"),", by uploading fresh data through ",Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv"},"CSV"),", or by using ",Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api/"},"REST APIs")," to sync with your CRM."),Object(i.b)("li",{parentName:"ul"},"Next, you can include a condition in your ",Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/targeted_segments/"},"segment")," where, \u201cOpt-in is true\u201d. This segment will exclude all users for whom the opt-in is either false or unknown.")),Object(i.b)("img",{src:"https://i.imgur.com/xr4X98S.png",width:"60%"}),Object(i.b)("h2",{id:"2-highly-targeted-segments"},"2. Highly targeted segments"),Object(i.b)("h3",{id:"21-segments-with-multiple-conditions-andor"},"2.1 Segments with multiple conditions (and/or)"),Object(i.b)("p",null,"A segment can be made up of multiple ",Object(i.b)("strong",{parentName:"p"},"condition sets"),", which in turn can be made up of multiple ",Object(i.b)("strong",{parentName:"p"},"conditions"),"."),Object(i.b)("p",null,"A single condition looks something like this, and in most cases is made up of a ",Object(i.b)("strong",{parentName:"p"},"user property"),", an ",Object(i.b)("strong",{parentName:"p"},"operator")," on that property and a ",Object(i.b)("strong",{parentName:"p"},"value field")," associated with that operator. "),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Some operators might not have an associated value field."))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/URAzjop.png",alt:null})),Object(i.b)("p",null,"Depending on the data type of the user property and the type of operator, for some conditions you will be able to add multiple values by clicking on ",Object(i.b)("inlineCode",{parentName:"p"},"+")," next to the value field. These values will be separated by ",Object(i.b)("strong",{parentName:"p"},"OR")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/bxJDJ6s.png",alt:null})),Object(i.b)("p",null,"Another condition can be added within a condition set by clicking + Add condition. Conditions within a condition set are separated by ",Object(i.b)("strong",{parentName:"p"},"AND")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/PqeiHR7.png",alt:null})),Object(i.b)("p",null,"A new condition set can be added by clicking on + Add condition set. Conditions sets are separated by ",Object(i.b)("strong",{parentName:"p"},"OR")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/m6zBzmo.png",alt:null})),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"For a user to be a part of a segment, he must meet all the AND conditions of a condition set."))),Object(i.b)("h3",{id:"22-customers-nearing-subscription-expiry"},"2.2 Customers nearing subscription expiry"),Object(i.b)("p",null,"These are customers whose subscription expiry date is nearing. You can send out reminders to this group to renew their subscription. Your filters for this segment might be something like: ",Object(i.b)("inlineCode",{parentName:"p"},"Subscription End Date will be exactly 6 days later.")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/surY1EB.png",alt:null})),Object(i.b)("h3",{id:"23-employees-in-a-certain-department"},"2.3 Employees in a certain department"),Object(i.b)("p",null,"You might want to send out communication related to training activity to junior employees from a certain department. Your filters here might be: ",Object(i.b)("inlineCode",{parentName:"p"},'Department is "Product" or "Engineering" AND Title **includes** "Junior" or "Associate"')),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/tC3f2Qu.png",alt:null})),Object(i.b)("h3",{id:"24-visitors-who-have-opted-in-to-receiving-updates-on-email"},"2.4 Visitors who have opted in to receiving updates on email"),Object(i.b)("p",null,"You might want to create a group of users who you might to regularly share content with, over email. Your filters here might be: ",Object(i.b)("inlineCode",{parentName:"p"},"Email Subscription is true")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/45FBZpB.png",alt:null})),Object(i.b)("h3",{id:"25-potential-leads"},"2.5 Potential leads"),Object(i.b)("p",null,"You could create a segment of users who have visited your pricing page more than twice. Then you can give them a little nudge and incentivise them with an offer or set up a demo with your sales team. Your filters here might be: ",Object(i.b)("inlineCode",{parentName:"p"},"Pricing Page visited more than twice")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/9NYYn0L.png",alt:null})))}u.isMDXComponent=!0},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.a.createElement(b,s(s({ref:t},l),{},{components:n})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);