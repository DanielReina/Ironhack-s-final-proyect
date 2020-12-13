import React, { Component } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ControlledCarousel from './Carousel'
import AuthService from '../../../service/auth.service'



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
                    <Col  md={{ span: 7, offset: 2 }}>
                  <ControlledCarousel/>
                    </Col>
                </Row>
                <Row>
                    <Col  md={{span:4}}>
                        <div>
                            <Link to='/venta-directa'>Venta directa</Link>
                        </div>            
                    </Col>
                    <Col  md={{span:4,  offset: 2}}>           
                        <div>
                            <Link to='/subastas'>Subastas</Link>
                        </div>
                    </Col>

                </Row>
                <Row>
                {
                this.props.loggedUser ? 

                <Col  md={{span:6}}>
                        <div>
                            <Button  onClick={this.logOut} >Cerrar sesión</Button>
                        </div>            
                    </Col>
                    :
               
           
              <Col  md={{span:6}}>
                        <div>
                            <Link to='/iniciar-sesion'>Iniciar sesión</Link>
                        </div>            
                    </Col>
             

            }
                   
                    <Col  md={{span:6}}>           
                        <div>
                            <Link to='/perfil'>Mi perfil</Link>
                        </div>
                    </Col>
                </Row>
                    
           
            </Container>
            )
    }
}
export default StartPage