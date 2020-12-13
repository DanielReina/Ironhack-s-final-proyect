import { Container, Row} from 'react-bootstrap'
import ProductService from './../../../service/products.service'
import React, { Component } from 'react'
import ProductCard from './../productsList/ProductCard'



class WatchAuctions extends Component {    
     
  constructor(){
    super()
    this.state = {
        autcionsProducts: []
    }
    this.productService = new ProductService()   
}


componentDidMount(){
    
    let aProducts
    let bProducts

    this.productService
        .getProducts()
        .then(res => {
             aProducts=res.data.filter(product => product.salesMethod === 'Subasta')           
            bProducts=aProducts.filter(product => product.category === 'Relojes')
            this.setState({autcionsProducts: bProducts})
    })
        .catch(err => console.log(err))
  }
  

    render(){
     console.log(this.state.autcionsProducts)
    return (
        <>
        <Container> 
        <h1>Subastas Categoría: Relojes</h1>    
            <Row>    
                {this.state.autcionsProducts.map(elm => <ProductCard key={elm._id} {...elm} loggedUser={this.props.loggedUser} />)}           
            </Row>
        </Container> 
        </>
    )
}
}

export default WatchAuctions


