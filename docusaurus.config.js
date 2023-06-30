// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "10.020",
  tagline: "The best way to learn programming is to write programs.",
  url: "https://natalieagus.github.io",
  baseUrl: "/docu-website/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "natalieagus", // Usually your GitHub org/user name.
  projectName: "docu-website", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "notes",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "psets",
        path: "psets",
        routeBasePath: "psets",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "labs",
        path: "labs",
        routeBasePath: "labs",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: ["psets", "labs", "docs"],
      },
    ],
    [
      "docusaurus-live-brython",
      {
        brython_src:
          "https://cdn.jsdelivr.net/npm/brython@3.9.5/brython.min.js", // default
        brython_stdlib_src:
          "https://cdn.jsdelivr.net/npm/brython@3.9.5/brython_stdlib.js", // default
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: "CourseID",
        logo: {
          alt: "My Site Logo",
          src: "img/home-logo.svg",
        },
        items: [
          {
            type: "search",
            position: "right",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Lecture Notes",
          },
          {
            to: "/psets/intro", // ./docs-api/Intro.md
            label: "Problem Sets",
            position: "left",
            activeBaseRegex: `/psets/`,
          },
          {
            to: "/labs/intro", // ./docs-api/Intro.md
            label: "Labs",
            position: "left",
            activeBaseRegex: `/labs/`,
          },
          {
            href: "https://github.com/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Course Materials",
            items: [
              {
                label: "Lecture Notes",
                to: "/notes/intro",
              },
              {
                label: "Problem Sets",
                to: "/psets/intro",
              },
              {
                label: "Labs",
                to: "/labs/intro",
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          {
            title: "Contribute",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/data-driven-world",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 10.020, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
