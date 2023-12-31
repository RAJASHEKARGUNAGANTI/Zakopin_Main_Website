import React from 'react'
import './smallNav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {FaProjectDiagram} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'
import { Link } from 'react-router-dom';


const SmallNav = () => {
  const[activeNav, setActiveNav] = useState("#")
  return (
    <nav className='SmallNav'>
      <Link to="/Zakopin_Main_Website" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt /></Link>
      <Link to="/Zakopin_Main_Website" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></Link>
      <Link to="/services" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></Link>
      <Link to="/Zakopin_Main_Website" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaProjectDiagram /></Link>
      <Link to="/Zakopin_Main_Website"onClick={()=> setActiveNav('#qualification')} className={activeNav === '#qualification' ? 'active' : ''}><FaUserGraduate /></Link>
      <Link to="/Zakopin_Main_Website"onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></Link>
    </nav>
  )
}

export default SmallNav