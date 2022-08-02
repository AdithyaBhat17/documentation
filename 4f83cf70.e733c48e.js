(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{163:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(393)),o=["components"],s={title:"Data Explorer",sidebar_label:"Data Explorer"},c={unversionedId:"platform_concepts/growth/data-explorer",id:"platform_concepts/growth/data-explorer",isDocsHomePage:!1,title:"Data Explorer",description:"Data Explorer is a business intelligence tool to build custom analytics. Analysts will be able to generate reports, and create beautiful widgets in the form of Line charts, Pie charts, Bar Graphs without writing any code. It provides a standard set of Datasets(tables) that can be used to create Widgets. Analysts can create custom Datasets using the tables created by bot builders.Data Explorer currently uses the Druid Datastore and the bot database to draw the analytics.",source:"@site/docs/platform_concepts/growth/data-explorer.md",slug:"/platform_concepts/growth/data-explorer",permalink:"/docs/platform_concepts/growth/data-explorer",version:"current",sidebar_label:"Data Explorer",sidebar:"platform_concepts",previous:{title:"Funnels",permalink:"/docs/platform_concepts/growth/funnels"},next:{title:"Dashboards",permalink:"/docs/platform_concepts/growth/dashboards"}},l=[{value:"Create Queries",id:"create-queries",children:[]},{value:"Custom Query",id:"custom-query",children:[]},{value:"Visualization",id:"visualization",children:[]}],b={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Data Explorer is a business intelligence tool to build custom analytics. Analysts will be able to generate reports, and create beautiful widgets in the form of Line charts, Pie charts, Bar Graphs without writing any code. It provides a standard set of Datasets(tables) that can be used to create Widgets. Analysts can create custom Datasets using the tables created by bot builders.Data Explorer currently uses the Druid Datastore and the bot database to draw the analytics."),Object(i.b)("p",null,"Using the Data Explorer, you can easily summarize data submitted for individual fields, summarize the empirical relationships between fields, and drill down to browse individual submissions. With it, you can start learning from your data right away."),Object(i.b)("p",null,"Dashboard can be used to visualise the Datasets and reports generated using Data Explorer. Multiple Dashboards can be created to group widgets related to different use cases."),Object(i.b)("p",null,"Navigating to Data Explorer is as below:"),Object(i.b)("p",null,"Login to ",Object(i.b)("a",{parentName:"p",href:"https://cloud.yellow.ai/bot/Bot_ID/overview"},"yellow.ai"),", click on Overview, select Insights -> choose Data Explorer from the left side\npane."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/39r9rpd.jpg",alt:null})),Object(i.b)("p",null,"Data Explorer is categorized into 2 sections:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default datasets"),Object(i.b)("li",{parentName:"ul"},"Custom datasets")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Default Datasets")),"  are the tables built in, related to Users Events, Messages, API Events, Agent Events, etc.,"),Object(i.b)("p",null,"Below, you will find the default dataset options and their functions:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Event Name"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Agent Events"),Object(i.b)("td",{parentName:"tr",align:"center"},"Gives data about how agents are performing, how many users are interacting with the agents, response time, AHT etc.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"API Events"),Object(i.b)("td",{parentName:"tr",align:"center"},"Displays APIs performance, their response time, status codes, IP addresses etc.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Bot Events"),Object(i.b)("td",{parentName:"tr",align:"center"},"Provides technical insights around chat widget loads, various function execution, where widget loads are happening, what is the platform and channel etc.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"User Feedbacks"),Object(i.b)("td",{parentName:"tr",align:"center"},"Provides info about user experience from the feedback they give on the bot. Slice and dice it based on use cases they visit the bot for. See how individual use cases are performing.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Messages"),Object(i.b)("td",{parentName:"tr",align:"center"},"Data about the user traffic metrics here, messages exchanged, sessions created, user demographies, devices they are using, etc on a channel level.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Notification Reports"),Object(i.b)("td",{parentName:"tr",align:"center"},"Deep dive into how the campaigns are performing, which channel is doing well, how are different templates performing, how many notifications are failing etc.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"User Events"),Object(i.b)("td",{parentName:"tr",align:"center"},"Check how your users are engaging with the bot, journeys they are taking, agent transfers, journey switches, unidentified utterances, etc.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"Voice Events"),Object(i.b)("td",{parentName:"tr",align:"center"},"Find insights around voice bots. Number of inbound / outbound calls, calls per user, region, call duration, etc.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Custom Datasets"))," are the custom tables created by the bot builder. You can customize the table based on your preferences."),Object(i.b)("h3",{id:"create-queries"},"Create Queries"),Object(i.b)("p",null,"Apart from the above mentioned two data sets you can also create custom queries. These custom queries can be created using the default datasets or custom datasets."),Object(i.b)("p",null,"To create a new query, click on create a query button as shown in the image below:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/6dBD5zg.png",alt:null})),Object(i.b)("p",null,"When you select the create a query option, you get a pop up where you can select what type of query to be created based on the below 2 options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Custom query"),Object(i.b)("li",{parentName:"ul"},"Native query")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/Uihdc9T.png",alt:null})),Object(i.b)("p",null,"Custom query is where you pick the data set, filter, summarise and visualise it within clicks."),Object(i.b)("p",null,"Native query is used for complicated analysis wher you write your own SQL query."),Object(i.b)("h3",{id:"custom-query"},"Custom Query"),Object(i.b)("p",null,"Post selecting the type of query, you can then click on the dropdown where you can customize from either the default or custom datasets and press Next."),Object(i.b)("p",null,"Below image shows a table created using custom query based on the Agent events:"),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/j4NRlAC.png",alt:null})),Object(i.b)("p",null,"You can also export the data obtained as a .csv file."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/Ho9rC9x.png",alt:null})),Object(i.b)("p",null,"Queries can be constructed using filters and logics within Filters. Data can be filtered by a specific column value or a combination of column values."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/mOtbepU.png",alt:null})),Object(i.b)("p",null,"Select any of the option of your preference and click on Apply filter."),Object(i.b)("p",null,"Dataset can be summarized(grouping Rows) by selecting a Column Name, and selecting required metrics like count, sum of, average of, number of distinct Values of, minimum of, and/or maximum of."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/1xy4ywH.png",alt:null})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u2139\ufe0f Remove the filters if any when the data is summarized."))),Object(i.b)("p",null,"You can group records by a specific column. Records can be listed page wise defining number of records per page. Records can be Sorted in Asc or Desc order by a specific Column. Just click on the column label to sort the data."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/9eHJRTO.png",alt:null})),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udca1 Example: ",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/LJA9BPV.png",alt:null})))),Object(i.b)("p",null,"Lastly, click on Save Query and this can be used for future references."),Object(i.b)("h3",{id:"visualization"},"Visualization"),Object(i.b)("p",null,"Visualizing data in charts, graphs, dashboards, and more is one of the most powerful strategies for getting your numbers out of your spreadsheets and into real-world conversations. This step-by-step data visualization guide is for you! "),Object(i.b)("p",null,"Below is a walk through the data visualization design process so you know what to do first, second, and third as you transform your spreadsheets into stories."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/9dw6h75.png",alt:null})),Object(i.b)("p",null,"Steps for visualising:"),Object(i.b)("p",null,"\u2022 Click on the query\n\u2022 Click on Visualize button\n\u2022 Select the required chart\n\u2022 Click done\n\u2022 Save the Query"),Object(i.b)("p",null,"Visualising the Data can be done in the following ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Line chart"),Object(i.b)("li",{parentName:"ul"},"Bar graph"),Object(i.b)("li",{parentName:"ul"},"Pie chart"),Object(i.b)("li",{parentName:"ul"},"Funnel"),Object(i.b)("li",{parentName:"ul"},"Table view"),Object(i.b)("li",{parentName:"ul"},"Row view")),Object(i.b)("div",{className:"admonition admonition-success alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\ud83d\udca1 Example: Pie Chart ",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/Yuj3tfA.png",alt:null})))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"\u2139\ufe0f Always remember to refresh the page after making changes.\nHover the mouse on top of the chart for more details."))))}u.isMDXComponent=!0},393:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);