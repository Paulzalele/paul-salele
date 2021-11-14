
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/owner/paul-salele/frontend2/paul-salele/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/owner/paul-salele/frontend2/paul-salele/src/pages/404.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/owner/paul-salele/frontend2/paul-salele/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/owner/paul-salele/frontend2/paul-salele/src/pages/index.js")),
  "component---src-pages-testing-js": preferDefault(require("/Users/owner/paul-salele/frontend2/paul-salele/src/pages/testing.js")),
  "component---src-pages-white-papers-index-js": preferDefault(require("/Users/owner/paul-salele/frontend2/paul-salele/src/pages/white-papers/index.js"))
}

