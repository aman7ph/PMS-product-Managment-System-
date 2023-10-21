import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import About from './pages/About';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (
        <BrowserRouter className="app">
            <Routes>
                {/* <Route index element={<HomePage />} /> */}
                <Route index element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
