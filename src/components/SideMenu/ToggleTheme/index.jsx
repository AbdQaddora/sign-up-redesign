import React, { Component } from 'react'

// images
import moon from '../../../assets/images/moon.png';
import sun from '../../../assets/images/sun.png';

// style
import './style.css';

const ToggleTheme = ({ toggleTheme, theme }) => {
    return (
        <button className={`toggle-theme ${theme}`} onClick={toggleTheme}>
            <img src={moon} alt="dark" />
            <img src={sun} alt="light" />
        </button>
    )
}

export default ToggleTheme