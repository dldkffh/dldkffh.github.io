import React from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '../../components/GiscusComponent';

export default function BlogPostItemWrapper(props) {
  const {metadata, isBlogPostPage} = useBlogPost();

  const {frontMatter, slug, title} = metadata;
  const {enableComments} = frontMatter;

  return (
    <>
      <BlogPostItem {...props} />
      {enableComments && isBlogPostPage && <GiscusComponent />}
    </>
  );
}
