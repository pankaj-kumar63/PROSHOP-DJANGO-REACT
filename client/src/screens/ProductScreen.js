import React from 'react';
import products from '../product';
import { Link, useParams } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating';

const ProductScreen = () => {
    // Get the id from the URL using useParams
    const { id } = useParams();
    console.log(id)
    // Find the product using the id from the URL
    const product = products.find((p) => p._id === id);

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md = {6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md = {3}>
                <ListGroup>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value = {product.rating}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: ${product.description}
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col md = {3}>
                    <Card>
                        <ListGroup>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                    <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock':'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' disabled = {product.countInStock ==0} type='button'>Add to Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ProductScreen;
