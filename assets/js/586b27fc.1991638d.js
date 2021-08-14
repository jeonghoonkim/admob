"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[717],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2187:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"RequestOptions",title:"RequestOptions",sidebar_label:"RequestOptions"},p=void 0,d={unversionedId:"api/RequestOptions",id:"api/RequestOptions",isDocsHomePage:!1,title:"RequestOptions",description:"Request Options used to load the ad.",source:"@site/docs/api/RequestOptions.md",sourceDirName:"api",slug:"/api/RequestOptions",permalink:"/admob/docs/api/RequestOptions",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/api/RequestOptions.md",version:"current",frontMatter:{id:"RequestOptions",title:"RequestOptions",sidebar_label:"RequestOptions"},sidebar:"sideBar",previous:{title:"RewardedInterstitialAd",permalink:"/admob/docs/api/RewardedInterstitialAd"},next:{title:"initialize",permalink:"/admob/docs/api/initialize"}},s=[{value:"Properties",id:"properties",children:[{value:"<code>requestNonPersonalizedAdsOnly</code>",id:"requestnonpersonalizedadsonly",children:[]},{value:"<code>networkExtras</code>",id:"networkextras",children:[]},{value:"<code>keywords</code>",id:"keywords",children:[]},{value:"<code>contentUrl</code>",id:"contenturl",children:[]},{value:"<code>location</code>",id:"location",children:[]},{value:"<code>requestAgent</code>",id:"requestagent",children:[]}]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Request Options used to load the ad."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"requestnonpersonalizedadsonly"},(0,o.kt)("inlineCode",{parentName:"h3"},"requestNonPersonalizedAdsOnly")),(0,o.kt)("p",null,"Whether to load non-personalized ads only."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean")))),(0,o.kt)("h3",{id:"networkextras"},(0,o.kt)("inlineCode",{parentName:"h3"},"networkExtras")),(0,o.kt)("p",null,"Additional properties attatched to an ad request."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"{ ","[key: string]",": string }")))),(0,o.kt)("h3",{id:"keywords"},(0,o.kt)("inlineCode",{parentName:"h3"},"keywords")),(0,o.kt)("p",null,"An array of keywords to be sent when loading the ad."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"string[]")))),(0,o.kt)("h3",{id:"contenturl"},(0,o.kt)("inlineCode",{parentName:"h3"},"contentUrl")),(0,o.kt)("p",null,"Content URL for targeting purposes. Max length of 512."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"string")))),(0,o.kt)("h3",{id:"location"},(0,o.kt)("inlineCode",{parentName:"h3"},"location")),(0,o.kt)("p",null,"The latitude and longitude location of the user."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"[number, number]")))),(0,o.kt)("h3",{id:"requestagent"},(0,o.kt)("inlineCode",{parentName:"h3"},"requestAgent")),(0,o.kt)("p",null,"Content URL for targeting purposes. Max length of 512."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"string")))))}c.isMDXComponent=!0}}]);