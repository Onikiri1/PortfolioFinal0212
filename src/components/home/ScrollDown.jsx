import React from 'react'

export const ScrollDown = () => {
  return (
    <div className='scroll__down'>
        <a href='#Sobre mi' className='mouse__wrapper'>
            <span className='home__scroll-name'>Desliza!</span>
            <span className='mouse'>
            <span className='wheel'></span>
            </span>
        </a>
    </div>
  )
}

export default ScrollDown