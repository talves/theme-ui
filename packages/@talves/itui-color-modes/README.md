
# @talves/itui-color-modes

Adds support for user-controlled color modes

**Note:** *This package is included in the main `itui` package, and generally should not be used on its own.*

```sh
npm i @theme-ui/color-modes
```

```jsx
import { createThemeProvider } from '@theme-ui/core'
import { createColorModeProvider } from '@theme-ui/color-modes'
import theme from './theme'

export default ({ children, IsolatedContext }) => {
  const { ThemeProvider } = createThemeProvider(
    IsolatedContext
  )
  const { ColorModeProvider } = createColorModeProvider(
    IsolatedContext
  )

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}
```

## API

- `InitializeColorMode`
- `createColorModeProvider`
    - `useColorMode`
    - `ColorModeProvider`

