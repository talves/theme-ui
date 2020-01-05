/* @jsx jsx */
import React from 'react'
import {
  jsx,
  merge,
  Context,
  createThemeProvider as createCoreThemeProvider,
} from '@talves/itui-core'
import { get } from '@theme-ui/css'
import { Global, ThemeContext as EmotionContext } from '@emotion/core'
import { toCustomProperties, createColorStyles } from './custom-properties'

const STORAGE_KEY = 'theme-ui-color-mode'
const HAS_STORAGE = typeof Storage !== 'undefined'

const storage = {
  get: init =>
    (HAS_STORAGE && window.localStorage.getItem(STORAGE_KEY)) || init,
  set: value => HAS_STORAGE && window.localStorage.setItem(STORAGE_KEY, value),
}

const getMediaQuery = () => {
  const darkQuery = '(prefers-color-scheme: dark)'
  const lightQuery = '(prefers-color-scheme: light)'
  const darkMQL = window.matchMedia ? window.matchMedia(darkQuery) : {}
  const lightMQL = window.matchMedia ? window.matchMedia(lightQuery) : {}
  const dark = darkMQL.media === darkQuery && darkMQL.matches
  if (dark) return 'dark'
  const light = lightMQL.media === lightQuery && lightMQL.matches
  if (light) return 'light'
  return 'default'
}

const useColorModeState = (theme = {}) => {
  const [mode, setMode] = React.useState(
    (theme !== null && theme.initialColorModeName) || 'default'
  )

  // initialize state
  React.useEffect(() => {
    const stored = storage.get()
    document.body.classList.remove('theme-ui-' + stored)
    if (!stored && theme.useColorSchemeMediaQuery) {
      const query = getMediaQuery()
      setMode(query)
      return
    }
    if (!stored || stored === mode) return
    setMode(stored)
  }, [])

  React.useEffect(() => {
    if (!mode) return
    storage.set(mode)
  }, [mode])

  if (process.env.NODE_ENV !== 'production') {
    if (
      theme.colors &&
      theme.colors.modes &&
      Object.keys(theme.colors.modes).indexOf(theme.initialColorModeName) > -1
    ) {
      console.warn(
        'The `initialColorModeName` value should be a unique name' +
          ' and cannot reference a key in `theme.colors.modes`.'
      )
    }
  }

  return [mode, setMode]
}

const applyColorMode = (theme, mode) => {
  if (!mode) return theme
  const modes = get(theme, 'colors.modes', {})
  return merge.all({}, theme, {
    colors: get(modes, mode, {}),
  })
}

const BodyStyles = () =>
  jsx(Global, {
    styles: theme => createColorStyles(theme),
  })

export const ColorModeProvider = ({ children, IsolatedContext }) => {
  const { useIsolatedThemeUI, Context } = createCoreThemeProvider({
    IsolatedContext,
  })
  const outer = useIsolatedThemeUI(Context)
  const [colorMode, setColorMode] = useColorModeState(outer.theme)
  const theme = applyColorMode(outer.theme || {}, colorMode)

  if (theme.useCustomProperties !== false) {
    theme.rawColors = { ...theme.colors }
    theme.colors = toCustomProperties(theme.colors, 'colors')
  }

  const context = {
    ...outer,
    theme,
    colorMode,
    setColorMode,
  }

  return jsx(
    EmotionContext.Provider,
    { value: theme },
    jsx(
      Context.Provider,
      { value: context },
      jsx(BodyStyles, { key: 'color-mode' }),
      children
    )
  )
}

export const createColorModeProvider = ({ IsolatedContext = Context }) => {
  const IsolatedColorModeProvider = props =>
    jsx(ColorModeProvider, { IsolatedContext: IsolatedContext, ...props })
  const useThemeUI = () => React.useContext(IsolatedContext)
  const useColorMode = () => {
    const { colorMode, setColorMode } = useThemeUI()

    if (typeof setColorMode !== 'function') {
      throw new Error(`[useColorMode] requires the ColorModeProvider component`)
    }

    return [colorMode, setColorMode]
  }

  return {
    ColorModeProvider: IsolatedColorModeProvider,
    useColorMode,
  }
}

const noflash = `(function() { try {
  var mode = localStorage.getItem('theme-ui-color-mode');
  if (!mode) return
  document.body.classList.add('theme-ui-' + mode);
} catch (e) {} })();`

export const InitializeColorMode = () =>
  jsx('script', {
    key: 'theme-ui-no-flash',
    dangerouslySetInnerHTML: {
      __html: noflash,
    },
  })
