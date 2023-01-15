import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../components/Avatar'
import { getUserFromSessionStorage } from '../../session'

// style
import './style.css'
const WelcomeUser = () => {
    const user = getUserFromSessionStorage();
    return (
        <div className='welcome-user'>
            <Link to="/profile">
                <p>Welcome back,
                    <br />{user.name}</p>
            </Link>
            <Avatar />
        </div>
    )
}

export default WelcomeUser