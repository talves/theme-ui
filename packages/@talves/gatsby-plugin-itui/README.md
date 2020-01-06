# @talves/gatsby-plugin-itui

Gatsby plugin for adding Theme UI context provider with shared isolated ui

**Note: ** this is more of an example of a simple plugin to use `@talves/itui`

```sh
yarn add @talves/itui @talves/gatsby-plugin-itui
```

```js
// gatsby-config.js
module.exports = {
  plugins: ['@talves/gatsby-plugin-itui'],
}
```

In addition to providing context, this plugin will also
prevent a flash of unstyled colors when using color modes.

It **does not** apply default typographic styles in your application. See the [`Styled.root` docs](https://theme-ui.com/styled#styledroot) for how to handle base typographic styles.

## Customizing the theme

To customize the theme used in your Gatsby site,
shadow the `src/@talves/gatsby-plugin-itui/index.js` module.

```js
// src/@talves/gatsby-plugin-itui/index.js
export default {
  colors: {
    text: '#111',
    background: '#fff',
  },
}
```
