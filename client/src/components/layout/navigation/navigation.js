import React, { Component } from 'react'
import { Nav, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'

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

        return (

        <Nav className='navigation' >                        
            <Nav.Item>
                <Nav.Link href="/inicio">Inicio</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Subastas" id="nav-dropdown">
                 <Link to='/subastas'>Todos los productos</Link>
               
                    <NavDropdown title="Por categorías" id="nav-dropdown">                 
                    <Link to='/subastas-relojes'>Relojes</Link>
                    <NavDropdown.Divider />
                    <Link to='/subastas-joyas'>Joyas</Link>
                    <NavDropdown.Divider />
                    <Link to='/subastas-arte'>Arte</Link>
                    <NavDropdown.Divider />
                    <Link to='/subastas-otros'>Otros</Link>
                    </NavDropdown>
              
            </NavDropdown>
            <NavDropdown title="Venta directa" id="nav-dropdown">
                 <Link to='/venta-directa'>Todos los productos</Link>
               
                    <NavDropdown title="Por categorías" id="nav-dropdown">
                    <Link to='/vd-relojes'>Relojes</Link>
                    <NavDropdown.Divider />
                    <Link to='/vd-joyas'>Joyas</Link>
                    <NavDropdown.Divider />
                    <Link to='/vd-arte'>Arte</Link>
                    <NavDropdown.Divider />
                    <Link to='/vd-otros'>Otros</Link>
                    </NavDropdown>
              
            </NavDropdown>


            
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
