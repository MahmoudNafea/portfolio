import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    state = {
        email: '',
        password: ''
    }

    onEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        // const data = {
        //     email: this.state.email,
        //     password: this.state.password
        // }
        console.log('Sorry, still underdevelopment')
        this.setState({ email: '', password: '' })
    }
    render() {
        return (
            <Card bg="Light" text="dark"
                className="container text-center col-md-6" >
                <h1>Please Login to see your dashboard</h1>
                <div>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={this.state.email}
                                required onChange={this.onEmailChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password}
                                required onChange={this.onPasswordChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Card >
        )
    }
}

export default LoginPage