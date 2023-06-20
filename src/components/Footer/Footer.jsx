import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__section">
            <Link className='footer__link' target="_blank" to="https://www.google.com/maps/dir//11+Bay+Bridge+Rd+%23220,+Belleville,+ON+K8P+3P6/@44.1571199,-77.3908541,17z/data=!4m17!1m7!3m6!1s0x89d62551b92d5c33:0x610a6a6331f86805!2s11+Bay+Bridge+Rd+%23220,+Belleville,+ON+K8P+3P6!3b1!8m2!3d44.1571199!4d-77.3882792!4m8!1m0!1m5!1m1!1s0x89d62551b92d5c33:0x610a6a6331f86805!2m2!1d-77.3882792!2d44.1571199!3e2?entry=ttu">Belleville Osteopathy</Link>
            <p>
                Harbourview Business Centre <br />
                11 Bay Bridge Road, Unit 220 <br />
                Belleville, ON | K8P 3P6
            </p>
        </div>
        <div className="footer__section ">
            <Link className='footer__link' to="/">Home</Link>
            <Link className='footer__link' to="/about">Learn About Me</Link>
            <Link className='footer__link' to="/contact">Get In Touch</Link>
        </div>
        <div className="footer__section">
            <Link className='footer__link button'>Book An Appointment</Link>
        </div>
    </footer>
  )
}

export default Footer