import React from 'react';
import './services.css';
import Image1 from '../../assets/ado1.png';
import Image2 from '../../assets/blender2.png';
import Image3 from '../../assets/service-3.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: "Suite Adobe",
    description:
      "Basto conocimiento en la suite de Adobe, deade Photoshop hasta Illustrator",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];



const Services = () => {
  return <section className='services container section' id= "Habilidades">
    <h2 className="section__title">Mis Especialidades</h2>
    <div className="services__container grid">
      {data.map(({id, image, title, description}) => {
        return (
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className='services__description'>{description}</p>
          </div>
        )
      })}
    </div>
  </section>
}

export default Services