import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './signup.css'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            username:'',
            password:'',
            name:'',
            lastName:'',
            email:'',
        }
        this.authService = new AuthService()

    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {

     

        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(theLoggedInUser => {
                this.props.storeUser(theLoggedInUser.data)
                this.props.history.push('/inicio')})
            .catch(err => console.log(err))
    }


    render() {

        return (

            <Container>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <div className='signup'>
                        <h1>Registro de usuario</h1>
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
                            <Form.Group controlId="name">
                                <Form.Label><p>Nombre</p></Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label><p>Apellidos</p></Form.Label>
                                <Form.Control type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label><p>Correo electrónico</p></Form.Label>
                                <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>
                            
                            <button  type="submit">Registrarme</button>                          
                        </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Signup