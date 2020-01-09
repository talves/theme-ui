import {
  /* from '@talves/itui-core' */
  jsx,
  /* from '@talves/itui-color-modes' */
  InitializeColorMode,
  createCoreThemeProvider,
} from '@talves/gatsby-theme-isolated-core'
import theme from './themes'

export { Styled, components } from '@theme-ui/mdx'
export { Box } from '@talves/itui'
export { css, get } from '@styled-system/css'
export {
  /* from '@talves/itui-core' */
  jsx,
  /* from '@talves/itui-color-modes' */
  InitializeColorMode,
  createCoreThemeProvider,
}
export const {
  /* isolated */
  Context,
  useIsolatedThemeUI,
  ColorModeProvider,
  useColorMode,
  useThemeUI,
  ThemeProvider,
} = createCoreThemeProvider({
  name: '@talves/gatsby-theme-style-guide',
  theme,
})
