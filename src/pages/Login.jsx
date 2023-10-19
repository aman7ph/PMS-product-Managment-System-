import React from 'react';
import Nav from '../componetes/Nav';
import LoginForm from '../componetes/LoginForm';

const Login = () => {
    return (
        <div className="app__flex">
            <Nav />
            <LoginForm />
        </div>
    );
};

export default Login;
