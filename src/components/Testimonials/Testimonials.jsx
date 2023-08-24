import React from "react";
import './Testimonials.css';
import member1 from '../../images/member2.jpg';
import member2 from '../../images/member3.jpg';
import member3 from '../../images/member4.jpg';

import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

function Testimonials() {
  useEffect(() => {
    Aos.init({duration:2000});
},[]);
  return (
    <Carousel data-bs-theme="dark" className="Testimo" id="Testimo">
        {/* <h5>Our Clients</h5>
      <h2>Testimonials</h2> */}
      <Carousel.Item >
        <div className="carousel_item">
        <div className="testimo-image" data-aos="fade-right">
            <img src={member1} alt="member1" className="image"/>
        </div>
        <div className="info" data-aos="fade-left">
            <h2>Jukar</h2>
            <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels, 
                streamlining business operations and convenience for clients. We specialize in software web solutions, empowering businesses with innovative and efficient digital tools to thrive in the online world.</p>
                <button className='butn butn-testimo'>Know more</button>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item > 
      <div className="carousel_item">
      <div className="testimo-image"data-aos="fade-right">
            <img src={member2} alt="member1" className="image"/>
        </div>
        <div className="info"data-aos="fade-left">
            <h2>Jukar</h2>
            <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels, 
                streamlining business operations and convenience for clients. We specialize in software web solutions, empowering businesses with innovative and efficient digital tools to thrive in the online world.</p>
                <button className='butn butn-testimo'>Know more</button>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item className="carousel_item">
      <div className="carousel_item">
      <div className="testimo-image"data-aos="fade-right">
            <img src={member3} alt="member1" className="image"/>
        </div>
        <div className="info"data-aos="fade-left">
            <h2>Jukar</h2>
            <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels, 
                streamlining business operations and convenience for clients. We specialize in software web solutions, empowering businesses with innovative and efficient digital tools to thrive in the online world.</p>
                <button className='butn butn-testimo'>Know more</button>
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Testimonials;