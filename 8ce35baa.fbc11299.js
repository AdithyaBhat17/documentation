(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{241:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(404)),o=["components"],c={title:"Code",sidebar_label:"Code"},i={unversionedId:"platform_concepts/studio/build/code",id:"platform_concepts/studio/build/code",isDocsHomePage:!1,title:"Code",description:"Code section is used to add function code. It is available in Studio -> Build -> Code.",source:"@site/docs/platform_concepts/studio/build/code.md",slug:"/platform_concepts/studio/build/code",permalink:"/docs/platform_concepts/studio/build/code",version:"current",sidebar_label:"Code",sidebar:"platform_concepts",previous:{title:"Logic Nodes",permalink:"/docs/platform_concepts/studio/build/nodes/logic-nodes"},next:{title:"Math operations",permalink:"/docs/platform_concepts/studio/build/math-ops"}},b=[{value:'<a name="1"></a> 1. Function Creation',id:"1-function-creation",children:[{value:'<a name="11"></a>1.1 Format of cloud functions',id:"11-format-of-cloud-functions",children:[]},{value:'<a name="12"></a>1.2 Arguments- Args',id:"12-arguments--args",children:[]},{value:'<a name="13"></a>1.3 Check Warnings',id:"13-check-warnings",children:[]}]},{value:'<a name="ts"></a> 2. Tools and Settings',id:"2-tools-and-settings",children:[{value:"2.1 Flows",id:"21-flows",children:[]}]},{value:'<a name="uf"></a> 3. Functions in Flow',id:"3-functions-in-flow",children:[]},{value:'<a name="sc"></a> 4. Sample code',id:"4-sample-code",children:[{value:"4.1 Autocomplete",id:"41-autocomplete",children:[]},{value:"4.2 Decode BASE64",id:"42-decode-base64",children:[]}]}],s={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,o);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Code section is used to add function code. It is available in ",Object(l.b)("strong",{parentName:"p"},"Studio")," -> ",Object(l.b)("strong",{parentName:"p"},"Build")," -> ",Object(l.b)("strong",{parentName:"p"},"Code"),"."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/jNHxOtw.png",alt:null})),Object(l.b)("p",null,"Following topics are discussed in this document: "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#1"},"How to add a new function?")," ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#11"},"Function format")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#12"},"Args to access code")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"#13"},"How to check for warnings and errors?")))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#ts"},"Tools and settings")," "),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#uf"},"Using function in a flow")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",{parentName:"li",href:"#sc"},"Sample code"))),Object(l.b)("h2",{id:"1-function-creation"},Object(l.b)("a",{name:"1"})," 1. Function Creation"),Object(l.b)("p",null,"You can add a new function to write a custom logic in the ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"code"))," section."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"To execute these functions in a flow, attach a ",Object(l.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#function"},"function"),"- action node.")),Object(l.b)("h3",{id:"11-format-of-cloud-functions"},Object(l.b)("a",{name:"11"}),"1.1 Format of cloud functions"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"return new Promise(resolve => {\n      // Your logic goes here\n      resolve();\n  }); \n")),Object(l.b)("h3",{id:"12-arguments--args"},Object(l.b)("a",{name:"12"}),"1.2 Arguments- Args"),Object(l.b)("p",null,"Useful args to access in code:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"arg"),Object(l.b)("th",{parentName:"tr",align:null},"Data type"),Object(l.b)("th",{parentName:"tr",align:null},"Use"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"data.variables.<variable_name>"),Object(l.b)("td",{parentName:"tr",align:null},"Key : String, Value: any"),Object(l.b)("td",{parentName:"tr",align:null},"To access any bot variable in code.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"data.channel"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"To access channel names like whatsapp, yellowmessenger, facebook etc")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"data.profile"),Object(l.b)("td",{parentName:"tr",align:null},"Object"),Object(l.b)("td",{parentName:"tr",align:null},"Contains user profile values like name, number, email, city , country, language")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"data.sender"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"User ID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"data.bot"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"Bot ID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"data.message"),Object(l.b)("td",{parentName:"tr",align:null},"String"),Object(l.b)("td",{parentName:"tr",align:null},"To access Last/latest user message in the conversation")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"data.event.<event_name>"),Object(l.b)("td",{parentName:"tr",align:null},"Object"),Object(l.b)("td",{parentName:"tr",align:null},"To access events in code")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ymLib.args.apiResponse"),Object(l.b)("td",{parentName:"tr",align:null},"any"),Object(l.b)("td",{parentName:"tr",align:null},"To access API response in API transformation function")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ymLib.args.logger"),Object(l.b)("td",{parentName:"tr",align:null},"Object"),Object(l.b)("td",{parentName:"tr",align:null},"Can be used to add logs")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"context.history"),Object(l.b)("td",{parentName:"tr",align:null},"Object"),Object(l.b)("td",{parentName:"tr",align:null},"Contains history of nodes visited by user")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"prediction.intents"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"To get Intents predicted from user message")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"prediction.entities"),Object(l.b)("td",{parentName:"tr",align:null}),Object(l.b)("td",{parentName:"tr",align:null},"To get entities predicted from user message")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"13-check-warnings"},Object(l.b)("a",{name:"13"}),"1.3 Check Warnings"),Object(l.b)("p",null,"Click the warnings link at the bottom left of the screen and correct the displayed warnings/errors."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/PIhDXVB.jpg",alt:null})),Object(l.b)("h2",{id:"2-tools-and-settings"},Object(l.b)("a",{name:"ts"})," 2. Tools and Settings"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Tools")," - This is a global testing and setting tab. Click ",Object(l.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/tools"},"here")," to learn more."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Logs")," - Helps in identifying events that occur during preview testing, and debugging."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Compare")," - Compares the Production and Staging functions. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Flows")," - Used to copy and paste the flow and step names from this page. "),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Localization")," - Localization can be used to set up a bot response or messages in different languages by adding messages and it can be configured according to preferred language. Click ",Object(l.b)("a",{parentName:"li",href:"https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#31-variable-in-localisation-message"},"here")," to learn more.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/oqLieOr.png",alt:null})),Object(l.b)("h3",{id:"21-flows"},"2.1 Flows"),Object(l.b)("p",null,"Flows functionality is to quickly support copy and visit a flow with use of their names."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Select a flow-category."),Object(l.b)("li",{parentName:"ul"},"Select a flow.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"You will have an option to copy the flow name. "),Object(l.b)("li",{parentName:"ul"},"By clicking the flow link, you will be redirected to the respective flow. You can check how the function works for that flow. "),Object(l.b)("li",{parentName:"ul"},"You can view the nodes used in each of the flow. ")))),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/Erv0gxk.jpg",alt:null})),Object(l.b)("h2",{id:"3-functions-in-flow"},Object(l.b)("a",{name:"uf"})," 3. Functions in Flow"),Object(l.b)("p",null,"Function can be used to parse data through an API. Function is also used to manipulate API responses."),Object(l.b)("p",null,"Follow the below steps to create a flow with a function node: "),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Use-case"),": Function to parse Weather Data API and to show the different parameters in a carousel format. ")),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Open ",Object(l.b)("strong",{parentName:"li"},"Studio")," \u2013> ",Object(l.b)("strong",{parentName:"li"},"Code"),". Click ",Object(l.b)("strong",{parentName:"li"},"Add new function"),".\nFor example: transformationFunction (as shown below).")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/VhtUaHr.png",alt:null})),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"The API response is given in JSON object (as displayed below) for the temperature details.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/xiQ3wUM.png",alt:null})),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"Fetch and parse the API response as JSON object. ")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/ZE7whNf.png",alt:null})),Object(l.b)("p",null,"In the above code, Weather Data is parsed and stored in the response body in a variable \u201cmain\u201d."),Object(l.b)("ol",{start:4},Object(l.b)("li",{parentName:"ol"},"The API data is now ready to be used in your bot journey. ")),Object(l.b)("p",null,"You can store the entire JSON body data in a variable and parse through them for each parameter of weather data that you want to display in the bot."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/mWH4Vy6.png",alt:null})),Object(l.b)("ol",{start:5},Object(l.b)("li",{parentName:"ol"},"After the global variable is added, open the respective API node and store the response in that global variable.")),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/SI6adHZ.png",alt:null})),Object(l.b)("ol",{start:6},Object(l.b)("li",{parentName:"ol"},"Use any prompt to display this data. ")),Object(l.b)("p",null,"In our example, a carousel is used to display the Temperature and Wind details. You can also add an image of your choice (optional)."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/5ZynLHG.png",alt:null})),Object(l.b)("p",null,"You can use the variable symbol and access the various parameters of the JSON object as shown in the above example."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://i.imgur.com/gBjO3vm.png",alt:null})),Object(l.b)("h2",{id:"4-sample-code"},Object(l.b)("a",{name:"sc"})," 4. Sample code"),Object(l.b)("h3",{id:"41-autocomplete"},"4.1 Autocomplete"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'return new Promise(resolve => {\n    console.log("inside autoSuggestion");\n    let result = data.variables.autoComponents;\n    const { term } = data;\n    let suggestions = [];\n    result.forEach((hit) => {\n        if (hit.component.toLowerCase().includes(term.toLowerCase())) {\n            suggestions.push([hit.component, hit.component]);\n        }\n    });\n    resolve(suggestions);\n});\n')),Object(l.b)("h3",{id:"42-decode-base64"},"4.2 Decode BASE64"),Object(l.b)("p",null,"The Base64 Alphabet contains 64 basic ASCII characters.\nIf we receive an encrypted string through API, then we need to decrypt it first then only we can get the actual object. Then upload to YM Server, at last we can share the URL."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},'    let call_api = await app.executeApi(\'api_name\', { argument: _value});\n    let api_data = JSON.parse(call_api.body);\n    app.log(api_data, "#####API DATA");\n\n    let buffer = new Buffer.from(api_data.obj_name, "base64"); // Decode the file\n    let file_url = await app.uploadFile(buffer, \'File.pdf\');  // Upload the file to YM server\n    // await app.sendDocument(file_url, { caption:"FILE", filename: \'File.pdf\', mime: \'application/pdf\' });\n    // Share the File URL\n    await app.sendCards([\n        {\n            title: "Kindly download the same as PDF",\n            actions: [{\n                title: "DOWNLOAD",\n                url: file_url\n            }]\n        }\n    ]);\n')),Object(l.b)("p",null,"For more information, ",Object(l.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Base64"},"click here"),"."))}p.isMDXComponent=!0},404:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<l;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);