import React from 'react'
import {
  /* from '@talves/itui-core' */
  jsx,
  /* from '@talves/itui-color-modes' */
  InitializeColorMode,
  /* itui */
  createThemeProvider,
} from '@talves/itui'
import { createContext } from '@talves/itui-use-isolated-theme-context'
import defaultTheme from './themes'

export const createCoreThemeProvider = ({
  name = '@talves/gatsby-theme-isolated-core',
  theme = defaultTheme,
}) => {
  const IsolatedContext = createContext({ name, theme })
  IsolatedContext.displayName = name

  const {
    Context,
    ThemeProvider: CoreThemeProvider,
    ColorModeProvider,
    useIsolatedThemeUI,
    useColorMode,
  } = createThemeProvider(IsolatedContext)

  const useThemeUI = () => useIsolatedThemeUI(IsolatedContext)

  const ThemeProvider = props => (
    <CoreThemeProvider
      IsolatedContext={IsolatedContext}
      name={name}
      theme={theme}
      {...props}
    />
  )

  return {
    Context,
    useIsolatedThemeUI,
    ColorModeProvider,
    useColorMode,
    useThemeUI,
    ThemeProvider,
  }
}

export {
  /* from '@talves/itui-core' */
  jsx,
  /* from '@talves/itui-color-modes' */
  InitializeColorMode,
}
export const {
  /* itui */
  Context,
  useIsolatedThemeUI,
  ColorModeProvider,
  useColorMode,
  useThemeUI,
  ThemeProvider,
} = createCoreThemeProvider({
  name: '@talves/gatsby-theme-isolated-core',
  theme: defaultTheme,
})
