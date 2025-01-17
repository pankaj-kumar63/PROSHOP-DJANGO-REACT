import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';

const ShippingScreen = () => {

    const cart = useSelector(state=>state.cart)
    const {shippingAddress} = cart
    const [city, setCity] = useState(shippingAddress.city)
    const [postalcode, setPostalcode] = useState(shippingAddress.postalcode)
    const [address, setAddress] = useState(shippingAddress.address)
    const [country, setCountry] = useState(shippingAddress.country)


    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalcode, country}))
        navigate('/payment')

    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2/>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter address"
                        value={address ? address : ""}
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter city"
                        value={city ? city : ""}
                        onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="postalcode">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter postalcode"
                        value={postalcode ? postalcode : ""}
                        onChange={(e) => setPostalcode(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter country"
                        value={country ? country : ""}
                        onChange={(e) => setCountry(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen