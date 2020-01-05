import React from 'react'
import { version as __EMOTION_VERSION__ } from '@emotion/core/package.json'

export const createContext = () =>
  React.createContext({
    __EMOTION_VERSION__,
    theme: null,
  })

/* A default shared context */
export const Context = createContext()
export const useThemeUI = () => React.useContext(Context)

export const useIsolatedThemeUI = IsolatedContext => {
  const context = React.useContext(IsolatedContext)
  return context
}
