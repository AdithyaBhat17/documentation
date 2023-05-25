"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[93656],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5109:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),s=["components"],i={sidebar_label:"Function & APIs related use cases",title:"Functions & API related use cases"},l=void 0,c={unversionedId:"cookbooks/studio/storeApiResponse",id:"cookbooks/studio/storeApiResponse",title:"Functions & API related use cases",description:"Store API response in a variable",source:"@site/docs/cookbooks/studio/storeApiResponse.md",sourceDirName:"cookbooks/studio",slug:"/cookbooks/studio/storeApiResponse",permalink:"/docs/cookbooks/studio/storeApiResponse",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Function & APIs related use cases",title:"Functions & API related use cases"},sidebar:"cookbooks",previous:{title:"Display images for different languages",permalink:"/docs/cookbooks/studio/images-languages"},next:{title:"EdTech template",permalink:"/docs/cookbooks/marketplace-templates/edtech-template"}},p={},u=[{value:"Store API response in a variable",id:"store-api-response-in-a-variable",level:2},{value:"How can I store all the values of an API response as an object and use them in different nodes?",id:"how-can-i-store-all-the-values-of-an-api-response-as-an-object-and-use-them-in-different-nodes",level:4}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"store-api-response-in-a-variable"},"Store API response in a variable"),(0,a.kt)("h4",{id:"how-can-i-store-all-the-values-of-an-api-response-as-an-object-and-use-them-in-different-nodes"},"How can I store all the values of an API response as an object and use them in different nodes?"),(0,a.kt)("p",null,"You can store the response as an object using the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const response = {\n  "school": "School Name",\n  "address": "123 Main Street",\n  "city": "Anytown",\n  "state": "CA",\n  "zip code": "91234"\n};\n')),(0,a.kt)("p",null,"You can then access the values in the object using the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'return  new  Promise(resolve => { \n    const { apiResponse } = ymLib.args; \n    let { body } = apiResponse \n    body = JSON.parse(body) \n    console.log(body, "apiresponse in test") \n    let { school } = body; \n    resolve(school); });\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If the variable is a string type, to store the variable in the property ",(0,a.kt)("inlineCode",{parentName:"li"},"school")," you will need to use the property like this:  ",(0,a.kt)("inlineCode",{parentName:"li"},"{{{variables.school}}}")),(0,a.kt)("li",{parentName:"ol"},"If the variable is an object, you will need to use the dot notation to access the property, like this: ",(0,a.kt)("inlineCode",{parentName:"li"},"{{{variables.school.name}}}"),".")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"console.log()")," function to check the value of the variable in the logs. This will help you to debug the issue."),(0,a.kt)("li",{parentName:"ul"},"If you are debugging an API call and you are not seeing the data that you expect, it is possible that the response is missing a body. In this case, you will need to parse the response body in order to access the data."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Checklist")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Make sure that the API call is successful. You can check this by inspecting the response in the developer tools."),(0,a.kt)("li",{parentName:"ol"},"Make sure that the response is stored in the appropriate variable. You can check this by inspecting the variable in the developer tools."),(0,a.kt)("li",{parentName:"ol"},"Make sure that the response is being parsed correctly. You can check this by inspecting the response object in the developer tools.")))}h.isMDXComponent=!0}}]);