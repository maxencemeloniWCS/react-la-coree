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
                contentTypes: [],
                singleTypes: [
                    `about`,
                    `gallery`,
                    `legal-notice`,
                    `menu`,
                    `settings`,
                    `slideshow`
                ],
            },
        },
    ]
}
