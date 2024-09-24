import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { FaDribbble } from "react-icons/fa6"

const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com" target='_blank'><BsGithub /></a>
        <a href="https://dribble.com" target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default Headersocials