import { Container, Row, Col } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './profile.css'

class Profile extends Component {    
     
    
    render(){
       
    return (
        <Container fluid>
            <Row>
                <Col md={{span:6, offset: 3}}>
                    <div className='profile' >
                        <h1>¡Bienvenid@ a tu perfil, {this.props.loggedUser.name} !</h1>
                        <hr />
                        <Row>
                            <Col className='box'>
                                <h2>MIS PRODUCTOS</h2>
                                <Row>
                                <Col>
                                    <Link to='nuevo-producto'><p>Poner nuevo producto en venta</p></Link>
                                </Col>            
                                <Col>
                                    <Link to='mis-productos'><p>Mis productos en venta</p></Link>
                                </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='box' md={{span:5, offset: 0}}>
                                <h2>MI CUENTA</h2>         
                                <Link to='/mis-datos'><p>Mis datos</p></Link>
                            </Col>  
                            <hr />

                            <Col className='box' md={{span:5, offset: 2}}>
                                <h2>MIS ADQUISICIONES</h2>        
                                <Link to='/productos-adquiridos'><p>Productos adquiridos</p></Link>
                            </Col>            
                            <hr />
                        </Row>                  
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
}

export default Profile