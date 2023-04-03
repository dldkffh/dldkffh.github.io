import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="dldkffh/dldkffh.github.io"
      repoId="R_kgDOIRGBUw"
      category="Comments"
      categoryId="DIC_kwDOIRGBU84CSU0v" 
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="ko"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}