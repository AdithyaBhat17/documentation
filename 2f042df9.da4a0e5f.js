(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),l=(a(0),a(454)),b=["components"],c={title:"AWS-S3",sidebar_label:"AWS-S3"},o={unversionedId:"platform_concepts/appConfiguration/aws-s3",id:"platform_concepts/appConfiguration/aws-s3",isDocsHomePage:!1,title:"AWS-S3",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/aws-s3.md",slug:"/platform_concepts/appConfiguration/aws-s3",permalink:"/docs/platform_concepts/appConfiguration/aws-s3",version:"current",sidebar_label:"AWS-S3",sidebar:"platform_concepts",previous:{title:"Avaya Live Chat",permalink:"/docs/platform_concepts/appConfiguration/avaya"},next:{title:"Azure AD",permalink:"/docs/platform_concepts/appConfiguration/azure-ad"}},i=[{value:"Scope of Integration",id:"scope-of-integration",children:[{value:"1. <strong>Upload File</strong>:-",id:"1-upload-file-",children:[]},{value:"2. <strong>List Objects</strong>:-",id:"2-list-objects-",children:[]},{value:"3. <strong>Delete File</strong>:-",id:"3-delete-file-",children:[]},{value:"4. <strong>Bucket Lists</strong>:-",id:"4-bucket-lists-",children:[]},{value:"5. <strong>Get Object</strong>:-",id:"5-get-object-",children:[]},{value:"6. <strong>Create Bucket</strong>:-",id:"6-create-bucket-",children:[]},{value:"7. <strong>Get Signed URL</strong>:-",id:"7-get-signed-url-",children:[]}]}],p={toc:i};function u(e){var t=e.components,a=Object(r.a)(e,b);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(l.b)("p",null,"Yellow.ai Integration with AWS-S3 allows you to seamlessly connect your remote bucket with the yellow.ai platform. Using this integration, one can get remote files, create a bucket, delete Bucket, upload files to Bucket, getSignedUrl for a file and delete a file from bucket."),Object(l.b)("h1",{id:"use-cases"},"Use-cases"),Object(l.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(l.b)("h3",{id:"1-upload-file-"},"1. ",Object(l.b)("strong",{parentName:"h3"},"Upload File"),":-"),Object(l.b)("p",null,"  From this method you can easily upload files to a bucket."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"fileCdnUrl*"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png"},"https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png")),Object(l.b)("td",{parentName:"tr",align:null},"Data source for data to copy to the remote server.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remoteFilePath*"),Object(l.b)("td",{parentName:"tr",align:null},"/uploads/directoryPath/demo.png"),Object(l.b)("td",{parentName:"tr",align:null},"Path to the Bucket to be created on the Bucket with file name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bucketName*"),Object(l.b)("td",{parentName:"tr",align:null},"your_bucket_name"),Object(l.b)("td",{parentName:"tr",align:null},"The name of the bucket where upload the file")))),Object(l.b)("h3",{id:"2-list-objects-"},"2. ",Object(l.b)("strong",{parentName:"h3"},"List Objects"),":-"),Object(l.b)("p",null,"Returns some or all (up to 1,000) of the objects in a bucket"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bucketName*"),Object(l.b)("td",{parentName:"tr",align:null},"Your_Bucket_Name"),Object(l.b)("td",{parentName:"tr",align:null},"The name of the bucket containing the objects.")))),Object(l.b)("h3",{id:"3-delete-file-"},"3. ",Object(l.b)("strong",{parentName:"h3"},"Delete File"),":-"),Object(l.b)("p",null,"deletes an object from an S3 bucket"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remoteDirPath*"),Object(l.b)("td",{parentName:"tr",align:null},"/folder/demo.ong"),Object(l.b)("td",{parentName:"tr",align:null},"Key name of the object to delete.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bucketName"),Object(l.b)("td",{parentName:"tr",align:null},"Your_Bucket_Name"),Object(l.b)("td",{parentName:"tr",align:null},"The bucket name of the bucket containing the object.")))),Object(l.b)("h3",{id:"4-bucket-lists-"},"4. ",Object(l.b)("strong",{parentName:"h3"},"Bucket Lists"),":-"),Object(l.b)("p",null,"Returns a list of all buckets owned by the authenticated sender of the request. To use this operation, you must have the s3:ListAllMyBuckets permission."),Object(l.b)("h3",{id:"5-get-object-"},"5. ",Object(l.b)("strong",{parentName:"h3"},"Get Object"),":-"),Object(l.b)("p",null,"Retrieves objects from Amazon S3. To use GET, you must have READ access to the object."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remotefilePath*"),Object(l.b)("td",{parentName:"tr",align:null},"photos/2006/February/sample.jpg"),Object(l.b)("td",{parentName:"tr",align:null},"To get an object from such a logical hierarchy, specify the full key name for the object in the GET operation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bucketName*"),Object(l.b)("td",{parentName:"tr",align:null},"Your_Bucket_Name"),Object(l.b)("td",{parentName:"tr",align:null},"The bucket name of the bucket containing the object.")))),Object(l.b)("h3",{id:"6-create-bucket-"},"6. ",Object(l.b)("strong",{parentName:"h3"},"Create Bucket"),":-"),Object(l.b)("p",null,"Creates a new S3 bucket. To create a bucket, you must register with Amazon S3 and have a valid AWS Access Key ID to authenticate requests\n",Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bucketName*"),Object(l.b)("td",{parentName:"tr",align:null},"Your_Bucket_Name"),Object(l.b)("td",{parentName:"tr",align:null},"The bucket name of the bucket where you will store the objects.")))),Object(l.b)("h3",{id:"7-get-signed-url-"},"7. ",Object(l.b)("strong",{parentName:"h3"},"Get Signed URL"),":-"),Object(l.b)("p",null,"Get a pre-signed URL for a given file."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remoteFilePath*"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"remote directory path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"bucketName"),Object(l.b)("td",{parentName:"tr",align:null},"Your_Bucket_Name"),Object(l.b)("td",{parentName:"tr",align:null},"The bucket name of the bucket containing the object.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"expire"),Object(l.b)("td",{parentName:"tr",align:null},"60"),Object(l.b)("td",{parentName:"tr",align:null},"Expire time of url in seconds.")))),Object(l.b)("h4",{id:"note-if-you-open-the-signed-url-in-browser-then-it-will-take-extra-40-60-sec-to-given-expiry-time-due-to-browsers-cache-mechanism"},"Note: If you open the signed Url in browser, then It will take extra 40-60 sec to given expiry time due to browser's cache mechanism."),Object(l.b)("h1",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"Configuring the integration with AWS-S3 is straightforward. Follow the steps defined below to start integrating:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"To integrate AWS-S3 with your bot on the platform:")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"AWS Account and Access Keys"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Open the IAM console at ",Object(l.b)("a",{parentName:"li",href:"https://console.aws.amazon.com/iam/"},"https://console.aws.amazon.com/iam/"),"."),Object(l.b)("li",{parentName:"ul"},"On the navigation menu, choose Users"),Object(l.b)("li",{parentName:"ul"},"Choose your IAM user name (not the check box)."),Object(l.b)("li",{parentName:"ul"},"Open the Security credentials tab, and then choose Create access key."),Object(l.b)("li",{parentName:"ul"},"To see the new access key, choose Show.  and Copy the Access Key Id and Secret Access Key."),Object(l.b)("li",{parentName:"ul"},"Go to IAM -> User -> click on your user -> Add Permission -> Add AmazonS3FullAccess Policy."))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Go to Integration section")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"In Integration click on the connect for the AWS-S3.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Enter Access Key Id and Secret Access Key.\n",Object(l.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/bBy2uI0OMplv1661313612403.png",alt:"alt_text",title:"image_tooltip"}))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click on Save")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Store AWS-S3 response in Object type variable in action-node."))),Object(l.b)("p",null,"Following the above steps will connect AWS-S3 with the yellow.ai platform."),Object(l.b)("h1",{id:"references-"},Object(l.b)("strong",{parentName:"h1"},"References:-")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html"},"https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"},"https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"))))}u.isMDXComponent=!0},454:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(a),s=n,d=u["".concat(b,".").concat(s)]||u[s]||m[s]||l;return a?r.a.createElement(d,c(c({ref:t},i),{},{components:a})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var i=2;i<l;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);