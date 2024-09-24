import React from 'react'
import Header from './Components/header/header'
import Nav from './Components/nav/nav'
import About from './Components/about/About'
import Experience from './Components/experience/experience'
import Services from './Components/services/Services'
import Portfolio from './Components/portfolio/portfolio'
import Testimonials from './Components/testimonials/Testimonials'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/footer'


const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
