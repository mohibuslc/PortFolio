import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../Asst/slide1.webp';
import slide2 from '../Asst/slide2.webp';
import slide3 from '../Asst/slide3.webp';
import "./MyStyle.css";
import Scroll from '../Scroll/Scroll';





const MyCarasol = () => {
    return (
        <div id="home">
        <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src={slide2}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img "
            src={slide3}
            alt="Second slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={slide1}
            alt="Third slide"
          />
              
        </Carousel.Item>
      </Carousel>
      <Scroll />
        </div>
        
    );
};

export default MyCarasol;