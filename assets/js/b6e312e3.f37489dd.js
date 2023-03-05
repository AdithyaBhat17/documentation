"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[4460],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(d,s(s({ref:t},h),{},{components:a})):r.createElement(d,s({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84348:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),s=["components"],o={title:"Understanding how chat search works",sidebar_label:"Chat search and filters"},l=void 0,c={unversionedId:"platform_concepts/inbox/chats/chatsearch",id:"platform_concepts/inbox/chats/chatsearch",title:"Understanding how chat search works",description:"This document explains how the search works in the chats section when an agent or an admin desires to look into a particular chat for more information about the user, how the chat started, what was the bot user looking for, etc.",source:"@site/docs/platform_concepts/inbox/chats/chatsearch.md",sourceDirName:"platform_concepts/inbox/chats",slug:"/platform_concepts/inbox/chats/chatsearch",permalink:"/docs/platform_concepts/inbox/chats/chatsearch",draft:!1,tags:[],version:"current",frontMatter:{title:"Understanding how chat search works",sidebar_label:"Chat search and filters"},sidebar:"platform_concepts",previous:{title:"Chat screen & user details",permalink:"/docs/platform_concepts/inbox/chats/chatscreen"},next:{title:"Video calling",permalink:"/docs/platform_concepts/inbox/chats/videocall"}},h={},p=[{value:'<a name="search"></a> 1. Search chats',id:"-1-search-chats",level:2},{value:"1.1 Details search",id:"11-details-search",level:3},{value:"1.2 Message search",id:"12-message-search",level:3},{value:'<a name="filter"></a> 2. Filter chats',id:"-2-filter-chats",level:2}],u={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explains how the search works in the chats section when an agent or an admin desires to look into a particular chat for more information about the user, how the chat started, what was the bot user looking for, etc."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Search")," the entire chat inbox for a particular input like ticket ID, customer details, etc. You can also apply filters on top of the global search results to further refine them. "),(0,i.kt)("li",{parentName:"ul"},"You can apply ",(0,i.kt)("strong",{parentName:"li"},"filters")," like date, agent in their current chat tab, etc.  ")),(0,i.kt)("p",null,"In this article, you will learn:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#search"},"How to search chats?")," "),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#filter"},"How to filter chats?"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To navigating to the Chats section, click ",(0,i.kt)("strong",{parentName:"p"},"Overview")," > ",(0,i.kt)("strong",{parentName:"p"},"Inbox"),". Select ",(0,i.kt)("strong",{parentName:"p"},"Chats"),".   "),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/sQvGw89.png",alt:null}))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"When the search is performed first before applying filters, it is a ",(0,i.kt)("strong",{parentName:"li"},"Global search"),", that is, when an inbox agent/admin searches for a keyword, it is fetched from the entire chat list. Filters can be applied on top of the searched results. "),(0,i.kt)("li",{parentName:"ul"},"When the filters are applied first (for example, to apply filters as Tags = Payments on Active chats) and then a search is performed, the results will be fetched from the filtered values (Active chats and Tags = Payments). "))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"On the chats section, you can find ",(0,i.kt)("strong",{parentName:"p"},"Chats list"),", ",(0,i.kt)("strong",{parentName:"p"},"Message pane"),", and ",(0,i.kt)("strong",{parentName:"p"},"Details list"),"."),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/m0FfeXj.png",alt:null}))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Agents can only search for the chats that are assigned to/transferred/collaborated with them while Admins can search within all the live chats.")),(0,i.kt)("h2",{id:"-1-search-chats"},(0,i.kt)("a",{name:"search"})," 1. Search chats"),(0,i.kt)("p",null,"There is a search and several filtering options to help you find messages, live chat request info, description, and other info shared in chats."),(0,i.kt)("img",{src:"https://i.imgur.com/M7G5NVg.png",alt:"drawing",width:"60%"}),(0,i.kt)("p",null,"Start any search from the search box at the top of the chats page. When you type a keyword, ticket ID, or description, chats will show all related results.\nEither choose one of the suggested results or press Enter to get a full list."),(0,i.kt)("p",null,"You will see a list below the search bar of the chats page. Choose one of the chats to get a full view in the middle message pane."),(0,i.kt)("p",null,"When searching globally through the entire list of chats, there are two types of the search process:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Details Search"),(0,i.kt)("li",{parentName:"ul"},"Message Search")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Once a user starts searching, the default tabs would change to two fixed tabs - ",(0,i.kt)("strong",{parentName:"p"},"Details search")," and ",(0,i.kt)("strong",{parentName:"p"},"Message Search"),".")),(0,i.kt)("img",{src:"https://i.imgur.com/jMGLHEf.png",alt:"drawing",width:"70%"}),(0,i.kt)("h3",{id:"11-details-search"},"1.1 Details search"),(0,i.kt)("p",null,"Details search provides results from chat meta details like name, ticket ID, description, etc, which searches from the details pane. The results can be changed based on the search items you are looking for. The following can be searched for using in details search:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ticket No"),(0,i.kt)("li",{parentName:"ul"},"Description"),(0,i.kt)("li",{parentName:"ul"},"Note"),(0,i.kt)("li",{parentName:"ul"},"Contact name"),(0,i.kt)("li",{parentName:"ul"},"Contact email"),(0,i.kt)("li",{parentName:"ul"},"Contact phone"),(0,i.kt)("li",{parentName:"ul"},"Custom Field - All fields except radio buttons, checkboxes, tags, etc., can be searched (i.e multiple selectable options are not available).")),(0,i.kt)("p",null,"The search result changes when you switch from details to message search."),(0,i.kt)("h3",{id:"12-message-search"},"1.2 Message search"),(0,i.kt)("p",null,"This search shows results from content within the conversation i.e searches the keyword you are looking for within the messages."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/BiIMpqO.png",alt:null})),(0,i.kt)("p",null,'The keyword "agent" is searched from the entire list of chat messages and gives the exact place of the keyword in the conversation which will be highlighted for a quick view.'),(0,i.kt)("p",null,"Hovering over the labels present in the chat preview, will show the matching detail type."),(0,i.kt)("img",{src:"https://i.imgur.com/5Zjk90M.png",alt:"drawing",width:"70%"}),(0,i.kt)("p",null,'The number displayed next to both the search tabs in the above image indicates the number of results found in the chat preview i.e even though the search term "dhinesh" matches 6 times (as shown in the labels), the search displays 2 chats which means that it works on the exact match only.'),(0,i.kt)("p",null,"When a user does a message search and clicks on any of the search results, they will be taken/scrolled to that particular message in their entire conversation (each message has its message ID for reference). Here the entire exchange will be highlighted as it is currently not possible to just highlight the matching term."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/wZOAYsT.png",alt:null})),(0,i.kt)("h2",{id:"-2-filter-chats"},(0,i.kt)("a",{name:"filter"})," 2. Filter chats"),(0,i.kt)("p",null,"Filters enable you to search your chat list to quickly find specific messages to and from your customers. Filters make it particularly easy to find things like keywords, the exact needs of a user, etc."),(0,i.kt)("p",null,"Filters can only be applied to the different search results:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Details Search"))),(0,i.kt)("p",null,"Filters can be applied in the details tab list based on the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Agent"),(0,i.kt)("li",{parentName:"ul"},"Date"),(0,i.kt)("li",{parentName:"ul"},"Group"),(0,i.kt)("li",{parentName:"ul"},"Source"),(0,i.kt)("li",{parentName:"ul"},"Status"),(0,i.kt)("li",{parentName:"ul"},"Tags")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When you search first and apply a filter next, the filter will be applied on top of the search results. Whenever you search, it is a new operation and it is global. It will look for matching results across all tabs irrespective of the current tab."),(0,i.kt)("p",{parentName:"admonition"},"Whenever you first apply a filter, it will only filter within the current tab ","[ My chats, Active chats, etc.,]"," i.e, the chats list as shown in the image below:"),(0,i.kt)("img",{src:"https://i.imgur.com/oyByMRC.png",alt:"drawing",width:"60%"}),"  ",(0,i.kt)("p",{parentName:"admonition"},"If a user has applied some filters already and then searches for another keyword, the search will reset the applied filters and provide completely new results.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Message search"))),(0,i.kt)("p",null,"In the messages tab, the filtering option is disabled for time being as the filter icon will be disabled."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This filter is only available for Admins/supervisors. Agents will not have any filter for message searches.")),(0,i.kt)("p",null,"After searching and filtering for the data user is looking for, the user can go back to the default settings. There is a floating exit button at the bottom of the search results to exit the search operation & go back to the default tabs."),(0,i.kt)("img",{src:"https://i.imgur.com/3g6VjPW.png",alt:"drawing",width:"40%"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Clicking the 'X' icon in the search bar would only clear the search term and does not exit the search operation.")),(0,i.kt)("p",null,"When a user does a details search with a term, we will produce a label that matches the search term with the particular chat's details. For example, Description, Ticket ID, Note, etc."))}m.isMDXComponent=!0}}]);