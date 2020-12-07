import { Col, Card, ListGroupItem, ListGroup } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const ProductCard = ({ title, description, _id, mainImage, category, initialPrice, cutOffTime }) => {
    return (
        <Col lg={4}>
            <Card className="product-card">
                <Card.Img variant="top" src={mainImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                                          
                </Card.Body>
              
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Id del producto: {_id}</ListGroupItem>
                        <ListGroupItem>Categoría de venta: {category} </ListGroupItem>
                        <ListGroupItem>Precio incial del producto: {initialPrice} </ListGroupItem>
                        <ListGroupItem>Finaliza en: {cutOffTime} </ListGroupItem>

                    </ListGroup>
                  
            </Card>
        </Col>
    )
}

export default ProductCard