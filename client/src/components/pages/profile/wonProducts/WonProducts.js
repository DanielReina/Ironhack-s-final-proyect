import { Container, Row} from 'react-bootstrap'
import ProductService from '../../../../service/products.service'
import React, { Component } from 'react'
import WonProductCard from './WonProductCard'
import './wonProducts.css'




class Wonproducts extends Component {    
     
    constructor(){
        super()
        this.state = {
            myWonProducts: []
        }
        this.productService = new ProductService()
       
    }
    
    
    componentDidMount = () => this.fetchProducts()
      
      fetchProducts=()=> {
      if(this.props.loggedUser !== undefined){
      const userId = this.props.loggedUser._id
      this.productService
          .wondBids()
          .then(res => this.setState({myWonProducts: res.data }))
          .catch(err => console.log(err))}
    }
    
    
    componentDidUpdate(prevProps) {
      if (!prevProps.loggedUser && this.props.loggedUser) 
      {this.productService
        .wondBids()
        .then(res => this.setState({myWonProducts: res.data}))
        .catch(err => console.log(err))
    }}
    
    
        render(){
          
        return (
          <Container>
          <h1 className='mAdq-h1' >Mis adquisiciones</h1>
              <Row>           
                  {this.state.myWonProducts.map(elm => <WonProductCard fetch={this.fetchProducts} key={elm._id} history={this.props.history}  {...elm}/>)}           
              </Row>
      </Container>
        )
    }
}


export default Wonproducts

