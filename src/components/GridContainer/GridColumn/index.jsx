import React from 'react'

import './style.css'
const GridColumn = ({ className = "", children, style }) => {
    return (
        <div className={`grid-column ${className}`} style={style}>{children}</div>
    )
}

export default GridColumn