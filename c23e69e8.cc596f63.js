(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return g}));var o=n(3),a=n(7),r=(n(0),n(446)),i=["components"],c={title:"Google Calendar",sidebar_label:"Google Calendar"},l={unversionedId:"platform_concepts/appConfiguration/google-calendar",id:"platform_concepts/appConfiguration/google-calendar",isDocsHomePage:!1,title:"Google Calendar",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/google-calendar.md",slug:"/platform_concepts/appConfiguration/google-calendar",permalink:"/docs/platform_concepts/appConfiguration/google-calendar",version:"current",sidebar_label:"Google Calendar",sidebar:"platform_concepts",previous:{title:"Genesys Live Chat",permalink:"/docs/platform_concepts/appConfiguration/genesys"},next:{title:"Google Sheets",permalink:"/docs/platform_concepts/appConfiguration/google-sheets"}},s=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Use-cases",id:"use-cases",children:[{value:"Simple integration with Oauth",id:"simple-integration-with-oauth",children:[]},{value:"Do actions with google calendar action nodes",id:"do-actions-with-google-calendar-action-nodes",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Navigate to integrations tab",id:"navigate-to-integrations-tab",children:[]},{value:"Connect your google account",id:"connect-your-google-account",children:[]}]}],p={toc:s};function g(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(r.b)("p",null,"Yellow.ai Integration with Google Calendar enables you to seamlessly access google calendar services. Any customer who has a google account will be able to connect with yellow.ai using OAuth. Using this integration you can create, read events and also you can search for the busy time slots of the person and this can help you to create events according to it."),Object(r.b)("h2",{id:"use-cases"},"Use-cases"),Object(r.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(r.b)("h3",{id:"simple-integration-with-oauth"},"Simple integration with Oauth"),Object(r.b)("p",null,"Google calendar integration with yellow.ai happens through the Oauth 2.0 approach.\nWhile integrating, yellow.ai navigates the user to the login page of Google, user has to login into his google account and has to provide his consent to access his calendar data."),Object(r.b)("h3",{id:"do-actions-with-google-calendar-action-nodes"},"Do actions with google calendar action nodes"),Object(r.b)("p",null,"You can create a new calendar event by specifying the timings, event title, description etc.. You can check the time slots of the person where you get busy time slots of the person and can create the event accordingly."),Object(r.b)("p",null,"You can also read the calendar event with the event id to get the updates of that event."),Object(r.b)("img",{src:"https://cdn.yellowmessenger.com/veE7Ulzsxzjw1649088649948.png",alt:"drawing",width:"60%"}),Object(r.b)("img",{src:"https://cdn.yellowmessenger.com/yy0eWx9HVl8u1649089127778.png",alt:"drawing",width:"60%"}),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Configuring the integration with Google calendar is straightforward. Follow the steps defined below to start integrating:"),Object(r.b)("h3",{id:"navigate-to-integrations-tab"},"Navigate to integrations tab"),Object(r.b)("p",null,"Inside your project, navigate to the integrations tab and then from the left side bar select Tools & Utilities, You will find Google Calendar."),Object(r.b)("img",{src:"https://cdn.yellowmessenger.com/M02XhZS2AFTl1649089328587.png",alt:"drawing",width:"60%"}),Object(r.b)("h3",{id:"connect-your-google-account"},"Connect your google account"),Object(r.b)("p",null,"Click on ",Object(r.b)("strong",{parentName:"p"},"Sign in with Google"),". After you click that, you will notice that you will be prompted to login to your google account, once you provide your login credentials, you have to click on ",Object(r.b)("strong",{parentName:"p"},"Allow")," in the consent screen."),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/WBu6CUgNfcbE1649089756563.gif",alt:null})),Object(r.b)("p",null,"Following the above steps will connect your Google calendar with yellow.ai platform."),Object(r.b)("p",null,"For more information about action nodes you use here, refer this ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/calendar/api/v3/reference/events/"},"doc")))}g.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},g=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=o,h=g["".concat(i,".").concat(d)]||g[d]||u[d]||r;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);