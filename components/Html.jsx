import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from '../theme.json'

const Html = ({ title = '', description = '', relativePathToRoot = '', styleTags, children }) => (
  <html>
    <head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      <title>{title}</title>
      {styleTags}
      <link href='fonts/montserrat.css' rel='stylesheet' />
      <link href='fonts/inter.css' rel='stylesheet' />
    </head>
    <ThemeProvider theme={theme}>
      <body style={{margin: 0, fontFamily: theme.fonts[0], color: theme.colors.charcoal, backgroundColor: 'white'}}>
        {children}
      </body>
    </ThemeProvider>
  </html>
)

Html.propTypes = {
  children: PropTypes.node
}

export default Html
