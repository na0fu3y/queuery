(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{208:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var b=a(2),r=a(9),n=(a(0),a(215)),c={id:"bigquery-access-controls",title:"BigQuery \u30a2\u30af\u30bb\u30b9\u6a29\u8a2d\u5b9a",sidebar_label:"\u30a2\u30af\u30bb\u30b9\u6a29\u8a2d\u5b9a"},l={id:"bigquery-access-controls",isDocsHomePage:!1,title:"BigQuery \u30a2\u30af\u30bb\u30b9\u6a29\u8a2d\u5b9a",description:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u5b9a\u65b9\u6cd5",source:"@site/docs/bigquery-access-controls.md",permalink:"/docs/bigquery-access-controls",editUrl:"https://github.com/na0fu3y/queuery/edit/master/docs/bigquery-access-controls.md",lastUpdatedAt:1593521337,sidebar_label:"\u30a2\u30af\u30bb\u30b9\u6a29\u8a2d\u5b9a",sidebar:"someSidebar",previous:{title:"BigQuery\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30bf\u30a4\u30eb",permalink:"/docs/bigquery-style-guide"},next:{title:"BigQuery \u30b0\u30eb\u30fc\u30d7\u8a2d\u8a08\u4f8b",permalink:"/docs/bigquery-access-controls-groups"}},i=[{value:"\u30e1\u30f3\u30d0\u30fc\u306f Google \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u7b46\u982d\u306b 5 \u7a2e\u985e",id:"\u30e1\u30f3\u30d0\u30fc\u306f-google-\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u7b46\u982d\u306b-5-\u7a2e\u985e",children:[]},{value:"\u5bfe\u8c61\u30ec\u30a4\u30e4\u306e\u8a2d\u5b9a\u306f Cloud IAM\u3001\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3001Table access controls\u3001\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc\u3001\u5217\u30ec\u30d9\u30eb\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3001Cloud IAM Conditions \u306e 6 \u7a2e\u985e",id:"\u5bfe\u8c61\u30ec\u30a4\u30e4\u306e\u8a2d\u5b9a\u306f-cloud-iam\u3001\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3001table-access-controls\u3001\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc\u3001\u5217\u30ec\u30d9\u30eb\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3001cloud-iam-conditions-\u306e-6-\u7a2e\u985e",children:[{value:"Cloud IAM",id:"cloud-iam",children:[]},{value:"\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8",id:"\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8",children:[]},{value:"table access controls",id:"table-access-controls",children:[]},{value:"\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc",id:"\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc",children:[]},{value:"\u5217\u30ec\u30d9\u30eb\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",id:"\u5217\u30ec\u30d9\u30eb\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3",children:[]},{value:"Cloud IAM Conditions",id:"cloud-iam-conditions",children:[]}]},{value:"\u6a29\u9650\u306f\u5927\u304d\u304f 9 \u7a2e\u985e",id:"\u6a29\u9650\u306f\u5927\u304d\u304f-9-\u7a2e\u985e",children:[{value:"\u30b8\u30e7\u30d6\uff08\u30af\u30a8\u30ea\u3092\u542b\u3080\uff09",id:"\u30b8\u30e7\u30d6\uff08\u30af\u30a8\u30ea\u3092\u542b\u3080\uff09",children:[]},{value:"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8",id:"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8",children:[]},{value:"\u30c6\u30fc\u30d6\u30eb",id:"\u30c6\u30fc\u30d6\u30eb",children:[]},{value:"\u95a2\u6570\u3068\u30b9\u30c8\u30a2\u30c9 \u30d7\u30ed\u30b7\u30fc\u30b8\u30e3",id:"\u95a2\u6570\u3068\u30b9\u30c8\u30a2\u30c9-\u30d7\u30ed\u30b7\u30fc\u30b8\u30e3",children:[]},{value:"BigQuery Data Transfer Service",id:"bigquery-data-transfer-service",children:[]},{value:"\u4fdd\u5b58\u3057\u305f\u30af\u30a8\u30ea",id:"\u4fdd\u5b58\u3057\u305f\u30af\u30a8\u30ea",children:[]},{value:"Storage API",id:"storage-api",children:[]},{value:"\u5916\u90e8\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9",id:"\u5916\u90e8\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9",children:[]},{value:"Reservations",id:"reservations",children:[]}]}],O={rightToc:i};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(b.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u5b9a\u65b9\u6cd5"},"\u30a2\u30af\u30bb\u30b9\u6a29\u306e\u8a2d\u5b9a\u65b9\u6cd5"),Object(n.b)("p",null,"BigQuery \u30ea\u30bd\u30fc\u30b9\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u8a2d\u5b9a\u306b\u3042\u305f\u308a\u3001\u899a\u3048\u3066\u304a\u304f\u8ef8\u306f 3 \u3064\u3067\u3059\u3002\n\u5177\u4f53\u7684\u306a\u4eba\u9593\u3084\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u793a\u3059 ",Object(n.b)("inlineCode",{parentName:"p"},"\u30e1\u30f3\u30d0\u30fc"),"\u3001\u6a29\u9650\u7bc4\u56f2\u306e\u5bfe\u8c61\uff08\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3084\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\uff09\u3092\u793a\u3059 ",Object(n.b)("inlineCode",{parentName:"p"},"\u5bfe\u8c61\u30ec\u30a4\u30e4"),"\u3001\u5177\u4f53\u7684\u306a\u500b\u3005\u306e ",Object(n.b)("inlineCode",{parentName:"p"},"\u6a29\u9650"),"\u3001\u3053\u308c\u3089\u3092\u304a\u3055\u3048\u3066\u304a\u3051\u3070\u3001BigQuery \u306e\u6a29\u9650\u8a2d\u5b9a\u306f\u5b89\u5fc3\u3067\u3059\u3002"),Object(n.b)("h2",{id:"\u30e1\u30f3\u30d0\u30fc\u306f-google-\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u7b46\u982d\u306b-5-\u7a2e\u985e"},"\u30e1\u30f3\u30d0\u30fc\u306f Google \u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u7b46\u982d\u306b 5 \u7a2e\u985e"),Object(n.b)("p",null,"\u4ee5\u4e0b\u306e\u30e1\u30f3\u30d0\u30fc\u306b\u5bfe\u3057\u3066\u500b\u5225\u306b\u5f79\u5272\u3092\u632f\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30b0\u30eb\u30fc\u30d7\u3084\u30c9\u30e1\u30a4\u30f3\u306f\u81ea\u7531\u306b\u4f5c\u6210\u304c\u53ef\u80fd\u3067\u3059\u3002"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Google \u30a2\u30ab\u30a6\u30f3\u30c8"),Object(n.b)("li",{parentName:"ul"},"\u30b5\u30fc\u30d3\u30b9 \u30a2\u30ab\u30a6\u30f3\u30c8"),Object(n.b)("li",{parentName:"ul"},"Google \u30b0\u30eb\u30fc\u30d7"),Object(n.b)("li",{parentName:"ul"},"G Suite \u30c9\u30e1\u30a4\u30f3"),Object(n.b)("li",{parentName:"ul"},"Cloud Identity \u30c9\u30e1\u30a4\u30f3")),Object(n.b)("p",null,"\u307e\u305f\u3053\u308c\u3089\u306e\u8a8d\u8a3c\u3092\u6301\u3064\u5168\u5229\u7528\u8005\u3092\u793a\u3059 ",Object(n.b)("inlineCode",{parentName:"p"},"allAuthenticatedUsers")," \u3068\u5168\u5229\u7528\u8005 ",Object(n.b)("inlineCode",{parentName:"p"},"allUsers")," \u306e\u30b0\u30eb\u30fc\u30d7\u304c\u5b58\u5728\u3057\u307e\u3059\u3002"),Object(n.b)("h2",{id:"\u5bfe\u8c61\u30ec\u30a4\u30e4\u306e\u8a2d\u5b9a\u306f-cloud-iam\u3001\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3001table-access-controls\u3001\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc\u3001\u5217\u30ec\u30d9\u30eb\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3001cloud-iam-conditions-\u306e-6-\u7a2e\u985e"},"\u5bfe\u8c61\u30ec\u30a4\u30e4\u306e\u8a2d\u5b9a\u306f Cloud IAM\u3001\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3001Table access controls\u3001\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc\u3001\u5217\u30ec\u30d9\u30eb\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3001Cloud IAM Conditions \u306e 6 \u7a2e\u985e"),Object(n.b)("p",null,"\u7d44\u7e54\u30ec\u30d9\u30eb\u304a\u3088\u3073\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3057\u3066\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4ed8\u4e0e\u3059\u308b\u969b\u306b ",Object(n.b)("inlineCode",{parentName:"p"},"Cloud IAM")," \u3092\u3001\n\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306b\u5bfe\u3057\u3066\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4ed8\u4e0e\u3059\u308b\u969b\u306b ",Object(n.b)("inlineCode",{parentName:"p"},"\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8")," \u3092\u3001\n\u30c6\u30fc\u30d6\u30eb\u306b\u5bfe\u3057\u3066\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4ed8\u4e0e\u3059\u308b\u969b\u306b ",Object(n.b)("inlineCode",{parentName:"p"},"table access controls")," \u3092\u3001\n\u30c6\u30fc\u30d6\u30eb\u3084\u30d3\u30e5\u30fc\u4ee5\u4e0b\u306e\u5358\u4f4d\u306b\u5bfe\u3057\u3066\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4ed8\u4e0e\u3059\u308b\u969b\u306b ",Object(n.b)("inlineCode",{parentName:"p"},"\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc")," \u3092\u3001\n\u30c6\u30fc\u30d6\u30eb\u306e\u5217\u306e\u5358\u4f4d\u306b\u5bfe\u3057\u3066\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4ed8\u4e0e\u3059\u308b\u969b\u306b ",Object(n.b)("inlineCode",{parentName:"p"},"\u5217\u30ec\u30d9\u30eb\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3")," \u3092\u3001\n\u5b9f\u884c\u6642\u306e\u6761\u4ef6\u306b\u5bfe\u3057\u3066\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4ed8\u4e0e\u3059\u308b\u969b\u306b ",Object(n.b)("inlineCode",{parentName:"p"},"Cloud IAM Conditions")," \u3092\u4f7f\u3044\u307e\u3059\u3002"),Object(n.b)("p",null,"\u3053\u308c\u3060\u3051\u899a\u3048\u3066\u304a\u3051\u3070\u3001\u3042\u3068\u306f\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9\u3092\u898b\u306a\u304c\u3089\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"),Object(n.b)("h3",{id:"cloud-iam"},Object(n.b)("a",Object(b.a)({parentName:"h3"},{href:"https://cloud.google.com/iam/docs/overview"}),"Cloud IAM")),Object(n.b)("p",null,"Cloud IAM \u306f\u4e0a\u8a18 5 \u7a2e\u985e\u306e\u30e1\u30f3\u30d0\u30fc\u306b\u5bfe\u3057\u3066\u3001\u7d44\u7e54\u30ec\u30d9\u30eb\u304a\u3088\u3073\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30ec\u30d9\u30eb\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002"),Object(n.b)("h3",{id:"\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8"},Object(n.b)("a",Object(b.a)({parentName:"h3"},{href:"https://cloud.google.com/bigquery/docs/dataset-access-controls"}),"\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8")),Object(n.b)("p",null,"\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306f\u30e1\u30f3\u30d0\u30fc\u306b\u5bfe\u3057\u3066\u3001\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u30ec\u30d9\u30eb\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002\n\u8a2d\u5b9a\u306f\u3001\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u8a73\u7d30\u304b\u3089\u3001\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u9078\u629e\u3059\u308b\u3068 Cloud IAM \u3068\u540c\u3058\u30a2\u30af\u30bb\u30b9\u6a29\u9650\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(n.b)("h3",{id:"table-access-controls"},Object(n.b)("a",Object(b.a)({parentName:"h3"},{href:"https://cloud.google.com/bigquery/docs/table-access-controls-intro"}),"table access controls")),Object(n.b)("p",null,"table access controls\u306f\u30e1\u30f3\u30d0\u306b\u5bfe\u3057\u3066\u3001\u30c6\u30fc\u30d6\u30eb\u30ec\u30d9\u30eb\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u4ed8\u4e0e\u3057\u307e\u3059\u3002\n\u8a2d\u5b9a\u306f\u3001\u30c6\u30fc\u30d6\u30eb\u306e\u8a73\u7d30\u304b\u3089\u3001\u30c6\u30fc\u30d6\u30eb\u306e\u6a29\u9650\u3092\u9078\u629e\u3059\u308b\u3068 Cloud IAM \u3068\u540c\u3058\u30a2\u30af\u30bb\u30b9\u6a29\u9650\u8a2d\u5b9a\u3092\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(n.b)("h3",{id:"\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc"},Object(n.b)("a",Object(b.a)({parentName:"h3"},{href:"https://cloud.google.com/bigquery/docs/authorized-views"}),"\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc")),Object(n.b)("p",null,"\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc\u306f\u30e1\u30f3\u30d0\u30fc\u306b\u5bfe\u3057\u3066\u3001\u30c6\u30fc\u30d6\u30eb\u3084\u3001\u5217\u3001\u884c\u30ec\u30d9\u30eb\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\uff08\u7591\u4f3c\u7684\u306b\uff09\u4ed8\u4e0e\u3057\u307e\u3059\u3002\n\u53c2\u7167\u5143\u306e\u30c6\u30fc\u30d6\u30eb\u3078\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u304c\u306a\u3044\u30e6\u30fc\u30b6\u30fc\u306b\u3082\u5171\u6709\u3067\u304d\u3001SESSION_USER \u95a2\u6570\u3092\u7528\u3044\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u3054\u3068\u306e\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3067\u304d\u308b\u5217\u3092\u5236\u9650\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002\n\u8a2d\u5b9a\u306f\u3001\u5171\u6709\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u304b\u3089\u3001\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u6a29\u9650\u3001\u627f\u8a8d\u6e08\u307f\u306e\u30d3\u30e5\u30fc\u3068\u9032\u3081\u307e\u3059\u3002"),Object(n.b)("h3",{id:"\u5217\u30ec\u30d9\u30eb\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3"},Object(n.b)("a",Object(b.a)({parentName:"h3"},{href:"https://cloud.google.com/bigquery/docs/column-level-security-intro"}),"\u5217\u30ec\u30d9\u30eb\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3")),Object(n.b)("p",null,"\u5217\u30ec\u30d9\u30eb\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306f\u3001\u5217\u3054\u3068\u306b 1 \u3064\u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002\n\u4e88\u3081\u4eba\u3054\u3068\u306b\u30a2\u30af\u30bb\u30b9\u6a29\u30ec\u30d9\u30eb\u3092\u632f\u3063\u3066\u304a\u304d\u3001\u5217\u30a2\u30af\u30bb\u30b9\u3092\u5236\u9650\u3057\u305f\u3044\u3068\u304d\u306b\u4f7f\u3048\u307e\u3059\u3002\n\u627f\u8a8d\u6e08\u307f\u30d3\u30e5\u30fc\u3088\u308a\u3082\u9759\u7684\u306a\u8a2d\u5b9a\u306b\u5411\u3044\u3066\u3044\u308b\u3088\u3046\u306b\u898b\u3048\u307e\u3059\u3002\n\u8a2d\u5b9a\u306f\u3001\u30c6\u30fc\u30d6\u30eb\u304b\u3089\u30b9\u30ad\u30fc\u30de\u3092\u7de8\u96c6\u306b\u884c\u304f\u3068\u3001\u30dd\u30ea\u30b7\u30fc\u30bf\u30b0\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002"),Object(n.b)("h3",{id:"cloud-iam-conditions"},Object(n.b)("a",Object(b.a)({parentName:"h3"},{href:"https://cloud.google.com/iam/docs/conditions-overview"}),"Cloud IAM Conditions")),Object(n.b)("p",null,"Cloud IAM Conditions \u306f Cloud IAM \u306e\u30a2\u30af\u30bb\u30b9\u6a29\u3092 ",Object(n.b)("inlineCode",{parentName:"p"},"\u5b9f\u884c\u6642\u306e\u72b6\u614b")," \u306b\u3088\u3063\u3066\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5bfe\u8c61\u30c6\u30fc\u30d6\u30eb\u540d\u3084\u5b9f\u884c\u6642\u9593\u306a\u3069\u306b\u3088\u3063\u3066\u3001\u6a29\u9650\u3092\u5236\u9650\u3067\u304d\u307e\u3059\u3002\u7d42\u4e86\u304c\u660e\u78ba\u306a\u5834\u5408\u306e\u6a29\u9650\u5265\u596a\u6f0f\u308c\u3084\u3001\u5b9a\u6642\u5185\u306e\u307f\u5b9f\u884c\u53ef\u80fd\u306a\u6a29\u9650\u3092\u7528\u610f\u3057\u3066\u30db\u30ef\u30a4\u30c8\u4f01\u696d\u6f14\u51fa\u306b\u6d3b\u7528\u3067\u304d\u307e\u3059\u3002\n\u9650\u5b9a\u516c\u958b\u30d9\u30fc\u30bf\u7248\u306e\u305f\u3081\u3001Cloud IAM Conditions \u306e\u7533\u8acb\u3092\u3057\u305f\u4e0a\u3067\u3001Cloud IAM \u304b\u3089\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),Object(n.b)("h2",{id:"\u6a29\u9650\u306f\u5927\u304d\u304f-9-\u7a2e\u985e"},"\u6a29\u9650\u306f\u5927\u304d\u304f 9 \u7a2e\u985e"),Object(n.b)("p",null,Object(n.b)("a",Object(b.a)({parentName:"p"},{href:"https://cloud.google.com/bigquery/docs/access-control"}),"\u4e8b\u524d\u5b9a\u7fa9\u3055\u308c\u305f\u5f79\u5272\u3068\u6a29\u9650")," \u3092\u53c2\u8003\u306b\u8aac\u660e\u3092\u3064\u3051\u3066 BigQuery \u3067\u4f7f\u7528\u53ef\u80fd\u306a\u6a29\u9650\u3092\u8a18\u8f09\u3057\u307e\u3059\u3002"),Object(n.b)("h3",{id:"\u30b8\u30e7\u30d6\uff08\u30af\u30a8\u30ea\u3092\u542b\u3080\uff09"},"\u30b8\u30e7\u30d6\uff08\u30af\u30a8\u30ea\u3092\u542b\u3080\uff09"),Object(n.b)("p",null,"\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3057\u305f\u308a\u3001\u30c7\u30fc\u30bf\u3092\u30b3\u30d4\u30fc\u3057\u305f\u308a\u3001BigQuery \u306e\u3042\u3089\u3086\u308b\u5b9f\u884c\u6a29\u9650\u3092\u62c5\u3044\u307e\u3059\u3002\n\u9006\u306b\u8a00\u3048\u3070\u3001\u3053\u308c\u3089\u306e\u6a29\u9650\u3092\u4e0e\u3048\u306a\u3051\u308c\u3070\u3001\u305d\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u914d\u4e0b\u3067\u4e00\u5207\u306e\u30b8\u30e7\u30d6\u3092\u8d70\u3089\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6a29\u9650"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.jobs.create"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u65b0\u3057\u3044\u30b8\u30e7\u30d6\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.jobs.listAll"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u3059\u3079\u3066\u306e\u30b8\u30e7\u30d6\u3092\u4e00\u89a7\u8868\u793a\u3057\u3001\u3042\u3089\u3086\u308b\u30e6\u30fc\u30b6\u30fc\u304c\u9001\u4fe1\u3057\u305f\u3042\u3089\u3086\u308b\u30b8\u30e7\u30d6\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.jobs.list"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u3059\u3079\u3066\u306e\u30b8\u30e7\u30d6\u3092\u4e00\u89a7\u8868\u793a\u3057\u3001\u3042\u3089\u3086\u308b\u30e6\u30fc\u30b6\u30fc\u304c\u9001\u4fe1\u3057\u305f\u3042\u3089\u3086\u308b\u30b8\u30e7\u30d6\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u304c\u9001\u4fe1\u3057\u305f\u30b8\u30e7\u30d6\u306b\u3064\u3044\u3066\u306f\u3001\u8a73\u7d30\u3068\u30e1\u30bf\u30c7\u30fc\u30bf\u304c\u524a\u9664\u3055\u308c\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.jobs.get"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30b8\u30e7\u30d6\u306e\u30c7\u30fc\u30bf\u3068\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.jobs.update"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30b8\u30e7\u30d6\u3092\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3059\u3002\u30b8\u30e7\u30d6\u3092\u4f5c\u6210\u3059\u308b\u3068\u3001\u30b8\u30e7\u30d6\u306e\u4f5c\u6210\u8005\u306b\u3001\u305d\u306e\u30b8\u30e7\u30d6\u306e bigquery.jobs.get \u6a29\u9650\u304a\u3088\u3073 bigquery.jobs.update \u6a29\u9650\u306b\u76f8\u5f53\u3059\u308b\u6a29\u9650\u304c\u81ea\u52d5\u7684\u306b\u4ed8\u4e0e\u3055\u308c\u307e\u3059\u3002")))),Object(n.b)("h3",{id:"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8"},"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8"),Object(n.b)("p",null,"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e CRUD \u306b\u95a2\u3059\u308b\u6a29\u9650\u3067\u3059\u3002"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6a29\u9650"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.datasets.create"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u65b0\u3057\u3044\u7a7a\u767d\u306e\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.datasets.delete"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.datasets.get"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306b\u95a2\u3059\u308b\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.datasets.update"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30c7\u30fc\u30bf\u30bb\u30c3\u30c8\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002")))),Object(n.b)("h3",{id:"\u30c6\u30fc\u30d6\u30eb"},"\u30c6\u30fc\u30d6\u30eb"),Object(n.b)("p",null,"\u30c6\u30fc\u30d6\u30eb\u306e CRUD \u306b\u95a2\u3059\u308b\u6a29\u9650\u3067\u3059\u3002"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6a29\u9650"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.tables.create"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u65b0\u3057\u3044\u30c6\u30fc\u30d6\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.tables.list"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30c6\u30fc\u30d6\u30eb\u3068\u30c6\u30fc\u30d6\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u30ea\u30b9\u30c8\u8868\u793a\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.tables.delete"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30c6\u30fc\u30d6\u30eb\u3092\u524a\u9664\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.tables.get"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30c6\u30fc\u30d6\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u30c6\u30fc\u30d6\u30eb\u306e\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001bigquery.tables.getData \u304c\u5fc5\u8981\u3067\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.tables.getData"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30c6\u30fc\u30d6\u30eb\u306e\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u3053\u306e\u6a29\u9650\u306f\u3001\u30c6\u30fc\u30d6\u30eb\u306e\u30c7\u30fc\u30bf\u3092\u691c\u7d22\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u3002\u30c6\u30fc\u30d6\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001bigquery.tables.get \u304c\u5fc5\u8981\u3067\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.tables.export"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"BigQuery \u304b\u3089\u30c6\u30fc\u30d6\u30eb\u306e\u30c7\u30fc\u30bf\u3092\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.tables.update"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30c6\u30fc\u30d6\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\u30c6\u30fc\u30d6\u30eb\u306e\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u3001bigquery.tables.updateData \u304c\u5fc5\u8981\u3067\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.tables.updateData"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30c6\u30fc\u30d6\u30eb\u306e\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002\u30c6\u30fc\u30d6\u30eb\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3059\u308b\u306b\u306f\u3001bigquery.tables.update \u304c\u5fc5\u8981\u3067\u3059\u3002")))),Object(n.b)("h3",{id:"\u95a2\u6570\u3068\u30b9\u30c8\u30a2\u30c9-\u30d7\u30ed\u30b7\u30fc\u30b8\u30e3"},"\u95a2\u6570\u3068\u30b9\u30c8\u30a2\u30c9 \u30d7\u30ed\u30b7\u30fc\u30b8\u30e3"),Object(n.b)("p",null,"\u95a2\u6570\u3068\u30b9\u30c8\u30a2\u30c9 \u30d7\u30ed\u30b7\u30fc\u30b8\u30e3\u306e CRUD \u306b\u95a2\u3059\u308b\u6a29\u9650\u3067\u3059\u3002"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6a29\u9650"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.routines.create"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u65b0\u3057\u3044\u30eb\u30fc\u30c6\u30a3\u30f3\uff08\u95a2\u6570\u3068\u30b9\u30c8\u30a2\u30c9 \u30d7\u30ed\u30b7\u30fc\u30b8\u30e3\uff09\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.routines.list"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30eb\u30fc\u30c6\u30a3\u30f3\u304a\u3088\u3073\u30eb\u30fc\u30c6\u30a3\u30f3\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.routines.delete"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30eb\u30fc\u30c6\u30a3\u30f3\u3092\u524a\u9664\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.routines.get"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30eb\u30fc\u30c6\u30a3\u30f3\u306e\u5b9a\u7fa9\u3068\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.routines.update"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30eb\u30fc\u30c6\u30a3\u30f3\u306e\u5b9a\u7fa9\u3068\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002")))),Object(n.b)("h3",{id:"bigquery-data-transfer-service"},"BigQuery Data Transfer Service"),Object(n.b)("p",null,"BigQuery Data Transfer Service \u306e\u5b9f\u884c\u306b\u95a2\u3059\u308b\u6a29\u9650\u3067\u3059\u3002"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6a29\u9650"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.transfers.get"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8ee2\u9001\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.transfers.update"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8ee2\u9001\u3092\u4f5c\u6210\u3001\u66f4\u65b0\u3001\u524a\u9664\u3057\u307e\u3059\u3002")))),Object(n.b)("h3",{id:"\u4fdd\u5b58\u3057\u305f\u30af\u30a8\u30ea"},"\u4fdd\u5b58\u3057\u305f\u30af\u30a8\u30ea"),Object(n.b)("p",null,"\u4fdd\u5b58\u3057\u305f\u30af\u30a8\u30ea\u306e CRUD \u306b\u95a2\u3059\u308b\u6a29\u9650\u3067\u3059\u3002"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6a29\u9650"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.savedqueries.create"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4fdd\u5b58\u3057\u305f\u30af\u30a8\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.savedqueries.get"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4fdd\u5b58\u3057\u305f\u30af\u30a8\u30ea\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.savedqueries.list"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4fdd\u5b58\u3057\u305f\u30af\u30a8\u30ea\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.savedqueries.update"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4fdd\u5b58\u3057\u305f\u30af\u30a8\u30ea\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.savedqueries.delete"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4fdd\u5b58\u3057\u305f\u30af\u30a8\u30ea\u3092\u524a\u9664\u3057\u307e\u3059\u3002")))),Object(n.b)("h3",{id:"storage-api"},"Storage API"),Object(n.b)("p",null,"Storage API \u7d4c\u7531\u306e\u8aad\u307f\u53d6\u308a\u306b\u95a2\u3059\u308b\u6a29\u9650\u3067\u3059\u3002"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6a29\u9650"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.readsessions.create"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"BigQuery Storage API \u3092\u4ecb\u3057\u305f\u65b0\u3057\u3044\u8aad\u307f\u53d6\u308a\u30bb\u30c3\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")))),Object(n.b)("h3",{id:"\u5916\u90e8\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9"},"\u5916\u90e8\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9"),Object(n.b)("p",null,"\u5916\u90e8\u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306e\u63a5\u7d9a\u306b\u95a2\u3059\u308b\u6a29\u9650\u3067\u3059\u3002"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6a29\u9650"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.connections.create"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u3067\u65b0\u3057\u3044\u63a5\u7d9a\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.connections.get"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u7d9a\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002\u8a8d\u8a3c\u60c5\u5831\u306f\u9664\u5916\u3055\u308c\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.connections.list"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u63a5\u7d9a\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.connections.use"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u7d9a\u69cb\u6210\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ea\u30e2\u30fc\u30c8 \u30c7\u30fc\u30bf\u30bd\u30fc\u30b9\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.connections.update"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u7d9a\u3068\u305d\u306e\u8a8d\u8a3c\u60c5\u5831\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.connections.delete"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u7d9a\u3092\u524a\u9664\u3057\u307e\u3059\u3002")))),Object(n.b)("h3",{id:"reservations"},"Reservations"),Object(n.b)("p",null,"Reservations\uff08\u5bb9\u91cf\u30b3\u30df\u30c3\u30c8\u30e1\u30f3\u30c8\u306e\u4e88\u7d04\uff09\u306b\u95a2\u3059\u308b\u6a29\u9650\u3067\u3059\u3002"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6a29\u9650"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8aac\u660e"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.reservations.create"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u4e88\u7d04\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.reservations.list"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u5168\u4e88\u7d04\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.reservations.get"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4e88\u7d04\u306e\u8a73\u7d30\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.reservations.delete"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4e88\u7d04\u306e\u524a\u9664")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.reservations.update"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4e88\u7d04\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.capacityCommitments.create"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u5bb9\u91cf\u30b3\u30df\u30c3\u30c8\u30e1\u30f3\u30c8\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.capacityCommitments.list"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u5bb9\u91cf\u30b3\u30df\u30c3\u30c8\u30e1\u30f3\u30c8\u3059\u3079\u3066\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.capacityCommitments.get"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5bb9\u91cf\u30b3\u30df\u30c3\u30c8\u30e1\u30f3\u30c8\u306b\u95a2\u3059\u308b\u8a73\u7d30\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.capacityCommitments.delete"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5bb9\u91cf\u30b3\u30df\u30c3\u30c8\u30e1\u30f3\u30c8\u3092\u524a\u9664\u3057\u307e\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.reservationAssignments.create"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4e88\u7d04\u5272\u308a\u5f53\u3066\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u6240\u6709\u8005\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u5272\u308a\u5f53\u3066\u5148\u30ea\u30bd\u30fc\u30b9\u306b\u306f\u3001\u3053\u306e\u6a29\u9650\u304c\u5fc5\u8981\u3067\u3059\u3002\u4e88\u7d04\u5272\u308a\u5f53\u3066\u3092\u79fb\u52d5\u3059\u308b\u306b\u306f\u3001\u65b0\u3057\u3044\u6240\u6709\u8005\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u5272\u308a\u5f53\u3066\u5148\u30ea\u30bd\u30fc\u30b9\u306b bigquery.reservationAssignments.create \u304c\u5fc5\u8981\u3067\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.reservationAssignments.delete"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4e88\u7d04\u5272\u308a\u5f53\u3066\u3092\u524a\u9664\u3057\u307e\u3059\u3002\u3053\u306e\u6a29\u9650\u306f\u3001\u6240\u6709\u8005\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u5272\u308a\u5f53\u3066\u5148\u30ea\u30bd\u30fc\u30b9\u306b\u5fc5\u8981\u3067\u3059\u3002\u4e88\u7d04\u306e\u5272\u308a\u5f53\u3066\u3092\u79fb\u52d5\u3059\u308b\u306b\u306f\u3001\u53e4\u3044\u6240\u6709\u8005\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3068\u5272\u308a\u5f53\u3066\u5148\u30ea\u30bd\u30fc\u30b9\u306b bigquery.reservationAssignments.delete \u304c\u5fc5\u8981\u3067\u3059\u3002")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"bigquery.reservationAssignments.list"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4e88\u7d04\u5272\u308a\u5f53\u3066\u3092\u4e00\u89a7\u8868\u793a\u3057\u307e\u3059\u3002\u7279\u5b9a\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3001\u30d5\u30a9\u30eb\u30c0\u3001\u7d44\u7e54\u306e\u4e88\u7d04\u5272\u308a\u5f53\u3066\u3092\u691c\u7d22\u3059\u308b\u306b\u306f\u3001\u5272\u308a\u5f53\u3066\u5148\u30ea\u30bd\u30fc\u30b9\u306b bigquery.reservationAssignments.list \u304c\u5fc5\u8981\u3067\u3059\u3002")))))}j.isMDXComponent=!0},215:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var b=a(0),r=a.n(b);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,r=function(e,t){if(null==e)return{};var a,b,r={},n=Object.keys(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(b=0;b<n.length;b++)a=n[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var O=r.a.createContext({}),j=function(e){var t=r.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=j(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,n=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),d=j(a),p=b,m=d["".concat(c,".").concat(p)]||d[p]||o[p]||n;return a?r.a.createElement(m,l(l({ref:t},O),{},{components:a})):r.a.createElement(m,l({ref:t},O))}));function m(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var n=a.length,c=new Array(n);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var O=2;O<n;O++)c[O]=a[O];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);