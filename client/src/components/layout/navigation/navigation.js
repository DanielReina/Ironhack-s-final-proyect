import React, { Component } from 'react'
import { Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import AuthService from '../../../service/auth.service'



class Navigation extends Component {

    constructor(props) {
        
        super(props)
        this.state ={
        }
        this.authService = new AuthService()
    }

logOut = () => {
    this.authService
        .logout()
        .then(res => this.props.storeUser(undefined))
        .catch(err => console.log(err))
}

    render() {
console.log('holass', this.props.loggedUser)
        return (

        <Nav className='mr-auto' >                        
            <Nav.Item>
                <Nav.Link href="/inicio">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>           
                <Nav.Link href="#">Subastas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">Venta directa</Nav.Link>
            </Nav.Item>
            <Nav.Item>          
            <Link to='/perfil'>Mi perfil</Link>
            </Nav.Item>
            {
                this.props.loggedUser ? 
                <Nav.Link as='div' onClick={this.logOut} >Cerrar sesión</Nav.Link> :
              <>  
                <Nav.Item>
                
                <Nav.Link href="/iniciar-sesion">Iniciar sesión</Nav.Link>
                    
                </Nav.Item>
                </>

            }
           
          
            
        </Nav>


        )
    }
}

export default Navigation
