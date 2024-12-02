"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[3249],{85324:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var i=n(96540),a=n(34164),s=n(45500),o=n(17559),r=n(44096),l=n(28027),c=n(18182),d=n(21312),u=n(39022),m=n(74848);function h(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(u.A,{...n,subLabel:(0,m.jsx)(d.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(u.A,{...t,subLabel:(0,m.jsx)(d.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function f(){const{assets:e,metadata:t}=(0,r.e7)(),{title:n,description:i,date:a,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.be,{title:c.title_meta??n,description:i,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var g=n(5260);function p(){const e=(0,r.J_)();return(0,m.jsx)(g.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(6342);function v(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function b(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=b({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function j(e){const t=e.getBoundingClientRect();return t.top===t.bottom?j(e.parentNode):t}function A(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>j(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(j(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function L(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,x.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function C(e){const t=(0,i.useRef)(void 0),n=L();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:o}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),l=A(r,{anchorTopOffset:n.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var N=n(28774);function _(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(N.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(_,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const y=i.memo(_);function k(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:o,maxHeadingLevel:r,...l}=e;const c=(0,x.p)(),d=o??c.tableOfContents.minHeadingLevel,u=r??c.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>b({toc:v(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return C((0,i.useMemo)((()=>{if(a&&s)return{linkClassName:a,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:u}}),[a,s,d,u])),(0,m.jsx)(y,{toc:h,className:n,linkClassName:a,...l})}const H={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},I="table-of-contents__link toc-highlight",T="table-of-contents__link--active";function w(e){let{className:t,...n}=e;return(0,m.jsx)("div",{className:(0,a.A)(H.tableOfContents,"thin-scrollbar",t),children:(0,m.jsx)(k,{...n,linkClassName:I,linkActiveClassName:T})})}var B=n(44084),O=n(27293);function E(e){let{className:t}=e;return(0,m.jsx)(O.A,{type:"caution",title:(0,m.jsx)(B.Yh,{}),className:(0,a.A)(t,o.G.common.draftBanner),children:(0,m.jsx)(B.TT,{})})}var M=n(32234);function P(e){let{metadata:t}=e;const{unlisted:n,frontMatter:i}=t;return(0,m.jsxs)(m.Fragment,{children:[(n||i.unlisted)&&(0,m.jsx)(M.A,{}),i.draft&&(0,m.jsx)(E,{})]})}function R(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,r.e7)(),{nextItem:s,prevItem:o,frontMatter:d}=i,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:g}=d;return(0,m.jsxs)(l.A,{sidebar:t,toc:!u&&a.length>0?(0,m.jsx)(w,{toc:a,minHeadingLevel:f,maxHeadingLevel:g}):void 0,children:[(0,m.jsx)(P,{metadata:i}),(0,m.jsx)(c.A,{children:n}),(s||o)&&(0,m.jsx)(h,{nextItem:s,prevItem:o})]})}function G(e){const t=e.content;return(0,m.jsx)(r.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage),children:[(0,m.jsx)(f,{}),(0,m.jsx)(p,{}),(0,m.jsx)(R,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},32234:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var i=n(34164),a=n(44084),s=n(17559),o=n(27293),r=n(74848);function l(e){let{className:t}=e;return(0,r.jsx)(o.A,{type:"caution",title:(0,r.jsx)(a.Rc,{}),className:(0,i.A)(t,s.G.common.unlistedBanner),children:(0,r.jsx)(a.Uh,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.AE,{}),(0,r.jsx)(l,{...e})]})}},44084:(e,t,n)=>{n.d(t,{AE:()=>l,Rc:()=>o,TT:()=>d,Uh:()=>r,Yh:()=>c});n(96540);var i=n(21312),a=n(5260),s=n(74848);function o(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,s.jsx)(a.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},18182:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var i=n(44096),a=n(12971),s=n(12171),o=n(95293),r=n(74848);function l(){const{colorMode:e}=(0,o.G)();return(0,r.jsx)(s.A,{repo:"dldkffh/dldkffh.github.io",repoId:"R_kgDOIRGBUw",category:"Comments",categoryId:"DIC_kwDOIRGBU84CSU0v",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:e,lang:"ko",loading:"lazy",crossorigin:"anonymous",async:!0})}function c(e){const{metadata:t,isBlogPostPage:n}=(0,i.e7)(),{frontMatter:s,slug:o,title:c}=t,{enableComments:d}=s;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{...e}),d&&n&&(0,r.jsx)(l,{})]})}}}]);