import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'



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
            <Container fluid className="home-page">
            
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
                            <Link to='/iniciar-sesion'>Iniciar sesión</Link>
                        </div>            
                    </Col>
                    <Col  md={{span:6}}>           
                        <div>
                            <Link to='/perfil'>Mi perfil</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col  md={{span:12}}>
                        <div>
                            <Link to='/nuevo-producto'>Nuevo producto</Link>
                           
                        </div>            
                    </Col>
                </Row>        
           
            </Container>
            )
    }
}
export default StartPage