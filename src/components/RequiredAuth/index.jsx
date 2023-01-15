import React from 'react'
import { Navigate } from 'react-router-dom'
import { getUserFromSessionStorage } from '../../session'

const RequiredAuth = ({ children }) => {
    const user = getUserFromSessionStorage();

    if (user) {
        return children
    }

    return (
        <Navigate to="/login" />
    )
}

export default RequiredAuth