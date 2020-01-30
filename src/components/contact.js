import React from 'react';
import linkedin from './../img/linkedin.png'
import github from './../img/github.png'
import { Container, Image } from 'react-bootstrap';

const ContactPage = () => {
    return (
        <Container className="text-center">
            <h2 className="title">Thanks for trying connecting with me</h2>
            <h3 className="sub-title">Let's talk</h3>
            <p className="intro">Send me a message, connect with me through or give me a call to know more about me </p>
            <div className="row">
                <div className="col-md-6">
                    message
                </div>
                <div className="col-md-6">
                    <h3 className="sub-title">Connect with me now</h3>
                    <a href="https://www.linkedin.com/in/mahmoud-elsayed-nafea-a1478ba9/">
                        <Image src={linkedin} fluid className="contact-img" />
                    </a>
                    <a href="https://github.com/MahmoudNafea">
                        <Image src={github} fluid className="contact-img" />
                    </a>
                </div>

            </div>
        </Container>
    )
}

export default ContactPage