import React from 'react'
import Cup from '../../components/Cup'
import { Body1, H4, SectionTitle } from '../../components/Typography';
// images
import tomb_raider from '../../assets/images/tomb-raider.jpg'
// style
import './style.css';

const MostRecent = () => {
    return (
        <div className='most-recent'>
            <SectionTitle>most recent trophy</SectionTitle>
            <div className="most-recent__card" style={{ background: `url(${tomb_raider})` }}>
                <Cup />
                <div className="card__header">
                    <H4>assassin's creed odyssey</H4>
                    <Body1>last played: 34 hours ago</Body1>
                </div>

                <div className="right_corner"></div>
                <div className="right_corner_angle1"></div>
                <div className="right_corner_angle2"></div>

                <div className="card__footer">
                    <H4>assassin's creed odyssey</H4>
                    <Body1>last played: 34 hours ago</Body1>
                </div>
            </div>
        </div>
    )
}

export default MostRecent