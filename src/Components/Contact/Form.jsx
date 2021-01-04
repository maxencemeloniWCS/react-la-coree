import React from "react";

function Form() {
    return (
        <form id="form-contact">
            <input type="text" name="form-first-name" id="form-first-name"
                   placeholder="Votre prénom"/>
            <input type="text" name="form-last-name" id="form-last-name" placeholder="Votre nom"/>
            <input type="text" name="form-tel" id="form-tel" placeholder="Votre téléphone"/>
            <input type="text" name="form-email" id="form-email" placeholder="Votre email"/>
            <textarea id="form-message" name="form-message" placeholder="Votre message"/>
            <button>Envoyer</button>
            <p id="form-error"/>
        </form>
    )
}

export default Form;
