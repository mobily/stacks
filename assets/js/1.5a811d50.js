(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{103:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(161);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(197);Object.defineProperty(t,"useAlternatePageUtils",{enumerable:!0,get:function(){return o.useAlternatePageUtils}});var s=n(198);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return s.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return s.DEFAULT_SEARCH_TAG}});var i=n(162);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return i.isDocsPluginEnabled}});var u=n(202);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return u.isSamePath}});var a=n(203);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return a.useTitleFormatter}});var c=n(204);Object.defineProperty(t,"usePluralForm",{enumerable:!0,get:function(){return c.usePluralForm}});var l=n(205);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return l.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return l.useDocsPreferredVersionByPluginId}});var f=n(163);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return f.DocsPreferredVersionContextProvider}})},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r);const s=/{\w+}/g,i="{}";function u(e,t){const n=[],r=e.replace(s,(e=>{const r=e.substr(1,e.length-2),s=null==t?void 0:t[r];if(void 0!==s){const e=o.a.isValidElement(s)?s:String(s);return n.push(e),i}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?r.split(i).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):r.split(i).reduce(((e,t,r)=>[...e,o.a.createElement(o.a.Fragment,{key:r},t,n[r])]),[])}function a({children:e,values:t}){return u(e,t)}var c=n(28);function l({id:e,message:t}){var n;return null!==(n=c[null!=e?e:t])&&void 0!==n?n:t}function f({message:e,id:t},n){var r;return u(null!==(r=l({message:e,id:t}))&&void 0!==r?r:e,n)}function d({children:e,id:t,values:n}){var r;const s=null!==(r=l({message:e,id:t}))&&void 0!==r?r:e;return o.a.createElement(a,{values:n},s)}},124:function(e,t,n){try{e.exports=n(199)}catch(r){const t={};e.exports={useAllDocsData:()=>t,useActivePluginAndVersion:()=>{}}}},126:function(e,t,n){"use strict";var r=n(0),o=n.n(r),s=n(10),i=n(144),u=n(8);const a=Object(r.createContext)({collectLink:()=>{}});var c=n(127),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:f,href:d,activeClassName:g,isActive:v,"data-noBrokenLinkCheck":m,autoAddBaseUrl:p=!0}=e,h=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:b}=Object(c.b)(),P=Object(r.useContext)(a),D=f||d,_=Object(i.a)(D),y=null==D?void 0:D.replace("pathname://",""),O=void 0!==y?(V=y,p&&(e=>e.startsWith("/"))(V)?b(V):V):void 0;var V;const A=Object(r.useRef)(!1),j=n?s.e:s.c,w=u.a.canUseIntersectionObserver;let E;Object(r.useEffect)((()=>(!w&&_&&window.docusaurus.prefetch(O),()=>{w&&E&&E.disconnect()})),[O,w,_]);const C=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,x=!O||!_||C;return O&&_&&!C&&!m&&P.collectLink(O),x?o.a.createElement("a",Object.assign({href:O},D&&!_&&{target:"_blank",rel:"noopener noreferrer"},h)):o.a.createElement(j,Object.assign({},h,{onMouseEnter:()=>{A.current||(window.docusaurus.preload(O),A.current=!0)},innerRef:e=>{var t,n;w&&e&&_&&(t=e,n=()=>{window.docusaurus.prefetch(O)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),n())}))})),E.observe(t))},to:O||""},n&&{isActive:v,activeClassName:g}))}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(16),o=n(144);function s(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:s=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=s();return n(e,t)}},144:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},161:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const o=r(n(16));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(124);t.isDocsPluginEnabled=!!r.useAllDocsData},163:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const u=s(n(0)),a=n(161),c=n(162),l=n(124),f=i(n(206));function d({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=f.default.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(f.default.clear(e,t),{preferredVersionName:null})}(e)})),r}function g(){const e=l.useAllDocsData(),t=a.useThemeConfig().docs.versionPersistence,n=u.useMemo((()=>Object.keys(e)),[e]),[r,o]=u.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));u.useEffect((()=>{o(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,u.useMemo((()=>({savePreferredVersion:function(e,n){f.default.save(e,t,n),o((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[o])]}const v=u.createContext(null);function m({children:e}){const t=g();return u.default.createElement(v.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return c.isDocsPluginEnabled?u.default.createElement(m,null,e):u.default.createElement(u.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=u.useContext(v);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n.n(r),s=n(27),i=n(127),u=n(114);function a({title:e,description:t,keywords:n,image:r}){const a=Object(u.useTitleFormatter)(e),c=Object(i.a)(r,{absolute:!0});return o.a.createElement(s.a,null,e&&o.a.createElement("title",null,a),e&&o.a.createElement("meta",{property:"og:title",content:a}),t&&o.a.createElement("meta",{name:"description",content:t}),t&&o.a.createElement("meta",{property:"og:description",content:t}),n&&o.a.createElement("meta",{name:"keywords",content:Array.isArray(n)?n.join(","):n}),r&&o.a.createElement("meta",{property:"og:image",content:c}),r&&o.a.createElement("meta",{name:"twitter:image",content:c}),r&&o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},197:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useAlternatePageUtils=void 0;const o=r(n(16)),s=n(23);t.useAlternatePageUtils=function(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:r}}=o.default(),{pathname:i}=s.useLocation(),u=r===n?e:e.replace(`/${r}/`,"/"),a=i.replace(e,"");return{createUrl:function({locale:e,fullyQualified:r}){return`${r?t:""}${function(e){return e===n?`${u}`:`${u}${e}/`}(e)}${a}`}}}},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(23),o=n(200),s=n(201);t.useAllDocsData=()=>o.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>o.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:o}=r.useLocation();return s.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:o}=r.useLocation();if(n){return{activePlugin:n,activeVersion:s.getActiveVersion(n.pluginData,o)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return s.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveVersion(n,o)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getActiveDocContext(n,o)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:o}=r.useLocation();return s.getDocVersionSuggestions(n,o)}},200:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return s})),n.d(t,"usePluginData",(function(){return i}));var r=n(16);function o(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function s(e){const t=o()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function i(e,t="default"){const n=s(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},201:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(23);t.getActivePlugin=function(e,t,n={}){const o=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),s=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!s&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return s},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),s=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:s,alternateDocVersions:s?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(s.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),s=o.activeVersion!==r;return{latestDocSuggestion:s?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:s?r:void 0}}},202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},203:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const o=r(n(16));t.useTitleFormatter=e=>{const{siteConfig:t={}}=o.default(),{title:n,titleDelimiter:r="|"}=t;return e&&e.trim().length?`${e.trim()} ${r} ${n}`:n}},204:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.usePluralForm=void 0;const o=n(0),s=r(n(16)),i=["zero","one","two","few","many","other"];function u(e){return i.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:u(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=s.default();return o.useMemo((()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),a;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:u(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale=${e}.\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n`),a}}),[e])}t.usePluralForm=function(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];{r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${r.length} plural forms: ${e} `);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}}(n,t,e)}}},205:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),o=n(163),s=n(124),i=n(207);t.useDocsPreferredVersion=function(e=i.DEFAULT_PLUGIN_ID){const t=s.useDocsData(e),[n,u]=o.useDocsPreferredVersionContext(),{preferredVersionName:a}=n[e];return{preferredVersion:a?t.versions.find((e=>e.name===a)):null,savePreferredVersionName:r.useCallback((t=>{u.savePreferredVersion(e,t)}),[u])}},t.useDocsPreferredVersionByPluginId=function(){const e=s.useAllDocsData(),[t]=o.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:o}=t[n];return o?r.versions.find((e=>e.name===o)):null}(n)})),r}},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,o={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},207:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"}}]);