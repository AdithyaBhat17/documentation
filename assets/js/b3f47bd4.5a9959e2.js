"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[9680],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={title:"Debug your bot flows",sidebar_label:"Debug bot flows"},s=void 0,p={unversionedId:"platform_concepts/studio/test-and-publish-bot/debug-flow",id:"platform_concepts/studio/test-and-publish-bot/debug-flow",title:"Debug your bot flows",description:"When automating conversations, there can be cases of errors in flows.",source:"@site/docs/platform_concepts/studio/test-and-publish-bot/debug-flow.md",sourceDirName:"platform_concepts/studio/test-and-publish-bot",slug:"/platform_concepts/studio/test-and-publish-bot/debug-flow",permalink:"/docs/platform_concepts/studio/test-and-publish-bot/debug-flow",draft:!1,tags:[],version:"current",frontMatter:{title:"Debug your bot flows",sidebar_label:"Debug bot flows"},sidebar:"platform_concepts",previous:{title:"Regression Tests on Cloud",permalink:"/docs/cookbooks/studio/regressiontest"},next:{title:"Publish your bot",permalink:"/docs/platform_concepts/studio/test-and-publish-bot/modes"}},u={},c=[{value:"1. Flow based errors",id:"1-flow-based-errors",level:2},{value:"2. Data type based errors",id:"2-data-type-based-errors",level:2},{value:"2.1 Review the datatype of a variable",id:"21-review-the-datatype-of-a-variable",level:3},{value:"2.2 Review the datatype of a database column",id:"22-review-the-datatype-of-a-database-column",level:3},{value:"3. Code based errors",id:"3-code-based-errors",level:2},{value:"3.1 View code logs",id:"31-view-code-logs",level:3},{value:"3.2 Set up a test function",id:"32-set-up-a-test-function",level:3},{value:"4. Test APIs",id:"4-test-apis",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When automating conversations, there can be cases of errors in flows."),(0,r.kt)("p",null,"It could be because of -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A logical error in a flow"),(0,r.kt)("li",{parentName:"ul"},"A syntax or datatype mismatch"),(0,r.kt)("li",{parentName:"ul"},"Missing or null values in mandatory fields")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are unable to identify the issue, please reach out to us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@yellow.ai"},"support@yellow.ai"),".")),(0,r.kt)("p",null,"In this article we have mentioned some commonly observed errors and how to resolve them"),(0,r.kt)("h2",{id:"1-flow-based-errors"},"1. Flow based errors"),(0,r.kt)("p",null,"If you observe that some nodes are not getting executed, try out the following."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Adding a Text node")," with a testing message to the flow BEFORE and AFTER the node is executed. ",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Example: Printing the email input taken from the user right after the email node to test if it's working as intended.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/uaTNNnb.png",alt:null}))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Using our Debug feature")," to view at which step of the flow the bot stopped working.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/DFIOz4S.png",alt:null}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Breaking down flows")," to smaller sections to execute just a specific part.\nYou can make use of the ",(0,r.kt)("strong",{parentName:"p"},"Cloning")," feature to duplicate your flow and try executing a specific section of your flow. "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"In the example, we broke a big flow into a couple of nodes.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/1yGyOP0.png",alt:null}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/AtSm1pE.png",alt:null}))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"2-data-type-based-errors"},"2. Data type based errors"),(0,r.kt)("p",null,"Another frequent occurence when some variables are created in one data type (number), but passed as 'String'."),(0,r.kt)("p",null,"This can happen at a function/user input level and Database record insertion level."),(0,r.kt)("h3",{id:"21-review-the-datatype-of-a-variable"},"2.1 Review the datatype of a variable"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open up the Variables section"),(0,r.kt)("li",{parentName:"ol"},"Review the data type and cross reference if it matches the input being passed\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/LUBTtG7.jpg",alt:null}))),(0,r.kt)("h3",{id:"22-review-the-datatype-of-a-database-column"},"2.2 Review the datatype of a database column"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open up the table you're trying to review."),(0,r.kt)("li",{parentName:"ol"},"Click on the dropdown Table Actions."),(0,r.kt)("li",{parentName:"ol"},"Click Edit Table and you'll be able to review the data types of each column.\n",(0,r.kt)("img",{parentName:"li",src:"https://i.imgur.com/GPuVb6i.png",alt:null}))),(0,r.kt)("h2",{id:"3-code-based-errors"},"3. Code based errors"),(0,r.kt)("p",null,"We love our no-code/low-code solutions, but sometimes you need to run your own functions to come full circle with the end user's experience. "),(0,r.kt)("h3",{id:"31-view-code-logs"},"3.1 View code logs"),(0,r.kt)("p",null,"We have a code logs section on our platform as well. Go to the ",(0,r.kt)("strong",{parentName:"p"},"Code")," section and click on ",(0,r.kt)("strong",{parentName:"p"},"Logs"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/G3KmhjT.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/HIoj1CF.png",alt:null})),(0,r.kt)("p",null,"For example, you want to debug a specific function in your flow to see the output you're getting."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can set up the function such that it prints some text along with the data you'd like to check."),(0,r.kt)("li",{parentName:"ul"},"Click on the actual logs inside the Logs section."),(0,r.kt)("li",{parentName:"ul"},"Press ",(0,r.kt)("strong",{parentName:"li"},"ctrl/cmd + F"),"  to open Search box where you can check if the console is printing the log.")),(0,r.kt)("h3",{id:"32-set-up-a-test-function"},"3.2 Set up a test function"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/4yhYCxg.png",alt:null})),(0,r.kt)("p",null,"Once the function gets executed, we can review the logs to see if we're getting the output."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/69J9LYp.png",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There is a difference between the logs of the bot and the logs of your browser.")),(0,r.kt)("h2",{id:"4-test-apis"},"4. Test APIs"),(0,r.kt)("p",null,"You can test APIs either in the API management page or within the flow."),(0,r.kt)("p",null,"To test it within a flow"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"API node")," you wish to test.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/CAoQX2H.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Test")," and enter the mandatory fields.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/yQ32pAi.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Run")," and review your output.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/JKkWtPF.png",alt:null})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can share your learnings or issues on our ",(0,r.kt)("a",{parentName:"p",href:"https://community.yellow.ai/"},"Community"))))}d.isMDXComponent=!0}}]);