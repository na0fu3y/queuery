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
          to: 'docs/bigquery-access-controls',
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
              label: 'データマネジメントとは',
              to: 'docs/data-management',
            },
            {
              label: 'BigQuery アクセス権設定',
              to: 'docs/bigquery-access-controls',
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
    gtag: {
      trackingID: 'UA-156581645-3',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          editUrl:
            'https://github.com/na0fu3y/queuery/edit/master/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Queuery. Built with Docusaurus.`,
            language: 'ja',
          },
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/na0fu3y/queuery/edit/master/',
          showLastUpdateTime: true,
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
