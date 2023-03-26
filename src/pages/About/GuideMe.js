import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import imgBg from '../../assets/images/fantastic-technological-background-with-blue-wavy-lines.avif';
import imgGirl from '../../assets/images/girl-on-beach.jpg';
import './Me.css';

const GuideMe = () => {
    const navigate = useNavigate();

    return (
        <Container fluid className='my-5 pt-5'>
            <Row className='mt-5 mb-5'>
                <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-end align-items-center align-items-lg-end'>
                    <img src={imgBg} alt="" className='position-ab shadow-grey' />
                    <img src={imgGirl} alt="" className='img-height shadow-lg mb-3 mb-md-0' />
                </Col>
                <Col xs={12} md={6} className='text-md-start fs-4 px-5'>
                    <h2 className='font-size-60 fw-normal'>Hellooooo!!!</h2>
                    <h2 className='font-size-60 fw-normal'>This is <span className='fw-semibold text-blue'>Lamisa Ferdous Ritu.</span></h2>
                    <h3 className='fs-1 mb-4'>Welcome to my website.</h3>

                    <p className='text-grey'>I am a traveler and a blogger. I love to explore different places, become familiar with new culture and food, meet new people and mainly I love anything adventurous. If you want to know anything about traveling, please go and check out my <Link to='/blogs' className='text-decoration-none text-dark-orange'>blogs</Link>. If your are planning your trip and need a friend for some suggestions or a guide, please check out the places I mostly travel or feel free to <Link to='mail:lamisaferdous19@gmail.com' className='text-decoration-none text-dark-orange'>contact</Link> me. </p>

                    <Button onClick={() => navigate('/about')} size="lg" type="submit" style={{ background: "#365653" }}>To know more...</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default GuideMe;