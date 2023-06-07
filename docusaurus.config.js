// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pot",
  tagline: "🌈一个跨平台划词翻译软件",
  favicon: "img/favicon.ico",
  customFields: {
    // 把你的自定义环境放在这里
    github_token: process.env.GITHUB_TOKEN,
  },
  // Set the production url of your site here
  url: "https://pot.pylogmon.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "pot-app", // Usually your GitHub org/user name.
  projectName: "pot-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/pot-social-card.png",
      navbar: {
        title: "Pot",
        logo: {
          alt: "Pot Logo",
          src: "img/pot.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "使用指南",
          },
          {
            type: "docSidebar",
            sidebarId: "contributeSidebar",
            position: "left",
            label: "贡献指南",
          },
          {
            type: "dropdown",
            label: "社区交流",
            position: "left",
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/pot_app',
                className: 'navbarIcon telegramIcon'
              },
              {
                label: 'QQ',
                href: "https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/qq_group.jpg",
                className: 'navbarIcon qqIcon'
              },
              {
                label: 'Github',
                href: "https://github.com/pot-app/pot-desktop/discussions",
                className: 'navbarIcon gitHubIcon'
              }
            ]
          },
          {
            to: "/donate",
            label: "赞赏",
            position: "left",
            className: 'navbarIcon donateIcon',
          },
          {
            to: "/changelog",
            label: "更新日志",
            position: "right",
            className: 'navbarIcon tagIcon',
          },
          {
            to: "/download",
            label: "软件下载",
            className: 'navbarIcon downloadIcon',
            position: "right"
          },
          {
            label: "GitHub",
            href: "https://github.com/pot-app/pot-desktop",
            className: 'navbarIcon gitHubIcon',
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "使用指南",
                to: "/docs/tutorial/intro",
              },
              {
                label: "贡献指南",
                to: "/docs/contribute/intro",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/pot_app",
              },
              {
                label: "Github",
                href: "https://github.com/pot-app/pot-desktop/discussions",
              },
              {
                label: "QQ",
                href: "https://cdn.staticaly.com/gh/pot-app/pot-desktop/master/asset/qq_group.jpg",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "更新日志",
                to: "/changelog",
              },
              {
                label: "赞赏",
                href: "/donate",
              },
            ],
          },
        ],
        copyright:

          `版权所有 © ${new Date().getFullYear()} Pylogmon, 以GPL-3.0协议发布`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      googleAdsense: {
        dataAdClient: "pub-2287479151560516",
      },
    }),
  plugins: ['docusaurus-plugin-google-adsense'],
};

module.exports = config;
