"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[7556],{4365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var r=t(5893),a=t(1151);const s={title:"Queue(\ud050)",authors:"dldkffh",tags:["\ud050","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},i=void 0,l={permalink:"/2023/03/03/queue",source:"@site/blog/2023-03-03-queue.md",title:"Queue(\ud050)",description:"1. Array\ub85c \ud050\ub97c \uad6c\ud604",date:"2023-03-03T00:00:00.000Z",formattedDate:"March 3, 2023",tags:[{label:"\ud050",permalink:"/tags/\ud050"},{label:"\uc54c\uace0\ub9ac\uc998",permalink:"/tags/\uc54c\uace0\ub9ac\uc998"},{label:"javascript",permalink:"/tags/javascript"},{label:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4",permalink:"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"},{label:"\uac1c\ub150",permalink:"/tags/\uac1c\ub150"}],readingTime:1.22,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"Queue(\ud050)",authors:"dldkffh",tags:["\ud050","\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\uac1c\ub150"],enableComments:!0},unlisted:!1,prevItem:{title:"Hash(\ud574\uc2dc)",permalink:"/2023/03/04/hash"},nextItem:{title:"Stack(\uc2a4\ud0dd)",permalink:"/2023/02/15/stack"}},u={authorsImageUrls:[void 0]},h=[{value:"1. Array\ub85c \ud050\ub97c \uad6c\ud604",id:"1-array\ub85c-\ud050\ub97c-\uad6c\ud604",level:2},{value:"2. Linked List\ub85c \ud050\ub97c \uad6c\ud604",id:"2-linked-list\ub85c-\ud050\ub97c-\uad6c\ud604",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1-array\ub85c-\ud050\ub97c-\uad6c\ud604",children:"1. Array\ub85c \ud050\ub97c \uad6c\ud604"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\ub2e8\uc810","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"DeQueue\ub97c \ud558\uba74 \ubc30\uc5f4 \uc55e\ubd80\ubd84\uc774 \uacf5\ubc31\uc774 \ub41c\ub2e4."}),"\n",(0,r.jsx)(n.li,{children:"\ubc30\uc5f4\uc5d0\uc11c \ub9ac\uc5bc \uc778\ub371\uc2a4 \uac12\uc774 \ubb34\ud55c\uc815 \ucee4\uc9c8 \uc218 \uc788\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'showLineNumbers title="javascript"',children:"class Queue {\r\n  constructor() {\r\n    this.queue = [];\r\n    this.head = 0;\r\n    this.tail = 0;\r\n  }\r\n\r\n  // queue \ub300\uae30\ud589\ub82c\uc5d0 \ub370\uc774\ud130 \uc785\ub825\r\n  // tail \ucabd\uc5d0 \ub370\uc774\ud130\uac00 \ucd94\uac00\ub428\r\n  enqueue(value) {\r\n    this.queue[this.tail++] = value;\r\n  }\r\n\r\n  // queue \ub300\uae30\ud589\ub82c\uc5d0\uc11c \ub370\uc774\ud130 \ucd9c\ub825\r\n  // head \ucabd \ub370\uc774\ud130\uac00 \uaebc\ub0b4\uc9c0\uace0 \ub370\uc774\ud130\ub4e4\uc774 \uc55e\uc73c\ub85c \uc62e\uaca8\uc9d0\r\n  dequeue() {\r\n    const value = this.queue[this.head];\r\n    delete this.queue[this.head];\r\n    this.head += 1;\r\n    return value;\r\n  }\r\n\r\n  peek() {\r\n    return this.queue[this.head];\r\n  }\r\n\r\n  size() {\r\n    return this.tail - this.head;\r\n  }\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"2-linked-list\ub85c-\ud050\ub97c-\uad6c\ud604",children:"2. Linked List\ub85c \ud050\ub97c \uad6c\ud604"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'showLineNumbers title="javascript"',children:"class Node {\r\n  constructor(value) {\r\n    this.value = value;\r\n    this.next = null;\r\n  }\r\n}\r\n\r\nclass Queue {\r\n  constructor() {\r\n    this.head = null;\r\n    this.tail = null;\r\n    this.size = 0;\r\n  }\r\n\r\n  enqueue(value) {\r\n    const node = new Node(value);\r\n    if (!this.head) {\r\n      this.head = this.tail = node;\r\n    } else {\r\n      this.tail.next = node;\r\n      this.tail = node;\r\n    }\r\n    this.size += 1;\r\n  }\r\n\r\n  dequeue() {\r\n    const value = this.head.value;\r\n    this.head = this.head.next;\r\n    this.size -= 1;\r\n    return value;\r\n  }\r\n\r\n  peek() {\r\n    return this.head.value;\r\n  }\r\n}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(7294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);