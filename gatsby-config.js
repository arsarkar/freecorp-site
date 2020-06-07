module.exports = {
  // Note: it must *not* have a trailing slash.
  // run "gatsby build --prefix-paths" for prefix build.
  //pathPrefix: `freecorp2`,
  pathPrefix: `/web/software/public/freecorp2`,
  siteMetadata: {
    title: `FREECORP`,
    author: `@ICMT`,
    description: `Freecorp Website`,
    homepage: `https://www.icmt.ohio.edu`,
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139919616-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-katex`,
        ],
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-glamor`,
  ],
}
