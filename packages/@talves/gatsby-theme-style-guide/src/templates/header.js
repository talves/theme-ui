import React from 'react'
import { Styled, Box } from '../provider'

export default () => {
  return (
    <Box as="header">
      <Styled.h1
        sx={{
          color: 'green',
        }}>
        Style Guide
      </Styled.h1>
    </Box>
  )
}
