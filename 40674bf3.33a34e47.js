(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(426)),i=["components"],c={title:"Intercom Live Chat",sidebar_label:"Intercom Live Chat"},l={unversionedId:"platform_concepts/appConfiguration/intercom-livechat",id:"platform_concepts/appConfiguration/intercom-livechat",isDocsHomePage:!1,title:"Intercom Live Chat",description:"Configuration",source:"@site/docs/platform_concepts/appConfiguration/intercom-livechat.md",slug:"/platform_concepts/appConfiguration/intercom-livechat",permalink:"/docs/platform_concepts/appConfiguration/intercom-livechat",version:"current",sidebar_label:"Intercom Live Chat",sidebar:"platform_concepts",previous:{title:"Hubspot CRM",permalink:"/docs/platform_concepts/appConfiguration/hubspot-crm"},next:{title:"Jira",permalink:"/docs/platform_concepts/appConfiguration/jira"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"Use Case",id:"use-case",children:[{value:"Events",id:"events",children:[]}]},{value:"Support",id:"support",children:[]},{value:"Reference",id:"reference",children:[]}],p={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"Inside your project, navigate to the Integrations tab and on the left side bar select Live Chat. You will find Intercom Live chat"),Object(a.b)("img",{src:"https://cdn.yellowmessenger.com/FCpN0L5knXru1659415026015.png",alt:"drawing",width:"60%"}),Object(a.b)("p",null,"Copy webhook details from the Integrations page and enter it in Settings -> Webhooks.\nAdd conversations.admin.replied and conversations.admin.closed topics."),Object(a.b)("p",null,"You\u2019ll need to provide an Intercom access token, which you can find inside your intercom developer app \u2192 Configure \u2192 Authentication \u2192 Access Token. Then click on connect."),Object(a.b)("h2",{id:"use-case"},"Use Case"),Object(a.b)("p",null,"In this integration you can use raise ticket node to create a conversation with intercom agent and once conversation initiates the user can talk to the intercom agent, once the conversation between them ends bot takes over the conversation with user."),Object(a.b)("img",{src:"https://cdn.yellowmessenger.com/vPfrT6YtytSl1649093680793.png",alt:"drawing",width:"60%"}),Object(a.b)("h3",{id:"events"},"Events"),Object(a.b)("p",null,"Following are the events which are currently accommodated in the Integration:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Event"),Object(a.b)("th",{parentName:"tr",align:null},"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"intercom_message_reply"),Object(a.b)("td",{parentName:"tr",align:null},"This event reaches to bot when intercom agent sends a reply to the user.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"intercom_agent_assigned"),Object(a.b)("td",{parentName:"tr",align:null},"This event reaches to bot when any of the intercom agent accepts your ticket.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"ticket-closed"),Object(a.b)("td",{parentName:"tr",align:null},"This event reaches to bot when intercom agent closes the user ticket.")))),Object(a.b)("h2",{id:"support"},"Support"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The text and attachments (image, file, video) are being supported from both user and agent side."),Object(a.b)("li",{parentName:"ul"},"Custom fields:",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Go to Contacts -> All Users -> Most Recent Contact. ",Object(a.b)("img",{src:"https://cdn.yellowmessenger.com/x4P2ag2ZC6H81659415284082.png",alt:"drawing",width:"60%"})),Object(a.b)("li",{parentName:"ol"},"Under the Qualification section you can see the Settings icon. Click on it, you'll be redirected to the Qualifications Settings page.",Object(a.b)("img",{src:"https://cdn.yellowmessenger.com/JRRUX7AVT3KM1659415407598.png",alt:"drawing",width:"60%"})),Object(a.b)("li",{parentName:"ol"},"By clicking on the Add Data button, you can see the option to Add New Data which is used to add custom fields."),Object(a.b)("li",{parentName:"ol"},"In the bot, you can see a field for \u201cIntercom Live Agent Custom Fields\u201d (if intercom integration is connected). Assign a variable of type object to this field."),Object(a.b)("li",{parentName:"ol"},"That object variable needs to have custom fields as keys.",Object(a.b)("img",{src:"https://cdn.yellowmessenger.com/J45aWDeb3npo1659415443360.png",alt:"drawing",width:"60%"}))))),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://developers.intercom.com/intercom-api-reference/reference#conversation-model"},"https://developers.intercom.com/intercom-api-reference/reference#conversation-model")))}b.isMDXComponent=!0},426:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);