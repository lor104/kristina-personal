import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__section">
            <Link className='footer__link'>Belleville Osteopathy</Link>
            <p>
                Harbourview Business Centre <br />
                220 Bay Bridge Road, Unit 11 <br />
                Belleville, ON | postalcode
            </p>
        </div>
        <div className="footer__section ">
            <Link className='footer__link' to="/">Home</Link>
            <Link className='footer__link' to="/about">Learn About Me</Link>
            <Link className='footer__link' to="contact">Get In Touch</Link>
        </div>
        <div className="footer__section">
            <Link className='footer__link button'>Book An Appointment</Link>
        </div>
    </footer>
  )
}

export default Footer