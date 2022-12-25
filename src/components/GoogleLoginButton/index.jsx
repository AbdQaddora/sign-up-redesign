import React from 'react'

// images
import google from '../../assets/images/google-icon.png'
import { Body1 } from '../Typography'

// style
import './style.css'
const GoogleLoginButton = () => {
    return (
        <button className='btn social-media-btn google-login-button'>
            <img src={google} alt="google" />
            <Body1>login</Body1>
            <span></span>
        </button>
    )
}

export default GoogleLoginButton