(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{372:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(446)),i=["components"],c={title:"Genesys Live Chat",sidebar_label:"Genesys Live Chat"},s={unversionedId:"platform_concepts/appConfiguration/genesys",id:"platform_concepts/appConfiguration/genesys",isDocsHomePage:!1,title:"Genesys Live Chat",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/genesys.md",slug:"/platform_concepts/appConfiguration/genesys",permalink:"/docs/platform_concepts/appConfiguration/genesys",version:"current",sidebar_label:"Genesys Live Chat",sidebar:"platform_concepts",previous:{title:"Genesys PureCloud Live Chat",permalink:"/docs/platform_concepts/appConfiguration/genesys-cloud-livechat"},next:{title:"Google Calendar",permalink:"/docs/platform_concepts/appConfiguration/google-calendar"}},l=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Use Case",id:"use-case",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Reference",id:"reference",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(a.b)("p",null,"Yellow.ai Integration with Genesys Live Chat allows you to seamlessly connect your genesys service with the yellow.ai platform."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note"),": We recommend this integration if you are using genesys on-prem solution otherwise you should use ",Object(a.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/appConfiguration/genesys-cloud-livechat/"},"genesys PureCloud")," integration as that would be the latest version from genesys"),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Inside your project, navigate to the Integrations tab and on the left side bar select ",Object(a.b)("strong",{parentName:"p"},"Live Chat"),". You will find Genesys Live Chat."),Object(a.b)("p",null,"You have to provide your genesys host and service name below to connect you genesys account with yellow.ai bot."),Object(a.b)("img",{src:"https://cdn.yellowmessenger.com/lmA1a7BUvJqj1663932328370.png",alt:"drawing",width:"100%"}),Object(a.b)("h3",{id:"use-case"},"Use Case"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In this integration you can use ",Object(a.b)("strong",{parentName:"li"},"raise ticket")," node to create a conversation with Genesys agent and once conversation initiates the user can talk to the agent.")),Object(a.b)("h3",{id:"limitations"},"Limitations"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Only text messages from both side is supported in this integration.")),Object(a.b)("h3",{id:"reference"},"Reference"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"},"API Documentation")))}u.isMDXComponent=!0},446:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||f[b]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);