import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../img/ceo.jpg';
import img2 from '../img/cmo.jpg';
import img3 from '../img/coo.jpg';

const IntroSlider = () => {
  return (
      <div className='my-5 py-3'>
        <Carousel style={{height: '630px'}}  variant="dark">
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100 px-5"
                src={img1}
                alt="First slide"
                style={{height: '630px'}}
                />
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100 px-5"
                src={img2}
                alt="Second slide"
                style={{height: '630px'}}
                />
                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 px-5"
                src={img3}
                alt="Third slide"
                style={{height: '630px'}}
                />
                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
      </div>
  )
}

export default IntroSlider