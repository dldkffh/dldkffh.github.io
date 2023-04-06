"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[5668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Heap(\ud799)",authors:"dldkffh",tags:["\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4"],enableComments:!0},l=void 0,i={permalink:"/2023/03/19/heap",source:"@site/blog/2023-03-19-heap.md",title:"Heap(\ud799)",description:"\uc6b0\uc120\uc21c\uc704 \ud050",date:"2023-03-19T00:00:00.000Z",formattedDate:"March 19, 2023",tags:[{label:"\uc54c\uace0\ub9ac\uc998",permalink:"/tags/\uc54c\uace0\ub9ac\uc998"},{label:"javascript",permalink:"/tags/javascript"},{label:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4",permalink:"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"}],readingTime:3.075,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"Heap(\ud799)",authors:"dldkffh",tags:["\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4"],enableComments:!0},prevItem:{title:"Trie(\ud2b8\ub77c\uc774)",permalink:"/2023/04/04/trie"},nextItem:{title:"Tree(\ud2b8\ub9ac)",permalink:"/2023/03/19/tree"}},c={authorsImageUrls:[void 0]},p=[{value:"\uc6b0\uc120\uc21c\uc704 \ud050",id:"\uc6b0\uc120\uc21c\uc704-\ud050",level:3}],u={toc:p},f="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\uc6b0\uc120\uc21c\uc704-\ud050"},"\uc6b0\uc120\uc21c\uc704 \ud050"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FIFO\uc778 \ud050\uc640 \ub2ec\ub9ac \uc6b0\uc120 \uc21c\uc704\uac00 \ub192\uc740 \uc694\uc18c\uac00 \uba3c\uc800 \ub098\uac00\ub294 \ud050"),(0,a.kt)("li",{parentName:"ul"},"\uc6b0\uc120\uc21c\uc704 \ud050\ub294 \uc790\ub8cc\uad6c\uc870\uac00 \uc544\ub2cc \uac1c\ub150"),(0,a.kt)("li",{parentName:"ul"},"\ud799\uc740 \uc6b0\uc120\uc21c\uc704\ub97c \uad6c\ud604\ud558\uae30 \uc704\ud55c \uac00\uc7a5 \uc801\ud569\ud55c \ubc29\ubc95")))}s.isMDXComponent=!0}}]);