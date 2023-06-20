import React from 'react';
import logo_img from '../../assets/images/Kristina-Logo-no-text.png'
import './Logo.scss';

function Logo() {
  return (
    <div className='logo'>
        <img src={logo_img} alt="" />
        <p className='allura'>Kristina A. Beaubien</p>
        <p className='mont'>Manual Osteopathy <span>|</span> Registered Massage Therapy</p>
    </div>
  )
}

export default Logo