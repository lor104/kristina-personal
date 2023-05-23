import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
    return (
        <div className='home'>
            <div className='home__section'>
                <div className="section-divider">
                    <h1>Manual Osteopathy Treatments in Belleville</h1>
                    <p>Experience a whole body approach to healing pain, trauma, stress, and more.</p>
                </div>
                <div className="section-divider">
                    <Link className='button secondary' to="/about">Learn About Me</Link>
                    <Link className='button primary' to="/contact">Book an Appointment</Link>
                </div>
            </div>
            <div className="home__section">
                <h2>What is Osteopathy?</h2>
                <p>Osteopathy is a holistic whole-body approach that is adapted to each person at each visit. It is <span className='emphasis secondary'>a gentle and deeply effective form of manual therapy</span> that utilizes fascial release, oscillations, rhythmic joint movements, muscle energy, visceral work and other gentle techniques that address all aspects of hte body.</p>
                <p>The goal of osteopathy is to <span className='emphasis secondary'>alleviate restrictions within the body</span> including the health and function of joints, muscles, nerves, lymphatics, blood vessels and visceral organs. This assists the body to be in its optimum condition so that it can self-heal.</p>
            </div>
            <div className="home__section">
                <h2>What Types of Issues Can Osteopathy Help?</h2>
                <p>Osteopathic treatments are beneficial and effective at providing relief from most types of <span className="emphasis primary">pain, illness, injury, trauma and stress</span> including, but not limited to:</p>
                <div className='list__container'>
                    <ul className='list list--first'>
                        <li>neck and shoulder pain</li>
                        <li>back aches and pain</li>
                        <li>headaches and migraines</li>
                        <li>pain during pregnancy</li>
                    </ul>
                    <ul className='list list--second'>
                        <li>stress and tension</li>
                        <li>digestive issues</li>
                        <li>diarrhea and constipation</li>
                        <li>respiration and colds</li>
                    </ul>
                </div>
                <p>Osteopathy is <span className="emphasis primary">safe, efficient and appropriate for patients of all ages</span> from infants to the elderly.</p>
                <Link className='button primary' to="/contact">Book an Appointment</Link>
            </div>
            <div className="home__section">
                <h2>Origin of Osteopathic Medicine</h2>
                <p>
                Osteopathy, also known as Osteopathic Medicine, was founded by the renowned American physician, Dr. Andrew Taylor Still, who put forth a series of principles which Osteopaths are still guided by today. <span className="emphasis secondary">Osteopathic principles treat the body as a complete and harmonious unit (mind, body, and spirit)</span>. This understanding supports the interrelated systems of structure (Anatomy) and function (Physiology) which assists the body in self-regulating and self-healing.
                </p>
                <p>
                Osteopaths are highly trained in Anatomy, Bio-Mechanics and Physiology and work with the natural motions of all parts of the body. All of our joints and muscles move in a certain way, and breath creates movement throughout the body which massages the organs while the heart pumps blood creating motion in the tissues.
                </p>
                <p>
                <span className="emphasis secondary">All parts and processes in our beautiful body continuously move and work together perfectly.</span>
                </p>
                <Link className='button secondary' to="/about">Learn About Me</Link>
            </div>
        </div>
    )
}

export default Home