import React, { useState } from 'react';
import Container  from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validateEmail } from '../utils/helpers';

function Contact() {

    const [email, setEmail] = useState('')
    const [fullName, setFullName] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e) => {
        
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        }
        if (inputType === 'fullName') {
            setFullName(inputValue);
        }
        if (inputType === 'message') {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid')
            return;
        }
        if (fullName === '') {
            setErrorMessage('Name field required')
            return;
        }
        if (message === '') {
            setErrorMessage('Message field required')
            return;
        }
        setEmail('');
        setFullName('');
        setMessage('');
    }


    return (
        <Container style={{ height: '75vh' }}>
            <br></br>
            <h2>Contact Form</h2>
            {errorMessage && (
                <div>
                    <h3 className='error-text' style={{color: 'orangered', fontStyle: 'italic'}}>{errorMessage}</h3>
                </div>
            )}
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='fullName' value={fullName} onChange={handleInputChange} type="text" placeholder="John Doe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' value={email} onChange={handleInputChange} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control value={message} onChange={handleInputChange} as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleFormSubmit}>
                    Submit
                </Button>
            </Form>
            
            

        </Container>
    );
}

export default Contact;