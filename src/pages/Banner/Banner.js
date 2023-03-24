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
        <Carousel>
            {
                photos.map(photo =>
                    <Carousel.Item key={photo.id}>
                        <img
                            className="d-block w-100"
                            style={{ height: '100vh' }}
                            src={photo.urls.full}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>)
            }

        </Carousel>
    );
};

export default Banner;