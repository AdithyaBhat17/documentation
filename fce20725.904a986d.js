(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{443:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(3),r=n(7),a=(n(0),n(455)),i=["components"],l={title:"Studio FAQs",sidebar_label:"Studio FAQs"},s={unversionedId:"platform_concepts/studio/studio-faqs",id:"platform_concepts/studio/studio-faqs",isDocsHomePage:!1,title:"Studio FAQs",description:"Why is the send OTP node not working?",source:"@site/docs/platform_concepts/studio/studio-faqs.md",slug:"/platform_concepts/studio/studio-faqs",permalink:"/docs/platform_concepts/studio/studio-faqs",version:"current",sidebar_label:"Studio FAQs",sidebar:"platform_concepts",previous:{title:"Languages Supported",permalink:"/docs/platform_concepts/studio/languages-supported"},next:{title:"Overview",permalink:"/docs/platform_concepts/inbox/inbox"}},c=[],u={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,i);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("details",null,Object(a.b)("summary",null,"Why is the send OTP node not working?"),Object(a.b)("div",null,Object(a.b)("div",null,"Our out-of-the-box OTP verification is restricted only to the India region. If you\u2019d like to avail of this functionality for international numbers, you will have to use external APIs."),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"What does a good document format look like?"),Object(a.b)("div",null,Object(a.b)("div",null,"The following are some of the characteristics of a document that\u2019ll be processed well during document cognition. It's recommended to follow these guidelines while pre-processing your document - \u200b \u200b * It does not have scanned pages and images, these will be skipped if present in the doc. \u200b * At least 80% of the content is textual and well-formatted (e.g. Wikipedia articles) \u200b * Remove content and index pages, appendix pages, etc. (we will add the logic to skip these automatically in coming releases) \u200b * No bullet points before headings. Headings should have a larger font size and no spaces so that the parser can detect headings easily. \u200b * Simple tabular data works better than complex or merged tabular data in the documents. \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Why am I not getting the right result in the first suggestion?"),Object(a.b)("div",null,Object(a.b)("div",null,"Because document cognition is a probabilistic model that is \u201cpredicting\u201d the relevance of a specific paragraph or page by looking at the input string. There is no guarantee that the first result will be the most relevant. The most relevant results are expected to come in the top 3 results."),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Why am I getting the other documents in suggestions which don't have the answer?"),Object(a.b)("div",null,Object(a.b)("div",null,"Same answer as above. The model assigns individual scores to all the documents\u2019 paragraph and use them to show the results, so if the confidence threshold is low it can still show irrelevant answers. You can fine-tune the confidence threshold using some test cases. \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Why am I getting multiple occurrences of the same document in the results?"),Object(a.b)("div",null,Object(a.b)("div",null,"Because there might be multiple pages/occurrences of relevant content in the same document. In such cases, we rank them, based on the score and return only two occurrences in each document by default. If you want to see more or fewer occurrences within the same document, you can control it by passing the value of `results per document` in your search query. \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Can the model read tabular data or image presents in the documents?"),Object(a.b)("div",null,Object(a.b)("div",null,"Tables can be indexed by enabling the Parse table option while uploading, Simpler table works better than complex/merged tables. Images/diagrams will be skipped. \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Why am I not able to access a document link, from a conversation I had yesterday? Can I change this dynamic URL to some fixed redirection URL?"),Object(a.b)("div",null,Object(a.b)("div",null,"Currently, we have restricted the life of each SAS link to an hour for security reasons. This can be removed/updated as per the client's request. You can generate a new link by asking the same query again in the bot. You can also change this redirection URL to a fixed URL using the document properties option. \u200b ![](https://camo.githubusercontent.com/f1d4e073603851fadf4777a41e25d88d9412a1856666b67f8f0738b5b5d1daea/68747470733a2f2f63646e2e79656c6c6f776d657373656e6765722e636f6d2f524c333558336d436f7a5038313631333534343436393233362e706e67) \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"How do I ensure that the bot shows only relevant documents?"),Object(a.b)("div",null,Object(a.b)("div",null,"There is no specific logic added to detect irrelevance right now. However, we do provide a relevance score with each search result that the bot developer can use. The model returns all documents which contain even a few keywords in the query in decreasing order of relevance. The bot developer can choose to show only Top N (e.g. Top 5) or Top 25% of the results based on relevance score. \u200b\u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Can the Doc cog work if the documents are stored in a different system?"),Object(a.b)("div",null,Object(a.b)("div",null,"Doc cog has in-build integrations for Sharepoint, S3, URLs, and KBs (Salesforce, Service-now, Confluence). Any other KB can also be integrated which has APIs to access the articles/documents. \u200b\u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Docs QNAs are not being generated, do I need it for working of doc cog? or can I edit the response of doc cog results?"),Object(a.b)("div",null,Object(a.b)("div",null,"Doc cog search will work fine without the QNAs. If the upload docs are showing completed status, you can just enable doc cog fallback or add Action Node and start using it. QNA's are only required for editing the answers and adding them to the FAQs section. \u200b\u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Is permission-based Doc cog results possible so that only certain groups of people can search in a certain list of Docs / External KBs?"),Object(a.b)("div",null,Object(a.b)("div",null,"Yes, It is possible, User can add tags to the documents and pass the tag value as a variable in the doc cog action node while searching. \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"If a single document has different answers/responses wrt a user profile like CEO, HR, SDE etc, Can we filter and show just the answers related to the User Profile?"),Object(a.b)("div",null,Object(a.b)("div",null,"If the results are on a different page, page logic can be used to filter the results \u200b if answers are in a tabular structure, you can try adding the role of the user in the query itself, like",Object(a.b)("p",null,"\u200b\n",Object(a.b)("inlineCode",{parentName:"p"},'<query>: SDE\u201d, eg. Annual leave entitlement?, SDE"'),"\n\u200b")),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Why my documents are taking so long for indexing, is it stuck?"),Object(a.b)("div",null,Object(a.b)("div",null,"Doc cog uses queue base indexing flow which has a common queue among all the bots. A pending/queued status represents doc is still in the queue and waiting for indexing while the indexing status represents the doc is being indexed. \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Is there any limit on documents uploading?"),Object(a.b)("div",null,Object(a.b)("div",null,"Yes, for a Tier 0 (Free Tier) bot there is a limit of a max of 50 total pages or a max of 5 documents and Tier 1 bot has a max 200 documents limit. Tiers other than T0 can have max of 500 pages per document. \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Can I index my articles present on ServiceNow / Confluence / Salesforce etc.?"),Object(a.b)("div",null,Object(a.b)("div",null,"Yes, using Doc cog External KB integration it is possible to index the articles using the APIs. \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Why my bot is showing Journey Suggestions (Did you mean) instead of Doc cog results in fallback?"),Object(a.b)("div",null,Object(a.b)("div",null,"A bot has a specific priority order of actions in the fallback case. \u200b Order: Journey -> FAQs -> Journey suggestion -> Doc cog -> Other fallback. \u200b So if the Journey suggestions are enabled and with good suggestion confidence, Journey suggestion will be triggered due to the priority order. You can try disabling the suggestion or increasing the confidence threshold of the suggestion. \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Can I change the layout of the doc cog results cards?"),Object(a.b)("div",null,Object(a.b)("div",null,"Yes, but the default layout is recommended which helps us in analytics, improves accuracy and provides a better user experience. \u200b A layout that can be changed: Change vertical to horizontal cards, change the display name, remove tags, and remove the preview button. \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"How do I link one flow to another for a bot?"),Object(a.b)("div",null,Object(a.b)("div",null,"Use the Execute node to link  another flow to a bot. For more information, see [Execute Flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#15-execute-flow). \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"Is it possible to skip triggering NLU for specific steps of a flow?"),Object(a.b)("div",null,Object(a.b)("div",null,"Yes, you can skip triggering NLU for specific flows using the **Store comment** node.  For more information, see [Store comment](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#25-store-comment). \u200b"),Object(a.b)("br",null))),Object(a.b)("details",null,Object(a.b)("summary",null,"I have configured Hindi language but it is triggering fallback/different journey? What might be the reason?"),Object(a.b)("div",null,Object(a.b)("div",null,'In a flow, if you have selected "hi" (ISO code) for Hindi (button value), then it might be triggering another intent which you would have configured earlier ("hi" intent configured). To overcome this problem, set a variable, assign the variable value to Hindi language (hi), and then connect it to the Set language node. \u200b'),Object(a.b)("br",null))))}b.isMDXComponent=!0},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(n),h=o,m=b["".concat(i,".").concat(h)]||b[h]||d[h]||a;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);