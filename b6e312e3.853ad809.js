(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{329:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return h}));var n=a(3),r=a(7),i=(a(0),a(445)),c=["components"],s={title:"Understanding how chat search works",sidebar_label:"Chat search and filters"},l={unversionedId:"platform_concepts/inbox/chats/chatsearch",id:"platform_concepts/inbox/chats/chatsearch",isDocsHomePage:!1,title:"Understanding how chat search works",description:"This document explains how the search works in the chats section when an agent or an admin desires to look into a particular chat for more information about the user, how the chat started, what was the bot user looking for, etc.",source:"@site/docs/platform_concepts/inbox/chats/chatsearch.md",slug:"/platform_concepts/inbox/chats/chatsearch",permalink:"/docs/platform_concepts/inbox/chats/chatsearch",version:"current",sidebar_label:"Chat search and filters",sidebar:"platform_concepts",previous:{title:"Chat screen, user details, and bulk actions",permalink:"/docs/platform_concepts/inbox/chats/chatscreen"},next:{title:"WhatsApp 24hr Window Policy",permalink:"/docs/platform_concepts/inbox/chats/whatsapp-24hr-window-policy"}},o=[{value:'<a name="search"></a> 1. Search chats',id:"1-search-chats",children:[{value:"1.1 Details search",id:"11-details-search",children:[]},{value:"1.2 Message search",id:"12-message-search",children:[]}]},{value:'<a name="filter"></a> 2. Filter chats',id:"2-filter-chats",children:[{value:"2.1 Search details",id:"21-search-details",children:[]}]},{value:"3. Tradeoffs",id:"3-tradeoffs",children:[]}],b={toc:o};function h(e){var t=e.components,a=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document explains how the search works in the chats section when an agent or an admin desires to look into a particular chat for more information about the user, how the chat started, what was the bot user looking for, etc."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Search")," the entire chat inbox for a particular input like ticket ID, customer details, etc. You can also apply filters on top of the global search results to further refine them. "),Object(i.b)("li",{parentName:"ul"},"You can apply ",Object(i.b)("strong",{parentName:"li"},"filters")," like date, agent in their current chat tab, etc.  ")),Object(i.b)("p",null,"In this article, you will learn:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#search"},"How to search chats?")," "),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"#filter"},"How to filter chats?"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"To navigating to the Chats section, click ",Object(i.b)("strong",{parentName:"p"},"Overview")," > ",Object(i.b)("strong",{parentName:"p"},"Inbox"),". Select ",Object(i.b)("strong",{parentName:"p"},"Chats"),".   "),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/sQvGw89.png",alt:null}))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Global search")),Object(i.b)("p",{parentName:"div"},"The search function by default is global which means that the entire chat list of an agent is searched. Searches for the input keyword will be fetched from all of the agent's tickets whereas filtering is local (which means that the results obtained from the search can be further refined for a particular keyword or data).\nFor example, you can refine the list of chats in the current tab - my chats, resolved chats, etc."))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"On the chats section, you can find ",Object(i.b)("strong",{parentName:"p"},"Chats list"),", ",Object(i.b)("strong",{parentName:"p"},"Message pane"),", and ",Object(i.b)("strong",{parentName:"p"},"Details list"),"."),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/m0FfeXj.png",alt:null}))),Object(i.b)("h2",{id:"1-search-chats"},Object(i.b)("a",{name:"search"})," 1. Search chats"),Object(i.b)("p",null,"There is a search and several filtering options to help you find messages, ticket info, description, and other info shared in chats."),Object(i.b)("img",{src:"https://i.imgur.com/M7G5NVg.png",alt:"drawing",width:"80%"}),Object(i.b)("p",null,"Start any search from the search box at the top of the chats page. When you type a keyword, ticket ID, or description, chats will show all related results.\nEither choose one of the suggested results or press Enter to get a full list."),Object(i.b)("p",null,"You will see a list below the search bar of the chats page. Choose one of the chats to get a full view in the middle message pane."),Object(i.b)("p",null,"When searching globally through the entire list of chats, there are two types of the search process:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Details Search"),Object(i.b)("li",{parentName:"ul"},"Message Search")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"information_source: Once a user starts searching, the default tabs would change to two fixed tabs - Details search and Message Search."))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/jMGLHEf.png",alt:null})),Object(i.b)("h3",{id:"11-details-search"},"1.1 Details search"),Object(i.b)("p",null,"Details search provides results from chat meta details like name, ticket ID, description, etc, which searches from the details pane. The results can be changed based on the search items you are looking for. The following can be searched for using in details search:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ticket No"),Object(i.b)("li",{parentName:"ul"},"Description"),Object(i.b)("li",{parentName:"ul"},"Note"),Object(i.b)("li",{parentName:"ul"},"Contact name"),Object(i.b)("li",{parentName:"ul"},"Contact email"),Object(i.b)("li",{parentName:"ul"},"Contact phone"),Object(i.b)("li",{parentName:"ul"},"Custom Field - All fields except radio buttons, checkboxes, tags, etc., can be searched (i.e multiple selectable options are not available).")),Object(i.b)("p",null,"The search result changes when you switch from details to message search."),Object(i.b)("h3",{id:"12-message-search"},"1.2 Message search"),Object(i.b)("p",null,"This search shows results from content within the conversation i.e searches the keyword you are looking for within the messages."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/BiIMpqO.png",alt:null})),Object(i.b)("p",null,'The keyword "agent" is searched from the entire list of chat messages and gives the exact place of the keyword in the conversation which will be highlighted for a quick view.'),Object(i.b)("h2",{id:"2-filter-chats"},Object(i.b)("a",{name:"filter"})," 2. Filter chats"),Object(i.b)("p",null,"Filters enable you to search your chat list to quickly find specific messages to and from your customers. Filters make it particularly easy to find things like keywords, the exact needs of a user, etc."),Object(i.b)("p",null,"Filters can only be applied to the different search results:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Details Search"))),Object(i.b)("p",null,"Filters can be applied in the details tab list based on the following options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Agent"),Object(i.b)("li",{parentName:"ul"},"Date"),Object(i.b)("li",{parentName:"ul"},"Group"),Object(i.b)("li",{parentName:"ul"},"Source"),Object(i.b)("li",{parentName:"ul"},"Status"),Object(i.b)("li",{parentName:"ul"},"Tags")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Message search"))),Object(i.b)("p",null,"In the messages tab, the filtering option is disabled for time being as the filter icon will be disabled."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This filter is only available for Admins/supervisors. Agents will not have any filter for message searches."))),Object(i.b)("p",null,"After searching and filtering for the data user is looking for, the user can go back to the default settings. There is a floating exit button at the bottom of the search results to exit the search operation & go back to the default tabs."),Object(i.b)("img",{src:"https://i.imgur.com/3g6VjPW.png",alt:"drawing",width:"60%"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Clicking the 'X' icon in the search bar would only clear the search term and does not exit the search operation."))),Object(i.b)("p",null,"When a user does a details search with a term, we will produce a label that matches the search term with the particular chat's details\nFor example, Description, Ticket Id, Note, etc."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Hovering over the labels present in the chat preview, will show the matching detail type.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Each label will have a size of 82px.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If a search result has multiple matches i.e labels, we'll show at most 3.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The order/priority in which these labels are shown below:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Ticket Id"),Object(i.b)("li",{parentName:"ul"},"Contact name"),Object(i.b)("li",{parentName:"ul"},"Contact email"),Object(i.b)("li",{parentName:"ul"},"Contact number"),Object(i.b)("li",{parentName:"ul"},"Notes"),Object(i.b)("li",{parentName:"ul"},"Description"),Object(i.b)("li",{parentName:"ul"},"Custom field")))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/5Zjk90M.png",alt:null})),Object(i.b)("p",null,'The number displayed next to both the search tabs in the above image indicates the number of results found in the chat preview i.e even though the search term "dhinesh" matches 6 times (as shown in the labels), the search displays 2 chats which means that it works on the exact match only.'),Object(i.b)("p",null,"When a user does a message search and clicks on any of the search results, they will be taken/scrolled to that particular message in their entire conversation (each message has its message id for reference). Here the entire exchange will be highlighted as it is currently not possible to just highlight the matching term."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/wZOAYsT.png",alt:null})),Object(i.b)("p",null,"The usage of time stamps in the search is as follows:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Duration"),Object(i.b)("th",{parentName:"tr",align:"center"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"< 1 hour"),Object(i.b)("td",{parentName:"tr",align:"center"},"'x' minutes ago")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"< 24 hours"),Object(i.b)("td",{parentName:"tr",align:"center"},"'x' hours ago")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"> 24 hours"),Object(i.b)("td",{parentName:"tr",align:"center"},"'x' days ago")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"> month"),Object(i.b)("td",{parentName:"tr",align:"center"},"'x' months ago")))),Object(i.b)("p",null,"A number of search results:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Number"),Object(i.b)("th",{parentName:"tr",align:"center"},"Usage"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"0 - 999"),Object(i.b)("td",{parentName:"tr",align:"center"},"The same number Eg: If the number is 851, the same number will be used")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"1000 - 1999"),Object(i.b)("td",{parentName:"tr",align:"center"},"1k+")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"2000 - 2999"),Object(i.b)("td",{parentName:"tr",align:"center"},"2k+")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"999000 - 999999"),Object(i.b)("td",{parentName:"tr",align:"center"},"999k+")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"> 1000000"),Object(i.b)("td",{parentName:"tr",align:"center"},"1M+")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If a user searches with more than 1 term, the result should be an OR operation.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Agents can only search for the tickets that are assigned to/transferred/collaborated with them while Admins can search for all the tickets."))))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"When you search first and apply a filter next, the filter will be applied on top of the search results. Whenever you search, it is a new operation and it is global. It'll look for matching results across all tabs irrespective of the current tab."),Object(i.b)("p",{parentName:"div"},"Whenever you first apply a filter, it'll only filter within the current tab ","[ My chats, Active chats, etc.,]"," i.e, the chats list as shown in the image below:"),Object(i.b)("img",{src:"https://i.imgur.com/oyByMRC.png",alt:"drawing",width:"60%"}),"  ",Object(i.b)("p",{parentName:"div"},"If a user has applied some filters already and then searches for another keyword, the search will reset the applied filters and provide completely new results."))),Object(i.b)("h3",{id:"21-search-details"},"2.1 Search details"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:null},"Event"),Object(i.b)("th",{parentName:"tr",align:null},"Properties"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"When user performs a details search on chat tickets"),Object(i.b)("td",{parentName:"tr",align:null},"chat-ticket-search"),Object(i.b)("td",{parentName:"tr",align:null},"type - details, maxRole, botId, botName, moduleName")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"When user performs message search on chat tickets"),Object(i.b)("td",{parentName:"tr",align:null},"chat-ticket-search"),Object(i.b)("td",{parentName:"tr",align:null},"type - message, maxRole - Inbox Agent, Inbox Admin, Admin, botId, botName, moduleName")))),Object(i.b)("h2",{id:"3-tradeoffs"},"3. Tradeoffs"),Object(i.b)("p",null,"When a message search result is clicked, instead of loading -100 & +100 messages from the matching part of the conversation, we'll load the entire conversation messages since we currently can't paginate the recent (bottom) messages."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Assumption"),":\nIdeally, a ticket would not have 1000s of messages in it. "),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Look out for"),":\nCount of instances where the ticket has a large no. of messages\nIncreased loading time to product search results"))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/YzV8X1r.png",alt:null})))}h.isMDXComponent=!0},445:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),h=b(a),m=n,d=h["".concat(c,".").concat(m)]||h[m]||p[m]||i;return a?r.a.createElement(d,s(s({ref:t},o),{},{components:a})):r.a.createElement(d,s({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var o=2;o<i;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);