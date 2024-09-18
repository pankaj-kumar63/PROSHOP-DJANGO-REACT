import {React, useState, useEffect} from 'react'
// import products from '../product'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product';

const HomeScreen = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        async function fetchProducts(){
            const {data} = await axios.get('http://127.0.0.1:8000/api/products/')
            setProducts(data)
        }
        fetchProducts()
        console.log("use effect")
    }, [])
    return (
        <div>
            <h1>Latest products</h1>
            <Row>
                {
                    products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default HomeScreen