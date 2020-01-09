import { get } from '../provider'
import { useTheme } from './context'

export const FontFamily = ({ name }) => {
  const { fonts } = useTheme()
  return get(fonts, name)
}
