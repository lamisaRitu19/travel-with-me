import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { registerUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const fname = form.fname.value;
        const lname = form.lname.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            toast.error(`Your confirmed password doesn't match with the original!`);
            return;
        }
        else if (password.length <= 6) {
            toast.error('Please provide a password more than six digits!');
            return;
        }
        else {
            registerUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log('Registered user', user);
                    toast.success('You have successfully created an account!');
                    handleUpdateUserProfile(fname, lname, photoURL);
                    form.reset();
                    setError('');
                    navigate('/');
                })
                .catch(error => {
                    console.error('Registered user error', error);
                    setError(error.message);
                })
        }
    }

    const handleUpdateUserProfile = (fname, lname, photoURL) => {
        const profile = {
            displayName: fname + " " + lname,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error('Updated user error', error);
                toast.error('There were some errors in updating your profile!')
            })
    }

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit} className='mx-auto mt-5 mb-3 px-5 pt-5 pb-4 text-start border border-3 rounded form-width'>
                <h4 className='mb-4 fw-bold'>Register</h4>
                <Form.Group className="mb-3" controlId="formBasicFName">
                    <Form.Control type="text" name='fname' placeholder="First Name" className='border-0 border-bottom rounded-0' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLName">
                    <Form.Control type="text" name='lname' placeholder="Last Name" className='border-0 border-bottom rounded-0' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                    <Form.Control type="text" name='photoURL' placeholder="Photo Link" className='border-0 border-bottom rounded-0' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Email" className='border-0 border-bottom rounded-0' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" className='border-0 border-bottom rounded-0' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Control type="password" name='confirmPassword' placeholder="Confirm Password" className='border-0 border-bottom rounded-0' required />
                </Form.Group>

                <Form.Text className='text-danger'>{error}</Form.Text>

                <Button variant="primary" type="submit" className='w-100 mt-4 mb-3'>
                    Register
                </Button>
                <p className='text-center mb-0'>Already have an account? <Link to='/login'>Login</Link></p>
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

export default Register;