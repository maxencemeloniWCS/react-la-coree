import React from 'react';

function ContactBar({ data }) {
    return (
        <div id="header-bottom">
            <div className="wrapper">
                <div className="header-card">
                    <div>
                        <i className="fa fa-clock" />
                        <div>
                            <span>Ouvert aujourd'hui </span>
                            <span>12h à 14h - 19h à 22h</span>
                            <span> </span>
                        </div>
                    </div>
                </div>
                <div className="header-card">
                    <div>
                        <i className="fa fa-phone" />
                        <div>
                            <span>
                                <a href={'tel:+33 ' + data.phone} title="">
                                    0{data.phone}{' '}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="header-card">
                    <div>
                        <i className="fa fa-map" />
                        <div>
                            <span>
                                <a href="#contact" title="">
                                    {data.address}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactBar;
