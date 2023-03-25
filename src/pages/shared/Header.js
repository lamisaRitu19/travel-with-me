import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { toast } from 'react-hot-toast';
import { FaLuggageCart, FaMapSigns, FaRegEnvelope, FaFacebook, FaInstagram, FaGithub, FaRegUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => toast.success('Successfully logged out!'))
            .catch(error => console.error('Logged out error', error))
    }

    return (
        <div>
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Nav.Link href="#home" className='d-flex align-items-center'><FaRegEnvelope className='fs-5 me-2'></FaRegEnvelope>Contact Me</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <Nav.Link href="https://www.facebook.com/lamisa.ritu19/" className='px-2'><FaFacebook></FaFacebook></Nav.Link>
                        <Nav.Link href="https://www.instagram.com/lamisa_ritu/?next=%2F" className='px-2'><FaInstagram></FaInstagram></Nav.Link>
                        <Nav.Link href="https://github.com/lamisaRitu19" className='px-2'><FaGithub></FaGithub></Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}
            <Navbar fixed="top" variant="dark" expand="lg" className='bg-purple'>
                <Container>
                    <Navbar.Brand href="#home" className='d-flex align-items-center'>
                        <FaLuggageCart className='fs-3 me-2 text-pink'></FaLuggageCart>Travel With Me<FaMapSigns className='ms-2 text-pink'></FaMapSigns>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto py-2 align-items-center fw-semibold">
                            <NavLink as={Link} to='/' className='px-3 py-2 mx-2 rounded navlink'>Home</NavLink>
                            <NavLink as={Link} to='/about' className='px-3 py-2 mx-2 rounded navlink'>About</NavLink>
                            <NavLink as={Link} to='/services' className='px-3 py-2 mx-2 rounded navlink'>Services</NavLink>
                            <NavLink as={Link} to='/blogs' className='px-3 py-2 mx-2 rounded navlink'>Blogs</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    {
                        user?.displayName && <Nav className='ms-5 d-flex align-items-center'>
                            <img src={user.photoURL} alt="" className='rounded-circle' style={{ width: '30px' }} />
                            <p className='text-white fs-5 fw-semibold ms-2 me-4 mb-0 text-pink'>{user.displayName}</p>
                            <Button onClick={handleLogOut} variant="outline-light" className='d-flex align-items-center justify-content-center'><FaRegUser className='fs-5 me-2'></FaRegUser>Sign Out</Button>
                        </Nav>
                    }
                    {
                        user?.displayName === null && <Nav className='ms-5 d-flex align-items-center'>
                            <p className='text-white fs-5 fw-semibold me-4 mb-0 text-pink'>{user.email}</p>
                            <Button onClick={handleLogOut} variant="outline-light" className='d-flex align-items-center justify-content-center'><FaRegUser className='fs-5 me-2'></FaRegUser>Sign Out</Button>
                        </Nav>
                    }
                    {
                        user === null && <Button as={Link} to='/login' variant="outline-light" className='d-flex align-items-center justify-content-center'><FaRegUser className='fs-5 me-2'></FaRegUser> Sign In</Button>
                    }
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;