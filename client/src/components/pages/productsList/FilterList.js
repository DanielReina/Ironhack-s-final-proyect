import React, { Component } from 'react'
import { Container, Row} from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import ProductCard from './../productsList/ProductCard'




class FilterList extends Component {

    constructor(props) {
        super(props)
        this.state ={         
            products: []
        }

    }

 


    render() {

        return (
            <>
 {this.props.products.length===0 ?
    <h1>Los parámetros de búsqueda no han obtenido ningún resultado</h1>:<>
    {this.props.text.length!==0 && this.props.products.length!==0  ? 
           
            <Container>
              <h1>Listado de productos</h1>
              <Row>           
                  {this.props.products.map(elm => <ProductCard key={elm._id} {...elm}/>)}           
              </Row>
            </Container> 
            : <></> } </> }   
            
            
            </>
        )
    }
}

export default FilterList
