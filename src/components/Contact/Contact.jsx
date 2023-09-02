
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from 'emailjs-com'
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
// import Services from '../../pages/Services/Services'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_he9z5ib', 'template_ayeasjv', form.current, '1yG8nzLElCTNqEMId')
    .then((result) => {
      alert("Message sent Successfully");
  }, (error) => {
    alert("Message sent Unsuccessfully");
  });
  e.target.reset()
  };

  useEffect(() => {
    Aos.init({duration:2000});
},[]);

  return (
    <section id='contact' className='contact'>
      <h5 data-aos="fade-down">Get In Touch</h5>
      <h2 data-aos="fade-down">Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options" data-aos="fade-right">
          <artical className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>zakopin </h5>
          <a href="mailto:gunagantirajashekar@gmail.com" target="_blank">Send a message</a>
          </artical>
          <artical className="contact__option">
          <AiOutlineTwitter className='contact__option-icon'/>
          <h4>Twitter</h4>
          <h5>Zakopin</h5>
          <a href="https://twitter.com/" target="_blank">Send a message</a>
          </artical>
          <artical className="contact__option">
          <AiFillLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>Zakopin</h5>
          <a href="https://www.linkedin.com/" target="_blank">Send a message</a>
          </artical>
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos="fade-left">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" id="" placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='butn butn-primary' data-aos="fade-up">Send Message</button>
        </form>
      </div>
    </section>
    
  )
}

// export default Contact

export default Contact;
