import React from "react"
import '../assets/css/reset.css';
import '../assets/css/style.css';
import Header from '../Components/Head';
import About from '../Components/About';
import Menu from '../Components/Menu';
import Gallery from '../Components/Gallery';
import Contact from '../Components/Contact';
import MobileOverlay from '../Components/MobileOverlay';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div className="App">
      <Header/>
      <main>
        <About/>
        <Menu/>
        <Gallery/>
        <Contact />
      </main>
      <Footer/>
      <MobileOverlay />
    </div>)
}
