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
                <Col xs={12} md={6}>
                    <img src={image} alt="" className='w-75' />
                </Col>
                <Col xs={12} md={6}>
                    <h3>{place}</h3>
                    <p>{country}</p>
                    <p>{description}</p>
                </Col>
            </Row>
            <div>
                <h3>Want to visit there?</h3>
                <h4>May I be your guide there?</h4>
                <p>Then, please fill up the form.</p>
                <ServiceBooking></ServiceBooking>
            </div>
        </Container>
    );
};

export default ServiceDetails;