import React from 'react'
import { Body3 } from '../Typography';

const MyInput = ({ className = "", type = "text", value, onChange, name, label, placeholder, required }) => {
    return (
        <div className={`my-input ${className}`}>
            <label className='my-input-label' htmlFor={name}>
                <Body3 className='text-gray-1'>
                    {label}
                </Body3>
            </label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                id={name}
                placeholder={placeholder || label.toLowerCase()}
                required={required}
            />
        </div>
    )
}

export default MyInput