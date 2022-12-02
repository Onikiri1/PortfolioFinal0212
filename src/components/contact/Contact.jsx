import React from 'react';
import './contact.css';
import Shapes2 from './Shapes2';

export const Contact = () => {
  return (
    <section className="contact container section" id="Contacto">
      <h2 className='section__title'>Ponte en Contacto!</h2>
      <div className='contact__container grid'>
        <div className="contact__info">
          <h3 className="contact__title"> Cuentame que es lo que necesitas! </h3>
          <p className="contact__details">Deja aqui tus ideas.</p>
        </div>
      <form method="POST" action="https://getform.io/f/f29a5fac-9ec5-4b2d-aec2-ab06bcc9d006" className="contact__form">
        <div className="contact__form-group">
          <div className="contact__form-div">
            <input type="text" name='name' className="contact__form-input" placeholder='Nombre'/>
          </div>
          <div className="contact__form-div">
            <input type="email" name='email' className="contact__form-input" placeholder='Correo'/>
          </div>
        </div>
          <div className="contact__form-div contact__form-area">
            <textarea type='text' name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='...'></textarea>
          </div>

          <button type="sumbit" className='btn'>Contactame!</button>
      </form>
      </div>
    
    </section>
  
  )
}

export default Contact;