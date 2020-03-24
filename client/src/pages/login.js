import React, { useState, useContext } from 'react';
import AuthContext from './../components/context/authContext';
import { Form, Button, Card } from 'react-bootstrap';

const LoginPage = () => {

    const auth = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(true)
    const [error, setError] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        // if (email === "mahmoudnafea19@gmail" && password === "12345") {
        //     auth.login()
        // }
        // setError("your're not allowed. Please contact the creator")
        setError("your're not authenticated. Please contact the creator")

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
                <h2>{error}</h2>
            </div>
        </Card >
    )

}

export default LoginPage