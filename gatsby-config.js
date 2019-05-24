module.exports = {
  siteMetadata: {
    title: `Penny House Weddings`,
    description: `Get quality video of your wedding at a great price.`,
    author: `Josh Drentlaw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: 'josh-drentlaw-web-development',
        apiKey: '834389172697799',
        apiSecret: 'QmNJkvm0qWhwHQjYhTM_AFJLlqQ',
        resourceType: 'image'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `penny-house-weddings`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
