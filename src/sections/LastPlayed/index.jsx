import React from 'react'
import LastPlayedCard from '../../components/LastPlayedCard'
import { SectionTitle } from '../../components/Typography'

// images
import hogwarts_legacy from '../../assets/images/hogwarts-legacy.jpg';
import god_of_war from '../../assets/images/god_of_war.jfif';
import crash from '../../assets/images/crash.jfif';
import dying_light from '../../assets/images/dying_light.jfif';

// style
import './style.css'

const games = [
    { img: hogwarts_legacy, text: "Hogwarts Legacy 50%" },
    { img: god_of_war, text: "God Of War: Ragnarök 72.5%" },
    { img: crash, text: "Crash Bandicoot N. Sane Trilogy 34%" },
    { img: dying_light, text: "Dying Light 2 Stay Human 100%" },
]
const LastPlayed = () => {
    return (
        <div className='last-played'>
            <SectionTitle>Last Played</SectionTitle>
            {games.map((game, index) => <LastPlayedCard key={index}
                img={game.img}
                text={game.text} />
            )}
        </div>
    )
}

export default LastPlayed