(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{281:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),l=(a(0),a(426)),i=["components"],b={title:"SFTP",sidebar_label:"SFTP"},o={unversionedId:"platform_concepts/appConfiguration/sftp",id:"platform_concepts/appConfiguration/sftp",isDocsHomePage:!1,title:"SFTP",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/sftp.md",slug:"/platform_concepts/appConfiguration/sftp",permalink:"/docs/platform_concepts/appConfiguration/sftp",version:"current",sidebar_label:"SFTP",sidebar:"platform_concepts",previous:{title:"Service Now",permalink:"/docs/platform_concepts/appConfiguration/service-now"},next:{title:"Shopify",permalink:"/docs/platform_concepts/appConfiguration/shopify"}},c=[{value:"Scope of Integration",id:"scope-of-integration",children:[{value:"1. <strong>SFTP File Transfer</strong>:-",id:"1-sftp-file-transfer-",children:[]},{value:"2. <strong>SFTP Get File</strong>:-",id:"2-sftp-get-file-",children:[]},{value:"3. <strong>SFTP Make Directory</strong>:-",id:"3-sftp-make-directory-",children:[]},{value:"4. <strong>SFTP Delete Directory</strong>:-",id:"4-sftp-delete-directory-",children:[]},{value:"5. <strong>SFTP Delete Files</strong>:-",id:"5-sftp-delete-files-",children:[]},{value:"6. <strong>SFTP Data Append</strong>:-",id:"6-sftp-data-append-",children:[]},{value:"7. <strong>SFTP List</strong>:-",id:"7-sftp-list-",children:[]},{value:"8. <strong>SFTP Exists</strong>:-",id:"8-sftp-exists-",children:[]},{value:"9. <strong>SFTP Chmod:-</strong>",id:"9-sftp-chmod-",children:[]}]},{value:"Sample Experience",id:"sample-experience",children:[]}],p={toc:c};function s(e){var t=e.components,a=Object(n.a)(e,i);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(l.b)("p",null,"Yellow.ai Integration with SFTP allows you to seamlessly connect your remote server with the yellow.ai platform. Using this integration, one can get remote files, make a directory, delete directory, upload files to remote server, check if file exists or not."),Object(l.b)("h1",{id:"use-cases"},"Use-cases"),Object(l.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(l.b)("h3",{id:"1-sftp-file-transfer-"},"1. ",Object(l.b)("strong",{parentName:"h3"},"SFTP File Transfer"),":-"),Object(l.b)("p",null,"  From this method you can easily upload files to a remote server."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"fileCdnUrl*"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png"},"https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png")),Object(l.b)("td",{parentName:"tr",align:null},"Data source for data to copy to the remote server.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remoteFilePath*"),Object(l.b)("td",{parentName:"tr",align:null},"/uploads/directoryPath/demo.png"),Object(l.b)("td",{parentName:"tr",align:null},"Path to the remote file to be created on the server with file name.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"appendTimeInfilePath*"),Object(l.b)("td",{parentName:"tr",align:null},"True or false"),Object(l.b)("td",{parentName:"tr",align:null},"If true then It will append timestamp in file name otherwise same name from remote file path.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"recursive"),Object(l.b)("td",{parentName:"tr",align:null},"true/false"),Object(l.b)("td",{parentName:"tr",align:null},"If the recursive flag is set to true, the method will create any directories in the path which do not already exist. Recursive flag defaults to false")))),Object(l.b)("h3",{id:"2-sftp-get-file-"},"2. ",Object(l.b)("strong",{parentName:"h3"},"SFTP Get File"),":-"),Object(l.b)("p",null,"Retrieve a file from a remote SFTP server"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remoteFilePath*"),Object(l.b)("td",{parentName:"tr",align:null},"/Directory/filename.ext"),Object(l.b)("td",{parentName:"tr",align:null},"Path to the remote file to download")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"secureupload"),Object(l.b)("td",{parentName:"tr",align:null},"true/false"),Object(l.b)("td",{parentName:"tr",align:null},"If true then It will give minio directory path otherwise it will give CDN url of files")))),Object(l.b)("h3",{id:"3-sftp-make-directory-"},"3. ",Object(l.b)("strong",{parentName:"h3"},"SFTP Make Directory"),":-"),Object(l.b)("p",null,"Create a new directory. If the recursive flag is set to true, the method will create any directories in the path which do not already exist. Recursive flag defaults to false."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remoteDirPath*"),Object(l.b)("td",{parentName:"tr",align:null},"/DirectoryPath"),Object(l.b)("td",{parentName:"tr",align:null},"Path to directory with new dir name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"recursive"),Object(l.b)("td",{parentName:"tr",align:null},"true/false"),Object(l.b)("td",{parentName:"tr",align:null},"If true then the method will create any directories in the path which do not already exist")))),Object(l.b)("h3",{id:"4-sftp-delete-directory-"},"4. ",Object(l.b)("strong",{parentName:"h3"},"SFTP Delete Directory"),":-"),Object(l.b)("p",null,"Remove a directory. If removing a directory and recursive flag is set to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", the specified directory and all sub-directories and files will be deleted. If set to false and the directory has sub-directories or files, the action will fail. "),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remoteDirPath*"),Object(l.b)("td",{parentName:"tr",align:null},"/DirectoryPath"),Object(l.b)("td",{parentName:"tr",align:null},"Path to directory")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"recursive"),Object(l.b)("td",{parentName:"tr",align:null},"true/false"),Object(l.b)("td",{parentName:"tr",align:null},"recursive flag is set to true, the specified directory and all sub-directories and files will be deleted.")))),Object(l.b)("h3",{id:"5-sftp-delete-files-"},"5. ",Object(l.b)("strong",{parentName:"h3"},"SFTP Delete Files"),":-"),Object(l.b)("p",null,"Delete a file on the remote server."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remotefilePath*"),Object(l.b)("td",{parentName:"tr",align:null},"/DirectoryPath/filename.txt"),Object(l.b)("td",{parentName:"tr",align:null},"string. Path to remote file to be deleted.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"noErrorOk*"),Object(l.b)("td",{parentName:"tr",align:null},"true/false"),Object(l.b)("td",{parentName:"tr",align:null},"boolean. If true, no error is raised when you try to delete a non-existent file. Default is false.")))),Object(l.b)("h3",{id:"6-sftp-data-append-"},"6. ",Object(l.b)("strong",{parentName:"h3"},"SFTP Data Append"),":-"),Object(l.b)("p",null,"Append the ",Object(l.b)("inlineCode",{parentName:"p"},"input")," data to an existing remote file. There is no integrity checking performed apart from normal writeStream checks. This function simply opens a writeStream on the remote file in append mode and writes the data passed in to the file."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"fileCdnUrl*"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://www.w3.org/TR/PNG/iso_8859-1.txt"},"https://www.w3.org/TR/PNG/iso_8859-1.txt")),Object(l.b)("td",{parentName:"tr",align:null},"CDN url for Data to append to remote file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remoteFilePath*"),Object(l.b)("td",{parentName:"tr",align:null},"/DirectoryPath/filename.txt"),Object(l.b)("td",{parentName:"tr",align:null},"Path to remote file if files do not exist then It will auto create.")))),Object(l.b)("h3",{id:"7-sftp-list-"},"7. ",Object(l.b)("strong",{parentName:"h3"},"SFTP List"),":-"),Object(l.b)("p",null," Retrieves a directory listing"),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Node Input Params:-"),"                        "),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Field Name"),Object(l.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(l.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"remoteDir*"),Object(l.b)("td",{parentName:"tr",align:null},"/DirectoryPath"),Object(l.b)("td",{parentName:"tr",align:null},"remote directory path")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"pattern"),Object(l.b)("td",{parentName:"tr",align:null},"*"),Object(l.b)("td",{parentName:"tr",align:null},"{string")))),Object(l.b)("h3",{id:"8-sftp-exists-"},"8. ",Object(l.b)("strong",{parentName:"h3"},"SFTP Exists"),":-"),Object(l.b)("p",null," Tests to see if a remote file or directory exists. Returns type of remote object if it exists or false if it does not"),Object(l.b)("h3",{id:"9-sftp-chmod-"},"9. ",Object(l.b)("strong",{parentName:"h3"},"SFTP Chmod:-")),Object(l.b)("p",null,"Change the mode (read, write or execute permissions) of a remote file or directory."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"remotePath: string. Path to the remote file or directory"),Object(l.b)("li",{parentName:"ul"},"newmode: octal. New mode to set for the remote file or directory")),Object(l.b)("h1",{id:"configuration"},"Configuration"),Object(l.b)("p",null,"Configuring the integration with SFTP is straightforward. Follow the steps defined below to start integrating:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"To integrate SFTP with your bot on the platform:")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Go to Integration section"),Object(l.b)("li",{parentName:"ol"},"In Integration click on the connect for the SFTP."),Object(l.b)("li",{parentName:"ol"},"Enter Host, Port, username, Password.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/xepX9Ka.png",alt:"alt_text",title:"image_tooltip"})),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Click on Save")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Store SFTP response in Object type variable in action-node."))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/KCWAcMf.png",alt:null})),Object(l.b)("p",null,"Following the above steps will connect your SFTP remote server  with the yellow.ai platform."),Object(l.b)("h1",{id:"references-"},Object(l.b)("strong",{parentName:"h1"},"References:-")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/ssh2-sftp-client"},"https://www.npmjs.com/package/ssh2-sftp-client")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"https://www.filestash.app/sftp-browser.html"},"https://www.filestash.app/sftp-browser.html"))),Object(l.b)("h2",{id:"sample-experience"},"Sample Experience"),Object(l.b)("p",null,"Below is a video that depicts how this integration works."))}s.isMDXComponent=!0},426:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||l;return a?n.a.createElement(u,b(b({ref:t},c),{},{components:a})):n.a.createElement(u,b({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var c=2;c<l;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);