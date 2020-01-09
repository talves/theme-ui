import { useThemeUI } from '../provider'
export const useTheme = () => {
  const { theme } = useThemeUI()
  return theme
}
