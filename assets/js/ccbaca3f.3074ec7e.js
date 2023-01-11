"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[2135],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,y=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23769:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Genesys Live Chat",sidebar_label:"Genesys Live Chat"},c=void 0,l={unversionedId:"platform_concepts/appConfiguration/genesys",id:"platform_concepts/appConfiguration/genesys",title:"Genesys Live Chat",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/genesys.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/genesys",permalink:"/docs/platform_concepts/appConfiguration/genesys",draft:!1,tags:[],version:"current",frontMatter:{title:"Genesys Live Chat",sidebar_label:"Genesys Live Chat"},sidebar:"platform_concepts",previous:{title:"Freshteam",permalink:"/docs/platform_concepts/appConfiguration/freshteam"},next:{title:"Genesys PureCloud Live Chat",permalink:"/docs/platform_concepts/appConfiguration/genesys-cloud-livechat"}},u={},p=[{value:"Scope of Integration",id:"scope-of-integration",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Use Case",id:"use-case",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Reference",id:"reference",level:3}],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"scope-of-integration"},"Scope of Integration"),(0,a.kt)("p",null,"Yellow.ai Integration with Genesys Live Chat allows you to seamlessly connect your genesys service with the yellow.ai platform."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": We recommend this integration if you are using genesys on-prem solution otherwise you should use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/appConfiguration/genesys-cloud-livechat/"},"genesys PureCloud")," integration as that would be the latest version from genesys"),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Inside your project, navigate to the Integrations tab and on the left side bar select ",(0,a.kt)("strong",{parentName:"p"},"Live Chat"),". You will find Genesys Live Chat."),(0,a.kt)("p",null,"You have to provide your genesys host and service name below to connect you genesys account with yellow.ai bot."),(0,a.kt)("img",{src:"https://cdn.yellowmessenger.com/lmA1a7BUvJqj1663932328370.png",alt:"drawing",width:"100%"}),(0,a.kt)("h3",{id:"use-case"},"Use Case"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In this integration you can use ",(0,a.kt)("strong",{parentName:"li"},"raise ticket")," node to create a conversation with Genesys agent and once conversation initiates the user can talk to the agent.")),(0,a.kt)("h3",{id:"limitations"},"Limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only text messages from both side is supported in this integration.")),(0,a.kt)("h3",{id:"reference"},"Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"},"API Documentation")))}m.isMDXComponent=!0}}]);