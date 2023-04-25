"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[4755],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(s,".").concat(h)]||u[h]||f[h]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94657:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Microsoft Graph",sidebar_label:"Microsoft Graph"},s=void 0,l={unversionedId:"platform_concepts/appConfiguration/microsoft-graph",id:"platform_concepts/appConfiguration/microsoft-graph",title:"Microsoft Graph",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/microsoft-graph.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/microsoft-graph",permalink:"/docs/platform_concepts/appConfiguration/microsoft-graph",draft:!1,tags:[],version:"current",frontMatter:{title:"Microsoft Graph",sidebar_label:"Microsoft Graph"},sidebar:"platform_concepts",previous:{title:"LeadSquared Whatsapp Connector",permalink:"/docs/platform_concepts/appConfiguration/leadSquared-wa-connector"},next:{title:"Netcore Smartech",permalink:"/docs/platform_concepts/appConfiguration/netcore"}},p={},u=[{value:"Scope of Integration",id:"scope-of-integration",level:3},{value:"Use-cases",id:"use-cases",level:3},{value:"Get access tokens",id:"get-access-tokens",level:4},{value:"Configuration",id:"configuration",level:3},{value:"1. Navigate to Integrations Tab",id:"1-navigate-to-integrations-tab",level:4},{value:"2. Connect to Microsoft Graph",id:"2-connect-to-microsoft-graph",level:4},{value:"Supported Version",id:"supported-version",level:3}],f={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"scope-of-integration"},"Scope of Integration"),(0,a.kt)("p",null,"Yellow.ai Integration with Microsoft Graph allows you to seamlessly connect and use Microsoft\nGraph services with yellow.ai platform. Any customer who has an Azure Active Directory will be\nable to seamlessly connect and call Microsoft Graph APIs on yellow.ai platform. This connector\nwill enable users to get access tokens using action node which can then be used to call the\nGraph APIs."),(0,a.kt)("h3",{id:"use-cases"},"Use-cases"),(0,a.kt)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),(0,a.kt)("h4",{id:"get-access-tokens"},"Get access tokens"),(0,a.kt)("p",null,"Access tokens required to call the Graph APIs can be fetched using action nodes\nprovided in the integration. It should be noted that necessary permissions need to be\ngiven while registering the application on the Azure portal. For more details, please refer\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/graph/auth-v2-service"},"https://docs.microsoft.com/en-us/graph/auth-v2-service"),"."),(0,a.kt)("img",{src:"https://www.dropbox.com/s/1czxex1jx76le23/image1.png?raw=1",alt:"drawing",width:"60%"}),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Configuring the integration with Microsoft Graph is straight forward. Follow the steps defined\nbelow to start integrating:"),(0,a.kt)("h4",{id:"1-navigate-to-integrations-tab"},"1. Navigate to Integrations Tab"),(0,a.kt)("p",null,"Inside your project, navigate to the Configuration tab and then click on the Integrations\nTab. Search for Microsoft Graph."),(0,a.kt)("img",{src:"https://www.dropbox.com/s/dlo1br71882jf5v/image2.png?raw=1",alt:"drawing",width:"40%"}),(0,a.kt)("h4",{id:"2-connect-to-microsoft-graph"},"2. Connect to Microsoft Graph"),(0,a.kt)("p",null,"Click on Connect and enter the values in the fields from your Azure account. Once the\nvalues are given, the Microsoft Graph will be connected and the action node can be\nused to get the access token which can then be used to call Microsoft Graph APIs."),(0,a.kt)("img",{src:"https://www.dropbox.com/s/qqxql3vomvy75w2/image3.png?raw=1",alt:"drawing",width:"100%"}),(0,a.kt)("img",{src:"https://www.dropbox.com/s/z6kl9wk0vt9dq4i/image4.png?raw=1",alt:"drawing",width:"100%"}),(0,a.kt)("p",null,"Voila! And just like that, you are now connected and can call Microsoft Graph APIs."),(0,a.kt)("h3",{id:"supported-version"},"Supported Version"),(0,a.kt)("p",null,"This integration shall support latest version releases."),(0,a.kt)("p",null,"For more information, please refer to Microsoft Graph Documentation."))}h.isMDXComponent=!0}}]);