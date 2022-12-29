"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[3053],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},g=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,h=c["".concat(i,".").concat(g)]||c[g]||d[g]||o;return n?l.createElement(h,a(a({ref:t},p),{},{components:n})):l.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5619:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var l=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Google Sheets",sidebar_label:"Google Sheets"},i=void 0,u={unversionedId:"platform_concepts/appConfiguration/google-sheets",id:"platform_concepts/appConfiguration/google-sheets",title:"Google Sheets",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/google-sheets.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/google-sheets",permalink:"/docs/platform_concepts/appConfiguration/google-sheets",draft:!1,tags:[],version:"current",frontMatter:{title:"Google Sheets",sidebar_label:"Google Sheets"},sidebar:"platform_concepts",previous:{title:"Google Calendar",permalink:"/docs/platform_concepts/appConfiguration/google-calendar"},next:{title:"Hubspot CRM",permalink:"/docs/platform_concepts/appConfiguration/hubspot-crm"}},p={},c=[{value:"Scope of Integration",id:"scope-of-integration",level:2},{value:"Use-cases",id:"use-cases",level:2},{value:"CreateSpreadsheet:-",id:"createspreadsheet-",level:3},{value:"Node Sample Inputs:-",id:"node-sample-inputs-",level:4},{value:"GetValuesFromSheet:-",id:"getvaluesfromsheet-",level:3},{value:"Node Sample Inputs:-",id:"node-sample-inputs--1",level:4},{value:"Insert/UpdateValuesInSheet:-",id:"insertupdatevaluesinsheet-",level:3},{value:"Node Sample Inputs:-",id:"node-sample-inputs--2",level:4},{value:"ClearValuesInSheet:-",id:"clearvaluesinsheet-",level:3},{value:"Node Sample Inputs:-",id:"node-sample-inputs--3",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Navigate to integration tab:-",id:"navigate-to-integration-tab-",level:3},{value:"Connect your google account:-",id:"connect-your-google-account-",level:3},{value:"References:-",id:"references-",level:2},{value:"Sample Experience",id:"sample-experience",level:2}],d={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"scope-of-integration"},"Scope of Integration"),(0,o.kt)("p",null,"Yellow.ai Integration with Google Sheets enables you to seamlessly access Google sheets services. Any customer who has a Google account will be able to connect with yellow.ai using OAuth. Using this integration you can create, read, insert/update and clear values from a spreadsheet."),(0,o.kt)("h2",{id:"use-cases"},"Use-cases"),(0,o.kt)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),(0,o.kt)("h3",{id:"createspreadsheet-"},"CreateSpreadsheet:-"),(0,o.kt)("p",null,"Create spreadsheet integration node helps user in creating a Google spreadsheet using the spreadsheet name and the sheet names provided by the user. These created spreadsheets can be found in user\u2019s Google sheets account with which the integration is enabled."),(0,o.kt)("h4",{id:"node-sample-inputs-"},"Node Sample Inputs:-"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Parameter")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Type")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Sample"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"title"),(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"Demo Sheet")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"sheets"),(0,o.kt)("td",null,"array"),(0,o.kt)("td",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n      "properties": {\n        "title": "Sheet 1 name"\n      }\n    },\n    {\n      "properties": {\n        "title": "Sheet 2 name"\n      }\n    }\n]\n'))))),(0,o.kt)("h3",{id:"getvaluesfromsheet-"},"GetValuesFromSheet:-"),(0,o.kt)("p",null,"Get values from sheet integration node helps user in retrieving values from sheet. Based on the Spreadsheet ID, Ranges and Major Dimension it will return the values."),(0,o.kt)("h4",{id:"node-sample-inputs--1"},"Node Sample Inputs:-"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Parameter")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Type")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Sample"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("em",null,"majorDimension")),(0,o.kt)("td",null,(0,o.kt)("em",null,"string")),(0,o.kt)("td",null,(0,o.kt)("em",null,"ROWS"),(0,o.kt)("em",null,"(or)"),(0,o.kt)("em",null,"COLUMNS"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("em",null,"ranges")),(0,o.kt)("td",null,(0,o.kt)("em",null,"string")),(0,o.kt)("td",null,(0,o.kt)("strong",null,(0,o.kt)("code",null,(0,o.kt)("em",null,"Sheet1!A1:B2"))))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("em",null,"spreadSheetID")),(0,o.kt)("td",null,(0,o.kt)("em",null,"string")),(0,o.kt)("td",null,(0,o.kt)("em",null,"1fExJP4rbjNKpbSHySJl4kOjwJ-mGUUzzsCs_qrC0YgI")))),(0,o.kt)("h3",{id:"insertupdatevaluesinsheet-"},"Insert/UpdateValuesInSheet:-"),(0,o.kt)("p",null,"Insert/Update Values in Sheet integration node helps user in inserting or updating values in a sheet. This node inserts/updates the values in a spreadsheet in the specified range with provided values."),(0,o.kt)("h4",{id:"node-sample-inputs--2"},"Node Sample Inputs:-"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Parameter")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Type")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Sample"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("em",null,"majorDimension")),(0,o.kt)("td",null,(0,o.kt)("em",null,"string")),(0,o.kt)("td",null,(0,o.kt)("em",null,"ROWS"),(0,o.kt)("em",null,"(or)"),(0,o.kt)("em",null,"COLUMNS"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("em",null,"range")),(0,o.kt)("td",null,(0,o.kt)("em",null,"string")),(0,o.kt)("td",null,(0,o.kt)("code",null,"Sheet1!A1:B3"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"values"),(0,o.kt)("td",null,"array"),(0,o.kt)("td",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"[\n    [1, 2, 3],\n    [4, 5, 6]\n]\n")))),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("em",null,"spreadSheetID")),(0,o.kt)("td",null,(0,o.kt)("em",null,"string")),(0,o.kt)("td",null,(0,o.kt)("em",null,"1fExJP4rbjNKpbSHySJl4kOjwJ-mGUUzzsCs_qrC0YgI")))),(0,o.kt)("h3",{id:"clearvaluesinsheet-"},"ClearValuesInSheet:-"),(0,o.kt)("p",null,"Clear values in a sheet integration node helps users in clearing values in a spreadsheet using the Spreadsheet ID and the Range provided by the user."),(0,o.kt)("h4",{id:"node-sample-inputs--3"},"Node Sample Inputs:-"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("strong",null,"Parameter")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Type")),(0,o.kt)("td",null,(0,o.kt)("strong",null,"Sample"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ranges"),(0,o.kt)("td",null,(0,o.kt)("em",null,"array")),(0,o.kt)("td",null,'["Sheet1!A1:B3","Sheet1!A4:B6"]')),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("em",null,"spreadSheetID")),(0,o.kt)("td",null,(0,o.kt)("em",null,"string")),(0,o.kt)("td",null,(0,o.kt)("em",null,"1fExJP4rbjNKpbSHySJl4kOjwJ-mGUUzzsCs_qrC0YgI")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Configuring the integration with Google sheets is straightforward. Follow the steps defined below to start integrating:"),(0,o.kt)("h3",{id:"navigate-to-integration-tab-"},"Navigate to integration tab:-"),(0,o.kt)("p",null,"Inside your project, fom the switcher navigate to the Integrations, search for Google Sheets in the search bar, or you can find Google Sheets under Tools & Utilities section.\n",(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/gpzeigOUh0wp1650969736563.png",alt:"Integration_Tab"})),(0,o.kt)("h3",{id:"connect-your-google-account-"},"Connect your google account:-"),(0,o.kt)("p",null,"One can easily enable Google sheets integration for their bot using Oauth. Follow the below steps to enable Google Sheets integration for your bot:-"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Sign in with Google")," button."),(0,o.kt)("li",{parentName:"ol"},"Login with your Google credentials in the window opened."),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Allow Access")," to provide your bot the access to Google Sheets.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/lJDrhSTboKk11650969677157.gif",alt:"Integration_Gif"}),"\nFollowing the above steps will connect your Google Sheets with Yellow.ai platform."),(0,o.kt)("h2",{id:"references-"},"References:-"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/create"},"Create a Spreadsheet")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGet"},"Get Values from a Sheet")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate"},"Insert/Update Values in a Sheet")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchClear"},"Clear Values in a Sheet"))),(0,o.kt)("h2",{id:"sample-experience"},"Sample Experience"),(0,o.kt)("p",null,"Below is a video that depicts how this integration works"),(0,o.kt)("p",null,"<",(0,o.kt)("strong",{parentName:"p"},"VIDEO WILL BE UPLOADED WITH UPDATED UI DESIGN LANGUAGE"),">"))}g.isMDXComponent=!0}}]);