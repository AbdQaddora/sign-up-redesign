import React from 'react'

import './style.css'
const GridContainer = ({ className = "", children }) => {
    return (
        <div className={`grid-container ${className}`}>
            {children}
        </div>
    )
}

export default GridContainer