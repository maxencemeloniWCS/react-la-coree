import React from 'react';

function MobileOverlay({open}) {
    const handleBurgerClose = (e) => {
        e.preventDefault();
        open(false);
    };

    return (
        <div
            className="nav-mobile-overlay"
            id="overlay-menu"
            onClick={handleBurgerClose}
        />
    );
}

export default MobileOverlay;
