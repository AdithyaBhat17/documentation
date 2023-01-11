"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[1770],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,d=p["".concat(l,".").concat(y)]||p[y]||f[y]||i;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},92488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],c={title:"Twilio Verify",sidebar_label:"Twilio Verify"},l=void 0,s={unversionedId:"platform_concepts/appConfiguration/twilio-verify",id:"platform_concepts/appConfiguration/twilio-verify",title:"Twilio Verify",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/twilio-verify.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/twilio-verify",permalink:"/docs/platform_concepts/appConfiguration/twilio-verify",draft:!1,tags:[],version:"current",frontMatter:{title:"Twilio Verify",sidebar_label:"Twilio Verify"},sidebar:"platform_concepts",previous:{title:"Talisma Livechat",permalink:"/docs/platform_concepts/appConfiguration/talisma"},next:{title:"WebEngage",permalink:"/docs/platform_concepts/appConfiguration/webengage"}},u={},p=[{value:"Scope of Integration",id:"scope-of-integration",level:2},{value:"Use Case",id:"use-case",level:2},{value:"Configuration",id:"configuration",level:2}],f={toc:p};function y(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"scope-of-integration"},"Scope of Integration"),(0,i.kt)("p",null,"Yellow.ai Integration with Twilio Verify allows you to seamlessly connect your Twilio Verify service with the yellow.ai platform. Any customer who has a Twilio account will be able to seamlessly connect their verify service with yellow.ai using basic auth with account SID, Auth Token and Verify Service SID. This connector will enable users to verify end user identity using OTP verification by means of SMS, call or email."),(0,i.kt)("h2",{id:"use-case"},"Use Case"),(0,i.kt)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),(0,i.kt)("p",null,"Simple Integration using credentials\nTo enable integration with Twilio verify, you need account SID, authentication token and verify service SID. You can get account SID, authentication token and verify service SID from twilio dashboard.\nTake actions with Twilio Verify nodes\nUsing the Twilio Verify integration nodes, you can send and verify OTP to the end user. You can choose the action node corresponding to the channel (SMS, call and email) via which you want to send the OTP. After choosing the appropriate action node, you need to enter the receiver to whom you want to send OTP. "),(0,i.kt)("p",null,"Then you need to ask the user for OTP to verify it. After that you need to create a Twilio Check Verification action node and provide values for receiver and OTP to verify if OTP provided by the user is correct. If it is correct, you\u2019ll get \u201cstatus\u201d: \u201capproved\u201d in response object."),(0,i.kt)("img",{src:"https://cdn.yellowmessenger.com/ShRydkPnrBdn1650956539555.png",alt:"drawing",width:"100%"}),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Configuring the integration with Twilio Verify is straightforward.\nFollow the steps defined below to start integrating:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to Integrations Tab:\nInside your project, navigate to the Configuration tab and then click on the Integrations Tab. Search for Twilio Verify.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect your Twilio Verify account:\nEnter the values for Account SID, Auth token and verify service SID to connect to your Twilio account.      "))),(0,i.kt)("p",null,"Voila! And just like that, you are now connected with your Twilio account."),(0,i.kt)("img",{src:"https://cdn.yellowmessenger.com/WbfFy3XnfBsZ1650956457836.png",alt:"drawing",width:"100%"}),(0,i.kt)("h1",{id:"reference"},"Reference"),(0,i.kt)("p",null,"This integration will support the latest version releases, latest one being v2"),(0,i.kt)("p",null,"API Documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://www.twilio.com/docs/verify"},"https://www.twilio.com/docs/verify")))}y.isMDXComponent=!0}}]);