import React from "react";
import './story.css'
// import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

function Story(){
  useEffect(() => {
    Aos.init({duration:2000 , offset: 200});
},[]);
    return(
        <div className="total_services">
          <div className="services_img_info" data-aos= "fade-in">
      <div className="services_img" >
        <img src="https://imgs.search.brave.com/jG_Dan3YzrAnCWY8saKkEizedBr13TGEOEriDQkbaTM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIy/NjQ5MDgyL3Bob3Rv/L3Jlc3BvbnNpdmUt/d2ViLWRlc2lnbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UFJHSjAtSlcyUXVn/MnQzOXZQRmtFSG5P/QWNlQ2Z2Sk9aVkZp/YjEzQ1R2dz0" alt="Image" />
      </div>
      <div className="services_info">
        {/* Scrolling content */}
        <p>Lorem ipsum dolor sit amet... Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels, streamlining business operations and convenience for clients. We specialize in software web solutions, empowering businesses with innovative and efficient digital tools to thrive in the online world.</p>
      </div>
    </div>
    <div className="services_img_info" >
      <div className="services_img" >
        <img src="https://imgs.search.brave.com/jG_Dan3YzrAnCWY8saKkEizedBr13TGEOEriDQkbaTM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIy/NjQ5MDgyL3Bob3Rv/L3Jlc3BvbnNpdmUt/d2ViLWRlc2lnbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UFJHSjAtSlcyUXVn/MnQzOXZQRmtFSG5P/QWNlQ2Z2Sk9aVkZp/YjEzQ1R2dz0" alt="Image" />
      </div>
      <div className="services_info">
        {/* Scrolling content */}
        <p>Lorem ipsum dolor sit amet... Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels, streamlining business operations and convenience for clients. We specialize in software web solutions, empowering businesses with innovative and efficient digital tools to thrive in the online world.</p>
        </div>
    </div>
    <div className="services_img_info">
      <div className="services_img" >
        <img src="https://imgs.search.brave.com/jG_Dan3YzrAnCWY8saKkEizedBr13TGEOEriDQkbaTM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTIy/NjQ5MDgyL3Bob3Rv/L3Jlc3BvbnNpdmUt/d2ViLWRlc2lnbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/UFJHSjAtSlcyUXVn/MnQzOXZQRmtFSG5P/QWNlQ2Z2Sk9aVkZp/YjEzQ1R2dz0" alt="Image" />
      </div>
      <div className="services_info">
        {/* Scrolling content */}
        <p>Lorem ipsum dolor sit amet... Zakopin Innovations Private Limited providing dynamic platforms with website builders as well as user-friendly admin panels, streamlining business operations and convenience for clients. We specialize in software web solutions, empowering businesses with innovative and efficient digital tools to thrive in the online world.</p>
        </div>
    </div>
        </div>
  );
    
}

export default Story;