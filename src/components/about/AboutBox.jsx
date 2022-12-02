import React from 'react'
import { AiFillFire, AiFillStar}  from 'react-icons/ai';
import { FaUserCheck} from 'react-icons/fa'
import {BsCollectionPlayFill} from 'react-icons/bs';

export const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
        <div className="about__box">
            <AiFillFire className='iconoab'/>
            <div>
                <h3 className="about__title">+100</h3>
                <span className="about__subtitle">Trabajos realizados!</span>
            </div>
        </div>

        <div className="about__box">
            <FaUserCheck className='iconoab'/>
            <div>
                <h3 className="about__title">+30</h3>
                <span className="about__subtitle">Clientes satisfechos!</span>
            </div>
        </div>

        <div className="about__box">
            <AiFillStar className='iconoab'/>
            <div>
                <h3 className="about__title">+20</h3>
                <span className="about__subtitle">Renders realizados!</span>
            </div>
        </div>

        <div className="about__box">
            <BsCollectionPlayFill className='iconoab'/>
            <div>
                <h3 className="about__title">+30</h3>
                <span className="about__subtitle">Videos editados!</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox