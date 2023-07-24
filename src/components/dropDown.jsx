import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


export default function DropDown({name, dropDownData}){
    const [isOpen, setIsOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const toggleActive = () => setIsActive(!isActive);

    const handleClick = () => {
        toggle();
        toggleActive();
     }

    // Fonction qui permet de gérer le contenu du dropdown
    const renderContent = (drop, index) => {
        if (typeof drop === 'string') {
            return <p key={index}>{drop}</p>
        } else if (typeof drop === 'object') {
            return (
                <ul key={index}>
                    {Object.keys(drop).map((key, index) => (
                        <li key={index}>
                            {drop[key]}
                        </li>
                    ))}
                </ul>
            )
        }
     }

    return (
        <div className="dropdown">
            <header className={`dropdown__header ${isActive ? 'active' : ''}`} onClick={handleClick} >
                <h2>{name}</h2>
                <span className="dropdown__header--icon">
                    {isOpen ?
                        <FontAwesomeIcon icon={faChevronUp} /> :
                        <FontAwesomeIcon icon={faChevronDown} />
                    }
                </span>
            </header>
            {isOpen && (
                <div className="dropdown__content">
                    {renderContent(dropDownData)}
                </div>
            )}
        </div>
    )
}