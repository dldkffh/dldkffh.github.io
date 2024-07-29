"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[776],{4379:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var s=l(5893),i=l(1151);const r={title:"AWS Secret Manager & AWS WAF, AWS Shield",authors:"dldkffh",tags:["AWS","\ud074\ub77c\uc6b0\ub4dc","Secret Manager","WAF","Shield","\ucc28\uc774\ub97c \ub9cc\ub4dc\ub294 AWS \ud074\ub77c\uc6b0\ub4dc \ubcf4\uc548 \uccab\uac78\uc74c"],enableComments:!0},a=void 0,t={permalink:"/2024/07/29/aws-11-secret-manager-waf-shield",source:"@site/blog/2024-07-29-aws-11-secret-manager-waf-shield.md",title:"AWS Secret Manager & AWS WAF, AWS Shield",description:"AWS Secret Manager",date:"2024-07-29T00:00:00.000Z",tags:[{inline:!0,label:"AWS",permalink:"/tags/aws"},{inline:!0,label:"\ud074\ub77c\uc6b0\ub4dc",permalink:"/tags/\ud074\ub77c\uc6b0\ub4dc"},{inline:!0,label:"Secret Manager",permalink:"/tags/secret-manager"},{inline:!0,label:"WAF",permalink:"/tags/waf"},{inline:!0,label:"Shield",permalink:"/tags/shield"},{inline:!0,label:"\ucc28\uc774\ub97c \ub9cc\ub4dc\ub294 AWS \ud074\ub77c\uc6b0\ub4dc \ubcf4\uc548 \uccab\uac78\uc74c",permalink:"/tags/\ucc28\uc774\ub97c-\ub9cc\ub4dc\ub294-aws-\ud074\ub77c\uc6b0\ub4dc-\ubcf4\uc548-\uccab\uac78\uc74c"}],readingTime:3.65,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"AWS Secret Manager & AWS WAF, AWS Shield",authors:"dldkffh",tags:["AWS","\ud074\ub77c\uc6b0\ub4dc","Secret Manager","WAF","Shield","\ucc28\uc774\ub97c \ub9cc\ub4dc\ub294 AWS \ud074\ub77c\uc6b0\ub4dc \ubcf4\uc548 \uccab\uac78\uc74c"],enableComments:!0},unlisted:!1,prevItem:{title:"AWS IAM",permalink:"/2024/07/29/aws-10-iam-levelup"},nextItem:{title:"AWS ETC",permalink:"/2024/07/29/aws-12-"}},d={authorsImageUrls:[void 0]},c=[{value:"AWS Secret Manager",id:"aws-secret-manager",level:3},{value:"AWS Secret Manager\uc758 \uac1c\ub150",id:"aws-secret-manager\uc758-\uac1c\ub150",level:4},{value:"Secret Manager \ud2b9\uc9d5",id:"secret-manager-\ud2b9\uc9d5",level:4},{value:"AWS WAF\uc640 AWS Shield",id:"aws-waf\uc640-aws-shield",level:3},{value:"AWS Web Application Firewall\uc758 \uac1c\ub150",id:"aws-web-application-firewall\uc758-\uac1c\ub150",level:4},{value:"AWS WAF \ud2b9\uc9d5",id:"aws-waf-\ud2b9\uc9d5",level:4},{value:"AWS Shield\uc758 \uac1c\ub150",id:"aws-shield\uc758-\uac1c\ub150",level:4},{value:"AWS Shield \ud2b9\uc9d5",id:"aws-shield-\ud2b9\uc9d5",level:4},{value:"\uae30\ud0c0 AWS \ubcf4\uc548 \uc11c\ube44\uc2a4",id:"\uae30\ud0c0-aws-\ubcf4\uc548-\uc11c\ube44\uc2a4",level:3}];function h(e){const n={h3:"h3",h4:"h4",li:"li",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"aws-secret-manager",children:"AWS Secret Manager"}),"\n",(0,s.jsx)(n.h4,{id:"aws-secret-manager\uc758-\uac1c\ub150",children:"AWS Secret Manager\uc758 \uac1c\ub150"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uc560\ud50c\ub9ac\ucf00\uc774\uc158, \uc11c\ube44\uc2a4, IT \ub9ac\uc18c\uc2a4\uc5d0 \uc561\uc138\uc2a4\ud560 \ub54c ",(0,s.jsx)(n.strong,{children:"\ud544\uc694\ud55c \ubcf4\uc548 \uc815\ubcf4\ub97c \ubcf4\ud638"})]}),"\n",(0,s.jsx)(n.li,{children:"\uc218\uba85 \uc8fc\uae30\uc5d0 \uac78\uccd0 \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc790\uaca9 \uc99d\uba85, API \ud0a4 \ubc0f \ub2e4\ub978 \ubcf4\uc548 \uc815\ubcf4\ub97c \uc190\uc27d\uac8c \uad50\uccb4, \uad00\ub9ac \ubc0f \uac80\uc0c9\ud560 \uc218 \uc788\uc74c"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"secret-manager-\ud2b9\uc9d5",children:"Secret Manager \ud2b9\uc9d5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ubcf4\uc548 \uc815\ubcf4"}),"(\uc554\ud638, API Key \ub4f1)\ub97c \uc548\uc804\ud558\uac8c \uc800\uc7a5\ud558\uace0 \uc190\uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \uc11c\ube44\uc2a4"]}),"\n",(0,s.jsxs)(n.li,{children:["\ubcf4\uc548 \uc815\ubcf4\uc758 ",(0,s.jsx)(n.strong,{children:"\uc8fc\uae30\uc801\uc778 \uad50\uccb4"}),"(Rotation) \uc9c0\uc6d0"]}),"\n",(0,s.jsxs)(n.li,{children:["CloudFormation \ub4f1 ",(0,s.jsx)(n.strong,{children:"\ub2e4\ub978 \uc11c\ube44\uc2a4\uc640 \uc5f0\ub3d9"}),"\ud558\uc5ec \uc548\uc804\ud55c \ubcf4\uc548 \ud655\ubcf4 \uac00\ub2a5"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"aws-waf\uc640-aws-shield",children:"AWS WAF\uc640 AWS Shield"}),"\n",(0,s.jsx)(n.h4,{id:"aws-web-application-firewall\uc758-\uac1c\ub150",children:"AWS Web Application Firewall\uc758 \uac1c\ub150"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\uac00\uc6a9\uc131\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uac70\ub098, \ubcf4\uc548\uc744 \uc704\ud611\ud558\uac70\ub098, \ub9ac\uc18c\uc2a4\ub97c \uacfc\ub3c4\ud558\uac8c \uc0ac\uc6a9\ud558\ub294 \uc77c\ubc18\uc801\uc778 \uc6f9 \uacf5\uaca9\uc73c\ub85c \ubd80\ud130 ",(0,s.jsx)(n.strong,{children:"\uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub098 API\ub97c \ubcf4\ud638"}),"\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc29\ud654\ubcbd"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"aws-waf-\ud2b9\uc9d5",children:"AWS WAF \ud2b9\uc9d5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ud2b8\ub798\ud53d\uc744 \ubaa8\ub2c8\ud130\ub9c1"}),"\ud558\uc5ec \uacf5\uaca9\uc744 \ubc29\uc5b4\ud574\uc8fc\ub294 \uc11c\ube44\uc2a4\ub85c AWS\uc758 \uc5ec\ub7ec \uc11c\ube44\uc2a4\uc640 \uc5f0\ub3d9"]}),"\n",(0,s.jsxs)(n.li,{children:["\uc2e4\uc81c \uacf5\uaca9 \ubc1c\uc0dd\uc2dc, \ud574\ub2f9 \ud2b8\ub798\ud53d\uc774 ",(0,s.jsx)(n.strong,{children:"\uc11c\ube44\uc2a4\uc5d0 \ub3c4\ub2ec\ud558\uc9c0 \uc54a\ub3c4\ub85d"})," \ud558\uc5ec \ubcf4\ud638"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc5ec\ub7ec \uc870\uac74"}),"\uc5d0 \ub530\ub77c \ud2b8\ub798\ud53d\uc744 \uc81c\uc5b4 \uac00\ub2a5"]}),"\n",(0,s.jsxs)(n.li,{children:["AWS WAF \uaddc\uce59","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"AWS Managed \uaddc\uce59 : AWS\uc5d0\uc11c \uc9c1\uc811 \uc0dd\uc131\ud55c \uaddc\uce59"}),"\n",(0,s.jsx)(n.li,{children:"\uc720\uc800 \uc0dd\uc131 \uaddc\uce59 : \uc870\uac74 \ub4f1\uc5d0 \ub530\ub77c Block, Allow, Count, CAPTCHA \uc9c1\uc811 \uad6c\uc131"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"aws-shield\uc758-\uac1c\ub150",children:"AWS Shield\uc758 \uac1c\ub150"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["AWS\uc5d0\uc11c \uc2e4\ud589\ub418\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc73c\ub85c \ubcf4\ud638\ud558\ub294 ",(0,s.jsx)(n.strong,{children:"DDoS \ubcf4\ud638"})," \uc11c\ube44\uc2a4"]}),"\n",(0,s.jsx)(n.li,{children:"AWS Shield\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac00\ub3d9 \uc911\uc9c0 \ubc0f \uc9c0\uc5f0 \uc2dc\uac04\uc744 \ucd5c\uc18c\ud654\ud558\ub294 \uc0c1\uc2dc \ud0d0\uc9c0 \ubc0f \uc790\ub3d9 \uc778\ub77c\uc778 \ud1b5\ud569\uc744 \uc81c\uacf5\ud558\ubbc0\ub85c DDoS \ubcf4\ud638\ub97c \uc704\ud574 AWS Support\ub97c \uc774\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\uc74c"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"aws-shield-\ud2b9\uc9d5",children:"AWS Shield \ud2b9\uc9d5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DDoS \uacf5\uaca9\uc744 \ubc29\uc5b4"}),"\ud574 \uc8fc\ub294 \uc11c\ube44\uc2a4"]}),"\n",(0,s.jsxs)(n.li,{children:["\ubaa8\ub4e0 AWS \uacc4\uc815\uc5d0 ",(0,s.jsx)(n.strong,{children:"\uae30\ubcf8\uc801\uc73c\ub85c \uc801\uc6a9"}),"\ub418\uc5b4 \uc788\uc74c"]}),"\n",(0,s.jsx)(n.li,{children:"\ubb34\ub8cc \ubc84\uc804\uacfc \uc5b4\ub4dc\ubc30\uc2a4 \ubc84\uc804\uc774 \uc788\uc74c"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\uae30\ud0c0-aws-\ubcf4\uc548-\uc11c\ube44\uc2a4",children:"\uae30\ud0c0 AWS \ubcf4\uc548 \uc11c\ube44\uc2a4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Amazon Inspector : AWS\uc5d0 \ubc30\ud3ec\ub41c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubcf4\uc548 \ubc0f \uaddc\uc815 \uc900\uc218\ub97c \uac1c\uc120\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 ",(0,s.jsx)(n.strong,{children:"\uc790\ub3d9 \ubcf4\uc548 \ud3c9\uac00 \uc11c\ube44\uc2a4"})]}),"\n",(0,s.jsxs)(n.li,{children:["Amazon Macie : \uc644\uc804 \uad00\ub9ac\ud615 \ub370\uc774\ud130 \ubcf4\uc548 \ubc0f \ub370\uc774\ud130 \ud504\ub77c\uc774\ubc84\uc2dc \uc11c\ube44\uc2a4\ub85c\uc11c, ",(0,s.jsx)(n.strong,{children:"\uae30\uacc4 \ud559\uc2b5 \ubc0f \ud328\ud134 \uc77c\uce58\ub97c \ud65c\uc6a9"}),"\ud558\uc5ec AWS\uc5d0\uc11c \ubbfc\uac10\ud55c \ub370\uc774\ud130\ub97c \uac80\uc0c9\ud558\uace0 \ubcf4\ud638"]}),"\n",(0,s.jsxs)(n.li,{children:["Amazon GuardDuty : AWS \uacc4\uc815 \uc6cc\ud06c\ub85c\ub4dc, Amazon S3\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\ub97c \ubcf4\ud638\ud558\uae30 \uc704\ud574 \uc545\uc758\uc801 \ud65c\ub3d9 \ub610\ub294 \ubb34\ub2e8 \ub3d9\uc791\uc744 \uc9c0\uc18d\uc801\uc73c\ub85c \ubaa8\ub2c8\ud130\ub9c1\ud558\ub294 ",(0,s.jsx)(n.strong,{children:"\uc704\ud611 \ud0d0\uc9c0 \uc11c\ube44\uc2a4"})]}),"\n",(0,s.jsxs)(n.li,{children:["Amazon Cognito : \uc6f9\uacfc \ubaa8\ubc14\uc77c \uc571\uc5d0 \ube60\ub974\uace0 ",(0,s.jsx)(n.strong,{children:"\uc0ac\uc6a9\uc790 \uac00\uc785, \ub85c\uadf8\uc778 \ubc0f \uc561\uc138\uc2a4 \uc81c\uc5b4"})," \uae30\ub2a5\uc744 \ucd94\uac00\ud568"]}),"\n",(0,s.jsxs)(n.li,{children:["Amazon Detective : ",(0,s.jsx)(n.strong,{children:"\uc7a0\uc7ac\uc801 \ubcf4\uc548 \ubb38\uc81c\ub098 \uc758\uc2ec\uc2a4\ub7ec\uc6b4 \ud65c\ub3d9\uc758 \uadfc\ubcf8 \uc6d0\uc778"}),"\uc744 \uc27d\uace0 \ube60\ub974\uac8c \ubd84\uc11d, \uc870\uc0ac \ubc0f \uc2dd\ubcc4\ud568"]}),"\n"]}),"\n",(0,s.jsx)("br",{})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>t,a:()=>a});var s=l(7294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);