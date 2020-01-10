module.exports = options => {
  if (options === undefined) {
    console.log(
      `Using @talves/gatsby-theme-isolated-core without a name will have a shared isolated Context.
Make sure to read the docs [TODO: add link here] to understand the ramification of your actions.`
    )
  }
}
