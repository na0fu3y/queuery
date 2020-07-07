(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),c=(n(0),n(216)),b={id:"bigquery-style-guide",title:"BigQuery\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb",sidebar_label:"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb"},i={id:"bigquery-style-guide",isDocsHomePage:!1,title:"BigQuery\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb",description:"\u3053\u306e\u8a18\u4e8b\u306e\u8da3\u65e8",source:"@site/docs/bigquery-style-guide.md",permalink:"/docs/bigquery-style-guide",editUrl:"https://github.com/na0fu3y/queuery/edit/master/docs/bigquery-style-guide.md",lastUpdatedAt:1594083814,sidebar_label:"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb",sidebar:"someSidebar",previous:{title:"\u30c7\u30fc\u30bf\u54c1\u8cea\u3068\u306f\u4f55\u304b",permalink:"/docs/data-quality"},next:{title:"BigQuery \u30a2\u30af\u30bb\u30b9\u6a29\u8a2d\u5b9a",permalink:"/docs/bigquery-access-controls"}},l=[{value:"\u3053\u306e\u8a18\u4e8b\u306e\u8da3\u65e8",id:"\u3053\u306e\u8a18\u4e8b\u306e\u8da3\u65e8",children:[]},{value:"\u76ee\u7684",id:"\u76ee\u7684",children:[]},{value:"BigQuery\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u898f\u7d04",id:"bigquery\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u898f\u7d04",children:[{value:"\u30b3\u30e1\u30f3\u30c8\u3067\u59cb\u3081\u308b",id:"\u30b3\u30e1\u30f3\u30c8\u3067\u59cb\u3081\u308b",children:[]},{value:"LegacySQL vs StandardSQL",id:"legacysql-vs-standardsql",children:[]},{value:"\u5927\u6587\u5b57\u3068\u5c0f\u6587\u5b57\u306e\u4f7f\u3044\u5206\u3051",id:"\u5927\u6587\u5b57\u3068\u5c0f\u6587\u5b57\u306e\u4f7f\u3044\u5206\u3051",children:[]},{value:"\u6700\u5f8c\u306e\u5217\u306e\u30ab\u30f3\u30de",id:"\u6700\u5f8c\u306e\u5217\u306e\u30ab\u30f3\u30de",children:[]},{value:"\u30a8\u30a4\u30ea\u30a2\u30b9\u306eAS\u53e5",id:"\u30a8\u30a4\u30ea\u30a2\u30b9\u306eas\u53e5",children:[]},{value:"JOIN\u306eOUTER",id:"join\u306eouter",children:[]},{value:"2\u9805\u6f14\u7b97\u5b50",id:"2\u9805\u6f14\u7b97\u5b50",children:[]},{value:"\u6587\u5b57\u5217",id:"\u6587\u5b57\u5217",children:[]},{value:"\u30b3\u30e1\u30f3\u30c8",id:"\u30b3\u30e1\u30f3\u30c8",children:[]},{value:"\u6539\u884c",id:"\u6539\u884c",children:[]},{value:"\u30b5\u30d6\u30af\u30a8\u30ea",id:"\u30b5\u30d6\u30af\u30a8\u30ea",children:[]},{value:"\u30c6\u30fc\u30d6\u30eb\u30a8\u30a4\u30ea\u30a2\u30b9",id:"\u30c6\u30fc\u30d6\u30eb\u30a8\u30a4\u30ea\u30a2\u30b9",children:[]},{value:"TIMEZONE",id:"timezone",children:[]},{value:"\u4ed6\u306eRDBMS\u306e\u4e92\u63db\u6027",id:"\u4ed6\u306erdbms\u306e\u4e92\u63db\u6027",children:[]},{value:"\u30c6\u30fc\u30d6\u30eb\u547d\u540d\u898f\u7d04",id:"\u30c6\u30fc\u30d6\u30eb\u547d\u540d\u898f\u7d04",children:[]},{value:"\u30af\u30a8\u30ea\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u306f\u9069\u5207\u306b",id:"\u30af\u30a8\u30ea\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u306f\u9069\u5207\u306b",children:[]},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[]}]}],u={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u3053\u306e\u8a18\u4e8b\u306e\u8da3\u65e8"},"\u3053\u306e\u8a18\u4e8b\u306e\u8da3\u65e8"),Object(c.b)("p",null,"\u30aa\u30ec\u30aa\u30ecSQL\u306e\u4e71\u7acb\u306f\u7d44\u7e54\u5185\u306e\u5f15\u7d99\u304e\u3084\u79fb\u884c\u306e\u30b3\u30b9\u30c8\u5897\u5927\u306b\u3064\u306a\u304c\u308a\u307e\u3059\u3002\n\u3053\u308c\u3092\u907f\u3051\u308b\u3079\u304f\u3001\u5171\u6709\u3055\u308c\u5f97\u308bBigQuery StandardSQL\u306e\u898f\u7d04\u3092\u8a2d\u3051\u307e\u3057\u305f\u3002"),Object(c.b)("h2",{id:"\u76ee\u7684"},"\u76ee\u7684"),Object(c.b)("p",null,"\u30b3\u30fc\u30c9\u3092\u8aad\u307f\u3084\u3059\u304f\u3059\u308b\u3068\u3068\u3082\u306b\u3001SQL\u3067\u66f8\u304b\u308c\u305f\u5e45\u5e83\u3044\u30b3\u30fc\u30c9\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u4e00\u8cab\u3055\u305b\u308b\u3053\u3068\u3067\u3059\u3002"),Object(c.b)("p",null,"\u3053\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u898f\u7d04\u306b\u5408\u308f\u305b\u308b\u3053\u3068\u306f\u91cd\u8981\u3067\u3059\u304c\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4e2d\u3067\u4e00\u8cab\u6027\u3092\u4fdd\u3064\u3053\u3068\u306f\u3082\u3063\u3068\u91cd\u8981\u3067\u3059\u3002\u4e00\u756a\u91cd\u8981\u306a\u306e\u306f\u3001\u7279\u5b9a\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u3084\u95a2\u6570\u306e\u4e2d\u3067\u4e00\u8cab\u6027\u3092\u4fdd\u3064\u3053\u3068\u3067\u3059\u3002"),Object(c.b)("p",null,"\u3057\u304b\u3057\u3001\u4e00\u8cab\u6027\u3092\u5d29\u3059\u3079\u304d\u5834\u5408\u3082\u6709\u308a\u307e\u3059\u3002\u7591\u554f\u306b\u601d\u3063\u305f\u3068\u304d\u306f\u3001\u3042\u306a\u305f\u306e\u5224\u65ad\u3092\u512a\u5148\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u4ed6\u306e\u4f8b\u3092\u8abf\u3079\u3001\u4e00\u756a\u826f\u3055\u305d\u3046\u306a\u3082\u306e\u3092\u6c7a\u3081\u3066\u4e0b\u3055\u3044\u3002\u305d\u3057\u3066\u3001\u8e8a\u8e87\u305b\u305a\u306b\u8cea\u554f\u3057\u3066\u4e0b\u3055\u3044\uff01\u7279\u306b\u3001\u3053\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u898f\u7d04\u306b\u6e96\u62e0\u3059\u308b\u305f\u3081\u306b\u30b3\u30fc\u30c9\u306e\u5f8c\u65b9\u4e92\u63db\u6027\u3092\u58ca\u3059\u3088\u3046\u306a\u3053\u3068\u306f\u7d76\u5bfe\u306b\u3057\u306a\u3044\u3067\u4e0b\u3055\u3044\uff01"),Object(c.b)("h2",{id:"bigquery\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u898f\u7d04"},"BigQuery\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u898f\u7d04"),Object(c.b)("p",null,"\u539f\u5247BigQuery\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u6a5f\u80fd\u3092\u5229\u7528\u3057\u307e\u3059\u3002\n\u305d\u306e\u4e0a\u3067\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3067\u5f37\u5236\u3057\u3066\u304f\u308c\u306a\u3044\u90e8\u5206\u3092\u5dee\u5206\u3092\u4ee5\u4e0b\u306e\u898f\u7d04\u3067\u904b\u7528\u3057\u305f\u3044\u3067\u3059\u3002\n2020-07-02\u6642\u70b9\u3001",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/google/zetasql"}),"google/zetasql"),"\u3092\u4f7f\u3046\u3068\u30b3\u30e1\u30f3\u30c8\u3092\u6d88\u3057\u3066\u3057\u307e\u3046\u306e\u3067\u3001",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Matts966/zetasql-formatter"}),"Matts966/zetasql-formatter")," \u3092\u4f7f\u3044\u307e\u3057\u3087\u3046\u3002\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/na0fu3y/bqformat"}),"na0fu3y/bqformat"),"\u3082\u4f5c\u3063\u305f\u306e\u3067\u4f7f\u3063\u3066\u304f\u3060\u3055\u3044\u3002Matts966/zetasql-formatter\u3068\u7570\u306a\u308a\u3001\u30b3\u30e1\u30f3\u30c8\u306f\u6d88\u3048\u307e\u3059\u304c\u3001\u30a8\u30a4\u30ea\u30a2\u30b9\u304c\u9177\u3044\u3068\u5f3e\u3044\u3066\u304f\u308c\u308b\u6a5f\u80fd\u3092\u3064\u3051\u3066\u3044\u307e\u3059\u3002"),Object(c.b)("h3",{id:"\u30b3\u30e1\u30f3\u30c8\u3067\u59cb\u3081\u308b"},"\u30b3\u30e1\u30f3\u30c8\u3067\u59cb\u3081\u308b"),Object(c.b)("p",null,"\u30ea\u30fc\u30c0\u30d6\u30eb\u30b3\u30fc\u30c9\u306b\u300c\u512a\u308c\u305f\u30b3\u30fc\u30c9>\u3072\u3069\u3044\u30b3\u30fc\u30c9+\u512a\u308c\u305f\u30b3\u30e1\u30f3\u30c8\u300d\u3068\u3042\u308a\u307e\u3059\u304c\u3001SQL\u3067\u30b3\u30e1\u30f3\u30c8\u3068\u540c\u7b49\u4ee5\u4e0a\u306e\u60c5\u5831\u91cf\u3092\u6301\u3064\u30b3\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u306f\u56f0\u96e3\u3067\u3059\u3002SQL\u306f\u305d\u308c\u81ea\u4f53\u304cTable-valued function\u3067\u3059\u3002\u30c6\u30fc\u30d6\u30eb\u3092\u53d7\u3051\u3066\u30c6\u30fc\u30d6\u30eb\u3092\u8fd4\u3057\u307e\u3059\u3002\u5168\u529b\u3067\u30b3\u30e1\u30f3\u30c8\u3092\u66f8\u304d\u307e\u3057\u3087\u3046\u3002\n\u5171\u6709\u3055\u308c\u5f97\u308b\u3068\u3057\u307e\u3057\u305f\u304c\u3001SQL\u306f\u78ba\u5b9f\u306b\u540c\u3058\u30af\u30a8\u30ea\u30922\u56de\u4ee5\u4e0a\u53e9\u304d\u307e\u3059\u3057\u3001BigQuery Web UI\u304b\u3089\u8ffd\u3044\u3084\u3059\u304f\u306a\u308b\u610f\u5473\u3067\u3082\u3001\u539f\u5247\u30b3\u30e1\u30f3\u30c8\u3092\u3064\u3051\u308b\u610f\u8b58\u3067\u3059\u3002"),Object(c.b)("p",null,"\u300c\u4ed6\u306e\u4eba\uff08or\u6570\u30f6\u6708\u5f8c\u306e\u81ea\u5206\uff09\u300d\u304c\u6700\u77ed\u6642\u9593\u3067\u7406\u89e3\u3067\u304d\u308b\u3088\u3046\u306b\u30b3\u30e1\u30f3\u30c8\u3092\u66f8\u304d\u307e\u3057\u3087\u3046\u3002\n\u4f8b\u306f\u3001Google Python Style Guide \u3092\u53c2\u8003\u306b\u3001\u30b3\u30e1\u30f3\u30c8\u56f0\u96e3\u306a\u60c5\u5831\u306f\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u304b\u3089\u53c2\u7167\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u3066\u307e\u3059\u3002\uff08jinja\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u60f3\u5b9a\uff09"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"  -- \u5229\u7528\u8005\u3054\u3068\u306eRFM\u3092\u8a08\u7b97\u3059\u308b\n  --\n  --     Args:\n  --         transactions: \u8cfc\u5165\u5c65\u6b74(https://docs.google.com/spreadsheets/d/xxxxxxxx)\n  --             user_id (STRING): \u5229\u7528\u8005ID\n  --             date (TIMESTAMP): \u8cfc\u5165\u65e5\u6642\n  --             amount (INT64): \u8cfc\u5165\u7dcf\u984d\n  --\n  --     Returns:\n  --         rfm: RFM(https://docs.google.com/spreadsheets/d/yyyyyyyy)\n  --             user_id (STRING): \u5229\u7528\u8005ID\n  --             recency (TIMESTAMP): \u6700\u7d42\u8cfc\u5165\u65e5\u6642\n  --             frequency (INT64): \u8cfc\u5165\u56de\u6570\n  --             monetary (INT64): \u7d2f\u8a08\u8cfc\u5165\u91d1\u984d\nSELECT\n  user_id,\n  MAX(date) AS recency,\n  COUNT(*) AS frequency,\n  SUM(amount) AS monetary,\nFROM\n  {{ transaction }}\nGROUP BY\n  user_id\n")),Object(c.b)("h4",{id:"\u30b3\u30e1\u30f3\u30c8\u30c6\u30af\u30cb\u30c3\u30af"},"\u30b3\u30e1\u30f3\u30c8\u30c6\u30af\u30cb\u30c3\u30af"),Object(c.b)("p",null,"\u3053\u308c\u3089\u306e\u30bf\u30b0\u306e\u5229\u7528\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"TODO: \u3042\u3068\u3067\u624b\u3092\u4ed8\u3051\u308b\nFIXME: \u65e2\u77e5\u306e\u4e0d\u5177\u5408\u304c\u3042\u308b\u30b3\u30fc\u30c9\nHACK: \u3042\u307e\u308a\u30ad\u30ec\u30a4\u3058\u3083\u306a\u3044\u89e3\u6c7a\u7b56\nXXX: \u5371\u967a\uff01\u5927\u304d\u306a\u554f\u984c\u304c\u3042\u308b\n")),Object(c.b)("h3",{id:"legacysql-vs-standardsql"},"LegacySQL vs StandardSQL"),Object(c.b)("p",null,"StandardSQL\u3067\u3059\u3002LegacySQL\u306f\u7981\u6b62\u3067\u3059\u3002"),Object(c.b)("h3",{id:"\u5927\u6587\u5b57\u3068\u5c0f\u6587\u5b57\u306e\u4f7f\u3044\u5206\u3051"},"\u5927\u6587\u5b57\u3068\u5c0f\u6587\u5b57\u306e\u4f7f\u3044\u5206\u3051"),Object(c.b)("p",null,"\u30ad\u30fc\u30ef\u30fc\u30c9\uff08\u4e88\u7d04\u8a9e\uff09\u3068\u95a2\u6570\u540d\u306f\u5927\u6587\u5b57\u3001\u30c6\u30fc\u30d6\u30eb\u540d\u3084\u5217\u540d\u306f\u5c0f\u6587\u5b57\u3067\u3059\u3002"),Object(c.b)("h3",{id:"\u6700\u5f8c\u306e\u5217\u306e\u30ab\u30f3\u30de"},"\u6700\u5f8c\u306e\u5217\u306e\u30ab\u30f3\u30de"),Object(c.b)("p",null,"\u6700\u5f8c\u306e\u5217\u306b\u3082\u30ab\u30f3\u30de\u3092\u3064\u3051\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002\nGitHub\u306ediff\u306f\u884c\u5358\u4f4d\u306e\u305f\u3081\u3001\u3064\u3051\u3066\u304a\u304f\u3068\u4f59\u8a08\u306a\u884c\u306e\u5909\u66f4\u304c\u8d70\u3089\u306a\u304f\u3066\u6e08\u307f\u307e\u3059\u3002"),Object(c.b)("h3",{id:"\u30a8\u30a4\u30ea\u30a2\u30b9\u306eas\u53e5"},"\u30a8\u30a4\u30ea\u30a2\u30b9\u306eAS\u53e5"),Object(c.b)("p",null,"\u7701\u7565\u3057\u307e\u305b\u3093\u3002"),Object(c.b)("h3",{id:"join\u306eouter"},"JOIN\u306eOUTER"),Object(c.b)("p",null,"\u7701\u7565\u3057\u307e\u3059\u3002"),Object(c.b)("h3",{id:"2\u9805\u6f14\u7b97\u5b50"},"2\u9805\u6f14\u7b97\u5b50"),Object(c.b)("p",null,"\u524d\u5f8c\u306b\u30b9\u30da\u30fc\u30b9\u3067\u3059\u3002"),Object(c.b)("h3",{id:"\u6587\u5b57\u5217"},"\u6587\u5b57\u5217"),Object(c.b)("p",null,"\u30c0\u30d6\u30eb\u30af\u30a9\u30fc\u30c8",Object(c.b)("inlineCode",{parentName:"p"},'""'),"\u3067\u3059\u3002\u30b7\u30f3\u30b0\u30eb\u30af\u30a9\u30fc\u30c8",Object(c.b)("inlineCode",{parentName:"p"},"''"),"\u306f\u975e\u63a8\u5968\u3068\u3057\u307e\u3059\u3002\n\u30ab\u30f3\u30de\u533a\u5207\u308a\u306b\u3057\u305f\u3044\u6642",Object(c.b)("inlineCode",{parentName:"p"},'format("%\'d", hoge)'),"\u304c\u4f7f\u3044\u306b\u304f\u3044\u305f\u3081\u3067\u3059\u3002"),Object(c.b)("h3",{id:"\u30b3\u30e1\u30f3\u30c8"},"\u30b3\u30e1\u30f3\u30c8"),Object(c.b)("h4",{id:"\u5358\u4e00\u884c\u30b3\u30e1\u30f3\u30c8"},"\u5358\u4e00\u884c\u30b3\u30e1\u30f3\u30c8"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"--"),"\u3067\u3059\u3002",Object(c.b)("inlineCode",{parentName:"p"},"#"),"\u306f\u975e\u63a8\u5968\u3068\u3057\u307e\u3059\u3002"),Object(c.b)("h4",{id:"\u8907\u6570\u884c\u30b3\u30e1\u30f3\u30c8"},"\u8907\u6570\u884c\u30b3\u30e1\u30f3\u30c8"),Object(c.b)("p",null,"\u3053\u308c\u4ee5\u5916\u306b\u9078\u629e\u80a2\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u884c\u982d\u3092\u63c3\u3048\u307e\u3057\u3087\u3046\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"/* \u30c7\u30fc\u30bf\u524d\u51e6\u7406\u7528\u306e\u30af\u30a8\u30ea\u3002\n * - \u8a95\u751f\u65e5\u304c\u672a\u6765\u306e\u5834\u5408 NULL \u306b\u7f6e\u63db\u3059\u308b\n */\n")),Object(c.b)("h3",{id:"\u6539\u884c"},"\u6539\u884c"),Object(c.b)("p",null,"\u53ef\u8aad\u6027\u306b\u5bc4\u4e0e\u3057\u306a\u3044\u6539\u884c\u306f\u907f\u3051\u307e\u3057\u3087\u3046\u3002STRUCT\u3084ARRAY\u3001IF\u3067\u767a\u751f\u3057\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  value, expected\nFROM\n  UNNEST([STRUCT<value INT64, expected INT64> (1,\n      1), (2,\n      4), (3,\n      9)])\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sql"}),"SELECT\n  value, expected\nFROM\n  UNNEST([STRUCT<value INT64, expected INT64>\n    (1, 1),\n    (2, 4),\n    (3, 9)])\n")),Object(c.b)("h3",{id:"\u30b5\u30d6\u30af\u30a8\u30ea"},"\u30b5\u30d6\u30af\u30a8\u30ea"),Object(c.b)("p",null,"\u30b5\u30d6\u30af\u30a8\u30ea\u3088\u308a\u306fWITH\u53e5\u3067\u9069\u5207\u306b\u540d\u524d\u3092\u3064\u3051\u3066\u7406\u89e3\u3092\u4fc3\u9032\u3057\u307e\u3057\u3087\u3046\u3002\n6\u884c\u4ee5\u4e0a\u306e\u30b5\u30d6\u30af\u30a8\u30ea\u306f\u907f\u3051\u3001\u4f7f\u3046\u5834\u5408\u3082\u30b5\u30d6\u30af\u30a8\u30ea\u306e\u7d50\u679c\u3092\u81ea\u7136\u8a00\u8a9e\u3067\u30b3\u30e1\u30f3\u30c8\u3059\u308b\u3002\n\u518d\u5229\u7528\u6027\u306e\u9ad8\u3044\u3082\u306e\u306a\u3089WITH\u53e5\u3092\u4f5c\u308b\u3088\u308a\u3001VIEW\u3084\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002"),Object(c.b)("p",null,"tmp\u3084retval\u306a\u3069\u306e\u6c4e\u7528\u7684\u306a\u540d\u524d\u3092\u907f\u3051\u3001\u660e\u78ba\u306a\u5358\u8a9e\u3092\u9078\u3073\u307e\u3057\u3087\u3046\u3002\n\u7279\u306b\u3001\u5909\u6570\u306e\u610f\u5473\u3092\u8aa4\u3063\u3066\u89e3\u91c8\u3057\u30d0\u30b0\u306b\u306a\u308a\u305d\u3046\u306a\u3068\u3053\u308d\u3067\u306f\u3001\u540d\u524d\u306b\u5358\u4f4d\u3092\u3064\u3051\u305f\u308a\u3001\u30b3\u30e1\u30f3\u30c8\u60c5\u5831\u91cf\u306e\u5927\u304d\u3044\u540d\u524d\u3092\u3064\u3051\u307e\u3057\u3087\u3046\u3002"),Object(c.b)("h3",{id:"\u30c6\u30fc\u30d6\u30eb\u30a8\u30a4\u30ea\u30a2\u30b9"},"\u30c6\u30fc\u30d6\u30eb\u30a8\u30a4\u30ea\u30a2\u30b9"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u30c6\u30fc\u30d6\u30eb\u540d\u304c8\u6587\u5b57\u4ee5\u4e0b\u306e\u5834\u5408\u306f\u3001\u30c6\u30fc\u30d6\u30eb\u540d\u3092\u305d\u306e\u307e\u307e\u4f7f\u3046\u3002"),Object(c.b)("li",{parentName:"ul"},"\u30c6\u30fc\u30d6\u30eb\u540d\u304c8\u6587\u5b57\u3092\u8d85\u3048\u308b\u5834\u5408\u306f\u3001\u30a8\u30a4\u30ea\u30a2\u30b9\u3092\u8cbc\u308b\u3002"),Object(c.b)("li",{parentName:"ul"},"\u81ea\u5df1\u7d50\u5408\u306e\u5834\u5408\u306b\u306f\u3001\u610f\u5473\u3092\u30a8\u30a4\u30ea\u30a2\u30b9\u306b\u8fbc\u3081\u308b\u3002"),Object(c.b)("li",{parentName:"ul"},"\u30c1\u30fc\u30e0\u5185\u3067\u3082\u3001\u305d\u306e\u30c6\u30fc\u30d6\u30eb\u306b\u3064\u3044\u3066\u4f1a\u8a71\u3059\u308b\u3068\u304d\u306f\u3042\u3048\u3066\u7a4d\u6975\u7684\u306b\u305d\u306e\u7701\u7565\u540d\u3092\u4f7f\u3046"),Object(c.b)("li",{parentName:"ul"},"\u4e00\u822c\u7684\u3067\u306a\u3044\u30c6\u30fc\u30d6\u30eb\u306b\u3064\u3044\u3066\u306f\u3001\u5f53\u8a72SQL\u5185\u3067\u306e\u30b3\u30f3\u30c6\u30af\u30b9\u30c8\u3092\u3082\u3068\u306b\u547d\u540d\u3059\u308b"),Object(c.b)("li",{parentName:"ul"},"JOIN\u306e\u57fa\u790e\u306b\u306a\u308b\u30c6\u30fc\u30d6\u30eb\u306b\u3064\u3044\u3066\u306f",Object(c.b)("inlineCode",{parentName:"li"},"base"),"\u3068\u547d\u540d\u3059\u308b"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"base"),"\u306b\u60c5\u5831\u3092\u4ed8\u52a0\u3059\u308b\u3082\u306e\u306b\u3064\u3044\u3066\u306f",Object(c.b)("inlineCode",{parentName:"li"},"hoge_info"),", ",Object(c.b)("inlineCode",{parentName:"li"},"fuga_info"),"\u3068\u547d\u540d\u3059\u308b")),Object(c.b)("h3",{id:"timezone"},"TIMEZONE"),Object(c.b)("p",null,"TIMESTAMP\u3092\u63a8\u5968\u3057\u307e\u3059\u3002\u975e\u63a8\u5968\u3067\u3059\u304cDATETIME\u3092\u4f7f\u3046\u5834\u5408\u3001\u6697\u9ed9\u7684JST\u3067\u3059\u3002"),Object(c.b)("h3",{id:"\u4ed6\u306erdbms\u306e\u4e92\u63db\u6027"},"\u4ed6\u306eRDBMS\u306e\u4e92\u63db\u6027"),Object(c.b)("p",null,"IFNULL\u3001\u30c7\u30fc\u30bf\u30c1\u30a7\u30c3\u30af\u306fERROR\u306a\u3069\u3001ML.QUANTILE_BUCKETIZE\u306a\u3069BigQuery\u306a\u3089\u3067\u306f\u306e\u95a2\u6570\u304c\u3042\u308a\u3001\u898b\u3084\u3059\u3055\u3082\u901f\u5ea6\u3082\u4e0a\u3067\u3059\u3002\u4e92\u63db\u6027\u306e\u305f\u3081\u306b\u53ef\u8aad\u6027\u3084\u54c1\u8cea\u4fdd\u6301\u901f\u5ea6\u3092\u843d\u3068\u3055\u306a\u3044\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),Object(c.b)("h3",{id:"\u30c6\u30fc\u30d6\u30eb\u547d\u540d\u898f\u7d04"},"\u30c6\u30fc\u30d6\u30eb\u547d\u540d\u898f\u7d04"),Object(c.b)("h4",{id:"\u540c\u6642\u306b\u898b\u305f\u3044\u610f\u5473\u30b0\u30eb\u30fc\u30d7\u9806\u306b\u30d7\u30ec\u30d5\u30a3\u30af\u30b9\u3092\u3064\u3051\u308b"},"\u540c\u6642\u306b\u898b\u305f\u3044\u610f\u5473\u30b0\u30eb\u30fc\u30d7\u9806\u306b\u30d7\u30ec\u30d5\u30a3\u30af\u30b9\u3092\u3064\u3051\u308b"),Object(c.b)("p",null,"\u540c\u6642\u306b\u4f7f\u3046\u7269\u306b\u30d7\u30ec\u30d5\u30a3\u30af\u30b9\u3092\u3064\u3051\u3066\u3001\u30a6\u30a7\u30d6UI\u306e\u53ef\u8aad\u6027\u3092\u5411\u4e0a\u3055\u305b\u307e\u3059\u3002\u540c\u3058\u578b\u3060\u304b\u3089\u601d\u8003\u505c\u6b62\u7684\u306b\u30d7\u30ec\u30d5\u30a3\u30af\u30b9\u3092\u3064\u3051\u308b\u306e\u306f\u975e\u63a8\u5968\u3002"),Object(c.b)("h4",{id:"\u30a6\u30a7\u30d6ui\u3067\u307e\u3068\u3081\u3066\u304f\u308c\u308byyyymmdd\u30b5\u30d5\u30a3\u30af\u30b9\u3092\u3064\u3051\u308b"},"\u30a6\u30a7\u30d6UI\u3067\u307e\u3068\u3081\u3066\u304f\u308c\u308b",Object(c.b)("inlineCode",{parentName:"h4"},"yyyyMMdd"),"\u30b5\u30d5\u30a3\u30af\u30b9\u3092\u3064\u3051\u308b"),Object(c.b)("p",null,"\u65e5\u5225\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u30c6\u30fc\u30d6\u30eb\u4f5c\u308b\u3068\u304d\u306f",Object(c.b)("inlineCode",{parentName:"p"},"_yyyyMMdd"),"\u3067\u3059\u3002",Object(c.b)("inlineCode",{parentName:"p"},"_yyMMdd"),"\u306f\u7981\u6b62\u3002"),Object(c.b)("h3",{id:"\u30af\u30a8\u30ea\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u306f\u9069\u5207\u306b"},"\u30af\u30a8\u30ea\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0\u306f\u9069\u5207\u306b"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.google.com/bigquery/docs/best-practices-performance-overview"}),"BigQuery \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\uff1a\u30af\u30a8\u30ea \u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u6700\u9069\u5316\u306e\u6982\u8981")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://qiita.com/na0/items/2b58237cae08a217e3a7"}),"Qiita\uff1a\u5b89\u3044\u901f\u3044\u65e8\u3044 BigQuery \u306e 18 \u306e\u6700\u9069\u5316\u6cd5"))),Object(c.b)("h3",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://techlife.cookpad.com/entry/2016/11/09/000033"}),"\u30af\u30c3\u30af\u30d1\u30c3\u30c9\u958b\u767a\u8005\u30d6\u30ed\u30b0\uff1a\u5206\u6790SQL\u306e\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://qiita.com/piyoSakai/items/e1b97366ca5940dad517"}),"Qiita\uff1aBigquery\u6642\u4ee3\u306b\u304a\u3051\u308b\u3001\u5206\u6790SQL\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb\u306e\u63d0\u5531"))))}d.isMDXComponent=!0},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),o=d(n),O=r,j=o["".concat(b,".").concat(O)]||o[O]||p[O]||c;return n?a.a.createElement(j,i(i({ref:t},u),{},{components:n})):a.a.createElement(j,i({ref:t},u))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var u=2;u<c;u++)b[u]=n[u];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);