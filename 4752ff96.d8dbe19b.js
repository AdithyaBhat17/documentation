(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(468)),i=["components"],c={title:"EPIC FHIR Integration",sidebar_label:"EPIC FHIR"},l={unversionedId:"platform_concepts/appConfiguration/epic-fhir",id:"platform_concepts/appConfiguration/epic-fhir",isDocsHomePage:!1,title:"EPIC FHIR Integration",description:"You can now integrate your app on Epic FHIR account with the Yellow.ai platform using OAuth. This will let your users access patient details, search for appointment slots, and book appointments.",source:"@site/docs/platform_concepts/appConfiguration/epic-fhir.md",slug:"/platform_concepts/appConfiguration/epic-fhir",permalink:"/docs/platform_concepts/appConfiguration/epic-fhir",version:"current",sidebar_label:"EPIC FHIR",sidebar:"platform_concepts",previous:{title:"Custom Live Agent API Specification",permalink:"/docs/platform_concepts/appConfiguration/customliveagent"},next:{title:"Freshchat",permalink:"/docs/platform_concepts/appConfiguration/freshchat"}},p=[{value:"1. Connect Yellow.ai with EPIC FHIR",id:"1-connect-yellowai-with-epic-fhir",children:[]},{value:"2. Use-Case",id:"2-use-case",children:[{value:"Supported Version",id:"supported-version",children:[]}]}],b={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can now integrate your app on ",Object(o.b)("a",{parentName:"p",href:"https://fhir.epic.com/"},"Epic FHIR")," account with the ",Object(o.b)("strong",{parentName:"p"},"Yellow.ai")," platform using OAuth. This will let your users access patient details, search for appointment slots, and book appointments."),Object(o.b)("h2",{id:"1-connect-yellowai-with-epic-fhir"},"1. Connect Yellow.ai with EPIC FHIR"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to your ",Object(o.b)("strong",{parentName:"li"},"Epic FHIR")," app and fetch the ",Object(o.b)("strong",{parentName:"li"},"Client ID")," and ",Object(o.b)("strong",{parentName:"li"},"Client Secret"),".")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/MGxkK8J.png",alt:null})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Go to your ",Object(o.b)("strong",{parentName:"li"},"Yellow.ai")," bot and click ",Object(o.b)("strong",{parentName:"li"},"Integrations")," in the module switcher.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/BmIVufB.png",alt:null})),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Search for ",Object(o.b)("strong",{parentName:"li"},"EPIC FHIR"),", fill in the ",Object(o.b)("strong",{parentName:"li"},"Client ID")," and ",Object(o.b)("strong",{parentName:"li"},"Client Secret")," and click ",Object(o.b)("strong",{parentName:"li"},"Connect to EPIC FHIR"),".")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/bHEXvm6.png",alt:null})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"Yellow.ai does not store the client\u2019s credentials. We use the OAuth 2.0 approach to integrate with the client\u2019s ",Object(o.b)("strong",{parentName:"li"},"Epic FHIR")," account. "),Object(o.b)("li",{parentName:"ol"},"This integration supports the STU3 version of API, so the  APIs based on the clients' use cases should be added while creating the ",Object(o.b)("strong",{parentName:"li"},"Epic")," app.")))),Object(o.b)("h2",{id:"2-use-case"},"2. Use-Case"),Object(o.b)("p",null,"You can retrieve patient data with patient ID and  demographics, view available appointment slots, book appointments and also fetch the appointment details of a patient."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys"},"Studio")," flow builder, select the ",Object(o.b)("strong",{parentName:"li"},"Integrations")," node and click ",Object(o.b)("strong",{parentName:"li"},"EPIC FHIR")," from the list of integrations that have been enabled for that bot.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/HlhkU2S.png",alt:null})),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"After clicking ",Object(o.b)("strong",{parentName:"li"},"EPIC FHIR"),",an ",Object(o.b)("strong",{parentName:"li"},"Integration Action Node")," will be added to the flow builder. When you click that node, you will see all the use-cases of this integration in a drop-down. Choose the one you want to use.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/KMIIA9d.png",alt:null})),Object(o.b)("p",null,"The following table describes the use-case values in detail:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Node Name"),Object(o.b)("th",{parentName:"tr",align:null},"Functionality"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Fetch patient information"),Object(o.b)("td",{parentName:"tr",align:null},"Fetch patient information from patient ID")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Fetch patient diagnostic information"),Object(o.b)("td",{parentName:"tr",align:null},"Fetch patient diagnostic information from patient ID")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Fetch patient demographics"),Object(o.b)("td",{parentName:"tr",align:null},"Fetch patient information using the patient's date of birth and name")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Fetch appointment slots"),Object(o.b)("td",{parentName:"tr",align:null},"Fetch available appointment slots")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Book appointments"),Object(o.b)("td",{parentName:"tr",align:null},"Book appointments with the available appointment ID from fetch appointment slots use case")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Fetch patient appointment details"),Object(o.b)("td",{parentName:"tr",align:null},"Fetch the appointment details of a patient from the patient ID")))),Object(o.b)("h3",{id:"supported-version"},"Supported Version"),Object(o.b)("p",null,"This integration will support STU3 version releases. For more information, click ",Object(o.b)("a",{parentName:"p",href:"https://fhir.epic.com/Specifications"},"here"),"."))}s.isMDXComponent=!0},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),u=a,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);