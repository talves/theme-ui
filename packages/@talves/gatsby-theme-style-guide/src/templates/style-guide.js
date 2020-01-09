import React from 'react'
import Header from './header'
import Typography from './typography'
import Colors from './colors'
import StyledComponents from './styled-components'
import { ThemeProvider } from '../provider'
import { default as defaultTheme } from '../themes'
import { GatsbyLinkButton } from '../components/gatsby-link'

export default ({ pageContext, children }) => {
  const { theme = defaultTheme, name, returnPath } = pageContext || {}

  return (
    <ThemeProvider theme={theme} name={name}>
      <GatsbyLinkButton to={`${returnPath}`}>Return</GatsbyLinkButton>
      <Header />
      {children}
      <Colors />
      <Typography />
      <StyledComponents />
    </ThemeProvider>
  )
}
