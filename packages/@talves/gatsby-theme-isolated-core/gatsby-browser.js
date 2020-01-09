import React from 'react'
import Wrapper from './wrap-root-element'

export const wrapRootElement = (props, options) => {
  const name = options && options.name
  const noRootElement = options && !Boolean(options.wrapRootElement)
  console.log('options', options, 'noRootElement', noRootElement)
  if (noRootElement) return
  console.log(
    `Setting up browser shared context Wrapper [${name ||
      'gatsby-theme-isolated-core'}]`
  )
  /* We use a shared isolated context for any plugins not using a name option.
    When using a named plugin, make sure to wrap your layout with CoreThemeProvider
  */
  return <Wrapper {...props} name={name} />
}
