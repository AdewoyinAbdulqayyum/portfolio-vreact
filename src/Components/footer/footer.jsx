import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>ETT-Learning</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/AbdulqayyumAdewoyin"><FaFacebookF /></a>
        <a href="https://instagram.com/abdulqayyumadewoyin001"><FaInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Abdulqayyum learning streaks.reserving talents</small>
      </div>
    </footer>
  )
}

export default Footer