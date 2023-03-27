import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import ServiceBooking from './ServiceBooking';

const ServiceDetails = () => {
    const { place, image, country, description } = useLoaderData();
    return (
        <Container className='my-5 pt-5'>
            <Row className='mt-5 mb-5'>
                <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-end align-items-center'>
                    <img src={image} alt="" className='img-height-about shadow-lg mb-3 mb-md-0' />
                </Col>
                <Col xs={12} md={6} className='text-md-start fs-5 px-5'>
                    <h2 className='font-size-50 text-blue'>{place}</h2>
                    <p className='text-blue-light fw-semibold'>{country}</p>
                    <p className='text-grey'>{description}</p>
                </Col>
            </Row>
            <div>
                <h3 className='fs-1 text-blue'>Want to visit there?</h3>
                <h4 className='fs-2 text-blue'>Want me to be your guide?</h4>
                <p className='fs-5 text-grey'>Then, please fill up the form.</p>
                <ServiceBooking></ServiceBooking>
            </div>
        </Container>
    );
};

export default ServiceDetails;