"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[764],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(t),m=a,g=s["".concat(c,".").concat(m)]||s[m]||f[m]||o;return t?n.createElement(g,l(l({ref:r},u),{},{components:t})):n.createElement(g,l({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=t[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6241:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=t(7462),a=(t(7294),t(3905));const o={title:"Graph(\uadf8\ub798\ud504)",authors:"dldkffh",tags:["\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\ucf54\ub529\ud14c\uc2a4\ud2b8"]},l=void 0,p={permalink:"/2023/03/16/graph",source:"@site/blog/2023-03-16-graph.md",title:"Graph(\uadf8\ub798\ud504)",description:"1. \uc778\uc811 \ubc30\uc5f4",date:"2023-03-16T00:00:00.000Z",formattedDate:"March 16, 2023",tags:[{label:"\uc54c\uace0\ub9ac\uc998",permalink:"/tags/\uc54c\uace0\ub9ac\uc998"},{label:"javascript",permalink:"/tags/javascript"},{label:"\ud504\ub85c\uadf8\ub798\uba38\uc2a4",permalink:"/tags/\ud504\ub85c\uadf8\ub798\uba38\uc2a4"},{label:"\ucf54\ub529\ud14c\uc2a4\ud2b8",permalink:"/tags/\ucf54\ub529\ud14c\uc2a4\ud2b8"}],readingTime:1.09,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"Graph(\uadf8\ub798\ud504)",authors:"dldkffh",tags:["\uc54c\uace0\ub9ac\uc998","javascript","\ud504\ub85c\uadf8\ub798\uba38\uc2a4","\ucf54\ub529\ud14c\uc2a4\ud2b8"]},prevItem:{title:"Tree(\ud2b8\ub9ac)",permalink:"/2023/03/19/tree"},nextItem:{title:"Queue(\ud050)",permalink:"/2023/03/03/queue"}},c={authorsImageUrls:[void 0]},i=[{value:"1. \uc778\uc811 \ubc30\uc5f4",id:"1-\uc778\uc811-\ubc30\uc5f4",level:2}],u={toc:i},s="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\uc778\uc811-\ubc30\uc5f4"},"1. \uc778\uc811 \ubc30\uc5f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// 5 X 5 false \ubc30\uc5f4 \uc0dd\uc131\nconst graph = Array.from(Array(5), () => Array(5).fill(false));\nconsole.log(graph);\n// graph[\ucd9c\ubc1c\uc9c0][\ubaa9\uc801\uc9c0] \ud574\ub2f9 \ubd80\ubd84\uc744 true\ub85c \uc124\uc815\ngraph[0][1] = true;\ngraph[0][3] = true;\ngraph[1][2] = true;\ngraph[2][0] = true;\ngraph[2][4] = true;\ngraph[3][2] = true;\ngraph[4][0] = true;\nconsole.log(graph);\n")))}f.isMDXComponent=!0}}]);