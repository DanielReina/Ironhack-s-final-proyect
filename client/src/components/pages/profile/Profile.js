import { Container, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Profile extends Component {    
     
    
    render(){
       
    return (
        <Container fluid>
        <Row>
        <Col md={{span:10, offset: 3}}>
            <h1>¡Bienvenid@ a tu perfil {this.props.loggedUser.name} !</h1>
            <hr />
            <Row>
            <Col md={{span:4, offset: 0}}>
            <h2>Mi cuenta</h2>         
            <Link to='/mis-datos'>Mis datos</Link>
            </Col>  
            <hr />

            <Col md={{span:4, offset: 0}}>
            <h2>Mis adquisiciones</h2>        
            <Link to='/productos-adquiridos'>Productos adquiridos</Link>
            </Col>            
            <hr />
            </Row>
            <h2>Mis productos</h2>
            <Row>
            <Col>
            <Link to='nuevo-producto'>Poner nuevo producto en venta</Link>
            </Col>            
            <Col>
            <Link to='mis-productos'>Mis productos en venta</Link>
            </Col>
            </Row>
        </Col>
        </Row>
        </Container>
    )
}
}

export default Profile