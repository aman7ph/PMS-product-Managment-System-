import React, { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { AuthContext } from '../Context/AuthContext';
import './LoginForm.scss';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPasssword] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: 'LOGIN', payload: user });
                navigate('/dashbord');
            })
            .catch((error) => {
                setError(true);
            });
    };

    return (
        <div className="app__login">
            <div className="app__login-body">
                <div className="app__login-form">
                    <header>Login</header>
                    <form>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            placeholder="Enter your email"
                        />
                        <input
                            onChange={(e) => {
                                setPasssword(e.target.value);
                            }}
                            type="password"
                            placeholder="Enter your password"
                        />
                        <input
                            type="button"
                            className="button"
                            value="LOGIN"
                            onClick={handleLogIn}
                        />

                        {error && (
                            <span className="error_message">
                                {' '}
                                wrong email or password
                            </span>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
