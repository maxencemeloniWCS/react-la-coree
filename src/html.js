import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
        <head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            {/*<meta name="viewport" content="width=device-width, initial-scale=1"/>*/}
            <meta name="author" content="mmapi.fr" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,600&display=swap"
                rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap" rel="stylesheet"/>
            <link rel='dns-prefetch' href='//fonts.googleapis.com' />
            <link rel='dns-prefetch' href='//s.w.org' />
            {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
        <script src="https://kit.fontawesome.com/a078a7a723.js" crossOrigin="anonymous"/>
        </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
