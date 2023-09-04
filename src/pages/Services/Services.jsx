import React from "react";
import './services.css'
import ParticlesBG from "../../components/Particles/ParticlesBG";
import Navbar from "../../components/Navbar/Navbar";
import webdev from "../../images/webdev.jpg";
import appdev from "../../images/app.jpg";
import digital from "../../images/data.webp";
import commingsoon from "../../images/coming-soon.jpg";
import Footer from "../../components/Footer/Footer";
// import ourServices from "../../images/ourServices.jpg"
import { useEffect } from 'react';
import Aos from "aos"; //source https://github.com/michalsnik/aos
import "aos/dist/aos.css"
import SmallNav from "../../components/SmallNav/SmallNav"

function Services() {
  useEffect(() => {
    Aos.init({duration:2000});
},[]);
    return (
        <div>
          
          <Navbar/>
          <div className="ourServices">
            <h1 data-aos="fade-right">Our Services</h1>
            </div>           
          <div className="service-container">
            <div className="service-contents">
              <div >
                <img src={webdev} alt="Web Development" srcset="" className="service-img-inner"data-aos="fade-right"/>
              </div>
              <div className="service-info"data-aos="fade-left">
                <h1>Web Development</h1>
                <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels,
                        Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels </p>
              </div>
            </div>
            <div className="service-contents">
              <div className="service-img">
                <img src={appdev} alt="Web Development" srcset="" className="service-img-inner"data-aos="fade-right"/>
              </div>
              <div className="service-info"data-aos="fade-left">
                <h1>App Development</h1>
                <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels,
                        Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels </p>
              </div>
            </div>
            <div className="service-contents">
              <div className="service-img">
                <img src={digital} alt="Web Development" srcset="" className="service-img-inner"data-aos="fade-right"/>
              </div>
              <div className="service-info"data-aos="fade-left">
                <h1>Digital Marketing</h1>
                <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels,
                        Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels </p>
              </div>
            </div>
            <div className="service-contents">
              <div className="service-img">
                <img src={commingsoon} alt="Web Development" srcset="" className="service-img-inner"data-aos="fade-right"/>
              </div>
              <div className="service-info"data-aos="fade-left">
                <h1>Comming Soon..!</h1>
                <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels,
                        Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels </p>
              </div>
            </div>
          </div>
          <SmallNav/>
          <ParticlesBG/>
          <Footer/>
        </div>
    );
}

export default Services