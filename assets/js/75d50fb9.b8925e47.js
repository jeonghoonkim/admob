"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[965],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return k}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},d=Object.keys(t);for(r=0;r<d.length;r++)a=d[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(r=0;r<d.length;r++)a=d[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,d=t.originalType,o=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(a),k=n,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||d;return a?r.createElement(c,i(i({ref:e},p),{},{components:a})):r.createElement(c,i({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var d=a.length,i=new Array(d);i[0]=u;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var s=2;s<d;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9227:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=a(2122),n=a(9756),d=(a(7294),a(3905)),i=["components"],l={id:"useRewardedInterstitialAd",title:"useRewardedInterstitialAd",sidebar_label:"useRewardedInterstitialAd"},o=void 0,s={unversionedId:"api/useRewardedInterstitialAd",id:"api/useRewardedInterstitialAd",isDocsHomePage:!1,title:"useRewardedInterstitialAd",description:"Use this hook to use Rewarded Interstitial Ad with its various states.",source:"@site/docs/api/useRewardedInterstitialAd.md",sourceDirName:"api",slug:"/api/useRewardedInterstitialAd",permalink:"/admob/docs/api/useRewardedInterstitialAd",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/api/useRewardedInterstitialAd.md",version:"current",frontMatter:{id:"useRewardedInterstitialAd",title:"useRewardedInterstitialAd",sidebar_label:"useRewardedInterstitialAd"},sidebar:"sideBar",previous:{title:"useRewardedAd",permalink:"/admob/docs/api/useRewardedAd"},next:{title:"InterstitialAd",permalink:"/admob/docs/api/InterstitialAd"}},p=[{value:"Usage example",id:"usage-example",children:[]},{value:"Arguments",id:"arguments",children:[{value:"<code>unitId</code>",id:"unitid",children:[]},{value:"<code>options</code>",id:"options",children:[]}]},{value:"Returns",id:"returns",children:[]}],m={toc:p};function u(t){var e=t.components,a=(0,n.Z)(t,i);return(0,d.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Use this hook to use Rewarded Interstitial Ad with its various states."),(0,d.kt)("h2",{id:"usage-example"},"Usage example"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-js"},"import { useRewardedInterstitialAd } from '@react-native-admob/admob';\n\nconst hookOptions = {\n  requestOnDismissed: true,\n  requestOptions: {\n    requestNonPersonalizedAdsOnly: true,\n  },\n};\n\nexport default function App() {\n  const {\n    adLoadError,\n    adLoaded,\n    reward,\n    presentAd\n  } = useRewardedInterstitialAd(UNIT_ID_REWARDED, hookOptions);\n\n  useEffect(() => {\n    if (adLoadError) {\n      console.error(adLoadError);\n    }\n  }, [adLoadError]);\n\n  useEffect(() => {\n    if (adLoaded) {\n      presentAd();\n    }\n  }, [adLoaded]);\n\n  useEffect(() => {\n    if (reward) {\n      console.log(`Reward Earned: ${reward.type}`);\n    }\n  }, [reward]);\n\n  return (/* Your App code */)\n")),(0,d.kt)("h2",{id:"arguments"},"Arguments"),(0,d.kt)("h3",{id:"unitid"},(0,d.kt)("inlineCode",{parentName:"h3"},"unitId")),(0,d.kt)("p",null,"Your Rewarded Interstitial Ad's ",(0,d.kt)("a",{parentName:"p",href:"https://support.google.com/admob/answer/7356431"},"ad Unit ID")),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"string")))),(0,d.kt)("h3",{id:"options"},(0,d.kt)("inlineCode",{parentName:"h3"},"options")),(0,d.kt)("p",null,"Options for your hook. Available values are listed below:"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"object")))),(0,d.kt)("p",null,"Properties:"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"requestOnMounted"),(0,d.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"true")),(0,d.kt)("td",{parentName:"tr",align:"left"},"Whether your ad to request automatically on mounted.")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"presentOnLoaded"),(0,d.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"false")),(0,d.kt)("td",{parentName:"tr",align:"left"},"Whether your ad to present automatically on loaded.")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"requestOnDismissed"),(0,d.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("inlineCode",{parentName:"td"},"false")),(0,d.kt)("td",{parentName:"tr",align:"left"},"Whether your ad to request new ad automatically on dismissed.")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"requestOptions"),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"RequestOptions"},"RequestOptions")),(0,d.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Optional RequestOptions used to load the ad.")))),(0,d.kt)("h2",{id:"returns"},"Returns"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"object")))),(0,d.kt)("p",null,"Properties:"),(0,d.kt)("table",null,(0,d.kt)("thead",{parentName:"table"},(0,d.kt)("tr",{parentName:"thead"},(0,d.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,d.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.kt)("tbody",{parentName:"table"},(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"adLoaded"),(0,d.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Whether your ad is loaded and ready to present.")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"adPresented"),(0,d.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Whether your ad is presented to user.")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"adDismissed"),(0,d.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Whether your ad is dismissed.")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"adShowing"),(0,d.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Whether your ad is showing. The value is equal with ",(0,d.kt)("inlineCode",{parentName:"td"},"adPresented && !adDismissed"),".")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"adLoadError"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Error"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Error during ad load.")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"adPresentError"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Error"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Error during ad present.")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"reward"),(0,d.kt)("td",{parentName:"tr",align:"left"},(0,d.kt)("a",{parentName:"td",href:"#"},"Reward")),(0,d.kt)("td",{parentName:"tr",align:"left"},"Reward earned by user. The value is ",(0,d.kt)("inlineCode",{parentName:"td"},"undefined")," until user earns reward.")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"requestAd"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Request new ad. Can not call this function if the ad is loaded but not presented and dismissed.")),(0,d.kt)("tr",{parentName:"tbody"},(0,d.kt)("td",{parentName:"tr",align:"left"},"presentAd"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,d.kt)("td",{parentName:"tr",align:"left"},"Present loaded ad. Ad must be loaded prior to this call.")))),(0,d.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,d.kt)("div",{parentName:"div",className:"admonition-heading"},(0,d.kt)("h5",{parentName:"div"},(0,d.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,d.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,d.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,d.kt)("div",{parentName:"div",className:"admonition-content"},(0,d.kt)("p",{parentName:"div"},"Note that ",(0,d.kt)("inlineCode",{parentName:"p"},"adPresented")," value remains ",(0,d.kt)("inlineCode",{parentName:"p"},"true")," after the ad is dismissed. The value changes to ",(0,d.kt)("inlineCode",{parentName:"p"},"false")," when ad is initialized via ",(0,d.kt)("inlineCode",{parentName:"p"},"requestAd"),". To determine whether the ad is showing, use ",(0,d.kt)("inlineCode",{parentName:"p"},"adShowing")," value."))))}u.isMDXComponent=!0}}]);