import React, { Component } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ControlledCarousel from './Carousel'
import AuthService from '../../../service/auth.service'
import './starPage.css'



class StartPage extends Component {

    constructor(){
        super()
        this.state = {           
        }
        this.authService = new AuthService()
    }
   
    logOut = () => {
        this.authService
            .logout()
            .then(res => this.props.storeUser(undefined))
            .catch(err => console.log(err))
    }
    render(){
   
        return(
            <Container fluid className="home-page">
            
                <Row>
                    <Col  md={{ span: 7, offset: 3}}>
                  <ControlledCarousel/>
                    </Col>
                </Row>
                <Row>
                    <Col  md={{span:4, offset: 1}}>
                        <div className='start-page'>
                        <Link to='/venta-directa'><h2>Venta directa</h2></Link>
                                             
                           <p>Todos nuestros productos en venta actualmente</p> 
                        </div>            
                    </Col>
                    <Col  md={{span:4,  offset: 2}}>           
                    <div className='start-page'>
                    <Link to='/subastas'><h2>Subastas</h2></Link>
                   
                           <p>Productos en subasta añadidos recientemente</p>
                        </div>
                    </Col>

                </Row>
                <Row>
                {
                this.props.loggedUser ? 

                <Col   md={{span:4, offset: 1}}>
                <div className='start-page'>
                          
                  
                            <button onClick={this.logOut} ><h2>Cerrar sesión</h2></button>
                        </div>            
                    </Col>
                    :
               
           
              <Col  md={{span:4, offset: 1}}>
              <div className='start-page'>
                            <Link to='/iniciar-sesion'><h2>Iniciar sesión</h2></Link>
                        </div>            
                    </Col>
             

            }
                   
                    <Col   md={{span:4, offset: 2}}>           
                    <div className='start-page'>
                    <Link to='/perfil'><h2>Mi Perfil</h2></Link>
                 
                           <p>Para gestionar y consultar tus datos, tus productos y tus adquisiciones</p>
                        </div>
                    </Col>
                </Row>
                    
           
            </Container>
            )
    }
}
export default StartPage