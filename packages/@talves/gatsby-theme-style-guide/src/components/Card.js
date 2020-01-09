/** @jsx jsx */
import { jsx } from '../provider'

export const Card = props => (
  <div
    {...props}
    sx={{
      variant: 'styles.Card',
    }}
  />
)

export default Card
