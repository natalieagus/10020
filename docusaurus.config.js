// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Data Driven World 🌏",
  tagline: "The best way to learn programming is to write programs",
  url: "https://natalieagus.github.io",
  baseUrl: "/10020/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "natalieagus", // Usually your GitHub org/user name.
  projectName: "10020", // Usually your repo name.

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
          admonitions: {
            tag: ":::",
            keywords: [
              "info",
              "success",
              "danger",
              "note",
              "tip",
              "warning",
              "important",
              "caution",
              "keyword",
            ],
          },
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
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "about",
        path: "about",
        routeBasePath: "about",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        docsRouteBasePath: ["psets", "labs", "docs", "about"],
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
    "@docusaurus/theme-mermaid",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      subjectCard: {
        title: "What will we learn in 10.020?",
        description:
          "The course is a continuation of 10.014 Computational Thinking for Design and is designed as a project-based course. It introduces students to data structures, algorithm, and introductory machine learning algorithm in a practical way.",
        buttons: {
          primary: {
            label: "About",
            href: "about/intro",
          },
          secondary: {
            label: "Learning Objectives",
            href: "about/learning-objectives",
          },
        },
      },
      navbar: {
        hideOnScroll: true,
        title: "10.020",
        logo: {
          alt: "DDW Logo",
          src: "img/home-logo.svg",
        },
        items: [
          {
            type: "search",
            position: "right",
          },
          {
            to: "/about/intro", // ./docs-api/Intro.md
            label: "About",
            position: "left",
            activeBaseRegex: `/about/`,
          },
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Notes",
          },
          {
            to: "/labs/intro", // ./docs-api/Intro.md
            label: "Labs",
            position: "left",
            activeBaseRegex: `/labs/`,
          },
          {
            to: "/psets/intro", // ./docs-api/Intro.md
            label: "Psets",
            position: "left",
            activeBaseRegex: `/psets/`,
          },
          {
            to: "/roadmap", // ./docs-api/Intro.md
            label: "Roadmap",
            position: "left",
          },
          {
            href: "https://github.com/data-driven-world",
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
                to: "/notes/introduction",
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
        copyright: `Copyright © ${new Date().getFullYear()} 10.020 Data Driven World`,
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
  markdown: {
    mermaid: true,
  },
};

module.exports = config;