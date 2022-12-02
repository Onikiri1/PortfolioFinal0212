import React from 'react'
import {FaBriefcase} from 'react-icons/fa'

export const Card = (props) => {
  return (
    <div className="timeline__item">
        <FaBriefcase size={25} className={props.icon}></FaBriefcase>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <p className="timeline__text">{props.desc}</p>
    </div>
  )
}

export default Card