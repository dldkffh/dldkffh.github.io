"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[9985],{11735:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var i=l(11950),t=l(74848),s=l(28453);const a={title:"AWS\uc640 VPC\uc640 NAT",authors:"dldkffh",tags:["AWS","\ud074\ub77c\uc6b0\ub4dc","VPC","NAT","\ucc28\uc774\ub97c \ub9cc\ub4dc\ub294 AWS \ud074\ub77c\uc6b0\ub4dc \ubcf4\uc548 \uccab\uac78\uc74c"],enableComments:!0},r=void 0,d={authorsImageUrls:[void 0]},c=[{value:"VPC (Virtual Private Cloud)",id:"vpc-virtual-private-cloud",level:3},{value:"VPC \uad6c\uc131 \uc694\uc18c",id:"vpc-\uad6c\uc131-\uc694\uc18c",level:4},{value:"\uc11c\ube0c\ub137",id:"\uc11c\ube0c\ub137",level:5},{value:"\ub77c\uc6b0\ud305 \ud14c\uc774\ube14",id:"\ub77c\uc6b0\ud305-\ud14c\uc774\ube14",level:5},{value:"\uc778\ud130\ub137 \uac8c\uc774\ud2b8\uc6e8\uc774",id:"\uc778\ud130\ub137-\uac8c\uc774\ud2b8\uc6e8\uc774",level:5},{value:"NAT Gateway\uc640 Bastion Host",id:"nat-gateway\uc640-bastion-host",level:3},{value:"NAT Gateway",id:"nat-gateway",level:4},{value:"Bastion Host",id:"bastion-host",level:4}];function h(n){const e={h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"vpc-virtual-private-cloud",children:"VPC (Virtual Private Cloud)"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"VPC\ub780?"}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc0ac\uc6a9\uc790\uc758 AWS \uacc4\uc815 \uc804\uc6a9 \uac00\uc0c1 \ub124\ud2b8\uc6cc\ud06c"}),"\n",(0,t.jsxs)(e.li,{children:["\uc6d0\ud558\ub294 \ub300\ub85c \uc0ac\uc124\ub9dd \uad6c\ucd95 \uac00\ub2a5","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\ubd80\uc5ec\ub41c IP \ub300\uc5ed\uc744 \ubd84\ud560\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"\ub9ac\uc804 \ub2e8\uc704"}),"\n"]}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"VPC \ud65c\uc6a9"}),"\n"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"EC2, RDS, Lambda \ub4f1\uc758 AWS \ucef4\ud4e8\ud305 \uc11c\ube44\uc2a4 \uc2e4\ud589"}),"\n",(0,t.jsx)(e.li,{children:"\ub2e4\uc591\ud55c \uc11c\ube0c\ub137 \uad6c\uc131"}),"\n",(0,t.jsx)(e.li,{children:"\ubcf4\uc548 \uc124\uc815(IP, Block, \uc778\ud130\ub137\uc5d0 \ub178\ucd9c\ub418\uc9c0 \uc54a\ub294 EC2 \ub4f1 \uad6c\uc131)"}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"vpc-\uad6c\uc131-\uc694\uc18c",children:"VPC \uad6c\uc131 \uc694\uc18c"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc11c\ube0c\ub137"}),"\n",(0,t.jsx)(e.li,{children:"\uc778\ud130\ub137 \uac8c\uc774\ud2b8\uc6e8\uc774"}),"\n",(0,t.jsx)(e.li,{children:"NACL/\ubcf4\uc548\uadf8\ub8f9"}),"\n",(0,t.jsx)(e.li,{children:"\ub77c\uc6b0\ud305 \ud14c\uc774\ube14"}),"\n",(0,t.jsx)(e.li,{children:"NAT Instance/NAT Gateway"}),"\n",(0,t.jsx)(e.li,{children:"Bastion Host"}),"\n",(0,t.jsx)(e.li,{children:"VPC Endpoint"}),"\n"]}),"\n",(0,t.jsx)(e.h5,{id:"\uc11c\ube0c\ub137",children:"\uc11c\ube0c\ub137"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"VPC\uc758 \ud558\uc704 \ub2e8\uc704"}),"\n",(0,t.jsx)(e.li,{children:"VPC\uc5d0 \ud560\ub2f9\ub41c IP\ub97c \ub354 \uc791\uc740 \ub2e8\uc704\ub85c \ubd84\ud560\ud55c \uac1c\ub150"}),"\n",(0,t.jsx)(e.li,{children:"\ud558\ub098\uc758 \uc11c\ube0c\ub137\uc740 \ud558\ub098\uc758 \uac00\uc6a9\uc601\uc5ed(AZ) \uc548\uc5d0 \uc704\uce58"}),"\n",(0,t.jsx)(e.li,{children:"\ubcc4\ub3c4\uc758 \uc124\uc815\uc774 \uc5c6\ub2e4\uba74 \ub3d9\uc77c\ud55c \uc11c\ube0c\ub137 IP\ub07c\ub9ac\ub9cc \ud1b5\uc2e0 \uac00\ub2a5"}),"\n"]}),"\n",(0,t.jsx)(e.h5,{id:"\ub77c\uc6b0\ud305-\ud14c\uc774\ube14",children:"\ub77c\uc6b0\ud305 \ud14c\uc774\ube14"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc5b4\ub514\ub85c \uac00\uc57c \ub418\ub294\uc9c0 \uc54c\ub824\uc8fc\ub294 \uc774\uc815\ud45c"}),"\n",(0,t.jsx)(e.li,{children:"\ud2b8\ub798\ud53d\uc774 \uc5b4\ub514\ub97c \ud1b5\ud574 \uac00\uba74 \ub418\ub294\uc9c0\uac00 \ud14c\uc774\ube14\uc5d0 \uc791\uc131\ub428"}),"\n"]}),"\n",(0,t.jsx)(e.h5,{id:"\uc778\ud130\ub137-\uac8c\uc774\ud2b8\uc6e8\uc774",children:"\uc778\ud130\ub137 \uac8c\uc774\ud2b8\uc6e8\uc774"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"VPC\uac00 \uc678\ubd80\uc758 \uc778\ud130\ub137\uacfc \ud1b5\uc2e0\ud560 \uc218 \uc788\ub3c4\ub85d \uacbd\ub85c\ub97c \ub9cc\ub4e4\uc5b4 \uc8fc\ub294 \ub9ac\uc18c\uc2a4"}),"\n",(0,t.jsx)(e.li,{children:"\uae30\ubcf8\uc801\uc73c\ub85c \ud655\uc7a5\uc131\uacfc \uace0\uac00\uc6a9\uc131\uc774 \ud655\ubcf4\ub418\uc5b4 \uc788\uc74c"}),"\n",(0,t.jsx)(e.li,{children:"\ubb34\ub8cc"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.h3,{id:"nat-gateway\uc640-bastion-host",children:"NAT Gateway\uc640 Bastion Host"}),"\n",(0,t.jsx)(e.h4,{id:"nat-gateway",children:"NAT Gateway"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Amazon Virtual Private Cloud(Amazon VPC)\uc758 \ud504\ub77c\uc774\ube57 \uc11c\ube0c\ub137\uc5d0 \uc788\ub294 \uc778\uc2a4\ud134\uc2a4\uc5d0\uc11c \uc778\ud130\ub137\uc5d0 \uc27d\uac8c \uc5f0\uacb0\ud560 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud558\ub294 \uac00\uc6a9\uc131\uc774 \ub192\uc740 AWS \uad00\ub9ac\ud615 \uc11c\ube44\uc2a4"}),"\n",(0,t.jsx)(e.li,{children:"Private \uc778\uc2a4\ud134\uc2a4\uac00 \uc678\ubd80\uc758 \uc778\ud130\ub137\uacfc \ud1b5\uc2e0\ud558\uae30 \uc704\ud55c \ud1b5\ub85c"}),"\n",(0,t.jsx)(e.li,{children:"NAT Gateway / \uc778\uc2a4\ud134\uc2a4 \ubaa8\ub450 \uc11c\ube0c\ub137 \ub2e8\uc704"}),"\n"]}),"\n",(0,t.jsx)(e.h4,{id:"bastion-host",children:"Bastion Host"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\uc678\ubd80\uc5d0\uc11c \uc0ac\uc124 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc811\uc18d\ud560 \uc218 \uc788\ub3c4\ub85d \uacbd\ub85c\ub97c \ud655\ubcf4\ud574\uc8fc\ub294 \uc11c\ubc84"}),"\n",(0,t.jsx)(e.li,{children:"Private \uc778\uc2a4\ud134\uc2a4\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud55c EC2 \uc778\uc2a4\ud134\uc2a4"}),"\n",(0,t.jsx)(e.li,{children:"Public \uc11c\ube0c\ub137\uc5d0 \uc704\uce58\ud574\uc57c \ud568"}),"\n"]}),"\n",(0,t.jsx)("br",{})]})}function o(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},28453:(n,e,l)=>{l.d(e,{R:()=>a,x:()=>r});var i=l(96540);const t={},s=i.createContext(t);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),i.createElement(s.Provider,{value:e},n.children)}},11950:n=>{n.exports=JSON.parse('{"permalink":"/2024/07/20/aws-5-vpc-nat","source":"@site/blog/2024-07-20-aws-5-vpc-nat.md","title":"AWS\uc640 VPC\uc640 NAT","description":"VPC (Virtual Private Cloud)","date":"2024-07-20T00:00:00.000Z","tags":[{"inline":true,"label":"AWS","permalink":"/tags/aws"},{"inline":true,"label":"\ud074\ub77c\uc6b0\ub4dc","permalink":"/tags/\ud074\ub77c\uc6b0\ub4dc"},{"inline":true,"label":"VPC","permalink":"/tags/vpc"},{"inline":true,"label":"NAT","permalink":"/tags/nat"},{"inline":true,"label":"\ucc28\uc774\ub97c \ub9cc\ub4dc\ub294 AWS \ud074\ub77c\uc6b0\ub4dc \ubcf4\uc548 \uccab\uac78\uc74c","permalink":"/tags/\ucc28\uc774\ub97c-\ub9cc\ub4dc\ub294-aws-\ud074\ub77c\uc6b0\ub4dc-\ubcf4\uc548-\uccab\uac78\uc74c"}],"readingTime":2.325,"hasTruncateMarker":true,"authors":[{"name":"dldkffh","url":"https://github.com/dldkffh","imageURL":"https://avatars.githubusercontent.com/u/79070302","key":"dldkffh","page":null}],"frontMatter":{"title":"AWS\uc640 VPC\uc640 NAT","authors":"dldkffh","tags":["AWS","\ud074\ub77c\uc6b0\ub4dc","VPC","NAT","\ucc28\uc774\ub97c \ub9cc\ub4dc\ub294 AWS \ud074\ub77c\uc6b0\ub4dc \ubcf4\uc548 \uccab\uac78\uc74c"],"enableComments":true},"unlisted":false,"prevItem":{"title":"AWS\uc640 \uacc4\uc815\uacfc EC2 - IAM, Root, EC2","permalink":"/2024/07/20/aws-3-4-iam-ec2"},"nextItem":{"title":"\uc815\uaddc\ud654","permalink":"/2024/06/30/normalization"}}')}}]);