"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6488:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Stack(\uc2a4\ud0dd)",authors:"dldkffh",tags:["\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\ucf54\ub529\ud14c\uc2a4\ud2b8"],enableComments:!0},l=void 0,i={permalink:"/2023/02/15/stack",source:"@site/blog/2023-02-15-stack.md",title:"Stack(\uc2a4\ud0dd)",description:"1. Array\ub97c \uc2a4\ud0dd\ucc98\ub7fc \uc0ac\uc6a9",date:"2023-02-15T00:00:00.000Z",formattedDate:"February 15, 2023",tags:[{label:"\uc54c\uace0\ub9ac\uc998",permalink:"/tags/\uc54c\uace0\ub9ac\uc998"},{label:"javascript",permalink:"/tags/javascript"},{label:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4",permalink:"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"},{label:"\ucf54\ub529\ud14c\uc2a4\ud2b8",permalink:"/tags/\ucf54\ub529\ud14c\uc2a4\ud2b8"}],readingTime:.125,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"Stack(\uc2a4\ud0dd)",authors:"dldkffh",tags:["\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\ucf54\ub529\ud14c\uc2a4\ud2b8"],enableComments:!0},prevItem:{title:"Queue(\ud050)",permalink:"/2023/03/03/queue"},nextItem:{title:"Array(\ubc30\uc5f4)",permalink:"/2023/02/13/array"}},c={authorsImageUrls:[void 0]},p=[{value:"1. Array\ub97c \uc2a4\ud0dd\ucc98\ub7fc \uc0ac\uc6a9",id:"1-array\ub97c-\uc2a4\ud0dd\ucc98\ub7fc-\uc0ac\uc6a9",level:2}],s={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-array\ub97c-\uc2a4\ud0dd\ucc98\ub7fc-\uc0ac\uc6a9"},"1. Array\ub97c \uc2a4\ud0dd\ucc98\ub7fc \uc0ac\uc6a9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'showLineNumbers title="javascript"',showLineNumbers:!0,title:'"javascript"'},"const stack = [];\n\n// Push\nstack.push(x);\n\n// Pop\nstack.pop();\n")))}f.isMDXComponent=!0}}]);