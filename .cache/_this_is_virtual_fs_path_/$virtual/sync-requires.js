
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/owner/paul-salele/frontend/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/owner/paul-salele/frontend/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/owner/paul-salele/frontend/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/owner/paul-salele/frontend/src/pages/page-2.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/owner/paul-salele/frontend/src/pages/using-typescript.tsx"))
}

