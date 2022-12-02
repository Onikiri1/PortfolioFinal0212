import React from 'react';
import './about.css';
import Image from '../../assets/avatar-2.png';
import AboutBox from './AboutBox.jsx'


export const About = () => {
  return (
   <section className='about container section' id='Sobre mi'>
    <h2 className='section__title'>Sobre Mi</h2>

    <div className='sobremicontainer grid'>
       <img src={Image} alt="" className="about__img" />

      <div className='about__data grid'>
        <div className='about__info'>
          <p className='about__description'>Actualmente poseo mas de 4 años de experiencia trabajando en el area audivisual, tengo conocimiento casi completo en la suite de adobe, tambien realizando ediciones en 3D y 2D.</p>
          <a href='#Contacto' className='btn'>Contactame</a>
        </div>

        <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__title">
              <h3 className="skills__name">Photoshop</h3>
              <span className="skills__number">90%</span>
            </div>

            <div className="skills__bar">
              <div className="span skill__percentage primerbloque"></div>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__title">
              <h3 className="skills__name">Blender</h3>
              <span className="skills__number">60%</span>
            </div>

            <div className="skills__bar">
              <div className="span skill__percentage segundobloque"></div>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__title">
              <h3 className="skills__name">Premiere</h3>
              <span className="skills__number">86%</span>
            </div>

            <div className="skills__bar">
              <div className="span skill__percentage tercerbloque "></div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <AboutBox/>
   </section>
 
  )
}

export default About