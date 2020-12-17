import React, { Component } from 'react'
import ProductService from '../../../../service/products.service'
import FilesService from './../../../../service/upload.service'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import './ProductForm.css'

class ProductForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
                title: '',
                description: '',
                category: '',
                initialPrice: '',
                mainImage: '',
                timeLimit: '',
                detailsImages: '', 
                salesMethod: '',
                seller:props.loggedUser ? props.loggedUser._id : ''
          
       
        }
        this.productService = new ProductService()
        this.filesService = new FilesService()
    }


    componentDidUpdate(prevProps) {
        if ((!prevProps.loggedUser && this.props.loggedUser)) 
        {this.setState({seller:this.props.loggedUser._id})}        
    }


    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('mainImage', e.target.files[0])
        this.setState({ uploadingActive: true })
        this.filesService
            .uploadImage(uploadData)
            .then(response => {this.setState({product: { ...this.state, mainImage: response.data.secure_url }})
            })
            .catch(err => console.log('ERRORRR!', err))
    }
      
   

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.productService
            .saveProduct(this.state.product)
            .then(res => {this.props.history.push('/mis-productos')})
            .catch(err => console.log(err))
    }


    render() {
   
        return (
            <>
               
                <Container>
                <Row>
                 <Col md={{ span: 6, offset: 3 }}>
                 <h1 className='pF-h1'>Vender mi producto</h1>
   
                 <div className='pForm'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label><p>Nombre</p></Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label><p>Descripción</p></Form.Label>
                        <Form.Control as="textarea" rows={3} type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="category">
                        <Form.Label><p>Categoría</p></Form.Label>
                        <Form.Control name="category" as="select" value={this.state.category} onChange={this.handleInputChange}>
                        <option></option>
                        <option>Otros</option>
                        <option>Joyas</option>
                        <option>Arte</option>
                        <option>Relojes</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="salesMethod">
                        <Form.Label><p>Método de venta</p></Form.Label>
                        <Form.Control name="salesMethod" as="select" value={this.state.salesMethod} onChange={this.handleInputChange}>
                        <option></option>
                        <option>Venta directa</option>
                        <option>Subasta</option>
                     
                        </Form.Control>
                    </Form.Group>
                    {this.state.salesMethod==='Subasta' ?
                    <>
                    <Form.Group controlId="timeLimit">
                        <Form.Label><p>Fecha límite de puja</p></Form.Label>
                        <Form.Control type="datetime-local" name="timeLimit" value={this.state.timeLimit} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="initialPrice">
                        <Form.Label><p>Precio de salida</p></Form.Label>
                        <Form.Control type="number" name="initialPrice" value={this.state.initialPrice} onChange={this.handleInputChange} />
                    </Form.Group>
                    </>
                    :
                    <Form.Group controlId="initialPrice">
                        <Form.Label><p>Precio</p></Form.Label>
                        <Form.Control type="number" name="initialPrice" value={this.state.initialPrice} onChange={this.handleInputChange} />
                    </Form.Group>
                    }
                    <Form.Group>
                        <Form.Label><p>Imagen (file)</p></Form.Label>
                        <Form.Control type="file" onChange={this.handleImageUpload} />
                    </Form.Group>
                    {/* <Form.Group controlId="detailsImages">
                        <Form.Label>Imágenes extras</Form.Label>
                        <Form.Control type="text" name="detailsImages" value={this.state.detailsImages} onChange={this.handleInputChange} />
                    </Form.Group> */}
                    <Button variant="dark" type="submit" to='/inicio' >Crear producto</Button>
                    </Form>
                    </div>
                    </Col>             
                    </Row>
                </Container>
            </>
        )
    }
}

export default ProductForm