import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './app.css';
import About from './pages/About';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import { AuthContext } from './Context/AuthContext';

const App = () => {
    const { currentUser } = useContext(AuthContext);

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
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
