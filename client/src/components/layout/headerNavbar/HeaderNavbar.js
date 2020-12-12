import React, { Component } from 'react'
import { Navbar, Button, Form, FormControl, Container, Row} from 'react-bootstrap'
import logo from './logoHome.jpg'
import './HeaderNavbar.css'
import ProductList from './../../pages/productsList/ProductsList'
import ProductService from './../../../service/products.service'
import ProductCard from './../../pages/productsList/ProductCard'


class HeaderNavbar extends Component {

    constructor(props) {
        super(props)
        this.state ={
            products: [],
            productBackup:[],
            textBuscar:''
        }
        this.productService = new ProductService()
    }

componentDidMount = () => {

    this.productService
        .getProducts()
        .then(res => this.setState({products: res.data, productBackup: res.data}))
        .catch(err => console.log(err))
  
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
console.log('en el navbar', this.state.products)
        return (
            <>
            <Navbar id='HNavbar' bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="/" className="ml-auto">  <img
                                alt="Logotipo"
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                style={{ width: '30px' }}
                            />Portada</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                    <Form inline>
                    <FormControl type="text" value={this.state.text} placeholder="Buscar producto" className="ml-auto" onChange={(text) => this.filter(text)} />
                    {/* <input class="form-control"  value={this.state.text} onChange={(text) => this.filter(text)}/> */}
                    {/* <Button variant="dark">Search</Button> */}
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            {/* {this.state.textBuscar.length!=0 &&
            <Container>
            <h1>Listado de productos</h1>
                <Row>           
                    {this.state.products.map(elm => <ProductCard key={elm._id} {...elm}/>)}           
                </Row>
            </Container> */}
            
            
            </>
        )
    }
}

export default HeaderNavbar
