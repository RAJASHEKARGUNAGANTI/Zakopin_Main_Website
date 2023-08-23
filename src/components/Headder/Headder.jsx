import React from "react";
import './headder.css'
import headderImg from '../../images/headder.jpg';
import { VscVmConnect } from 'react-icons/vsc'
import { FcTabletAndroid } from 'react-icons/fc'
import { ImStatsBars } from 'react-icons/im'

function Headder() {
    return (
        <div className="Headding">
            <div className="headInfo">
            <div className="InfoImg">
                    <img src={headderImg} alt="headder Img" className="InfoImginner" />
                </div>
                <div className="Information">
                    <h1>We Serve your tech needs... </h1>
                    <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels,
                        Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels,
                        sstreamlining business operations and convenience for clients. We specialize in software web solutions, empowering businesses with innovative and efficient digital tools to thrive in the online world.</p>
                </div>
                
            </div>
            <div className="services_content">
                <div className="webdev services_card">
                    <VscVmConnect className='contact__option-icon' />
                    <h4>Web Develpment</h4>
                    <p>Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels</p>
                </div>
                <div className="Digital services_card">
                    <ImStatsBars className='contact__option-icon' />
                    <h4>Degital Marketing</h4>
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