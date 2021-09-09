import React from 'react';
import logo from '../logo.jpg';
import { Link } from 'react-router-dom';

export const SplashScreen = () => {
    return (
        <div className= "App-splash">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/home">Click Here</Link>
        </div>
    );
} 