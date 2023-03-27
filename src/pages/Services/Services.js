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
        <div className='mt-5 pb-5 bg-light-orange shadow-orange' id='services'>
            <h3 className='fs-1 fw-semibold pt-5 mb-4'>The places I explore...</h3>
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