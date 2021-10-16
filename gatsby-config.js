module.exports = {
  siteMetadata: {
    siteUrl: "http://www.kevin-johne.me",
    title: "Kevin Johne - Freelance Frontend Developer",
    description: "Kevin Johne a freelance frontend developer. He does living style guides, responsive websites, and software engineering. Available for contract work"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-svgr",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
        fonts: [
          'Cantata One',
          'Playfair Display\:900',
          'Raleway'
        ],
        display: 'swap'
      }
    }
  ],
};
