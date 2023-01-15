import React from 'react'
import { Navigate } from 'react-router-dom';
import { getUserFromSessionStorage } from '../../session'

const AdminRoute = ({ children }) => {
    const user = getUserFromSessionStorage();
    if (user.isAdmin) {
        return children
    }

    return (
        <Navigate to="/"/>
    )
}

export default AdminRoute