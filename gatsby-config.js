module.exports = {
  siteMetadata: {
    title: `Penny House Weddings`,
    description: `Get quality video of your wedding at a great price.`,
    author: `Josh Drentlaw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
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
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        /* typekit: {
          id: 'xxxxxx'
        }, */
        google: {
          families: ['Cinzel']
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
