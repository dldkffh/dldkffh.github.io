"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[7417],{8989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=t(5893),i=t(1151);const l={title:"Trie(\ud2b8\ub77c\uc774)",authors:"dldkffh",tags:["\ud2b8\ub77c\uc774","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},a=void 0,s={permalink:"/2023/04/04/trie",source:"@site/blog/2023-04-04-trie.md",title:"Trie(\ud2b8\ub77c\uc774)",description:"\ud2b8\ub77c\uc774",date:"2023-04-04T00:00:00.000Z",formattedDate:"2023\ub144 4\uc6d4 4\uc77c",tags:[{label:"\ud2b8\ub77c\uc774",permalink:"/tags/\ud2b8\ub77c\uc774"},{label:"\uc54c\uace0\ub9ac\uc998",permalink:"/tags/\uc54c\uace0\ub9ac\uc998"},{label:"javascript",permalink:"/tags/javascript"},{label:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4",permalink:"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"},{label:"\uac1c\ub150",permalink:"/tags/\uac1c\ub150"}],readingTime:1.525,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"Trie(\ud2b8\ub77c\uc774)",authors:"dldkffh",tags:["\ud2b8\ub77c\uc774","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},unlisted:!1,prevItem:{title:"Binary Search(\uc774\uc9c4 \ud0d0\uc0c9)",permalink:"/2023/04/05/binary-search"},nextItem:{title:"Heap(\ud799)",permalink:"/2023/03/19/heap"}},c={authorsImageUrls:[void 0]},o=[{value:"\ud2b8\ub77c\uc774",id:"\ud2b8\ub77c\uc774",level:3},{value:"\ud2b8\ub77c\uc774 \uad6c\uc870",id:"\ud2b8\ub77c\uc774-\uad6c\uc870",level:3},{value:"Trie \uad6c\ud604",id:"trie-\uad6c\ud604",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\ud2b8\ub77c\uc774",children:"\ud2b8\ub77c\uc774"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ubb38\uc790\uc5f4\uc744 \uc800\uc7a5\ud558\uace0 \ud6a8\uc728\uc801\uc73c\ub85c \ud0d0\uc0c9\ud558\uae30 \uc704\ud55c \ud2b8\ub9ac \ud615\ud0dc\uc758 \uc790\ub8cc\uad6c\uc870"}),"\n",(0,r.jsx)(n.li,{children:"\uac80\uc0c9\uc5b4 \uc790\ub3d9\uc644\uc131, \uc0ac\uc804 \ucc3e\uae30 \ub4f1\uc5d0 \uc751\uc6a9\ub420 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ubb38\uc790\uc5f4\uc744 \ud0d0\uc0c9\ud560 \ub54c \ub2e8\uc21c\ud558\uac8c \ube44\uad50\ud558\ub294 \uac83\ubcf4\ub2e4 \ud6a8\uc728\uc801\uc73c\ub85c \ucc3e\uc744 \uc218 \uc788\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"$L$\uc774 \ubb38\uc790\uc5f4\uc758 \uae38\uc774\uc77c \ub54c \ud0d0\uc0c9, \uc0bd\uc785\uc740 $O(L)$\ub9cc\ud07c \uac78\ub9b0\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uac01 \uc815\uc810\uc774 \uc790\uc2dd\uc5d0 \ub300\ud55c \ub9c1\ud06c\ub97c \uc804\ubd80 \uac00\uc9c0\uace0 \uc788\uc5b4 \uc800\uc7a5 \uacf5\uac04\uc744 \ub354 \ub9ce\uc774 \uc0ac\uc6a9"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\ud2b8\ub77c\uc774-\uad6c\uc870",children:"\ud2b8\ub77c\uc774 \uad6c\uc870"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ub8e8\ud2b8\ub294 \ube44\uc5b4\uc788\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uac01 \uac04\uc120(\ub9c1\ud06c)\uc740 \ucd94\uac00\ub420 \ubb38\uc790\ub97c \ud0a4\ub85c \uac00\uc9c4\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\uac01 \uc815\uc810\uc740 $\uc774\uc804 \uc815\uc810\uc758 \uac12 + \uac04\uc120\uc758 \ud0a4$\ub97c \uac12\uc73c\ub85c \uac00\uc9c4\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ud574\uc2dc \ud14c\uc774\ube14\uacfc \uc5f0\uacb0 \ub9ac\uc2a4\ud2b8\ub97c \uc774\uc6a9\ud558\uc5ec \uad6c\ud604\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"trie-\uad6c\ud604",children:"Trie \uad6c\ud604"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'showLineNumbers title="javascript"',children:"class Node {\n  constructor(value = '') {\n    this.value = value;\n    this.children = new Map();\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new Node();\n  }\n\n  insert(string) {\n    let currentNode = this.root;\n\n    for (const char of string) {\n      if (!currentNode.children.has(char)) {\n        currentNode.children.set(char, new Node(currentNode.value + char));\n      }\n      currentNode = currentNode.children.get(char);\n    }\n  }\n\n  has(string) {\n    let currentNode = this.root;\n\n    for (const char of string) {\n      if (!currentNode.children.has(char)) {\n        return false;\n      }\n      currentNode = currentNode.children.get(char);\n    }\n\n    return true;\n  }\n}\n\nconst trie = new Trie();\ntrie.insert('cat');\ntrie.insert('can');\nconsole.log(trie.has('cat'));\nconsole.log(trie.has('can'));\nconsole.log(trie.has('cap'));\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-powershell",metastring:'title="powershell"',children:"true\ntrue\nfalse\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(7294);const i={},l=r.createContext(i);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);