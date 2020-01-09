import { jsx } from '@talves/itui-core'

export { jsx, merge } from '@talves/itui-core'
export { createThemeProvider } from '@talves/itui-theme-provider'
export {
  createContext,
  useIsolatedThemeUI,
} from '@talves/itui-use-isolated-theme-context'
export { InitializeColorMode } from '@talves/itui-color-modes'
export { Styled, components } from '@theme-ui/mdx'
export { css, get } from '@theme-ui/css'

// TODO: work this into root provider/global styles?
export const BaseStyles = props =>
  jsx('div', {
    ...props,
    sx: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      variant: 'styles',
    },
  })

export * from '@theme-ui/components'
