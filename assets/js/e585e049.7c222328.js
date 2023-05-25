"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[53397],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58260:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Add or import APIs",sidebar_label:"Add APIs"},p=void 0,s={unversionedId:"platform_concepts/studio/api/add-api",id:"platform_concepts/studio/api/add-api",title:"Add or import APIs",description:"In this article, you will learn -",source:"@site/docs/platform_concepts/studio/api/add-api.md",sourceDirName:"platform_concepts/studio/api",slug:"/platform_concepts/studio/api/add-api",permalink:"/docs/platform_concepts/studio/api/add-api",draft:!1,tags:[],version:"current",frontMatter:{title:"Add or import APIs",sidebar_label:"Add APIs"},sidebar:"platform_concepts",previous:{title:"Contextual Responses",permalink:"/docs/platform_concepts/studio/train/add-contextual-response"},next:{title:"Send data to API",permalink:"/docs/platform_concepts/studio/api/send-data"}},m={},d=[{value:'<a name="1"></a>1. Add a new API (using URL)',id:"1-add-a-new-api-using-url",level:2},{value:"1.1 Provide API details",id:"11-provide-api-details",level:3},{value:"1.2 Add request parameters",id:"12-add-request-parameters",level:3},{value:"1.3 Add environment variables",id:"13-add-environment-variables",level:3},{value:'<a name="1.4"></a>1.4 Test the API',id:"14-test-the-api",level:3},{value:"1.5 Save the API",id:"15-save-the-api",level:3},{value:'<a name="2"></a>2. Import a new API (CURL/JSON)',id:"2-import-a-new-api-curljson",level:2},{value:"2.1 Import API from CURL",id:"21-import-api-from-curl",level:3},{value:"2.2 Import API(s) from a JSON file",id:"22-import-apis-from-a-json-file",level:3},{value:"What next?",id:"what-next",level:4}],u={toc:d};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this article, you will learn -"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1"},"How to add a new API with all the configurations")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1.4"},"How to test the API before saving")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2"},"How to import one or more APIs from a JSON file"))),(0,o.kt)("h2",{id:"1-add-a-new-api-using-url"},(0,o.kt)("a",{name:"1"}),"1. Add a new API (using URL)"),(0,o.kt)("p",null,"APIs facilitate fetching data directly from third-pary systems without the need of syncing or importing the entire data to yellow.ai. The following are the steps involved in adding a new API in Studio module."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In this article, we will be using ",(0,o.kt)("a",{parentName:"p",href:"https://openweathermap.org"},"OpenWeather API")," to retrieve weather information of the city provided by the user. Sign up at ",(0,o.kt)("a",{parentName:"p",href:"https://openweathermap.org"},"https://openweathermap.org")," and retrieve an API key.")),(0,o.kt)("h3",{id:"11-provide-api-details"},"1.1 Provide API details"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("strong",{parentName:"li"},"Studio"),", go to the ",(0,o.kt)("strong",{parentName:"li"},"API")," tab. "),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"+ Create new API")," button and enter the following details."),(0,o.kt)("li",{parentName:"ol"},"Enter a unique ",(0,o.kt)("strong",{parentName:"li"},"API name"),". Supports alpha-numeric and no spaces are allowed. "),(0,o.kt)("li",{parentName:"ol"},"Choose the appropriate HTTP ",(0,o.kt)("strong",{parentName:"li"},"Method"),". Example - ",(0,o.kt)("inlineCode",{parentName:"li"},"GET")," "),(0,o.kt)("li",{parentName:"ol"},"Enter the  API ",(0,o.kt)("strong",{parentName:"li"},"URL")," of the API. You can just add the base URL and add request parameters later or enter the entire URL with params in the {param}. Example - ",(0,o.kt)("inlineCode",{parentName:"li"},"https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"),".",(0,o.kt)("img",{src:"https://i.imgur.com/E2xo2qr.png",width:"80%%"})),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add new API")," to save the details.\nProceed to next step Add request parameters.\nIn the example, the API requires City name and API key to run.",(0,o.kt)("img",{src:"https://i.imgur.com/9wl5Tqj.png",width:"80%%"}))),(0,o.kt)("h3",{id:"12-add-request-parameters"},"1.2 Add request parameters"),(0,o.kt)("p",null,"The preceding section explains how to add a API end point and set the HTTP method. However, to run a API you would need authentication, input parameters depending on the method. For example path params, query params, or request body. "),(0,o.kt)("p",null,"To add request information to your API, follow these steps - "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the API details page, click ",(0,o.kt)("strong",{parentName:"p"},"Add Params")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter params in key-value pairs. "),(0,o.kt)("p",{parentName:"li"},"In the example - for the key ",(0,o.kt)("inlineCode",{parentName:"p"},"q"),",  add a value {{{cityName}}}. This will fetch city name from the ",(0,o.kt)("inlineCode",{parentName:"p"},"cityName")," variable. In the bot flow, you can store user response in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cityName")," variable and use here.\nAlso add ",(0,o.kt)("inlineCode",{parentName:"p"},"appid")," - the API key you retrieved from ",(0,o.kt)("a",{parentName:"p",href:"https://openweathermap.org"},"OpenWeather API"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"+Add params"),".\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/lVQpW6P.png",alt:null})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Params"),": This includes the path and query parameters of the API. Click ",(0,o.kt)("strong",{parentName:"li"},"Add params")," and enter enter ",(0,o.kt)("strong",{parentName:"li"},"Key")," and ",(0,o.kt)("strong",{parentName:"li"},"Value")," pairs. For example, if ",(0,o.kt)("inlineCode",{parentName:"li"},"cityName")," is a param that has a dynamic value, You can set Key as cityName and Value as {{{city_name}}}, where city_name is a variable to capture city name from the user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Headers"),": You can set all the request headers here including authorization tokens. For example, you can pass Barer token, OAuth, or Basic Auth in Headers along with other mandatory and optional headers. Learn ",(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/studio/api/bearer-token"},"how to use access token generated from an API response to authenticate an API"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Body"),": Use this for POST or PUT calls where you need to pass request body. Choose the body format - x-www-form-urlencoded, JSON, XML, GraphQL, or form-data. Click ",(0,o.kt)("strong",{parentName:"li"},"Add body")," and paste the code.\n",(0,o.kt)("img",{parentName:"li",src:"https://i.imgur.com/WE3eVOS.png",alt:null})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configuration"),": Any settings related to the API such as Timeout, retry attempts, encoding, strictSSL, default success and failure message, and more.")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can pass the access key or auth token in the way that the API is designed. You could pass it in the request URL, body, or headers. You can ignore this for APIs where no authentication is required.")),(0,o.kt)("h3",{id:"13-add-environment-variables"},"1.3 Add environment variables"),(0,o.kt)("p",null,"In some cases you might have different API endpoints for different deployment environments such as staging, production, sandbox or cluster. You can add all the variables and use the appropriate variable when making an API call. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"This is not applicable for API with single end point."),(0,o.kt)("li",{parentName:"ul"},"This is a global setting and applicable to all APIs of your current bot and not a specific to an API."))),(0,o.kt)("p",null,"To add environment variable, follow these steps - "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"Studio")," > ",(0,o.kt)("strong",{parentName:"p"},"Build")," > ",(0,o.kt)("strong",{parentName:"p"},"API"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the API to add environment variables.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the right sidebar, click on the ",(0,o.kt)("strong",{parentName:"p"},"Configure Environment")," icon."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/bybT0Eh.png",alt:null})))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("strong",{parentName:"p"},"Configure environment")," option is disabled in Live environment.")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a placeholder for the API endpoint. "),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"In the example, we have used host as the API placeholder.\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/qHQFY4u.png",alt:null})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the respective placeholder, add API endpoints for each environment."))),(0,o.kt)("img",{src:"https://i.imgur.com/xIldDOM.png",alt:"drawing",width:"80%"}),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Lastly, before making an API call, select an environment from the dropdown. Based on the environment variables you\u2019ve configured earlier, ")),(0,o.kt)("h3",{id:"14-test-the-api"},(0,o.kt)("a",{name:"1.4"}),"1.4 Test the API"),(0,o.kt)("p",null,"Before saving, ensure the API details are correct and working as expected. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Send")," to see if it's showing the desired response. It prompts to enter all the parameter values added in the API.")),(0,o.kt)("p",null,"In the example. as ",(0,o.kt)("inlineCode",{parentName:"p"},"cityName")," variable is empty, you'll be asked for a city name. Provide the city name and click ",(0,o.kt)("strong",{parentName:"p"},"SEND"),". "),(0,o.kt)("p",null,"If the API details are properly added, you should be able to see a sample response as shown here."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/cU30hAy.png",alt:"API Response"})),(0,o.kt)("h3",{id:"15-save-the-api"},"1.5 Save the API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the API is working fine, click ",(0,o.kt)("strong",{parentName:"li"},"Save"),". ")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"API response has a size limit of 250kb.You will get an error if the response exceeds the limit"),(0,o.kt)("img",{src:"https://i.imgur.com/8fTglp1.png",alt:"drawing",width:"50%"}))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"2-import-a-new-api-curljson"},(0,o.kt)("a",{name:"2"}),"2. Import a new API (CURL/JSON)"),(0,o.kt)("p",null,"The preceding section helps you add new APIs manually. However, if you have a CURL script, JSON file, or collection URL, you can directly import it using the following procedure.   "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("strong",{parentName:"li"},"Studio"),", go to the ",(0,o.kt)("strong",{parentName:"li"},"API")," tab. "),(0,o.kt)("li",{parentName:"ol"},"Click on the arrow icon next to API management and select ",(0,o.kt)("strong",{parentName:"li"},"Import")," .")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/1gfjuHi.png",alt:null})),(0,o.kt)("h3",{id:"21-import-api-from-curl"},"2.1 Import API from CURL"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Type"),", choose CURL ."),(0,o.kt)("img",{src:"https://i.imgur.com/5BJSXRa.png",alt:"drawing",width:"75%"})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"API name")," specify a unique name for the API. Use alpha-numeric characters without space."),(0,o.kt)("img",{src:"https://cdn.yellowmessenger.com/SkWOLKxwJxyI1623865511502.png",alt:"drawing",width:"80%"}))),(0,o.kt)("h3",{id:"22-import-apis-from-a-json-file"},"2.2 Import API(s) from a JSON file"),(0,o.kt)("p",null,"If you have a one or more APIs, save your collection in a JSON file and import it as mentioned in the following -  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("strong",{parentName:"li"},"Type")," as ",(0,o.kt)("em",{parentName:"li"},"Collection")," or ",(0,o.kt)("em",{parentName:"li"},"JSON")," depending on the file you want to import"),(0,o.kt)("li",{parentName:"ol"},"Drag & Drop the file in Import JSON or use the ",(0,o.kt)("strong",{parentName:"li"},"Import")," button to upload the file.",(0,o.kt)("img",{src:"https://i.imgur.com/7Jsu5KE.png",alt:"drawing",width:"75%"})),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Import"),".")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"what-next"},"What next?"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/studio/api/bearer-token"},"Know how to dynamically pass access tokens in a API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/studio/api/send-data"},"Know how to send data to the API")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/platform_concepts/studio/api/api-settings"},"Monitor errors in APIs")))))}c.isMDXComponent=!0}}]);