import React from 'react'
import './style.css'

const Quote = ({ secondary }) => {
    return (
        <p className={`quote ${secondary ? "quote-secondary" : ""}`}>“</p>
    )
}

export default Quote