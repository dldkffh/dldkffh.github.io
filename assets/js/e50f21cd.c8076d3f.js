"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[8573],{7517:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var a=n(88054),t=n(74848),l=n(28453);const i={title:"Binary Search(\uc774\uc9c4 \ud0d0\uc0c9)",authors:"dldkffh",tags:["\uc774\uc9c4 \ud0d0\uc0c9","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},r=void 0,m={authorsImageUrls:[void 0]},c=[{value:"\uc120\ud615 \ud0d0\uc0c9",id:"\uc120\ud615-\ud0d0\uc0c9",level:3},{value:"\uc774\uc9c4 \ud0d0\uc0c9",id:"\uc774\uc9c4-\ud0d0\uc0c9",level:3}];function h(e){const s={annotation:"annotation",h3:"h3",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",semantics:"semantics",span:"span",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h3,{id:"\uc120\ud615-\ud0d0\uc0c9",children:"\uc120\ud615 \ud0d0\uc0c9"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\uc21c\uc11c\ub300\ub85c \ud558\ub098\uc529 \ucc3e\ub294 \ud0d0\uc0c9 \uc54c\uace0\ub9ac\uc998"}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"N"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(N)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\uac00 \uac78\ub9b0\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"\uc774\uc9c4-\ud0d0\uc0c9",children:"\uc774\uc9c4 \ud0d0\uc0c9"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"\uc815\ub82c\uc774 \ub418\uc5b4\uc788\ub294 \uc694\uc18c\ub4e4\uc744 \ubc18\uc529 \uc81c\uc678\ud558\uba70 \ucc3e\ub294 \uc54c\uace0\ub9ac\uc998"}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsxs)(s.span,{className:"katex",children:[(0,t.jsx)(s.span,{className:"katex-mathml",children:(0,t.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(s.semantics,{children:[(0,t.jsxs)(s.mrow,{children:[(0,t.jsx)(s.mi,{children:"O"}),(0,t.jsx)(s.mo,{stretchy:"false",children:"("}),(0,t.jsx)(s.mi,{children:"l"}),(0,t.jsx)(s.mi,{children:"o"}),(0,t.jsx)(s.mi,{children:"g"}),(0,t.jsx)(s.mi,{children:"N"}),(0,t.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(logN)"})]})})}),(0,t.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(s.span,{className:"base",children:[(0,t.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,t.jsx)(s.span,{className:"mopen",children:"("}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,t.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,t.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(s.span,{className:"mclose",children:")"})]})})]})," \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\uac00 \uac78\ub9b0\ub2e4."]}),"\n",(0,t.jsx)(s.li,{children:"\ubc30\uc5f4 \ud639\uc740 \uc774\uc9c4 \ud2b8\ub9ac\ub97c \uc774\uc6a9\ud558\uc5ec \uad6c\ud604\ud560 \uc218 \uc788\ub2e4."}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var a=n(96540);const t={},l=a.createContext(t);function i(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:s},e.children)}},88054:e=>{e.exports=JSON.parse('{"permalink":"/2023/04/05/binary-search","source":"@site/blog/2023-04-05-binary-search.md","title":"Binary Search(\uc774\uc9c4 \ud0d0\uc0c9)","description":"\uc120\ud615 \ud0d0\uc0c9","date":"2023-04-05T00:00:00.000Z","tags":[{"inline":true,"label":"\uc774\uc9c4 \ud0d0\uc0c9","permalink":"/tags/\uc774\uc9c4-\ud0d0\uc0c9"},{"inline":true,"label":"\uc54c\uace0\ub9ac\uc998","permalink":"/tags/\uc54c\uace0\ub9ac\uc998"},{"inline":true,"label":"javascript","permalink":"/tags/javascript"},{"inline":true,"label":"\ud504\ub85c\uadf8\ub798\uba38\uc2a4","permalink":"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"},{"inline":true,"label":"\uac1c\ub150","permalink":"/tags/\uac1c\ub150"}],"readingTime":1.89,"hasTruncateMarker":true,"authors":[{"name":"dldkffh","url":"https://github.com/dldkffh","imageURL":"https://avatars.githubusercontent.com/u/79070302","key":"dldkffh","page":null}],"frontMatter":{"title":"Binary Search(\uc774\uc9c4 \ud0d0\uc0c9)","authors":"dldkffh","tags":["\uc774\uc9c4 \ud0d0\uc0c9","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],"enableComments":true},"unlisted":false,"prevItem":{"title":"Greedy(\uadf8\ub9ac\ub514)","permalink":"/2023/04/06/greedy"},"nextItem":{"title":"Trie(\ud2b8\ub77c\uc774)","permalink":"/2023/04/04/trie"}}')}}]);