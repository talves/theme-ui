import React from 'react'
import { jsx, InitializeColorMode } from './src/provider'
import Wrapper from './wrap-root-element'

export const wrapRootElement = (props, options) => {
  const name = options && options.name
  const noRootElement = options && !Boolean(options.wrapRootElement)
  if (noRootElement) return
  console.log(
    `Setting up SSR shared context[${name || 'gatsby-theme-isolated-core'}]`
  )
  /* We use a shared isolated context for any plugins requesting a shared isolated context.
    When using a named theme is not shared, make sure to wrap your layout with CoreThemeProvider
  */
  return <Wrapper {...props} name={name || 'gatsby-theme-isolated-core'} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([jsx(InitializeColorMode, { key: 'theme-ui-no-flash' })])
}
