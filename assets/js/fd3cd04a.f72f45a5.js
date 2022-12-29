"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[4100],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],p={title:"SuccessFactors Integration",sidebar_label:"SuccessFactors"},i=void 0,s={unversionedId:"platform_concepts/appConfiguration/successfactors",id:"platform_concepts/appConfiguration/successfactors",title:"SuccessFactors Integration",description:"Configuration Requirements",source:"@site/docs/platform_concepts/appConfiguration/successfactors.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/successfactors",permalink:"/docs/platform_concepts/appConfiguration/successfactors",draft:!1,tags:[],version:"current",frontMatter:{title:"SuccessFactors Integration",sidebar_label:"SuccessFactors"},sidebar:"platform_concepts",previous:{title:"Twilio Verify",permalink:"/docs/platform_concepts/appConfiguration/twilio-verify"},next:{title:"WebEngage",permalink:"/docs/platform_concepts/appConfiguration/webengage"}},c={},u=[{value:"Configuration Requirements",id:"configuration-requirements",level:2},{value:"Employee Profile:",id:"employee-profile",level:2},{value:"Leave Management:",id:"leave-management",level:2},{value:"References",id:"references",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configuration-requirements"},"Configuration Requirements"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"API Endpoint:")," https://","[API-Server]","/odata/v2/","[Entity]","/$metadata"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Authorization token:")," Basic auth"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Basic Base64(username@companyId:password)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Filters:"),"\neq, in, and, or, ge, le, not, like, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$filter=username eq 'abc@abc.com' and location in 'In','Eu'\n")),(0,o.kt)("h2",{id:"employee-profile"},"Employee Profile:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active Employee:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --location --request GET 'https://api44.sapsf.com/odata/v2/User?$filter=username%20eq%20%27abc@yellowmessenger.com%27&$format=json' \\\n--header 'Authorization: Basic XXXXX' \\\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Deactivate / Ex-Employee:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//$filter = username eq 'abc@yellowmessenger.com' and status eq 'f'\ncurl --location --request GET 'https://api44.sapsf.com/odata/v2/User?$filter=username%20eq%20%27abc@yellowmessenger.com%27%20and%20status%20eq%20%27f%27&$format=json&$select=defaultFullName,userId,jobCode,email,hireDate' \\\n--header 'Authorization: Basic XXXXX' \\\n")),(0,o.kt)("p",null,"For getting end-date and other terminate data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl --location --request GET 'https://api44.sapsf.com/odata/v2/EmpEmploymentTermination?$filter=userId%20eq%20300&$format=json' \\\n--header 'Authorization: Basic XXXXX' \\\n")),(0,o.kt)("h2",{id:"leave-management"},"Leave Management:"),(0,o.kt)("p",null,"SuccessFactors leave module entity:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Entity")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Description")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Time Account Type"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets of rules to accrue fixed or a certain amount of balance regularly for each leave type.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Time Type"),(0,o.kt)("td",{parentName:"tr",align:null},"These are nothing but the different leave types in your organization eg. Annual Leave, Study Leave etc")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Time Profile"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets of Leave types applicable to specific employee")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Time Account"),(0,o.kt)("td",{parentName:"tr",align:null},"It holds all the obtained leave balance")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_ED1FF0E74DEAD763FBDB69A56B6E83345A98D794FA7338EBFB12935A0745F67A_1613030763471_image.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to manage time off entity:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login to SuccessFactors with Admin scope"),(0,o.kt)("li",{parentName:"ol"},"Search for ",(0,o.kt)("strong",{parentName:"li"},"Manage Time off structure")," in the top search bar."),(0,o.kt)("li",{parentName:"ol"},"Select the entity from the first dropdown (time account type, time type, employee time, time account etc.)"),(0,o.kt)("li",{parentName:"ol"},"Select the record for update from next dropdown"),(0,o.kt)("li",{parentName:"ol"},"Take Action > Make correction > Make the changes > Save.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Add new record to time off entity:"),"\nFor adding new record to an entity, use the dropdown in the right side and select the entity category that you want to add a record in."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to assign time profile to employee:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Search for the employee in top search bar."),(0,o.kt)("li",{parentName:"ol"},"Goto the employee\u2019s Job information section and click on edit icon"),(0,o.kt)("li",{parentName:"ol"},"Update the Time information details (word schedule, holiday calendar, Time profile)"),(0,o.kt)("li",{parentName:"ol"},"Click on Save, it will automatically create a Time account for the employee.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://paper-attachments.dropbox.com/s_ED1FF0E74DEAD763FBDB69A56B6E83345A98D794FA7338EBFB12935A0745F67A_1613032729109_image.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"According to the above image configuration."),"\n",(0,o.kt)("strong",{parentName:"p"},"Time Profile :")," Time off Test (TIME_OFF_TEST)\n",(0,o.kt)("strong",{parentName:"p"},"Time Type: (*"),"Leave Type",(0,o.kt)("strong",{parentName:"p"},"*)"),"\nSick Leave : SICK_LEAVE\nAnnual Leave 2 : ANNUAL_LEAVE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Leave Balance")),(0,o.kt)("p",null," Get balance wrt already availed leaves in past. (Response1)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//$filter = userId eq 273 and timeAccountType eq 'SICK_LEAVE'\n\ncurl --location --request GET 'https://api44.sapsf.com/odata/v2/EmpTimeAccountBalance?$filter=userId%20eq%20%27273%27%20and%20timeAccountType%20eq%20%27SICK_LEAVE%27&$format=json' \\\n--header 'Authorization: Basic XXXXX' \\\n")),(0,o.kt)("p",null,"Get Leave requests already approved for future leaves. (Response2)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"//$filter = userId eq '273' and timeType eq 'SICK_LEAVE' and startDate ge datetime'{todayDate}T00:00:00' and approvalStatus eq 'APPROVED'\n\ncurl --location --request GET 'https://api44.sapsf.com/odata/v2/EmployeeTime?$filter=userId%20eq%20%27273%27%20and%20timeType%20eq%20%27ANNUAL_LEAVE%27%20and%20startDate%20ge%20datetime%272020-02-04T00:00:00%27%20and%20approvalStatus%20eq%20%27PENDING%27&$format=json&$select=deductionQuantity,approvalStatus,timeType,endDate,startDate,externalCode' \\\n--header 'Authorization: Basic XXXXX' \\\n")),(0,o.kt)("p",null,"Final Balance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"finalBalance = Response1.balance - SUM(Response2[i].deductionQuantity)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Apply Leave")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'//externalCode must be unique for every new request\ncurl --location --request POST \'https://api44.sapsf.com/odata/v2/upsert?workflowConfirmed=true&$format=json\' \\\n--header \'Authorization: Basic XXXXX\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "__metadata": {\n        "uri": "https://api44.sapsf.com/odata/v2/EmployeeTime(\'\\\'\'273\'\\\'\')"\n    },\n    "startDate": "/Date(1611619200000)/",\n    "endDate": "/Date(1611792000000)/",\n    "externalCode": "TRY1234",\n    "approvalStatus": "PENDING",\n    "userIdNav": {\n        "__metadata": {\n            "uri": "https://api44.sapsf.com/odata/v2/User(\'\\\'\'273\'\\\'\')",\n            "type": "SFOData.User"\n        }\n    },\n    "timeTypeNav": {\n        "__metadata": {\n            "uri": "https://api44.sapsf.com/odata/v2/TimeType(\'\\\'\'SICK_LEAVE\'\\\'\')",\n            "type": "SFOData.TimeType"\n        }\n    }\n}\'\n')),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'//Failed Apply Leave\n{\n    "d": [\n        {\n            "key": "EmployeeTime/externalCode=TRY1234",\n            "status": "ERROR",\n            "editStatus": null,\n            "message": "Expected return date must be one day later than end date. with the index 0",\n            "index": 0,\n            "httpCode": 500,\n            "inlineResults": null\n        }\n    ]\n}\n//Success Apply Leave\n{\n    "d": [\n        {\n            "key": "EmployeeTime/externalCode=TRY1234",\n            "status": "OK",\n            "editStatus": "UPSERTED",\n            "message": null,\n            "index": 0,\n            "httpCode": 200,\n            "inlineResults": null\n        }\n    ]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Check in Portal"),"\n",(0,o.kt)("strong",{parentName:"p"},"In User Profile")," : User Profile > Actions > Manage leave of absence.\n",(0,o.kt)("strong",{parentName:"p"},"In Manage Data:")," SF portal > Manage Time Off Structures > Employee Time > ","[externalCode]"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/elq_Uw24PyqLl-s17NbhjHpJlFBr4JLMviAhyp_O1ZfzWLpWJ2TlVz4hHcVnDFB95io1YI0M_IvnmSj-4nko7QnrMtd7Q-SvnLs9B2ipuwRNVKX-5ja5kYUVUJDXb9ZmKoIQAqT9",alt:null})),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"SAP API Guide : ",(0,o.kt)("a",{parentName:"li",href:"https://help.sap.com/viewer/d599f15995d348a1b45ba5603e2aba9b/2011/en-US"},"https://help.sap.com/viewer/d599f15995d348a1b45ba5603e2aba9b/2011/en-US")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://blogs.sap.com/2015/10/16/ec-time-off-for-on-time-hr-management/"},"https://blogs.sap.com/2015/10/16/ec-time-off-for-on-time-hr-management/"))))}d.isMDXComponent=!0}}]);