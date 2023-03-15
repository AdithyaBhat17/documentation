"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[6017],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),s=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=s(a),d=n,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(h,o(o({ref:e},u),{},{components:a})):r.createElement(h,o({ref:e},u))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p[m]="string"==typeof t?t:n,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46649:function(t,e,a){a.r(e),a.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],p={title:"Export flow",sidebar_label:"Export flow"},i=void 0,s={unversionedId:"platform_concepts/studio/build/Flows/exportflow",id:"platform_concepts/studio/build/Flows/exportflow",title:"Export flow",description:"You can export a bot template to the Marketplace by selecting flows that you have created in the Studio module. The exported flow can be used as a template while building bots in\xa0the future. Once you export the template, you can choose options for exporting the flows. Based on the selected options, you can access the templates.",source:"@site/docs/platform_concepts/studio/build/Flows/exportflow.md",sourceDirName:"platform_concepts/studio/build/Flows",slug:"/platform_concepts/studio/build/Flows/exportflow",permalink:"/docs/platform_concepts/studio/build/Flows/exportflow",draft:!1,tags:[],version:"current",frontMatter:{title:"Export flow",sidebar_label:"Export flow"},sidebar:"platform_concepts",previous:{title:"Configure flow triggers",permalink:"/docs/platform_concepts/studio/build/Flows/configureflow"},next:{title:"Overview",permalink:"/docs/platform_concepts/studio/build/nodes/"}},u={},m=[{value:'<a name="home"></a> 1. Export bot template',id:"-1-export-bot-template",level:2},{value:"1.1 Export bot template from Studio",id:"11-export-bot-template-from-studio",level:3},{value:"1.2 View exported templates",id:"12-view-exported-templates",level:3},{value:"1.3 Publish exported templates",id:"13-publish-exported-templates",level:3},{value:"1.4 View approved template in Marketplace",id:"14-view-approved-template-in-marketplace",level:3}],c={toc:m};function d(t){var e=t.components,a=(0,n.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"You can export a bot template to the Marketplace by selecting flows that you have created in the Studio module. The exported flow can be used as a template while building bots in\xa0the future. Once you export the template, you can choose options for exporting the flows. Based on the selected options, you can access the templates."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Export flow will work only for bots created after Oct 2021."),(0,l.kt)("li",{parentName:"ul"},"Export flow will work for all the bots irrespective of region. While cloning flows to another bot, source and destination has to be of the same region."))),(0,l.kt)("p",null,"In this article, you will understand:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#1-export-bot-template"},"How to export bot template to Marketplace"))),(0,l.kt)("h2",{id:"-1-export-bot-template"},(0,l.kt)("a",{name:"home"})," 1. Export bot template"),(0,l.kt)("p",null,"You can export a single flow or more flows from a bot as a template. You can also export data from databases and FAQs. To export the bot template, you must provide the mandatory details such as key features, channels supported, industry, description, and so on."),(0,l.kt)("h3",{id:"11-export-bot-template-from-studio"},"1.1 Export bot template from Studio"),(0,l.kt)("p",null,"To export a bot template to Marketplace, follow the below steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the ",(0,l.kt)("strong",{parentName:"p"},"Overview")," page, click ",(0,l.kt)("strong",{parentName:"p"},"Studio")," from the module switcher or click ",(0,l.kt)("strong",{parentName:"p"},"Export flow template")," under ",(0,l.kt)("strong",{parentName:"p"},"Flows")," section.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on the flow that you want to export."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/pPJUHjM.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Export flow template")," under ",(0,l.kt)("strong",{parentName:"p"},"Flows")," section."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/NcdTQDf.png",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter the following mandatory fields details:"),(0,l.kt)("img",{src:"https://i.imgur.com/d0BrkuS.png",alt:"drawing",width:"60%"}))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Template name"),(0,l.kt)("td",{parentName:"tr",align:null},"By default, you can view the name of the template. You can also modify the name of the template according to your business needs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Overview"),(0,l.kt)("td",{parentName:"tr",align:null},"Enter the description of the selected flow.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Component type"),(0,l.kt)("td",{parentName:"tr",align:null},"Select the component type based on the flow that you have selected.",(0,l.kt)("br",null)," ",(0,l.kt)("img",{src:"https://i.imgur.com/44tq00E.png",alt:"drawing",width:"50%"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Template icon"),(0,l.kt)("td",{parentName:"tr",align:null},"You can select a preconfigured template icon or you can upload the icon of your choice. ",(0,l.kt)("img",{parentName:"td",src:"https://i.imgur.com/hPTOxCL.png",alt:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Description"),(0,l.kt)("td",{parentName:"tr",align:null},"The description that you enter in this field is displayed on the preview page when you click on the template.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Flows"),(0,l.kt)("td",{parentName:"tr",align:null},"If you want to include the other flows in the same template, you can select flows that are displayed in the drop-down. ",(0,l.kt)("img",{parentName:"td",src:"https://i.imgur.com/7deVwfk.png",alt:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add FAQs"),(0,l.kt)("td",{parentName:"tr",align:null},"You can export FAQs as part of the template by enabling the toggle button. ",(0,l.kt)("img",{parentName:"td",src:"https://i.imgur.com/4fpQd4a.png",alt:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Key features"),(0,l.kt)("td",{parentName:"tr",align:null},"You can add up to three key features to your template. The features that you add are displayed on the template cover.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Template tags"),(0,l.kt)("td",{parentName:"tr",align:null},"The tags that you enter in this field help you to improve the search when you try to search for the particular keyword in your use case.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Use cases"),(0,l.kt)("td",{parentName:"tr",align:null},"You can select up to three categories that are available in the drop-down that suit your template. ",(0,l.kt)("img",{parentName:"td",src:"https://i.imgur.com/aVZJ3M7.png",alt:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Languages"),(0,l.kt)("td",{parentName:"tr",align:null},"To view your template in multiple languages, you can select the language based on your choice.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Industries"),(0,l.kt)("td",{parentName:"tr",align:null},"You can select up to three industries that suit your flow.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Channels"),(0,l.kt)("td",{parentName:"tr",align:null},"Select the channel that you want your template to be integrated with.")))),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Next"),".\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/gaVSXZh.jpg",alt:null}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You can switch to other flows if you have selected more than one and preview the flow that you want to export."),(0,l.kt)("img",{src:"https://i.imgur.com/VbIYpfD.png",alt:"drawing",width:"50%"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select who can access this template by using the following options:"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Myself"),": You can publish and reuse this template for yourself.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Training"),": Only the user who has access to the particular subscription can access the exported template.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Public:")," The template gets published in the Marketplace only if it approved by the admin."),(0,l.kt)("img",{src:"https://i.imgur.com/Oy5FoDN.png",alt:"drawing",width:"50%"}))),(0,l.kt)("h3",{id:"12-view-exported-templates"},"1.2 View exported templates"),(0,l.kt)("p",null,"Users can view the templates submitted for review Under ",(0,l.kt)("strong",{parentName:"p"},"User account")," > ",(0,l.kt)("strong",{parentName:"p"},"Exports"),". "),(0,l.kt)("img",{src:"https://i.imgur.com/B3U98x6.png",alt:"drawing",width:"100%"}),(0,l.kt)("p",null,"Users can view the template status from this page."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/oynJE4x.png",alt:null})),(0,l.kt)("h3",{id:"13-publish-exported-templates"},"1.3 Publish exported templates"),(0,l.kt)("p",null,"The templates exported to a\xa0private marketplace are published automatically without a review process."),(0,l.kt)("p",null,"The templates exported for a subscription must be submitted for review and will be available on this page. The admin of the subscription will be able to view, test, and publish the templates."),(0,l.kt)("p",null,"The templates exported to the\xa0public marketplace must be submitted for review and will be available on this page. The admin of the public marketplace will be able to view, test, and publish the templates."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/aAR4eF3.png",alt:null})),(0,l.kt)("h3",{id:"14-view-approved-template-in-marketplace"},"1.4 View approved template in Marketplace"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can now export templates to a private marketplace. These templates will be visible and can be imported only by the respective user. This will not be accessible to any external user."),(0,l.kt)("li",{parentName:"ul"},"You can also export templates to a marketplace that is accessible only to members of a particular subscription. These templates will be visible and can be imported only by the users within the subscription.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/e6T16cV.png",alt:null})))}d.isMDXComponent=!0}}]);