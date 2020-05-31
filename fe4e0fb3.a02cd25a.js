(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{196:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(9),a=(r(0),r(201)),i={id:"google-drive-design",title:"Google \u5171\u6709\u30c9\u30e9\u30a4\u30d6\u8a2d\u8a08\u8ad6",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","brainfuck"]},c={permalink:"/blog/google-drive-design",source:"@site/blog/2020-01-30-google-drive-design.md",description:"\u306f\u3058\u3081\u306b",date:"2020-01-30T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"},{label:"brainfuck",permalink:"/blog/tags/brainfuck"}],title:"Google \u5171\u6709\u30c9\u30e9\u30a4\u30d6\u8a2d\u8a08\u8ad6",readingTime:.635,truncated:!0,prevItem:{title:"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",permalink:"/blog/bigquery-ml-tensorflow"},nextItem:{title:"Stackdriver Logging \u3067\u3067\u304d\u308b\u3053\u3068",permalink:"/blog/gcp-logging"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(a.b)("p",null,"Google \u30c9\u30e9\u30a4\u30d6\u306e\u5171\u6709\u30c9\u30e9\u30a4\u30d6\u5229\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u304b\u3002\n\u3068\u3066\u3082\u4fbf\u5229\u306a\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u304c\u3001Windows Server \u306e\u30d5\u30a1\u30a4\u30eb\u30b5\u30fc\u30d3\u30b9\u306e\u3064\u3082\u308a\u3067\u8a2d\u8a08\u3057\u3066\u30cf\u30de\u3063\u305f\u3053\u3068\u304c\u3042\u308a\u307e\u3057\u305f\u3002\n\u30cf\u30de\u3089\u306a\u3044\u30dd\u30a4\u30f3\u30c8\u306f\u3001Google \u30c9\u30e9\u30a4\u30d6\u306e\u8a2d\u8a08\u7406\u5ff5\u306b\u5f93\u3046\u3053\u3068\u3067\u3059\u3002"))}p.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return s}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},g=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=p(r),b=n,s=g["".concat(i,".").concat(b)]||g[b]||f[b]||a;return r?o.a.createElement(s,c(c({ref:t},l),{},{components:r})):o.a.createElement(s,c({ref:t},l))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);