import { Col, Card, ListGroupItem, ListGroup, Button, ButtonGroup, Container, Row } from 'react-bootstrap'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProductService from './../../../service/products.service'
import Details from './Details'

class ProductDetails extends Component {

    constructor() {
        super()
        this.state = {
            product: undefined
        }
        this.productService = new ProductService()
    }

    componentDidMount = () => {

        const product_id = this.props.match.params.product_id

        this.productService
            .getOneProduct(product_id)
            .then(res => this.setState({ product: res.data }))
            .catch(err => console.log(err))
    }

    render() {
console.log('detalles de producto', this.state.product)
        return (
            <>
                <Details productProps ={this.state.product} />
            </>
        )
    }
}

export default ProductDetails










