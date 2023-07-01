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
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'dldkffh',
  tagline: 'The tagline of my site',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
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
          routeBasePath: '/',
          showReadingTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

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
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'dldkffh',
        logo: {
          alt: 'dldkffh github profile image',
          src: 'https://avatars.githubusercontent.com/u/79070302',
        },
        items: [
          {to: '/tags', label: 'Tags', position: 'left'},
          {to: '/archive', label: 'Archive', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://twitter.com/dldkffh',
            label: 'Twitter',
            position: 'right',
          },
          {
            href: 'https://github.com/dldkffh',
            label: 'GitHub',
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
        {name: 'keywords', content: 'programming, coding, blog'},
        {name: 'google-site-verification', content: 'Y9q4ZVOJlqPzvGdxEvcEabL--dC4Jcqqa2WXuRm50KE'},
        {name: 'naver-site-verification', content: 'fa085d97fde5f50c2be9d602dfb750ac93838300'},
      ],

      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} dldkffh. Built with Docusaurus.`,
      },
    }),

  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1720538267262802',
      async: true,
      crossorigin: 'anonymous',
    },
  ],
};

module.exports = config;
