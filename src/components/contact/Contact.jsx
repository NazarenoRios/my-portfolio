import React, { useRef } from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9pe4ud7', 'template_w8cpmco', form.current, 'ntF9EYd2UMpFq3nzY');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Ponte en</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nazarenolrios@gmail.com</h5>
            <a href="mailto:nazarenolrios@gmail.com" target='_blank' rel='noreferrer'>Enviar mensaje</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Nazareno Rios</h5>
            <a href="https://m.me/nazareno.rios.1" target='_blank' rel='noreferrer'>Enviar mensaje</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+54 9 2216567792</h5>
            <a href="https://api.WhatsApp.com/send?phone=2216567792" target='_blank' rel='noreferrer'>Enviar mensaje</a>
          </article>
        </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Tu nombre completo' required/>
        <input type="email" name="email" placeholder='Tu email' required/>
        <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
        <button type="submit" className='btn btn-primary'>Enviar mensaje</button>
      </form>
      </div>
    </section>
  )
}

export default Contact