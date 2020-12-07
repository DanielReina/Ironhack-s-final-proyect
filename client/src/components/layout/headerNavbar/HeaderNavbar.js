import React, { Component } from 'react'
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap'
import logo from './logoHome.jpg'
import './HeaderNavbar.css'


class HeaderNavbar extends Component {

    constructor() {
        super()
        this.state ={

        }
    }

    render() {

        return (

            <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/" className="ml-auto">  <img
                            alt="Logotipo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />Portada</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
                <Form inline>
                <FormControl type="text" placeholder="Search" className="ml-auto" />
                <Button variant="dark">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>

        //     <Navbar bg="dark" variant="dark" expand="md" style={{ marginBottom: '50px' }}>
        //     <Link to="/">
        //         <Navbar.Brand >Mis Subastas</Navbar.Brand>
        //     </Link>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="ml-auto">
        //             <Link to="#">
        //                 <Nav.Link as="div">Inicio</Nav.Link>
        //             </Link>
        //             <Link to="#">
        //                 <Nav.Link as="div">Venta directa</Nav.Link>
        //             </Link>                  
        //             <Link to="#">
        //                 <Nav.Link as="div">Subastas</Nav.Link>
        //             </Link>
        //             <Link to="#">
        //                 <Nav.Link as="div">Inicio sesión</Nav.Link>
        //             </Link>                   
        //             <Link to="#">
        //                 <Nav.Link as="div">Mi perfil</Nav.Link>
        //             </Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>


        )
    }
}

export default HeaderNavbar
