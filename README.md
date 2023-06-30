## Getting started

1. Clone this project, then `npm install`
2. Afterwards, type `npm start`
3. You can publish this site to github automatically by pushing this to your `master` branch. See `.github/workflows/deploy.yml`
4. Edit `docusaurus.config.js` accordingly to use on your site
5. The file `src/pages/index.js` contains the homepage. Edit it to your liking.

## Custom modifications

1. Add icons to /static/img
2. Install local search `npm install --save @easyops-cn/docusaurus-search-local`
3. enable math `npm install --save remark-math@3 rehype-katex@5 hast-util-is-element@1.1.0`
4. enable brython `npm i docusaurus-live-brython`
5. add docs plugin to have docs on another folder `npm install --save @docusaurus/plugin-content-docs`
6. Add setting to the docusaurus search local to include other docs route base path like psets labs etc that's defined in (5)
