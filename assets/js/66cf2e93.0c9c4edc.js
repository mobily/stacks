(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{103:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}},104:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(107),i=r(103),o=r(56),c=r.n(o);const s=37,u=39;t.a=function(e){const{lazy:t,block:r,defaultValue:o,values:p,groupId:d,className:m}=e,{tabGroupChoices:f,setTabGroupChoices:g}=Object(l.a)(),[h,b]=Object(n.useState)(o),v=n.Children.toArray(e.children),y=[];if(null!=d){const e=f[d];null!=e&&e!==h&&p.some((t=>t.value===e))&&b(e)}const E=e=>{const t=e.target,r=y.indexOf(t),n=v[r].props.value;b(n),null!=d&&(g(d,n),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:a}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:i}=window;return t>=0&&a<=i&&n<=l&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},O=e=>{var t;let r;switch(e.keyCode){case u:{const t=y.indexOf(e.target)+1;r=y[t]||y[0];break}case s:{const t=y.indexOf(e.target)-1;r=y[t]||y[y.length-1];break}}null===(t=r)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":r},m)},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>y.push(e),onKeyDown:O,onFocus:E,onClick:E},t)))),t?Object(n.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},105:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function({children:e,hidden:t,className:r}){return a.a.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}},106:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?a.a.createElement(f,o(o({ref:t},s),{},{components:r})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},107:function(e,t,r){"use strict";var n=r(0),a=r(108);t.a=function(){const e=Object(n.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},108:function(e,t,r){"use strict";var n=r(0);const a=Object(n.createContext)(void 0);t.a=a},109:function(e,t,r){"use strict";r.d(t,"c",(function(){return E})),r.d(t,"b",(function(){return O})),r.d(t,"a",(function(){return w}));var n,a,l,i,o,c=r(0),s=r.n(c);r(104),r(105);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d,m,f,g=function(e){var t=e.title,r=e.titleId,s=p(e,["title","titleId"]);return c.createElement("svg",u({width:250,height:250,viewBox:"0 0 250 250",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},s),t?c.createElement("title",{id:r},t):null,n||(n=c.createElement("g",{filter:"url(#reslogo_svg__filter0_i)"},c.createElement("path",{d:"M0 80.086C0 46.72 0 30.044 8.496 18.342a44.557 44.557 0 019.846-9.847C30.032 0 46.719 0 80.082 0h89.83c33.368 0 50.042 0 61.745 8.495a44.452 44.452 0 019.841 9.847c8.5 11.695 8.5 28.377 8.5 61.744v89.828c0 33.367 0 50.042-8.5 61.744a44.32 44.32 0 01-9.841 9.841C219.961 250 203.28 250 169.912 250h-89.83c-33.363 0-50.043 0-61.74-8.501a44.428 44.428 0 01-9.846-9.841C0 219.963 0 203.281 0 169.914V80.086z",fill:"url(#reslogo_svg__paint0_linear)"}))),a||(a=c.createElement("g",{filter:"url(#reslogo_svg__filter1_di)"},c.createElement("path",{d:"M169.41 121.016c16.393 0 29.683-13.29 29.683-29.683s-13.29-29.682-29.683-29.682-29.682 13.29-29.682 29.682c0 16.393 13.289 29.683 29.682 29.683z",fill:"#fff"}))),l||(l=c.createElement("path",{d:"M67.416 89.688c0-9.423 0-14.136 1.841-17.741a16.802 16.802 0 017.354-7.364c3.6-1.831 8.313-1.831 17.74-1.831l21.503-2.092 2.061 2.092V172.15c0 7.841-.569 11.366-1.851 14.455a16.823 16.823 0 01-9.11 9.108c-3.091 1.282-6.445 1.68-14.284 1.68-7.841 0-11.764 0-14.854-1.282a16.816 16.816 0 01-9.11-9.108c-1.282-3.091-1.282-7.014-1.282-14.853l-.008-82.463z",fill:"#000",fillOpacity:.2})),i||(i=c.createElement("g",{filter:"url(#reslogo_svg__filter2_i)"},c.createElement("path",{d:"M65.318 87.582c0-9.422 0-14.135 1.84-17.74a16.802 16.802 0 017.355-7.364c3.6-1.831 8.313-1.831 17.74-1.831h23.564v109.398c0 7.842 0 11.765-1.282 14.854a16.823 16.823 0 01-9.11 9.108c-3.091 1.282-7.014 1.282-14.853 1.282-7.842 0-11.765 0-14.854-1.282a16.817 16.817 0 01-9.11-9.108c-1.282-3.091-1.282-7.014-1.282-14.854l-.008-82.463z",fill:"#fff"}))),o||(o=c.createElement("defs",null,c.createElement("filter",{id:"reslogo_svg__filter0_i",x:0,y:-1.674,width:249.998,height:251.674,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},c.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),c.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),c.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dy:-1.674}),c.createElement("feGaussianBlur",{stdDeviation:1.674}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}),c.createElement("feBlend",{in2:"shape",result:"effect1_innerShadow"})),c.createElement("filter",{id:"reslogo_svg__filter1_di",x:136.38,y:56.63,width:64.832,height:66.506,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},c.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),c.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),c.createElement("feOffset",{dx:2.12,dy:2.12}),c.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),c.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),c.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}),c.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dx:-3.347,dy:-5.021}),c.createElement("feGaussianBlur",{stdDeviation:4.24}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{values:"0 0 0 0 0.909804 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.25 0"}),c.createElement("feBlend",{in2:"shape",result:"effect2_innerShadow"})),c.createElement("filter",{id:"reslogo_svg__filter2_i",x:61.968,y:55.626,width:53.849,height:139.664,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},c.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),c.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),c.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dx:-3.35,dy:-5.021}),c.createElement("feGaussianBlur",{stdDeviation:4.24}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{values:"0 0 0 0 0.909804 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.25 0"}),c.createElement("feBlend",{in2:"shape",result:"effect1_innerShadow"})),c.createElement("linearGradient",{id:"reslogo_svg__paint0_linear",x1:124.999,y1:0,x2:215.066,y2:241.846,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#E84F4F"}),c.createElement("stop",{offset:.409,stopColor:"#DB4646"}),c.createElement("stop",{offset:.999,stopColor:"#CB3939"})))))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var v=function(e){var t=e.title,r=e.titleId,n=b(e,["title","titleId"]);return c.createElement("svg",h({fill:"none",height:512,viewBox:"0 0 512 512",width:512,xmlns:"http://www.w3.org/2000/svg","aria-labelledby":r},n),t?c.createElement("title",{id:r},t):null,d||(d=c.createElement("rect",{fill:"#3178c6",height:512,rx:50,width:512})),m||(m=c.createElement("rect",{fill:"#3178c6",height:512,rx:50,width:512})),f||(f=c.createElement("path",{clipRule:"evenodd",d:"M316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386S368.637 470 380.949 470c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65S470 415.559 470 403.044c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894a97.514 97.514 0 0113.694 4.928c4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492S415.797 238 404.112 238c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zM232.78 284.082H297V243H118v41.082h63.906V467h50.874z",fill:"#fff",fillRule:"evenodd"})))},y=function(e){var t="ts"===e.type,r=t?"TypeScript":"ReScript",n=t?g:v;return s.a.createElement("div",{style:{display:"flex",alignItems:"center"}},s.a.createElement(n,{width:17,height:17}),s.a.createElement("span",{style:{marginLeft:8,lineHeight:1,fontSize:"0.95rem",paddingTop:2}},r))},E={groupId:"lang-tabs",defaultValue:"typescript",values:[{label:s.a.createElement(y,{type:"ts"}),value:"typescript"},{label:s.a.createElement(y,{type:"res"}),value:"rescript"}]},O=function(e){return e.data.map((function(e){var t=e.name,r=e.type,n=e.required,a=e.defaultValue,l=e.rawTsType;return s.a.createElement(c.Fragment,{key:t},s.a.createElement("h3",null,s.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-",id:t.toLowerCase()}),s.a.createElement("code",null,t),s.a.createElement("a",{className:"hash-link",href:"#"+t.toLowerCase(),title:"Direct link to heading"},"#")),s.a.createElement("ul",null,s.a.createElement("li",null,"type:",s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(v,{width:17,height:17,style:{marginRight:8,position:"relative",top:3}}),s.a.createElement("code",null,l||r.replace("responsiveProp","ResponsiveProp").replace("float","number").replace("int","number").replace("bool","boolean").replace(/#(\w+)/g,"'$1'").replace(/f(\d{1})(\d{1})/g,"$1/$2").replace("[","").replace("]",""))),s.a.createElement("li",null,s.a.createElement(g,{width:17,height:17,style:{marginRight:8,position:"relative",top:3}}),s.a.createElement("code",null,r)))),s.a.createElement("li",null,"required: ",s.a.createElement("code",null,n?"yes":"no")),a?s.a.createElement("li",null,"default: ",s.a.createElement("code",null,a)):null))}))},w=function(e){var t=e.omit,r=void 0===t?[]:t;return s.a.createElement(O,{data:["padding","paddingX","paddingY","paddingTop","paddingBottom","paddingLeft","paddingRight","paddingStart","paddingEnd","margin","marginX","marginY","marginTop","marginBottom","marginLeft","marginRight","marginStart","marginEnd"].filter((function(e){return!r.includes(e)})).map((function(e){return{name:e,type:"responsiveProps<float>",required:!1}}))})}},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),l=(r(0),r(106)),i=r(104),o=r(105),c=r(109),s={id:"use-spacing",title:"useSpacing"},u={unversionedId:"hooks/use-spacing",id:"hooks/use-spacing",isDocsHomePage:!1,title:"useSpacing",description:"It takes a numeric value, that is multiplied by the spacing value defined in StacksProvider.",source:"@site/docs/hooks/use-spacing.mdx",slug:"/hooks/use-spacing",permalink:"/stacks/docs/hooks/use-spacing",version:"current",sidebar:"sidebar",previous:{title:"useResponsiveProp",permalink:"/stacks/docs/hooks/use-responsive-prop"},next:{title:"useSpacingHelpers",permalink:"/stacks/docs/hooks/use-spacing-helpers"}},p=[{value:"Example",id:"example",children:[]}],d={toc:p};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"It takes a numeric value, that is multiplied by the ",Object(l.b)("inlineCode",{parentName:"p"},"spacing")," value defined in ",Object(l.b)("inlineCode",{parentName:"p"},"StacksProvider"),"."),Object(l.b)(i.a,Object(n.a)({},c.c,{mdxType:"Tabs"}),Object(l.b)(o.a,{value:"typescript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"declare const useSpacing: (value: number | null | undefined) => number\n"))),Object(l.b)(o.a,{value:"rescript",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-res"},"let useSpacing: option<float> => float\n")))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function() {\n  const Card = props => {\n    const { marginBottom } = props\n    const margin = useSpacing(marginBottom)\n\n    return (\n      <View style={{ marginBottom: margin, backgroundColor: 'red' }}>\n        <Text>Debug</Text>\n      </View>\n    )\n  }\n\n  return (\n    <StacksProvider spacing={4}>\n      <Card marginBottom={2} />\n      <Card marginBottom={8} />\n      <Card />\n    </StacksProvider>\n  )\n}\n")))}m.isMDXComponent=!0}}]);