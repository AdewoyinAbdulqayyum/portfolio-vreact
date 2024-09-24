import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocial from './Headersocials'

const Header = () => {
  return (
   <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Abdulqayyyum .M</h1>
        <h5 className="text-light">Frontend developer</h5>
        <CTA/>
        <Headersocial/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
   </header>
  )
}

export default Header