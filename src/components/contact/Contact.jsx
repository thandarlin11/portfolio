import React from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {FaFacebookMessenger} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l6d9zbe', 'template_f8amasu', form.current, '4XW50SNi7xiH_BN1t');

    e.target.reset();
  };

  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">

          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>thandarlin@easysheets.net</h5>
            <a href ="mailto:thandarlin@easysheets.net" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Message</h4>
            <h5>thandarlinttu@gmail.com</h5>
            <a href ="https://www.facebook.com/thandar.lin/" target="_blank">Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+959794870805</h5>
            <a href ="https://api.whatsappp.com/send?phone"target="_blank" >Send a message</a>
          </article>

        </div>
        {/* End of Contact Option */}
        <form ref={form} onSubmit ={sendEmail}>
          <input type ="text" name='name' placeholder='Your Full Name' required/>
          <input type ="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Meassage' required></textarea>
          <button type ='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;