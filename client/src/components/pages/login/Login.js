import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'
import './Login.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.authService
            .login(this.state)
            .then(theLoggedInUser => {            
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/inicio')
                })       
            .catch(err => console.log({ err }))
    }


    render() {

        return (

            <Container>

                <Row>
               
                    <Col md={{ span: 6, offset: 3 }}>
                    <div className='login'>
                        <h1>Inicio de sesión</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label><p>Usuario</p></Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label><p>Contraseña</p></Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Button variant="dark" type="submit">Iniciar sesión</Button>
                            <p>¿No tienes cuenta? <a href="/registro">Regístrate</a> </p>
                        </Form>
                        </div>
                    </Col>
             
                </Row>
            </Container>
        )
    }
}

export default Login