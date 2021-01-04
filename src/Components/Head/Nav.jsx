import React from 'react';

function Nav() {

    function handleClick(e) {
        e.preventDefault();
        let top = document.getElementById(e.target.getAttribute('href').replace('#', '')).offsetTop;
        window.scrollTo({top, behavior: 'smooth' });
    }
    return (
        <header>
            <div className="wrapper">
                <h1><a href="/" title=""><span>La</span> Corée</a></h1>
                <nav>
                    <ul>
                        <li><a onClick={handleClick} href="#header" title="">Accueil</a></li>
                        <li><a onClick={handleClick} href="#about" title="">À propos</a></li>
                        <li><a onClick={handleClick} href="#menu" title="">Menu</a></li>
                        <li><a onClick={handleClick} href="#gallery" title="">Galerie</a></li>
                        <li><a onClick={handleClick} href="#contact" title="">Nous contacter</a></li>
                        <li><a href="https://facebook.com/" title="" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-label="Facebook" /></a></li>
                    </ul>
                </nav>
            </div>
        </header>)
}


export default Nav;
