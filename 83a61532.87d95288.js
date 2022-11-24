(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{264:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var o=r(3),n=r(7),a=(r(0),r(452)),i=["components"],c={title:"How do I retrieve Database data inside a bot flow?",sidebar_label:"Retrieve Database data inside a flow"},s={unversionedId:"cookbooks/studio/retriev-dbinfo",id:"cookbooks/studio/retriev-dbinfo",isDocsHomePage:!1,title:"How do I retrieve Database data inside a bot flow?",description:"1. Insert a Database node in your flow.",source:"@site/docs/cookbooks/studio/retriev-dbinfo.md",slug:"/cookbooks/studio/retriev-dbinfo",permalink:"/docs/cookbooks/studio/retriev-dbinfo",version:"current",sidebar_label:"Retrieve Database data inside a flow",sidebar:"cookbooks",previous:{title:"How to trigger a flow when a user clicks on a Whatsapp Template response?",permalink:"/docs/cookbooks/studio/trigger-whatsappresponse"},next:{title:"How do I format the text across channels?",permalink:"/docs/cookbooks/studio/text-format"}},l=[],b={toc:l};function p(e){var t=e.components,r=Object(n.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database"},"Insert a Database node")," in your flow."),Object(a.b)("li",{parentName:"ol"},"In the Database node, set the ",Object(a.b)("strong",{parentName:"li"},"Select type")," as ",Object(a.b)("strong",{parentName:"li"},"Search"),", select the table that contains the details and set the filter based on which the search action should be performed.")),Object(a.b)("img",{src:"https://i.imgur.com/4gP0X0w.png",width:"100%"}),Object(a.b)("ol",{start:3},Object(a.b)("li",{parentName:"ol"},"Click the ",Object(a.b)("strong",{parentName:"li"},"Select Variable")," option at the bottom right corner and create a new variable. All the information in your database will now be stored in this variable. Use this code snippet ",Object(a.b)("strong",{parentName:"li"},"{{{variables.dbResponse.record.0.fieldName}}}")," in your flows to retrieve a specific set of data.")))}p.isMDXComponent=!0},452:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(r),u=o,f=p["".concat(i,".").concat(u)]||p[u]||d[u]||a;return r?n.a.createElement(f,c(c({ref:t},l),{},{components:r})):n.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);