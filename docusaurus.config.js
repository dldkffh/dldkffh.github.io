/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'dldkffh',
  tagline: 'The tagline of my site',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dldkffh.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dldkffh', // Usually your GitHub org/user name.
  projectName: 'dldkffh.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: 'dldkffh',
          blogDescription: '마구잡이 IT 노트 - 컴퓨터 과학, 네트워크, 프로그래밍',
          routeBasePath: '/',
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          postsPerPage: 19,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-BRGD3FYKV9',
          anonymizeIP: false,
        },
        sitemap: {
          ignorePatterns: ['/tags/**','/search/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      tableOfContents: {
        minHeadingLevel: 3,
        maxHeadingLevel: 5,
      },

      // prism: {
      //   theme: require('prism-react-renderer/themes/vsDark'),
      // },

      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'dldkffh',
        logo: {
          alt: 'dldkffh github profile image',
          src: 'https://avatars.githubusercontent.com/u/79070302',
        },
        items: [
          {to: '/tags', label: '태그', position: 'left'},
          {to: '/archive', label: '아카이브', position: 'left'},
          {to: '/1969/10/29/guestbook', label: '방명록', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/dldkffh',
            label: '깃허브',
            position: 'right',
          },
        ],
      },

      algolia: {
        appId: 'XMULCGBD2O',
        apiKey: '8d7b93432567efb0da9b1c6dc1a7c6d5',
        indexName: 'dldkffhio',
        searchPagePath: 'search',
        contextualSearch: true,
        // container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
        debug: false,
        // externalUrlRegex: 'external\\.com|domain\\.com',
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
      },

      metadata: [
        {name: 'description', content: 'Knowledge Notes for Computer Science, IT and Programming'},
        {
          name: 'google-site-verification',
          content: 'Y9q4ZVOJlqPzvGdxEvcEabL--dC4Jcqqa2WXuRm50KE',
        },
        {
          name: 'naver-site-verification',
          content: 'fa085d97fde5f50c2be9d602dfb750ac93838300',
        },
      ],

      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} dldkffh. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
