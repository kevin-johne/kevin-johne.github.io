module.exports = {
  siteMetadata: {
    siteUrl: "http://www.kevin-guy.co.uk",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-svgr",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/templates/layout.jsx`),
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data/",
        name: "data",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.svg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Cantata One", "Playfair Display:900", "Raleway"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-561ZT1XFWB", "GTM-K2NKQSH"],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          anonymize: true,
        },
      },
    },
  ],
};
