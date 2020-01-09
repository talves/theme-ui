const theme = require('@theme-ui/preset-deep')

module.exports = options => {
  const { name = '@talves/gatsby-theme-a', returnPath = '/a' } = options
  return {
    plugins: [
      {
        resolve: `@talves/gatsby-theme-style-guide`,
        options: {
          name,
          theme,
          basePath: '/a',
          returnPath,
        },
      },
    ],
  }
}
