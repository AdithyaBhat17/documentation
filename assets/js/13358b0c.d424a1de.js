"use strict";(self.webpackChunkbenthos=self.webpackChunkbenthos||[]).push([[562],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?o.createElement(m,i(i({ref:n},c),{},{components:t})):o.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78914:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],p={title:"Support banners on migrating from V1 to V2 widget",sidebar_label:"V2 migration guide"},s=void 0,l={unversionedId:"platform_concepts/channelConfiguration/support-banner-migration",id:"platform_concepts/channelConfiguration/support-banner-migration",title:"Support banners on migrating from V1 to V2 widget",description:"A callout banner allows you to add a banner to chatbot's conversation. Before starting a chat with the user, the callout banner is shown at the top of the chat window with a description of the chatbot\u2019s purpose. To know more, click here.",source:"@site/docs/platform_concepts/channelConfiguration/support-banner-migration.md",sourceDirName:"platform_concepts/channelConfiguration",slug:"/platform_concepts/channelConfiguration/support-banner-migration",permalink:"/docs/platform_concepts/channelConfiguration/support-banner-migration",draft:!1,tags:[],version:"current",frontMatter:{title:"Support banners on migrating from V1 to V2 widget",sidebar_label:"V2 migration guide"},sidebar:"platform_concepts",previous:{title:"Domain whitelisting for Chat widget",permalink:"/docs/platform_concepts/channelConfiguration/domain-whitelisting"},next:{title:"Progressive web app",permalink:"/docs/platform_concepts/channelConfiguration/pwa"}},c={},u=[],d={toc:u};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A callout banner allows you to add a banner to chatbot's conversation. Before starting a chat with the user, the callout banner is shown at the top of the chat window with a description of the chatbot\u2019s purpose. To know more, click ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/studio/overview#1-access-studio"},"here"),"."),(0,a.kt)("p",null,"Banners can used to alert the users about new products, services, special offers, and promotions."),(0,a.kt)("img",{src:"https://i.imgur.com/wZoy2Yz.png",alt:"drawing",width:"60%"}),(0,a.kt)("p",null,'Consider that you have built a bot on the V1 ("app.yellowmessenger.com" or "app.yellow.ai" platform) and want to move it to the V2 (cloud.yellow.ai platform). If the V1 bot consists of a banner and you want to move to V2, then you need to add a function to display the same banner in V2.'),(0,a.kt)("p",null,"While migrating from V1 to V2 use the following function code to copy the banner from V1 to V2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"return new Promise(async (resolve, reject) => {\n    try {\n        app.log(app.profile,\"in profile\");\n        if (app.profile && app.profile.payload && app.profile.payload.widgetVersion && app.profile.payload.widgetVersion==\"v2\"){\n            await app.sendEvent({\n                code: \"ui-event-update-promotion\",\n                data:[{\n                    title: app.renderMessage('indiatour', {}, ''),\n                    options: [\n                        {\n                            title: app.renderMessage('activate_now', {}, 'Activate Now'),\n                            text: `activate channel`\n                        }\n                    ]\n                \n            },\n                    {\n                        title: app.renderMessage('promotion_2', {}, ''),\n                        options: [\n                            {\n                                title: app.renderMessage('download_now', {}, 'Download Now'),\n                                url: `https://watcho.onelink.me/eyNf/4plou2wu`\n                            },\n                        ]\n                    },\n                    {\n                        title: app.renderMessage('promotion_3', {}, ''),\n                        options: [\n                            {\n                                title: app.renderMessage('subscribe', {}, 'Subscribe'),\n                                text: 'Subscribe'\n                            }\n                        ]\n                    },\n            ]\n        })\n        }\n        else{\n        await app.sendEvent({\n            code: \"ui-event-update-promotion\",\n            data: {\n                quickReplies: [\n                    {\n                        title: app.renderMessage('indiatour', {}, ''),\n                        options: [\n                                                        {\n                               title: app.renderMessage('activate_now', {}, 'Activate Now'),\n                                text: `activate channel`\n                            },\n                        ]\n                    },\n                    {\n                        title: app.renderMessage('promotion_2', {}, ''),\n                        options: [\n                            {\n                                title: app.renderMessage('download_now', {}, 'Download Now'),\n                                url: `https://watcho.onelink.me/eyNf/4plou2wu`\n                            },\n                        ]\n                    },\n                    {\n                        title: app.renderMessage('promotion_3', {}, ''),\n                        options: [\n                            {\n                                title: app.renderMessage('subscribe', {}, 'Subscribe'),\n                                text: 'Subscribe'\n                            }\n                        ]\n                    },\n                ],\n                \"autoPlay\": true,\n                \"autoPlaySpeed\": \"4000\",\n                hide: true,\n                showPromotionMessage: 'Hi! I am Dia, your <strong>d</strong>2h <strong>I</strong>ntelligent <strong>A</strong>ssistant.',\n                displayShowPromotionBar: true\n            }\n        });\n        }\n        return resolve();\n    } catch (e) {\n        app.log(e, 'error in showPromotion');\n        return resolve();\n    }\n\n});\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/VyvR6ZD.png",alt:null})))}f.isMDXComponent=!0}}]);