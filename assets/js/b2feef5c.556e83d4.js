"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[8535],{4512:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>i,frontMatter:()=>t,metadata:()=>h,toc:()=>p});var s=a(5893),n=a(1151);const t={title:"Graph(\uadf8\ub798\ud504)",authors:"dldkffh",tags:["\uadf8\ub798\ud504","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},l=void 0,h={permalink:"/2023/03/16/graph",source:"@site/blog/2023-03-16-graph.md",title:"Graph(\uadf8\ub798\ud504)",description:"1. \uc778\uc811 \ubc30\uc5f4",date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[{label:"\uadf8\ub798\ud504",permalink:"/tags/\uadf8\ub798\ud504"},{label:"\uc54c\uace0\ub9ac\uc998",permalink:"/tags/\uc54c\uace0\ub9ac\uc998"},{label:"javascript",permalink:"/tags/javascript"},{label:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4",permalink:"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"},{label:"\uac1c\ub150",permalink:"/tags/\uac1c\ub150"}],readingTime:1.12,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"Graph(\uadf8\ub798\ud504)",authors:"dldkffh",tags:["\uadf8\ub798\ud504","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},unlisted:!1,prevItem:{title:"Tree(\ud2b8\ub9ac)",permalink:"/2023/03/19/tree"},nextItem:{title:"Hash(\ud574\uc2dc)",permalink:"/2023/03/04/hash"}},o={authorsImageUrls:[void 0]},p=[{value:"1. \uc778\uc811 \ubc30\uc5f4",id:"1-\uc778\uc811-\ubc30\uc5f4",level:2},{value:"2. \uc778\uc811 \ub9ac\uc2a4\ud2b8",id:"2-\uc778\uc811-\ub9ac\uc2a4\ud2b8",level:2}];function f(e){const r={code:"code",h2:"h2",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"1-\uc778\uc811-\ubc30\uc5f4",children:"1. \uc778\uc811 \ubc30\uc5f4"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",metastring:'showLineNumbers title="javascript"',children:"// 5 X 5 false \ubc30\uc5f4 \uc0dd\uc131\r\nconst graph = Array.from(Array(5), () => Array(5).fill(false));\r\nconsole.log(graph);\r\n// graph[\ucd9c\ubc1c\uc9c0][\ubaa9\uc801\uc9c0] \ud574\ub2f9 \ubd80\ubd84\uc744 true\ub85c \uc124\uc815\r\ngraph[0][1] = true;\r\ngraph[0][3] = true;\r\ngraph[1][2] = true;\r\ngraph[2][0] = true;\r\ngraph[2][4] = true;\r\ngraph[3][2] = true;\r\ngraph[4][0] = true;\r\nconsole.log(graph);\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",metastring:'title="powershell"',children:"[\r\n  [ false, false, false, false, false ],\r\n  [ false, false, false, false, false ],\r\n  [ false, false, false, false, false ],\r\n  [ false, false, false, false, false ],\r\n  [ false, false, false, false, false ]\r\n]\r\n[\r\n  [ false, true, false, true, false ],\r\n  [ false, false, true, false, false ],\r\n  [ true, false, false, false, true ],\r\n  [ false, false, true, false, false ],\r\n  [ true, false, false, false, false ]\r\n]\n"})}),"\n",(0,s.jsx)(r.h2,{id:"2-\uc778\uc811-\ub9ac\uc2a4\ud2b8",children:"2. \uc778\uc811 \ub9ac\uc2a4\ud2b8"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",metastring:'showLineNumbers title="javascript"',children:"// 5\uac1c\uc758 \ube48 \ubc30\uc5f4 \uc0dd\uc131\r\nconst graph = Array.from(Array(5), () => []);\r\nconsole.log(graph);\r\n// graph[\ucd9c\ubc1c\uc9c0].push(\ubaa9\uc801\uc9c0) \ud574\ub2f9 \ubd80\ubd84\uc744 push\r\ngraph[0].push(1);\r\ngraph[0].push(3);\r\ngraph[1].push(2);\r\ngraph[2].push(0);\r\ngraph[2].push(4);\r\ngraph[3].push(2);\r\ngraph[4].push(0);\r\nconsole.log(graph);\n"})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-powershell",metastring:'title="powershell"',children:"[ [], [], [], [], [] ]\r\n[ [ 1, 3 ], [ 2 ], [ 0, 4 ], [ 2 ], [ 0 ] ]\n"})})]})}function i(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},1151:(e,r,a)=>{a.d(r,{Z:()=>h,a:()=>l});var s=a(7294);const n={},t=s.createContext(n);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function h(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);