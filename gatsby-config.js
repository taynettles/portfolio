module.exports = {
  siteMetadata: {
    description: "Personal page of Taylen Nettles",
    locale: "en",
    title: "Taylen Nettles",
    formspreeEndpoint: "https://formspree.io/f/mqkweaqe",
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "warm-red",
        showThemeLogo: false,
      },
    },
  ],
}