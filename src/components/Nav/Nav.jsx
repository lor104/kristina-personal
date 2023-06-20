import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

import './Nav.scss';

function Nav() {
  return (
    <div className='nav'>
        <Logo />
        <ul className='nav__list'>
            <li className='nav__list-item'>
                <NavLink className={
                    ({isActive}) => isActive 
                    ? "nav__link nav__link--active"
                    : "nav__link"
                } to="/" >Home</NavLink>
            </li>
            <li className='nav__list-item'>
                <NavLink className={
                    ({isActive}) => isActive 
                    ? "nav__link nav__link--active"
                    : "nav__link"
                } to="/about" >About</NavLink>
            </li>

            <li className='nav__list-item'>
                <NavLink className={
                    ({isActive}) => isActive 
                    ? "nav__link nav__link--active"
                    : "nav__link"
                } to="/contact" >Contact</NavLink>
            </li>

        </ul>
    </div>

  )
}

export default Nav