import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import './Login.css';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { logInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('Logged in user', user);
                form.reset()
                toast.success('Successfully logged in!');
                navigate('/');
            })
            .catch(error => console.error('Logged in error', error))
    }

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit} className='mx-auto mt-5 mb-3 px-5 pt-5 pb-4 text-start border border-3 rounded form-width'>
                <h4 className='mb-4 fw-bold'>Login</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Email" className='border-0 border-bottom rounded-0' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" className='border-0 border-bottom rounded-0' />
                </Form.Group>

                <Button variant="link">Forgot password?</Button>

                <Button variant="primary" type="submit" className='w-100 mt-4 mb-3'>
                    Log In
                </Button>
                <p className='text-center mb-0'>Don't have an account? <Link to='/register'>Create an account</Link></p>
            </Form>
            <div className='d-flex justify-content-center align-items-center'>
                <span className='me-2' style={{ width: '200px' }}><hr /></span>
                <p className='m-0'>Or</p>
                <span className='ms-2' style={{ width: '200px' }}><hr /></span>
            </div>
            <Button variant="outline-secondary" className='mx-auto mt-3 mb-5 d-flex align-items-center'><FaGoogle className='fs-4 me-2'></FaGoogle> Continue with Google</Button>
        </div>
    );
};

export default Login;