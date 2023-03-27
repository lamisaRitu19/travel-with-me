import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { toast } from 'react-hot-toast';
import { FaLuggageCart, FaMapSigns, FaRegUser } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const handleLogOut = () => {
        logOutUser()
            .then(() => toast.success('Successfully logged out!'))
            .catch(error => console.error('Logged out error', error))
    }

    return (
        <div>
            <Navbar fixed="top" variant="dark" expand="lg" className={navbar ? 'bg-blue' : 'bg-blue-transparent'}>
                <Container>
                    <Navbar.Brand as={Link} to='/' className='d-flex align-items-center'>
                        <FaLuggageCart className='fs-3 me-2 text-orange'></FaLuggageCart>Travel With Me<FaMapSigns className='ms-2 text-orange'></FaMapSigns>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto py-2 align-items-center fw-semibold">
                            <NavLink to='/' className='px-3 py-2 mx-2 rounded navlink'>Home</NavLink>
                            <NavLink to='/about' className='px-3 py-2 mx-2 rounded navlink'>About</NavLink>
                            <HashLink smooth to='/home/#services' className='px-3 py-2 mx-2 rounded navlink'>Services</HashLink>
                            <NavLink to='/blogs' className='px-3 py-2 mx-2 rounded navlink'>Blogs</NavLink>
                        </Nav>
                        {
                            user?.displayName && <Nav className=' d-flex align-items-center'>
                                <img src={user.photoURL} alt="" className='rounded-circle' style={{ width: '30px' }} />
                                <p className='text-orange fs-5 fw-semibold ms-2 me-4 mb-3 mb-md-0 text-pink'>{user.displayName}</p>
                                <Button onClick={handleLogOut} variant="outline-light" className='d-flex align-items-center justify-content-center'><FaRegUser className='fs-5 me-2'></FaRegUser>Sign Out</Button>
                            </Nav>
                        }
                        {
                            user?.displayName === null && <Nav className='d-flex align-items-center'>
                                <p className='text-orange fs-5 fw-semibold me-4 mb-3 mb-md-0 text-pink'>{user.email}</p>
                                <Button onClick={handleLogOut} variant="outline-light" className='d-flex align-items-center justify-content-center'><FaRegUser className='fs-5 me-2'></FaRegUser>Sign Out</Button>
                            </Nav>
                        }
                        {
                            user === null && <Button as={Link} to='/login' variant="outline-light" className='d-flex align-items-center justify-content-center'><FaRegUser className='fs-5 me-2'></FaRegUser> Sign In</Button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;