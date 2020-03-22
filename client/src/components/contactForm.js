import React from 'react';
import { Form, Button } from 'react-bootstrap';
const ContactForm = () => {
    return (
        <div >
            <Form action="https://smartforms.dev/submit/5e3b6053d8ad7f23295deb26" method="Post">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" name="email" />
                </Form.Group>
                <Form.Group >
                    <Form.Control type="text" placeholder="Name" name="name" />
                </Form.Group>
                <Form.Group >
                    <Form.Control type="text" placeholder="Subject" name="subject" />
                </Form.Group>
                <Form.Group >
                    <Form.Control as="textarea" rows="3" placeholder="Message" name="message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default ContactForm;