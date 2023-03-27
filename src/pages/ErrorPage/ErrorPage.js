import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imageError from '../../assets/images/sadness.jpg';

const ErrorPage = () => {
    return (
        <Container>
            <Row className='mt-5 pt-5 mb-5 align-items-center'>
                <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-end align-items-center'>
                    <img src={imageError} alt="" className='mb-3 mb-md-0' />
                </Col>
                <Col xs={12} md={6} className='text-md-start text-grey fs-5 px-5'>
                    <h2 className=''>Aww...Don't be sad.</h2>
                    <h3>It's just 404 error!</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorPage;