import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { LuFolderOpenDot } from "react-icons/lu"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="About Image" />
            </div>
        </div>

        <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
              <FaAward className='about_icon'/>

                <h5>Experience</h5>
                <small>3+ Years Experience</small>
              </article>

              <article className="about_card">
              <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className="about_card">
              <LuFolderOpenDot className='about_icon'/>
                <h5>Projects</h5>
                <small>80+  Completed</small>
              </article>
            </div>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, deserunt voluptatibus veritatis commodi architecto unde magnam nesciunt eius eos, numquam maxime obcaecati dignissimos, quam molestiae iure dicta. Deleniti, voluptatum numquam!</p>

            <a href="#contact" className='btn btn-primary'>let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About