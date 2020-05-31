(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{180:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),o=(r(0),r(201)),i={id:"bigquery-cost-performance-tuning",title:"\u5b89\u3044\u901f\u3044\u65e8\u3044 BigQuery \u306e 19 \u306e\u6700\u9069\u5316\u6cd5",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery"]},c={permalink:"/queuery/blog/bigquery-cost-performance-tuning",source:"@site/blog/2020-01-22-bigquery-cost-performance-tuning.md",description:"\u3053\u306e\u8a18\u4e8b\u306f Qiita \u3068\u540c\u69d8\u306e\u5185\u5bb9\u3067\u3059\u3002",date:"2020-01-22T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/queuery/blog/tags/bigquery"}],title:"\u5b89\u3044\u901f\u3044\u65e8\u3044 BigQuery \u306e 19 \u306e\u6700\u9069\u5316\u6cd5",readingTime:4.9,truncated:!0,prevItem:{title:"BigQuery \u6570\u5024\u578b",permalink:"/queuery/blog/numerical-data-types-in-bigquery"},nextItem:{title:"Stackdriver Logging \u3092\u7528\u3044\u3066 BigQuery \u30c6\u30fc\u30d6\u30eb\u306e\u6700\u7d42\u53c2\u7167\u65e5\u3092\u6c42\u3081\u308b",permalink:"/queuery/blog/bigquery-last-reference-date"}},u=[],p={rightToc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u3053\u306e\u8a18\u4e8b\u306f ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://qiita.com/na0/items/2b58237cae08a217e3a7"}),"Qiita")," \u3068\u540c\u69d8\u306e\u5185\u5bb9\u3067\u3059\u3002"),Object(o.b)("h1",{id:"\u306f\u3058\u3081\u306b-google-bigquery-\u306f\u901f\u304f\u3066\u5b89\u3044"},"\u306f\u3058\u3081\u306b: Google BigQuery \u306f\u901f\u304f\u3066\u5b89\u3044"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery/"}),"Google BigQuery")," \u3092\u4f7f\u3046\u3068\u3001\u30c6\u30e9\u30d0\u30a4\u30c8\u7a0b\u5ea6\u306e\u30c7\u30fc\u30bf\u306b\u5bfe\u3057\u3066\u3082\u3001\u901f\u304f\u5b89\u304f\u6a5f\u68b0\u5b66\u7fd2\u306e\u524d\u51e6\u7406\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u30022019/12/06 \u73fe\u5728\u3001",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/redshift"}),"Redshift Spectrum")," \u3068\u540c\u3058\u304f\u3001\u30aa\u30f3\u30c7\u30de\u30f3\u30c9\u30af\u30a8\u30ea\u306f\u30af\u30a8\u30ea\u304c\u53c2\u7167\u3059\u308b\u30c7\u30fc\u30bf\u306e\u5bb9\u91cf\u306b\u5bfe\u3057\u3066 $5/TB \u304c\u8ab2\u91d1\u3055\u308c\u307e\u3059\u3002\u305d\u306e\u4e0a\u3001Redshift Spectrum \u3088\u308a\u65e9\u3044\u306e\u3067\u3059\u304b\u3089\u3001\u4f7f\u308f\u306a\u3044\u7406\u7531\u304c\u3042\u308a\u307e\u305b\u3093\u3002"))}l.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=l(r),g=n,m=b["".concat(i,".").concat(g)]||b[g]||f[g]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);