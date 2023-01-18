"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[5802],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),f=a,h=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],p={title:"Capturing quick reply event from WhatsApp",sidebar_label:"Capturing Quick Reply"},c=void 0,l={unversionedId:"cookbooks/whatsapp-channel/wa-capturing-qr",id:"cookbooks/whatsapp-channel/wa-capturing-qr",title:"Capturing quick reply event from WhatsApp",description:"In WhatsApp, the notification templates can have upto three quick reply buttons.",source:"@site/docs/cookbooks/whatsapp-channel/wa-capturing-qr.md",sourceDirName:"cookbooks/whatsapp-channel",slug:"/cookbooks/whatsapp-channel/wa-capturing-qr",permalink:"/docs/cookbooks/whatsapp-channel/wa-capturing-qr",draft:!1,tags:[],version:"current",frontMatter:{title:"Capturing quick reply event from WhatsApp",sidebar_label:"Capturing Quick Reply"}},u={},s=[],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In WhatsApp, the notification templates can have upto three quick reply buttons."),(0,o.kt)("p",null,"Based on those buttons we can either trigger any flow or track the users who clicked on a particular button mentioned in the template."),(0,o.kt)("p",null,"To achieve any of the above mentioned use case, follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to Studio -> Event hub, under engagement activate Click ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"quick-reply-event")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/13E08QH.png",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a flow and set the start trigger as ",(0,o.kt)("strong",{parentName:"p"},"Event")," and choose ",(0,o.kt)("strong",{parentName:"p"},"quick-reply-event")," from the drop-down\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/XnKPZfL.png",alt:null}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use a variable node to store the selected button. {{{data.event.data}}} will return the name of the button selected on WhatsApp notification.\nHere, we are using the CTA_clicked variable to store the name of the button clicked."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u2139\ufe0f The variable used to store the button name should be a string variable")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/wZ44H7c.png",alt:null})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once we have the name of the button selected we can either trigger any other flow based on that.\nWe can use a Logic node, to set condition based on the value of the variable storing the name of the button\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/tiESni0.png",alt:null})),(0,o.kt)("p",{parentName:"li"},"   Also, we can store the value in a database."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/piZxwoZ.png",alt:null})))}f.isMDXComponent=!0}}]);