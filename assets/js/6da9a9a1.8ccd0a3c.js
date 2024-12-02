"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[748],{67179:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(85893),l=t(11151);const i={title:"AWS S3 \uc554\ud638\ud654 \ubc0f \ubc84\ud0b7 \uc815\ucc45",authors:"dldkffh",tags:["AWS","\ud074\ub77c\uc6b0\ub4dc","S3","\uc554\ud638\ud654","\ubc84\ud0b7 \uc815\ucc45","\ucc28\uc774\ub97c \ub9cc\ub4dc\ub294 AWS \ud074\ub77c\uc6b0\ub4dc \ubcf4\uc548 \uccab\uac78\uc74c"],enableComments:!0},r=void 0,a={permalink:"/2024/07/29/aws-8-s3-security-bucket",source:"@site/blog/2024-07-29-aws-8-s3-security-bucket.md",title:"AWS S3 \uc554\ud638\ud654 \ubc0f \ubc84\ud0b7 \uc815\ucc45",description:"S3 \uc554\ud638\ud654",date:"2024-07-29T00:00:00.000Z",tags:[{inline:!0,label:"AWS",permalink:"/tags/aws"},{inline:!0,label:"\ud074\ub77c\uc6b0\ub4dc",permalink:"/tags/\ud074\ub77c\uc6b0\ub4dc"},{inline:!0,label:"S3",permalink:"/tags/s-3"},{inline:!0,label:"\uc554\ud638\ud654",permalink:"/tags/\uc554\ud638\ud654"},{inline:!0,label:"\ubc84\ud0b7 \uc815\ucc45",permalink:"/tags/\ubc84\ud0b7-\uc815\ucc45"},{inline:!0,label:"\ucc28\uc774\ub97c \ub9cc\ub4dc\ub294 AWS \ud074\ub77c\uc6b0\ub4dc \ubcf4\uc548 \uccab\uac78\uc74c",permalink:"/tags/\ucc28\uc774\ub97c-\ub9cc\ub4dc\ub294-aws-\ud074\ub77c\uc6b0\ub4dc-\ubcf4\uc548-\uccab\uac78\uc74c"}],readingTime:2.985,hasTruncateMarker:!0,authors:[{name:"dldkffh",url:"https://github.com/dldkffh",imageURL:"https://avatars.githubusercontent.com/u/79070302",key:"dldkffh"}],frontMatter:{title:"AWS S3 \uc554\ud638\ud654 \ubc0f \ubc84\ud0b7 \uc815\ucc45",authors:"dldkffh",tags:["AWS","\ud074\ub77c\uc6b0\ub4dc","S3","\uc554\ud638\ud654","\ubc84\ud0b7 \uc815\ucc45","\ucc28\uc774\ub97c \ub9cc\ub4dc\ub294 AWS \ud074\ub77c\uc6b0\ub4dc \ubcf4\uc548 \uccab\uac78\uc74c"],enableComments:!0},unlisted:!1,prevItem:{title:"AWS CloudTrail \ubc0f CloudWatch",permalink:"/2024/07/29/aws-7-cloudtrail-cloudwatch"},nextItem:{title:"AWS \uc554\ud638\ud654 \ubc0f KMS, ACM",permalink:"/2024/07/29/aws-9-encryption-kms-acm"}},o={authorsImageUrls:[void 0]},c=[{value:"S3 \uc554\ud638\ud654",id:"s3-\uc554\ud638\ud654",level:3},{value:"Amazon S3",id:"amazon-s3",level:4},{value:"S3\uc758 \ubcf4\uc548 \uc124\uc815",id:"s3\uc758-\ubcf4\uc548-\uc124\uc815",level:4}];function d(n){const e={h3:"h3",h4:"h4",li:"li",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"s3-\uc554\ud638\ud654",children:"S3 \uc554\ud638\ud654"}),"\n",(0,s.jsx)(e.h4,{id:"amazon-s3",children:"Amazon S3"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\uac1d\uccb4 \uc2a4\ud1a0\ub9ac\uc9c0"})," \uc11c\ube44\uc2a4 : \ud30c\uc77c \ubcf4\uad00\ub9cc \uac00\ub2a5"]}),"\n",(0,s.jsx)(e.li,{children:"\uae00\ub85c\ubc8c \uc11c\ube44\uc2a4 \ub2e8, \ub370\uc774\ud130\ub294 \ub9ac\uc804\uc5d0 \uc800\uc7a5"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\ubb34\uc81c\ud55c \uc6a9\ub7c9"})," : \ud558\ub098\uc758 \uac1d\uccb4\ub294 0byte\uc5d0\uc11c 5TB\uc758 \uc6a9\ub7c9"]}),"\n",(0,s.jsxs)(e.li,{children:["\ub0b4\uad6c\uc131 : ",(0,s.jsx)(e.strong,{children:"99.999999999% \ub0b4\uad6c\uc131"})]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"s3\uc758-\ubcf4\uc548-\uc124\uc815",children:"S3\uc758 \ubcf4\uc548 \uc124\uc815"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["S3 \ubaa8\ub4e0 \ubc84\ud0b7\uc740 \uc0c8\ub85c \uc0dd\uc131\uc2dc ",(0,s.jsx)(e.strong,{children:"\uae30\ubcf8\uc801\uc73c\ub85c Private"}),"(\ube44\uacf5\uac1c)"]}),"\n",(0,s.jsxs)(e.li,{children:["\ubcf4\uc548 \uc124\uc815\uc740 ",(0,s.jsx)(e.strong,{children:"\uac1d\uccb4 \ub2e8\uc704"}),"\uc640 ",(0,s.jsx)(e.strong,{children:"\ubc84\ud0b7 \ub2e8\uc704"}),"\ub85c \uad6c\uc131"]}),"\n",(0,s.jsx)(e.li,{children:"MFA\ub97c \ud65c\uc6a9\ud574 \uac1d\uccb4 \uc0ad\uc81c \ubc29\uc9c0 \uac00\ub2a5"}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Versioning"}),"\uc744 \ud1b5\ud574 \ud30c\uc77c \uad00\ub9ac \uac00\ub2a5"]}),"\n",(0,s.jsx)(e.li,{children:"\uc561\uc138\uc2a4 \ub85c\uadf8 \uc0dd\uc131 \ubc0f \uc804\uc1a1 \uac00\ub2a5"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>r});var s=t(67294);const l={},i=s.createContext(l);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);