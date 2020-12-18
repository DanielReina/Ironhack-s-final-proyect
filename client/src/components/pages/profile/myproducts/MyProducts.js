import { Container, Row} from 'react-bootstrap'
import ProductService from './../../../../service/products.service'
import React, { Component } from 'react'
import MyProductCard from './MyProductCard'
import './MyProducts.css'

class MyProducts extends Component {    
     
  constructor(){
    super()
    this.state = {
        myProducts: []
    }
    this.productService = new ProductService()
   
}


componentDidMount = () => this.fetchProducts()
  
  fetchProducts=()=> {
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
      <h1 className='lDP-h1' >Mis productos en venta</h1>
          <Row>           
              {this.state.myProducts.map(elm => <MyProductCard fetch={this.fetchProducts} key={elm._id} history={this.props.history}  {...elm}/>)}           
          </Row>
  </Container>
    )
}
}

export default MyProducts
