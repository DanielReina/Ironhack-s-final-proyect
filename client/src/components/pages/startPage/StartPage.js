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
                    <Col  md={{span:4}}>
                        <div className='start-page'>
                            <h2>Venta directa</h2>
                            <hb></hb>                       
                            <Link to='/venta-directa'><p>Para vender y comprar, sin mas complicaciones.</p> </Link>
                        </div>            
                    </Col>
                    <Col  md={{span:4,  offset: 2}}>           
                    <div className='start-page'>
                            <h2>Subastas</h2>
                            <hb></hb>  
                            <Link to='/subastas'><p>Pon tu producto a subastar o puja por el producto deseado.</p></Link>
                        </div>
                    </Col>

                </Row>
                <Row>
                {
                this.props.loggedUser ? 

                <Col  md={{span:6}}>
                <div className='start-page'>
                          
                  
                            <Button  onClick={this.logOut} ><p>Cerrar sesión</p></Button>
                        </div>            
                    </Col>
                    :
               
           
              <Col  md={{span:6}}>
              <div className='start-page'>
                            <Link to='/iniciar-sesion'>Iniciar sesión</Link>
                        </div>            
                    </Col>
             

            }
                   
                    <Col  md={{span:6}}>           
                    <div className='start-page'>
                            <h2>Mi Perfil</h2>
                            <hb></hb>  
                            <Link to='/perfil'><p>Para gestionar y consultar tus datos, tus productos y tus adquisiciones</p></Link>
                        </div>
                    </Col>
                </Row>
                    
           
            </Container>
            )
    }
}
export default StartPage