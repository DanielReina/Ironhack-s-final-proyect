import { Container, Row, Col } from 'react-bootstrap'
import ProductService from './../../../../service/products.service'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './../../productsList/ProductCard'

class MyProducts extends Component {    
     
  constructor(){
    super()
    this.state = {
        myProducts: []
    }
    this.productService = new ProductService()
    console.log(this.productService)
}

componentDidMount = () => {
  this.productService
      .getMyProducts(this.props.loggedUser._id)
      .then(res => this.setState({myProducts: res.data}))
      .catch(err => console.log(err))
}

  // getMyProducts
    render(){
       
    return (
      <Container>
      <h1>Listado de productos</h1>
          <Row>           
              {this.state.myProducts.map(elm => <ProductCard key={elm._id} {...elm}/>)}           
          </Row>
  </Container>
    )
}
}

export default MyProducts
