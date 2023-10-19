import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="app__hero">
            <div className="app__hero-ca">
                <h2 className="head-text">
                    The product <span>management</span> system that helps you{' '}
                    <span>succeed</span>
                </h2>
                <Link to="/login">login</Link>
            </div>
            <div className="app__hero-img">
                <img src="hero.png" alt="hero" />
            </div>
        </div>
    );
};

export default Hero;
