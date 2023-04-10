"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[2692],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95880:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],i={title:"Set up alerts for failures and issues",sidebar_label:"Health & alerts"},s=void 0,p={unversionedId:"platform_concepts/growth/health",id:"platform_concepts/growth/health",title:"Set up alerts for failures and issues",description:"Currently, only the Alerts tab is available with two pre-built alerts. The Health module and customizable Alert options are still under development.",source:"@site/docs/platform_concepts/growth/health.md",sourceDirName:"platform_concepts/growth",slug:"/platform_concepts/growth/health",permalink:"/docs/platform_concepts/growth/health",draft:!1,tags:[],version:"current",frontMatter:{title:"Set up alerts for failures and issues",sidebar_label:"Health & alerts"},sidebar:"platform_concepts",previous:{title:"Dashboards",permalink:"/docs/platform_concepts/growth/dashboards"},next:{title:"Goals",permalink:"/docs/platform_concepts/growth/goals"}},u={},c=[{value:"1. Alerts",id:"1-alerts",level:2},{value:"1.1 Enable default alerts",id:"11-enable-default-alerts",level:3}],m={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently, only the Alerts tab is available with two pre-built alerts. The Health module and customizable Alert options are still under development.")),(0,o.kt)("p",null,"The Health module allows you to monitor your bot's overall performance and set up alerts to receive email notifications for any issues or failures that occur."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"1-alerts"},"1. Alerts"),(0,o.kt)("p",null,"You can proactively monitor any failures or issues by creating alerts to notify you when set rules are met. For example, you can set(enable) an alert to receive a notification when the bot is down for more than 30 minutes."),(0,o.kt)("h3",{id:"11-enable-default-alerts"},"1.1 Enable default alerts"),(0,o.kt)("p",null,"Follow these steps to enable pre-configured alerts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("strong",{parentName:"p"},"Alerts")," section of ",(0,o.kt)("strong",{parentName:"p"},"Insights")," > ",(0,o.kt)("strong",{parentName:"p"},"Health"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Activate the toggle button for the required alert. There are two pre-configured alerts available:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"API failure"),": When enabled, an email notification will be sent if any APIs set up in Studio fail more than 5% in the last 7 days."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bot downtime"),". When enabled, an email notification will be sent if the bot is down for more than 30 minutes.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ivKNwXt.png",alt:null})),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The bot is pinged every minute to monitor its health. If a response is received, the bot is considered to be up (uptime). If the bot does not respond for more than 30 minutes, it is considered to be down (downtime).")))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add multiple recipients by typing their email addresses, hitting enter, and clicking ",(0,o.kt)("strong",{parentName:"p"},"Add"),".\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/psNzedR.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To modify the recipients, click Edit in the menu next to the Alert name and add or remove email IDs.\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/yOCs4D1.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When there is a failure or issue, an email alert will be sent to the recipients you entered. The time of the alert will be recorded in the ",(0,o.kt)("strong",{parentName:"p"},"Last fired")," column next to the alert name."))),(0,o.kt)("p",null,"With this setup, you can receive timely alerts and take action to address any issues or failures to ensure your bot's optimum performance."))}f.isMDXComponent=!0}}]);