import React, { Component } from 'react'
import { Nav, NavDropdown} from 'react-bootstrap'
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
            <NavDropdown title="Subastas" id="nav-dropdown">
                 <Link to='/subastas'>Todos los productos</Link>
               
                    <NavDropdown title="Por categorías" id="nav-dropdown">
                    <Link to='#'>Relojes</Link>
                    <NavDropdown.Divider />
                    <Link to='#'>Joyas</Link>
                    <NavDropdown.Divider />
                    <Link to='#'>Arte</Link>
                    <NavDropdown.Divider />
                    <Link to='#'>Otros</Link>
                    </NavDropdown>
              
            </NavDropdown>
            <Nav.Item>
                <Nav.Link href="/venta-directa">Venta directa</Nav.Link>
            </Nav.Item>
            <Nav.Item>          
            <Link to='/perfil'>Mi perfil</Link>
            </Nav.Item>
            {
                this.props.loggedUser ? 
                <Nav.Link as='button' onClick={this.logOut} >Cerrar sesión</Nav.Link> :
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
