import React from 'react'
import { Styled } from '../provider'
import { ColorPalette } from '../components'
console.log('Styled:', Styled)
export default () => {
  return (
    <section id="colors">
      <Styled.h2>Colors</Styled.h2>
      <ColorPalette sx={{ marginLeft: '40px' }} omit={[]} />
    </section>
  )
}
