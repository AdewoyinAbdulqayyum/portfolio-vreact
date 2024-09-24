import React from 'react'
import './Nav.css'
import { CiHome } from "react-icons/ci"
import { CiUser } from "react-icons/ci"
import { FaBook } from "react-icons/fa6"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageDetail } from "react-icons/bi"
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><CiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#about')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#about')} className={activeNav === '#contact' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#sevices" onClick={() => setActiveNav('#services')} className={activeNav === '#about' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav