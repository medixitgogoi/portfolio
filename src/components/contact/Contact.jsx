import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import './contact.css'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y6b6yeu', 'template_8hl23ea', form.current, 'stOL20Rdz3s-zhKkv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5 style={{ fontSize: "0.8rem" }}>Get in Touch</h5>
      <h2 style={{ fontSize: "1.2rem" }}>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kargildixit.32@gmail.com</h5>
            <a href="mailto:dixitgogoi2017@gmail.com" target="_blank">
              Send a mail
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Dixit Gogoi</h5>
            <a href="https://m.me/dixit.gogoi.9" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>6000578700</h5>
            <a href="https://wa.me/+916000578700" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea name='message' rows='7' placeholder="Your message for me" required />
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
