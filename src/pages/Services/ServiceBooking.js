import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';

const ServiceBooking = () => {
    const handleSubmit = event => {
        event.preventDefault();
        toast.success('Thank you for the booking.');
        event.target.reset();
    }

    return (
        <Form onSubmit={handleSubmit} className='mx-auto mb-3 px-5 pt-5 pb-4 text-start border border-3 rounded form-width'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" name='name' placeholder="Name" className='border-0 border-bottom rounded-0' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" name='email' placeholder="Email" className='border-0 border-bottom rounded-0' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Control type="text" name='address' placeholder="Address" className='border-0 border-bottom rounded-0' required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Control type="text" name='phone' placeholder="Phone number" className='border-0 border-bottom rounded-0' required />
            </Form.Group>

            <Button variant="primary" type="submit" className='w-100 mt-4 mb-3'>
                Submit
            </Button>
        </Form>
    );
};

export default ServiceBooking;