module.exports = {
  plugins: [
    'gatsby-plugin-mdx',
    {
      resolve: '@talves/gatsby-theme-isolated-core',
      options: {
        name: 'example-site',
        wrapRootElement: true,
      },
    },
    {
      resolve: '@talves/gatsby-theme-a',
      options: {
        name: 'gatsby-theme-a',
        returnPath: '/',
      },
    },
    {
      resolve: '@talves/gatsby-theme-b',
      options: {
        name: 'gatsby-theme-b',
        returnPath: '/',
      },
    },
  ],
}
