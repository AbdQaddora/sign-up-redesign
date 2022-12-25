import React from 'react'
import { checkPasswordStrength } from '../../utils';

import './style.css';
const PasswordStrengthBar = ({ password }) => {
    return (
        <div className='password-strength'>
            <div className='password-strength__bar'>
                <div className={`password-strength__bar-value ${checkPasswordStrength(password)}`}></div>
            </div>
            <p className={`password-strength__text ${checkPasswordStrength(password)}`}>
                {checkPasswordStrength(password) === 'weak' ? "weak password you need to do it better" :
                    checkPasswordStrength(password) === 'medium' ? "Not bad but you know you can do it better"
                        : checkPasswordStrength(password) === 'strong' ? "nice choice" : "perfect password but make sure to remember it"
                }
            </p>
        </div>
    )
}

export default PasswordStrengthBar