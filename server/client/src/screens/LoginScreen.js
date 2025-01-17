import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate(); // For programmatic navigation
    const location = useLocation(); // To access query parameters

    // Extract redirect query parameter
    const redirect = new URLSearchParams(location.search).get('redirect') || '/';
    // console.log(location)
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    // Redirect if already logged in
    useEffect(() => {
        if (userInfo) {
            navigate(redirect.startsWith('/') ? redirect : `/${redirect}`);
        }
    }, [navigate, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary" className="mt-3">
                    Login
                </Button>
            </Form>
            <Row className="py-3">
                <Col>
                    New Customer?{' '}
                    <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}
                    >
                        Register
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default LoginScreen;
