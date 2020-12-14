import { Container, Row} from 'react-bootstrap'
import ProductService from './../../../../service/products.service'
import React, { Component } from 'react'
import MyProductCard from './MyProductCard'

class MyProducts extends Component {    
     
  constructor(){
    super()
    this.state = {
        myProducts: []
    }
    this.productService = new ProductService()
   
}


componentDidMount = () => {  
  if(this.props.loggedUser !== undefined){
  const userId = this.props.loggedUser._id
  this.productService
      .getMyProducts(userId)
      .then(res => this.setState({myProducts: res.data }))
      .catch(err => console.log(err))}
}


componentDidUpdate(prevProps) {
  if (!prevProps.loggedUser && this.props.loggedUser) 
  {this.productService
    .getMyProducts(this.props.loggedUser._id)
    .then(res => this.setState({myProducts: res.data}))
    .catch(err => console.log(err))
}}


    render(){
    return (
      <Container>
      <h1>Listado de productos</h1>
          <Row>           
              {this.state.myProducts.map(elm => <MyProductCard key={elm._id} history={this.props.history}  {...elm}/>)}           
          </Row>
  </Container>
    )
}
}

export default MyProducts
