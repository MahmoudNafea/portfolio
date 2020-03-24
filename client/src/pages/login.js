import React, { useState, useContext } from 'react';
import AuthContext from './../components/context/authContext';
import { Form, Button, Card } from 'react-bootstrap';

const LoginPage = () => {

    const auth = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('Sorry, still underdevelopment')
        auth.login()
    }
    return (
        <Card bg="Light" text="dark"
            className="container text-center col-md-6" >
            <h1>Please Login to see your dashboard</h1>
            <div>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email}
                            required onChange={(e) => { setEmail(e.target.value) }} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password}
                            required onChange={(e) => { setPassword(e.target.value) }} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                        </Button>
                </Form>
            </div>
        </Card >
    )

}

export default LoginPage