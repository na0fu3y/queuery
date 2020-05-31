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
    googleAnalytics: {
      trackingID: 'UA-156581645-2',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/na0fu3y/queuery/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
