import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DashboardNav.scss';
import { AuthContext } from '../Context/AuthContext';

const DashboardNav = () => {
    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogOut = (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN', payload: null });
        navigate('/');
    };

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <Link to="/">
                    <img src="logo.png" alt="logo" />
                </Link>
            </div>
            <div className="app__nav-logout">
                <div></div>
                <button onClick={handleLogOut}>Logout</button>
            </div>
        </nav>
    );
};

export default DashboardNav;
