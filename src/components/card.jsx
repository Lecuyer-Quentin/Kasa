import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Card({ cardData, update }) {
    // update est la fonction qui permet de récupérer les données de la card au clic
    const { title, cover, id } = cardData;
   
    const handleClick = () => {
        const newData = cardData;
        update(newData);
    }

    return (
        <NavLink to={`/Logement/${id}`} className="card" onClick={handleClick}>
                <img className="card__img" src={cover} alt={title} />
                <span className="windows"></span>
                <p className="card__title" >{cardData.title}</p>
        </NavLink>  
    )
 }