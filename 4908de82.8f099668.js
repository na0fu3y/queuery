(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(9),b=(a(0),a(216)),c={id:"bigquery-access-controls-groups",title:"BigQuery \u30b0\u30eb\u30fc\u30d7\u8a2d\u8a08\u4f8b",sidebar_label:"\u30b0\u30eb\u30fc\u30d7\u8a2d\u8a08\u4f8b"},l={id:"bigquery-access-controls-groups",isDocsHomePage:!1,title:"BigQuery \u30b0\u30eb\u30fc\u30d7\u8a2d\u8a08\u4f8b",description:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u8a08\u65b9\u6cd5",source:"@site/docs/bigquery-access-controls-groups.md",permalink:"/docs/bigquery-access-controls-groups",editUrl:"https://github.com/na0fu3y/queuery/edit/master/docs/bigquery-access-controls-groups.md",lastUpdatedAt:1594083814,sidebar_label:"\u30b0\u30eb\u30fc\u30d7\u8a2d\u8a08\u4f8b",sidebar:"someSidebar",previous:{title:"BigQuery \u30a2\u30af\u30bb\u30b9\u6a29\u8a2d\u5b9a",permalink:"/docs/bigquery-access-controls"}},i=[{value:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u8a08\u65b9\u6cd5",id:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u8a08\u65b9\u6cd5",children:[{value:"\u30ea\u30b9\u30af\u30a2\u30bb\u30b9\u30e1\u30f3\u30c8\u3092\u3057\u3088\u3046",id:"\u30ea\u30b9\u30af\u30a2\u30bb\u30b9\u30e1\u30f3\u30c8\u3092\u3057\u3088\u3046",children:[]},{value:"\u30b0\u30eb\u30fc\u30d7\u3092\u6d3b\u7528\u3057\u3088\u3046",id:"\u30b0\u30eb\u30fc\u30d7\u3092\u6d3b\u7528\u3057\u3088\u3046",children:[]},{value:"\u73fe\u72b6\u3092\u628a\u63e1\u3057\u3088\u3046",id:"\u73fe\u72b6\u3092\u628a\u63e1\u3057\u3088\u3046",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u8a08\u65b9\u6cd5"},"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u8a08\u65b9\u6cd5"),Object(b.b)("p",null,"\u7d44\u7e54\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u8a2d\u8a08\u306f\u3069\u3046\u3059\u308b\u3079\u304d\u3067\u3057\u3087\u3046\u304b\u3002\u3053\u3053\u3067\u306f\u3001\u6700\u5c0f\u8003\u616e\u4e8b\u9805\u3068\u3057\u3066\u3001\u30ea\u30b9\u30af\u30a2\u30bb\u30b9\u30e1\u30f3\u30c8\u306e\u7d39\u4ecb\u3068\u6a29\u9650\u30b0\u30eb\u30fc\u30d7\u306e\u4f8b\u3092\u793a\u3059\u306b\u7559\u3081\u307e\u3059\u3002"),Object(b.b)("h3",{id:"\u30ea\u30b9\u30af\u30a2\u30bb\u30b9\u30e1\u30f3\u30c8\u3092\u3057\u3088\u3046"},"\u30ea\u30b9\u30af\u30a2\u30bb\u30b9\u30e1\u30f3\u30c8\u3092\u3057\u3088\u3046"),Object(b.b)("p",null,"ISO/IEC 27002, ISO/IEC 27018, JIS Q 15001, GDPR \u3092\u78ba\u8a8d\u3057\u3066\u3001\u7d44\u7e54\u3054\u3068\u306e\u30ea\u30b9\u30af\u30a2\u30bb\u30b9\u30e1\u30f3\u30c8\u3092\u884c\u3044\u307e\u3057\u3087\u3046\u3002\n\u3084\u308b\u3053\u3068\u306f\u5358\u7d14\u3067\u3001\u30ea\u30b9\u30af\u5206\u6790\u3068\u8a55\u4fa1\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u3059\u3002\u500b\u4eba\u60c5\u5831\u306f\u767d\u9ed2\u6c7a\u3081\u306b\u304f\u3044\u9818\u57df\u3067\u3042\u308b\u3053\u3068\u306b\u52a0\u3048\u3001BigQuery ML \u306e\u3088\u3046\u306a\u6a5f\u68b0\u5b66\u7fd2\u306e\u51fa\u529b\u7d50\u679c\uff08\u500b\u4eba\u60c5\u5831\u3067\u306a\u304f\u3066\u3082\uff09\u306e\u502b\u7406\u3082\u554f\u308f\u308c\u308b\u3053\u3068\u306b\u306a\u308b\u6642\u4ee3\u3067\u3059\u3002\u5c0f\u3055\u306a\u6bcd\u96c6\u56e3\u306b\u30d5\u30a3\u30c3\u30c8\u3057\u3066\u51fa\u529b\u81ea\u4f53\u304c\u500b\u4eba\u60c5\u5831\u3068\u306a\u308b\u5834\u5408\u3084\u3001\u500b\u4eba\u60c5\u5831\u306e\u3046\u3061\u6027\u5225\u4ee5\u5916\u5168\u3066\u3092\u30de\u30b9\u30af\u3057\u3066\u4f01\u696d\u306e\u63a1\u7528\u53ef\u5426\u3092\u6c7a\u3081\u308b\u3088\u3046\u306a\u6a5f\u68b0\u5b66\u7fd2\u30e2\u30c7\u30eb\u3092\u4f5c\u308b\u3068\u504f\u898b\u306b\u306a\u308b\u5834\u5408\u3001\u591a\u7a2e\u591a\u69d8\u306a\u30ea\u30b9\u30af\u3092\u5b55\u3093\u3067\u3044\u307e\u3059\u3002"),Object(b.b)("p",null,"BigQuery \u306e\u4e00\u90e8\u306e\u60c5\u5831\u304c\u6f0f\u308c\u305f\u3089\u3069\u3046\u306a\u308b\u304b\u3001\u30e2\u30c7\u30eb\u306e\u4e2d\u9593\u51fa\u529b\u306f\u504f\u898b\u3092\u751f\u307e\u306a\u3044\u304b\u3001\u30ea\u30b9\u30af\u3092\u601d\u3044\u3064\u304f\u9650\u308a\u6d17\u3044\u51fa\u3057\u307e\u3057\u3087\u3046\u3002\u305d\u306e\u4e0a\u3067\u3001\u6d17\u3044\u51fa\u3057\u305f\u30ea\u30b9\u30af\u304c\u56de\u907f\u53ef\u80fd\u304b\u3001\u4e88\u9632\u4f4e\u6e1b\u53ef\u80fd\u304b\u8907\u6570\u4eba\u3067\u691c\u8a0e\u3057\u307e\u3057\u3087\u3046\u3002\u30ea\u30b9\u30af\u306b\u95a2\u3057\u3066\u601d\u8003\u505c\u6b62\u305b\u305a\u3001\u6a5f\u5bc6\u5ea6\u5408\u3044\u306b\u5fdc\u3058\u3066\u6a29\u9650\u3092\u5c0f\u3055\u304f\u3067\u304d\u306a\u3044\u304b\u691c\u8a0e\u3057\u7d9a\u3051\u308b\u74b0\u5883\u3065\u304f\u308a\u304c\u3067\u304d\u308b\u3068\u826f\u3044\u3067\u3059\u3002"),Object(b.b)("h3",{id:"\u30b0\u30eb\u30fc\u30d7\u3092\u6d3b\u7528\u3057\u3088\u3046"},"\u30b0\u30eb\u30fc\u30d7\u3092\u6d3b\u7528\u3057\u3088\u3046"),Object(b.b)("p",null,"\u4eba\u306b\u30a2\u30af\u30bb\u30b9\u6a29\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u3066\u3044\u308b\u72b6\u614b\u306f\u3001\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u304c\u5168\u304f\u7570\u306a\u308b\u7269\u3092\u540c\u4e00\u7ba1\u7406\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u5065\u5168\u306a\u7d44\u7e54\u3068\u306f\u8a00\u3044\u96e3\u3044\u3067\u3059\u3002\u30b0\u30eb\u30fc\u30d7\u306b\u6a29\u9650\u3092\u4e0e\u3048\u3001\u30e9\u30a4\u30d5\u30b5\u30a4\u30af\u30eb\u3092\u5207\u308a\u96e2\u3057\u307e\u3057\u3087\u3046\u3002\u30b0\u30eb\u30fc\u30d7\u306b\u3059\u308b\u3053\u3068\u3067\u3001\u30b9\u30b1\u30fc\u30eb\u30a2\u30a6\u30c8\u306b\u5f37\u304f\u306a\u308a\u307e\u3059\u3002"),Object(b.b)("p",null,"1 \u3064\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u5c5e\u3059\u306e\u3067\u306f\u306a\u304f\u3001\u8907\u6570\u306e\u30b0\u30eb\u30fc\u30d7\u306b\u8de8\u3063\u3066\u5c5e\u3059\u308b\u3088\u3046\u306a\u904b\u7528\u3092\u8a8d\u3081\u3066\u3044\u305f\u3060\u3051\u308b\u3068\u3001\u30a8\u30f3\u30b8\u30cb\u30a2\u7684\u306b\u52d5\u304d\u3084\u3059\u3044\u3067\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 A \u306e\u7ba1\u7406\u8005\u3067\u3042\u308a\u306a\u304c\u3089\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 B, C \u306e\u5206\u6790\u62c5\u5f53\u8005\u3067\u3042\u3063\u305f\u308a\u3068\u3044\u3063\u305f\u7e26\u6a2a\u306e\u7d44\u7e54\u69cb\u9020\u304c\u3042\u308b\u5834\u5408\u306b\u7279\u306b\u6709\u52b9\u3067\u3059\u3002\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u3067\u3082\u3001\u7d44\u7e54\u69cb\u9020\u306b\u305d\u3063\u3066\u30b0\u30eb\u30fc\u30d7\u3092\u4f5c\u3063\u3066\u6a29\u9650\u3092\u4e0e\u3048\u308b\u3068\u3001\u6a29\u9650\u7ba1\u7406\u8005\u3082\u4f8b\u5916\u51e6\u7406\u304c\u5c11\u306a\u304f\u3066\u3059\u307f\u307e\u3059\u3002"),Object(b.b)("h4",{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u6a2a\u65ad\u306e\u968e\u5c64\u69cb\u9020\u306e\u4f8b"},"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u6a2a\u65ad\u306e\u968e\u5c64\u69cb\u9020\u306e\u4f8b"),Object(b.b)("p",null,"BigQuery \u306e\u6a19\u6e96\u306e\u5f79\u8077\u3067\u3059\u304c\u3001\u7d44\u7e54\u306e\u968e\u5c64\u69cb\u9020\u306b\u305d\u306e\u307e\u307e\u5f53\u3066\u306f\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u7ba1\u7406\u8005\u304b\u3089\u9806\u3005\u306b\u6a29\u9650\u304c\u6e1b\u3063\u3066\u3044\u304f\u306e\u3067\u3001Cloud IAM \u3092\u7528\u3044\u3066\u7d44\u7e54\u30ec\u30d9\u30eb\u3084\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5358\u4f4d\u3067\u8a2d\u5b9a\u3059\u308b\u306e\u304c\u304a\u3059\u3059\u3081\u306e\u30ec\u30a4\u30e4\u306b\u306a\u308a\u307e\u3059\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5f79\u8077"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BigQuery \u7ba1\u7406\u8005"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30ea\u30bd\u30fc\u30b9\u3092\u7ba1\u7406\u3059\u308b\u6a29\u9650\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u3092\u7ba1\u7406\u3067\u304d\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u306e\u30b8\u30e7\u30d6\u3082\u30ad\u30e3\u30f3\u30bb\u30eb\u3067\u304d\u307e\u3059\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BigQuery \u30c7\u30fc\u30bf\u7de8\u96c6\u8005"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u308a\u3001\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u5185\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u4e00\u89a7\u8868\u793a\u3059\u308b\u3002\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3001\u66f4\u65b0\u3001\u53d6\u5f97\u3001\u524a\u9664\u3059\u308b\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u307e\u305f\u306f\u7d44\u7e54\u30ec\u30d9\u30eb\u3067\u9069\u7528\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u5f79\u5272\u306f\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BigQuery \u30c7\u30fc\u30bf\u30aa\u30fc\u30ca\u30fc"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u8aad\u307f\u53d6\u308a\u3001\u66f4\u65b0\u3001\u524a\u9664\u3059\u308b\u3002 \u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3001\u66f4\u65b0\u3001\u53d6\u5f97\u3001\u524a\u9664\u3059\u308b\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u307e\u305f\u306f\u7d44\u7e54\u30ec\u30d9\u30eb\u3067\u9069\u7528\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u5f79\u5272\u306f\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BigQuery \u30e6\u30fc\u30b6\u30fc"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u30b8\u30e7\u30d6\uff08\u30af\u30a8\u30ea\u3092\u542b\u3080\uff09\u3092\u5b9f\u884c\u3059\u308b\u6a29\u9650\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u306e\u5f79\u5272\u306f\u3001\u81ea\u5206\u304c\u6240\u6709\u3059\u308b\u30b8\u30e7\u30d6\u306e\u5217\u6319\u3001\u81ea\u5206\u304c\u6240\u6709\u3059\u308b\u30b8\u30e7\u30d6\u306e\u30ad\u30e3\u30f3\u30bb\u30eb\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u5217\u6319\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306b\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u4f5c\u6210\u8005\u306b\u306f\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306b\u5bfe\u3059\u308b bigquery.dataOwner \u5f79\u5272\u304c\u4ed8\u4e0e\u3055\u308c\u307e\u3059\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BigQuery \u30c7\u30fc\u30bf\u95b2\u89a7\u8005"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u308a\u3001\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u5185\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u4e00\u89a7\u8868\u793a\u3059\u308b\u3002\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u30c6\u30fc\u30d6\u30eb\u304b\u3089\u30c7\u30fc\u30bf\u3068\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u308b\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u307e\u305f\u306f\u7d44\u7e54\u30ec\u30d9\u30eb\u3067\u9069\u7528\u3057\u305f\u5834\u5408\u3001\u3053\u306e\u5f79\u5272\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u3059\u3079\u3066\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u5217\u6319\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002\u305f\u3060\u3057\u3001\u30b8\u30e7\u30d6\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306b\u306f\u8ffd\u52a0\u306e\u5f79\u5272\u304c\u5fc5\u8981\u3067\u3059\u3002")))),Object(b.b)("h4",{id:"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u6a2a\u65ad\u306e\u6848\u4ef6\u5225\u30a2\u30b5\u30a4\u30f3\u69cb\u9020\u306e\u4f8b"},"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u6a2a\u65ad\u306e\u6848\u4ef6\u5225\u30a2\u30b5\u30a4\u30f3\u69cb\u9020\u306e\u4f8b"),Object(b.b)("p",null,"\u6848\u4ef6\u306a\u3069\u7d44\u7e54\u306e\u7e26\u5272\u308a\u306b\u5f53\u3066\u306f\u307e\u308b\u3088\u3046\u306a\u69cb\u9020\u3067\u3059\u3002\u7ba1\u7406\u8005\u304c\u3044\u308b\u308f\u3051\u3067\u306f\u306a\u304f\u3001\u500b\u5225\u306e\u30c7\u30fc\u30bf\u306b\u5bfe\u3057\u3066\u3001\u4f5c\u6210\u30ec\u30d9\u30eb\u3068\u53c2\u7167\u30ec\u30d9\u30eb\u306e\u4eba\u304c\u3044\u308b\u3088\u3046\u306a\u69cb\u9020\u3067\u3059\u3002\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u30ec\u30a4\u30e4\u306e\u6a29\u9650\u8a2d\u5b9a\u306e\u305f\u3081\u3001\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u7528\u3044\u3066\u8a2d\u5b9a\u3059\u308b\u306e\u304c\u304a\u3059\u3059\u3081\u3067\u3059\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u62c5\u5f53\u6848\u4ef6"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u304a\u5ba2\u69d8 A \u306e\u62c5\u5f53\u8005"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 A \u5185\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3001\u30c6\u30fc\u30d6\u30eb\u306e\u4e00\u89a7\u3001\u53d6\u5f97\u306e\u6a29\u9650\u3092\u6301\u3061\u307e\u3059\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u304a\u5ba2\u69d8 A \u306e\u53d7\u6ce8\u6848\u4ef6 X \u306e\u62c5\u5f53\u8005"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 A \u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8 X \u5185\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u4f5c\u6210\u3001\u66f4\u65b0\u3001\u524a\u9664\u306e\u6a29\u9650\u3092\u6301\u3061\u307e\u3059\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u304a\u5ba2\u69d8 A \u306e\u53d7\u6ce8\u6848\u4ef6 Y \u306e\u62c5\u5f53\u8005"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 A \u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8 Y \u5185\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u4f5c\u6210\u3001\u66f4\u65b0\u3001\u524a\u9664\u306e\u6a29\u9650\u3092\u6301\u3061\u307e\u3059\u3002")))),Object(b.b)("h4",{id:"\u5229\u7528\u8005\u3054\u3068\u306b\u632f\u308b\u821e\u3044\u3092\u5909\u3048\u308b\u3001\u30c7\u30fc\u30bf\u30de\u30b9\u30ad\u30f3\u30b0\u306e\u4f8b"},"\u5229\u7528\u8005\u3054\u3068\u306b\u632f\u308b\u821e\u3044\u3092\u5909\u3048\u308b\u3001\u30c7\u30fc\u30bf\u30de\u30b9\u30ad\u30f3\u30b0\u306e\u4f8b"),Object(b.b)("p",null,"\u5f79\u5272\u6a2a\u5272\u308a\u30c1\u30fc\u30e0\u306b\u30d5\u30a3\u30c3\u30c8\u3059\u308b\u69cb\u9020\u3067\u3059\u3002\u30c7\u30fc\u30bf\u3092\u89e6\u308c\u308b\u4eba\u9593\u3092\u5c11\u306a\u304f\u3057\u305f\u3044\u6642\u306b\u4f7f\u3046\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u3002\u30c6\u30fc\u30d6\u30eb\u30ec\u30a4\u30e4\u306e\u6a29\u9650\u8a2d\u5b9a\u306e\u305f\u3081\u3001\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc\u3092\u7528\u3044\u3066\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30c1\u30fc\u30e0"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30e9\u30a4\u30d0\u30b7\u691c\u8a3c\u30c1\u30fc\u30e0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7d44\u7e54\u5185\u306e\u30c6\u30fc\u30d6\u30eb\u306e\u4e00\u89a7\u3001\u4f5c\u6210\u3001\u66f4\u65b0\u3001\u53d6\u5f97\u3001\u524a\u9664\u306e\u6a29\u9650\u3092\u6301\u3061\u307e\u3059\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EL \u30c1\u30fc\u30e0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30e9\u30a4\u30d0\u30b7\u691c\u8a3c\u3001\u4fdd\u8b77\u4f5c\u696d\u5f8c\u306e\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc\u306e\u4e00\u89a7\u3001\u53d6\u5f97\u306e\u6a29\u9650\u3092\u6301\u3061\u307e\u3059\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5206\u6790\u30c1\u30fc\u30e0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"EL \u6642\u306e\u4f5c\u696d\u5217\u3092\u843d\u3068\u3057\u305f\u3001\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc\u306e\u4e00\u89a7\u3001\u53d6\u5f97\u306e\u6a29\u9650\u3092\u6301\u3061\u307e\u3059\u3002")))),Object(b.b)("h4",{id:"\u30a2\u30af\u30bb\u30b9\u72b6\u614b\u306b\u3088\u3063\u3066\u6a29\u9650\u3092\u5909\u3048\u308b\u3001\u6a29\u9650\u7ba1\u7406\u306e\u4f8b"},"\u30a2\u30af\u30bb\u30b9\u72b6\u614b\u306b\u3088\u3063\u3066\u6a29\u9650\u3092\u5909\u3048\u308b\u3001\u6a29\u9650\u7ba1\u7406\u306e\u4f8b"),Object(b.b)("p",null,"\u6642\u9650\u5f0f\u6a29\u9650\u3084\u30ea\u30bd\u30fc\u30b9\u540d\u306a\u3069\u3067\u5b9f\u884c\u6642\u5236\u7d04\u3092\u304b\u3051\u305f\u3044\u6642\u306b\u4f7f\u3044\u307e\u3059\u3002\u5b9f\u884c\u6642\u30ec\u30a4\u30e4\u306e\u6a29\u9650\u8a2d\u5b9a\u306e\u305f\u3081 Cloud IAM Conditions \u3092\u4f7f\u3063\u3066\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u30a2\u30ab\u30a6\u30f3\u30c8"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u793e\u5916\u76e3\u67fb\u30a2\u30ab\u30a6\u30f3\u30c8"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"BigQuery \u30c7\u30fc\u30bf\u95b2\u89a7\u8005\u306e\u6a29\u9650\u3092 1 \u30f6\u6708\u9593\u30019 \u6642\u304b\u3089 17 \u6642\u306e\u9593\u3060\u3051\u6709\u52b9\u306b\u3057\u307e\u3059\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u793e\u5916\u9023\u643a\u30a2\u30ab\u30a6\u30f3\u30c8"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u6848\u4ef6\u306e\u691c\u8a3c\u671f\u9593\u4e2d\u3001Storage \u306e\u6240\u5b9a\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b BigQuery \u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u30b8\u30e7\u30d6\u3092\u6295\u3052\u308b\u6a29\u9650\u3092\u6301\u305f\u305b\u307e\u3059\u3002")))),Object(b.b)("h3",{id:"\u73fe\u72b6\u3092\u628a\u63e1\u3057\u3088\u3046"},"\u73fe\u72b6\u3092\u628a\u63e1\u3057\u3088\u3046"),Object(b.b)("p",null,"\u7d44\u7e54\u306b\u5408\u3063\u305f\u30a2\u30af\u30bb\u30b9\u6a29\u8a2d\u8a08\u306e\u305f\u3081\u306b\u3001\u8ab0\u304c\u3044\u3064\u3069\u306e\u3088\u3046\u306b\u4f7f\u3063\u3066\u3044\u308b\u304b\u8abf\u67fb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002BigQuery \u3068 Cloud IAM \u306e\u73fe\u72b6\u5206\u6790\u306e\u65b9\u6cd5\u3092\u89e6\u308a\u3060\u3051\u7d39\u4ecb\u3057\u307e\u3059\u3002"),Object(b.b)("h4",{id:"bigquery-\u30a2\u30af\u30bb\u30b9\u306e\u73fe\u72b6\u5206\u6790\u306e\u9032\u3081\u65b9"},"BigQuery \u30a2\u30af\u30bb\u30b9\u306e\u73fe\u72b6\u5206\u6790\u306e\u9032\u3081\u65b9"),Object(b.b)("h5",{id:"\u30af\u30a8\u30ea\u30ed\u30b0\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8-or-\u30ed\u30b0\u30b7\u30f3\u30af\u3059\u308b"},"\u30af\u30a8\u30ea\u30ed\u30b0\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8 or \u30ed\u30b0\u30b7\u30f3\u30af\u3059\u308b"),Object(b.b)("p",null,"\u3053\u306e\u8fba\u308a\u3092\u53c2\u8003\u306b\u3001\u4eca\u307e\u3067\u306e\u30af\u30a8\u30ea\u30ed\u30b0\u3092\u5206\u6790\u53ef\u80fd\u306a\u72b6\u614b\u306b\u3057\u307e\u3059\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.google.com/solutions/exporting-stackdriver-logging-for-security-and-access-analytics?hl=ja#configure_the_logging_export"}),"Stackdriver Logging \u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u305f\u3081\u306e\u30b7\u30ca\u30ea\u30aa: \u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3068\u30a2\u30af\u30bb\u30b9\u89e3\u6790")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.google.com/logging/docs/export/configure_export_v2#dest-create"}),"\u30ed\u30b0\u30d3\u30e5\u30fc\u30a2\u306b\u3088\u308b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8"))),Object(b.b)("p",null,"Stackdriver Logging \u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u307e\u305f\u306f\u30ed\u30b0\u30b7\u30f3\u30af\u306e\u5bfe\u8c61\u306f\u3001\u3053\u308c\u304f\u3089\u3044\u3067\u5341\u5206\u3067\u3059\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'resource.type="bigquery_resource" AND\nproto_payload.method_name="jobservice.jobcompleted"\n')),Object(b.b)("h5",{id:"\u8ab0\u304c\u3069\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u304b\u773a\u3081\u308b"},"\u8ab0\u304c\u3069\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u304b\u773a\u3081\u308b"),Object(b.b)("p",null,"\u30ed\u30b0\u30b7\u30f3\u30af\u3057\u305f\u30c6\u30fc\u30d6\u30eb\u306b\u3053\u306e\u30af\u30a8\u30ea\u3092\u767a\u884c\u3059\u308b\u3068\u3001\u8ab0\u304c\u3044\u3064\u3001\u3069\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u89e6\u3063\u305f\u306e\u304b\u304c\u308f\u304b\u308a\u307e\u3059\u3002\n\u3053\u308c\u3067\u3001Cloud IAM \u3068\u898b\u6bd4\u3079\u3066\u904e\u5270\u306a\u6a29\u9650\u304c\u4ed8\u4e0e\u3055\u308c\u3066\u3044\u306a\u3044\u304b\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),'CREATE TEMP FUNCTION\n  ADD_PROJECT_ID_IF_NEEDED(table_id STRING,\n    project_id STRING)AS(CASE CHAR_LENGTH(table_id)-CHAR_LENGTH(REPLACE (table_id, ".", ""))\n      WHEN 1 THEN CONCAT(project_id,\'.\',table_id)\n      WHEN 2 THEN table_id\n    ELSE\n    ERROR(\'The format is not supported\')\n  END\n    );\nSELECT\n  table_id,\n  last_referenced,\n  principal_email\nFROM (\n  SELECT\n    CONCAT(project_id,\'.\',dataset_id,\'.\',table_id)table_id\n  FROM\n    < your-dataset >.__TABLES__)\nFULL JOIN (\n  SELECT\n    protopayload_auditlog.authenticationInfo.principalEmail principal_email,\n    ADD_PROJECT_ID_IF_NEEDED(REGEXP_REPLACE(table_id, r"[\\s`]", ""),\n      protopayload_auditlog.servicedata_v1_bigquery.jobCompletedEvent.job.jobName.projectId)table_id,\n    MAX(timestamp)last_referenced\n  FROM\n   < your-log-sync-dataset >.cloudaudit_googleapis_com_data_access\n  INNER JOIN\n    UNNEST(REGEXP_EXTRACT_ALL(LOWER(protopayload_auditlog.servicedata_v1_bigquery.jobCompletedEvent.job.jobConfiguration.query.query), r"(?:from|join)\\s*(`(?:[\\-\\w]+\\.)?\\w+\\.\\w+`|(?:[\\-\\w]+\\.)?\\w+\\.\\w+\\s|(?:[\\-\\w]+\\.)?\\w+\\.\\w+$)"))table_id\n  GROUP BY\n    table_id,\n    principal_email)\nUSING\n  (table_id)\n')),Object(b.b)("h4",{id:"cloud-iam-\u306e\u73fe\u72b6\u5206\u6790\u306e\u9032\u3081\u65b9"},"Cloud IAM \u306e\u73fe\u72b6\u5206\u6790\u306e\u9032\u3081\u65b9"),Object(b.b)("h5",{id:"\u6ce5\u81ed\u304f\u9811\u5f35\u308b"},"\u6ce5\u81ed\u304f\u9811\u5f35\u308b"),Object(b.b)("p",null,"\u7d44\u7e54\u304c\u62e1\u5927\u3057\u3066\u3044\u304f\u4e2d\u3067\u81ed\u3046\u30dd\u30a4\u30f3\u30c8\u306f\u3053\u308c\u3067\u3059\u3002"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Cloud IAM \u306e Web UI \u304b\u3089\u904e\u5270\u306b\u4ed8\u4e0e\u3055\u308c\u305f\u6a29\u9650\u304c\u3042\u308b"),Object(b.b)("li",{parentName:"ul"},"\u30e1\u30f3\u30d0\u30fc\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5f79\u5272\u3092\u6301\u3063\u3066\u3044\u308b or \u30e1\u30f3\u30d0\u30fc\u304c\u7d99\u627f\u3055\u308c\u3066\u3044\u306a\u3044")),Object(b.b)("p",null,"\u3053\u308c\u3089\u3092\u898b\u3064\u3051\u305f\u3089\u904e\u5270\u306a\u6a29\u9650\u306e\u5265\u596a\u3068\u3001\u540c\u3058\u4ed5\u4e8b\u3092\u3057\u3066\u3044\u308b\u4eba\u3092\u30b0\u30eb\u30fc\u30d4\u30f3\u30b0\u3057\u3066\u30c7\u30d5\u30a9\u30eb\u30c8\u3058\u3083\u306a\u3044\u5f79\u5272\u3092\u4f5c\u3063\u3066\u4ed8\u4e0e\u3067\u304d\u306a\u3044\u304b\u3001\u7d99\u627f\u95a2\u4fc2\u306b\u3067\u304d\u306a\u3044\u304b\u3092\u8003\u3048\u308b\u3068\u826f\u3044\u3067\u3059\u3002"))}p.isMDXComponent=!0},216:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(a),j=r,u=O["".concat(c,".").concat(j)]||O[j]||d[j]||b;return a?n.a.createElement(u,l(l({ref:t},o),{},{components:a})):n.a.createElement(u,l({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);