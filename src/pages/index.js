import React, {useState} from 'react';
import {Provider} from '../context/Context';

import '../assets/css/style.css';
import Header from '../Components/Header';
import About from '../Components/About';
import Menu from '../Components/Menu';
import Gallery from '../Components/Gallery';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import SEO from '../seo';

export default function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className="App">
            <Provider>
                <SEO />
                <Header
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                />
                <main>
                    <About />
                    <Menu />
                    <Gallery />
                    <Contact />
                </main>
                <Footer
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                />
            </Provider>
        </div>
    );
}
