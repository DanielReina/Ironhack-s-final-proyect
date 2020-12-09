import React, { Component } from 'react'
import AuthService from './../../../service/auth.service'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class EditProfile extends Component {

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
                        <h1>Editar perfil</h1>
                        <hr />
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>Apellidos</Form.Label>
                                <Form.Control type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="text" name="email" value={this.state.email} onChange={this.handleInputChange} />
                            </Form.Group>
                            
                            <Button variant="dark" type="submit">Editar</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EditProfile