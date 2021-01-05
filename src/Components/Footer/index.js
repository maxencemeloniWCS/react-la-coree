import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Markdown from 'react-markdown';
import './style.css';

function Footer() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [legalNotice, setLegalNotice] = useState(null);

    useEffect(() => {
        fetch(process.env.GATSBY_API_URL + '/legal-notice')
            .then(res => res.json())
            .then(res => {
                setLegalNotice(res.legalnotice);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const openModal = e => {
        e.preventDefault();
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <footer>
            <div className="wrapper">
                <p>Copyright blabla</p>
                <ul>
                    <li>
                        <a href="#" onClick={openModal} title="">
                            Mentions légales
                        </a>
                    </li>
                </ul>
                <div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Mentions légales"
                        className="Modal"
                        overlayClassName="Overlay"
                    >
                        <div onClick={closeModal}>
                            {isLoading ? 'Chargement...' : <Markdown>{legalNotice}</Markdown>}
                        </div>
                    </Modal>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
