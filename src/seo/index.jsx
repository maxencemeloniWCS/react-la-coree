import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

// a ajouter  ?
//lang
//viewport si repsonsive
export default function SEO  ({ title, description, image, article, location }) {
    const { pathname } = useLocation();
    const { strapiSettings } = useStaticQuery(seoQuery)
    const seo = {
        title: title || '',
        description : description || strapiSettings.seo.description,
        image: image || process.env.GATSBY_API_URL + strapiSettings.seo.image[0].url,
        url: `${strapiSettings.url}${pathname}`,
    }
    return (
        <Helmet title={seo.title} titleTemplate={'%s · ' + seo.title}>
            <meta name="description" content={seo.description} />
            {seo.url && <link rel="canonical" href={seo.url} />}
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.title &&<title>{seo.title}</title>}
            {seo.description && (<meta property="og:description" content={seo.description} />)}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {/* twitterUsername && (<meta name="twitter:creator" content={twitterUsername} />)*/}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (<meta name="twitter:description" content={seo.description} />)}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    )

}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}
SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
}

const seoQuery = graphql`
    query seoQuery {
      strapiSettings {
        url
        seo {
          title
          description
          image {
            url
          }
        }
      }
    }
    `
