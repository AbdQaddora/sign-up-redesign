import React from 'react'
// images
import avatar from '../../assets/images/avatar.jpg'

// style
import './style.css'
const Avatar = () => {
    return (
        <img className='avatar' src={avatar} alt="user avatar"/>
    )
}

export default Avatar