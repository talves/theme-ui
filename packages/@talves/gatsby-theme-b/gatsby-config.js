const theme = require('@theme-ui/preset-swiss')

module.exports = options => {
  const { name = '@talves/gatsby-theme-b', returnPath = '/b' } = options
  return {
    plugins: [
      {
        resolve: `@talves/gatsby-theme-style-guide`,
        options: {
          name,
          theme,
          basePath: '/b',
          returnPath,
        },
      },
    ],
  }
}
