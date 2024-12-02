"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[7210],{85033:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var n=a(37211),t=a(74848),l=a(28453);const i={title:"BFS, DFS",authors:"dldkffh",tags:["BFS","DFS","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},r=void 0,m={authorsImageUrls:[void 0]},c=[{value:"BFS(Bread-First Search) \ub108\ube44 \uc6b0\uc120 \ud0d0\uc0c9",id:"bfsbread-first-search-\ub108\ube44-\uc6b0\uc120-\ud0d0\uc0c9",level:3},{value:"DFS(Depth-First Search) \uae4a\uc774 \uc6b0\uc120 \ud0d0\uc0c9",id:"dfsdepth-first-search-\uae4a\uc774-\uc6b0\uc120-\ud0d0\uc0c9",level:3}];function h(s){const e={annotation:"annotation",h3:"h3",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",semantics:"semantics",span:"span",ul:"ul",...(0,l.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"bfsbread-first-search-\ub108\ube44-\uc6b0\uc120-\ud0d0\uc0c9",children:"BFS(Bread-First Search) \ub108\ube44 \uc6b0\uc120 \ud0d0\uc0c9"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uac19\uc740 \uae4a\uc774\uc5d0 \ud574\ub2f9\ud558\ub294 \uc815\uc810\ubd80\ud130 \ud0d0\uc0c9\ud558\ub294 \uc54c\uace0\ub9ac\uc998"}),"\n",(0,t.jsx)(e.li,{children:"Queue\ub97c \uc774\uc6a9\ud558\uc5ec \uad6c\ud604"}),"\n",(0,t.jsx)(e.li,{children:"\uc2dc\uc791 \uc9c0\uc810\uc5d0\uc11c \uac00\uae4c\uc6b4 \uc815\uc810\ubd80\ud130 \ud0d0\uc0c9"}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"V"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"V"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"})]})})]}),"\uac00 \uc815\uc810\uc758 \uc218, ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"E"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"E"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"})]})})]}),"\uac00 \uac04\uc120\uc758 \uc218 \uc77c \ub584 BFS\uc758 \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub294 ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"O"}),(0,t.jsx)(e.mo,{stretchy:"false",children:"("}),(0,t.jsx)(e.mi,{children:"V"}),(0,t.jsx)(e.mo,{children:"+"}),(0,t.jsx)(e.mi,{children:"E"}),(0,t.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(V + E)"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(e.span,{className:"mopen",children:"("}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"+"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,t.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"dfsdepth-first-search-\uae4a\uc774-\uc6b0\uc120-\ud0d0\uc0c9",children:"DFS(Depth-First Search) \uae4a\uc774 \uc6b0\uc120 \ud0d0\uc0c9"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ucd5c\ub300\ud55c \uae4a\uc740 \uc815\uc810\ubd80\ud130 \ud0d0\uc0c9\ud558\ub294 \uc54c\uace0\ub9ac\uc998"}),"\n",(0,t.jsx)(e.li,{children:"Stack\uc744 \uc774\uc6a9\ud558\uc5ec \uad6c\ud604"}),"\n",(0,t.jsx)(e.li,{children:"\uc2dc\uc791 \uc815\uc810\uc5d0\uc11c \uae4a\uc740 \uac83\ubd80\ud130 \ucc3e\ub294\ub2e4."}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"V"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"V"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"})]})})]}),"\uac00 \uc815\uc810\uc758 \uc218, ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"E"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"E"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"})]})})]}),"\uac00 \uac04\uc120\uc758 \uc218 \uc77c \ub584 DFS\uc758 \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub294 ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"O"}),(0,t.jsx)(e.mo,{stretchy:"false",children:"("}),(0,t.jsx)(e.mi,{children:"V"}),(0,t.jsx)(e.mo,{children:"+"}),(0,t.jsx)(e.mi,{children:"E"}),(0,t.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(V + E)"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(e.span,{className:"mopen",children:"("}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"+"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,t.jsx)(e.span,{className:"mclose",children:")"})]})]})]}),"\ub2e4."]}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,l.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(h,{...s})}):h(s)}},28453:(s,e,a)=>{a.d(e,{R:()=>i,x:()=>r});var n=a(96540);const t={},l=n.createContext(t);function i(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:i(s.components),n.createElement(l.Provider,{value:e},s.children)}},37211:s=>{s.exports=JSON.parse('{"permalink":"/2023/04/06/bfs-dfs","source":"@site/blog/2023-04-06-bfs-dfs.md","title":"BFS, DFS","description":"BFS(Bread-First Search) \ub108\ube44 \uc6b0\uc120 \ud0d0\uc0c9","date":"2023-04-06T00:00:00.000Z","tags":[{"inline":true,"label":"BFS","permalink":"/tags/bfs"},{"inline":true,"label":"DFS","permalink":"/tags/dfs"},{"inline":true,"label":"\uc54c\uace0\ub9ac\uc998","permalink":"/tags/\uc54c\uace0\ub9ac\uc998"},{"inline":true,"label":"javascript","permalink":"/tags/javascript"},{"inline":true,"label":"\ud504\ub85c\uadf8\ub798\uba38\uc2a4","permalink":"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"},{"inline":true,"label":"\uac1c\ub150","permalink":"/tags/\uac1c\ub150"}],"readingTime":0.77,"hasTruncateMarker":true,"authors":[{"name":"dldkffh","url":"https://github.com/dldkffh","imageURL":"https://avatars.githubusercontent.com/u/79070302","key":"dldkffh","page":null}],"frontMatter":{"title":"BFS, DFS","authors":"dldkffh","tags":["BFS","DFS","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],"enableComments":true},"unlisted":false,"prevItem":{"title":"\uc774\ubd84\ud0d0\uc0c9 \uc785\uad6d\uc2ec\uc0ac","permalink":"/2023/06/25/programmers-43238"},"nextItem":{"title":"Greedy(\uadf8\ub9ac\ub514)","permalink":"/2023/04/06/greedy"}}')}}]);