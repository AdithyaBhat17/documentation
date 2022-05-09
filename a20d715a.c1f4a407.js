(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{242:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return c}));var r=a(3),n=(a(0),a(349));const l={title:"SFTP",sidebar_label:"SFTP"},i={unversionedId:"platform_concepts/appConfiguration/sftp",id:"platform_concepts/appConfiguration/sftp",isDocsHomePage:!1,title:"SFTP",description:"Scope of Integration",source:"@site/docs/platform_concepts/appConfiguration/sftp.md",slug:"/platform_concepts/appConfiguration/sftp",permalink:"/docs/platform_concepts/appConfiguration/sftp",version:"current",sidebar_label:"SFTP",sidebar:"platform_concepts",previous:{title:"Service Now",permalink:"/docs/platform_concepts/appConfiguration/service-now"},next:{title:"Shopify",permalink:"/docs/platform_concepts/appConfiguration/shopify"}},b=[{value:"Scope of Integration",id:"scope-of-integration",children:[{value:"1. <strong>SFTP File Transfer</strong>:-",id:"1-sftp-file-transfer-",children:[]},{value:"2. <strong>SFTP Get File</strong>:-",id:"2-sftp-get-file-",children:[]},{value:"3. <strong>SFTP Make Directory</strong>:-",id:"3-sftp-make-directory-",children:[]},{value:"4. <strong>SFTP Delete Directory</strong>:-",id:"4-sftp-delete-directory-",children:[]},{value:"5. <strong>SFTP Delete Files</strong>:-",id:"5-sftp-delete-files-",children:[]},{value:"6. <strong>SFTP Data Append</strong>:-",id:"6-sftp-data-append-",children:[]},{value:"7. <strong>SFTP List</strong>:-",id:"7-sftp-list-",children:[]},{value:"8. <strong>SFTP Exists</strong>:-",id:"8-sftp-exists-",children:[]},{value:"9. <strong>SFTP Chmod:-</strong>",id:"9-sftp-chmod-",children:[]}]},{value:"Sample Experience",id:"sample-experience",children:[]}],o={toc:b};function c({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"scope-of-integration"},"Scope of Integration"),Object(n.b)("p",null,"Yellow.ai Integration with SFTP allows you to seamlessly connect your remote server with the yellow.ai platform. Using this integration, one can get remote files, make a directory, delete directory, upload files to remote server, check if file exists or not."),Object(n.b)("h1",{id:"use-cases"},"Use-cases"),Object(n.b)("p",null,"Following are the use-cases which are currently accommodated in the Integration:"),Object(n.b)("h3",{id:"1-sftp-file-transfer-"},"1. ",Object(n.b)("strong",{parentName:"h3"},"SFTP File Transfer"),":-"),Object(n.b)("p",null,"  From this method you can easily upload files to a remote server."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Field Name"),Object(n.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(n.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"fileCdnUrl*"),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png"},"https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png")),Object(n.b)("td",{parentName:"tr",align:null},"Data source for data to copy to the remote server.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"remoteFilePath*"),Object(n.b)("td",{parentName:"tr",align:null},"/uploads/directoryPath/demo.png"),Object(n.b)("td",{parentName:"tr",align:null},"Path to the remote file to be created on the server with file name.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"appendTimeInfilePath*"),Object(n.b)("td",{parentName:"tr",align:null},"True or false"),Object(n.b)("td",{parentName:"tr",align:null},"If true then It will append timestamp in file name otherwise same name from remote file path.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"recursive"),Object(n.b)("td",{parentName:"tr",align:null},"true/false"),Object(n.b)("td",{parentName:"tr",align:null},"If the recursive flag is set to true, the method will create any directories in the path which do not already exist. Recursive flag defaults to false")))),Object(n.b)("h3",{id:"2-sftp-get-file-"},"2. ",Object(n.b)("strong",{parentName:"h3"},"SFTP Get File"),":-"),Object(n.b)("p",null,"Retrieve a file from a remote SFTP server"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Field Name"),Object(n.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(n.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"remoteFilePath*"),Object(n.b)("td",{parentName:"tr",align:null},"/Directory/filename.ext"),Object(n.b)("td",{parentName:"tr",align:null},"Path to the remote file to download")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"secureupload"),Object(n.b)("td",{parentName:"tr",align:null},"true/false"),Object(n.b)("td",{parentName:"tr",align:null},"If true then It will give minio directory path otherwise it will give CDN url of files")))),Object(n.b)("h3",{id:"3-sftp-make-directory-"},"3. ",Object(n.b)("strong",{parentName:"h3"},"SFTP Make Directory"),":-"),Object(n.b)("p",null,"Create a new directory. If the recursive flag is set to true, the method will create any directories in the path which do not already exist. Recursive flag defaults to false."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Field Name"),Object(n.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(n.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"remoteDirPath*"),Object(n.b)("td",{parentName:"tr",align:null},"/DirectoryPath"),Object(n.b)("td",{parentName:"tr",align:null},"Path to directory with new dir name")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"recursive"),Object(n.b)("td",{parentName:"tr",align:null},"true/false"),Object(n.b)("td",{parentName:"tr",align:null},"If true then the method will create any directories in the path which do not already exist")))),Object(n.b)("h3",{id:"4-sftp-delete-directory-"},"4. ",Object(n.b)("strong",{parentName:"h3"},"SFTP Delete Directory"),":-"),Object(n.b)("p",null,"Remove a directory. If removing a directory and recursive flag is set to ",Object(n.b)("inlineCode",{parentName:"p"},"true"),", the specified directory and all sub-directories and files will be deleted. If set to false and the directory has sub-directories or files, the action will fail. "),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Field Name"),Object(n.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(n.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"remoteDirPath*"),Object(n.b)("td",{parentName:"tr",align:null},"/DirectoryPath"),Object(n.b)("td",{parentName:"tr",align:null},"Path to directory")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"recursive"),Object(n.b)("td",{parentName:"tr",align:null},"true/false"),Object(n.b)("td",{parentName:"tr",align:null},"recursive flag is set to true, the specified directory and all sub-directories and files will be deleted.")))),Object(n.b)("h3",{id:"5-sftp-delete-files-"},"5. ",Object(n.b)("strong",{parentName:"h3"},"SFTP Delete Files"),":-"),Object(n.b)("p",null,"Delete a file on the remote server."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Field Name"),Object(n.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(n.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"remotefilePath*"),Object(n.b)("td",{parentName:"tr",align:null},"/DirectoryPath/filename.txt"),Object(n.b)("td",{parentName:"tr",align:null},"string. Path to remote file to be deleted.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"noErrorOk*"),Object(n.b)("td",{parentName:"tr",align:null},"true/false"),Object(n.b)("td",{parentName:"tr",align:null},"boolean. If true, no error is raised when you try to delete a non-existent file. Default is false.")))),Object(n.b)("h3",{id:"6-sftp-data-append-"},"6. ",Object(n.b)("strong",{parentName:"h3"},"SFTP Data Append"),":-"),Object(n.b)("p",null,"Append the ",Object(n.b)("inlineCode",{parentName:"p"},"input")," data to an existing remote file. There is no integrity checking performed apart from normal writeStream checks. This function simply opens a writeStream on the remote file in append mode and writes the data passed in to the file."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"}," Node Input Params:-"),"                        "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Field Name"),Object(n.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(n.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"fileCdnUrl*"),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://www.w3.org/TR/PNG/iso_8859-1.txt"},"https://www.w3.org/TR/PNG/iso_8859-1.txt")),Object(n.b)("td",{parentName:"tr",align:null},"CDN url for Data to append to remote file")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"remoteFilePath*"),Object(n.b)("td",{parentName:"tr",align:null},"/DirectoryPath/filename.txt"),Object(n.b)("td",{parentName:"tr",align:null},"Path to remote file if files do not exist then It will auto create.")))),Object(n.b)("h3",{id:"7-sftp-list-"},"7. ",Object(n.b)("strong",{parentName:"h3"},"SFTP List"),":-"),Object(n.b)("p",null," Retrieves a directory listing"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Node Input Params:-"),"                        "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Field Name"),Object(n.b)("th",{parentName:"tr",align:null},"Sample Input"),Object(n.b)("th",{parentName:"tr",align:null},"Remarks"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"remoteDir*"),Object(n.b)("td",{parentName:"tr",align:null},"/DirectoryPath"),Object(n.b)("td",{parentName:"tr",align:null},"remote directory path")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"pattern"),Object(n.b)("td",{parentName:"tr",align:null},"*"),Object(n.b)("td",{parentName:"tr",align:null},"{string")))),Object(n.b)("h3",{id:"8-sftp-exists-"},"8. ",Object(n.b)("strong",{parentName:"h3"},"SFTP Exists"),":-"),Object(n.b)("p",null," Tests to see if a remote file or directory exists. Returns type of remote object if it exists or false if it does not"),Object(n.b)("h3",{id:"9-sftp-chmod-"},"9. ",Object(n.b)("strong",{parentName:"h3"},"SFTP Chmod:-")),Object(n.b)("p",null,"Change the mode (read, write or execute permissions) of a remote file or directory."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"remotePath: string. Path to the remote file or directory"),Object(n.b)("li",{parentName:"ul"},"newmode: octal. New mode to set for the remote file or directory")),Object(n.b)("h1",{id:"configuration"},"Configuration"),Object(n.b)("p",null,"Configuring the integration with SFTP is straightforward. Follow the steps defined below to start integrating:"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"To integrate SFTP with your bot on the platform:")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Go to Integration section"),Object(n.b)("li",{parentName:"ol"},"In Integration click on the connect for the SFTP."),Object(n.b)("li",{parentName:"ol"},"Enter Host, Port, username, Password.")),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://i.imgur.com/xepX9Ka.png",alt:"alt_text",title:"image_tooltip"})),Object(n.b)("ol",{start:4},Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Click on Save")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Store SFTP response in Object type variable in action-node."))),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://i.imgur.com/KCWAcMf.png",alt:null})),Object(n.b)("p",null,"Following the above steps will connect your SFTP remote server  with the yellow.ai platform."),Object(n.b)("h1",{id:"references-"},Object(n.b)("strong",{parentName:"h1"},"References:-")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/ssh2-sftp-client"},"https://www.npmjs.com/package/ssh2-sftp-client")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"https://www.filestash.app/sftp-browser.html"},"https://www.filestash.app/sftp-browser.html"))),Object(n.b)("h2",{id:"sample-experience"},"Sample Experience"),Object(n.b)("p",null,"Below is a video that depicts how this integration works."))}c.isMDXComponent=!0},349:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||l;return a?n.a.createElement(u,b(b({ref:t},c),{},{components:a})):n.a.createElement(u,b({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var c=2;c<l;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);