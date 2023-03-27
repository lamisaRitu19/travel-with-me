import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { id, place, image } = props.service;
    const navigate = useNavigate();

    const handleServiceDetails = () => {
        navigate(`/services/${id}`);
    }

    return (
        <Col xs={12} md={6} lg={4} className='mb-4'>
            <Card className='h-100 shadow'>
                <Card.Img variant="top" src={image} className='h-75' />
                <Card.Body>
                    <Card.Title className='fs-4'>{place}</Card.Title>
                    <Button onClick={handleServiceDetails} variant="primary" className='px-5 fw-semibold' style={{ background: "#004a43", border: "0" }}>Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;