import React from "react"
import '../assets/css/style.css';
import Header from '../Components/Head';
import About from '../Components/About';
import Menu from '../Components/Menu';
import Gallery from '../Components/Gallery';
import Contact from '../Components/Contact';
import MobileOverlay from '../Components/MobileOverlay';
import Footer from '../Components/Footer';
import SEO from '../seo';

import ReactGA from 'react-ga';
const trackingId = "UA-126844155-5"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

export default function Home() {
    return (
        <div className="App">
            <SEO/>
            <Header/>
            <main>
                <About/>
                <Menu/>
                <Gallery/>
                <Contact/>
            </main>
            <Footer/>
            <MobileOverlay/>
        </div>)
}
