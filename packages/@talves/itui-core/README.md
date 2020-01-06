
# @talves/itui-core

Core Emotion and JSX implementation for Theme UI uses an isolated context to return 

**Note:** *This package is included in the main `itui` package, and generally should not be used on its own.*

```sh
yarn add @talves/itui-core
```

## API

- `ThemeProvider`
- `createThemeProvider`

```js
const IsolatedContext = createContext() // 
const {
  Context,
  ThemeProvider,
  useIsolatedThemeUI,
  ColorModeProvider,
  useColorMode,
} = createThemeProvider(IsolatedContext)
```
