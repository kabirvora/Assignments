import React from 'react'
import { Carousel } from 'react-bootstrap';
import one from './../assets/one.jpg';
import two from './../assets/two.jpg';
import three from './../assets/three.jpg';

function Wallpaper(){
    return(
        <>
        <Carousel id="Wallpaper">
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={one}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={two}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={three}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Wallpaper;