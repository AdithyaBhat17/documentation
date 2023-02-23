"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[9156],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Email outbound",sidebar_label:"Email outbound"},u=void 0,s={unversionedId:"cookbooks/Understanding channels 101/email-outbound-101",id:"cookbooks/Understanding channels 101/email-outbound-101",title:"Email outbound",description:"How to perform Domain authentication?",source:"@site/docs/cookbooks/Understanding channels 101/email-outbound-101.md",sourceDirName:"cookbooks/Understanding channels 101",slug:"/cookbooks/Understanding channels 101/email-outbound-101",permalink:"/docs/cookbooks/Understanding channels 101/email-outbound-101",draft:!1,tags:[],version:"current",frontMatter:{title:"Email outbound",sidebar_label:"Email outbound"},sidebar:"cookbooks",previous:{title:"Upgrade engage (App to Cloud)",permalink:"/docs/cookbooks/Upgrade_new_engage_app"}},l={},d=[{value:"How to perform Domain authentication?",id:"how-to-perform-domain-authentication",level:2},{value:"What to we do after Domain authentication setup?",id:"what-to-we-do-after-domain-authentication-setup",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-perform-domain-authentication"},"How to perform Domain authentication?"),(0,a.kt)("p",null,"From the bulk email campaign account created for the brand, we will send something called \u2018CNAME\u2019 records to the mail ID suggested by the brand. CNAME records are a type of DNS records."),(0,a.kt)("p",null,"DNS records are like text instructions available in the DNS server (the view of this is possible in the registrar account of the brand such as GoDady account of the brand). In certain cases, instead of CNAMEs, TXT and MX records will be generated for domain authentication."),(0,a.kt)("p",null,"These DNS records tell what IP address is associated with what domains."),(0,a.kt)("p",null,"By performing domain authentication, we map an IP address to the domains/subdomains of the brand."),(0,a.kt)("p",null,"The CNAME records sent by us to the brand should be manually added by the brand in their DNS/ domain registrar portal."),(0,a.kt)("p",null,"Typically, it takes upto 48 hours for the domain to be authenticated or rejected."),(0,a.kt)("h2",{id:"what-to-we-do-after-domain-authentication-setup"},"What to we do after Domain authentication setup?"),(0,a.kt)("p",null,"We do reverse DNS. Reverse DNS is the opposite of domain auth , that is,  connect the domain to the IP address."))}f.isMDXComponent=!0}}]);