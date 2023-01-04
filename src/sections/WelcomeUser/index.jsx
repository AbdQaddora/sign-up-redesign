import React from 'react'
import Avatar from '../../components/Avatar'

// style
import './style.css'
const WelcomeUser = () => {
    return (
        <div className='welcome-user'>
            <p>Welcome back,
                <br />Jenny!</p>
            <Avatar />
        </div>
    )
}

export default WelcomeUser