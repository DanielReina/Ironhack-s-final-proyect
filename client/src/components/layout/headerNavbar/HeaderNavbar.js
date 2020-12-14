import React, { Component } from 'react'
import { Navbar, Form, FormControl} from 'react-bootstrap'
import logo from './misubastas.jpeg'
import './HeaderNavbar.css'
import ProductService from './../../../service/products.service'



class HeaderNavbar extends Component {

    constructor(props) {
        super(props)
        this.state ={
            productBackup:[],
            textBuscar:'',
            products: []
        }
        this.productServices = new ProductService()
    }

componentDidMount = () => {

    this.productServices
    .getProducts()
    .then(response => this.setState({products: response.data,  productBackup: response.data}))
    .catch(err => this.setState({products: []})) 
} 

filter(e){    
    let text =e.target.value
    const data = this.state.productBackup
    const newData = data.filter(function(item){
        const itemDataTitle = item.title.toUpperCase()
        const itemDataDescp = item._id.toUpperCase()
        const campo = itemDataTitle+" "+itemDataDescp
        const textData = text.toUpperCase()
        return campo.indexOf(textData) > -1
    })
    this.setState({
        products: newData,
        textBuscar: text,
    })
  }
      


    render() {
console.log('en navbar', this.state.products)
        return (
            <>
          <Navbar id='HNavbar' bg="dark" expand="lg" variant="dark" >
      <Navbar.Brand href="/" className="ml-auto"> <img alt="Logotipo" src={logo}  className="d-inline-block align-top" style={{ width: '30px' }}/>Portada</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">      
          <Form inline>
          <FormControl type="text" value={this.state.text} placeholder="Buscar producto" className="ml-auto" onChange={(text) => this.filter(text)} />
          </Form>
      </Navbar.Collapse>
    </Navbar>
            
            
            </>
        )
    }
}

export default HeaderNavbar
