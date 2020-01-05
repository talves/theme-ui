import React from 'react'
import { ThemeProvider } from './provider'
import theme from './index'
import components from './components'

export const wrapRootElement = ({
  element,
  name = '@talves/gatsby-theme-itui',
}) => (
  <ThemeProvider name={name} theme={theme} components={components}>
    {element}
  </ThemeProvider>
)
