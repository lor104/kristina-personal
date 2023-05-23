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
            220 Bay Bridge Road, Unit 11 <br />
            Belleville, ON | postalcode
        </p>
        <Link className="button primary">Get Directions</Link>
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