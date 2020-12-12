import React, { Component } from 'react'
import ProductService from './../../../service/products.service'
import {Container, Row} from 'react-bootstrap'
import ProductCard from './ProductCard'

class ProductsList extends Component {

    constructor(){
        super()
        this.state = {
            products: [],
            filterproducts:[]
        }
        this.productService = new ProductService()
     
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
                    {this.state.products.map(elm => <ProductCard key={elm._id} {...elm}/>)}           
                </Row>
        </Container>)
    }
}
export default ProductsList