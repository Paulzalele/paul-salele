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
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://paulsalele.matomo.cloud/',
        siteUrl: 'https://paulsalele.com',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paul Salele`,
        short_name: `Paul Salele`,
        start_url: `https://paulsalele.com`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/phoenix-icon.png`, // This path is relative to the root of the site.

        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
