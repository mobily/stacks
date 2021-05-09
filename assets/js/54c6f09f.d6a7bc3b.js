(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{107:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),b=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(t),d=a,m=s["".concat(c,".").concat(d)]||s[d]||u[d]||o;return t?r.a.createElement(m,i(i({ref:n},l),{},{components:t})):r.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),o=(t(0),t(107)),c={id:"react-native-web",title:"React Native Web"},i={unversionedId:"react-native-web",id:"react-native-web",isDocsHomePage:!1,title:"React Native Web",description:"Since Stacks components use window dimensions, SSR support is limited. If you use the responsive prop format, you probably may want to remove SSR support, otherwise, you can encounter unpredictable behavior.",source:"@site/docs/react-native-web.md",slug:"/react-native-web",permalink:"/stacks/docs/react-native-web",version:"current",sidebar:"sidebar",previous:{title:"Installation",permalink:"/stacks/docs/installation"},next:{title:"Configuration",permalink:"/stacks/docs/configuration"}},p=[{value:"Expo (Next.js adapter)",id:"expo-nextjs-adapter",children:[]},{value:"Next.js",id:"nextjs",children:[]},{value:"Create React App",id:"create-react-app",children:[]},{value:"Webpack",id:"webpack",children:[]}],l={toc:p};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Since ",Object(o.b)("inlineCode",{parentName:"p"},"Stacks")," components use ",Object(o.b)("inlineCode",{parentName:"p"},"window")," dimensions, SSR support is limited. If you use the ",Object(o.b)("inlineCode",{parentName:"p"},"responsive prop")," format, you probably may want to remove SSR support, otherwise, you can encounter unpredictable behavior."),Object(o.b)("p",null,"Don't forget to add ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-web")," to your Babel config. Also, add ",Object(o.b)("inlineCode",{parentName:"p"},"{ commonjs: true }")," to the RNW Babel plugin config, if either RNW styles cause a bug, or SSR support is enabled."),Object(o.b)("h2",{id:"expo-nextjs-adapter"},"Expo (Next.js adapter)"),Object(o.b)("p",null,"Install ",Object(o.b)("inlineCode",{parentName:"p"},"next-compose-plugins"),", ",Object(o.b)("inlineCode",{parentName:"p"},"next-transpile-modules")," and ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-react-native-web"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add next-transpile-modules next-compose-plugins babel-plugin-react-native-web --dev\n")),Object(o.b)("p",null,"Update ",Object(o.b)("inlineCode",{parentName:"p"},"next.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { withExpo } = require('@expo/next-adapter')\nconst withPlugins = require('next-compose-plugins')\nconst withTM = require('next-transpile-modules')([\n  '@mobily/stacks',\n])\n\nmodule.exports = withPlugins([withTM, [withExpo, { projectRoot: __dirname }]], {\n  /* next.config.js code */\n})\n")),Object(o.b)("p",null,"Update ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  presets: ['@expo/next-adapter/babel'],\n  plugins: [\n    ['react-native-web' /*, { commonjs: true } */],\n  ],\n}\n")),Object(o.b)("h2",{id:"nextjs"},"Next.js"),Object(o.b)("p",null,"Install ",Object(o.b)("inlineCode",{parentName:"p"},"next-transpile-modules")," and ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-react-native-web"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add next-transpile-modules babel-plugin-react-native-web --dev\n")),Object(o.b)("p",null,"Update ",Object(o.b)("inlineCode",{parentName:"p"},"next.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const withTM = require('next-transpile-modules')([\n  'react-native',\n  '@mobily/stacks',\n])\n\nmodule.exports = withTM({\n  webpack: config => {\n    const { alias = {}, extensions } = config.resolve\n\n    config.resolve.alias = {\n      ...alias,\n      'react-native$': 'react-native-web',\n    }\n\n    config.resolve.extensions = extensions.concat([\n      '.web.js',\n      '.web.ts',\n      '.web.tsx',\n    ])\n\n    return config\n  },\n})\n")),Object(o.b)("p",null,"Update ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  presets: ['next/babel'],\n  plugins: [\n    ['react-native-web' /*, { commonjs: true } */],\n  ],\n}\n")),Object(o.b)("h2",{id:"create-react-app"},"Create React App"),Object(o.b)("p",null,"Install ",Object(o.b)("inlineCode",{parentName:"p"},"customize-cra"),", ",Object(o.b)("inlineCode",{parentName:"p"},"react-app-rewired")," and ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-react-native-web"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"yarn add customize-cra react-app-rewired babel-plugin-react-native-web --dev\n")),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"config-overrides.js")," at the same level as ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { override, addBabelPlugin, babelInclude } = require('customize-cra')\nconst path = require('path')\n\nmodule.exports = override(\n  addBabelPlugin(['react-native-web' /*, { commonjs: true } */]),\n  babelInclude([\n    path.resolve(__dirname, 'src'),\n    path.resolve(__dirname, 'node_modules', '@mobily', 'stacks')\n  ]),\n)\n")),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"react-app-rewired")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"react-scripts")," in your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," commands."),Object(o.b)("h2",{id:"webpack"},"Webpack"),Object(o.b)("p",null,"Add the following to the ",Object(o.b)("inlineCode",{parentName:"p"},"babel-loader")," configuration:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  test: /\\.m?[t|j]sx?$/,\n  exclude: {\n    and: [\n      /node_modules/,\n      {\n        not: [/@mobily\\/stacks/],\n      },\n    ],\n  },\n  use: {\n    loader: 'babel-loader',\n    /* other options */\n  },\n}\n")),Object(o.b)("p",null,"Update ",Object(o.b)("inlineCode",{parentName:"p"},"babel.config.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  presets: [/* presets */],\n  plugins: [\n    ['react-native-web' /*, { commonjs: true } */],\n    /* other plugins */\n  ],\n}\n")))}b.isMDXComponent=!0}}]);