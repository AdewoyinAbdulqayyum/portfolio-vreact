import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { FaWhatsapp } from "react-icons/fa"
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9s9awh8', 'template_ap8nruf', form.current,{
        publicKey: 'RNeoW19V-KTO5KEIJ'})

      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>adewoyinabdulqayyum1@gmail.com</h5>
            <a href="mailto:adewoyinabdulqayyum1@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/Abdulqayyum.Adewoyin" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
          <FaWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2347064780060</h5>
            <a href="https://api.whatsapp.com/send?phone+2347064780060" target="_blank">Send a message</a>
          </article>
        </div>

        {/* End of CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact