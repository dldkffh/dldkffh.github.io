"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[2255],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>N});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,p=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=i(t),u=r,N=c["".concat(p,".").concat(u)]||c[u]||k[u]||m;return t?n.createElement(N,l(l({ref:a},o),{},{components:t})):n.createElement(N,l({ref:a},o))}));function N(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,l=new Array(m);l[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<m;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9238:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>m,metadata:()=>s,toc:()=>i});var n=t(7462),r=(t(7294),t(3905));const m={title:"Binary Search(\uc774\uc9c4 \ud0d0\uc0c9)",authors:"dldkffh",tags:["\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4"],enableComments:!0},l=void 0,s={permalink:"/2023/04/05/binary-search",source:"@site/blog/2023-04-05-binary-search.md",title:"Binary Search(\uc774\uc9c4 \ud0d0\uc0c9)",description:"\uc120\ud615 \ud0d0\uc0c9",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"\uc54c\uace0\ub9ac\uc998",permalink:"/tags/\uc54c\uace0\ub9ac\uc998"},{label:"javascript",permalink:"/tags/javascript"},{label:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4",permalink:"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"}],readingTime:1.89,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"Binary Search(\uc774\uc9c4 \ud0d0\uc0c9)",authors:"dldkffh",tags:["\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4"],enableComments:!0},prevItem:{title:"Greedy(\uadf8\ub9ac\ub514)",permalink:"/2023/04/06/greedy"},nextItem:{title:"Trie(\ud2b8\ub77c\uc774)",permalink:"/2023/04/04/trie"}},p={authorsImageUrls:[void 0]},i=[{value:"\uc120\ud615 \ud0d0\uc0c9",id:"\uc120\ud615-\ud0d0\uc0c9",level:3},{value:"\uc774\uc9c4 \ud0d0\uc0c9",id:"\uc774\uc9c4-\ud0d0\uc0c9",level:3},{value:"\uc774\uc9c4 \ud0d0\uc0c9 \ud2b8\ub9ac",id:"\uc774\uc9c4-\ud0d0\uc0c9-\ud2b8\ub9ac",level:3},{value:"\uc774\uc9c4 \ud0d0\uc0c9 \ud2b8\ub9ac \uc694\uc18c \uc0ad\uc81c",id:"\uc774\uc9c4-\ud0d0\uc0c9-\ud2b8\ub9ac-\uc694\uc18c-\uc0ad\uc81c",level:3},{value:"\uc774\uc9c4 \ud0d0\uc0c9 \ud2b8\ub9ac \ubb38\uc81c\uc810",id:"\uc774\uc9c4-\ud0d0\uc0c9-\ud2b8\ub9ac-\ubb38\uc81c\uc810",level:3}],o={toc:i},c="wrapper";function k(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\uc120\ud615-\ud0d0\uc0c9"},"\uc120\ud615 \ud0d0\uc0c9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc21c\uc11c\ub300\ub85c \ud558\ub098\uc529 \ucc3e\ub294 \ud0d0\uc0c9 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(N)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\uac00 \uac78\ub9b0\ub2e4.")),(0,r.kt)("h3",{id:"\uc774\uc9c4-\ud0d0\uc0c9"},"\uc774\uc9c4 \ud0d0\uc0c9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc815\ub82c\uc774 \ub418\uc5b4\uc788\ub294 \uc694\uc18c\ub4e4\uc744 \ubc18\uc529 \uc81c\uc678\ud558\uba70 \ucc3e\ub294 \uc54c\uace0\ub9ac\uc998"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"l"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"g"),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logN)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))," \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\uac00 \uac78\ub9b0\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubc30\uc5f4 \ud639\uc740 \uc774\uc9c4 \ud2b8\ub9ac\ub97c \uc774\uc6a9\ud558\uc5ec \uad6c\ud604\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)("h3",{id:"\uc774\uc9c4-\ud0d0\uc0c9-\ud2b8\ub9ac"},"\uc774\uc9c4 \ud0d0\uc0c9 \ud2b8\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc774\uc9c4 \ud0d0\uc0c9\uc744 \uc704\ud55c \uc774\uc9c4 \ud2b8\ub9ac"),(0,r.kt)("li",{parentName:"ul"},"\uc67c\ucabd \uc11c\ube0c \ud2b8\ub9ac\ub294 \ub8e8\ud2b8\ubcf4\ub2e4 \uc791\uc740 \uac12\uc774 \ubaa8\uc5ec\uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc624\ub978\ucabd \uc11c\ube0c\ud2b8\ub9ac\ub294 \ub8e8\ud2b8\ubcf4\ub2e4 \ud070 \uac12\uc774 \ubaa8\uc600\uc788\ub2e4.")),(0,r.kt)("h3",{id:"\uc774\uc9c4-\ud0d0\uc0c9-\ud2b8\ub9ac-\uc694\uc18c-\uc0ad\uc81c"},"\uc774\uc9c4 \ud0d0\uc0c9 \ud2b8\ub9ac \uc694\uc18c \uc0ad\uc81c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e8\ub9d0 \uc815\uc810\uc744 \uc0ad\uc81c\ud558\ub294 \uacbd\uc6b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubcc4\ub2e4\ub978 \ucc98\ub9ac \uc5c6\uc774 \ubd80\ubaa8 \uc815\uc810\uacfc \uc5f0\uacb0\uc744 \ub04a\ub294\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ud558\ub098\uc758 \uc11c\ube0c \ud2b8\ub9ac\ub97c \uac00\uc9c0\ub294 \uacbd\uc6b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc81c\uac70\ub418\ub294 \uc815\uc810\uc758 \ubd80\ubaa8 \uac04\uc120\uc744 \uc790\uc2dd \uc815\uc810\uc744 \uac00\ub974\ud0a4\uac8c \ubc14\uafb8\uba74 \ub41c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub450\uac1c\uc758 \uc11c\ube0c \ud2b8\ub9ac\ub97c \uac00\uc9c0\ub294 \uacbd\uc6b0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"\uc67c\ucabd \uc11c\ube0c\ud2b8\ub9ac\uc758 \uac00\uc7a5 \ud070 \uac12" \ud639\uc740 "\uc624\ub978\ucabd \uc11c\ube0c \ud2b8\ub9ac\uc758 \uac00\uc7a5 \uc791\uc740 \uac12"\uacfc \uad50\uccb4\ud55c\ub2e4.'),(0,r.kt)("li",{parentName:"ul"},"\uad50\uccb4\ub41c \uc815\uc810\uc758 \uc88c\uc6b0 \uc790\uc2dd\uc774 \uc5c6\ub2e4\uba74 \uc81c\uac70\ub418\ub294 \uc815\uc810\uc758 \ub9c1\ud06c\ub85c \ub300\uccb4\ub41c\ub2e4.")))),(0,r.kt)("h3",{id:"\uc774\uc9c4-\ud0d0\uc0c9-\ud2b8\ub9ac-\ubb38\uc81c\uc810"},"\uc774\uc9c4 \ud0d0\uc0c9 \ud2b8\ub9ac \ubb38\uc81c\uc810"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucd5c\uc545\uc758 \uacbd\uc6b0 \ud55c\ucabd\uc73c\ub85c \ud3b8\ud5a5\ub41c \ud2b8\ub9ac\uac00 \ub420 \uc218 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ucd5c\uc545\uc758 \uacbd\uc6b0\uc5d0\ub294 \uc21c\ucc28 \ud0d0\uc0c9\uacfc \ub3d9\uc77c\ud55c \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub97c \uac00\uc9c4\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubb38\uc81c\uc810\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 AVL \ud2b8\ub9ac, \ub808\ub4dc-\ube14\ub799 \ud2b8\ub9ac\uc640 \uac19\uc740 \uc790\ub8cc\uad6c\uc870\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4.")))}k.isMDXComponent=!0}}]);