import React from 'react';

function Planning({displayHours}) {
    return (
        <div id="planning" className={displayHours ? '':'hidden'}>
            <p><strong>Lundi</strong>	11:45–14:30</p>
            <p><strong>Mardi</strong>	11:45–14:30</p>
            <p><strong>Mercredi</strong>	11:45–14:30</p>
            <p><strong>Jeudi</strong>	11:45–14:30</p>
            <p><strong>Vendredi</strong>	11:45–14:30, 18:30–20:30</p>
            <p><strong>Samedi</strong>	11:45–14:30, 18:30–20:30</p>
            <p><strong>Dimanche</strong> fermé</p>
        </div>
    );
}

export default Planning;
