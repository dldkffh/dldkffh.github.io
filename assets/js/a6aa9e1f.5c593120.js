"use strict";(self.webpackChunkdldkffh_github_io=self.webpackChunkdldkffh_github_io||[]).push([[3089],{4351:(t,e,a)=>{a.r(e),a.d(e,{default:()=>b});a(7294);var n=a(6905),i=a(2263),o=a(1667),r=a(5281),s=a(7846),l=a(9703),d=a(197),g=a(9985),c=a(5742),u=a(136),m=a(5893);function p(t){const e=(0,u.C)(t);return(0,m.jsx)(c.Z,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}function h(t){const{metadata:e}=t,{siteConfig:{title:a}}=(0,i.Z)(),{blogDescription:n,blogTitle:r,permalink:s}=e,l="/"===s?a:r;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.d,{title:l,description:n}),(0,m.jsx)(d.Z,{tag:"blog_posts_list"})]})}function f(t){const{metadata:e,items:a,sidebar:n}=t;return(0,m.jsxs)(s.Z,{sidebar:n,children:[(0,m.jsx)(g.Z,{items:a}),(0,m.jsx)(l.Z,{metadata:e})]})}function b(t){return(0,m.jsxs)(o.FG,{className:(0,n.Z)(r.k.wrapper.blogPages,r.k.page.blogListPage),children:[(0,m.jsx)(h,{...t}),(0,m.jsx)(p,{...t}),(0,m.jsx)(f,{...t})]})}},9703:(t,e,a)=>{a.d(e,{Z:()=>r});a(7294);var n=a(5999),i=a(2244),o=a(5893);function r(t){const{metadata:e}=t,{previousPage:a,nextPage:r}=e;return(0,o.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,o.jsx)(i.Z,{permalink:a,title:(0,o.jsx)(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,o.jsx)(i.Z,{permalink:r,title:(0,o.jsx)(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(t,e,a)=>{a.d(e,{Z:()=>r});a(7294);var n=a(9460),i=a(7544),o=a(5893);function r(t){let{items:e,component:a=i.Z}=t;return(0,o.jsx)(o.Fragment,{children:e.map((t=>{let{content:e}=t;return(0,o.jsx)(n.n,{content:e,children:(0,o.jsx)(a,{children:(0,o.jsx)(e,{})})},e.metadata.permalink)}))})}},136:(t,e,a)=>{a.d(e,{C:()=>g,i:()=>c});var n=a(4996),i=a(2263),o=a(5102);var r=a(9460);const s=t=>new Date(t).toISOString();function l(t){const e=t.map(u);return{author:1===e.length?e[0]:e}}function d(t,e,a){return t?{image:m({imageUrl:e(t,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function g(t){const{siteConfig:e}=(0,i.Z)(),{withBaseUrl:a}=(0,n.Cg)(),{metadata:{blogDescription:o,blogTitle:r,permalink:g}}=t,c=`${e.url}${g}`;return{"@context":"https://schema.org","@type":"Blog","@id":c,mainEntityOfPage:c,headline:r,description:o,blogPost:t.items.map((t=>function(t,e,a){const{assets:n,frontMatter:i,metadata:o}=t,{date:r,title:g,description:c,lastUpdatedAt:u}=o,m=n.image??i.image,p=i.keywords??[],h=`${e.url}${o.permalink}`,f=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:g,name:g,description:c,datePublished:r,...f?{dateModified:f}:{},...l(o.authors),...d(m,a,g),...p?{keywords:p}:{}}}(t.content,e,a)))}}function c(){const t=function(){const t=(0,o.Z)(),e=t?.data?.blogMetadata;if(!e)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return e}(),{assets:e,metadata:a}=(0,r.C)(),{siteConfig:g}=(0,i.Z)(),{withBaseUrl:c}=(0,n.Cg)(),{date:u,title:m,description:p,frontMatter:h,lastUpdatedAt:f}=a,b=e.image??h.image,x=h.keywords??[],j=f?s(f):void 0,k=`${g.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:m,name:m,description:p,datePublished:u,...j?{dateModified:j}:{},...l(a.authors),...d(b,c,m),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${g.url}${t.blogBasePath}`,name:t.blogTitle}}}function u(t){return{"@type":"Person",...t.name?{name:t.name}:{},...t.title?{description:t.title}:{},...t.url?{url:t.url}:{},...t.email?{email:t.email}:{},...t.imageURL?{image:t.imageURL}:{}}}function m(t){let{imageUrl:e,caption:a}=t;return{"@type":"ImageObject","@id":e,url:e,contentUrl:e,caption:a}}},7544:(t,e,a)=>{a.d(e,{Z:()=>d});a(7294);var n=a(9460),i=a(3415),o=a(9861),r=a(2949),s=a(5893);function l(){const{colorMode:t}=(0,r.I)();return(0,s.jsx)(o.Z,{repo:"dldkffh/dldkffh.github.io",repoId:"R_kgDOIRGBUw",category:"Comments",categoryId:"DIC_kwDOIRGBU84CSU0v",mapping:"pathname",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:t,lang:"ko",loading:"lazy",crossorigin:"anonymous",async:!0})}function d(t){const{metadata:e,isBlogPostPage:a}=(0,n.C)(),{frontMatter:o,slug:r,title:d}=e,{enableComments:g}=o;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z,{...t}),g&&a&&(0,s.jsx)(l,{})]})}}}]);