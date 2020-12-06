import React, { Component } from 'react'
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'



class Navigation extends Component {

    constructor() {
        super()
        this.state ={

        }
    }

    render() {

        return (

        <Nav className='mr-auto' >                        
            <Nav.Item>
                <Nav.Link href="/inicio">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#">Subastas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#">Venta directa</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#">Mi perfil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="#">Iniciar sesión</Nav.Link>
            </Nav.Item>
        </Nav>


        )
    }
}

export default Navigation
