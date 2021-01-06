import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Modal from 'react-modal';
import Markdown from 'react-markdown';
import './Footer.css';

function Footer({modalIsOpen, setModalIsOpen}) {
    const data = useStaticQuery(graphql`
        {
            strapiLegalNotice {
                legalnotice
            }
        }
    `);
    const openModal = (e) => {
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
                        <a
                            href="#mentions-legales"
                            onClick={openModal}
                            title=""
                        >
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
                        <div onClick={closeModal} role="alertdialog">
                            <Markdown>
                                {data.strapiLegalNotice.legalnotice}
                            </Markdown>
                        </div>
                    </Modal>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
