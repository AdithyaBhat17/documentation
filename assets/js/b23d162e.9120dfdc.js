"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[76017],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return f}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),s=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=s(a),d=n,f=u["".concat(i,".").concat(d)]||u[d]||c[d]||l;return a?r.createElement(f,o(o({ref:e},m),{},{components:a})):r.createElement(f,o({ref:e},m))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[u]="string"==typeof t?t:n,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46649:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],p={title:"Export flow",sidebar_label:"Export flow"},i=void 0,s={unversionedId:"platform_concepts/studio/build/Flows/exportflow",id:"platform_concepts/studio/build/Flows/exportflow",title:"Export flow",description:"Flow templates offer a convenient method for exporting and reusing existing flows when building future bots. By exporting flow templates, you can easily replicate successful bot configurations and tailor them to different use cases or customize them based on specific requirements in very less time.",source:"@site/docs/platform_concepts/studio/build/Flows/exportflow.md",sourceDirName:"platform_concepts/studio/build/Flows",slug:"/platform_concepts/studio/build/Flows/exportflow",permalink:"/docs/platform_concepts/studio/build/Flows/exportflow",draft:!1,tags:[],version:"current",frontMatter:{title:"Export flow",sidebar_label:"Export flow"},sidebar:"platform_concepts",previous:{title:"Configure flow triggers",permalink:"/docs/platform_concepts/studio/build/Flows/configureflow"},next:{title:"Overview",permalink:"/docs/platform_concepts/studio/build/nodes/"}},m={},u=[{value:'<a name="home"></a> 1. Export flow template',id:"-1-export-flow-template",level:2},{value:"1.1 Export flow templates to marketplace",id:"11-export-flow-templates-to-marketplace",level:3},{value:"1.2 View exported templates",id:"12-view-exported-templates",level:3},{value:"1.3 Publish exported templates",id:"13-publish-exported-templates",level:3},{value:"1.4 View approved templates in Marketplace",id:"14-view-approved-templates-in-marketplace",level:3}],c={toc:u};function d(t){var e=t.components,a=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Flow templates offer a convenient method for exporting and reusing existing flows when building future bots. By exporting flow templates, you can easily replicate successful bot configurations and tailor them to different use cases or customize them based on specific requirements in very less time."),(0,l.kt)("p",null,"Exported flow templates will be accessible in ",(0,l.kt)("strong",{parentName:"p"},"Marketplace"),"'s ",(0,l.kt)("strong",{parentName:"p"},"Access")," section, where they can be used as pre-built templates for creating new bots. "),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Export flow will work only for bots created after Oct 2021."),(0,l.kt)("li",{parentName:"ul"},"Export flow will work for all the bots irrespective of region. While cloning flows to another bot, source and destination has to be of the same region."))),(0,l.kt)("h2",{id:"-1-export-flow-template"},(0,l.kt)("a",{name:"home"})," 1. Export flow template"),(0,l.kt)("p",null,"You can export one or more bot flows as a template with data from databases and FAQs. Mandatory details, such as key features and supported channels, help others understand the template's purpose and suitability."),(0,l.kt)("h3",{id:"11-export-flow-templates-to-marketplace"},"1.1 Export flow templates to marketplace"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to ",(0,l.kt)("strong",{parentName:"p"},"Studio")," and click the flow you want to export as a template."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/pPJUHjM.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Export flow template"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/NcdTQDf.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To set up export, fill the following fields:"))),(0,l.kt)("img",{src:"https://i.imgur.com/d0BrkuS.png",alt:"drawing",width:"60%"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Template name"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the template. This is auto-filled and you can modify the name of the template according to your business needs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Overview"),(0,l.kt)("td",{parentName:"tr",align:null},"Give a gist of the selected flow, this appears on the template.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Component type"),(0,l.kt)("td",{parentName:"tr",align:null},"Select the component type based on the selected.",(0,l.kt)("br",null)," ",(0,l.kt)("img",{src:"https://i.imgur.com/44tq00E.png",alt:"drawing",width:"50%"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Template icon"),(0,l.kt)("td",{parentName:"tr",align:null},"Select a preconfigured template icon or you can upload the icon of your choice. ",(0,l.kt)("img",{parentName:"td",src:"https://i.imgur.com/hPTOxCL.png",alt:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"Describe the template.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flows"),(0,l.kt)("td",{parentName:"tr",align:null},"You can include other flows in the same template by selecting the flows from the dropdown. ",(0,l.kt)("img",{parentName:"td",src:"https://i.imgur.com/7deVwfk.png",alt:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add FAQs"),(0,l.kt)("td",{parentName:"tr",align:null},"To export FAQs along with your template, simply toggle the corresponding button. ",(0,l.kt)("img",{parentName:"td",src:"https://i.imgur.com/4fpQd4a.png",alt:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key features"),(0,l.kt)("td",{parentName:"tr",align:null},"You can include up to three key features in your template, which will be shown on the template cover.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Template tags"),(0,l.kt)("td",{parentName:"tr",align:null},"Tags entered in this field can enhance search results when looking for specific keywords related to your use case.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Use cases"),(0,l.kt)("td",{parentName:"tr",align:null},"You can select up to three categories that are available in the drop-down that suit your template. ",(0,l.kt)("img",{parentName:"td",src:"https://i.imgur.com/aVZJ3M7.png",alt:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Languages"),(0,l.kt)("td",{parentName:"tr",align:null},"To view your template in multiple languages, you can select the language of your choice.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Industries"),(0,l.kt)("td",{parentName:"tr",align:null},"You can choose up to three industries that match your flow.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Channels"),(0,l.kt)("td",{parentName:"tr",align:null},"Choose the channel you wish to integrate your template with.")))),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Next"),"."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/gaVSXZh.jpg",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If you've selected multiple flows, you can switch between them and preview the one you want to export."),(0,l.kt)("img",{src:"https://i.imgur.com/VbIYpfD.png",alt:"drawing",width:"50%"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Choose who can access your template using these options:"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Myself"),": Publish and reuse the template for your own use.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Training"),": Only users with access to the specific subscription can use the exported template.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Public"),": The template is published in the Marketplace and publicly available within the bot after admin approval."),(0,l.kt)("img",{src:"https://i.imgur.com/Oy5FoDN.png",alt:"drawing",width:"50%"}))),(0,l.kt)("h3",{id:"12-view-exported-templates"},"1.2 View exported templates"),(0,l.kt)("p",null,"Templates submitted for review can be viewed under ",(0,l.kt)("strong",{parentName:"p"},"User account")," > ",(0,l.kt)("strong",{parentName:"p"},"Exports"),"."),(0,l.kt)("img",{src:"https://i.imgur.com/B3U98x6.png",alt:"drawing",width:"100%"}),(0,l.kt)("p",null,"You can view the status of the template on this page."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/oynJE4x.png",alt:null})),(0,l.kt)("h3",{id:"13-publish-exported-templates"},"1.3 Publish exported templates"),(0,l.kt)("p",null,"Templates exported to a private marketplace are published automatically without review. However, templates exported for a subscription must be submitted for review and will appear on this page. "),(0,l.kt)("p",null,"The subscription admin can view, test, and publish the templates. Similarly, templates exported to the public marketplace must also be submitted for review and will appear here. The public marketplace admin can view, test, and publish the templates."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/aAR4eF3.png",alt:null})),(0,l.kt)("h3",{id:"14-view-approved-templates-in-marketplace"},"1.4 View approved templates in Marketplace"),(0,l.kt)("p",null,"After selecting the access option for the template (step 7 in 1.1), the system will list the approved templates under the corresponding category."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/e6T16cV.png",alt:null})))}d.isMDXComponent=!0}}]);