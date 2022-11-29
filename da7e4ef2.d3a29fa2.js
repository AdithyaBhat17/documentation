(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{393:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(454)),o=["components"],i={title:"Jira",sidebar_label:"Jira"},b={unversionedId:"platform_concepts/appConfiguration/jira",id:"platform_concepts/appConfiguration/jira",isDocsHomePage:!1,title:"Jira",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/jira.md",slug:"/platform_concepts/appConfiguration/jira",permalink:"/docs/platform_concepts/appConfiguration/jira",version:"current",sidebar_label:"Jira",sidebar:"platform_concepts",previous:{title:"Intercom Live Chat",permalink:"/docs/platform_concepts/appConfiguration/intercom-livechat"},next:{title:"Kapture CRM Live Chat",permalink:"/docs/platform_concepts/appConfiguration/kapture-crm"}},c=[{value:"Use-cases",id:"use-cases",children:[{value:"Get Issue Details:-",id:"get-issue-details-",children:[]},{value:"Get Project Details:-",id:"get-project-details-",children:[]},{value:"Get Project Status:-",id:"get-project-status-",children:[]},{value:"Create Jira Issue:-",id:"create-jira-issue-",children:[]},{value:"Search user Details:-",id:"search-user-details-",children:[]},{value:"Create Project:-",id:"create-project-",children:[]},{value:"Search issues by query:-",id:"search-issues-by-query-",children:[]}]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,o);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"scope-of-integration"},"Scope of Integration"),Object(l.b)("p",null,"Yellow.ai Integration with Jira allows you to seamlessly connect your jira cloud with the yellow.ai platform. Using this integration, one can create issue, view issue details, create project, get project details or get user details."),Object(l.b)("h2",{id:"use-cases"},"Use-cases"),Object(l.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(l.b)("h3",{id:"get-issue-details-"},"Get Issue Details:-"),Object(l.b)("p",null,"  From this method you can get the issue details.\n",Object(l.b)("em",{parentName:"p"},"Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Field Name"),Object(l.b)("td",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("td",{parentName:"tr",align:null},"Remarks")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"issueIdOrKey*"),Object(l.b)("td",{parentName:"tr",align:null},"INTG-189"),Object(l.b)("td",{parentName:"tr",align:null},"Issue Key or Issue Id.")))),Object(l.b)("h4",{id:"output-response-should-be-stored-in-object-type-variables-"},"Output Response should be stored in object type variables \\"),Object(l.b)("h3",{id:"get-project-details-"},"Get Project Details:-"),Object(l.b)("p",null," From this method you can get Project Details.\n",Object(l.b)("em",{parentName:"p"},"Node Input Params:-")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Field Name"),Object(l.b)("td",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("td",{parentName:"tr",align:null},"Remarks")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"projectIdOrKey*"),Object(l.b)("td",{parentName:"tr",align:null},"INTG or 10004"),Object(l.b)("td",{parentName:"tr",align:null},"Project Key or Project Id.")))),Object(l.b)("h4",{id:"output-response-should-be-stored-in-object--type-variables"},"OutPut Response should be stored in Object  type variables"),Object(l.b)("h3",{id:"get-project-status-"},"Get Project Status:-"),Object(l.b)("p",null,"   From this method you can get Project Status Details.\n",Object(l.b)("em",{parentName:"p"},"Node Input Params:-")," "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Field Name"),Object(l.b)("td",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("td",{parentName:"tr",align:null},"Remarks")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"projectIdOrKey*"),Object(l.b)("td",{parentName:"tr",align:null},"INTG or 10004"),Object(l.b)("td",{parentName:"tr",align:null},"Project Key or Project Id.")))),Object(l.b)("h4",{id:"output-response-should-be-stored-in-array-type-variables"},"Output Response should be stored in Array type variables"),Object(l.b)("h3",{id:"create-jira-issue-"},"Create Jira Issue:-"),Object(l.b)("p",null,"Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask. A transition may be applied, to move the issue or subtask to a workflow step other than the default start step, and issue properties set.\nCreating a subtask differs from creating an issue as follows:\n",Object(l.b)("inlineCode",{parentName:"p"},"issueType")," must be set to a subtask issue type .\n",Object(l.b)("inlineCode",{parentName:"p"},"parent")," must contain the ID or key of the parent issue.\nThis action node is based on V2 action node in which field are fetching dynamically."),Object(l.b)("p",null,"  ",Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/E65lUhBYmzg41659070058326.gif",alt:"Integration_Gif"}),"\nFollowing the above steps will connect your Google Sheets with Yellow.ai platform."),Object(l.b)("h3",{id:"search-user-details-"},"Search user Details:-"),Object(l.b)("p",null,"  From this method you can fetch user details.Finds users with a structured query and returns a ",Object(l.b)("a",{parentName:"p",href:"https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination"},"paginated")," list of user details"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Node Input Params:-")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Field Name"),Object(l.b)("td",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("td",{parentName:"tr",align:null},"Remarks")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"userNameOrEmail*"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:manish.kumar@yellow.ai"},"manish.kumar@yellow.ai")),Object(l.b)("td",{parentName:"tr",align:null},"Username or emal.")))),Object(l.b)("h4",{id:"output-response-should-be-stored-in-array-type-variable"},"Output Response should be stored in Array type variable."),Object(l.b)("h3",{id:"create-project-"},"Create Project:-"),Object(l.b)("p",null,"   From this method you can create project..\n",Object(l.b)("em",{parentName:"p"},"Node Input Params:-")," "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}),Object(l.b)("th",{parentName:"tr",align:null}))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Field Name"),Object(l.b)("td",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("td",{parentName:"tr",align:null},"Remarks")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"nameOfProject*"),Object(l.b)("td",{parentName:"tr",align:null},"Example Project"),Object(l.b)("td",{parentName:"tr",align:null},"Name of Project")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"key"),Object(l.b)("td",{parentName:"tr",align:null},"INTG"),Object(l.b)("td",{parentName:"tr",align:null},"Unique Key value")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"projectTypeKey"),Object(l.b)("td",{parentName:"tr",align:null},"Bussiness,Software"),Object(l.b)("td",{parentName:"tr",align:null},"Project type Key enums(Bussiness, Software,Cloud)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"leadAccountId"),Object(l.b)("td",{parentName:"tr",align:null},"16 digit varchar"),Object(l.b)("td",{parentName:"tr",align:null},"Account Id of user, use search user details action node to get accountId")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"email"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"mailto:manish.kumar@yellow.ai"},"manish.kumar@yellow.ai")),Object(l.b)("td",{parentName:"tr",align:null},"Jira Email address of person who creating project")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"apiToken"),Object(l.b)("td",{parentName:"tr",align:null},"a12Esjsjs!23"),Object(l.b)("td",{parentName:"tr",align:null},"Api Token")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"jiraCompanyDomain"),Object(l.b)("td",{parentName:"tr",align:null},"yellowmessenger"),Object(l.b)("td",{parentName:"tr",align:null},"Subdomain name of jira board")))),Object(l.b)("h4",{id:"projecttypekey-enums--business-service_desk-software"},"ProjectTypeKey Enums- ",Object(l.b)("inlineCode",{parentName:"h4"},"business, service_desk, software")),Object(l.b)("h4",{id:"response-should-be-stored-in-object-type-variables"},"Response Should be stored in Object type variables."),Object(l.b)("h3",{id:"search-issues-by-query-"},"Search issues by query:-"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"Returns lists of issues matching a query string. Use this resource to provide auto-completion suggestions when the user is looking for an issue using a word or string.\n")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Node Input Params"),"\n|  |  |  |\n|---|---|---|\n| Field Name| Sample Input Remarks|\n| query* | Test Issue | Search Query of issue.|"),Object(l.b)("h4",{id:"response-should-be-stored-in-object-type-variables-1"},"Response should be stored in object type variables"),Object(l.b)("h1",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"Configuring the integration with jira iis straightforward. Follow the steps defined below to start integrating:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Create an application on ",Object(l.b)("a",{parentName:"p",href:"https://developer.atlassian.com/console/myapps/"},"https://developer.atlassian.com/console/myapps/"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Select Oauth 2.0 integration "))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/TGZ0kqG4h79e1658993552653.png",alt:"alt_text",title:"image_tooltip"})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Go to Console -> My apps -> youAppName -> Permission -> jira Api  then click on add  ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/7iSCsKEKczOD1658993957398.png",alt:"alt_text",title:"image_tooltip"})),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"Add and configure your app\u2019s API scopes.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/7iSCsKEKczOD1658993957398.png",alt:"alt_text",title:"image_tooltip"})),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"Then Go to Authorization and copy the url from integration card then configure the url there. \\")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/7CvlfU4omlpP1658994104038.png",alt:"alt_text",title:"image_tooltip"})),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/rt9Dk704U1r31658994142607.png",alt:"alt_text",title:"image_tooltip"})),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/mSWay36LfoOU1658994204859.png",alt:"alt_text",title:"image_tooltip"})),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Go to setting then copy client Id and client Secret then paste in to integration form and connect. It is oauth based integration hence jira will ask to give access to above app then allow. Then you can use jira integration action node.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/KJI6MKPEM00A1658994256776.png",alt:"alt_text",title:"image_tooltip"})),Object(l.b)("ol",{start:7},Object(l.b)("li",{parentName:"ol"},"Get ApiToken value for using inside the action-node. follow the below steps\nClick on Profile icon on top-right -> Manage Account -> Security -> API Token -> Create and manage API tokens -> create new API token and copy the value and paste somewhere for your reference. ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/egTVdRkrWqwu1659068555096.png",alt:"alt_text",title:"image_tooltip"})))}p.isMDXComponent=!0},454:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||l;return a?r.a.createElement(d,i(i({ref:t},c),{},{components:a})):r.a.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);