import React from 'react';
import Nav from './Nav'
import Title from './Title'
import ContactBar from './ContactBar'

function Header() {
    return (
        <section id="header">
            <Nav/>
            <Title/>
            <ContactBar/>
        </section>
    )

}

export default Header;

