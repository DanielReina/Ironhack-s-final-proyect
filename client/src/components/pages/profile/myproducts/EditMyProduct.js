import React, { Component } from 'react'
import ProductService from '../../../../service/products.service'
import { Switch, Route} from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'

class EditMyProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: ``,
            description: '',
            category: '',
            initialPrice: '',
            mainImage: '',
            timeLimit: '',
            detailsImages: '', 
            salesMethod: '',
            prueba:false
           
           
        }
        this.productService = new ProductService()
       
    }

    // onClick={this.props.history.push('/mis-productos')}
   
    Myinfo(){
       let MyProduct=''
        this.productService
        .getProducts()
        .then(res => {
            MyProduct = res.data.filter(product => product._id === this.props.match.params.product_id)[0]
            this.setState({title: MyProduct.title,
            description: MyProduct.description,
            category: MyProduct.category,
            initialPrice: MyProduct.initialPrice,
            mainImage: MyProduct.mainImage,
            timeLimit: MyProduct.timeLimit,
            detailsImages: MyProduct.detailsImages, 
            salesMethod: MyProduct.salesMethod,
        
           
            })

        })
        .catch(err => console.log(err))

      
    }
    componentDidMount(){
        this.Myinfo()
    }


    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        const product_id = this.props.match.params.product_id

        this.productService
            .editProduct(product_id, this.state)
            .then(res =>this.props.history.push({pathname: ('/mis-productos')})
            )
            .catch(err => console.log(err))
    }

    submit (){this.setState({prueba: true})}

    render() {
     
        console.log('Mi producto', this.props.history)
        return (
            <>
                <h1>Edita el producto</h1>
                <hr/>
                   
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="category">
                        <Form.Label>Categoría</Form.Label>
                        <Form.Control name="category" as="select" value={this.state.category} onChange={this.handleInputChange}>
                        <option>Otros</option>
                        <option>Joyas</option>
                        <option>Arte</option>
                        <option>Relojes</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="salesMethod">
                        <Form.Label>Método de venta</Form.Label>
                        <Form.Control name="salesMethod" as="select" value={this.state.salesMethod} onChange={this.handleInputChange}>
                        <option>Venta directa</option>
                        <option>Subasta</option>Crear producto
                     
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="timeLimit">
                        <Form.Label>Fecha límite de puja </Form.Label>
                        <Form.Control type="datetime-local" name="timeLimit" value={this.state.timeLimit} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="initialPrice">
                        <Form.Label>Precio inicial</Form.Label>
                        <Form.Control type="number" name="initialPrice" value={this.state.initialPrice} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="mainImage">
                        <Form.Label>Imagen principal</Form.Label>
                        <Form.Control type="text" name="mainImage" value={this.state.mainImage} onChange={this.handleInputChange} />
                    </Form.Group>
                    {/* <Form.Group controlId="detailsImages">
                        <Form.Label>Imágenes extras</Form.Label>
                        <Form.Control type="text" name="detailsImages" value={this.state.detailsImages} onChange={this.handleInputChange} />
                    </Form.Group> */}
                    <Button variant="dark" type="submit" onClick={()=>this.submit()} >Guardar edición </Button>
     
                </Form>
            </>
        )
    }
}

export default EditMyProduct