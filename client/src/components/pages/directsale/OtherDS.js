import { Container, Row} from 'react-bootstrap'
import ProductService from '../../../service/products.service'
import React, { Component } from 'react'
import ProductCard from '../productsList/ProductCard'



class OtherDS extends Component {    
     
  constructor(){
    super()
    this.state = {
        salesProducts: []
    }
    this.productService = new ProductService()   
}


componentDidMount(){
    
    let sProducts
    let mProducts

    this.productService
        .getProducts()
        .then(res => {
             sProducts=res.data.filter(product => product.salesMethod === 'Venta directa')
             mProducts=sProducts.filter(product => product.category === 'Otros')
            this.setState({salesProducts: mProducts})
    })
        .catch(err => console.log(err))
  }
  

    render(){

    return (
      <Container>
      <h1>Venta Directa: Otros</h1>
          <Row>           
              {this.state.salesProducts.map(elm => <ProductCard key={elm._id} {...elm} loggedUser={this.props.loggedUser}/>)}           
          </Row>
  </Container>
    )
}
}

export default OtherDS


