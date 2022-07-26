(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(394)),i=["components"],l={title:"How to debug your bot",sidebar_label:"Debugging"},c={unversionedId:"platform_concepts/studio/test-and-publish-bot/debug-flow",id:"platform_concepts/studio/test-and-publish-bot/debug-flow",isDocsHomePage:!1,title:"How to debug your bot",description:"Debugging flows",source:"@site/docs/platform_concepts/studio/test-and-publish-bot/debug-flow.md",slug:"/platform_concepts/studio/test-and-publish-bot/debug-flow",permalink:"/docs/platform_concepts/studio/test-and-publish-bot/debug-flow",version:"current",sidebar_label:"Debugging",sidebar:"platform_concepts",previous:{title:"How to train a bot?",permalink:"/docs/platform_concepts/studio/test-and-publish-bot/bot-training"},next:{title:"Publish your Bot",permalink:"/docs/platform_concepts/studio/test-and-publish-bot/modes"}},s=[{value:"Flow based errors",id:"flow-based-errors",children:[]},{value:"Data type based errors",id:"data-type-based-errors",children:[{value:"How to review the datatype of a variable",id:"how-to-review-the-datatype-of-a-variable",children:[]},{value:"How to review datatype of a database column",id:"how-to-review-datatype-of-a-database-column",children:[]}]},{value:"Code based errors",id:"code-based-errors",children:[{value:"Setting up a test function",id:"setting-up-a-test-function",children:[]}]},{value:"Testing out APIs",id:"testing-out-apis",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"debugging-flows"},"Debugging flows"),Object(r.b)("p",null,"When we try to automate world class conversations, there can be a couple of bumps along the way.\nIt could be:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A logical error with in the flow"),Object(r.b)("li",{parentName:"ul"},"A syntax/datatype mismatch"),Object(r.b)("li",{parentName:"ul"},"Missing/null values being passed in mandatory fields"),Object(r.b)("li",{parentName:"ul"},"There's no such thing as perfection and sometimes we fall into the same pit with our platform. Please reach out to us at ",Object(r.b)("a",{parentName:"li",href:"mailto:support@yellow.ai"},"support@yellow.ai")," if this is the case.")),Object(r.b)("p",null,"Let's go through some of the commonly observed errors and how to go about resolving them"),Object(r.b)("h2",{id:"flow-based-errors"},"Flow based errors"),Object(r.b)("p",null,"Occasionally you see that some nodes itself are not getting executed. In such a scenario you can try"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Adding a Text node")," with a testing message to the flow BEFORE and AFTER the node is executed. In this example, I'm printing the email input taken from the user right after the email node to test if it's working as intended.\n",Object(r.b)("img",{parentName:"li",src:"https://i.imgur.com/uaTNNnb.png",alt:null}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Using our Debug feature")," to view which part of the bot journey the bot stopped working at\n",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/TgheKdy.png",alt:null}))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Breaking down flows"),' to smaller sections to execute just a specific part\nYou can make use of our "Cloning" feature to duplicate your flow and try executing a specific section of your flow. In this case, we broke a giant flow into just a couple of nodes. '),Object(r.b)("h2",{parentName:"li",id:""},Object(r.b)("img",{parentName:"h2",src:"https://i.imgur.com/NN6LJgV.png",alt:null})),Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/AtSm1pE.png",alt:null})))),Object(r.b)("h2",{id:"data-type-based-errors"},"Data type based errors"),Object(r.b)("p",null,"A frequent occurence spotted is when some variables are created in one data type(number), but we end up passing a string into it."),Object(r.b)("p",null,"This can happen at a Function/User input level and a Database record insertion level."),Object(r.b)("h3",{id:"how-to-review-the-datatype-of-a-variable"},"How to review the datatype of a variable"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open up the Variables section"),Object(r.b)("li",{parentName:"ul"},"Review the data type and cross reference if it matches the input being passed\n",Object(r.b)("img",{parentName:"li",src:"https://i.imgur.com/NGtgO9h.png",alt:null}))),Object(r.b)("h3",{id:"how-to-review-datatype-of-a-database-column"},"How to review datatype of a database column"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open up the table you're trying to review."),Object(r.b)("li",{parentName:"ul"},"Click on the dropdown Table Actions."),Object(r.b)("li",{parentName:"ul"},"Click Edit Table and you'll be able to review the data types of each column."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("img",{parentName:"li",src:"https://i.imgur.com/9eRg9cY.png",alt:null}))),Object(r.b)("h2",{id:"code-based-errors"},"Code based errors"),Object(r.b)("p",null,"We love our no-code/low-code solutions, but sometimes you need to run your own functions to come full circle with the end user's experience. "),Object(r.b)("p",null,"We have a code logs section on our platform as well. Simply head over to the Code section and click on this\n",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/f1qkzes.png",alt:null})),Object(r.b)("hr",null),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/HIoj1CF.png",alt:null})),Object(r.b)("p",null,"Let's say you want to debug a specific function in your flow to see the output you're getting."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can set up the function such that it prints some text along with the data you'd like to check."),Object(r.b)("li",{parentName:"ul"},"Click on the actual logs inside the Logs section"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"ctrl/cmd + F")," -> Will open up a search box where you can check if the console is printing the log")),Object(r.b)("h3",{id:"setting-up-a-test-function"},"Setting up a test function"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/4yhYCxg.png",alt:null})),Object(r.b)("p",null,"Once the function gets executed, we can review the logs to see if we're getting the output"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/69J9LYp.png",alt:null})),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Note:\nThere is a difference between the logs of the bot and the logs of your browser.\n")),Object(r.b)("h2",{id:"testing-out-apis"},"Testing out APIs"),Object(r.b)("p",null,"APIs can be tested out in both the API management page as well as within the flow"),Object(r.b)("p",null,"To test it out within a flow"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to the ",Object(r.b)("strong",{parentName:"p"},"API node")," you wish to test\n",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/CAoQX2H.png",alt:null}))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on Test and enter the mandatory fields\n",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/yQ32pAi.png",alt:null}))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on Run and review your output\n",Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/JKkWtPF.png",alt:null})))),Object(r.b)("hr",null),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Learn and share alongside great minds over at https://community.yellow.ai/\n")),Object(r.b)("p",null,"Happy bot building!!"))}b.isMDXComponent=!0},394:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||r;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);