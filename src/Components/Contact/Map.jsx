import React from 'react';

function Map() {
    return (
        <div id="maps">
            <iframe
                width="100%"
                height="100%"
                title="Google map"
                frameBorder="0"
                src={
                    'https://www.google.com/maps/embed/v1/search?key=' +
                    process.env.GATSBY_GOOGLE_API_KEY +
                    '&q=!1m14!1m8!1m3!1d11135.584174196796!2d4.8532031!3d45.75323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeec92bc7389570!2zTGEgQ29yw6ll!5e0!3m2!1sfr!2sfr!4v1609945187958!5m2!1sfr!2sfr'
                }
                allowFullScreen
            />
{/*            <iframe
                width="100%"
                height="100%"
                title="Google map"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11135.584174196796!2d4.8532031!3d45.75323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeec92bc7389570!2zTGEgQ29yw6ll!5e0!3m2!1sfr!2sfr!4v1609945187958!5m2!1sfr!2sfr"
                aria-hidden="false"
            />*/}
        </div>
    );
}

export default Map;
