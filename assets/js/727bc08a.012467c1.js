"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[1032],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,f=m["".concat(l,".").concat(h)]||m[h]||p[h]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Inbox Usecases",sidebar_label:"Usecases"},l=void 0,c={unversionedId:"cookbooks/custom-usecases",id:"cookbooks/custom-usecases",title:"Inbox Usecases",description:"Steps are mentioned to resolve each of the commonly encountered use cases in inbox module:",source:"@site/docs/cookbooks/custom-usecases.md",sourceDirName:"cookbooks",slug:"/cookbooks/custom-usecases",permalink:"/docs/cookbooks/custom-usecases",draft:!1,tags:[],version:"current",frontMatter:{title:"Inbox Usecases",sidebar_label:"Usecases"}},u={},m=[{value:"1. Notify Agents when they are offline/busy/away",id:"1-notify-agents-when-they-are-offlinebusyaway",level:2},{value:"2. Agent transfer without asking for any information from the user",id:"2-agent-transfer-without-asking-for-any-information-from-the-user",level:2},{value:"3. Assigned a ticket to a particular group with a particular tag",id:"3-assigned-a-ticket-to-a-particular-group-with-a-particular-tag",level:2},{value:"4. Values coming from each channel must be set on the tickets",id:"4-values-coming-from-each-channel-must-be-set-on-the-tickets",level:2},{value:"5. For failed tickets, the query and contact must be stored/an email has to be sent",id:"5-for-failed-tickets-the-query-and-contact-must-be-storedan-email-has-to-be-sent",level:2}],p={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Steps are mentioned to resolve each of the commonly encountered use cases in inbox module:"),(0,r.kt)("h2",{id:"1-notify-agents-when-they-are-offlinebusyaway"},"1. Notify Agents when they are offline/busy/away"),(0,r.kt)("p",null,"Whenever an agent is offline or busy or away and a user tries to contact the agent via the bot, an agent can be notified about the same through an email (or even via SMS, WhatsApp, or voice) by using an outbound notification node."),(0,r.kt)("p",null,"Follow the given steps to notify agents when they are offline/busy/away:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a global variable with the agent's email as a value.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/vQRLirReKG5_CmQ9_XJ_Lfioe-VHlKfM9U_pPbgpotrnmJCVNT-qJY1VjurSf9iV42OkMxNnXxJLnDB5FMfOZzAMJn8VeUbv44Y0HSEn9GdovPmQ6NFxA8J4Dxq0DHtGggIsCuKS_jmRAp-4gav67nJ4fcEKGwheQqPIwlqcxIFJh6kkehpT2sfq5A",alt:null})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Set email template in ",(0,r.kt)("strong",{parentName:"li"},"Engage")," > ",(0,r.kt)("strong",{parentName:"li"},"Templates"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/T4VQiDxm_WriD9W-NEWwA6ob8yaIVbqr9ATWwaCxReLrPII-Y_9VO1XQnKLOhhDHEGYRZNOF63TjLinbnEkfE6RrmfozfTbH8Y2eWLrcFlmGzluCsQzHzKMaUSw-MZDJlDuB8Z5TMDrBuvhUtP5QgvxIRf3kCgHcBhuCsCRMnU_T8EK5cGLZOW9GhQ",alt:null})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Use outbound notification and set-up using the agent's email variable and email template.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/X-75omKzbvhqf5Gi-SKn00e2sH5V78VYU2CYVuROCfEDVi3cdlULP8ClptVUK_kkLVoTKl-bn8Lz_eXImTqlGo3JsF23F8OP-20J4iNJzuh61rdouwE0VNJRgreCXAy1oMmM2FQxkWeEQMJeo5zRjxPPpho72spdFQnnsLrJPamktL0CK-9oSxf-nw",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/zSeNc5mAAvY1XvJ9m-li6vycVut_phv0iHySY_iln_J4lCMYiDnrtiHCPNt-WeFw_E6R6sarw5GCwiy-2sU2tFA6gMEs7YxlkS16NulYThqSW59vmRdnErHBjedIrBkHIj-6vlugePGhdpN-XoJXsduEnLabLvz1SbK9JffNUbtUNkkXelMCGMQLvQ",alt:null})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Set events \u201cticket-opened\u201d, \u201cticket-missed\u201d and \u201cticket-queued\u201d to active inside Event in Studio. Post this, the start trigger node needs to be configured with these events in the respective flow.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/hsj0OGeogoz2L8Tdn6q_eOPNWO2ruxEHOiU3DVB86A2xf3F4jWJw0YgGrwoUgTUv5hadyP4I4zN-ILbB_-RBXLh7U8HEjWUg3n1-v_S9DIza5KMsRsuPX7845Er7r-0tdVVu5Ue2HzZ0CdJR9vYuO2ZC1hUXl7pBDV4luZWTYkX6soV54Zf3_e1MzQ",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/cQjs9yS06jIohN4vHz2QMV5Oi9TM613S_eX0U4OGs_1qDK-E_vjbb1HgcB181w1rXawrbW7_MxX882BAGFE47fQS6REIf0WSTeiQJH1UKaJfLz1AKF1-vgiywAHzUUM-OS-jczk0Lks7PkSNoR1qo_d2Y84dV7hemMHVyiUr5a1hdxx9IRxcwYcP0g",alt:null})),(0,r.kt)("h2",{id:"2-agent-transfer-without-asking-for-any-information-from-the-user"},"2. Agent transfer without asking for any information from the user"),(0,r.kt)("p",null,"Follow the below steps to transfer the chat to an agent without asking for any information from the user:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create variables for storing names, and queries in global variables and give some dummy value to them."),(0,r.kt)("li",{parentName:"ol"},"Pass the same variables in the raise ticket action node.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The dummy name and query won\u2019t be displayed to the user.")),(0,r.kt)("h2",{id:"3-assigned-a-ticket-to-a-particular-group-with-a-particular-tag"},"3. Assigned a ticket to a particular group with a particular tag"),(0,r.kt)("p",null,"  Follow the below steps to assign a ticket to a group by adding any tag:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In Inbox settings, create a group and tag."),(0,r.kt)("li",{parentName:"ol"},"Use the Raise ticket action node for each group."),(0,r.kt)("li",{parentName:"ol"},"Pass the information in the advanced settings of the ticket under Department and Tag.")),(0,r.kt)("h2",{id:"4-values-coming-from-each-channel-must-be-set-on-the-tickets"},"4. Values coming from each channel must be set on the tickets"),(0,r.kt)("p",null,"   Follow the below steps to set values coming from each channel:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use a channel filter to set variables."),(0,r.kt)("li",{parentName:"ol"},"Create global variables and set those variables.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"With either variables coming from payload like {{{profile.payload.< key_name in payload >}}} Or {{{sender}}} in case of WhatsApp")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Pass the same variables in the raise ticket action node.")),(0,r.kt)("h2",{id:"5-for-failed-tickets-the-query-and-contact-must-be-storedan-email-has-to-be-sent"},"5. For failed tickets, the query and contact must be stored/an email has to be sent"),(0,r.kt)("p",null,"  Follow the below steps to store user details for failed tickets:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the raise ticket action node on the error node, use a send email action node."),(0,r.kt)("li",{parentName:"ol"},"Create a database and use a database node to insert the ticket details into the database.")))}h.isMDXComponent=!0}}]);