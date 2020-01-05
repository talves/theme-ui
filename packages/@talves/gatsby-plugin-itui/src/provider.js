import { createThemeProvider, createContext } from '@talves/itui'

const IsolatedContext = createContext()
export const {
  Context,
  ThemeProvider,
  ColorModeProvider,
  useIsolatedThemeUI,
  useColorMode,
} = createThemeProvider(IsolatedContext)

export const useThemeUI = () => {
  const context = useIsolatedThemeUI(Context)
  return context
}
