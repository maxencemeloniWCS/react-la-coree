import React, {useContext, useEffect, useState} from 'react';
import dayjs from 'dayjs';
import Planning from './Planning';
import {Context} from '../../context/Context';

function ContactBar({data}) {
    const {isMobile} = useContext(Context);
    const [isOpen, setIsOpen] = useState(true);
    const [hours, setHours] = useState('');
    const [displayPlanning, setDisplayPlanning] = useState(false);
    const planning = [
        'Voir les horaires',
        '11:45–14:30',
        '11:45–14:30',
        '11:45–14:30',
        '11:45–14:30',
        '11:45–14:30, 18:30–20:30',
        '11:45–14:30, 18:30–20:30',
    ];
    useEffect(() => {
        let today = dayjs().day();
        setIsOpen(today !== 0);
        setHours(planning[today]);
    }, [planning]);

    function showHours() {
        if(!isMobile) {
            setDisplayPlanning(!displayPlanning);
        }
    }
    function showHoursClick() {
        setDisplayPlanning(!displayPlanning);
    }

    return (
        <div id="header-bottom">
            <div className="wrapper contactBar">
                <div
                    className="header-card"
                    id="card-planning"
                    onClick={showHoursClick}
                    onMouseEnter={showHours}
                    onMouseLeave={showHours}
                >
                    <div>
                        <i className="fa fa-clock" />
                        <div>
                            <span>
                                {isOpen ? 'Ouvert' : 'Fermé'} aujourd'hui{' '}
                            </span>
                            <span>{hours}</span>
                            <span> </span>
                        </div>
                    </div>
                    <Planning displayPlanning={displayPlanning} />
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
                                <a href="#maps" title="">
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
