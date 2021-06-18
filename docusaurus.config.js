/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Resources for Nightbot',
  tagline: 'Commands and other resources for Nightbot',
  url: 'https://nightbot-docs.theswedish.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'theswedishdev',
  projectName: 'nightbot-docs',
  themeConfig: {
    navbar: {
      title: 'Nightbot resources',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/theswedishdev/nightbot-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://theswedish.dev',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/theswedishdev',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/theswedishdev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Joel Ericsson. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/theswedishdev/nightbot-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
