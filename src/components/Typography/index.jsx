import React from 'react'
import './style.css'

export const H2 = ({ className = "", children }) => {
    return (
        <h2 className={className}>{children}</h2>
    )
}

export const H3 = ({ className = "", children }) => {
    return (
        <h3 className={className}>{children}</h3>
    )
}

export const Body1 = ({ className = "", children }) => {
    return (
        <p className={`body1 ${className}`}>{children}</p>
    )
}

export const Body2 = ({ className = "", children }) => {
    return (
        <p className={`body2 ${className}`}>{children}</p>
    )
}

export const Body3 = ({ className = "", children }) => {
    return (
        <p className={`body3 ${className}`}>{children}</p>
    )
}

