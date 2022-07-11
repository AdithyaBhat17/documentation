(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{260:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),i=(n(0),n(385)),a=["components"],c={title:"Twilio Verify",sidebar_label:"Twilio Verify"},l={unversionedId:"platform_concepts/appConfiguration/twilio-verify",id:"platform_concepts/appConfiguration/twilio-verify",isDocsHomePage:!1,title:"Twilio Verify",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/twilio-verify.md",slug:"/platform_concepts/appConfiguration/twilio-verify",permalink:"/docs/platform_concepts/appConfiguration/twilio-verify",version:"current",sidebar_label:"Twilio Verify",sidebar:"platform_concepts",previous:{title:"Stripe Payment",permalink:"/docs/platform_concepts/appConfiguration/stripe"},next:{title:"SuccessFactors Integration",permalink:"/docs/platform_concepts/appConfiguration/successfactors"}},s=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Use Case",id:"use-case",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,a);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(i.b)("p",null,"Yellow.ai Integration with Twilio Verify allows you to seamlessly connect your Twilio Verify service with the yellow.ai platform. Any customer who has a Twilio account will be able to seamlessly connect their verify service with yellow.ai using basic auth with account SID, Auth Token and Verify Service SID. This connector will enable users to verify end user identity using OTP verification by means of SMS, call or email."),Object(i.b)("h2",{id:"use-case"},"Use Case"),Object(i.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(i.b)("p",null,"Simple Integration using credentials\nTo enable integration with Twilio verify, you need account SID, authentication token and verify service SID. You can get account SID, authentication token and verify service SID from twilio dashboard.\nTake actions with Twilio Verify nodes\nUsing the Twilio Verify integration nodes, you can send and verify OTP to the end user. You can choose the action node corresponding to the channel (SMS, call and email) via which you want to send the OTP. After choosing the appropriate action node, you need to enter the receiver to whom you want to send OTP. "),Object(i.b)("p",null,"Then you need to ask the user for OTP to verify it. After that you need to create a Twilio Check Verification action node and provide values for receiver and OTP to verify if OTP provided by the user is correct. If it is correct, you\u2019ll get \u201cstatus\u201d: \u201capproved\u201d in response object."),Object(i.b)("img",{src:"https://cdn.yellowmessenger.com/ShRydkPnrBdn1650956539555.png",alt:"drawing",width:"100%"}),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Configuring the integration with Twilio Verify is straightforward.\nFollow the steps defined below to start integrating:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Navigate to Integrations Tab:\nInside your project, navigate to the Configuration tab and then click on the Integrations Tab. Search for Twilio Verify.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Connect your Twilio Verify account:\nEnter the values for Account SID, Auth token and verify service SID to connect to your Twilio account.      "))),Object(i.b)("p",null,"Voila! And just like that, you are now connected with your Twilio account."),Object(i.b)("img",{src:"https://cdn.yellowmessenger.com/WbfFy3XnfBsZ1650956457836.png",alt:"drawing",width:"100%"}),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("p",null,"This integration will support the latest version releases, latest one being v2"),Object(i.b)("p",null,"API Documentation: ",Object(i.b)("a",{parentName:"p",href:"https://www.twilio.com/docs/verify"},"https://www.twilio.com/docs/verify")))}p.isMDXComponent=!0},385:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,y=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return n?r.a.createElement(y,c(c({ref:t},s),{},{components:n})):r.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);