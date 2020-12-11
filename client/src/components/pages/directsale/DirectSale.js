import { Container, Row} from 'react-bootstrap'
import ProductService from './../../../service/products.service'
import React, { Component } from 'react'
import ProductCard from './../productsList/ProductCard'



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
       console.log(this.state.salesProducts)
    return (
      <Container>
      <h1>Venta Directa</h1>
          <Row>           
              {this.state.salesProducts.map(elm => <ProductCard key={elm._id} {...elm} loggedUser={this.props.loggedUser}/>)}           
          </Row>
  </Container>
    )
}
}

export default Directsale
