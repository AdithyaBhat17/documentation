"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[2692],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return a?r.createElement(d,o(o({ref:t},m),{},{components:a})):r.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},95880:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"Monitoring bot performance and setting alerts for failures and issues",sidebar_label:"Health & alerts"},s=void 0,p={unversionedId:"platform_concepts/growth/health",id:"platform_concepts/growth/health",title:"Monitoring bot performance and setting alerts for failures and issues",description:"As of now, only the Alerts tab is available for use, with two pre-built alerts.",source:"@site/docs/platform_concepts/growth/health.md",sourceDirName:"platform_concepts/growth",slug:"/platform_concepts/growth/health",permalink:"/docs/platform_concepts/growth/health",draft:!1,tags:[],version:"current",frontMatter:{title:"Monitoring bot performance and setting alerts for failures and issues",sidebar_label:"Health & alerts"}},m={},u=[{value:"1. Health",id:"1-health",level:2},{value:"1.1 Monitor bot health",id:"11-monitor-bot-health",level:3},{value:"1.2 Monitor API failures",id:"12-monitor-api-failures",level:3},{value:"Detailed analysis of your API failure",id:"detailed-analysis-of-your-api-failure",level:4},{value:"2. Alerts",id:"2-alerts",level:2},{value:"2.1 Enable default alerts",id:"21-enable-default-alerts",level:3},{value:"2.2 Create custom alerts",id:"22-create-custom-alerts",level:3}],c={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"As of now, only the Alerts tab is available for use, with two pre-built alerts.",(0,l.kt)("br",{parentName:"p"}),"\n","Health (to monitor performance of bot, API reports, etc.) and Alert  (to create custom rules to alert email recipients) features are still under development. ")),(0,l.kt)("p",null,"As an internal platform user, you will be able to use the Health module for the following purposes:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Monitor the overall health and performance of your bot."),(0,l.kt)("li",{parentName:"ol"},"Create custom alerts to receive email notifications for any issues/failures that occur.")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"1-health"},"1. Health"),(0,l.kt)("p",null,"Health tab displays details of ",(0,l.kt)("strong",{parentName:"p"},"bot performance")," (during its uptime and downtime) and ",(0,l.kt)("strong",{parentName:"p"},"API failures")," along with its logs.  "),(0,l.kt)("h3",{id:"11-monitor-bot-health"},"1.1 Monitor bot health"),(0,l.kt)("p",null,"The Health tab's Health widget displays the following information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The bot is pinged every minute to monitor its health. If a response is received, the bot is considered to be up. If the bot does not respond for more than 30 minutes, it is considered to be down."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"average bot uptime")," is calculated for a selected set of three months, such as July to September of 2022."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"uptime for each month")," is displayed in the top right corner of the respective calendars."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"downtime")," is represented by a ",(0,l.kt)("strong",{parentName:"li"},"yellow dot")," on the calendar. Hover over the date with a yellow dot to see the instances when the bot was down.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/fjP5nUF.png",alt:null}))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"12-monitor-api-failures"},"1.2 Monitor API failures"),(0,l.kt)("p",null,"The Health tab's API failures widget displays the following information:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The widget lists all available APIs along with their ",(0,l.kt)("strong",{parentName:"li"},"names"),", ",(0,l.kt)("strong",{parentName:"li"},"success rate"),", ",(0,l.kt)("strong",{parentName:"li"},"failure rate"),", ",(0,l.kt)("strong",{parentName:"li"},"API hits"),", ",(0,l.kt)("strong",{parentName:"li"},"average response time"),", and detailed logs for the selected timeframe (for the maximum of the last 3 months)."),(0,l.kt)("li",{parentName:"ul"},"You can sort each column based on its values by clicking on the sort option next to the column name."),(0,l.kt)("li",{parentName:"ul"},"To see the details of a particular API, you can search for it using its name."),(0,l.kt)("li",{parentName:"ul"},"If you want to view the logs and other information related to an API, click on the ",(0,l.kt)("strong",{parentName:"li"},"View")," button next to its name.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/TsThWq6.png",alt:null})),(0,l.kt)("li",{parentName:"ul"},"Click the menu option on the top right:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Export data")," to download the available data of API failure (monitored for all the APIs) to your local system. "),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create alert")," to create a new alert (discussed in the next section)."),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Modify schedule reports")," to receive a scheduled email of the API report monitored for all the APIs.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/TBsiUgb.png",alt:null}))))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"detailed-analysis-of-your-api-failure"},"Detailed analysis of your API failure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Clicking on the ",(0,l.kt)("strong",{parentName:"li"},"View")," button next to an API name will take you to the ",(0,l.kt)("strong",{parentName:"li"},"Track my order")," page."),(0,l.kt)("li",{parentName:"ul"},"On this page, you can filter and view data related to a ",(0,l.kt)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/api/api-settings#21-status-codes"},"specific error code")," and ",(0,l.kt)("strong",{parentName:"li"},"timeframe")," by using the available options."),(0,l.kt)("li",{parentName:"ul"},"You can also see the top three reasons (error codes) for API failures and % of their frequency of occurrence."),(0,l.kt)("li",{parentName:"ul"},"You can also see detailed ",(0,l.kt)("strong",{parentName:"li"},"failure logs")," including the ",(0,l.kt)("strong",{parentName:"li"},"type of error"),", the ",(0,l.kt)("strong",{parentName:"li"},"date and time")," of occurrence, and the complete ",(0,l.kt)("strong",{parentName:"li"},"log")," (these details are available only for the maximum of the last 15 days. "),(0,l.kt)("li",{parentName:"ul"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Learn common fixes")," to see the steps that can be used to debug the common errors.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/8ETWKVp.png",alt:null}))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"2-alerts"},"2. Alerts"),(0,l.kt)("p",null,"On the alert tabs, you can proactively monitor when there is any failure or issue. You can create alerts to receive alerts if any of the set rules for the alerts are met so that you can fix them on time.\nFor example: you can create an alert to get notified when the bot is down for more than 30 minutes."),(0,l.kt)("h3",{id:"21-enable-default-alerts"},"2.1 Enable default alerts"),(0,l.kt)("p",null,"Follow these steps to enable pre-configured alerts:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to the ",(0,l.kt)("strong",{parentName:"li"},"Alerts")," section of ",(0,l.kt)("strong",{parentName:"li"},"Insights")," > ",(0,l.kt)("strong",{parentName:"li"},"Health"),"."),(0,l.kt)("li",{parentName:"ol"},"Activate the toggle button for the required alert. There are two pre-configured alerts available:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"API failure"),": When enabled, an email notification will be sent if any APIs set up in Studio fail more than 5% in the last 7 days."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bot downtime"),". When enabled, an email notification will be sent if the bot is down for more than 30 minutes.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/ivKNwXt.png",alt:null})))),(0,l.kt)("li",{parentName:"ol"},"Add multiple recipients by typing their email addresses, hitting enter, and clicking ",(0,l.kt)("strong",{parentName:"li"},"Add"),".\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/psNzedR.png",alt:null}),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If you need to modify the recipients, click ",(0,l.kt)("strong",{parentName:"li"},"Edit")," in the menu next to the Alert name and add or remove email IDs.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/yOCs4D1.png",alt:null})))),(0,l.kt)("li",{parentName:"ol"},"When there is a failure or issue, an email alert will be sent to the recipients you entered. The time of the alert will be recorded in the ",(0,l.kt)("strong",{parentName:"li"},"Last fired")," column next to the alert name.")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"22-create-custom-alerts"},"2.2 Create custom alerts"),(0,l.kt)("p",null,"Follow these steps to create new alerts:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"Insights")," and select ",(0,l.kt)("strong",{parentName:"li"},"Health"),".  Open the ",(0,l.kt)("strong",{parentName:"li"},"Alerts")," tab."),(0,l.kt)("li",{parentName:"ol"},"Click the ",(0,l.kt)("strong",{parentName:"li"},"+Create alert")," button."),(0,l.kt)("li",{parentName:"ol"},"Fill in the details:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Name"),": Provide a ",(0,l.kt)("strong",{parentName:"li"},"Name")," for the alert."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Optionally, add a ",(0,l.kt)("strong",{parentName:"li"},"Description")," for the alert."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Event type"),": Select an appropriate ",(0,l.kt)("strong",{parentName:"li"},"Event type")," from the drop-down menu. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Select APIs to track"),": In case you choose ",(0,l.kt)("strong",{parentName:"li"},"API failures"),", all available APIs will be listed in the drop-down menu, and you can choose the ones you want to monitor."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"When"),": Specify the alert trigger conditions under When:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Select ",(0,l.kt)("strong",{parentName:"li"},"Immediately")," to receive an email as soon as an issue or failure is detected."),(0,l.kt)("li",{parentName:"ul"},"Choose ",(0,l.kt)("strong",{parentName:"li"},"Set threshold")," to create a custom alert. For instance, receive an alert when APIs fail more than ",(0,l.kt)("strong",{parentName:"li"},"X%")," within the last ",(0,l.kt)("strong",{parentName:"li"},"Y days"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Recipients"),": Enter the email addresses of the recipients under Recipients.\n",(0,l.kt)("img",{parentName:"li",src:"https://i.imgur.com/BGHmBi5.png",alt:null})))),(0,l.kt)("li",{parentName:"ol"},"Click on ",(0,l.kt)("strong",{parentName:"li"},"Create alert"),". The alert will be added to the Alerts page. You can enable or disable it by toggling the status switch.")))}h.isMDXComponent=!0}}]);