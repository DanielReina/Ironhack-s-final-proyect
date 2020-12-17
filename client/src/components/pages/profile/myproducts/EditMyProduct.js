import React, { Component } from 'react'
import ProductService from '../../../../service/products.service'
import { Form, Button, Row, Col, Container  } from 'react-bootstrap'
import './EditMyProduct.css'

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

   

    render() {
     

        return (
            <>
             <Container>
                <Row>
                 <Col md={{ span: 6, offset: 3 }}>
                <h1 className='eMP-h1'>Edita el producto</h1>
              
                <div className='eMProduct'>
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
                        <option>Otros</option>
                        <option>Joyas</option>
                        <option>Arte</option>
                        <option>Relojes</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="salesMethod">
                        <Form.Label><p>Método de venta</p></Form.Label>
                        <Form.Control name="salesMethod" as="select" value={this.state.salesMethod} onChange={this.handleInputChange}>
                        <option>Venta directa</option>
                        <option>Subasta</option>Crear producto
                     
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="timeLimit">
                        <Form.Label><p>Fecha límite de puja</p> </Form.Label>
                        <Form.Control type="datetime-local" name="timeLimit" value={this.state.timeLimit} onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="initialPrice">
                        <Form.Label><p>Precio inicial</p></Form.Label>
                        <Form.Control type="number" name="initialPrice" value={this.state.initialPrice} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="mainImage">
                        <Form.Label><p>Imagen principal</p></Form.Label>
                        <Form.Control type="text" name="mainImage" value={this.state.mainImage} onChange={this.handleInputChange} />
                    </Form.Group>
                    {/* <Form.Group controlId="detailsImages">
                        <Form.Label>Imágenes extras</Form.Label>
                        <Form.Control type="text" name="detailsImages" value={this.state.detailsImages} onChange={this.handleInputChange} />
                    </Form.Group> */}
                    <Button variant="dark" type="submit"  >Guardar edición </Button>
     
                </Form>
                </div>
                    </Col>             
                    </Row>
                </Container>
            </>
        )
    }
}

export default EditMyProduct