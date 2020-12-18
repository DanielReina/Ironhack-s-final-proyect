import { Container, Row} from 'react-bootstrap'
import ProductService from './../../../service/products.service'
import React, { Component } from 'react'
import ProductCard from './../productsList/ProductCard'
import './directSale.css'



class Directsale extends Component {    
     
  constructor(){
    super()
    this.state = {
        salesProducts: []
    }
    this.productService = new ProductService()   
}


componentDidMount(){
    
    let sProducts

    this.productService
        .getProducts()
        .then(res => {
             sProducts=res.data.filter(product => product.salesMethod === 'Venta directa')
            this.setState({salesProducts: sProducts})
    })
        .catch(err => console.log(err))
  }
  

    render(){

    return (
      <Container>
      <h1 className='vD-h1' >Todos los productos en Venta Directa</h1>
          <Row>           
              {this.state.salesProducts.map(elm => <ProductCard key={elm._id} {...elm} loggedUser={this.props.loggedUser}/>)}           
          </Row>
  </Container>
    )
}
}

export default Directsale
