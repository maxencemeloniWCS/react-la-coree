import React, {useState, useRef, useCallback} from 'react';
import {graphql, useStaticQuery} from 'gatsby';

export const Context = React.createContext(null);

export const Provider = (props) => {
    const data = useStaticQuery(graphql`
        {
            strapiSettings {
                title
                address
                phone
                url
                seo {
                    title
                    description
                    image {
                        url
                    }
                }
                socialmedia {
                    facebook
                    tripadvisor
                }
            }
        }
    `);

    const settings = data.strapiSettings;

    const [isMobile, _setIsMobile] = useState(false);
    const isMobileRef = useRef(isMobile);
    function setIsMobile(data) {
        isMobileRef.current = data;
        _setIsMobile(data);
    }

    const checkIsMobile = useCallback(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    return (
        <Context.Provider
            value={{isMobile, setIsMobile, checkIsMobile, settings}}
        >
            {props.children}
        </Context.Provider>
    );
};
