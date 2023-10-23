import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './app.css';
import About from './pages/About';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import { AuthContext } from './Context/AuthContext';

const App = () => {
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        window.onbeforeunload = function (event) {
            if (event.type === 'beforeunload') {
                localStorage.clear();
            }
        };
    }, []);

    const RequiredAuth = ({ children }) => {
        return currentUser ? children : <Navigate to="/" />;
    };

    return (
        <BrowserRouter className="app">
            <Routes>
                <Route index element={<HomePage />} />
                <Route
                    path="/dashbord"
                    element={
                        <RequiredAuth>
                            <Dashboard />
                        </RequiredAuth>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route
                    path="/login"
                    element={currentUser ? <Dashboard /> : <Login />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
