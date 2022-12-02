import React from 'react';
import './home.css';
import Me from '../../assets/icon1.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown  from './ScrollDown';



const Home = () => {
  return (
    <section className='home container' id="Inicio">
      <div className='intro'>
        <img src={Me} alt="" className='home__img' />
        <h1 className='home__name'>Onikiri</h1>
        <span className='home__education' >
        Graphic Designer, Video editor 
        and
        Motion Designer.</span>
      <HeaderSocials/>
      <a href='#Contacto' className='btn'>Contactame!</a>
      <ScrollDown/>
      

      </div>
    </section>
  )
}
 
export default Home