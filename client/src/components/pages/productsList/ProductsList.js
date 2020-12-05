import React, { Component } from 'react'
import ProductService from './../../../service/products.service'

import { Container, Row, Col } from 'react-bootstrap'

class ProductsList extends Component {

    constructor(){
        super()
        this.state = {
            products: []
        }
        this.productService = new ProductService()
        console.log(this.productService)
    }

    componentDidMount = () => {
        this.productService
            .getProducts()
            .then(res => this.setState({products: res.data}))
            .catch(err => console.log(err))
    }

    render(){
        return(
        <Container>
            <h1>Listado de productos</h1>
                <Row>           
                    {this.state.products.map(elm =>  <Col>{elm.title}</Col>)}           
                </Row>
        </Container>)
    }
}
export default ProductsList