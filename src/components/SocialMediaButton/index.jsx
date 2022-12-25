import React from 'react'

import './style.css'
const SocialMediaButton = ({ img, alt }) => {
    return (
        <button className='btn social-media-btn'>
            <img src={img} alt={alt} />
        </button>
    )
}

export default SocialMediaButton