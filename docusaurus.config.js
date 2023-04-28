// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cybersecurity Handbook',
  tagline:
    'Empowering you to stay safe in the digital world with One Beyond&#39;s Cybersecurity Handbook.',
  url: 'https://cybersecurityhandbook.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: undefined
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cybersecurity Handbook',
        logo: {
          alt: 'One Beyond Company Logo',
          src: 'img/light_logo.png',
          srcDark: 'img/dark_logo.jpg'
        },
        items: [
          {
            href: 'https://github.com/onebeyond/cybersecurity-handbook',
            label: 'Repository',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        copyright: `Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
