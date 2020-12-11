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
    // this.userId = this.props.loggedUser._id
}


componentDidMount = () => {
  
  if(this.props.loggedUser != undefined){
  const userId = this.props.loggedUser._id
  console.log('soy el componente componentDidMount')
  this.productService
      .getMyProducts(this.props.loggedUser._id)
      .then(res => this.setState({ myProducts: res.data }))
      .catch(err => console.log(err))}
}


componentDidUpdate(prevProps) {
  if (!prevProps.loggedUser && this.props.loggedUser) 
  {this.productService
    .getMyProducts(this.props.loggedUser._id)
    .then(res => {
      console.log('soy el componentDidUpdate funcionando')
      this.setState({myProducts: res.data})
  })
    .catch(err => console.log(err))
}}


    render(){
       console.log('soy el render', this.props.loggedUser)
    return (
      <Container>
      <h1>Listado de productos</h1>
          <Row>           
              {this.state.myProducts.map(elm => <MyProductCard key={elm._id} {...elm}/>)}           
          </Row>
  </Container>
    )
}
}

export default MyProducts
