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

export const H4 = ({ className = "", children }) => {
    return (
        <h4 className={className}>{children}</h4>
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

export const SectionTitle = ({ className = "", children }) => {
    return (
        <p className={`section-title ${className}`}>{children}</p>
    )
}

