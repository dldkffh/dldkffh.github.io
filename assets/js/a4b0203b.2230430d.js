"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[5877],{79905:(n,l,i)=>{i.r(l),i.d(l,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>r,metadata:()=>t,toc:()=>h});var e=i(85893),s=i(11151);const r={title:"LAG, LACP",authors:"dldkffh",tags:["LAG","LACP","\ub124\ud2b8\uc6cc\ud06c","\uac1c\ub150"],enableComments:!0},d=void 0,t={permalink:"/2024/02/06/lag-lacp",source:"@site/blog/2024-02-06-lag-lacp.md",title:"LAG, LACP",description:"LAG(Link Aggregation Group, \ub9c1\ud06c \uc560\uadf8\ub9ac\uac8c\uc774\uc158 \uadf8\ub8f9)",date:"2024-02-06T00:00:00.000Z",tags:[{inline:!0,label:"LAG",permalink:"/tags/lag"},{inline:!0,label:"LACP",permalink:"/tags/lacp"},{inline:!0,label:"\ub124\ud2b8\uc6cc\ud06c",permalink:"/tags/\ub124\ud2b8\uc6cc\ud06c"},{inline:!0,label:"\uac1c\ub150",permalink:"/tags/\uac1c\ub150"}],readingTime:7.005,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"LAG, LACP",authors:"dldkffh",tags:["LAG","LACP","\ub124\ud2b8\uc6cc\ud06c","\uac1c\ub150"],enableComments:!0},unlisted:!1,prevItem:{title:"DHCP VS. DNS",permalink:"/2024/02/06/dhcp-vs-dns"},nextItem:{title:"LLDP, CDP",permalink:"/2024/02/06/lldp-cdp"}},c={authorsImageUrls:[void 0]},h=[{value:"LAG(Link Aggregation Group, \ub9c1\ud06c \uc560\uadf8\ub9ac\uac8c\uc774\uc158 \uadf8\ub8f9)",id:"laglink-aggregation-group-\ub9c1\ud06c-\uc560\uadf8\ub9ac\uac8c\uc774\uc158-\uadf8\ub8f9",level:3},{value:"LACP (Link Aggregation Control Protocol, \ub9c1\ud06c \uc560\uadf8\ub9ac\uac8c\uc774\uc158 \ucee8\ud2b8\ub864 \ud504\ub85c\ud1a0\ucf5c)",id:"lacp-link-aggregation-control-protocol-\ub9c1\ud06c-\uc560\uadf8\ub9ac\uac8c\uc774\uc158-\ucee8\ud2b8\ub864-\ud504\ub85c\ud1a0\ucf5c",level:4},{value:"\ub2e4\ub978 \uc6b0\uc0b0 \uc6a9\uc5b4\ub4e4",id:"\ub2e4\ub978-\uc6b0\uc0b0-\uc6a9\uc5b4\ub4e4",level:4},{value:"\ubaa8\ub4dc",id:"\ubaa8\ub4dc",level:4},{value:"PAgP (Port Aggregation Protocol, \ud329\ud53c)",id:"pagp-port-aggregation-protocol-\ud329\ud53c",level:3},{value:"\ubaa8\ub4dc",id:"\ubaa8\ub4dc-1",level:4},{value:"\uc0ac\uc6a9\uc870\uac74 \ubc0f \uc8fc\uc758\uc0ac\ud56d",id:"\uc0ac\uc6a9\uc870\uac74-\ubc0f-\uc8fc\uc758\uc0ac\ud56d",level:3},{value:"Cisco \uc7a5\ube44 LAG \uc0ac\uc6a9\uc2dc \uac00\uc774\ub4dc\ub77c\uc778",id:"cisco-\uc7a5\ube44-lag-\uc0ac\uc6a9\uc2dc-\uac00\uc774\ub4dc\ub77c\uc778",level:3},{value:"\ucd9c\ucc98",id:"\ucd9c\ucc98",level:3}];function x(n){const l={a:"a",h3:"h3",h4:"h4",li:"li",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.h3,{id:"laglink-aggregation-group-\ub9c1\ud06c-\uc560\uadf8\ub9ac\uac8c\uc774\uc158-\uadf8\ub8f9",children:"LAG(Link Aggregation Group, \ub9c1\ud06c \uc560\uadf8\ub9ac\uac8c\uc774\uc158 \uadf8\ub8f9)"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsxs)(l.li,{children:["\ucef4\ud4e8\ud130 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ud558\ub098\uc758 \uc5f0\uacb0\uc774 \uc9c0\ud0f1\ud560 \uc218 \uc788\ub294 \uac83 \uc774\uc0c1\uc73c\ub85c ",(0,e.jsx)(l.a,{href:"https://ko.wikipedia.org/wiki/%EC%8A%A4%EB%A3%A8%ED%92%8B",children:"\uc2a4\ub8e8\ud48b"}),"\uc744 \uc99d\uac00\uc2dc\ud0a4\uae30 \uc704\ud574, \ub610\ub294 \ub9c1\ud06c \uc911 \ud558\ub098\uac00 \uc2e4\ud328\ud560 \uac83\uc744 \ub300\ube44\ud558\uc5ec \ub2e4\uc911\ud654(redundancy)\ub97c \uc81c\uacf5\ud558\uae30 \uc704\ud574, \uc5ec\ub7ec \ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0\uc744 \ubcd1\ub82c\ub85c \uc5f0\uacb0\ud558\ub294 \uc5ec\ub7ec \uac00\uc9c0 \ubc29\uc2dd"]}),"\n",(0,e.jsx)(l.li,{children:"\ub9c1\ud06c \uc560\uadf8\ub9ac\uac8c\uc774\uc158 \uadf8\ub8f9(LAG)\uc740 \uc218\ub9ce\uc740 \ubb3c\ub9ac\uc801 \ud3ec\ud2b8\ub97c \ud558\ub098\ub85c \ubcd1\ud569\ud558\uc5ec \ud558\ub098\uc758 \uace0\ub300\uc5ed \ub370\uc774\ud130 \uacbd\ub85c\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\uba70 \uadf8\ub8f9 \ub0b4 \uba64\ubc84 \ud3ec\ud2b8\ub4e4 \uac04\uc5d0 \ud2b8\ub798\ud53d \ubd80\ud558 \ubd84\uc0b0\uc744 \uad6c\ud604\ud558\uace0 \uc5f0\uacb0\uc758 \uc2e0\ub8b0\uc131\uc744 \uac15\ud654"}),"\n"]}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsxs)(l.li,{children:["\uc774\ub354\ub137 \uc5f0\uacb0\uc5d0\uc11c \ub450 \uac00\uc9c0 \ubb38\uc81c\ub97c \ud574\uacb0","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsxs)(l.li,{children:["\ub300\uc5ed\ud3ed \uc81c\ud55c","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\ub300\uc5ed\ud3ed\uc758 \uc694\uad6c\ub294 \uc120\ud615\uc801\uc73c\ub85c \ub298\uc5b4\ub098\uc9c0 \uc54a\uc74c"}),"\n",(0,e.jsxs)(l.li,{children:["\uc774\ub354\ub137\uc758 \ub300\uc5ed\ud3ed\uc740 \uc5ed\uc0ac\uc801\uc73c\ub85c \uc5ec\ub7ec \uc138\ub300\uc5d0 \uac78\uccd0 10\uc529 \uc99d\uac00\ud574\uc74c","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"10 Mbit/\ucd08"}),"\n",(0,e.jsx)(l.li,{children:"100 Mbit/\ucd08"}),"\n",(0,e.jsx)(l.li,{children:"1000 Mbit/\ucd08"}),"\n",(0,e.jsx)(l.li,{children:"10,000 Mbit/\ucd08"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(l.li,{children:"\ub300\uc5ed\ud3ed \ud55c\uacc4\uc5d0 \ub9c8\uc8fc\uce58\uae30 \uc2dc\uc791\ud558\uba74 \uc720\uc77c\ud55c \uc635\uc158\uc740 \ube44\uc6a9\uc774 \uc5c4\uccad\ub0a0 \uc218 \uc788\ub294 \ub2e4\uc74c \uc138\ub300\ub85c \uc774\ub3d9\ud558\ub294 \uac83 \ubfd0"}),"\n",(0,e.jsxs)(l.li,{children:["\ub2e4\ub978 \uc194\ub8e8\uc158 : \ucc44\ub110 \ubcf8\ub529","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"1990\ub144\ub300 \ucd08\uc5d0 \ub124\ud2b8\uc6cc\ud06c \uc81c\uc870\uc5c5\uccb4\ub4e4 \uc911 \ub2e4\uc218\uac00 \ub3c4\uc785\ud55c \uac83"}),"\n",(0,e.jsx)(l.li,{children:"2\uac1c\uc758 \ubb3c\ub9ac \uc774\ub354\ub137 \ub9c1\ud06c\ub97c \ud558\ub098\uc758 \ub17c\ub9ac \ub9c1\ud06c\ub85c \ubcd1\ud569\ud558\ub294 \uac83"}),"\n",(0,e.jsx)(l.li,{children:"\ub300\ubd80\ubd84\uc740 \uc218\ub3d9 \uad6c\uc131 \ubc0f \uc720\uc0ac \uc7a5\ube44\uac00 \uc560\uadf8\ub9ac\uac8c\uc774\uc158\uc758 \uc591\uce21\uc5d0 \ud544\uc694"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(l.li,{children:["\ud68c\ubcf5\uc131 \uacb0\uc5ec","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\uc77c\ubc18\uc801\uc778 \ud3ec\ud2b8-\ucf00\uc774\ube14-\ud3ec\ud2b8 \uc5f0\uacb0\uc5d0\uc11c 3\uac1c\uc758 \ub2e8\uc77c \uc7a5\uc560\uc810\uc744 \ub3d9\ubc18"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(l.li,{children:"\ub300\uc5ed\ud3ed \uc99d\uac00"}),"\n",(0,e.jsx)(l.li,{children:"\ud68c\uc120 \uc774\uc911\ud654"}),"\n",(0,e.jsx)(l.li,{children:"\ub85c\ub4dc\ubc38\ub7f0\uc2f1"}),"\n",(0,e.jsx)(l.li,{children:"\ubc15\uc2a4 \uad6c\uc131\uc5d0\uc11c STP\uc758 \uc601\ud5a5\uc744 \ucd5c\uc18c\ud654"}),"\n"]}),"\n",(0,e.jsx)(l.h4,{id:"lacp-link-aggregation-control-protocol-\ub9c1\ud06c-\uc560\uadf8\ub9ac\uac8c\uc774\uc158-\ucee8\ud2b8\ub864-\ud504\ub85c\ud1a0\ucf5c",children:"LACP (Link Aggregation Control Protocol, \ub9c1\ud06c \uc560\uadf8\ub9ac\uac8c\uc774\uc158 \ucee8\ud2b8\ub864 \ud504\ub85c\ud1a0\ucf5c)"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"IEEE \ub9c1\ud06c \uc560\uadf8\ub9ac\uac8c\uc774\uc158 \ud45c\uc900\ud654 \uc791\uc5c5"}),"\n",(0,e.jsxs)(l.li,{children:["IEEE 802.3 \uadf8\ub8f9\uc740 \uc2a4\ud130\ub514 \uadf8\ub8f9\uc744 \uad6c\uc131\ud558\uc5ec 1997\ub144 11\uc6d4 \ubbf8\ud305\uc5d0\uc11c \uc0c1\ud638 \uc6b4\uc6a9 \uac00\ub2a5\ud55c \ub9c1\ud06c \uacc4\uce35 \ud45c\uc900\uc744 \ub9cc\ub4e6","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"2000\ub144: 802.3ad \ucd5c\ucd08\ud310"}),"\n",(0,e.jsx)(l.li,{children:"2008\ub144: 802.1 \ub808\uc774\uc5b4\ub85c \uc774\ub3d9"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(l.h4,{id:"\ub2e4\ub978-\uc6b0\uc0b0-\uc6a9\uc5b4\ub4e4",children:"\ub2e4\ub978 \uc6b0\uc0b0 \uc6a9\uc5b4\ub4e4"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\ud3ec\ud2b8 \ud2b8\ub801\ud0b9(port trunking)"}),"\n",(0,e.jsx)(l.li,{children:"\ub9c1\ud06c \ubc88\ub4e4\ub9c1(link bundling)"}),"\n",(0,e.jsx)(l.li,{children:"\uc774\ub354\ub137/\ub124\ud2b8\uc6cc\ud06c/NIC \ubcf8\ub529"}),"\n",(0,e.jsx)(l.li,{children:"NIC \ud2f0\ubc0d(NIC teaming)"}),"\n",(0,e.jsx)(l.li,{children:"\ub124\ud2b8\uc6cc\ud06c \uc774\uc911\ud654"}),"\n",(0,e.jsx)(l.li,{children:"\ub124\ud2b8\uc6cc\ud06c \ub2e4\uc911\ud654"}),"\n",(0,e.jsx)(l.li,{children:"\uc774\ub354\ucc44\ub110 (EtherChannel)"}),"\n"]}),"\n",(0,e.jsx)(l.h4,{id:"\ubaa8\ub4dc",children:"\ubaa8\ub4dc"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsxs)(l.li,{children:["active","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\uc0c1\ub300\ubc29 \uc778\ud130\ud398\uc774\uc2a4\ub85c LACP \ud328\ud0b7\uc744 \uc815\uae30\uc801\uc73c\ub85c \uc804\uc1a1\ud558\uba70 \ud611\uc0c1\uc744 \uc2dc\uc791"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(l.li,{children:["passive","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\uc0c1\ub300\ubc29\uc774 \uc804\uc1a1\ud558\ub294 LACP \ud328\ud0b7\uc744 \uc218\uc2e0\ud560\ub54c\uae4c\uc9c0 \ub300\uae30\ud558\uba70, \ud611\uc0c1\uc774 \uc131\uacf5\ud558\uba74 \ucc44\ub110\ub9c1"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(l.li,{children:["on","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\ud611\uc0c1 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc774\ub354\ucc44\ub110 \ud3ec\ud2b8\ub97c \ud65c\uc131\ud654"}),"\n",(0,e.jsx)(l.li,{children:"\ud611\uc0c1\uacfc\uc815\uc774 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ud328\ud0b7 \uc190\uc2e4\uacfc \ud504\ub808\uc784 \ub8e8\ud504\uac00 \ubc1c\uc0dd\ud560 \uac00\ub2a5\uc131\uc774 \uc874\uc7ac"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(l.li,{children:"passive - passive \uc758 \uacbd\uc6b0 \uc5f0\uacb0 \ubd88\uac00"}),"\n"]}),"\n",(0,e.jsxs)(l.table,{children:[(0,e.jsx)(l.thead,{children:(0,e.jsxs)(l.tr,{children:[(0,e.jsx)(l.th,{}),(0,e.jsx)(l.th,{children:"Active"}),(0,e.jsx)(l.th,{children:"Pssive"}),(0,e.jsx)(l.th,{children:"On"})]})}),(0,e.jsxs)(l.tbody,{children:[(0,e.jsxs)(l.tr,{children:[(0,e.jsx)(l.td,{children:"Active"}),(0,e.jsx)(l.td,{children:"YES"}),(0,e.jsx)(l.td,{children:"YES"}),(0,e.jsx)(l.td,{children:"NO"})]}),(0,e.jsxs)(l.tr,{children:[(0,e.jsx)(l.td,{children:"Pssive"}),(0,e.jsx)(l.td,{children:"YES"}),(0,e.jsx)(l.td,{children:"NO"}),(0,e.jsx)(l.td,{children:"NO"})]}),(0,e.jsxs)(l.tr,{children:[(0,e.jsx)(l.td,{children:"On"}),(0,e.jsx)(l.td,{children:"NO"}),(0,e.jsx)(l.td,{children:"NO"}),(0,e.jsx)(l.td,{children:"YES"})]})]})]}),"\n",(0,e.jsx)(l.h3,{id:"pagp-port-aggregation-protocol-\ud329\ud53c",children:"PAgP (Port Aggregation Protocol, \ud329\ud53c)"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"Cisco \ub3c5\uc810 \uc774\ub354\ucc44\ub110 \ubaa8\ub4dc"}),"\n"]}),"\n",(0,e.jsx)(l.h4,{id:"\ubaa8\ub4dc-1",children:"\ubaa8\ub4dc"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsxs)(l.li,{children:["desirable","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\uc0c1\ub300\ubc29 \uc778\ud130\ud398\uc774\uc2a4\ub85c PAGP \ud328\ud0b7\uc744 \uc815\uae30\uc801\uc73c\ub85c \uc804\uc1a1\ud558\uba70 \ud611\uc0c1\uc744 \uc2dc\uc791"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(l.li,{children:["auto","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\uc0c1\ub300\ubc29\uc774 \uc804\uc1a1\ud558\ub294 PAGP \ud328\ud0b7\uc744 \uc218\uc2e0\ud560\ub54c\uae4c\uc9c0 \ub300\uae30\ud558\uba70, \ud611\uc0c1\uc774 \uc131\uacf5\ud558\uba74 \ucc44\ub110\ub9c1"}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(l.li,{children:["on","\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\ud611\uc0c1 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc774\ub354\ucc44\ub110 \ud3ec\ud2b8\ub97c \ud65c\uc131\ud654"}),"\n",(0,e.jsx)(l.li,{children:"\ud611\uc0c1\uacfc\uc815\uc774 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ud328\ud0b7 \uc190\uc2e4\uacfc \ud504\ub808\uc784 \ub8e8\ud504\uac00 \ubc1c\uc0dd\ud560 \uac00\ub2a5\uc131\uc774 \uc874\uc7ac"}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(l.li,{children:"auto - auto \uc758 \uacbd\uc6b0 \uc5f0\uacb0 \ubd88\uac00"}),"\n"]}),"\n",(0,e.jsxs)(l.table,{children:[(0,e.jsx)(l.thead,{children:(0,e.jsxs)(l.tr,{children:[(0,e.jsx)(l.th,{}),(0,e.jsx)(l.th,{children:"Desirable"}),(0,e.jsx)(l.th,{children:"Auto"}),(0,e.jsx)(l.th,{children:"On"})]})}),(0,e.jsxs)(l.tbody,{children:[(0,e.jsxs)(l.tr,{children:[(0,e.jsx)(l.td,{children:"Desirable"}),(0,e.jsx)(l.td,{children:"YES"}),(0,e.jsx)(l.td,{children:"YES"}),(0,e.jsx)(l.td,{children:"NO"})]}),(0,e.jsxs)(l.tr,{children:[(0,e.jsx)(l.td,{children:"Auto"}),(0,e.jsx)(l.td,{children:"YES"}),(0,e.jsx)(l.td,{children:"NO"}),(0,e.jsx)(l.td,{children:"NO"})]}),(0,e.jsxs)(l.tr,{children:[(0,e.jsx)(l.td,{children:"On"}),(0,e.jsx)(l.td,{children:"NO"}),(0,e.jsx)(l.td,{children:"NO"}),(0,e.jsx)(l.td,{children:"YES"})]})]})]}),"\n",(0,e.jsx)(l.h3,{id:"\uc0ac\uc6a9\uc870\uac74-\ubc0f-\uc8fc\uc758\uc0ac\ud56d",children:"\uc0ac\uc6a9\uc870\uac74 \ubc0f \uc8fc\uc758\uc0ac\ud56d"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"Vlan, Speed, Duplex, STP \uc124\uc815\uac12\uc774 \ubaa8\ub450 \ub3d9\uc77c\ud574\uc57c \uc124\uc815\uac00\ub2a5\ud558\ub2e4."}),"\n",(0,e.jsx)(l.li,{children:"Trunk port\ub97c \uc774\ub354\ucc44\ub110\ub85c \uad6c\uc131\ud558\ub824\uba74 \ubaa8\ub4e0 Port\uac00 \uac19\uc740 Trunk mode\ub85c \uad6c\uc131\ub418\uc5b4\uc57c \ud55c\ub2e4."}),"\n",(0,e.jsx)(l.li,{children:"Switched port analyzer(SPAN, \ud3ec\ud2b8 \ubbf8\ub7ec\ub9c1) \uc5d0\uc11c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4."}),"\n",(0,e.jsx)(l.li,{children:"Port-security \uc124\uc815\uc2dc \uad6c\uc131 \ubd88\uac00\ub2a5\ud558\ub2e4."}),"\n",(0,e.jsx)(l.li,{children:"Fast, Gigabit Ethernet \uc5d0\uc11c\ub294 \uad6c\uc131 \uac00\ub2a5\ud558\uc9c0\ub9cc Ethernet(10Mbps)\uc740 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294\ub2e4."}),"\n"]}),"\n",(0,e.jsx)(l.h3,{id:"cisco-\uc7a5\ube44-lag-\uc0ac\uc6a9\uc2dc-\uac00\uc774\ub4dc\ub77c\uc778",children:"Cisco \uc7a5\ube44 LAG \uc0ac\uc6a9\uc2dc \uac00\uc774\ub4dc\ub77c\uc778"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"\ucee8\ud2b8\ub864\ub7ec\uc758 \ud3ec\ud2b8\ub97c \ubcc4\ub3c4\uc758 LAG \uadf8\ub8f9\uc73c\ub85c \uad6c\uc131\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub864\ub7ec\ub2f9 \ud558\ub098\uc758 LAG \uadf8\ub8f9\ub9cc \uc9c0\uc6d0\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c LAG \ubaa8\ub4dc\uc5d0\uc11c \ucee8\ud2b8\ub864\ub7ec\ub97c \ud558\ub098\uc758 \uc774\uc6c3 \uc7a5\uce58\uc5d0\ub9cc \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,e.jsx)(l.li,{children:"LAG\uac00 \ud65c\uc131\ud654\ub418\uba74 LAG \uad6c\uc131\uc5d0 \ub300\ud55c \ubcc0\uacbd\uc740 \ucee8\ud2b8\ub864\ub7ec \uc7ac\ubd80\ud305\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),"\n",(0,e.jsx)(l.li,{children:"LAG\ub97c \ud65c\uc131\ud654\ud560 \ub54c \ud558\ub098\uc758 \ub17c\ub9ac \ud3ec\ud2b8\ub9cc \ud544\uc694\ud558\uae30 \ub54c\ubb38\uc5d0 \ud558\ub098\uc758 AP-\uad00\ub9ac\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub9cc\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,e.jsx)(l.li,{children:"LAG\ub97c \ud65c\uc131\ud654\ud558\uba74 \ubaa8\ub4e0 \ub3d9\uc801 AP-\uad00\ub9ac\uc790 \uc778\ud130\ud398\uc774\uc2a4\uc640 \ubbf8\uc9c0\uc815 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc0ad\uc81c\ub418\uace0 \ubaa8\ub4e0 WLAN\uc774 \uad00\ub9ac \uc778\ud130\ud398\uc774\uc2a4\uc5d0 \ub9e4\ud551\ub429\ub2c8\ub2e4."}),"\n",(0,e.jsx)(l.li,{children:"LAG\ub97c \ud65c\uc131\ud654\ud558\uba74 29\uac1c \uc774\uc678\uc758 1\ucc28 \ud3ec\ud2b8\uc640 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\ub4e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n",(0,e.jsx)(l.li,{children:"LAG\ub97c \ud65c\uc131\ud654\ud558\uba74 \ubaa8\ub4e0 \ud3ec\ud2b8\uac00 \uae30\ubcf8\uc801\uc73c\ub85c LAG\uc5d0 \ucc38\uc5ec\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c, \ub2f9\uc2e0\uc740 \uc774\uc6c3 \uc2a4\uc704\uce58\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uc5f0\uacb0\ub41c \ud3ec\ud2b8\uc5d0 \ub300\ud574 LAG\ub97c \uad6c\uc131\ud574\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,e.jsx)(l.li,{children:"LAG\ub97c \ud65c\uc131\ud654\ud558\uba74 \ud3ec\ud2b8 \ubbf8\ub7ec\ub9c1\uc774 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,e.jsx)(l.h3,{id:"\ucd9c\ucc98",children:"\ucd9c\ucc98"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:(0,e.jsx)(l.a,{href:"https://ko.m.wikipedia.org/wiki/%EB%A7%81%ED%81%AC_%EC%95%A0%EA%B7%B8%EB%A6%AC%EA%B2%8C%EC%9D%B4%EC%85%98",children:"\uc704\ud0a4\ubc31\uacfc - \ub9c1\ud06c \uc560\uadf8\ub9ac\uac8c\uc774\uc158"})}),"\n",(0,e.jsx)(l.li,{children:(0,e.jsx)(l.a,{href:"https://community.cisco.com/t5/wireless-mobility-knowledge-base/lag-link-aggregation/ta-p/3128669",children:"CISCO community - LAG - Link Aggregation"})}),"\n",(0,e.jsx)(l.li,{children:(0,e.jsx)(l.a,{href:"https://daengsik.tistory.com/41",children:"IT Net Tech - \ub124\ud2b8\uc6cc\ud06c - \uc774\ub354\ucc44\ub110 (EtherChannel)"})}),"\n"]})]})}function j(n={}){const{wrapper:l}={...(0,s.a)(),...n.components};return l?(0,e.jsx)(l,{...n,children:(0,e.jsx)(x,{...n})}):x(n)}},11151:(n,l,i)=>{i.d(l,{Z:()=>t,a:()=>d});var e=i(67294);const s={},r=e.createContext(s);function d(n){const l=e.useContext(r);return e.useMemo((function(){return"function"==typeof n?n(l):{...l,...n}}),[l,n])}function t(n){let l;return l=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),e.createElement(r.Provider,{value:l},n.children)}}}]);