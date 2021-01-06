import React from 'react';
import FormContainer from "./FormContainer";
import Map from "./Map";
import "./Contact.css";

function Contact() {
    return (<section id="contact">
        <Map />
        <div className="wrapper">
            <FormContainer />
        </div>
    </section>)
}

export default Contact;

