import React from 'react'
import { useParams } from 'react-router-dom'
import UserDetailsPage from './UserDetailsPage';

const UserDetails = () => {
    const { id } = useParams();
    return (
        <UserDetailsPage id={id} />
    )
}

export default UserDetails