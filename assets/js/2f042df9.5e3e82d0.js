"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[5051],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return d}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(a),k=r,d=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return a?n.createElement(d,o(o({ref:e},s),{},{components:a})):n.createElement(d,o({ref:e},s))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},30099:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"AWS-S3",sidebar_label:"AWS-S3"},p=void 0,u={unversionedId:"platform_concepts/appConfiguration/aws-s3",id:"platform_concepts/appConfiguration/aws-s3",title:"AWS-S3",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/aws-s3.md",sourceDirName:"platform_concepts/appConfiguration",slug:"/platform_concepts/appConfiguration/aws-s3",permalink:"/docs/platform_concepts/appConfiguration/aws-s3",draft:!1,tags:[],version:"current",frontMatter:{title:"AWS-S3",sidebar_label:"AWS-S3"},sidebar:"platform_concepts",previous:{title:"Avaya Live Chat",permalink:"/docs/platform_concepts/appConfiguration/avaya"},next:{title:"Azure AD",permalink:"/docs/platform_concepts/appConfiguration/azure-ad"}},s={},m=[{value:"Scope of Integration",id:"scope-of-integration",level:2},{value:"1. <strong>Upload File</strong>:-",id:"1-upload-file-",level:3},{value:"2. <strong>List Objects</strong>:-",id:"2-list-objects-",level:3},{value:"3. <strong>Delete File</strong>:-",id:"3-delete-file-",level:3},{value:"4. <strong>Bucket Lists</strong>:-",id:"4-bucket-lists-",level:3},{value:"5. <strong>Get Object</strong>:-",id:"5-get-object-",level:3},{value:"6. <strong>Create Bucket</strong>:-",id:"6-create-bucket-",level:3},{value:"7. <strong>Get Signed URL</strong>:-",id:"7-get-signed-url-",level:3},{value:"Note: If you open the signed Url in browser, then It will take extra 40-60 sec to given expiry time due to browser&#39;s cache mechanism.",id:"note-if-you-open-the-signed-url-in-browser-then-it-will-take-extra-40-60-sec-to-given-expiry-time-due-to-browsers-cache-mechanism",level:4}],c={toc:m};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"scope-of-integration"},"Scope of Integration"),(0,l.kt)("p",null,"Yellow.ai Integration with AWS-S3 allows you to seamlessly connect your remote bucket with the yellow.ai platform. Using this integration, one can get remote files, create a bucket, delete Bucket, upload files to Bucket, getSignedUrl for a file and delete a file from bucket."),(0,l.kt)("h1",{id:"use-cases"},"Use-cases"),(0,l.kt)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),(0,l.kt)("h3",{id:"1-upload-file-"},"1. ",(0,l.kt)("strong",{parentName:"h3"},"Upload File"),":-"),(0,l.kt)("p",null,"  From this method you can easily upload files to a bucket."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"}," Node Input Params:-"),"                        "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fileCdnUrl*"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png"},"https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png")),(0,l.kt)("td",{parentName:"tr",align:null},"Data source for data to copy to the remote server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remoteFilePath*"),(0,l.kt)("td",{parentName:"tr",align:null},"/uploads/directoryPath/demo.png"),(0,l.kt)("td",{parentName:"tr",align:null},"Path to the Bucket to be created on the Bucket with file name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucketName*"),(0,l.kt)("td",{parentName:"tr",align:null},"your_bucket_name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the bucket where upload the file")))),(0,l.kt)("h3",{id:"2-list-objects-"},"2. ",(0,l.kt)("strong",{parentName:"h3"},"List Objects"),":-"),(0,l.kt)("p",null,"Returns some or all (up to 1,000) of the objects in a bucket"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"}," Node Input Params:-"),"                        "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucketName*"),(0,l.kt)("td",{parentName:"tr",align:null},"Your_Bucket_Name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the bucket containing the objects.")))),(0,l.kt)("h3",{id:"3-delete-file-"},"3. ",(0,l.kt)("strong",{parentName:"h3"},"Delete File"),":-"),(0,l.kt)("p",null,"deletes an object from an S3 bucket"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"}," Node Input Params:-"),"                        "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remoteDirPath*"),(0,l.kt)("td",{parentName:"tr",align:null},"/folder/demo.ong"),(0,l.kt)("td",{parentName:"tr",align:null},"Key name of the object to delete.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucketName"),(0,l.kt)("td",{parentName:"tr",align:null},"Your_Bucket_Name"),(0,l.kt)("td",{parentName:"tr",align:null},"The bucket name of the bucket containing the object.")))),(0,l.kt)("h3",{id:"4-bucket-lists-"},"4. ",(0,l.kt)("strong",{parentName:"h3"},"Bucket Lists"),":-"),(0,l.kt)("p",null,"Returns a list of all buckets owned by the authenticated sender of the request. To use this operation, you must have the s3:ListAllMyBuckets permission."),(0,l.kt)("h3",{id:"5-get-object-"},"5. ",(0,l.kt)("strong",{parentName:"h3"},"Get Object"),":-"),(0,l.kt)("p",null,"Retrieves objects from Amazon S3. To use GET, you must have READ access to the object."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"}," Node Input Params:-"),"                        "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remotefilePath*"),(0,l.kt)("td",{parentName:"tr",align:null},"photos/2006/February/sample.jpg"),(0,l.kt)("td",{parentName:"tr",align:null},"To get an object from such a logical hierarchy, specify the full key name for the object in the GET operation")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucketName*"),(0,l.kt)("td",{parentName:"tr",align:null},"Your_Bucket_Name"),(0,l.kt)("td",{parentName:"tr",align:null},"The bucket name of the bucket containing the object.")))),(0,l.kt)("h3",{id:"6-create-bucket-"},"6. ",(0,l.kt)("strong",{parentName:"h3"},"Create Bucket"),":-"),(0,l.kt)("p",null,"Creates a new S3 bucket. To create a bucket, you must register with Amazon S3 and have a valid AWS Access Key ID to authenticate requests\n",(0,l.kt)("em",{parentName:"p"}," Node Input Params:-"),"                        "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucketName*"),(0,l.kt)("td",{parentName:"tr",align:null},"Your_Bucket_Name"),(0,l.kt)("td",{parentName:"tr",align:null},"The bucket name of the bucket where you will store the objects.")))),(0,l.kt)("h3",{id:"7-get-signed-url-"},"7. ",(0,l.kt)("strong",{parentName:"h3"},"Get Signed URL"),":-"),(0,l.kt)("p",null,"Get a pre-signed URL for a given file."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Node Input Params:-"),"                        "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Sample Input"),(0,l.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"remoteFilePath*"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"remote directory path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bucketName"),(0,l.kt)("td",{parentName:"tr",align:null},"Your_Bucket_Name"),(0,l.kt)("td",{parentName:"tr",align:null},"The bucket name of the bucket containing the object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"expire"),(0,l.kt)("td",{parentName:"tr",align:null},"60"),(0,l.kt)("td",{parentName:"tr",align:null},"Expire time of url in seconds.")))),(0,l.kt)("h4",{id:"note-if-you-open-the-signed-url-in-browser-then-it-will-take-extra-40-60-sec-to-given-expiry-time-due-to-browsers-cache-mechanism"},"Note: If you open the signed Url in browser, then It will take extra 40-60 sec to given expiry time due to browser's cache mechanism."),(0,l.kt)("h1",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Configuring the integration with AWS-S3 is straightforward. Follow the steps defined below to start integrating:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"To integrate AWS-S3 with your bot on the platform:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"AWS Account and Access Keys"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Open the IAM console at ",(0,l.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/iam/"},"https://console.aws.amazon.com/iam/"),"."),(0,l.kt)("li",{parentName:"ul"},"On the navigation menu, choose Users"),(0,l.kt)("li",{parentName:"ul"},"Choose your IAM user name (not the check box)."),(0,l.kt)("li",{parentName:"ul"},"Open the Security credentials tab, and then choose Create access key."),(0,l.kt)("li",{parentName:"ul"},"To see the new access key, choose Show.  and Copy the Access Key Id and Secret Access Key."),(0,l.kt)("li",{parentName:"ul"},"Go to IAM -> User -> click on your user -> Add Permission -> Add AmazonS3FullAccess Policy."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to Integration section")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In Integration click on the connect for the AWS-S3.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Enter Access Key Id and Secret Access Key.\n",(0,l.kt)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/bBy2uI0OMplv1661313612403.png",alt:"alt_text",title:"image_tooltip"}))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on Save")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Store AWS-S3 response in Object type variable in action-node."))),(0,l.kt)("p",null,"Following the above steps will connect AWS-S3 with the yellow.ai platform."),(0,l.kt)("h1",{id:"references-"},(0,l.kt)("strong",{parentName:"h1"},"References:-")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html"},"https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"},"https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations.html"))))}k.isMDXComponent=!0}}]);