(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var r=a(3),o=a(7),n=(a(0),a(456)),c=["components"],l={title:"Create Dashboards and add widgets",sidebar_label:"Dashboards"},b={unversionedId:"platform_concepts/growth/dashboards",id:"platform_concepts/growth/dashboards",isDocsHomePage:!1,title:"Create Dashboards and add widgets",description:"In this article, you will learn:",source:"@site/docs/platform_concepts/growth/dashboards.md",slug:"/platform_concepts/growth/dashboards",permalink:"/docs/platform_concepts/growth/dashboards",version:"current",sidebar_label:"Dashboards",sidebar:"platform_concepts",previous:{title:"Data explorer with default and custom tables",permalink:"/docs/platform_concepts/growth/data-explorer"},next:{title:"Goals",permalink:"/docs/platform_concepts/growth/goals"}},i=[{value:"1. Create Dashboard",id:"1-create-dashboard",children:[{value:'<a name="1"></a>  1.1 Create a dashboard from Dashboard page',id:"11-create-a-dashboard-from-dashboard-page",children:[]},{value:'<a name="2"></a>  1.2 Create a dashboard from Data explorer',id:"12-create-a-dashboard-from-data-explorer",children:[]}]},{value:'<a name="3"></a> 2. Add widget',id:"2-add-widget",children:[]}],s={toc:i};function d(e){var t=e.components,a=Object(o.a)(e,c);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"In this article, you will learn: "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"#features"},"Features of the dashboard")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"#1"},"How to create a dashboard via. Dashboard?")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"#2"},"How to create a dashboard via. Data explorer?")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"#3"},"How to add widgets?"))),Object(n.b)("hr",null),Object(n.b)("h4",{id:"insights-dashboard"},Object(n.b)("a",{name:"features"})," Insights Dashboard"),Object(n.b)("p",null,"A dashboard is a visual display of all your bot data. It can be used for multiple use-cases with its primary intention to provide information at a glance. "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A dashboard has its dedicated page and receives information from a ",Object(n.b)("strong",{parentName:"li"},"linked database"),", which can be ",Object(n.b)("strong",{parentName:"li"},"configured")," as per your needs. You can choose the data you want to see and choose to visualize the numbers using charts or graphs."),Object(n.b)("li",{parentName:"ul"},"You can create ",Object(n.b)("strong",{parentName:"li"},"Multiple Dashboards"),". In this, each dashboard can include multiple widgets (reports).  "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Widgets")," are the saved reports that are present on the ",Object(n.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#45-save-query"},"data explorer page"),". The dashboard helps the analysts to add multiple widgets to the single page layout. "),Object(n.b)("li",{parentName:"ul"},"Widgets can be directly added to the Dashboard from the ",Object(n.b)("strong",{parentName:"li"},"data explorer"),".")),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://i.imgur.com/LJz5RoC.png",alt:null})),Object(n.b)("hr",null),Object(n.b)("h2",{id:"1-create-dashboard"},"1. Create Dashboard"),Object(n.b)("p",null,"You can create more than one dashboard using either of the following methods.  "),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Dashboard usecase")," "),Object(n.b)("p",null,"Depending upon the commonality between different widgets, you can club the reports having some type of commonality among each other under one particular page(dashboard).\nIf your company has three different types of products and you want to check the analytics for those products, separately, at the same time, in the same place, you can create dashboards for product #1 product #2, and product #3. Add all of the metrics that are common to a particular product to the respective dashboard. With this, you can see all the values that are connected under one view."),Object(n.b)("h3",{id:"11-create-a-dashboard-from-dashboard-page"},Object(n.b)("a",{name:"1"}),"  1.1 Create a dashboard from Dashboard page"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Login to ",Object(n.b)("a",{parentName:"li",href:"https://cloud.yellow.ai/bot/Bot_ID/overview"},"yellow.ai"),", click on Overview. Open ",Object(n.b)("strong",{parentName:"li"},"Insights")," > ",Object(n.b)("strong",{parentName:"li"},"Dashboard"),"."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"+Add new dashboard")," or ",Object(n.b)("strong",{parentName:"li"},"+New dasbhoard")," from the top right. "),Object(n.b)("li",{parentName:"ol"},"On the Dashboard details pop-up, enter ",Object(n.b)("strong",{parentName:"li"},"Name")," and ",Object(n.b)("strong",{parentName:"li"},"Description"),". "),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Save"),". ")),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://i.imgur.com/LRDZwpM.png",alt:null})),Object(n.b)("h3",{id:"12-create-a-dashboard-from-data-explorer"},Object(n.b)("a",{name:"2"}),"  1.2 Create a dashboard from Data explorer"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Prerequisites: ",Object(n.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#52-add-report-to-dashboard"},"Data explorer"))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Login to ",Object(n.b)("a",{parentName:"li",href:"https://cloud.yellow.ai/bot/Bot_ID/overview"},"yellow.ai"),", click on Overview. Open ",Object(n.b)("strong",{parentName:"li"},"Insights")," > ",Object(n.b)("strong",{parentName:"li"},"Data explorer"),". "),Object(n.b)("li",{parentName:"ol"},"Click and open any of the saved reports. ")),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://i.imgur.com/Sy9bmBJ.png",alt:null})),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"From ",Object(n.b)("strong",{parentName:"li"},"Actions")," dropdown, select ",Object(n.b)("strong",{parentName:"li"},"Add to dashboard"),"."),Object(n.b)("li",{parentName:"ol"},"Select ",Object(n.b)("strong",{parentName:"li"},"New dashboard"),". Add ",Object(n.b)("strong",{parentName:"li"},"Name")," and ",Object(n.b)("strong",{parentName:"li"},"Description")," (the saved report that you have selected is going to be the widget inside a dashboard. You can choose to add this widget to an existing dashboard or you can create a new dashboard and add this widget to it)."),Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Save"),". You can view this on the dashboard page. ")),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://i.imgur.com/o3ila14.png",alt:null})),Object(n.b)("hr",null),Object(n.b)("h2",{id:"2-add-widget"},Object(n.b)("a",{name:"3"})," 2. Add widget"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"To add a widget to a new dashboard, you must have an existing saved report on the data explorer page. Click ",Object(n.b)("strong",{parentName:"li"},"+Add widget"),". You will be prompted to create a new widget.  ")),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://i.imgur.com/22q7kUO.png",alt:null})),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"To learn more about creating a saved report, refer to ",Object(n.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/growth/data-explorer#3-create-custom-tables"},"custom tables"),".    "),Object(n.b)("img",{src:"https://i.imgur.com/MFgmkwk.png",width:"70%"}))),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"To add a widget to a dashboard with existing widgets, click ",Object(n.b)("strong",{parentName:"li"},"+Add widget")," on the top right. Select from the existing widgets (reports). ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Multiple reports can be selected at once. You can also click ",Object(n.b)("strong",{parentName:"li"},"+Create new widget")," to create new widgets. ")))),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://i.imgur.com/ZXJkgqk.png",alt:null})),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Click ",Object(n.b)("strong",{parentName:"li"},"Add"),". ")),Object(n.b)("hr",null),Object(n.b)("p",null,"Other dashboard features are listed below: "),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Date filter")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Irrespective of the filters added to the saved reports(widgets) you can add a data filter to your dashboard from the top left.  ")),Object(n.b)("img",{src:"https://i.imgur.com/XHr9FpN.png",width:"50%"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Delete dashboard")," "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"To delete this particular dashboard, click ",Object(n.b)("strong",{parentName:"li"},"Actions")," on the top right and select ",Object(n.b)("strong",{parentName:"li"},"Delete dashboard"),". ")),Object(n.b)("img",{src:"https://i.imgur.com/4BBP5oJ.png",width:"50%"}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Edit dashboard")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"By clicking ",Object(n.b)("strong",{parentName:"li"},"Edit dashboard")," on the top right, you can: ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Change the dashboard ",Object(n.b)("strong",{parentName:"li"},"Name")," and ",Object(n.b)("strong",{parentName:"li"},"Description"),"."),Object(n.b)("li",{parentName:"ul"},"Add more widgets to the dashboard. "),Object(n.b)("li",{parentName:"ul"},"Delete the existing widgets from dashboard."),Object(n.b)("li",{parentName:"ul"},"Drag and drop the existing widgets to place is as per your needs. "),Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("strong",{parentName:"li"},"Save"),". ")))),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://i.imgur.com/8tNItnb.png",alt:null})))}d.isMDXComponent=!0},456:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),s=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||n;return a?o.a.createElement(h,l(l({ref:t},i),{},{components:a})):o.a.createElement(h,l({ref:t},i))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<n;i++)c[i]=a[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);