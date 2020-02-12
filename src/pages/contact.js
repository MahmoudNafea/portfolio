import React from 'react';
import ContactForm from './../components/contactForm';
import linkedin from './../img/linkedin.png';
import github from './../img/github.png';
import stack from './../img/stack.jpg'
import { Container, Image } from 'react-bootstrap';

const ContactPage = () => {
    return (
        <div>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <Container className="text-center" style={{ background: "white", color: "black" }}>
                <div style={{ margin: "2rem 0" }}>
                    <h2 style={{ paddingTop: "10px" }}>Let's Talk</h2>
                </div>
                <div className="row" style={{ marginBottom: " 20px " }}>
                    <div className="col-md-6">
                        <div>
                            <h4>Send A Message</h4>
                        </div>
                        <ContactForm />
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h3 className="sub-title" style={{ margin: "2rem " }}>Connect with me now</h3>
                            <a href="https://www.linkedin.com/in/mahmoud-elsayed-nafea-a1478ba9/" style={{ margin: "1rem " }}>
                                <Image src={linkedin} fluid className="contact-img" />
                            </a>
                            <a href="https://github.com/MahmoudNafea" style={{ margin: "1rem " }}>
                                <Image src={github} fluid className="contact-img" />
                            </a>
                            <a href="https://stackoverflow.com/users/12745027/mahmoud-nafea" style={{ margin: "1rem " }}>
                                <Image src={stack} fluid className="contact-img" />
                            </a>
                        </div>
                        <div style={{ marginTop: "2rem " }}>
                            <p>Tel: +60139381220</p>
                            <p>Gmail:mahmoudnafea19@gmail.com</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div >

    )
}

export default ContactPage