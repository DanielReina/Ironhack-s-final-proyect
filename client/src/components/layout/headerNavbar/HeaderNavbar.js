import React, { Component } from 'react'
import { Navbar, Form, FormControl, Container, Row} from 'react-bootstrap'
import logo from './misubastas.jpeg'
import './HeaderNavbar.css'
import ProductService from './../../../service/products.service'
import ProductCard from './../../pages/productsList/ProductCard'



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
    {this.state.textBuscar.length!==0 &&  this.state.products.length!==0  ? 
       // (this.state.textBuscar[0]!==' ' 
            <Container>
              <h1>Productos encontrados por: {this.state.textBuscar}</h1>
              <Row>           
                  {this.state.products.map(elm => <ProductCard key={elm._id} {...elm}/>)} 
                    
              </Row>
            </Container> 
            : <></> }     
            
            
            </>
        )
    }
}

export default HeaderNavbar
