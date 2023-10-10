// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  scripts: [
    // Object format.
    {
      src: 'https://cdn.wwads.cn/js/makemoney.js',
      async: true,
    },
  ],
  title: "Pot",
  tagline: "🌈一个跨平台划词翻译软件",
  favicon: "img/favicon.ico",
  customFields: {},
  // Set the production url of your site here
  url: "https://pot-app.com",
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
                label: 'QQ 频道',
                href: "https://pd.qq.com/s/akns94e1r",
                className: 'navbarIcon qqIcon'
              },
              {
                label: 'QQ 群组',
                href: "https://pot-app.com/img/qq_group.png",
                className: 'navbarIcon qqIcon'
              },
              {
                label: 'Github',
                href: "https://github.com/pot-app/pot-desktop/discussions",
                className: 'navbarIcon gitHubIcon'
              },
              {
                label: "Matrix",
                href: "https://matrix.to/#/#pot-app:matrix.org",
                className: 'navbarIcon matrixIcon'
              },
              {
                label: "Email",
                href: "mailto:support@pot-app.com",
                className: 'navbarIcon emailIcon'
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
            to: "https://www.chatyy.com/",
            label: "ChatGPT-4",
            position: "left",
            className: 'navbarIcon adsIcon',
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
          {
            label: "Jihulab",
            href: "https://jihulab.com/pot-app/pot-desktop",
            className: 'navbarIcon gitlabIcon',
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
                label: "QQ 频道",
                href: "https://pd.qq.com/s/akns94e1r",
              },
              {
                label: "QQ 群组",
                href: "https://pot-app.com/img/qq_group.png",
              },
              {
                label: "Matrix",
                href: "https://matrix.to/#/#pot-app:matrix.org",
              }
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
              {
                label: "Github",
                href: "https://github.com/pot-app/pot-desktop/discussions",
              },
              {
                label: "Email",
                href: "mailto:support@pot-app.com"
              }
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
    }),
  plugins: [],
};

module.exports = config;
