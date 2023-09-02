import React from "react";
import './footer.css'

import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
// import {SiHashnode} from 'react-icons/si'
// import ParticlesBG from "../Particles/ParticlesBG";

function Footer(){
    return(
        <footer>
          {/* <ParticlesBG/> */}
      <a href="#" className='footer__logo'>Zakopin</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com"><AiFillGithub /></a>
        <a href="https://twitter.com"><AiOutlineTwitter /></a>
        <a href="https://www.linkedin.com"><AiFillLinkedin /></a>
        <a href="https://mail.google.com"><AiOutlineMail /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy;Zakopin Innovations. All rights reserved.</small>
      </div>
    </footer>
    )
}
export default Footer;