import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../../assets/Logo.png';
import {BiHome, BiUserPin,BiPalette,BiMailSend,BiTask} from 'react-icons/bi';
import {HiOutlineDocumentText, } from 'react-icons/hi'
import {HiBars3CenterLeft, } from 'react-icons/hi2'
import {MdOutlineRateReview} from 'react-icons/md'


const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
   return (
    <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href="#Inicio" className='nav__logo'>
        <img src={Logo} alt="" />
      </a>

      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#Inicio' className='nav__link'><BiHome size={25}/> 
              </a>
            </li>
            <li className='nav__item'>
              <a href='#Sobre mi' className='nav__link'> <BiUserPin size={25}/>
              </a>
            </li>
           
            <li className='nav__item'>
              <a href='#Habilidades' className='nav__link'><BiPalette size={25}/>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#Experiencia' className='nav__link'> <HiOutlineDocumentText size={25}/>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#Portfolio' className='nav__link'><BiTask size={25}/>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#Contacto' className='nav__link'><BiMailSend size={25}/>
              </a>
            </li>
          </ul>
        </div>
      </nav>

    <div className='nav__footer'>
    <span className='copyright'>&copy; 2022 </span>
    </div>

    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
      <HiBars3CenterLeft size={25}/>
    </div>
    </>
  )
}

export default Sidebar