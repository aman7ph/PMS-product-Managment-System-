import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardNav.scss';

const DashboardNav = () => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <Link to="/">
                    <img src="logo.png" alt="logo" />
                </Link>
            </div>
            <div className="app__nav-logout">
                <div></div>
                <button>Logout</button>
            </div>
        </nav>
    );
};

export default DashboardNav;
