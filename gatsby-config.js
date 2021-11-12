module.exports = {
  siteMetadata: {
    title: `Paul Salele`,
    description: `Paul Salele's personal website`,
    author: `Paul Salele`,
    siteUrl: `https://paulsalele.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-remark-responsive-iframe`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paul Salele`,
        short_name: `Paul Salele`,
        start_url: `/`,
        background_color: `#4C1D95`,
        theme_color: `#4C1D95`,
        display: `standalone`,
        icon: `src/images/newpaul.png`, // This path is relative to the root of the site.

        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
