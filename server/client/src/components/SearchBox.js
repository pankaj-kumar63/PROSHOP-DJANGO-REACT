import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

const SearchBox = () => {

    const [keyword, setKeyword] = useState('')


    const navigate = useNavigate()
    const location = useLocation()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword){
            navigate(`/?keyword=${keyword}&page=1`)
        }else{
            navigate(location.pathname)
        }
    }

    return (
        <Form onSubmit={submitHandler} className='d-flex'>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-3 ml-sm-5'
            >
            </Form.Control>

            <Button type = 'submit'>Search</Button>

        </Form>
    )
}

export default SearchBox