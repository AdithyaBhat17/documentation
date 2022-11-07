(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(450)),l=["components"],c={title:"Guide to Implement New Card in Yellow AI Cloud Platform",sidebar_label:"Implement carousel card"},i={unversionedId:"cookbooks/newcard",id:"cookbooks/newcard",isDocsHomePage:!1,title:"Guide to Implement New Card in Yellow AI Cloud Platform",description:"Follow the steps below to use the card type option on the carousel node in your flow:",source:"@site/docs/cookbooks/newcard.md",slug:"/cookbooks/newcard",permalink:"/docs/cookbooks/newcard",version:"current",sidebar_label:"Implement carousel card",sidebar:"cookbooks",previous:{title:"Conversation Design Guidelines",permalink:"/docs/cookbooks/conversation-design"},next:{title:"Download API logs data of the last 15 days",permalink:"/docs/cookbooks/studio/downloadapilogs"}},s=[{value:"1. Add a new card to the flow",id:"1-add-a-new-card-to-the-flow",children:[]},{value:"2. Code and Card Mapping for New Card",id:"2-code-and-card-mapping-for-new-card",children:[{value:"2.1 Tracker card",id:"21-tracker-card",children:[]},{value:"2.2 List Card",id:"22-list-card",children:[]},{value:"2.3 Status card",id:"23-status-card",children:[]},{value:"2.4 Contact Card",id:"24-contact-card",children:[]},{value:"2.5 Receipt card",id:"25-receipt-card",children:[]},{value:"2.6 PDF preview card",id:"26-pdf-preview-card",children:[]}]}],p={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Follow the steps below to use the ",Object(o.b)("strong",{parentName:"p"},"card type")," option on the ",Object(o.b)("strong",{parentName:"p"},"carousel")," node in your flow: "),Object(o.b)("h2",{id:"1-add-a-new-card-to-the-flow"},"1. Add a new card to the flow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a Function and store the variables in the function node as an Array  ")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Regarding the code to use in the  function, refer to table Code and Card Mapping for the new card in the next section.")),Object(o.b)("img",{src:"https://i.imgur.com/Wyoinwg.png",alt:"drawing"}),Object(o.b)("img",{src:"https://lh4.googleusercontent.com/XiWHgdyJ2ehSRK0AIbbScfomr_ILze1UpkMAAiTd2_rqT6t2K6FgVwI51MyuthDCjTRsajNGKkFmagtbOpRHY07ifWEKuTia839WPWaoUx7ymMcp1p22mVZ-hQGlFErr_AsmeQO1WCujhCTMdveGpTt-oeumlLKnUmGjmvXumfvoAq6rf9dMJoy-DaEC7d4rKqTO-A",alt:"drawing",width:"80%"}),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add another node in the carousel."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Delete the default carousel."),Object(o.b)("li",{parentName:"ul"},"Select fetch from the variables that have been set in step 1.",Object(o.b)("br",{parentName:"li"}),Object(o.b)("img",{parentName:"li",src:"https://i.imgur.com/YEX71jL.png",alt:null})),Object(o.b)("li",{parentName:"ul"},"Edit the carousel setting based on the new card type. To edit the card type to use, you can hover the cursor to the right side and then click it.  ")),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/NcUvtFR.png",alt:null}),"  "),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{parentName:"p",src:"https://i.imgur.com/RApulNU.png",alt:null})))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Regarding the Card type to use, refer to Code and Card Mapping for the new card below.  ")),Object(o.b)("h2",{id:"2-code-and-card-mapping-for-new-card"},"2. Code and Card Mapping for New Card"),Object(o.b)("h3",{id:"21-tracker-card"},"2.1 Tracker card"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code in Function")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'return new Promise(resolve => {\n    // Your logic goes here\n    let arr= [];\n    let tracard =\n            {\n                "title": "Track Order",\n                "statuses": ["Ordered", "Ready", "Shipped", "In City", "Arrived"],\n                "currentStatus": "Shipped",\n                "from": { "Title": "Jakarta", "Description": "12/12/2021" },\n                "to": { "Title": "Surabaya", "Description": "14/12/2021" },\n                "assigneeDetails": {\n                    "key": "Name",\n                    "value": \'Novi Andari\',\n                    "image": "https://cdn.yellowmessenger.com/q9f6PUO48xbV1617021384235.jpeg",\n                },\n                "details": {\n                    "Order ID": "#444-2445-2442-222",\n                    "Delivey": "14/12/2021",\n                    "Total": "IDR 1500",\n                },\n                //  "actions": {\n                //    title: "View data",\n                //  text: "View data"\n            };\n            arr.push (tracard);\n    resolve(arr);\n});   \n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Card Type in Carousel"),"  "),Object(o.b)("img",{src:"https://i.imgur.com/u6glp54.png",alt:"drawing",width:"60%"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Display in chat"),"  "),Object(o.b)("img",{src:"https://i.imgur.com/0LiFOcR.png",alt:"drawing",width:"60%"}),Object(o.b)("h3",{id:"22-list-card"},"2.2 List Card"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code in Function")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'return new Promise(resolve => {\n  // Your logic goes here\n  let arr = [];\n  let listcard1 =\n    {\n      title: \'COVID-19 Queries\',\n      options: [{\n        title: "Domestic - Covid travel guidelines",\n        text: "Domestic - Covid travel guidelines"\n      }, {\n        title: "International - Travel guideliness",\n        text: "International - Travel guideliness"\n      }, {\n        title: "Mandatory web check in",\n        text: "Mandatory web check in"\n      }, {\n        title: "Fly safe and hassle-free",\n        text: "Fly safe and hassle-free"\n      }, {\n        title: "Interest on credit shell",\n        text: "Interest on credit shell"\n      }]\n    } ;\n    let listcard2 =\n    {\n      title: \'Flight COVID-19 Queries\',\n      options: [{\n        title: "Domestic - Covid travel guidelines",\n        text: "Domestic - Covid travel guidelines"\n      }, {\n        title: "International - Travel guideliness",\n        text: "International - Travel guideliness"\n      }, {\n        title: "Mandatory web check in",\n        text: "Mandatory web check in"\n      }, {\n        title: "Fly safe and hassle-free",\n        text: "Fly safe and hassle-free"\n      }, {\n        title: "Interest on credit shell",\n        text: "Interest on credit shell"\n      }]\n         } ; \n      arr.push(listcard1, listcard2);\n  resolve(arr);\n});  \n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Card Type in Carousel"),"   "),Object(o.b)("img",{src:"https://i.imgur.com/avq95rt.png",alt:"drawing",width:"60%"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Display in chat")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("img",{parentName:"strong",src:"https://lh4.googleusercontent.com/llWIH43nPoCp08gIifTBRr9L_7U1BfZQ9qKPXXFDwCAXHeETmLfRAL4yBYJXhk6tBPssgzwFQGLDIGIuaToeJs-CFVhgCfKYZqou7PyNMNZgjHsZTjarZ0wbw5_JJxpiVaexIdGCbUVGzgKbnZqrdMV0EfvYORXLkwc-5l_ETGJVN70EHThcmF3wtzTicpzvGc3Qkg",alt:null}))),Object(o.b)("h3",{id:"23-status-card"},"2.3 Status card"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code in Function")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'return new Promise(resolve => {\n      // Your logic goes here\n         let arr= [];\n         let stacard =     {\n            "title": "Payment success",\n            "success": true, //In case of failed pass false\n            "text": "Your payment was successfull & your order has been placed.",\n            "value": "IDR 15000"\n        };\n         arr.push (stacard);\n      resolve(arr);\n  });      \n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Card Type in Carousel"),"   "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("img",{parentName:"strong",src:"https://lh6.googleusercontent.com/XYabBrzuqGil3LGyI4Jh8VT4jhiG133OBaMj3LszSqhUzXnbW5ActJIlDo0T7f9lRktagBReqdPlil7endagu-oZJeNGh49o19ryV6W9-TfTAUJRpXcFANv0uqsBkijokF0XzzCb33tV7VBJhpIIh7ZL8wnvNGDl_1rvj2s0o5XHx4WR7m6P8c_7DrIWcs_OgrCy-Q",alt:null})),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Display in chat"),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("img",{parentName:"strong",src:"https://lh4.googleusercontent.com/kdiPR0SFsryQIsp30d90i7TymakTNeSc0EnJSlkNT5wFbljSxP_sua8SbeRtXexv7ajBrD1WIR_a3fVaSEQT5kL2kT0PveBfTU4EOsnks07xVAD6e73qkfbceOSiR9fAcriN5ja1ur1JzNveiu3MBNG4mW7DW30oaHrfAPwhA8bDtHx0cM0qNCXS4ggXH67EkYrSdg",alt:null})),"  "),Object(o.b)("h3",{id:"24-contact-card"},"2.4 Contact Card"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code in Function")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'return new Promise(resolve => {\n   // Your logic goes here\n   let arr = [];\n   let contcard =\n   {\n      "title": "Contact Info",\n      "download": true,\n      "options": {\n         "image": "https://cdn.yellowmessenger.com/q9f6PUO48xbV1617021384235.jpeg",\n         "key": "Name",\n         "value": "Shweta Kumari"\n      },\n      "actions": [{\n         "title": "email",\n         "text": "s@gmail.com",\n         "icon_class": \'ri-mail-fill\'\n      }, {\n         "title": "Phone",\n                 "url": "9876543210",\n         "icon_class": \'ri-phone-fill\'\n      }, {\n         "title": "whatsapp",\n         "url": "9876543210",\n         "icon_class": \'ri-whatsapp-fill\'\n      }]\n   };\n \n   arr.push(contcard);\n   resolve(arr);\n});     \n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Card Type in Carousel"),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("img",{parentName:"strong",src:"https://lh5.googleusercontent.com/YSHSSps-jhnshg032xqx6FItENy31im6MBHi56B8PZH-2B7XbDt_zbLwuDLHqD7SmBByTDMBqlO5NI4E5ie-gn_YC2aPWR7n7VAjULwQcJ4DYBy8jqxn_V18yFkOZAR8Nx_bsfg_Av5hIqmOVXM9DRTmHsc5DZ5460pJOArQyL0H2JZ9-RKRF7EbS21rrSd30KaXJA",alt:null})),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Display in chat"),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("img",{parentName:"strong",src:"https://lh3.googleusercontent.com/yp8ShI5YTbkdO4zsk4efZr0q7oY3GF1Vxg4wX1NAY7Wx4_zfYbtidnTZuQfpdSYy7cLtm7XLxz24LFhtzuH_SYzhxrAftevto-xapfvnKVYuRUD2RkRPNWzjUHdmiwXvWh0XuzqxLBduXceDvfcZWh2EE_Za5poxS24jONLpLVpq9kA8NrilET0XW9JNVJNVGo0yUA",alt:null})),"  "),Object(o.b)("h3",{id:"25-receipt-card"},"2.5 Receipt card"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code in Function")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'return new Promise(resolve => {\n    // Your logic goes here\n    let arr = [];\n    //let result = JSON.parse(data.variables.searchroomorder);\n    let rececard = {\n        "title": "Payment receipt",\n        "titleHeader": { "Transaction ID": "#444-2445-2442-222" },\n        "download": false,\n        "item": { "items": "7 Rendang" },\n        "options": [{\n            \'key\': "With a value of",\n            \'value\': "IDR 70000"\n        }, {\n            \'key\': "On date",\n            \'value\': "14 Feb 2022"\n        }],\n       // "action": {\n         //   title: "View all items",\n           // text: "View all items"\n       // }\n    };\n    arr.push(rececard);\n    resolve(arr);\n    });\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Card Type in Carousel"),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("img",{parentName:"strong",src:"https://lh6.googleusercontent.com/je_wRsbKYejZaTqzPzwxh9Kn2iCkrMEjqrHNz6zmyq-Lev46N7rqw5d5eAfY8WNfapeAqW-kDeuahGEtkynjCGRGL67cdnb7pIhmKLr0BYShc24wWwcqrzgOCbv0LQShVSqKzG_JcLk_sIGC5MgTiLjmg9Q75QF_aFzwduNOm2tt_9Yw2d_OcQM6vdni7SC9WtZ_dw",alt:null})),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Display in chat"),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("img",{parentName:"strong",src:"https://lh5.googleusercontent.com/zQwIv-FZSJHiw-zuo8tg4lWnGtCnv2RjsqROwo-E4bq3n_2zd8riCYua044X2-p_V4YDZXpheyJ0XHd0DqFOHn0W8E5ufLf3mxxJkQzpLZ2AEFDf7_NRrsls5IDLs1BOjIgOqIXrdYiGObmtF9RJhHEDHBWhQxtwGZyp2gak3a1ZvcblLeJmqmSZP0scdr68eIk8vQ",alt:null}))),Object(o.b)("h3",{id:"26-pdf-preview-card"},"2.6 PDF preview card"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Code in Function")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'return new Promise(resolve => {\n  // Your logic goes here\n  // console.log(data.profile, "profile zuhud");\n  let arr = [];\n  let pdfcard = {\n  "title": "Lorem Ipsum",\n  "text" : "lorem ipsum dolor amet",\n  "image" : "https://cdn.yellowmessenger.com/q9f6PUO48xbV1617021384235.jpeg",\n  "actions": [{\n    "title": "Preview",\n    "preview": "http://www.africau.edu/images/default/sample.pdf",\n      //  "feedback": JSON.stringify({filename:\'pdf-test.pdf\'}) //optional\n  }, {\n        "title": "Download",\n        "buttonDefault": "url",\n        //"analytics": "analytics",\n        "url": "http://www.africau.edu/images/default/sample.pdf",\n       // "postback": "post-back"\n      } ]\n};\n    arr.push(pdfcard);\n    resolve(arr);\n  });   \n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Card Type in Carousel"),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("img",{parentName:"strong",src:"https://lh5.googleusercontent.com/PYbE7pUVEKMZ7OFyXsPwJxuOIRmqtaAiig1F5TjUvog_ghmdcBV1UH6M5GzITpO3DkWlGvqDRrV6m7M-Hko46fyj8cEqchMIYvKrndC28Y3YXqcLFtHmiwcU-sdjZE-nRlQogyE9BHDq2FRvv8SPL-FirBx4n56g7orsKklMYvm0u9rX96oj3ACfWouEdHFQsu_yyQ",alt:null})),"  "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Display in chat")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("img",{parentName:"strong",src:"https://lh3.googleusercontent.com/HorDL6FIXM-Uo6Vi1NJdJgD9Fm8nmFPicCH0oXW8BmRjktEnd_q-IzxAUUzobnurki_FafBEFjkIUBv4TixpfG09ihoOrMOfhE7iTUC21TG7rWFKJIsb_th1R0jd4b9uJAibWbZtqFjcFPnleQv02VmoVOYXO-wFFGjctzVZUd3SGVH2uc_GuONM6IG7K6Wa5j8SCQ",alt:null}))))}b.isMDXComponent=!0},450:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),u=r,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);