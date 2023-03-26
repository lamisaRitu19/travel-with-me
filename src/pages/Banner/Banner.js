import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaLuggageCart, FaMapSigns } from "react-icons/fa";
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
                    <Carousel.Item key={photo.id} className='shadow-lg'>
                        <img
                            className="d-block w-100 shadow-lg bg-carousel"
                            src={photo.urls.full}
                            alt="First slide"
                        />
                        <Carousel.Caption className=''>
                            <p className='fs-3 mb-2 fw-semibold'>Welcome to</p>
                            <h1 className='font-size-60 fw-light'>
                                <FaLuggageCart className='d-none d-md-inline me-4'></FaLuggageCart>
                                Travel With Me
                                <FaMapSigns className='d-none d-md-inline ms-4'></FaMapSigns>
                            </h1>
                            <p className='fs-4'>Let's explore!</p>
                        </Carousel.Caption>
                    </Carousel.Item>)
            }

        </Carousel>
    );
};

export default Banner;