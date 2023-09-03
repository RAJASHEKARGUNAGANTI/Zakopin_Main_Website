import React from "react";
import './headder.css'
import headderImg from '../../images/headder.jpg';
import { VscVmConnect } from 'react-icons/vsc'
import { FcTabletAndroid } from 'react-icons/fc'
import { ImStatsBars } from 'react-icons/im'
import { useEffect } from 'react';
// import cellGif from '../../images/smartphone.gif'
import Aos from "aos"; //source https://github.com/michalsnik/aos
import "aos/dist/aos.css"
// import ParticlesBG from '../Particles/ParticlesBG';




function Headder() {
    useEffect(() => {
        Aos.init({duration:2000});
    },[]);
    return (
        <div className="Headding" >
            {/* <ParticlesBG/> */}
            <div className="headInfo">
            <div className="InfoImg" data-aos="fade-right">
                    <img src={headderImg} alt="headder Img" className="InfoImginner" />
                </div>
                <div className="Information" data-aos="fade-left">
                    <h1>We Serve your tech needs... </h1>
                    <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels,
                        Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels </p>
                </div>
                
            </div>
            <div className="services_content" data-aos="fade-up">
                <div className="webdev services_card">
                    <VscVmConnect className='contact__option-icon' />
                    <h4>Web Develpment</h4>
                    <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels</p>
                </div>
                <div className="Digital services_card">
                    <ImStatsBars className='contact__option-icon' />
                    {/* <img src={gifIcon} alt="GIF Icon" /> */}
                    <h4>Digital Marketing</h4>
                    <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels</p>
                </div>
                <div className="Android services_card">
                    <FcTabletAndroid className='contact__option-icon' />
                    <h4>Android Develpment</h4>
                    <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels</p>
                </div>
            </div>
        </div>
    )
}
export default Headder;