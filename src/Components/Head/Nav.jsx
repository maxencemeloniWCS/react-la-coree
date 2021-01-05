import React, { useState, useRef, useEffect, useCallback } from 'react';

function Nav({ data }) {
    console.log('data: ', data);
    const [scrolled, setScrolled] = useState(false);

    const [headerHeight, _setHeaderHeight] = useState(0);
    const headerHeightRef = useRef(headerHeight);
    function setHeaderHeight(data) {
        headerHeightRef.current = data;
        _setHeaderHeight(data);
    }

    let lastScrollTop = useRef(0);

    const handleScroll = useCallback(() => {
        let st = document.documentElement.scrollTop;
        const offset = window.scrollY;
        if (offset > headerHeightRef.current) {
            if (st > lastScrollTop.current) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
            lastScrollTop.current = st;
        } else {
            setScrolled(false);
        }
    }, []);

    function handleClick(e) {
        e.preventDefault();
        let top = document.getElementById(e.target.getAttribute('href').replace('#', '')).offsetTop;
        window.scrollTo({ top, behavior: 'smooth' });
    }

    useEffect(() => {
        setHeaderHeight(document.getElementById('header').offsetHeight);

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, [handleScroll]);

    console.log('data.title.split(): ', data.title.split(' '));
    return (
        <header className={scrolled ? 'fixed' : ''}>
            <div className="wrapper">
                <h1>
                    <a href="/" title="">
                        <span>{data.title.split(' ')[0]}</span> {data.title.split(' ').slice(1).join(' ')}
                    </a>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <a onClick={handleClick} href="#header" title="">
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a onClick={handleClick} href="#about" title="">
                                À propos
                            </a>
                        </li>
                        <li>
                            <a onClick={handleClick} href="#menu" title="">
                                Menu
                            </a>
                        </li>
                        <li>
                            <a onClick={handleClick} href="#gallery" title="">
                                Galerie
                            </a>
                        </li>
                        <li>
                            <a onClick={handleClick} href="#contact" title="">
                                Nous contacter
                            </a>
                        </li>
                        <li>
                            <a href={data.socialmedia.facebook} title="Facebook" target="_blank" rel="noreferrer">
                                <i className="fa fa-facebook" aria-label="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href={data.socialmedia.tripadvisor} title="TripAdvisor" target="_blank" rel="noreferrer">
                                <i className="fa fa-tripadvisor" aria-label="TripAdvisor" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
