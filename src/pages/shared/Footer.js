import React from 'react';
import { Container } from 'react-bootstrap';
import { FaRegEnvelope, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <Container fluid className='bg-blue text-white py-5'>
            <div className='px-5 text-start d-flex justify-content-evenly'>
                <div className=''>
                    <h4>Contacts</h4>
                    <div className='ms-2'>
                        <p className='mb-0'>- Dhaka, Bangladesh</p>
                        <p className='mb-0'>- 01234567890</p>
                        <p className='mb-0'>- lamisaferdous19@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h4>Socials</h4>
                    <div>
                        <a href='https://www.facebook.com/lamisa.ritu19/' className='text-white'><FaFacebook className='ms-2 fs-4 footer-link-orange'></FaFacebook></a>
                        <a href='https://www.instagram.com/lamisa_ritu/?next=%2F' className='text-white'><FaInstagram className='ms-3 fs-4 footer-link-orange'></FaInstagram></a>
                        <a href='https://github.com/lamisaRitu19' className='text-white'><FaGithub className='ms-3 fs-4  footer-link-orange'></FaGithub></a>
                    </div>
                </div>
            </div>
            <a className='mt-3 d-flex justify-content-center align-items-center text-white text-decoration-none' href='mailto:lamisaferdous19'>
                <FaRegEnvelope className='me-2 fs-4 footer-link-orange'></FaRegEnvelope>
                <p className='mb-0 fs-4 footer-link-orange'>Contact Me</p>
            </a>
        </Container >
    );
};

export default Footer;