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
                <Nav.Link  href="/inicio">Inicio </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Subastas" id="nav-dropdown">
                 <Link className='link' to='/subastas'>Todos los productos</Link>
               
                    <NavDropdown title="Por categorías" id="nav-dropdown">                 
                    <Link className='link' to='/subastas-relojes'>Relojes</Link>
                    <NavDropdown.Divider />
                    <Link className='link' to='/subastas-joyas'>Joyas</Link>
                    <NavDropdown.Divider />
                    <Link className='link' to='/subastas-arte'>Arte</Link>
                    <NavDropdown.Divider />
                    <Link className='link' to='/subastas-otros'>Otros</Link>
                    </NavDropdown>
              
            </NavDropdown>
            <NavDropdown title="Venta directa" id="nav-dropdown">
                 <Link className='link' to='/venta-directa'>Todos los productos</Link>
               
                    <NavDropdown title="Por categorías" id="nav-dropdown">
                    <Link className='link' to='/vd-relojes'>Relojes</Link>
                    <NavDropdown.Divider />
                    <Link className='link' to='/vd-joyas'>Joyas</Link>
                    <NavDropdown.Divider />
                    <Link className='link' to='/vd-arte'>Arte</Link>
                    <NavDropdown.Divider />
                    <Link className='link' to='/vd-otros'>Otros</Link>
                    </NavDropdown>
              
            </NavDropdown>


            
                 
            <Link className='link-to-perfil' to='/perfil'>Mi perfil</Link>
         
            {
                this.props.loggedUser ? 
                <Nav.Link  onClick={this.logOut} >Cerrar sesión</Nav.Link> :
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
