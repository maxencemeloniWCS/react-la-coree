import React from 'react';

function Map() {
    return (
        <div id="maps">
            <iframe
                width="100%"
                height="600"
                title="Google map"
                frameBorder="0"
                src={
                    'https://www.google.com/maps/embed/v1/search?key=' +
                    process.env.GATSBY_GOOGLE_API_KEY +
                    '&q=record+stores+in+Seattle'
                }
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Map;
