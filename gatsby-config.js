module.exports = {
  siteMetadata: {
    title: 'Im Knot Tangled - Oracle Cards, Pyrograhy, Lettering, and Art',
    author: 'Sarah Leigh Brich',
    description: 'About Im Knot Tangled and the Intuitive Discovery Oracle Deck',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
