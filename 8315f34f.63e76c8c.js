(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(9),a=(r(0),r(201)),i={id:"bigquery-ml-tensorflow",title:"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",author:"Naofumi Yamada",author_title:"Data Engineer",author_url:"https://github.com/na0fu3y",author_image_url:"https://avatars0.githubusercontent.com/u/17900178?s=400&v=4",tags:["bigquery","tensorflow"]},l={permalink:"/blog/bigquery-ml-tensorflow",source:"@site/blog/2020-02-16-bigquery-ml-tensorflow.md",description:"\u306f\u3058\u3081\u306b",date:"2020-02-16T00:00:00.000Z",tags:[{label:"bigquery",permalink:"/blog/tags/bigquery"},{label:"tensorflow",permalink:"/blog/tags/tensorflow"}],title:"BigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b",readingTime:4.035,truncated:!0,prevItem:{title:"BigQuery ML \u3067 Matrix Factorization",permalink:"/blog/bigquery-ml-matrix-factorization"},nextItem:{title:"Google \u5171\u6709\u30c9\u30e9\u30a4\u30d6\u8a2d\u8a08\u8ad6",permalink:"/blog/google-drive-design"}},c=[],u={rightToc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),Object(a.b)("p",null,"BigQuery ML \u306f ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery-ml/docs/making-predictions-with-imported-tensorflow-models"}),"\u30a4\u30f3\u30dd\u30fc\u30c8\u3057\u305f TensorFlow \u30e2\u30c7\u30eb\u3067\u306e\u4e88\u6e2c")," \u304c\u3067\u304d\u307e\u3059\u3002\nBigQuery ML \u3067\u4f7f\u3048\u308b TensorFlow \u30e2\u30c7\u30eb\u3092\u4f5c\u308b\u305f\u3081\u306b\u8272\u3005\u306a\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u5f80\u5fa9\u3057\u305f\u306e\u3067\u3001\u307e\u3068\u3081\u3066\u304a\u304d\u307e\u3059\u3002\nBigQuery ML \u3092\u4f7f\u3063\u3066 TensorFlow \u30e2\u30c7\u30eb\u3092\u7ba1\u7406\u3067\u304d\u308c\u3070\u3001\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u3068\u306e\u8ee2\u9001\u3092\u7701\u7565\u3057\u305f\u308a\u3001\n\u30e2\u30c7\u30eb\u3084\u5b9f\u884c\u74b0\u5883\u306e\u7ba1\u7406\u3092 BigQuery \u3068 Cloud Storage \u306b\u4efb\u305b\u305f\u308a\u3067\u304d\u307e\u3059\u3002"),Object(a.b)("p",null,"\u307e\u305f SavedModel \u5f62\u5f0f\u306f\u3001\u4e88\u6e2c\u306b\u9650\u3089\u305a\u6570\u5f0f\u3092\u5165\u308c\u305f\u308a\u3067\u304d\u308b\u306e\u3067\u3001brainfuck \u304c\u5b9f\u88c5\u3067\u304d\u308b\u304b\u904a\u3093\u3067\u307f\u307e\u3057\u305f\uff08\u6557\u5317\uff09\u3002"))}p.isMDXComponent=!0},201:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return g}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,g=s["".concat(i,".").concat(b)]||s[b]||f[b]||a;return r?o.a.createElement(g,l(l({ref:t},u),{},{components:r})):o.a.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);