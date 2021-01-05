import React, {useState, useRef, useEffect, useCallback} from 'react';

function Nav() {
    const [scrolled, setScrolled] = useState(false);

    let lastScrollTop = useRef(0);

    const handleScroll = useCallback(() => {
        let st = document.documentElement.scrollTop;
        const offset = window.scrollY;
        if (offset > 600) {
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
        let top = document.getElementById(
            e.target.getAttribute('href').replace('#', '')
        ).offsetTop;
        window.scrollTo({top, behavior: 'smooth'});
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, [handleScroll]);

    return (
        <header className={scrolled ? 'fixed' : ''}>
            <div className="wrapper">
                <h1>
                    <a href="/" title="">
                        <span>La</span> Corée
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
                            <a
                                href="https://www.facebook.com/lacoreelyon/"
                                title="Facebook"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i
                                    className="fa fa-facebook"
                                    aria-label="Facebook"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.tripadvisor.fr/Restaurant_Review-g187265-d3436536-Reviews-La_Coree-Lyon_Rhone_Auvergne_Rhone_Alpes.html/"
                                title="TripAdvisor"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i
                                    className="fa fa-tripadvisor"
                                    aria-label="TripAdvisor"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Nav;
