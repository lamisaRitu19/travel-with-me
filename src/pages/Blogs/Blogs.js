import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container py-5 my-5'>
            <h3 className='fs-1 fw-bold pt-5 mb-4 text-blue'>My Blogs</h3>
            <Accordion className='mx-auto pb-5 rounded blog-width'>
                <Accordion.Item eventKey="0" className='border border-3'>
                    <Accordion.Header>What is the difference between authorization and authentication?</Accordion.Header>
                    <Accordion.Body>
                        Authentication determines whether he is the person he is claiming to be. On the other hand, authorization determines whether a person can access a certain thing or data. Both authentication and authorization play parts in securing a system. When a user tries to enter a system, he is first authenticated which means he is tested if he is a valid user with valid password or OTP or any physical features. If he is proved to be valid, then he gets the authorization to access data according to his status in the organization.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='border border-top-0 border-3'>
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase is a software development platform that helps in building web and mobile applications. It is a free platform to start with reliable database, end-to-end development and high scalability. The main feature to use firebase is that it is backed up by Google.
                        The platforms which implement authentication other than firebase are AuthO, STYTCH, Authsignal, Ory, Supabase etc.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='border border-top-0 border-3'>
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        Cloud firestore, realtime database, remote config, cloud functions, cloud messaging etc.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;