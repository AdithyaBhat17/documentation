(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{447:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),s=(n(0),n(456)),a=["components"],l={title:"Insights FAQs",sidebar_label:"Insights FAQs"},i={unversionedId:"platform_concepts/growth/faqs-user",id:"platform_concepts/growth/faqs-user",isDocsHomePage:!1,title:"Insights FAQs",description:"How are sessions(session duration) calculated?",source:"@site/docs/platform_concepts/growth/faqs-user.md",slug:"/platform_concepts/growth/faqs-user",permalink:"/docs/platform_concepts/growth/faqs-user",version:"current",sidebar_label:"Insights FAQs",sidebar:"platform_concepts",previous:{title:"Goals",permalink:"/docs/platform_concepts/growth/goals"},next:{title:"Launch your bot across channels",permalink:"/docs/platform_concepts/channelConfiguration/overview"}},c=[],u={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,a);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("details",null,Object(s.b)("summary",null," How are sessions(session duration) calculated? "),Object(s.b)("div",null,"A session can be a user session (when there\u2019s user interaction with the bot) or bot session (when there\u2019s a bot message but not necessarily any user message). Session duration is the average time for which the user has conversed with the bot. A session can be of 24 hours. A user can have any number of interactions with the bot within this 24 hours window from the start of a session and it will be considered a single session. A new session starts after 24 hours.")),Object(s.b)("details",null,Object(s.b)("summary",null," Difference between a new user and a unique user? "),Object(s.b)("div",null,"New users are first-time visitors."),Object(s.b)("div",null,"Unique users are the total number of users visiting within any time range (new + repeat users). If a user has visited before, irrespective of the timeframe, they will be considered returning users. New vs returning users are identified based on UIDs. If a UID exists in the database, the user is classified as a returning user.")),Object(s.b)("details",null,Object(s.b)("summary",null," How to check for the percentage of self-serve? "),Object(s.b)("div",null,"Deflection rate under ",Object(s.b)("b",null,"Bot Performance")," on the ",Object(s.b)("b",null,"Overview")," page.")),Object(s.b)("details",null,Object(s.b)("summary",null," What is the meaning of 'switched' in the user journey visualization page? "),Object(s.b)("div",null,"When the user moves to a different journey at any point in time it is termed as ",Object(s.b)("b",null,"Switched"),".")),Object(s.b)("details",null,Object(s.b)("summary",null," Why is my user count not matching the numbers displayed on the flow chart? "),Object(s.b)("div",null,"The number displayed in the flow chart is the number of hits and not the number of users.")),Object(s.b)("details",null,Object(s.b)("summary",null," Is ",Object(s.b)("b",null,"dropped")," inside Steps considered as a final drop or can the user continue? "),Object(s.b)("div",null,Object(s.b)("b",null,"Dropped")," means the user has dropped out of the bot.")),Object(s.b)("details",null,Object(s.b)("summary",null," How are users tracked in the mobile app? "),Object(s.b)("div",null,"Closing the chat window/app or leaving the chat in the middle of the conservation for a long time implies the user has dropped off.")),Object(s.b)("details",null,Object(s.b)("summary",null," When can we decide if a flow (journey) is completed?"),Object(s.b)("div",null,"It depends on the step structure and how many steps are required to complete a flow. After all the steps are completed, the journey is completed.")),Object(s.b)("details",null,Object(s.b)("summary",null," How do you differentiate between Poor performance and Good performance based on the visualization insights? "),Object(s.b)("div",null,"Based on ",Object(s.b)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/growth/funnels#31-flow-completion-rate-fcr"}," Flow completion rate ")," (in user journey visualization).")),Object(s.b)("details",null,Object(s.b)("summary",null," Why are flow completion rates low?"),Object(s.b)("div",null,"There can be multiple reasons for ",Object(s.b)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/growth/funnels#31-flow-completion-rate-fcr"}," Flow completion rate ")," . You can find a list of them along with recommended next steps under ",Object(s.b)("b",null,"User Journeys")," > ",Object(s.b)("b",null,"Funnels")," > ",Object(s.b)("b",null,"Flow Summary"),".")),Object(s.b)("details",null,Object(s.b)("summary",null," How to check where users are dropping off?"),Object(s.b)("div",null,Object(s.b)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/growth/user-journeys#2-visualization-insights"}," User journey visualization ")," can show you which flows users are mostly dropping off after and where within the journeys.")),Object(s.b)("details",null,Object(s.b)("summary",null," Can I automate(schedule) my report generation? "),Object(s.b)("div",null,"You can schedule any saved report on ",Object(s.b)("b",null,"Data Explorer")," as an email alert. Open any ",Object(s.b)("b",null,"Saved report")," > click ",Object(s.b)("b",null,"Actions")," > ",Object(s.b)("b",null,"Schedule Reports")," > configure all details > ",Object(s.b)("b",null,"Save"),".  Click ",Object(s.b)("a",{href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer"}," here ")," for more details.")),Object(s.b)("details",null,Object(s.b)("summary",null," Why are the values not getting auto updated on the dashboard page (overview/ user journey/ metrics)? "),Object(s.b)("div",null,"All the Insights widget pages (",Object(s.b)("b",null,"Overview, Metrics, User Journeys, Doc cog, Dashboards, Data explorer"),") must be refreshed to see the updated data (pages do not get auto-refreshed).")),Object(s.b)("details",null,Object(s.b)("summary",null," How to capture analytics when the user clicks on the Home and Cross buttons? "),Object(s.b)("div",null," You can find these Events in the ",Object(s.b)("b",null,"User engagement")," > events table in ",Object(s.b)("b",null," Data Explorer"),". "),Object(s.b)("div",null," ",Object(s.b)("b",null,"home-button-click"),": When a user clicks on the home button in the chat widget. "),Object(s.b)("div",null," ",Object(s.b)("b",null,"bot-closed"),": When a user clicks on the cross icon of the chat widget. ")))}b.isMDXComponent=!0},456:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,h=b["".concat(a,".").concat(p)]||b[p]||d[p]||s;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);