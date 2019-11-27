module.exports = {
  pathPrefix: "/several-people-are-talking",
  siteMetadata: {
    title: `Several people are talking`,
    description: `Audio archive for vernacular.ai`,
    author: ``,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
          icon: `src/images/vernacular-ai-32x320.png`, // This path is relative to the root of the site.
      },
    },
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `posts`,
            path: `${__dirname}/src/pages/posts`,
        },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`
  ],
};
