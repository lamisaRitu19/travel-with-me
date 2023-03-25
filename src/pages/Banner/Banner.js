import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';

const Banner = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('https://api.unsplash.com/search/photos?page=1&query=sunset&orientation=landscape&client_id=qMke48QXwCTyKhhETz7qSEBGCZfTrgCrg52s5BRKJF4')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPhotos(data.results);
            })
    }, [])

    return (
        <Carousel fade>
            {
                photos.map(photo =>
                    <Carousel.Item key={photo.id}>
                        <img
                            className="d-block w-100 bg-carousel"
                            src={photo.urls.full}
                            alt="First slide"
                        />
                        <Carousel.Caption className='fs-5'>
                            <p>Hello! This is</p>
                            <h3 className='fs-1'>Lamisa Ferdous</h3>
                            <p>Welcome to <span className='fs-4'>Travel With Me</span>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>)
            }

        </Carousel>
    );
};

export default Banner;