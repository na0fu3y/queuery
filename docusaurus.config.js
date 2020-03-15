module.exports = {
  title: 'Queuery',
  tagline: 'BigQuery を中心に Google Cloud Platform やデータに関する日々の発見を綴る',
  url: 'https://queuery.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'na0fu3y', // Usually your GitHub org/user name.
  projectName: 'queuery', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Queuery',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/na0fu3y/queuery',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/na0fu3y',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/na0fu3y',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Queuery. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['@docusaurus/plugin-google-analytics'],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-156581645-2',
    },
  },
};
