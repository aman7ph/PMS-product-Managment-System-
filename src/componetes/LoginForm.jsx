import React from 'react';
import './LoginForm.scss';
const LoginForm = () => {
    return (
        <div className="app__login">
            <div class="app__login-form">
                <header>Login</header>
                <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <input type="password" placeholder="Enter your password" />
                    <input type="button" class="button" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
