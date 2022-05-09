(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var l=n(3),r=(n(0),n(349));const a={title:"Google Sheets",sidebar_label:"Google Sheets"},o={unversionedId:"platform_concepts/appConfiguration/google-sheets",id:"platform_concepts/appConfiguration/google-sheets",isDocsHomePage:!1,title:"Google Sheets",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/google-sheets.md",slug:"/platform_concepts/appConfiguration/google-sheets",permalink:"/docs/platform_concepts/appConfiguration/google-sheets",version:"current",sidebar_label:"Google Sheets",sidebar:"platform_concepts",previous:{title:"Google Calendar",permalink:"/docs/platform_concepts/appConfiguration/google-calendar"},next:{title:"Hubspot CRM",permalink:"/docs/platform_concepts/appConfiguration/hubspot-crm"}},b=[{value:"Scope of Integration",id:"scope-of-integration",children:[]},{value:"Use-cases",id:"use-cases",children:[{value:"CreateSpreadsheet:-",id:"createspreadsheet-",children:[]},{value:"GetValuesFromSheet:-",id:"getvaluesfromsheet-",children:[]},{value:"Insert/UpdateValuesInSheet:-",id:"insertupdatevaluesinsheet-",children:[]},{value:"ClearValuesInSheet:-",id:"clearvaluesinsheet-",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Navigate to integration tab:-",id:"navigate-to-integration-tab-",children:[]},{value:"Connect your google account:-",id:"connect-your-google-account-",children:[]}]},{value:"References:-",id:"references-",children:[]},{value:"Sample Experience",id:"sample-experience",children:[]}],c={toc:b};function s({components:e,...t}){return Object(r.b)("wrapper",Object(l.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(r.b)("p",null,"Yellow.ai Integration with Google Sheets enables you to seamlessly access Google sheets services. Any customer who has a Google account will be able to connect with yellow.ai using OAuth. Using this integration you can create, read, insert/update and clear values from a spreadsheet."),Object(r.b)("h2",{id:"use-cases"},"Use-cases"),Object(r.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(r.b)("h3",{id:"createspreadsheet-"},"CreateSpreadsheet:-"),Object(r.b)("p",null,"Create spreadsheet integration node helps user in creating a Google spreadsheet using the spreadsheet name and the sheet names provided by the user. These created spreadsheets can be found in user\u2019s Google sheets account with which the integration is enabled."),Object(r.b)("h4",{id:"node-sample-inputs-"},"Node Sample Inputs:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("strong",null,"Parameter")),Object(r.b)("td",null,Object(r.b)("strong",null,"Type")),Object(r.b)("td",null,Object(r.b)("strong",null,"Sample"))),Object(r.b)("tr",null,Object(r.b)("td",null,"title"),Object(r.b)("td",null,"string"),Object(r.b)("td",null,"Demo Sheet")),Object(r.b)("tr",null,Object(r.b)("td",null,"sheets"),Object(r.b)("td",null,"array"),Object(r.b)("td",null,Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'[\n    {\n      "properties": {\n        "title": "Sheet 1 name"\n      }\n    },\n    {\n      "properties": {\n        "title": "Sheet 2 name"\n      }\n    }\n]\n'))))),Object(r.b)("h3",{id:"getvaluesfromsheet-"},"GetValuesFromSheet:-"),Object(r.b)("p",null,"Get values from sheet integration node helps user in retrieving values from sheet. Based on the Spreadsheet ID, Ranges and Major Dimension it will return the values."),Object(r.b)("h4",{id:"node-sample-inputs--1"},"Node Sample Inputs:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("strong",null,"Parameter")),Object(r.b)("td",null,Object(r.b)("strong",null,"Type")),Object(r.b)("td",null,Object(r.b)("strong",null,"Sample"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("em",null,"majorDimension")),Object(r.b)("td",null,Object(r.b)("em",null,"string")),Object(r.b)("td",null,Object(r.b)("em",null,"ROWS"),Object(r.b)("em",null,"(or)"),Object(r.b)("em",null,"COLUMNS"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("em",null,"ranges")),Object(r.b)("td",null,Object(r.b)("em",null,"string")),Object(r.b)("td",null,Object(r.b)("strong",null,Object(r.b)("code",null,Object(r.b)("em",null,"Sheet1!A1:B2"))))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("em",null,"spreadSheetID")),Object(r.b)("td",null,Object(r.b)("em",null,"string")),Object(r.b)("td",null,Object(r.b)("em",null,"1fExJP4rbjNKpbSHySJl4kOjwJ-mGUUzzsCs_qrC0YgI")))),Object(r.b)("h3",{id:"insertupdatevaluesinsheet-"},"Insert/UpdateValuesInSheet:-"),Object(r.b)("p",null,"Insert/Update Values in Sheet integration node helps user in inserting or updating values in a sheet. This node inserts/updates the values in a spreadsheet in the specified range with provided values."),Object(r.b)("h4",{id:"node-sample-inputs--2"},"Node Sample Inputs:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("strong",null,"Parameter")),Object(r.b)("td",null,Object(r.b)("strong",null,"Type")),Object(r.b)("td",null,Object(r.b)("strong",null,"Sample"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("em",null,"majorDimension")),Object(r.b)("td",null,Object(r.b)("em",null,"string")),Object(r.b)("td",null,Object(r.b)("em",null,"ROWS"),Object(r.b)("em",null,"(or)"),Object(r.b)("em",null,"COLUMNS"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("em",null,"range")),Object(r.b)("td",null,Object(r.b)("em",null,"string")),Object(r.b)("td",null,Object(r.b)("code",null,"Sheet1!A1:B3"))),Object(r.b)("tr",null,Object(r.b)("td",null,"values"),Object(r.b)("td",null,"array"),Object(r.b)("td",null,Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},"[\n    [1, 2, 3],\n    [4, 5, 6]\n]\n")))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("em",null,"spreadSheetID")),Object(r.b)("td",null,Object(r.b)("em",null,"string")),Object(r.b)("td",null,Object(r.b)("em",null,"1fExJP4rbjNKpbSHySJl4kOjwJ-mGUUzzsCs_qrC0YgI")))),Object(r.b)("h3",{id:"clearvaluesinsheet-"},"ClearValuesInSheet:-"),Object(r.b)("p",null,"Clear values in a sheet integration node helps users in clearing values in a spreadsheet using the Spreadsheet ID and the Range provided by the user."),Object(r.b)("h4",{id:"node-sample-inputs--3"},"Node Sample Inputs:-"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("strong",null,"Parameter")),Object(r.b)("td",null,Object(r.b)("strong",null,"Type")),Object(r.b)("td",null,Object(r.b)("strong",null,"Sample"))),Object(r.b)("tr",null,Object(r.b)("td",null,"ranges"),Object(r.b)("td",null,Object(r.b)("em",null,"array")),Object(r.b)("td",null,'["Sheet1!A1:B3","Sheet1!A4:B6"]')),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("em",null,"spreadSheetID")),Object(r.b)("td",null,Object(r.b)("em",null,"string")),Object(r.b)("td",null,Object(r.b)("em",null,"1fExJP4rbjNKpbSHySJl4kOjwJ-mGUUzzsCs_qrC0YgI")))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"Configuring the integration with Google sheets is straightforward. Follow the steps defined below to start integrating:"),Object(r.b)("h3",{id:"navigate-to-integration-tab-"},"Navigate to integration tab:-"),Object(r.b)("p",null,"Inside your project, fom the switcher navigate to the Integrations, search for Google Sheets in the search bar, or you can find Google Sheets under Tools & Utilities section.\n",Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/gpzeigOUh0wp1650969736563.png",alt:"Integration_Tab"})),Object(r.b)("h3",{id:"connect-your-google-account-"},"Connect your google account:-"),Object(r.b)("p",null,"One can easily enable Google sheets integration for their bot using Oauth. Follow the below steps to enable Google Sheets integration for your bot:-"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"Sign in with Google")," button."),Object(r.b)("li",{parentName:"ol"},"Login with your Google credentials in the window opened."),Object(r.b)("li",{parentName:"ol"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"Allow Access")," to provide your bot the access to Google Sheets.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/lJDrhSTboKk11650969677157.gif",alt:"Integration_Gif"}),"\nFollowing the above steps will connect your Google Sheets with Yellow.ai platform."),Object(r.b)("h2",{id:"references-"},"References:-"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/create"},"Create a Spreadsheet")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGet"},"Get Values from a Sheet")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate"},"Insert/Update Values in a Sheet")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchClear"},"Clear Values in a Sheet"))),Object(r.b)("h2",{id:"sample-experience"},"Sample Experience"),Object(r.b)("p",null,"Below is a video that depicts how this integration works"),Object(r.b)("p",null,"<",Object(r.b)("strong",{parentName:"p"},"VIDEO WILL BE UPLOADED WITH UPDATED UI DESIGN LANGUAGE"),">"))}s.isMDXComponent=!0},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var l=n(0),r=n.n(l);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),i=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=i(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=l,O=u["".concat(o,".").concat(d)]||u[d]||p[d]||a;return n?r.a.createElement(O,b(b({ref:t},s),{},{components:n})):r.a.createElement(O,b({ref:t},s))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:l,o[1]=b;for(var s=2;s<a;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);