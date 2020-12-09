import { Container, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Profile extends Component {    
     
    
    render(){
       
    return (
        <Container>
        <Row>
        <Col>
            <h1>¡Bienvenid@ a tu perfil {this.props.loggedUser.name} !</h1>
            <hr />
            <h2>Mi cuenta</h2>
            <Col>
            <Link to='/mis-datos'>Mis datos</Link>
            </Col>
            <Col>
            <Link to='/editar-mis-datos'>Editar mis datos</Link>
            </Col>
            <hr />
            <h2>Mi subastas</h2>
            <Col>
            <Link to='#'>En puja</Link>
            </Col>
            <Col>
            <Link to='#'>Ganadas</Link>
            </Col>
            <Col>
            <Link to='#'>No ganadas</Link>
            </Col>
            <hr />
            <h2>Mis productos</h2>
            <Col>
            <Link to='nuevo-producto'>Poner nuevo producto en venta</Link>
            </Col>            
            <Col>
            <Link to='mis-productos'>Mis productos</Link>
            </Col>
            
        </Col>
        </Row>
        </Container>
    )
}
}

export default Profile