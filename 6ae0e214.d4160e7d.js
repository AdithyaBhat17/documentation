(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{211:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(385)),i=["components"],l={title:"Dashboards",sidebar_label:"Dashboards"},c={unversionedId:"platform_concepts/growth/dashboards",id:"platform_concepts/growth/dashboards",isDocsHomePage:!1,title:"Dashboards",description:"A dashboard is a visual display of all of your data. While it can be used in all kinds of different ways, its primary intention is to provide information at-a-glance. A dashboard usually sits on its own page and receives information from a linked database. In many cases it\u2019s configurable, allowing you the ability to choose which data you want to see and whether you want to include charts or graphs to visualize the numbers.",source:"@site/docs/platform_concepts/growth/dashboards.md",slug:"/platform_concepts/growth/dashboards",permalink:"/docs/platform_concepts/growth/dashboards",version:"current",sidebar_label:"Dashboards",sidebar:"platform_concepts",previous:{title:"Data Explorer",permalink:"/docs/platform_concepts/growth/data-explorer"},next:{title:"Inbox module",permalink:"/docs/platform_concepts/inbox/inbox"}},s=[{value:"Creating a Dashboard",id:"creating-a-dashboard",children:[]},{value:"Adding a Widget",id:"adding-a-widget",children:[]}],d={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A dashboard is a visual display of all of your data. While it can be used in all kinds of different ways, its primary intention is to provide information at-a-glance. A dashboard usually sits on its own page and receives information from a linked database. In many cases it\u2019s configurable, allowing you the ability to choose which data you want to see and whether you want to include charts or graphs to visualize the numbers."),Object(o.b)("p",null,"Dashboard help the analysts to add multiple widgets into single page layout. Multiple Dashboard can be created. Widgets can be directly added to Dashboard from the data explorer too."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/lFXxFsQ.png",alt:null})),Object(o.b)("h3",{id:"creating-a-dashboard"},"Creating a Dashboard"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Login to ",Object(o.b)("a",{parentName:"li",href:"https://cloud.yellow.ai/bot/Bot_ID/overview"},"yellow.ai"),", click on Overview and select Insights."),Object(o.b)("li",{parentName:"ol"},"Choose Dashboard from the left side pane."),Object(o.b)("li",{parentName:"ol"},"Click on New dashboard."),Object(o.b)("li",{parentName:"ol"},"Enter the name and description."),Object(o.b)("li",{parentName:"ol"},"Click on save.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/eQO2dWJ.png",alt:null})),Object(o.b)("h3",{id:"adding-a-widget"},"Adding a Widget"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Select the new Dashboard created."),Object(o.b)("li",{parentName:"ol"},"Click on Add widget"),Object(o.b)("li",{parentName:"ol"},"Select widgets from the dropdown")),Object(o.b)("p",null,"Here, you can find 2 options:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can choose multiple options from the list\nOr"),Object(o.b)("li",{parentName:"ul"},"Click on create a new widget and you shall be directed to Data explorer for creating a new widget and will be automatically added to the dashboard once you save the query in data explorer. Also, all the changes made so far in the dashboard will be saved.")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Choose the first option to select from the list."),Object(o.b)("li",{parentName:"ol"},"Click on Add")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/Q30IsN3.png",alt:null})),Object(o.b)("p",null,"Below image shows the dashboard after the addition of widgets and customising in real time."),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/wwhd6qf.png",alt:null})),Object(o.b)("p",null,"Dynamically change the dashboard data by selecting a specific date range from date filter. You can also drag and position the charts in any specific order."))}b.isMDXComponent=!0},385:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=d(a),u=n,h=b["".concat(i,".").concat(u)]||b[u]||p[u]||o;return a?r.a.createElement(h,l(l({ref:t},s),{},{components:a})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);