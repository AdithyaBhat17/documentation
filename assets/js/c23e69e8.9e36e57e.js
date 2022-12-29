"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[4677],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||g[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38810:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"Google Calendar",sidebar_label:"Google Calendar"},c=void 0,s={unversionedId:"platform_concepts/appConfiguration/google-calendar",id:"platform_concepts/appConfiguration/google-calendar",title:"Google Calendar",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/google-calendar.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/google-calendar",permalink:"/docs/platform_concepts/appConfiguration/google-calendar",draft:!1,tags:[],version:"current",frontMatter:{title:"Google Calendar",sidebar_label:"Google Calendar"},sidebar:"platform_concepts",previous:{title:"Genesys Live Chat",permalink:"/docs/platform_concepts/appConfiguration/genesys"},next:{title:"Google Sheets",permalink:"/docs/platform_concepts/appConfiguration/google-sheets"}},u={},p=[{value:"Scope of Integration",id:"scope-of-integration",level:2},{value:"Use-cases",id:"use-cases",level:2},{value:"Simple integration with Oauth",id:"simple-integration-with-oauth",level:3},{value:"Do actions with google calendar action nodes",id:"do-actions-with-google-calendar-action-nodes",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Navigate to integrations tab",id:"navigate-to-integrations-tab",level:3},{value:"Connect your google account",id:"connect-your-google-account",level:3}],g={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"scope-of-integration"},"Scope of Integration"),(0,r.kt)("p",null,"Yellow.ai Integration with Google Calendar enables you to seamlessly access google calendar services. Any customer who has a google account will be able to connect with yellow.ai using OAuth. Using this integration you can create, read events and also you can search for the busy time slots of the person and this can help you to create events according to it."),(0,r.kt)("h2",{id:"use-cases"},"Use-cases"),(0,r.kt)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),(0,r.kt)("h3",{id:"simple-integration-with-oauth"},"Simple integration with Oauth"),(0,r.kt)("p",null,"Google calendar integration with yellow.ai happens through the Oauth 2.0 approach.\nWhile integrating, yellow.ai navigates the user to the login page of Google, user has to login into his google account and has to provide his consent to access his calendar data."),(0,r.kt)("h3",{id:"do-actions-with-google-calendar-action-nodes"},"Do actions with google calendar action nodes"),(0,r.kt)("p",null,"You can create a new calendar event by specifying the timings, event title, description etc.. You can check the time slots of the person where you get busy time slots of the person and can create the event accordingly."),(0,r.kt)("p",null,"You can also read the calendar event with the event id to get the updates of that event."),(0,r.kt)("img",{src:"https://cdn.yellowmessenger.com/veE7Ulzsxzjw1649088649948.png",alt:"drawing",width:"60%"}),(0,r.kt)("img",{src:"https://cdn.yellowmessenger.com/yy0eWx9HVl8u1649089127778.png",alt:"drawing",width:"60%"}),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Configuring the integration with Google calendar is straightforward. Follow the steps defined below to start integrating:"),(0,r.kt)("h3",{id:"navigate-to-integrations-tab"},"Navigate to integrations tab"),(0,r.kt)("p",null,"Inside your project, navigate to the integrations tab and then from the left side bar select Tools & Utilities, You will find Google Calendar."),(0,r.kt)("img",{src:"https://cdn.yellowmessenger.com/M02XhZS2AFTl1649089328587.png",alt:"drawing",width:"60%"}),(0,r.kt)("h3",{id:"connect-your-google-account"},"Connect your google account"),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"Sign in with Google"),". After you click that, you will notice that you will be prompted to login to your google account, once you provide your login credentials, you have to click on ",(0,r.kt)("strong",{parentName:"p"},"Allow")," in the consent screen."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/WBu6CUgNfcbE1649089756563.gif",alt:null})),(0,r.kt)("p",null,"Following the above steps will connect your Google calendar with yellow.ai platform."),(0,r.kt)("p",null,"For more information about action nodes you use here, refer this ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/calendar/api/v3/reference/events/"},"doc")))}d.isMDXComponent=!0}}]);