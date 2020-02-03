import React from 'react';
import ContactForm from './../components/contactForm';
import linkedin from './../img/linkedin.png';
import github from './../img/github.png';
import whats from './../img/whats.png'
import { Container, Image } from 'react-bootstrap';

const ContactPage = () => {
    return (
        <Container className="text-center">
            <div style={{ margin: "2rem 0" }}>
                <h2 className="title">Thanks for trying connecting with me</h2>
                <h3 className="sub-title">Let's talk</h3>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h4>Send A Message</h4>
                    </div>
                    <ContactForm />
                </div>
                <div className="col-md-6">
                    <div>
                        <h3 className="sub-title">Connect with me now</h3>
                        <a href="https://www.linkedin.com/in/mahmoud-elsayed-nafea-a1478ba9/">
                            <Image src={linkedin} fluid className="contact-img" />
                        </a>
                        <a href="https://github.com/MahmoudNafea">
                            <Image src={github} fluid className="contact-img" />
                        </a>
                    </div>
                    <div>
                        <p>Tel: +60139381220</p>
                        <p>Gmail:mahmoudnafea19@gmail.com</p>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default ContactPage