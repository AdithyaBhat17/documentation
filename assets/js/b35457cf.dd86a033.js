"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[79538],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||f[g]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95252:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Notify Agents when they are offline/busy/away",sidebar_label:"Ticket notification to unavailable agents"},s=void 0,c={unversionedId:"cookbooks/inbox/notifyagents",id:"cookbooks/inbox/notifyagents",title:"Notify Agents when they are offline/busy/away",description:"Whenever an agent is offline or busy or away and a user tries to contact the agent via the bot, an agent can be notified about the same through an email (or even via SMS, WhatsApp, or voice) by using an outbound notification node.",source:"@site/docs/cookbooks/inbox/notifyagents.md",sourceDirName:"cookbooks/inbox",slug:"/cookbooks/inbox/notifyagents",permalink:"/docs/cookbooks/inbox/notifyagents",draft:!1,tags:[],version:"current",frontMatter:{title:"Notify Agents when they are offline/busy/away",sidebar_label:"Ticket notification to unavailable agents"},sidebar:"cookbooks",previous:{title:"Display end-of-chat message",permalink:"/docs/cookbooks/inbox/ticketclose-message"},next:{title:"Change ticket priority and assignee",permalink:"/docs/cookbooks/inbox/priority-assignee"}},u={},p=[],f={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Whenever an agent is offline or busy or away and a user tries to contact the agent via the bot, an agent can be notified about the same through an email (or even via SMS, WhatsApp, or voice) by using an outbound notification node."),(0,a.kt)("p",null,"Follow the given steps to notify agents when they are offline/busy/away:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a global variable with the agent's email as a value.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/vQRLirReKG5_CmQ9_XJ_Lfioe-VHlKfM9U_pPbgpotrnmJCVNT-qJY1VjurSf9iV42OkMxNnXxJLnDB5FMfOZzAMJn8VeUbv44Y0HSEn9GdovPmQ6NFxA8J4Dxq0DHtGggIsCuKS_jmRAp-4gav67nJ4fcEKGwheQqPIwlqcxIFJh6kkehpT2sfq5A",alt:null})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Set email template in ",(0,a.kt)("strong",{parentName:"li"},"Engage")," > ",(0,a.kt)("strong",{parentName:"li"},"Templates"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/T4VQiDxm_WriD9W-NEWwA6ob8yaIVbqr9ATWwaCxReLrPII-Y_9VO1XQnKLOhhDHEGYRZNOF63TjLinbnEkfE6RrmfozfTbH8Y2eWLrcFlmGzluCsQzHzKMaUSw-MZDJlDuB8Z5TMDrBuvhUtP5QgvxIRf3kCgHcBhuCsCRMnU_T8EK5cGLZOW9GhQ",alt:null})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Use outbound notification and set-up using the agent's email variable and email template.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/X-75omKzbvhqf5Gi-SKn00e2sH5V78VYU2CYVuROCfEDVi3cdlULP8ClptVUK_kkLVoTKl-bn8Lz_eXImTqlGo3JsF23F8OP-20J4iNJzuh61rdouwE0VNJRgreCXAy1oMmM2FQxkWeEQMJeo5zRjxPPpho72spdFQnnsLrJPamktL0CK-9oSxf-nw",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/zSeNc5mAAvY1XvJ9m-li6vycVut_phv0iHySY_iln_J4lCMYiDnrtiHCPNt-WeFw_E6R6sarw5GCwiy-2sU2tFA6gMEs7YxlkS16NulYThqSW59vmRdnErHBjedIrBkHIj-6vlugePGhdpN-XoJXsduEnLabLvz1SbK9JffNUbtUNkkXelMCGMQLvQ",alt:null})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Set events \u201cticket-opened\u201d, \u201cticket-missed\u201d and \u201cticket-queued\u201d to active inside Event in Studio. Post this, the start trigger node needs to be configured with these events in the respective flow.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/hsj0OGeogoz2L8Tdn6q_eOPNWO2ruxEHOiU3DVB86A2xf3F4jWJw0YgGrwoUgTUv5hadyP4I4zN-ILbB_-RBXLh7U8HEjWUg3n1-v_S9DIza5KMsRsuPX7845Er7r-0tdVVu5Ue2HzZ0CdJR9vYuO2ZC1hUXl7pBDV4luZWTYkX6soV54Zf3_e1MzQ",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/cQjs9yS06jIohN4vHz2QMV5Oi9TM613S_eX0U4OGs_1qDK-E_vjbb1HgcB181w1rXawrbW7_MxX882BAGFE47fQS6REIf0WSTeiQJH1UKaJfLz1AKF1-vgiywAHzUUM-OS-jczk0Lks7PkSNoR1qo_d2Y84dV7hemMHVyiUr5a1hdxx9IRxcwYcP0g",alt:null})))}g.isMDXComponent=!0}}]);