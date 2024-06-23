"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[6103],{6346:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var i=n(7294),a=n(6905),o=n(1667),r=n(5281),s=n(9460),l=n(7846),c=n(7544),d=n(5999),u=n(2244),m=n(5893);function g(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(u.Z,{...n,subLabel:(0,m.jsx)(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(u.Z,{...t,subLabel:(0,m.jsx)(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function f(){const{assets:e,metadata:t}=(0,s.C)(),{title:n,description:i,date:a,tags:r,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(o.d,{title:n,description:i,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var h=n(5742),p=n(136);function v(){const e=(0,p.i)();return(0,m.jsx)(h.Z,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(6668);function b(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function j(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=j({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function C(e){const t=e.getBoundingClientRect();return t.top===t.bottom?C(e.parentNode):t}function L(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>C(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(C(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function k(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,x.L)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function y(e){const t=(0,i.useRef)(void 0),n=k();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),l=L(s,{anchorTopOffset:n.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}var N=n(3692);function _(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(N.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(_,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const H=i.memo(_);function P(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:s,...l}=e;const c=(0,x.L)(),d=r??c.tableOfContents.minHeadingLevel,u=s??c.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>j({toc:b(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return y((0,i.useMemo)((()=>{if(a&&o)return{linkClassName:a,linkActiveClassName:o,minHeadingLevel:d,maxHeadingLevel:u}}),[a,o,d,u])),(0,m.jsx)(H,{toc:g,className:n,linkClassName:a,...l})}const w={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},I="table-of-contents__link toc-highlight",Z="table-of-contents__link--active";function O(e){let{className:t,...n}=e;return(0,m.jsx)("div",{className:(0,a.Z)(w.tableOfContents,"thin-scrollbar",t),children:(0,m.jsx)(P,{...n,linkClassName:I,linkActiveClassName:Z})})}var B=n(2212);function M(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,s.C)(),{nextItem:o,prevItem:r,frontMatter:d,unlisted:u}=i,{hide_table_of_contents:f,toc_min_heading_level:h,toc_max_heading_level:p}=d;return(0,m.jsxs)(l.Z,{sidebar:t,toc:!f&&a.length>0?(0,m.jsx)(O,{toc:a,minHeadingLevel:h,maxHeadingLevel:p}):void 0,children:[u&&(0,m.jsx)(B.Z,{}),(0,m.jsx)(c.Z,{children:n}),(o||r)&&(0,m.jsx)(g,{nextItem:o,prevItem:r})]})}function E(e){const t=e.content;return(0,m.jsx)(s.n,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(o.FG,{className:(0,a.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage),children:[(0,m.jsx)(f,{}),(0,m.jsx)(v,{}),(0,m.jsx)(M,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},2212:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var i=n(6905),a=n(5999),o=n(5742),r=n(5893);function s(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5281),u=n(9047);function m(e){let{className:t}=e;return(0,r.jsx)(u.Z,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,i.Z)(t,d.k.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function g(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}},136:(e,t,n)=>{n.d(t,{C:()=>d,i:()=>u});var i=n(4996),a=n(2263),o=n(5102);var r=n(9460);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:g({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,a.Z)(),{withBaseUrl:n}=(0,i.Cg)(),{metadata:{blogDescription:o,blogTitle:r,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:i,frontMatter:a,metadata:o}=e,{date:r,title:d,description:u,lastUpdatedAt:m}=o,g=i.image??a.image,f=a.keywords??[],h=`${t.url}${o.permalink}`,p=m?s(m):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:d,name:d,description:u,datePublished:r,...p?{dateModified:p}:{},...l(o.authors),...c(g,n,d),...f?{keywords:f}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,o.Z)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,r.C)(),{siteConfig:d}=(0,a.Z)(),{withBaseUrl:u}=(0,i.Cg)(),{date:m,title:g,description:f,frontMatter:h,lastUpdatedAt:p}=n,v=t.image??h.image,x=h.keywords??[],b=p?s(p):void 0,j=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":j,mainEntityOfPage:j,url:j,headline:g,name:g,description:f,datePublished:m,...b?{dateModified:b}:{},...l(n.authors),...c(v,u,g),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function g(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},7544:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var i=n(9460),a=n(2742),o=n(9861),r=n(2949),s=n(5893);function l(){const{colorMode:e}=(0,r.I)();return(0,s.jsx)(o.Z,{repo:"dldkffh/dldkffh.github.io",repoId:"R_kgDOIRGBUw",category:"Comments",categoryId:"DIC_kwDOIRGBU84CSU0v",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:e,lang:"ko",loading:"lazy",crossorigin:"anonymous",async:!0})}function c(e){const{metadata:t,isBlogPostPage:n}=(0,i.C)(),{frontMatter:o,slug:r,title:c}=t,{enableComments:d}=o;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{...e}),d&&n&&(0,s.jsx)(l,{})]})}}}]);