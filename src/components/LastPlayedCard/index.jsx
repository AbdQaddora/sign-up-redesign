import React from 'react'
import { Body1 } from '../Typography'

// style
import './style.css'
const LastPlayedCard = ({img , text}) => {
    return (
        <div className='last-played__card'>
            <img src={img} alt="" />
            <Body1>{text}</Body1>
        </div>
    )
}

export default LastPlayedCard