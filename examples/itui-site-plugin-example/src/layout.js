/** @jsx jsx */
import { jsx, Styled } from '@talves/itui'

export default props => (
  <Styled.root>
    <header>
      <h2>Theme UI Gatsby Example</h2>
    </header>
    <main>
      <div sx={{ fontFamily: 'body' }}>{props.children}</div>
    </main>
  </Styled.root>
)
