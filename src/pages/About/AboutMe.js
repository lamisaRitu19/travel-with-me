import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBg from '../../assets/images/fantastic-technological-background-with-blue-wavy-lines.avif';
import imgMe from '../../assets/images/Lamisa.jpg';
import './Me.css';

const AboutMe = () => {
    return (
        <Container className='my-5 pt-5'>
            <Row className='mt-5 mb-5'>
                <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-end align-items-center align-items-lg-end'>
                    <img src={imgBg} alt="" className='position-about shadow-blue' />
                    <img src={imgMe} alt="" className='img-height-about shadow-orange-lg mb-3 mb-md-0' />
                </Col>
                <Col xs={12} md={6} className='text-md-start fs-5 px-5'>
                    <h2 className='font-size-50 text-blue'>About Me</h2>
                    <p className='text-grey'>Hello! Interestingly, I got introduced to <span className='text-blue-light fw-semibold'>programming</span> in my freshman year and since then I have been eager to explore and learn about the different fields in the world of <span className='text-blue-light fw-semibold'>computer science</span>.</p>
                    <p className='text-grey'>Currently, I am learning <span className='text-blue-light fw-semibold'>Web Development</span> doing different projects to make myself stronger and establish myself as a <span className='text-blue-light fw-semibold'>Full Stack Developer</span>.</p>
                    <p className='text-grey'>I love to accept <span className='text-blue-light fw-semibold'>challenges</span> that will enhance my <span className='text-blue-light fw-semibold'>skills</span> and facilitate me, to recognize and improve myself to grow.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe;