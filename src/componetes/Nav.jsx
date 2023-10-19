import React, { useState } from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Nav = () => {
    const [toggle, setToggel] = useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <Link to="/">
                    <img src="logo.png" alt="logo" />
                </Link>
            </div>
            <ul className="app__navbar-links">
                {['about', 'login'].map((el, index) => (
                    <li key={index} className="app__flex p-text">
                        <div />
                        <Link to={`/${el}`}>{el}</Link>
                    </li>
                ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggel(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeInOut' }}
                    >
                        <HiX onClick={() => setToggel(false)} />
                        <ul>
                            {['about', 'login'].map((el, index) => (
                                <li key={`index-${index}`}>
                                    <Link
                                        to={`/${el}`}
                                        onClick={() => setToggel(false)}
                                    >
                                        {el}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Nav;
