import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUser } from '../actions/userActions';
import { USER_UPDATE_RESET } from '../constants/userConstants';

const EditUserScreen = () => {
    const params = useParams()
    const userId = params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userDetails = useSelector(state => state.userDetails);
    const { error, loading, user } = userDetails;

    const userUpdate = useSelector(state => state.userUpdate);
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            navigate('/admin/userlist')
        } else {
            if (!user || user._id !== Number(userId)) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }


    }, [user, userId, successUpdate, navigate])
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({_id:user._id, name, email, isAdmin}))

    };
    return (
        <div>
            <Link to='/admin/userlist'>
                Go Back
            </Link>
            <FormContainer>
                <h1>Edit User</h1>
                {loadingUpdate && <Loader/>}
                {errorUpdate && <Message variant='danger'>{error}</Message>}
                {loading ? (<Loader />) : error ? (<Message variant='danger'>{error}</Message>) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Check
                                type='checkbox'
                                label='Is Admin'
                                checked={isAdmin}
                                onChange={(e) => setIsAdmin(e.target.checked)}
                            >

                            </Form.Check>
                        </Form.Group>

                        <Button type="submit" variant="primary" className="mt-3">
                            Update
                        </Button>

                    </Form>
                )}
            </FormContainer>
        </div>
    )
}

export default EditUserScreen