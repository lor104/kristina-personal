import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact">
      <div className="contact__section">
        <h2>How To Book An Appointment</h2>
        <div className="contact__inner-section">
          <h3><span>Option One</span></h3>
          <p>You can call me at <Link to="tel:4165880642">416.588.0642</Link></p>
          <Link className='button' to="tel:4165880642">Click to Call</Link>
        </div>
        <div className="contact__inner-section">
        <h3><span>Option Two</span></h3>
          <p>You can send me an <Link to="mailto:kristinabeau17@gmail.com?subject=Book Appointment">email</Link></p>
          <Link className='button secondary' to="mailto:kristinabeau17@gmail.com?subject=Book Appointment">Click to Email</Link>
        </div>
      </div>
      <div className="contact__section">
        <h2>Clinic Location:</h2>
        <h3 className='primary'>Belleville Ostepathy</h3>
        <p>
            Harbourview Business Centre <br />
            11 Bay Bridge Road, Unit 220 <br />
            Belleville, ON | K8P 3P6
        </p>
        <Link className="button primary" target="_blank" to="https://www.google.com/maps/dir//11+Bay+Bridge+Rd+%23220,+Belleville,+ON+K8P+3P6/@44.1571199,-77.3908541,17z/data=!4m17!1m7!3m6!1s0x89d62551b92d5c33:0x610a6a6331f86805!2s11+Bay+Bridge+Rd+%23220,+Belleville,+ON+K8P+3P6!3b1!8m2!3d44.1571199!4d-77.3882792!4m8!1m0!1m5!1m1!1s0x89d62551b92d5c33:0x610a6a6331f86805!2m2!1d-77.3882792!2d44.1571199!3e2?entry=ttu">Get Directions</Link>
      </div>
      <div className="contact__section">
        <h2>Home Clinic Location:</h2>
        <h3 className='secondary'>Stirling Rawdon</h3>
        <p>To learn more or set up a treatment at the home clinic please send me a detailed request by email.</p>
        <Link className='button secondary' to="mailto:kristinabeau17@gmail.com?subject=Book Appointment">Click to Email</Link>
      </div>
    </div>
  )
}

export default Contact