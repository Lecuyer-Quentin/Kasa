import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



export default function Host({ host, rating}) {
    return (
         <div className="content__host">
                <img src={host.picture} alt="avatar"
                    onMouseOver={(e) => (e.target.style.transform = 'rotate(350deg)')}
                    onMouseOut={(e) => (e.target.style.transform = 'rotate(0deg)')}/>
                <p>{host.name}</p>

                <div className='content__host__rating'>
                     {Array.from({ length: 5 }).map((_, index) => (
                        <span key={index}>
                            <FontAwesomeIcon icon={faStar}
                                 className={index <= rating
                                     ? 'content__host__rating--star--active'
                                     : 'content__host__rating--star'}/> 
                        </span>
                     ))}
                </div>         
            </div>
     )
 }