(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{282:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(445)),o=["components"],l={title:"User inactivity",sidebar_label:"User inactivity"},c={unversionedId:"platform_concepts/studio/events/user-inactive",id:"platform_concepts/studio/events/user-inactive",isDocsHomePage:!1,title:"User inactivity",description:"Sometimes, when a user is asked for an input, we might not get a response and would like to nudge them to share a response, otherwise the bot flow cannot move forward.",source:"@site/docs/platform_concepts/studio/events/user-inactive.md",slug:"/platform_concepts/studio/events/user-inactive",permalink:"/docs/platform_concepts/studio/events/user-inactive",version:"current",sidebar_label:"User inactivity"},s=[{value:"Use-cases",id:"use-cases",children:[]},{value:"Handling inactivity",id:"handling-inactivity",children:[]},{value:"Setup",id:"setup",children:[{value:"Configure",id:"configure",children:[]},{value:"Types of responses",id:"types-of-responses",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes, when a user is asked for an input, we might not get a response and would like to nudge them to share a response, otherwise the bot flow cannot move forward."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Eg: You have asked user for their email address and they haven't shared it. You would like to ask the user if they're still available by their device or have they dropped off.")),Object(i.b)("h2",{id:"use-cases"},"Use-cases"),Object(i.b)("p",null,"We treat a user as inactive when a prompt is asked from them, like:-"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Please share your email-ID"),Object(i.b)("li",{parentName:"ul"},"Please select one of the options (Quick reply/Whatsapp List)"),Object(i.b)("li",{parentName:"ul"},"What is your name?")),Object(i.b)("p",null,"If there is no response to such a prompt, we can trigger the Inactivity event"),Object(i.b)("h2",{id:"handling-inactivity"},"Handling inactivity"),Object(i.b)("p",null,"We can handle inactivity in different ways depending on the conversational design and tone in which the flow moves forward in. A few methods are:-"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Sending a message asking the user if they are still active or not."),Object(i.b)("li",{parentName:"ul"},"Sending the above message followed by repeating the input requested for."),Object(i.b)("li",{parentName:"ul"},"Triggering a whole new journey for inactivity.")),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("p",null,"This is a ",Object(i.b)("a",{parentName:"p",href:"https://cloud.yellow.ai/marketplace/d18654cb9537eeaf11c7511aff8f9bfe"},"lead generation template")," that's available in the ",Object(i.b)("strong",{parentName:"p"},"Marketplace"),Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/RHprZir.png",alt:null})),Object(i.b)("p",null,"We take the following inputs from the users:-"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Email-id"),Object(i.b)("li",{parentName:"ul"},"Product of interest")),Object(i.b)("p",null,"then, we insert the data into a Table which can be considered as a lead. "),Object(i.b)("p",null,"Here, we wouldn't want the user to drop off just because they haven't entered their email-id. So if we see that the user is inactive for more than 5mins, we can ping them for their email-id once more."),Object(i.b)("h3",{id:"configure"},"Configure"),Object(i.b)("p",null,"All user inactivity events have to be created in the same way"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go over to User Inactivtiy Event",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/tKXrkjl.png",alt:null}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Add an event\nHere, You can set the amount of time taken for the event to be identified as inactive in both minutes and hours",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/wqZPD1E.png",alt:null})))),Object(i.b)("h3",{id:"types-of-responses"},"Types of responses"),Object(i.b)("p",null,"There are three different ways to set up the bot response when a user is inactive"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Set up a nudge as a message"),Object(i.b)("li",{parentName:"ol"},"Set up the nudge followed by the question they dropped off at")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/Ko3xkH0.jpg",alt:null})),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/erG3UqL.png",alt:null})),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Trigger a different flow to handle inactivity")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/BrzIHis.png",alt:null})),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"Activate for specific steps in a specific flow\nIf we're observing consistent dropoff at a specfic step, you can set up a unique event exclusively for that step.")),Object(i.b)("p",null,"Eg: I want to handle a handle inactivity for email in a flow called 'moreinfo'."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/leWMbX3.png",alt:null}),"\nThis will trigger the event exclusively for the email step and won't be applicable globally."),Object(i.b)("p",null,"If there are any specific use-cases around inactivity that you'd like to implement, raise it in our community and we'll have the entire yellow ecosystem to help you out!!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"You can find our community here: https://community.yellow.ai/\n")),Object(i.b)("p",null,"Happy bot building!!"))}u.isMDXComponent=!0},445:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||i;return n?a.a.createElement(d,l(l({ref:t},s),{},{components:n})):a.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);