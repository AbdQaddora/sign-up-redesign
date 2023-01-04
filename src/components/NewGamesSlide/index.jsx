import React from 'react'
import { H4 } from '../Typography';

// style
import './style.css'
const NewGamesSlide = ({ img, desc }) => {
    return (
        <div className='new-games-slide' style={{ background: `url(${img})` }}>
            <H4>{desc}</H4>
        </div>
    )
}

export default NewGamesSlide