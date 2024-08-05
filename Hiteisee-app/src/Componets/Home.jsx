import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className="home">
                <div className="heading-home">
                    <p className='welcome'>Welcome to <span className='hiteisee'>Hiteisee</span></p>
                    <h1 className='text'>We help to grow your Business</h1>
                </div>
                <div className="button">
                  <Link to="/services" className="button-link">Explore Services</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
