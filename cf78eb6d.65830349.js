(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return O})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return N}));var a=n(2),b=n(9),c=(n(0),n(198)),r={title:"\u30c7\u30fc\u30bf\u54c1\u8cea\u306e\u30c1\u30a7\u30c3\u30af\u65b9\u91dd"},O={id:"bigquery-statistical-data-validation",isDocsHomePage:!1,title:"\u30c7\u30fc\u30bf\u54c1\u8cea\u306e\u30c1\u30a7\u30c3\u30af\u65b9\u91dd",description:"\u76ee\u7684",source:"@site/docs/bigquery-statistical-data-validation.md",permalink:"/docs/bigquery-statistical-data-validation",editUrl:"https://github.com/na0fu3y/queuery/edit/master/docs/bigquery-statistical-data-validation.md",lastUpdatedAt:1594085828,sidebar:"someSidebar",previous:{title:"BigQuery \u30b0\u30eb\u30fc\u30d7\u8a2d\u8a08\u4f8b",permalink:"/docs/bigquery-access-controls-groups"},next:{title:"\u5b89\u3044\u901f\u3044\u65e8\u3044 19 \u306e\u6700\u9069\u5316\u6cd5",permalink:"/docs/bigquery-cost-performance-tuning"}},l=[{value:"\u76ee\u7684",id:"\u76ee\u7684",children:[]},{value:"\u30c7\u30fc\u30bf\u54c1\u8cea 3 \u3064",id:"\u30c7\u30fc\u30bf\u54c1\u8cea-3-\u3064",children:[{value:"\u89e3\u91c8\u4e0d\u80fd",id:"\u89e3\u91c8\u4e0d\u80fd",children:[]},{value:"\u9811\u5f35\u308c\u3070\u4f7f\u3048\u308b\u6c5a\u3055",id:"\u9811\u5f35\u308c\u3070\u4f7f\u3048\u308b\u6c5a\u3055",children:[]},{value:"\u304d\u308c\u3044",id:"\u304d\u308c\u3044",children:[]}]},{value:"\u89b3\u70b9\u30ea\u30b9\u30c8",id:"\u89b3\u70b9\u30ea\u30b9\u30c8",children:[{value:"1\u56de\u76ee\u4ee5\u964d-\u89b3\u70b9\u30ea\u30b9\u30c8",id:"1\u56de\u76ee\u4ee5\u964d-\u89b3\u70b9\u30ea\u30b9\u30c8",children:[]},{value:"2\u56de\u76ee\u4ee5\u964d-\u89b3\u70b9\u30ea\u30b9\u30c8",id:"2\u56de\u76ee\u4ee5\u964d-\u89b3\u70b9\u30ea\u30b9\u30c8",children:[]},{value:"\u30c7\u30fc\u30bf\u30af\u30ec\u30f3\u30b8\u30f3\u30b0\u54c1\u8cea\u306e\u89b3\u70b9",id:"\u30c7\u30fc\u30bf\u30af\u30ec\u30f3\u30b8\u30f3\u30b0\u54c1\u8cea\u306e\u89b3\u70b9",children:[]},{value:"\u89b3\u70b9\u30c1\u30a7\u30c3\u30af SQL",id:"\u89b3\u70b9\u30c1\u30a7\u30c3\u30af-sql",children:[]},{value:"UNIQUE",id:"unique",children:[]},{value:"PRIMARY KEY",id:"primary-key-1",children:[]},{value:"FOREIGN KEY",id:"foreign-key-1",children:[]}]},{value:"\u307e\u3068\u3081",id:"\u307e\u3068\u3081",children:[]}],i={rightToc:l};function N(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u76ee\u7684"},"\u76ee\u7684"),Object(c.b)("p",null,"\u6a5f\u68b0\u5b66\u7fd2\u3067\u30c7\u30fc\u30bf\u3092\u5229\u7528\u3059\u308b\u969b\u3001\u5341\u5206\u306b\u304d\u308c\u3044\u306a\u30c7\u30fc\u30bf\u3092\u5165\u529b\u3057\u305f\u65b9\u304c\u5927\u62b5\u306e\u30b1\u30fc\u30b9\u3067\u6709\u671b\u3067\u3059\u3002\n\u6c5a\u3044\u30c7\u30fc\u30bf\u3082\u4f7f\u308f\u306a\u3044\u3088\u308a\u306f\u30de\u30b7\u3067\u3042\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u305d\u306e\u3088\u3046\u306a\u30c7\u30fc\u30bf\u306f\u7d99\u7d9a\u7684\u306b\u540c\u7a0b\u5ea6\u306e\u54c1\u8cea\u3092\u6301\u3063\u3066\u3044\u308b\u304b\u691c\u8a3c\u304c\u56f0\u96e3\u306a\u3053\u3068\u3092\u8a8d\u8b58\u3057\u3066\u5229\u7528\u3059\u3079\u304d\u3067\u3057\u3087\u3046\u3002\n\u3057\u304b\u3057\u3001\u5341\u5206\u306b\u304d\u308c\u3044\u306a\u30c7\u30fc\u30bf\u304b\u3069\u3046\u304b\u3092\u4fdd\u8a3c\u3059\u308b\u89b3\u70b9\u306f\u5c11\u306a\u3044\u3067\u3059\u3002"),Object(c.b)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001\u5b9f\u969b\u7684\u306a\u3001\u30c7\u30fc\u30bf\u54c1\u8cea\u30c1\u30a7\u30c3\u30af\u306e\u65b9\u6cd5\u8ad6\u3092\u307e\u3068\u3081\u307e\u3057\u305f\u3002"),Object(c.b)("h2",{id:"\u30c7\u30fc\u30bf\u54c1\u8cea-3-\u3064"},"\u30c7\u30fc\u30bf\u54c1\u8cea 3 \u3064"),Object(c.b)("p",null,"\u3053\u3053\u3067\u306f\u3001\u611f\u899a\u5024\u306b\u3088\u308a 3 \u6bb5\u968e\u306e\u30c7\u30fc\u30bf\u54c1\u8cea\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u54c1\u8cea"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u6a5f\u68b0\u5b66\u7fd2 PoC \u306b\u4f7f\u3048\u308b\u304b"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u6a5f\u68b0\u5b66\u7fd2\u30d7\u30ed\u30c0\u30af\u30c8\u306b\u4f7f\u3048\u308b\u304b"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u89e3\u91c8\u4e0d\u80fd"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"x"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"x")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u9811\u5f35\u308c\u3070\u4f7f\u3048\u308b\u6c5a\u3055"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"o"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"x")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u304d\u308c\u3044"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"o"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"o")))),Object(c.b)("p",null,"\u6a5f\u68b0\u5b66\u7fd2 PoC \u3067\u4f7f\u3048\u308b\u30c7\u30fc\u30bf\u304b\u3069\u3046\u304b\u3092\u691c\u8a3c\u3057\u305f\u3089\u3001\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u306b\u5411\u3051\u3066\u30c7\u30fc\u30bf\u53ce\u96c6\u304b\u3089\u8a2d\u8a08\u3059\u308b\u65b9\u304c\u826f\u3044\u5834\u5408\u3082\u591a\u3044\u3067\u3059\u3002\n\u30c7\u30fc\u30bf\u54c1\u8cea\u306e\u5b89\u5b9a\u306f\u3001\u610f\u601d\u6c7a\u5b9a\u306e\u5b89\u5b9a\u3092\u3082\u305f\u3089\u3057\u307e\u3059\u3002"),Object(c.b)("h3",{id:"\u89e3\u91c8\u4e0d\u80fd"},"\u89e3\u91c8\u4e0d\u80fd"),Object(c.b)("p",null,"\u5b9f\u4e16\u754c\u306e\u4f55\u3092\u8868\u3057\u3066\u3044\u308b\u306e\u304b\u4e0d\u660e\u306a\u30c7\u30fc\u30bf\u3002\n\u5bc4\u4e0e\u7387\u304c\u51fa\u3066\u3044\u3066\u3082\u610f\u601d\u6c7a\u5b9a\u306b\u4f7f\u3048\u306a\u3044\u305f\u3081\u3001\u30b4\u30df\u306b\u306a\u308b\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002"),Object(c.b)("h3",{id:"\u9811\u5f35\u308c\u3070\u4f7f\u3048\u308b\u6c5a\u3055"},"\u9811\u5f35\u308c\u3070\u4f7f\u3048\u308b\u6c5a\u3055"),Object(c.b)("p",null,"\u76f4\u63a5\u53d6\u308a\u8fbc\u3081\u308b\u5f62\u3067\u306f\u306a\u3044\u3051\u308c\u3069\u3001\u4eba\u304c\u9811\u5f35\u3063\u3066\u30af\u30ec\u30f3\u30b8\u30f3\u30b0\u3001\u30a2\u30ce\u30c6\u30fc\u30b7\u30e7\u30f3\u304c\u53ef\u80fd\u306a\u30c7\u30fc\u30bf\u3002\n\u304a\u5ba2\u3055\u3093\u304b\u3089\u666e\u901a\u306b\u3082\u3089\u3046\u30c7\u30fc\u30bf\u306f\u5927\u62b5\u3053\u308c\u3067\u3059\u3002\n\u76ee\u7684\u5909\u6570\u3068\u306e\u95a2\u4fc2\u3092\u4eee\u8aac\u7acb\u3066\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u304b\u306b\u3088\u3063\u3066\u9811\u5f35\u308b\u5ea6\u5408\u3044\u304c\u5909\u308f\u308a\u307e\u3059\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u30d5\u30ea\u30fc\u30b3\u30e1\u30f3\u30c8"),Object(c.b)("li",{parentName:"ul"},"\u5225\u306a\u5b9f\u614b\u304c\u540c\u3058\u5024\u3068\u3057\u3066\u6271\u308f\u308c\u308b\u5217\uff08\u540c\u3058 S \u30b5\u30a4\u30ba\u3067\u3082\u3001\u670d\u3068\u9774\u3001\u30e1\u30fc\u30ab\u30fc\u306a\u3069\u4ed6\u306e\u5217\u306b\u4f9d\u5b58\u3059\u308b\uff09"),Object(c.b)("li",{parentName:"ul"},'\u540c\u3058\u5b9f\u614b\u304c\u5225\u306a\u5024\u3068\u3057\u3066\u6271\u308f\u308c\u308b\u5217\uff08"S", "\uff33" \u304c\u6df7\u5728\u3059\u308b\uff09')),Object(c.b)("h3",{id:"\u304d\u308c\u3044"},"\u304d\u308c\u3044"),Object(c.b)("p",null,"\u76f4\u63a5\u53d6\u308a\u8fbc\u3081\u308b\u5f62\u3067\u3042\u308a\u3001\u307b\u3068\u3093\u3069\u30af\u30ec\u30f3\u30b8\u30f3\u30b0\u3092\u5fc5\u8981\u3068\u3057\u306a\u3044\u30c7\u30fc\u30bf\u3002\n\u6cd5\u5f8b\u304c\u7d61\u3080\u4f1d\u7968\u306a\u3069\u306f\u304d\u308c\u3044\u306a\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"ER \u56f3\u304c\u5b58\u5728\u3059\u308b"),Object(c.b)("li",{parentName:"ul"},"RDB \u306e\u5404\u7a2e\u5236\u7d04\u304c\u5b88\u3089\u308c\u3066\u3044\u308b"),Object(c.b)("li",{parentName:"ul"},"\u540c\u3058\u5b9f\u614b\u304c\u540c\u3058\u5024\u3068\u3057\u3066\u6271\u308f\u308c\u3001\u5225\u306a\u5b9f\u614b\u304c\u5225\u306a\u5024\u3068\u3057\u3066\u6271\u308f\u308c\u3066\u3044\u308b")),Object(c.b)("h2",{id:"\u89b3\u70b9\u30ea\u30b9\u30c8"},"\u89b3\u70b9\u30ea\u30b9\u30c8"),Object(c.b)("p",null,"\u89e3\u91c8\u4e0d\u80fd\u306a\u30c7\u30fc\u30bf\u3092\u4f7f\u3048\u308b\u3088\u3046\u306b\u306f\u3067\u304d\u306a\u3044\u3067\u3059\u304c\u3001\u9811\u5f35\u308c\u3070\u4f7f\u3048\u308b\u6c5a\u3055\u306e\u30c7\u30fc\u30bf\u306e\u54c1\u8cea\u304c\u5b89\u5b9a\u3057\u3066\u3044\u308b\u304b\u3092\u78ba\u304b\u3081\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u3059\u3002\n\u3053\u3053\u3067\u306f\u3001\u30c7\u30fc\u30bf\u306e\u54c1\u8cea\u304c\u5b89\u5b9a\u3057\u3066\u3044\u308b\u304b\u30c1\u30a7\u30c3\u30af\u3059\u308b\u306e\u306b\u5229\u7528\u3057\u3066\u3044\u308b\u89b3\u70b9\u3092\u307e\u3068\u3081\u307e\u3059\u3002\nTensorFlow Data Validation \u3067\u3082\u7b97\u51fa\u3057\u3066\u3044\u308b\u89b3\u70b9\u304c\u591a\u3044\u3067\u3059\u304c\u3001BigQuery \u4e0a\u306e\u30c7\u30fc\u30bf\u3092\u7d20\u65e9\u304f\u30c1\u30a7\u30c3\u30af\u3059\u308b\u305f\u3081\u306e StandardSQL \u3092\u4f75\u305b\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002"),Object(c.b)("h3",{id:"1\u56de\u76ee\u4ee5\u964d-\u89b3\u70b9\u30ea\u30b9\u30c8"},"1\u56de\u76ee\u4ee5\u964d-\u89b3\u70b9\u30ea\u30b9\u30c8"),Object(c.b)("h4",{id:"check"},"CHECK"),Object(c.b)("h5",{id:"\u5408\u610f\u3055\u308c\u305f\u5024\u57df\uff08\u5883\u754c\u5024\u306b\u6ce8\u610f\uff09"},"\u5408\u610f\u3055\u308c\u305f\u5024\u57df\uff08\u5883\u754c\u5024\u306b\u6ce8\u610f\uff09"),Object(c.b)("p",null,"\u30c7\u30fc\u30bf\u5206\u6790\u3059\u308b\u4eba\u3068\u3001\u30c7\u30fc\u30bf\u53ce\u96c6\u3059\u308b\u4eba\u304c\u9055\u3046\u5834\u5408\u3001\u30c7\u30fc\u30bf\u306e\u8a8d\u8b58\u306b\u30ae\u30e3\u30c3\u30d7\u304c\u3042\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002\n\u5024\u57df\u3092\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'SELECT\n  IFNULL(LOGICAL_AND(\'1900-01-01\' < birth_date),\n    TRUE)\nFROM\n  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date\n')),Object(c.b)("h5",{id:"\u8ad6\u7406\u7684\u306b\u7d0d\u5f97\u3067\u304d\u308b\u5024\u57df"},"\u8ad6\u7406\u7684\u306b\u7d0d\u5f97\u3067\u304d\u308b\u5024\u57df"),Object(c.b)("p",null,"\u8ad6\u7406\u7684\u306b\u3042\u308a\u5f97\u306a\u3044\u6570\u5024\u306f\u3001\u5c11\u6570\u3067\u3042\u308c\u3070\u7cbe\u5ea6\u3078\u306e\u5f71\u97ff\u306f\u5c11\u306a\u3044\u3067\u3057\u3087\u3046\u304c\u3001\u30af\u30ec\u30f3\u30b8\u30f3\u30b0\u3067\u304d\u308b\u65b9\u304c\u597d\u307e\u3057\u3044\u3067\u3057\u3087\u3046\u3002\n\u5217\u306e\u5229\u7528\u7528\u9014\u304b\u3089\u8aac\u660e\u53ef\u80fd\u306a\u5730\u57df\u3067\u3042\u308b\u304b\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\uff08\u305d\u3046\u3067\u306a\u3051\u308c\u3070\u610f\u601d\u6c7a\u5b9a\u306b\u4f7f\u3048\u306a\u3044\uff09\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  IFNULL(LOGICAL_AND(age < 100),\n    TRUE)\nFROM\n  UNNEST([-150, 20, 99]) age\n")),Object(c.b)("h5",{id:"\u540c\u3058\u5b9f\u614b\u306f\u540c\u3058\u5024\u304b"},"\u540c\u3058\u5b9f\u614b\u306f\u540c\u3058\u5024\u304b"),Object(c.b)("p",null,"\u30ab\u30c6\u30b4\u30ea\u30ab\u30eb\u3063\u307d\u3044\u7269\u306f\u5168\u90e8\u898b\u3066\u307f\u3066\u3001\u540c\u3058\u5b9f\u614b\u3092\u6307\u3059\u30c7\u30fc\u30bf\u304c\u540c\u3058\u5024\u3067\u3042\u308b\u304b\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3057\u3087\u3046\u3002\n\u6df1\u5c64\u5b66\u7fd2\u3067\u306f Embedding \u306b\u3088\u308a\u4f3c\u305f\u3088\u3046\u306a\u7a7a\u9593\u306b\u3044\u3063\u3066\u304f\u308c\u308b\u306e\u3067\u3001\u5f71\u97ff\u306f\u5927\u304d\u304f\u306a\u3044\u3067\u3057\u3087\u3046\u304c\u3001\u30af\u30ec\u30f3\u30b8\u30f3\u30b0\u3067\u304d\u308b\u306b\u8d8a\u3057\u305f\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  prefecture,\n  COUNT(*)\nFROM\n  UNNEST(['\u6771\u4eac', '\u6771\u4eac\u90fd', '\u5927\u962a\u5e9c', '\u5927\u962a\u5e9c']) prefecture\nGROUP BY\n  prefecture\nORDER BY\n  prefecture\n")),Object(c.b)("h5",{id:"\u9055\u3046\u5b9f\u614b\u306f\u9055\u3046\u5024\u304b"},"\u9055\u3046\u5b9f\u614b\u306f\u9055\u3046\u5024\u304b"),Object(c.b)("p",null,"\u30c7\u30fc\u30bf\u3060\u3051\u304b\u3089\u3067\u306f\u8aad\u307f\u3068\u308c\u306a\u3044\u3053\u3068\u3082\u591a\u3044\u305f\u3081\u3001\u30c9\u30e1\u30a4\u30f3\u77e5\u8b58\u3092\u6301\u3063\u305f\u4eba\u9593\u3068\u4e00\u7dd2\u306b\u30c7\u30fc\u30bf\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\n\u30c7\u30fc\u30bf\u306e\u6d17\u3044\u66ff\u3048\u306a\u3069\u304c\u884c\u308f\u308c\u308b\u5834\u5408\u306b\u306f\u3001\u540c\u3058\u30b3\u30fc\u30c9\u304c\u4f7f\u3044\u307e\u308f\u3055\u308c\u305f\u308a\u3057\u307e\u3059\u3002\n\u6642\u7cfb\u5217\u3067\u8981\u7d04\u7d71\u8a08\u91cf\u3092\u8ffd\u3063\u3066\u3044\u304d\u3001\u5909\u5316\u3057\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u7a81\u304d\u5408\u308f\u305b\u305f\u308a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),Object(c.b)("h4",{id:"default"},"DEFAULT"),Object(c.b)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3092\u5165\u308c\u3066\u3044\u308b\u3068\u3001\u30c7\u30fc\u30bf\u306e\u5206\u5e03\u304c\u6b6a\u307f\u307e\u3059\u3002\n\u53ef\u80fd\u306a\u9650\u308a\u7279\u5b9a\u3057\u3066\u3001\u4fee\u6b63\u3057\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'SELECT\nIF\n  (birth_date = "9999-12-31",\n    NULL,\n    birth_date) birth_date\nFROM\n  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date\n')),Object(c.b)("h4",{id:"primary-key"},"PRIMARY KEY"),Object(c.b)("p",null,"\u30ea\u30ec\u30fc\u30b7\u30e7\u30ca\u30eb\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u30c0\u30f3\u30d7\u3057\u305f\u7269\u3067\u3042\u308c\u3070\u3001\u4e3b\u30ad\u30fc\u3092\u7279\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002\n\u4e3b\u30ad\u30fc\u304c\u6b63\u3057\u304f\u4f7f\u308f\u308c\u3066\u3044\u308b\u3068\u904e\u4fe1\u3059\u308b\u3068\u3001\u7d50\u5408\u306e\u969b\u306b\u5217\u304c\u5897\u3048\u3066\u5927\u5909\u3067\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  COUNT(*) = COUNT(DISTINCT user_id)\nFROM\n  UNNEST([0, 1000, 1001]) user_id\n")),Object(c.b)("h4",{id:"foreign-key"},"FOREIGN KEY"),Object(c.b)("p",null,"\u53ef\u80fd\u306a\u3089\u5916\u90e8\u30ad\u30fc\u3082\u7279\u5b9a\u3057\u3001\u95a2\u4fc2\u304c\u6b63\u3057\u304f\u8ffd\u3048\u308b\u304b\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002\n\u7d50\u5408\u3067\u304d\u306a\u3044\u30c7\u30fc\u30bf\u304c\u983b\u767a\u3059\u308b\u5834\u5408\u306b\u306f\u3001\u305d\u306e\u95a2\u4fc2\u3092\u6a5f\u68b0\u5b66\u7fd2\u306b\u76db\u308a\u8fbc\u3080\u306e\u3092\u8ae6\u3081\u3056\u308b\u3092\u5f97\u306a\u3044\u3067\u3057\u3087\u3046\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  IFNULL(LOGICAL_AND(item_master_item_id IS NOT NULL),\n    TRUE)\nFROM\n  UNNEST([5, 7, 8, 8]) sales_trans_item_id\nLEFT JOIN\n  UNNEST([1,2,3,4,5,6,7,8]) item_master_item_id\nON\n  item_master_item_id = sales_trans_item_id\n")),Object(c.b)("h4",{id:"\u8981\u7d04\u7d71\u8a08\u91cf"},"\u8981\u7d04\u7d71\u8a08\u91cf"),Object(c.b)("h5",{id:"1-percentile--99-percentile"},"1 percentile & 99 percentile"),Object(c.b)("p",null,"\u30c7\u30d5\u30a9\u30eb\u30c8\u5024\u3084\u756a\u5175\u7528\u30ec\u30b3\u30fc\u30c9\u306a\u3069\u5b9f\u614b\u3092\u8868\u73fe\u3057\u306a\u3044\u30c7\u30fc\u30bf\u304c\u73fe\u308c\u305f\u308a\u3057\u307e\u3059\u3002\n\u30c7\u30fc\u30bf\u306e\u4e2d\u8eab\u306f\u5168\u3066\u4e00\u5b9a\u54c1\u8cea\u3067\u3042\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3059\u308b\u305f\u3081\u3001\u756a\u5175\u7528\u30ec\u30b3\u30fc\u30c9\u306a\u3069\u306f\u30af\u30ec\u30f3\u30b8\u30f3\u30b0\u5bfe\u8c61\u3067\u3059\u3002"),Object(c.b)("h4",{id:"\u305d\u306e\u4ed6\u91cd\u8981\u306a\u6307\u6a19"},"\u305d\u306e\u4ed6\u91cd\u8981\u306a\u6307\u6a19"),Object(c.b)("h5",{id:"null-\u7387"},"NULL \u7387"),Object(c.b)("p",null,"NOT NULL \u306b\u9650\u3089\u305a\u3001\u307b\u307c NULL \u3067\u306a\u3044\u3053\u3068\u3092\u671f\u5f85\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\nNULL \u306b\u5f15\u3063\u5f35\u3089\u308c\u3066\u3001\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u6027\u80fd\u304c\u843d\u3061\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"),Object(c.b)("h5",{id:"unique-\u7387"},"UNIQUE \u7387"),Object(c.b)("p",null,"UNIQUE \u306b\u9650\u3089\u305a\u3001\u307b\u307c UNIQUE \u3067\u306a\u3044\u3053\u3068\u3092\u671f\u5f85\u3057\u3066\u3044\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\nUNIQUE \u304c\u5897\u3048\u308b\u3068\u3001\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u306e\u6027\u80fd\u304c\u843d\u3061\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002"),Object(c.b)("h5",{id:"\u6b20\u640d\u65e5\u6570"},"\u6b20\u640d\u65e5\u6570"),Object(c.b)("p",null,"\u6bce\u65e5\u6b20\u640d\u306a\u304f\u5165\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u524d\u63d0\u306e\u30c7\u30fc\u30bf\u306f\u3001\u843d\u3061\u3066\u3044\u308b\u65e5\u304c\u306a\u3044\u304b\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002\n\u843d\u3061\u3066\u3044\u308b\u65e5\u306f\u5b9a\u5e38\u30c7\u30fc\u30bf\u3067\u306a\u3044\u305f\u3081\u3001\u8003\u616e\u304c\u5fc5\u8981\u306b\u306a\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002"),Object(c.b)("h5",{id:"false-\u7387"},"FALSE \u7387"),Object(c.b)("h5",{id:"0-\u7387"},"0 \u7387"),Object(c.b)("h5",{id:"-\u7387"},"'' \u7387"),Object(c.b)("h5",{id:"\u7387"},"[]\u7387"),Object(c.b)("h5",{id:"-\u7387-1"},"{} \u7387"),Object(c.b)("h5",{id:"0-\u672a\u6e80\u7387"},"0 \u672a\u6e80\u7387"),Object(c.b)("h3",{id:"2\u56de\u76ee\u4ee5\u964d-\u89b3\u70b9\u30ea\u30b9\u30c8"},"2\u56de\u76ee\u4ee5\u964d-\u89b3\u70b9\u30ea\u30b9\u30c8"),Object(c.b)("h4",{id:"\u8981\u7d04\u7d71\u8a08\u91cf\u306f\u5927\u304d\u304f\u5909\u5316\u3057\u306a\u3044\u304b"},"\u8981\u7d04\u7d71\u8a08\u91cf\u306f\u5927\u304d\u304f\u5909\u5316\u3057\u306a\u3044\u304b"),Object(c.b)("p",null,"\u7d71\u8a08\u91cf\u304c\u5909\u308f\u3063\u3066\u308b\u3068\u3001\u5229\u7528\u7528\u9014\u304c\u5909\u5316\u3057\u305f\u5024\u3092\u542b\u6709\u3057\u3066\u304a\u308a\u3001\u4e88\u6e2c\u7cbe\u5ea6\u306e\u60aa\u5316\u306b\u7e4b\u304c\u308a\u307e\u3059\u3002\n\u6a5f\u68b0\u5b66\u7fd2\u306e\u5b66\u7fd2\u30d5\u30a7\u30fc\u30ba\u3067\u306f\u691c\u77e5\u56f0\u96e3\u3001\u63a8\u8ad6\u6642\u306b\u52a3\u5316\u304c\u767a\u899a\u3059\u308b\u306e\u3067\u3001\u30c7\u30fc\u30bf\u30c1\u30a7\u30c3\u30af\u6642\u306b\u5bfe\u5fdc\u3067\u304d\u308b\u306e\u304c\u597d\u307e\u3057\u3044\u3067\u3059\u3002"),Object(c.b)("h5",{id:"\u5e73\u5747"},"\u5e73\u5747"),Object(c.b)("h5",{id:"\u5206\u6563"},"\u5206\u6563"),Object(c.b)("h5",{id:"\u6a19\u6e96\u504f\u5dee"},"\u6a19\u6e96\u504f\u5dee"),Object(c.b)("h5",{id:"\u6b6a\u5ea6"},"\u6b6a\u5ea6"),Object(c.b)("h5",{id:"\u5c16\u5ea6"},"\u5c16\u5ea6"),Object(c.b)("h5",{id:"\u4e2d\u592e\u5024"},"\u4e2d\u592e\u5024"),Object(c.b)("h5",{id:"\u56db\u5206\u4f4d\u70b9"},"\u56db\u5206\u4f4d\u70b9"),Object(c.b)("h5",{id:"\u6700\u5c0f\u5024\u6700\u5927\u5024"},"\u6700\u5c0f\u5024&\u6700\u5927\u5024"),Object(c.b)("h5",{id:"\u6700\u983b\u5024"},"\u6700\u983b\u5024"),Object(c.b)("h3",{id:"\u30c7\u30fc\u30bf\u30af\u30ec\u30f3\u30b8\u30f3\u30b0\u54c1\u8cea\u306e\u89b3\u70b9"},"\u30c7\u30fc\u30bf\u30af\u30ec\u30f3\u30b8\u30f3\u30b0\u54c1\u8cea\u306e\u89b3\u70b9"),Object(c.b)("h4",{id:"\u53ef\u9006\u5909\u63db"},"\u53ef\u9006\u5909\u63db"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5404\u8981\u7d20\u306e\u3046\u3061\u3067\u53ef\u9006\u5909\u63db\u304c\u65bd\u3055\u308c\u305f\u4ef6\u6570\u3068\u6761\u4ef6\u3002",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5b9f\u696d\u52d9\u3067\u306f PARSE_DATE \u304c\u591a\u305d\u3046\u3002")))),Object(c.b)("h4",{id:"\u975e\u53ef\u9006\u5909\u63db"},"\u975e\u53ef\u9006\u5909\u63db"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u5404\u8981\u7d20\u306e\u3046\u3061\u3067\u975e\u53ef\u9006\u5909\u63db\u304c\u65bd\u3055\u308c\u305f\u4ef6\u6570\u3068\u6761\u4ef6\u3002",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5b9f\u696d\u52d9\u3067\u306f IF, SAFE_CAST \u304c\u591a\u305d\u3046\u3002")))),Object(c.b)("h4",{id:"\u9664\u53bb"},"\u9664\u53bb"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5404\u884c\u306e\u3046\u3061\u3067\u9664\u53bb\u3055\u308c\u305f\u4ef6\u6570\u3068\u6761\u4ef6\u3002"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5b9f\u696d\u52d9\u3067\u306f WHERE, JOIN \u306b\u76f8\u5f53\u3002"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"\u5404\u5217\u306e\u3046\u3061\u3067\u9664\u53bb\u3055\u308c\u305f\u4ef6\u6570\u3068\u6761\u4ef6\u3002"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5b9f\u696d\u52d9\u3067\u306f SELECT \u306b\u76f8\u5f53\u3002")))),Object(c.b)("h3",{id:"\u89b3\u70b9\u30c1\u30a7\u30c3\u30af-sql"},"\u89b3\u70b9\u30c1\u30a7\u30c3\u30af SQL"),Object(c.b)("h4",{id:"check-1"},"CHECK"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'SELECT\n  IFNULL(LOGICAL_AND(birth_date<="2020-01-01"),\n    TRUE)\nFROM\n  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date\n')),Object(c.b)("h4",{id:"not-null"},"NOT NULL"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'SELECT\n  IFNULL(LOGICAL_AND(birth_date IS NOT NULL),\n    TRUE)\nFROM\n  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date\n')),Object(c.b)("h3",{id:"unique"},"UNIQUE"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'SELECT\n  COUNT(birth_date) = COUNT(DISTINCT birth_date)\nFROM\n  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date\n')),Object(c.b)("h3",{id:"primary-key-1"},"PRIMARY KEY"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),'SELECT\n  COUNT(*) = COUNT(DISTINCT birth_date)\nFROM\n  UNNEST([DATE "2000-01-01", "9999-12-31"]) birth_date\n')),Object(c.b)("h3",{id:"foreign-key-1"},"FOREIGN KEY"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  IFNULL(LOGICAL_AND(item_master_item_id IS NOT NULL),\n    TRUE)\nFROM\n  UNNEST([5, 7, 8, 8]) sales_trans_item_id\nLEFT JOIN\n  UNNEST([1,2,3,4,5,6,7,8]) item_master_item_id\nON\n  item_master_item_id = sales_trans_item_id\n")),Object(c.b)("h4",{id:"\u8981\u7d04\u7d71\u8a08\u91cf-1"},"\u8981\u7d04\u7d71\u8a08\u91cf"),Object(c.b)("p",null,"\u5404\u578b\u306e SQL \u3092\u4ee5\u4e0b\u306e\u30af\u30a8\u30ea\u3067\u578b\u5909\u63db\u3059\u308c\u3070\u3001UNION ALL \u3067\u304d\u307e\u3059\u3002\n\u5177\u4f53\u7684\u306a\u5b9f\u88c5\u306f\u3001",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/COLORFULBOARD/bq_profile"}),"bq_profile")," \u306b\u3082\u3042\u308a\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  CAST(avg AS STRING) avg,\n  count_distinct,\n  count,\n  countif,\n  CAST(max AS STRING) max,\n  CAST(min AS STRING) min,\n  stddev_samp,\n  sum,\n  var_samp,\n  ARRAY(SELECT CAST(v AS STRING) FROM type_datetime.approx_quantiles v) approx_quantiles,\n  ARRAY(SELECT STRUCT(CAST(v.value AS STRING) AS value, v.count) FROM type_datetime.approx_top_count v) approx_top_count\n")),Object(c.b)("h5",{id:"int64-numeric-float64"},"INT64, NUMERIC, FLOAT64"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  AVG(v) avg,\n  COUNT(DISTINCT v) count_distinct,\n  COUNT(v) count,\n  COUNTIF(v = 0) countif,\n  MAX(v) max,\n  MIN(v) min,\n  STDDEV_SAMP(v) stddev_samp,\n  SUM(v) sum,\n  VAR_SAMP(v) var_samp,\n  APPROX_QUANTILES(v, 100) approx_quantiles,\n  APPROX_TOP_COUNT(v, 100) approx_top_count\nFROM\n  UNNEST([1.0, 2.0, 3.0]) v\n")),Object(c.b)("h5",{id:"bool"},"BOOL"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  AVG(IF(v, 1, 0)) avg,\n  COUNT(DISTINCT v) count_distinct,\n  COUNT(v) count,\n  COUNTIF(v = FALSE) countif,\n  MAX(v) max,\n  MIN(v) min,\n  STDDEV_SAMP(IF(v, 1, 0)) stddev_samp,\n  NULL sum,\n  VAR_SAMP(IF(v, 1, 0)) var_samp,\n  APPROX_QUANTILES(v, 100) approx_quantiles,\n  APPROX_TOP_COUNT(v, 100) approx_top_count\nFROM\n  UNNEST([TRUE, FALSE, TRUE]) v\n")),Object(c.b)("h5",{id:"string"},"STRING"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  NULL avg,\n  COUNT(DISTINCT v) count_distinct,\n  COUNT(v) count,\n  COUNTIF(v = '') countif,\n  MAX(v) max,\n  MIN(v) min,\n  NULL stddev_samp,\n  NULL sum,\n  NULL var_samp,\n  APPROX_QUANTILES(v, 100) approx_quantiles,\n  APPROX_TOP_COUNT(v, 100) approx_top_count\nFROM\n  UNNEST(['A', 'B', 'A']) v\n")),Object(c.b)("h5",{id:"bytes"},"BYTES"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  NULL avg,\n  COUNT(DISTINCT v) count_distinct,\n  COUNT(v) count,\n  COUNTIF(v = b'') countif,\n  MAX(v) max,\n  MIN(v) min,\n  NULL stddev_samp,\n  NULL sum,\n  NULL var_samp,\n  APPROX_QUANTILES(v, 100) approx_quantiles,\n  APPROX_TOP_COUNT(v, 100)  approx_top_count\nFROM\n  UNNEST([b'aa', b'aa', b'bb']) v\n")),Object(c.b)("h5",{id:"date"},"DATE"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  DATE_FROM_UNIX_DATE(CAST(AVG(UNIX_DATE(v)) AS INT64)) avg,\n  COUNT(DISTINCT v) count_distinct,\n  COUNT(v) count,\n  COUNTIF(v = '1970-01-01') countif,\n  MAX(v) max,\n  MIN(v) min,\n  STDDEV_SAMP(UNIX_DATE(v)) stddev_samp,\n  NULL sum,\n  VAR_SAMP(UNIX_DATE(v)) var_samp,\n  APPROX_QUANTILES(v, 100) approx_quantiles,\n  APPROX_TOP_COUNT(v, 100) approx_top_count\nFROM\n  UNNEST([DATE '2018-01-01']) v\n")),Object(c.b)("h5",{id:"datetime"},"DATETIME"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  DATETIME(TIMESTAMP_MICROS(CAST(AVG(UNIX_MICROS(TIMESTAMP(v))) AS INT64))) avg,\n  COUNT(DISTINCT v) count_distinct,\n  COUNT(v) count,\n  COUNTIF(v = '1970-01-01') countif,\n  MAX(v) max,\n  MIN(v) min,\n  STDDEV_SAMP(UNIX_MICROS(TIMESTAMP(v))) stddev_samp,\n  NULL sum,\n  VAR_SAMP(UNIX_MICROS(TIMESTAMP(v))) var_samp,\n  APPROX_QUANTILES(v, 100) approx_quantiles,\n  APPROX_TOP_COUNT(v, 100) approx_top_count\nFROM\n  UNNEST([DATETIME '2018-01-01', '2011-01-01']) v\n")),Object(c.b)("h5",{id:"geography"},"GEOGRAPHY"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  NULL avg,\n  NULL count_distinct,\n  COUNT(v) count,\n  COUNTIF(ST_ISEMPTY(v)) countif,\n  NULL max,\n  NULL min,\n  NULL stddev_samp,\n  NULL sum,\n  NULL var_samp,\n  APPROX_QUANTILES(ST_ASTEXT(v), 100) approx_quantiles,\n  APPROX_TOP_COUNT(ST_ASTEXT(v), 100) approx_top_count\nFROM\n  UNNEST([ST_GEOGPOINT(45, 45), ST_GEOGPOINT(40, 45)]) v\n")),Object(c.b)("h5",{id:"time"},"TIME"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  TIME_ADD('00:00:00', INTERVAL CAST(AVG(TIME_DIFF(v, '00:00:00', MICROSECOND)) AS INT64) MICROSECOND) avg,\n  COUNT(DISTINCT v) count_distinct,\n  COUNT(v) count,\n  COUNTIF(v = '00:00:00') countif,\n  MAX(v) max,\n  MIN(v) min,\n  STDDEV_SAMP(TIME_DIFF(v, '00:00:00', MICROSECOND)) stddev_samp,\n  NULL sum,\n  VAR_SAMP(TIME_DIFF(v, '00:00:00', MICROSECOND)) var_samp,\n  APPROX_QUANTILES(v, 100) approx_quantiles,\n  APPROX_TOP_COUNT(v, 100) approx_top_count\nFROM\n  UNNEST([TIME '12:00:00']) v\n")),Object(c.b)("h5",{id:"timestamp"},"TIMESTAMP"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  DATETIME(TIMESTAMP_MICROS(CAST(AVG(UNIX_MICROS(v)) AS INT64))) avg,\n  COUNT(DISTINCT v) count_distinct,\n  COUNT(v) count,\n  COUNTIF(v = '1970-01-01') countif,\n  MAX(v) max,\n  MIN(v) min,\n  STDDEV_SAMP(UNIX_MICROS(v)) stddev_samp,\n  NULL sum,\n  VAR_SAMP(UNIX_MICROS(v)) var_samp,\n  APPROX_QUANTILES(v, 100) approx_quantiles,\n  APPROX_TOP_COUNT(v, 100) approx_top_count\nFROM\n  UNNEST([TIMESTAMP '2018-01-01', '2011-01-01']) v\n")),Object(c.b)("h5",{id:"array"},"ARRAY"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  NULL avg,\n  NULL count_distinct,\n  COUNT(v.x) count,\n  COUNTIF(ARRAY_LENGTH(v.x) = 0) countif,\n  NULL max,\n  NULL min,\n  NULL stddev_samp,\n  NULL sum,\n  NULL var_samp,\n  NULL approx_quantiles,\n  NULL approx_top_count\nFROM\n  UNNEST([STRUCT([1] AS x)]) v\n")),Object(c.b)("h5",{id:"struct"},"STRUCT"),Object(c.b)("p",null,"\u3070\u3089\u3055\u306a\u3044\u3068\u8a08\u7b97\u3067\u304d\u307e\u305b\u3093\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  NULL avg,\n  NULL count_distinct,\n  COUNT(v) count,\n  COUNTIF(ST_ISEMPTY(v)) countif,\n  NULL max,\n  NULL min,\n  NULL stddev_samp,\n  NULL sum,\n  NULL var_samp,\n  NULL approx_quantiles,\n  NULL approx_top_count\nFROM\n  UNNEST([STRUCT([1] AS x)]) v\n")),Object(c.b)("h2",{id:"\u307e\u3068\u3081"},"\u307e\u3068\u3081"),Object(c.b)("p",null,"\u3053\u3053\u307e\u3067\u3001\u30c7\u30fc\u30bf\u306e\u54c1\u8cea\u306e\u30c1\u30a7\u30c3\u30af\u65b9\u91dd\u3092\u307e\u3068\u3081\u307e\u3057\u305f\u3002\n\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306e\u4fe1\u983c\u6027\u306b\u5408\u308f\u305b\u3066\u3001\u30c7\u30fc\u30bf\u54c1\u8cea\u30c1\u30a7\u30c3\u30af\u3082\u8a2d\u8a08\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u304c\u5916\u306b\u3042\u308b\u5834\u5408\u306b\u306f\u3001\u3053\u306e\u8a18\u4e8b\u3067\u7d39\u4ecb\u3057\u305f\u5185\u5bb9\u3092\u81ea\u52d5\u7684\u306b\u8a08\u6e2c\u3059\u308b\u4ed5\u7d44\u307f\u304c\u3042\u308b\u3068\u3001\u30c7\u30fc\u30bf\u5206\u6790\u306e\u7d50\u679c\u306e\u52a3\u5316\u3092\u9632\u3050\u3053\u3068\u304c\u3067\u304d\u308b\u3067\u3057\u3087\u3046\u3002"))}N.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),b=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var i=b.a.createContext({}),N=function(e){var t=b.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):O(O({},t),e)),n},p=function(e){var t=N(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},T=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=N(n),T=a,d=p["".concat(r,".").concat(T)]||p[T]||u[T]||c;return n?b.a.createElement(d,O(O({ref:t},i),{},{components:n})):b.a.createElement(d,O({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=T;var O={};for(var l in t)hasOwnProperty.call(t,l)&&(O[l]=t[l]);O.originalType=e,O.mdxType="string"==typeof e?e:a,r[1]=O;for(var i=2;i<c;i++)r[i]=n[i];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}T.displayName="MDXCreateElement"}}]);