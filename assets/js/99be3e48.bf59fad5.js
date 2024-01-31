"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[7417],{8989:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var a=s(5893),t=s(1151);const r={title:"Trie(\ud2b8\ub77c\uc774)",authors:"dldkffh",tags:["\ud2b8\ub77c\uc774","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},l=void 0,i={permalink:"/2023/04/04/trie",source:"@site/blog/2023-04-04-trie.md",title:"Trie(\ud2b8\ub77c\uc774)",description:"\ud2b8\ub77c\uc774",date:"2023-04-04T00:00:00.000Z",formattedDate:"2023\ub144 4\uc6d4 4\uc77c",tags:[{label:"\ud2b8\ub77c\uc774",permalink:"/tags/\ud2b8\ub77c\uc774"},{label:"\uc54c\uace0\ub9ac\uc998",permalink:"/tags/\uc54c\uace0\ub9ac\uc998"},{label:"javascript",permalink:"/tags/javascript"},{label:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4",permalink:"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"},{label:"\uac1c\ub150",permalink:"/tags/\uac1c\ub150"}],readingTime:1.525,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"Trie(\ud2b8\ub77c\uc774)",authors:"dldkffh",tags:["\ud2b8\ub77c\uc774","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},unlisted:!1,prevItem:{title:"Binary Search(\uc774\uc9c4 \ud0d0\uc0c9)",permalink:"/2023/04/05/binary-search"},nextItem:{title:"Heap(\ud799)",permalink:"/2023/03/19/heap"}},c={authorsImageUrls:[void 0]},h=[{value:"\ud2b8\ub77c\uc774",id:"\ud2b8\ub77c\uc774",level:4},{value:"\ud2b8\ub77c\uc774 \uad6c\uc870",id:"\ud2b8\ub77c\uc774-\uad6c\uc870",level:4},{value:"Trie \uad6c\ud604",id:"trie-\uad6c\ud604",level:3}];function o(e){const n={annotation:"annotation",code:"code",h3:"h3",h4:"h4",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",mtext:"mtext",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h4,{id:"\ud2b8\ub77c\uc774",children:"\ud2b8\ub77c\uc774"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\ubb38\uc790\uc5f4\uc744 \uc800\uc7a5\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \ud0d0\uc0c9\ud558\uae30 \uc704\ud55c \ud2b8\ub9ac \ud615\ud0dc\uc758 \uc790\ub8cc\uad6c\uc870"}),"\n",(0,a.jsx)(n.li,{children:"\uac80\uc0c9\uc5b4 \uc790\ub3d9\uc644\uc131, \uc0ac\uc804 \ucc3e\uae30 \ub4f1\uc5d0 \uc751\uc6a9\ub420 \uc218 \uc788\ub2e4."}),"\n",(0,a.jsx)(n.li,{children:"\ubb38\uc790\uc5f4\uc744 \ud0d0\uc0c9\ud560 \ub54c \ub2e8\uc21c\ud558\uac8c \ube44\uad50\ud558\ub294 \uac83\ubcf4\ub2e4 \ud6a8\uc728\uc801\uc73c\ub85c \ucc3e\uc744 \uc218 \uc788\ub2e4."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"L"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"L"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"L"})]})})]}),"\uc774 \ubb38\uc790\uc5f4\uc758 \uae38\uc774\uc77c \ub54c \ud0d0\uc0c9, \uc0bd\uc785\uc740 ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"O"}),(0,a.jsx)(n.mo,{stretchy:"false",children:"("}),(0,a.jsx)(n.mi,{children:"L"}),(0,a.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(L)"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(n.span,{className:"mopen",children:"("}),(0,a.jsx)(n.span,{className:"mord mathnormal",children:"L"}),(0,a.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"\ub9cc\ud07c \uac78\ub9b0\ub2e4."]}),"\n",(0,a.jsx)(n.li,{children:"\uac01 \uc815\uc810\uc774 \uc790\uc2dd\uc5d0 \ub300\ud55c \ub9c1\ud06c\ub97c \uc804\ubd80 \uac00\uc9c0\uace0 \uc788\uc5b4 \uc800\uc7a5 \uacf5\uac04\uc744 \ub354 \ub9ce\uc774 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"\ud2b8\ub77c\uc774-\uad6c\uc870",children:"\ud2b8\ub77c\uc774 \uad6c\uc870"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\ub8e8\ud2b8\ub294 \ube44\uc5b4\uc788\ub2e4."}),"\n",(0,a.jsx)(n.li,{children:"\uac01 \uac04\uc120(\ub9c1\ud06c)\uc740 \ucd94\uac00\ub420 \ubb38\uc790\ub97c \ud0a4\ub85c \uac00\uc9c4\ub2e4."}),"\n",(0,a.jsxs)(n.li,{children:["\uac01 \uc815\uc810\uc740 ",(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mtext,{children:"\uc774\uc804\uc815\uc810\uc758\uac12"}),(0,a.jsx)(n.mo,{children:"+"}),(0,a.jsx)(n.mtext,{children:"\uac04\uc120\uc758\ud0a4"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\uc774\uc804 \uc815\uc810\uc758 \uac12 + \uac04\uc120\uc758 \ud0a4"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,a.jsx)(n.span,{className:"mord hangul_fallback",children:"\uc774\uc804\uc815\uc810\uc758\uac12"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,a.jsx)(n.span,{className:"mbin",children:"+"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord hangul_fallback",children:"\uac04\uc120\uc758\ud0a4"})]})]})]}),"\ub97c \uac12\uc73c\ub85c \uac00\uc9c4\ub2e4."]}),"\n",(0,a.jsx)(n.li,{children:"\ud574\uc2dc \ud14c\uc774\ube14\uacfc \uc5f0\uacb0 \ub9ac\uc2a4\ud2b8\ub97c \uc774\uc6a9\ud558\uc5ec \uad6c\ud604\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"trie-\uad6c\ud604",children:"Trie \uad6c\ud604"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'showLineNumbers title="javascript"',children:"class Node {\n  constructor(value = '') {\n    this.value = value;\n    this.children = new Map();\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new Node();\n  }\n\n  insert(string) {\n    let currentNode = this.root;\n\n    for (const char of string) {\n      if (!currentNode.children.has(char)) {\n        currentNode.children.set(char, new Node(currentNode.value + char));\n      }\n      currentNode = currentNode.children.get(char);\n    }\n  }\n\n  has(string) {\n    let currentNode = this.root;\n\n    for (const char of string) {\n      if (!currentNode.children.has(char)) {\n        return false;\n      }\n      currentNode = currentNode.children.get(char);\n    }\n\n    return true;\n  }\n}\n\nconst trie = new Trie();\ntrie.insert('cat');\ntrie.insert('can');\nconsole.log(trie.has('cat'));\nconsole.log(trie.has('can'));\nconsole.log(trie.has('cap'));\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",metastring:'title="powershell"',children:"true\ntrue\nfalse\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var a=s(7294);const t={},r=a.createContext(t);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);