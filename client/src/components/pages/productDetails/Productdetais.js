
import React, { Component } from 'react'
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

    componentDidMount = () => this.fetchProduct()

     

    
fetchProduct=()=>{
    const product_id = this.props.match.params.product_id

    this.productService
        .getOneProduct(product_id)
        .then(res => this.setState({ product: res.data }))
        .catch(err => console.log(err))
}


    render() {
 console.log('produtdetails', this.state.product)
        return (
            <>
                <Details productProps ={this.state.product} loggedUser={this.props.loggedUser} match={this.props.match} history={this.props.history} fetchProduct={this.fetchProduct} />
            </>
        )
    }
}

export default ProductDetails










