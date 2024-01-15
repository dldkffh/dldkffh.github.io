"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[564],{2123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>h,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(5893),l=t(1151);const r={title:"Heap(\ud799)",authors:"dldkffh",tags:["\ud799","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},h=void 0,s={permalink:"/2023/03/19/heap",source:"@site/blog/2023-03-19-heap.md",title:"Heap(\ud799)",description:"\uc6b0\uc120\uc21c\uc704 \ud050",date:"2023-03-19T00:00:00.000Z",formattedDate:"2023\ub144 3\uc6d4 19\uc77c",tags:[{label:"\ud799",permalink:"/tags/\ud799"},{label:"\uc54c\uace0\ub9ac\uc998",permalink:"/tags/\uc54c\uace0\ub9ac\uc998"},{label:"javascript",permalink:"/tags/javascript"},{label:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4",permalink:"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"},{label:"\uac1c\ub150",permalink:"/tags/\uac1c\ub150"}],readingTime:3.075,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"Heap(\ud799)",authors:"dldkffh",tags:["\ud799","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},unlisted:!1,prevItem:{title:"Trie(\ud2b8\ub77c\uc774)",permalink:"/2023/04/04/trie"},nextItem:{title:"Tree(\ud2b8\ub9ac)",permalink:"/2023/03/19/tree"}},i={authorsImageUrls:[void 0]},p=[{value:"\uc6b0\uc120\uc21c\uc704 \ud050",id:"\uc6b0\uc120\uc21c\uc704-\ud050",level:3},{value:"\ud799",id:"\ud799",level:3},{value:"\ud799 \uc694\uc18c \ucd94\uac00 \uc54c\uace0\ub9ac\uc998",id:"\ud799-\uc694\uc18c-\ucd94\uac00-\uc54c\uace0\ub9ac\uc998",level:3},{value:"\ud799 \uc694\uc18c \uc81c\uac70 \uc54c\uace0\ub9ac\uc998",id:"\ud799-\uc694\uc18c-\uc81c\uac70-\uc54c\uace0\ub9ac\uc998",level:3},{value:"Heap \uad6c\ud604",id:"heap-\uad6c\ud604",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\uc6b0\uc120\uc21c\uc704-\ud050",children:"\uc6b0\uc120\uc21c\uc704 \ud050"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"FIFO\uc778 \ud050\uc640 \ub2ec\ub9ac \uc6b0\uc120 \uc21c\uc704\uac00 \ub192\uc740 \uc694\uc18c\uac00 \uba3c\uc800 \ub098\uac00\ub294 \ud050"}),"\n",(0,a.jsx)(n.li,{children:"\uc6b0\uc120\uc21c\uc704 \ud050\ub294 \uc790\ub8cc\uad6c\uc870\uac00 \uc544\ub2cc \uac1c\ub150"}),"\n",(0,a.jsx)(n.li,{children:"\ud799\uc740 \uc6b0\uc120\uc21c\uc704\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud55c \uac00\uc7a5 \uc801\ud569\ud55c \ubc29\ubc95"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\ud799",children:"\ud799"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\uc774\uc9c4 \ud2b8\ub9ac \ud615\ud0dc\ub97c \uac00\uc9c0\uba70 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc740 \uc694\uc18c\uac00 \uba3c\uc800 \ub098\uac00\uae30 \uc704\ud574 \uc694\uc18c\uac00 \uc0bd\uc785, \uc0ad\uc81c \ub420 \ub54c \ubc14\ub85c \uc815\ub82c\ub418\ub294 \ud2b9\uc9d5"}),"\n",(0,a.jsx)(n.li,{children:"\uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc740 \uc694\uc18c\uac00 \uba3c\uc800 \ub098\uac00\ub294 \ud2b9\uc9d5"}),"\n",(0,a.jsx)(n.li,{children:"\ub8e8\ud2b8\uac00 \uac00\uc7a5 \ud070 \uac12\uc774 \ub418\ub294 \ucd5c\ub300 \ud799(Max Heap)\uacfc \ub8e8\ud2b8\uac00 \uac00\uc7a5 \uc791\uc740 \uac12\uc774 \ub418\ub294 \ucd5c\uc18c \ud799(Min Heap)\uc774 \uc788\ub2e4."}),"\n",(0,a.jsx)(n.li,{children:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \uc9c1\uc811 \uad6c\ud604\ud574\uc11c \uc0ac\uc6a9"}),"\n",(0,a.jsx)(n.li,{children:"\ucd94\uac00, \uc0ad\uc81c \ub85c\uc9c1\uc774 \ud575\uc2ec"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\ud799-\uc694\uc18c-\ucd94\uac00-\uc54c\uace0\ub9ac\uc998",children:"\ud799 \uc694\uc18c \ucd94\uac00 \uc54c\uace0\ub9ac\uc998"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\uc694\uc18c\uac00 \ucd94\uac00\ub420 \ub54c\ub294 \ud2b8\ub9ac\uc758 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9 \uc815\uc810\uc5d0 \uc704\uce58"}),"\n",(0,a.jsx)(n.li,{children:"\ucd94\uac00 \ud6c4 \ubd80\ubaa8 \uc815\uc810\ubcf4\ub2e4 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\ub2e4\uba74 \ubd80\ubaa8 \uc815\uc810\uacfc \uc21c\uc11c\ub97c \ubc14\uafbc\ub2e4."}),"\n",(0,a.jsx)(n.li,{children:"\uc774 \uacfc\uc815\uc744 \ubc18\ubcf5\ud558\uba74 \uacb0\uad6d \uac00\uc7a5 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc740 \uc815\uc810\uc774 \ub8e8\ud2b8\uac00 \ub41c\ub2e4."}),"\n",(0,a.jsx)(n.li,{children:"\uc644\uc804 \uc774\uc9c4 \ud2b8\ub9ac\uc758 \ub192\uc774\ub294 $logN$\uc774\uae30\uc5d0 \ud799\uc758 \uc694\uc18c \ucd94\uac00 \uc54c\uace0\ub9ac\uc998\uc740 $O(logN)$ \uc2dc\uac04 \ubcf5\uc7a1\ub3c4\ub97c \uac00\uc9c4\ub2e4."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\ud799-\uc694\uc18c-\uc81c\uac70-\uc54c\uace0\ub9ac\uc998",children:"\ud799 \uc694\uc18c \uc81c\uac70 \uc54c\uace0\ub9ac\uc998"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\uc694\uc18c \uc81c\uac70\ub294 \ub8e8\ud2b8 \uc815\uc810\ub9cc \uac00\ub2a5"}),"\n",(0,a.jsx)(n.li,{children:"\ub8e8\ud2b8 \uc815\uc810\uc774 \uc81c\uac70\ub41c \ud6c4 \uac00\uc7a5 \ub9c8\uc9c0\ub9c9 \uc815\uc810\uc774 \ub8e8\ud2b8\uc5d0 \uc704\uce58\ud55c\ub2e4."}),"\n",(0,a.jsx)(n.li,{children:"\ub8e8\ud2b8 \uc815\uc810\uc758 \ub450 \uc790\uc2dd \uc815\uc810 \uc911 \ub354 \uc6b0\uc120\uc21c\uc704\uac00 \ub192\uc740 \uc815\uc810\uacfc \ubc14\uafbc\ub2e4."}),"\n",(0,a.jsx)(n.li,{children:"\ub450 \uc790\uc2dd \uc815\uc810\uc774 \uc6b0\uc120\uc21c\uc704\uac00 \ub354 \ub0ae\uc744 \ub584 \uae4c\uc9c0 \ubc18\ubcf5"}),"\n",(0,a.jsx)(n.li,{children:"\uc644\uc804 \uc774\uc9c4 \ud2b8\ub9ac\uc758 \ub192\uc774\ub294 $logN$\uc774\uae30\uc5d0 \ud799\uc758 \uc694\uc18c \uc81c\uac70 \uc54c\uace0\ub9ac\uc998\uc740 $O(logN)$ \uc2dc\uac04\ubcf5\uc7a1\ub3c4\ub97c \uac00\uc9c4\ub2e4."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"heap-\uad6c\ud604",children:"Heap \uad6c\ud604"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'showLineNumbers title="javascript"',children:"class MaxHeap {\n  constructor() {\n    this.heap = [null];\n  }\n\n  push(value) {\n    this.heap.push(value);\n    let currentIndex = this.heap.length - 1;\n    let parentIndex = Math.floor(currentIndex / 2);\n\n    while (parentIndex !== 0 && this.heap[parentIndex] < value) {\n      const temp = this.heap[parentIndex];\n      this.heap[parentIndex] = value;\n      this.heap[currentIndex] = temp;\n\n      currentIndex = parentIndex;\n      parentIndex = Math.floor(currentIndex / 2);\n    }\n  }\n\n  pop() {\n    const returnValue = this.heap[1];\n    this.heap[1] = this.heap.pop();\n\n    let currentIndex = 1;\n    let leftIndex = 2;\n    let rightIndex = 3;\n\n    while (\n      this.heap[currentIndex] < this.heap[leftIndex] ||\n      this.heap[currentIndex] < this.heap[rightIndex]\n    ) {\n      if (this.heap[leftIndex] < this.heap[rightIndex]) {\n        const temp = this.heap[currentIndex];\n        this.heap[currentIndex] = temp;\n        currentIndex = rightIndex;\n      } else {\n        const temp = this.heap[currentIndex];\n        this.heap[currentIndex] = this.heap[leftIndex];\n        this.heap[leftIndex] = temp;\n        currentIndex = leftIndex;\n      }\n      leftIndex = currentIndex * 2;\n      rightIndex = currentIndex * 2 + 1;\n    }\n\n    return returnValue;\n  }\n}\n\nconst heap = new MaxHeap();\nheap.push(45);\nheap.push(36);\nheap.push(54);\nheap.push(27);\nheap.push(63);\n\nconsole.log(heap.heap);\n\nconst array = [];\narray.push(heap.pop());\narray.push(heap.pop());\narray.push(heap.pop());\narray.push(heap.pop());\n\nconsole.log(heap.heap);\nconsole.log(array);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-powershell",metastring:'title="powershell"',children:"[ null, 63, 54, 45, 27, 36 ]\n[ null, 36 ]\n[ 63, 54, 27, 45 ]\n"})})]})}function c(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>h});var a=t(7294);const l={},r=a.createContext(l);function h(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:h(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);