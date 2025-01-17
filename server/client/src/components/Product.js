import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
function Product({product}) {
  return (
    <div>
        <Card className='my-3 p-3 rounded'>
            <Link to={`product/${product._id}`}>
                <Card.Img src={product.image} alt='Image'/>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <div className='my-3'>
                        <Rating value = {product.rating}/>
                    </div>
                </Card.Text>
                <Card.Text as = 'div'>
                    {product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Product