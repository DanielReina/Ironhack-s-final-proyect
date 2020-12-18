import { Container, Row} from 'react-bootstrap'
import ProductService from './../../../service/products.service'
import React, { Component } from 'react'
import ProductCard from './../productsList/ProductCard'
import './auctions.css'



class Auctions extends Component {    
     
  constructor(){
    super()
    this.state = {
        autcionsProducts: []
    }
    this.productService = new ProductService()   
}


componentDidMount(){
    
    let aProducts

    this.productService
        .getProducts()
        .then(res => {
             aProducts=res.data.filter(product => product.salesMethod === 'Subasta')
            this.setState({autcionsProducts: aProducts})
    })
        .catch(err => console.log(err))
  }
  

    render(){
     
    return (
      <Container>
      <h1 className='a-h1' >Todos nuestros productos en Subastas</h1>
          <Row>           
              {this.state.autcionsProducts.map(elm => <ProductCard key={elm._id} {...elm} loggedUser={this.props.loggedUser} />)}           
          </Row>
  </Container>
    )
}
}

export default Auctions
