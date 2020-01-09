import React from 'react'
import { version as __EMOTION_VERSION__ } from '@emotion/core/package.json'

export const createContext = ({
  theme = null,
  name = 'itui-default-context',
} = {}) =>
  React.createContext({
    __EMOTION_VERSION__,
    theme,
    name,
  })

/* A default shared context */
export const Context = createContext()
export const useThemeUI = () => React.useContext(Context)

export const useIsolatedThemeUI = IsolatedContext => {
  const context = React.useContext(IsolatedContext)

  if (context === undefined) {
    throw new Error(
      `[@talves/itui-use-isolated-theme-context] useIsolatedThemeUI must be used within an ThemeProvider with the same context`
    )
  }

  return context
}
