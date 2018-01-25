console.time('Build css total')

const fs = require('fs')
const path = require('path')
const theme = require('../theme.json')
const outputPath = path.resolve(__dirname, '../ipfs.css')

const fontFamily = [
  `.sans-serif { font-family: ${theme.fonts[0]}; }`,
  `.sans-serif-alt: { font-family: ${theme.fonts[1]}; }`,
  `.monospace: { font-family: ${theme.fonts[2]}; }`
]

const fontSize = theme.fontSizes.map((size, i) => {
  return `.fs-${i}: { font-size: ${size}px; }`
})

const color = Object.keys(theme.colors).map(name => {
  return `.${name} { color: ${theme.colors[name]}; }`
})

const bg = Object.keys(theme.colors).map(name => {
  return `.bg-${name} { background-color: ${theme.colors[name]}; }`
})

const border = Object.keys(theme.colors).map(name => {
  return `.border-${name}: { border-color: ${theme.colors[name]}; }`
})

const spacers = [
  {dir: '', suffix: ['']},
  {dir: 'x', suffix: ['-left', '-right']},
  {dir: 'y', suffix: ['-top', '-bottom']},
  {dir: 't', suffix: ['-top']},
  {dir: 'l', suffix: ['-left']},
  {dir: 'b', suffix: ['-bottom']},
  {dir: 'r', suffix: ['-right']}
]

const declaration = (type, suffix, size) => suffix.map(s => `${type}${s}: ${size}px;`).join(' ')

const padding = theme.space.map((size, i) => {
  return spacers.map(({dir, suffix}) => {
    return `.p${dir}${i} { ${declaration('padding', suffix, size)} }`
  })
}).reduce((a, b) => a.concat(b))

const margin = theme.space.map((size, i) => {
  return spacers.map(({dir, suffix}) => {
    return `.m${dir}${i} { ${declaration('margin', suffix, size)} }`
  })
}).reduce((a, b) => a.concat(b))

/* eslint-disable */
const lines = [
  [`

/* _|   _ \   __|    __|
  |    __/   _|   \__ \        _|  (_-<  (_-<
___|  _|    _|    ____/  _)  \__|  ___/  ___/

See: https://github.com/ipfs-shipyard/ipfs-ui-style-guide/blob/master/theme.json
*/
`],
  color,
  bg,
  border,
  ['\n/* ---- font ----- */'],
  fontFamily,
  fontSize,
  ['\n/* ---- space ----- */'],
  margin,
  padding
]
/* eslint-enable */

const css = lines.reduce((a, b) => a.concat(b)).join('\n')

fs.writeFileSync(outputPath, css)

console.timeEnd('Build css total')
