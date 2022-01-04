(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(231)),i=["components"],c={title:"WhatsApp Phone Number Migration",sidebar_label:"WhatsApp Phone Number Migration"},s={unversionedId:"cookbooks/whatsapp cookbook/wa-migration",id:"cookbooks/whatsapp cookbook/wa-migration",isDocsHomePage:!1,title:"WhatsApp Phone Number Migration",description:"The migration process involves 3 main assets:",source:"@site/docs/cookbooks/whatsapp cookbook/wa-migration.md",slug:"/cookbooks/whatsapp cookbook/wa-migration",permalink:"/docs/cookbooks/whatsapp cookbook/wa-migration",version:"current",sidebar_label:"WhatsApp Phone Number Migration",sidebar:"cookbooks",previous:{title:"Facebook Business Verification Process",permalink:"/docs/cookbooks/whatsapp cookbook/fb-business-verification"}},p=[],b={toc:p};function l(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The migration process involves 3 main assets:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"A source WABA")," - The account the phone number is currently registered to.\n",Object(a.b)("strong",{parentName:"p"},"A phone number")," - The number that will be migrated.\n",Object(a.b)("strong",{parentName:"p"},"A destination WABA")," - The account the number will be migrated to."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Eligibilty Criteria")),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://i.imgur.com/HzJofpE.png",alt:null})),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Process:")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"WABA is created on the destination BSP"),Object(a.b)("li",{parentName:"ol"},"Acount Review is completed on the destination BSP"),Object(a.b)("li",{parentName:"ol"},"Source BSP has to disable the 2FA for the WABA in order to allow the destination WABA to initiate the migration."),Object(a.b)("li",{parentName:"ol"},"Destiniation BSP will initiate the migration process by sending an OTP to the WhatsApp Number via SMS/Call (Sent from a US Number, its suggested to verify that the incoming services are active for the number)"),Object(a.b)("li",{parentName:"ol"},"Once the OTP verification is done by the destination BSP the number along with the approved templates will be migrated to the destination WABA."),Object(a.b)("li",{parentName:"ol"},"2FA is enabled on the destination WABA once the Infra is created.")))}l.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(n),m=o,f=l["".concat(i,".").concat(m)]||l[m]||u[m]||a;return n?r.a.createElement(f,c(c({ref:t},p),{},{components:n})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);