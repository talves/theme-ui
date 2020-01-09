exports.createPages = ({ actions }, opts = {}) => {
  const {
    basePath = '/style-guide',
    returnPath = '/',
    theme,
    name = '@talves/gatsby-theme-style-guide',
  } = opts

  actions.createPage({
    path: basePath,
    component: require.resolve('./src/templates/style-guide.js'),
    context: { theme, name, returnPath },
  })
}
