import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services);

    return (
        <div className='container my-5 pt-3' id='services'>
            <h3 className='pt-5 mb-4'>The places I visit with my clients</h3>
            <Container>
                <Row>
                    {
                        services?.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;