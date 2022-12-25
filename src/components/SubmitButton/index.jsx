import React from 'react'

import './style.css'
const SubmitButton = ({ children }) => {
    return (
        <button className='btn submit-button' type="submit">
            {children}
        </button>
    )
}

export default SubmitButton