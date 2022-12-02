import React, {useState} from 'react';
import './portfolio.css';
import Menu from './Menu.jsx';
import {FaLink} from 'react-icons/fa'


export const Portfolio = () => {

  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
  }

  return (
    <section className="work container section" id="Portfolio">
      <h2 className="section__title">Mis trabajos</h2>
      <div className='work__filters'>
        <span className="work__item" onClick={() => setItems (Menu)}>All</span>
        <span className="work__item" onClick={() => filterItem ("Diseño")}>Diseño</span>
        <span className="work__item" onClick={() => filterItem ("Motion Graphics")}>Motion Graphics</span>
        <span className="work__item" onClick={() => filterItem ("3D Work")}>3D Work</span>
        <span className="work__item" onClick={() => filterItem ("Video")}>Video</span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const {id, image, title, category,link} = elem;
          return (
            <div className="work__card" key={id}>
              <div className="carta">
                <img classname='imagenculia' src={image} alt="work__img"/>
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} target='_blank' className="work__button">
                <FaLink size={30} className='icon'/>
              </a>
            </div>
          )
        })}
       
      </div>
    </section>
  )
}


export default Portfolio