"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[453],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,h=c["".concat(i,".").concat(m)]||c[m]||u[m]||s;return t?a.createElement(h,r(r({ref:n},l),{},{components:t})):a.createElement(h,r({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=c;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var d=2;d<s;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8449:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return d},toc:function(){return l},default:function(){return c}});var a=t(3117),o=t(102),s=(t(7294),t(3905)),r=["components"],p={title:"Setup App Open Ad",sidebar_position:5},i=void 0,d={unversionedId:"usage/appopen",id:"usage/appopen",isDocsHomePage:!1,title:"Setup App Open Ad",description:"App Open Ad is slightly different from other Full Screen Ads.",source:"@site/docs/usage/appopen.mdx",sourceDirName:"usage",slug:"/usage/appopen",permalink:"/admob/docs/usage/appopen",editUrl:"https://github.com/react-native-admob/admob/edit/master/docs/docs/usage/appopen.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Setup App Open Ad",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Creating Full Screen Ad with Class API",permalink:"/admob/docs/usage/fullscreen-class"},next:{title:"Non Personalized Ads",permalink:"/admob/docs/usage/npa"}},l=[{value:"Creating App Open Ad",id:"creating-app-open-ad",children:[{value:"Hook API",id:"hook-api",children:[],level:3},{value:"Class API",id:"class-api",children:[],level:3}],level:2},{value:"Loading App Open Ad",id:"loading-app-open-ad",children:[],level:2},{value:"Showing App Open Ad",id:"showing-app-open-ad",children:[{value:"Cold starts and loading screens",id:"cold-starts-and-loading-screens",children:[],level:3}],level:2},{value:"Accessing Ad&#39;s status",id:"accessing-ads-status",children:[],level:2},{value:"Usage Example",id:"usage-example",children:[],level:2}],u={toc:l};function c(e){var n=e.components,t=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"App Open Ad is slightly different from other Full Screen Ads."),(0,s.kt)("h2",{id:"creating-app-open-ad"},"Creating App Open Ad"),(0,s.kt)("h3",{id:"hook-api"},"Hook API"),(0,s.kt)("p",null,"Simplest way to add App Open Ad to your app is wrapping your app components with ",(0,s.kt)("inlineCode",{parentName:"p"},"AppOpenAdProvider")," and using ",(0,s.kt)("inlineCode",{parentName:"p"},"useAppOpenAd")," hook."),(0,s.kt)("p",null,"When you wrap your app components with ",(0,s.kt)("inlineCode",{parentName:"p"},"AppOpenAdProvider")," it automatically creates ",(0,s.kt)("inlineCode",{parentName:"p"},"AppOpenAd")," instance and start to provide App Open Ad to your app."),(0,s.kt)("h3",{id:"class-api"},"Class API"),(0,s.kt)("p",null,"If you are not going to use ",(0,s.kt)("inlineCode",{parentName:"p"},"useAppOpenAd")," hook, you don't need to wrap your app with ",(0,s.kt)("inlineCode",{parentName:"p"},"AppOpenAdProvider"),". But, you need to create ad instance using ",(0,s.kt)("inlineCode",{parentName:"p"},"AppOpenAd.create")," method.\nWhile other Full Screen Ads can be created multiple times and each ads have their own instance, only one AppOpenAd instance can be exist in a app.\nIf you create App Open Ad using ",(0,s.kt)("inlineCode",{parentName:"p"},"AppOpenAd.createAd()")," static method more than once,\nprevious ad instance will be destroyed and newly created ad instance will replace it."),(0,s.kt)("p",null,"You don't need to keep reference to ",(0,s.kt)("inlineCode",{parentName:"p"},"AppOpenAd")," instance because it is managed to be singleton and you can access the ad via static methods."),(0,s.kt)("h2",{id:"loading-app-open-ad"},"Loading App Open Ad"),(0,s.kt)("p",null,"Library automatically loads ad when it is created or dismissed."),(0,s.kt)("p",null,"Also, ad is automatically loaded when app comes to foreground from background, but has no ad loaded."),(0,s.kt)("h2",{id:"showing-app-open-ad"},"Showing App Open Ad"),(0,s.kt)("p",null,"Ad is automatically shown when app comes to foreground and has loaded ad previously."),(0,s.kt)("h3",{id:"cold-starts-and-loading-screens"},"Cold starts and loading screens"),(0,s.kt)("p",null,'"Cold starts" occur when your app is launched but was not previously suspended in memory.'),(0,s.kt)("p",null,"An example of a cold start is when a user opens your app for the first time. With cold starts, you won't have a previously loaded app open ad that's ready to be shown right away. The delay between when you request an ad and receive an ad back can create a situation where users are able to briefly use your app before being surprised by an out of context ad. This should be avoided because it is a bad user experience."),(0,s.kt)("p",null,"The preferred way to use app open ads on cold starts is to use a loading screen to load your game or app assets, and to only show the ad from the loading screen. If your app has completed loading and has sent the user to the main content of your app, do not show the ad."),(0,s.kt)("h2",{id:"accessing-ads-status"},"Accessing Ad's status"),(0,s.kt)("p",null,"You can access to ad's status by using derived values of ",(0,s.kt)("inlineCode",{parentName:"p"},"useAppOpenAd")," hook."),(0,s.kt)("p",null,"If you are using Class API instead of using hook, add listeners to listen for ad's status changes such as ",(0,s.kt)("inlineCode",{parentName:"p"},"adDismissed")," event."),(0,s.kt)("h2",{id:"usage-example"},"Usage Example"),(0,s.kt)("p",null,"Example below uses external library ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/zoontek/react-native-bootsplash"},"react-native-bootsplash")," to implement splash screen.\nThis is not necessary, but we recommend you to use this library with App Open Ad because App Open Ad must be showed before the app content showed."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=App.tsx",title:"App.tsx"},"import { AppOpenAdProvider, TestIds } from '@react-native-admob/admob';\n\nexport default function App() {\n  const [splashDismissed, setSplashDismissed] = useState(false);\n\n  return (\n    <AppOpenAdProvider\n      unitId={TestIds.APP_OPEN}\n      options={{ showOnColdStart: true }}\n    >\n      {splashDismissed ? (\n        <MainScreen />\n      ) : (\n        <SplashScreen onSplashDismissed={() => setSplashDismissed(true)} />\n      )}\n    </AppOpenAdProvider>\n  );\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=SplashScreen.tsx",title:"SplashScreen.tsx"},"import RNBootSplash from 'react-native-bootsplash';\nimport { useAppOpenAd } from '@react-native-admob/admob';\n\nexport default function SplashScreen({ onSplashDismissed }) {\n  const [loaded, setLoaded] = useState(false);\n  const { adDismissed, adLoadError } = useAppOpenAd();\n\n  useEffect(() => {\n    const load = async () => {\n      // Dummy Long Running Task\n      await new Promise((resolve) => setTimeout(resolve, 3000));\n      setLoaded(true);\n    };\n    load();\n  }, []);\n\n  useEffect(() => {\n    async function hide() {\n      await RNBootSplash.hide({ fade: true });\n      onSplashDismissed();\n    }\n    if (loaded && (adDismissed || adLoadError)) {\n      hide();\n    }\n  }, [loaded, adDismissed, adLoadError, onSplashDismissed]);\n\n  return <View />;\n}\n")))}c.isMDXComponent=!0}}]);