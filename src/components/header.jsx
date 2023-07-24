import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Header({ navLink, headerLogo }) {
    
    return (
        <header className='header' >
            <NavLink to="/">
                <img className="header__logo" src={headerLogo} alt="logo.png" />
            </NavLink>

            <nav className="header__nav">
                <NavLink className="header__nav--link" to="/">{navLink[0]}</NavLink>
                <NavLink className="header__nav--link" to="/APropos">{navLink[1]}</NavLink>
            </nav>
        </header>
    )
 }