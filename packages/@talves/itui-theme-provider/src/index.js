import {
  jsx,
  Context,
  useIsolatedThemeUI,
  createThemeProvider as createCoreThemeProvider,
} from '@talves/itui-core'
import { createColorModeProvider } from '@talves/itui-color-modes'
import { MDXProvider } from '@theme-ui/mdx'
import { Global } from '@emotion/core'

const BodyStyles = ({ theme = {} }) => {
  if (theme.useBodyStyles === false) return false

  return jsx(Global, {
    styles: theme => {
      const fontFamily = theme.fonts && theme.fonts.body
      const fontWeight = theme.fontWeights && theme.fontWeights.body
      const lineHeight = theme.lineHeights && theme.lineHeights.body

      return {
        body: {
          fontFamily,
          fontWeight,
          lineHeight,
        },
      }
    },
  })
}

export const ThemeProvider = ({
  theme,
  components,
  children,
  IsolatedContext,
}) => {
  const {
    useIsolatedThemeUI,
    ThemeProvider: CoreProvider,
  } = createCoreThemeProvider({
    IsolatedContext,
  })
  const { ColorModeProvider } = createColorModeProvider({
    IsolatedContext,
  })
  const outer = useIsolatedThemeUI(IsolatedContext)

  if (typeof outer.setColorMode === 'function') {
    return jsx(
      CoreProvider,
      { theme },
      jsx(MDXProvider, {
        components,
        children,
      })
    )
  }

  return jsx(
    CoreProvider,
    { theme },
    jsx(
      ColorModeProvider,
      null,
      jsx(BodyStyles, { theme }),
      jsx(MDXProvider, {
        components,
        children,
      })
    )
  )
}

export const createThemeProvider = ({ IsolatedContext = Context }) => {
  const IsolatedThemeProvider = props =>
    jsx(ThemeProvider, { IsolatedContext: IsolatedContext, ...props })
  const { useColorMode, ColorModeProvider } = createColorModeProvider(
    IsolatedContext
  )

  return {
    Context: IsolatedContext,
    ThemeProvider: IsolatedThemeProvider,
    useIsolatedThemeUI,
    ColorModeProvider,
    useColorMode,
  }
}
