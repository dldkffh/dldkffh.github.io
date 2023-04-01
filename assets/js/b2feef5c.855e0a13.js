"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[356],{3905:(e,r,a)=>{a.d(r,{Zo:()=>u,kt:()=>h});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=t.createContext({}),f=function(e){var r=t.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},u=function(e){var r=f(e.components);return t.createElement(o.Provider,{value:r},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=f(a),g=n,h=c["".concat(o,".").concat(g)]||c[g]||i[g]||l;return a?t.createElement(h,s(s({ref:r},u),{},{components:a})):t.createElement(h,s({ref:r},u))}));function h(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=g;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p[c]="string"==typeof e?e:n,s[1]=p;for(var f=2;f<l;f++)s[f]=a[f];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5982:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>i,frontMatter:()=>l,metadata:()=>p,toc:()=>f});var t=a(7462),n=(a(7294),a(3905));const l={title:"Graph(\uadf8\ub798\ud504)",authors:"dldkffh",tags:["\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\ucf54\ub529\ud14c\uc2a4\ud2b8"]},s=void 0,p={permalink:"/2023/03/16/graph",source:"@site/blog/2023-03-16-graph.md",title:"Graph(\uadf8\ub798\ud504)",description:"1. \uc778\uc811 \ubc30\uc5f4",date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[{label:"\uc54c\uace0\ub9ac\uc998",permalink:"/tags/\uc54c\uace0\ub9ac\uc998"},{label:"javascript",permalink:"/tags/javascript"},{label:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4",permalink:"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"},{label:"\ucf54\ub529\ud14c\uc2a4\ud2b8",permalink:"/tags/\ucf54\ub529\ud14c\uc2a4\ud2b8"}],readingTime:1.09,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"Graph(\uadf8\ub798\ud504)",authors:"dldkffh",tags:["\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\ucf54\ub529\ud14c\uc2a4\ud2b8"]},prevItem:{title:"Tree(\ud2b8\ub9ac)",permalink:"/2023/03/19/tree"},nextItem:{title:"Queue(\ud050)",permalink:"/2023/03/03/queue"}},o={authorsImageUrls:[void 0]},f=[{value:"1. \uc778\uc811 \ubc30\uc5f4",id:"1-\uc778\uc811-\ubc30\uc5f4",level:2},{value:"2. \uc778\uc811 \ub9ac\uc2a4\ud2b8",id:"2-\uc778\uc811-\ub9ac\uc2a4\ud2b8",level:2}],u={toc:f},c="wrapper";function i(e){let{components:r,...a}=e;return(0,n.kt)(c,(0,t.Z)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"1-\uc778\uc811-\ubc30\uc5f4"},"1. \uc778\uc811 \ubc30\uc5f4"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// 5 X 5 false \ubc30\uc5f4 \uc0dd\uc131\nconst graph = Array.from(Array(5), () => Array(5).fill(false));\nconsole.log(graph);\n// graph[\ucd9c\ubc1c\uc9c0][\ubaa9\uc801\uc9c0] \ud574\ub2f9 \ubd80\ubd84\uc744 true\ub85c \uc124\uc815\ngraph[0][1] = true;\ngraph[0][3] = true;\ngraph[1][2] = true;\ngraph[2][0] = true;\ngraph[2][4] = true;\ngraph[3][2] = true;\ngraph[4][0] = true;\nconsole.log(graph);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"[\n  [ false, false, false, false, false ],\n  [ false, false, false, false, false ],\n  [ false, false, false, false, false ],\n  [ false, false, false, false, false ],\n  [ false, false, false, false, false ]\n]\n[\n  [ false, true, false, true, false ],\n  [ false, false, true, false, false ],\n  [ true, false, false, false, true ],\n  [ false, false, true, false, false ],\n  [ true, false, false, false, false ]\n]\n")),(0,n.kt)("h2",{id:"2-\uc778\uc811-\ub9ac\uc2a4\ud2b8"},"2. \uc778\uc811 \ub9ac\uc2a4\ud2b8"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// 5\uac1c\uc758 \ube48 \ubc30\uc5f4 \uc0dd\uc131\nconst graph = Array.from(Array(5), () => []);\nconsole.log(graph);\n// graph[\ucd9c\ubc1c\uc9c0].push(\ubaa9\uc801\uc9c0) \ud574\ub2f9 \ubd80\ubd84\uc744 push\ngraph[0].push(1);\ngraph[0].push(3);\ngraph[1].push(2);\ngraph[2].push(0);\ngraph[2].push(4);\ngraph[3].push(2);\ngraph[4].push(0);\nconsole.log(graph);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"[ [], [], [], [], [] ]\n[ [ 1, 3 ], [ 2 ], [ 0, 4 ], [ 2 ], [ 0 ] ]\n")))}i.isMDXComponent=!0}}]);