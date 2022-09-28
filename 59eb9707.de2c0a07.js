(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(436)),i=["components"],c={title:"WebEngage",sidebar_label:"WebEngage"},s={unversionedId:"platform_concepts/appConfiguration/webengage",id:"platform_concepts/appConfiguration/webengage",isDocsHomePage:!1,title:"WebEngage",description:"Yellow.ai integration with WebEngage allows you to seamlessly send WhatsApp campaigns to your customers. Any business user who has a WebEngage account can simply login to their WebEngage account, choose Yellow.ai as their WSP (WhatsApp Service Provider). Provide the API key to setup the configuration, upload the audience list and initiate the whatsapp campaign.",source:"@site/docs/platform_concepts/appConfiguration/webengage.md",slug:"/platform_concepts/appConfiguration/webengage",permalink:"/docs/platform_concepts/appConfiguration/webengage",version:"current",sidebar_label:"WebEngage",sidebar:"platform_concepts",previous:{title:"SuccessFactors Integration",permalink:"/docs/platform_concepts/appConfiguration/successfactors"},next:{title:"Zalo",permalink:"/docs/platform_concepts/appConfiguration/zalo"}},l=[{value:"1. Use case",id:"1-use-case",children:[]},{value:"2. Configuration",id:"2-configuration",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Yellow.ai integration with WebEngage allows you to seamlessly send WhatsApp campaigns to your customers. Any business user who has a WebEngage account can simply login to their WebEngage account, choose Yellow.ai as their WSP (WhatsApp Service Provider). Provide the API key to setup the configuration, upload the audience list and initiate the whatsapp campaign.\nYellow.ai uses its notification engine service to run the whatsapp campaign based on the events received from WebEngage. The notification delivery status report is sent to WebEngage by invoking their static REST endpoint."),Object(r.b)("p",null,"In this article, you will learn how to integrate WebEngage on yellow cloud platform. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Detailed workflow")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/WwPMRiq.png",alt:null})),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"While using a bot of app.yellow.ai, navigate to the Data explorer section in the Growth Module, which will redirect you to the cloud.yellow.ai UI.\nAfter that, you can move to the Integrations section and search for WebEngage to get the instructions."))),Object(r.b)("h2",{id:"1-use-case"},"1. Use case"),Object(r.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Take actions with WebEngage nodes"),": You can send the delivery status report of the notification sent by using the Delivery Report Action Nodes. There are two action nodes, one for India Region and the other for US Region. The selection of action nodes is conditional(based on the country code received from WebEngage\u2019s end. If the country code is IN, the Delivery Report India Region action node needs to be used, else the US Region action node needs to be used).")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/mQMa9Rf.png",alt:null})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Receive events"),": On sending the WhatsApp notification using yellow.ai\u2019s notification engine service, an event is received stating the details of the delivery report.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/pjv3C2I.png",alt:null})),Object(r.b)("h2",{id:"2-configuration"},"2. Configuration"),Object(r.b)("p",null,"Configuring the integration with WebEngage is straightforward. Follow the steps below to integrate WebEngage:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"From the switcher, click on the ",Object(r.b)("strong",{parentName:"li"},"Integrations"),". ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/HeM0vYn.jpg",alt:null})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Search for ",Object(r.b)("strong",{parentName:"li"},"WebEngage"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/atOZEPJ.png",alt:null})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Provide the ",Object(r.b)("strong",{parentName:"li"},"API key")," from the description. Click ",Object(r.b)("strong",{parentName:"li"},"Connect")," to see the list of instructions provided in the description card and then click ",Object(r.b)("strong",{parentName:"li"},"Update")," to enable the integration.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/jIyp5pO.jpg",alt:null})))}b.isMDXComponent=!0},436:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),g=a,d=b["".concat(i,".").concat(g)]||b[g]||u[g]||r;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);