import React from 'react'
import { ThemeProvider } from './src/provider'

import theme from './src/themes'

export default ({ element, name = '@talves/gatsby-theme-isolated-core' }) => (
  <ThemeProvider theme={theme} name={name}>
    {element}
  </ThemeProvider>
)
