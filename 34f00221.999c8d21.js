(window.webpackJsonp=window.webpackJsonp||[]).push([[46,7,25],{119:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(329),o=a.n(c),r=a(308),s=a(22),i=a(120),u=a.n(i),m=a(376),h=a.n(m);t.default=function(){const e=Object(s.default)(),{siteConfig:t={}}=e;return l.a.createElement(r.a,{title:`${t.title} Videos`,description:"A collection of Benthos videos"},l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:o()("col col--6 col--offset-3")},l.a.createElement("h1",{className:u.a.videosTitle},"Benthos Videos"),l.a.createElement("p",null,"All videos are rated U for Underwhelming. If you'd rather access these videos directly from YouTube you can find them on ",l.a.createElement("a",{href:"https://www.youtube.com/channel/UCjIYEhBrw3GQwpRWe1asufg"},"the Jeffail channel"),"."))))),l.a.createElement("main",null,l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--8 col--offset-2"},l.a.createElement("h2",null,"Tutorials"),l.a.createElement("p",null,"This playlist contains tutorial videos covering various aspects of Benthos use.")),l.a.createElement(h.a,{className:o()("col col--8 col--offset-2"),url:"https://www.youtube-nocookie.com/embed/videoseries?list=PL9hWaP-BQh2rvNuM29bTLlL0hYk6cqyT5",controls:"true"})))))}},306:function(e,t,a){"use strict";var n=a(3),l=a(0),c=a.n(l),o=a(24),r=a(22),s=a(300),i=a(303),u=a(301),m=a(23),h=a(307),d=a(389),f=a(390),b=a(315);let v=null;function E({hit:e,children:t}){return c.a.createElement(u.a,{to:e.url},t)}function O({state:e,onClose:t}){const{generateSearchPageLink:a}=Object(h.a)();return c.a.createElement(u.a,{to:a(e.query),onClick:t},"See all ",e.context.nbHits," results")}function p({contextualSearch:e,...t}){var u,h;const{siteMetadata:p}=Object(r.default)(),j=Object(b.a)(),w=null!==(u=null===(h=t.searchParameters)||void 0===h?void 0:h.facetFilters)&&void 0!==u?u:[],g=e?[...j,...w]:w,C={...t.searchParameters,facetFilters:g},{withBaseUrl:k}=Object(i.b)(),y=Object(s.useHistory)(),P=Object(l.useRef)(null),[N,S]=Object(l.useState)(!1),[B,T]=Object(l.useState)(null),F=Object(l.useCallback)((()=>v?Promise.resolve():Promise.all([a.e(221).then(a.bind(null,314)),Promise.all([a.e(0),a.e(222)]).then(a.bind(null,313)),a.e(0).then(a.t.bind(null,56,7))]).then((([{DocSearchModal:e}])=>{v=e}))),[]),I=Object(l.useCallback)((()=>{F().then((()=>{S(!0)}))}),[F,S]),M=Object(l.useCallback)((()=>{S(!1)}),[S]),R=Object(l.useCallback)((e=>{F().then((()=>{S(!0),T(e.key)}))}),[F,S,T]),U=Object(l.useRef)({navigate({itemUrl:e}){y.push(e)}}).current,Y=Object(l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:k(`${t.pathname}${t.hash}`)}})))).current,A=Object(l.useMemo)((()=>e=>c.a.createElement(O,Object(n.a)({},e,{onClose:M}))),[M]),L=Object(l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",p.docusaurusVersion),e)),[p.docusaurusVersion]);return Object(d.a)({isOpen:N,onOpen:I,onClose:M,onInput:R,searchButtonRef:P}),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement("link",{rel:"preconnect",href:`https://${t.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),c.a.createElement(f.a,{onTouchStart:F,onFocus:F,onMouseOver:F,onClick:I,ref:P}),N&&Object(o.createPortal)(c.a.createElement(v,Object(n.a)({onClose:M,initialScrollY:window.scrollY,initialQuery:B,navigator:U,transformItems:Y,hitComponent:E,resultsFooterComponent:A,transformSearchClient:L},t,{searchParameters:C})),document.body))}t.a=function(){const{siteConfig:e}=Object(r.default)();return c.a.createElement(p,e.themeConfig.algolia)}}}]);