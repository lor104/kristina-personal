import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/images/kristina.jpg'
import './About.scss';

function About() {
  return (
    <div className='about'>
      <div className='about__section'>
        <h2>
          <span>A little bit about</span>
          My Journey in the Alternative Health Field
        </h2>
        <p>
          I began the exploration of the body and its amazing capacity to self-heal in 1996 when I graduated from Kikkawa Massage School in Toronto. I was fascinated by how the body works and felt drawn to learn more. From there, I deepened my understanding by studying Shiatsu with Ted Saito, followed by The Trager Approach, Myofascial work, and finally Osteopathy.
        </p>
        <p>I chose osteopathy because it offered a deeper and greater knowledge of how the body works, and how injury, illness, and trauma can affect it. Learning about the body and helping others to improve their physical health and wellbeing is deeply fulfilling to me and brings me great joy.</p>
        <Link className='button' to="/contact">Book an Appointment</Link>
      </div>
      <div className="about__section">
        <h2>Now Located in Belleville</h2>
        <p>Feeling the call to live surrounded by the beauty and quietude of nature, I recently relocated to the Bay of Quinte Region from Toronto, where I had a successful practice for over 25 years, and am now practicing out of Belleville. I am looking forward to joining the community here, building my practice and enjoying long hikes in this beautiful part of Ontario. </p>
        <img className='about__img' src={profile} alt="Kristina Beaubien in India" />
      </div>
    </div>
  )
}

export default About