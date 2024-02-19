"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[5377],{740:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=t(5893),l=t(1151);const s={title:"HSRP States/Configuration",authors:"dldkffh",tags:["HSRP","\ud504\ub85c\ud1a0\ucf5c","\ub124\ud2b8\uc6cc\ud06c","\uac1c\ub150"],enableComments:!0},r=void 0,a={permalink:"/2024/02/15/hsrp-states-configuration",source:"@site/blog/2024-02-15-hsrp-states-configuration.md",title:"HSRP States/Configuration",description:"HSRP States",date:"2024-02-15T00:00:00.000Z",formattedDate:"2024\ub144 2\uc6d4 15\uc77c",tags:[{label:"HSRP",permalink:"/tags/hsrp"},{label:"\ud504\ub85c\ud1a0\ucf5c",permalink:"/tags/\ud504\ub85c\ud1a0\ucf5c"},{label:"\ub124\ud2b8\uc6cc\ud06c",permalink:"/tags/\ub124\ud2b8\uc6cc\ud06c"},{label:"\uac1c\ub150",permalink:"/tags/\uac1c\ub150"}],readingTime:2.06,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"HSRP States/Configuration",authors:"dldkffh",tags:["HSRP","\ud504\ub85c\ud1a0\ucf5c","\ub124\ud2b8\uc6cc\ud06c","\uac1c\ub150"],enableComments:!0},unlisted:!1,prevItem:{title:"native & blackhole VLAN",permalink:"/2024/02/18/native-vlan-blackhole copy"},nextItem:{title:"FHRPs - HSRP, VRRP, GLBP",permalink:"/2024/02/14/fhrps-hsrp-vrrp-glbp"}},c={authorsImageUrls:[void 0]},o=[{value:"HSRP States",id:"hsrp-states",level:3},{value:"HSRP Configuration",id:"hsrp-configuration",level:3},{value:"\ucd9c\ucc98",id:"\ucd9c\ucc98",level:3}];function d(n){const e={a:"a",h3:"h3",li:"li",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"hsrp-states",children:"HSRP States"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Initial : HSRP \ub3d9\uc791 \uc54a\ud568"}),"\n",(0,i.jsx)(e.li,{children:"Learn : Hello \ud328\ud0b7 \uad50\ud658 \uc9c4\ud589\uc911"}),"\n",(0,i.jsx)(e.li,{children:"Listen : Hello \ud328\ud0b7 \uc644\ub8cc \ubc0f \uc8fc\uae30\uc801 \uad50\ud658"}),"\n",(0,i.jsx)(e.li,{children:"Speak : Hello \ud328\ud0b7 \uc8fc\uae30\uc801\uc73c\ub85c \uad50\ud658, Active \ub77c\uc6b0\ud130\uc640 Standby \ub77c\uc6b0\ud130 \ube44\uad50\uc911"}),"\n",(0,i.jsx)(e.li,{children:"Standby : Hello \ud328\ud0b7 \uc8fc\uae30\uc801\uc73c\ub85c \uad50\ud658, Standby \ub77c\uc6b0\ud130 \uc120\ucd9c"}),"\n",(0,i.jsx)(e.li,{children:"Active : Hello \ud328\ud0b7 \uc8fc\uae30\uc801\uc73c\ub85c \uad50\ud658, Active \ub77c\uc6b0\ud130 \uc120\ucd9c"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["Speak \uc0c1\ud0dc\uc5d0\uc11c \ub77c\uc6b0\ud130\ub07c\ub9ac \uc11c\ub85c \uacbd\uc7c1","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc790\uc2e0\uc758 \uac12\uc774 \uc88b\ub2e4\uba74 Active"}),"\n",(0,i.jsx)(e.li,{children:"\uacbd\uc7c1\uc5d0\uc11c \uc9c4 \ub77c\uc6b0\ud130\ub294 Standby \uc0c1\ud0dc\ub85c \ub118\uc5b4\uac10"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Active \uacfc\uc815 \uc608\uc2dc","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Listen -> Speak -> Standby -> Active"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["Standby \uacfc\uc815 \uc608\uc2dc","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Listen -> Speak -> Listen -> Speak -> Standby"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"hsrp-configuration",children:"HSRP Configuration"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["priority(\uc6b0\uc120 \uc0ac\ud56d)","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uac00\uc7a5 \ub192\uc740 \uac12\uc744 \uac16\ub294 \ub77c\uc6b0\ud130\uac00 Active \ub77c\uc6b0\ud130\uac00 \ub428"}),"\n",(0,i.jsx)(e.li,{children:"\uae30\ubcf8\uac12 : 100"}),"\n",(0,i.jsx)(e.li,{children:"\uc6b0\uc120 \uc21c\uc704 \ubc94\uc704 : 1-255 \uc0ac\uc774"}),"\n",(0,i.jsx)(e.li,{children:"\uac12\uc774 \ub3d9\uc77c\ud55c \uacbd\uc6b0 \uac00\uc7a5 \ub192\uc740 ip\ub97c \uac00\uc9c4 \ub77c\uc6b0\ud130\uac00 Active \ub77c\uc6b0\ud130\uac00 \ub428"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["preempt(\uc120\uc810\ud558\ub2e4)","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\ubcf8\ub798 Active \ub77c\uc6b0\ud130\uac00 \uc8fd\uc5c8\ub2e4\uac00 \ub2e4\uc2dc \uc0b4\uc544\ub09c \ub300\uae30 \uc0c1\ud0dc\uc5d0\uc11c Active \uc0c1\ud0dc\ub85c \ubcc0\ud658\uc744 \ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\ub294 \uae30\ub2a5"}),"\n",(0,i.jsx)(e.li,{children:"\ub51c\ub808\uc774 \ud0c0\uc784 \ud544\uc694"}),"\n",(0,i.jsx)(e.li,{children:"Standby\uc5d0\uc11c \ubc14\ub85c Active\uac00 \ub418\uba74 \ub77c\uc6b0\ud305 \ud14c\uc774\ube14\uc744 \ud559\uc2b5\ud558\uc9c0 \ubabb\ud558\uc5ec \ud1b5\uc2e0\uc7a5\uc560 \ubc1c\uc0dd"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["timer","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"default hello time 3\ucd08, hold time 10\ucd08 \uc124\uc815 \uac00\ub2a5"}),"\n",(0,i.jsx)(e.li,{children:"hold \ud0c0\uc784 \uac12\uc740 hello \ud0c0\uc784 \uac12\uc758 3\ubc30 \uc774\uc0c1 \ub418\uc5b4\uc57c \ud568"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["tracking(\ucd94\uc801)","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\uc678\ubd80\uc5d0\uc11c\ub294 HSRP\uac00 \uad6c\uc131\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544 \uc0c1\ub2e8\uc73c\ub85c \uac00\ub294 \uc778\ud130\ud398\uc774\uc2a4 \uc7a5\uc560\uc2dc priority \uac12\uc744 \uc904\uc5ec\uc90c\uc73c\ub85c\uc11c Standby \ub77c\uc6b0\ud130\uac00 Active \ub77c\uc6b0\ud130\ub85c \ubcc0\ud558\uac8c \ud558\uc5ec \ud1b5\uc2e0\uc774 \ub418\uac8c \ud558\ub294 \uc124\uc815"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\ucd9c\ucc98",children:"\ucd9c\ucc98"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://blog.naver.com/gaegurijump/110185200763",children:"https://blog.naver.com/gaegurijump/110185200763"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://feelsogoodcamp.tistory.com/48",children:"https://feelsogoodcamp.tistory.com/48"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>r});var i=t(7294);const l={},s=i.createContext(l);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);