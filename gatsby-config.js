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
        {
            resolve: `gatsby-plugin-google-analytics-gdpr`,
            options: {
                // The property ID; the tracking code won't be generated without it.
                trackingId: "UA-126844155-5",
                // Optional parameter (default false) - Enable analytics in development mode.
                enableDevelopment: true, // default false
                // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
                anonymizeIP: true,
                // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
                autoStartWithCookiesEnabled: false,
                // Optional parameter - Configuration for react-ga and google analytics
                reactGaOptions: {
                    debug: false,
                    gaOptions: {
                        sampleRate: 10
                    }
                }
            },
        },
    ]
}
