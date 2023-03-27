import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import './Login.css';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {
        setLoading,
        logInUser,
        passwordReset,
        googleSignIn
    } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('Logged in user', user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('Successfully logged in!');
                }
                else {
                    toast.error('Please verify your email address!');
                }
            })
            .catch(error => {
                console.error('Logged in error', error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
    }

    const handleForgetPassword = () => {
        passwordReset(userEmail)
            .then(() => {
                console.log('Password reset email sent');
                toast.success('Password reset has been sent.')
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log('Google logged in user', user);
                setError('');
                toast.success('Successfully logged in with google!');
                navigate('/');
            })
            .catch(error => {
                console.error('Google logged in error', error);
                setError(error.message);
            })
    }

    return (
        <div className='container py-5 my-5'>
            <Form onSubmit={handleSubmit} className='mx-auto mt-5 mb-3 px-5 pt-5 pb-4 text-start border border-3 rounded form-width'>
                <h2 className='mb-4 fw-bold text-green'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Email" className='border-0 border-bottom rounded-0' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" className='border-0 border-bottom rounded-0' required />
                </Form.Group>

                <Button onClick={handleForgetPassword} variant="link" className=' text-decoration-none' style={{ color: "#06193e" }}>Forgot password?</Button>

                <Form.Text className='text-danger'>{error}</Form.Text>

                <Button variant="primary" type="submit" className='w-100 mt-4 mb-3 login-button' style={{ background: "#f29e18", border: "0" }}>
                    Log In
                </Button>
                <p className='text-center text-grey mb-0'>Don't have an account? <Link to='/register' className='text-blue text-decoration-none'>Create an account</Link></p>
            </Form>
            <div className='d-flex justify-content-center align-items-center'>
                <span className='me-2' style={{ width: '200px' }}><hr /></span>
                <p className='m-0'>Or</p>
                <span className='ms-2' style={{ width: '200px' }}><hr /></span>
            </div>
            <Button onClick={handleGoogleSignIn} variant="outline-success" className='mx-auto mt-3 mb-5 d-flex align-items-center'><FaGoogle className='fs-4 me-2'></FaGoogle> Continue with Google</Button>
        </div>
    );
};

export default Login;