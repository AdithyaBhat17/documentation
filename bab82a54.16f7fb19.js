(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{346:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),i=(a(0),a(456)),s=["components"],o={sidebar_label:"Manage users",title:"Add users & enrich user data"},l={unversionedId:"platform_concepts/engagement/cdp/user_data/add_users",id:"platform_concepts/engagement/cdp/user_data/add_users",isDocsHomePage:!1,title:"Add users & enrich user data",description:"A user could be your customer, lead, employee, or any other individual associated with your organisation or business.",source:"@site/docs/platform_concepts/engagement/cdp/user_data/add_users.md",slug:"/platform_concepts/engagement/cdp/user_data/add_users",permalink:"/docs/platform_concepts/engagement/cdp/user_data/add_users",version:"current",sidebar_label:"Manage users",sidebar:"platform_concepts",previous:{title:"User properties",permalink:"/docs/platform_concepts/engagement/cdp/user_data/user_properties"},next:{title:"Capture data through conversations",permalink:"/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data"}},c=[{value:"1. Add/edit single user",id:"1-addedit-single-user",children:[]},{value:"2. Add/edit multiple users through CSV import",id:"2-addedit-multiple-users-through-csv-import",children:[{value:"2.1 Import users",id:"21-import-users",children:[]},{value:"2.2 Checklist for CSV import",id:"22-checklist-for-csv-import",children:[]},{value:"2.3 Use the userId column for unique identifiers",id:"23-use-the-userid-column-for-unique-identifiers",children:[]},{value:"2.4 Analyse import errors",id:"24-analyse-import-errors",children:[]}]},{value:"3. Manage users using Rest APIs",id:"3-manage-users-using-rest-apis",children:[]},{value:"4. Manage users through conversations",id:"4-manage-users-through-conversations",children:[]},{value:"5. Manage user data",id:"5-manage-user-data",children:[{value:"5.1 Export user data",id:"51-export-user-data",children:[]},{value:"5.2 Delete user data",id:"52-delete-user-data",children:[]},{value:"5.3 View user activity logs",id:"53-view-user-activity-logs",children:[]}]}],b={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,s);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A user could be your customer, lead, employee, or any other individual associated with your organisation or business. "),Object(i.b)("p",null,"When adding a user, a there could be a conflict where you identify a user with a userId that already exists in the users table."),Object(i.b)("p",null,"When a user who is available on channel1 tries to register with the same identifier on channel 2, all the properties of the new user will be updated as that of the existing user. That is, new user will be made identical to old user and both will be merged."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/qNEdl6g.png",alt:null})),Object(i.b)("p",null,"The following are the different ways in which you can add or users."),Object(i.b)("p",null,"The system can identify a registered user based on the userId. All updates made to this user through Flow builder, also show up in the users table."),Object(i.b)("p",null,"Therefore, while updating user details, make sure the user identifier is registered."),Object(i.b)("p",null,"To know about userId and its importance,  ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_id/"},"read this article"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"To identify a user in Flow builder node, use the ",Object(i.b)("strong",{parentName:"p"},"userId")," property."))),Object(i.b)("h2",{id:"1-addedit-single-user"},"1. Add/edit single user"),Object(i.b)("p",null,"This is best for adding just a few at a time, like prospects you met at an event, or a lead who reached out on LinkedIn."),Object(i.b)("p",null,"To add a single user manually, follow these steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On the User 360 page, click ",Object(i.b)("strong",{parentName:"p"},"Add user")," > ",Object(i.b)("strong",{parentName:"p"},"Single user"),"."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/Pw5g3Vt.png",alt:null}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enter the ",Object(i.b)("strong",{parentName:"p"},"userId")," of the customer along with other details."),Object(i.b)("img",{src:"https://i.imgur.com/LPnNYFF.png",width:"60%"})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Save"),". "))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"To edit a user details"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"On the ",Object(i.b)("strong",{parentName:"li"},"User 360")," page, navigate to the user that you want to edit and click the more options icon > ",Object(i.b)("strong",{parentName:"li"},"Edit user"),".")),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/b3iPfZm.png",alt:null})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Add or remove the required information and click ",Object(i.b)("strong",{parentName:"li"},"Save"),".")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Similarly, you can also delete a user using the more options icon > Delete user."))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"2-addedit-multiple-users-through-csv-import"},"2. Add/edit multiple users through CSV import"),Object(i.b)("p",null,"You can also manage users and user data through CSV import. Use CSV import when you want to add a list of users that you already have, or update specific information of existing users."),Object(i.b)("h3",{id:"21-import-users"},"2.1 Import users"),Object(i.b)("p",null,"To add customers through CSV, follow these steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create a CSV file with user details. Make sure that the column headers match the name of the user property that you want to map with."),Object(i.b)("p",{parentName:"li"},"a. ",Object(i.b)("inlineCode",{parentName:"p"},"UserId")," is mandatory."),Object(i.b)("p",{parentName:"li"},"b. Prefix country codes to mobile numbers - CountryCode+phoneNumber. For example, an Indian phone number could be 919011111111."),Object(i.b)("p",{parentName:"li"},"c. Other properties that you can import are firstname, lastname, gender, country, city, timezone, email optin, sms optin, or any custom property that is added for the project."),Object(i.b)("p",{parentName:"li"},"d. Add tags that you want to associate with each user. When adding multiple tags to a user, use semicolon (;) between each tag without space. For example, regular_customers;campaign_responders."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/fh3NGV8.png",alt:null})))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"These names are ",Object(i.b)("strong",{parentName:"li"},"case sensitive")," and the column header ",Object(i.b)("strong",{parentName:"li"},"should not contain spaces")," before/after.")))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"On Engage, click ",Object(i.b)("strong",{parentName:"p"},"User 360")," > ",Object(i.b)("strong",{parentName:"p"},"Add user")," > ",Object(i.b)("strong",{parentName:"p"},"Import users"),"."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/KkDLtC2.png",alt:null}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Upload the CSV file that you have created. ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In ",Object(i.b)("strong",{parentName:"p"},"Tags"),", add custom tags for the group. These tags are added to every user in the CSV. This helps you differentiate between users uploaded from multiple CSV files and to maintain multiple audiences. You can ",Object(i.b)("a",{parentName:"p",href:"../user_data_segments/creating_managing_user_segment"},"create segments")," using those tags to refer to the various set of audiences you have imported."),Object(i.b)("img",{src:"https://i.imgur.com/U3RuKq3.png",width:"60%"}))),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Import"),".")),Object(i.b)("p",null,"To know how the CSV import works in detail, see ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv/"},"CSV Import"),"."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Users are automatically added to the segment every time the user updates to match those conditions."),Object(i.b)("li",{parentName:"ul"},"If the ",Object(i.b)("a",{parentName:"li",href:"../enriching_user_profiles/user_id"},"userId")," is not passed in the CSV, yellow.ai creates and assigns an internally generated userId to each user.")))),Object(i.b)("h3",{id:"22-checklist-for-csv-import"},"2.2 Checklist for CSV import"),Object(i.b)("p",null,"To ensure that your users are imported successfully without issues, verify the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Correct column headers: Make sure that the column headers match with the name of the user property that you want to map. These names are case sensitive and the column header should not include spaces before/after. ")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If any of these column headers do not match with any user property, the entire CSV import will fail."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use correct data type: Data type validation is run before importing each user record. If the validation fails for any user record, it will be skipped. Each data type accepts the following values:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Data Type"),Object(i.b)("th",{parentName:"tr",align:null},"Accepted Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"String"),Object(i.b)("td",{parentName:"tr",align:null},"Any string value")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"List"),Object(i.b)("td",{parentName:"tr",align:null},"semicolon ; separated values without spaces")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"email"),Object(i.b)("td",{parentName:"tr",align:null},"A valid email id format")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Number"),Object(i.b)("td",{parentName:"tr",align:null},"Any integer or decimal number with max 15 digits")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Phone"),Object(i.b)("td",{parentName:"tr",align:null},"A valid phone number with country code")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"url"),Object(i.b)("td",{parentName:"tr",align:null},"A valid url format")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"date"),Object(i.b)("td",{parentName:"tr",align:null},"YYYY-MM-DD format")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"dateTime"),Object(i.b)("td",{parentName:"tr",align:null},"YYYY-MM-DD hh:mm:ss format")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"time"),Object(i.b)("td",{parentName:"tr",align:null},"hh:mm:ss format")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"true or false value, this is case insensitive")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"tags"),Object(i.b)("td",{parentName:"tr",align:null},"semicolon ; separated values without spaces")))),Object(i.b)("h3",{id:"23-use-the-userid-column-for-unique-identifiers"},"2.3 Use the userId column for unique identifiers"),Object(i.b)("p",null,"You can pass ",Object(i.b)("inlineCode",{parentName:"p"},"userId")," for the users being imported by creating a ",Object(i.b)("strong",{parentName:"p"},"userId column")," in your CSV. However, keep in mind that no 2 user records can have the same userId. Know more about userId and it\u2019s importance ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/user_id"},"here"),"."),Object(i.b)("p",null,"When the CSV file includes a user record with a userId that already exists in the users table, a conflict arises between the old record and the new record. The new record is merged into the old record in the following manner:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Existing values of the user will be updated with the new record values."),Object(i.b)("li",{parentName:"ul"},"Properties not provided for the new record, will be retained for the older record.")),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Old record"),":"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"userId"),Object(i.b)("th",{parentName:"tr",align:null},"firstName"),Object(i.b)("th",{parentName:"tr",align:null},"email"),Object(i.b)("th",{parentName:"tr",align:null},"phone"),Object(i.b)("th",{parentName:"tr",align:null},"tags"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"123"),Object(i.b)("td",{parentName:"tr",align:null},"Sarthak"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:sarthak@example.ai"},"sarthak@example.ai")),Object(i.b)("td",{parentName:"tr",align:null},"919999999999"),Object(i.b)("td",{parentName:"tr",align:null},"tag1,tag2")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"New record"),":"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"userId"),Object(i.b)("th",{parentName:"tr",align:null},"firstName"),Object(i.b)("th",{parentName:"tr",align:null},"email"),Object(i.b)("th",{parentName:"tr",align:null},"phone"),Object(i.b)("th",{parentName:"tr",align:null},"tags"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"123"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"918888888888"),Object(i.b)("td",{parentName:"tr",align:null},"tag3,tag4")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Merged Record"),":"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"userId"),Object(i.b)("th",{parentName:"tr",align:null},"firstName"),Object(i.b)("th",{parentName:"tr",align:null},"email"),Object(i.b)("th",{parentName:"tr",align:null},"phone"),Object(i.b)("th",{parentName:"tr",align:null},"tags"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"123"),Object(i.b)("td",{parentName:"tr",align:null},"Sarthak"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"mailto:sarthak@yellow.ai"},"sarthak@yellow.ai")),Object(i.b)("td",{parentName:"tr",align:null},"918888888888"),Object(i.b)("td",{parentName:"tr",align:null},"tag3,tag4")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Sometimes you might notice that the exact number of records you imported through CSV won't show up in the users table. This could be because some of the records being imported were merged with existing records."))),Object(i.b)("h3",{id:"24-analyse-import-errors"},"2.4 Analyse import errors"),Object(i.b)("p",null,"Once you import a CSV file, you can check what happend with the records. You can see the count of new entries added, entries merged, and failed entries. "),Object(i.b)("p",null,"New users might not be created with all entries you upload. The following are the possible reasons:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../enriching_user_profiles/create_audience_group_csv#pre-checks-before-uploading-the-csv"},"Wrong column headers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"../enriching_user_profiles/create_audience_group_csv#pre-checks-before-uploading-the-csv"},"Data type mismatch")),Object(i.b)("li",{parentName:"ul"},"Some users being imported must\u2019ve ",Object(i.b)("a",{parentName:"li",href:"../enriching_user_profiles/create_audience_group_csv#using-the-userid-column-to-identify-users"},"merged")," into existing user records")),Object(i.b)("p",null,"To identify errors in the import, see ",Object(i.b)("a",{parentName:"p",href:"../user_data_segments/manage_user_data#user-logs"},"User Logs"),".\nClick on ",Object(i.b)("strong",{parentName:"p"},"User Logs")," > Navigate to the relevant ",Object(i.b)("strong",{parentName:"p"},"CSV Import activity")," > Click ",Object(i.b)("strong",{parentName:"p"},"Download log"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/5jj2BgM.jpg",alt:null})),Object(i.b)("p",null,"The downloaded log contains the following information:\n",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/PVDp28M.png",alt:null})),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Summary"),": Shows the count of user records that were newly added, failed to add, and were merged into the existing user details.  ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Records that were imported as new users"),Object(i.b)("li",{parentName:"ul"},"Records for which import failed (included below)"),Object(i.b)("li",{parentName:"ul"},"Records that were merged into existing users"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"BOT_ID"),": Bot Id for which the CSV was uploaded."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"REQUEST_PAYLOAD"),": The user record for which an import was attempted but FAILED"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ERROR_PAYLOAD"),": The error details due to which above user import FAILED:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"invalidDataType"),": Properties for which the wrong ",Object(i.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/cdp_data/#user-property-data-types"},"data type")," was passed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"invalidProperty"),": Properties that do not exist in the user table"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"LINE_NUMBER"),": The row number of the user record for which import FAILED")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"3-manage-users-using-rest-apis"},"3. Manage users using Rest APIs"),Object(i.b)("p",null,"In Yellow.ai, each user is an individual. This process of adding or updating user data is more dynamic. With APIs, you can ensure that all your user related data on Yellow.ai is always in sync with your entire tech stack."),Object(i.b)("p",null,"If you want to add/edit multiple users at once, you can use ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api/"},"REST APIs"),"."),Object(i.b)("p",null,"Use ",Object(i.b)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/17583548/UVsEVUsg"},"User APIs")," to Create, Read, Update and Delete your user data."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/llsMgDq.png",alt:null})),Object(i.b)("hr",null),Object(i.b)("h2",{id:"4-manage-users-through-conversations"},"4. Manage users through conversations"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes"},"Prompt nodes")," not only help in creating personalized conversations, but also enriches user profile as the information is updated in the database. It can store responses of conversations that involve asking user details such as name, email, phone number, location, or any system/custom user property in the relevant field. "),Object(i.b)("img",{src:"https://i.imgur.com/p6DvR3D.png",alt:"drawing",width:"60%"}),Object(i.b)("p",null,"However, there are cases where the data is not collected directly. For example, you might want to fetch certain data from the event payload and pass it to a user property. Use the ",Object(i.b)("strong",{parentName:"p"},"Input")," node and select the desired user property where you want to store the data."),Object(i.b)("p",null,"   ",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/0kX3iJT.png",alt:null})),Object(i.b)("center",null,Object(i.b)("img",{src:"https://i.imgur.com/7ltkBj4.png",width:"40%"})),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The data captured through Studio conversations for ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/builder_capture_data/#what-are-identified-users"},"Identified Users")," will be updated automatically in the Users table."))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"5-manage-user-data"},"5. Manage user data"),Object(i.b)("h3",{id:"51-export-user-data"},"5.1 Export user data"),Object(i.b)("p",null," You can download your entire user data or a segment specific user data and use it wherever required. For example, you can update user details and import it again, and upload user data in a third-party system for your business use cases."),Object(i.b)("p",null,"To download your entire user base, in All users, click ",Object(i.b)("strong",{parentName:"p"},"Actions")," > ",Object(i.b)("strong",{parentName:"p"},"Download all user data"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/EPBeFUv.png",alt:null})),Object(i.b)("p",null,"To download users in a particular segment, select the desired ",Object(i.b)("strong",{parentName:"p"},"Segment")," > ",Object(i.b)("strong",{parentName:"p"},"Actions")," > ",Object(i.b)("strong",{parentName:"p"},"Download segment user data"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/0FIZgh7.png",alt:null})),Object(i.b)("p",null,"You will get a download link to your email. Alternatively, you can download it from ",Object(i.b)("strong",{parentName:"p"},"User logs")," > Apply Bulk user download filter > Click on ",Object(i.b)("strong",{parentName:"p"},"Download log"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/mPaMTEa.png",alt:null})),Object(i.b)("h3",{id:"52-delete-user-data"},"5.2 Delete user data"),Object(i.b)("p",null,"You can delete one or more users if required. However, you need to ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#viewing--exporting-your-user-data"},"export their data")," as a backup before deleting."),Object(i.b)("p",null,"To delete a single user, navigate to the user that you want to delete, click on the more options icon > ",Object(i.b)("strong",{parentName:"p"},"Delete user"),"."),Object(i.b)("p",null,"  ",Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/28kG5jg.png",alt:null})),Object(i.b)("p",null,"To delete multiple users at a time, select each user that you want to delete and click ",Object(i.b)("strong",{parentName:"p"},"Delete users"),"."),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/nnB6VH2.png",alt:null})),Object(i.b)("p",null,"To delete user data using API, use ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/send_user_data_event_rest_api"},"DELETE user API"),"."),Object(i.b)("h3",{id:"53-view-user-activity-logs"},"5.3 View user activity logs"),Object(i.b)("p",null,"User logs is a space for your to audit your user data. There are 3 types of logs that User 360 supports:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"CSV import"),": This log appears whenever you import users using a CSV. The associated ",Object(i.b)("em",{parentName:"p"},"Download log")," link contains details about the import process, that is, which records were imported, merged, or failed. See more about it ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/enriching_user_profiles/create_audience_group_csv#figuring-out-what-went-wrong-with-your-csv-import"},"here"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Bulk user download "),":  This log appears whenever you ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#viewing--exporting-your-user-data"},"export your user data"),". Use the associated ",Object(i.b)("em",{parentName:"p"},"Download log")," to download the exported user data in a CSV file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Bulk user delete "),": This log appears whenever you ",Object(i.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/manage_user_data#deleting-your-user-data"},"delete your user data"),"."))),Object(i.b)("p",null,Object(i.b)("img",{parentName:"p",src:"https://i.imgur.com/s86psKQ.png",alt:null})))}p.isMDXComponent=!0},456:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=r,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return a?n.a.createElement(m,o(o({ref:t},c),{},{components:a})):n.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);