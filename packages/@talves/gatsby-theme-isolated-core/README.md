## @talves/gatsby-theme-isolated-core

This theme (plugin) for Gatsby uses [`@talves/itui`][itui] with [`@talves/itui-use-isolated-theme-context`][https://github.com/talves/theme-ui/tree/itui-next-core/packages/%40talves/itui-use-isolated-theme-context] and allows for Gatsby theme building using an isolated context provider for [`theme-ui`][theme-ui].

NOTE: [`theme-ui`][theme-ui] uses a shared emotion theme context by default. `theme-ui` will build upon your theme when adding plugins that use `theme-ui`. This could create an issue if you want your theme isolated from the rest of your Gatsby site. If you are sure you are not going to need an isolated emotion theme context, you should use [`gatsby-plugin-theme-ui`][gatsby-plugin-theme-ui]. One hint would be you are building a site with no plugins using `theme-ui` and want to use [`theme-ui`][theme-ui] to build your Gatsby site.

### Setup (Using)

**To setup a theme plugin using an Isolated Provider**

```javascript
module.exports = {
  plugins: [
    {
      /* `@talves/gatsby-theme-isolated-core`
          Passing the name to isolate our theme context.
          You MUST wrap any page layouts with <ThemeProvider /> created by `createCoreThemeProvider` to have
          access to the isolated theme context using the hooks from this library.
          Otherwise, the context will look for the closest shared provider in the component tree.
       */
      resolve: `@talves/gatsby-theme-isolated-core`,
      options: { name: '@talves/gatsby-theme-core' },
    },
  ],
};
```

**To setup a plugin and setup own Provider**

These two setups will create exactly the same `wrapRootElement` other than having a different name value in the `Context.Provider` value.

`gatsby-config.js`
```javascript
module.exports = {
  plugins: [
      /* Creates a shared provider with the default name of the plugin */
    `@talves/gatsby-theme-isolated-core`,
  ],
};
```
OR
```javascript
module.exports = {
  plugins: [
    {
      /* Creates an isolated context provider with the name value of the passed name */
      resolve: `@talves/gatsby-theme-isolated-core`,
      options: { name: 'some-unique-name-to-identify', wrapRootElement: true },
    },
  ],
};
```

### Determining an isolated theme context is needed
TODO: explaination needed here or maybe a blog post

[itui]: https://github.com/talves/theme-ui/tree/itui-next-core/packages/%40talves/itui
[theme-ui]: https://github.com/system-ui/theme-ui
[gatsby-plugin-theme-ui]: https://github.com/system-ui/theme-ui/tree/master/packages/gatsby-plugin-theme-ui

© ADARTA Inc. 2019  (**No License**)  

This open source software has **No License** and owner reserves all rights. Owner reserves the right to change the license at any time or grant or deny a private license when requested. Unauthorized use, modification, or sharing of the software is unlawful for any purpose without prior written permission.
