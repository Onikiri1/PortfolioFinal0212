import React from 'react'
import {FaInstagram, FaTwitter, FaLinkedin, FaYoutube,FaBehanceSquare} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
   <div className='home__socials'>
    <a href='https://twitter.com/Onikir1' className='home__social-link' target="_blank"><FaTwitter/></a>
    <a href='https://www.instagram.com/onikirii1' className='home__social-link' target="_blank"><FaInstagram/></a>
    <a href='https://www.instagram.com/onikirii1' className='home__social-link' target="_blank"><FaLinkedin/></a>
    <a href='https://www.youtube.com/onikir1' className='home__social-link' target="_blank"><FaYoutube/></a>
    <a href='https://www.behance.net/Onikiri1' className='home__social-link' target="_blank"><FaBehanceSquare/></a>
   </div>
  )
}

export default HeaderSocials