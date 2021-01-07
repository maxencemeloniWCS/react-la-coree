import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [sendResult, setSendResult] = useState('');

    const resetForm = () => {
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
    };

    const handleChangeName = e => {
        setName(e.target.value);
    };
    const handleChangePhone = e => {
        setPhone(e.target.value);
    };
    const handleChangeEmail = e => {
        setEmail(e.target.value);
    };
    const handleChangeMessage = e => {
        setMessage(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

        const urlencoded = new URLSearchParams();
        urlencoded.append('name', name);
        urlencoded.append('phone', phone);
        urlencoded.append('email', email);
        urlencoded.append('message', message);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch('http://146.59.231.196:1338/contact', requestOptions)
            .then(response => response.text())
            .then(result => {
                resetForm();
                setSendResult(JSON.parse(result).error || 'Message envoyé');
            })
            .catch(error => console.log('error', error));
    };

    return (
        <form id="form-contact" onSubmit={submitForm}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Votre nom"
                value={name}
                onChange={handleChangeName}
                required
            />
            <input
                type="tel"
                name="phone"
                id="phone"
                pattern="[0][0-9]{9}"
                placeholder="Votre téléphone"
                value={phone}
                onChange={handleChangePhone}
                required
            />
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Votre email"
                value={email}
                onChange={handleChangeEmail}
                required
            />
            <textarea
                id="message"
                name="message"
                placeholder="Votre message"
                value={message}
                onChange={handleChangeMessage}
                required
            />
            <button>Envoyer</button>
            <p id="form-error">{sendResult}</p>
        </form>
    );
}

export default Form;
