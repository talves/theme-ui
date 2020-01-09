/** @jsx jsx */
import { jsx } from '../provider'
import Card from './Card'
import ColorPalette from './ColorPalette'
import TypeStyle from './TypeStyle'

export const ThemeCard = props => {
  return (
    <Card
      {...props}
      sx={{
        color: 'text',
        bg: 'background',
      }}>
      <TypeStyle />
      <ColorPalette label={false} size={32} />
    </Card>
  )
}

export default ThemeCard
