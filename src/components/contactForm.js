import React from 'react';
import { Form, Button } from 'react-bootstrap';
const ContactForm = () => {
    return (
        <div >
            <Form action="https://smartforms.dev/submit/5e3b6053d8ad7f23295deb26" method="Post">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control as="textarea" rows="3" placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default ContactForm;