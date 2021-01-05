require("dotenv").config();
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-env-variables`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_API_URL || "http://localhost:1337",
        queryLimit: -1, // -1 = No limits // Default to 100
        contentTypes: [
          'products'
        ],
        singleTypes: [
          `about`,
          `gallery`,
          `legal-notice`,
          `slideshow`,
        ],
      },
    },
  ],
/*  siteMetadata:{
    title :"Restaurant La Corée - restaurant barbecue coréen à Lyon",
    titleTemplate: "%s · Restaurant La Corée - restaurant coréen à Lyon",
    description : "Saveurs coréennes traditionnel dans une salle conviviale au mobilier brun et aux tables dotées de teppanyaki. Barbecue Coréen",
    url:"https://www.restaurant-la-coree.fr/",
    image:""
  },*/
}
