import React from 'react';

function Nav() {
    return (
        <header>
            <div className="wrapper">
                <h1><a href="/" title=""><span>La</span> Corée</a></h1>
                <nav>
                    <ul>
                        <li><a href="/header" title="">Accueil</a></li>
                        <li><a href="/about" title="">À propos</a></li>
                        <li><a href="/menu" title="">Menu</a></li>
                        <li><a href="/gallery" title="">Galerie</a></li>
                        <li><a href="/contact" title="">Nous contacter</a></li>
                        <li><a href="https://facebook.com/" title=""><i className="fa fa-facebook"/></a></li>
                    </ul>
                </nav>
            </div>
        </header>)
}


export default Nav;
