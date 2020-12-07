import React, { Component } from 'react'
import ProductService from '../../../service/products.service'

import { Form, Button } from 'react-bootstrap'

class ProductForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            category: '',
            initialPrice: '',
            mainImage: '',
            cutOffTime: '',
            detailsImages: '',          
        }
        this.productService = new ProductService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.productService
            .saveProduct(this.state)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <h1>Nuevo producto</h1>
                <hr />

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

                    <Form.Group controlId="cutOffTime">
                        <Form.Label>Fecha límite de puja</Form.Label>
                        <Form.Control type="datetime-local" name="cutOffTime" value={this.state.timeLimit} onChange={this.handleInputChange} />
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
                    <Button variant="dark" type="submit">Crear producto</Button>
                </Form>
            </>
        )
    }
}

export default ProductForm