import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navigation from './../../layout/navigation/navigation'


class StartPage extends Component {

    constructor(){
        super()
        this.state = {
          showModal: false
        }
     
    }
   
    showModal = () => this.setState({showModal: true})
    render(){
        return(
            <Container className="home-page">
              <Row>
              <Col xs={1}>
                   <Navigation/>
              </Col>
              <Col  xs={11}>
                <Row>
                    <Col  md={{ span:6 }}>
                        <div>
                            <img src='https://www.creativosonline.org/blog/wp-content/uploads/2018/01/carrusel-react.jpg' alt='carrusel de imágenes'/>
                    {/* <Link to='/beers'>All Beers</Link> */}
                            <p>carrusel de imágenes para cuando implemente claudinary</p>
                        </div> 
                    </Col>
                </Row>
                <Row>
                    <Col  md={{span:6}}>
                        <div>
                            <Link to='#'>Venta directa</Link>
                        </div>            
                    </Col>
                    <Col  md={{span:6}}>           
                        <div>
                            <Link to='#'>Subastas</Link>
                        </div>
                    </Col>

                </Row>
                <Row>
                    <Col  md={{span:6}}>
                        <div>
                            <Link to='#'>Iniciar sesión</Link>
                        </div>            
                    </Col>
                    <Col  md={{span:6}}>           
                        <div>
                            <Link to='#'>Mi perfil</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col  md={{span:12}}>
                        <div>
                            <Link to='/nuevo-producto'>Nuevo producto</Link>
                            <Button variant='dark' size='sm' onClick={this.showModal}>Crear un nuevo producto</Button>
                        </div>            
                    </Col>
                </Row>
                </Col>
             </Row>
           
            </Container>)
    }
}
export default StartPage