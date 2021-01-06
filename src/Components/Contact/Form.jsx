import React from 'react';

function Form() {
    return (
        <form id="form-contact">
            <input type="text" name="name" id="name" placeholder="Votre nom" required />
            <input type="phone" name="phone" id="phone" placeholder="Votre téléphone" required />
            <input type="email" name="email" id="email" placeholder="Votre email" required />
            <textarea id="message" name="message" placeholder="Votre message" required />
            <button>Envoyer</button>
            <p id="form-error" />
        </form>
    );
}

export default Form;
