(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{452:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return a?o.a.createElement(d,s(s({ref:t},l),{},{components:a})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),r=(a(0),a(452)),i=["components"],s={title:"Custom Usecases",sidebar_label:"Usecases"},c={unversionedId:"cookbooks/inbox/custom-usecases",id:"cookbooks/inbox/custom-usecases",isDocsHomePage:!1,title:"Custom Usecases",description:"Steps are mentioned to resolve each of the commonly encountered use cases:",source:"@site/docs/cookbooks/inbox/custom-usecases.md",slug:"/cookbooks/inbox/custom-usecases",permalink:"/docs/cookbooks/inbox/custom-usecases",version:"current",sidebar_label:"Usecases",sidebar:"cookbooks",previous:{title:"EdTech template",permalink:"/docs/cookbooks/marketplace-templates/edtech-template"},next:{title:"Upgrade to New Engage Module (for app bots)",permalink:"/docs/cookbooks/Upgrade_new_engage_app"}},l=[{value:"1. Notify Agents when they are offline/busy/away",id:"1-notify-agents-when-they-are-offlinebusyaway",children:[]},{value:"2. Agent transfer without asking for any information from the user",id:"2-agent-transfer-without-asking-for-any-information-from-the-user",children:[]},{value:"3. Assigned a ticket to a particular group with a particular tag",id:"3-assigned-a-ticket-to-a-particular-group-with-a-particular-tag",children:[]},{value:"4. Values coming from each channel must be set on the tickets",id:"4-values-coming-from-each-channel-must-be-set-on-the-tickets",children:[]},{value:"5. For failed tickets, the query and contact must be stored/an email has to be sent",id:"5-for-failed-tickets-the-query-and-contact-must-be-storedan-email-has-to-be-sent",children:[]}],b={toc:l};function u(e){var t=e.components,a=Object(o.a)(e,i);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Steps are mentioned to resolve each of the commonly encountered use cases:"),Object(r.b)("h2",{id:"1-notify-agents-when-they-are-offlinebusyaway"},"1. Notify Agents when they are offline/busy/away"),Object(r.b)("p",null,"Whenever an agent is offline or busy or away and a user tries to contact the agent via the bot, an agent can be notified about the same through an email (or even via SMS, WhatsApp, or voice) by using an outbound notification node."),Object(r.b)("p",null,"Follow the given steps to notify agents when they are offline/busy/away:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a global variable with the agent's email as a value.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/vQRLirReKG5_CmQ9_XJ_Lfioe-VHlKfM9U_pPbgpotrnmJCVNT-qJY1VjurSf9iV42OkMxNnXxJLnDB5FMfOZzAMJn8VeUbv44Y0HSEn9GdovPmQ6NFxA8J4Dxq0DHtGggIsCuKS_jmRAp-4gav67nJ4fcEKGwheQqPIwlqcxIFJh6kkehpT2sfq5A",alt:null})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Set email template in ",Object(r.b)("strong",{parentName:"li"},"Engage")," > ",Object(r.b)("strong",{parentName:"li"},"Templates"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/T4VQiDxm_WriD9W-NEWwA6ob8yaIVbqr9ATWwaCxReLrPII-Y_9VO1XQnKLOhhDHEGYRZNOF63TjLinbnEkfE6RrmfozfTbH8Y2eWLrcFlmGzluCsQzHzKMaUSw-MZDJlDuB8Z5TMDrBuvhUtP5QgvxIRf3kCgHcBhuCsCRMnU_T8EK5cGLZOW9GhQ",alt:null})),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Use outbound notification and set-up using the agent's email variable and email template.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/X-75omKzbvhqf5Gi-SKn00e2sH5V78VYU2CYVuROCfEDVi3cdlULP8ClptVUK_kkLVoTKl-bn8Lz_eXImTqlGo3JsF23F8OP-20J4iNJzuh61rdouwE0VNJRgreCXAy1oMmM2FQxkWeEQMJeo5zRjxPPpho72spdFQnnsLrJPamktL0CK-9oSxf-nw",alt:null})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/zSeNc5mAAvY1XvJ9m-li6vycVut_phv0iHySY_iln_J4lCMYiDnrtiHCPNt-WeFw_E6R6sarw5GCwiy-2sU2tFA6gMEs7YxlkS16NulYThqSW59vmRdnErHBjedIrBkHIj-6vlugePGhdpN-XoJXsduEnLabLvz1SbK9JffNUbtUNkkXelMCGMQLvQ",alt:null})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Set events \u201cticket-opened\u201d, \u201cticket-missed\u201d and \u201cticket-queued\u201d to active inside Event in Studio. Post this, the start trigger node needs to be configured with these events in the respective flow.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/hsj0OGeogoz2L8Tdn6q_eOPNWO2ruxEHOiU3DVB86A2xf3F4jWJw0YgGrwoUgTUv5hadyP4I4zN-ILbB_-RBXLh7U8HEjWUg3n1-v_S9DIza5KMsRsuPX7845Er7r-0tdVVu5Ue2HzZ0CdJR9vYuO2ZC1hUXl7pBDV4luZWTYkX6soV54Zf3_e1MzQ",alt:null})),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/cQjs9yS06jIohN4vHz2QMV5Oi9TM613S_eX0U4OGs_1qDK-E_vjbb1HgcB181w1rXawrbW7_MxX882BAGFE47fQS6REIf0WSTeiQJH1UKaJfLz1AKF1-vgiywAHzUUM-OS-jczk0Lks7PkSNoR1qo_d2Y84dV7hemMHVyiUr5a1hdxx9IRxcwYcP0g",alt:null})),Object(r.b)("h2",{id:"2-agent-transfer-without-asking-for-any-information-from-the-user"},"2. Agent transfer without asking for any information from the user"),Object(r.b)("p",null,"Follow the below steps to transfer the chat to an agent without asking for any information from the user:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create variables for storing names, and queries in global variables and give some dummy value to them."),Object(r.b)("li",{parentName:"ol"},"Pass the same variables in the raise ticket action node.")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The dummy name and query won\u2019t be displayed to the user."))),Object(r.b)("h2",{id:"3-assigned-a-ticket-to-a-particular-group-with-a-particular-tag"},"3. Assigned a ticket to a particular group with a particular tag"),Object(r.b)("p",null,"  Follow the below steps to assign a ticket to a group by adding any tag:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In Inbox settings, create a group and tag."),Object(r.b)("li",{parentName:"ol"},"Use the Raise ticket action node for each group."),Object(r.b)("li",{parentName:"ol"},"Pass the information in the advanced settings of the ticket under Department and Tag.")),Object(r.b)("h2",{id:"4-values-coming-from-each-channel-must-be-set-on-the-tickets"},"4. Values coming from each channel must be set on the tickets"),Object(r.b)("p",null,"   Follow the below steps to set values coming from each channel:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Use a channel filter to set variables."),Object(r.b)("li",{parentName:"ol"},"Create global variables and set those variables.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"With either variables coming from payload like {{{profile.payload.< key_name in payload >}}} Or {{{sender}}} in case of WhatsApp")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Pass the same variables in the raise ticket action node.")),Object(r.b)("h2",{id:"5-for-failed-tickets-the-query-and-contact-must-be-storedan-email-has-to-be-sent"},"5. For failed tickets, the query and contact must be stored/an email has to be sent"),Object(r.b)("p",null,"  Follow the below steps to store user details for failed tickets:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the raise ticket action node on the error node, use a send email action node."),Object(r.b)("li",{parentName:"ol"},"Create a database and use a database node to insert the ticket details into the database.")))}u.isMDXComponent=!0}}]);