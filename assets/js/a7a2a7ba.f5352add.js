"use strict";(self.webpackChunkstacks_docs=self.webpackChunkstacks_docs||[]).push([[4754],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=l.createContext({}),m=function(e){var n=l.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=m(e.components);return l.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(t),p=r,h=s["".concat(c,".").concat(p)]||s[p]||d[p]||o;return t?l.createElement(h,a(a({ref:n},u),{},{components:t})):l.createElement(h,a({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var m=2;m<o;m++)a[m]=t[m];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3455:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>c,contentTitle:()=>m,metadata:()=>u,toc:()=>d,default:()=>p});var l=t(7462),r=t(3366),o=(t(7294),t(3905)),a=t(4493),i=["components"],c={id:"columns",title:"Columns & Column"},m=void 0,u={unversionedId:"components/columns",id:"components/columns",title:"Columns & Column",description:"Columns renders children horizontally in equal-width columns by default, with consistent spacing between them.",source:"@site/api/components/columns.mdx",sourceDirName:"components",slug:"/components/columns",permalink:"/stacks/api/components/columns",tags:[],version:"current",frontMatter:{id:"columns",title:"Columns & Column"},sidebar:"sidebar",previous:{title:"Box",permalink:"/stacks/api/components/box"},next:{title:"FillView",permalink:"/stacks/api/components/fill-view"}},d=[{value:"Space",id:"space",children:[],level:3},{value:"Nested",id:"nested",children:[],level:3},{value:"Width",id:"width",children:[],level:3},{value:"Fluid Height",id:"fluid-height",children:[],level:3},{value:"AlignX",id:"alignx",children:[],level:3},{value:"AlignY",id:"aligny",children:[],level:3},{value:"markAsColumn",id:"markascolumn",children:[],level:3},{value:"Columns Props",id:"columns-props",children:[],level:3},{value:"Column Props",id:"column-props",children:[],level:3}],s={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Columns")," renders children horizontally in equal-width columns by default, with consistent spacing between them."),(0,o.kt)("h3",{id:"space"},"Space"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const App = () => {\n  return (\n    <Columns space={4}>\n      <Placeholder />\n      <Placeholder />\n      <Placeholder />\n    </Columns>\n  )\n}\n\nrender(<App />)\n")),(0,o.kt)("h3",{id:"nested"},"Nested"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const App = () => {\n  return (\n    <Columns space={12}>\n      <Columns space={4}>\n        <Placeholder />\n        <Placeholder />\n      </Columns>\n      <Placeholder />\n    </Columns>\n  )\n}\n\nrender(<App />)\n")),(0,o.kt)("h3",{id:"width"},"Width"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const App = () => {\n  return (\n    <Stack space={4}>\n      <Columns space={4}>\n        <Column width="1/2">\n          <Placeholder />\n        </Column>\n        <Column width="1/2">\n          <Placeholder />\n        </Column>\n      </Columns>\n\n      <Columns space={4}>\n        <Column width="1/3">\n          <Placeholder />\n        </Column>\n        <Column width="1/3">\n          <Placeholder />\n        </Column>\n        <Column width="1/3">\n          <Placeholder />\n        </Column>\n      </Columns>\n\n      <Columns space={4}>\n        <Column width="2/3">\n          <Placeholder />\n        </Column>\n        <Column width="1/3">\n          <Placeholder />\n        </Column>\n      </Columns>\n\n      <Columns space={4}>\n        <Column width="1/4">\n          <Placeholder />\n        </Column>\n        <Column width="1/4">\n          <Placeholder />\n        </Column>\n        <Column width="1/4">\n          <Placeholder />\n        </Column>\n        <Column width="1/4">\n          <Placeholder />\n        </Column>\n      </Columns>\n\n      <Columns space={4}>\n        <Column width="1/4">\n          <Placeholder />\n        </Column>\n        <Column width="1/2">\n          <Placeholder />\n        </Column>\n        <Column width="1/4">\n          <Placeholder />\n        </Column>\n      </Columns>\n\n      <Columns space={4}>\n        <Column width="1/4">\n          <Placeholder />\n        </Column>\n        <Column width="3/4">\n          <Placeholder />\n        </Column>\n      </Columns>\n\n      <Columns space={4}>\n        <Column width="1/5">\n          <Placeholder />\n        </Column>\n        <Column width="2/5">\n          <Placeholder />\n        </Column>\n        <Column width="2/5">\n          <Placeholder />\n        </Column>\n      </Columns>\n\n      <Columns space={4}>\n        <Column width="1/5">\n          <Placeholder />\n        </Column>\n        <Column width="3/5">\n          <Placeholder />\n        </Column>\n        <Column width="1/5">\n          <Placeholder />\n        </Column>\n      </Columns>\n\n      <Columns space={4}>\n        <Column width="1/5">\n          <Placeholder />\n        </Column>\n        <Column width="4/5">\n          <Placeholder />\n        </Column>\n      </Columns>\n    </Stack>\n  )\n}\n\nrender(<App />)\n')),(0,o.kt)("h3",{id:"fluid-height"},"Fluid Height"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const styles = StyleSheet.create({\n  fluidPlaceholder: {\n    backgroundColor: \'rgba(255, 0, 255, 0.05)\',\n    borderWidth: StyleSheet.hairlineWidth,\n    borderColor: \'rgba(255, 0, 255, 0.3)\',\n  },\n})\n\nconst FluidPlaceholder = () => {\n  return (\n    <Box flex="fluid" style={styles.fluidPlaceholder} />\n  )\n}\n\nconst App = () => {\n  return (\n    <Container height={440}>\n      <Columns space={4} alignX="center" height="fluid">\n        <Rows space={4}>\n          <Row height="content">\n            <Placeholder height={100} />\n          </Row>\n          <FluidPlaceholder />\n        </Rows>\n        <FluidPlaceholder />\n        <Rows space={4}>\n          <FluidPlaceholder />\n          <Row height="content">\n            <Placeholder height={100} />\n          </Row>\n        </Rows>\n      </Columns>\n    </Container>\n  )\n}\n\nrender(<App />)\n')),(0,o.kt)("h3",{id:"alignx"},"AlignX"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const App = () => {\n  return (\n    <Stack space={4}>\n      <Columns space={4} alignX="left">\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n      </Columns>\n\n      <Columns space={4} alignX="center">\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n      </Columns>\n\n      <Columns space={4} alignX="right">\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n      </Columns>\n\n      <Columns space={4} alignX="between">\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n      </Columns>\n\n      <Columns space={4} alignX="around">\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n      </Columns>\n\n      <Columns space={4} alignX="evenly">\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n        <Column width="content">\n          <Placeholder width={100} />\n        </Column>\n      </Columns>\n    </Stack>\n  )\n}\n\nrender(<App />)\n')),(0,o.kt)("h3",{id:"aligny"},"AlignY"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'const App = () => {\n  return (\n    <Stack space={4}>\n      <Columns space={4} alignY="top">\n        <Placeholder height={80} />\n        <Placeholder height={140} />\n        <Placeholder height={120} />\n        <Placeholder height={100} />\n      </Columns>\n\n      <Columns space={4} alignY="center">\n        <Placeholder height={100} />\n        <Placeholder height={120} />\n        <Placeholder height={140} />\n        <Placeholder height={80} />\n      </Columns>\n\n      <Columns space={4} alignY="bottom">\n        <Placeholder height={80} />\n        <Placeholder height={140} />\n        <Placeholder height={120} />\n        <Placeholder height={100} />\n      </Columns>\n    </Stack>\n  )\n}\n\nrender(<App />)\n')),(0,o.kt)("h3",{id:"markascolumn"},"markAsColumn"),(0,o.kt)("p",null,"Use this function to mark your custom component as ",(0,o.kt)("inlineCode",{parentName:"p"},"Column")," (required due to an internal implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"Stacks"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { markAsColumn } from '@mobily/stacks'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"const CustomColumn = props => {\n  const { children } = props\n  return (\n    <Column>\n      {children}\n    </Column>\n  )\n}\n\nmarkAsColumn(CustomColumn)\n\nconst App = () => {\n  return (\n    <Columns space={4}>\n      <CustomColumn>\n        <Placeholder />\n      </CustomColumn>\n      <CustomColumn>\n        <Placeholder />\n      </CustomColumn>\n      <CustomColumn>\n        <Placeholder />\n      </CustomColumn>\n    </Columns>\n  )\n}\n\nrender(<App />)\n")),(0,o.kt)("h3",{id:"columns-props"},"Columns Props"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"Columns")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Column")," components accept all ",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view"},(0,o.kt)("inlineCode",{parentName:"a"},"View"))," props."))),(0,o.kt)(a.xP,{data:[{name:"space",type:"responsiveProp<float>",required:!1},{name:"height",type:"responsiveProp<[#content | #fluid | #f12 | #f13 | #f23 | #f14 | #f34 | #f15 | #f25 | #f35 | #f45]>",required:!1},{name:"alignY",type:"responsiveProp<[#top | #center | #bottom | #stretch]>",required:!1},{name:"alignX",type:"responsiveProp<[#left | #center | #right | #between | #around | #evenly]>",required:!1},{name:"reverse",type:"bool",required:!1},{name:"collapseBelow",type:"string",required:!1}],mdxType:"Props"}),(0,o.kt)(a.bk,{mdxType:"BoxProps"}),(0,o.kt)("h3",{id:"column-props"},"Column Props"),(0,o.kt)(a.xP,{data:[{name:"width",type:"responsiveProp<[#content | #fluid | #f12 | #f13 | #f23 | #f14 | #f34 | #f15 | #f25 | #f35 | #f45]>",required:!1,defaultValue:"fluid"}],mdxType:"Props"}),(0,o.kt)(a.bk,{omit:["margin","marginX","marginY","marginTop","marginBottom","marginLeft","marginRight","marginStart","marginEnd"],mdxType:"BoxProps"}))}p.isMDXComponent=!0},4493:(e,n,t)=>{t.d(n,{bk:()=>y,xP:()=>P});var l,r,o,a,i,c=t(7294),m=(t(6396),t(8215),["title","titleId"]);function u(){return u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},u.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s=function(e){var n=e.title,t=e.titleId,s=d(e,m);return c.createElement("svg",u({width:250,height:250,viewBox:"0 0 250 250",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},s),n?c.createElement("title",{id:t},n):null,l||(l=c.createElement("g",{filter:"url(#a)"},c.createElement("path",{d:"M0 80.086C0 46.72 0 30.044 8.496 18.342a44.557 44.557 0 0 1 9.846-9.847C30.032 0 46.719 0 80.082 0h89.83c33.368 0 50.042 0 61.745 8.495a44.452 44.452 0 0 1 9.841 9.847c8.5 11.695 8.5 28.377 8.5 61.744v89.828c0 33.367 0 50.042-8.5 61.744a44.32 44.32 0 0 1-9.841 9.841C219.961 250 203.28 250 169.912 250h-89.83c-33.363 0-50.043 0-61.74-8.501a44.428 44.428 0 0 1-9.846-9.841C0 219.963 0 203.281 0 169.914V80.086Z",fill:"url(#b)"}))),r||(r=c.createElement("g",{filter:"url(#c)"},c.createElement("path",{d:"M169.41 121.016c16.393 0 29.683-13.29 29.683-29.683s-13.29-29.682-29.683-29.682-29.682 13.29-29.682 29.682c0 16.393 13.289 29.683 29.682 29.683Z",fill:"#fff"}))),o||(o=c.createElement("path",{d:"M67.416 89.688c0-9.423 0-14.136 1.841-17.741a16.802 16.802 0 0 1 7.354-7.364c3.6-1.831 8.313-1.831 17.74-1.831l21.503-2.092 2.061 2.092V172.15c0 7.841-.569 11.366-1.851 14.455a16.823 16.823 0 0 1-9.11 9.108c-3.091 1.282-6.445 1.68-14.284 1.68-7.841 0-11.764 0-14.854-1.282a16.816 16.816 0 0 1-9.11-9.108c-1.282-3.091-1.282-7.014-1.282-14.853l-.008-82.463Z",fill:"#000",fillOpacity:.2})),a||(a=c.createElement("g",{filter:"url(#d)"},c.createElement("path",{d:"M65.318 87.582c0-9.422 0-14.135 1.84-17.74a16.802 16.802 0 0 1 7.355-7.364c3.6-1.831 8.313-1.831 17.74-1.831h23.564v109.398c0 7.842 0 11.765-1.282 14.854a16.823 16.823 0 0 1-9.11 9.108c-3.091 1.282-7.014 1.282-14.853 1.282-7.842 0-11.765 0-14.854-1.282a16.817 16.817 0 0 1-9.11-9.108c-1.282-3.091-1.282-7.014-1.282-14.854l-.008-82.463Z",fill:"#fff"}))),i||(i=c.createElement("defs",null,c.createElement("filter",{id:"a",x:0,y:-1.674,width:249.998,height:251.674,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},c.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),c.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),c.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dy:-1.674}),c.createElement("feGaussianBlur",{stdDeviation:1.674}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"}),c.createElement("feBlend",{in2:"shape",result:"effect1_innerShadow"})),c.createElement("filter",{id:"c",x:136.38,y:56.63,width:64.832,height:66.506,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},c.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),c.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),c.createElement("feOffset",{dx:2.12,dy:2.12}),c.createElement("feColorMatrix",{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),c.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),c.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}),c.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dx:-3.347,dy:-5.021}),c.createElement("feGaussianBlur",{stdDeviation:4.24}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{values:"0 0 0 0 0.909804 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.25 0"}),c.createElement("feBlend",{in2:"shape",result:"effect2_innerShadow"})),c.createElement("filter",{id:"d",x:61.968,y:55.626,width:53.849,height:139.664,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},c.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),c.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),c.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dx:-3.35,dy:-5.021}),c.createElement("feGaussianBlur",{stdDeviation:4.24}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{values:"0 0 0 0 0.909804 0 0 0 0 0.309804 0 0 0 0 0.309804 0 0 0 0.25 0"}),c.createElement("feBlend",{in2:"shape",result:"effect1_innerShadow"})),c.createElement("linearGradient",{id:"b",x1:124.999,y1:0,x2:215.066,y2:241.846,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#E84F4F"}),c.createElement("stop",{offset:.409,stopColor:"#DB4646"}),c.createElement("stop",{offset:.999,stopColor:"#CB3939"})))))};var p,h,f,C=["title","titleId"];function g(){return g=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},g.apply(this,arguments)}function w(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const v=function(e){var n=e.title,t=e.titleId,l=w(e,C);return c.createElement("svg",g({fill:"none",height:512,viewBox:"0 0 512 512",width:512,xmlns:"http://www.w3.org/2000/svg","aria-labelledby":t},l),n?c.createElement("title",{id:t},n):null,p||(p=c.createElement("rect",{fill:"#3178c6",height:512,rx:50,width:512})),h||(h=c.createElement("rect",{fill:"#3178c6",height:512,rx:50,width:512})),f||(f=c.createElement("path",{clipRule:"evenodd",d:"M316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386S368.637 470 380.949 470c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65S470 415.559 470 403.044c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894a97.514 97.514 0 0 1 13.694 4.928c4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492S415.797 238 404.112 238c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zM232.78 284.082H297V243H118v41.082h63.906V467h50.874z",fill:"#fff",fillRule:"evenodd"})))};var P=function(e){return e.data.map((function(e){var n=e.name,t=e.type,l=e.required,r=e.defaultValue,o=e.rawTsType;return c.createElement(c.Fragment,{key:n},c.createElement("h4",null,c.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-",id:n.toLowerCase()}),c.createElement("code",null,n),c.createElement("a",{className:"hash-link",href:"#"+n.toLowerCase(),title:"Direct link to heading"})),c.createElement("ul",null,c.createElement("li",null,"type:",c.createElement("ul",null,c.createElement("li",null,c.createElement(v,{width:17,height:17,style:{marginRight:8,position:"relative",top:3}}),c.createElement("code",null,o||t.replace("responsiveProp","ResponsiveProp").replace("ReactNative.View.ref","React.RefObject<View>").replace("React.element","JSX.Element").replace("float","number").replace("int","number").replace("bool","boolean").replace(/#(\w+)/g,"'$1'").replace(/f(\d{1})(\d{1})/g,"$1/$2").replace("[","").replace("]",""))),c.createElement("li",null,c.createElement(s,{width:17,height:17,style:{marginRight:8,position:"relative",top:3}}),c.createElement("code",null,t)))),c.createElement("li",null,"required: ",c.createElement("code",null,l?"yes":"no")),r?c.createElement("li",null,"default: ",c.createElement("code",null,r)):null))}))},y=function(e){var n=e.omit,t=void 0===n?[]:n;return c.createElement(P,{data:["padding","paddingX","paddingY","paddingTop","paddingBottom","paddingLeft","paddingRight","paddingStart","paddingEnd","margin","marginX","marginY","marginTop","marginBottom","marginLeft","marginRight","marginStart","marginEnd","viewRef"].filter((function(e){return!t.includes(e)})).map((function(e){return"viewRef"===e?{name:e,type:"ReactNative.View.ref",required:!1}:{name:e,type:"responsiveProp<float>",required:!1}}))})}},8215:(e,n,t)=>{t(7294)},6396:(e,n,t)=>{t(7294),t(2389),t(9443);t(3810)}}]);