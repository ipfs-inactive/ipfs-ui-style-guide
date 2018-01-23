console.time('Build html total')

require('babel-register')()

const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const { createElement } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const { ServerStyleSheet } = require('styled-components')
const requireDirectory = require('require-directory')

const srcDir = path.resolve(__dirname, '../pages')
const outputDir = path.resolve(__dirname, '../docs')
const Html = require('../components/Html.jsx').default

function renderToHtml (srcPath) {
  const Component = require(srcPath).default
  const children = createElement(Component)
  const sheet = new ServerStyleSheet()
  // Uou have to render for sheet.CollectStyles to work, it seems.
  renderToStaticMarkup(sheet.collectStyles(createElement(Html, {children})))
  const styleTags = sheet.getStyleElement()
  // Now render again with the style sheet
  const html = renderToStaticMarkup(createElement(Html, {children, styleTags}))
  return html
}

requireDirectory(module, '../pages', {
  include: /index.js$/,
  visit: (content, srcPath) => {
    const name = path.relative(srcDir, srcPath)
    console.time(`Build ${name}`)

    // Index.jsx => index.html
    // about/Index.jsx => index.html
    const outputFile = `${path.basename(srcPath, '.js')}.html`.toLowerCase()

    // /foo/bar/pages/Index.jsx => ''
    // /foo/bar/pages/about/Index.jsx => 'about'
    const relativePath = path.relative(srcDir, path.dirname(srcPath))

    // '/foo/bar/docs', '', 'index.html' => '/foo/bar/docs/index.html'
    // '/foo/bar/docs', 'about', 'index.html' => '/foo/bar/docs/about/index.html'
    const outputPath = path.resolve(outputDir, relativePath, outputFile)

    const html = renderToHtml(srcPath)

    mkdirp.sync(path.dirname(outputPath))

    fs.writeFileSync(outputPath, `<!doctype html>\n${html}`)

    console.timeEnd(`Build ${name}`)
  }
})

console.timeEnd('Build html total')
