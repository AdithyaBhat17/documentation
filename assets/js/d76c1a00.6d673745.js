"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[9443],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return a?r.createElement(h,l(l({ref:t},m),{},{components:a})):r.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},29175:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),l=["components"],o={sidebar_label:"Import users",title:"Import users through CSV file",tags:["csv import","import bulk users","add bulk users","edit bulk users","add users"]},s=void 0,p={unversionedId:"platform_concepts/engagement/cdp/user_data/import_users",id:"platform_concepts/engagement/cdp/user_data/import_users",title:"Import users through CSV file",description:"Use a CSV file import to bulk import new users or update existing user data. You can choose the fields to import from the ones available in the CSV file.  It includes an error report post-import to help you identify errors in the CSV file easily.",source:"@site/docs/platform_concepts/engagement/cdp/user_data/import_users.md",sourceDirName:"platform_concepts/engagement/cdp/user_data",slug:"/platform_concepts/engagement/cdp/user_data/import_users",permalink:"/docs/platform_concepts/engagement/cdp/user_data/import_users",draft:!1,tags:[{label:"csv import",permalink:"/docs/tags/csv-import"},{label:"import bulk users",permalink:"/docs/tags/import-bulk-users"},{label:"add bulk users",permalink:"/docs/tags/add-bulk-users"},{label:"edit bulk users",permalink:"/docs/tags/edit-bulk-users"},{label:"add users",permalink:"/docs/tags/add-users"}],version:"current",frontMatter:{sidebar_label:"Import users",title:"Import users through CSV file",tags:["csv import","import bulk users","add bulk users","edit bulk users","add users"]},sidebar:"platform_concepts",previous:{title:"Add individual users",permalink:"/docs/platform_concepts/engagement/cdp/user_data/add_users"},next:{title:"Capture user data through conversations",permalink:"/docs/platform_concepts/engagement/cdp/user_data/conv_in_builder"}},m={},d=[{value:"Step 1: Create CSV file with user details",id:"step-1-create-csv-file-with-user-details",level:2},{value:"Step 2: Import CSV file",id:"step-2-import-csv-file",level:2},{value:"Retain imported user data",id:"retain-imported-user-data",level:4},{value:"Update existing user data",id:"update-existing-user-data",level:4},{value:"Step 3: Analyse import errors",id:"step-3-analyse-import-errors",level:2}],u={toc:d};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Use a CSV file import to bulk import new users or update existing user data. You can choose the fields to import from the ones available in the CSV file.  It includes an error report post-import to help you identify errors in the CSV file easily. "),(0,i.kt)("p",null,"The following are the three different steps involved in importing a CSV file."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#step-1-create-csv-file-with-user-details"},"Creating a CSV file with user details")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#step-2-import-csv-file"},"Importing the created CSV file")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#step-3-analyse-import-errors"},"Analysing import"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"step-1-create-csv-file-with-user-details"},"Step 1: Create CSV file with user details"),(0,i.kt)("p",null,"Create a CSV file with user details and ensure that the values passed in the CSV file adhere to the data types of user properties."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A CSV file cannot exceed 30 MB.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Use appropriate header names"),": It becomes easy to map headers when their names are similar to user properties."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Use the right data type"),": Data type validated before importing each user record. If the validation fails, adding or updating the record will fail. ")),(0,i.kt)("p",null,"The following table shows the data types of each user property with accepted values."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Any string value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"List"),(0,i.kt)("td",{parentName:"tr",align:null},"Semicolon ; separated values without spaces.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"email"),(0,i.kt)("td",{parentName:"tr",align:null},"A valid email address format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Number"),(0,i.kt)("td",{parentName:"tr",align:null},"Any integer or decimal number with max of 15 digits.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Phone"),(0,i.kt)("td",{parentName:"tr",align:null},"A valid phone number with country code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:null},"A valid URL format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"date"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO date format - ",(0,i.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DD"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dateTime"),(0,i.kt)("td",{parentName:"tr",align:null},"ISO standard date-time format - ",(0,i.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DD hh:mm:ss"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"time"),(0,i.kt)("td",{parentName:"tr",align:null},"Standard time format - ",(0,i.kt)("inlineCode",{parentName:"td"},"hh:mm:ss"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Value could be ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),", this is case insensitive.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tags"),(0,i.kt)("td",{parentName:"tr",align:null},"Semicolon ; separated values without spaces. Example: tag1;tag2")))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Prefix country codes")," to mobile numbers - CountryCode+PhoneNumber. For example, an Indian phone number could be 919011111111 where ",(0,i.kt)("inlineCode",{parentName:"p"},"91")," is the country code and rest is a phone number.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Include all the properties")," you want to import such as firstname, lastname, gender, country, city, timezone, email optin, sms optin, or any custom property that is added for the project.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add tags")," that you want to associate with each user. To add multiple tags to a user, use a semicolon (;) between each tag without space. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"regular_customers;campaign_responders"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/8CKrTCS.jpg",alt:null})))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"It is required to pass phone numbers with country codes in a CSV file."),(0,i.kt)("li",{parentName:"ul"},"You can associate any column header to ",(0,i.kt)("inlineCode",{parentName:"li"},"userId"),". Ensure the column contains unique identifiers such as phone number or email address. There is no need to mention it separately in the CSV file."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"step-2-import-csv-file"},"Step 2: Import CSV file"),(0,i.kt)("p",null,"To import the CSV file with user details, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On Engage, click ",(0,i.kt)("strong",{parentName:"li"},"User 360")," > ",(0,i.kt)("strong",{parentName:"li"},"Add user")," > ",(0,i.kt)("strong",{parentName:"li"},"Import users"),".\n",(0,i.kt)("img",{parentName:"li",src:"https://i.imgur.com/h2s8nsz.png",alt:null}))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Upload .csv")," and add the CSV file that you have created.\n",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/SP7HQ3t.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Map CSV headers with the user properties. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Select the CSV header that includes ",(0,i.kt)("inlineCode",{parentName:"li"},"userId")," in the ",(0,i.kt)("strong",{parentName:"li"},"User ID")," column."),(0,i.kt)("li",{parentName:"ul"},"Associate each CSV header (column 2) with the User property (column 4).\n",(0,i.kt)("img",{parentName:"li",src:"https://i.imgur.com/pcotUYF.png",alt:null}))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If a CSV header is not mapped to any user property, that CSV column will not be imported.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("strong",{parentName:"p"},"Resolve conflicts")," set the action to be performed to the record when a user ID in the CSV file already exists in User 360. A conflict occurs when the userId imported through the CSV file already exists in User 360. "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/w9DvsBR.png",alt:null})))),(0,i.kt)("h4",{id:"retain-imported-user-data"},"Retain imported user data"),(0,i.kt)("p",null,"This replaces the entire user record with the ones available in the CSV file."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The existing values will be replaced with the ones in the CSV file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The values will be empty for properties that are either not mapped or not specified in the CSV file."),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/EM59i4Q.png",alt:null})))),(0,i.kt)("h4",{id:"update-existing-user-data"},"Update existing user data"),(0,i.kt)("p",null,"Updates the existing properties of the user with the ones imported through the CSV file. The existing properties that are not specified in the CSV file or not mapped will remain unchanged."),(0,i.kt)("p",null,"   ",(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/Q6gWZ66.png",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the CSV file has two user records with the same userId, the data will be updated as per the sequence in the CSV file. The user record is updated with the data that comes first in the CSV and then with the ones that comes later.\nFor example, if there are two records with the same userId - one in row 10 and another in row 15:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The record is first updated with the data available in row 10."),(0,i.kt)("li",{parentName:"ul"},"It is then updated as per row 15."))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check ",(0,i.kt)("strong",{parentName:"p"},"Merge tags")," to retain existing tags and also add new tags in the CSV file if the userId that you are importing already exists. This overrides the behaviour of tags configured in Step 5."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/z3VGPUJ.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next")," to proceed.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In ",(0,i.kt)("strong",{parentName:"p"},"Tags"),", add tags to the entire set of users in the import. By default, a tag with the name {imported_timestamp} - ",(0,i.kt)("inlineCode",{parentName:"p"},"DDMonYY_HH:MM")," - is added to the import. To add more tags, enter the tag name and press Enter."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/prCfNqu.png",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To create a segment with the imported users, check ",(0,i.kt)("strong",{parentName:"p"},"Create a segment of imported users based on tags assigned above")," and enter the ",(0,i.kt)("strong",{parentName:"p"},"Segment name"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/54TZVsw.png",alt:null})))),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Import"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZXswJNr.png",alt:null})))),(0,i.kt)("p",null,"You can see the Status of the import."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"In progress"),": It states that the import activity is going on. You will see this immediately when you import a CSV file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Completed"),": It states that the import activity is completed. There could be conflicts in the imported records and you can see that in Failed users."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/1L2TjVR.png",alt:null})))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Failed"),": It states that the import activity has failed due to reasons like incorrect file format or any other technical errors. ")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Users are automatically added to the segment every time the user updates to match those conditions."),(0,i.kt)("li",{parentName:"ul"},"If the ",(0,i.kt)("a",{parentName:"li",href:"../enriching_user_profiles/user_id"},"userId")," is not passed in the CSV, yellow.ai creates and assigns an internally generated userId to each user."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"step-3-analyse-import-errors"},"Step 3: Analyse import errors"),(0,i.kt)("p",null,"Once you import a CSV file, you can check what happened with the records. "),(0,i.kt)("p",null,"During the import, it is possible that new records are not always created but could also result in one or more of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Created new records with the details provided in the CSV file."),(0,i.kt)("li",{parentName:"ul"},"Updated existing records with details provided in the CSV file."),(0,i.kt)("li",{parentName:"ul"},"Failed to add or update users due to wrong column mapping, data type mismatch, or some other error.")),(0,i.kt)("p",null,"To see errors in the import:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"On Engage, go to ",(0,i.kt)("strong",{parentName:"li"},"User 360"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add users")," > ",(0,i.kt)("strong",{parentName:"li"},"Import users"),".")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Header"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"File uploaded"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the imported file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Uploaded Date"),(0,i.kt)("td",{parentName:"tr",align:null},"Date when the file was uploaded.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Total users"),(0,i.kt)("td",{parentName:"tr",align:null},"Total number of user records in the CSV file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"New users"),(0,i.kt)("td",{parentName:"tr",align:null},"Total number of new user added through the import.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Conflicting users"),(0,i.kt)("td",{parentName:"tr",align:null},"Total number of user records in the CSV file that conflicted with the existing users in User 360.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Failed users"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of user records that couldn't import.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tags"),(0,i.kt)("td",{parentName:"tr",align:null},"User tags associated with all the users of the import. This includes the default tag and any other tags that were added on ",(0,i.kt)("em",{parentName:"td"},"Add tags and segment users")," screen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"User segment"),(0,i.kt)("td",{parentName:"tr",align:null},"Segment created with the user list on the ",(0,i.kt)("em",{parentName:"td"},"Add tags and segment users")," screen.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Status"),(0,i.kt)("td",{parentName:"tr",align:null},"Status of the import - In progress, Completed, or Cancelled.")))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the import for which you want to download the error report and click ",(0,i.kt)("img",{src:"https://i.imgur.com/qGw3wWp.png",width:"15"}),". The downloaded Excel file contains includes the following information."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/PVDp28M.png",alt:null})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Summary"),": Shows the count of user records that were newly added, failed, and merged into the existing user records."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Records that were imported as new users (new users).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Records for which import failed (failed records).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Records that were merged into existing users (updated records). The following information is available for failed records:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"BOT_ID"),": Bot ID for which the CSV was uploaded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"REQUEST_PAYLOAD"),": The user record for which an import was attempted but FAILED."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ERROR_PAYLOAD"),": The error details due to which the above user import FAILED:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"invalidDataType"),": Properties for which the wrong ",(0,i.kt)("a",{parentName:"li",href:"#step-1-create-csv-file-with-user-details"},"data type")," was passed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"invalidProperty"),": Properties that do not exist in the user table.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LINE_NUMBER"),": The row number of the user record for which import FAILED.")))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"   ",(0,i.kt)("strong",{parentName:"p"},"What's next?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To see details of a user, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/cdp/user_data/viewuser"},"View user card")),(0,i.kt)("li",{parentName:"ul"},"To export user data, or delete an existing user record, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data"},"Manage user data"),"."),(0,i.kt)("li",{parentName:"ul"},"See how to ",(0,i.kt)("a",{parentName:"li",href:"/docs/platform_concepts/engagement/cdp/user_data_segments/segments_overview"},"create user segments"),".")))}c.isMDXComponent=!0}}]);