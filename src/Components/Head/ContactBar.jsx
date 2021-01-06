import React from 'react';

function ContactBar() {
    return (
        <div id='header-bottom'>
            <div className='wrapper contactBar'>
                <div className='header-card'>
                    <div>
                        <i className='fa fa-clock' />
                        <div>
                            <span>Ouvert aujourd'hui </span>
                            <span>12h à 14h - 19h à 22h</span>
                            <span> </span>
                        </div>
                    </div>
                </div>
                <div className='header-card'>
                    <div>
                        <i className='fa fa-phone' />
                        <div>
                            <span>
                                <a href='tel:+33 9 83 81 10 96' title=''>
                                    09 83 81 10 96
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='header-card'>
                    <div>
                        <i className='fa fa-map' />
                        <div>
                            <span>
                                <a href='#contact' title=''>
                                    278 rue Garibaldi, 69003 Lyon
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
