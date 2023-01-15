import React from 'react'
import { useParams } from 'react-router-dom'
import UserDetailsPage from './UserDetailsPage';

const UserDetails = ({navigate}) => {
    const { id } = useParams();
    return (
        <UserDetailsPage id={id} navigate={navigate} />
    )
}

export default UserDetails